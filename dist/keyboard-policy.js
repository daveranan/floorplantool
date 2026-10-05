/* Held translation axes use the viewport convention: X/right, Y/up, Z/depth.
 * Each gesture owns its last unconstrained and displayed coordinates. Rebase at
 * key boundaries so engaging or releasing a lock never catches up to the mouse. */
(function(){
'use strict';
const providers=new Map(),states=new WeakMap(),swallowed=new Set(),listeners=new Set(),axes={x:'x',c:'y',z:'z'};
const copy=p=>({x:p.x||0,y:p.y||0,z:p.z||0});
function state(owner,initial={}){let s=states.get(owner);if(!s){const p=copy(initial);s={initial:copy(p),raw:copy(p),out:copy(p),anchorRaw:copy(p),anchorOut:copy(p),held:new Set(),fallback:null};states.set(owner,s);}return s;}
function active(){for(const [get,provider] of providers){const owner=get();if(owner)return{owner,...provider};}return null;}
function snapshot(){const current=active();if(!current?.describe)return null;const d=current.describe(current.owner);if(!d?.origin||!['2d','3d'].includes(d.space))return null;const s=state(current.owner),delta=d.delta||{x:s.out.x-s.initial.x,y:s.out.y-s.initial.y,z:s.out.z-s.initial.z};if(!['x','y','z'].every(a=>Number.isFinite(d.origin[a]??0)&&Number.isFinite(delta[a]??0)))return null;return{owner:current.owner,space:d.space,origin:copy(d.origin),delta:copy(delta),axes:['x','y','z'].filter(a=>s.held.has(a)),supported:(d.supported||['x','y','z']).filter(a=>['x','y','z'].includes(a)),label:d.label||'Move'};}
let refreshing=false,queued=false;
function refresh(){if(refreshing)return;refreshing=true;try{const value=snapshot();for(const listener of listeners)listener(value);}finally{refreshing=false;}}
function later(){if(queued)return;queued=true;queueMicrotask(()=>{queued=false;refresh();});}
function rebase(s){s.anchorRaw=copy(s.raw);s.anchorOut=copy(s.out);}
function apply(owner,raw,initial){if(!owner)return copy(raw);const s=state(owner,initial),next=copy(raw),out={},allowed=s.held.size?s.held:s.fallback;for(const a of ['x','y','z'])out[a]=s.anchorOut[a]+(!allowed?.size||allowed.has(a)?next[a]-s.anchorRaw[a]:0);s.raw=next;s.out=out;refresh();return copy(out);}
function plan(owner,p,initial){const q=apply(owner,{x:p.x,z:p.y},initial&&{x:initial.x,z:initial.y});return{x:q.x,y:q.z};}
function fallback(owner,axis){const s=state(owner),next=axis?new Set([axis]):null;if((s.fallback?.values().next().value||null)!==(axis||null)){rebase(s);s.fallback=next;}}
function accept(owner,p){const s=owner&&states.get(owner);if(s){s.out=copy(p);refresh();}}
function acceptPlan(owner,p){accept(owner,{x:p.x,z:p.y});}
function validPlan(owner,p,anchor){const s=owner&&states.get(owner),origin=anchor?{x:anchor.x,z:anchor.y}:s?.anchorOut;return !s||!s.held.size||[['x',p.x],['z',p.y]].every(([a,v])=>s.held.has(a)||Math.abs(v-origin[a])<1e-6);}
function key(e,up=false){const current=active();if(!up&&e.key==='Escape'&&current?.cancel){e.preventDefault();e.stopImmediatePropagation();clear(true);current.cancel();refresh();return true;}const letter=({KeyX:'x',KeyZ:'z',KeyC:'c'})[e.code]||String(e.key||'').toLowerCase(),axis=axes[letter];if(!axis)return false;const owner=current?.owner,s=owner&&state(owner);if(up){if(!swallowed.has(letter)&&!s?.held.has(axis))return false;swallowed.delete(letter);if(s?.held.has(axis)){rebase(s);s.held.delete(axis);}}else{if(!owner){if(!swallowed.has(letter))return false;e.preventDefault();e.stopImmediatePropagation();return true;}if(e.isComposing||e.key==='Process'||e.key==='Dead')return false;if(!s.held.has(axis)){rebase(s);s.held.add(axis);}swallowed.add(letter);}e.preventDefault();e.stopImmediatePropagation();refresh();return true;}
function clear(preserveKeys=false){if(!preserveKeys)swallowed.clear();for(const get of providers.keys()){const owner=get();if(owner){const s=states.get(owner);if(s){rebase(s);s.held.clear();}}}refresh();}
window.KERN_DRAG_AXES={register(get,cancel,describe){providers.set(get,{cancel,describe});return()=>{providers.delete(get);refresh();};},begin(owner,initial){const s=state(owner,initial);refresh();return s;},snapshot,subscribe(listener){listeners.add(listener);listener(snapshot());return()=>listeners.delete(listener);},refresh,apply,plan,fallback,accept,acceptPlan,validPlan,key,clear,locked:owner=>!!states.get(owner)?.held.size};
window.addEventListener('keyup',e=>key(e,true),true);
window.addEventListener('blur',()=>{clear();later();},true);
for(const type of ['pointerdown','pointermove','pointerup','pointercancel','lostpointercapture','click','change'])window.addEventListener(type,later,true);
document.addEventListener('visibilitychange',()=>{if(document.hidden)clear();},true);
})();
/* One early modifier policy for every editor listener. Load before app.js. */
(function(){
'use strict';
let tabNavigation=false;
const typing=node=>!!node&&(node.isContentEditable||node.closest?.('input,textarea,select,[contenteditable]:not([contenteditable="false"])'));
const reserved=new Set(['v','e','d','w','c','x','r','p','s','b','f','z','y','k','/',' ','tab','escape','enter','delete','backspace','arrowup','arrowdown','arrowleft','arrowright','f10','contextmenu',...'0123456789']);
function chord(e){return [e.ctrlKey?'Ctrl':'',e.metaKey?'Meta':'',e.altKey?'Alt':'',e.shiftKey?'Shift':'',String(e.key||'').toLowerCase()].filter(Boolean).join('+');}
function allowed(e){
 const key=e.code==='Slash'&&(e.ctrlKey||e.metaKey)?'/':e.code==='KeyS'&&e.altKey&&(e.ctrlKey||e.metaKey)?'s':String(e.key||'').toLowerCase(),ctrl=!!e.ctrlKey,meta=!!e.metaKey,alt=!!e.altKey,shift=!!e.shiftKey,mod=ctrl!==meta;
 if(ctrl&&meta)return false;
 if(!ctrl&&!meta&&!alt)return !shift||['s','e','d','a','c','w','tab','f10'].includes(key)||(!window.BuildingExports?.isThreeMode?.()&&['arrowup','arrowdown','arrowleft','arrowright'].includes(key));
 if(mod&&!alt)return shift?key==='z':['z','y','c','x','v','k','/','s'].includes(key);
 return !ctrl&&!meta&&alt&&!shift&&key==='c'||mod&&alt&&!shift&&key==='s';
}
function paused(e){return typing(e.target)||window.KERN_WORKSPACE?.isHome?.()||window.KERN_EXPLORER?.active||e.target.closest?.('#workspace-tabs,#workspace-project-dialog,dialog,[role=menu],[role=listbox],.toolbar-popover')||document.querySelector('dialog[open]');}
for(const name of ['pointerdown','pointermove','pointerup'])window.addEventListener(name,e=>window.KERN_THIN_WALL_UI?.handlePointer(e),true);
window.addEventListener('keydown',e=>{
 if(window.KERN_DRAG_AXES.key(e))return;
 if(e.key==='Escape')window.KERN_DRAG_AXES.clear(true);
 // Relocated chrome owns its native activation and mnemonic keys. Do not let
 // later canvas capture handlers turn Space into pan or E into Rotate.
 // Route menu navigation before canvas captures; retain native Tab behavior.
 const nativeChrome=!typing(e.target)&&e.target.closest?.('#inspector-toolbar,.toolbar-popover,#workspace-editor-title')&&e.target.closest?.('button,summary,a');
 if(nativeChrome&&!e.ctrlKey&&!e.metaKey&&!e.altKey){
  document.documentElement.dataset.inputMode='keyboard';
  const menu=e.target.closest('.toolbar-popover');
  if(menu&&['Escape','ArrowDown','ArrowUp','Home','End'].includes(e.key)){menu.onkeydown?.(e);if(e.defaultPrevented){e.stopImmediatePropagation();return;}}
  if([' ', 'Enter','Delete','Backspace','ArrowDown','ArrowUp','ArrowLeft','ArrowRight','Home','End'].includes(e.key)||/^[a-z0-9]$/i.test(e.key)){e.stopImmediatePropagation();return;}
 }
 if(window.KERN_PRIMITIVE_UI?.menuKey?.(e))return;if(window.KERN_WALL_EDGE_UI?.handleKey(e))return;
 if((e.code==='Slash'&&(e.ctrlKey||e.metaKey)||e.code==='KeyS'&&e.altKey&&(e.ctrlKey||e.metaKey))&&!allowed(e)){e.stopImmediatePropagation();return;}
 if(paused(e)||e.isComposing||e.key==='Process'||e.key==='Dead')return;
 if(window.KERN_MAX_PASSAGE_UI?.handleKey(e)||window.KERN_BRIDGE_UI?.handleKey(e)||window.KERN_THIN_WALL_UI?.handleKey(e))return;
 const key=String(e.key||'').toLowerCase();
 if(key==='tab'&&e.shiftKey&&!e.ctrlKey&&!e.metaKey&&!e.altKey){tabNavigation=true;e.stopImmediatePropagation();return;}
 // Reject a loose letter match before an older independent tool handler sees it.
 // Browser/OS defaults remain available for unassigned modified combinations.
 if((reserved.has(key)||['Slash','KeyS'].includes(e.code)&&!!(e.ctrlKey||e.metaKey)||/^Digit\d$/.test(e.code||''))&&!allowed(e)){e.stopImmediatePropagation();return;}
 if(window.KERN_PRIMITIVE_UI?.handleKey?.(e))return;
 if(window.KERN_LAYERS?.handleKey?.(e))return;
 if(chord(e)==='Shift+d'){
  e.preventDefault();e.stopImmediatePropagation();if(e.repeat)return;
  window.KERN_LAYERS?.clearSelection?.();
  if(!window.KERN_LAYERS){window.resetTransient?.(true);window.setSelection?.();window.render?.();window.BuildingExports?.getViewer?.()?.selectRoom?.(null,null);}
  return;
 }
 if(!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.shiftKey&&['1','3'].includes(key)){
  e.preventDefault();e.stopImmediatePropagation();if(e.repeat)return;
  window.KERN_LAYERS?.adjacentFloor?.(key==='3'?1:-1);
 }

},true);
// A canvas outline describes real keyboard focus, never the last key pressed.
window.addEventListener('keydown',e=>{tabNavigation=e.key==='Tab'&&!e.ctrlKey&&!e.metaKey&&!e.altKey;},true);
window.addEventListener('keyup',e=>{if(e.key==='Tab')tabNavigation=false;},true);
document.addEventListener('pointerdown',()=>{tabNavigation=false;document.documentElement.removeAttribute('data-canvas-keyboard-focus');},true);
document.addEventListener('focusin',e=>{const canvas=e.target?.matches?.('#plan,#threeviewport canvas');document.documentElement.toggleAttribute('data-canvas-keyboard-focus',!!canvas&&tabNavigation);},true);
window.KERN_KEYS={chord,allowed,typing};
})();
