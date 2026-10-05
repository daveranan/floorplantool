(()=>{var Rn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uu=0,Bc=1,Fu=2;var zc=1,Ou=2,gi=3,wi=0,Cn=1,hn=2,Pi=0,as=1,Hc=2,kc=3,Vc=4,Bu=5,Gi=100,zu=101,Hu=102,ku=103,Vu=104,Gu=200,Wu=201,Xu=202,Yu=203,ha=204,ua=205,qu=206,Zu=207,Ku=208,Ju=209,$u=210,ju=211,Qu=212,ed=213,td=214,Xa=0,Ya=1,qa=2,ls=3,Za=4,Ka=5,Ja=6,$a=7,Gc=0,nd=1,id=2,Ii=0,sd=1,rd=2,od=3,ad=4,ld=5,cd=6,hd=7;var Wc=300,_s=301,xs=302,ja=303,Qa=304,go=306,da=1e3,Vi=1001,fa=1002,Dn=1003,ud=1004;var _o=1005;var ii=1006,el=1007;var Ki=1008;var oi=1009,Xc=1010,Yc=1011,ur=1012,tl=1013,Ji=1014,ai=1015,dr=1016,nl=1017,il=1018,fr=1020,qc=35902,Zc=35899,Kc=1021,Jc=1022,Yn=1023,Js=1026,pr=1027,sl=1028,rl=1029,$c=1030,ol=1031;var al=1033,xo=33776,yo=33777,vo=33778,Mo=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,_l=37810,xl=37811,yl=37812,vl=37813,Ml=37814,El=37815,Sl=37816,bl=37817,wl=37818,Tl=37819,Al=37820,Rl=37821,Cl=36492,Pl=36494,Il=36495,Dl=36283,Ll=36284,Nl=36285,Ul=36286;var Br=2300,pa=2301,ca=2302,Tc=2400,Ac=2401,Rc=2402;var dd=3200,fd=3201;var jc=0,pd=1,Di="",an="srgb",cs="srgb-linear",zr="linear",Bt="srgb";var os=7680;var Cc=519,md=512,gd=513,_d=514,Qc=515,xd=516,yd=517,vd=518,Md=519,ma=35044;var eh="300 es",ni=2e3,Hr=2001;var di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=1234567,Zs=Math.PI/180,hs=180/Math.PI;function ui(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function th(i,e){return(i%e+e)%e}function Df(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lf(i,e,t){return i!==e?(t-i)/(e-i):0}function Ur(i,e,t){return(1-t)*i+t*e}function Nf(i,e,t,n){return Ur(i,e,1-Math.exp(-t*n))}function Uf(i,e=1){return e-Math.abs(th(i,e*2)-e)}function Ff(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Of(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Bf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zf(i,e){return i+Math.random()*(e-i)}function Hf(i){return i*(.5-Math.random())}function kf(i){i!==void 0&&(tu=i);let e=tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vf(i){return i*Zs}function Gf(i){return i*hs}function Wf(i){return(i&i-1)===0&&i!==0}function Xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qf(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),d=o((e+n)/2),p=r((e-n)/2),u=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*d,c*p,c*u,a*l);break;case"YZY":i.set(c*u,a*d,c*p,a*l);break;case"ZXZ":i.set(c*p,c*u,a*d,a*l);break;case"XZX":i.set(a*d,c*_,c*m,a*l);break;case"YXY":i.set(c*m,a*d,c*_,a*l);break;case"ZYZ":i.set(c*_,c*m,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Nn={DEG2RAD:Zs,RAD2DEG:hs,generateUUID:ui,clamp:vt,euclideanModulo:th,mapLinear:Df,inverseLerp:Lf,lerp:Ur,damp:Nf,pingpong:Uf,smoothstep:Ff,smootherstep:Of,randInt:Bf,randFloat:zf,randFloatSpread:Hf,seededRandom:kf,degToRad:Vf,radToDeg:Gf,isPowerOfTwo:Wf,ceilPowerOfTwo:Xf,floorPowerOfTwo:Yf,setQuaternionFromProperEuler:qf,normalize:Ot,denormalize:ti},Se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],p=n[s+3],u=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(p!==x||c!==u||l!==m||d!==_){let f=1-a,g=c*u+l*m+d*_+p*x,R=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){let D=Math.sqrt(S),C=Math.atan2(D,g*R);f=Math.sin(f*C)/D,a=Math.sin(a*C)/D}let v=a*R;if(c=c*f+u*v,l=l*f+m*v,d=d*f+_*v,p=p*f+x*v,f===1-a){let D=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=D,l*=D,d*=D,p*=D}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],p=r[o],u=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+d*p+c*m-l*u,e[t+1]=c*_+d*u+l*p-a*m,e[t+2]=l*_+d*m+a*u-c*p,e[t+3]=d*_-a*p-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),p=a(r/2),u=c(n/2),m=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=u*d*p+l*m*_,this._y=l*m*p-u*d*_,this._z=l*d*_+u*m*p,this._w=l*d*p-u*m*_;break;case"YXZ":this._x=u*d*p+l*m*_,this._y=l*m*p-u*d*_,this._z=l*d*_-u*m*p,this._w=l*d*p+u*m*_;break;case"ZXY":this._x=u*d*p-l*m*_,this._y=l*m*p+u*d*_,this._z=l*d*_+u*m*p,this._w=l*d*p-u*m*_;break;case"ZYX":this._x=u*d*p-l*m*_,this._y=l*m*p+u*d*_,this._z=l*d*_-u*m*p,this._w=l*d*p+u*m*_;break;case"YZX":this._x=u*d*p+l*m*_,this._y=l*m*p+u*d*_,this._z=l*d*_-u*m*p,this._w=l*d*p-u*m*_;break;case"XZY":this._x=u*d*p-l*m*_,this._y=l*m*p-u*d*_,this._z=l*d*_+u*m*p,this._w=l*d*p+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],p=t[10],u=n+a+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>p){let m=2*Math.sqrt(1+n-a-p);this._w=(d-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>p){let m=2*Math.sqrt(1+a-n-p);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+d)/m}else{let m=2*Math.sqrt(1+p-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),d=Math.atan2(l,a),p=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=o*p+this._w*u,this._x=n*p+this._x*u,this._y=s*p+this._y*u,this._z=r*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),d=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+c*l+o*p-a*d,this.y=n+c*d+a*l-r*p,this.z=s+c*p+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new w,nu=new Dt,pt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],p=n[7],u=n[2],m=n[5],_=n[8],x=s[0],f=s[3],g=s[6],R=s[1],S=s[4],v=s[7],D=s[2],C=s[5],U=s[8];return r[0]=o*x+a*R+c*D,r[3]=o*f+a*S+c*C,r[6]=o*g+a*v+c*U,r[1]=l*x+d*R+p*D,r[4]=l*f+d*S+p*C,r[7]=l*g+d*v+p*U,r[2]=u*x+m*R+_*D,r[5]=u*f+m*S+_*C,r[8]=u*g+m*v+_*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],p=d*o-a*l,u=a*c-d*r,m=l*r-o*c,_=t*p+n*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=p*x,e[1]=(s*l-d*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(d*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ql.makeScale(e,t)),this}rotate(e){return this.premultiply(Ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ql=new pt;function nh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ed(){let i=kr("canvas");return i.style.display="block",i}var iu={};function $s(i){i in iu||(iu[i]=!0,console.warn(i))}function Sd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var su=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zf(){let i={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Bt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Bt&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cs]:{primaries:e,whitePoint:n,transfer:zr,toXYZ:su,fromXYZ:ru,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:su,fromXYZ:ru,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}var At=Zf();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Is,ga=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=kr("canvas")),Is.width=e.width,Is.height=e.height;let s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=kr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kf=0,js=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ec(s[o].image)):r.push(ec(s[o]))}else r=ec(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ga.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jf=0,tc=new w,An=class i extends di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Vi,s=Vi,r=ii,o=Ki,a=Yn,c=oi,l=i.DEFAULT_ANISOTROPY,d=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ui(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case da:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case da:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Wc;An.DEFAULT_ANISOTROPY=1;var Zt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],p=c[8],u=c[1],m=c[5],_=c[9],x=c[2],f=c[6],g=c[10];if(Math.abs(d-u)<.01&&Math.abs(p-x)<.01&&Math.abs(_-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+x)<.1&&Math.abs(_+f)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,v=(m+1)/2,D=(g+1)/2,C=(d+u)/4,U=(p+x)/4,N=(_+f)/4;return S>v&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=U/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=N/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=U/r,s=N/r),this.set(n,s,r,t),this}let R=Math.sqrt((f-_)*(f-_)+(p-x)*(p-x)+(u-d)*(u-d));return Math.abs(R)<.001&&(R=1),this.x=(f-_)/R,this.y=(p-x)/R,this.z=(u-d)/R,this.w=Math.acos((l+m+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_a=class extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new An(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new js(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends _a{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vr=class extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xa=class extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),No.subVectors(this.max,br),Ds.subVectors(e.a,br),Ls.subVectors(e.b,br),Ns.subVectors(e.c,br),Fi.subVectors(Ls,Ds),Oi.subVectors(Ns,Ls),ns.subVectors(Ds,Ns);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-ns.z,ns.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,ns.z,0,-ns.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-ns.y,ns.x,0];return!nc(t,Ds,Ls,Ns,No)||(t=[1,0,0,0,1,0,0,0,1],!nc(t,Ds,Ls,Ns,No))?!1:(Uo.crossVectors(Fi,Oi),t=[Uo.x,Uo.y,Uo.z],nc(t,Ds,Ls,Ns,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new w,new w,new w,new w,new w,new w,new w,new w],jn=new w,Lo=new fn,Ds=new w,Ls=new w,Ns=new w,Fi=new w,Oi=new w,ns=new w,br=new w,No=new w,Uo=new w,is=new w;function nc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){is.fromArray(i,r);let a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),c=e.dot(is),l=t.dot(is),d=n.dot(is);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var $f=new fn,wr=new w,ic=new w,Ti=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$f.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(ic)),this.expandByPoint(wr.copy(e.center).sub(ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vi=new w,sc=new w,Fo=new w,Bi=new w,rc=new w,Oo=new w,oc=new w,Wi=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sc.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(sc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Fo),a=Bi.dot(this.direction),c=-Bi.dot(Fo),l=Bi.lengthSq(),d=Math.abs(1-o*o),p,u,m,_;if(d>0)if(p=o*c-a,u=o*a-c,_=r*d,p>=0)if(u>=-_)if(u<=_){let x=1/d;p*=x,u*=x,m=p*(p+o*u+2*a)+u*(o*p+u+2*c)+l}else u=r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*c)+l;else u=-r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*c)+l;else u<=-_?(p=Math.max(0,-(-o*r+a)),u=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+u*(u+2*c)+l):u<=_?(p=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(p=Math.max(0,-(o*r+a)),u=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+u*(u+2*c)+l);else u=o>0?-r:r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(sc).addScaledVector(Fo,u),m}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,s,r){rc.subVectors(t,e),Oo.subVectors(n,e),oc.crossVectors(rc,Oo);let o=this.direction.dot(oc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);let c=a*this.direction.dot(Oo.crossVectors(Bi,Oo));if(c<0)return null;let l=a*this.direction.dot(rc.cross(Bi));if(l<0||c+l>o)return null;let d=-a*Bi.dot(oc);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class i{constructor(e,t,n,s,r,o,a,c,l,d,p,u,m,_,x,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,d,p,u,m,_,x,f)}set(e,t,n,s,r,o,a,c,l,d,p,u,m,_,x,f){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=d,g[10]=p,g[14]=u,g[3]=m,g[7]=_,g[11]=x,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=o*d,m=o*p,_=a*d,x=a*p;t[0]=c*d,t[4]=-c*p,t[8]=l,t[1]=m+_*l,t[5]=u-x*l,t[9]=-a*c,t[2]=x-u*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*d,m=c*p,_=l*d,x=l*p;t[0]=u+x*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*p,t[5]=o*d,t[9]=-a,t[2]=m*a-_,t[6]=x+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*d,m=c*p,_=l*d,x=l*p;t[0]=u-x*a,t[4]=-o*p,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*d,t[9]=x-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*d,m=o*p,_=a*d,x=a*p;t[0]=c*d,t[4]=_*l-m,t[8]=u*l+x,t[1]=c*p,t[5]=x*l+u,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,m=o*l,_=a*c,x=a*l;t[0]=c*d,t[4]=x-u*p,t[8]=_*p+m,t[1]=p,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=m*p+_,t[10]=u-x*p}else if(e.order==="XZY"){let u=o*c,m=o*l,_=a*c,x=a*l;t[0]=c*d,t[4]=-p,t[8]=l*d,t[1]=u*p+x,t[5]=o*d,t[9]=m*p-_,t[2]=_*p-m,t[6]=a*d,t[10]=x*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jf,e,Qf)}lookAt(e,t,n){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),zi.crossVectors(n,On),zi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),zi.crossVectors(n,On)),zi.normalize(),Bo.crossVectors(On,zi),s[0]=zi.x,s[4]=Bo.x,s[8]=On.x,s[1]=zi.y,s[5]=Bo.y,s[9]=On.y,s[2]=zi.z,s[6]=Bo.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],p=n[5],u=n[9],m=n[13],_=n[2],x=n[6],f=n[10],g=n[14],R=n[3],S=n[7],v=n[11],D=n[15],C=s[0],U=s[4],N=s[8],T=s[12],b=s[1],F=s[5],Z=s[9],$=s[13],ee=s[2],B=s[6],V=s[10],X=s[14],z=s[3],ce=s[7],xe=s[11],oe=s[15];return r[0]=o*C+a*b+c*ee+l*z,r[4]=o*U+a*F+c*B+l*ce,r[8]=o*N+a*Z+c*V+l*xe,r[12]=o*T+a*$+c*X+l*oe,r[1]=d*C+p*b+u*ee+m*z,r[5]=d*U+p*F+u*B+m*ce,r[9]=d*N+p*Z+u*V+m*xe,r[13]=d*T+p*$+u*X+m*oe,r[2]=_*C+x*b+f*ee+g*z,r[6]=_*U+x*F+f*B+g*ce,r[10]=_*N+x*Z+f*V+g*xe,r[14]=_*T+x*$+f*X+g*oe,r[3]=R*C+S*b+v*ee+D*z,r[7]=R*U+S*F+v*B+D*ce,r[11]=R*N+S*Z+v*V+D*xe,r[15]=R*T+S*$+v*X+D*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],p=e[6],u=e[10],m=e[14],_=e[3],x=e[7],f=e[11],g=e[15];return _*(+r*c*p-s*l*p-r*a*u+n*l*u+s*a*m-n*c*m)+x*(+t*c*m-t*l*u+r*o*u-s*o*m+s*l*d-r*c*d)+f*(+t*l*p-t*a*m-r*o*p+n*o*m+r*a*d-n*l*d)+g*(-s*a*d-t*c*p+t*a*u+s*o*p-n*o*u+n*c*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],p=e[9],u=e[10],m=e[11],_=e[12],x=e[13],f=e[14],g=e[15],R=p*f*l-x*u*l+x*c*m-a*f*m-p*c*g+a*u*g,S=_*u*l-d*f*l-_*c*m+o*f*m+d*c*g-o*u*g,v=d*x*l-_*p*l+_*a*m-o*x*m-d*a*g+o*p*g,D=_*p*c-d*x*c-_*a*u+o*x*u+d*a*f-o*p*f,C=t*R+n*S+s*v+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=R*U,e[1]=(x*u*r-p*f*r-x*s*m+n*f*m+p*s*g-n*u*g)*U,e[2]=(a*f*r-x*c*r+x*s*l-n*f*l-a*s*g+n*c*g)*U,e[3]=(p*c*r-a*u*r-p*s*l+n*u*l+a*s*m-n*c*m)*U,e[4]=S*U,e[5]=(d*f*r-_*u*r+_*s*m-t*f*m-d*s*g+t*u*g)*U,e[6]=(_*c*r-o*f*r-_*s*l+t*f*l+o*s*g-t*c*g)*U,e[7]=(o*u*r-d*c*r+d*s*l-t*u*l-o*s*m+t*c*m)*U,e[8]=v*U,e[9]=(_*p*r-d*x*r-_*n*m+t*x*m+d*n*g-t*p*g)*U,e[10]=(o*x*r-_*a*r+_*n*l-t*x*l-o*n*g+t*a*g)*U,e[11]=(d*a*r-o*p*r-d*n*l+t*p*l+o*n*m-t*a*m)*U,e[12]=D*U,e[13]=(d*x*s-_*p*s+_*n*u-t*x*u-d*n*f+t*p*f)*U,e[14]=(_*a*s-o*x*s-_*n*c+t*x*c+o*n*f-t*a*f)*U,e[15]=(o*p*s-d*a*s+d*n*c-t*p*c-o*n*u+t*a*u)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,p=a+a,u=r*l,m=r*d,_=r*p,x=o*d,f=o*p,g=a*p,R=c*l,S=c*d,v=c*p,D=n.x,C=n.y,U=n.z;return s[0]=(1-(x+g))*D,s[1]=(m+v)*D,s[2]=(_-S)*D,s[3]=0,s[4]=(m-v)*C,s[5]=(1-(u+g))*C,s[6]=(f+R)*C,s[7]=0,s[8]=(_+S)*U,s[9]=(f-R)*U,s[10]=(1-(u+x))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Us.set(s[0],s[1],s[2]).length(),o=Us.set(s[4],s[5],s[6]).length(),a=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);let l=1/r,d=1/o,p=1/a;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=d,Qn.elements[5]*=d,Qn.elements[6]*=d,Qn.elements[8]*=p,Qn.elements[9]*=p,Qn.elements[10]*=p,t.setFromRotationMatrix(Qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ni,c=!1){let l=this.elements,d=2*r/(t-e),p=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s),_,x;if(c)_=r/(o-r),x=o*r/(o-r);else if(a===ni)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Hr)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ni,c=!1){let l=this.elements,d=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s),_,x;if(c)_=1/(o-r),x=o/(o-r);else if(a===ni)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===Hr)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Us=new w,Qn=new Rt,jf=new w(0,0,0),Qf=new w(1,1,1),zi=new w,Bo=new w,On=new w,ou=new Rt,au=new Dt,cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],p=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return au.setFromEuler(this),this.setFromQuaternion(au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ep=0,lu=new w,Fs=new Dt,Mi=new Rt,zo=new w,Tr=new w,tp=new w,np=new Dt,cu=new w(1,0,0),hu=new w(0,1,0),uu=new w(0,0,1),du={type:"added"},ip={type:"removed"},Os={type:"childadded",child:null},ac={type:"childremoved",child:null},Lt=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new cn,n=new Dt,s=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new pt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(hu,e)}rotateZ(e){return this.rotateOnAxis(uu,e)}translateOnAxis(e,t){return lu.copy(e).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(hu,e)}translateZ(e){return this.translateOnAxis(uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zo.copy(e):zo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Tr,zo,this.up):Mi.lookAt(zo,Tr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Mi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(du),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ip),ac.child=e,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(du),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),p=o(e.shapes),u=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new w(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new w,Ei=new w,lc=new w,Si=new w,Bs=new w,zs=new w,fu=new w,cc=new w,hc=new w,uc=new w,dc=new Zt,fc=new Zt,pc=new Zt,ci=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),Ei.subVectors(n,t),lc.subVectors(e,t);let o=ei.dot(ei),a=ei.dot(Ei),c=ei.dot(lc),l=Ei.dot(Ei),d=Ei.dot(lc),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;let u=1/p,m=(l*c-a*d)*u,_=(o*d-a*c)*u;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(a,Si.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return dc.setScalar(0),fc.setScalar(0),pc.setScalar(0),dc.fromBufferAttribute(e,t),fc.fromBufferAttribute(e,n),pc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(dc,r.x),o.addScaledVector(fc,r.y),o.addScaledVector(pc,r.z),o}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),Ei.subVectors(e,t),ei.cross(Ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),ei.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Bs.subVectors(s,n),zs.subVectors(r,n),cc.subVectors(e,n);let c=Bs.dot(cc),l=zs.dot(cc);if(c<=0&&l<=0)return t.copy(n);hc.subVectors(e,s);let d=Bs.dot(hc),p=zs.dot(hc);if(d>=0&&p<=d)return t.copy(s);let u=c*p-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Bs,o);uc.subVectors(e,r);let m=Bs.dot(uc),_=zs.dot(uc);if(_>=0&&m<=_)return t.copy(r);let x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(zs,a);let f=d*_-m*p;if(f<=0&&p-d>=0&&m-_>=0)return fu.subVectors(r,s),a=(p-d)/(p-d+(m-_)),t.copy(s).addScaledVector(fu,a);let g=1/(f+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(Bs,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var St=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=At.workingColorSpace){if(e=th(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=mc(o,r,e+1/3),this.g=mc(o,r,e),this.b=mc(o,r,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return At.workingToColorSpace(gn.copy(this),e),Math.round(vt(gn.r*255,0,255))*65536+Math.round(vt(gn.g*255,0,255))*256+Math.round(vt(gn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(gn.copy(this),t);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let p=o-a;switch(l=d<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=an){At.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,s=gn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Ho);let n=Ur(Hi.h,Ho.h,t),s=Ur(Hi.s,Ho.s,t),r=Ur(Hi.l,Ho.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new St;St.NAMES=bd;var sp=0,pi=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=as,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},jt=class extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new w,ko=new Se,rp=0,en=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ma,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ma&&(e.usage=this.usage),e}};var Gr=class extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wr=class extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}},op=0,Wn=new Rt,gc=new Lt,Hs=new w,Bn=new fn,Ar=new fn,on=new w,xt=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nh(e)?Wr:Gr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Bn.min,Ar.min),Bn.expandByPoint(on),on.addVectors(Bn.max,Ar.max),Bn.expandByPoint(on)):(Bn.expandByPoint(Ar.min),Bn.expandByPoint(Ar.max))}Bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)on.fromBufferAttribute(a,l),c&&(Hs.fromBufferAttribute(e,l),on.add(Hs)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new w,c[N]=new w;let l=new w,d=new w,p=new w,u=new Se,m=new Se,_=new Se,x=new w,f=new w;function g(N,T,b){l.fromBufferAttribute(n,N),d.fromBufferAttribute(n,T),p.fromBufferAttribute(n,b),u.fromBufferAttribute(r,N),m.fromBufferAttribute(r,T),_.fromBufferAttribute(r,b),d.sub(l),p.sub(l),m.sub(u),_.sub(u);let F=1/(m.x*_.y-_.x*m.y);isFinite(F)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(F),f.copy(p).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(F),a[N].add(x),a[T].add(x),a[b].add(x),c[N].add(f),c[T].add(f),c[b].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let N=0,T=R.length;N<T;++N){let b=R[N],F=b.start,Z=b.count;for(let $=F,ee=F+Z;$<ee;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}let S=new w,v=new w,D=new w,C=new w;function U(N){D.fromBufferAttribute(s,N),C.copy(D);let T=a[N];S.copy(T),S.sub(D.multiplyScalar(D.dot(T))).normalize(),v.crossVectors(C,T);let F=v.dot(c[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,F)}for(let N=0,T=R.length;N<T;++N){let b=R[N],F=b.start,Z=b.count;for(let $=F,ee=F+Z;$<ee;$+=3)U(e.getX($+0)),U(e.getX($+1)),U(e.getX($+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new w,r=new w,o=new w,a=new w,c=new w,l=new w,d=new w,p=new w;if(e)for(let u=0,m=e.count;u<m;u+=3){let _=e.getX(u+0),x=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,f),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,f),a.add(d),c.add(d),l.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,p=a.normalized,u=new l.constructor(c.length*d),m=0,_=0;for(let x=0,f=c.length;x<f;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*d;for(let g=0;g<d;g++)u[_++]=l[m++]}return new en(u,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,p=l.length;d<p;d++){let u=l[d],m=e(u,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let p=0,u=l.length;p<u;p++){let m=l[p];d.push(m.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],p=r[l];for(let u=0,m=p.length;u<m;u++)d.push(p[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pu=new Rt,ss=new Wi,Vo=new Ti,mu=new w,Go=new w,Wo=new w,Xo=new w,_c=new w,Yo=new w,gu=new w,qo=new w,Ae=class extends Lt{constructor(e=new xt,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Yo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],p=r[c];d!==0&&(_c.fromBufferAttribute(p,e),o?Yo.addScaledVector(_c,d):Yo.addScaledVector(_c.sub(t),d))}t.add(Yo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(Vo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Vo,mu)===null||ss.origin.distanceToSquared(mu)>(e.far-e.near)**2))&&(pu.copy(r).invert(),ss.copy(e.ray).applyMatrix4(pu),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=u.length;_<x;_++){let f=u[_],g=o[f.materialIndex],R=Math.max(f.start,m.start),S=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let v=R,D=S;v<D;v+=3){let C=a.getX(v),U=a.getX(v+1),N=a.getX(v+2);s=Zo(this,g,e,n,l,d,p,C,U,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=_,g=x;f<g;f+=3){let R=a.getX(f),S=a.getX(f+1),v=a.getX(f+2);s=Zo(this,o,e,n,l,d,p,R,S,v),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=u.length;_<x;_++){let f=u[_],g=o[f.materialIndex],R=Math.max(f.start,m.start),S=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let v=R,D=S;v<D;v+=3){let C=v,U=v+1,N=v+2;s=Zo(this,g,e,n,l,d,p,C,U,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let f=_,g=x;f<g;f+=3){let R=f,S=f+1,v=f+2;s=Zo(this,o,e,n,l,d,p,R,S,v),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function ap(i,e,t,n,s,r,o,a){let c;if(e.side===Cn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===wi,a),c===null)return null;qo.copy(a),qo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(qo);return l<t.near||l>t.far?null:{distance:l,point:qo.clone(),object:i}}function Zo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Go),i.getVertexPosition(c,Wo),i.getVertexPosition(l,Xo);let d=ap(i,e,t,n,Go,Wo,Xo,gu);if(d){let p=new w;ci.getBarycoord(gu,Go,Wo,Xo,p),s&&(d.uv=ci.getInterpolatedAttribute(s,a,c,l,p,new Se)),r&&(d.uv1=ci.getInterpolatedAttribute(r,a,c,l,p,new Se)),o&&(d.normal=ci.getInterpolatedAttribute(o,a,c,l,p,new w),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new w,materialIndex:0};ci.getNormal(Go,Wo,Xo,u.normal),d.face=u,d.barycoord=p}return d}var Ct=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],p=[],u=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(p,2));function _(x,f,g,R,S,v,D,C,U,N,T){let b=v/U,F=D/N,Z=v/2,$=D/2,ee=C/2,B=U+1,V=N+1,X=0,z=0,ce=new w;for(let xe=0;xe<V;xe++){let oe=xe*F-$;for(let Te=0;Te<B;Te++){let Ve=Te*b-Z;ce[x]=Ve*R,ce[f]=oe*S,ce[g]=ee,l.push(ce.x,ce.y,ce.z),ce[x]=0,ce[f]=0,ce[g]=C>0?1:-1,d.push(ce.x,ce.y,ce.z),p.push(Te/U),p.push(1-xe/N),X+=1}}for(let xe=0;xe<N;xe++)for(let oe=0;oe<U;oe++){let Te=u+oe+B*xe,Ve=u+oe+B*(xe+1),nt=u+(oe+1)+B*(xe+1),Qe=u+(oe+1)+B*xe;c.push(Te,Ve,Qe),c.push(Ve,nt,Qe),z+=6}a.addGroup(m,z,T),m+=z,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=ys(i[t]);for(let s in n)e[s]=n[s]}return e}function lp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ih(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var wd={clone:ys,merge:xn},cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cp,this.fragmentShader=hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xr=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new w,_u=new Se,xu=new Se,dn=class extends Xr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,_u,xu),t.subVectors(xu,_u)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Vs=1,ya=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(ks,Vs,e,t);s.layers=this.layers,this.add(s);let r=new dn(ks,Vs,e,t);r.layers=this.layers,this.add(r);let o=new dn(ks,Vs,e,t);o.layers=this.layers,this.add(o);let a=new dn(ks,Vs,e,t);a.layers=this.layers,this.add(a);let c=new dn(ks,Vs,e,t);c.layers=this.layers,this.add(c);let l=new dn(ks,Vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(p,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Yr=class extends An{constructor(e=[],t=_s,n,s,r,o,a,c,l,d){super(e,t,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},va=class extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ct(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Pi});r.uniforms.tEquirect.value=t;let o=new Ae(s,r),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=ii),new ya(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ln=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},up={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,n),g=this._getHandJoint(l,x);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=d.position.distanceTo(p.position),m=.02,_=.005;l.inputState.pinching&&u>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(up)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var qr=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ma=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ma,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new w,Zr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tr=class extends pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gs,Rr=new w,Ws=new w,Xs=new w,Ys=new Se,Cr=new Se,Td=new Rt,Ko=new w,Pr=new w,Jo=new w,yu=new Se,xc=new Se,vu=new Se,Kr=class extends Lt{constructor(e=new tr){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ma(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new Zr(n,3,0,!1)),Gs.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new Se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),Td.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;$o(Ko.set(-.5,-.5,0),Xs,o,Ws,s,r),$o(Pr.set(.5,-.5,0),Xs,o,Ws,s,r),$o(Jo.set(.5,.5,0),Xs,o,Ws,s,r),yu.set(0,0),xc.set(1,0),vu.set(1,1);let a=e.ray.intersectTriangle(Ko,Pr,Jo,!1,Rr);if(a===null&&($o(Pr.set(-.5,.5,0),Xs,o,Ws,s,r),xc.set(0,1),a=e.ray.intersectTriangle(Ko,Jo,Pr,!1,Rr),a===null))return;let c=e.ray.origin.distanceTo(Rr);c<e.near||c>e.far||t.push({distance:c,point:Rr.clone(),uv:ci.getInterpolation(Rr,Ko,Pr,Jo,yu,xc,vu,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $o(i,e,t,n,s,r){Ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Cr.x=r*Ys.x-s*Ys.y,Cr.y=s*Ys.x+r*Ys.y):Cr.copy(Ys),i.copy(e),i.x+=Cr.x,i.y+=Cr.y,i.applyMatrix4(Td)}var Ea=class extends An{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Dn,d=Dn,p,u){super(null,o,a,c,l,d,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jr=class extends en{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qs=new Rt,Mu=new Rt,jo=[],Eu=new fn,dp=new Rt,Ir=new Ae,Dr=new Ti,nr=class extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),Eu.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(Eu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),Dr.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),Mu.multiplyMatrices(n,qs),Ir.matrixWorld=Mu,Ir.raycast(e,jo);for(let o=0,a=jo.length;o<a;o++){let c=jo[o];c.instanceId=r,c.object=this,t.push(c)}jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ea(new Float32Array(s*this.count),s,this.count,sl,ai));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yc=new w,fp=new w,pp=new pt,$t=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=yc.subVectors(n,t).cross(fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(yc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pp.getNormalMatrix(e),s=this.coplanarPoint(yc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rs=new Ti,mp=new Se(.5,.5),Qo=new w,ir=class{constructor(e=new $t,t=new $t,n=new $t,s=new $t,r=new $t,o=new $t){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],p=r[5],u=r[6],m=r[7],_=r[8],x=r[9],f=r[10],g=r[11],R=r[12],S=r[13],v=r[14],D=r[15];if(s[0].setComponents(l-o,m-d,g-_,D-R).normalize(),s[1].setComponents(l+o,m+d,g+_,D+R).normalize(),s[2].setComponents(l+a,m+p,g+x,D+S).normalize(),s[3].setComponents(l-a,m-p,g-x,D-S).normalize(),n)s[4].setComponents(c,u,f,v).normalize(),s[5].setComponents(l-c,m-u,g-f,D-v).normalize();else if(s[4].setComponents(l-c,m-u,g-f,D-v).normalize(),t===ni)s[5].setComponents(l+c,m+u,g+f,D+v).normalize();else if(t===Hr)s[5].setComponents(c,u,f,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);let t=mp.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qo.x=s.normal.x>0?e.max.x:e.min.x,Qo.y=s.normal.y>0?e.max.y:e.min.y,Qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _n=class extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sa=new w,ba=new w,Su=new Rt,Lr=new Wi,ea=new Ti,vc=new w,bu=new w,Xt=class extends Lt{constructor(e=new xt,t=new _n){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Sa.fromBufferAttribute(t,s-1),ba.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Sa.distanceTo(ba);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;Su.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Su);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=m,f=_-1;x<f;x+=l){let g=d.getX(x),R=d.getX(x+1),S=ta(this,e,Lr,c,g,R,x);S&&t.push(S)}if(this.isLineLoop){let x=d.getX(_-1),f=d.getX(m),g=ta(this,e,Lr,c,x,f,_-1);g&&t.push(g)}}else{let m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=m,f=_-1;x<f;x+=l){let g=ta(this,e,Lr,c,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=ta(this,e,Lr,c,_-1,m,_-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ta(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Sa.fromBufferAttribute(a,s),ba.fromBufferAttribute(a,r),t.distanceSqToSegment(Sa,ba,vc,bu)>n)return;vc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(vc);if(!(l<e.near||l>e.far))return{distance:l,point:bu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var wu=new w,Tu=new w,Ai=class extends Xt{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wu.fromBufferAttribute(t,s),Tu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wu.distanceTo(Tu);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xi=class extends Xt{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var us=class extends An{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},$r=class extends An{constructor(e,t,n=Ji,s,r,o,a=Dn,c=Dn,l,d=Js,p=1){if(d!==Js&&d!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},jr=class extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Qr=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new w,d=new Se;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){let m=n+p/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Kt=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],p=[],u=[],m=[],_=0,x=[],f=n/2,g=0;R(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(m,2));function R(){let v=new w,D=new w,C=0,U=(t-e)/n;for(let N=0;N<=r;N++){let T=[],b=N/r,F=b*(t-e)+e;for(let Z=0;Z<=s;Z++){let $=Z/s,ee=$*c+a,B=Math.sin(ee),V=Math.cos(ee);D.x=F*B,D.y=-b*n+f,D.z=F*V,p.push(D.x,D.y,D.z),v.set(B,U,V).normalize(),u.push(v.x,v.y,v.z),m.push($,1-b),T.push(_++)}x.push(T)}for(let N=0;N<s;N++)for(let T=0;T<r;T++){let b=x[T][N],F=x[T+1][N],Z=x[T+1][N+1],$=x[T][N+1];(e>0||T!==0)&&(d.push(b,F,$),C+=3),(t>0||T!==r-1)&&(d.push(F,Z,$),C+=3)}l.addGroup(g,C,0),g+=C}function S(v){let D=_,C=new Se,U=new w,N=0,T=v===!0?e:t,b=v===!0?1:-1;for(let Z=1;Z<=s;Z++)p.push(0,f*b,0),u.push(0,b,0),m.push(.5,.5),_++;let F=_;for(let Z=0;Z<=s;Z++){let ee=Z/s*c+a,B=Math.cos(ee),V=Math.sin(ee);U.x=T*V,U.y=f*b,U.z=T*B,p.push(U.x,U.y,U.z),u.push(0,b,0),C.x=B*.5+.5,C.y=V*.5*b+.5,m.push(C.x,C.y),_++}for(let Z=0;Z<s;Z++){let $=D+Z,ee=F+Z;v===!0?d.push(ee,ee+1,$):d.push(ee+1,ee,$),N+=3}l.addGroup(g,N,v===!0?1:2),g+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sr=class i extends Kt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wa=class i extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),d(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(R){let S=new w,v=new w,D=new w;for(let C=0;C<t.length;C+=3)m(t[C+0],S),m(t[C+1],v),m(t[C+2],D),c(S,v,D,R)}function c(R,S,v,D){let C=D+1,U=[];for(let N=0;N<=C;N++){U[N]=[];let T=R.clone().lerp(v,N/C),b=S.clone().lerp(v,N/C),F=C-N;for(let Z=0;Z<=F;Z++)Z===0&&N===C?U[N][Z]=T:U[N][Z]=T.clone().lerp(b,Z/F)}for(let N=0;N<C;N++)for(let T=0;T<2*(C-N)-1;T++){let b=Math.floor(T/2);T%2===0?(u(U[N][b+1]),u(U[N+1][b]),u(U[N][b])):(u(U[N][b+1]),u(U[N+1][b+1]),u(U[N+1][b]))}}function l(R){let S=new w;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(R),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function d(){let R=new w;for(let S=0;S<r.length;S+=3){R.x=r[S+0],R.y=r[S+1],R.z=r[S+2];let v=f(R)/2/Math.PI+.5,D=g(R)/Math.PI+.5;o.push(v,1-D)}_(),p()}function p(){for(let R=0;R<o.length;R+=6){let S=o[R+0],v=o[R+2],D=o[R+4],C=Math.max(S,v,D),U=Math.min(S,v,D);C>.9&&U<.1&&(S<.2&&(o[R+0]+=1),v<.2&&(o[R+2]+=1),D<.2&&(o[R+4]+=1))}}function u(R){r.push(R.x,R.y,R.z)}function m(R,S){let v=R*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function _(){let R=new w,S=new w,v=new w,D=new w,C=new Se,U=new Se,N=new Se;for(let T=0,b=0;T<r.length;T+=9,b+=6){R.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),C.set(o[b+0],o[b+1]),U.set(o[b+2],o[b+3]),N.set(o[b+4],o[b+5]),D.copy(R).add(S).add(v).divideScalar(3);let F=f(D);x(C,b+0,R,F),x(U,b+2,S,F),x(N,b+4,v,F)}}function x(R,S,v,D){D<0&&R.x===1&&(o[S]=R.x-1),v.x===0&&v.z===0&&(o[S]=D/2/Math.PI+.5)}function f(R){return Math.atan2(R.z,-R.x)}function g(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var na=new w,ia=new w,Mc=new w,sa=new ci,eo=class extends xt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Zs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],d=["a","b","c"],p=new Array(3),u={},m=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);let{a:x,b:f,c:g}=sa;if(x.fromBufferAttribute(a,l[0]),f.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),sa.getNormal(Mc),p[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,p[1]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,p[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let R=0;R<3;R++){let S=(R+1)%3,v=p[R],D=p[S],C=sa[d[R]],U=sa[d[S]],N=`${v}_${D}`,T=`${D}_${v}`;T in u&&u[T]?(Mc.dot(u[T].normal)<=r&&(m.push(C.x,C.y,C.z),m.push(U.x,U.y,U.z)),u[T]=null):N in u||(u[N]={index0:l[R],index1:l[S],normal:Mc.clone()})}}for(let _ in u)if(u[_]){let{index0:x,index1:f}=u[_];na.fromBufferAttribute(a,x),ia.fromBufferAttribute(a,f),m.push(na.x,na.y,na.z),m.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new mt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let d=n[s],u=n[s+1]-d,m=(o-d)/u;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Se:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new w,s=[],r=[],o=[],a=new w,c=new Rt;for(let m=0;m<=e;m++){let _=m/e;s[m]=this.getTangentAt(_,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE,d=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(vt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,_))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(vt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],m*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},rr=class extends zn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=c-this.aX,m=l-this.aY;c=u*d-m*p+this.aX,l=u*p+m*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ta=class extends rr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function sh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,d,p){let u=(o-r)/l-(a-r)/(l+d)+(a-o)/d,m=(a-o)/d-(c-o)/(d+p)+(c-a)/p;u*=d,m*=d,s(o,a,u,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ra=new w,Ec=new sh,Sc=new sh,bc=new sh,Aa=class extends zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new w){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,d;this.closed||a>0?l=s[(a-1)%r]:(ra.subVectors(s[0],s[1]).add(s[0]),l=ra);let p=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(ra.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=ra),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(p),m),x=Math.pow(p.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(d),m);x<1e-4&&(x=1),_<1e-4&&(_=x),f<1e-4&&(f=x),Ec.initNonuniformCatmullRom(l.x,p.x,u.x,d.x,_,x,f),Sc.initNonuniformCatmullRom(l.y,p.y,u.y,d.y,_,x,f),bc.initNonuniformCatmullRom(l.z,p.z,u.z,d.z,_,x,f)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(l.x,p.x,u.x,d.x,this.tension),Sc.initCatmullRom(l.y,p.y,u.y,d.y,this.tension),bc.initCatmullRom(l.z,p.z,u.z,d.z,this.tension));return n.set(Ec.calc(c),Sc.calc(c),bc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Au(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function gp(i,e){let t=1-i;return t*t*e}function _p(i,e){return 2*(1-i)*i*e}function xp(i,e){return i*i*e}function Fr(i,e,t,n){return gp(i,e)+_p(i,t)+xp(i,n)}function yp(i,e){let t=1-i;return t*t*t*e}function vp(i,e){let t=1-i;return 3*t*t*i*e}function Mp(i,e){return 3*(1-i)*i*i*e}function Ep(i,e){return i*i*i*e}function Or(i,e,t,n,s){return yp(i,e)+vp(i,t)+Mp(i,n)+Ep(i,s)}var to=class extends zn{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,s.x,r.x,o.x,a.x),Or(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ra=class extends zn{constructor(e=new w,t=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,s.x,r.x,o.x,a.x),Or(e,s.y,r.y,o.y,a.y),Or(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},no=class extends zn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends zn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends zn{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends zn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y),Fr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],d=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Au(a,c.x,l.x,d.x,p.x),Au(a,c.y,l.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},Pc=Object.freeze({__proto__:null,ArcCurve:Ta,CatmullRomCurve3:Aa,CubicBezierCurve:to,CubicBezierCurve3:Ra,EllipseCurve:rr,LineCurve:no,LineCurve3:Ca,QuadraticBezierCurve:io,QuadraticBezierCurve3:Pa,SplineCurve:so}),Ia=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let d=c[l];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Pc[s.type]().fromJSON(s))}return this}},Yi=class extends Ia{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new no(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new io(this.currentPoint.clone(),new Se(e,t),new Se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new to(this.currentPoint.clone(),new Se(e,t),new Se(n,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new so(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+l,t+d,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new rr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ri=class extends Yi{constructor(e){super(e),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Yi().fromJSON(s))}return this}};function Sp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ad(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Rp(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let d=-1/0,p=-1/0;for(let u=t;u<s;u+=t){let m=i[u],_=i[u+1];m<a&&(a=m),_<c&&(c=_),m>d&&(d=m),_>p&&(p=_)}l=Math.max(d-a,p-c),l=l!==0?32767/l:0}return ro(r,o,t,a,c,l,0),o}function Ad(i,e,t,n,s){let r;if(s===zp(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ru(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ru(o/n|0,i[o],i[o+1],r);return r&&or(r,r.next)&&(ao(r),r=r.next),r}function ds(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(or(t,t.next)||qt(t.prev,t,t.next)===0)){if(ao(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ro(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Lp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?wp(i,n,s,r):bp(i)){e.push(c.i,i.i,l.i),ao(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Tp(ds(i),e),ro(i,e,t,n,s,r,2)):o===2&&Ap(i,e,t,n,s,r):ro(ds(i),e,t,n,s,r,1);break}}}function bp(i){let e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,d=Math.min(s,r,o),p=Math.min(a,c,l),u=Math.max(s,r,o),m=Math.max(a,c,l),_=n.next;for(;_!==e;){if(_.x>=d&&_.x<=u&&_.y>=p&&_.y<=m&&Nr(s,a,r,c,o,l,_.x,_.y)&&qt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function wp(i,e,t,n){let s=i.prev,r=i,o=i.next;if(qt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,d=s.y,p=r.y,u=o.y,m=Math.min(a,c,l),_=Math.min(d,p,u),x=Math.max(a,c,l),f=Math.max(d,p,u),g=Ic(m,_,e,t,n),R=Ic(x,f,e,t,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=g&&v&&v.z<=R;){if(S.x>=m&&S.x<=x&&S.y>=_&&S.y<=f&&S!==s&&S!==o&&Nr(a,d,c,p,l,u,S.x,S.y)&&qt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=m&&v.x<=x&&v.y>=_&&v.y<=f&&v!==s&&v!==o&&Nr(a,d,c,p,l,u,v.x,v.y)&&qt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=m&&S.x<=x&&S.y>=_&&S.y<=f&&S!==s&&S!==o&&Nr(a,d,c,p,l,u,S.x,S.y)&&qt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=R;){if(v.x>=m&&v.x<=x&&v.y>=_&&v.y<=f&&v!==s&&v!==o&&Nr(a,d,c,p,l,u,v.x,v.y)&&qt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Tp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!or(n,s)&&Cd(n,t,t.next,s)&&oo(n,s)&&oo(s,n)&&(e.push(n.i,t.i,s.i),ao(t),ao(t.next),t=i=s),t=t.next}while(t!==i);return ds(t)}function Ap(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fp(o,a)){let c=Pd(o,a);o=ds(o,o.next),c=ds(c,c.next),ro(o,e,t,n,s,r,0),ro(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Rp(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Ad(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Up(l))}s.sort(Cp);for(let r=0;r<s.length;r++)t=Pp(s[r],t);return t}function Cp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Pp(i,e){let t=Ip(i,e);if(!t)return e;let n=Pd(t,i);return ds(n,n.next),ds(t,t.next)}function Ip(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(or(i,t))return t;do{if(or(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Rd(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);oo(t,i)&&(p<d||p===d&&(t.x>o.x||t.x===o.x&&Dp(o,t)))&&(o=t,d=p)}t=t.next}while(t!==a);return o}function Dp(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function Lp(i,e,t,n){let s=i;do s.z===0&&(s.z=Ic(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Np(s)}function Np(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ic(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Up(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Rd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Nr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Rd(i,e,t,n,s,r,o,a)}function Fp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Op(i,e)&&(oo(i,e)&&oo(e,i)&&Bp(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||or(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function or(i,e){return i.x===e.x&&i.y===e.y}function Cd(i,e,t,n){let s=aa(qt(i,e,t)),r=aa(qt(i,e,n)),o=aa(qt(t,n,i)),a=aa(qt(t,n,e));return!!(s!==r&&o!==a||s===0&&oa(i,t,e)||r===0&&oa(i,n,e)||o===0&&oa(t,i,n)||a===0&&oa(t,e,n))}function oa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function aa(i){return i>0?1:i<0?-1:0}function Op(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Cd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function oo(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function Bp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Pd(i,e){let t=Dc(i.i,i.x,i.y),n=Dc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ru(i,e,t,n){let s=Dc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zp(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Lc=class{static triangulate(e,t,n=2){return Sp(e,t,n)}},hi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Cu(e),Pu(n,e);let o=e.length;t.forEach(Cu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Pu(n,t[c]);let a=Lc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Cu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ar=class i extends xt{constructor(e=new Ri([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:Hp,S,v=!1,D,C,U,N;g&&(S=g.getSpacedPoints(d),v=!0,u=!1,D=g.computeFrenetFrames(d,!1),C=new w,U=new w,N=new w),u||(f=0,m=0,_=0,x=0);let T=a.extractPoints(l),b=T.shape,F=T.holes;if(!hi.isClockWise(b)){b=b.reverse();for(let fe=0,me=F.length;fe<me;fe++){let le=F[fe];hi.isClockWise(le)&&(F[fe]=le.reverse())}}function $(fe){let le=10000000000000001e-36,ge=fe[0];for(let Ue=1;Ue<=fe.length;Ue++){let pe=Ue%fe.length,be=fe[pe],je=be.x-ge.x,ze=be.y-ge.y,I=je*je+ze*ze,y=Math.max(Math.abs(be.x),Math.abs(be.y),Math.abs(ge.x),Math.abs(ge.y)),Y=le*y*y;if(I<=Y){fe.splice(pe,1),Ue--;continue}ge=be}}$(b),F.forEach($);let ee=F.length,B=b;for(let fe=0;fe<ee;fe++){let me=F[fe];b=b.concat(me)}function V(fe,me,le){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(me,le)}let X=b.length;function z(fe,me,le){let ge,Ue,pe,be=fe.x-me.x,je=fe.y-me.y,ze=le.x-fe.x,I=le.y-fe.y,y=be*be+je*je,Y=be*I-je*ze;if(Math.abs(Y)>Number.EPSILON){let ne=Math.sqrt(y),_e=Math.sqrt(ze*ze+I*I),P=me.x-je/ne,O=me.y+be/ne,K=le.x-I/_e,ae=le.y+ze/_e,we=((K-P)*I-(ae-O)*ze)/(be*I-je*ze);ge=P+be*we-fe.x,Ue=O+je*we-fe.y;let ve=ge*ge+Ue*Ue;if(ve<=2)return new Se(ge,Ue);pe=Math.sqrt(ve/2)}else{let ne=!1;be>Number.EPSILON?ze>Number.EPSILON&&(ne=!0):be<-Number.EPSILON?ze<-Number.EPSILON&&(ne=!0):Math.sign(je)===Math.sign(I)&&(ne=!0),ne?(ge=-je,Ue=be,pe=Math.sqrt(y)):(ge=be,Ue=je,pe=Math.sqrt(y/2))}return new Se(ge/pe,Ue/pe)}let ce=[];for(let fe=0,me=B.length,le=me-1,ge=fe+1;fe<me;fe++,le++,ge++)le===me&&(le=0),ge===me&&(ge=0),ce[fe]=z(B[fe],B[le],B[ge]);let xe=[],oe,Te=ce.concat();for(let fe=0,me=ee;fe<me;fe++){let le=F[fe];oe=[];for(let ge=0,Ue=le.length,pe=Ue-1,be=ge+1;ge<Ue;ge++,pe++,be++)pe===Ue&&(pe=0),be===Ue&&(be=0),oe[ge]=z(le[ge],le[pe],le[be]);xe.push(oe),Te=Te.concat(oe)}let Ve;if(f===0)Ve=hi.triangulateShape(B,F);else{let fe=[],me=[];for(let le=0;le<f;le++){let ge=le/f,Ue=m*Math.cos(ge*Math.PI/2),pe=_*Math.sin(ge*Math.PI/2)+x;for(let be=0,je=B.length;be<je;be++){let ze=V(B[be],ce[be],pe);Ze(ze.x,ze.y,-Ue),ge===0&&fe.push(ze)}for(let be=0,je=ee;be<je;be++){let ze=F[be];oe=xe[be];let I=[];for(let y=0,Y=ze.length;y<Y;y++){let ne=V(ze[y],oe[y],pe);Ze(ne.x,ne.y,-Ue),ge===0&&I.push(ne)}ge===0&&me.push(I)}}Ve=hi.triangulateShape(fe,me)}let nt=Ve.length,Qe=_+x;for(let fe=0;fe<X;fe++){let me=u?V(b[fe],Te[fe],Qe):b[fe];v?(U.copy(D.normals[0]).multiplyScalar(me.x),C.copy(D.binormals[0]).multiplyScalar(me.y),N.copy(S[0]).add(U).add(C),Ze(N.x,N.y,N.z)):Ze(me.x,me.y,0)}for(let fe=1;fe<=d;fe++)for(let me=0;me<X;me++){let le=u?V(b[me],Te[me],Qe):b[me];v?(U.copy(D.normals[fe]).multiplyScalar(le.x),C.copy(D.binormals[fe]).multiplyScalar(le.y),N.copy(S[fe]).add(U).add(C),Ze(N.x,N.y,N.z)):Ze(le.x,le.y,p/d*fe)}for(let fe=f-1;fe>=0;fe--){let me=fe/f,le=m*Math.cos(me*Math.PI/2),ge=_*Math.sin(me*Math.PI/2)+x;for(let Ue=0,pe=B.length;Ue<pe;Ue++){let be=V(B[Ue],ce[Ue],ge);Ze(be.x,be.y,p+le)}for(let Ue=0,pe=F.length;Ue<pe;Ue++){let be=F[Ue];oe=xe[Ue];for(let je=0,ze=be.length;je<ze;je++){let I=V(be[je],oe[je],ge);v?Ze(I.x,I.y+S[d-1].y,S[d-1].x+le):Ze(I.x,I.y,p+le)}}}te(),ue();function te(){let fe=s.length/3;if(u){let me=0,le=X*me;for(let ge=0;ge<nt;ge++){let Ue=Ve[ge];ke(Ue[2]+le,Ue[1]+le,Ue[0]+le)}me=d+f*2,le=X*me;for(let ge=0;ge<nt;ge++){let Ue=Ve[ge];ke(Ue[0]+le,Ue[1]+le,Ue[2]+le)}}else{for(let me=0;me<nt;me++){let le=Ve[me];ke(le[2],le[1],le[0])}for(let me=0;me<nt;me++){let le=Ve[me];ke(le[0]+X*d,le[1]+X*d,le[2]+X*d)}}n.addGroup(fe,s.length/3-fe,0)}function ue(){let fe=s.length/3,me=0;Ne(B,me),me+=B.length;for(let le=0,ge=F.length;le<ge;le++){let Ue=F[le];Ne(Ue,me),me+=Ue.length}n.addGroup(fe,s.length/3-fe,1)}function Ne(fe,me){let le=fe.length;for(;--le>=0;){let ge=le,Ue=le-1;Ue<0&&(Ue=fe.length-1);for(let pe=0,be=d+f*2;pe<be;pe++){let je=X*pe,ze=X*(pe+1),I=me+ge+je,y=me+Ue+je,Y=me+Ue+ze,ne=me+ge+ze;Ce(I,y,Y,ne)}}}function Ze(fe,me,le){c.push(fe),c.push(me),c.push(le)}function ke(fe,me,le){gt(fe),gt(me),gt(le);let ge=s.length/3,Ue=R.generateTopUV(n,s,ge-3,ge-2,ge-1);L(Ue[0]),L(Ue[1]),L(Ue[2])}function Ce(fe,me,le,ge){gt(fe),gt(me),gt(ge),gt(me),gt(le),gt(ge);let Ue=s.length/3,pe=R.generateSideWallUV(n,s,Ue-6,Ue-3,Ue-2,Ue-1);L(pe[0]),L(pe[1]),L(pe[3]),L(pe[1]),L(pe[2]),L(pe[3])}function gt(fe){s.push(c[fe*3+0]),s.push(c[fe*3+1]),s.push(c[fe*3+2])}function L(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return kp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Pc[s.type]().fromJSON(s)),new i(n,e.options)}},Hp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],d=e[s*3+1];return[new Se(r,o),new Se(a,c),new Se(l,d)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],d=e[n*3+1],p=e[n*3+2],u=e[s*3],m=e[s*3+1],_=e[s*3+2],x=e[r*3],f=e[r*3+1],g=e[r*3+2];return Math.abs(a-d)<Math.abs(o-l)?[new Se(o,1-c),new Se(l,1-p),new Se(u,1-_),new Se(x,1-g)]:[new Se(a,1-c),new Se(d,1-p),new Se(m,1-_),new Se(f,1-g)]}};function kp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var mi=class i extends wa{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ln=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,p=e/a,u=t/c,m=[],_=[],x=[],f=[];for(let g=0;g<d;g++){let R=g*u-o;for(let S=0;S<l;S++){let v=S*p-r;_.push(v,-R,0),x.push(0,0,1),f.push(S/a),f.push(1-g/c)}}for(let g=0;g<c;g++)for(let R=0;R<a;R++){let S=R+l*g,v=R+l*(g+1),D=R+1+l*(g+1),C=R+1+l*g;m.push(S,v,C),m.push(v,D,C)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var lo=class i extends xt{constructor(e=new Ri([new Se(0,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let d=0;d<e.length;d++)l(e[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(r,3)),this.setAttribute("uv",new mt(o,2));function l(d){let p=s.length/3,u=d.extractPoints(t),m=u.shape,_=u.holes;hi.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,g=_.length;f<g;f++){let R=_[f];hi.isClockWise(R)===!0&&(_[f]=R.reverse())}let x=hi.triangulateShape(m,_);for(let f=0,g=_.length;f<g;f++){let R=_[f];m=m.concat(R)}for(let f=0,g=m.length;f<g;f++){let R=m[f];s.push(R.x,R.y,0),r.push(0,0,1),o.push(R.x,R.y)}for(let f=0,g=x.length;f<g;f++){let R=x[f],S=R[0]+p,v=R[1]+p,D=R[2]+p;n.push(S,v,D),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Vp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Vp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Hn=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,d=[],p=new w,u=new w,m=[],_=[],x=[],f=[];for(let g=0;g<=n;g++){let R=[],S=g/n,v=0;g===0&&o===0?v=.5/t:g===n&&c===Math.PI&&(v=-.5/t);for(let D=0;D<=t;D++){let C=D/t;p.x=-e*Math.cos(s+C*r)*Math.sin(o+S*a),p.y=e*Math.cos(o+S*a),p.z=e*Math.sin(s+C*r)*Math.sin(o+S*a),_.push(p.x,p.y,p.z),u.copy(p).normalize(),x.push(u.x,u.y,u.z),f.push(C+v,1-S),R.push(l++)}d.push(R)}for(let g=0;g<n;g++)for(let R=0;R<t;R++){let S=d[g][R+1],v=d[g][R],D=d[g+1][R],C=d[g+1][R+1];(g!==0||o>0)&&m.push(S,v,C),(g!==n-1||c<Math.PI)&&m.push(v,D,C)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ci=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],d=new w,p=new w,u=new w;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){let x=_/s*r,f=m/n*Math.PI*2;p.x=(e+t*Math.cos(f))*Math.cos(x),p.y=(e+t*Math.cos(f))*Math.sin(x),p.z=t*Math.sin(f),a.push(p.x,p.y,p.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),u.subVectors(p,d).normalize(),c.push(u.x,u.y,u.z),l.push(_/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){let x=(s+1)*m+_-1,f=(s+1)*(m-1)+_-1,g=(s+1)*(m-1)+_,R=(s+1)*m+_;o.push(x,f,R),o.push(f,g,R)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var fs=class extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Da=class extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},La=class extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var ps=class extends _n{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function la(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Gp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ms=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Na=class extends ms{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ac:r=e,a=2*t-n;break;case Rc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ac:o=e,c=2*n-t;break;case Rc:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-t)/(s-t),x=_*_,f=x*_,g=-u*f+2*u*x-u*_,R=(1+u)*f+(-1.5-2*u)*x+(-.5+u)*_+1,S=(-1-m)*f+(1.5+m)*x+.5*_,v=m*f-m*x;for(let D=0;D!==a;++D)r[D]=g*o[d+D]+R*o[l+D]+S*o[c+D]+v*o[p+D];return r}},Ua=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(s-t),p=1-d;for(let u=0;u!==a;++u)r[u]=o[l+u]*p+o[c+u]*d;return r}},Fa=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=la(t,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:la(e.times,Array),values:la(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Na(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case pa:t=this.InterpolantFactoryMethodLinear;break;case ca:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return pa;case this.InterpolantFactoryMethodSmooth:return ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Gp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ca,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(s)c=!0;else{let p=a*n,u=p-n,m=p+n;for(let _=0;_!==n;++_){let x=t[p+_];if(x!==t[u+_]||x!==t[m+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,u=o*n;for(let m=0;m!==n;++m)t[u+m]=t[p+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=pa;var qi=class extends kn{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Br;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Oa.prototype.ValueTypeName="color";var Ba=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Ba.prototype.ValueTypeName="number";var za=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let d=l+a;l!==d;l+=4)Dt.slerpFlat(r,0,o,l-a,o,l,c);return r}},co=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends kn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Br;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Ha.prototype.ValueTypeName="vector";var ka=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return l.push(d,p),this},this.removeHandler=function(d){let p=l.indexOf(d);return p!==-1&&l.splice(p,2),this},this.getHandler=function(d){for(let p=0,u=l.length;p<u;p+=2){let m=l[p],_=l[p+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Id=new ka,Va=class{constructor(e){this.manager=e!==void 0?e:Id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Va.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ho=class extends lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wc=new Rt,Iu=new w,Du=new w,Ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Nc=class extends Ga{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=hs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},uo=class extends lr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Nc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fo=class extends Xr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uc=class extends Ga{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Uc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Wa=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rh="\\[\\]\\.:\\/",Wp=new RegExp("["+rh+"]","g"),oh="[^"+rh+"]",Xp="[^"+rh.replace("\\.","")+"]",Yp=/((?:WC+[\/:])*)/.source.replace("WC",oh),qp=/(WCOD+)?/.source.replace("WCOD",Xp),Zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),Kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),Jp=new RegExp("^"+Yp+qp+Zp+Kp+"$"),$p=["material","materials","bones","map"],Fc=class{constructor(e,t,n){let s=n||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wp,"")}static parseTrackName(e){let t=Jp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$p.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=Fc;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ey=new Float32Array(1);var Lu=new Rt,Xn=class{constructor(e,t,n=0,s=1/0){this.ray=new Wi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(e,t=!0,n=[]){return Oc(e,this,n,t),n.sort(Nu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Oc(e[s],this,n,t);return n.sort(Nu),n}};function Nu(i,e){return i.distance-e.distance}function Oc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Oc(r[o],e,t,!0)}}var hr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var po=class extends Ai{constructor(e=10,t=10,n=4473924,s=8947848){n=new St(n),s=new St(s);let r=t/2,o=e/t,a=e/2,c=[],l=[];for(let u=0,m=0,_=-a;u<=t;u++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);let x=u===r?n:s;x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3}let d=new xt;d.setAttribute("position",new mt(c,3)),d.setAttribute("color",new mt(l,3));let p=new _n({vertexColors:!0,toneMapped:!1});super(d,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var mo=class extends Ai{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new xt;r.setIndex(new en(n,1)),r.setAttribute("position",new mt(s,3)),super(r,new _n({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var gs=class extends di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ah(i,e,t,n){let s=jp(n);switch(t){case Kc:return i*e;case sl:return i*e/s.components*s.byteLength;case rl:return i*e/s.components*s.byteLength;case $c:return i*e*2/s.components*s.byteLength;case ol:return i*e*2/s.components*s.byteLength;case Jc:return i*e*3/s.components*s.byteLength;case Yn:return i*e*4/s.components*s.byteLength;case al:return i*e*4/s.components*s.byteLength;case xo:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:case ul:return Math.max(i,16)*Math.max(e,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(e,8)/2;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Pl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dl:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jp(i){switch(i){case oi:case Xc:return{byteLength:1,components:1};case ur:case Yc:case dr:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Ji:case tl:case ai:return{byteLength:4,components:1};case qc:case Zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function tf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qp(i){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){let d=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,d);else{p.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<p.length;m++){let _=p[u],x=p[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,p[u]=x)}p.length=u+1;for(let m=0,_=p.length;m<_;m++){let x=p[m];i.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,om=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,v_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,b_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,I_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mt={alphahash_fragment:em,alphahash_pars_fragment:tm,alphamap_fragment:nm,alphamap_pars_fragment:im,alphatest_fragment:sm,alphatest_pars_fragment:rm,aomap_fragment:om,aomap_pars_fragment:am,batching_pars_vertex:lm,batching_vertex:cm,begin_vertex:hm,beginnormal_vertex:um,bsdfs:dm,iridescence_fragment:fm,bumpmap_pars_fragment:pm,clipping_planes_fragment:mm,clipping_planes_pars_fragment:gm,clipping_planes_pars_vertex:_m,clipping_planes_vertex:xm,color_fragment:ym,color_pars_fragment:vm,color_pars_vertex:Mm,color_vertex:Em,common:Sm,cube_uv_reflection_fragment:bm,defaultnormal_vertex:wm,displacementmap_pars_vertex:Tm,displacementmap_vertex:Am,emissivemap_fragment:Rm,emissivemap_pars_fragment:Cm,colorspace_fragment:Pm,colorspace_pars_fragment:Im,envmap_fragment:Dm,envmap_common_pars_fragment:Lm,envmap_pars_fragment:Nm,envmap_pars_vertex:Um,envmap_physical_pars_fragment:Ym,envmap_vertex:Fm,fog_vertex:Om,fog_pars_vertex:Bm,fog_fragment:zm,fog_pars_fragment:Hm,gradientmap_pars_fragment:km,lightmap_pars_fragment:Vm,lights_lambert_fragment:Gm,lights_lambert_pars_fragment:Wm,lights_pars_begin:Xm,lights_toon_fragment:qm,lights_toon_pars_fragment:Zm,lights_phong_fragment:Km,lights_phong_pars_fragment:Jm,lights_physical_fragment:$m,lights_physical_pars_fragment:jm,lights_fragment_begin:Qm,lights_fragment_maps:eg,lights_fragment_end:tg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:rg,map_fragment:og,map_pars_fragment:ag,map_particle_fragment:lg,map_particle_pars_fragment:cg,metalnessmap_fragment:hg,metalnessmap_pars_fragment:ug,morphinstance_vertex:dg,morphcolor_vertex:fg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:_g,normal_fragment_maps:xg,normal_pars_fragment:yg,normal_pars_vertex:vg,normal_vertex:Mg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:wg,iridescence_pars_fragment:Tg,opaque_fragment:Ag,packing:Rg,premultiplied_alpha_fragment:Cg,project_vertex:Pg,dithering_fragment:Ig,dithering_pars_fragment:Dg,roughnessmap_fragment:Lg,roughnessmap_pars_fragment:Ng,shadowmap_pars_fragment:Ug,shadowmap_pars_vertex:Fg,shadowmap_vertex:Og,shadowmask_pars_fragment:Bg,skinbase_vertex:zg,skinning_pars_vertex:Hg,skinning_vertex:kg,skinnormal_vertex:Vg,specularmap_fragment:Gg,specularmap_pars_fragment:Wg,tonemapping_fragment:Xg,tonemapping_pars_fragment:Yg,transmission_fragment:qg,transmission_pars_fragment:Zg,uv_pars_fragment:Kg,uv_pars_vertex:Jg,uv_vertex:$g,worldpos_vertex:jg,background_vert:Qg,background_frag:e_,backgroundCube_vert:t_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:s_,depth_vert:r_,depth_frag:o_,distanceRGBA_vert:a_,distanceRGBA_frag:l_,equirect_vert:c_,equirect_frag:h_,linedashed_vert:u_,linedashed_frag:d_,meshbasic_vert:f_,meshbasic_frag:p_,meshlambert_vert:m_,meshlambert_frag:g_,meshmatcap_vert:__,meshmatcap_frag:x_,meshnormal_vert:y_,meshnormal_frag:v_,meshphong_vert:M_,meshphong_frag:E_,meshphysical_vert:S_,meshphysical_frag:b_,meshtoon_vert:w_,meshtoon_frag:T_,points_vert:A_,points_frag:R_,shadow_vert:C_,shadow_frag:P_,sprite_vert:I_,sprite_frag:D_},Ge={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},_i={basic:{uniforms:xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:xn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:xn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:xn([Ge.points,Ge.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:xn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:xn([Ge.common,Ge.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:xn([Ge.sprite,Ge.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:xn([Ge.common,Ge.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:xn([Ge.lights,Ge.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};_i.physical={uniforms:xn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var Fl={r:0,b:0,g:0},vs=new cn,L_=new Rt;function N_(i,e,t,n,s,r,o){let a=new St(0),c=r===!0?0:1,l,d,p=null,u=0,m=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function x(S){let v=!1,D=_(S);D===null?g(a,c):D&&D.isColor&&(g(D,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(S,v){let D=_(v);D&&(D.isCubeTexture||D.mapping===go)?(d===void 0&&(d=new Ae(new Ct(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:ys(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),vs.copy(v.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),d.material.uniforms.envMap.value=D,d.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(L_.makeRotationFromEuler(vs)),d.material.toneMapped=At.getTransfer(D.colorSpace)!==Bt,(p!==D||u!==D.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,p=D,u=D.version,m=i.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new Ae(new Ln(2,2),new si({name:"BackgroundMaterial",uniforms:ys(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=At.getTransfer(D.colorSpace)!==Bt,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(p!==D||u!==D.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,p=D,u=D.version,m=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,v){S.getRGB(Fl,ih(i)),n.buffers.color.setClear(Fl.r,Fl.g,Fl.b,v,o)}function R(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),c=v,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,g(a,c)},render:x,addToRenderList:f,dispose:R}}function U_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(b,F,Z,$,ee){let B=!1,V=p($,Z,F);r!==V&&(r=V,l(r.object)),B=m(b,$,Z,ee),B&&_(b,$,Z,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(b,F,Z,$),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function p(b,F,Z){let $=Z.wireframe===!0,ee=n[b.id];ee===void 0&&(ee={},n[b.id]=ee);let B=ee[F.id];B===void 0&&(B={},ee[F.id]=B);let V=B[$];return V===void 0&&(V=u(c()),B[$]=V),V}function u(b){let F=[],Z=[],$=[];for(let ee=0;ee<t;ee++)F[ee]=0,Z[ee]=0,$[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:$,object:b,attributes:{},index:null}}function m(b,F,Z,$){let ee=r.attributes,B=F.attributes,V=0,X=Z.getAttributes();for(let z in X)if(X[z].location>=0){let xe=ee[z],oe=B[z];if(oe===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),xe===void 0||xe.attribute!==oe||oe&&xe.data!==oe.data)return!0;V++}return r.attributesNum!==V||r.index!==$}function _(b,F,Z,$){let ee={},B=F.attributes,V=0,X=Z.getAttributes();for(let z in X)if(X[z].location>=0){let xe=B[z];xe===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor));let oe={};oe.attribute=xe,xe&&xe.data&&(oe.data=xe.data),ee[z]=oe,V++}r.attributes=ee,r.attributesNum=V,r.index=$}function x(){let b=r.newAttributes;for(let F=0,Z=b.length;F<Z;F++)b[F]=0}function f(b){g(b,0)}function g(b,F){let Z=r.newAttributes,$=r.enabledAttributes,ee=r.attributeDivisors;Z[b]=1,$[b]===0&&(i.enableVertexAttribArray(b),$[b]=1),ee[b]!==F&&(i.vertexAttribDivisor(b,F),ee[b]=F)}function R(){let b=r.newAttributes,F=r.enabledAttributes;for(let Z=0,$=F.length;Z<$;Z++)F[Z]!==b[Z]&&(i.disableVertexAttribArray(Z),F[Z]=0)}function S(b,F,Z,$,ee,B,V){V===!0?i.vertexAttribIPointer(b,F,Z,ee,B):i.vertexAttribPointer(b,F,Z,$,ee,B)}function v(b,F,Z,$){x();let ee=$.attributes,B=Z.getAttributes(),V=F.defaultAttributeValues;for(let X in B){let z=B[X];if(z.location>=0){let ce=ee[X];if(ce===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ce!==void 0){let xe=ce.normalized,oe=ce.itemSize,Te=e.get(ce);if(Te===void 0)continue;let Ve=Te.buffer,nt=Te.type,Qe=Te.bytesPerElement,te=nt===i.INT||nt===i.UNSIGNED_INT||ce.gpuType===tl;if(ce.isInterleavedBufferAttribute){let ue=ce.data,Ne=ue.stride,Ze=ce.offset;if(ue.isInstancedInterleavedBuffer){for(let ke=0;ke<z.locationSize;ke++)g(z.location+ke,ue.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<z.locationSize;ke++)f(z.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ke=0;ke<z.locationSize;ke++)S(z.location+ke,oe/z.locationSize,nt,xe,Ne*Qe,(Ze+oe/z.locationSize*ke)*Qe,te)}else{if(ce.isInstancedBufferAttribute){for(let ue=0;ue<z.locationSize;ue++)g(z.location+ue,ce.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<z.locationSize;ue++)f(z.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ue=0;ue<z.locationSize;ue++)S(z.location+ue,oe/z.locationSize,nt,xe,oe*Qe,oe/z.locationSize*ue*Qe,te)}}else if(V!==void 0){let xe=V[X];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(z.location,xe);break;case 3:i.vertexAttrib3fv(z.location,xe);break;case 4:i.vertexAttrib4fv(z.location,xe);break;default:i.vertexAttrib1fv(z.location,xe)}}}}R()}function D(){N();for(let b in n){let F=n[b];for(let Z in F){let $=F[Z];for(let ee in $)d($[ee].object),delete $[ee];delete F[Z]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;let F=n[b.id];for(let Z in F){let $=F[Z];for(let ee in $)d($[ee].object),delete $[ee];delete F[Z]}delete n[b.id]}function U(b){for(let F in n){let Z=n[F];if(Z[b.id]===void 0)continue;let $=Z[b.id];for(let ee in $)d($[ee].object),delete $[ee];delete Z[b.id]}}function N(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:f,disableUnusedAttributes:R}}function F_(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function o(l,d,p){p!==0&&(i.drawArraysInstanced(n,l,d,p),t.update(d,n,p))}function a(l,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_];t.update(m,n,1)}function c(l,d,p,u){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)o(l[_],d[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,p);let _=0;for(let x=0;x<p;x++)_+=d[x]*u[x];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function O_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==Yn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let N=U===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==oi&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ai&&!N)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:R,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:D,maxSamples:C}}function B_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new $t,a=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,m){let _=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,g=i.get(p);if(!s||_===null||_.length===0||r&&!f)r?d(null):l();else{let R=r?0:n,S=R*4,v=g.clippingState||null;c.value=v,v=d(_,u,S,m);for(let D=0;D!==S;++D)v[D]=t[D];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,u,m,_){let x=p!==null?p.length:0,f=null;if(x!==0){if(f=c.value,_!==!0||f===null){let g=m+x*4,R=u.matrixWorldInverse;a.getNormalMatrix(R),(f===null||f.length<g)&&(f=new Float32Array(g));for(let S=0,v=m;S!==x;++S,v+=4)o.copy(p[S]).applyMatrix4(R,a),o.normal.toArray(f,v),f[v+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function z_(i){let e=new WeakMap;function t(o,a){return a===ja?o.mapping=_s:a===Qa&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ja||a===Qa)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new va(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var gr=4,Dd=[.125,.215,.35,.446,.526,.582],Ss=20,lh=new fo,Ld=new St,ch=null,hh=0,uh=0,dh=!1,Es=(1+Math.sqrt(5))/2,mr=1/Es,Nd=[new w(-Es,mr,0),new w(Es,mr,0),new w(-mr,0,Es),new w(mr,0,Es),new w(0,Es,-mr),new w(0,Es,mr),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],H_=new w,zl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=H_}=r;ch=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,hh,uh),this._renderer.xr.enabled=dh,e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:dr,format:Yn,colorSpace:cs,depthBuffer:!1},s=Ud(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ud(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k_(r)),this._blurMaterial=V_(r,e,t)}return s}_compileMaterial(e){let t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,lh)}_sceneToCubeUV(e,t,n,s,r){let c=new dn(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(Ld),p.toneMapping=Ii,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));let x=new jt({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),f=new Ae(new Ct,x),g=!1,R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,g=!0):(x.color.copy(Ld),g=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[S],r.y,r.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[S]));let D=this._cubeSize;Ol(s,v*D,S>2?D:0,D,D),p.setRenderTarget(s),g&&p.render(f,c),p.render(e,c)}f.geometry.dispose(),f.material.dispose(),p.toneMapping=m,p.autoClear=u,e.background=R}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===_s||e.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ol(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,lh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nd[(s-r-1)%Nd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,p=new Ae(this._lodPlanes[s],l),u=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ss-1),x=r/_,f=isFinite(r)?1+Math.floor(d*x):Ss;f>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ss}`);let g=[],R=0;for(let U=0;U<Ss;++U){let N=U/x,T=Math.exp(-N*N/2);g.push(T),U===0?R+=T:U<f&&(R+=2*T)}for(let U=0;U<g.length;U++)g[U]=g[U]/R;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-n;let v=this._sizeLods[s],D=3*v*(s>S-gr?s-S+gr:0),C=4*(this._cubeSize-v);Ol(t,D,C,3*v,2*v),c.setRenderTarget(t),c.render(p,lh)}};function k_(i){let e=[],t=[],n=[],s=i,r=i-gr+1+Dd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-gr?c=Dd[o-i+gr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),d=-l,p=1+l,u=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,_=6,x=3,f=2,g=1,R=new Float32Array(x*_*m),S=new Float32Array(f*_*m),v=new Float32Array(g*_*m);for(let C=0;C<m;C++){let U=C%3*2/3-1,N=C>2?0:-1,T=[U,N,0,U+2/3,N,0,U+2/3,N+1,0,U,N,0,U+2/3,N+1,0,U,N+1,0];R.set(T,x*_*C),S.set(u,f*_*C);let b=[C,C,C,C,C,C];v.set(b,g*_*C)}let D=new xt;D.setAttribute("position",new en(R,x)),D.setAttribute("uv",new en(S,f)),D.setAttribute("faceIndex",new en(v,g)),e.push(D),s>gr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ud(i,e,t){let n=new fi(i,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ol(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function V_(i,e,t){let n=new Float32Array(Ss),s=new w(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Fd(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Od(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function G_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ja||c===Qa,d=c===_s||c===xs;if(l||d){let p=e.get(a),u=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new zl(i)),p=l?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{let m=a.image;return l&&m&&m.height>0||d&&m&&s(m)?(t===null&&(t=new zl(i)),p=l?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let c=0,l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function W_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function X_(i,e,t,n){let s={},r=new WeakMap;function o(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete s[u.id];let m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(p,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(p){let u=p.attributes;for(let m in u)e.update(u[m],i.ARRAY_BUFFER)}function l(p){let u=[],m=p.index,_=p.attributes.position,x=0;if(m!==null){let R=m.array;x=m.version;for(let S=0,v=R.length;S<v;S+=3){let D=R[S+0],C=R[S+1],U=R[S+2];u.push(D,C,C,U,U,D)}}else if(_!==void 0){let R=_.array;x=_.version;for(let S=0,v=R.length/3-1;S<v;S+=3){let D=S+0,C=S+1,U=S+2;u.push(D,C,C,U,U,D)}}else return;let f=new(nh(u)?Wr:Gr)(u,1);f.version=x;let g=r.get(p);g&&e.remove(g),r.set(p,f)}function d(p){let u=r.get(p);if(u){let m=p.index;m!==null&&u.version<m.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:d}}function Y_(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,m){i.drawElements(n,m,r,u*o),t.update(m,n,1)}function l(u,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,u*o,_),t.update(m,n,_))}function d(u,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,_);let f=0;for(let g=0;g<_;g++)f+=m[g];t.update(f,n,1)}function p(u,m,_,x){if(_===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u.length;g++)l(u[g]/o,m[g],x[g]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,x,0,_);let g=0;for(let R=0;R<_;R++)g+=m[R]*x[R];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function q_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Z_(i,e,t){let n=new WeakMap,s=new Zt;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0,u=n.get(a);if(u===void 0||u.count!==p){let T=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],S=0;m===!0&&(S=1),_===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,D=1;v>e.maxTextureSize&&(D=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*D*4*p),U=new Vr(C,v,D,p);U.type=ai,U.needsUpdate=!0;let N=S*4;for(let b=0;b<p;b++){let F=f[b],Z=g[b],$=R[b],ee=v*D*4*b;for(let B=0;B<F.count;B++){let V=B*N;m===!0&&(s.fromBufferAttribute(F,B),C[ee+V+0]=s.x,C[ee+V+1]=s.y,C[ee+V+2]=s.z,C[ee+V+3]=0),_===!0&&(s.fromBufferAttribute(Z,B),C[ee+V+4]=s.x,C[ee+V+5]=s.y,C[ee+V+6]=s.z,C[ee+V+7]=0),x===!0&&(s.fromBufferAttribute($,B),C[ee+V+8]=s.x,C[ee+V+9]=s.y,C[ee+V+10]=s.z,C[ee+V+11]=$.itemSize===4?s.w:1)}}u={count:p,texture:U,size:new Se(v,D)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];let _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function K_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,d=c.geometry,p=e.get(c,d);if(s.get(p)!==l&&(e.update(p),s.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return p}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var nf=new An,Bd=new $r(1,1),sf=new Vr,rf=new xa,of=new Yr,zd=[],Hd=[],kd=new Float32Array(16),Vd=new Float32Array(9),Gd=new Float32Array(4);function xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=zd[s];if(r===void 0&&(r=new Float32Array(s),zd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kl(i,e){let t=Hd[e];t===void 0&&(t=new Int32Array(e),Hd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function J_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function e0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Gd.set(n),i.uniformMatrix2fv(this.addr,!1,Gd),nn(t,n)}}function t0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Vd.set(n),i.uniformMatrix3fv(this.addr,!1,Vd),nn(t,n)}}function n0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;kd.set(n),i.uniformMatrix4fv(this.addr,!1,kd),nn(t,n)}}function i0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function s0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function r0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function o0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function a0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function c0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function h0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function u0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bd.compareFunction=Qc,r=Bd):r=nf,t.setTexture2D(e||r,s)}function d0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rf,s)}function f0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||of,s)}function p0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sf,s)}function m0(i){switch(i){case 5126:return J_;case 35664:return $_;case 35665:return j_;case 35666:return Q_;case 35674:return e0;case 35675:return t0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(i,e){i.uniform1fv(this.addr,e)}function _0(i,e){let t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function x0(i,e){let t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function y0(i,e){let t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function v0(i,e){let t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function M0(i,e){let t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function E0(i,e){let t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function S0(i,e){i.uniform1iv(this.addr,e)}function b0(i,e){i.uniform2iv(this.addr,e)}function w0(i,e){i.uniform3iv(this.addr,e)}function T0(i,e){i.uniform4iv(this.addr,e)}function A0(i,e){i.uniform1uiv(this.addr,e)}function R0(i,e){i.uniform2uiv(this.addr,e)}function C0(i,e){i.uniform3uiv(this.addr,e)}function P0(i,e){i.uniform4uiv(this.addr,e)}function I0(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||nf,r[o])}function D0(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rf,r[o])}function L0(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||of,r[o])}function N0(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sf,r[o])}function U0(i){switch(i){case 5126:return g0;case 35664:return _0;case 35665:return x0;case 35666:return y0;case 35674:return v0;case 35675:return M0;case 35676:return E0;case 5124:case 35670:return S0;case 35667:case 35671:return b0;case 35668:case 35672:return w0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return R0;case 36295:return C0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return N0}}var ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m0(t.type)}},mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U0(t.type)}},gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},fh=/(\w+)(\])?(\[|\.)?/g;function Wd(i,e){i.seq.push(e),i.map[e.id]=e}function F0(i,e,t){let n=i.name,s=n.length;for(fh.lastIndex=0;;){let r=fh.exec(n),o=fh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wd(t,l===void 0?new ph(a,i,e):new mh(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new gh(a),Wd(t,p)),t=p}}}var _r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);F0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Xd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var O0=37297,B0=0;function z0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Yd=new pt;function H0(i){At._getMatrix(Yd,At.workingColorSpace,i);let e=`mat3( ${Yd.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(i)){case zr:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+z0(i.getShaderSource(e),a)}else return r}function k0(i,e){let t=H0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function V0(i,e){let t;switch(e){case sd:t="Linear";break;case rd:t="Reinhard";break;case od:t="Cineon";break;case ad:t="ACESFilmic";break;case cd:t="AgX";break;case hd:t="Neutral";break;case ld:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bl=new w;function G0(){At.getLuminanceCoefficients(Bl);let i=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function X0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Eo(i){return i!==""}function Zd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(q0,K0)}var Z0=new Map;function K0(i,e){let t=Mt[e];if(t===void 0){let n=Z0.get(e);if(n!==void 0)t=Mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _h(t)}var J0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(i){return i.replace(J0,$0)}function $0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $d(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ou?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Q0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case xs:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ex(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function tx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gc:e="ENVMAP_BLENDING_MULTIPLY";break;case nd:e="ENVMAP_BLENDING_MIX";break;case id:e="ENVMAP_BLENDING_ADD";break}return e}function nx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ix(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=j0(t),l=Q0(t),d=ex(t),p=tx(t),u=nx(t),m=W0(t),_=X0(r),x=s.createProgram(),f,g,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Eo).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Eo).join(`
`),g.length>0&&(g+=`
`)):(f=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),g=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?V0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),G0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),o=_h(o),o=Zd(o,t),o=Kd(o,t),a=_h(a),a=Zd(a,t),a=Kd(a,t),o=Jd(o),a=Jd(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=R+f+o,v=R+g+a,D=Xd(s,s.VERTEX_SHADER,S),C=Xd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,D),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function U(F){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(x)||"",$=s.getShaderInfoLog(D)||"",ee=s.getShaderInfoLog(C)||"",B=Z.trim(),V=$.trim(),X=ee.trim(),z=!0,ce=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,C);else{let xe=qd(s,D,"vertex"),oe=qd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+B+`
`+xe+`
`+oe)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(V===""||X==="")&&(ce=!1);ce&&(F.diagnostics={runnable:z,programLog:B,vertexShader:{log:V,prefix:f},fragmentShader:{log:X,prefix:g}})}s.deleteShader(D),s.deleteShader(C),N=new _r(s,x),T=Y0(s,x)}let N;this.getUniforms=function(){return N===void 0&&U(this),N};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,O0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=C,this}var sx=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yh(e),t.set(e,n)),n}},yh=class{constructor(e){this.id=sx++,this.code=e,this.usedTimes=0}};function rx(i,e,t,n,s,r,o){let a=new Qs,c=new xh,l=new Set,d=[],p=s.logarithmicDepthBuffer,u=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function f(T,b,F,Z,$){let ee=Z.fog,B=$.geometry,V=T.isMeshStandardMaterial?Z.environment:null,X=(T.isMeshStandardMaterial?t:e).get(T.envMap||V),z=X&&X.mapping===go?X.image.height:null,ce=_[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));let xe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=xe!==void 0?xe.length:0,Te=0;B.morphAttributes.position!==void 0&&(Te=1),B.morphAttributes.normal!==void 0&&(Te=2),B.morphAttributes.color!==void 0&&(Te=3);let Ve,nt,Qe,te;if(ce){let _t=_i[ce];Ve=_t.vertexShader,nt=_t.fragmentShader}else Ve=T.vertexShader,nt=T.fragmentShader,c.update(T),Qe=c.getVertexShaderID(T),te=c.getFragmentShaderID(T);let ue=i.getRenderTarget(),Ne=i.state.buffers.depth.getReversed(),Ze=$.isInstancedMesh===!0,ke=$.isBatchedMesh===!0,Ce=!!T.map,gt=!!T.matcap,L=!!X,fe=!!T.aoMap,me=!!T.lightMap,le=!!T.bumpMap,ge=!!T.normalMap,Ue=!!T.displacementMap,pe=!!T.emissiveMap,be=!!T.metalnessMap,je=!!T.roughnessMap,ze=T.anisotropy>0,I=T.clearcoat>0,y=T.dispersion>0,Y=T.iridescence>0,ne=T.sheen>0,_e=T.transmission>0,P=ze&&!!T.anisotropyMap,O=I&&!!T.clearcoatMap,K=I&&!!T.clearcoatNormalMap,ae=I&&!!T.clearcoatRoughnessMap,we=Y&&!!T.iridescenceMap,ve=Y&&!!T.iridescenceThicknessMap,Me=ne&&!!T.sheenColorMap,De=ne&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Re=!!T.specularColorMap,at=!!T.specularIntensityMap,H=_e&&!!T.transmissionMap,Le=_e&&!!T.thicknessMap,Be=!!T.gradientMap,Ke=!!T.alphaMap,Pe=T.alphaTest>0,Ee=!!T.alphaHash,Je=!!T.extensions,ft=Ii;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ft=i.toneMapping);let Nt={shaderID:ce,shaderType:T.type,shaderName:T.name,vertexShader:Ve,fragmentShader:nt,defines:T.defines,customVertexShaderID:Qe,customFragmentShaderID:te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:ke,batchingColor:ke&&$._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&$.instanceColor!==null,instancingMorph:Ze&&$.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:cs,alphaToCoverage:!!T.alphaToCoverage,map:Ce,matcap:gt,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:z,aoMap:fe,lightMap:me,bumpMap:le,normalMap:ge,displacementMap:u&&Ue,emissiveMap:pe,normalMapObjectSpace:ge&&T.normalMapType===pd,normalMapTangentSpace:ge&&T.normalMapType===jc,metalnessMap:be,roughnessMap:je,anisotropy:ze,anisotropyMap:P,clearcoat:I,clearcoatMap:O,clearcoatNormalMap:K,clearcoatRoughnessMap:ae,dispersion:y,iridescence:Y,iridescenceMap:we,iridescenceThicknessMap:ve,sheen:ne,sheenColorMap:Me,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:Re,specularIntensityMap:at,transmission:_e,transmissionMap:H,thicknessMap:Le,gradientMap:Be,opaque:T.transparent===!1&&T.blending===as&&T.alphaToCoverage===!1,alphaMap:Ke,alphaTest:Pe,alphaHash:Ee,combine:T.combine,mapUv:Ce&&x(T.map.channel),aoMapUv:fe&&x(T.aoMap.channel),lightMapUv:me&&x(T.lightMap.channel),bumpMapUv:le&&x(T.bumpMap.channel),normalMapUv:ge&&x(T.normalMap.channel),displacementMapUv:Ue&&x(T.displacementMap.channel),emissiveMapUv:pe&&x(T.emissiveMap.channel),metalnessMapUv:be&&x(T.metalnessMap.channel),roughnessMapUv:je&&x(T.roughnessMap.channel),anisotropyMapUv:P&&x(T.anisotropyMap.channel),clearcoatMapUv:O&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:K&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(T.sheenRoughnessMap.channel),specularMapUv:Oe&&x(T.specularMap.channel),specularColorMapUv:Re&&x(T.specularColorMap.channel),specularIntensityMapUv:at&&x(T.specularIntensityMap.channel),transmissionMapUv:H&&x(T.transmissionMap.channel),thicknessMapUv:Le&&x(T.thicknessMap.channel),alphaMapUv:Ke&&x(T.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ge||ze),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!B.attributes.uv&&(Ce||Ke),fog:!!ee,useFog:T.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ne,skinning:$.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:Ce&&T.map.isVideoTexture===!0&&At.getTransfer(T.map.colorSpace)===Bt,decodeVideoTextureEmissive:pe&&T.emissiveMap.isVideoTexture===!0&&At.getTransfer(T.emissiveMap.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===hn,flipSided:T.side===Cn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Je&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&T.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function g(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let F in T.defines)b.push(F),b.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(R(b,T),S(b,T),b.push(i.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function R(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function S(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){let b=_[T.type],F;if(b){let Z=_i[b];F=wd.clone(Z.uniforms)}else F=T.uniforms;return F}function D(T,b){let F;for(let Z=0,$=d.length;Z<$;Z++){let ee=d[Z];if(ee.cacheKey===b){F=ee,++F.usedTimes;break}}return F===void 0&&(F=new ix(i,b,T,r),d.push(F)),F}function C(T){if(--T.usedTimes===0){let b=d.indexOf(T);d[b]=d[d.length-1],d.pop(),T.destroy()}}function U(T){c.remove(T)}function N(){c.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:v,acquireProgram:D,releaseProgram:C,releaseShaderCache:U,programs:d,dispose:N}}function ox(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ax(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function jd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(p,u,m,_,x,f){let g=i[e];return g===void 0?(g={id:p.id,object:p,geometry:u,material:m,groupOrder:_,renderOrder:p.renderOrder,z:x,group:f},i[e]=g):(g.id=p.id,g.object=p,g.geometry=u,g.material=m,g.groupOrder=_,g.renderOrder=p.renderOrder,g.z=x,g.group=f),e++,g}function a(p,u,m,_,x,f){let g=o(p,u,m,_,x,f);m.transmission>0?n.push(g):m.transparent===!0?s.push(g):t.push(g)}function c(p,u,m,_,x,f){let g=o(p,u,m,_,x,f);m.transmission>0?n.unshift(g):m.transparent===!0?s.unshift(g):t.unshift(g)}function l(p,u){t.length>1&&t.sort(p||ax),n.length>1&&n.sort(u||jd),s.length>1&&s.sort(u||jd)}function d(){for(let p=e,u=i.length;p<u;p++){let m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:d,sort:l}}function lx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Qd,i.set(n,[o])):s>=r.length?(o=new Qd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function cx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new St};break;case"SpotLight":t={position:new w,direction:new w,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function hx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ux=0;function dx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fx(i){let e=new cx,t=hx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let s=new w,r=new Rt,o=new Rt;function a(l){let d=0,p=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,_=0,x=0,f=0,g=0,R=0,S=0,v=0,D=0,C=0,U=0;l.sort(dx);for(let T=0,b=l.length;T<b;T++){let F=l[T],Z=F.color,$=F.intensity,ee=F.distance,B=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=Z.r*$,p+=Z.g*$,u+=Z.b*$;else if(F.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(F.sh.coefficients[V],$);U++}else if(F.isDirectionalLight){let V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let X=F.shadow,z=t.get(F);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=F.shadow.matrix,R++}n.directional[m]=V,m++}else if(F.isSpotLight){let V=e.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(Z).multiplyScalar($),V.distance=ee,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,n.spot[x]=V;let X=F.shadow;if(F.map&&(n.spotLightMap[D]=F.map,D++,X.updateMatrices(F),F.castShadow&&C++),n.spotLightMatrix[x]=X.matrix,F.castShadow){let z=t.get(F);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=B,v++}x++}else if(F.isRectAreaLight){let V=e.get(F);V.color.copy(Z).multiplyScalar($),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),n.rectArea[f]=V,f++}else if(F.isPointLight){let V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){let X=F.shadow,z=t.get(F);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=B,n.pointShadowMatrix[_]=F.shadow.matrix,S++}n.point[_]=V,_++}else if(F.isHemisphereLight){let V=e.get(F);V.skyColor.copy(F.color).multiplyScalar($),V.groundColor.copy(F.groundColor).multiplyScalar($),n.hemi[g]=V,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;let N=n.hash;(N.directionalLength!==m||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==f||N.hemiLength!==g||N.numDirectionalShadows!==R||N.numPointShadows!==S||N.numSpotShadows!==v||N.numSpotMaps!==D||N.numLightProbes!==U)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=f,n.point.length=_,n.hemi.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=U,N.directionalLength=m,N.pointLength=_,N.spotLength=x,N.rectAreaLength=f,N.hemiLength=g,N.numDirectionalShadows=R,N.numPointShadows=S,N.numSpotShadows=v,N.numSpotMaps=D,N.numLightProbes=U,n.version=ux++)}function c(l,d){let p=0,u=0,m=0,_=0,x=0,f=d.matrixWorldInverse;for(let g=0,R=l.length;g<R;g++){let S=l[g];if(S.isDirectionalLight){let v=n.directional[p];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),p++}else if(S.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),m++}else if(S.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(f),o.identity(),r.copy(S.matrixWorld),r.premultiply(f),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(f),u++}else if(S.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(f),x++}}}return{setup:a,setupView:c,state:n}}function ef(i){let e=new fx(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function px(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ef(i),e.set(s,[a])):r>=o.length?(a=new ef(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _x(i,e,t){let n=new ir,s=new Se,r=new Se,o=new Zt,a=new Da({depthPacking:fd}),c=new La,l={},d=t.maxTextureSize,p={[wi]:Cn,[Cn]:wi,[hn]:hn},u=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:mx,fragmentShader:gx}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new xt;_.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ae(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let g=this.type;this.render=function(C,U,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;let T=i.getRenderTarget(),b=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Pi),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let $=g!==gi&&this.type===gi,ee=g===gi&&this.type!==gi;for(let B=0,V=C.length;B<V;B++){let X=C[B],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ce=z.getFrameExtents();if(s.multiply(ce),r.copy(z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ce.x),s.x=r.x*ce.x,z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ce.y),s.y=r.y*ce.y,z.mapSize.y=r.y)),z.map===null||$===!0||ee===!0){let oe=this.type!==gi?{minFilter:Dn,magFilter:Dn}:{};z.map!==null&&z.map.dispose(),z.map=new fi(s.x,s.y,oe),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let xe=z.getViewportCount();for(let oe=0;oe<xe;oe++){let Te=z.getViewport(oe);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),Z.viewport(o),z.updateMatrices(X,oe),n=z.getFrustum(),v(U,N,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===gi&&R(z,N),z.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(T,b,F)};function R(C,U){let N=e.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new fi(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(U,null,N,u,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(U,null,N,m,x,null)}function S(C,U,N,T){let b=null,F=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)b=F;else if(b=N.isPointLight===!0?c:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let Z=b.uuid,$=U.uuid,ee=l[Z];ee===void 0&&(ee={},l[Z]=ee);let B=ee[$];B===void 0&&(B=b.clone(),ee[$]=B,U.addEventListener("dispose",D)),b=B}if(b.visible=U.visible,b.wireframe=U.wireframe,T===gi?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:p[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let Z=i.properties.get(b);Z.light=N}return b}function v(C,U,N,T,b){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===gi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);let $=e.update(C),ee=C.material;if(Array.isArray(ee)){let B=$.groups;for(let V=0,X=B.length;V<X;V++){let z=B[V],ce=ee[z.materialIndex];if(ce&&ce.visible){let xe=S(C,ce,T,b);C.onBeforeShadow(i,C,U,N,$,xe,z),i.renderBufferDirect(N,null,$,xe,C,z),C.onAfterShadow(i,C,U,N,$,xe,z)}}}else if(ee.visible){let B=S(C,ee,T,b);C.onBeforeShadow(i,C,U,N,$,B,null),i.renderBufferDirect(N,null,$,B,C,null),C.onAfterShadow(i,C,U,N,$,B,null)}}let Z=C.children;for(let $=0,ee=Z.length;$<ee;$++)v(Z[$],U,N,T,b)}function D(C){C.target.removeEventListener("dispose",D);for(let N in l){let T=l[N],b=C.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var xx={[Xa]:Ya,[qa]:Ja,[Za]:$a,[ls]:Ka,[Ya]:Xa,[Ja]:qa,[$a]:Za,[Ka]:ls};function yx(i,e){function t(){let H=!1,Le=new Zt,Be=null,Ke=new Zt(0,0,0,0);return{setMask:function(Pe){Be!==Pe&&!H&&(i.colorMask(Pe,Pe,Pe,Pe),Be=Pe)},setLocked:function(Pe){H=Pe},setClear:function(Pe,Ee,Je,ft,Nt){Nt===!0&&(Pe*=ft,Ee*=ft,Je*=ft),Le.set(Pe,Ee,Je,ft),Ke.equals(Le)===!1&&(i.clearColor(Pe,Ee,Je,ft),Ke.copy(Le))},reset:function(){H=!1,Be=null,Ke.set(-1,0,0,0)}}}function n(){let H=!1,Le=!1,Be=null,Ke=null,Pe=null;return{setReversed:function(Ee){if(Le!==Ee){let Je=e.get("EXT_clip_control");Ee?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Le=Ee;let ft=Pe;Pe=null,this.setClear(ft)}},getReversed:function(){return Le},setTest:function(Ee){Ee?ue(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(Ee){Be!==Ee&&!H&&(i.depthMask(Ee),Be=Ee)},setFunc:function(Ee){if(Le&&(Ee=xx[Ee]),Ke!==Ee){switch(Ee){case Xa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Ka:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ke=Ee}},setLocked:function(Ee){H=Ee},setClear:function(Ee){Pe!==Ee&&(Le&&(Ee=1-Ee),i.clearDepth(Ee),Pe=Ee)},reset:function(){H=!1,Be=null,Ke=null,Pe=null,Le=!1}}}function s(){let H=!1,Le=null,Be=null,Ke=null,Pe=null,Ee=null,Je=null,ft=null,Nt=null;return{setTest:function(_t){H||(_t?ue(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(_t){Le!==_t&&!H&&(i.stencilMask(_t),Le=_t)},setFunc:function(_t,qn,Vn){(Be!==_t||Ke!==qn||Pe!==Vn)&&(i.stencilFunc(_t,qn,Vn),Be=_t,Ke=qn,Pe=Vn)},setOp:function(_t,qn,Vn){(Ee!==_t||Je!==qn||ft!==Vn)&&(i.stencilOp(_t,qn,Vn),Ee=_t,Je=qn,ft=Vn)},setLocked:function(_t){H=_t},setClear:function(_t){Nt!==_t&&(i.clearStencil(_t),Nt=_t)},reset:function(){H=!1,Le=null,Be=null,Ke=null,Pe=null,Ee=null,Je=null,ft=null,Nt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,d={},p={},u=new WeakMap,m=[],_=null,x=!1,f=null,g=null,R=null,S=null,v=null,D=null,C=null,U=new St(0,0,0),N=0,T=!1,b=null,F=null,Z=null,$=null,ee=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,X=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=X>=2);let ce=null,xe={},oe=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),Ve=new Zt().fromArray(oe),nt=new Zt().fromArray(Te);function Qe(H,Le,Be,Ke){let Pe=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(H,Ee),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<Be;Je++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,Ke,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Le+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Ee}let te={};te[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(i.DEPTH_TEST),o.setFunc(ls),le(!1),ge(Bc),ue(i.CULL_FACE),fe(Pi);function ue(H){d[H]!==!0&&(i.enable(H),d[H]=!0)}function Ne(H){d[H]!==!1&&(i.disable(H),d[H]=!1)}function Ze(H,Le){return p[H]!==Le?(i.bindFramebuffer(H,Le),p[H]=Le,H===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Le),H===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function ke(H,Le){let Be=m,Ke=!1;if(H){Be=u.get(Le),Be===void 0&&(Be=[],u.set(Le,Be));let Pe=H.textures;if(Be.length!==Pe.length||Be[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,Je=Pe.length;Ee<Je;Ee++)Be[Ee]=i.COLOR_ATTACHMENT0+Ee;Be.length=Pe.length,Ke=!0}}else Be[0]!==i.BACK&&(Be[0]=i.BACK,Ke=!0);Ke&&i.drawBuffers(Be)}function Ce(H){return _!==H?(i.useProgram(H),_=H,!0):!1}let gt={[Gi]:i.FUNC_ADD,[zu]:i.FUNC_SUBTRACT,[Hu]:i.FUNC_REVERSE_SUBTRACT};gt[ku]=i.MIN,gt[Vu]=i.MAX;let L={[Gu]:i.ZERO,[Wu]:i.ONE,[Xu]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[$u]:i.SRC_ALPHA_SATURATE,[Ku]:i.DST_COLOR,[qu]:i.DST_ALPHA,[Yu]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[Zu]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[ed]:i.CONSTANT_ALPHA,[td]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(H,Le,Be,Ke,Pe,Ee,Je,ft,Nt,_t){if(H===Pi){x===!0&&(Ne(i.BLEND),x=!1);return}if(x===!1&&(ue(i.BLEND),x=!0),H!==Bu){if(H!==f||_t!==T){if((g!==Gi||v!==Gi)&&(i.blendEquation(i.FUNC_ADD),g=Gi,v=Gi),_t)switch(H){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.ONE,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}R=null,S=null,D=null,C=null,U.set(0,0,0),N=0,f=H,T=_t}return}Pe=Pe||Le,Ee=Ee||Be,Je=Je||Ke,(Le!==g||Pe!==v)&&(i.blendEquationSeparate(gt[Le],gt[Pe]),g=Le,v=Pe),(Be!==R||Ke!==S||Ee!==D||Je!==C)&&(i.blendFuncSeparate(L[Be],L[Ke],L[Ee],L[Je]),R=Be,S=Ke,D=Ee,C=Je),(ft.equals(U)===!1||Nt!==N)&&(i.blendColor(ft.r,ft.g,ft.b,Nt),U.copy(ft),N=Nt),f=H,T=!1}function me(H,Le){H.side===hn?Ne(i.CULL_FACE):ue(i.CULL_FACE);let Be=H.side===Cn;Le&&(Be=!Be),le(Be),H.blending===as&&H.transparent===!1?fe(Pi):fe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ke=H.stencilWrite;a.setTest(Ke),Ke&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),pe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(H){b!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),b=H)}function ge(H){H!==Uu?(ue(i.CULL_FACE),H!==F&&(H===Bc?i.cullFace(i.BACK):H===Fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),F=H}function Ue(H){H!==Z&&(V&&i.lineWidth(H),Z=H)}function pe(H,Le,Be){H?(ue(i.POLYGON_OFFSET_FILL),($!==Le||ee!==Be)&&(i.polygonOffset(Le,Be),$=Le,ee=Be)):Ne(i.POLYGON_OFFSET_FILL)}function be(H){H?ue(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function je(H){H===void 0&&(H=i.TEXTURE0+B-1),ce!==H&&(i.activeTexture(H),ce=H)}function ze(H,Le,Be){Be===void 0&&(ce===null?Be=i.TEXTURE0+B-1:Be=ce);let Ke=xe[Be];Ke===void 0&&(Ke={type:void 0,texture:void 0},xe[Be]=Ke),(Ke.type!==H||Ke.texture!==Le)&&(ce!==Be&&(i.activeTexture(Be),ce=Be),i.bindTexture(H,Le||te[H]),Ke.type=H,Ke.texture=Le)}function I(){let H=xe[ce];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Y(){try{i.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ne(){try{i.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{i.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function P(){try{i.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function O(){try{i.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{i.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{i.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{i.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{i.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(H){Ve.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Ve.copy(H))}function De(H){nt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),nt.copy(H))}function Oe(H,Le){let Be=l.get(Le);Be===void 0&&(Be=new WeakMap,l.set(Le,Be));let Ke=Be.get(H);Ke===void 0&&(Ke=i.getUniformBlockIndex(Le,H.name),Be.set(H,Ke))}function Re(H,Le){let Ke=l.get(Le).get(H);c.get(Le)!==Ke&&(i.uniformBlockBinding(Le,Ke,H.__bindingPointIndex),c.set(Le,Ke))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ce=null,xe={},p={},u=new WeakMap,m=[],_=null,x=!1,f=null,g=null,R=null,S=null,v=null,D=null,C=null,U=new St(0,0,0),N=0,T=!1,b=null,F=null,Z=null,$=null,ee=null,Ve.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Ne,bindFramebuffer:Ze,drawBuffers:ke,useProgram:Ce,setBlending:fe,setMaterial:me,setFlipSided:le,setCullFace:ge,setLineWidth:Ue,setPolygonOffset:pe,setScissorTest:be,activeTexture:je,bindTexture:ze,unbindTexture:I,compressedTexImage2D:y,compressedTexImage3D:Y,texImage2D:we,texImage3D:ve,updateUBOMapping:Oe,uniformBlockBinding:Re,texStorage2D:K,texStorage3D:ae,texSubImage2D:ne,texSubImage3D:_e,compressedTexSubImage2D:P,compressedTexSubImage3D:O,scissor:Me,viewport:De,reset:at}}function vx(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,d=new WeakMap,p,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,y){return m?new OffscreenCanvas(I,y):kr("canvas")}function x(I,y,Y){let ne=1,_e=ze(I);if((_e.width>Y||_e.height>Y)&&(ne=Y/Math.max(_e.width,_e.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let P=Math.floor(ne*_e.width),O=Math.floor(ne*_e.height);p===void 0&&(p=_(P,O));let K=y?_(P,O):p;return K.width=P,K.height=O,K.getContext("2d").drawImage(I,0,0,P,O),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+P+"x"+O+")."),K}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function f(I){return I.generateMipmaps}function g(I){i.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(I,y,Y,ne,_e=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let P=y;if(y===i.RED&&(Y===i.FLOAT&&(P=i.R32F),Y===i.HALF_FLOAT&&(P=i.R16F),Y===i.UNSIGNED_BYTE&&(P=i.R8)),y===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(P=i.R8UI),Y===i.UNSIGNED_SHORT&&(P=i.R16UI),Y===i.UNSIGNED_INT&&(P=i.R32UI),Y===i.BYTE&&(P=i.R8I),Y===i.SHORT&&(P=i.R16I),Y===i.INT&&(P=i.R32I)),y===i.RG&&(Y===i.FLOAT&&(P=i.RG32F),Y===i.HALF_FLOAT&&(P=i.RG16F),Y===i.UNSIGNED_BYTE&&(P=i.RG8)),y===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(P=i.RG8UI),Y===i.UNSIGNED_SHORT&&(P=i.RG16UI),Y===i.UNSIGNED_INT&&(P=i.RG32UI),Y===i.BYTE&&(P=i.RG8I),Y===i.SHORT&&(P=i.RG16I),Y===i.INT&&(P=i.RG32I)),y===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(P=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(P=i.RGB16UI),Y===i.UNSIGNED_INT&&(P=i.RGB32UI),Y===i.BYTE&&(P=i.RGB8I),Y===i.SHORT&&(P=i.RGB16I),Y===i.INT&&(P=i.RGB32I)),y===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),Y===i.UNSIGNED_INT&&(P=i.RGBA32UI),Y===i.BYTE&&(P=i.RGBA8I),Y===i.SHORT&&(P=i.RGBA16I),Y===i.INT&&(P=i.RGBA32I)),y===i.RGB&&(Y===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(P=i.R11F_G11F_B10F)),y===i.RGBA){let O=_e?zr:At.getTransfer(ne);Y===i.FLOAT&&(P=i.RGBA32F),Y===i.HALF_FLOAT&&(P=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(P=O===Bt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return(P===i.R16F||P===i.R32F||P===i.RG16F||P===i.RG32F||P===i.RGBA16F||P===i.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function v(I,y){let Y;return I?y===null||y===Ji||y===fr?Y=i.DEPTH24_STENCIL8:y===ai?Y=i.DEPTH32F_STENCIL8:y===ur&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ji||y===fr?Y=i.DEPTH_COMPONENT24:y===ai?Y=i.DEPTH_COMPONENT32F:y===ur&&(Y=i.DEPTH_COMPONENT16),Y}function D(I,y){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==Dn&&I.minFilter!==ii?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function C(I){let y=I.target;y.removeEventListener("dispose",C),N(y),y.isVideoTexture&&d.delete(y)}function U(I){let y=I.target;y.removeEventListener("dispose",U),b(y)}function N(I){let y=n.get(I);if(y.__webglInit===void 0)return;let Y=I.source,ne=u.get(Y);if(ne){let _e=ne[y.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&T(I),Object.keys(ne).length===0&&u.delete(Y)}n.remove(I)}function T(I){let y=n.get(I);i.deleteTexture(y.__webglTexture);let Y=I.source,ne=u.get(Y);delete ne[y.__cacheKey],o.memory.textures--}function b(I){let y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(y.__webglFramebuffer[ne]))for(let _e=0;_e<y.__webglFramebuffer[ne].length;_e++)i.deleteFramebuffer(y.__webglFramebuffer[ne][_e]);else i.deleteFramebuffer(y.__webglFramebuffer[ne]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ne])}else{if(Array.isArray(y.__webglFramebuffer))for(let ne=0;ne<y.__webglFramebuffer.length;ne++)i.deleteFramebuffer(y.__webglFramebuffer[ne]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ne=0;ne<y.__webglColorRenderbuffer.length;ne++)y.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ne]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Y=I.textures;for(let ne=0,_e=Y.length;ne<_e;ne++){let P=n.get(Y[ne]);P.__webglTexture&&(i.deleteTexture(P.__webglTexture),o.memory.textures--),n.remove(Y[ne])}n.remove(I)}let F=0;function Z(){F=0}function $(){let I=F;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function ee(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function B(I,y){let Y=n.get(I);if(I.isVideoTexture&&be(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){let ne=I.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Y,I,y);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+y)}function V(I,y){let Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){te(Y,I,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+y)}function X(I,y){let Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){te(Y,I,y);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+y)}function z(I,y){let Y=n.get(I);if(I.version>0&&Y.__version!==I.version){ue(Y,I,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+y)}let ce={[da]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},xe={[Dn]:i.NEAREST,[ud]:i.NEAREST_MIPMAP_NEAREST,[_o]:i.NEAREST_MIPMAP_LINEAR,[ii]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},oe={[md]:i.NEVER,[Md]:i.ALWAYS,[gd]:i.LESS,[Qc]:i.LEQUAL,[_d]:i.EQUAL,[vd]:i.GEQUAL,[xd]:i.GREATER,[yd]:i.NOTEQUAL};function Te(I,y){if(y.type===ai&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ii||y.magFilter===el||y.magFilter===_o||y.magFilter===Ki||y.minFilter===ii||y.minFilter===el||y.minFilter===_o||y.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ce[y.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ce[y.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ce[y.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,xe[y.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Dn||y.minFilter!==_o&&y.minFilter!==Ki||y.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ve(I,y){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",C));let ne=y.source,_e=u.get(ne);_e===void 0&&(_e={},u.set(ne,_e));let P=ee(y);if(P!==I.__cacheKey){_e[P]===void 0&&(_e[P]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),_e[P].usedTimes++;let O=_e[I.__cacheKey];O!==void 0&&(_e[I.__cacheKey].usedTimes--,O.usedTimes===0&&T(y)),I.__cacheKey=P,I.__webglTexture=_e[P].texture}return Y}function nt(I,y,Y){return Math.floor(Math.floor(I/Y)/y)}function Qe(I,y,Y,ne){let P=I.updateRanges;if(P.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,Y,ne,y.data);else{P.sort((ve,Me)=>ve.start-Me.start);let O=0;for(let ve=1;ve<P.length;ve++){let Me=P[O],De=P[ve],Oe=Me.start+Me.count,Re=nt(De.start,y.width,4),at=nt(Me.start,y.width,4);De.start<=Oe+1&&Re===at&&nt(De.start+De.count-1,y.width,4)===Re?Me.count=Math.max(Me.count,De.start+De.count-Me.start):(++O,P[O]=De)}P.length=O+1;let K=i.getParameter(i.UNPACK_ROW_LENGTH),ae=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ve=0,Me=P.length;ve<Me;ve++){let De=P[ve],Oe=Math.floor(De.start/4),Re=Math.ceil(De.count/4),at=Oe%y.width,H=Math.floor(Oe/y.width),Le=Re,Be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,at),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,at,H,Le,Be,Y,ne,y.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,K),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function te(I,y,Y){let ne=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ne=i.TEXTURE_3D);let _e=Ve(I,y),P=y.source;t.bindTexture(ne,I.__webglTexture,i.TEXTURE0+Y);let O=n.get(P);if(P.version!==O.__version||_e===!0){t.activeTexture(i.TEXTURE0+Y);let K=At.getPrimaries(At.workingColorSpace),ae=y.colorSpace===Di?null:At.getPrimaries(y.colorSpace),we=y.colorSpace===Di||K===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ve=x(y.image,!1,s.maxTextureSize);ve=je(y,ve);let Me=r.convert(y.format,y.colorSpace),De=r.convert(y.type),Oe=S(y.internalFormat,Me,De,y.colorSpace,y.isVideoTexture);Te(ne,y);let Re,at=y.mipmaps,H=y.isVideoTexture!==!0,Le=O.__version===void 0||_e===!0,Be=P.dataReady,Ke=D(y,ve);if(y.isDepthTexture)Oe=v(y.format===pr,y.type),Le&&(H?t.texStorage2D(i.TEXTURE_2D,1,Oe,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ve.width,ve.height,0,Me,De,null));else if(y.isDataTexture)if(at.length>0){H&&Le&&t.texStorage2D(i.TEXTURE_2D,Ke,Oe,at[0].width,at[0].height);for(let Pe=0,Ee=at.length;Pe<Ee;Pe++)Re=at[Pe],H?Be&&t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Re.width,Re.height,Me,De,Re.data):t.texImage2D(i.TEXTURE_2D,Pe,Oe,Re.width,Re.height,0,Me,De,Re.data);y.generateMipmaps=!1}else H?(Le&&t.texStorage2D(i.TEXTURE_2D,Ke,Oe,ve.width,ve.height),Be&&Qe(y,ve,Me,De)):t.texImage2D(i.TEXTURE_2D,0,Oe,ve.width,ve.height,0,Me,De,ve.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){H&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,Oe,at[0].width,at[0].height,ve.depth);for(let Pe=0,Ee=at.length;Pe<Ee;Pe++)if(Re=at[Pe],y.format!==Yn)if(Me!==null)if(H){if(Be)if(y.layerUpdates.size>0){let Je=ah(Re.width,Re.height,y.format,y.type);for(let ft of y.layerUpdates){let Nt=Re.data.subarray(ft*Je/Re.data.BYTES_PER_ELEMENT,(ft+1)*Je/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,ft,Re.width,Re.height,1,Me,Nt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,Re.width,Re.height,ve.depth,Me,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Pe,Oe,Re.width,Re.height,ve.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,Re.width,Re.height,ve.depth,Me,De,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Pe,Oe,Re.width,Re.height,ve.depth,0,Me,De,Re.data)}else{H&&Le&&t.texStorage2D(i.TEXTURE_2D,Ke,Oe,at[0].width,at[0].height);for(let Pe=0,Ee=at.length;Pe<Ee;Pe++)Re=at[Pe],y.format!==Yn?Me!==null?H?Be&&t.compressedTexSubImage2D(i.TEXTURE_2D,Pe,0,0,Re.width,Re.height,Me,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,Pe,Oe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Be&&t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Re.width,Re.height,Me,De,Re.data):t.texImage2D(i.TEXTURE_2D,Pe,Oe,Re.width,Re.height,0,Me,De,Re.data)}else if(y.isDataArrayTexture)if(H){if(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,Oe,ve.width,ve.height,ve.depth),Be)if(y.layerUpdates.size>0){let Pe=ah(ve.width,ve.height,y.format,y.type);for(let Ee of y.layerUpdates){let Je=ve.data.subarray(Ee*Pe/ve.data.BYTES_PER_ELEMENT,(Ee+1)*Pe/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,ve.width,ve.height,1,Me,De,Je)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Me,De,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ve.width,ve.height,ve.depth,0,Me,De,ve.data);else if(y.isData3DTexture)H?(Le&&t.texStorage3D(i.TEXTURE_3D,Ke,Oe,ve.width,ve.height,ve.depth),Be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Me,De,ve.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ve.width,ve.height,ve.depth,0,Me,De,ve.data);else if(y.isFramebufferTexture){if(Le)if(H)t.texStorage2D(i.TEXTURE_2D,Ke,Oe,ve.width,ve.height);else{let Pe=ve.width,Ee=ve.height;for(let Je=0;Je<Ke;Je++)t.texImage2D(i.TEXTURE_2D,Je,Oe,Pe,Ee,0,Me,De,null),Pe>>=1,Ee>>=1}}else if(at.length>0){if(H&&Le){let Pe=ze(at[0]);t.texStorage2D(i.TEXTURE_2D,Ke,Oe,Pe.width,Pe.height)}for(let Pe=0,Ee=at.length;Pe<Ee;Pe++)Re=at[Pe],H?Be&&t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Me,De,Re):t.texImage2D(i.TEXTURE_2D,Pe,Oe,Me,De,Re);y.generateMipmaps=!1}else if(H){if(Le){let Pe=ze(ve);t.texStorage2D(i.TEXTURE_2D,Ke,Oe,Pe.width,Pe.height)}Be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,De,ve)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Me,De,ve);f(y)&&g(ne),O.__version=P.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function ue(I,y,Y){if(y.image.length!==6)return;let ne=Ve(I,y),_e=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);let P=n.get(_e);if(_e.version!==P.__version||ne===!0){t.activeTexture(i.TEXTURE0+Y);let O=At.getPrimaries(At.workingColorSpace),K=y.colorSpace===Di?null:At.getPrimaries(y.colorSpace),ae=y.colorSpace===Di||O===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let we=y.isCompressedTexture||y.image[0].isCompressedTexture,ve=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let Ee=0;Ee<6;Ee++)!we&&!ve?Me[Ee]=x(y.image[Ee],!0,s.maxCubemapSize):Me[Ee]=ve?y.image[Ee].image:y.image[Ee],Me[Ee]=je(y,Me[Ee]);let De=Me[0],Oe=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),at=S(y.internalFormat,Oe,Re,y.colorSpace),H=y.isVideoTexture!==!0,Le=P.__version===void 0||ne===!0,Be=_e.dataReady,Ke=D(y,De);Te(i.TEXTURE_CUBE_MAP,y);let Pe;if(we){H&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,at,De.width,De.height);for(let Ee=0;Ee<6;Ee++){Pe=Me[Ee].mipmaps;for(let Je=0;Je<Pe.length;Je++){let ft=Pe[Je];y.format!==Yn?Oe!==null?H?Be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,0,0,ft.width,ft.height,Oe,ft.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,at,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,0,0,ft.width,ft.height,Oe,Re,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,at,ft.width,ft.height,0,Oe,Re,ft.data)}}}else{if(Pe=y.mipmaps,H&&Le){Pe.length>0&&Ke++;let Ee=ze(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,at,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(ve){H?Be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Me[Ee].width,Me[Ee].height,Oe,Re,Me[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Me[Ee].width,Me[Ee].height,0,Oe,Re,Me[Ee].data);for(let Je=0;Je<Pe.length;Je++){let Nt=Pe[Je].image[Ee].image;H?Be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,0,0,Nt.width,Nt.height,Oe,Re,Nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,at,Nt.width,Nt.height,0,Oe,Re,Nt.data)}}else{H?Be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Oe,Re,Me[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Oe,Re,Me[Ee]);for(let Je=0;Je<Pe.length;Je++){let ft=Pe[Je];H?Be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,0,0,Oe,Re,ft.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,at,Oe,Re,ft.image[Ee])}}}f(y)&&g(i.TEXTURE_CUBE_MAP),P.__version=_e.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Ne(I,y,Y,ne,_e,P){let O=r.convert(Y.format,Y.colorSpace),K=r.convert(Y.type),ae=S(Y.internalFormat,O,K,Y.colorSpace),we=n.get(y),ve=n.get(Y);if(ve.__renderTarget=y,!we.__hasExternalTextures){let Me=Math.max(1,y.width>>P),De=Math.max(1,y.height>>P);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,P,ae,Me,De,y.depth,0,O,K,null):t.texImage2D(_e,P,ae,Me,De,0,O,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),pe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,_e,ve.__webglTexture,0,Ue(y)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,_e,ve.__webglTexture,P),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(I,y,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),y.depthBuffer){let ne=y.depthTexture,_e=ne&&ne.isDepthTexture?ne.type:null,P=v(y.stencilBuffer,_e),O=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=Ue(y);pe(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,P,y.width,y.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,P,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,P,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,I)}else{let ne=y.textures;for(let _e=0;_e<ne.length;_e++){let P=ne[_e],O=r.convert(P.format,P.colorSpace),K=r.convert(P.type),ae=S(P.internalFormat,O,K,P.colorSpace),we=Ue(y);Y&&pe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ae,y.width,y.height):pe(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,ae,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ae,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(I,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=n.get(y.depthTexture);ne.__renderTarget=y,(!ne.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);let _e=ne.__webglTexture,P=Ue(y);if(y.depthTexture.format===Js)pe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(y.depthTexture.format===pr)pe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ce(I){let y=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let ne=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ne){let _e=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ne.removeEventListener("dispose",_e)};ne.addEventListener("dispose",_e),y.__depthDisposeCallback=_e}y.__boundDepthTexture=ne}if(I.depthTexture&&!y.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let ne=I.texture.mipmaps;ne&&ne.length>0?ke(y.__webglFramebuffer[0],I):ke(y.__webglFramebuffer,I)}else if(Y){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]===void 0)y.__webglDepthbuffer[ne]=i.createRenderbuffer(),Ze(y.__webglDepthbuffer[ne],I,!1);else{let _e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=y.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,P)}}else{let ne=I.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ze(y.__webglDepthbuffer,I,!1);else{let _e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,P)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(I,y,Y){let ne=n.get(I);y!==void 0&&Ne(ne.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Ce(I)}function L(I){let y=I.texture,Y=n.get(I),ne=n.get(y);I.addEventListener("dispose",U);let _e=I.textures,P=I.isWebGLCubeRenderTarget===!0,O=_e.length>1;if(O||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=y.version,o.memory.textures++),P){Y.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[K]=[];for(let ae=0;ae<y.mipmaps.length;ae++)Y.__webglFramebuffer[K][ae]=i.createFramebuffer()}else Y.__webglFramebuffer[K]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)Y.__webglFramebuffer[K]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(O)for(let K=0,ae=_e.length;K<ae;K++){let we=n.get(_e[K]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&pe(I)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let K=0;K<_e.length;K++){let ae=_e[K];Y.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[K]);let we=r.convert(ae.format,ae.colorSpace),ve=r.convert(ae.type),Me=S(ae.internalFormat,we,ve,ae.colorSpace,I.isXRRenderTarget===!0),De=Ue(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Me,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,Y.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Te(i.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let ae=0;ae<y.mipmaps.length;ae++)Ne(Y.__webglFramebuffer[K][ae],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae);else Ne(Y.__webglFramebuffer[K],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(y)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(O){for(let K=0,ae=_e.length;K<ae;K++){let we=_e[K],ve=n.get(we),Me=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,ve.__webglTexture),Te(Me,we),Ne(Y.__webglFramebuffer,I,we,i.COLOR_ATTACHMENT0+K,Me,0),f(we)&&g(Me)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(K=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,ne.__webglTexture),Te(K,y),y.mipmaps&&y.mipmaps.length>0)for(let ae=0;ae<y.mipmaps.length;ae++)Ne(Y.__webglFramebuffer[ae],I,y,i.COLOR_ATTACHMENT0,K,ae);else Ne(Y.__webglFramebuffer,I,y,i.COLOR_ATTACHMENT0,K,0);f(y)&&g(K),t.unbindTexture()}I.depthBuffer&&Ce(I)}function fe(I){let y=I.textures;for(let Y=0,ne=y.length;Y<ne;Y++){let _e=y[Y];if(f(_e)){let P=R(I),O=n.get(_e).__webglTexture;t.bindTexture(P,O),g(P),t.unbindTexture()}}}let me=[],le=[];function ge(I){if(I.samples>0){if(pe(I)===!1){let y=I.textures,Y=I.width,ne=I.height,_e=i.COLOR_BUFFER_BIT,P=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=n.get(I),K=y.length>1;if(K)for(let we=0;we<y.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,O.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,O.__webglMultisampledFramebuffer);let ae=I.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,O.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,O.__webglFramebuffer);for(let we=0;we<y.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,O.__webglColorRenderbuffer[we]);let ve=n.get(y[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,Y,ne,0,0,Y,ne,_e,i.NEAREST),c===!0&&(me.length=0,le.length=0,me.push(i.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.resolveDepthBuffer===!1&&(me.push(P),le.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let we=0;we<y.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,O.__webglColorRenderbuffer[we]);let ve=n.get(y[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,O.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,O.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ue(I){return Math.min(s.maxSamples,I.samples)}function pe(I){let y=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function be(I){let y=o.render.frame;d.get(I)!==y&&(d.set(I,y),I.update())}function je(I,y){let Y=I.colorSpace,ne=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==cs&&Y!==Di&&(At.getTransfer(Y)===Bt?(ne!==Yn||_e!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),y}function ze(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=Z,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=gt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=pe}function Mx(i,e){function t(n,s=Di){let r,o=At.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xc)return i.BYTE;if(n===Yc)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===Ji)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===dr)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===Yn)return i.RGBA;if(n===Js)return i.DEPTH_COMPONENT;if(n===pr)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===$c)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===xo||n===yo||n===vo||n===Mo)if(o===Bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===fl)return o===Bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===_l||n===xl||n===yl||n===vl||n===Ml||n===El||n===Sl||n===bl||n===wl||n===Tl||n===Al||n===Rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cl||n===Pl||n===Il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cl)return o===Bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dl||n===Ll||n===Nl||n===Ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new si({vertexShader:Ex,fragmentShader:Sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends di{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,p=null,u=null,m=null,_=null,x=typeof XRWebGLBinding<"u",f=new vh,g={},R=t.getContextAttributes(),S=null,v=null,D=[],C=[],U=new Se,N=null,T=new dn;T.viewport=new Zt;let b=new dn;b.viewport=new Zt;let F=[T,b],Z=new Wa,$=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=D[te];return ue===void 0&&(ue=new er,D[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=D[te];return ue===void 0&&(ue=new er,D[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=D[te];return ue===void 0&&(ue=new er,D[te]=ue),ue.getHandSpace()};function B(te){let ue=C.indexOf(te.inputSource);if(ue===-1)return;let Ne=D[ue];Ne!==void 0&&(Ne.update(te.inputSource,te.frame,l||o),Ne.dispatchEvent({type:te.type,data:te.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",X);for(let te=0;te<D.length;te++){let ue=C[te];ue!==null&&(C[te]=null,D[te].disconnect(ue))}$=null,ee=null,f.reset();for(let te in g)delete g[te];e.setRenderTarget(S),m=null,u=null,p=null,s=null,v=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",X),R.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(U),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,Ze=null,ke=null;R.depth&&(ke=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ne=R.stencil?pr:Js,Ze=R.stencil?fr:Ji);let Ce={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new fi(u.textureWidth,u.textureHeight,{format:Yn,type:oi,depthTexture:new $r(u.textureWidth,u.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let Ne={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Ne),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new fi(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function X(te){for(let ue=0;ue<te.removed.length;ue++){let Ne=te.removed[ue],Ze=C.indexOf(Ne);Ze>=0&&(C[Ze]=null,D[Ze].disconnect(Ne))}for(let ue=0;ue<te.added.length;ue++){let Ne=te.added[ue],Ze=C.indexOf(Ne);if(Ze===-1){for(let Ce=0;Ce<D.length;Ce++)if(Ce>=C.length){C.push(Ne),Ze=Ce;break}else if(C[Ce]===null){C[Ce]=Ne,Ze=Ce;break}if(Ze===-1)break}let ke=D[Ze];ke&&ke.connect(Ne)}}let z=new w,ce=new w;function xe(te,ue,Ne){z.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(Ne.matrixWorld);let Ze=z.distanceTo(ce),ke=ue.projectionMatrix.elements,Ce=Ne.projectionMatrix.elements,gt=ke[14]/(ke[10]-1),L=ke[14]/(ke[10]+1),fe=(ke[9]+1)/ke[5],me=(ke[9]-1)/ke[5],le=(ke[8]-1)/ke[0],ge=(Ce[8]+1)/Ce[0],Ue=gt*le,pe=gt*ge,be=Ze/(-le+ge),je=be*-le;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(je),te.translateZ(be),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ke[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let ze=gt+be,I=L+be,y=Ue-je,Y=pe+(Ze-je),ne=fe*L/I*ze,_e=me*L/I*ze;te.projectionMatrix.makePerspective(y,Y,ne,_e,ze,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function oe(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ue=te.near,Ne=te.far;f.texture!==null&&(f.depthNear>0&&(ue=f.depthNear),f.depthFar>0&&(Ne=f.depthFar)),Z.near=b.near=T.near=ue,Z.far=b.far=T.far=Ne,($!==Z.near||ee!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),$=Z.near,ee=Z.far),Z.layers.mask=te.layers.mask|6,T.layers.mask=Z.layers.mask&3,b.layers.mask=Z.layers.mask&5;let Ze=te.parent,ke=Z.cameras;oe(Z,Ze);for(let Ce=0;Ce<ke.length;Ce++)oe(ke[Ce],Ze);ke.length===2?xe(Z,T,b):Z.projectionMatrix.copy(T.projectionMatrix),Te(te,Z,Ze)};function Te(te,ue,Ne){Ne===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(Ne.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=hs*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(te){c=te,u!==null&&(u.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(Z)},this.getCameraTexture=function(te){return g[te]};let Ve=null;function nt(te,ue){if(d=ue.getViewerPose(l||o),_=ue,d!==null){let Ne=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Ze=!1;Ne.length!==Z.cameras.length&&(Z.cameras.length=0,Ze=!0);for(let L=0;L<Ne.length;L++){let fe=Ne[L],me=null;if(m!==null)me=m.getViewport(fe);else{let ge=p.getViewSubImage(u,fe);me=ge.viewport,L===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let le=F[L];le===void 0&&(le=new dn,le.layers.enable(L),le.viewport=new Zt,F[L]=le),le.matrix.fromArray(fe.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(fe.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(me.x,me.y,me.width,me.height),L===0&&(Z.matrix.copy(le.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ze===!0&&Z.cameras.push(le)}let ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=n.getBinding();let L=p.getDepthInformation(Ne[0]);L&&L.isValid&&L.texture&&f.init(L,s.renderState)}if(ke&&ke.includes("camera-access")&&x){e.state.unbindTexture(),p=n.getBinding();for(let L=0;L<Ne.length;L++){let fe=Ne[L].camera;if(fe){let me=g[fe];me||(me=new jr,g[fe]=me);let le=p.getCameraImage(fe);me.sourceTexture=le}}}}for(let Ne=0;Ne<D.length;Ne++){let Ze=C[Ne],ke=D[Ne];Ze!==null&&ke!==void 0&&ke.update(Ze,ue,l||o)}Ve&&Ve(te,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),_=null}let Qe=new tf;Qe.setAnimationLoop(nt),this.setAnimationLoop=function(te){Ve=te},this.dispose=function(){}}},Ms=new cn,bx=new Rt;function wx(i,e){function t(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function n(f,g){g.color.getRGB(f.fogColor.value,ih(i)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function s(f,g,R,S,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(f,g):g.isMeshToonMaterial?(r(f,g),p(f,g)):g.isMeshPhongMaterial?(r(f,g),d(f,g)):g.isMeshStandardMaterial?(r(f,g),u(f,g),g.isMeshPhysicalMaterial&&m(f,g,v)):g.isMeshMatcapMaterial?(r(f,g),_(f,g)):g.isMeshDepthMaterial?r(f,g):g.isMeshDistanceMaterial?(r(f,g),x(f,g)):g.isMeshNormalMaterial?r(f,g):g.isLineBasicMaterial?(o(f,g),g.isLineDashedMaterial&&a(f,g)):g.isPointsMaterial?c(f,g,R,S):g.isSpriteMaterial?l(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,t(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,t(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===Cn&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,t(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===Cn&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,t(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,t(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);let R=e.get(g),S=R.envMap,v=R.envMapRotation;S&&(f.envMap.value=S,Ms.copy(v),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),f.envMapRotation.value.setFromMatrix4(bx.makeRotationFromEuler(Ms)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,f.aoMapTransform))}function o(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,t(g.map,f.mapTransform))}function a(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function c(f,g,R,S){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*R,f.scale.value=S*.5,g.map&&(f.map.value=g.map,t(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function l(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,t(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function d(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function p(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function u(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function m(f,g,R){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Cn&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=R.texture,f.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,g){g.matcap&&(f.matcap.value=g.matcap)}function x(f,g){let R=e.get(g).light;f.referencePosition.value.setFromMatrixPosition(R.matrixWorld),f.nearDistance.value=R.shadow.camera.near,f.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tx(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,S){let v=S.program;n.uniformBlockBinding(R,v)}function l(R,S){let v=s[R.id];v===void 0&&(_(R),v=d(R),s[R.id]=v,R.addEventListener("dispose",f));let D=S.program;n.updateUBOMapping(R,D);let C=e.render.frame;r[R.id]!==C&&(u(R),r[R.id]=C)}function d(R){let S=p();R.__bindingPointIndex=S;let v=i.createBuffer(),D=R.__size,C=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function p(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(R){let S=s[R.id],v=R.uniforms,D=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,U=v.length;C<U;C++){let N=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,b=N.length;T<b;T++){let F=N[T];if(m(F,C,T,D)===!0){let Z=F.__offset,$=Array.isArray(F.value)?F.value:[F.value],ee=0;for(let B=0;B<$.length;B++){let V=$[B],X=x(V);typeof V=="number"||typeof V=="boolean"?(F.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,Z+ee,F.__data)):V.isMatrix3?(F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0):(V.toArray(F.__data,ee),ee+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,S,v,D){let C=R.value,U=S+"_"+v;if(D[U]===void 0)return typeof C=="number"||typeof C=="boolean"?D[U]=C:D[U]=C.clone(),!0;{let N=D[U];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return D[U]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(R){let S=R.uniforms,v=0,D=16;for(let U=0,N=S.length;U<N;U++){let T=Array.isArray(S[U])?S[U]:[S[U]];for(let b=0,F=T.length;b<F;b++){let Z=T[b],$=Array.isArray(Z.value)?Z.value:[Z.value];for(let ee=0,B=$.length;ee<B;ee++){let V=$[ee],X=x(V),z=v%D,ce=z%X.boundary,xe=z+ce;v+=ce,xe!==0&&D-xe<X.storage&&(v+=D-xe),Z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=v,v+=X.storage}}}let C=v%D;return C>0&&(v+=D-C),R.__size=v,R.__cache={},this}function x(R){let S={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(S.boundary=4,S.storage=4):R.isVector2?(S.boundary=8,S.storage=8):R.isVector3||R.isColor?(S.boundary=16,S.storage=12):R.isVector4?(S.boundary=16,S.storage=16):R.isMatrix3?(S.boundary=48,S.storage=48):R.isMatrix4?(S.boundary=64,S.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),S}function f(R){let S=R.target;S.removeEventListener("dispose",f);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}var Hl=class{constructor(e={}){let{canvas:t=Ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=new Uint32Array(4),x=new Int32Array(4),f=null,g=null,R=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,D=!1;this._outputColorSpace=an;let C=0,U=0,N=null,T=-1,b=null,F=new Zt,Z=new Zt,$=null,ee=new St(0),B=0,V=t.width,X=t.height,z=1,ce=null,xe=null,oe=new Zt(0,0,V,X),Te=new Zt(0,0,V,X),Ve=!1,nt=new ir,Qe=!1,te=!1,ue=new Rt,Ne=new w,Ze=new Zt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function gt(){return N===null?z:1}let L=n;function fe(A,W){return t.getContext(A,W)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),L===null){let W="webgl2";if(L=fe(W,A),L===null)throw fe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let me,le,ge,Ue,pe,be,je,ze,I,y,Y,ne,_e,P,O,K,ae,we,ve,Me,De,Oe,Re,at;function H(){me=new W_(L),me.init(),Oe=new Mx(L,me),le=new O_(L,me,e,Oe),ge=new yx(L,me),le.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),Ue=new q_(L),pe=new ox,be=new vx(L,me,ge,pe,le,Oe,Ue),je=new z_(v),ze=new G_(v),I=new Qp(L),Re=new U_(L,I),y=new X_(L,I,Ue,Re),Y=new K_(L,y,I,Ue),ve=new Z_(L,le,be),K=new B_(pe),ne=new rx(v,je,ze,me,le,Re,K),_e=new wx(v,pe),P=new lx,O=new px(me),we=new N_(v,je,ze,ge,Y,m,c),ae=new _x(v,Y,le),at=new Tx(L,Ue,le,ge),Me=new F_(L,me,Ue),De=new Y_(L,me,Ue),Ue.programs=ne.programs,v.capabilities=le,v.extensions=me,v.properties=pe,v.renderLists=P,v.shadowMap=ae,v.state=ge,v.info=Ue}H();let Le=new Mh(v,L);this.xr=Le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(V,X,!1))},this.getSize=function(A){return A.set(V,X)},this.setSize=function(A,W,se=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,X=W,t.width=Math.floor(A*z),t.height=Math.floor(W*z),se===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(V*z,X*z).floor()},this.setDrawingBufferSize=function(A,W,se){V=A,X=W,z=se,t.width=Math.floor(A*se),t.height=Math.floor(W*se),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,W,se,re){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,W,se,re),ge.viewport(F.copy(oe).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Te)},this.setScissor=function(A,W,se,re){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,W,se,re),ge.scissor(Z.copy(Te).multiplyScalar(z).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(A){ge.setScissorTest(Ve=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,se=!0){let re=0;if(A){let J=!1;if(N!==null){let Ie=N.texture.format;J=Ie===al||Ie===ol||Ie===rl}if(J){let Ie=N.texture.type,We=Ie===oi||Ie===Ji||Ie===ur||Ie===fr||Ie===nl||Ie===il,Ye=we.getClearColor(),qe=we.getClearAlpha(),et=Ye.r,rt=Ye.g,it=Ye.b;We?(_[0]=et,_[1]=rt,_[2]=it,_[3]=qe,L.clearBufferuiv(L.COLOR,0,_)):(x[0]=et,x[1]=rt,x[2]=it,x[3]=qe,L.clearBufferiv(L.COLOR,0,x))}else re|=L.COLOR_BUFFER_BIT}W&&(re|=L.DEPTH_BUFFER_BIT),se&&(re|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),we.dispose(),P.dispose(),O.dispose(),pe.dispose(),je.dispose(),ze.dispose(),Y.dispose(),Re.dispose(),at.dispose(),ne.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Vn),Le.removeEventListener("sessionend",yr),lt.stop()};function Be(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ke(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let A=Ue.autoReset,W=ae.enabled,se=ae.autoUpdate,re=ae.needsUpdate,J=ae.type;H(),Ue.autoReset=A,ae.enabled=W,ae.autoUpdate=se,ae.needsUpdate=re,ae.type=J}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ee(A){let W=A.target;W.removeEventListener("dispose",Ee),Je(W)}function Je(A){ft(A),pe.remove(A)}function ft(A){let W=pe.get(A).programs;W!==void 0&&(W.forEach(function(se){ne.releaseProgram(se)}),A.isShaderMaterial&&ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,se,re,J,Ie){W===null&&(W=ke);let We=J.isMesh&&J.matrixWorld.determinant()<0,Ye=vr(A,W,se,re,J);ge.setMaterial(re,We);let qe=se.index,et=1;if(re.wireframe===!0){if(qe=y.getWireframeAttribute(se),qe===void 0)return;et=2}let rt=se.drawRange,it=se.attributes.position,Et=rt.start*et,Pt=(rt.start+rt.count)*et;Ie!==null&&(Et=Math.max(Et,Ie.start*et),Pt=Math.min(Pt,(Ie.start+Ie.count)*et)),qe!==null?(Et=Math.max(Et,0),Pt=Math.min(Pt,qe.count)):it!=null&&(Et=Math.max(Et,0),Pt=Math.min(Pt,it.count));let Ft=Pt-Et;if(Ft<0||Ft===1/0)return;Re.setup(J,re,Ye,se,qe);let ht,$e=Me;if(qe!==null&&(ht=I.get(qe),$e=De,$e.setIndex(ht)),J.isMesh)re.wireframe===!0?(ge.setLineWidth(re.wireframeLinewidth*gt()),$e.setMode(L.LINES)):$e.setMode(L.TRIANGLES);else if(J.isLine){let tt=re.linewidth;tt===void 0&&(tt=1),ge.setLineWidth(tt*gt()),J.isLineSegments?$e.setMode(L.LINES):J.isLineLoop?$e.setMode(L.LINE_LOOP):$e.setMode(L.LINE_STRIP)}else J.isPoints?$e.setMode(L.POINTS):J.isSprite&&$e.setMode(L.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)$s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))$e.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let tt=J._multiDrawStarts,Tt=J._multiDrawCounts,dt=J._multiDrawCount,Mn=qe?I.get(qe).bytesPerElement:1,Kn=pe.get(re).currentProgram.getUniforms();for(let Qt=0;Qt<dt;Qt++)Kn.setValue(L,"_gl_DrawID",Qt),$e.render(tt[Qt]/Mn,Tt[Qt])}else if(J.isInstancedMesh)$e.renderInstances(Et,Ft,J.count);else if(se.isInstancedBufferGeometry){let tt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Tt=Math.min(se.instanceCount,tt);$e.renderInstances(Et,Ft,Tt)}else $e.render(Et,Ft)};function Nt(A,W,se){A.transparent===!0&&A.side===hn&&A.forceSinglePass===!1?(A.side=Cn,A.needsUpdate=!0,yt(A,W,se),A.side=wi,A.needsUpdate=!0,yt(A,W,se),A.side=hn):yt(A,W,se)}this.compile=function(A,W,se=null){se===null&&(se=A),g=O.get(se),g.init(W),S.push(g),se.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),A!==se&&A.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),g.setupLights();let re=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let We=0;We<Ie.length;We++){let Ye=Ie[We];Nt(Ye,se,J),re.add(Ye)}else Nt(Ie,se,J),re.add(Ie)}),g=S.pop(),re},this.compileAsync=function(A,W,se=null){let re=this.compile(A,W,se);return new Promise(J=>{function Ie(){if(re.forEach(function(We){pe.get(We).currentProgram.isReady()&&re.delete(We)}),re.size===0){J(A);return}setTimeout(Ie,10)}me.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let _t=null;function qn(A){_t&&_t(A)}function Vn(){lt.stop()}function yr(){lt.start()}let lt=new tf;lt.setAnimationLoop(qn),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(A){_t=A,Le.setAnimationLoop(A),A===null?lt.stop():lt.start()},Le.addEventListener("sessionstart",Vn),Le.addEventListener("sessionend",yr),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(W),W=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,W,N),g=O.get(A,S.length),g.init(W),S.push(g),ue.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),nt.setFromProjectionMatrix(ue,ni,W.reversedDepth),te=this.localClippingEnabled,Qe=K.init(this.clippingPlanes,te),f=P.get(A,R.length),f.init(),R.push(f),Le.enabled===!0&&Le.isPresenting===!0){let Ie=v.xr.getDepthSensingMesh();Ie!==null&&vn(Ie,W,-1/0,v.sortObjects)}vn(A,W,0,v.sortObjects),f.finish(),v.sortObjects===!0&&f.sort(ce,xe),Ce=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Ce&&we.addToRenderList(f,A),this.info.render.frame++,Qe===!0&&K.beginShadows();let se=g.state.shadowsArray;ae.render(se,A,W),Qe===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();let re=f.opaque,J=f.transmissive;if(g.setupLights(),W.isArrayCamera){let Ie=W.cameras;if(J.length>0)for(let We=0,Ye=Ie.length;We<Ye;We++){let qe=Ie[We];he(re,J,A,qe)}Ce&&we.render(A);for(let We=0,Ye=Ie.length;We<Ye;We++){let qe=Ie[We];bt(f,A,qe,qe.viewport)}}else J.length>0&&he(re,J,A,W),Ce&&we.render(A),bt(f,A,W);N!==null&&U===0&&(be.updateMultisampleRenderTarget(N),be.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(v,A,W),Re.resetDefaultState(),T=-1,b=null,S.pop(),S.length>0?(g=S[S.length-1],Qe===!0&&K.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,R.pop(),R.length>0?f=R[R.length-1]:f=null};function vn(A,W,se,re){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||nt.intersectsSprite(A)){re&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);let We=Y.update(A),Ye=A.material;Ye.visible&&f.push(A,We,Ye,se,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||nt.intersectsObject(A))){let We=Y.update(A),Ye=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Ze.copy(We.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(Ye)){let qe=We.groups;for(let et=0,rt=qe.length;et<rt;et++){let it=qe[et],Et=Ye[it.materialIndex];Et&&Et.visible&&f.push(A,We,Et,se,Ze.z,it)}}else Ye.visible&&f.push(A,We,Ye,se,Ze.z,null)}}let Ie=A.children;for(let We=0,Ye=Ie.length;We<Ye;We++)vn(Ie[We],W,se,re)}function bt(A,W,se,re){let J=A.opaque,Ie=A.transmissive,We=A.transparent;g.setupLightsView(se),Qe===!0&&K.setGlobalState(v.clippingPlanes,se),re&&ge.viewport(F.copy(re)),J.length>0&&Ut(J,W,se),Ie.length>0&&Ut(Ie,W,se),We.length>0&&Ut(We,W,se),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function he(A,W,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[re.id]===void 0&&(g.state.transmissionRenderTarget[re.id]=new fi(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?dr:oi,minFilter:Ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));let Ie=g.state.transmissionRenderTarget[re.id],We=re.viewport||F;Ie.setSize(We.z*v.transmissionResolutionScale,We.w*v.transmissionResolutionScale);let Ye=v.getRenderTarget(),qe=v.getActiveCubeFace(),et=v.getActiveMipmapLevel();v.setRenderTarget(Ie),v.getClearColor(ee),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),Ce&&we.render(se);let rt=v.toneMapping;v.toneMapping=Ii;let it=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),g.setupLightsView(re),Qe===!0&&K.setGlobalState(v.clippingPlanes,re),Ut(A,se,re),be.updateMultisampleRenderTarget(Ie),be.updateRenderTargetMipmap(Ie),me.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let Pt=0,Ft=W.length;Pt<Ft;Pt++){let ht=W[Pt],$e=ht.object,tt=ht.geometry,Tt=ht.material,dt=ht.group;if(Tt.side===hn&&$e.layers.test(re.layers)){let Mn=Tt.side;Tt.side=Cn,Tt.needsUpdate=!0,wt($e,se,re,tt,Tt,dt),Tt.side=Mn,Tt.needsUpdate=!0,Et=!0}}Et===!0&&(be.updateMultisampleRenderTarget(Ie),be.updateRenderTargetMipmap(Ie))}v.setRenderTarget(Ye,qe,et),v.setClearColor(ee,B),it!==void 0&&(re.viewport=it),v.toneMapping=rt}function Ut(A,W,se){let re=W.isScene===!0?W.overrideMaterial:null;for(let J=0,Ie=A.length;J<Ie;J++){let We=A[J],Ye=We.object,qe=We.geometry,et=We.group,rt=We.material;rt.allowOverride===!0&&re!==null&&(rt=re),Ye.layers.test(se.layers)&&wt(Ye,W,se,qe,rt,et)}}function wt(A,W,se,re,J,Ie){A.onBeforeRender(v,W,se,re,J,Ie),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(v,W,se,re,A,Ie),J.transparent===!0&&J.side===hn&&J.forceSinglePass===!1?(J.side=Cn,J.needsUpdate=!0,v.renderBufferDirect(se,W,re,J,A,Ie),J.side=wi,J.needsUpdate=!0,v.renderBufferDirect(se,W,re,J,A,Ie),J.side=hn):v.renderBufferDirect(se,W,re,J,A,Ie),A.onAfterRender(v,W,se,re,J,Ie)}function yt(A,W,se){W.isScene!==!0&&(W=ke);let re=pe.get(A),J=g.state.lights,Ie=g.state.shadowsArray,We=J.state.version,Ye=ne.getParameters(A,J.state,Ie,W,se),qe=ne.getProgramCacheKey(Ye),et=re.programs;re.environment=A.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(A.isMeshStandardMaterial?ze:je).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",Ee),et=new Map,re.programs=et);let rt=et.get(qe);if(rt!==void 0){if(re.currentProgram===rt&&re.lightsStateVersion===We)return Ts(A,Ye),rt}else Ye.uniforms=ne.getUniforms(A),A.onBeforeCompile(Ye,v),rt=ne.acquireProgram(Ye,qe),et.set(qe,rt),re.uniforms=Ye.uniforms;let it=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(it.clippingPlanes=K.uniform),Ts(A,Ye),re.needsLights=Mr(A),re.lightsStateVersion=We,re.needsLights&&(it.ambientLightColor.value=J.state.ambient,it.lightProbe.value=J.state.probe,it.directionalLights.value=J.state.directional,it.directionalLightShadows.value=J.state.directionalShadow,it.spotLights.value=J.state.spot,it.spotLightShadows.value=J.state.spotShadow,it.rectAreaLights.value=J.state.rectArea,it.ltc_1.value=J.state.rectAreaLTC1,it.ltc_2.value=J.state.rectAreaLTC2,it.pointLights.value=J.state.point,it.pointLightShadows.value=J.state.pointShadow,it.hemisphereLights.value=J.state.hemi,it.directionalShadowMap.value=J.state.directionalShadowMap,it.directionalShadowMatrix.value=J.state.directionalShadowMatrix,it.spotShadowMap.value=J.state.spotShadowMap,it.spotLightMatrix.value=J.state.spotLightMatrix,it.spotLightMap.value=J.state.spotLightMap,it.pointShadowMap.value=J.state.pointShadowMap,it.pointShadowMatrix.value=J.state.pointShadowMatrix),re.currentProgram=rt,re.uniformsList=null,rt}function Fn(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=_r.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Ts(A,W){let se=pe.get(A);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function vr(A,W,se,re,J){W.isScene!==!0&&(W=ke),be.resetTextureUnits();let Ie=W.fog,We=re.isMeshStandardMaterial?W.environment:null,Ye=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:cs,qe=(re.isMeshStandardMaterial?ze:je).get(re.envMap||We),et=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,rt=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),it=!!se.morphAttributes.position,Et=!!se.morphAttributes.normal,Pt=!!se.morphAttributes.color,Ft=Ii;re.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ft=v.toneMapping);let ht=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,$e=ht!==void 0?ht.length:0,tt=pe.get(re),Tt=g.state.lights;if(Qe===!0&&(te===!0||A!==b)){let rn=A===b&&re.id===T;K.setState(re,A,rn)}let dt=!1;re.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Tt.state.version||tt.outputColorSpace!==Ye||J.isBatchedMesh&&tt.batching===!1||!J.isBatchedMesh&&tt.batching===!0||J.isBatchedMesh&&tt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&tt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&tt.instancing===!1||!J.isInstancedMesh&&tt.instancing===!0||J.isSkinnedMesh&&tt.skinning===!1||!J.isSkinnedMesh&&tt.skinning===!0||J.isInstancedMesh&&tt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&tt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&tt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&tt.instancingMorph===!1&&J.morphTexture!==null||tt.envMap!==qe||re.fog===!0&&tt.fog!==Ie||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==K.numPlanes||tt.numIntersection!==K.numIntersection)||tt.vertexAlphas!==et||tt.vertexTangents!==rt||tt.morphTargets!==it||tt.morphNormals!==Et||tt.morphColors!==Pt||tt.toneMapping!==Ft||tt.morphTargetsCount!==$e)&&(dt=!0):(dt=!0,tt.__version=re.version);let Mn=tt.currentProgram;dt===!0&&(Mn=yt(re,W,J));let Kn=!1,Qt=!1,Li=!1,Ht=Mn.getUniforms(),En=tt.uniforms;if(ge.useProgram(Mn.program)&&(Kn=!0,Qt=!0,Li=!0),re.id!==T&&(T=re.id,Qt=!0),Kn||b!==A){ge.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ht.setValue(L,"projectionMatrix",A.projectionMatrix),Ht.setValue(L,"viewMatrix",A.matrixWorldInverse);let un=Ht.map.cameraPosition;un!==void 0&&un.setValue(L,Ne.setFromMatrixPosition(A.matrixWorld)),le.logarithmicDepthBuffer&&Ht.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ht.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Qt=!0,Li=!0)}if(J.isSkinnedMesh){Ht.setOptional(L,J,"bindMatrix"),Ht.setOptional(L,J,"bindMatrixInverse");let rn=J.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ht.setValue(L,"boneTexture",rn.boneTexture,be))}J.isBatchedMesh&&(Ht.setOptional(L,J,"batchingTexture"),Ht.setValue(L,"batchingTexture",J._matricesTexture,be),Ht.setOptional(L,J,"batchingIdTexture"),Ht.setValue(L,"batchingIdTexture",J._indirectTexture,be),Ht.setOptional(L,J,"batchingColorTexture"),J._colorsTexture!==null&&Ht.setValue(L,"batchingColorTexture",J._colorsTexture,be));let Sn=se.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&ve.update(J,se,Mn),(Qt||tt.receiveShadow!==J.receiveShadow)&&(tt.receiveShadow=J.receiveShadow,Ht.setValue(L,"receiveShadow",J.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(En.envMap.value=qe,En.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(En.envMapIntensity.value=W.environmentIntensity),Qt&&(Ht.setValue(L,"toneMappingExposure",v.toneMappingExposure),tt.needsLights&&Zn(En,Li),Ie&&re.fog===!0&&_e.refreshFogUniforms(En,Ie),_e.refreshMaterialUniforms(En,re,z,X,g.state.transmissionRenderTarget[A.id]),_r.upload(L,Fn(tt),En,be)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(_r.upload(L,Fn(tt),En,be),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ht.setValue(L,"center",J.center),Ht.setValue(L,"modelViewMatrix",J.modelViewMatrix),Ht.setValue(L,"normalMatrix",J.normalMatrix),Ht.setValue(L,"modelMatrix",J.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){let rn=re.uniformsGroups;for(let un=0,Rs=rn.length;un<Rs;un++){let li=rn[un];at.update(li,Mn),at.bind(li,Mn)}}return Mn}function Zn(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Mr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,W,se){let re=pe.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),pe.get(A.texture).__webglTexture=W,pe.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:se,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){let se=pe.get(A);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0};let Er=L.createFramebuffer();this.setRenderTarget=function(A,W=0,se=0){N=A,C=W,U=se;let re=!0,J=null,Ie=!1,We=!1;if(A){let qe=pe.get(A);if(qe.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(L.FRAMEBUFFER,null),re=!1;else if(qe.__webglFramebuffer===void 0)be.setupRenderTarget(A);else if(qe.__hasExternalTextures)be.rebindTextures(A,pe.get(A.texture).__webglTexture,pe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let it=A.depthTexture;if(qe.__boundDepthTexture!==it){if(it!==null&&pe.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(A)}}let et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(We=!0);let rt=pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[W])?J=rt[W][se]:J=rt[W],Ie=!0):A.samples>0&&be.useMultisampledRTT(A)===!1?J=pe.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?J=rt[se]:J=rt,F.copy(A.viewport),Z.copy(A.scissor),$=A.scissorTest}else F.copy(oe).multiplyScalar(z).floor(),Z.copy(Te).multiplyScalar(z).floor(),$=Ve;if(se!==0&&(J=Er),ge.bindFramebuffer(L.FRAMEBUFFER,J)&&re&&ge.drawBuffers(A,J),ge.viewport(F),ge.scissor(Z),ge.setScissorTest($),Ie){let qe=pe.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,qe.__webglTexture,se)}else if(We){let qe=W;for(let et=0;et<A.textures.length;et++){let rt=pe.get(A.textures[et]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+et,rt.__webglTexture,se,qe)}}else if(A!==null&&se!==0){let qe=pe.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qe.__webglTexture,se)}T=-1},this.readRenderTargetPixels=function(A,W,se,re,J,Ie,We,Ye=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(qe=qe[We]),qe){ge.bindFramebuffer(L.FRAMEBUFFER,qe);try{let et=A.textures[Ye],rt=et.format,it=et.type;if(!le.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-re&&se>=0&&se<=A.height-J&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ye),L.readPixels(W,se,re,J,Oe.convert(rt),Oe.convert(it),Ie))}finally{let et=N!==null?pe.get(N).__webglFramebuffer:null;ge.bindFramebuffer(L.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,W,se,re,J,Ie,We,Ye=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(qe=qe[We]),qe)if(W>=0&&W<=A.width-re&&se>=0&&se<=A.height-J){ge.bindFramebuffer(L.FRAMEBUFFER,qe);let et=A.textures[Ye],rt=et.format,it=et.type;if(!le.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.bufferData(L.PIXEL_PACK_BUFFER,Ie.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ye),L.readPixels(W,se,re,J,Oe.convert(rt),Oe.convert(it),0);let Pt=N!==null?pe.get(N).__webglFramebuffer:null;ge.bindFramebuffer(L.FRAMEBUFFER,Pt);let Ft=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Sd(L,Ft,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ie),L.deleteBuffer(Et),L.deleteSync(Ft),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,se=0){let re=Math.pow(2,-se),J=Math.floor(A.image.width*re),Ie=Math.floor(A.image.height*re),We=W!==null?W.x:0,Ye=W!==null?W.y:0;be.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,se,0,0,We,Ye,J,Ie),ge.unbindTexture()};let Co=L.createFramebuffer(),As=L.createFramebuffer();this.copyTextureToTexture=function(A,W,se=null,re=null,J=0,Ie=null){Ie===null&&(J!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=J,J=0):Ie=0);let We,Ye,qe,et,rt,it,Et,Pt,Ft,ht=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(se!==null)We=se.max.x-se.min.x,Ye=se.max.y-se.min.y,qe=se.isBox3?se.max.z-se.min.z:1,et=se.min.x,rt=se.min.y,it=se.isBox3?se.min.z:0;else{let Sn=Math.pow(2,-J);We=Math.floor(ht.width*Sn),Ye=Math.floor(ht.height*Sn),A.isDataArrayTexture?qe=ht.depth:A.isData3DTexture?qe=Math.floor(ht.depth*Sn):qe=1,et=0,rt=0,it=0}re!==null?(Et=re.x,Pt=re.y,Ft=re.z):(Et=0,Pt=0,Ft=0);let $e=Oe.convert(W.format),tt=Oe.convert(W.type),Tt;W.isData3DTexture?(be.setTexture3D(W,0),Tt=L.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(be.setTexture2DArray(W,0),Tt=L.TEXTURE_2D_ARRAY):(be.setTexture2D(W,0),Tt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);let dt=L.getParameter(L.UNPACK_ROW_LENGTH),Mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Kn=L.getParameter(L.UNPACK_SKIP_PIXELS),Qt=L.getParameter(L.UNPACK_SKIP_ROWS),Li=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,et),L.pixelStorei(L.UNPACK_SKIP_ROWS,rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,it);let Ht=A.isDataArrayTexture||A.isData3DTexture,En=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){let Sn=pe.get(A),rn=pe.get(W),un=pe.get(Sn.__renderTarget),Rs=pe.get(rn.__renderTarget);ge.bindFramebuffer(L.READ_FRAMEBUFFER,un.__webglFramebuffer),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let li=0;li<qe;li++)Ht&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(A).__webglTexture,J,it+li),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(W).__webglTexture,Ie,Ft+li)),L.blitFramebuffer(et,rt,We,Ye,Et,Pt,We,Ye,L.DEPTH_BUFFER_BIT,L.NEAREST);ge.bindFramebuffer(L.READ_FRAMEBUFFER,null),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||pe.has(A)){let Sn=pe.get(A),rn=pe.get(W);ge.bindFramebuffer(L.READ_FRAMEBUFFER,Co),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,As);for(let un=0;un<qe;un++)Ht?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Sn.__webglTexture,J,it+un):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Sn.__webglTexture,J),En?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rn.__webglTexture,Ie,Ft+un):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,rn.__webglTexture,Ie),J!==0?L.blitFramebuffer(et,rt,We,Ye,Et,Pt,We,Ye,L.COLOR_BUFFER_BIT,L.NEAREST):En?L.copyTexSubImage3D(Tt,Ie,Et,Pt,Ft+un,et,rt,We,Ye):L.copyTexSubImage2D(Tt,Ie,Et,Pt,et,rt,We,Ye);ge.bindFramebuffer(L.READ_FRAMEBUFFER,null),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else En?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Tt,Ie,Et,Pt,Ft,We,Ye,qe,$e,tt,ht.data):W.isCompressedArrayTexture?L.compressedTexSubImage3D(Tt,Ie,Et,Pt,Ft,We,Ye,qe,$e,ht.data):L.texSubImage3D(Tt,Ie,Et,Pt,Ft,We,Ye,qe,$e,tt,ht):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ie,Et,Pt,We,Ye,$e,tt,ht.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ie,Et,Pt,ht.width,ht.height,$e,ht.data):L.texSubImage2D(L.TEXTURE_2D,Ie,Et,Pt,We,Ye,$e,tt,ht);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Kn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Li),Ie===0&&W.generateMipmaps&&L.generateMipmap(Tt),ge.unbindTexture()},this.initRenderTarget=function(A){pe.get(A).__webglFramebuffer===void 0&&be.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?be.setTextureCube(A,0):A.isData3DTexture?be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?be.setTexture2DArray(A,0):be.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){C=0,U=0,N=null,ge.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};var af={type:"change"},wh={type:"start"},cf={type:"end"},Vl=new Wi,lf=new $t,Ax=Math.cos(70*Nn.DEG2RAD),sn=new w,Un=2*Math.PI,zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6,Gl=class extends gs{constructor(e,t=null){super(e,t),this.state=zt.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rn.ROTATE,MIDDLE:Rn.DOLLY,RIGHT:Rn.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new Dt,this._lastTargetPosition=new w,this._quat=new Dt().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hr,this._sphericalDelta=new hr,this._scale=1,this._panOffset=new w,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new w,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Cx.bind(this),this._onPointerDown=Rx.bind(this),this._onPointerUp=Px.bind(this),this._onContextMenu=Ox.bind(this),this._onMouseWheel=Lx.bind(this),this._onKeyDown=Nx.bind(this),this._onTouchStart=Ux.bind(this),this._onTouchMove=Fx.bind(this),this._onMouseDown=Ix.bind(this),this._onMouseMove=Dx.bind(this),this._interceptControlDown=Bx.bind(this),this._interceptControlUp=zx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(af),this.update(),this.state=zt.NONE}update(e=null){let t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Un:n>Math.PI&&(n-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=sn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new w(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new w(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vl.origin.copy(this.object.position),Vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vl.direction))<Ax?this.object.lookAt(this.target):(lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vl.intersectPlane(lf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(af),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;sn.copy(s).sub(this.target);let r=sn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Rx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Cx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Px(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cf),this.state=zt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ix(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Rn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=zt.DOLLY;break;case Rn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=zt.ROTATE}break;case Rn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=zt.PAN}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(wh)}function Dx(i){switch(this.state){case zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Lx(i){this.enabled===!1||this.enableZoom===!1||this.state!==zt.NONE||(i.preventDefault(),this.dispatchEvent(wh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(cf))}function Nx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Ux(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=zt.TOUCH_ROTATE;break;case ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=zt.TOUCH_PAN;break;default:this.state=zt.NONE}break;case 2:switch(this.touches.TWO){case ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=zt.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=zt.TOUCH_DOLLY_ROTATE;break;default:this.state=zt.NONE}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(wh)}function Fx(i){switch(this._trackPointer(i),this.state){case zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=zt.NONE}}function Ox(i){this.enabled!==!1&&i.preventDefault()}function Bx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var bs=new Xn,yn=new w,$i=new w,Yt=new Dt,hf={X:new w(1,0,0),Y:new w(0,1,0),Z:new w(0,0,1)},Th={type:"change"},uf={type:"mouseDown",mode:null},df={type:"mouseUp",mode:null},ff={type:"objectChange"},Zl=class extends gs{constructor(e,t=null){super(void 0,t);let n=new Rh(this);this._root=n;let s=new Ch;this._gizmo=s,n.add(s);let r=new Ph;this._plane=r,n.add(r);let o=this;function a(S,v){let D=v;Object.defineProperty(o,S,{get:function(){return D!==void 0?D:v},set:function(C){D!==C&&(D=C,r[S]=C,s[S]=C,o.dispatchEvent({type:S+"-changed",value:C}),o.dispatchEvent(Th))}}),o[S]=v,r[S]=v,s[S]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let c=new w,l=new w,d=new Dt,p=new Dt,u=new w,m=new Dt,_=new w,x=new w,f=new w,g=0,R=new w;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",d),a("worldQuaternionStart",p),a("cameraPosition",u),a("cameraQuaternion",m),a("pointStart",_),a("pointEnd",x),a("rotationAxis",f),a("rotationAngle",g),a("eye",R),this._offset=new w,this._startNorm=new w,this._endNorm=new w,this._cameraScale=new w,this._parentPosition=new w,this._parentQuaternion=new Dt,this._parentQuaternionInv=new Dt,this._parentScale=new w,this._worldScaleStart=new w,this._worldQuaternionInv=new Dt,this._worldScale=new w,this._positionStart=new w,this._quaternionStart=new Dt,this._scaleStart=new w,this._getPointer=Hx.bind(this),this._onPointerDown=Vx.bind(this),this._onPointerHover=kx.bind(this),this._onPointerMove=Gx.bind(this),this._onPointerUp=Wx.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&bs.setFromCamera(e,this.camera);let t=Ah(this._gizmo.picker[this.mode],bs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&bs.setFromCamera(e,this.camera);let t=Ah(this._plane,bs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,uf.mode=this.mode,this.dispatchEvent(uf)}}pointerMove(e){let t=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&bs.setFromCamera(e,this.camera);let o=Ah(this._plane,bs,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Yt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(yn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(yn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),$i.set(a,a,a)}else yn.copy(this.pointStart),$i.copy(this.pointEnd),yn.applyQuaternion(this._worldQuaternionInv),$i.applyQuaternion(this._worldQuaternionInv),$i.divide(yn),t.search("X")===-1&&($i.x=1),t.search("Y")===-1&&($i.y=1),t.search("Z")===-1&&($i.z=1);s.scale.copy(this._scaleStart).multiply($i),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(yn.setFromMatrixPosition(this.camera.matrixWorld)),c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(yn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(hf[t]),yn.copy(hf[t]),r==="local"&&yn.applyQuaternion(this.worldQuaternion),yn.cross(this.eye),yn.length()===0?c=!0:this.rotationAngle=this._offset.dot(yn.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Yt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Yt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Th),this.dispatchEvent(ff)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(df.mode=this.mode,this.dispatchEvent(df)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Th),this.dispatchEvent(ff),this.pointStart.copy(this.pointEnd))}getRaycaster(){return bs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function Hx(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function kx(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Vx(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Gx(i){this.enabled&&this.pointerMove(this._getPointer(i))}function Wx(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Ah(i,e,t){let n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}var Wl=new cn,Vt=new w(0,1,0),pf=new w(0,0,0),mf=new Rt,Xl=new Dt,ql=new Dt,xi=new w,gf=new Rt,To=new w(1,0,0),ws=new w(0,1,0),Ao=new w(0,0,1),Yl=new w,bo=new w,wo=new w,Rh=class extends Lt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Ch=class extends Lt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new jt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new _n({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let c=e.clone();c.color.setHex(16711680),c.opacity=.5;let l=e.clone();l.color.setHex(65280),l.opacity=.5;let d=e.clone();d.color.setHex(255),d.opacity=.5;let p=e.clone();p.opacity=.25;let u=e.clone();u.color.setHex(16776960),u.opacity=.25;let m=e.clone();m.color.setHex(16776960);let _=e.clone();_.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:m,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:d,activeTransparent:u};let x=new Kt(0,.04,.1,12);x.translate(0,.05,0);let f=new Ct(.08,.08,.08);f.translate(0,.04,0);let g=new xt;g.setAttribute("position",new mt([0,0,0,1,0,0],3));let R=new Kt(.0075,.0075,.5,3);R.translate(0,.25,0);function S(B,V){let X=new Ci(B,.0075,3,64,V*Math.PI*2);return X.rotateY(Math.PI/2),X.rotateX(Math.PI/2),X}function v(){let B=new xt;return B.setAttribute("position",new mt([0,0,0,1,1,1],3)),B}let D={X:[[new Ae(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new Ae(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new Ae(R,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Ae(x,o),[0,.5,0]],[new Ae(x,o),[0,-.5,0],[Math.PI,0,0]],[new Ae(R,o)]],Z:[[new Ae(x,a),[0,0,.5],[Math.PI/2,0,0]],[new Ae(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Ae(R,a),null,[Math.PI/2,0,0]]],XYZ:[[new Ae(new mi(.1,0),p),[0,0,0]]],XY:[[new Ae(new Ct(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new Ae(new Ct(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new Ct(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new Ae(new Kt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Ae(new Kt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ae(new Kt(.2,0,.6,4),n),[0,.3,0]],[new Ae(new Kt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ae(new Kt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Ae(new Kt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Ae(new mi(.2,0),n)]],XY:[[new Ae(new Ct(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Ae(new Ct(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new Ct(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},U={START:[[new Ae(new mi(.01,2),s),null,null,null,"helper"]],END:[[new Ae(new mi(.01,2),s),null,null,null,"helper"]],DELTA:[[new Xt(v(),s),null,null,null,"helper"]],X:[[new Xt(g,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xt(g,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xt(g,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},N={XYZE:[[new Ae(S(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new Ae(S(.5,.5),r)]],Y:[[new Ae(S(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Ae(S(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Ae(S(.75,1),u),null,[0,Math.PI/2,0]]]},T={AXIS:[[new Xt(g,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new Ae(new Hn(.25,10,8),n)]],X:[[new Ae(new Ci(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Ae(new Ci(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Ae(new Ci(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Ae(new Ci(.75,.1,2,24),n)]]},F={X:[[new Ae(f,r),[.5,0,0],[0,0,-Math.PI/2]],[new Ae(R,r),[0,0,0],[0,0,-Math.PI/2]],[new Ae(f,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Ae(f,o),[0,.5,0]],[new Ae(R,o)],[new Ae(f,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Ae(f,a),[0,0,.5],[Math.PI/2,0,0]],[new Ae(R,a),[0,0,0],[Math.PI/2,0,0]],[new Ae(f,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Ae(new Ct(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new Ae(new Ct(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new Ct(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ae(new Ct(.1,.1,.1),p)]]},Z={X:[[new Ae(new Kt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Ae(new Kt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ae(new Kt(.2,0,.6,4),n),[0,.3,0]],[new Ae(new Kt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ae(new Kt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Ae(new Kt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Ae(new Ct(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Ae(new Ct(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new Ct(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ae(new Ct(.2,.2,.2),n),[0,0,0]]]},$={X:[[new Xt(g,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xt(g,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xt(g,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function ee(B){let V=new Lt;for(let X in B)for(let z=B[X].length;z--;){let ce=B[X][z][0].clone(),xe=B[X][z][1],oe=B[X][z][2],Te=B[X][z][3],Ve=B[X][z][4];ce.name=X,ce.tag=Ve,xe&&ce.position.set(xe[0],xe[1],xe[2]),oe&&ce.rotation.set(oe[0],oe[1],oe[2]),Te&&ce.scale.set(Te[0],Te[1],Te[2]),ce.updateMatrix();let nt=ce.geometry.clone();nt.applyMatrix4(ce.matrix),ce.geometry=nt,ce.renderOrder=1/0,ce.position.set(0,0,0),ce.rotation.set(0,0,0),ce.scale.set(1,1,1),V.add(ce)}return V}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=ee(D)),this.add(this.gizmo.rotate=ee(N)),this.add(this.gizmo.scale=ee(F)),this.add(this.picker.translate=ee(C)),this.add(this.picker.rotate=ee(b)),this.add(this.picker.scale=ee(Z)),this.add(this.helper.translate=ee(U)),this.add(this.helper.rotate=ee(T)),this.add(this.helper.scale=ee($)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ql;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Yt.setFromEuler(Wl.set(0,0,0)),o.quaternion.copy(n).multiply(Yt),Math.abs(Vt.copy(To).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Yt.setFromEuler(Wl.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Yt),Math.abs(Vt.copy(ws).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Yt.setFromEuler(Wl.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Yt),Math.abs(Vt.copy(Ao).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Yt.setFromEuler(Wl.set(0,Math.PI/2,0)),Vt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(mf.lookAt(pf,Vt,ws)),o.quaternion.multiply(Yt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),yn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),yn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(yn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Vt.copy(To).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Vt.copy(ws).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Vt.copy(Ao).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Vt.copy(Ao).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Vt.copy(To).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Vt.copy(ws).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Xl.copy(n),Vt.copy(this.eye).applyQuaternion(Yt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(mf.lookAt(this.eye,pf,ws)),o.name==="X"&&(Yt.setFromAxisAngle(To,Math.atan2(-Vt.y,Vt.z)),Yt.multiplyQuaternions(Xl,Yt),o.quaternion.copy(Yt)),o.name==="Y"&&(Yt.setFromAxisAngle(ws,Math.atan2(Vt.x,Vt.z)),Yt.multiplyQuaternions(Xl,Yt),o.quaternion.copy(Yt)),o.name==="Z"&&(Yt.setFromAxisAngle(Ao,Math.atan2(Vt.y,Vt.x)),Yt.multiplyQuaternions(Xl,Yt),o.quaternion.copy(Yt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},Ph=class extends Ae{constructor(){super(new Ln(1e5,1e5,2,2),new jt({visible:!1,wireframe:!0,side:hn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Yl.copy(To).applyQuaternion(t==="local"?this.worldQuaternion:ql),bo.copy(ws).applyQuaternion(t==="local"?this.worldQuaternion:ql),wo.copy(Ao).applyQuaternion(t==="local"?this.worldQuaternion:ql),Vt.copy(bo),this.mode){case"translate":case"scale":switch(this.axis){case"X":Vt.copy(this.eye).cross(Yl),xi.copy(Yl).cross(Vt);break;case"Y":Vt.copy(this.eye).cross(bo),xi.copy(bo).cross(Vt);break;case"Z":Vt.copy(this.eye).cross(wo),xi.copy(wo).cross(Vt);break;case"XY":xi.copy(wo);break;case"YZ":xi.copy(Yl);break;case"XZ":Vt.copy(wo),xi.copy(bo);break;case"XYZ":case"E":xi.set(0,0,0);break}break;case"rotate":default:xi.set(0,0,0)}xi.length()===0?this.quaternion.copy(this.cameraQuaternion):(gf.lookAt(yn.set(0,0,0),xi,Vt),this.quaternion.setFromRotationMatrix(gf)),super.updateMatrixWorld(e)}};function _f({scene:i,camera:e,canvas:t}){let n=new ln;n.userData.primitiveBounds=!0,n.visible=!1,i.add(n);let s=new Ct(1,1,1),r=new eo(s);s.dispose();let o=new _n({color:7977215,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),a=new Ai(r,o);a.renderOrder=30,n.add(a);let c=new Ln(1,1),l=new jt({color:14150399,depthTest:!1,depthWrite:!1,side:hn}),d=[];for(let B of["x","y","z"])for(let V of[-1,1]){let X=new Ae(c,l);X.userData.boundsHandle={axis:B,sign:V},X.renderOrder=32,n.add(X),d.push(X)}let p=new xt;p.setAttribute("position",new en(new Float32Array(36),3));let u=new Ai(p,o);u.renderOrder=30,u.frustumCulled=!1,n.add(u);let m=new xt;m.setAttribute("position",new en(new Float32Array(54),3));let _=new Ai(m,o);_.renderOrder=30,n.add(_),_.frustumCulled=!1;let x=["W","D","H"].map(B=>{let V=document.createElement("div");return V.dataset.primitiveDimension=B,V.style.cssText="position:absolute;pointer-events:none;display:none;z-index:24;padding:4px 7px;border:1px solid #79b8ff66;border-radius:4px;background:#172b37ed;color:#d7eaff;font:13px system-ui;white-space:nowrap;",t.parentElement?.append(V),V}),f=null,g=null,R=new Xn,S=new w,v=new w,D=()=>t.getBoundingClientRect();function C(B,V){return v.copy(B).applyMatrix4(e.matrixWorldInverse),S.copy(B).project(e),{x:V.left+(S.x+1)*V.width/2,y:V.top+(1-S.y)*V.height/2,depth:v.z,visible:v.z<0&&S.z>=-1&&S.z<=1}}function U(B,V){let X=B.clone().applyMatrix4(e.matrixWorldInverse);return Math.max(1e-6,2*Math.abs(X.z)*Math.tan(e.fov*Math.PI/360)/Math.max(1,V.height))}function N(B){let V=D();R.setFromCamera(new Se((B.clientX-V.left)/Math.max(1,V.width)*2-1,1-(B.clientY-V.top)/Math.max(1,V.height)*2),e)}function T(B,V,{handles:X=!0}={}){f=B,n.visible=!!(V&&B);for(let pe of x)pe.style.display="none";if(!n.visible)return;e.updateMatrixWorld(!0),B.updateWorldMatrix(!0,!1);let z=D(),ce=B.getWorldPosition(new w),xe=B.getWorldQuaternion(new Dt),oe=U(ce,z);a.position.copy(ce),a.quaternion.copy(xe),a.scale.copy(B.scale);let Te=C(ce,z),Ve=[],nt=p.attributes.position,Qe=0,te=!1;for(let pe of d){let{axis:be,sign:je}=pe.userData.boundsHandle,ze=new w,I=new w;ze[be]=je*.5,I[be]=1,I.applyQuaternion(xe),B.localToWorld(ze),pe.userData.facePosition=ze.clone();let y=C(ze,z),Y=e.position.clone().sub(ze).normalize();if(pe.visible=X&&y.visible&&Math.abs(Y.dot(I))<.98,pe.visible){let _e=y.x-Te.x,P=y.y-Te.y,O=Math.hypot(_e,P),K=O>1e-6?_e/O:1,ae=O>1e-6?P/O:0,we=Math.max(24,O),ve=Te.x+K*we,Me=Te.y+ae*we;for(;Ve.some(De=>Math.hypot(De.x-ve,De.y-Me)<20)&&we<Math.max(24,O)+80;)we+=12,ve=Te.x+K*we,Me=Te.y+ae*we;if(Ve.push({x:ve,y:Me}),Math.hypot(ve-y.x,Me-y.y)>.5){te=!0;let De=ze.clone().project(e);ze.set((ve-z.left)/z.width*2-1,1-(Me-z.top)/z.height*2,De.z).unproject(e)}}pe.position.copy(ze),pe.quaternion.copy(e.quaternion),pe.scale.setScalar(U(ze,z)*(pe===g?11:9)),pe.userData.screen=C(ze,z);let ne=pe.visible?pe.userData.facePosition:ze;nt.setXYZ(Qe++,ne.x,ne.y,ne.z),nt.setXYZ(Qe++,ze.x,ze.y,ze.z)}nt.needsUpdate=!0;let ue=B.worldToLocal(e.position.clone()),Ne=ue.x>=0?1:-1,Ze=ue.z>=0?1:-1,ke=oe*(te?55:27),Ce=Ne*(.5+ke/B.scale.x),gt=Ze*(.5+ke/B.scale.z),L=-.5-ke/B.scale.y,fe=[{a:[-.5,L,gt],b:[.5,L,gt],tick:[0,1,0],size:B.scale.x},{a:[Ce,L,-.5],b:[Ce,L,.5],tick:[0,1,0],size:B.scale.z},{a:[Ce,-.5,gt],b:[Ce,.5,gt],tick:[1,0,0],size:B.scale.y}],me=m.attributes.position,le=0,ge=pe=>me.setXYZ(le++,pe.x,pe.y,pe.z),Ue=[];fe.forEach((pe,be)=>{let je=B.localToWorld(new w(...pe.a)),ze=B.localToWorld(new w(...pe.b)),I=new w(...pe.tick).applyQuaternion(xe).multiplyScalar(oe*4);ge(je),ge(ze);for(let O of[je,ze])ge(O.clone().sub(I)),ge(O.clone().add(I));let y=C(je.clone().add(ze).multiplyScalar(.5),z),Y=x[be];if(Y.textContent=x[be].dataset.primitiveDimension+" "+pe.size.toFixed(2)+" m",!y.visible||y.x<z.left||y.y<z.top||y.x>z.left+z.width||y.y>z.top+z.height)return;let ne=Math.max(5,Math.min(z.width-88,y.x-z.left-40)),_e=Math.max(5,Math.min(z.height-31,y.y-z.top-12)),P=_e;for(let O of[0,30,-30,60,-60,90,-90]){let K=Math.max(5,Math.min(z.height-31,_e+O));if(!Ue.some(ae=>Math.abs(ae.left-ne)<87&&Math.abs(ae.top-K)<28)){P=K;break}}Ue.push({left:ne,top:P}),Object.assign(Y.style,{display:"block",left:ne+"px",top:P+"px"})}),me.needsUpdate=!0,n.updateMatrixWorld(!0)}function b(B){if(!n.visible||!f)return null;T(f,!0);let V=B.pointerType==="touch"?18:10;return d.filter(z=>z.visible).map(z=>({handle:z,p:z.userData.screen,d:Math.hypot(B.clientX-z.userData.screen.x,B.clientY-z.userData.screen.y)})).filter(z=>z.d<=V).sort((z,ce)=>Math.abs(z.d-ce.d)<2?ce.p.depth-z.p.depth:z.d-ce.d)[0]?.handle||null}function F(B){g=B}function Z(B,V,X){let{axis:z,sign:ce}=V.userData.boundsHandle,xe=new w;xe[z]=1,xe.applyQuaternion(X.getWorldQuaternion(new Dt)).normalize();let oe=V.userData.facePosition.clone(),Te=e.position.clone().sub(oe).normalize();if(Math.abs(Te.dot(xe))>=.98)return null;let Ve=Te.addScaledVector(xe,-Te.dot(xe)).normalize(),nt=new $t().setFromNormalAndCoplanarPoint(Ve,oe);N(B);let Qe=R.ray.intersectPlane(nt,new w);return Qe?{axis:z,sign:ce,direction:xe,plane:nt,start:Qe,position:X.position.clone(),scale:X.scale.clone()}:null}function $(B,V,X,z){N(V);let ce=R.ray.intersectPlane(B.plane,new w);if(!ce)return;let xe=B.scale[B.axis]+ce.sub(B.start).dot(B.direction)*B.sign;z&&(xe=Math.round(xe/z)*z),xe=Math.max(B.original.wall?.25:.02,Math.min(B.original.wall&&B.axis==="z"?1:150,xe)),X.scale.copy(B.scale),X.scale[B.axis]=xe,X.position.copy(B.position).addScaledVector(B.direction,(xe-B.scale[B.axis])*B.sign/2),X.updateMatrixWorld(!0),T(X,!0)}function ee(){n.removeFromParent(),r.dispose(),c.dispose(),l.dispose(),p.dispose(),m.dispose(),o.dispose();for(let B of x)B.remove()}return{update:T,hit:b,hover:F,begin:Z,resize:$,dispose:ee}}function xf(i,e){let t=new Lt;t.userData.primitiveGroup=!0,i.add(t);let n=[],s=0;function r(u){n=u.slice();let m=new fn;s=0;for(let _ of n)_.updateMatrix(),m.union(new fn(new w(-.5,-.5,-.5),new w(.5,.5,.5)).applyMatrix4(_.matrix)),s+=e.get(_.userData.level)?.position.y||0;s/=Math.max(1,n.length),n.length&&(m.getCenter(t.position),t.position.y+=s,m.getSize(t.scale),t.scale.max(new w(.02,.02,.02)),t.quaternion.identity(),t.updateMatrixWorld(!0))}function o(){let u=n.reduce((m,_)=>m+(e.get(_.userData.level)?.position.y||0),0)/Math.max(1,n.length);t.position.y+=u-s,s=u,t.updateMatrixWorld(!0)}function a(){return{group:!0,position:t.position.clone(),scale:t.scale.clone(),quaternion:t.quaternion.clone(),pivot:t.position.clone().add(new w(0,-s,0)),members:n.map(u=>({root:u,original:JSON.parse(JSON.stringify(u.userData.record)),position:u.position.clone(),scale:u.scale.clone(),quaternion:u.quaternion.clone()}))}}let c=(u,m)=>m?c(m,u%m):u;function l(u,m,_){let x=0,f=1/0,g=0;for(let v of u.members)for(let D of["x","y","z"])x=Math.max(x,(v.original.wall?.25:.02)/v.scale[D]),f=Math.min(f,(v.original.wall&&D==="z"?1:150)/v.scale[D]),v.original.wall&&(g=c(g,Math.round(v.scale[D]*4)));let R=g?1/g:_/Math.max(u.scale.x,u.scale.y,u.scale.z),S=Number.isFinite(m)?m:1;if(R){let v=g?0:1;S=v+Math.round((S-v)/R)*R,x=v+Math.ceil((x-v-1e-9)/R)*R,f=v+Math.floor((f-v+1e-9)/R)*R}return Math.max(x,Math.min(f,S))}function d(u,m,_){if(m==="translate"){let x=t.position.clone().sub(u.position);if(_)for(let f of["x","y","z"])x[f]=Math.round(x[f]/_)*_;t.position.copy(u.position).add(x);for(let f of u.members)f.root.position.copy(f.position).add(x),f.root.quaternion.copy(f.quaternion),f.root.scale.copy(f.scale)}else if(m==="rotate"){let x=t.quaternion.clone().multiply(u.quaternion.clone().invert());for(let f of u.members)f.root.position.copy(f.position).sub(u.pivot).applyQuaternion(x).add(u.pivot),f.root.quaternion.copy(x).multiply(f.quaternion),f.root.scale.copy(f.scale)}else if(m==="scale"){let x=l(u,t.scale.x/u.scale.x,_);t.scale.copy(u.scale).multiplyScalar(x);for(let f of u.members)f.root.position.copy(f.position).sub(u.pivot).multiplyScalar(x).add(u.pivot),f.root.scale.copy(f.scale).multiplyScalar(x),f.root.quaternion.copy(f.quaternion)}for(let x of u.members)x.root.updateMatrixWorld(!0);t.updateMatrixWorld(!0)}function p(u){for(let m of u.members)m.root.position.copy(m.position),m.root.scale.copy(m.scale),m.root.quaternion.copy(m.quaternion),m.root.updateMatrixWorld(!0);t.position.copy(u.position),t.scale.copy(u.scale),t.quaternion.copy(u.quaternion),t.updateMatrixWorld(!0)}return{target:t,select:r,syncDisplay:o,begin:a,preview:d,restore:p,dispose(){t.removeFromParent()}}}function yf({scene:i,camera:e,renderer:t,controls:n,groups:s,data:r,prismGeometry:o,surfaceHit:a,enabled:c,canNavigate:l=()=>!0,onSelect:d,onEdit:p,onEditMany:u}){let m=t.domElement,_=[],x=new Map,f=new Xn,g=new Se,R={cube:new Ct(1,1,1),cylinder:new Kt(.5,.5,1,32),sphere:new Hn(.5,32,16),hemisphere:new Hn(.5,32,16,0,Math.PI*2,0,Math.PI/2)};R.hemisphere.scale(1,2,1),R.hemisphere.translate(0,-.5,0);let S=new Qr(.5,32);S.rotateX(Math.PI/2),S.translate(0,-.5,0);let v=[],D=[];for(let P of r.levels)for(let O of P.primitives||[]){let K=new ln,ae=new fs({color:O.color||"#d6a46b",roughness:.8,side:hn});v.push(ae);let we=JSON.parse(JSON.stringify(O)),ve=P.rampWallCuts?.[O.id];if(K.userData={primitive:O.id,level:P.id,record:we,floorZ:P.z},Ve(K,O),Array.isArray(ve)&&o){let Me=K.matrixWorld.clone().invert();for(let De of ve){let Oe=o(De);Oe.translate(0,De.z,0),Oe.applyMatrix4(Me),D.push(Oe),K.add(new Ae(Oe,ae))}}else{let Me=R[O.primitive];if(O.primitive==="cube"&&O.taper){Me=Me.clone();let De=Me.attributes.position,Oe=O.taper;for(let Re=0;Re<De.count;Re++){let at=De.getY(Re)>0;De.setX(Re,De.getX(Re)*(at?Oe.topX:Oe.bottomX)),De.setZ(Re,De.getZ(Re)*(at?Oe.topY:Oe.bottomY))}De.needsUpdate=!0,Me.computeVertexNormals(),Me.computeBoundingBox(),Me.computeBoundingSphere(),D.push(Me)}K.add(new Ae(Me,ae)),O.primitive==="hemisphere"&&K.add(new Ae(S,ae))}s.get(P.id).add(K),_.push(K),x.set(P.id+"\0"+O.id,K)}let C=new Zl(e,m);C.disconnect(),m.style.touchAction="none",C.setSize(.8),C.setSpace("world");let U=C.getHelper();i.add(U);let N=_f({scene:i,camera:e,canvas:m}),T=xf(i,s),b=["gizmo","picker","helper"].map(P=>({parent:C._gizmo[P].scale,children:C._gizmo[P].scale.children.slice()})),F=!1;function Z(P){if(F!==P){F=P;for(let O of b){for(let K of O.children)O.parent.remove(K);for(let K of O.children)(!P||K.name==="XYZ")&&O.parent.add(K)}}}let $=[],ee=new Set,B=()=>$.length>1,V=null,X=null,z=null,ce=!1,xe=null,oe=window.KERN_DRAG_AXES?.register(()=>X&&!X.bounds&&C.mode==="translate"?X:null,()=>y(),P=>({space:"3d",origin:P.feedbackOrigin,supported:P.feedbackAxes})),Te=C._plane.updateMatrixWorld;C._plane.updateMatrixWorld=function(P){X?.translationPlane&&C.mode==="translate"?(this.position.copy(X.translationPlane.position),this.quaternion.copy(X.translationPlane.quaternion),Lt.prototype.updateMatrixWorld.call(this,P)):Te.call(this,P)};function Ve(P,O){P.position.set(O.x+O.w/2,P.userData.floorZ+O.z+O.height/2,O.y+O.h/2),P.scale.set(O.w,O.height,O.h),P.rotation.set(O.tiltX*Math.PI/180,-O.rotation*Math.PI/180,O.tiltY*Math.PI/180,"XYZ"),P.updateMatrixWorld(!0)}let nt=P=>s.get(P.userData.level)?.visible&&window.KERN_LAYERS?.shown?.("primitives",P.userData.primitive,P.userData.level)!==!1,Qe=P=>nt(P)&&window.KERN_LAYERS?.available?.("primitives",P.userData.primitive,P.userData.level)!==!1;function te(){if(!V||!c()||!$.length||$.some(O=>!Qe(O)))return!1;let P=window.KERN_LAYERS?.references?.();return!P||P.length===$.length&&P.every(O=>O.kind==="primitives"&&ee.has(O.floor+"\0"+O.id))}function ue(){B()&&!X&&T.syncDisplay(),N.update(V,te(),{handles:!B()})}function Ne(){if(ce)return;for(let O of _)O.visible=window.KERN_LAYERS?.shown?.("primitives",O.userData.primitive,O.userData.level)!==!1;let P=te();C.enabled=P,U.visible=P,!P&&X&&y(),ue()}function Ze(P){y();let O=(P||[]).filter(K=>K.kind==="primitives").map(K=>x.get(K.floor+"\0"+K.id)).filter(Boolean);$=O.length===P.length?O:[],ee=new Set($.map(K=>K.userData.level+"\0"+K.userData.primitive)),B()&&T.select($),V=B()?T.target:$[0]||null,V?C.attach(V):C.detach(),C.setMode(window.KERN_PRIMITIVE_UI?.mode()||"translate"),C.setSpace(C.mode==="scale"?"local":"world"),Ce(),Ne()}function ke(){let P=Number(window.snapSize?.());return Number.isFinite(P)&&P>0?P:null}function Ce(P={}){let O=$.some(K=>K.userData.record.wall===!0);C.setTranslationSnap(!B()&&O?.25:null),C.setScaleSnap(B()?null:O?.25:P.ctrlKey?null:ke()),C.setRotationSnap(P.shiftKey&&!P.ctrlKey?Math.PI/36:O?Math.PI/180:null),C.showX=C.showZ=!(O&&C.mode==="rotate"),C.showY=!0,Z(B()&&C.mode==="scale")}function gt(P,O){xe&&(xe.removeFromParent(),xe.geometry.dispose(),xe.material.dispose(),xe=null),!(!P||!s.has(O))&&(xe=new Ae(new Ct(1,1,1),new jt({color:"#72d8b0",transparent:!0,opacity:.4,depthWrite:!1})),xe.userData.floorZ=r.levels.find(K=>K.id===O).z,Ve(xe,P),s.get(O).add(xe))}function L(P){let O=m.getBoundingClientRect();return{x:(P.clientX-O.left)/Math.max(1,O.width)*2-1,y:-(P.clientY-O.top)/Math.max(1,O.height)*2+1,button:P.button??0}}function fe(P){let O=L(P);return g.set(O.x,O.y),i.updateMatrixWorld(!0),e.updateMatrixWorld(!0),f.setFromCamera(g,e),f.intersectObjects(_.filter(nt),!0).map(K=>{let ae=K.object;for(;ae&&!ae.userData.primitive;)ae=ae.parent;return{...K,root:ae}}).filter(K=>K.root)}function me(P){let O=fe(P)[0];if(!O)return null;let K=a(P);return K&&K.point.distanceTo(e.position)+.002<O.distance?null:O}function le(P){P.preventDefault(),P.stopImmediatePropagation()}function ge(P){if(ce)return!1;if(X||z)return le(P),!0;if(!c()||P.altKey||P.button!==0)return!1;if(Ne(),V&&C.enabled&&!B()&&!P.shiftKey){let K=N.hit(P),ae=K&&N.begin(P,K,V);if(ae)return X={...ae,bounds:!0,id:P.pointerId,root:V,original:JSON.parse(JSON.stringify(V.userData.record))},C.axis=null,n.enabled=!1,N.hover(K),m.setPointerCapture?.(P.pointerId),le(P),!0}if(V&&C.enabled&&(!P.shiftKey||C.mode==="rotate")&&(Ce(P),i.updateMatrixWorld(!0),C.pointerHover(L(P)),C.axis)){let K=B()?window.KERN_PRIMITIVE_UI?.transformScope?.():null;if(B()&&!K)return le(P),!0;let ae=B()?null:JSON.parse(JSON.stringify(V.userData.record)),we=B()?T.begin():null;if(C.pointerDown(L(P)),C.dragging)return X=we?{...we,scope:K,id:P.pointerId,mode:C.mode,clientX:P.clientX,clientY:P.clientY}:{id:P.pointerId,root:V,original:ae,position:V.position.clone()},C.mode==="translate"&&(X.feedbackOrigin=V.getWorldPosition(new w),X.feedbackAxes=["x","y","z"].filter(ve=>C.axis?.toLowerCase().includes(ve)),X.translationPlane={position:C._plane.position.clone(),quaternion:C._plane.quaternion.clone()},window.KERN_DRAG_AXES?.begin(X,V.position)),n.enabled=!1,m.setPointerCapture?.(P.pointerId),le(P),!0}let O=me(P);return O?(z={id:P.pointerId,x:P.clientX,y:P.clientY,root:O.root,shift:P.shiftKey},m.setPointerCapture?.(P.pointerId),le(P),!0):!1}function Ue(P){if(ce)return!1;if(Ne(),X&&P.pointerId===X.id){if(X.bounds)return N.resize(X,P,X.root,X.original.wall?.25:P.ctrlKey?null:ke()),le(P),!0;if(Ce(P),X.group&&X.mode==="scale"?V.scale.copy(X.scale).multiplyScalar(Math.exp(Math.max(-20,Math.min(20,(P.clientX-X.clientX-P.clientY+X.clientY)*.005)))):C.pointerMove({...L(P),button:-1}),X.group){let K=$.some(ae=>ae.userData.record.wall)?.25:P.ctrlKey?0:ke()||0;if(X.mode==="translate"){if(K)for(let we of["x","y","z"])V.position[we]=X.position[we]+Math.round((V.position[we]-X.position[we])/K)*K;let ae=window.KERN_DRAG_AXES?.apply(X,V.position,X.position);ae&&V.position.set(ae.x,ae.y,ae.z),K=0}return T.preview(X,X.mode,K),ue(),le(P),!0}let O=!X.original.wall&&!P.ctrlKey&&C.mode==="translate"&&ke();if(O){let K=X.root,ae=X.position;for(let we of["x","y","z"])K.position[we]=ae[we]+Math.round((K.position[we]-ae[we])/O)*O;K.updateMatrixWorld(!0)}if(C.mode==="translate"){let K=window.KERN_DRAG_AXES?.apply(X,V.position,X.position);K&&(V.position.set(K.x,K.y,K.z),V.updateMatrixWorld(!0))}return ue(),le(P),!0}if(X||z&&P.pointerId===z.id)return le(P),!0;if(V&&C.enabled&&!P.altKey&&!P.buttons){let O=!B()&&!P.shiftKey&&N.hit(P);if(N.hover(O),O)return C.axis=null,m.style.cursor="ew-resize",m.title="Drag "+{x:"width",y:"height",z:"depth"}[O.userData.boundsHandle.axis]+" \xB7 opposite face stays fixed \xB7 "+(V.userData.record.wall?"0.25 m steps":"Ctrl: free"),le(P),!0;if(i.updateMatrixWorld(!0),C.pointerHover(L(P)),B()&&C.mode==="scale"&&C.axis==="XYZ")return m.title="Uniform group scale \xB7 drag right or up to enlarge; left or down to shrink",le(P),!0}return!1}function pe(P){m.hasPointerCapture?.(P)&&m.releasePointerCapture(P)}function be(P){let O=new Rt().makeRotationFromQuaternion(P).elements,K=Math.hypot(O[0],O[4]),ae=O[8]>=0?1:-1,we=K>1e-12?Math.atan2(-O[4],O[0]):0,ve=Math.atan2(O[6]+ae*O[1],O[5]-ae*O[2]),Me=ve-ae*we;return{x:Math.atan2(Math.sin(Me),Math.cos(Me)),y:Math.atan2(O[8],K),z:we}}function je(P,O,K=!1){let ae=be(P.quaternion),we=Me=>Math.round(Me*1e6)/1e6,ve=K||P.quaternion.angleTo(new Dt().setFromEuler(new cn(O.tiltX*Math.PI/180,-O.rotation*Math.PI/180,O.tiltY*Math.PI/180,"XYZ")))<1e-7;return{x:we(P.position.x-P.scale.x/2),y:we(P.position.z-P.scale.z/2),z:we(P.position.y-P.userData.floorZ-P.scale.y/2),w:we(P.scale.x),h:we(P.scale.z),height:we(P.scale.y),rotation:ve?O.rotation:we(O.wall?(()=>{let Me=new w(1,0,0).applyQuaternion(P.quaternion),De=Math.atan2(Me.z,Me.x)*180/Math.PI;return[De-360,De,De+360].filter(Oe=>Oe>=-360&&Oe<=360).sort((Oe,Re)=>Math.abs(Oe-O.rotation)-Math.abs(Re-O.rotation))[0]})():-ae.y*180/Math.PI),tiltX:ve?O.tiltX:O.wall?0:we(ae.x*180/Math.PI),tiltY:ve?O.tiltY:O.wall?0:we(ae.z*180/Math.PI)}}let ze=(P,O)=>Object.entries(P).some(([K,ae])=>Math.abs(ae-O[K])>1e-6);function I(P){if(X&&P.pointerId===X.id){let O=X;if(X=null,window.KERN_DRAG_AXES?.refresh?.(),C.pointerUp({button:0}),n.enabled=l(),N.hover(null),pe(P.pointerId),le(P),O.group){let K=O.members.map(ae=>({floor:ae.root.userData.level,id:ae.root.userData.primitive,changes:je(ae.root,ae.original,O.mode!=="rotate"),baseline:ae.original}));K.some(ae=>ze(ae.changes,ae.baseline))?u?.(K,O.scope)!==!0&&T.restore(O):T.restore(O)}else{let K=O.root,ae=je(K,O.original,O.bounds);ze(ae,O.original)?p(K.userData.level,K.userData.primitive,ae,O.original,{resizeBounds:!!O.bounds})===!1&&Ve(K,O.original):Ve(K,O.original)}return ue(),!0}if(z&&P.pointerId===z.id){let O=z;return z=null,pe(P.pointerId),le(P),Math.hypot(P.clientX-O.x,P.clientY-O.y)<=5&&d(O.root.userData.level,O.root.userData.primitive,O.shift),!0}return!1}function y(P){if(P!=null&&(X?.id??z?.id)!==P)return!1;let O=X,K=z;return X=null,z=null,window.KERN_DRAG_AXES?.refresh?.(),N.hover(null),O&&(O.group?T.restore(O):Ve(O.root,O.original),C.pointerUp({button:0}),n.enabled=l(),pe(O.id)),K&&pe(K.id),ue(),!!(O||K)}let Y=P=>{P.key==="Escape"&&X&&(le(P),y())};window.addEventListener("keydown",Y,!0);function ne(P,O,{floorPlane:K=!1}={}){Ne();let ae=r.levels.find(at=>at.id===O);if(!ae||!s.get(O)?.visible)return null;let we=!K&&fe(P).find(at=>at.root.userData.level===O),ve=!K&&a(P),Me=ve?.floor===O?ve:null,De=we&&(!Me||we.distance<Me.point.distanceTo(e.position))?{point:we.point,normal:we.face.normal.clone().applyMatrix3(new pt().getNormalMatrix(we.object.matrixWorld)).normalize()}:Me;if(!De){let at=L(P);f.setFromCamera(new Se(at.x,at.y),e);let H=f.ray.intersectPlane(new $t(new w(0,1,0),-(ae.z+s.get(O).position.y)),new w);if(!H)return null;De={point:H,normal:new w(0,1,0)}}let Oe=De.point,Re=De.normal||new w(0,1,0);return{x:Oe.x,y:Oe.z,z:Oe.y-s.get(O).position.y,normal:{x:Re.x,y:Re.z,z:Re.y}}}function _e(){if(!ce){oe?.(),gt(null),y(),ce=!0,window.removeEventListener("keydown",Y,!0),N.dispose(),T.dispose(),Z(!1),C.detach(),C.dispose(),i.remove(U);for(let P of _)P.removeFromParent();for(let P of[...Object.values(R),...D])P.dispose();S.dispose();for(let P of v)P.dispose()}}return{select:Ze,sync:Ne,updateBounds:ue,down:ge,move:Ue,up:I,cancel:y,placement:ne,previewWall:gt,dispose:_e,dragging:()=>!!X,ownsGesture:P=>P===X,busy:()=>!!(X||z),setMode(P){["translate","scale","rotate"].includes(P)&&(y(),C.setMode(P),C.setSpace(P==="scale"?"local":"world"),Ce())},objects:()=>_}}var ji=["x","y","z"],Ih={x:"#e47b74",y:"#7acb99",z:"#70b9ec"},Xx=i=>Math.abs(i)<.005?0:i,Yx=i=>{let e=Xx(i);return(e>0?"+":"")+e.toFixed(2)};function vf({scene:i,camera:e,canvas:t,container:n,manager:s,owns:r=()=>!0}){let o=new ln;o.name="translation-feedback",o.userData.dragFeedback="3d",o.visible=!1,i.add(o);let a=[],c=[];function l(oe,{dashed:Te=!1,opacity:Ve=1}={}){let nt=new xt;nt.setAttribute("position",new mt(new Float32Array(6),3)),a.push(nt),Te&&nt.setAttribute("lineDistance",new mt([0,0],1));let Qe={color:oe,transparent:!0,opacity:Ve,depthTest:!1,depthWrite:!1},te=Te?new ps({...Qe,dashSize:.15,gapSize:.1}):new _n(Qe);c.push(te);let ue=new Xt(nt,te);return ue.frustumCulled=!1,ue.renderOrder=40,ue.raycast=()=>{},o.add(ue),ue}let d=Object.fromEntries(ji.map(oe=>{let Te=l(Ih[oe],{opacity:.64});return Te.userData.dragAxis=oe,Te.visible=!1,[oe,Te]})),p=l("#e7b76e",{dashed:!0,opacity:.92});p.userData.dragDistance=!0,p.renderOrder=41;let u=new Hn(1,10,6),m=new jt({color:"#e7b76e",transparent:!0,opacity:.96,depthTest:!1,depthWrite:!1});a.push(u),c.push(m);let _=["origin","current"].map(oe=>{let Te=new Ae(u,m);return Te.userData.dragMarker=oe,Te.renderOrder=42,Te.frustumCulled=!1,Te.raycast=()=>{},o.add(Te),Te}),x=document.createElement("div");x.dataset.dragFeedback="3d",x.style.cssText="position:absolute;display:none;pointer-events:none;user-select:none;z-index:8;padding:7px 9px;border:1px solid #dce9f02b;border-radius:5px;background:#17232eed;color:#e8eef4;box-shadow:0 2px 9px #0003;font:12px/1.45 system-ui;white-space:nowrap;max-width:calc(100% - 16px);overflow:hidden";let f=document.createElement("div");f.dataset.dragAxisStatus="true",f.style.cssText="font-size:11px;font-weight:650;letter-spacing:.025em;margin-bottom:2px;display:none",x.append(f);let g=document.createElement("div");g.dataset.dragDistance="true",g.style.cssText="font-size:13px;font-weight:650;color:#e7b76e",x.append(g);let R=document.createElement("div");R.style.cssText="font-size:11px;font-variant-numeric:tabular-nums",x.append(R);let S=Object.fromEntries(ji.map((oe,Te)=>{Te&&R.append(document.createTextNode(" \xB7 "));let Ve=document.createElement("span");return Ve.dataset.dragComponent=oe,Ve.style.color=Ih[oe],R.append(Ve),[oe,Ve]}));n.append(x);let v=new w,D=new w,C=new w,U=new w,N=new w,T=new w,b=null,F=!1,Z=260,$=64,ee=!0;function B(oe,Te,Ve){let nt=oe.geometry.attributes.position;nt.setXYZ(0,Te.x,Te.y,Te.z),nt.setXYZ(1,Ve.x,Ve.y,Ve.z),nt.needsUpdate=!0}function V(){o.visible=!1,x.style.display="none",f.style.display="none",f.textContent="",delete x.dataset.axes;for(let oe of Object.values(d))oe.visible=!1}function X(oe){if(F)return;if(b=oe?.space==="3d"&&r(oe.owner)&&ji.every(te=>Number.isFinite(oe.origin?.[te])&&Number.isFinite(oe.delta?.[te]))?oe:null,!b){V();return}v.set(oe.origin.x,oe.origin.y,oe.origin.z),D.set(v.x+oe.delta.x,v.y+oe.delta.y,v.z+oe.delta.z);let Te=ji.filter(te=>oe.axes?.includes(te)),Ve=oe.supported||ji,nt=Te.some(te=>!Ve.includes(te));x.dataset.axes=Te.join(""),x.dataset.total=Math.hypot(oe.delta.x,oe.delta.y,oe.delta.z).toFixed(6),f.style.display=Te.length?"block":"none",f.textContent=Te.length?Te.map(te=>te.toUpperCase()).join(" + ")+" locked"+(nt?" \xB7 "+(Ve.includes("y")?Ve.length===1&&Ve[0]==="y"?"vertical edit":"gizmo axis":"planar edit"):""):"",f.style.color=Te.length===1?Ih[Te[0]]:"#e8eef4",g.textContent="Move "+Math.hypot(oe.delta.x,oe.delta.y,oe.delta.z).toFixed(2)+" m";for(let te of ji)S[te].textContent=te.toUpperCase()+" "+Yx(oe.delta[te]);for(let te of ji)d[te].visible=Te.includes(te)&&Ve.includes(te);o.visible=!0,p.visible=D.distanceToSquared(v)>1e-12,B(p,v,D);let Qe=p.geometry.attributes.lineDistance;Qe.setX(0,0),Qe.setX(1,D.distanceTo(v)),Qe.needsUpdate=!0,_[0].position.copy(v),_[1].position.copy(D),ee=!0,z()}function z(){if(F||!b)return;let oe=t.getBoundingClientRect();if(!oe.width||!oe.height){x.style.display="none",o.visible=!1;return}if(e.updateMatrixWorld(!0),U.copy(D).applyMatrix4(e.matrixWorldInverse),U.z>=0){x.style.display="none",o.visible=!1;return}o.visible=!0;let Te=e.isOrthographicCamera?Math.abs(e.top-e.bottom)/e.zoom/oe.height:2*Math.abs(U.z)*Math.tan(e.fov*Math.PI/360)/e.zoom/oe.height,Ve=Math.max(1e-5,Te),nt=Ve*90;for(let fe of ji)d[fe].visible&&(N.copy(D),T.copy(D),N[fe]-=nt,T[fe]+=nt,B(d[fe],N,T));if(_[0].scale.setScalar(Ve*2.3),_[1].scale.setScalar(Ve*3.2),_[0].visible=D.distanceTo(v)>Ve*5,p.material.dashSize=Ve*6,p.material.gapSize=Ve*4,C.copy(D).project(e),!Number.isFinite(C.x)||!Number.isFinite(C.y)){x.style.display="none";return}x.style.display="block",ee&&(Z=x.offsetWidth||260,$=x.offsetHeight||(f.style.display==="none"?48:64),ee=!1);let Qe=Math.min(Z,oe.width-16),te=Math.min($,oe.height-16),ue=(C.x+1)*oe.width/2,Ne=(1-C.y)*oe.height/2,Ze=ue+14+Qe<=oe.width-8?ue+14:ue-Qe-14,ke=Ne-te-14,Ce=n.getBoundingClientRect(),gt=oe.left-Ce.left+(n.scrollLeft||0),L=oe.top-Ce.top+(n.scrollTop||0);x.style.left=gt+Math.max(8,Math.min(oe.width-Qe-8,Ze))+"px",x.style.top=L+Math.max(8,Math.min(oe.height-te-8,ke))+"px"}let ce=s?.subscribe?.(X);function xe(){if(!F){V(),F=!0,ce?.(),b=null,x.remove(),o.removeFromParent();for(let oe of a)oe.dispose();for(let oe of c)oe.dispose()}}return{update:z,dispose:xe}}function Ro(i){let e=new Ri(i.polygon.map(s=>new Se(s[0],-s[1])));for(let s of i.holes||[])e.holes.push(new Yi(s.map(r=>new Se(r[0],-r[1]))));let t=i.bottomPlane||i.topPlane,n=new ar(e,{depth:t?1:i.height,bevelEnabled:!1,steps:1});if(n.rotateX(-Math.PI/2),t){let s=n.attributes.position,r=(o,a,c,l)=>o?o.a*a+o.b*c+o.c:l;for(let o=0;o<s.count;o++){let a=s.getX(o),c=s.getZ(o),l=s.getY(o)>.5;s.setY(o,r(l?i.topPlane:i.bottomPlane,a,c,i.z+(l?i.height:0))-i.z)}s.needsUpdate=!0,n.computeVertexNormals()}return n.computeBoundingBox(),n.computeBoundingSphere(),n}function Mf(i){return i.flights.flatMap(e=>{if(!e.ramp)return e.treads.map(l=>({...l.rect,polygon:l.polygon,z:l.z-.12,height:.12}));let[t,n]=e.upPath,s=n[0]-t[0],r=n[1]-t[1],o=(e.z1-e.z0)/(s*s+r*r||1),a=e.surface?.thickness??.18,c={a:s*o,b:r*o,c:e.z0-o*(s*t[0]+r*t[1])};return[{...e.rect,polygon:e.polygon,z:e.z0-a,height:e.z1-e.z0+a,topPlane:c,bottomPlane:{...c,c:c.c-a}}]}).concat(i.landings.map(e=>({...e.rect,polygon:e.polygon,z:e.z-.18,height:.18})))}function Ef(i,e,t){let n=0,s=1;for(let r of["x","y","z"]){let o=e[r]-i[r],a=t.min[r],c=t.max[r];if(Math.abs(o)<1e-8){if(i[r]<a||i[r]>c)return null;continue}let l=(a-i[r])/o,d=(c-i[r])/o;if(l>d&&([l,d]=[d,l]),n=Math.max(n,l),s=Math.min(s,d),n>s)return null}return n>=0&&n<=1?n:null}function qx(i,e){if(i.polygon&&window.KERN_SHAPES){let r=window.KERN_SHAPES,o=(e.polygons||[]).filter(u=>u.kind==="slab"&&u.room===i.id&&Math.abs(u.z+u.height-i.z)<.01),a=u=>o.some(m=>r.contains(u,m.polygon)&&!(m.holes||[]).some(_=>r.contains(u,_))),c=r.labelAnchor(i),l=Math.min(i.w,4),d=Math.min(i.h,2);if(a(c))return{x:c.x-l/2,y:c.y-d/2,w:l,h:d,z:i.z};let p=null;for(let u of o){let m=[u.polygon,...u.holes||[]],_=r.bounds(u.polygon);for(let x=0;x<12;x++)for(let f=0;f<12;f++){let g={x:_.x+_.w*(f+.5)/12,y:_.y+_.h*(x+.5)/12};if(!a(g))continue;let R=Math.min(...m.flatMap(D=>D.map((C,U)=>{let N=D[(U+1)%D.length];return Math.hypot(C[0]-N[0],C[1]-N[1])>1e-8?r.project(g,{a:C,b:N}).distance:1/0}))),S=Math.min(1,R/Math.hypot(l/2,d/2)),v=S*l*d-Math.hypot(g.x-c.x,g.y-c.y)*1e-4;S*l>.35&&S*d>.35&&(!p||v>p.score)&&(p={...g,w:l*S,h:d*S,score:v})}}return p?{x:p.x-p.w/2,y:p.y-p.h/2,w:p.w,h:p.h,z:i.z}:null}let t=e.boxes.filter(r=>(r.kind==="slab"&&(!r.room||r.room===i.id)||r.kind==="landing")&&Math.abs(r.z+r.height-i.z)<.01).map(r=>{let o=Math.max(i.x,r.x),a=Math.max(i.y,r.y);return{x:o,y:a,w:Math.min(i.x+i.w,r.x+r.w)-o,h:Math.min(i.y+i.h,r.y+r.h)-a,z:r.z+r.height}}).filter(r=>r.w>.35&&r.h>.35),n=i.x+i.w/2,s=i.y+i.h/2;return t.sort((r,o)=>o.w*o.h-r.w*r.h||Math.hypot(r.x+r.w/2-n,r.y+r.h/2-s)-Math.hypot(o.x+o.w/2-n,o.y+o.h/2-s))[0]||null}function Zx(i,e,t,n){let s=Math.min(56,t*.42),r=[],o=a=>n.measureText?.(a).width??a.length*s*.56;for(let a=0;a<90;a++){n.font=`600 ${s}px system-ui`,r=[];let c="";for(let l of String(i).split(/\s+/)){let d=c?c+" "+l:l;c&&o(d)>e?(r.push(c),c=l):c=d}if(c&&r.push(c),r.every(l=>o(l)<=e)&&r.length*s*1.24<=t)break;s*=.92}return{lines:r,fontSize:s,lineHeight:s*1.24}}function Sf(i,e,t){return i.stairs?.some(n=>{if(n.connectionId!==t.stair)return!1;let s=n.stops.find(o=>o.floor===e.id);if(!s)return!1;let r=n.stops.filter(o=>o.z<s.z-1e-6);return r.length>0&&t.z<s.z&&t.z>=Math.max(...r.map(o=>o.z))-.2})}function Kx(i,e,t={}){let n=null,s=null,r=null,o=new Hl({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),a=()=>{o.setAnimationLoop(null),o.dispose(),o.forceContextLoss(),o.domElement.remove()};try{let K=function(h,M){let E=h.height;if(h.contextOnly&&Ce!==M.id||h.kind==="slab"&&(!kt||Qi)&&!nt||h.kind==="ceiling"&&(!kt||Qi)&&(!Ve||Qe))return 0;let k=h.kind==="wall"||h.kind==="solid";return Qe&&k&&(E=Math.max(0,Math.min(E,(h.baseZ??M.z)+te-h.z))),k&&!Te&&(E=0),E},ae=function(){let h=new Lt;gt=[];for(let M of f.values())M.position.y=M.userData.rank*xe;ce.position.y=0,ce.userData.displayDatum=ce.position.y;for(let M of v){let E=e.levels.find(de=>de.id===M.userData.level),k=f.get(E.id),Q=M.userData.fadeMesh;M.userData.boxes.forEach((de,q)=>{let G=K(de,E),ie=Ne&&M.userData.faded.has(q),j=(ye,Fe)=>{let Xe=Fe&&G>.001;h.position.set(de.x+de.w/2,de.z+G/2,de.y+de.h/2),h.scale.set(Xe?de.w:0,Xe?G:0,Xe?de.h:0),h.updateMatrix(),ye.setMatrixAt(q,h.matrix)};j(M,!ie),Q&&j(Q,ie),k.visible&&G>.001&&gt.push({mesh:M,index:q,kind:de.kind,level:E.id,min:{x:de.x,y:de.z+k.position.y,z:de.y},max:{x:de.x+de.w,y:de.z+G+k.position.y,z:de.y+de.h}})}),M.visible=M.userData.boxes.some((de,q)=>K(de,E)>.001&&!(Ne&&M.userData.faded.has(q))),M.instanceMatrix.needsUpdate=!0,Q&&(Q.visible=Ne&&M.userData.boxes.some((de,q)=>K(de,E)>.001&&M.userData.faded.has(q)),Q.instanceMatrix.needsUpdate=!0)}for(let M of C){let E=M.userData.shape,k=e.levels.find(de=>de.id===M.userData.level),Q=K(E,k);if(E.bottomPlane||E.topPlane){let de=Qe&&["wall","solid"].includes(E.kind)?(E.baseZ??k.z)+te:1/0;if(M.userData.prismCutHeight!==de){let q=window.KERN_ELEVATIONS?.clipPrism?.(E,-1/0,de)||[E],G=[];for(let j of q){let ye=Ro(j),Fe=ye.attributes.position;for(let Xe=0;Xe<Fe.count;Xe++)G.push(Fe.getX(Xe),Fe.getY(Xe)+j.z-E.z,Fe.getZ(Xe));ye.dispose()}let ie=new xt;ie.setAttribute("position",new mt(G,3)),ie.computeVertexNormals(),ie.computeBoundingBox(),ie.computeBoundingSphere(),M.geometry.dispose(),M.geometry=ie,M.userData.prismCutHeight=de}M.scale.y=1}else M.scale.y=Q/E.height;M.visible=Q>.001&&(!M.userData.contextOnly||Ce===M.userData.level)}for(let M of g)M.visible=ue;for(let M of R)M.visible=ue&&!M.userData.duplicate;we(),c.updateMatrixWorld(!0),L=""},we=function(){for(let h of D){let M=h.userData.floorHighlight||h.userData.floorLeader;h.visible=!!f.get(M)?.visible&&(M===ke||P.has(M))}for(let h of g)h.material.color.set(h.userData.level===ke||P.has(h.userData.level)?10410239:16777215)},ve=function(h){P=new Set((h||[]).filter(M=>f.has(M))),we()},Me=function(h){h&&!f.get(h)?.visible&&(h=null),h!==ke&&(ke=h,we(),o.domElement.style.cursor=h?"pointer":"default",t.onHover?.(h?e.levels.find(M=>M.id===h):null))},De=function(h=!1){l.updateMatrixWorld(!0);let M=[...l.position.toArray(),...l.quaternion.toArray(),xe,Te,Qe,te,ue,Ne,Ce,..._e()].join(":");if(!h&&M===L&&!pe)return;let E=[...l.position.toArray().map(j=>j.toFixed(2)),...l.quaternion.toArray().map(j=>j.toFixed(3)),xe,Te,Qe,te,Ne,..._e()].join(":");E!==ge&&(ge=E,Ue=performance.now(),pe=Ne);let k=!Ne||!le&&!me&&(h||performance.now()-Ue>=180),Q=new Map(v.map(j=>[j,new Set]));if(k&&Ne&&Te)for(let j of e.levels){let ye=f.get(j.id);if(!ye.visible)continue;let Fe=j.boxes.filter(Xe=>Xe.kind==="slab").sort((Xe,He)=>He.w*He.h-Xe.w*Xe.h).slice(0,12);for(let Xe of Fe)for(let[He,ot]of[[.5,.5],[.22,.22],[.78,.78]]){let ut={x:Xe.x+Xe.w*He,y:Xe.z+Xe.height+.8+ye.position.y,z:Xe.y+Xe.h*ot},st=null,ct=1;for(let It of gt){let Gt=Ef(l.position,ut,It);Gt!==null&&Gt>1e-5&&Gt<ct&&(ct=Gt,st=It)}st?.kind==="wall"&&ct<.985&&Q.get(st.mesh).add(st.index)}}if(k){let j=new Set,ye=C.filter(Fe=>Fe.userData.kind==="wall"&&Fe.visible&&f.get(Fe.userData.level)?.visible);if(Ne&&Te){for(let Fe of e.levels)if(f.get(Fe.id)?.visible)for(let Xe of(Fe.rooms||[]).slice(0,20)){let He=window.KERN_SHAPES?window.KERN_SHAPES.centroid(Xe):{x:Xe.x+Xe.w/2,y:Xe.y+Xe.h/2},ot=new w(He.x,Xe.z+.8+f.get(Fe.id).position.y,He.y),ut=ot.clone().sub(l.position),st=ut.length(),It=new Xn(l.position,ut.normalize(),.05,st-.05).intersectObjects(ye,!1)[0];It&&j.add(It.object)}}for(let Fe of C)Fe.userData.kind==="wall"&&(Fe.material=U(Fe.userData.shape.color,j.has(Fe)))}let de=!1;if(k){for(let j of v){let ye=Q.get(j),Fe=j.userData.faded;(ye.size!==Fe.size||[...ye].some(Xe=>!Fe.has(Xe)))&&(de=!0),j.userData.faded=ye}pe=!1}de&&ae();let q=[],G=Math.max(1,i.clientWidth),ie=Math.max(1,i.clientHeight);for(let j of[...g].sort((ye,Fe)=>+!!ye.userData.roomLabel-+!!Fe.userData.roomLabel||(Fe.userData.area||0)-(ye.userData.area||0))){let ye=j.getWorldPosition(new w),Fe=ye.clone().applyMatrix4(l.matrixWorldInverse),Xe=2*Math.max(.1,-Fe.z)*Math.tan(Nn.degToRad(l.fov/2))/ie,He=Math.min(j.userData.labelWidth*Xe,j.userData.maxWorldWidth||1/0);j.scale.set(He,He*j.userData.labelRatio,1);let ot=ye.clone().project(l),ut=He/Xe,st=ut*j.userData.labelRatio,ct={x:(ot.x+1)*G/2-ut/2,y:(1-ot.y)*ie/2-st/2,w:ut,h:st},It=q.some(Gt=>ct.x<Gt.x+Gt.w+5&&ct.x+ct.w+5>Gt.x&&ct.y<Gt.y+Gt.h+5&&ct.y+ct.h+5>Gt.y);if(j.visible=ue&&f.get(j.userData.level).visible&&(!j.userData.roomLabel||j.userData.level===Ce)&&Fe.z<0&&ot.z>=-1&&ot.z<=1&&ct.x+ct.w>0&&ct.y+ct.h>0&&ct.x<G&&ct.y<ie&&ut>=58&&!It&&!gt.some(Gt=>{let Jn=Ef(l.position,ye,Gt);return Jn!==null&&Jn>1e-5&&Jn<.995}),j.visible&&q.push(ct),j.userData.floorLabel){let Gt=D.find(Jn=>Jn.userData.floorLeader===j.userData.level);if(Gt){let Jn=Gt.geometry.attributes.position;Jn.setX(0,j.position.x+He/2),Jn.needsUpdate=!0,Gt.visible=ue&&j.visible&&(j.userData.level===ke||P.has(j.userData.level))}}}for(let j of R){let ye=j.getWorldPosition(new w);j.visible=ue&&f.get(j.userData.level).visible&&!j.userData.duplicate&&l.position.y>ye.y}L=M},Oe=function(){me=null},Re=function(h,M,E,k=je){let Q=l.position.clone(),de=u.target.clone(),q=u.enableDamping;u.enableDamping=!1,u.update(),l.position.copy(Q),u.target.copy(de),u.update(),u.enableDamping=q,me=E&&!I?.matches?{from:Q,targetFrom:de,to:h.clone(),targetTo:M.clone(),datumFrom:je,datumTo:k,start:performance.now(),duration:420}:null,me||(je=k,l.position.copy(h),u.target.copy(M),l.lookAt(M),u.update(),De(!0))},at=function(h=performance.now()){if(!me)return!1;let M=me,E=I?.matches?1:Math.min(1,Math.max(0,(h-M.start)/M.duration)),k=E*E*(3-2*E);return je=Nn.lerp(M.datumFrom,M.datumTo,k),l.position.lerpVectors(M.from,M.to,k),u.target.lerpVectors(M.targetFrom,M.targetTo,k),l.lookAt(u.target),l.updateMatrixWorld(!0),E===1&&(me=null,u.update()),!0},Be=function(){let h=`${_e().join("|")}:${xe}:${l.aspect}:${l.fov}`;if(H?.key===h)return H;let M=new fn;for(let G of f.values())if(G.visible){let ie=e.levels.find(j=>j.id===G.userData.id);for(let j of[...ie.boxes,...ie.polygons||[],...B(ie)])M.expandByPoint(new w(j.x,j.z+G.position.y,j.y)),M.expandByPoint(new w(j.x+j.w,j.z+j.height+G.position.y,j.y+j.h))}M.isEmpty()&&(M.min.set(N.minX,N.minZ-ee*xe,N.minY),M.max.set(N.maxX,N.maxZ+(e.levels.length-1-ee)*xe,N.maxY));let E=M.getCenter(new w),k=M.getSize(new w),Q=Math.max(k.length()/2,8),de=Nn.degToRad(l.fov/2),q=Q/Math.sin(de)*Math.max(1,1/l.aspect)*1.1;return H={key:h,center:E,distance:q}},Ke=function(){return kt?1/Math.tan(Nn.degToRad(l.fov/2)):Be().distance/Math.max(.001,l.position.distanceTo(u.target))},Pe=function(){let h=Ke(),M=h<.1?Math.max(.1,Math.round(h*1e3)/10):Math.round(h*100);Number.isFinite(h)&&M!==Le&&(Le=M,t.onCameraChange?.(h))},Ee=function(h=!1,M=!1){let{center:E,distance:k}=Be(),Q=h?l.position.clone().sub(u.target).normalize():new w(1,.9,1.2).normalize();l.near=.05,l.far=Math.max(5e3,k*5),l.updateProjectionMatrix(),Re(E.clone().add(Q.multiplyScalar(k)),E,M,ze(be))},Je=function(h,M=!0){let E=ze(h),k=E-je;be=h,Re(l.position.clone().add(new w(0,k,0)),u.target.clone().add(new w(0,k,0)),M,E)},ft=function(){if(t.onFloorVisibility)return t.onFloorVisibility({all:!0});Gn(),($e||ht==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&dt(!0),he&&Pn(),Oe();for(let h of f.values())h.visible=!0;Ce=null,Me(null),ae(),De(!0),O("visibility")},Nt=function(h){if(t.onFloorSelect)return t.onFloorSelect(h,{additive:!1});if(Gn(),($e||ht==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&dt(!0),he&&Pn(),!!f.has(h)){if(Ce===h&&_e().length===1){O();return}W(null,null),Ce=h;for(let[M,E]of f)E.visible=M===h;Me(null),ae(),Je(h),O(),W(h,null)}},_t=function(h,{preserveEditing:M=!1}={}){if(f.has(h)){if(t.onFloorSelect&&!M)return t.onFloorSelect(h,{additive:!1});if(M&&t.getFloorState)return re(t.getFloorState());!M&&!f.get(h).visible&&(f.get(h).visible=!0,ae()),Ce!==h&&(window.KERN_CONNECTION_3D?.cancel(),(ht==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&dt(!0)),Ce=h,be=h,je=ze(h),Me(null),M||Ie([h]),De(!0),O(M?"sync":"navigation")}},qn=function(h,M=!1){if(!f.has(h))return;if(t.onFloorSelect)return t.onFloorSelect(h,{additive:M});if(!M)return Nt(h);Gn(),dt(),Pn();let E=f.get(h);E.visible=!E.visible,_e().length||(E.visible=!0),W(null,null),_t(E.visible?h:_e()[0]),ae()},Vn=function(h){f.has(h)&&h!==be&&_t(h,{preserveEditing:!0})},yr=function(h){let M=e.levels.findIndex(k=>k.id===Ce),E=e.levels[M+Math.sign(h)];M>=0&&E&&(_t(E.id),Je(E.id))},vn=function(h,{physicalOnly:M=!1}={}){lt=null;let E=o.domElement.getBoundingClientRect();if(!E.width||!E.height)return null;ne.set((h.clientX-E.left)/E.width*2-1,-(h.clientY-E.top)/E.height*2+1),l.updateMatrixWorld(!0),c.updateMatrixWorld(!0),Y.setFromCamera(ne,l);let k=[...S,...C,...M?[]:[...g,...R]].filter(ye=>ye.visible&&f.get(ye.userData.level)?.visible),Q=Y.intersectObjects(k,!1)[0],de=Q?.object.userData.level,q=Q?.object.userData.boxes?.[Q.instanceId],G=Q?.object.userData.room||q?.room,ie=e.levels.find(ye=>ye.id===de)?.rooms?.find(ye=>ye.id===G);o.domElement.title=ie?ie.name:"";let j=Q?.object.userData.sourceFloor||q?.sourceFloor||de;return lt=Q?{floor:j,displayFloor:de,door:Q.object.userData.door||q?.door,room:G||q?.rooms?.[0],kind:Q.object.userData.kind||q?.kind,roomLabel:!!Q.object.userData.roomLabel,floorSurface:(Q.object.userData.kind||q?.kind)==="slab"&&!Q.object.userData.door&&!q?.door,point:Q.point,normal:Q.face?.normal?.clone().applyMatrix3(new pt().getNormalMatrix(Q.object.matrixWorld)).normalize()}:null,j||null},Mr=function(h){h?.routeStair&&(h=window.KERN_ROUTE_STAIRS.editFrame(h));let M=h&&window.KERN_TRANSFORM?.frame(h),E=M?M.point(M.x+M.w/2,M.y+M.h):h?[h.x+h.w/2,h.y+h.h]:null;vr=h?{x:E[0],y:E[1],z:h.z+f.get(h.floor).position.y,w:M?.w??h.w,h:M?.h??h.h}:null,Er()},Er=function(){if(!vr||kt){Zn.style.display="none";return}let h=vr,M=new w(h.x,h.z,h.y).project(l),E=o.domElement.getBoundingClientRect();Zn.textContent=h.w.toFixed(2)+" \xD7 "+h.h.toFixed(2)+" m",Zn.style.display="block",Zn.style.left=Math.min(Math.max(6,(M.x+1)*E.width/2-45),Math.max(6,E.width-135))+"px",Zn.style.top=Math.min(Math.max(6,(1-M.y)*E.height/2+15),Math.max(6,E.height-28))+"px"},W=function(h,M){for(n?.select([]),Mr(null),Ut=h?{floor:h,ids:M?[M]:[]}:null;wt.children.length;){let de=wt.children[0];wt.remove(de),de.geometry.dispose()}let E=e.levels.find(de=>de.id===h)?.rooms.find(de=>de.id===M)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(h,M),k=e.levels.find(de=>de.id===h),Q=k&&V(k);bt=f.has(h)?E?{...E,floor:h}:!M&&k?{id:null,isFloor:!0,floor:h,z:k.z,x:Q.minX,y:Q.minY,w:Q.maxX-Q.minX,h:Q.maxY-Q.minY}:null:null,bt&&Ye(bt)},se=function(h,M){if(W(h,M[0]||null),Ut={floor:h,ids:[...M]},M.length<2)return;for(bt=null;wt.children.length;){let k=wt.children[0];wt.remove(k),k.geometry.dispose()}let E=e.levels.find(k=>k.id===h)?.rooms.filter(k=>M.includes(k.id))||[];for(let k of E){let Q=k.routeStair?window.KERN_ROUTE_STAIRS.editFrame(k):k,de=window.KERN_SHAPES?.points(Q)||[[Q.x,Q.y],[Q.x+Q.w,Q.y],[Q.x+Q.w,Q.y+Q.h],[Q.x,Q.y+Q.h]],q=new Xi(new xt().setFromPoints(de.map(G=>new w(G[0],Q.z+f.get(h).position.y+.08,G[1]))),A);q.renderOrder=10,wt.add(q)}if(E.length){let k=E.map(q=>q.routeStair?{...q,...window.KERN_ROUTE_STAIRS.bounds(q)}:q),Q=Math.min(...k.map(q=>q.x)),de=Math.min(...k.map(q=>q.y));Mr({floor:h,x:Q,y:de,z:Math.min(...k.map(q=>q.z)),w:Math.max(...k.map(q=>q.x+q.w))-Q,h:Math.max(...k.map(q=>q.y+q.h))-de})}},re=function({active:h,selected:M=[],visible:E=[],select:k=!1,navigate:Q=!1}){let de=new Set(E),q=M.includes(h)&&f.has(h)?h:null;if(!(Ce===q&&f.has(h)&&be===h&&_e().length===de.size&&_e().every(ie=>de.has(ie))&&P.size===M.length&&M.every(ie=>P.has(ie))&&!k&&!Q)){n?.cancel(),he&&Pn(),($e||ht==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&dt(!0),Gn(),y.clear(),fe=null;for(let[ie,j]of f)j.visible=de.has(ie);if(Ce=q,ve(M),f.has(h)&&(Q?Je(h):(be=h,je=ze(h))),k)Ie(M);else if(bt&&!de.has(bt.floor)){let ie=bt.isFloor?Ut:null;W(null,null),ie&&(Ut=ie)}Ut?.objects&&J(Ut.objects.filter(ie=>de.has(ie.floor))),Me(null),ae(),De(!0),O("controller")}},J=function(h){let M=(h||[]).filter(E=>f.has(E.floor));if(M.length&&M.every(E=>E.kind==="rooms"&&E.floor===M[0].floor)){se(M[0].floor,M.map(E=>E.id));return}if(W(null,null),n?.select(M),!!M.length){Ut={objects:M.map(E=>({...E}))};for(let E of M){let k=E.polygons?.length?E.polygons:[[[E.x,E.y],[E.x+E.w,E.y],[E.x+E.w,E.y+E.h],[E.x,E.y+E.h]]],Q=E.z+f.get(E.floor).position.y+.08;for(let de of k){let q=new Xi(new xt().setFromPoints(de.map(G=>new w(G[0],Q,G[1]))),A);q.renderOrder=10,q.userData.selectedObject={floor:E.floor,kind:E.kind,id:E.id},wt.add(q)}}}},Ie=function(h){let M=[...new Set(h||[])].filter(E=>f.get(E)?.visible);ve(h),W(M.length===1?M[0]:null,null),Ut=M.length?{floors:M}:null},We=function(){if(!Ut)return Ee(!0,!0);let h=new fn,M=Ut.floor;if(Ut.objects){M=Ut.objects[0]?.floor;for(let q of Ut.objects){let G=f.get(q.floor).position.y;h.expandByPoint(new w(q.x,q.z+G,q.y)),h.expandByPoint(new w(q.x+q.w,q.z+q.height+G,q.y+q.h))}}else if(Ut.floors){M=Ut.floors.includes(Ce)?Ce:Ut.floors[0];for(let q of Ut.floors){let G=e.levels.find(j=>j.id===q);if(!G||!f.get(q)?.visible)continue;let ie=f.get(q).position.y;for(let j of[...G.boxes,...G.polygons||[],...B(G)])h.expandByPoint(new w(j.x,j.z+ie,j.y)),h.expandByPoint(new w(j.x+j.w,j.z+j.height+ie,j.y+j.h))}}else{let q=e.levels.find(j=>j.id===M);if(!q)return;let G=Ut.ids.length?Ut.ids.map(j=>q.rooms.find(ye=>ye.id===j)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(q.id,j)).filter(Boolean):q.rooms,ie=f.get(q.id).position.y;for(let j of G){let ye=j.routeStair?{...j,...window.KERN_ROUTE_STAIRS.bounds(j)}:j;h.expandByPoint(new w(ye.x,ye.z+ie,ye.y)),h.expandByPoint(new w(ye.x+ye.w,ye.z+(ye.height||q.height||3)+ie,ye.y+ye.h))}}if(h.isEmpty())return;let E=h.getCenter(new w),k=Math.max(2,h.getSize(new w).length()/2),Q=k/Math.sin(Nn.degToRad(l.fov/2))*Math.max(1,1/l.aspect)*1.15,de=l.position.clone().sub(u.target).normalize();Re(E.clone().add(de.multiplyScalar(Q)),E,!0,ze(M))},Ye=function(h){for(h.routeStair&&(h=window.KERN_ROUTE_STAIRS.editFrame(h)),Mr(h);wt.children.length;){let E=wt.children[0];wt.remove(E),E.geometry.dispose()}let M=h.z+f.get(h.floor).position.y+.08;if(!h.isFloor){let E=new Xi(new xt().setFromPoints((window.KERN_SHAPES?.points(h)||[[h.x,h.y],[h.x+h.w,h.y],[h.x+h.w,h.y+h.h],[h.x,h.y+h.h]]).map(k=>new w(k[0],M,k[1]))),A);if(E.renderOrder=10,wt.add(E),window.KERN_CONCRETE_CAP_UI?.readOnly(h.floor,h.id))return;for(let[k,Q,de]of window.KERN_ROTATE?.active()&&window.KERN_ROTATE.eligibleRoom(h)?window.KERN_SHAPES.raw(h).map((q,G)=>["rotate-"+G,...q]):(window.KERN_TRANSFORM?.handles(h)||[["nw",h.x,h.y],["ne",h.x+h.w,h.y],["se",h.x+h.w,h.y+h.h],["sw",h.x,h.y+h.h]]).filter(q=>q[0].length===2)){let q=k.startsWith("rotate-")&&window.KERN_ROTATE?.pivotFor(h)?.index===Number(k.slice(7)),G=new Ae(new Ct(q?.55:.35,.15,q?.55:.35),q?Fn:A);G.position.set(Q,M,de),G.userData.edge=k,G.renderOrder=11,wt.add(G)}}if(h.routeStair&&window.KERN_ROUTE_STAIRS){let E=h.routeStair,k=E.nodes,Q=window.KERN_ROUTE_STAIRS.elevations(h,window.kernPlanner?.getPlan());for(let de=0;de<k.length;de++){let q=window.KERN_ROUTE_STAIRS.point(h,k[de]),G=Q[de],ie=(de===0?E.start?.floor:de===k.length-1?E.end?.floor:null)||h.floor,j=f.get(ie)?.position.y??f.get(h.floor).position.y,ye=G+j,Fe=new Ae(new Hn(.23,10,8),A);Fe.position.set(q[0],ye+.12,q[1]),Fe.userData.edge="route-node-"+de,Fe.userData.routeZ=G,Fe.userData.displayOffset=j,Fe.renderOrder=16,wt.add(Fe);let Xe=new Ae(new sr(.18,.45,8),Fn);if(Xe.position.set(q[0],ye+1,q[1]),Xe.userData.edge="route-height-"+de,Xe.userData.routeZ=G,Xe.userData.displayOffset=j,Xe.renderOrder=16,wt.add(Xe),de===(window.KERN_ROUTE_UI?.selectedNode??0))for(let[He,ot]of(k[de].landing||[]).entries()){let ut=window.KERN_ROUTE_STAIRS.point(h,ot),st=new Ae(new Ct(.22,.15,.22),Fn);st.position.set(ut[0],ye+.14,ut[1]),st.userData.edge="route-landing-"+de+"-"+He,st.userData.routeZ=G,st.userData.displayOffset=j,st.renderOrder=17,wt.add(st)}}}if(!h.isFloor&&!window.KERN_ROTATE?.active()){let E=new Ae(new mi(.28),A);E.position.set(h.x+h.w/2,M,h.y+h.h/2),E.userData.edge="move",E.renderOrder=14,wt.add(E)}if(!h.routeStair&&!window.KERN_ROTATE?.active()&&(h.isFloor||h.localSteps||window.KERN_ROTATE?.eligibleRoom(h))){let E=h.localSteps&&window.KERN_ELEVATION_UI?.handlePoint(h.floor,h.id),k=E?.x??h.x+h.w/2,Q=E?.y??h.y+h.h/2,de=(h.__elevation?h.z:window.KERN_ELEVATION_UI?.handleZ(h.floor,h.id)??h.z)+f.get(h.floor).position.y,q=new Xt(new xt().setFromPoints([new w(k,de,Q),new w(k,de+1.6,Q)]),Fn);q.renderOrder=12,wt.add(q);let G=new Ae(new sr(.23,.55,8),Fn);G.position.set(k,de+1.6,Q),G.userData.edge="elevate",G.renderOrder=13,wt.add(G)}},qe=function(h,M){let E=o.domElement.getBoundingClientRect();return ne.set((h.clientX-E.left)/E.width*2-1,-(h.clientY-E.top)/E.height*2+1),l.updateMatrixWorld(!0),c.updateMatrixWorld(!0),Y.setFromCamera(ne,l),Y.ray.intersectPlane(new $t(new w(0,1,0),-(M.z+f.get(M.floor).position.y)),new w)},Tt=function(){for(;tt.children.length;){let h=tt.children[0];tt.remove(h),h.geometry.dispose()}},dt=function(h=!1){let M=$e;$e=null,window.KERN_BRIDGE_UI?.cancel(),Tt(),yt.style.display="none",u.enabled=!kt,M&&o.domElement.hasPointerCapture(M.pointerId)&&o.domElement.releasePointerCapture(M.pointerId),h&&(window.KERN_CONNECTION_3D?.cancel(),ht="select",wt.visible=!kt)},Mn=function(h){h!==ht&&(n?.cancel(),he&&Pn(),window.KERN_CONNECTION_3D?.cancel(),dt(),h!=="select"&&h!=="bridge"&&!Ce&&_t(be,{preserveEditing:!0}),ht=h,wt.visible=h==="select",o.domElement.title=h==="bridge"?"Click two room floors at the same height":h==="edge-steps"?"Click a room edge and drag outward":h==="steps"?"Draw between two different-height surfaces":h==="room"?"Drag a room footprint":h==="stairs"?"Draw a stair footprint, then choose destination floors":"")},Kn=function(h,M){let E=o.domElement.getBoundingClientRect();ne.set((h.clientX-E.left)/E.width*2-1,-(h.clientY-E.top)/E.height*2+1),l.updateMatrixWorld(!0),Y.setFromCamera(ne,l);let k=Y.ray.intersectPlane(new $t(new w(0,1,0),-M),new w);return k?{x:k.x,y:k.z}:null},Qt=function(h){if(Tt(),yt.style.display="block",yt.style.left="18px",yt.style.top="auto",yt.style.bottom="18px",yt.textContent=h.error||h.summary,h.error||h.valid===!1||!h.room&&!h.detail||!f.has(h.fid))return;let M=h.room?.bridge?[{...h.room,polygon:window.KERN_SHAPES.points(h.room),z:h.room.z-.15,height:.15}]:h.detail?Mf(h.detail):[{...h.room,z:e.levels.find(E=>E.id===h.fid).z-.15,height:.15}];for(let E of M){let k;E.polygon?k=Ro(E):k=new Ct(E.w,E.height,E.h);let Q=new Ae(k,Fn);E.polygon?Q.position.y=E.z+f.get(h.fid).position.y:Q.position.set(E.x+E.w/2,E.z+E.height/2+f.get(h.fid).position.y,E.y+E.h/2),Q.renderOrder=14,tt.add(Q)}},Li=function(h){if(vn(h,{physicalOnly:!0}),!lt?.floorSurface||!lt.room||!lt.normal||lt.normal.y<.5)return null;let M=e.levels.find(k=>k.id===lt.floor),E=M?.rooms.find(k=>k.id===lt.room);return E?{floor:M.id,p:{x:lt.point.x,y:lt.point.z},z:E.z}:null},Ht=function(h,M=Ce||be){vn(h);let E=lt?.floor||M,k=e.levels.find(q=>q.id===E);if(!k)return null;let Q=lt?{x:lt.point.x,y:lt.point.z}:Kn(h,k.z+f.get(E).position.y);if(!Q)return null;let de=lt?.point||new w(Q.x,k.z+f.get(E).position.y,Q.y);return{floor:E,room:lt?.room,door:lt?.door,p:Q,altKey:!!h.altKey,worldPerPixel:2*l.position.distanceTo(de)*Math.tan(l.fov*Math.PI/360)/Math.max(1,o.domElement.getBoundingClientRect().height)}},En=function(h){Tt(),yt.style.display="block",yt.style.left="18px",yt.style.top="auto",yt.style.bottom="18px",yt.textContent=h.valid?h.summary||(ht==="disconnect"?"Release to remove connection":"Click or release to place opening"):h.reason||"Choose a wall";let M=h.geometry;if(!(!M||!f.has(h.fid)))for(let E of M.segments||[M]){let k=E,Q=k.axis==="poly"?k.p0:k.axis==="h"?[k.start,k.fixed]:[k.fixed,k.start],de=k.axis==="poly"?k.p1:k.axis==="h"?[k.end,k.fixed]:[k.fixed,k.end],q=h.door?.kind==="window"?h.door.sill??.9:0,G=h.door?.kind==="window"?h.door.height??1.4:h.door?.maximumPassage?h.door.height:window.KERN_LOW_OPENINGS?.recognized(h.door)?h.clearHeight??h.door.height:2.2,ie=h.z+q+f.get(h.fid).position.y,j=[[Q[0],ie,Q[1]],[de[0],ie,de[1]],[de[0],ie+G,de[1]],[Q[0],ie+G,Q[1]]],ye=new Xi(new xt().setFromPoints(j.map(Fe=>new w(...Fe))),As);ye.renderOrder=20,tt.add(ye)}},Rf=function(h=performance.now()){return!!In&&!I?.matches&&h-In.start<In.duration},$h=function(h=performance.now()){if(!wn)return;let M=new w(wn.x+(wn.bobX||0)*Math.cos(Io),wn.z+(wn.eyeHeight??1.6278874)+(wn.bobY||0),wn.y-(wn.bobX||0)*Math.sin(Io)),E=new Dt().setFromEuler(new cn(qh,Io,wn.roll||0,"YXZ"));if(l.rotation.order="YXZ",In){let Q=I?.matches?1:Nn.clamp((h-In.start)/In.duration,0,1),de=Q*Q*(3-2*Q);l.position.lerpVectors(In.position,M,de),l.quaternion.slerpQuaternions(In.orientation,E,de),l.fov=Nn.lerp(In.fov,wn.fov??90,de),l.updateProjectionMatrix(),Q===1&&(In=null)}else l.position.copy(M),l.quaternion.copy(E);l.updateMatrixWorld(!0);let k=new w(0,0,-1).applyQuaternion(l.quaternion);if(Ni.position.copy(l.position),Ni.target.position.copy(l.position).add(k.multiplyScalar(8)),Ni.visible=Zh,!wn.fly){for(let Q of g)Q.visible=!1;for(let Q of R)Q.visible=!Q.userData.duplicate&&Math.abs(Q.position.y-wn.z)<.2}},Cf=function(h,M=0,E=0,k=!0,Q=!1,de=!1){if(h){let q=de&&!h.fly&&!I?.matches?{position:l.position.clone(),orientation:l.quaternion.clone(),fov:l.fov,start:performance.now(),duration:360}:null;if(n?.cancel(),he&&Pn(),dt(!0),!kt){if(Ps=Jl(),kt=!0,Qi=!!h.fly,c.children.filter(G=>G.isHemisphereLight||G.isDirectionalLight).forEach(G=>{G.userData.originalIntensity=G.intensity,h.fly||(G.intensity=G.isHemisphereLight?.8:.3)}),wt.visible=!1,u.enabled=!1,me=null,!h.fly){xe=0,Te=!0,Qe=!1,Ne=!1,ue=!1,Ce=null;for(let G of f.values())G.visible=!0;ce.visible=!1,Ui.visible=!0}ae()}if(Qi&&!h.fly){xe=0,Te=!0,Qe=!1,Ne=!1,ue=!1,Ce=null;for(let G of f.values())G.visible=!0;ce.visible=!1,Ui.visible=!0,Qi=!1,ae()}Qi=!!h.fly,(de||h.fly)&&(In=q),!In&&l.fov!==(h.fov??90)&&(l.fov=h.fov??90,l.updateProjectionMatrix()),wn=h,Io=Number.isFinite(M)?M:0,qh=Nn.clamp(Number.isFinite(E)?E:0,-Math.PI/2+.001,Math.PI/2-.001),Zh=k,$h()}else if(kt){let q=l.position.clone(),G=l.getWorldDirection(new w);kt=!1,Qi=!1,In=null,l.fov=Ps?.fov??42,l.updateProjectionMatrix(),c.children.filter(ie=>ie.isHemisphereLight||ie.isDirectionalLight).forEach(ie=>ie.intensity=ie.userData.originalIntensity??ie.intensity),wt.visible=!0,wn=null,Ni.visible=!1,Ui.visible=!1,u.enabled=!0,l.rotation.order="XYZ",$l(Q?{...Ps,position:q.toArray(),target:q.clone().add(G.multiplyScalar(10)).toArray()}:Ps)}},Jl=function(){return{fov:l.fov,position:l.position.toArray(),target:u.target.toArray(),focused:Ce,navigationFloor:be,navigationY:je,navigationElevation:ze(be),visible:_e(),gap:xe,showWalls:Te,showCeilings:Ve,showSlabs:nt,cutaway:Qe,cutHeight:te,labels:ue,xray:Ne,showGrid:Ze,overview:null}},$l=function(h){if(!h||oe)return;l.fov=Number.isFinite(h.fov)?h.fov:42,l.updateProjectionMatrix();let M=Q=>Array.isArray(Q)&&Q.length===3&&Q.every(Number.isFinite);Oe(),xe=Math.max(0,Math.min(12,Number(h.gap)||0)),Te=h.showWalls!==!1,Ve=!!h.showCeilings,nt=h.showSlabs!==!1,Qe=h.cutaway!==!1,te=Number.isFinite(h.cutHeight)?Math.max(.4,Math.min(2.4,h.cutHeight)):1.15,ue=h.labels!==!1,Ne=!!h.xray,Ze=h.showGrid!==!1,ce.visible=Ze,Ce=f.has(h.focused)?h.focused:null;let E=Array.isArray(h.visible)?h.visible.filter(Q=>f.has(Q)):[...f.keys()];for(let[Q,de]of f)de.visible=E.includes(Q);if(!Ce&&!E.length&&h.visible?.length)for(let Q of f.values())Q.visible=!0;be=f.has(h.navigationFloor)?h.navigationFloor:Ce||be;let k=f.has(h.navigationFloor)&&Number.isFinite(h.navigationElevation)?ze(be)-h.navigationElevation:0;je=(Number.isFinite(h.navigationY)?h.navigationY:ze(be))+k,Me(null),ae(),M(h.position)&&M(h.target)?Re(new w().fromArray(h.position).add(new w(0,k,0)),new w().fromArray(h.target).add(new w(0,k,0)),!1):Ee(),De(!0),O("restore")},jh=function(){if(!oe){s?.dispose(),r?.(),n?.dispose(),o.domElement.removeEventListener("pointerdown",Dh,!0),o.domElement.removeEventListener("pointermove",Lh,!0),o.domElement.removeEventListener("pointerup",Nh,!0),o.domElement.removeEventListener("pointercancel",Po,!0),o.domElement.removeEventListener("lostpointercapture",Po,!0),dt(!0),o.domElement.removeEventListener("pointerdown",Et,!0),o.domElement.removeEventListener("pointermove",Pt,!0),o.domElement.removeEventListener("lostpointercapture",Ft,!0),o.domElement.removeEventListener("pointerup",Ft,!0),o.domElement.removeEventListener("pointercancel",Ft,!0),o.domElement.removeEventListener("pointerdown",Sn,!0),o.domElement.removeEventListener("pointermove",rn,!0),o.domElement.removeEventListener("pointerup",un,!0),o.domElement.removeEventListener("pointercancel",Rs,!0),o.domElement.removeEventListener("lostpointercapture",li,!0),oe=!0,In=null,Ni.dispose();for(let h of Ui.children)h.geometry.dispose();me=null,o.setAnimationLoop(null),Xh.disconnect(),o.domElement.removeEventListener("pointerdown",Uh,!0),o.domElement.removeEventListener("pointermove",Fh,!0),o.domElement.removeEventListener("pointerup",Oh,!0),o.domElement.removeEventListener("pointercancel",Pn,!0),o.domElement.removeEventListener("lostpointercapture",Pn,!0),Cs.remove(),o.domElement.removeEventListener("pointerdown",Bh,!0),o.domElement.removeEventListener("pointermove",zh,!0),o.domElement.removeEventListener("pointerup",Hh,!0),o.domElement.removeEventListener("pointercancel",Gn,!0),o.domElement.removeEventListener("lostpointercapture",Gn,!0),Zn.remove(),yt.remove(),Ts.dispose(),Fn.dispose(),A.dispose(),As.dispose(),Co.dispose();for(let h of wt.children)h.geometry.dispose();u.removeEventListener("start",Gh),u.removeEventListener("end",Wh),u.dispose();for(let[h,M]of Object.entries(kh))o.domElement.removeEventListener(h,M);o.domElement.removeEventListener("webglcontextlost",Yh),window.removeEventListener("blur",Kl);for(let h of[...g,...R])h.material.map.dispose(),h.material.dispose(),h.geometry&&!h.isSprite&&h.geometry.dispose();for(let h of D)h.geometry.dispose(),h.material.dispose();for(let h of C)h.geometry.dispose();for(let h of x.values())h.dispose();_.dispose(),ce.geometry.dispose();for(let h of Array.isArray(ce.material)?ce.material:[ce.material])h.dispose();o.dispose(),o.forceContextLoss(),o.domElement.remove(),c.clear(),y.clear()}};o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.outputColorSpace=an,o.setClearColor(1514532),o.domElement.setAttribute("aria-label","3D building editor. Alt-left drag orbits; middle or right drag pans. Alt-right drag horizontally zooms at the starting pointer: right closer, left farther. Click a floor or floor control to show and edit it alone; Shift-click adds or removes floors. F frames the selection. Click rooms and openings within the selected floor to edit them."),o.domElement.tabIndex=0,i.appendChild(o.domElement);let c=new qr,l=new dn(42,1,.05,5e3);c.add(new ho(15988735,4739939,2.2));let d=new cr(16777215,2.5);d.position.set(-40,80,-30),c.add(d);let p=new cr(12044524,.6);p.position.set(40,10,60),c.add(p);let u=new Gl(l,o.domElement),m=a;a=()=>{s?.dispose(),r?.(),n?.dispose(),u.dispose();let h=new Set,M=new Set,E=new Set;c.traverse(k=>{k.geometry&&h.add(k.geometry);for(let Q of Array.isArray(k.material)?k.material:k.material?[k.material]:[])M.add(Q),Q.map&&E.add(Q.map)});for(let k of E)k.dispose();for(let k of M)k.dispose();for(let k of h)k.dispose();c.clear(),m()},u.enableDamping=!0,u.dampingFactor=.09,u.maxPolarAngle=Math.PI-.001,u.minDistance=1,u.maxDistance=1600,u.screenSpacePanning=!0,u.mouseButtons={LEFT:null,MIDDLE:Rn.PAN,RIGHT:Rn.PAN},u.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN};let _=new Ct(1,1,1),x=new Map,f=new Map,g=[],R=[],S=[],v=[],D=[],C=[],U=(h,M=!1)=>{let E=h+(M?":xray":"");return x.has(E)||x.set(E,new fs({color:h,roughness:.88,metalness:0,transparent:M,opacity:M?.5:1,depthWrite:!M})),x.get(E)},N=e.bounds,T=(N.minX+N.maxX)/2,b=(N.minY+N.maxY)/2,F=Math.max(6,(N.maxX-N.minX)*.22),Z=e.levels.find(h=>h.id==="L0"),$=e.siteGroundZ??Z?.z??0,ee=Z?e.levels.indexOf(Z):e.levels.reduce((h,M,E)=>Math.abs(M.z-$)<Math.abs(e.levels[h].z-$)?E:h,0),B=h=>(h.primitives||[]).map(M=>{let E=window.KERN_PRIMITIVES.bounds(M);return{...E,z:h.z+E.z}}),V=h=>{let M=[...h.boxes,...h.polygons||[],...B(h)];return M.length?{minX:Math.min(...M.map(E=>E.x)),maxX:Math.max(...M.map(E=>E.x+E.w)),minY:Math.min(...M.map(E=>E.y)),maxY:Math.max(...M.map(E=>E.y+E.h))}:N},X=(h,M,E)=>{let k=qx(h,M);if(!k)return;let Q=String(h.name||h.id),de=Math.min(.32,Math.min(k.w,k.h)*.1),q=k.h>k.w*1.35,G=(q?k.h:k.w)-de*2,ie=(q?k.w:k.h)-de*2,j=Math.min(G,9),ye=Math.min(ie,2.5),Fe=64,Xe=document.createElement("canvas");Xe.width=Math.ceil(j*Fe),Xe.height=Math.ceil(ye*Fe);let He=Xe.getContext("2d");if(!He)return;let ot=Zx(Q,Xe.width-10,Xe.height-8,He);He.fillStyle="#263545",He.textAlign="center",He.textBaseline="middle",He.strokeStyle="#eef3f4",He.lineWidth=Math.max(1,ot.fontSize*.045),He.lineJoin="round",ot.lines.forEach((ct,It)=>{let Gt=Xe.height/2+(It-(ot.lines.length-1)/2)*ot.lineHeight;He.strokeText?.(ct,Xe.width/2,Gt),He.fillText(ct,Xe.width/2,Gt)});let ut=new us(Xe);ut.colorSpace=an;let st=new Ae(new Ln(j,ye),new jt({map:ut,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));st.rotation.set(-Math.PI/2,0,q?Math.PI/2:0),st.position.set(k.x+k.w/2,k.z+.006,k.y+k.h/2),st.renderOrder=2,st.userData={level:M.id,roomLabel:!0,room:h.id,name:Q,surface:k,worldWidth:j,worldHeight:ye,fontSize:ot.fontSize/Fe,lines:ot.lines},st.userData.duplicate=R.some(ct=>ct.userData.level===M.id&&ct.position.distanceTo(st.position)<.01),E.add(st),R.push(st)};for(let h=0;h<e.levels.length;h++){let M=e.levels[h],E=new ln,k=V(M);E.userData={id:M.id,rank:h-ee,z:M.z},f.set(M.id,E),c.add(E);let Q=new Map;for(let ie of[...M.boxes,...e.levels.flatMap(j=>j.id===M.id?[]:j.boxes.filter(ye=>["stair","landing"].includes(ye.kind)&&Sf(e,M,ye)).map(ye=>({...ye,contextOnly:!0})))]){let j=`${ie.color}:${ie.kind}:${!!ie.contextOnly}`;Q.has(j)||Q.set(j,[]),Q.get(j).push(ie)}for(let ie of Q.values()){let j=new nr(_,U(ie[0].color,ie[0].kind==="window"),ie.length);if(j.frustumCulled=!1,j.userData={boxes:ie,level:M.id,faded:new Set},E.add(j),S.push(j),v.push(j),ie[0].kind==="wall"){let ye=new nr(_,U(ie[0].color,!0),ie.length);ye.frustumCulled=!1,ye.renderOrder=1,ye.userData={boxes:ie,level:M.id,primary:j,xray:!0},j.userData.fadeMesh=ye,E.add(ye),S.push(ye)}}for(let ie of[...M.polygons||[],...e.levels.flatMap(j=>j.id===M.id?[]:(j.polygons||[]).filter(ye=>Sf(e,M,ye)).map(ye=>({...ye,contextOnly:!0})))]){let j=Ro(ie),ye=new Ae(j,U(ie.color,ie.kind==="window"));ye.position.y=ie.z,ye.userData={level:M.id,stair:ie.stair,sourceFloor:ie.sourceFloor,door:ie.door,contextOnly:!!ie.contextOnly,room:ie.room,kind:ie.kind,shape:ie},E.add(ye),C.push(ye)}let de=new mo(new fn(new w(k.minX,M.z+.04,k.minY),new w(k.maxX,M.z+.07,k.maxY)),8176895);de.visible=!1,de.material.depthTest=!0,de.material.transparent=!0,de.material.opacity=.95,de.userData.floorHighlight=M.id,E.add(de),D.push(de);let q=document.createElement("canvas");q.width=640,q.height=96;let G=q.getContext("2d");if(G){G.fillStyle="#202936",G.fillRect(0,0,640,96),G.strokeStyle="#465367",G.strokeRect(1,1,638,94),G.fillStyle="#e7effc",G.font="500 34px system-ui",G.fillText(`${M.id} \xB7 ${M.z>0?"+":""}${M.z.toFixed(2)} m`,18,38),G.fillStyle="#c9d4e4",G.font="30px system-ui",G.fillText(String(M.name).slice(0,40),18,77,604);let ie=new us(q);ie.colorSpace=an;let j=new Kr(new tr({map:ie,depthTest:!0,depthWrite:!1}));j.position.set(N.minX-F*.65-1,M.z+.2,(k.minY+k.maxY)/2),j.scale.set(F,F*96/640,1),j.userData={level:M.id,floorLabel:!0,labelWidth:230,labelRatio:96/640},E.add(j),g.push(j);let ye=new Xt(new xt().setFromPoints([new w(j.position.x+F/2,M.z+.2,j.position.z),new w(k.minX,M.z+.07,j.position.z)]),new _n({color:8176895,depthTest:!0,transparent:!0,opacity:.9}));ye.visible=!1,ye.userData.floorLeader=M.id,E.add(ye),D.push(ye)}for(let ie of M.rooms||[])X(ie,M,E);for(let ie of M.annotations||[]){let j=String(ie.text||""),ye=ie.fontSize||.45;if(!j)continue;let Fe=Math.min(30,Math.max(ye,j.length*ye*.58)),Xe=ye*1.3,He=document.createElement("canvas");He.width=Math.ceil(Fe*64),He.height=Math.ceil(Xe*64);let ot=He.getContext("2d");if(!ot)continue;ot.font=`${ye*64}px system-ui,Segoe UI,sans-serif`,ot.fillStyle="#53686d",ot.textAlign="center",ot.textBaseline="middle",ot.fillText(j,He.width/2,He.height/2,He.width);let ut=new us(He);ut.colorSpace=an;let st=new Ae(new Ln(Fe,Xe),new jt({map:ut,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1})),ct=M.rooms.find(It=>It.id===ie.sourceRoom)||M.rooms.find(It=>ie.x>=It.x&&ie.x<=It.x+It.w&&ie.y>=It.y&&ie.y<=It.y+It.h);st.rotation.x=-Math.PI/2,st.position.set(ie.x,(ct?.z??M.z)+.008,ie.y),st.renderOrder=2,st.userData={level:M.id,annotationLabel:!0,annotation:ie.id,name:j},E.add(st),R.push(st)}}let z=Math.max(N.maxX-N.minX,N.maxY-N.minY,15)*1.35,ce=new po(z,Math.min(100,Math.ceil(z)),6781842,3160648);ce.position.set(T,$,b),ce.userData.groundDatum=$,c.add(ce),ce.renderOrder=-10;for(let h of Array.isArray(ce.material)?ce.material:[ce.material])h.transparent=!1,h.opacity=1,h.depthWrite=!1;let xe=0,oe=!1,Te=!0,Ve=!1,nt=!0,Qe=!0,te=1.15,ue=!0,Ne=!1,Ze=!0,ke=null,Ce=null,gt=[],L="",fe=null,me=null,le=!1,ge="",Ue=0,pe=!1,be=f.has(t.activeFloor)?t.activeFloor:Z?.id||e.levels[ee]?.id,je=f.get(be)?.userData.z||0,ze=h=>{let M=f.get(h);return M?M.userData.z+M.userData.rank*xe:je},I=window.matchMedia?.("(prefers-reduced-motion: reduce)"),y=new Set,Y=new Xn,ne=new Se,_e=()=>[...f].filter(([,h])=>h.visible).map(([h])=>h),P=new Set((t.editableFloors||[]).filter(h=>f.has(h))),O=(h="navigation")=>t.onVisibilityChanged?.(_e(),Ce,h),H=null,Le=null,lt=null,bt=null,he=null,Ut=null;r=window.KERN_DRAG_AXES?.register(()=>he&&(!he.edge||he.edge==="elevate"||he.edge.startsWith("route-"))?he:null,()=>Pn(),h=>({space:"3d",origin:h.feedbackOrigin,supported:h.edge==="elevate"||h.edge?.startsWith("route-height")?["y"]:["x","z"]}));let wt=new ln;c.add(wt),s=vf({scene:c,camera:l,canvas:o.domElement,container:i,manager:window.KERN_DRAG_AXES,owns:h=>h===he||n?.ownsGesture(h)});let yt=document.createElement("div");yt.style.cssText="position:absolute;left:18px;bottom:18px;padding:8px 12px;background:#172b37;color:#e7b16b;pointer-events:none;display:none",i.append(yt);let Fn=new jt({color:15184235,transparent:!0,opacity:.65,depthTest:!1}),Ts=new ps({color:15185774,dashSize:.18,gapSize:.12,depthTest:!1}),vr=null,Zn=document.createElement("div");Zn.dataset.selectionDimensions="true",Zn.style.cssText="position:absolute;pointer-events:none;display:none;padding:4px 7px;border-radius:4px;background:#172b37dd;color:#e7b76e;font:13px system-ui",i.append(Zn);let Co=new jt({color:11184810,transparent:!0,opacity:.1,depthTest:!1,depthWrite:!1,side:hn}),As=new _n({color:5493465,depthTest:!1}),A=new jt({color:5941759,depthTest:!1}),et=null,rt=null,it=0,Et=h=>{if(n?.busy()||window.KERN_MAX_PASSAGE_UI?.altConnectIntent(h)||kt||!h.altKey||he||$e||![0,1,2].includes(h.button)||h.button===0&&bt&&ht==="select"&&(qe(h,bt),Y.intersectObjects(wt.children,!1).some(k=>["nw","ne","se","sw"].includes(k.object.userData.edge))))return;if(et=h.pointerId,fe=null,y.clear(),Gn(),Oe(),it=performance.now()+500,u.mouseButtons.LEFT=Rn.ROTATE,u.mouseButtons.RIGHT=Rn.PAN,o.domElement.style.cursor=h.button===2?"ew-resize":"grabbing",h.__viewNavigation=!0,h.preventDefault(),h.button!==2){u.enabled=!0;return}Re(l.position.clone(),u.target.clone(),!1),vn(h);let M=l.getWorldDirection(new w),E=lt?.point.clone()||Y.ray.intersectPlane(new $t().setFromNormalAndCoplanarPoint(M,u.target),new w)||u.target.clone();rt={x:h.clientX,anchor:E,position:l.position.clone(),target:u.target.clone(),distance:l.position.distanceTo(u.target)},u.enabled=!1,o.domElement.setPointerCapture(h.pointerId),h.stopImmediatePropagation()},Pt=h=>{if(et!==h.pointerId||!rt)return;h.__viewNavigation=!0,h.preventDefault(),h.stopImmediatePropagation();let M=rt,E=Nn.clamp(M.distance*Math.exp(-(h.clientX-M.x)*.01),u.minDistance,u.maxDistance)/M.distance;Re(M.position.clone().sub(M.anchor).multiplyScalar(E).add(M.anchor),M.target.clone().sub(M.anchor).multiplyScalar(E).add(M.anchor),!1),Er()},Ft=h=>{if(et!==h.pointerId)return;let M=!!rt;h.__viewNavigation=!0,et=null,rt=null,it=performance.now()+400,u.mouseButtons.LEFT=null,u.mouseButtons.RIGHT=Rn.PAN,u.enabled=!kt,window.KERN_TRANSFORM?.syncCursor(),o.domElement.style.cursor="",M&&(h.preventDefault(),h.stopImmediatePropagation(),o.domElement.hasPointerCapture(h.pointerId)&&o.domElement.releasePointerCapture(h.pointerId))};o.domElement.addEventListener("pointerdown",Et,!0),o.domElement.addEventListener("pointermove",Pt,!0),o.domElement.addEventListener("pointerup",Ft,!0),o.domElement.addEventListener("pointercancel",Ft,!0),o.domElement.addEventListener("lostpointercapture",Ft,!0);let ht="select",$e=null,tt=new ln;tt.userData.authorPreview=!0,c.add(tt);let Sn=h=>{if(et===h.pointerId||h.__viewNavigation||kt||ht==="select"||h.button!==0)return;if(h.preventDefault(),h.stopImmediatePropagation(),ht==="bridge"){let q=Li(h);q&&window.KERN_BRIDGE_UI?.click(q),Tt(),yt.style.display="none";return}if(["door","connect","disconnect"].includes(ht)){let q=Ht(h);if(!q)return;_t(q.floor,{preserveEditing:!0}),$e={connection:!0,pointerId:h.pointerId,floor:q.floor,begin:window.KERN_CONNECTION_3D.begin(ht,q),last:q,clientX:h.clientX,clientY:h.clientY},u.enabled=!1,o.domElement.setPointerCapture(h.pointerId);return}if(!window.KERN_AUTHORING_3D||(vn(h),lt?.floor&&!(ht==="stair-route"&&window.KERN_ROUTE_UI?.getDraft().length)&&_t(lt.floor,{preserveEditing:!0}),!Ce))return;let M=e.levels.find(q=>q.id===(lt?.floor||Ce)),E=M.rooms.find(q=>q.id===lt?.room)||(bt?.isFloor?null:bt),k=(E?.z??M.z)+f.get(M.id).position.y,Q=Kn(h,k);if(!Q)return;if(ht==="stair-route"){window.KERN_ROUTE_UI?.addPoint(Q,h,E?.id,M.id);return}let de=window.KERN_AUTHORING_3D.begin(ht,lt?.floor||Ce,Q,E?.id,window.KERN_AUTHORING_3D.width());if(de.error){Qt(de);return}$e={pointerId:h.pointerId,z:k,begin:de,floor:Ce},u.enabled=!1,o.domElement.setPointerCapture(h.pointerId)},rn=h=>{if($e?.connection){if(h.pointerId!==$e.pointerId)return;h.preventDefault(),h.stopImmediatePropagation(),$e.last=Ht(h,$e.floor)||$e.last,$e.moved=Math.hypot(h.clientX-$e.clientX,h.clientY-$e.clientY)>5,En(window.KERN_CONNECTION_3D.preview(ht,$e.last,$e.moved?$e.begin.hit:$e.begin.pending));return}if(!$e){if(!kt&&et===null&&ht==="bridge"){let E=Li(h),k=E&&window.KERN_BRIDGE_UI?.preview(E);k?Qt(k):(Tt(),yt.style.display="none");return}if(!kt&&et===null&&["door","connect","disconnect"].includes(ht)){let E=Ht(h);E&&En(window.KERN_CONNECTION_3D.preview(ht,E));return}if(!kt&&et===null&&Ce&&["edge-steps","stair-route"].includes(ht)){vn(h);let E=e.levels.find(q=>q.id===(lt?.floor||Ce)),k=E.rooms.find(q=>q.id===lt?.room),Q=(k?.z??E.z)+f.get(E.id).position.y,de=Kn(h,Q);if(Tt(),!de)return;if(ht==="edge-steps"){let q=window.KERN_AUTHORING_3D.begin("edge-steps",Ce,de,k?.id,window.KERN_AUTHORING_3D.width());if(!q.error){let G=new Xt(new xt().setFromPoints([q.edge.a,q.edge.b].map(ie=>new w(ie[0],Q+.1,ie[1]))),As);G.renderOrder=18,tt.add(G)}}else{let q=window.KERN_ROUTE_UI?.preview(de,h,k?.id,E.id);if(q){q.detail&&Qt(q);let G=window.snapSize?.()||.25,ie=new Ae(new Ln(G,G),Co);ie.rotation.x=-Math.PI/2,ie.position.set(q.point[0],Q+.025,q.point[1]),ie.renderOrder=17,tt.add(ie);let j=new Ae(new Hn(.07,10,8),A);j.position.set(q.point[0],Q+.1,q.point[1]),j.renderOrder=19,tt.add(j)}}}return}if(h.pointerId!==$e.pointerId)return;if(h.preventDefault(),h.stopImmediatePropagation(),$e.floor!==Ce){dt();return}let M=Kn(h,$e.z);M&&($e.next=window.KERN_AUTHORING_3D.candidate($e.begin,M,h.ctrlKey),Qt($e.next))},un=h=>{if(!$e||h.pointerId!==$e.pointerId)return;if(h.preventDefault(),h.stopImmediatePropagation(),$e.connection){let E=$e;$e=null,Tt(),yt.style.display="none",u.enabled=!0,o.domElement.hasPointerCapture(h.pointerId)&&o.domElement.releasePointerCapture(h.pointerId),window.KERN_CONNECTION_3D.finish(E.begin,E.last,E.moved);return}let M=$e.next;dt(),M&&!M.error&&(dt(!0),window.KERN_AUTHORING_3D.finish(M))};o.domElement.addEventListener("pointerdown",Sn,!0),o.domElement.addEventListener("pointermove",rn,!0),o.domElement.addEventListener("pointerup",un,!0);let Rs=h=>{!n?.busy()&&(!$e||$e.pointerId===h.pointerId)&&dt(!0)};o.domElement.addEventListener("pointercancel",Rs,!0);let li=h=>{$e?.pointerId===h.pointerId&&dt()};o.domElement.addEventListener("lostpointercapture",li,!0);let Dh=h=>{et===h.pointerId||h.__viewNavigation||n?.down(h)&&Re(l.position.clone(),u.target.clone(),!1)},Lh=h=>n?.move(h),Nh=h=>n?.up(h),Po=h=>{(n?.cancel(h.pointerId)||n?.dragging())&&(h.preventDefault(),h.stopImmediatePropagation())};o.domElement.addEventListener("pointerdown",Dh,!0),o.domElement.addEventListener("pointermove",Lh,!0),o.domElement.addEventListener("pointerup",Nh,!0),o.domElement.addEventListener("pointercancel",Po,!0),o.domElement.addEventListener("lostpointercapture",Po,!0);let Uh=h=>{if(he){h.preventDefault(),h.stopImmediatePropagation();return}if(et===h.pointerId||h.__viewNavigation||kt||h.button!==0||!bt)return;let M=qe(h,bt),E=Y.intersectObjects(wt.children,!1).find(Q=>Q.object.userData.edge);if(!E||(Number.isFinite(E.object.userData.routeZ)&&(M=qe(h,{...bt,z:E.object.userData.routeZ+(E.object.userData.displayOffset??f.get(bt.floor).position.y)-f.get(bt.floor).position.y})||E.point.clone()),M||(M=E.point.clone()),vn(h),E.object.userData.edge?.startsWith("route-")&&window.KERN_ROUTE_UI?.selectPoint(Number(E.object.userData.edge.split("-")[2])),window.KERN_ROTATE?.active()&&(!E||!window.KERN_ROTATE.eligibleRoom(bt))))return;let k=null;if(E?.object.userData.edge?.startsWith("rotate-")){let Q=Number(E.object.userData.edge.slice(7));if(k=window.KERN_ROTATE.pivotFor(bt),!k||k.index===Q){window.KERN_ROTATE.choosePivot(bt,"rooms",Q),Ye(bt),h.preventDefault(),h.stopImmediatePropagation();return}}he={feedbackOrigin:E.object.getWorldPosition(new w),rotationPivot:k,start:M.clone(),original:JSON.parse(JSON.stringify(bt)),next:JSON.parse(JSON.stringify(bt)),routeZ:E?.object.userData.routeZ,planeZ:Number.isFinite(E?.object.userData.routeZ)?E.object.userData.routeZ+(E.object.userData.displayOffset??f.get(bt.floor).position.y)-f.get(bt.floor).position.y:bt.z,edge:E?.object.userData.edge==="move"?null:E?.object.userData.edge,clientY:h.clientY,baseHeight:window.KERN_ELEVATION_UI?.handleZ(bt.floor,bt.id)??bt.z,baseGroupY:f.get(bt.floor).position.y,pointerId:h.pointerId},bt.routeStair&&he.edge&&/^[nesw]{1,2}$/.test(he.edge)&&(he.original=window.KERN_ROUTE_STAIRS.editFrame(bt),he.next=JSON.parse(JSON.stringify(he.original))),window.KERN_DRAG_AXES?.begin(he),u.enabled=!1,h.preventDefault(),h.stopImmediatePropagation(),o.domElement.setPointerCapture(h.pointerId)},Fh=h=>{if(!he||he.pointerId!==h.pointerId)return;let M=qe(h,{...he.original,z:he.planeZ??he.original.z})||(he.edge==="elevate"||he.edge?.startsWith("route-height")?he.start:null);if(!M)return;if(he.edge?.startsWith("route-landing-")){let G=he.original,ie=JSON.parse(JSON.stringify(G)),j=he.edge.split("-"),ye=Number(j[2]),Fe=Number(j[3]),Xe=ie.routeStair.nodes[ye].landing[Fe],He=window.KERN_ROUTE_STAIRS.point(G,Xe),ot=h.ctrlKey?0:window.snapSize?.()??.25,ut=He[0]+M.x-he.start.x,st=He[1]+M.z-he.start.z,ct=window.KERN_DRAG_AXES?.plan(he,{x:(ot?Math.round(ut/ot)*ot:ut)-He[0],y:(ot?Math.round(st/ot)*ot:st)-He[1]})||{x:ut-He[0],y:st-He[1]};Object.assign(Xe,window.KERN_ROUTE_STAIRS.local(G,[He[0]+ct.x,He[1]+ct.y])),window.KERN_ROUTE_STAIRS.simplePolygon(ie.routeStair.nodes[ye].landing.map(Gt=>window.KERN_ROUTE_STAIRS.point(ie,Gt)))&&(he.next=ie,Ye(ie));let It=window.KERN_ROUTE_STAIRS.point(he.next,he.next.routeStair.nodes[ye].landing[Fe]);window.KERN_DRAG_AXES?.acceptPlan(he,{x:It[0]-He[0],y:It[1]-He[1]}),h.preventDefault(),h.stopImmediatePropagation();return}if(he.edge?.startsWith("route-")){let G=he.original,ie=JSON.parse(JSON.stringify(G)),j=ie.routeStair,ye=Number(he.edge.split("-").at(-1)),Fe=j.nodes[ye];if(he.edge.startsWith("route-height")){let He=2*l.position.distanceTo(new w(G.x+G.w/2,G.z+he.baseGroupY,G.y+G.h/2))*Math.tan(l.fov*Math.PI/360)/Math.max(1,o.domElement.getBoundingClientRect().height),ot=he.routeZ+(he.clientY-h.clientY)*He,ut=h.ctrlKey?ot:Math.round(ot*4)/4,st=window.KERN_DRAG_AXES?.apply(he,{y:ut-he.routeZ}),ct=st?he.routeZ+st.y:ut;Math.abs(ct-he.routeZ)>1e-9&&window.KERN_ROUTE_STAIRS.setHeight(ie,ye,ct,window.kernPlanner?.getPlan())}else{let He=window.KERN_ROUTE_STAIRS.point(G,Fe),ot=h.ctrlKey?0:window.snapSize?.()??.25,ut=He[0]+M.x-he.start.x,st=He[1]+M.z-he.start.z,ct=window.KERN_ROUTE_STAIRS.snapNode(ie,ye,[ut,st],ot,h.ctrlKey,h.shiftKey),It=window.KERN_DRAG_AXES?.plan(he,{x:ct[0]-He[0],y:ct[1]-He[1]});It&&(ct[0]=He[0]+It.x,ct[1]=He[1]+It.y),Math.hypot(ct[0]-He[0],ct[1]-He[1])>1e-9&&(window.KERN_ROUTE_STAIRS.moveNode(ie,ye,ct,window.kernPlanner?.getPlan()),window.KERN_ROUTE_UI?.attachEndpoint(ie,ye,ct))}he.next=ie,Ye(ie);let Xe=window.kernPlanner?.getPlan();if(he.edge.startsWith("route-height"))window.KERN_DRAG_AXES?.accept(he,{y:window.KERN_ROUTE_STAIRS.elevations(ie,Xe)[ye]-he.routeZ});else{let He=window.KERN_ROUTE_STAIRS.point(G,G.routeStair.nodes[ye]),ot=window.KERN_ROUTE_STAIRS.point(ie,ie.routeStair.nodes[ye]);window.KERN_DRAG_AXES?.acceptPlan(he,{x:ot[0]-He[0],y:ot[1]-He[1]})}if(Xe){let He=Xe.floors[G.floor];if(He?.rooms.some(ot=>ot.id===G.id)){let ot={...Xe,floors:{...Xe.floors,[G.floor]:{...He,rooms:He.rooms.map(st=>st.id===G.id?ie:st)}}},ut=window.KERN_ROUTE_STAIRS.build(ot,G.floor,G.id);Qt({detail:ut,fid:G.floor,summary:ut.warnings[0]?.text||"Editable stair route"})}}h.preventDefault(),h.stopImmediatePropagation();return}if(he.edge==="elevate"){let G=he.original,ie=2*l.position.distanceTo(new w(G.x+G.w/2,G.z+he.baseGroupY,G.y+G.h/2))*Math.tan(l.fov*Math.PI/360)/Math.max(1,o.domElement.getBoundingClientRect().height),j=he.baseHeight+(he.clientY-h.clientY)*ie,ye=h.ctrlKey?0:.25,Fe=Math.max(-150,Math.min(150,ye?Math.round(j/ye)*ye:j)),Xe=window.KERN_DRAG_AXES?.apply(he,{y:Fe-he.baseHeight}),He=Xe?he.baseHeight+Xe.y:Fe;if(he.next={...G,z:He,...Math.abs(He-he.baseHeight)>1e-9?{__elevation:!0}:{}},yt.style.display="block",yt.style.top="auto",yt.style.bottom="18px",yt.style.left="18px",yt.textContent=(G.isFloor?"Floor":"Surface")+" "+He.toFixed(2)+" m \xB7 "+(h.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"),f.get(G.floor).position.y=he.baseGroupY,Ye(he.next),G.isFloor)f.get(G.floor).position.y=he.baseGroupY+He-G.z;else{let Sr=window.KERN_ELEVATION_UI?.preview(G.floor,G.id,He),$n=Sr&&window.KERN_ELEVATIONS?.build(Sr,G.floor,G.id),Pf=$n?Mf($n):[{x:G.x,y:G.y,w:G.w,h:G.h,z:He-.18,height:.18}];for(let pn of Pf){let es,ts;if(pn.polygon)es=Ro(pn),ts=new Ae(es,Fn),ts.position.y=pn.z+he.baseGroupY;else if(!$n&&G.shape){let If=new Ri(window.KERN_SHAPES.points(G).map(eu=>new Se(eu[0],-eu[1])));es=new ar(If,{depth:pn.height,bevelEnabled:!1,steps:1}),es.rotateX(-Math.PI/2),ts=new Ae(es,Fn),ts.position.y=pn.z+he.baseGroupY}else es=new Ct(pn.w,pn.height,pn.h),ts=new Ae(es,Fn),ts.position.set(pn.x+pn.w/2,pn.z+pn.height/2+he.baseGroupY,pn.y+pn.h/2);wt.add(ts)}$n&&(yt.textContent=He.toFixed(2)+" m \xB7 "+($n.ramp?"Ramp \xB7 "+Math.max(...$n.flights.map(pn=>pn.gradePercent||0)).toFixed(1)+"% grade":$n.segments[0].risers+" rises \xD7 "+($n.metrics.riserMax*100).toFixed(1)+" cm")+" \xB7 "+(h.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"))}let ot=G.x-.25,ut=G.y+G.h+.25,st=he.baseHeight+he.baseGroupY,ct=He+he.baseGroupY,It=[new w(ot,st,ut),new w(ot,ct,ut)],Gt=new Xt(new xt().setFromPoints(It),Ts);Gt.computeLineDistances(),Gt.renderOrder=16,wt.add(Gt);for(let Sr of[st,ct]){let $n=new Xt(new xt().setFromPoints([new w(ot-.18,Sr,ut),new w(ot+.18,Sr,ut)]),A);$n.renderOrder=16,wt.add($n)}let Jn=new w(ot,(st+ct)/2,ut).project(l),Do=o.domElement.getBoundingClientRect(),Qh=He-he.baseHeight;yt.style.bottom="auto",yt.style.left=Math.min(Math.max(8,(Jn.x+1)*Do.width/2+12),Math.max(8,Do.width-260))+"px",yt.style.top=Math.min(Math.max(8,(1-Jn.y)*Do.height/2),Math.max(8,Do.height-60))+"px",yt.textContent=(Qh>0?"+":"")+Qh.toFixed(2)+" m \xB7 "+yt.textContent,h.preventDefault(),h.stopImmediatePropagation();return}let E=he.original,k=h.ctrlKey?0:window.snapSize?.()??.5,Q=k?Math.round((M.x-he.start.x)/k)*k:M.x-he.start.x,de=k?Math.round((M.z-he.start.z)/k)*k:M.z-he.start.z,q={...E};if(he.edge?.startsWith("rotate-")){let G=he.rotationPivot||{x:E.x+E.w/2,y:E.y+E.h/2},ie=Math.atan2(he.start.z-G.y,he.start.x-G.x),j=window.KERN_ROTATE.delta(E,(Math.atan2(M.z-G.y,M.x-G.x)-ie)*180/Math.PI,h.shiftKey);window.KERN_SHAPES.rotate(q,j,G),he.rotationFeedback={center:G,start:ie,degrees:j,cursor:M.clone()}}else if(he.edge)he.edge.includes("e")&&(q.w=Math.max(1,E.w+Q)),he.edge.includes("s")&&(q.h=Math.max(1,E.h+de)),he.edge.includes("w")&&(q.x=Math.min(E.x+E.w-1,E.x+Q),q.w=E.x+E.w-q.x),he.edge.includes("n")&&(q.y=Math.min(E.y+E.h-1,E.y+de),q.h=E.y+E.h-q.y);else{q.x+=M.x-he.start.x,q.y+=M.z-he.start.z;let G=18*l.position.distanceTo(M)*Math.tan(l.fov*Math.PI/360)/Math.max(1,o.domElement.getBoundingClientRect().height),ie=h.ctrlKey&&h.shiftKey&&!h.altKey&&window.KERN_ROOM_SNAP?.translation(q,e.levels.find(j=>j.id===E.floor).rooms,new Set([E.id]),G);he.snap=ie||null,ie?(q.x+=ie.dx,q.y+=ie.dy):h.ctrlKey||(q.x=E.x+Q,q.y=E.y+de)}if(he.edge&&!he.edge.startsWith("rotate-")&&(h.shiftKey&&!h.ctrlKey||h.altKey)&&window.KERN_TRANSFORM&&Object.assign(q,window.KERN_TRANSFORM.resize(E,he.edge,Q,de,{...h,shiftKey:h.shiftKey&&!h.ctrlKey,altKey:h.altKey})),he.edge&&!he.edge.startsWith("rotate-")&&h.shiftKey&&h.ctrlKey&&!h.altKey){let G=he.edge,ie={x:E.x+(G.includes("e")?E.w:0)+M.x-he.start.x,y:E.y+(G.includes("s")?E.h:0)+M.z-he.start.z},j=18*l.position.distanceTo(M)*Math.tan(l.fov*Math.PI/360)/Math.max(1,o.domElement.getBoundingClientRect().height),ye=window.KERN_ROOM_SNAP?.point(ie,e.levels.find(Fe=>Fe.id===E.floor).rooms,new Set([E.id]),j);he.snap=ye||null,ye&&(G.includes("e")&&(q.w=Math.max(1,ye.x-E.x)),G.includes("s")&&(q.h=Math.max(1,ye.y-E.y)),G.includes("w")&&(q.x=Math.min(ye.x,E.x+E.w-1),q.w=E.x+E.w-q.x),G.includes("n")&&(q.y=Math.min(ye.y,E.y+E.h-1),q.h=E.y+E.h-q.y))}if(E.shape&&he.edge&&!he.edge.startsWith("rotate-")&&window.KERN_TRANSFORM?.orientedResize&&Object.assign(q,window.KERN_TRANSFORM.orientedResize(E,he.edge,M.x-he.start.x,M.z-he.start.z,h)),!he.edge){let G=window.KERN_DRAG_AXES?.plan(he,{x:q.x-E.x,y:q.y-E.y});G&&(q.x=E.x+G.x,q.y=E.y+G.y)}if(he.next=q,Ye(q),he.rotationFeedback){let G=he.rotationFeedback,ie=G.center,j=Math.hypot(G.cursor.x-ie.x,G.cursor.z-ie.y),ye=Math.min(j,6)*.8,Fe=G.start+G.degrees*Math.PI/180,Xe=q.z+he.baseGroupY+.12,He=[];for(let st=0,ct=Math.max(2,Math.min(160,Math.ceil(Math.abs(G.degrees)/5)));st<=ct;st++){let It=G.start+(Fe-G.start)*st/ct;He.push(new w(ie.x+Math.cos(It)*ye,Xe,ie.y+Math.sin(It)*ye))}let ot=[new w(ie.x+Math.cos(G.start)*j,Xe,ie.y+Math.sin(G.start)*j),new w(ie.x,Xe,ie.y),new w(ie.x+Math.cos(Fe)*j,Xe,ie.y+Math.sin(Fe)*j)];for(let st of[He,ot]){let ct=new Xt(new xt().setFromPoints(st),Ts);ct.computeLineDistances(),ct.renderOrder=15,wt.add(ct)}let ut=o.domElement.getBoundingClientRect();yt.style.display="block",yt.style.bottom="auto",yt.style.left=Math.min(Math.max(8,h.clientX-ut.left+16),Math.max(8,ut.width-130))+"px",yt.style.top=Math.max(8,h.clientY-ut.top-38)+"px",yt.textContent=(G.degrees>0?"+":"")+G.degrees.toFixed(1)+"\xB0"}if(he.snap)for(let G of he.snap.guides?.length?he.snap.guides:[he.snap]){let ie=q.z+f.get(q.floor).position.y+.1,j=G.edge?[G.edge.a,G.edge.b]:[[G.x-.2,G.y],[G.x+.2,G.y],[G.x,G.y],[G.x,G.y-.2],[G.x,G.y+.2]],ye=new Xt(new xt().setFromPoints(j.map(Fe=>new w(Fe[0],ie,Fe[1]))),As);ye.renderOrder=12,wt.add(ye)}h.preventDefault(),h.stopImmediatePropagation()},Oh=h=>{if(!he||he.pointerId!==h.pointerId)return;let M=he;he=null,window.KERN_DRAG_AXES?.refresh?.(),Tt(),f.get(M.original.floor).position.y=M.baseGroupY,yt.style.display="none",u.enabled=!0,h.preventDefault(),h.stopImmediatePropagation(),o.domElement.hasPointerCapture(h.pointerId)&&o.domElement.releasePointerCapture(h.pointerId),M.next.__elevation||["x","y","w","h"].some(E=>M.next[E]!==M.original[E])||JSON.stringify(M.next.shape)!==JSON.stringify(M.original.shape)||JSON.stringify(M.next.routeStair)!==JSON.stringify(M.original.routeStair)?t.onRoomEdit?.(M.original.floor,M.original.id,M.next):M.edge?.startsWith("rotate-")&&(window.KERN_ROTATE.choosePivot(M.original,"rooms",Number(M.edge.slice(7))),Ye(M.original))},Pn=h=>{if(he&&h?.pointerId!==void 0&&he.pointerId!==h.pointerId)return;let M=he;he=null,window.KERN_DRAG_AXES?.refresh?.(),Tt(),M&&(f.get(M.original.floor).position.y=M.baseGroupY),yt.style.display="none",u.enabled=!kt,M&&o.domElement.hasPointerCapture?.(M.pointerId)&&o.domElement.releasePointerCapture(M.pointerId),bt&&Ye(bt)};o.domElement.addEventListener("pointerdown",Uh,!0),o.domElement.addEventListener("pointermove",Fh,!0),o.domElement.addEventListener("pointerup",Oh,!0),o.domElement.addEventListener("pointercancel",Pn,!0),o.domElement.addEventListener("lostpointercapture",Pn,!0);let bn=null,Cs=document.createElement("div");Cs.style.cssText="position:absolute;border:1px solid #79b8ff;background:#79b8ff20;pointer-events:none;display:none;z-index:25",i.append(Cs);let Gn=()=>{bn=null,Cs.style.display="none"},Bh=h=>{kt||et!==null||h.altKey||h.button!==0||he||ht!=="select"||(bn={id:h.pointerId,x:h.clientX,y:h.clientY,shift:h.shiftKey,subtract:h.ctrlKey||h.metaKey,previous:Ut?.ids||[]})},zh=h=>{if(!bn||bn.id!==h.pointerId||Math.hypot(h.clientX-bn.x,h.clientY-bn.y)<5)return;let M=o.domElement.getBoundingClientRect();bn.moved=!0,Cs.style.display="block",Object.assign(Cs.style,{left:Math.min(h.clientX,bn.x)-M.left+"px",top:Math.min(h.clientY,bn.y)-M.top+"px",width:Math.abs(h.clientX-bn.x)+"px",height:Math.abs(h.clientY-bn.y)+"px"})},Hh=h=>{if(!bn||bn.id!==h.pointerId)return;let M=bn;if(Gn(),!M.moved)return;h.preventDefault(),y.clear(),fe=null;let E=o.domElement.getBoundingClientRect(),k=Math.min(M.x,h.clientX),Q=Math.max(M.x,h.clientX),de=Math.min(M.y,h.clientY),q=Math.max(M.y,h.clientY),G=Ce||be,ie=e.levels.find(Fe=>Fe.id===G);if(!ie)return;l.updateMatrixWorld(!0);let j=ie.rooms.filter(Fe=>{let Xe=(window.KERN_SHAPES?.points(Fe)||[[Fe.x,Fe.y],[Fe.x+Fe.w,Fe.y],[Fe.x+Fe.w,Fe.y+Fe.h],[Fe.x,Fe.y+Fe.h]]).flatMap(ut=>[Fe.z,Fe.z+(Fe.height||0)].map(st=>new w(ut[0],st+f.get(G).position.y,ut[1]).project(l))).filter(ut=>ut.z>=-1&&ut.z<=1);if(!Xe.length)return!1;let He=Xe.map(ut=>(ut.x+1)*E.width/2+E.left),ot=Xe.map(ut=>(1-ut.y)*E.height/2+E.top);return Math.min(...He)<=Q&&Math.max(...He)>=k&&Math.min(...ot)<=q&&Math.max(...ot)>=de}).map(Fe=>Fe.id),ye=M.subtract?M.previous.filter(Fe=>!j.includes(Fe)):M.shift?[...new Set([...M.previous,...j])]:j;Ce||_t(G,{preserveEditing:!0}),se(G,ye),t.onRoomsSelect?.(G,ye)};o.domElement.addEventListener("pointerdown",Bh,!0),o.domElement.addEventListener("pointermove",zh,!0),o.domElement.addEventListener("pointerup",Hh,!0),o.domElement.addEventListener("pointercancel",Gn,!0),o.domElement.addEventListener("lostpointercapture",Gn,!0);let bf=h=>{kt||et===h.pointerId||h.__viewNavigation||(y.add(h.pointerId),y.size>1?fe=null:fe=h.button===0?{id:h.pointerId,x:h.clientX,y:h.clientY,moved:!1}:null)},wf=h=>{if(!kt){if(fe&&Math.hypot(h.clientX-fe.x,h.clientY-fe.y)>5&&(fe.moved=!0),y.size||h.buttons){o.domElement.title="",Me(null);return}Me(vn(h))}},Tf=h=>{if(kt||h.__viewNavigation)return;let M=fe&&h.pointerId===fe.id&&!fe.moved&&Math.hypot(h.clientX-fe.x,h.clientY-fe.y)<=5&&y.size===1;if(y.delete(h.pointerId),fe=null,!M)return;let E=vn(h);if(!E)return;if(h.shiftKey){if(!P.has(E))return;lt?.door?t.onDoorSelect?.(E,lt.door,{additive:!0}):lt?.room&&t.onRoomSelect?.(E,lt.room,{additive:!0});return}if(t.onFloorSelect){let Q=Ce===E&&P.size===1&&P.has(E)&&!lt?.floorSurface;t.onFloorSelect(E,{additive:!1}),Q&&(lt?.door?t.onDoorSelect?.(E,lt.door):lt?.room&&t.onRoomSelect?.(E,lt.room));return}lt?.floorSurface||lt?.roomLabel&&(Ce!==E||!P.has(E))?_t(E):(_t(E,{preserveEditing:!!lt?.room||!!lt?.door}),lt?.door?t.onDoorSelect?.(E,lt.door):lt?.room&&t.onRoomSelect?.(E,lt.room))},Kl=()=>{n?.cancel(),Gn(),et=null,rt=null,o.domElement.style.cursor="",u.mouseButtons.LEFT=null,u.mouseButtons.RIGHT=Rn.PAN,dt(!0),Pn(),y.clear(),fe=null,le=!1,Oe(),Me(null)};window.addEventListener("blur",Kl);let Af=a;a=()=>{window.removeEventListener("blur",Kl),Af()};let kh={pointerdown:bf,pointermove:wf,pointerup:Tf,pointercancel:h=>{y.delete(h.pointerId),fe=null,Me(null)},pointerleave:()=>{y.size||(o.domElement.title="",Me(null))},keydown:h=>{if(!window.KERN_PRIMITIVE_UI?.handleKey?.(h)){if(h.key==="Escape"&&bn){Gn(),fe=null,y.clear(),h.preventDefault(),h.stopPropagation();return}if(h.key==="Escape"&&($e||ht!=="select")){h.preventDefault(),h.stopImmediatePropagation(),dt(!0);return}if(h.key==="Escape"&&he){h.preventDefault(),h.stopImmediatePropagation(),Pn();return}h.key==="Escape"&&Ce?(h.preventDefault(),h.stopPropagation(),ft()):Ce&&["ArrowUp","ArrowDown"].includes(h.key)&&(h.preventDefault(),h.stopPropagation(),yr(h.key==="ArrowUp"?1:-1))}},contextmenu:h=>{if(h.preventDefault(),kt||h.altKey||performance.now()<it)return;vn(h);let M=lt;if(!M)return;vn(h,{physicalOnly:!0});let E=lt,k=E&&["slab","landing","stair"].includes(E.kind)&&E.normal?.y>.2?{x:E.point.x,y:E.point.z,z:E.point.y-(f.get(E.displayFloor)?.position.y||0),floor:["stair","landing"].includes(E.kind)?void 0:E.floor}:null;t.onContext?.({floor:M.floor,room:M.room,x:M.point.x,y:M.point.z,z:e.levels.find(Q=>Q.id===M.floor)?.rooms.find(Q=>Q.id===M.room)?.z??e.levels.find(Q=>Q.id===M.floor)?.z??M.point.y,walkTarget:k,clientX:h.clientX,clientY:h.clientY})}};for(let[h,M]of Object.entries(kh))o.domElement.addEventListener(h,M);let Vh=()=>{if(oe)return;let h=Math.max(1,i.clientWidth),M=Math.max(1,i.clientHeight);o.setSize(h,M,!1),l.aspect=h/M,l.updateProjectionMatrix(),s?.update(),L=""},Gh=()=>{Oe(),le=!0},Wh=()=>{le=!1,Ue=performance.now(),pe=Ne};u.addEventListener("start",Gh),u.addEventListener("end",Wh);let Xh=new ResizeObserver(Vh),Yh=h=>{h.preventDefault(),t.onContextLost?.()};o.domElement.addEventListener("webglcontextlost",Yh);let kt=!1,Qi=!1,wn=null,Ps=null,Io=0,qh=0,Zh=!0,In=null,Ni=new uo(16773074,55,35,Math.PI/7,.65,1.3);Ni.visible=!1,c.add(Ni),c.add(Ni.target);let Ui=new ln,Kh=[...Z?.rooms||[],...e.levels.filter(h=>h.id!==Z?.id).flatMap(h=>h.rooms.filter(M=>M.groundSurface||M.localSteps&&e.stairs.some(E=>E.localSteps&&E.floorId===h.id&&E.roomId===M.id&&Math.min(...E.stops.map(k=>k.z))<=$+.2&&Math.max(...E.stops.map(k=>k.z))>=$-.2)))],Jh={x:T-(z+50)/2,y:b-(z+50)/2,w:z+50,h:z+50};if(e.shapeAware&&window.KERN_SHAPES){let h=window.KERN_SHAPES,M=h.difference(h.multi(Jh),Kh.filter(E=>E.groundSurface||E.localSteps||!["courtyard","terrace"].includes(E.type)).map(E=>E.routeStair&&e.stairs.find(k=>k.roomId===E.id)?.footprintGeometry||h.multi(E)));for(let E of M){let k=new Ri(E[0].map(de=>new Se(de[0],-de[1])));for(let de of E.slice(1))k.holes.push(new Yi(de.map(q=>new Se(q[0],-q[1]))));let Q=new Ae(new lo(k),U("#535c62"));Q.rotation.x=-Math.PI/2,Q.position.y=$-.02,Ui.add(Q)}}else for(let h of window.BuildingPreviewGeometry.subtractAll(Jh,Kh.filter(M=>M.groundSurface||M.localSteps||!["courtyard","terrace"].includes(M.type)))){let M=new Ae(new Ln(h.w,h.h),U("#535c62"));M.rotation.x=-Math.PI/2,M.position.set(h.x+h.w/2,$-.02,h.y+h.h/2),Ui.add(M)}return Ui.visible=!1,c.add(Ui),n=yf({scene:c,camera:l,renderer:o,controls:u,groups:f,data:e,prismGeometry:Ro,enabled:()=>!kt&&ht==="select",canNavigate:()=>!kt,surfaceHit:h=>(vn(h,{physicalOnly:!0}),lt),onSelect:(h,M,E)=>E&&!P.has(h)?!1:window.KERN_PRIMITIVE_UI?.select(h,M,E),onEditMany:(h,M)=>window.KERN_PRIMITIVE_UI?.editMany(h,M),onEdit:(h,M,E,k,Q)=>window.KERN_PRIMITIVE_UI?.edit(h,M,E,k,Q)}),a=jh,Xh.observe(i),Vh(),ae(),t.viewState?$l(t.viewState):Ee(),o.setAnimationLoop(()=>{if(!oe){if(n?.sync(),kt){$h(),wn?.fly&&De(),Pe(),o.render(c,l);return}at()||u.update(),Er(),n?.updateBounds(),s?.update(),De(),Pe(),o.render(c,l)}}),{primitivePlacement:(h,M,E)=>n?.placement(h,M,E),previewWall:(h,M)=>n?.previewWall(h,M),setPrimitiveMode:h=>n?.setMode(h),cancelPrimitive:()=>n?.cancel(),primitiveDragging:()=>n?.dragging(),cameraPose(){let h=l.getWorldDirection(new w);return{x:l.position.x,y:l.position.z,z:l.position.y,yaw:Math.atan2(-h.x,-h.z),pitch:Math.asin(Math.max(-1,Math.min(1,h.y))),fov:l.fov,roll:new cn().setFromQuaternion(l.quaternion,"YXZ").z}},setAuthoringMode:Mn,cancelAuthoring:()=>dt(!0),cancelEdit:Pn,getOrbitViewState(){return kt&&Ps?JSON.parse(JSON.stringify(Ps)):Jl()},applyFloorState:re,selectRoom:W,selectRooms:se,selectObjects:J,selectFloors:Ie,setEditableFloors:ve,activateFloor:_t,chooseFloor:qn,frameSelection:We,setWalk:Cf,isWalkTransitioning:Rf,fit:Ee,dispose:jh,showAll:ft,isolate:Nt,hoverFloor:Me,adjacentFloor:yr,getViewState:Jl,getZoom:Ke,restoreViewState:$l,syncActiveFloor:Vn,zoomBy(h){if(!Number.isFinite(h)||h<=0)return;let M=l.position.clone().sub(u.target),E=Nn.clamp(M.length()*h,u.minDistance,u.maxDistance);Re(u.target.clone().add(M.normalize().multiplyScalar(E)),u.target,!1)},setGrid(h){Ze=!!h,ce.visible=Ze},getFocusedFloor(){return Ce},setFloor(h,M){if(t.onFloorVisibility)return t.onFloorVisibility({id:h,visible:M});let E=f.get(h);if(E){if(Oe(),E.visible=!!M,Ce===h&&!M&&(Ce=_e()[0]||null),!Ce&&M&&(Ce=h),!M&&bt?.floor===h){let k=bt.isFloor?Ut:null;W(null,null),k&&(Ut=k)}!M&&Ut?.objects&&J(Ut.objects.filter(k=>k.floor!==h)),Me(null),ae(),De(!0),O("visibility")}},setExplode(h){let M=Math.max(0,Math.min(12,Number(h)||0));if(M===xe)return;let E=ze(be);xe=M,Me(null),ae(),Ce?Je(Ce,!!me):(Oe(),je+=ze(be)-E),De(!0)},setSlabs(h){nt=!!h,ae(),De(!0)},setCeilings(h){Ve=!!h,ae(),De(!0)},setWalls(h){Te=!!h,ae(),De(!0)},setCutaway(h){Qe=!!h,ae(),De(!0)},setCutHeight(h){let M=Number(h);Number.isFinite(M)&&(te=Math.max(.4,Math.min(2.4,M)),ae(),De(!0))},setLabels(h){ue=!!h,ae(),De(!0)},setXray(h){Ne=!!h,ae(),De(!0)},png(){return De(!0),o.render(c,l),new Promise((h,M)=>o.domElement.toBlob(E=>E?h(E):M(Error("Could not create this image.")),"image/png"))}}}catch(c){try{a()}catch{}throw c}}window.Building3D={mount:Kx,version:"180"};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
