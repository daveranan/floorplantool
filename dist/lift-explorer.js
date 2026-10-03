/* Connected lift travel is walk navigation only; it never edits the plan. */
(function(){
'use strict';
const X=window.KERN_EXPLORER,B=window.BuildingExports,C=window.KERN_LIFT_WALK;
const button=document.createElement('button');button.id='walklift';button.type='button';button.hidden=true;button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-keyshortcuts','E');$('walklocation').after(button);
const dialog=document.createElement('dialog');dialog.id='walklift-dialog';dialog.setAttribute('aria-labelledby','walklift-title');dialog.innerHTML='<div class="walklift-heading"><h2 id="walklift-title">Choose lift floor</h2><button id="walklift-close" type="button" aria-label="Close lift">×</button></div><p id="walklift-message" role="status"></p><div id="walklift-stops" aria-label="Connected lift stops"></div><p class="small">Instant travel · Escape returns to walking.</p>';document.body.append(dialog);
let session=null,releasedForMenu=false,closing=false,nextSync=0;
const stop=e=>{e.preventDefault();e.stopImmediatePropagation();};
function state(){return X.navigationState();}
function sync(force=false){
 if(!force&&performance.now()<nextSync)return;nextSync=performance.now()+100;
 const s=state();if(!s||s.flying||window.KERN_WORKSPACE?.isHome()){button.hidden=true;if(dialog.open)close(false);return;}
 if(session&&(session.building!==currentBuilding().id||session.plan!==model)){close(false);return;}
 const hit=C.find(model,s);button.hidden=!hit;button.textContent=hit?.reason?hit.label+' · unavailable':'E · '+(hit?.label||'Lift');button.title=hit?.reason||'Choose a connected floor';
}
function collisionWorld(s){const world=window.KERN_WALK.create(B.currentGeometry());world.setCrouch(!!s.crouched);return world;}
function open(){
 const s=state();if(!s||s.flying||dialog.open||document.querySelector('dialog[open]'))return false;
 const hit=C.find(model,s);if(!hit)return false;if(hit.reason){notify(hit.reason);return false;}
 const options=C.stops(model,hit.connection,collisionWorld(s),s.floor);
 session={building:currentBuilding().id,plan:model,baseline:JSON.stringify(model),floor:s.floor,room:hit.room.id,connection:hit.connection};
 X.pauseNavigation();releasedForMenu=!!document.pointerLockElement;dialog.showModal();if(document.pointerLockElement)document.exitPointerLock?.();
 $('walklift-title').textContent=hit.label+' · choose floor';$('walklift-message').textContent=options.some(o=>!o.current&&o.point)?'Choose your destination.':'No other clear connected stop is available.';
 $('walklift-stops').replaceChildren(...options.map(o=>{const b=document.createElement('button');b.type='button';b.dataset.liftFloor=o.floor;b.disabled=!!o.current||!o.point;const title=document.createElement('strong');title.textContent=o.label;const detail=document.createElement('span');detail.textContent=o.current?'Current floor':o.reason||o.z.toFixed(2)+' m';b.append(title,detail);b.onclick=()=>travel(o.floor);return b;}));
 (dialog.querySelector('[data-lift-floor]:not(:disabled)')||$('walklift-close')).focus();return true;
}
function close(resume=true){
 const wasOpen=dialog.open||!!session;closing=true;if(wasOpen)dialog.close();closing=false;session=null;X.pauseNavigation();
 if(!resume){releasedForMenu=false;return;}
 if(wasOpen&&X.active){const canvas=$('threeviewport').querySelector('canvas');canvas?.focus({preventScroll:true});X.captureMouse();}sync(true);
}
function travel(fid){
 const saved=session,s=state();if(!saved||!dialog.open||!s||s.flying)return false;
 const hit=C.find(model,s);
 if(saved.building!==currentBuilding().id||saved.plan!==model||saved.baseline!==JSON.stringify(model)||s.floor!==saved.floor||hit?.room.id!==saved.room||hit?.connection!==saved.connection){$('walklift-message').textContent='The lift changed. Close this menu and choose again.';return false;}
 const option=C.stops(model,hit.connection,collisionWorld(s),s.floor).find(o=>o.floor===fid);
 if(!option||option.current||!option.point){$('walklift-message').textContent=option?.reason||'This floor is not an available lift stop.';return false;}
 close(false);const ok=X.teleport(option.point);if(ok){releasedForMenu=true;X.captureMouse();notify('Lift · '+option.label);}sync(true);return ok;
}
function handleKey(e){
 if(dialog.open){
  e.stopImmediatePropagation();const key=e.key.toLowerCase();
  if(key==='escape'){e.preventDefault();close(true);}else if(['arrowdown','arrowup','home','end'].includes(key)){e.preventDefault();const nodes=[...dialog.querySelectorAll('button:not(:disabled)')],i=nodes.indexOf(document.activeElement);nodes[key==='home'?0:key==='end'?nodes.length-1:(i+(key==='arrowdown'?1:nodes.length-1))%nodes.length]?.focus();}else if(!['tab','enter',' '].includes(key))e.preventDefault();return true;
 }
 const s=state();if(s&&!s.flying&&e.key.toLowerCase()==='e'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.shiftKey&&!isTypingTarget(e.target)){stop(e);if(!e.repeat)open();return true;}return false;
}
button.onclick=open;$('walklift-close').onclick=()=>close(true);dialog.addEventListener('cancel',e=>{e.preventDefault();close(true);});dialog.addEventListener('close',()=>{if(!closing&&session&&!dialog.open)close(true);});document.addEventListener('pointerlockchange',()=>{if(document.pointerLockElement){if(dialog.open){releasedForMenu=true;document.exitPointerLock?.();}else releasedForMenu=false;}});
window.KERN_LIFT_UI={openPanel:open,close,travel,sync,handleKey,get open(){return dialog.open;},get suspendsPointerLock(){return dialog.open||releasedForMenu;}};
})();
