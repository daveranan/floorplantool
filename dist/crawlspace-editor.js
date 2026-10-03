/* Optional floor-owned crawlspace authoring. Visibility remains a Layers view setting. */
(function(){
'use strict';
const C=window.KERN_CRAWLSPACES;
if(!C)return;
const policy={envelopePolicy:Object.fromEntries(Object.keys(C.DEFAULT_POLICY).map(key=>[key,true]))};
const accepted=new Map();let pending=null,applying=false,cache=null;
const json=x=>JSON.stringify(x),copy=x=>JSON.parse(json(x)),arr=x=>Array.isArray(x)?x:[],signed=x=>(x>0?'+':'')+Number(x).toFixed(2)+' m';
function selectionState(){return{floor:floorId,selection:copy(getSelection()),refs:copy(window.KERN_LAYERS.references()),scope:json(window.KERN_LAYERS.floorState())};}
function snapshot(){return{building:currentBuilding()?.id,plan:json(model),history:[...history],future:[...future],...selectionState()};}
function remember(){const live=new Set(arr(buildingState?.data?.buildings).map(b=>b.id));for(const id of accepted.keys())if(!live.has(id))accepted.delete(id);const id=currentBuilding()?.id;if(id){if(hasChildren(model))accepted.set(id,snapshot());else accepted.delete(id);}cache=null;}
function restore(s){model=JSON.parse(s.plan);history=[...s.history];future=[...s.future];floorId=model.floors[s.floor]?s.floor:model.floors[floorId]?floorId:'L0';setSelection(s.selection);window.KERN_LAYERS.setReferences(s.refs,{paint:false});cache=null;captureBuilding();}
function replay(s){const now=json(model);return(s.history.length&&now===s.history.at(-1)&&json(history)===json(s.history.slice(0,-1))&&json(future)===json([...s.future,s.plan]))||(s.future.length&&now===s.future.at(-1)&&json(future)===json(s.future.slice(0,-1))&&json(history)===json([...s.history,s.plan]));}
function hasChildren(p){return Object.values(p.floors||{}).some(C.isChild);}
function envelope(fid=floorId){const f=model.floors[fid];if(!C.isChild(f))return null;const signature=json(model);if(!cache||cache.signature!==signature)cache={signature,values:new Map()};if(!cache.values.has(fid))cache.values.set(fid,C.deriveEnvelope(model,f.crawlspace.hostFloor,policy));return cache.values.get(fid);}
function warnings(before,after){return C.classifyMutation(before,after,policy);}
function failure(text){notify(text);return false;}
function floorChanges(before,after){return Object.keys(after.floors).filter(id=>before.floors[id]&&!C.isChild(after.floors[id])&&C.children(before,id).length&&(before.floors[id].z!==after.floors[id].z||before.floors[id].clearHeight!==after.floors[id].clearHeight));}
function review(s){
 const before=JSON.parse(s.plan),after=copy(model);if(!hasChildren(before)&&!hasChildren(after))return true;
 if(!applying){
  if(floorChanges(before,after).length){restore(s);return failure('Use Floor heights or Edit floor to review this host change with its crawlspace and linked elevations before applying.');}
  for(const [id,f]of Object.entries(after.floors)){const old=before.floors[id];if(!old||!C.isChild(f))continue;
   if(!after.floors[f.crawlspace.hostFloor]&&before.floors[f.crawlspace.hostFloor]){model.floors[id]=copy(old);after.floors[id]=copy(old);continue;}
   if(f.z!==old.z&&!floorChanges(before,after).includes(f.crawlspace.hostFloor)){restore(s);return failure('Crawlspace elevation follows its host ceiling and slab. Edit the host floor to move it.');}
   if(f.clearHeight!==old.clearHeight||f.crawlspace.clearHeight!==old.crawlspace.clearHeight){const h=f.clearHeight!==old.clearHeight?f.clearHeight:f.crawlspace.clearHeight;restore(s);show(C.propose(before,{action:'height',hostFloor:f.crawlspace.hostFloor,clearHeight:h},policy),s);return false;}
  }
  for(const [id,f]of Object.entries(before.floors))if(C.isChild(f)&&!after.floors[id]){restore(s);return failure('Remove an empty, unreferenced crawlspace through Crawlspace settings. Existing authored content must be relocated first.');}
 }
 const result=warnings(before,after);if(!result.ok){restore(s);return failure(result.issues.find(i=>i.blocking)?.text||'The crawlspace edit could not be accepted.');}
 if(!applying&&result.mutations.some(m=>['created','reshaped','height-changed','deleted'].includes(m.kind)&&!window.KERN_LAYERS.canEditFloor(m.floor))){restore(s);return failure('Show and enable the crawlspace floor in Layers before editing its rooms.');}
 const retained=result.issues.filter(i=>['stranded-child','child-height-conflict','orphan-child-retained'].includes(i.code));if(retained.length)notify('Authored crawlspace content retained · '+retained.length+' item'+(retained.length===1?'':'s')+' need review in Crawlspace settings.');
 return true;
}
function guardCommit(s){const ok=!s||review(s);if(ok)remember();return ok;}
function beforeSave(){const s=accepted.get(currentBuilding()?.id);if(!s||s.plan===json(model))return true;if(replay(s)){remember();return true;}const ok=review(s);if(ok)remember();else render();return ok;}
function routeHeight(fid,key,value){const f=model.floors[fid];if(!f||!C.isChild(f)&&!C.children(model,fid).length)return false;if(!window.KERN_LAYERS.canEditFloor(fid)){failure('Show and enable this floor in Layers before editing its crawlspace heights.');return true;}if(C.isChild(f)){if(key==='z')failure('Crawlspace elevation is derived from its host ceiling and slab.');else if(value!==f.clearHeight)open(fid,{clearHeight:value});return true;}if(!Number.isFinite(value)||(key==='z'?Math.abs(value)>150:value<.5||value>50)){failure('Use valid metric floor heights.');return true;}if(value===(key==='z'?f.z:f.clearHeight??3))return true;try{show(C.proposeHostHeight(model,{hostFloor:fid,key,value},policy));}catch(e){failure(e.message);}return true;}
function prepareFloorDetails(fid,{name,z}){const f=model.floors[fid];if(!f||!C.isChild(f)&&!C.children(model,fid).length)return null;if(!window.KERN_LAYERS.canEditFloor(fid))throw Error('Show and enable this floor in Layers before editing its details.');if(f.z===z)return null;if(C.isChild(f))throw Error('Crawlspace elevation follows its host ceiling and slab. Rename this child here, or edit its host floor to move it.');return{proposal:C.proposeHostHeight(model,{hostFloor:fid,key:'z',value:z,name},policy),snapshot:snapshot()};}
const dialog=document.createElement('dialog');dialog.id='crawlspace-dialog';dialog.setAttribute('aria-labelledby','crawlspace-title');dialog.innerHTML='<div class="stairpreviewhead"><div><span class="eyebrow">OPTIONAL CHILD LAYER</span><h2 id="crawlspace-title">Crawlspace</h2></div><button id="crawlspace-close">Cancel</button></div><p id="crawlspace-context" class="small"></p><label class="field" id="crawlspace-height-field"><span>Clear height · m</span><input id="crawlspace-height" type="number" min=".5" max="50" step=".1" value="1.5"></label><p class="small">The inherited outline is a drawing boundary. Draw rooms or corridors to create pockets; undrawn areas stay solid. Excluded tall halls, voids, outdoor areas, concrete intrusions and stairs remain holes.</p><div id="crawlspace-preview" aria-live="polite"></div><p class="small">Only an empty, unreferenced child can be removed. Removing it never lowers main floors. Relocate or remove authored content and links first.</p><div class="crawlspace-actions"><button id="crawlspace-remove">Preview removal</button><button id="crawlspace-refresh">Refresh inherited outline</button><button id="crawlspace-apply" class="primary">Apply as one undo step</button></div>';document.body.append(dialog);
function close(){pending=null;dialog.close();}
$('crawlspace-close').onclick=close;dialog.addEventListener('cancel',()=>{pending=null;});
function show(proposal,s=snapshot()){
 if($('heightdialog')?.open)$('heightdialog').close();
 pending={proposal,s};$('crawlspace-title').textContent=proposal.action==='enable'?'Add crawlspace':proposal.action==='host-height'?'Review floor heights':proposal.action==='remove'?'Remove crawlspace':'Crawlspace settings';
 const child=proposal.childFloorId,base=JSON.parse(s.plan),f=base.floors[child],host=proposal.hostFloor;
 $('crawlspace-context').textContent=(host||'Missing host')+' → '+(child||'new child')+'. Review the complete elevation change before applying.';
 $('crawlspace-height').value=String(proposal.plan?.floors?.[child]?.clearHeight??f?.clearHeight??1.5);
 $('crawlspace-height-field').hidden=['remove','host-height'].includes(proposal.action);
 $('crawlspace-remove').disabled=!f;$('crawlspace-remove').hidden=proposal.action==='host-height';$('crawlspace-refresh').hidden=!f||proposal.action==='host-height';
 $('crawlspace-apply').disabled=!proposal.ok||!proposal.changed;
 const list=(items,fn)=>items.length?'<ul>'+items.map(x=>'<li>'+fn(x)+'</li>').join('')+'</ul>':'<p class="small">None.</p>';
 const stop=s=>arr(s?.stops).map(x=>esc(x.floor)+' '+signed(x.z)).join(', ')||'linked endpoints';
 $('crawlspace-preview').innerHTML='<h3>Floor surface changes</h3>'+list(arr(proposal.shifts),s=>esc(s.floor)+' · '+signed(s.from)+' → '+signed(s.to)+' ('+signed(s.delta)+')')+(proposal.action==='enable'?'<p class="small">A new child begins at '+signed(proposal.plan?.floors?.[child]?.z??0)+'. Higher main floors rise only enough to fit the clear height and slab; existing gaps count toward it.</p>':'')+'<h3>Affected stairs and links</h3>'+list(arr(proposal.stairs),s=>esc(s.after?.floor||s.key)+' / '+esc(s.after?.room||'stairs')+' · '+stop(s.before)+' → '+stop(s.after)+' · '+(s.before?.risers??'?')+' → '+(s.after?.risers??'?')+' risers')+list(arr(proposal.movementIssues).filter(i=>/link|cap|void|section|exterior|step/.test(i.code)),i=>esc(i.text))+'<h3>Warnings and retained content</h3>'+list(arr(proposal.issues),i=>'<span class="'+(i.blocking?'crawlspace-error':'')+'">'+esc(i.text)+(i.floor?' ['+esc(i.floor)+']':'')+(i.room?' '+esc(i.room):'')+'</span>');
 if(proposal.action==='host-height'){const old=base.floors[host],next=proposal.plan?.floors?.[host],details=[];if(old&&next){if(old.name!==next.name)details.push('Name: '+old.name+' → '+next.name);if((old.clearHeight??3)!==(next.clearHeight??3))details.push('Host clear height: '+Number(old.clearHeight??3).toFixed(2)+' m → '+Number(next.clearHeight??3).toFixed(2)+' m');}if(details.length)$('crawlspace-preview').insertAdjacentHTML('afterbegin','<h3>Host details</h3>'+list(details,esc));}
 if(!dialog.open)dialog.showModal();
 return proposal;
}
function open(fid=floorId,values={}){const f=model.floors[fid];if(!f)return false;if(!window.KERN_LAYERS.canEditFloor(fid))return failure('Show and enable this floor in Layers before editing its crawlspace.');finishWidthEdit(false);resetTransient(true);const host=C.isChild(f)?f.crawlspace.hostFloor:fid,child=C.children(model,host)[0],action=values.action||(child?'height':'enable');return show(C.propose(model,{action,hostFloor:host,...(values.clearHeight!==undefined?{clearHeight:values.clearHeight}:{})},policy));}
$('crawlspace-height').onchange=()=>{if(!pending)return;const {s,proposal:p}=pending;show(C.propose(JSON.parse(s.plan),{action:p.action==='enable'?'enable':'height',hostFloor:p.hostFloor,clearHeight:Number($('crawlspace-height').value)},policy),s);};
for(const [id,action]of [['crawlspace-remove','remove'],['crawlspace-refresh','refresh']])$(id).onclick=()=>{if(pending)show(C.propose(JSON.parse(pending.s.plan),{action,hostFloor:pending.proposal.hostFloor},policy),pending.s);};
function apply(){
 if(!pending?.proposal.ok||!pending.proposal.changed)return false;const {s,proposal:p}=pending;
 if(s.building!==currentBuilding()?.id||s.plan!==json(model)||s.floor!==floorId||s.scope!==json(window.KERN_LAYERS.floorState())||!window.KERN_LAYERS.canEditFloor(floorId)||json(s.history)!==json(history)||json(s.future)!==json(future)){close();return failure('The building or editable floor scope changed during the preview. Reopen Crawlspace settings to review a fresh proposal.');}
 try{validateImport(p.plan);}catch(e){return failure(e.message);}
 applying=true;let ok;try{ok=commit(()=>{model=copy(p.plan);setSelection();viewBounds=null;});}finally{applying=false;}
 if(ok===false)return false;close();const focus=p.action==='remove'?p.hostFloor:p.childFloorId;if(model.floors[focus])window.KERN_LAYERS.activateFloor(focus);notify('Crawlspace change applied · Undo restores the entire proposal.');return true;
}
$('crawlspace-apply').onclick=apply;
function path(geometry){return geometry.map(poly=>poly.map(ring=>'M'+ring.map(p=>p.join(' ')).join('L')+'Z').join('')).join('');}
function overlay(){const f=floor();if(!C.isChild(f)||!window.KERN_LAYERS.visible(floorId))return '';const e=envelope();if(!e)return '';return '<g id="crawlspace-envelope" pointer-events="none"><path class="crawlspace-boundary" fill-rule="evenodd" d="'+path(e.geometry)+'"/>'+e.masks.map(m=>'<path class="crawlspace-hole" fill-rule="evenodd" d="'+path(m.geometry)+'"><title>'+esc(m.reason+' · '+m.floor+' / '+m.room)+'</title></path>').join('')+'</g>';}
function fitBounds(base,exporting){const e=envelope();if(!e)return base;const points=[...e.geometry.flat(2),...e.masks.flatMap(m=>m.geometry.flat(2))];if(!points.length)return base;const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]),x=Math.min(...xs)-4,y=Math.min(...ys)-4,right=Math.max(...xs)+6,bottom=Math.max(...ys)+3;if(!floor().rooms.length&&!arr(floor().primitives).length&&!exporting)return{x,y,w:right-x,h:bottom-y};const left=Math.min(base.x,x),top=Math.min(base.y,y);return{x:left,y:top,w:Math.max(base.x+base.w,right)-left,h:Math.max(base.y+base.h,bottom)-top};}
const oldBounds=bounds;bounds=function(exporting=false){return fitBounds(oldBounds(exporting),exporting);};
function floorOrder(ids){const ordered=[],seen=new Set();for(const id of ids){if(C.isChild(model.floors[id]))continue;ordered.push(id);seen.add(id);for(const child of ids.filter(cid=>model.floors[cid]?.crawlspace?.hostFloor===id)){ordered.push(child);seen.add(child);}}return [...ordered,...ids.filter(id=>!seen.has(id))];}
function sync(){
 const f=floor(),child=C.isChild(f),host=child?f.crawlspace.hostFloor:floorId,cid=child?floorId:C.children(model,host)[0];let panel=$('crawlspace-floor-controls');if(!panel){panel=document.createElement('section');panel.id='crawlspace-floor-controls';document.querySelector('.floorproperties').after(panel);}
 const text=cid?'Crawlspace settings…':'Add crawlspace…',html='<button id="crawlspace-settings">'+text+'</button>'+(cid?'<button id="crawlspace-visibility">'+(window.KERN_LAYERS.visible(cid)?'Hide':'Show')+' crawlspace</button>':'')+(child?'<p class="small">Child of '+esc(host)+' · '+f.clearHeight+' m clear. Draw pockets inside the inherited outline; all undrawn area stays solid.</p>':'');
 const scope=currentBuilding()?.id+':'+floorId+':'+cid;if(panel.dataset.html!==html||panel.dataset.scope!==scope){panel.innerHTML=html;panel.dataset.html=html;panel.dataset.scope=scope;$('crawlspace-settings').onclick=()=>open();if(cid)$('crawlspace-visibility').onclick=()=>window.KERN_LAYERS.setVisible(cid,!window.KERN_LAYERS.visible(cid));}
 $('crawlspace-settings').disabled=!window.KERN_LAYERS.canEditFloor(floorId);$('crawlspace-settings').title=$('crawlspace-settings').disabled?'Show and enable this floor in Layers to edit':'Review optional crawlspace settings';
 for(const row of $('floors').querySelectorAll('[data-floor-row]')){const cf=model.floors[row.dataset.floorRow],isChild=C.isChild(cf);row.classList.toggle('crawlspace-child',isChild);if(isChild)row.setAttribute('aria-label','Crawlspace child of '+cf.crawlspace.hostFloor);}
 for(const input of document.querySelectorAll('[data-height-key="z"],#contextfloorz,#threefloorz')){const fid=input.dataset.heightFloor||floorId;if(C.isChild(model.floors[fid])){input.disabled=true;input.dataset.crawlspaceDerived='true';input.title='Derived from the host ceiling and slab';}else if(input.dataset.crawlspaceDerived){input.disabled=false;delete input.dataset.crawlspaceDerived;input.title='';}}
 if(child&&$('emptyfloor'))$('emptyfloor').hidden=true;
 let note=$('crawlspace-retained-warning');if(!note){note=document.createElement('p');note.id='crawlspace-retained-warning';note.className='small warn';note.setAttribute('role','status');panel.append(note);}
 const issues=cid?C.classifyMutation(model,model,policy).issues.filter(i=>['stranded-child','child-height-conflict','orphan-child-retained'].includes(i.code)&&i.floor===cid):[];note.hidden=!issues.length;note.textContent=issues.length+' retained item'+(issues.length===1?'':'s')+' need review. '+(issues[0]?.text||'');
 const saved=accepted.get(currentBuilding()?.id);if(saved&&saved.plan===json(model))Object.assign(saved,selectionState());
}
const oldRender=render;render=function(...args){const result=oldRender(...args);sync();return result;};
const oldChecks=checks;checks=function(f=floor()){const id=Object.entries(model.floors).find(([,q])=>q===f)?.[0],extra=C.isChild(f)?C.classifyMutation(model,model,policy).issues.filter(i=>i.floor===id&&['stranded-child','child-height-conflict','orphan-child-retained'].includes(i.code)):[];return [...oldChecks(f),...extra.map(i=>({kind:'crawlspace',text:i.text}))];};
const oldValidate=validateImport;validateImport=function(p){oldValidate(p);const bad=C.validate(p).find(i=>i.blocking);if(bad)throw Error(bad.text);return p;};
window.KERN_CRAWLSPACE_UI={policy,snapshot,beginCommit:()=>hasChildren(model)||applying?snapshot():null,remember,acceptRestoredVersion(p){validateImport(p);if(json(p)!==json(model))throw Error('The restored version changed before validation.');remember();},guardCommit,beforeSave,routeHeight,prepareFloorDetails,open,show,apply,sync,overlay,floorOrder,envelope,pending:()=>pending?.proposal||null};
remember();sync();draw();
})();
