'use strict';
const assert=require('node:assert/strict'),L=require('./dist/low-openings'),S=require('./dist/room-shapes'),P=require('./dist/preview-geometry'),Walk=require('./dist/walkthrough');
const clone=x=>JSON.parse(JSON.stringify(x)),near=(a,b)=>assert(Math.abs(a-b)<1e-5,`${a} != ${b}`);
const room=(id,x,y,w,h,extra={})=>({id,name:id,type:'tech',x,y,w,h,...extra});
const plan=rooms=>({version:1,units:'metres',floors:{L0:{name:'Ground',z:0,clearHeight:3,rooms,doors:[],entrances:['a']}}});
const base={id:'low',a:'a',b:'b',width:1.2,offset:.5,kind:'door'};
for(const kind of ['low-door','low-passage']){
 const d=L.preset(base,kind),before=JSON.stringify(base);assert(L.valid(d));near(d.width,.8);near(d.height,1.4);assert.equal(d.maximumPassage,undefined);assert.equal(JSON.stringify(base),before);assert.deepEqual(clone(d),d);
 for(const invalid of [{height:NaN},{height:.1},{height:13},{width:.4},{openingPreset:'guess'},{limitedHeight:false},{maximumPassage:true},{wrap:true},{kind:'window'}])assert.throws(()=>L.validate({...d,...invalid}),/Invalid low/);
}
for(const ordinary of [base,{...base,kind:'open',height:1.4},{...base,kind:'window',sill:1},{...base,kind:'open',maximumPassage:true,height:1.4}])assert.doesNotThrow(()=>L.validate(ordinary));
assert.equal(L.clearHeight({...base,kind:'open',height:1.4},3),3,'ordinary passage keeps full room height');
assert.equal(L.clearHeight(L.preset(base,'low-passage'),3),1.4);assert.equal(L.clearHeight(L.preset(base,'low-door'),1),1);
assert.equal(L.clearance(1.4,.8).status,'crouch');assert.equal(L.clearance(1.1,.8).status,'too-low');assert.equal(L.clearance(1.4,.5).status,'too-narrow');assert.equal(L.clearance(2,.8).status,'standing');
function travel(data,g,z,crouch,sign){const center={x:(g.p0[0]+g.p1[0])/2,y:(g.p0[1]+g.p1[1])/2},w=Walk.create(data);w.setState({x:center.x+g.n[0]*sign,y:center.y+g.n[1]*sign,z,floor:'L0'});if(crouch)w.setCrouch(true);for(let i=0;i<50;i++)w.move(-g.n[0]*sign*.04,-g.n[1]*sign*.04);return{distance:Math.hypot(w.state.x-(center.x-g.n[0]*sign),w.state.y-(center.y-g.n[1]*sign)),walk:w,center};}
for(const angle of [0,31,90])for(const kind of ['low-door','low-passage'])for(const nested of [false,true]){
 const p=plan(nested?[room('a',3,3,4,4),room('b',0,0,10,10)]:[room('a',0,0,5,10),room('b',5,0,5,10)]);for(const r of p.floors.L0.rooms)if(angle)assert(S.rotate(r,angle,{x:0,y:0}));const d=L.preset({...base,edge:S.edges(p.floors.L0.rooms[0])[1].id},kind);p.floors.L0.doors.push(d);const saved=JSON.stringify(p),data=P.build(p),g=S.opening(d,p.floors.L0),o=data.levels[0].openings.find(o=>o.id===d.id);assert(o);near(o.height,1.4);assert.equal(JSON.stringify(p),saved);
 for(const sign of [-1,1]){assert(travel(data,g,0,true,sign).distance<.02,`${angle} ${kind} nested ${nested} crouched direction ${sign}`);assert(travel(data,g,0,false,sign).distance>.8,`${angle} ${kind} blocks standing direction ${sign}`);}
 const crouched=travel(data,g,0,true,-1).walk;crouched.setState({...crouched.state,x:(g.p0[0]+g.p1[0])/2,y:(g.p0[1]+g.p1[1])/2});assert.equal(crouched.setCrouch(false),false,'cannot stand under lintel');
 const tooLow=clone(p);tooLow.floors.L0.doors[0].height=1.1;const lowData=P.build(tooLow);assert(lowData.warnings.some(w=>w.includes('Too low for crouched Walk')));assert(travel(lowData,g,0,true,1).distance>.8);
}
for(const mode of ['full','half','none']){const p=plan([room('a',0,0,5,10,{walls:{mode}}),room('b',5,0,5,10,{walls:{mode}})]),d=L.preset(base,'low-passage');p.floors.L0.doors.push(d);const data=P.build(p),g=S.opening(d,p.floors.L0),issues=L.warnings(p);assert.equal(issues.some(w=>w.code==='open-above'),mode!=='full');assert.equal(travel(data,g,0,false,1).distance<.02,mode!=='full','actual wall mode controls standing');assert(travel(data,g,0,true,-1).distance<.02);}
const elevated=plan([room('a',0,0,5,10,{z:-1,height:5}),room('b',5,0,5,10,{z:1,height:2})]);elevated.floors.L0.doors.push(L.preset(base,'low-passage'));const ed=P.build(elevated),eo=ed.levels[0].openings[0];near(eo.z,1);near(eo.height,1.4);assert(ed.levels[0].boxes.some(w=>w.kind==='wall'&&w.z===-1&&w.height===2));assert(L.warnings(elevated).some(w=>w.code==='floor-step'));
console.log('PASS low opening model and geometry: opt-in validation, pure roundtrip, old passages, rotated/nested doors and passages, crouched/standing both ways, cannot stand under lintel, too-low warnings, Full/Half/None and offset wall bases');
