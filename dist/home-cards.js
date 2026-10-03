/* Home-only building clipboard, card actions, and accessible manual ordering. */
(function(){
'use strict';
const W=window.KERN_WORKSPACE;if(!W)return;const node=id=>document.getElementById(id),home=node('workspace-home'),grid=node('workspace-grid');
let copied=null,selected=null,menuTarget=null,dragged=null,dropTarget=null,dropAfter=false,suppressClickUntil=0,menuReturn=null;
const toolbar=document.createElement('span');toolbar.className='home-card-history';toolbar.innerHTML='<button id="home-card-archive" title="Restore archived buildings">Archive</button><button id="home-card-undo" aria-label="Undo Home change" title="Undo Home change · Ctrl/Cmd+Z">↶</button><button id="home-card-redo" aria-label="Redo Home change" title="Redo Home change · Ctrl/Cmd+Shift+Z">↷</button>';
node('workspace-new-building').before(toolbar);
const status=document.createElement('p');status.id='home-card-status';status.hidden=true;status.setAttribute('role','status');node('workspace-count').after(status);
const menu=document.createElement('div');menu.id='home-card-menu';menu.className='home-card-menu';menu.hidden=true;menu.setAttribute('role','menu');menu.setAttribute('aria-label','Building card actions');
menu.innerHTML='<button data-home-action="copy" role="menuitem">Copy <span>Ctrl/Cmd+C</span></button><button data-home-action="duplicate" role="menuitem">Duplicate</button><button data-home-action="paste" role="menuitem">Paste building <span>Ctrl/Cmd+V</span></button><hr><button data-home-action="earlier" role="menuitem">Move earlier</button><button data-home-action="later" role="menuitem">Move later</button><hr><button data-home-action="remove" role="menuitem" class="home-card-remove">Remove…</button>';document.body.append(menu);
const confirm=document.createElement('dialog');confirm.id='home-card-remove-dialog';confirm.setAttribute('aria-labelledby','home-card-remove-title');confirm.innerHTML='<h2 id="home-card-remove-title">Remove building?</h2><p id="home-card-remove-name"></p><p>An archived copy will remain. You can also undo this from Home.</p><p id="home-card-remove-error" role="alert" hidden></p><div class="home-card-dialog-actions"><button id="home-card-remove-cancel">Cancel</button><button id="home-card-remove-confirm" class="danger">Remove</button></div>';document.body.append(confirm);let removeTarget=null;
const card=id=>[...grid.querySelectorAll('.workspace-card')].find(n=>n.dataset.homeBuilding===id),record=id=>buildingState.data.buildings.find(b=>b.id===id);
function message(text,error=false){status.textContent=text;status.hidden=!text;status.dataset.error=String(error);status.setAttribute('role',error?'alert':'status');}
function refresh(){const state=W.cardHistoryState();node('home-card-undo').disabled=!state.undo||!state.canMutate;node('home-card-redo').disabled=!state.redo||!state.canMutate;node('home-card-undo').title=state.undo?'Undo '+state.undo+' · Ctrl/Cmd+Z':'No Home action to undo';node('home-card-redo').title=state.redo?'Redo '+state.redo+' · Ctrl/Cmd+Shift+Z':'No Home action to redo';for(const c of grid.querySelectorAll('.workspace-card'))c.classList.toggle('home-card-selected',c.dataset.homeBuilding===selected);}
function decorate(){
 const canDrag=W.getState().selectedProject!=='recent'&&W.cardHistoryState().canMutate;
 for(const c of grid.querySelectorAll('.workspace-card')){const id=c.querySelector('[data-open-building]')?.dataset.openBuilding;if(!id)continue;c.dataset.homeBuilding=id;c.draggable=canDrag;c.setAttribute('aria-label',record(id)?.name||'Building');
  if(!c.querySelector('[data-home-menu]')){const actions=document.createElement('button');actions.className='home-card-more';actions.dataset.homeMenu=id;actions.textContent='⋯';actions.setAttribute('aria-label','Actions for '+(record(id)?.name||'building'));actions.setAttribute('aria-haspopup','menu');c.append(actions);}
  c.title=canDrag?'Drag to reorder · right-click for actions':'Right-click for actions';
 }
 if(selected&&!card(selected))selected=null;if(menuTarget&&!card(menuTarget))closeMenu(menu.contains(document.activeElement));refresh();
}
function visibleTarget(target){return target?.isConnected&&!target.closest('[hidden],[inert],dialog:not([open])');}
function focusCard(id){const target=card(id)?.querySelector('.workspace-card-open');if(target)target.focus({preventScroll:true});else node('workspace-home-tab')?.focus({preventScroll:true});}
function closeMenu(restoreFocus=false){menu.hidden=true;menuTarget=null;if(restoreFocus){if(visibleTarget(menuReturn))menuReturn.focus({preventScroll:true});else focusCard(selected);}menuReturn=null;}
function openMenu(id,x,y,origin){if(!W.isHome()||document.querySelector('dialog[open]'))return;menuTarget=id||null;selected=id||null;menuReturn=origin||document.activeElement;const writable=W.cardHistoryState().canMutate,order=W.visibleCardOrder(),index=order.indexOf(id);for(const button of menu.querySelectorAll('[data-home-action]')){const action=button.dataset.homeAction;button.disabled=action==='paste'?!copied||!writable:action==='copy'?!id||!!record(id)?.recoveryIssue:!id||!writable||action==='remove'&&buildingState.data.buildings.length<=1||['earlier','later'].includes(action)&&(W.getState().selectedProject==='recent'||index<0||action==='earlier'&&index===0||action==='later'&&index===order.length-1);}
 menu.hidden=false;menu.style.left=Math.max(8,Math.min(x,window.innerWidth-238))+'px';menu.style.top=Math.max(8,Math.min(y,window.innerHeight-295))+'px';refresh();menu.querySelector('button:not(:disabled)')?.focus({preventScroll:true});}
function runAction(action,id=menuTarget||selected){
 closeMenu();try{
  if(action==='copy'){copied=W.copyCard(id);message('Building copied. Paste it here or in another project.');}
  else if(action==='duplicate'||action==='paste'){selected=action==='duplicate'?W.duplicateCard(id):W.addCardCopy(copied);message(action==='duplicate'?'Building duplicated. Undo is available.':'Building pasted as a separate copy. Undo is available.');focusCard(selected);}
  else if(action==='remove'){const b=record(id);if(!b)return;removeTarget=id;node('home-card-remove-name').textContent=b.name;node('home-card-remove-error').hidden=true;confirm.showModal();node('home-card-remove-cancel').focus();}
  else if(action==='earlier'||action==='later'){const order=W.visibleCardOrder(),i=order.indexOf(id),target=order[i+(action==='earlier'?-1:1)];if(target&&W.reorderCard(id,target,action==='later'))message('Building order saved. Undo is available.');focusCard(id);}
  else if(action==='undo'||action==='redo'){const result=action==='undo'?W.undoCards():W.redoCards();if(result)message(action==='undo'?'Home change undone.':'Home change restored.');}
 }catch(error){message(error.message,true);}refresh();
}
function finishRemoval(){const id=removeTarget;if(!id)return;try{W.removeCard(id);confirm.close();removeTarget=null;message('Building removed from Home. Its archived copy is preserved; Undo restores it.');node('home-card-undo').focus();}catch(error){node('home-card-remove-error').textContent=error.message;node('home-card-remove-error').hidden=false;}refresh();}
function cancelRemoval(){const id=removeTarget;confirm.close();removeTarget=null;focusCard(id);}
function clearDrop(){dropTarget=null;dropAfter=false;for(const c of grid.querySelectorAll('.workspace-card'))c.classList.remove('home-card-drop-before','home-card-drop-after');}
function endDrag(){for(const c of grid.querySelectorAll('.workspace-card')){c.classList.remove('home-card-dragging','home-card-drop-before','home-card-drop-after');}dragged=null;dropTarget=null;dropAfter=false;}
function targetId(event){return event.target.closest?.('.workspace-card')?.dataset.homeBuilding||null;}
home.addEventListener('contextmenu',event=>{const id=targetId(event);if(!id&&!event.target.closest('#workspace-grid,#workspace-empty'))return;event.preventDefault();event.stopPropagation();openMenu(id,event.clientX,event.clientY,event.target);});
grid.addEventListener('pointerdown',event=>{if(!targetId(event)){selected=null;refresh();}});
grid.addEventListener('focusin',event=>{const id=targetId(event);if(id){selected=id;refresh();}});
grid.addEventListener('click',event=>{if(Date.now()<suppressClickUntil){event.preventDefault();event.stopImmediatePropagation();return;}const b=event.target.closest('[data-home-menu]');if(b){event.preventDefault();event.stopImmediatePropagation();const r=b.getBoundingClientRect();openMenu(b.dataset.homeMenu,r.left,r.bottom,b);}},true);
grid.addEventListener('dragstart',event=>{const id=targetId(event);if(!id||!card(id)?.draggable||event.target.closest('[data-move-building],[data-home-menu]')){event.preventDefault();return;}dragged=id;selected=id;closeMenu();event.dataTransfer?.setData('text/plain','kern-building:'+id);if(event.dataTransfer)event.dataTransfer.effectAllowed='move';card(id).classList.add('home-card-dragging');refresh();});
grid.addEventListener('dragover',event=>{const id=targetId(event);if(!dragged)return;if(!id||id===dragged){clearDrop();if(id)event.preventDefault();return;}event.preventDefault();if(event.dataTransfer)event.dataTransfer.dropEffect='move';const c=card(id),r=c.getBoundingClientRect();dropTarget=id;dropAfter=event.clientY>r.top+r.height*.75||event.clientY>=r.top+r.height*.25&&event.clientX>r.left+r.width/2;for(const other of grid.querySelectorAll('.workspace-card'))other.classList.remove('home-card-drop-before','home-card-drop-after');c.classList.add(dropAfter?'home-card-drop-after':'home-card-drop-before');});
grid.addEventListener('dragleave',event=>{if(!event.relatedTarget||!grid.contains(event.relatedTarget))clearDrop();});
grid.addEventListener('drop',event=>{if(!dragged)return;if(!dropTarget||targetId(event)!==dropTarget||dropTarget===dragged){event.preventDefault();suppressClickUntil=Date.now()+300;endDrag();return;}event.preventDefault();event.stopPropagation();const id=dragged,target=dropTarget,after=dropAfter;suppressClickUntil=Date.now()+300;endDrag();try{if(W.reorderCard(id,target,after))message('Building order saved. Undo is available.');selected=id;focusCard(id);}catch(error){message(error.message,true);}refresh();});
grid.addEventListener('dragend',()=>{suppressClickUntil=Date.now()+300;endDrag();});
menu.addEventListener('click',event=>{const button=event.target.closest('[data-home-action]');if(button&&!button.disabled)runAction(button.dataset.homeAction);});
document.addEventListener('pointerdown',event=>{if(!menu.hidden&&!menu.contains(event.target)&&!event.target.closest?.('[data-home-menu]'))closeMenu();},true);
window.addEventListener('blur',()=>{closeMenu();endDrag();});
node('home-card-archive').onclick=()=>{closeMenu();openArchive();};node('home-card-remove-confirm').onclick=finishRemoval;node('home-card-remove-cancel').onclick=cancelRemoval;confirm.addEventListener('cancel',event=>{event.preventDefault();cancelRemoval();});node('home-card-undo').onclick=()=>runAction('undo');node('home-card-redo').onclick=()=>runAction('redo');
function handleKeydown(event){
 if(!W.isHome())return false;
 if(!menu.hidden){if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){event.preventDefault();const buttons=[...menu.querySelectorAll('button:not(:disabled)')],index=buttons.indexOf(document.activeElement);buttons[event.key==='Home'?0:event.key==='End'?buttons.length-1:(index+(event.key==='ArrowDown'?1:buttons.length-1))%buttons.length]?.focus();return true;}if(event.key==='Escape'){event.preventDefault();closeMenu(true);return true;}if(event.key==='Enter'||event.key===' '){event.preventDefault();document.activeElement?.click();return true;}}
 if(document.querySelector('dialog[open]')||window.KERN_KEYS?.typing?.(event.target)||event.target.closest?.('input,textarea,select,[contenteditable="true"]'))return false;
 const key=event.key.toLowerCase(),mod=!!event.ctrlKey!==!!event.metaKey;if(event.altKey||event.ctrlKey&&event.metaKey)return false;
 if(mod&&['c','v','z','y'].includes(key)&&(!event.shiftKey||key==='z')){if(event.repeat)return true;if(key==='c'&&!selected||key==='v'&&!copied)return false;event.preventDefault();runAction(key==='c'?'copy':key==='v'?'paste':key==='y'||event.shiftKey?'redo':'undo');return true;}
 if(!mod&&(key==='contextmenu'||event.shiftKey&&key==='f10')&&selected){event.preventDefault();const c=card(selected),r=c?.getBoundingClientRect();if(r)openMenu(selected,r.left+20,r.top+20,document.activeElement);return true;}
 if(!mod&&!event.shiftKey&&['delete','backspace'].includes(key)&&selected){event.preventDefault();if(!event.repeat)runAction('remove');return true;}return false;
}
const previousKeys=W.handleKeydown;W.handleKeydown=function(event){if(!handleKeydown(event))return previousKeys(event);};
window.KERN_HOME_CARDS={decorate,refresh,openMenu,closeMenu,runAction,handleKeydown,getClipboard:()=>copied?JSON.parse(JSON.stringify(copied)):null};decorate();
})();
