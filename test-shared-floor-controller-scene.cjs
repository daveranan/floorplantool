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
(async()=>{
 await scenario('sidebar mode permutation matrix',async h=>{
  const baseline=h.snapshot();
  for(const from of ['2d','3d'])for(const to of ['2d','3d'])for(const initial of ['L0','L2'])for(const destination of ['L0','L2']){
   const label=`${from} sidebar ${initial} -> ${to} sidebar ${destination}`;
   await mode(h,from);clickRow(h,initial);await mode(h,to);clickRow(h,destination);
   check(label,()=>assertState(h,[destination],destination,{baseline}));
  }
 });
 await scenario('floor checkbox selection semantics',async h=>{
  const baseline=h.snapshot();for(const currentMode of ['2d','3d']){await mode(h,currentMode);h.checkbox('L0').click();check(currentMode+' plain checkbox',()=>assertState(h,['L0'],'L0',{baseline}));h.shift(h.checkbox('L2'));check(currentMode+' Shift checkbox add',()=>assertState(h,['L0','L2'],undefined,{baseline}));h.checkbox('L0').click();check(currentMode+' checked checkbox plain resets union',()=>assertState(h,['L0'],'L0',{baseline}));h.shift(h.checkbox('L0'));check(currentMode+' Shift checkbox empty set hides active geometry',()=>assertState(h,[],undefined,{baseline}));}
 });
 await scenario('real hit matrix and reverse sidebar selection',async h=>{
  const baseline=h.snapshot();
  for(const from of ['2d','3d'])for(const initial of ['L0','L2'])for(const destination of ['L0','L2'])for(const kind of ['slab','wall','roomLabel','floorLabel']){
   const label=`${from} sidebar ${initial} -> actual ${kind} ${destination}`;
   await mode(h,from);clickRow(h,initial);await mode(h,'3d');
   try{hit(h,destination,kind);check(label,()=>assertState(h,[destination],destination,{baseline}));}
   catch(e){failures.push({name:label,error:e.message});console.error('FAIL '+label+'\n'+e.message)}
   for(const to of ['2d','3d']){await mode(h,to);clickRow(h,initial);check(`actual ${kind} ${destination} -> ${to} sidebar ${initial}`,()=>assertState(h,[initial],initial,{baseline}));}
  }
 });
 await scenario('Shift union in both modes and actual mesh hits',async h=>{
  const baseline=h.snapshot();
  for(const currentMode of ['2d','3d']){
   await mode(h,currentMode);clickRow(h,'L0');clickRow(h,'L2',true);check(`${currentMode} Shift add`,()=>assertState(h,['L0','L2'],undefined,{baseline}));
   await mode(h,currentMode==='2d'?'3d':'2d');check(`${currentMode} Shift survives mode change`,()=>assertState(h,['L0','L2'],undefined,{baseline}));
   clickRow(h,'L2',true);check(`${currentMode} Shift removes floor`,()=>assertState(h,['L0'],undefined,{baseline}));
   clickRow(h,'L0',true);check(`${currentMode} Shift removes final floor`,()=>assertState(h,[],undefined,{baseline}));
   await mode(h,'3d');check(`${currentMode} empty scope survives mode change`,()=>assertState(h,[],undefined,{baseline}));
  }
  for(const kind of ['slab','wall','roomLabel','floorLabel']){
   clickRow(h,'L0');clickRow(h,'L2',true);hit(h,'L2',kind,true);
   check(`Shift viewport ${kind} preserves enabled floors and active floor`,()=>assertState(h,['L0','L2'],'L0',{baseline}));
   check(`Shift viewport ${kind} selects only the room metadata`,()=>assert.deepEqual(h.selected(),kind==='floorLabel'?[]:[{floor:'L2',kind:'rooms',id:'a'}]));
   clickRow(h,'L0');hit(h,'L0',kind,true);
   check(`Shift viewport ${kind} cannot remove the final floor`,()=>assertState(h,['L0'],'L0',{baseline}));
  }
 });
 await scenario('plain selection resets Shift union and eye inspection',async h=>{
  const baseline=h.snapshot();
  for(const target of ['sidebar2d','sidebar3d','slab','wall','roomLabel','floorLabel']){
   await mode(h,'3d');clickRow(h,'L0');clickRow(h,'L2',true);eye(h,'L1');
   check(`eye inspection before ${target} preserves editable set`,()=>{assert.deepEqual(sorted(h.scope()),['L0','L2']);assert(h.L.visible('L1'));});
   if(target.startsWith('sidebar')){await mode(h,target==='sidebar2d'?'2d':'3d');clickRow(h,'L0');}else hit(h,'L0',target);
   check(`plain ${target} resets union and inspected floor`,()=>assertState(h,['L0'],'L0',{baseline}));
  }
 });
 await scenario('camera state and repeated roundtrips cannot mutate selection',async h=>{
  clickRow(h,'L2');clickRow(h,'L0',true);const baseline=h.snapshot(),active=h.run('floorId');
  for(let n=0;n<3;n++){
   const saved=h.view.getViewState();h.view.restoreViewState({...saved,focused:'L1',navigationFloor:'L1',position:[16,28,24],target:[16,4,4]});
   check('passive camera restore retains controller active and scope '+n,()=>{assert.equal(h.run('floorId'),active);assert.deepEqual(sorted(h.scope()),['L0','L2']);assert.equal(h.snapshot(),baseline)});
   await mode(h,'2d');check('2D roundtrip visibility '+n,()=>assertState(h,['L0','L2'],active,{baseline}));
   await mode(h,'3d');check('3D roundtrip visibility '+n,()=>assertState(h,['L0','L2'],active,{baseline}));
  }
 });
 for(const crossFloor of [false,true])await scenario(crossFloor?'cross-floor object selection persistence':'single room object selection persistence',async h=>{
  clickRow(h,'L1');if(crossFloor)clickRow(h,'L0',true);h.L.selectLayer('rooms','a',{},'L1');if(crossFloor)h.L.selectLayer('rooms','a',{shiftKey:true},'L0');
  const baseline=h.snapshot(),refs=h.selected(),scope=h.scope(),active=h.run('floorId'),target=crossFloor?[10,3.5,4]:[16,5.5,4],label=crossFloor?'cross-floor objects':'single room';
  assert.equal(refs.length,crossFloor?2:1);h.key('f');check(label+' initial F frame',()=>close(h.pose().target,target,label));
  for(let n=1;n<=2;n++){
   await mode(h,'2d');check(label+' 2D roundtrip '+n,()=>{assertState(h,scope,active,{baseline});assert.deepEqual(h.selected(),refs,'2D references preserved')});
   await mode(h,'3d');check(label+' 3D roundtrip '+n,()=>{assertState(h,scope,active,{baseline});assert.deepEqual(h.selected(),refs,'3D references preserved')});
   h.key('f');check(label+' retained F frame '+n,()=>close(h.pose().target,target,label));
  }
 });
 await scenario('disabled scope blocks actual 3D authoring gestures',async h=>{
  clickRow(h,'L0');clickRow(h,'L0',true);eye(h,'L2');const baseline=h.snapshot(),active=h.run('floorId');h.aim([40,30,20],[40,8,4],{labels:false,showWalls:false});h.run("setTool('draw')");h.ptr('pointerdown',h.point(38,2,8.001));h.ptr('pointermove',h.point(42,6,8.001));h.ptr('pointerup',h.point(42,6,8.001));check('disabled actual room-drawing gesture cannot enable or modify a floor',()=>{assert.deepEqual(h.scope(),[]);assert.equal(h.run('floorId'),active);assert.equal(h.snapshot(),baseline)});h.run("setTool('stair-route')");h.ptr('pointerdown',h.point(38,2,8.001));h.ptr('pointerup',h.point(38,2,8.001));check('disabled actual route gesture cannot start or mutate a floor',()=>{assert.equal(h.w.KERN_ROUTE_UI.getDraft().length,0);assert.deepEqual(h.scope(),[]);assert.equal(h.snapshot(),baseline)});
 });
 await scenario('lock survives genuine room selection',async h=>{
  clickRow(h,'L0');h.L.toggleObject('rooms','a','locked','L2');const baseline=h.snapshot();
  hit(h,'L2','wall');check('locked room wall still chooses exclusive floor',()=>assertState(h,['L2'],'L2',{baseline}));
  check('locked room remains uneditable after floor activation',()=>{assert.equal(h.L.available('rooms','a','L2'),false);assert.deepEqual(h.selected(),[]);let handles=[];h.current().scene.traverse(o=>{if(o.userData.edge&&meshShown(o))handles.push(o.userData.edge)});assert(!handles.some(x=>x!=='elevate'),'locked room has no room geometry edit handles');});
 });
 const capPlan=plain(model);capPlan.floors.L2={name:'Cap',z:8,rooms:[{id:'cap',name:'Protected concrete cap',type:'solid',x:0,y:0,w:8,h:8,z:8,height:2,sealedConcrete:true,locked:true,derivedFootprint:true,linkedSource:{floor:'L0',room:'a'}}],doors:[],entrances:[]};
 await scenario('linked concrete cap actual geometry',async h=>{
  const baseline=h.snapshot();clickRow(h,'L0');hit(h,'L2','cap');check('actual concrete cap atomically selects exclusive floor',()=>assertState(h,['L2'],'L2',{baseline}));
  hit(h,'L2','cap');check('second cap click selects protected cap details',()=>assert.deepEqual(h.selected(),[{floor:'L2',kind:'rooms',id:'cap'}]));
  check('cap retains source protection',()=>{assert(h.run("model.floors.L2.rooms[0].locked"));assert(h.run("model.floors.L2.rooms[0].derivedFootprint"));let handles=[];h.current().scene.traverse(o=>{if(o.userData.edge&&meshShown(o))handles.push(o.userData.edge)});assert.equal(handles.length,0);});
  hit(h,'L2','cap',true);check('Shift cap toggles only the object and retains its floor',()=>{assertState(h,['L2'],'L2',{baseline});assert.deepEqual(h.selected(),[])});
 },capPlan);
 await scenario('retained object while Shift enabling floor',async h=>{clickRow(h,'L0');h.L.selectLayer('rooms','a',{},'L0');const refs=h.selected();h.key('f');const target=h.pose().target;clickRow(h,'L2',true);h.key('f');check('Shift floor add retains object selection and F target',()=>{assert.deepEqual(h.selected(),refs);close(h.pose().target,target,'retained object target')});await mode(h,'2d');await mode(h,'3d');h.key('f');check('retained object F target survives mode roundtrip after Shift scope change',()=>{assert.deepEqual(h.selected(),refs);close(h.pose().target,target,'restored retained target')});});
 console.log(JSON.stringify({passed:success.length,failed:failures.length,failures},null,2));if(failures.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
