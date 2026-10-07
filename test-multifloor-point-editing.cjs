const path=require('path'),assert=require('assert');
const repo=__dirname;
process.chdir(repo);
const t=require(path.join(repo,'test-production-support.cjs')).boot();
const {w,doc,run,get}=t;
w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
const traces=[];
function state(){return JSON.parse(JSON.stringify({selected:run('selected'),points:w.KERN_SHAPE_UI.selectedPoints(),mode:w.KERN_SHAPE_UI.inPointMode(),gesture:w.KERN_SHAPE_UI.isEditing(),refs:w.KERN_LAYERS.references(),vertices:w.KERN_SHAPES.raw(run("model.floors.L0.rooms[0]")),radius:run("model.floors.L0.rooms[0].shape?.vertices?.[0]?.r??0"),crossMarquee:!!doc.querySelector('#crossfloor-marquee'),pointMarquee:!!doc.querySelector('[data-point-marquee]'),history:run('history.length')}));}
function ptr(type,target,x,y,extra={}){assert(target,'Missing event target');const e=new w.MouseEvent(type,{bubbles:true,cancelable:true,button:0,clientX:x,clientY:y,...extra});Object.defineProperty(e,'pointerId',{value:9});const stop=e.stopImmediatePropagation.bind(e);let owner=null;e.stopImmediatePropagation=()=>{owner=new Error().stack.split('\n').slice(2,5).join(' / ');stop()};target.dispatchEvent(e);return {type,owner,state:state()};}
function setup(multi){for(const d of doc.querySelectorAll('dialog[open]'))d.close();run(`resetTransient(true);model={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,rooms:[{id:'a',name:'A',type:'tech',x:0,y:0,w:8,h:8},{id:'b',name:'B',type:'tech',x:30,y:30,w:8,h:8}],doors:[],entrances:[]},L1:{name:'Upper',z:4,rooms:[{id:'upper',name:'Upper',type:'living',x:12,y:0,w:8,h:8}],doors:[],entrances:[]}}};floorId='L0';currentBuilding().view.layers={visible:{L0:true,L1:true},editFloors:${JSON.stringify(multi?['L0','L1']:['L0'])}};viewBounds=null;setTool('select');setSelection({rooms:['a']});history=[];future=[];render();KERN_SHAPE_UI.editRoom(room('a'));`);}
const q=s=>get('plan').querySelector(s);
function select(i,extra={}){const node=q(`[data-shape-vertex="${i}"]`),x=+node.getAttribute('cx'),y=+node.getAttribute('cy');ptr('pointerdown',node,x,y,extra);ptr('pointerup',get('plan'),x,y,extra);}
function record(name,multi,start,move,seed){setup(seed?false:multi);if(seed){seed();if(multi)run("currentBuilding().view.layers.editFloors=['L0','L1'];render();");}const before=state(),events=[],node=start.selector?q(start.selector):get('plan');assert(node,JSON.stringify({name,multi,start,before}));const x=start.x??+(node.getAttribute('cx')??node.getAttribute('x')),y=start.y??+(node.getAttribute('cy')??node.getAttribute('y'));events.push(ptr('pointerdown',node,x,y,start.extra));if(move)events.push(ptr('pointermove',get('plan'),move.x??x+move.dx,move.y??y+move.dy,move.extra));events.push(ptr('pointerup',get('plan'),move?(move.x??x+move.dx):x,move?(move.y??y+move.dy):y,start.extra));traces.push({name,multi,before,events});}
try {
for(const multi of [false,true]){
record('vertex click',multi,{selector:'[data-shape-vertex="0"]'});
record('vertex drag',multi,{selector:'[data-shape-vertex="0"]'},{dx:1,dy:0});
record('shift add vertex',multi,{selector:'[data-shape-vertex="1"]',extra:{shiftKey:true}},null,()=>select(0,{}));
record('radius drag',multi,{selector:'[data-shape-radius="0"]'},{dx:1,dy:1},()=>{select(0,{});run("KERN_SHAPES.set(room('a'),KERN_SHAPES.raw(room('a')));room('a').shape.vertices[0].r=1;render()");});
record('point group resize',multi,{selector:'[data-point-transform="n"]'},{dx:0,dy:-2},()=>{select(0,{});select(1,{shiftKey:true});select(3,{shiftKey:true});});
record('point group move',multi,{selector:'[data-point-move]'}, {dx:1,dy:1},()=>{select(0,{});select(1,{shiftKey:true});});
record('point group rotate',multi,{selector:'[data-point-rotate]'}, {dx:1,dy:1},()=>{select(0,{});select(1,{shiftKey:true});});
record('blank point marquee',multi,{x:-1,y:-1},{x:.5,y:9});
record('blank background click',multi,{x:50,y:50},null,()=>select(0,{}));
record('other room click',multi,{selector:'[data-room="b"]',x:31,y:31},null,()=>select(0,{}));
record('other floor room click',multi,{selector:'[data-layer-floor="L1"][data-layer-id="upper"]',x:13,y:1},null,()=>select(0,{}));
}
for(const single of traces.filter(x=>!x.multi)){
 const multi=traces.find(x=>x.multi&&x.name===single.name),a=single.events.at(-1).state,b=multi.events.at(-1).state;
 assert.deepEqual(b,a,single.name+' must have identical point-mode behavior with multiple editable floors');
 assert.equal(b.selected,'a');assert.equal(b.mode,true);assert.equal(b.crossMarquee,false);assert.deepEqual(b.refs,[{floor:'L0',kind:'rooms',id:'a'}]);
}
const result=name=>traces.find(x=>x.multi&&x.name===name).events.at(-1).state;
assert.deepEqual(result('vertex click').points,[0]);assert.equal(result('vertex click').history,0);
assert.deepEqual(result('shift add vertex').points,[0,1]);
assert.deepEqual(result('vertex drag').vertices[0],[1,0]);assert.equal(result('vertex drag').history,1);
assert(result('radius drag').radius>1);assert.equal(result('radius drag').history,1);
assert.deepEqual(result('blank point marquee').points,[0,3]);
console.log('PASS11 point gestures match single-floor behavior with multiple editable floors: vertex, Shift selection, radius, move/resize/rotate, point marquee and background clicks');
// The same routed drag remains one undo, and cancel paths leave no saved edit.
const snapshot=()=>run('JSON.stringify(model)'),begin=()=>{const n=q('[data-shape-vertex="0"]');ptr('pointerdown',n,0,0);ptr('pointermove',get('plan'),1,0);};
setup(true);let before=snapshot();begin();ptr('pointerup',get('plan'),1,0);assert.equal(run('history.length'),1);run('undo()');assert.equal(snapshot(),before);run('redo()');assert.deepEqual(Array.from(w.KERN_SHAPES.raw(run("room('a')"))[0]),[1,0]);
for(const abort of [()=>get('plan').dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true})),()=>ptr('pointercancel',get('plan'),1,0),()=>ptr('lostpointercapture',get('plan'),1,0),()=>w.dispatchEvent(new w.Event('blur')),()=>run('undo()'),()=>w.KERN_LAYERS.selectFloor('L1'),()=>w.KERN_LAYERS.setVisible('L0',false),()=>w.KERN_LAYERS.toggleObject('rooms','a','hidden'),()=>w.KERN_LAYERS.toggleObject('rooms','a','locked')]){
 setup(true);before=snapshot();begin();abort();ptr('pointerup',get('plan'),1,0);assert.equal(snapshot(),before);assert.equal(run('history.length'),0);
}
setup(true);before=snapshot();begin();const extra=new w.MouseEvent('pointerdown',{bubbles:true,cancelable:true,button:0,clientX:8,clientY:0});Object.defineProperty(extra,'pointerId',{value:10});q('[data-shape-vertex="1"]').dispatchEvent(extra);ptr('pointerup',get('plan'),1,0);assert.deepEqual(Array.from(w.KERN_SHAPES.raw(run("room('a')"))[0]),[1,0]);assert.deepEqual(Array.from(w.KERN_SHAPES.raw(run("room('a')"))[1]),[8,0]);assert.equal(run('history.length'),1);
for(const type of ['pointercancel','lostpointercapture']){setup(true);begin();const other=new w.MouseEvent(type,{bubbles:true,cancelable:true,button:0});Object.defineProperty(other,'pointerId',{value:10});get('plan').dispatchEvent(other);assert(w.KERN_SHAPE_UI.isEditing(),type+' from a different pointer cannot cancel the owner');ptr('pointerup',get('plan'),1,0);assert.deepEqual(Array.from(w.KERN_SHAPES.raw(run("room('a')"))[0]),[1,0]);assert.equal(run('history.length'),1);}
setup(true);select(0);select(1,{shiftKey:true});select(1,{shiftKey:true});assert.deepEqual(Array.from(w.KERN_SHAPE_UI.selectedPoints()),[0]);
// Finish points relinquishes ownership so floor-qualified object selection works.
get('shapeedit').click();assert.equal(w.KERN_SHAPE_UI.inPointMode(),false);const upper=q('[data-layer-floor="L1"][data-layer-id="upper"]');ptr('pointerdown',upper,13,1,{shiftKey:true});ptr('pointerup',get('plan'),13,1,{shiftKey:true});assert.equal(w.KERN_LAYERS.references().length,2);
console.log('PASS point edit atomic undo/redo, nine cancellation paths, second-pointer isolation, Shift remove, and cross-floor object selection after Finish points');
setup(true);begin();ptr('pointerup',get('plan'),1,0);run('validateImport(model);save()');const stored=Object.fromEntries(Array.from({length:w.localStorage.length},(_,i)=>{const k=w.localStorage.key(i);return[k,w.localStorage.getItem(k)]})),reloaded=require(path.join(repo,'test-production-support.cjs')).boot(stored);try{assert.deepEqual(Array.from(reloaded.w.KERN_SHAPES.raw(reloaded.run('model.floors.L0.rooms[0]'))[0]),[1,0]);assert.equal(reloaded.run('model.floors.L1.rooms[0].x'),12);}finally{reloaded.close();}

}finally{t.close();}
