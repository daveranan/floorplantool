'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const T=require(fs.existsSync(path.join(__dirname,'selection-transform.js'))?'./selection-transform.js':'./dist/selection-transform.js');
const repo=fs.existsSync(path.join(__dirname,'dist/building-transform.js'))?__dirname:path.resolve(__dirname,'../kern-planner');
const B=require(path.join(repo,'dist/building-transform.js')),S=require(path.join(repo,'dist/room-shapes.js')),R=require(path.join(repo,'dist/route-stairs.js')),D=require(path.join(repo,'dist/stair-detail.js'));
const ref=(floor,id,kind='rooms')=>({floor,kind,id}),room=(id,x=0,y=0,extra={})=>({id,name:id,type:'tech',x,y,w:4,h:3,...extra}),floor=(rooms=[],z=0)=>({name:'Floor',z,clearHeight:3,rooms,doors:[],entrances:[]}),plan=()=>({version:1,units:'metres',floors:{L0:floor(),L1:floor([],5),B1:floor([],-5)}});
const get=(p,f,id)=>p.floors[f].rooms.find(r=>r.id===id),near=(a,b)=>assert(Math.abs(a-b)<1e-6,`${a} != ${b}`),freeze=o=>{if(o&&typeof o==='object'&&!Object.isFrozen(o)){Object.freeze(o);Object.values(o).forEach(freeze);}return o;};
let passed=0;function test(name,fn){fn();passed++;console.log('PASS '+name);}

test('refs are floor-qualified, deduplicated and collision-free',()=>{
 const p=plan();p.floors.L0.rooms=[room('same')];p.floors.L1.rooms=[room('same',20,30)];p.floors.L1.symbols=[{id:'same',x:1,y:1,w:1,h:1}];
 const refs=[ref('L0','same'),ref('L1','same','symbols'),ref('L0','same')],a=T.analyze(p,refs);assert.equal(a.refs.length,2);assert.equal(T.key(ref('a:b','c')),T.key(ref('a:b','c')));assert.notEqual(T.key(ref('a:b','c')),T.key(ref('a','b:c')));
 const q=T.translate(p,refs,4,7).plan;assert.equal(get(q,'L0','same').x,4);assert.equal(get(q,'L1','same').x,20);assert.equal(q.floors.L1.symbols[0].x,5);
 assert.throws(()=>T.translate(p,[{id:'same'}],1,0),e=>e.code==='invalid-ref');assert.throws(()=>T.translate(p,[ref('L9','same')],1,0),e=>e.code==='missing-object');assert.throws(()=>T.translate(p,[],1,0),e=>e.code==='empty-selection');assert.throws(()=>T.translate(p,refs,Infinity,0),e=>e.code==='invalid-translation');
});
test('selected room and extras leave disconnected structures and all elevations intact',()=>{
 const p=plan();p.floors.L0.rooms=[room('moving',2,3,{z:-1,height:7}),room('island',50,50)];p.floors.L1.rooms=[room('moving',2,3)];p.floors.L1.services=[{id:'duct',points:[{x:1,y:2,z:9},{x:4,y:2,z:9}],width:.5,z:9}];p.floors.B1.annotations=[{id:'note',x:10,y:10,text:'Keep z',fontSize:.3}];p.siteGroundZ=0;p.envelope={polygon:[[-10,-10],[80,-10],[80,80],[-10,80]]};p.walkStart={floor:'L0',x:3,y:3,z:1,yaw:0};p.approaches=[{floor:'L0',start:[0,0,0],end:[3,3,0]}];
 const q=T.translate(p,[ref('L0','moving'),ref('L1','duct','services'),ref('B1','note','annotations')],5,-2).plan;assert.deepEqual(get(q,'L0','island'),get(p,'L0','island'));assert.deepEqual(q.floors.L1.rooms,p.floors.L1.rooms);assert.deepEqual(q.envelope,p.envelope);assert.deepEqual(q.walkStart,p.walkStart);assert.deepEqual(q.approaches,p.approaches);assert.equal(q.siteGroundZ,0);assert.equal(get(q,'L0','moving').z,-1);assert.equal(get(q,'L0','moving').height,7);assert.equal(q.floors.L1.services[0].points[0].z,9);assert.equal(q.floors.B1.z,-5);
});
test('linked stairs close across floors and move shared caches exactly once',()=>{
 const p=plan(),cache={x:2,y:3,w:4,h:6};for(const fid of ['L0','L1'])p.floors[fid].rooms=[room('stairs',2,3,{h:6,editGroup:'stack',stairStackId:'stack',stairOriginal:room('stairs',2,3)}),room('island',80,80)];
 p.verticalConnections=[{id:'stack',type:'stair',room:'stairs',floors:['L0','L1'],footprint:cache,footprints:{L0:cache,L1:{...cache}},stair:{flightCenterX:3,flightCenterY:4,floorOpening:cache},z0:0,z1:5}];
 const a=T.analyze(p,[ref('L0','stairs')]);assert.deepEqual(a.refs.map(r=>r.floor),['L0','L1']);assert.equal(a.added[0].ref.id,'stairs');assert.equal(a.coupled[0].role,'vertical-connection');
 const q=T.translate(p,[ref('L0','stairs')],3,-1).plan;for(const fid of ['L0','L1']){assert.equal(get(q,fid,'stairs').x,5);assert.equal(get(q,fid,'stairs').stairOriginal.x,5);assert.deepEqual(get(q,fid,'island'),get(p,fid,'island'));}assert.equal(q.verticalConnections[0].footprint.x,5);assert.strictEqual(q.verticalConnections[0].footprint,q.verticalConnections[0].footprints.L0);assert.equal(q.verticalConnections[0].stair.flightCenterY,3);assert.equal(q.verticalConnections[0].z1,5);
});
test('missing linked stack member is an explicit blocker',()=>{
 const p=plan();p.floors.L0.rooms=[room('stairs')];p.verticalConnections=[{id:'stack',room:'stairs',floors:['L0','L1']}];assert.equal(T.analyze(p,[ref('L0','stairs')]).code,'missing-object');assert.throws(()=>T.translate(p,[ref('L0','stairs')],0,0),e=>e.code==='missing-object');
});
test('source and generated footprints are bidirectional; independent concrete caps stay independent',()=>{
 const p=plan();p.floors.L0.rooms=[room('control',1,2)];p.floors.L1.rooms=[room('void',1,2,{type:'void'}),room('opsroof',1,2,{type:'solid',sealedConcrete:true,independentCap:true}),room('derived',1,2,{linkedSource:{floor:'L0',room:'control'},locked:true})];
 const a=T.analyze(p,[ref('L1','derived')]);assert(a.refs.some(r=>r.floor==='L0'&&r.id==='control'));assert(a.refs.some(r=>r.id==='void'));assert(!a.refs.some(r=>r.id==='opsroof'));
 const q=T.translate(p,[ref('L1','derived')],6,7).plan;assert.equal(get(q,'L0','control').x,7);assert.equal(get(q,'L1','void').x,7);assert.equal(get(q,'L1','opsroof').x,1);assert.equal(get(q,'L1','derived').locked,true);
 delete get(p,'L1','opsroof').independentCap;assert(T.analyze(p,[ref('L0','control')]).refs.some(r=>r.id==='opsroof'));
});
test('route local coordinates, site/floor endpoints and effective heights remain unchanged',()=>{
 const p=plan(),r=R.create([[2,3],[2,9],[8,11]],{id:'route',startZ:0,endZ:5});r.routeStair.start={kind:'site',offset:.2};r.routeStair.end={kind:'floor',floor:'L1',offset:.3};r.routeStair.nodes[1].landing=[{u:.2,v:.3},{u:.4,v:.3},{u:.4,v:.5},{u:.2,v:.5}];assert(S.rotate(r,23));p.floors.L0.rooms=[r];p.floors.L1.rooms=[room('unrelated',90,90)];
 const original=JSON.stringify(r.routeStair),before=R.point(r,r.routeStair.nodes[1]),q=T.translate(p,[ref('L0','route')],7,-3).plan,copy=get(q,'L0','route'),after=R.point(copy,copy.routeStair.nodes[1]);assert.equal(JSON.stringify(copy.routeStair),original);assert.deepEqual(copy.shape,r.shape);near(after[0],before[0]+7);near(after[1],before[1]-3);assert.equal(T.analyze(p,[ref('L0','route')]).refs.length,1);assert.deepEqual(q.floors.L1,p.floors.L1);
});
test('room stair endpoints warn without dragging connected building structure into scope',()=>{
 const p=plan();p.floors.L0.rooms=[room('route',0,0,{routeStair:{start:{kind:'site'},end:{kind:'room',floor:'L1',room:'host'},nodes:[{u:0,v:0},{u:1,v:1}],startZ:0,endZ:5}})];p.floors.L1.rooms=[room('host',20,20)];const a=T.analyze(p,[ref('L0','route')]);assert.equal(a.refs.length,1);assert.equal(a.warnings[0].code,'stair-endpoint-boundary');const q=T.translate(p,a.requested,3,4).plan;assert.deepEqual(q.floors.L1,p.floors.L1);assert.deepEqual(get(q,'L0','route').routeStair,get(p,'L0','route').routeStair);
});
test('local step caches move with their owner but preserve height and route metadata',()=>{
 const p=plan();p.floors.B1.rooms=[room('step',2,3,{localSteps:true,z:-5}),room('host',20,30)];p.splitLevelConnections=[{id:'split',floor:'B1',room:'step',localSteps:true,start:{kind:'site'},end:{kind:'room',floor:'B1',room:'host'},lowerZ:0,upperZ:-5,route:['step','host'],footprint:{x:2,y:3,w:4,h:3},flights:[{polygon:[[2,3],[6,3],[6,6],[2,6]],z0:-5,z1:0}]}];
 const q=T.translate(p,[ref('B1','step')],2,1).plan;assert.equal(q.splitLevelConnections[0].footprint.x,4);assert.deepEqual(q.splitLevelConnections[0].flights[0].polygon[0],[4,4]);assert.deepEqual(q.splitLevelConnections[0].start,p.splitLevelConnections[0].start);assert.deepEqual(q.splitLevelConnections[0].end,p.splitLevelConnections[0].end);assert.deepEqual(q.splitLevelConnections[0].route,p.splitLevelConnections[0].route);assert.equal(q.splitLevelConnections[0].upperZ,-5);assert.equal(get(q,'B1','host').x,20);
});
test('standalone openings block XY translation; internal/exterior openings follow owners',()=>{
 const p=plan();p.floors.L0.rooms=[room('a'),room('b',4,0),room('c',8,0)];p.floors.L0.doors=[{id:'ab',a:'a',b:'b',width:1,offset:.4},{id:'bc',a:'b',b:'c',width:1,offset:.7},{id:'outside',a:'a',b:'outside',side:'n',width:1,offset:.3}];
 assert.equal(T.analyze(p,[ref('L0','outside','doors')]).code,'door-owner-required');assert.throws(()=>T.translate(p,[ref('L0','a'),ref('L0','ab','doors')],1,2),e=>e.code==='door-owner-required');
 const refs=[ref('L0','a'),ref('L0','b')],a=T.analyze(p,refs);assert(a.refs.some(r=>r.id==='ab'));assert(a.refs.some(r=>r.id==='outside'));assert(!a.refs.some(r=>r.id==='bc'));assert(a.warnings.some(w=>w.ref.id==='bc'));const q=T.translate(p,refs,1,2).plan;assert.deepEqual(q.floors.L0.doors,p.floors.L0.doors);assert.deepEqual(get(q,'L0','c'),get(p,'L0','c'));
});
test('legacy annotations and exterior openings resolve without normalizing the source',()=>{
 const p=plan();p.floors.L0.rooms=[room('a',1,2,{zones:[{name:'Zone',x:2,y:3}]})];p.floors.L0.annotations=[{text:'Legacy',x:4,y:4}];p.floors.L0.external={room:'a',side:'n',width:1};const before=JSON.stringify(p),z=ref('L0','zone-L0-a-0','annotations'),legacy=ref('L0','legacy-exterior-0-a','doors');
 assert(T.resolve(p,z).zone);assert(T.resolve(p,legacy).legacy);const q=T.translate(p,[ref('L0','a'),ref('L0','annotation-L0-0','annotations')],3,2).plan;assert.equal(JSON.stringify(p),before);assert.equal(q.floors.L0.rooms[0].zones[0].x,5);assert.equal(q.floors.L0.annotations[0].x,7);assert.equal(q.floors.L0.annotations[0].id,undefined);assert.deepEqual(q.floors.L0.external,p.floors.L0.external);
 const only=T.translate(p,[z],3,2).plan;assert.equal(get(only,'L0','a').x,1);assert.equal(get(only,'L0','a').zones[0].x,5);
});
test('normalized source annotations and service networks close only to their own objects',()=>{
 const p=plan();p.floors.L0.rooms=[room('a')];p.floors.L0.annotations=[{id:'note',x:1,y:1,text:'Name',sourceRoom:'a'}];p.floors.L1.services=[{id:'r',points:[{x:0,y:0},{x:4,y:0}],width:.5},{id:'t',routeId:'r',x:1,y:0,w:1,h:1},{id:'other',x:50,y:50,w:1,h:1}];const a=T.analyze(p,[ref('L0','a'),ref('L1','t','services')]);assert.equal(a.refs.length,4);const q=T.translate(p,a.requested,2,3).plan;assert.equal(q.floors.L0.annotations[0].x,3);assert.equal(q.floors.L1.services[0].points[0].x,2);assert.equal(q.floors.L1.services[2].x,50);
});
test('coupled guards see generated refs on hidden or locked floors',()=>{
 const p=plan();p.floors.L0.rooms=[room('base')];p.floors.L1.rooms=[room('derived',0,0,{linkedSource:{floor:'L0',room:'base'},locked:true})];let seen=false;const guard=(r,o,m)=>{if(r.floor==='L1'){seen=m.generated;return 'L1 footprint is hidden';}return true;};const a=T.analyze(p,[ref('L0','base')],{guard});assert.equal(a.ok,false);assert.equal(seen,true);assert.equal(a.reason,'L1 footprint is hidden');assert.throws(()=>T.translate(p,a.requested,1,1,{guard}),e=>e.analysis.added.length===1);assert.equal(T.analyze(p,a.requested,{respectModelLocks:true}).code,'locked-object');
});
test('owned site geometry moves while envelope, unrelated site and datum remain fixed',()=>{
 const p=plan();p.floors.L0.rooms=[room('court',1,2,{type:'courtyard'}),room('control',7,8)];p.courtyard={floor:'L0',source:{floor:'L0',room:'court'},x:1,y:2,w:4,h:3,z:0};p.envelope={polygon:[[0,0],[40,0],[40,40],[0,40]],courtyardHole:[[1,2],[5,2],[5,5],[1,5]]};p.operationsSection={source:{floor:'L0',room:'control'},floor:0,footprint:{x:7,y:8,w:4,h:3},clearTop:9};p.overlooks=[{axis:'v',fixed:11,lo:8,hi:11,source:{floor:'L0',room:'control'},guardTop:6},{axis:'h',fixed:20,lo:0,hi:10}];p.approaches=[{source:{floor:'L0',room:'court'},start:[0,0,0],end:[1,2,0]}, {floor:'L0',start:[30,30,0],end:[40,40,0]}];
 const q=T.translate(p,[ref('L0','court'),ref('L0','control')],3,-2).plan;assert.equal(q.courtyard.x,4);assert.deepEqual(q.envelope.polygon,p.envelope.polygon);assert.deepEqual(q.envelope.courtyardHole[0],[4,0]);assert.equal(q.operationsSection.footprint.y,6);assert.equal(q.operationsSection.floor,0);assert.equal(q.overlooks[0].fixed,14);assert.deepEqual(q.overlooks[1],p.overlooks[1]);assert.deepEqual(q.approaches[0].start,[3,-2,0]);assert.deepEqual(q.approaches[1],p.approaches[1]);assert.equal(T.analyze(p,[ref('L0','court')],{operation:'copy'}).code,'singleton-copy');
});
test('proposals are immutable, failure atomic and reversibly rounded for one-step undo',()=>{
 const p=plan();p.floors.L0.rooms=[room('a',1.123456,2.654321)];const before=JSON.stringify(p);freeze(p);const q=T.translate(p,[ref('L0','a')],.000001,1).plan;assert.equal(JSON.stringify(p),before);assert.equal(get(q,'L0','a').x,1.123457);assert.deepEqual(T.translate(q,[ref('L0','a')],-.000001,-1).plan,p);assert.throws(()=>T.translate(p,[ref('L0','a')],1,2,{validate:()=>{throw Error('render rejection');}}),/render rejection/);assert.equal(JSON.stringify(p),before);assert.deepEqual(T.translate(p,[ref('L0','a')],0,0).plan,p);
});
test('shared cross-floor identity is closed and not moved twice',()=>{
 const p=plan(),r=room('shared');p.floors.L0.rooms=[r];p.floors.L1.rooms=[r];const q=T.translate(p,[ref('L0','shared')],2,3).plan;assert.strictEqual(get(q,'L0','shared'),get(q,'L1','shared'));assert.equal(get(q,'L1','shared').x,2);
});
test('copy remaps duplicate IDs by floor and internal connection endpoints',()=>{
 const p=plan();p.floors.L0.rooms=[room('same'),room('other',4,0)];p.floors.L1.rooms=[room('same',20,30)];p.floors.L0.doors=[{id:'same-door',a:'same',b:'other',width:1,offset:.5}];p.floors.L0.entrances=['same'];const before=JSON.stringify(p),out=T.copy(p,[ref('L0','same'),ref('L0','other'),ref('L1','same')],5,6),ids=out.selection.map(r=>r.id);assert.notEqual(ids[0],ids[2]);assert.equal(new Set(ids).size,3);assert.equal(get(out.plan,'L0',ids[0]).x,5);assert.equal(get(out.plan,'L1',ids[2]).x,25);const d=out.plan.floors.L0.doors[1];assert.equal(d.a,ids[0]);assert.equal(d.b,ids[1]);assert(out.plan.floors.L0.entrances.includes(ids[0]));assert.equal(JSON.stringify(p),before);
});
test('copied linked stair stack has one new room ID and fresh connection/group identity',()=>{
 const p=plan();for(const fid of ['L0','L1'])p.floors[fid].rooms=[room('stairs',1,2,{stairStackId:'stack',editGroup:'stack',stairOriginal:room('stairs',1,2)})];p.verticalConnections=[{id:'stack',room:'stairs',floors:['L0','L1'],type:'stair',footprint:{x:1,y:2,w:4,h:3},footprints:{L0:{x:1,y:2,w:4,h:3},L1:{x:1,y:2,w:4,h:3}}}];const out=T.copy(p,[ref('L1','stairs')],3,4),id=out.selection[0].id,c=out.plan.verticalConnections[1];assert.equal(c.room,id);assert.equal(get(out.plan,'L0',id).editGroup,c.id);assert.equal(get(out.plan,'L1',id).stairStackId,c.id);assert.equal(c.footprints.L0.x,4);assert.equal(get(out.plan,'L0',id).stairOriginal.id,id);assert.notEqual(c.id,'stack');assert.equal(get(out.plan,'L0','stairs').x,1);
});
test('copied implicit source links become explicit and independent caps remain independent',()=>{
 const p=plan();p.floors.L0.rooms=[room('control')];p.floors.L1.rooms=[room('void',0,0,{type:'void'}),room('opsroof',30,30,{type:'solid',sealedConcrete:true,independentCap:true})];const out=T.copy(p,[ref('L0','control'),ref('L1','opsroof')],1,1),source=out.selection[0],derived=out.idMap.find(m=>m.from.id==='void').to,cap=out.selection[1];assert.deepEqual(get(out.plan,'L1',derived.id).linkedSource,{floor:'L0',room:source.id});assert.equal(get(out.plan,'L1',cap.id).independentCap,true);assert.equal(get(out.plan,'L1',cap.id).linkedSource,undefined);
});
test('copying room annotations does not duplicate zones; legacy doors become owned native openings',()=>{
 const p=plan();p.floors.L0.rooms=[room('a',1,2,{zones:[{name:'Zone',x:2,y:3}]})];p.floors.L0.external={room:'a',side:'n',width:1};const out=T.copy(p,[ref('L0','a')],4,5),r=get(out.plan,'L0',out.selection[0].id);assert.equal(r.zones[0].x,6);assert.equal(out.plan.floors.L0.annotations,undefined);assert.equal(out.plan.floors.L0.doors.length,1);assert.equal(out.plan.floors.L0.doors[0].a,r.id);assert.equal(out.plan.floors.L0.doors[0].b,'outside');assert.deepEqual(out.plan.floors.L0.external,p.floors.L0.external);
 const zone=T.copy(p,[ref('L0','zone-L0-a-0','annotations')],4,5);assert.equal(zone.plan.floors.L0.annotations[0].text,'Zone');assert.equal(zone.plan.floors.L0.annotations[0].x,6);
});
test('copy remaps selected surface links and freezes uncopied room endpoint heights',()=>{
 const p=plan();p.floors.L0.rooms=[room('route',0,0,{routeStair:{start:{kind:'site',offset:.5},end:{kind:'room',floor:'L1',room:'host',offset:.2},startZ:.5,endZ:3,nodes:[{u:0,v:0},{u:1,v:1}],hostRoom:'unselected'},cutoutFor:['unselected']})];p.floors.L1.rooms=[room('host',2,3,{z:8})];const a=T.copy(p,[ref('L0','route')],2,3),r=get(a.plan,'L0',a.selection[0].id);assert.equal(r.routeStair.end,undefined);near(r.routeStair.endZ,8.2);assert.deepEqual(r.routeStair.start,{kind:'site',offset:.5});assert.equal(r.routeStair.hostRoom,undefined);assert.deepEqual(r.cutoutFor,[]);assert(a.notes.some(n=>n.code==='copied-endpoint-detached'));
 const b=T.copy(p,[ref('L0','route'),ref('L1','host')],2,3);assert.equal(get(b.plan,'L0',b.selection[0].id).routeStair.end.room,b.selection[1].id);assert.equal(get(b.plan,'L0',b.selection[0].id).routeStair.end.floor,'L1');
});
test('copy preserves service route ownership, original heights and floor assignments',()=>{
 const p=plan();p.floors.B1.services=[{id:'route',points:[{x:0,y:0},{x:4,y:0}],width:1,z:-3},{id:'vent',x:1,y:0,w:1,h:1,routeId:'route',z:-3}];const out=T.copy(p,[ref('B1','vent','services')],1,2),terminal=out.plan.floors.B1.services.find(o=>o.id===out.selection[0].id),route=out.plan.floors.B1.services.find(o=>o.id===terminal.routeId);assert(route.points);assert.equal(terminal.z,-3);assert.equal(route.z,-3);assert.equal(out.selection[0].floor,'B1');assert.equal(route.points[0].x,1);
});
test('clipboard source is frozen and pasted into current target with no lost edits or ID collisions',()=>{
 const p=plan();p.floors.L0.rooms=[room('a')];p.floors.L1.rooms=[room('b',4,5)];const source=freeze(JSON.parse(JSON.stringify(p))),refs=[ref('L0','a'),ref('L1','b')],cut=T.remove(p,refs).plan;cut.floors.L0.rooms.push(room('copy-a-1',90,90));const out=T.paste(cut,source,refs,3,4);assert(get(out.plan,'L0','copy-a-1'));assert.equal(out.plan.floors.L0.rooms.length,2);assert.equal(get(out.plan,'L1',out.selection[1].id).x,7);assert.notEqual(out.selection[0].id,'copy-a-1');const target=plan();delete target.floors.L1;assert.throws(()=>T.paste(target,source,refs,1,1),e=>e.code==='missing-destination-floor');
});
test('remove uses exact floors and cleans incident openings, entrances, legacy items and linked stacks',()=>{
 const p=plan();p.floors.L0.rooms=[room('same'),room('neighbor',4,0)];p.floors.L1.rooms=[room('same',40,40)];p.floors.L0.doors=[{id:'ab',a:'same',b:'neighbor'}];p.floors.L0.entrances=['same'];p.floors.L0.external={room:'same',side:'n',width:1};const out=T.remove(p,[ref('L0','same')]);assert.equal(out.plan.floors.L0.rooms.length,1);assert.equal(out.plan.floors.L0.doors.length,0);assert.deepEqual(out.plan.floors.L0.entrances,[]);assert.equal(out.plan.floors.L0.external,undefined);assert.deepEqual(out.plan.floors.L1,p.floors.L1);assert(out.analysis.added.some(a=>a.ref.id==='ab'));
 const just=T.remove(p,[ref('L0','ab','doors')]);assert.equal(just.plan.floors.L0.rooms.length,2);assert.equal(just.plan.floors.L0.doors.length,0);
});
test('remove guards affected surviving stairs and detaches only deleted room refs at current height',()=>{
 const p=plan();p.floors.L0.rooms=[room('route',0,0,{routeStair:{start:{kind:'site'},end:{kind:'room',floor:'L1',room:'host',offset:1},startZ:0,endZ:3,nodes:[{u:0,v:0},{u:1,v:1}]}})];p.floors.L1.rooms=[room('host',20,20,{z:8})];const blocked=T.analyze(p,[ref('L1','host')],{operation:'remove',guard:(r,o,m)=>m.affectedOnly?'Stair is locked':true});assert.equal(blocked.ok,false);const out=T.remove(p,[ref('L1','host')]);assert.equal(out.analysis.affected[0].ref.id,'route');assert.equal(get(out.plan,'L0','route').routeStair.end,undefined);assert.equal(get(out.plan,'L0','route').routeStair.endZ,9);assert.deepEqual(get(out.plan,'L0','route').routeStair.start,{kind:'site'});
});
test('bounds span selected floors, use world rotation/strokes and stay translation-equivariant',()=>{
 const p=plan();p.floors.L0.rooms=[room('a',0,0)];p.floors.L1.symbols=[{id:'s',x:10,y:2,w:4,h:2,rotation:90,rotationSpace:'intrinsic'}];p.floors.B1.services=[{id:'duct',points:[{x:-4,y:0},{x:-2,y:0}],width:2}];const refs=[ref('L0','a'),ref('L1','s','symbols'),ref('B1','duct','services')],opts={buildingTransform:B,shapes:S,stairs:D},a=T.bounds(p,refs,opts);near(a.x,-4);near(a.maxX,13);near(a.minY,-1);near(a.maxY,5);const b=T.bounds(T.translate(p,refs,7,-3).plan,refs,opts);near(b.x,a.x+7);near(b.y,a.y-3);near(b.w,a.w);near(b.h,a.h);
});
test('route bounds use the production geometry adapter and no envelope padding',()=>{
 const p=plan();p.floors.L0.rooms=[R.create([[0,0],[8,0],[8,7]],{id:'route'})];p.envelope={polygon:[[-100,-100],[100,-100],[100,100],[-100,100]]};const a=T.bounds(p,[ref('L0','route')],{buildingTransform:B,shapes:S,stairs:D}),b=B.bounds(p,{floorIds:['L0'],includeSite:false,shapes:S,stairs:D});for(const k of ['x','y','w','h'])near(a[k],b[k]);assert.equal(T.bounds(p,[]),null);
});

test('translation guards indirect boundary openings without selecting the neighboring room',()=>{
 const p=plan();p.floors.L0.rooms=[room('a'),room('b',4,0)];p.floors.L0.doors=[{id:'locked',a:'a',b:'b',width:1,offset:.5}];let checked=false;const a=T.analyze(p,[ref('L0','a')],{guard:(r,o,m)=>{if(r.kind==='doors'){checked=m.affectedOnly;return 'Opening is locked';}return true;}});assert.equal(a.ok,false);assert.equal(checked,true);assert.equal(a.refs.length,1);assert.equal(a.affected[0].ref.id,'locked');
});
test('paste rejects missing retained datum floors and preserves heights when destination datums differ',()=>{
 const source=plan();source.floors.L0.rooms=[room('a',0,0,{routeStair:{start:{kind:'site'},end:{kind:'floor',floor:'L1',offset:.5},startZ:0,endZ:5.5,nodes:[{u:0,v:0},{u:1,v:1}]}})];const target=plan();delete target.floors.L1;assert.throws(()=>T.paste(target,source,[ref('L0','a')],1,1),e=>e.code==='missing-destination-floor'&&e.floor==='L1');
 target.floors.L1=floor([],20);target.floors.L0.z=10;target.floors.L0.clearHeight=8;const out=T.paste(target,source,[ref('L0','a')],1,1),copied=get(out.plan,'L0',out.selection[0].id);assert.equal(copied.z,0);assert.equal(copied.height,3);assert.equal(copied.routeStair.end,undefined);assert.equal(copied.routeStair.endZ,5.5);assert(out.notes.some(n=>n.code==='copied-datum-detached'));
});
test('remove closes linked sources and owned caches, preserves every disconnected object',()=>{
 const p=plan();p.floors.L0.rooms=[room('court',0,0,{type:'courtyard'}),room('island',30,30)];p.floors.L1.rooms=[room('sky',0,0,{type:'void',courtyardVoid:true})];p.courtyard={floor:'L0',x:0,y:0,w:4,h:3};p.envelope={polygon:[[0,0],[40,0],[40,40],[0,40]],courtyardHole:[[0,0],[4,0],[4,3],[0,3]]};const out=T.remove(p,[ref('L1','sky')]);assert.equal(out.plan.floors.L1.rooms.length,0);assert.deepEqual(out.plan.floors.L0.rooms,[get(p,'L0','island')]);assert.equal(out.plan.courtyard,undefined);assert.equal(out.plan.envelope.courtyardHole,undefined);assert.deepEqual(out.plan.envelope.polygon,p.envelope.polygon);
});
test('owned approaches copy and remap their source without overwriting existing site data',()=>{
 const p=plan();p.floors.L0.rooms=[room('a')];p.approaches=[{id:'path',source:{floor:'L0',room:'a'},points:[[0,0,0],[3,3,1]]}];const out=T.copy(p,[ref('L0','a')],2,3);assert.equal(out.plan.approaches.length,2);assert.deepEqual(out.plan.approaches[0],p.approaches[0]);assert.equal(out.plan.approaches[1].source.room,out.selection[0].id);assert.deepEqual(out.plan.approaches[1].points[1],[5,6,1]);
});

console.log(`Final result: ${passed} selection-transform cases passed.`);
