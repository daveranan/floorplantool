const assert=require('node:assert/strict'),raw=require('polygon-clipping'),S=require('./dist/room-shapes'),H=require('./dist/height-rules'),P=require('./dist/preview-geometry'),D=require('./dist/stair-detail'),{boot}=require('./test-production-support.cjs');
const copy=x=>JSON.parse(JSON.stringify(x));
// Independently generated small fixture: two rectangles share a rounded corner,
// but different edge lengths produce ulp differences in its tessellation.
const shape={vertices:[{id:'a',x:0,y:0,r:4},{id:'b',x:1,y:0},{id:'c',x:1,y:1},{id:'d',x:0,y:1}]};
const a={id:'lower',name:'Lower room',type:'tech',x:2.125,y:0,w:2,h:3.5,shape:copy(shape)},b={...copy(a),id:'upper',name:'Upper room',h:2.5};
const f=(z,r)=>({name:'Floor',z,clearHeight:3,rooms:[r],doors:[],entrances:[]});
const plan={version:1,units:'metres',floors:{L0:f(0,a),L1:f(2,b)}};
const before=JSON.stringify(plan),args=[S.multi(a),S.multi(b)],exact=JSON.stringify(args),area=g=>g.reduce((s,p)=>s+Math.abs(S.areaOf(p[0]))-p.slice(1).reduce((n,r)=>n+Math.abs(S.areaOf(r)),0),0);
assert.throws(()=>raw.intersection(...args),/SweepLine|ring|segment/,'Synthetic fixture reproduces the real library numerical failure');
const intersection=S.clip.intersection(...args),difference=S.clip.difference(...args);
assert(Math.abs(area(intersection)-S.area(b))<1e-8);
assert(Math.abs(area(intersection)+area(difference)-S.area(a))<1e-8,'Paired cap partition preserves area');
assert.equal(JSON.stringify(args),exact,'Retry never rounds caller geometry');
assert(H.analyze(plan).some(x=>x.kind==='height'&&!x.incomplete),'Recovered comparison reports the actual overlapping room heights');
const geometry=P.build(plan,D);assert.equal(geometry.levels.length,2);assert(geometry.levels.every(l=>l.polygons.length));assert.equal(JSON.stringify(plan),before);
// Ordinary operations retain exact output and each adapter retries only once.
const simple=[[[0,0],[4,0],[4,4],[0,4]]],hole=[[[1,1],[2,1],[2,2],[1,2]]];
for(const op of ['intersection','difference','union','xor']){
 assert.deepEqual(S.clip[op](simple,hole),raw[op](simple,hole));
 const original=raw[op];let calls=0;try{raw[op]=()=>{calls++;throw Error('simulated unrecoverable geometry')};assert.throws(()=>S.clip[op](simple,hole),/unrecoverable/);assert.equal(calls,2);}finally{raw[op]=original;}
}
const original=S.clip.intersection;try{S.clip.intersection=()=>{throw Error('unrecoverable')};const issues=H.analyze(plan);assert.equal(issues.length,1);assert.equal(issues[0].incomplete,true);assert.match(issues[0].text,/could not be completed.*conflict may still be present/);assert.deepEqual(issues[0].floors,['L0','L1']);}finally{S.clip.intersection=original;}
assert.equal(JSON.stringify(plan),before);
for(const invalid of ['bad','0',null,true,undefined,NaN])assert.throws(()=>S.clip.union([[[invalid,0],[1,0],[1,1],[0,1]]]),'Retry must not coerce invalid input coordinates');
const t=boot();try{
 t.run(`resetTransient(true);model=${JSON.stringify(plan)};floorId='L0';setSelection();render();`);
 assert(t.run('checks().some(x=>x.kind==="height"&&!x.incomplete)'));assert.equal(t.run('JSON.stringify(model)'),before);
 const original=t.w.KERN_SHAPES.clip.intersection;t.w.KERN_SHAPES.clip.intersection=()=>{throw Error('unrecoverable')};
 t.run('renderChecks()');assert(t.run('checks().some(x=>x.incomplete)'));assert.match(t.get('checks').textContent,/could not be completed/);
 t.w.KERN_HEIGHT_UI.open('L0');assert.match(t.get('heightconflicts').textContent,/could not be completed/);assert(!t.get('heightconflicts').textContent.includes('No occupied-floor height conflicts'));
 t.w.KERN_SHAPES.clip.intersection=original;assert.equal(t.run('JSON.stringify(model)'),before);
}finally{t.close();}
console.log('PASS clipping recovery: actual rounded-edge failure, exact ordinary operations, bounded immutable retries, cap area preservation, overlap warning, 2D checks and height dialog survive unrecoverable comparisons');
