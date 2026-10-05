'use strict';
/* Production script ordering, real Three.js TransformControls/raycasting, and
 * real model/Undo/storage. Only WebGL drawing and canvas browser APIs are mocked.
 * Run: node test-translation-axis-scene.cjs [optional case-name substring]
 * This does not claim browser/GPU or physical-keyboard verification. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),esbuild=require('esbuild'),{boot}=require('./test-production-support.cjs');
const copy=v=>JSON.parse(JSON.stringify(v));
const near=(a,b,label='',eps=3e-5)=>assert(Math.abs(a-b)<eps,`${label}: ${a} != ${b}`);
const vecNear=(a,b,label='vector')=>near(a.distanceTo(b),0,label);
const failures=[];let passed=0;
const source=fs.readFileSync('src/preview3d.js','utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(').replace('controls.enableDamping = true;','window.__THREE=THREE;controls.enableDamping = true;');
const bundle=esbuild.buildSync({stdin:{contents:source,resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text;
async function harness({linkedRoute=false}={}){
 const t=boot(),{w,doc,get,run}=t;let current,pointerId=11;
 w.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});
 w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},strokeRect(){},fillText(){},measureText:s=>({width:s.length*20})});
 w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:1000,height:700});
 const capture=new Set();w.HTMLCanvasElement.prototype.setPointerCapture=id=>capture.add(id);w.HTMLCanvasElement.prototype.hasPointerCapture=id=>capture.has(id);w.HTMLCanvasElement.prototype.releasePointerCapture=id=>capture.delete(id);
 w.ResizeObserver=class{constructor(fn){this.fn=fn}observe(){this.fn()}disconnect(){}};
 w.__TestRenderer=class{constructor(){this.domElement=doc.createElement('canvas');Object.defineProperties(this.domElement,{clientWidth:{value:1000},clientHeight:{value:700}})}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){this.loop=fn;if(fn)fn()}render(scene,camera){scene.updateMatrixWorld(true);current={scene,camera,renderer:this}}dispose(){}forceContextLoss(){}};
 vm.runInContext(bundle,t.dom.getInternalVMContext());Object.defineProperties(get('threeviewport'),{clientWidth:{value:1000},clientHeight:{value:700}});
 const P=w.KERN_PRIMITIVES,R=w.KERN_ROUTE_STAIRS,L=w.KERN_LAYERS,B=w.BuildingExports,UI=w.KERN_PRIMITIVE_UI;
 const floor=z=>({name:'Floor',z,clearHeight:4,rooms:[],doors:[],entrances:[],primitives:[]});
 const plan={version:1,units:'metres',floors:{L0:floor(0),L1:floor(8)}};
 plan.floors.L0.rooms.push({id:'room',name:'Room',type:'tech',x:-10,y:-10,w:10,h:10,z:0});
 for(const [i,type]of P.types.entries())plan.floors.L0.primitives.push({...P.create(type,type,{x:4+i*8,y:4,z:2}),w:4,h:5,height:3,rotation:37,tiltX:16,tiltY:-12});
 const route=R.create([[0,20],[0,32],[12,32]],{id:'route',name:'Route',width:2,startZ:0,endZ:3,...(linkedRoute?{start:{kind:'floor',floor:'L0',offset:.5},end:{kind:'floor',floor:'L1',offset:-.25}}:{})});route.routeStair.nodes[1].landing=[[-1,31],[1,31],[1,33],[-1,33]].map(p=>R.local(route,p));plan.floors.L0.rooms.push(copy(route));
 w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
 run(`resetTransient(true);model=${JSON.stringify(plan)};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true,L1:false}};setTool('select');setSelection();setSnapSize(.25);history=[];future=[];render();save();`);
 await B.openThree();let view=B.getViewer();const T=w.__THREE;
 const canvas=()=>get('threeviewport').querySelector('canvas');
 const tick=async()=>{await new Promise(r=>setTimeout(r,5));view=B.getViewer();current.renderer.loop?.();};
 const all=predicate=>{const result=[];current.scene.traverse(o=>{if(predicate(o))result.push(o)});return result};
 const root=id=>all(o=>o.userData.primitive===id)[0];
 const control=()=>all(o=>o.isTransformControlsRoot)[0].controls;
 const shown=o=>{for(;o;o=o.parent)if(!o.visible)return false;return true};
 const handle=edge=>all(o=>o.userData.edge===edge&&shown(o))[0];
 const screen=v=>{current.scene.updateMatrixWorld(true);current.camera.updateMatrixWorld(true);const p=v.clone().project(current.camera);return{x:(p.x+1)*500,y:(1-p.y)*350}};
 const ptr=(type,p,extra={})=>{const e=new w.Event(type,{bubbles:true,cancelable:true});Object.assign(e,{clientX:p.x,clientY:p.y,pageX:p.x,pageY:p.y,pointerId,pointerType:'mouse',button:0,buttons:type==='pointerup'?0:1,...extra});canvas().dispatchEvent(e);current.renderer.loop?.();return e};
 const key=(k,up=false,extra={},target=canvas()||w)=>{const e=new w.KeyboardEvent(up?'keyup':'keydown',{key:k,code:k.length===1?'Key'+k.toUpperCase():k,bubbles:true,cancelable:true,...extra});target.dispatchEvent(e);current.renderer.loop?.();return e};
 function aim(center){view.restoreViewState({...view.getViewState(),position:center.clone().add(new T.Vector3(12,14,18)).toArray(),target:center.toArray(),focused:'L0',visible:['L0'],gap:0,labels:false,showCeilings:false,showWalls:false,navigationFloor:'L0',navigationY:0,navigationElevation:0});current.renderer.loop?.();}
 function primitives(ids=['cube']){L.selectFloor('L0');UI.select('L0',ids[0]);for(const id of ids.slice(1))UI.select('L0',id,true);key('w');aim(control().object.getWorldPosition(new T.Vector3()));}
 function gizmoPoint(axis){const c=control();current.scene.updateMatrixWorld(true);for(const q of c._gizmo.picker[c.mode].children.filter(o=>o.name===axis)){const b=new T.Box3().setFromObject(q),points=[b.getCenter(new T.Vector3())],a=q.geometry?.attributes.position;if(a)for(let i=0;i<a.count;i+=Math.max(1,Math.floor(a.count/120)))points.push(new T.Vector3().fromBufferAttribute(a,i).applyMatrix4(q.matrixWorld));for(const v of points){const p=screen(v);ptr('pointermove',p,{buttons:0});if(c.axis===axis)return p;}}throw Error('No clickable '+axis+' gizmo');}
 function beginGizmo(axis='XYZ'){const p=gizmoPoint(axis);pointerId++;ptr('pointerdown',p);assert(view.primitiveDragging(),'primitive gesture started');assert(control().dragging,'TransformControls gesture, not a bounds handle');return p;}
 function room(id='room'){L.selectFloor('L0');L.selectLayer('rooms',id,{},'L0');view.selectRoom('L0',id);const r=run(`room('${id}')`);aim(new T.Vector3(r.x+r.w/2,r.z??0,r.y+r.h/2));if(id==='route'){w.KERN_ROUTE_UI.selectPoint(1);view.selectRoom('L0',id);}current.renderer.loop?.();}
 function beginRoom(edge){const h=handle(edge);assert(h,'room handle '+edge+' exists');const p=screen(h.getWorldPosition(new T.Vector3()));pointerId++;assert(ptr('pointerdown',p).defaultPrevented,'room handle accepted pointerdown');return p;}
 const snapshot=()=>run('JSON.stringify(model)'),record=(id='cube')=>copy(run(`floor().primitives.find(o=>o.id==='${id}')`));
 const saved=()=>JSON.parse(w.localStorage.getItem('kern-buildings-v1')).buildings.find(b=>b.id===run('currentBuilding().id')).plan;
 const position=edge=>handle(edge).position.clone();
 const close=()=>{B.disposeThree();t.close()};
 return{...t,w,T,P,R,L,B,UI,canvas,tick,all,root,control,handle,screen,ptr,key,aim,primitives,beginGizmo,room,beginRoom,snapshot,record,saved,position,get view(){return view},get owner(){return pointerId},close};
}
async function check(name,fn,options){if(process.argv[2]&&!name.includes(process.argv[2]))return;let h;try{h=await harness(options);await fn(h);passed++;console.log('PASS '+name)}catch(e){failures.push({name,error:e.stack});console.error('FAIL '+name+'\n'+e.stack)}finally{h?.close()}}
const offset=(p,x=63,y=-37)=>({x:p.x+x,y:p.y+y});
const poses=(h,ids)=>ids.map(id=>h.root(id).position.clone());
function assertAxis(delta,axis,label){assert(Math.abs(delta[axis])>.05,label+' permits intended world axis; delta='+delta.toArray().join(','));for(const a of ['x','y','z'])if(a!==axis)near(delta[a],0,label+' freezes world '+a);}
async function undone(h,before){h.run('undo()');await h.tick();assert.equal(h.snapshot(),before,'one Undo restores exact plan');}
(async()=>{
 for(const type of ['cube','cylinder','sphere','hemisphere'])for(const [letter,axis]of [['x','x'],['z','z'],['c','y']])for(const free of [false,true])await check(`${type} held ${letter.toUpperCase()} world ${axis.toUpperCase()} ${free?'free':'snapped'}`,async h=>{
  h.primitives([type]);const before=h.snapshot(),n=h.run('history.length'),start=h.root(type).position.clone(),record=h.record(type),p=h.beginGizmo(),end=offset(p);
  assert(h.key(letter).defaultPrevented,'held letter consumed');h.ptr('pointermove',end,{ctrlKey:free});const delta=h.root(type).position.clone().sub(start);assertAxis(delta,axis,type);if(!free)near(delta[axis]/.25,Math.round(delta[axis]/.25),'grid snapping');else assert(Math.abs(delta[axis]/.25-Math.round(delta[axis]/.25))>1e-4,'Ctrl bypasses snapping');
  assert.equal(h.snapshot(),before,'preview leaves model unchanged');h.ptr('pointerup',end,{ctrlKey:free});h.key(letter,true);await h.tick();assert.equal(h.run('history.length'),n+1,'one transaction');assert.deepEqual(h.saved().floors.L0.primitives.find(o=>o.id===type),h.record(type),'saved pose');for(const k of ['w','h','height','rotation','tiltX','tiltY'])assert.equal(h.record(type)[k],record[k],'preserves '+k);await undone(h,before);
 });
 await check('held-axis group commit persists across 2D/3D and browser-local reload',async h=>{
  h.primitives(['cube','sphere']);const before=h.snapshot(),p=h.beginGizmo();h.key('c');h.ptr('pointermove',offset(p),{ctrlKey:true});h.ptr('pointerup',offset(p));h.key('c',true);await h.tick();const committed=h.snapshot(),positions=poses(h,['cube','sphere']);assert.notEqual(committed,before);await h.B.setWorkspaceMode('2d');await h.B.openThree();await h.tick();assert.equal(h.snapshot(),committed);['cube','sphere'].forEach((id,i)=>vecNear(h.root(id).position,positions[i],'roundtrip pose'));assert.equal(h.L.references().length,2);const storage=Object.fromEntries(Array.from({length:h.w.localStorage.length},(_,i)=>{const k=h.w.localStorage.key(i);return[k,h.w.localStorage.getItem(k)]}));const reload=boot(storage);try{reload.w.KERN_WORKSPACE.openBuilding(reload.run('currentBuilding().id'));assert.equal(reload.run('JSON.stringify(model)'),committed,'reloaded persisted model');}finally{reload.close()}await undone(h,before);
 });
 for(const [letter,axis]of [['x','x'],['z','z'],['c','y']])await check(`group held ${letter.toUpperCase()} keeps spacing, free/snapped and Undo`,async h=>{
  const ids=['cube','sphere'];for(const free of [false,true]){h.primitives(ids);const before=h.snapshot(),start=poses(h,ids),p=h.beginGizmo(),end=offset(p);h.key(letter);h.ptr('pointermove',end,{ctrlKey:free});const delta=h.root(ids[0]).position.clone().sub(start[0]);assertAxis(delta,axis,'group');vecNear(h.root(ids[1]).position.clone().sub(start[1]),delta,'shared group delta');assert.equal(h.snapshot(),before);h.ptr('pointerup',end);h.key(letter,true);await h.tick();assert.equal(h.run('history.length'),1);await undone(h,before);}
 });
 for(const ids of [['cube'],['cube','cylinder']])await check(`${ids.length===1?'single':'group'} release and union boundaries are continuous`,async h=>{
  h.primitives(ids);const before=h.snapshot(),p=h.beginGizmo(),a=offset(p,21,-17),b=offset(p,64,-49),c=offset(p,93,-70),d=offset(p,117,-97);
  h.ptr('pointermove',a,{ctrlKey:true});let anchor=poses(h,ids);h.key('X',false,{ctrlKey:true,metaKey:true,altKey:true,shiftKey:true});h.ptr('pointermove',a,{ctrlKey:true});ids.forEach((id,i)=>vecNear(h.root(id).position,anchor[i],'engage stationary'));
  h.ptr('pointermove',b,{ctrlKey:true});let now=poses(h,ids);ids.forEach((id,i)=>assertAxis(now[i].clone().sub(anchor[i]),'x','X segment'));
  for(let i=0;i<3;i++)assert(h.key('X',false,{repeat:true}).defaultPrevented);h.key('z');h.ptr('pointermove',b,{ctrlKey:true});ids.forEach((id,i)=>vecNear(h.root(id).position,now[i],'union engage stationary'));anchor=now;h.ptr('pointermove',c,{ctrlKey:true});now=poses(h,ids);ids.forEach((id,i)=>{near(now[i].y,anchor[i].y,'X+Z keeps Y');assert(Math.abs(now[i].x-anchor[i].x)>.01);assert(Math.abs(now[i].z-anchor[i].z)>.01)});
  h.key('x',true);h.ptr('pointermove',c,{ctrlKey:true});ids.forEach((id,i)=>vecNear(h.root(id).position,now[i],'release X stationary'));anchor=now;h.ptr('pointermove',d,{ctrlKey:true});now=poses(h,ids);ids.forEach((id,i)=>assertAxis(now[i].clone().sub(anchor[i]),'z','Z segment'));
  h.key('z',true);h.ptr('pointermove',d,{ctrlKey:true});ids.forEach((id,i)=>vecNear(h.root(id).position,now[i],'release all stationary'));anchor=now;h.ptr('pointermove',offset(p,146,-114),{ctrlKey:true});ids.forEach((id,i)=>{for(const axis of ['x','y','z'])assert(Math.abs(h.root(id).position[axis]-anchor[i][axis])>.01,'restores free '+axis)});assert.equal(h.run('tool'),'select');assert.equal(h.run('history.length'),0);h.ptr('pointerup',d);await h.tick();assert.equal(h.run('history.length'),1);await undone(h,before);
 });
 for(const baseAxis of ['X','Y','Z'])await check(`axis-only ${baseAxis} gizmo remains world-aligned on tilted primitive`,async h=>{
  h.primitives();const before=h.snapshot(),start=h.root('cube').position.clone(),p=h.beginGizmo(baseAxis),letter={X:'x',Y:'c',Z:'z'}[baseAxis];h.key(letter);h.ptr('pointermove',offset(p),{ctrlKey:true});assertAxis(h.root('cube').position.clone().sub(start),baseAxis.toLowerCase(),'axis gizmo');h.key('Escape');h.key(letter,true);assert.equal(h.snapshot(),before);assert(!h.view.primitiveDragging());
 });
 await check('primitive foreign pointer cannot move, release, or cancel held drag',async h=>{
  h.primitives(['cube','sphere']);const before=h.snapshot(),p=h.beginGizmo();h.key('z');h.ptr('pointermove',offset(p));const stable=poses(h,['cube','sphere']);for(const event of ['pointerdown','pointermove','pointerup','pointercancel','lostpointercapture']){h.ptr(event,offset(p,-120,60),{pointerId:h.owner+1});assert(h.view.primitiveDragging(),event+' foreign pointer ignored');['cube','sphere'].forEach((id,i)=>vecNear(h.root(id).position,stable[i],event));}h.ptr('pointerup',offset(p));h.key('z',true);await h.tick();assert.equal(h.run('history.length'),1);await undone(h,before);
 });
 for(const action of ['Escape','typing Escape','pointercancel','lostpointercapture','blur','mode','floor','view'])await check(`primitive held drag cancellation: ${action}`,async h=>{
  h.primitives(['cube','sphere']);const before=h.snapshot(),p=h.beginGizmo();h.key('c');h.ptr('pointermove',offset(p));assert(h.view.primitiveDragging());
  if(action==='Escape')h.key('Escape');else if(action==='typing Escape'){const input=h.get('inspector').querySelector('input');assert(input);input.focus();h.key('Escape',false,{},input);}else if(action==='blur')h.w.dispatchEvent(new h.w.Event('blur'));else if(action==='mode')h.key('r');else if(action==='floor')h.L.selectFloor('L1');else if(action==='view')await h.B.setWorkspaceMode('2d');else h.ptr(action,p);
  assert(!h.view.primitiveDragging());assert.equal(h.snapshot(),before);assert.equal(h.run('history.length'),0);h.key('c',true);if(!h.B.isThreeMode())await h.B.openThree();await h.tick();h.primitives();const start=h.root('cube').position.clone(),q=h.beginGizmo();h.ptr('pointermove',offset(q),{ctrlKey:true});const delta=h.root('cube').position.clone().sub(start);for(const axis of ['x','y','z'])assert(Math.abs(delta[axis])>.01,'next drag unrestrained '+axis);h.key('Escape');
 });
 for(const [letter,axis]of [['x','x'],['z','z'],['c',null]])await check(`room planar move ${letter.toUpperCase()} lock and continuous release`,async h=>{
  h.room();const before=h.snapshot(),start=h.position('move'),p=h.beginRoom('move'),end=offset(p);h.key(letter);h.ptr('pointermove',end,{ctrlKey:true});const held=h.position('move');if(axis)assertAxis(held.clone().sub(start),axis,'room');else vecNear(held,start,'C freezes planar room');assert.equal(h.snapshot(),before);h.key(letter,true);h.ptr('pointermove',end,{ctrlKey:true});vecNear(h.position('move'),held,'release stationary');h.ptr('pointermove',offset(p,88,-52),{ctrlKey:true});const after=h.position('move');assert(Math.abs(after.x-held.x)>.01);assert(Math.abs(after.z-held.z)>.01);h.ptr('pointerup',end);await h.tick();assert.equal(h.run('history.length'),1);await undone(h,before);
 });
 for(const letter of ['x','z','c'])await check(`room elevation ${letter.toUpperCase()} lock and release`,async h=>{
  h.room();const before=h.snapshot(),start=h.position('elevate'),p=h.beginRoom('elevate'),end=offset(p,0,-30);h.key(letter);h.ptr('pointermove',end);const held=h.position('elevate');if(letter==='c')assertAxis(held.clone().sub(start),'y','room elevation');else vecNear(held,start,'planar lock freezes elevation');assert.equal(h.snapshot(),before);h.key(letter,true);h.ptr('pointermove',end);vecNear(h.position('elevate'),held,'height release stationary');h.ptr('pointermove',offset(p,0,-45));assert(h.position('elevate').y>held.y);h.ptr('pointerup',end);await h.tick();assert.equal(h.run('history.length'),1);await undone(h,before);
 });
 for(const edge of ['route-node-1','route-height-1','route-landing-1-0'])for(const letter of ['x','z','c'])await check(`${edge} held ${letter.toUpperCase()} with preview isolation, release and Undo`,async h=>{
  h.room('route');const before=h.snapshot(),stored=JSON.stringify(h.saved()),start=h.position(edge),p=h.beginRoom(edge),end=offset(p,60,-10);h.key(letter);h.ptr('pointermove',end,{ctrlKey:true});const held=h.position(edge),axis=edge.includes('height')?(letter==='c'?'y':null):(letter==='x'?'x':letter==='z'?'z':null);if(axis)assertAxis(held.clone().sub(start),axis,edge);else vecNear(held,start,'unsupported axis freezes '+edge);assert.equal(h.snapshot(),before,'route preview must not mutate live document');assert.equal(JSON.stringify(h.saved()),stored,'route preview must not persist');h.key(letter,true);h.ptr('pointermove',end,{ctrlKey:true});vecNear(h.position(edge),held,'route release stationary');h.ptr('pointermove',offset(p,82,-25),{ctrlKey:true});assert(h.position(edge).distanceTo(held)>.05);h.ptr('pointerup',end);await h.tick();assert.equal(h.run('history.length'),1,'one route transaction');await undone(h,before);
 });
 for(const edge of ['move','elevate','route-node-1','route-height-1','route-landing-1-0'])await check(`${edge} foreign pointer cannot cancel or replace owner`,async h=>{
  h.room(edge.startsWith('route-')?'route':'room');const before=h.snapshot(),p=h.beginRoom(edge);h.key(edge.includes('height')||edge==='elevate'?'c':'x');h.ptr('pointermove',offset(p,32,-20),{ctrlKey:true});const stable=h.position(edge);
  for(const event of ['pointermove','pointerup','pointercancel','lostpointercapture']){h.ptr(event,offset(p,-100,50),{pointerId:h.owner+1});vecNear(h.position(edge),stable,'foreign '+event+' ignored');}
  const foreignStart=h.screen(h.handle(edge).getWorldPosition(new h.T.Vector3()));h.ptr('pointerdown',foreignStart,{pointerId:h.owner+1});h.ptr('pointermove',offset(foreignStart,-65,30),{pointerId:h.owner+1,ctrlKey:true});vecNear(h.position(edge),stable,'foreign pointerdown cannot steal drag');h.key('Escape');h.key('x',true);h.key('c',true);assert.equal(h.snapshot(),before);assert.equal(h.run('history.length'),0);
 });
 for(const edge of ['move','elevate','route-node-1','route-height-1','route-landing-1-0'])await check(`${edge} foreign pointerdown replacement is ignored`,async h=>{
  h.room(edge.startsWith('route-')?'route':'room');const before=h.snapshot(),p=h.beginRoom(edge),letter=edge.includes('height')||edge==='elevate'?'c':'x';h.key(letter);h.ptr('pointermove',offset(p,32,-20),{ctrlKey:true});const stable=h.position(edge),q=h.screen(h.handle(edge).getWorldPosition(new h.T.Vector3()));h.ptr('pointerdown',q,{pointerId:h.owner+1});h.ptr('pointermove',offset(q,-100,50),{pointerId:h.owner+1,ctrlKey:true});vecNear(h.position(edge),stable,'foreign pointerdown cannot replace active edit');h.key('Escape');h.key(letter,true);assert.equal(h.snapshot(),before);assert.equal(h.run('history.length'),0);
 });
 await check('Ctrl+Z is held depth during drag, then Undo after pointer and key release',async h=>{
  h.primitives();const before=h.snapshot(),start=h.root('cube').position.clone(),p=h.beginGizmo();h.key('z',false,{ctrlKey:true});h.ptr('pointermove',offset(p),{ctrlKey:true});assertAxis(h.root('cube').position.clone().sub(start),'z','Ctrl+Z');assert.equal(h.run('history.length'),0);h.ptr('pointerup',offset(p));await h.tick();assert.equal(h.run('history.length'),1);assert(h.key('z',false,{ctrlKey:true,repeat:true}).defaultPrevented);assert.equal(h.run('history.length'),1,'matching repeat cannot Undo');h.key('z',true,{ctrlKey:true});h.key('z',false,{ctrlKey:true});await h.tick();assert.equal(h.snapshot(),before,'fresh chord resumes normal Undo');
 });
 for(const edge of ['move','elevate','route-node-1','route-height-1','route-landing-1-0'])await check(`${edge} fully blocked axis has no transaction or save`,async h=>{
  h.room(edge.startsWith('route-')?'route':'room');const before=h.snapshot(),saved=JSON.stringify(h.saved()),p=h.beginRoom(edge),letter=edge.includes('height')||edge==='elevate'?'x':'c';h.key(letter);h.ptr('pointermove',offset(p,52,-39),{ctrlKey:true});h.ptr('pointerup',offset(p,52,-39));h.key(letter,true);await h.tick();assert.equal(h.snapshot(),before,'frozen move must preserve exact authored data');assert.equal(h.run('history.length'),0,'frozen move is not a transaction');assert.equal(JSON.stringify(h.saved()),saved,'frozen move does not save different plan');
 });
 for(const index of [0,2])for(const [kind,letter]of [['height','x'],['height','z'],['node','c']])await check(`linked route-${kind}-${index} frozen ${letter.toUpperCase()} preserves endpoint and exact authored route`,async h=>{
  h.room('route');const r=h.run("room('route')"),link=index===0?'start':'end';assert(r.routeStair[link],'fixture has linked endpoint');const before=h.snapshot(),saved=JSON.stringify(h.saved()),edge=`route-${kind}-${index}`,start=h.position(edge),p=h.beginRoom(edge);h.key(letter);h.ptr('pointermove',offset(p,58,-32),{ctrlKey:true});vecNear(h.position(edge),start,'forbidden endpoint axis freezes');assert.equal(h.snapshot(),before,'preview stays detached');h.ptr('pointerup',offset(p,58,-32));h.key(letter,true);await h.tick();assert.equal(h.snapshot(),before,'frozen gesture cannot detach or normalize endpoint');assert.equal(h.run('history.length'),0);assert.equal(JSON.stringify(h.saved()),saved);
 },{linkedRoute:true});
 for(const edge of ['move','elevate','route-node-1','route-height-1','route-landing-1-0'])for(const action of ['Escape','pointercancel','lostpointercapture','blur','floor','view'])await check(`${edge} held drag cancellation: ${action}`,async h=>{
  h.room(edge.startsWith('route-')?'route':'room');const before=h.snapshot(),p=h.beginRoom(edge),letter=edge.includes('height')||edge==='elevate'?'c':'x';h.key(letter);h.ptr('pointermove',offset(p,28,-18),{ctrlKey:true});
  if(action==='Escape')h.key('Escape');else if(action==='blur')h.w.dispatchEvent(new h.w.Event('blur'));else if(action==='floor')h.L.selectFloor('L1');else if(action==='view')await h.B.setWorkspaceMode('2d');else h.ptr(action,p);
  assert.equal(h.snapshot(),before,'canceled preview leaves plan exact');assert.equal(h.run('history.length'),0);h.key(letter,true);if(h.B.isThreeMode()){h.ptr('pointerup',offset(p,28,-18));await h.tick();assert.equal(h.snapshot(),before,'stale pointerup cannot commit');}
 });
 console.log(`\n${passed} passed, ${failures.length} failed (production + real Three; mocked GPU)`);if(failures.length){console.error(JSON.stringify(failures,null,2));process.exitCode=1;}
})().catch(e=>{console.error(e.stack);process.exitCode=1});
