/* Local workspace shell. Load after the existing editor and all its add-ons.
 * Plans remain in KERN_BUILDINGS. This file owns only navigation/project metadata.
 * Editor keyboard guards are installed before the editor handlers.
 */
(function () {
  'use strict';
  if (window.KERN_WORKSPACE) return;
  const KEY = 'kern-workspace-v1', PREVIOUS = KEY + '.previous';
  const $w = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const buildings = () => buildingState.data.buildings;
  const building = id => buildings().find(item => item.id === id);
  const validProject = id => state.projects.some(project => project.id === id);
  const title = id => state.projects.find(project => project.id === id)?.name || 'Unsorted';
  const B = window.BuildingExports;
  const editor = document.querySelector('body > main');
  const appbar = document.querySelector('header.appbar');
  const toolStates = new Map();
  let busy = false, search = '', status = '', locked = false, baseline = null;
  let projectDialogMode = 'new', projectDialogTarget = null, dialogReturnFocus = null;

  function defaults() {
    return {schemaVersion:1, projects:[], buildingProjects:{}, openTabs:[currentBuilding().id], activeTab:'home', selectedProject:'all', lastOpened:{}, modes:{}};
  }
  function normalize(input) {
    if (!input || input.schemaVersion !== 1 || !Array.isArray(input.projects) || !Array.isArray(input.openTabs)) throw Error('The saved workspace could not be read.');
    const result = defaults(), seen = new Set();
    result.projects = input.projects.slice(0,100).filter(item => item && typeof item.id === 'string' && /^project-[a-z0-9-]+$/i.test(item.id) && typeof item.name === 'string' && item.name.trim() && !seen.has(item.id) && seen.add(item.id)).map(item => ({id:item.id, name:item.name.trim().slice(0,100)}));
    result.openTabs = [...new Set(input.openTabs)].filter(id => typeof id === 'string' && building(id));
    result.activeTab = input.activeTab === 'home' || !building(input.activeTab) ? 'home' : input.activeTab;
    if (result.activeTab !== 'home' && !result.openTabs.includes(result.activeTab)) result.openTabs.push(result.activeTab);
    result.selectedProject = ['all','recent','unsorted'].includes(input.selectedProject) || result.projects.some(p => p.id === input.selectedProject) ? input.selectedProject : 'all';
    for (const b of buildings()) {
      const project = input.buildingProjects && own(input.buildingProjects,b.id) && input.buildingProjects[b.id];
      if (result.projects.some(p => p.id === project)) result.buildingProjects[b.id] = project;
      const opened = input.lastOpened && own(input.lastOpened,b.id) && input.lastOpened[b.id];
      if (Number.isFinite(opened) && opened >= 0) result.lastOpened[b.id] = opened;
      if (input.modes && own(input.modes,b.id) && ['2d','3d'].includes(input.modes[b.id])) result.modes[b.id] = input.modes[b.id];
    }
    return result;
  }
  function load() {
    try {
      baseline = localStorage.getItem(KEY);
      if (!baseline) return defaults();
      try { return normalize(JSON.parse(baseline)); }
      catch (_) {
        locked = true;
        status = 'Workspace settings need recovery. Your buildings are unchanged; new organization changes will stay in memory.';
        const previous = localStorage.getItem(PREVIOUS);
        if (previous) try { return normalize(JSON.parse(previous)); } catch (_) {}
        return defaults();
      }
    } catch (_) {
      locked = true;
      status = 'Workspace settings are in memory only because browser storage is unavailable.';
      return defaults();
    }
  }
  let state = load();
  function persist() {
    if (locked || buildingState.locked) { if(buildingState.locked)status='Workspace organization is protected while saved buildings need recovery.';syncStatus(); return false; }
    try {
      const current = localStorage.getItem(KEY);
      if (current !== baseline) { locked = true; throw Error('Workspace settings changed in another tab. Reload after backing up any unsaved building edits.'); }
      const next = JSON.stringify(state);
      if (current === next) return true;
      if (current) { localStorage.setItem(PREVIOUS,current); if (localStorage.getItem(PREVIOUS) !== current) throw Error('Could not verify the previous workspace settings.'); }
      localStorage.setItem(KEY,next);
      if (localStorage.getItem(KEY) !== next) throw Error('Could not verify saved workspace settings.');
      baseline = next;
      return true;
    } catch (error) {
      status = error.message || 'Workspace settings could not be saved. New organization changes are in memory only.';
      syncStatus();
      return false;
    }
  }
  const icons = {
    home:'<path d="m3 10 9-7 9 7v10h-6v-6H9v6H3Z"/>',
    project:'<path d="M3 7h7l2 2h9v11H3Z"/><path d="M3 7V4h7l2 3"/>',
    recent:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/>',
    grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    building:'<path d="M5 21V4h14v17M3 21h18M9 8h1m4 0h1M9 12h1m4 0h1M10 21v-5h4v5"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.building}</svg>`;
  const tabbar = document.createElement('nav');
  tabbar.id = 'workspace-tabs'; tabbar.className = 'workspace-tabs'; tabbar.setAttribute('aria-label','Open buildings');
  document.body.insertBefore(tabbar,appbar);
  const home = document.createElement('section');
  home.id = 'workspace-home'; home.className = 'workspace-home'; home.setAttribute('aria-label','Building workspace home'); home.hidden = true;
  home.innerHTML = `<div class="workspace-sidebar"><div class="workspace-identity">${icon('building')}<div><strong>Building Planner</strong><span>Local workspace</span></div></div><label class="workspace-search"><span class="visuallyhidden">Search buildings</span><input id="workspace-search" type="search" placeholder="Search buildings…" autocomplete="off"></label><nav id="workspace-projects" aria-label="Projects"></nav><button id="workspace-add-project" class="workspace-add-project">＋ New project</button><p class="workspace-local-note">Saved in this browser.<br>Export backups to keep a portable copy.</p></div><div class="workspace-library"><header class="workspace-library-head"><div><span class="workspace-eyebrow">WORKSPACE</span><h1 id="workspace-heading">All buildings</h1><p id="workspace-count"></p></div><div class="workspace-actions"><button id="workspace-backup">Back up buildings</button><button id="workspace-import">Import</button><button id="workspace-new-building" class="primary">＋ New building</button></div></header><p id="workspace-status" role="status" hidden></p><div id="workspace-grid" class="workspace-grid"></div><div id="workspace-empty" class="workspace-empty" hidden><span>${icon('building')}</span><h2 id="workspace-empty-title">No buildings here yet</h2><p id="workspace-empty-copy">Create a building or move one into this project.</p><button id="workspace-empty-new" class="primary">New building</button></div></div>`;
  document.body.insertBefore(home,editor);
  editor.id ||= 'workspace-editor';
  const menu = $w('buildingmenu'), summary = menu.querySelector('summary');
  menu.classList.add('workspace-building-menu');
  summary.innerHTML = '<span id="workspace-building-title"></span><span class="workspace-title-chevron" aria-hidden="true">⌄</span>';
  summary.setAttribute('aria-label','Building actions'); summary.title = 'Building actions';
  const titleHost = document.createElement('div'); titleHost.className = 'workspace-editor-title'; titleHost.id = 'workspace-editor-title';
  titleHost.append(menu);
  const projectCrumb = document.createElement('span'); projectCrumb.id = 'workspace-building-project'; projectCrumb.className = 'workspace-building-project';
  titleHost.append(projectCrumb);
  const oldControls = document.querySelector('.buildingcontrols'); oldControls.parentNode.insertBefore(titleHost,oldControls); oldControls.hidden = true;
  // Move the real menu node; do not clone buttons or replace their existing handlers.
  const menuProject = document.createElement('button'); menuProject.id = 'workspace-move-building'; menuProject.textContent = 'Move to project…';
  const menuReveal = document.createElement('button'); menuReveal.id = 'workspace-show-project'; menuReveal.textContent = 'Show in Home';
  const menuPanel = menu.querySelector('.toolbar-popover-panel'); menuPanel.append(document.createElement('hr'),menuProject,menuReveal);

  const projectDialog = document.createElement('dialog'); projectDialog.id = 'workspace-project-dialog'; projectDialog.setAttribute('aria-labelledby','workspace-project-dialog-title');
  projectDialog.innerHTML = '<form id="workspace-project-form"><h2 id="workspace-project-dialog-title">New project</h2><p id="workspace-project-description"></p><label id="workspace-project-name-field" class="field"><span>Project name</span><input id="workspace-project-name" maxlength="100" required autocomplete="off"></label><label id="workspace-project-select-field" class="field" hidden><span>Project</span><select id="workspace-project-select"></select></label><p id="workspace-project-error" role="alert" hidden></p><div class="workspace-dialog-actions"><button id="workspace-project-cancel" type="button">Cancel</button><button id="workspace-project-save" type="submit" class="primary">Create project</button></div></form>';
  document.body.append(projectDialog);

  function isHome() { return state.activeTab === 'home'; }
  function syncStatus() { const node = $w('workspace-status'); if (node) { node.textContent = status; node.hidden = !status; } }
  function projectFor(id) { return state.buildingProjects[id] || null; }
  function setSurface() {
    const atHome = isHome();
    document.body.dataset.workspace = atHome ? 'home' : 'editor';
    home.hidden = !atHome; editor.hidden = atHome; editor.inert = atHome; appbar.hidden = atHome; appbar.inert = atHome;
    if (atHome) document.title = 'Home · Building Planner';
    else document.title = `${currentBuilding().name} · Building Planner`;
  }
  function tabsMarkup() {
    const homeActive = isHome();
    return `<button id="workspace-home-tab" class="workspace-home-tab ${homeActive?'active':''}" aria-label="Home" ${homeActive?'aria-current="page"':''} title="Home">${icon('home')}</button><div class="workspace-tab-scroll">${state.openTabs.map(id => {const b=building(id);return b?`<div class="workspace-tab ${state.activeTab===id?'active':''}"><button data-open-building="${escape(id)}" ${state.activeTab===id?'aria-current="page"':''} title="${escape(b.name)}">${icon('building')}<span>${escape(b.name)}</span></button><button class="workspace-close-tab" data-close-tab="${escape(id)}" aria-label="Close ${escape(b.name)} tab" title="Close tab; keep building">×</button></div>`:'';}).join('')}</div><button id="workspace-tab-add" class="workspace-tab-add" aria-label="New building" title="New building">＋</button>`;
  }
  function renderTabs() {
    // Avoid replacing focused tab buttons during unrelated model renders.
    const markup = tabsMarkup(); if (tabbar.__markup === markup) return;
    const active = document.activeElement;
    const focused = tabbar.contains(active) ? {id:active.id,open:active.dataset.openBuilding,close:active.dataset.closeTab} : null;
    tabbar.innerHTML = markup; tabbar.__markup = markup;
    if (focused) [...tabbar.querySelectorAll('button')].find(n => focused.id ? n.id===focused.id : focused.open ? n.dataset.openBuilding===focused.open : n.dataset.closeTab===focused.close)?.focus({preventScroll:true});
  }
  function navRow(key,label,type,count) { return `<button data-project="${escape(key)}" class="${state.selectedProject===key?'active':''}" ${state.selectedProject===key?'aria-current="page"':''}>${icon(type)}<span>${escape(label)}</span><small>${count}</small></button>`; }
  function renderProjects() {
    const all = buildings();
    $w('workspace-projects').innerHTML = navRow('recent','Recents','recent',all.filter(b=>state.lastOpened[b.id]).length)+navRow('all','All buildings','grid',all.length)+navRow('unsorted','Unsorted','project',all.filter(b=>!projectFor(b.id)).length)+'<div class="workspace-project-label">Projects</div>'+state.projects.map(p=>navRow(p.id,p.name,'project',all.filter(b=>projectFor(b.id)===p.id).length)).join('');
  }
  function thumbnail(b) {
    if(b.recoveryIssue)return `<div class="workspace-thumbnail workspace-thumbnail-empty">${icon('building')}<span>${escape(b.recoveryStatus)}</span></div>`;
    const floors = b.plan?.floors || {}, keys = Object.keys(floors), preferred = b.view?.floorId;
    const fid = floors[preferred] ? preferred : floors.L0 ? 'L0' : keys[0], f = floors[fid];
    const rooms = (f?.rooms || []).filter(r => ['x','y','w','h'].every(k=>Number.isFinite(r[k])));
    if (!rooms.length) return `<div class="workspace-thumbnail workspace-thumbnail-empty">${icon('building')}<span>Empty floor</span></div>`;
    const points = r => window.KERN_SHAPES?.points ? window.KERN_SHAPES.points(r) : [[r.x,r.y],[r.x+r.w,r.y],[r.x+r.w,r.y+r.h],[r.x,r.y+r.h]];
    const shapes = rooms.map(r=>({r,p:points(r).filter(p=>p.every(Number.isFinite))})).filter(s=>s.p.length>=3);
    const all = shapes.flatMap(s=>s.p); if (!all.length) return '<div class="workspace-thumbnail"></div>';
    const xs=all.map(p=>p[0]),ys=all.map(p=>p[1]),x=Math.min(...xs),y=Math.min(...ys),w=Math.max(...xs)-x,h=Math.max(...ys)-y,pad=Math.max(w,h)*.08+1;
    const fills={tech:'#637c89',living:'#a58967',service:'#718074',circulation:'#a8acaa',core:'#6b7576',void:'#30373e',terrace:'#817c62',cave:'#68655e',courtyard:'#6f865d',secret:'#88664e',solid:'#697077'};
    const polygons=shapes.map(({r,p})=>`<polygon points="${p.map(q=>q.join(',')).join(' ')}" fill="${fills[r.type]||fills.service}" stroke="#d1d8db" stroke-width="${Math.max(w,h)/340}" stroke-linejoin="round"/>`).join('');
    return `<div class="workspace-thumbnail"><svg viewBox="${x-pad} ${y-pad} ${w+pad*2} ${h+pad*2}" aria-hidden="true" focusable="false">${polygons}</svg><span class="workspace-thumb-floor">${escape(fid)}</span></div>`;
  }
  function relative(date) { const t=Date.parse(date); if(!Number.isFinite(t))return 'Saved locally';const days=Math.floor(Math.max(0,Date.now()-t)/86400000);return days===0?'Edited today':days===1?'Edited yesterday':`Edited ${days} days ago`; }
  function renderGrid() {
    let rows = buildings().filter(b=>state.selectedProject==='all'||state.selectedProject==='recent'&&state.lastOpened[b.id]||state.selectedProject==='unsorted'&&!projectFor(b.id)||projectFor(b.id)===state.selectedProject);
    if (search.trim()) { const q=search.toLocaleLowerCase().trim(); rows=rows.filter(b=>`${b.name} ${title(projectFor(b.id))}`.toLocaleLowerCase().includes(q)); }
    rows = [...rows].sort((a,b)=>state.selectedProject==='recent'?(state.lastOpened[b.id]||0)-(state.lastOpened[a.id]||0):(Date.parse(b.updatedAt)||0)-(Date.parse(a.updatedAt)||0));
    $w('workspace-heading').textContent = ({all:'All buildings',recent:'Recents',unsorted:'Unsorted'})[state.selectedProject] || title(state.selectedProject);
    $w('workspace-count').textContent = `${rows.length} building${rows.length===1?'':'s'} · stored in this browser`;
    $w('workspace-grid').innerHTML = rows.map(b=>`<article class="workspace-card"><button class="workspace-card-open" data-open-building="${escape(b.id)}" aria-label="Open ${escape(b.name)}">${thumbnail(b)}<span class="workspace-card-info">${icon('building')}<span><strong title="${escape(b.name)}">${escape(b.name)}</strong><small>${b.recoveryStatus?escape(b.recoveryStatus):Object.keys(b.plan.floors).length+' floors · '+escape(relative(b.updatedAt))}</small></span></span></button><footer><button class="workspace-project-chip" data-move-building="${escape(b.id)}" title="Move to project">${icon('project')}<span>${escape(title(projectFor(b.id)))}</span></button><button data-open-building="${escape(b.id)}" class="workspace-card-arrow" aria-label="Open ${escape(b.name)}">↗</button></footer></article>`).join('');
    $w('workspace-empty').hidden = rows.length !== 0;
    $w('workspace-empty-title').textContent = search ? 'No matching buildings' : state.selectedProject==='recent' ? 'Your recent buildings will appear here' : 'No buildings here yet';
    $w('workspace-empty-copy').textContent = search ? 'Try another name or choose All buildings.' : state.selectedProject==='recent' ? 'Open a building from All buildings to get started.' : 'Create a building or move one into this project.';
    $w('workspace-empty-new').hidden = !!search || state.selectedProject==='recent';
  }
  function sync() {
    if (busy) return;
    state = normalize(state);
    renderTabs();
    $w('workspace-building-title').textContent = currentBuilding().name;
    $w('workspace-building-project').textContent = title(projectFor(currentBuilding().id));
    summary.title = currentBuilding().name + ' · Building actions';
    menu.hidden = false;
    setSurface();
    if (isHome()) { renderProjects(); renderGrid(); }
    syncStatus();
  }
  function rememberCurrent() {
    if (isHome()) return;
    const id = currentBuilding().id;
    state.modes[id] = B?.isThreeMode() ? '3d' : '2d';
    toolStates.set(id,{tool,connectionKind});
  }
  function suspendCurrent() {
    rememberCurrent();
    window.KERN_EXPLORER?.stop?.();
    window.KERN_PLACE?.close?.();
    if (!$w('versionhistorypanel')?.hidden) window.KERN_HISTORY?.close?.();
    closeToolbarMenus();
    finishWidthEdit(true); resetTransient(true,true);
    closeStairCreation();
    $w('stairpreview')?.close();
    // This public path remembers camera/display state before disposing the renderer.
    B?.setWorkspaceMode('2d');
    saveView();
  }
  function restoreTool(id) {
    const saved = toolStates.get(id);
    if (!saved) return;
    // Direct restoration avoids setTool clearing selection for connect/stairs.
    tool = saved.tool; connectionKind = saved.connectionKind;
    render();
  }
  function blockedByDialog() { if (document.querySelector('dialog[open]')) { notify('Close the dialog before switching workspaces.'); return true; } return false; }
  const originalSwitch = switchBuilding;
  function openBuilding(id,options={}) {
    if (!building(id) || !options.internal && blockedByDialog()) return false;
    if (!isHome() && currentBuilding().id===id && state.activeTab===id) return true;
    busy = true;
    try {
      suspendCurrent();
      const mode = state.modes[id] || '2d';
      state.activeTab=id;
      if (!state.openTabs.includes(id)) state.openTabs.push(id);
      originalSwitch(id);
      restoreTool(id);
      state.lastOpened[id]=Date.now();
      setSurface();
      if (mode==='3d') B?.setWorkspaceMode('3d');
      persist();
    } finally { busy=false; sync(); }
    return true;
  }
  function showHome(project,options={}) {
    if (!options.internal && blockedByDialog()) return false;
    busy=true;
    try {
      if (!isHome()) suspendCurrent();
      state.activeTab='home';
      if (['all','recent','unsorted'].includes(project)||validProject(project)) state.selectedProject=project;
      setSurface();persist();
    } finally { busy=false;sync(); }
    return true;
  }
  function closeTab(id) {
    if (!state.openTabs.includes(id) || blockedByDialog()) return false;
    const index=state.openTabs.indexOf(id), wasActive=state.activeTab===id;
    state.openTabs=state.openTabs.filter(value=>value!==id);
    if (wasActive) { const next=state.openTabs[Math.min(index,state.openTabs.length-1)]; next?openBuilding(next):showHome(); }
    persist();sync();
    if (!tabbar.contains(document.activeElement)) ($w('workspace-home-tab') || tabbar.querySelector('button'))?.focus({preventScroll:true});
    return true;
  }
  function selectProject(id) { if(!['all','recent','unsorted'].includes(id)&&!validProject(id))return false;state.selectedProject=id;persist();sync();return true; }
  function createProject(name) {
    name=String(name||'').trim();
    if(!name||name.length>100)throw Error('Enter a project name with 1–100 characters.');
    if(state.projects.length>=100)throw Error('This workspace has reached 100 projects.');
    const id='project-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,9);
    state.projects.push({id,name});state.selectedProject=id;persist();sync();return id;
  }
  function moveBuilding(id,project) {
    if(!building(id)||project&& !validProject(project))return false;
    if(project)state.buildingProjects[id]=project;else delete state.buildingProjects[id];
    persist();sync();return true;
  }
  function openProjectDialog(mode,id) {
    projectDialogMode=mode;projectDialogTarget=id||null;dialogReturnFocus=document.activeElement;
    $w('workspace-project-dialog-title').textContent=mode==='move'?'Move to project':'New project';
    $w('workspace-project-description').textContent=mode==='move'?building(id)?.name||'Building':'Keep related buildings together. Projects are saved in this browser.';
    $w('workspace-project-name-field').hidden=mode==='move';$w('workspace-project-name').required=mode!=='move';$w('workspace-project-name').value='';
    $w('workspace-project-select-field').hidden=mode!=='move';
    $w('workspace-project-select').innerHTML='<option value="">Unsorted</option>'+state.projects.map(p=>`<option value="${escape(p.id)}">${escape(p.name)}</option>`).join('');
    $w('workspace-project-select').value=projectFor(id)||'';
    $w('workspace-project-save').textContent=mode==='move'?'Move building':'Create project';$w('workspace-project-error').hidden=true;
    closeToolbarMenus();projectDialog.showModal();$w(mode==='move'?'workspace-project-select':'workspace-project-name').focus();
  }
  function closeProjectDialog() { projectDialog.close(); if(dialogReturnFocus?.isConnected&&!dialogReturnFocus.closest('[hidden]'))dialogReturnFocus.focus();else $w('workspace-add-project').focus(); }
  function newBuilding() { window.KERN_UI.openManagement('new-building'); }
  function runMutation(fn,args) {
    const previous=new Set(buildings().map(b=>b.id)), oldActive=currentBuilding().id, wasHome=isHome();
    const project=wasHome?(validProject(state.selectedProject)?state.selectedProject:null):projectFor(oldActive);
    let result;
    busy=true;
    try {
      suspendCurrent();
      result=fn(...args);
      const added=buildings().filter(b=>!previous.has(b.id));
      if (added.length) {
        for(const b of added)if(project)state.buildingProjects[b.id]=project;
        const id=currentBuilding().id;
        state.activeTab=id;state.modes[id]='2d';state.lastOpened[id]=Date.now();
        if(!state.openTabs.includes(id))state.openTabs.push(id);
        setSurface();persist();
      } else if (!wasHome && state.modes[oldActive]==='3d') B?.setWorkspaceMode('3d');
      return result;
    } catch(error) {
      if(!wasHome&&currentBuilding().id===oldActive&&state.modes[oldActive]==='3d')B?.setWorkspaceMode('3d');
      throw error;
    } finally { busy=false;sync(); }
  }
  // Preserve existing application paths: menus, archive, imports, commands and copies.
  switchBuilding=function(id){return openBuilding(id);};
  const originalAdd=addBuilding; addBuilding=function(...args){return runMutation(originalAdd,args);};
  const originalImport=importBuildings; importBuildings=function(...args){return runMutation(originalImport,args);};
  const originalRender=render; render=function(...args){const result=originalRender(...args);sync();return result;};

  function handleKeydown(event) {
    const target=event.target;
    if (!target.closest?.('#workspace-tabs') || !['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    const buttons=[...tabbar.querySelectorAll('#workspace-home-tab,[data-open-building],#workspace-tab-add')],current=buttons.indexOf(target);
    if(current<0)return;
    event.preventDefault();
    const index=event.key==='Home'?0:event.key==='End'?buttons.length-1:(current+(event.key==='ArrowRight'?1:buttons.length-1))%buttons.length;
    buttons[index].focus({preventScroll:true});buttons[index].scrollIntoView?.({block:'nearest',inline:'nearest'});
  }
  tabbar.addEventListener('keydown',handleKeydown);
  tabbar.addEventListener('click',event=>{
    const node=event.target.closest('button');if(!node)return;
    if(node.id==='workspace-home-tab')showHome();else if(node.id==='workspace-tab-add')newBuilding();else if(node.dataset.closeTab)closeTab(node.dataset.closeTab);else if(node.dataset.openBuilding)openBuilding(node.dataset.openBuilding);
  });
  home.addEventListener('click',event=>{const node=event.target.closest('button');if(!node)return;if(node.dataset.openBuilding)openBuilding(node.dataset.openBuilding);if(node.dataset.moveBuilding)openProjectDialog('move',node.dataset.moveBuilding);if(node.dataset.project)selectProject(node.dataset.project);});
  $w('workspace-search').oninput=event=>{search=event.target.value;renderGrid();};
  $w('workspace-add-project').onclick=()=>openProjectDialog('new');
  $w('workspace-new-building').onclick=newBuilding;$w('workspace-empty-new').onclick=newBuilding;
  $w('workspace-backup').onclick=()=>exportAll();$w('workspace-import').onclick=()=>$w('file').click();
  menuProject.onclick=()=>openProjectDialog('move',currentBuilding().id);menuReveal.onclick=()=>showHome(projectFor(currentBuilding().id)||'unsorted');
  $w('workspace-project-cancel').onclick=closeProjectDialog;
  projectDialog.oncancel=event=>{event.preventDefault();closeProjectDialog();};
  $w('workspace-project-form').onsubmit=event=>{
    event.preventDefault();
    try {if(projectDialogMode==='move'){if(!moveBuilding(projectDialogTarget,$w('workspace-project-select').value||null))throw Error('That building or project is no longer available.');}else createProject($w('workspace-project-name').value);closeProjectDialog();}
    catch(error){$w('workspace-project-error').textContent=error.message;$w('workspace-project-error').hidden=false;}
  };
  window.addEventListener('pagehide',()=>{rememberCurrent();persist();});
  window.addEventListener('storage',event=>{if(event.key===KEY&&event.newValue!==baseline){locked=true;status='Workspace settings changed in another tab. Organization changes here are in memory only until you reload.';syncStatus();}});
  function refreshAfterRecovery(){if(status==='Workspace organization is protected while saved buildings need recovery.')status='';if(state.activeTab!=='home'){state.activeTab=currentBuilding().id;if(!state.openTabs.includes(state.activeTab))state.openTabs.push(state.activeTab)}sync();}
  window.KERN_WORKSPACE={isHome,showHome,openBuilding,closeTab,selectProject,createProject,moveBuilding,projectFor,sync,refreshAfterRecovery,handleKeydown,thumbnail,getState:()=>JSON.parse(JSON.stringify(state)),storageKeys:{current:KEY,previous:PREVIOUS}};
  // First use deliberately starts at Home; subsequent visits restore the saved surface.
  const initial=state.activeTab;
  state.activeTab='home';setSurface();sync();
  if(initial!=='home')openBuilding(initial,{internal:true});else persist();
})();
