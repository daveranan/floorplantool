/* Standalone upright walls use the existing floor-owned cube model. Coordinates
 * are unrotated origins; z is floor-relative. All helpers leave inputs intact. */
(function(root){
'use strict';
const P=root.KERN_PRIMITIVES||(typeof require==='function'?require('./primitives.js'):null);
const thicknesses=Object.freeze([.25,.5,.75,1]);
function quarter(value){
 if(!Number.isFinite(value))throw Error('Thin-wall values must be finite numbers');
 const result=Math.round(value*4)/4;
 if(!Number.isFinite(result))throw Error('Thin-wall values must be finite numbers');
 return result===0?0:result;
}
const thickness=value=>Math.max(.25,Math.min(1,quarter(value)));
function dimension(value){
 if(!Number.isFinite(value)||value<=0)throw Error('Thin-wall length and height must be positive');
 return Math.max(.25,quarter(value));
}
function create(id,start,end,options={}){
 if(!start||!end)throw Error('A thin wall needs a start and end point');
 const a={x:quarter(start.x),y:quarter(start.y)},b={x:quarter(end.x),y:quarter(end.y)},dx=b.x-a.x,dy=b.y-a.y;
 const horizontal=Math.abs(dx)>=Math.abs(dy),length=Math.abs(horizontal?dx:dy);
 if(length<.25)return null;
 const h=thickness(options.thickness===undefined?.25:options.thickness),cx=horizontal?(a.x+b.x)/2:a.x,cy=horizontal?a.y:(a.y+b.y)/2;
 return P.validate({id,name:options.name??'Wall',primitive:'cube',wall:true,x:cx-length/2,y:cy-h/2,z:quarter(options.z===undefined?0:options.z),w:length,h,height:dimension(options.height===undefined?3:options.height),rotation:horizontal?0:90,tiltX:0,tiltY:0,color:options.color??'#a4aebc'});
}
// Scene gestures pass the complete transform. Only numerically changed fields
// are snapped so a yaw edit preserves the fractional origin of a centered wall.
// XY edits snap displacement to retain the existing half-thickness offset. A
// full scene transform snaps its center displacement after normalizing sizes.
function normalizeEdit(original,changes){
 P.validate(original);
 if(original.wall!==true)throw Error('Select a thin wall to edit');
 if(!changes||typeof changes!=='object'||Array.isArray(changes))throw Error('Invalid thin-wall edit');
 for(const key of ['rotation','tiltX','tiltY'])if(Object.prototype.hasOwnProperty.call(changes,key)&&!Number.isFinite(changes[key]))throw Error('Thin-wall values must be finite numbers');
 const next={...original,...changes,primitive:'cube',wall:true,tiltX:0,tiltY:0};
 for(const key of ['x','y','z','w','h','height'])if(Object.prototype.hasOwnProperty.call(changes,key)){
  const value=changes[key];
  if(!Number.isFinite(value))throw Error('Thin-wall values must be finite numbers');
  next[key]=Math.abs(value-original[key])<1e-6?original[key]:key==='h'?thickness(value):['w','height'].includes(key)?dimension(value):['x','y'].includes(key)?original[key]+quarter(value-original[key]):quarter(value);
 }
 if(['x','y','w','h'].every(key=>Object.prototype.hasOwnProperty.call(changes,key)))for(const [key,size]of [['x','w'],['y','h']]){
  const displacement=changes[key]-original[key]+(changes[size]-original[size])/2,snapped=Math.abs(displacement)<1e-6?0:quarter(displacement);
  next[key]=original[key]+snapped-(next[size]-original[size])/2;
 }
 return P.validate(next);
}
function collision(o,floorZ){
 if(o?.wall!==true)return null;
 P.validate(o);
 if(!Number.isFinite(floorZ))throw Error('Thin-wall floor elevation must be finite');
 const b=P.bounds(o);
 return{...b,z:floorZ+o.z,height:o.height,kind:'wall',polygon:P.points(o),primitive:o.id};
}
const api={thicknesses,quarter,create,normalizeEdit,collision};root.KERN_THIN_WALLS=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
