const fs=require('fs'),assert=require('assert'),vm=require('vm'),esbuild=require('esbuild'),{boot}=require('./test-support.cjs');
const t=boot(),w=t.w,get=t.get;let renders=0,disposed=0,contextLoss=0,observerStops=0,current=null;
w.HTMLCanvasElement.prototype.getContext=function(){return{fillRect(){},strokeRect(){},fillText(){}}};
w.ResizeObserver=class{constructor(fn){this.fn=fn}observe(){this.fn()}disconnect(){observerStops++}};
w.__TestRenderer=class{constructor(){this.domElement=w.document.createElement('canvas');this.domElement.style.touchAction='none'}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){this.loop=fn;if(fn)fn()}render(scene,camera){scene.updateMatrixWorld(true);renders++;current={scene,camera,renderer:this}}dispose(){disposed++}forceContextLoss(){contextLoss++}};
const source=fs.readFileSync('src/preview3d.js','utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(');const out=esbuild.buildSync({stdin:{contents:source,resolveDir:process.cwd(),sourcefile:'preview3d-renderer-test.js'},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text;
vm.runInContext(out,t.dom.getInternalVMContext());for(const f of ['room-snapping','shape-editor','rotate-tool','gait','walkthrough','explorer','walk-start','elevation','height-rules','height-editor','elevation-editor','authoring3d','connections3d','transform-ui','route-stair-editor'])w.eval(fs.readFileSync('dist/'+f+'.js','utf8'));w.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});t.run(`model={version:1,units:'metres',floors:{L0:{name:'Ground',z:.85,rooms:[{id:'a',name:'A',type:'tech',x:4,y:4,w:8,h:6}],doors:[],entrances:['a']},L1:{name:'Upper',z:5,rooms:[{id:'b',name:'B',type:'tech',x:20,y:20,w:6,h:6}],doors:[],entrances:[]}}};floorId='L0';setSelection({rooms:['a']});render()`);const host=get('threeviewport');Object.defineProperties(host,{clientWidth:{value:900},clientHeight:{value:650}});w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:900,height:650});Object.defineProperties(w.HTMLCanvasElement.prototype,{clientWidth:{get:()=>900},clientHeight:{get:()=>650}});w.HTMLCanvasElement.prototype.setPointerCapture=()=>{};w.HTMLCanvasElement.prototype.hasPointerCapture=()=>false;w.HTMLCanvasElement.prototype.releasePointerCapture=()=>{};
(async()=>{
 const B=w.BuildingExports;await B.setWorkspaceMode('3d');const view=B.getViewer(),canvas=host.querySelector('canvas');
 const base={...view.getViewState(),position:[34,30,46],target:[12,2,12],focused:'L0',visible:['L0','L1'],gap:0};view.restoreViewState(base);
 const before=t.run('JSON.stringify(model)'),history=t.run('history.length');let pointer=80;
 const V=(x,y,z)=>current.camera.position.clone().set(x,y,z);
 const near=(a,b,message)=>{assert.equal(a.length,b.length);a.forEach((n,i)=>assert(Math.abs(n-b[i])<1e-7,message+': '+a+' ≠ '+b));};
 const pose=()=>{const s=view.getViewState();return[...s.position,...s.target];};
 function fire(type,x,y,extra={}){const e=new w.MouseEvent(type,{bubbles:true,clientX:x,clientY:y,button:2,buttons:type==='pointerdown'||type==='pointermove'?2:0,altKey:true,...extra});Object.defineProperty(e,'pointerId',{value:pointer});canvas.dispatchEvent(e);}
 function project(p){current.camera.updateMatrixWorld(true);const v=p.clone().project(current.camera);return{x:(v.x+1)*450,y:(1-v.y)*325};}
 // Resolve the same real scene hit as the viewer at an off-centre pointer.
 const THREE=require('three'),ray=new THREE.Raycaster(),objects=[];current.scene.traverse(o=>{if(o.userData.level&&o.visible&&o.parent.visible)objects.push(o)});
 const point=project(V(6,1.1,4)),ndc=new THREE.Vector2(point.x/450-1,1-point.y/325);ray.setFromCamera(ndc,current.camera);
 const anchor=ray.intersectObjects(objects,false)[0]?.point;assert(anchor,'test zoom anchor hits an actual visible room');
 const anchorScreen=project(anchor),distance=()=>current.camera.position.distanceTo(V(...view.getViewState().target));const original=pose(),d0=distance();
 fire('pointerdown',point.x,point.y);fire('pointermove',point.x,point.y+150);near(pose(),original,'vertical drag cannot zoom or pan');
 fire('pointermove',point.x+70,point.y+150);assert(distance()<d0,'right zooms closer');near([project(anchor).x,project(anchor).y],[anchorScreen.x,anchorScreen.y],'initial mouse anchor remains fixed');
 const rightDown=pose();fire('pointermove',point.x+70,point.y-150);near(pose(),rightDown,'diagonal vertical direction has no effect');
 fire('pointermove',point.x-70,point.y-150);assert(distance()>d0,'left zooms farther');near([project(anchor).x,project(anchor).y],[anchorScreen.x,anchorScreen.y],'zoom out retains initial anchor');
 fire('pointermove',point.x,point.y+300);near(pose(),original,'return to initial x restores initial pose');fire('pointerup',point.x,point.y+300);
 // Repeated gestures and capture interruption must not leave an active dolly.
 for(const ending of ['pointercancel','lostpointercapture']){view.restoreViewState(base);pointer++;fire('pointerdown',point.x,point.y);fire('pointermove',point.x+35,point.y-300);fire(ending,point.x+35,point.y-300);const stopped=pose();fire('pointermove',point.x+70,point.y,{buttons:0});near(pose(),stopped,ending+' ends zoom');}
 view.restoreViewState(base);pointer++;fire('pointerdown',point.x,point.y);fire('pointermove',point.x+25,point.y+60);w.dispatchEvent(new w.Event('blur'));const stopped=pose();fire('pointermove',point.x+70,point.y,{buttons:0});near(pose(),stopped,'blur ends zoom');
 // Zooming on the background uses a plane anchor at the initial target depth.
 view.restoreViewState(base);pointer++;fire('pointerdown',60,60);fire('pointermove',90,170);const bg=pose();fire('pointermove',90,-100);near(pose(),bg,'background zoom ignores y');fire('pointerup',90,-100);
 // Plain right drag still pans, and Alt-left still orbits.
 for(const config of [{button:2,buttons:2,altKey:false},{button:0,buttons:1,altKey:true}]){view.restoreViewState(base);pointer++;const initial=pose();fire('pointerdown',120,120,config);fire('pointermove',170,145,config);fire('pointerup',170,145,{...config,buttons:0});assert.notDeepEqual(pose(),initial);}
 assert.equal(t.run('JSON.stringify(model)'),before);assert.equal(t.run('history.length'),history);assert.deepEqual([...view.getViewState().visible].sort(),['L0','L1']);
 await B.setWorkspaceMode('2d');t.close();console.log('PASS horizontal-only anchored 3D zoom, diagonal independence, vertical no-op, repeat/cancel/capture/blur safety and preserved pan/orbit (mock GPU)');
})().catch(e=>{console.error(e);process.exitCode=1;t.close();});
