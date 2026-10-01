/* Presentation and management primitives. The planner model and storage schema live in app.js. */
(function () {
  'use strict';
  let management = null, returnFocus = null, toastTimer = null, importing = false;
  const dialog = $('managementdialog');
  const fieldIds = ['managementcode', 'managementname', 'managementelevation'];
  const visible = el => !el.hidden && !el.closest('[hidden]') && (!el.getClientRects || el.getClientRects().length > 0);
  const focus = el => el?.focus?.({preventScroll: true});
  const plural = (n, one) => `${n} ${one}${n === 1 ? '' : 's'}`;

  function syncStorage() {
    const state = importing ? 'loading' : $('saved').dataset.state || 'saved';
    $('savecompact').dataset.state = state;
    $('savecompactlabel').textContent = {saved: 'Saved locally', editing: 'Editing…', error: 'Not saved', loading: 'Importing…'}[state] || 'Saved locally';
    const failed = $('saved').dataset.state === 'error';
    $('savewarning').hidden = !failed;
    $('savecompact').title = failed ? 'Changes are in memory only. Download a backup before closing.' : 'Saved in this browser on this device. File downloads portable backups.';
    if (failed) $('savewarningtext').textContent = ($('saved').title && !$('saved').title.startsWith('Saved') ? $('saved').title : buildingState.message) || 'Download a backup before closing or reloading.';
  }
  function sync() {
    const f = floor(), count = Object.keys(model.floors).length;
    $('appbrandlabel').textContent = currentBuilding().name;
    $('appbrandlabel').title = currentBuilding().name;
    document.title = `${currentBuilding().name} · Building Planner`;
    $('floorcount').textContent = count;
    $('floor-menulabel').textContent = `Current floor · ${floorId}`;
    $('floorstats').textContent = `${plural(f.rooms.filter(r => !['void', 'solid'].includes(r.type) && !r.throughOnly).length, 'space')} · ${plural(allConnections(f).length, 'connection')}`;
    $('canvasfloor').textContent = `${floorId} / ${f.name}`;
    $('emptyfloor').hidden = !!f.rooms.length || tool !== 'select' || preview;
    $('removefloor').title = floorId === 'L0' ? 'The ground-floor code L0 is permanent. Its name and elevation are editable.' : `Remove ${floorId} · ${f.name}`;
    $('building').title = `${currentBuilding().name} · ${plural(count, 'floor')} · saved in this browser`;
    $('inspectortoggle').classList.toggle('has-selection', !!(selected || selectedDoor));
    syncStorage();
  }
  function toast(message) {
    clearTimeout(toastTimer);
    $('toast').textContent = message;
    $('toast').hidden = false;
    toastTimer = setTimeout(() => { $('toast').hidden = true; }, 4500);
  }
  function fieldError(message, id) {
    $('managementerror').textContent = message;
    $('managementerror').hidden = false;
    if (id) { $(id).setAttribute('aria-invalid', 'true'); focus($(id)); }
    return false;
  }
  function clearError() {
    $('managementerror').hidden = true;
    $('managementerror').textContent = '';
    for (const id of fieldIds) $(id).removeAttribute('aria-invalid');
  }
  function restoreFocus() {
    const target = returnFocus;
    returnFocus = null;
    if (target && visible(target)) focus(target); else focus($('plan'));
  }
  function closeManagement() {
    management = null;
    dialog.close();
    restoreFocus();
  }
  function suggestedFloor() {
    let n = 1;
    while (Object.hasOwn(model.floors, `L${n}`)) n++;
    return {id: `L${n}`, z: Math.min(150, Math.max(0, ...Object.values(model.floors).map(f => f.z || 0)) + 4)};
  }
  function openManagement(kind, options = {}) {
    if (kind === 'remove-floor' && floorId === 'L0') return;
    finishWidthEdit(false);
    resetTransient(true);
    const active = document.activeElement;
    returnFocus = active?.closest?.('.toolbar-popover')?.querySelector('summary') || active;
    closeToolbarMenus();
    closeConnectionMenu();
    management = {kind, buildingId: currentBuilding().id, floorId, submitting: false};
    clearError();
    const floorMode = kind.includes('floor'), remove = kind === 'remove-floor', message = kind === 'message';
    const creating = kind === 'add-floor', suggested = suggestedFloor();
    $('managementeyebrow').textContent = message ? 'FILE' : floorMode ? `${currentBuilding().name} / ${creating ? 'NEW FLOOR' : floorId}` : 'BUILDING';
    const titles = {'new-building': 'New building', 'duplicate-building': 'Duplicate building', 'rename-building': 'Rename building', 'add-floor': 'Add a floor', 'edit-floor': 'Edit floor details', 'remove-floor': `Remove ${floorId}?`};
    $('managementtitle').textContent = options.title || titles[kind] || 'Planner';
    const descriptions = {
      'new-building': 'Start with an empty ground floor. Each building keeps its own floors, view and undo history.',
      'duplicate-building': 'Copy every floor and connection into a separate building. Your original stays as it is.',
      'rename-building': 'Choose a name that makes this building easy to find.',
      'add-floor': 'Create an empty floor in this building. Floors are listed from highest to lowest.',
      'edit-floor': `Floor code ${floorId} stays fixed. These changes can be undone.`,
      'remove-floor': `${floor().name} contains ${plural(floor().rooms.length, 'space')} and ${plural(floor().doors.length, 'connection')}. Removing it also removes its linked floor references. Undo restores the whole change.`
    };
    $('managementdescription').textContent = options.message || descriptions[kind] || '';
    $('managementfields').hidden = remove || message;
    $('managementcodefield').hidden = !creating;
    $('managementelevationfield').hidden = !floorMode || remove;
    $('managementcode').value = suggested.id;
    $('managementname').maxLength = floorMode ? 150 : 100;
    $('managementnamelabel').textContent = floorMode ? 'Floor name' : 'Building name';
    $('managementname').value = kind === 'new-building' ? '' : kind === 'duplicate-building' ? `${currentBuilding().name} copy`.slice(0, 100) : creating ? '' : floorMode ? floor().name : currentBuilding().name;
    $('managementname').placeholder = creating ? 'e.g. Research labs' : 'e.g. KERN Annex';
    $('managementelevation').value = creating ? suggested.z : floor().z;
    $('managementcancel').hidden = message;
    $('managementsave').textContent = remove ? 'Remove floor' : message ? 'Close' : creating ? 'Add floor' : kind === 'new-building' ? 'Create building' : kind === 'duplicate-building' ? 'Duplicate building' : 'Save changes';
    $('managementsave').classList.toggle('destructive', remove);
    $('managementsave').disabled = false;
    if (!dialog.open) dialog.showModal();
    focus($(remove ? 'managementcancel' : message ? 'managementsave' : options.focus || (creating ? 'managementcode' : 'managementname')));
  }
  function submitManagement(event) {
    event?.preventDefault();
    const state = management;
    if (!state || state.submitting) return false;
    clearError();
    if (state.kind === 'message') { closeManagement(); return true; }
    if (state.buildingId !== currentBuilding().id || state.floorId !== floorId) return fieldError('The current building or floor changed. Cancel and open this form again.');
    const name = String($('managementname').value).trim(), code = String($('managementcode').value).trim(), rawZ = String($('managementelevation').value).trim(), z = Number(rawZ);
    const isFloor = state.kind.includes('floor');
    if (state.kind !== 'remove-floor') {
      if (!name) return fieldError('Enter a name before continuing.', 'managementname');
      if (name.length > (isFloor ? 150 : 100)) return fieldError(`Keep the name to ${isFloor ? 150 : 100} characters.`, 'managementname');
    }
    if (state.kind === 'add-floor') {
      if (Object.keys(model.floors).length >= 20) return fieldError('This building already has 20 floors. Create another building for more floors.');
      if (!nameSafeFloorId(code)) return fieldError('Use 1–20 letters, numbers, dashes or underscores for the floor code.', 'managementcode');
      if (Object.hasOwn(model.floors, code)) return fieldError(`Floor code ${code} is already used. Choose another code.`, 'managementcode');
    }
    if (['add-floor', 'edit-floor'].includes(state.kind) && (!rawZ || !Number.isFinite(z) || Math.abs(z) > 150)) return fieldError('Enter an elevation from −150 to 150 metres.', 'managementelevation');
    if (['new-building', 'duplicate-building'].includes(state.kind) && buildingState.data.buildings.length >= 100) return fieldError('This browser already has 100 buildings. Download a backup before starting another collection.');
    state.submitting = true;
    $('managementsave').disabled = true;
    try {
      switch (state.kind) {
        case 'new-building': createBuilding(name); break;
        case 'duplicate-building': duplicateBuilding(name); break;
        case 'rename-building': renameBuilding(name); notify('Building renamed'); break;
        case 'add-floor': addFloor({id: code, name, z}); notify(`${code} added · draw your first room`); break;
        case 'edit-floor':
          if (floor().name !== name || floor().z !== z) commit(() => { floor().name = name; floor().z = z; floor().elevation = `${z > 0 ? '+' : ''}${z.toFixed(2)} m`; });
          notify('Floor details saved · Undo restores the previous details');
          break;
        case 'remove-floor': removeFloor(true); notify(`${state.floorId} removed · Undo restores the whole floor`); break;
      }
      closeManagement();
      return true;
    } catch (error) {
      state.submitting = false;
      $('managementsave').disabled = false;
      return fieldError(error.message || 'This change could not be saved.');
    }
  }
  const bindings = {newbuilding: 'new-building', duplicatebuilding: 'duplicate-building', renamebuilding: 'rename-building', addfloor: 'add-floor', quickaddfloor: 'add-floor', editfloorproperties: 'edit-floor', managefloor: 'edit-floor', renamefloor: 'edit-floor', floorz: 'edit-floor', removefloor: 'remove-floor'};
  for (const [id, kind] of Object.entries(bindings)) $(id).onclick = () => openManagement(kind, id === 'floorz' ? {focus: 'managementelevation'} : {});
  $('managementform').onsubmit = submitManagement;
  $('managementform').oninput = clearError;
  $('managementcancel').onclick = closeManagement;
  dialog.oncancel = event => { event.preventDefault(); closeManagement(); };
  dialog.onclose = () => { management = null; if (returnFocus) restoreFocus(); };
  $('emergencybackup').onclick = exportAll;
  $('emptydraw').onclick = () => $('tool-draw').onclick();
  $('emptystairs').onclick = () => openStairCreation();
  $('file').onchange = async event => {
    const file = event.target.files[0];
    if (!file || importing) return;
    importing = true;
    $('import').disabled = true;
    syncStorage();
    try {
      if (file.size > 20e6) throw Error('The JSON file is larger than 20 MB.');
      importBuildings(JSON.parse(await file.text()), (file.name || 'Imported building').replace(/\.json$/i, ''));
    } catch (error) {
      openManagement('message', {title: 'This file could not be imported', message: `${error.message} Your existing buildings are unchanged. Choose a building or backup JSON file exported by this planner.`});
    } finally {
      importing = false;
      $('import').disabled = false;
      event.target.value = '';
      syncStorage();
    }
  };

  // Native details and buttons retain Tab/Enter behavior; arrows are a convenience.
  for (const id of ['filemenu', 'viewmenu', 'buildingmenu']) {
    const details = $(id), summary = details.querySelector('summary'), panel = details.querySelector('.toolbar-popover-panel');
    panel.id = `${id}-panel`;
    summary.setAttribute('aria-controls', panel.id);
    summary.setAttribute('aria-expanded', 'false');
    const priorToggle = details.ontoggle;
    details.ontoggle = () => {
      priorToggle?.(); summary.setAttribute('aria-expanded', String(details.open));
      if (details.open) {
        const anchor = summary.getBoundingClientRect(), vw = window.innerWidth, vh = window.innerHeight, width = Math.min(panel.offsetWidth || 260, vw - 16), height = Math.min(panel.scrollHeight || 400, vh - 16);
        const x = Math.max(8, Math.min(vw - width - 8, id === 'buildingmenu' ? anchor.left : anchor.right - width));
        let y = anchor.bottom + 6;
        if (vh - y < 150 && anchor.top > height + 12) y = anchor.top - height - 6;
        y = Math.max(8, Math.min(y, vh - 100));
        Object.assign(panel.style, {position: 'fixed', left: `${x}px`, right: 'auto', top: `${y}px`, maxHeight: `${Math.max(80, vh - y - 12)}px`});
      }
    };
    details.onkeydown = event => {
      const items = [...panel.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled])')].filter(visible);
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); details.open = false; focus(summary); return; }
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault(); event.stopPropagation();
      if (!details.open) details.open = true;
      const i = items.indexOf(document.activeElement), n = items.length;
      if (!n) return;
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? n - 1 : event.key === 'ArrowDown' ? (i + 1 + n) % n : i < 0 ? n - 1 : (i - 1 + n) % n;
      focus(items[next]);
    };
    panel.addEventListener('click', event => { if (event.target.closest('button,a')) { details.open = false; if (!document.querySelector('dialog[open]')) focus(summary); } });
  }
  window.addEventListener('resize', () => closeToolbarMenus());
  function setInspector(open) {
    document.body.classList.toggle('inspector-collapsed', !open);
    $('inspectortoggle').setAttribute('aria-expanded', String(open));
    $('inspectortoggle').textContent = open ? 'Inspector' : 'Show inspector';
    if (!open) focus($('inspectortoggle'));
  }
  $('inspectortoggle').onclick = () => setInspector($('inspectortoggle').getAttribute('aria-expanded') !== 'true');
  $('collapseinspector').onclick = () => setInspector(false);

  const icons = {
    'tool-select': '<path d="m4 3 6 17 3-7 7-3L4 3Z"/>',
    'tool-connect': '<path d="m10 13 4-4m-7 6-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2-2 2-2a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" transform="translate(2 2) scale(.85)"/>',
    'tool-disconnect': '<path d="m4 4 16 16M8 5l2-2a4 4 0 0 1 6 6l-1 1M9 14l-1 1a4 4 0 0 1-6-6l2-2" transform="translate(2 2) scale(.9)"/>',
    'tool-draw': '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M12 8v8M8 12h8"/>',
    createstairs: '<path d="M3 20h5v-6h5V8h5V3h3"/>',
    undo: '<path d="m8 5-5 5 5 5M3 10h10a7 7 0 0 1 7 7v2"/>',
    redo: '<path d="m16 5 5 5-5 5m5-5H11a7 7 0 0 0-7 7v2"/>'
  };
  for (const [id, paths] of Object.entries(icons)) {
    const button = $(id);
    button.innerHTML = `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg><span>${button.innerHTML}</span>`;
  }
  $('undo').setAttribute('aria-label', 'Undo'); $('redo').setAttribute('aria-label', 'Redo');
  for (const [id, shortcut] of Object.entries({'tool-connect': 'C', 'tool-disconnect': 'X', 'tool-draw': 'P', undo: 'Control+Z Meta+Z', redo: 'Control+Shift+Z Meta+Shift+Z'})) $(id).setAttribute('aria-keyshortcuts', shortcut);
  for (const button of document.querySelectorAll('button:not([type])')) button.type = 'button';
  $('loadstatus').hidden = true;
  window.KERN_UI = {sync, syncStorage, toast, openManagement, submitManagement, closeManagement};
  sync();
})();
