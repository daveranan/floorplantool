'use strict';
const assert=require('node:assert/strict'),{boot}=require('./test-production-support.cjs'),t=boot(),{w,run,get}=t;
w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
try{
 run(`resetTransient(true);model={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,rooms:[{id:'a',name:'Room A',type:'tech',x:0,y:0,w:5,h:5}],doors:[],entrances:[]},L1:{name:'Upper',z:4,rooms:[{id:'b',name:'Room B',type:'tech',x:10,y:0,w:5,h:5,locked:true}],doors:[],entrances:[]}}};floorId='L0';currentBuilding().view.layers={editFloors:['L0','L1'],visible:{L0:true,L1:true}};setSelection();render();`);
 const rows=()=>[...get('floors').children],items=()=>[...get('layer-list').children],initialRows=rows(),initialItems=items();
 for(let i=0;i<25;i++)w.KERN_LAYERS.sync();assert.deepEqual(rows(),initialRows,'unchanged floor controls retain identity');assert.deepEqual(items(),initialItems,'normalized disabled attributes do not rebuild layer controls');
 // Browser checkbox default action happens before the click handler. Reconcile
 // the live property even when selecting the same floor produces equal markup.
 const check=id=>get('floors').querySelector(`[data-floor-select="${id}"]`);w.KERN_LAYERS.selectFloor('L0');const checkbox=check('L0');checkbox.click();assert.equal(checkbox.checked,true);assert.equal(check('L0').checked,true);assert.deepEqual([...w.KERN_LAYERS.floorState().selected],['L0']);
 check('L1').dispatchEvent(new w.MouseEvent('click',{bubbles:true,cancelable:true,shiftKey:true}));assert.deepEqual([...w.KERN_LAYERS.floorState().selected],['L0','L1']);assert(check('L1').checked);check('L0').click();assert.deepEqual([...w.KERN_LAYERS.floorState().selected],['L0']);assert(check('L0').checked);assert(!check('L1').checked);
 // A real content change replaces markup once; accidental replacement repairs.
 run(`model.floors.L0.rooms[0].name='Renamed A'`);w.KERN_LAYERS.sync();assert.match(get('layer-list').textContent,/Renamed A/);const renamed=items();w.KERN_LAYERS.sync();assert.deepEqual(items(),renamed);get('floors').replaceChildren();w.KERN_LAYERS.sync();assert(check('L0').checked);assert(get('floors').querySelector('[data-floor-row="L1"]'));
 console.log('PASS stable layer/floor DOM, normalized disabled attributes, authoritative checkbox state, real content invalidation and external replacement recovery');
}finally{t.close();}
