/* Building documents are local to this browser. Legacy storage is read-only. */
(function(root){
'use strict';
const KEY='kern-buildings-v1',BACKUP='kern-buildings-migration-backup-v1',PREVIOUS=KEY+'.previous';
const variants=['v12','v11','v10','useredit20260930','v9','v8','v8initial','v7','v6','v5','v4','v3','v2','v1'];
const labels={v12:'V12 · Compact functional revision',v11:'V11 · Concealed concrete L2',v10:'V10 · Polished user edits',useredit20260930:'Your uploaded edits',v9:'V9 · Dropped garage / circulation',v8:'V8 · Double-size garage',v8initial:'V8 · Earlier garage',v7:'V7 · Approved crown baseline',v6:'V6 · Bent arrival',v5:'V5 · Compact court',v4:'V4 · Square / sequence',v3:'V3 · Balanced',v2:'V2 · Room clusters',v1:'V1 · Original'};
const copy=x=>JSON.parse(JSON.stringify(x));
function id(){return 'building-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,10)}
function view(){return {floorId:'L0',selected:null,selectedDoor:null,zoom:1,pan:{x:0,y:0},viewBounds:null,showBelow:true,dimensions:true}}
function building(name,plan,sourceVariant='custom'){return {id:id(),name:name.trim().slice(0,100)||'Untitled building',sourceVariant,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),plan:copy(plan),view:view()}}
function blank(name){return building(name,{version:1,units:'metres',title:name,floors:{L0:{name:'Ground floor',z:0,elevation:'0 m',note:'',rooms:[],doors:[],entrances:[]}}})}
function validate(data,validatePlan){
 if(data?.format!=='kern-buildings'||data.schemaVersion!==1||!Array.isArray(data.buildings)||!data.buildings.length||data.buildings.length>100)throw Error('Expected a building backup');
 const ids=new Set();for(const b of data.buildings){if(!b||typeof b.id!=='string'||ids.has(b.id)||typeof b.name!=='string'||!b.name.trim()||b.name.length>100)throw Error('Invalid building');ids.add(b.id);validatePlan(b.plan)}
 if(!ids.has(data.activeBuildingId))throw Error('Missing active building');
 if(data.archive!==undefined&&(!Array.isArray(data.archive)||data.archive.length>200||data.archive.some(a=>!a||typeof a.id!=='string'||typeof a.name!=='string'||a.name.length>180||![...variants,'custom','main'].includes(a.sourceVariant)||a.saved!==null&&typeof a.saved!=='string')))throw Error('Invalid archive');
 return data;
}
function storageSnapshot(storage){
 const raw={},errors={};const keys=new Set([KEY,PREVIOUS,BACKUP,'kern-version-history-v1','kern-workspace-v1','kern-workspace-v1.previous',...variants.map(v=>'kern-plan-'+v),'kern-active-variant','kern-garage-double-introduced','kern-v8-introduced','kern-v9-introduced']);
 try{for(let i=0;i<storage.length;i++){const key=storage.key(i);if(key?.startsWith('kern-'))keys.add(key)}}catch(error){errors.inventory=error.message}
 for(const key of keys)try{const value=storage.getItem(key);if(value!==null&&value!==undefined)raw[key]=value}catch(error){errors[key]=error.message}
 return {raw,errors};
}
function parse(raw){try{return raw?JSON.parse(raw):null}catch{return null}}
function recoveryView(primary,previous,validatePlan){
 const source=Array.isArray(primary?.buildings)&&primary.buildings.length?primary:Array.isArray(previous?.buildings)&&previous.buildings.length?previous:null;
 const errors=[],seen=new Set(),items=[];
 for(const [index,original] of (source?.buildings||[]).entries()){
  const b=original&&typeof original==='object'?copy(original):{},originalId=b.id;
  if(typeof b.id!=='string'||!b.id||seen.has(b.id)){let suffix=index;b.id='recovery-record-'+suffix;while(seen.has(b.id))b.id='recovery-record-'+(++suffix)}seen.add(b.id);
  b.name=typeof b.name==='string'&&b.name.trim()?b.name.slice(0,100):'Saved building '+(index+1);
  if(!b.view||typeof b.view!=='object'||Array.isArray(b.view))b.view=view();
  let issue='';try{validatePlan(b.plan)}catch(error){issue=error.message||'This plan cannot be read'}
  if(issue){const old=Array.isArray(previous?.buildings)?previous.buildings.find(x=>x?.id===originalId):null;let usable=false;try{if(old){validatePlan(old.plan);usable=true}}catch{}
   b.plan=usable?copy(old.plan):blank('Recovery placeholder').plan;b.view=usable?copy(old.view||view()):view();
   b.recoveryIssue=issue;b.recoveryStatus=usable?'Previous snapshot · read-only':'Needs recovery · original data preserved';
   errors.push({id:b.id,name:b.name,message:issue,source:usable?'previous':'raw-only'});
  }else b.recoveryStatus=source===primary?'Saved plan · read-only':'Previous snapshot · read-only';
  items.push(b);
 }
 if(!items.length){const b=blank('Saved workspace needs recovery');b.recoveryIssue='The saved collection could not be read';b.recoveryStatus='Needs recovery · original data preserved';items.push(b);errors.push({id:b.id,name:b.name,message:b.recoveryIssue,source:'raw-only'});}
 const data={format:'kern-buildings',schemaVersion:1,activeBuildingId:items.some(b=>b.id===source?.activeBuildingId)?source.activeBuildingId:items[0].id,buildings:items,archive:[]};
 // Recovery views are never persisted. Exact collection/archive bytes are in recovery.raw.
 if(source?.publishedMainRevision)data.publishedMainRevision=source.publishedMainRevision;
 if(Array.isArray(source?.archive))data.archive=source.archive.filter(a=>a&&typeof a.id==='string'&&typeof a.name==='string'&&[...variants,'custom','main'].includes(a.sourceVariant)&&(a.saved===null||typeof a.saved==='string')).map(copy);
 return {data,errors};
}
function load(storage,seedFor,validatePlan){
 let data,baseline=null,locked=false,message='',migrated=false,recovery=null;const get=k=>storage.getItem(k);
 function recover(reason){
  const snapshot=storageSnapshot(storage),primary=parse(baseline),previous=parse(snapshot.raw[PREVIOUS]),result=recoveryView(primary,previous,validatePlan);
  data=result.data;locked=true;message='Saved buildings need recovery. Original browser data is preserved; download a recovery backup before continuing.';
  recovery={...snapshot,reason,issues:result.errors};
 }
 try{
  baseline=get(KEY);
  if(baseline!==null&&baseline!==undefined){try{data=validate(JSON.parse(baseline),validatePlan)}catch(error){recover(error.message)}}
  else if(get(PREVIOUS)){recover('The current collection is missing; a previous snapshot exists')}
  if(!data){
   const raw={},archive=[];for(const v of variants){const text=get('kern-plan-'+v);if(text!==null&&text!==undefined)raw['kern-plan-'+v]=text;archive.push({id:v,name:labels[v],sourceVariant:v,saved:text||null})}
   for(const key of ['kern-garage-double-introduced','kern-v8-introduced','kern-v9-introduced']){const value=get(key);if(value!==null&&value!==undefined)raw[key]=value}
   const active=get('kern-active-variant');if(active!==null&&active!==undefined)raw['kern-active-variant']=active;
   if(!get('kern-garage-double-introduced')&&raw['kern-plan-v8']&&!raw['kern-plan-v8initial']){try{if(JSON.parse(raw['kern-plan-v8']).revision!=='v8-garage-double')archive.find(a=>a.id==='v8initial').saved=raw['kern-plan-v8']}catch{}}
   const v=variants.includes(active)?active:root.KERN_PUBLISHED_MAIN?'main':'v11';let plan=copy(seedFor(v));let invalid=false;
   if(raw['kern-plan-'+v]){try{const saved=JSON.parse(raw['kern-plan-'+v]);validatePlan(saved);plan=saved}catch{invalid=true}}
   validatePlan(plan);const b=building('KERN',plan,v);data={format:'kern-buildings',schemaVersion:1,activeBuildingId:b.id,buildings:[b],archive,migratedAt:new Date().toISOString()};
   const backup=JSON.stringify({format:'kern-legacy-storage',schemaVersion:1,createdAt:new Date().toISOString(),raw});
   if(!get(BACKUP)){storage.setItem(BACKUP,backup);if(get(BACKUP)!==backup)throw Error('Could not verify the migration backup')}
   const encoded=JSON.stringify(data);try{storage.setItem(KEY,encoded);if(get(KEY)!==encoded)throw Error('Could not verify building storage')}catch(error){try{if(baseline===null)storage.removeItem(KEY);else storage.setItem(KEY,baseline)}catch{}throw error}baseline=encoded;migrated=true;
   message=invalid?'The selected legacy save could not be opened. Its original data is retained in Archive and the migration backup.':active?'Your current saved layout is now KERN. Older layouts are in Archive.':'';
  }
 }catch(error){
  locked=true;message='Storage is unavailable or full. Changes are in memory only. Download a recovery backup before closing.';
  const snapshot=storageSnapshot(storage);recovery={...snapshot,reason:error.message,issues:[]};
  if(!data){const result=recoveryView(parse(baseline),parse(snapshot.raw[PREVIOUS]),validatePlan);data=result.data;recovery.issues=result.errors;}
 }
 let state={data,baseline,locked,message,migrated,recovery,validatePlan};const published=root.KERN_PUBLISHED_MAIN;if(published&&!locked&&data.publishedMainRevision!==published.revision){const next=copy(data);try{validatePlan(published.building.plan);const archived=next.buildings.map(b=>({id:'saved-'+b.id+'-'+published.revision,name:b.name,sourceVariant:[...variants,'custom','main'].includes(b.sourceVariant)?b.sourceVariant:'custom',savedOnly:true,saved:JSON.stringify(b.plan),buildingSnapshot:copy(b)}));next.archive??=[];if(next.archive.length+archived.length>200)throw Error('Archive capacity reached');next.archive.push(...archived);const main=copy(published.building);main.id=id();main.name='KERN · Main layout';main.sourceVariant='main';next.buildings=[main];next.activeBuildingId=main.id;next.publishedMainRevision=published.revision;validate(next,validatePlan);const staged={...state,data:next};persist(storage,staged);state=staged;state.message='Uploaded main layout opened. Previous buildings are in Archive.';}catch(error){state.message='Could not switch to the uploaded layout because the archive or storage is full. Your existing buildings are preserved.';}}return state;
}
function contentSignature(data){const next={...data,buildings:data.buildings.map(b=>{const out={...b};delete out.view;delete out.updatedAt;return out})};delete next.activeBuildingId;return JSON.stringify(next)}
function persist(storage,state){
 if(state.locked)throw Error(state.recovery?'Recovery mode: original browser data is protected. Download a recovery backup.':'Local saving is blocked. Export a backup before closing.');
 if(state.validatePlan)validate(state.data,state.validatePlan);
 const current=storage.getItem(KEY);if(current!==state.baseline){state.locked=true;throw Error('This building collection changed in another tab. Export your work, then reload.')}
 const next=JSON.stringify(state.data);if(next===current)return;
 // Camera/selection changes must not rotate away the last document checkpoint.
 if(current&&contentSignature(JSON.parse(current))!==contentSignature(state.data)){storage.setItem(PREVIOUS,current);if(storage.getItem(PREVIOUS)!==current)throw Error('Could not verify the previous backup')}
 storage.setItem(KEY,next);if(storage.getItem(KEY)!==next)throw Error('Could not verify saved buildings');state.baseline=next;
}
function recoveryBackup(storage,state){const snapshot=storageSnapshot(storage);return {format:'kern-storage-recovery',schemaVersion:1,createdAt:new Date().toISOString(),raw:state.recovery?.raw||snapshot.raw,readErrors:{...state.recovery?.errors,...snapshot.errors},latestRaw:snapshot.raw,loadedBaseline:state.baseline,reason:state.recovery?.reason||state.message||'Local saving is blocked',issues:state.recovery?.issues||[],visibleWorkspace:copy(state.data)}}
function readRecovery(backup,validatePlan){
 if(backup?.format!=='kern-storage-recovery'||backup.schemaVersion!==1||!backup.raw||typeof backup.raw!=='object')throw Error('Expected a planner recovery backup');
 const raw=backup.raw[KEY]??backup.raw[PREVIOUS];if(typeof raw!=='string')throw Error('This recovery file needs manual recovery; its exact raw records are preserved');
 let data;try{data=validate(JSON.parse(raw),validatePlan)}catch(error){throw Error('Recovery backup retained. The original collection still needs repair: '+error.message)}
 if(backup.visibleWorkspace){let differs=true;try{differs=contentSignature(backup.visibleWorkspace)!==contentSignature(data)}catch{}if(differs)throw Error('This recovery backup also contains different unsaved or recovery work. Review both saved records and visibleWorkspace before importing; nothing was changed.');}
 return data;
}

function validateRecoveryReplacement(state,candidate,validatePlan){
 if(!state.locked||!state.recovery)throw Error('This action is only available while saved buildings need recovery');
 validate(candidate,validatePlan);
 if(!Array.isArray(candidate.archive)||candidate.buildings.some(b=>!b.view||typeof b.view!=='object'||Array.isArray(b.view)))throw Error('Choose a complete recovered collection with building views and archive metadata. Nothing was changed.');
 const original=parse(state.baseline);if(!Array.isArray(original?.buildings))throw Error('The original building list cannot be verified. Keep the raw recovery backup for review.');
 const ids=items=>items.map(b=>b?.id).sort();const currentIds=ids(original.buildings),nextIds=ids(candidate.buildings);
 if(currentIds.length!==nextIds.length||currentIds.some((id,i)=>typeof id!=='string'||id!==nextIds[i]))throw Error('Choose the complete recovered collection with the same building IDs. Nothing was changed.');
 return candidate;
}
function restoreRecovery(storage,state,candidate,validatePlan){
 validateRecoveryReplacement(state,candidate,validatePlan);
 const current=storage.getItem(KEY);if(current!==state.baseline)throw Error('The saved collection changed in another tab. Nothing was replaced; download a fresh recovery backup first.');
 const data=copy(candidate),encoded=JSON.stringify(data);
 // This explicit restoration intentionally replaces only the current collection.
 // Previous snapshots, version history and workspace metadata stay untouched.
 storage.setItem(KEY,encoded);if(storage.getItem(KEY)!==encoded)throw Error('Could not verify restoration. Keep both recovery files and do not retry before checking the saved collection.');
 state.data=data;state.baseline=encoded;state.locked=false;state.recovery=null;state.validatePlan=validatePlan;state.message='Recovered collection restored; original snapshots and history preserved.';return true;
}

root.KERN_BUILDINGS={KEY,BACKUP,PREVIOUS,variants,labels,copy,id,view,building,blank,validate,load,persist,storageSnapshot,recoveryBackup,readRecovery,validateRecoveryReplacement,restoreRecovery};
})(typeof window!=='undefined'?window:globalThis);
