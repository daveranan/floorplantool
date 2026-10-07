/* Maximum open passages. Pure proposals; callers own history and editing scope. */
(function(root){'use strict';
const EPS=1e-6,GAP=.050001;
const shapes=()=>root.KERN_SHAPES||(typeof require==='function'?require('./room-shapes.js'):null);
const walls=()=>root.KERN_WALL_EDGES||(typeof require==='function'?require('./wall-edges.js'):null);
const connections=()=>root.KERN_CONNECTIONS||(typeof require==='function'?require('./geometry.js'):null);
const fail=reason=>({valid:false,reason});
const sameLine=(a,b)=>Math.abs(a.u[0]*b.u[1]-a.u[1]*b.u[0])<EPS&&Math.abs(a.fixed-b.fixed)<1e-5;
const lower=(r,f)=>r.z??f.z??0;
const upper=(r,f)=>lower(r,f)+(r.height??f.clearHeight??3);
const clamp=(n,lo,hi)=>Math.max(lo,Math.min(hi,n));
function cut(spans,lo,hi){return spans.flatMap(s=>hi<=s.lo+EPS||lo>=s.hi-EPS?[s]:[{...s,hi:Math.min(s.hi,lo)},{...s,lo:Math.max(s.lo,hi)}].filter(q=>q.hi-q.lo>EPS));}
function lineFrame(g){if(g.u)return g;const u=g.axis==='h'?[1,0]:[0,1];return{...g,u,n:[-u[1],u[0]],fixed:g.axis==='h'?g.fixed:-g.fixed};}
function crossed(g,start,p){if(!start)return false;const da=start.x*g.n[0]+start.y*g.n[1]-g.fixed,db=p.x*g.n[0]+p.y*g.n[1]-g.fixed;if(Math.abs(da-db)<EPS)return false;const t=da/(da-db),x=start.x+(p.x-start.x)*t,y=start.y+(p.y-start.y)*t,u=x*g.u[0]+y*g.u[1];return t>=-EPS&&t<=1+EPS&&u>=g.lo-EPS&&u<=g.hi+EPS;}
function sharedSpans(a,b,f){
 const S=shapes(),pair=S.nestedPair(a,b,f);
 if(pair)return{a:pair.inner,b:pair.outer,spans:S.nestedWalls(pair.inner,pair.outer,f)};
 if(S.enclosedRoom(a)&&S.enclosedRoom(b)&&(S.encloses(a,b)||S.encloses(b,a)))return{a,b,spans:[]};
 const spans=[];
 for(const e of S.edges(a)){if(e.curved)continue;for(const other of S.edges(b)){if(other.curved)continue;const g=S.overlap(e,other);if(g)spans.push({...g,edge:e.id});}}
 // A straight wall remains one boundary when its polygon contains collinear vertices.
 const merged=[];
 for(const g of spans.sort((x,y)=>x.lo-y.lo)){const prior=merged.find(q=>sameLine(q,g)&&g.lo<=q.hi+EPS&&g.hi>=q.lo-EPS);if(prior){prior.lo=Math.min(prior.lo,g.lo);prior.hi=Math.max(prior.hi,g.hi);}else merged.push({...g});}
 return{a,b,spans:merged};
}
function profileSpans(g,ranges,z,top){
 const W=walls(),sections=W.sections({...g,start:g.lo,end:g.hi,z,height:top-z},ranges,g.lo,g.hi,z,top),xs=[...new Set([g.lo,g.hi,...sections.flatMap(s=>[s.lo,s.hi])])].sort((a,b)=>a-b),out=[];
 for(let i=1;i<xs.length;i++){
  const lo=xs[i-1],hi=xs[i],mid=(lo+hi)/2;
  if(hi-lo<EPS)continue;
  const vertical=sections.filter(s=>s.lo<mid&&s.hi>mid).sort((a,b)=>a.z-b.z);let cap=z;
  for(const s of vertical){if(s.z>cap+EPS)break;if(s.z+s.height>cap)cap=s.z+s.height;}
  if(cap-z>EPS)out.push({lo,hi,height:cap-z});
 }
 return out;
}
function join(spans){const out=[];for(const s of spans.sort((a,b)=>a.lo-b.lo)){const p=out.at(-1);if(p&&Math.abs(p.hi-s.lo)<EPS){p.hi=s.hi;p.height=Math.min(p.height,s.height);}else out.push({...s});}return out;}
function candidate(plan,fid,source,target,p,options={}){
 const f=plan?.floors?.[fid],S=shapes(),W=walls(),C=connections();
 if(!f||!S||!W)return fail('Choose an existing floor');
 if(!p||!Number.isFinite(p.x)||!Number.isFinite(p.y))return fail('Point at the shared wall');
 let a=f.rooms.find(r=>r.id===(typeof source==='string'?source:source?.id)),b=f.rooms.find(r=>r.id===(typeof target==='string'?target:target?.id));
 if(!a||!b||a.id===b.id)return fail('Maximum passage: choose two different rooms sharing a wall');
 if([a,b].some(r=>['solid','void'].includes(r.type)||r.routeStair||r.stairTransition))return fail('Choose two circulation rooms with a shared wall');
 if(C.all(f).length>=600)return fail('This floor has reached 600 connections');
 if(options.canEdit&&(!options.canEdit(a,fid)||!options.canEdit(b,fid)))return fail('Show and unlock both rooms on an editable floor first');
 const z=Math.max(lower(a,f),lower(b,f)),top=Math.min(upper(a,f),upper(b,f));
 if(!Number.isFinite(z)||!Number.isFinite(top)||top-z<=EPS)return fail('These rooms do not share a wall at the same height');
 const shared=sharedSpans(a,b,f);a=shared.a;b=shared.b;
 const distance=g=>S.project(p,{a:S.at(g,g.lo),b:S.at(g,g.hi)}).distance;
 const candidates=shared.spans.filter(g=>!options.edge||g.edge===options.edge).sort((x,y)=>Number(crossed(y,options.start,p))-Number(crossed(x,options.start,p))||distance(x)-distance(y));
 const chosen=candidates[0];if(!chosen)return fail('These rooms must share a straight wall');
 const door={id:options.id||'maximum-passage',a:a.id,b:b.id,edge:chosen.edge,kind:'open',maximumPassage:true,fullWidth:false,width:.5,offset:.5,height:top-z};
 const edge=S.edges(a).find(e=>e.id===chosen.edge),host=edge&&S.line(edge);
 if(host){for(let i=0;i<S.edges(a).length;i++)for(const e of S.edges(a)){if(e.curved)continue;const q=S.line(e);if(sameLine(q,host)&&q.lo<=host.hi+EPS&&q.hi>=host.lo-EPS){host.lo=Math.min(host.lo,q.lo);host.hi=Math.max(host.hi,q.hi);}}door.maximumWallOffset=clamp(((chosen.lo+chosen.hi)/2-host.lo)/(host.hi-host.lo),0,1);}
 const base=S.wall(door,f);if(!base||!sameLine(base,chosen))return fail('The selected shared wall is unavailable');
 const span={...chosen,lo:Math.max(chosen.lo,base.lo),hi:Math.min(chosen.hi,base.hi)};
 const ranges=W.profile(plan),owned=ranges.filter(r=>r.floor===fid&&(r.room===a.id||r.room===b.id)),other=ranges.filter(r=>(r.floor!==fid||r.room!==a.id&&r.room!==b.id)&&sameLine(r,span));
 let available=profileSpans(span,owned,z,top);
 // Never let a newly authored passage cut another room's coincident wall.
 available=available.flatMap(s=>{let parts=[s];for(const r of other)if(r.z<z+s.height-EPS&&r.top>z+EPS)parts=cut(parts,r.lo,r.hi);return parts;});
 for(const existing of C.all(f)){
  const g=S.opening(existing,f);if(!g)continue;
  for(const part of g.segments||[g]){const q=lineFrame(part);if(sameLine(q,span))available=cut(available,q.start-GAP,q.end+GAP);}
 }
 const free=join(available),complete=free.find(s=>s.lo<=base.lo+EPS&&s.hi>=base.hi-EPS);
 let best;
 if(complete){best={...complete,lo:base.lo,hi:base.hi};door.fullWidth=true;}
 else{
  const finite=free.map(s=>({...s,lo:Math.max(s.lo,base.lo+.1),hi:Math.min(s.hi,base.hi-.1)})).filter(s=>s.hi-s.lo>=.5-EPS);
  finite.sort((x,y)=>(y.hi-y.lo)-(x.hi-x.lo)||y.height-x.height||Math.abs((x.lo+x.hi)/2-(p.x*span.u[0]+p.y*span.u[1]))-Math.abs((y.lo+y.hi)/2-(p.x*span.u[0]+p.y*span.u[1])));
  best=finite[0];
 }
 if(!best||best.hi-best.lo<.5-EPS)return fail(free.length?'No clear shared wall span is wide enough for a passage':'This shared edge is already open or occupied by another opening');
 door.width=best.hi-best.lo;door.height=best.height;
 const travel=base.hi-base.lo-door.width-.2;
 door.offset=door.fullWidth||travel<=EPS?.5:clamp((best.lo-base.lo-.1)/travel,0,1);
 const geometry=S.opening(door,f);
 if(!geometry||Math.abs(geometry.start-best.lo)>1e-5||Math.abs(geometry.end-best.hi)>1e-5)return fail('The maximum passage does not fit this shared straight wall');
 return{valid:true,door,geometry:{...geometry,z,height:best.height},z,fid,maximumPassage:true,summary:'Maximum passage · '+door.width.toFixed(2)+' × '+door.height.toFixed(2)+' m · no door'};
}
const api={candidate,sharedSpans};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.KERN_MAX_PASSAGES=api;
})(typeof window!=='undefined'?window:globalThis);
