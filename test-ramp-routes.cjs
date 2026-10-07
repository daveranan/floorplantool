'use strict';
const assert=require('node:assert/strict'),crypto=require('node:crypto');
const R=require('./dist/route-stairs'),S=require('./dist/room-shapes');
const close=(a,b,tolerance=3e-6)=>assert(Math.abs(a-b)<=tolerance,`${a} != ${b}`),clone=x=>JSON.parse(JSON.stringify(x));
const model=r=>({version:1,units:'metres',floors:{L0:{name:'Ground',z:0,clearHeight:4,rooms:[r],doors:[],entrances:[]},L1:{name:'Upper',z:3,clearHeight:4,rooms:[],doors:[],entrances:[]}}});
const fixture=(points,options={})=>{const r=R.create(points,{id:'ramp',surface:'ramp',width:8,startZ:0,endZ:3,...options}),plan=model(r);return{r,plan,build:()=>R.build(plan,'L0',r.id)};};
const area=geometry=>geometry.reduce((sum,p)=>sum+Math.abs(S.areaOf(p[0]))-p.slice(1).reduce((n,h)=>n+Math.abs(S.areaOf(h)),0),0);
function finite(value){if(typeof value==='number')assert(Number.isFinite(value),'derived value must be finite');else if(value&&typeof value==='object')Object.values(value).forEach(finite);}
function noOverlap(d){const surfaces=[...d.flights,...d.landings];for(let i=0;i<surfaces.length;i++)for(let j=i+1;j<surfaces.length;j++)assert(area(S.clip.intersection([[surfaces[i].polygon]],[[surfaces[j].polygon]]))<1e-6,`surfaces ${i}/${j} overlap`);}
let checks=0;function test(name,fn){fn();checks++;console.log('PASS '+name);}

test('legacy stairs remain byte-for-byte identical for straight, bent and wide descending routes',()=>{
 const cases=[
  [[[0,0],[0,8]],{width:1.5,startZ:0,endZ:3},'1eb7b6571aade8bf471f2183f636741e66655d6588ffb2299196210be5673f21'],
  [[[0,0],[4,0],[8,-4],[8,-9]],{width:1.5,startZ:-1,endZ:4},'f9fc6a1a7c1ee371207b2d36e55c8a38cd298a2b6f7ba6f3f1896d339292bc1a'],
  [[[0,0],[0,8],[8,8]],{width:8,startZ:3,endZ:-2},'308821366e1ae92f694dd90c0da2d3928adfa929175323b24667030f2c0ca9f0']
 ];
 for(const [points,options,hash]of cases){const r=R.create(points,{id:'legacy',...options}),plan={floors:{L0:{z:0,rooms:[r]},L1:{z:3,rooms:[]}}},before=JSON.stringify(R.build(plan,'L0','legacy'));assert.equal(crypto.createHash('sha256').update(before).digest('hex'),hash);r.routeStair.surface='stairs';assert.equal(JSON.stringify(R.build(plan,'L0','legacy')),before);}
});

test('surface enum, JSON persistence and safe continuous-flight contract',()=>{
 const {r,plan,build}=fixture([[0,0],[0,32]]);assert.equal(r.routeStair.surface,'ramp');assert.equal(R.validate(r.routeStair),true);assert.equal(R.validate({...r.routeStair,surface:'stairs'}),true);assert.equal(R.validate({...r.routeStair,surface:undefined}),true);
 for(const surface of ['Ramp','smooth',null,1])assert.throws(()=>R.validate({...r.routeStair,surface}),/surface/);
 for(const [key,value]of [['width',-.2],['width',21],['landingDepth',0]]){const invalid=clone(r.routeStair);invalid.nodes[0][key]=value;assert.throws(()=>R.validate(invalid),/Ramp/);}
 const saved=JSON.stringify(plan),d=build();assert.equal(JSON.stringify(plan),saved);assert.deepEqual(R.build(clone(plan),'L0','ramp'),d);assert.equal(d.surface,'ramp');assert.equal(d.ramp,true);assert.equal(d.fit,true);assert.equal(d.flights.length,1);const f=d.flights[0];assert.equal(f.ramp,true);assert.deepEqual(f.treads,[]);assert.equal(f.risers,0);assert.equal(f.riserHeight,0);assert.equal(f.treadDepth,0);assert.equal(f.surface.thickness,.18);assert.deepEqual(f.surface.upPath,f.upPath);close(f.run,31.4);close(f.gradePercent,300/31.4);assert(!d.warnings.length);finite(d);noOverlap(d);
});

test('endpoint aprons remain shallow at 8 m width, including converted legacy routes',()=>{
 const {r,build}=fixture([[0,0],[0,32]],{width:1.5});const before=build();r.routeStair.width=8;r.routeStair.landingDepth=8;const d=build();assert.deepEqual(d.flights[0].upPath,before.flights[0].upPath);close(d.flights[0].clearWidth,8);for(const l of d.landings){close(l.depth,.6);close(l.rect.w,8);close(l.rect.h,.6);}r.routeStair.nodes[0].landingDepth=2;close(build().landings[0].depth,2);close(build().flights[0].run,30.7);
});

test('8 m quarter-turns produce full 8×8 squares with flush edges in every direction',()=>{
 for(const points of [[[0,0],[0,24],[24,24]],[[0,0],[24,0],[24,24]],[[0,0],[0,-24],[-24,-24]],[[0,0],[-24,0],[-24,24]]]){
  const {build}=fixture(points),d=build(),turn=d.landings[1];assert.equal(d.flights.length,2);assert.equal(turn.polygon.length,4);close(Math.abs(S.areaOf(turn.polygon)),64);close(turn.rect.w,8);close(turn.rect.h,8);assert.equal(d.footprintGeometry.length,1);assert(!d.warnings.length);noOverlap(d);
  for(const f of d.flights){const ending=f.toLanding===turn.id,p=ending?f.upPath[1]:f.upPath[0];assert(S.contains({x:p[0],y:p[1]},turn.polygon));close(ending?f.z1:f.z0,turn.z);close(Math.hypot(f.polygon[0][0]-f.polygon[3][0],f.polygon[0][1]-f.polygon[3][1]),8);}
 }
});

test('clockwise/counterclockwise, shallow/obtuse and rotated joins remain connected without overlap',()=>{
 for(const rotation of [0,20,45,90,145,180,-90])for(const angle of [0,5,30,45,60,89,90,120,135,150,-30,-45,-90,-135]){
  const a=rotation*Math.PI/180,b=(rotation+angle)*Math.PI/180,p=[40*Math.cos(a),40*Math.sin(a)],{build}=fixture([[0,0],p,[p[0]+40*Math.cos(b),p[1]+40*Math.sin(b)]]),d=build();assert.equal(d.flights.length,2,`${rotation}/${angle}`);assert(!d.warnings.length,`${rotation}/${angle}: ${JSON.stringify(d.warnings)}`);assert.equal(d.footprintGeometry.length,1);noOverlap(d);finite(d);
 }
});

test('per-flight width overrides join cleanly through full-width automatic turns',()=>{
 for(const widths of [[8,3],[3,8],[2,4],[4,2]])for(const angle of [0,5,30,45,90,135,150,-45,-90]){const a=angle*Math.PI/180,{r,build}=fixture([[0,0],[40,0],[40+40*Math.cos(a),40*Math.sin(a)]]);r.routeStair.nodes[0].width=widths[0];r.routeStair.nodes[1].width=widths[1];const d=build();assert.deepEqual(d.flights.map(f=>f.clearWidth),widths);close(d.landings[1].clearWidth,Math.max(...widths));assert(!d.warnings.length);noOverlap(d);}
});

test('custom landing outline is preserved, compatible edits work, incompatible edits warn without extrusions',()=>{
 const {r,build}=fixture([[0,0],[0,24],[24,24]]);r.routeStair.nodes[1].landing=build().landings[1].polygon.map(p=>R.local(r,p));const authored=r.routeStair.nodes[1].landing.map(n=>R.point(r,n)),saved=JSON.stringify(r);let d=build();assert.deepEqual(d.landings[1].polygon,authored);assert.equal(d.landings[1].custom,true);assert.equal(d.flights.length,2);assert.equal(JSON.stringify(r),saved);assert(!d.warnings.length);
 r.routeStair.nodes[1].landing=[[-1,23],[1,23],[1,25],[-1,25]].map(p=>R.local(r,p));d=build();assert.deepEqual(d.landings[1].polygon,r.routeStair.nodes[1].landing.map(n=>R.point(r,n)));assert(d.warnings.some(w=>w.code==='landing-width'));assert.equal(d.fit,false);assert.equal(d.flights.length,0);finite(d);
});

test('linked endpoints use actual room datums and offsets, including downward ramps',()=>{
 const {r,plan,build}=fixture([[0,0],[0,32]],{startZ:40,endZ:50,start:{kind:'room',floor:'L0',room:'garage',offset:.25},end:{kind:'room',floor:'L1',room:'drive',offset:-.1}});
 plan.floors.L0.rooms.unshift({id:'garage',type:'terrace',x:-5,y:-5,w:10,h:5,z:-2});plan.floors.L1.rooms.push({id:'drive',type:'terrace',x:-5,y:32,w:10,h:5,z:1});let d=build();close(d.landings[0].z,-1.75);close(d.landings[1].z,.9);assert.deepEqual(R.elevations(r,plan),[-1.75,.9]);assert.deepEqual(d.stops.map(s=>s.z),[-1.75,.9]);
 plan.floors.L0.rooms[0].z=4;plan.floors.L1.rooms[0].z=-3;d=build();const f=d.flights[0];close(d.landings[0].z,4.25);close(d.landings[1].z,-3.1);close(f.z0,-3.1);close(f.z1,4.25);assert.deepEqual(f.upPath[0],[0,31.7]);assert.equal(f.fromLanding,d.landings[1].id);assert(d.access.every(a=>a.valid));
 // Even stale legacy endpoint node heights cannot displace linked surfaces.
 r.routeStair.nodes[0].height=10;r.routeStair.nodes[1].height=-10;d=build();assert.deepEqual(R.elevations(r,plan),[4.25,-3.1]);assert.deepEqual(d.landings.map(l=>l.z),[4.25,-3.1]);
});

test('node editing, reverse, insertion-compatible heights and rotation preserve authored ramps',()=>{
 const {r,plan,build}=fixture([[0,0],[0,24],[24,24]]),zs=R.elevations(r,plan);R.moveNode(r,1,[2,24],plan);assert.deepEqual(R.elevations(r,plan),zs);R.setHeight(r,1,2,plan);assert.deepEqual(R.elevations(r,plan),[0,2,3]);R.reverse(r,plan);assert.deepEqual(R.elevations(r,plan),[3,1,0]);R.reverse(r,plan);const before=build(),pivot={x:r.x+r.w/2,y:r.y+r.h/2},angle=37*Math.PI/180,rotate=p=>[pivot.x+(p[0]-pivot.x)*Math.cos(angle)-(p[1]-pivot.y)*Math.sin(angle),pivot.y+(p[0]-pivot.x)*Math.sin(angle)+(p[1]-pivot.y)*Math.cos(angle)];assert(S.rotate(r,37,pivot));const d=build();assert.equal(d.flights.length,before.flights.length);assert(!d.warnings.length);before.flights.forEach((f,i)=>f.upPath.forEach((p,j)=>rotate(p).forEach((v,k)=>close(d.flights[i].upPath[j][k],v))));assert.deepEqual(R.elevations(r,plan),[0,2,3]);assert(R.removeNode(r,1,plan));assert.equal(r.routeStair.surface,'ramp');assert.deepEqual(R.elevations(r,plan),[0,3]);
});

test('grade warnings are advisory and level ramps never receive stair riser/tread errors',()=>{
 const normal=fixture([[0,0],[0,32]],{endZ:5}).build();assert(normal.fit);assert(!normal.warnings.some(w=>w.code==='ramp-grade'));
 const steep=fixture([[0,0],[0,10]],{endZ:4}).build();assert(steep.fit);assert.equal(steep.status,'conditional');assert(steep.warnings.some(w=>w.code==='ramp-grade'&&w.severity==='warning'));
 const level=fixture([[0,0],[0,10]],{startZ:2,endZ:2}).build();assert(level.fit);assert(!level.warnings.length);assert.equal(level.metrics.gradeMax,0);assert.equal(level.flights[0].rise,0);
 for(const d of [normal,steep,level]){assert(!d.warnings.some(w=>['footprint-length','zero-rise'].includes(w.code)));finite(d);}
});

test('short legs, coincident nodes and U-turns give finite, actionable warnings',()=>{
 for(const points of [[[0,0],[0,2],[2,2]],[[0,0],[0,0],[24,0]],[[0,0],[0,24],[0,0]]]){const d=fixture(points).build();assert(!d.fit);assert(d.warnings.some(w=>['short-leg','turn-clearance'].includes(w.code)));assert(d.flights.every(f=>f.run>.05));assert(d.warnings.every(w=>!/(NaN|Infinity)/.test(w.text)));finite(d);}
 const {r,build}=fixture([[0,0],[0,24]]);r.routeStair.nodes[0].u=NaN;const d=build();assert(d.warnings.some(w=>w.code==='invalid-route'));assert.equal(d.flights.length,0);finite(d);
});

test('crossing route clearance accounts for the upper slab underside',()=>{
 for(const [height,shouldFit]of [[2.3,false],[2.4,true]]){const {r,build}=fixture([[-20,0],[20,0],[20,20],[0,20],[0,-20]],{width:2,endZ:height});r.routeStair.nodes[1].height=0;r.routeStair.nodes[2].height=height;r.routeStair.nodes[3].height=height;const d=build();assert.equal(d.fit,shouldFit);assert.equal(d.warnings.some(w=>w.code==='turn-clearance'),!shouldFit);finite(d);}
});

test('linked-surface deletion gives an explicit warning rather than a stale connection',()=>{
 const {r,build}=fixture([[0,0],[0,24]],{start:{kind:'floor',floor:'missing'},end:{kind:'room',floor:'L0',room:'missing'}}),d=build();assert.equal(d.warnings.filter(w=>w.code==='missing-endpoint').length,2);assert(!d.fit);assert.equal(d.access.length,0);finite(d);R.validate(r.routeStair);
});
console.log(`${checks} ramp route geometry groups passed`);
