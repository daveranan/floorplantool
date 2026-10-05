'use strict';
/* Real Three geometry and DOM feedback, with an observable manager double.
 * No GPU, native-pointer or browser-rendering claim. */
const assert=require('node:assert/strict'),vm=require('node:vm'),esbuild=require('esbuild'),{JSDOM}=require('jsdom');
const dom=new JSDOM('<div id="viewer"><canvas></canvas></div>',{runScripts:'outside-only'}),w=dom.window,doc=w.document;
const bundle=esbuild.buildSync({stdin:{contents:"import * as THREE from 'three'; import {dragFeedback3D} from '#drag-feedback'; window.__feedback={THREE,dragFeedback3D};",resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text;
vm.runInContext(bundle,dom.getInternalVMContext());
const {THREE:T,dragFeedback3D}=w.__feedback,container=doc.querySelector('#viewer'),canvas=doc.querySelector('canvas');
let width=900,height=650;
canvas.getBoundingClientRect=()=>({left:30,top:20,width,height});container.getBoundingClientRect=()=>({left:20,top:10,width:width+20,height:height+20});
const scene=new T.Scene(),camera=new T.PerspectiveCamera(42,width/height,.05,5000);camera.position.set(14,12,20);camera.lookAt(0,0,0);camera.updateMatrixWorld(true);
const subscribers=new Set(),manager={subscribe(fn){subscribers.add(fn);fn(null);return()=>subscribers.delete(fn)}},owner={},foreign={},origin={x:2,y:3,z:4};
const publish=snapshot=>{for(const fn of subscribers)fn(snapshot);};
const state=(delta={x:0,y:0,z:0},axes=[],supported=['x','y','z'],extras={})=>({owner,space:'3d',origin,delta,axes,supported,...extras});
const near=(a,b,message)=>assert(Math.abs(a-b)<1e-5,message+': '+a+' != '+b);
const overlay=dragFeedback3D({scene,camera,canvas,container,manager,owns:id=>id===owner});
const root=scene.children.find(o=>o.userData.dragFeedback==='3d'),label=container.querySelector('[data-drag-feedback="3d"]'),status=label.querySelector('[data-drag-axis-status]');
const lines=root.children.filter(o=>o.isLine),distance=lines.find(o=>o.userData.dragDistance),guides=Object.fromEntries(lines.filter(o=>o.userData.dragAxis).map(o=>[o.userData.dragAxis,o]));
const vertices=object=>Array.from(object.geometry.attributes.position.array),resources=[...new Set(root.children.flatMap(o=>[o.geometry,o.material]).filter(Boolean))],originalChildren=root.children.slice();
assert.equal(subscribers.size,1);assert.equal(label.style.display,'none');assert.equal(label.style.pointerEvents,'none');assert.equal(label.querySelector('button,input,[tabindex]'),null);assert.equal(root.visible,false);
for(const object of root.children){const hits=[];object.raycast(new T.Raycaster(),hits);assert.equal(hits.length,0,'feedback does not intercept scene picking');}
publish(state());assert(root.visible);assert.equal(label.style.display,'block');assert.equal(label.dataset.total,'0.000000');assert.equal(status.style.display,'none');assert.equal(distance.visible,false);assert.match(label.textContent,/Move 0.00 m/);
publish(state({x:3,y:0,z:4},['x','z']));assert.equal(status.textContent,'X + Z locked');assert.equal(status.style.display,'block');assert.equal(label.dataset.total,'5.000000');assert.match(label.textContent,/X \+3.00/);assert.match(label.textContent,/Z \+4.00/);assert(guides.x.visible&&guides.z.visible&&!guides.y.visible);assert(distance.visible);
assert.deepEqual(vertices(distance),[2,3,4,5,3,8]);near(distance.geometry.attributes.lineDistance.getX(1),5,'actual displacement line length');
for(const axis of ['x','z']){const p=vertices(guides[axis]);for(const [i,k]of ['x','y','z'].entries())near((p[i]+p[i+3])/2,origin[k]+({x:3,y:0,z:4})[k],axis+' guide crosses live position');}
const buffers=lines.map(o=>o.geometry.attributes.position);
// Release arrives without any animation tick or pointer movement.
publish(state({x:3,y:0,z:4},[]));assert.equal(status.style.display,'none');assert.equal(status.textContent,'');assert.equal(label.dataset.total,'5.000000');assert(Object.values(guides).every(o=>!o.visible));assert(distance.visible);
publish(state({x:0,y:0,z:0},['y'],['x','z']));assert.equal(status.textContent,'Y locked · planar edit');assert.equal(label.dataset.total,'0.000000');assert.match(label.textContent,/Y 0.00/);assert(!guides.y.visible&&!distance.visible,'a planar C hold cannot depict vertical displacement');
publish(state({x:0,y:-2,z:0},['y'],['y']));assert.equal(status.textContent,'Y locked');assert.equal(label.dataset.total,'2.000000');assert.match(label.textContent,/Y -2.00/);assert(guides.y.visible);assert.deepEqual(vertices(distance),[2,3,4,2,1,4]);
publish(state({x:0,y:-2,z:0},['x'],['y']));assert.equal(status.textContent,'X locked · vertical edit');assert(!guides.x.visible);
publish(state({x:-.00001,y:0,z:0}));assert(!label.textContent.includes('-0.00'),'negative zero is suppressed');
for(let i=0;i<40;i++)publish(state({x:i/10,y:0,z:0},i%2?['x']:[]));assert.deepEqual(root.children,originalChildren);lines.forEach((line,i)=>assert.equal(line.geometry.attributes.position,buffers[i],'geometry buffer reused through movement and held-key changes'));
const oldTop=label.style.top,oldLeft=label.style.left;camera.position.set(-15,10,30);camera.lookAt(0,0,0);overlay.update();assert(oldTop!==label.style.top||oldLeft!==label.style.left,'camera movement reprojects the existing readout');
width=280;height=170;camera.aspect=width/height;camera.updateProjectionMatrix();overlay.update();assert(parseFloat(label.style.left)>=18&&parseFloat(label.style.left)<=width+10);assert(parseFloat(label.style.top)>=18&&parseFloat(label.style.top)<=height+10,'readout stays inside a resized viewport');
camera.position.set(14,12,20);camera.lookAt(30,24,40);overlay.update();assert(!root.visible);assert.equal(label.style.display,'none','behind-camera feedback is hidden');camera.lookAt(0,0,0);overlay.update();assert(root.visible);
publish(state(undefined,['x'],undefined,{owner:foreign}));assert(!root.visible);assert.equal(label.style.display,'none');publish(state(undefined,['x'],undefined,{space:'2d'}));assert(!root.visible);publish(state(undefined,['x'],undefined,{origin:{x:NaN,y:0,z:0}}));assert(!root.visible);
publish(state({x:2,y:1,z:3},['x','y','z']));publish(null);assert.equal(label.style.display,'none');assert.equal(status.textContent,'');assert(!root.visible);assert(Object.values(guides).every(o=>!o.visible));
const disposed=new Map();for(const resource of resources)resource.addEventListener('dispose',()=>disposed.set(resource,(disposed.get(resource)||0)+1));overlay.dispose();overlay.dispose();assert.equal(subscribers.size,0);assert.equal(container.querySelector('[data-drag-feedback="3d"]'),null);assert(!scene.children.includes(root));for(const resource of resources)assert.equal(disposed.get(resource),1,'each owned resource is disposed exactly once');
for(let i=0;i<5;i++){const next=dragFeedback3D({scene,camera,canvas,container,manager,owns:id=>id===owner});assert.equal(container.querySelectorAll('[data-drag-feedback="3d"]').length,1);publish(state({x:1,y:2,z:3},['y']));next.dispose();assert.equal(subscribers.size,0);assert.equal(scene.children.length,0);}
dom.window.close();console.log('PASS 3D drag feedback: accepted distance, held-only guides, blocked planar/vertical axes, projection, no picks/rebuilds, cleanup and repeated mounts');
