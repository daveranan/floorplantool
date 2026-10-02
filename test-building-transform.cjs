'use strict';
const assert=require('node:assert/strict');
const T=require('./dist/building-transform.js');
const repo='./dist/';
const S=require(repo+'room-shapes.js'),D=require(repo+'stair-detail.js'),R=require(repo+'route-stairs.js');
const geo={shapes:S,stairs:D};
let passed=0;
function test(name,fn){fn();passed++;console.log('PASS '+name);}
const room=(id,x=0,y=0,w=4,h=3,extra={})=>({id,name:id,type:'tech',x,y,w,h,...extra});
const floor=(rooms=[],z=0)=>({name:'Synthetic floor',z,clearHeight:3,rooms,doors:[],entrances:[]});
const plan=()=>({version:1,units:'metres',floors:{L0:floor(),L1:floor([],5),B1:floor([],-5)},siteGroundZ:0});
function near(a,b,eps=1e-7){assert(Math.abs(a-b)<eps,`${a} != ${b}`);}
function sameBox(a,b){for(const k of ['x','y','w','h'])near(a[k],b[k]);}
function freeze(o){if(o&&typeof o==='object'){Object.freeze(o);Object.values(o).forEach(v=>{if(v&&typeof v==='object'&&!Object.isFrozen(v))freeze(v);});}return o;}

test('empty bounds return null; floor selection and finite deltas validate',()=>{
 const p=plan();assert.equal(T.bounds(p,geo),null);assert.throws(()=>T.bounds(p,{floorIds:['missing']}),/no longer exists/);assert.throws(()=>T.translate(p,NaN,1),/finite/);assert.throws(()=>T.translateFloors(p,[],1,1),/at least one/);
});
test('all-floor and chosen-floor geometry have no camera padding',()=>{
 const p=plan();p.floors.L0.rooms.push(room('a',10,15,6,4));p.floors.L1.rooms.push(room('b',-4,-8,3,4));p.floors.B1.rooms.push(room('c',5,4,2,2));sameBox(T.bounds(p,geo),{x:-4,y:-8,w:20,h:27});sameBox(T.bounds(p,{...geo,floorIds:['L1']}),{x:-4,y:-8,w:3,h:4});
});
test('polygon bounds use actual contour, including rotated and chamfered geometry',()=>{
 const p=plan(),r=room('shape',0,0,20,20,{shape:{vertices:[{id:'a',x:.25,y:0,r:2,corner:'chamfer'},{id:'b',x:1,y:.5},{id:'c',x:.25,y:1},{id:'d',x:0,y:.5}]}});p.floors.L1.rooms.push(r);sameBox(T.bounds(p,geo),S.bounds(S.points(r)));assert(S.rotate(r,27));sameBox(T.bounds(p,geo),S.bounds(S.points(r)));assert.throws(()=>T.bounds(p),/Room-shape geometry/);
});
test('route bounds follow full flight and custom landing polygons, not padded room frame',()=>{
 const p=plan(),r=R.create([[4,3],[4,10],[11,13]],{id:'route',startZ:0,endZ:3,width:1.5});p.floors.L0.rooms.push(r);r.routeStair.nodes[1].landing=[[2,9],[5,9],[5,11],[2,11]].map(q=>R.local(r,q));assert(S.rotate(r,25));const detail=D.build(p,'L0','route'),expected=S.bounds([...detail.flights,...detail.landings].flatMap(q=>q.polygon)),actual=T.bounds(p,geo);sameBox(actual,expected);assert(Math.abs(actual.w-r.w)>1e-3||Math.abs(actual.h-r.h)>1e-3);sameBox(T.bounds(p),expected);
 const shifted=T.translate(p,8,-6),next=D.build(shifted,'L0','route');sameBox(T.bounds(shifted,geo),{x:actual.x+8,y:actual.y-6,w:actual.w,h:actual.h});assert.deepEqual(shifted.floors.L0.rooms[0].routeStair,r.routeStair);for(let i=0;i<detail.flights.length;i++){near(next.flights[i].polygon[0][0],detail.flights[i].polygon[0][0]+8);near(next.flights[i].polygon[0][1],detail.flights[i].polygon[0][1]-6);assert.equal(next.flights[i].z0,detail.flights[i].z0);}
});
test('local steps use actual generated flight/landing polygons',()=>{
 const p=plan();p.floors.L0.rooms.push(room('local',0,0,2,6,{localSteps:true,stairTransition:true,z:0}));p.splitLevelConnections=[{id:'local-link',floor:'L0',room:'local',localSteps:true,lowerZ:0,upperZ:1,runAxis:'y',landingEnd:'north',start:{kind:'site'},end:null}];const d=D.build(p,'L0','local');sameBox(T.bounds(p,geo),S.bounds([...d.flights,...d.landings].flatMap(q=>q.polygon)));const q=T.translate(p,-5,11);assert.deepEqual(q.splitLevelConnections,p.splitLevelConnections);near(T.bounds(q,geo).x,-5);near(T.bounds(q,geo).y,11);
});
test('rotated symbols and terminals use world AABB; text excluded unless requested',()=>{
 const p=plan();p.floors.L0.symbols=[{id:'s',x:0,y:0,w:4,h:2,rotation:45,rotationSpace:'intrinsic'}];p.floors.L1.services=[{id:'vent',kind:'vent',x:10,y:0,w:4,h:2,rotation:90}];p.floors.L1.annotations=[{text:'remote',x:100,y:100,fontSize:1}];const b=T.bounds(p,geo);near(b.x,2-3/Math.SQRT2);near(b.maxX,13);near(b.minY,1-3/Math.SQRT2);near(b.maxY,1+3/Math.SQRT2);assert(T.bounds(p,{...geo,includeAnnotations:true}).maxX>100);
 const only=plan();only.floors.L0.annotations=[{text:'AB',x:0,y:0,fontSize:1,rotation:90}];assert.equal(T.bounds(only),null);sameBox(T.bounds(only,{includeAnnotations:true,annotationBounds:()=>({x:-1,y:-1,w:2,h:1})}),{x:-.35,y:-1.35,w:1,h:2});
});
test('service routes use butt caps and actual miter joins, with no width padding at ends',()=>{
 const p=plan();p.floors.L0.services=[{id:'duct',points:[{x:0,y:0},{x:10,y:0},{x:10,y:10}],width:2}];sameBox(T.bounds(p),{x:0,y:-1,w:11,h:11});const q=T.translate(p,3,-2);assert.deepEqual(q.floors.L0.services[0].points,[{x:3,y:-2},{x:13,y:-2},{x:13,y:8}]);sameBox(T.bounds(q),{x:3,y:-3,w:11,h:11});
});
test('whole translation covers source and derived rooms, restore snapshots, all caches, site and annotations',()=>{
 const p=plan(),shape={vertices:[{id:'a',x:0,y:0},{id:'b',x:1,y:0},{id:'c',x:1,y:1},{id:'d',x:0,y:1}]};
 const source=room('source',1,2,6,5,{z:-1.25,height:8,locked:true,shape,zones:[{name:'Zone',x:2,y:3}],stairOriginal:room('restore',1,2,6,5,{z:-1.25,shape})});
 p.floors.L0.rooms=[source];p.floors.L1.rooms=[room('derived',1,2,6,5,{type:'void',locked:true,linkedSource:{floor:'L0',room:'source'},shape})];p.floors.B1.rooms=[room('shaft',1,2,4,8,{editGroup:'stack',stairStackId:'stack'})];p.floors.L0.rooms.push(room('shaft',1,2,4,8,{editGroup:'stack',stairStackId:'stack'}));
 p.floors.L0.doors=[{id:'door',a:'source',b:'shaft',width:1,offset:.25,edge:'a'}];p.floors.L0.externals=[{room:'source',side:'n',width:1,offset:.7}];p.floors.L0.entrances=['source'];p.floors.L1.annotations=[{text:'Legacy annotation',x:2,y:3}];p.floors.L1.symbols=[{id:'symbol',x:2,y:3,w:2,h:1,rotationSpace:'intrinsic',rotation:15}];p.floors.L0.services=[{id:'service',points:[{x:2,y:3},{x:5,y:6}],width:1,z:-.6,routeId:'same'}];
 const cache={x:1,y:2,w:4,h:8};p.verticalConnections=[{id:'stack',room:'shaft',type:'stair',floors:['B1','L0'],footprint:cache,footprints:{B1:cache,L0:{...cache}},stair:{flightCenterX:3,flightCenterY:4,flightWidth:1.4,floorOpening:{...cache}}}];
 p.splitLevelConnections=[{id:'split',floor:'L0',room:'local',footprint:{...cache},lowerZ:0,upperZ:1,route:['source','local'],stair:{flightCenterX:3}}];p.courtyard={x:20,y:20,w:6,h:4,z:-1,floor:'L0',shape};p.envelope={polygon:[[0,0],[30,0],[30,30],[0,30]],courtyardHole:[[20,20],[26,20],[26,24],[20,24]],note:'Preserve'};p.operationsSection={footprint:{...cache},lowerZ:-1,upperZ:6};p.overlooks=[{axis:'v',fixed:5,lo:1,hi:8,levels:['L0','L1'],guardTop:6},{axis:'h',fixed:5,lo:1,hi:8,levels:['L0'],guardTop:6}];p.approaches=[{id:'approach',level:'B1',width:2,start:[-10,5,0],end:[1,5,-5],points:[{x:-10,y:5,z:0},{x:1,y:5,z:-5}],branches:[[[0,5,0],[0,8,0]]]}];p.walkStart={floor:'L0',x:2,y:3,z:.1,yaw:1,floorZ:0,baseZ:0};p.unknownMetadata={x:99,y:100,shape:'Leave unrecognized metadata intact'};
 const before=JSON.stringify(p);freeze(p);const q=T.translate(p,7,-4);assert.equal(JSON.stringify(p),before);assert.deepEqual(T.translate(q,-7,4),p);assert.notEqual(q,p);assert.equal(q.floors.L0.rooms[0].x,8);assert.equal(q.floors.L1.rooms[0].x,8);assert.equal(q.floors.L0.rooms[0].stairOriginal.x,8);assert.equal(q.floors.L0.rooms[0].zones[0].y,-1);assert.deepEqual(q.floors.L0.rooms[0].shape,shape);assert.equal(q.verticalConnections[0].footprint.x,8);assert.equal(q.verticalConnections[0].footprints.B1.x,8);assert.strictEqual(q.verticalConnections[0].footprint,q.verticalConnections[0].footprints.B1);assert.equal(q.verticalConnections[0].stair.flightCenterX,10);assert.equal(q.verticalConnections[0].stair.flightCenterY,0);assert.deepEqual(q.overlooks.map(o=>[o.fixed,o.lo,o.hi]),[[12,-3,4],[1,8,15]]);assert.deepEqual(q.approaches[0].start,[-3,1,0]);assert.deepEqual(q.approaches[0].branches[0][1],[7,4,0]);assert.deepEqual(q.unknownMetadata,p.unknownMetadata);assert.deepEqual(q.floors.L0.doors,p.floors.L0.doors);assert.deepEqual(q.floors.L0.externals,p.floors.L0.externals);assert.deepEqual(q.splitLevelConnections[0].route,p.splitLevelConnections[0].route);assert.equal(q.siteGroundZ,0);assert.equal(q.walkStart.z,.1);
});
test('partial independent group preserves unselected floors and global geometry',()=>{
 const p=plan();p.floors.L0.rooms=[room('ground')];p.floors.L1.rooms=[room('upper',4,8)];p.floors.B1.rooms=[room('lower',6,9)];p.envelope={polygon:[[-10,-10],[30,-10],[30,30],[-10,30]]};p.walkStart={floor:'L1',x:4,y:8,z:5,yaw:0};p.approaches=[{level:'L1',start:[4,8,5],end:[8,9,0]},{level:'L0',start:[0,0,0],end:[1,1,0]}];p.splitLevelConnections=[{id:'cache',floor:'L1',room:'upper',footprint:{x:4,y:8,w:4,h:3},route:['upper']}];
 const q=T.translateFloors(p,['L1','B1'],2,-3);assert.deepEqual(q.floors.L0,p.floors.L0);assert.deepEqual(q.envelope,p.envelope);assert.equal(q.floors.L1.rooms[0].x,6);assert.equal(q.floors.B1.rooms[0].x,8);assert.equal(q.splitLevelConnections[0].footprint.y,5);assert.deepEqual(q.approaches[0].start,[6,5,5]);assert.deepEqual(q.approaches[1],p.approaches[1]);assert.equal(q.walkStart.x,6);
});
test('partial stack boundary blocks, even for zero delta, with transitive required floors',()=>{
 const p=plan();p.verticalConnections=[{id:'stair',type:'stair',room:'stair',floors:['L0','L1'],footprint:{x:1,y:2,w:4,h:8}}];p.floors.L1.rooms=[room('derived',0,0,4,3,{linkedSource:{floor:'B1',room:'base'}})];p.floors.B1.rooms=[room('base')];const before=JSON.stringify(p),a=T.analyzeFloorTranslation(p,['L0']);assert.equal(a.ok,false);assert.equal(a.code,'linked-floor-boundary');assert.deepEqual(a.requiredFloors,['L0','L1','B1']);assert.throws(()=>T.translateFloors(p,['L0'],0,0),e=>e.code==='linked-floor-boundary'&&/stair/.test(e.message));assert.equal(JSON.stringify(p),before);assert.deepEqual(T.translate(p,0,0),p);
});
test('complete linked sub-stack moves each participant and cache once',()=>{
 const p=plan();p.floors.L0.rooms=[room('stair')];p.floors.L1.rooms=[room('stair')];p.verticalConnections=[{id:'stair',type:'stair',room:'stair',floors:['L0','L1'],footprint:{x:0,y:0,w:4,h:3},footprints:{L0:{x:0,y:0,w:4,h:3},L1:{x:0,y:0,w:4,h:3}}}];const q=T.translateFloors(p,['L0','L1'],3,4);for(const fid of ['L0','L1']){assert.equal(q.floors[fid].rooms[0].x,3);assert.equal(q.verticalConnections[0].footprints[fid].x,3);}assert.equal(q.verticalConnections[0].footprint.x,3);assert.deepEqual(q.floors.B1,p.floors.B1);
});
test('legacy derived sources, route/local endpoints, and inferred stair groups block partial movement',()=>{
 for(const setup of [
  p=>{p.floors.L0.rooms=[room('court',0,0,4,3,{type:'courtyard'})];p.floors.L1.rooms=[room('sky',0,0,4,3,{type:'void',courtyardVoid:true})];},
  p=>{p.floors.L0.rooms=[room('control')];p.floors.L1.rooms=[room('void',0,0,4,3,{type:'void'})];},
  p=>{p.floors.L0.rooms=[R.create([[0,0],[8,0]],{start:{kind:'room',floor:'L0',room:'host'},end:{kind:'floor',floor:'L1'}})];},
  p=>{p.splitLevelConnections=[{id:'local',floor:'L0',localSteps:true,start:{kind:'room',floor:'L1',room:'host'}}];},
  p=>{p.floors.L0.rooms=[room('a',0,0,4,3,{editGroup:'group'})];p.floors.L1.rooms=[room('b',0,0,4,3,{editGroup:'group'})];}
 ]){const p=plan();setup(p);assert.equal(T.analyzeFloorTranslation(p,['L0']).ok,false);assert.equal(T.analyzeFloorTranslation(p,['L1']).ok,false);assert.doesNotThrow(()=>T.translateFloors(p,['L0','L1'],2,3));}
});
test('partial movement cannot orphan shared courtyard/section/overlook geometry',()=>{
 for(const setup of [p=>p.courtyard={floor:'L0',x:1,y:2,w:4,h:3},p=>p.operationsSection={footprint:{x:1,y:2,w:4,h:3}},p=>p.overlooks=[{axis:'h',fixed:0,lo:0,hi:1,levels:['L0']}]] ){const p=plan();setup(p);assert.equal(T.analyzeFloorTranslation(p,['L0']).code,'global-geometry-boundary');assert.doesNotThrow(()=>T.translateFloors(p,['L1'],1,1));assert.doesNotThrow(()=>T.translate(p,1,1));}
});
test('validation is atomic, six-decimal precision stays import-compatible, metadata remains unchanged',()=>{
 const p=plan();p.floors.L0.rooms=[room('a',1.123456,2.654321)];const before=JSON.stringify(p);assert.throws(()=>T.translate(p,200,0,{validate:q=>{if(q.floors.L0.rooms[0].x>150)throw Error('outside import limit');}}),/outside import limit/);assert.equal(JSON.stringify(p),before);const q=T.translate(p,.000001,.000001);assert.equal(q.floors.L0.rooms[0].x,1.123457);assert.equal(q.floors.L0.rooms[0].y,2.654322);assert.deepEqual(T.translate(q,-.000001,-.000001),p);
});
test('site bounds include real approaches/envelope but never stale cache or restoration metadata',()=>{
 const p=plan();p.floors.L0.rooms=[room('a',0,0,4,3,{stairOriginal:room('old',-100,-100)})];p.verticalConnections=[{type:'lift',room:'a',floors:['L0'],footprint:{x:-200,y:-200,w:4,h:3}}];p.envelope={polygon:[[-1,-1],[5,-1],[5,4],[-1,4]]};p.approaches=[{level:'L0',width:2,start:[-10,0,0],end:[0,0,0]}];sameBox(T.bounds(p,geo),{x:-10,y:-1,w:15,h:5});sameBox(T.bounds(p,{...geo,floorIds:['L0']}),{x:0,y:0,w:4,h:3});sameBox(T.bounds(p,{...geo,floorIds:['L0'],includeApproaches:true}),{x:-10,y:-1,w:14,h:4});
});


test('randomized synthetic route bounds and polygon points remain translation-equivariant',()=>{
 let seed=1927;const rand=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);
 for(let i=0;i<35;i++){const p=plan(),x=rand()*40-20,y=rand()*40-20,r=R.create([[x,y],[x+3+rand()*8,y+rand()*2],[x+8+rand()*8,y+6+rand()*8]],{id:'route',width:.8+rand(),startZ:-3,endZ:2});p.floors.L0.rooms=[r];assert(S.rotate(r,rand()*160-80));r.routeStair.nodes[1].height=2;const dx=Math.round((rand()*20-10)*1e6)/1e6,dy=Math.round((rand()*20-10)*1e6)/1e6,b=T.bounds(p,geo),q=T.translate(p,dx,dy),c=T.bounds(q,geo);sameBox(c,{x:b.x+dx,y:b.y+dy,w:b.w,h:b.h});assert.deepEqual(q.floors.L0.rooms[0].shape,r.shape);assert.deepEqual(q.floors.L0.rooms[0].routeStair,r.routeStair);}
});
test('shared room identity blocks partial mutation and zero movement preserves exact values',()=>{
 const p=plan(),r=room('shared',.12345600000000003,2);p.floors.L0.rooms=[r];p.floors.L1.rooms=[r];assert.equal(T.analyzeFloorTranslation(p,['L0']).ok,false);const q=T.translate(p,0,0);assert.deepEqual(q,p);assert.strictEqual(q.floors.L0.rooms[0],q.floors.L1.rooms[0]);const moved=T.translate(p,3,4);assert.equal(moved.floors.L0.rooms[0].y,6);assert.equal(moved.floors.L1.rooms[0].y,6);
});
console.log(`Final result: ${passed} cases passed, including 35 randomized route fixtures.`);
