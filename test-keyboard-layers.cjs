const assert=require('assert'),fs=require('fs'),Module=require('module'),path=require('path');
let source=fs.readFileSync('test-support.cjs','utf8');
let scripts=[...fs.readFileSync('dist/index.html','utf8').matchAll(/<script src="([^"]+)\.js"/g)].map(x=>x[1]);
source=source.replace(/const scripts=\[[^;]+;/,'const scripts='+JSON.stringify(scripts)+';');
const m=new Module(path.resolve('test-support.cjs'),module);m.filename=path.resolve('test-support.cjs');m.paths=Module._nodeModulePaths(path.resolve('.'));m._compile(source,m.filename);
const t=m.exports.boot(),{run,w,doc,get}=t;w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
const key=(target,key,more={})=>{const e=new w.KeyboardEvent('keydown',{key,bubbles:true,cancelable:true,...more});target.dispatchEvent(e);return e;};
const state=()=>run('JSON.stringify({tool,selection:getSelection(),floorId,model})');
const setup=()=>run(`model={version:1,units:'metres',floors:{L1:{name:'Upper',z:4,rooms:[{id:'upper',name:'Upper room',x:-8,y:-6,w:12,h:8,type:'tech'}],doors:[],entrances:[]},L0:{name:'Ground',z:0,rooms:[{id:'a',name:'A',x:0,y:0,w:10,h:10,type:'tech'},{id:'b',name:'B',x:10,y:0,w:10,h:10,type:'living'}],doors:[{id:'ab',a:'a',b:'b',width:1.2,offset:.5,kind:'door'}],entrances:[]},B1:{name:'Below',z:-4,rooms:[{id:'low',name:'Low room',x:30,y:10,w:4,h:4,type:'service'}],doors:[],entrances:[]}}};floorId='L0';currentBuilding().view.layers={};setSelection();setTool('select');history=[];future=[];render();`);
setup();
for(const three of [false,true]){
 const base=w.BuildingExports.isThreeMode;w.BuildingExports.isThreeMode=()=>three;
 for(const letter of ['c','d','r','w','p','b','v','f']){run("setTool('select');setSelection({rooms:['a']})");const before=state();key(doc.body,letter.toUpperCase(),{shiftKey:true});if(letter==='d'){assert.equal(run('selectionCount()'),0);assert.equal(run('tool'),'select');}else assert.equal(state(),before,'Shift+'+letter+' must be independent of plain key');}
 run("setTool('select')");key(doc.body,'c');assert.equal(run('tool'),'connect');
 key(doc.body,'S',{shiftKey:true});assert.equal(run('tool'),'local-steps');key(doc.body,'E',{shiftKey:true});assert.equal(run('tool'),'edge-steps');
 for(const more of [{ctrlKey:true,shiftKey:true},{metaKey:true,altKey:true},{ctrlKey:true,altKey:true,shiftKey:true},{ctrlKey:true,metaKey:true}]){run("setTool('select');setSelection({rooms:['a']})");const before=state();key(doc.body,'C',more);assert.equal(state(),before);}
 w.BuildingExports.isThreeMode=base;
}
setup();key(doc.body,'1');assert.equal(run('floorId'),'B1');key(doc.body,'1');assert.equal(run('floorId'),'B1');key(doc.body,'3');assert.equal(run('floorId'),'L0');key(doc.body,'3');assert.equal(run('floorId'),'L1');key(doc.body,'2');assert.equal(run('floorId'),'L1');
for(const target of [get('layer-search'),doc.createElement('textarea'),doc.createElement('div')]){if(!target.isConnected)doc.body.append(target);if(target.tagName==='DIV')target.setAttribute('contenteditable','true');const before=state();key(target,'1');key(target,'D',{shiftKey:true});key(target,'c');assert.equal(state(),before,'Text entry cannot trigger editor actions');}
setup();w.KERN_LAYERS.setVisible('L1',true);assert(get('plan').querySelector('[data-visible-floor="L1"]'));assert.equal(run('floorId'),'L0');w.KERN_LAYERS.setVisible('L1',false);assert(!get('plan').querySelector('[data-visible-floor="L1"]'));
w.KERN_LAYERS.selectLayer('rooms','a');w.KERN_LAYERS.selectLayer('rooms','b',{shiftKey:true});w.KERN_LAYERS.selectLayer('doors','ab',{shiftKey:true});assert.equal(run('selectionCount()'),3);w.KERN_LAYERS.toggleObject('rooms','b','locked');assert.equal(run('getSelection().rooms.includes("b")'),false);assert.equal(run('canEdit(room("b"))'),false);w.KERN_LAYERS.toggleObject('rooms','b','locked');w.KERN_LAYERS.toggleObject('rooms','b','hidden');assert(!get('plan').querySelector('[data-room="b"]'));assert(get('layer-list').querySelector('.is-hidden'));w.KERN_LAYERS.toggleObject('rooms','b','hidden');assert(get('plan').querySelector('[data-room="b"]'));
get('layers-select-all').click();assert.equal(run('selectionCount()'),3);key(doc.body,'D',{shiftKey:true});assert.equal(run('selectionCount()'),0);
w.KERN_LAYERS.setFloorSelection(['L1','B1']);assert.equal(run('currentBuilding().view.layers.editFloors.length'),2);assert(!get('plan').querySelector('[data-floor-move]'));assert(!get('building-footprint'));assert(w.KERN_LAYERS.editable('L1'));assert(!w.KERN_LAYERS.editable('L0'));
get('plan').focus();assert(!key(get('plan'),'Tab',{shiftKey:true}).defaultPrevented,'Shift+Tab keeps native backward focus');key(get('plan'),'1');assert(!doc.documentElement.hasAttribute('data-canvas-keyboard-focus'),'A shortcut does not manufacture keyboard canvas focus');
get('fit').focus();key(get('fit'),'Tab');get('plan').focus();assert(doc.documentElement.hasAttribute('data-canvas-keyboard-focus'),'Real Tab focus remains visible');doc.dispatchEvent(new w.MouseEvent('pointerdown',{bubbles:true}));assert(!doc.documentElement.hasAttribute('data-canvas-keyboard-focus'));
t.close();console.log('PASS exact keyboard modifiers 2D/3D, floor 1/3 navigation, typing, visibility, layers, explicit editable floor scope and genuine canvas focus');
