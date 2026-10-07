import * as THREE from 'three';

const AXES=['x','y','z'];
const COLORS={x:'#e47b74',y:'#7acb99',z:'#70b9ec'};
const number=value=>Math.abs(value)<.005?0:value;
const signed=value=>{const n=number(value);return(n>0?'+':'')+n.toFixed(2);};

// One display-only overlay per viewer. Its buffers and materials survive pointer
// movement; neither the editor document nor the scene's pick targets are touched.
export function dragFeedback3D({scene,camera,canvas,container,manager,owns=()=>true}) {
  const group=new THREE.Group();group.name='translation-feedback';group.userData.dragFeedback='3d';group.visible=false;scene.add(group);
  const geometries=[],materials=[];
  function line(color,{dashed=false,opacity=1}={}) {
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(new Float32Array(6),3));geometries.push(geometry);
    if(dashed)geometry.setAttribute('lineDistance',new THREE.Float32BufferAttribute([0,0],1));
    const options={color,transparent:true,opacity,depthTest:false,depthWrite:false};
    const material=dashed?new THREE.LineDashedMaterial({...options,dashSize:.15,gapSize:.1}):new THREE.LineBasicMaterial(options);materials.push(material);
    const object=new THREE.Line(geometry,material);object.frustumCulled=false;object.renderOrder=40;object.raycast=()=>{};group.add(object);return object;
  }
  const guides=Object.fromEntries(AXES.map(axis=>{const object=line(COLORS[axis],{opacity:.64});object.userData.dragAxis=axis;object.visible=false;return[axis,object];}));
  const distance=line('#e7b76e',{dashed:true,opacity:.92});distance.userData.dragDistance=true;distance.renderOrder=41;
  const markerGeometry=new THREE.SphereGeometry(1,10,6),markerMaterial=new THREE.MeshBasicMaterial({color:'#e7b76e',transparent:true,opacity:.96,depthTest:false,depthWrite:false});geometries.push(markerGeometry);materials.push(markerMaterial);
  const markers=['origin','current'].map(kind=>{const marker=new THREE.Mesh(markerGeometry,markerMaterial);marker.userData.dragMarker=kind;marker.renderOrder=42;marker.frustumCulled=false;marker.raycast=()=>{};group.add(marker);return marker;});
  const readout=document.createElement('div');readout.dataset.dragFeedback='3d';readout.style.cssText='position:absolute;display:none;pointer-events:none;user-select:none;z-index:8;padding:7px 9px;border:1px solid #dce9f02b;border-radius:5px;background:#17232eed;color:#e8eef4;box-shadow:0 2px 9px #0003;font:12px/1.45 system-ui;white-space:nowrap;max-width:calc(100% - 16px);overflow:hidden';
  const status=document.createElement('div');status.dataset.dragAxisStatus='true';status.style.cssText='font-size:11px;font-weight:650;letter-spacing:.025em;margin-bottom:2px;display:none';readout.append(status);
  const total=document.createElement('div');total.dataset.dragDistance='true';total.style.cssText='font-size:13px;font-weight:650;color:#e7b76e';readout.append(total);
  const components=document.createElement('div');components.style.cssText='font-size:11px;font-variant-numeric:tabular-nums';readout.append(components);
  const componentLabels=Object.fromEntries(AXES.map((axis,index)=>{if(index)components.append(document.createTextNode(' · '));const label=document.createElement('span');label.dataset.dragComponent=axis;label.style.color=COLORS[axis];components.append(label);return[axis,label];}));container.append(readout);
  const origin=new THREE.Vector3(),current=new THREE.Vector3(),projected=new THREE.Vector3(),cameraPoint=new THREE.Vector3(),a=new THREE.Vector3(),b=new THREE.Vector3();
  let snapshot=null,disposed=false,readoutWidth=260,readoutHeight=64,measure=true;
  function endpoints(object,start,end) {const p=object.geometry.attributes.position;p.setXYZ(0,start.x,start.y,start.z);p.setXYZ(1,end.x,end.y,end.z);p.needsUpdate=true;}
  function hide() {group.visible=false;readout.style.display='none';status.style.display='none';status.textContent='';delete readout.dataset.axes;for(const guide of Object.values(guides))guide.visible=false;}
  function receive(next) {
    if(disposed)return;
    snapshot=next?.space==='3d'&&owns(next.owner)&&AXES.every(axis=>Number.isFinite(next.origin?.[axis])&&Number.isFinite(next.delta?.[axis]))?next:null;
    if(!snapshot){hide();return;}
    origin.set(next.origin.x,next.origin.y,next.origin.z);current.set(origin.x+next.delta.x,origin.y+next.delta.y,origin.z+next.delta.z);
    const axes=AXES.filter(axis=>next.axes?.includes(axis)),supported=next.supported||AXES,blocked=axes.some(axis=>!supported.includes(axis));
    readout.dataset.axes=axes.join('');readout.dataset.total=Math.hypot(next.delta.x,next.delta.y,next.delta.z).toFixed(6);
    status.style.display=axes.length?'block':'none';status.textContent=axes.length?axes.map(axis=>axis.toUpperCase()).join(' + ')+' locked'+(blocked?' · '+(!supported.includes('y')?'planar edit':supported.length===1&&supported[0]==='y'?'vertical edit':'gizmo axis'):''):'';
    status.style.color=axes.length===1?COLORS[axes[0]]:'#e8eef4';
    total.textContent='Move '+Math.hypot(next.delta.x,next.delta.y,next.delta.z).toFixed(2)+' m';
    for(const axis of AXES)componentLabels[axis].textContent=axis.toUpperCase()+' '+signed(next.delta[axis]);
    for(const axis of AXES)guides[axis].visible=axes.includes(axis)&&supported.includes(axis);
    group.visible=true;distance.visible=current.distanceToSquared(origin)>1e-12;endpoints(distance,origin,current);const d=distance.geometry.attributes.lineDistance;d.setX(0,0);d.setX(1,current.distanceTo(origin));d.needsUpdate=true;
    markers[0].position.copy(origin);markers[1].position.copy(current);measure=true;update();
  }
  function update() {
    if(disposed||!snapshot)return;
    const rect=canvas.getBoundingClientRect();if(!rect.width||!rect.height){readout.style.display='none';group.visible=false;return;}
    camera.updateMatrixWorld(true);cameraPoint.copy(current).applyMatrix4(camera.matrixWorldInverse);
    if(cameraPoint.z>=0){readout.style.display='none';group.visible=false;return;}
    group.visible=true;
    const unitsPerPixel=camera.isOrthographicCamera?Math.abs(camera.top-camera.bottom)/camera.zoom/rect.height:2*Math.abs(cameraPoint.z)*Math.tan(camera.fov*Math.PI/360)/camera.zoom/rect.height;
    const scale=Math.max(.00001,unitsPerPixel),length=scale*90;
    for(const axis of AXES)if(guides[axis].visible){a.copy(current);b.copy(current);a[axis]-=length;b[axis]+=length;endpoints(guides[axis],a,b);}
    markers[0].scale.setScalar(scale*2.3);markers[1].scale.setScalar(scale*3.2);markers[0].visible=current.distanceTo(origin)>scale*5;
    distance.material.dashSize=scale*6;distance.material.gapSize=scale*4;
    projected.copy(current).project(camera);if(!Number.isFinite(projected.x)||!Number.isFinite(projected.y)){readout.style.display='none';return;}
    readout.style.display='block';if(measure){readoutWidth=readout.offsetWidth||260;readoutHeight=readout.offsetHeight||(status.style.display==='none'?48:64);measure=false;}
    const width=Math.min(readoutWidth,rect.width-16),height=Math.min(readoutHeight,rect.height-16),px=(projected.x+1)*rect.width/2,py=(1-projected.y)*rect.height/2;
    const x=px+14+width<=rect.width-8?px+14:px-width-14,y=py-height-14;
    const parent=container.getBoundingClientRect(),left=rect.left-parent.left+(container.scrollLeft||0),top=rect.top-parent.top+(container.scrollTop||0);
    readout.style.left=(left+Math.max(8,Math.min(rect.width-width-8,x)))+'px';readout.style.top=(top+Math.max(8,Math.min(rect.height-height-8,y)))+'px';
  }
  const unsubscribe=manager?.subscribe?.(receive);
  function dispose() {if(disposed)return;hide();disposed=true;unsubscribe?.();snapshot=null;readout.remove();group.removeFromParent();for(const geometry of geometries)geometry.dispose();for(const material of materials)material.dispose();}
  return{update,dispose};
}
