'use strict';
const assert=require('node:assert/strict'),C=require('./dist/crawlspaces'),S=require('./dist/room-shapes'),A=require('./dist/stair-author'),R=require('./dist/route-stairs'),P=require('./dist/primitives');
const clone=x=>JSON.parse(JSON.stringify(x)),near=(a,b)=>assert(Math.abs(a-b)<1e-6,`${a} != ${b}`),policy={envelopePolicy:{...C.DEFAULT_POLICY}};
const room=(id,x=0,y=0,w=10,h=10,extra={})=>({id,name:id,type:'tech',x,y,w,h,...extra});
const floor=(name,z,rooms=[],clearHeight=3)=>({name,z,clearHeight,rooms,doors:[],entrances:[]});
const fixture=(upper=3.3)=>({version:1,units:'metres',floors:{L0:floor('Ground',0,[room('ground')]),L1:floor('Upper',upper,[room('upper',0,0,10,10,{z:upper+.4,height:2.6})]),L2:floor('Roof',upper+4,[room('roof')])}});
const enable=(p,hostFloor='L0',clearHeight)=>C.propose(p,{action:'enable',hostFloor,clearHeight},policy);
const child=(p,host='L0')=>p.floors[C.children(p,host)[0]];
const assertOk=r=>assert(r.ok,JSON.stringify(r.issues.filter(i=>i.blocking)));
let checks=0;function test(name,fn){fn();checks++;console.log('PASS '+name);}
test('create empty child in one immutable proposal and raise only the necessary amount',()=>{
 const p=fixture(),saved=clone(p),r=enable(p);assertOk(r);assert.deepEqual(p,saved);assert.notEqual(r.plan,p);assert.equal(r.childFloorId,'L0-crawl');assert.equal(child(r.plan).z,3.3);assert.equal(child(r.plan).clearHeight,1.5);assert.deepEqual(child(r.plan).rooms,[]);assert.deepEqual(child(r.plan).crawlspace,{hostFloor:'L0',clearHeight:1.5,enabled:true});assert.deepEqual(r.shifts.map(s=>[s.floor,s.delta]),[['L1',1.8],['L2',1.8]]);near(r.plan.floors.L1.z,5.1);near(r.plan.floors.L1.rooms[0].z,5.5);assert.equal(r.plan.floors.L1.rooms[0].height,2.6);assert.equal(r.plan.floors.L0.z,0);assert.equal(r.envelope.area,100);
});
test('existing gap and top floor require no main-floor shifts',()=>{for(const [p,host]of [[fixture(6),'L0'],[fixture(),'L2']]){const r=enable(p,host);assertOk(r);assert.deepEqual(r.shifts,[]);for(const id of Object.keys(p.floors))assert.deepEqual(r.plan.floors[id],p.floors[id]);}});
test('enable is idempotent and removal never lowers the building',()=>{
 const r=enable(fixture());assertOk(r);const p=r.plan;assert.deepEqual(enable(p).plan,p);const q=C.propose(p,{action:'remove',hostFloor:'L0'});assertOk(q);assert.equal(C.children(q.plan,'L0').length,0);assert.equal(q.plan.floors.L1.z,p.floors.L1.z);
});
test('prototype disable/visibility actions and visibility options are rejected without mutation',()=>{
 const p=enable(fixture()).plan,saved=clone(p);for(const request of [{action:'disable'},{action:'visibility',hidden:true},{action:'visibility',hidden:false},{action:'height',clearHeight:3,hidden:true},{action:'enable',visible:false}]){const r=C.propose(p,{hostFloor:'L0',...request},policy);assert(!r.ok);assert(r.issues.some(i=>['invalid-action','invalid-visibility'].includes(i.code)));assert.deepEqual(r.plan,saved);assert.deepEqual(p,saved);assert.deepEqual(r.shifts,[]);}
});
test('authored child data survives repeated enable and removal is explicit',()=>{
 const p=enable(fixture()).plan;child(p).rooms.push(room('pocket',1,1,2,2));child(p).annotations=[{id:'label',text:'Keep me',x:2,y:2}];const saved=clone(child(p)),q=enable(p);assertOk(q);assert.deepEqual(child(q.plan).rooms,saved.rooms);assert.deepEqual(child(q.plan).annotations,saved.annotations);const removal=C.propose(q.plan,{action:'remove',hostFloor:'L0'});assert(!removal.ok);assert(removal.issues.some(i=>i.code==='authored-child-retained'));assert.deepEqual(removal.plan,q.plan);
});
test('changing clear height raises only additional needed space; decreasing retains datums',()=>{
 let p=enable(fixture()).plan;let q=C.propose(p,{action:'height',hostFloor:'L0',clearHeight:2.1},policy);assertOk(q);assert.equal(child(q.plan).clearHeight,2.1);assert(q.shifts.every(s=>s.delta===.6));p=q.plan;q=C.propose(p,{action:'height',hostFloor:'L0',clearHeight:1.1},policy);assertOk(q);assert.equal(child(q.plan).clearHeight,1.1);assert.deepEqual(q.shifts,[]);assert.equal(q.plan.floors.L1.z,p.floors.L1.z);
});
test('explicit refresh after reducing host height moves only its child and preserves authored offsets',()=>{
 const p=enable(fixture()).plan,id=C.children(p,'L0')[0],c=child(p);c.rooms.push(room('pocket',1,1,2,2,{z:c.z+.2,height:1}));c.services=[{id:'duct',kind:'duct',z:c.z+.6,width:.3,clearHeight:.3,points:[{x:1,y:1},{x:2,y:1}]}];p.floors.L0.clearHeight=2;
 const saved=clone(p),r=C.propose(p,{action:'refresh',hostFloor:'L0'},policy);assertOk(r);assert.deepEqual(p,saved);assert.deepEqual(r.shifts,[{floor:id,hostFloor:'L0',kind:'crawlspace',from:3.3,to:2.3,delta:-1}]);
 for(const [fid,f]of Object.entries(p.floors))if(fid!==id)assert.deepEqual(r.plan.floors[fid],f);
 near(child(r.plan).rooms[0].z-child(r.plan).z,.2);near(child(r.plan).services[0].z-child(r.plan).z,.6);assert.equal(child(r.plan).rooms[0].height,1);assert(!C.classifyMutation(p,r.plan,policy).mutations.some(m=>m.kind==='height-changed'));
});
test('host elevation proposals move owned values once and review the complete original baseline',()=>{
 let p=fixture(8);p.floors.L0.rooms[0].z=.25;p.floors.L0.rooms[0].height=2.75;p=A.prepare(p,{floorId:'L0',floors:['L0','L1'],name:'Stack',x:20,y:0,w:4,h:12,stairType:'switchback'}).plan;
 p.floors.L0.rooms.push(R.create([[1,1],[1,9]],{id:'route',startZ:0,endZ:8.4,start:{kind:'floor',floor:'L0'},end:{kind:'room',floor:'L1',room:'upper'}}));
 p.floors.L0.rooms.push(room('local',12,0,2,10,{localSteps:true,stairTransition:true,type:'terrace'}));p.splitLevelConnections=[{id:'local',floor:'L0',room:'local',localSteps:true,start:{kind:'floor',floor:'L0'},end:{kind:'floor',floor:'L1'},lowerZ:0,upperZ:8}];
 p.floors.L0.services=[{id:'duct',kind:'duct',z:.6,width:.3,clearHeight:.3,points:[{x:1,y:1},{x:2,y:1}]}];p.floors.L0.primitives=[P.create('cube','cube',{x:3,y:3,z:.4})];p.floors.L0.entrances=['ground'];p.walkStart={floor:'L0',anchorRoom:'ground',x:1,y:1,z:.4,yaw:0};p.siteGroundZ=0;p.overlooks=[{levels:['L0'],guardTop:1.35}];p.section=[{label:'L0 · Ground',z:0},{label:'Offset datum',source:{floor:'L0',room:'ground'},z:.25}];p=enable(p).plan;child(p).rooms.push(room('pocket',1,1,2,2,{z:child(p).z+.1,height:1}));
 const saved=clone(p),r=C.proposeHostHeight(p,{hostFloor:'L0',key:'z',value:1,name:'Raised ground'},policy);assertOk(r);assert.deepEqual(p,saved);assert.equal(r.action,'host-height');assert.equal(r.plan.floors.L0.name,'Raised ground');assert.deepEqual(r.shifts.map(s=>[s.floor,s.delta]),[['L0',1],['L0-crawl',1]]);near(r.plan.floors.L0.rooms[0].z,1.25);assert.equal(r.plan.floors.L0.rooms[0].height,2.75);near(r.plan.floors.L0.services[0].z,1.6);assert.deepEqual(r.plan.floors.L0.primitives,p.floors.L0.primitives);near(child(r.plan).rooms[0].z-child(r.plan).z,.1);near(r.plan.walkStart.z,1.4);near(r.walkStartShift,1);assert.equal(r.plan.siteGroundZ,0);near(r.plan.overlooks[0].guardTop,2.35);assert.deepEqual(r.plan.section.map(s=>s.z),[1,1.25]);assert(r.exterior.some(e=>e.floor==='L0'&&e.from===.25&&e.to===1.25));assert(r.issues.some(i=>i.code==='exterior-threshold-review'));assert.deepEqual(r.plan.floors.L1,p.floors.L1);assert.deepEqual(r.plan.floors.L2,p.floors.L2);
 near(r.plan.floors.L0.rooms.find(q=>q.id==='route').routeStair.startZ,1);near(r.plan.floors.L0.rooms.find(q=>q.id==='route').routeStair.endZ,8.4);near(r.plan.splitLevelConnections[0].lowerZ,1);near(r.plan.splitLevelConnections[0].upperZ,8);for(const kind of ['conventional','route','local'])assert(r.stairs.some(s=>s.after.kind===kind&&s.before&&s.after),kind);
});
test('host clear-height proposals reconcile implicit section heights and child-only downward shifts',()=>{
 const p=enable(fixture(8)).plan;p.operationsSection={source:{floor:'L0',room:'ground'},floor:0,clearTop:3,serviceTop:7.7,slabTop:8};child(p).rooms.push(room('pocket',1,1,2,2,{z:3.5,height:1}));const saved=clone(p),r=C.proposeHostHeight(p,{hostFloor:'L0',key:'clearHeight',value:2},policy);assertOk(r);assert.deepEqual(p,saved);assert.equal(r.plan.floors.L0.clearHeight,2);assert.deepEqual(r.shifts.map(s=>[s.floor,s.delta]),[['L0-crawl',-1]]);near(child(r.plan).rooms[0].z,2.5);near(r.plan.operationsSection.clearTop,2);near(r.plan.operationsSection.slabTop,8);assert(r.sections.some(s=>s.section==='operationsSection'&&s.before.clearTop===3&&s.after.clearTop===2));for(const fid of ['L0','L1','L2'])assert.equal(r.plan.floors[fid].z,p.floors[fid].z);
 const noChild=fixture(8),tall=C.proposeHostHeight(noChild,{hostFloor:'L0',key:'clearHeight',value:10},policy);assertOk(tall);assert.deepEqual(tall.shifts,[]);assert(tall.clearance.length,'Clearance changes are reviewed even without a floor shift');assert.equal(tall.childFloorId,null);assert.equal(Object.keys(tall.plan.floors).length,3);
});
test('host movement preserves original floor order and raises only the required upper group',()=>{
 const p=enable(enable(fixture(8),'L1').plan).plan,r=C.proposeHostHeight(p,{hostFloor:'L0',key:'z',value:10},policy);assertOk(r);near(r.plan.floors.L0.z,10);near(child(r.plan).z,13.3);near(r.plan.floors.L1.z,15.1);near(r.plan.floors.L1.z-p.floors.L1.z,7.1);near(r.plan.floors.L2.z-p.floors.L2.z,7.1);near(child(r.plan,'L1').z-child(p,'L1').z,7.1);assert(r.shifts.every(s=>s.delta>=0));
});
test('host proposals block ambiguous metadata and invalid values without mutating or partially repairing input',()=>{
 for(const key of ['z','clearHeight']){const p=enable(fixture(8)).plan;p.customSection={source:{floor:'L0',room:'ground'},floor:0,clearTop:3};const saved=clone(p),r=C.proposeHostHeight(p,{hostFloor:'L0',key,value:key==='z'?1:4},policy);assert(!r.ok);assert(r.issues.some(i=>i.code==='section-elevation-review'&&i.blocking));assert.deepEqual(r.plan,saved);assert.deepEqual(p,saved);}
 const p=enable(fixture(8)).plan;for(const request of [{key:'z',value:151},{key:'clearHeight',value:.4},{key:'z',value:NaN},{key:'unknown',value:2},{key:'z',value:1,name:''}]){const r=C.proposeHostHeight(p,{hostFloor:'L0',...request},policy);assert(!r.ok);assert.deepEqual(r.plan,p);}
 const high=clone(p);high.floors.L0.rooms[0].z=149.9;const r=C.proposeHostHeight(high,{hostFloor:'L0',key:'z',value:1},policy);assert(!r.ok);assert(r.issues.some(i=>i.code==='elevation-limit'));assert.deepEqual(r.plan,high);
});
test('neutral and name-only host proposals preserve datums, stored data and orphan validity',()=>{
 const p=enable(fixture(8)).plan;for(const [key,value]of [['z',0],['clearHeight',3]]){const neutral=C.proposeHostHeight(p,{hostFloor:'L0',key,value},policy);assertOk(neutral);assert(!neutral.changed);assert.deepEqual(neutral.plan,p);assert.deepEqual(neutral.shifts,[]);const named=C.proposeHostHeight(p,{hostFloor:'L0',key,value,name:'New ground name'},policy);assertOk(named);const expected=clone(p);expected.floors.L0.name='New ground name';assert.deepEqual(named.plan,expected);assert.deepEqual(named.shifts,[]);}
 p.floors.orphan=clone(child(p));p.floors.orphan.crawlspace.hostFloor='gone';const moved=C.proposeHostHeight(p,{hostFloor:'L0',key:'z',value:1},policy);assertOk(moved);assert.deepEqual(moved.plan.floors.orphan,p.floors.orphan);assert(moved.issues.some(i=>i.code==='orphan-child-retained'));
});
test('adjustable child heights report actual crouching limits without changing the default',()=>{
 assert.equal(C.DEFAULT_CLEAR,1.5);for(const [height,code]of [[1.22,'crawlspace-crouch-clearance'],[1.23,null],[1.5,null],[1.79,null],[1.8,'crawlspace-standing-clearance']]){const r=enable(fixture(8),'L0',height);assertOk(r);const warnings=r.issues.filter(i=>['crawlspace-crouch-clearance','crawlspace-standing-clearance'].includes(i.code));assert.equal(warnings.length,code?1:0);if(code){assert.equal(warnings[0].code,code);assert(!warnings[0].blocking);}}
});
test('independently enabled upper children follow their host',()=>{
 const p=enable(fixture(),'L1').plan;child(p,'L1').rooms.push(room('upper-pocket',1,1,2,2,{z:child(p,'L1').z}));const old=clone(p),q=enable(p);assertOk(q);near(child(q.plan,'L1').z-child(old,'L1').z,1.8);near(child(q.plan,'L1').rooms[0].z-child(old,'L1').rooms[0].z,1.8);assert.equal(child(q.plan,'L1').crawlspace.enabled,true);
});
test('envelope is polygon union minus actual void/tall/open-sky shapes, never the bounding rectangle',()=>{
 const p=fixture();p.floors.L0.rooms=[room('outer'),room('void',2,2,2,2,{type:'void'}),room('tall',6,0,4,10,{height:8})];const e=C.deriveEnvelope(p,'L0',policy);assert(e.complete);assert.equal(e.area,56);assert(e.geometry.some(poly=>poly.length===2));assert(e.masks.some(m=>m.reason==='tall-room'));const polygon=room('triangle',0,0,10,10,{shape:{vertices:[{id:'a',x:0,y:0},{id:'b',x:1,y:0},{id:'c',x:0,y:1}]}});p.floors.L0.rooms=[polygon];assert.equal(C.deriveEnvelope(p,'L0',policy).area,50);assert.deepEqual(polygon.shape.vertices[2],{id:'c',x:0,y:1});
});
test('policy is overrideable and missing choice is reported as provisional',()=>{
 const p=fixture();p.floors.L0.rooms[0].height=8;assert.equal(C.deriveEnvelope(p,'L0',policy).area,0);assert.equal(C.deriveEnvelope(p,'L0',{envelopePolicy:{excludeTallRooms:false}}).area,100);assert(C.deriveEnvelope(fixture(),'L0').issues.some(i=>i.code==='envelope-policy-preview'));
});
test('short ceilings stay eligible; ordinary solid support is explicit and intruding solid is excluded',()=>{
 const p=fixture();p.floors.L0.rooms[0].height=1.8;assert.equal(C.deriveEnvelope(p,'L0',policy).area,100);p.floors.L0.rooms[0].type='solid';assert.equal(C.deriveEnvelope(p,'L0',policy).area,0);assert.equal(C.deriveEnvelope(p,'L0',{envelopePolicy:{excludeSolids:false}}).area,100);p.floors.L0.rooms[0].height=5;assert.equal(C.deriveEnvelope(p,'L0',{envelopePolicy:{excludeSolids:false}}).area,0);
});
test('lower tall halls and open-sky courtyard project exclusion masks upward',()=>{
 const p=fixture();p.floors.B1=floor('Below',-4,[room('hall',0,0,3,10,{height:12}),room('sky',8,0,2,10,{type:'courtyard'})]);const e=C.deriveEnvelope(p,'L0',policy);assert.equal(e.area,50);assert(e.masks.some(m=>m.reason==='lower-tall-room'));assert(e.masks.some(m=>m.reason==='projected-open-sky'));
});
test('host shrink strands but preserves unchanged children; new/reshaped outside rooms are rejected',()=>{
 const p=enable(fixture()).plan;child(p).rooms.push(room('pocket',7,1,2,2));const smaller=clone(p);smaller.floors.L0.rooms[0].w=5;const kept=C.classifyMutation(p,smaller,policy);assert(kept.ok);assert(kept.issues.some(i=>i.code==='stranded-child'));assert.deepEqual(child(smaller).rooms,child(p).rooms);const moved=clone(smaller);child(moved).rooms[0].x=6;const bad=C.classifyMutation(smaller,moved,policy);assert(!bad.ok);assert(bad.issues.some(i=>i.code==='crawl-room-outside-envelope'));const added=clone(smaller);child(added).rooms.push(room('new',4,1,2,2));assert(!C.classifyMutation(smaller,added,policy).ok);const inside=clone(smaller);child(inside).rooms.push(room('inside',1,1,2,2));assert(C.classifyMutation(smaller,inside,policy).ok);const renamed=clone(smaller);child(renamed).rooms[0].name='Rename only';assert(C.classifyMutation(smaller,renamed,policy).ok);
});
test('host deletion retains orphaned authored rooms but rejects new orphan drawing',()=>{
 const p=enable(fixture()).plan;child(p).rooms.push(room('pocket',1,1,2,2));const q=clone(p);delete q.floors.L0;const r=C.classifyMutation(p,q,policy);assert(r.ok);assert(r.issues.some(i=>i.code==='orphan-child-retained'));child(q).rooms.push(room('new',2,2,2,2));assert(!C.classifyMutation(p,q,policy).ok);
});
test('retained orphan metadata remains save-valid but a new orphan or rehost is rejected',()=>{
 const p=enable(fixture()).plan,q=clone(p);delete q.floors.L0;assert(!C.validate(q).some(i=>i.blocking));assert(!C.propose(q,{action:'enable',hostFloor:'L0'},policy).ok);const newOrphan=clone(fixture());newOrphan.floors.orphan=clone(child(p));newOrphan.floors.orphan.crawlspace.hostFloor='missing';assert(!C.classifyMutation(fixture(),newOrphan,policy).ok);const rehost=clone(p);child(rehost).crawlspace.hostFloor='missing';assert(!C.classifyMutation(p,rehost,policy).ok);
});
test('neutral height/refresh/enable proposals preserve every authored field and expose separate diagnostics',()=>{
 const p=enable(fixture(8)).plan;child(p).clearHeight=child(p).crawlspace.clearHeight=1.50000001;child(p).rooms.push(room('stranded',12,0,2,2));for(const action of ['height','refresh','enable']){const r=C.propose(p,{action,hostFloor:'L0',clearHeight:child(p).clearHeight},policy);assertOk(r);assert.deepEqual(r.plan,p);assert.equal(r.changed,false);assert.deepEqual(r.movementIssues,[]);assert(r.strandedIssues.some(i=>i.code==='stranded-child'));}
});
test('shape edits that preserve area but cross boundary are rejected',()=>{
 const p=enable(fixture()).plan;child(p).rooms.push(room('pocket',8,1,2,2));const q=clone(p);child(q).rooms[0].x=9;assert(!C.classifyMutation(p,q,policy).ok);assert.deepEqual(C.classifyMutation(p,p,policy).mutations,[]);
});
test('new and explicitly height-edited crawl rooms must fit the full vertical band',()=>{
 const p=enable(fixture()).plan;
 for(const extra of [{height:3},{z:child(p).z+.5,height:1.5},{z:child(p).z-.1,height:1}]){const q=clone(p);child(q).rooms.push(room('new',1,1,2,2,extra));const r=C.classifyMutation(p,q,policy);assert(!r.ok);assert(r.issues.some(i=>i.code==='crawl-room-outside-height-band'));}
 child(p).rooms.push(room('existing',1,1,2,2,{height:1.2}));for(const change of [{height:2},{z:child(p).z+.5}]){const q=clone(p);Object.assign(child(q).rooms[0],change);assert(!C.classifyMutation(p,q,policy).ok);}
});
test('lowered child clear height retains old room conflicts; atomic floor movement is not a room edit',()=>{
 const p=enable(fixture()).plan;child(p).rooms.push(room('existing',1,1,2,2,{z:child(p).z,height:1.4}));const lower=clone(p);child(lower).clearHeight=child(lower).crawlspace.clearHeight=1;let r=C.classifyMutation(p,lower,policy);assert(r.ok);assert(r.issues.some(i=>i.code==='child-height-conflict'));const moved=clone(p);child(moved).z+=2;child(moved).rooms[0].z+=2;r=C.classifyMutation(p,moved,policy);assert(r.ok);assert(!r.mutations.some(m=>m.kind==='height-changed'));const implicit=clone(p);delete child(implicit).rooms[0].height;const implicitLower=clone(implicit);child(implicitLower).clearHeight=child(implicitLower).crawlspace.clearHeight=.8;r=C.classifyMutation(implicit,implicitLower,policy);assert(r.ok);assert(!r.mutations.some(m=>m.kind==='height-changed'));
});
test('absolute services and room offsets move; relative primitive geometry stays exact',()=>{
 const p=fixture();p.floors.L1.services=[{id:'route',kind:'duct',z:4,clearHeight:.5,width:.3,points:[{x:1,y:1},{x:2,y:1}]}];p.floors.L1.primitives=[P.create('cube','cube',{x:3,y:3,z:.6})];const original=clone(p.floors.L1.primitives),r=enable(p);assertOk(r);near(r.plan.floors.L1.services[0].z,5.8);assert.deepEqual(r.plan.floors.L1.primitives,original);assert.equal(r.plan.floors.L1.rooms[0].height,p.floors.L1.rooms[0].height);
});
test('linked route, legacy local and conventional stairs provide changed stops/risers',()=>{
 let p=fixture();p=A.prepare(p,{floorId:'L0',floors:['L0','L1'],name:'Stack',x:20,y:0,w:4,h:12,stairType:'switchback'}).plan;
 p.floors.L0.rooms.push(R.create([[1,1],[1,9]],{id:'route',startZ:0,endZ:3.7,start:{kind:'floor',floor:'L0'},end:{kind:'room',floor:'L1',room:'upper'}}));
 p.floors.L0.rooms.push(room('legacy-local',12,0,2,10,{localSteps:true,stairTransition:true,type:'terrace'}));p.splitLevelConnections=[{id:'local',floor:'L0',room:'legacy-local',localSteps:true,start:{kind:'floor',floor:'L0'},end:{kind:'floor',floor:'L1'},lowerZ:0,upperZ:3.3}];
 const r=enable(p);assertOk(r);near(r.plan.floors.L0.rooms.find(r=>r.id==='route').routeStair.endZ,5.5);near(r.plan.splitLevelConnections[0].upperZ,5.1);assert(r.stairs.some(s=>s.after.kind==='conventional'));assert(r.stairs.some(s=>s.after.kind==='route'));assert(r.stairs.some(s=>s.after.kind==='local'));assert(r.stairs.every(s=>s.before&&s.after));
});
test('unlinked route heights move with owner; relative node heights stay exact',()=>{
 const p=fixture();const route=R.create([[1,1],[1,5],[1,9]],{id:'free-route',startZ:3.3,endZ:6.3});route.routeStair.nodes[1].height=.75;p.floors.L1.rooms.push(route);const r=enable(p);assertOk(r);const q=r.plan.floors.L1.rooms.find(r=>r.id==='free-route').routeStair;near(q.startZ,5.1);near(q.endZ,8.1);assert.equal(q.nodes[1].height,.75);
});
test('unclear legacy local steps block an atomic move without partial state',()=>{
 const p=fixture();p.floors.L1.rooms.push(room('steps',12,0,2,10,{localSteps:true,stairTransition:true}));p.splitLevelConnections=[{id:'steps',floor:'L1',room:'steps',localSteps:true,lowerZ:3.3,upperZ:4.3}];const r=enable(p);assert(!r.ok);assert(r.issues.some(i=>i.code==='unlinked-local-step-shift'));assert.deepEqual(r.plan,p);assert(r.shifts.length);
});
test('unrelated stale stair metadata and site ground are not normalized',()=>{
 const p=fixture(8);p.siteGroundZ=17;p.floors.L0.rooms.push(R.create([[1,1],[1,9]],{id:'unrelated',startZ:2,endZ:3,start:{kind:'floor',floor:'L0'},end:{kind:'floor',floor:'L0'}}));const saved=clone(p);const r=enable(p);assertOk(r);for(const id of Object.keys(p.floors))assert.deepEqual(r.plan.floors[id],saved.floors[id]);assert.equal(r.plan.siteGroundZ,17);
});
test('walk start offsets are preserved for current and older saved anchor forms',()=>{
 for(const anchored of [true,false]){const p=fixture();p.walkStart={floor:'L1',anchorRoom:'upper',x:1,y:1,z:3.7,yaw:0,...(anchored?{baseZ:3.7}:{})};const r=enable(p);assertOk(r);if(anchored)assert.deepEqual(r.plan.walkStart,p.walkStart);else near(r.plan.walkStart.z,5.5);}
});
test('height/ID/floor count/elevation limits refuse without mutating the input',()=>{
 const p=fixture();for(const request of [{action:'enable',hostFloor:'L0',clearHeight:.1},{action:'enable',hostFloor:'L0',clearHeight:NaN},{action:'enable',hostFloor:'L0',floorId:'__proto__'},{action:'enable',hostFloor:'L0',floorId:'x'.repeat(21)}]){const r=C.propose(p,request);assert(!r.ok);assert.deepEqual(r.plan,p);}
 p.floors.L2.z=149.9;let r=enable(p);assert(!r.ok);assert(r.issues.some(i=>i.code==='elevation-limit'));assert.deepEqual(r.plan,p);
 const full=fixture();for(let i=0;Object.keys(full.floors).length<20;i++)full.floors['extra'+i]=floor('Extra',10+i*3);r=enable(full);assert(!r.ok);assert(r.issues.some(i=>i.code==='floor-limit'));
});
test('generated IDs remain safe at the 20-character boundary and resolve collisions',()=>{
 const p=fixture();p.floors.abcdefghijklmnopqrst=floor('Long',20,[room('room')]);p.floors['L0-crawl']=floor('Existing main',30);const a=enable(p,'abcdefghijklmnopqrst');assertOk(a);assert(a.childFloorId.length<=20);const b=enable(p);assertOk(b);assert.equal(b.childFloorId,'L0-crawl-2');
});
test('custom absolute section metadata blocks only affected unexplained references',()=>{
 const p=fixture();p.customSection={source:{floor:'L1',room:'upper'},floor:3.3,clearTop:6.3};const r=enable(p);assert(!r.ok);assert(r.issues.some(i=>i.code==='section-elevation-review'));assert.deepEqual(r.plan,p);p.customSection.source.floor='L0';assertOk(enable(p));
});
test('stock plan L0 proposal preserves tall hall, moves floor-owned cap and reconciles operations datums',()=>{
 const p=clone(require('./dist/kern-main-layout.json').building.plan),saved=clone(p),r=enable(p);assertOk(r);assert.deepEqual(p,saved);const oldRoom=p.floors.L0.rooms.find(r=>r.id==='control'),newRoom=r.plan.floors.L0.rooms.find(r=>r.id==='control');assert.deepEqual(oldRoom,newRoom);near(r.plan.floors.L2.z,11.9);near(r.plan.operationsSection.clearTop,oldRoom.height);near(r.plan.operationsSection.slabTop,11.9);near(r.plan.operationsSection.serviceTop,11.6);assert(r.issues.some(i=>i.code==='linked-cap-review'));assert(r.envelope.masks.some(m=>m.room==='control'));assert.equal(child(r.plan).rooms.length,0);
});
test('stock basement proposal reconciles garage/operations/courtyard without changing authored room heights',()=>{
 const p=clone(require('./dist/kern-main-layout.json').building.plan),r=enable(p,'B3');assertOk(r);const g=r.plan.floors.B1.rooms.find(r=>r.id==='garage');near(g.z,-9.5);assert.equal(g.height,8);near(r.plan.garageSection.floor,g.z);near(r.plan.garageSection.clearTop,g.z+8);near(r.plan.garageSection.slabTop,r.plan.floors.L0.z);near(r.plan.garageSection.serviceTop,r.plan.floors.L0.z-.3);near(r.plan.garageSection.belowFloorZ,r.plan.floors.B2.z);near(r.plan.courtyard.z,r.plan.floors.L0.z);near(r.plan.operationsSection.clearTop,(r.plan.floors.L0.rooms.find(r=>r.id==='control').z??r.plan.floors.L0.z)+p.floors.L0.rooms.find(r=>r.id==='control').height);
});
test('stock proposals preserve overlook guard height in real geometry exports and refresh section datums',()=>{
 const t=require('./test-support.cjs').boot(),geometry=p=>{t.w.__guardPlan=clone(p);return t.run('buildGeometry(window.__guardPlan)');};
 try{
 const p=clone(require('./dist/kern-main-layout.json').building.plan),before=geometry(p),guards=g=>g.levels.L1.wallSegments.filter(w=>w.kind==='guardwall'&&w.a[0]===18&&w.a[1]>=7&&w.b[1]<=10);
 assert(guards(before).length);for(const host of ['L0','B3']){const r=enable(p,host);assertOk(r);const d=r.plan.floors.L1.z-p.floors.L1.z;near(r.plan.overlooks[0].guardTop,p.overlooks[0].guardTop+d);const after=geometry(r.plan);assert.equal(guards(after).length,guards(before).length);guards(after).forEach((w,i)=>near(w.height,guards(before)[i].height));near(guards(after)[0].height,1.1);
  for(const row of r.plan.section){const fid=row.label.split(' ')[0];near(row.z,fid==='G'?r.plan.floors.B1.rooms.find(r=>r.id==='garage').z:r.plan.floors[fid].z);}
  assert.deepEqual(clone(after.section),r.plan.section);assert(r.sections.some(s=>s.section==='overlooks'));assert(r.sections.some(s=>s.section==='section'));
 }
 }finally{t.close();}
});
test('single-owner and uniformly moved overlook guards preserve offsets; ambiguous mixed owners block',()=>{
 for(const fields of [{levels:['L1']},{levels:['L1','L2']},{source:{floor:'L1',room:'upper'}}]){const p=fixture();p.overlooks=[{...fields,guardTop:6.1}];const r=enable(p);assertOk(r);near(r.plan.overlooks[0].guardTop,7.9);near(r.plan.overlooks[0].guardTop-r.plan.floors.L1.z,6.1-p.floors.L1.z);}
 const p=fixture();p.overlooks=[{levels:['L0','L1'],guardTop:4.4}];const r=enable(p);assert(!r.ok);assert(r.movementIssues.some(i=>i.code==='overlook-elevation-review'));assert.deepEqual(r.plan,p);
 const stock=clone(require('./dist/kern-main-layout.json').building.plan);stock.overlooks[0].fixed=100;const unclear=enable(stock);assert(!unclear.ok);assert(unclear.issues.some(i=>i.code==='overlook-elevation-review'));assert.deepEqual(unclear.plan,stock);
});
test('published Operations guard keeps its upper-floor owner after source footprint edits',()=>{
 const p=clone(require('./dist/kern-main-layout.json').building.plan);p.floors.L0.rooms.find(r=>r.id==='control').x+=40;const saved=clone(p),r=enable(p);assertOk(r);assert.deepEqual(p,saved);near(r.plan.overlooks[0].guardTop-r.plan.floors.L1.z,1.1);assert(r.issues.some(i=>i.code==='overlook-footprint-review'&&!i.blocking));
 for(const field of ['axis','fixed','lo','hi','levels'])assert.deepEqual(r.plan.overlooks[0][field],p.overlooks[0][field]);
 const again=C.propose(r.plan,{action:'height',hostFloor:'L0',clearHeight:2},policy);assertOk(again);near(again.plan.overlooks[0].guardTop-again.plan.floors.L1.z,1.1);assert(again.shifts.some(s=>s.floor==='L1'&&s.delta>0));
 for(const change of [q=>delete q.sourceUploadSha256,q=>q.overlooks[0].fixed=19,q=>q.overlooks[0].guardTop=7.5]){const custom=clone(p);change(custom);const blocked=enable(custom);assert(!blocked.ok);assert(blocked.issues.some(i=>i.code==='overlook-elevation-review'));assert.deepEqual(blocked.plan,custom);}
});
test('explicit section row owners preserve offsets and unresolved custom datums block affected proposals',()=>{
 const p=fixture();p.section=[{label:'Upper offset',floor:'L1',z:3.9},{label:'Upper source',source:{floor:'L1',room:'upper'},z:4},{label:'Ground fixed',level:'L0',z:.4}];const r=enable(p);assertOk(r);assert.deepEqual(r.plan.section.map(s=>s.z),[5.7,5.8,.4]);
 for(const row of [{label:'Unowned custom datum',z:3.3},{label:'Mixed datum',floor:'L1',source:{floor:'L0',room:'ground'},z:4},{label:'Missing datum',floor:'absent',z:4}]){const q=fixture();q.section=[row];const out=enable(q);assert(!out.ok);assert(out.issues.some(i=>i.code==='section-row-elevation-review'));assert.deepEqual(out.plan,q);}
 const neutral=fixture(8);neutral.section=[{label:'Unknown but unmoved',z:2}];assertOk(enable(neutral));
});
test('basement insertion flags raised exterior thresholds and keeps fixed site ground',()=>{
 const p=fixture();p.floors.B1=floor('Basement',-3.3,[room('basement')]);p.siteGroundZ=0;p.floors.L0.doors.push({id:'entry',a:'ground',b:'outside',side:'n',width:1,offset:.5,kind:'door'});p.floors.L0.entrances=['ground'];const r=enable(p,'B1');assertOk(r);assert.equal(r.plan.siteGroundZ,0);assert(r.issues.some(i=>i.code==='exterior-threshold-review'));assert.deepEqual(r.exterior,[{floor:'L0',room:'ground',from:0,to:1.8,siteGroundZ:0}]);assert(r.clearance.some(i=>i.text.includes('Outside entrance')));
});
test('failed clipping returns an explicit diagnostic and never replaces authored geometry',()=>{
 const p=fixture(),saved=clone(p),union=S.clip.union;S.clip.union=()=>{throw Error('Deliberate test failure');};try{const r=enable(p);assert(!r.ok);assert(r.issues.some(i=>i.code==='envelope-incomplete'));assert.deepEqual(r.plan,saved);assert.deepEqual(p,saved);}finally{S.clip.union=union;}
});
test('all stock host floors independently produce valid proposals',()=>{const p=require('./dist/kern-main-layout.json').building.plan;for(const id of Object.keys(p.floors)){const r=enable(p,id);assertOk(r);assert.equal(C.children(r.plan,id).length,1);}});
test('disabled or model-hidden child states are rejected explicitly without import normalization or growth',()=>{
 for(const state of [{enabled:false},{enabled:'true'},{enabled:null},{hidden:true},{hidden:false},{visible:true},{visible:false}]){const p=enable(fixture()).plan;Object.assign(child(p).crawlspace,state);const saved=clone(p);assert(C.validate(p).some(i=>i.code==='invalid-crawlspace-state'&&i.blocking));assert.deepEqual(p,saved);
  for(const action of ['enable','height','refresh','remove']){const r=C.propose(p,{action,hostFloor:'L0',clearHeight:10},policy);assert(!r.ok);assert(r.issues.some(i=>i.code==='invalid-crawlspace-state'&&i.blocking));assert.deepEqual(r.plan,saved);assert.deepEqual(r.shifts,[]);assert.deepEqual(p,saved);}assert(!C.classifyMutation(p,p,policy).ok);
 }
});
test('all supported approach, overlook, section and connection references prevent empty child removal',()=>{
 const cases=[
  ['approach level',(p,id)=>p.approaches=[{level:id}]],['approach floor',(p,id)=>p.approaches=[{floor:id}]],['approach source',(p,id)=>p.approaches=[{source:{floor:id,room:'saved'}}]],['approach linked source',(p,id)=>p.approaches=[{linkedSource:{floor:id,room:'saved'}}]],
  ['overlook levels',(p,id)=>p.overlooks=[{levels:[id],guardTop:5}]],['overlook source',(p,id)=>p.overlooks=[{source:{floor:id,room:'saved'},guardTop:5}]],
  ['section source',(p,id)=>p.customSection={source:{floor:id,room:'saved'}}],['section void',(p,id)=>p.customSection={voidLevel:id}],['section below',(p,id)=>p.customSection={belowFloor:id}],['section floor',(p,id)=>p.customSection={floor:id}],
  ['section row floor',(p,id)=>p.section=[{floor:id,z:3.3}]],['section row source',(p,id)=>p.section=[{source:{floor:id,room:'saved'},z:3.3}]],['section row label',(p,id)=>p.section=[{label:id+' · Crawl datum',z:3.3}]],
  ['walk start',(p,id)=>p.walkStart={floor:id,z:3.3,x:0,y:0,yaw:0}],['courtyard source',(p,id)=>p.courtyard={floor:'L0',source:{floor:id,room:'saved'}}],['passed floor',(p,id)=>p.verticalConnections=[{id:'lift',floors:['L0','L1'],passedFloors:[id]}]],['footprint key',(p,id)=>p.verticalConnections=[{id:'lift',floors:['L0','L1'],footprints:{[id]:{x:0,y:0,w:2,h:2}}}]],
  ['split level',(p,id)=>p.splitLevelConnections=[{id:'split',level:id}]],['split endpoint',(p,id)=>p.splitLevelConnections=[{id:'split',floor:'L0',end:{kind:'floor',floor:id}}]],
  ['stored source',(p,id)=>p.floors.L0.rooms[0].stairOriginal={linkedSource:{floor:id,room:'saved'}}],['route endpoint',(p,id)=>p.floors.L0.rooms[0].routeStair={start:{kind:'floor',floor:id}}]
 ];
 for(const [name,setup]of cases){const p=enable(fixture(8)).plan,id=C.children(p,'L0')[0];setup(p,id);const saved=clone(p),r=C.propose(p,{action:'remove',hostFloor:'L0'});assert(!r.ok,name);assert(r.issues.some(i=>i.code==='authored-child-retained'&&i.references.length),name);assert.deepEqual(r.plan,saved,name);assert.deepEqual(p,saved,name);}
});
console.log(`${checks} crawlspace model checks passed`);
