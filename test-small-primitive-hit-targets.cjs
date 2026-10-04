/* SVG hit geometry plus production pointer dispatch. JSDOM does not draw pixels. */
const assert=require('node:assert/strict'),{boot}=require('./test-production-support.cjs');
const t=boot(),{w,doc,get,run}=t,copy=v=>JSON.parse(JSON.stringify(v));let count=0,coarse=false,pointerId=0;
const check=(name,fn)=>{fn();count++;console.log('PASS '+name);};
try{
 const P=w.KERN_PRIMITIVES,L=w.KERN_LAYERS,svg=get('plan');
 w.matchMedia=()=>({matches:coarse,addEventListener(){},removeEventListener(){}});
 const scale=()=>10*run('zoom');
 svg.getScreenCTM=()=>({a:scale(),b:0,inverse(){return{scale:1/this.a};}});
 svg.createSVGPoint=()=>({x:0,y:0,matrixTransform(m){return{x:this.x*m.scale,y:this.y*m.scale};}});
 if(!('onpointerdown' in w.SVGElement.prototype))for(const type of ['pointerdown','pointermove','pointerup','pointercancel','lostpointercapture'])svg.addEventListener(type,e=>svg['on'+type]?.(e));
 const captures=new Set();svg.setPointerCapture=id=>captures.add(id);svg.hasPointerCapture=id=>captures.has(id);svg.releasePointerCapture=id=>captures.delete(id);
 function ptr(type,p,target=svg,options={},id=pointerId){const e=new w.MouseEvent(type,{bubbles:true,cancelable:true,button:0,clientX:p.x*scale(),clientY:p.y*scale(),...options});Object.defineProperties(e,{pointerId:{value:id},pointerType:{value:coarse?'touch':'mouse'}});target.dispatchEvent(e);return e;}
 const level=z=>({name:'Hit test',z,rooms:[{id:'room',name:'Underlying room',type:'tech',x:0,y:0,w:20,h:20}],doors:[],entrances:[],primitives:[]});
 const plan={version:1,units:'metres',floors:{L0:level(0),L1:level(4)}};
 for(const [i,type]of P.types.entries())plan.floors.L0.primitives.push({...P.create(type,type,{x:3+i*3,y:4,z:.7}),w:.5,h:.4,height:.3,rotation:i?37:0,tiltX:i?20:0,tiltY:i?-10:0});
 plan.floors.L1.primitives.push(P.create('cube','upper',{x:3,y:4,z:1}));
 w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
 run(`resetTransient(true);model=${JSON.stringify(plan)};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true,L1:false}};setTool('select');setSnapSize(0);setSelection();history=[];future=[];render();save();`);
 const refs=ids=>L.setReferences(ids.map(id=>({floor:'L0',kind:'primitives',id}))),object=id=>copy(run(`floor().primitives.find(o=>o.id===${JSON.stringify(id)})`)),snapshot=()=>run('JSON.stringify(model)'),center=()=>{const b=run('selectionBounds()');return{x:b.x+b.w/2,y:b.y+b.h/2};};
 // Unlike selector-only pointer tests, resolve the actual transparent hit rectangles
 // in SVG paint order, so the old overlapping targets intercept these body drags.
 const rect=n=>Object.fromEntries(['x','y','width','height'].map(k=>[k,Number(n.getAttribute(k))]));
 const contains=(n,p)=>{const b=rect(n);return p.x>=b.x&&p.x<=b.x+b.width&&p.y>=b.y&&p.y<=b.y+b.height;};
 const hit=p=>[...svg.querySelectorAll('[data-group-handle] .handle-hit')].reverse().find(n=>contains(n,p));
 const body=id=>svg.querySelector(`[data-extra="primitives"][data-id="${id}"] path`);
 function downBody(id){const p=center();pointerId++;ptr('pointerdown',p,hit(p)||body(id));assert.equal(run('drag?.kind'),'group');assert.equal(run('drag?.edge'),null,'the shape body must move, never resize');return p;}
 function release(p,dx=1.3,dy=.8){const q={x:p.x+dx,y:p.y+dy};ptr('pointermove',q);ptr('pointerup',q);assert.equal(run('drag'),null);assert(!captures.has(pointerId));}
 function dimensions(before,after){for(const k of ['w','h','height','z','rotation','tiltX','tiltY','primitive','color'])assert.equal(after[k],before[k],k);}
 for(const touch of [false,true])for(const z of [.25,1,5,15])check(`${touch?'touch':'mouse'} at ${z}x: all four shapes retain a clear interior, move and undo`,()=>{
  coarse=touch;run(`zoom=${z};draw()`);
  for(const type of P.types){refs([type]);const before=snapshot(),o=object(type),b=run('selectionBounds()'),n=run('history.length');
   for(const x of [.3,.5,.7])for(const y of [.3,.5,.7])assert(!hit({x:b.x+b.w*x,y:b.y+b.h*y}),'resize must not cover the middle of a small shape');
   release(downBody(type));const moved=object(type);assert(Math.abs(moved.x-o.x-1.3)<1e-5);assert(Math.abs(moved.y-o.y-.8)<1e-5);dimensions(o,moved);assert.equal(run('history.length'),n+1);assert.deepEqual(copy(L.references()),[{floor:'L0',kind:'primitives',id:type}]);const after=snapshot();run('undo()');assert.equal(snapshot(),before);run('redo()');assert.equal(snapshot(),after);run('undo()');
  }
 });
 for(const touch of [false,true])for(const z of [.25,1,15])check(`${touch?'touch':'mouse'} at ${z}x: each visible handle keeps its own resize target`,()=>{
  coarse=touch;run(`zoom=${z};draw()`);for(const edge of ['nw','n','ne','e','se','s','sw','w']){refs(['cube']);const before=snapshot(),o=object('cube'),n=run('history.length'),visual=svg.querySelector(`[data-group-handle="${edge}"] .handle-visual`),b=rect(visual),p={x:b.x+b.width/2,y:b.y+b.height/2},target=hit(p);assert.equal(target?.parentElement.dataset.groupHandle,edge);assert(Math.abs(b.width*scale()-7)<1e-7);pointerId++;ptr('pointerdown',p,target);assert.equal(run('drag?.edge'),edge);release(p,edge.includes('w')?-.7:edge.includes('e')?.7:0,edge.includes('n')?-.6:edge.includes('s')?.6:0);const after=object('cube');assert(after.w>o.w||after.h>o.h);assert.equal(after.z,o.z);assert.equal(after.height,o.height);assert.equal(run('history.length'),n+1);run('undo()');assert.equal(snapshot(),before);}
 });
 check('room-sized group targets keep their previous screen dimensions',()=>{coarse=false;run('zoom=15;draw()');L.setReferences([{floor:'L0',kind:'rooms',id:'room'},{floor:'L0',kind:'primitives',id:'cube'}]);for(const target of svg.querySelectorAll('[data-group-handle] .handle-hit')){const b=rect(target);assert(Math.abs(b.width*scale()-22)<1e-7);assert(Math.abs(b.height*scale()-22)<1e-7);}});
 check('camera-only redraw updates hit regions without replacing primitive geometry',()=>{coarse=false;refs(['cube']);const node=body('cube');for(const z of [.25,15,.5]){run(`zoom=${z};draw()`);assert.equal(body('cube'),node);assert(!hit(center()));}});
 for(const cancel of ['Escape','pointercancel','lostpointercapture','blur','undo','floor'])check(cancel+' cancels the small-shape body move and rejects late release',()=>{
  L.selectFloor('L0');refs(['cube']);const before=snapshot(),n=run('history.length'),raw=w.localStorage.getItem('kern-buildings-v1'),p=downBody('cube'),q={x:p.x+1,y:p.y+2};ptr('pointermove',q);assert.notEqual(snapshot(),before);if(cancel==='Escape')svg.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true}));else if(cancel==='blur')w.dispatchEvent(new w.Event('blur'));else if(cancel==='undo')run('undo()');else if(cancel==='floor')L.selectFloor('L1');else ptr(cancel,q);assert.equal(snapshot(),before);assert.equal(run('history.length'),n);if(cancel!=='floor')assert.equal(w.localStorage.getItem('kern-buildings-v1'),raw);ptr('pointerup',q);assert.equal(snapshot(),before);
 });
 check('another pointer cannot finish or alter a small-shape move',()=>{L.selectFloor('L0');refs(['cube']);const before=snapshot(),p=downBody('cube');ptr('pointermove',{x:p.x+2,y:p.y+1},svg,{},pointerId+100);ptr('pointerup',p,svg,{},pointerId+100);assert.equal(snapshot(),before);assert(run('drag'));ptr('pointercancel',p);assert.equal(snapshot(),before);});
 check('Shift-click and Shift-constrained movement keep existing selection behavior',()=>{refs(['cube']);const p=center();pointerId++;ptr('pointerdown',p,body('cube'),{shiftKey:true});ptr('pointerup',p);assert.equal(L.references().length,0);refs(['cube']);const o=object('cube'),q=downBody('cube');ptr('pointermove',{x:q.x+2,y:q.y+.5},svg,{shiftKey:true});ptr('pointerup',{x:q.x+2,y:q.y+.5},svg,{shiftKey:true});const after=object('cube');assert.equal(after.x,o.x+2);assert.equal(after.y,o.y);dimensions(o,after);run('undo()');});
 check('multiple enabled floors preserve single-shape body dragging and ownership',()=>{L.selectFloor('L0');L.selectFloor('L1',{additive:true});const before=snapshot(),o=copy(run('model.floors.L1.primitives[0]'));refs(['cube']);const p=downBody('cube');release(p);assert.deepEqual(copy(run('model.floors.L1.primitives[0]')),o);run('undo()');assert.equal(snapshot(),before);});
 check('cross-floor multi-selection still moves atomically without resize handles',()=>{L.selectFloor('L0');L.selectFloor('L1',{additive:true});L.setReferences([{floor:'L0',kind:'primitives',id:'cube'},{floor:'L1',kind:'primitives',id:'upper'}]);const before=snapshot(),n=run('history.length');assert.equal(svg.querySelector('[data-group-handle]'),null);const target=svg.querySelector('[data-crossfloor-move]'),p={x:3,y:4};pointerId++;ptr('pointerdown',p,target);ptr('pointermove',{x:4,y:5});assert.equal(snapshot(),before);ptr('pointerup',{x:4,y:5});assert.notEqual(snapshot(),before);assert.equal(run('history.length'),n+1);run('undo()');assert.equal(snapshot(),before);});
 check('locked and hidden primitives never expose resize handles or editable bodies',()=>{L.selectFloor('L0');for(const state of ['locked','hidden']){refs(['cube']);L.toggleObject('primitives','cube',state,'L0');const before=snapshot();assert.equal(svg.querySelector('[data-group-handle]'),null);assert(!L.available('primitives','cube','L0'));const node=body('cube');if(node){pointerId++;ptr('pointerdown',{x:3.25,y:4.2},node);ptr('pointermove',{x:4,y:5});ptr('pointerup',{x:4,y:5});assert.equal(snapshot(),before);}L.toggleObject('primitives','cube',state,'L0');}});
 console.log(`PASS ${count} small-primitive hit-target checks`);
}finally{t.close();}
