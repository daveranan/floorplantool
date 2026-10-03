const assert=require('node:assert/strict'),{boot}=require('./test-production-support.cjs');
const t=boot(),{w,run,get}=t;const copy=x=>JSON.parse(JSON.stringify(x));
try{
 w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));w.KERN_LAYERS.selectFloor('L0');
 let stairBuilds=0,heightChecks=0;const oldStair=w.KERN_STAIR_DETAIL.build,oldHeight=w.KERN_HEIGHTS.analyze;
 w.KERN_STAIR_DETAIL.build=function(...args){stairBuilds++;return oldStair(...args);};w.KERN_HEIGHTS.analyze=function(...args){heightChecks++;return oldHeight(...args);};
 const initial=run('JSON.stringify(model)');run('render()');const firstBuilds=stairBuilds,firstChecks=heightChecks;assert(firstBuilds>0);assert.equal(firstChecks,1);
 run('render();checks();draw()');assert.equal(stairBuilds,firstBuilds,'Unchanged draws/checks reuse the pure stair results');assert.equal(heightChecks,firstChecks);assert.equal(run('JSON.stringify(model)'),initial);
 function freshEquivalent(){const expected=run('JSON.stringify(checks())');w.KERN_RENDER_CACHE.clear();assert.equal(run('JSON.stringify(checks())'),expected,'Cached warnings equal a fresh full calculation');}
 const findings=run('checks()'),snapshot=JSON.stringify(findings);for(const issue of findings){if(issue.floors)issue.floors.push('foreign');if(issue.rooms)issue.rooms.length=0;if(issue.region)issue.region.x=999;}assert.equal(run('JSON.stringify(checks())'),snapshot,'Returned nested findings cannot mutate the cached diagnostics');
 const external=run('clone(floor())');external.rooms=[{id:'one',name:'One',type:'tech',x:0,y:0,w:5,h:5},{id:'two',name:'Two',type:'tech',x:4,y:4,w:5,h:5}];external.doors=[];external.entrances=[];w.__perfExternal=external;assert(run('checks(window.__perfExternal).some(x=>x.kind==="overlap")'));external.rooms[1].x=10;assert(!run('checks(window.__perfExternal).some(x=>x.kind==="overlap")'),'Caller-owned floor arguments bypass model-snapshot caches');delete w.__perfExternal;
 const id=run('floor().rooms.find(r=>canEdit(r)&&!isStair(r)&&!sourceFor(r)&&!isSourceRoom(r)).id');
 const before=run('JSON.stringify(model)');run(`commit(()=>{room(${JSON.stringify(id)}).height=6;});`);assert(heightChecks>firstChecks);freshEquivalent();
 const changed=run('JSON.stringify(model)');run('undo()');assert.equal(run('JSON.stringify(model)'),before);freshEquivalent();run('redo()');assert.equal(run('JSON.stringify(model)'),changed);freshEquivalent();
 // Repeated in-place previews are not saved, yet every next draw/check must see
 // their actual content. Cancellation restores the prior model and warnings.
 run(`setSelection({rooms:[${JSON.stringify(id)}]});render();`);const saved=run('JSON.stringify(model)');
 for(let i=0;i<12;i++){run(`room(${JSON.stringify(id)}).w+=.01;draw();`);freshEquivalent();}
 run(`model=JSON.parse(${JSON.stringify(saved)});render();`);freshEquivalent();assert.equal(run('JSON.stringify(model)'),saved);
 // Other-floor geometry/height and linked stair changes affect current checks.
 const upper=run('Object.keys(model.floors).find(id=>id!==floorId)');run(`model.floors[${JSON.stringify(upper)}].z+=.25;render();`);freshEquivalent();
 run(`model.floors[${JSON.stringify(upper)}].rooms[0].height=12;render();`);freshEquivalent();
 const count=heightChecks;run('zoom=2;draw();pan.x+=1;draw();render()');assert.equal(heightChecks,count,'Camera-only changes do not recompute height rules');
 // Hidden-floor copies must not contaminate actual geometry/diagnostic caches.
 w.KERN_LAYERS.toggleObject('rooms',id,'hidden','L0');assert(!get('plan').querySelector('[data-room="'+id+'"]'));freshEquivalent();w.KERN_LAYERS.toggleObject('rooms',id,'hidden','L0');assert(get('plan').querySelector('[data-room="'+id+'"]'));freshEquivalent();
 const patternCount=get('plan').querySelectorAll('pattern').length,defsCount=get('plan').querySelectorAll('defs').length;
 for(let i=0;i<10;i++)run('render()');assert.equal(get('plan').querySelectorAll('pattern').length,patternCount);assert.equal(get('plan').querySelectorAll('defs').length,defsCount);
 // The current complete validator is used by persistence once, including late
 // validation wrappers. Failure retains prior verified browser contents.
 const stored=w.localStorage.getItem('kern-buildings-v1');run('const perfOriginalValidator=validateImport;let perfValidationCalls=0;validateImport=function(p){perfValidationCalls++;if(p===model)throw Error("blocked test save");return perfOriginalValidator(p)};');assert.equal(run('save()'),false);assert.equal(w.localStorage.getItem('kern-buildings-v1'),stored);assert.equal(run('perfValidationCalls'),1);run('validateImport=perfOriginalValidator;');
 // Platform containment is at most once per room in one height analysis.
 const host=w.KERN_PLATFORMS.hosts;let hosts=0;w.KERN_PLATFORMS.hosts=function(...args){hosts++;return host(...args);};oldHeight(run('model'));assert(hosts<=run('Object.values(model.floors).reduce((n,f)=>n+f.rooms.length,0)'));w.KERN_PLATFORMS.hosts=host;
 console.log('PASS render performance: bounded snapshot reuse, in-place previews, cancel/undo/redo, cross-floor invalidation, camera reuse, hidden layers, exact warnings, stable SVG definitions, latest validator and per-room containment');
}finally{t.close();}
