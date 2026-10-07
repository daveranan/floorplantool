/* Production listeners and real Three.js raycasts; WebGL drawing is a renderer double. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),esbuild=require('esbuild'),{boot}=require('./test-production-support.cjs');
const t=boot(),{w,doc,get,run}=t;let current;
w.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});
w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},strokeRect(){},fillText(){},measureText:s=>({width:s.length*20})});
w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:900,height:650});
w.HTMLCanvasElement.prototype.setPointerCapture=()=>{};w.HTMLCanvasElement.prototype.hasPointerCapture=()=>false;w.HTMLCanvasElement.prototype.releasePointerCapture=()=>{};
w.ResizeObserver=class{constructor(fn){this.fn=fn}observe(){this.fn()}disconnect(){}};
w.__TestRenderer=class{constructor(){this.domElement=doc.createElement('canvas');Object.defineProperties(this.domElement,{clientWidth:{value:900},clientHeight:{value:650}})}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){this.loop=fn;if(fn)fn()}render(scene,camera){scene.updateMatrixWorld(true);current={scene,camera,renderer:this}}dispose(){}forceContextLoss(){}};
const source=fs.readFileSync('src/preview3d.js','utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(');
vm.runInContext(esbuild.buildSync({stdin:{contents:source,resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text,t.dom.getInternalVMContext());
Object.defineProperties(get('threeviewport'),{clientWidth:{value:900},clientHeight:{value:650}});
const plan={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,clearHeight:4.6,rooms:[{id:'a',name:'A',type:'tech',x:0,y:0,w:10,h:20},{id:'b',name:'B',type:'tech',x:10,y:0,w:10,h:20}],doors:[],entrances:['a']}}};
const B=w.BuildingExports;
const tick=async()=>{await new Promise(resolve=>setTimeout(resolve,0));assert(B.getViewer(),get('threestatus').textContent);current.renderer.loop?.();};
let pointerId=800;
const canvas=()=>get('threeviewport').querySelector('canvas');
function key(key,more={}){canvas().dispatchEvent(new w.KeyboardEvent('keydown',{key,bubbles:true,cancelable:true,...more}));current.renderer.loop?.();}
function world(x,y,z=0){current.camera.updateMatrixWorld(true);const p=current.camera.position.clone().set(x,z,y).project(current.camera);return{x:(p.x+1)*450,y:(1-p.y)*325};}
function fire(type,p,more={}){const e=new w.Event(type,{bubbles:true,cancelable:true});Object.assign(e,{clientX:p.x,clientY:p.y,pageX:p.x,pageY:p.y,pointerId,pointerType:'mouse',button:0,buttons:type==='pointerup'?0:1,...more});canvas().dispatchEvent(e);current.renderer.loop?.();}
function pose(){const s=B.getViewer().getViewState();return JSON.stringify({position:s.position,target:s.target});}
function aim(){const v=B.getViewer();v.restoreViewState({...v.getViewState(),position:[10,40,36],target:[10,0,10],gap:0,labels:false,showWalls:false,showCeilings:false,focused:'L0',visible:['L0']});current.renderer.loop?.();}
function previewLine(){let group;current.scene.traverse(o=>{if(o.userData.authorPreview)group=o});return group?.children.find(o=>o.isLineLoop);}
async function reset(p=plan){await B.setWorkspaceMode('2d');run(`resetTransient(true);model=${JSON.stringify(p)};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true}};setTool('select');setSelection();history=[];future=[];render();save();`);await B.openThree();await tick();aim();}
(async()=>{try{
 w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
 const THREE=require('three');
 for(const kind of ['low-door','low-passage']){
  await reset();run(`setNewConnectionKind(${JSON.stringify(kind)});setTool('connect');`);
  const before=run('JSON.stringify(model)'),camera=pose();pointerId++;fire('pointerdown',world(5,10));fire('pointermove',world(15,10));
  assert.equal(run('history.length'),0);assert.equal(run('JSON.stringify(model)'),before);assert.equal(pose(),camera);
  const line=previewLine();assert(line,'live low opening preview');const coords=Array.from(line.geometry.getAttribute('position').array),ys=coords.filter((_,i)=>i%3===1),zs=coords.filter((_,i)=>i%3===2);assert(Math.abs(Math.max(...ys)-Math.min(...ys)-1.4)<1e-5,'preview uses low clear height');assert(Math.abs(Math.max(...zs)-Math.min(...zs)-.8)<1e-5,'preview uses low width');
  fire('pointerup',world(15,10));await tick();assert.equal(run('floor().doors[0].openingPreset'),kind);assert.equal(run('history.length'),1);
  const d=run('floor().doors[0]'),g=run('doorGeometry(floor().doors[0])'),center=(g.start+g.end)/2,view=B.getViewer();view.setWalls(true);view.setCutaway(false);current.renderer.loop?.();current.scene.updateMatrixWorld(true);
  const walls=[];current.scene.traverse(o=>{if(o.userData.kind==='wall'||o.userData.boxes?.some(b=>b.kind==='wall'))walls.push(o)});
  const hits=z=>new THREE.Raycaster(new THREE.Vector3(9,z,center),new THREE.Vector3(1,0,0),0,2).intersectObjects(walls,false);
  assert.equal(hits(1.1).length,0,'actual crouched opening has no wall');assert(hits(1.6).length,'actual standing height hits retained lintel');
  run('undo()');await tick();assert.equal(run('JSON.stringify(model)'),before);run('redo()');await tick();assert.equal(run('floor().doors[0].height'),1.4);
 }
 // The shared threshold uses the higher floor, even when the source room is lower.
 const offset=JSON.parse(JSON.stringify(plan));offset.floors.L0.rooms[1].z=.2;offset.floors.L0.rooms[1].height=1.3;await reset(offset);run("setNewConnectionKind('low-passage');setTool('connect');");pointerId++;fire('pointerdown',world(5,10));fire('pointermove',world(15,10,.2));const line=previewLine();assert(line);const ys=Array.from(line.geometry.getAttribute('position').array).filter((_,i)=>i%3===1);assert(Math.abs(Math.min(...ys)-.2)<1e-5,'ghost uses common threshold');assert(Math.abs(Math.max(...ys)-1.5)<1e-5,'ghost clips to actual available room height');fire('pointercancel',world(15,10,.2));fire('pointerup',world(15,10,.2));assert.equal(run('floor().doors.length'),0);assert.equal(run('history.length'),0);
 await B.setWorkspaceMode('2d');assert.equal(get('threeviewport').querySelectorAll('canvas').length,0);
 console.log('PASS actual Three low openings: deliberate door/passage placement, exact ghost dimensions and threshold, retained lintel raycasts, crouched void, single undo/redo and cancellation (mock GPU)');
}finally{t.close();}})().catch(error=>{console.error(error);process.exitCode=1;});
