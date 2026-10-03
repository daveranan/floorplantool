/* Explicit, geometry-preserving release of a source-linked concrete cap. */
(function(root){
'use strict';
const copy=value=>JSON.parse(JSON.stringify(value));
function independent(room){return room?.independentCap===true&&!room.linkedSource&&!room.derivedFootprint&&!room.courtyardVoid;}
function source(plan,room){
 if(!room)return null;if(room.linkedSource)return room.linkedSource;
 if(room.id==='opsroof'&&!independent(room)&&plan.floors?.L0?.rooms.some(r=>r.id==='control'))return{floor:'L0',room:'control'};
 return null;
}
function eligible(plan,fid,id){
 const room=plan.floors?.[fid]?.rooms.find(r=>r.id===id),ref=source(plan,room);
 if(!room||room.type!=='solid'||room.sealedConcrete!==true||independent(room)||!ref||room.routeStair||room.localSteps||room.stairTransition)return false;
 if((plan.verticalConnections||[]).some(c=>c.room===id&&c.floors?.includes(fid)))return false;
 if((plan.splitLevelConnections||[]).some(c=>c.room===id&&c.floor===fid))return false;
 return !Object.values(plan.floors).some(f=>f.rooms.some(r=>r.linkedSource?.floor===fid&&r.linkedSource.room===id));
}
function detach(plan,fid,id){
 if(!eligible(plan,fid,id))throw Error('Select a source-linked solid concrete cap to make independent.');
 const next=copy(plan),room=next.floors[fid].rooms.find(r=>r.id===id);
 delete room.linkedSource;delete room.derivedFootprint;room.locked=false;room.independentCap=true;
 return next;
}
function setType(room,type){
 room.type=type;
 // A converted room/terrace/void must not retain the sealed-concrete hatch.
 if(independent(room)){if(type==='solid')room.sealedConcrete=true;else delete room.sealedConcrete;}
}
function validateRoom(room){
 if(room.independentCap!==undefined&&typeof room.independentCap!=='boolean')throw Error('Invalid independent concrete cap flag');
 if(room.independentCap===true&&(room.linkedSource||room.derivedFootprint||room.courtyardVoid))throw Error('An independent concrete cap cannot retain a source link');
}
const api={independent,eligible,detach,setType,validateRoom};root.KERN_CONCRETE_CAPS=api;
if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
