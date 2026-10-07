/* Real Three.js selection/raycast math; renderer double, no GPU claim. */
const fs=require('fs'),assert=require('assert'),vm=require('vm'),esbuild=require('esbuild'),Module=require('module'),path=require('path');
let harness=fs.readFileSync('test-support.cjs','utf8');
const scripts=[...fs.readFileSync('dist/index.html','utf8').matchAll(/<script src="([^"]+)\.js"/g)].map(x=>x[1]);
harness=harness.replace(/const scripts=\[[^;]+;/,'const scripts='+JSON.stringify(scripts)+';');
const support=new Module(path.resolve('test-support.cjs'),module);support.filename=path.resolve('test-support.cjs');support.paths=Module._nodeModulePaths(process.cwd());support._compile(harness,support.filename);
const t=support.exports.boot(),{w,run,get}=t;let current,view;
w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},strokeRect(){},fillText(){}});
w.ResizeObserver=class{constructor(fn){this.fn=fn;}observe(){this.fn();}disconnect(){}};
w.__TestRenderer=class{constructor(){this.domElement=w.document.createElement('canvas');}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){if(fn)fn();}render(scene,camera){scene.updateMatrixWorld(true);current={scene,camera};}dispose(){}forceContextLoss(){}};
const source=fs.readFileSync('src/preview3d.js','utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(');
vm.runInContext(esbuild.buildSync({stdin:{contents:source,resolveDir:process.cwd(),sourcefile:'cap-scene-test.js'},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text,t.dom.getInternalVMContext());
const host=get('threeviewport');Object.defineProperties(host,{clientWidth:{value:900},clientHeight:{value:650}});
w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:900,height:650});
run(`model={version:1,units:'metres',floors:{L0:{name:'Source',z:0,rooms:[{id:'control',name:'Source room',type:'tech',x:2,y:3,w:6,h:4}],doors:[],entrances:['control']},L1:{name:'Void',z:4,rooms:[{id:'void',name:'Void',type:'void',x:2,y:3,w:6,h:4,linkedSource:{floor:'L0',room:'control'},locked:true}],doors:[],entrances:[]},L2:{name:'Cap',z:8,rooms:[{id:'opsroof',name:'Concrete cap',type:'solid',x:2,y:3,w:6,h:4,z:8,height:2,sealedConcrete:true,locked:true,derivedFootprint:true,linkedSource:{floor:'L0',room:'control'}}],doors:[],entrances:[]}}};floorId='L2';currentBuilding().view.layers={};setTool('select');setSelection();history=[];future=[];render();`);
const selections=[],edits=[];
function mount(){
 view?.dispose();view=w.Building3D.mount(host,w.BuildingExports.currentGeometry(),{onRoomSelect(fid,rid){selections.push([fid,rid]);w.KERN_EXPLORER.selectRoom(fid,rid);view.selectRoom(fid,rid);},onRoomEdit(fid,rid,rect){edits.push({fid,rid,rect});w.KERN_EXPLORER.editRoom(fid,rid,rect);}});
 view.restoreViewState({position:[18,23,24],target:[5,8,5],focused:'L2',visible:['L2'],gap:0});view.isolate('L2');
 const canvas=host.querySelector('canvas');canvas.setPointerCapture=()=>{};canvas.hasPointerCapture=()=>false;canvas.releasePointerCapture=()=>{};return canvas;
}
function point(x,y,z){current.scene.updateMatrixWorld(true);current.camera.updateMatrixWorld(true);const p=current.camera.position.clone().set(x,z,y).project(current.camera);return{x:(p.x+1)*450,y:(1-p.y)*325};}
function fire(canvas,type,p){const e=new w.MouseEvent(type,{bubbles:true,cancelable:true,button:0,clientX:p.x,clientY:p.y});Object.defineProperty(e,'pointerId',{value:7});canvas.dispatchEvent(e);}
function handles(){const out=[];current.scene.traverse(o=>{if(o.userData.edge)out.push(o);});return out;}
function handlePoint(edge){const handle=handles().find(o=>o.userData.edge===edge);assert(handle,'Missing '+edge+' handle');current.scene.updateMatrixWorld(true);current.camera.updateMatrixWorld(true);const p=handle.getWorldPosition(current.camera.position.clone()).project(current.camera);return{x:(p.x+1)*450,y:(1-p.y)*325};}
try{
 let canvas=mount(),before=run('JSON.stringify(model)');
 assert.equal(w.BuildingExports.currentGeometry().levels.find(l=>l.id==='L2').rooms.length,0,'Concrete is never added as a walkable preview room');
 const top=point(5,5,10);fire(canvas,'pointerdown',top);fire(canvas,'pointerup',top);
 assert.deepStrictEqual(selections.at(-1),['L2','opsroof'],'Actual cap mesh raycast selects the cap');assert(get('makecapindependent'));assert.equal(handles().length,0,'Protected cap selection exposes no room or floor handles');assert.equal(run('JSON.stringify(model)'),before);
 view.frameSelection();assert.equal(run('JSON.stringify(model)'),before);
 get('makecapindependent').click();canvas=mount();view.selectRoom('L2','opsroof');assert(handles().some(h=>h.userData.edge==='move'));assert(handles().some(h=>h.userData.edge==='elevate'));assert(handles().some(h=>h.userData.edge==='nw'));
 const sourceBefore=run('JSON.stringify([model.floors.L0,model.floors.L1])'),floorZ=run('model.floors.L2.z');before=run('JSON.stringify(model)');
 let p=handlePoint('elevate');fire(canvas,'pointerdown',p);fire(canvas,'pointermove',{x:p.x,y:p.y-26});fire(canvas,'pointerup',{x:p.x,y:p.y-26});
 assert.equal(edits.length,1);assert.equal(edits[0].rid,'opsroof','Elevation handle must target the cap, never the floor');assert(edits[0].rect.__elevation);assert.equal(run('model.floors.L2.z'),floorZ);assert.equal(run('JSON.stringify([model.floors.L0,model.floors.L1])'),sourceBefore);assert.notEqual(run('model.floors.L2.rooms[0].z'),8);run('undo()');assert.equal(run('JSON.stringify(model)'),before);
 canvas=mount();view.selectRoom('L2','opsroof');p=handlePoint('move');const target=point(6,5,8);fire(canvas,'pointerdown',p);fire(canvas,'pointermove',target);canvas.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));fire(canvas,'pointerup',target);assert.equal(run('JSON.stringify(model)'),before);assert.equal(edits.length,1,'Escape cancels the cap drag');
 // A converted independent void remains selectable from Layers without pretending to be a floor.
 run('setSelection({rooms:["opsroof"]});updateRoomType(room("opsroof"),"void")');canvas=mount();view.selectRoom('L2','opsroof');assert(handles().some(h=>h.userData.edge==='move'));assert.equal(w.KERN_CONCRETE_CAP_UI.selectionRoom('L2','opsroof').type,'void');
 w.KERN_LAYERS.toggleObject('rooms','opsroof','locked');view.selectRoom('L2','opsroof');assert.equal(handles().length,0,'Unavailable cap cannot fall back to a floor handle');view.selectRoom('L2','missing');assert.equal(handles().length,0,'An unknown requested room never selects a floor');
 console.log('PASS real Three cap mesh picking, read-only protection, detached solid/void handles, cap-only elevation, Escape rollback, layer locks and no accidental floor handle (mock GPU)');
}finally{view?.dispose();t.close();}
