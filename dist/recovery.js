/* Explicit local restoration. No sample, automatic repair, or network upload. */
(function(){
'use strict';
const warning=$('savewarning'),button=document.createElement('button'),input=document.createElement('input');
button.id='restore-recovered-collection';button.textContent='Restore recovered collection…';input.id='recovery-file';input.type='file';input.accept='.json,application/json';input.hidden=true;warning.append(button,input);
const sync=()=>{button.hidden=!buildingState.locked||!buildingState.recovery;};
const previousSync=window.KERN_UI.syncStorage;window.KERN_UI.syncStorage=function(...args){const result=previousSync(...args);sync();return result;};
button.onclick=()=>input.click();
input.onchange=async()=>{
 const file=input.files?.[0];if(!file)return;button.disabled=true;
 try{
  if(file.size>20e6)throw Error('Recovery file exceeds 20 MB');
  const candidate=JSON.parse(await file.text());window.KERN_BUILDINGS.validateRecoveryReplacement(buildingState,candidate,validateImport);
  exportRecovery();
  const count=candidate.buildings.length;
  if(!confirm('Restore '+count+' buildings from “'+file.name+'”? A recovery backup of the original browser records was downloaded. This replaces only the current saved collection. Previous snapshots and version history stay unchanged.'))return;
  window.KERN_BUILDINGS.restoreRecovery(localStorage,buildingState,candidate,validateImport);
  // Rehydration invokes render/saveView hooks. Keep every automatic writer blocked.
  buildingState.locked=true;try{buildingHistories.clear();loadBuilding(currentBuilding());render();}finally{buildingState.locked=false;}
  $('saved').dataset.state='saved';$('saved').textContent='Recovered · saved in this browser';$('saved').title='The recovered collection is saved; original previous snapshots and version history remain.';window.KERN_UI.syncStorage();
  window.KERN_WORKSPACE?.sync();notify(count+' buildings restored · previous snapshots and history preserved');
 }catch(error){notify('Recovery not completed: '+error.message);$('savewarningtext').textContent=error.message;}
 finally{input.value='';button.disabled=false;sync();}
};
window.KERN_RECOVERY={sync};sync();
})();
