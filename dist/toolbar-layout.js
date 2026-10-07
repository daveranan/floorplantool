/* Stable workspace chrome. Move the existing controls, retaining their handlers. */
(function () {
  'use strict';
  const get = id => document.getElementById(id);
  const inspector = get('inspectorpanel'), modes = document.querySelector('.viewmode');
  const head = document.createElement('div');
  head.id = 'inspector-toolbar';
  head.className = 'inspector-toolbar';
  head.setAttribute('aria-label', 'Workspace view');
  inspector.prepend(head);
  head.append(modes);

  const buildingMenu = get('buildingmenu'), buildingPanel = buildingMenu.querySelector('.toolbar-popover-panel');
  const fileMenu = get('filemenu'), filePanel = fileMenu.querySelector('.toolbar-popover-panel');
  buildingPanel.append(document.createElement('hr'), ...filePanel.childNodes);
  fileMenu.remove();
  buildingMenu.querySelector('summary').setAttribute('aria-label', 'Building and file actions');
  buildingMenu.querySelector('summary').title = 'Building and file actions';
  // The compact title is the only File entry point; the tabs keep their navigation role.
  get('workspace-building-project').hidden = true;

  const view = get('viewmenu'), viewSummary = view.querySelector('summary'), viewPanel = view.querySelector('.toolbar-popover-panel');
  const split = document.createElement('div');
  split.className = 'zoom-control';
  split.setAttribute('role', 'group');
  split.setAttribute('aria-label', 'Zoom and view options');
  const fit = get('fit'), zoomIn = get('zoomin'), zoomOut = get('zoomout');
  split.append(fit, view);
  head.append(split, get('collapseinspector'));
  viewSummary.innerHTML = '<span aria-hidden="true">⌄</span>';
  viewSummary.setAttribute('aria-label', 'Zoom and view options');
  viewSummary.title = 'Zoom and view options';
  zoomIn.textContent = 'Zoom in';
  zoomOut.textContent = 'Zoom out';
  const menuFit = document.createElement('button');
  menuFit.id = 'zoom-fit';
  menuFit.type = 'button';
  menuFit.textContent = 'Zoom to fit';
  menuFit.onclick = () => fit.click();
  const zoomLabel = document.createElement('span');
  zoomLabel.className = 'menu-label';
  zoomLabel.textContent = 'Zoom';
  viewPanel.prepend(zoomLabel, zoomIn, zoomOut, menuFit, document.createElement('hr'));
  viewPanel.append(document.createElement('hr'), get('help'));
  get('help').textContent = 'Help and keyboard shortcuts';
  // Search commands already has its live action in View; retain the shortcut too.
  get('commands').hidden = true;
  get('commands').setAttribute('aria-hidden', 'true');
  get('commands').tabIndex = -1;
  // Keep the hidden compatibility target for command integrations and focus fallbacks.
  get('collapseinspector').onclick = () => get('inspectortoggle').click();

  const fitView = fit.onclick;
  fit.onclick = () => {
    // A first-person camera has no orbit target to frame. Restore its 3D orbit first.
    if (window.KERN_EXPLORER?.active) window.KERN_EXPLORER.stop();
    fitView();
    syncZoom();
  };
  function syncZoom(reportedZoom) {
    if (!window.document?.body || !head.isConnected) return;
    const three = window.BuildingExports?.isThreeMode?.();
    const viewer = window.BuildingExports?.getViewer?.();
    const walking = !!window.KERN_EXPLORER?.active;
    const value = three ? (Number.isFinite(reportedZoom) ? reportedZoom : viewer?.getZoom?.()) : zoom;
    const available = Number.isFinite(value) && value > 0;
    const percent = available ? `${(value < .1 ? Math.max(.1, Math.round(value * 1000) / 10) : Math.round(value * 100)).toLocaleString(undefined, {maximumFractionDigits: 1})}%` : '—';
    if (fit.textContent !== percent) fit.textContent = percent;
    const mode = walking ? (window.KERN_EXPLORER.flying ? 'Fly' : 'Walk') : three ? '3D' : '2D';
    const expanded = !document.body.classList.contains('inspector-collapsed');
    get('collapseinspector').setAttribute('aria-expanded', String(expanded));
    get('collapseinspector').setAttribute('aria-label', expanded ? 'Hide inspector details' : 'Show inspector details');
    get('collapseinspector').title = expanded ? 'Hide inspector details' : 'Show inspector details';
    fit.disabled = three && !viewer;
    fit.setAttribute('aria-label', `${mode} zoom ${available ? percent : 'loading'}. ${walking ? `Leave ${mode} and fit building` : 'Zoom to fit'}`);
    fit.title = walking ? `${mode} lens zoom · click to return to 3D and fit building` : 'Current zoom · click to fit';
    menuFit.disabled = fit.disabled;
    zoomIn.disabled = zoomOut.disabled = !!three && (!viewer || walking);
    zoomIn.title = zoomOut.title = walking ? 'Switch to 3D to adjust orbit zoom' : '';
  }
  const oldDraw = draw;
  draw = function (...args) {const result = oldDraw(...args);syncZoom();return result;};
  // Mode marks change independently of model renders while entering/leaving Walk/Fly.
  const modeObserver = new MutationObserver(() => syncZoom());
  modeObserver.observe(modes, {subtree:true, attributes:true, attributeFilter:['aria-pressed']});
  modeObserver.observe(document.body, {attributes:true, attributeFilter:['class','data-view-mode']});
  window.addEventListener('pagehide', () => modeObserver.disconnect(), {once:true});
  window.KERN_TOOLBAR = {syncZoom};
  syncZoom();
})();
