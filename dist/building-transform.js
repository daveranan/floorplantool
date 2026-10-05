/* Schema-aware building XY geometry and atomic translations. No DOM, storage or history.
 * Room shape.vertices and routeStair nodes/landings are LOCAL coordinates: never shift them.
 * KERN_BUILDING_TRANSFORM.bounds returns metric geometry bounds, never viewport padding.
 * Use the same geometry adapters as rendering; font glyph bounds require annotationBounds.
 */
(function(root){
'use strict';
const arr=v=>Array.isArray(v)?v:[],finite=Number.isFinite;
class TranslationError extends Error {
  constructor(message,code='invalid-translation',extra={}){super(message);this.name='BuildingTranslationError';this.code=code;Object.assign(this,extra);}
}
function planFloors(plan){if(!plan||!plan.floors||typeof plan.floors!=='object'||Array.isArray(plan.floors))throw new TranslationError('The building has no valid floors.','invalid-plan');return Object.keys(plan.floors);}
function selectedFloors(plan,ids){const all=planFloors(plan),chosen=new Set(ids===undefined?all:ids);if(!chosen.size)throw new TranslationError('Select at least one floor.','empty-selection');for(const id of chosen)if(!all.includes(id))throw new TranslationError('The selected floor '+id+' no longer exists.','missing-floor',{floor:id});return{all,chosen,whole:chosen.size===all.length};}
function clone(value,seen=new Map()){
  if(!value||typeof value!=='object')return value;if(seen.has(value))return seen.get(value);
  const out=Array.isArray(value)?[]:{};seen.set(value,out);
  for(const key of Object.keys(value))Object.defineProperty(out,key,{value:clone(value[key],seen),writable:true,enumerable:true,configurable:true});return out;
}
function rectPoints(r){return[[r.x,r.y],[r.x+r.w,r.y],[r.x+r.w,r.y+r.h],[r.x,r.y+r.h]];}
function turn(points,degrees,cx,cy){if(!degrees)return points;const a=degrees*Math.PI/180,c=Math.cos(a),s=Math.sin(a);return points.map(([x,y])=>[cx+(x-cx)*c-(y-cy)*s,cy+(x-cx)*s+(y-cy)*c]);}
function xy(p){return Array.isArray(p)?[p[0],p[1]]:[p?.x,p?.y];}
function boxOf(points){if(!points.length)return null;let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;for(const p of points){const [x,y]=xy(p);if(!finite(x)||!finite(y))throw new TranslationError('Geometry contains a non-finite XY coordinate.','invalid-geometry');minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x);maxY=Math.max(maxY,y);}return{x:minX,y:minY,w:maxX-minX,h:maxY-minY,minX,minY,maxX,maxY};}
/* Exact modeled polyline stroke envelope: SVG butt caps, miter joins, miterlimit 4.
 * Marker/selection strokes and screen-size interaction padding are intentionally excluded. */
function strokePoints(points,width,miterLimit=4){
  const ps=arr(points).map(xy),out=[],segments=[],half=Math.max(0,width||0)/2;
  for(let i=1;i<ps.length;i++){const a=ps[i-1],b=ps[i],dx=b[0]-a[0],dy=b[1]-a[1],length=Math.hypot(dx,dy);if(!finite(length))throw new TranslationError('Invalid path coordinates.','invalid-geometry');if(length<1e-12)continue;const u=[dx/length,dy/length],n=[-u[1],u[0]];segments.push({a,b,u,n,index:i});for(const p of [a,b])for(const s of [-1,1])out.push([p[0]+s*n[0]*half,p[1]+s*n[1]*half]);}
  for(let i=1;i<segments.length;i++){const a=segments[i-1],b=segments[i];if(a.b[0]!==b.a[0]||a.b[1]!==b.a[1])continue;const cross=a.u[0]*b.u[1]-a.u[1]*b.u[0];if(Math.abs(cross)<1e-12)continue;const sign=cross>0?-1:1,p=a.b,A=[p[0]+a.n[0]*half*sign,p[1]+a.n[1]*half*sign],B=[p[0]+b.n[0]*half*sign,p[1]+b.n[1]*half*sign],d=[B[0]-A[0],B[1]-A[1]],t=(d[0]*b.u[1]-d[1]*b.u[0])/cross,m=[A[0]+t*a.u[0],A[1]+t*a.u[1]];if(Math.hypot(m[0]-p[0],m[1]-p[1])<=half*miterLimit+1e-10)out.push(m);}
  return out.length?out:ps;
}
function annotationPoints(o,options,defaultSize=.35){
  const size=o.fontSize??defaultSize,box=options.annotationBounds?.(o)||{x:o.x-Math.max(1,String(o.text??o.name??'').length)*size*.29,y:o.y-size,w:Math.max(1,String(o.text??o.name??'').length)*size*.58,h:size*1.3};
  // Rendering rotates text about its baseline anchor minus .35 em, not box center.
  return turn(rectPoints(box),o.rotation||0,o.x,o.y-size*.35);
}
function roomPoints(r,options){if(r.shape){const S=options.shapes||root.KERN_SHAPES;if(!S?.points)throw new TranslationError('Room-shape geometry is required to measure this building.','missing-shape-geometry');return S.points(r);}return rectPoints(r);}
function objectPoints(o,key,options){
  if(key==='primitives')return (root.KERN_PRIMITIVES||(typeof require==='function'?require('./primitives.js'):null)).points(o);
  if(key==='annotations')return annotationPoints(o,options);
  if(o.points)return strokePoints(o.points,o.width);
  if(key==='symbols'&&!o.rotationSpace)return rectPoints(o); // Legacy dimensions already describe world bounds.
  return turn(rectPoints(o),o.rotation||0,o.x+o.w/2,o.y+o.h/2);
}
/* Route bounds do not need boolean unions. A landing hull/port union has the same
 * outer XY extrema as its base polygon plus the attached flight faces. Calculating
 * those vertices directly also avoids translation-sensitive clip rounding failures. */
function routePolygons(r){
  const R=root.KERN_ROUTE_STAIRS||(typeof require==='function'?require('./route-stairs.js'):null);if(R?.displayGeometry)return R.displayGeometry(r).polygons.map((polygon,i)=>({id:r.id+'-part-'+i,polygon}));
  const vs=r.shape?.vertices||[{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:1}],raw=vs.map(v=>[r.x+v.x*r.w,r.y+v.y*r.h]);
  if(raw.length<4)throw new TranslationError('A stair route requires a valid affine room frame.','invalid-route-frame');
  const origin=raw[0],u=[raw[1][0]-origin[0],raw[1][1]-origin[1]],v=[raw[3][0]-origin[0],raw[3][1]-origin[1]],ul=Math.hypot(...u),vl=Math.hypot(...v);
  if(!finite(ul)||!finite(vl)||ul<1e-12||vl<1e-12)throw new TranslationError('A stair route requires a nonzero affine room frame.','invalid-route-frame');
  const at=n=>[origin[0]+n.u*u[0]+n.v*v[0],origin[1]+n.u*u[1]+n.v*v[1]],q=r.routeStair,ns=arr(q.nodes).slice(0,64),ps=ns.map(at),width=finite(q.width)?Math.max(.2,Math.min(20,q.width)):1.5;
  const landings=ns.map((node,i)=>{const depth=finite(node.landingDepth)?Math.max(.2,node.landingDepth):(q.landingDepth??width),custom=arr(node.landing),p=ps[i];return{id:r.id+'-landing-'+i,polygon:custom.length>=3?custom.map(at):[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,y])=>[p[0]+(u[0]/ul*x+v[0]/vl*y)*depth/2,p[1]+(u[1]/ul*x+v[1]/vl*y)*depth/2])};});
  const flights=[],extent=(poly,center,dir)=>poly.reduce((max,p)=>Math.max(max,(p[0]-center[0])*dir[0]+(p[1]-center[1])*dir[1]),0);
  for(let i=1;i<ps.length;i++){const a=ps[i-1],b=ps[i],length=Math.hypot(b[0]-a[0],b[1]-a[1]);if(length<.01)continue;const d=[(b[0]-a[0])/length,(b[1]-a[1])/length],n=[-d[1],d[0]],inA=extent(landings[i-1].polygon,a,d),inB=extent(landings[i].polygon,b,[-d[0],-d[1]]),run=length-inA-inB,w=finite(ns[i-1].width)?Math.max(.2,Math.min(20,ns[i-1].width)):width;if(run<=.05)continue;const from=[a[0]+d[0]*inA,a[1]+d[1]*inA];flights.push({id:r.id+'-flight-'+i,polygon:[[0,1],[run,1],[run,-1],[0,-1]].map(([s,t])=>[from[0]+d[0]*s+n[0]*t*w/2,from[1]+d[1]*s+n[1]*t*w/2])});}
  return [...landings,...flights];
}
function geometryItems(plan,options={}){
  const scope=selectedFloors(plan,options.floorIds),items=[],includeExtras=options.includeExtras!==false,includeSite=options.includeSite??scope.whole;
  const add=(kind,id,points,floor)=>{if(points?.length){boxOf(points);items.push({kind,id,floor,points});}};
  for(const fid of scope.chosen){const f=plan.floors[fid];for(const r of arr(f.rooms)){
    const stair=r.routeStair||r.localSteps||r.stairTransition||arr(plan.verticalConnections).some(c=>c.type==='stair'&&c.room===r.id&&arr(c.floors).includes(fid))||arr(plan.splitLevelConnections).some(c=>c.room===r.id&&(c.floor||c.level)===fid);
    if(!r.routeStair&&!r.localSteps)add('room',r.id,roomPoints(r,options),fid);
    if(r.routeStair){for(const part of routePolygons(r))add('stair',part.id,part.polygon,fid);}
    else if(stair){const D=options.stairs||root.KERN_STAIR_DETAIL;if(!D?.build)throw new TranslationError('Stair geometry is required to measure this building.','missing-stair-geometry');const detail=D.build(plan,fid,r.id);if(!detail&&(r.routeStair||r.localSteps))throw new TranslationError('The stair '+r.id+' has no measurable geometry.','missing-stair-geometry');for(const part of [...arr(detail?.flights),...arr(detail?.landings)])add('stair',part.id,part.polygon||part.rect&&rectPoints(part.rect),fid);}
    if(includeExtras&&options.includeAnnotations)for(const [index,z]of arr(r.zones).entries())add('annotation','zone-'+r.id+'-'+index,annotationPoints(z,options,.45),fid);
  }if(includeExtras)for(const key of ['symbols','services','primitives',...(options.includeAnnotations?['annotations']:[])])for(const [i,o]of arr(f[key]).entries())add(key,o.id||key+'-'+i,objectPoints(o,key,options),fid);}
  if(includeSite){
    if(plan.courtyard)add('courtyard','courtyard',roomPoints(plan.courtyard,options));
    const env=plan.envelope;if(env?.polygon)add('envelope','envelope',env.polygon);else if(env&&finite(env.x)&&finite(env.y)&&finite(env.w)&&finite(env.h))add('envelope','envelope',roomPoints(env,options));
    for(const [i,a]of arr(plan.approaches).entries()){const paths=a.points?[a.points]:a.start&&a.end?[[a.start,a.end]]:[];paths.push(...arr(a.branches));for(const ps of paths)add('approach',a.id||'approach-'+i,strokePoints(ps,a.width),a.level||a.floor);}
    for(const [i,o]of arr(plan.overlooks).entries())if(['h','v'].includes(o.axis))add('overlook','overlook-'+i,o.axis==='h'?[[o.lo,o.fixed],[o.hi,o.fixed]]:[[o.fixed,o.lo],[o.fixed,o.hi]]);
  }else if(options.includeApproaches)for(const [i,a]of arr(plan.approaches).entries())if(scope.chosen.has(a.level||a.floor)){const paths=a.points?[a.points]:a.start&&a.end?[[a.start,a.end]]:[];paths.push(...arr(a.branches));for(const ps of paths)add('approach',a.id||'approach-'+i,strokePoints(ps,a.width),a.level||a.floor);}
  return items;
}
function bounds(plan,options={}){const items=geometryItems(plan,options),b=boxOf(items.flatMap(o=>o.points));if(!b)return null;return b;}
function legacySource(plan,fid,r){
  if(r.linkedSource)return r.linkedSource;
  if(r.courtyardVoid||r.type==='void'&&r.id==='sky'){const floor=plan.courtyard?.floor||'L0',source=arr(plan.floors[floor]?.rooms).find(q=>q.type==='courtyard');if(source)return{floor,room:source.id};}
  if((r.type==='void'&&r.id==='void'&&fid==='L1'||r.id==='opsroof'&&r.independentCap!==true)&&arr(plan.floors.L0?.rooms).some(q=>q.id==='control'))return{floor:'L0',room:'control'};
  return null;
}
function analyzeFloorTranslation(plan,floorIds){
  let scope;try{scope=selectedFloors(plan,floorIds);}catch(e){return{ok:false,code:e.code,reason:e.message,requiredFloors:[]};}
  const {all,chosen,whole}=scope;if(whole)return{ok:true,floorIds:[...chosen],whole:true,requiredFloors:[...chosen]};
  const groups=[],group=(ids,reason,code='linked-floor-boundary')=>{const floors=[...new Set(ids.filter(id=>all.includes(id)))];if(floors.length>1)groups.push({floors,reason,code});};
  for(const c of arr(plan.verticalConnections))group([...arr(c.floors),...Object.keys(c.footprints||{})],'Connected '+(c.type||'vertical')+' '+(c.id||c.room)+' crosses the selected floor group.');
  const edits=new Map(),identities=new Map();for(const [fid,f]of Object.entries(plan.floors))for(const r of arr(f.rooms)){
    if(!identities.has(r))identities.set(r,[]);identities.get(r).push(fid);
    const source=legacySource(plan,fid,r);if(source)group([fid,source.floor],'Derived footprint '+r.id+' must move with its source on '+source.floor+'.');
    for(const key of ['editGroup','stairStackId'])if(r[key]){const k=key+':'+r[key];if(!edits.has(k))edits.set(k,[]);edits.get(k).push(fid);}
    if(r.routeStair)group([fid,...[r.routeStair.start,r.routeStair.end].filter(ref=>ref&&ref.kind!=='site').map(ref=>ref.floor)],'Stair route '+r.id+' must move with its linked endpoint floors.');
  }
  for(const ids of identities.values())group(ids,'A shared room object crosses the selected floor group.');
  for(const [key,ids]of edits)group(ids,'Linked stair group '+key.split(':').slice(1).join(':')+' crosses the selected floor group.');
  for(const c of arr(plan.splitLevelConnections))group([c.floor||c.level,...[c.start,c.end].filter(ref=>ref&&ref.kind!=='site').map(ref=>ref.floor)],'Local steps '+(c.id||c.room)+' must move with their linked endpoint floors.');
  const required=new Set(chosen);let grew=true;while(grew){grew=false;for(const g of groups)if(g.floors.some(id=>required.has(id)))for(const id of g.floors)if(!required.has(id)){required.add(id);grew=true;}}
  const crossed=groups.find(g=>g.floors.some(id=>chosen.has(id))&&g.floors.some(id=>!chosen.has(id)));if(crossed)return{ok:false,code:crossed.code,reason:crossed.reason,requiredFloors:all.filter(id=>required.has(id))};
  // These model-wide geometries have no independent per-floor copy. Keep them fixed
  // for partial moves, and reject moving their source rather than leave stale data.
  if(plan.courtyard&&chosen.has(plan.courtyard.floor||'L0')||plan.operationsSection?.footprint&&chosen.has(plan.operationsSection.floor||'L0')||arr(plan.overlooks).some(o=>arr(o.levels).some(id=>chosen.has(id))))return{ok:false,code:'global-geometry-boundary',reason:'This floor group owns shared courtyard, section or overlook geometry. Move the whole building to keep it aligned.',requiredFloors:all};
  return{ok:true,floorIds:[...chosen],whole:false,requiredFloors:[...chosen]};
}
function translateFloors(plan,floorIds,dx,dy,options={}){
  if(!finite(dx)||!finite(dy))throw new TranslationError('Use finite X and Y movement.');
  const analysis=analyzeFloorTranslation(plan,floorIds);if(!analysis.ok)throw new TranslationError(analysis.reason,analysis.code,{requiredFloors:analysis.requiredFloors});
  const next=clone(plan);if(dx===0&&dy===0){if(options.validate)options.validate(next);return next;}
  const chosen=new Set(analysis.floorIds),whole=analysis.whole,moved=new WeakSet(),visitedRooms=new WeakSet(),visitedGeometry=new WeakSet();
  // Match persisted six-decimal coordinate precision; never round local shapes,
  // route frames, dimensions, heights, links or unrelated metadata.
  const add=(v,d,path)=>{if(!finite(v))throw new TranslationError('Invalid XY coordinate at '+path+'.','invalid-coordinate');const n=options.round===false?v+d:Math.round((v+d)*1e6)/1e6;if(!finite(n))throw new TranslationError('Movement exceeds finite coordinate limits.','coordinate-limit');return Object.is(n,-0)?0:n;};
  const shiftXY=(o,path)=>{if(!o||moved.has(o))return;const array=Array.isArray(o);if(!array&&o.x===undefined&&o.y===undefined)return;if(array&&o.length<2)throw new TranslationError('Invalid point at '+path+'.','invalid-coordinate');const x=array?0:'x',y=array?1:'y';o[x]=add(o[x],dx,path+'.x');o[y]=add(o[y],dy,path+'.y');moved.add(o);};
  const points=(ps,path)=>{if(!Array.isArray(ps))return;for(let i=0;i<ps.length;i++){const p=ps[i];if(Array.isArray(p)&&Array.isArray(p[0]))points(p,path+'['+i+']');else if(p&&typeof p==='object')shiftXY(p,path+'['+i+']');}};
  const axisLine=(o,path)=>{if(!o||moved.has(o)||!['h','v'].includes(o.axis))return;for(const k of ['fixed','lo','hi','start','end'])if(finite(o[k]))o[k]=add(o[k],k==='fixed'?(o.axis==='h'?dy:dx):(o.axis==='h'?dx:dy),path+'.'+k);moved.add(o);};
  const geometry=(g,path)=>{
    if(!g||typeof g!=='object'||visitedGeometry.has(g))return;visitedGeometry.add(g);if(Array.isArray(g)){points(g,path);return;}
    shiftXY(g,path);axisLine(g,path);
    for(const k of ['polygon','polygons','points','holes','geometry','footprintGeometry','courtyardHole','upPath','downPath','arrowPath','line','basePolygon','portPoints'])points(g[k],path+'.'+k);
    for(const k of ['start','end','center'])if(g[k]&&typeof g[k]==='object'&&(Array.isArray(g[k])||finite(g[k].x)&&finite(g[k].y)))shiftXY(g[k],path+'.'+k);
    for(const k of ['rect','footprint','fromFootprint','toFootprint','floorOpening','upperFloorOpening'])geometry(g[k],path+'.'+k);
    if(g.footprints)for(const [fid,b]of Object.entries(g.footprints))if(whole||chosen.has(fid))geometry(b,path+'.footprints.'+fid);
    for(const k of ['flights','landings','treads','openings','clearanceEnvelopes'])for(const [i,p]of arr(g[k]).entries())geometry(p,path+'.'+k+'['+i+']');
    if(g.stair&&typeof g.stair==='object')geometry(g.stair,path+'.stair');
    for(const [key,d]of [['flightCenterX',dx],['flightCenterY',dy]])if(finite(g[key]))g[key]=add(g[key],d,path+'.'+key);
  };
  const room=(r,path)=>{if(!r||visitedRooms.has(r))return;visitedRooms.add(r);shiftXY(r,path);for(const [i,z]of arr(r.zones).entries())shiftXY(z,path+'.zones['+i+']');if(r.stairOriginal)room(r.stairOriginal,path+'.stairOriginal');};
  for(const fid of chosen){const f=next.floors[fid];for(const [i,r]of arr(f.rooms).entries())room(r,'floors.'+fid+'.rooms['+i+']');for(const key of ['symbols','services','annotations','primitives'])for(const [i,o]of arr(f[key]).entries()){const path='floors.'+fid+'.'+key+'['+i+']';if(o.points)points(o.points,path+'.points');else shiftXY(o,path);}}
  for(const [i,c]of arr(next.verticalConnections).entries()){const ids=arr(c.floors);if(whole||ids.length&&ids.every(id=>chosen.has(id)))geometry(c,'verticalConnections['+i+']');else if(c.footprints)for(const [fid,b]of Object.entries(c.footprints))if(chosen.has(fid))geometry(b,'verticalConnections['+i+'].footprints.'+fid);}
  for(const [i,c]of arr(next.splitLevelConnections).entries())if(whole||chosen.has(c.floor||c.level))geometry(c,'splitLevelConnections['+i+']');
  for(const [i,a]of arr(next.approaches).entries())if(whole||chosen.has(a.level||a.floor)){geometry(a,'approaches['+i+']');for(const [j,ps]of arr(a.branches).entries())points(ps,'approaches['+i+'].branches['+j+']');}
  if(next.walkStart&&(whole||chosen.has(next.walkStart.floor)))shiftXY(next.walkStart,'walkStart');
  if(whole){geometry(next.courtyard,'courtyard');geometry(next.envelope,'envelope');geometry(next.operationsSection,'operationsSection');for(const [i,o]of arr(next.overlooks).entries())geometry(o,'overlooks['+i+']');}
  if(options.validate)options.validate(next);return next;
}
function translate(plan,dx,dy,options={}){return translateFloors(plan,planFloors(plan),dx,dy,options);}
const api={bounds,geometryItems,translate,translateFloors,analyzeFloorTranslation,TranslationError,strokePoints};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.KERN_BUILDING_TRANSFORM=api;
})(typeof window!=='undefined'?window:globalThis);
