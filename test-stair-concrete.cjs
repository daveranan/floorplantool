const assert = require('node:assert/strict');
const G = require('./dist/preview-geometry');
const D = require('./dist/stair-detail');
const E = require('./dist/elevation');
const R = require('./dist/route-stairs');
const S = require('./dist/room-shapes');
const W = require('./dist/walkthrough');
const A = require('./dist/stair-author');
const clone = value => JSON.parse(JSON.stringify(value));
const rect = b => [[b.x,b.y],[b.x+b.w,b.y],[b.x+b.w,b.y+b.h],[b.x,b.y+b.h]];
const inRings = (p, rings) => S.contains(p,rings[0]) && !rings.slice(1).some(h => S.contains(p,h));
const inside = (b,p) => p.z>b.z+1e-7 && p.z<b.z+b.height-1e-7 && inRings(p,[b.polygon||rect(b),...b.holes||[]]);
const shapes = data => data.levels.flatMap(l => [...l.boxes,...l.polygons||[]]);
const solidAt = (data,p,room) => shapes(data).some(b => b.kind==='solid' && (!room||room===b.room) && inside(b,p));
const cutAt = (volumes,p) => volumes.some(v => p.z>v.z0+1e-7 && p.z<v.z1-1e-7 && v.geometry.some(r=>inRings(p,r)));
const center = t => t.polygon.reduce((p,v)=>({x:p.x+v[0]/t.polygon.length,y:p.y+v[1]/t.polygon.length}),{x:0,y:0});
const fill = (id,z,height=3) => ({id,name:id,type:'solid',x:-15,y:-5,w:35,h:35,z,height});
function routePath(room,detail) {
  const nodes=room.routeStair.nodes.map(n=>R.point(room,n)),out=[];
  for(let i=0;i<detail.flights.length;i++) {
    const f=detail.flights[i];
    if(!i)out.push({x:nodes[0][0],y:nodes[0][1],z:f.z0});
    out.push({x:f.upPath[0][0],y:f.upPath[0][1],z:f.z0},
      {x:f.upPath.at(-1)[0],y:f.upPath.at(-1)[1],z:f.z1},
      {x:nodes[i+1][0],y:nodes[i+1][1],z:f.z1});
  }
  return out;
}
function traverse(data,room) {
  const path=routePath(room,data.stairs.find(s=>s.roomId===room.id));
  for(const reverse of [false,true]) {
    const points=reverse?[...path].reverse():path,walk=W.create(data);
    walk.setState({...points[0],floor:'L0'});
    for(const [i,p] of points.entries()) {
      const q=walk.move(p.x-walk.state.x,p.y-walk.state.y);
      assert(Math.hypot(q.x-p.x,q.y-p.y)<.015,`${room.id} ${reverse?'descent':'ascent'} ${i}: ${JSON.stringify(q)} vs ${JSON.stringify(p)}`);
      assert(Math.abs(q.z-p.z)<.025,`${room.id} ${reverse?'descent':'ascent'} ${i} height ${q.z} vs ${p.z}`);
    }
  }
}
// Concrete is fill rather than a navigable room. Only the finite passage is removed,
// including actual intersections with concrete authored on another floor.
const route=R.create([[0,0],[0,12],[12,12]],{id:'bent',width:1.5,startZ:0,endZ:6});
const plan={floors:{B:{z:-3,rooms:[fill('below',-3)],doors:[]},L0:{z:0,rooms:[fill('ground',0),route],doors:[]},L1:{z:3,rooms:[fill('middle',3)],doors:[]},L2:{z:6,rooms:[fill('top',6)],doors:[]},L3:{z:9,rooms:[fill('above',9)],doors:[]}}};
const saved=JSON.stringify(plan),data=G.build(plan,D),detail=data.stairs[0],volumes=E.cutVolumes(detail);
assert.equal(JSON.stringify(plan),saved,'preview leaves saved concrete and stair data unchanged');
assert(data.levels.every(l=>l.rooms.every(r=>r.type!=='solid')),'concrete never becomes an empty room');
const crossed=detail.flights[0].treads.find(t=>t.z>1.4&&t.z<1.8),high=detail.flights[1].treads.find(t=>t.z>4&&t.z<4.4);
assert(!solidAt(data,{...center(crossed),z:3.1},'middle'),'passage crosses concrete on another floor');
assert(solidAt(data,{...center(high),z:3.1},'middle'),'concrete below high treads remains');
assert(solidAt(data,{x:0,y:1,z:3.1},'middle'),'concrete above low-tread headroom remains');
assert(solidAt(data,{x:8,y:5,z:3.1},'middle'),'bent-path bounding-box gap remains solid');
assert(solidAt(data,{x:0,y:1,z:-2.5},'below'),'floor below remains solid');
assert(solidAt(data,{x:0,y:1,z:9.5},'above'),'floor above remains solid');
for(const t of detail.flights.flatMap(f=>f.treads)) {
  assert(!solidAt(data,{...center(t),z:t.z+.7}),'tread headroom is clear');
  const below={...center(t),z:t.z-.22};
  if(!cutAt(volumes,below))assert(solidAt(data,below),'concrete stays beneath the stair body');
}
traverse(data,route);
// Preserve arbitrary rotated/concave outlines, existing holes, nonintersecting
// objects and the mass above and below every independently bounded cut volume.
const rotated=clone(route);S.rotate(rotated,31,{x:0,y:0});
const rotatedPlan={floors:{L0:{z:0,rooms:[rotated],doors:[]}}};
const rv=E.cutVolumes(R.build(rotatedPlan,'L0','bent'));
const shell={...fill('concave',-2,13),kind:'solid',baseZ:-2,polygon:[[-15,-5],[20,-5],[20,30],[8,30],[8,25],[-15,25]],holes:[[[12,20],[16,20],[16,24],[12,24]]]};
const untouched={...fill('disjoint',-2,13),x:40,y:40,kind:'solid'},input={levels:[{id:'unrelated-floor',boxes:[clone(untouched)],polygons:[clone(shell)]}]};
E.cutSurfaces(input,rv);assert.deepEqual(input.levels[0].boxes.find(b=>b.id==='disjoint'),untouched);
let probes=0;
for(let x=-13.73;x<19;x+=1.13)for(let y=-3.67;y<29;y+=1.17)for(const z of [-1.3,-.11,.41,1.29,2.81,4.33,6.11,7.53,8.31,9.21,10.71]) {
  const p={x,y,z};
  assert.equal(solidAt(input,p),inside(shell,p)&&!cutAt(rv,p),`rotated concrete ${JSON.stringify(p)}`);probes++;
}
assert(!solidAt(input,{x:14,y:22,z:3}),'existing concrete hole stays open');
// A rotated multilevel turn stays traversable through all retained concrete.
const rp=clone(plan);rp.floors.L0.rooms[1]=rotated;traverse(G.build(rp,D),rotated);
// The 0.8 m entry has only 0.1 m clearance on each side of the walk capsule.
// Keep its sides and overhead material; the foot contact exception must not
// silently disable a torso blocker, side wall or another overlapping flight.
const narrow=R.create([[-2,0],[10,0]],{id:'narrow',width:.8,startZ:.6,endZ:3.6});
const np={floors:{L0:{z:0,rooms:[{id:'concrete',type:'solid',x:0,y:-2,w:8,h:4,z:0,height:7},narrow],doors:[]}}};
const nd=G.build(np,D);traverse(nd,narrow);
const walk=W.create(nd),flight=nd.stairs[0].flights[0],point={x:4,y:0};point.z=walk.rampHeight(point,flight);
assert(!walk.blocked(point),'clear center of narrow passage');
assert(walk.blocked({...point,y:.15}),'retained concrete side respects capsule radius');
assert(walk.blocked({...point,z:point.z+1}),'retained concrete above headroom still blocks');
const blocked=clone(nd);blocked.levels[0].boxes.push({kind:'solid',x:3.9,y:-.1,w:.2,h:.2,z:point.z+.8,height:.15});
assert(W.create(blocked).blocked(point),'real concrete at torso is not ignored');
const upper=clone(nd),other=clone(flight);other.id='unrelated-high-lap';other.z0+=4;other.z1+=4;other.treads.forEach(t=>t.z+=4);upper.stairs[0].flights.push(other);upper.levels[0].boxes.push({kind:'solid',x:3.9,y:-.1,w:.2,h:.2,z:point.z+.8,height:.15});
assert(W.create(upper).blocked(point),'unrelated upper stair cannot erase a lower blocker');
// Unshaped, conventional stairs use the same cutter and retain axis-aligned boxes.
const base={version:1,floors:{L0:{z:0,rooms:[{id:'block',type:'solid',x:-1,y:-1,w:16,h:4,z:0,height:8}],doors:[]},L1:{z:3,rooms:[],doors:[]}}};
const straight=A.prepare(base,{floorId:'L0',floors:['L0','L1'],name:'Straight',stairType:'straight',x:0,y:0,w:14,h:2,runAxis:'x',landingEnd:'west'});
const sd=G.build(straight.plan,D),st=sd.stairs[0].flights[0].treads[3];
assert(!sd.shapeAware,'conventional rectangular builder exercised');
assert(!solidAt(sd,{...center(st),z:st.z+.8}),'rectangular stair carves concrete');
assert(solidAt(sd,{...center(st),z:7.7}),'rectangular concrete upper mass remains');
console.log(`PASS concrete stair carving: bounded multilevel passage, retained sides/underbody/headroom/bounds gaps, ${probes} rotated volume probes, concave shapes and holes, nonoverlap, narrow entry, rotated ascent/descent, blocker isolation, rectangular stairs and unchanged saved data`);
