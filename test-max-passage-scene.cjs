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
async function reset(){await B.setWorkspaceMode('2d');run(`resetTransient(true);model=${JSON.stringify(plan)};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true}};setTool('select');setSelection();history=[];future=[];render();save();`);await B.openThree();await tick();aim();}
(async()=>{try{
 w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
 for(const latched of [true,false]){
  await reset();if(latched){run("setTool('draw')");key('c',{altKey:true});assert(w.KERN_MAX_PASSAGE_UI.latched,'Alt+C switches directly from Draw');}else key('c');
  const modifiers=latched?{}:{altKey:true},before=run('JSON.stringify(model)'),camera=pose();pointerId++;fire('pointerdown',world(5,10),modifiers);fire('pointermove',world(15,10),modifiers);
  assert.equal(run('history.length'),0);assert.equal(run('JSON.stringify(model)'),before);assert.equal(pose(),camera,'Alt during Connect cannot orbit the camera');
  const line=previewLine();assert(line,'actual 3D maximum passage preview');const coords=Array.from(line.geometry.getAttribute('position').array),xs=coords.filter((_,i)=>i%3===0),ys=coords.filter((_,i)=>i%3===1),zs=coords.filter((_,i)=>i%3===2);assert(Math.abs(Math.max(...ys)-Math.min(...ys)-4.6)<1e-5,'preview uses maximum common height');assert(Math.abs(Math.max(...zs)-Math.min(...zs)-20)<1e-5,'preview uses maximum width');assert(xs.every(x=>Math.abs(x-10)<1e-5),'preview stays on the selected shared wall');
  fire('pointerup',world(15,10),modifiers);await tick();assert.equal(run('floor().doors.length'),1);assert.equal(run('floor().doors[0].kind'),'open');assert.equal(run('floor().doors[0].height'),4.6);assert.equal(run('history.length'),1);run('undo()');await tick();assert.equal(run('JSON.stringify(model)'),before);
 }
 // The same modifier still controls the camera outside Connect.
 await reset();key('v');const before=run('JSON.stringify(model)'),camera=pose(),start=world(5,10);pointerId++;fire('pointerdown',start,{altKey:true});fire('pointermove',{x:start.x+100,y:start.y+20},{altKey:true});fire('pointerup',{x:start.x+100,y:start.y+20},{altKey:true});assert.notEqual(pose(),camera,'Alt navigation still orbits in Select');assert.equal(run('JSON.stringify(model)'),before);assert.equal(run('history.length'),0);
 // Canceled Alt connection leaves the model and history unchanged.
 await reset();key('c');pointerId++;fire('pointerdown',world(5,10),{altKey:true});fire('pointermove',world(15,10),{altKey:true});fire('pointercancel',world(15,10),{altKey:true});fire('pointerup',world(15,10),{altKey:true});assert.equal(run('floor().doors.length'),0);assert.equal(run('history.length'),0);
 await B.setWorkspaceMode('2d');assert.equal(get('threeviewport').querySelectorAll('canvas').length,0);
 console.log('PASS actual Three.js maximum passages: direct Alt+C and held-Alt C, full-size live preview, stable camera while connecting, preserved Select orbit, one undo and pointer cancellation (mock GPU)');
}finally{t.close();}})().catch(error=>{console.error(error);process.exitCode=1;});
