/* Run from the planner repository root. Loads the real production script order. */
const assert=require('assert'),fs=require('fs'),Module=require('module'),path=require('path');
let source=fs.readFileSync('test-support.cjs','utf8');
let scripts=[...fs.readFileSync('dist/index.html','utf8').matchAll(/<script src="([^"]+)\.js"/g)].map(x=>x[1]);
source=source.replace(/const scripts=\[[^;]+;/,'const scripts='+JSON.stringify(scripts)+';');
const support=new Module(path.resolve('test-support.cjs'),module);support.filename=path.resolve('test-support.cjs');support.paths=Module._nodeModulePaths(process.cwd());support._compile(source,support.filename);
const t=support.exports.boot(),{run,w,doc,get}=t;w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
function setup(){
 for(const dialog of doc.querySelectorAll('dialog[open]'))dialog.close();
 run(`resetTransient(true);model={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,rooms:[{id:'a',name:'A',x:0,y:0,w:10,h:10,type:'tech'},{id:'b',name:'B',x:10,y:0,w:10,h:10,type:'living'}],doors:[{id:'ab',a:'a',b:'b',width:1.2,offset:.5,kind:'door'}],entrances:[]},L1:{name:'Upper',z:4,rooms:[{id:'upper',name:'Upper',x:30,y:30,w:5,h:5,type:'living'}],doors:[],entrances:[]}}};floorId='L0';currentBuilding().view.layers={};setSelection();setTool('select');history=[];future=[];render();save();`);
}
function pointer(target,type,x=0,y=0){const e=new w.MouseEvent(type,{bubbles:true,cancelable:true,button:0,clientX:x,clientY:y});Object.defineProperty(e,'pointerId',{value:7});target.dispatchEvent(e);return e;}
function key(target,key,more={}){const e=new w.KeyboardEvent('keydown',{key,bubbles:true,cancelable:true,...more});target.dispatchEvent(e);return e;}
function startDrag(){
 w.KERN_LAYERS.setFloorSelection(['L0','L1']);w.KERN_LAYERS.setReferences([{floor:'L0',kind:'rooms',id:'a'},{floor:'L1',kind:'rooms',id:'upper'}]);const node=doc.querySelector('[data-crossfloor-move]');assert(node,'Object selection has a drag outline');
 pointer(node,'pointerdown');pointer(get('plan'),'pointermove',2,0);
 assert.equal(doc.querySelector('#crossfloor-selection').getAttribute('transform'),'translate(2 0)','A nonmutating selection preview is drawn');
 assert.equal(run('room("a").x'),0,'Preview must not mutate the source plan');assert.equal(run('history.length'),0,'Preview must not create history');
}
function assertUnmoved(label){assert.equal(run('room("a").x'),0,label);assert.equal(run('history.length'),0,label+' history');}
try{
 // Ordinary completion is atomic. Intermediate view/autosave calls see source geometry.
 setup();startDrag();run('saveView()');const stored=JSON.parse(w.localStorage.getItem('kern-buildings-v1')).buildings.find(b=>b.id===run('currentBuilding().id'));assert.equal(stored.plan.floors.L0.rooms[0].x,0,'Autosave cannot capture a drag preview');
 pointer(get('plan'),'pointerup',2,0);assert.equal(run('room("a").x'),2);assert.equal(run('history.length'),1,'Whole floor move is exactly one history step');run('undo()');assert.equal(run('room("a").x'),0);run('redo()');assert.equal(run('room("a").x'),2);
 for(const [label,interrupt]of[
  ['Escape',()=>key(doc.body,'Escape')],['clear selection',()=>key(doc.body,'D',{shiftKey:true})],
  ['tool change',()=>key(doc.body,'r')],['undo',()=>run('undo()')],['redo',()=>run('redo()')],
  ['lost capture',()=>pointer(get('plan'),'lostpointercapture')],['pointer cancel',()=>pointer(get('plan'),'pointercancel')],
  ['window blur',()=>w.dispatchEvent(new w.Event('blur'))],['floor navigation',()=>w.KERN_LAYERS.activateFloor('L1')]
 ]){setup();startDrag();interrupt();pointer(get('plan'),'pointerup',2,0);assert.equal(run('model.floors.L0.rooms[0].x'),0,label+' cancels floor move');assert.equal(run('history.length'),0,label+' creates no history');}
 setup();startDrag();run('addBuilding(window.KERN_BUILDINGS.blank("Other building"))');const otherId=run('currentBuilding().id');pointer(get('plan'),'pointermove',3,0);pointer(get('plan'),'pointerup',3,0);assert.equal(run('currentBuilding().id'),otherId);assert.equal(run('floor().rooms.length'),0,'Stale source pointer cannot overwrite a new building');assert.equal(run('history.length'),0);
 setup();startDrag();run('commit(()=>room("a").name="Newer edit")');pointer(get('plan'),'pointerup',2,0);assert.equal(run('room("a").x'),0,'Newer model edit invalidates the old preview');assert.equal(run('room("a").name'),'Newer edit');assert.equal(run('history.length'),1);
 // Lock enforcement must cover direct DOM, context menu and mutation entry points.
 setup();w.KERN_LAYERS.toggleObject('doors','ab','locked');doc.querySelector('[data-door="ab"]').dispatchEvent(new w.MouseEvent('contextmenu',{bubbles:true,cancelable:true,button:2,clientX:10,clientY:5}));assert.equal(run('connectionMenu'),null,'Locked opening cannot expose an active context menu');run('applyConnectionMenu("delete");removeConnections(["ab"]);updateConnection(connection("ab"),"label","Changed")');assert(run('!!connection("ab")'));assert.equal(run('connection("ab").label'),undefined);assert.equal(run('history.length'),0);
 setup();w.KERN_LAYERS.toggleObject('rooms','a','locked');run('openRoomMenu("a",5,5);applyConnectionMenu("living");updateRoomType(room("a"),"living")');assert.equal(run('room("a").type'),'tech');assert.equal(run('history.length'),0);
 setup();run('openConnectionMenu("ab",5,5)');w.KERN_LAYERS.toggleObject('doors','ab','locked');run('applyConnectionMenu("delete")');assert(run('!!connection("ab")'),'A menu opened before locking cannot delete the locked opening');
 // Legacy annotation IDs remain stable; rendering hiding does not normalize the model.
 setup();run('room("a").zones=[{name:"Legacy",x:3,y:4}];render()');const before=run('JSON.stringify(model)'),legacy=run('KERN_OBJECTS.annotations(model,floorId)[0].id');w.KERN_LAYERS.toggleObject('annotations',legacy,'hidden');assert(!doc.querySelector('[data-extra="annotations"][data-id="'+legacy+'"]'),'Hidden legacy room-zone annotation is omitted');assert.equal(run('JSON.stringify(model)'),before,'Hiding a legacy annotation must not rewrite original zones');w.KERN_LAYERS.toggleObject('annotations',legacy,'hidden');assert(doc.querySelector('[data-extra="annotations"][data-id="'+legacy+'"]'));
 // A selected route point cannot consume a dialog key or a modified delete chord.
 setup();run('floor().rooms.push(KERN_ROUTE_STAIRS.create([[2,2],[5,2],[5,5]],{id:"st",startZ:0,endZ:3}));setSelection({rooms:["st"]});render();KERN_ROUTE_UI.selectPoint(1);$("helpdialog").showModal()');key(get('closehelp'),'Delete');key(get('closehelp'),'Backspace');assert.equal(run('room("st").routeStair.nodes.length'),3,'Dialog keyboard interaction cannot delete a route point');get('helpdialog').close();
 for(const modifier of[{ctrlKey:true},{metaKey:true},{altKey:true},{shiftKey:true}])key(doc.body,'Delete',modifier);assert.equal(run('room("st").routeStair.nodes.length'),3,'Modified Delete chords are independent');key(doc.body,'Delete');assert.equal(run('room("st").routeStair.nodes.length'),2,'Plain Delete still removes the selected route point');
 // Shift+Tab keeps browser focus behavior rather than inheriting canvas view-switch.
 setup();const shiftTab=key(get('plan'),'Tab',{shiftKey:true});assert.equal(shiftTab.defaultPrevented,false);assert.equal(w.BuildingExports.isThreeMode(),false);assert(w.KERN_KEYS.allowed({key:'s',code:'KeyS',ctrlKey:true}),'Exact Ctrl+S remains assigned');assert(!w.KERN_KEYS.allowed({key:'S',code:'KeyS',ctrlKey:true,shiftKey:true}),'Ctrl+Shift+S is not Ctrl+S');
 // Geometry-provider failures are rejected before a move can enter history/storage.
 setup();run('floor().rooms.push(KERN_ROUTE_STAIRS.create([[2,2],[5,2],[5,5]],{id:"st",startZ:0,endZ:3}));render();save()');const originalBuild=w.KERN_STAIR_DETAIL.build,unmoved=run('JSON.stringify(model)'),priorHistory=run('history.length');w.KERN_LAYERS.setFloorSelection(['L0','L1']);w.KERN_LAYERS.setReferences([{floor:'L0',kind:'rooms',id:'st'},{floor:'L1',kind:'rooms',id:'upper'}]);w.KERN_STAIR_DETAIL.build=()=>{throw Error('Synthetic clipping failure');};try{assert(!w.KERN_LAYERS.moveSelection(2,1));assert.equal(run('JSON.stringify(model)'),unmoved);assert.equal(run('history.length'),priorHistory);}finally{w.KERN_STAIR_DETAIL.build=originalBuild;}
 setup();assert(!get('building-footprint'));
 setup();run('currentBuilding().view.layers={visible:[],objects:{L0:"bad"},selectedFloors:"bad"};render()');assert.equal(run('JSON.stringify(currentBuilding().view.layers)'),'{"visible":{},"objects":{},"editFloors":["L0"],"selection":[]}');
 // A real reload of the active workspace must preserve all per-building layer state.
 setup();w.KERN_LAYERS.toggleObject('rooms','a','locked');w.KERN_LAYERS.toggleObject('rooms','b','hidden');w.KERN_LAYERS.setFloorSelection(['L1']);run('saveView()');const layerState=run('JSON.stringify(currentBuilding().view.layers)');
 const storage=Object.fromEntries(Array.from({length:w.localStorage.length},(_,i)=>{const k=w.localStorage.key(i);return[k,w.localStorage.getItem(k)];}));const reloaded=support.exports.boot(storage);
 try{assert.equal(reloaded.run('JSON.stringify(currentBuilding().view.layers)'),layerState,'Reloading an active tab must retain locks, hidden objects, floor visibility and floor group');assert.equal(reloaded.run('canEdit(room("a"))'),false);assert(!reloaded.get('plan').querySelector('[data-room="b"]'));}finally{reloaded.close();}
 console.log('PASS floor-move atomic preview/history and interruptions, cross-building safety, lock/context enforcement, legacy annotation hiding, route dialog keys, exact save/Tab modifiers and active-workspace layer reload');
}finally{t.close();}
