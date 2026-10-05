/* Selector/DOM/wheel regression. Native layout and wheel evidence is recorded in TESTING.md. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { boot } = require(path.join(process.cwd(), 'test-production-support.cjs'));
for (const file of ['dist/ui.css', 'dist/toolbar-layout.css']) {
  const css = fs.readFileSync(file, 'utf8');
  // CSS identifiers cannot start with a digit. JSDOM's forgiving selector engine
  // accepts =3d, unlike Chrome, so test this lexical boundary explicitly.
  assert(!/\[[\w-]+\s*(?:[~|^$*])?=\s*(?:-?\d|--?\d)[^\]"']*\]/.test(css), file + ': quote numeric-leading attribute values');
}
const css = fs.readFileSync('dist/toolbar-layout.css', 'utf8');
assert(css.includes('#inspectorpanel,body.panelsopen #inspectorpanel,body[data-view-mode="3d"] #inspectorpanel{display:flex;flex-direction:column;min-height:0;padding:0;overflow:hidden;scrollbar-gutter:auto}'));
assert(css.includes('#inspectorpanel>#inspector{display:block;flex:1;min-height:0;max-height:none;overflow:auto;overscroll-behavior:contain;'));
assert(css.includes('body.editing3d[data-view-mode="3d"] #inspectorpanel>#inspector{flex:1;max-height:none;'));
assert(css.includes('body.editing3d[data-view-mode="3d"] #inspectorpanel>.threeoptions{flex:0 1 35%;min-height:0}'));
const t = boot(), { w, run, get, doc } = t;
const wheel = node => { const event = new w.WheelEvent('wheel', { deltaY: 180, bubbles: true, cancelable: true }); node.dispatchEvent(event); assert(!event.defaultPrevented, 'Inspector wheel must retain native scrolling'); };
try {
  w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
  run(`resetTransient(true);model={version:1,units:'metres',floors:{L0:{name:'Test',z:0,rooms:[{id:'room',name:'Long room inspector',type:'tech',x:0,y:0,w:20,h:20}],doors:[],entrances:[],primitives:[KERN_PRIMITIVES.create('cube','a'),{...KERN_PRIMITIVES.create('cube','b'),x:4}]}}};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true}};setSelection();history=[];future=[];render();save();`);
  const header = get('inspector-toolbar'), state = () => run('JSON.stringify({model,history,future,zoom,pan})');
  for (const selection of [{ rooms: ['room'] }, { primitives: ['a'] }, { primitives: ['a', 'b'] }, {}]) {
    run('setSelection(' + JSON.stringify(selection) + ');render()');
    const before = state();
    for (const node of [get('inspector'), get('inspector').querySelector('input,button,summary') || get('inspector'), header, get('viewmenu').querySelector('.toolbar-popover-panel')]) wheel(node);
    assert.equal(state(), before, 'Inspector wheel changed model, history or 2D camera');
    assert.equal(get('inspectorpanel').firstElementChild, header);
    assert(!get('inspector').contains(header));
    assert(header.contains(doc.querySelector('.viewmode')));
  }
  // Display-only 3D DOM routing; actual camera math is covered by test-toolbar-layout.
  doc.body.dataset.viewMode = '3d'; doc.body.classList.add('editing3d');
  get('threeoptions').hidden = false;
  const before = state();
  for (const node of [get('inspector'), get('threeoptions'), get('threewalls'), get('viewmenu')]) wheel(node);
  assert.equal(state(), before);
  assert.equal(get('inspectorpanel').firstElementChild, header);
  console.log('PASS quoted CSS mode selectors, bounded scroll-container contract, pinned mode header, and native wheel routing for empty/single/bulk/3D/menu inspectors. DOM contract only; not real layout.');
} finally { t.close(); }
