const assert = require('assert');
const fs = require('fs');
const vm = require('vm');
const geometry = require('./dist/preview-geometry.js');
const stairs = require('./dist/stair-detail.js');

const EPS = 1e-6;
const round = value => Math.round(value * 1e6) / 1e6;
const room = (id, x, z, height = 3, extra = {}) => ({id, name: id, type: 'tech', x, y: 0, w: 10, h: 10, z, height, ...extra});
const planFor = (rooms, doors = [], z = 0) => ({version: 1, units: 'metres', floors: {L0: {name: 'Ground', z, rooms, doors, entrances: []}}});
const build = plan => {
  const before = JSON.stringify(plan);
  const result = geometry.build(plan, stairs);
  assert.equal(JSON.stringify(plan), before, 'Preview metadata must not mutate the editable plan');
  return result;
};
// Apply the runtime cut to output boxes, then compare the physical union rather
// than the number/order of bands used to represent it.
function cappedSpans(level, x, y, cutHeight, kind = 'wall') {
  const intervals = level.boxes.filter(box => box.kind === kind && x > box.x + EPS && x < box.x + box.w - EPS && y > box.y + EPS && y < box.y + box.h - EPS)
    .map(box => [box.z, Math.min(box.z + box.height, box.baseZ + cutHeight)])
    .filter(([bottom, top]) => top - bottom > EPS)
    .sort((a, b) => a[0] - b[0]);
  const result = [];
  for (const [bottom, top] of intervals) {
    const previous = result.at(-1);
    if (previous && bottom <= previous[1] + EPS) previous[1] = Math.max(previous[1], top);
    else result.push([bottom, top]);
  }
  return result.map(span => span.map(round));
}

const uneven = build(planFor([room('lower', 0, 0), room('upper', 10, 2)])).levels[0];
assert.deepStrictEqual(cappedSpans(uneven, 10, 2, 1.15), [[0, 1.15], [2, 3.15]], 'A gap above the lower cut must not erase the elevated owner');
assert.deepStrictEqual(cappedSpans(uneven, 10, 2, 10), [[0, 5]], 'A high cut restores the original deduplicated shared wall');
assert(uneven.boxes.filter(box => box.kind === 'wall').every(box => Number.isFinite(box.baseZ)));

const shortUpper = build(planFor([room('tallLower', 0, 0, 5), room('shortUpper', 10, 2, .5)])).levels[0];
assert.deepStrictEqual(cappedSpans(shortUpper, 10, 2, 1.15), [[0, 1.15], [2, 2.5]], 'An elevated short owner must stop contributing at its own top');
const disjoint = build(planFor([room('basement', 0, -4, 2), room('raised', 10, 1, 3)])).levels[0];
assert.deepStrictEqual(cappedSpans(disjoint, 10, 2, 1.15), [[-4, -2.85], [1, 2.15]]);

const elevatedDoor = {id: 'entry', a: 'a', b: 'b', width: 2, offset: .5, kind: 'door'};
const doorway = build(planFor([room('a', 0, 4), room('b', 10, 4)], [elevatedDoor])).levels[0];
const lintel = doorway.boxes.find(box => box.kind === 'wall' && box.x < 10 && box.x + box.w > 10 && box.y < 5 && box.y + box.h > 5);
assert(lintel, 'Door opening retains its lintel at full height');
assert.equal(lintel.baseZ, 4, 'Lintel cut datum is the room floor, not its own raised lower face');
assert.equal(round(lintel.z), 6.2);
assert.deepStrictEqual(cappedSpans(doorway, 10, 5, 1.15), [], 'Low cut removes the lintel instead of lowering it over the doorway');
assert.deepStrictEqual(cappedSpans(doorway, 10, 5, 2.5), [[6.2, 6.5]]);
assert.deepStrictEqual(cappedSpans(doorway, 10, 2, 1.15), [[4, 5.15]], 'Door jambs use the same floor-relative cut');
const unevenDoor = build(planFor([room('a', 0, 0, 5), room('b', 10, 2, 3)], [elevatedDoor])).levels[0];
assert.deepStrictEqual(cappedSpans(unevenDoor, 10, 5, 1.15), [[0, 1.15]]);
assert.deepStrictEqual(cappedSpans(unevenDoor, 10, 5, 3), [[0, 2], [4.2, 5]], 'Opening subtraction remains correct across owner bands');

const mass = build(planFor([room('mass', 0, 5, 2, {type: 'solid'})])).levels[0];
assert.equal(mass.boxes.find(box => box.kind === 'solid').baseZ, 5);
assert.deepStrictEqual(cappedSpans(mass, 5, 5, 1.15, 'solid'), [[5, 6.15]]);
assert.deepStrictEqual(cappedSpans(mass, 5, 5, 10, 'solid'), [[5, 7]]);
assert.equal(mass.rooms.length, 0, 'Concrete mass is not a room label');
console.log('PASS room-relative cut metadata: uneven/disjoint owners, owner-top boundaries, door lintels/openings and solid bases');

const holePlan = planFor([
  room('plate', 0, -2, 3, {name: 'One named room'}),
  room('void', 3, -2, 3, {type: 'void', y: 3, w: 4, h: 4})
]);
const holeLevel = build(holePlan).levels[0];
const slabParts = holeLevel.boxes.filter(box => box.kind === 'slab' && box.room === 'plate');
assert(slabParts.length > 1);
assert.equal(slabParts.reduce((sum, box) => sum + box.w * box.h, 0), 84);
assert.deepStrictEqual(holeLevel.rooms, [{id: 'plate', name: 'One named room', type: 'tech', x: 0, y: 0, w: 10, h: 10, z: -2}], 'Fragmented slabs produce one complete room label descriptor');

const context = {window: {}};
vm.runInNewContext(fs.readFileSync('dist/seed-v11.js', 'utf8'), context);
const seed = context.window.KERN_V11;
const snapshot = JSON.stringify(seed), preview = geometry.build(seed, stairs);
assert.equal(JSON.stringify(seed), snapshot);
const basement = preview.levels.find(level => level.id === 'B1');
assert.equal(basement.z, -5.8);
for (const id of ['garage', 'freight', 'maps']) {
  const descriptor = basement.rooms.find(room => room.id === id);
  assert.equal(descriptor.z, -9.8, `${id} label follows its dropped room floor`);
  const walls = basement.boxes.filter(box => box.kind === 'wall' && box.rooms.length === 1 && box.rooms[0] === id);
  assert(walls.length, `${id} needs an exterior wall fixture`);
  assert(walls.every(box => box.baseZ === -9.8));
  const visibleWalls = walls.filter(box => box.z < box.baseZ + 1.15 - EPS);
  assert(visibleWalls.length);
  for (const box of visibleWalls) assert.equal(round(Math.min(box.z + box.height, box.baseZ + 1.15)), -8.65, `${id} cut is 1.15 m above its actual floor`);
}
for (const [levelId, id] of [['B1', 'stair'], ['B1', 'transferstair'], ['B1', 'artifactstair'], ['L0', 'stair']]) {
  const level = preview.levels.find(level => level.id === levelId), source = seed.floors[levelId].rooms.find(room => room.id === id);
  assert.equal(level.rooms.filter(room => room.id === id).length, 1, `${levelId}/${id} has one label despite its removed stair slab`);
  assert(!level.boxes.some(box => box.kind === 'slab' && box.room === id));
  const descriptor = level.rooms.find(room => room.id === id);
  for (const key of ['name', 'x', 'y', 'w', 'h']) assert.equal(descriptor[key], source[key]);
  assert.equal(descriptor.z, source.z ?? level.z);
}
for (const level of preview.levels) {
  assert.equal(new Set(level.rooms.map(room => room.id)).size, level.rooms.length);
  assert(level.rooms.every(room => !['solid', 'void'].includes(room.type)));
}
console.log('PASS seed-v11 dropped B1 floors and independent room labels across void-fragmented slabs and calculated stair openings');

// Independent occupancy oracle: each input owner contributes only between its
// floor and min(its actual top, floor + cut). Door volume is then removed.
let comparisons = 0;
for (const az of [-4, 0, 2]) for (const bz of [-2, 0, .5, 3]) for (const ah of [.5, 3, 5]) for (const bh of [.5, 3, 5]) for (const hasDoor of [false, true]) {
  const a = room('a', 0, az, ah), b = room('b', 10, bz, bh);
  const level = geometry.build(planFor([a, b], hasDoor ? [elevatedDoor] : [])).levels[0];
  for (const cut of [.5, 1.15, 2.9, 8]) {
    const actualSpans = cappedSpans(level, 10, 5, cut);
    const doorBottom = Math.max(az, bz), doorTop = Math.min(az + ah, bz + bh, doorBottom + 2.2);
    for (let z = -4.97; z < 8; z += .13) {
      const expected = [a, b].some(owner => z > owner.z && z < Math.min(owner.z + owner.height, owner.z + cut)) && !(hasDoor && z > doorBottom && z < doorTop);
      const actual = actualSpans.some(([bottom, top]) => z > bottom && z < top);
      assert.equal(actual, expected, `Shared-wall union mismatch: ${JSON.stringify({az, bz, ah, bh, hasDoor, cut, z})}`);
      comparisons++;
    }
  }
}
console.log(`PASS ${comparisons} shared-wall occupancy checks against independently clipped input owners`);
