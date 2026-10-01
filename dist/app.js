const $=id=>document.getElementById(id),clone=x=>JSON.parse(JSON.stringify(x)),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const colors={tech:'#b9cbd0',living:'#d4bb94',service:'#d0d3c8',circulation:'#e9e7df',core:'#bcc3c0',void:'#e4e8e9',terrace:'#e4d5b6',cave:'#cec8b9',courtyard:'#b9cda1',secret:'#cfa989',solid:'#a6a59f'};const roomTypes=Object.keys(colors),roomTypeLabels={tech:'Operations / research',living:'Living / social',service:'Service',circulation:'Circulation',core:'Core / shaft',void:'Void',terrace:'Terrace',cave:'Cave',courtyard:'Courtyard',secret:'Boarded / discoverable',solid:'Solid concrete'};const readLocal=k=>{try{return localStorage.getItem(k)}catch{return null}},writeLocal=(k,v)=>{try{localStorage.setItem(k,v);return true}catch{return false}};const seedFor=v=>v==='v11'?window.KERN_V11:v==='v10'?window.KERN_V10:v==='useredit20260930'?window.KERN_USEREDIT_20260930:v==='v9'?window.KERN_V9:v==='v8initial'?window.KERN_V8INITIAL:v==='v8'?window.KERN_V8:v==='v7'?window.KERN_V7:v==='v6'?window.KERN_V6:v==='v5'?window.KERN_V5:v==='v4'?window.KERN_V4:v==='v3'?window.KERN_V3:v==='v2'?window.KERN_V2:window.KERN_SEED;
let variant='v11',model=clone(seedFor(variant)),floorId='L0',selected=null,selectedDoor=null,tool='select',connectionKind='single',pendingRoom=null,lastSave=null,history=[],future=[],zoom=1,drag=null,pan={x:0,y:0},preview=false,heldTool=null,spaceHeld=false,oneShotTool=false,pointers=new Map(),gesture=null,viewBounds=null,showBelow=true,stairPreviewState=null,hoverPointer=null,connectionMenu=null,widthEdit=null,buildingState=null;
const buildingHistories=new Map();
let theme=readLocal('kern-theme')==='light'?'light':'dark',stairCreateState=null;
const darkColors={tech:'#334b59',living:'#594933',service:'#414b44',circulation:'#383d44',core:'#414951',void:'#252a30',terrace:'#4b4935',cave:'#494741',courtyard:'#354e38',secret:'#654835',solid:'#505156'};
function themedMarkup(s,exporting=false){if(theme!=='dark'||exporting)return s;const map={'#f7f7f2':'#1b1d21','#dce1de':'#3b4048','#34464b':'#b7c2cd','#34474d':'#e8edf4','#60737a':'#b7c5d2','#53686d':'#c3d0dc','#d9ddda':'#414951','#738581':'#a6bcb5','#71898e':'#92aab6','#71888c':'#91a9b4','#35494e':'#c1ccd8','#8c9999':'#b2c0cd','#5d5045':'#b9c8d8','#493f38':'#c2d0e0','#62787d':'#bed0da','#95aca4':'#a6d9c1','#a5b2b5':'#8a9baa','#53676c':'#c5d0db','#29474e':'#d6e5ec','#267d90':'#78d5ec','#a16f29':'#f4c66f','#b73e31':'#ff8b79','#1b6c80':'#78d5ec','#b38648':'#f4c66f','#216c7b':'#85d5e8','#a2612c':'#f6c47e','#476777':'#c0d8e8','#66736e':'#b8c9bf','#d8dfdc':'#36413e','#dbeaed':'#29464e','#ddd6bf':'#4e4938','#eee1cf':'#554430','#f2e9ca':'#4d4632'};for(const [a,b]of Object.entries(map))s=s.replaceAll(a,b);return s}
function applyTheme(){document.documentElement?.setAttribute?.('data-theme',theme);$('theme').textContent=theme==='dark'?'☀':'☾';$('theme').setAttribute('aria-label','Switch to '+(theme==='dark'?'light':'dark')+' theme')}
function toggleTheme(){theme=theme==='dark'?'light':'dark';writeLocal('kern-theme',theme);applyTheme();draw();if(stairPreviewState)renderStairPreview();if(stairCreateState)renderStairCreation()}

function currentBuilding(){return buildingState?.data.buildings.find(b=>b.id===buildingState.data.activeBuildingId)}
function captureBuilding(){const b=currentBuilding();if(!b)return;b.plan=model;b.view={floorId,selected,selectedDoor,zoom,pan:{...pan},viewBounds:clone(viewBounds),showBelow,dimensions:$('dimensions').checked};buildingHistories.set(b.id,{history,future})}
function loadBuilding(b){model=clone(b.plan);variant=b.sourceVariant||'custom';const v={...window.KERN_BUILDINGS.view(),...b.view};floorId=Object.hasOwn(model.floors,v.floorId)?v.floorId:'L0';selected=v.selected;selectedDoor=v.selectedDoor;zoom=Number.isFinite(v.zoom)?Math.max(.5,Math.min(5,v.zoom)):1;pan=v.pan&&Number.isFinite(v.pan.x)&&Number.isFinite(v.pan.y)?v.pan:{x:0,y:0};viewBounds=v.viewBounds&&['x','y','w','h'].every(k=>Number.isFinite(v.viewBounds[k]))&&v.viewBounds.w>0&&v.viewBounds.h>0?v.viewBounds:null;showBelow=v.showBelow!==false;$('dimensions').checked=v.dimensions!==false;const h=buildingHistories.get(b.id);history=h?.history||[];future=h?.future||[];lastSave=null}
function switchBuilding(id){const b=buildingState.data.buildings.find(b=>b.id===id);if(!b||b===currentBuilding())return;finishWidthEdit(false);resetTransient(true);save();buildingState.data.activeBuildingId=id;loadBuilding(b);hoverPointer=null;stairPreviewState=null;$('stairpreview').close();render();save();notify(b.name+' · separate floors and saved edits')}
function addBuilding(b){if(buildingState.data.buildings.length>=100){alert('This browser collection has reached 100 buildings. Download a backup before starting a separate collection.');return false}finishWidthEdit(false);resetTransient(true);save();buildingState.data.buildings.push(b);buildingState.data.activeBuildingId=b.id;loadBuilding(b);render();const saved=save();closeToolbarMenus();notify(b.name+(saved?' created · saved locally':' created in memory · download a backup before closing'))}
function switchVariant(v){restoreArchive(v,false)}
function restoreArchive(v,useSaved=true){const a=buildingState.data.archive.find(a=>a.id===v);if(!a)return;try{const plan=useSaved&&a.saved?JSON.parse(a.saved):clone(seedFor(a.sourceVariant));validateImport(plan);addBuilding(window.KERN_BUILDINGS.building(a.name+(useSaved&&a.saved?' · saved edits':' · original'),plan,a.sourceVariant));$('archivedialog').close()}catch(e){alert('This archive cannot be opened: '+e.message+'. Download the legacy backup to retain the original data.')}}
function renderBuildings(){const b=currentBuilding();if(!b)return;$('building').innerHTML=buildingState.data.buildings.map(x=>`<option value="${esc(x.id)}" ${x.id===b.id?'selected':''}>${esc(x.name)}</option>`).join('');$('building').value=b.id;$('buildingname').textContent=b.name;$('removefloor').disabled=floorId==='L0';$('geometryexport').hidden=true;$('sectionview').hidden=true;$('planpng').hidden=true}
function openArchive(){$('archivelist').innerHTML=buildingState.data.archive.map(a=>`<div class="archive-row"><b>${esc(a.name)}</b><div><button data-archive="${esc(a.id)}" data-saved="false">Open original as building</button>${a.saved?`<button data-archive="${esc(a.id)}" data-saved="true">Open saved edits as building</button>`:''}</div></div>`).join('');$('archivedialog').showModal()}
function fileName(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'building'}
function exportBuilding(){finishWidthEdit(false);finishDrag(true);captureBuilding();download(fileName(currentBuilding().name)+'-building.json',JSON.stringify({format:'kern-building',schemaVersion:1,building:currentBuilding()},null,2),'application/json');notify('Building exported · all its floors and edits')}
function exportAll(){finishWidthEdit(false);finishDrag(true);captureBuilding();download('all-buildings-backup.json',JSON.stringify(buildingState.data,null,2),'application/json');notify('All buildings and Archive exported')}
function importBuildings(p,name){let items;if(p?.format==='kern-building'&&p.schemaVersion===1)items=[p.building];else if(p?.format==='kern-buildings'){window.KERN_BUILDINGS.validate(p,validateImport);items=p.buildings}else{validateImport(p);items=[{name:p.title||name,plan:p,sourceVariant:p.variant||'custom'}]}if(!items.length||items.length+buildingState.data.buildings.length>100)throw Error('Limit: 100 buildings');const copies=items.map(b=>{validateImport(b.plan);const n=window.KERN_BUILDINGS.building(b.name||name,b.plan,b.sourceVariant||'custom');n.view=clone(b.view||window.KERN_BUILDINGS.view());return n});const importedArchive=p.format==='kern-buildings'?(p.archive||[]):[];const extraArchive=importedArchive.filter(a=>a.saved&&!buildingState.data.archive.some(x=>x.sourceVariant===a.sourceVariant&&x.saved===a.saved));if(buildingState.data.archive.length+extraArchive.length>200)throw Error('This backup has too many archived saves to add safely');finishWidthEdit(false);resetTransient(true);save();buildingState.data.buildings.push(...copies);for(const a of importedArchive){if(a.saved&&!buildingState.data.archive.some(x=>x.sourceVariant===a.sourceVariant&&x.saved===a.saved))buildingState.data.archive.push({...clone(a),id:'import-'+window.KERN_BUILDINGS.id(),name:(a.name+' · imported backup').slice(0,180)})}buildingState.data.activeBuildingId=copies[0].id;loadBuilding(copies[0]);render();save();notify(copies.length+' building'+(copies.length===1?'':'s')+' imported as separate copies')}
function nameSafeFloorId(id){return /^[A-Za-z0-9_-]{1,20}$/.test(id)&&!['__proto__','constructor','prototype'].includes(id)}
function addFloor(values){const raw=values?.id??prompt('New floor code (for example L1, B1 or Warehouse):','L1');if(raw===null)return;const id=raw.trim();if(Object.keys(model.floors).length>=20||!nameSafeFloorId(id)||Object.hasOwn(model.floors,id)){alert('Use a unique floor code, up to 20 letters, numbers, dashes or underscores.');return}const name=values?.name??prompt('Floor name:',id);if(name===null)return;const rawZ=values?.z??prompt('Floor elevation in metres:',String((floor().z??0)+4));if(rawZ===null)return;const z=Number(rawZ);if(!Number.isFinite(z)||Math.abs(z)>150){alert('Use an elevation within ±150 m.');return}commit(()=>{model.floors[id]={name:name.trim().slice(0,150)||id,z,elevation:z+' m',note:'',rooms:[],doors:[],entrances:[]};floorId=id;selected=null;selectedDoor=null;viewBounds=null});closeToolbarMenus()}
function renameFloor(name){const value=typeof name==='string'?name:prompt('Floor name:',floor().name);if(value===null||!value.trim())return;commit(()=>floor().name=value.trim().slice(0,150));closeToolbarMenus()}
function removeFloor(approved=false){if(floorId==='L0')return;const id=floorId;if(approved!==true&&!confirm('Remove '+id+' and all its rooms and connections? Linked references to this floor will also be removed. Undo restores the complete building.'))return;commit(()=>{delete model.floors[id];for(const f of Object.values(model.floors))for(const r of f.rooms)if(r.linkedSource?.floor===id){delete r.linkedSource;r.locked=false}if(model.verticalConnections)model.verticalConnections=model.verticalConnections.map(c=>{c.floors=(c.floors||[]).filter(f=>f!==id);if(c.footprints)delete c.footprints[id];return c}).filter(c=>c.floors.length>=2);if(model.splitLevelConnections)model.splitLevelConnections=model.splitLevelConnections.filter(c=>c.floor!==id&&c.from!==id&&c.to!==id);if(model.courtyard?.floor===id)delete model.courtyard;floorId='L0';selected=null;selectedDoor=null;viewBounds=null});closeToolbarMenus()}



function isStair(r,fid=floorId){return !!r&&(r.stairTransition||/stair/i.test(r.id)||[...(model.verticalConnections||[]),...(model.splitLevelConnections||[])].some(c=>c.room===r.id&&c.type!=='lift'&&(c.floor===fid||c.floors?.includes(fid))))}
function canEdit(r){return !!r&&r.type!=='void'&&!sourceFor(r)&&(!r.locked||isStair(r)||isSourceRoom(r))}
function footprint(r){return {x:r.x,y:r.y,w:r.w,h:r.h}}
function stairDetail(r,fid=floorId){return r&&window.KERN_STAIR_DETAIL?window.KERN_STAIR_DETAIL.build(model,fid,r.id):null}
function stairInspector(d){
  if(!d)return '';const m=d.metrics||{},segments=(d.segments||[]).filter(s=>s.from===floorId||s.to===floorId),mm=n=>Number.isFinite(n)?(n*1000).toFixed(0)+' mm':'—';
  return `<section class="stairpanel"><h2>Stair geometry</h2>${(model.verticalConnections||[]).some(c=>c.type==='stair'&&c.room===d.roomId&&c.floors.includes(floorId))?'<button id="editstairfloors" class="previewstair">Edit connected floors</button>':''}<button id="previewstair" class="previewstair">Preview flights &amp; landings</button><p class="stair-status ${d.status==='error'?'warning':''}">${d.status==='error'?'Needs adjustment':'Fits · clearance conditional'}</p><div class="stairmetrics"><span>Clear width <b>${Number.isFinite(m.clearWidth)?m.clearWidth.toFixed(2)+' m':'—'}</b></span><span>Landing depth <b>${Number.isFinite(m.landingDepth)?m.landingDepth.toFixed(2)+' m':'—'}</b></span><span>Tread depth <b>${mm(m.treadDepth)}</b></span><span>Risers <b>${mm(m.riserMin)}${m.riserMax!==m.riserMin?'–'+mm(m.riserMax):''}</b></span><span>Headroom target <b>${Number.isFinite(m.requiredHeadroom)?m.requiredHeadroom.toFixed(2)+' m':'—'}</b></span><span>Measured headroom <b>${Number.isFinite(m.minimumHeadroom)?m.minimumHeadroom.toFixed(2)+' m':'No overhead surface modelled'}</b></span></div>${segments.map(s=>`<p class="small stair-route"><b>${esc(s.from===s.to?'Local transfer':s.from+' ↔ '+s.to)}</b> · ${s.rise.toFixed(2)} m rise<br>${s.risers} risers · ${s.flights.length} flights${s.intermediateStops.map(stop=>`<br>Intermediate landing ${stop.z.toFixed(2)} m · no door`).join('')}</p>`).join('')}${(d.warnings||[]).map(w=>`<p class="check warn">△ ${esc(w.text)}</p>`).join('')}<details><summary>Openings &amp; clearance</summary><p class="small">${esc(d.clearanceNote||'Check stair dimensions before use.')}</p><p class="small">${(d.openings||[]).length} required slab / services / ceiling openings across this stack. UP is blue; DOWN is ochre. Dashed flights continue beyond the current plan cut.</p></details></section>`;
}
function openStairPreview(){
  const d=stairDetail(room(selected));if(!d||!window.KERN_STAIR_DETAIL.previewLevels)return;
  const levels=window.KERN_STAIR_DETAIL.previewLevels(d);if(!levels.length)return;
  const currentZ=room(selected).z??floor().z;let index=levels.reduce((best,l,i)=>Math.abs(l.z-currentZ)<Math.abs(levels[best].z-currentZ)?i:best,0);
  stairPreviewState={detail:d,levels,index};renderStairPreview();$('stairpreview').showModal();
}
function renderStairPreview(){
  const state=stairPreviewState;if(!state)return;const d=state.detail,level=state.levels[state.index],slice=window.KERN_STAIR_DETAIL.slice(d,level.id??level.z),r=d.footprint;
  $('stairpreviewtitle').textContent=d.name+' · height slices';$('stairheight').innerHTML=state.levels.map((l,i)=>`<option value="${i}" ${i===state.index?'selected':''}>${esc(l.label||((l.z>=0?'+':'')+l.z.toFixed(2)+' m'))}</option>`).join('');
  $('stairprev').disabled=state.index===0;$('stairnext').disabled=state.index===state.levels.length-1;
  $('stairheightcaption').textContent=(level.z>=0?'+':'')+level.z.toFixed(2)+' m · preview only, not an extra occupied floor';
  $('stair-preview-plan').setAttribute('viewBox',`${r.x-1} ${r.y-1} ${r.w+2} ${r.h+2}`);
  $('stair-preview-plan').innerHTML=themedMarkup(`<rect x="${r.x-.2}" y="${r.y-.2}" width="${r.w+.4}" height="${r.h+.4}" fill="#f7f7f2" stroke="#71888c" stroke-width=".12"/>`+window.KERN_STAIR_DETAIL.markup(slice));
}
$('stairheight').onchange=e=>{if(stairPreviewState){stairPreviewState.index=Number(e.target.value);renderStairPreview()}};
$('stairprev').onclick=()=>{if(stairPreviewState&&stairPreviewState.index>0){stairPreviewState.index--;renderStairPreview()}};
$('stairnext').onclick=()=>{if(stairPreviewState&&stairPreviewState.index<stairPreviewState.levels.length-1){stairPreviewState.index++;renderStairPreview()}};
$('closestairpreview').onclick=()=>$('stairpreview').close();
function sourceFor(r,fid=floorId){
  if(!r)return null;if(r.linkedSource)return r.linkedSource;
  if(r.courtyardVoid||r.type==='void'&&r.id==='sky'){const sourceFloor=model.courtyard?.floor||'L0',source=model.floors[sourceFloor]?.rooms.find(a=>a.type==='courtyard');if(source)return {floor:sourceFloor,room:source.id}}
  if(r.type==='void'&&r.id==='void'&&fid==='L1'&&model.floors.L0?.rooms.some(a=>a.id==='control'))return {floor:'L0',room:'control'};
  if(r.id==='opsroof'&&model.floors.L0?.rooms.some(a=>a.id==='control'))return {floor:'L0',room:'control'};
  return null;
}
function derivedRefs(id,fid=floorId){return Object.entries(model.floors).flatMap(([floor,f])=>f.rooms.filter(r=>{const source=sourceFor(r,floor);return source?.floor===fid&&source.room===id}).map(r=>({floor,room:r})))}
function isSourceRoom(r,fid=floorId){return !!r&&derivedRefs(r.id,fid).length>0}
function stairGroup(r,fid=floorId){if(!r||!isStair(r,fid))return null;return r.editGroup||(model.verticalConnections||[]).find(c=>c.type==='stair'&&c.room===r.id&&c.floors?.includes(fid))?.id||null}
function groupRefs(group){if(!group)return [];return Object.entries(model.floors).flatMap(([floor,f])=>f.rooms.filter(r=>stairGroup(r,floor)===group).map(room=>({floor,room})))}
function syncStairEdit(r){
  if(!r)return;
  const group=stairGroup(r);if(group){for(const ref of groupRefs(group)){Object.assign(ref.room,footprint(r),{editGroup:group,locked:false})}}
  else if(isStair(r))r.locked=false;
  for(const c of model.verticalConnections||[]){const current=model.floors[floorId]?.rooms.find(a=>a.id===c.room);if(c.room!==r.id&&(!group||!current||stairGroup(current)!==group))continue;c.footprints={...c.footprints};for(const id of c.floors){const actual=model.floors[id]?.rooms.find(a=>a.id===c.room);if(actual)c.footprints[id]=footprint(actual)}if(c.footprints[c.floors[0]])c.footprint=clone(c.footprints[c.floors[0]])}
  for(const c of model.splitLevelConnections||[])if(c.room===r.id&&c.floor===floorId)c.footprint=footprint(r);
  for(const ref of derivedRefs(r.id)){Object.assign(ref.room,footprint(r),{linkedSource:{floor:floorId,room:r.id},locked:true})}
  if(r.type==='courtyard'&&model.courtyard)Object.assign(model.courtyard,footprint(r));
  if(r.id==='control'&&floorId==='L0'&&model.operationsSection)model.operationsSection.footprint=footprint(r);
}
function overlapRegions(f=floor()){
  const regions=[];for(let i=0;i<f.rooms.length;i++)for(let j=i+1;j<f.rooms.length;j++){
    const a=f.rooms[i],b=f.rooms[j];
    if((a.type==='void'&&['void','core'].includes(b.type))||(b.type==='void'&&['void','core'].includes(a.type)))continue;
    if(a.cutoutFor?.includes(b.id)||b.cutoutFor?.includes(a.id))continue;
    const x=Math.max(a.x,b.x),y=Math.max(a.y,b.y),w=Math.min(a.x+a.w,b.x+b.w)-x,h=Math.min(a.y+a.h,b.y+b.h)-y;if(w>1e-6&&h>1e-6)regions.push({a,b,x,y,w,h})
  }return regions;
}
function lowerFloors(){const z=floor().z;return Object.entries(model.floors).filter(([id,f])=>id!==floorId&&Number.isFinite(f.z)&&f.z<z&&(z>=0?f.z>=0:true)).sort((a,b)=>a[1].z-b[1].z)}
function belowFloor(){return lowerFloors().at(-1)}
function belowMarkup(){if(!showBelow)return '';return lowerFloors().map(([id,f])=>`<g class="below-floor" data-ghost-floor="${esc(id)}" opacity=".1" pointer-events="none">`+f.rooms.filter(r=>r.type!=='void').map(r=>`<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="#5d5045" stroke="#493f38" stroke-width=".15"/>`).join('')+'</g>').join('')}
function opaqueRoomColor(type,exporting=false){if(!exporting&&theme==='dark')return darkColors[type]||darkColors.tech;const c=colors[type]||colors.tech,bg='#f7f7f2';return '#'+[1,3,5].map(i=>Math.round((parseInt(c.slice(i,i+2),16)+parseInt(bg.slice(i,i+2),16))/2).toString(16).padStart(2,'0')).join('')}
function resizeRoom(original,edge,dx,dy){
  const out=footprint(original),right=original.x+original.w,bottom=original.y+original.h;
  if(edge.includes('e'))out.w=Math.max(1,Math.min(150,original.w+dx));
  if(edge.includes('s'))out.h=Math.max(1,Math.min(150,original.h+dy));
  if(edge.includes('w')){out.x=Math.max(-150,right-150,Math.min(150,right-1,original.x+dx));out.w=right-out.x}
  if(edge.includes('n')){out.y=Math.max(-150,bottom-150,Math.min(150,bottom-1,original.y+dy));out.h=bottom-out.y}
  for(const k of Object.keys(out))out[k]=Math.round(out[k]*10)/10;
  return out;
}
function selectionMarkup(r){
  if(!r)return '';
  let s=`<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="none" stroke="#c07930" stroke-width=".2" pointer-events="none"/>`;
  if(!canEdit(r)||preview)return s;
  const size=.9;
  for(const [edge,x,y]of [['nw',r.x,r.y],['n',r.x+r.w/2,r.y],['ne',r.x+r.w,r.y],['e',r.x+r.w,r.y+r.h/2],['se',r.x+r.w,r.y+r.h],['s',r.x+r.w/2,r.y+r.h],['sw',r.x,r.y+r.h],['w',r.x,r.y+r.h/2]])s+=`<rect class="handle handle-${edge}" data-handle="${esc(r.id)}" data-edge="${edge}" x="${x-size/2}" y="${y-size/2}" width="${size}" height="${size}" rx=".08" fill="#c07930" stroke="#fff" stroke-width=".1"><title>Resize ${edge.toUpperCase()}</title></rect>`;
  return s;
}

function floor(){return model.floors[floorId]}function room(id){return floor().rooms.find(r=>r.id===id)}function boundary(a,b){if(!a||!b)return null;let lo,hi;if(Math.abs(a.x+a.w-b.x)<1e-6||Math.abs(b.x+b.w-a.x)<1e-6){lo=Math.max(a.y,b.y);hi=Math.min(a.y+a.h,b.y+b.h);if(hi>lo)return{axis:'v',fixed:Math.abs(a.x+a.w-b.x)<1e-6?b.x:a.x,lo,hi}}if(Math.abs(a.y+a.h-b.y)<1e-6||Math.abs(b.y+b.h-a.y)<1e-6){lo=Math.max(a.x,b.x);hi=Math.min(a.x+a.w,b.x+b.w);if(hi>lo)return{axis:'h',fixed:Math.abs(a.y+a.h-b.y)<1e-6?b.y:a.y,lo,hi}}return null}
function doorType(d){return d.kind==='open'?'open':d.leaves===2||d.kind==='double'?'double':'single'}
function isFullOpen(d){return d.kind==='open'&&d.fullWidth!==false}
function doorGeometry(d,f=floor()){
  const a=f.rooms.find(r=>r.id===d.a),b=f.rooms.find(r=>r.id===d.b),g=boundary(a,b);
  if(!g)return null;
  if(isFullOpen(d))return {...g,start:g.lo,end:g.hi};
  if(g.hi-g.lo<d.width+.2-1e-7)return null;
  const t=Math.max(0,Math.min(1,d.offset??.5)),start=g.lo+.1+Math.max(0,g.hi-g.lo-d.width-.2)*t;
  return {...g,start,end:start+d.width};
}
function offsetAt(d,g,p){const length=g.hi-g.lo-d.width-.2;if(length<=0)return .5;const axis=g.axis==='h'?p.x:p.y;return Math.max(0,Math.min(1,(Math.round((axis-d.width/2)*10)/10-g.lo-.1)/length))}
function connection(id){return floor().doors.find(d=>d.id===id)}
function uniqueId(prefix){let id;do{id=prefix+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}while(floor().rooms.some(r=>r.id===id)||floor().doors.some(d=>d.id===id));return id}
function typeOptions(value){return [['single','Single door'],['double','Double door · 2 leaves'],['open','Open passage · no door']].map(([k,v])=>`<option value="${k}" ${value===k?'selected':''}>${v}</option>`).join('')}
function setTool(value){finishDrag(true);heldTool=null;spaceHeld=false;oneShotTool=false;tool=value;preview=value==='pan';pendingRoom=null;pointers.clear();gesture=null;render();notify(toolHint());refreshInteraction()}
function toolHint(){return preview?'Temporary pan · release Space to select':tool==='connect'?'Connect: drag between adjacent rooms, or tap two rooms':tool==='disconnect'?'Disconnect: click a connection or drag between linked rooms':tool==='draw'?'Draw room: drag a rectangle · 0.5 m snap · 1 m minimum':'Select · hold C / X / P for tools · Space or middle-drag pans'}
function isTypingTarget(target){return !!target&&(/INPUT|SELECT|TEXTAREA/.test(target.tagName)||target.isContentEditable||target.closest?.('[contenteditable="true"]'))}
function resetTransient(cancel=true){
  finishWidthEdit(cancel);
  closeConnectionMenu();finishDrag(cancel);if(cancel&&gesture){pan={...gesture.pan};zoom=gesture.zoom}
  const ids=[...pointers.keys()];pointers.clear();gesture=null;heldTool=null;spaceHeld=false;oneShotTool=false;pendingRoom=null;preview=false;tool='select';$('notice').textContent='';
  for(const id of ids)if($('plan').hasPointerCapture?.(id))$('plan').releasePointerCapture(id);render();
}
function finishOneShot(){if(oneShotTool&&!heldTool){oneShotTool=false;pendingRoom=null;tool='select';preview=false;render()}}
function connectionCandidate(a,b,p){
  if(floor().doors.length>=600)return {valid:false,reason:'This floor has reached 600 connections'};
  if(!a||!b||a.id===b.id)return {valid:false,reason:'Choose a different room'};
  if(floor().doors.some(d=>(d.a===a.id&&d.b===b.id)||(d.a===b.id&&d.b===a.id)))return {valid:false,reason:'These rooms are already connected'};
  const g=boundary(a,b);if(!g)return {valid:false,reason:'Rooms must share a wall'};
  if(['void','solid'].includes(a.type)||['void','solid'].includes(b.type))return {valid:false,reason:'Voids and sealed concrete are not circulation rooms'};
  const width=connectionKind==='single'?1.2:2,d={id:uniqueId('d'),a:a.id,b:b.id,width,offset:.5,kind:connectionKind==='open'?'open':'door',leaves:connectionKind==='double'?2:1};
  if(d.kind==='open'){d.fullWidth=false;delete d.leaves}
  if(g.hi-g.lo<width+.2-1e-7)return {valid:false,reason:`Shared wall needs ${(width+.2).toFixed(1)} m for this connection`};
  d.offset=offsetAt(d,g,p);return {valid:true,door:d,geometry:doorGeometry(d)};
}
function addConnection(a,b,p){const candidate=connectionCandidate(room(a),room(b),p);if(!candidate.valid){notify(candidate.reason);return false}commit(()=>{floor().doors.push(candidate.door);selected=null;selectedDoor=candidate.door.id});notify('Connection added · drag it along the shared wall');return true}
function linkedConnections(a,b){return floor().doors.filter(d=>(d.a===a&&d.b===b)||(d.a===b&&d.b===a))}
function removeConnections(ids){const remove=new Set(ids);if(!ids.length){notify('Those rooms have no connection');return false}commit(()=>{floor().doors=floor().doors.filter(d=>!remove.has(d.id));if(remove.has(selectedDoor))selectedDoor=null});notify(`${ids.length===1?'Connection':ids.length+' connections'} removed · Undo restores it`);return true}
function deleteSelection(){
  finishDrag(true);
  if(selectedDoor){removeConnections([selectedDoor]);return}
  const r=room(selected);if(!canEdit(r))return;
  const managed=(model.verticalConnections||[]).find(c=>c.room===r.id&&c.floors.includes(floorId)&&c.authoringVersion===1);if(managed){deleteStairStack(managed);return}const dependents=derivedRefs(r.id);const links=floor().doors.filter(d=>d.a===r.id||d.b===r.id).length;
  if(links>0&&!confirm(`Delete “${r.name}” and ${links} linked connection${links===1?'':'s'}? This also removes its entrance and stair links on this floor${dependents.length?' and '+dependents.length+' derived footprints':''}. Undo restores everything.`))return;
  commit(()=>{for(const ref of dependents){const f=model.floors[ref.floor];f.rooms=f.rooms.filter(a=>a.id!==ref.room.id);f.doors=f.doors.filter(d=>d.a!==ref.room.id&&d.b!==ref.room.id);f.entrances=f.entrances.filter(id=>id!==ref.room.id)}if(r.type==='courtyard')delete model.courtyard;floor().rooms=floor().rooms.filter(a=>a.id!==r.id);floor().doors=floor().doors.filter(d=>d.a!==r.id&&d.b!==r.id);floor().entrances=floor().entrances.filter(id=>id!==r.id);if(floor().externals)floor().externals=floor().externals.filter(e=>e.room!==r.id);if(floor().external?.room===r.id)delete floor().external;for(const c of model.verticalConnections||[])if(c.room===r.id){c.floors=c.floors.filter(id=>id!==floorId);if(c.footprints)delete c.footprints[floorId]}if(model.splitLevelConnections)model.splitLevelConnections=model.splitLevelConnections.filter(c=>c.room!==r.id||c.floor!==floorId);selected=null;selectedDoor=null});notify('Room and linked connections deleted · Undo restores everything');
}
function checks(f=floor()){const out=[];for(const c of model.verticalConnections||[]){if(c.type!=='stair')continue;const r=f.rooms.find(r=>r.id===c.room);if(!r)continue;const others=(c.floors||[]).map(id=>model.floors[id]?.rooms.find(a=>a.id===c.room)).filter(Boolean);if(others.some(a=>['x','y','w','h'].some(k=>Math.abs(a[k]-r[k])>.01)))out.push({kind:'alignment',text:r.name+': stair footprint differs between levels'})}const walk=f.rooms.filter(r=>!['void','solid'].includes(r.type)&&!r.throughOnly),links={};walk.forEach(r=>links[r.id]=[]);for(const o of overlapRegions(f))out.push({kind:'overlap',text:`${o.a.name} overlaps ${o.b.name}`,region:{x:o.x,y:o.y,w:o.w,h:o.h}});for(const d of f.doors){const a=f.rooms.find(r=>r.id===d.a),b=f.rooms.find(r=>r.id===d.b);if(a&&b&&(a.z??f.z)!==(b.z??f.z)&&!a.stairTransition&&!b.stairTransition)out.push({kind:'elevation',text:'Level change needs stairs: '+a.name+' ↔ '+b.name});if(!doorGeometry(d,f))out.push({kind:'door',text:`Detached / too-wide door: ${f.rooms.find(r=>r.id===d.a)?.name||d.a} ↔ ${f.rooms.find(r=>r.id===d.b)?.name||d.b}`});else if(!d.sealed&&links[d.a]&&links[d.b]){links[d.a].push(d.b);links[d.b].push(d.a)}}const seen=new Set(),q=[...f.entrances];while(q.length){let a=q.shift();if(seen.has(a))continue;seen.add(a);q.push(...(links[a]||[]))}for(const r of walk)if(!seen.has(r.id)){const sealed=!!r.boardedSection||f.doors.some(d=>d.sealed&&(d.a===r.id||d.b===r.id));out.push({kind:sealed?'sealed':'route',text:sealed?`${r.name}: intentionally sealed route`:`No entrance route: ${r.name}`})}if(model.courtyard){const c=model.courtyard;for(const r of f.rooms)if((f.z??-1)>=0&&!['void','courtyard'].includes(r.type)&&Math.min(r.x+r.w,c.x+c.w)>Math.max(r.x,c.x)&&Math.min(r.y+r.h,c.y+c.h)>Math.max(r.y,c.y))out.push({kind:'sky',text:`${r.name} obstructs the open-sky courtyard`})}for(const e of(f.externals||[f.external].filter(Boolean))){const r=f.rooms.find(r=>r.id===e.room);if(!r){out.push({kind:'entrance',text:'Exterior entrance room missing'});continue}const span=['e','w'].includes(e.side)?r.h:r.w;if(e.width>span-.2)out.push({kind:'entrance',text:`Exterior door too wide: ${r.name}`})}const checkFloorId=Object.entries(model.floors).find(([id,level])=>level===f)?.[0]||floorId;for(const r of f.rooms){const detail=stairDetail(r,checkFloorId);if(detail)for(const warning of detail.warnings||[])out.push({...warning,kind:'stair',text:r.name+': '+warning.text})}return out}
function save(){try{captureBuilding();const b=currentBuilding();if(b)b.updatedAt=new Date().toISOString();window.KERN_BUILDINGS.persist(localStorage,buildingState);lastSave=new Date();$('saved').textContent='Saved locally · '+lastSave.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});$('saved').dataset.state='saved';$('saved').title='Saved in this browser on this device. File downloads portable backups.';window.KERN_UI?.syncStorage();return true}catch(e){$('saved').textContent='Not saved · download a backup';$('saved').title=e.message;$('saved').dataset.state='error';window.KERN_UI?.syncStorage();return false}}
function saveView(){if(widthEdit||drag)return;captureBuilding();try{window.KERN_BUILDINGS.persist(localStorage,buildingState)}catch(e){$('saved').textContent='Not saved · download a backup';$('saved').title=e.message;$('saved').dataset.state='error'}window.KERN_UI?.syncStorage()}
function markUnsaved(){if($('saved').dataset.state==='error'){window.KERN_UI?.syncStorage();return} $('saved').textContent='Editing · saved when you finish';$('saved').dataset.state='editing';window.KERN_UI?.syncStorage()}function checkpoint(){history.push(JSON.stringify(model));if(history.length>80)history.shift();future=[]}function commit(fn){finishWidthEdit(false);finishDrag(true);checkpoint();fn();save();render()}function notify(t){window.KERN_UI?.toast(t);$('notice').textContent=t;$('toolhint').textContent=t;clearTimeout(notify.timer);notify.timer=setTimeout(()=>{$('notice').textContent='';$('toolhint').textContent=connectionFeedback()?.hint||toolHint()},5000)}function undo(){if(widthEdit){finishWidthEdit(true);return}if(drag){finishDrag(true);return}if(!history.length)return;future.push(JSON.stringify(model));model=JSON.parse(history.pop());save();render()}function redo(){if(widthEdit){finishWidthEdit(true);return}if(drag){finishDrag(true);return}if(!future.length)return;history.push(JSON.stringify(model));model=JSON.parse(future.pop());save();render()}
function text(x,y,s,size=.6,extra=''){return `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" ${extra.includes('fill=')?'':'fill="#34474d"'} text-anchor="middle" ${extra}>${esc(s)}</text>`}function wrap(name,max){return name.split('\n').flatMap(line=>{const words=line.split(' '),lines=[''];for(const w of words){if((lines.at(-1)+' '+w).trim().length>max&&lines.at(-1))lines.push(w);else lines[lines.length-1]+=(lines.at(-1)?' ':'')+w}return lines})}
function cavePath(r){const openings=floor().doors.filter(d=>d.a===r.id||d.b===r.id).map(d=>doorGeometry(d)).filter(Boolean);const pts=[];for(const [axis,fixed,lo,hi,side,reverse] of [['h',r.y,r.x,r.x+r.w,'n',false],['v',r.x+r.w,r.y,r.y+r.h,'e',false],['h',r.y+r.h,r.x,r.x+r.w,'s',true],['v',r.x,r.y,r.y+r.h,'w',true]]){let ts=[lo,hi];for(let t=lo+.65;t<hi;t+=.65)ts.push(t);for(const g of openings)if(g.axis===axis&&g.fixed===fixed)ts.push(Math.max(lo,g.start-.15),g.start,g.end,Math.min(hi,g.end+.15));ts=[...new Set(ts)].sort((a,b)=>reverse?b-a:a-b);for(let i=0;i<ts.length;i++){let t=ts[i],on=openings.some(g=>g.axis===axis&&g.fixed===fixed&&t>=g.start-.16&&t<=g.end+.16),inset=on?0:.18+((i*7+Math.round(fixed))%4)*.12;if(t===lo||t===hi)inset=.35;if(axis==='h')pts.push([Math.max(r.x+.35,Math.min(r.x+r.w-.35,t)),fixed+(side==='n'?inset:-inset)]);else pts.push([fixed+(side==='w'?inset:-inset),Math.max(r.y+.35,Math.min(r.y+r.h-.35,t))])}}return 'M'+pts.map(p=>p.join(' ')).join('L')+'Z'}
function connectionMarkup(d,exporting=false,ghost=false){
  const g=doorGeometry(d);if(!g)return '';const horizontal=g.axis==='h',x=horizontal?g.start:g.fixed,y=horizontal?g.fixed:g.start,w=g.end-g.start,type=doorType(d),active=!exporting&&d.id===selectedDoor,color=ghost?'#328573':active?'#b66818':d.sealed?'#a25932':'#62787d';
  const line=horizontal?`M${x} ${y}h${w}`:`M${x} ${y}v${w}`;
  let s=`<g class="door ${active?'selected-door':''}" ${ghost?'pointer-events="none"':`data-door="${esc(d.id)}"`}><title>${type==='open'?'Open passage':type==='double'?'Double door':'Single door'} · ${esc(room(d.a)?.name)} ↔ ${esc(room(d.b)?.name)}</title>`;
  if(active)s+=`<path d="${line}" stroke="#e3a65f" stroke-width=".9" stroke-linecap="round"/>`;
  s+=`<path d="${line}" stroke="#f7f7f2" stroke-width=".38"/>`;
  if(type==='open')s+=`<path d="${line}" stroke="${active?color:'#95aca4'}" stroke-width=".06" stroke-dasharray=".16 .13"/>`;
  else if(!d.cemented){const n=type==='double'?2:1,leaf=w/n;for(let i=0;i<n;i++){const end=i===1,hinge=end?w:0,free=end?w-leaf:leaf,px=horizontal?x+hinge:x,py=horizontal?y:y+hinge,ex=horizontal?px:px+leaf,ey=horizontal?py-leaf:py,fx=horizontal?x+free:x,fy=horizontal?y:y+free;s+=`<path class="door-leaf" d="M${px} ${py}L${ex} ${ey}" fill="none" stroke="${color}" stroke-width=".085"/><path d="M${fx} ${fy}A${leaf} ${leaf} 0 0 ${end?1:0} ${ex} ${ey}" fill="none" stroke="${color}" stroke-width=".055" stroke-dasharray=".12 .09"/>`}}
  if(d.cemented)s+=`<path d="${line}" stroke="#67665f" stroke-width=".36"/><path d="${line}" stroke="#f5f2e9" stroke-width=".06" stroke-dasharray=".08 .18"/>`;else if(d.sealed)s+=`<path d="${line}" stroke="#a25932" stroke-width=".2" stroke-dasharray=".2 .15"/>`;
  if(active){const cx=horizontal?x+w/2:x,cy=horizontal?y:y+w/2;s+=`<circle cx="${cx}" cy="${cy}" r=".24" fill="${color}" stroke="white" stroke-width=".06"/>`}
  if(!exporting&&!ghost)s+=`<path d="${line}" stroke="transparent" stroke-width="1.1" pointer-events="stroke"/>`;
  return s+'</g>';
}
// Hover is display-only: it never selects, checkpoints, saves or changes the plan.
function rememberPointer(e){
  if(!Number.isFinite(e.clientX)||!Number.isFinite(e.clientY))return;
  const rect=$('plan').getBoundingClientRect(),left=rect.left??0,top=rect.top??0;
  hoverPointer=e.clientX>=left&&e.clientX<=left+rect.width&&e.clientY>=top&&e.clientY<=top+rect.height?{clientX:e.clientX,clientY:e.clientY,pointerType:e.pointerType,doorId:e.target?.closest?.('[data-door]')?.dataset.door||null,roomId:e.target?.closest?.('[data-handle]')?.dataset.handle||e.target?.closest?.('[data-room]')?.dataset.room||null}:null;
}
function connectionFeedback(){
  const mode=tool;
  if(preview||spaceHeld||gesture||pointers.size||isTypingTarget(document.activeElement)||document.querySelector('dialog[open]')||!['connect','disconnect'].includes(mode))return null;
  const f={mode,cursor:mode,color:mode==='connect'?'#248365':'#b33f38',source:null,target:null,links:[],valid:false,hint:toolHint()};
  if(!hoverPointer)return f;
  const p=drag?.kind===mode?drag.current:point(hoverPointer);f.point=p;
  f.source=room(drag?.kind===mode?drag.id:pendingRoom);
  if(mode==='disconnect'&&!drag){const door=connection(hoverPointer.doorId);if(door){f.links=[door];f.source=room(door.a);f.target=room(door.b);f.valid=true;f.direct=true;f.hint='× Disconnect: click to remove this connection';return f}}
  f.target=f.source?roomAt(p,f.source.id):room(hoverPointer.roomId)||roomAt(p);
  if(f.source){
    if(mode==='connect'){
      f.candidate=connectionCandidate(f.source,f.target,p);f.valid=f.candidate.valid;
      f.hint=f.valid?'+ Connect: shared wall ready · release or click to add':f.target?'Cannot connect: '+f.candidate.reason:'+ Connect: choose a room that shares a wall';
    }else{
      f.links=f.target?linkedConnections(f.source.id,f.target.id):[];f.valid=f.links.length>0;
      f.hint=f.valid?'× Disconnect: release or click to remove this connection':f.target?'Cannot disconnect: these rooms have no connection':'× Disconnect: choose the connected room';
    }
    f.cursor=f.valid?mode:'blocked';
  }else if(f.target){
    f.valid=mode==='connect'?!['void','solid'].includes(f.target.type):floor().doors.some(d=>d.a===f.target.id||d.b===f.target.id);
    f.cursor=f.valid?mode:'blocked';
    f.hint=f.valid?(mode==='connect'?'+ Connect: start here, then choose a shared-wall room':'× Disconnect: drag to this room’s connected room'):(mode==='connect'?'Cannot connect: voids and sealed concrete are not rooms':'Cannot disconnect: this room has no connections');
  }else{f.cursor='blocked';f.hint=mode==='connect'?'+ Connect: choose a starting room':'× Disconnect: choose a connection or a linked room'}
  return f;
}
function updateInteractionUI(f=connectionFeedback()){
  $('plan').setAttribute('data-feedback',gesture?'panning':preview||spaceHeld?'pan':f?.cursor||'');
  $('toolhint').textContent=f?.hint||$('notice').textContent||toolHint();
}
function refreshInteraction(){const f=connectionFeedback();updateInteractionUI(f);const layer=$('interaction-feedback');if(layer)layer.innerHTML=interactionMarkup(f)}
function feedbackRoom(r,color,role){return r?`<rect class="feedback-room feedback-${role}" x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${color}" fill-opacity="${role==='blocked'?'.06':'.13'}" stroke="${color}" stroke-width=".23" ${role==='source'?'stroke-dasharray=".45 .22"':''}/>`:''}
function disconnectMarkup(d){
  const g=doorGeometry(d);if(!g)return '';const x=g.axis==='h'?(g.start+g.end)/2:g.fixed,y=g.axis==='h'?g.fixed:(g.start+g.end)/2;
  return `<g class="disconnect-preview"><path d="${g.axis==='h'?`M${g.start} ${g.fixed}H${g.end}`:`M${g.fixed} ${g.start}V${g.end}`}" stroke="#b33f38" stroke-width=".65" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r=".48" fill="#fff" stroke="#b33f38" stroke-width=".1"/><path d="M${x-.19} ${y-.19}l.38 .38m0 -.38l-.38 .38" fill="none" stroke="#b33f38" stroke-width=".13" stroke-linecap="round"/></g>`;
}
function interactionMarkup(f=connectionFeedback()){
  let s='';
  if(drag?.kind==='draw'){const r=drawnRoom(drag),valid=r.w>=1&&r.h>=1;s+=`<g pointer-events="none"><rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${valid?'#74b09b':'#d98263'}" fill-opacity=".3" stroke="${valid?'#328573':'#ba573c'}" stroke-width=".14" stroke-dasharray=".4 .2"/>${text(r.x+r.w/2,r.y+r.h/2,`${r.w} × ${r.h} m`,.65)}</g>`}
  if(!f?.point)return s;
  const muted='#7b8588',sourceValid=f.source&&(f.mode==='connect'?!['void','solid'].includes(f.source.type):floor().doors.some(d=>d.a===f.source.id||d.b===f.source.id));
  s+='<g class="connection-feedback" pointer-events="none" aria-hidden="true">';
  if(f.source)s+=feedbackRoom(f.source,sourceValid?f.color:muted,'source');
  if(f.target)s+=feedbackRoom(f.target,f.valid?f.color:muted,f.valid?'target':'blocked');
  if(drag?.kind===f.mode)s+=`<path d="M${drag.start.x} ${drag.start.y}L${drag.current.x} ${drag.current.y}" stroke="${f.valid?f.color:muted}" stroke-width=".15" stroke-dasharray=".4 .2"/>`;
  if(f.valid&&f.candidate?.door){const g=f.candidate.geometry;s+=`<path d="${g.axis==='h'?`M${g.lo} ${g.fixed}H${g.hi}`:`M${g.fixed} ${g.lo}V${g.hi}`}" stroke="#328573" stroke-opacity=".4" stroke-width=".5"/>`+connectionMarkup(f.candidate.door,false,true)}
  if(f.mode==='disconnect')for(const d of f.links)s+=disconnectMarkup(d);
  return s+'</g>';
}
function planMarkup(exporting=false,includeSheet=true){const f=floor(),dim=$('dimensions').checked;let s=`<defs><pattern id="grid" width="1" height="1" patternUnits="userSpaceOnUse"><path d="M 1 0 L 0 0 0 1" fill="none" stroke="#dce1de" stroke-width=".025"/></pattern><pattern id="hatch" width=".7" height=".7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line y2=".7" stroke="#919a92" stroke-width=".06"/></pattern></defs><rect x="-300" y="-300" width="600" height="600" fill="#f7f7f2"/><rect x="-300" y="-300" width="600" height="600" fill="url(#grid)"/>`;
if(!exporting)s+=belowMarkup();
for(const r of f.rooms){s+=`<g data-room="${esc(r.id)}" class="room">${r.type==='cave'?`<path d="${cavePath(r)}" fill="${!exporting&&theme==='dark'?darkColors.cave:colors.cave}" stroke="#34464b" stroke-width=".18"/>`:`<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${r.type==='void'?'none':['v8','v9','v10','v11','useredit20260930','custom'].includes(variant)?opaqueRoomColor(r.type,exporting):(!exporting&&theme==='dark'?darkColors[r.type]:colors[r.type])||colors.tech}" fill-opacity="1" pointer-events="all"/>`}`;if(['v8','v9','v10','v11','useredit20260930','custom'].includes(variant)&&r.type==='terrace')s+=`<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="none" stroke="#71898e" stroke-width=".08"/>`;if(r.boardedSection||r.sealedConcrete)s+=`<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="url(#hatch)" opacity=".22"/>`;if(r.type==='void')s+=`<path d="M${r.x},${r.y}l${r.w},${r.h}m0,-${r.h}l-${r.w},${r.h}" stroke="#a5b2b5" stroke-width=".07" stroke-dasharray=".3 .3"/>`;if(r.type==='cave')s+=`<path d="${cavePath(r)}" fill="url(#hatch)" opacity=".4"/>`;s+='</g>'}
// Canonical half-metre edge segments prevent double walls on shared boundaries.
const walls=new Map();for(const r of f.rooms){if(['cave','void','courtyard','terrace'].includes(r.type))continue;for(let x=r.x;x<r.x+r.w-.01;x+=.5){walls.set(`h:${x}:${r.y}`,[x,r.y,x+.5,r.y]);walls.set(`h:${x}:${r.y+r.h}`,[x,r.y+r.h,x+.5,r.y+r.h])}for(let y=r.y;y<r.y+r.h-.01;y+=.5){walls.set(`v:${r.x}:${y}`,[r.x,y,r.x,y+.5]);walls.set(`v:${r.x+r.w}:${y}`,[r.x+r.w,y,r.x+r.w,y+.5])}}s+='<g stroke="#34464b" stroke-width=".18" stroke-linecap="square" pointer-events="none">';for(const p of walls.values())s+=`<path d="M${p[0]} ${p[1]}L${p[2]} ${p[3]}"/>`;s+='</g>';
if(['v8','v9'].includes(variant)&&floorId==='L1')s+=`<path d="M18 7v3" stroke="#f7f7f2" stroke-width=".24"/><path d="M17.94 7v3M18.06 7v3" stroke="#71898e" stroke-width=".045"/>`;for(const d of f.doors)s+=connectionMarkup(d,exporting);
for(const e of (f.externals||[f.external].filter(Boolean))){const r=f.rooms.find(r=>r.id===e.room),v=['e','w'].includes(e.side),x=v?(e.side==='e'?r.x+r.w:r.x):r.x+r.w/2,y=v?r.y+r.h/2:(e.side==='s'?r.y+r.h:r.y),dx=e.side==='e'?1:e.side==='w'?-1:0,dy=e.side==='s'?1:e.side==='n'?-1:0;s+=`<path d="M${x-(v?0:e.width/2)} ${y-(v?e.width/2:0)}l${v?0:e.width} ${v?e.width:0}" stroke="#f7f7f2" stroke-width=".4"/><path d="M${x+dx*4} ${y+dy*4}L${x+dx*.5} ${y+dy*.5}" stroke="#a47137" stroke-width=".15"/>`;s+=text(x+dx*3,y+dy*3+.7,e.label,.36)}

s+='<g pointer-events="none">';for(const r of f.rooms){const detail=stairDetail(r);if(detail){s+=window.KERN_STAIR_DETAIL.markup(detail);continue}if(r.id==='freight')s+=`<rect x="${r.x+.5}" y="${r.y+.5}" width="${r.w-1}" height="${r.h-1}" fill="none" stroke="#738581" stroke-width=".06"/><path d="M${r.x+.5} ${r.y+.5}l${r.w-1} ${r.h-1}m0 -${r.h-1}l-${r.w-1} ${r.h-1}" stroke="#738581" stroke-width=".05"/>`;if(r.z!==undefined&&r.z!==f.z)s+=text(r.x+r.w/2,r.y+.5,(r.z>0?'+':'')+r.z.toFixed(2)+' m',.48,'font-weight="bold"');if(r.zones){for(const zone of r.zones)s+=text(zone.x,zone.y,zone.name,.45,'fill="#53686d"');}const lines=r.diagramLabel===''?[]:wrap(r.diagramLabel??r.name,Math.floor(r.w*2.5)),size=['v8','v9','v10','v11','useredit20260930','custom'].includes(variant)?Math.min(.78,Math.max(.53,r.w/10)):Math.min(.7,Math.max(.38,r.w/10));if(['v9','v10','v11','useredit20260930'].includes(variant)&&r.type==='core'&&r.id!=='freight')s+=`<rect x="${r.x+.25}" y="${r.y+r.h/2-lines.length*.43}" width="${r.w-.5}" height="${lines.length*.86}" fill="#d9ddda"/>`;lines.forEach((l,i)=>s+=text(r.x+r.w/2,r.y+r.h/2+(i-(lines.length-1)/2)*.8,l,size,r.id===selected&&!exporting?'font-weight="bold"':''));if(dim&&!['void','circulation','core'].includes(r.type)&&r.h>=4)s+=text(r.x+.4,r.y+r.h-.5,`${r.w.toFixed(1)} × ${r.h.toFixed(1)} m`,.35,'fill="#60737a" style="text-anchor:start"');}s+='</g>';if(!exporting){s+='<g class="overlap-regions" pointer-events="none">';for(const o of overlapRegions())s+=`<rect x="${o.x}" y="${o.y}" width="${o.w}" height="${o.h}" fill="#dc4935" fill-opacity=".32" stroke="#c93522" stroke-width=".12"/>`;s+='</g>';s+=selectionMarkup(room(selected));s+='<g id="interaction-feedback" pointer-events="none" aria-hidden="true">'+interactionMarkup()+'</g>'}
for(const a of f.annotations||[])s+=text(a.x,a.y,a.text,.35,'fill="#8c9999"');if(includeSheet)s+=`<path d="M0 43h10m-10-.25v.5m5-.5v.5m5-.5v.5" stroke="#35494e" stroke-width=".1"/>${text(0,44,'0',.45)}${text(5,44,'5',.45)}${text(10,44,'10 m',.45)}`;if(exporting&&includeSheet)s+=text(28,46,`${currentBuilding()?.name||'Building'} / ${floorId} / ${f.name} / ${f.elevation}`,.7);return themedMarkup(s,exporting)}
function bounds(exporting=false){const rs=floor().rooms;if(!rs.length)return{x:-6,y:-6,w:72,h:57};const x=Math.min(...rs.map(r=>r.x-4)),y=Math.min(...rs.map(r=>r.y-4)),right=Math.max(...rs.map(r=>r.x+r.w+6)),bottom=Math.max(...rs.map(r=>r.y+r.h+3));if(exporting)return{x:Math.min(-6,x),y:Math.min(-4,y),w:Math.max(62,right)-Math.min(-6,x),h:Math.max(48,bottom)-Math.min(-4,y)};return{x,y,w:right-x,h:bottom-y}}function draw(){const svg=$('plan'),b=viewBounds||(viewBounds=bounds());svg.setAttribute('viewBox',`${b.x+(1-1/zoom)*b.w/2+pan.x} ${b.y+(1-1/zoom)*b.h/2+pan.y} ${b.w/zoom} ${b.h/zoom}`);svg.innerHTML=planMarkup();updateInteractionUI()}
function render(){const inspectorScroll=document.querySelector('aside')?.scrollTop||0;if(connectionMenu&&(connectionMenu.floor!==floorId||connectionMenu.variant!==variant||(connectionMenu.kind==='room'?!room(connectionMenu.id)||selected!==connectionMenu.id:!connection(connectionMenu.id)||selectedDoor!==connectionMenu.id)))closeConnectionMenu();if(!model.floors[floorId])floorId='L0';$('sectionview').hidden=!['v5','v6','v8','v8initial','v9','v10','v11'].includes(variant);$('planpng').hidden=!['v8','v9','v10','v11'].includes(variant);$('planpng').href='KERN_'+variant.toUpperCase()+'_'+floorId+'.png';$('planpng').textContent=variant.toUpperCase()+' PNG';$('geometryexport').hidden=['v7','v8','v8initial','v9','v10','v11','useredit20260930'].includes(variant);$('floorbrief').textContent=floor().note;$('sectionview').href='kern-'+variant+'-section.svg';renderBuildings();if(selected&&!room(selected))selected=null;if(selectedDoor&&!connection(selectedDoor))selectedDoor=null;updateTools();$('floors').innerHTML=Object.entries(model.floors).sort((a,b)=>b[1].z-a[1].z).map(([id,f])=>`<button data-floor="${esc(id)}" class="${id===floorId?'active':''}" aria-current="${id===floorId?'page':'false'}" title="${esc(f.name)} · ${f.z} m"><span class="floor-code">${esc(id)}</span><span class="floor-name">${esc(f.name)}</span><small>${f.z>0?'+':''}${Number(f.z).toFixed(1)} m<span class="floor-roomcount"> · ${f.rooms.filter(r=>!['void','solid'].includes(r.type)&&!r.throughOnly).length} spaces</span></small></button>`).join('');$('flooraccess').textContent=floor().entrances.length+' floor entrance'+(floor().entrances.length===1?'':'s');$('levelcode').textContent=floorId+' / '+floor().elevation;$('levelname').textContent=floor().name;$('summary').textContent=`${floor().rooms.filter(r=>!['void','solid'].includes(r.type)&&!r.throughOnly).length} spaces · ${floor().rooms.filter(r=>!['void','terrace','courtyard','solid'].includes(r.type)).reduce((a,r)=>a+r.w*r.h,0).toFixed(0)} m² enclosed${model.courtyard&&floorId==='L0'?' + '+(model.courtyard.w*model.courtyard.h)+' m² court':''}`;$('undo').disabled=!history.length;$('redo').disabled=!future.length;draw();inspector();renderChecks();const inspectorPanel=document.querySelector('aside');if(inspectorPanel)inspectorPanel.scrollTop=inspectorScroll;if(buildingState)saveView();window.KERN_UI?.sync()}
function field(label,key,value,type='text',disabled=false){return `<label class="field"><span>${label}</span><input data-key="${key}" type="${type}" value="${esc(value)}" ${type==='number'?'step="0.5"':''} ${disabled?'disabled':''}></label>`}
function inspector(){
  const r=room(selected),d=connection(selectedDoor),editable=canEdit(r),locked=!!r&&!editable,source=sourceFor(r),group=stairGroup(r),linked=groupRefs(group);
  $('selectiontype').textContent=d?'Connection':source?'Derived footprint':r?(isStair(r)?'Stair':locked?'Locked space':'Room'):'Nothing selected';
  const doors=r?floor().doors.filter(d=>d.a===r.id||d.b===r.id):floor().doors,neighbors=r?floor().rooms.filter(b=>b.id!==r.id&&b.type!=='void'&&boundary(r,b)):[];
  let fields='';
  if(d){const g=doorGeometry(d),type=doorType(d);fields=`<div class="connectionfields"><h2>${esc(room(d.a)?.name||d.a)} ↔ ${esc(room(d.b)?.name||d.b)}</h2><label class="field"><span>Connection type</span><select data-doorkey="type">${typeOptions(type)}</select></label><label class="field widthfield"><span>Total clear width · <output id="doorwidthlabel">${formatWidth(d.width)}</output> m${type==='double'?' · two equal leaves':''}</span><input id="doorwidthslider" data-doorkey="width" type="range" step="1" min="5" max="${Math.max(5,maxDoorDecimetres(d))}" value="${Math.round(d.width*10)}" aria-label="Total clear width in metres" aria-valuetext="${formatWidth(d.width)} metres" ${isFullOpen(d)||maxDoorDecimetres(d)<5?'disabled':''}><span class="rangeends"><span>0.5 m</span><span>${formatWidth(Math.max(5,maxDoorDecimetres(d))/10)} m</span></span></label><label class="field"><span>Position along shared wall · %</span><input data-doorkey="offset" type="range" min="0" max="100" step="1" value="${Math.round((d.offset??.5)*100)}" ${isFullOpen(d)?'disabled':''}></label>${type==='open'?`<label class="checklabel"><input data-doorkey="fullWidth" type="checkbox" ${isFullOpen(d)?'checked':''}> Entire shared wall open</label>`:''}<label class="checklabel"><input data-doorkey="sealed" type="checkbox" ${d.sealed?'checked':''}> Sealed / discoverable</label><p class="small">${d.cemented?'This former doorway is concreted shut. It is not a usable connection.':!g?'⚠ Detached or too wide. Rejoin the rooms or reduce the width.':isFullOpen(d)?'No door. The entire shared wall is open; uncheck above to set a movable opening.':type==='double'?`Two ${Number((d.width/2).toFixed(2))} m leaves. Drag the opening along its shared wall.`:type==='open'?'No door leaf. Drag the opening along its shared wall.':'Drag the door along its shared wall.'}</p><button class="danger" id="deleteconnection">Delete connection</button></div>`}
  else fields=`<div class="commonfields">`+field('Label','name',r?.name??'','text',!r||!!source)+`<label class="field"><span>Room type</span><select data-key="type" ${!r||source?'disabled':''}>${!r?'<option>—</option>':''}${roomTypes.map(t=>{const o=roomTypeOption(r,t);return `<option value="${t}" ${t===r?.type?'selected':''} ${!o.valid?'disabled':''}>${t==='core'&&r&&isStair(r)?'Stairs · connected geometry':roomTypeLabels[t]}</option>`}).join('')}</select></label><div class="gridfields">${field('X · m','x',r?.x??'','number',!editable)}${field('Y · m','y',r?.y??'','number',!editable)}${field('Width · m','w',r?.w??'','number',!editable)}${field('Depth · m','h',r?.h??'','number',!editable)}</div><p class="selectionhint small">${r?`${(r.w*r.h).toFixed(1)} m² · ${source?'Follows its source room':locked?'Locked alignment':preview?'Choose Select to drag or resize':'Drag to move · corners or edges to resize'}`:'Select a room or a connection on the plan'}</p>${source?`<button id="selectsource" data-sourcefloor="${esc(source.floor)}" data-sourceroom="${esc(source.room)}">Edit source · ${esc(source.floor)}</button>`:''}${r&&!source&&!['void','solid'].includes(r.type)?`<label class="checklabel"><input data-key="entrance" type="checkbox" ${floor().entrances.includes(r.id)?'checked':''}> Floor entrance / arrival</label>`:''}<button class="danger" id="deleteroom" ${!editable?'disabled':''}>${(model.verticalConnections||[]).some(c=>c.room===r?.id&&c.authoringVersion===1&&c.floors.includes(floorId))?'Delete stair stack':'Delete room'}${r?' · '+doors.length+' connection'+(doors.length===1?'':'s'):''}</button></div>`;
  if(!r&&!d)fields='<div class="inspector-empty"><h2>Select a room or connection</h2><p>Tap a space on the plan to edit its name, size or type. Use the tools above to draw and connect rooms.</p></div>';if(r&&canConvertStair(r))fields=fields.replace(/<\/div>$/,`<button id="convertstair" class="previewstair">Convert to stairs</button></div>`);const detail=stairDetail(r);if(detail)fields=fields.replace(/<\/div>$/,stairInspector(detail)+'</div>');$('inspector').innerHTML=fields+`<section class="connections"><h2>Connections <span class="small">${r?'This room':'This floor'} · ${doors.length}</span></h2>${!doors.length?'<p class="small">No connections. Choose Connect, then drag between rooms sharing a wall.</p>':''}<div class="connectionlist">${doors.map(d=>`<div class="doorrow ${d.id===selectedDoor?'selected':''}"><button class="connectionselect" data-editdoor="${esc(d.id)}"><span>${r?esc(room(d.a===r.id?d.b:d.a)?.name||'Missing room'):esc(room(d.a)?.name||d.a)+' ↔ '+esc(room(d.b)?.name||d.b)}<small>${doorType(d)==='open'?(isFullOpen(d)?'Full-wall open passage':'Open passage · '+formatWidth(d.width)+' m'):doorType(d)==='double'?'Double door · '+formatWidth(d.width)+' m total':'Single door · '+formatWidth(d.width)+' m'}${d.cemented?' · cemented shut':d.sealed?' · sealed':''}${!doorGeometry(d)?' · ⚠ detached':''}</small></span></button><button data-removedoor="${esc(d.id)}" aria-label="Delete connection" title="Delete connection · undoable">×</button></div>`).join('')}</div>${r?`<div class="connect"><select id="neighbor" aria-label="Connect adjacent room"><option value="">Adjacent room…</option>${neighbors.map(n=>`<option value="${esc(n.id)}">${esc(n.name)}</option>`).join('')}</select><button id="connect">Connect</button></div>`:''}<label class="field connectiontype"><span>New connection</span><select id="newconnectiontype">${typeOptions(connectionKind)}</select></label>${r&&isStair(r)?`<p class="small">${linked.length>1?'Linked stair · moving or resizing updates '+linked.map(ref=>esc(ref.floor)).join(', ')+' together.':'Local transfer stair · this floor only.'}</p>`:''}</section>`;
}
function updateTools(){$('belowtoggle').checked=showBelow;$('belowlabel').textContent='Lower floor stack'+(lowerFloors().length?' · '+lowerFloors().map(([id])=>id).join(' / '):' · none');for(const name of ['select','connect','disconnect','draw'])$('tool-'+name).setAttribute('aria-pressed',!preview&&name===tool);$('toolhint').textContent=$('notice').textContent||toolHint();$('previewmode').textContent=preview?'Preview · pan / zoom':'Edit · '+tool;$('previewmode').setAttribute('aria-pressed',preview);$('plan').setAttribute('data-tool',preview?'pan':tool)}
function connectionWithType(d,value){const next=clone(d);next.kind=value==='open'?'open':'door';next.leaves=value==='double'?2:1;if(doorType(d)!==value&&value!=='open')next.width=value==='single'?1.2:2;if(value==='open'){next.fullWidth=false;delete next.leaves}else delete next.fullWidth;return next}
function updateConnection(d,key,value){
  const next=key==='type'?connectionWithType(d,value):clone(d);
  if(key==='width'){value=Math.round(Number(value)*10)/10;if(!Number.isFinite(value)||value<.5||value>8){notify('Width must be 0.5–8 m');inspector();return}next.width=value}
  else if(key==='offset')next.offset=Number(value)/100;
  else if(key!=='type')next[key]=value;
  if(!doorGeometry(next)&&doorGeometry(d)){notify('That opening does not fit the shared wall');inspector();return}
  commit(()=>{Object.assign(d,next);if(key==='type'){if(value==='open')delete d.leaves;else delete d.fullWidth}});
}
function formatWidth(n){return String(Math.round(n*10)/10)}
function maxDoorDecimetres(d){const g=boundary(room(d.a),room(d.b));return g?Math.max(0,Math.min(80,Math.floor((g.hi-g.lo-.2+1e-7)*10))):0}
function previewDoorWidth(input){const d=connection(selectedDoor);if(!d||isFullOpen(d))return;const max=maxDoorDecimetres(d);if(max<5){notify('Rejoin the rooms before changing the width');return}if(!widthEdit)widthEdit={id:d.id,before:JSON.stringify(model),changed:false,savedText:$('saved').textContent,savedState:$('saved').dataset.state};const units=Math.min(max,Math.max(5,Math.round(Number(input.value))));if(!Number.isFinite(units))return;d.width=units/10;widthEdit.changed=JSON.stringify(model)!==widthEdit.before;input.value=units;input.setAttribute('aria-valuetext',formatWidth(d.width)+' metres');$('doorwidthlabel').textContent=formatWidth(d.width);if(widthEdit.changed)markUnsaved();draw()}
function finishWidthEdit(cancel=false){if(!widthEdit)return;const edit=widthEdit,restoreFocus=document.activeElement?.id==='doorwidthslider';widthEdit=null;if(cancel)model=JSON.parse(edit.before);else if(edit.changed){history.push(edit.before);if(history.length>80)history.shift();future=[];save()}render();if(restoreFocus)$('doorwidthslider')?.focus?.({preventScroll:true});if(cancel){$('saved').textContent=edit.savedText;$('saved').dataset.state=edit.savedState}}
$('inspector').oninput=e=>{if(e.target.dataset.doorkey==='width')previewDoorWidth(e.target)};
$('inspector').onpointerup=e=>{if(e.target.dataset.doorkey==='width')finishWidthEdit(false)};
$('inspector').onpointercancel=()=>finishWidthEdit(true);
$('inspector').onkeydown=e=>{if(e.key==='Escape'&&widthEdit){e.preventDefault();e.stopPropagation?.();finishWidthEdit(true)}};
$('inspector').onfocusout=e=>{if(e.target.dataset.doorkey==='width')finishWidthEdit(false)};
// Room and connection menus share focus, dismissal, placement and undo paths.
function roomTypeOption(r,type){
  const checked=r?.type===type;let reason='';
  if(!r||!roomTypes.includes(type))reason='Choose an existing room type';
  else if(!checked){
    const source=sourceFor(r);
    if(source)reason='Derived footprint · edit its source on '+source.floor;
    else if(isSourceRoom(r))reason='Source footprint · its type keeps the linked voids aligned';
    else if(r.locked&&!isStair(r))reason='Locked footprint · room type is protected';
    else if(isStair(r)&&['void','solid','courtyard'].includes(type))reason='This type would break the stair route';
  }
  return {type,checked,valid:!reason,reason};
}
function updateRoomType(r,type){
  const option=roomTypeOption(r,type);if(!option.valid){notify(option.reason);inspector();return false}if(option.checked)return true;
  const linked=groupRefs(stairGroup(r)),refs=linked.length?linked.map(ref=>ref.room):[r];
  commit(()=>{for(const target of refs)target.type=type});
  notify(linked.length>1?'Room type updated on '+linked.map(ref=>ref.floor).join(', ')+' · stair links preserved':'Room type updated · Undo restores it');return true;
}
function showContextMenu(x,y,current){
  const menu=$('connectionmenu');menu.hidden=false;const vw=window.innerWidth||document.documentElement?.clientWidth||900,vh=window.innerHeight||document.documentElement?.clientHeight||600;
  menu.style.maxWidth=Math.max(1,vw-16)+'px';menu.style.maxHeight=Math.max(1,vh-16)+'px';
  const rect=menu.getBoundingClientRect(),pos=menuPosition(x,y,rect.width,rect.height,vw,vh);menu.style.left=pos.x+'px';menu.style.top=pos.y+'px';
  const active=menu.querySelector?.(`[data-menu-action="${current}"]`);active?.focus({preventScroll:true});active?.scrollIntoView?.({block:'nearest'});
}
function openRoomMenu(id,x,y){
  resetTransient(true);closeToolbarMenus();const r=room(id);if(!r)return;
  selected=id;selectedDoor=null;render();connectionMenu={kind:'room',id,floor:floorId,variant};
  const menu=$('connectionmenu'),linked=groupRefs(stairGroup(r)),source=sourceFor(r);
  menu.setAttribute('aria-label','Room type');
  const note=source?'Follows its source on '+source.floor:linked.length>1?'Applies to '+linked.map(ref=>ref.floor).join(', ')+'. Stair links stay connected.':isStair(r)?'Local stair. Its route stays connected.':isSourceRoom(r)?'Source for linked footprints. Type is protected.':r.locked?'Locked footprint. Type is protected.':'';
  menu.innerHTML=`<div class="connectionmenu-heading">Room type</div>${note?`<p class="contextmenu-note">${esc(note)}</p>`:''}`+roomTypes.map(type=>{const o=roomTypeOption(r,type);return `<button type="button" role="menuitemradio" aria-checked="${o.checked}" aria-disabled="${!o.valid}" tabindex="-1" data-menu-action="${type}"><span class="menu-check" aria-hidden="true">${o.checked?'✓':''}</span><span class="room-type-swatch" aria-hidden="true" style="background:${colors[type]}"></span><span>${roomTypeLabels[type]}${o.reason?`<small>${esc(o.reason)}</small>`:''}</span></button>`}).join('');
  menu.innerHTML+=`${canConvertStair(r)?'<button type="button" role="menuitem" tabindex="-1" data-menu-action="convert-stair">Convert to stairs…</button><div class="connectionmenu-divider"></div>':isStair(r)?'<button type="button" role="menuitem" tabindex="-1" data-menu-action="edit-stair">Edit connected floors…</button><div class="connectionmenu-divider"></div>':''}`;
  showContextMenu(x,y,r.type);
}
// Connection conversion keeps the inspector's fit validation.
function connectionTypeOption(d,type){
  const next=connectionWithType(d,type),g=boundary(room(d.a),room(d.b)),valid=!!doorGeometry(next);
  return {type,checked:doorType(d)===type,valid,reason:valid?'':!g?'Rooms must share a wall':`Needs ${(next.width+.2).toFixed(1)} m of shared wall`};
}
function closeConnectionMenu(restoreFocus=false){
  if(!connectionMenu)return;connectionMenu=null;const menu=$('connectionmenu');menu.hidden=true;menu.innerHTML='';if(restoreFocus)$('plan').focus?.({preventScroll:true});
}
function menuPosition(x,y,width,height,viewportWidth,viewportHeight){const margin=8;return {x:Math.max(margin,Math.min(x,viewportWidth-width-margin)),y:Math.max(margin,Math.min(y,viewportHeight-height-margin))}}
function openConnectionMenu(id,x,y){
  resetTransient(true);closeToolbarMenus();const d=connection(id);if(!d)return;
  selected=null;selectedDoor=id;render();connectionMenu={kind:'connection',id,floor:floorId,variant};
  const menu=$('connectionmenu'),labels={single:'Single door',double:'Double door',open:'Open passage'};
  menu.setAttribute('aria-label','Connection actions');menu.innerHTML=`<div class="connectionmenu-heading">Connection type</div>`+['single','double','open'].map(type=>{const o=connectionTypeOption(d,type);return `<button type="button" role="menuitemradio" aria-checked="${o.checked}" aria-disabled="${!o.valid}" tabindex="-1" data-menu-action="${type}"><span class="menu-check" aria-hidden="true">${o.checked?'✓':''}</span><span>${labels[type]}${o.reason?`<small>${esc(o.reason)}</small>`:''}</span></button>`}).join('')+`<div class="connectionmenu-divider" role="separator"></div><button type="button" role="menuitem" tabindex="-1" data-menu-action="delete" class="menu-delete"><span class="menu-check" aria-hidden="true">×</span><span>Delete connection</span></button>`;
  showContextMenu(x,y,doorType(d));
}
function applyConnectionMenu(action){
  const state=connectionMenu;if(state?.kind==='room'){const r=state.floor===floorId&&state.variant===variant?room(state.id):null;if(!r){closeConnectionMenu();return}if(action==='convert-stair'||action==='edit-stair'){closeConnectionMenu();openStairCreation(r.id);return}const o=roomTypeOption(r,action);if(!o.valid){notify(o.reason);return}closeConnectionMenu(true);if(!o.checked)updateRoomType(r,action);return}
  const d=state&&state.floor===floorId&&state.variant===variant?connection(state.id):null;if(!d){closeConnectionMenu();return}
  if(action==='delete'){closeConnectionMenu(true);removeConnections([d.id]);return}
  if(!['single','double','open'].includes(action))return;
  const option=connectionTypeOption(d,action);if(!option.valid){notify(option.reason);return}
  closeConnectionMenu(true);if(!option.checked)updateConnection(d,'type',action);
}
function connectionMenuKey(e){
  if(!connectionMenu)return;
  if(e.key==='Tab'){closeConnectionMenu(true);return}
  e.stopPropagation?.();
  if(e.key==='Escape'){e.preventDefault();closeConnectionMenu(true);return}
  const buttons=[...$('connectionmenu').querySelectorAll('button[data-menu-action]')],index=buttons.indexOf(document.activeElement);
  if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?buttons.length-1:(index+(e.key==='ArrowDown'?1:buttons.length-1))%buttons.length;buttons[next]?.focus();return}
  if(e.key==='Enter'||e.key===' '){e.preventDefault();if(e.repeat)return;applyConnectionMenu(e.target.closest?.('[data-menu-action]')?.dataset.menuAction)}
}
$('connectionmenu').onclick=e=>{const action=e.target.closest?.('[data-menu-action]')?.dataset.menuAction;if(action)applyConnectionMenu(action)};
$('connectionmenu').onkeydown=connectionMenuKey;
$('connectionmenu').oncontextmenu=e=>e.preventDefault();
$('plan').oncontextmenu=e=>{
  const hits=document.elementsFromPoint?.(e.clientX,e.clientY)||[],door=e.target.closest?.('[data-door]')||hits.map(el=>el.closest?.('[data-door]')).find(Boolean),roomHit=e.target.closest?.('[data-room]')||e.target.closest?.('[data-handle]')||hits.map(el=>el.closest?.('[data-room]')).find(Boolean);
  if(door?.dataset.door){e.preventDefault();openConnectionMenu(door.dataset.door,e.clientX,e.clientY);return}
  const id=roomHit?.dataset.room||roomHit?.dataset.handle;if(id){e.preventDefault();openRoomMenu(id,e.clientX,e.clientY);return}
  if(drag||gesture)resetTransient(true);closeConnectionMenu();
};
document.addEventListener?.('pointerdown',e=>{if(!e.target.closest?.('.toolbar-popover'))closeToolbarMenus();if(connectionMenu&&!e.target.closest?.('#connectionmenu'))closeConnectionMenu()},true);
window.addEventListener?.('resize',()=>closeConnectionMenu());
function renderChecks(){const c=checks(),errors=c.filter(c=>c.kind!=='sealed');$('checkcount').textContent=errors.length?errors.length+' to review':'Connected';$('checks').innerHTML=errors.length?errors.map(c=>`<p class="check warn">△ ${esc(c.text)}</p>`).join(''):'<p class="check">✓ No room overlaps<br>✓ Doors meet shared walls<br>✓ All open rooms reach an entrance</p>';if(floor().rooms.some(r=>r.outsideOnly))$('checks').innerHTML+='<p class="small">◇ Survey suite: intentionally outside-only, with its own entry</p>';for(const c1 of c.filter(c=>c.kind==='sealed'))$('checks').innerHTML+=`<p class="small">◇ ${esc(c1.text)}</p>`}
$('floors').onclick=e=>{const id=e.target.closest?.('[data-floor]')?.dataset.floor||e.target.dataset.floor;if(id){finishDrag(true);floorId=id;selected=null;selectedDoor=null;pendingRoom=null;render();saveView()}};
$('inspector').onchange=e=>{const k=e.target.dataset.key,r=room(selected),dk=e.target.dataset.doorkey;if(e.target.id==='newconnectiontype'){connectionKind=e.target.value;refreshInteraction();return}if(dk==='width'){previewDoorWidth(e.target);finishWidthEdit(false);return}if(dk){const d=connection(selectedDoor);if(d)updateConnection(d,dk,e.target.type==='checkbox'?e.target.checked:e.target.value);return}if(!k||!r||sourceFor(r))return;if(k==='entrance'){commit(()=>{floor().entrances=floor().entrances.filter(id=>id!==r.id);if(e.target.checked)floor().entrances.push(r.id)});return}if(k==='type'){updateRoomType(r,e.target.value);return}let v=e.target.value;if(['x','y','w','h'].includes(k)){if(!canEdit(r))return;v=Math.round(Number(v)*2)/2;if(!Number.isFinite(v)||((k==='w'||k==='h')&&v<1)||Math.abs(v)>150){notify('Use a size from 1–150 m and coordinates within ±150 m');inspector();return}}commit(()=>{r[k]=v;if(k==='name'&&r.diagramLabel!==undefined)r.diagramLabel=v;if(['x','y','w','h'].includes(k))syncStairEdit(r)})};
$('inspector').onclick=e=>{const b=e.target.closest?.('button')||e.target,r=room(selected);if(b.id==='convertstair'||b.id==='editstairfloors'){openStairCreation(selected);return}if(b.id==='previewstair'){openStairPreview();return}if(b.id==='selectsource'){finishDrag(true);floorId=b.dataset.sourcefloor;selected=b.dataset.sourceroom;selectedDoor=null;render();return}if(b.dataset.removedoor){removeConnections([b.dataset.removedoor]);return}if(b.dataset.editdoor){openDoor(connection(b.dataset.editdoor));return}if(b.id==='deleteroom'||b.id==='deleteconnection'){deleteSelection();return}if(b.id==='connect'&&r){const to=$('neighbor').value,b=room(to),g=boundary(r,b);if(g)addConnection(r.id,to,g.axis==='h'?{x:(g.lo+g.hi)/2,y:g.fixed}:{x:g.fixed,y:(g.lo+g.hi)/2})}};
function openDoor(d){if(!d)return;finishDrag(true);selected=null;selectedDoor=d.id;render()}
function point(e,transform){const p=$('plan').createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform(transform||$('plan').getScreenCTM().inverse())}
const snap=n=>Math.round(n*2)/2;
function roomAt(p,exclude){return [...floor().rooms].reverse().find(r=>r.id!==exclude&&p.x>=r.x&&p.x<=r.x+r.w&&p.y>=r.y&&p.y<=r.y+r.h)}
function beginDrag(e,values){const transform=$('plan').getScreenCTM().inverse();drag={pointerId:e.pointerId,start:point(e,transform),current:point(e,transform),transform,before:JSON.stringify(model),changed:false,...values};$('plan').setPointerCapture(e.pointerId)}
function editPointerDown(e){
  if(e.button!==0||drag)return;e.preventDefault?.();
  const handle=e.target.closest('[data-handle]'),door=e.target.closest('[data-door]'),el=e.target.closest('[data-room]'),id=handle?.dataset.handle||el?.dataset.room,p=point(e);
  if(tool==='draw'){if(floor().rooms.length>=300){notify('This floor has reached 300 rooms');return}selected=null;selectedDoor=null;beginDrag(e,{kind:'draw'});draw();return}
  if(tool==='disconnect'&&door){removeConnections([door.dataset.door]);finishOneShot();return}
  if(tool==='connect'||tool==='disconnect'){
    const r=room(id)||roomAt(p);if(!r){pendingRoom=null;draw();return}
    if(pendingRoom&&pendingRoom!==r.id){const from=pendingRoom;pendingRoom=null;if(tool==='connect')addConnection(from,r.id,p);else removeConnections(linkedConnections(from,r.id).map(d=>d.id));finishOneShot();return}
    selected=r.id;selectedDoor=null;beginDrag(e,{kind:tool,id:r.id});render();return;
  }
  pendingRoom=null;
  if(door&&!handle){const d=connection(door.dataset.door);if(!d)return;selected=null;selectedDoor=d.id;if(doorGeometry(d)&&!isFullOpen(d))beginDrag(e,{kind:'door',id:d.id,original:clone(d)});render();return}
  if(!id){selected=null;selectedDoor=null;render();return}
  selected=id;selectedDoor=null;const r=room(id);if(!r)return;
  if(canEdit(r))beginDrag(e,{kind:'room',id,original:clone(r),edge:handle?.dataset.edge||null});render();
}
function drawnRoom(d){const x=snap(Math.min(d.start.x,d.current.x)),y=snap(Math.min(d.start.y,d.current.y)),w=snap(Math.abs(d.current.x-d.start.x)),h=snap(Math.abs(d.current.y-d.start.y));return {x,y,w,h}}
function editPointerMove(e){
  if(!drag||e.pointerId!==drag.pointerId)return;
  const p=point(e,drag.transform);drag.current=p;
  if(['connect','disconnect','draw'].includes(drag.kind)){drag.changed=Math.hypot(p.x-drag.start.x,p.y-drag.start.y)>.15;draw();return}
  if(drag.kind==='door'){const d=connection(drag.id),g=doorGeometry(d);if(g){const axis=g.axis==='h'?'x':'y',original=doorGeometry(drag.original);d.offset=offsetAt(d,g,{x:axis==='x'?(original.start+original.end)/2+p.x-drag.start.x:p.x,y:axis==='y'?(original.start+original.end)/2+p.y-drag.start.y:p.y});drag.changed=JSON.stringify(d)!==JSON.stringify(drag.original)}}
  else{const r=room(drag.id),dx=snap(p.x-drag.start.x),dy=snap(p.y-drag.start.y);if(drag.edge)Object.assign(r,resizeRoom(drag.original,drag.edge,dx,dy));else{r.x=Math.max(-150,Math.min(150,Math.round((drag.original.x+dx)*10)/10));r.y=Math.max(-150,Math.min(150,Math.round((drag.original.y+dy)*10)/10))}drag.changed=JSON.stringify(r)!==JSON.stringify(drag.original)}
  if(drag.changed){if(drag.kind==='room')syncStairEdit(room(drag.id));markUnsaved()}draw();
}
function finishDrag(cancel=false){
  if(!drag)return;const ended=drag;drag=null;
  if(cancel){model=JSON.parse(ended.before);if(ended.changed)$('saved').textContent=lastSave?'Saved in this browser':'Unchanged · browser-local plan'}
  else if(ended.kind==='connect'||ended.kind==='disconnect'){
    const target=roomAt(ended.current,ended.id);if(ended.changed&&target){pendingRoom=null;if(ended.kind==='connect')addConnection(ended.id,target.id,ended.current);else removeConnections(linkedConnections(ended.id,target.id).map(d=>d.id))}else if(!ended.changed){pendingRoom=ended.id;notify('Now choose the other room')}else{pendingRoom=null;notify('Finish inside another room')}
  }else if(ended.kind==='draw'){
    const r=drawnRoom(ended);if(ended.changed&&r.w>=1&&r.h>=1&&r.w<=150&&r.h<=150&&Math.abs(r.x)<=150&&Math.abs(r.y)<=150){commit(()=>{const id=uniqueId('r');floor().rooms.push({id,name:'New room',...r,type:'tech'});selected=id;selectedDoor=null});if(!heldTool)tool='select'}else if(ended.changed)notify('Draw at least 1 × 1 m, within the ±150 m plan range');
  }else if(ended.changed){if(ended.kind==='room')syncStairEdit(room(ended.id));history.push(ended.before);if(history.length>80)history.shift();future=[];save()}
  if($('plan').hasPointerCapture?.(ended.pointerId))$('plan').releasePointerCapture(ended.pointerId);if(!cancel&&ended.changed)finishOneShot();render();
}
function gestureStart(){const pts=[...pointers.values()];if(!pts.length){gesture=null;return}const c=pts.length>1?{x:(pts[0].x+pts[1].x)/2,y:(pts[0].y+pts[1].y)/2}:pts[0];gesture={center:c,distance:pts.length>1?Math.hypot(pts[1].x-pts[0].x,pts[1].y-pts[0].y):0,zoom,pan:{...pan}}}
$('plan').onpointerdown=e=>{closeToolbarMenus();if(e.button!==0&&e.button!==1)return;if(drag)return;rememberPointer(e);if(e.button===1||spaceHeld)e.preventDefault?.();const blankTouch=e.pointerType==='touch'&&tool==='select'&&!e.target.closest('[data-room]')&&!e.target.closest('[data-door]')&&!e.target.closest('[data-handle]');if(!preview&&!spaceHeld&&e.button===0&&!blankTouch&&!pointers.size){editPointerDown(e);return}pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});$('plan').setPointerCapture(e.pointerId);gestureStart();refreshInteraction()};
$('plan').onmousedown=e=>{if(e.button===1)e.preventDefault()};$('plan').onauxclick=e=>{if(e.button===1)e.preventDefault()};
$('plan').onpointermove=e=>{if(!drag||drag.pointerId===e.pointerId)rememberPointer(e);if(drag){editPointerMove(e);return}if(!pointers.has(e.pointerId)||!gesture){if(['connect','disconnect'].includes(tool))refreshInteraction();return}pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});const pts=[...pointers.values()],c=pts.length>1?{x:(pts[0].x+pts[1].x)/2,y:(pts[0].y+pts[1].y)/2}:pts[0],rect=$('plan').getBoundingClientRect(),b=viewBounds||(viewBounds=bounds()),scale=Math.min(rect.width/b.w,rect.height/b.h)*gesture.zoom;pan={x:gesture.pan.x-(c.x-gesture.center.x)/scale,y:gesture.pan.y-(c.y-gesture.center.y)/scale};if(pts.length>1&&gesture.distance)zoom=Math.max(.5,Math.min(5,gesture.zoom*Math.hypot(pts[1].x-pts[0].x,pts[1].y-pts[0].y)/gesture.distance));draw()};
function endPointer(e,cancel=false){if(drag?.pointerId===e.pointerId)finishDrag(cancel);if(cancel&&gesture&&pointers.has(e.pointerId)){pan={...gesture.pan};zoom=gesture.zoom;draw()}pointers.delete(e.pointerId);gestureStart();if(e.pointerType==='touch')hoverPointer=null;refreshInteraction();saveView()}
$('plan').onpointerenter=e=>{rememberPointer(e);refreshInteraction()};$('plan').onpointerleave=()=>{hoverPointer=null;refreshInteraction()};
$('plan').onpointerup=e=>endPointer(e);$('plan').onpointercancel=e=>{endPointer(e,true);resetTransient(true)};$('plan').onlostpointercapture=e=>{if(drag?.pointerId===e.pointerId||pointers.has(e.pointerId)){endPointer(e,true);resetTransient(true)}};
$('plan').onwheel=e=>{e.preventDefault();if(drag)return;zoom=Math.max(.5,Math.min(5,zoom*(e.deltaY>0?.92:1.08)));draw();saveView()};
$('previewmode').onclick=()=>resetTransient(true);
for(const name of ['select','connect','disconnect','draw'])$('tool-'+name).onclick=()=>{resetTransient(true);setTool(name);oneShotTool=name!=='select'};
$('closepanels').onclick=()=>{$('paneltoggle').onclick()};$('paneltoggle').onclick=()=>{document.body.classList.toggle('panelsopen');$('paneltoggle').setAttribute('aria-expanded',document.body.classList.contains('panelsopen'))};
$('undo').onclick=undo;$('redo').onclick=redo;$('add').onclick=()=>{resetTransient(true);setTool('draw');oneShotTool=true};$('dimensions').onchange=()=>{draw();saveView()};$('belowtoggle').onchange=e=>{showBelow=e.target.checked;draw();saveView()};$('zoomin').onclick=()=>{zoom=Math.min(5,zoom+.25);draw();saveView()};$('zoomout').onclick=()=>{zoom=Math.max(.5,zoom-.25);draw();saveView()};$('fit').onclick=()=>{zoom=1;pan={x:0,y:0};viewBounds=null;draw();saveView()};$('help').onclick=()=>$('helpdialog').showModal();$('closehelp').onclick=()=>$('helpdialog').close();
function download(name,data,type){const a=document.createElement('a'),url=URL.createObjectURL(new Blob([data],{type}));a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}$('building').onchange=e=>switchBuilding(e.target.value);$('geometryexport').onclick=()=>download(fileName(currentBuilding().name)+'-geometry.json',JSON.stringify(buildGeometry(model),null,2),'application/json');$('export').onclick=exportBuilding;$('backupall').onclick=exportAll;$('svgexport').onclick=()=>{download(`${fileName(currentBuilding().name)}-${floorId}.svg`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${bounds(true).x} ${bounds(true).y} ${bounds(true).w} ${bounds(true).h}" width="1360" height="1040">${planMarkup(true)}</svg>`,'image/svg+xml');notify(floorId+' exported as vector SVG')};$('import').onclick=()=>$('file').click();
function createBuilding(name){name=typeof name==='string'?name:prompt('Building name:','New building');if(name?.trim())return addBuilding(window.KERN_BUILDINGS.blank(name.trim()))}
function duplicateBuilding(name){const b=currentBuilding();name=typeof name==='string'?name:prompt('Name for the duplicate:',b.name+' copy');if(!name?.trim())return;finishWidthEdit(false);captureBuilding();const copy=window.KERN_BUILDINGS.building(name,b.plan,b.sourceVariant);copy.view=clone(b.view);return addBuilding(copy)}
function renameBuilding(name){const b=currentBuilding();name=typeof name==='string'?name:prompt('Building name:',b.name);if(!name?.trim())return;b.name=name.trim().slice(0,100);render();save();closeToolbarMenus()}
$('newbuilding').onclick=createBuilding;$('duplicatebuilding').onclick=duplicateBuilding;$('renamebuilding').onclick=renameBuilding;$('addfloor').onclick=addFloor;$('renamefloor').onclick=renameFloor;$('removefloor').onclick=removeFloor;$('archive').onclick=openArchive;$('closearchive').onclick=()=>$('archivedialog').close();$('archivelist').onclick=e=>{const b=e.target.closest?.('[data-archive]');if(b)restoreArchive(b.dataset.archive,b.dataset.saved==='true')};$('legacybackup').onclick=()=>{const data=readLocal(window.KERN_BUILDINGS.BACKUP);if(data)download('kern-legacy-migration-backup.json',data,'application/json');else notify('No legacy backup is stored in this browser')};
function validateImport(p){if(p?.version!==1||p.units!=='metres'||!p.floors||!p.floors.L0||Object.keys(p.floors).length>20)throw Error('Expected a version 1 building plan');for(const id of Object.keys(p.floors)){if(!nameSafeFloorId(id))throw Error('Invalid floor code');const f=p.floors[id];if(typeof f?.name!=='string'||f?.z!==undefined&&!Number.isFinite(f.z))throw Error('Invalid floor name or elevation');if(!f||!Array.isArray(f.rooms)||!Array.isArray(f.doors)||!Array.isArray(f.entrances)||f.rooms.length>300||f.doors.length>600)throw Error('Missing floor data or too many objects');const ids=new Set();for(const r of f.rooms){if(typeof r.id!=='string'||ids.has(r.id)||typeof r.name!=='string'||r.name.length>150||!Object.hasOwn(colors,r.type))throw Error('Invalid room data');ids.add(r.id);if(r.z!==undefined&&(!Number.isFinite(r.z)||Math.abs(r.z)>150))throw Error('Invalid room elevation');for(const k of ['x','y','w','h'])if(!Number.isFinite(r[k])||Math.abs(r[k])>150||Math.abs(r[k]*10-Math.round(r[k]*10))>1e-6)throw Error('Room dimensions must use 0.1 m increments');if(r.w<1||r.h<1)throw Error('Invalid room size')}for(const d of f.doors)if(!ids.has(d.a)||!ids.has(d.b)||!Number.isFinite(d.width)||d.width<.5||d.width>8||!Number.isFinite(d.offset)||d.offset<0||d.offset>1)throw Error('Invalid door data');if(f.entrances.some(id=>!ids.has(id)))throw Error('Invalid entrance');for(const e of(f.externals||[f.external].filter(Boolean)))if(!ids.has(e.room)||!['e','w','n','s'].includes(e.side)||!Number.isFinite(e.width))throw Error('Invalid approach')}}$('file').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>20e6)throw Error('File exceeds 20 MB');importBuildings(JSON.parse(await file.text()),(file.name||'Imported building').replace(/\.json$/i,''))}catch(err){alert('Could not import building: '+err.message)}e.target.value=''};
window.onkeydown=e=>{
  if(e.key==='Escape'&&widthEdit){e.preventDefault();finishWidthEdit(true);return}
  if(connectionMenu){connectionMenuKey(e);return}
  if(e.key==='Escape'&&($('filemenu')?.open||$('viewmenu')?.open||$('buildingmenu')?.open)){e.preventDefault();closeToolbarMenus(true);return}
  if(e.target.closest?.('.toolbar-popover'))return;
  if(isTypingTarget(e.target)||document.querySelector('dialog[open]'))return;
  if(e.key==='Escape'){e.preventDefault();closeToolbarMenus(true);resetTransient(true);return}
  if(e.key==='ContextMenu'||e.shiftKey&&e.key==='F10'){
    const id=e.target.closest?.('[data-door]')?.dataset.door||e.target.closest?.('[data-editdoor]')?.dataset.editdoor||selectedDoor,d=connection(id),r=room(e.target.closest?.('[data-room]')?.dataset.room||selected);
    if(d||r){e.preventDefault();if(e.repeat)return;const p=$('plan').createSVGPoint();if(d){const g=doorGeometry(d);if(g){p.x=g.axis==='h'?(g.start+g.end)/2:g.fixed;p.y=g.axis==='h'?g.fixed:(g.start+g.end)/2}}else{p.x=r.x+r.w/2;p.y=r.y+r.h/2}const screen=p.matrixTransform($('plan').getScreenCTM());d?openConnectionMenu(id,screen.x,screen.y):openRoomMenu(r.id,screen.x,screen.y)}return;
  }
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();e.shiftKey?redo():undo();return}
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='y'){e.preventDefault();redo();return}
  if(e.ctrlKey||e.metaKey||e.altKey)return;
  if(['Delete','Backspace'].includes(e.key)&&(selected||selectedDoor)){e.preventDefault();deleteSelection();return}
  if(e.code==='Space'||e.key===' '){e.preventDefault();if(!e.repeat&&!spaceHeld){finishDrag(true);spaceHeld=true;preview=true;pendingRoom=null;render()}return}
  const mode={c:'connect',x:'disconnect',p:'draw'}[e.key.toLowerCase()];
  if(mode){e.preventDefault();if(spaceHeld||pointers.size)return;if(!e.repeat&&heldTool!==e.key.toLowerCase()){setTool(mode);heldTool=e.key.toLowerCase();oneShotTool=false}return}
  if(!preview&&selected&&['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)){const r=room(selected);if(!canEdit(r))return;e.preventDefault();commit(()=>{r.x+=e.key==='ArrowLeft'?-.5:e.key==='ArrowRight'?.5:0;r.y+=e.key==='ArrowUp'?-.5:e.key==='ArrowDown'?.5:0;r.x=Math.max(-150,Math.min(150,r.x));r.y=Math.max(-150,Math.min(150,r.y));syncStairEdit(r)})}
};
window.onkeyup=e=>{const k=e.key.toLowerCase();if(k===heldTool||spaceHeld&&(e.code==='Space'||e.key===' ')){if(!isTypingTarget(e.target))e.preventDefault();resetTransient(true)}};
window.onblur=()=>{hoverPointer=null;resetTransient(true)};
document.addEventListener?.('focusin',e=>{if(!e.target.closest?.('.toolbar-popover'))closeToolbarMenus();if(connectionMenu&&!e.target.closest?.('#connectionmenu'))closeConnectionMenu();if(isTypingTarget(e.target)&&(heldTool||spaceHeld||drag||oneShotTool))resetTransient(true)});
document.addEventListener?.('visibilitychange',()=>{if(document.hidden){hoverPointer=null;resetTransient(true)}});
window.kernPlanner={getPlan:()=>clone(model),getGeometry:()=>buildGeometry(model),checks,doorGeometry,validateImport};if(document.modelContext?.registerTool){for(const tool of [{name:'read_kern_plan',description:'Read the current plan and validation findings.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({plan:clone(model),checks:Object.fromEntries(Object.entries(model.floors).map(([id,f])=>[id,checks(f)]))})},{name:'select_kern_floor',description:'Show one floor in the planner.',inputSchema:{type:'object',properties:{floor:{type:'string'}},required:['floor'],additionalProperties:false},annotations:{readOnlyHint:false},execute:input=>{if(!Object.hasOwn(model.floors,input.floor))throw Error('Unknown floor');floorId=input.floor;selected=null;render();return{floor:floorId}}}])try{Promise.resolve(document.modelContext.registerTool(tool)).catch(console.warn)}catch(e){console.warn(e)}}buildingState=window.KERN_BUILDINGS.load(localStorage,seedFor,validateImport);loadBuilding(currentBuilding());render();if(buildingState.locked){$('saved').textContent='Not saved · download a backup';$('saved').dataset.state='error'}else{$('saved').textContent='Saved locally · this browser';$('saved').dataset.state='saved'}if(buildingState.message)notify(buildingState.message);window.addEventListener?.('pagehide',saveView);

function closeToolbarMenus(restoreFocus=false){for(const id of ['filemenu','viewmenu','buildingmenu']){const details=$(id);if(details?.open){details.open=false;if(restoreFocus)details.querySelector?.('summary')?.focus({preventScroll:true})}}}
for(const id of ['filemenu','viewmenu','buildingmenu'])$(id).ontoggle=()=>{if($(id).open)for(const other of ['filemenu','viewmenu','buildingmenu'])if(other!==id)$(other).open=false};

function canConvertStair(r){return !!r&&!(model.splitLevelConnections||[]).some(c=>c.room===r.id&&c.floor===floorId)&&canEdit(r)&&!isSourceRoom(r)&&!['void','solid','courtyard'].includes(r.type)&&!(model.verticalConnections||[]).some(c=>c.room===r.id)}
function changeFloorElevation(elevation){const value=typeof elevation==='number'?elevation:prompt('Elevation for '+floorId+' in metres. Stairs recalculate; custom room elevations stay unchanged:',String(floor().z));if(value===null)return;const z=Number(value);if(!Number.isFinite(z)||Math.abs(z)>150){alert('Use an elevation within ±150 m.');return}commit(()=>{floor().z=z;floor().elevation=(z>0?'+':'')+z.toFixed(2)+' m'});closeToolbarMenus()}
function editFloorProperties(){closeToolbarMenus();$('buildingmenu').open=true;$('renamefloor').focus?.()}
function openStairCreation(roomId=null){
 resetTransient(true);closeToolbarMenus();const r=roomId?room(roomId):null,c=r?window.KERN_STAIR_AUTHOR.linked(model,floorId,r.id):null;
 if(r&&!c&&!canConvertStair(r)){notify('This is a protected or local split-level stair. Create a separate stack with Stairs +.');return}
 const all=Object.entries(model.floors).sort((a,b)=>a[1].z-b[1].z),near=all.filter(([id,f])=>id!==floorId&&f.z!==floor().z).sort((a,b)=>Math.abs(a[1].z-floor().z)-Math.abs(b[1].z-floor().z))[0]?.[0];
 const chosen=c?[...c.floors]:[floorId,...(near?[near]:[])],x=r?.x??Math.min(140,Math.ceil(Math.max(0,...floor().rooms.map(r=>r.x+r.w))+2)),y=r?.y??0;
 stairCreateState={roomId:r?.id||null,stackId:c?.id||null,floors:chosen,proposal:null};
 $('staircreatetitle').textContent=c?'Edit connected floors':r?'Convert to stairs':'Create stairs';$('stairintro').textContent=c?'Choose floors to connect. Moving or resizing this stack keeps its checked floors aligned.':r?'Your room’s label, footprint and existing doors start unchanged. Review fit and landing access before converting.':'Choose floors and review the preview, then create the aligned stack. Position it with X / Y or move it on the plan afterward.';
 for(const [key,value]of Object.entries({name:r?.name||'Stairs',x,y,w:r?.w??8,h:r?.h??4,axis:r?.runAxis||(r&&r.h>r.w?'y':'x')}))$('stair'+key).value=value;
 updateStairEnds(r?.landingEnd||c?.landingEnd);renderStairFloorChoices();renderStairCreation();$('staircreate').showModal();$('stairname').focus?.();
}
function renderStairFloorChoices(){const st=stairCreateState;if(!st)return;$('stairfloors').innerHTML=Object.entries(model.floors).sort((a,b)=>b[1].z-a[1].z).map(([id,f])=>`<label><input type="checkbox" data-stair-floor="${esc(id)}" ${st.floors.includes(id)?'checked':''} ${id===floorId?'disabled':''}><span><b>${esc(id)}</b> ${esc(f.name)}</span><small>${f.z>0?'+':''}${Number(f.z).toFixed(2)} m</small></label>`).join('')}
function updateStairEnds(value){const axis=$('stairaxis').value,ends=axis==='x'?['west','east']:['north','south'];$('stairend').innerHTML=ends.map(e=>`<option value="${e}">${e[0].toUpperCase()+e.slice(1)}</option>`).join('');$('stairend').value=ends.includes(value)?value:ends[0]}
function stairCreationInput(){return {floorId,roomId:stairCreateState.roomId,floors:stairCreateState.floors,name:$('stairname').value,x:Number($('stairx').value),y:Number($('stairy').value),w:Number($('stairw').value),h:Number($('stairh').value),runAxis:$('stairaxis').value,landingEnd:$('stairend').value}}
function renderStairCreation(){
 const st=stairCreateState;if(!st)return;const button=$('savestair');try{
  const proposal=window.KERN_STAIR_AUTHOR.prepare(model,stairCreationInput()),d=window.KERN_STAIR_DETAIL.build(proposal.plan,floorId,proposal.roomId),r=d.footprint,details=proposal.floors.map(f=>window.KERN_STAIR_DETAIL.build(proposal.plan,f,proposal.roomId));st.proposal=proposal;button.disabled=false;
  const warnings=[...proposal.notices,...details.flatMap(d=>d.warnings.map(w=>d.floorId+': '+w.text))],issues=[...new Set(warnings)],fit=details.every(d=>d.fit),m=d.metrics;
  $('stair-create-plan').setAttribute('viewBox',`${r.x-1} ${r.y-1} ${r.w+2} ${r.h+2}`);$('stair-create-plan').innerHTML=themedMarkup(`<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="#d9ddda" stroke="#34464b" stroke-width=".12"/>`+window.KERN_STAIR_DETAIL.markup(d));
  $('staircreatechecks').innerHTML=`<p class="stair-status ${!fit||issues.length?'warning':''}">${!fit?'Footprint too small or misaligned':issues.length?'Footprint fits · access / openings to review':'Fits · clearance conditional'}</p><p class="small">Minimum envelope ${m.requiredEnvelope.long.toFixed(2)} × ${m.requiredEnvelope.short.toFixed(2)} m · ${m.clearWidth.toFixed(1)} m clear width · ${(m.riserMax*1000).toFixed(0)} mm risers</p>${d.segments.map(s=>`<p class="small"><b>${esc(s.from)} ↔ ${esc(s.to)}</b> · ${s.rise.toFixed(2)} m rise · ${s.risers} risers · ${s.flights.length} flights</p>`).join('')}${issues.map(w=>`<p class="check warn">△ ${esc(w)}</p>`).join('')}<p class="small">${d.openings.length} required slab / services / ceiling opening(s). Add access doors at the ${esc(d.landingEnd)} arrival end; no doors are invented.</p>`;
  button.textContent=st.stackId?'Save connected floors':(!fit?'Save flagged stairs':st.roomId?'Convert to stairs':'Create stairs');
 }catch(error){st.proposal=null;button.disabled=true;$('stair-create-plan').innerHTML='';$('staircreatechecks').innerHTML=`<p class="check warn">${esc(error.message)}</p>`}
}
function saveStairCreation(){if(!stairCreateState)return;renderStairCreation();const proposal=stairCreateState.proposal;if(!proposal)return;commit(()=>{model=proposal.plan;selected=proposal.roomId;selectedDoor=null});$('staircreate').close();stairCreateState=null;notify('Stairs saved across '+proposal.floors.join(', ')+'. Review access doors and clearance in the inspector.');$('plan').focus?.()}
function deleteStairStack(c){const count=c.floors.reduce((n,id)=>n+(model.floors[id]?.doors.filter(d=>d.a===c.room||d.b===c.room).length||0),0);if(!confirm('Delete this stair stack on '+c.floors.join(', ')+' and '+count+' access connections? Undo restores the complete stack.'))return;commit(()=>{model=window.KERN_STAIR_AUTHOR.remove(model,c.id);selected=null;selectedDoor=null});notify('Stair stack deleted · Undo restores all connected floors')}
$('createstairs').onclick=()=>openStairCreation();$('cancelstair').onclick=()=>{$('staircreate').close();stairCreateState=null};$('staircreate').onclose=()=>{stairCreateState=null};$('savestair').onclick=saveStairCreation;
$('stairfloors').onchange=e=>{const id=e.target.dataset.stairFloor;if(!id||!stairCreateState||id===floorId)return;stairCreateState.floors=e.target.checked?[...new Set([...stairCreateState.floors,id])]:stairCreateState.floors.filter(f=>f!==id);renderStairCreation()};
for(const key of ['name','x','y','w','h','end'])$('stair'+key).oninput=renderStairCreation;$('stairaxis').onchange=()=>{updateStairEnds();renderStairCreation()};
$('quickaddfloor').onclick=addFloor;$('floorz').onclick=changeFloorElevation;$('editfloorproperties').onclick=editFloorProperties;$('theme').onclick=toggleTheme;applyTheme();
