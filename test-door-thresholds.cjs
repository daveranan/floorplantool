const assert=require('node:assert/strict'),G=require('./dist/preview-geometry'),D=require('./dist/stair-detail'),R=require('./dist/route-stairs'),S=require('./dist/room-shapes'),W=require('./dist/walkthrough');
const clone=x=>JSON.parse(JSON.stringify(x));
function fixture({angle=0,depth=2.45,width=2,kind='door',sealed=false,stairs=true}={}) {
  const room={id:'hall',name:'Hall',type:'tech',x:0,y:-8,w:10,h:8,z:1.5,height:7};
  const outside={id:'court',name:'Court',type:'terrace',x:-6,y:0,w:18,h:10,z:.75};
  const route=R.create([[5,4.25],[5,1.25],[-4,1.25]],{id:'route',startZ:.75,endZ:5.75,width:2.3});
  R.setHeight(route,1,1.5);route.routeStair.nodes[1].landingDepth=depth;route.routeStair.nodes[0].landingDepth=1;
  const radians=angle*Math.PI/180,point=(x,y)=>({x:x*Math.cos(radians)-y*Math.sin(radians),y:x*Math.sin(radians)+y*Math.cos(radians)});
  if(angle)for(const r of [room,outside,route])S.rotate(r,angle,{x:0,y:0});
  const plan={floors:{L0:{z:.75,rooms:[room,outside,...stairs?[route]:[]],doors:[{id:'entry',a:'hall',b:'court',edge:'v2',width,offset:.5,kind,sealed}]}}};
  return {plan,point};
}
function travel(data,start,end,step=.01) {
  const w=W.create(data);w.setState({...start,floor:'L0'});const distance=Math.hypot(end.x-start.x,end.y-start.y),n=Math.ceil(distance/step);
  for(let i=0;i<n;i++)w.move((end.x-start.x)/n,(end.y-start.y)/n);
  return w.state;
}
for(const angle of [0,31,90]) {
  const {plan,point}=fixture({angle}),saved=JSON.stringify(plan),data=G.build(plan,D),start={...point(5,4.25),z:.75},end={...point(5,-2),z:1.5};
  assert.equal(JSON.stringify(plan),saved,'thresholds are derived and never mutate saved plan');
  const thresholds=data.levels.flatMap(l=>[...l.boxes,...l.polygons||[]]).filter(b=>b.threshold);
  assert(thresholds.length,'the landing gap gets an exact door threshold');
  for(const step of [.009,.016,.037,.079])for(const reverse of [false,true]) {
    const a=reverse?end:start,b=reverse?start:end,q=travel(data,a,b,step);
    assert(Math.hypot(q.x-b.x,q.y-b.y)<.001,`angle ${angle}, step ${step}, ${reverse?'exit':'entry'}: ${JSON.stringify(q)}`);
    assert(Math.abs(q.z-b.z)<.001);
  }
  const unsupported=clone(data);for(const l of unsupported.levels){l.boxes=l.boxes.filter(b=>!b.threshold);l.polygons=l.polygons.filter(b=>!b.threshold);}
  const stopped=travel(unsupported,start,end);assert(Math.hypot(stopped.x-end.x,stopped.y-end.y)>1,'without the threshold the 2.5 cm gap reproduces the blocked doorway');
  const w=W.create(data),gap={...point(5,.0125),z:1.5};assert.equal(w.supported(gap)?.z,1.5,'actual gap has support at room/landing height');
  assert(w.blocked({...point(3.8,0),z:1.5}),'the adjacent wall still collides');
  assert.equal(w.supported({...point(5,.0125),z:.75}),null,'threshold never permits a .75 m jump from the floor below');
  const area=thresholds.reduce((sum,b)=>sum+Math.abs(S.areaOf(b.polygon))-b.holes.reduce((n,h)=>n+Math.abs(S.areaOf(h)),0),0);
  assert(Math.abs(area-.05)<1e-5,'threshold fills only 2 m × .025 m gap without duplicate slab surfaces');
}
for(const options of [{sealed:true},{kind:'window'},{width:.5},{depth:1.5}]) {
  const {plan,point}=fixture(options),data=G.build(plan,D),start={...point(5,4.25),z:.75},end={...point(5,-2),z:1.5},q=travel(data,start,end);
  assert(Math.hypot(q.x-end.x,q.y-end.y)>1,JSON.stringify(options)+' cannot bypass an obstructed/narrow door or bridge a large gap');
  if(options.sealed||options.kind==='window')assert(!data.levels.some(l=>l.polygons.some(b=>b.threshold)),'sealed doors/windows create no walking threshold');
}
const normal={floors:{L0:{z:0,rooms:[{id:'a',type:'tech',x:0,y:0,w:5,h:5},{id:'b',type:'tech',x:5,y:0,w:5,h:5}],doors:[{id:'d',a:'a',b:'b',width:1.2,offset:.5}]}}};
const nd=G.build(normal,D);assert(!nd.levels.some(l=>l.polygons.some(b=>b.threshold)),'already adjoining slabs do not gain duplicate geometry');
assert(Math.abs(travel(nd,{x:4,y:2.5,z:0},{x:6,y:2.5,z:0}).x-6)<1e-6);
console.log('PASS door threshold support: 2.5 cm gap reproduction, room/landing entry and exit, 0°/31°/90° walls, four step sizes, exact nonoverlapping 0.05 m² bridge, unchanged model, sealed/window/narrow/large-gap blockers, no high step bypass and normal adjoining rooms');
