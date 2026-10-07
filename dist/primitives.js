/* Independent, floor-owned blockout objects. z is relative to the owning floor.
 * x/y are the unrotated footprint origin; all rotations are around the solid's
 * centre. No room geometry, topology, circulation or lighting is inferred. */
(function(root){
'use strict';
const types=['cube','cylinder','sphere','hemisphere'],labels={cube:'Cube',cylinder:'Cylinder',sphere:'Sphere',hemisphere:'Hemisphere'},round=n=>Math.round(n*1e6)/1e6;
const number=(v,a,b)=>typeof v==='number'&&Number.isFinite(v)&&v>=a&&v<=b;
// Ratios are relative to the widest end on each local axis. Keeping this
// profile separate from the bounding dimensions makes every existing resize,
// group transform, copy and floor transfer preserve the authored taper.
const taperKeys=['topX','topY','bottomX','bottomY'],endKeys=['topWidth','topDepth','bottomWidth','bottomDepth'];
function endSizes(o){const t=o.taper||{topX:1,topY:1,bottomX:1,bottomY:1};return{topWidth:round(o.w*t.topX),topDepth:round(o.h*t.topY),bottomWidth:round(o.w*t.bottomX),bottomDepth:round(o.h*t.bottomY)};}
function reshape(o,changes){
 validate(o);if(o.primitive!=='cube'||o.wall)throw Error('Only blockout cubes have separate top and bottom sizes');
 if(!changes||typeof changes!=='object'||Array.isArray(changes)||Object.keys(changes).some(k=>!endKeys.includes(k)||!number(changes[k],0,150)))throw Error('Use top and bottom sizes from 0 to 150 m');
 const ends={...endSizes(o),...changes},w=Math.max(ends.topWidth,ends.bottomWidth),h=Math.max(ends.topDepth,ends.bottomDepth);
 if(w<.02||h<.02)throw Error('At least one end on each axis must be 0.02 m or larger');
 const next={...o,x:o.x+o.w/2-w/2,y:o.y+o.h/2-h/2,w,h};
 if(ends.topWidth===ends.bottomWidth&&ends.topDepth===ends.bottomDepth)delete next.taper;
 else next.taper={topX:ends.topWidth/w,topY:ends.topDepth/h,bottomX:ends.bottomWidth/w,bottomY:ends.bottomDepth/h};
 return validate(next);
}
function validate(o){
 if(!o||typeof o!=='object'||Array.isArray(o)||!types.includes(o.primitive))throw Error('Unknown blockout shape');
 if(typeof o.id!=='string'||!o.id||o.id.length>150||typeof o.name!=='string'||o.name.length>150)throw Error('Invalid blockout identity');
 if(!['x','y','z'].every(k=>number(o[k],-150,150))||!['w','h','height'].every(k=>number(o[k],.02,150)))throw Error('Keep shape dimensions from 0.02 to 150 m, and positions within ±150 m');
 if(!['rotation','tiltX','tiltY'].every(k=>number(o[k],-360,360)))throw Error('Shape rotation must be between −360° and 360°');
 if(o.taper!==undefined){
  const t=o.taper;if(o.primitive!=='cube'||o.wall||!t||typeof t!=='object'||Array.isArray(t)||Object.keys(t).length!==4||taperKeys.some(k=>!number(t[k],0,1))||Math.max(t.topX,t.bottomX)!==1||Math.max(t.topY,t.bottomY)!==1)throw Error('Invalid cube taper: use centered top and bottom sizes within the shape bounds');
 }
 if(o.wall!==undefined&&typeof o.wall!=='boolean')throw Error('Invalid thin-wall flag');
 if(o.wall===true){
  if(o.primitive!=='cube'||o.tiltX!==0||o.tiltY!==0)throw Error('Thin walls must be upright cubes');
  if(!['w','height'].every(k=>o[k]>=.25&&Math.abs(o[k]*4-Math.round(o[k]*4))<1e-6)||![.25,.5,.75,1].includes(o.h))throw Error('Thin-wall length and height use 0.25 m increments; thickness must be 0.25, 0.5, 0.75 or 1 m');
 }
 if(o.color!==undefined&&(typeof o.color!=='string'||!/^#[\da-f]{6}$/i.test(o.color)))throw Error('Invalid shape colour');
 return o;
}
function create(type,id,point={x:0,y:0,z:0}){if(!types.includes(type))throw Error('Unknown blockout shape');return validate({id,name:labels[type],primitive:type,x:round(point.x-.5),y:round(point.y-.5),z:round(point.z??0),w:1,h:1,height:1,rotation:0,tiltX:0,tiltY:0,color:'#d6a46b'});}
// Same XYZ Euler order used by Three: scene X=east, Y=up, Z=south.
function rotate(v,o){let [x,y,z]=v;const a=o.tiltX*Math.PI/180,b=-o.rotation*Math.PI/180,c=o.tiltY*Math.PI/180,ca=Math.cos(a),sa=Math.sin(a),cb=Math.cos(b),sb=Math.sin(b),cc=Math.cos(c),sc=Math.sin(c);const X=cc*x-sc*y,Y=sc*x+cc*y;x=cb*X+sb*z;z=-sb*X+cb*z;y=ca*Y-sa*z;z=sa*Y+ca*z;return[x,y,z];}
function hull(points){const ps=points.map(p=>[round(p[0]),round(p[1])]).sort((a,b)=>a[0]-b[0]||a[1]-b[1]).filter((p,i,a)=>!i||p[0]!==a[i-1][0]||p[1]!==a[i-1][1]);if(ps.length<3)return ps;const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]),half=a=>{const h=[];for(const p of a){while(h.length>1&&cross(h.at(-2),h.at(-1),p)<=1e-10)h.pop();h.push(p);}return h;};return[...half(ps).slice(0,-1),...half([...ps].reverse()).slice(0,-1)];}
function vertices(o){const out=[],put=(x,z,y)=>{const p=rotate([x*o.w,z*o.height,y*o.h],o);out.push([p[0]+o.x+o.w/2,p[2]+o.y+o.h/2,p[1]+o.z+o.height/2]);};
 if(o.primitive==='cube'){const t=o.taper;for(const z of [-.5,.5])for(const [x,y]of [[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]])put(x*(t?(z>0?t.topX:t.bottomX):1),z,y*(t?(z>0?t.topY:t.bottomY):1));}
 else if(o.primitive==='cylinder'){for(let i=0;i<32;i++)for(const z of [-.5,.5])put(Math.cos(i*Math.PI/16)/2,z,Math.sin(i*Math.PI/16)/2);}
 else{const half=o.primitive==='hemisphere';for(let j=0;j<=16;j++){const a=j/16*Math.PI*(half?.5:1);for(let i=0;i<32;i++){const t=i*Math.PI/16;put(Math.sin(a)*Math.cos(t)/2,half?Math.cos(a)-.5:Math.cos(a)/2,Math.sin(a)*Math.sin(t)/2);}}}return out;
}
function points(o){return hull(vertices(o).map(v=>[v[0],v[1]]));}
function bounds(o){const vs=vertices(o),xs=vs.map(v=>v[0]),ys=vs.map(v=>v[1]),zs=vs.map(v=>v[2]),x=Math.min(...xs),y=Math.min(...ys),z=Math.min(...zs);return{x,y,z,w:Math.max(...xs)-x,h:Math.max(...ys)-y,height:Math.max(...zs)-z};}
function place(o,hit,floorZ){const normal=hit?.normal||{x:0,y:0,z:1},n=[normal.x,normal.y,normal.z],length=Math.hypot(...n);if(!length||!Number.isFinite(length))throw Error('Invalid placement surface');const axis=n.map(v=>v/length),b=vertices(o),cx=o.x+o.w/2,cy=o.y+o.h/2,cz=o.z+o.height/2,support=Math.max(...b.map(v=>-(v[0]-cx)*axis[0]-(v[1]-cy)*axis[1]-(v[2]-cz)*axis[2]));return validate({...o,x:round(hit.x+axis[0]*support-o.w/2),y:round(hit.y+axis[1]*support-o.h/2),z:round(hit.z-floorZ+axis[2]*support-o.height/2)});}
const api={types,labels,validate,create,rotate,vertices,points,bounds,place,endSizes,reshape};root.KERN_PRIMITIVES=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
