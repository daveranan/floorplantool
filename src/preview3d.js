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
  if(room.polygon&&window.KERN_SHAPES){const ps=(level.polygons||[]).filter(p=>p.kind==='slab'&&p.room===room.id);const contains=p=>ps.some(s=>window.KERN_SHAPES.contains(p,s.polygon)&&!(s.holes||[]).some(h=>window.KERN_SHAPES.contains(p,h)));const anchor=window.KERN_SHAPES.centroid(room);if(contains(anchor))return{x:anchor.x-Math.min(room.w,4)/2,y:anchor.y-Math.min(room.h,2)/2,w:Math.min(room.w,4),h:Math.min(room.h,2),z:room.z};return null;}const surfaces = level.boxes.filter(box => (box.kind === 'slab' && (!box.room || box.room === room.id) || box.kind === 'landing') && Math.abs(box.z + box.height - room.z) < .01).map(box => {
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
  renderer.domElement.setAttribute('aria-label', '3D building editor. Alt-left drag orbits; middle or right drag pans. Alt-right drag horizontally zooms at the starting pointer: right closer, left farther. Shift-click floor controls to show multiple floors; click a room to edit.');
  renderer.domElement.tabIndex = 0; container.appendChild(renderer.domElement);
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(42, 1, .05, 5000);
  scene.add(new THREE.HemisphereLight(0xf3f7ff, 0x485363, 2.2));
  const light = new THREE.DirectionalLight(0xffffff, 2.5); light.position.set(-40, 80, -30); scene.add(light);
  const fill = new THREE.DirectionalLight(0xb7c8ec, .6); fill.position.set(40, 10, 60); scene.add(fill);
  const controls = new OrbitControls(camera, renderer.domElement);
  const releaseRenderer = cleanupOnFailure;
  cleanupOnFailure = () => {controls.dispose(); const geometries = new Set(), materials = new Set(), textures = new Set(); scene.traverse(node => {if (node.geometry) geometries.add(node.geometry); for (const material of Array.isArray(node.material) ? node.material : node.material ? [node.material] : []) {materials.add(material); if (material.map) textures.add(material.map);}}); for (const texture of textures) texture.dispose(); for (const material of materials) material.dispose(); for (const geometry of geometries) geometry.dispose(); scene.clear(); releaseRenderer();};
  controls.enableDamping = true; controls.dampingFactor = .09; controls.maxPolarAngle = Math.PI-.001;
  controls.minDistance = 1; controls.maxDistance = 1600; controls.screenSpacePanning = true;
  controls.mouseButtons = {LEFT: null, MIDDLE: THREE.MOUSE.PAN, RIGHT: THREE.MOUSE.PAN};
  controls.touches = {ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN};
  const unit = new THREE.BoxGeometry(1, 1, 1), materials = new Map(), groups = new Map(), sprites = [], roomLabels = [], meshes = [], primaryMeshes = [], decorations = [], shapedMeshes = [];
  const material = (color, fade = false) => {
    const key = color + (fade ? ':xray' : '');
    if (!materials.has(key)) materials.set(key, new THREE.MeshStandardMaterial({color, roughness: .88, metalness: 0, transparent: fade, opacity: fade ? .5 : 1, depthWrite: !fade}));
    return materials.get(key);
  };
  const b = data.bounds, centerX = (b.minX + b.maxX) / 2, centerY = (b.minY + b.maxY) / 2, labelScale = Math.max(6, (b.maxX - b.minX) * .22);
  const ground = data.levels.find(l => l.id === 'L0'), groundZ = data.siteGroundZ ?? ground?.z ?? 0;
  const groundRank = ground ? data.levels.indexOf(ground) : data.levels.reduce((best, l, i) => Math.abs(l.z - groundZ) < Math.abs(data.levels[best].z - groundZ) ? i : best, 0);
  const levelBounds = level => {
    const boxes = [...level.boxes,...(level.polygons||[])];
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
    for (const box of [...level.boxes,...data.levels.flatMap(other=>other.id===level.id?[]:other.boxes.filter(b=>['stair','landing'].includes(b.kind)&&b.z<level.z&&data.stairs?.some(st=>st.connectionId===b.stair&&st.stops.some(stop=>stop.floor===level.id)&&b.z>=Math.max(...st.stops.filter(stop=>stop.z<level.z).map(stop=>stop.z))-.2)).map(b=>({...b,contextOnly:true})))]) {const key = `${box.color}:${box.kind}:${!!box.contextOnly}`; if (!batches.has(key)) batches.set(key, []); batches.get(key).push(box);}
    for (const boxes of batches.values()) {
      const mesh = new THREE.InstancedMesh(unit, material(boxes[0].color,boxes[0].kind==='window'), boxes.length);
      mesh.frustumCulled = false; mesh.userData = {boxes, level: level.id, faded: new Set()}; group.add(mesh); meshes.push(mesh); primaryMeshes.push(mesh);
      if (boxes[0].kind === 'wall') {
        const fade = new THREE.InstancedMesh(unit, material(boxes[0].color, true), boxes.length);
        fade.frustumCulled = false; fade.renderOrder = 1; fade.userData = {boxes, level: level.id, primary: mesh, xray: true};
        mesh.userData.fadeMesh = fade; group.add(fade); meshes.push(fade);
      }
    }
    for (const polygon of [...(level.polygons||[]),...data.levels.flatMap(other=>other.id===level.id?[]:(other.polygons||[]).filter(p=>p.z<level.z&&data.stairs?.some(st=>st.connectionId===p.stair&&st.stops.some(stop=>stop.floor===level.id)&&p.z>=Math.max(...st.stops.filter(stop=>stop.z<level.z).map(stop=>stop.z))-.2)).map(p=>({...p,contextOnly:true})))]) {
      const shape = new THREE.Shape(polygon.polygon.map(p => new THREE.Vector2(p[0], -p[1])));
      for(const hole of polygon.holes||[])shape.holes.push(new THREE.Path(hole.map(p=>new THREE.Vector2(p[0],-p[1]))));const geometry = new THREE.ExtrudeGeometry(shape, {depth: polygon.height, bevelEnabled: false, steps: 1});
      geometry.rotateX(-Math.PI / 2);
      const mesh = new THREE.Mesh(geometry, material(polygon.color,polygon.kind==='window'));mesh.position.y=polygon.z; mesh.userData = {level: level.id, stair: polygon.stair,sourceFloor:polygon.sourceFloor,door:polygon.door,contextOnly:!!polygon.contextOnly,room:polygon.room,kind:polygon.kind,shape:polygon};
      group.add(mesh); shapedMeshes.push(mesh);
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
    for (const annotation of level.annotations || []) {
      const name = String(annotation.text || ''), fontSize = annotation.fontSize || .45;
      if (!name) continue;
      const worldWidth = Math.min(30, Math.max(fontSize, name.length * fontSize * .58)), worldHeight = fontSize * 1.3;
      const canvas = document.createElement('canvas'); canvas.width = Math.ceil(worldWidth * 64); canvas.height = Math.ceil(worldHeight * 64);
      const ctx = canvas.getContext('2d'); if (!ctx) continue;
      ctx.font = `${fontSize * 64}px system-ui,Segoe UI,sans-serif`; ctx.fillStyle = '#53686d'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(name, canvas.width / 2, canvas.height / 2, canvas.width);
      const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
      const label = new THREE.Mesh(new THREE.PlaneGeometry(worldWidth, worldHeight), new THREE.MeshBasicMaterial({map: texture, transparent: true, alphaTest: .06, depthTest: true, depthWrite: false}));
      const source = level.rooms.find(r => r.id === annotation.sourceRoom) || level.rooms.find(r => annotation.x >= r.x && annotation.x <= r.x+r.w && annotation.y >= r.y && annotation.y <= r.y+r.h);
      label.rotation.x = -Math.PI / 2; label.position.set(annotation.x, (source?.z ?? level.z) + .008, annotation.y); label.renderOrder = 2;
      label.userData = {level: level.id, annotationLabel: true, annotation: annotation.id, name}; group.add(label); roomLabels.push(label);
    }
  }
  const size = Math.max(b.maxX - b.minX, b.maxY - b.minY, 15) * 1.35;
  const grid = new THREE.GridHelper(size, Math.min(100, Math.ceil(size)), 0x677b92, 0x303a48);
  grid.position.set(centerX, groundZ, centerY); grid.userData.groundDatum = groundZ; scene.add(grid);
  // Draw the datum before opaque slabs so coplanar grid lines never stripe room floors.
  grid.renderOrder = -10;
  for (const m of Array.isArray(grid.material) ? grid.material : [grid.material]) {m.transparent = false; m.opacity = 1; m.depthWrite = false;}
  let gap = 0, disposed = false, showWalls = true, showCeilings = false, showSlabs = true, cutaway = true, cutHeight = 1.15, labels = true, xray = false, showGrid = true, hovered = null, focused = null, physical = [], lastOcclusion = '', clickStart = null, transition = null, interacting = false, xraySignature = '', xrayChangedAt = 0, xrayPending = false;
  let navigationFloor = groups.has(options.activeFloor) ? options.activeFloor : ground?.id || data.levels[groundRank]?.id, navigationY = groups.get(navigationFloor)?.userData.z || 0;
  const floorY = id => {const group = groups.get(id); return group ? group.userData.z + group.userData.rank * gap : navigationY;};
  const motionPreference = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const pointerIds = new Set(), raycaster = new THREE.Raycaster(), mouse = new THREE.Vector2();
  const visibleIds = () => [...groups].filter(([, group]) => group.visible).map(([id]) => id);
  const notifyVisibility = () => options.onVisibilityChanged?.(visibleIds(), focused);
  function heightFor(box, level) {let height = box.height;if(box.contextOnly&&focused!==level.id)return 0;if(box.kind==='slab'&&(!walking||flyingView)&&!showSlabs)return 0;if(box.kind==='ceiling'&&(!walking||flyingView)&&(!showCeilings||cutaway))return 0; const wall = box.kind === 'wall' || box.kind === 'solid'; if (cutaway && wall) height = Math.max(0, Math.min(height, (box.baseZ ?? level.z) + cutHeight - box.z)); if (wall && !showWalls) height = 0; return height;}
  function updateMatrices() {
    const transform = new THREE.Object3D(); physical = [];
    for (const group of groups.values()) group.position.y = group.userData.rank * gap;
    grid.position.y = 0;
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
    for(const mesh of shapedMeshes){const shape=mesh.userData.shape,level=data.levels.find(l=>l.id===mesh.userData.level),height=heightFor(shape,level);mesh.scale.y=height/shape.height;mesh.visible=height>.001&&(!mesh.userData.contextOnly||focused===mesh.userData.level);}for (const sprite of sprites) sprite.visible = labels;
    for (const label of roomLabels) label.visible = labels  && !label.userData.duplicate;
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
    if(updateXray){const fadeShapes=new Set(),walls=shapedMeshes.filter(m=>m.userData.kind==='wall'&&m.visible&&groups.get(m.userData.level)?.visible);if(xray&&showWalls){for(const level of data.levels){if(!groups.get(level.id)?.visible)continue;for(const room of (level.rooms||[]).slice(0,20)){const p=window.KERN_SHAPES?window.KERN_SHAPES.centroid(room):{x:room.x+room.w/2,y:room.y+room.h/2},target=new THREE.Vector3(p.x,room.z+.8+groups.get(level.id).position.y,p.y),delta=target.clone().sub(camera.position),distance=delta.length();const ray=new THREE.Raycaster(camera.position,delta.normalize(),.05,distance-.05);const hit=ray.intersectObjects(walls,false)[0];if(hit)fadeShapes.add(hit.object);}}}for(const mesh of shapedMeshes)if(mesh.userData.kind==='wall')mesh.material=material(mesh.userData.shape.color,fadeShapes.has(mesh));}
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
      label.visible = labels && groups.get(label.userData.level).visible  && !label.userData.duplicate && camera.position.y > point.y;
    }
    lastOcclusion = signature;
  }
  function cancelTransition() {transition = null;}
  function moveCamera(position, target, animate, nextY = navigationY) {
    const currentPosition = camera.position.clone(), currentTarget = controls.target.clone(), damping = controls.enableDamping;
    // Consume OrbitControls inertia without changing the pose the next animation starts from.
    controls.enableDamping = false; controls.update(); camera.position.copy(currentPosition); controls.target.copy(currentTarget); controls.update(); controls.enableDamping = damping;
    transition = animate && !motionPreference?.matches ? {from: currentPosition, targetFrom: currentTarget, to: position.clone(), targetTo: target.clone(), datumFrom: navigationY, datumTo: nextY, start: performance.now(), duration: 420} : null;
    if (!transition) {navigationY = nextY; camera.position.copy(position); controls.target.copy(target); camera.lookAt(target); controls.update(); refreshOcclusion(true);}
  }
  function advanceCamera(now = performance.now()) {
    if (!transition) return false;
    const motion = transition, t = motionPreference?.matches ? 1 : Math.min(1, Math.max(0, (now - motion.start) / motion.duration)), eased = t * t * (3 - 2 * t);
    navigationY = THREE.MathUtils.lerp(motion.datumFrom, motion.datumTo, eased);
    camera.position.lerpVectors(motion.from, motion.to, eased); controls.target.lerpVectors(motion.targetFrom, motion.targetTo, eased); camera.lookAt(controls.target); camera.updateMatrixWorld(true);
    if (t === 1) {transition = null; controls.update();}
    return true;
  }
  function fit(preserveDirection = false, animate = false) {
    const box = new THREE.Box3();
    for (const group of groups.values()) if (group.visible) {const level = data.levels.find(l => l.id === group.userData.id); for (const shape of [...level.boxes,...(level.polygons||[])]) {box.expandByPoint(new THREE.Vector3(shape.x, shape.z + group.position.y, shape.y)); box.expandByPoint(new THREE.Vector3(shape.x + shape.w, shape.z + shape.height + group.position.y, shape.y + shape.h));}}
    if (box.isEmpty()) {box.min.set(b.minX, b.minZ - groundRank * gap, b.minY); box.max.set(b.maxX, b.maxZ + (data.levels.length - 1 - groundRank) * gap, b.maxY);}
    const center = box.getCenter(new THREE.Vector3()), dimensions = box.getSize(new THREE.Vector3()), radius = Math.max(dimensions.length() / 2, 8), angle = THREE.MathUtils.degToRad(camera.fov / 2), distance = radius / Math.sin(angle) * Math.max(1, 1 / camera.aspect) * 1.1;
    const direction = preserveDirection ? camera.position.clone().sub(controls.target).normalize() : new THREE.Vector3(1, .9, 1.2).normalize();
    camera.near = .05; camera.far = Math.max(5000, distance * 5); camera.updateProjectionMatrix(); moveCamera(center.clone().add(direction.multiplyScalar(distance)), center, animate, floorY(navigationFloor));
  }
  // Floor navigation translates both ends of the view by the same world-height delta.
  // The interpolated datum makes rapid reversals start at the actual camera pose.
  function followFloor(id, animate = true) {
    const nextY = floorY(id), delta = nextY - navigationY;
    navigationFloor = id;
    moveCamera(camera.position.clone().add(new THREE.Vector3(0, delta, 0)), controls.target.clone().add(new THREE.Vector3(0, delta, 0)), animate, nextY);
  }
  function showAll() {clearMarquee();if(authorDrag)cancelAuthor(true);if(editDrag)editCancel();
    cancelTransition(); for (const group of groups.values()) group.visible = true;
    focused = null; selectRoom(null,null); hoverFloor(null); updateMatrices(); refreshOcclusion(true); notifyVisibility();
  }
  function isolate(id) {clearMarquee();if(authorDrag)cancelAuthor(true);if(editDrag)editCancel();
    if (!groups.has(id) || focused === id&&visibleIds().length===1) return;
    selectRoom(null,null);focused = id; for (const [key, group] of groups) group.visible = key === id;
    hoverFloor(null); updateMatrices(); followFloor(id); notifyVisibility();selectRoom(id,null);
  }
  function activateFloor(id){if(!groups.has(id))return;if(focused!==id)window.KERN_CONNECTION_3D?.cancel();focused=id;navigationFloor=id;navigationY=floorY(id);hoverFloor(null);refreshOcclusion(true);notifyVisibility();}
  function chooseFloor(id,additive=false){if(!groups.has(id))return;if(!additive)return isolate(id);clearMarquee();cancelAuthor();editCancel();const group=groups.get(id);group.visible=!group.visible;if(!visibleIds().length)group.visible=true;selectRoom(null,null);activateFloor(group.visible?id:visibleIds()[0]);updateMatrices();}
  function syncActiveFloor(id) {
    if (groups.has(id) && id !== navigationFloor) activateFloor(id);
  }
  function adjacentFloor(direction) {const index = data.levels.findIndex(l => l.id === focused), next = data.levels[index + Math.sign(direction)]; if (index >= 0 && next) isolate(next.id);}
  let lastHit=null;function hitFloor(event) {
    const rect = renderer.domElement.getBoundingClientRect(); if (!rect.width || !rect.height) return null;
    mouse.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1); camera.updateMatrixWorld(true); scene.updateMatrixWorld(true); raycaster.setFromCamera(mouse, camera);
    const targets = [...meshes, ...shapedMeshes, ...sprites, ...roomLabels].filter(o => o.visible && groups.get(o.userData.level)?.visible), hit = raycaster.intersectObjects(targets, false)[0];
    const levelId = hit?.object.userData.level, box = hit?.object.userData.boxes?.[hit.instanceId], roomId = hit?.object.userData.room || box?.room;
    const room = data.levels.find(level => level.id === levelId)?.rooms?.find(room => room.id === roomId);
    renderer.domElement.title = room ? room.name : '';
    const sourceFloor=hit?.object.userData.sourceFloor||box?.sourceFloor||levelId;lastHit=hit?{floor:sourceFloor,displayFloor:levelId,door:hit.object.userData.door||box?.door,room:roomId||box?.rooms?.[0],point:hit.point}:null;return sourceFloor || null;
  }
  let selectedRoom=null,editDrag=null,selectionRecord=null;const editHandles=new THREE.Group();scene.add(editHandles);
  const heightReadout=document.createElement('div');heightReadout.style.cssText='position:absolute;left:18px;bottom:18px;padding:8px 12px;background:#172b37;color:#e7b16b;pointer-events:none;display:none';container.append(heightReadout);const elevationMaterial=new THREE.MeshBasicMaterial({color:0xe7b16b,transparent:true,opacity:.65,depthTest:false});
  const rotationArcMaterial=new THREE.LineDashedMaterial({color:0xe7b76e,dashSize:.18,gapSize:.12,depthTest:false});
  let dimensionAnchor=null;const dimensionReadout=document.createElement('div');dimensionReadout.dataset.selectionDimensions='true';dimensionReadout.style.cssText='position:absolute;pointer-events:none;display:none;padding:4px 7px;border-radius:4px;background:#172b37dd;color:#e7b76e;font:13px system-ui';container.append(dimensionReadout);function showDimensions(r){const f=r&&window.KERN_TRANSFORM?.frame(r),p=f?f.point(f.x+f.w/2,f.y+f.h):r?[r.x+r.w/2,r.y+r.h]:null;dimensionAnchor=r?{x:p[0],y:p[1],z:r.z+groups.get(r.floor).position.y,w:f?.w??r.w,h:f?.h??r.h}:null;updateDimensions();}function updateDimensions(){if(!dimensionAnchor||walking){dimensionReadout.style.display='none';return;}const a=dimensionAnchor,p=new THREE.Vector3(a.x,a.z,a.y).project(camera),rect=renderer.domElement.getBoundingClientRect();dimensionReadout.textContent=a.w.toFixed(2)+' × '+a.h.toFixed(2)+' m';dimensionReadout.style.display='block';dimensionReadout.style.left=Math.min(Math.max(6,(p.x+1)*rect.width/2-45),Math.max(6,rect.width-135))+'px';dimensionReadout.style.top=Math.min(Math.max(6,(1-p.y)*rect.height/2+15),Math.max(6,rect.height-28))+'px';}
  const gridCellMaterial=new THREE.MeshBasicMaterial({color:0xaaaaaa,transparent:true,opacity:.1,depthTest:false,depthWrite:false,side:THREE.DoubleSide});
  const snapMaterial=new THREE.LineBasicMaterial({color:0x53d2d9,depthTest:false});
  const handleMaterial=new THREE.MeshBasicMaterial({color:0x5aa9ff,depthTest:false});
  function selectRoom(fid,rid){showDimensions(null);selectionRecord=fid?{floor:fid,ids:rid?[rid]:[]}:null;while(editHandles.children.length){const c=editHandles.children[0];editHandles.remove(c);c.geometry.dispose();}const r=data.levels.find(l=>l.id===fid)?.rooms.find(r=>r.id===rid);const level=data.levels.find(l=>l.id===fid),b=level&&levelBounds(level);selectedRoom=groups.has(fid)?(r?{...r,floor:fid}:level?{id:null,isFloor:true,floor:fid,z:level.z,x:b.minX,y:b.minY,w:b.maxX-b.minX,h:b.maxY-b.minY}:null):null;if(!selectedRoom)return;drawHandles(selectedRoom);}
  function selectRooms(fid,ids){selectRoom(fid,ids[0]||null);selectionRecord={floor:fid,ids:[...ids]};if(ids.length<2)return;selectedRoom=null;while(editHandles.children.length){const m=editHandles.children[0];editHandles.remove(m);m.geometry.dispose();}const selected=data.levels.find(l=>l.id===fid)?.rooms.filter(r=>ids.includes(r.id))||[];for(const r of selected){const ps=window.KERN_SHAPES?.points(r)||[[r.x,r.y],[r.x+r.w,r.y],[r.x+r.w,r.y+r.h],[r.x,r.y+r.h]],line=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(ps.map(p=>new THREE.Vector3(p[0],r.z+groups.get(fid).position.y+.08,p[1]))),handleMaterial);line.renderOrder=10;editHandles.add(line);}if(selected.length){const x=Math.min(...selected.map(r=>r.x)),y=Math.min(...selected.map(r=>r.y));showDimensions({floor:fid,x,y,z:Math.min(...selected.map(r=>r.z)),w:Math.max(...selected.map(r=>r.x+r.w))-x,h:Math.max(...selected.map(r=>r.y+r.h))-y});}}
  function frameSelection(){if(!selectionRecord)return fit(true,true);const level=data.levels.find(l=>l.id===selectionRecord.floor);if(!level)return;const rooms=selectionRecord.ids.length?level.rooms.filter(r=>selectionRecord.ids.includes(r.id)):level.rooms;if(!rooms.length)return;const box=new THREE.Box3(),offset=groups.get(level.id).position.y;for(const r of rooms){box.expandByPoint(new THREE.Vector3(r.x,r.z+offset,r.y));box.expandByPoint(new THREE.Vector3(r.x+r.w,r.z+(r.height||level.height||3)+offset,r.y+r.h));}const center=box.getCenter(new THREE.Vector3()),radius=Math.max(2,box.getSize(new THREE.Vector3()).length()/2),distance=radius/Math.sin(THREE.MathUtils.degToRad(camera.fov/2))*Math.max(1,1/camera.aspect)*1.15,direction=camera.position.clone().sub(controls.target).normalize();moveCamera(center.clone().add(direction.multiplyScalar(distance)),center,true,floorY(level.id));}
  function drawHandles(r){showDimensions(r);while(editHandles.children.length){const c=editHandles.children[0];editHandles.remove(c);c.geometry.dispose();}const z=r.z+groups.get(r.floor).position.y+.08;if(!r.isFloor){const line=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints((window.KERN_SHAPES?.points(r)||[[r.x,r.y],[r.x+r.w,r.y],[r.x+r.w,r.y+r.h],[r.x,r.y+r.h]]).map(p=>new THREE.Vector3(p[0],z,p[1]))),handleMaterial);line.renderOrder=10;editHandles.add(line);for(const [edge,x,y]of (window.KERN_ROTATE?.active()&&window.KERN_ROTATE.eligibleRoom(r)?window.KERN_SHAPES.raw(r).map((p,i)=>['rotate-'+i,...p]):(window.KERN_TRANSFORM?.handles(r)||[['nw',r.x,r.y],['ne',r.x+r.w,r.y],['se',r.x+r.w,r.y+r.h],['sw',r.x,r.y+r.h]]).filter(h=>h[0].length===2))){const isPivot=edge.startsWith('rotate-')&&window.KERN_ROTATE?.pivotFor(r)?.index===Number(edge.slice(7));const h=new THREE.Mesh(new THREE.BoxGeometry(isPivot?.55:.35,.15,isPivot?.55:.35),isPivot?elevationMaterial:handleMaterial);h.position.set(x,z,y);h.userData.edge=edge;h.renderOrder=11;editHandles.add(h);}}
if(r.routeStair&&window.KERN_ROUTE_STAIRS){const q=r.routeStair,ns=q.nodes,heights=window.KERN_ROUTE_STAIRS.elevations(r,window.kernPlanner?.getPlan());for(let i=0;i<ns.length;i++){const p=window.KERN_ROUTE_STAIRS.point(r,ns[i]),height=heights[i],displayFloor=(i===0?q.start?.floor:i===ns.length-1?q.end?.floor:null)||r.floor,displayOffset=groups.get(displayFloor)?.position.y??groups.get(r.floor).position.y,zz=height+displayOffset;const h=new THREE.Mesh(new THREE.SphereGeometry(.23,10,8),handleMaterial);h.position.set(p[0],zz+.12,p[1]);h.userData.edge='route-node-'+i;h.userData.routeZ=height;h.userData.displayOffset=displayOffset;h.renderOrder=16;editHandles.add(h);const v=new THREE.Mesh(new THREE.ConeGeometry(.18,.45,8),elevationMaterial);v.position.set(p[0],zz+1,p[1]);v.userData.edge='route-height-'+i;v.userData.routeZ=height;v.userData.displayOffset=displayOffset;v.renderOrder=16;editHandles.add(v);if(i===(window.KERN_ROUTE_UI?.selectedNode??0))for(const [j,node]of (ns[i].landing||[]).entries()){const p=window.KERN_ROUTE_STAIRS.point(r,node),h=new THREE.Mesh(new THREE.BoxGeometry(.22,.15,.22),elevationMaterial);h.position.set(p[0],zz+.14,p[1]);h.userData.edge='route-landing-'+i+'-'+j;h.userData.routeZ=height;h.userData.displayOffset=displayOffset;h.renderOrder=17;editHandles.add(h);}}}
if(!r.isFloor&&!window.KERN_ROTATE?.active()){const h=new THREE.Mesh(new THREE.OctahedronGeometry(.28),handleMaterial);h.position.set(r.x+r.w/2,z,r.y+r.h/2);h.userData.edge='move';h.renderOrder=14;editHandles.add(h);}
if(!r.routeStair&&!window.KERN_ROTATE?.active()&&(r.isFloor||r.localSteps||window.KERN_ROTATE?.eligibleRoom(r))){const endpoint=r.localSteps&&window.KERN_ELEVATION_UI?.handlePoint(r.floor,r.id),x=endpoint?.x??r.x+r.w/2,y=endpoint?.y??r.y+r.h/2,base=(r.__elevation?r.z:window.KERN_ELEVATION_UI?.handleZ(r.floor,r.id)??r.z)+groups.get(r.floor).position.y;const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x,base,y),new THREE.Vector3(x,base+1.6,y)]),elevationMaterial);line.renderOrder=12;editHandles.add(line);const h=new THREE.Mesh(new THREE.ConeGeometry(.23,.55,8),elevationMaterial);h.position.set(x,base+1.6,y);h.userData.edge='elevate';h.renderOrder=13;editHandles.add(h);}}

  function editPoint(e,r){const rect=renderer.domElement.getBoundingClientRect();mouse.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);camera.updateMatrixWorld(true);scene.updateMatrixWorld(true);raycaster.setFromCamera(mouse,camera);return raycaster.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),-(r.z+groups.get(r.floor).position.y)),new THREE.Vector3());}
  let navigationPointer=null,navigationZoom=null,suppressNavigationMenu=0;
  const navigationDown=e=>{
    if(walking||!e.altKey||editDrag||authorDrag||![0,1,2].includes(e.button))return;
    // Explicit footprint handles retain Alt-centred resize; Alt-left elsewhere orbits.
    if(e.button===0&&selectedRoom&&authorMode==='select'){editPoint(e,selectedRoom);if(raycaster.intersectObjects(editHandles.children,false).some(hit=>['nw','ne','se','sw'].includes(hit.object.userData.edge)))return;}
    navigationPointer=e.pointerId;clickStart=null;pointerIds.clear();clearMarquee();cancelTransition();suppressNavigationMenu=performance.now()+500;
    controls.mouseButtons.LEFT=THREE.MOUSE.ROTATE;controls.mouseButtons.RIGHT=THREE.MOUSE.PAN;
    renderer.domElement.style.cursor=e.button===2?'ew-resize':'grabbing';e.__viewNavigation=true;e.preventDefault();
    if(e.button!==2){controls.enabled=true;return;}
    // Freeze inertia and resolve one world anchor under the initial pointer. Scaling
    // both camera and target about it preserves that exact screen location.
    moveCamera(camera.position.clone(),controls.target.clone(),false);
    hitFloor(e);
    const direction=camera.getWorldDirection(new THREE.Vector3());
    const anchor=lastHit?.point.clone()||raycaster.ray.intersectPlane(new THREE.Plane().setFromNormalAndCoplanarPoint(direction,controls.target),new THREE.Vector3())||controls.target.clone();
    navigationZoom={x:e.clientX,anchor,position:camera.position.clone(),target:controls.target.clone(),distance:camera.position.distanceTo(controls.target)};
    controls.enabled=false;renderer.domElement.setPointerCapture(e.pointerId);e.stopImmediatePropagation();
  };
  const navigationMove=e=>{
    if(navigationPointer!==e.pointerId||!navigationZoom)return;
    e.__viewNavigation=true;e.preventDefault();e.stopImmediatePropagation();
    const d=navigationZoom,factor=THREE.MathUtils.clamp(d.distance*Math.exp(-(e.clientX-d.x)*.01),controls.minDistance,controls.maxDistance)/d.distance;
    moveCamera(d.position.clone().sub(d.anchor).multiplyScalar(factor).add(d.anchor),d.target.clone().sub(d.anchor).multiplyScalar(factor).add(d.anchor),false);
    updateDimensions();
  };
  const navigationEnd=e=>{
    if(navigationPointer!==e.pointerId)return;
    const custom=!!navigationZoom;e.__viewNavigation=true;navigationPointer=null;navigationZoom=null;suppressNavigationMenu=performance.now()+400;
    controls.mouseButtons.LEFT=null;controls.mouseButtons.RIGHT=THREE.MOUSE.PAN;controls.enabled=!walking;window.KERN_TRANSFORM?.syncCursor();renderer.domElement.style.cursor='';
    if(custom){e.preventDefault();e.stopImmediatePropagation();if(renderer.domElement.hasPointerCapture(e.pointerId))renderer.domElement.releasePointerCapture(e.pointerId);}
  };
  renderer.domElement.addEventListener('pointerdown',navigationDown,true);renderer.domElement.addEventListener('pointermove',navigationMove,true);renderer.domElement.addEventListener('pointerup',navigationEnd,true);renderer.domElement.addEventListener('pointercancel',navigationEnd,true);renderer.domElement.addEventListener('lostpointercapture',navigationEnd,true);
  let authorMode='select',authorDrag=null;const authorGhost=new THREE.Group();authorGhost.userData.authorPreview=true;scene.add(authorGhost);
  function clearAuthorGhost(){while(authorGhost.children.length){const m=authorGhost.children[0];authorGhost.remove(m);m.geometry.dispose();}}
  function cancelAuthor(reset=false){const d=authorDrag;authorDrag=null;clearAuthorGhost();heightReadout.style.display='none';controls.enabled=!walking;if(d&&renderer.domElement.hasPointerCapture(d.pointerId))renderer.domElement.releasePointerCapture(d.pointerId);if(reset){window.KERN_CONNECTION_3D?.cancel();authorMode='select';editHandles.visible=!walking;}}
  function setAuthoringMode(mode){if(mode===authorMode)return;window.KERN_CONNECTION_3D?.cancel();cancelAuthor();if(mode!=='select'&&!focused)activateFloor(navigationFloor);authorMode=mode;editHandles.visible=mode==='select';renderer.domElement.title=mode==='edge-steps'?'Click a room edge and drag outward':mode==='steps'?'Draw between two different-height surfaces':mode==='room'?'Drag a room footprint':mode==='stairs'?'Draw a stair footprint, then choose destination floors':'';}
  function authorPoint(e,z){const rect=renderer.domElement.getBoundingClientRect();mouse.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);camera.updateMatrixWorld(true);raycaster.setFromCamera(mouse,camera);const p=raycaster.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),-z),new THREE.Vector3());return p?{x:p.x,y:p.z}:null;}
  function showAuthorPreview(q){clearAuthorGhost();heightReadout.style.display='block';heightReadout.style.left='18px';heightReadout.style.top='auto';heightReadout.style.bottom='18px';heightReadout.textContent=q.error||q.summary;if(q.error)return;const boxes=q.detail?[...q.detail.flights.flatMap(f=>f.treads.map(t=>({...t.rect,polygon:t.polygon,z:t.z-.12,height:.12}))),...q.detail.landings.map(l=>({...l.rect,polygon:l.polygon,z:l.z-.15,height:.15}))]:[{...q.room,z:data.levels.find(l=>l.id===q.fid).z-.15,height:.15}];for(const b of boxes){let geometry;if(b.polygon){const shape=new THREE.Shape(b.polygon.map(p=>new THREE.Vector2(p[0],-p[1])));geometry=new THREE.ExtrudeGeometry(shape,{depth:b.height,bevelEnabled:false});geometry.rotateX(-Math.PI/2);}else geometry=new THREE.BoxGeometry(b.w,b.height,b.h);const m=new THREE.Mesh(geometry,elevationMaterial);if(b.polygon)m.position.y=b.z+groups.get(q.fid).position.y;else m.position.set(b.x+b.w/2,b.z+b.height/2+groups.get(q.fid).position.y,b.y+b.h/2);m.renderOrder=14;authorGhost.add(m);}}
  function connectionHit(e,fallback=focused||navigationFloor){hitFloor(e);const fid=lastHit?.floor||fallback,level=data.levels.find(l=>l.id===fid);if(!level)return null;const p=lastHit?{x:lastHit.point.x,y:lastHit.point.z}:authorPoint(e,level.z+groups.get(fid).position.y);if(!p)return null;const worldPoint=lastHit?.point||new THREE.Vector3(p.x,level.z+groups.get(fid).position.y,p.y);return{floor:fid,room:lastHit?.room,door:lastHit?.door,p,worldPerPixel:2*camera.position.distanceTo(worldPoint)*Math.tan(camera.fov*Math.PI/360)/Math.max(1,renderer.domElement.getBoundingClientRect().height)};}
  function showConnectionPreview(q){clearAuthorGhost();heightReadout.style.display='block';heightReadout.style.left='18px';heightReadout.style.top='auto';heightReadout.style.bottom='18px';heightReadout.textContent=q.valid?(authorMode==='disconnect'?'Release to remove connection':'Click or release to place opening'):q.reason||'Choose a wall';const g=q.geometry;if(!g||!groups.has(q.fid))return;const a=g.axis==='poly'?g.p0:g.axis==='h'?[g.start,g.fixed]:[g.fixed,g.start],b=g.axis==='poly'?g.p1:g.axis==='h'?[g.end,g.fixed]:[g.fixed,g.end],sill=q.door?.kind==='window'?.9:0,h=q.door?.kind==='window'?1.4:2.2,z=q.z+sill+groups.get(q.fid).position.y,ps=[[a[0],z,a[1]],[b[0],z,b[1]],[b[0],z+h,b[1]],[a[0],z+h,a[1]]];const line=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(ps.map(p=>new THREE.Vector3(...p))),snapMaterial);line.renderOrder=20;authorGhost.add(line);}
  const authorDown=e=>{if(navigationPointer===e.pointerId||e.__viewNavigation||walking||authorMode==='select'||e.button!==0)return;e.preventDefault();e.stopImmediatePropagation();if(['door','connect','disconnect'].includes(authorMode)){const hit=connectionHit(e);if(!hit)return;activateFloor(hit.floor);authorDrag={connection:true,pointerId:e.pointerId,floor:hit.floor,begin:window.KERN_CONNECTION_3D.begin(authorMode,hit),last:hit,clientX:e.clientX,clientY:e.clientY};controls.enabled=false;renderer.domElement.setPointerCapture(e.pointerId);return;}if(!window.KERN_AUTHORING_3D)return;hitFloor(e);if(lastHit?.floor&&!(authorMode==='stair-route'&&window.KERN_ROUTE_UI?.getDraft().length))activateFloor(lastHit.floor);if(!focused)return;const level=data.levels.find(l=>l.id===(lastHit?.floor||focused)),source=level.rooms.find(r=>r.id===lastHit?.room)||(!selectedRoom?.isFloor?selectedRoom:null),z=(source?.z??level.z)+groups.get(level.id).position.y,p=authorPoint(e,z);if(!p)return;if(authorMode==='stair-route'){window.KERN_ROUTE_UI?.addPoint(p,e,source?.id,level.id);return;}const begin=window.KERN_AUTHORING_3D.begin(authorMode,focused,p,source?.id,window.KERN_AUTHORING_3D.width());if(begin.error){showAuthorPreview(begin);return;}authorDrag={pointerId:e.pointerId,z,begin,floor:focused};controls.enabled=false;renderer.domElement.setPointerCapture(e.pointerId);};
  const authorMove=e=>{if(authorDrag?.connection){if(e.pointerId!==authorDrag.pointerId)return;e.preventDefault();e.stopImmediatePropagation();authorDrag.last=connectionHit(e,authorDrag.floor)||authorDrag.last;authorDrag.moved=Math.hypot(e.clientX-authorDrag.clientX,e.clientY-authorDrag.clientY)>5;showConnectionPreview(window.KERN_CONNECTION_3D.preview(authorMode,authorDrag.last,authorDrag.moved?authorDrag.begin.hit:authorDrag.begin.pending));return;}if(!authorDrag){if(!walking&&navigationPointer===null&&['door','connect','disconnect'].includes(authorMode)){const hit=connectionHit(e);if(hit)showConnectionPreview(window.KERN_CONNECTION_3D.preview(authorMode,hit));return;}if(!walking&&navigationPointer===null&&focused&&['edge-steps','stair-route'].includes(authorMode)){hitFloor(e);const level=data.levels.find(l=>l.id===(lastHit?.floor||focused)),source=level.rooms.find(r=>r.id===lastHit?.room),z=(source?.z??level.z)+groups.get(level.id).position.y,p=authorPoint(e,z);clearAuthorGhost();if(!p)return;if(authorMode==='edge-steps'){const g=window.KERN_AUTHORING_3D.begin('edge-steps',focused,p,source?.id,window.KERN_AUTHORING_3D.width());if(!g.error){const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints([g.edge.a,g.edge.b].map(p=>new THREE.Vector3(p[0],z+.1,p[1]))),snapMaterial);line.renderOrder=18;authorGhost.add(line);}}else{const q=window.KERN_ROUTE_UI?.preview(p,e,source?.id,level.id);if(q){if(q.detail)showAuthorPreview(q);const step=window.snapSize?.()||.25,cell=new THREE.Mesh(new THREE.PlaneGeometry(step,step),gridCellMaterial);cell.rotation.x=-Math.PI/2;cell.position.set(q.point[0],z+.025,q.point[1]);cell.renderOrder=17;authorGhost.add(cell);const dot=new THREE.Mesh(new THREE.SphereGeometry(.07,10,8),handleMaterial);dot.position.set(q.point[0],z+.1,q.point[1]);dot.renderOrder=19;authorGhost.add(dot);}}}return;}if(e.pointerId!==authorDrag.pointerId)return;e.preventDefault();e.stopImmediatePropagation();if(authorDrag.floor!==focused){cancelAuthor();return;}const p=authorPoint(e,authorDrag.z);if(!p)return;authorDrag.next=window.KERN_AUTHORING_3D.candidate(authorDrag.begin,p,e.ctrlKey);showAuthorPreview(authorDrag.next);};
  const authorUp=e=>{if(!authorDrag||e.pointerId!==authorDrag.pointerId)return;e.preventDefault();e.stopImmediatePropagation();if(authorDrag.connection){const d=authorDrag;authorDrag=null;clearAuthorGhost();heightReadout.style.display='none';controls.enabled=true;if(renderer.domElement.hasPointerCapture(e.pointerId))renderer.domElement.releasePointerCapture(e.pointerId);window.KERN_CONNECTION_3D.finish(d.begin,d.last,d.moved);return;}const q=authorDrag.next;cancelAuthor();if(q&&!q.error){cancelAuthor(true);window.KERN_AUTHORING_3D.finish(q);}};
  renderer.domElement.addEventListener('pointerdown',authorDown,true);renderer.domElement.addEventListener('pointermove',authorMove,true);renderer.domElement.addEventListener('pointerup',authorUp,true);renderer.domElement.addEventListener('pointercancel',cancelAuthor,true);renderer.domElement.addEventListener('lostpointercapture',()=>{if(authorDrag)cancelAuthor();},true);
  const editDown=e=>{if(navigationPointer===e.pointerId||e.__viewNavigation||walking||e.button!==0||!selectedRoom)return;let p=editPoint(e,selectedRoom);const h=raycaster.intersectObjects(editHandles.children,false).find(h=>h.object.userData.edge);if(!h)return;if(Number.isFinite(h.object.userData.routeZ))p=editPoint(e,{...selectedRoom,z:h.object.userData.routeZ+(h.object.userData.displayOffset??groups.get(selectedRoom.floor).position.y)-groups.get(selectedRoom.floor).position.y})||h.point.clone();if(!p)p=h.point.clone();hitFloor(e);if(h.object.userData.edge?.startsWith('route-'))window.KERN_ROUTE_UI?.selectPoint(Number(h.object.userData.edge.split('-')[2]));if(window.KERN_ROTATE?.active()&&(!h||!window.KERN_ROTATE.eligibleRoom(selectedRoom)))return;let rotationPivot=null;if(h?.object.userData.edge?.startsWith('rotate-')){const index=Number(h.object.userData.edge.slice(7));rotationPivot=window.KERN_ROTATE.pivotFor(selectedRoom);if(!rotationPivot||rotationPivot.index===index){window.KERN_ROTATE.choosePivot(selectedRoom,'rooms',index);drawHandles(selectedRoom);e.preventDefault();e.stopImmediatePropagation();return;}}editDrag={rotationPivot,start:p.clone(),original:JSON.parse(JSON.stringify(selectedRoom)),next:JSON.parse(JSON.stringify(selectedRoom)),routeZ:h?.object.userData.routeZ,planeZ:Number.isFinite(h?.object.userData.routeZ)?h.object.userData.routeZ+(h.object.userData.displayOffset??groups.get(selectedRoom.floor).position.y)-groups.get(selectedRoom.floor).position.y:selectedRoom.z,edge:h?.object.userData.edge==='move'?null:h?.object.userData.edge,clientY:e.clientY,baseHeight:window.KERN_ELEVATION_UI?.handleZ(selectedRoom.floor,selectedRoom.id)??selectedRoom.z,baseGroupY:groups.get(selectedRoom.floor).position.y,pointerId:e.pointerId};controls.enabled=false;e.preventDefault();e.stopImmediatePropagation();renderer.domElement.setPointerCapture(e.pointerId);};
  const editMove=e=>{if(!editDrag)return;if(editDrag.pointerId!==e.pointerId)return;const p=editPoint(e,{...editDrag.original,z:editDrag.planeZ??editDrag.original.z})||((editDrag.edge==='elevate'||editDrag.edge?.startsWith('route-height'))?editDrag.start:null);if(!p)return;if(editDrag.edge?.startsWith('route-landing-')){const r=editDrag.original,n=JSON.parse(JSON.stringify(r)),parts=editDrag.edge.split('-'),i=Number(parts[2]),j=Number(parts[3]),node=n.routeStair.nodes[i].landing[j],a=window.KERN_ROUTE_STAIRS.point(r,node),step=e.ctrlKey?0:window.snapSize?.()??.25,x=a[0]+p.x-editDrag.start.x,y=a[1]+p.z-editDrag.start.z;Object.assign(node,window.KERN_ROUTE_STAIRS.local(r,[step?Math.round(x/step)*step:x,step?Math.round(y/step)*step:y]));if(window.KERN_ROUTE_STAIRS.simplePolygon(n.routeStair.nodes[i].landing.map(v=>window.KERN_ROUTE_STAIRS.point(n,v)))){editDrag.next=n;drawHandles(n);}e.preventDefault();e.stopImmediatePropagation();return;}if(editDrag.edge?.startsWith('route-')){const r=editDrag.original,n=JSON.parse(JSON.stringify(r)),q=n.routeStair,index=Number(editDrag.edge.split('-').at(-1)),node=q.nodes[index];if(editDrag.edge.startsWith('route-height')){const scale=2*camera.position.distanceTo(new THREE.Vector3(r.x+r.w/2,r.z+editDrag.baseGroupY,r.y+r.h/2))*Math.tan(camera.fov*Math.PI/360)/Math.max(1,renderer.domElement.getBoundingClientRect().height),raw=editDrag.routeZ+(editDrag.clientY-e.clientY)*scale,z=e.ctrlKey?raw:Math.round(raw*4)/4;window.KERN_ROUTE_STAIRS.setHeight(n,index,z,window.kernPlanner?.getPlan());}else{const a=window.KERN_ROUTE_STAIRS.point(r,node),step=e.ctrlKey?0:window.snapSize?.()??.25,x=a[0]+p.x-editDrag.start.x,y=a[1]+p.z-editDrag.start.z;const nextPoint=window.KERN_ROUTE_STAIRS.snapNode(n,index,[x,y],step,e.ctrlKey,e.shiftKey);window.KERN_ROUTE_STAIRS.moveNode(n,index,nextPoint,window.kernPlanner?.getPlan());window.KERN_ROUTE_UI?.attachEndpoint(n,index,nextPoint);}editDrag.next=n;drawHandles(n);const plan=window.kernPlanner?.getPlan();if(plan){const actual=plan.floors[r.floor]?.rooms.find(o=>o.id===r.id);if(actual){Object.assign(actual,n);const detail=window.KERN_ROUTE_STAIRS.build(plan,r.floor,r.id);showAuthorPreview({detail,fid:r.floor,summary:detail.warnings[0]?.text||'Editable stair route'});}}e.preventDefault();e.stopImmediatePropagation();return;}if(editDrag.edge==='elevate'){const r=editDrag.original,scale=2*camera.position.distanceTo(new THREE.Vector3(r.x+r.w/2,r.z+editDrag.baseGroupY,r.y+r.h/2))*Math.tan(camera.fov*Math.PI/360)/Math.max(1,renderer.domElement.getBoundingClientRect().height),raw=editDrag.baseHeight+(editDrag.clientY-e.clientY)*scale,step=e.ctrlKey?0:.25,z=Math.max(-150,Math.min(150,step?Math.round(raw/step)*step:raw));editDrag.next={...r,z,__elevation:true};heightReadout.style.display='block';heightReadout.style.top='auto';heightReadout.style.bottom='18px';heightReadout.style.left='18px';heightReadout.textContent=(r.isFloor?'Floor':'Surface')+' '+z.toFixed(2)+' m · '+(e.ctrlKey?'Free':'0.25 m snap · Ctrl: free');groups.get(r.floor).position.y=editDrag.baseGroupY;drawHandles(editDrag.next);if(r.isFloor)groups.get(r.floor).position.y=editDrag.baseGroupY+z-r.z;else{const preview=window.KERN_ELEVATION_UI?.preview(r.floor,r.id,z),detail=preview&&window.KERN_ELEVATIONS?.build(preview,r.floor,r.id),boxes=detail?[...detail.flights.flatMap(f=>f.treads.map(t=>({...t.rect,polygon:t.polygon,z:t.z-.12,height:.12}))),...detail.landings.map(l=>({...l.rect,polygon:l.polygon,z:l.z-.15,height:.15}))]:[{x:r.x,y:r.y,w:r.w,h:r.h,z:z-.18,height:.18}];for(const b of boxes){let geometry,mesh;if(!detail&&r.shape){const shape=new THREE.Shape(window.KERN_SHAPES.points(r).map(p=>new THREE.Vector2(p[0],-p[1])));geometry=new THREE.ExtrudeGeometry(shape,{depth:b.height,bevelEnabled:false,steps:1});geometry.rotateX(-Math.PI/2);mesh=new THREE.Mesh(geometry,elevationMaterial);mesh.position.y=b.z+editDrag.baseGroupY;}else{geometry=new THREE.BoxGeometry(b.w,b.height,b.h);mesh=new THREE.Mesh(geometry,elevationMaterial);mesh.position.set(b.x+b.w/2,b.z+b.height/2+editDrag.baseGroupY,b.y+b.h/2);}editHandles.add(mesh);}if(detail)heightReadout.textContent=z.toFixed(2)+' m · '+detail.segments[0].risers+' rises × '+(detail.metrics.riserMax*100).toFixed(1)+' cm · '+(e.ctrlKey?'Free':'0.25 m snap · Ctrl: free');}const measureX=r.x-.25,measureY=r.y+r.h+.25,z0=editDrag.baseHeight+editDrag.baseGroupY,z1=z+editDrag.baseGroupY,measure=[new THREE.Vector3(measureX,z0,measureY),new THREE.Vector3(measureX,z1,measureY)],line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(measure),rotationArcMaterial);line.computeLineDistances();line.renderOrder=16;editHandles.add(line);for(const height of [z0,z1]){const tick=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(measureX-.18,height,measureY),new THREE.Vector3(measureX+.18,height,measureY)]),handleMaterial);tick.renderOrder=16;editHandles.add(tick);}const screen=new THREE.Vector3(measureX,(z0+z1)/2,measureY).project(camera),rect=renderer.domElement.getBoundingClientRect(),difference=z-editDrag.baseHeight;heightReadout.style.bottom='auto';heightReadout.style.left=Math.min(Math.max(8,(screen.x+1)*rect.width/2+12),Math.max(8,rect.width-260))+'px';heightReadout.style.top=Math.min(Math.max(8,(1-screen.y)*rect.height/2),Math.max(8,rect.height-60))+'px';heightReadout.textContent=(difference>0?'+':'')+difference.toFixed(2)+' m · '+heightReadout.textContent;e.preventDefault();e.stopImmediatePropagation();return;}const r=editDrag.original,step=e.ctrlKey?0:window.snapSize?.()??.5,dx=step?Math.round((p.x-editDrag.start.x)/step)*step:p.x-editDrag.start.x,dy=step?Math.round((p.z-editDrag.start.z)/step)*step:p.z-editDrag.start.z,n={...r};if(editDrag.edge?.startsWith('rotate-')){const c=editDrag.rotationPivot||{x:r.x+r.w/2,y:r.y+r.h/2},a=Math.atan2(editDrag.start.z-c.y,editDrag.start.x-c.x),d=window.KERN_ROTATE.delta(r,(Math.atan2(p.z-c.y,p.x-c.x)-a)*180/Math.PI,e.shiftKey);window.KERN_SHAPES.rotate(n,d,c);editDrag.rotationFeedback={center:c,start:a,degrees:d,cursor:p.clone()};}else if(editDrag.edge){if(editDrag.edge.includes('e'))n.w=Math.max(1,r.w+dx);if(editDrag.edge.includes('s'))n.h=Math.max(1,r.h+dy);if(editDrag.edge.includes('w')){n.x=Math.min(r.x+r.w-1,r.x+dx);n.w=r.x+r.w-n.x;}if(editDrag.edge.includes('n')){n.y=Math.min(r.y+r.h-1,r.y+dy);n.h=r.y+r.h-n.y;}}else{n.x+=p.x-editDrag.start.x;n.y+=p.z-editDrag.start.z;const tolerance=9*2*camera.position.distanceTo(p)*Math.tan(camera.fov*Math.PI/360)/Math.max(1,renderer.domElement.getBoundingClientRect().height),hit=e.ctrlKey&&e.shiftKey&&!e.altKey&&window.KERN_ROOM_SNAP?.translation(n,data.levels.find(l=>l.id===r.floor).rooms,new Set([r.id]),tolerance);editDrag.snap=hit||null;if(hit){n.x+=hit.dx;n.y+=hit.dy;}else if(!e.ctrlKey){n.x=r.x+dx;n.y=r.y+dy;}}if(editDrag.edge&&!editDrag.edge.startsWith('rotate-')&&((e.shiftKey&&!e.ctrlKey)||e.altKey)&&window.KERN_TRANSFORM)Object.assign(n,window.KERN_TRANSFORM.resize(r,editDrag.edge,dx,dy,{...e,shiftKey:e.shiftKey&&!e.ctrlKey,altKey:e.altKey}));if(editDrag.edge&&!editDrag.edge.startsWith('rotate-')&&e.shiftKey&&e.ctrlKey&&!e.altKey){const edge=editDrag.edge,q={x:r.x+(edge.includes('e')?r.w:0)+p.x-editDrag.start.x,y:r.y+(edge.includes('s')?r.h:0)+p.z-editDrag.start.z},tolerance=9*2*camera.position.distanceTo(p)*Math.tan(camera.fov*Math.PI/360)/Math.max(1,renderer.domElement.getBoundingClientRect().height),hit=window.KERN_ROOM_SNAP?.point(q,data.levels.find(l=>l.id===r.floor).rooms,new Set([r.id]),tolerance);editDrag.snap=hit||null;if(hit){if(edge.includes('e'))n.w=Math.max(1,hit.x-r.x);if(edge.includes('s'))n.h=Math.max(1,hit.y-r.y);if(edge.includes('w')){n.x=Math.min(hit.x,r.x+r.w-1);n.w=r.x+r.w-n.x;}if(edge.includes('n')){n.y=Math.min(hit.y,r.y+r.h-1);n.h=r.y+r.h-n.y;}}}if(r.shape&&editDrag.edge&&!editDrag.edge.startsWith('rotate-')&&window.KERN_TRANSFORM?.orientedResize)Object.assign(n,window.KERN_TRANSFORM.orientedResize(r,editDrag.edge,p.x-editDrag.start.x,p.z-editDrag.start.z,e));editDrag.next=n;drawHandles(n);if(editDrag.rotationFeedback){const f=editDrag.rotationFeedback,c=f.center,length=Math.hypot(f.cursor.x-c.x,f.cursor.z-c.y),radius=Math.min(length,6)*.8,end=f.start+f.degrees*Math.PI/180,z=n.z+editDrag.baseGroupY+.12,arc=[];for(let i=0,count=Math.max(2,Math.min(160,Math.ceil(Math.abs(f.degrees)/5)));i<=count;i++){const a=f.start+(end-f.start)*i/count;arc.push(new THREE.Vector3(c.x+Math.cos(a)*radius,z,c.y+Math.sin(a)*radius));}const radial=[new THREE.Vector3(c.x+Math.cos(f.start)*length,z,c.y+Math.sin(f.start)*length),new THREE.Vector3(c.x,z,c.y),new THREE.Vector3(c.x+Math.cos(end)*length,z,c.y+Math.sin(end)*length)];for(const ps of [arc,radial]){const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(ps),rotationArcMaterial);line.computeLineDistances();line.renderOrder=15;editHandles.add(line);}const rect=renderer.domElement.getBoundingClientRect();heightReadout.style.display='block';heightReadout.style.bottom='auto';heightReadout.style.left=Math.min(Math.max(8,e.clientX-rect.left+16),Math.max(8,rect.width-130))+'px';heightReadout.style.top=Math.max(8,e.clientY-rect.top-38)+'px';heightReadout.textContent=(f.degrees>0?'+':'')+f.degrees.toFixed(1)+'°';}if(editDrag.snap){for(const hit of editDrag.snap.guides?.length?editDrag.snap.guides:[editDrag.snap]){const z=n.z+groups.get(n.floor).position.y+.1,points=hit.edge?[hit.edge.a,hit.edge.b]:[[hit.x-.2,hit.y],[hit.x+.2,hit.y],[hit.x,hit.y],[hit.x,hit.y-.2],[hit.x,hit.y+.2]],line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points.map(p=>new THREE.Vector3(p[0],z,p[1]))),snapMaterial);line.renderOrder=12;editHandles.add(line);}}e.preventDefault();e.stopImmediatePropagation();};
  const editUp=e=>{if(!editDrag||editDrag.pointerId!==e.pointerId)return;const d=editDrag;editDrag=null;clearAuthorGhost();groups.get(d.original.floor).position.y=d.baseGroupY;heightReadout.style.display='none';controls.enabled=true;e.preventDefault();e.stopImmediatePropagation();if(renderer.domElement.hasPointerCapture(e.pointerId))renderer.domElement.releasePointerCapture(e.pointerId);if(d.next.__elevation||['x','y','w','h'].some(k=>d.next[k]!==d.original[k])||JSON.stringify(d.next.shape)!==JSON.stringify(d.original.shape)||JSON.stringify(d.next.routeStair)!==JSON.stringify(d.original.routeStair))options.onRoomEdit?.(d.original.floor,d.original.id,d.next);else if(d.edge?.startsWith('rotate-')){window.KERN_ROTATE.choosePivot(d.original,'rooms',Number(d.edge.slice(7)));drawHandles(d.original);}};
  const editCancel=()=>{clearAuthorGhost();if(editDrag)groups.get(editDrag.original.floor).position.y=editDrag.baseGroupY;heightReadout.style.display='none';editDrag=null;controls.enabled=!walking;if(selectedRoom)drawHandles(selectedRoom);};
  renderer.domElement.addEventListener('pointerdown',editDown,true);renderer.domElement.addEventListener('pointermove',editMove,true);renderer.domElement.addEventListener('pointerup',editUp,true);renderer.domElement.addEventListener('pointercancel',editCancel,true);renderer.domElement.addEventListener('lostpointercapture',editCancel,true);
  let marquee=null;
  const marqueeBox=document.createElement('div');marqueeBox.style.cssText='position:absolute;border:1px solid #79b8ff;background:#79b8ff20;pointer-events:none;display:none;z-index:25';container.append(marqueeBox);
  const clearMarquee=()=>{marquee=null;marqueeBox.style.display='none';};
  const marqueeDown=e=>{if(walking||navigationPointer!==null||e.altKey||e.button!==0||editDrag||authorMode!=='select')return;marquee={id:e.pointerId,x:e.clientX,y:e.clientY,shift:e.shiftKey,subtract:e.ctrlKey||e.metaKey,previous:selectionRecord?.ids||[]};};
  const marqueeMove=e=>{if(!marquee||marquee.id!==e.pointerId||Math.hypot(e.clientX-marquee.x,e.clientY-marquee.y)<5)return;const r=renderer.domElement.getBoundingClientRect();marquee.moved=true;marqueeBox.style.display='block';Object.assign(marqueeBox.style,{left:Math.min(e.clientX,marquee.x)-r.left+'px',top:Math.min(e.clientY,marquee.y)-r.top+'px',width:Math.abs(e.clientX-marquee.x)+'px',height:Math.abs(e.clientY-marquee.y)+'px'});};
  const marqueeUp=e=>{if(!marquee||marquee.id!==e.pointerId)return;const d=marquee;clearMarquee();if(!d.moved)return;e.preventDefault();pointerIds.clear();clickStart=null;const rect=renderer.domElement.getBoundingClientRect(),x0=Math.min(d.x,e.clientX),x1=Math.max(d.x,e.clientX),y0=Math.min(d.y,e.clientY),y1=Math.max(d.y,e.clientY),fid=focused||navigationFloor,level=data.levels.find(l=>l.id===fid);if(!level)return;camera.updateMatrixWorld(true);const hits=level.rooms.filter(r=>{const ps=(window.KERN_SHAPES?.points(r)||[[r.x,r.y],[r.x+r.w,r.y],[r.x+r.w,r.y+r.h],[r.x,r.y+r.h]]).flatMap(p=>[r.z,r.z+(r.height||0)].map(z=>new THREE.Vector3(p[0],z+groups.get(fid).position.y,p[1]).project(camera))).filter(p=>p.z>=-1&&p.z<=1);if(!ps.length)return false;const xs=ps.map(p=>(p.x+1)*rect.width/2+rect.left),ys=ps.map(p=>(1-p.y)*rect.height/2+rect.top);return Math.min(...xs)<=x1&&Math.max(...xs)>=x0&&Math.min(...ys)<=y1&&Math.max(...ys)>=y0;}).map(r=>r.id);const ids=d.subtract?d.previous.filter(id=>!hits.includes(id)):d.shift?[...new Set([...d.previous,...hits])]:hits;if(!focused)activateFloor(fid);selectRooms(fid,ids);options.onRoomsSelect?.(fid,ids);};
  renderer.domElement.addEventListener('pointerdown',marqueeDown,true);renderer.domElement.addEventListener('pointermove',marqueeMove,true);renderer.domElement.addEventListener('pointerup',marqueeUp,true);renderer.domElement.addEventListener('pointercancel',clearMarquee,true);renderer.domElement.addEventListener('lostpointercapture',clearMarquee,true);
  const pointerDown = e => {if(walking||navigationPointer===e.pointerId||e.__viewNavigation)return;pointerIds.add(e.pointerId); if (pointerIds.size > 1) clickStart = null; else clickStart = e.button === 0 ? {id: e.pointerId, x: e.clientX, y: e.clientY, moved: false} : null;};
  const pointerMove = e => {if(walking)return;if (clickStart && Math.hypot(e.clientX - clickStart.x, e.clientY - clickStart.y) > 5) clickStart.moved = true; if (pointerIds.size || e.buttons) {renderer.domElement.title = ''; hoverFloor(null); return;} hoverFloor(hitFloor(e));};
  const pointerUp = e => {if(walking||e.__viewNavigation)return;const click = clickStart && e.pointerId === clickStart.id && !clickStart.moved && Math.hypot(e.clientX - clickStart.x, e.clientY - clickStart.y) <= 5 && pointerIds.size === 1;pointerIds.delete(e.pointerId); clickStart = null; if (click) {const id = hitFloor(e); if (id) {if(e.shiftKey&&!lastHit?.room){chooseFloor(id,true);}else{activateFloor(id);if(lastHit?.door)options.onDoorSelect?.(id,lastHit.door);else if(lastHit?.room)options.onRoomSelect?.(id,lastHit.room);else selectRoom(id,null);}}}};
  const blur = () => {clearMarquee();navigationPointer=null;navigationZoom=null;renderer.domElement.style.cursor='';controls.mouseButtons.LEFT=null;controls.mouseButtons.RIGHT=THREE.MOUSE.PAN;cancelAuthor(true);editCancel();pointerIds.clear();clickStart=null;interacting=false;cancelTransition();hoverFloor(null);};
  window.addEventListener('blur',blur);const releaseScene = cleanupOnFailure;cleanupOnFailure = () => {window.removeEventListener('blur',blur);releaseScene();};
  const pointerCancel = e => {pointerIds.delete(e.pointerId); clickStart = null; hoverFloor(null);}, pointerLeave = () => {if (!pointerIds.size) {renderer.domElement.title = ''; hoverFloor(null);}};
  const keyDown = e => {if(e.key==='Escape'&&marquee){clearMarquee();clickStart=null;pointerIds.clear();e.preventDefault();e.stopPropagation();return;}if(e.key==='Escape'&&(authorDrag||authorMode!=='select')){e.preventDefault();e.stopImmediatePropagation();cancelAuthor(true);return;}if(e.key==='Escape'&&editDrag){e.preventDefault();e.stopImmediatePropagation();editCancel();return;}if (e.key === 'Escape' && focused) {e.preventDefault(); e.stopPropagation(); showAll();} else if (focused && ['ArrowUp', 'ArrowDown'].includes(e.key)) {e.preventDefault(); e.stopPropagation(); adjacentFloor(e.key === 'ArrowUp' ? 1 : -1);}}, contextMenu = e => {e.preventDefault();if(walking||e.altKey||performance.now()<suppressNavigationMenu)return;hitFloor(e);if(lastHit)options.onContext?.({floor:lastHit.floor,room:lastHit.room,x:lastHit.point.x,y:lastHit.point.z,z:data.levels.find(l=>l.id===lastHit.floor)?.rooms.find(r=>r.id===lastHit.room)?.z??data.levels.find(l=>l.id===lastHit.floor)?.z??lastHit.point.y,clientX:e.clientX,clientY:e.clientY});};
  const listeners = {pointerdown: pointerDown, pointermove: pointerMove, pointerup: pointerUp, pointercancel: pointerCancel, pointerleave: pointerLeave, keydown: keyDown, contextmenu: contextMenu};
  for (const [name, fn] of Object.entries(listeners)) renderer.domElement.addEventListener(name, fn);
  const resize = () => {if (disposed) return; const w = Math.max(1, container.clientWidth), h = Math.max(1, container.clientHeight); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); lastOcclusion = '';};
  const controlStart = () => {cancelTransition(); interacting = true;}, controlEnd = () => {interacting = false; xrayChangedAt = performance.now(); xrayPending = xray;};
  controls.addEventListener('start', controlStart); controls.addEventListener('end', controlEnd);
  const observer = new ResizeObserver(resize);
  const contextLost = e => {e.preventDefault(); options.onContextLost?.();}; renderer.domElement.addEventListener('webglcontextlost', contextLost);
  let walking=false,flyingView=false,walkState=null,orbitState=null,walkYaw=0,walkPitch=0,flashOn=true;
  const torch=new THREE.SpotLight(0xffefd2,55,35,Math.PI/7,.65,1.3);torch.visible=false;scene.add(torch);scene.add(torch.target);
  const outdoor=new THREE.Group();const groundMasks=[...(ground?.rooms||[]),...data.levels.filter(l=>l.id!==ground?.id).flatMap(l=>l.rooms.filter(r=>r.groundSurface||r.localSteps&&data.stairs.some(st=>st.localSteps&&st.floorId===l.id&&st.roomId===r.id&&Math.min(...st.stops.map(s=>s.z))<=groundZ+.2&&Math.max(...st.stops.map(s=>s.z))>=groundZ-.2)))];const outsideRect={x:centerX-(size+50)/2,y:centerY-(size+50)/2,w:size+50,h:size+50};if(data.shapeAware&&window.KERN_SHAPES){const S=window.KERN_SHAPES,regions=S.difference(S.multi(outsideRect),groundMasks.filter(r=>(r.groundSurface||r.localSteps||!['courtyard','terrace'].includes(r.type))).map(r=>r.routeStair?(data.stairs.find(s=>s.roomId===r.id)?.footprintGeometry||S.multi(r)):S.multi(r)));for(const rings of regions){const shape=new THREE.Shape(rings[0].map(p=>new THREE.Vector2(p[0],-p[1])));for(const h of rings.slice(1))shape.holes.push(new THREE.Path(h.map(p=>new THREE.Vector2(p[0],-p[1]))));const mesh=new THREE.Mesh(new THREE.ShapeGeometry(shape),material('#535c62'));mesh.rotation.x=-Math.PI/2;mesh.position.y=groundZ-.02;outdoor.add(mesh);}}else for(const r of window.BuildingPreviewGeometry.subtractAll(outsideRect,groundMasks.filter(r=>(r.groundSurface||r.localSteps||!['courtyard','terrace'].includes(r.type))))){const mesh=new THREE.Mesh(new THREE.PlaneGeometry(r.w,r.h),material('#535c62'));mesh.rotation.x=-Math.PI/2;mesh.position.set(r.x+r.w/2,groundZ-.02,r.y+r.h/2);outdoor.add(mesh);}outdoor.visible=false;scene.add(outdoor);

  function updateWalk(){if(!walkState)return;camera.position.set(walkState.x+(walkState.bobX||0)*Math.cos(walkYaw),walkState.z+(walkState.eyeHeight??1.6278874)+(walkState.bobY||0),walkState.y-(walkState.bobX||0)*Math.sin(walkYaw));camera.rotation.order='YXZ';camera.rotation.set(walkPitch,walkYaw,walkState.roll||0);const direction=new THREE.Vector3(0,0,-1).applyQuaternion(camera.quaternion);torch.position.copy(camera.position);torch.target.position.copy(camera.position).add(direction.multiplyScalar(8));torch.visible=flashOn;if(walkState.fly)return;for(const sprite of sprites)sprite.visible=false;for(const label of roomLabels)label.visible=!label.userData.duplicate&&Math.abs(label.position.y-walkState.z)<.2;}
  function setWalk(state,yaw=0,pitch=0,flash=true,keepPose=false){if(state){cancelAuthor(true);if(!walking){orbitState=getViewState();camera.fov=state.fov??90;camera.updateProjectionMatrix();walking=true;flyingView=!!state.fly;scene.children.filter(n=>n.isHemisphereLight||n.isDirectionalLight).forEach(n=>{n.userData.originalIntensity=n.intensity;if(!state.fly)n.intensity=n.isHemisphereLight?.8:.3;});editHandles.visible=false;controls.enabled=false;transition=null;if(!state.fly){gap=0;showWalls=true;cutaway=false;xray=false;labels=false;focused=null;for(const g of groups.values())g.visible=true;grid.visible=false;outdoor.visible=true;}updateMatrices();}if(flyingView&&!state.fly){gap=0;showWalls=true;cutaway=false;xray=false;labels=false;focused=null;for(const g of groups.values())g.visible=true;grid.visible=false;outdoor.visible=true;flyingView=false;updateMatrices();}flyingView=!!state.fly;if(camera.fov!==(state.fov??90)){camera.fov=state.fov??90;camera.updateProjectionMatrix();}walkState=state;walkYaw=yaw;walkPitch=pitch;flashOn=flash;updateWalk();}else if(walking){const exitPosition=camera.position.clone(),exitDirection=camera.getWorldDirection(new THREE.Vector3());walking=false;flyingView=false;camera.fov=orbitState?.fov??42;camera.updateProjectionMatrix();scene.children.filter(n=>n.isHemisphereLight||n.isDirectionalLight).forEach(n=>n.intensity=n.userData.originalIntensity??n.intensity);editHandles.visible=true;walkState=null;torch.visible=false;outdoor.visible=false;controls.enabled=true;camera.rotation.order='XYZ';restoreViewState(keepPose?{...orbitState,position:exitPosition.toArray(),target:exitPosition.clone().add(exitDirection.multiplyScalar(10)).toArray()}:orbitState);}}
  cleanupOnFailure = dispose;observer.observe(container); resize(); updateMatrices();
  if (options.viewState) restoreViewState(options.viewState); else fit();
  // Open in overview; floor isolation is an explicit click.
  renderer.setAnimationLoop(() => {if (disposed) return;if(walking){updateWalk();if(walkState?.fly)refreshOcclusion();renderer.render(scene,camera);return;} if (!advanceCamera()) controls.update(); updateDimensions();refreshOcclusion(); renderer.render(scene, camera);});
  function getViewState() {
    return {fov:camera.fov,position: camera.position.toArray(), target: controls.target.toArray(), focused, navigationFloor, navigationY, navigationElevation: floorY(navigationFloor), visible: visibleIds(), gap, showWalls, showCeilings, showSlabs, cutaway, cutHeight, labels, xray, showGrid,
      overview: null};
  }
  function restoreViewState(state) {
    if (!state || disposed) return;camera.fov=Number.isFinite(state.fov)?state.fov:42;camera.updateProjectionMatrix(); const vector = value => Array.isArray(value) && value.length === 3 && value.every(Number.isFinite);
    cancelTransition(); gap = Math.max(0, Math.min(12, Number(state.gap) || 0)); showWalls = state.showWalls !== false;showCeilings=!!state.showCeilings;showSlabs=state.showSlabs!==false; cutaway = state.cutaway !== false;
    cutHeight = Number.isFinite(state.cutHeight) ? Math.max(.4, Math.min(2.4, state.cutHeight)) : 1.15; labels = state.labels !== false; xray = !!state.xray; showGrid = state.showGrid !== false; grid.visible = showGrid;
    focused = groups.has(state.focused) ? state.focused : null; const ids = Array.isArray(state.visible) ? state.visible.filter(id => groups.has(id)) : [...groups.keys()];
    for (const [id, group] of groups) group.visible = ids.includes(id);
    if (!focused && !ids.length && state.visible?.length) for (const group of groups.values()) group.visible = true;
    navigationFloor = groups.has(state.navigationFloor) ? state.navigationFloor : focused || navigationFloor;
    const elevationDelta = groups.has(state.navigationFloor) && Number.isFinite(state.navigationElevation) ? floorY(navigationFloor) - state.navigationElevation : 0;
    navigationY = (Number.isFinite(state.navigationY) ? state.navigationY : floorY(navigationFloor)) + elevationDelta;
    hoverFloor(null); updateMatrices();
    if (vector(state.position) && vector(state.target)) moveCamera(new THREE.Vector3().fromArray(state.position).add(new THREE.Vector3(0, elevationDelta, 0)), new THREE.Vector3().fromArray(state.target).add(new THREE.Vector3(0, elevationDelta, 0)), false); else fit();
    refreshOcclusion(true); notifyVisibility();
  }
  function dispose() {
    if (disposed) return;cancelAuthor(true);renderer.domElement.removeEventListener('pointerdown',navigationDown,true);renderer.domElement.removeEventListener('pointermove',navigationMove,true);renderer.domElement.removeEventListener('lostpointercapture',navigationEnd,true);renderer.domElement.removeEventListener('pointerup',navigationEnd,true);renderer.domElement.removeEventListener('pointercancel',navigationEnd,true);renderer.domElement.removeEventListener('pointerdown',authorDown,true);renderer.domElement.removeEventListener('pointermove',authorMove,true);renderer.domElement.removeEventListener('pointerup',authorUp,true);renderer.domElement.removeEventListener('pointercancel',cancelAuthor,true);disposed = true;torch.dispose();for(const m of outdoor.children)m.geometry.dispose(); transition = null; renderer.setAnimationLoop(null); observer.disconnect();renderer.domElement.removeEventListener('pointerdown',editDown,true);renderer.domElement.removeEventListener('pointermove',editMove,true);renderer.domElement.removeEventListener('pointerup',editUp,true);renderer.domElement.removeEventListener('pointercancel',editCancel,true);renderer.domElement.removeEventListener('lostpointercapture',editCancel,true);marqueeBox.remove();renderer.domElement.removeEventListener('pointerdown',marqueeDown,true);renderer.domElement.removeEventListener('pointermove',marqueeMove,true);renderer.domElement.removeEventListener('pointerup',marqueeUp,true);renderer.domElement.removeEventListener('pointercancel',clearMarquee,true);renderer.domElement.removeEventListener('lostpointercapture',clearMarquee,true);dimensionReadout.remove();heightReadout.remove();rotationArcMaterial.dispose();elevationMaterial.dispose();handleMaterial.dispose();snapMaterial.dispose();gridCellMaterial.dispose();for(const c of editHandles.children)c.geometry.dispose(); controls.removeEventListener('start', controlStart); controls.removeEventListener('end', controlEnd); controls.dispose();
    for (const [name, fn] of Object.entries(listeners)) renderer.domElement.removeEventListener(name, fn);
    renderer.domElement.removeEventListener('webglcontextlost', contextLost);window.removeEventListener('blur',blur);
    for (const label of [...sprites, ...roomLabels]) {label.material.map.dispose(); label.material.dispose(); if (label.geometry && !label.isSprite) label.geometry.dispose();}
    for (const decoration of decorations) {decoration.geometry.dispose(); decoration.material.dispose();}
    for(const mesh of shapedMeshes)mesh.geometry.dispose();for (const m of materials.values()) m.dispose(); unit.dispose(); grid.geometry.dispose();
    for (const m of Array.isArray(grid.material) ? grid.material : [grid.material]) m.dispose();
    renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove(); scene.clear(); pointerIds.clear();
  }
  return {
    cameraPose(){const d=camera.getWorldDirection(new THREE.Vector3());return{x:camera.position.x,y:camera.position.z,z:camera.position.y,yaw:Math.atan2(-d.x,-d.z),pitch:Math.asin(Math.max(-1,Math.min(1,d.y))),fov:camera.fov,roll:new THREE.Euler().setFromQuaternion(camera.quaternion,'YXZ').z};},setAuthoringMode,cancelAuthoring:()=>cancelAuthor(true),cancelEdit:editCancel,getOrbitViewState(){return walking&&orbitState?JSON.parse(JSON.stringify(orbitState)):getViewState();},selectRoom,selectRooms,activateFloor,chooseFloor,frameSelection, setWalk, fit, dispose, showAll, isolate, hoverFloor, adjacentFloor, getViewState, restoreViewState, syncActiveFloor,
    zoomBy(factor) {if (!Number.isFinite(factor) || factor <= 0) return; const delta = camera.position.clone().sub(controls.target), distance = THREE.MathUtils.clamp(delta.length() * factor, controls.minDistance, controls.maxDistance); moveCamera(controls.target.clone().add(delta.normalize().multiplyScalar(distance)), controls.target, false);},
    setGrid(value) {showGrid = !!value; grid.visible = showGrid;},
    getFocusedFloor() {return focused;},
    setFloor(id, visible) {const group = groups.get(id); if (!group) return; cancelTransition(); group.visible = !!visible; if(focused===id&&!visible)focused=visibleIds()[0]||null;if(!focused&&visible)focused=id;selectRoom(null,null);hoverFloor(null);updateMatrices();refreshOcclusion(true);notifyVisibility();},
    setExplode(value) {const nextGap = Math.max(0, Math.min(12, Number(value) || 0)); if (nextGap === gap) return; const previousElevation = floorY(navigationFloor); gap = nextGap; hoverFloor(null); updateMatrices(); if (focused) followFloor(focused, !!transition); else {cancelTransition(); navigationY += floorY(navigationFloor) - previousElevation;} refreshOcclusion(true);},
    setSlabs(value){showSlabs=!!value;updateMatrices();refreshOcclusion(true);},
    setCeilings(value){showCeilings=!!value;updateMatrices();refreshOcclusion(true);},
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
