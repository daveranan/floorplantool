import * as THREE from 'three';

/* Local-space dimensions and face handles. These are editor decorations, never
 * children of the authored solid, so bounds, surface picking and exports stay
 * independent of the controls. Each drag keeps its opposite face fixed. */
export function primitiveBounds({scene,camera,canvas}) {
  const overlay=new THREE.Group();overlay.userData.primitiveBounds=true;overlay.visible=false;scene.add(overlay);
  const boxGeometry=new THREE.BoxGeometry(1,1,1),edgeGeometry=new THREE.EdgesGeometry(boxGeometry);boxGeometry.dispose();
  const lineMaterial=new THREE.LineBasicMaterial({color:0x79b8ff,depthTest:false,depthWrite:false,transparent:true,opacity:.95});
  const outline=new THREE.LineSegments(edgeGeometry,lineMaterial);outline.renderOrder=30;overlay.add(outline);
  const handleGeometry=new THREE.PlaneGeometry(1,1),handleMaterial=new THREE.MeshBasicMaterial({color:0xd7eaff,depthTest:false,depthWrite:false,side:THREE.DoubleSide});
  const handles=[];
  for(const axis of ['x','y','z'])for(const sign of [-1,1]){
    const handle=new THREE.Mesh(handleGeometry,handleMaterial);handle.userData.boundsHandle={axis,sign};handle.renderOrder=32;overlay.add(handle);handles.push(handle);
  }
  const leaderGeometry=new THREE.BufferGeometry();leaderGeometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(36),3));
  const leaders=new THREE.LineSegments(leaderGeometry,lineMaterial);leaders.renderOrder=30;leaders.frustumCulled=false;overlay.add(leaders);
  const dimensionGeometry=new THREE.BufferGeometry();dimensionGeometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(54),3));
  const dimensions=new THREE.LineSegments(dimensionGeometry,lineMaterial);dimensions.renderOrder=30;overlay.add(dimensions);dimensions.frustumCulled=false;
  const labels=['W','D','H'].map(name=>{const node=document.createElement('div');node.dataset.primitiveDimension=name;node.style.cssText='position:absolute;pointer-events:none;display:none;z-index:24;padding:4px 7px;border:1px solid #79b8ff66;border-radius:4px;background:#172b37ed;color:#d7eaff;font:13px system-ui;white-space:nowrap;';canvas.parentElement?.append(node);return node;});
  let current=null,hot=null;
  const ray=new THREE.Raycaster(),screenPoint=new THREE.Vector3(),viewPoint=new THREE.Vector3();
  const rect=()=>canvas.getBoundingClientRect();
  function project(point,r){viewPoint.copy(point).applyMatrix4(camera.matrixWorldInverse);screenPoint.copy(point).project(camera);return{x:r.left+(screenPoint.x+1)*r.width/2,y:r.top+(1-screenPoint.y)*r.height/2,depth:viewPoint.z,visible:viewPoint.z<0&&screenPoint.z>=-1&&screenPoint.z<=1};}
  function unitsAt(point,r){const p=point.clone().applyMatrix4(camera.matrixWorldInverse);return Math.max(.000001,2*Math.abs(p.z)*Math.tan(camera.fov*Math.PI/360)/Math.max(1,r.height));}
  function setRay(e){const r=rect();ray.setFromCamera(new THREE.Vector2((e.clientX-r.left)/Math.max(1,r.width)*2-1,1-(e.clientY-r.top)/Math.max(1,r.height)*2),camera);}
  function update(root,active,{handles:showHandles=true}={}){
    current=root;overlay.visible=!!(active&&root);for(const label of labels)label.style.display='none';if(!overlay.visible)return;
    camera.updateMatrixWorld(true);root.updateWorldMatrix(true,false);const r=rect(),center=root.getWorldPosition(new THREE.Vector3()),quaternion=root.getWorldQuaternion(new THREE.Quaternion()),units=unitsAt(center,r);
    outline.position.copy(center);outline.quaternion.copy(quaternion);outline.scale.copy(root.scale);
    const centerScreen=project(center,r),used=[],leaderPositions=leaderGeometry.attributes.position;let leaderIndex=0,outboard=false;
    for(const handle of handles){
      const {axis,sign}=handle.userData.boundsHandle,p=new THREE.Vector3(),direction=new THREE.Vector3();p[axis]=sign*.5;direction[axis]=1;direction.applyQuaternion(quaternion);root.localToWorld(p);
      handle.userData.facePosition=p.clone();const point=project(p,r),view=camera.position.clone().sub(p).normalize();handle.visible=showHandles&&point.visible&&Math.abs(view.dot(direction))<.98;
      if(handle.visible){
        const dx=point.x-centerScreen.x,dy=point.y-centerScreen.y,length=Math.hypot(dx,dy),ux=length>1e-6?dx/length:1,uy=length>1e-6?dy/length:0;
        let distance=Math.max(24,length),x=centerScreen.x+ux*distance,y=centerScreen.y+uy*distance;
        while(used.some(q=>Math.hypot(q.x-x,q.y-y)<20)&&distance<Math.max(24,length)+80){distance+=12;x=centerScreen.x+ux*distance;y=centerScreen.y+uy*distance;}
        used.push({x,y});if(Math.hypot(x-point.x,y-point.y)>.5){outboard=true;const projected=p.clone().project(camera);p.set((x-r.left)/r.width*2-1,1-(y-r.top)/r.height*2,projected.z).unproject(camera);}
      }
      handle.position.copy(p);handle.quaternion.copy(camera.quaternion);handle.scale.setScalar(unitsAt(p,r)*(handle===hot?11:9));handle.userData.screen=project(p,r);
      const anchor=handle.visible?handle.userData.facePosition:p;leaderPositions.setXYZ(leaderIndex++,anchor.x,anchor.y,anchor.z);leaderPositions.setXYZ(leaderIndex++,p.x,p.y,p.z);
    }
    leaderPositions.needsUpdate=true;
    // Choose nearby exterior edges in object space. Width/depth remain local
    // measurements even for yawed or tilted solids, rather than world AABBs.
    const localCamera=root.worldToLocal(camera.position.clone()),sx=localCamera.x>=0?1:-1,sz=localCamera.z>=0?1:-1,offset=units*(outboard?55:27);
    const x=sx*(.5+offset/root.scale.x),z=sz*(.5+offset/root.scale.z),y=-.5-offset/root.scale.y;
    const defs=[{a:[-.5,y,z],b:[.5,y,z],tick:[0,1,0],size:root.scale.x},{a:[x,y,-.5],b:[x,y,.5],tick:[0,1,0],size:root.scale.z},{a:[x,-.5,z],b:[x,.5,z],tick:[1,0,0],size:root.scale.y}];
    const positions=dimensionGeometry.attributes.position;let index=0;const put=p=>positions.setXYZ(index++,p.x,p.y,p.z),placed=[];
    defs.forEach((def,i)=>{
      const a=root.localToWorld(new THREE.Vector3(...def.a)),b=root.localToWorld(new THREE.Vector3(...def.b)),tick=new THREE.Vector3(...def.tick).applyQuaternion(quaternion).multiplyScalar(units*4);
      put(a);put(b);for(const p of [a,b]){put(p.clone().sub(tick));put(p.clone().add(tick));}
      const p=project(a.clone().add(b).multiplyScalar(.5),r),label=labels[i];label.textContent=labels[i].dataset.primitiveDimension+' '+def.size.toFixed(2)+' m';
      if(!p.visible||p.x<r.left||p.y<r.top||p.x>r.left+r.width||p.y>r.top+r.height)return;
      const left=Math.max(5,Math.min(r.width-88,p.x-r.left-40)),anchorTop=Math.max(5,Math.min(r.height-31,p.y-r.top-12));let top=anchorTop;
      // Tiny or nearly edge-on objects still have three readable measurements.
      for(const offset of [0,30,-30,60,-60,90,-90]){const candidate=Math.max(5,Math.min(r.height-31,anchorTop+offset));if(!placed.some(q=>Math.abs(q.left-left)<87&&Math.abs(q.top-candidate)<28)){top=candidate;break;}}
      placed.push({left,top});Object.assign(label.style,{display:'block',left:left+'px',top:top+'px'});
    });
    positions.needsUpdate=true;overlay.updateMatrixWorld(true);
  }
  function hit(e){
    if(!overlay.visible||!current)return null;update(current,true);const radius=e.pointerType==='touch'?18:10;
    const hits=handles.filter(h=>h.visible).map(h=>({handle:h,p:h.userData.screen,d:Math.hypot(e.clientX-h.userData.screen.x,e.clientY-h.userData.screen.y)})).filter(h=>h.d<=radius);
    // Overlapping front/back handles choose the closer face, not array order.
    return hits.sort((a,b)=>Math.abs(a.d-b.d)<2?b.p.depth-a.p.depth:a.d-b.d)[0]?.handle||null;
  }
  function hover(handle){hot=handle;}
  function begin(e,handle,root){
    const {axis,sign}=handle.userData.boundsHandle,direction=new THREE.Vector3();direction[axis]=1;direction.applyQuaternion(root.getWorldQuaternion(new THREE.Quaternion())).normalize();
    const origin=handle.userData.facePosition.clone(),view=camera.position.clone().sub(origin).normalize();
    if(Math.abs(view.dot(direction))>=.98)return null;
    const normal=view.addScaledVector(direction,-view.dot(direction)).normalize();
    const plane=new THREE.Plane().setFromNormalAndCoplanarPoint(normal,origin);setRay(e);const start=ray.ray.intersectPlane(plane,new THREE.Vector3());if(!start)return null;
    return{axis,sign,direction,plane,start,position:root.position.clone(),scale:root.scale.clone()};
  }
  function resize(g,e,root,step){
    setRay(e);const point=ray.ray.intersectPlane(g.plane,new THREE.Vector3());if(!point)return;
    let size=g.scale[g.axis]+point.sub(g.start).dot(g.direction)*g.sign;
    if(step)size=Math.round(size/step)*step;
    size=Math.max(g.original.wall?.25:.02,Math.min(g.original.wall&&g.axis==='z'?1:150,size));
    root.scale.copy(g.scale);root.scale[g.axis]=size;
    root.position.copy(g.position).addScaledVector(g.direction,(size-g.scale[g.axis])*g.sign/2);root.updateMatrixWorld(true);
    update(root,true);
  }
  function dispose(){overlay.removeFromParent();edgeGeometry.dispose();handleGeometry.dispose();handleMaterial.dispose();leaderGeometry.dispose();dimensionGeometry.dispose();lineMaterial.dispose();for(const label of labels)label.remove();}
  return{update,hit,hover,begin,resize,dispose};
}
