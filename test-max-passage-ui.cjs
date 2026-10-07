const assert=require('node:assert/strict'),{boot}=require('./test-production-support.cjs');
const t=boot(),{run,w,doc,get}=t;
w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
assert(w.KERN_MAX_PASSAGE_UI,'maximum passage modules must be registered in production order');
for(const type of ['pointerdown','pointermove','pointerup','pointercancel'])get('plan').addEventListener(type,e=>get('plan')['on'+type]?.(e));
const plan={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,clearHeight:3,rooms:[{id:'a',name:'A',type:'tech',x:0,y:0,w:10,h:20},{id:'b',name:'B',type:'tech',x:10,y:0,w:10,h:20}],doors:[],entrances:[]}}};
function setup(p=plan){for(const dialog of doc.querySelectorAll('dialog[open]'))dialog.close();doc.activeElement?.blur?.();run(`resetTransient(true);model=${JSON.stringify(p)};floorId='L0';currentBuilding().view.layers={visible:{L0:true},editFloors:['L0']};setTool('select');history=[];future=[];render();`);}
function key(key,more={},target=doc.body,type='keydown'){const e=new w.KeyboardEvent(type,{key,bubbles:true,cancelable:true,...more});target.dispatchEvent(e);return e;}
function pointer(type,x,y,id,more={}){const e=new w.MouseEvent(type,{bubbles:true,cancelable:true,button:0,clientX:x,clientY:y,...more});Object.defineProperty(e,'pointerId',{value:91});(id?get('plan').querySelector(`[data-room="${id}"]`):get('plan')).dispatchEvent(e);return e;}
function begin(more={}){pointer('pointerdown',5,10,'a',more);pointer('pointermove',15,10,null,more);}
function finish(more={}){pointer('pointerup',15,10,null,more);}
try{
 setup();run("setTool('draw')");key('c',{altKey:true});assert.equal(run('tool'),'connect');assert(w.KERN_MAX_PASSAGE_UI.latched);key('Alt',{},doc.body,'keyup');assert(w.KERN_MAX_PASSAGE_UI.active(),'Alt+C stays latched after Alt release');
 const before=run('JSON.stringify(model)');begin();const feedback=run('connectionFeedback()');assert(feedback.valid,feedback.candidate?.reason);assert.equal(feedback.candidate.door.width,20);assert.equal(run('history.length'),0);assert.equal(run('JSON.stringify(model)'),before,'preview does not mutate model');assert(feedback.hint.includes('20.00 × 3.00'));
 finish();assert.equal(run('floor().doors.length'),1);assert.equal(run('history.length'),1);assert.equal(run('floor().doors[0].kind'),'open');assert.equal(run('floor().doors[0].width'),20);run('validateImport(model)');const saved=run('JSON.stringify(model)');run('undo()');assert.equal(run('JSON.stringify(model)'),before);run('redo()');assert.equal(run('JSON.stringify(model)'),saved);
 // Ordinary C remains a normal single door and does not mutate saved defaults.
 setup();key('c');begin();assert.equal(run('connectionFeedback().candidate.door.kind'),'door');finish();assert.equal(run('floor().doors[0].width'),1.2);assert.equal(run('floor().doors[0].maximumPassage'),undefined);
 // Holding Alt in ordinary Connect gives the tool precedence over camera pan.
 setup();key('c');const pan=run('JSON.stringify(pan)');begin({altKey:true});assert(run('drag?.kind==="connect"'),'Alt left-drag starts the connection gesture');assert(run('connectionFeedback().candidate.maximumPassage'));assert.equal(run('JSON.stringify(pan)'),pan);finish({altKey:true});assert.equal(run('floor().doors[0].kind'),'open');assert.equal(run('history.length'),1);
 // Alt navigation remains available for Select and other pointer buttons.
 setup();assert(!w.KERN_MAX_PASSAGE_UI.altConnectIntent({altKey:true,button:0,target:get('plan')}));run("setTool('connect')");assert(!w.KERN_MAX_PASSAGE_UI.altConnectIntent({altKey:true,button:2,target:get('plan')}));assert(w.KERN_MAX_PASSAGE_UI.altConnectIntent({altKey:true,button:0,target:get('plan')}));
 // Locks and floor scope are enforced both on hover and after preview.
 setup();key('c',{altKey:true});const q=run('connectionCandidate(room("a"),room("b"),{x:10,y:10})');w.KERN_LAYERS.toggleObject('rooms','b','locked');assert(!run('connectionCandidate(room("a"),room("b"),{x:10,y:10})').valid);run(`addCandidate(${JSON.stringify(q)})`);assert.equal(run('floor().doors.length'),0);assert.equal(run('history.length'),0);
 setup();key('c',{altKey:true});run("currentBuilding().view.layers.editFloors=[]");assert(!run('connectionCandidate(room("a"),room("b"),{x:10,y:10})').valid);
 // A new barrier after preview invalidates the stale proposal without replacing it.
 setup();key('c',{altKey:true});const stale=run('connectionCandidate(room("a"),room("b"),{x:10,y:10})');run('floor().doors.push({id:"keep",a:"a",b:"b",kind:"window",width:2,offset:.2})');const preserved=run('JSON.stringify(model)');run(`addCandidate(${JSON.stringify(stale)})`);assert.equal(run('JSON.stringify(model)'),preserved);assert.equal(run('history.length'),0);
 // Bounded width greater than 8 m survives save validation and has no conflict.
 const bounded=JSON.parse(JSON.stringify(plan));bounded.floors.L0.doors.push({id:'keep',a:'a',b:'b',kind:'window',width:2,offset:.2,sill:1,height:1});setup(bounded);key('c',{altKey:true});begin();assert.equal(run('connectionFeedback().candidate.door.fullWidth'),false);finish();assert.equal(run('floor().doors.length'),2);assert(run('floor().doors[1].width>8'));assert(!run('openingConflict(floor().doors[1])'));run('validateImport(model)');assert.equal(run('history.length'),1);
 run('updateConnection(floor().doors[1],"type","single");validateImport(model)');assert.equal(run('floor().doors[1].maximumPassage'),undefined);
 // Keyboard guards: no accidental tools while editing, in a modal, or for other chords.
 for(const more of [{altKey:true,shiftKey:true},{altKey:true,ctrlKey:true},{altKey:true,metaKey:true}]){setup();key('c',more);assert.equal(run('tool'),'select');}
 setup();key('c',{altKey:true},get('layer-search'));assert.equal(run('tool'),'select');get('helpdialog').showModal();key('c',{altKey:true});assert.equal(run('tool'),'select');get('helpdialog').close();
 setup();key('c',{altKey:true});key('c',{altKey:true,repeat:true});assert(w.KERN_MAX_PASSAGE_UI.latched);key('c',{altKey:true});assert.equal(run('tool'),'select');
 // Interrupted gestures never commit, and direct tool changes cancel the latch.
 for(const cancel of ['escape','pointercancel','blur']){setup();key('c',{altKey:true});begin();if(cancel==='escape')key('Escape');if(cancel==='pointercancel')pointer('pointercancel',15,10);if(cancel==='blur')w.dispatchEvent(new w.Event('blur'));finish();assert.equal(run('floor().doors.length'),0,cancel);assert.equal(run('history.length'),0,cancel);}
 setup();key('c',{altKey:true});run("setTool('draw')");assert(!w.KERN_MAX_PASSAGE_UI.latched);
 // 3D controller uses explicit pointer modifiers, true common elevation, and one undo.
 setup();run('room("a").z=-1;room("a").height=5;room("b").z=1;room("b").height=2;setTool("connect")');const start={floor:'L0',room:'a',p:{x:5,y:10},altKey:true},hit={floor:'L0',room:'b',p:{x:15,y:10},altKey:true};const g=w.KERN_CONNECTION_3D.begin('connect',start),preview=w.KERN_CONNECTION_3D.preview('connect',hit,g.hit);assert(preview.valid,preview.reason);assert.equal(preview.z,1);assert.equal(preview.door.height,2);assert.equal(run('history.length'),0);assert(w.KERN_CONNECTION_3D.finish(g,hit,true));assert.equal(run('history.length'),1);assert.equal(run('floor().doors[0].kind'),'open');
 const exported=run('buildGeometry(model).levels.L0.wallSegments').filter(s=>s.a[0]===10&&s.b[0]===10);assert(exported.some(s=>s.z===-1&&s.height===2),'legacy geometry export retains the lower wall base');assert(exported.some(s=>s.z===3&&s.height===1),'legacy geometry export retains the upper lintel');
 console.log('PASS maximum passage UI: Alt+C latch, ordinary/Alt-held C, preview-before-commit, preserved barriers, wide import, lock/scope guards, cancel, atomic undo, 3D controller and lower-base export');
}finally{t.close();}
