/* Alt+C selects a one-shot maximum passage; Alt during Connect previews the same proposal. */
(function(){'use strict';
const M=window.KERN_MAX_PASSAGES;
let latched=false,latchedBuilding=null,altHeld=false,contextAlt=null;
const stop=e=>{e.preventDefault();e.stopImmediatePropagation();};
const paused=e=>isTypingTarget(e?.target)||window.KERN_WORKSPACE?.isHome?.()||window.KERN_EXPLORER?.active||e?.isComposing||['Process','Dead'].includes(e?.key)||e?.target?.closest?.('#workspace-tabs,#workspace-project-dialog,dialog,[role=menu],[role=listbox],.toolbar-popover')||document.querySelector('dialog[open]');
function active(){return tool==='connect'&&(latched&&latchedBuilding===currentBuilding().id||(contextAlt??altHeld));}
function handlesKeyboard(e){return !paused(e)&&(e.code==='KeyC'||String(e.key).toLowerCase()==='c')&&e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey;}
function handleKey(e){
 if(!handlesKeyboard(e))return false;stop(e);if(e.repeat)return true;
 const off=latched&&tool==='connect';setTool(off?'select':'connect');
 if(!off){latched=true;latchedBuilding=currentBuilding().id;altHeld=true;refreshInteraction();notify('Maximum passage: connect two rooms · largest clear width and height · no door');}
 return true;
}
function altConnectIntent(e){return tool==='connect'&&!!e?.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&(e.button===undefined||e.button===0)&&!spaceHeld&&!preview&&!paused(e);}
function proposal(a,b,p,start){
 const L=window.KERN_LAYERS;
 if(L&&!L.canEditFloor(floorId))return{valid:false,reason:'Enable editing and visibility on this floor first'};
 return M.candidate(model,floorId,a?.id,b?.id,p,{id:uniqueId('d'),start,canEdit:r=>!r.locked&&(!L||L.available('rooms',r.id,floorId))});
}
const oldCandidate=connectionCandidate;connectionCandidate=function(a,b,p){return active()?proposal(a,b,p):oldCandidate(...arguments);};
const oldGesture=gestureCandidate;gestureCandidate=function(a,b,p,start){return active()?proposal(a,b,p,start):oldGesture(...arguments);};
const oldExternal=externalCandidate;externalCandidate=function(){return active()?{valid:false,reason:'Maximum passage: choose another room sharing this wall'}:oldExternal(...arguments);};
const oldType=connectionWithType;connectionWithType=function(d,value){const next=oldType(...arguments);if(value!=='open'&&d.maximumPassage){next.maximumPassage=undefined;next.maximumWallOffset=undefined;}return next;};
const oldFeedback=connectionFeedback;connectionFeedback=function(){const q=oldFeedback(...arguments);if(q?.candidate?.maximumPassage)q.hint=q.candidate.summary+' · release or click to add';return q;};
const oldHint=toolHint;toolHint=function(){return active()?'Maximum passage: connect two rooms · largest clear width and height · no door':oldHint(...arguments);};
const oldTool=setTool;setTool=function(){latched=false;latchedBuilding=null;return oldTool(...arguments);};
const oldReset=resetTransient;resetTransient=function(){latched=false;latchedBuilding=null;altHeld=false;return oldReset(...arguments);};
// Recompute before committing: a preview cannot outlive a lock, another opening,
// or a model edit. addCandidate retains its existing single-checkpoint undo path.
const oldAdd=addCandidate;addCandidate=function(q){
 if(!q?.door?.maximumPassage)return oldAdd(...arguments);
 const d=q.door,g=q.geometry,center=g&&{x:(g.p0[0]+g.p1[0])/2,y:(g.p0[1]+g.p1[1])/2};
 const next=center&&proposal(room(d.a),room(d.b),center);
 if(!next?.valid){notify(next?.reason||'Preview the shared wall again');return false;}
 if(next.door.edge!==d.edge||Math.abs(next.door.width-d.width)>1e-5||Math.abs(next.door.height-d.height)>1e-5||Math.abs(next.geometry.start-g.start)>1e-5||Math.abs(next.geometry.end-g.end)>1e-5){notify('The shared wall changed. Preview the maximum passage again.');return false;}
 next.door.id=d.id;const result=oldAdd(next);if(result)notify(next.summary+' · Undo restores the wall');return result;
};
function withAlt(value,fn){const previous=contextAlt;contextAlt=!!value;try{return fn();}finally{contextAlt=previous;}}
const C=window.KERN_CONNECTION_3D;
if(C){
 const preview=C.preview,begin=C.begin,finish=C.finish;
 C.preview=function(mode,hit,start){return withAlt(hit?.altKey??altHeld,()=>{const q=preview(...arguments);if(q.maximumPassage)q.z=q.geometry.z;return q;});};
 C.begin=function(mode,hit){return withAlt(hit?.altKey??altHeld,()=>begin(...arguments));};
 C.finish=function(g,hit,moved){return withAlt(hit?.altKey??altHeld,()=>finish(...arguments));};
}
for(const name of ['pointerdown','pointermove','pointerup'])window.addEventListener(name,e=>{altHeld=!!e.altKey;},true);
for(const name of ['keydown','keyup'])window.addEventListener(name,e=>{const changed=altHeld!==!!e.altKey;altHeld=!!e.altKey;if(changed&&tool==='connect'&&!paused(e))refreshInteraction();},true);
window.addEventListener('blur',()=>{altHeld=false;});
window.KERN_MAX_PASSAGE_UI={handleKey,handlesKeyboard,altConnectIntent,active,candidate:proposal,get latched(){return latched;}};
})();
