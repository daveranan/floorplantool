/* Shared field semantics for floor-qualified multi-selection.
 * Blank mixed fields are display-only. A changed field produces a validated
 * proposal and one document transaction; translation is a separate operation.
 */
(function(){
'use strict';
const L=window.KERN_LAYERS,number=Number.isFinite,eq=(a,b)=>typeof a==='number'&&typeof b==='number'?Math.abs(a-b)<1e-6:a===b;
const key=r=>JSON.stringify([r.floor,r.kind,r.id]);
// Native change/blur can run synchronously while Chromium removes a focused node.
// Never rebuild this inspector inside that event or accept removal-triggered edits.
let painting=0,changing=0,repaintQueued=false;
const editors=new WeakMap();
function repaintLater(){if(repaintQueued)return;repaintQueued=true;queueMicrotask(()=>{repaintQueued=false;if(window.document?.body)render();});}

function refs(){return L.references();}
function resolve(ref,plan=model){const f=plan.floors[ref.floor];return (ref.kind==='doors'?allConnections(f):ref.kind==='annotations'?(f?.annotations?.some(o=>o.id===ref.id)?f.annotations:window.KERN_OBJECTS.annotations(plan,ref.floor)):f?.[ref.kind]||[]).find(o=>o.id===ref.id);}
function context(fid,fn){const old=floorId;try{floorId=fid;return fn();}finally{floorId=old;}}
const stair=e=>e.ref.kind==='rooms'&&(e.o.routeStair||e.o.localSteps||isStair(e.o,e.ref.floor));
function entries(selection=refs()){return selection.map(ref=>({ref,o:resolve(ref),f:model.floors[ref.floor]})).filter(e=>e.o);}
function guard(ref,o,{generated=false}={}){
 if(!L.available(ref.kind,ref.id,ref.floor))throw Error('Show and unlock '+ref.id+' on '+ref.floor+' before editing.');
 if(o.hidden)throw Error((o.name||ref.id)+' is hidden.');
 if(ref.kind==='rooms'){
  const source=sourceFor(o,ref.floor);
  if(source&&!generated)throw Error((o.name||ref.id)+' follows its source on '+source.floor+'. Edit that source instead.');
  if(o.locked&&!source&&!isStair(o,ref.floor)&&!isSourceRoom(o,ref.floor))throw Error((o.name||ref.id)+' is locked. Unlock the space first.');
  if(o.type==='void'&&!source&&!window.KERN_CONCRETE_CAPS?.independent(o))throw Error('This void footprint is read-only.');
 }else if(o.locked)throw Error((o.name||ref.id)+' is locked.');
}
function preflight(){
 if(window.KERN_WORKSPACE?.isHome()||window.KERN_EXPLORER?.active)throw Error('Return to the editing workspace first.');
 if(buildingState.locked||$('saved').dataset.state==='error')throw Error('Resolve the saving problem or back up your work before editing.');
 if(localStorage.getItem(window.KERN_BUILDINGS.KEY)!==buildingState.baseline)throw Error('Saved buildings changed in another tab. Back up your work and reload.');
}
function roomSet(e,k,v){const r=e.o;
 if(k==='offset'||k==='z'){window.KERN_ELEVATIONS.roomMove(model,e.ref.floor,r.id,k==='offset'?e.f.z+v:v);return;}
 if(k==='heightDefault'){if(v)delete r.height;else r.height=e.f.clearHeight??3;return;}
 if(k==='entrance'){e.f.entrances=(e.f.entrances||[]).filter(id=>id!==r.id);if(v)e.f.entrances.push(r.id);return;}
 if(k==='type'){const option=roomTypeOption(r,v);if(!option.valid)throw Error(option.reason);const linked=groupRefs(stairGroup(r));for(const target of linked.length?linked.map(x=>x.room):[r])window.KERN_CONCRETE_CAPS.setType(target,v);return;}
 r[k]=v;if(k==='name'&&r.diagramLabel!==undefined)r.diagramLabel=v;
 if(['x','y','w','h'].includes(k))syncStairEdit(r);
}
function doorSet(e,k,v){const d=e.o,g=doorGeometry(d);
 if(k==='type'){
  const next=connectionWithType(d,v);next.width=d.width;next.offset=d.offset;
  if(next.kind!=='window'&&[d.a,d.b].some(id=>['void','solid'].includes(room(id)?.type)))throw Error('A door or passage needs circulation rooms on both sides.');
  Object.assign(d,next);const target=d.legacyExternal||d;for(const p of ['leaves','fullWidth','openingPreset','limitedHeight','maximumPassage','maximumWallOffset','wrap','sill','windowCount'])if(next[p]===undefined)delete target[p];
 }else if(k==='wrap'){
  const S=window.KERN_SHAPES,host=room(d.a),center=g&&connectionCenter(g);if(!host||!center)throw Error('Move this window onto a valid wall first.');
  d.wrap=v;if(v)d.offset=S.pathPosition(host,center).offset;else{const edge=S.edges(host).filter(e=>!e.curved).sort((a,b)=>S.project(center,a).distance-S.project(center,b).distance)[0];if(!edge)throw Error('Move this window onto a straight wall first.');d.edge=edge.id;const wall=S.wall(d,floor()),u=wall.u||(wall.axis==='h'?[1,0]:[0,1]),length=wall.hi-wall.lo-d.width-.2;d.offset=length>0?Math.max(0,Math.min(1,(center.x*u[0]+center.y*u[1]-d.width/2-wall.lo-.1)/length)):.5;}
 }else if(k==='offset')d.offset=v/100;else d[k]=v;
 // Width edits hold the existing centre on exposed/nested walls.
 if(['width','type'].includes(k)&&g&&(exteriorDoor(d)||g.nested)&&!d.wrap)d.offset=offsetAt(d,g,connectionCenter(g));
}
function prepareShape(e){const S=window.KERN_SHAPES;for(const d of allConnections(e.f))if(d.a===e.o.id&&!d.edge){const g=S.wall(d,e.f);if(g)d.edge=g.edge;}if(!e.o.shape)e.o.shape={vertices:S.vertices(e.o).map(q=>({...q,r:0}))};}
function stackSet(e,k,v){
 const A=window.KERN_STAIR_AUTHOR,c=A.linked(model,e.ref.floor,e.o.id);if(!c)throw Error('Edit this legacy stair in its connected-floor editor.');
 const r=e.o,input={floorId:e.ref.floor,roomId:r.id,name:r.name,x:r.x,y:r.y,w:r.w,h:r.h,floors:c.floors,runAxis:r.runAxis||c.runAxis||'x',landingEnd:r.landingEnd||c.landingEnd||'west',stairType:r.stairType||c.stairType||'switchback',spiralHand:r.spiralHand||c.spiralHand||'right',[k]:v};
 if(k==='runAxis')input.landingEnd=v==='x'?'west':'north';
 const q=A.prepare(model,input);for(const fid of q.floors){const d=window.KERN_STAIR_DETAIL.build(q.plan,fid,q.roomId);if(!d?.fit||d.warnings?.some(w=>w.severity==='error'&&!['no-door','door-landing','shaft-blocked'].includes(w.code)))throw Error('The selected stair does not fit this configuration. Use Edit connected floors to review its dimensions.');}
 Object.assign(model,q.plan);
}
function defaultSet(e,k,v){if(e.ref.kind==='rooms')roomSet(e,k,v);else if(e.ref.kind==='doors')doorSet(e,k,v);else if(e.ref.kind==='primitives'&&e.o.wall){const n=window.KERN_THIN_WALLS.normalizeEdit(e.o,{[k]:v});if(['x','y'].includes(k))n[k]=window.KERN_THIN_WALLS.quarter(v);Object.assign(e.o,n);}else if(k==='routeId'){if(v)e.o.routeId=v;else delete e.o.routeId;}else e.o[k]=v;}
function fields(selection=refs()){
 const list=entries(selection),out=[];
 function add(id,section,label,filter,k,options={}){const items=list.filter(filter);if(!items.length)return;out.push({id,section,label,k,items,type:'number',get:e=>e.o[k],set:(e,v)=>defaultSet(e,k,v),...options});}
 const kind=k=>e=>e.ref.kind===k,rooms=kind('rooms'),regular=e=>rooms(e)&&!stair(e)&&e.o.type!=='void',volumes=e=>regular(e)&&!e.o.outdoor&&!['terrace','courtyard'].includes(e.o.type),doors=kind('doors'),primitives=kind('primitives'),symbols=kind('symbols'),services=kind('services'),annotations=kind('annotations');
 const numeric=(id,section,label,filter,k,min=-150,max=150,extra={})=>add(id,section,label,filter,k,{min,max,...extra});
 const text=(id,section,label,filter,k,extra={})=>add(id,section,label,filter,k,{type:'text',maxLength:150,...extra});
 const choose=(id,section,label,filter,k,choices,extra={})=>add(id,section,label,filter,k,{type:'select',choices,...extra});
 const yesno=(id,section,label,filter,k,extra={})=>choose(id,section,label,filter,k,[[true,'Yes'],[false,'No']],{get:e=>!!e.o[k],...extra});
 text('rooms.name','Rooms','Label',rooms,'name');
 choose('rooms.type','Rooms','Room type',rooms,'type',roomTypes.map(v=>[v,roomTypeLabels[v]]));
 for(const [k,label]of [['x','X position'],['y','Y position'],['w','Width'],['h','Depth']])numeric('rooms.'+k,'Rooms',label+' · m',rooms,k,k==='w'||k==='h'?1:-150,150);
 numeric('rooms.offset','Room surfaces','Offset from own floor · m',regular,'offset',-150,150,{get:e=>cleanNumber((e.o.z??e.f.z)-e.f.z)});
 numeric('rooms.z','Room surfaces','Absolute surface elevation · m',regular,'z',-150,150,{get:e=>e.o.z??e.f.z});
 numeric('rooms.height','Room surfaces','Clear height / solid thickness · m',volumes,'height',.5,50,{get:e=>e.o.height??e.f.clearHeight??3,needsChange:(e,v)=>e.o.height===undefined||!eq(e.o.height,v)});
 yesno('rooms.heightDefault','Room surfaces','Use own floor’s default height',volumes,'heightDefault',{get:e=>e.o.height===undefined});
 yesno('rooms.entrance','Rooms','Floor entrance / arrival',e=>rooms(e)&&!['void','solid'].includes(e.o.type),'entrance',{get:e=>(e.f.entrances||[]).includes(e.o.id)});
 text('doors.label','Openings','Label',doors,'label',{get:e=>e.o.label||''});
 const types=[['single','Single door'],['double','Double door'],['open','Open passage'],['window','Window / series'],...Object.entries(window.KERN_LOW_OPENINGS.PRESETS).map(([v,p])=>[v,p.label])];
 choose('doors.type','Openings','Opening type',e=>doors(e)&&!e.o.maximumPassage,'type',types,{get:e=>e.o.openingPreset||doorType(e.o)});
 numeric('doors.width','Openings','Total clear width · m',e=>doors(e)&&!isFullOpen(e.o)&&!e.o.maximumPassage,'width',.5,8);
 numeric('doors.offset','Openings','Position along wall · %',e=>doors(e)&&!isFullOpen(e.o)&&!e.o.maximumPassage,'offset',0,100,{get:e=>(e.o.offset??.5)*100});
 numeric('doors.height','Openings','Clear opening height · m',e=>doors(e)&&(e.o.kind!=='open'||window.KERN_LOW_OPENINGS.limited(e.o)),'height',.2,12,{get:e=>e.o.height??(e.o.kind==='window'?1.4:2.2)});
 numeric('windows.sill','Windows','Sill · m',e=>doors(e)&&e.o.kind==='window','sill',0,12,{get:e=>e.o.sill??.9});
 numeric('windows.windowCount','Windows','Windows in series',e=>doors(e)&&e.o.kind==='window','windowCount',1,12,{integer:true,get:e=>e.o.windowCount??1});
 yesno('windows.wrap','Windows','Follow corners',e=>doors(e)&&e.o.kind==='window'&&exteriorDoor(e.o),'wrap');
 yesno('doors.sealed','Openings','Sealed / discoverable',doors,'sealed');
 yesno('doors.fullWidth','Openings','Entire shared wall open',e=>doors(e)&&e.o.kind==='open'&&!exteriorDoor(e.o)&&!e.o.maximumPassage&&!e.o.limitedHeight,'fullWidth',{get:e=>isFullOpen(e.o)});
 text('primitives.name','Shapes / thin walls','Name',primitives,'name');
 for(const [k,label,min,max]of [['x','X position',-150,150],['y','Y position',-150,150],['z','Height above own floor',-150,150],['w','Width / wall length',.02,150],['h','Depth / wall thickness',.02,150],['height','Shape / wall height',.02,150],['rotation','Turn · °',-360,360]])numeric('primitives.'+k,'Shapes / thin walls',label+(k==='rotation'?'':' · m'),primitives,k,min,max);
 for(const k of ['tiltX','tiltY'])numeric('primitives.'+k,'Shapes / thin walls',k==='tiltX'?'Tilt X · °':'Tilt Y · °',e=>primitives(e)&&!e.o.wall,k,-360,360);
 text('primitives.color','Shapes / thin walls','Colour · #rrggbb',primitives,'color',{pattern:/^#[\da-f]{6}$/i,get:e=>e.o.color||'#d6a46b'});
 text('symbols.name','Outline items','Label',symbols,'name');
 choose('symbols.kind','Outline items','Item type',symbols,'kind',window.KERN_OBJECTS.catalog.map(o=>[o.kind,o.name]));
 for(const [k,label,min]of [['x','X position',-150],['y','Y position',-150],['w','Width',.1],['h','Depth',.1],['rotation','Turn · °',0]])numeric('symbols.'+k,'Outline items',label+(k==='rotation'?'':' · m'),symbols,k,min,k==='rotation'?360:150,{get:e=>e.o[k]??0,set:(e,v)=>{if(k==='rotation')window.KERN_ROTATE.prepare(e.o,'symbols');e.o[k]=v;}});
 text('services.name','Services','Label',services,'name');
 choose('service-routes.kind','Service routes','Route type',e=>services(e)&&!!e.o.points,'kind',[['duct','Utility duct'],['crawlway','Crawlway']]);
 choose('service-terminals.kind','Service terminals','Terminal type',e=>services(e)&&!e.o.points,'kind',[['hatch','Access hatch'],['vent','Vent terminal']]);
 numeric('services.width','Service routes','Clear width · m',e=>services(e)&&!!e.o.points,'width',.1,20);
 for(const [k,label,min]of [['x','X position',-150],['y','Y position',-150],['w','Width',.1],['h','Depth',.1]])numeric('service-terminals.'+k,'Service terminals',label+' · m',e=>services(e)&&!e.o.points,k,min,150);
 numeric('services.z','Services','Absolute bottom elevation · m',services,'z',-150,150);
 numeric('services.clearHeight','Services','Clear height · m',services,'clearHeight',.1,20);
 choose('services.location','Services','Location',services,'location',[['overhead','Overhead'],['underfloor','Underfloor']]);
 choose('services.access','Services','Use',services,'access',[['utility','Utilities only'],['player','Player · crouched'],['creature','Creature only']]);
 const terminalFloors=[...new Set(list.filter(e=>services(e)&&!e.o.points).map(e=>e.ref.floor))];if(terminalFloors.length===1)choose('service-terminals.routeId','Service terminals','Linked route',e=>services(e)&&!e.o.points,'routeId',[['','None'],...(model.floors[terminalFloors[0]].services||[]).filter(o=>o.points).map(o=>[o.id,o.name])],{get:e=>e.o.routeId||''});
 text('annotations.text','Annotations','Text',annotations,'text',{maxLength:300});
 for(const [k,label,min,max]of [['x','X position',-150,150],['y','Y position',-150,150],['fontSize','Text size',.1,3],['rotation','Turn · °',0,360]])numeric('annotations.'+k,'Annotations',label+(k==='rotation'?'':' · m'),annotations,k,min,max,{get:e=>e.o[k]??(k==='fontSize'?.35:0)});
 const boundaries=e=>regular(e)&&window.KERN_WALL_EDGES.supported(e.o)&&!isSourceRoom(e.o,e.ref.floor)&&!['solid','void'].includes(e.o.type);
 choose('walls.mode','Room boundaries','All boundary walls',boundaries,'mode',[['full','Full'],['half','Half / low'],['none','None']],{get:e=>{const modes=window.KERN_SHAPES.edges(e.o).map(edge=>window.KERN_WALL_EDGES.mode(e.o,window.KERN_WALL_EDGES.edgeKey(edge.id)));return modes.every(v=>v===modes[0])?modes[0]:'__mixed__';},set:(e,v)=>{e.o.walls={mode:v,lowHeight:e.o.walls?.lowHeight??1.1,edges:{}};}});
 numeric('walls.lowHeight','Room boundaries','Low wall height · m',boundaries,'lowHeight',.1,3,{get:e=>e.o.walls?.lowHeight??1.1,set:(e,v)=>{e.o.walls={mode:e.o.walls?.mode||window.KERN_WALL_EDGES.defaults(e.o).mode,edges:{...(e.o.walls?.edges||{})},lowHeight:v};}});
 const shaped=e=>regular(e)&&!e.o.stairTransition;
 const rotation=e=>{const p=window.KERN_SHAPES.raw(e.o);return (Math.atan2(p[1][1]-p[0][1],p[1][0]-p[0][0])*180/Math.PI+360)%360;};
 numeric('rooms.rotation','Room corners','Rotation · °',shaped,'rotation',-360,360,{get:rotation,set:(e,v)=>{window.KERN_ROTATE.prepare(e.o,'rooms');window.KERN_SHAPES.rotate(e.o,v-rotation(e));syncStairEdit(e.o);}});
 const cornerValues=e=>window.KERN_SHAPES.vertices(e.o);
 choose('corners.style','Room corners','All corners · style',shaped,'corner',[['square','Square'],['round','Rounded'],['chamfer','Chamfer']],{get:e=>{const vs=cornerValues(e).map(v=>v.corner||(v.r?'round':'square'));return vs.every(v=>v===vs[0])?vs[0]:'__mixed__';},set:(e,v)=>{prepareShape(e);for(const q of e.o.shape.vertices){q.corner=v;q.r=v==='square'?0:q.r||1;}syncStairEdit(e.o);}});
 numeric('corners.radius','Room corners','All corners · radius / cutback · m',shaped,'radius',0,50,{get:e=>{const vs=cornerValues(e).map(v=>v.r||0);return vs.every(v=>eq(v,vs[0]))?vs[0]:'__mixed__';},set:(e,v)=>{prepareShape(e);for(const q of e.o.shape.vertices){q.r=v;if(!q.corner||q.corner==='square')q.corner=v?'round':'square';}syncStairEdit(e.o);}});
 const stacks=e=>rooms(e)&&!!window.KERN_STAIR_AUTHOR.linked(model,e.ref.floor,e.o.id);
 for(const [k,label,choices,fallback]of [['stairType','Stair type',[['switchback','Switchback / dogleg'],['straight','Straight'],['spiral','Spiral']],'switchback'],['runAxis','Flight direction',[['x','Along width · east / west'],['y','Along depth · north / south']],'x'],['spiralHand','Spiral ascent',[['right','Clockwise'],['left','Counterclockwise']],'right']])choose('stacks.'+k,'Connected stairs',label,e=>stacks(e)&&(k!=='spiralHand'||(e.o.stairType||window.KERN_STAIR_AUTHOR.linked(model,e.ref.floor,e.o.id)?.stairType)==='spiral'),k,choices,{get:e=>e.o[k]||window.KERN_STAIR_AUTHOR.linked(model,e.ref.floor,e.o.id)?.[k]||fallback,set:(e,v)=>stackSet(e,k,v)});
 for(const [axis,choices]of [['x',[['west','West'],['east','East']]],['y',[['north','North'],['south','South']]]])choose('stacks.landingEnd'+axis.toUpperCase(),'Connected stairs','Arrival end · '+axis.toUpperCase()+'-direction stairs',e=>stacks(e)&&(e.o.runAxis||window.KERN_STAIR_AUTHOR.linked(model,e.ref.floor,e.o.id)?.runAxis||'x')===axis,'landingEnd',choices,{get:e=>e.o.landingEnd||window.KERN_STAIR_AUTHOR.linked(model,e.ref.floor,e.o.id)?.landingEnd||(axis==='x'?'west':'north'),set:(e,v)=>stackSet(e,'landingEnd',v)});
 const localConnection=e=>(model.splitLevelConnections||[]).find(c=>c.localSteps&&c.floor===e.ref.floor&&c.room===e.o.id),locals=e=>rooms(e)&&!e.o.routeStair&&!!localConnection(e);
 choose('local-steps.facing','Local steps','Facing / run direction',locals,'facing',[['east','East'],['west','West'],['south','South'],['north','North']],{get:e=>{const c=localConnection(e);return c.runAxis==='x'?(c.landingEnd==='west'?'east':'west'):(c.landingEnd==='north'?'south':'north');},set:(e,v)=>{const c=localConnection(e),[axis,end]=({east:['x','west'],west:['x','east'],south:['y','north'],north:['y','south']})[v];c.runAxis=e.o.runAxis=axis;c.landingEnd=e.o.landingEnd=end;}});
 for(const [end,k]of [['start','lowerZ'],['end','upperZ']])numeric('local-steps.'+k,'Local steps',(end==='start'?'Start':'End')+' elevation · m (unlinked)',e=>locals(e)&&!localConnection(e)[end],k,-150,150,{get:e=>localConnection(e)[k],set:(e,v)=>{localConnection(e)[k]=v;}});
 const routes=e=>rooms(e)&&!!e.o.routeStair;
 choose('stairs.surface','Route paths','Path surface',routes,'surface',[['stairs','Stair'],['ramp','Ramp']],{get:e=>e.o.routeStair.surface||'stairs',set:(e,v)=>{e.o.routeStair.surface=v;}});
 for(const [k,label,min,max,fallback]of [['width','Default path width · m',.8,20,null],['minHeadroom','Cutout headroom · m',.5,5,2.2]])numeric('stairs.'+k,'Route paths',label,routes,k,min,max,{get:e=>k==='minHeadroom'?window.KERN_ELEVATIONS.cutHeadroom(e.o.routeStair[k]??e.o.stairDesign?.minHeadroom??model.stairDesign?.minHeadroom):e.o.routeStair[k]??fallback,set:(e,v)=>{const q=e.o.routeStair;if(k==='width')q.landingDepth??=q.width;q[k]=v;}});
 for(const end of ['start','end'])numeric('stairs.'+end+'Z','Route paths',(end==='start'?'Start':'End')+' elevation · m (unlinked)',e=>routes(e)&&!e.o.routeStair[end],end+'Z',-150,150,{get:e=>e.o.routeStair[end+'Z'],set:(e,v)=>window.KERN_ROUTE_STAIRS.setHeight(e.o,end==='start'?0:e.o.routeStair.nodes.length-1,v,model)});
 return out;
}
function state(field){const values=field.items.map(field.get),mixed=values.some(v=>v==='__mixed__'||!eq(v,values[0]));return{mixed,value:mixed?'':values[0]};}
function parse(field,raw){
 if(raw===undefined||raw===null||typeof raw==='string'&&raw.trim()===''&&field.type==='number')return{skip:true};
 if(field.type==='number'){const value=typeof raw==='number'?raw:Number(raw);if(!number(value)||value<field.min||value>field.max||field.integer&&!Number.isInteger(value))throw Error(field.label+': use '+(field.integer?'a whole number':'a number')+' from '+field.min+' to '+field.max+'.');return{value:cleanNumber(value)};}
 if(field.type==='select'){const pair=field.choices.find(([v])=>String(v)===String(raw));if(!pair)throw Error('Choose a valid '+field.label.toLowerCase()+'.');return{value:pair[0]};}
 const value=String(raw);if(value.length>field.maxLength||field.pattern&&!field.pattern.test(value))throw Error(field.pattern?'Use a colour such as #d6a46b.':'Use at most '+field.maxLength+' characters.');return{value};
}
function signature(){return currentBuilding().id+':'+JSON.stringify(refs());}
function apply(id,raw,scope){
 const selection=refs(),original=model,active=floorId;
 try{
  if(scope&&(scope.signature!==signature()||scope.model!==model))throw Error('The selection changed. Edit the current selection instead.');
  preflight();const field=fields(selection).find(f=>f.id===id);if(!field)throw Error('This field does not apply to the current selection.');const parsed=parse(field,raw);if(parsed.skip)return true;const value=parsed.value;
  const targets=field.items.filter(e=>field.needsChange?field.needsChange(e,value):!eq(field.get(e),value));if(!targets.length)return true;
  for(const e of field.items)guard(e.ref,e.o);
  let proposal=clone(model);const validDoors=validDoorSnapshot(model);
  try{
   model=proposal;for(const fid of new Set(targets.filter(e=>e.ref.kind==='annotations').map(e=>e.ref.floor)))window.KERN_OBJECTS.normalizeAnnotations({floors:{[fid]:model.floors[fid]}});
   for(const item of targets){const e={ref:item.ref,o:resolve(item.ref),f:model.floors[item.ref.floor]};context(item.ref.floor,()=>field.set(e,value));}
   window.KERN_ELEVATIONS.sync(model);validateImport(model);proposal=model;
   // Derived ownership may touch other floors. Guard every changed object,
   // including linked stairs, caps and route endpoints, before committing.
   for(const [fid,f]of Object.entries(model.floors))for(const kind of ['rooms','doors','symbols','services','annotations','primitives']){
    const before=kind==='doors'?allConnections(original.floors[fid]):kind==='annotations'?window.KERN_OBJECTS.annotations(original,fid):original.floors[fid]?.[kind]||[];
    const after=kind==='doors'?allConnections(f):kind==='annotations'?window.KERN_OBJECTS.annotations(model,fid):f[kind]||[];
    for(const o of after){const prior=before.find(x=>x.id===o.id);if(prior&&JSON.stringify(prior)!==JSON.stringify(o))guard({floor:fid,kind,id:o.id},prior,{generated:!targets.some(t=>t.ref.floor===fid&&t.ref.kind===kind&&t.ref.id===o.id)});}
   }
   for(const e of field.items.filter(e=>e.ref.kind==='doors'))context(e.ref.floor,()=>{const d=resolve(e.ref);if(!validOpeningPosition(d)||!doorGeometry(d)||openingConflict(d))throw Error('Every selected opening must fit clear wall space. Nothing was changed.');});
   if(['rooms.x','rooms.y','rooms.w','rooms.h','rooms.rotation','corners.style','corners.radius'].includes(id))for(const old of validDoors){const f=model.floors[old.floor],d=allConnections(f).find(d=>d.id===old.id);if(d&&!doorGeometry(d,f))throw Error('This change would detach an existing opening. Adjust the group or connected rooms together.');const beforeFloor=original.floors[old.floor],beforeDoor=allConnections(beforeFloor).find(q=>q.id===old.id);if(d&&openingConflict(d,doorGeometry(d,f),f)&&!openingConflict(beforeDoor,doorGeometry(beforeDoor,beforeFloor),beforeFloor))throw Error('This change would make existing openings overlap. Nothing was changed.');}
  }finally{model=original;floorId=active;}
  if(JSON.stringify(proposal)===JSON.stringify(original))return true;
  const result=commit(()=>{model=proposal;});if(result===false)return false;
  notify(($('saved').dataset.state==='error'?'Edited in memory; saving failed. Download a backup. ':'')+targets.length+' selected '+(targets.length===1?'object':'objects')+' updated · one Undo restores the edit');return true;
 }catch(error){model=original;floorId=active;notify(error.message);return false;}
}
function paintPanel(){
 const selection=refs();if(selection.length<2)return false;
 const root=$('inspector'),list=fields(selection),sections=[...new Set(list.map(f=>f.section))],scope={model,signature:signature()},cross=selection.some(r=>r.floor!==floorId);
 if(window.BuildingExports?.isThreeMode()){document.body.classList.add('editing3d');root.hidden=false;document.querySelector('.asidehead').hidden=false;}
 const focus=document.activeElement?.dataset?.bulkProperty,openMove=!!$('bulk-group-movement')?.open;
 // Keep the existing move/copy/delete controls and legacy bulk-type API, but
 // never leave first-selected-room controls visible beside shared properties.
 let existing=root.querySelector('.group-inspector,.crossfloor-inspector:not(.bulk-properties)');
 if(existing?.classList.contains('bulk-properties'))existing=null;
 if(!existing)existing=root.querySelector('#bulk-group-movement .bulk-existing-actions');
 const section=document.createElement('section');section.id='bulk-properties';section.className='bulk-properties crossfloor-inspector';
 const shapeGroup=window.BuildingExports?.isThreeMode()&&selection.every(r=>r.kind==='primitives'),groupReady=shapeGroup&&!!window.KERN_PRIMITIVE_UI?.transformScope(),mode=window.KERN_PRIMITIVE_UI?.mode();
 const groupControls=shapeGroup?`<div class="primitive-gizmo" aria-label="Shared 3D shape gizmo">${[['translate','Move','W'],['rotate','Rotate','E'],['scale','Uniform scale','R']].map(([value,label,key])=>`<button type="button" data-primitive-mode="${value}" aria-keyshortcuts="${key}" aria-pressed="${mode===value}" ${groupReady?'':'disabled'}>${label} <kbd>${key}</kbd></button>`).join('')}</div><p class="small">The gizmo moves or rotates the selection together. Group scale keeps proportions around the selection center.${selection.some(r=>resolve(r)?.wall)?' Thin walls keep rotation upright and scale in valid shared quarter-metre factors.':''}${groupReady?'':' Show and unlock all selected shapes and resolve any saving problem first.'}</p>`:'';

 const renderField=f=>{const s=state(f);let reason='';try{f.items.forEach(e=>guard(e.ref,e.o));}catch(e){reason=e.message;}const attrs=`data-bulk-property="${f.id}" aria-label="${esc(f.label)} for ${f.items.length} selected objects" ${reason?'disabled':''} class="${s.mixed?'is-mixed':''}" ${s.mixed?'data-mixed="true"':''}`;
  let input;if(f.type==='select')input=`<select ${attrs}>${s.mixed?'<option value="__mixed__" selected disabled>— Mixed</option>':''}${f.choices.map(([v,label])=>`<option value="${esc(v)}" ${!s.mixed&&eq(s.value,v)?'selected':''}>${esc(label)}</option>`).join('')}</select>`;else input=`<input ${attrs} type="${f.type}" ${f.type==='number'?`step="${f.integer?'1':'any'}" min="${f.min}" max="${f.max}"`:`maxlength="${f.maxLength}"`} value="${s.mixed?'':esc(s.value??'')}" ${s.mixed?'placeholder="—"':''}>`;
  return `<label class="field" ${reason?`title="${esc(reason)}"`:''}><span>${esc(f.label)} <small>· ${f.items.length} selected</small></span>${input}${reason?`<small class="bulk-locked">${esc(reason)}</small>`:''}</label>`;};
 section.innerHTML=`<h2>${selection.length} objects selected</h2>${groupControls}<p class="small">— means mixed values. Change a field to set that value for its matching selected objects. Untouched fields keep their individual values.</p>${sections.map(name=>`<section class="bulk-property-section"><h3>${esc(name)}</h3><div class="gridfields">${list.filter(f=>f.section===name).map(renderField).join('')}</div></section>`).join('')}<p class="small">Positions and elevations above are absolute values per object. Floor offsets are relative to each object’s own floor. To preserve spacing, use Move selection below or drag the selection.</p>${list.some(f=>f.section==='Route paths')?'<p class="small">Linked path endpoints follow their source surfaces. Edit those surfaces together; individual route points and connections stay in the single-path editor.</p>':''}<details id="bulk-group-movement" ${openMove?'open':''}><summary>Move selection / group actions</summary><div class="gridfields"><label class="field"><span>Move X · m</span><input id="bulk-move-x" type="number" step="any" value="0"></label><label class="field"><span>Move Y · m</span><input id="bulk-move-y" type="number" step="any" value="0"></label></div><button id="bulk-move-apply">Move selection</button><p class="small">Adds a distance to every selected position; spacing stays unchanged.</p></details><button id="bulk-clear">Clear selection</button>`;
 root.replaceChildren(section);if(existing){existing.classList.add('bulk-existing-actions');existing.querySelector('#bulktypes')?.remove();for(const id of ['selection-move-x','selection-move-y']){const input=existing.querySelector('#'+id);if(input)input.closest('label').hidden=true;}const legacyMove=existing.querySelector('#crossfloor-move-apply');if(legacyMove)legacyMove.hidden=true;section.querySelector('#bulk-group-movement').append(existing);}
 $('selectiontype').textContent=selection.length+' objects';root.dataset.selection=cross?'crossfloor':'group';
 section.querySelectorAll('[data-primitive-mode]').forEach(button=>button.onclick=()=>window.KERN_PRIMITIVE_UI.setGizmoMode(button.dataset.primitiveMode));
 section.querySelectorAll('[data-bulk-property]').forEach(input=>{editors.set(input,{...scope,state:state(list.find(f=>f.id===input.dataset.bulkProperty))});input.onchange=e=>{e.stopPropagation();if(painting||changing)return;changing++;editors.delete(input);try{if(input.value!=='__mixed__'&&!(input.value===''&&input.type==='number'))apply(input.dataset.bulkProperty,input.value,scope);}finally{changing--;repaintLater();}};input.onkeydown=e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();panel();}else if(e.key==='Enter'){e.preventDefault();input.dispatchEvent(new Event('change',{bubbles:true}));}};});
 $('bulk-move-apply').onclick=()=>{if(scope.model!==model||scope.signature!==signature())return;const x=$('bulk-move-x').value,y=$('bulk-move-y').value;if(!x.trim()||!y.trim())return;try{preflight();L.moveSelection(Number(x),Number(y));}catch(e){notify(e.message);}};$('bulk-clear').onclick=()=>L.clearSelection();
 if(focus)section.querySelector(`[data-bulk-property="${focus}"]`)?.focus({preventScroll:true});
 return true;
}
function panel(){if(changing){repaintLater();return false;}painting++;try{return paintPanel();}finally{painting--;}}
function refresh(base,args){
 const node=document.activeElement,id=node?.dataset?.bulkProperty,sig=id?signature():null,draft=node?.value,editor=editors.get(node),field=id&&fields().find(f=>f.id===id),current=field&&state(field),preserve=editor&&editor.model===model&&editor.signature===sig&&current&&editor.state.mixed===current.mixed&&eq(editor.state.value,current.value);
 painting++;try{const result=base(...args);panel();if(id&&sig===signature()){const next=$('inspector').querySelector('[data-bulk-property="'+id+'"]');if(next){if(preserve)next.value=draft;next.focus({preventScroll:true});}}return result;}finally{painting--;}
}
const priorInspector=inspector;inspector=function(...args){if(changing){repaintLater();return;}return refresh(priorInspector,args);};
const priorRender=render;render=function(...args){if(changing){repaintLater();return;}return refresh(priorRender,args);};
window.KERN_BULK_PROPERTIES={fields,state,apply,panel,resolve};
window.KERN_BULK_TYPES.apply=(group,value)=>apply(({rooms:'rooms.type',doors:'doors.type',symbols:'symbols.kind','service-routes':'service-routes.kind','service-terminals':'service-terminals.kind'})[group],value);
})();
