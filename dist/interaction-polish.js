(function(){'use strict';let origin=null,cursor=null;
const editable=e=>e?.matches?.('input,textarea,select,[contenteditable=true]')||e?.isContentEditable;
const controls='input,textarea,select,button,a,summary,[contenteditable=true],[role=button],[role=combobox],[role=menuitem],[role=menuitemradio]';
const visible=e=>!!e?.isConnected&&!e.closest?.('[hidden],dialog:not([open])')&&(!e.closest?.('details:not([open])')||e.closest('details:not([open])').querySelector('summary')?.contains(e));
function popupOpen(){return [...document.querySelectorAll('dialog[open],.toolbar-popover[open],.connectionmenu:not([hidden]),[role=menu]:not([hidden]),[role=listbox]:not([hidden])')].some(visible);}
function canvasFocus(options={}){
 if(window.KERN_WORKSPACE?.isHome()||popupOpen())return false;
 const active=document.activeElement;
 // No global click/change refocusing. Native selectors, fields and buttons own
 // focus until an explicit completed operation or a canvas pointer action.
 if(!options.pointer&&visible(active)&&active.closest?.(controls))return false;
 const canvas=window.BuildingExports?.isThreeMode?.()?$('threeviewport')?.querySelector('canvas'):$('plan');
 if(!canvas)return false;if(!canvas.hasAttribute('tabindex'))canvas.setAttribute('tabindex','0');canvas.focus({preventScroll:true});return true;
}
function capture(){
 const node=document.activeElement;if(!node)return null;
 const root=node.closest?.('#inspector,#threeoptions')||document;
 const matchAttrs=[...(node.attributes||[])].filter(a=>a.name.startsWith('data-')).map(a=>[a.name,a.value]);
 return{node,id:node.id,root,attrs:matchAttrs,scope:selectionScope(),selection:JSON.stringify(getSelection()),value:editable(node)?node.value:undefined,start:node.selectionStart,end:node.selectionEnd};
}
function restore(state,{draft=false,fallback=true}={}){
 if(!state){if(fallback)canvasFocus();return null;}
 let target=visible(state.node)?state.node:null;
 if(!target&&state.scope===selectionScope()&&state.selection===JSON.stringify(getSelection())){
  target=state.id?$(state.id):state.attrs.length?[...state.root.querySelectorAll(controls)].find(n=>state.attrs.every(([key,value])=>n.getAttribute(key)===value)):null;
 }
 if(!visible(target)){const menu=(target||state.node)?.closest?.('.toolbar-popover'),summary=menu?.querySelector('summary');if(visible(summary))target=summary;else{if(fallback)canvasFocus();return null;}}
 if(draft&&state.value!==undefined)target.value=state.value;
 target.focus?.({preventScroll:true});if(state.start!==null&&state.start!==undefined)try{target.setSelectionRange(state.start,state.end);}catch{}
 return target;
}
// Commit a text draft only when the pointer actually enters a canvas, never
// while opening a dropdown or pressing an inspector/menu control.
window.addEventListener('pointerdown',e=>{
 if(!e.target.closest?.('#plan,#threeviewport')||e.target.closest?.(controls)||popupOpen())return;
 const active=document.activeElement;if(active!==e.target&&editable(active))active.blur();canvasFocus({pointer:true});
},true);
window.KERN_FOCUS={canvas:canvasFocus,capture,restore:(state,options)=>restore(state,{draft:true,...options}),popupOpen};
// Rebuilt inspectors retain the same logical control, including keyboard select
// operation. A changed selection never inherits another object's field focus.
const baseInspector=inspector;inspector=function(...args){const state=capture(),result=baseInspector(...args);if(!state?.node?.isConnected)restore(state,{fallback:false});return result;};
function drawing(){return ['draw','pen','stairs','local-steps','edge-steps','stair-route'].includes(tool);}
function paint(){let g=$('drawing-cell-origin');if(!g){g=document.createElementNS('http://www.w3.org/2000/svg','g');g.id='drawing-cell-origin';g.setAttribute('pointer-events','none');$('plan').append(g);}const p=origin||cursor,step=snapSize()||.25;g.innerHTML=drawing()&&p?`<rect x="${Math.floor(p.x/step)*step}" y="${Math.floor(p.y/step)*step}" width="${step}" height="${step}" fill="#a0a0a0" fill-opacity=".1" stroke="#a0a0a0" stroke-opacity=".25" stroke-width="${screenUnits(1)}"/>`:'';}
$('plan').addEventListener('pointermove',e=>{cursor=point(e);paint();},true);$('plan').addEventListener('pointerdown',e=>{if(e.button===0&&drawing()&&!e.altKey)origin=point(e);},true);window.addEventListener('pointerup',()=>{origin=null;paint();},true);window.addEventListener('pointercancel',()=>{origin=null;paint();},true);$('plan').addEventListener('pointerleave',()=>{cursor=null;paint();});const base=render;render=function(...args){const state=capture(),r=base(...args);paint();if(!state?.node?.isConnected)restore(state,{fallback:false});return r;};
})();
