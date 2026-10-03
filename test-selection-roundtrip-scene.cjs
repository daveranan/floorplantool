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
 function aim(position=[20,32,26],target=[16,4,4],extras={}){view.restoreViewState({...view.getViewState(),position,target,focused:null,visible:Object.keys(plan.floors),gap:0,labels:false,showCeilings:false,showWalls:false,navigationFloor:'L0',navigationY:0,navigationElevation:0,...extras});current.renderer.loop()}
 function hits(p){const T=w.__THREE;current.scene.updateMatrixWorld(true);current.camera.updateMatrixWorld(true);const ray=new T.Raycaster();ray.setFromCamera(new T.Vector2(p.x/450-1,1-p.y/325),current.camera);const targets=[];current.scene.traverse(o=>{if(o.visible&&o.parent?.visible&&o.userData.level&&(o.userData.boxes||o.userData.shape||o.userData.roomLabel||o.userData.floorLabel))targets.push(o)});return ray.intersectObjects(targets,false)}
 const describe=h=>({kind:h?.object.userData.kind||h?.object.userData.boxes?.[h.instanceId]?.kind,room:h?.object.userData.room||h?.object.userData.boxes?.[h.instanceId]?.room,door:h?.object.userData.door||h?.object.userData.boxes?.[h.instanceId]?.door,level:h?.object.userData.level,roomLabel:!!h?.object.userData.roomLabel,floorLabel:!!h?.object.userData.floorLabel});
 const outlines=()=>{const out=[];current.scene.traverse(o=>{if(o.userData.floorHighlight&&o.visible&&o.parent.visible)out.push(o.userData.floorHighlight)});return out.sort()};
 const row=id=>get('floors').querySelector(`[data-floor="${id}"]`);
 const checkbox=id=>get('floors').querySelector(`[data-floor-select="${id}"]`);
 const shift=node=>node.dispatchEvent(new w.MouseEvent('click',{bubbles:true,cancelable:true,shiftKey:true}));
 return{...t,L,B,get view(){return view},refresh(){view=B.getViewer();return view},scope,selected,visible,pose,snapshot,point,ptr,click,key,aim,hits,describe,outlines,row,checkbox,shift,current:()=>current};
}
async function scenario(name,fn,plan){const h=await harness(plan);try{await fn(h)}catch(e){failures.push({name,error:e.stack});console.error('ERROR '+name+'\n'+e.stack)}finally{h.close()}}

const settle=()=>new Promise(resolve=>setTimeout(resolve,0));
async function roundtrip(h,label,{repeats=3,expectedTarget}={}){
 const before={scope:h.scope(),refs:h.selected(),active:h.run('floorId'),visible:h.visible()};
 for(let n=1;n<=repeats;n++){
  await h.B.setWorkspaceMode('2d');
  check(`${label}: ${n} entering 2D preserves scope and references`,()=>{assert.deepEqual(h.scope(),before.scope);assert.deepEqual(h.selected(),before.refs);assert.equal(h.run('floorId'),before.active)});
  await h.B.openThree();h.refresh();assert(h.view);
  check(`${label}: ${n} returning to 3D preserves active floor, visibility, scope and references`,()=>{assert.deepEqual(h.scope(),before.scope);assert.deepEqual(h.selected(),before.refs);assert.equal(h.run('floorId'),before.active);assert.equal(h.view.getFocusedFloor(),before.active);assert.deepEqual(h.visible(),before.visible)});
  if(expectedTarget){h.key('f');check(`${label}: ${n} F target survives roundtrip`,()=>close(h.pose().target,expectedTarget,'retained selection frame'))}
 }
}
async function rebuild(h,label,mutation,expectedTarget){const before={scope:h.scope(),refs:h.selected(),active:h.run('floorId'),visible:h.visible()},old=h.view;h.run(mutation);await settle();h.refresh();assert(h.view&&h.view!==old,'geometry edit must rebuild the actual viewer');check(`${label}: geometry rebuild preserves all selection state`,()=>{assert.deepEqual(h.scope(),before.scope);assert.deepEqual(h.selected(),before.refs);assert.equal(h.run('floorId'),before.active);assert.equal(h.view.getFocusedFloor(),before.active);assert.deepEqual(h.visible(),before.visible)});if(expectedTarget){h.key('f');check(`${label}: geometry rebuild preserves the right F target`,()=>close(h.pose().target,expectedTarget,'rebuilt geometry frame'))}}
(async()=>{
 await scenario('single floor persistence',async h=>{h.aim();h.row('L1').click();h.L.setVisible('B1',false);h.key('f');close(h.pose().target,[20,5.5,4],'initial L1 frame');await roundtrip(h,'single floor',{expectedTarget:[20,5.5,4]});await rebuild(h,'single floor',"model.floors.L1.rooms[1].w=10;render()",[21,5.5,4]);});
 await scenario('multiple floor persistence',async h=>{h.aim();h.row('L1').click();h.shift(h.row('L0'));h.L.setVisible('B1',false);h.view.selectFloors(h.scope());h.key('f');close(h.pose().target,[14,3.5,4],'initial floor union');await roundtrip(h,'multiple floors',{expectedTarget:[14,3.5,4]});await rebuild(h,'multiple floors',"model.floors.L1.rooms[1].w=10;render()",[15,3.5,4]);});
 await scenario('room object persistence',async h=>{h.aim();h.row('L1').click();h.shift(h.row('L0'));h.L.setVisible('B1',false);h.L.selectLayer('rooms','a',{},'L1');h.key('f');close(h.pose().target,[16,5.5,4],'initial room frame');await roundtrip(h,'room object',{expectedTarget:[16,5.5,4]});await rebuild(h,'room object',"model.floors.L1.rooms[0].w=7;render()",[15.5,5.5,4]);});
 await scenario('multiple room persistence',async h=>{h.aim();h.row('L1').click();h.L.selectLayer('rooms','a',{},'L1');h.L.selectLayer('rooms','b',{shiftKey:true},'L1');h.key('f');close(h.pose().target,[20,5.5,4],'initial two-room frame');await roundtrip(h,'multiple room objects',{expectedTarget:[20,5.5,4]});await rebuild(h,'multiple room objects',"model.floors.L1.rooms[1].w=10;render()",[21,5.5,4]);});
 await scenario('different 2D active floor',async h=>{h.aim();h.row('L0').click();await h.B.setWorkspaceMode('2d');h.row('L1').click();assert.equal(h.run('floorId'),'L1');assert.deepEqual(h.scope(),['L1']);await h.B.openThree();h.refresh();check('2D floor change overrides stale 3D saved focus without mismatched edit scope',()=>{assert.equal(h.run('floorId'),'L1');assert.equal(h.view.getFocusedFloor(),'L1');assert.deepEqual(h.scope(),['L1']);assert(h.checkbox('L1').checked);assert.equal(h.row('L1').getAttribute('aria-current'),'page')});h.key('f');check('2D changed floor has matching F target after 3D restore',()=>close(h.pose().target,[20,5.5,4],'changed L1 target'));});
 await scenario('different 2D room and multi scope',async h=>{h.aim();h.row('L0').click();await h.B.setWorkspaceMode('2d');h.row('L1').click();h.shift(h.row('L0'));h.L.selectLayer('rooms','b',{},'L1');const expected=h.selected();await h.B.openThree();h.refresh();check('2D room selection and multi-scope survive stale 3D focus restoration',()=>{assert.equal(h.run('floorId'),'L1');assert.equal(h.view.getFocusedFloor(),'L1');assert.deepEqual(h.scope(),['L1','L0']);assert.deepEqual(h.selected(),expected)});h.key('f');check('new 2D room selection frames that room in 3D',()=>close(h.pose().target,[24,5.5,4],'new room B target'));await roundtrip(h,'changed room',{repeats:2,expectedTarget:[24,5.5,4]});});
 await scenario('cross-floor object reference persistence',async h=>{h.aim();h.row('L1').click();h.shift(h.row('L0'));h.L.selectLayer('rooms','a',{},'L1');h.L.selectLayer('rooms','a',{shiftKey:true},'L0');assert.equal(h.selected().length,2);h.key('f');check('cross-floor objects initially frame both selected objects',()=>close(h.pose().target,[10,3.5,4],'cross-floor object union'));await roundtrip(h,'cross-floor objects',{repeats:2,expectedTarget:[10,3.5,4]});await rebuild(h,'cross-floor objects',"model.floors.L1.rooms[0].w=7;render()",[9.5,3.5,4]);});
 await scenario('window reference persistence',async h=>{h.aim();h.row('L1').click();h.L.selectLayer('doors','window',{},'L1');assert.deepEqual(h.selected(),[{floor:'L1',kind:'doors',id:'window'}]);h.key('f');const target=h.pose().target;await roundtrip(h,'window object',{repeats:2,expectedTarget:target});await rebuild(h,'window object',"model.floors.L1.rooms[1].w=10;render()",target);});
 await scenario('empty scope persistence',async h=>{h.aim();h.row('L1').click();h.shift(h.row('L1'));assert.deepEqual(h.scope(),[]);await roundtrip(h,'empty scope',{repeats:2});check('empty scope roundtrip does not revive highlighted floors',()=>assert.deepEqual(h.outlines(),[]));});
 await scenario('2D activates hidden saved floor',async h=>{h.aim();h.row('L0').click();h.L.setVisible('L1',false);assert(!h.visible().includes('L1'));await h.B.setWorkspaceMode('2d');h.row('L1').click();await h.B.openThree();h.refresh();check('explicit 2D floor choice becomes visible despite saved 3D hidden state',()=>{assert.equal(h.run('floorId'),'L1');assert.deepEqual(h.scope(),['L1']);assert(h.visible().includes('L1'))});h.key('f');check('previously hidden 2D floor choice frames selected floor',()=>close(h.pose().target,[20,5.5,4],'revealed L1 frame'));});
 await scenario('overview and hidden navigation selection',async h=>{h.aim();h.row('L1').click();h.view.showAll();h.key('f');check('Show all preserves selected-floor F target',()=>{close(h.pose().target,[20,5.5,4],'overview selected floor');assert.deepEqual(h.scope(),['L1'])});h.view.setFloor('L0',false);h.view.activateFloor('L0');h.key('f');check('explicit renderer navigation reveals hidden destination and replaces selection',()=>{assert(h.visible().includes('L0'));assert.deepEqual(h.scope(),['L0']);close(h.pose().target,[4,1.699,4],'revealed active floor')});});
 console.log(JSON.stringify({passed:success.length,failed:failures.length,failures},null,2));if(failures.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
