/* Portable, verified planner files. No browser storage or DOM dependency. */
(function(root){
'use strict';
const FORMAT='kern-local-backup',VERSION=1,MAX_BYTES=50*1024*1024,MAX_FILES=500;
const NAME=/^kern-auto-\d{4}-\d\d-\d\dT\d\d-\d\d-\d\d-\d{3}Z-[a-z0-9-]+\.json$/;
const copy=value=>JSON.parse(JSON.stringify(value));
function error(message,name='Error'){const e=new Error(message);e.name=name;return e;}
async function digest(text){
 if(!root.crypto?.subtle)throw error('File verification is unavailable. Open the planner using its secure HTTPS address.');
 const bytes=new TextEncoder().encode(text),hash=await root.crypto.subtle.digest('SHA-256',bytes);
 return Array.from(new Uint8Array(hash),v=>v.toString(16).padStart(2,'0')).join('');
}
async function encode(payload,kind='manual',at=new Date().toISOString()){
 const content=JSON.stringify(payload);if(new TextEncoder().encode(content).length>MAX_BYTES)throw error('Backup exceeds 50 MB. Export individual buildings or reduce browser history first.');
 return JSON.stringify({format:FORMAT,schemaVersion:VERSION,createdAt:at,kind,checksum:{algorithm:'SHA-256',value:await digest(content)},payload},null,2);
}
async function decode(text){
 if(typeof text!=='string'||new TextEncoder().encode(text).length>MAX_BYTES*1.5)throw error('File exceeds the 75 MB import limit.');
 let data;try{data=JSON.parse(text)}catch{throw error('This file is not valid JSON. Nothing has been imported.');}
 if(data?.format!==FORMAT)return data;
 if(data.schemaVersion!==VERSION)throw error('This backup uses an unsupported version. Keep the original file.');
 if(!data.payload||data.checksum?.algorithm!=='SHA-256'||!/^[a-f0-9]{64}$/.test(data.checksum.value||''))throw error('This backup has no valid integrity check. Keep the original file.');
 if(await digest(JSON.stringify(data.payload))!==data.checksum.value)throw error('Backup verification failed. This file may be incomplete or modified; nothing was imported.');
 return data;
}
function contentKey(payload){
 const data=copy(payload.collection),workspace=payload.workspace;
 if(data?.buildings)for(const b of data.buildings){delete b.view;delete b.updatedAt;}
 if(data)delete data.activeBuildingId;
 const records=Object.fromEntries(Object.entries(payload.browserStorage?.raw||{}).filter(([key])=>!['kern-buildings-v1','kern-buildings-v1.previous','kern-workspace-v1','kern-workspace-v1.previous'].includes(key)));
 return JSON.stringify({collection:data,workspace:workspace?{projects:workspace.projects,buildingProjects:workspace.buildingProjects}:null,records,recovery:payload.recovery?{raw:payload.recovery.raw,reason:payload.recovery.reason}:null});
}
function sources(data){
 const out=[],add=(label,collection,workspace=null,storage=null)=>{if(collection)out.push({label,collection,workspace,storage});};
 const rawSources=backup=>{const seen=new Set();for(const [label,records,key]of [['Last saved browser collection',backup?.raw,'kern-buildings-v1'],['Previous browser checkpoint',backup?.raw,'kern-buildings-v1.previous'],['Latest browser collection at export',backup?.latestRaw,'kern-buildings-v1'],['Latest previous checkpoint at export',backup?.latestRaw,'kern-buildings-v1.previous'],['Collection originally opened by this tab',{'kern-buildings-v1':backup?.loadedBaseline},'kern-buildings-v1']]){const text=records?.[key];if(typeof text!=='string'||seen.has(text))continue;seen.add(text);try{let workspace=null;try{workspace=JSON.parse(records[key.endsWith('.previous')?'kern-workspace-v1.previous':'kern-workspace-v1']||records['kern-workspace-v1']||'null')}catch{}add(label,JSON.parse(text),workspace,{raw:records});}catch{}}};
 if(data?.format===FORMAT){const p=data.payload;if(p.recovery){add('Visible workspace (may include unsaved edits or recovery placeholders)',p.collection,p.workspace,p.browserStorage);rawSources(p.recovery);}else add('Verified local backup',p.collection,p.workspace,p.browserStorage);}
 else if(data?.format==='kern-storage-recovery'){add('Visible workspace (may include unsaved edits or recovery placeholders)',data.visibleWorkspace,null,{raw:data.raw});rawSources(data);}
 else add('Selected file',data);
 if(!out.length)throw error('No readable building collection was found. The original file is unchanged.');
 return out;
}
function inspectSource(source,validatePlan,validateCollection){
 const data=source.collection;let items,archive=[];
 if(data?.format==='kern-buildings'){
  if(data.schemaVersion!==1||!Array.isArray(data.buildings)||!data.buildings.length||data.buildings.length>100)throw error('Unsupported or empty building collection.');
  items=data.buildings;archive=Array.isArray(data.archive)?data.archive:[];
 }else if(data?.format==='kern-building'&&data.schemaVersion===1)items=[data.building];
 else {validatePlan(data);items=[{id:'local-plan',name:data.title||'Imported building',plan:data,sourceVariant:data.variant||'custom'}];}
 const ids=new Set();
 const rows=items.map((building,index)=>{
  let issue='';try{
   if(!building||typeof building.name!=='string'||!building.name.trim()||building.name.length>100)throw error('Invalid building name.');
   if(building.id!==undefined&&(typeof building.id!=='string'||ids.has(building.id)))throw error('Missing or duplicate building identifier.');
   if(building.recoveryIssue)throw error('Recovery placeholder: '+building.recoveryIssue);
   validatePlan(building.plan);if(building.id)ids.add(building.id);
  }catch(e){issue=e.message;}
  return {index,building,issue};
 });
 // Never silently import malformed archive records; users can select sound buildings separately.
 let archiveIssue='';try{if(data?.format==='kern-buildings')validateCollection({...data,buildings:rows.filter(r=>!r.issue).map(r=>r.building),activeBuildingId:rows.find(r=>!r.issue)?.building.id});}catch(e){archiveIssue=e.message;}
 return {rows,archive,archiveIssue};
}
async function permission(handle,request=false){
 if(!handle)throw error('Choose a backup folder first.','NotAllowedError');
 let state=await handle.queryPermission({mode:'readwrite'});
 if(state!=='granted'&&request)state=await handle.requestPermission({mode:'readwrite'});
 if(state!=='granted')throw error('Folder access needs your permission. Click Reconnect folder, or download a local copy.','NotAllowedError');
}
async function writeVerified(handle,text){
 let stream;
 try{stream=await handle.createWritable({keepExistingData:false});await stream.write(text);await stream.close();stream=null;
  const read=await (await handle.getFile()).text();if(read!==text)throw error('The file could not be verified after saving. Keep earlier backups and try another folder.');await decode(read);
 }catch(e){if(stream)try{await stream.abort()}catch{}throw e;}
}
function uniqueName(at=new Date().toISOString()){
 const token=root.crypto?.randomUUID?.()||Math.random().toString(36).slice(2)+'-'+Date.now().toString(36);
 return 'kern-auto-'+at.replace(/[.:]/g,'-')+'-'+token.toLowerCase()+'.json';
}
async function listFiles(dir){
 const files=[];for await(const [name,handle]of dir.entries())if(handle.kind==='file'&&NAME.test(name))files.push({name,handle});
 return files.sort((a,b)=>b.name.localeCompare(a.name));
}
async function safePrune(dir,keep,latest){
 if(![30,100].includes(keep))return {removed:0};
 const valid=[];
 for(const entry of await listFiles(dir)){
  try{const file=await entry.handle.getFile();if(file.size>MAX_BYTES*1.5)continue;const data=await decode(await file.text());if(data.format===FORMAT&&data.kind==='automatic')valid.push(entry);}catch{} // Never delete incomplete, foreign, or unverified files.
 }
 let removed=0;for(const entry of valid.slice(keep))if(entry.name!==latest){await dir.removeEntry(entry.name);removed++;}
 return {removed};
}
async function saveVersion(dir,payload,{retention=0}={}){
 await permission(dir);
 const files=await listFiles(dir);if(!retention&&files.length>=MAX_FILES)throw error('Automatic backups paused at 500 files. Choose a new folder or explicitly choose a retention limit.');
 const text=await encode(payload,'automatic'),name=uniqueName();
 try{await dir.getFileHandle(name);throw error('A backup with this name already exists. Please retry.');}catch(e){if(e.name!=='NotFoundError')throw e;}
 const handle=await dir.getFileHandle(name,{create:true});await writeVerified(handle,text);
 let warning='';try{await safePrune(dir,retention,name)}catch(e){warning='New backup verified, but older-backup cleanup failed: '+e.message;}
 return {name,at:new Date().toISOString(),warning,bytes:new TextEncoder().encode(text).length};
}
function explain(e){
 if(e?.name==='AbortError')return 'Cancelled. No existing file was changed.';
 if(e?.name==='NotAllowedError'||e?.name==='SecurityError')return 'Folder access was denied or expired. Reconnect the folder or download a copy.';
 if(e?.name==='QuotaExceededError')return 'The disk or browser storage is full. No verified backup was recorded. Choose another folder or download a copy.';
 return e?.message||'The local file operation failed. Keep earlier backups and try again.';
}
root.KERN_LOCAL_FILES_CORE={FORMAT,VERSION,MAX_BYTES,MAX_FILES,NAME,copy,encode,decode,contentKey,sources,inspectSource,permission,writeVerified,listFiles,safePrune,saveVersion,explain};
})(typeof window!=='undefined'?window:globalThis);
