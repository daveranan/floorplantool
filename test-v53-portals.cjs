const assert=require('assert'),R=require('./dist/route-stairs'),P=require('./dist/preview-geometry'),D=require('./dist/stair-detail'),S=require('./dist/room-shapes');
function check(angle=0){
 const route=R.create([[3,-1],[3,11]],{id:'route',startZ:0,endZ:3,start:{kind:'room',floor:'L0',room:'lower'},end:{kind:'room',floor:'L1',room:'upper'},width:2});
 const lower={id:'lower',name:'Lower',type:'tech',x:0,y:-5,w:6,h:4},upper={id:'upper',name:'Upper',type:'tech',x:0,y:11,w:6,h:5};
 if(angle){for(const r of [route,lower,upper])S.rotate(r,angle,{x:0,y:0});}
 const plan={floors:{L0:{z:0,clearHeight:3,rooms:[lower,route],doors:[],entrances:[]},L1:{z:3,clearHeight:3,rooms:[upper],doors:[],entrances:[]}}};
 const data=P.build(plan,D),st=data.stairs.find(s=>s.roomId==='route');assert(st.access.length>=2);
 for(const access of st.access){assert(access.valid);const floor=data.levels.find(l=>l.id===access.floor),inside=access.portalGeometry;const walls=[...floor.boxes,...floor.polygons].filter(w=>w.kind==='wall'&&[w.room,...w.rooms||[]].includes(access.room)&&w.z<access.z+2.19&&w.z+w.height>access.z+.1);
 for(const wall of walls){const ring=wall.polygon||[[wall.x,wall.y],[wall.x+wall.w,wall.y],[wall.x+wall.w,wall.y+wall.h],[wall.x,wall.y+wall.h]];const overlap=S.clip.intersection([[ring]],inside).reduce((a,p)=>a+Math.abs(S.areaOf(p[0]))-p.slice(1).reduce((a,h)=>a+Math.abs(S.areaOf(h)),0),0);assert(overlap<1e-6,'stair portal obstructed on '+access.floor);}
 const center=access.geometry.polygon.reduce((s,p)=>[s[0]+p[0]/4,s[1]+p[1]/4],[0,0]);assert(floor.boxes.concat(floor.polygons).some(w=>w.kind==='wall'),'unrelated wall preserved');
 }
}
check();check(25);console.log('PASS linked stair arrival openings on both floors, rotated walls and unrelated wall preservation');
