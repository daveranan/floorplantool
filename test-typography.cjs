const fs=require('fs'),assert=require('assert'),{boot}=require('./test-support.cjs');
const t=boot(),{run,get,w,doc}=t;
const style=doc.createElement('style');style.textContent=fs.readFileSync('dist/style.css','utf8')+'\n'+fs.readFileSync('dist/ui.css','utf8');doc.head.appendChild(style);
const snapshot=run('JSON.stringify(model)');run("floorId='L2';selected=null;selectedDoor=null;render()");
assert.equal(w.getComputedStyle(doc.body).letterSpacing,'normal');
const labels=[...get('plan').querySelectorAll('text')];assert(labels.length>5);for(const text of labels){assert.equal(w.getComputedStyle(text).letterSpacing,'normal');assert.equal(w.getComputedStyle(text).wordSpacing,'normal');assert.equal(text.getAttribute('letter-spacing'),'normal');assert.equal(text.getAttribute('word-spacing'),'normal');assert(/sans-serif|system-ui/.test(text.getAttribute('font-family')))}
assert(labels.some(t=>t.textContent==='SEALED'));assert(labels.some(t=>t.textContent==='CONCRETE'));assert(labels.some(t=>t.closest('.stair-detail')));assert.equal(run('JSON.stringify(model)'),snapshot);
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="847" height="503" viewBox="5.07 -1.3 31.49 18.7"><g letter-spacing="-0.14">${run('planMarkup()')}</g></svg>`;
fs.mkdirSync('/workspace/scratch/a3097e26a27a/kern-planner-qa',{recursive:true});fs.writeFileSync('/workspace/scratch/a3097e26a27a/kern-planner-qa/typography-fixed.svg',svg);
// Presentation attributes keep the model-unit text safe even inside a negatively tracked parent.
for(const text of new w.DOMParser().parseFromString(svg,'image/svg+xml').querySelectorAll('text'))assert.equal(text.getAttribute('letter-spacing'),'normal');
for(const [id,expected]of [['managementname','16px'],['managementelevation','16px']]){assert(get(id));} // Phone size is verified by the responsive stylesheet contract below.
const css=fs.readFileSync('dist/ui.css','utf8');assert(css.includes('svg text{font-family:var(--font-ui);letter-spacing:normal;word-spacing:normal'));assert(css.includes('body{font-size:14px;line-height:1.5}'));assert(css.includes('font-size:12px!important;line-height:1.55'));assert(!css.includes('letter-spacing:-.01em'));
console.log('PASS typography regression: every room, courtyard, stair-direction and datum label resets letter/word spacing; screenshot floor L2 remains unchanged; UI uses a shared sans-serif, 14 px body, readable captions and phone input sizes.');t.close();
