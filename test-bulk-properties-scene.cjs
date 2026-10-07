/* Portable production integration regression: pass the checkout root as argv[2].
 * Loads the production script order and uses actual Three.js meshes/raycasting.
 * Only WebGL drawing and browser canvas/resize APIs are mocked. No GPU claim. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),{createRequire}=require('node:module');
const root=path.resolve(process.argv[2]||process.cwd());process.chdir(root);
const req=createRequire(path.join(root,'package.json')),esbuild=req('esbuild'),{boot}=req('./test-production-support.cjs');
const plain=x=>JSON.parse(JSON.stringify(x)),failures=[],success=[];
const close=(a,b,msg)=>assert.equal(a.length,b.length,msg)||assert(a.every((x,i)=>Math.abs(x-b[i])<1e-5),`${msg}: ${JSON.stringify(a)} != ${JSON.stringify(b)}`);
const check=(name,fn)=>{try{fn();success.push(name);console.log('PASS '+name)}catch(e){failures.push({name,error:e.message});console.error('FAIL '+name+'\n'+e.message)}};
const model={version:1,units:'metres',floors:{
 L0:{name:'Ground',z:0,rooms:[{id:'a',name:'Ground A',type:'tech',x:0,y:0,w:8,h:8}],doors:[],entrances:[]},
 L1:{name:'Upper',z:4,rooms:[{id:'a',name:'Upper A',type:'tech',x:12,y:0,w:8,h:8},{id:'b',name:'Upper B',type:'tech',x:20,y:0,w:8,h:8}],doors:[{id:'door',a:'a',b:'b',kind:'door',width:1,offset:.5},{id:'window',a:'a',b:'outside',kind:'window',side:'w',width:2,offset:.5,sill:.9,height:1.4}],entrances:[]},
 L2:{name:'Top',z:8,rooms:[{id:'a',name:'Top A',type:'tech',x:36,y:0,w:8,h:8}],doors:[],entrances:[]},
 B1:{name:'Lower',z:-4,rooms:[{id:'a',name:'Lower A',type:'tech',x:-24,y:0,w:8,h:8}],doors:[],entrances:[]}
}};
const rendererSource=fs.readFileSync(path.join(root,'src/preview3d.js'),'utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(').replace('controls.enableDamping = true;','window.__THREE=THREE;controls.enableDamping = true;');
const rendererBundle=esbuild.buildSync({stdin:{contents:rendererSource,resolveDir:root},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text;
async function harness(plan=model){
 const t=boot(),{w,doc,get,run}=t,L=w.KERN_LAYERS,B=w.BuildingExports;let current;
 w.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});
 w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},strokeRect(){},fillText(){},measureText:s=>({width:s.length*20})});
 w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:900,height:650});
 w.HTMLCanvasElement.prototype.setPointerCapture=()=>{};w.HTMLCanvasElement.prototype.hasPointerCapture=()=>false;w.HTMLCanvasElement.prototype.releasePointerCapture=()=>{};
 w.ResizeObserver=class{constructor(fn){this.fn=fn}observe(){this.fn()}disconnect(){}};
 w.__TestRenderer=class{constructor(){this.domElement=doc.createElement('canvas');Object.defineProperties(this.domElement,{clientWidth:{value:900},clientHeight:{value:650}})}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){this.loop=fn;if(fn)fn()}render(scene,camera){scene.updateMatrixWorld(true);current={scene,camera,renderer:this}}dispose(){}forceContextLoss(){}};
 vm.runInContext(rendererBundle,t.dom.getInternalVMContext());
 Object.defineProperties(get('threeviewport'),{clientWidth:{value:900},clientHeight:{value:650}});
 w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
 run(`resetTransient(true);model=${JSON.stringify(plan)};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:Object.fromEntries(Object.keys(model.floors).map(id=>[id,true]))};setTool('select');setSelection();history=[];future=[];render();save();`);
 await B.openThree();let view=B.getViewer();assert(view,'3D viewer mounted');
 let pointerId=100;
 const scope=()=>plain(run('currentBuilding().view.layers.editFloors'));
 const selected=()=>plain(L.references());
 const visible=()=>plain(view.getViewState().visible).sort();
 const pose=()=>plain({position:view.getViewState().position,target:view.getViewState().target});
 const snapshot=()=>run('JSON.stringify({model,history,future})');
 const canvas=()=>get('threeviewport').querySelector('canvas');
 const point=(x,y,z)=>{current.scene.updateMatrixWorld(true);current.camera.updateMatrixWorld(true);const p=new w.__THREE.Vector3(x,z,y).project(current.camera);return{x:(p.x+1)*450,y:(1-p.y)*325}};
 function ptr(type,p,extra={}){const e=new w.Event(type,{bubbles:true,cancelable:true});Object.assign(e,{clientX:p.x,clientY:p.y,pageX:p.x,pageY:p.y,pointerId,pointerType:'mouse',button:0,buttons:type==='pointerup'?0:1,...extra});canvas().dispatchEvent(e)}
 function click(p,extra={}){pointerId++;ptr('pointerdown',p,extra);ptr('pointerup',p,extra);current.renderer.loop()}
 function key(key,extra={}){canvas().dispatchEvent(new w.KeyboardEvent('keydown',{key,bubbles:true,cancelable:true,...extra}));current.renderer.loop()}
 function aim(position=[20,32,26],target=[16,4,4],extras={}){view.restoreViewState({...view.getViewState(),position,target,gap:0,labels:false,showCeilings:false,showWalls:false,...extras});current.renderer.loop()}
 function hits(p){const T=w.__THREE;current.scene.updateMatrixWorld(true);current.camera.updateMatrixWorld(true);const ray=new T.Raycaster();ray.setFromCamera(new T.Vector2(p.x/450-1,1-p.y/325),current.camera);const targets=[];current.scene.traverse(o=>{if(o.visible&&o.parent?.visible&&o.userData.level&&(o.userData.boxes||o.userData.shape||o.userData.roomLabel||o.userData.floorLabel))targets.push(o)});return ray.intersectObjects(targets,false)}
 const describe=h=>({kind:h?.object.userData.kind||h?.object.userData.boxes?.[h.instanceId]?.kind,room:h?.object.userData.room||h?.object.userData.boxes?.[h.instanceId]?.room,door:h?.object.userData.door||h?.object.userData.boxes?.[h.instanceId]?.door,level:h?.object.userData.level,roomLabel:!!h?.object.userData.roomLabel,floorLabel:!!h?.object.userData.floorLabel});
 const outlines=()=>{const out=[];current.scene.traverse(o=>{if(o.userData.floorHighlight&&o.visible&&o.parent.visible)out.push(o.userData.floorHighlight)});return out.sort()};
 const row=id=>get('floors').querySelector(`[data-floor="${id}"]`);
 const checkbox=id=>get('floors').querySelector(`[data-floor-select="${id}"]`);
 const shift=node=>node.dispatchEvent(new w.MouseEvent('click',{bubbles:true,cancelable:true,shiftKey:true}));
 return{...t,plan,L,B,get view(){return view},refresh(){view=B.getViewer();return view},scope,selected,visible,pose,snapshot,point,ptr,click,key,aim,hits,describe,outlines,row,checkbox,shift,current:()=>current};
}

(async()=>{const h=await harness(),{w,run,get,L,B}=h;const tick=()=>new Promise(resolve=>setTimeout(resolve,20));const field=id=>get('inspector').querySelector('[data-bulk-property="'+id+'"]');
try{
 L.setFloorSelection(['L0','L1']);L.setReferences([{floor:'L0',kind:'rooms',id:'a'},{floor:'L1',kind:'rooms',id:'a'},{floor:'L1',kind:'rooms',id:'b'}]);
 run('model.floors.L1.rooms[1].z=3.5;render();save()');await tick();h.refresh();
 assert(!get('inspector').hidden,'Bulk inspector is visible after 3D multi-selection');assert(!get('inspector').querySelector('.commonfields')); let nativeRemovals=0,nativeErrors=0,removing=false;const root=get('inspector'),html=Object.getOwnPropertyDescriptor(w.Element.prototype,'innerHTML');Object.defineProperty(root,'innerHTML',{configurable:true,get(){return html.get.call(this)},set(value){const focused=w.document.activeElement,child=this.firstChild;if(!removing&&focused?.matches('[data-bulk-property]')&&this.contains(focused)){removing=true;nativeRemovals++;try{focused.dispatchEvent(new w.Event('change',{bubbles:true}));}finally{removing=false;}if(child&&child.parentNode!==this){nativeErrors++;throw new w.DOMException('Focused child moved during blur','NotFoundError');}}html.set.call(this,value)}});
const before=h.snapshot(),scope=h.scope(),selection=h.selected();assert.equal(field('rooms.offset').value,'');assert.equal(field('rooms.offset').placeholder,'—');
 field('rooms.offset').focus();field('rooms.offset').value='-.75';field('rooms.offset').dispatchEvent(new w.Event('change',{bubbles:true}));await tick();h.refresh();
 assert.equal(run('model.floors.L0.rooms[0].z'),-.75);assert.equal(run('model.floors.L1.rooms[0].z'),3.25);assert.equal(run('model.floors.L1.rooms[1].z'),3.25);assert.equal(run('history.length'),1);assert.equal(nativeErrors,0);assert(nativeRemovals>0);assert.deepEqual(h.scope(),scope);assert.deepEqual(h.selected(),selection);assert.equal(field('rooms.offset').value,'-0.75');assert(!get('contextroomz'));assert(!get('roomclearheight'));
 // The actual rebuilt Three slab instance follows the bulk-elevated room.
 const T=w.__THREE,mesh=[];h.current().scene.traverse(o=>{if(o.userData.level==='L1'&&o.userData.boxes)for(const [i,b]of o.userData.boxes.entries())if(b.room==='a'&&b.kind==='slab')mesh.push({o,i,b});});assert(mesh.length,'Elevated slab mesh exists');
 const part=mesh[0],matrix=new T.Matrix4();part.o.getMatrixAt(part.i,matrix);part.o.updateMatrixWorld(true);part.o.geometry.computeBoundingBox();const bounds=part.o.geometry.boundingBox.clone().applyMatrix4(matrix).applyMatrix4(part.o.matrixWorld);assert(Math.abs(bounds.max.y-3.25)<.001,'Actual mesh top uses shared offset');
 await B.setWorkspaceMode('2d');assert.deepEqual(h.selected(),selection);assert.deepEqual(h.scope(),scope);assert.equal(field('rooms.offset').value,'-0.75');await B.openThree();await tick();h.refresh();assert.deepEqual(h.selected(),selection);assert.deepEqual(h.scope(),scope);assert.equal(field('rooms.offset').value,'-0.75');assert(!get('inspector').hidden);
 run('undo()');await tick();assert.equal(run('model.floors.L1.rooms[1].z'),3.5);assert.equal(run('model.floors.L0.rooms[0].z'),undefined);assert.deepEqual(h.selected(),selection);run('redo()');await tick();assert.equal(run('model.floors.L1.rooms[0].z'),3.25);
 console.log('PASS real Three slab instances after cross-floor room bulk offsets, preserved floor/object selection, mixed/common inspector, single Undo/Redo, and repeated 2D/3D mode roundtrip (mock GPU)');
}finally{h.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
