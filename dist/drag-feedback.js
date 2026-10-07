/* Derived editor decoration only: no hit targets, document writes, or redraws. */
(function(){
'use strict';
const axes=window.KERN_DRAG_AXES,svg=$('plan');if(!axes||!svg)return;
const ns='http://www.w3.org/2000/svg',colors={x:'#e47b74',y:'#7acb99',z:'#70b9ec'},nodes={};
function node(tag,attrs,parent){const n=document.createElementNS(ns,tag);for(const [key,value]of Object.entries(attrs||{}))n.setAttribute(key,value);parent?.append(n);return n;}
const root=node('g',{id:'drag-feedback-2d','aria-hidden':'true','pointer-events':'none','data-drag-space':'2d'});root.style.pointerEvents='none';
const guides=node('g',{},root),measure=node('line',{'data-drag-measure':'','stroke':'#d5a760','stroke-linecap':'round'},root),start=node('circle',{fill:'var(--panel, #172b37)',stroke:'#d5a760'},root),end=node('circle',{fill:'#d5a760',stroke:'var(--panel, #172b37)'},root);
for(const axis of ['x','y','z']){const group=node('g',{},guides),line=node(axis==='y'?'circle':'path',{fill:'none',stroke:colors[axis],'stroke-linecap':'round'},group),label=node('text',{fill:colors[axis],'font-family':'var(--font-ui, system-ui)','font-weight':'600'},group);label.textContent=axis.toUpperCase();nodes[axis]={group,line,label};}
const hud=node('g',{},root),box=node('rect',{fill:'var(--panel, #172b37)',stroke:'var(--line, #59707d)','fill-opacity':'.97'},hud),lock=node('text',{'font-family':'var(--font-ui, system-ui)','font-weight':'600'},hud),distance=node('text',{'font-family':'var(--font-ui, system-ui)',fill:'var(--ink, #edf3f6)','font-weight':'600'},hud),components=node('text',{'data-drag-components':'','font-family':'var(--font-ui, system-ui)',fill:'var(--muted, #adbdc7)'},hud);
const attr=(n,values)=>{for(const [key,value]of Object.entries(values))n.setAttribute(key,String(value));};
const signed=n=>Math.abs(n)<.005?'0.00':(n>0?'+':'')+n.toFixed(2);
function clear(){root.remove();}
function update(value=axes.snapshot()){
 if(!value||value.space!=='2d'||window.BuildingExports?.isThreeMode?.()||window.KERN_WORKSPACE?.isHome?.()){clear();return;}
 const light=document.documentElement.dataset.theme==='light',d=value.delta,o=value.origin,p={x:o.x+d.x,y:o.z+d.z},u=Math.max(1e-8,Math.abs(screenUnits(1))||.05),held=value.axes,total=Math.hypot(d.x,d.y,d.z),span=105*u;
 if(root.parentNode!==svg)svg.append(root);
 attr(root,{'data-drag-dx':d.x,'data-drag-dy':d.y,'data-drag-dz':d.z});
 attr(measure,{x1:o.x,y1:o.z,x2:p.x,y2:p.y,'stroke-width':1.4*u,'stroke-dasharray':`${4*u} ${3*u}`});
 attr(start,{cx:o.x,cy:o.z,r:3*u,'stroke-width':1.2*u});attr(end,{cx:p.x,cy:p.y,r:3*u,'stroke-width':u});
 for(const axis of ['x','y','z']){const n=nodes[axis],active=held.includes(axis);n.group.style.display=active?'':'none';if(active)n.group.setAttribute('data-drag-axis',axis);else n.group.removeAttribute('data-drag-axis');if(!active)continue;
  attr(n.line,{stroke:light?({x:'#b34740',y:'#287044',z:'#246b9c'}[axis]):colors[axis],'stroke-width':1.4*u,'stroke-dasharray':`${6*u} ${4*u}`});
  n.label.setAttribute('fill',light?'var(--ink, #202630)':colors[axis]);if(axis==='y'){attr(n.line,{cx:p.x,cy:p.y,r:10*u});attr(n.label,{x:p.x+12*u,y:p.y+4*u,'font-size':11*u});}
  else{const a=axis==='x'?{x:p.x-span,y:p.y}:{x:p.x,y:p.y-span},b=axis==='x'?{x:p.x+span,y:p.y}:{x:p.x,y:p.y+span};attr(n.line,{d:`M${a.x} ${a.y}L${b.x} ${b.y}`});attr(n.label,{x:b.x+(axis==='x'?5:7)*u,y:b.y+(axis==='x'?4:9)*u,'font-size':11*u});}
 }
 const unsupported=held.some(a=>!value.supported.includes(a)),locked=held.map(a=>a.toUpperCase()).join(' + ')+(held.length?' locked':'')+(unsupported?' · planar edit':''),movement=`${value.label==='Group center'?'Center moved':'Moved'} ${total.toFixed(2)} m`,parts=value.supported.map(a=>`Δ${a.toUpperCase()} ${signed(d[a])}`).join('  ')+' m';
 lock.style.display=held.length?'':'none';if(held.length){lock.setAttribute('data-drag-lock',held.join(''));lock.textContent=locked;}else lock.removeAttribute('data-drag-lock');
 distance.setAttribute('data-drag-distance',String(total));distance.textContent=movement;components.textContent=parts;
 const rows=held.length?3:2,w=(Math.max(locked.length,movement.length,parts.length)*6.8+20)*u,h=(rows*17+12)*u,view=(svg.getAttribute('viewBox')||'').trim().split(/[ ,]+/).map(Number);let x=p.x+18*u,y=p.y-h-16*u;
 if(view.length===4&&view.every(Number.isFinite)&&view[2]>0&&view[3]>0){x=Math.max(view[0]+8*u,Math.min(x,view[0]+view[2]-w-8*u));y=Math.max(view[1]+8*u,Math.min(y,view[1]+view[3]-h-8*u));}
 attr(hud,{transform:`translate(${x} ${y})`});attr(box,{x:0,y:0,width:w,height:h,rx:6*u,'stroke-width':u});
 attr(lock,{x:10*u,y:19*u,'font-size':12*u,fill:!light&&held.length===1?colors[held[0]]:'var(--ink, #edf3f6)'});attr(distance,{x:10*u,y:(held.length?36:19)*u,'font-size':12*u});attr(components,{x:10*u,y:(held.length?53:36)*u,'font-size':11*u});
}
axes.subscribe(update);
const baseDraw=draw;draw=function(...args){const result=baseDraw(...args);update();return result;};
window.addEventListener('resize',()=>update());
// Programmatic scope changes have no pointer event; render completes them before
// projecting the current gesture again. This never triggers an additional render.
const baseRender=render;render=function(...args){const result=baseRender(...args);update();return result;};
window.KERN_DRAG_FEEDBACK={update,clear};
})();
