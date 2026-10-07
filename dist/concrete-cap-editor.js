/* Cap independence is an explicit one-step edit, never a load-time migration. */
(function(){
'use strict';
const caps=window.KERN_CONCRETE_CAPS;
function detachSelected(){
 const selection=getSelection(),id=selection.rooms[0];
 if(selectionCount()!==1||!id||!window.KERN_LAYERS.available('rooms',id)||!caps.eligible(model,floorId,id))return false;
 finishWidthEdit(false);resetTransient(true,true);
 try{const next=caps.detach(model,floorId,id);validateImport(next);commit(()=>{model=next;setSelection({rooms:[id]});});notify('Cap is independent · change its type, shape or delete it · Undo restores the link');return true;}
 catch(error){notify(error.message);return false;}
}
function panel(){
 $('concretecapactions')?.remove();
 const selection=getSelection(),r=selection.rooms.length===1?room(selection.rooms[0]):null;
 if(selectionCount()!==1||!r||!caps.eligible(model,floorId,r.id))return;
 const section=document.createElement('section');section.id='concretecapactions';section.className='selection-actions';
 section.innerHTML='<h3>Concrete cap</h3><p class="small">Make this cap independent to edit its shape, change its room type or remove it. Its current shape, height and position stay exactly as they are. The source room and linked void stay unchanged.</p><button id="makecapindependent" type="button">Make cap independent</button><p class="small">One undo step restores the source link.</p>';
 $('inspector').querySelector('.commonfields')?.after(section);if(!section.isConnected)$('inspector').prepend(section);
 $('makecapindependent').disabled=!window.KERN_LAYERS.available('rooms',r.id);
 const scope={building:currentBuilding().id,floor:floorId,room:r.id};
 $('makecapindependent').onclick=()=>{if(scope.building!==currentBuilding().id||scope.floor!==floorId||getSelection().rooms[0]!==scope.room)return;detachSelected();};
}
// Solids and voids are deliberately absent from walkable preview room records.
// Resolve only concrete caps for selection, without adding walkable geometry.
function selectionRoom(fid,id){
 const f=model.floors[fid],r=f?.rooms.find(r=>r.id===id);
 if(!r||!(caps.independent(r)||caps.eligible(model,fid,id))||!window.KERN_LAYERS.available('rooms',id,fid))return null;
 return {...r,z:r.z??f.z,height:r.height??f.clearHeight??3};
}
function readOnly(fid,id){
 const r=model.floors[fid]?.rooms.find(r=>r.id===id);
 return !!r&&(caps.independent(r)||caps.eligible(model,fid,id))&&(!caps.independent(r)||!!r.locked||!window.KERN_LAYERS.available('rooms',id,fid));
}
const baseInspector=inspector;inspector=function(...args){const result=baseInspector(...args);panel();return result;};
window.KERN_CONCRETE_CAP_UI={detachSelected,sync:panel,selectionRoom,readOnly};panel();
})();
