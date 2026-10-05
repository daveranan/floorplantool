/* Rigid plan/yaw rotation. Pure proposals; the caller owns history and storage.
 * Ownership is the same floor-qualified graph as move/copy. Never rotate local
 * route nodes, surface links, elevations, or cached geometry independently. */
(function(root){'use strict';
const get=(name,file)=>root[name]||(typeof require==='function'?require('./'+file+'.js'):null),T=get('KERN_SELECTION_TRANSFORM','selection-transform'),S=get('KERN_SHAPES','room-shapes'),P=get('KERN_PRIMITIVES','primitives');
const round=n=>Math.round(n*1e6)/1e6,norm=n=>round((n%360+360)%360),arr=v=>Array.isArray(v)?v:[],at=(o,path)=>path.reduce((v,k)=>v?.[k],o);
function clone(v,seen=new Map()){if(!v||typeof v!=='object')return v;if(seen.has(v))return seen.get(v);const o=Array.isArray(v)?[]:{};seen.set(v,o);for(const k of Object.keys(v))Object.defineProperty(o,k,{value:clone(v[k],seen),writable:true,enumerable:true,configurable:true});return o;}
function turn(p,c,d){const a=d*Math.PI/180,x=p[0]-c.x,y=p[1]-c.y;return[round(c.x+x*Math.cos(a)-y*Math.sin(a)),round(c.y+x*Math.sin(a)+y*Math.cos(a))];}
function legacyConnection(plan,ref,o){return !o.routeStair&&(arr(plan.verticalConnections).find(c=>c.room===ref.id&&arr(c.floors).includes(ref.floor)&&c.type==='stair')||arr(plan.splitLevelConnections).find(c=>c.room===ref.id&&(c.floor||c.level)===ref.floor&&!c.localSteps)||o.stairTransition&&!o.localSteps);}
function inspect(plan,refs,options={}){
 const a=T.analyze(plan,refs,{...options,operation:'rotate'});if(!a.ok)throw new T.SelectionError(a.reason,a.code,{analysis:a});
 const boundary=a.warnings.find(w=>w.code==='boundary-opening');if(boundary)throw new T.SelectionError('Select both rooms connected by '+boundary.ref.id+' before rotating, so its opening stays attached.','rotation-opening-boundary');
 const index=T.indexPlan(plan);let step=0;for(const ref of a.refs){const o=index.map.get(T.key(ref)).object;
  if(ref.kind==='rooms'&&legacyConnection(plan,ref,o))step=90;
  if(ref.kind==='rooms'&&o.localSteps&&!o.routeStair)step=90;
 }
 if(a.coupled.length)step=90;
 const b=T.bounds(plan,a.refs,{...options,includeCoupled:false});if(!b)throw Error('The selection has no measurable geometry.');
 return{analysis:a,bounds:b,pivot:{x:b.x+b.w/2,y:b.y+b.h/2},step,reason:step?'This group includes fixed-axis stairs or linked site geometry; rotation uses 90° steps.':'Plan rotation about the selection center · Shift: 5° steps'};
}
// Compose world yaw with the existing XYZ Euler basis. Adding Euler yaw alone
// is wrong for tilted objects. The stable extraction matches the 3D gizmo.
function yaw(o,d){if(!o.tiltX&&!o.tiltY){o.rotation=norm(o.rotation+d);return;}const basis=[[1,0,0],[0,1,0],[0,0,1]].map(v=>P.rotate(v,o)),a=-d*Math.PI/180,c=Math.cos(a),s=Math.sin(a),m=basis.map(([x,y,z])=>[c*x+s*z,y,-s*x+c*z]),cosY=Math.hypot(m[0][0],m[1][0]),sign=m[2][0]>=0?1:-1,z=cosY>1e-12?Math.atan2(-m[1][0],m[0][0]):0,sum=Math.atan2(m[1][2]+sign*m[0][1],m[1][1]-sign*m[0][2]),rawX=sum-sign*z;o.tiltX=Math.atan2(Math.sin(rawX),Math.cos(rawX))*180/Math.PI;o.rotation=-Math.atan2(m[2][0],cosY)*180/Math.PI;o.tiltY=z*180/Math.PI;}
function rotate(plan,refs,degrees,options={}){
 if(!Number.isFinite(degrees))throw Error('Enter a finite rotation angle.');const info=inspect(plan,refs,options),{analysis}=info,c=options.pivot||info.pivot;if(!Number.isFinite(c.x)||!Number.isFinite(c.y))throw Error('Invalid rotation pivot.');
 if(info.step&&Math.abs(degrees/90-Math.round(degrees/90))>1e-7)throw new T.SelectionError(info.reason,'rotation-axis-constraint');
 if(Math.abs(degrees%360)<1e-9)return{plan,selection:analysis.requested,analysis,changed:false,...info};
 const index=T.indexPlan(plan),next=clone(plan),moved=new WeakSet(),visited=new WeakSet(),quarter=((Math.round(degrees/90)%4)+4)%4;
 const xy=o=>{if(!o||moved.has(o))return;const array=Array.isArray(o),x=array?0:'x',y=array?1:'y';if(!Number.isFinite(o[x])||!Number.isFinite(o[y]))throw Error('A selected object contains invalid coordinates.');const p=turn([o[x],o[y]],c,degrees);o[x]=p[0];o[y]=p[1];moved.add(o);};
 const direction=value=>{const names=['north','east','south','west'],short=['n','e','s','w'];let i=names.indexOf(value);if(i>=0)return names[(i+quarter)%4];i=short.indexOf(value);return i>=0?short[(i+quarter)%4]:value;};
 function rect(o){if(moved.has(o))return;const ps=[[o.x,o.y],[o.x+o.w,o.y],[o.x+o.w,o.y+o.h],[o.x,o.y+o.h]].map(p=>turn(p,c,degrees)),b=S.bounds(ps);Object.assign(o,b);moved.add(o);}
 function directions(o){for(const k of ['landingEnd','side','facing','direction'])if(typeof o[k]==='string')o[k]=direction(o[k]);if(quarter%2&&['x','y'].includes(o.runAxis))o.runAxis=o.runAxis==='x'?'y':'x';}
 function geometry(o){if(!o||typeof o!=='object'||visited.has(o))return;visited.add(o);if(Array.isArray(o)){if(o.length>=2&&Number.isFinite(o[0])&&Number.isFinite(o[1]))xy(o);else o.forEach(geometry);return;}
  if(Number.isFinite(o.x)&&Number.isFinite(o.y)){if(o.shape){if(!S.rotate(o,degrees,c))throw Error('Linked geometry cannot rotate within the model limits.');moved.add(o);}else if(Number.isFinite(o.w)&&Number.isFinite(o.h))rect(o);else xy(o);}directions(o);
  if(['h','v'].includes(o.axis)&&Number.isFinite(o.fixed)){const axis=o.axis,vals=['lo','hi','start','end'].filter(k=>Number.isFinite(o[k])),points=Object.fromEntries(vals.map(k=>[k,turn(axis==='h'?[o[k],o.fixed]:[o.fixed,o[k]],c,degrees)]));o.axis=quarter%2?(axis==='h'?'v':'h'):axis;const q=Object.values(points)[0];if(q){o.fixed=q[o.axis==='h'?1:0];for(const k of vals)o[k]=points[k][o.axis==='h'?0:1];for(const [a,b]of [['lo','hi'],['start','end']])if(o[a]>o[b])[o[a],o[b]]=[o[b],o[a]];}}
  if(Number.isFinite(o.flightCenterX)&&Number.isFinite(o.flightCenterY)){[o.flightCenterX,o.flightCenterY]=turn([o.flightCenterX,o.flightCenterY],c,degrees);}
  for(const k of ['polygon','polygons','points','holes','geometry','footprintGeometry','courtyardHole','upPath','downPath','arrowPath','line','basePolygon','portPoints','branches','rect','footprint','fromFootprint','toFootprint','floorOpening','upperFloorOpening','stair','flights','landings','treads','openings','clearanceEnvelopes','pieces','stairObstructions','access','portalGeometry'])geometry(o[k]);
  for(const k of ['surfacePlane','bottomPlane','topPlane']){const plane=o[k];if(plane&&Number.isFinite(plane.a)&&Number.isFinite(plane.b)&&Number.isFinite(plane.c)){const normal=turn([plane.a,plane.b],{x:0,y:0},degrees),constant=plane.c+plane.a*c.x+plane.b*c.y-normal[0]*c.x-normal[1]*c.y;plane.a=normal[0];plane.b=normal[1];plane.c=constant;}}
  for(const k of ['u','n'])if(Array.isArray(o[k])&&o[k].length===2){o[k]=turn(o[k],{x:0,y:0},degrees);}
  for(const k of ['start','end','center'])if(o[k]&&typeof o[k]==='object'&&!o[k].kind)geometry(o[k]);if(o.footprints)Object.values(o.footprints).forEach(geometry);
 }
 const openings=[];
 for(const ref of analysis.refs)if(ref.kind==='doors'){
  const e=index.map.get(T.key(ref)),original=e.object,o=at(next,e.path),f=plan.floors[ref.floor],g=S.opening(original,f),wall=S.wall(original,f);if(!g||!wall)throw Error('Opening '+ref.id+' has no valid owning wall. Repair it before rotating.');
  if(!original.wrap)o.edge=wall.edge;
  const tangent=turn(wall.u,{x:0,y:0},degrees),newLine=S.line({a:turn(S.at(wall,wall.lo),c,degrees),b:turn(S.at(wall,wall.hi),c,degrees)});if(!original.wrap&&tangent[0]*newLine.u[0]+tangent[1]*newLine.u[1]<0){o.offset=1-(original.offset??.5);if(original.maximumWallOffset!==undefined)o.maximumWallOffset=1-original.maximumWallOffset;}
  if(info.step&&original.side)o.side=direction(original.side);
  openings.push({ref,original,o,g,wall});
 }
 function room(o,ref){if(moved.has(o))return;if(!o.routeStair&&(o.localSteps||legacyConnection(plan,ref,o))){const con=arr(plan.verticalConnections).find(v=>v.type==='stair'&&v.room===ref.id&&arr(v.floors).includes(ref.floor))||arr(plan.splitLevelConnections).find(v=>v.room===ref.id&&(v.floor||v.level)===ref.floor);o.runAxis=o.localSteps?(con?.runAxis||o.runAxis||'y'):(o.runAxis||con?.runAxis||(o.w>o.h?'x':'y'));o.landingEnd=o.localSteps?(con?.landingEnd||o.landingEnd||(o.runAxis==='x'?'west':'north')):(o.landingEnd||con?.landingEnd||(ref.id==='transferstair'?'north':o.runAxis==='x'?'west':'south'));const cross=turn(o.runAxis==='x'?[0,o.stairCrossFlip?-1:1]:[o.stairCrossFlip?-1:1,0],{x:0,y:0},degrees);rect(o);directions(o);if(o.walls?.edges)o.walls.edges=Object.fromEntries(Object.entries(o.walls.edges).map(([id,value])=>[/^v[0-3]$/.test(id)?'v'+((Number(id[1])+quarter)%4):id,value]));if(!o.localSteps)o.stairCrossFlip=(o.runAxis==='x'?cross[1]:cross[0])<0;}else{if(!S.rotate(o,degrees,c))throw Error('The rotated room '+(o.name||o.id)+' would exceed valid geometry limits. Nothing was changed.');moved.add(o);}geometry(o.stairObstructions);if(o.stairOriginal)room(o.stairOriginal,ref);}
 for(const ref of analysis.refs){const e=index.map.get(T.key(ref)),o=at(next,e.path);if(ref.kind==='doors'||moved.has(o))continue;
  if(ref.kind==='rooms')room(o,ref);
  else if(ref.kind==='primitives'){const p=turn([o.x+o.w/2,o.y+o.h/2],c,degrees);o.x=round(p[0]-o.w/2);o.y=round(p[1]-o.h/2);yaw(o,degrees);P.validate(o);moved.add(o);}
  else if(o.points){o.points.forEach(xy);moved.add(o);}
  else if(ref.kind==='annotations'){const size=o.fontSize??(e.zone?.45:.35),p=turn([o.x,o.y-size*.35],c,degrees);o.x=p[0];o.y=round(p[1]+size*.35);o.rotation=norm((o.rotation||0)+degrees);moved.add(o);}
  else {if(ref.kind==='symbols'&&!o.rotationSpace){if((o.rotation||0)%180){const cx=o.x+o.w/2,cy=o.y+o.h/2,w=o.w;o.w=o.h;o.h=w;o.x=cx-o.w/2;o.y=cy-o.h/2;}o.rotationSpace='intrinsic';}const p=turn([o.x+o.w/2,o.y+o.h/2],c,degrees);o.x=round(p[0]-o.w/2);o.y=round(p[1]-o.h/2);o.rotation=norm((o.rotation||0)+degrees);moved.add(o);}
 }
 for(const cache of analysis.coupled)geometry(at(next,cache.path));
 for(const {ref,original,o,g}of openings){const f=next.floors[ref.floor];if(original.wrap){const oldOwner=plan.floors[ref.floor].rooms.find(r=>r.id===original.a),owner=f.rooms.find(r=>r.id===original.a),center=S.pathPoint(oldOwner,(original.offset??.5)*S.perimeter(oldOwner).length),p=turn(center,c,degrees),position=S.pathPosition(owner,{x:p[0],y:p[1]});if(!position||position.distance>1e-5)throw Error('Rotation would detach window '+ref.id+'. Nothing was changed.');o.offset=position.offset;}if(!original.wrap){const owner=f.rooms.find(r=>r.id===original.a);if(owner&&!owner.routeStair&&(owner.localSteps||legacyConnection(next,{...ref,id:owner.id},owner))&&/^v[0-3]$/.test(o.edge))o.edge='v'+((Number(o.edge[1])+quarter)%4);const wall=S.wall({...original,...o,a:original.a,b:original.b},f);if(!wall)throw Error('Rotation would detach opening '+ref.id+'. Nothing was changed.');const a=turn(g.p0,c,degrees),b=turn(g.p1,c,degrees),center=[(a[0]+b[0])/2,(a[1]+b[1])/2],along=center[0]*wall.u[0]+center[1]*wall.u[1],span=wall.hi-wall.lo-original.width-.2;o.offset=span>1e-8?Math.max(0,Math.min(1,(along-original.width/2-wall.lo-.1)/span)):.5;}
  const result=S.opening({...original,...o,a:original.a,b:original.b},f);if(!result)throw Error('Rotation would detach opening '+ref.id+'. Nothing was changed.');
 }
 if(options.validate)options.validate(next,analysis);return{plan:next,selection:analysis.requested.map(r=>({...r})),analysis,changed:true,...info};
}
const api={inspect,rotate,turn,yaw};root.KERN_SELECTION_ROTATION=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
