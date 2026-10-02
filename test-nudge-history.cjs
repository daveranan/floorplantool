const assert = require('node:assert/strict');
const { boot } = require('./test-support.cjs');

const t = boot();
const { w, doc, run } = t;
const snapshot = () => run('JSON.stringify(model)');
const press = (key, repeat = false) => w.onkeydown({
  key, repeat, target: doc.body, preventDefault() {}
});

try {
  run(`model={version:1,units:'metres',floors:{L0:{name:'History test',z:0,
    rooms:[
      {id:'a',name:'A',x:0,y:0,w:6,h:100,type:'tech'},
      {id:'b',name:'B',x:6,y:0,w:6,h:100,type:'tech'}
    ],
    doors:[
      {id:'ab',a:'a',b:'b',width:1.2,offset:.25,kind:'door'},
      {id:'ext',a:'a',b:'outside',side:'w',width:1.2,offset:.25,kind:'door'}
    ],entrances:[]}}};
    floorId='L0';setSelection({rooms:[],doors:['ab','ext']});
    history=[];future=[];setTool('select');setSnapSize(.25);render()`);

  // Use the real key handler, including held-key repeat, for two selected doors.
  const states = [snapshot()];
  for (let i = 0; i < 101; i++) {
    press('ArrowDown', i > 0);
    states.push(snapshot());
    assert.notEqual(states.at(-1), states.at(-2), 'each valid key repeat moves both doors');
    assert.equal(run('history.length'), Math.min(i + 1, 80), 'door nudges retain at most 80 undo snapshots');
  }
  assert.equal(run('history[0]'), states[21], 'oldest retained snapshot is the correct undo boundary');
  assert.equal(run('history[79]'), states[100]);
  assert.equal(run('future.length'), 0);
  assert.equal(run('floor().doors.every(d=>d.width===1.2&&doorGeometry(d))'), true);

  for (let i = 0; i < 80; i++) run('undo()');
  assert.equal(snapshot(), states[21], 'all retained nudges undo exactly');
  assert.equal(run('history.length'), 0);
  assert.equal(run('future.length'), 80);
  run('undo()');
  assert.equal(snapshot(), states[21], 'undo stops safely at the retained boundary');

  for (let i = 0; i < 80; i++) run('redo()');
  assert.equal(snapshot(), states[101], 'redo restores the final door positions');
  assert.equal(run('history.length'), 80);
  run('undo()');
  press('ArrowUp');
  assert.equal(run('history.length'), 80);
  assert.equal(run('future.length'), 0, 'a new nudge clears the redo branch');

  // No-op nudges must preserve both the document and the history branch.
  const unchanged = snapshot();
  const historyBefore = run('JSON.stringify(history)');
  run('nudgeSelection(0,0)');
  assert.equal(snapshot(), unchanged);
  assert.equal(run('JSON.stringify(history)'), historyBefore);

  // A session that already has oversized history must shrink to the same cap.
  run('history=Array(120).fill(JSON.stringify(model));future=[]');
  press('ArrowDown');
  assert.equal(run('history.length'), 80);
  assert.equal(run('history.at(-1)'), unchanged);
  console.log('PASS repeated door nudges, 80-entry undo bound, exact undo/redo, redo branching, no-op history, oversized history recovery');
} finally {
  t.close();
}
