'use strict';
const assert=require('node:assert/strict'),{boot}=require('./test-production-support.cjs');
const t=boot(),{w,get,run}=t;w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
const saved=()=>run('JSON.stringify(model)'),stops=()=>JSON.parse(run('JSON.stringify(KERN_STAIR_DETAIL.build(model,"L0","offset-stair").stops.map(s=>s.z))'));
const storage=()=>Object.fromEntries(Array.from({length:w.localStorage.length},(_,i)=>{const k=w.localStorage.key(i);return[k,w.localStorage.getItem(k)]}));
try{
 run(`resetTransient(true);model={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,rooms:[],doors:[],entrances:[]},L1:{name:'Upper',z:6,rooms:[],doors:[],entrances:[]}},verticalConnections:[{id:'offset-stack',type:'stair',room:'offset-stair',floors:['L0','L1'],runAxis:'y',landingEnd:'north'}]};for(const [id,f]of Object.entries(model.floors)){f.rooms.push({id:'offset-stair',name:'Stairs',type:'core',x:0,y:0,w:4,h:9,runAxis:'y',landingEnd:'north',stairTransition:true,stairStackId:'offset-stack',editGroup:'offset-stack'},{id:'approach',name:'Approach',type:'tech',x:0,y:-4,w:4,h:4,z:f.z+(id==='L0'?.75:-.5)});f.doors.push({id:'entry-'+id,a:'offset-stair',b:'approach',width:1.2,kind:'door',offset:.5});}floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true,L1:false}};history=[];future=[];setSelection({rooms:['approach']});render();save();`);
 assert.deepEqual(stops(),[.75,5.5]);const initial=saved();
 const input=get('contextroomoffset');input.value='-1.25';input.dispatchEvent(new w.Event('change',{bubbles:true}));assert.deepEqual(stops(),[-1.25,5.5]);assert.equal(run('history.length'),1);assert.equal(run('model.floors.L0.rooms[0].z'),undefined);const changed=saved();
 run('undo()');assert.equal(saved(),initial);assert.deepEqual(stops(),[.75,5.5]);run('redo()');assert.equal(saved(),changed);
 run('setSelection({rooms:["offset-stair"]});render()');assert.equal(get('contextroomz').value,'-1.25');assert.equal(get('contextroomoffset').value,'-1.25');assert(get('contextroomz').disabled);assert.match(get('elevationcontext').textContent,/follows the connected room/);assert.equal(saved(),changed,'inspection cannot rewrite the stair datum');
 w.KERN_LAYERS.selectFloor('L1');run('setSelection({rooms:["offset-stair"]});render()');assert.equal(get('contextroomz').value,'5.5');assert.equal(get('contextroomoffset').value,'-0.5');
 const scene=w.BuildingPreviewGeometry.build(run('model'),w.KERN_STAIR_DETAIL);assert.equal(scene.levels.find(l=>l.id==='L1').rooms.find(r=>r.id==='offset-stair').z,5.5);assert.equal(saved(),changed);
 run('save();validateImport(model)');const reload=boot(storage());try{assert.equal(reload.run('model.floors.L0.rooms[0].z'),undefined);assert.equal(reload.run('model.floors.L0.rooms[1].z'),-1.25);assert.equal(reload.run('KERN_STAIR_DETAIL.build(model,"L1","offset-stair").stops[1].z'),5.5);}finally{reload.close();}
 // Older saved conventional shafts omit stairTransition; valid derived access
 // must not retain contradictory generic height/door warnings.
 run('for(const f of Object.values(model.floors))delete f.rooms[0].stairTransition;render()');
 assert(!run('checks().some(x=>x.text.startsWith("Level change needs stairs:"))'));
 assert(!run('KERN_HEIGHTS.analyze(model).some(x=>x.text.startsWith("Door threshold between"))'));
 run('model.floors.L1.doors[0].offset=0;model.floors.L1.doors[0].width=3.8;render()');
 assert(run('checks().some(x=>x.kind==="stair"&&x.code==="door-landing")'),'Invalid landing contact still reports a real stair problem');
 assert(run('KERN_HEIGHTS.analyze(model).some(x=>x.text.startsWith("Door threshold between"))'),'Invalid landing contact retains threshold warning');
 const imported=JSON.parse(changed);w.validateImport(imported);assert.equal(w.KERN_STAIR_DETAIL.build(imported,'L0','offset-stair').stops[0].z,-1.25);
 console.log('PASS full-production room offset edit, derived stair inspector/scene datum, atomic undo/redo, unchanged shaft data, controller navigation, save/reload/import');
}finally{t.close();}
