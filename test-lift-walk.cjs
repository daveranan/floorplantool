const assert=require('node:assert/strict');
const fs=require('node:fs');
const Lift=require('./dist/lift-walk.js'),Shapes=require('./dist/room-shapes.js'),Geometry=require('./dist/preview-geometry.js'),Stairs=require('./dist/stair-detail.js'),Walk=require('./dist/walkthrough.js');
const clone=value=>JSON.parse(JSON.stringify(value));
const freeze=value=>{if(value&&typeof value==='object'){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
const connection=plan=>plan.verticalConnections.find(c=>c.type==='lift');
const world=plan=>Walk.create(Geometry.build(plan,Stairs));
const at=(floor='L0',z=0,x=2,y=2)=>({floor,z,x,y});
function fixture(){return{floors:{L0:{name:'Ground',z:0,clearHeight:3,rooms:[{id:'freight',name:'Freight',type:'core',x:0,y:0,w:4,h:4}],doors:[]},L1:{name:'Upper',z:4,clearHeight:3,rooms:[{id:'freight',name:'Freight',type:'core',x:0,y:0,w:4,h:4}],doors:[]}},verticalConnections:[{id:'freight',type:'lift',room:'freight',floors:['L0','L1'],stops:[{floor:'L0',z:0},{floor:'L1',z:4}]}]};}
function safe(plan,c,floor,w){const before=JSON.stringify(plan),state=JSON.stringify(w.state),body=w.body,p=Lift.landing(plan,c,floor,w);assert(p,`${floor} has a safe landing`);assert.equal(p.floor,floor);const r=plan.floors[floor].rooms.find(r=>r.id===c.room);assert.equal(p.z,r.z??plan.floors[floor].z);assert(Shapes.contains(p,r));assert(!w.blocked(p));assert(w.heights(p).some(h=>h.floor===floor&&Math.abs(h.z-p.z)<1e-6));assert.equal(JSON.stringify(plan),before,'landing never mutates the model');assert.equal(JSON.stringify(w.state),state,'landing never teleports the walker');assert.equal(w.body,body,'landing never changes crouch');return p;}

// Real seed geometry: every authored freight stop is usable, the lower garage
// stop is not its floor datum, and the through-only L2 can never be activated.
const seed=freeze(JSON.parse(fs.readFileSync('dist/kern-floorplans-v12.json','utf8'))),seedBefore=JSON.stringify(seed),sw=world(seed),sc=connection(seed);
const seedStops=Lift.stops(seed,sc,sw,'L0');
assert.deepEqual(seedStops.map(s=>s.floor),['L3','L1','L0','B1','B2','B3']);
assert.equal(seedStops.find(s=>s.floor==='B1').z,-9.8);
assert.deepEqual(seedStops.filter(s=>s.current).map(s=>s.floor),['L0']);
assert(seedStops.every(s=>s.point&&!s.reason));
for(const stop of seedStops){const p=safe(seed,sc,stop.floor,sw),found=Lift.find(seed,p);assert.strictEqual(found.connection,sc);assert.equal(found.floor,stop.floor);assert.strictEqual(found.room,seed.floors[stop.floor].rooms.find(r=>r.id==='freight'));}
assert.equal(Lift.landing(seed,sc,'L2',sw),null);
assert.match(Lift.find(seed,at('L2',11.6,20,29)).reason,/no lift stop/i);
assert.equal(Lift.find(seed,at('B1',-5.8,20,29)),null);
assert.equal(JSON.stringify(seed),seedBefore,'seed remains exactly unchanged');

// Membership uses floor ID, live connection identity and current room geometry.
// Neither stale cached stops/footprints nor matching names reconnect a floor.
{
 const p=fixture(),c=connection(p),w=world(p);assert.strictEqual(Lift.find(p,at()).connection,c);
 assert.equal(Lift.find(p,at('missing')),null);assert.equal(Lift.find(p,{x:2,y:2,z:0}),null);
 assert.equal(Lift.find(p,at('L1',0)),null);assert.equal(Lift.find(p,at('L0',4)),null);
 assert.equal(Lift.find(p,at('L0',0,-.00001,2)),null);assert.equal(Lift.find(p,at('L0',0,0,2)),null);
 assert.equal(Lift.find(p,at('L0',0,4.00001,2)),null);assert.equal(Lift.find(p,at('L0',0,2,4.00001)),null);
 assert.equal(Lift.find(p,at('L0',.1)),null);
 c.floors=['L0'];c.footprints={L1:{x:0,y:0,w:4,h:4}};
 assert.equal(Lift.landing(p,c,'L1',w),null);assert.deepEqual(Lift.stops(p,c,w,'L0').map(s=>s.floor),['L0']);
 assert.equal(Lift.find(p,at('L1',4)).connection,null);assert.match(Lift.find(p,at('L1',4)).reason,/detached/i);
 p.verticalConnections=[];assert.equal(Lift.landing(p,c,'L0',w),null);assert.deepEqual(Lift.stops(p,c,w,'L0'),[]);assert.equal(Lift.find(p,at()).connection,null);
 p.verticalConnections=[clone(c)];assert.equal(Lift.landing(p,c,'L0',w),null,'stale replaced connection is rejected');
 const q=fixture(),qc=connection(q);qc.room='missing';assert.deepEqual(Lift.stops(q,qc,world(q),'L0'),[]);assert.equal(Lift.landing(q,qc,'L1',world(q)),null);
 delete q.floors.L1;assert.equal(Lift.landing(q,qc,'L1',world(q)),null);
 const removed=fixture(),rc=connection(removed),rw=world(removed);removed.floors.L1.rooms=[];assert.equal(Lift.landing(removed,rc,'L1',rw),null,'a cached world cannot restore a deleted room');delete removed.floors.L1;assert.equal(Lift.landing(removed,rc,'L1',rw),null,'a cached world cannot restore a deleted floor');
}

// An authored stops array is an allowlist; absent stops use only explicit floors.
{
 const p=fixture(),c=connection(p),w=world(p);c.stops=[{floor:'L0',z:999},{floor:'ghost',z:4}];assert.deepEqual(Lift.stops(p,c,w).map(s=>s.floor),['L0']);
 assert.equal(Lift.landing(p,c,'L1',w),null);c.stops=[];assert.deepEqual(Lift.stops(p,c,w),[]);
 c.stops=null;assert.deepEqual(Lift.stops(p,c,w),[]);delete c.stops;c.floors.push('L1','ghost');assert.deepEqual(Lift.stops(p,c,w).map(s=>s.floor),['L1','L0']);
 c.throughOnlyFloors=['L1'];assert.equal(Lift.landing(p,c,'L1',w),null);delete c.throughOnlyFloors;
 const r=p.floors.L1.rooms[0];for(const [key,value]of [['throughOnly',true],['access','no-floor-access'],['type','void'],['type','solid'],['type','courtyard']]){const old=r[key];r[key]=value;assert.equal(Lift.landing(p,c,'L1',w),null);assert(!Lift.stops(p,c,w).some(s=>s.floor==='L1'));if(old===undefined)delete r[key];else r[key]=old;}
}

// Multiple memberships and duplicate/overlapping lift rooms fail closed.
{
 const p=fixture(),c=connection(p),w=world(p);p.verticalConnections.push({...clone(c),id:'other'});assert.match(Lift.find(p,at()).reason,/ambiguous/i);assert.equal(Lift.find(p,at()).connection,null);assert.equal(Lift.landing(p,c,'L1',w),null);
 p.verticalConnections.pop();p.floors.L0.rooms.push(clone(p.floors.L0.rooms[0]));assert.match(Lift.find(p,at()).reason,/ambiguous/i);assert.equal(Lift.landing(p,c,'L0',w),null);
 p.floors.L0.rooms[1].id='second';p.verticalConnections.push({id:'second',type:'lift',room:'second',floors:['L0']});assert.match(Lift.find(p,at()).reason,/ambiguous/i);
}

// Floor datums and explicit local elevation stay distinct; cached stop heights
// and the first floor's XY footprint never control a moved destination.
{
 const p=fixture(),c=connection(p);p.floors.L1.z=7;c.stops[1].z=4;
 let w=world(p);assert.equal(safe(p,c,'L1',w).z,7);assert.equal(Lift.stops(p,c,w).find(s=>s.floor==='L1').z,7);
 p.floors.L1.rooms[0].z=8.2;p.floors.L1.z=6;w=world(p);assert.equal(safe(p,c,'L1',w).z,8.2);
 Object.assign(p.floors.L1.rooms[0],{x:30,y:-20});c.footprint={x:0,y:0,w:4,h:4};c.footprints={L1:{x:0,y:0,w:4,h:4}};w=world(p);
 const moved=safe(p,c,'L1',w);assert(moved.x>30&&moved.y<-16);assert.equal(Lift.find(p,at('L1',8.2)),null);assert.strictEqual(Lift.find(p,moved).connection,c);
 const overlap=fixture(),oc=connection(overlap);overlap.floors.L1.z=0;const ow=world(overlap);assert.equal(Lift.find(overlap,at('L0')).floor,'L0');assert.equal(Lift.find(overlap,at('L1')).floor,'L1');assert.equal(safe(overlap,oc,'L1',ow).floor,'L1','coincident XY and z still preserve the requested floor');ow.setState(safe(overlap,oc,'L1',ow));ow.move(0,0);assert.equal(ow.state.floor,'L1','next walking frame keeps coincident destination ownership');
}

// Rotated and concave outlines use the actual footprint; every part of the
// character must fit, including near diagonals and concave notches.
{
 const p=fixture(),c=connection(p),r=p.floors.L1.rooms[0];assert(Shapes.rotate(r,37));let w=world(p),q=safe(p,c,'L1',w);
 for(let i=0;i<64;i++)assert(Shapes.contains({x:q.x+w.radius*Math.cos(i*Math.PI/32),y:q.y+w.radius*Math.sin(i*Math.PI/32)},r));
 assert.equal(Lift.find(p,at('L1',4,r.x+.01,r.y+.01)),null,'bounding box corner is outside rotated lift');
 assert(Shapes.set(r,[[0,0],[6,0],[6,1.8],[1.8,1.8],[1.8,6],[0,6]],[]));w=world(p);q=safe(p,c,'L1',w);assert(!(q.x>1.8&&q.y>1.8));assert.equal(Lift.find(p,at('L1',4,3,3)),null);
 const narrow=fixture(),nr=narrow.floors.L1.rooms[0];nr.w=.59;assert.equal(Lift.landing(narrow,connection(narrow),'L1',world(narrow)),null,'body does not fit narrow footprint');
 nr.w=.600001;assert.equal(Lift.landing(narrow,connection(narrow),'L1',world(narrow)),null,'no boundary-only body fit');
}

// Arrivals use the world's actual collision cylinder and active body height.
// A blocked center can use another point inside this same destination room.
{
 const p=fixture(),c=connection(p),r=p.floors.L1.rooms[0];r.height=1.5;const w=world(p);assert.equal(w.body,1.8);assert.equal(Lift.landing(p,c,'L1',w),null);
 assert.equal(w.setCrouch(true),true);assert.equal(w.body,1.23);safe(p,c,'L1',w);assert.equal(w.body,1.23);
 r.height=1.1;assert.equal(Lift.landing(p,c,'L1',world(p)),null);
 const blocked=fixture(),bc=connection(blocked);blocked.floors.L1.rooms.push({id:'blocker',type:'solid',x:0,y:0,w:4,h:4,height:3});let bw=world(blocked);assert.equal(Lift.landing(blocked,bc,'L1',bw),null);const stop=Lift.stops(blocked,bc,bw).find(s=>s.floor==='L1');assert(stop&&!stop.point&&stop.reason);
 Object.assign(blocked.floors.L1.rooms[1],{x:1.5,y:1.5,w:1,h:1});bw=world(blocked);const q=safe(blocked,bc,'L1',bw);assert(Math.hypot(q.x-2,q.y-2)>.8,'blocked center is avoided');
 // Ceiling collision remains authoritative even with generous authored height.
 const overhead=fixture(),oc=connection(overhead),data=Geometry.build(overhead,Stairs);data.levels.find(l=>l.id==='L1').boxes.push({kind:'ceiling',x:0,y:0,w:4,h:4,z:5.1,height:.3});assert.equal(Lift.landing(overhead,oc,'L1',Walk.create(data)),null);
}

// Holes, voids and missing support cannot redirect to another floor, outside
// ground, a nearby room, or a slightly different surface elevation.
{
 const p=fixture(),c=connection(p);p.floors.L1.rooms.push({id:'hole',type:'void',x:0,y:0,w:4,h:4});assert.equal(Lift.landing(p,c,'L1',world(p)),null);
 const partial=fixture(),pc=connection(partial);partial.floors.L1.rooms.push({id:'hole',type:'void',x:1.95,y:0,w:.1,h:4});const pw=world(partial),q=safe(partial,pc,'L1',pw);assert(Math.abs(q.x-2)>.35,'entire radius clears a narrow void');
 const flat=fixture(),fc=connection(flat),data=Geometry.build(flat,Stairs),upper=data.levels.find(l=>l.id==='L1');upper.boxes=upper.boxes.filter(b=>b.kind!=='slab');upper.polygons=upper.polygons.filter(b=>b.kind!=='slab');assert.equal(Lift.landing(flat,fc,'L1',Walk.create(data)),null,'missing slab never uses lower-floor support');
 const supportedElsewhere=fixture(),ec=connection(supportedElsewhere);supportedElsewhere.floors.L1.rooms.push({id:'nearby',type:'terrace',x:5,y:0,w:10,h:10});const ed=Geometry.build(supportedElsewhere,Stairs),el=ed.levels.find(l=>l.id==='L1');el.boxes=el.boxes.filter(b=>b.kind!=='slab'||b.room!=='freight');assert.equal(Lift.landing(supportedElsewhere,ec,'L1',Walk.create(ed)),null,'nearby room is not a fallback');
 const stub={radius:.3,body:1.8,blocked:()=>false,supported:q=>q,heights:()=>[{floor:'L0',z:4}]};assert.equal(Lift.landing(flat,fc,'L1',stub),null,'same elevation on another floor cannot qualify');
 stub.heights=()=>[{floor:'L1',z:4.01}];assert.equal(Lift.landing(flat,fc,'L1',stub),null,'step-height tolerance does not qualify a different surface');
 stub.heights=()=>[{floor:'L1',z:4}];assert(Lift.landing(flat,fc,'L1',stub));
 let checked=0;stub.blocked=()=>{checked++;return true;};assert.equal(Lift.landing(flat,fc,'L1',stub),null);assert(checked>0&&checked<=219,'candidate search is bounded');
 assert.equal(Lift.landing(flat,fc,'L1',{}),null);
}

// Stop enabling and actual travel share the walker's highest-supported-surface rule.
{
 const p=fixture(),c=connection(p);p.floors.L1.rooms[0].z=5.6;p.floors.L1.rooms.push({id:'raised-overlay',name:'Raised platform',type:'circulation',x:0,y:0,w:4,h:4,z:5.8});const w=world(p);assert.equal(w.supported(at('L1',5.6)).z,5.8);assert.equal(Lift.landing(p,c,'L1',w),null);assert.equal(Lift.stops(p,c,w).find(s=>s.floor==='L1').point,null);
}

// All public queries are read-only, including failure paths and frozen inputs.
{
 const p=freeze(fixture()),c=connection(p),before=JSON.stringify(p),w=world(p),state=JSON.stringify(w.state);for(let i=0;i<3;i++){Lift.find(p,at());Lift.stops(p,c,w,'L0');Lift.landing(p,c,'L1',w);Lift.landing(p,c,'missing',w);}assert.equal(JSON.stringify(p),before);assert.equal(JSON.stringify(w.state),state);
}
console.log('PASS lift membership and stop allowlists, V12 no-stop L2 and dropped B1, live floor/local elevations, displaced rotated and concave footprints, full-radius clearance, body-aware headroom and collisions, holes and exact floor support, stale/ambiguous metadata, bounded arrivals, and unchanged plans/walker state');
