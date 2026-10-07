/* Production inspector, transactional selection, browser persistence and portable backups. */
const assert = require('node:assert/strict');
const { webcrypto } = require('node:crypto');
const { boot } = require('./test-production-support.cjs');
const clone = value => JSON.parse(JSON.stringify(value));
const near = (a, b) => assert(Math.abs(a - b) < 1e-6, `${a} != ${b}`);
const center = object => [object.x + object.w / 2, object.y + object.h / 2, object.z + object.height / 2];
const t = boot(), { w, run, get } = t;
const P = w.KERN_PRIMITIVES, UI = w.KERN_PRIMITIVE_UI, L = w.KERN_LAYERS, B = w.KERN_BULK_PROPERTIES;
const endKeys = ['topWidth', 'topDepth', 'bottomWidth', 'bottomDepth'];
const endField = key => get('inspector').querySelector('[data-primitive-end="' + key + '"]');
const bulkField = key => get('inspector').querySelector('[data-bulk-property="primitives.' + key + '"]');
const object = (id = 'a', fid = 'L0') => clone(run(`model.floors[${JSON.stringify(fid)}].primitives.find(o=>o.id===${JSON.stringify(id)})`));
const snapshot = () => run('JSON.stringify({model,history,future})');
function setup() {
  run(`resetTransient(true);buildingState.locked=false;$('saved').dataset.state='saved';model={version:1,units:'metres',floors:{L0:{name:'Ground',z:2,rooms:[{id:'room',name:'Untouched',type:'tech',x:0,y:0,w:20,h:20}],doors:[],entrances:[],primitives:[{...KERN_PRIMITIVES.create('cube','a'),x:2,y:3,z:1,w:4,h:6,height:3,rotation:37,tiltX:23,tiltY:-11},{...KERN_PRIMITIVES.create('cube','b'),x:8,y:3,w:6,h:4},KERN_PRIMITIVES.create('sphere','sphere'),KERN_THIN_WALLS.create('wall',{x:0,y:12},{x:6,y:12})]},L1:{name:'Upper',z:9,rooms:[],doors:[],entrances:[],primitives:[{...KERN_PRIMITIVES.create('cube','a'),x:4,y:3,z:2,w:5,h:3}]}}};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true,L1:false}};setTool('select');setSelection({primitives:['a']});history=[];future=[];render();save();`);
}
function select(ids, fid = 'L0') { L.setReferences(ids.map(id => ({ floor: fid, kind: 'primitives', id }))); }
function change(input, value) { assert(input, 'Expected inspector field'); input.value = value; input.dispatchEvent(new w.Event('change', { bubbles: true })); }
let count = 0;
async function check(name, fn) { setup(); await fn(); count++; console.log('PASS ' + name); }
(async () => {
  try {
    w.TextEncoder = TextEncoder; Object.defineProperty(w.crypto, 'subtle', { value: webcrypto.subtle });
    w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
    await check('four metric end controls appear only for blockout cubes and no-op edits add no Undo', () => {
      assert.equal(get('inspector').querySelectorAll('[data-primitive-end]').length, 4);
      for (const key of endKeys) { assert.equal(endField(key).min, '0'); assert.equal(endField(key).max, '150'); }
      const before = snapshot(); change(endField('topWidth'), '4'); assert.equal(snapshot(), before);
      for (const id of ['sphere', 'wall']) { select([id]); assert.equal(get('inspector').querySelector('[data-primitive-end]'), null); }
    });
    await check('end field edits preserve the rotated center, other dimensions and save one Undo', () => {
      const before = object(), c = center(before), roomBefore = run('JSON.stringify(floor().rooms)');
      get('primitive-orientation').open = true; change(endField('bottomWidth'), '8');
      const after = object(); center(after).forEach((v, i) => near(v, c[i]));
      assert.deepEqual(clone(P.endSizes(after)), { topWidth: 4, topDepth: 6, bottomWidth: 8, bottomDepth: 6 });
      assert.equal(after.rotation, 37); assert.equal(after.tiltX, 23); assert.equal(after.tiltY, -11); assert.equal(after.height, 3);
      assert(get('primitive-orientation').open); assert.equal(run('history.length'), 1); assert.equal(run('JSON.stringify(floor().rooms)'), roomBefore);
      assert.equal(get('saved').dataset.state, 'saved');
      const disk = JSON.parse(w.localStorage.getItem(w.KERN_BUILDINGS.KEY));
      assert.deepEqual(disk.buildings.find(b => b.id === run('currentBuilding().id')).plan.floors.L0.primitives[0], after);
      run('undo()'); assert.deepEqual(object(), before); run('redo()'); assert.deepEqual(object(), after);
    });
    await check('empty, negative and invalid end fields fail atomically; zero creates an allowed apex', () => {
      const before = snapshot();
      for (const value of ['', '-1', '151']) { change(endField('topWidth'), value); assert.equal(snapshot(), before); }
      assert(UI.editEnds('L0', 'a', { topWidth: 0, topDepth: 0 }));
      assert.deepEqual(clone(P.endSizes(object())), { topWidth: 0, topDepth: 0, bottomWidth: 4, bottomDepth: 6 });
      const apex = snapshot(); assert(!UI.editEnds('L0', 'a', { bottomWidth: 0 })); assert.equal(snapshot(), apex);
    });
    await check('protected floors, layers and stale direct baselines reject a shape edit', () => {
      const original = object(); assert(UI.editEnds('L0', 'a', { topWidth: 2 }, original));
      let before = snapshot(); assert(!UI.editEnds('L0', 'a', { topWidth: 3 }, original)); assert.equal(snapshot(), before);
      for (const property of ['locked', 'hidden']) {
        L.toggleObject('primitives', 'a', property, 'L0'); before = snapshot();
        assert(!UI.editEnds('L0', 'a', { topWidth: 3 })); assert.equal(snapshot(), before);
        L.toggleObject('primitives', 'a', property, 'L0');
      }
      L.setFloorSelection([]); before = snapshot(); assert(!UI.editEnds('L0', 'a', { topWidth: 3 })); assert.equal(snapshot(), before);
    });
    await check('a detached end input cannot overwrite a newer shape edit or another selection', () => {
      const stale = endField('topWidth'); assert(UI.editEnds('L0', 'a', { topWidth: 2 }));
      let before = snapshot(); change(stale, '3'); assert.equal(snapshot(), before, 'Detached input overwrote a newer object');
      const detached = endField('bottomWidth'); select(['b']); before = snapshot();
      change(detached, '9'); assert.equal(snapshot(), before, 'Detached input edited an unselected object');
    });
    await check('bulk taper fields match only selected cubes while keeping per-object centers and bottoms', () => {
      select(['a', 'b', 'sphere', 'wall']);
      for (const key of endKeys) assert.equal(B.fields().find(f => f.id === 'primitives.' + key).items.length, 2);
      assert.equal(bulkField('topWidth').placeholder, '—');
      const beforeA = object(), beforeB = object('b'), other = [object('sphere'), object('wall')], refs = clone(L.references()), floors = clone(L.floorState());
      assert(B.apply('primitives.topWidth', 2));
      for (const [id, original] of [['a', beforeA], ['b', beforeB]]) {
        const changed = object(id); center(changed).forEach((v, i) => near(v, center(original)[i]));
        near(P.endSizes(changed).topWidth, 2); near(P.endSizes(changed).bottomWidth, original.w);
      }
      assert.deepEqual([object('sphere'), object('wall')], other); assert.equal(run('history.length'), 1);
      assert.deepEqual(clone(L.references()), refs); assert.deepEqual(clone(L.floorState()), floors);
      run('undo()'); assert.deepEqual(object(), beforeA); assert.deepEqual(object('b'), beforeB);
      run('redo()'); near(P.endSizes(object('b')).topWidth, 2);
    });
    await check('bulk invalid collapse or protected target rejects the complete edit and stale inputs', () => {
      assert(UI.editEnds('L0', 'a', { topWidth: 0 })); select(['a', 'b']);
      let before = snapshot(); assert(!B.apply('primitives.bottomWidth', 0)); assert.equal(snapshot(), before);
      const stale = bulkField('topWidth'); select(['a', 'sphere']); before = snapshot();
      change(stale, '3'); assert.equal(snapshot(), before);
      select(['a', 'b']); run('floor().primitives.find(o=>o.id==="b").locked=true'); before = snapshot();
      assert(!B.apply('primitives.topWidth', 3)); assert.equal(snapshot(), before);
    });
    await check('floor-qualified bulk taper changes duplicate IDs independently in one Undo', () => {
      L.setVisible('L1', true); L.setFloorSelection(['L0', 'L1']);
      L.setReferences([{ floor: 'L0', kind: 'primitives', id: 'a' }, { floor: 'L1', kind: 'primitives', id: 'a' }]);
      const before = [object(), object('a', 'L1')], floors = clone(L.floorState());
      assert(B.apply('primitives.bottomDepth', 7));
      for (const [i, fid] of ['L0', 'L1'].entries()) { const after = object('a', fid); near(P.endSizes(after).bottomDepth, 7); near(P.endSizes(after).topDepth, before[i].h); center(after).forEach((v, axis) => near(v, center(before[i])[axis])); }
      assert.equal(run('history.length'), 1); assert.deepEqual(clone(L.floorState()), floors);
      run('undo()'); assert.deepEqual([object(), object('a', 'L1')], before);
    });
    await check('ordinary size fields and shared transform proposals preserve taper proportions', () => {
      assert(UI.editEnds('L0', 'a', { topWidth: 1, topDepth: 2 }));
      const taper = clone(object().taper); assert(UI.edit('L0', 'a', { w: 8, h: 3, height: 6 }));
      assert.deepEqual(object().taper, taper); assert.deepEqual(clone(P.endSizes(object())), { topWidth: 2, topDepth: 1, bottomWidth: 8, bottomDepth: 3 });
      select(['a', 'b']); const stamp = UI.transformScope(), fields = ['x', 'y', 'z', 'w', 'h', 'height', 'rotation', 'tiltX', 'tiltY'];
      const edits = ['a', 'b'].map(id => { const baseline = object(id), changes = Object.fromEntries(fields.map(k => [k, baseline[k]])); for (const k of ['w', 'h', 'height']) changes[k] *= 1.5; return { floor: 'L0', id, baseline, changes }; });
      assert(UI.editMany(edits, stamp)); assert.deepEqual(object().taper, taper);
      assert.deepEqual(clone(P.endSizes(object())), { topWidth: 3, topDepth: 1.5, bottomWidth: 12, bottomDepth: 4.5 });
      run('undo()'); assert.deepEqual(object(), edits[0].baseline);
    });
    await check('copy, duplicate, delete and Undo preserve taper without aliasing the original', () => {
      assert(UI.editEnds('L0', 'a', { topWidth: 1.5, bottomDepth: 2.5 })); const original = object();
      get('primitive-duplicate').click(); const objects = clone(run('floor().primitives'));
      const copied = objects.find(o => !['a', 'b', 'sphere', 'wall'].includes(o.id)); assert(copied); assert.deepEqual(copied.taper, original.taper);
      assert(UI.editEnds('L0', copied.id, { topWidth: 3 })); assert.deepEqual(object(), original);
      const before = run('JSON.stringify(model)'); L.removeSelection(); assert.equal(run('floor().primitives.length'), 4);
      run('undo()'); assert.equal(run('JSON.stringify(model)'), before);
    });
    await check('2D rendering and geometry export include real tapered geometry and retain the profile', () => {
      assert(UI.editEnds('L0', 'a', { topWidth: 1, bottomDepth: 2 })); const current = object();
      assert(get('plan').querySelector('[data-id="a"] [data-primitive-taper="true"]'));
      const level = w.BuildingExports.currentGeometry().levels.find(f => f.id === 'L0');
      assert.deepEqual(clone(level.primitives.find(o => o.id === 'a').taper), current.taper);
      const svg = new w.DOMParser().parseFromString(w.BuildingExports.floorSheet('L0'), 'image/svg+xml');
      assert.equal(svg.querySelector('parsererror'), null); assert(svg.querySelector('[data-primitive-taper="true"]'));
      const next = { ...P.endSizes(current), topWidth: 4, bottomWidth: 4, topDepth: 6, bottomDepth: 6 };
      assert(UI.editEnds('L0', 'a', next)); assert.equal(object().taper, undefined);
      assert.equal(get('plan').querySelector('[data-id="a"] [data-primitive-taper="true"]'), null);
    });
    await check('portable backup SHA envelope, import-as-copy and malformed-profile rejection are exact', async () => {
      assert(UI.editEnds('L0', 'a', { topWidth: 1.234567, topDepth: 2.345678, bottomWidth: 4.567891, bottomDepth: 3.456789 }));
      const originalId = run('currentBuilding().id'), original = clone(run('model')), payload = w.KERN_LOCAL_FILES.snapshot(), core = w.KERN_LOCAL_FILES.core;
      const encoded = await core.encode(payload), decoded = await core.decode(encoded);
      assert.deepEqual(clone(decoded.payload.collection.buildings.find(b => b.id === originalId).plan), original);
      await w.KERN_LOCAL_FILES.loadFile({ name: 'cube-taper-roundtrip.json', size: encoded.length, text: async () => encoded });
      assert(!get('local-files-restore').hidden); assert(!get('local-files-import').disabled); w.KERN_LOCAL_FILES.importSelected();
      const buildings = clone(run('buildingState.data.buildings'));
      const imported = buildings.find(b => b.id !== originalId && b.plan.floors.L0.primitives?.some(o => o.id === 'a' && o.taper));
      assert(imported); assert.deepEqual(imported.plan.floors.L0.primitives, original.floors.L0.primitives);
      assert.deepEqual(buildings.find(b => b.id === originalId).plan, original);
      for (const patch of [{ topX: -1 }, { topY: null }, { bottomX: .3 }]) { const bad = clone(original); Object.assign(bad.floors.L0.primitives[0].taper, patch); assert.throws(() => w.kernPlanner.validateImport(bad)); }
    });
    console.log('PASS ' + count + ' cube taper editor and IO checks');
  } finally { t.close(); }
})().catch(error => { console.error(error.stack); process.exitCode = 1; });
