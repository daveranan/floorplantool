import * as THREE from 'three';
import { TransformControls } from 'three/addons/controls/TransformControls.js';

/* The document stays unchanged during a gesture. Only this object's transform is
 * previewed; the editor validates and commits one proposal when it is released. */
export function primitiveScene({scene,camera,renderer,controls,groups,data,surfaceHit,enabled,canNavigate=()=>true,onSelect,onEdit}) {
  const canvas=renderer.domElement,roots=[],byId=new Map(),ray=new THREE.Raycaster(),mouse=new THREE.Vector2();
  const geometries={cube:new THREE.BoxGeometry(1,1,1),cylinder:new THREE.CylinderGeometry(.5,.5,1,32),sphere:new THREE.SphereGeometry(.5,32,16),hemisphere:new THREE.SphereGeometry(.5,32,16,0,Math.PI*2,0,Math.PI/2)};
  geometries.hemisphere.scale(1,2,1);geometries.hemisphere.translate(0,-.5,0);
  const cap=new THREE.CircleGeometry(.5,32);cap.rotateX(Math.PI/2);cap.translate(0,-.5,0);
  const materials=[];
  for(const level of data.levels)for(const o of level.primitives||[]){
    const root=new THREE.Group(),material=new THREE.MeshStandardMaterial({color:o.color||'#d6a46b',roughness:.8,side:THREE.DoubleSide});materials.push(material);
    root.userData={primitive:o.id,level:level.id,record:JSON.parse(JSON.stringify(o)),floorZ:level.z};root.add(new THREE.Mesh(geometries[o.primitive],material));if(o.primitive==='hemisphere')root.add(new THREE.Mesh(cap,material));
    apply(root,o);groups.get(level.id).add(root);roots.push(root);byId.set(level.id+'\0'+o.id,root);
  }
  const control=new TransformControls(camera,canvas);control.disconnect();canvas.style.touchAction='none';control.setSize(.8);control.setSpace('world');const helper=control.getHelper();scene.add(helper);
  let current=null,gesture=null,pressed=null,disposed=false;
  function apply(root,o){root.position.set(o.x+o.w/2,root.userData.floorZ+o.z+o.height/2,o.y+o.h/2);root.scale.set(o.w,o.height,o.h);root.rotation.set(o.tiltX*Math.PI/180,-o.rotation*Math.PI/180,o.tiltY*Math.PI/180,'XYZ');root.updateMatrixWorld(true);}
  const shown=r=>groups.get(r.userData.level)?.visible&&window.KERN_LAYERS?.shown?.('primitives',r.userData.primitive,r.userData.level)!==false;
  const editable=r=>shown(r)&&window.KERN_LAYERS?.available?.('primitives',r.userData.primitive,r.userData.level)!==false;
  function sync(){if(disposed)return;for(const r of roots)r.visible=window.KERN_LAYERS?.shown?.('primitives',r.userData.primitive,r.userData.level)!==false;const active=!!current&&enabled()&&editable(current);control.enabled=active;helper.visible=active;if(!active&&gesture)cancel();}
  function select(objects){cancel();const chosen=(objects||[]).filter(o=>o.kind==='primitives').map(o=>byId.get(o.floor+'\0'+o.id)).filter(Boolean);current=chosen.length===1&&objects.length===1?chosen[0]:null;if(current)control.attach(current);else control.detach();control.setMode(window.KERN_PRIMITIVE_UI?.mode()||'translate');sync();}
  function pointer(e){const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)/Math.max(1,r.width)*2-1,y:-(e.clientY-r.top)/Math.max(1,r.height)*2+1,button:e.button??0};}
  function cast(e){const p=pointer(e);mouse.set(p.x,p.y);scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);ray.setFromCamera(mouse,camera);return ray.intersectObjects(roots.filter(shown),true).map(h=>{let root=h.object;while(root&&!root.userData.primitive)root=root.parent;return{...h,root};}).filter(h=>h.root);}
  function hit(e){const nearest=cast(e)[0];if(!nearest)return null;const surface=surfaceHit(e);if(surface&&surface.point.distanceTo(camera.position)+.002<nearest.distance)return null;return nearest;}
  function swallow(e){e.preventDefault();e.stopImmediatePropagation();}
  function down(e){if(disposed||!enabled()||e.altKey||e.button!==0)return false;sync();if(current&&control.enabled&&!e.shiftKey){scene.updateMatrixWorld(true);control.pointerHover(pointer(e));if(control.axis){const original=JSON.parse(JSON.stringify(current.userData.record));control.pointerDown(pointer(e));if(control.dragging){gesture={id:e.pointerId,root:current,original};controls.enabled=false;canvas.setPointerCapture?.(e.pointerId);swallow(e);return true;}}}
    const h=hit(e);if(!h)return false;pressed={id:e.pointerId,x:e.clientX,y:e.clientY,root:h.root,shift:e.shiftKey};canvas.setPointerCapture?.(e.pointerId);swallow(e);return true;
  }
  function move(e){if(disposed)return false;sync();if(gesture&&e.pointerId===gesture.id){control.pointerMove({...pointer(e),button:-1});swallow(e);return true;}if(pressed&&e.pointerId===pressed.id){swallow(e);return true;}if(current&&control.enabled&&!e.altKey&&!e.buttons){scene.updateMatrixWorld(true);control.pointerHover(pointer(e));}return false;}
  function release(id){if(canvas.hasPointerCapture?.(id))canvas.releasePointerCapture(id);}
  function up(e){if(gesture&&e.pointerId===gesture.id){const g=gesture;gesture=null;control.pointerUp({button:0});controls.enabled=canNavigate();release(e.pointerId);const r=g.root,round=n=>Math.round(n*1e6)/1e6,changes={x:round(r.position.x-r.scale.x/2),y:round(r.position.z-r.scale.z/2),z:round(r.position.y-r.userData.floorZ-r.scale.y/2),w:round(r.scale.x),h:round(r.scale.z),height:round(r.scale.y),rotation:round(-r.rotation.y*180/Math.PI),tiltX:round(r.rotation.x*180/Math.PI),tiltY:round(r.rotation.z*180/Math.PI)};swallow(e);if(Object.entries(changes).some(([k,v])=>Math.abs(v-g.original[k])>1e-6)){if(onEdit(r.userData.level,r.userData.primitive,changes,g.original)===false)apply(r,g.original);}else apply(r,g.original);return true;}
    if(pressed&&e.pointerId===pressed.id){const p=pressed;pressed=null;release(e.pointerId);swallow(e);if(Math.hypot(e.clientX-p.x,e.clientY-p.y)<=5)onSelect(p.root.userData.level,p.root.userData.primitive,p.shift);return true;}return false;
  }
  function cancel(){const g=gesture,p=pressed;gesture=null;pressed=null;if(g){apply(g.root,g.original);control.pointerUp({button:0});controls.enabled=canNavigate();release(g.id);}if(p)release(p.id);}
  function placement(e,fid){sync();const level=data.levels.find(l=>l.id===fid);if(!level||!groups.get(fid)?.visible)return null;const primitive=cast(e).find(h=>h.root.userData.level===fid),surface=surfaceHit(e),valid=surface?.floor===fid?surface:null;let selected=primitive&&(!valid||primitive.distance<valid.point.distanceTo(camera.position))?{point:primitive.point,normal:primitive.face.normal.clone().applyMatrix3(new THREE.Matrix3().getNormalMatrix(primitive.object.matrixWorld)).normalize()}:valid;
    if(!selected){const p=pointer(e);ray.setFromCamera(new THREE.Vector2(p.x,p.y),camera);const point=ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),-(level.z+groups.get(fid).position.y)),new THREE.Vector3());if(!point)return null;selected={point,normal:new THREE.Vector3(0,1,0)};}
    const p=selected.point,n=selected.normal||new THREE.Vector3(0,1,0);return{x:p.x,y:p.z,z:p.y-groups.get(fid).position.y,normal:{x:n.x,y:n.z,z:n.y}};
  }
  function dispose(){if(disposed)return;cancel();disposed=true;control.detach();control.dispose();scene.remove(helper);for(const r of roots)r.removeFromParent();for(const g of Object.values(geometries))g.dispose();cap.dispose();for(const m of materials)m.dispose();}
  return{select,sync,down,move,up,cancel,placement,dispose,dragging:()=>!!gesture,setMode(mode){if(['translate','scale','rotate'].includes(mode)){cancel();control.setMode(mode);control.setSpace(mode==='scale'?'local':'world');}},objects:()=>roots};
}
