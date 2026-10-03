/* Compatible type changes share one model transaction and preserve selection. */
(function(){
'use strict';
const labels={single:'Single door',double:'Double door',open:'Open passage',window:'Window / window series'};
function groups(selection=getSelection()){
 const out=[];
 if(selection.rooms.length)out.push({key:'rooms',label:'Room type',ids:selection.rooms,options:roomTypes.map(k=>[k,roomTypeLabels[k]]),value:id=>room(id).type});
 if(selection.doors.length)out.push({key:'doors',label:'Opening type',ids:selection.doors,options:Object.entries(labels),value:id=>doorType(connection(id))});
 if(selection.symbols?.length)out.push({key:'symbols',label:'Item type',ids:selection.symbols,options:window.KERN_OBJECTS.catalog.map(o=>[o.kind,o.name]),value:id=>extraObject('symbols',id).kind});
 for(const [key,kinds,label]of [['service-routes',['duct','crawlway'],'Service route type'],['service-terminals',['hatch','vent'],'Service terminal type']]){
  const ids=(selection.services||[]).filter(id=>kinds.includes(extraObject('services',id)?.kind));
  if(ids.length)out.push({key,label,ids,options:kinds.map(k=>[k,({duct:'Utility duct',crawlway:'Crawlway',hatch:'Access hatch',vent:'Vent terminal'})[k]]),value:id=>extraObject('services',id).kind});
 }
 return out;
}
function apply(key,type){
 const group=groups().find(g=>g.key===key);if(!group||!group.options.some(([value])=>value===type))return false;
 const before=model,selection=clone(getSelection()),proposal=clone(model),changedIds=group.ids.filter(id=>group.value(id)!==type);
 if(!changedIds.length)return true;
 let error=null;
 try{
  if(key==='rooms')for(const id of changedIds){const option=roomTypeOption(room(id),type);if(!option.valid)throw Error(room(id).name+': '+option.reason);}
  model=proposal;
  if(key==='rooms')for(const id of changedIds){const r=room(id),refs=groupRefs(stairGroup(r));for(const target of refs.length?refs.map(ref=>ref.room):[r]){if(window.KERN_CONCRETE_CAPS)window.KERN_CONCRETE_CAPS.setType(target,type);else target.type=type;}}
  else if(key==='doors'){
   for(const id of changedIds){const d=connection(id),next=connectionWithType(d,type);next.width=d.width;next.offset=d.offset;
    if(type!=='window'&&[d.a,d.b].some(id=>['void','solid'].includes(room(id)?.type)))throw Error('A door or passage needs circulation rooms on both sides.');
    Object.assign(d,next);const target=d.legacyExternal||d;if(type==='open')delete target.leaves;else delete target.fullWidth;
   }
   for(const id of changedIds){const d=connection(id);if(!doorGeometry(d)||openingConflict(d))throw Error('Every selected opening must fit clear wall space. Nothing was changed.');}
  }else for(const id of changedIds){const collection=key==='symbols'?'symbols':'services',o=extraObject(collection,id);o.kind=type;}
  validateImport(proposal);
 }catch(e){error=e.message;}finally{model=before;}
 if(error){notify(error);return false;}
 commit(()=>{model=proposal;setSelection(selection);});notify(changedIds.length+' '+(key==='doors'?'opening':key==='rooms'?'room':'item')+(changedIds.length===1?'':'s')+' updated · Undo restores all types');return true;
}
function panel(){
 if(!isMultiSelection())return;
 const list=groups();if(!list.length)return;
 const section=document.createElement('section');section.id='bulktypes';section.className='selection-actions';section.innerHTML='<h3>Change selected types</h3>'+list.map(g=>{const values=[...new Set(g.ids.map(g.value))],value=values.length===1?values[0]:'';return `<label class="field"><span>${esc(g.label)} · ${g.ids.length} selected</span><select data-bulk-type="${g.key}" aria-label="${esc(g.label)} for ${g.ids.length} selected objects">${value?'':'<option value="">Mixed types…</option>'}${g.options.map(([type,label])=>{const blocked=g.key==='rooms'&&g.ids.some(id=>!roomTypeOption(room(id),type).valid);return `<option value="${type}" ${type===value?'selected':''} ${blocked?'disabled':''}>${esc(label)}</option>`;}).join('')}</select></label>`;}).join('')+'<p class="small">Each field changes only its matching selected objects. Dimensions and positions stay unchanged. Protected room and stair types stay protected.</p>';
 const root=$('inspector');root.querySelector('.group-inspector')?.prepend(section);if(!section.isConnected)root.prepend(section);
 for(const select of section.querySelectorAll('select'))select.onchange=()=>{if(select.value&&!apply(select.dataset.bulkType,select.value))panelRefresh();};
}
function panelRefresh(){const prior=$('bulktypes');prior?.remove();panel();}
const baseGroup=groupInspector;groupInspector=function(...args){const result=baseGroup(...args);panel();return result;};
window.KERN_BULK_TYPES={apply,groups};
})();
