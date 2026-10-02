'use strict';
/* Pure synthetic regression tests for smart automatic-backup retention.
 * Run from anywhere: node test-retention-calendar.cjs [path/to/local-files-core.js]
 * Tests never touch a real backup directory or delete files.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { webcrypto } = require('node:crypto');
const defaultCore = fs.existsSync(path.join(__dirname, 'dist/local-files-core.js')) ? path.join(__dirname, 'dist/local-files-core.js') : path.resolve(__dirname, '../kern-planner/dist/local-files-core.js');
const corePath = process.argv[2] ? path.resolve(process.argv[2]) : defaultCore;
const context = { crypto: webcrypto, TextEncoder, Uint8Array, Date, Math, JSON, Map, Set, Intl, console };
vm.createContext(context);
vm.runInContext(fs.readFileSync(corePath, 'utf8'), context, { filename: corePath });
const C = context.KERN_LOCAL_FILES_CORE;
assert.equal(typeof C.retentionKeep, 'function', 'Core must export retentionKeep(entries, options)');

const entry = (name, at, extra = {}) => ({ name, at, valid: true, ...extra });
const base = { timeZone: 'UTC', now: '2026-10-02T23:59:59.999Z', latest: 0, dailyDays: 0, weeklyWeeks: 0, monthlyMonths: 0 };
let passed = 0;
function check(label, entries, options, expected) {
  const frozen = JSON.stringify(entries);
  const opts = { ...base, ...options };
  const frozenOpts = JSON.stringify(opts);
  const kept = C.retentionKeep(entries, opts);
  assert(kept && typeof kept.has === 'function' && typeof kept[Symbol.iterator] === 'function', `${label}: return a Set-compatible collection`);
  assert.deepEqual([...kept].sort(), [...expected].sort(), label);
  assert.equal(JSON.stringify(entries), frozen, `${label}: entries must not mutate`);
  assert.equal(JSON.stringify(opts), frozenOpts, `${label}: options must not mutate`);
  passed++;
}

check('empty directories and disabled tiers are harmless', [], {}, []);
check('disabled tiers do not fabricate anchors', [entry('old', '2020-01-01T00:00:00.000Z')], {}, []);
check('latest tier orders by instant rather than filename', [
  entry('z-old', '2026-10-01T12:00:00.000Z'),
  entry('a-new', '2026-10-02T12:00:00.000Z'),
  entry('y-middle', '2026-10-02T10:00:00.000Z')
], { latest: 2 }, ['a-new', 'y-middle']);
check('daily includes today and the prior six calendar dates only', [
  entry('outside-but-within-168-hours', '2026-09-25T23:59:59.999Z'),
  entry('first-day-early', '2026-09-26T00:00:00.000Z'),
  entry('first-day-last', '2026-09-26T23:59:59.999Z'),
  entry('last-night', '2026-10-01T23:59:59.999Z'),
  entry('today-so-far', '2026-10-02T00:00:00.000Z')
], { now: '2026-10-02T00:00:00.000Z', dailyDays: 7 }, ['first-day-last', 'last-night', 'today-so-far']);
check('daily keeps each available day and does not synthesize missing days', [
  entry('sep26', '2026-09-26T22:00:00.000Z'),
  entry('sep28-early', '2026-09-28T05:00:00.000Z'),
  entry('sep28-late', '2026-09-28T20:00:00.000Z'),
  entry('oct2', '2026-10-02T20:00:00.000Z')
], { dailyDays: 7 }, ['sep26', 'sep28-late', 'oct2']);
check('daily crosses year and leap-day boundaries without rolling-hour arithmetic', [
  entry('dec25-outside', '2025-12-25T23:59:59.999Z'),
  entry('dec26', '2025-12-26T00:00:00.000Z'),
  entry('dec31', '2025-12-31T23:59:59.999Z'),
  entry('jan1', '2026-01-01T00:00:00.000Z')
], { now: '2026-01-01T01:00:00.000Z', dailyDays: 7 }, ['dec26', 'dec31', 'jan1']);
check('daily retains leap day as a distinct day', [
  entry('feb23-outside', '2024-02-23T23:59:59.999Z'),
  entry('feb24', '2024-02-24T00:00:00.000Z'),
  entry('feb28', '2024-02-28T23:59:59.999Z'),
  entry('feb29-a', '2024-02-29T00:00:00.000Z'),
  entry('feb29-z', '2024-02-29T23:59:59.999Z'),
  entry('mar1', '2024-03-01T00:00:00.000Z')
], { now: '2024-03-01T12:00:00.000Z', dailyDays: 7 }, ['feb24', 'feb28', 'feb29-z', 'mar1']);

check('weekly is a rolling 56-date window, selecting only Monday and Thursday', [
  entry('outside-thu', '2026-08-06T23:59:59.999Z'),
  entry('outside-fri', '2026-08-07T23:59:59.999Z'),
  entry('first-sat', '2026-08-08T12:00:00.000Z'),
  entry('first-mon-early', '2026-08-10T00:00:00.000Z'),
  entry('first-mon-last', '2026-08-10T23:59:59.999Z'),
  entry('first-thu', '2026-08-13T20:00:00.000Z'),
  entry('last-mon', '2026-09-28T20:00:00.000Z'),
  entry('last-thu', '2026-10-01T20:00:00.000Z'),
  entry('today-fri', '2026-10-02T20:00:00.000Z')
], { weeklyWeeks: 8 }, ['first-mon-last', 'first-thu', 'last-mon', 'last-thu']);
check('weekly includes the boundary Monday at the start of a 56-date window', [
  entry('prior-thu-outside', '2026-08-06T23:59:59.999Z'),
  entry('boundary-mon', '2026-08-10T00:00:00.000Z'),
  entry('last-thu', '2026-10-01T23:59:59.999Z'),
  entry('today-sun', '2026-10-04T12:00:00.000Z')
], { now: '2026-10-04T23:59:59.999Z', weeklyWeeks: 8 }, ['boundary-mon', 'last-thu']);
check('weekly does not substitute a neighboring day for a missing Monday or Thursday', [
  entry('sun', '2026-09-27T23:59:59.999Z'),
  entry('tue', '2026-09-29T00:00:00.000Z'),
  entry('wed', '2026-09-30T23:59:59.999Z'),
  entry('fri', '2026-10-02T00:00:00.000Z')
], { weeklyWeeks: 8 }, []);

check('monthly includes current month plus prior eleven, across a year', [
  entry('jan2026-outside', '2026-01-31T23:59:59.999Z'),
  entry('feb2026-early', '2026-02-01T00:00:00.000Z'),
  entry('feb2026-last', '2026-02-28T23:59:59.999Z'),
  entry('dec2026', '2026-12-31T23:59:59.999Z'),
  entry('jan2027-early', '2027-01-01T00:00:00.000Z'),
  entry('jan2027-latest', '2027-01-02T12:00:00.000Z')
], { now: '2027-01-02T12:00:00.000Z', monthlyMonths: 12 }, ['feb2026-last', 'dec2026', 'jan2027-latest']);
check('monthly uses month buckets rather than a rolling 365-day duration', [
  entry('oct2025-outside', '2025-10-31T23:59:59.999Z'),
  entry('nov2025', '2025-11-01T00:00:00.000Z'),
  entry('oct2026', '2026-10-01T00:00:00.000Z')
], { now: '2026-10-02T00:00:00.000Z', monthlyMonths: 12 }, ['nov2025', 'oct2026']);
check('monthly handles February 29 and month-end without date overflow', [
  entry('feb2023-outside', '2023-02-28T23:59:59.999Z'),
  entry('mar2023', '2023-03-31T23:59:59.999Z'),
  entry('jan2024', '2024-01-31T23:59:59.999Z'),
  entry('feb28', '2024-02-28T23:59:59.999Z'),
  entry('feb29', '2024-02-29T23:59:59.999Z')
], { now: '2024-02-29T23:59:59.999Z', monthlyMonths: 12 }, ['mar2023', 'jan2024', 'feb29']);

const aroundUtcMidnight = [
  entry('utc-oct1-late', '2026-10-01T23:30:00.000Z'),
  entry('utc-oct2-early', '2026-10-02T00:30:00.000Z')
];
check('UTC daily anchor uses UTC midnight', aroundUtcMidnight, { now: '2026-10-02T01:00:00.000Z', dailyDays: 7, timeZone: 'UTC' }, ['utc-oct1-late', 'utc-oct2-early']);
check('New York daily anchor combines UTC dates falling on one local day', aroundUtcMidnight, { now: '2026-10-02T01:00:00.000Z', dailyDays: 7, timeZone: 'America/New_York' }, ['utc-oct2-early']);
check('Tokyo daily anchor combines UTC dates falling on one local day', aroundUtcMidnight, { now: '2026-10-02T01:00:00.000Z', dailyDays: 7, timeZone: 'Asia/Tokyo' }, ['utc-oct2-early']);
check('Tokyo daily cutoff uses local midnight, including the oldest day', [
  entry('outside-local-sep25', '2026-09-25T14:59:59.999Z'),
  entry('oldest-local-sep26', '2026-09-25T15:00:00.000Z'),
  entry('local-oct2', '2026-10-01T15:00:00.000Z')
], { now: '2026-10-01T16:00:00.000Z', dailyDays: 7, timeZone: 'Asia/Tokyo' }, ['oldest-local-sep26', 'local-oct2']);
check('New York weekly uses local Thursday even when UTC has reached Friday', [
  entry('utc-thu-local-wed', '2026-10-01T03:59:59.999Z'),
  entry('local-thu-start', '2026-10-01T04:00:00.000Z'),
  entry('local-thu-last', '2026-10-02T03:59:59.999Z'),
  entry('local-fri', '2026-10-02T04:00:00.000Z')
], { now: '2026-10-02T05:00:00.000Z', weeklyWeeks: 8, timeZone: 'America/New_York' }, ['local-thu-last']);
check('Tokyo weekly uses local Monday even when UTC is Sunday', [
  entry('utc-sun-local-mon', '2026-09-27T15:00:00.000Z'),
  entry('utc-mon-local-mon-last', '2026-09-28T14:59:59.999Z'),
  entry('utc-mon-local-tue', '2026-09-28T15:00:00.000Z')
], { weeklyWeeks: 8, timeZone: 'Asia/Tokyo' }, ['utc-mon-local-mon-last']);
check('Tokyo monthly cutoff follows the stored timezone over New Year', [
  entry('local-jan2026-outside', '2026-01-31T14:59:59.999Z'),
  entry('local-feb2026', '2026-01-31T15:00:00.000Z'),
  entry('local-dec2026-last', '2026-12-31T14:59:59.999Z'),
  entry('local-jan2027', '2026-12-31T15:00:00.000Z')
], { now: '2026-12-31T16:00:00.000Z', monthlyMonths: 12, timeZone: 'Asia/Tokyo' }, ['local-feb2026', 'local-dec2026-last', 'local-jan2027']);

check('New York spring DST keeps seven local dates, not seven elapsed 24-hour periods', [
  entry('outside-mar4', '2026-03-05T04:59:59.999Z'),
  entry('oldest-mar5', '2026-03-05T05:00:00.000Z'),
  entry('mar8-before-gap', '2026-03-08T06:59:59.999Z'),
  entry('mar8-after-gap', '2026-03-08T07:01:00.000Z'),
  entry('mar11', '2026-03-11T04:00:00.000Z')
], { now: '2026-03-11T04:30:00.000Z', dailyDays: 7, timeZone: 'America/New_York' }, ['oldest-mar5', 'mar8-after-gap', 'mar11']);
check('New York fall DST retains the oldest local date past 168 elapsed hours', [
  entry('outside-oct28', '2026-10-29T03:59:59.999Z'),
  entry('oldest-oct29', '2026-10-29T04:00:00.000Z'),
  entry('nov1-first-0130', '2026-11-01T05:30:00.000Z'),
  entry('nov1-second-0130', '2026-11-01T06:30:00.000Z'),
  entry('nov4', '2026-11-05T04:00:00.000Z')
], { now: '2026-11-05T04:59:59.999Z', dailyDays: 7, timeZone: 'America/New_York' }, ['oldest-oct29', 'nov1-second-0130', 'nov4']);
check('New York weekly boundary survives spring DST', [
  entry('outside-feb26', '2026-02-27T04:59:59.999Z'),
  entry('boundary-mon-mar2', '2026-03-02T05:00:00.000Z'),
  entry('last-thu-apr23', '2026-04-24T03:59:59.999Z'),
  entry('today-sun', '2026-04-27T02:00:00.000Z')
], { now: '2026-04-27T03:59:59.999Z', weeklyWeeks: 8, timeZone: 'America/New_York' }, ['boundary-mon-mar2', 'last-thu-apr23']);

const tied = ['anchor-a', 'anchor-z', 'anchor-m'].map(name => entry(name, '2026-10-01T20:00:00.000Z'));
check('equal instants select the greatest name deterministically for calendar tiers', tied, { dailyDays: 7, weeklyWeeks: 8, monthlyMonths: 12 }, ['anchor-z']);
check('equal instants still count as distinct files in latest tier', tied, { latest: 2 }, ['anchor-z', 'anchor-m']);
check('input order does not change tie decisions', [...tied].reverse(), { latest: 2, dailyDays: 7, weeklyWeeks: 8, monthlyMonths: 12 }, ['anchor-z', 'anchor-m']);

const unsafe = [
  entry('malformed', 'not-a-date'),
  entry('missing'),
  entry('null-date', null),
  entry('empty-date', ''),
  entry('future', '2026-10-03T00:00:00.000Z'),
  entry('valid-new', '2026-10-02T22:00:00.000Z'),
  entry('valid-old', '2026-10-02T21:00:00.000Z')
];
check('invalid and future timestamps are preserved without consuming latest slots', unsafe, { latest: 1 }, ['malformed', 'missing', 'null-date', 'empty-date', 'future', 'valid-new']);
check('future timestamps do not replace calendar anchors for the same date', [
  entry('past-today', '2026-10-02T12:00:00.000Z'),
  entry('future-today', '2026-10-02T14:00:00.000Z'),
  entry('past-month', '2026-09-30T12:00:00.000Z')
], { now: '2026-10-02T13:00:00.000Z', dailyDays: 7, monthlyMonths: 12 }, ['past-today', 'future-today', 'past-month']);
check('the exact now instant is eligible for tier selection', [
  entry('one-ms-before', '2026-10-02T12:59:59.999Z'),
  entry('at-now', '2026-10-02T13:00:00.000Z'),
  entry('one-ms-future', '2026-10-02T13:00:00.001Z')
], { now: '2026-10-02T13:00:00.000Z', latest: 1 }, ['at-now', 'one-ms-future']);

check('strict canonical UTC dates reject normalization, locale parsing, and ambiguous inputs safely', [
  entry('impossible-feb30', '2026-02-30T00:00:00.000Z'),
  entry('impossible-hour24', '2026-09-30T24:00:00.000Z'),
  entry('bare-local-date', '2026-09-30'),
  entry('locale-date', '09/30/2026'),
  entry('offset-date', '2026-09-30T04:00:00.000+04:00'),
  entry('no-milliseconds', '2026-09-30T00:00:00Z'),
  entry('numeric-date', 1790726400000),
  entry('verified-new', '2026-10-01T00:00:00.000Z'),
  entry('verified-old', '2026-09-30T00:00:00.000Z')
], { latest: 1 }, ['impossible-feb30', 'impossible-hour24', 'bare-local-date', 'locale-date', 'offset-date', 'no-milliseconds', 'numeric-date', 'verified-new']);
check('explicitly invalid entries are preserved without displacing valid tier winners', [
  entry('invalid-newest', '2026-10-02T22:00:00.000Z', { valid: false }),
  entry('verified-latest', '2026-10-02T21:00:00.000Z'),
  entry('verified-older', '2026-10-02T20:00:00.000Z')
], { latest: 1, dailyDays: 7, monthlyMonths: 12 }, ['invalid-newest', 'verified-latest']);
const safetyFixture = [entry('must-not-delete', '2020-01-01T00:00:00.000Z')];
for (const timeZone of [undefined, '', 'Invalid/Time_Zone']) {
  assert.throws(() => C.retentionKeep(safetyFixture, { ...base, timeZone }), undefined, 'missing/invalid timezone must stop cleanup');
  passed++;
}
assert.throws(() => C.retentionKeep(safetyFixture, { ...base, now: 'not-a-date' }), /date.*invalid|invalid.*date/i, 'invalid current time must stop cleanup');
passed++;

// Dense fixture has two captures per UTC date for 800 dates. Explicit expected
// anchors make the test independent of production grouping/retention arithmetic.
const dense = [];
for (let i = 0; i < 800; i++) {
  const day = new Date(Date.UTC(2026, 9, 2 - i)).toISOString().slice(0, 10);
  dense.push(entry(`${day}-early`, `${day}T12:00:00.000Z`), entry(`${day}-late`, `${day}T13:00:00.000Z`));
}
const latest30 = [];
for (let d = 18; d <= 30; d++) latest30.push(`2026-09-${d}-early`, `2026-09-${d}-late`);
latest30.push('2026-10-01-early', '2026-10-01-late', '2026-10-02-early', '2026-10-02-late');
const weeklyExtras = ['2026-08-10','2026-08-13','2026-08-17','2026-08-20','2026-08-24','2026-08-27','2026-08-31','2026-09-03','2026-09-07','2026-09-10','2026-09-14','2026-09-17'].map(d => `${d}-late`);
const monthlyExtras = ['2025-11-30','2025-12-31','2026-01-31','2026-02-28','2026-03-31','2026-04-30','2026-05-31','2026-06-30','2026-07-31'].map(d => `${d}-late`);
const expectedUnion = [...latest30, ...weeklyExtras, ...monthlyExtras];
assert.equal(new Set(expectedUnion).size, 51);
for (const timeZone of ['UTC', 'America/New_York', 'Asia/Tokyo']) {
  check(`all tiers retain their 51-file union for dense history in ${timeZone}`, dense, { now: '2026-10-02T14:00:00.000Z', timeZone, latest: 30, dailyDays: 7, weeklyWeeks: 8, monthlyMonths: 12 }, expectedUnion);
}
check('default policy matches explicit 30/7/8/12 policy', dense, { latest: undefined, dailyDays: undefined, weeklyWeeks: undefined, monthlyMonths: undefined, now: '2026-10-02T14:00:00.000Z' }, expectedUnion);

// Repeated caller inputs, reversal, and host TZ changes must not alter the
// configured calendar or mutate files. Also run this suite with different TZ
// environment values to establish independence from the host's local timezone.
const permutation = dense.filter((_, i) => i % 2).reverse().concat(dense.filter((_, i) => !(i % 2)).reverse());
check('retention is invariant under arbitrary enumeration order', permutation, { now: '2026-10-02T14:00:00.000Z', latest: 30, dailyDays: 7, weeklyWeeks: 8, monthlyMonths: 12 }, expectedUnion);
console.log(`PASS retention calendar: ${passed} pure cases; UTC/New York/Tokyo; local day/week/month boundaries, leap years, spring/fall DST, 51-file tier union, deterministic ties, invalid/future safety, and nonmutation (${corePath})`);
