/* Browser-local document versions. Viewing never loads a snapshot into the editor. */
(function(){
'use strict';
const KEY='kern-version-history-v1',LIMIT=1200000,MAX_AUTO=20,pending=new Map();
let selected=null,previewPlan=null,previewName='',previewVariant='',previewFloor='',openBuildingId=null;
const panel=document.createElement('section');panel.id='versionhistorypanel';panel.hidden=true;panel.setAttribute('aria-label','Version history');
panel.innerHTML='<header><strong>Version history</strong><button id="historyadd" title="Save named version · Ctrl+Alt+S" aria-label="Save named version">＋</button><button id="historyclose" aria-label="Close version history">×</button></header><p class="history-local">Saved in this browser. History begins with this update; JSON plan backups don’t include it.</p><form id="historynameform" hidden><label>Name this version<input id="historyname" maxlength="100" placeholder="e.g. Garage circulation pass" autocomplete="off"></label><button type="submit">Save version</button><button type="button" id="historynamecancel">Cancel</button></form><p id="historystatus" role="status"></p><div id="historylist"></div>';
document.body.append(panel);
const preview=document.createElement('dialog');preview.id='historypreview';preview.innerHTML='<header><div><strong id="historypreviewtitle"></strong><span>Read-only preview</span></div><select id="historypreviewfloor" aria-label="Preview floor"></select><button id="historypreviewclose" aria-label="Close preview">×</button></header><div id="historydrawing"></div><footer><button id="historyrestore">Restore this version</button><button id="historycopy">Open as a copy</button><button id="historypreviewcancel">Back to current</button></footer>';
document.body.append(preview);
const node=id=>document.getElementById(id),status=s=>{node('historystatus').textContent=s;};
function database(){const raw=localStorage.getItem(KEY);if(!raw)return{schemaVersion:1,buildings:{}};const data=JSON.parse(raw);if(data.schemaVersion!==1||!data.buildings||typeof data.buildings!=='object'||Object.values(data.buildings).some(x=>!Array.isArray(x)))throw Error('Stored version history could not be read. Your current plan is unchanged.');return data;}
function entries(id){try{return database().buildings[id]||[]}catch(e){status(e.message);return[]}}
function capture(){const b=currentBuilding();return{id:b.id,name:b.name,sourceVariant:b.sourceVariant,plan:clone(model)}}
function storeSnapshot(payload,label='',kind='auto'){
 try{
  if(buildingState.locked)throw Error('History paused while the current building needs recovery.');
  const db=database(),list=db.buildings[payload.id]||[],fingerprint=JSON.stringify(payload.plan);
  if(!label&&list.length&&JSON.stringify(list[0].plan)===fingerprint)return true;
  const item={id:'version-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8),at:new Date().toISOString(),name:label.slice(0,100),kind,buildingName:payload.name,sourceVariant:payload.sourceVariant,plan:payload.plan};
  db.buildings[payload.id]=[item,...list];
  let count=0;db.buildings[payload.id]=db.buildings[payload.id].filter(x=>x.kind!=='auto'||++count<=MAX_AUTO);
  let encoded=JSON.stringify(db);
  while(encoded.length>LIMIT){
   const candidates=Object.entries(db.buildings).flatMap(([id,rows])=>rows.filter(x=>x.kind==='auto'&&x.id!==item.id).map(x=>({id,x}))).sort((a,b)=>a.x.at.localeCompare(b.x.at));
   if(!candidates.length)throw Error('Version not saved: local history is full. Your current plan is unchanged.');
   const oldest=candidates[0];db.buildings[oldest.id]=db.buildings[oldest.id].filter(x=>x.id!==oldest.x.id);encoded=JSON.stringify(db);
  }
  localStorage.setItem(KEY,encoded);status('');return true;
 }catch(e){status('Version not saved. '+e.message);if(kind!=='auto')notify('Version not saved; your current plan is unchanged.');return false;}
}
function flush(id){const p=pending.get(id);if(!p)return;clearTimeout(p.timer);pending.delete(id);storeSnapshot(p.payload);}
function recordCurrent(){const payload=capture();if(!panel.hidden&&openBuildingId!==payload.id){closePreview();renderList();}const old=pending.get(payload.id);if(old)clearTimeout(old.timer);pending.set(payload.id,{payload,timer:setTimeout(()=>{flush(payload.id);if(!panel.hidden&&openBuildingId===payload.id)renderList();},1800)});}
function stamp(at){const d=new Date(at);return Number.isNaN(d.getTime())?'Saved version':d.toLocaleString([], {month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});}
function renderList(){
 const b=currentBuilding();openBuildingId=b.id;const rows=entries(b.id),named=rows.filter(x=>x.kind!=='auto'),autos=rows.filter(x=>x.kind==='auto');
 const row=x=>`<button class="history-row" data-version="${esc(x.id)}"><span class="history-dot"></span><span><b>${esc(x.name||stamp(x.at))}</b><small>${esc(x.name?stamp(x.at):'Autosaved in this browser')}</small></span></button>`;
 node('historylist').innerHTML=`<div class="history-building">${esc(b.name)}</div><button id="historycurrent" class="history-row current"><span class="history-dot"></span><span><b>Current version</b><small>Continue editing</small></span></button>${named.length?'<h3>Named versions</h3>'+named.map(row).join(''):''}<details open><summary>${autos.length} autosave${autos.length===1?'':'s'}</summary>${autos.map(row).join('')||'<p class="history-empty">Your first snapshot will appear here.</p>'}</details><details open><summary>Prepared layouts</summary><p class="history-empty">Starting layouts, separate from your saved edit history.</p><button class="history-row" data-prepared="v12"><span><b>V12 · Compact functional revision</b><small>Medical, stores, research and electrical changes</small></span></button><button class="history-row" data-prepared="v11"><span><b>V11 · Previous base layout</b><small>Original layout preserved</small></span></button><button id="historylegacy">More prepared layouts…</button></details>`;
 node('historycurrent').onclick=closePreview;node('historylegacy').onclick=()=>{panel.hidden=true;openArchive();};
 node('historylist').querySelectorAll('[data-version]').forEach(el=>el.onclick=()=>{const v=entries(b.id).find(x=>x.id===el.dataset.version);if(v)openPreview(v,false);});
 node('historylist').querySelectorAll('[data-prepared]').forEach(el=>el.onclick=()=>{const v=el.dataset.prepared;openPreview({plan:clone(seedFor(v)),sourceVariant:v,buildingName:v==='v12'?'KERN · Compact functional revision':'KERN · Previous base',name:v==='v12'?'V12 · Compact functional revision':'V11 · Previous base layout'},true);});
}
function show(){if(drag)finishDrag(true);finishWidthEdit(false);closeToolbarMenus();window.KERN_PLACE?.close?.();flush(currentBuilding().id);panel.hidden=false;renderList();node('historyclose').focus();}
function named(){show();node('historynameform').hidden=false;node('historyname').value='';node('historyname').focus();}
function hide(){closePreview();panel.hidden=true;node('historynameform').hidden=true;node('showversionhistory')?.focus();}
function closePreview(){if(preview.open)preview.close();previewPlan=null;selected=null;node('historydrawing').replaceChildren();}
function drawPreview(){if(!previewPlan)return;previewFloor=node('historypreviewfloor').value;try{node('historydrawing').innerHTML=window.BuildingExports.snapshotSheet(previewPlan,previewVariant,previewFloor,previewName);}catch(e){node('historydrawing').textContent='Preview unavailable: '+e.message;}}
function openPreview(item,prepared){
 if(openBuildingId!==currentBuilding().id){closePreview();renderList();return;}
 try{validateImport(item.plan);}catch(e){status('This version cannot be opened: '+e.message);return;}
 selected={...item,prepared,ownerId:currentBuilding().id};previewPlan=clone(item.plan);previewName=item.name||stamp(item.at);previewVariant=item.sourceVariant||'custom';previewFloor=Object.hasOwn(previewPlan.floors,floorId)?floorId:Object.keys(previewPlan.floors)[0];
 node('historypreviewtitle').textContent=previewName;node('historypreviewfloor').innerHTML=Object.entries(previewPlan.floors).sort((a,b)=>(b[1].z||0)-(a[1].z||0)).map(([id,f])=>`<option value="${esc(id)}" ${id===previewFloor?'selected':''}>${esc(id+' · '+f.name)}</option>`).join('');
 node('historyrestore').hidden=prepared;drawPreview();preview.showModal();
}
function copyVersion(){if(!selected)return;const item=selected;closePreview();panel.hidden=true;addBuilding(window.KERN_BUILDINGS.building((item.buildingName||currentBuilding().name)+' · copy',item.plan,item.sourceVariant));}
function restoreVersion(){
 if(!selected||selected.prepared)return;if(selected.ownerId!==currentBuilding().id){closePreview();renderList();return;}
 if(!confirm('Restore this version? Your current layout will be saved as “Before restore”.'))return;
 const item=selected,payload=capture();flush(payload.id);if(!storeSnapshot(payload,'Before restore','named'))return;
 closePreview();if(window.BuildingExports.isThreeMode())window.BuildingExports.setWorkspaceMode('2d');
 finishWidthEdit(false);resetTransient(true);checkpoint();model=clone(item.plan);variant=item.sourceVariant||'custom';currentBuilding().sourceVariant=variant;if(!Object.hasOwn(model.floors,floorId))floorId=Object.keys(model.floors)[0];setSelection();viewBounds=null;
 const saved=save();render();renderList();notify(saved?'Version restored · previous layout preserved':'Restored in memory only · export your plan before closing');
}
node('showversionhistory').onclick=show;node('historyadd').onclick=named;node('historyclose').onclick=hide;node('historynamecancel').onclick=()=>node('historynameform').hidden=true;
node('historynameform').onsubmit=e=>{e.preventDefault();const name=node('historyname').value.trim();if(!name){node('historyname').focus();return;}flush(currentBuilding().id);if(storeSnapshot(capture(),name,'named')){node('historynameform').hidden=true;renderList();notify('Named version saved in this browser.');}};
node('historypreviewfloor').onchange=drawPreview;node('historypreviewclose').onclick=closePreview;node('historypreviewcancel').onclick=closePreview;node('historycopy').onclick=copyVersion;node('historyrestore').onclick=restoreVersion;
preview.addEventListener('cancel',()=>{previewPlan=null;selected=null;});
window.addEventListener('keydown',e=>{
 if(preview.open){e.stopImmediatePropagation();return;}
 if(e.target instanceof Node&&panel.contains(e.target)){if(e.key==='Escape'){e.preventDefault();hide();}e.stopImmediatePropagation();return;}
 if((e.ctrlKey||e.metaKey)&&e.altKey&&e.code==='KeyS'&&!e.repeat&&!e.target.closest?.('input,textarea,select,[contenteditable="true"],dialog')){e.preventDefault();e.stopImmediatePropagation();named();}
},true);
window.addEventListener('pagehide',()=>{for(const id of [...pending.keys()])flush(id);});
window.addEventListener('storage',e=>{if(e.key===KEY&&!panel.hidden)renderList();});
node('building').addEventListener('change',()=>{closePreview();if(!panel.hidden)renderList();});
function pruneAutosaves(){try{const db=database();let removed=0;for(const id of Object.keys(db.buildings)){const old=db.buildings[id];db.buildings[id]=old.filter(x=>x.kind!=='auto');removed+=old.length-db.buildings[id].length;}if(!removed)return false;localStorage.setItem(KEY,JSON.stringify(db));status('Older autosaves were cleared to keep space for your current plan. Named versions are preserved.');return true;}catch{return false}}
window.KERN_HISTORY={show,named,recordCurrent,flush,entries,pruneAutosaves,close:hide};
try{if(!entries(currentBuilding().id).length)storeSnapshot(capture(),'History started','auto');}catch(e){status(e.message);}
})();
