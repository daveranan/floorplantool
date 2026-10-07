/* Synthetic fixture only. Production script order, cap release and normal edits. */
const assert=require('assert'),fs=require('fs'),Module=require('module'),path=require('path');
let source=fs.readFileSync('test-support.cjs','utf8');
const scripts=[...fs.readFileSync('dist/index.html','utf8').matchAll(/<script src="([^"]+)\.js"/g)].map(x=>x[1]);
source=source.replace(/const scripts=\[[^;]+;/,'const scripts='+JSON.stringify(scripts)+';');
const support=new Module(path.resolve('test-support.cjs'),module);support.filename=path.resolve('test-support.cjs');support.paths=Module._nodeModulePaths(process.cwd());support._compile(source,support.filename);
const t=support.exports.boot(),{run,w,doc,get}=t;
w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
function setup(legacy=false){
 run(`resetTransient(true);model={version:1,units:'metres',floors:{
 L0:{name:'Ground',z:0,rooms:[{id:'control',name:'Operations',x:2,y:3,w:9,h:7,type:'tech',height:8}],doors:[],entrances:['control']},
 L1:{name:'Void',z:4,rooms:[{id:'void',name:'Operations void',x:2,y:3,w:9,h:7,type:'void',linkedSource:{floor:'L0',room:'control'},derivedFootprint:true,locked:true}],doors:[],entrances:[]},
 L2:{name:'Cap',z:8,rooms:[{id:'opsroof',name:'Sealed concrete',x:2,y:3,w:9,h:7,z:8.25,height:2.5,type:'solid',sealedConcrete:true,locked:true,linkedSource:{floor:'L0',room:'control'},derivedFootprint:true,shape:{vertices:[{id:'a',x:0,y:0},{id:'b',x:1,y:0},{id:'c',x:1,y:1},{id:'d',x:.3,y:.8},{id:'e',x:0,y:1}]}}],doors:[],entrances:[]}
 }};floorId='L2';currentBuilding().view.layers={};setSelection();setTool('select');history=[];future=[];${legacy?"delete room('opsroof').linkedSource;":''}validateImport(model);render();save();`);
}
const plan=()=>run('JSON.stringify(model)'),roomData=()=>JSON.parse(run('JSON.stringify(room("opsroof"))'));
const untouched=()=>run('JSON.stringify([model.floors.L0,model.floors.L1])');
function select(){assert(w.KERN_LAYERS.selectLayer('rooms','opsroof'));assert(get('makecapindependent'));}
function release(){select();get('makecapindependent').click();assert(run('canEdit(room("opsroof"))'));assert(!get('makecapindependent'));}
function change(type){const field=get('inspector').querySelector('[data-key="type"]');field.value=type;field.dispatchEvent(new w.Event('change',{bubbles:true}));assert.equal(run('room("opsroof").type'),type);}
function storage(){return Object.fromEntries(Array.from({length:w.localStorage.length},(_,i)=>{const k=w.localStorage.key(i);return[k,w.localStorage.getItem(k)];}));}
try{
 // Merely loading, selecting in Layers / 3D, and inspecting never release the cap.
 setup();const original=plan(),linkedFloors=untouched(),cap=roomData();
 const layer=doc.querySelector('.layer-object[data-layer-id="opsroof"]');assert(!layer.disabled);layer.click();assert.equal(plan(),original);assert.equal(run('history.length'),0);
 assert(get('inspector').querySelector('[data-key="type"]').disabled);assert(get('deleteroom').disabled);assert(!run('canEdit(room("opsroof"))'));
 run('updateRoomType(room("opsroof"),"terrace");deleteSelection()');assert.equal(plan(),original);assert.equal(run('history.length'),0);
 assert.throws(()=>run('KERN_OBJECTS.snapshot(model,floorId,{rooms:["opsroof"]})'),/protected/);
 w.KERN_EXPLORER.selectRoom('L2','opsroof');assert(get('makecapindependent'));assert.equal(plan(),original);
 // View locks remain separate from source protection, including a stale action.
 const stale=get('makecapindependent');const lock=doc.querySelector('[data-layer-action="lock"][data-layer-id="opsroof"]');assert(!lock.disabled);lock.click();stale.click();assert.equal(plan(),original);assert.equal(w.KERN_CONCRETE_CAP_UI.detachSelected(),false);assert.equal(w.KERN_LAYERS.selectLayer('rooms','opsroof'),false);
 w.KERN_LAYERS.toggleObject('rooms','opsroof','locked');w.KERN_LAYERS.toggleObject('rooms','opsroof','hidden');assert.equal(w.KERN_LAYERS.selectLayer('rooms','opsroof'),false);assert.equal(w.KERN_CONCRETE_CAP_UI.detachSelected(),false);w.KERN_LAYERS.toggleObject('rooms','opsroof','hidden');
 // Release changes only four link/lock fields, with one undo / redo transaction.
 release();const expected={...cap,locked:false,independentCap:true};delete expected.linkedSource;delete expected.derivedFootprint;
 assert.deepStrictEqual(roomData(),expected);assert.equal(untouched(),linkedFloors);assert.equal(run('history.length'),1);assert.equal(run('sourceFor(room("opsroof"))'),null);assert.equal(w.KERN_CONCRETE_CAP_UI.detachSelected(),false);assert.equal(run('history.length'),1);
 const independent=plan();run('undo()');assert.equal(plan(),original);run('redo()');assert.equal(plan(),independent);assert.equal(untouched(),linkedFloors);
 // The old opsroof fallback must stay released even on room/void conversion.
 for(const type of ['tech','terrace','void','solid']){run('setSelection({rooms:["opsroof"]});render()');const before=plan(),h=run('history.length');change(type);assert(run('canEdit(room("opsroof"))'));assert.equal(run('sourceFor(room("opsroof"))'),null);assert.equal(untouched(),linkedFloors);assert.equal(run('history.length'),h+1);assert.equal(roomData().sealedConcrete,type==='solid'?true:undefined);run('undo()');assert.equal(plan(),before);run('redo()');}
 // An independent void is still a normal selectable, movable and removable cap.
 change('void');w.KERN_LAYERS.selectLayer('rooms','opsroof');assert(!get('deleteroom').disabled);const beforeDelete=plan();get('deleteroom').click();assert(!run('room("opsroof")'));assert.equal(untouched(),linkedFloors);run('undo()');assert.equal(plan(),beforeDelete);
 run('setSelection({rooms:["opsroof"]});render()');const oldX=run('room("opsroof").x');w.KERN_EXPLORER.editRoom('L2','opsroof',run('({...footprint(room("opsroof")),x:room("opsroof").x+1})'));assert.equal(run('room("opsroof").x'),oldX+1);assert.equal(untouched(),linkedFloors);run('undo()');
 // Bulk type assignment clears/restores the cap-only concrete metadata too.
 run('setSelection({rooms:["opsroof"]});render()');assert(w.KERN_BULK_TYPES.apply('rooms','solid'));assert.equal(roomData().sealedConcrete,true);assert(w.KERN_BULK_TYPES.apply('rooms','terrace'));assert.equal(roomData().sealedConcrete,undefined);run('undo()');assert.equal(roomData().sealedConcrete,true);
 // Copies keep independence with fresh IDs, and protected original voids stay blocked.
 const bundle=run('KERN_OBJECTS.snapshot(model,floorId,{rooms:["opsroof"]})'),pasted=w.KERN_OBJECTS.paste(run('model'),bundle,'L1',{x:1,y:1}),copy=pasted.plan.floors.L1.rooms.find(r=>r.independentCap);assert(copy);assert.notEqual(copy.id,'opsroof');assert.equal(copy.independentCap,true);w.KERN_OBJECTS.validateFloor(pasted.plan.floors.L1);
 assert.throws(()=>run('KERN_OBJECTS.snapshot(model,"L1",{rooms:["void"]})'),/protected/);
 const moved=w.KERN_OBJECTS.move(run('model'),'L2',{rooms:['opsroof']},'L1');assert(!moved.plan.floors.L2.rooms.length);assert(moved.plan.floors.L1.rooms.some(r=>r.independentCap));assert.deepStrictEqual(moved.plan.floors.L0,run('model.floors.L0'));
 // Source changes still move the real void, never the detached cap.
 const isolated=roomData();run('floorId="L0";commit(()=>{room("control").x+=2;syncStairEdit(room("control"))});floorId="L2";render()');assert.deepStrictEqual(roomData(),isolated);assert.equal(run('model.floors.L1.rooms[0].x'),4);run('undo()');
 // Moving the cap floor alone becomes legal; the source/void pair stays coupled.
 const transform=w.KERN_BUILDING_TRANSFORM;assert(transform.analyzeFloorTranslation(run('model'),['L2']).ok);assert(!transform.analyzeFloorTranslation(run('model'),['L0']).ok);
 const translated=transform.translateFloors(run('model'),['L2'],2,3);assert.equal(translated.floors.L2.rooms[0].x,isolated.x+2);assert.deepStrictEqual(translated.floors.L0,run('model.floors.L0'));
 // Layer locks also block detached cap edit/delete/clipboard selection paths.
 run('floorId="L2";setSelection({rooms:["opsroof"]});render()');w.KERN_LAYERS.toggleObject('rooms','opsroof','locked');const frozen=plan();run('updateRoomType(room("opsroof"),"tech");deleteSelection()');assert.equal(plan(),frozen);assert(!run('canEdit(room("opsroof"))'));w.KERN_LAYERS.toggleObject('rooms','opsroof','locked');
 // JSON/storage/import retain the opt-out; validation rejects ambiguous link flags.
 run('save()');const saved=plan(),reloaded=support.exports.boot(storage());try{assert.equal(reloaded.run('JSON.stringify(model)'),saved);assert.equal(reloaded.run('sourceFor(model.floors.L2.rooms.find(r=>r.id==="opsroof"),"L2")'),null);}finally{reloaded.close();}
 run('importBuildings({format:"kern-building",schemaVersion:1,building:clone(currentBuilding())},"Copy")');assert.equal(run('model.floors.L2.rooms[0].independentCap'),true);assert.equal(run('sourceFor(model.floors.L2.rooms[0],"L2")'),null);
 for(const invalid of ['"yes"','true']){assert.throws(()=>run(`{const p=clone(model);p.floors.L2.rooms[0].independentCap=${invalid};p.floors.L2.rooms[0].linkedSource={floor:'L0',room:'control'};validateImport(p)}`),/independent concrete cap/);}
 // A legacy cap without explicit linkedSource still requires and retains opt-out.
 setup(true);const legacy=plan();assert(!w.KERN_BUILDING_TRANSFORM.analyzeFloorTranslation(run('model'),['L2']).ok);release();assert.equal(run('sourceFor(room("opsroof"))'),null);assert(w.KERN_BUILDING_TRANSFORM.analyzeFloorTranslation(run('model'),['L2']).ok);run('undo()');assert.equal(plan(),legacy);
 console.log('PASS concrete cap protected review, explicit atomic detach, exact geometry, 2D/3D edits, type/void/delete undo, source isolation, copy/move, floor transforms, layer locks, JSON/reload and legacy opt-out');
}finally{t.close();}
