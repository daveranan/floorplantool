/* Floor-qualified object selection and pure XY proposals.
 * IDs are local to (floor, kind). Ownership expands only explicit model links,
 * never whole floors or adjacent rooms. Relative/local shape and stair data,
 * elevations, widths, offsets, floor assignments and unrelated metadata stay intact.
 * analyze() exposes every added object/cache. Callers commit proposal.plan once,
 * after renderer/import validation, so preview, cancellation and undo stay atomic.
 */
(function(root){
'use strict';
const kinds=['rooms','doors','symbols','services','annotations','primitives'],arr=v=>Array.isArray(v)?v:[],finite=Number.isFinite;
class SelectionError extends Error{constructor(message,code='invalid-selection',extra={}){super(message);this.name='SelectionTransformError';this.code=code;Object.assign(this,extra);}}
const key=r=>JSON.stringify([r.floor,r.kind,r.id]),ref=(floor,kind,id)=>({floor,kind,id}),roomRef=(floor,id)=>ref(floor,'rooms',id);
function clone(value,seen=new Map()){if(!value||typeof value!=='object')return value;if(seen.has(value))return seen.get(value);const out=Array.isArray(value)?[]:{};seen.set(value,out);for(const k of Object.keys(value))Object.defineProperty(out,k,{value:clone(value[k],seen),writable:true,enumerable:true,configurable:true});return out;}
function at(value,path){return path.reduce((o,k)=>o?.[k],value);}
function sourceFor(plan,fid,r){
 if(r.linkedSource)return r.linkedSource;
 if(r.courtyardVoid||r.type==='void'&&r.id==='sky'){const floor=plan.courtyard?.floor||'L0',source=arr(plan.floors[floor]?.rooms).find(q=>q.type==='courtyard');if(source)return{floor,room:source.id};}
 if((r.type==='void'&&r.id==='void'&&fid==='L1'||r.id==='opsroof'&&r.independentCap!==true)&&arr(plan.floors.L0?.rooms).some(q=>q.id==='control'))return{floor:'L0',room:'control'};
 return null;
}
function indexPlan(plan){
 if(!plan?.floors||typeof plan.floors!=='object'||Array.isArray(plan.floors))throw new SelectionError('The plan has no valid floors.','invalid-plan');
 const map=new Map(),entries=[];
 function put(fid,kind,id,object,path,extra={}){const r=ref(fid,kind,id),k=key(r);if(typeof id!=='string'||!id)return;if(map.has(k))throw new SelectionError('Duplicate '+kind+' ID '+id+' on '+fid+'.','duplicate-id',{ref:r});const e={ref:r,object,path,...extra};map.set(k,e);entries.push(e);}
 for(const [fid,f]of Object.entries(plan.floors)){
  for(const kind of kinds)for(const [i,o]of arr(f[kind]).entries())if(o)put(fid,kind,o.id||(kind==='annotations'?'annotation-'+fid+'-'+i:null),o,['floors',fid,kind,i],{synthetic:kind==='annotations'&&!o.id});
  for(const [i,r]of arr(f.rooms).entries())for(const [j,z]of arr(r.zones).entries())put(fid,'annotations','zone-'+fid+'-'+r.id+'-'+j,z,['floors',fid,'rooms',i,'zones',j],{synthetic:true,zone:true,owner:roomRef(fid,r.id)});
  const externals=f.externals||[f.external].filter(Boolean);
  for(const [i,e]of arr(externals).entries())put(fid,'doors','legacy-exterior-'+i+'-'+e.room,{...e,a:e.room,b:'outside',offset:e.offset??.5,kind:e.kind||'door'},f.externals?['floors',fid,'externals',i]:['floors',fid,'external'],{synthetic:true,legacy:true,owner:roomRef(fid,e.room)});
 }
 return{map,entries};
}
function normalizeRefs(refs){
 if(!Array.isArray(refs))throw new SelectionError('Use floor-qualified object references.','invalid-refs');
 const seen=new Set(),out=[];for(const r of refs){if(!r||typeof r.floor!=='string'||!r.floor||!kinds.includes(r.kind)||typeof r.id!=='string'||!r.id)throw new SelectionError('Every object needs a floor, kind and ID.','invalid-ref');const k=key(r);if(!seen.has(k)){seen.add(k);out.push(ref(r.floor,r.kind,r.id));}}return out;
}
function resolve(plan,r){const normalized=normalizeRefs([r])[0];return indexPlan(plan).map.get(key(normalized))||null;}
function analyze(plan,refs,options={}){
 let index,requested;try{index=indexPlan(plan);requested=normalizeRefs(refs);}catch(e){return{ok:false,code:e.code,reason:e.message,requested:[],refs:[],added:[],coupled:[],warnings:[],blocked:[{code:e.code,reason:e.message}],floorIds:[]};}
 const chosen=new Map(),added=[],coupled=[],affected=[],warnings=[],blocked=[],issues=new Set(),cacheKeys=new Set(),explicit=new Set(requested.map(key));
 const issue=(list,code,reason,extra={})=>{const id=code+':'+JSON.stringify(extra);if(issues.has(id))return;issues.add(id);list.push({code,reason,...extra});};
 const add=(r,reason='Selected object',via=null)=>{const k=key(r);if(chosen.has(k))return false;const e=index.map.get(k);if(!e){issue(blocked,'missing-object','The '+r.kind+' object '+r.id+' on '+r.floor+' no longer exists.',{ref:r,via});return false;}chosen.set(k,e);if(!explicit.has(k))added.push({ref:e.ref,reason,via});return true;};
 const has=r=>chosen.has(key(r)),selectedRoom=(fid,id)=>has(roomRef(fid,id));
 const couple=(path,role,owners,extra={})=>{const k=JSON.stringify(path);if(cacheKeys.has(k))return;cacheKeys.add(k);coupled.push({path,role,owners:owners.map(r=>({...r})),...extra});};
 if(!requested.length)issue(blocked,'empty-selection','Select at least one object.');
 for(const r of requested)add(r);
 // Build only real ownership components. A stair endpoint, cutoutFor or floor
 // elevation reference is not an ownership link to its surrounding room/floor.
 const groups=[],group=(rs,reason)=>{if(rs.length)groups.push({refs:rs,reason});};
 const labels=new Map(),identities=new Map();
 for(const e of index.entries){
  if(e.ref.kind==='rooms'){
   const s=sourceFor(plan,e.ref.floor,e.object);if(s)group([e.ref,roomRef(s.floor,s.room)],'Source and derived footprint move together');
   for(const k of ['editGroup','stairStackId'])if(e.object[k]){const name=k+':'+e.object[k];if(!labels.has(name))labels.set(name,[]);labels.get(name).push(e.ref);}
  }
  if(!e.synthetic){if(!identities.has(e.object))identities.set(e.object,[]);identities.get(e.object).push(e.ref);}
  if(e.ref.kind==='services'&&e.object.routeId)group([e.ref,ref(e.ref.floor,'services',e.object.routeId)],'Service route and attached terminal move together');
 }
 for(const rs of labels.values())group(rs,'Linked stack footprints move together');
 for(const rs of identities.values())if(rs.length>1)group(rs,'Shared object identity moves together');
 const vertical=arr(plan.verticalConnections).map((c,i)=>({c,i,refs:[...new Set([...arr(c.floors),...Object.keys(c.footprints||{})])].map(fid=>roomRef(fid,c.room))}));
 for(const v of vertical)group(v.refs,'Connected '+(v.c.type||'vertical')+' footprints move together');
 let grew=true;while(grew){grew=false;for(const g of groups)if(g.refs.some(has))for(const r of g.refs)if(add(r,g.reason,g.refs.find(has)))grew=true;
  for(const e of index.entries){const owner=e.owner||(e.ref.kind==='annotations'&&e.object.sourceRoom?roomRef(e.ref.floor,e.object.sourceRoom):null);if(owner&&e.ref.kind==='annotations'&&has(owner)&&add(e.ref,'Annotation belongs to a selected room',owner))grew=true;}
 }
 for(const e of index.entries.filter(e=>e.ref.kind==='doors')){
  const owners=[roomRef(e.ref.floor,e.object.a),...(e.object.b==='outside'?[]:[roomRef(e.ref.floor,e.object.b)])],moving=owners.filter(has);
  if(options.operation==='remove'){if(moving.length)add(e.ref,'Opening is attached to a removed room',moving[0]);continue;}
  if(moving.length===owners.length){add(e.ref,'Opening follows its selected owning wall',owners[0]);}
  else if(explicit.has(key(e.ref)))issue(blocked,'door-owner-required','Select '+owners.filter(r=>!has(r)).map(r=>r.id+' on '+r.floor).join(' and ')+' with this opening; an opening cannot translate independently of its wall.',{ref:e.ref,required:owners.filter(r=>!has(r))});
  else if(moving.length){issue(warnings,'boundary-opening','An opening to an unselected room may need reconnecting after this move.',{ref:e.ref,owners});if(options.operation!=='copy')affected.push({ref:e.ref,reason:'An owning wall moves while the other room stays fixed'});}
 }
 for(const v of vertical)if(v.refs.some(has))couple(['verticalConnections',v.i],'vertical-connection',v.refs,{id:v.c.id});
 for(const [i,c]of arr(plan.splitLevelConnections).entries()){const owner=roomRef(c.floor||c.level,c.room);if(has(owner))couple(['splitLevelConnections',i],'split-level-connection',[owner],{id:c.id});}
 const ownerOf=(o,fallback)=>{const s=o?.source||o?.linkedSource||fallback;return s?.floor&&s?.room?roomRef(s.floor,s.room):o?.room&&(o.floor||o.level)?roomRef(o.floor||o.level,o.room):null;};
 const courtFloor=plan.courtyard?.floor||'L0',court=arr(plan.floors[courtFloor]?.rooms).find(r=>r.type==='courtyard'),courtOwner=ownerOf(plan.courtyard,court&&{floor:courtFloor,room:court.id});
 if(plan.courtyard&&courtOwner&&has(courtOwner)){couple(['courtyard'],'courtyard',[courtOwner],{singleton:true});if(plan.envelope?.courtyardHole)couple(['envelope','courtyardHole'],'courtyard-hole',[courtOwner],{singleton:true});}
 const sectionOwner=ownerOf(plan.operationsSection,{floor:'L0',room:'control'});
 if(plan.operationsSection&&sectionOwner&&has(sectionOwner))couple(['operationsSection'],'operations-section',[sectionOwner],{singleton:true});
 for(const kind of ['approaches','overlooks'])for(const [i,o]of arr(plan[kind]).entries()){const owner=ownerOf(o);if(owner&&has(owner))couple([kind,i],kind==='approaches'?'approach':'overlook',[owner],{id:o.id});}
 // Reference boundaries are reviewable, but never silently expand to a building.
 const endpointWarning=(owner,end,label)=>{if(end?.kind!=='room')return;const target=roomRef(end.floor,end.room);if(has(owner)!==has(target))issue(warnings,'stair-endpoint-boundary','A '+label+' endpoint references an unselected surface; its height link is retained and its contact may need review.',{ref:owner,target});};
 for(const e of index.entries.filter(e=>e.ref.kind==='rooms'&&e.object.routeStair))for(const k of ['start','end'])endpointWarning(e.ref,e.object.routeStair[k],'route stair');
 for(const c of arr(plan.splitLevelConnections))for(const k of ['start','end'])endpointWarning(roomRef(c.floor||c.level,c.room),c[k],'local stair');
 if(options.operation!=='copy'){
  const affect=(r,reason)=>{if(!has(r)&&index.map.has(key(r))&&!affected.some(a=>key(a.ref)===key(r)))affected.push({ref:r,reason});};
  for(const e of index.entries.filter(e=>e.ref.kind==='rooms')){const r=e.object;if([r.routeStair?.start,r.routeStair?.end].some(v=>v?.kind==='room'&&selectedRoom(v.floor,v.room))||options.operation==='remove'&&(arr(r.cutoutFor).some(id=>selectedRoom(e.ref.floor,id))||r.routeStair?.hostRoom&&selectedRoom(e.ref.floor,r.routeStair.hostRoom)))affect(e.ref,options.operation==='remove'?'References to removed rooms will be detached':'A linked stair surface moves while this stair stays fixed');}
  for(const c of arr(plan.splitLevelConnections))if([c.start,c.end].some(v=>v?.kind==='room'&&selectedRoom(v.floor,v.room))||options.operation==='remove'&&arr(c.route).some(id=>selectedRoom(c.floor||c.level,id)))affect(roomRef(c.floor||c.level,c.room),options.operation==='remove'?'References to removed rooms will be detached':'A linked stair surface moves while this stair stays fixed');
 }
 for(const e of [...chosen.values(),...affected.map(a=>index.map.get(key(a.ref)))]){
  const meta={explicit:explicit.has(key(e.ref)),generated:!explicit.has(key(e.ref)),reason:added.find(a=>key(a.ref)===key(e.ref))?.reason||affected.find(a=>key(a.ref)===key(e.ref))?.reason||'Selected object',affectedOnly:!has(e.ref),synthetic:!!e.synthetic};
  if(options.respectModelLocks&&(e.object.locked||e.object.hidden))issue(blocked,e.object.hidden?'hidden-object':'locked-object','The selection includes a '+(e.object.hidden?'hidden':'locked')+' object.',{ref:e.ref});
  if(options.guard){const result=options.guard(e.ref,e.object,meta);if(result===false||typeof result==='string'||result?.ok===false)issue(blocked,'guard-rejected',typeof result==='string'?result:result?.reason||'This object is hidden or locked.',{ref:e.ref});}
 }
 if(options.guardCoupled)for(const c of coupled){const result=options.guardCoupled(c,at(plan,c.path));if(result===false||typeof result==='string'||result?.ok===false)issue(blocked,'guard-rejected',typeof result==='string'?result:result?.reason||'Coupled geometry is hidden or locked.',{path:c.path});}
 if(options.operation==='copy')for(const c of coupled)if(c.singleton)issue(blocked,'singleton-copy','This selection owns '+c.role+' site geometry. Copying it would overwrite a shared site object; choose an independent subset.',{path:c.path});
 return{ok:!blocked.length,code:blocked[0]?.code,reason:blocked[0]?.reason,requested,refs:[...chosen.values()].map(e=>e.ref),added,coupled,affected,warnings,blocked,floorIds:[...new Set([...chosen.values()].map(e=>e.ref.floor))]};
}
function requireAnalysis(plan,refs,options){const a=analyze(plan,refs,options);if(!a.ok)throw new SelectionError(a.reason,a.code,{analysis:a});return a;}
function shifter(dx,dy,options={}){
 if(!finite(dx)||!finite(dy))throw new SelectionError('Use finite X and Y movement.','invalid-translation');
 const moved=new WeakSet(),visited=new WeakSet();
 const add=(v,d,path)=>{if(!finite(v))throw new SelectionError('Invalid XY coordinate at '+path+'.','invalid-coordinate');const n=options.round===false?v+d:Math.round((v+d)*1e6)/1e6;if(!finite(n))throw new SelectionError('Movement exceeds finite coordinates.','coordinate-limit');return Object.is(n,-0)?0:n;};
 function xy(o,path){if(!o||typeof o!=='object'||moved.has(o))return;const isArray=Array.isArray(o);if(!isArray&&o.x===undefined&&o.y===undefined)return;const x=isArray?0:'x',y=isArray?1:'y';o[x]=add(o[x],dx,path+'.x');o[y]=add(o[y],dy,path+'.y');moved.add(o);}
 function points(ps,path){if(!Array.isArray(ps))return;for(const [i,p]of ps.entries()){if(Array.isArray(p)&&Array.isArray(p[0]))points(p,path+'['+i+']');else if(p&&typeof p==='object')xy(p,path+'['+i+']');}}
 function geometry(g,path){
  if(!g||typeof g!=='object'||visited.has(g))return;visited.add(g);if(Array.isArray(g)){points(g,path);return;}
  xy(g,path);if(['h','v'].includes(g.axis))for(const k of ['fixed','lo','hi','start','end'])if(finite(g[k]))g[k]=add(g[k],k==='fixed'?(g.axis==='h'?dy:dx):(g.axis==='h'?dx:dy),path+'.'+k);
  for(const k of ['polygon','polygons','points','holes','geometry','footprintGeometry','courtyardHole','upPath','downPath','arrowPath','line','basePolygon','portPoints','branches'])points(g[k],path+'.'+k);
  for(const k of ['start','end','center'])if(g[k]&&typeof g[k]==='object'&&!g[k].kind&&(Array.isArray(g[k])||finite(g[k].x)&&finite(g[k].y)))xy(g[k],path+'.'+k);
  for(const k of ['rect','footprint','fromFootprint','toFootprint','floorOpening','upperFloorOpening','stair'])geometry(g[k],path+'.'+k);
  if(g.footprints)for(const [fid,b]of Object.entries(g.footprints))geometry(b,path+'.footprints.'+fid);
  for(const k of ['flights','landings','treads','openings','clearanceEnvelopes'])for(const [i,p]of arr(g[k]).entries())geometry(p,path+'.'+k+'['+i+']');
  for(const [k,d]of [['flightCenterX',dx],['flightCenterY',dy]])if(finite(g[k]))g[k]=add(g[k],d,path+'.'+k);
 }
 function room(r,path,seen=new WeakSet()){if(!r||seen.has(r))return;seen.add(r);xy(r,path);for(const [i,z]of arr(r.zones).entries())xy(z,path+'.zones['+i+']');if(r.stairOriginal)room(r.stairOriginal,path+'.stairOriginal',seen);}
 function object(e,o){if(e.ref.kind==='rooms')room(o,e.path.join('.'));else if(e.ref.kind!=='doors'){if(o.points)points(o.points,e.path.join('.')+'.points');else xy(o,e.path.join('.'));}}
 return{object,geometry};
}
function translate(plan,refs,dx,dy,options={}){
 const shift=shifter(dx,dy,options),analysis=requireAnalysis(plan,refs,{...options,operation:'translate'}),index=indexPlan(plan),next=clone(plan);
 if(dx!==0||dy!==0){for(const r of analysis.refs){const e=index.map.get(key(r));shift.object(e,at(next,e.path));}for(const c of analysis.coupled)shift.geometry(at(next,c.path),c.path.join('.'));}
 if(options.validate)options.validate(next,analysis);
 return{plan:next,selection:analysis.requested.map(r=>({...r})),analysis,changed:dx!==0||dy!==0};
}
function copy(targetPlan,refs,dx=1,dy=1,options={}){
 const plan=options.sourcePlan||targetPlan;
 const shift=shifter(dx,dy,options),analysis=requireAnalysis(plan,refs,{...options,operation:'copy'}),index=indexPlan(plan),next=clone(targetPlan),selected=new Set(analysis.refs.map(key)),entries=analysis.refs.map(r=>index.map.get(key(r))),idMap=new Map(),groupMap=new Map(),connectionMap=new Map(),used=new Set(),copies=new Map(),notes=[];
 const destinationFloors=new Set(analysis.floorIds);
 for(const e of entries)if(e.ref.kind==='rooms'&&e.object.routeStair)for(const v of [e.object.routeStair.start,e.object.routeStair.end])if(v?.kind==='floor')destinationFloors.add(v.floor);
 for(const c of analysis.coupled){const o=at(plan,c.path);if(c.role==='vertical-connection')for(const fid of arr(o.passedFloors))destinationFloors.add(fid);if(c.role==='split-level-connection')for(const v of [o.start,o.end])if(v?.kind==='floor')destinationFloors.add(v.floor);}
 for(const fid of destinationFloors)if(!targetPlan.floors?.[fid])throw new SelectionError('The destination has no '+fid+' floor.','missing-destination-floor',{floor:fid});
 for(const e of [...index.entries,...indexPlan(targetPlan).entries])used.add(e.ref.id);for(const kind of ['verticalConnections','splitLevelConnections'])for(const c of [...arr(plan[kind]),...arr(targetPlan[kind])])if(c.id)used.add(c.id);for(const e of [...index.entries,...indexPlan(targetPlan).entries])for(const k of ['editGroup','stairStackId'])if(e.object[k])used.add(e.object[k]);
 let serial=1;const fresh=id=>{let result;do{const suffix='-'+serial++;result='copy-'+String(id||'object').slice(0,140-suffix.length)+suffix;}while(used.has(result));used.add(result);return result;};
 const getId=(fid,kind,id)=>idMap.get(key(ref(fid,kind,id))),mapRoom=(fid,id)=>getId(fid,'rooms',id),mapGroup=id=>{if(!groupMap.has(id))groupMap.set(id,fresh(id));return groupMap.get(id);};
 // Vertical connections store one room ID for all floors; preserve that identity
 // while keeping ordinary duplicate IDs on different floors independent.
 const components=entries.map(e=>[key(e.ref)]),componentFor=k=>components.find(c=>c.includes(k)),unite=keys=>{const groups=[...new Set(keys.map(componentFor).filter(Boolean))];if(groups.length<2)return;const merged=groups.flat();for(const g of groups)components.splice(components.indexOf(g),1);components.push(merged);};
 for(const c of arr(plan.verticalConnections)){const keys=[...new Set([...arr(c.floors),...Object.keys(c.footprints||{})])].map(fid=>key(roomRef(fid,c.room)));if(keys.some(k=>selected.has(k)))unite(keys);}
 const identities=new Map();for(const e of entries.filter(e=>!e.synthetic)){if(!identities.has(e.object))identities.set(e.object,[]);identities.get(e.object).push(key(e.ref));}for(const rs of identities.values())unite(rs);
 for(const component of components){const e=index.map.get(component[0]),id=fresh(e.ref.id);for(const k of component)idMap.set(k,id);}
 for(const c of analysis.coupled)if(['vertical-connection','split-level-connection'].includes(c.role)){const source=at(plan,c.path);connectionMap.set(JSON.stringify(c.path),source.id?mapGroup(source.id):fresh(c.role));}
 for(const e of entries.filter(e=>e.zone&&selected.has(key(e.owner)))){const i=e.path.at(-1),id='zone-'+e.ref.floor+'-'+mapRoom(e.owner.floor,e.owner.id)+'-'+i;idMap.set(key(e.ref),id);}
 const copyGraph=new Map();for(const e of entries)copies.set(key(e.ref),clone(e.legacy?{...e.object}:at(plan,e.path),copyGraph));
 function surface(refValue){if(!refValue||refValue.kind!=='room')return refValue;const id=mapRoom(refValue.floor,refValue.room);return id?{...refValue,room:id}:null;}
 function surfaceZ(refValue,fallback){if(!refValue)return fallback;if(refValue.kind==='site')return refValue.offset||0;const f=plan.floors[refValue.floor];if(!f)return fallback;const r=refValue.kind==='room'?arr(f.rooms).find(r=>r.id===refValue.room):null;return(refValue.kind==='floor'?f.z:r?(r.z??f.z):fallback)+(refValue.offset||0);}
 function remapSource(o){for(const k of ['linkedSource','source'])if(o[k]?.floor&&o[k]?.room){const id=mapRoom(o[k].floor,o[k].room);if(id)o[k].room=id;}}
 function remapRoom(o,e){
  const fid=e.ref.floor,id=getId(fid,'rooms',e.ref.id);o.id=id;remapSource(o);
  const from=plan.floors[fid],to=targetPlan.floors[fid];for(const item of [o,o.stairOriginal].filter(Boolean)){if(!finite(item.z)&&finite(from.z)&&from.z!==to.z)item.z=from.z;if(!finite(item.height)&&(from.clearHeight??3)!==(to.clearHeight??3))item.height=from.clearHeight??3;}
  // Materialize old implicit source links; fresh IDs no longer trigger legacy rules.
  const source=sourceFor(plan,fid,e.object);if(source)o.linkedSource={...source,room:mapRoom(source.floor,source.room)};
  for(const k of ['editGroup','stairStackId'])if(o[k])o[k]=mapGroup(o[k]);
  if(o.stairOriginal){if(o.stairOriginal.id===e.ref.id)o.stairOriginal.id=id;remapSource(o.stairOriginal);}
  if(o.cutoutFor)o.cutoutFor=o.cutoutFor.map(rid=>mapRoom(fid,rid)).filter(Boolean);
  if(o.routeStair){const q=o.routeStair,original=e.object.routeStair;
   if(q.hostRoom){const host=mapRoom(fid,q.hostRoom);if(host)q.hostRoom=host;else delete q.hostRoom;}
   for(const k of ['start','end']){if(original[k]?.kind==='room'){const target=surface(original[k]);if(target)q[k]=target;else{q[k+'Z']=surfaceZ(original[k],original[k+'Z']);delete q[k];notes.push({code:'copied-endpoint-detached',ref:e.ref,endpoint:k,reason:'Uncopied room endpoint detached at its existing height'});}}else if(original[k]?.kind==='floor'&&plan.floors[original[k].floor]?.z!==targetPlan.floors[original[k].floor]?.z){q[k+'Z']=surfaceZ(original[k],original[k+'Z']);delete q[k];notes.push({code:'copied-datum-detached',ref:e.ref,endpoint:k,reason:'Destination floor has a different elevation; endpoint retained at its copied height'});}}
  }
 }
 const handled=new WeakSet();
 for(const e of entries){const o=copies.get(key(e.ref));if(handled.has(o))continue;handled.add(o);if(e.zone&&selected.has(key(e.owner)))continue;
  o.id=getId(e.ref.floor,e.ref.kind,e.ref.id);
  if(e.ref.kind==='rooms')remapRoom(o,e);
  else if(e.ref.kind==='doors'){o.a=mapRoom(e.ref.floor,e.object.a);o.b=e.object.b==='outside'?'outside':mapRoom(e.ref.floor,e.object.b);if(e.legacy)delete o.room;}
  else{if(e.zone){o.text=String(e.object.name||'');o.fontSize=.45;delete o.name;}if(o.sourceRoom){const owner=mapRoom(e.ref.floor,o.sourceRoom);if(owner)o.sourceRoom=owner;else delete o.sourceRoom;}if(o.routeId)o.routeId=getId(e.ref.floor,'services',o.routeId);}
  if(dx!==0||dy!==0)shift.object(e,o);
 }
 for(const e of entries){if(e.zone&&selected.has(key(e.owner)))continue;const f=next.floors[e.ref.floor];f[e.ref.kind]??=[];const o=copies.get(key(e.ref));if(!f[e.ref.kind].includes(o))f[e.ref.kind].push(o);}
 for(const [fid,f]of Object.entries(plan.floors))for(const rid of arr(f.entrances)){const id=mapRoom(fid,rid);if(id){next.floors[fid].entrances??=[];if(!next.floors[fid].entrances.includes(id))next.floors[fid].entrances.push(id);}}
 for(const c of analysis.coupled){const o=clone(at(plan,c.path),copyGraph);remapSource(o);
  if(c.role==='vertical-connection'){o.id=connectionMap.get(JSON.stringify(c.path));o.room=mapRoom(c.owners[0].floor,o.room);}
  else if(c.role==='split-level-connection'){o.id=connectionMap.get(JSON.stringify(c.path));const fid=o.floor||o.level;o.room=mapRoom(fid,o.room);if(o.route){const mapped=o.route.map(id=>mapRoom(fid,id));if(mapped.every(Boolean))o.route=mapped;else{delete o.route;notes.push({code:'copied-route-detached',id:o.id,reason:'Route to uncopied rooms omitted'});}}
   for(const [end,zKey]of [['start','lowerZ'],['end','upperZ']]){const original=at(plan,c.path)[end];if(original?.kind==='room'){const target=surface(original);if(target)o[end]=target;else{o[zKey]=surfaceZ(original,o[zKey]);delete o[end];notes.push({code:'copied-endpoint-detached',id:o.id,endpoint:end,reason:'Uncopied room endpoint detached at its existing height'});}}else if(original?.kind==='floor'&&plan.floors[original.floor]?.z!==targetPlan.floors[original.floor]?.z){o[zKey]=surfaceZ(original,o[zKey]);delete o[end];notes.push({code:'copied-datum-detached',id:o.id,endpoint:end,reason:'Destination floor has a different elevation; endpoint retained at its copied height'});}}
  }else if(o.id)o.id=fresh(o.id);
  if(o.room&&!['vertical-connection','split-level-connection'].includes(c.role)){const owner=c.owners[0];o.room=mapRoom(owner.floor,owner.id);}
  if(dx!==0||dy!==0)shift.geometry(o,c.path.join('.'));next[c.path[0]]??=[];next[c.path[0]].push(o);
 }
 if(options.validate)options.validate(next,analysis);
 const mapping=analysis.refs.map(r=>({from:{...r},to:ref(r.floor,r.kind,idMap.get(key(r)))}));
 return{plan:next,selection:analysis.requested.map(r=>ref(r.floor,r.kind,idMap.get(key(r)))),analysis,idMap:mapping,notes,changed:true};
}

function paste(targetPlan,sourcePlan,refs,dx=1,dy=1,options={}){return copy(targetPlan,refs,dx,dy,{...options,sourcePlan});}
function elevation(plan,v,fallback){if(!v)return fallback;if(v.kind==='site')return v.offset||0;const f=plan.floors[v.floor],r=v.kind==='room'?arr(f?.rooms).find(r=>r.id===v.room):null;return(f?(v.kind==='floor'?f.z:r?(r.z??f.z):fallback):fallback)+(v.offset||0);}
function remove(plan,refs,options={}){
 const analysis=requireAnalysis(plan,refs,{...options,operation:'remove'}),index=indexPlan(plan),next=clone(plan),removed=new Set(analysis.refs.map(key)),notes=[];
 const has=(fid,kind,id)=>removed.has(key(ref(fid,kind,id))),goneRoom=(fid,id)=>has(fid,'rooms',id),paths=new Set(analysis.coupled.map(c=>JSON.stringify(c.path)));
 for(const [fid,f]of Object.entries(next.floors)){
  // Filter against original indices, before removing rooms or synthetic entries.
  if(f.annotations)f.annotations=f.annotations.filter((o,i)=>!has(fid,'annotations',o.id||'annotation-'+fid+'-'+i));
  for(const r of arr(f.rooms))if(r.zones)r.zones=r.zones.filter((z,i)=>!has(fid,'annotations','zone-'+fid+'-'+r.id+'-'+i));
  for(const kind of ['rooms','doors','symbols','services','primitives'])if(f[kind])f[kind]=f[kind].filter(o=>!has(fid,kind,o.id));
  if(f.externals)f.externals=f.externals.filter((o,i)=>!has(fid,'doors','legacy-exterior-'+i+'-'+o.room));
  else if(f.external&&has(fid,'doors','legacy-exterior-0-'+f.external.room))delete f.external;
  if(f.entrances)f.entrances=f.entrances.filter(id=>!goneRoom(fid,id));
 }
 for(const kind of ['verticalConnections','splitLevelConnections','approaches','overlooks'])if(next[kind])next[kind]=next[kind].filter((o,i)=>!paths.has(JSON.stringify([kind,i])));
 for(const c of analysis.coupled)if(c.singleton){const parent=at(next,c.path.slice(0,-1));if(parent)delete parent[c.path.at(-1)];}
 // Unselected stairs stay in place and retain their heights when a room that
 // supplied an elevation is deleted. Floor and site datum refs remain valid.
 function detach(o,original,startKey,endKey){for(const [field,zKey]of [['start',startKey],['end',endKey]]){const v=original[field];if(v?.kind==='room'&&goneRoom(v.floor,v.room)){o[zKey]=elevation(plan,v,original[zKey]);delete o[field];notes.push({code:'removed-endpoint-detached',endpoint:field,room:v.room,floor:v.floor,reason:'Removed room endpoint detached at its existing height'});}}}
 for(const [fid,f]of Object.entries(next.floors))for(const r of arr(f.rooms)){
  const original=index.map.get(key(roomRef(fid,r.id)))?.object;
  if(r.cutoutFor)r.cutoutFor=r.cutoutFor.filter(id=>!goneRoom(fid,id));
  if(r.routeStair){detach(r.routeStair,original.routeStair,'startZ','endZ');if(r.routeStair.hostRoom&&goneRoom(fid,r.routeStair.hostRoom))delete r.routeStair.hostRoom;}
 }
 for(const c of arr(next.splitLevelConnections)){const original=arr(plan.splitLevelConnections).find(o=>o.id===c.id&&o.room===c.room&&(o.floor||o.level)===(c.floor||c.level));if(original)detach(c,original,'lowerZ','upperZ');if(c.route)c.route=c.route.filter(id=>!goneRoom(c.floor||c.level,id));}
 if(options.validate)options.validate(next,analysis);
 return{plan:next,selection:[],analysis,notes,changed:true};
}
/* Conservative world-space bounds for selection previews. Rendering adapters are
 * optional; they improve shaped/route/door fidelity without changing the model.
 * options.doorGeometry receives (door, floor, plan, floorId).
 */
function bounds(plan,refs,options={}){
 const index=indexPlan(plan),normalized=normalizeRefs(refs),analysis=options.includeCoupled===false?null:analyze(plan,normalized),selected=analysis?.refs||normalized,points=[];
 const add=p=>{const x=Array.isArray(p)?p[0]:p?.x,y=Array.isArray(p)?p[1]:p?.y;if(!finite(x)||!finite(y))throw new SelectionError('Selection has invalid geometry.','invalid-geometry');points.push([x,y]);};
 const box=b=>{if(!b)return;for(const p of [[b.x,b.y],[b.x+b.w,b.y],[b.x+b.w,b.y+b.h],[b.x,b.y+b.h]])add(p);};
 const rotateBox=o=>{const radians=(o.rotation||0)*Math.PI/180,c=Math.cos(radians),s=Math.sin(radians),x=o.x+o.w/2,y=o.y+o.h/2;for(const p of [[o.x,o.y],[o.x+o.w,o.y],[o.x+o.w,o.y+o.h],[o.x,o.y+o.h]])add([x+(p[0]-x)*c-(p[1]-y)*s,y+(p[0]-x)*s+(p[1]-y)*c]);};
 const B=options.buildingTransform||root.KERN_BUILDING_TRANSFORM,S=options.shapes||root.KERN_SHAPES;
 for(const r of selected){const e=index.map.get(key(r));if(!e)throw new SelectionError('A selected object is missing.','missing-object',{ref:r});const o=e.object,f=plan.floors[r.floor];
  if(r.kind==='rooms'){
   if(B?.geometryItems){const only={...plan,floors:{...plan.floors,[r.floor]:{...f,rooms:[o],symbols:[],services:[],annotations:[]}}};const items=B.geometryItems(only,{...options,floorIds:[r.floor],includeSite:false,includeExtras:false});for(const item of items)for(const p of item.points)add(p);}
   else if(o.shape&&S?.points)for(const p of S.points(o))add(p);
   else if(o.shape?.vertices)for(const p of o.shape.vertices)add([o.x+p.x*o.w,o.y+p.y*o.h]);else box(o);
  }else if(r.kind==='doors'){
   const g=options.doorGeometry?.(o,f,plan,r.floor);if(g){if(g.segments)for(const s of g.segments){add(s.p0);add(s.p1);}else if(g.p0&&g.p1){add(g.p0);add(g.p1);}else if(['h','v'].includes(g.axis)){add(g.axis==='h'?[g.start,g.fixed]:[g.fixed,g.start]);add(g.axis==='h'?[g.end,g.fixed]:[g.fixed,g.end]);}}
   else{const a=arr(f.rooms).find(q=>q.id===o.a),b=arr(f.rooms).find(q=>q.id===o.b);if(!a)continue;if(o.b==='outside'&&['n','e','s','w'].includes(o.side)){const vertical=['e','w'].includes(o.side),length=vertical?a.h:a.w,width=o.width||1,start=(vertical?a.y:a.x)+.1+Math.max(0,length-width-.2)*(o.offset??.5),fixed=vertical?a.x+(o.side==='e'?a.w:0):a.y+(o.side==='s'?a.h:0);add(vertical?[fixed,start]:[start,fixed]);add(vertical?[fixed,start+width]:[start+width,fixed]);}else if(b){const x=Math.max(a.x,b.x),y=Math.max(a.y,b.y),right=Math.min(a.x+a.w,b.x+b.w),bottom=Math.min(a.y+a.h,b.y+b.h);if(right>=x-1e-6&&bottom>=y-1e-6)box({x,y,w:Math.max(0,right-x),h:Math.max(0,bottom-y)});}}
  }else if(r.kind==='primitives'){for(const p of (root.KERN_PRIMITIVES||(typeof require==='function'?require('./primitives.js'):null)).points(o))add(p);}
  else if(o.points){const ps=o.points.map(p=>Array.isArray(p)?p:[p.x,p.y]);if(B?.strokePoints)for(const p of B.strokePoints(ps,o.width))add(p);else{const half=Math.max(0,o.width||0)/2;for(const p of ps){add([p[0]-half,p[1]-half]);add([p[0]+half,p[1]+half]);}}}
  else if(r.kind==='annotations'){const size=o.fontSize??(e.zone?.45:.35),text=String(o.text??o.name??''),b=options.annotationBounds?.(o)||{x:o.x-Math.max(1,text.length)*size*.29,y:o.y-size,w:Math.max(1,text.length)*size*.58,h:size*1.3},angle=(o.rotation||0)*Math.PI/180,c=Math.cos(angle),s=Math.sin(angle),cx=o.x,cy=o.y-size*.35;for(const p of [[b.x,b.y],[b.x+b.w,b.y],[b.x+b.w,b.y+b.h],[b.x,b.y+b.h]])add([cx+(p[0]-cx)*c-(p[1]-cy)*s,cy+(p[0]-cx)*s+(p[1]-cy)*c]);}
  else if(r.kind==='symbols'&&!o.rotationSpace)box(o);else rotateBox(o);
 }
 if(!points.length)return null;const minX=Math.min(...points.map(p=>p[0])),minY=Math.min(...points.map(p=>p[1])),maxX=Math.max(...points.map(p=>p[0])),maxY=Math.max(...points.map(p=>p[1]));return{x:minX,y:minY,w:maxX-minX,h:maxY-minY,minX,minY,maxX,maxY};
}

const api={bounds,remove,paste,kinds,key,normalizeRefs,resolve,sourceFor,analyze,translate,copy,SelectionError,TranslationError:SelectionError};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.KERN_SELECTION_TRANSFORM=api;
})(typeof window!=='undefined'?window:globalThis);
