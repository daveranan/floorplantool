// Read-only regression harness: no production storage, seed or export files are written.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const seeds=['','-v2','-v3','-v4','-v5','-v6','-v7','-v8initial','-v8','-v9','-useredit20260930','-v10'];
function boot(initial={}){
 const nodes={},storage={...initial},downloads=[];
 const node=id=>nodes[id]??=( {innerHTML:'',textContent:'',dataset:{},checked:id==='dimensions',setAttribute(k,v){this[k]=v},getAttribute(k){return this[k]},getBoundingClientRect(){return {width:900,height:600}},setPointerCapture(){},hasPointerCapture(){return false},releasePointerCapture(){},createSVGPoint(){return {x:0,y:0,matrixTransform(){return {x:this.x,y:this.y}}}},getScreenCTM(){return {inverse(){return {}}}},click(){},showModal(){},close(){}});
 const ctx={console,JSON,Math,Number,Object,Array,Set,Map,String,Date,Error,setTimeout:()=>0,clearTimeout(){},Blob,URL:{createObjectURL:b=>{downloads.push(b);return ''},revokeObjectURL(){}},localStorage:{getItem:k=>storage[k],setItem:(k,v)=>storage[k]=v},document:{getElementById:node,querySelector:()=>null,createElement:()=>node('anchor')},confirm:()=>true,alert:e=>{throw Error(e)},window:{}};
 vm.createContext(ctx);for(const s of seeds)vm.runInContext(fs.readFileSync('dist/seed'+s+'.js','utf8'),ctx);for(const f of ['geometry','app'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),ctx);
 return {run:s=>vm.runInContext(s,ctx),storage,nodes,downloads};
}
const t=boot({'kern-active-variant':'v9'}),{run}=t,baseline=run('JSON.stringify(model)');
const target=(id,edge)=>({closest(q){return q==='[data-handle]'&&edge?{dataset:{handle:id,edge}}:q==='[data-room]'&&!edge&&id?{dataset:{room:id}}:null}});
function down(id,edge,pointerId=1,pointerType='mouse'){t.nodes.plan.onpointerdown({button:0,pointerId,pointerType,clientX:0,clientY:0,target:target(id,edge)})}
function move(x,y,id=1){t.nodes.plan.onpointermove({pointerId:id,clientX:x,clientY:y})}
function up(id=1){t.nodes.plan.onpointerup({pointerId:id})}
run("preview=false;floorId='B1';render()");
// No seed migration or model write on load; inspector omits elevation logic.
assert.equal(baseline,run('JSON.stringify(window.KERN_V9)'));assert(!t.nodes.inspector.innerHTML.includes('Floor / elevation logic'));
assert.equal(Object.keys(t.storage).filter(k=>k.startsWith('kern-plan-')).length,0);
// Every corner and edge anchors its opposite edge, snaps deltas, and undoes exactly.
for(const id of ['stair','transferstair','artifactstair','garage'])for(const edge of ['nw','ne','se','sw','n','e','s','w']){
 const before=run('JSON.stringify(model)'),o=run(`clone(room('${id}'))`),view=t.nodes.plan.viewBox;
 down(id,edge);move(1.2,1.3);up();const r=run(`room('${id}')`);
 if(edge.includes('w'))assert.equal(r.x+r.w,o.x+o.w);else assert.equal(r.x,o.x);
 if(edge.includes('n'))assert.equal(r.y+r.h,o.y+o.h);else assert.equal(r.y,o.y);
 assert.equal(t.nodes.plan.viewBox,view,'resizing cannot reframe the view');
 assert(r.w>=1&&r.h>=1);run('validateImport(model)');run('undo()');assert.equal(run('JSON.stringify(model)'),before);run('redo()');run('undo()');
}
// Resize limits preserve the anchored opposite corner, even crossing the entire room.
for(const edge of ['nw','ne','se','sw']){down('artifactstair',edge);move(edge.includes('w')?1000:-1000,edge.includes('n')?1000:-1000);up();assert.equal(run("room('artifactstair').w"),1);assert.equal(run("room('artifactstair').h"),1);run('validateImport(model)');run('undo()')}
// Touch moves one selected stair; a second pointer never edits it or turns into an unwanted pan.
const pre=run('JSON.stringify(model)'),pan=run('JSON.stringify(pan)');down('stair',null,7,'touch');move(2,3,8);assert.equal(run('JSON.stringify(model)'),pre);down('artifactstair',null,8,'touch');move(1,2,7);up(8);assert(run('!!drag'));up(7);assert.equal(run('JSON.stringify(pan)'),pan);assert.equal(run("room('stair').x"),9);run('undo()');assert.equal(run('JSON.stringify(model)'),pre);
// Pointer cancellation and capture loss restore the entire original model, without new undo history.
for(const method of ['onpointercancel','onlostpointercapture']){const n=run('history.length');down('transferstair','nw');move(2,3);t.nodes.plan[method]({pointerId:1});assert.equal(run('JSON.stringify(model)'),pre);assert.equal(run('history.length'),n)}
// Linked stairs synchronize across floors; local transfer stays local. All round-trip and undo.
for(const id of ['stair','transferstair','artifactstair']){
 const other=run("JSON.stringify(model.floors.B2)"),before=run('JSON.stringify(model)');down(id);move(1.5,2);up();const serialized=run('JSON.stringify(model)');if(id==='transferstair')assert.equal(run("JSON.stringify(model.floors.B2)"),other);else assert.notEqual(run("JSON.stringify(model.floors.B2)"),other);const reloaded=boot(t.storage);assert.equal(reloaded.run('JSON.stringify(model)'),serialized);run('validateImport(JSON.parse(JSON.stringify(model)))');
 const g=run('buildGeometry(model)');if(id==='transferstair')assert.equal(g.splitLevelConnections.find(c=>c.room===id).footprint.x,run(`room('${id}').x`));else{const c=g.verticalConnections.find(c=>c.room===id&&(c.from==='B1'||c.to==='B1'));assert.equal((c.from==='B1'?c.fromFootprint:c.toFootprint).x,run(`room('${id}').x`));assert(!run("checks().some(c=>c.kind==='alignment')"))}
 run('undo()');assert.equal(run('JSON.stringify(model)'),before);
}
// Common-field label edits update the actual plan annotation and undo together.
run("selected='artifactstair';inspector()");t.nodes.inspector.onchange({target:{dataset:{key:'name'},value:'Artifact test'}});assert.equal(run("room('artifactstair').diagramLabel"),'Artifact test');run('undo()');
// Independent existing variants, including preserved arbitrary metadata and user geometry.
for(const v of ['v1','v2','v3','v4','v5','v6','v7','v8initial','v8','v9']){run(`switchVariant('${v}');commit(()=>{model.title='Existing ${v}';model.userNote='keep';model.floors.L0.rooms[0].x+=.5})`)}
for(const v of ['v1','v2','v3','v4','v5','v6','v7','v8initial','v8','v9']){run(`switchVariant('${v}')`);const exact=run('JSON.stringify(model)'),b=boot(t.storage);assert.equal(b.run('JSON.stringify(model)'),exact);assert.equal(b.run('model.userNote'),'keep');assert.equal(b.run('model.title'),'Existing '+v);run('validateImport(model)')}
// Older introduction markers may be absent: preserve every existing saved plan byte-for-byte.
const oldV8=run('JSON.stringify(window.KERN_V8INITIAL)'),savedInitial=JSON.stringify({...JSON.parse(oldV8),title:'Previously edited initial V8'});
const migrated=boot({'kern-plan-v8':oldV8,'kern-plan-v8initial':savedInitial});assert.equal(migrated.storage['kern-plan-v8'],oldV8);assert.equal(migrated.storage['kern-plan-v8initial'],savedInitial);
// Repeated select/unselect does not change model or viewport, and every selected stair gets 8 handles.
run("variant='v9';model=clone(window.KERN_V9);floorId='B1';preview=false;viewBounds=null;render()");const stableView=t.nodes.plan.viewBox,stablePlan=run('JSON.stringify(model)');for(let i=0;i<6;i++){down('artifactstair');up();assert.equal((t.nodes.plan.innerHTML.match(/data-edge=/g)||[]).length,8);down(null);up();assert.equal(t.nodes.plan.viewBox,stableView);assert.equal(run('JSON.stringify(model)'),stablePlan)}
run("commit(()=>model.title='Existing v9')");
// Export uses the full model, and importing remains undoable with all unknown metadata preserved.
(async()=>{t.nodes.export.onclick();const exported=await t.downloads.at(-1).text();assert.equal(JSON.stringify(JSON.parse(exported)),run('JSON.stringify(model)'));const imported=JSON.parse(exported);imported.title='Imported user edit';const e={target:{files:[{size:exported.length,text:async()=>JSON.stringify(imported)}],value:'x'}};await t.nodes.file.onchange(e);assert.equal(run('model.title'),'Imported user edit');run('undo()');assert.equal(run('model.title'),'Existing v9');console.log('PASS: 32 anchored corner/edge resizes; limits; snap; undo/redo; touch ownership; cancel/capture loss; stairs; derived footprints; JSON import/export/reload; all 10 variants; labels; unchanged seeds and storage keys.');})();
