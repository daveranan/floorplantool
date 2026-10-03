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
 if(!ctrl&&!meta&&!alt)return !shift||['s','e','d','a','tab','f10'].includes(key)||(!window.BuildingExports?.isThreeMode?.()&&['arrowup','arrowdown','arrowleft','arrowright'].includes(key));
 if(mod&&!alt)return shift?key==='z':['z','y','c','x','v','k','/','s'].includes(key);
 return mod&&alt&&!shift&&key==='s';
}
function paused(e){return typing(e.target)||window.KERN_WORKSPACE?.isHome?.()||window.KERN_EXPLORER?.active||e.target.closest?.('#workspace-tabs,#workspace-project-dialog,dialog,[role=menu],[role=listbox],.toolbar-popover')||document.querySelector('dialog[open]');}
window.addEventListener('keydown',e=>{if(window.KERN_PRIMITIVE_UI?.menuKey?.(e))return;if(window.KERN_WALL_EDGE_UI?.handleKey(e))return;
 if((e.code==='Slash'&&(e.ctrlKey||e.metaKey)||e.code==='KeyS'&&e.altKey&&(e.ctrlKey||e.metaKey))&&!allowed(e)){e.stopImmediatePropagation();return;}
 if(paused(e)||e.isComposing||e.key==='Process'||e.key==='Dead')return;
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
