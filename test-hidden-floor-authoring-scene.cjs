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
async function scenario(name,fn,plan){const h=await harness(plan);try{await fn(h)}catch(e){failures.push({name,error:e.stack});console.error('ERROR '+name+'\n'+e.stack)}finally{h.close()}}

const floors=['B1','L0','L1','L2'];
const xFor={B1:-24,L0:0,L1:12,L2:36};
const sorted=x=>[...x].sort();
const meshShown=o=>{for(let n=o;n;n=n.parent)if(!n.visible)return false;return true};
function assertState(h,ids,active,{mode=h.B.isThreeMode()?'3d':'2d',baseline}={}){
 const expected=sorted(ids),actual=sorted(h.scope());
 assert.deepEqual(actual,expected,'controller editing set');
 const stored=plain(h.run('currentBuilding().view.layers.visible'));
 assert.deepEqual(sorted(Object.keys(h.plan.floors).filter(id=>stored[id]===true)),expected,'controller visibility set');
 assert.deepEqual(sorted(Object.keys(h.plan.floors).filter(id=>h.L.visible(id))),expected,'controller visible()');
 for(const id of Object.keys(h.plan.floors))assert.equal(h.checkbox(id).checked,ids.includes(id),'checkbox '+id);
 if(active!==undefined)assert.equal(h.run('floorId'),active,'controller active floor');
 if(mode==='3d'){
  const groups=h.current().scene.children.filter(o=>o.isGroup&&o.userData.id&&Object.hasOwn(h.plan.floors,o.userData.id));
  assert.equal(groups.length,Object.keys(h.plan.floors).length,'actual floor groups found');
  assert.deepEqual(sorted(groups.filter(o=>o.visible).map(o=>o.userData.id)),expected,'actual group visibility');
  const meshFloors=new Set();h.current().scene.traverse(o=>{if(o.isMesh&&o.userData.level&&(o.userData.boxes||o.userData.shape)&&meshShown(o))meshFloors.add(o.userData.level)});
  assert.deepEqual(sorted(meshFloors),expected,'actual rendered geometry visibility');
  assert.deepEqual(h.visible(),expected,'renderer visible ids');
  if(active!==undefined)assert.equal(h.view.getFocusedFloor(),active,'renderer active floor');
 }else{
  const ghosts=sorted([...h.get('plan').querySelectorAll('[data-visible-floor]')].map(n=>n.dataset.visibleFloor));
  assert.deepEqual(ghosts,expected.filter(id=>id!==h.run('floorId')),'2D visible floor ghosts');
  if(!ids.includes(h.run('floorId')))assert.equal(h.get('plan').querySelectorAll('[data-room],[data-door],[data-extra]').length,0,'hidden active floor has no actual 2D geometry');
 }
 if(baseline!==undefined)assert.equal(h.snapshot(),baseline,'selection must not mutate plan or undo/redo history');
}
async function mode(h,which){if(which==='3d'){await h.B.openThree();h.refresh();}else await h.B.setWorkspaceMode('2d');}
function clickRow(h,id,shift=false){h.row(id).dispatchEvent(new h.w.MouseEvent('click',{bubbles:true,cancelable:true,shiftKey:shift}));if(h.B.isThreeMode())h.current().renderer.loop();}
function eye(h,id){const node=h.get('floors').querySelector(`[data-floor-visible="${id}"]`);assert(node&&!node.disabled,'eye control available');node.click();if(h.B.isThreeMode())h.current().renderer.loop();}
function prepareHit(h,id,kind){
 if(!h.L.visible(id))eye(h,id);
 const x=xFor[id],z=h.plan.floors[id].z;
 if(kind==='slab'){h.aim([x+4,z+24,18],[x+4,z,4],{labels:false,showWalls:false,cutaway:false});return h.point(x+2,2,z+.001);}
 if(kind==='wall'){h.aim([x-10,z+7,4],[x,z+1.7,4],{labels:false,showWalls:true,cutaway:false});return h.point(x,4,z+1.7);}
 if(kind==='roomLabel'){h.aim([x+4,z+24,18],[x+4,z,4],{labels:true,showWalls:false,cutaway:false});return h.point(x+4,4,z+.006);}
 if(kind==='cap'){h.aim([4,24,14],[4,10,4],{labels:false,showWalls:true,cutaway:false});return h.point(4,4,10);}
 if(kind==='floorLabel'){
  h.aim([20,32,26],[12,4,4],{labels:true,showWalls:false,cutaway:false});
  let label;h.current().scene.traverse(o=>{if(o.userData.floorLabel&&o.userData.level===id)label=o});assert(label,'floor label exists');
  const pos=label.getWorldPosition(new h.w.__THREE.Vector3());h.aim([pos.x+4,pos.y+15,pos.z+20],[pos.x,pos.y,pos.z],{labels:true,showWalls:false,cutaway:false});
  assert(meshShown(label),'floor label fixture is visible');return h.point(pos.x,pos.z,pos.y);
 }
 throw Error('Unknown hit kind '+kind);
}
function hit(h,id,kind,shift=false){
 const p=prepareHit(h,id,kind),first=h.describe(h.hits(p)[0]);
 assert.equal(first.level,id,'actual ray must hit intended floor: '+JSON.stringify(first));
 if(kind==='roomLabel'||kind==='floorLabel')assert(first[kind],'actual ray must hit '+kind+': '+JSON.stringify(first));
 else assert.equal(first.kind,kind==='cap'?'solid':kind,'actual ray hit type');
 h.click(p,{shiftKey:shift});return first;
}
function pointer2d(h,type,x,y){const e=new h.w.MouseEvent(type,{bubbles:true,cancelable:true,button:0,clientX:x,clientY:y});Object.defineProperty(e,'pointerId',{value:71});h.get('plan').dispatchEvent(e);}
function key2d(h,key,more={}){h.doc.body.dispatchEvent(new h.w.KeyboardEvent('keydown',{key,bubbles:true,cancelable:true,...more}));}
(async()=>{
 await scenario('hidden selected-floor authoring guard',async h=>{clickRow(h,'L0');eye(h,'L0');const baseline=h.snapshot();h.aim([4,24,18],[4,0,4],{labels:false,showWalls:false});h.run("setTool('draw')");h.ptr('pointerdown',h.point(1,1,.001));h.ptr('pointermove',h.point(5,5,.001));h.ptr('pointerup',h.point(5,5,.001));check('hidden selected floor cannot receive unseen 3D room creation',()=>assert.equal(h.snapshot(),baseline));});
 await scenario('hidden selected-floor 2D draw and paste guards',async h=>{
  await mode(h,'2d');if(!('onpointerdown' in h.w.SVGElement.prototype))for(const type of ['pointerdown','pointermove','pointerup'])h.get('plan').addEventListener(type,e=>h.get('plan')['on'+type]?.(e));
  clickRow(h,'L0');h.run("setTool('draw')");pointer2d(h,'pointerdown',40,40);pointer2d(h,'pointermove',46,46);pointer2d(h,'pointerup',46,46);
  check('2D fixture control creates room through actual pointer dispatch',()=>{assert.equal(h.run('model.floors.L0.rooms.length'),2);assert.equal(h.run('history.length'),1)});
  h.run("undo();resetTransient(true);setTool('draw')");eye(h,'L0');let baseline=h.snapshot();pointer2d(h,'pointerdown',40,40);pointer2d(h,'pointermove',46,46);pointer2d(h,'pointerup',46,46);
  check('hidden selected floor blocks actual 2D draw and history mutations',()=>{assert.equal(h.snapshot(),baseline);assert(h.L.editable('L0'));assert(!h.L.visible('L0'))});
  clickRow(h,'L0');h.L.selectLayer('rooms','a',{},'L0');key2d(h,'c',{ctrlKey:true});const stalePaste=h.get('pasteselection');assert(stalePaste,'copied room exposes paste UI');eye(h,'L0');baseline=h.snapshot();key2d(h,'v',{ctrlKey:true});
  check('hidden selected floor blocks keyboard paste',()=>assert.equal(h.snapshot(),baseline));stalePaste.click();h.run("KERN_OBJECT_UI.clipboard('v')");
  check('hidden selected floor blocks stale paste UI and clipboard entry',()=>assert.equal(h.snapshot(),baseline));
 });
 console.log(JSON.stringify({passed:success.length,failed:failures.length,failures},null,2));if(failures.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
