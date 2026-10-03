/* Production-order regression for explicit template unlock and shaft detachment. */
const assert=require('node:assert/strict'),{boot}=require('./test-production-support.cjs');
const t=boot(),{w,doc,get,run}=t;w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
const snapshot=()=>run('JSON.stringify(model)'),history=()=>run('history.length');
const plain=x=>JSON.parse(JSON.stringify(x));
// JSDOM lacks native SVG pointer properties; bridge dispatch into the production listeners.
if(!('onpointerdown' in w.SVGElement.prototype))for(const type of ['pointerdown','pointermove','pointerup'])get('plan').addEventListener(type,e=>get('plan')['on'+type]?.(e));
function pointer(type,x,y,target=get('plan')){const e=new w.MouseEvent(type,{bubbles:true,cancelable:true,button:0,clientX:x,clientY:y});Object.defineProperty(e,'pointerId',{value:74});target.dispatchEvent(e);}
function dragFreight(){pointer('pointerdown',2,3,get('plan').querySelector('[data-room=freight]'));pointer('pointermove',4,4);pointer('pointerup',4,4);}

function setup(linked=false){run(`resetTransient(true);model={version:1,units:'metres',floors:{
 L0:{name:'Ground',z:0,rooms:[{id:'freight',name:'Freight',type:'core',x:0,y:0,w:4,h:6,locked:true},{id:'other',name:'Unrelated locked room',type:'tech',x:12,y:0,w:4,h:6,locked:true}],doors:[],entrances:[]},
 L1:{name:'Upper',z:4,rooms:[{id:'freight',name:'Upper Freight',type:'core',x:0,y:0,w:4,h:6,locked:true}],doors:[],entrances:[]},
 L2:{name:'Top',z:8,rooms:[{id:'freight',name:'Top Freight',type:'core',x:0,y:0,w:4,h:6,locked:true}],doors:[],entrances:[]}
 }};${linked?`for(const f of Object.values(model.floors))f.rooms[0].editGroup='freight';model.verticalConnections=[{id:'freight',type:'lift',room:'freight',floors:['L0','L1','L2'],footprint:{x:0,y:0,w:4,h:6},footprints:{L0:{x:0,y:0,w:4,h:6},L1:{x:0,y:0,w:4,h:6},L2:{x:0,y:0,w:4,h:6}},stops:[{floor:'L0',z:0},{floor:'L1',z:4},{floor:'L2',z:8}],throughOnlyFloors:['L0'],passedFloors:['L0','L1','L2'],throughCar:true}];`:''}
 floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true,L1:false,L2:false}};setTool('select');setSelection();history=[];future=[];validateImport(model);render();save();`);}
function select(){const b=doc.querySelector('.layer-object[data-layer-floor="L0"][data-layer-id="freight"]');assert(b&&!b.disabled);b.click();assert(get('unlockspace'));}
function storage(){return Object.fromEntries(Array.from({length:w.localStorage.length},(_,i)=>{const k=w.localStorage.key(i);return[k,w.localStorage.getItem(k)];}));}
try{
 setup();const initial=snapshot();select();assert.equal(get('selectiontype').textContent,'Locked space');assert(get('inspector').querySelector('[data-key=x]').disabled);assert.equal(snapshot(),initial);assert.equal(history(),0);assert.equal(w.KERN_LAYERS.moveSelection(1,0),false);assert.match(get('notice').textContent,/Space lock/);dragFreight();assert.equal(snapshot(),initial);assert.equal(history(),0);
 assert.equal(get('unlockspace').textContent,'Unlock space');get('unlockspace').click();assert(run('canEdit(room("freight"))'));assert.equal(run('room("freight").locked'),false);assert.equal(run('room("other").locked'),true);assert.equal(history(),1);assert(!get('unlockspace'));assert(!get('inspector').querySelector('[data-key=x]').disabled);
 const unlocked=snapshot();run('undo()');assert.equal(snapshot(),initial);run('redo()');assert.equal(snapshot(),unlocked);
 dragFreight();assert.equal(run('room("freight").x'),2);assert.equal(run('room("freight").y'),1);run('undo()');assert.equal(snapshot(),unlocked);
 // Actual inspector change and 3D callback share the normal undo/move guards.
 const input=get('inspector').querySelector('[data-key=x]');input.value='2';input.dispatchEvent(new w.Event('change',{bubbles:true}));assert.equal(run('room("freight").x'),2);assert.equal(history(),2);run('undo()');assert.equal(snapshot(),unlocked);
 w.KERN_EXPLORER.editRoom('L0','freight',{x:3,y:1,w:4,h:6});assert.equal(run('room("freight").x'),3);run('undo()');assert.equal(snapshot(),unlocked);
 assert(w.KERN_LAYERS.moveSelection(1,2));assert.equal(run('room("freight").x'),1);assert.equal(run('model.floors.L1.rooms[0].x'),0);run('undo()');assert.equal(snapshot(),unlocked);
 // Unlocked copies retain the release; other protected rooms remain protected.
 const bundle=run('KERN_OBJECTS.snapshot(model,"L0",{rooms:["freight"]})');const pasted=w.KERN_OBJECTS.paste(run('model'),bundle,'L0',{x:1,y:1});assert.equal(pasted.plan.floors.L0.rooms.at(-1).locked,false);assert.notEqual(pasted.plan.floors.L0.rooms.at(-1).id,'freight');assert.throws(()=>run('KERN_OBJECTS.snapshot(model,"L0",{rooms:["other"]})'),/protected/);
 run('save()');const reload=boot(storage());try{assert.equal(reload.run('model.floors.L0.rooms[0].locked'),false);assert.equal(reload.run('model.floors.L0.rooms[1].locked'),true);}finally{reload.close();}
 // Layer locks, hidden/disabled floors, recovery, stale selection/building and stale storage cannot unlock.
 setup();select();let stale=get('unlockspace');w.KERN_LAYERS.toggleObject('rooms','freight','locked');stale.click();assert.equal(run('room("freight").locked'),true);assert.equal(history(),0);w.KERN_LAYERS.toggleObject('rooms','freight','locked');select();stale=get('unlockspace');w.KERN_LAYERS.setVisible('L0',false);stale.click();assert.equal(run('room("freight").locked'),true);assert.equal(history(),0);
 setup();select();stale=get('unlockspace');w.KERN_LAYERS.selectFloor('L1');stale.click();assert.equal(run('model.floors.L0.rooms[0].locked'),true);assert.equal(history(),0);
 setup();select();stale=get('unlockspace');run('setSelection({rooms:["other"]});render()');stale.click();assert.equal(run('room("freight").locked'),true);assert.equal(run('room("other").locked'),true);assert.equal(history(),0);
 setup();select();run('buildingState.locked=true');assert.equal(w.KERN_SPACE_LOCK.unlockSelected(),false);assert.equal(history(),0);run('buildingState.locked=false');
 run('localStorage.setItem(KERN_BUILDINGS.KEY,JSON.stringify({...buildingState.data,revision:"other-tab"}))');assert.equal(w.KERN_SPACE_LOCK.unlockSelected(),false);assert.equal(history(),0);run('localStorage.setItem(KERN_BUILDINGS.KEY,buildingState.baseline)');
 setup();select();stale=get('unlockspace');w.KERN_LAYERS.toggleFloor('L1');w.KERN_LAYERS.selectLayer('rooms','freight',{shiftKey:true},'L1');stale.click();assert.equal(run('model.floors.L0.rooms[0].locked'),true);assert.equal(w.KERN_SPACE_LOCK.unlockSelected(),false);assert.equal(history(),0);
 setup();select();stale=get('unlockspace');w.KERN_WORKSPACE.showHome();stale.click();assert.equal(run('model.floors.L0.rooms[0].locked'),true);assert.equal(history(),0);w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
 // Shaft membership does not release merely by inspecting or calling plain unlock.
 setup(true);select();const shaft=snapshot(),upper=run('JSON.stringify([model.floors.L1,model.floors.L2])');assert.match(get('unlockspace').textContent,/Detach this floor/);assert.equal(w.KERN_SPACE_LOCK.unlockSelected(),false);assert.equal(snapshot(),shaft);
 get('unlockspace').click();assert.equal(history(),1);assert.equal(run('room("freight").locked'),false);assert.equal(run('room("freight").editGroup'),undefined);assert.equal(run('JSON.stringify([model.floors.L1,model.floors.L2])'),upper);assert.deepEqual(plain(run('model.verticalConnections[0].floors')),['L1','L2']);assert.deepEqual(plain(run('model.verticalConnections[0].stops.map(s=>s.floor)')),['L1','L2']);assert.deepEqual(plain(run('Object.keys(model.verticalConnections[0].footprints)')),['L1','L2']);assert.deepEqual(plain(run('model.verticalConnections[0].throughOnlyFloors')),[]);
 assert.deepEqual(plain(run('model.verticalConnections[0].passedFloors')),['L1','L2']);const remainingShaft=run('JSON.stringify(model.verticalConnections)');const detached=snapshot();assert(w.KERN_LAYERS.moveSelection(3,2));assert.equal(run('room("freight").x'),3);assert.equal(run('JSON.stringify(model.verticalConnections)'),remainingShaft);assert.equal(run('JSON.stringify([model.floors.L1,model.floors.L2])'),upper);run('undo()');assert.equal(snapshot(),detached);run('undo()');assert.equal(snapshot(),shaft);run('redo()');assert.equal(snapshot(),detached);
 w.KERN_EXPLORER.editRoom('L0','freight',{x:2,y:0,w:4,h:6});assert.equal(run('JSON.stringify(model.verticalConnections)'),remainingShaft);run('undo()');assert.equal(snapshot(),detached);
 const analysis=w.KERN_SELECTION_TRANSFORM.analyze(run('model'),[{floor:'L0',kind:'rooms',id:'freight'}]);assert.deepEqual(plain(analysis.refs),[{floor:'L0',kind:'rooms',id:'freight'}]);assert.equal(analysis.coupled.length,0);
 run('save()');const shaftReload=boot(storage());try{assert.equal(shaftReload.run('model.floors.L0.rooms[0].locked'),false);assert.equal(shaftReload.run('model.floors.L0.rooms[0].editGroup'),undefined);assert.deepEqual(plain(shaftReload.run('model.verticalConnections[0].floors')),['L1','L2']);}finally{shaftReload.close();}
 setup(true);run('model.verticalConnections[0].floors=["L0"]');select();get('unlockspace').click();assert.equal(run('model.verticalConnections.length'),1);assert.deepEqual(plain(run('Object.keys(model.verticalConnections[0].footprints)')),['L1','L2']);
 // Context action uses the same policy, scope and one-step transaction.
 setup();run('openRoomMenu("freight",20,20)');const menu=doc.querySelector('[data-menu-action="unlock-space"]');assert(menu);menu.click();assert.equal(run('room("freight").locked'),false);assert.equal(history(),1);run('undo()');
 // Source-linked caps/voids, their source rooms, and stair editors cannot be bypassed.
 run(`model.floors.L0.rooms.push({id:'control',name:'Source',type:'tech',x:20,y:0,w:4,h:4,locked:true});model.floors.L1.rooms.push({id:'opsroof',name:'Cap',type:'solid',sealedConcrete:true,x:20,y:0,w:4,h:4,locked:true,linkedSource:{floor:'L0',room:'control'}});model.floors.L0.rooms.push({id:'void',name:'Void',type:'void',x:30,y:0,w:4,h:4,locked:true},{id:'stair',name:'Stair',type:'core',x:35,y:0,w:4,h:4,locked:true});render();`);
 assert.equal(w.KERN_SPACE_LOCK.status('L1','opsroof'),null);assert.equal(w.KERN_SPACE_LOCK.status('L0','control'),null);assert.equal(w.KERN_SPACE_LOCK.status('L0','void'),null);assert.equal(w.KERN_SPACE_LOCK.status('L0','stair'),null);
 console.log('PASS space lock: explicit unlock, inspector/3D/group movement, one-step undo/redo, reload/copy, shaft isolation, protected distinctions and stale/floor/layer/storage guards');
}finally{t.close();}
