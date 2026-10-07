const fs=require('fs'),assert=require('assert'),vm=require('vm'),esbuild=require('esbuild'),{boot}=require('./test-support.cjs');
const t=boot(),w=t.w,get=t.get;let renders=0,disposed=0,contextLoss=0,observerStops=0,current=null;
w.HTMLCanvasElement.prototype.getContext=function(){return{fillRect(){},strokeRect(){},fillText(){}}};
w.ResizeObserver=class{constructor(fn){this.fn=fn}observe(){this.fn()}disconnect(){observerStops++}};
w.__TestRenderer=class{constructor(){this.domElement=w.document.createElement('canvas');this.domElement.style.touchAction='none'}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){this.loop=fn;if(fn)fn()}render(scene,camera){scene.updateMatrixWorld(true);renders++;current={scene,camera,renderer:this}}dispose(){disposed++}forceContextLoss(){contextLoss++}};
const source=fs.readFileSync('src/preview3d.js','utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(');const out=esbuild.buildSync({stdin:{contents:source,resolveDir:process.cwd(),sourcefile:'preview3d-renderer-test.js'},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text;
vm.runInContext(out,t.dom.getInternalVMContext());for(const f of ['shape-connections','room-snapping','shape-editor','rotate-tool','gait','walkthrough','explorer','walk-start','elevation','height-rules','height-editor','elevation-editor','authoring3d','connections3d','transform-ui','route-stair-editor'])w.eval(fs.readFileSync('dist/'+f+'.js','utf8'));w.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});t.run(`model={version:1,units:'metres',floors:{L0:{name:'Lower',z:0,rooms:[{id:'a',name:'A',type:'tech',x:0,y:0,w:8,h:8},{id:'b',name:'B',type:'tech',x:8,y:0,w:8,h:8}],doors:[],entrances:['a']},L1:{name:'Upper',z:5,rooms:[{id:'a',name:'A',type:'tech',x:24,y:24,w:8,h:8},{id:'b',name:'B',type:'tech',x:32,y:24,w:8,h:8}],doors:[],entrances:[]}}};floorId='L0';setSelection();render()`);const host=get('threeviewport');Object.defineProperties(host,{clientWidth:{value:900},clientHeight:{value:650}});w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:900,height:650});Object.defineProperties(w.HTMLCanvasElement.prototype,{clientWidth:{get:()=>900},clientHeight:{get:()=>650}});w.HTMLCanvasElement.prototype.setPointerCapture=()=>{};w.HTMLCanvasElement.prototype.hasPointerCapture=()=>false;w.HTMLCanvasElement.prototype.releasePointerCapture=()=>{};
(async()=>{
 const B=w.BuildingExports;await B.setWorkspaceMode('3d');let canvas;
 const tick=async()=>{await new Promise(r=>setTimeout(r,0));assert(B.getViewer(),get('threestatus').textContent);canvas=host.querySelector('canvas');};await tick();
 const view=()=>B.getViewer(),visible=()=>assert.deepEqual([...view().getViewState().visible].sort(),['L0','L1']);
 get('threefloors').querySelector('[data-isolate3d="L0"]').click();get('threefloors').querySelector('[data-isolate3d="L1"]').dispatchEvent(new w.MouseEvent('click',{bubbles:true,shiftKey:true}));visible();
 view().restoreViewState({...view().getViewState(),position:[34,40,38],target:[29,5,28],gap:0,visible:['L0','L1'],focused:'L1'});
 const world=(x,y,z)=>{current.camera.updateMatrixWorld(true);const p=current.camera.position.clone().set(x,z,y).project(current.camera);return{x:(p.x+1)*450,y:(1-p.y)*325};};
 let pointer=200;function fire(type,p,extra={}){const e=new w.MouseEvent(type,{bubbles:true,clientX:p.x,clientY:p.y,button:0,buttons:type==='pointerup'?0:1,...extra});Object.defineProperty(e,'pointerId',{value:pointer});canvas.dispatchEvent(e);}
 async function click(p){pointer++;fire('pointerdown',p);fire('pointerup',p);await tick();visible();}
 async function drag(a,b,extra={}){pointer++;fire('pointerdown',a,extra);fire('pointermove',b,extra);fire('pointerup',b,extra);await tick();visible();}
 function mode(key){canvas.dispatchEvent(new w.KeyboardEvent('keydown',{key,bubbles:true}));}
 function count(fid='L1'){return t.run(`model.floors.${fid}.doors.length`)}
 const upperA=()=>world(28,28,5),upperB=()=>world(36,28,5),wall=()=>world(32,27,5.5);
 mode('d');await click(wall());assert.equal(count(),1);assert.equal(count('L0'),0);assert.equal(t.run('model.floors.L1.doors[0].kind'),'door');
 mode('x');await drag(upperA(),upperB());assert.equal(count(),0);
 mode('w');await click(world(24,28,5.5));assert.equal(count(),1);assert.equal(t.run('model.floors.L1.doors[0].kind'),'window');
 mode('x');await click(world(24,28,5.5));assert.equal(count(),0);
 mode('c');await drag(upperA(),upperB());assert.equal(count(),1);assert.equal(count('L0'),0);
 mode('x');await click(upperA());assert(w.KERN_CONNECTION_3D.pending);await click(upperB());assert.equal(count(),0);
 mode('c');await click(upperA());assert(w.KERN_CONNECTION_3D.pending);await click(upperB());assert.equal(count(),1);
 // Crossing floors cannot create a wrong-floor connection.
 const before=t.run('JSON.stringify(model)');await drag(upperA(),world(4,4,0));assert.equal(t.run('JSON.stringify(model)'),before);
 mode('v');await click(upperA());assert.equal(t.run('floorId'),'L1');assert.equal(t.run('selected'),'a');visible();
 // Edit the selected room through its actual 3D handle, while both floors stay visible.
 let handle;current.scene.traverse(o=>{if(o.userData.edge==='se')handle=o});assert(handle);const p=handle.getWorldPosition(handle.position.clone()),a=world(p.x,p.z,p.y),b=world(p.x+1.13,p.z+.67,p.y),oldWidth=t.run('room(selected).w');await drag(a,b,{ctrlKey:true});assert(Math.abs(t.run('room(selected).w')-(oldWidth+1.13))<.02,'Ctrl allows unsnapped 3D footprint resize');assert.equal(t.run('floorId'),'L1');assert.equal(t.run('selected'),'a');visible();
 // Initial Alt on a resize handle uses centered resizing rather than camera navigation.
 current.scene.traverse(o=>{if(o.userData.edge==='se')handle=o});const q=handle.getWorldPosition(handle.position.clone()),center=t.run('[room(selected).x+room(selected).w/2,room(selected).y+room(selected).h/2]');await drag(world(q.x,q.z,q.y),world(q.x+.6,q.z+.4,q.y),{altKey:true,ctrlKey:true});assert(Math.abs(t.run('room(selected).x+room(selected).w/2')-center[0])<1e-6);assert(Math.abs(t.run('room(selected).y+room(selected).h/2')-center[1])<1e-6);
 await B.setWorkspaceMode('2d');t.close();console.log('PASS actual Shift-floor controls, 3D door/window/connect/disconnect clicks/drags, wrong-floor rejection and Ctrl/free Alt/centered room resize (mock GPU)');
})().catch(e=>{console.error(e);process.exitCode=1;t.close();});
