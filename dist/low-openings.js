/* Opt-in low openings. Ordinary saved doors and passages keep their old meaning. */
(function(root){'use strict';
const DEFAULT_HEIGHT=1.4,DEFAULT_WIDTH=.8,STANDING=1.8,CROUCHED=1.23,RADIUS=.3,TOLERANCE=.04,EPS=1e-6;
const PRESETS=Object.freeze({'low-door':Object.freeze({label:'Low door · crouch',kind:'door'}),'low-passage':Object.freeze({label:'Low passage · crouch',kind:'open'})});
const isPreset=value=>Object.hasOwn(PRESETS,value);
const recognized=d=>isPreset(d?.openingPreset);
function valid(d){
 if(d?.openingPreset===undefined&&d?.limitedHeight===undefined)return true;
 if(!recognized(d)||d.maximumPassage!==undefined||!Number.isFinite(d.height)||d.height<.2||d.height>12||!Number.isFinite(d.width)||d.width<.5||d.width>8||d.wrap===true)return false;
 return d.openingPreset==='low-passage'?d.kind==='open'&&d.limitedHeight===true&&d.fullWidth===false&&d.leaves===undefined:d.kind==='door'&&(d.leaves===undefined||d.leaves===1)&&d.limitedHeight===undefined&&(d.fullWidth===undefined||d.fullWidth===false);
}
function validate(d){if(!valid(d))throw Error('Invalid low opening preset or clear height');}
function preset(d,value,options={}){
 if(!isPreset(value))throw Error('Unknown low opening preset');
 const out={...d,kind:PRESETS[value].kind,openingPreset:value,width:options.width??DEFAULT_WIDTH,height:options.height??DEFAULT_HEIGHT};
 for(const key of ['maximumPassage','maximumWallOffset','fullWidth','limitedHeight','leaves','wrap','sill','windowCount'])delete out[key];
 if(value==='low-passage'){out.limitedHeight=true;out.fullWidth=false;}else out.leaves=1;
 validate(out);return out;
}
const limited=d=>d?.kind==='open'&&d.limitedHeight===true&&d.openingPreset==='low-passage'&&valid(d);
function clearHeight(d,available,fallback=2.2){const maximum=Math.max(0,Number.isFinite(available)?available:0);return Math.max(0,Math.min(maximum,d.kind==='open'?(d.maximumPassage||limited(d)?d.height:maximum):Number.isFinite(d.height)?d.height:fallback));}
function dimensions(d,f){const a=f?.rooms?.find(r=>r.id===d.a),b=f?.rooms?.find(r=>r.id===d.b);if(!a)return null;const az=a.z??f.z??0,bz=b?(b.z??f.z??0):az,z=Math.max(az,bz),top=Math.min(az+(a.height??f.clearHeight??3),b?bz+(b.height??f.clearHeight??3):Infinity);return{z,height:clearHeight(d,top-z),width:d.width,elevationChange:Math.abs(az-bz)};}
function clearance(height,width){const narrow=!Number.isFinite(width)||width<=RADIUS*2+EPS,crouched=!narrow&&height+TOLERANCE>=CROUCHED-EPS,standing=!narrow&&height+TOLERANCE>=STANDING-EPS;return{crouched,standing,status:narrow?'too-narrow':!crouched?'too-low':standing?'standing':'crouch'};}
function describe(d,f){const m=dimensions(d,f);if(!m)return null;const fit=clearance(m.height,m.width),text=d.sealed||d.cemented?'This opening is sealed and blocks Walk.':fit.status==='too-narrow'?'Too narrow for Walk, including crouched.':fit.status==='too-low'?'Too low for crouched Walk.':fit.status==='standing'?'Tall enough for standing Walk.':'Crouch for this opening in Walk.';return{...m,...fit,text};}
function warnings(plan,fid){
 const C=root.KERN_CONNECTIONS||(typeof require==='function'?require('./geometry.js'):null),entries=Object.entries(plan?.floors||{}).filter(([id])=>fid===undefined||id===fid),low=entries.flatMap(([id,f])=>(C?.all(f)||f.doors||[]).filter(recognized).map(d=>({id,f,d})));
 if(!low.length)return[];
 const S=root.KERN_SHAPES||(typeof require==='function'?require('./room-shapes.js'):null),W=root.KERN_WALL_EDGES||(typeof require==='function'?require('./wall-edges.js'):null),ranges=W?.profile(plan)||[],out=[];
 for(const {id,f,d}of low){const m=describe(d,f);if(!m)continue;const label=d.label||d.id,add=(code,text)=>out.push({kind:'low-opening',code,doorId:d.id,floor:id,text:label+': '+text});
  if(m.status==='too-low'||m.status==='too-narrow')add(m.status,m.text);
  if(m.height<d.height-EPS)add('clipped-height','The adjoining rooms leave '+m.height.toFixed(2)+' m clear height, below the saved '+d.height.toFixed(2)+' m.');
  if(m.status==='standing')add('standing-clearance','This height allows standing Walk; lower it to require crouching.');
  if(m.elevationChange>.32+EPS)add('floor-step','The floor step exceeds Walk step height. Add a supported stair or ramp route.');
  const g=S?.opening(d,f);if(!g||m.status!=='crouch')continue;
  // A low mark on a Half/None wall cannot promise a crouch barrier: check the
  // actual wall band just above the opening, including both shared owners.
  const band=.02,sections=W?.sections({...g,z:m.z+m.height,height:band},ranges,g.start,g.end,m.z+m.height,m.z+m.height+band)||[],area=sections.reduce((sum,s)=>sum+(s.hi-s.lo)*s.height,0);
  if(area<(g.end-g.start)*band-EPS)add('open-above','The current wall is open above this opening. Standing may pass; use a full wall to require crouching.');
 }
 return out;
}
const api={DEFAULT_HEIGHT,DEFAULT_WIDTH,STANDING,CROUCHED,RADIUS,TOLERANCE,PRESETS,isPreset,recognized,valid,validate,preset,limited,clearHeight,dimensions,clearance,describe,warnings};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.KERN_LOW_OPENINGS=api;
})(typeof window!=='undefined'?window:globalThis);
