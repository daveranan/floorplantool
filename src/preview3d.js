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

// Receives an immutable geometry snapshot. No editor or storage access.
function mount(container, data, options = {}) {
  const renderer = new THREE.WebGLRenderer({antialias: true, alpha: false, preserveDrawingBuffer: true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.setClearColor(0x171c24);
  renderer.domElement.setAttribute('aria-label', '3D building preview. Left drag orbits, middle or right drag pans. Click a floor or its label to focus; Escape shows all.');
  renderer.domElement.tabIndex = 0; container.appendChild(renderer.domElement);
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(42, 1, .05, 5000);
  scene.add(new THREE.HemisphereLight(0xf3f7ff, 0x485363, 2.2));
  const light = new THREE.DirectionalLight(0xffffff, 2.5); light.position.set(-40, 80, -30); scene.add(light);
  const fill = new THREE.DirectionalLight(0xb7c8ec, .6); fill.position.set(40, 10, 60); scene.add(fill);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = .09; controls.maxPolarAngle = Math.PI * .92;
  controls.minDistance = 1; controls.maxDistance = 1600; controls.screenSpacePanning = true;
  controls.mouseButtons = {LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.PAN, RIGHT: THREE.MOUSE.PAN};
  controls.touches = {ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN};
  const unit = new THREE.BoxGeometry(1, 1, 1), materials = new Map(), groups = new Map(), sprites = [], meshes = [], primaryMeshes = [], decorations = [];
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
      ctx.fillStyle = '#e7effc'; ctx.font = '500 29px system-ui'; ctx.fillText(`${level.id} · ${level.z > 0 ? '+' : ''}${level.z.toFixed(2)} m`, 18, 38);
      ctx.fillStyle = '#aebed3'; ctx.font = '23px system-ui'; ctx.fillText(String(level.name).slice(0, 40), 18, 73);
      const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({map: texture, depthTest: true, depthWrite: false}));
      sprite.position.set(b.minX - labelScale * .65 - 1, level.z + .2, (bounds.minY + bounds.maxY) / 2); sprite.scale.set(labelScale, labelScale * 96 / 640, 1);
      sprite.userData = {level: level.id, floorLabel: true}; group.add(sprite); sprites.push(sprite);
      const leader = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(sprite.position.x + labelScale / 2, level.z + .2, sprite.position.z), new THREE.Vector3(bounds.minX, level.z + .07, sprite.position.z)]), new THREE.LineBasicMaterial({color: 0x7cc4ff, depthTest: true, transparent: true, opacity: .9}));
      leader.visible = false; leader.userData.floorLeader = level.id; group.add(leader); decorations.push(leader);
    }
  }
  const size = Math.max(b.maxX - b.minX, b.maxY - b.minY, 15) * 1.35;
  const grid = new THREE.GridHelper(size, Math.min(100, Math.ceil(size)), 0x677b92, 0x303a48);
  grid.position.set(centerX, groundZ, centerY); grid.userData.groundDatum = groundZ; scene.add(grid);
  for (const m of Array.isArray(grid.material) ? grid.material : [grid.material]) {m.transparent = true; m.opacity = .65; m.depthWrite = false;}
  let gap = 0, disposed = false, showWalls = true, cutaway = false, labels = true, xray = true, hovered = null, focused = null, overview = null, physical = [], lastOcclusion = '', clickStart = null;
  const pointerIds = new Set(), raycaster = new THREE.Raycaster(), mouse = new THREE.Vector2();
  const visibleIds = () => [...groups].filter(([, group]) => group.visible).map(([id]) => id);
  const notifyVisibility = () => options.onVisibilityChanged?.(visibleIds(), focused);
  function heightFor(box, level) {let height = box.height; const wall = box.kind === 'wall' || box.kind === 'solid'; if (cutaway && wall) height = Math.max(0, Math.min(height, level.z + 1.15 - box.z)); if (wall && !showWalls) height = 0; return height;}
  function updateMatrices() {
    const transform = new THREE.Object3D(); physical = [];
    for (const group of groups.values()) group.position.y = group.userData.rank * gap;
    for (const mesh of primaryMeshes) {
      const level = data.levels.find(l => l.id === mesh.userData.level), group = groups.get(level.id), fade = mesh.userData.fadeMesh;
      mesh.userData.boxes.forEach((box, index) => {
        const height = heightFor(box, level), faded = xray && mesh.userData.faded.has(index), set = (target, visible) => {transform.position.set(box.x + box.w / 2, box.z + height / 2, box.y + box.h / 2); transform.scale.set(box.w, visible ? height : 0, box.h); transform.updateMatrix(); target.setMatrixAt(index, transform.matrix);};
        set(mesh, !faded); if (fade) set(fade, faded);
        if (group.visible && height > .001) physical.push({mesh, index, kind: box.kind, level: level.id, min: {x: box.x, y: box.z + group.position.y, z: box.y}, max: {x: box.x + box.w, y: box.z + height + group.position.y, z: box.y + box.h}});
      });
      mesh.instanceMatrix.needsUpdate = true; if (fade) fade.instanceMatrix.needsUpdate = true;
    }
    for (const sprite of sprites) sprite.visible = labels; scene.updateMatrixWorld(true); lastOcclusion = '';
  }
  function hoverFloor(id) {
    if (id && !groups.get(id)?.visible) id = null;
    if (id === hovered) return; hovered = id;
    for (const decoration of decorations) decoration.visible = (decoration.userData.floorHighlight || decoration.userData.floorLeader) === id;
    for (const sprite of sprites) sprite.material.color.set(sprite.userData.level === id ? 0x9ed8ff : 0xffffff);
    renderer.domElement.style.cursor = id ? 'pointer' : 'default'; options.onHover?.(id ? data.levels.find(l => l.id === id) : null);
  }
  function refreshOcclusion(force = false) {
    const signature = [...camera.position.toArray(), ...camera.quaternion.toArray(), gap, showWalls, cutaway, labels, xray, ...visibleIds()].join(':');
    if (!force && signature === lastOcclusion) return;
    const faded = new Map(primaryMeshes.map(m => [m, new Set()]));
    if (xray && showWalls) {
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
    for (const mesh of primaryMeshes) {const next = faded.get(mesh), previous = mesh.userData.faded;if (next.size !== previous.size || [...next].some(i => !previous.has(i))) changed = true; mesh.userData.faded = next;}
    if (changed) updateMatrices();
    // A label hidden by solid geometry stays hidden even if that wall is x-rayed.
    for (const sprite of sprites) {
      const point = sprite.getWorldPosition(new THREE.Vector3());
      sprite.visible = labels && groups.get(sprite.userData.level).visible && !physical.some(box => {const hit = segmentBox(camera.position, point, box); return hit !== null && hit > .00001 && hit < .995;});
    }
    lastOcclusion = signature;
  }
  function fit(preserveDirection = false) {
    const box = new THREE.Box3();
    for (const group of groups.values()) if (group.visible) {const level = data.levels.find(l => l.id === group.userData.id); for (const shape of level.boxes) {box.expandByPoint(new THREE.Vector3(shape.x, shape.z + group.position.y, shape.y)); box.expandByPoint(new THREE.Vector3(shape.x + shape.w, shape.z + shape.height + group.position.y, shape.y + shape.h));}}
    if (box.isEmpty()) {box.min.set(b.minX, b.minZ - groundRank * gap, b.minY); box.max.set(b.maxX, b.maxZ + (data.levels.length - 1 - groundRank) * gap, b.maxY);}
    const center = box.getCenter(new THREE.Vector3()), dimensions = box.getSize(new THREE.Vector3()), radius = Math.max(dimensions.length() / 2, 8), angle = THREE.MathUtils.degToRad(camera.fov / 2), distance = radius / Math.sin(angle) * Math.max(1, 1 / camera.aspect) * 1.1;
    const direction = preserveDirection ? camera.position.clone().sub(controls.target).normalize() : new THREE.Vector3(1, .9, 1.2).normalize();
    controls.target.copy(center); camera.position.copy(center).add(direction.multiplyScalar(distance)); camera.near = .05; camera.far = Math.max(5000, distance * 5); camera.updateProjectionMatrix(); controls.update(); refreshOcclusion(true);
  }
  function showAll() {
    for (const group of groups.values()) group.visible = true; focused = null; hoverFloor(null); updateMatrices();
    if (overview) {camera.position.copy(overview.position); controls.target.copy(overview.target); camera.updateProjectionMatrix(); controls.update(); overview = null; refreshOcclusion(true);} else fit();
    notifyVisibility();
  }
  function isolate(id) {
    if (!groups.has(id)) return; if (!focused) overview = {position: camera.position.clone(), target: controls.target.clone()};
    focused = id; for (const [key, group] of groups) group.visible = key === id; hoverFloor(null); updateMatrices(); fit(true); notifyVisibility();
  }
  function hitFloor(event) {
    const rect = renderer.domElement.getBoundingClientRect(); if (!rect.width || !rect.height) return null;
    mouse.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1); camera.updateMatrixWorld(true); scene.updateMatrixWorld(true); raycaster.setFromCamera(mouse, camera);
    const targets = [...meshes, ...sprites].filter(o => o.visible && groups.get(o.userData.level)?.visible), hit = raycaster.intersectObjects(targets, false)[0];
    return hit?.object.userData.level || null;
  }
  const pointerDown = e => {pointerIds.add(e.pointerId); if (pointerIds.size > 1) clickStart = null; else clickStart = e.button === 0 ? {id: e.pointerId, x: e.clientX, y: e.clientY, moved: false} : null;};
  const pointerMove = e => {if (clickStart && Math.hypot(e.clientX - clickStart.x, e.clientY - clickStart.y) > 5) clickStart.moved = true; if (pointerIds.size || e.buttons) {hoverFloor(null); return;} hoverFloor(hitFloor(e));};
  const pointerUp = e => {const click = clickStart && e.pointerId === clickStart.id && !clickStart.moved && Math.hypot(e.clientX - clickStart.x, e.clientY - clickStart.y) <= 5 && pointerIds.size === 1;pointerIds.delete(e.pointerId); clickStart = null; if (click) {const id = hitFloor(e); if (id) isolate(id);}};
  const blur = () => {pointerIds.clear();clickStart=null;hoverFloor(null);};
  window.addEventListener('blur',blur);
  const pointerCancel = e => {pointerIds.delete(e.pointerId); clickStart = null; hoverFloor(null);}, pointerLeave = () => {if (!pointerIds.size) hoverFloor(null);};
  const keyDown = e => {if (e.key === 'Escape' && focused) {e.preventDefault(); e.stopPropagation(); showAll();}}, contextMenu = e => e.preventDefault();
  const listeners = {pointerdown: pointerDown, pointermove: pointerMove, pointerup: pointerUp, pointercancel: pointerCancel, pointerleave: pointerLeave, keydown: keyDown, contextmenu: contextMenu};
  for (const [name, fn] of Object.entries(listeners)) renderer.domElement.addEventListener(name, fn);
  const resize = () => {if (disposed) return; const w = Math.max(1, container.clientWidth), h = Math.max(1, container.clientHeight); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); lastOcclusion = '';};
  const observer = new ResizeObserver(resize); observer.observe(container); resize(); updateMatrices(); fit();
  renderer.setAnimationLoop(() => {if (disposed) return; controls.update(); refreshOcclusion(); renderer.render(scene, camera);});
  const contextLost = e => {e.preventDefault(); options.onContextLost?.();}; renderer.domElement.addEventListener('webglcontextlost', contextLost);
  function dispose() {
    if (disposed) return; disposed = true; renderer.setAnimationLoop(null); observer.disconnect(); controls.dispose();
    for (const [name, fn] of Object.entries(listeners)) renderer.domElement.removeEventListener(name, fn);
    renderer.domElement.removeEventListener('webglcontextlost', contextLost);window.removeEventListener('blur',blur);
    for (const sprite of sprites) {sprite.material.map.dispose(); sprite.material.dispose();}
    for (const decoration of decorations) {decoration.geometry.dispose(); decoration.material.dispose();}
    for (const m of materials.values()) m.dispose(); unit.dispose(); grid.geometry.dispose();
    for (const m of Array.isArray(grid.material) ? grid.material : [grid.material]) m.dispose();
    renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove(); scene.clear(); pointerIds.clear(); overview = null;
  }
  return {
    fit, dispose, showAll, isolate, hoverFloor,
    getFocusedFloor() {return focused;},
    setFloor(id, visible) {const group = groups.get(id); if (!group) return; group.visible = !!visible; focused = null; overview = null; hoverFloor(null); updateMatrices(); refreshOcclusion(true); notifyVisibility();},
    setExplode(value) {gap = Math.max(0, Math.min(12, Number(value) || 0)); hoverFloor(null); updateMatrices(); refreshOcclusion(true);},
    setWalls(value) {showWalls = !!value; updateMatrices(); refreshOcclusion(true);},
    setCutaway(value) {cutaway = !!value; updateMatrices(); refreshOcclusion(true);},
    setLabels(value) {labels = !!value; updateMatrices(); refreshOcclusion(true);},
    setXray(value) {xray = !!value; updateMatrices(); refreshOcclusion(true);},
    png() {refreshOcclusion(true); renderer.render(scene, camera); return new Promise((resolve, reject) => renderer.domElement.toBlob(blob => blob ? resolve(blob) : reject(Error('Could not create this image.')), 'image/png'));}
  };
}
window.Building3D = {mount, version: THREE.REVISION};
