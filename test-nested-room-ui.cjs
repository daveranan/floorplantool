const assert=require('node:assert/strict'),{boot}=require('./test-production-support.cjs');
const t=boot(),{run,w,doc,get}=t;
w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
// JSDOM dispatches pointer listeners but does not implement SVG onpointer* properties.
for(const type of ['pointerdown','pointermove','pointerup','pointercancel'])get('plan').addEventListener(type,e=>get('plan')['on'+type]?.(e));
const copy=value=>JSON.parse(JSON.stringify(value));
const kitchen={id:'kitchen',name:'Kitchen',type:'living',x:0,y:0,w:12,h:12};
const storage={id:'storage',name:'Kitchen Storage',type:'tech',x:4,y:4,w:4,h:4};
const cupboard={id:'cupboard',name:'Cupboard',type:'tech',x:5,y:5,w:2,h:2};
function setup(rooms=[storage,kitchen],extraFloors={}){
 for(const dialog of doc.querySelectorAll('dialog[open]'))dialog.close();
 const model={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,rooms:copy(rooms),doors:[],entrances:['kitchen']},...extraFloors}};
 run(`resetTransient(true);model=${JSON.stringify(model)};floorId='L0';currentBuilding().view.layers={visible:{L0:true},editFloors:['L0']};setTool('select');setSelection();history=[];future=[];render();save();`);
}
function pointer(type,x,y,target=get('plan'),more={}){const e=new w.MouseEvent(type,{bubbles:true,cancelable:true,button:0,clientX:x,clientY:y,...more});Object.defineProperty(e,'pointerId',{value:21});target.dispatchEvent(e);return e;}
function key(value,more={}){doc.body.dispatchEvent(new w.KeyboardEvent('keydown',{key:value,bubbles:true,cancelable:true,...more}));}
function clickRoom(id,x,y,more={}){pointer('pointerdown',x,y,get('plan').querySelector(`[data-room="${id}"]`),more);pointer('pointerup',x,y);}
function overlapCount(){return run('checks().filter(c=>c.kind==="overlap").length');}
function readBlob(blob){return new Promise((resolve,reject)=>{const reader=new w.FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsText(blob);});}

(async()=>{try{
 for(const rooms of [[storage,kitchen],[kitchen,storage],[cupboard,storage,kitchen],[kitchen,cupboard,storage]]){
  setup(rooms);const before=run('JSON.stringify(model)'),inner=rooms.length===3?'cupboard':'storage';
  assert.equal(run('roomAt({x:6,y:6}).id'),inner,'Innermost room wins regardless of storage order');
  assert.equal(run('roomAt({x:1,y:1}).id'),'kitchen','Container is independently selectable outside its children');
  assert.equal(run('roomAt({x:4.5,y:4.5}).id'),'storage');
  assert.equal(run('roomAt({x:4.5,y:4.5},"storage").id'),'kitchen','Connection drag can find container behind child');
  const drawn=[...get('plan').querySelectorAll('g.room[data-room]')].map(node=>node.dataset.room);
  assert(drawn.indexOf('kitchen')<drawn.indexOf('storage'),'Parent fill cannot cover child hit region');
  if(rooms.length===3)assert(drawn.indexOf('storage')<drawn.indexOf('cupboard'));
  assert.equal(overlapCount(),0);assert.equal(get('plan').querySelector('.overlap-regions').children.length,0);
  clickRoom(inner,6,6);assert.equal(run('selected'),inner);clickRoom('kitchen',1,1);assert.equal(run('selected'),'kitchen');
  run('planMarkup(true);roomAt({x:6,y:6});checks();');assert.equal(run('JSON.stringify(model)'),before,'Derived rendering and hit testing never rewrite geometry or array order');
  const label=copy(run('roomLabelPoint(room("kitchen"),roomNesting())'));
  assert(w.KERN_SHAPES.contains(label,run('room("kitchen")')));assert(!w.KERN_SHAPES.contains(label,run('room("storage")')),'Container label stays outside child');
 }

 setup();w.KERN_LAYERS.toggleObject('rooms','storage','hidden');assert.equal(run('roomAt({x:6,y:6}).id'),'kitchen');assert(!get('plan').querySelector('[data-room="storage"]'));
 w.KERN_LAYERS.toggleObject('rooms','storage','hidden');w.KERN_LAYERS.toggleObject('rooms','kitchen','locked');assert.equal(run('roomAt({x:6,y:6}).id'),'storage','Locked parent does not mask editable child');
 w.KERN_LAYERS.toggleObject('rooms','kitchen','locked');w.KERN_LAYERS.toggleObject('rooms','storage','locked');assert.equal(run('roomAt({x:6,y:6}).id'),'kitchen','Locked child is excluded from geometry picking');

 setup([storage,kitchen],{L1:{name:'Upper',z:4,rooms:[{...storage,id:'upper-storage'},{...kitchen,id:'upper-kitchen'}],doors:[],entrances:[]}});
 w.KERN_LAYERS.setVisible('L1',true);w.KERN_LAYERS.setFloorSelection(['L0','L1']);
 const ghosts=[...get('plan').querySelectorAll('[data-layer-floor="L1"][data-layer-kind="rooms"]')].map(node=>node.dataset.layerId);
 assert.deepEqual(ghosts,['upper-kitchen','upper-storage']);
 clickRoom('storage',6,6,{shiftKey:true});pointer('pointerdown',6,6,get('plan').querySelector('[data-layer-id="upper-storage"]'),{shiftKey:true});pointer('pointerup',6,6);
 assert.deepEqual(copy(w.KERN_LAYERS.references()),[{floor:'L0',kind:'rooms',id:'storage'},{floor:'L1',kind:'rooms',id:'upper-storage'}]);

 setup([{...storage,x:10,y:4},kitchen]);assert.equal(overlapCount(),1,'Crossing the container boundary remains invalid overlap');
 setup([{...storage,x:0,y:4},kitchen]);assert.equal(overlapCount(),0,'Contained room may touch the container edge');
 setup([{...storage,x:0,y:0,w:12,h:12},kitchen]);assert.equal(overlapCount(),1,'Coincident rooms are not treated as nesting');
 setup([{...storage,type:'solid'},kitchen]);assert.equal(overlapCount(),1,'Concrete is not reclassified as a nested room');
 setup([{...storage,z:6},kitchen]);assert.equal(overlapCount(),1,'Vertically separate bodies retain prior overlap treatment');
 setup([storage,kitchen]);run('KERN_SHAPES.set(room("kitchen"),[[0,0],[12,0],[12,5],[9,5],[9,12],[0,12]],[]);render();');
 assert.equal(overlapCount(),0);assert.equal(run('roomAt({x:6,y:6}).id'),'storage');assert.equal(run('roomAt({x:10,y:10})'),undefined,'Polygon notch is not clickable');
 run('room("storage").x=7;render();');assert.equal(overlapCount(),1,'Polygon containment tests real footprint, not bounds');

 setup();run('setSelection({rooms:["storage"]});render()');pointer('pointermove',6,4);assert(get('plan').querySelector('[data-shape-adjoin]'));
 pointer('pointerdown',6,3,get('plan').querySelector('[data-shape-adjoin]'));pointer('pointermove',6,1);pointer('pointerup',6,1);
 assert.equal(run('floor().rooms.length'),3,'Adjoining a child can create another child inside the same container');assert.equal(overlapCount(),0);assert.equal(run('roomNesting().parent.get(selected).id'),'kitchen');
 run('undo();setSelection({rooms:["storage"]});render()');pointer('pointermove',6,4);pointer('pointerdown',6,3,get('plan').querySelector('[data-shape-adjoin]'));pointer('pointermove',6,-3);pointer('pointerup',6,-3);
 assert.equal(run('floor().rooms.length'),2,'Adjoining room that crosses the container still rejects true overlap');

 setup([kitchen]);const original=run('JSON.stringify(model)');run('setTool("draw")');pointer('pointerdown',2,2,get('plan').querySelector('[data-room="kitchen"]'));pointer('pointermove',5,5);pointer('pointerup',5,5);
 assert.equal(run('floor().rooms.length'),2);assert.equal(overlapCount(),0);assert.equal(run('history.length'),1);const rectangle=copy(run('room(selected)'));assert.deepEqual([rectangle.x,rectangle.y,rectangle.w,rectangle.h],[2,2,3,3]);
 run('undo()');assert.equal(run('JSON.stringify(model)'),original);run('redo()');assert.equal(run('floor().rooms.length'),2);
 run('setTool("draw")');pointer('pointerdown',6,6);pointer('pointermove',9,9);key('Escape');pointer('pointerup',9,9);assert.equal(run('floor().rooms.length'),2,'Interrupted creation does not add another room');

 setup([kitchen]);get('tool-pen').click();for(const [x,y]of [[2,2],[7,2],[7,5],[4,7],[2,5]])pointer('pointerdown',x,y,get('plan').querySelector('[data-room="kitchen"]'));key('Enter');
 assert.equal(run('floor().rooms.length'),2);assert.equal(run('room(selected).shape.vertices.length'),5);assert.equal(overlapCount(),0);const polygonId=run('selected');
 w.KERN_SHAPE_UI.cancel();run('render()');const polygonBefore=copy(run('room(selected)'));get('copyselection').click();get('pasteselection').click();
 assert.equal(run('floor().rooms.length'),3);assert.equal(run('room(selected).shape.vertices.length'),5);assert.deepEqual(copy(run('room(selected).shape')),polygonBefore.shape);assert.equal(run('room(selected).x'),polygonBefore.x+.5);assert.equal(run('room("kitchen").x'),0,'Copying child does not copy or shift container');
 key('Delete');assert.equal(run('floor().rooms.length'),2);run('undo()');assert.equal(run('floor().rooms.length'),3);run('undo()');assert.equal(run('floor().rooms.length'),2);
 run('setSelection({rooms:["kitchen"]});render()');key('Delete');assert.equal(run('floor().rooms.length'),1);assert.equal(run('floor().rooms[0].id'),polygonId,'Deleting container leaves independent child intact');run('undo()');assert.deepEqual(copy(run(`room(${JSON.stringify(polygonId)})`)),polygonBefore);

 setup();run('setSelection({rooms:["storage"]});render()');assert([...get('neighbor').options].some(option=>option.value==='kitchen'),'Nested room offers container connection');
 run('setSelection({rooms:["kitchen"]});render()');assert([...get('neighbor').options].some(option=>option.value==='storage'),'Container offers nested room connection');
 get('neighbor').value='storage';get('connect').click();assert.equal(run('floor().doors.length'),1);assert(run('doorGeometry(floor().doors[0])'),'Inspector Connect uses actual nested wall geometry');
 run('undo()');assert.equal(run('floor().doors.length'),0);

 setup([{...kitchen,w:14,h:12},{...storage,x:2,y:2,w:4,h:6},{id:'sibling',name:'Pantry',type:'tech',x:6,y:2,w:3,h:3}]);
 run('setNewConnectionKind("single");addCandidate(connectionCandidate(room("storage"),room("kitchen"),{x:6,y:6.5}));');
 assert.equal(run('floor().doors.length'),1);assert(run('doorGeometry(connection(selectedDoor))'));
 const narrowDoor=run('JSON.stringify(connection(selectedDoor))'),doorHistory=run('history.length');
 assert.equal(run('maxDoorDecimetres(connection(selectedDoor))'),28,'Slider maximum uses the parent-facing clear interval, excluding its sibling');
 for(const [field,value]of [['width',5],['offset',0],['width',Infinity],['offset',NaN]]){
  run(`updateConnection(connection(selectedDoor),${JSON.stringify(field)},${String(value)});`);
  assert.equal(run('JSON.stringify(connection(selectedDoor))'),narrowDoor,'Invalid internal opening edit is rejected');assert.equal(run('history.length'),doorHistory);
 }
 get('doorwidthslider').value='50';get('doorwidthslider').dispatchEvent(new w.Event('input',{bubbles:true}));
 assert(run('doorGeometry(connection(selectedDoor))'),'A width preview never detaches a sibling-blocked internal door');assert(run('connection(selectedDoor).width<=2.8'));
 run('finishWidthEdit(false);');assert(run('doorGeometry(connection(selectedDoor))'));if(run('history.length')>doorHistory){run('undo()');assert.equal(run('JSON.stringify(connection(selectedDoor))'),narrowDoor);}

 setup([storage,kitchen]);run('KERN_SHAPES.set(room("storage"),[[4,4],[8,4],[8,6],[6,8],[4,8]],[]);render();');const exact=run('JSON.stringify(model)');get('export').click();const exported=JSON.parse(await readBlob(t.downloads.at(-1)));assert.deepEqual(exported.building.plan,JSON.parse(exact));
 await get('file').onchange({target:{files:[{name:'Nested rooms.json',size:exact.length,text:async()=>JSON.stringify(exported)}],value:'nested'}});
 assert.equal(run('JSON.stringify(model)'),exact,'Export/import preserves room geometry, polygon vertices, array order and independent IDs');assert.equal(run('roomAt({x:5,y:5}).id'),'storage');assert.equal(overlapCount(),0);
 console.log('PASS nested-room UI: array-independent parent/child rendering and selection, label placement, hidden/locked and cross-floor layers, true overlap checks, rectangle/Pen creation, interruption, child copy/delete, parent deletion, undo/redo, inspector connection, exact export/import');
 }finally{t.close();}})().catch(error=>{console.error(error);process.exitCode=1;});
