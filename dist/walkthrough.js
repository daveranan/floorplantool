/* Shared metre-space collision and smooth stair traversal, independent of display filters. */
(function(root){
'use strict';
const inside=(p,r,m=0)=>p.x>=r.x-m&&p.x<=r.x+r.w+m&&p.y>=r.y-m&&p.y<=r.y+r.h+m;
// Adjacent rotated stair/landing polygons share their boundary. Include that
// boundary within numeric tolerance so walking cannot drop through the seam.
function polygon(p,vs){let hit=false;for(let i=0,j=vs.length-1;i<vs.length;j=i++){const a=vs[i],b=vs[j],dx=b[0]-a[0],dy=b[1]-a[1],length2=dx*dx+dy*dy;if(length2){const t=((p.x-a[0])*dx+(p.y-a[1])*dy)/length2;if(t>=0&&t<=1&&Math.hypot(p.x-a[0]-t*dx,p.y-a[1]-t*dy)<1e-7)return true;}if((a[1]>p.y)!==(b[1]>p.y)&&p.x<(b[0]-a[0])*(p.y-a[1])/(b[1]-a[1])+a[0])hit=!hit;}return hit}
function create(data,options={}){
 const thinWalls=root.KERN_THIN_WALLS||(typeof require==='function'?require('./thin-walls.js'):null),elevation=root.KERN_ELEVATIONS||(typeof require==='function'?require('./elevation.js'):null);
 const boxes=data.levels.flatMap(l=>[...l.boxes,...(l.polygons||[]).filter(p=>p.ramp||!['stair','landing'].includes(p.kind)),...(l.primitives||[]).filter(o=>o.wall===true).flatMap(o=>Array.isArray(l.rampWallCuts?.[o.id])?l.rampWallCuts[o.id]:[thinWalls.collision(o,l.z)])].map(b=>({...b,floor:l.id}))),walls=boxes.filter(b=>b.ramp||['wall','solid','ceiling','slab','landing','window','window-frame'].includes(b.kind)),surfaces=boxes.filter(b=>['slab','landing'].includes(b.kind));
 const ramps=(data.stairs||[]).flatMap(s=>(s.flights||[]).map(f=>({...f,stair:s})));const grounds=data.levels.find(l=>l.id==='L0')||data.levels.reduce((a,b)=>Math.abs(a.z)<Math.abs(b.z)?a:b),gz=Number.isFinite(data.siteGroundZ)?data.siteGroundZ:grounds.z;
 const shapeTools=root.KERN_SHAPES||(typeof require==='function'?require('./room-shapes.js'):null),contactCache=new WeakMap();
 const stairLandings=(data.stairs||[]).flatMap(stair=>(stair.landings||[]).map(landing=>({...landing,stair})));
 const radius=.3;let body=1.8;const bounds={x:data.bounds.minX-25,y:data.bounds.minY-25,w:data.bounds.maxX-data.bounds.minX+50,h:data.bounds.maxY-data.bounds.minY+50};
 // Arrival landing thresholds bridge the perimeter allowance only at validated stair doors.
 for(const s of data.stairs||[])for(const a of s.access||[])if(a.valid&&a.geometry&&!s.ramp&&!a.surfacePlane){const g=a.geometry,t=.4;if(g.axis==='poly'){surfaces.push({...g,z:a.z-.18,height:.18,floor:a.floor||s.floorId,kind:'landing'});continue;}surfaces.push({x:g.axis==='h'?g.start:g.fixed-t,y:g.axis==='h'?g.fixed-t:g.start,w:g.axis==='h'?g.end-g.start:t*2,h:g.axis==='h'?t*2:g.end-g.start,z:a.z-.18,height:.18,floor:a.floor||s.floorId,kind:'landing'});}
 for(const l of data.levels)for(const p of l.polygons||[])if(p.kind==='landing')surfaces.push({...p,floor:l.id});
 function rampHeight(p,f){if(!(f.polygon?polygon(p,f.polygon):inside(p,f.rect,.001)))return null;const path=f.upPath||[],parts=[];let total=0;for(let i=1;i<path.length;i++){const a=path[i-1],b=path[i],dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy);if(!len)continue;const t=Math.max(0,Math.min(1,((p.x-a[0])*dx+(p.y-a[1])*dy)/(len*len)));parts.push({d:Math.hypot(p.x-a[0]-t*dx,p.y-a[1]-t*dy),u:total+t*len});total+=len;}parts.sort((a,b)=>a.d-b.d);return total&&parts.length?f.z0+(f.z1-f.z0)*parts[0].u/total:null;}
 function heights(p){let out=surfaces.filter(b=>inside(p,b,.008)&&(!b.polygon||polygon(p,b.polygon))&&!(b.holes||[]).some(h=>polygon(p,h))).map(b=>({z:b.topPlane?elevation.planeHeight(b.topPlane,[p.x,p.y]):b.z+b.height,floor:b.floor}));for(const f of ramps){const z=rampHeight(p,f);if(z!==null)out.push({z,floor:(f.stair.stops||[]).reduce((best,s)=>Math.abs(s.z-z)<Math.abs(best.z-z)?s:best).floor});}
 // Ground exists outside enclosed footprints, never across shafts inside the building.
 const groundMasks=[...grounds.rooms,...data.levels.filter(l=>l.id!==grounds.id).flatMap(l=>l.rooms.filter(r=>r.groundSurface||r.localSteps&&data.stairs.some(st=>st.localSteps&&st.floorId===l.id&&st.roomId===r.id&&Math.min(...st.stops.map(s=>s.z))<=gz+.2&&Math.max(...st.stops.map(s=>s.z))>=gz-.2)))];const indoors=groundMasks.some(r=>(r.groundSurface||r.localSteps||!['courtyard','terrace'].includes(r.type))&&(r.routeStair?(data.stairs.find(s=>s.roomId===r.id&&s.floorId===grounds.id)?.footprintGeometry||[]).some(poly=>polygon(p,poly[0])&&!poly.slice(1).some(h=>polygon(p,h))):(r.polygon?polygon(p,r.polygon):inside(p,r))));if(!indoors&&inside(p,bounds))out.push({z:gz,floor:grounds.id});return out;}
 function circleHit(p,b){if(!b.polygon)return p.x+radius>b.x&&p.x-radius<b.x+b.w&&p.y+radius>b.y&&p.y-radius<b.y+b.h;if(polygon(p,b.polygon)&&!(b.holes||[]).some(h=>polygon(p,h)))return true;return [b.polygon,...(b.holes||[])].some(ps=>ps.some((a,i)=>{const q=ps[(i+1)%ps.length],dx=q[0]-a[0],dy=q[1]-a[1],t=Math.max(0,Math.min(1,((p.x-a[0])*dx+(p.y-a[1])*dy)/(dx*dx+dy*dy||1)));return Math.hypot(p.x-a[0]-dx*t,p.y-a[1]-dy*t)<radius-1e-7;}));}
 // Stair walking follows a smooth grade; authored ramps use their exact plane.
 // Treat material below the active treads or ramp as support, rather than a wall
 // against the cylinder's flat base. Keep the exact cutouts and all overhead or
 // side material (including concrete fill); a higher overlapping flight must
 // never clear the lower one. Rendered and colliding concrete use the same pieces.
 function stairContacts(p){
  const active=ramps.filter(f=>{const z=rampHeight(p,f);return z!==null&&Math.abs(z-p.z)<.04;}),landings=stairLandings.filter(l=>Math.abs(l.z-p.z)<.04&&(l.polygon?polygon(p,l.polygon):inside(p,l.rect,.001)));
  for(const l of landings)for(const f of ramps)if(f.stair===l.stair&&[f.fromLanding,f.toLanding].includes(l.id)&&!active.includes(f))active.push(f);
  if(!active.length)return null;
  for(const f of active)for(const l of stairLandings)if(l.stair===f.stair&&[f.fromLanding,f.toLanding].includes(l.id)&&!landings.includes(l))landings.push(l);
  const key=active.map(f=>ramps.indexOf(f)).sort((a,b)=>a-b).join('|'),surfaces=active.flatMap(f=>f.ramp?[{...f,surfacePlane:elevation.rampPlane(f)}]:f.treads||[]).concat(landings);return{key,surfaces};
 }
 function stairBodyHit(p,b,contacts){
  const bodyHit=piece=>{if(!piece.bottomPlane&&!piece.topPlane)return circleHit(p,piece);return elevation.clipPrism(piece,p.z+.03,p.z+body-.04).some(q=>circleHit(p,q));};
  if(!contacts||!shapeTools||!['wall','slab','ceiling','solid'].includes(b.kind)&&!b.ramp)return bodyHit(b);
  let cache=contactCache.get(b);if(!cache)contactCache.set(b,cache=new Map());let pieces=cache.get(contacts.key);
  if(!pieces){const top=b.topPlane||{a:0,b:0,c:b.z+b.height},masks=[];
   for(const s of contacts.surfaces){const outline=s.polygon||[[s.rect.x,s.rect.y],[s.rect.x+s.rect.w,s.rect.y],[s.rect.x+s.rect.w,s.rect.y+s.rect.h],[s.rect.x,s.rect.y+s.rect.h]],plane=s.surfacePlane||{a:0,b:0,c:s.z};
    // A cylinder crossing a slope touches material above its centre's foot
    // height. Only material genuinely below this active surface is support;
    // a nearby side wall or a torso/head obstruction remains collision geometry.
    const geometry=elevation.clipPlane([[outline]],{a:plane.a-top.a,b:plane.b-top.b,c:plane.c-top.c+.03});if(geometry.length)masks.push(geometry);
   }
   if(!masks.length)pieces=[b];else{const outline=b.polygon||[[b.x,b.y],[b.x+b.w,b.y],[b.x+b.w,b.y+b.h],[b.x,b.y+b.h]],remaining=shapeTools.difference([[outline,...b.holes||[]]],masks);pieces=remaining.map(rings=>({...b,...shapeTools.bounds(rings[0]),polygon:rings[0],holes:rings.slice(1)}));}cache.set(contacts.key,pieces);
  }return pieces.some(bodyHit);
 }
 function blocked(p){let contacts;return walls.some(b=>!(['slab','landing'].includes(b.kind)&&b.z+b.height<=p.z+.32)&&p.z+body>b.z+.04&&p.z<b.z+b.height-.03&&circleHit(p,b)&&stairBodyHit(p,b,contacts===undefined?(contacts=stairContacts(p)):contacts));}
 // Climb the highest surface within the existing step limit, including a ramp
 // above a retained floor; choosing the nearest height pins ascent to that floor.
 function supported(p){const hs=heights(p).filter(h=>h.z<=p.z+.32&&h.z>=p.z-.4).sort((a,b)=>Math.abs(b.z-a.z)>1e-6?b.z-a.z:Number(b.floor===p.floor)-Number(a.floor===p.floor));for(const h of hs){const q={...p,z:h.z,floor:h.floor||p.floor};if(!blocked(q))return q;}return null;}
 // A placement query tries actual capsule clearance without moving the walker
 // or changing its current stance. Explicit low-space starts may use crouch.
 function findPlacement(point,{allowCrouch=true}={}){const old=body;try{for(const height of allowCrouch?[1.8,1.23]:[1.8]){body=height;const position=supported(point);if(position&&(!point.floor||position.floor===point.floor))return{position,crouched:height<1.8};}return null;}finally{body=old;}}
 let spawn=null,spawnCrouched=false;const saved=data.walkStart;if(saved&&[saved.x,saved.y,saved.z,saved.yaw].every(Number.isFinite)&&data.levels.some(l=>l.id===saved.floor)){const placement=options.autoCrouchSpawn?findPlacement(saved):null,q=placement?.position||supported(saved);if(q&&q.floor===saved.floor){spawn={...q,yaw:saved.yaw};spawnCrouched=!!placement?.crouched;}}const invalidSaved=!!saved&&!spawn;for(const e of (spawn?[]:data.entrances)||[]){if(e.floor!==grounds.id)continue;const r=grounds.rooms.find(r=>r.id===e.room);if(!r)continue;const o=grounds.openings.find(o=>o.exterior&&!o.blocked&&o.a===r.id);const candidates=o?.axis==='poly'?[{x:(o.p0[0]+o.p1[0])/2,y:(o.p0[1]+o.p1[1])/2}]:o?[{x:o.axis==='h'?(o.start+o.end)/2:o.fixed,y:o.axis==='h'?o.fixed:(o.start+o.end)/2}, {x:r.x+r.w/2,y:r.y+r.h/2}]:[{x:r.x+r.w/2,y:r.y+r.h/2}];for(const c of candidates){const q=supported({...c,z:r.z});if(q){spawn={...q,yaw:0};break;}}if(spawn)break;}
 if(!spawn)for(const b of surfaces){const samples=[{x:b.x+b.w/2,y:b.y+b.h/2},...(b.polygon||[]).slice(1,-1).map((p,i)=>({x:(b.polygon[0][0]+p[0]+b.polygon[i+2][0])/3,y:(b.polygon[0][1]+p[1]+b.polygon[i+2][1])/3}))];for(const sample of samples){const q=supported({...sample,z:b.z+b.height});if(q){spawn={...q,yaw:0};break;}}if(spawn)break;}
 if(!spawn)spawn={x:bounds.x+2,y:bounds.y+2,z:gz,floor:grounds.id,yaw:0};
 body=spawnCrouched?1.23:1.8;let state={...spawn};
 function move(dx,dy){const steps=Math.max(1,Math.ceil(Math.hypot(dx,dy)/.08));for(let i=0;i<steps;i++){let q=supported({...state,x:state.x+dx/steps,y:state.y+dy/steps});if(q)state=q;else{q=supported({...state,x:state.x+dx/steps});if(q)state=q;q=supported({...state,y:state.y+dy/steps});if(q)state=q;}}return state;}
 return{invalidSaved,get state(){return state},setCrouch(value){const old=body;body=value?1.23:1.8;if(!value&&blocked(state)){body=old;return false;}return true;},get body(){return body},setState(q){state={...q}},move,reset(){body=spawnCrouched?1.23:1.8;state={...spawn};return state},heights,blocked,supported,findPlacement,rampHeight,bounds,radius,groundZ:gz};
}
const api={create,inside,polygon};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.KERN_WALK=api;
})(typeof window!=='undefined'?window:globalThis);
