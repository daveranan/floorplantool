const assert=require('node:assert/strict'),P=require('./dist/primitives.js'),T=require('./dist/thin-walls.js'),W=require('./dist/walkthrough.js'),G=require('./dist/preview-geometry.js'),O=require('./dist/objects.js');
const copy=x=>JSON.parse(JSON.stringify(x)),near=(a,b)=>assert(Math.abs(a-b)<1e-6,`${a} != ${b}`);
let checks=0;function check(name,fn){fn();checks++;console.log('PASS '+name);}
const wall=(id='wall',start={x:-2,y:0},end={x:2,y:0},options={})=>T.create(id,start,end,options);
function data(primitives=[],z=0){return{levels:[{id:'L0',z,rooms:[],openings:[],polygons:[],primitives,boxes:[]}],stairs:[],entrances:[],bounds:{minX:-10,minY:-10,maxX:10,maxY:10}};}

check('line creation snaps the centerline and length, chooses the dominant axis, and never mutates inputs',()=>{
 const start={x:.04,y:2.04},end={x:3.13,y:2.39},options={height:2.87},before=JSON.stringify([start,end,options]),a=T.create('a',start,end,options);
 assert.deepEqual({x:a.x,y:a.y,w:a.w,h:a.h,height:a.height,rotation:a.rotation,z:a.z},{x:0,y:1.875,w:3.25,h:.25,height:2.75,rotation:0,z:0});
 assert.equal(a.primitive,'cube');assert.equal(a.wall,true);assert.equal(JSON.stringify([start,end,options]),before);
 const b=T.create('b',{x:2.04,y:8.01},{x:2.39,y:2.04});assert.equal(b.rotation,90);assert.equal(b.w,6);assert.deepEqual(P.points(b),[[1.875,2],[2.125,2],[2.125,8],[1.875,8]]);
 assert.equal(T.create('tiny',{x:0,y:0},{x:.09,y:.09}),null);assert.equal(T.create('tie',{x:0,y:0},{x:1,y:1}).rotation,0);
 const reverse=T.create('reverse',{x:2,y:0},{x:-2,y:0});assert.deepEqual(P.points(reverse),P.points(wall()));
});
check('quarter-grid helper and thickness choices reject invalid values and preserve specified wall dimensions',()=>{
 assert.deepEqual(T.thicknesses,[.25,.5,.75,1]);near(T.quarter(.38),.5);near(T.quarter(-.38),-.5);assert.equal(Object.is(T.quarter(-.01),-0),false);
 for(const value of [NaN,Infinity,null,'1',undefined])assert.throws(()=>T.quarter(value),/finite/);
 for(const t of T.thicknesses)assert.equal(wall('wall',undefined,undefined,{thickness:t}).h,t);
 assert.equal(wall('clamp',undefined,undefined,{thickness:2}).h,1);assert.equal(wall('clamp',undefined,undefined,{thickness:.01}).h,.25);
 for(const key of ['height','thickness','z'])for(const value of [NaN,Infinity,null,'1'])assert.throws(()=>wall('bad',undefined,undefined,{[key]:value}));
 assert.throws(()=>wall('bad',{x:NaN,y:0}));assert.throws(()=>wall('bad',undefined,undefined,{height:-1}));
});
check('wall validation rejects malformed flags, non-cubes, tilt and dimensions without changing generic primitives',()=>{
 const good=wall(),before=JSON.stringify(good);assert.equal(P.validate(good),good);assert.equal(JSON.stringify(good),before);
 for(const patch of [{wall:null},{wall:1},{wall:'true'},{wall:{}},{primitive:'cylinder'},{tiltX:1},{tiltY:90},{w:.1},{w:1.3},{height:.1},{height:2.7},{h:.125},{h:1.25}])assert.throws(()=>P.validate({...good,...patch}),JSON.stringify(patch));
 assert.doesNotThrow(()=>P.validate({...good,x:1.234567,y:2.345678,z:.123456,rotation:27.123456}));
 for(const type of P.types){const o={...P.create(type,type),wall:false,w:.023,h:.043,height:.057,rotation:12.34,tiltX:21,tiltY:37};assert.equal(P.validate(o),o);assert.equal(T.collision(o,0),null);delete o.wall;assert.equal(P.validate(o),o);}
 const f={rooms:[],doors:[],primitives:[good]};assert.doesNotThrow(()=>O.validateFloor(f));assert.throws(()=>O.validateFloor({...f,primitives:[{...good,wall:'true'}]}));
});
check('edits snap changed transform dimensions and positions, preserve unchanged fractional origins and metadata, and remain atomic',()=>{
 const original={...wall(),x:.123456789,y:.234567891,z:.345678912,extra:{authored:'kept'}},patch={w:4.36,h:.62,height:2.62,x:1.13,z:2.38,rotation:32.345,tiltX:90,tiltY:15},before=JSON.stringify([original,patch]);
 const out=T.normalizeEdit(original,patch);assert.deepEqual({w:out.w,h:out.h,height:out.height,x:out.x,y:out.y,z:out.z,rotation:out.rotation,tiltX:out.tiltX,tiltY:out.tiltY},{w:4.25,h:.5,height:2.5,x:original.x+1,y:original.y,z:2.5,rotation:32.345,tiltX:0,tiltY:0});assert.deepEqual(out.extra,original.extra);assert.equal(JSON.stringify([original,patch]),before);assert.notEqual(out,original);
 const rotated=T.normalizeEdit(original,{x:.123457,y:.234568,z:.345679,rotation:90});assert.equal(rotated.x,original.x);assert.equal(rotated.y,original.y);assert.equal(rotated.z,original.z);
 assert.equal(T.normalizeEdit(original,{h:20}).h,1);assert.equal(T.normalizeEdit(original,{h:-2}).h,.25);assert.equal(T.normalizeEdit(original,{w:.01,height:.01}).height,.25);
 for(const key of ['x','y','z','w','h','height','rotation','tiltX','tiltY'])for(const value of [NaN,Infinity,null])assert.throws(()=>T.normalizeEdit(original,{[key]:value}));
 assert.throws(()=>T.normalizeEdit(original,{w:-1}));assert.throws(()=>T.normalizeEdit(P.create('cube','generic'),{w:1}));assert.equal(JSON.stringify([original,patch]),before);
});
check('quarter-step XY translation preserves centered and imported fractional origins without drift',()=>{
 const centered=wall(),before=JSON.stringify(centered);assert.equal(centered.y,-.125);
 const moved=T.normalizeEdit(centered,{x:centered.x+.25,y:centered.y+.25});assert.equal(moved.x-centered.x,.25);assert.equal(moved.y,.125);assert.equal(moved.y-centered.y,.25);assert.equal(moved.y+moved.h/2,.25);
 const returned=T.normalizeEdit(moved,{x:moved.x-.25,y:moved.y-.25});assert.deepEqual(returned,centered);assert.equal(JSON.stringify(centered),before);
 const imported={...centered,x:.123456789,y:.234567891,z:.345678912},snapped=T.normalizeEdit(imported,{x:imported.x+.37,y:imported.y-.38,z:2.38});assert.equal(snapped.x,imported.x+.25);assert.equal(snapped.y,imported.y-.5);assert.equal(snapped.z,2.5);
 const tiny=T.normalizeEdit(imported,{x:imported.x+.1,y:imported.y-.1});assert.equal(tiny.x,imported.x);assert.equal(tiny.y,imported.y);
});
check('full scene transforms keep scaled walls centered and leave unchanged and yaw-only records exact',()=>{
 const original={...wall(),x:.123456789,y:.234567891},before=JSON.stringify(original),full={...original};
 assert.deepEqual(T.normalizeEdit(original,full),original);assert.deepEqual(T.normalizeEdit(original,{...full,rotation:147}),{...original,rotation:147});
 const translated=T.normalizeEdit(original,{...full,x:original.x+.25,y:original.y-.25});assert.equal(translated.x,original.x+.25);assert.equal(translated.y,original.y-.25);
 for(const [size,key]of [['w','x'],['h','y']]){
  const scaled=T.normalizeEdit(original,{...full,[size]:original[size]+.25,[key]:original[key]-.125});assert.equal(scaled[size],original[size]+.25);assert.equal(scaled[key],original[key]-.125);near(scaled[key]+scaled[size]/2,original[key]+original[size]/2);
 }
 const scaled=T.normalizeEdit(original,{...full,w:original.w+.38,h:original.h+.38,x:original.x-.19+.26,y:original.y-.19-.26});assert.equal(scaled.w,original.w+.5);assert.equal(scaled.h,original.h+.5);near(scaled.x+scaled.w/2,original.x+original.w/2+.25);near(scaled.y+scaled.h/2,original.y+original.h/2-.25);
 const typed=T.normalizeEdit(original,{w:original.w+.25,h:original.h+.25});assert.equal(typed.x,original.x);assert.equal(typed.y,original.y);assert.equal(JSON.stringify(original),before);
});
check('collision volumes retain the exact rotated footprint and floor-relative elevation',()=>{
 const o={...wall(),rotation:37,z:.123456789},before=JSON.stringify(o),b=T.collision(o,7.6),bounds=P.bounds(o);
 assert.deepEqual(b.polygon,P.points(o));assert.equal(b.kind,'wall');assert.equal(b.primitive,o.id);assert.equal(b.z,7.6+o.z);assert.equal(b.height,o.height);assert.equal(b.x,bounds.x);assert.equal(b.w,bounds.w);assert.equal(JSON.stringify(o),before);assert.throws(()=>T.collision(o,NaN));
});
check('axis-aligned and quarter-metre walls block the walker while their end passage stays clear',()=>{
 const d=data([wall()]),before=JSON.stringify(d),w=W.create(d);assert(w.blocked({x:0,y:0,z:0}));assert(w.blocked({x:0,y:.42,z:0}));assert(!w.blocked({x:0,y:.43,z:0}));
 w.setState({x:0,y:-1,z:0,floor:'L0'});w.move(0,3);assert(w.state.y<-.42);assert(w.state.y>-.6);
 w.setState({x:2.31,y:-1,z:0,floor:'L0'});w.move(0,3);near(w.state.y,2);assert.equal(JSON.stringify(d),before);
});
check('a thin clear passage remains walkable and a rotated wall has no phantom AABB blocker',()=>{
 const left=wall('left',{x:-3,y:-.5},{x:3,y:-.5}),right=wall('right',{x:-3,y:.5},{x:3,y:.5}),w=W.create(data([left,right]));
 w.setState({x:-2,y:0,z:0,floor:'L0'});w.move(4,0);near(w.state.x,2);
 const o={...wall(),rotation:45},b=T.collision(o,0),rw=W.create(data([o]));assert(rw.blocked({x:0,y:0,z:0}));const clear={x:1,y:-1,z:0};assert(W.inside(clear,b));assert(!rw.blocked(clear));
 rw.setState({x:.8,y:-1,z:0,floor:'L0'});rw.move(.4,0);near(rw.state.x,1.2);
 const nearSide={x:.25,y:-.25,z:0};assert(rw.blocked(nearSide));assert(!rw.blocked({x:.4,y:-.4,z:0}));
});
check('raised walls, crouch clearance, and separate floors use actual heights without display offsets',()=>{
 const raised=wall('raised',undefined,undefined,{z:2}),d=data([raised]),w=W.create(d);assert(!w.blocked({x:0,y:0,z:0}));assert(w.blocked({x:0,y:0,z:.5}));assert(!w.blocked({x:0,y:0,z:5}));
 const beam=W.create(data([wall('beam',undefined,undefined,{z:1.5})]));assert(beam.blocked({x:0,y:0,z:0}));beam.setCrouch(true);assert(!beam.blocked({x:0,y:0,z:0}));
 const floors=data([]);floors.levels.push({...data([wall('upper')],6).levels[0],id:'L1',visible:false,explode:12});const fw=W.create(floors);assert(!fw.blocked({x:0,y:0,z:0}));assert(fw.blocked({x:0,y:0,z:6}));assert(!fw.blocked({x:0,y:0,z:18}));
 const lower=data([wall('basement',undefined,undefined,{z:.25})],-4);assert(W.create(lower).blocked({x:0,y:0,z:-4}));assert(!W.create(lower).blocked({x:0,y:0,z:0}));
});
check('generic solids remain non-colliding and visibility, locking, and cutaway do not change wall collision',()=>{
 const shapes=P.types.map((type,i)=>P.create(type,'generic'+i,{x:0,y:0,z:0}));assert(!W.create(data(shapes)).blocked({x:0,y:0,z:0}));
 const d=data([{...wall(),hidden:true,locked:true}]);d.levels[0].visible=false;d.display={walls:false,cutaway:true,cutHeight:.4,explode:12};d.view={layers:{visible:{L0:false},primitives:{wall:{hidden:true,locked:true}}}};assert(W.create(d).blocked({x:0,y:0,z:0}));
});
check('preview export keeps standalone wall records exact and walkthrough does not duplicate or mutate rendered geometry',()=>{
 const plan={version:1,units:'metres',floors:{L0:{name:'Ground',z:3.25,rooms:[],doors:[],entrances:[],primitives:[{...wall(),z:.5,rotation:33.3}]}}},before=JSON.stringify(plan),d=G.build(plan),level=d.levels[0],geometry=JSON.stringify(d);
 assert.equal(JSON.stringify(plan),before);assert.deepEqual(level.primitives,plan.floors.L0.primitives);assert.equal(level.boxes.length,0);assert.equal(level.polygons.length,0);assert(W.create(d).blocked({x:0,y:0,z:3.75}));assert(!W.create(d).blocked({x:0,y:0,z:0}));assert.equal(JSON.stringify(d),geometry);assert.deepEqual(copy(JSON.parse(JSON.stringify(plan))),copy(plan));
});
check('ordinary copy and floor transfer preserve the wall marker, thickness, orientation and relative elevation',()=>{
 const floor=z=>({name:'Floor',z,rooms:[],doors:[],entrances:[]}),plan={version:1,units:'metres',floors:{L0:floor(2),L1:floor(8)}},o={...wall(),z:.123456,rotation:37.8,x:.123456,y:.654321};plan.floors.L0.primitives=[o];const before=JSON.stringify(plan),selection={rooms:[],doors:[],primitives:[o.id]},bundle=O.snapshot(plan,'L0',selection),pasted=O.paste(plan,bundle,'L1',{x:.333333,y:.444444}).plan.floors.L1.primitives[0];
 assert.notEqual(pasted.id,o.id);assert.equal(pasted.wall,true);assert.equal(pasted.h,.25);assert.equal(pasted.z,o.z);assert.equal(pasted.rotation,o.rotation);near(pasted.x,o.x+.333333);near(pasted.y,o.y+.444444);P.validate(pasted);
 const moved=O.move(plan,'L0',selection,'L1').plan;assert.equal(moved.floors.L0.primitives.length,0);assert.deepEqual({...moved.floors.L1.primitives[0],id:o.id},o);assert.equal(JSON.stringify(plan),before);assert.deepEqual(copy(moved.floors.L1.primitives),moved.floors.L1.primitives);
});
console.log('PASS '+checks+' thin-wall model, collision, movement, and isolation checks');
