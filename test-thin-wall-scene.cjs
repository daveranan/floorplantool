/* Actual Three.js objects, transforms and ray tests. WebGL drawing is mocked. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),esbuild=require('esbuild'),{boot}=require('./test-production-support.cjs');
const copy=x=>JSON.parse(JSON.stringify(x));let count=0;
const check=async(name,fn)=>{await fn();count++;console.log('PASS '+name)};
(async()=>{const t=boot(),{w,doc,get,run}=t;let current,mounts=0;try{
 w.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});
 w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},strokeRect(){},fillText(){},measureText:s=>({width:s.length*20})});
 w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:900,height:650});
 w.HTMLCanvasElement.prototype.setPointerCapture=()=>{};w.HTMLCanvasElement.prototype.hasPointerCapture=()=>false;w.HTMLCanvasElement.prototype.releasePointerCapture=()=>{};
 w.ResizeObserver=class{constructor(fn){this.fn=fn}observe(){this.fn()}disconnect(){}};
 w.__TestRenderer=class{constructor(){mounts++;this.domElement=doc.createElement('canvas');Object.defineProperties(this.domElement,{clientWidth:{value:900},clientHeight:{value:650}})}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){this.loop=fn;if(fn)fn()}render(scene,camera){scene.updateMatrixWorld(true);current={scene,camera,renderer:this}}dispose(){}forceContextLoss(){}};
 const source=fs.readFileSync('src/preview3d.js','utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(').replace('controls.enableDamping = true;','window.__THREE=THREE;window.__orbit=controls;controls.enableDamping = true;');
 vm.runInContext(esbuild.buildSync({stdin:{contents:source,resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text,t.dom.getInternalVMContext());
 Object.defineProperties(get('threeviewport'),{clientWidth:{value:900},clientHeight:{value:650}});
 const P=w.KERN_PRIMITIVES,L=w.KERN_LAYERS,B=w.BuildingExports,UI=w.KERN_PRIMITIVE_UI,WUI=w.KERN_THIN_WALL_UI;
 const f=(z)=>({name:'Floor',z,rooms:[{id:'room',name:'Room',type:'tech',x:0,y:0,w:12,h:12}],doors:[],entrances:[],primitives:[]}),plan={version:1,units:'metres',floors:{L0:f(0),L1:f(6)}};
 for(const [i,type]of P.types.entries())plan.floors.L0.primitives.push({...P.create(type,type,{x:2+i*2,y:4,z:1}),w:1,h:1,height:1});plan.floors.L1.primitives.push(P.create('cube','upper',{x:4,y:4,z:1}));
 w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));run(`resetTransient(true);model=${JSON.stringify(plan)};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true,L1:false}};setTool('select');setSelection();history=[];future=[];render();save();`);
 await B.openThree();let view=B.getViewer();assert(view);const T=w.__THREE;
 const roots=()=>{const result=[];current.scene.traverse(o=>{if(o.userData.primitive)result.push(o)});return result;},root=id=>roots().find(o=>o.userData.primitive===id);
 const canvas=()=>get('threeviewport').querySelector('canvas'),tick=async()=>{await new Promise(r=>setTimeout(r,5));view=B.getViewer();current.renderer.loop?.();};
 function aim(){view.restoreViewState({...view.getViewState(),position:[8,18,19],target:[5,1.5,4],focused:'L0',visible:['L0'],gap:0,labels:false,showCeilings:false,showWalls:false,navigationFloor:'L0',navigationY:0,navigationElevation:0});current.renderer.loop?.();}
 const screen=v=>{current.scene.updateMatrixWorld(true);current.camera.updateMatrixWorld(true);const p=v.clone().project(current.camera);return{x:(p.x+1)*450,y:(1-p.y)*325};};
 let pointerId=1;function ptr(type,p,extra={}){const e=new w.Event(type,{bubbles:true,cancelable:true});Object.assign(e,{clientX:p.x,clientY:p.y,pageX:p.x,pageY:p.y,pointerId,pointerType:'mouse',button:0,buttons:type==='pointerup'?0:1,...extra});canvas().dispatchEvent(e);current.renderer.loop?.();return e;}
 const click=(p,extra={})=>{pointerId++;ptr('pointerdown',p,extra);ptr('pointerup',p,extra);};
 aim();
 function gizmoPoint(axis){const control=current.scene.children.find(o=>o.isTransformControlsRoot).controls;current.scene.updateMatrixWorld(true);for(const q of control._gizmo.picker[control.mode].children.filter(o=>o.name===axis)){const b=new T.Box3().setFromObject(q),ps=[b.getCenter(new T.Vector3())],a=q.geometry?.attributes.position;if(a)for(let i=0;i<a.count;i+=Math.max(1,Math.floor(a.count/120)))ps.push(new T.Vector3().fromBufferAttribute(a,i).applyMatrix4(q.matrixWorld));for(const v of ps){const p=screen(v);ptr('pointermove',p,{buttons:0});if(control.axis===axis)return p;}}throw Error('No clickable '+axis+' handle');}

 let wallId;
 await check('3D wall draw uses active floor plane, real cube preview and one atomic commit',async()=>{
  const before=run('JSON.stringify(model)'),history=run('history.length'),n=roots().length;
  canvas().dispatchEvent(new w.KeyboardEvent('keydown',{key:'W',shiftKey:true,bubbles:true,cancelable:true}));assert(WUI.active());
  const a=screen(new T.Vector3(2,0,8)),b=screen(new T.Vector3(6.35,0,8));pointerId++;ptr('pointerdown',a);ptr('pointermove',b);assert(WUI.isEditing());assert.equal(run('JSON.stringify(model)'),before);
  ptr('pointerup',b);await tick();assert(!WUI.active());assert.equal(run('history.length'),history+1);const o=run('model.floors.L0.primitives.at(-1)');wallId=o.id;assert.equal(o.wall,true);assert.equal(o.h,.25);assert.equal(o.w,4.25);assert.equal(o.z,0);assert.equal(o.height,3);assert.equal(roots().length,n+1);assert(root(wallId));assert(get('inspector').querySelector('[data-wall-key=h]'));
  const ob=P.bounds(o),box=new T.Box3().setFromObject(root(wallId));assert(Math.abs(box.min.x-ob.x)<1e-6);assert(Math.abs(box.max.z-(ob.y+ob.h))<1e-6);assert.equal(box.min.y,0);assert.equal(box.max.y,3);
 });
 await check('wall size and yaw gizmos stay quarter-based and upright',async()=>{
  L.selectLayer('primitives',wallId);get('inspector').querySelector('[data-wall-mode=scale]').click();let control=current.scene.children.find(o=>o.isTransformControlsRoot).controls;assert.equal(control.scaleSnap,.25);assert.equal(control.translationSnap,.25);
  let p=gizmoPoint('X'),before=run('history.length');pointerId++;ptr('pointerdown',p);ptr('pointermove',{x:p.x+35,y:p.y-10});ptr('pointerup',{x:p.x+35,y:p.y-10});await tick();let o=run('model.floors.L0.primitives.find(o=>o.id==="'+wallId+'")');assert.equal(run('history.length'),before+1);assert.equal(o.w*4,Math.round(o.w*4));
  canvas().dispatchEvent(new w.KeyboardEvent('keydown',{key:'e',bubbles:true,cancelable:true}));control=current.scene.children.find(o=>o.isTransformControlsRoot).controls;assert.equal(control.mode,'rotate');assert.equal(control.showX,false);assert.equal(control.showZ,false);assert.equal(control.showY,true);assert(get('inspector').querySelector('[data-wall-key=rotation]'));
  p=gizmoPoint('Y');pointerId++;ptr('pointerdown',p);ptr('pointermove',{x:p.x+38,y:p.y-23});ptr('pointerup',{x:p.x+38,y:p.y-23});await tick();o=run('model.floors.L0.primitives.find(o=>o.id==="'+wallId+'")');assert.equal(o.tiltX,0);assert.equal(o.tiltY,0);assert.equal(o.rotation,Math.round(o.rotation));P.validate(o);
 });
 await check('full scene commits retain yaw past 90 degrees and exact quarter translation',async()=>{L.selectFloor('L0');UI.select('L0',wallId);view.setPrimitiveMode('rotate');let start=gizmoPoint('Y');pointerId++;ptr('pointerdown',start);assert(view.primitiveDragging());root(wallId).quaternion.setFromAxisAngle(new T.Vector3(0,1,0),-110*Math.PI/180);ptr('pointerup',start);await tick();assert.equal(run('model.floors.L0.primitives.find(o=>o.id==="'+wallId+'").rotation'),110);UI.edit('L0',wallId,{rotation:0});await tick();UI.select('L0',wallId);view.setPrimitiveMode('translate');const before=run('model.floors.L0.primitives.find(o=>o.id==="'+wallId+'").y');start=gizmoPoint('Z');pointerId++;ptr('pointerdown',start);root(wallId).position.z+=.25;ptr('pointerup',start);await tick();assert(Math.abs(run('model.floors.L0.primitives.find(o=>o.id==="'+wallId+'").y')-before-.25)<1e-6);});
 await check('equivalent yaw representation does not create an edit on an unmoved handle',async()=>{for(const angle of [270,-270,360]){UI.edit('L0',wallId,{rotation:angle});await tick();UI.select('L0',wallId);view.setPrimitiveMode('translate');const before=run('JSON.stringify({model,history})'),p=gizmoPoint('X');pointerId++;ptr('pointerdown',p);assert(view.primitiveDragging());ptr('pointerup',p);await tick();assert.equal(run('JSON.stringify({model,history})'),before);}});
 await check('3D wall selection, geometry and inspector survive a 2D roundtrip',async()=>{
  L.selectLayer('primitives',wallId);const before=run('JSON.stringify(model)');await B.setWorkspaceMode('2d');assert(get('inspector').querySelector('[data-wall-key=h]'));assert.equal(L.references()[0].id,wallId);await B.openThree();await tick();assert(root(wallId));assert.equal(L.references()[0].id,wallId);assert.equal(run('JSON.stringify(model)'),before);
 });
 await check('3D draw interruptions preserve model/history and do not alter floor selection',async()=>{
  L.selectFloor('L0');aim();for(const action of ['escape','pointercancel','blur','floor','mode']){const before=run('JSON.stringify({model,history})');WUI.open();const a=screen(new T.Vector3(10,0,8)),b=screen(new T.Vector3(14,0,8));pointerId++;ptr('pointerdown',a);ptr('pointermove',b);assert(WUI.isEditing());if(action==='escape')canvas().dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true}));else if(action==='blur')w.dispatchEvent(new w.Event('blur'));else if(action==='floor')L.selectFloor('L1');else if(action==='mode')await B.setWorkspaceMode('2d');else ptr('pointercancel',b);assert(!WUI.isEditing());assert.equal(run('JSON.stringify({model,history})'),before);WUI.cancel();if(!B.isThreeMode()){await B.openThree();await tick();}L.selectFloor('L0');aim();}
 });
 console.log('PASS '+count+' actual Three thin-wall interaction checks');
}finally{w.BuildingExports?.disposeThree();t.close();}})().catch(e=>{console.error(e.stack);process.exitCode=1;});
