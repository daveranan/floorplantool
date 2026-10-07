/* Reuse pure plan calculations within a synchronous drawing/check snapshot. */
(function(){'use strict';
let active=null,last=null;
function entry(plan){return{plan,stairs:new Map(),overlaps:new WeakMap(),checks:new WeakMap(),derived:new WeakMap()};}
function cache(){if(!active)return null;if(model===active.plan)return active;let value=active.derived.get(model);if(!value){value=entry(model);active.derived.set(model,value);}return value;}
const currentFloor=f=>Object.values(model.floors).includes(f),copy=value=>Array.isArray(value)?value.map(copy):value&&typeof value==='object'?Object.fromEntries(Object.entries(value).map(([key,item])=>[key,copy(item)])):value;
function snapshot(fn,args){if(active)return fn(...args);const signature=JSON.stringify(model),engines=[...Object.values(window.KERN_SHAPES.clip),window.KERN_STAIR_DETAIL?.build,window.KERN_HEIGHTS?.analyze];if(!last||last.plan!==model||last.signature!==signature||engines.some((engine,i)=>engine!==last.engines[i]))last={...entry(model),signature,engines};active=last;try{return fn(...args);}finally{active=null;}}
// A new frame compares actual content, not only object identity or Save state:
// in-place pointer previews, cancel, undo/import, room offsets, linked stairs and
// edits to other floors all invalidate before their next draw or check.
const oldStair=stairDetail;stairDetail=function(r,fid=floorId){const c=cache();if(!c||!r)return oldStair(r,fid);const key=fid+'\u0000'+r.id;if(!c.stairs.has(key))c.stairs.set(key,oldStair(r,fid));return c.stairs.get(key);};
const oldOverlap=overlapRegions;overlapRegions=function(f=floor()){const c=cache();if(!c||!currentFloor(f))return oldOverlap(f);if(!c.overlaps.has(f))c.overlaps.set(f,oldOverlap(f));return c.overlaps.get(f);};
const oldChecks=checks;checks=function(f=floor()){if(!currentFloor(f))return oldChecks(f);return snapshot(()=>{const c=cache();if(!c.checks.has(f))c.checks.set(f,oldChecks(f));return copy(c.checks.get(f));},[]);};
const oldRender=render,oldDraw=draw;render=function(...args){return snapshot(oldRender,args);};draw=function(...args){return snapshot(oldDraw,args);};
window.KERN_RENDER_CACHE={clear(){last=null;}};
})();
