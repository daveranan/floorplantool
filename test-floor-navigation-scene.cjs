// Production integration: real Three.js raycasting and callbacks with only WebGL mocked.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const esbuild=require('esbuild'),{boot}=require('./test-production-support.cjs'),root=__dirname;
(async()=>{
 const t=boot(),{w,doc,get,run}=t,L=w.KERN_LAYERS,B=w.BuildingExports;let current;
 const plain=x=>JSON.parse(JSON.stringify(x)),scope=()=>plain(run('currentBuilding().view.layers.editFloors'));
 const settle=()=>new Promise(r=>setTimeout(r,0));
 w.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});
 w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},strokeRect(){},fillText(){},measureText:s=>({width:s.length*20})});
 w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:900,height:650});
 w.HTMLCanvasElement.prototype.setPointerCapture=()=>{};w.HTMLCanvasElement.prototype.hasPointerCapture=()=>false;w.HTMLCanvasElement.prototype.releasePointerCapture=()=>{};
 w.ResizeObserver=class{constructor(fn){this.fn=fn}observe(){this.fn()}disconnect(){}};
 w.__TestRenderer=class{constructor(){this.domElement=doc.createElement('canvas');Object.defineProperties(this.domElement,{clientWidth:{value:900},clientHeight:{value:650}})}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){this.loop=fn;if(fn)fn()}render(scene,camera){scene.updateMatrixWorld(true);current={scene,camera,renderer:this}}dispose(){}forceContextLoss(){}};
 const source=fs.readFileSync('src/preview3d.js','utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(');
 vm.runInContext(esbuild.buildSync({stdin:{contents:source,resolveDir:root},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text,t.dom.getInternalVMContext());
 Object.defineProperties(get('threeviewport'),{clientWidth:{value:900},clientHeight:{value:650}});
 w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
 run(`resetTransient(true);model={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,rooms:[{id:'a',name:'A',type:'tech',x:0,y:0,w:8,h:8}],doors:[],entrances:[]},L1:{name:'Upper',z:4,rooms:[{id:'a',name:'Upper',type:'tech',x:12,y:0,w:8,h:8}],doors:[],entrances:[]},B1:{name:'Lower',z:-4,rooms:[{id:'a',name:'Below',type:'tech',x:24,y:0,w:8,h:8}],doors:[],entrances:[]}}};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true,L1:true,B1:true}};setTool('select');setSelection();history=[];future=[];render();save();`);
 const both=['L0','L1'],bothRefs=both.map(floor=>({floor,kind:'rooms',id:'a'}));
 try{
  L.setFloorSelection(both);L.setReferences(bothRefs);await B.openThree();assert.deepEqual(scope(),both,'initial mount keeps multi-edit');assert.equal(L.references().length,2,'initial mount keeps cross-floor selection');
  let view=B.getViewer();assert(view,'3D mounted');view.activateFloor('L1');assert.deepEqual(scope(),['L1'],'explicit 3D activation replaces scope');assert.equal(L.references().length,0,'explicit 3D activation clears stale references');
  L.setFloorSelection(both);view.activateFloor('L1');assert.deepEqual(scope(),['L1'],'explicit same-floor 3D activation replaces scope');
  L.setFloorSelection(both);view.showAll();L.setReferences(bothRefs);view.activateFloor('L0',{preserveEditing:true});L.setVisible('L0',false);assert.deepEqual(scope(),both,'eye with focused-floor fallback preserves multi-edit');assert(!L.references().some(r=>r.floor==='L0'),'hidden floor selection removed');
  L.setFloorSelection([]);view.showAll();assert.deepEqual(scope(),[],'show-all keeps empty scope');view.setFloor('L1',true);assert.deepEqual(scope(),[],'visibility autofocusing keeps empty scope');view.restoreViewState(view.getViewState());assert.deepEqual(scope(),[],'restore keeps empty scope');
  await B.setWorkspaceMode('2d');await B.openThree();assert.deepEqual(scope(),[],'mode switch keeps empty scope');
  view=B.getViewer();view.showAll();view.activateFloor('L0',{preserveEditing:true});L.setFloorSelection(both);L.setReferences(bothRefs);for(let i=0;i<3;i++){await B.setWorkspaceMode('2d');await B.openThree();assert.deepEqual(scope(),both,'mode switch keeps multi-edit');assert.equal(L.references().length,2,'mode switch keeps cross-floor references');}
  run(`model.floors.L1.rooms[0].w=9;render()`);await settle();view=B.getViewer();assert.deepEqual(scope(),both,'geometry remount keeps multi-edit');assert.equal(L.references().length,2,'geometry remount keeps refs');
  view.isolate('L1');assert.deepEqual(scope(),['L1'],'isolate navigates exclusively');L.setFloorSelection(both);view.isolate('L1');assert.deepEqual(scope(),['L1'],'same-floor isolate navigates exclusively');
  L.setFloorSelection([]);view.adjacentFloor(-1);assert.deepEqual(scope(),['L0'],'3D adjacent navigation restores singleton from empty');
  // A floor-surface click is explicit navigation; authoring still honors empty scope.
  view.showAll();L.setFloorSelection([]);view.restoreViewState({...view.getViewState(),position:[16,24,23],target:[4,0,4],focused:null,visible:['L0','L1','B1'],navigationFloor:'L0',navigationY:0,gap:0});current.renderer.loop();
  const canvas=get('threeviewport').querySelector('canvas');
  function point(x,y,z){current.scene.updateMatrixWorld(true);current.camera.updateMatrixWorld(true);const p=current.camera.position.clone().set(x,z,y).project(current.camera);return{x:(p.x+1)*450,y:(1-p.y)*325};}
  function pointer(type,p,extra={}){const e=new w.Event(type,{bubbles:true,cancelable:true});Object.assign(e,{clientX:p.x,clientY:p.y,pageX:p.x,pageY:p.y,pointerId:9,pointerType:'mouse',button:0,buttons:type==='pointerdown'?1:0,...extra});canvas.dispatchEvent(e);}
  let picked=0,began=0,routePoints=0;const oldSelect=w.KERN_EXPLORER.selectRoom,oldBegin=w.KERN_AUTHORING_3D.begin,oldAddPoint=w.KERN_ROUTE_UI.addPoint;
  w.KERN_EXPLORER.selectRoom=(...args)=>{picked++;return oldSelect(...args)};w.KERN_AUTHORING_3D.begin=(...args)=>{began++;return oldBegin(...args)};w.KERN_ROUTE_UI.addPoint=(...args)=>{routePoints++;return oldAddPoint(...args)};
  run(`setTool('select')`);const center=point(4,4,.01);pointer('pointerdown',center);pointer('pointerup',center);assert.equal(picked,0,'overview slab/label click selects its floor');assert.deepEqual(scope(),['L0'],'floor surface click enables only its floor');assert.equal(L.references().length,0,'floor selection does not select a room');L.setFloorSelection([]);
  const beforeDraw=run('JSON.stringify({model,history,future})');run(`setTool('draw')`);pointer('pointerdown',point(2,2,.01));pointer('pointermove',point(6,6,.01));pointer('pointerup',point(6,6,.01));assert(began>0,'raycast reaches authoring begin');assert.deepEqual(scope(),[],'draw click cannot enable editing');assert.equal(run('JSON.stringify({model,history,future})'),beforeDraw,'disabled drawing cannot mutate plan/history');
  run(`setTool('stair-route')`);pointer('pointerdown',point(2,2,.01));pointer('pointerup',point(2,2,.01));assert(routePoints>0,'raycast reaches route authoring');assert.equal(w.KERN_ROUTE_UI.getDraft().length,0,'disabled route cannot start');assert.deepEqual(scope(),[]);assert.equal(run('JSON.stringify({model,history,future})'),beforeDraw);
  run(`setTool('select')`);w.KERN_EXPLORER.selectRoom=oldSelect;w.KERN_AUTHORING_3D.begin=oldBegin;w.KERN_ROUTE_UI.addPoint=oldAddPoint;
  // A real Shift-click on a 3D floor label toggles membership without navigation.
  L.setFloorSelection(both);view.restoreViewState({...view.getViewState(),position:[32,32,40],target:[8,0,4],focused:null,visible:['L0','L1','B1'],gap:6});current.renderer.loop();
  const label=current.scene.children.flatMap(g=>g.children).find(s=>s.userData.floorLabel&&s.visible&&s.parent.visible);assert(label,'a floor label is visible for raycast');const fid=label.userData.level,world=label.getWorldPosition(current.camera.position.clone()),labelPoint=point(world.x,world.z,world.y),activeBefore=run('floorId'),focusedBefore=view.getFocusedFloor(),expected=both.includes(fid)?both.filter(f=>f!==fid):[...both,fid];
  pointer('pointerdown',labelPoint,{shiftKey:true});pointer('pointerup',labelPoint,{shiftKey:true});assert.deepEqual(scope(),expected,'Shift floor label toggles membership');assert.equal(run('floorId'),activeBefore,'Shift floor label does not navigate editor');assert.equal(view.getFocusedFloor(),focusedBefore,'Shift floor label does not navigate camera');
  pointer('pointerdown',labelPoint);pointer('pointerup',labelPoint);assert.deepEqual(scope(),[fid],'ordinary floor-label click selects exclusive destination');assert.equal(run('floorId'),fid);
  console.log('PASS production real-renderer floor navigation: same/different destinations, passive eyes/restore/modes/remount, scoped refs, disabled pointer selection/drawing/routes, and Shift/ordinary floor-label clicks.');
 }finally{t.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
