/* Editable route stairs. Node coordinates are normalized in the room's affine frame. */
(function(root){'use strict';
const arr=v=>Array.isArray(v)?v:[],S=()=>root.KERN_SHAPES||(typeof require==='function'?require('./room-shapes.js'):null),E=()=>root.KERN_ELEVATIONS||(typeof require==='function'?require('./elevation.js'):null),bounds=p=>S().bounds(p);
function convexHull(points){const ps=cleanPolygon([...points].sort((a,b)=>a[0]-b[0]||a[1]-b[1])),cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);if(ps.length<4)return ps;const lo=[],hi=[];for(const p of ps){while(lo.length>1&&cross(lo.at(-2),lo.at(-1),p)<=1e-8)lo.pop();lo.push(p);}for(const p of [...ps].reverse()){while(hi.length>1&&cross(hi.at(-2),hi.at(-1),p)<=1e-8)hi.pop();hi.push(p);}lo.pop();hi.pop();return [...lo,...hi];}
function cleanPolygon(ps){const out=[];for(const p of ps)if(!out.length||Math.hypot(p[0]-out.at(-1)[0],p[1]-out.at(-1)[1])>1e-6)out.push(p);if(out.length>1&&Math.hypot(out[0][0]-out.at(-1)[0],out[0][1]-out.at(-1)[1])<1e-6)out.pop();return out;}
function simplePolygon(ps){ps=cleanPolygon(ps);if(ps.length<3)return false;const b=bounds(ps),scale=100/Math.max(b.w,b.h,1e-6);return S().simple(ps.map(p=>[(p[0]-b.x)*scale,(p[1]-b.y)*scale]));}
function contains(plan,fid,rid,p){const polygons=build(plan,fid,rid)?.footprintGeometry||[],inside=ps=>{let hit=false;for(let i=0,j=ps.length-1;i<ps.length;j=i++){const a=ps[i],b=ps[j];if((a[1]>p.y)!==(b[1]>p.y)&&p.x<(b[0]-a[0])*(p.y-a[1])/(b[1]-a[1])+a[0])hit=!hit;}return hit;};return polygons.some(poly=>inside(poly[0])&&!poly.slice(1).some(inside));}
function constrainPoint(a,p,step){const dx=p[0]-a[0],dy=p[1]-a[1],angle=Math.round(Math.atan2(dy,dx)/(Math.PI/4)),x=Math.round(Math.cos(angle*Math.PI/4)),y=Math.round(Math.sin(angle*Math.PI/4)),distance=x&&y?Math.max(Math.abs(dx),Math.abs(dy)):Math.abs(x?dx:dy),d=step?Math.round(distance/step)*step:distance;return[a[0]+x*d,a[1]+y*d];}
function gridPoint(p,step,free=false){return free||!step?[p[0],p[1]]:p.map(v=>Math.round((Math.floor(v/step)+.5)*step*1e6)/1e6);}
function snapNode(r,index,p,step,free=false,constrain=false){const q=gridPoint(p,step,free),anchor=r.routeStair.nodes[index?index-1:1];return constrain&&anchor?constrainPoint(point(r,anchor),q,free?0:step):q;}
function frame(r){const p=S().raw(r);return{origin:p[0],u:[p[1][0]-p[0][0],p[1][1]-p[0][1]],v:[p[3][0]-p[0][0],p[3][1]-p[0][1]]};}
function point(r,n){const f=frame(r);return[f.origin[0]+n.u*f.u[0]+n.v*f.v[0],f.origin[1]+n.u*f.u[1]+n.v*f.v[1]];}
function local(r,p){const f=frame(r),x=p[0]-f.origin[0],y=p[1]-f.origin[1],d=f.u[0]*f.v[1]-f.u[1]*f.v[0];return{u:(x*f.v[1]-y*f.v[0])/d,v:(y*f.u[0]-x*f.u[1])/d};}
// The room rectangle is an authored affine coordinate frame, not the path's
// footprint. Keep it unchanged while deriving selection bounds from the same
// surfaces used by rendering. Ghost edits must be measured from their snapshot.
const footprintCache=new WeakMap(),derivedFrames=new WeakMap(),frameSignature=r=>JSON.stringify([r.x,r.y,r.w,r.h,r.shape,r.routeStair]);
function displayGeometry(r){
 if(!r?.routeStair)return{polygons:[S().points(r)],points:S().raw(r)};
 const signature=frameSignature(r),cached=footprintCache.get(r);if(cached?.signature===signature)return cached.value;
 // XY geometry is independent of linked elevations. Omit links only in this
 // private build so bounds do not recurse into surrounding room geometry.
 const copy={...r,routeStair:{...r.routeStair,start:undefined,end:undefined}},plan={floors:{__bounds:{z:0,rooms:[copy]}}},detail=build(plan,'__bounds',r.id);
 const polygons=[...(detail?.flights||[]),...(detail?.landings||[])].map(p=>p.polygon).filter(p=>p?.length),nodes=r.routeStair.nodes.flatMap(n=>[point(r,n),...(n.landing||[]).map(p=>point(r,p))]),points=[...polygons.flat(),...nodes].filter(p=>p.every(Number.isFinite));
 const geometry=detail?.footprintGeometry||[],area=geometry.reduce((sum,p)=>sum+Math.abs(S().areaOf(p[0]))-p.slice(1).reduce((n,h)=>n+Math.abs(S().areaOf(h)),0),0),value={polygons,area,points:points.length?points:S().raw(r)};footprintCache.set(r,{signature,value});return value;
}
function pathBounds(r){return bounds(displayGeometry(r).points);}
function editFrame(r){
 if(!r?.routeStair)return r;if(derivedFrames.get(r)===frameSignature(r))return r;
 const geometry=displayGeometry(r),ps=geometry.points,f=frame(r),qs=ps.map(p=>local(r,p)),b=bounds(qs.map(p=>[p.u,p.v]));if(b.w<1e-10||b.h<1e-10)return JSON.parse(JSON.stringify(r));
 const corners=[[b.x,b.y],[b.x+b.w,b.y],[b.x+b.w,b.y+b.h],[b.x,b.y+b.h]].map(([u,v])=>[f.origin[0]+u*f.u[0]+v*f.v[0],f.origin[1]+u*f.u[1]+v*f.v[1]]),box=bounds(corners),next=JSON.parse(JSON.stringify(r));
 Object.assign(next,box);if(r.shape){next.shape={...next.shape,vertices:corners.map((p,i)=>({...S().vertices(r)[i],x:(p[0]-box.x)/box.w,y:(p[1]-box.y)/box.h,r:0,corner:'square'}))};}else delete next.shape;
 for(let i=0;i<next.routeStair.nodes.length;i++){const n=next.routeStair.nodes[i],original=r.routeStair.nodes[i];Object.assign(n,local(next,point(r,original)));if(n.landing)for(let j=0;j<n.landing.length;j++)Object.assign(n.landing[j],local(next,point(r,original.landing[j])));}
 const signature=frameSignature(next);derivedFrames.set(next,signature);footprintCache.set(next,{signature,value:geometry});return next;
}
function freezeHeights(r,plan){const zs=elevations(r,plan),q=r.routeStair;q.startZ=zs[0];q.endZ=zs.at(-1);if(Number.isFinite(q.nodes[0].height))delete q.start;if(Number.isFinite(q.nodes.at(-1).height))delete q.end;delete q.nodes[0].height;delete q.nodes.at(-1).height;q.nodes.forEach((n,i)=>{if(i&&i<q.nodes.length-1)n.height=zs[i]-zs[0];});}
function moveNode(r,index,p,plan){freezeHeights(r,plan);const n=r.routeStair.nodes[index],next=local(r,p),du=next.u-n.u,dv=next.v-n.v;for(const v of n.landing||[]){v.u+=du;v.v+=dv;}Object.assign(n,next);}
function removeNode(r,index,plan){const q=r.routeStair;if(q.nodes.length<=2||!Number.isInteger(index)||index<0||index>=q.nodes.length)return false;freezeHeights(r,plan);const zs=elevations(r,plan);if(index===0)delete q.start;if(index===q.nodes.length-1)delete q.end;q.nodes.splice(index,1);zs.splice(index,1);q.startZ=zs[0];q.endZ=zs.at(-1);q.nodes.forEach((n,i)=>{if(i&&i<q.nodes.length-1)n.height=zs[i]-zs[0];else delete n.height;});return true;}
function setHeight(r,index,z,plan){freezeHeights(r,plan);const q=r.routeStair,zs=elevations(r,plan);zs[index]=z;if(index===0)delete q.start;if(index===q.nodes.length-1)delete q.end;q.startZ=zs[0];q.endZ=zs.at(-1);q.nodes.forEach((n,i)=>{if(i&&i<q.nodes.length-1)n.height=zs[i]-zs[0];else delete n.height;});}
function reverse(r,plan){freezeHeights(r,plan);const q=r.routeStair,a=q.startZ;q.startZ=q.endZ;q.endZ=a;delete q.start;delete q.end;for(const n of q.nodes)if(Number.isFinite(n.height))n.height=-n.height;}
function create(points,{id='route-stair',name='Editable stairs',width=1.5,startZ=0,endZ=3,start,end,hostRoom,surface}={}){const b=bounds(points),pad=width;const r={id,name,type:'terrace',x:b.x-pad,y:b.y-pad,w:Math.max(1,b.w+2*pad),h:Math.max(1,b.h+2*pad),z:Math.min(startZ,endZ),stairTransition:true,localSteps:true,cutoutFor:hostRoom?[hostRoom]:[]};for(const k of ['x','y','w','h'])r[k]=Math.round(r[k]*1e6)/1e6;r.routeStair={version:1,width,landingDepth:surface==='ramp'?.6:width,startZ,endZ,start,end,hostRoom,nodes:points.map((p,i)=>({id:'node-'+i,...local(r,p)}))};if(surface!==undefined)r.routeStair.surface=surface;freezeHeights(r);return r;}
function build(plan,fid,rid){const r=plan.floors?.[fid]?.rooms.find(r=>r.id===rid),q=r?.routeStair;if(!q)return null;if(q.surface==='ramp')return buildRamp(plan,fid,r);const warnings=[],warn=(code,text)=>warnings.push({code,text,kind:'stair',severity:'error'}),width=Number.isFinite(q.width)?Math.max(.2,Math.min(20,q.width)):1.5,ns=arr(q.nodes).slice(0,64),ps=ns.map(n=>point(r,n)),a=E().value(plan,q.start,q.startZ??r.z),b=E().value(plan,q.end,q.endZ??r.z+3),dist=[0];for(let i=1;i<ps.length;i++)dist.push(dist[i-1]+Math.hypot(ps[i][0]-ps[i-1][0],ps[i][1]-ps[i-1][1]));const total=dist.at(-1)||0,zs=ns.map((n,i)=>Number.isFinite(n.height)?a+n.height:a+(b-a)*(total?dist[i]/total:0)),flights=[],landings=[],segments=[],sid=r.id+'-route',f=frame(r),uLength=Math.hypot(...f.u),vLength=Math.hypot(...f.v),landingU=f.u.map(v=>v/uLength),landingV=f.v.map(v=>v/vLength);
const headroom=E().cutHeadroom(q.minHeadroom??r.stairDesign?.minHeadroom??plan.stairDesign?.minHeadroom);if(headroom<2.1)warn('headroom-target','Cutout headroom is below the 2.10 m design minimum');
if(ns.length<2||total<.1||ps.some(p=>p.some(v=>!Number.isFinite(v))))warn('invalid-route','Draw at least two distinct stair route points');if(zs.length&&Math.max(...zs)-Math.min(...zs)<.01)warn('zero-rise','Choose different start and end elevations');if(width<.8)warn('footprint-width','Stairs need at least 0.80 m clear width');
for(let i=0;i<ps.length;i++){const p=ps[i],depth=Number.isFinite(ns[i].landingDepth)?Math.max(.2,ns[i].landingDepth):(q.landingDepth??width),custom=arr(ns[i].landing),polygon=custom.length>=3?custom.map(n=>point(r,n)):[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,y])=>[p[0]+(landingU[0]*x+landingV[0]*y)*depth/2,p[1]+(landingU[1]*x+landingV[1]*y)*depth/2]);landings.push({id:sid+'-landing-'+i,segmentId:sid,kind:'landing',custom:custom.length>=3,portPoints:[],polygon,basePolygon:polygon.map(p=>[...p]),rect:bounds(polygon),z:zs[i],curved:true,role:i===0||i===ps.length-1?'floor':'turn',depth,clearWidth:width});}
for(let i=1;i<ps.length;i++){const p=ps[i-1],t=ps[i],dx=t[0]-p[0],dy=t[1]-p[1],len=Math.hypot(dx,dy);if(len<.01){warn('short-leg','Remove coincident route points');continue;}const u=[dx/len,dy/len],n=[-u[1],u[0]],w=Number.isFinite(ns[i-1].width)?Math.max(.2,Math.min(20,ns[i-1].width)):width;
// Connect flight edges to the landing outlines, including off-axis approaches.
function extent(poly,center,dir){let result=0;for(const p of poly)result=Math.max(result,(p[0]-center[0])*dir[0]+(p[1]-center[1])*dir[1]);return result;}
const insetA=extent(landings[i-1].basePolygon,p,u),insetB=extent(landings[i].basePolygon,t,[-u[0],-u[1]]),run=len-insetA-insetB,from=[p[0]+u[0]*insetA,p[1]+u[1]*insetA],to=[t[0]-u[0]*insetB,t[1]-u[1]*insetB],rise=Math.abs(zs[i]-zs[i-1]),count=Math.max(1,Math.min(2000,Math.ceil(rise/.17))),rh=rise/count,td=run/Math.max(1,count-1),quad=(s,e)=>[[from[0]+u[0]*s+n[0]*w/2,from[1]+u[1]*s+n[1]*w/2],[from[0]+u[0]*e+n[0]*w/2,from[1]+u[1]*e+n[1]*w/2],[from[0]+u[0]*e-n[0]*w/2,from[1]+u[1]*e-n[1]*w/2],[from[0]+u[0]*s-n[0]*w/2,from[1]+u[1]*s-n[1]*w/2]];
if(run<=.05){warn('short-leg','Move route points apart to leave room for the landings and flight');continue;}if(td<.22&&rise>.01)warn('footprint-length','Flight '+i+' has '+td.toFixed(2)+' m treads; extend its run');const polygon=quad(0,run),up=zs[i]>=zs[i-1],treads=[];for(let k=0;k<Math.max(1,count-1);k++){const poly=quad(k*td,(k+1)*td);treads.push({index:k+1,z:zs[i-1]+(zs[i]-zs[i-1])*(k+1)/count,rect:bounds(poly),polygon:poly,curved:true,line:[poly[0],poly[3]]});}
// Flat landing ports fill the wedges between oblique flights and polygonal landings.
for(const [j,c,end]of [[i-1,p,0],[i,t,run]]){const face=quad(end,end),port=[c,face[0],face[3]],l=landings[j];l.portPoints.push(face[0],face[3]);const union=S().clip.union([[l.polygon]],[[port]]);if(union.length===1){l.polygon=cleanPolygon(union[0][0]);l.rect=bounds(l.polygon);}}
const path=up?[from,to]:[to,from];flights.push({id:sid+'-flight-'+i,segmentId:sid,index:i,kind:'flight',rect:bounds(polygon),polygon,z0:Math.min(zs[i-1],zs[i]),z1:Math.max(zs[i-1],zs[i]),rise,risers:count,riserHeight:rh,treadDepth:td,run,clearWidth:w,upPath:path,downPath:[...path].reverse(),fromLanding:landings[up?i-1:i].id,toLanding:landings[up?i:i-1].id,treads});}
for(let i=0;i<landings.length;i++){const l=landings[i];if(!l.custom){l.polygon=convexHull([...l.basePolygon,...l.portPoints]);l.rect=bounds(l.polygon);}if(i>0&&i<landings.length-1){const requiredWidth=Math.max(flights.find(f=>f.index===i)?.clearWidth||width,flights.find(f=>f.index===i+1)?.clearWidth||width),center={x:ps[i][0],y:ps[i][1]};l.usableWidth=S().contains(center,l.polygon)?2*Math.min(...l.polygon.map((a,j)=>S().project(center,{a,b:l.polygon[(j+1)%l.polygon.length]}).distance)):0;if(l.usableWidth+1e-6<requiredWidth)warn('landing-width','Turn '+i+' has '+l.usableWidth.toFixed(2)+' m clear at its center; deepen or reshape the landing for '+requiredWidth.toFixed(2)+' m flights');}}for(let i=0;i<flights.length;i++)for(let j=i+1;j<flights.length;j++){const a=flights[i],b=flights[j];if(a.rect.x+a.rect.w<=b.rect.x||b.rect.x+b.rect.w<=a.rect.x||a.rect.y+a.rect.h<=b.rect.y||b.rect.y+b.rect.h<=a.rect.y)continue;const intersection=S().clip.intersection([[a.polygon]],[[b.polygon]]);if(!intersection.some(p=>Math.abs(S().areaOf(p[0]))>.01))continue;const height=(f,p)=>{const a=f.upPath[0],b=f.upPath[1],x=b[0]-a[0],y=b[1]-a[1],t=Math.max(0,Math.min(1,((p[0]-a[0])*x+(p[1]-a[1])*y)/(x*x+y*y)));return f.z0+(f.z1-f.z0)*t;};if(intersection.some(poly=>{const differences=poly[0].map(p=>height(a,p)-height(b,p));return Math.min(...differences)<headroom&&Math.max(...differences)>-headroom;}))warn('turn-clearance','Flights '+(i+1)+' and '+(j+1)+' overlap without clear headroom; move the turn points apart');}
const all=[...flights,...landings],geometry=all.length?S().clip.union(...all.map(x=>[[x.polygon]])):[],footprint=geometry.length?bounds(geometry.flatMap(p=>p[0])):{x:r.x,y:r.y,w:r.w,h:r.h},low=zs.length?Math.min(...zs):Math.min(a,b),high=zs.length?Math.max(...zs):Math.max(a,b),endFloor=q.end?.floor||fid,stops=[{floor:fid,z:a},{floor:endFloor,z:b}],openings=[];for(const [id,f]of Object.entries(plan.floors))if(f.z>low+.1&&f.z<=high+.1)openings.push({floor:id,rect:footprint,geometry,polygon:geometry[0]?.[0],z:f.z});
const access=[],volumes=E().cutVolumes({spec:{minHeadroom:headroom},flights,landings});
for(const [ref,p] of [[q.start,ps[0]],[q.end,ps.at(-1)]]){if(ref?.kind!=='room'||!p)continue;const host=plan.floors[ref.floor]?.rooms.find(r=>r.id===ref.room);if(!host){warn('missing-endpoint','A linked stair surface is missing');continue;}if(!host.outdoor&&!['terrace','courtyard','void'].includes(host.type)&&(host.height??plan.floors[ref.floor].clearHeight??3)<headroom)warn('approach-headroom','The linked room has less than '+headroom.toFixed(2)+' m clear height');const edges=S().edges(host),near=edges.map(e=>S().project({x:p[0],y:p[1]},e)).sort((a,b)=>a.distance-b.distance)[0],valid=S().contains({x:p[0],y:p[1]},host)||near?.distance<.25;if(!valid)warn('detached-endpoint','A stair endpoint no longer meets its linked surface');
 for(const v of volumes)for(const e of edges){const len=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]);if(len<1e-8)continue;const u=[(e.b[0]-e.a[0])/len,(e.b[1]-e.a[1])/len],n=[-u[1],u[0]],strip=[[0,-.12],[len,-.12],[len,.12],[0,.12]].map(([s,t])=>[e.a[0]+u[0]*s+n[0]*t,e.a[1]+u[1]*s+n[1]*t]),portalGeometry=S().clip.intersection(v.geometry,[[strip]]);if(!portalGeometry.some(p=>Math.abs(S().areaOf(p[0]))>1e-6))continue;access.push({valid,z:v.surfaceZ,z0:v.z0,z1:v.z1,floor:ref.floor,room:ref.room,doorHeight:headroom,geometry:{axis:'poly',polygon:portalGeometry[0][0],...bounds(portalGeometry.flatMap(p=>p[0]))},portalGeometry});}}
segments.push({id:sid,from:fid,to:endFloor,z0:low,z1:high,rise:high-low,risers:flights.reduce((n,f)=>n+f.risers,0),riserHeights:flights.map(f=>f.riserHeight),intermediateStops:landings.slice(1,-1).map(l=>({z:l.z,landing:l.id})),flights:flights.map(f=>f.id),landings:landings.map(l=>l.id)});
return{schema:'kern-stair-detail-1',routeStair:true,localSteps:true,stairType:'route',roomId:rid,floorId:fid,connectionId:sid,name:r.name,footprint,footprintGeometry:geometry,spec:{clearWidth:width,landingDepth:q.landingDepth??width,treadDepth:.28,minHeadroom:headroom,waistThickness:.15},status:warnings.length?'error':'conditional',fit:!warnings.length,warnings,stops,flights,landings,segments,openings,access,displayFlights:flights.map(f=>({...f,direction:'up',role:'departure',label:'UP '+f.z1.toFixed(2)+' m',arrowPath:f.upPath})),displayLandings:landings,metrics:{clearWidth:width,landingDepth:q.landingDepth??width,treadDepth:Math.min(...flights.map(f=>f.treadDepth)),riserMin:Math.min(...flights.map(f=>f.riserHeight)),riserMax:Math.max(...flights.map(f=>f.riserHeight)),requiredEnvelope:{long:total,short:width},availableEnvelope:{long:total,short:width},requiredHeadroom:headroom,minimumHeadroom:null},datumLabel:low.toFixed(2)+' m',clearanceNote:'Editable route. Review headroom and connections.'};}
// Ramps share route editing/storage with stairs, but derive their own continuous
// surface. In particular, no stair tread ports or room-frame-aligned squares are
// reused: a wide right-angle turn must have a square outside corner.
function buildRamp(plan,fid,r){
 const q=r.routeStair,sh=S(),eps=1e-7,sid=r.id+'-route',warnings=[];
 const warn=(code,text,severity='error')=>warnings.push({code,text,kind:'stair',severity});
 // Quantize only derived hull input: near-identical x coordinates otherwise
 // reverse lexicographic ordering and can discard a full-width port corner.
 const hull=points=>convexHull(points.map(p=>p.map(v=>Math.round(v*1e9)/1e9)));
 const finite=(v,fallback)=>Number.isFinite(v)?v:fallback,clampWidth=v=>Math.max(.2,Math.min(20,finite(v,1.5))),width=clampWidth(q.width);
 const ns=arr(q.nodes).slice(0,64),sourcePoints=ns.map(n=>point(r,n)),validPoints=sourcePoints.every(p=>p.every(Number.isFinite)),ps=validPoints?sourcePoints:[];
 const a=finite(E().value(plan,q.start,q.startZ??r.z),finite(r.z,0)),b=finite(E().value(plan,q.end,q.endZ??(r.z??0)+3),a+3),dist=[0];
 for(let i=1;i<ps.length;i++)dist.push(dist[i-1]+Math.hypot(ps[i][0]-ps[i-1][0],ps[i][1]-ps[i-1][1]));
 const total=dist.at(-1)||0,zs=ps.map((p,i)=>i===0?a:i===ps.length-1?b:Number.isFinite(ns[i].height)?a+ns[i].height:a+(b-a)*(total?dist[i]/total:0));
 const headroom=E().cutHeadroom(q.minHeadroom??r.stairDesign?.minHeadroom??plan.stairDesign?.minHeadroom),thickness=.18,defaultDepth=Number.isFinite(q.landingDepth)?Math.max(.2,q.landingDepth):.6;
 const flights=[],landings=[],legs=[],dot=(p,v)=>p[0]*v[0]+p[1]*v[1],at=(p,u,d,n=[0,0],w=0)=>[p[0]+u[0]*d+n[0]*w,p[1]+u[1]*d+n[1]*w].map(v=>Math.round(v*1e9)/1e9),sub=(p,t)=>[p[0]-t[0],p[1]-t[1]];
 if(!validPoints||ns.length<2||total<.1)warn('invalid-route','Draw at least two distinct, finite ramp route points');
 if(headroom<2.1)warn('headroom-target','Cutout headroom is below the 2.10 m design minimum');
 if(width<.8)warn('footprint-width','The ramp is less than 0.80 m wide; increase the route width');
 for(let i=1;i<ps.length;i++){
  const p=ps[i-1],t=ps[i],len=Math.hypot(t[0]-p[0],t[1]-p[1]),u=len>eps?[(t[0]-p[0])/len,(t[1]-p[1])/len]:[1,0];
  legs.push({p,t,len,u,n:[-u[1],u[0]],width:clampWidth(ns[i-1].width??width),index:i});
 }
 const face=(p,u,d,w)=>{const n=[-u[1],u[0]];return[at(p,u,d,n,w/2),at(p,u,d,n,-w/2)];};
 for(let i=0;i<ps.length;i++){
  const p=ps[i],before=legs[i-1],after=legs[i],endpoint=i===0||i===ps.length-1,w=Math.max(before?.width||0,after?.width||0)||width;
  // The legacy global landingDepth equals the stair width. Never use it for
  // automatic ramp endpoints; an explicit point edit still controls its depth.
  const depth=Number.isFinite(ns[i].landingDepth)?Math.max(.2,ns[i].landingDepth):endpoint?.6:defaultDepth,custom=arr(ns[i].landing);
  let polygon,insetBefore=depth/2,insetAfter=depth/2;
  if(custom.length>=3){
   polygon=cleanPolygon(custom.map(n=>point(r,n)));
   if(polygon.some(p=>p.some(v=>!Number.isFinite(v)))||!simplePolygon(polygon)){
    warn('landing-shape','Landing '+(i+1)+' has an invalid outline; reset or reshape it');polygon=[];
   }
   if(before)insetBefore=Math.max(0,...polygon.map(t=>-dot(sub(t,p),before.u)));
   if(after)insetAfter=Math.max(0,...polygon.map(t=>dot(sub(t,p),after.u)));
  }else if(endpoint||!before||!after){
   const leg=after||before,u=leg?.u||[1,0];polygon=[...face(p,u,-depth/2,w),...face(p,u,depth/2,w).reverse()];
  }else{
   const cosine=Math.max(-1,Math.min(1,dot(before.u,after.u))),cross=before.u[0]*after.u[1]-before.u[1]*after.u[0],turn=Math.acos(cosine);
   if(cosine<-.995){
    // A single centerline point cannot describe a U-turn with distinct lanes.
    warn('turn-clearance','Turn '+i+' doubles back on itself; add two separated turn points for a full-width U-turn');
    insetBefore=insetAfter=Math.max(depth/2,w/2);
    polygon=hull([...face(p,before.u,-insetBefore,w),...face(p,before.u,insetBefore,w)]);
   }else{
    const inset=Math.max(depth/2,w/2*Math.tan(turn/2));insetBefore=insetAfter=inset;
    const points=[...face(p,before.u,-inset,before.width),...face(p,after.u,inset,after.width)];
    if(Math.abs(cross)>eps){
     // Include the outside offset-line intersection. Without this point the
     // hull of the two full-width ports collapses to the old diagonal triangle.
     const side=cross>0?-1:1,n0=before.n,n1=after.n,offset=[(n1[0]-n0[0])*side*w/2,(n1[1]-n0[1])*side*w/2],along=(offset[0]*after.u[1]-offset[1]*after.u[0])/cross;
     points.push(at(p,before.u,along,n0,side*w/2));
    }
    polygon=hull(points);
   }
  }
  const landing={id:sid+'-landing-'+i,segmentId:sid,index:i,kind:'landing',ramp:true,custom:custom.length>=3,portPoints:[],polygon,basePolygon:polygon.map(p=>[...p]),rect:polygon.length?bounds(polygon):{x:p[0],y:p[1],w:0,h:0},z:zs[i],curved:true,role:endpoint?'floor':'turn',depth,clearWidth:w,usableWidth:w,insetBefore,insetAfter};
  landings.push(landing);
 }
 // Custom landing edits are exact, never silently enlarged. A planar ramp
 // needs a flat, full-width edge at its landing elevation. If the edited outline
 // cannot meet one, omit that flight and give an actionable repair message.
 const fitsFace=(landing,points)=>{
  const vector=sub(points[1],points[0]),length=Math.hypot(...vector),v=vector.map(n=>n/length),n=[-v[1],v[0]],intervals=[];
  for(let j=0;j<landing.polygon.length;j++){
   const a=sub(landing.polygon[j],points[0]),b=sub(landing.polygon[(j+1)%landing.polygon.length],points[0]);
   if(Math.abs(dot(a,n))>1e-6||Math.abs(dot(b,n))>1e-6)continue;
   intervals.push([Math.min(dot(a,v),dot(b,v)),Math.max(dot(a,v),dot(b,v))]);
  }
  let covered=0;for(const [a,b]of intervals.sort((a,b)=>a[0]-b[0])){if(b<covered-1e-6)continue;if(a>covered+1e-6)return false;covered=Math.max(covered,b);if(covered>=length-1e-6)return true;}return false;
 };
 for(const leg of legs){
  const {p,t,u,n,len,width:w,index:i}=leg,A=landings[i-1],B=landings[i];
  if(len<.01){warn('short-leg','Route points '+i+' and '+(i+1)+' coincide; move one or remove it');continue;}
  const insetA=A.insetAfter,insetB=B.insetBefore,run=len-insetA-insetB;
  if(run<=.05){warn('short-leg','Ramp leg '+i+' is '+len.toFixed(2)+' m long; move its points at least '+(insetA+insetB+.1).toFixed(2)+' m apart or reduce the landing depths');continue;}
  const from=at(p,u,insetA),to=at(t,u,-insetB),startFace=face(p,u,insetA,w),endFace=face(t,u,-insetB,w);
  let joined=true;
  for(const [l,f]of [[A,startFace],[B,endFace]]){
   l.portPoints.push(...f);
   if(!fitsFace(l,f)){warn('landing-width','Landing '+(l.index+1)+' needs a straight '+w.toFixed(2)+' m attachment edge across ramp leg '+i+'; widen or reshape the landing');joined=false;}
  }
  if(!joined)continue;
  const polygon=[startFace[0],endFace[0],endFace[1],startFace[1]],up=zs[i]>=zs[i-1],path=up?[from,to]:[to,from],rise=Math.abs(zs[i]-zs[i-1]),z0=Math.min(zs[i-1],zs[i]),z1=Math.max(zs[i-1],zs[i]),gradePercent=100*rise/run;
  // Grade is advisory, not an accessibility compliance verdict. Garage ramps
  // can intentionally be steeper than pedestrian ramps.
  if(gradePercent>20)warn('ramp-grade','Ramp leg '+i+' has a '+gradePercent.toFixed(1)+'% grade; lengthen the run for a gentler slope and review vehicle clearance','warning');
  flights.push({id:sid+'-flight-'+i,segmentId:sid,index:i,kind:'flight',ramp:true,rect:bounds(polygon),polygon,z0,z1,rise,risers:0,riserHeight:0,treadDepth:0,run,clearWidth:w,upPath:path,downPath:[...path].reverse(),fromLanding:landings[up?i-1:i].id,toLanding:landings[up?i:i-1].id,treads:[],gradePercent,surface:{kind:'ramp',upPath:path.map(p=>[...p]),z0,z1,thickness}});
 }
 const height=(f,p)=>{if(!f.upPath)return f.z;const a=f.upPath[0],b=f.upPath[1],v=sub(b,a),t=Math.max(0,Math.min(1,dot(sub(p,a),v)/dot(v,v)));return f.z0+(f.z1-f.z0)*t;};
 const all=[...flights,...landings.filter(l=>l.polygon.length>=3)],geometry=all.length?sh.clip.union(...all.map(x=>[[x.polygon]])):[],footprint=geometry.length?bounds(geometry.flatMap(p=>p[0])):{x:finite(r.x,0),y:finite(r.y,0),w:finite(r.w,0),h:finite(r.h,0)};
 // Also check landings and the upper slab underside: a too-short wide turn
 // must not hide an intersecting apron or flight below a flat landing.
 for(let i=0;i<all.length;i++)for(let j=i+1;j<all.length;j++){
  const a=all[i],b=all[j];if(a.rect.x+a.rect.w<=b.rect.x+eps||b.rect.x+b.rect.w<=a.rect.x+eps||a.rect.y+a.rect.h<=b.rect.y+eps||b.rect.y+b.rect.h<=a.rect.y+eps)continue;
  const intersection=sh.clip.intersection([[a.polygon]],[[b.polygon]]).filter(p=>Math.abs(sh.areaOf(p[0]))>1e-6);if(!intersection.length)continue;
  if(intersection.some(poly=>{const differences=poly[0].map(p=>height(a,p)-height(b,p));return Math.min(...differences)<headroom+thickness-eps&&Math.max(...differences)>-headroom-thickness+eps;}))warn('turn-clearance','Ramp surfaces overlap near route points '+(Math.min(a.index,b.index)+1)+'–'+(Math.max(a.index,b.index)+1)+'; move the points apart or reshape the landings');
 }
 const low=zs.length?Math.min(...zs):Math.min(a,b),high=zs.length?Math.max(...zs):Math.max(a,b),endFloor=q.end?.floor||fid,stops=[{floor:q.start?.floor||fid,z:zs[0]??a},{floor:endFloor,z:zs.at(-1)??b}],openings=[];
 for(const [id,f]of Object.entries(plan.floors))if(f.z>low+.1&&f.z<=high+.1)openings.push({floor:id,rect:footprint,geometry,polygon:geometry[0]?.[0],z:f.z});
 const access=[],volumes=E().cutVolumes({spec:{minHeadroom:headroom,waistThickness:thickness},flights,landings});
 for(const [ref,p]of [[q.start,ps[0]],[q.end,ps.at(-1)]]){
  if(!ref)continue;const floor=plan.floors[ref.floor],host=ref.kind==='room'?floor?.rooms.find(r=>r.id===ref.room):null;
  if(ref.kind!=='site'&&(!floor||ref.kind==='room'&&!host)){warn('missing-endpoint','A linked ramp surface is missing; choose another start or end surface');continue;}
  if(ref.kind!=='room'||!p)continue;
  if(!host.outdoor&&!['terrace','courtyard','void'].includes(host.type)&&(host.height??floor.clearHeight??3)<headroom)warn('approach-headroom','The linked room has less than '+headroom.toFixed(2)+' m clear height');
  const edges=sh.edges(host),near=edges.map(e=>sh.project({x:p[0],y:p[1]},e)).sort((a,b)=>a.distance-b.distance)[0],valid=sh.contains({x:p[0],y:p[1]},host)||near?.distance<.25;
  if(!valid)warn('detached-endpoint','A ramp endpoint no longer meets its linked surface; move the endpoint or choose another surface');
  for(const v of volumes)for(const e of edges){
   const len=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]);if(len<eps)continue;
   const u=[(e.b[0]-e.a[0])/len,(e.b[1]-e.a[1])/len],n=[-u[1],u[0]],strip=[[0,-.12],[len,-.12],[len,.12],[0,.12]].map(([s,t])=>at(e.a,u,s,n,t)),portalGeometry=sh.clip.intersection(v.geometry,[[strip]]);
   if(!portalGeometry.some(p=>Math.abs(sh.areaOf(p[0]))>1e-6))continue;
   access.push({valid,z:v.surfaceZ,z0:v.z0,z1:v.z1,...(v.surfacePlane?{surfacePlane:{...v.surfacePlane}}:{}),floor:ref.floor,room:ref.room,doorHeight:headroom,geometry:{axis:'poly',polygon:portalGeometry[0][0],...bounds(portalGeometry.flatMap(p=>p[0]))},portalGeometry});
  }
 }
 const segments=[{id:sid,from:fid,to:endFloor,z0:low,z1:high,rise:high-low,risers:0,riserHeights:[],intermediateStops:landings.slice(1,-1).map(l=>({z:l.z,landing:l.id})),flights:flights.map(f=>f.id),landings:landings.map(l=>l.id)}],fit=!warnings.some(w=>w.severity==='error');
 return{schema:'kern-stair-detail-1',routeStair:true,surface:'ramp',ramp:true,localSteps:true,stairType:'route',roomId:r.id,floorId:fid,connectionId:sid,name:r.name,footprint,footprintGeometry:geometry,spec:{surface:'ramp',clearWidth:width,landingDepth:defaultDepth,treadDepth:0,minHeadroom:headroom,waistThickness:thickness},status:fit?'conditional':'error',fit,warnings,stops,flights,landings,segments,openings,access,displayFlights:flights.map(f=>({...f,direction:'up',role:'departure',label:'RAMP '+f.gradePercent.toFixed(1)+'% · UP '+f.z1.toFixed(2)+' m',arrowPath:f.upPath})),displayLandings:landings,metrics:{clearWidth:width,landingDepth:defaultDepth,treadDepth:0,riserMin:0,riserMax:0,gradeMax:Math.max(0,...flights.map(f=>f.gradePercent)),requiredEnvelope:{long:total,short:width},availableEnvelope:{long:total,short:width},requiredHeadroom:headroom,minimumHeadroom:null},datumLabel:low.toFixed(2)+' m',clearanceNote:'Continuous ramp. Grade is advisory; review vehicle clearance, headroom and connections.'};
}
function elevations(r,plan){const q=r.routeStair,a=plan?E().value(plan,q.start,q.startZ):q.startZ,b=plan?E().value(plan,q.end,q.endZ):q.endZ,ps=q.nodes.map(n=>point(r,n)),dist=[0];for(let i=1;i<ps.length;i++)dist.push(dist[i-1]+Math.hypot(ps[i][0]-ps[i-1][0],ps[i][1]-ps[i-1][1]));const total=dist.at(-1)||1;return q.nodes.map((n,i)=>q.surface==='ramp'&&i===0?a:q.surface==='ramp'&&i===q.nodes.length-1?b:Number.isFinite(n.height)?a+n.height:a+(b-a)*dist[i]/total);}
function validate(q){if(q?.surface!==undefined&&!['stairs','ramp'].includes(q.surface))throw Error('Route surface must be stairs or ramp');if(!q||q.version!==1||!Array.isArray(q.nodes)||q.nodes.length<2||q.nodes.length>64)throw Error('Stair routes need 2–64 points');for(const ref of [q.start,q.end])if(ref&&(!['room','floor','site'].includes(ref.kind)||ref.kind!=='site'&&typeof ref.floor!=='string'||ref.kind==='room'&&typeof ref.room!=='string'||ref.offset!==undefined&&(!Number.isFinite(ref.offset)||Math.abs(ref.offset)>150)))throw Error('Invalid stair surface reference');for(const k of ['width','startZ','endZ'])if(!Number.isFinite(q[k])||Math.abs(q[k])>150)throw Error('Invalid stair dimensions');if(q.minHeadroom!==undefined&&(!Number.isFinite(q.minHeadroom)||q.minHeadroom<.5||q.minHeadroom>5))throw Error('Cutout headroom must be between 0.50 and 5.00 m');if(q.landingDepth!==undefined&&(!Number.isFinite(q.landingDepth)||q.landingDepth<.2||q.landingDepth>150))throw Error('Invalid stair landing depth');if(q.width<.2||q.width>20)throw Error('Invalid stair width');for(const n of q.nodes){if(!n||!['u','v'].every(k=>Number.isFinite(n[k])&&Math.abs(n[k])<500))throw Error('Invalid stair route point');for(const k of ['height','width','landingDepth'])if(n[k]!==undefined&&(!Number.isFinite(n[k])||Math.abs(n[k])>150))throw Error('Invalid stair point dimension');if(q.surface==='ramp'&&n.width!==undefined&&(n.width<.2||n.width>20))throw Error('Ramp point width must be between 0.20 and 20.00 m');if(q.surface==='ramp'&&n.landingDepth!==undefined&&n.landingDepth<.2)throw Error('Ramp landing depth must be at least 0.20 m');if(n.landing!==undefined&&(!Array.isArray(n.landing)||n.landing.length<3||n.landing.length>64||n.landing.some(p=>!['u','v'].every(k=>Number.isFinite(p[k])&&Math.abs(p[k])<500))))throw Error('Invalid stair landing');if(n.landing&&!simplePolygon(n.landing.map(p=>[p.u,p.v])))throw Error('Stair landing edges cannot cross');}return true;}
const api={create,build,point,local,bounds:pathBounds,editFrame,displayGeometry,moveNode,removeNode,setHeight,reverse,freezeHeights,validate,elevations,simplePolygon,gridPoint,constrainPoint,snapNode,contains};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.KERN_ROUTE_STAIRS=api;
})(typeof window!=='undefined'?window:globalThis);
