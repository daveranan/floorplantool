/* Metric outline symbols, provisional services and atomic selection transfers. */
(function(root){
'use strict';
const copy=x=>JSON.parse(JSON.stringify(x)),arr=x=>Array.isArray(x)?x:[],round=n=>Math.round(n*1e6)/1e6;
const catalog=[
 ['scanner','Medical scanner',2.4,1.8],['exam','Exam couch',2.1,.8],
 ['decoder','Computing / decoder desk',1.8,.8],['panel','Power panel',1.2,.3],
 ['rack','Equipment rack',.6,1],['tools','Tool / supply storage',1.8,.6],
 ['radio','Radar / communications',1.6,.8],['utility','Utility equipment',1.2,1.2],
 ['core','Core / shaft allowance',2,2]
].map(([kind,name,w,h])=>({kind,name,w,h}));
function bounds(o){
 if(o.text!==undefined){const size=o.fontSize||.45;return{x:o.x-Math.max(1,o.text.length)*size*.29,y:o.y-size,w:Math.max(1,o.text.length)*size*.58,h:size*1.3}}
 if(o.points){const xs=o.points.map(p=>p.x),ys=o.points.map(p=>p.y),half=o.width/2;return{x:Math.min(...xs)-half,y:Math.min(...ys)-half,w:Math.max(...xs)-Math.min(...xs)+o.width,h:Math.max(...ys)-Math.min(...ys)+o.width}}
 if(o.rotationSpace||o.kind==='hatch'||o.kind==='vent'){const a=(o.rotation||0)*Math.PI/180,w=Math.abs(o.w*Math.cos(a))+Math.abs(o.h*Math.sin(a)),h=Math.abs(o.w*Math.sin(a))+Math.abs(o.h*Math.cos(a));return{x:o.x+o.w/2-w/2,y:o.y+o.h/2-h/2,w,h};}return{x:o.x,y:o.y,w:o.w,h:o.h};
}
function transform(o,from,to){
 const sx=to.w/from.w,sy=to.h/from.h,xy=p=>({x:round(to.x+(p.x-from.x)*sx),y:round(to.y+(p.y-from.y)*sy)});
 if(o.points)o.points=o.points.map(xy);else if(o.text!==undefined)Object.assign(o,xy(o),{fontSize:round((o.fontSize||.45)*Math.min(sx,sy))});else Object.assign(o,xy(o),{w:round(o.w*sx),h:round(o.h*sy)});
}
function annotations(plan,fid){const f=plan.floors[fid];if(!f)return[];return [
 ...arr(f.annotations).map((a,i)=>({...a,id:a.id||'annotation-'+fid+'-'+i,fontSize:a.fontSize??.35})),
 ...f.rooms.flatMap(r=>arr(r.zones).map((z,i)=>({id:'zone-'+fid+'-'+r.id+'-'+i,text:String(z.name||''),x:z.x,y:z.y,fontSize:.45,sourceRoom:r.id})))
 ];}
function normalizeAnnotations(plan){for(const fid of Object.keys(plan.floors)){const f=plan.floors[fid],values=annotations(plan,fid);if(values.length||f.annotations)f.annotations=values;for(const r of f.rooms)if(r.zones)delete r.zones;}return plan;}
function validateFloor(f){
 const ids=new Set([...f.rooms.map(r=>r.id),...f.doors.map(d=>d.id)]);
 const number=(v,min,max)=>Number.isFinite(v)&&v>=min&&v<=max&&Math.abs(v*1e6-Math.round(v*1e6))<1e-4;
 for(const key of ['symbols','services','annotations']){
  if(f[key]!==undefined&&(!Array.isArray(f[key])||f[key].length>300))throw Error('Invalid '+key+' collection');
  for(const o of arr(f[key])){
   if(!o||typeof o.id!=='string'||!o.id||o.id.length>150||ids.has(o.id)||key!=='annotations'&&(typeof o.name!=='string'||o.name.length>150))throw Error('Invalid or duplicate '+key+' ID');ids.add(o.id);
   if(o.rotation!==undefined&&!number(o.rotation,0,360))throw Error('Invalid object rotation');
   if(key==='annotations'){if(typeof o.text!=='string'||o.text.length>300||!number(o.x,-150,150)||!number(o.y,-150,150)||!number(o.fontSize,.1,3))throw Error('Invalid annotation');continue;}
   if(key==='symbols'&&!catalog.some(s=>s.kind===o.kind))throw Error('Unknown outline symbol');
   if(key==='services'){
    if(!['duct','crawlway','hatch','vent'].includes(o.kind)||!['overhead','underfloor'].includes(o.location)||!['utility','player','creature'].includes(o.access)||!number(o.z,-150,150)||!number(o.clearHeight,.1,20))throw Error('Invalid service height, location or access');
    if(['duct','crawlway'].includes(o.kind)){
     if(!Array.isArray(o.points)||o.points.length<2||o.points.length>100||!number(o.width,.1,20)||o.points.some(p=>!p||!number(p.x,-150,150)||!number(p.y,-150,150)))throw Error('Invalid service route');
     if(o.points.slice(1).some((p,i)=>p.x===o.points[i].x&&p.y===o.points[i].y))throw Error('Service route has a zero-length segment');
    }else if(o.points)throw Error('A terminal needs a rectangular footprint');
   }
   if(!o.points&&['x','y','w','h'].some(k=>!number(o[k],k==='w'||k==='h'?.1:-150,150)))throw Error('Invalid outline dimensions');
   if(o.rotation!==undefined&&!number(o.rotation,0,360))throw Error('Invalid symbol rotation');
  }
 }
 for(const o of arr(f.services))if(o.routeId!==undefined&&!arr(f.services).some(r=>r.id===o.routeId&&r.points))throw Error('Missing linked service route');
}
function serviceWarnings(o){const out=[];
 if(o.access==='player'&&(o.width??Math.min(o.w,o.h))<.8)out.push('Player route needs the planned 0.80 m clear width.');
 if(o.access==='player'&&o.clearHeight<1.5)out.push('Player route needs the planned 1.50 m clear height.');
 if(o.access==='creature')out.push('Creature-only allowance; no player access implied.');
 out.push('Provisional allowance. Connections, obstructions and runtime traversal are unverified.');return out;
}
function snapshot(plan,fid,selection){
 plan=normalizeAnnotations(copy(plan));
 const f=plan.floors[fid];if(!f)throw Error('Missing source floor');
 const groups=arr(plan.verticalConnections).filter(c=>c.type==='stair'&&arr(c.floors).includes(fid)&&arr(selection.rooms).includes(c.room));
 const roomIds=new Set(arr(selection.rooms)),selectedRooms=f.rooms.filter(r=>roomIds.has(r.id));
 if(selectedRooms.some(r=>r.linkedSource||r.locked&&!groups.some(c=>c.room===r.id)||Object.values(plan.floors).some(l=>l.rooms.some(q=>q.linkedSource?.floor===fid&&q.linkedSource.room===r.id))||r.type==='courtyard'||r.type==='solid'||r.type==='void'))throw Error('Source-linked or protected footprints require Duplicate building.');
 const levels={},put=id=>levels[id]||(levels[id]={rooms:[],doors:[],symbols:[],services:[],annotations:[],entrances:[],externals:[]});
 put(fid).rooms=copy(selectedRooms);for(const r of put(fid).rooms)if(r.routeStair){const E=root.KERN_ELEVATIONS||(typeof require==='function'?require('./elevation.js'):null),q=r.routeStair;q.startZ=E.value(plan,q.start,q.startZ);q.endZ=E.value(plan,q.end,q.endZ);}
 for(const c of groups)for(const id of c.floors){const r=plan.floors[id]?.rooms.find(r=>r.id===c.room);if(!r)throw Error('Stair stack has a missing floor footprint');if(!put(id).rooms.some(q=>q.id===r.id))put(id).rooms.push(copy(r));}
 let omitted=0;
 for(const [id,data]of Object.entries(levels)){
  const source=plan.floors[id],rs=new Set(data.rooms.map(r=>r.id));
  for(const d of source.doors){const explicit=id===fid&&arr(selection.doors).includes(d.id),internal=rs.has(d.a)&&(d.b==='outside'||rs.has(d.b));if(internal)data.doors.push(copy(d));else if(explicit){if(rs.size)throw Error('Include both rooms attached to a selected connection.');data.doors.push(copy(d));}else if(rs.has(d.a)||rs.has(d.b))omitted++;}
  data.entrances=source.entrances.filter(x=>rs.has(x));
  data.externals=arr(source.externals||[source.external].filter(Boolean)).filter(e=>rs.has(e.room)).map(copy);
  if(id===fid&&!rs.size){const geometry=root.KERN_CONNECTIONS||(typeof require==='function'?require('./geometry.js'):null);for(const d of geometry?.legacy(source)||[])if(arr(selection.doors).includes(d.id))data.doors.push({...copy(d),legacyExterior:true});}
 }
 for(const key of ['symbols','services','annotations'])put(fid)[key]=arr(f[key]).filter(o=>arr(selection[key]).includes(o.id)).map(copy);
 const ids=new Set(put(fid).services.map(o=>o.id));for(const o of put(fid).services)if(o.routeId&&!ids.has(o.routeId))delete o.routeId;
 if(!Object.values(levels).some(l=>l.rooms.length+l.doors.length+l.symbols.length+l.services.length+l.annotations.length))throw Error('Select objects to copy.');
 const splits=arr(plan.splitLevelConnections).filter(c=>c.floor===fid&&roomIds.has(c.room)).map(copy);
 return {version:1,sourceFloor:fid,sourceZ:f.z||0,selection:copy(selection),levels,connections:copy(groups),splits,omitted};
}
function remove(plan,bundle){
 const next=normalizeAnnotations(copy(plan)),removedStacks=new Set(bundle.connections.map(c=>c.id));
 for(const [fid,data]of Object.entries(bundle.levels)){
  const f=next.floors[fid];if(!f)throw Error('Source floor no longer exists');const rs=new Set(data.rooms.map(r=>r.id)),ds=new Set(data.doors.map(d=>d.id));
  if(data.rooms.some(r=>r.locked&&!bundle.connections.some(c=>c.room===r.id)))throw Error('Protected rooms cannot be cut or moved.');
  f.rooms=f.rooms.filter(r=>!rs.has(r.id));f.doors=f.doors.filter(d=>!ds.has(d.id)&&!rs.has(d.a)&&!rs.has(d.b));f.entrances=f.entrances.filter(r=>!rs.has(r));
  if(f.externals)f.externals=f.externals.filter(e=>!rs.has(e.room));if(f.external&&rs.has(f.external.room))delete f.external;
  if(data.doors.some(d=>d.legacyExterior)){const removeIds=new Set(data.doors.filter(d=>d.legacyExterior).map(d=>d.id));if(f.externals)f.externals=f.externals.filter((e,i)=>!removeIds.has('legacy-exterior-'+i+'-'+e.room));else if(f.external&&removeIds.has('legacy-exterior-0-'+f.external.room))delete f.external;}
  for(const key of ['symbols','services','annotations'])if(f[key])f[key]=f[key].filter(o=>!data[key].some(q=>q.id===o.id));
  for(const o of arr(f.services))if(o.routeId&&!f.services.some(r=>r.id===o.routeId))delete o.routeId;
 }
 if(next.verticalConnections)next.verticalConnections=next.verticalConnections.filter(c=>!removedStacks.has(c.id));
 if(next.splitLevelConnections)next.splitLevelConnections=next.splitLevelConnections.filter(c=>!bundle.splits.some(q=>q.id===c.id));
 return next;
}
function paste(plan,bundle,target,offset={x:1,y:1}){
 if(!plan.floors[target])throw Error('Choose an existing destination floor');
 if(bundle.connections.some(c=>!c.floors.includes(target)))throw Error('This stair stack has no destination on '+target+'. Use Edit connected floors.');
 const next=normalizeAnnotations(copy(plan)),used=new Set(Object.values(next.floors).flatMap(f=>[...f.rooms,...f.doors,...arr(f.symbols),...arr(f.services),...arr(f.annotations)].map(o=>o.id)).concat(arr(next.verticalConnections).map(c=>c.id),arr(next.splitLevelConnections).map(c=>c.id))),map=new Map();let serial=1;
 const fresh=id=>{if(map.has(id))return map.get(id);let value;do{value='copy-'+id+'-'+serial++}while(used.has(value));used.add(value);map.set(id,value);return value};
 for(const c of bundle.connections)fresh(c.id);
 for(const l of Object.values(bundle.levels))for(const key of ['rooms','doors','symbols','services','annotations'])for(const o of l[key])fresh(o.id);
 const shifted=o=>{const q=copy(o);q.id=fresh(o.id);if(q.points)q.points=q.points.map(p=>({x:round(p.x+offset.x),y:round(p.y+offset.y)}));else if(Number.isFinite(q.x)){q.x=round(q.x+offset.x);q.y=round(q.y+offset.y)}return q};
 const selection={rooms:[],doors:[]},notes=[];
 for(const [origin,data]of Object.entries(bundle.levels)){
  const dest=origin===bundle.sourceFloor?target:origin,level=next.floors[dest];if(!level)throw Error('A copied stair destination is missing');
  const stackRooms=data.rooms.filter(r=>bundle.connections.some(c=>c.room===r.id)),normalRooms=data.rooms.filter(r=>!stackRooms.includes(r));
  const groups=stackRooms.length&&origin===bundle.sourceFloor&&target!==origin?[{dest:origin,rooms:stackRooms},{dest,rooms:normalRooms}]:[{dest,rooms:data.rooms}];
  for(const g of groups)for(const r of g.rooms){const q=shifted(r),dl=next.floors[g.dest];if(q.editGroup)q.editGroup=map.get(q.editGroup)||q.editGroup;if(q.stairStackId)q.stairStackId=map.get(q.stairStackId)||q.stairStackId;delete q.stairOriginal;if(q.cutoutFor)q.cutoutFor=q.cutoutFor.map(id=>map.get(id)).filter(Boolean);if(q.routeStair){const route=q.routeStair,dz=(dl.z||0)-bundle.sourceZ;route.startZ=round(route.startZ+dz);route.endZ=round(route.endZ+dz);route.hostRoom=map.get(route.hostRoom);for(const key of ['start','end']){const ref=route[key];if(!ref)continue;if(ref.kind==='room'&&map.has(ref.room)){ref.room=map.get(ref.room);ref.floor=g.dest;}else if(ref.kind==='floor'){ref.floor=g.dest;}else{delete route[key];notes.push('Stair endpoint kept at its copied height; choose a new surface to link it');}}}
   if(Number.isFinite(q.z)&&!stackRooms.includes(r))q.z=round(q.z+(dl.z||0)-bundle.sourceZ);dl.rooms.push(q);if(g.dest===target)selection.rooms.push(q.id);
  }
  for(const d of data.doors){const q=copy(d);q.id=fresh(d.id);const doorDest=bundle.connections.some(c=>c.room===d.a||c.room===d.b)?origin:dest,df=next.floors[doorDest];
   if(!data.rooms.length){if(origin!==target)throw Error('Copy the attached rooms to paste a connection on another floor.');q.offset=Math.max(0,Math.min(1,q.offset+.1));}
   q.a=map.get(d.a)||d.a;q.b=d.b==='outside'?'outside':map.get(d.b)||d.b;if(!df.rooms.some(r=>r.id===q.a)||q.b!=='outside'&&!df.rooms.some(r=>r.id===q.b))throw Error('Connection endpoints are missing');df.doors.push(q);if(doorDest===target)selection.doors.push(q.id);
  }
  for(const key of ['symbols','services','annotations'])for(const o of data[key]){const q=shifted(o);if(key==='services'){q.z=round(q.z+(level.z||0)-bundle.sourceZ);if(q.routeId)q.routeId=map.get(q.routeId);q.provisional=true;q.runtimeTested=false;}if(q.sourceRoom)delete q.sourceRoom;level[key]??=[];level[key].push(q);(selection[key]??=[]).push(q.id);}
  for(const id of data.entrances){const roomDest=bundle.connections.some(c=>c.room===id)?origin:dest,df=next.floors[roomDest],rid=fresh(id);if(df.rooms.some(r=>r.id===rid)&&!df.entrances.includes(rid))df.entrances.push(rid);}
  for(const e of data.externals){const q=copy(e);q.room=fresh(e.room);level.externals??=[];level.externals.push(q);}
 }
 for(const c of bundle.connections){const q=copy(c);q.id=fresh(c.id);q.room=fresh(c.room);q.authoringVersion=1;const shiftBox=b=>({...b,x:round(b.x+offset.x),y:round(b.y+offset.y)});if(q.footprint)q.footprint=shiftBox(q.footprint);if(q.footprints)for(const f of Object.keys(q.footprints))q.footprints[f]=shiftBox(q.footprints[f]);next.verticalConnections??=[];next.verticalConnections.push(q);const rid=q.room;if(next.floors[target].rooms.some(r=>r.id===rid)&&!selection.rooms.includes(rid))selection.rooms.push(rid);notes.push('Stair destinations retained: '+q.floors.join(', '));}
 for(const c of bundle.splits){const q=copy(c),dz=(next.floors[target].z||0)-bundle.sourceZ;q.id=fresh(c.id);q.room=fresh(c.room);q.floor=target;if(q.localSteps)for(const key of ['start','end']){const ref=q[key];if(!ref||ref.kind==='site')continue;if(ref.kind==='room'&&map.has(ref.room)){ref.room=map.get(ref.room);ref.floor=target;}else if(ref.kind==='floor')ref.floor=target;else {q[key]=null;notes.push('Uncopied local-step surface link removed');}}if(Number.isFinite(q.lowerZ))q.lowerZ=round(q.lowerZ+dz);if(Number.isFinite(q.upperZ))q.upperZ=round(q.upperZ+dz);if(q.route)delete q.route;next.splitLevelConnections??=[];next.splitLevelConnections.push(q);const r=next.floors[target].rooms.find(r=>r.id===q.room);if(r){if(Number.isFinite(r.lowerZ))r.lowerZ=round(r.lowerZ+dz);if(Number.isFinite(r.upperZ))r.upperZ=round(r.upperZ+dz);}}
 for(const f of Object.values(next.floors)){if(f.rooms.length>300||f.doors.length>600)throw Error('Destination floor has too many objects');validateFloor(f);for(const r of f.rooms)if(Math.abs(r.x)>150||Math.abs(r.y)>150)throw Error('Keep copied objects within ±150 m.');}
 return{plan:next,selection,notes};
}
function move(plan,fid,selection,target){if(target===fid)throw Error('Choose another floor');const bundle=snapshot(plan,fid,selection);if(bundle.connections.length)throw Error('Linked stairs move as a complete stack. Use Edit connected floors to change floor destinations.');return paste(remove(plan,bundle),bundle,target,{x:0,y:0});}
const api={catalog,bounds,transform,annotations,normalizeAnnotations,validateFloor,serviceWarnings,snapshot,remove,paste,move};root.KERN_OBJECTS=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
