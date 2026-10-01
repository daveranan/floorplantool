import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Receives an immutable geometry snapshot. No editor or storage access.
function mount(container, data, options = {}) {
  const renderer = new THREE.WebGLRenderer({antialias: true, alpha: false, preserveDrawingBuffer: true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x171c24);
  renderer.domElement.setAttribute('aria-label', 'Interactive 3D building preview. Drag to orbit; two fingers to zoom and pan.');
  renderer.domElement.tabIndex = 0;
  container.appendChild(renderer.domElement);
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(42, 1, .05, 5000);
  scene.add(new THREE.HemisphereLight(0xf3f7ff, 0x485363, 2.2));
  const light = new THREE.DirectionalLight(0xffffff, 2.5); light.position.set(-40, 80, -30); scene.add(light);
  const fill = new THREE.DirectionalLight(0xb7c8ec, .6); fill.position.set(40, 10, 60); scene.add(fill);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = .09; controls.maxPolarAngle = Math.PI * .92;
  controls.minDistance = 1; controls.maxDistance = 1600;
  const unit = new THREE.BoxGeometry(1, 1, 1), materials = new Map(), groups = new Map(), sprites = [], meshes = [];
  const material = color => {if (!materials.has(color)) materials.set(color, new THREE.MeshStandardMaterial({color, roughness: .88, metalness: 0})); return materials.get(color);};
  const b = data.bounds, centerX = (b.minX + b.maxX) / 2, centerY = (b.minY + b.maxY) / 2, labelScale = Math.max(6, (b.maxX - b.minX) * .22);
  for (let i = 0; i < data.levels.length; i++) {
    const level = data.levels[i], group = new THREE.Group();
    group.userData = {id: level.id, rank: i, z: level.z}; groups.set(level.id, group); scene.add(group);
    const batches = new Map();
    for (const box of level.boxes) {const key = `${box.color}:${box.kind}`; if (!batches.has(key)) batches.set(key, []); batches.get(key).push(box);}
    for (const boxes of batches.values()) {
      const mesh = new THREE.InstancedMesh(unit, material(boxes[0].color), boxes.length);
      mesh.frustumCulled = false;
      mesh.userData = {boxes, level: level.id}; group.add(mesh); meshes.push(mesh);
    }
    const canvas = document.createElement('canvas'); canvas.width = 640; canvas.height = 96;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#202936'; ctx.fillRect(0, 0, 640, 96); ctx.strokeStyle = '#465367'; ctx.strokeRect(1, 1, 638, 94);
      ctx.fillStyle = '#e7effc'; ctx.font = '500 29px system-ui'; ctx.fillText(`${level.id} · ${level.z > 0 ? '+' : ''}${level.z.toFixed(2)} m`, 18, 38);
      ctx.fillStyle = '#aebed3'; ctx.font = '23px system-ui'; ctx.fillText(String(level.name).slice(0, 40), 18, 73);
      const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({map: texture, depthTest: false, depthWrite: false}));
      sprite.position.set(b.minX - labelScale * .65 - 1, level.z + .2, centerY); sprite.scale.set(labelScale, labelScale * 96 / 640, 1); sprite.renderOrder = 100;
      group.add(sprite); sprites.push(sprite);
    }
  }
  const size = Math.max(b.maxX - b.minX, b.maxY - b.minY, 15) * 1.35;
  const grid = new THREE.GridHelper(size, Math.min(80, Math.ceil(size)), 0x556376, 0x303a48);
  grid.position.set(centerX, b.minZ - .12, centerY); scene.add(grid);
  let gap = 0, disposed = false, showWalls = true, cutaway = false, labels = true;
  function update() {
    for (const group of groups.values()) group.position.y = group.userData.rank * gap;
    const transform = new THREE.Object3D();
    for (const mesh of meshes) {
      const level = data.levels.find(l => l.id === mesh.userData.level);
      mesh.userData.boxes.forEach((box, index) => {
        const isWall = box.kind === 'wall' || box.kind === 'solid';
        let height = box.height;
        if (cutaway && isWall) height = Math.max(0, Math.min(height, level.z + 1.15 - box.z));
        if (isWall && !showWalls) height = 0;
        transform.position.set(box.x + box.w / 2, box.z + height / 2, box.y + box.h / 2);
        transform.scale.set(box.w, height, box.h); transform.updateMatrix(); mesh.setMatrixAt(index, transform.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
    }
    for (const sprite of sprites) sprite.visible = labels;
  }
  function fit() {
    const box = new THREE.Box3();
    for (const group of groups.values()) if (group.visible) {
      const level = data.levels.find(l => l.id === group.userData.id);
      for (const shape of level.boxes) {
        box.expandByPoint(new THREE.Vector3(shape.x, shape.z + group.position.y, shape.y));
        box.expandByPoint(new THREE.Vector3(shape.x + shape.w, shape.z + shape.height + group.position.y, shape.y + shape.h));
      }
    }
    if (box.isEmpty()) {box.min.set(b.minX, b.minZ, b.minY); box.max.set(b.maxX, b.maxZ + gap * Math.max(0, data.levels.length - 1), b.maxY);}
    const center = box.getCenter(new THREE.Vector3()), dimensions = box.getSize(new THREE.Vector3());
    const radius = Math.max(dimensions.length() / 2, 8), angle = THREE.MathUtils.degToRad(camera.fov / 2), distance = radius / Math.sin(angle) * Math.max(1, 1 / camera.aspect) * 1.1;
    controls.target.copy(center); camera.position.copy(center).add(new THREE.Vector3(1, .9, 1.2).normalize().multiplyScalar(distance)); camera.near = .05; camera.far = Math.max(5000, distance * 5); camera.updateProjectionMatrix(); controls.update();
  }
  const resize = () => {if (disposed) return; const w = Math.max(1, container.clientWidth), h = Math.max(1, container.clientHeight); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();};
  const observer = new ResizeObserver(resize); observer.observe(container); resize(); update(); fit();
  renderer.setAnimationLoop(() => {if (disposed) return; controls.update(); renderer.render(scene, camera);});
  const contextLost = e => {e.preventDefault(); options.onContextLost?.();};
  renderer.domElement.addEventListener('webglcontextlost', contextLost);
  function dispose() {
    if (disposed) return; disposed = true;
    renderer.setAnimationLoop(null); observer.disconnect(); controls.dispose();
    renderer.domElement.removeEventListener('webglcontextlost', contextLost);
    for (const sprite of sprites) {sprite.material.map.dispose(); sprite.material.dispose();}
    for (const m of materials.values()) m.dispose(); unit.dispose(); grid.geometry.dispose();
    for (const m of Array.isArray(grid.material) ? grid.material : [grid.material]) m.dispose();
    renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove(); scene.clear();
  }
  return {
    fit, dispose,
    setFloor(id, visible) {groups.get(id).visible = visible;},
    showAll() {for (const group of groups.values()) group.visible = true;},
    isolate(id) {for (const [key, group] of groups) group.visible = key === id; fit();},
    setExplode(value) {gap = Math.max(0, Math.min(12, Number(value) || 0)); update();},
    setWalls(value) {showWalls = !!value; update();},
    setCutaway(value) {cutaway = !!value; update();},
    setLabels(value) {labels = !!value; update();},
    png() {renderer.render(scene, camera); return new Promise((resolve, reject) => renderer.domElement.toBlob(blob => blob ? resolve(blob) : reject(Error('Could not create this image.')), 'image/png'));}
  };
}
window.Building3D = {mount, version: THREE.REVISION};
