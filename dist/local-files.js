/* User-chosen disk copies and automatic versions. Loaded last, after workspace. */
(function(){
'use strict';
const C=window.KERN_LOCAL_FILES_CORE;if(!C)return;
const AUTOSAVE_INTERVAL=300000;
const browserTimeZone=()=>Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC';
const byId=id=>document.getElementById(id),clone=C.copy;
let directory=null,retention='smart',calendarTimeZone=browserTimeZone(),timer=null,pendingKey=null,savedKey=null,observedKey=null,lastWrite=0,writing=false,operation=false,paused=false,restore=null,returnFocus=null,restoringHandle=true;
let loadGeneration=0,retentionTouched=false,lastRenderedResult='';
let operationResult='',detail='',rememberWarning='',lastFile='',lastAt='',status='off',manualVerifiedKey=null;
const dialog=document.createElement('dialog');dialog.id='local-files-dialog';dialog.setAttribute('aria-labelledby','local-files-title');
dialog.innerHTML=`<header class="local-files-heading"><h2 id="local-files-title">Local files & backups</h2><button id="local-files-close" aria-label="Close local files">×</button></header>
<section class="local-files-section"><div class="local-files-actions"><button id="local-files-save" class="primary">Save backup…</button><button id="local-files-download">Download backup</button><button id="local-files-load">Load backup…</button><input id="local-files-input" type="file" accept=".json,application/json" hidden></div><p class="small">Includes all buildings. Loading adds copies.</p><details id="local-files-result-details" hidden><summary id="local-files-result-summary">Last operation</summary><p id="local-files-result" role="status"></p></details></section>
<section class="local-files-section"><h3>Automatic backups</h3><p id="local-files-status" role="status" aria-live="polite"></p><p id="local-files-support"></p><p id="local-files-detail"></p><p id="local-files-remember"></p><div class="local-files-actions"><button id="local-files-folder" class="primary">Choose backup folder…</button><button id="local-files-apply" hidden>Apply smart retention</button><button id="local-files-reconnect" hidden>Reconnect folder</button><button id="local-files-now" disabled>Back up now</button><button id="local-files-pause" hidden>Pause backups</button><button id="local-files-forget" hidden>Disconnect</button></div><label class="field"><span>Keep</span><select id="local-files-retention"><option value="smart">Smart history</option><option value="30">Only newest 30</option><option value="0">Keep all · never delete</option><option value="100">Only newest 100</option></select></label><p id="local-files-policy" class="small"></p><details id="local-files-help"><summary>How backups work</summary><p>While this page is open, changed work is saved every 5 minutes. The first backup and Back up now run immediately. Wait for a verified backup before closing.</p><p>Smart history keeps the newest 30 snapshots, the last snapshot of each day for 7 days, Monday/Thursday snapshots for 8 weeks, and monthly snapshots for 12 months. Missed days are not filled in. Older verified automatic backups outside these tiers are deleted; other files are untouched. Keep all pauses at 500 files.</p><p id="local-files-calendar"></p></details><details id="local-files-compatibility" hidden><summary>Why folder access is unavailable</summary><p id="local-files-compatibility-reason"></p><p>Using Brave? Its File System Access API may be disabled. Download a backup first, then check File System Access API in brave://flags. Changing that browser setting may require a restart; folder access still needs your permission.</p><a href="https://developer.chrome.com/docs/capabilities/web-apis/file-system-access" target="_blank" rel="noopener noreferrer">Browser compatibility help</a><p id="local-files-diagnostics" class="small"></p></details></section>
<section id="local-files-restore" class="local-files-section" hidden><h3>Review before loading</h3><p id="local-files-source-name"></p><label class="field"><span>Which saved source?</span><select id="local-files-source"></select></label><p id="local-files-import-warning" role="status"></p><div id="local-files-buildings"></div><div id="local-files-preview-controls" hidden><label class="field"><span>Preview floor</span><select id="local-files-floor"></select></label><div id="local-files-preview" aria-label="Read-only plan preview"></div></div><label class="local-files-check"><input id="local-files-projects" type="checkbox" checked> Restore project groups and saved history for these copies when available</label><label class="local-files-check"><input id="local-files-archive" type="checkbox"> Also add this file’s Archive entries as copies</label><div class="local-files-actions"><button id="local-files-import" class="primary">Add selected as new copies</button><button id="local-files-cancel">Cancel loading</button></div></section>`;
document.body.append(dialog);
const badge=document.createElement('button');badge.id='local-files-badge';badge.className='local-files-badge';badge.innerHTML='<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 2.5h10l3.5 3.5v11.5h-15v-15H4Z"/><path d="M6 2.5v5h7v-5M6 17.5v-6h8v6"/></svg><span class="local-files-badge-label">Disk backup off</span>';badge.onclick=show;badge.setAttribute('aria-haspopup','dialog');byId('appbrandlabel').closest('b').hidden=true;byId('savecompact').append(badge);
const warning=document.createElement('div');warning.id='local-files-warning';warning.className='local-files-warning';warning.hidden=true;warning.setAttribute('role','alert');const warningText=document.createElement('span'),warningButton=document.createElement('button');warningButton.textContent='Review backups';warningButton.onclick=show;warning.append(warningText,warningButton);(document.getElementById('workspace-tabs')||document.querySelector('header.appbar')).after(warning);
const menuButton=document.createElement('button');menuButton.id='local-files-menu';menuButton.innerHTML='<span>Local files & backups…</span><small>Save, load, and automatic disk copies</small>';menuButton.onclick=show;
byId('backupall')?.parentNode.insertBefore(menuButton,byId('backupall'));
const homeButton=document.createElement('button');homeButton.id='local-files-home';homeButton.textContent='Local files & backups';homeButton.onclick=show;
byId('workspace-backup')?.before(homeButton);
function capabilities(){let embedded=false;try{embedded=window.self!==window.top;}catch{embedded=true;}return {secure:window.isSecureContext,embedded,folder:typeof window.showDirectoryPicker==='function',file:typeof window.showSaveFilePicker==='function'};}
let support=capabilities().folder;

function snapshot(){
 const data=clone(buildingState.data),b=data.buildings.find(b=>b.id===data.activeBuildingId);if(b)b.plan=clone(model);
 const raw=window.KERN_BUILDINGS.storageSnapshot(localStorage);
 const recovery=buildingState.locked||byId('saved').dataset.state==='error'?window.KERN_BUILDINGS.recoveryBackup(localStorage,{...buildingState,data}):null;
 return {backupPolicy:{retention,calendarTimeZone,intervalMs:AUTOSAVE_INTERVAL},collection:data,workspace:window.KERN_WORKSPACE?.getState?.()||null,browserStorage:raw,recovery};
}
function currentKey(){return C.contentKey(snapshot());}
function isEditing(){return !!(drag||widthEdit||window.KERN_ROUTE_UI?.dragging||window.KERN_ROTATE?.isEditing?.()||window.KERN_SHAPE_UI?.isEditing?.());}
function stamp(value){return value?new Date(value).toLocaleString():'';}
function update(){
 if(!window.document)return;
 const labels={off:'Disk backup off',pending:'Changes awaiting disk backup',saving:'Writing disk backup…',saved:'Disk backup verified',error:'Disk backup needs attention',paused:'Automatic backups paused'};
 const savedWarning=/Some browser records were unreadable|Recovery file:/i.test(detail),attention=status==='error'||savedWarning;
 const text=labels[status]||labels.off,shortLabels={off:'Disk backup off',pending:'Disk backup pending',saving:'Backing up…',saved:'Disk backup verified',error:'Backup needs attention',paused:'Backups paused'};badge.querySelector('span').textContent=shortLabels[status]||text;badge.dataset.state=attention?'error':status;badge.title=text+(detail?' · '+detail:'');badge.setAttribute('aria-label','Local files & backups: '+text);homeButton.dataset.state=attention?'error':status;homeButton.title=badge.title;homeButton.setAttribute('aria-label','Local files & backups: '+text);warning.hidden=!attention;if(warningText.textContent!==detail)warningText.textContent=detail||'Disk backup needs attention.';
 byId('local-files-status').textContent=text+(lastAt?' · '+stamp(lastAt):'');
 const cap=capabilities();support=cap.folder&&cap.secure!==false;
 byId('local-files-save').textContent=cap.file?'Save backup…':'Download backup';byId('local-files-download').hidden=!cap.file;
 byId('local-files-support').textContent=directory?'Folder: '+directory.name: support?'Choose a folder, then allow this planner to save there.':'Automatic folder backups are unavailable here. Use Download backup for now.';
 byId('local-files-detail').textContent=detail;byId('local-files-detail').hidden=!detail||status==='saved'&&!savedWarning||status==='off';
 byId('local-files-folder').hidden=!support;byId('local-files-folder').textContent=directory?'Change folder…':'Choose backup folder…';byId('local-files-now').hidden=!directory;
 byId('local-files-compatibility').hidden=support;
 byId('local-files-compatibility-reason').textContent=cap.secure===false?'This page is not a secure context. Open the HTTPS planner directly in a browser tab.':cap.embedded?'This planner is embedded in another page. Open it in its own browser tab, then check folder access again.':'This page has no folder-picker API. A browser setting or browser capability is preventing automatic disk access.';
 byId('local-files-diagnostics').textContent='Secure context: '+(cap.secure===undefined?'unknown':cap.secure?'yes':'no')+' · Page: '+(cap.embedded?'embedded':'full tab')+' · Folder picker: '+(cap.folder?'available':'absent')+' · Save picker: '+(cap.file?'available':'absent');
 const chosen=byId('local-files-retention').value,policy=chosen==='smart'?'Latest 30 · daily 7 days · Mon/Thu 8 weeks · monthly 12 months':chosen==='0'?'Keep all · no deletion · pauses at 500 automatic files':'Newest '+chosen+' automatic backups; older ones are deleted';
 byId('local-files-policy').textContent=(directory&&String(retention)===chosen?'Active · ':directory?'Not applied · ':'Not enabled yet · ')+policy;
 byId('local-files-calendar').textContent='Calendar timezone: '+calendarTimeZone+'. Existing files are checked before any cleanup.';
 byId('local-files-remember').textContent=rememberWarning;byId('local-files-result').textContent=operationResult;byId('local-files-result-details').hidden=!operationResult;byId('local-files-result-summary').textContent=/not restored|not fully restored|Could not|failed|saving is blocked|Finish or cancel|in memory only/i.test(operationResult)?'Last operation · review details':'Last operation';if(operationResult!==lastRenderedResult){byId('local-files-result-details').open=/not restored|not fully restored|Could not|failed|saving is blocked|Finish or cancel|in memory only/i.test(operationResult);lastRenderedResult=operationResult;}
 byId('local-files-reconnect').hidden=!directory||status!=='error';byId('local-files-now').disabled=!directory||writing||operation;
 byId('local-files-pause').hidden=!directory;byId('local-files-pause').textContent=paused?'Resume backups':'Pause backups';
 byId('local-files-forget').hidden=!directory;byId('local-files-forget').disabled=writing;
 for(const id of ['local-files-save','local-files-download','local-files-load','local-files-folder','local-files-reconnect'])byId(id).disabled=operation||writing||(id==='local-files-folder'&&!support);
 byId('local-files-retention').disabled=operation||writing;const apply=byId('local-files-apply');apply.hidden=!directory||String(retention)===byId('local-files-retention').value;apply.disabled=operation||writing;apply.textContent=byId('local-files-retention').value==='smart'?'Apply smart retention':'Apply retention policy';
}
function show(){if(!dialog.open)returnFocus=document.activeElement;closeToolbarMenus();if(!dialog.open)dialog.showModal();update();byId('local-files-close').focus();}
function close(){loadGeneration++;if(dialog.open)dialog.close();const visible=target=>target?.isConnected&&!target.closest('[hidden],[inert],dialog:not([open])')&&(!target.closest('details:not([open])')||target.closest('summary'));const summary=returnFocus?.closest('details')?.querySelector('summary'),target=visible(returnFocus)?returnFocus:visible(summary)?summary:window.KERN_WORKSPACE?.isHome?.()?homeButton:badge;target.focus();}
function failure(e){status='error';detail=C.explain(e);update();}
function schedule(delay){clearTimeout(timer);timer=setTimeout(()=>{timer=null;flush();},Math.max(0,delay));}
function changed(){
 if(restoringHandle)return;
 try{const key=currentKey();if(key===observedKey){if(directory&&!paused&&!writing&&status==='pending'&&key===savedKey){status='saved';detail='Folder: '+directory.name+' · '+lastFile;update();}return;}observedKey=key;pendingKey=key;
  if(!directory)return;if(key===savedKey){if(!writing){status='saved';detail='Folder: '+directory.name+' · '+lastFile;update();}return;}
  if(paused)return;status='pending';detail='Changes are waiting for the next 5-minute disk backup. Use Back up now before closing if needed.';update();if(!timer)schedule(AUTOSAVE_INTERVAL);
 }catch(e){if(directory)failure(e);}
}
async function flush(force=false){
 if(!directory||paused)return false;if(writing||operation){schedule(2500);return false;}
 if(isEditing()){schedule(2500);return false;}
 clearTimeout(timer);timer=null;
 let payload,key;try{payload=snapshot();key=C.contentKey(payload);if(!force&&key===savedKey){status='saved';detail='Folder: '+directory.name+' · '+lastFile;update();return true;}}catch(e){failure(e);return false;}
 writing=true;status='saving';detail='Keep this page open until the file has been read back and verified.';update();
 try{const target=directory,result=await C.saveVersion(target,payload,{retention,timeZone:calendarTimeZone});savedKey=key;manualVerifiedKey=key;lastWrite=Date.now();lastFile=result.name;lastAt=result.at;
  pendingKey=currentKey();status=pendingKey===key?'saved':'pending';detail=result.warning||('Folder: '+target.name+' · '+result.name);if(payload.recovery)detail+=' · Recovery file: includes exact records and visible work; review the source when loading.';if(Object.keys(payload.browserStorage.errors||{}).length)detail+=' · Some browser records were unreadable; those omissions are listed inside the file.';if(result.warning)status='error';
  if(pendingKey!==key&&!paused)schedule(AUTOSAVE_INTERVAL);
  return true;
 }catch(e){failure(e);return false;}finally{writing=false;update();}
}
function storeHandle(value){return new Promise((resolve,reject)=>{
 if(!window.indexedDB){reject(Error('Folder permission cannot be remembered in this browser.'));return;}
 const request=indexedDB.open('kern-local-files-v1',1);request.onupgradeneeded=()=>request.result.createObjectStore('settings');request.onerror=()=>reject(request.error);request.onblocked=()=>reject(Error('Folder settings are blocked by another tab.'));
 request.onsuccess=()=>{const db=request.result;try{const tx=db.transaction('settings',value===undefined?'readonly':'readwrite'),store=tx.objectStore('settings');let result;const get=value===undefined?store.get('folder'):value===null?store.delete('folder'):store.put(value,'folder');get.onsuccess=()=>{result=get.result;};tx.oncomplete=()=>{db.close();resolve(result);};tx.onerror=()=>{db.close();reject(tx.error);};tx.onabort=()=>{db.close();reject(tx.error||Error('Folder settings were not saved.'));};}catch(e){db.close();reject(e);}};
});}
async function remember(){try{await storeHandle(directory?{handle:directory,retention,calendarTimeZone,paused}:null);rememberWarning='';}catch(e){rememberWarning='This folder works for this session only; its permission could not be remembered. Rechoose it next time. '+e.message;}update();}
async function chooseFolder(){
 if(operation||writing)return;let connected=false;operation=true;update();
 try{const next=await window.showDirectoryPicker({id:'kern-backups',mode:'readwrite'});await C.permission(next,true);directory=next;retention=byId('local-files-retention').value==='smart'?'smart':Number(byId('local-files-retention').value);calendarTimeZone=browserTimeZone();paused=false;savedKey=null;lastAt='';lastFile='';observedKey=null;status='pending';detail='Folder enabled. Creating and verifying the first backup…';await remember();connected=true;}
 catch(e){if(e.name!=='AbortError')failure(e);}finally{operation=false;update();}if(connected&&directory&&!paused)await flush();
}
async function applyRetention(){
 if(operation||writing||!directory)return;operation=true;update();
 try{await C.permission(directory,true);retention=byId('local-files-retention').value==='smart'?'smart':Number(byId('local-files-retention').value);calendarTimeZone=browserTimeZone();paused=false;status='pending';detail='Applying the selected retention policy after a new disk backup is verified.';await remember();}
 catch(e){failure(e);}finally{operation=false;update();}if(status==='pending')await flush(true);
}

async function reconnect(){if(operation||writing||!directory)return;operation=true;update();try{await C.permission(directory,true);paused=false;status='pending';detail='Folder reconnected.';await remember();}catch(e){failure(e);}finally{operation=false;update();}if(status==='pending')await flush();}
function prepareManual(){if(isEditing())throw Error('Finish or cancel the current edit before saving a local copy.');return snapshot();}
function filename(){return 'kern-workspace-'+new Date().toISOString().replace(/[.:]/g,'-')+'.json';}
async function saveCopy(usePicker=true){
 if(operation||writing)return;if(isEditing()){operationResult='Finish or cancel the current edit before saving a local copy.';update();notify(operationResult);return;}operation=true;update();
 // Open the picker inside the user gesture, before hashing or other asynchronous work.
 let handle;try{if(usePicker&&typeof window.showSaveFilePicker==='function')handle=await window.showSaveFilePicker({suggestedName:filename(),types:[{description:'Planner backup JSON',accept:{'application/json':['.json']}}]});
  const payload=prepareManual(),key=C.contentKey(payload),text=await C.encode(payload);
  if(handle){await C.writeVerified(handle,text);manualVerifiedKey=key;operationResult='Local copy verified: '+handle.name+' · '+new Date().toLocaleTimeString()+'. Automatic backup setting is unchanged.';notify('Local copy saved and verified');}
  else{download(filename(),text,'application/json');operationResult='Download requested. Check your browser’s Downloads to confirm it completed. Automatic disk backups are '+(directory&&!paused?'enabled.':'off.');notify('Backup download requested · check Downloads');}
 }catch(e){if(e.name!=='AbortError')failure(e);}finally{operation=false;update();}
}
function cancelRestore(){loadGeneration++;restore=null;byId('local-files-restore').hidden=true;byId('local-files-preview').replaceChildren();}
async function loadFile(file){
 if(!file||operation)return;cancelRestore();const generation=loadGeneration;operation=true;update();try{
  if(file.size>C.MAX_BYTES*1.5)throw Error('File exceeds the 75 MB import limit.');const decoded=await C.decode(await file.text());if(generation!==loadGeneration)return;const available=C.sources(decoded);
  restore={name:file.name,sources:available,source:0,inspection:null,preview:null};byId('local-files-source').replaceChildren(...available.map((s,i)=>new Option(s.label,String(i))));byId('local-files-source-name').textContent=file.name;
  byId('local-files-restore').hidden=false;selectSource();show();byId('local-files-restore').scrollIntoView?.({block:'nearest'});
 }catch(e){if(generation===loadGeneration){operationResult='Could not load: '+C.explain(e);update();}}finally{operation=false;byId('local-files-input').value='';update();}
}
function selectSource(){
 if(!restore)return;restore.source=Number(byId('local-files-source').value)||0;const source=restore.sources[restore.source];
 try{restore.inspection=C.inspectSource(source,validateImport,p=>window.KERN_BUILDINGS.validate(p,validateImport));const result=restore.inspection;
  byId('local-files-buildings').replaceChildren(...result.rows.map(row=>{const label=document.createElement('div');label.className='local-files-building';const check=document.createElement('input');check.type='checkbox';check.dataset.index=row.index;check.checked=!row.issue;check.disabled=!!row.issue;check.setAttribute('aria-label','Import '+(row.building?.name||'Unreadable record'));const title=document.createElement('span');title.textContent=(row.building?.name||'Unreadable record')+(row.issue?' · '+row.issue:'');const preview=document.createElement('button');preview.textContent='Preview';preview.disabled=!!row.issue;preview.onclick=()=>previewBuilding(row.index);label.append(check,title,preview);return label;}));
  byId('local-files-import-warning').textContent=(source.label.includes('Visible')?'Choose carefully: this source includes the visible work at backup time. Recovery placeholders cannot be imported. ':'')+(result.archiveIssue?'Archive cannot be imported: '+result.archiveIssue+'. ':'')+(buildingState.locked?'Browser saving is currently protected. Added copies will be in memory only; save a local copy before closing.':'');
  byId('local-files-archive').checked=false;byId('local-files-archive').disabled=!!result.archiveIssue||!result.archive.length;
  byId('local-files-projects').disabled=!source.workspace&&!source.storage?.raw?.['kern-version-history-v1'];
  byId('local-files-import').disabled=!result.rows.some(r=>!r.issue);
  const first=result.rows.find(r=>!r.issue);if(first)previewBuilding(first.index);else byId('local-files-preview-controls').hidden=true;
 }catch(e){restore.inspection=null;byId('local-files-buildings').replaceChildren();byId('local-files-preview-controls').hidden=true;byId('local-files-import-warning').textContent=e.message;byId('local-files-import').disabled=true;}
}
function previewBuilding(index){const row=restore?.inspection?.rows.find(r=>r.index===index);if(!row||row.issue)return;restore.preview=row.building;byId('local-files-floor').replaceChildren(...Object.entries(row.building.plan.floors).map(([id,f])=>new Option(id+' · '+f.name,id)));byId('local-files-preview-controls').hidden=false;drawPreview();}
function drawPreview(){const b=restore?.preview;if(!b)return;try{byId('local-files-preview').innerHTML=window.BuildingExports.snapshotSheet(b.plan,b.sourceVariant||'custom',byId('local-files-floor').value,b.name);}catch(e){byId('local-files-preview').textContent='Preview unavailable: '+e.message;}}
function importExtras(source,selected,copies){
 const warnings=[];if(!byId('local-files-projects').checked)return warnings;
 const mapping=new Map(selected.map((b,i)=>[b.id,copies[i]?.id]));
 if(source.workspace&&window.KERN_WORKSPACE){try{
  const meta=source.workspace;if(meta.schemaVersion!==1||!Array.isArray(meta.projects)||meta.projects.length>100)throw Error('Unsupported project metadata.');
  const wanted=meta.projects.filter(p=>p&&typeof p.id==='string'&&typeof p.name==='string'&&p.name.trim()&&p.name.length<=100&&selected.some(b=>meta.buildingProjects?.[b.id]===p.id));
  if(window.KERN_WORKSPACE.getState().projects.length+wanted.length>100)throw Error('Project limit reached.');
  for(const p of wanted){const id=window.KERN_WORKSPACE.createProject((p.name+' · imported').slice(0,100));for(const [oldId,newId]of mapping)if(newId&&meta.buildingProjects?.[oldId]===p.id)window.KERN_WORKSPACE.moveBuilding(newId,id);}
  if(wanted.length){const stored=JSON.parse(localStorage.getItem('kern-workspace-v1')||'null'),live=window.KERN_WORKSPACE.getState();for(const newId of mapping.values())if(live.buildingProjects[newId]&&stored?.buildingProjects?.[newId]!==live.buildingProjects[newId])throw Error('Project groups are in memory only; save a local copy before closing.');}
 }catch(e){warnings.push('Projects not fully restored: '+e.message);}}
 const raw=source.storage?.raw?.['kern-version-history-v1'];
 if(raw){try{
  if(buildingState.locked||byId('saved').dataset.state==='error')throw Error('Browser saving is blocked; history remains in the original backup.');
  const saved=JSON.parse(raw);if(saved.schemaVersion!==1||!saved.buildings||typeof saved.buildings!=='object')throw Error('Unsupported history schema.');
  const key='kern-version-history-v1',baseline=localStorage.getItem(key),db=baseline?JSON.parse(baseline):{schemaVersion:1,buildings:{}};
  if(db.schemaVersion!==1||!db.buildings)throw Error('Existing history is unreadable.');
  let count=0;for(const [oldId,newId]of mapping){if(!newId||!Array.isArray(saved.buildings[oldId]))continue;const rows=saved.buildings[oldId];if(rows.length>500)throw Error('Too many saved versions.');for(const row of rows){validateImport(row.plan);if(typeof row.id!=='string'||typeof row.at!=='string')throw Error('Invalid saved version.');}db.buildings[newId]=clone(rows).map(row=>({...row,id:'import-'+window.KERN_BUILDINGS.id()}));count+=rows.length;}
  if(count){if(localStorage.getItem(key)!==baseline)throw Error('History changed in another tab.');const encoded=JSON.stringify(db);if(encoded.length>1200000)throw Error('Imported history would exceed the browser history budget; all versions remain in the original disk file.');localStorage.setItem(key,encoded);if(localStorage.getItem(key)!==encoded)throw Error('Restored history could not be verified.');}
 }catch(e){warnings.push('History not restored: '+e.message);}}
 return warnings;
}
function importSelected(){
 if(!restore?.inspection||operation)return;
 const checked=new Set([...byId('local-files-buildings').querySelectorAll('input:checked')].map(n=>Number(n.dataset.index))),rows=restore.inspection.rows.filter(r=>checked.has(r.index)&&!r.issue);
 if(!rows.length){byId('local-files-import-warning').textContent='Select at least one readable building.';return;}
 try{
  const source=restore.sources[restore.source],selected=rows.map(r=>r.building),ids=new Set(buildingState.data.buildings.map(b=>b.id));
  const prepared=selected.map((b,i)=>({...clone(b),id:'import-preview-'+i})),data={format:'kern-buildings',schemaVersion:1,activeBuildingId:prepared[0].id,buildings:prepared,archive:byId('local-files-archive').checked?clone(restore.inspection.archive):[]};
  window.KERN_BUILDINGS.validate(data,validateImport);importBuildings(data,restore.name);
  const copies=buildingState.data.buildings.filter(b=>!ids.has(b.id));
  for(const [i,b]of selected.entries())if(copies[i])for(const key of Object.keys(b))if(!['id','name','plan','view','sourceVariant','recoveryIssue','recoveryStatus','__proto__','constructor','prototype'].includes(key))Object.defineProperty(copies[i],key,{value:clone(b[key]),enumerable:true,writable:true,configurable:true});
  save();const warnings=importExtras(source,selected,copies);
  const failed=byId('saved').dataset.state==='error'||buildingState.locked;
  operationResult=copies.length+' building copies added. '+(failed?'Browser saving is blocked; save a local copy before closing.':'Original buildings and the source file were not changed.')+(warnings.length?' '+warnings.join(' '):'');
  cancelRestore();changed();update();notify(copies.length+' copies added'+(failed?' in memory · save a local copy':'')+(warnings.length?' · see backup panel for warnings':''));
 }catch(e){byId('local-files-import-warning').textContent='Could not import: '+e.message;}
}
byId('local-files-close').onclick=close;dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
byId('local-files-save').onclick=()=>saveCopy(true);byId('local-files-download').onclick=()=>saveCopy(false);byId('local-files-load').onclick=()=>byId('local-files-input').click();byId('local-files-input').onchange=e=>loadFile(e.target.files[0]);
byId('local-files-apply').onclick=applyRetention;byId('local-files-retention').onchange=()=>{retentionTouched=true;update();};byId('local-files-folder').onclick=chooseFolder;byId('local-files-reconnect').onclick=reconnect;byId('local-files-now').onclick=()=>flush(true);
byId('local-files-pause').onclick=async()=>{paused=!paused;clearTimeout(timer);status=paused?'paused':'pending';detail=paused?'Automatic disk backups are paused. Existing files are unchanged.':'Automatic disk backups resumed.';await remember();update();if(!paused)await flush();};
byId('local-files-forget').onclick=async()=>{if(writing)return;directory=null;paused=false;clearTimeout(timer);savedKey=null;status='off';detail='Folder disconnected. Existing files on disk are unchanged.';await remember();update();};
byId('local-files-source').onchange=selectSource;byId('local-files-floor').onchange=drawPreview;byId('local-files-import').onclick=importSelected;byId('local-files-cancel').onclick=cancelRestore;
const originalMarkUnsaved=markUnsaved;markUnsaved=function(...args){const result=originalMarkUnsaved(...args);if(directory&&!paused&&!writing&&status!=='error'){status='pending';detail='Editing · disk backup follows after you finish this edit.';update();}return result;};
const originalSave=save;save=function(...args){const result=originalSave(...args);changed();return result;};
function saveShortcut(e){if((e.ctrlKey||e.metaKey)&&!e.altKey&&!e.shiftKey&&e.code==='KeyS'&&!e.repeat){e.preventDefault();e.stopImmediatePropagation();if((!document.querySelector('dialog[open]')||dialog.open&&!restore)&&!operation&&!writing)saveCopy(true);return true;}return false;}
window.addEventListener('keydown',saveShortcut,true);if(window.KERN_WORKSPACE){const previousKeys=window.KERN_WORKSPACE.handleKeydown;window.KERN_WORKSPACE.handleKeydown=function(e){if(!saveShortcut(e))return previousKeys(e);};}
window.addEventListener('beforeunload',e=>{let unsaved=false;try{unsaved=(writing||directory&&currentKey()!==savedKey&&currentKey()!==manualVerifiedKey||byId('saved').dataset.state==='error'&&currentKey()!==manualVerifiedKey);}catch{unsaved=true;}if(unsaved){e.preventDefault();e.returnValue='';}});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')changed();});
let interval=setInterval(changed,15000);window.addEventListener('pagehide',()=>{clearInterval(interval);clearTimeout(timer);});window.addEventListener('pageshow',e=>{if(e.persisted){clearInterval(interval);interval=setInterval(changed,15000);observedKey=null;changed();}});
window.KERN_LOCAL_FILES={show,snapshot,saveCopy,chooseFolder,applyRetention,reconnect,flush,changed,loadFile,importSelected,getStatus:()=>({status,detail,lastAt,lastFile,writing,paused,hasFolder:!!directory,retention,calendarTimeZone,intervalMs:AUTOSAVE_INTERVAL,dirty:!!directory&&pendingKey!==savedKey}),core:C};
update();
(async()=>{try{const config=await storeHandle();if(config?.handle){directory=config.handle;retention=config.retention==='smart'||[0,30,100].includes(config.retention)?config.retention:'smart';calendarTimeZone=typeof config.calendarTimeZone==='string'?config.calendarTimeZone:browserTimeZone();if(!retentionTouched)byId('local-files-retention').value=String(retention);paused=!!config.paused;status=paused?'paused':'pending';await C.permission(directory);}}catch(e){if(directory)failure(e);}finally{restoringHandle=false;update();if(directory&&!paused&&status!=='error')changed();}})();
})();
