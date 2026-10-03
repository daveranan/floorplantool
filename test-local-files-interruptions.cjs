/* Production-order local-files regressions. Filesystem handles are deterministic mocks. */
const fs = require('node:fs'), vm = require('node:vm'), Module = require('node:module');
const path = require('node:path'), assert = require('node:assert/strict'), { webcrypto } = require('node:crypto');
const repo = process.cwd(), staging = process.env.BACKUP_SHORTCUT_ASSETS || path.join(repo, 'dist');
process.chdir(repo);
let source = fs.readFileSync('test-support.cjs', 'utf8');
const scripts = [...fs.readFileSync('dist/index.html', 'utf8').matchAll(/<script src="([^"]+)\.js"/g)]
  .map(match => match[1]).filter(name => !name.startsWith('local-files'));
source = source.replace(/const scripts=\[[^;]+;/, 'const scripts=' + JSON.stringify(scripts) + ';');
const harness = new Module(path.join(repo, 'test-support.cjs'), module);
harness.filename = path.join(repo, 'test-support.cjs');
harness.paths = Module._nodeModulePaths(repo);
harness._compile(source, harness.filename);
const opened = new Set(), delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function boot() {
  const t = harness.exports.boot();
  opened.add(t);
  Object.defineProperty(t.w.crypto, 'subtle', { value: webcrypto.subtle });
  t.w.TextEncoder = TextEncoder;
  t.w.showDirectoryPicker = async () => t.dir;
  for (const name of ['local-files-core.js', 'local-files.js']) {
    vm.runInContext(fs.readFileSync(path.join(name==='local-files.js'?staging:path.join(repo,'dist'), name), 'utf8'), t.dom.getInternalVMContext(), { filename: name });
  }
  await Promise.resolve(); await Promise.resolve();
  return t;
}
function close(t) { t.close(); opened.delete(t); }
function fakeDir() {
  const files = new Map();
  return {
    name: 'test-backups', files,
    queryPermission: async () => 'granted', requestPermission: async () => 'granted',
    entries: async function* () { yield* files.entries(); },
    async getFileHandle(name, options) {
      if (files.has(name)) return files.get(name);
      if (!options?.create) throw Object.assign(Error('missing'), { name: 'NotFoundError' });
      const handle = {
        name, kind: 'file', data: '',
        async createWritable() {
          let pending = '';
          return { write: async text => { pending = text; }, close: async () => { handle.data = pending; }, abort: async () => {} };
        },
        getFile: async () => ({ size: Buffer.byteLength(handle.data), text: async () => handle.data })
      };
      files.set(name, handle);
      return handle;
    },
    removeEntry: async name => { files.delete(name); }
  };
}
async function enable(t) { t.dir = fakeDir(); await t.w.KERN_LOCAL_FILES.chooseFolder(); }
async function load(t, payload, name = 'backup.json') {
  const text = await t.w.KERN_LOCAL_FILES.core.encode(payload);
  await t.w.KERN_LOCAL_FILES.loadFile({ name, size: Buffer.byteLength(text), text: async () => text });
}
function project(payload) {
  payload.workspace = {
    schemaVersion: 1, projects: [{ id: 'project-imported', name: 'Restore Group' }],
    buildingProjects: { [payload.collection.buildings[0].id]: 'project-imported' }, openTabs: []
  };
}
async function statusAndHistory() {
  const t = await boot(), api = t.w.KERN_LOCAL_FILES;
  assert(t.get('local-files-badge'));
  t.w.KERN_WORKSPACE.openBuilding(t.run('currentBuilding().id'));
  assert(t.get('local-files-badge'), 'Backup badge survives workspace navigation');
  await enable(t);
  assert.equal(api.getStatus().status, 'saved');
  assert.equal(t.dir.files.size, 1);
  const before = api.core.contentKey(api.snapshot());
  t.w.KERN_HISTORY.named(); t.get('historyname').value = 'Important named version';
  t.get('historynameform').onsubmit({ preventDefault() {} });
  assert.notEqual(api.core.contentKey(api.snapshot()), before, 'Named history dirties disk backup');
  api.changed(); assert.equal(api.getStatus().status, 'pending');
  await api.flush();
  const disk = JSON.parse([...t.dir.files.values()].at(-1).data);
  assert(disk.payload.browserStorage.raw['kern-version-history-v1'].includes('Important named version'));
  await t.get('local-files-pause').onclick(); assert.equal(api.getStatus().status, 'paused');
  await t.get('local-files-pause').onclick();
  assert.equal(api.getStatus().status, 'saved', 'Resume with no changes clears pending status');
  close(t);
}
async function transientGestures() {
  const t = await boot();
  t.w.KERN_WORKSPACE.openBuilding(t.run('currentBuilding().id'));
  t.run(`model={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,rooms:[{id:'a',name:'A',type:'tech',x:0,y:0,w:8,h:8}],doors:[],entrances:[]}}};floorId='L0';viewBounds=null;setSelection({rooms:['a']});setTool('rotate');render();save();`);
  await enable(t);
  const fire = (type, x, y, target = t.get('plan')) => {
    const event = new t.w.MouseEvent(type, { bubbles: true, clientX: x, clientY: y, button: 0 });
    Object.defineProperty(event, 'pointerId', { value: 9 }); target.dispatchEvent(event);
  };
  const handle = i => t.get('plan').querySelector(`[data-rotate-vertex="${i}"]`);
  const original = t.run('JSON.stringify(model)');
  fire('pointerdown', 0, 0, handle(0)); fire('pointerup', 0, 0);
  fire('pointerdown', 8, 0, handle(1)); fire('pointermove', 8 * Math.cos(Math.PI / 9), 8 * Math.sin(Math.PI / 9));
  assert.notEqual(t.run('JSON.stringify(model)'), original, 'Rotation fixture has a live edit');
  assert.equal(t.run('!!drag || !!widthEdit || !!KERN_ROUTE_UI.dragging'), false);
  await t.w.KERN_LOCAL_FILES.flush();
  assert.equal(t.dir.files.size, 1, 'Private rotation gesture is excluded from automatic backups');
  assert.equal(JSON.stringify(JSON.parse([...t.dir.files.values()][0].data).payload.collection.buildings[0].plan), original);
  t.w.dispatchEvent(new t.w.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  assert.equal(t.run('JSON.stringify(model)'), original);
  t.run("setTool('select');setSelection({rooms:['a']});KERN_SHAPE_UI.editRoom(room('a'));");
  fire('pointerdown', 0, 0, t.get('plan').querySelector('[data-shape-vertex="0"]')); fire('pointermove', 1, 0);
  assert.notEqual(t.run('JSON.stringify(model)'), original, 'Point-edit fixture has a live edit');
  await t.w.KERN_LOCAL_FILES.flush();
  assert.equal(t.dir.files.size, 1, 'Private point-edit gesture is excluded from automatic backups');
  t.w.KERN_SHAPE_UI.cancel(); assert.equal(t.run('JSON.stringify(model)'), original);
  close(t);
}
async function homeShortcut() {
  const t = await boot(); let picks = 0;
  t.w.showSaveFilePicker = async () => { picks++; throw Object.assign(Error('cancel'), { name: 'AbortError' }); };
  const event = new t.w.KeyboardEvent('keydown', { key: 's', code: 'KeyS', ctrlKey: true, bubbles: true, cancelable: true });
  t.doc.body.dispatchEvent(event);
  assert.equal(picks, 0, 'Home Ctrl+S never opens Save As'); assert(event.defaultPrevented);assert(t.get('local-files-dialog').open, 'No configured folder shows backup setup');
  await delay(10); close(t);
}
async function pickerInterruption() {
  const t = await boot(); await enable(t);
  const api = t.w.KERN_LOCAL_FILES, scheduled = new Map(); let serial = 10000;
  t.w.setTimeout = (fn, ms) => { const id = ++serial; scheduled.set(id, { fn, ms }); return id; };
  t.w.clearTimeout = id => scheduled.delete(id);
  t.run("model.title='edit awaiting disk backup';save()");
  const timer = [...scheduled.entries()].find(([, entry]) => entry.ms === 300000);
  assert(timer, 'Edit schedules a disk backup');
  t.run("model.title='another edit before five minutes';save()");assert.equal(scheduled.get(timer[0]),timer[1],'Further edits do not restart the five-minute timer');
  Object.defineProperty(t.doc,'visibilityState',{value:'hidden',configurable:true});t.doc.dispatchEvent(new t.w.Event('visibilitychange'));await delay(10);assert.equal(t.dir.files.size,1,'Hiding a tab must not bypass the five-minute interval');
  let cancelPicker;
  t.w.showSaveFilePicker = () => new Promise((resolve, reject) => { cancelPicker = reject; });
  const manual = api.saveCopy(true);
  scheduled.delete(timer[0]); timer[1].fn(); await Promise.resolve();
  cancelPicker(Object.assign(Error('user cancelled'), { name: 'AbortError' })); await manual; api.changed();
  const retry = [...scheduled.entries()].find(([, entry]) => entry.ms >= 2500);
  assert(retry, 'Cancelled picker cannot consume the only automatic backup timer');
  scheduled.delete(retry[0]); retry[1].fn(); await delay(30);
  assert.equal(t.dir.files.size, 2, 'Deferred disk backup completes after picker cancellation');
  assert.equal(api.getStatus().status, 'saved'); close(t);
}
async function importSafety() {
  const big = await boot(), payload = big.w.KERN_LOCAL_FILES.snapshot(), id = payload.collection.buildings[0].id;
  const plan = JSON.parse(JSON.stringify(payload.collection.buildings[0].plan)); plan.title = 'x'.repeat(1250000);
  payload.browserStorage.raw['kern-version-history-v1'] = JSON.stringify({ schemaVersion: 1, buildings: {
    [id]: [{ id: 'large', at: '2026-10-02T00:00:00.000Z', kind: 'named', name: 'Large imported version', plan }]
  } });
  const originalHistory = big.w.localStorage.getItem('kern-version-history-v1');
  await load(big, payload); big.w.KERN_LOCAL_FILES.importSelected();
  assert.equal(big.w.localStorage.getItem('kern-version-history-v1'), originalHistory, 'Oversized history leaves originals intact');
  assert.match(big.get('local-files-result').textContent, /History not restored.*history budget/);
  big.get('local-files-close').click(); big.w.KERN_HISTORY.named(); big.get('historyname').value = 'New after import';
  big.get('historynameform').onsubmit({ preventDefault() {} });
  assert(!big.get('historystatus').textContent.includes('history is full'));
  assert(big.w.KERN_HISTORY.entries(big.run('currentBuilding().id')).some(row => row.name === 'New after import'));
  close(big);

  const t = await boot(); await enable(t);
  const badHistory = t.w.KERN_LOCAL_FILES.snapshot(); project(badHistory);
  badHistory.browserStorage.raw['kern-version-history-v1'] = '{bad history';
  await load(t, badHistory); t.w.KERN_LOCAL_FILES.importSelected();
  assert.match(t.get('local-files-result').textContent, /History not restored/, 'Import warning survives dirty-status refresh');
  await t.w.KERN_LOCAL_FILES.flush();
  assert.match(t.get('local-files-result').textContent, /History not restored/, 'Import warning survives completed disk backup');
  close(t);

  const stale = await boot(), p = stale.w.KERN_LOCAL_FILES.snapshot(); project(p);
  p.browserStorage.raw['kern-version-history-v1'] = JSON.stringify({ schemaVersion: 1, buildings: {} });
  stale.w.localStorage.setItem('kern-workspace-v1', 'changed by another tab');
  await load(stale, p); stale.w.KERN_LOCAL_FILES.importSelected();
  assert.match(stale.get('local-files-result').textContent, /Projects not fully restored/);
  assert.equal(stale.w.localStorage.getItem('kern-workspace-v1'), 'changed by another tab');
  close(stale);
}
async function cancelledLoadAndRecoverySource() {
  const t = await boot(), payload = t.w.KERN_LOCAL_FILES.snapshot();
  const text = await t.w.KERN_LOCAL_FILES.core.encode(payload); let finishRead;
  t.w.KERN_LOCAL_FILES.show();
  const reading = t.w.KERN_LOCAL_FILES.loadFile({ name: 'slow.json', size: text.length, text: () => new Promise(resolve => { finishRead = resolve; }) });
  t.get('local-files-close').click(); assert(!t.get('local-files-dialog').open);
  finishRead(text); await reading;
  assert(!t.get('local-files-dialog').open, 'Stale read completion cannot reopen a closed dialog');
  assert(t.get('local-files-restore').hidden);
  const collection = JSON.parse(t.run('JSON.stringify(buildingState.data)')), id = collection.buildings[0].id;
  const workspace = { schemaVersion: 1, projects: [{ id: 'project-original', name: 'Original group' }], buildingProjects: { [id]: 'project-original' }, openTabs: [id] };
  const backup = { format: 'kern-storage-recovery', schemaVersion: 1, raw: { 'kern-buildings-v1': JSON.stringify(collection), 'kern-workspace-v1': JSON.stringify(workspace) } };
  const sources = t.w.KERN_LOCAL_FILES.core.sources(backup);
  assert.equal(sources[0].workspace.projects[0].name, 'Original group');
  assert.equal(sources[0].workspace.buildingProjects[id], 'project-original'); close(t);
}
(async () => {
  try {
    await statusAndHistory(); await transientGestures(); await homeShortcut(); await pickerInterruption();
    await importSafety(); await cancelledLoadAndRecoverySource();
    console.log('PASS local-files interruptions: stable badge, history dirty, pause/resume, rotate/point gestures, Home shortcut, cancelled picker retry, history budget, durable import warnings, stale project protection, Close cancellation and recovery groups');
  } finally { for (const t of opened) t.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
