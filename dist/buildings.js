/* Building documents are local to this browser. Legacy storage is read-only. */
(function(root){
'use strict';
const KEY='kern-buildings-v1',BACKUP='kern-buildings-migration-backup-v1',PREVIOUS=KEY+'.previous';
const variants=['v11','v10','useredit20260930','v9','v8','v8initial','v7','v6','v5','v4','v3','v2','v1'];
const labels={v11:'V11 · Concealed concrete L2',v10:'V10 · Polished user edits',useredit20260930:'Your uploaded edits',v9:'V9 · Dropped garage / circulation',v8:'V8 · Double-size garage',v8initial:'V8 · Earlier garage',v7:'V7 · Approved crown baseline',v6:'V6 · Bent arrival',v5:'V5 · Compact court',v4:'V4 · Square / sequence',v3:'V3 · Balanced',v2:'V2 · Room clusters',v1:'V1 · Original'};
const copy=x=>JSON.parse(JSON.stringify(x));
function id(){return 'building-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,10)}
function view(){return {floorId:'L0',selected:null,selectedDoor:null,zoom:1,pan:{x:0,y:0},viewBounds:null,showBelow:true,dimensions:true}}
function building(name,plan,sourceVariant='custom'){return {id:id(),name:name.trim().slice(0,100)||'Untitled building',sourceVariant,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),plan:copy(plan),view:view()}}
function blank(name){return building(name,{version:1,units:'metres',title:name,floors:{L0:{name:'Ground floor',z:0,elevation:'0 m',note:'',rooms:[],doors:[],entrances:[]}}})}
function validate(data,validatePlan){
 if(data?.format!=='kern-buildings'||data.schemaVersion!==1||!Array.isArray(data.buildings)||!data.buildings.length||data.buildings.length>100)throw Error('Expected a building backup');
 const ids=new Set();for(const b of data.buildings){if(!b||typeof b.id!=='string'||ids.has(b.id)||typeof b.name!=='string'||!b.name.trim()||b.name.length>100)throw Error('Invalid building');ids.add(b.id);validatePlan(b.plan)}
 if(!ids.has(data.activeBuildingId))throw Error('Missing active building');
 if(data.archive!==undefined&&(!Array.isArray(data.archive)||data.archive.length>200||data.archive.some(a=>!a||typeof a.id!=='string'||typeof a.name!=='string'||a.name.length>180||!variants.includes(a.sourceVariant)||a.saved!==null&&typeof a.saved!=='string')))throw Error('Invalid archive');
 return data;
}
function load(storage,seedFor,validatePlan){
 let data,baseline=null,locked=false,message='',migrated=false;const get=k=>storage.getItem(k);
 try{
  baseline=get(KEY);
  if(baseline){try{data=validate(JSON.parse(baseline),validatePlan)}catch(error){const previous=get(PREVIOUS);if(previous){try{data=validate(JSON.parse(previous),validatePlan);message='Recovered the previous building backup. Download a backup before continuing.'}catch{}}locked=true;message ||= 'The saved building file could not be read. Your original data is preserved. Download a backup before continuing.'}}
  if(!data){
   const raw={},archive=[];for(const v of variants){const text=get('kern-plan-'+v);if(text!==null&&text!==undefined)raw['kern-plan-'+v]=text;archive.push({id:v,name:labels[v],sourceVariant:v,saved:text||null})}
   for(const key of ['kern-garage-double-introduced','kern-v8-introduced','kern-v9-introduced']){const value=get(key);if(value!==null&&value!==undefined)raw[key]=value}
   const active=get('kern-active-variant');if(active!==null&&active!==undefined)raw['kern-active-variant']=active;
   // Older V8 storage contained the earlier garage before a marker was introduced.
   if(!get('kern-garage-double-introduced')&&raw['kern-plan-v8']&&!raw['kern-plan-v8initial']){try{if(JSON.parse(raw['kern-plan-v8']).revision!=='v8-garage-double')archive.find(a=>a.id==='v8initial').saved=raw['kern-plan-v8']}catch{}}
   const v=variants.includes(active)?active:'v11';let plan=copy(seedFor(v));let invalid=false;
   if(raw['kern-plan-'+v]){try{const saved=JSON.parse(raw['kern-plan-'+v]);validatePlan(saved);plan=saved}catch{invalid=true}}
   validatePlan(plan);const b=building('KERN',plan,v);data={format:'kern-buildings',schemaVersion:1,activeBuildingId:b.id,buildings:[b],archive,migratedAt:new Date().toISOString()};
   if(!locked){
    const backup=JSON.stringify({format:'kern-legacy-storage',schemaVersion:1,createdAt:new Date().toISOString(),raw});
    if(!get(BACKUP)){storage.setItem(BACKUP,backup);if(get(BACKUP)!==backup)throw Error('Could not verify the migration backup')}
    const encoded=JSON.stringify(data);try{storage.setItem(KEY,encoded);if(get(KEY)!==encoded)throw Error('Could not verify building storage')}catch(error){try{if(baseline===null)storage.removeItem(KEY);else storage.setItem(KEY,baseline)}catch{}throw error}baseline=encoded;migrated=true;
    message=invalid?'The selected legacy save could not be opened. Its original data is retained in Archive and the migration backup.':active?'Your current saved layout is now KERN. Older layouts are in Archive.':'';
   }
  }
 }catch(error){locked=true;message='Storage is unavailable or full. Changes are in memory only. Download a backup before closing.'}
 if(!data){const b=building('KERN',seedFor('v11'),'v11');data={format:'kern-buildings',schemaVersion:1,activeBuildingId:b.id,buildings:[b],archive:variants.map(v=>({id:v,name:labels[v],sourceVariant:v,saved:null}))}}
 return {data,baseline,locked,message,migrated};
}
function persist(storage,state){
 if(state.locked)throw Error('Local saving is blocked. Export a backup before closing.');
 const current=storage.getItem(KEY);if(current!==state.baseline){state.locked=true;throw Error('This building collection changed in another tab. Export your work, then reload.')}
 const next=JSON.stringify(state.data);if(next===current)return;
 if(current){storage.setItem(PREVIOUS,current);if(storage.getItem(PREVIOUS)!==current)throw Error('Could not verify the previous backup')}
 storage.setItem(KEY,next);if(storage.getItem(KEY)!==next)throw Error('Could not verify saved buildings');state.baseline=next;
}
root.KERN_BUILDINGS={KEY,BACKUP,PREVIOUS,variants,labels,copy,id,view,building,blank,validate,load,persist};
})(typeof window!=='undefined'?window:globalThis);
