/* Centered cube-end geometry: public model API, independent coordinates and IO transforms. */
const assert = require('node:assert/strict');
const THREE = require('three');
const P = require('./dist/primitives.js');
const O = require('./dist/objects.js');
const T = require('./dist/selection-transform.js');
const W = require('./dist/thin-walls.js');
const clone = value => JSON.parse(JSON.stringify(value));
const near = (actual, expected, message = '', epsilon = 1e-6) => assert(Math.abs(actual - expected) <= epsilon, `${message}: ${actual} != ${expected}`);
const vectorNear = (actual, expected) => actual.forEach((value, index) => near(value, expected[index]));
const center = object => [object.x + object.w / 2, object.y + object.h / 2, object.z + object.height / 2];
const box = () => ({ ...P.create('cube', 'box'), x: 10, y: 20, z: 4, w: 4, h: 6, height: 8 });
const freeze = object => { for (const value of Object.values(object)) if (value && typeof value === 'object') freeze(value); return Object.freeze(object); };
let count = 0;
function check(name, fn) { fn(); count++; console.log('PASS ' + name); }
function expectedVertices(object, ends) {
  const c = center(object), out = [];
  const euler = new THREE.Euler(object.tiltX * Math.PI / 180, -object.rotation * Math.PI / 180, object.tiltY * Math.PI / 180, 'XYZ');
  for (const [width, depth, level] of [[ends.bottomWidth, ends.bottomDepth, -1], [ends.topWidth, ends.topDepth, 1]]) {
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
      const v = new THREE.Vector3(sx * width / 2, level * object.height / 2, sy * depth / 2).applyEuler(euler);
      out.push([v.x + c[0], v.z + c[1], v.y + c[2]]);
    }
  }
  return out;
}
function assertVertices(object, ends) {
  const actual = P.vertices(object), expected = expectedVertices(object, ends);
  assert.equal(actual.length, 8);
  for (const vertex of expected) assert(actual.some(other => other.every((value, axis) => Math.abs(value - vertex[axis]) < 1e-6)), 'Missing expected vertex ' + vertex.join(','));
  const b = P.bounds(object);
  for (const [axis, position, size] of [[0, 'x', 'w'], [1, 'y', 'h'], [2, 'z', 'height']]) {
    const values = expected.map(v => v[axis]);
    near(b[position], Math.min(...values)); near(b[size], Math.max(...values) - Math.min(...values));
  }
  const footprint = P.points(object);
  assert(footprint.every(p => actual.some(v => Math.abs(p[0] - v[0]) < 1e-6 && Math.abs(p[1] - v[1]) < 1e-6)));
  return actual;
}
check('legacy cubes keep all eight corners and implicit equal end sizes', () => {
  const object = freeze(box()), before = JSON.stringify(object);
  assert.deepEqual(P.endSizes(object), { topWidth: 4, topDepth: 6, bottomWidth: 4, bottomDepth: 6 });
  assertVertices(object, P.endSizes(object));
  assert.equal(JSON.stringify(object), before); assert.equal(object.taper, undefined);
});
check('shrinking the top keeps the center, other end, height and immutable source', () => {
  const original = freeze(box()), changed = P.reshape(original, { topWidth: 2, topDepth: 3 });
  assert.notEqual(changed, original); vectorNear(center(changed), center(original));
  assert.deepEqual(changed.taper, { topX: .5, topY: .5, bottomX: 1, bottomY: 1 });
  assert.deepEqual(P.endSizes(changed), { topWidth: 2, topDepth: 3, bottomWidth: 4, bottomDepth: 6 });
  assert.equal(changed.height, 8); assert.equal(changed.z, 4); assert.equal(original.taper, undefined);
  assertVertices(changed, P.endSizes(changed));
});
check('growing and shrinking either envelope dimension preserves its centered end positions', () => {
  const original = P.reshape(box(), { topWidth: 2, topDepth: 3 });
  const changed = P.reshape(freeze(original), { bottomWidth: 10, bottomDepth: 2 });
  vectorNear(center(changed), center(original)); near(changed.w, 10); near(changed.h, 3);
  near(changed.x, 7); near(changed.y, 21.5);
  assert.deepEqual(P.endSizes(changed), { topWidth: 2, topDepth: 3, bottomWidth: 10, bottomDepth: 2 });
  assertVertices(changed, P.endSizes(changed));
});
check('opposing largest width and depth produce the true eight-corner projected hull', () => {
  const changed = P.reshape(box(), { topWidth: 6, topDepth: 1, bottomWidth: 2, bottomDepth: 5 });
  near(changed.w, 6); near(changed.h, 5); assert.equal(P.points(changed).length, 8);
  assertVertices(changed, P.endSizes(changed));
});
check('zero top or bottom ends create finite pyramids and single-axis wedges', () => {
  for (const patch of [{ topWidth: 0, topDepth: 0 }, { bottomWidth: 0, bottomDepth: 0 }, { topWidth: 0 }, { bottomDepth: 0 }]) {
    const changed = P.reshape(box(), patch); P.validate(changed);
    const vertices = assertVertices(changed, P.endSizes(changed));
    assert(vertices.flat().every(Number.isFinite)); assert(P.points(changed).length >= 4);
    assert.equal(new Set(vertices.map(v => JSON.stringify(v))).size, Object.keys(patch).length === 2 ? 5 : 6);
    vectorNear(center(changed), center(box()));
  }
});
check('yaw, tilt, combined Euler rotations and their bounds use the actual tapered corners', () => {
  const ends = { topWidth: 1.2, topDepth: 2.7, bottomWidth: 4.3, bottomDepth: .8 };
  for (const orientation of [{ rotation: 90 }, { tiltX: 90 }, { tiltY: -90 }, { rotation: 37, tiltX: 23, tiltY: -41 }, { rotation: -146, tiltX: 89.999, tiltY: 117 }]) {
    const original = { ...box(), ...orientation }, changed = P.reshape(original, ends);
    vectorNear(center(changed), center(original)); assertVertices(changed, ends);
    for (const key of ['rotation', 'tiltX', 'tiltY']) assert.equal(changed[key], original[key]);
  }
});
check('overall resizing scales both ends in the saved normalized proportions', () => {
  const original = P.reshape(box(), { topWidth: 1, topDepth: 2, bottomWidth: 4, bottomDepth: 6 });
  const scaled = { ...clone(original), w: 10, h: 3, height: 16 }; P.validate(scaled);
  assert.deepEqual(scaled.taper, original.taper);
  assert.deepEqual(P.endSizes(scaled), { topWidth: 2.5, topDepth: 1, bottomWidth: 10, bottomDepth: 3 });
  assertVertices(scaled, P.endSizes(scaled));
});
check('tapered surface placement has zero support gap for floor, wall and sloping normals', () => {
  const original = P.reshape({ ...box(), rotation: 34, tiltX: 16, tiltY: -27 }, { topWidth: .8, topDepth: 1.4 });
  for (const normal of [{ x: 0, y: 0, z: 1 }, { x: 1, y: 0, z: 0 }, { x: .3, y: .4, z: .5 }, { x: 0, y: 0, z: -1 }]) {
    const hit = { x: 14, y: 18, z: 26, normal }, floorZ = 7, placed = P.place(original, hit, floorZ);
    const distances = P.vertices(placed).map(v => (v[0] - hit.x) * normal.x + (v[1] - hit.y) * normal.y + (v[2] + floorZ - hit.z) * normal.z);
    near(Math.min(...distances), 0, 'support gap', 2e-6); assert.deepEqual(placed.taper, original.taper);
  }
});
check('saved taper rejects incomplete, nonnumeric, out-of-range and unnormalized data', () => {
  const valid = { topX: .5, topY: .25, bottomX: 1, bottomY: 1 };
  for (const taper of [null, [], 'taper', {}, { topX: .5 }, { ...valid, topX: -1 }, { ...valid, topY: 1.001 }, { ...valid, bottomX: .9 }, { ...valid, bottomY: .9 }, { ...valid, topX: NaN }, { ...valid, topY: Infinity }, { ...valid, topX: '0.5' }, { ...valid, topX: null }]) {
    assert.throws(() => P.validate({ ...box(), taper }), undefined, JSON.stringify(taper));
  }
  for (const type of ['cylinder', 'sphere', 'hemisphere']) assert.throws(() => P.validate({ ...P.create(type, type), taper: valid }));
  assert.throws(() => P.validate({ ...W.create('wall', { x: 0, y: 0 }, { x: 4, y: 0 }), taper: valid }));
});
check('invalid end edits reject atomically while minimum supported envelopes still work', () => {
  const original = freeze(P.reshape(box(), { topWidth: 1 })), before = JSON.stringify(original);
  for (const patch of [{ topWidth: -1 }, { topDepth: NaN }, { bottomWidth: Infinity }, { topWidth: '2' }, { topWidth: null }, { bottomDepth: 150.001 }, { topWidth: 0, bottomWidth: 0 }, { topDepth: .01, bottomDepth: .01 }, { unsupported: 2 }]) assert.throws(() => P.reshape(original, patch));
  assert.equal(JSON.stringify(original), before);
  const smallest = P.reshape(box(), { topWidth: 0, bottomWidth: .02, topDepth: .02, bottomDepth: 0 });
  near(smallest.w, .02); near(smallest.h, .02); P.validate(smallest);
  for (const type of ['cylinder', 'sphere', 'hemisphere']) assert.throws(() => P.reshape(P.create(type, type), { topWidth: .5 }));
  assert.throws(() => P.reshape(W.create('wall', { x: 0, y: 0 }, { x: 4, y: 0 }), { topWidth: .5 }));
});
check('returning to equal ends restores ordinary cube geometry without cumulative center drift', () => {
  let object = box(); const c = center(object);
  for (let i = 0; i < 25; i++) { object = P.reshape(object, { topWidth: 1.234567, bottomWidth: 3.456789, topDepth: 7.654321, bottomDepth: .012345 }); object = P.reshape(object, { topWidth: 4, bottomWidth: 4, topDepth: 6, bottomDepth: 6 }); }
  vectorNear(center(object), c); assert.deepEqual(P.endSizes(object), P.endSizes(box())); assertVertices(object, P.endSizes(box()));
});
check('copy, paste, floor transfer and translated copies retain independent taper records', () => {
  const object = P.reshape({ ...box(), id: 'same' }, { topWidth: 1.5, bottomDepth: 2.5 });
  const floor = z => ({ name: 'Floor', z, rooms: [], doors: [], entrances: [], primitives: [] });
  const plan = { version: 1, units: 'metres', floors: { L0: floor(3), L1: floor(12) } }; plan.floors.L0.primitives = [object];
  const before = JSON.stringify(plan), refs = [{ floor: 'L0', kind: 'primitives', id: 'same' }];
  const bundle = O.snapshot(plan, 'L0', { rooms: [], doors: [], primitives: ['same'] });
  const pasted = O.paste(plan, bundle, 'L1', { x: 2, y: -3 }).plan.floors.L1.primitives[0];
  assert.notEqual(pasted.id, object.id); assert.deepEqual(pasted.taper, object.taper); assert.notEqual(pasted.taper, object.taper); near(pasted.x, object.x + 2); near(pasted.y, object.y - 3); near(pasted.z, object.z);
  const moved = O.move(plan, 'L0', { rooms: [], doors: [], primitives: ['same'] }, 'L1').plan;
  assert.equal(moved.floors.L0.primitives.length, 0); assert.deepEqual(moved.floors.L1.primitives[0].taper, object.taper);
  const translated = T.translate(plan, refs, 2, 3).plan.floors.L0.primitives[0]; assert.deepEqual(translated.taper, object.taper);
  const copied = T.copy(plan, refs).plan.floors.L0.primitives.find(o => o.id !== object.id); assert.deepEqual(copied.taper, object.taper); assert.notEqual(copied.taper, object.taper);
  assert.equal(JSON.stringify(plan), before);
});
console.log('PASS ' + count + ' cube taper model checks');
