/* The Place palette is presentation over the existing editable object/service model. */
(function(){
'use strict';
const objects=window.KERN_OBJECTS,editor=window.KERN_OBJECT_UI;
const legacy=document.querySelector('.object-tools');legacy.classList.add('placement-config');legacy.setAttribute('aria-hidden','true');
const categories=[
 {id:'all',name:'All',icon:'core'},
 {id:'medical',name:'Medical',icon:'scanner',items:['scanner','exam']},
 {id:'technical',name:'Technical',icon:'decoder',items:['decoder','panel']},
 {id:'storage',name:'Storage',icon:'rack',items:['rack','tools']},
 {id:'core',name:'Core / comms',icon:'radio',items:['radio','utility','core']},
 {id:'notes',name:'Notes',icon:'text',items:['text']},
 {id:'hvac',name:'HVAC',icon:'duct',items:['duct','crawlway','hatch','vent']}
];
const services=[{kind:'duct',name:'Utility duct',w:2,h:.6,route:true},{kind:'crawlway',name:'Crawlway',w:2,h:.8,route:true},{kind:'hatch',name:'Access hatch',w:.8,h:.8},{kind:'vent',name:'Vent terminal',w:.8,h:.8}];
const inventory=[...objects.catalog,{kind:'text',name:'Text annotation',w:2,h:.45},...services];
let category='all',choice='scanner',paletteDrag=null,hover=null,frame=0,connectionsOpen=false,connectionsScope='',hvacOpen=false;
let serviceState={width:.6,clearHeight:.6,offset:4.1,access:'utility',kind:'duct'};
const root=document.createElement('details');root.id='placemenu';root.className='toolbar-popover place-tool';
root.innerHTML=`<summary id="tool-place" aria-keyshortcuts="B" title="B · Place outlines, annotations and HVAC"><svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 8V4h4m8 0h4v4m0 8v4h-4m-8 0H4v-4M8 8h8v8H8z"/></svg><span>Place <kbd>B</kbd></span></summary><section class="place-popup" aria-label="Place palette"><div class="place-categories place-rail" role="tablist" aria-label="Placement categories"></div><div class="place-section"><strong id="place-category-label">All</strong><span>Drag a preview to the plan, or click then place</span><button id="closeplace" aria-label="Close Place palette">×</button></div><div class="place-preview-row"><button class="place-scroll" id="placeprev" aria-label="Previous previews">‹</button><div class="place-items place-rail" id="placeitems" role="tabpanel" aria-labelledby="place-category-label"></div><button class="place-scroll" id="placenext" aria-label="Next previews">›</button></div><p class="place-caption" id="placecaption">Editable outlines · dimensions in metres</p></section>`;
$('tool-select').parentElement.appendChild(root);wireToolbarMenu('placemenu');
const popup=root.querySelector('.place-popup'),tabs=root.querySelector('.place-categories'),items=$('placeitems');
const isService=kind=>services.some(s=>s.kind===kind),isRoute=kind=>services.some(s=>s.kind===kind&&s.route),item=kind=>inventory.find(i=>i.kind===kind);
function icon(kind){return window.KERN_SYMBOL_ART.icon(kind);}
function positionPopup(){const canvas=$('plan').getBoundingClientRect(),width=Math.max(240,Math.min(680,canvas.width-24,innerWidth-24)),left=Math.max(12,Math.min(canvas.left+(canvas.width-width)/2,innerWidth-width-12));popup.style.left=left+'px';popup.style.width=width+'px';popup.style.top='auto';popup.style.bottom=Math.max(12,innerHeight-canvas.bottom+12)+'px';}
function renderItems(){
 const c=categories.find(c=>c.id===category),list=category==='all'?inventory:inventory.filter(i=>c.items.includes(i.kind));
 tabs.innerHTML=categories.map(c=>`<button type="button" role="tab" aria-selected="${c.id===category}" aria-controls="placeitems" data-place-category="${c.id}" title="${c.name}">${icon(c.icon)}<span>${c.name}</span></button>`).join('');
 $('place-category-label').textContent=c.name;$('placecaption').textContent=category==='hvac'?'Routes: click to draw, or drag a 2 m starter segment · edit height and use in the inspector':'Editable outlines · dimensions in metres';
 items.innerHTML=list.map(i=>`<button type="button" class="place-card" data-place-kind="${i.kind}" aria-pressed="${i.kind===choice}" title="${i.name} · ${i.w} × ${i.h} m${i.route?' · starter segment':''}"><div class="place-illustration">${icon(i.kind)}</div><strong>${esc(i.name)}</strong><small>${i.w} × ${i.h} m${i.route?' · starter':''}</small></button>`).join('');items.scrollLeft=0;
 for(const tab of tabs.querySelectorAll('[data-place-category]'))tab.onclick=()=>{category=tab.dataset.placeCategory;renderItems();};
 for(const card of items.querySelectorAll('[data-place-kind]')){card.onpointerdown=beginPaletteDrag;card.onclick=e=>{if(e.detail===0)choose(card.dataset.placeKind);else e.preventDefault();};}
}
function openPlace(which){cancelPlacement();resetTransient(true);if(which)category=which;root.open=true;setTool('place');renderItems();positionPopup();if(document.documentElement.dataset.inputMode==='keyboard')tabs.querySelector('[aria-selected=true]')?.focus({preventScroll:true});}
function closePlace(focus=false){root.open=false;cancelPlacement();if(focus)$('tool-place').focus({preventScroll:true});}
root.addEventListener('toggle',()=>{if(root.open){if(!['place','symbol','service-draw'].includes(tool)){resetTransient(true);setTool('place');}renderItems();positionPopup();}else if(paletteDrag)cancelPlacement();});
$('closeplace').onclick=()=>closePlace();
$('placeprev').onclick=()=>items.scrollBy({left:-300,behavior:'smooth'});$('placenext').onclick=()=>items.scrollBy({left:300,behavior:'smooth'});
popup.addEventListener('wheel',e=>{const rail=e.target.closest('.place-rail')||items;if(rail.scrollWidth>rail.clientWidth+1){const amount=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;rail.scrollLeft+=amount*(e.deltaMode===1?16:e.deltaMode===2?rail.clientWidth:1);e.preventDefault();e.stopPropagation();}},{passive:false});
tabs.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();const i=categories.findIndex(c=>c.id===category);category=categories[(i+(e.key==='ArrowRight'?1:categories.length-1))%categories.length].id;renderItems();tabs.querySelector('[aria-selected=true]')?.focus();});
function choose(kind){
 choice=kind;cancelPlacement();root.open=false;
 if(isService(kind)){$('servicekind').value=kind;serviceState.kind=kind;serviceState.clearHeight=$('serviceaccess').value==='player'?1.5:kind==='duct'?.6:.4;hvacOpen=true;$('drawservice').click();}
 else{$('symbolkind').value=kind;$('placesymbol').click();}
 syncPlace();
}
function serviceDefaults(){const kind=$('servicekind').value,access=$('serviceaccess').value;if(serviceState.access!==access||serviceState.kind!==kind)return{};return{width:serviceState.width,clearHeight:serviceState.clearHeight,z:cleanNumber(floor().z+serviceState.offset)};}
function canvasPoint(e){const rect=$('plan').getBoundingClientRect(),menu=popup.getBoundingClientRect(),inside=e.clientX>=rect.left&&e.clientX<=rect.right&&e.clientY>=rect.top&&e.clientY<=rect.bottom&&!(root.open&&e.clientX>=menu.left&&e.clientX<=menu.right&&e.clientY>=menu.top&&e.clientY<=menu.bottom);return inside?point(e):null;}
function footprint(kind,p){const t=item(kind);if(kind==='text')return{x:snap(p.x),y:snap(p.y),w:2,h:.45};if(isRoute(kind)){const width=serviceDefaults().width||($('serviceaccess').value==='player'?.8:.6);return{x:snap(p.x-1),y:snap(p.y),w:2,h:width,route:true};}return{x:snap(p.x-t.w/2),y:snap(p.y-t.h/2),w:t.w,h:t.h};}
function validPlacement(kind,p){if(!p||!item(kind))return false;const r=footprint(kind,p),key=isService(kind)?'services':kind==='text'?'annotations':'symbols';return Math.abs(r.x)<=150&&Math.abs(r.y)<=150&&r.x+r.w<=150&&r.y+r.h<=150&&(key==='annotations'?objects.annotations(model,floorId):floor()[key]||[]).length<300;}
function queueDraw(){if(!frame)frame=requestAnimationFrame(()=>{frame=0;draw();});}
function updateDrop(e){const p=canvasPoint(e);paletteDrag.point=p;paletteDrag.valid=validPlacement(paletteDrag.kind,p);paletteDrag.moved||=Math.hypot(e.clientX-paletteDrag.start.x,e.clientY-paletteDrag.start.y)>6;const badge=$('place-drag-badge');if(badge){badge.style.transform=`translate(${e.clientX+14}px,${e.clientY+14}px)`;badge.dataset.valid=String(paletteDrag.valid);}queueDraw();}
function beginPaletteDrag(e){
 if(e.button!==0||paletteDrag)return;e.preventDefault();e.stopPropagation();const card=e.currentTarget;paletteDrag={kind:card.dataset.placeKind,pointerId:e.pointerId,card,start:{x:e.clientX,y:e.clientY},moved:false,buildingId:currentBuilding().id,floorId,point:null,valid:false};hover=null;
 card.setPointerCapture?.(e.pointerId);card.classList.add('dragging');const badge=document.createElement('div');badge.id='place-drag-badge';badge.className='place-drag-badge';badge.setAttribute('aria-hidden','true');badge.innerHTML=icon(paletteDrag.kind)+`<span>${esc(item(paletteDrag.kind).name)}</span>`;document.body.appendChild(badge);updateDrop(e);
}
function cancelPlacement(){const d=paletteDrag;paletteDrag=null;hover=null;$('place-drag-badge')?.remove();if(d){d.card.classList.remove('dragging');if(d.card.hasPointerCapture?.(d.pointerId))d.card.releasePointerCapture(d.pointerId);}queueDraw();}
function drop(e){
 if(!paletteDrag||e.pointerId!==paletteDrag.pointerId)return;const d=paletteDrag;updateDrop(e);const place=d.moved&&d.valid&&d.buildingId===currentBuilding().id&&d.floorId===floorId;const p=d.point;cancelPlacement();
 if(!d.moved){choose(d.kind);return;}if(!place){notify('Drop on the plan to place an item.');return;}
 choose(d.kind);
 if(isService(d.kind)){
  const points=isRoute(d.kind)?[{x:snap(p.x-1),y:snap(p.y)},{x:snap(p.x+1),y:snap(p.y)}]:null;
  const o=editor.newService(p,points,serviceDefaults()),next=clone(floor());next.services??=[];next.services.push(o);try{objects.validateFloor(next);commit(()=>{floor().services??=[];floor().services.push(o);setSelection({services:[o.id]});});setTool('service-select');notify('Service placed · edit its dimensions and height in the inspector');}catch(error){notify(error.message);}
 }else{editor.pointerDown({button:0,target:$('plan'),clientX:e.clientX,clientY:e.clientY,preventDefault(){}});notify('Outline placed · drag another preview, or click to place again');}
}
document.addEventListener('pointermove',e=>{if(paletteDrag&&e.pointerId===paletteDrag.pointerId){updateDrop(e);return;}if(drag||!['symbol','service-draw'].includes(tool)){if(hover){hover=null;queueDraw();}return;}const kind=tool==='symbol'?$('symbolkind').value:$('servicekind').value,p=canvasPoint(e);hover=p?{kind,point:p,valid:validPlacement(kind,p)}:null;queueDraw();},true);
document.addEventListener('pointerup',drop,true);
for(const type of ['pointercancel','lostpointercapture'])document.addEventListener(type,e=>{if(paletteDrag?.pointerId===e.pointerId)cancelPlacement();},true);
window.addEventListener('blur',cancelPlacement);document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelPlacement();});window.addEventListener('resize',()=>{cancelPlacement();if(root.open)positionPopup();});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&!document.querySelector('dialog[open]')&&(paletteDrag||root.open||['place','symbol','service-draw'].includes(tool))){e.preventDefault();e.stopImmediatePropagation();closePlace();resetTransient(true);$('tool-select').focus({preventScroll:true});return;}
 if(isTypingTarget(e.target)||document.querySelector('dialog[open]')||e.ctrlKey||e.metaKey||e.altKey||window.BuildingExports?.isThreeMode?.())return;
 if(e.key.toLowerCase()==='b'){e.preventDefault();e.stopImmediatePropagation();if(!e.repeat)root.open?closePlace(true):openPlace();}
 if(e.key.toLowerCase()==='v'&&root.open){e.preventDefault();e.stopImmediatePropagation();closePlace();setTool('select');}
},true);
const originalMarkup=editor.markup;editor.markup=exporting=>{
 let out=originalMarkup(exporting);if(exporting)return out;const d=paletteDrag?.moved?paletteDrag:hover;if(!d?.point)return out;
 const r=footprint(d.kind,d.point),color=d.valid?'#328aa8':'#b65c45';return out+`<g class="place-ghost" pointer-events="none"><rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${color}" fill-opacity=".2" stroke="${color}" stroke-width=".08" stroke-dasharray=".2 .1"/><text x="${r.x+r.w/2}" y="${r.y-.2}" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="${Math.max(.3,screenUnits(11))}" letter-spacing="normal" word-spacing="normal" fill="${color}">${esc(item(d.kind).name)} · ${r.w} × ${r.h} m</text></g>`;
};
const originalPointerDown=editor.pointerDown;editor.pointerDown=e=>{if(tool==='place'){e.preventDefault();openPlace();return true;}hover=null;return originalPointerDown(e);};
function collapseConnections(){
 const section=$('inspector').querySelector('section.connections');if(!section)return;const scope=currentBuilding().id+':'+floorId+':'+(selected||'floor');if(scope!==connectionsScope){connectionsScope=scope;connectionsOpen=false;}
 const disclosure=document.createElement('details');disclosure.className='connections connection-disclosure';disclosure.id='connectionsdisclosure';disclosure.open=connectionsOpen;
 const summary=document.createElement('summary');summary.innerHTML=section.querySelector('h2').innerHTML;section.querySelector('h2').remove();disclosure.appendChild(summary);const body=document.createElement('div');body.className='connection-disclosure-body';while(section.firstChild)body.appendChild(section.firstChild);disclosure.appendChild(body);section.replaceWith(disclosure);disclosure.ontoggle=()=>connectionsOpen=disclosure.open;
}
function appendHVAC(){
 if($('hvacoptions'))return;const section=document.createElement('details');section.className='hvac-options';section.id='hvacoptions';section.open=hvacOpen||tool.startsWith('service');
 section.innerHTML=`<summary>HVAC / services <span id="hvacstatus"></span></summary><div class="hvac-content"><label class="hvac-check"><input id="hvacvisible" type="checkbox"><span>Show this floor's overlay</span></label><label class="hvac-check"><input id="hvacedit" type="checkbox"><span>Edit service routes</span></label><button id="hvacpicker">Choose an HVAC item…</button><details class="hvac-defaults"><summary>New service settings</summary><label class="field"><span>Location</span><select id="hvaclocation"><option value="overhead">Overhead</option><option value="underfloor">Underfloor</option></select></label><label class="field"><span>Use</span><select id="hvacaccess"><option value="utility">Utilities only</option><option value="player">Player · crouched</option><option value="creature">Creature only</option></select></label><div class="gridfields"><label class="field"><span>Route width · m</span><input id="hvacwidth" type="number" min=".1" max="20" step="any"></label><label class="field"><span>Clear height · m</span><input id="hvacheight" type="number" min=".1" max="20" step="any"></label></div><label class="field"><span>Bottom elevation · m</span><input id="hvacbottom" type="number" min="-150" max="150" step="any"></label><p class="small">Elevation is relative to ground. New routes are provisional; edit placed items by selecting them.</p></details></div>`;
 $('inspector').prepend(section);section.ontoggle=()=>hvacOpen=section.open;
 $('hvacvisible').onchange=e=>editor.setVisible(e.target.checked);$('hvacedit').onchange=e=>{hvacOpen=true;resetTransient(true);if(e.target.checked){editor.setVisible(true);setTool('service-select');}else setTool('select');};$('hvacpicker').onclick=()=>{hvacOpen=true;openPlace('hvac');};
 $('hvaclocation').onchange=e=>{$('servicelocation').value=e.target.value;serviceState.offset=e.target.value==='underfloor'?-1.8:4.1;syncPlace();draw();};
 $('hvacaccess').onchange=e=>{$('serviceaccess').value=e.target.value;serviceState.access=e.target.value;serviceState.width=e.target.value==='player'?.8:.6;serviceState.clearHeight=e.target.value==='player'?1.5:serviceState.kind==='duct'?.6:.4;syncPlace();draw();};
 for(const [id,key]of [['hvacwidth','width'],['hvacheight','clearHeight'],['hvacbottom','offset']])$(id).onchange=e=>{const n=Number(e.target.value),value=id==='hvacbottom'?n-floor().z:n;if(!Number.isFinite(n)||(id==='hvacbottom'?Math.abs(n)>150:n<.1||n>20)){notify('Enter a valid metric service dimension.');syncPlace();return;}serviceState[key]=cleanNumber(value);draw();};
}
function syncPlace(){
 const three=window.BuildingExports?.isThreeMode?.();root.hidden=!!three;$('tool-place').setAttribute('aria-pressed',String(['place','symbol','service-draw'].includes(tool)));root.dataset.active=String(['place','symbol','service-draw'].includes(tool));
 if(paletteDrag&&(paletteDrag.buildingId!==currentBuilding().id||paletteDrag.floorId!==floorId||three))cancelPlacement();
 if(hover&&!['symbol','service-draw'].includes(tool))hover=null;
 if($('hvacvisible')){$('hvacvisible').checked=currentBuilding().view.serviceVisibility?.[floorId]===true;$('hvacedit').checked=tool.startsWith('service');$('hvacstatus').textContent=$('hvacvisible').checked?'Visible':'Hidden';$('hvaclocation').value=$('servicelocation').value;$('hvacaccess').value=$('serviceaccess').value;$('hvacwidth').value=serviceState.width;$('hvacheight').value=serviceState.clearHeight;$('hvacbottom').value=cleanNumber(floor().z+serviceState.offset);}
}
const originalSync=editor.sync;editor.sync=()=>{originalSync();if(window.BuildingExports?.isThreeMode?.()){syncPlace();return;}collapseConnections();appendHVAC();syncPlace();};
const originalHint=editor.toolHint;editor.toolHint=()=>tool==='place'?'Place · drag a preview onto the plan, or click a preview then place · B opens the picker':originalHint();
window.KERN_PLACE={open:openPlace,close:closePlace,choose,cancel:cancelPlacement,serviceDefaults,getState:()=>({category,choice,dragging:!!paletteDrag})};renderItems();render();
})();
