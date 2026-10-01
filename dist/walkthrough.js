/* Shared metre-space collision and smooth stair traversal, independent of display filters. */
(function(root){
'use strict';
const inside=(p,r,m=0)=>p.x>=r.x-m&&p.x<=r.x+r.w+m&&p.y>=r.y-m&&p.y<=r.y+r.h+m;
function polygon(p,vs){let hit=false;for(let i=0,j=vs.length-1;i<vs.length;j=i++){const a=vs[i],b=vs[j];if((a[1]>p.y)!==(b[1]>p.y)&&p.x<(b[0]-a[0])*(p.y-a[1])/(b[1]-a[1])+a[0])hit=!hit;}return hit}
function create(data){
 const boxes=data.levels.flatMap(l=>l.boxes.map(b=>({...b,floor:l.id}))),walls=boxes.filter(b=>['wall','solid','ceiling','slab','landing'].includes(b.kind)),surfaces=boxes.filter(b=>['slab','landing'].includes(b.kind));
 const ramps=(data.stairs||[]).flatMap(s=>(s.flights||[]).map(f=>({...f,stair:s})));const grounds=data.levels.find(l=>l.id==='L0')||data.levels.reduce((a,b)=>Math.abs(a.z)<Math.abs(b.z)?a:b),gz=grounds.z;
 const radius=.27,body=1.75,bounds={x:data.bounds.minX-25,y:data.bounds.minY-25,w:data.bounds.maxX-data.bounds.minX+50,h:data.bounds.maxY-data.bounds.minY+50};
 // Arrival landing thresholds bridge the perimeter allowance only at validated stair doors.
 for(const s of data.stairs||[])for(const a of s.access||[])if(a.valid&&a.geometry){const g=a.geometry,t=.4;surfaces.push({x:g.axis==='h'?g.start:g.fixed-t,y:g.axis==='h'?g.fixed-t:g.start,w:g.axis==='h'?g.end-g.start:t*2,h:g.axis==='h'?t*2:g.end-g.start,z:a.z-.18,height:.18,floor:a.floor||s.floorId,kind:'landing'});}
 for(const l of data.levels)for(const p of l.polygons||[])if(p.kind==='landing')surfaces.push({...p,floor:l.id});
 function rampHeight(p,f){if(!(f.polygon?polygon(p,f.polygon):inside(p,f.rect,.001)))return null;const path=f.upPath||[],parts=[];let total=0;for(let i=1;i<path.length;i++){const a=path[i-1],b=path[i],dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy);if(!len)continue;const t=Math.max(0,Math.min(1,((p.x-a[0])*dx+(p.y-a[1])*dy)/(len*len)));parts.push({d:Math.hypot(p.x-a[0]-t*dx,p.y-a[1]-t*dy),u:total+t*len});total+=len;}parts.sort((a,b)=>a.d-b.d);return total&&parts.length?f.z0+(f.z1-f.z0)*parts[0].u/total:null;}
 function heights(p){let out=surfaces.filter(b=>inside(p,b,.008)&&(!b.polygon||polygon(p,b.polygon))).map(b=>({z:b.z+b.height,floor:b.floor}));for(const f of ramps){const z=rampHeight(p,f);if(z!==null)out.push({z,floor:(f.stair.stops||[]).reduce((best,s)=>Math.abs(s.z-z)<Math.abs(best.z-z)?s:best).floor});}
 // Ground exists outside enclosed footprints, never across shafts inside the building.
 const indoors=grounds.rooms.some(r=>!['courtyard','terrace'].includes(r.type)&&inside(p,r));if(!indoors&&inside(p,bounds))out.push({z:gz,floor:grounds.id});return out;}
 function blocked(p){return walls.some(b=>p.z+body>b.z+.04&&p.z<b.z+b.height-.03&&p.x+radius>b.x&&p.x-radius<b.x+b.w&&p.y+radius>b.y&&p.y-radius<b.y+b.h);}
 function supported(p){const hs=heights(p).filter(h=>h.z<=p.z+.32&&h.z>=p.z-.4).sort((a,b)=>Math.abs(a.z-p.z)-Math.abs(b.z-p.z));for(const h of hs){const q={...p,z:h.z,floor:h.floor||p.floor};if(!blocked(q))return q;}return null;}
 let spawn=null;for(const e of data.entrances||[]){if(e.floor!==grounds.id)continue;const r=grounds.rooms.find(r=>r.id===e.room);if(!r)continue;const o=grounds.openings.find(o=>o.exterior&&!o.blocked&&o.a===r.id);const candidates=o?[{x:o.axis==='h'?(o.start+o.end)/2:o.fixed,y:o.axis==='h'?o.fixed:(o.start+o.end)/2}, {x:r.x+r.w/2,y:r.y+r.h/2}]:[{x:r.x+r.w/2,y:r.y+r.h/2}];for(const c of candidates){const q=supported({...c,z:r.z});if(q){spawn={...q,yaw:0};break;}}if(spawn)break;}
 if(!spawn)for(const b of surfaces){const q=supported({x:b.x+b.w/2,y:b.y+b.h/2,z:b.z+b.height});if(q){spawn={...q,yaw:0};break;}}
 if(!spawn)spawn={x:bounds.x+2,y:bounds.y+2,z:gz,floor:grounds.id,yaw:0};
 let state={...spawn};
 function move(dx,dy){const steps=Math.max(1,Math.ceil(Math.hypot(dx,dy)/.08));for(let i=0;i<steps;i++){let q=supported({...state,x:state.x+dx/steps,y:state.y+dy/steps});if(q)state=q;else{q=supported({...state,x:state.x+dx/steps});if(q)state=q;q=supported({...state,y:state.y+dy/steps});if(q)state=q;}}return state;}
 return{get state(){return state},setState(q){state={...q}},move,reset(){state={...spawn};return state},heights,blocked,supported,rampHeight,bounds,radius,body,groundZ:gz};
}
const api={create,inside,polygon};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.KERN_WALK=api;
})(typeof window!=='undefined'?window:globalThis);
