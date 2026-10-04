/* Searchable commands, settings and shortcut reference. No model state is stored here. */
(function(){
'use strict';
const dialog=$('commanddialog'),input=$('commandsearch'),results=$('commandresults');let found=[],active=0,returnFocus=null;
const click=id=>()=>$(id)?.click(),run=action=>()=>{action();},toggle=id=>()=>{const node=$(id);node.checked=!node.checked;node.dispatchEvent(new Event('change',{bubbles:true}))};
function commands(){
 const three=window.BuildingExports?.isThreeMode?.()||false;const out=[],add=(id,label,group,action,shortcut='',detail='',disabled=false)=>out.push({id,label,group,action,shortcut,detail,disabled:disabled||$(id)?.disabled===true||three&&((group==='Buildings & floors'||group==='Drawing'&&!['tool-select','tool-rotate','tool-draw','stairs','tool-local-steps','tool-edge-steps','tool-door','tool-window','tool-connect','tool-disconnect','clear-selection'].includes(id))||id.startsWith('snap-')||['dimensions','lower-floors','import','archive'].includes(id))});
 for(const [id,label,key,detail]of [['select','Select objects','V / Esc','Drag empty canvas to box-select; Shift adds or removes'],['door','Draw a door on a wall','D','Hover a shared or outside wall, then click'],['connect','Connect rooms or Outside','C','Drag across a shared or exposed wall'],['disconnect','Disconnect rooms','X','Click a connection or drag between connected rooms'],['draw','Draw a room','R','Drag a rectangle using the current grid']])add('tool-'+id,label,'Drawing',click('tool-'+id),key,detail);
 add('tool-rotate','Rotate from a corner','Drawing',click('tool-rotate'),'E');add('tool-local-steps','Draw local steps','Drawing',click('tool-local-steps'),'Shift S');add('tool-edge-steps','Add steps from an edge','Drawing',click('tool-edge-steps'),'Shift E');add('tool-pen','Draw polygon room','Drawing',click('tool-pen'),'P','Click vertices; Enter or click the first point to close');add('stairs','Draw editable stair path','Drawing',click('createstairs'),'S');add('tool-window','Place windows','Drawing',click('tool-window'),'W');add('clear-selection','Clear selection','Drawing',()=>{setSelection();render()});
 add('tool-place','Place outlines, text or HVAC','Drawing',()=>window.KERN_PLACE?.open(),'B','Categorized previews; drag to the plan or click to place');
 add('place-hvac','Choose HVAC route or terminal','Drawing',()=>window.KERN_PLACE?.open('hvac'),'','Height, location and use settings are in the inspector');
 add('showversionhistory','Show version history','View',()=>window.KERN_HISTORY?.show());add('save-named-version','Save named version','Files',()=>window.KERN_HISTORY?.named(),'Ctrl / ⌘ Alt S');
 add('undo','Undo','Edit',click('undo'),'Ctrl / ⌘ Z','',!history.length);add('redo','Redo','Edit',click('redo'),'Ctrl / ⌘ Shift Z','',!future.length);
 for(const [id,label]of [['newbuilding','New building'],['duplicatebuilding','Duplicate building'],['renamebuilding','Rename building'],['addfloor','Add floor'],['managefloor','Edit floor details'],['removefloor','Remove current floor']])add(id,label,'Buildings & floors',click(id),'','',id==='removefloor'&&floorId==='L0');
 for(const [id,f]of Object.entries(model.floors).sort((a,b)=>b[1].z-a[1].z))add('floor-'+id,'Go to '+id+' · '+f.name,'Floors',()=>{if(window.KERN_LAYERS){window.KERN_LAYERS.activateFloor(id);return}if(three){window.BuildingExports.focusThreeFloor(id);return}finishDrag(true);floorId=id;setSelection();render();saveView()},'',(f.z>0?'+':'')+f.z+' m',three&&$('threefit').disabled);
 for(const building of buildingState.data.buildings)add('building-'+building.id,'Open '+building.name,'Buildings',()=>switchBuilding(building.id));
 for(const [id,label]of [['mode3d','Switch to 3D'],['mode2d','Switch to 2D'],['openstack','Open vertical stack'],['opennotes','Level notes and legend'],['openchecks','Plan checks'],['fit','Fit floor plan'],['zoomin','Zoom in'],['zoomout','Zoom out']])add(id,label,'View',click(id));
 for(const value of ['hybrid','light','dark'])add('theme-'+value,'Theme · '+value[0].toUpperCase()+value.slice(1),'Settings',()=>setTheme(value),'',theme===value?'Current theme':value==='hybrid'?'Dark canvas, light room colors':'');
 for(const value of snapPresets)add('snap-'+value,value?'Grid & snap · '+value+' m':'Grid & snap · Off','Settings',()=>setSnapSize(value),'',snapSize()===value?'Current building setting':'Saved with this building');
 for(const [value,label]of [['single','Single door'],['double','Double door'],['open','Open passage']])add('connection-type-'+value,'New connection · '+label,'Settings',()=>setNewConnectionKind(value),'',connectionKind===value?'Current new-door type':'');
 add('default-door-width','Default door width…','Settings',openDoorDefaults,'',`Single ${newOpeningWidth('single')} m · double ${newOpeningWidth('double')} m · new doors only`);
 add('dimensions',($('dimensions').checked?'Hide':'Show')+' dimensions','Settings',toggle('dimensions'));add('lower-floors',(showBelow?'Hide':'Show')+' lower floor stack','Settings',toggle('belowtoggle'));
 for(const [id,label]of [['export','Export this building JSON'],['backupall','Back up all buildings JSON'],['import','Import building or backup'],['pngexport','Export current floor PNG'],['svgexport','Export current floor SVG'],['stackpngexport','Export vertical stack PNG'],['archive','Open legacy layout archive']])add(id,label,'Files',click(id));

 add('threeall','3D · Show all floors / exit focus','3D',click('threeall'),'Esc','Keep current camera framing',!three);add('threefit','3D · Fit visible floors','3D',click('threefit'),'','',!three);
 add('threefloorup','3D · Focus floor above','3D',click('threefloorup'),'↑','',!three||$('threefloorup').disabled);add('threefloordown','3D · Focus floor below','3D',click('threefloordown'),'↓','',!three||$('threefloordown').disabled);
 for(const [id,label]of [['threexray','X-ray foreground walls'],['threewalls','Walls'],['threecutaway','Low-wall cutaway'],['threelabels','Floor and room labels'],['threegrid','Ground grid']])add(id,'3D · '+label,'3D',toggle(id),'',$(id).checked?'On':'Off',!three);
 add('help','Keyboard shortcuts & editor help','Help',click('help'),'','Creation tools return to selection after placement; V / Escape returns to selection. Space, marquee, groups, Undo and exports');
 add('pan-help','Pan the floor plan','Shortcuts',click('help'),'Space + drag','Middle-mouse drag also pans; two fingers zoom on touch');
 add('group-help','Add or remove selection objects','Shortcuts',click('help'),'Shift + click','Shift boxes toggle; Ctrl boxes only subtract. Boxes exclude doors.');
 add('nudge-help','Move selection by one grid step','Shortcuts',click('help'),'Arrow keys','Shift moves four grid steps; Ctrl / ⌘ Z undoes');
 return out;
}
const normalize=s=>String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'');
function render(){const query=normalize(input.value).trim(),terms=query.split(/\s+/).filter(Boolean);found=commands().filter(c=>terms.every(term=>normalize(c.label+' '+c.group+' '+c.shortcut+' '+c.detail).includes(term)));active=Math.max(0,Math.min(active,found.length-1));let group='';results.innerHTML=found.length?found.map((c,i)=>{const heading=c.group!==group?`<div class="command-group">${esc(c.group)}</div>`:'';group=c.group;return heading+`<button class="command-result" id="command-${i}" data-command-index="${i}" type="button" role="option" tabindex="-1" aria-selected="${i===active}" aria-disabled="${c.disabled}"><span>${esc(c.label)}${c.detail?`<small>${esc(c.detail)}</small>`:''}</span>${c.shortcut?`<kbd>${esc(c.shortcut)}</kbd>`:''}</button>`}).join(''):'<p class="command-empty">No commands found. Try a floor name, “snap” or “shortcuts”.</p>';input.setAttribute('aria-activedescendant',found.length?'command-'+active:'')}
function setActive(index){if(!found.length)return;active=(index+found.length)%found.length;for(const node of results.querySelectorAll('[data-command-index]'))node.setAttribute('aria-selected',String(Number(node.dataset.commandIndex)===active));input.setAttribute('aria-activedescendant','command-'+active);$('command-'+active)?.scrollIntoView?.({block:'nearest'})}
function close(restore=true){dialog.close();if(restore){if(window.KERN_FOCUS)window.KERN_FOCUS.restore(returnFocus);else returnFocus?.node?.focus?.({preventScroll:true});}}
function open(){if(dialog.open){input.focus();return}returnFocus=window.KERN_FOCUS?.capture()||{node:document.activeElement};finishWidthEdit(false);resetTransient(true,true);closeToolbarMenus();input.value='';active=0;render();dialog.showModal();input.focus()}
function execute(index=active){const command=found[index];if(!command||command.disabled)return;close(false);command.action();window.KERN_FOCUS?.canvas({completed:true});}
const defaultsDialog=document.createElement('dialog');defaultsDialog.id='doordefaultsdialog';defaultsDialog.innerHTML='<form id="doordefaultsform"><div class="stairpreviewhead"><h2>Default door width</h2><button id="closedoordefaults" type="button" aria-label="Close door defaults">Close</button></div><p class="small">Clear opening width for new doors in 2D and 3D. Existing doors keep their dimensions.</p><div class="gridfields"><label class="field"><span>Single door · m</span><input id="defaultsinglewidth" type="number" min="0.5" max="8" step="0.1" required></label><label class="field"><span>Double door · total m</span><input id="defaultdoublewidth" type="number" min="0.5" max="8" step="0.1" required></label></div><p id="doordefaultserror" role="alert" hidden></p><button type="submit">Save defaults</button></form>';document.body.append(defaultsDialog);
let defaultsReturn=null;
function openDoorDefaults(){defaultsReturn=window.KERN_FOCUS?.capture()||{node:document.activeElement};$('defaultsinglewidth').value=newOpeningWidth('single');$('defaultdoublewidth').value=newOpeningWidth('double');$('doordefaultserror').hidden=true;defaultsDialog.showModal();$('defaultsinglewidth').focus();}
function closeDoorDefaults(){defaultsDialog.close();if(window.KERN_FOCUS)window.KERN_FOCUS.restore(defaultsReturn);}
$('closedoordefaults').onclick=closeDoorDefaults;defaultsDialog.oncancel=e=>{e.preventDefault();closeDoorDefaults();};
$('doordefaultsform').onsubmit=e=>{e.preventDefault();if(!setDefaultDoorWidths(Number($('defaultsinglewidth').value),Number($('defaultdoublewidth').value))){$('doordefaultserror').textContent='Use widths from 0.5 to 8 metres.';$('doordefaultserror').hidden=false;return;}closeDoorDefaults();notify('Default door widths saved · existing doors unchanged');};
let helpReturnFocus=null;
function closeHelp(){ $('helpdialog').close();if(window.KERN_FOCUS)window.KERN_FOCUS.restore(helpReturnFocus);else helpReturnFocus?.node?.focus?.({preventScroll:true}); }
function openHelp(){
 helpReturnFocus=window.KERN_FOCUS?.capture()||{node:document.activeElement};
 finishWidthEdit(false);if(drag||gesture||spaceHeld||pendingRoom)resetTransient(true,true);closeToolbarMenus();$('helpdialog').showModal();$('closehelp').focus();
}
$('help').onclick=openHelp;$('closehelp').onclick=closeHelp;$('helpdialog').oncancel=e=>{e.preventDefault();closeHelp()};$('helpdialog').onkeydown=e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();closeHelp()}};
input.oninput=()=>{active=0;render()};dialog.onkeydown=e=>{if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();e.stopPropagation();setActive(active+(e.key==='ArrowDown'?1:-1))}else if(e.key==='Enter'){e.preventDefault();e.stopPropagation();execute()}else if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close()}};
results.onclick=e=>{const row=e.target.closest('[data-command-index]');if(row)execute(Number(row.dataset.commandIndex))};results.onpointermove=e=>{const row=e.target.closest('[data-command-index]');if(row)setActive(Number(row.dataset.commandIndex))};$('commands').onclick=open;$('opencommands').onclick=open;$('closecommands').onclick=()=>close();dialog.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)close()}});
document.addEventListener('pointerdown',()=>document.documentElement.dataset.inputMode='pointer',true);
window.addEventListener('keydown',e=>{
 if(!['Shift','Control','Meta','Alt'].includes(e.key))document.documentElement.dataset.inputMode='keyboard';
 const slash=e.code==='Slash'||e.key==='/',searchKey=(e.ctrlKey||e.metaKey)&&!e.altKey&&(slash||e.key.toLowerCase()==='k');
 if(!searchKey)return;
 e.preventDefault();e.stopImmediatePropagation();if(e.repeat)return;
 if(dialog.open){close();return;}
 if(!document.querySelector('dialog[open]'))open();
},true);
$('commands').setAttribute('aria-keyshortcuts','Control+/ Meta+/');window.PlannerCommands={open,close,commands,search:render,openDoorDefaults};
})();
