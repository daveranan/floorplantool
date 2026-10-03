/* Production listeners and actual Three.js geometry/raycasting; only WebGL drawing is mocked. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),esbuild=require('esbuild'),{boot}=require('./test-production-support.cjs');
const t=boot(),{w,doc,get,run}=t;let current;
w.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});
w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},strokeRect(){},fillText(){},measureText:s=>({width:s.length*20})});
w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:900,height:650});
w.HTMLCanvasElement.prototype.setPointerCapture=()=>{};w.HTMLCanvasElement.prototype.hasPointerCapture=()=>false;w.HTMLCanvasElement.prototype.releasePointerCapture=()=>{};
w.ResizeObserver=class{constructor(fn){this.fn=fn}observe(){this.fn()}disconnect(){}};
w.__TestRenderer=class{constructor(){this.domElement=doc.createElement('canvas');Object.defineProperties(this.domElement,{clientWidth:{value:900},clientHeight:{value:650}})}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){this.loop=fn;if(fn)fn()}render(scene,camera){scene.updateMatrixWorld(true);current={scene,camera,renderer:this}}dispose(){}forceContextLoss(){}};
const source=fs.readFileSync('src/preview3d.js','utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(').replace('controls.enableDamping = true;','window.__THREE=THREE;controls.enableDamping = true;');
vm.runInContext(esbuild.buildSync({stdin:{contents:source,resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text,t.dom.getInternalVMContext());
Object.defineProperties(get('threeviewport'),{clientWidth:{value:900},clientHeight:{value:650}});
const base={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,rooms:[{id:'a',name:'Raised A',type:'tech',x:0,y:0,w:8,h:8,z:3},{id:'b',name:'Raised B',type:'tech',x:12,y:0,w:8,h:8,z:3}],doors:[],entrances:[]},L1:{name:'Upper',z:8,rooms:[{id:'upper',name:'Upper',type:'tech',x:24,y:0,w:8,h:8}],doors:[],entrances:[]}}};
const B=w.BuildingExports,L=w.KERN_LAYERS,UI=w.KERN_BRIDGE_UI,copy=x=>JSON.parse(JSON.stringify(x));
let pointerId=900,checks=0,T;
const canvas=()=>get('threeviewport').querySelector('canvas'),snapshot=()=>run('JSON.stringify({model,history,future})'),scope=()=>JSON.stringify(L.floorState());
const ghost=()=>current.scene.children.find(o=>o.userData.authorPreview),view=()=>B.getViewer();
async function tick(){await new Promise(resolve=>setTimeout(resolve,0));assert(view(),get('threestatus').textContent);current.renderer.loop?.();}
function key(key,more={}){canvas().dispatchEvent(new w.KeyboardEvent('keydown',{key,bubbles:true,cancelable:true,...more}));current.renderer.loop?.();}
function world(x,y,z=3){current.camera.updateMatrixWorld(true);const p=new T.Vector3(x,z,y).project(current.camera);return{x:(p.x+1)*450,y:(1-p.y)*325};}
function fire(type,p,more={},target=canvas()){const e=new w.Event(type,{bubbles:true,cancelable:true});Object.assign(e,{clientX:p.x,clientY:p.y,pageX:p.x,pageY:p.y,pointerId,pointerType:'mouse',button:0,buttons:type==='pointerup'||type==='pointermove'?0:1,...more});target.dispatchEvent(e);current.renderer.loop?.();}
function click(p,more={}){const target=canvas();pointerId++;fire('pointerdown',p,more,target);fire('pointerup',p,more,target);}
function aim(options={}){view().restoreViewState({...view().getViewState(),position:[10,35,28],target:[10,3,4],gap:0,labels:true,showWalls:false,showCeilings:false,focused:'L0',visible:['L0'],navigationFloor:'L0',navigationY:0,navigationElevation:0,...options});current.renderer.loop?.();}
function begin(){get('tool-bridge').click();assert.equal(run('tool'),'bridge');click(world(6,3));assert(UI.isEditing(),'first actual floor click starts a Bridge');fire('pointermove',world(14,5));assert(ghost().children.some(o=>o.isMesh),'actual second-room hover displays Bridge slab');}
async function reset(plan=base){await B.setWorkspaceMode('2d');run(`resetTransient(true);model=${JSON.stringify(plan)};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true,L1:false}};setTool('select');setSelection();history=[];future=[];render();save();`);await B.openThree();await tick();T=w.__THREE;aim();}
async function check(name,fn){await fn();checks++;console.log('PASS '+name);}
(async()=>{try{
 assert(UI,'Bridge UI is loaded in production script order');w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
 await check('3D Bridge shortcut preserves the chosen floor and physical elevated slab height',async()=>{
  await reset();const before=snapshot(),layers=scope();run("setTool('draw')");key('c',{shiftKey:true});assert.equal(run('tool'),'bridge');assert.equal(scope(),layers,'entering Bridge never changes floor scope');click(world(6,3));assert(UI.isEditing());assert.equal(UI.getDraft().room,'a');assert.equal(UI.getDraft().z,3,'labels and floor datum cannot change endpoint height');assert.equal(snapshot(),before);fire('pointermove',world(14,5));
  const slab=ghost().children.find(o=>o.isMesh);assert(slab);assert.equal(slab.geometry.type,'ExtrudeGeometry','angled bridge previews its polygon rather than its bounding box');const box=new T.Box3().setFromObject(slab);assert(Math.abs(box.max.y-3)<1e-6,'preview top follows room elevation');assert(Math.abs(box.min.y-2.85)<1e-6);assert(Math.abs(box.min.x-8)<1e-6);assert(Math.abs(box.max.x-12)<1e-6);assert.equal(snapshot(),before,'hover only creates scene geometry');assert.equal(scope(),layers);
  fire('pointermove',world(10,4));assert.equal(ghost().children.length,0,'empty gap is not projected into a floor endpoint');fire('pointermove',world(14,5));assert(ghost().children.length);click(world(14,5));await tick();
  assert.equal(run('floor().rooms.filter(r=>r.bridge).length'),1);const r=run('floor().rooms.find(r=>r.bridge)');assert.equal(r.z,3);assert.equal(r.type,'terrace');assert(!r.routeStair&&!r.localSteps);assert.equal(run('floor().doors.length'),2);assert.equal(run('history.length'),1);assert(!UI.isEditing());assert.equal(ghost().children.length,0);assert.equal(scope(),layers);run('undo()');await tick();assert.equal(run('JSON.stringify(model)'),JSON.stringify(base));
 });
 await check('Bridge Escape, floor change, mode switch, pointer cancel and blur discard previews without edits',async()=>{
  for(const cancel of ['escape','floor','mode','pointercancel','blur']){await reset();begin();const before=snapshot();if(cancel==='escape')key('Escape');else if(cancel==='floor')L.selectFloor('L1');else if(cancel==='mode')run("setTool('connect')");else if(cancel==='pointercancel')fire('pointercancel',world(14,5));else w.dispatchEvent(new w.Event('blur'));assert(!UI.isEditing(),cancel+' clears the first endpoint');assert.equal(ghost().children.length,0,cancel+' removes the preview');assert.equal(snapshot(),before,cancel+' cannot write model/history');}
  await reset();begin();const before=snapshot();await B.setWorkspaceMode('2d');assert(!UI.isEditing(),'leaving 3D clears the draft');assert.equal(get('threeviewport').querySelectorAll('canvas').length,0);assert.equal(snapshot(),before);
 });
 await check('changing buildings cancels the Bridge and leaves its original model untouched',async()=>{
  await reset();begin();const before=snapshot(),sourceId=run('currentBuilding().id'),oldGhost=ghost();run("createBuilding('Bridge interruption fixture')");assert(!UI.isEditing());assert.equal(oldGhost.children.length,0);run(`switchBuilding(${JSON.stringify(sourceId)})`);await tick();assert.equal(snapshot(),before);assert.equal(ghost().children.length,0);
 });
 await check('hidden or locked endpoint rooms cannot receive a Bridge',async()=>{
  for(const flag of ['hidden','locked']){await reset();L.toggleObject('rooms','a',flag,'L0');await tick();get('tool-bridge').click();const before=snapshot();click(world(6,3));assert(!UI.isEditing(),flag+' room cannot start a bridge');assert.equal(snapshot(),before);}
 });
 await check('hidden and non-editing floors cannot be activated or receive a Bridge through 3D clicks',async()=>{
  await reset();L.setVisible('L0',false);L.setVisible('L1',true);get('tool-bridge').click();const before=snapshot(),layers=scope();click(world(6,3));click(world(28,4,8));assert(!UI.isEditing());assert.equal(snapshot(),before);assert.equal(scope(),layers,'3D Bridge hits never activate or show a floor');
 });
 await check('wall faces cannot become elevated Bridge endpoints',async()=>{
  await reset();aim({position:[-12,7,4],target:[0,4,4],showWalls:true,cutaway:false});get('tool-bridge').click();const before=snapshot();click(world(0,4,4));assert(!UI.isEditing(),'a physical wall face is not a room-floor endpoint');assert.equal(snapshot(),before);
 });
 await check('unequal elevation is rejected without a ghost or history entry',async()=>{
  const plan=copy(base);plan.floors.L0.rooms[1].z=4;await reset(plan);get('tool-bridge').click();click(world(6,3));assert(UI.isEditing());const before=snapshot();fire('pointermove',world(14,5,4));assert.equal(ghost().children.length,0);click(world(14,5,4));assert(UI.isEditing(),'invalid second end keeps the first point for correction');assert.equal(snapshot(),before);
 });
 await check('Alt orbit still navigates while a Bridge draft is active',async()=>{
  await reset();begin();const before=snapshot(),endpoint=JSON.stringify(UI.getDraft()),pose=JSON.stringify(view().getViewState().position),p=world(14,5);pointerId++;fire('pointerdown',p,{altKey:true,buttons:1});fire('pointermove',{x:p.x+90,y:p.y+15},{altKey:true,buttons:1});fire('pointerup',{x:p.x+90,y:p.y+15},{altKey:true});assert.notEqual(JSON.stringify(view().getViewState().position),pose);assert.equal(JSON.stringify(UI.getDraft()),endpoint);assert.equal(snapshot(),before);
 });
 console.log('PASS '+checks+' actual Three.js Bridge authoring checks (mock GPU)');
}finally{B.disposeThree();t.close();}})().catch(error=>{console.error(error.stack);process.exitCode=1;});
