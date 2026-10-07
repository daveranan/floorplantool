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
 B1:{name:'Lower',z:-4,rooms:[{id:'a',name:'Lower A',type:'tech',x:-24,y:0,w:8,h:8}],doors:[],entrances:[]}
}};
async function harness(plan=model){
 const t=boot(),{w,doc,get,run}=t,L=w.KERN_LAYERS,B=w.BuildingExports;let current;
 w.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});
 w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},strokeRect(){},fillText(){},measureText:s=>({width:s.length*20})});
 w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:900,height:650});
 w.HTMLCanvasElement.prototype.setPointerCapture=()=>{};w.HTMLCanvasElement.prototype.hasPointerCapture=()=>false;w.HTMLCanvasElement.prototype.releasePointerCapture=()=>{};
 w.ResizeObserver=class{constructor(fn){this.fn=fn}observe(){this.fn()}disconnect(){}};
 w.__TestRenderer=class{constructor(){this.domElement=doc.createElement('canvas');Object.defineProperties(this.domElement,{clientWidth:{value:900},clientHeight:{value:650}})}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){this.loop=fn;if(fn)fn()}render(scene,camera){scene.updateMatrixWorld(true);current={scene,camera,renderer:this}}dispose(){}forceContextLoss(){}};
 const source=fs.readFileSync(path.join(root,'src/preview3d.js'),'utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(').replace('controls.enableDamping = true;','window.__THREE=THREE;controls.enableDamping = true;');
 vm.runInContext(esbuild.buildSync({stdin:{contents:source,resolveDir:root},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text,t.dom.getInternalVMContext());
 Object.defineProperties(get('threeviewport'),{clientWidth:{value:900},clientHeight:{value:650}});
 w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
 run(`resetTransient(true);model=${JSON.stringify(plan)};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:Object.fromEntries(Object.keys(model.floors).map(id=>[id,true]))};setTool('select');setSelection();history=[];future=[];render();save();`);
 await B.openThree();const view=B.getViewer();assert(view,'3D viewer mounted');
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
 function aim(position=[20,32,26],target=[16,4,4],extras={}){view.restoreViewState({...view.getViewState(),position,target,focused:null,visible:Object.keys(plan.floors),gap:0,labels:false,showCeilings:false,showWalls:false,navigationFloor:'L0',navigationY:0,navigationElevation:0,...extras});current.renderer.loop()}
 function hits(p){const T=w.__THREE;current.scene.updateMatrixWorld(true);current.camera.updateMatrixWorld(true);const ray=new T.Raycaster();ray.setFromCamera(new T.Vector2(p.x/450-1,1-p.y/325),current.camera);const targets=[];current.scene.traverse(o=>{if(o.visible&&o.parent?.visible&&o.userData.level&&(o.userData.boxes||o.userData.shape||o.userData.roomLabel||o.userData.floorLabel))targets.push(o)});return ray.intersectObjects(targets,false)}
 const describe=h=>({kind:h?.object.userData.kind||h?.object.userData.boxes?.[h.instanceId]?.kind,room:h?.object.userData.room||h?.object.userData.boxes?.[h.instanceId]?.room,door:h?.object.userData.door||h?.object.userData.boxes?.[h.instanceId]?.door,level:h?.object.userData.level,roomLabel:!!h?.object.userData.roomLabel,floorLabel:!!h?.object.userData.floorLabel});
 const outlines=()=>{const out=[];current.scene.traverse(o=>{if(o.userData.floorHighlight&&o.visible&&o.parent.visible)out.push(o.userData.floorHighlight)});return out.sort()};
 const row=id=>get('floors').querySelector(`[data-floor="${id}"]`);
 const checkbox=id=>get('floors').querySelector(`[data-floor-select="${id}"]`);
 const shift=node=>node.dispatchEvent(new w.MouseEvent('click',{bubbles:true,cancelable:true,shiftKey:true}));
 return{...t,L,B,view,scope,selected,visible,pose,snapshot,point,ptr,click,key,aim,hits,describe,outlines,row,checkbox,shift,current:()=>current};
}
async function scenario(name,fn,plan){const h=await harness(plan);try{await fn(h)}catch(e){failures.push({name,error:e.stack});console.error('ERROR '+name+'\n'+e.stack)}finally{h.close()}}
(async()=>{
 await scenario('actual slabs',async h=>{const {L,view,run,scope,selected,visible,point,click,aim,hits,describe,key,pose,outlines,checkbox}=h;aim();L.setFloorSelection(['L0']);const before=h.snapshot(),p=point(14,2,4.001);
  assert.equal(describe(hits(p)[0]).kind,'slab','fixture must actually hit the slab, not labels/walls');
  click(p);check('plain actual slab makes L1 the exclusive editable destination',()=>{assert.deepEqual(scope(),['L1']);assert.equal(run('floorId'),'L1');assert(checkbox('L1').checked);assert(!checkbox('L0').checked)});
  check('plain slab keeps every floor visible and selects floor rather than room',()=>{assert.deepEqual(visible(),['B1','L0','L1']);assert.deepEqual(selected(),[])});
  h.ptr('pointerleave',p);check('slab selection keeps a persistent floor highlight after pointer exit',()=>assert.deepEqual(outlines(),['L1']));
  key('f');check('F after actual slab frames entire clicked floor',()=>close(pose().target,[20,5.5,4],'L1 floor center'));
  check('floor navigation never mutates plan or history',()=>assert.equal(h.snapshot(),before));
 });
 await scenario('sidebar frame target',async h=>{const {L,view,scope,run,row,key,pose,outlines}=h;h.aim();L.setFloorSelection(['L0']);L.selectLayer('rooms','a',{},'L0');view.selectRoom('L0','a');
  row('L1').click();check('sidebar plain click selects exclusive destination and leaves other floors visible',()=>{assert.deepEqual(scope(),['L1']);assert.equal(run('floorId'),'L1');assert.deepEqual(h.visible(),['B1','L0','L1'])});key('f');check('sidebar click replaces stale room F target with floor bounds',()=>close(pose().target,[20,5.5,4],'sidebar L1 frame'));
  L.selectLayer('rooms','a',{},'L1');view.selectRoom('L1','a');row('L1').click();key('f');check('same-floor sidebar click replaces stale room frame target',()=>close(pose().target,[20,5.5,4],'same-floor L1 frame'));
  check('sidebar selection renders persistent enabled-floor outline',()=>assert.deepEqual(outlines(),['L1']));
 });
 await scenario('Shift surface union',async h=>{const {L,view,run,scope,point,click,aim,pose,key,outlines}=h;aim();L.setFloorSelection(['L0']);h.row('L0').click();aim();const initial=pose(),active=run('floorId'),p=point(14,2,4.001);assert.equal(h.describe(h.hits(p)[0]).kind,'slab');
  click(p,{shiftKey:true});check('Shift actual slab adds editable floor without navigation',()=>{assert.deepEqual(scope(),['L0','L1']);assert.equal(run('floorId'),active);assert.deepEqual(pose(),initial);assert.deepEqual(h.visible(),['B1','L0','L1'])});
  h.ptr('pointerleave',p);check('both enabled floors retain their highlight',()=>assert.deepEqual(outlines(),['L0','L1']));
  key('f');check('F frames union of Shift-selected floor extents',()=>close(pose().target,[14,3.5,4],'combined L0/L1 bounds'));
  aim();click(point(14,2,4.001),{shiftKey:true});check('Shift actual slab removes membership',()=>assert.deepEqual(scope(),['L0']));
  aim([8,28,20],[4,0,4]);click(point(2,2,.001),{shiftKey:true});check('Shift can remove final floor without leaving highlights',()=>{assert.deepEqual(scope(),[]);assert.deepEqual(outlines(),[])});
 });
 await scenario('sidebar Shift union and keyboard',async h=>{h.aim();h.row('L0').click();const initial=h.pose();h.shift(h.row('L1'));check('Shift sidebar preserves active destination and camera',()=>{assert.equal(h.run('floorId'),'L0');assert.deepEqual(h.scope(),['L0','L1']);assert.deepEqual(h.pose(),initial)});h.key('f');check('F frames sidebar multi-floor union',()=>close(h.pose().target,[14,3.5,4],'sidebar union'));
  h.checkbox('B1').click();h.key('f');check('plain checkbox replaces multi-floor frame target',()=>{assert.deepEqual(h.scope(),['B1']);close(h.pose().target,[-20,-2.301,4],'lower floor frame')});
  h.key('3');h.key('f');check('3 advances one floor preserving visibility and F selection',()=>{assert.deepEqual(h.scope(),['L0']);assert.deepEqual(h.visible(),['B1','L0','L1']);close(h.pose().target,[4,1.699,4],'keyboard ground frame')});
 });
 await scenario('object picks',async h=>{const {L,view,run,point,aim,click,scope,selected}=h;L.activateFloor('L1');L.setFloorSelection(['L0','L1']);
  aim([16,25,18],[16,4,4],{labels:true,showWalls:false,focused:'L1'});let p=point(16,4,4.006);assert(h.describe(h.hits(p)[0]).roomLabel,'fixture must hit room text plane');click(p);check('room text remains object selection and preserves multi-floor editing',()=>{assert.deepEqual(scope(),['L0','L1']);assert.deepEqual(selected(),[{floor:'L1',kind:'rooms',id:'a'}])});
  view.selectRoom(null,null);L.setReferences([]);aim([5,9,4],[12,5.6,4],{showWalls:true,cutaway:false});p=point(12,4,5.6);let hit=h.describe(h.hits(p)[0]);assert.equal(hit.door,'window','fixture must raycast glass identity: '+JSON.stringify(hit));click(p);check('window glass remains a window object pick',()=>{assert.deepEqual(scope(),['L0','L1']);assert.deepEqual(selected(),[{floor:'L1',kind:'doors',id:'window'}])});
  view.selectRoom(null,null);L.setReferences([]);aim([17,5.5,4],[20,4.03,4],{showWalls:true,cutaway:false});p=point(20,4,4.03);hit=h.describe(h.hits(p)[0]);assert.equal(hit.door,'door','fixture must raycast opening marker: '+JSON.stringify(hit));click(p);check('door marker remains a door object pick',()=>{assert.deepEqual(scope(),['L0','L1']);assert.deepEqual(selected(),[{floor:'L1',kind:'doors',id:'door'}])});
  view.selectRoom(null,null);L.setReferences([]);L.setFloorSelection([]);aim([5,9,4],[12,5.6,4],{showWalls:true,cutaway:false});click(point(12,4,5.6));check('disabled window object cannot enable editing or become selected',()=>{assert.deepEqual(scope(),[]);assert.deepEqual(selected(),[])});
 });
 await scenario('disabled authoring',async h=>{const {L,view,run,aim,point,ptr}=h;aim();L.setFloorSelection([]);const before=h.snapshot();run("setTool('draw')");ptr('pointerdown',point(14,1,4.001));ptr('pointermove',point(18,6,4.001));ptr('pointerup',point(18,6,4.001));check('disabled 3D drawing cannot enable or mutate floor',()=>{assert.deepEqual(h.scope(),[]);assert.equal(h.snapshot(),before)});
  run("setTool('stair-route')");ptr('pointerdown',point(14,1,4.001));ptr('pointerup',point(14,1,4.001));check('disabled route start remains blocked',()=>{assert.equal(h.w.KERN_ROUTE_UI.getDraft().length,0);assert.deepEqual(h.scope(),[]);assert.equal(h.snapshot(),before)});
 });
 const capPlan=plain(model);capPlan.floors.L2={name:'Cap',z:8,rooms:[{id:'cap',name:'Protected concrete cap',type:'solid',x:0,y:0,w:8,h:8,z:8,height:2,sealedConcrete:true,locked:true,derivedFootprint:true,linkedSource:{floor:'L0',room:'a'}}],doors:[],entrances:[]};
 await scenario('concrete cap object',async h=>{h.L.setFloorSelection(['L0','L2']);h.aim([4,24,14],[4,10,4],{showWalls:true,cutaway:false});const p=h.point(4,4,10),hit=h.describe(h.hits(p)[0]);assert.equal(hit.kind,'solid','fixture must hit concrete solid: '+JSON.stringify(hit));h.click(p);check('concrete cap mesh remains a protected object pick',()=>{assert.deepEqual(h.scope(),['L0','L2']);assert.deepEqual(h.selected(),[{floor:'L2',kind:'rooms',id:'cap'}]);assert(h.get('makecapindependent'));let handles=[];h.current().scene.traverse(o=>{if(o.userData.edge)handles.push(o)});assert.equal(handles.length,0)});},capPlan);
 await scenario('inactive room label floor navigation',async h=>{h.aim([16,25,18],[16,4,4],{labels:true,showWalls:false});h.L.setFloorSelection([]);const p=h.point(16,4,4.006);assert(h.describe(h.hits(p)[0]).roomLabel);h.click(p);check('inactive room label plane selects floor despite transparent text area',()=>{assert.deepEqual(h.scope(),['L1']);assert.deepEqual(h.selected(),[]);assert.equal(h.run('floorId'),'L1')});h.key('f');check('inactive room label selection frames full floor',()=>close(h.pose().target,[20,5.5,4],'room-label floor target'));h.aim([16,25,18],[16,4,4],{labels:true,showWalls:false});h.click(h.point(16,4,4.006),{shiftKey:true});check('Shift active room label toggles floor scope',()=>assert.deepEqual(h.scope(),[]));});
 console.log(JSON.stringify({passed:success.length,failed:failures.length,failures},null,2));if(failures.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
