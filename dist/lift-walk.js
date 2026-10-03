/* Read-only lift stops and bounded, collision-checked arrivals for Walk. */
(function(root){
'use strict';
const S=root.KERN_SHAPES||(typeof require==='function'?require('./room-shapes.js'):null);
const EPS=1e-6,Z_EPS=1e-4,arr=value=>Array.isArray(value)?value:[],stopFloor=value=>typeof value==='string'?value:value?.floor;
const elevation=(room,floor)=>room.z??floor.z;
const hasFloor=(plan,id)=>typeof id==='string'&&!!plan?.floors&&Object.hasOwn(plan.floors,id);
const liftConnections=plan=>arr(plan?.verticalConnections).filter(c=>c?.type==='lift'&&typeof c.room==='string');
const live=(plan,c)=>!!c&&liftConnections(plan).includes(c);
const memberships=(plan,room,id)=>liftConnections(plan).filter(c=>c.room===room.id&&arr(c.floors).includes(id));
const floorLabel=(plan,id)=>plan.floors[id].name?`${id} · ${plan.floors[id].name}`:id;
function outline(room){
 if(!S||![room?.x,room?.y,room?.w,room?.h].every(Number.isFinite)||room.w<=0||room.h<=0)return null;
 const ps=S.points(room);return ps.length>=3&&ps.every(p=>p.length===2&&p.every(Number.isFinite))&&Math.abs(S.areaOf(ps))>EPS?ps:null;
}
function edgeDistance(p,ps){
 let best=Infinity;for(let i=0;i<ps.length;i++){const a=ps[i],b=ps[(i+1)%ps.length],dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((p.x-a[0])*dx+(p.y-a[1])*dy)/(dx*dx+dy*dy||1)));best=Math.min(best,Math.hypot(p.x-a[0]-t*dx,p.y-a[1]-t*dy));}return best;
}
const contains=(p,ps)=>S.contains(p,ps)&&edgeDistance(p,ps)>EPS;
const circleInside=(p,ps,radius)=>S.contains(p,ps)&&edgeDistance(p,ps)>=radius+EPS;
const circleTouches=(p,ps,radius)=>S.contains(p,ps)||edgeDistance(p,ps)<=radius+EPS;
function roomAt(plan,c,id){
 if(!hasFloor(plan,id))return null;
 const matches=arr(plan.floors[id].rooms).filter(r=>r?.id===c.room);
 return matches.length===1?matches[0]:null;
}
function accessible(c,room,id){
 // An explicit stops array is an allowlist. Cached stop heights and footprints
 // never reconnect a detached floor or override the room's current geometry.
 return arr(c.floors).includes(id)&&(!Object.hasOwn(c,'stops')||Array.isArray(c.stops)&&c.stops.some(s=>stopFloor(s)===id))&&!arr(c.throughOnlyFloors).some(s=>stopFloor(s)===id)&&!room.throughOnly&&room.access!=='no-floor-access'&&!['void','solid','courtyard'].includes(room.type)&&!room.routeStair&&!room.stairTransition&&!room.localSteps;
}
function target(plan,c,id){
 if(!live(plan,c)||!hasFloor(plan,id))return null;
 const room=roomAt(plan,c,id),floor=plan.floors[id];
 if(!room||!accessible(c,room,id)||memberships(plan,room,id).length!==1)return null;
 const z=elevation(room,floor),ps=outline(room);
 return Number.isFinite(z)&&ps?{room,floor,id,z,ps}:null;
}
function find(plan,state){
 if(!hasFloor(plan,state?.floor)||![state?.x,state?.y,state?.z].every(Number.isFinite))return null;
 const id=state.floor,floor=plan.floors[id],lifts=liftConnections(plan),candidates=[];
 for(const room of arr(floor.rooms)){
  const ps=outline(room);if(!ps||!Number.isFinite(elevation(room,floor))||Math.abs(elevation(room,floor)-state.z)>Z_EPS||!contains(state,ps)||['void','solid','courtyard'].includes(room.type))continue;
  const links=memberships(plan,room,id),known=lifts.some(c=>c.room===room.id)||room.liftDetail||['lift','elevator'].includes(room.type)||room.type==='core'&&/\b(freight|lift|elevator)\b/i.test(`${room.id} ${room.name||''}`);
  if(links.length||known)candidates.push({room,links});
 }
 const linked=candidates.filter(c=>c.links.length),choices=linked.length?linked:candidates;
 if(!choices.length)return null;
 const {room,links}=choices[0],result={connection:null,room,floor:id,label:room.name||room.id};
 if(choices.length!==1||arr(floor.rooms).filter(r=>r?.id===room.id).length!==1||links.length>1)return{...result,reason:'Lift membership is ambiguous.'};
 if(!links.length)return{...result,reason:'No connected stops. This lift is detached on this floor.'};
 if(!accessible(links[0],room,id))return{...result,reason:'This floor has no lift stop.'};
 return{...result,connection:links[0]};
}
function candidates(ps){
 const bounds=S.bounds(ps),center={x:bounds.x+bounds.w/2,y:bounds.y+bounds.h/2},out=[center];
 // Polygon area centroid is useful for sloping/rotated rooms; concave centroids
 // may lie outside and are subjected to the same footprint test as every point.
 let area=0,x=0,y=0;for(let i=0;i<ps.length;i++){const a=ps[i],b=ps[(i+1)%ps.length],cross=a[0]*b[1]-b[0]*a[1];area+=cross;x+=(a[0]+b[0])*cross;y+=(a[1]+b[1])*cross;}
 if(Math.abs(area)>EPS)out.push({x:x/(3*area),y:y/(3*area)});
 const grid=[];for(let row=0;row<13;row++)for(let col=0;col<13;col++)grid.push({x:bounds.x+bounds.w*(col+.5)/13,y:bounds.y+bounds.h*(row+.5)/13});
 grid.sort((a,b)=>Math.hypot(a.x-center.x,a.y-center.y)-Math.hypot(b.x-center.x,b.y-center.y)||a.y-b.y||a.x-b.x);out.push(...grid);
 // A bounded selection of triangle centers reaches narrow parts of irregular
 // outlines without an unbounded search over the plan or any exterior fallback.
 const count=Math.min(ps.length-2,48);for(let i=0;i<count;i++){const j=1+Math.floor(i*(ps.length-2)/count),a=ps[0],b=ps[j],c=ps[j+1];out.push({x:(a[0]+b[0]+c[0])/3,y:(a[1]+b[1]+c[1])/3});}
 const seen=new Set();return out.filter(p=>{const key=`${p.x.toFixed(7)},${p.y.toFixed(7)}`;if(seen.has(key))return false;seen.add(key);return true;});
}
function hazards(plan,t,body){
 const out=[];
 for(const [id,floor]of Object.entries(plan.floors))for(const room of arr(floor.rooms)){
  if(room===t.room)continue;
  const z=elevation(room,floor),height=room.height??floor.clearHeight??3;
  const hole=room.type==='void'&&id===t.id||room.type==='courtyard'&&z<=t.z+Z_EPS;
  const obstruction=room.type==='solid'&&z<t.z+body-EPS&&z+height>t.z+EPS;
  const closedShaft=id===t.id&&(room.throughOnly||room.access==='no-floor-access')&&Math.abs(z-t.z)<Z_EPS;
  if(hole||obstruction||closedShaft){const ps=outline(room);if(ps)out.push(ps);}
 }
 if(plan.courtyard&&t.z>=(plan.courtyard.z??0)-Z_EPS){const ps=outline(plan.courtyard);if(ps)out.push(ps);}
 return out;
}
function landing(plan,connection,id,world){
 const t=target(plan,connection,id);
 if(!t||typeof world?.heights!=='function'||typeof world?.blocked!=='function'||typeof world?.supported!=='function')return null;
 const radius=world.radius??.3,body=world.body??1.8;
 if(!Number.isFinite(radius)||radius<=0||!Number.isFinite(body)||body<=0||(t.room.height??t.floor.clearHeight??3)<body-EPS)return null;
 const holes=hazards(plan,t,body),samples=[{x:0,y:0}];
 for(const scale of [.5,1])for(let i=0;i<16;i++){const angle=i*Math.PI/8;samples.push({x:radius*scale*Math.cos(angle),y:radius*scale*Math.sin(angle)});}
 for(const p of candidates(t.ps)){
  if(!circleInside(p,t.ps,radius)||holes.some(ps=>circleTouches(p,ps,radius)))continue;
  const q={x:p.x,y:p.y,z:t.z,floor:id};
  // blocked uses the world's current standing/crouched body. A same-height
  // surface on another floor, a nearby stair tread, or outside ground is not an
  // arrival. Verify flat support underneath the whole sampled body footprint.
  const supported=world.supported(q);if(!supported||supported.floor!==id||Math.abs(supported.z-t.z)>Z_EPS||world.blocked(q))continue;
  if(samples.every(offset=>arr(world.heights({x:q.x+offset.x,y:q.y+offset.y,z:q.z,floor:id})).some(h=>h.floor===id&&Number.isFinite(h.z)&&Math.abs(h.z-t.z)<=Z_EPS)))return q;
 }
 return null;
}
function stops(plan,connection,world,currentFloor){
 if(!live(plan,connection))return[];
 const out=[];for(const id of [...new Set(arr(connection.floors))]){
  const t=target(plan,connection,id);if(!t)continue;
  const point=landing(plan,connection,id,world);
  out.push({floor:id,label:floorLabel(plan,id),z:t.z,current:id===currentFloor,point,...(!point?{reason:'No safe landing is available at this stop.'}:{})});
 }
 return out.sort((a,b)=>b.z-a.z||a.floor.localeCompare(b.floor));
}
const api={find,stops,landing};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.KERN_LIFT_WALK=api;
})(typeof window!=='undefined'?window:globalThis);
