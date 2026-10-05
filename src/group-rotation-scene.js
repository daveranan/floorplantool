import * as THREE from 'three';
/* Plan-only shared rotation handles. Scene coordinates are x/z horizontal;
 * the amber preview is independent from document geometry and floor explosion. */
export function groupRotationScene({scene,camera,renderer,controls,groups,container,enabled,onStart}) {
 const canvas=renderer.domElement,root=new THREE.Group(),ghost=new THREE.Group(),ringGroup=new THREE.Group(),ray=new THREE.Raycaster(),mouse=new THREE.Vector2();root.userData.groupRotation=true;root.add(ghost,ringGroup);scene.add(root);
 const material=new THREE.MeshBasicMaterial({color:0xddae65,depthTest:false,transparent:true,opacity:.9}),lines=new THREE.LineBasicMaterial({color:0xffd697,depthTest:false,transparent:true,opacity:.9}),handles=[];
 const label=document.createElement('div');label.dataset.groupRotationReadout='true';label.style.cssText='position:absolute;pointer-events:none;display:none;padding:6px 9px;border-radius:4px;background:#172b37ee;color:#ffe4a5;font:13px system-ui';container.append(label);
 let state=null,context=null,disposed=false,visible=false,oldEnabled=true;
 const ui=()=>window.KERN_GROUP_ROTATE,swallow=e=>{e.preventDefault();e.stopImmediatePropagation();};
 function clear(group){for(const o of [...group.children]){o.geometry?.dispose();group.remove(o);}}
 function project(e){const b=canvas.getBoundingClientRect();mouse.set((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1);camera.updateMatrixWorld();scene.updateMatrixWorld(true);ray.setFromCamera(mouse,camera);}
 function point(e){project(e);return ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),-ringGroup.position.y),new THREE.Vector3());}
 function build(q){clear(ringGroup);clear(ghost);handles.length=0;const c=q.pivot,r=Math.max(1,Math.hypot(q.bounds.w,q.bounds.h)/2+.6),ps=ui().paths(q.model,q.analysis.refs),heights=ps.map(p=>p.z+(groups.get(p.ref.floor)?.position.y||0)),y=Math.min(...heights)+.15;
  ringGroup.position.set(c.x,y,c.y);const torus=new THREE.Mesh(new THREE.TorusGeometry(r,.055,8,96),material);torus.rotation.x=Math.PI/2;torus.userData.groupRotateRing=true;ringGroup.add(torus);
  for(let i=0;i<4;i++){const h=new THREE.Mesh(new THREE.SphereGeometry(.2,12,8),material),a=i*Math.PI/2;h.position.set(Math.cos(a)*r,0,Math.sin(a)*r);h.userData.groupRotateHandle=i;h.renderOrder=31;ringGroup.add(h);handles.push(h);}
  const center=new THREE.Mesh(new THREE.SphereGeometry(.12,10,6),material);center.renderOrder=31;ringGroup.add(center);
  const vertices=[];for(const p of ps){const offset=groups.get(p.ref.floor)?.position.y||0,z=p.z+offset+.08,height=p.height,vs=p.points;for(let i=0;i<(vs.length>2?vs.length:vs.length-1);i++){const a=vs[i],b=vs[(i+1)%vs.length];vertices.push(a[0]-c.x,z,a[1]-c.y,b[0]-c.x,z,b[1]-c.y);if(height>0)vertices.push(a[0]-c.x,z+height,a[1]-c.y,b[0]-c.x,z+height,b[1]-c.y,a[0]-c.x,z,a[1]-c.y,a[0]-c.x,z+height,a[1]-c.y);}}
  const outline=new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(vertices,3)),lines);outline.renderOrder=30;ghost.add(outline);ghost.position.set(c.x,0,c.y);ghost.rotation.y=0;ghost.visible=false;context=q;
 }
 function cancel(pointerId){if(!state||pointerId!==undefined&&pointerId!==state.id)return false;const g=state;state=null;ui()?.finish(g.stamp,true);ghost.visible=false;ghost.rotation.y=0;controls.enabled=oldEnabled;if(canvas.hasPointerCapture?.(g.id))canvas.releasePointerCapture(g.id);label.style.display='none';return true;}
 function sync(){if(disposed)return;const active=enabled()&&ui()?.active(),q=ui()?.context();visible=!!active&&q&&!q.error;
  if(state&&(!visible||!ui()?.valid(state.stamp))){cancel();}
  root.visible=visible;if(!visible){label.style.display='none';return;}if(!state&&(context!==q||ringGroup.userData.offset!==[...groups.values()].map(g=>g.position.y).join(','))){build(q);ringGroup.userData.offset=[...groups.values()].map(g=>g.position.y).join(',');}
  const b=canvas.getBoundingClientRect(),scale=Math.max(.6,camera.position.distanceTo(ringGroup.position)*Math.tan(camera.fov*Math.PI/360)/Math.max(1,b.height)*24);for(const h of handles)h.scale.setScalar(scale);
  const p=ringGroup.position.clone().project(camera);label.style.display='block';label.style.left=Math.max(8,Math.min(b.width-250,(p.x+1)*b.width/2+15))+'px';label.style.top=Math.max(8,Math.min(b.height-36,(1-p.y)*b.height/2+15))+'px';label.textContent=state?(state.degrees>0?'+':'')+state.degrees.toFixed(1)+'° · release to apply':'Rotate group · yaw'+(q.step?' · 90° steps':' · Shift: 5°');
 }
 function down(e){if(e.target!==canvas||e.button!==0||e.altKey||!visible||!enabled())return;if(state){swallow(e);return;}project(e);if(!ray.intersectObjects(ringGroup.children,false).some(h=>h.object.userData.groupRotateHandle!==undefined||h.object.userData.groupRotateRing))return;swallow(e);const stamp=ui().begin(),p=point(e);if(!stamp||!p){ui()?.cancel();return;}onStart?.();oldEnabled=controls.enabled;controls.enabled=false;state={id:e.pointerId,stamp,last:Math.atan2(p.z-stamp.pivot.y,p.x-stamp.pivot.x),total:0,degrees:0,x:e.clientX,y:e.clientY};ghost.visible=true;canvas.setPointerCapture?.(e.pointerId);}
 function move(e){if(!state||e.pointerId!==state.id)return;swallow(e);const p=point(e);if(!p)return;const g=state,a=Math.atan2(p.z-g.stamp.pivot.y,p.x-g.stamp.pivot.x);g.total+=Math.atan2(Math.sin(a-g.last),Math.cos(a-g.last))*180/Math.PI;g.last=a;if(Math.hypot(e.clientX-g.x,e.clientY-g.y)<3&&!g.degrees)return;const result=ui().preview(g.stamp,g.total,e);if(result){g.degrees=result.degrees;ghost.rotation.y=-g.degrees*Math.PI/180;}else if(!ui().state())cancel();sync();}
 function up(e){if(!state||e.pointerId!==state.id)return;swallow(e);const g=state;state=null;ghost.visible=false;controls.enabled=oldEnabled;ui().finish(g.stamp);if(canvas.hasPointerCapture?.(e.pointerId))canvas.releasePointerCapture(e.pointerId);sync();}
 function interrupted(e){if(cancel(e.pointerId))swallow(e);}
 const blur=()=>cancel();for(const [name,fn]of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',interrupted],['lostpointercapture',interrupted]])window.addEventListener(name,fn,true);window.addEventListener('blur',blur);
 function dispose(){if(disposed)return;cancel();disposed=true;for(const [name,fn]of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',interrupted],['lostpointercapture',interrupted]])window.removeEventListener(name,fn,true);window.removeEventListener('blur',blur);clear(ringGroup);clear(ghost);root.removeFromParent();material.dispose();lines.dispose();label.remove();}
 return{sync,cancel,dispose,dragging:()=>!!state};
}
