import * as THREE from 'three';

/* A shared transform target stays outside the floor hierarchy. Its display
 * offset never participates in the saved transform: exploded floors are a
 * viewing aid, while group edits operate on the physical arrangement. */
export function primitiveGroup(scene,groups) {
  const target=new THREE.Object3D();target.userData.primitiveGroup=true;scene.add(target);
  let roots=[],displayOffset=0;
  function select(objects){
    roots=objects.slice();const box=new THREE.Box3();displayOffset=0;
    for(const r of roots){r.updateMatrix();box.union(new THREE.Box3(new THREE.Vector3(-.5,-.5,-.5),new THREE.Vector3(.5,.5,.5)).applyMatrix4(r.matrix));displayOffset+=groups.get(r.userData.level)?.position.y||0;}
    displayOffset/=Math.max(1,roots.length);if(!roots.length)return;
    box.getCenter(target.position);target.position.y+=displayOffset;box.getSize(target.scale);target.scale.max(new THREE.Vector3(.02,.02,.02));target.quaternion.identity();target.updateMatrixWorld(true);
  }
  function syncDisplay(){const next=roots.reduce((sum,r)=>sum+(groups.get(r.userData.level)?.position.y||0),0)/Math.max(1,roots.length);target.position.y+=next-displayOffset;displayOffset=next;target.updateMatrixWorld(true);}
  function begin(){return{group:true,position:target.position.clone(),scale:target.scale.clone(),quaternion:target.quaternion.clone(),pivot:target.position.clone().add(new THREE.Vector3(0,-displayOffset,0)),members:roots.map(root=>({root,original:JSON.parse(JSON.stringify(root.userData.record)),position:root.position.clone(),scale:root.scale.clone(),quaternion:root.quaternion.clone()}))};}
  const gcd=(a,b)=>b?gcd(b,a%b):a;
  function scaleFactor(g,raw,step){
    let min=0,max=Infinity,divisor=0;for(const m of g.members){for(const axis of ['x','y','z']){min=Math.max(min,(m.original.wall?.25:.02)/m.scale[axis]);max=Math.min(max,(m.original.wall&&axis==='z'?1:150)/m.scale[axis]);if(m.original.wall)divisor=gcd(divisor,Math.round(m.scale[axis]*4));}}
    const increment=divisor?1/divisor:step/Math.max(g.scale.x,g.scale.y,g.scale.z);let factor=Number.isFinite(raw)?raw:1;
    if(increment){const origin=divisor?0:1;factor=origin+Math.round((factor-origin)/increment)*increment;min=origin+Math.ceil((min-origin-1e-9)/increment)*increment;max=origin+Math.floor((max-origin+1e-9)/increment)*increment;}
    return Math.max(min,Math.min(max,factor));
  }
  function preview(g,mode,step){
    if(mode==='translate'){
      const delta=target.position.clone().sub(g.position);if(step)for(const axis of ['x','y','z'])delta[axis]=Math.round(delta[axis]/step)*step;target.position.copy(g.position).add(delta);
      for(const m of g.members){m.root.position.copy(m.position).add(delta);m.root.quaternion.copy(m.quaternion);m.root.scale.copy(m.scale);}
    }else if(mode==='rotate'){
      const rotation=target.quaternion.clone().multiply(g.quaternion.clone().invert());
      for(const m of g.members){m.root.position.copy(m.position).sub(g.pivot).applyQuaternion(rotation).add(g.pivot);m.root.quaternion.copy(rotation).multiply(m.quaternion);m.root.scale.copy(m.scale);}
    }else if(mode==='scale'){
      const factor=scaleFactor(g,target.scale.x/g.scale.x,step);target.scale.copy(g.scale).multiplyScalar(factor);
      for(const m of g.members){m.root.position.copy(m.position).sub(g.pivot).multiplyScalar(factor).add(g.pivot);m.root.scale.copy(m.scale).multiplyScalar(factor);m.root.quaternion.copy(m.quaternion);}
    }
    for(const m of g.members)m.root.updateMatrixWorld(true);target.updateMatrixWorld(true);
  }
  function restore(g){for(const m of g.members){m.root.position.copy(m.position);m.root.scale.copy(m.scale);m.root.quaternion.copy(m.quaternion);m.root.updateMatrixWorld(true);}target.position.copy(g.position);target.scale.copy(g.scale);target.quaternion.copy(g.quaternion);target.updateMatrixWorld(true);}
  return{target,select,syncDisplay,begin,preview,restore,dispose(){target.removeFromParent();}};
}
