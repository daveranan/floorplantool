import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Ray / axis-aligned-box intersection over a finite segment. Used only for view occlusion.
function segmentBox(origin, end, box) {
  let near = 0, far = 1;
  for (const key of ['x', 'y', 'z']) {
    const direction = end[key] - origin[key], low = box.min[key], high = box.max[key];
    if (Math.abs(direction) < 1e-8) { if (origin[key] < low || origin[key] > high) return null; continue; }
    let a = (low - origin[key]) / direction, b = (high - origin[key]) / direction;
    if (a > b) [a, b] = [b, a]; near = Math.max(near, a); far = Math.min(far, b);
    if (near > far) return null;
  }
  return near >= 0 && near <= 1 ? near : null;
}

// Labels use an existing horizontal slab or arrival landing, never the air over a stairwell.
function roomLabelSurface(room, level) {
  const surfaces = level.boxes.filter(box => (box.kind === 'slab' && (!box.room || box.room === room.id) || box.kind === 'landing') && Math.abs(box.z + box.height - room.z) < .01).map(box => {
    const x = Math.max(room.x, box.x), y = Math.max(room.y, box.y);
    return {x, y, w: Math.min(room.x + room.w, box.x + box.w) - x, h: Math.min(room.y + room.h, box.y + box.h) - y, z: box.z + box.height};
  }).filter(box => box.w > .35 && box.h > .35);
  const cx = room.x + room.w / 2, cy = room.y + room.h / 2;
  // Prefer the largest uninterrupted piece. Equal-area pieces prefer the room centre.
  return surfaces.sort((a, b) => b.w * b.h - a.w * a.h || Math.hypot(a.x + a.w / 2 - cx, a.y + a.h / 2 - cy) - Math.hypot(b.x + b.w / 2 - cx, b.y + b.h / 2 - cy))[0] || null;
}

function floorTextLayout(name, width, height, ctx) {
  let fontSize = Math.min(56, height * .42), lines = [];
  const measure = text => ctx.measureText?.(text).width ?? text.length * fontSize * .56;
  // Keep every character, including long unbroken names; reduce type rather than spill outside a room.
  for (let attempt = 0; attempt < 90; attempt++) {
    ctx.font = `600 ${fontSize}px system-ui`;
    lines = []; let line = '';
    for (const word of String(name).split(/\s+/)) {
      const joined = line ? line + ' ' + word : word;
      if (line && measure(joined) > width) {lines.push(line); line = word;} else line = joined;
    }
    if (line) lines.push(line);
    if (lines.every(text => measure(text) <= width) && lines.length * fontSize * 1.24 <= height) break;
    fontSize *= .92;
  }
  return {lines, fontSize, lineHeight: fontSize * 1.24};
}

// Receives an immutable geometry snapshot. No editor or storage access.
function mount(container, data, options = {}) {
  const renderer = new THREE.WebGLRenderer({antialias: true, alpha: false, preserveDrawingBuffer: true});
  let cleanupOnFailure = () => {renderer.setAnimationLoop(null); renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();};
  try {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.setClearColor(0x171c24);
  renderer.domElement.setAttribute('aria-label', '3D building preview. Left drag orbits, middle or right drag pans. Click a floor or its label to focus; Escape shows all.');
  renderer.domElement.tabIndex = 0; container.appendChild(renderer.domElement);
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(42, 1, .05, 5000);
  scene.add(new THREE.HemisphereLight(0xf3f7ff, 0x485363, 2.2));
  const light = new THREE.DirectionalLight(0xffffff, 2.5); light.position.set(-40, 80, -30); scene.add(light);
  const fill = new THREE.DirectionalLight(0xb7c8ec, .6); fill.position.set(40, 10, 60); scene.add(fill);
  const controls = new OrbitControls(camera, renderer.domElement);
  const releaseRenderer = cleanupOnFailure;
  cleanupOnFailure = () => {controls.dispose(); const geometries = new Set(), materials = new Set(), textures = new Set(); scene.traverse(node => {if (node.geometry) geometries.add(node.geometry); for (const material of Array.isArray(node.material) ? node.material : node.material ? [node.material] : []) {materials.add(material); if (material.map) textures.add(material.map);}}); for (const texture of textures) texture.dispose(); for (const material of materials) material.dispose(); for (const geometry of geometries) geometry.dispose(); scene.clear(); releaseRenderer();};
  controls.enableDamping = true; controls.dampingFactor = .09; controls.maxPolarAngle = Math.PI * .92;
  controls.minDistance = 1; controls.maxDistance = 1600; controls.screenSpacePanning = true;
  controls.mouseButtons = {LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.PAN, RIGHT: THREE.MOUSE.PAN};
  controls.touches = {ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN};
  const unit = new THREE.BoxGeometry(1, 1, 1), materials = new Map(), groups = new Map(), sprites = [], roomLabels = [], meshes = [], primaryMeshes = [], decorations = [];
  const material = (color, fade = false) => {
    const key = color + (fade ? ':xray' : '');
    if (!materials.has(key)) materials.set(key, new THREE.MeshStandardMaterial({color, roughness: .88, metalness: 0, transparent: fade, opacity: fade ? .5 : 1, depthWrite: !fade}));
    return materials.get(key);
  };
  const b = data.bounds, centerX = (b.minX + b.maxX) / 2, centerY = (b.minY + b.maxY) / 2, labelScale = Math.max(6, (b.maxX - b.minX) * .22);
  const ground = data.levels.find(l => l.id === 'L0'), groundZ = ground?.z ?? 0;
  const groundRank = ground ? data.levels.indexOf(ground) : data.levels.reduce((best, l, i) => Math.abs(l.z - groundZ) < Math.abs(data.levels[best].z - groundZ) ? i : best, 0);
  const levelBounds = level => {
    const boxes = level.boxes;
    return boxes.length ? {minX: Math.min(...boxes.map(q => q.x)), maxX: Math.max(...boxes.map(q => q.x + q.w)), minY: Math.min(...boxes.map(q => q.y)), maxY: Math.max(...boxes.map(q => q.y + q.h))} : b;
  };
  const roomLabel = (room, level, group) => {
    const surface = roomLabelSurface(room, level); if (!surface) return;
    const name = String(room.name || room.id), inset = Math.min(.32, Math.min(surface.w, surface.h) * .1);
    const rotate = surface.h > surface.w * 1.35, span = (rotate ? surface.h : surface.w) - inset * 2, cross = (rotate ? surface.w : surface.h) - inset * 2;
    const worldWidth = Math.min(span, 9), worldHeight = Math.min(cross, 2.5), density = 64;
    const canvas = document.createElement('canvas'); canvas.width = Math.ceil(worldWidth * density); canvas.height = Math.ceil(worldHeight * density);
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const layout = floorTextLayout(name, canvas.width - 10, canvas.height - 8, ctx);
    ctx.fillStyle = '#263545'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.strokeStyle = '#eef3f4'; ctx.lineWidth = Math.max(1, layout.fontSize * .045); ctx.lineJoin = 'round';
    layout.lines.forEach((text, index) => {
      const y = canvas.height / 2 + (index - (layout.lines.length - 1) / 2) * layout.lineHeight;
      ctx.strokeText?.(text, canvas.width / 2, y); ctx.fillText(text, canvas.width / 2, y);
    });
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(worldWidth, worldHeight), new THREE.MeshBasicMaterial({map: texture, transparent: true, alphaTest: .06, depthTest: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1}));
    mesh.rotation.set(-Math.PI / 2, 0, rotate ? Math.PI / 2 : 0);
    mesh.position.set(surface.x + surface.w / 2, surface.z + .006, surface.y + surface.h / 2); mesh.renderOrder = 2;
    mesh.userData = {level: level.id, roomLabel: true, room: room.id, name, surface, worldWidth, worldHeight, fontSize: layout.fontSize / density, lines: layout.lines};
    // Invalid overlapping room footprints must not print two names at the same location.
    mesh.userData.duplicate = roomLabels.some(label => label.userData.level === level.id && label.position.distanceTo(mesh.position) < .01);
    group.add(mesh); roomLabels.push(mesh);
  };
  for (let i = 0; i < data.levels.length; i++) {
    const level = data.levels[i], group = new THREE.Group(), bounds = levelBounds(level);
    group.userData = {id: level.id, rank: i - groundRank, z: level.z}; groups.set(level.id, group); scene.add(group);
    const batches = new Map();
    for (const box of level.boxes) {const key = `${box.color}:${box.kind}`; if (!batches.has(key)) batches.set(key, []); batches.get(key).push(box);}
    for (const boxes of batches.values()) {
      const mesh = new THREE.InstancedMesh(unit, material(boxes[0].color), boxes.length);
      mesh.frustumCulled = false; mesh.userData = {boxes, level: level.id, faded: new Set()}; group.add(mesh); meshes.push(mesh); primaryMeshes.push(mesh);
      if (boxes[0].kind === 'wall') {
        const fade = new THREE.InstancedMesh(unit, material(boxes[0].color, true), boxes.length);
        fade.frustumCulled = false; fade.renderOrder = 1; fade.userData = {boxes, level: level.id, primary: mesh, xray: true};
        mesh.userData.fadeMesh = fade; group.add(fade); meshes.push(fade);
      }
    }
    const outline = new THREE.Box3Helper(new THREE.Box3(new THREE.Vector3(bounds.minX, level.z + .04, bounds.minY), new THREE.Vector3(bounds.maxX, level.z + .07, bounds.maxY)), 0x7cc4ff);
    outline.visible = false; outline.material.depthTest = true; outline.material.transparent = true; outline.material.opacity = .95; outline.userData.floorHighlight = level.id;
    group.add(outline); decorations.push(outline);
    const canvas = document.createElement('canvas'); canvas.width = 640; canvas.height = 96;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#202936'; ctx.fillRect(0, 0, 640, 96); ctx.strokeStyle = '#465367'; ctx.strokeRect(1, 1, 638, 94);
      ctx.fillStyle = '#e7effc'; ctx.font = '500 34px system-ui'; ctx.fillText(`${level.id} · ${level.z > 0 ? '+' : ''}${level.z.toFixed(2)} m`, 18, 38);
      ctx.fillStyle = '#c9d4e4'; ctx.font = '30px system-ui'; ctx.fillText(String(level.name).slice(0, 40), 18, 77, 604);
      const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({map: texture, depthTest: true, depthWrite: false}));
      sprite.position.set(b.minX - labelScale * .65 - 1, level.z + .2, (bounds.minY + bounds.maxY) / 2); sprite.scale.set(labelScale, labelScale * 96 / 640, 1);
      sprite.userData = {level: level.id, floorLabel: true, labelWidth: 230, labelRatio: 96 / 640}; group.add(sprite); sprites.push(sprite);
      const leader = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(sprite.position.x + labelScale / 2, level.z + .2, sprite.position.z), new THREE.Vector3(bounds.minX, level.z + .07, sprite.position.z)]), new THREE.LineBasicMaterial({color: 0x7cc4ff, depthTest: true, transparent: true, opacity: .9}));
      leader.visible = false; leader.userData.floorLeader = level.id; group.add(leader); decorations.push(leader);
    }
    for (const room of level.rooms || []) roomLabel(room, level, group);
  }
  const size = Math.max(b.maxX - b.minX, b.maxY - b.minY, 15) * 1.35;
  const grid = new THREE.GridHelper(size, Math.min(100, Math.ceil(size)), 0x677b92, 0x303a48);
  grid.position.set(centerX, groundZ, centerY); grid.userData.groundDatum = groundZ; scene.add(grid);
  // Draw the datum before opaque slabs so coplanar grid lines never stripe room floors.
  grid.renderOrder = -10;
  for (const m of Array.isArray(grid.material) ? grid.material : [grid.material]) {m.transparent = false; m.opacity = 1; m.depthWrite = false;}
  let gap = 0, disposed = false, showWalls = true, cutaway = false, cutHeight = 1.15, labels = true, xray = false, showGrid = true, hovered = null, focused = null, overview = null, physical = [], lastOcclusion = '', clickStart = null, transition = null, interacting = false, xraySignature = '', xrayChangedAt = 0, xrayPending = false;
  const motionPreference = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const pointerIds = new Set(), raycaster = new THREE.Raycaster(), mouse = new THREE.Vector2();
  const visibleIds = () => [...groups].filter(([, group]) => group.visible).map(([id]) => id);
  const notifyVisibility = () => options.onVisibilityChanged?.(visibleIds(), focused);
  function heightFor(box, level) {let height = box.height; const wall = box.kind === 'wall' || box.kind === 'solid'; if (cutaway && wall) height = Math.max(0, Math.min(height, (box.baseZ ?? level.z) + cutHeight - box.z)); if (wall && !showWalls) height = 0; return height;}
  function updateMatrices() {
    const transform = new THREE.Object3D(); physical = [];
    for (const group of groups.values()) group.position.y = focused ? 0 : group.userData.rank * gap;
    grid.position.y = focused ? groups.get(focused).userData.z : groundZ;
    grid.userData.displayDatum = grid.position.y;
    for (const mesh of primaryMeshes) {
      const level = data.levels.find(l => l.id === mesh.userData.level), group = groups.get(level.id), fade = mesh.userData.fadeMesh;
      mesh.userData.boxes.forEach((box, index) => {
        const height = heightFor(box, level), faded = xray && mesh.userData.faded.has(index), set = (target, visible) => {
          const drawn = visible && height > .001;
          transform.position.set(box.x + box.w / 2, box.z + height / 2, box.y + box.h / 2);
          // A height-only collapse still draws wall caps on top of the slab (and floating lintel caps).
          // A hidden instance must have zero area on every axis, including unused X-ray partners.
          transform.scale.set(drawn ? box.w : 0, drawn ? height : 0, drawn ? box.h : 0);
          transform.updateMatrix(); target.setMatrixAt(index, transform.matrix);
        };
        set(mesh, !faded); if (fade) set(fade, faded);
        if (group.visible && height > .001) physical.push({mesh, index, kind: box.kind, level: level.id, min: {x: box.x, y: box.z + group.position.y, z: box.y}, max: {x: box.x + box.w, y: box.z + height + group.position.y, z: box.y + box.h}});
      });
      mesh.visible = mesh.userData.boxes.some((box, index) => heightFor(box, level) > .001 && !(xray && mesh.userData.faded.has(index)));
      mesh.instanceMatrix.needsUpdate = true;
      if (fade) {fade.visible = xray && mesh.userData.boxes.some((box, index) => heightFor(box, level) > .001 && mesh.userData.faded.has(index)); fade.instanceMatrix.needsUpdate = true;}
    }
    for (const sprite of sprites) sprite.visible = labels;
    for (const label of roomLabels) label.visible = labels && label.userData.level === focused && !label.userData.duplicate;
    scene.updateMatrixWorld(true); lastOcclusion = '';
  }
  function hoverFloor(id) {
    if (id && !groups.get(id)?.visible) id = null;
    if (id === hovered) return; hovered = id;
    for (const decoration of decorations) decoration.visible = (decoration.userData.floorHighlight || decoration.userData.floorLeader) === id;
    for (const sprite of sprites) sprite.material.color.set(sprite.userData.level === id ? 0x9ed8ff : 0xffffff);
    renderer.domElement.style.cursor = id ? 'pointer' : 'default'; options.onHover?.(id ? data.levels.find(l => l.id === id) : null);
  }
  function refreshOcclusion(force = false) {
    camera.updateMatrixWorld(true);
    const signature = [...camera.position.toArray(), ...camera.quaternion.toArray(), gap, showWalls, cutaway, cutHeight, labels, xray, focused, ...visibleIds()].join(':');
    if (!force && signature === lastOcclusion && !xrayPending) return;
    const stableSignature = [...camera.position.toArray().map(v => v.toFixed(2)), ...camera.quaternion.toArray().map(v => v.toFixed(3)), gap, showWalls, cutaway, cutHeight, xray, ...visibleIds()].join(':');
    if (stableSignature !== xraySignature) {xraySignature = stableSignature; xrayChangedAt = performance.now(); xrayPending = xray;}
    // Keep a steady set of transparent walls throughout an orbit or camera move.
    const updateXray = !xray || (!interacting && !transition && (force || performance.now() - xrayChangedAt >= 180));
    const faded = new Map(primaryMeshes.map(m => [m, new Set()]));
    if (updateXray && xray && showWalls) {
      for (const level of data.levels) {
        const group = groups.get(level.id); if (!group.visible) continue;
        const slabs = level.boxes.filter(q => q.kind === 'slab').sort((a, b) => b.w * b.h - a.w * a.h).slice(0, 12);
        for (const slab of slabs) for (const [u, v] of [[.5, .5], [.22, .22], [.78, .78]]) {
          const target = {x: slab.x + slab.w * u, y: slab.z + slab.height + .8 + group.position.y, z: slab.y + slab.h * v};
          let closest = null, distance = 1;
          for (const box of physical) {const hit = segmentBox(camera.position, target, box); if (hit !== null && hit > .00001 && hit < distance) {distance = hit; closest = box;}}
          if (closest?.kind === 'wall' && distance < .985) faded.get(closest.mesh).add(closest.index);
        }
      }
    }
    let changed = false;
    if (updateXray) {for (const mesh of primaryMeshes) {const next = faded.get(mesh), previous = mesh.userData.faded;if (next.size !== previous.size || [...next].some(i => !previous.has(i))) changed = true; mesh.userData.faded = next;} xrayPending = false;}
    if (changed) updateMatrices();
    // Keep text a readable screen size, suppress overlaps and respect solid occlusion.
    const occupied = [], width = Math.max(1, container.clientWidth), height = Math.max(1, container.clientHeight);
    for (const sprite of [...sprites].sort((a, b) => Number(!!a.userData.roomLabel) - Number(!!b.userData.roomLabel) || (b.userData.area || 0) - (a.userData.area || 0))) {
      const point = sprite.getWorldPosition(new THREE.Vector3());
      const cameraPoint = point.clone().applyMatrix4(camera.matrixWorldInverse), unitsPerPixel = 2 * Math.max(.1, -cameraPoint.z) * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / height;
      const worldWidth = Math.min(sprite.userData.labelWidth * unitsPerPixel, sprite.userData.maxWorldWidth || Infinity);
      sprite.scale.set(worldWidth, worldWidth * sprite.userData.labelRatio, 1);
      const projected = point.clone().project(camera), pixelWidth = worldWidth / unitsPerPixel, pixelHeight = pixelWidth * sprite.userData.labelRatio;
      const rect = {x: (projected.x + 1) * width / 2 - pixelWidth / 2, y: (1 - projected.y) * height / 2 - pixelHeight / 2, w: pixelWidth, h: pixelHeight};
      const collision = occupied.some(r => rect.x < r.x + r.w + 5 && rect.x + rect.w + 5 > r.x && rect.y < r.y + r.h + 5 && rect.y + rect.h + 5 > r.y);
      sprite.visible = labels && groups.get(sprite.userData.level).visible && (!sprite.userData.roomLabel || sprite.userData.level === focused) && cameraPoint.z < 0 && projected.z >= -1 && projected.z <= 1 && rect.x + rect.w > 0 && rect.y + rect.h > 0 && rect.x < width && rect.y < height && pixelWidth >= 58 && !collision && !physical.some(box => {const hit = segmentBox(camera.position, point, box); return hit !== null && hit > .00001 && hit < .995;});
      if (sprite.visible) occupied.push(rect);
      if (sprite.userData.floorLabel) {const leader = decorations.find(d => d.userData.floorLeader === sprite.userData.level); if (leader) {const attr = leader.geometry.attributes.position; attr.setX(0, sprite.position.x + worldWidth / 2); attr.needsUpdate = true; leader.visible = labels && sprite.visible && sprite.userData.level === hovered;}}
    }
    // Room names stay attached to their surfaces. The GPU clips individual glyphs behind walls,
    // stairs and upper slabs; no camera-facing scaling or billboard overlap suppression applies.
    for (const label of roomLabels) {
      const point = label.getWorldPosition(new THREE.Vector3());
      label.visible = labels && groups.get(label.userData.level).visible && label.userData.level === focused && !label.userData.duplicate && camera.position.y > point.y;
    }
    lastOcclusion = signature;
  }
  function cancelTransition() {if (transition?.returning) overview = null; transition = null;}
  function moveCamera(position, target, animate) {
    const currentPosition = camera.position.clone(), currentTarget = controls.target.clone(), damping = controls.enableDamping;
    // Consume OrbitControls inertia without changing the pose the next animation starts from.
    controls.enableDamping = false; controls.update(); camera.position.copy(currentPosition); controls.target.copy(currentTarget); controls.update(); controls.enableDamping = damping;
    transition = animate && !motionPreference?.matches ? {from: currentPosition, targetFrom: currentTarget, to: position.clone(), targetTo: target.clone(), start: performance.now(), duration: 420} : null;
    if (!transition) {camera.position.copy(position); controls.target.copy(target); camera.lookAt(target); controls.update(); refreshOcclusion(true);}
  }
  function advanceCamera(now = performance.now()) {
    if (!transition) return false;
    const motion = transition, t = motionPreference?.matches ? 1 : Math.min(1, Math.max(0, (now - motion.start) / motion.duration)), eased = t * t * (3 - 2 * t);
    camera.position.lerpVectors(motion.from, motion.to, eased); controls.target.lerpVectors(motion.targetFrom, motion.targetTo, eased); camera.lookAt(controls.target); camera.updateMatrixWorld(true);
    if (t === 1) {if (motion.returning) overview = null; transition = null; controls.update();}
    return true;
  }
  function fit(preserveDirection = false, animate = false) {
    const box = new THREE.Box3();
    for (const group of groups.values()) if (group.visible) {const level = data.levels.find(l => l.id === group.userData.id); for (const shape of level.boxes) {box.expandByPoint(new THREE.Vector3(shape.x, shape.z + group.position.y, shape.y)); box.expandByPoint(new THREE.Vector3(shape.x + shape.w, shape.z + shape.height + group.position.y, shape.y + shape.h));}}
    if (box.isEmpty()) {box.min.set(b.minX, b.minZ - groundRank * gap, b.minY); box.max.set(b.maxX, b.maxZ + (data.levels.length - 1 - groundRank) * gap, b.maxY);}
    const center = box.getCenter(new THREE.Vector3()), dimensions = box.getSize(new THREE.Vector3()), radius = Math.max(dimensions.length() / 2, 8), angle = THREE.MathUtils.degToRad(camera.fov / 2), distance = radius / Math.sin(angle) * Math.max(1, 1 / camera.aspect) * 1.1;
    const direction = preserveDirection ? camera.position.clone().sub(controls.target).normalize() : new THREE.Vector3(1, .9, 1.2).normalize();
    camera.near = .05; camera.far = Math.max(5000, distance * 5); camera.updateProjectionMatrix(); moveCamera(center.clone().add(direction.multiplyScalar(distance)), center, animate);
  }
  function showAll() {
    for (const group of groups.values()) group.visible = true; focused = null; hoverFloor(null); updateMatrices();
    if (overview) {moveCamera(overview.position, overview.target, true); if (transition) transition.returning = true; else overview = null;} else fit(false, true);
    notifyVisibility();
  }
  function isolate(id) {
    if (!groups.has(id) || focused === id) return; if (!focused && !overview) overview = {position: camera.position.clone(), target: controls.target.clone()};
    focused = id; for (const [key, group] of groups) group.visible = key === id; hoverFloor(null); updateMatrices(); fit(true, true); notifyVisibility();
  }
  function adjacentFloor(direction) {const index = data.levels.findIndex(l => l.id === focused), next = data.levels[index + Math.sign(direction)]; if (index >= 0 && next) isolate(next.id);}
  function hitFloor(event) {
    const rect = renderer.domElement.getBoundingClientRect(); if (!rect.width || !rect.height) return null;
    mouse.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1); camera.updateMatrixWorld(true); scene.updateMatrixWorld(true); raycaster.setFromCamera(mouse, camera);
    const targets = [...meshes, ...sprites, ...roomLabels].filter(o => o.visible && groups.get(o.userData.level)?.visible), hit = raycaster.intersectObjects(targets, false)[0];
    const levelId = hit?.object.userData.level, box = hit?.object.userData.boxes?.[hit.instanceId], roomId = hit?.object.userData.room || box?.room;
    const room = data.levels.find(level => level.id === levelId)?.rooms?.find(room => room.id === roomId);
    renderer.domElement.title = room ? room.name : '';
    return levelId || null;
  }
  const pointerDown = e => {pointerIds.add(e.pointerId); if (pointerIds.size > 1) clickStart = null; else clickStart = e.button === 0 ? {id: e.pointerId, x: e.clientX, y: e.clientY, moved: false} : null;};
  const pointerMove = e => {if (clickStart && Math.hypot(e.clientX - clickStart.x, e.clientY - clickStart.y) > 5) clickStart.moved = true; if (pointerIds.size || e.buttons) {renderer.domElement.title = ''; hoverFloor(null); return;} hoverFloor(hitFloor(e));};
  const pointerUp = e => {const click = clickStart && e.pointerId === clickStart.id && !clickStart.moved && Math.hypot(e.clientX - clickStart.x, e.clientY - clickStart.y) <= 5 && pointerIds.size === 1;pointerIds.delete(e.pointerId); clickStart = null; if (click) {const id = hitFloor(e); if (id) isolate(id);}};
  const blur = () => {pointerIds.clear();clickStart=null;interacting=false;cancelTransition();hoverFloor(null);};
  window.addEventListener('blur',blur);const releaseScene = cleanupOnFailure;cleanupOnFailure = () => {window.removeEventListener('blur',blur);releaseScene();};
  const pointerCancel = e => {pointerIds.delete(e.pointerId); clickStart = null; hoverFloor(null);}, pointerLeave = () => {if (!pointerIds.size) {renderer.domElement.title = ''; hoverFloor(null);}};
  const keyDown = e => {if (e.key === 'Escape' && focused) {e.preventDefault(); e.stopPropagation(); showAll();} else if (focused && ['ArrowUp', 'ArrowDown'].includes(e.key)) {e.preventDefault(); e.stopPropagation(); adjacentFloor(e.key === 'ArrowUp' ? 1 : -1);}}, contextMenu = e => e.preventDefault();
  const listeners = {pointerdown: pointerDown, pointermove: pointerMove, pointerup: pointerUp, pointercancel: pointerCancel, pointerleave: pointerLeave, keydown: keyDown, contextmenu: contextMenu};
  for (const [name, fn] of Object.entries(listeners)) renderer.domElement.addEventListener(name, fn);
  const resize = () => {if (disposed) return; const w = Math.max(1, container.clientWidth), h = Math.max(1, container.clientHeight); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); lastOcclusion = '';};
  const controlStart = () => {cancelTransition(); interacting = true;}, controlEnd = () => {interacting = false; xrayChangedAt = performance.now(); xrayPending = xray;};
  controls.addEventListener('start', controlStart); controls.addEventListener('end', controlEnd);
  const observer = new ResizeObserver(resize);
  const contextLost = e => {e.preventDefault(); options.onContextLost?.();}; renderer.domElement.addEventListener('webglcontextlost', contextLost);
  cleanupOnFailure = dispose;observer.observe(container); resize(); updateMatrices(); fit();
  renderer.setAnimationLoop(() => {if (disposed) return; if (!advanceCamera()) controls.update(); refreshOcclusion(); renderer.render(scene, camera);});
  function getViewState() {
    return {position: camera.position.toArray(), target: controls.target.toArray(), focused, visible: visibleIds(), gap, showWalls, cutaway, cutHeight, labels, xray, showGrid,
      overview: focused && overview ? {position: overview.position.toArray(), target: overview.target.toArray()} : null};
  }
  function restoreViewState(state) {
    if (!state || disposed) return; const vector = value => Array.isArray(value) && value.length === 3 && value.every(Number.isFinite);
    cancelTransition(); gap = Math.max(0, Math.min(12, Number(state.gap) || 0)); showWalls = state.showWalls !== false; cutaway = !!state.cutaway;
    cutHeight = Number.isFinite(state.cutHeight) ? Math.max(.4, Math.min(2.4, state.cutHeight)) : 1.15; labels = state.labels !== false; xray = !!state.xray; showGrid = state.showGrid !== false; grid.visible = showGrid;
    focused = groups.has(state.focused) ? state.focused : null; const ids = Array.isArray(state.visible) ? state.visible.filter(id => groups.has(id)) : [...groups.keys()];
    for (const [id, group] of groups) group.visible = focused ? id === focused : ids.includes(id);
    if (!focused && !ids.length && state.visible?.length) for (const group of groups.values()) group.visible = true;
    overview = focused && vector(state.overview?.position) && vector(state.overview?.target) ? {position: new THREE.Vector3().fromArray(state.overview.position), target: new THREE.Vector3().fromArray(state.overview.target)} : null;
    hoverFloor(null); updateMatrices();
    if (vector(state.position) && vector(state.target)) moveCamera(new THREE.Vector3().fromArray(state.position), new THREE.Vector3().fromArray(state.target), false); else fit();
    refreshOcclusion(true); notifyVisibility();
  }
  function dispose() {
    if (disposed) return; disposed = true; transition = null; renderer.setAnimationLoop(null); observer.disconnect(); controls.removeEventListener('start', controlStart); controls.removeEventListener('end', controlEnd); controls.dispose();
    for (const [name, fn] of Object.entries(listeners)) renderer.domElement.removeEventListener(name, fn);
    renderer.domElement.removeEventListener('webglcontextlost', contextLost);window.removeEventListener('blur',blur);
    for (const label of [...sprites, ...roomLabels]) {label.material.map.dispose(); label.material.dispose(); if (label.geometry && !label.isSprite) label.geometry.dispose();}
    for (const decoration of decorations) {decoration.geometry.dispose(); decoration.material.dispose();}
    for (const m of materials.values()) m.dispose(); unit.dispose(); grid.geometry.dispose();
    for (const m of Array.isArray(grid.material) ? grid.material : [grid.material]) m.dispose();
    renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove(); scene.clear(); pointerIds.clear(); overview = null;
  }
  return {
    fit, dispose, showAll, isolate, hoverFloor, adjacentFloor, getViewState, restoreViewState,
    zoomBy(factor) {if (!Number.isFinite(factor) || factor <= 0) return; const delta = camera.position.clone().sub(controls.target), distance = THREE.MathUtils.clamp(delta.length() * factor, controls.minDistance, controls.maxDistance); moveCamera(controls.target.clone().add(delta.normalize().multiplyScalar(distance)), controls.target, false);},
    setGrid(value) {showGrid = !!value; grid.visible = showGrid;},
    getFocusedFloor() {return focused;},
    setFloor(id, visible) {const group = groups.get(id); if (!group) return; cancelTransition(); group.visible = !!visible; focused = null; overview = null; hoverFloor(null); updateMatrices(); refreshOcclusion(true); notifyVisibility();},
    setExplode(value) {cancelTransition(); gap = Math.max(0, Math.min(12, Number(value) || 0)); hoverFloor(null); updateMatrices(); refreshOcclusion(true);},
    setWalls(value) {showWalls = !!value; updateMatrices(); refreshOcclusion(true);},
    setCutaway(value) {cutaway = !!value; updateMatrices(); refreshOcclusion(true);},
    setCutHeight(value) {const height = Number(value); if (!Number.isFinite(height)) return; cutHeight = Math.max(.4, Math.min(2.4, height)); updateMatrices(); refreshOcclusion(true);},
    setLabels(value) {labels = !!value; updateMatrices(); refreshOcclusion(true);},
    setXray(value) {xray = !!value; updateMatrices(); refreshOcclusion(true);},
    png() {refreshOcclusion(true); renderer.render(scene, camera); return new Promise((resolve, reject) => renderer.domElement.toBlob(blob => blob ? resolve(blob) : reject(Error('Could not create this image.')), 'image/png'));}
  };
  } catch (error) {try {cleanupOnFailure();} catch {} throw error;}
}
window.Building3D = {mount, version: THREE.REVISION};
