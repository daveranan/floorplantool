/* Low opening choices reuse existing placement, fit checks and undo ownership. */
(function(){'use strict';
const L=window.KERN_LOW_OPENINGS;
const oldOptions=typeOptions;typeOptions=function(value){return oldOptions(value)+Object.entries(L.PRESETS).map(([key,p])=>`<option value="${key}" ${value===key?'selected':''}>${p.label}</option>`).join('');};
const selector=$('newconnectiontype');for(const [value,p]of Object.entries(L.PRESETS)){const option=document.createElement('option');option.value=value;option.textContent=p.label;selector.append(option);}
const oldNew=setNewConnectionKind;setNewConnectionKind=function(value){if(!L.isPreset(value))return oldNew(value);connectionKind=value;selector.value=value;refreshInteraction();};
const oldWidth=newOpeningWidth;newOpeningWidth=function(kind=connectionKind){return L.isPreset(kind)?L.DEFAULT_WIDTH:oldWidth(kind);};
function decorate(q){if(!q?.valid||!L.isPreset(connectionKind)||q.door?.maximumPassage)return q;const door=L.preset(q.door,connectionKind,{width:q.door.width}),geometry=doorGeometry(door),size=L.describe(door,floor());return geometry?{...q,door,geometry,summary:L.PRESETS[connectionKind].label+' · '+door.width.toFixed(2)+' × '+size.height.toFixed(2)+' m',z:size.z,clearHeight:size.height}:q;}
const oldCandidate=connectionCandidate;connectionCandidate=function(){return decorate(oldCandidate(...arguments));};
const oldExternal=externalCandidate;externalCandidate=function(){return decorate(oldExternal(...arguments));};
const oldPlacement=doorPlacementCandidate;doorPlacementCandidate=function(){return decorate(oldPlacement(...arguments));};
const oldGesture=gestureCandidate;gestureCandidate=function(){return decorate(oldGesture(...arguments));};
const oldType=connectionWithType;connectionWithType=function(d,value){
 if(L.isPreset(value)){const base=oldType(d,value==='low-passage'?'open':'single'),next=L.preset(base,value);for(const key of ['maximumPassage','maximumWallOffset','wrap','sill','windowCount','limitedHeight','fullWidth','leaves'])if(Object.hasOwn(d,key)&&!Object.hasOwn(next,key))next[key]=undefined;return next;}
 const next=oldType(d,value);if(L.recognized(d)){next.openingPreset=undefined;next.limitedHeight=undefined;next.height=value==='window'?1.4:value==='open'?undefined:2.2;}return next;
};
const oldInspector=inspector;inspector=function(){
 oldInspector(...arguments);
 for(const row of $('inspector').querySelectorAll('[data-editdoor]')){const item=connection(row.dataset.editdoor);if(L.recognized(item)){const text=row.querySelector('small');if(text)text.textContent=L.PRESETS[item.openingPreset].label+' · '+item.width+' × '+item.height+' m'+(item.sealed?' · sealed':'');}}
 const d=connection(selectedDoor),box=$('inspector')?.querySelector('.connectionfields');if(!d||!box)return;
 const select=box.querySelector('[data-doorkey="type"]');if(L.recognized(d)&&select)select.value=d.openingPreset;
 if(d.kind!=='window'&&(d.kind!=='open'||L.limited(d))){const size=L.describe(d,floor()),field=document.createElement('label');field.className='field';field.innerHTML=`<span>Clear height · m</span><input data-doorkey="height" type="number" step=".05" min=".2" max="12" value="${d.height??2.2}" aria-label="Opening clear height in metres">`;box.querySelector('.widthfield')?.after(field);const note=document.createElement('p');note.className='small';note.dataset.openingClearance='';note.textContent=size?size.height.toFixed(2)+' m effective clear height. '+size.text:'';field.after(note);if(L.recognized(d))for(const warning of L.warnings(model,floorId).filter(w=>w.doorId===d.id)){const p=document.createElement('p');p.className='check warn';p.textContent=warning.text;note.after(p);}}
 if(L.limited(d))box.querySelector('[data-doorkey="fullWidth"]')?.closest('label')?.remove();
};
const oldUpdate=updateConnection;updateConnection=function(d,key,value){if(key==='fullWidth'&&L.limited(d)){notify('Low passages keep a finite width and clear height');return;}if(key==='height'&&d.kind!=='window'&&(!Number.isFinite(Number(value))||Number(value)<.2||Number(value)>12)){notify('Clear height must be 0.2–12 m');inspector();return;}return oldUpdate(...arguments);};
const oldChecks=checks;checks=function(f=floor()){const out=oldChecks(...arguments),fid=Object.entries(model.floors).find(([,value])=>value===f)?.[0];return [...out,...L.warnings(model,fid)];};
const oldFeedback=connectionFeedback;connectionFeedback=function(){const q=oldFeedback(...arguments);if(L.recognized(q?.candidate?.door))q.hint=q.candidate.summary+' · release or click to add';return q;};
const oldHint=toolHint;toolHint=function(){return L.isPreset(connectionKind)&&['door','connect'].includes(tool)?L.PRESETS[connectionKind].label+' · 0.8 × 1.4 m · choose a wall · edit height after placement':oldHint(...arguments);};
const C=window.KERN_CONNECTION_3D;if(C){const oldPreview=C.preview;C.preview=function(){const q=oldPreview(...arguments);if(L.recognized(q?.door)){const size=L.dimensions(q.door,model.floors[q.fid]);if(size){q.z=size.z;q.clearHeight=size.height;}}return q;};}
const oldOption=connectionTypeOption;connectionTypeOption=function(d,type){const q=oldOption(...arguments);q.checked=L.recognized(d)?d.openingPreset===type:!L.isPreset(type)&&q.checked;return q;};
const oldMenu=openConnectionMenu;openConnectionMenu=function(id,x,y){oldMenu(...arguments);const d=connection(id),menu=$('connectionmenu');if(!d||menu.hidden)return;const divider=menu.querySelector('[role="separator"]');for(const [type,p]of Object.entries(L.PRESETS)){const option=connectionTypeOption(d,type),button=document.createElement('button');button.type='button';button.setAttribute('role','menuitemradio');button.setAttribute('aria-checked',String(option.checked));button.setAttribute('aria-disabled',String(!option.valid));button.tabIndex=-1;button.dataset.menuAction=type;button.innerHTML=`<span class="menu-check" aria-hidden="true">${option.checked?'✓':''}</span><span>${p.label}${option.reason?`<small>${esc(option.reason)}</small>`:''}</span>`;divider.before(button);}showContextMenu(x,y,L.recognized(d)?d.openingPreset:doorType(d));};
const oldApply=applyConnectionMenu;applyConnectionMenu=function(action){if(!L.isPreset(action)||connectionMenu?.kind!=='connection')return oldApply(...arguments);const state=connectionMenu,d=state.floor===floorId&&state.variant===variant?connection(state.id):null;if(!d){closeConnectionMenu();return;}const option=connectionTypeOption(d,action);if(!option.valid){notify(option.reason);return;}closeConnectionMenu(true);if(!option.checked)updateConnection(d,'type',action);};
window.KERN_LOW_OPENING_UI={decorate};
inspector();
})();
