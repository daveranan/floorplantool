/* Regression for Chromium's synchronous change/blur during focused-node removal.
 * JSDOM does not emit that native ordering, so the inspector mutation hook below
 * deliberately emits it and enforces the browser's child-removal invariant.
 */
const assert=require('node:assert/strict'),{boot}=require('./test-production-support.cjs');
const t=boot(),{w,run,get,doc}=t,L=w.KERN_LAYERS;
const field=id=>get('inspector').querySelector('[data-bulk-property="'+id+'"]'),copy=x=>JSON.parse(JSON.stringify(x));
let removals=0,notFound=0;
(async()=>{try{
 w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
 run(`model={version:1,units:'metres',floors:{L0:{name:'Test',z:0,rooms:[],doors:[],entrances:[],primitives:[{...KERN_PRIMITIVES.create('cube','a'),name:'First',w:2},{...KERN_PRIMITIVES.create('cube','b'),name:'Second',x:4,w:3}]}}};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true}};setSelection({primitives:['a','b']});history=[];future=[];render();save();`);
 const base=w.Element.prototype,descriptor=Object.getOwnPropertyDescriptor(base,'innerHTML'),root=get('inspector');
 let removing=false;
 Object.defineProperty(root,'innerHTML',{configurable:true,get(){return descriptor.get.call(this);},set(html){
  const active=doc.activeElement,child=this.firstChild;
  if(!removing&&active?.matches('[data-bulk-property]')&&this.contains(active)){
   removing=true;removals++;
   try{active.dispatchEvent(new w.Event('change',{bubbles:true}));}finally{removing=false;}
   if(child&&child.parentNode!==this){notFound++;throw new w.DOMException("Failed to set the 'innerHTML' property on 'Element': The node to be removed is no longer a child of this node. Perhaps it was moved in a 'blur' handler?",'NotFoundError');}
  }
  descriptor.set.call(this,html);
 }});
 const change=async(id,value)=>{const input=field(id);assert(input);input.focus();input.value=value;input.dispatchEvent(new w.Event('change',{bubbles:true}));await Promise.resolve();};
 const ids=copy(L.references()),scope=copy(L.floorState());
 assert.equal(field('primitives.w').placeholder,'—');
 await change('primitives.w','5');assert.equal(notFound,0,'A focused bulk edit must not recursively replace the inspector');assert.equal(run('floor().primitives[0].w'),5);assert.equal(run('floor().primitives[1].w'),5);assert.equal(run('history.length'),1);assert.deepEqual(copy(L.references()),ids);assert.deepEqual(copy(L.floorState()),scope);assert.equal(doc.activeElement.dataset.bulkProperty,'primitives.w');
 for(const [id,value,k]of [['primitives.height','2.75','height'],['primitives.z','1.25','z'],['primitives.color','#123abc','color']]){const count=run('history.length');await change(id,value);assert.equal(run('history.length'),count+1);assert.equal(run('floor().primitives[0]['+JSON.stringify(k)+']'),Number.isFinite(Number(value))?Number(value):value);assert.equal(run('floor().primitives[1]['+JSON.stringify(k)+']'),Number.isFinite(Number(value))?Number(value):value);assert.equal(notFound,0);}
 // Moving to the next field before the queued repaint keeps that field focused.
 let edited=field('primitives.w');edited.focus();edited.value='5.5';edited.dispatchEvent(new w.Event('change',{bubbles:true}));field('primitives.height').focus();await Promise.resolve();assert.equal(doc.activeElement.dataset.bulkProperty,'primitives.height');assert.equal(run('floor().primitives[0].w'),5.5);assert.equal(notFound,0);
 const before=run('JSON.stringify(model)'),count=run('history.length');await change('primitives.height','-4');assert.equal(run('JSON.stringify(model)'),before);assert.equal(run('history.length'),count);assert.equal(field('primitives.height').value,'2.75');
 // A passive refresh preserves a dirty draft without treating removal as consent
 // to save it. Escape cancels; an explicit later change saves it once.
 let input=field('primitives.z');input.focus();input.value='8';run('render()');assert.equal(run('history.length'),count);assert.equal(field('primitives.z').value,'8');assert.equal(run('floor().primitives[0].z'),1.25);field('primitives.z').dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true}));assert.equal(field('primitives.z').value,'1.25');
 await change('primitives.z','2');assert.equal(run('history.length'),count+1);run('undo()');assert.equal(run('floor().primitives[0].z'),1.25);run('redo()');assert.equal(run('floor().primitives[0].z'),2);assert.equal(notFound,0);
 // External/model and selection changes discard obsolete draft restoration.
 input=field('primitives.w');input.focus();input.value='9';run('model=clone(model);floor().primitives[0].w=6;floor().primitives[1].w=6;render()');assert.equal(field('primitives.w').value,'6');
 input=field('primitives.z');input.focus();input.value='9';L.selectLayer('primitives','a');assert.equal(L.references().length,1);assert.equal(run('floor().primitives[0].z'),2);assert(!get('bulk-properties'));assert.equal(notFound,0);
 assert(removals>0,'Native removal ordering was exercised');
 console.log('PASS focused bulk-field native blur/change reentrancy, common/mixed values, repeat edits, one Undo, invalid input, dirty draft retention/cancel, stale selection and newer-model refresh');
}finally{t.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
