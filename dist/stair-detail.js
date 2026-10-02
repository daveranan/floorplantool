/* KERN connected stair design. Metres, x east / y south / z up.
 * Pure calculation: does not mutate or silently resize the user's plan.
 * Concept geometry, not building-code certification or a controller traversal test.
 */
(function(root){
'use strict';
const connections=root.KERN_CONNECTIONS||(typeof require==='function'?require('./geometry.js'):null);
const EPS=1e-6;
const arr=v=>Array.isArray(v)?v:[];
const DEFAULTS={clearWidth:1.4,landingDepth:1.4,treadDepth:.28,targetRiser:.17,maxRiser:.18,minHeadroom:2.2,perimeter:.2,centerGap:.2,waistThickness:.2,doorHeight:2.2,maxPairRise:6};
const rect=r=>({x:r.x,y:r.y,w:r.w,h:r.h});
const polygon=r=>[[r.x,r.y],[r.x+r.w,r.y],[r.x+r.w,r.y+r.h],[r.x,r.y+r.h]];
const finite=(v,f)=>Number.isFinite(v)?v:f;
const signZ=z=>(z>EPS?'+':'')+z.toFixed(2)+' m';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const round=n=>Math.round(n*1000000)/1000000;
function intersection(a,b){const x=Math.max(a.x,b.x),y=Math.max(a.y,b.y),w=Math.min(a.x+a.w,b.x+b.w)-x,h=Math.min(a.y+a.h,b.y+b.h)-y;return w>EPS&&h>EPS?{x,y,w,h}:null}
function boundary(a,b){let lo,hi;if(!a||!b)return null;if(Math.abs(a.x+a.w-b.x)<EPS||Math.abs(b.x+b.w-a.x)<EPS){lo=Math.max(a.y,b.y);hi=Math.min(a.y+a.h,b.y+b.h);if(hi>lo)return{axis:'v',fixed:Math.abs(a.x+a.w-b.x)<EPS?b.x:a.x,lo,hi}}if(Math.abs(a.y+a.h-b.y)<EPS||Math.abs(b.y+b.h-a.y)<EPS){lo=Math.max(a.x,b.x);hi=Math.min(a.x+a.w,b.x+b.w);if(hi>lo)return{axis:'h',fixed:Math.abs(a.y+a.h-b.y)<EPS?b.y:a.y,lo,hi}}return null}
function doorGeometry(d,f){if(d.edge||f.rooms.some(r=>(r.id===d.a||r.id===d.b)&&r.shape)){const S=root.KERN_SHAPES||(typeof require==='function'?require('./room-shapes.js'):null),g=S?.opening(d,f);if(!g)return null;if(Math.abs(g.u[1])<EPS)return{...g,axis:'h',fixed:g.p0[1]};if(Math.abs(g.u[0])<EPS)return{...g,axis:'v',fixed:g.p0[0]};return null;}if(d.b==='outside')return connections?.geometry(d,f);const a=f.rooms.find(r=>r.id===d.a),b=f.rooms.find(r=>r.id===d.b),g=boundary(a,b);if(!g)return null;if(d.kind==='open'&&d.fullWidth!==false)return{...g,start:g.lo,end:g.hi};if(g.hi-g.lo<d.width+.2-EPS)return null;const t=Math.max(0,Math.min(1,d.offset??.5)),start=g.lo+.1+Math.max(0,g.hi-g.lo-d.width-.2)*t;return{...g,start,end:start+d.width}}
function coordinateFrame(r,axis,end){
 const long=axis==='x'?r.w:r.h,short=axis==='x'?r.h:r.w;
 const reverse=(axis==='x'&&end==='east')||(axis==='y'&&end==='south');
 const xy=(u,v)=>axis==='x'?[r.x+(reverse?long-u:u),r.y+v]:[r.x+v,r.y+(reverse?long-u:u)];
 const uv=(x,y)=>axis==='x'?[reverse?r.x+long-x:x-r.x,y-r.y]:[reverse?r.y+long-y:y-r.y,x-r.x];
 const world=local=>{const a=xy(local.u0,local.v0),b=xy(local.u1,local.v1);return{x:Math.min(a[0],b[0]),y:Math.min(a[1],b[1]),w:Math.abs(a[0]-b[0]),h:Math.abs(a[1]-b[1])}};
 return{axis,end,long,short,reverse,xy,uv,world};
}
function build(plan,floorId,roomId,options={}){
 const floor=plan?.floors?.[floorId],room=arr(floor?.rooms).find(r=>r?.id===roomId);
 if(!floor||!room)return null;if(room.routeStair)return (root.KERN_ROUTE_STAIRS||(typeof require==='function'?require('./route-stairs.js'):null)).build(plan,floorId,roomId);const local=(root.KERN_ELEVATIONS||(typeof require==='function'?require('./elevation.js'):null))?.build(plan,floorId,roomId);if(local)return local;
 const connection=arr(plan.verticalConnections).find(c=>c?.type==='stair'&&c.room===roomId&&arr(c.floors).includes(floorId));
 const split=arr(plan.splitLevelConnections).find(c=>c?.floor===floorId&&c.room===roomId);
 if(!connection&&!split&&!room.stairTransition)return null;
 const c=connection||split||{},spec={...DEFAULTS,...plan.stairDesign,...c.stairDesign,...room.stairDesign,...options};
 for(const k of Object.keys(DEFAULTS))spec[k]=finite(spec[k],DEFAULTS[k]);
 const warnings=[],warn=(code,text,severity='error',extra={})=>{if(!warnings.some(w=>w.code===code&&w.text===text))warnings.push({code,kind:'stair',text,severity,...extra})};
 if(spec.clearWidth<1-EPS||spec.clearWidth>2+EPS)warn('width-range','Stair clear width is outside the requested 1–2 m range');
 if(spec.clearWidth<.6+EPS)warn('capsule-width','Stair is no wider than the 0.60 m character capsule');
 if(spec.landingDepth<spec.clearWidth-EPS)warn('landing-width','Landing depth must be at least the clear flight width');
 if(spec.treadDepth<.27-EPS)warn('tread-depth','Tread depth is below the 0.27 m game-design minimum');
 if(spec.minHeadroom<2.1-EPS)warn('headroom-target','Headroom target is below the 2.10 m design minimum');
 if(spec.perimeter<0||spec.centerGap<0||spec.waistThickness<=0||spec.treadDepth<=0||spec.targetRiser<=0||spec.maxRiser<=0||spec.clearWidth<=0||spec.landingDepth<=0||spec.maxPairRise<2.4||spec.targetRiser<.10||spec.maxRiser<.10||spec.maxPairRise>8){warn('invalid-spec','Invalid stair dimensions');return{roomId,floorId,warnings,status:'error',flights:[],landings:[],openings:[],access:[],segments:[],metrics:{},displayFlights:[],displayLandings:[]}}
 let axis=room.runAxis||c.runAxis||(room.w>room.h?'x':'y');
 if(!['x','y'].includes(axis)){warn('invalid-axis','Stair runAxis must be x or y');axis=room.w>room.h?'x':'y'}
 let end=room.landingEnd||c.landingEnd||(roomId==='transferstair'?'north':axis==='x'?'west':'south');
 if(!(axis==='x'?['west','east']:['north','south']).includes(end)){warn('invalid-end','Landing end does not match the stair axis');end=axis==='x'?'west':'south'}
 const frame=coordinateFrame(room,axis,end);
 const stops=connection?arr(c.floors).map(id=>{const f=plan.floors[id],r=arr(f?.rooms).find(a=>a?.id===roomId);return f&&r?{floor:id,z:finite(r.z,f.z),room:r}:null}).filter(Boolean).sort((a,b)=>a.z-b.z):[{floor:floorId,z:finite(c.lowerZ,finite(room.lowerZ,room.z)),room},{floor:floorId,z:finite(c.upperZ,finite(room.upperZ,floor.z)),room}];
 if(stops.length<2||stops.some(s=>!Number.isFinite(s.z))){warn('missing-levels','Connected stair needs two explicit, finite floor elevations');return{roomId,floorId,warnings,status:'error',flights:[],landings:[],openings:[],access:[],segments:[],metrics:{},displayFlights:[],displayLandings:[]}}
 for(const stop of stops){if(['x','y','w','h'].some(k=>Math.abs(stop.room[k]-room[k])>.01))warn('alignment',`${stop.floor}: stair footprint does not align with ${floorId}`)}
 const stairType=room.stairType||c.stairType||'switchback';
 if(['straight','spiral'].includes(stairType))return (root.KERN_STAIR_TYPES||(typeof require==='function'?require('./stair-types.js'):null)).build({plan,floorId,room,c,spec,axis,end,stops,warnings});
 if(stairType!=='switchback')warn('unsupported-type','Unsupported stair type: '+String(stairType));
 const flights=[],landings=[],segments=[],openings=[],walkSurfaces=[],obstacles=[];
 const p=spec.perimeter,C=spec.clearWidth,L=spec.landingDepth,G=spec.treadDepth;
 const nearEnd=p+L,farEnd=frame.long-p;
 const lanes=[[p,p+C],[frame.short-p-C,frame.short-p]];
 let maxRequiredLong=0,minRiser=Infinity,maxRiser=0;
 function addLanding(id,u0,u1,z,role,segmentId){const local={u0,u1,v0:p,v1:frame.short-p},world=frame.world(local),existing=landings.find(l=>Math.abs(l.z-z)<EPS&&Math.abs(l.local.u0-u0)<EPS&&Math.abs(l.local.u1-u1)<EPS);if(existing)return existing;const l={id,kind:'landing',rect:world,polygon:polygon(world),local,z,role,segmentId,depth:Math.max(0,u1-u0),clearWidth:Math.max(0,frame.short-2*p)};landings.push(l);if(world.w>EPS&&world.h>EPS){walkSurfaces.push({...l,parent:id,top:z});obstacles.push({...l,parent:id,underside:()=>z-spec.waistThickness,top:()=>z})}return l}
 for(let si=0;si<stops.length-1;si++){
  const low=stops[si],high=stops[si+1],rise=high.z-low.z,id=(c.id||roomId)+'-'+low.floor+'-'+high.floor;
  if(rise<=EPS){warn('zero-rise',`${low.floor}–${high.floor}: stair rise must be positive`);continue}
  let mids=arr(c.intermediateZs).filter(z=>Number.isFinite(z)&&z>low.z+EPS&&z<high.z-EPS);
  if(c.intermediateZs!==undefined&&(!Array.isArray(c.intermediateZs)||c.intermediateZs.some(z=>!Number.isFinite(z))))warn('invalid-intermediate','Intermediate stair elevations must be a list of finite numbers');
  if(c.B1toB2&&[low.floor,high.floor].includes('B1')&&[low.floor,high.floor].includes('B2')){const z=c.B1toB2.intermediateZ;if(Number.isFinite(z)&&z>low.z+EPS&&z<high.z-EPS)mids.push(z)}
  if(!mids.length){const pairs=Math.ceil(rise/spec.maxPairRise);for(let q=1;q<pairs;q++)mids.push(low.z+rise*q/pairs)}
  const zs=[low.z,...new Set(mids.sort((a,b)=>a-b)),high.z];
  const segment={id,from:low.floor,to:high.floor,z0:low.z,z1:high.z,rise,flights:[],landings:[],intermediateStops:[],risers:0};
  for(let pi=0;pi<zs.length-1;pi++){
   const z0=zs[pi],z1=zs[pi+1],pairRise=z1-z0;
   let count=2*Math.round(pairRise/(2*spec.targetRiser));count=Math.max(4,count,2*Math.ceil(pairRise/(2*spec.maxRiser)));
   const n=count/2,rh=pairRise/count,run=(n-1)*G,requiredLong=2*p+2*L+run;
   maxRequiredLong=Math.max(maxRequiredLong,requiredLong);minRiser=Math.min(minRiser,rh);maxRiser=Math.max(maxRiser,rh);
   const turn=nearEnd+run;
   const nearLow=addLanding(id+'-'+pi+'-lower',p,nearEnd,z0,pi===0?'floor':'intermediate',id);
   const turnLanding=addLanding(id+'-'+pi+'-turn',turn,farEnd,z0+pairRise/2,'turn',id);
   const nearHigh=addLanding(id+'-'+pi+'-upper',p,nearEnd,z1,pi===zs.length-2?'floor':'intermediate',id);
   segment.landings.push(nearLow.id,turnLanding.id,nearHigh.id);
   if(pi>0)segment.intermediateStops.push({z:z0,door:false,landing:nearLow.id});
   for(let fi=0;fi<2;fi++){
    const fromZ=z0+fi*pairRise/2,toZ=fromZ+pairRise/2,lane=lanes[fi],local={u0:nearEnd,u1:turn,v0:lane[0],v1:lane[1]},world=frame.world(local),fid=id+'-flight-'+(2*pi+fi+1),forward=fi===0;
    const position=t=>frame.xy(forward?nearEnd+t:turn-t,(lane[0]+lane[1])/2);
    const nosing=u=>fromZ+rh+(forward?u-nearEnd:turn-u)*rh/G;
    const f={id:fid,segmentId:id,index:2*pi+fi+1,pair:pi,kind:'flight',rect:world,polygon:polygon(world),local,z0:fromZ,z1:toZ,rise:pairRise/2,risers:n,treads:[],riserHeight:rh,treadDepth:G,run,clearWidth:C,upPath:[position(0),position(run)],downPath:[position(run),position(0)],fromLanding:fi===0?nearLow.id:turnLanding.id,toLanding:fi===0?turnLanding.id:nearHigh.id};
    for(let k=0;k<n-1;k++){
     const u0=forward?nearEnd+k*G:turn-(k+1)*G,u1=u0+G,slocal={u0,u1,v0:lane[0],v1:lane[1]},srect=frame.world(slocal),z=fromZ+(k+1)*rh;
     const edgeU=forward?u0:u1;
     const step={index:k+1,z,rect:srect,polygon:polygon(srect),line:[frame.xy(edgeU,lane[0]),frame.xy(edgeU,lane[1])]};f.treads.push(step);walkSurfaces.push({...step,parent:fid,kind:'tread',segmentId:id,top:z});
    }
    obstacles.push({id:fid,parent:fid,kind:'flight',rect:world,segmentId:id,underside:(x,y)=>nosing(frame.uv(x,y)[0])-spec.waistThickness,top:(x,y)=>nosing(frame.uv(x,y)[0])});
    flights.push(f);segment.flights.push(fid);
   }
   segment.risers+=count;
  }
  segment.riserHeights=[...new Set(flights.filter(f=>f.segmentId===id).map(f=>round(f.riserHeight)))];segments.push(segment);
 }
 const requiredShort=2*p+2*C+spec.centerGap;
 if(frame.short<requiredShort-EPS)warn('footprint-width',`Needs ${requiredShort.toFixed(2)} m across two ${C.toFixed(2)} m clear flights; only ${frame.short.toFixed(2)} m available`, 'error',{required:requiredShort,available:frame.short});
 if(frame.long<maxRequiredLong-EPS)warn('footprint-length',`Needs ${maxRequiredLong.toFixed(2)} m along flights and landings; only ${frame.long.toFixed(2)} m available`,'error',{required:maxRequiredLong,available:frame.long});
 for(const landing of landings)if(landing.depth<L-EPS)warn('landing-fit',`${signZ(landing.z)} landing has ${landing.depth.toFixed(2)} m depth; needs ${L.toFixed(2)} m`);
 // Each inter-floor plate/service layer must omit the entire stair interior.
 // These are explicit required voids; they are not a claim that an unseen 3D model has them.
 const shaftLocal={u0:p,u1:frame.long-p,v0:p,v1:frame.short-p},shaftRect=frame.world(shaftLocal);
 for(const stop of stops.slice(1))openings.push({id:(c.id||roomId)+'-opening-'+stop.floor+'-'+round(stop.z),floor:stop.floor,z:stop.z,rect:shaftRect,polygon:polygon(shaftRect),slabBottom:stop.z-finite(plan.floorModule?.slab,.3),serviceBottom:stop.z-finite(plan.floorModule?.slab,.3)-finite(plan.floorModule?.serviceClear,1.5),through:['floor slab','service zone','ceiling'],keepLandingIds:landings.filter(l=>Math.abs(l.z-stop.z)<EPS).map(l=>l.id),required:true});
 // A stack can skip occupied floors, but it cannot skip their physical plates.
 if(connection&&stops.length>1){const low=stops[0].z,high=stops.at(-1).z;for(const [id,f]of Object.entries(plan.floors)){if(!Number.isFinite(f.z)||f.z<=low+EPS||f.z>=high-EPS||stops.some(s=>s.floor===id))continue;openings.push({id:(c.id||roomId)+'-pass-through-'+id,floor:id,z:f.z,rect:shaftRect,polygon:polygon(shaftRect),slabBottom:f.z-finite(plan.floorModule?.slab,.3),serviceBottom:f.z-finite(plan.floorModule?.slab,.3)-finite(plan.floorModule?.serviceClear,1.5),through:['floor slab','service zone','ceiling'],keepLandingIds:[],required:true,passThrough:true});warn('skipped-floor',id+': required shaft opening through the floor, service zone and ceiling; no arrival access','notice');for(const occupant of arr(f.rooms)){if(!occupant||occupant.id===roomId||occupant.type==='void')continue;if(intersection(shaftRect,occupant))warn('shaft-blocked',id+': stair passes through '+occupant.name+'; clear the shaft opening before treating this route as usable')}}}
 // Optional real obstruction input: room/connection/plan stairObstructions in world metres.
 // {id,x,y,w,h,z,thickness} denotes a plate whose top is z. A single such plate can invalidate fit.
 const externalObstructions=[...arr(plan.stairObstructions),...arr(c.stairObstructions),...arr(room.stairObstructions)];
 for(const holder of [plan,c,room])if(holder.stairObstructions!==undefined&&!Array.isArray(holder.stairObstructions))warn('invalid-obstruction','Stair obstructions must be an array; headroom cannot be verified');
 for(const o of externalObstructions){if(!o||typeof o!=='object'||![o.x,o.y,o.w,o.h,o.z,o.thickness].every(Number.isFinite)||o.w<=0||o.h<=0||o.thickness<0){warn('invalid-obstruction','An obstruction has invalid dimensions; headroom cannot be verified');continue}obstacles.push({id:o.id||'obstruction',parent:o.id||'obstruction',kind:'obstruction',rect:rect(o),underside:()=>o.z-o.thickness,top:()=>o.z})}
 let minimum=null,worst=null;
 const relevantSegments=segments.filter(s=>s.from===floorId||s.to===floorId).map(s=>s.id);
 for(const walk of walkSurfaces){if(!relevantSegments.includes(walk.segmentId))continue;
  for(const obstacle of obstacles){if(obstacle.parent===walk.parent)continue;const area=intersection(walk.rect,obstacle.rect);if(!area)continue;
   for(const [x,y]of polygon(area)){
    const top=obstacle.top(x,y);if(top<=walk.top+EPS)continue;
    const clearance=Math.max(0,obstacle.underside(x,y)-walk.top);
    if(minimum===null||clearance<minimum){minimum=clearance;worst={walkId:walk.parent,obstructionId:obstacle.id,point:[x,y,walk.top],headroom:clearance}}
   }
  }
 }
 if(minimum!==null&&minimum<spec.minHeadroom-EPS)warn('headroom',`Only ${minimum.toFixed(2)} m headroom below ${worst.obstructionId}; needs ${spec.minHeadroom.toFixed(2)} m`,'error',{headroom:minimum,required:spec.minHeadroom,location:worst.point});
 const access=[];
 for(const d of (connections?connections.all(floor):arr(floor.doors))){if(!d||d.a!==roomId&&d.b!==roomId)continue;const other=d.b==='outside'?{id:'outside',name:'Outside',z:room.z??floor.z}:floor.rooms.find(r=>r.id===(d.a===roomId?d.b:d.a)),g=doorGeometry(d,floor);if(!other||!g){warn('door-detached',`Door ${d.id} is detached or too wide`);access.push({doorId:d.id,valid:false,reason:'detached'});continue}
  const z=finite(other.z,floor.z),ends=g.axis==='h'?[[g.start,g.fixed],[g.end,g.fixed]]:[[g.fixed,g.start],[g.fixed,g.end]];
  const uv=ends.map(a=>frame.uv(...a));
  // Project through the perimeter wall into the walking clear zone; opening must still sit within the near landing band.
  const atNearEnd=uv.every(a=>Math.abs(a[0])<EPS),onSide=uv.every(a=>Math.abs(a[1])<EPS||Math.abs(a[1]-frame.short)<EPS);
  const inBand=atNearEnd||onSide&&Math.min(...uv.map(a=>a[0]))>=-EPS&&Math.max(...uv.map(a=>a[0]))<=nearEnd+EPS;
  const atClearEnd=atNearEnd&&Math.min(...uv.map(a=>a[1]))>=p-EPS&&Math.max(...uv.map(a=>a[1]))<=frame.short-p+EPS;
  const matching=landings.filter(l=>Math.abs(l.z-z)<.01&&l.local.u0===p&&l.local.u1===nearEnd);
  const valid=inBand&&(!atNearEnd||atClearEnd)&&matching.length>0;
  const a={doorId:d.id,otherRoom:other.id,z,geometry:g,points:ends,landingId:matching[0]?.id||null,valid,doorHeight:finite(d.height,spec.doorHeight),doorHeightAssumed:!Number.isFinite(d.height),swingClearanceVerified:false,reason:atNearEnd&&!atClearEnd?'Door opening conflicts with the perimeter allowance':!inBand?'Door meets a flight or turning landing instead of the floor landing':!matching.length?'Door elevation has no matching stair landing':null};access.push(a);
  if(!valid)warn('door-landing',`${d.id}: ${a.reason}`,'error',{doorId:d.id});
  if(a.doorHeight<spec.minHeadroom-EPS)warn('door-headroom',`${d.id}: door height ${a.doorHeight.toFixed(2)} m is below the ${spec.minHeadroom.toFixed(2)} m route headroom target`);
 }
 if(!access.length)warn('no-door','Stair has no floor access connection');
 const currentZ=connection?finite(room.z,floor.z):null;
 const up=connection?segments.find(s=>s.from===floorId):segments[0],down=connection?segments.find(s=>s.to===floorId):segments[0];
 const displayFlights=[];
 function display(fid,direction,role,label){const f=flights.find(a=>a.id===fid);if(f)displayFlights.push({...f,direction,role,label,arrowPath:direction==='up'?f.upPath:f.downPath})}
 if(up&&down){display(up.flights[0],'up','departure','UP'+(connection?' '+up.to:''));display(down.flights.at(-1),'down','departure','DOWN'+(connection?' '+down.from:''))}
 else if(up){display(up.flights[0],'up','departure','UP '+up.to);display(up.flights[1],'up','continuation',up.flights.length>2?'UP · CONT.':'UP · RETURN')}
 else if(down){display(down.flights.at(-1),'down','departure','DOWN '+down.from);display(down.flights.at(-2),'down','continuation',down.flights.length>2?'DOWN · CONT.':'DOWN · RETURN')}
 const landingIds=new Set(displayFlights.flatMap(f=>[f.fromLanding,f.toLanding]));
 const displayLandings=landings.filter(l=>landingIds.has(l.id));
 const clearanceEnvelopes=walkSurfaces.map(w=>({rect:w.rect,polygon:polygon(w.rect),z0:w.top,z1:w.top+spec.minHeadroom,source:w.parent}));
 const errors=warnings.filter(w=>w.severity==='error');
 const datumLabel=connection?signZ(currentZ):signZ(stops[0].z)+' / '+signZ(stops.at(-1).z);
 return{schema:'kern-stair-detail-1',roomId,floorId,connectionId:c.id||roomId,name:room.name,footprint:rect(room),runAxis:axis,landingEnd:end,spec,status:errors.length?'error':'conditional',fit:!warnings.some(w=>['footprint-width','footprint-length','landing-fit','alignment'].includes(w.code)),warnings,stops:stops.map(s=>({floor:s.floor,z:s.z})),flights,landings,segments,openings,access,clearanceEnvelopes,displayFlights,displayLandings,datumLabel,metrics:{clearWidth:C,landingDepth:L,treadDepth:G,riserMin:minRiser,riserMax:maxRiser,requiredEnvelope:{long:maxRequiredLong,short:requiredShort},availableEnvelope:{long:frame.long,short:frame.short},minimumHeadroom:minimum,requiredHeadroom:spec.minHeadroom,headroomWorst:worst,headroomConditional:true,standingCharacterHeight:1.8,crouchedCharacterHeight:1.23,waistThickness:spec.waistThickness,perimeterAllowance:p},clearanceNote:'Calculated against stair flights, landings and supplied obstructions. Requires the listed slab/service/ceiling openings, protected headroom above the top landing, and no unmodelled beams or ducts. Door leaf swings must remain outside the reserved clear landing area. Runtime traversal and structural detailing remain untested.'};
}
function previewLevels(detail){
 if(!detail?.landings?.length)return[];
 const levels=[];
 for(const landing of detail.landings){
  let level=levels.find(l=>Math.abs(l.z-landing.z)<EPS);
  if(!level){const realFloors=[...new Set(arr(detail.stops).filter(s=>Math.abs(s.z-landing.z)<EPS).map(s=>s.floor))];level={id:'z:'+round(landing.z),z:landing.z,kind:realFloors.length?'floor':landing.role,realFloors,landingIds:[],upFlightIds:[],downFlightIds:[]};levels.push(level)}
  level.landingIds.push(landing.id);
 }
 for(const level of levels){
  level.upFlightIds=detail.flights.filter(f=>Math.abs(f.z0-level.z)<EPS).map(f=>f.id);
  level.downFlightIds=detail.flights.filter(f=>Math.abs(f.z1-level.z)<EPS).map(f=>f.id);
  level.label=(level.realFloors.length?level.realFloors.join(' / '):level.kind==='turn'?'Turning landing':'Intermediate landing')+' · '+signZ(level.z);
 }
 return levels.sort((a,b)=>a.z-b.z);
}
function slice(detail,levelIdOrZ){
 const level=previewLevels(detail).find(l=>typeof levelIdOrZ==='number'?Math.abs(l.z-levelIdOrZ)<EPS:l.id===levelIdOrZ||l.landingIds.includes(levelIdOrZ));
 if(!level)return null;
 const displayFlights=[];
 for(const [direction,ids]of [['up',level.upFlightIds],['down',level.downFlightIds]])for(const id of ids){const f=detail.flights.find(f=>f.id===id);displayFlights.push({...f,direction,role:'departure',label:(direction==='up'?'UP ':'DOWN ')+signZ(direction==='up'?f.z1:f.z0),arrowPath:direction==='up'?f.upPath:f.downPath})}
 const displayLandings=detail.landings.filter(l=>level.landingIds.includes(l.id));
 const selected=new Set(displayFlights.map(f=>f.id));
 const dedup=(list,key)=>{const seen=new Set();return list.filter(item=>{const k=key(item);if(seen.has(k))return false;seen.add(k);return true})};
 const ghostFlights=dedup(detail.flights.filter(f=>!selected.has(f.id)).sort((a,b)=>Math.min(Math.abs(a.z0-level.z),Math.abs(a.z1-level.z))-Math.min(Math.abs(b.z0-level.z),Math.abs(b.z1-level.z))),f=>JSON.stringify(f.polygon));
 const currentPolygons=new Set(displayLandings.map(l=>JSON.stringify(l.polygon)));
 const ghostLandings=dedup(detail.landings.filter(l=>!currentPolygons.has(JSON.stringify(l.polygon))),l=>JSON.stringify(l.polygon));
 return{...detail,preview:true,previewLevel:level,displayFlights,displayLandings,ghostFlights,ghostLandings,datumLabel:signZ(level.z)};
}
function markup(detail){
 if(!detail)return'';const r=detail.footprint;if(!r)return'';
 if(detail.stairType==='spiral')return (root.KERN_STAIR_TYPES||(typeof require==='function'?require('./stair-types.js'):null)).spiralMarkup(detail);
 const n=v=>round(v),poly=p=>p.map(a=>a.map(n).join(',')).join(' '),color=detail.status==='error'?'#b73e31':'#476777';
 const title=`${detail.name}: ${detail.metrics.clearWidth.toFixed(2)} m clear; ${detail.metrics.requiredHeadroom.toFixed(2)} m target headroom. ${detail.clearanceNote}`;
 let s=`<g class="stair-detail" data-stair="${esc(detail.roomId)}" pointer-events="none"><title>${esc(title)}</title>`;
 if(detail.preview){s+='<g class="stair-ghost" opacity=".18">';for(const l of detail.ghostLandings||[])s+=`<polygon points="${poly(l.polygon)}" fill="#ddd6bf" stroke="#66736e" stroke-width=".045" stroke-dasharray=".15 .1"/>`;for(const f of detail.ghostFlights||[]){s+=`<polygon points="${poly(f.polygon)}" fill="#d8dfdc" stroke="#66736e" stroke-width=".045" stroke-dasharray=".15 .1"/>`;for(const t of f.treads)s+=`<path d="M${t.line[0].map(n).join(' ')}L${t.line[1].map(n).join(' ')}" stroke="#66736e" stroke-width=".035"/>`}s+='</g>'}
 // Landings are real level surfaces. Coincident projections at different heights remain separately described in data.
 const drawn=new Set();for(const l of detail.displayLandings||[]){const key=poly(l.polygon);if(drawn.has(key))continue;drawn.add(key);s+=`<polygon points="${key}" fill="#f2e9ca" fill-opacity=".86" stroke="${color}" stroke-width=".055"/>`}
 let badges='';for(const f of detail.displayFlights||[]){const c=f.direction==='up'?'#216c7b':'#a2612c',dashed=f.role==='continuation';s+=`<polygon points="${poly(f.polygon)}" fill="${f.direction==='up'?'#dbeaed':'#eee1cf'}" fill-opacity=".85" stroke="${c}" stroke-width=".065"${dashed?' stroke-dasharray=".14 .11"':''}/>`;
  for(const t of f.treads)s+=`<path d="M${t.line[0].map(n).join(' ')}L${t.line[1].map(n).join(' ')}" stroke="${c}" stroke-width=".035"/>`;
  const cutTread=f.treads[Math.min(f.treads.length-1,Math.max(0,Math.floor(1.2/f.riserHeight)-1))];if(cutTread){const [a,b]=cutTread.line;s+=`<path class="stair-cut-line" d="M${a[0]} ${a[1]}L${b[0]} ${b[1]}" stroke="${c}" stroke-width=".08" stroke-dasharray=".13 .07"/>`;}
  const [a,b]=f.arrowPath,dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy),ux=dx/len,uy=dy/len,from=[a[0]+ux*.25,a[1]+uy*.25],to=[b[0]-ux*.25,b[1]-uy*.25];
  s+=`<path d="M${from.map(n).join(' ')}L${to.map(n).join(' ')}m${n(-ux*.28-uy*.15)} ${n(-uy*.28+ux*.15)}L${to.map(n).join(' ')}l${n(-ux*.28+uy*.15)} ${n(-uy*.28-ux*.15)}" fill="none" stroke="${c}" stroke-width=".095"/>`;
  const cx=(a[0]+b[0])/2,cy=(a[1]+b[1])/2,label=f.direction==='up'?'UP':'DOWN',target=f.direction==='up'?f.z1:f.z0;
  const bw=Math.min(1.2,Math.max(.8,f.rect.w-.12)),font=Math.min(.27,bw/(label.length*.68)),sub=(target>=0?'+':'')+target.toFixed(1)+'m';
  badges+=`<g aria-label="${esc(f.label)}" transform="translate(${n(cx)} ${n(cy)})"><rect x="${n(-bw/2)}" y="-.43" width="${n(bw)}" height=".86" rx=".08" fill="#f7f7f2" stroke="${c}" stroke-width=".04"/><text x="0" y="-.07" text-anchor="middle" font-family="Arial,sans-serif" style="font-size:${font}px;font-weight:700;letter-spacing:0" fill="${c}">${label}</text><text x="0" y=".25" text-anchor="middle" font-family="Arial,sans-serif" style="font-size:${Math.min(.2,bw/(sub.length*.62))}px;letter-spacing:0" fill="${c}">${sub}</text></g>`;

 }
 const near=detail.displayLandings.find(l=>l.role==='floor')||detail.displayLandings[0];
 if(near){const x=near.rect.x+near.rect.w/2,y=near.rect.y+near.rect.h/2;s+=`<text x="${n(x)}" y="${n(y+.1)}" text-anchor="middle" font-family="system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Arial,sans-serif" letter-spacing="normal" word-spacing="normal" font-size=".28" fill="${color}">${esc(detail.datumLabel)}</text>`}
 if(detail.status==='error'&&!detail.routeStair&&!detail.localSteps)s+=`<rect x="${n(r.x+.08)}" y="${n(r.y+.08)}" width="${n(Math.max(.1,r.w-.16))}" height="${n(Math.max(.1,r.h-.16))}" fill="none" stroke="#b73e31" stroke-width=".14" stroke-dasharray=".2 .12"/>`;
 return s+badges+'</g>';
}
const api={build,markup,previewLevels,slice,defaults:{...DEFAULTS},doorGeometry};root.KERN_STAIR_DETAIL=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
