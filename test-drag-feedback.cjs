/* Display-only, live drag feedback using the complete production boot order.
 * SVG coordinate/capture doubles exercise real editor events and transactions;
 * these assertions establish DOM and geometry behavior, not browser painting. */
const assert=require('node:assert/strict');
const {boot}=require('./test-production-support.cjs');
const copy=value=>JSON.parse(JSON.stringify(value));
const near=(actual,expected,message='')=>assert(Math.abs(actual-expected)<1e-6,`${message}: ${actual} != ${expected}`);
const tick=async()=>{await Promise.resolve();await Promise.resolve();};

(async()=>{
 const t=boot(),{w,doc,get,run}=t,svg=get('plan'),A=w.KERN_DRAG_AXES,captures=new Set();
 let checks=0,pointerId=0;
 const check=async(name,fn)=>{await fn();checks++;console.log('PASS '+name);};
 try{
  svg.getScreenCTM=()=>({a:10,b:0,inverse:()=>({scale:.1})});
  svg.createSVGPoint=()=>({x:0,y:0,matrixTransform(m){return{x:this.x*m.scale,y:this.y*m.scale};}});
  svg.setPointerCapture=id=>captures.add(id);
  svg.hasPointerCapture=id=>captures.has(id);
  svg.releasePointerCapture=id=>captures.delete(id);
  if(!('onpointerdown' in w.SVGElement.prototype))for(const type of ['pointerdown','pointermove','pointerup','pointercancel','lostpointercapture'])svg.addEventListener(type,e=>svg['on'+type]?.(e));
  function ptr(type,x,y,target=svg,options={}){
   assert(target,'pointer target exists');
   const e=new w.MouseEvent(type,{bubbles:true,cancelable:true,button:0,clientX:x*10,clientY:y*10,...options});
   Object.defineProperties(e,{pointerId:{value:options.pointerId??pointerId},pointerType:{value:'mouse'}});
   target.dispatchEvent(e);return e;
  }
  function key(value,up=false,options={},target=svg){
   const e=new w.KeyboardEvent(up?'keyup':'keydown',{key:value,code:value.length===1?'Key'+value.toUpperCase():value,bubbles:true,cancelable:true,...options});
   target.dispatchEvent(e);return e;
  }
  const model=()=>run('JSON.stringify(model)');
  const storage=()=>JSON.stringify(Object.keys(w.localStorage).sort().map(k=>[k,w.localStorage.getItem(k)]));
  const stable=()=>({model:model(),history:run('JSON.stringify(history)'),future:run('JSON.stringify(future)'),storage:storage()});
  const overlay=()=>svg.querySelector('#drag-feedback-2d');
  const guides=()=>[...svg.querySelectorAll('#drag-feedback-2d [data-drag-axis]')].map(node=>node.getAttribute('data-drag-axis'));
  const lock=()=>svg.querySelector('#drag-feedback-2d [data-drag-lock]');
  const measure=()=>svg.querySelector('#drag-feedback-2d [data-drag-distance]');
  function feedback(x=0,z=0){
   const s=A.snapshot();assert(s,'active gesture has a feedback snapshot');
   assert.equal(s.space,'2d');near(s.delta.x,x,'world X');near(s.delta.y,0,'planar world Y');near(s.delta.z,z,'world Z');
   assert.deepEqual([...s.supported].sort(),['x','z']);
   assert(overlay(),'active gesture has a single overlay');assert.equal(svg.querySelectorAll('#drag-feedback-2d').length,1);
   const group=overlay(),node=measure();assert(node,'active gesture has a distance label');
   near(Number(group.getAttribute('data-drag-dx')),x,'overlay world X');
   near(Number(group.getAttribute('data-drag-dy')),0,'overlay world Y');
   near(Number(group.getAttribute('data-drag-dz')),z,'overlay world Z');
   const line=group.querySelector('[data-drag-measure]');assert(line,'measurement joins gesture origin to actual position');
   near(Number(line.getAttribute('x1')),s.origin.x,'measurement start X');near(Number(line.getAttribute('y1')),s.origin.z,'measurement start Z');
   near(Number(line.getAttribute('x2')),s.origin.x+x,'measurement end X');near(Number(line.getAttribute('y2')),s.origin.z+z,'measurement end Z');
   const values=(node.textContent.match(/[-+]?\d+(?:\.\d+)?/g)||[]).map(Number),distance=Math.hypot(x,z);
   near(Number(node.getAttribute('data-drag-distance')),distance,'exact distance');
   assert(values.some(n=>Math.abs(n-distance)<.011),`distance label reflects actual net displacement ${distance}: ${node.textContent}`);
   assert.match(node.textContent,/m\b/,'distance includes metres');
   return s;
  }
  function noFeedback(){assert.equal(A.snapshot(),null);assert.equal(overlay(),null);assert.equal(captures.size,0,'gesture releases capture');}
  async function setup(){
   await w.BuildingExports.setWorkspaceMode('2d');A.clear();
   run(`resetTransient(true);model={version:1,units:'metres',floors:{L0:{name:'Feedback',z:0,rooms:[{id:'a',name:'A',type:'tech',x:0,y:0,w:10,h:10},{id:'b',name:'B',type:'tech',x:16,y:0,w:10,h:10}],doors:[],entrances:[],primitives:[],symbols:[],services:[],annotations:[]},L1:{name:'Upper',z:4,rooms:[{id:'upper',name:'Upper',type:'tech',x:0,y:0,w:10,h:10}],doors:[],entrances:[]}}};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true,L1:true}};setTool('select');setSnapSize(0);setSelection();history=[];future=[];render();save();`);
   await tick();noFeedback();
  }
  async function down(selector='[data-room="a"]',x=5,y=5,options={}){pointerId++;ptr('pointerdown',x,y,svg.querySelector(selector),options);await tick();}
  async function move(x,y,options={}){ptr('pointermove',x,y,svg,options);await tick();}
  async function end(x=5,y=5){ptr('pointerup',x,y);await tick();noFeedback();}
  async function cancel(){key('Escape');await tick();noFeedback();}
  function service(){run(`floor().services.push({id:'svc',kind:'duct',name:'Test route',points:[{x:0,y:0},{x:10,y:0}],width:.5,clearHeight:.5,z:0,location:'overhead',access:'utility',runtimeTested:false});currentBuilding().view.serviceVisibility={L0:true};setTool('service-select');setSelection({services:['svc']});render();save();`);}
  function route(landing=false,surface='stairs'){
   run(`floor().rooms.push(KERN_ROUTE_STAIRS.create([[30,0],[30,10],[30,20]],{id:'route',surface:'${surface}',width:2,startZ:0,endZ:3}));${landing?`room('route').routeStair.nodes[1].landing=[[29,9],[31,9],[31,11],[29,11]].map(p=>KERN_ROUTE_STAIRS.local(room('route'),p));`:''}setSelection({rooms:['route']});render();KERN_ROUTE_UI.selectPoint(1);render();save();`);
  }
  w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));

  await check('Stationary keydown/keyup updates guides instantly without model, history, storage, or focus changes',async()=>{
   await setup();await down();feedback();
   const before=stable(),focus=doc.activeElement;
   for(const k of ['x','z']){
    assert(key(k).defaultPrevented);assert(lock(),'lock label appears on keydown without a pointermove');
    assert(guides().includes(k),`${k.toUpperCase()} guide appears immediately`);
    assert.deepEqual([...A.snapshot().axes],[k]);
    assert.equal(doc.activeElement,focus);assert.deepEqual(stable(),before);
    key(k,true);assert.equal(lock(),null,'lock label disappears on keyup without a pointermove');assert.deepEqual(guides(),[]);
    feedback();assert.deepEqual(stable(),before);
   }
   await end();assert.equal(run('history.length'),0);
  });
  await check('Live distance tracks snapped accepted movement and remains visible after releasing the lock',async()=>{
   await setup();run('setSnapSize(.25)');await down();
   await move(5.37,5.63);feedback(.25,.75);
   key('x');feedback(.25,.75);await move(6.12,7.02);feedback(1,.75);
   key('x',true);assert.equal(lock(),null);feedback(1,.75);
   await move(6.12,7.02);feedback(1,.75);
   await move(6.37,7.27);feedback(1.25,1);
   const distanceBefore=measure().textContent;run('draw()');assert.equal(measure().textContent,distanceBefore,'draw wrapper restores current decorations');
   await end(6.37,7.27);assert.equal(run('history.length'),1);run('undo()');near(run("room('a').x"),0);near(run("room('a').y"),0);
  });
  await check('Combined locks show only held world axes; repeated keys do not create overlays',async()=>{
   await setup();await down();key('X',false,{shiftKey:true});key('Z');
   assert.deepEqual([...A.snapshot().axes].sort(),['x','z']);assert.deepEqual([...new Set(guides())].sort(),['x','z']);
   for(let i=0;i<12;i++)key('X',false,{repeat:true});
   await move(7,8);feedback(2,3);assert.equal(svg.querySelectorAll('#drag-feedback-2d').length,1);
   key('X',true);assert.deepEqual([...A.snapshot().axes],['z']);assert(!guides().includes('x'));assert(guides().includes('z'));
   key('Z',true);assert.deepEqual(guides(),[]);await cancel();
  });
  await check('Distance is net displacement from a stable gesture origin, not accumulated pointer travel',async()=>{
   await setup();await down();const origin=copy(A.snapshot().origin);
   await move(8,9);feedback(3,4);await move(6,5);feedback(1,0);await move(5,5);feedback(0,0);
   key('z');await move(12,7);feedback(0,2);key('z',true);await move(13,8);feedback(1,3);
   assert.deepEqual(copy(A.snapshot().origin),origin,'key changes do not reset measurement start');
   await cancel();assert.equal(run('history.length'),0);
  });
  await check('Planar C identifies the vertical lock without claiming height displacement',async()=>{
   await setup();await down();const before=model();key('c');
   assert(lock());assert.deepEqual([...A.snapshot().axes],['y']);assert(!A.snapshot().supported.includes('y'));
   await move(9,12);feedback(0,0);assert.equal(model(),before);
   key('c',true);assert.equal(lock(),null);await move(10,13);feedback(1,1);
   await end(10,13);assert.equal(run('history.length'),1);
  });
  await check('Rejected polygon candidates keep the displayed accepted distance and rebase continuously',async()=>{
   await setup();run("KERN_SHAPE_UI.editRoom(room('a'))");const before=model();await down('[data-shape-vertex="0"]',0,0);
   await move(1,1);feedback(1,1);await move(10,0);feedback(1,1);
   assert.deepEqual(copy(run("KERN_SHAPES.raw(room('a'))[0]")),[1,1]);
   key('z');feedback(1,1);await move(10,-1);feedback(1,0);key('z',true);
   await cancel();assert.equal(model(),before);assert.equal(run('history.length'),0);
  });
  await check('Rejected service-point coincidences never report the rejected pointer displacement',async()=>{
   await setup();service();const before=model();await down('[data-route-point="svc"][data-point="0"]',0,0);
   await move(1,1);feedback(1,1);await move(10,0);feedback(1,1);
   key('z');await move(10,-1);feedback(1,0);key('z',true);await end(10,-1);
   assert.equal(run('history.length'),1);run('undo()');assert.equal(model(),before);
  });
  await check('Selected polygon points keep their shared actual constrained displacement',async()=>{
   await setup();run("KERN_SHAPE_UI.editRoom(room('a'))");
   await down('[data-shape-vertex="0"]',0,0);await end(0,0);
   await down('[data-shape-vertex="1"]',10,0,{shiftKey:true});await end(10,0);
   await down('[data-point-move]',5,0);key('z');await move(7,1);feedback(0,1);
   const ps=copy(run("KERN_SHAPES.raw(room('a'))"));assert.deepEqual(ps.slice(0,2),[[0,1],[10,1]]);
   key('z',true);await end(7,1);assert.equal(run('history.length'),1);
  });
  await check('Room groups and every primitive translate with live actual group distance',async()=>{
   for(const kind of ['rooms',...w.KERN_PRIMITIVES.types]){
    await setup();
    if(kind==='rooms')run("setSelection({rooms:['a','b']});render()");
    else run(`floor().primitives.push(KERN_PRIMITIVES.create('${kind}','p',{x:3,y:3,z:1}));setSelection({primitives:['p']});render()`);
    const b=copy(run('selectionBounds()')),x=b.x+b.w/2,y=b.y+b.h/2;
    await down(kind==='rooms'?'[data-room="a"]':'[data-extra="primitives"][data-id="p"]',x,y);
    assert.equal(run('drag.kind'),'group');key('z');await move(x+2,y+3);feedback(0,3);
    key('z',true);await end(x+2,y+3);assert.equal(run('history.length'),1);
   }
  });
  await check('Symbols, annotations, and service route bodies share display-only group feedback',async()=>{
   for(const kind of ['symbols','annotations','services']){
    await setup();
    run(`floor().${kind}.push(${kind==='symbols'?`{...KERN_OBJECTS.catalog[0],id:'extra',x:3,y:3,rotation:0}`:kind==='annotations'?`{id:'extra',text:'Feedback note',x:3,y:3,fontSize:.45}`:`{id:'extra',kind:'duct',name:'Test route',points:[{x:3,y:3},{x:7,y:3}],width:.5,clearHeight:.5,z:0,location:'overhead',access:'utility',runtimeTested:false}`});${kind==='services'?`currentBuilding().view.serviceVisibility={L0:true};setTool('service-select');`:''}setSelection({${kind}:['extra']});render();save();`);
    const b=copy(run(`KERN_OBJECTS.bounds(floor().${kind}[0])`)),x=b.x+b.w/2,y=b.y+b.h/2;
    await down(`[data-extra="${kind}"][data-id="extra"]`,x,y);key('x');await move(x+2,y+3);feedback(2,0);
    key('x',true);await end(x+2,y+3);assert.equal(run('history.length'),1);
   }
  });
  await check('Cross-floor live feedback measures the translated preview before commit',async()=>{
   await setup();w.KERN_LAYERS.selectFloor('L1',{additive:true});
   w.KERN_LAYERS.setReferences([{floor:'L0',kind:'rooms',id:'a'},{floor:'L1',kind:'rooms',id:'upper'}]);
   const before=model();await down('[data-crossfloor-move]',5,5);key('x');await move(7,8);feedback(2,0);
   assert.equal(model(),before,'cross-floor ghost leaves model untouched until commit');
   key('x',true);await end(7,8);near(run("room('a').x"),2);near(run('model.floors.L1.rooms[0].x'),2);assert.equal(run('history.length'),1);
  });
  await check('Stair and ramp node/landing feedback uses accepted geometry, including rejected landing edits',async()=>{
   for(const surface of ['stairs','ramp'])for(const landing of [false,true]){
    await setup();route(landing,surface);const before=model(),x=landing?29:30,y=landing?9:10;
    await down(landing?'[data-stair-landing="0"]':'[data-stair-node="1"]',x,y);
    if(landing){await move(29.5,9.5);feedback(.5,.5);await move(32,10);feedback(.5,.5);key('z');await move(32,9);feedback(.5,-.5);key('z',true);}
    else{key('x');await move(x+1,y+2);feedback(1,0);key('x',true);}
    await cancel();assert.equal(model(),before);assert.equal(run('history.length'),0);
   }
  });
  await check('Wall-projected door feedback measures the actual opening center',async()=>{
   await setup();run(`floor().rooms.push({id:'south',name:'South',type:'tech',x:0,y:10,w:10,h:10});floor().doors.push({id:'ab',a:'a',b:'south',kind:'door',width:1,offset:.5});setSelection({doors:['ab']});render();save();`);
   const p=copy(run("connectionCenter(doorGeometry(connection('ab')))"));await down('[data-door="ab"]',p.x,p.y);
   key('z');await move(p.x+2,p.y+4);feedback(0,0);key('z',true);
   await move(p.x+3,p.y+5);feedback(1,0);await end(p.x+3,p.y+5);assert.equal(run('history.length'),1);
  });
  await check('Orthogonal door groups report their actual center displacement instead of raw group input',async()=>{
   await setup();run(`floor().doors.push({id:'north',a:'a',b:'outside',kind:'door',side:'n',width:1,offset:.5},{id:'east',a:'a',b:'outside',kind:'door',side:'e',width:1,offset:.5});setSelection({doors:['north','east']});render();save();`);
   const p=copy(run("connectionCenter(doorGeometry(connection('north')))"));await down('[data-door="north"]',p.x,p.y);
   assert.equal(run('drag.kind'),'group-door');await move(p.x+2,p.y+3);feedback(1,1.5);
   assert.match(measure().textContent,/center/i);key('x');await move(p.x+3,p.y+4);feedback(1.5,1.5);
   key('x',true);await end(p.x+3,p.y+4);assert.equal(run('history.length'),1);
  });
  await check('Shift auto-axis remains unlabeled and non-translation gestures do not get movement decorations',async()=>{
   await setup();run("floor().primitives.push(KERN_PRIMITIVES.create('cube','p',{x:3,y:3,z:1}));setSelection({primitives:['p']});render()");
   const b=copy(run('selectionBounds()')),x=b.x+b.w/2,y=b.y+b.h/2;await down('[data-extra="primitives"][data-id="p"]',x,y);
   await move(x+1,y+2,{shiftKey:true});feedback(0,2);assert.equal(lock(),null);assert.deepEqual(guides(),[]);await cancel();
   for(const kind of ['marquee','resize','draw']){
    await setup();let target=svg,px=40,py=40;
    if(kind==='resize'){run("setSelection({rooms:['a']});render()");target=svg.querySelector('[data-handle="a"][data-edge="se"]');px=10;py=10;}
    if(kind==='draw')run("setTool('draw')");
    pointerId++;ptr('pointerdown',px,py,target);await tick();assert.equal(A.snapshot(),null);assert.equal(overlay(),null);
    await move(px+2,py+3);assert.equal(A.snapshot(),null);assert.equal(overlay(),null);
    ptr('pointercancel',px+2,py+3);await tick();noFeedback();
   }
  });
  await check('Feedback nodes cannot focus, pick, or create edit targets and refreshes do not persist anything',async()=>{
   await setup();await down();await move(7,8);key('x');
   const before=stable(),focus=doc.activeElement,group=overlay();
   assert.equal(group.getAttribute('pointer-events'),'none');
   assert(!group.querySelector('button,input,a,[tabindex],[data-room],[data-extra],[data-door],[data-handle],[data-point-move],[data-stair-node],[data-route-point]'));
   assert([...group.querySelectorAll('[pointer-events]')].every(n=>n.getAttribute('pointer-events')==='none'));
   for(let i=0;i<20;i++){A.refresh();run('draw()');}
   feedback(2,3);assert.equal(doc.activeElement,focus);assert.deepEqual(stable(),before);
   key('x',true);await cancel();
  });
  for(const interruption of ['pointercancel','lostpointercapture','blur','Escape','tool','floor','mode']){
   await check(`${interruption} removes every decoration, rolls back, and leaves the next gesture unlocked`,async()=>{
    await setup();const before=model();await down();key('x');await move(7,8);feedback(2,0);
    if(interruption==='blur')w.dispatchEvent(new w.Event('blur'));
    else if(interruption==='Escape')key('Escape');
    else if(interruption==='tool')run("setTool('draw')");
    else if(interruption==='floor')w.KERN_LAYERS.selectFloor('L1');
    else if(interruption==='mode'){
     w.Building3D={mount(){return{dispose(){},showAll(){},setWalk(){},getFocusedFloor(){return null;}};}};
     await w.BuildingExports.setWorkspaceMode('3d');
    }else ptr(interruption,7,8);
    await tick();noFeedback();assert.equal(model(),before);assert.equal(run('history.length'),0);key('x',true);
    await setup();await down();assert.deepEqual([...A.snapshot().axes],[]);await move(6,7);feedback(1,2);await end(6,7);
   });
  }
  await check('Subscriptions update while stationary and stop notifying after unsubscribe',async()=>{
   await setup();const events=[],off=A.subscribe(s=>events.push(s));assert.equal(typeof off,'function');
   await down();const count=events.length;key('x');assert(events.length>count);assert(events.at(-1).axes.includes('x'));
   key('x',true);assert.deepEqual([...events.at(-1).axes],[]);await end();assert.equal(events.at(-1),null);
   off();const ended=events.length;await down();key('z');key('z',true);await cancel();assert.equal(events.length,ended);
  });
  console.log(`PASS ${checks} drag-feedback production and lifecycle checks`);
 }finally{t.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
