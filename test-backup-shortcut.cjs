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

const key=(t,options={})=>{const e=new t.w.KeyboardEvent('keydown',{key:'s',code:'KeyS',ctrlKey:true,bubbles:true,cancelable:true,...options});t.doc.body.dispatchEvent(e);return e;};
async function settled(t){for(let i=0;i<100;i++){await delay(10);if(!t.w.KERN_LOCAL_FILES.getStatus().writing)return;}throw Error('Write did not settle');}
(async()=>{try{
 const t=await boot(),api=t.w.KERN_LOCAL_FILES;let saveAs=0,picks=0,permissions=0;
 t.w.showSaveFilePicker=async()=>{saveAs++;throw Error('Save As must not be called');};
 assert(key(t).defaultPrevented);assert(t.get('local-files-dialog').open);assert.match(t.get('local-files-result').textContent,/Choose a backup folder/);assert.equal(saveAs,0);assert.equal(t.downloads.length,0);t.get('local-files-close').click();
 t.w.showDirectoryPicker=async()=>{picks++;return t.dir;};t.dir=fakeDir();await api.chooseFolder();assert.equal(t.dir.files.size,1);assert.equal(picks,1);
 const before=t.dir.files.size;assert(key(t,{repeat:true}).defaultPrevented);await settled(t);assert.equal(t.dir.files.size,before,'Held save shortcut never opens native Save As or adds versions');
 for(const options of [{shiftKey:true},{altKey:true},{metaKey:true}]){key(t,options);await delay(10);assert.equal(t.dir.files.size,before,'Unassigned modified shortcut does not save');}
 t.run("model.title='keyboard disk save';save()");assert(key(t).defaultPrevented);await settled(t);assert.equal(t.dir.files.size,before+1);assert.equal(api.getStatus().status,'saved');assert.equal(JSON.parse([...t.dir.files.values()].at(-1).data).payload.collection.buildings.find(b=>b.id===t.run('currentBuilding().id')).plan.title,'keyboard disk save');
 assert(key(t,{ctrlKey:false,metaKey:true}).defaultPrevented);await settled(t);assert.equal(t.dir.files.size,before+2,'Cmd+S uses the same configured folder');assert.equal(saveAs,0);assert.equal(picks,1);assert.equal(t.downloads.length,0);
 await t.get('local-files-pause').onclick();assert(api.getStatus().paused);assert(key(t).defaultPrevented);await settled(t);assert.equal(t.dir.files.size,before+3,'Manual save works while scheduled backups are paused');assert(api.getStatus().paused,'Manual save does not resume schedule');
 const original=api.core.saveVersion;let release,started=0;api.core.saveVersion=(...args)=>{started++;return new Promise(resolve=>{release=()=>resolve(original(...args));});};
 key(t);assert(api.getStatus().writing);key(t);key(t,{repeat:true});assert.equal(started,1,'Repeated shortcuts coalesce into the running write');release();await settled(t);api.core.saveVersion=original;
 t.dir.queryPermission=async()=> 'denied';t.dir.requestPermission=async()=>{permissions++;return 'denied';};key(t);await settled(t);assert.equal(api.getStatus().status,'error');assert(t.get('local-files-dialog').open);assert(!t.get('local-files-reconnect').hidden);assert.equal(permissions,0,'Ctrl+S does not trigger a surprise permission prompt');assert.equal(saveAs,0);assert.equal(t.downloads.length,0);t.get('local-files-close').click();
 t.dir.queryPermission=async()=> 'granted';api.core.saveVersion=async()=>{throw Object.assign(Error('full'),{name:'QuotaExceededError'});};key(t);await settled(t);assert.equal(api.getStatus().status,'error');assert.match(api.getStatus().detail,/full/);assert.equal(t.downloads.length,0);api.core.saveVersion=original;t.get('local-files-close').click();
 t.run('drag={kind:"test",pointerId:999};');const size=t.dir.files.size;key(t);await delay(10);assert.equal(t.dir.files.size,size);assert.match(t.get('notice').textContent,/Finish or cancel/);t.run('drag=null;');close(t);
 const unsupported=await boot();unsupported.w.showDirectoryPicker=undefined;key(unsupported);assert.match(unsupported.get('local-files-result').textContent,/unavailable/);assert.equal(unsupported.downloads.length,0);close(unsupported);
 console.log('PASS Ctrl/Cmd+S: configured folder only, Home, exact modifiers/repeats, single in-flight write, paused manual save, setup/reconnect guidance, revoked access, quota, unfinished edit, and no Save As or download fallback');
 }finally{for(const t of opened)close(t);}})().catch(e=>{console.error(e);process.exitCode=1});
