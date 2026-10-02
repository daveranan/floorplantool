(function(){'use strict';let origin=null,cursor=null;
const input=e=>e?.matches?.('input:not([type=button]):not([type=submit]),textarea,[contenteditable=true]');
// Commit the active field before a canvas pointer action can rebuild its inspector.
window.addEventListener('pointerdown',e=>{const active=document.activeElement;if(active!==e.target&&input(active)&&!active.contains(e.target)){active.blur();}},true);
function canvasFocus(){if(window.KERN_WORKSPACE?.isHome()||document.querySelector('dialog[open]')||input(document.activeElement))return;const canvas=window.BuildingExports?.isThreeMode()?$('threeviewport')?.querySelector('canvas'):$('plan');if(canvas){canvas.setAttribute('tabindex','-1');canvas.focus({preventScroll:true});}}
document.addEventListener('click',e=>{if(e.target.closest?.('button,select,summary')&&!e.target.closest?.('#workspace-home,#workspace-tabs,dialog'))queueMicrotask(canvasFocus);});
document.addEventListener('change',e=>{if(e.target.matches?.('select')&&!e.target.closest?.('dialog,#workspace-home'))queueMicrotask(canvasFocus);});
function drawing(){return ['draw','pen','stairs','local-steps','edge-steps','stair-route'].includes(tool);}
function paint(){let g=$('drawing-cell-origin');if(!g){g=document.createElementNS('http://www.w3.org/2000/svg','g');g.id='drawing-cell-origin';g.setAttribute('pointer-events','none');$('plan').append(g);}const p=origin||cursor,step=snapSize()||.25;g.innerHTML=drawing()&&p?`<rect x="${Math.floor(p.x/step)*step}" y="${Math.floor(p.y/step)*step}" width="${step}" height="${step}" fill="#a0a0a0" fill-opacity=".1" stroke="#a0a0a0" stroke-opacity=".25" stroke-width="${screenUnits(1)}"/>`:'';}
$('plan').addEventListener('pointermove',e=>{cursor=point(e);paint();},true);$('plan').addEventListener('pointerdown',e=>{if(e.button===0&&drawing()&&!e.altKey)origin=point(e);},true);window.addEventListener('pointerup',()=>{origin=null;paint();},true);window.addEventListener('pointercancel',()=>{origin=null;paint();},true);$('plan').addEventListener('pointerleave',()=>{cursor=null;paint();});const base=render;render=function(...args){const r=base(...args);paint();return r;};
})();
