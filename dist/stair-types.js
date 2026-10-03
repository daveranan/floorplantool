/* Calculated straight and spiral stairs. Concept geometry, never traversal certification. */
(function(root){
'use strict';
const EPS=1e-6,round=n=>Math.round(n*1e6)/1e6,rect=r=>[[r.x,r.y],[r.x+r.w,r.y],[r.x+r.w,r.y+r.h],[r.x,r.y+r.h]],arr=v=>Array.isArray(v)?v:[];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function bounds(poly){const xs=poly.map(p=>p[0]),ys=poly.map(p=>p[1]);return{x:Math.min(...xs),y:Math.min(...ys),w:Math.max(...xs)-Math.min(...xs),h:Math.max(...ys)-Math.min(...ys)}}
function area(poly){return Math.abs(poly.reduce((s,p,i)=>{const q=poly[(i+1)%poly.length];return s+p[0]*q[1]-q[0]*p[1]},0))/2}
// Convex clipping is used on tread/landing pieces, not their rectangular bounds.
function overlap(subject,clip){let out=subject;const signed=clip.reduce((s,p,i)=>{const q=clip[(i+1)%clip.length];return s+p[0]*q[1]-q[0]*p[1]},0),sign=signed>=0?1:-1;
 for(let i=0;i<clip.length&&out.length;i++){const a=clip[i],b=clip[(i+1)%clip.length],cross=p=>sign*((b[0]-a[0])*(p[1]-a[1])-(b[1]-a[1])*(p[0]-a[0])),input=out;out=[];for(let j=0;j<input.length;j++){const p=input[j],q=input[(j+1)%input.length],cp=cross(p),cq=cross(q);if(cp>=-EPS)out.push(p);if((cp>EPS&&cq<-EPS)||(cp<-EPS&&cq>EPS)){const t=cp/(cp-cq);out.push([p[0]+(q[0]-p[0])*t,p[1]+(q[1]-p[1])*t]);}}}return out.length>=3&&area(out)>EPS?out:null;
}
function build(input){
 const {plan,floorId,room,c,spec,axis,end,stops}=input,type=room.stairType||c.stairType,warnings=[...input.warnings],warn=(code,text,severity='error')=>warnings.push({code,kind:'stair',text,severity});
 const p=spec.perimeter,C=spec.clearWidth,L=spec.landingDepth,G=spec.treadDepth,flights=[],landings=[],segments=[],surfaces=[];
 const footprint={x:room.x,y:room.y,w:room.w,h:room.h},long=axis==='x'?room.w:room.h,short=axis==='x'?room.h:room.w,reverse=axis==='x'?end==='east':end==='south';
 const xy=(u,v)=>axis==='x'?[room.x+(reverse?long-u:u),room.y+v]:[room.x+v,room.y+(reverse?long-u:u)],box=(u0,u1,v0,v1)=>{const a=xy(u0,v0),b=xy(u1,v1);return{x:Math.min(a[0],b[0]),y:Math.min(a[1],b[1]),w:Math.abs(a[0]-b[0]),h:Math.abs(a[1]-b[1])}};
 const makeLanding=(id,polygon,z,role,sid,pieces=[polygon])=>{const existing=landings.find(l=>Math.abs(l.z-z)<EPS&&JSON.stringify(l.polygon)===JSON.stringify(polygon));if(existing)return existing;const l={id,kind:'landing',polygon,rect:bounds(polygon),z,role,segmentId:sid,depth:L,clearWidth:C,pieces};landings.push(l);pieces.forEach((q,i)=>surfaces.push({id:id+'-'+i,polygon:q,z,parent:id,kind:'landing'}));return l};
 let requiredLong=0,requiredShort=0,minRiser=Infinity,maxRiser=0,walkingRadius=null,angleStep=null,pitch=null;
 if(type==='straight'){
  requiredShort=2*p+C;
  if(stops.length!==2)warn('straight-destinations','A straight stack connects exactly two floors. Create separate stacks for additional destinations.');
  for(let si=0;si<stops.length-1;si++){
   const low=stops[si],high=stops[si+1],rise=high.z-low.z,sid=(c.id||room.id)+'-'+low.floor+'-'+high.floor,segment={id:sid,from:low.floor,to:high.floor,z0:low.z,z1:high.z,rise,flights:[],landings:[],intermediateStops:[],risers:0};
   if(rise<=EPS){warn('zero-rise','Stair rise must be positive');continue;}const groups=Math.ceil(rise/spec.maxPairRise);let u=p,z=low.z;
   let lower=makeLanding(sid+'-lower',rect(box(u,u+L,p,p+C)),z,'floor',sid);segment.landings.push(lower.id);u+=L;
   for(let k=0;k<groups;k++){
    const delta=rise/groups,n=Math.max(2,Math.ceil(delta/spec.targetRiser),Math.ceil(delta/spec.maxRiser)),rh=delta/n,run=(n-1)*G,poly=rect(box(u,u+run,p,p+C)),f={id:sid+'-flight-'+k,kind:'flight',segmentId:sid,index:k+1,rect:bounds(poly),polygon:poly,z0:z,z1:z+delta,rise:delta,risers:n,riserHeight:rh,treadDepth:G,clearWidth:C,run,treads:[],upPath:[xy(u,p+C/2),xy(u+run,p+C/2)],fromLanding:lower.id};f.downPath=[...f.upPath].reverse();
    for(let i=0;i<n-1;i++){const r=box(u+i*G,u+(i+1)*G,p,p+C),t={index:i+1,z:round(z+(i+1)*rh),rect:r,polygon:rect(r),line:[xy(u+i*G,p),xy(u+i*G,p+C)]};f.treads.push(t);surfaces.push({id:f.id+'-'+i,polygon:t.polygon,z:t.z,parent:f.id,kind:'tread'});}
    z+=delta;u+=run;const upper=makeLanding(sid+'-landing-'+k,rect(box(u,u+L,p,p+C)),z,k===groups-1?'floor':'intermediate',sid);f.toLanding=upper.id;flights.push(f);segment.flights.push(f.id);segment.landings.push(upper.id);segment.risers+=n;if(k<groups-1)segment.intermediateStops.push({z,door:false,landing:upper.id});lower=upper;u+=L;minRiser=Math.min(minRiser,rh);maxRiser=Math.max(maxRiser,rh);
   }requiredLong=Math.max(requiredLong,u+p);segments.push(segment);
  }
 }else{
  const inner=Number.isFinite(spec.innerRadius)?spec.innerRadius:.35,outer=inner+C,cx=room.x+room.w/2,cy=room.y+room.h/2,hand=(room.spiralHand||c.spiralHand)==='left'?-1:1;
  if(inner<.2||inner>2)warn('spiral-radius','Spiral post radius must be 0.20–2.00 m');
  walkingRadius=inner+C/2;angleStep=2*Math.asin(Math.min(.99,G/(2*walkingRadius)));const landingAngle=L/walkingRadius;
  requiredLong=requiredShort=2*(outer+p);
  if(landingAngle>Math.PI/2)warn('spiral-landing','Spiral landing needs a larger walking radius for the requested depth');
  const point=(r,a)=>[round(cx+r*Math.cos(a)),round(cy+r*Math.sin(a))];
  const sector=(a,b)=>{const count=Math.max(1,Math.ceil(Math.abs(b-a)/(.12))),angles=Array.from({length:count+1},(_,i)=>a+(b-a)*i/count);return{polygon:[...angles.map(t=>point(outer,t)),...angles.slice().reverse().map(t=>point(inner,t))],pieces:angles.slice(1).map((v,i)=>[point(inner,angles[i]),point(outer,angles[i]),point(outer,v),point(inner,v)])};};
  let angle=({west:Math.PI,east:0,north:-Math.PI/2,south:Math.PI/2})[end];
  let lowerShape=sector(angle,angle+hand*landingAngle),lower=makeLanding((c.id||room.id)+'-spiral-start',lowerShape.polygon,stops[0].z,'floor','start',lowerShape.pieces);angle+=hand*landingAngle;
  for(let si=0;si<stops.length-1;si++){
   const low=stops[si],high=stops[si+1],rise=high.z-low.z,sid=(c.id||room.id)+'-'+low.floor+'-'+high.floor,n=Math.max(2,Math.ceil(rise/spec.targetRiser),Math.ceil(rise/spec.maxRiser)),rh=rise/n;
   if(rise<=EPS){warn('zero-rise','Stair rise must be positive');continue;}
   const start=angle,flightAngle=(n-1)*angleStep*hand,shape=sector(start,start+flightAngle),f={id:sid+'-spiral',kind:'flight',segmentId:sid,index:1,rect:bounds(shape.polygon),polygon:shape.polygon,z0:low.z,z1:high.z,rise,risers:n,riserHeight:rh,treadDepth:G,clearWidth:C,run:(n-1)*G,curved:true,treads:[],fromLanding:lower.id,upPath:Array.from({length:n},(_,i)=>point(walkingRadius,start+hand*i*angleStep))};f.downPath=[...f.upPath].reverse();
   for(let i=0;i<n-1;i++){const a=start+i*angleStep*hand,b=a+angleStep*hand,q=[point(inner,a),point(outer,a),point(outer,b),point(inner,b)],t={index:i+1,z:round(low.z+(i+1)*rh),rect:bounds(q),polygon:q,line:[point(inner,a),point(outer,a)],curved:true};f.treads.push(t);surfaces.push({id:f.id+'-'+i,polygon:q,z:t.z,parent:f.id,kind:'tread'});}
   angle+=flightAngle;const landing=sector(angle,angle+hand*landingAngle),upper=makeLanding(sid+'-upper',landing.polygon,high.z,'floor',sid,landing.pieces);f.toLanding=upper.id;flights.push(f);segments.push({id:sid,from:low.floor,to:high.floor,z0:low.z,z1:high.z,rise,flights:[f.id],landings:[lower.id,upper.id],intermediateStops:[],risers:n});lower=upper;angle+=hand*landingAngle;
   minRiser=Math.min(minRiser,rh);maxRiser=Math.max(maxRiser,rh);const localPitch=rh*2*Math.PI/angleStep;pitch=pitch===null?localPitch:Math.min(pitch,localPitch);if(localPitch-spec.waistThickness<spec.minHeadroom-EPS)warn('spiral-pitch','Spiral revolution provides only '+(localPitch-spec.waistThickness).toFixed(2)+' m theoretical headroom');
  }
  warn('spiral-inner-tread','Spiral going is '+G.toFixed(2)+' m at the centre walking line; narrow inner treads and handrail/access geometry require review.','notice');
 }
 const availableLong=type==='spiral'?room.w:long,availableShort=type==='spiral'?room.h:short;
 if(availableLong<requiredLong-EPS)warn('footprint-length','Needs '+requiredLong.toFixed(2)+' m along the stair; '+availableLong.toFixed(2)+' m available');
 if(availableShort<requiredShort-EPS)warn('footprint-width','Needs '+requiredShort.toFixed(2)+' m across the stair; '+availableShort.toFixed(2)+' m available');
 let minimum=null,worst=null;const solids=[...surfaces.map(s=>({...s,underside:s.z-spec.waistThickness})),...arr(plan.stairObstructions).concat(arr(c.stairObstructions),arr(room.stairObstructions)).flatMap(o=>{if(!o||![o.x,o.y,o.w,o.h,o.z,o.thickness].every(Number.isFinite)||o.w<=0||o.h<=0||o.thickness<0){warn('invalid-obstruction','Invalid stair obstruction');return [];}return[{id:o.id||'obstruction',polygon:rect(o),z:o.z,underside:o.z-o.thickness,kind:'obstruction'}];})];
 for(const s of surfaces)for(const q of solids){if(s.id===q.id||q.z<=s.z+EPS)continue;if(type==='straight'&&s.parent===q.parent)continue;const hit=overlap(s.polygon,q.polygon);if(!hit)continue;const clearance=Math.max(0,q.underside-s.z);if(minimum===null||clearance<minimum){minimum=clearance;worst={walkId:s.id,obstructionId:q.id,point:[...hit[0],s.z],headroom:clearance};}}
 if(minimum!==null&&minimum<spec.minHeadroom-EPS)warn('headroom','Only '+minimum.toFixed(2)+' m headroom; needs '+spec.minHeadroom.toFixed(2)+' m');
 const shaft={x:room.x+p,y:room.y+p,w:room.w-2*p,h:room.h-2*p},openings=[];
 const addOpening=(id,z,connected)=>{openings.push({id:(c.id||room.id)+'-opening-'+id+'-'+round(z),floor:id,z,rect:shaft,polygon:rect(shaft),slabBottom:z-(plan.floorModule?.slab||.3),serviceBottom:z-(plan.floorModule?.slab||.3)-(plan.floorModule?.serviceClear||1.5),through:['floor slab','service zone','ceiling'],keepLandingIds:landings.filter(l=>Math.abs(l.z-z)<EPS).map(l=>l.id),required:true,passThrough:!connected});};
 for(const stop of stops.slice(1))addOpening(stop.floor,stop.z,true);
 for(const [id,f]of Object.entries(plan.floors)){if(stops.some(s=>s.floor===id)||f.z<=stops[0].z+EPS||f.z>=stops.at(-1).z-EPS)continue;addOpening(id,f.z,false);warn('skipped-floor',id+': required slab/service/ceiling opening, with no arrival.','notice');for(const r of f.rooms)if(r.id!==room.id&&r.type!=='void'&&overlap(rect(r),rect(shaft)))warn('shaft-blocked',id+': shaft overlaps '+r.name);}
 const access=[],f=plan.floors[floorId],connections=root.KERN_CONNECTIONS||(typeof require==='function'?require('./geometry.js'):null),helper=root.KERN_STAIR_DETAIL;
 for(const d of connections?.all(f)||[]){if(d.kind==='window'||d.sealed||d.cemented||d.a!==room.id&&d.b!==room.id)continue;const other=f.rooms.find(r=>r.id===(d.a===room.id?d.b:d.a)),g=helper?.doorGeometry(d,f),z=other?.z??f.z;if(!g){warn('door-detached','Detached access door '+d.id);continue;}
  const q=g.axis==='h'?{x:g.start,y:g.fixed-.35,w:g.end-g.start,h:.7}:{x:g.fixed-.35,y:g.start,w:.7,h:g.end-g.start};
  const landing=landings.find(l=>Math.abs(l.z-z)<.01&&l.pieces.some(poly=>overlap(rect(q),poly))),valid=!!landing;access.push({doorId:d.id,valid,z,geometry:g,otherRoom:other?.id,landingId:landing?.id,doorHeight:d.height??spec.doorHeight,swingClearanceVerified:false});if(!valid)warn('door-landing',d.id+': opening does not meet a landing at its room elevation');if((d.height??spec.doorHeight)<spec.minHeadroom)warn('door-headroom',d.id+': opening is below the headroom target');
 }
 if(!access.length)warn('no-door','No floor access doors are connected');
 const up=segments.find(s=>s.from===floorId),down=segments.find(s=>s.to===floorId),displayFlights=[];
 for(const [s,direction]of [[up,'up'],[down,'down']])if(s)for(const id of s.flights){const flight=flights.find(f=>f.id===id);displayFlights.push({...flight,direction,role:s.flights[0]===id?'departure':'continuation',label:(direction==='up'?'UP ':'DOWN ')+(direction==='up'?s.to:s.from),arrowPath:direction==='up'?flight.upPath:flight.downPath});}
 const ids=new Set(displayFlights.flatMap(f=>[f.fromLanding,f.toLanding]));
 return{schema:'kern-stair-detail-1',stairType:type,roomId:room.id,floorId,connectionId:c.id||room.id,name:room.name,footprint,runAxis:axis,landingEnd:end,spec,status:warnings.some(w=>w.severity==='error')?'error':'conditional',fit:!warnings.some(w=>['footprint-width','footprint-length','straight-destinations','spiral-radius','spiral-landing','alignment','headroom','spiral-pitch','zero-rise'].includes(w.code)),warnings,stops:stops.map(s=>({floor:s.floor,z:s.z})),flights,landings,segments,openings,access,displayFlights,displayLandings:landings.filter(l=>ids.has(l.id)),clearanceEnvelopes:surfaces.map(s=>({polygon:s.polygon,rect:bounds(s.polygon),z0:s.z,z1:s.z+spec.minHeadroom,source:s.id})),datumLabel:(stops.find(s=>s.floor===floorId)?.z??room.z??f.z).toFixed(2)+' m',metrics:{clearWidth:C,landingDepth:L,treadDepth:G,riserMin:minRiser,riserMax:maxRiser,requiredEnvelope:{long:requiredLong,short:requiredShort},availableEnvelope:{long:availableLong,short:availableShort},minimumHeadroom:minimum,requiredHeadroom:spec.minHeadroom,headroomWorst:worst,headroomConditional:true,walkingRadius,angleStep,pitch,waistThickness:spec.waistThickness},clearanceNote:'Calculated metric '+type+' geometry. Required shaft openings, door swings, handrails, structure and runtime traversal remain unverified.'};
}
function spiralMarkup(d){
 const poly=p=>p.map(q=>q.map(round).join(',')).join(' '),path=p=>p.map((q,i)=>(i?'L':'M')+q.map(round).join(' ')).join(' '),r=d.footprint;
 let badges='';let s='<g class="stair-detail" pointer-events="none"><title>'+esc(d.name+' · '+d.clearanceNote)+'</title>';
 if(d.preview){s+='<g opacity=".15">';for(const f of d.ghostFlights||[])for(const t of f.treads)s+='<polygon points="'+poly(t.polygon)+'" fill="#bdc6d2" stroke="#66736e" stroke-width=".025"/>';s+='</g>';}
 for(const l of d.displayLandings||[])s+='<polygon points="'+poly(l.polygon)+'" fill="#f2e9ca" stroke="#476777" stroke-width=".045"/>';
 for(const f of d.displayFlights||[]){const color=f.direction==='up'?'#216c7b':'#a2612c';for(const t of f.treads)s+='<polygon points="'+poly(t.polygon)+'" fill="'+(f.direction==='up'?'#dbeaed':'#eee1cf')+'" stroke="'+color+'" stroke-width=".025"/>';
  const points=f.arrowPath,cut=points[Math.min(points.length-1,Math.max(1,Math.floor(1.2/f.riserHeight)))];s+='<path d="'+path(points)+'" fill="none" stroke="'+color+'" stroke-width=".075" stroke-dasharray=".16 .08"/>';
  const a=points.at(-2),b=points.at(-1),len=Math.hypot(b[0]-a[0],b[1]-a[1]),ux=(b[0]-a[0])/len,uy=(b[1]-a[1])/len;s+='<path d="M'+(b[0]-ux*.25-uy*.13)+' '+(b[1]-uy*.25+ux*.13)+'L'+b.join(' ')+'L'+(b[0]-ux*.25+uy*.13)+' '+(b[1]-uy*.25-ux*.13)+'" fill="none" stroke="'+color+'" stroke-width=".075"/>';
  s+='<path class="stair-cut-line" d="M'+(cut[0]-.18)+' '+(cut[1]-.18)+'l.36 .36m-.36 0l.36 -.36" stroke="'+color+'" stroke-width=".06"/>';
  const q=points[Math.floor(points.length/3)],label=f.direction==='up'?'UP':'DOWN';badges+='<g aria-label="'+esc(f.label)+'"><rect x="'+(q[0]-.65)+'" y="'+(q[1]-.32)+'" width="1.3" height=".64" rx=".08" fill="#f7f7f2" stroke="'+color+'" stroke-width=".04"/><text x="'+q[0]+'" y="'+(q[1]+.09)+'" style="font-size:.26px;font-weight:700;letter-spacing:0" font-family="Arial,sans-serif" text-anchor="middle" fill="'+color+'">'+label+'</text></g>';

 }
 s+='<text x="'+(r.x+r.w/2)+'" y="'+(r.y+r.h/2+.08)+'" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" letter-spacing="normal" word-spacing="normal" font-size=".23" fill="#476777">'+esc(d.datumLabel)+'</text>';return s+badges+'</g>';
}
const api={build,spiralMarkup,overlap};root.KERN_STAIR_TYPES=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
