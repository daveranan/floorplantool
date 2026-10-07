'use strict';
/* Actual production script order and real Three.js scene geometry. Only WebGL
 * presentation is replaced. Route storage is deliberately kept in its original
 * affine frame, so every assertion also guards against read-time rebasing. */
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),esbuild=require('esbuild');
const {boot}=require('./test-production-support.cjs');
const copy=v=>JSON.parse(JSON.stringify(v));
const near=(a,b,message='',epsilon=3e-6)=>assert(Math.abs(a-b)<=epsilon,`${message}: ${a} != ${b}`);
const pointsNear=(a,b,message='points')=>{assert.equal(a.length,b.length,message);a.forEach((p,i)=>{assert.equal(p.length,b[i].length,message);p.forEach((v,j)=>near(v,b[i][j],`${message}[${i}][${j}]`));});};
const rectNear=(a,b,message='bounds')=>{assert(a,message);for(const key of ['x','y','w','h'])near(a[key],b[key],`${message}.${key}`);};
const pointBounds=points=>{const x=Math.min(...points.map(p=>p[0])),y=Math.min(...points.map(p=>p[1]));return{x,y,w:Math.max(...points.map(p=>p[0]))-x,h:Math.max(...points.map(p=>p[1]))-y};};
const contains=(b,p)=>p[0]>=b.x-3e-6&&p[1]>=b.y-3e-6&&p[0]<=b.x+b.w+3e-6&&p[1]<=b.y+b.h+3e-6;
const emptyFloor=(name='Ground',z=0)=>({name,z,clearHeight:4,rooms:[],doors:[],entrances:[]});
let checks=0;
const check=async(name,fn)=>{await fn();checks++;console.log('PASS '+name);};

(async()=>{
 const t=boot(),{w,doc,get,run}=t;let mounted=null,current=null;
 try{
  w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
  const R=w.KERN_ROUTE_STAIRS,S=w.KERN_SHAPES,L=w.KERN_LAYERS;
  // JSDOM does not implement property-based pointer handlers on SVG elements.
  if(!('onpointerdown' in w.SVGElement.prototype))for(const type of ['pointerdown','pointermove','pointerup','pointercancel','lostpointercapture'])get('plan').addEventListener(type,e=>get('plan')['on'+type]?.(e));
  assert.equal(typeof R.bounds,'function','routes expose read-only live world bounds');
  assert.equal(typeof R.editFrame,'function','routes expose a read-only oriented interaction frame');
  const snapshot=()=>run('JSON.stringify(model)'),json=expr=>copy(run(expr));
  const route=()=>run("room('path')"),plan=()=>run('model'),detail=()=>R.build(plan(),'L0','path');
  const routePoints=r=>r.routeStair.nodes.map(n=>R.point(r,n));
  const landingPoints=r=>r.routeStair.nodes.map(n=>(n.landing||[]).map(p=>R.point(r,p)));
  const geometry=d=>[...d.flights,...d.landings].flatMap(x=>x.polygon||[]);
  const expectedBounds=()=>pointBounds([...geometry(detail()),...routePoints(route())]);
  const field=(type,key)=>doc.querySelector(`[data-${type}-field="${key}"]`);
  function change(input,value){assert(input,'requested inspector field exists');input.value=String(value);input.dispatchEvent(new w.Event('change',{bubbles:true}));}
  function fixture(surface='ramp',points=[[8,8],[8,25],[24,25]]){
   const p={version:1,units:'metres',floors:{L0:emptyFloor(),L1:emptyFloor('Upper',7)}};
   p.floors.L0.rooms.push(copy(R.create(points,{id:'path',name:'Dynamic '+surface,surface,width:2,startZ:0,endZ:3,start:{kind:'floor',floor:'L0'},end:{kind:'floor',floor:'L1',offset:-.25}})));
   run(`resetTransient(true);model=${JSON.stringify(p)};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true,L1:false}};setTool('select');setSelection({rooms:['path']});setSnapSize(.25);history=[];future=[];render();save();`);
   return copy(route());
  }
  function assertDerived(message){
   const before=snapshot(),r=route(),expected=expectedBounds();
   rectNear(R.bounds(r,plan()),expected,message+' API');
   rectNear(run('selectionBounds()'),expected,message+' plan selection');
   rectNear(L.selectedBounds(),expected,message+' layer selection');
   const selected=L.viewerSelection().find(o=>o.id==='path');assert(selected,message+' 3D selection record');rectNear(selected,expected,message+' 3D selection record');
   const frame=R.editFrame(r,plan());for(const key of ['x','y','w','h']){const input=doc.querySelector(`[data-key="${key}"]`);assert(input,message+' generic inspector '+key);near(Number(input.value),expected[key],message+' inspector '+key);assert.equal(input.disabled,['w','h'].includes(key),message+' width/depth are measurements while X/Y remain editable');}assert.equal(field('route','width').disabled,false,message+' actual path width remains editable');
   const f=w.KERN_TRANSFORM.frame(frame),dims=[...(get('plan').querySelector('[data-selection-dimensions]')?.querySelectorAll('text')||[])].map(n=>n.textContent);
   assert.deepEqual(dims,[(f?.w??frame.w).toFixed(2)+' m',(f?.h??frame.h).toFixed(2)+' m'],message+' live plan dimensions');
   const handles=w.KERN_TRANSFORM.handles(r),expectedCorners=S.raw(frame);
   for(const [i,edge]of ['nw','ne','se','sw'].entries()){const h=handles.find(h=>h[0]===edge);assert(h,message+' '+edge+' handle');pointsNear([h.slice(1)],[expectedCorners[i]],message+' '+edge+' handle');}
   assert.equal(snapshot(),before,message+' display and bounds reads cannot alter stored route');
  }
  function assertFramePreserves(r,p,label){
   const before=JSON.stringify({r,p}),nodes=routePoints(r),landings=landingPoints(r),elevations=copy(R.elevations(r,p)),old=R.build(p,'L0',r.id),frame=R.editFrame(r,p);
   assert.notEqual(frame,r,label+' returns a separate record');
   assert.equal(JSON.stringify({r,p}),before,label+' leaves authored frame, model and normalized coordinates exact');
   pointsNear(routePoints(frame),nodes,label+' node world geometry');
   landingPoints(frame).forEach((ps,i)=>pointsNear(ps,landings[i],label+' custom landing '+i));
   pointsNear([copy(R.elevations(frame,p))],[elevations],label+' elevations');
   assert.deepEqual(copy(frame.cutoutFor),copy(r.cutoutFor),label+' cutout hosts');
   for(const key of ['surface','width','landingDepth','startZ','endZ','start','end','minHeadroom','hostRoom'])assert.deepEqual(copyValue(frame.routeStair[key]),copyValue(r.routeStair[key]),label+' '+key);
   r.routeStair.nodes.forEach((n,i)=>{for(const key of ['id','height','width','landingDepth'])assert.deepEqual(frame.routeStair.nodes[i][key],n[key],label+' node metadata '+key);});
   const nextPlan=copy(p);nextPlan.floors.L0.rooms=nextPlan.floors.L0.rooms.map(x=>x.id===r.id?frame:x);const next=R.build(nextPlan,'L0',r.id);
   assert.equal(next.flights.length,old.flights.length,label+' flights');assert.equal(next.landings.length,old.landings.length,label+' landings');
   old.flights.forEach((f,i)=>{pointsNear(next.flights[i].polygon,f.polygon,label+' flight polygon');pointsNear(next.flights[i].upPath,f.upPath,label+' flight path');near(next.flights[i].run,f.run,label+' run');near(next.flights[i].z0,f.z0,label+' flight bottom');near(next.flights[i].z1,f.z1,label+' flight top');});
   old.landings.forEach((l,i)=>pointsNear(next.landings[i].polygon,l.polygon,label+' landing polygon'));
   for(const p of [...geometry(old),...nodes]){const local=R.local(frame,p);assert(local.u>=-3e-6&&local.u<=1+3e-6&&local.v>=-3e-6&&local.v<=1+3e-6,label+' frame encloses every route surface and point');}
   return frame;
  }
  function copyValue(v){return v===undefined?undefined:copy(v);}
  function pointer(type,target,x,y,extra={}){const e=new w.Event(type,{bubbles:true,cancelable:true});Object.assign(e,{button:0,buttons:type==='pointerup'?0:1,pointerType:'mouse',pointerId:17,clientX:x,clientY:y,pageX:x,pageY:y,ctrlKey:true,...extra});target.dispatchEvent(e);return e;}
  const store=()=>Object.fromEntries(Array.from({length:w.localStorage.length},(_,i)=>{const k=w.localStorage.key(i);return[k,w.localStorage.getItem(k)];}));

  for(const surface of ['stairs','ramp']){
   await check(surface+': extended points update inspector, selection, dimensions and handles without rewriting the affine frame',()=>{
    const original=fixture(surface),before=copy(routePoints(route())),zs=copy(R.elevations(route(),plan()));
    run('KERN_ROUTE_UI.selectPoint(2)');change(field('node','x'),61);change(field('node','y'),49);
    const actual=routePoints(route());pointsNear(actual.slice(0,2),before.slice(0,2));pointsNear([actual[2]],[[61,49]]);pointsNear([R.elevations(route(),plan())],[zs]);
    for(const key of ['x','y','w','h','shape'])assert.deepEqual(route()[key],original[key],'point edits preserve the normalized storage frame');
    assert(!contains(original,actual[2]),'fixture endpoint is well outside the original stale box');assertDerived(surface+' extended point');
    assertFramePreserves(route(),plan(),surface+' edit frame');
   });
   await check(surface+': default and per-leg width, landing depth and custom outline expand and contract live bounds',()=>{
    fixture(surface,[[8,8],[8,38]]);const baseline=expectedBounds(),points=copy(routePoints(route()));
    change(field('route','width'),8);assert(expectedBounds().w>baseline.w+5,'wide route expands by actual flight geometry');assertDerived(surface+' default width');pointsNear(routePoints(route()),points,'width does not scale centerline');
    run('KERN_ROUTE_UI.selectPoint(0)');change(field('node','width'),12);assertDerived(surface+' leg width');assert(expectedBounds().w>baseline.w+9,'per-leg width included');
    change(field('node','landingDepth'),14);assertDerived(surface+' landing depth');assert(expectedBounds().y<baseline.y-5,'landing extension included');
    run(`commit(()=>{const r=room('path');r.routeStair.nodes[0].landing=[[1,-9],[15,-9],[15,15],[1,15]].map(p=>KERN_ROUTE_STAIRS.local(r,p));})`);
    assertDerived(surface+' custom landing');assert(expectedBounds().y<=-9,'custom outline outside the original frame included');assertFramePreserves(route(),plan(),surface+' custom frame');
    change(field('node','landingDepth'),1);assertDerived(surface+' reset landing');assert(expectedBounds().y>-9,'reset outline shrinks obsolete extent');
   });
   await check(surface+': inserting then removing an exterior point shrinks bounds and is one-step undoable',()=>{
    fixture(surface);run('KERN_ROUTE_UI.selectPoint(1)');const initial=snapshot();get('route-add-point').click();assert.equal(route().routeStair.nodes.length,4);assert.equal(run('history.length'),1);assertDerived(surface+' inserted midpoint');
    change(field('node','x'),73);change(field('node','y'),58);const wide=snapshot(),wideBounds=expectedBounds();assert(wideBounds.x+wideBounds.w>70);assertDerived(surface+' extended inserted point');
    const history=run('history.length');get('route-remove-point').click();assert.equal(route().routeStair.nodes.length,3);assert.equal(run('history.length'),history+1);assert(expectedBounds().x+expectedBounds().w<30);assertDerived(surface+' removed point');
    const removed=snapshot();run('undo()');assert.equal(snapshot(),wide);assertDerived(surface+' undo removal');run('redo()');assert.equal(snapshot(),removed);assertDerived(surface+' redo removal');run('undo();undo();undo();undo()');assert.equal(snapshot(),initial);
   });
   await check(surface+': oriented bounds remain rigid through arbitrary and quarter-turn rotations',()=>{
    fixture(surface);run(`commit(()=>{KERN_ROUTE_STAIRS.moveNode(room('path'),2,[61,49],model);room('path').routeStair.nodes[0].landing=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,y])=>KERN_ROUTE_STAIRS.local(room('path'),[8+x*3,8+y*2]));})`);
    const source=copy(route()),sourcePlan=copy(plan()),nodes=routePoints(source),zs=copy(R.elevations(source,sourcePlan)),pivot={x:-2.5,y:3.25},radians=37*Math.PI/180;
    const rotate=p=>[pivot.x+(p[0]-pivot.x)*Math.cos(radians)-(p[1]-pivot.y)*Math.sin(radians),pivot.y+(p[0]-pivot.x)*Math.sin(radians)+(p[1]-pivot.y)*Math.cos(radians)];
    run(`commit(()=>KERN_SHAPES.rotate(room('path'),37,${JSON.stringify(pivot)}))`);pointsNear(routePoints(route()),nodes.map(rotate),surface+' rigid rotation');pointsNear([R.elevations(route(),plan())],[zs]);assertDerived(surface+' 37 degree rotation');assertFramePreserves(route(),plan(),surface+' rotated frame');
    const rotated=snapshot();get('route-rotate-right').click();assertDerived(surface+' quarter turn');assertFramePreserves(route(),plan(),surface+' quarter-turn frame');run('undo()');assert.equal(snapshot(),rotated);assertDerived(surface+' undo rotation');
   });
   await check(surface+': live pointer preview updates bounds, cancellation restores exact data, commit is atomic',()=>{
    fixture(surface);const before=snapshot(),beforeStore=w.localStorage.getItem('kern-buildings-v1'),original=routePoints(route())[2];
    const start=()=>pointer('pointerdown',doc.querySelector('[data-stair-node="2"]'),...original);
    start();pointer('pointermove',get('plan'),69,56);assert(w.KERN_ROUTE_UI.dragging);assertDerived(surface+' pointer preview');assert.equal(run('history.length'),0);assert.equal(w.localStorage.getItem('kern-buildings-v1'),beforeStore,'preview never persists authored route');pointer('pointercancel',get('plan'),69,56);assert.equal(snapshot(),before);assert.equal(run('history.length'),0);assertDerived(surface+' canceled preview');
    start();pointer('pointermove',get('plan'),69,56);pointer('pointerup',get('plan'),69,56);assert.equal(run('history.length'),1);const committed=snapshot();assertDerived(surface+' committed point drag');run('undo()');assert.equal(snapshot(),before);assertDerived(surface+' undo drag');run('redo()');assert.equal(snapshot(),committed);assertDerived(surface+' redo drag');
   });
  }

  await check('Stair/Ramp conversion updates the live envelope without rescaling points, landings or stored frame',()=>{
   fixture('stairs',[[8,8],[8,38],[36,38]]);run(`commit(()=>{const r=room('path');r.routeStair.nodes[1].width=7;r.routeStair.nodes[1].landingDepth=9;KERN_ROUTE_STAIRS.moveNode(r,2,[62,49],model);});KERN_ROUTE_UI.selectPoint(2)`);
   const original=snapshot(),q=copy(route().routeStair),points=copy(routePoints(route())),box=expectedBounds(),history=run('history.length');
   change(field('route','surface'),'ramp');assert.equal(run('history.length'),history+1);const converted=copy(route().routeStair);converted.surface='stairs';assert.deepEqual(converted,q,'conversion changes only route surface');pointsNear(routePoints(route()),points);assertDerived('Stair to Ramp');assertFramePreserves(route(),plan(),'converted Ramp');assert.notDeepEqual(expectedBounds(),box,'surface-specific landing/flight envelope is recalculated');
   run('undo()');assert.equal(snapshot(),original);assertDerived('undo conversion');run('redo()');assertDerived('redo conversion');change(field('route','surface'),'stairs');assert.deepEqual(copy(route().routeStair),q);assertDerived('Ramp to Stair');
  });

  await check('bounds and editFrame derive from the supplied preview snapshot, never a stale same-id plan record',()=>{
   fixture('ramp');const before=snapshot(),original=copy(route()),preview=copy(original),p=plan();R.moveNode(preview,2,[79,64],p);preview.routeStair.width=12;
   const replaced=copy(p);replaced.floors.L0.rooms[0]=preview;const expected=pointBounds([...geometry(R.build(replaced,'L0','path')),...routePoints(preview)]);
   rectNear(R.bounds(preview,p),expected,'detached preview bounds');assert(expected.x+expected.w>78);assertFramePreserves(preview,replaced,'detached snapshot');
   const frame=R.editFrame(preview,p);pointsNear(routePoints(frame),routePoints(preview),'detached preview edit frame');rectNear(R.bounds(frame,p),expected,'reframed preview bounds');assert.equal(snapshot(),before,'preview queries never replace the actual same-id room');assert.deepEqual(copy(route()),original);
  });

  await check('mixed room group bounds and inspector dimensions include the complete edited route',()=>{
   fixture('ramp');run(`commit(()=>{KERN_ROUTE_STAIRS.moveNode(room('path'),2,[71,53],model);floor().rooms.push({id:'peer',name:'Peer room',type:'tech',x:-12,y:-7,w:4,h:6,z:0});});setSelection({rooms:['path','peer']});render()`);
   const before=snapshot(),b=R.bounds(route(),plan()),expected=pointBounds([[b.x,b.y],[b.x+b.w,b.y+b.h],[-12,-7],[-8,-1]]);
   rectNear(run('selectionBounds()'),expected,'mixed group selection');rectNear(L.selectedBounds(),expected,'mixed layer selection');rectNear(run('groupPlan().bounds'),expected,'mixed group edit origin');
   for(const key of ['x','y','w','h'])near(Number(doc.querySelector(`[data-groupkey="${key}"]`).value),expected[key],'mixed group inspector '+key);
   const box=doc.querySelector('[data-group-box]');assert(box);rectNear({x:Number(box.getAttribute('x')),y:Number(box.getAttribute('y')),w:Number(box.getAttribute('width')),h:Number(box.getAttribute('height'))},expected,'mixed visible group rectangle');assert.equal(snapshot(),before);
   run(`setSelection({rooms:['path']});render()`);assertDerived('return to single path');
  });

  await check('inspector envelope size is read-only while derived X/Y translates all geometry by the requested amount',()=>{
   fixture('ramp');run(`commit(()=>{KERN_ROUTE_STAIRS.moveNode(room('path'),2,[68,49],model);const r=room('path');r.routeStair.nodes[0].landing=[[5,5],[11,5],[11,11],[5,11]].map(p=>KERN_ROUTE_STAIRS.local(r,p));});history=[];future=[];render();save()`);
   const before=snapshot(),points=copy(routePoints(route())),landings=landingPoints(route()),b=expectedBounds();
   for(const key of ['w','h']){const input=doc.querySelector(`[data-key="${key}"]`);assert(input.disabled);change(input,Number(input.value)+7);assert.equal(snapshot(),before,'synthetic disabled '+key+' change cannot mutate authored route');assert.equal(run('history.length'),0);}
   change(doc.querySelector('[data-key="x"]'),b.x+3);pointsNear(routePoints(route()),points.map(p=>[p[0]+3,p[1]]),'derived inspector X translates centerline');landingPoints(route()).forEach((ps,i)=>pointsNear(ps,landings[i].map(p=>[p[0]+3,p[1]]),'derived inspector X translates custom outline'));assertDerived('inspector translated X');near(expectedBounds().x,b.x+3);assert.equal(run('history.length'),1);run('undo()');assert.equal(snapshot(),before);
   change(doc.querySelector('[data-key="y"]'),b.y-2);pointsNear(routePoints(route()),points.map(p=>[p[0],p[1]-2]),'derived inspector Y translates centerline');near(expectedBounds().y,b.y-2);assert.equal(run('history.length'),1);run('undo()');assert.equal(snapshot(),before);
  });

  await check('bulk position edits use route bounds, room sizes exclude paths, and route width remains editable',()=>{
   fixture('ramp');run(`commit(()=>KERN_ROUTE_STAIRS.moveNode(room('path'),2,[68,49],model));const rb=KERN_ROUTE_STAIRS.bounds(room('path'));floor().rooms.push({id:'peer',name:'Ordinary room',type:'tech',x:rb.x,y:rb.y,w:4,h:6,z:0});setSelection({rooms:['path','peer']});history=[];future=[];render();save()`);
   const B=w.KERN_BULK_PROPERTIES,b=expectedBounds(),before=snapshot(),original=copy(route()),points=copy(routePoints(route())),bulk=id=>doc.querySelector(`[data-bulk-property="${id}"]`);
   near(Number(bulk('rooms.x').value),b.x,'bulk common X uses route measurement');near(Number(bulk('rooms.y').value),b.y,'bulk common Y uses route measurement');
   for(const key of ['w','h'])assert.deepEqual(copy(B.fields().find(f=>f.id==='rooms.'+key).items.map(e=>e.ref.id)),['peer'],'ordinary room size has only its compatible subset');
   assert.equal(bulk('stairs.width').disabled,false,'path width is still editable');assert.equal(B.fields().find(f=>f.id==='stairs.width').items.length,1);
   assert(B.apply('rooms.x',b.x+3));pointsNear(routePoints(route()),points.map(p=>[p[0]+3,p[1]]),'bulk X translates route by measurement delta');near(expectedBounds().x,b.x+3);near(run("room('peer').x"),b.x+3);assert.equal(run('history.length'),1);run('undo()');assert.equal(snapshot(),before);
   assert(B.apply('rooms.y',b.y-2));pointsNear(routePoints(route()),points.map(p=>[p[0],p[1]-2]),'bulk Y translates route by measurement delta');near(expectedBounds().y,b.y-2);near(run("room('peer').y"),b.y-2);assert.equal(run('history.length'),1);run('undo()');assert.equal(snapshot(),before);
   assert(B.apply('rooms.w',10));assert(B.apply('rooms.h',11));assert.deepEqual(copy(route()),original,'room size edits never resize or reframe a path');assert.equal(run("room('peer').w"),10);assert.equal(run("room('peer').h"),11);const peer=copy(run("room('peer')"));assert(B.apply('stairs.width',9));assert.equal(route().routeStair.width,9);assert.deepEqual(copy(run("room('peer')")),peer,'route width edit does not affect ordinary room');pointsNear(routePoints(route()),points,'route width preserves centerline');
   run(`setSelection({rooms:['path']});render()`);assert(!B.fields().some(f=>['rooms.w','rooms.h'].includes(f.id)),'route-only bulk API exposes no generic envelope resizing');assertDerived('bulk width route');
  });

  await check('2D derived-frame resizing has no start jump, no-op mutation or extra undo; cancellation is exact',()=>{
   fixture('ramp',[[8,8],[8,38]]);run(`commit(()=>{KERN_ROUTE_STAIRS.moveNode(room('path'),1,[8,68],model);room('path').routeStair.width=8;});setSnapSize(0);history=[];future=[];render();save()`);
   const before=snapshot(),points=copy(routePoints(route())),base=R.editFrame(route(),plan()),se=S.raw(base)[2],target=()=>doc.querySelector('[data-handle="path"][data-edge="se"]');
   const down=()=>{pointer('pointerdown',target(),...se);assert.equal(run('drag?.edge'),'se','actual standard resize handler started');assert.equal(snapshot(),before,'pointerdown cannot rebase the authored model');pointsNear(routePoints(route()),points,'resize start is rigid');};
   down();pointer('pointerup',get('plan'),...se);assert.equal(snapshot(),before,'clicking a derived handle is not an edit');assert.equal(run('history.length'),0);
   down();pointer('pointermove',get('plan'),...se);pointsNear(routePoints(route()),points,'zero-distance preview does not jump');pointer('pointerup',get('plan'),...se);assert.equal(snapshot(),before,'zero-distance resize preserves exact normalized data');assert.equal(run('history.length'),0);
   const moved=[se[0]+2,se[1]+4],expected=points.map(p=>[base.x+(p[0]-base.x)*(base.w+2)/base.w,base.y+(p[1]-base.y)*(base.h+4)/base.h]);
   down();pointer('pointermove',get('plan'),...moved);pointsNear(routePoints(route()),expected,'resize uses live virtual-frame scale');pointer('pointercancel',get('plan'),...moved);assert.equal(snapshot(),before,'cancel restores original storage frame');assert.equal(run('history.length'),0);
   down();pointer('pointermove',get('plan'),...moved);pointer('pointerup',get('plan'),...moved);pointsNear(routePoints(route()),expected,'committed derived-frame resize');assert.equal(run('history.length'),1);const resized=snapshot();assertDerived('resized derived frame');run('undo()');assert.equal(snapshot(),before);run('redo()');assert.equal(snapshot(),resized);assertDerived('redo derived-frame resize');
  });

  await check('point hit testing and marquee use the extended path, rather than the obsolete frame',()=>{
   fixture('ramp',[[8,8],[8,38]]);run('KERN_ROUTE_UI.selectPoint(1)');change(field('node','x'),63);change(field('node','y'),48);change(field('route','width'),8);const f=detail().flights[0],hit=[(f.upPath[0][0]+f.upPath[1][0])/2,(f.upPath[0][1]+f.upPath[1][1])/2];
   assert(R.contains(plan(),'L0','path',{x:hit[0],y:hit[1]}));assert.equal(run(`roomAt({x:${hit[0]},y:${hit[1]}})?.id`),'path');assert.equal(run('roomAt({x:9,y:35})?.id'),undefined,'old-frame empty space is not pickable');
   const b=expectedBounds(),p=routePoints(route()).at(-1),d={start:{x:p[0]-1,y:p[1]-1},current:{x:p[0]+1,y:p[1]+1},previousSelection:{rooms:[],doors:[]}};
   assert(run(`marqueeSelection(${JSON.stringify(d)}).rooms.includes('path')`),'marquee reaches extension beyond the original frame');
   const polygons=[...doc.querySelectorAll('[data-room="path"].stair-hit polygon')].map(p=>p.getAttribute('points').trim().split(/\s+/).map(p=>p.split(',').map(Number)));
   rectNear(pointBounds(polygons.flat()),pointBounds(geometry(detail())),'actual SVG hit-target polygons');assert(b.x+b.w>60);
  });

  await check('exported floor-sheet viewport contains the entire extended route without editing the plan',()=>{
   const before=snapshot(),history=run('history.length'),selection=run('JSON.stringify(getSelection())'),svg=w.BuildingExports.floorSheet('L0'),document=new w.DOMParser().parseFromString(svg,'image/svg+xml'),drawing=document.documentElement.querySelector('svg[viewBox]');assert(drawing,'export has a metric inner plan viewport');
   const [x,y,width,height]=drawing.getAttribute('viewBox').trim().split(/\s+/).map(Number),box={x,y,w:width,h:height};for(const p of [...geometry(detail()),...routePoints(route())])assert(contains(box,p),'extended route surface is inside the exported viewport');assert(box.x+box.w>60,'export does not stop at the original frame');assert.equal(snapshot(),before);assert.equal(run('history.length'),history);assert.equal(run('JSON.stringify(getSelection())'),selection);
  });

  await check('saved reload and validated import derive fresh bounds without changing normalized route data',()=>{
   const before=snapshot(),r=copy(route()),b=expectedBounds(),world=routePoints(route());run('save();validateImport(model)');assert.equal(snapshot(),before);
   const reload=boot(store());try{reload.w.KERN_WORKSPACE.openBuilding(reload.run('currentBuilding().id'));reload.run(`setSelection({rooms:['path']});render()`);assert.equal(reload.run('JSON.stringify(model)'),before);const rr=reload.run("room('path')"),rp=reload.run('model');assert.deepEqual(copy(rr),r);pointsNear(rr.routeStair.nodes.map(n=>reload.w.KERN_ROUTE_STAIRS.point(rr,n)),world);rectNear(reload.w.KERN_ROUTE_STAIRS.bounds(rr,rp),b,'reloaded bounds');rectNear(reload.run('selectionBounds()'),b,'reloaded selection');}finally{reload.close();}
   run(`importBuildings({format:'kern-building',schemaVersion:1,building:clone(currentBuilding())},'Dynamic route bounds import');setSelection({rooms:['path']});render()`);assert.equal(snapshot(),before);assertDerived('imported route');
  });

  await check('invalid short ramp keeps every point inside a finite live interaction frame',()=>{
   fixture('ramp',[[8,8],[8,38],[24,38]]);run(`commit(()=>{KERN_ROUTE_STAIRS.moveNode(room('path'),1,[62,47],model);KERN_ROUTE_STAIRS.moveNode(room('path'),2,[62.1,47],model);room('path').routeStair.nodes[1].landingDepth=20;room('path').routeStair.nodes[2].landingDepth=20;})`);
   assert(detail().warnings.some(w=>w.code==='short-leg'),'fixture really has an unusable short leg');const expected=expectedBounds();rectNear(R.bounds(route(),plan()),expected);assertFramePreserves(route(),plan(),'invalid route frame');for(const p of routePoints(route()))assert(contains(expected,p));assert(Object.values(expected).every(Number.isFinite));
  });

  // A real Three scene catches the screenshot regression: geometry beyond the
  // original room frame must have a matching wire box, resize handles and label.
  await check('3D selected route wireframe, corner handles and dimensions encompass the extended ramp',()=>{
   fixture('ramp',[[8,8],[8,38]]);run('KERN_ROUTE_UI.selectPoint(1)');change(field('node','x'),66);change(field('node','y'),52);change(field('route','width'),8);
   const before=snapshot(),expectedFrame=R.editFrame(route(),plan()),expectedCorners=copy(S.raw(expectedFrame));
   w.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});
   w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},strokeRect(){},fillText(){},measureText:s=>({width:s.length*20})});
   w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:1000,height:700});
   w.HTMLCanvasElement.prototype.setPointerCapture=()=>{};w.HTMLCanvasElement.prototype.hasPointerCapture=()=>false;w.HTMLCanvasElement.prototype.releasePointerCapture=()=>{};
   w.ResizeObserver=class{constructor(fn){this.fn=fn;}observe(){this.fn();}disconnect(){}};
   w.__TestRenderer=class{constructor(){this.domElement=doc.createElement('canvas');Object.defineProperties(this.domElement,{clientWidth:{value:1000},clientHeight:{value:700}});}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){this.loop=fn;if(fn)fn();}render(scene,camera){scene.updateMatrixWorld(true);current={scene,camera,renderer:this};}dispose(){}forceContextLoss(){}};
   const source=fs.readFileSync('src/preview3d.js','utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(');
   vm.runInContext(esbuild.buildSync({stdin:{contents:source,resolveDir:process.cwd(),sourcefile:'preview3d-route-bounds-test.js'},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text,t.dom.getInternalVMContext());
   const host=get('threeviewport');Object.defineProperties(host,{clientWidth:{value:1000},clientHeight:{value:700}});
   let edits=0;const data=w.BuildingPreviewGeometry.build(plan(),w.KERN_STAIR_DETAIL);mounted=w.Building3D.mount(host,data,{onRoomEdit:(...args)=>{edits++;w.KERN_EXPLORER.editRoom(...args);}});mounted.selectRoom('L0','path');current.renderer.loop?.();
   const editGroup=current.scene.children.find(g=>g.children?.some(c=>c.userData.edge==='route-node-1'));assert(editGroup,'real selected route handles exist');
   const outline=editGroup.children.find(c=>c.isLineLoop);assert(outline,'selected route has an outline');const position=outline.geometry.attributes.position,points=Array.from({length:position.count},(_,i)=>[position.getX(i),position.getZ(i)]);pointsNear(points,expectedCorners,'real 3D selection outline');
   for(const [i,edge]of ['nw','ne','se','sw'].entries()){const h=editGroup.children.find(c=>c.userData.edge===edge);assert(h,'3D '+edge+' handle');pointsNear([[h.position.x,h.position.z]],[expectedCorners[i]],'3D '+edge+' derived corner');}
   const f=w.KERN_TRANSFORM.frame(expectedFrame);assert.equal(host.querySelector('[data-selection-dimensions]').textContent,(f?.w??expectedFrame.w).toFixed(2)+' × '+(f?.h??expectedFrame.h).toFixed(2)+' m');
   const endpoint=editGroup.children.find(c=>c.userData.edge==='route-node-1');pointsNear([[endpoint.position.x,endpoint.position.z]],[[66,52]],'3D world endpoint survives interaction-frame derivation');assert.equal(snapshot(),before,'3D scene and selection never rewrite route data');
   const corner=editGroup.children.find(c=>c.userData.edge==='se'),cornerWorld=corner.position.clone(),canvas=host.querySelector('canvas');
   mounted.restoreViewState({...mounted.getViewState(),position:[cornerWorld.x+14,22,cornerWorld.z+16],target:[cornerWorld.x,0,cornerWorld.z],focused:'L0',visible:['L0'],gap:0});current.renderer.loop?.();
   const screen=p=>{current.camera.updateMatrixWorld(true);const q=p.clone().project(current.camera);return{x:(q.x+1)*500,y:(1-q.y)*350};};
   const ground=p=>{const direction=current.camera.position.clone().set(p.x/500-1,1-p.y/350,.5).unproject(current.camera).sub(current.camera.position).normalize();return current.camera.position.clone().addScaledVector(direction,-current.camera.position.y/direction.y);};
   const start=screen(cornerWorld),destination=screen(cornerWorld.clone().add(current.camera.position.clone().set(2,0,4))),a=ground(start),b=ground(destination),dx=b.x-a.x,dy=b.z-a.z,initialPoints=copy(routePoints(route())),initialHistory=run('history.length');
   const fire=(type,p)=>{const e=pointer(type,canvas,p.x,p.y);current.renderer.loop?.();return e;};
   const down=()=>{assert(fire('pointerdown',start).defaultPrevented,'3D corner really starts an edit');assert.equal(snapshot(),before,'3D pointerdown does not change stored geometry');};
   down();fire('pointerup',start);assert.equal(edits,0,'3D handle click is a no-op');assert.equal(snapshot(),before);
   down();fire('pointermove',start);fire('pointerup',start);assert.equal(edits,0,'3D zero-distance preview is a no-op');assert.equal(snapshot(),before);assert.equal(run('history.length'),initialHistory);
   down();fire('pointermove',destination);assert.equal(snapshot(),before,'3D handle resize preview is transient');fire('pointercancel',destination);assert.equal(edits,0);assert.equal(snapshot(),before,'3D canceled resize retains original authored frame');
   down();fire('pointermove',destination);const previewGroup=current.scene.children.find(g=>g.children?.some(c=>c.userData.edge==='route-node-1')),expectedPoints=initialPoints.map(p=>[expectedFrame.x+(p[0]-expectedFrame.x)*(expectedFrame.w+dx)/expectedFrame.w,expectedFrame.y+(p[1]-expectedFrame.y)*(expectedFrame.h+dy)/expectedFrame.h]);
   const previewPoints=initialPoints.map((p,i)=>{const h=previewGroup.children.find(c=>c.userData.edge==='route-node-'+i);return[h.position.x,h.position.z];});pointsNear(previewPoints,expectedPoints,'3D resize starts from live derived frame');fire('pointerup',destination);assert.equal(edits,1,'one committed 3D resize');assert.equal(run('history.length'),initialHistory+1);pointsNear(routePoints(route()),expectedPoints,'3D committed resize keeps virtual-frame geometry');const resized=snapshot();run('undo()');assert.equal(snapshot(),before,'3D resize undo restores original storage frame');run('redo()');assert.equal(snapshot(),resized,'3D resize redo restores exact committed data');
   mounted.dispose();mounted=null;
  });

  console.log(`PASS ${checks} dynamic route bounds groups: Stair/Ramp geometry, oriented frames, inspector/selection/hit targets, pointer preview/cancel, undo/redo, persistence/import and real 3D selection (GPU presentation mocked)`);
 }finally{mounted?.dispose();t.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
