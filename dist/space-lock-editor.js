/* A template room lock is independent of doors, floor scope and view locks.
 * Release only the selected room, on explicit user action, in one undo step. */
(function(){
'use strict';
const find=(fid,id)=>model.floors[fid]?.rooms.find(r=>r.id===id);
function status(fid,id){
 const r=find(fid,id);if(!r||!r.locked)return null;
 // Source footprints, generated voids and stair routes keep their own editors.
 if(sourceFor(r,fid)||isSourceRoom(r,fid)||r.type==='void'||r.routeStair||r.stairTransition||r.localSteps||isStair(r,fid))return null;
 const vertical=(model.verticalConnections||[]).filter(c=>c.room===id&&(c.floors?.includes(fid)||Object.hasOwn(c.footprints||{},fid)));
 if(vertical.some(c=>c.type!=='lift')||(model.splitLevelConnections||[]).some(c=>c.room===id&&(c.floor===fid||c.level===fid)))return null;
 const groups=['editGroup','stairStackId'].filter(k=>r[k]);
 const linked=!!(vertical.length||groups.length),floors=new Set([fid]);
 for(const c of vertical)for(const f of [...(c.floors||[]),...Object.keys(c.footprints||{})])floors.add(f);
 for(const [f,level]of Object.entries(model.floors))if(level.rooms.some(q=>q!==r&&groups.some(k=>q[k]===r[k])))floors.add(f);
 return{linked,floors:[...floors],name:r.name};
}
function selection(){const s=getSelection(),refs=window.KERN_LAYERS?.references()||[];return selectionCount(s)===1&&s.rooms.length===1&&refs.length===1&&refs[0].floor===floorId&&refs[0].kind==='rooms'&&refs[0].id===s.rooms[0]?{floor:floorId,id:s.rooms[0]}:null;}
function scopeFor(fid,id){return{building:currentBuilding().id,model,floor:fid,id};}
function current(scope){const s=selection();return !!s&&scope.building===currentBuilding().id&&scope.model===model&&scope.floor===floorId&&s.id===scope.id;}
function allowed(fid,id){return !window.KERN_WORKSPACE?.isHome()&&!!window.KERN_LAYERS?.canEditFloor(fid)&&window.KERN_LAYERS.available('rooms',id,fid);}
function preflight(){
 if(buildingState.locked||$('saved').dataset.state==='error')throw Error('Saving needs attention. Back up your work and resolve it before unlocking a space.');
 if(localStorage.getItem(window.KERN_BUILDINGS.KEY)!==buildingState.baseline)throw Error('Saved buildings changed in another tab. Back up your work and reload before unlocking.');
}
function unlockSelected({detach=false,scope}={}){
 try{
  const s=selection();if(!s||scope&&!current(scope)||!allowed(s.floor,s.id))return false;
  const info=status(s.floor,s.id);if(!info)return false;
  if(info.linked&&!detach){notify('This space still belongs to a linked shaft. Use Detach this floor and unlock to move it independently.');return false;}
  preflight();finishWidthEdit(true);resetTransient(true,true);
  const next=clone(model),r=next.floors[s.floor].rooms.find(r=>r.id===s.id);
  if(info.linked){
   delete r.editGroup;delete r.stairStackId;
   next.verticalConnections=(next.verticalConnections||[]).flatMap(c=>{
    if(c.room!==s.id||!c.floors?.includes(s.floor)&&!Object.hasOwn(c.footprints||{},s.floor))return[c];
    c.floors=(c.floors||[]).filter(f=>f!==s.floor);if(c.footprints)delete c.footprints[s.floor];
    for(const key of ['stops','throughOnlyFloors','passedFloors'])if(Array.isArray(c[key]))c[key]=c[key].filter(v=>(typeof v==='string'?v:v?.floor)!==s.floor);
    const remainingFloors=[...new Set([...c.floors,...Object.keys(c.footprints||{})])];if(!remainingFloors.length)return[];
    const remaining=next.floors[remainingFloors[0]]?.rooms.find(q=>q.id===c.room);if(remaining&&c.footprint)c.footprint=footprint(remaining);
    return[c];
   });
  }
  r.locked=false;validateImport(next);
  commit(()=>{model=next;setSelection({rooms:[s.id]});});
  notify($('saved').dataset.state==='error'?'Space unlocked in memory. Saving failed; download a backup before closing.':info.linked?'This floor is detached and unlocked · other shaft floors stay linked · Undo restores it':'Space unlocked · drag or edit its position · Undo restores the lock');return true;
 }catch(error){notify(error.message);return false;}
}
function panel(){
 $('spacelockactions')?.remove();const s=selection();if(!s)return;const info=status(s.floor,s.id);if(!info)return;
 const section=document.createElement('section');section.id='spacelockactions';section.className='selection-actions';
 section.innerHTML='<h3>Space lock</h3><p class="small">This space has a saved alignment lock. Removing doors does not remove that lock.</p>'+(info.linked?'<p class="small">It also belongs to a shaft or edit group on '+esc(info.floors.join(', '))+'. Detaching releases only this floor; the remaining shaft floors stay linked. Existing doors and geometry stay in place.</p><button id="unlockspace" type="button">Detach this floor and unlock</button>':'<button id="unlockspace" type="button">Unlock space</button>')+'<p class="small">One Undo restores the lock'+(info.linked?' and shaft links':'')+'.</p>';
 $('inspector').querySelector('.commonfields')?.after(section);if(!section.isConnected)$('inspector').prepend(section);
 const button=$('unlockspace'),scope=scopeFor(s.floor,s.id);button.disabled=!allowed(s.floor,s.id)||buildingState.locked||$('saved').dataset.state==='error';button.onclick=()=>unlockSelected({detach:info.linked,scope});
}
const baseInspector=inspector;inspector=function(...args){const result=baseInspector(...args);panel();return result;};
const baseMenu=openRoomMenu;openRoomMenu=function(id,x,y){const result=baseMenu(...arguments),info=status(floorId,id);if(connectionMenu?.kind!=='room'||connectionMenu.id!==id||!info)return result;connectionMenu.spaceLockScope=scopeFor(floorId,id);const button=document.createElement('button');button.type='button';button.setAttribute('role','menuitem');button.tabIndex=-1;button.dataset.menuAction='unlock-space';button.textContent=info.linked?'Detach this floor and unlock':'Unlock space';button.setAttribute('aria-disabled',String(!allowed(floorId,id)||buildingState.locked||$('saved').dataset.state==='error'));$('connectionmenu').append(button);showContextMenu(x,y,find(floorId,id).type);return result;};
const baseAction=applyConnectionMenu;applyConnectionMenu=function(action){if(action!=='unlock-space')return baseAction(...arguments);const scope=connectionMenu?.spaceLockScope;if(!scope||!current(scope))return;const info=status(scope.floor,scope.id);closeConnectionMenu(true);if(info)unlockSelected({detach:info.linked,scope});};
window.KERN_SPACE_LOCK={status,reviewable:(fid,id)=>!!status(fid,id),unlockSelected,sync:panel};
window.KERN_LAYERS?.sync();panel();
})();
