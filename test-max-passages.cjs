const assert=require('node:assert/strict'),S=require('./dist/room-shapes'),M=require('./dist/max-passages');
const clone=x=>JSON.parse(JSON.stringify(x)),r=(id,x,y,w,h,extra={})=>({id,name:id,type:'tech',x,y,w,h,...extra});
const plan=rooms=>({version:1,units:'metres',floors:{L0:{name:'Ground',z:0,clearHeight:3,rooms,doors:[],entrances:[]}}});
const pair=()=>plan([r('a',0,0,10,20),r('b',10,0,10,20)]);
const candidate=(p,point={x:10,y:10},a='a',b='b',options={})=>M.candidate(p,'L0',a,b,point,options);
const near=(a,b,message)=>assert(Math.abs(a-b)<1e-5,message||`${a} != ${b}`);
let p=pair(),before=JSON.stringify(p),q=candidate(p);assert(q.valid,q.reason);assert.equal(JSON.stringify(p),before,'proposal is read-only');assert.equal(q.door.kind,'open');assert.equal(q.door.fullWidth,true);assert.equal(q.door.width,20);assert.equal(q.door.height,3);assert(!Object.hasOwn(q.door,'leaves'));
// Existing openings of every kind, including sealed doors and windows,
// stay authored and become barriers rather than being deleted or widened.
for(const kind of ['door','window','open']){
 p=pair();p.floors.L0.doors.push({id:'existing',a:'a',b:'b',kind,width:2,offset:.2,fullWidth:false,sealed:true,sill:1,height:1});before=JSON.stringify(p);
 q=candidate(p);assert(q.valid,q.reason);assert.equal(q.door.fullWidth,false);assert(q.door.width>8,'bounded maximum exceeds ordinary door width');const old=S.opening(p.floors.L0.doors[0],p.floors.L0);assert(q.geometry.start>old.end+.05);near(q.geometry.end,19.9);assert.equal(JSON.stringify(p),before);
}
p=pair();p.floors.L0.doors.push({id:'full',a:'a',b:'b',kind:'open',width:2,offset:.5});assert(!candidate(p).valid,'a completely open wall has no new passage');
// Common room clearance begins at the higher surface, and uses the lower top.
p=pair();Object.assign(p.floors.L0.rooms[0],{z:-1,height:5});Object.assign(p.floors.L0.rooms[1],{z:1,height:2});q=candidate(p);assert(q.valid,q.reason);near(q.z,1);near(q.door.height,2);p.floors.L0.rooms[1].z=6;assert(!candidate(p).valid,'disjoint elevations cannot connect');
// Physical wall profiles combine owners: Full + Half remains a full wall;
// Half + None has only half clearance; None + None is already open.
for(const [a,b,height,valid]of [['full','half',3,true],['half','none',1.1,true],['none','none',0,false]]){
 p=pair();p.floors.L0.rooms[0].walls={mode:a,lowHeight:1.1};p.floors.L0.rooms[1].walls={mode:b,lowHeight:1.1};q=candidate(p);assert.equal(q.valid,valid,q.reason);if(valid)near(q.door.height,height);
}
p=pair();p.floors.L0.rooms[0].walls={mode:'none',edges:{v1:'half'},lowHeight:.8};p.floors.L0.rooms[1].walls={mode:'none'};q=candidate(p);assert(q.valid,q.reason);near(q.door.height,.8);p.floors.L0.rooms[1].z=1;assert(!candidate(p).valid,'wall below upper room surface is not clearance');
// Nested passage is bounded to the actual parent-facing remainder of the wall.
p=plan([r('outer',0,0,20,20),r('inner',2,2,4,10),r('sibling',6,2,3,4)]);
for(const reverse of [false,true]){q=candidate(p,{x:6,y:9},reverse?'outer':'inner',reverse?'inner':'outer');assert(q.valid,q.reason);assert.equal(q.door.a,'inner');assert.equal(q.door.b,'outer');assert.equal(q.door.fullWidth,false);near(q.geometry.start,6);near(q.geometry.end,11.9);assert(q.door.width<10);}
q=candidate(p,{x:4,y:2},'inner','outer');assert(q.valid,q.reason);assert.equal(q.door.edge,'v0','nearest chosen boundary stays local');
// Rotations retain canonical line frames and exact clear lengths.
for(const angle of [17,37,90,177,270]){
 p=pair();for(const room of p.floors.L0.rooms)assert(S.rotate(room,angle,{x:0,y:0}));const e=S.edges(p.floors.L0.rooms[0])[1],mid={x:(e.a[0]+e.b[0])/2,y:(e.a[1]+e.b[1])/2};q=candidate(p,mid);assert(q.valid,angle+': '+q.reason);near(q.door.width,20);near(q.door.height,3);assert(S.opening(q.door,p.floors.L0));
}
// Collinear target vertices must not turn one shared wall into short openings.
p=pair();assert(S.set(p.floors.L0.rooms[1],[[10,0],[20,0],[20,20],[10,20],[10,12],[10,7]]));q=candidate(p);assert(q.valid,q.reason);near(q.door.width,20);assert.equal(q.door.fullWidth,true);
// A concave target can share disjoint segments of one source edge. Keep the
// selected segment instead of choosing the longest segment somewhere else.
p=plan([r('a',0,0,10,20),r('b',10,0,10,20)]);assert(S.set(p.floors.L0.rooms[1],[[10,0],[20,0],[20,20],[10,20],[10,12],[15,12],[15,4],[10,4]]));
q=candidate(p,{x:10,y:2});assert(q.valid,q.reason);near(q.geometry.start,0);near(q.geometry.end,4);q=candidate(p,{x:10,y:16});assert(q.valid,q.reason);near(q.geometry.start,12);near(q.geometry.end,20);
// None splits the usable span; Half limits the common height of a connected run.
p=pair();const a=p.floors.L0.rooms[0],b=p.floors.L0.rooms[1];assert(S.set(a,[[0,0],[10,0],[10,7],[10,12],[10,20],[0,20]]));a.walls={mode:'none',edges:{[a.shape.vertices[1].id]:'full',[a.shape.vertices[3].id]:'half'},lowHeight:1.2};b.walls={mode:'none'};q=candidate(p);assert(q.valid,q.reason);near(q.geometry.start,12);near(q.geometry.end,19.9);near(q.door.height,1.2);
// A third owner's coincident wall cannot be removed by connecting this pair.
p=pair();p.floors.L0.rooms.push(r('third',10,0,5,6));q=candidate(p);assert(q.valid,q.reason);assert(q.geometry.start>=6);near(q.geometry.end,19.9);
assert(!candidate(pair(),{x:10,y:10},'a','b',{canEdit:()=>false}).valid);
assert(!candidate(pair(),{x:NaN,y:10}).valid);assert(!candidate(pair(),{x:10,y:10},'a','a').valid);assert(!candidate(pair(),{x:10,y:10},'a','outside').valid);
console.log('PASS maximum passages: full/bounded walls, preserved opening barriers, common height, Full/Half/None edges, nested siblings, rotated and collinear polygons, disjoint boundaries, unrelated walls and pure proposals');
