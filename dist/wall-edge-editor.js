/* Room-owned boundary wall controls. Reads never materialize wall settings. */
(function(){
'use strict';
const S=window.KERN_SHAPES,W=window.KERN_WALL_EDGES,shape=window.KERN_SHAPE_UI;
if(!S||!W||!shape)return;
const MODES=['full','half','none'],LABELS={full:'Full',half:'Half',none:'None'};
let selectedEdge=null,hoverEdge=null,lastScope='',menuState=null;
const menu=document.createElement('div');menu.id='wall-edge-menu';menu.className='connectionmenu wall-edge-menu';menu.hidden=true;menu.setAttribute('role','menu');menu.setAttribute('aria-label','Boundary wall');document.body.append(menu);
const scope=()=>currentBuilding().id+':'+floorId+':'+(selected||'');
const mode3D=()=>!!window.BuildingExports?.isThreeMode?.();
function eligible(r){return !!r&&W.supported(r)&&canEdit(r)&&!r.locked&&!sourceFor(r)&&!isSourceRoom(r)&&!isStair(r)&&!r.stairTransition&&!r.localSteps&&!r.routeStair&&!['solid','void'].includes(r.type);}
function selectedRoom(){return !preview&&tool==='select'&&!isMultiSelection()&&eligible(room(selected))?room(selected):null;}
function pointRoom(){return !mode3D()&&!spaceHeld&&!drag&&!shape.isEditing()&&shape.inPointMode()?selectedRoom():null;}
function edgeGroups(r){const keys=new Map();for(const edge of S.edges(r)){const key=W.edgeKey(edge.id);if(!keys.has(key))keys.set(key,{key,index:keys.size+1,length:0,edges:[]});const group=keys.get(key);group.length+=edge.length;group.edges.push(edge);}return [...keys.values()];}
function groupFor(r,key){return edgeGroups(r).find(e=>e.key===key);}
function lowHeight(r){return Number.isFinite(r.walls?.lowHeight)?r.walls.lowHeight:1.1;}
function defaultMode(r){return r.walls?.mode||W.defaults(r).mode;}
function config(r){return {mode:defaultMode(r),lowHeight:lowHeight(r),edges:{...(r.walls?.edges||{})}};}
function warnings(r){return (W.openingWarnings?.(model,floorId)||[]).filter(w=>w.roomId===r.id||w.room===r.id||w.rooms?.includes(r.id)||allConnections().some(d=>d.id===w.doorId&&(d.a===r.id||d.b===r.id)));}
function warningMarkup(r){const items=warnings(r);return items.length?'<div class="wall-edge-warnings" role="status">'+items.map(w=>'<p class="small check warn">'+esc(w.text||w.message||'Review the opening on this boundary.')+'</p>').join('')+'</div>':'';}
function closeMenu(focus=false){if(!menuState)return;menuState=null;menu.hidden=true;menu.innerHTML='';if(focus)$('plan').focus({preventScroll:true});}
function validMenu(){return !!menuState&&menuState.scope===scope()&&menuState.tool===tool&&!!pointRoom()&&!!groupFor(room(selected),menuState.edge);}
function syncState(){const next=scope();if(next!==lastScope){closeMenu();selectedEdge=null;hoverEdge=null;lastScope=next;}const r=selectedRoom();if(!r){closeMenu();selectedEdge=null;hoverEdge=null;return null;}if(selectedEdge&&!groupFor(r,selectedEdge))selectedEdge=null;if(hoverEdge&&!groupFor(r,hoverEdge))hoverEdge=null;if(menuState&&!validMenu())closeMenu();if(!pointRoom())hoverEdge=null;return r;}
function actionRoom(expected){const r=selectedRoom();if(!r||expected!==scope()||shape.isEditing()||drag){closeMenu();notify('Select an unlocked, editable room boundary first.');return null;}return r;}
function change(kind,value,expected=scope(),edge=selectedEdge){const r=actionRoom(expected);if(!r)return false;const next=config(r);let nextType=r.type;
 if(kind==='edge'){if(!MODES.includes(value)||!groupFor(r,edge))return false;if(W.mode(r,edge)===value)return false;next.edges[edge]=value;}
 else if(kind==='all'){if(!MODES.includes(value))return false;if(next.mode===value&&!Object.keys(next.edges).length)return false;next.mode=value;next.edges={};}
 else if(kind==='height'){if(typeof value==='string'&&!value.trim())return false;value=Number(value);if(!Number.isFinite(value)||value<.1||value>3){notify('Low wall height must be between 0.1 and 3 m.');return false;}if(next.lowHeight===value)return false;next.lowHeight=value;}
 else if(kind==='preset'){if(!roomTypeOption(r,'terrace').valid)return false;nextType='terrace';next.mode='half';next.lowHeight=1.1;next.edges={};}
 else return false;
 const candidate={...r,type:nextType,walls:next};try{if(W.validate(candidate)===false)return false;}catch(error){notify(error.message||'These wall settings are invalid.');return false;}
 if(r.type===nextType&&JSON.stringify(r.walls)===JSON.stringify(next))return false;
 closeMenu();commit(()=>{r.type=nextType;r.walls=next;});return true;
}
function buttons(r,key,menuButtons=false){const active=W.mode(r,key);return MODES.map(value=>`<button type="button" ${menuButtons?'role="menuitemradio" tabindex="-1" aria-checked':'aria-pressed'}="${active===value}" data-wall-mode="${value}" title="${value==='full'?'Full room wall height':value==='half'?'Low wall · '+lowHeight(r).toFixed(2)+' m':'No wall owned by this room'}"><span>${LABELS[value]}</span>${menuButtons?'<small>'+({full:'Room clear height',half:lowHeight(r).toFixed(2)+' m high',none:'Open boundary'})[value]+'</small>':''}</button>`).join('');}
function panel(){const r=syncState();$('wall-edge-controls')?.remove();if(!r)return;const expected=scope(),groups=edgeGroups(r),group=selectedEdge&&groupFor(r,selectedEdge),node=document.createElement('section');node.id='wall-edge-controls';node.className='wall-edge-controls';node.innerHTML=`<div class="wall-edge-heading"><h3>Boundary walls</h3><span>${r.walls?'Custom':'Default'}</span></div><label class="field"><span>Set all edges</span><select id="wall-all-mode"><option value="" selected disabled>${r.walls&&Object.keys(r.walls.edges||{}).length?'Per-edge settings':LABELS[defaultMode(r)]+' walls'}</option>${MODES.map(value=>`<option value="${value}">${LABELS[value]}${value==='half'?' · low walls':''}</option>`).join('')}</select></label><label class="field"><span>Low wall height · m</span><input id="wall-low-height" type="number" min="0.1" max="3" step="0.1" inputmode="decimal" value="${lowHeight(r)}" aria-describedby="wall-low-height-help"></label><p id="wall-low-height-help" class="small">Half means a low wall at this height, measured from the room floor.</p><button type="button" id="wall-terrace-preset">Terrace with low walls</button><label class="field"><span>Selected edge</span><select id="wall-edge-select"><option value="">Choose an edge…</option>${groups.map(g=>`<option value="${esc(g.key)}" ${g.key===selectedEdge?'selected':''}>Edge ${g.index} · ${g.length.toFixed(2)} m · ${LABELS[W.mode(r,g.key)]}</option>`).join('')}</select></label><div class="wall-edge-options" role="group" aria-label="Selected edge wall" ${group?'':'hidden'}>${group?buttons(r,selectedEdge):''}</div><p class="small wall-edge-hint">Double-click a room to edit points. Hover an edge, then right-click for Full / Half / None. The edge list also works by touch and keyboard.</p><p class="small">Each room owns its boundary. A neighbor’s full wall remains when only this room says None. Rounded and chamfered corners follow their outgoing edge.</p>${warningMarkup(r)}`;
 const anchor=$('shapecontrols');if(anchor)anchor.after(node);else $('inspector').append(node);
 $('wall-all-mode').onchange=e=>change('all',e.target.value,expected);
 $('wall-low-height').onchange=e=>{if(!change('height',e.target.value,expected))e.target.value=lowHeight(room(selected)||r);};
 $('wall-terrace-preset').onclick=()=>change('preset',null,expected);
 $('wall-edge-select').onchange=e=>{if(!actionRoom(expected))return;selectedEdge=e.target.value||null;if(selectedEdge&&!shape.inPointMode()&&!mode3D())shape.editRoom(r);else {panel();draw();} $('wall-edge-select')?.focus({preventScroll:true});};
 node.querySelectorAll('[data-wall-mode]').forEach(b=>b.onclick=()=>change('edge',b.dataset.wallMode,expected,selectedEdge));
}
function at(e,r){const p=point(e),nearest=S.edges(r).map(edge=>({edge,d:S.project(p,edge).distance})).sort((a,b)=>a.d-b.d)[0];return nearest&&nearest.d<=worldPixels(12)?W.edgeKey(nearest.edge.id):null;}
function openMenu(key,x,y){const r=pointRoom();if(!r||!groupFor(r,key))return false;closeConnectionMenu();closeToolbarMenus();selectedEdge=key;hoverEdge=key;panel();draw();menuState={scope:scope(),tool,edge:key};const group=groupFor(r,key);menu.innerHTML=`<div class="connectionmenu-heading">Edge ${group.index} · boundary wall</div>${buttons(r,key,true)}<p class="contextmenu-note">Half uses ${lowHeight(r).toFixed(2)} m. Change its height in Boundary walls.</p>`;menu.hidden=false;const vw=window.innerWidth||900,vh=window.innerHeight||600;menu.style.maxWidth=Math.max(1,vw-16)+'px';menu.style.maxHeight=Math.max(1,vh-16)+'px';const rect=menu.getBoundingClientRect();menu.style.left=Math.max(8,Math.min(x,vw-rect.width-8))+'px';menu.style.top=Math.max(8,Math.min(y,vh-rect.height-8))+'px';menu.querySelector('[aria-checked="true"]')?.focus({preventScroll:true});return true;}
function handleKey(e){if(!menuState){if((e.key==='ContextMenu'||e.key==='F10'&&e.shiftKey)&&pointRoom()&&selectedEdge&&e.target.closest?.('#plan,#wall-edge-controls')){const box=$('plan').getBoundingClientRect();if(openMenu(selectedEdge,box.left+box.width/2,box.top+box.height/2)){e.preventDefault();e.stopImmediatePropagation();return true;}}return false;}
 if(!validMenu()){closeMenu();return false;}
 e.stopImmediatePropagation();if(e.key==='Escape'){e.preventDefault();closeMenu(true);return true;}if(e.key==='Tab'){closeMenu();return true;}
 const items=[...menu.querySelectorAll('[data-wall-mode]')],i=items.indexOf(document.activeElement);if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();const index=e.key==='Home'?0:e.key==='End'?items.length-1:(Math.max(0,i)+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;items[index].focus();}else if(['Enter',' '].includes(e.key)){e.preventDefault();if(!e.repeat&&i>=0)items[i].click();}return true;
}
menu.onclick=e=>{const button=e.target.closest('[data-wall-mode]');if(!button||!validMenu()){closeMenu();return;}const state=menuState;const did=change('edge',button.dataset.wallMode,state.scope,state.edge);if(!did)closeMenu();$('plan').focus({preventScroll:true});};menu.oncontextmenu=e=>e.preventDefault();
window.addEventListener('contextmenu',e=>{if(e.altKey||!e.target.closest?.('#plan'))return;const r=pointRoom(),key=r&&at(e,r);if(!key)return;e.preventDefault();e.stopImmediatePropagation();openMenu(key,e.clientX,e.clientY);},true);
$('plan').addEventListener('pointermove',e=>{if(menuState)return;const r=pointRoom(),key=r&&!e.buttons?at(e,r):null;if(key!==hoverEdge){hoverEdge=key;draw();}},true);
$('plan').addEventListener('pointerleave',()=>{if(!menuState&&hoverEdge){hoverEdge=null;draw();}});
document.addEventListener('pointerdown',e=>{if(menuState&&!e.target.closest?.('#wall-edge-menu'))closeMenu();},true);
document.addEventListener('focusin',e=>{if(menuState&&!e.target.closest?.('#wall-edge-menu'))closeMenu();});
window.addEventListener('blur',()=>{closeMenu();hoverEdge=null;});
// keyboard-policy.js delegates first so Escape only dismisses this menu.
window.addEventListener('keydown',handleKey,true);
// One warning pass per plan draw, with saved opening geometry left untouched.
let drawingWarnings=new Map();
const oldPlan=planMarkup;planMarkup=function(...args){const prior=drawingWarnings;drawingWarnings=new Map((W.openingWarnings?.(model,floorId)||[]).map(w=>[w.doorId,w]));try{return oldPlan(...args);}finally{drawingWarnings=prior;}};
const oldConnection=connectionMarkup;connectionMarkup=function(d,exporting=false,ghost=false){const base=oldConnection(d,exporting,ghost),warning=drawingWarnings.get(d.id);if(!warning||!base||ghost)return base;const g=doorGeometry(d),center=g&&connectionCenter(g);if(!center)return base;const size=exporting?.25:screenUnits(7),y=center.y-size*2;return `<g class="wall-opening-warning" data-wall-opening-warning="${esc(d.id)}"><title>${esc(warning.text)}</title>${base}<g pointer-events="none" aria-hidden="true"><circle cx="${center.x}" cy="${y}" r="${size}" fill="#ae571f" stroke="#fff4d5" stroke-width="${size*.17}"/><text x="${center.x}" y="${y+size*.52}" text-anchor="middle" fill="#fff" style="font-size:${size*1.6}px;font-weight:700">!</text></g></g>`;};
const oldOverlay=shape.overlay;shape.overlay=function(...args){const base=oldOverlay(...args),r=syncState();if(!r||mode3D()||!shape.inPointMode()||shape.isEditing()||spaceHeld||drag)return base;const key=hoverEdge||selectedEdge,group=key&&groupFor(r,key);if(!group)return base;const mode=W.mode(r,key),edge=group.edges.find(e=>!e.curved)||group.edges[0],mid=[(edge.a[0]+edge.b[0])/2,(edge.a[1]+edge.b[1])/2];return base+`<g data-wall-edge-highlight="${esc(key)}" pointer-events="none" aria-hidden="true">${group.edges.map(e=>`<path d="M${e.a.join(' ')}L${e.b.join(' ')}" fill="none" stroke="${mode==='none'?'#d69376':mode==='half'?'#e7b76e':'#70c9e4'}" stroke-width="${screenUnits(4)}" ${mode==='none'?'stroke-dasharray="'+screenUnits(5)+' '+screenUnits(4)+'"':''}/>`).join('')}<text x="${mid[0]}" y="${mid[1]-screenUnits(12)}" text-anchor="middle" fill="#172b37" stroke="#f7f7f2" stroke-width="${screenUnits(3)}" paint-order="stroke" style="font-size:${screenUnits(12)}px;font-weight:600">${LABELS[mode]}${mode==='half'?' · '+lowHeight(r).toFixed(2)+' m':''} · right-click</text></g>`;};
const oldSync=shape.sync;shape.sync=function(...args){const out=oldSync(...args);panel();return out;};
const oldInspector=inspector;inspector=function(...args){const focus=window.KERN_FOCUS?.capture(),out=oldInspector(...args);panel();if(focus&&!focus.node?.isConnected)window.KERN_FOCUS?.restore(focus,{fallback:false});return out;};
const oldTool=setTool;setTool=function(...args){closeMenu();hoverEdge=null;return oldTool(...args);};
const oldReset=resetTransient;resetTransient=function(...args){closeMenu();selectedEdge=null;hoverEdge=null;return oldReset(...args);};
window.KERN_WALL_EDGE_UI={sync:panel,menuOpen:()=>!!menuState,handleKey,close:closeMenu,eligible,change,selectedEdge:()=>selectedEdge};
panel();
})();
