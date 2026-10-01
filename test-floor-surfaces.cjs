const fs=require('fs'),assert=require('assert'),vm=require('vm'),esbuild=require('esbuild'),{boot}=require('./test-support.cjs');
const t=boot(),w=t.w,get=t.get;let current,disposals=0;
w.matchMedia=()=>({matches:true});
w.HTMLCanvasElement.prototype.getContext=function(){return this._context||(this._context={font:'',draws:[],fillRect(...v){this.draws.push(['fillRect',...v])},strokeRect(){},strokeText(){},fillText(...v){this.draws.push(['fillText',...v])},measureText(text){return{width:text.length*(parseFloat(this.font.match(/[\d.]+(?=px)/)?.[0])||24)*.57}}})};
w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:1000,height:720});
w.ResizeObserver=class{constructor(fn){this.fn=fn}observe(){this.fn()}disconnect(){}};
w.__TestRenderer=class{constructor(){this.domElement=w.document.createElement('canvas');Object.defineProperties(this.domElement,{clientWidth:{value:1000},clientHeight:{value:720}})}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){this.loop=fn;if(fn)fn()}render(scene,camera){scene.updateMatrixWorld(true);current={scene,camera,renderer:this}}dispose(){disposals++}forceContextLoss(){}};
const source=fs.readFileSync('src/preview3d.js','utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(').replace('controls.enableDamping = true;', 'window.__controls=controls;window.__THREE=THREE;controls.enableDamping = true;');
vm.runInContext(esbuild.buildSync({stdin:{contents:source,resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text,t.dom.getInternalVMContext());
const geometry=require('./dist/preview-geometry.js'),stairs=require('./dist/stair-detail.js'),seed={window:{}};vm.runInNewContext(fs.readFileSync('dist/seed-v11.js','utf8'),seed);
const data=geometry.build(seed.window.KERN_V11,stairs),before=JSON.stringify(data),host=get('threeviewport');Object.defineProperties(host,{clientWidth:{value:1000},clientHeight:{value:720}});
const view=w.Building3D.mount(host,data),THREE=w.__THREE,controls=w.__controls,groups=current.scene.children.filter(g=>g.userData.id),batches=groups.flatMap(g=>g.children.filter(o=>o.isInstancedMesh)),labels=groups.flatMap(g=>g.children.filter(o=>o.userData.roomLabel));
const axes=(mesh,index)=>[0,5,10].map(k=>mesh.instanceMatrix.array[index*16+k]);
function assertNoGhosts() {
 for(const mesh of batches)for(let i=0;i<mesh.count;i++) {
  const scale=axes(mesh,i);
  if(scale[1]===0)assert.deepEqual(scale,[0,0,0],'A hidden instance must have no horizontal cap area');
 }
}
assertNoGhosts();assert(batches.filter(m=>m.userData.xray).every(m=>!m.visible));
const slabMatrices=batches.filter(m=>m.userData.boxes[0].kind==='slab').map(m=>Array.from(m.instanceMatrix.array));
view.setWalls(false);assertNoGhosts();
for(const mesh of batches.filter(m=>['wall','solid'].includes(m.userData.boxes[0].kind))) {assert(!mesh.visible);for(let i=0;i<mesh.count;i++)assert.deepEqual(axes(mesh,i),[0,0,0]);}
assert.deepEqual(batches.filter(m=>m.userData.boxes[0].kind==='slab').map(m=>Array.from(m.instanceMatrix.array)),slabMatrices,'Wall toggle cannot alter floor slabs');
view.setXray(true);assertNoGhosts();view.setWalls(true);assertNoGhosts();view.setCutaway(true);view.setCutHeight(.6);assertNoGhosts();
assert(batches.some(m=>m.userData.boxes.some((q,i)=>q.kind==='wall'&&q.z>q.baseZ+.6&&axes(m,i)[1]===0)),'Clipped raised lintels are genuinely absent');
view.setCutaway(false);view.setXray(false);view.setWalls(true);assertNoGhosts();
console.log('PASS zero-area hiding for walls OFF, clipped lintels and unused X-ray instances; wall/floor transforms restore without altering slabs');
assert(labels.length>70);assert(labels.every(l=>l.isMesh&&!l.isSprite));assert(labels.some(l=>Math.abs(l.rotation.z)>.1),'Narrow rooms orient text along their long axis');
for(const label of labels) {
 const {surface,worldWidth,worldHeight,name,lines}=label.userData;
 assert.equal(lines.join(' '),name.replace(/\s+/g,' '),'Full room names must survive wrapping');
 assert(Math.abs(label.position.y-surface.z-.006)<1e-9);assert(label.material.depthTest);assert(!label.material.depthWrite);assert(label.material.polygonOffset);assert.equal(label.material.side,THREE.FrontSide);assert.equal(label.material.alphaTest,.06);
 const normal=new THREE.Vector3(0,0,1).applyQuaternion(label.quaternion);assert(normal.distanceTo(new THREE.Vector3(0,1,0))<1e-6,'Plane must face up and follow the floor');
 const plane=new THREE.Box3().setFromObject(label),group=groups.find(g=>g.userData.id===label.userData.level);
 assert(plane.min.x>=surface.x-1e-5&&plane.max.x<=surface.x+surface.w+1e-5);assert(plane.min.z>=surface.y-1e-5&&plane.max.z<=surface.y+surface.h+1e-5);
 assert(!label.material.map.image._context.draws.some(row=>row[0]==='fillRect'),'Room label canvas must have no panel background');
}
const garage=labels.find(l=>l.userData.level==='B1'&&l.userData.room==='garage');assert(garage);assert.equal(garage.userData.surface.z,-9.8);
const fixedScale=garage.scale.clone(),fixedRotation=garage.quaternion.clone();view.setExplode(6);assert(Math.abs(garage.getWorldPosition(new THREE.Vector3()).y-(-9.8-6+.006))<1e-6);view.isolate('B1');assert(Math.abs(garage.getWorldPosition(new THREE.Vector3()).y-(-9.8-6+.006))<1e-6);assert(garage.visible);
current.camera.position.set(25,15,35);controls.target.copy(garage.position);controls.update();current.renderer.loop();assert(garage.scale.equals(fixedScale));assert(garage.quaternion.equals(fixedRotation));
view.setLabels(false);assert(labels.every(l=>!l.visible));view.setLabels(true);assert(garage.visible);view.showAll();assert(labels.every(l=>!l.visible));view.setFloor('B1',false);assert(labels.filter(l=>l.userData.level==='B1').every(l=>!l.visible));
console.log('PASS flat, room-fitted transparent text, full names, dropped B1 elevation, explosion/focus/toggle visibility, fixed scale/rotation and real depth-test materials');
let freedLabels=0;for(const label of labels)for(const resource of [label.geometry,label.material,label.material.map])resource.addEventListener('dispose',()=>freedLabels++);
view.dispose();assert.equal(freedLabels,labels.length*3);assert.equal(disposals,1);assert.equal(JSON.stringify(data),before);
// A courtyard has no surface; a fragmented slab uses its actual solid part, and a stair uses its arrival landing.
const rooms=[{id:'cut',name:'Laboratory with a long descriptive room name',x:0,y:0,w:10,h:10,z:0},{id:'stair',name:'North stair',x:12,y:0,w:3,h:10,z:0},{id:'void',name:'Open courtyard',x:20,y:0,w:10,h:10,z:0},{id:'long',name:'X'.repeat(150),x:0,y:15,w:2,h:2,z:0}];
const boxes=[{x:0,y:0,w:10,h:2,z:-.3,height:.3,kind:'slab',room:'cut',color:'#91afbd'},{x:12,y:0,w:3,h:2,z:-.18,height:.18,kind:'landing',color:'#bdc6d2'},{x:0,y:15,w:2,h:2,z:-.3,height:.3,kind:'slab',room:'long',color:'#91afbd'},{x:14.8,y:0,w:.2,h:2,z:0,height:3,kind:'wall',color:'#a4aebc'}];
const fixture={levels:[{id:'L0',name:'Ground',z:0,rooms,boxes}],bounds:{minX:0,maxX:30,minY:0,maxY:17,minZ:-.3,maxZ:3}};
const next=w.Building3D.mount(host,fixture);next.isolate('L0');const fixtureLabels=current.scene.children.find(g=>g.userData.id==='L0').children.filter(o=>o.userData.roomLabel);
assert.equal(fixtureLabels.length,3);assert(!fixtureLabels.some(l=>l.userData.room==='void'));const cut=fixtureLabels.find(l=>l.userData.room==='cut'),stair=fixtureLabels.find(l=>l.userData.room==='stair'),long=fixtureLabels.find(l=>l.userData.room==='long');assert.equal(cut.position.z,1);assert.equal(stair.position.z,1);assert.equal(long.userData.lines.join(''),'X'.repeat(150));
const ctx=long.material.map.image._context;assert(ctx.measureText(long.userData.lines[0]).width<=long.material.map.image.width-10);
// Verify actual Three ray geometry sees an intervening wall before the text plane, and
// receives no intersection with a hidden wall when that wall is turned off.
const ray=new THREE.Raycaster(),target=stair.getWorldPosition(new THREE.Vector3()),origin=target.clone().add(new THREE.Vector3(5,2,0));ray.set(origin,target.clone().sub(origin).normalize());
const visibleMeshes=current.scene.children.find(g=>g.userData.id==='L0').children.filter(m=>m.isInstancedMesh&&m.visible);const wallHit=ray.intersectObjects(visibleMeshes,false).find(h=>h.object.userData.boxes[h.instanceId].kind==='wall');
const textHit=ray.intersectObject(stair,false)[0];assert(wallHit&&textHit);assert(wallHit.distance<textHit.distance,'An intervening wall must occlude the floor text');
// The text plane stays depth tested even where the camera is below its surface.
current.camera.position.set(10,-3,5);w.__controls.target.set(10,0,5);w.__controls.update();current.renderer.loop();assert(fixtureLabels.every(l=>!l.visible));next.setWalls(false);assert(current.scene.children.find(g=>g.userData.id==='L0').children.filter(m=>m.isInstancedMesh&&m.userData.boxes[0].kind==='wall').every(m=>!m.visible));next.dispose();
console.log('PASS void-safe/slab-fragment/landing placement, 150-character fit and below-floor suppression; geometry/material tests use a renderer double, not GPU drawing');t.close();
