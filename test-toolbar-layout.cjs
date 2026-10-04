/* Production-order chrome checks. Real Three camera math; WebGL drawing is mocked. */
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),esbuild=require('esbuild'),{boot}=require('./test-production-support.cjs');
const source=fs.readFileSync('src/preview3d.js','utf8').replace('new THREE.WebGLRenderer(','new window.__TestRenderer(');
const bundle=esbuild.buildSync({stdin:{contents:source,resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2020'}).outputFiles[0].text;
const t=boot(),{w,get,run,doc}=t;
let current,checks=0;
const tick=()=>new Promise(resolve=>setTimeout(resolve,10));
const key=(node,key,extra={})=>{const e=new w.KeyboardEvent('keydown',{key,bubbles:true,cancelable:true,...extra});node.dispatchEvent(e);return e;};
const check=(name,fn)=>{fn();checks++;console.log('PASS '+name);};
const percent=()=>parseFloat(get('fit').textContent);
const motion={matches:true,addEventListener(){},removeEventListener(){}};w.matchMedia=()=>motion;
w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},strokeRect(){},fillText(){},measureText:s=>({width:s.length*20})});
w.HTMLCanvasElement.prototype.getBoundingClientRect=()=>({left:0,top:0,width:900,height:650});
w.HTMLCanvasElement.prototype.setPointerCapture=()=>{};w.HTMLCanvasElement.prototype.hasPointerCapture=()=>false;w.HTMLCanvasElement.prototype.releasePointerCapture=()=>{};
w.ResizeObserver=class{constructor(fn){this.fn=fn}observe(){this.fn()}disconnect(){}};
w.__TestRenderer=class{constructor(){this.domElement=doc.createElement('canvas');Object.defineProperties(this.domElement,{clientWidth:{value:900},clientHeight:{value:650}})}setPixelRatio(){}setClearColor(){}setSize(){}setAnimationLoop(fn){this.loop=fn;if(fn)fn()}render(scene,camera){scene.updateMatrixWorld(true);current={scene,camera,renderer:this}}dispose(){}forceContextLoss(){}};
vm.runInContext(bundle,t.dom.getInternalVMContext());
Object.defineProperties(get('threeviewport'),{clientWidth:{value:900},clientHeight:{value:650}});
w.KERN_WORKSPACE.openBuilding(run('currentBuilding().id'));
run(`resetTransient(true);model={version:1,units:'metres',floors:{L0:{name:'Ground',z:0,rooms:[{id:'a',name:'A',type:'tech',x:0,y:0,w:8,h:8},{id:'b',name:'B',type:'tech',x:8,y:0,w:8,h:8}],doors:[],entrances:['a']},L1:{name:'Upper',z:4,rooms:[{id:'c',name:'C',type:'tech',x:0,y:0,w:8,h:8}],doors:[],entrances:[]}}};floorId='L0';currentBuilding().view.layers={editFloors:['L0'],visible:{L0:true,L1:true}};setSelection();history=[];future=[];render();save();`);
const header=get('inspector-toolbar'),modes=doc.querySelector('.viewmode'),state=()=>run('JSON.stringify({model,history,future})');
const before=state();
check('one stable inspector header, no toolbar duplicates, building name above floors',()=>{
 assert.equal(get('inspectorpanel').firstElementChild,header);assert(header.contains(modes));assert(header.contains(get('fit')));assert(header.contains(get('viewmenu')));
 assert(!doc.querySelector('.viewtools .viewmode'));assert(!doc.querySelector('.viewtools #fit'));assert(!get('filemenu'));assert.equal(doc.querySelectorAll('#fit').length,1);
 assert(doc.querySelector('.floor-sidebar').contains(get('workspace-editor-title')));assert(get('workspace-editor-title').contains(get('buildingmenu')));
 assert(!get('workspace-building-title').textContent.match(/^\s*$/));
});
check('all existing file, building, backup and View actions remain unique and reachable',()=>{
 for(const id of ['export','backupall','import','pngexport','stackpngexport','svgexport','geometryexport','archive','showversionhistory','local-files-menu','renamebuilding','workspace-move-building'])assert(get('buildingmenu').contains(get(id)),id);
 for(const id of ['theme','snapsize','newconnectiontype','opencommands','opennotes','openchecks','openstack','belowtoggle','dimensions','outerdimensions','help','zoomin','zoomout','zoom-fit'])assert(get('viewmenu').contains(get(id)),id);
 for(const id of ['mode2d','mode3d','walkmode','flymode'])assert(modes.contains(get(id)));
 assert(get('commands').hidden);assert(!doc.querySelector('.viewtools #zoomin'));assert(!doc.querySelector('.viewtools #zoomout'));
});
check('native Space/Enter and authoring letters on chrome cannot pan, rotate or delete',()=>{
 for(const id of ['mode2d','mode3d','fit']){get(id).focus();assert.equal(key(get(id),' ').defaultPrevented,false);assert.equal(key(get(id),'Enter').defaultPrevented,false);key(get(id),'e');key(get(id),'Delete');assert.equal(run('spaceHeld'),false);assert.equal(run('tool'),'select');}
 for(const id of ['buildingmenu','viewmenu']){const summary=get(id).querySelector('summary');summary.focus();key(summary,'e');assert.equal(run('tool'),'select');}
 assert.equal(state(),before);
});
check('percentage tracks 2D direct/wheel camera changes and click fits without model edits',()=>{
 get('fit').click();assert.equal(percent(),100);get('zoomin').click();assert.equal(percent(),125);get('zoomout').click();assert.equal(percent(),100);
 run('zoom=2.375;draw()');assert.equal(percent(),238);get('plan').dispatchEvent(new w.WheelEvent('wheel',{deltaY:-100,clientX:450,clientY:325,bubbles:true,cancelable:true}));assert.equal(percent(),Math.round(run('zoom')*100));
 get('fit').click();assert.equal(percent(),100);assert.equal(run('zoom'),1);assert.equal(state(),before);
});
(async()=>{try{
 for(const id of ['buildingmenu','viewmenu']){
  const menu=get(id),summary=menu.querySelector('summary');menu.open=true;summary.focus();await tick();
  check(id+' arrows/Home/End/Escape retain native menu focus',()=>{key(summary,'ArrowDown');assert(menu.contains(doc.activeElement));assert.notEqual(doc.activeElement,summary);key(doc.activeElement,'End');assert(menu.contains(doc.activeElement));key(doc.activeElement,'Home');assert(menu.contains(doc.activeElement));key(doc.activeElement,'Escape');assert(!menu.open);assert.equal(doc.activeElement,summary);});
 }
 get('viewmenu').open=true;get('theme').focus();await tick();
 check('theme select keeps focus and menu open while changing native selection',()=>{get('theme').value='dark';get('theme').dispatchEvent(new w.Event('change',{bubbles:true}));assert.equal(doc.activeElement,get('theme'));assert(get('viewmenu').open);assert.equal(key(get('theme'),'ArrowDown').defaultPrevented,false);});
 get('plan').dispatchEvent(new w.MouseEvent('pointerdown',{bubbles:true,button:2}));assert(!get('viewmenu').open);checks++;
 get('buildingmenu').open=true;await tick();get('viewmenu').open=true;await tick();check('opening the other menu dismisses first',()=>{assert(!get('buildingmenu').open);assert(get('viewmenu').open);});
 get('viewmenu').open=true;doc.documentElement.dataset.inputMode='pointer';get('viewmenu').querySelector('summary').focus();key(doc.activeElement,'End');check('pointer-opened View switches to keyboard modality before menu activation',()=>{assert.equal(doc.activeElement,get('help'));assert.equal(doc.documentElement.dataset.inputMode,'keyboard');get('help').click();get('closehelp').click();assert.equal(doc.activeElement,get('viewmenu').querySelector('summary'));});
 for(const id of ['help','opencommands']){get('viewmenu').open=true;get(id).focus();doc.documentElement.dataset.inputMode='keyboard';get(id).click();get(id==='help'?'closehelp':'closecommands').click();check(id+' restores focus to View chevron after closing',()=>{assert(!get('viewmenu').open);assert.equal(doc.activeElement,get('viewmenu').querySelector('summary'));});}
 get('viewmenu').open=false;run("setSelection({rooms:['a']});render()");const draft=get('inspector').querySelector('[data-key=name]');draft.focus();draft.value='Uncommitted';key(draft,'/',{code:'Slash',ctrlKey:true});assert(get('commanddialog').open);key(get('commandsearch'),'Escape');check('command search preserves inspector draft and focus',()=>{assert.equal(doc.activeElement.value,'Uncommitted');assert.equal(run("room('a').name"),'A');assert.equal(get('inspectorpanel').firstElementChild,header);});
 run("setSelection({rooms:['a','b']});render()");check('multi-selection keeps modes above bulk inspector',()=>{assert.equal(get('inspectorpanel').firstElementChild,header);assert.equal(doc.querySelector('.viewmode'),modes);assert(get('inspector').querySelector('[data-bulk-property]'));});
 get('collapseinspector').click();await tick();check('collapsed inspector keeps permanent modes and toggles back',()=>{assert(doc.body.classList.contains('inspector-collapsed'));assert.equal(get('collapseinspector').getAttribute('aria-expanded'),'false');assert.equal(header.hidden,false);get('collapseinspector').click();assert(!doc.body.classList.contains('inspector-collapsed'));});
 const B=w.BuildingExports;await B.openThree();let view=B.getViewer();assert(view);current.renderer.loop();
 check('real 3D camera fit and magnification update, preserving authored data',()=>{get('fit').click();current.renderer.loop();assert.equal(percent(),100);view.zoomBy(.5);current.renderer.loop();assert.equal(percent(),200);get('zoomout').click();current.renderer.loop();assert.equal(percent(),167);assert.equal(state(),before);assert.equal(get('inspectorpanel').firstElementChild,header);});
 const pose=view.getViewState();view.restoreViewState({...pose,position:pose.position.map((v,i)=>pose.target[i]+(v-pose.target[i])*2)});current.renderer.loop();check('restored 3D camera and selection framing notify percentage',()=>{assert.equal(percent(),83);view.frameSelection();current.renderer.loop();assert.equal(percent(),Math.round(view.getZoom()*100));});
 check('animated fit reports the in-between percentage and exact final fit',()=>{
  const realNow=w.performance.now.bind(w.performance);let now=realNow();w.performance.now=()=>now;motion.matches=false;view.fit(false,false);view.zoomBy(.5);current.renderer.loop();assert.equal(percent(),200);get('fit').click();assert.equal(percent(),200);now+=210;current.renderer.loop();assert(percent()>100&&percent()<200);now+=220;current.renderer.loop();assert.equal(percent(),100);motion.matches=true;w.performance.now=realNow;
 });
 run("setTool('draw')");get('viewmenu').open=true;const summary=get('viewmenu').querySelector('summary');summary.focus();key(summary,'Escape');check('Escape closes View before 3D authoring cancellation',()=>{assert(!get('viewmenu').open);assert.equal(run('tool'),'draw');assert.equal(doc.activeElement,summary);});run("setTool('select')");
 get('viewmenu').open=true;get('theme').focus();run('render()');await tick();view=B.getViewer();check('3D rebuild never steals focus from open selector',()=>{assert.equal(doc.activeElement,get('theme'));assert(get('viewmenu').open);});get('viewmenu').open=false;
 await w.KERN_EXPLORER.start();await tick();current.renderer.loop();check('Walk keeps stable modes and lens percent; click percentage exits and fits',()=>{assert(w.KERN_EXPLORER.active);assert.equal(get('walkmode').getAttribute('aria-pressed'),'true');assert.equal(percent(),100);assert(get('zoomin').disabled);get('mode3d').focus();assert.equal(key(get('mode3d'),'Tab').defaultPrevented,false);assert(!w.KERN_EXPLORER.flying);const up=new w.KeyboardEvent('keyup',{key:' ',bubbles:true,cancelable:true});get('mode3d').dispatchEvent(up);assert.equal(up.defaultPrevented,false);get('fit').click();current.renderer.loop();assert(!w.KERN_EXPLORER.active);assert.equal(percent(),100);assert.equal(get('mode3d').getAttribute('aria-pressed'),'true');});
 await w.KERN_EXPLORER.fly();await tick();current.renderer.loop();check('Fly uses actual camera FOV percentage and Fit restores orbit',()=>{assert(w.KERN_EXPLORER.flying);assert.equal(get('flymode').getAttribute('aria-pressed'),'true');assert.equal(percent(),Math.round(B.getViewer().getZoom()*100));get('fit').click();current.renderer.loop();assert(!w.KERN_EXPLORER.active);assert.equal(percent(),100);});
 current.renderer.domElement.dispatchEvent(new w.Event('webglcontextlost',{cancelable:true}));check('context loss clears stale zoom and disables Fit/zoom',()=>{assert.equal(B.getViewer(),null);assert.equal(get('fit').textContent,'—');assert(get('fit').disabled);assert(get('zoomin').disabled);assert(get('zoomout').disabled);});
 await B.setWorkspaceMode('2d');check('2D roundtrip restores percent and permanent controls',()=>{assert.equal(percent(),100);assert.equal(get('mode2d').getAttribute('aria-pressed'),'true');assert.equal(get('inspectorpanel').firstElementChild,header);assert.equal(state(),before);});
 const css=fs.readFileSync('dist/toolbar-layout.css','utf8');
 check('original segmented mode styling is preserved after relocation',()=>{const ui=fs.readFileSync('dist/ui.css','utf8');assert(ui.includes('.viewmode{display:flex;gap:1px;margin-left:7px;padding:2px;border:1px solid var(--line);border-radius:7px;background:var(--raised);flex:none}'));assert(ui.includes('.viewmode button{min-width:33px;min-height:28px;padding:4px 7px;border:0;background:transparent;font-size:12px}'));assert(!css.includes('.viewmode button'));assert(css.includes('.inspector-toolbar .viewmode{margin:0;min-width:0}'));});
 check('bounded menu and responsive collapsed-header layout rules are present',()=>{assert(css.includes('max-width:calc(100vw - 16px)'));assert(css.includes('grid-template-rows:118px minmax(0,1fr) 48px'));assert(css.includes('.inspector-collapsed #inspectorpanel>:not(.inspector-toolbar)'));assert(css.includes('@media(max-width:374px)'));assert.equal(css.split('{').length,css.split('}').length);});
 console.log(`${checks} toolbar layout checks passed. DOM/camera harness; native browser rendering not verified.`);
}finally{t.close();}})().catch(e=>{console.error(e);process.exitCode=1});
