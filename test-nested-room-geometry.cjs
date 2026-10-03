const assert=require('node:assert/strict');
const S=require('./dist/room-shapes.js'),G=require('./dist/preview-geometry.js'),W=require('./dist/walkthrough.js');
const close=(a,b,label)=>assert(Math.abs(a-b)<1e-6,`${label}: ${a} != ${b}`);
const parent=()=>({id:'kitchen',name:'Kitchen',type:'living',x:0,y:0,w:12,h:10,height:3});
const child=extra=>({id:'storage',name:'Kitchen Storage',type:'service',x:1,y:1,w:4.5,h:4,...extra});
const door=extra=>({id:'storage-door',a:'storage',b:'kitchen',edge:'v1',kind:'door',width:1,offset:.5,...extra});
const area=s=>s.polygon?Math.abs(S.areaOf(s.polygon))-(s.holes||[]).reduce((sum,h)=>sum+Math.abs(S.areaOf(h)),0):s.w*s.h;
const occupied=(s,x,y)=>x>=s.x-1e-6&&x<=s.x+s.w+1e-6&&y>=s.y-1e-6&&y<=s.y+s.h+1e-6&&(!s.polygon||S.contains({x,y},s.polygon))&&!(s.holes||[]).some(h=>S.contains({x,y},h));
function fixture(rooms,doors=[]){
 const plan={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,clearHeight:3,rooms,doors,entrances:[]}}},before=JSON.stringify(plan),data=G.build(plan);
 assert.equal(JSON.stringify(plan),before,'Read-only preview does not persist inferred nesting');
 const shapes=data.levels.flatMap(l=>[...l.boxes,...l.polygons||[]]);
 return{plan,data,shapes,walk:W.create(data),area:(kind,room)=>shapes.filter(s=>s.kind===kind&&s.room===room&&!s.threshold).reduce((sum,s)=>sum+area(s),0),at:(kind,x,y)=>shapes.filter(s=>s.kind===kind&&occupied(s,x,y))};
}
function noOverlap(shapes,label){
 for(let i=0;i<shapes.length;i++)for(let j=i+1;j<shapes.length;j++){
  const a=shapes[i],b=shapes[j],vertical=Math.min(a.z+a.height,b.z+b.height)-Math.max(a.z,b.z);
  if(vertical<=1e-6)continue;
  const geometry=s=>[[s.polygon||[[s.x,s.y],[s.x+s.w,s.y],[s.x+s.w,s.y+s.h],[s.x,s.y+s.h]],...s.holes||[]]];
  const overlap=S.clip.intersection(geometry(a),geometry(b)).reduce((sum,p)=>sum+Math.abs(S.areaOf(p[0]))-p.slice(1).reduce((n,h)=>n+Math.abs(S.areaOf(h)),0),0);
  assert(overlap<1e-6,`${label}: ${a.room} and ${b.room} overlap by ${overlap} m² across ${vertical} m`);
 }
}

for(const reversed of [false,true]){
 const rooms=[parent(),child()],f=fixture(reversed?rooms.reverse():rooms,[door()]);
 assert(f.data.shapeAware,'Rectangular enclosures use the polygon partitioner');
 close(f.area('slab','kitchen'),102,'Surrounding floor retains its area');close(f.area('slab','storage'),18,'Nested floor keeps its material and identity');
 close(f.area('ceiling','kitchen'),102,'Surrounding ceiling excludes equal-height child');close(f.area('ceiling','storage'),18,'Nested ceiling owns its footprint');
 noOverlap(f.shapes.filter(s=>['slab','ceiling'].includes(s.kind)),'Nested floor and ceiling volumes');
 assert.equal(f.data.levels[0].openings.length,1);assert(!f.data.warnings.some(s=>s.includes('detached')),'Valid nested door has no false detached warning');
 assert(f.shapes.some(s=>s.kind==='opening-marker'&&s.door==='storage-door'),'Nested door retains its 3D selection marker');
 f.walk.setState({x:6.5,y:3,z:0,floor:'L0'});close(f.walk.move(-3,0).x,3.5,'Walking crosses the nested doorway');
 f.walk.setState({x:6.5,y:1.6,z:0,floor:'L0'});assert(f.walk.move(-3,0).x>5.5,'Closed child wall still blocks walking');
 assert.equal(f.at('slab',2,2)[0].room,'storage');assert.equal(f.at('slab',8,8)[0].room,'kitchen');
}
{
 const f=fixture([parent(),child({x:0,y:0})],[door({edge:'v2'})]);
 close(f.area('slab','kitchen'),102,'Edge-touching nested floor');close(f.area('slab','storage'),18,'Edge-touching child owns its surface');
 assert.equal(f.at('wall',0,2).filter(s=>s.z<1&&s.z+s.height>1).length,1,'Touching exterior wall renders once');
 f.walk.setState({x:2.25,y:5,z:0,floor:'L0'});close(f.walk.move(0,-2).y,3,'Door on parent-facing wall remains passable');
}
{
 const outer=parent();S.set(outer,S.raw(outer));outer.shape.vertices[0].r=1.5;
 const f=fixture([outer,child({x:8,y:6,w:4,h:4})]);
 close(f.area('slab','kitchen')+f.area('slab','storage'),S.area(outer),'Rounded parent preserves exact total footprint');
 close(f.area('slab','storage'),16,'Child tucked into unrounded parent corner');
}
{
 const f=fixture([parent(),child({z:-1})],[door()]);
 assert(!f.walk.blocked({x:2,y:2,z:-1}),'Lowered room is not blocked by the enclosing floor');
 assert.deepEqual(f.walk.heights({x:2,y:2}).map(h=>h.z),[-1]);
 close(f.area('slab','kitchen'),102,'Lowered room cuts only its enclosing slab footprint');
 assert.equal(f.data.levels[0].openings[0].z,0,'Door threshold uses the higher actual floor when parent has no z override');
 assert.equal(f.data.levels[0].openings[0].height,2,'Door height respects the lower ceiling');
 assert(f.data.warnings.some(s=>s.includes('1.00 m level change')),'Unequal floor levels retain their step warning');
 assert.deepEqual(f.at('ceiling',2,2).map(s=>s.z).sort((a,b)=>a-b),[2,3],'Lower child ceiling and outer ceiling both remain');
}
{
 const f=fixture([parent(),child({z:1})]);
 close(f.area('slab','kitchen'),120,'Raised room retains parent support below');
 assert.deepEqual(f.walk.heights({x:2,y:2}).map(h=>h.z).sort((a,b)=>a-b),[0,1]);
 assert(!f.walk.blocked({x:2,y:2,z:1}));
 assert.deepEqual(f.at('ceiling',2,2).map(s=>s.z),[4],'Raised child cuts parent ceiling through its interior');
 noOverlap(f.shapes.filter(s=>['slab','ceiling'].includes(s.kind)),'Raised room volumes');
}
{
 const f=fixture([parent(),child({z:.1})]);
 noOverlap(f.shapes.filter(s=>['slab','ceiling'].includes(s.kind)),'Closely spaced slab volumes');
 const slabs=f.at('slab',2,2);assert.equal(slabs.length,2);close(Math.min(...slabs.map(s=>s.z)),-.3,'Retain lower enclosing slab material');
 close(slabs.reduce((sum,s)=>sum+s.height,0),.4,'Thin raised floor has one continuous solid thickness');
 assert(!f.walk.blocked({x:2,y:2,z:.1}));
}
for(const settings of [{height:2},{z:.5,height:2},{height:2.9}]){
 const f=fixture([parent(),child(settings)]),top=(settings.z||0)+settings.height;
 assert.deepEqual(f.at('ceiling',2,2).map(s=>s.z).sort((a,b)=>a-b),[top,3],'Shorter child keeps an outer ceiling above it');
 assert(f.at('ceiling',8,8).some(s=>s.z===3),'Outer ceiling remains outside the child');
 noOverlap(f.shapes.filter(s=>['slab','ceiling'].includes(s.kind)),'Shorter room ceilings');
 assert(!f.walk.blocked({x:2,y:2,z:settings.z||0}));
}
{
 const f=fixture([parent(),child({height:5})]);
 assert.deepEqual(f.at('ceiling',2,2).map(s=>s.z),[5],'Tall room removes the enclosing ceiling only inside its footprint');
 assert(!f.walk.blocked({x:2,y:2,z:2}),'Old parent cap cannot block the taller room');
 assert(f.at('ceiling',8,8).some(s=>s.z===3));
}
{
 const outer={...parent(),height:4},middle=child({x:1,y:1,w:8,h:8,height:2.5}),inner={...child({id:'closet',x:2,y:2,w:3,h:3,height:6})};
 for(const rooms of [[outer,middle,inner],[inner,outer,middle]]){
  const f=fixture(rooms);close(f.area('slab','kitchen'),56,'Ancestor floor excludes nested middle');close(f.area('slab','storage'),55,'Middle floor excludes grandchild');close(f.area('slab','closet'),9,'Deep child floor remains');
  assert.deepEqual(f.at('ceiling',3,3).map(s=>s.z),[6],'Tall grandchild cuts through all ancestor ceilings');
  assert.deepEqual(f.at('ceiling',6,6).map(s=>s.z).sort((a,b)=>a-b),[2.5,4],'Unrelated middle and outer roofs remain');
  noOverlap(f.shapes.filter(s=>['slab','ceiling'].includes(s.kind)),'Deep enclosure surfaces');
 }
}
{
 const f=fixture([parent(),child({z:5})]);
 assert(!f.data.shapeAware,'Vertically disjoint bodies are not inferred to be nested');
 assert.deepEqual(f.walk.heights({x:2,y:2}).map(h=>h.z).sort((a,b)=>a-b),[0,5],'Independent stacked surfaces remain independent');
}
{
 const a={...parent(),x:0,w:6,h:6,z:-1,height:5},b=child({x:6,y:0,w:6,h:6}),f=fixture([a,b],[door({a:'kitchen',b:'storage',edge:undefined,kind:'open'})]);
 assert(!f.data.shapeAware,'Ordinary adjoining rectangular rooms keep the rectangular builder');
 assert.equal(f.data.levels[0].openings[0].z,0,'Rectangular threshold uses each room’s effective floor');
 assert.equal(f.data.levels[0].openings[0].height,3,'Rectangular passage uses each room’s effective clear height');
}
for(const edge of [undefined,'v1']){
 const a={...parent(),height:1},b=child({x:12,y:0,w:4,h:10,z:2,height:1}),f=fixture([a,b],[door({a:'kitchen',b:'storage',edge})]);
 assert.equal(f.data.levels[0].openings.length,0,'Vertically detached saved door creates no zero/negative-height opening');
 assert(!f.shapes.some(s=>s.door==='storage-door'),'Invalid doorway creates no marker or threshold');
}
console.log('PASS nested-room preview: deterministic floor/ceiling ownership, rectangular and rounded parents, touching edges, real door walking, split elevations, shorter/taller roofs, descendant cuts, and independent stacked bodies.');
