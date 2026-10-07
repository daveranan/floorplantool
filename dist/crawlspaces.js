/* Optional per-host crawlspace proposal model. No renderer/editor hooks and no
 * import migration. All public operations preserve their input; failed proposals
 * return an unchanged clone. Geometry is derived, never copied into authored rooms.
 *
 * propose(plan, {action, hostFloor, clearHeight?, floorId?}, options?)
 * Actions: enable, height, refresh, remove.
 * Every stored child is physical and requires enabled:true. Show/Hide belongs
 * exclusively to KERN_LAYERS view state and preserves physical geometry.
 * Removal requires an empty, unreferenced child.
 * options.envelopePolicy overrides the conservative, explicitly reported policy.
 * A caller must review result.ok, issues, shifts and stairs before one undoable
 * commit of result.plan. There is deliberately no automatic apply operation.
 */
(function(root){
'use strict';
const EPS=1e-6, DEFAULT_CLEAR=1.5, arr=v=>Array.isArray(v)?v:[], copy=v=>JSON.parse(JSON.stringify(v)), round=n=>Math.round(n*1e6)/1e6;
const dependency=(name,file)=>root[name]||(typeof require==='function'?require(file):null);
const shapes=()=>dependency('KERN_SHAPES','./room-shapes.js');
const elevations=()=>dependency('KERN_ELEVATIONS','./elevation.js');
const safeId=id=>typeof id==='string'&&/^[A-Za-z0-9_-]{1,20}$/.test(id)&&!['__proto__','constructor','prototype'].includes(id);
const isChild=f=>!!f?.crawlspace, active=f=>isChild(f)&&f.crawlspace.enabled===true;
const z=f=>Number.isFinite(f?.z)?f.z:0, clear=f=>Number.isFinite(f?.clearHeight)?f.clearHeight:3;
const slab=p=>Number.isFinite(p.floorModule?.slab)&&p.floorModule.slab>0?Math.min(p.floorModule.slab,2):.3;
const issue=(code,text,extra={},blocking=false)=>({code,text,severity:blocking?'error':'warning',blocking,...extra});
const area=g=>g.reduce((sum,poly)=>sum+Math.abs(shapes().areaOf(poly[0]))-poly.slice(1).reduce((n,h)=>n+Math.abs(shapes().areaOf(h)),0),0);
const DEFAULT_POLICY=Object.freeze({excludeTallRooms:true,excludeSolidIntrusions:true,excludeVoids:true,excludeCourtyards:true,excludeOutdoor:true,excludeTerraces:true,excludeSolids:true,excludeStairs:true,projectLowerObstructions:true});
function children(plan,hostFloor){return Object.entries(plan.floors||{}).filter(([,f])=>f?.crawlspace?.hostFloor===hostFloor).map(([id])=>id);}
function freshId(plan,hostFloor){const base=(hostFloor+'-crawl').slice(0,20);if(!Object.hasOwn(plan.floors,base))return base;for(let i=2;i<1000;i++){const suffix='-'+i,id=base.slice(0,20-suffix.length)+suffix;if(!Object.hasOwn(plan.floors,id))return id;}throw Error('No available crawlspace floor code');}
function validate(plan){
 const issues=[];if(!plan?.floors||typeof plan.floors!=='object')return[issue('missing-floors','A plan with floors is required.',{},true)];
 const entries=Object.entries(plan.floors);if(entries.length>20)issues.push(issue('floor-limit','The plan exceeds the 20-floor limit.',{},true));
 const seen=new Set();for(const [id,f]of entries){if(!isChild(f))continue;const c=f.crawlspace;
  if(!safeId(id)||!c||typeof c!=='object'||Array.isArray(c))issues.push(issue('invalid-crawlspace','Invalid crawlspace floor metadata.',{floor:id},true));
  const host=plan.floors[c.hostFloor];if(!safeId(c.hostFloor)||isChild(host)||id===c.hostFloor)issues.push(issue('invalid-host-reference','A crawlspace must name a main floor using a valid floor code.',{floor:id,hostFloor:c.hostFloor},true));
  else if(!host)issues.push(issue('orphan-child-retained','The host floor is missing. Stored crawlspace data remains valid and is retained for repair.',{floor:id,hostFloor:c.hostFloor}));
  if(seen.has(c.hostFloor))issues.push(issue('duplicate-child','A main floor cannot have multiple crawlspace children.',{floor:id,hostFloor:c.hostFloor},true));seen.add(c.hostFloor);
  if(c.enabled!==true||c.hidden!==undefined||c.visible!==undefined)issues.push(issue('invalid-crawlspace-state','Every stored crawlspace is physical and must have enabled:true. Store Show/Hide only in Layers view state.',{floor:id},true));
  if(!Number.isFinite(c.clearHeight)||c.clearHeight<.5||c.clearHeight>50||f.clearHeight!==c.clearHeight)issues.push(issue('invalid-clear-height','Crawlspace and floor clear heights must agree and be between 0.5 and 50 m.',{floor:id},true));
  if(!Number.isFinite(f.z)||Math.abs(f.z)>150)issues.push(issue('elevation-limit','Crawlspace elevation must remain within ±150 m.',{floor:id},true));
 }
 return issues;
}
function deriveEnvelope(plan,hostFloor,options={}){
 const host=plan.floors?.[hostFloor],policy={...DEFAULT_POLICY,...options.envelopePolicy},issues=[],sources=[],masks=[];
 const surfaceZ=host?round(z(host)+clear(host)+slab(plan)):null;
 const result={hostFloor,surfaceZ,slab:slab(plan),policy,geometry:[],area:0,sources,masks,issues,complete:true};
 if(!host||isChild(host)){issues.push(issue('missing-host','Choose an existing main floor.',{hostFloor},true));result.complete=false;return result;}
 if(!options.envelopePolicy)issues.push(issue('envelope-policy-preview','Envelope exclusions use the reported provisional policy; confirm the intended treatment of tall halls, outdoor areas and voids.',{hostFloor}));
 for(const key of Object.keys(DEFAULT_POLICY))if(typeof policy[key]!=='boolean'){issues.push(issue('invalid-envelope-policy','Envelope policy values must be booleans.',{key},true));result.complete=false;return result;}
 const bottom=surfaceZ-result.slab;
 const addMask=(fid,r,reason)=>masks.push({floor:fid,room:r.id,reason,geometry:shapes().multi(r)});
 try{
  const stairs=new Set(arr(plan.verticalConnections).filter(c=>arr(c.floors).includes(hostFloor)).map(c=>c.room));
  for(const r of arr(host.rooms)){
   const reasons=[];if(policy.excludeVoids&&r.type==='void')reasons.push('void');if(policy.excludeCourtyards&&(r.type==='courtyard'||r.courtyardVoid))reasons.push('open-sky');
   if(policy.excludeOutdoor&&r.outdoor)reasons.push('outdoor');if(policy.excludeTerraces&&r.type==='terrace')reasons.push('terrace');if(policy.excludeSolids&&r.type==='solid')reasons.push('solid');
   if(policy.excludeStairs&&(r.routeStair||r.localSteps||r.stairTransition||stairs.has(r.id)))reasons.push('stair');
   if(policy.excludeTallRooms&&!['void','courtyard','solid','terrace'].includes(r.type)&&!r.outdoor&&(r.z??z(host))+(r.height??clear(host))>bottom+EPS)reasons.push('tall-room');
   if(policy.excludeSolidIntrusions&&r.type==='solid'&&(r.z??z(host))+(r.height??clear(host))>bottom+EPS)reasons.push('solid-intrusion');
   if(reasons.length){for(const reason of reasons)addMask(hostFloor,r,reason);}else sources.push({floor:hostFloor,room:r.id,geometry:shapes().multi(r)});
  }
  if(policy.projectLowerObstructions)for(const [fid,f]of Object.entries(plan.floors)){
   if(fid===hostFloor||isChild(f)||z(f)>z(host)+EPS)continue;
   for(const r of arr(f.rooms)){const base=r.z??z(f),top=base+(r.height??clear(f));
    if(policy.excludeCourtyards&&(r.type==='courtyard'||r.courtyardVoid)&&base<=surfaceZ+EPS)addMask(fid,r,'projected-open-sky');
    else if(policy.excludeTallRooms&&!['void','courtyard','solid','terrace'].includes(r.type)&&!r.outdoor&&!r.routeStair&&!r.localSteps&&base<surfaceZ+EPS&&top>bottom+EPS)addMask(fid,r,'lower-tall-room');
    else if(policy.excludeSolidIntrusions&&r.type==='solid'&&base<surfaceZ+EPS&&top>bottom+EPS)addMask(fid,r,'lower-solid-intrusion');
   }
  }
  if(policy.excludeCourtyards&&plan.courtyard?.openToSky!==false&&plan.courtyard&&Number.isFinite(plan.courtyard.x)&&(plan.courtyard.z??0)<=surfaceZ+EPS)addMask(plan.courtyard.floor||'site',{...plan.courtyard,id:'courtyard-projection'},'courtyard-projection');
  const union=sources.length?shapes().clip.union(...sources.map(s=>s.geometry)):[];
  result.geometry=union.length&&masks.length?shapes().clip.difference(union,...masks.map(m=>m.geometry)):union;result.area=round(area(result.geometry));
  for(const mask of masks)issues.push(issue('excluded-footprint','Excluded '+mask.reason+' footprint from the crawlspace envelope.',{hostFloor,floor:mask.floor,room:mask.room,reason:mask.reason}));
  if(!result.geometry.length)issues.push(issue('empty-envelope','No usable inherited footprint remains under the selected policy.',{hostFloor}));
 }catch(error){result.geometry=[];result.area=0;result.complete=false;issues.push(issue('envelope-incomplete','The inherited outlines could not be compared reliably. Authored geometry is unchanged.',{hostFloor,detail:String(error.message||error)},true));}
 return result;
}
function strandedChildren(plan,childFloor,envelope){
 const f=plan.floors?.[childFloor],issues=[];if(!f||!envelope.complete)return issues;
 const check=(kind,o,geometry)=>{const outside=area(shapes().clip.difference(geometry,envelope.geometry));if(outside>EPS)issues.push(issue('stranded-child','Authored '+kind+' extends outside the current inherited footprint and is retained.',{floor:childFloor,kind,id:o.id,outsideArea:round(outside)}));};
 try{
  for(const r of arr(f.rooms)){check('room',r,shapes().multi(r));const top=(r.z??z(f))+(r.height??clear(f));if((r.z??z(f))<z(f)-EPS||top>z(f)+clear(f)+EPS)issues.push(issue('child-height-conflict','Authored room exceeds the crawlspace clear-height band and is retained.',{floor:childFloor,room:r.id}));}
  for(const p of arr(f.primitives))check('primitive',p,[[dependency('KERN_PRIMITIVES','./primitives.js').points(p)]]);
  for(const kind of ['services','symbols'])for(const o of arr(f[kind])){const bounds=dependency('KERN_OBJECTS','./objects.js').bounds(o);check(kind,o,shapes().multi(bounds));}
  for(const o of arr(f.annotations))if(!envelope.geometry.some(poly=>shapes().contains(o,poly[0])&&!poly.slice(1).some(h=>shapes().contains(o,h))))issues.push(issue('stranded-child','Authored annotation lies outside the current inherited footprint and is retained.',{floor:childFloor,kind:'annotation',id:o.id}));
 }catch(error){issues.push(issue('child-check-incomplete','Authored child outlines could not be checked reliably. All data is retained.',{floor:childFloor,detail:String(error.message||error)},true));}
 return issues;
}
const ownerFloors=o=>[...new Set([o?.floor,o?.level,o?.voidLevel,o?.belowFloor,o?.source?.floor,o?.linkedSource?.floor,...arr(o?.floors),...arr(o?.levels)].filter(id=>typeof id==='string'))];
function references(plan,fid){
 const refs=[];for(const [id,f]of Object.entries(plan.floors))for(const r of arr(f.rooms))for(const [stored,q]of [[false,r],[true,r.stairOriginal]]){
  if(!q)continue;
  for(const key of ['linkedSource','source'])if(q[key]?.floor===fid)refs.push({kind:'linked-source',floor:id,room:r.id,source:key,...(stored?{stored:true}:{})});
  for(const end of ['start','end'])if(q.routeStair?.[end]?.floor===fid)refs.push({kind:'route-endpoint',floor:id,room:r.id,end,...(stored?{stored:true}:{})});
 }
 for(const c of arr(plan.verticalConnections))if([...ownerFloors(c),...arr(c.passedFloors),...Object.keys(c.footprints||{}),c.from,c.to].includes(fid))refs.push({kind:'vertical-connection',id:c.id});
 for(const c of arr(plan.splitLevelConnections))if([...ownerFloors(c),c.from,c.to,c.start?.floor,c.end?.floor].includes(fid))refs.push({kind:'split-connection',id:c.id});
 if(plan.walkStart?.floor===fid)refs.push({kind:'walk-start'});if(ownerFloors(plan.courtyard).includes(fid))refs.push({kind:'courtyard'});
 for(const kind of ['approaches','overlooks','section'])for(const [index,o]of arr(plan[kind]).entries())if(ownerFloors(o).includes(fid)||[o.start?.floor,o.end?.floor].includes(fid)||kind==='section'&&sectionRowMapping(plan,o)?.floors.includes(fid))refs.push({kind:kind==='section'?'section-row':kind.slice(0,-1),index,id:o.id});
 for(const [key,value]of Object.entries(plan))if(/Section$/.test(key)&&ownerFloors(value).includes(fid))refs.push({kind:'section',section:key});
 return refs;
}
function overlookMapping(plan,o){
 const levels=[...new Set(arr(o.levels))],owners=levels.length?levels:ownerFloors(o);
 if(!owners.length||owners.some(id=>!plan.floors[id]))return null;
 // The stock Operations guard sits on the upper void level. The lower source
 // supplies its XY edge, not its guard height; both floors need not move together.
 const s=plan.operationsSection,ref=s?.source,room=arr(plan.floors[ref?.floor]?.rooms).find(r=>r.id===ref?.room);
 const sameSource=!o.source&&!o.linkedSource||[o.source,o.linkedSource].filter(Boolean).every(r=>r.floor===ref?.floor&&r.room===ref?.room);
 const edge=room&&['h','v'].includes(o.axis)&&Number.isFinite(o.fixed)&&Number.isFinite(o.lo)&&Number.isFinite(o.hi)&&(o.axis==='v'?(Math.abs(o.fixed-room.x)<EPS||Math.abs(o.fixed-room.x-room.w)<EPS)&&o.lo>=room.y-EPS&&o.hi<=room.y+room.h+EPS:(Math.abs(o.fixed-room.y)<EPS||Math.abs(o.fixed-room.y-room.h)<EPS)&&o.lo>=room.x-EPS&&o.hi<=room.x+room.w+EPS);
 // Verified against the published kern-main-layout V12 record. Its legacy XY
 // edge can remain behind after a source-room edit without changing its Z owner.
 // Accept the original top or its preserved 1.1 m offset after an earlier shift.
 const published=room&&plan.variant==='v12'&&plan.revision==='v12-compact-functional-copy'&&plan.sourceUploadSha256==='6aa4f564af9b4769837b40f3953ac4bee7d59ac6d749f9b8be38be3fea54efac'&&ref?.floor==='L0'&&ref.room==='control'&&s.voidLevel==='L1'&&o.axis==='v'&&o.fixed===18&&o.lo===7&&o.hi===10&&(Math.abs(o.guardTop-6.9)<EPS||Math.abs(o.guardTop-z(plan.floors.L1)-1.1)<EPS);
 if(owners.length===2&&owners.includes(ref?.floor)&&owners.includes(s?.voidLevel)&&sameSource&&(edge||published))return{floors:[s.voidLevel],staleFootprint:!edge};
 return{floors:owners};
}
function sectionRowMapping(plan,row){
 const owners=ownerFloors(row);if(owners.length)return owners.every(id=>plan.floors[id])?{floors:owners}:null;
 // Only recognized datum labels supply ownership. A coincident numeric Z alone
 // cannot identify which floor an arbitrary export annotation belongs to.
 const label=typeof row.label==='string'?row.label.trim():'',token=label.match(/^([A-Za-z0-9_-]+)(?:\s|[·:|]|$)/)?.[1];
 if(token&&plan.floors[token])return{floors:[token],z:z(plan.floors[token])};
 if(/^G\s*[·:|]\s*garage\b/i.test(label)){
  const f=plan.floors.B1,r=arr(f?.rooms).find(r=>r.id==='garage');if(r)return{floors:['B1'],z:r.z??z(f)};
 }
 return null;
}
function movementIssues(plan,moves,heightChanges=new Set()){
 const issues=[],delta=id=>moves.get(id)||0,affected=id=>delta(id)||heightChanges.has(id),changed=[...new Set([...moves.keys(),...heightChanges])];
 for(const [fid,f]of Object.entries(plan.floors))for(const r of arr(f.rooms)){
  const ref=r.linkedSource||(r.id==='opsroof'&&!r.independentCap&&plan.floors.L0?.rooms.some(q=>q.id==='control')?{floor:'L0',room:'control'}:null);
  if(ref&&Math.abs(delta(fid)-delta(ref.floor))>EPS){
   if(r.type==='solid')issues.push(issue('linked-cap-review','The floor-owned concrete cap rises with its floor; its linked source footprint and authored height are retained.',{floor:fid,room:r.id,source:copy(ref)}));
   else if(r.type==='void')issues.push(issue('linked-void-review','A linked void and its source would move different amounts; review the retained opening against the source height.',{floor:fid,room:r.id,source:copy(ref)}));
  }
  if(delta(fid)&&r.stairTransition&&!r.routeStair&&!arr(plan.splitLevelConnections).some(c=>c.floor===fid&&c.room===r.id)&&!arr(plan.verticalConnections).some(c=>c.room===r.id&&arr(c.floors).includes(fid)))issues.push(issue('standalone-stair-shift','Standalone stair elevations need an explicit relocation rule before this floor can move.',{floor:fid,room:r.id},true));
 }
 for(const c of arr(plan.splitLevelConnections))if(delta(c.floor)&&c.localSteps&&(!c.start||!c.end))issues.push(issue('unlinked-local-step-shift','Legacy local steps have an unlinked endpoint; choose its surface before shifting this floor.',{floor:c.floor,connection:c.id},true));
 for(const [key,value]of Object.entries(plan))if(/Section$/.test(key)&&value&&typeof value==='object'){
  const related=ownerFloors(value);
  const absolute=Object.entries(value).some(([k,v])=>typeof v==='number'&&/(?:Z|Top|Datum)$|^(?:floor|z)$/.test(k));
  if(!sectionMapping(plan,key)&&absolute&&(related.some(affected)||!related.length&&changed.length))issues.push(issue('section-elevation-review','Custom section metadata contains absolute elevations whose relationship to this shift needs review.',{section:key,floors:related},true));
 }
 for(const [kind,map,field,code]of [['overlooks',overlookMapping,'guardTop','overlook-elevation-review'],['section',sectionRowMapping,'z','section-row-elevation-review']])for(const [index,o]of arr(plan[kind]).entries()){
  if(!Number.isFinite(o[field]))continue;const related=ownerFloors(o),mapping=map(plan,o),owners=mapping?.floors||related;
  const affected=owners.some(id=>delta(id))||!mapping&&(!owners.length||owners.some(id=>!plan.floors[id]))&&changed.length;
  if(!affected)continue;
  if(mapping?.staleFootprint)issues.push(issue('overlook-footprint-review','The published Operations overlook retains its original XY edge after the source room moved. Its guard height follows the upper void floor; review the retained edge alignment.',{index,id:o.id,floors:mapping.floors}));
  if(!mapping||mapping.floors.some(id=>Math.abs(delta(id)-delta(mapping.floors[0]))>EPS))issues.push(issue(code,'The '+(kind==='overlooks'?'overlook guard':'section row')+' has no unambiguous elevation owner for this shift. Review its floor references before moving the building.',{index,id:o.id,floors:owners},true));
 }
 if(plan.courtyard&&delta(plan.courtyard.source?.floor||plan.courtyard.floor)&&Number.isFinite(plan.courtyard.z)&&!courtyardMapping(plan))issues.push(issue('courtyard-datum-review','The courtyard projection has an absolute elevation without a resolvable source; review it before moving its owning floor.',{floor:plan.courtyard.floor},true));
 return issues;
}
function sectionMapping(plan,key){
 const s=plan[key];if(!s)return null;
 if(key==='operationsSection'){
  const ref=s.source,f=plan.floors[ref?.floor],r=arr(f?.rooms).find(r=>r.id===ref?.room);if(!r)return null;
  const floor=r.z??z(f),clearTop=floor+(r.height??clear(f));
  const caps=Object.entries(plan.floors).filter(([,f])=>!isChild(f)).flatMap(([id,f])=>arr(f.rooms).filter(r=>r.type==='solid'&&!r.independentCap&&(r.linkedSource?.floor===ref.floor&&r.linkedSource.room===ref.room||r.id==='opsroof'&&ref.floor==='L0'&&ref.room==='control')).map(r=>({id,z:r.z??z(f)})));
  if(caps.length>1)return null;const roof=caps[0]||Object.entries(plan.floors).filter(([id,f])=>id!==ref.floor&&!isChild(f)&&z(f)>=clearTop+slab(plan)-EPS).sort((a,b)=>z(a[1])-z(b[1])).map(([id,f])=>({id,z:z(f)}))[0];
  if(!roof)return null;return{floors:[ref.floor,roof.id],values:{floor,clearTop,serviceTop:roof.z-slab(plan),slabTop:roof.z}};
 }
 if(key==='garageSection'){
  const f=plan.floors.B1,r=arr(f?.rooms).find(r=>r.id==='garage'),roof=plan.floors.L0,below=plan.floors[s.belowFloor];if(!r||!roof||!below||isChild(f)||isChild(roof)||isChild(below))return null;
  const floor=r.z??z(f),occupiedClear=r.height??clear(f),clearTop=floor+occupiedClear,serviceTop=z(roof)-slab(plan);
  return{floors:['B1','L0',s.belowFloor],values:{normalB1Datum:z(f),floor,drop:z(f)-floor,occupiedClear,clearTop,serviceClear:serviceTop-clearTop,serviceTop,slabTop:z(roof),belowFloorZ:z(below),belowClear:clear(below),belowServiceClear:floor-slab(plan)-z(below)-clear(below),belowSlab:slab(plan)}};
 }
 return null;
}
function courtyardMapping(plan){
 const c=plan.courtyard;if(!c)return null;const fid=c.source?.floor||c.floor,f=plan.floors[fid];
 const rooms=arr(f?.rooms).filter(r=>c.source?.room?r.id===c.source.room:r.type==='courtyard');return rooms.length===1?{floor:fid,z:rooms[0].z??z(f)}:null;
}
function reconcileSections(before,after,moves,heightChanges=new Set()){
 const summaries=[];for(const key of ['operationsSection','garageSection']){
  const old=sectionMapping(before,key),next=sectionMapping(after,key);if(!next||!next.floors.some(id=>moves.has(id)||heightChanges.has(id)))continue;
  Object.assign(after[key],next.values);summaries.push({section:key,before:old?.values||null,after:copy(next.values)});
 }
 const courtyard=courtyardMapping(after);if(courtyard&&moves.has(courtyard.floor)){const old=after.courtyard.z;after.courtyard.z=courtyard.z;summaries.push({section:'courtyard',before:{z:old},after:{z:courtyard.z}});}
 for(const [kind,map,field]of [['overlooks',overlookMapping,'guardTop'],['section',sectionRowMapping,'z']])for(const [index,o]of arr(before[kind]).entries()){
  if(!Number.isFinite(o[field]))continue;const mapping=map(before,o);if(!mapping||!mapping.floors.some(id=>moves.has(id)))continue;
  const d=moves.get(mapping.floors[0])||0;if(mapping.floors.some(id=>Math.abs((moves.get(id)||0)-d)>EPS))continue;
  const target=kind==='section'&&mapping.z!==undefined?map(after,after[kind][index])?.z:o[field]+d;if(!Number.isFinite(target))continue;
  after[kind][index][field]=round(target);summaries.push({section:kind,index,before:{[field]:o[field]},after:{[field]:after[kind][index][field]}});
 }
 return summaries;
}
function applyMoves(plan,moves){
 // Batch the known floorMove fields, then sync once: intermediate linked route
 // heights must not influence another floor's preflight or move calculation.
 for(const [fid,d]of moves){const f=plan.floors[fid];f.z=round(z(f)+d);f.elevation=(f.z>0?'+':'')+f.z.toFixed(2)+' m';
  for(const r of arr(f.rooms)){if(Number.isFinite(r.z))r.z=round(r.z+d);if(r.routeStair)for(const end of ['start','end'])if(!r.routeStair[end])r.routeStair[end+'Z']=round(r.routeStair[end+'Z']+d);}
  for(const c of arr(plan.splitLevelConnections))if(c.floor===fid&&!c.localSteps)for(const key of ['lowerZ','upperZ'])if(Number.isFinite(c[key]))c[key]=round(c[key]+d);
  for(const o of arr(f.services))if(Number.isFinite(o.z))o.z=round(o.z+d);
 }
 // Match elevation.sync only for affected routes. Unrelated stale endpoint
 // metadata must not be normalized by an optional crawlspace operation.
 const affected=ref=>ref?.floor&&moves.has(ref.floor),E=elevations();
 for(const [fid,f]of Object.entries(plan.floors))for(const r of arr(f.rooms))if(r.routeStair){const q=r.routeStair;if(!moves.has(fid)&&!affected(q.start)&&!affected(q.end))continue;q.startZ=round(E.value(plan,q.start,q.startZ));q.endZ=round(E.value(plan,q.end,q.endZ));r.z=Math.min(q.startZ,q.endZ);}
 for(const c of arr(plan.splitLevelConnections))if(c.localSteps&&(moves.has(c.floor)||affected(c.start)||affected(c.end))){c.lowerZ=round(E.value(plan,c.start,c.lowerZ));c.upperZ=round(E.value(plan,c.end,c.upperZ));const r=arr(plan.floors[c.floor]?.rooms).find(r=>r.id===c.room);if(r){r.z=Math.min(c.lowerZ,c.upperZ);r.lowerZ=c.lowerZ;r.upperZ=c.upperZ;r.cutoutFor=[c.start,c.end].filter(ref=>ref?.kind==='room'&&ref.floor===c.floor).map(ref=>ref.room);}}
}
function elevationIssues(before,after){
 const issues=[],check=(value,old,where)=>{if(value!==old&&(!Number.isFinite(value)||Math.abs(value)>150))issues.push(issue('elevation-limit','A shifted elevation would exceed ±150 m.',where,true));};
 for(const [fid,f]of Object.entries(after.floors)){const old=before.floors[fid];check(f.z,old?.z,{floor:fid});for(const r of arr(f.rooms)){const prior=arr(old?.rooms).find(q=>q.id===r.id);if(r.z!==undefined)check(r.z,prior?.z,{floor:fid,room:r.id});if(r.routeStair)for(const end of ['startZ','endZ'])check(r.routeStair[end],prior?.routeStair?.[end],{floor:fid,room:r.id,end});}for(const o of arr(f.services))check(o.z,arr(old?.services).find(q=>q.id===o.id)?.z,{floor:fid,service:o.id});}
 for(const c of arr(after.splitLevelConnections)){const old=arr(before.splitLevelConnections).find(q=>q.id===c.id);for(const end of ['lowerZ','upperZ'])if(c[end]!==undefined)check(c[end],old?.[end],{connection:c.id,end});}
 for(const [kind,field]of [['overlooks','guardTop'],['section','z']])for(const [index,o]of arr(after[kind]).entries())if(o[field]!==undefined)check(o[field],before[kind]?.[index]?.[field],{section:kind,index});
 return issues;
}
function stairSnapshot(plan){
 const detail=dependency('KERN_STAIR_DETAIL','./stair-detail.js'),seen=new Set(),out=[];
 for(const [fid,f]of Object.entries(plan.floors))for(const r of arr(f.rooms)){
  const stack=arr(plan.verticalConnections).find(c=>c.type==='stair'&&c.room===r.id&&arr(c.floors).includes(fid));
  if(!stack&&!r.routeStair&&!r.stairTransition&&!arr(plan.splitLevelConnections).some(c=>c.floor===fid&&c.room===r.id))continue;
  const key=stack?'stack:'+stack.id:fid+':'+r.id;if(seen.has(key))continue;seen.add(key);
  try{const d=detail.build(plan,fid,r.id);out.push({key,floor:fid,room:r.id,connection:d?.connectionId,kind:r.routeStair?'route':d?.localSteps?'local':'conventional',stops:arr(d?.stops).map(s=>({floor:s.floor,z:s.z})),risers:arr(d?.segments).reduce((n,s)=>n+(s.risers||0),0),warnings:arr(d?.warnings).map(w=>({code:w.code,text:w.text})),incomplete:!d});}
  catch(error){out.push({key,floor:fid,room:r.id,incomplete:true,error:String(error.message||error)});}
 }
 return out;
}
function clearanceReview(before,after,moves,heightChanges=new Set()){
 const issues=[],exterior=[],key=i=>JSON.stringify([i.kind,i.floors,i.rooms,i.text]);
 for(const [fid]of moves){const f=after.floors[fid];if(isChild(f))continue;
  const ids=new Set([...arr(f.entrances),...arr(f.doors).filter(d=>d.a==='outside'||d.b==='outside').map(d=>d.a==='outside'?d.b:d.a),...arr(f.externals).map(e=>e.room),f.external?.room].filter(Boolean));
  for(const id of ids){const r=arr(f.rooms).find(r=>r.id===id),old=arr(before.floors[fid]?.rooms).find(r=>r.id===id);if(!r||!old)continue;const from=old.z??z(before.floors[fid]),to=r.z??z(f);if(Math.abs(to-from)>EPS)exterior.push({floor:fid,room:id,from,to,siteGroundZ:0});}
 }
 if(exterior.length||moves.has('L0'))issues.push(issue('exterior-threshold-review','Occupied floor elevations change while outside ground remains at 0 m. Review exterior thresholds and linked entrance approaches before accepting the proposal.',{exterior,siteGroundZ:0}));
 let added=[];if(moves.size||heightChanges.size)try{const H=dependency('KERN_HEIGHTS','./height-rules.js'),existing=new Set(H.analyze(before).map(key));added=H.analyze(after).filter(i=>!existing.has(key(i)));if(added.length)issues.push(issue('clearance-review','The proposed floor changes introduce or change height/threshold diagnostics.',{diagnostics:added}));}catch(error){issues.push(issue('clearance-check-incomplete','The shifted building height checks could not be completed reliably.',{detail:String(error.message||error)},true));}
 return{issues,diagnostics:added,exterior};
}
function reviewMoves(original,next,result,moves,options,heightChanges=new Set(),allChildren=false){
 const {issues,shifts,stairs,movementIssues:movementReports,strandedIssues:strandedReports,hostFloor,childFloorId:childId}=result;
 for(const [id,d]of moves)shifts.push({floor:id,hostFloor:next.floors[id].crawlspace?.hostFloor||null,kind:isChild(next.floors[id])?'crawlspace':'main',from:z(next.floors[id]),to:round(z(next.floors[id])+d),delta:d});
 movementReports.push(...movementIssues(original,moves,heightChanges));issues.push(...movementReports);
 const beforeStairs=stairSnapshot(original);
 try{
  applyMoves(next,moves);
  result.sections=reconcileSections(original,next,moves,heightChanges);
  for(const key of ['operationsSection','garageSection']){const old=sectionMapping(original,key);if(old?.floors.some(id=>moves.has(id)||heightChanges.has(id))&&!sectionMapping(next,key))issues.push(issue('section-elevation-review','The changed floor heights no longer resolve the known section datums.',{section:key,floors:old.floors},true));}
  const w=next.walkStart;if(w&&!Number.isFinite(w.baseZ)&&!Number.isFinite(w.floorZ)){const anchor=p=>{const f=p.floors[w.floor];return arr(f?.rooms).find(r=>r.id===w.anchorRoom)?.z??z(f);},d=anchor(next)-anchor(original);if(d&&Number.isFinite(w.z)){w.z=round(w.z+d);result.walkStartShift=d;if(Math.abs(w.z)>200)issues.push(issue('walk-start-limit','The relocated legacy walk start would exceed its ±200 m storage bound.',{},true));}}
  const elevationReports=elevationIssues(original,next);movementReports.push(...elevationReports);issues.push(...elevationReports);
  for(const after of stairSnapshot(next)){const before=beforeStairs.find(s=>s.key===after.key);if(JSON.stringify(before)!==JSON.stringify(after)){stairs.push({key:after.key,before,after});if(after.incomplete)issues.push(issue('stair-preview-incomplete','An affected stair could not be calculated for review.',{floor:after.floor,room:after.room},true));else if(after.warnings.length)issues.push(issue('stair-review','An affected stair has design warnings; review its changed stops and risers.',{floor:after.floor,room:after.room,codes:after.warnings.map(w=>w.code)}));}}
  result.envelope=deriveEnvelope(next,hostFloor,options);issues.push(...result.envelope.issues);strandedReports.push(...strandedChildren(next,childId,result.envelope));
  for(const [id,f]of Object.entries(next.floors))if(isChild(f)&&id!==childId&&(allChildren||moves.has(id))&&next.floors[f.crawlspace.hostFloor]){const e=deriveEnvelope(next,f.crawlspace.hostFloor,options);issues.push(...e.issues);strandedReports.push(...strandedChildren(next,id,e));}issues.push(...strandedReports);
  for(const [id,f]of Object.entries(next.floors))if(isChild(f)&&(id===childId||allChildren||moves.has(id))){if(clear(f)<1.23)issues.push(issue('crawlspace-crouch-clearance','Clear height is below the current 1.23 m crouched body. This pocket may be impassable.',{floor:id,clearHeight:clear(f)}));else if(clear(f)>=1.8)issues.push(issue('crawlspace-standing-clearance','At 1.80 m or higher, standing may fit. This height does not guarantee a crouch-only pocket.',{floor:id,clearHeight:clear(f)}));}
  const review=clearanceReview(original,next,moves,heightChanges);issues.push(...review.issues);movementReports.push(...review.issues);result.clearance=review.diagnostics;result.exterior=review.exterior;
 }catch(error){issues.push(issue('proposal-incomplete','The elevation proposal could not be completed. The input plan is unchanged.',{detail:String(error.message||error)},true));}
}
function propose(plan,request,options={}){
 const original=copy(plan),next=copy(plan),issues=validate(plan),shifts=[],stairs=[],movementReports=[],strandedReports=[],hostFloor=request?.hostFloor,action=request?.action;
 const result={ok:false,changed:false,action,hostFloor,childFloorId:null,plan:original,shifts,stairs,issues,movementIssues:movementReports,strandedIssues:strandedReports,envelope:null,retained:true};
 const finish=()=>{result.ok=!issues.some(i=>i.blocking);if(result.ok){result.plan=next;result.changed=JSON.stringify(original)!==JSON.stringify(next);}return result;};
 if(issues.some(i=>i.blocking))return finish();
 const host=next.floors[hostFloor];if(!host||isChild(host)){issues.push(issue('missing-host','Choose an existing main floor.',{hostFloor},true));return finish();}
 if(!['enable','height','refresh','remove'].includes(action)){issues.push(issue('invalid-action','Unsupported crawlspace proposal action. Show/Hide belongs to Layers view state and never disables physical geometry.',{},true));return finish();}
 if(request.hidden!==undefined||request.visible!==undefined){issues.push(issue('invalid-visibility','Store Show/Hide only in Layers view state.',{},true));return finish();}
 let childId=children(next,hostFloor)[0],child=next.floors[childId];
 if(!child&&action!=='enable'){issues.push(issue('missing-child','This floor has no stored crawlspace.',{hostFloor},true));return finish();}
 if(!child){
  if(Object.keys(next.floors).length>=20){issues.push(issue('floor-limit','Adding a crawlspace would exceed the 20-floor limit.',{},true));return finish();}
  childId=request.floorId??freshId(next,hostFloor);if(!safeId(childId)||Object.hasOwn(next.floors,childId)){issues.push(issue('invalid-floor-id','Use an unused floor code of up to 20 letters, numbers, dashes or underscores.',{},true));return finish();}
  next.floors[childId]=child={name:(host.name||hostFloor)+' crawlspace',z:round(z(host)+clear(host)+slab(next)),clearHeight:DEFAULT_CLEAR,rooms:[],doors:[],entrances:[],crawlspace:{hostFloor,clearHeight:DEFAULT_CLEAR,enabled:true}};
 }
 result.childFloorId=childId;
 if(action==='remove'){
  const counts=Object.fromEntries(['rooms','doors','entrances','services','symbols','primitives','annotations','externals'].map(k=>[k,arr(child[k]).length]));if(child.external)counts.externals++;
  const refs=references(next,childId);if(Object.values(counts).some(Boolean)||refs.length)issues.push(issue('authored-child-retained','Removal would discard authored content or linked references. Hide the floor in Layers to retain it, or explicitly relocate/remove those items first.',{floor:childId,counts,references:refs},true));
  else{delete next.floors[childId];result.retained=false;}return finish();
 }
 if(request.clearHeight!==undefined){if(!Number.isFinite(request.clearHeight)||request.clearHeight<.5||request.clearHeight>50){issues.push(issue('invalid-clear-height','Clear height must be between 0.5 and 50 m.',{},true));return finish();}child.clearHeight=child.crawlspace.clearHeight=request.clearHeight;}
 const moves=new Map(),setMove=(id,d)=>{d=round(d);if(Math.abs(d)>EPS)moves.set(id,d);};
 if(active(child)){
  const target=round(z(host)+clear(host)+slab(next));setMove(childId,target-z(child));
  const higher=Object.entries(next.floors).filter(([,f])=>!isChild(f)&&z(f)>z(host)+EPS).sort((a,b)=>z(a[1])-z(b[1])||a[0].localeCompare(b[0]));
  const required=target+clear(child)+slab(next),raise=higher.length?Math.max(0,required-z(higher[0][1])):0;
  for(const [id]of higher){setMove(id,raise);for(const cid of children(next,id))setMove(cid,raise);}
  if(Object.entries(next.floors).some(([id,f])=>id!==hostFloor&&!isChild(f)&&Math.abs(z(f)-z(host))<=EPS))issues.push(issue('coincident-main-floors','Another main floor shares the host datum; review floor ownership before inserting a crawlspace.',{hostFloor},true));
 }
 reviewMoves(original,next,result,moves,options);
 return finish();
}
function proposeHostHeight(plan,request,options={}){
 const original=copy(plan),next=copy(plan),issues=validate(plan),hostFloor=request?.hostFloor,key=request?.key,value=request?.value;
 const result={ok:false,changed:false,action:'host-height',hostFloor,childFloorId:null,plan:original,shifts:[],stairs:[],issues,movementIssues:[],strandedIssues:[],envelope:null,retained:true};
 const finish=()=>{result.ok=!issues.some(i=>i.blocking);if(result.ok){result.plan=next;result.changed=JSON.stringify(original)!==JSON.stringify(next);}return result;};
 if(issues.some(i=>i.blocking))return finish();
 const host=next.floors[hostFloor];if(!host||isChild(host)){issues.push(issue('missing-host','Choose an existing main floor.',{hostFloor},true));return finish();}
 if(!['z','clearHeight'].includes(key)||!Number.isFinite(value)||(key==='z'?Math.abs(value)>150:value<.5||value>50)){issues.push(issue('invalid-host-height','Use a floor elevation within ±150 m or a clear height between 0.5 and 50 m.',{hostFloor,key},true));return finish();}
 if(request.hidden!==undefined||request.visible!==undefined){issues.push(issue('invalid-visibility','Store Show/Hide only in Layers view state.',{},true));return finish();}
 if(request.name!==undefined&&(typeof request.name!=='string'||!request.name.trim()||request.name.length>180)){issues.push(issue('invalid-floor-name','Use a nonempty floor name of at most 180 characters.',{hostFloor},true));return finish();}
 const moves=new Map(),heightChanges=new Set(),setMove=(id,d)=>{d=round(d);if(Math.abs(d)>EPS)moves.set(id,d);};
 if(request.name!==undefined)host.name=request.name;
 if(key==='z')setMove(hostFloor,value-z(host));else if(value!==clear(host)){host.clearHeight=value;heightChanges.add(hostFloor);}
 const childId=children(next,hostFloor)[0],child=next.floors[childId];result.childFloorId=childId||null;
 if(child){
  const hostZ=z(host)+(moves.get(hostFloor)||0),target=round(hostZ+clear(host)+slab(next));setMove(childId,target-z(child));
  // Preserve the existing main-floor order even when the requested host datum
  // would otherwise pass its old next floor. Only the necessary upper group rises.
  const higher=Object.entries(original.floors).filter(([id,f])=>id!==hostFloor&&!isChild(f)&&z(f)>z(original.floors[hostFloor])+EPS).sort((a,b)=>z(a[1])-z(b[1])||a[0].localeCompare(b[0]));
  const required=target+clear(child)+slab(next),raise=higher.length?Math.max(0,required-z(higher[0][1])):0;
  for(const [id]of higher){setMove(id,raise);for(const cid of children(next,id))setMove(cid,raise);}
  if(Object.entries(original.floors).some(([id,f])=>id!==hostFloor&&!isChild(f)&&Math.abs(z(f)-z(original.floors[hostFloor]))<=EPS))issues.push(issue('coincident-main-floors','Another main floor shares the host datum; review floor ownership before changing its crawlspace heights.',{hostFloor},true));
 }
 reviewMoves(original,next,result,moves,options,heightChanges,moves.size>0||heightChanges.size>0);
 return finish();
}
function classifyMutation(before,after,options={}){
 const issues=validate(after),mutations=[];
 for(const [fid,f]of Object.entries(after.floors||{}))if(isChild(f)){
  const prior=before.floors?.[fid],host=f.crawlspace.hostFloor,envelope=after.floors[host]?deriveEnvelope(after,host,options):null;
  if(!envelope&&(!prior||prior.crawlspace?.hostFloor!==host))issues.push(issue('missing-host','New or reassigned crawlspaces require an existing main floor.',{floor:fid,hostFloor:host},true));
  if(envelope)issues.push(...envelope.issues);
  for(const r of arr(f.rooms)){
   const old=arr(prior?.rooms).find(q=>q.id===r.id);let changed=!old;
   try{
    if(old)changed=area(shapes().clip.xor(shapes().multi(old),shapes().multi(r)))>EPS;
    const offset=(r.z??z(f))-z(f),oldOffset=old?(old.z??z(prior))-z(prior):null,height=r.height??clear(f),oldHeight=old?(old.height??clear(prior)):null;
    // Inherited default-height changes belong to the floor edit, not the room.
    // Likewise a room and floor moving together retain their relative offset.
    const verticalChanged=!old||!Number.isFinite(offset)||!Number.isFinite(height)||Math.abs(offset-oldOffset)>EPS||r.height!==old.height||Math.abs(height-oldHeight)>EPS&&clear(f)===clear(prior);
    if(!Number.isFinite(offset)||!Number.isFinite(height)||offset<-EPS||offset+height>clear(f)+EPS)issues.push(issue(verticalChanged?'crawl-room-outside-height-band':'child-height-conflict',verticalChanged?'A new or height-edited crawlspace room must fit inside its floor clear-height band.':'An unchanged authored room exceeds the revised crawlspace height band and is retained.',{floor:fid,room:r.id,offset,clearHeight:height,availableClearHeight:clear(f)},verticalChanged));
    const kind=old?(changed?'reshaped':verticalChanged?'height-changed':'unchanged'):'created';
    if(!envelope?.complete){if(changed)issues.push(issue('crawl-room-boundary-unavailable','A new or reshaped crawlspace room needs a valid inherited boundary.',{floor:fid,room:r.id,hostFloor:host},true));mutations.push({floor:fid,room:r.id,kind});continue;}
    const outsideArea=area(shapes().clip.difference(shapes().multi(r),envelope.geometry));
    if(outsideArea>EPS){issues.push(issue(changed?'crawl-room-outside-envelope':'stranded-child',changed?'A new or reshaped crawlspace room must remain inside its inherited footprint.':'An unchanged authored crawlspace room is stranded by a host change and is retained.',{floor:fid,room:r.id,hostFloor:host,outsideArea:round(outsideArea)},changed));mutations.push({floor:fid,room:r.id,kind:changed?kind:'retained-stranded',outsideArea:round(outsideArea)});}
    else if(changed||verticalChanged)mutations.push({floor:fid,room:r.id,kind,outsideArea:0});
   }catch(error){issues.push(issue('mutation-check-incomplete','The changed crawlspace outline could not be compared reliably.',{floor:fid,room:r.id,detail:String(error.message||error)},true));}
  }
  for(const r of arr(prior?.rooms))if(!arr(f.rooms).some(q=>q.id===r.id))mutations.push({floor:fid,room:r.id,kind:'deleted'});
 }
 return{ok:!issues.some(i=>i.blocking),issues,mutations};
}
const api={DEFAULT_CLEAR,DEFAULT_POLICY,isChild,active,children,validate,deriveEnvelope,strandedChildren,classifyMutation,propose,proposeHostHeight};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.KERN_CRAWLSPACES=api;
})(typeof window!=='undefined'?window:globalThis);
