/* Synthetic fixtures using the complete production script order. No repo writes. */
const assert=require('node:assert/strict'),boot=require('./test-production-support.cjs').boot;
const t=boot(),{w,run,get,doc}=t,L=w.KERN_LAYERS;
w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
const plain=x=>JSON.parse(JSON.stringify(x));
function setup(extra=''){
 for(const d of doc.querySelectorAll('dialog[open]'))d.close();
 run(`resetTransient(true);model={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,rooms:[{id:'a',name:'A',x:0,y:0,w:8,h:8,type:'tech'},{id:'b',name:'Other',x:30,y:0,w:8,h:8,type:'tech'}],doors:[],entrances:[]},L1:{name:'Upper',z:4,rooms:[{id:'a',name:'Upper A',x:12,y:0,w:8,h:8,type:'living'}],doors:[],entrances:[]}}};floorId='L0';currentBuilding().view.layers={visible:{L0:true,L1:true}};setTool('select');setSelection();history=[];future=[];${extra};render();save();`);
}
function both(){L.setFloorSelection(['L0','L1']);L.setReferences([{floor:'L0',kind:'rooms',id:'a'},{floor:'L1',kind:'rooms',id:'a'}]);}
function key(k,more={},target=doc.body){const e=new w.KeyboardEvent('keydown',{key:k,bubbles:true,cancelable:true,...more});target.dispatchEvent(e);return e;}
function ptr(node,type,x=0,y=0,more={}){assert(node);const e=new w.MouseEvent(type,{bubbles:true,cancelable:true,clientX:x,clientY:y,button:0,...more});Object.defineProperty(e,'pointerId',{value:more.pointerId||9});node.dispatchEvent(e);return e;}
function wheel(){get('plan').dispatchEvent(new w.WheelEvent('wheel',{bubbles:true,cancelable:true,deltaY:-1}));}
function snapshot(){return run('JSON.stringify({model,history,future})');}
function names(){return plain(run('Object.fromEntries(Object.entries(model.floors).map(([fid,f])=>[fid,f.rooms.map(r=>r.name)]))'));}
try{
 // Legacy consumers that assign primary fields cannot leave a different hidden scope.
 setup();both();run(`selected='b';selectedDoor=null;render()`);assert.deepEqual(plain(L.references()),[{floor:'L0',kind:'rooms',id:'b'}]);key('ArrowRight');assert.deepEqual(plain(run('[floor().rooms[0].x,floor().rooms[1].x,model.floors.L1.rooms[0].x]')),[0,30.5,12]);
 // Switching/reloading a building and a full page boot preserve floor-qualified refs.
 setup();both();const refs=plain(L.references());run('save();loadBuilding(currentBuilding());render()');assert.deepEqual(plain(L.references()),refs);
 const storage=Object.fromEntries(Array.from({length:w.localStorage.length},(_,i)=>{const k=w.localStorage.key(i);return[k,w.localStorage.getItem(k)];}));const reloaded=boot(storage);try{assert.deepEqual(plain(reloaded.w.KERN_LAYERS.references()),refs);}finally{reloaded.close();}
 // Every ordinary clipboard route replaces the previously copied cross-floor buffer.
 for(const copy of [()=>key('c',{ctrlKey:true}),()=>get('copyselection').click(),()=>{w.KERN_EXPLORER.menu({floor:'L0',room:'b',clientX:10,clientY:10});get('explorermenu').querySelector('[data-action="copy"]').click();},()=>w.KERN_OBJECT_UI.clipboard('c')]){
  setup();both();assert(L.clipboard('c'));run(`setSelection({rooms:['b']});render()`);copy();key('v',{ctrlKey:true});assert.deepEqual(names(),{L0:['A','Other','Other'],L1:['Upper A']});
 }
 // Cutting singleton site geometry is rejected before mutation/history, since it cannot paste.
 setup(`room('a').type='courtyard';model.courtyard={floor:'L0',room:'a',x:0,y:0,w:8,h:8}`);both();let before=snapshot();assert.equal(L.clipboard('x'),false);assert.equal(snapshot(),before);assert.match(get('notice').textContent,/courtyard|shared site/i);
 // Real object locks protect generated coupling; destination enablement protects paste.
 setup(`room('a').editGroup='g';model.floors.L1.rooms[0].editGroup='g';model.floors.L1.rooms[0].locked=true`);L.selectLayer('rooms','a');before=snapshot();assert.equal(L.moveSelection(3,0),false);assert.equal(snapshot(),before);assert.match(get('notice').textContent,/locked/i);
 setup();both();assert(L.clipboard('c'));L.setFloorSelection(['L0']);before=snapshot();assert.equal(L.clipboard('v'),false);assert.equal(snapshot(),before);assert.match(get('notice').textContent,/L1/);
 // Source-derived locked footprints follow a selected owner. View locks still block.
 setup(`model.floors.L1.rooms[0]={id:'derived',name:'Derived',x:0,y:0,w:8,h:8,type:'void',locked:true,linkedSource:{floor:'L0',room:'a'},derivedFootprint:true}`);L.selectLayer('rooms','a');assert(L.moveSelection(2,1));assert.equal(run('model.floors.L1.rooms[0].x'),2);assert.equal(run('room("b").x'),30);run('undo()');L.toggleObject('rooms','derived','locked','L1');before=snapshot();assert.equal(L.moveSelection(2,1),false);assert.equal(snapshot(),before);
 // Unsupported active-floor-only editors cannot partially transform a mixed selection.
 setup();both();before=snapshot();key('e');assert.equal(run('tool'),'select');assert.equal(get('plan').querySelectorAll('[data-rotate-vertex]').length,0);assert.equal(run('canEdit(room("a"))'),false);ptr(get('plan').querySelector('[data-room="a"]'),'dblclick',2,2);assert.equal(w.KERN_SHAPE_UI.inPointMode(),false);assert.equal(snapshot(),before);assert.equal(get('inspector').children.length,1);assert(get('inspector').firstElementChild.classList.contains('crossfloor-inspector'));
 // Camera redraws preserve geometry nodes, but commit and undo invalidate the cache.
 setup();run('draw();let lifecycleMarkupCount=0;const lifecycleMarkup=planMarkup;planMarkup=function(...args){lifecycleMarkupCount++;return lifecycleMarkup(...args)};');const original=get('plan').querySelector('[data-room="a"]');for(let i=0;i<5;i++)wheel();assert.equal(run('lifecycleMarkupCount'),0);assert.equal(get('plan').querySelector('[data-room="a"]'),original);run(`commit(()=>room('a').x=2)`);assert(run('lifecycleMarkupCount')>0);const moved=get('plan').querySelector('[data-room="a"]');assert.notEqual(moved,original);wheel();assert.equal(get('plan').querySelector('[data-room="a"]'),moved);run('undo()');const undone=get('plan').querySelector('[data-room="a"]');assert.notEqual(undone,moved);wheel();assert.equal(get('plan').querySelector('[data-room="a"]'),undone);assert.equal(run('room("a").x'),0);
 // Undo/redo while previewing cancel the uncommitted gesture, preserving older history.
 for(const action of ['undo()','redo()']){setup();both();run(`commit(()=>room('b').name='Earlier saved edit')`);before=snapshot();ptr(get('plan').querySelector('[data-crossfloor-move]'),'pointerdown');ptr(get('plan'),'pointermove',3,2);run(action);ptr(get('plan'),'pointerup',3,2);assert.equal(snapshot(),before);}
 // Scope follows creation/removal through the normal floor-management entry points.
 setup();run(`addFloor({id:'L9',name:'New',z:9})`);assert.equal(L.editable('L9'),true,'Creating a floor makes its new active floor editable');run('removeFloor(true)');assert.equal(run('currentBuilding().view.layers.editFloors.includes("L9")'),false,'Deleted floor cannot remain in editing scope');
 console.log('PASS crossfloor selection reconciliation and reload, clipboard ownership, safe cut, linked guards, destination scope, partial-editor protections, camera invalidation, cancellation history and floor lifecycle');
}finally{t.close();}
