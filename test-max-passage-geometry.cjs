const assert=require('node:assert/strict'),S=require('./dist/room-shapes'),M=require('./dist/max-passages'),P=require('./dist/preview-geometry'),Walk=require('./dist/walkthrough');
const room=(id,x,y,w,h,extra={})=>({id,name:id,type:'tech',x,y,w,h,...extra});
const plan=rooms=>({version:1,units:'metres',floors:{L0:{name:'Ground',z:0,clearHeight:3,rooms,doors:[],entrances:['a']}}});
const near=(a,b)=>assert(Math.abs(a-b)<1e-5,`${a} != ${b}`);
function install(p,a='a',b='b',point={x:10,y:10}){const q=M.candidate(p,'L0',a,b,point);assert(q.valid,q.reason);p.floors.L0.doors.push(q.door);return q;}
for(const angle of [0,37,90]){
 const p=plan([room('a',0,0,10,20),room('b',10,0,10,20)]);for(const r of p.floors.L0.rooms)if(angle)assert(S.rotate(r,angle,{x:0,y:0}));const e=S.edges(p.floors.L0.rooms[0])[1],point={x:(e.a[0]+e.b[0])/2,y:(e.a[1]+e.b[1])/2},q=install(p,'a','b',point),data=P.build(p),o=data.levels[0].openings.find(o=>o.id===q.door.id);assert(o);near(o.end-o.start,20);near(o.height,3);assert.equal(o.kind,'passage');
 const n=q.geometry.n;for(const sign of [-1,1]){const walk=Walk.create(data);walk.setState({x:point.x+n[0]*sign,y:point.y+n[1]*sign,z:0,floor:'L0'});for(let i=0;i<40;i++)walk.move(-n[0]*sign*.05,-n[1]*sign*.05);assert(Math.hypot(walk.state.x-(point.x-n[0]*sign),walk.state.y-(point.y-n[1]*sign))<.02,'whole open wall is traversable in either direction');}
}
// The widest span may cross a Full-to-Half profile change. Its explicit common
// height must survive the 3D pipeline and leave the full-wall lintel in place.
const mixed=plan([room('a',0,0,10,20),room('b',10,0,10,20,{walls:{mode:'none'}})]),a=mixed.floors.L0.rooms[0];assert(S.set(a,[[0,0],[10,0],[10,10],[10,20],[0,20]]));a.walls={mode:'none',lowHeight:1.1,edges:{[a.shape.vertices[1].id]:'full',[a.shape.vertices[2].id]:'half'}};const q=install(mixed),data=P.build(mixed),o=data.levels[0].openings.find(o=>o.id===q.door.id);near(q.door.height,1.1);near(o.height,1.1);
const walls=(data.levels[0].polygons||[]).filter(p=>p.kind==='wall');assert(walls.some(p=>p.z>=1.1-1e-6&&p.height>1),'unremoved top of the full-height half remains a lintel');
const elevated=plan([room('a',0,0,10,20,{z:-1,height:5}),room('b',10,0,10,20,{z:1,height:2})]);const qe=install(elevated),de=P.build(elevated),oe=de.levels[0].openings.find(o=>o.id===qe.door.id);near(oe.z,1);near(oe.height,2);const retained=(de.levels[0].polygons||[]).filter(p=>p.kind==='wall');assert(retained.some(p=>p.z===-1&&p.height===2),'wall base below the higher surface remains');assert(retained.some(p=>p.z===3&&p.height===1),'wall above the common top remains');
console.log('PASS maximum passage 3D geometry: exact width/height, both-direction rotated traversal, Full/Half common clearance, upper lintels and lower wall bases');
