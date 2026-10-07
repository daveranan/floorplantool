(()=>{var Pn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fu=0,Bc=1,Ou=2;var zc=1,Bu=2,xi=3,Ri=0,In=1,fn=2,Ii=0,ls=1,Hc=2,kc=3,Vc=4,zu=5,Wi=100,Hu=101,ku=102,Vu=103,Gu=104,Wu=200,Xu=201,Yu=202,qu=203,ha=204,ua=205,Zu=206,Ku=207,Ju=208,ju=209,$u=210,Qu=211,ed=212,td=213,nd=214,Xa=0,Ya=1,qa=2,cs=3,Za=4,Ka=5,Ja=6,ja=7,Gc=0,id=1,sd=2,Di=0,rd=1,od=2,ad=3,ld=4,cd=5,hd=6,ud=7;var Wc=300,ys=301,xs=302,$a=303,Qa=304,go=306,da=1e3,Gi=1001,fa=1002,Nn=1003,dd=1004;var _o=1005;var ii=1006,el=1007;var Ji=1008;var li=1009,Xc=1010,Yc=1011,hr=1012,tl=1013,ji=1014,ci=1015,ur=1016,nl=1017,il=1018,dr=1020,qc=35902,Zc=35899,Kc=1021,Jc=1022,qn=1023,Ks=1026,fr=1027,sl=1028,rl=1029,jc=1030,ol=1031;var al=1033,yo=33776,xo=33777,vo=33778,Mo=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,_l=37810,yl=37811,xl=37812,vl=37813,Ml=37814,El=37815,Sl=37816,bl=37817,wl=37818,Tl=37819,Al=37820,Rl=37821,Cl=36492,Pl=36494,Il=36495,Dl=36283,Ll=36284,Nl=36285,Ul=36286;var Br=2300,pa=2301,ca=2302,Tc=2400,Ac=2401,Rc=2402;var fd=3200,pd=3201;var $c=0,md=1,Li="",hn="srgb",hs="srgb-linear",zr="linear",Ot="srgb";var as=7680;var Cc=519,gd=512,_d=513,yd=514,Qc=515,xd=516,vd=517,Md=518,Ed=519,ma=35044;var eh="300 es",ni=2e3,Hr=2001;var mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nu=1234567,qs=Math.PI/180,us=180/Math.PI;function pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function th(i,e){return(i%e+e)%e}function Nf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Uf(i,e,t){return i!==e?(t-i)/(e-i):0}function Ur(i,e,t){return(1-t)*i+t*e}function Ff(i,e,t,n){return Ur(i,e,1-Math.exp(-t*n))}function Of(i,e=1){return e-Math.abs(th(i,e*2)-e)}function Bf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function kf(i,e){return i+Math.random()*(e-i)}function Vf(i){return i*(.5-Math.random())}function Gf(i){i!==void 0&&(nu=i);let e=nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wf(i){return i*qs}function Xf(i){return i*us}function Yf(i){return(i&i-1)===0&&i!==0}function qf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kf(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),p=r((e-n)/2),m=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*p,c*m,a*l);break;case"YZY":i.set(c*m,a*h,c*p,a*l);break;case"ZXZ":i.set(c*p,c*m,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var On={DEG2RAD:qs,RAD2DEG:us,generateUUID:pi,clamp:xt,euclideanModulo:th,mapLinear:Nf,inverseLerp:Uf,lerp:Ur,damp:Ff,pingpong:Of,smoothstep:Bf,smootherstep:zf,randInt:Hf,randFloat:kf,randFloatSpread:Vf,seededRandom:Gf,degToRad:Wf,radToDeg:Xf,isPowerOfTwo:Yf,ceilPowerOfTwo:qf,floorPowerOfTwo:Zf,setQuaternionFromProperEuler:Kf,normalize:Ft,denormalize:ti},be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],m=r[o+0],f=r[o+1],_=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=m,e[t+1]=f,e[t+2]=_,e[t+3]=y;return}if(p!==y||c!==m||l!==f||h!==_){let g=1-a,d=c*m+l*f+h*_+p*y,A=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let D=Math.sqrt(E),C=Math.atan2(D,d*A);g=Math.sin(g*C)/D,a=Math.sin(a*C)/D}let v=a*A;if(c=c*g+m*v,l=l*g+f*v,h=h*g+_*v,p=p*g+y*v,g===1-a){let D=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=D,l*=D,h*=D,p*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[o],m=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+h*p+c*f-l*m,e[t+1]=c*_+h*m+l*p-a*f,e[t+2]=l*_+h*f+a*m-c*p,e[t+3]=h*_-a*p-c*m-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),p=a(r/2),m=c(n/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=m*h*p+l*f*_,this._y=l*f*p-m*h*_,this._z=l*h*_+m*f*p,this._w=l*h*p-m*f*_;break;case"YXZ":this._x=m*h*p+l*f*_,this._y=l*f*p-m*h*_,this._z=l*h*_-m*f*p,this._w=l*h*p+m*f*_;break;case"ZXY":this._x=m*h*p-l*f*_,this._y=l*f*p+m*h*_,this._z=l*h*_+m*f*p,this._w=l*h*p-m*f*_;break;case"ZYX":this._x=m*h*p-l*f*_,this._y=l*f*p+m*h*_,this._z=l*h*_-m*f*p,this._w=l*h*p+m*f*_;break;case"YZX":this._x=m*h*p+l*f*_,this._y=l*f*p+m*h*_,this._z=l*h*_-m*f*p,this._w=l*h*p-m*f*_;break;case"XZY":this._x=m*h*p-l*f*_,this._y=l*f*p-m*h*_,this._z=l*h*_+m*f*p,this._w=l*h*p+m*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],p=t[10],m=n+a+p;if(m>0){let f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>p){let f=2*Math.sqrt(1+n-a-p);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>p){let f=2*Math.sqrt(1+a-n-p);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+p-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),p=Math.sin((1-t)*h)/l,m=Math.sin(t*h)/l;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=s*p+this._y*m,this._z=r*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+c*l+o*p-a*h,this.y=n+c*h+a*l-r*p,this.z=s+c*p+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$l=new T,iu=new Lt,pt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],p=n[7],m=n[2],f=n[5],_=n[8],y=s[0],g=s[3],d=s[6],A=s[1],E=s[4],v=s[7],D=s[2],C=s[5],U=s[8];return r[0]=o*y+a*A+c*D,r[3]=o*g+a*E+c*C,r[6]=o*d+a*v+c*U,r[1]=l*y+h*A+p*D,r[4]=l*g+h*E+p*C,r[7]=l*d+h*v+p*U,r[2]=m*y+f*A+_*D,r[5]=m*g+f*E+_*C,r[8]=m*d+f*v+_*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=h*o-a*l,m=a*c-h*r,f=l*r-o*c,_=t*p+n*m+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=p*y,e[1]=(s*l-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=m*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ql.makeScale(e,t)),this}rotate(e){return this.premultiply(Ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ql=new pt;function nh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sd(){let i=kr("canvas");return i.style.display="block",i}var su={};function Js(i){i in su||(su[i]=!0,console.warn(i))}function bd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ru=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jf(){let i={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ot&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ot&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hs]:{primaries:e,whitePoint:n,transfer:zr,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:Ot,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}var At=Jf();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,ga=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=kr("canvas")),Ps.width=e.width,Ps.height=e.height;let s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=kr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jf=0,js=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ec(s[o].image)):r.push(ec(s[o]))}else r=ec(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ga.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $f=0,tc=new T,Cn=class i extends mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=ii,o=Ji,a=qn,c=li,l=i.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=pi(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case da:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case da:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Wc;Cn.DEFAULT_ANISOTROPY=1;var Jt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],p=c[8],m=c[1],f=c[5],_=c[9],y=c[2],g=c[6],d=c[10];if(Math.abs(h-m)<.01&&Math.abs(p-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+y)<.1&&Math.abs(_+g)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,v=(f+1)/2,D=(d+1)/2,C=(h+m)/4,U=(p+y)/4,N=(_+g)/4;return E>v&&E>D?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=U/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=N/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=U/r,s=N/r),this.set(n,s,r,t),this}let A=Math.sqrt((g-_)*(g-_)+(p-y)*(p-y)+(m-h)*(m-h));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(p-y)/A,this.z=(m-h)/A,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_a=class extends mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Cn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new js(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends _a{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vr=class extends Cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ya=class extends Cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),No.subVectors(this.max,br),Is.subVectors(e.a,br),Ds.subVectors(e.b,br),Ls.subVectors(e.c,br),Oi.subVectors(Ds,Is),Bi.subVectors(Ls,Ds),is.subVectors(Is,Ls);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-is.z,is.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,is.z,0,-is.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-is.y,is.x,0];return!nc(t,Is,Ds,Ls,No)||(t=[1,0,0,0,1,0,0,0,1],!nc(t,Is,Ds,Ls,No))?!1:(Uo.crossVectors(Oi,Bi),t=[Uo.x,Uo.y,Uo.z],nc(t,Is,Ds,Ls,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ei=[new T,new T,new T,new T,new T,new T,new T,new T],$n=new T,Lo=new gn,Is=new T,Ds=new T,Ls=new T,Oi=new T,Bi=new T,is=new T,br=new T,No=new T,Uo=new T,ss=new T;function nc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ss.fromArray(i,r);let a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),c=e.dot(ss),l=t.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Qf=new gn,wr=new T,ic=new T,Ci=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(ic)),this.expandByPoint(wr.copy(e.center).sub(ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Si=new T,sc=new T,Fo=new T,zi=new T,rc=new T,Oo=new T,oc=new T,Xi=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sc.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(sc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Fo),a=zi.dot(this.direction),c=-zi.dot(Fo),l=zi.lengthSq(),h=Math.abs(1-o*o),p,m,f,_;if(h>0)if(p=o*c-a,m=o*a-c,_=r*h,p>=0)if(m>=-_)if(m<=_){let y=1/h;p*=y,m*=y,f=p*(p+o*m+2*a)+m*(o*p+m+2*c)+l}else m=r,p=Math.max(0,-(o*m+a)),f=-p*p+m*(m+2*c)+l;else m=-r,p=Math.max(0,-(o*m+a)),f=-p*p+m*(m+2*c)+l;else m<=-_?(p=Math.max(0,-(-o*r+a)),m=p>0?-r:Math.min(Math.max(-r,-c),r),f=-p*p+m*(m+2*c)+l):m<=_?(p=0,m=Math.min(Math.max(-r,-c),r),f=m*(m+2*c)+l):(p=Math.max(0,-(o*r+a)),m=p>0?r:Math.min(Math.max(-r,-c),r),f=-p*p+m*(m+2*c)+l);else m=o>0?-r:r,p=Math.max(0,-(o*m+a)),f=-p*p+m*(m+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(sc).addScaledVector(Fo,m),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return l>=0?(n=(e.min.x-m.x)*l,s=(e.max.x-m.x)*l):(n=(e.max.x-m.x)*l,s=(e.min.x-m.x)*l),h>=0?(r=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-m.z)*p,c=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,c=(e.min.z-m.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,s,r){rc.subVectors(t,e),Oo.subVectors(n,e),oc.crossVectors(rc,Oo);let o=this.direction.dot(oc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);let c=a*this.direction.dot(Oo.crossVectors(zi,Oo));if(c<0)return null;let l=a*this.direction.dot(rc.cross(zi));if(l<0||c+l>o)return null;let h=-a*zi.dot(oc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class i{constructor(e,t,n,s,r,o,a,c,l,h,p,m,f,_,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,p,m,f,_,y,g)}set(e,t,n,s,r,o,a,c,l,h,p,m,f,_,y,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=p,d[14]=m,d[3]=f,d[7]=_,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let m=o*h,f=o*p,_=a*h,y=a*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=f+_*l,t[5]=m-y*l,t[9]=-a*c,t[2]=y-m*l,t[6]=_+f*l,t[10]=o*c}else if(e.order==="YXZ"){let m=c*h,f=c*p,_=l*h,y=l*p;t[0]=m+y*a,t[4]=_*a-f,t[8]=o*l,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=y+m*a,t[10]=o*c}else if(e.order==="ZXY"){let m=c*h,f=c*p,_=l*h,y=l*p;t[0]=m-y*a,t[4]=-o*p,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=y-m*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let m=o*h,f=o*p,_=a*h,y=a*p;t[0]=c*h,t[4]=_*l-f,t[8]=m*l+y,t[1]=c*p,t[5]=y*l+m,t[9]=f*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let m=o*c,f=o*l,_=a*c,y=a*l;t[0]=c*h,t[4]=y-m*p,t[8]=_*p+f,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*p+_,t[10]=m-y*p}else if(e.order==="XZY"){let m=o*c,f=o*l,_=a*c,y=a*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=m*p+y,t[5]=o*h,t[9]=f*p-_,t[2]=_*p-f,t[6]=a*h,t[10]=y*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ep,e,tp)}lookAt(e,t,n){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Hi.crossVectors(n,Hn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Hi.crossVectors(n,Hn)),Hi.normalize(),Bo.crossVectors(Hn,Hi),s[0]=Hi.x,s[4]=Bo.x,s[8]=Hn.x,s[1]=Hi.y,s[5]=Bo.y,s[9]=Hn.y,s[2]=Hi.z,s[6]=Bo.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],p=n[5],m=n[9],f=n[13],_=n[2],y=n[6],g=n[10],d=n[14],A=n[3],E=n[7],v=n[11],D=n[15],C=s[0],U=s[4],N=s[8],b=s[12],w=s[1],F=s[5],K=s[9],$=s[13],Q=s[2],O=s[6],k=s[10],W=s[14],z=s[3],ge=s[7],_e=s[11],ae=s[15];return r[0]=o*C+a*w+c*Q+l*z,r[4]=o*U+a*F+c*O+l*ge,r[8]=o*N+a*K+c*k+l*_e,r[12]=o*b+a*$+c*W+l*ae,r[1]=h*C+p*w+m*Q+f*z,r[5]=h*U+p*F+m*O+f*ge,r[9]=h*N+p*K+m*k+f*_e,r[13]=h*b+p*$+m*W+f*ae,r[2]=_*C+y*w+g*Q+d*z,r[6]=_*U+y*F+g*O+d*ge,r[10]=_*N+y*K+g*k+d*_e,r[14]=_*b+y*$+g*W+d*ae,r[3]=A*C+E*w+v*Q+D*z,r[7]=A*U+E*F+v*O+D*ge,r[11]=A*N+E*K+v*k+D*_e,r[15]=A*b+E*$+v*W+D*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],p=e[6],m=e[10],f=e[14],_=e[3],y=e[7],g=e[11],d=e[15];return _*(+r*c*p-s*l*p-r*a*m+n*l*m+s*a*f-n*c*f)+y*(+t*c*f-t*l*m+r*o*m-s*o*f+s*l*h-r*c*h)+g*(+t*l*p-t*a*f-r*o*p+n*o*f+r*a*h-n*l*h)+d*(-s*a*h-t*c*p+t*a*m+s*o*p-n*o*m+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=e[9],m=e[10],f=e[11],_=e[12],y=e[13],g=e[14],d=e[15],A=p*g*l-y*m*l+y*c*f-a*g*f-p*c*d+a*m*d,E=_*m*l-h*g*l-_*c*f+o*g*f+h*c*d-o*m*d,v=h*y*l-_*p*l+_*a*f-o*y*f-h*a*d+o*p*d,D=_*p*c-h*y*c-_*a*m+o*y*m+h*a*g-o*p*g,C=t*A+n*E+s*v+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=A*U,e[1]=(y*m*r-p*g*r-y*s*f+n*g*f+p*s*d-n*m*d)*U,e[2]=(a*g*r-y*c*r+y*s*l-n*g*l-a*s*d+n*c*d)*U,e[3]=(p*c*r-a*m*r-p*s*l+n*m*l+a*s*f-n*c*f)*U,e[4]=E*U,e[5]=(h*g*r-_*m*r+_*s*f-t*g*f-h*s*d+t*m*d)*U,e[6]=(_*c*r-o*g*r-_*s*l+t*g*l+o*s*d-t*c*d)*U,e[7]=(o*m*r-h*c*r+h*s*l-t*m*l-o*s*f+t*c*f)*U,e[8]=v*U,e[9]=(_*p*r-h*y*r-_*n*f+t*y*f+h*n*d-t*p*d)*U,e[10]=(o*y*r-_*a*r+_*n*l-t*y*l-o*n*d+t*a*d)*U,e[11]=(h*a*r-o*p*r-h*n*l+t*p*l+o*n*f-t*a*f)*U,e[12]=D*U,e[13]=(h*y*s-_*p*s+_*n*m-t*y*m-h*n*g+t*p*g)*U,e[14]=(_*a*s-o*y*s-_*n*c+t*y*c+o*n*g-t*a*g)*U,e[15]=(o*p*s-h*a*s+h*n*c-t*p*c-o*n*m+t*a*m)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,p=a+a,m=r*l,f=r*h,_=r*p,y=o*h,g=o*p,d=a*p,A=c*l,E=c*h,v=c*p,D=n.x,C=n.y,U=n.z;return s[0]=(1-(y+d))*D,s[1]=(f+v)*D,s[2]=(_-E)*D,s[3]=0,s[4]=(f-v)*C,s[5]=(1-(m+d))*C,s[6]=(g+A)*C,s[7]=0,s[8]=(_+E)*U,s[9]=(g-A)*U,s[10]=(1-(m+y))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ns.set(s[0],s[1],s[2]).length(),o=Ns.set(s[4],s[5],s[6]).length(),a=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);let l=1/r,h=1/o,p=1/a;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=p,Qn.elements[9]*=p,Qn.elements[10]*=p,t.setFromRotationMatrix(Qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ni,c=!1){let l=this.elements,h=2*r/(t-e),p=2*r/(n-s),m=(t+e)/(t-e),f=(n+s)/(n-s),_,y;if(c)_=r/(o-r),y=o*r/(o-r);else if(a===ni)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Hr)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ni,c=!1){let l=this.elements,h=2/(t-e),p=2/(n-s),m=-(t+e)/(t-e),f=-(n+s)/(n-s),_,y;if(c)_=1/(o-r),y=o/(o-r);else if(a===ni)_=-2/(o-r),y=-(o+r)/(o-r);else if(a===Hr)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=p,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ns=new T,Qn=new Rt,ep=new T(0,0,0),tp=new T(1,1,1),Hi=new T,Bo=new T,Hn=new T,au=new Rt,lu=new Lt,un=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],p=s[2],m=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},np=0,cu=new T,Us=new Lt,bi=new Rt,zo=new T,Tr=new T,ip=new T,sp=new Lt,hu=new T(1,0,0),uu=new T(0,1,0),du=new T(0,0,1),fu={type:"added"},rp={type:"removed"},Fs={type:"childadded",child:null},ac={type:"childremoved",child:null},Nt=class i extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new un,n=new Lt,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new pt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(hu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(du,e)}translateOnAxis(e,t){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zo.copy(e):zo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Tr,zo,this.up):bi.lookAt(zo,Tr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(bi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rp),ac.child=e,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new T(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new T,wi=new T,lc=new T,Ti=new T,Os=new T,Bs=new T,pu=new T,cc=new T,hc=new T,uc=new T,dc=new Jt,fc=new Jt,pc=new Jt,di=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),wi.subVectors(n,t),lc.subVectors(e,t);let o=ei.dot(ei),a=ei.dot(wi),c=ei.dot(lc),l=wi.dot(wi),h=wi.dot(lc),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;let m=1/p,f=(l*c-a*h)*m,_=(o*h-a*c)*m;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return dc.setScalar(0),fc.setScalar(0),pc.setScalar(0),dc.fromBufferAttribute(e,t),fc.fromBufferAttribute(e,n),pc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(dc,r.x),o.addScaledVector(fc,r.y),o.addScaledVector(pc,r.z),o}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),wi.subVectors(e,t),ei.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ei.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,n),Bs.subVectors(r,n),cc.subVectors(e,n);let c=Os.dot(cc),l=Bs.dot(cc);if(c<=0&&l<=0)return t.copy(n);hc.subVectors(e,s);let h=Os.dot(hc),p=Bs.dot(hc);if(h>=0&&p<=h)return t.copy(s);let m=c*p-h*l;if(m<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Os,o);uc.subVectors(e,r);let f=Os.dot(uc),_=Bs.dot(uc);if(_>=0&&f<=_)return t.copy(r);let y=f*l-c*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Bs,a);let g=h*_-f*p;if(g<=0&&p-h>=0&&f-_>=0)return pu.subVectors(r,s),a=(p-h)/(p-h+(f-_)),t.copy(s).addScaledVector(pu,a);let d=1/(g+y+m);return o=y*d,a=m*d,t.copy(n).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Mt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=At.workingColorSpace){if(e=th(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=mc(o,r,e+1/3),this.g=mc(o,r,e),this.b=mc(o,r,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){let n=wd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return At.workingToColorSpace(vn.copy(this),e),Math.round(xt(vn.r*255,0,255))*65536+Math.round(xt(vn.g*255,0,255))*256+Math.round(xt(vn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(vn.copy(this),t);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=hn){At.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,s=vn.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Ho);let n=Ur(ki.h,Ho.h,t),s=Ur(ki.s,Ho.s,t),r=Ur(ki.l,Ho.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Mt;Mt.NAMES=wd;var op=0,_i=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=ls,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$t=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var tn=new T,ko=new be,ap=0,nn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ap++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ma,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ma&&(e.usage=this.usage),e}};var Gr=class extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wr=class extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}},lp=0,Yn=new Rt,gc=new Nt,zs=new T,kn=new gn,Ar=new gn,cn=new T,mt=class i extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nh(e)?Wr:Gr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(kn.min,Ar.min),kn.expandByPoint(cn),cn.addVectors(kn.max,Ar.max),kn.expandByPoint(cn)):(kn.expandByPoint(Ar.min),kn.expandByPoint(Ar.max))}kn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(cn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)cn.fromBufferAttribute(a,l),c&&(zs.fromBufferAttribute(e,l),cn.add(zs)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new T,c[N]=new T;let l=new T,h=new T,p=new T,m=new be,f=new be,_=new be,y=new T,g=new T;function d(N,b,w){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,b),p.fromBufferAttribute(n,w),m.fromBufferAttribute(r,N),f.fromBufferAttribute(r,b),_.fromBufferAttribute(r,w),h.sub(l),p.sub(l),f.sub(m),_.sub(m);let F=1/(f.x*_.y-_.x*f.y);isFinite(F)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(p,-f.y).multiplyScalar(F),g.copy(p).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(F),a[N].add(y),a[b].add(y),a[w].add(y),c[N].add(g),c[b].add(g),c[w].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,b=A.length;N<b;++N){let w=A[N],F=w.start,K=w.count;for(let $=F,Q=F+K;$<Q;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}let E=new T,v=new T,D=new T,C=new T;function U(N){D.fromBufferAttribute(s,N),C.copy(D);let b=a[N];E.copy(b),E.sub(D.multiplyScalar(D.dot(b))).normalize(),v.crossVectors(C,b);let F=v.dot(c[N])<0?-1:1;o.setXYZW(N,E.x,E.y,E.z,F)}for(let N=0,b=A.length;N<b;++N){let w=A[N],F=w.start,K=w.count;for(let $=F,Q=F+K;$<Q;$+=3)U(e.getX($+0)),U(e.getX($+1)),U(e.getX($+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,f=n.count;m<f;m++)n.setXYZ(m,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,p=new T;if(e)for(let m=0,f=e.count;m<f;m+=3){let _=e.getX(m+0),y=e.getX(m+1),g=e.getX(m+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let m=0,f=t.count;m<f;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,p=a.normalized,m=new l.constructor(c.length*h),f=0,_=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let d=0;d<h;d++)m[_++]=l[f++]}return new nn(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,p=l.length;h<p;h++){let m=l[h],f=e(m,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,m=l.length;p<m;p++){let f=l[p];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],p=r[l];for(let m=0,f=p.length;m<f;m++)h.push(p[m].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mu=new Rt,rs=new Xi,Vo=new Ci,gu=new T,Go=new T,Wo=new T,Xo=new T,_c=new T,Yo=new T,_u=new T,qo=new T,Te=class extends Nt{constructor(e=new mt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Yo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],p=r[c];h!==0&&(_c.fromBufferAttribute(p,e),o?Yo.addScaledVector(_c,h):Yo.addScaledVector(_c.sub(t),h))}t.add(Yo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(Vo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Vo,gu)===null||rs.origin.distanceToSquared(gu)>(e.far-e.near)**2))&&(mu.copy(r).invert(),rs.copy(e.ray).applyMatrix4(mu),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,m=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=m.length;_<y;_++){let g=m[_],d=o[g.materialIndex],A=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=A,D=E;v<D;v+=3){let C=a.getX(v),U=a.getX(v+1),N=a.getX(v+2);s=Zo(this,d,e,n,l,h,p,C,U,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=_,d=y;g<d;g+=3){let A=a.getX(g),E=a.getX(g+1),v=a.getX(g+2);s=Zo(this,o,e,n,l,h,p,A,E,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,y=m.length;_<y;_++){let g=m[_],d=o[g.materialIndex],A=Math.max(g.start,f.start),E=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=A,D=E;v<D;v+=3){let C=v,U=v+1,N=v+2;s=Zo(this,d,e,n,l,h,p,C,U,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let g=_,d=y;g<d;g+=3){let A=g,E=g+1,v=g+2;s=Zo(this,o,e,n,l,h,p,A,E,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function cp(i,e,t,n,s,r,o,a){let c;if(e.side===In?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ri,a),c===null)return null;qo.copy(a),qo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(qo);return l<t.near||l>t.far?null:{distance:l,point:qo.clone(),object:i}}function Zo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Go),i.getVertexPosition(c,Wo),i.getVertexPosition(l,Xo);let h=cp(i,e,t,n,Go,Wo,Xo,_u);if(h){let p=new T;di.getBarycoord(_u,Go,Wo,Xo,p),s&&(h.uv=di.getInterpolatedAttribute(s,a,c,l,p,new be)),r&&(h.uv1=di.getInterpolatedAttribute(r,a,c,l,p,new be)),o&&(h.normal=di.getInterpolatedAttribute(o,a,c,l,p,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a,b:c,c:l,normal:new T,materialIndex:0};di.getNormal(Go,Wo,Xo,m.normal),h.face=m,h.barycoord=p}return h}var Ct=class i extends mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],p=[],m=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2));function _(y,g,d,A,E,v,D,C,U,N,b){let w=v/U,F=D/N,K=v/2,$=D/2,Q=C/2,O=U+1,k=N+1,W=0,z=0,ge=new T;for(let _e=0;_e<k;_e++){let ae=_e*F-$;for(let ee=0;ee<O;ee++){let fe=ee*w-K;ge[y]=fe*A,ge[g]=ae*E,ge[d]=Q,l.push(ge.x,ge.y,ge.z),ge[y]=0,ge[g]=0,ge[d]=C>0?1:-1,h.push(ge.x,ge.y,ge.z),p.push(ee/U),p.push(1-_e/N),W+=1}}for(let _e=0;_e<N;_e++)for(let ae=0;ae<U;ae++){let ee=m+ae+O*_e,fe=m+ae+O*(_e+1),Re=m+(ae+1)+O*(_e+1),je=m+(ae+1)+O*_e;c.push(ee,fe,je),c.push(fe,Re,je),z+=6}a.addGroup(f,z,b),f+=z,m+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function En(i){let e={};for(let t=0;t<i.length;t++){let n=vs(i[t]);for(let s in n)e[s]=n[s]}return e}function hp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ih(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var Td={clone:vs,merge:En},up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xr=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vi=new T,yu=new be,xu=new be,mn=class extends Xr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,yu,xu),t.subVectors(xu,yu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hs=-90,ks=1,xa=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Hs,ks,e,t);s.layers=this.layers,this.add(s);let r=new mn(Hs,ks,e,t);r.layers=this.layers,this.add(r);let o=new mn(Hs,ks,e,t);o.layers=this.layers,this.add(o);let a=new mn(Hs,ks,e,t);a.layers=this.layers,this.add(a);let c=new mn(Hs,ks,e,t);c.layers=this.layers,this.add(c);let l=new mn(Hs,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(p,m,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Yr=class extends Cn{constructor(e=[],t=ys,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},va=class extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ct(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:Ii});r.uniforms.tEquirect.value=t;let o=new Te(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=ii),new xa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},jt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fp={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),d=this._getHandJoint(l,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],m=h.position.distanceTo(p.position),f=.02,_=.005;l.inputState.pinching&&m>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var qr=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ma=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ma,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rn=new T,Zr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},er=class extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vs,Rr=new T,Gs=new T,Ws=new T,Xs=new be,Cr=new be,Ad=new Rt,Ko=new T,Pr=new T,Jo=new T,vu=new be,yc=new be,Mu=new be,Kr=class extends Nt{constructor(e=new er){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ma(t,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new Zr(n,3,0,!1)),Vs.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=Vs,this.material=e,this.center=new be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),Ad.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Ws.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;jo(Ko.set(-.5,-.5,0),Ws,o,Gs,s,r),jo(Pr.set(.5,-.5,0),Ws,o,Gs,s,r),jo(Jo.set(.5,.5,0),Ws,o,Gs,s,r),vu.set(0,0),yc.set(1,0),Mu.set(1,1);let a=e.ray.intersectTriangle(Ko,Pr,Jo,!1,Rr);if(a===null&&(jo(Pr.set(-.5,.5,0),Ws,o,Gs,s,r),yc.set(0,1),a=e.ray.intersectTriangle(Ko,Jo,Pr,!1,Rr),a===null))return;let c=e.ray.origin.distanceTo(Rr);c<e.near||c>e.far||t.push({distance:c,point:Rr.clone(),uv:di.getInterpolation(Rr,Ko,Pr,Jo,vu,yc,Mu,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function jo(i,e,t,n,s,r){Xs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Cr.x=r*Xs.x-s*Xs.y,Cr.y=s*Xs.x+r*Xs.y):Cr.copy(Xs),i.copy(e),i.x+=Cr.x,i.y+=Cr.y,i.applyMatrix4(Ad)}var Ea=class extends Cn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Nn,h=Nn,p,m){super(null,o,a,c,l,h,s,r,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jr=class extends nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ys=new Rt,Eu=new Rt,$o=[],Su=new gn,pp=new Rt,Ir=new Te,Dr=new Ci,tr=class extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,pp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),Su.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Su)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),Dr.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),Eu.multiplyMatrices(n,Ys),Ir.matrixWorld=Eu,Ir.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){let c=$o[o];c.instanceId=r,c.object=this,t.push(c)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ea(new Float32Array(s*this.count),s,this.count,sl,ci));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xc=new T,mp=new T,gp=new pt,Zt=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xc.subVectors(n,t).cross(mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gp.getNormalMatrix(e),s=this.coplanarPoint(xc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new Ci,_p=new be(.5,.5),Qo=new T,nr=class{constructor(e=new Zt,t=new Zt,n=new Zt,s=new Zt,r=new Zt,o=new Zt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],p=r[5],m=r[6],f=r[7],_=r[8],y=r[9],g=r[10],d=r[11],A=r[12],E=r[13],v=r[14],D=r[15];if(s[0].setComponents(l-o,f-h,d-_,D-A).normalize(),s[1].setComponents(l+o,f+h,d+_,D+A).normalize(),s[2].setComponents(l+a,f+p,d+y,D+E).normalize(),s[3].setComponents(l-a,f-p,d-y,D-E).normalize(),n)s[4].setComponents(c,m,g,v).normalize(),s[5].setComponents(l-c,f-m,d-g,D-v).normalize();else if(s[4].setComponents(l-c,f-m,d-g,D-v).normalize(),t===ni)s[5].setComponents(l+c,f+m,d+g,D+v).normalize();else if(t===Hr)s[5].setComponents(c,m,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=_p.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qo.x=s.normal.x>0?e.max.x:e.min.x,Qo.y=s.normal.y>0?e.max.y:e.min.y,Qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var dn=class extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sa=new T,ba=new T,bu=new Rt,Lr=new Xi,ea=new Ci,vc=new T,wu=new T,Yt=class extends Nt{constructor(e=new mt,t=new dn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Sa.fromBufferAttribute(t,s-1),ba.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Sa.distanceTo(ba);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;bu.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(bu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=f,g=_-1;y<g;y+=l){let d=h.getX(y),A=h.getX(y+1),E=ta(this,e,Lr,c,d,A,y);E&&t.push(E)}if(this.isLineLoop){let y=h.getX(_-1),g=h.getX(f),d=ta(this,e,Lr,c,y,g,_-1);d&&t.push(d)}}else{let f=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let y=f,g=_-1;y<g;y+=l){let d=ta(this,e,Lr,c,y,y+1,y);d&&t.push(d)}if(this.isLineLoop){let y=ta(this,e,Lr,c,_-1,f,_-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ta(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Sa.fromBufferAttribute(a,s),ba.fromBufferAttribute(a,r),t.distanceSqToSegment(Sa,ba,vc,wu)>n)return;vc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(vc);if(!(l<e.near||l>e.far))return{distance:l,point:wu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Tu=new T,Au=new T,ri=class extends Yt{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Tu.fromBufferAttribute(t,s),Au.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tu.distanceTo(Au);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yi=class extends Yt{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var ds=class extends Cn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},jr=class extends Cn{constructor(e,t,n=ji,s,r,o,a=Nn,c=Nn,l,h=Ks,p=1){if(h!==Ks&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:p};super(m,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$r=class extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Qr=class i extends mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new T,h=new be;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){let f=n+p/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qt=class i extends mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],m=[],f=[],_=0,y=[],g=n/2,d=0;A(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(m,3)),this.setAttribute("uv",new ft(f,2));function A(){let v=new T,D=new T,C=0,U=(t-e)/n;for(let N=0;N<=r;N++){let b=[],w=N/r,F=w*(t-e)+e;for(let K=0;K<=s;K++){let $=K/s,Q=$*c+a,O=Math.sin(Q),k=Math.cos(Q);D.x=F*O,D.y=-w*n+g,D.z=F*k,p.push(D.x,D.y,D.z),v.set(O,U,k).normalize(),m.push(v.x,v.y,v.z),f.push($,1-w),b.push(_++)}y.push(b)}for(let N=0;N<s;N++)for(let b=0;b<r;b++){let w=y[b][N],F=y[b+1][N],K=y[b+1][N+1],$=y[b][N+1];(e>0||b!==0)&&(h.push(w,F,$),C+=3),(t>0||b!==r-1)&&(h.push(F,K,$),C+=3)}l.addGroup(d,C,0),d+=C}function E(v){let D=_,C=new be,U=new T,N=0,b=v===!0?e:t,w=v===!0?1:-1;for(let K=1;K<=s;K++)p.push(0,g*w,0),m.push(0,w,0),f.push(.5,.5),_++;let F=_;for(let K=0;K<=s;K++){let Q=K/s*c+a,O=Math.cos(Q),k=Math.sin(Q);U.x=b*k,U.y=g*w,U.z=b*O,p.push(U.x,U.y,U.z),m.push(0,w,0),C.x=O*.5+.5,C.y=k*.5*w+.5,f.push(C.x,C.y),_++}for(let K=0;K<s;K++){let $=D+K,Q=F+K;v===!0?h.push(Q,Q+1,$):h.push(Q+1,Q,$),N+=3}l.addGroup(d,N,v===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ir=class i extends Qt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wa=class i extends mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(A){let E=new T,v=new T,D=new T;for(let C=0;C<t.length;C+=3)f(t[C+0],E),f(t[C+1],v),f(t[C+2],D),c(E,v,D,A)}function c(A,E,v,D){let C=D+1,U=[];for(let N=0;N<=C;N++){U[N]=[];let b=A.clone().lerp(v,N/C),w=E.clone().lerp(v,N/C),F=C-N;for(let K=0;K<=F;K++)K===0&&N===C?U[N][K]=b:U[N][K]=b.clone().lerp(w,K/F)}for(let N=0;N<C;N++)for(let b=0;b<2*(C-N)-1;b++){let w=Math.floor(b/2);b%2===0?(m(U[N][w+1]),m(U[N+1][w]),m(U[N][w])):(m(U[N][w+1]),m(U[N+1][w+1]),m(U[N+1][w]))}}function l(A){let E=new T;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(A),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let A=new T;for(let E=0;E<r.length;E+=3){A.x=r[E+0],A.y=r[E+1],A.z=r[E+2];let v=g(A)/2/Math.PI+.5,D=d(A)/Math.PI+.5;o.push(v,1-D)}_(),p()}function p(){for(let A=0;A<o.length;A+=6){let E=o[A+0],v=o[A+2],D=o[A+4],C=Math.max(E,v,D),U=Math.min(E,v,D);C>.9&&U<.1&&(E<.2&&(o[A+0]+=1),v<.2&&(o[A+2]+=1),D<.2&&(o[A+4]+=1))}}function m(A){r.push(A.x,A.y,A.z)}function f(A,E){let v=A*3;E.x=e[v+0],E.y=e[v+1],E.z=e[v+2]}function _(){let A=new T,E=new T,v=new T,D=new T,C=new be,U=new be,N=new be;for(let b=0,w=0;b<r.length;b+=9,w+=6){A.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),C.set(o[w+0],o[w+1]),U.set(o[w+2],o[w+3]),N.set(o[w+4],o[w+5]),D.copy(A).add(E).add(v).divideScalar(3);let F=g(D);y(C,w+0,A,F),y(U,w+2,E,F),y(N,w+4,v,F)}}function y(A,E,v,D){D<0&&A.x===1&&(o[E]=A.x-1),v.x===0&&v.z===0&&(o[E]=D/2/Math.PI+.5)}function g(A){return Math.atan2(A.z,-A.x)}function d(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var na=new T,ia=new T,Mc=new T,sa=new di,eo=class extends mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(qs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],p=new Array(3),m={},f=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);let{a:y,b:g,c:d}=sa;if(y.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),d.fromBufferAttribute(a,l[2]),sa.getNormal(Mc),p[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,p[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,p[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let A=0;A<3;A++){let E=(A+1)%3,v=p[A],D=p[E],C=sa[h[A]],U=sa[h[E]],N=`${v}_${D}`,b=`${D}_${v}`;b in m&&m[b]?(Mc.dot(m[b].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(U.x,U.y,U.z)),m[b]=null):N in m||(m[N]={index0:l[A],index1:l[E],normal:Mc.clone()})}}for(let _ in m)if(m[_]){let{index0:y,index1:g}=m[_];na.fromBufferAttribute(a,y),ia.fromBufferAttribute(a,g),f.push(na.x,na.y,na.z),f.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new ft(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,f=(o-h)/m;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new be:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,s=[],r=[],o=[],a=new T,c=new Rt;for(let f=0;f<=e;f++){let _=f/e;s[f]=this.getTangentAt(_,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),m<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(xt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(xt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},sr=class extends Vn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new be){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=c-this.aX,f=l-this.aY;c=m*h-f*p+this.aX,l=m*p+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ta=class extends sr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function sh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,p){let m=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+p)+(c-a)/p;m*=h,f*=h,s(o,a,m,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ra=new T,Ec=new sh,Sc=new sh,bc=new sh,Aa=class extends Vn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ra.subVectors(s[0],s[1]).add(s[0]),l=ra);let p=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ra.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ra),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(p),f),y=Math.pow(p.distanceToSquared(m),f),g=Math.pow(m.distanceToSquared(h),f);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),Ec.initNonuniformCatmullRom(l.x,p.x,m.x,h.x,_,y,g),Sc.initNonuniformCatmullRom(l.y,p.y,m.y,h.y,_,y,g),bc.initNonuniformCatmullRom(l.z,p.z,m.z,h.z,_,y,g)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(l.x,p.x,m.x,h.x,this.tension),Sc.initCatmullRom(l.y,p.y,m.y,h.y,this.tension),bc.initCatmullRom(l.z,p.z,m.z,h.z,this.tension));return n.set(Ec.calc(c),Sc.calc(c),bc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ru(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function yp(i,e){let t=1-i;return t*t*e}function xp(i,e){return 2*(1-i)*i*e}function vp(i,e){return i*i*e}function Fr(i,e,t,n){return yp(i,e)+xp(i,t)+vp(i,n)}function Mp(i,e){let t=1-i;return t*t*t*e}function Ep(i,e){let t=1-i;return 3*t*t*i*e}function Sp(i,e){return 3*(1-i)*i*i*e}function bp(i,e){return i*i*i*e}function Or(i,e,t,n,s){return Mp(i,e)+Ep(i,t)+Sp(i,n)+bp(i,s)}var to=class extends Vn{constructor(e=new be,t=new be,n=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,s.x,r.x,o.x,a.x),Or(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ra=class extends Vn{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,s.x,r.x,o.x,a.x),Or(e,s.y,r.y,o.y,a.y),Or(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},no=class extends Vn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Vn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends Vn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends Vn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y),Fr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Ru(a,c.x,l.x,h.x,p.x),Ru(a,c.y,l.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new be().fromArray(s))}return this}},Pc=Object.freeze({__proto__:null,ArcCurve:Ta,CatmullRomCurve3:Aa,CubicBezierCurve:to,CubicBezierCurve3:Ra,EllipseCurve:sr,LineCurve:no,LineCurve3:Ca,QuadraticBezierCurve:io,QuadraticBezierCurve3:Pa,SplineCurve:so}),Ia=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Pc[s.type]().fromJSON(s))}return this}},qi=class extends Ia{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new no(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new io(this.currentPoint.clone(),new be(e,t),new be(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new to(this.currentPoint.clone(),new be(e,t),new be(n,s),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new so(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new sr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Pi=class extends qi{constructor(e){super(e),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new qi().fromJSON(s))}return this}};function wp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Rd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Pp(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,p=-1/0;for(let m=t;m<s;m+=t){let f=i[m],_=i[m+1];f<a&&(a=f),_<c&&(c=_),f>h&&(h=f),_>p&&(p=_)}l=Math.max(h-a,p-c),l=l!==0?32767/l:0}return ro(r,o,t,a,c,l,0),o}function Rd(i,e,t,n,s){let r;if(s===kp(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Cu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Cu(o/n|0,i[o],i[o+1],r);return r&&rr(r,r.next)&&(ao(r),r=r.next),r}function fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(rr(t,t.next)||Kt(t.prev,t,t.next)===0)){if(ao(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ro(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Up(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Ap(i,n,s,r):Tp(i)){e.push(c.i,i.i,l.i),ao(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Rp(fs(i),e),ro(i,e,t,n,s,r,2)):o===2&&Cp(i,e,t,n,s,r):ro(fs(i),e,t,n,s,r,1);break}}}function Tp(i){let e=i.prev,t=i,n=i.next;if(Kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),p=Math.min(a,c,l),m=Math.max(s,r,o),f=Math.max(a,c,l),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=m&&_.y>=p&&_.y<=f&&Nr(s,a,r,c,o,l,_.x,_.y)&&Kt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Ap(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Kt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,p=r.y,m=o.y,f=Math.min(a,c,l),_=Math.min(h,p,m),y=Math.max(a,c,l),g=Math.max(h,p,m),d=Ic(f,_,e,t,n),A=Ic(y,g,e,t,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=d&&v&&v.z<=A;){if(E.x>=f&&E.x<=y&&E.y>=_&&E.y<=g&&E!==s&&E!==o&&Nr(a,h,c,p,l,m,E.x,E.y)&&Kt(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=f&&v.x<=y&&v.y>=_&&v.y<=g&&v!==s&&v!==o&&Nr(a,h,c,p,l,m,v.x,v.y)&&Kt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=d;){if(E.x>=f&&E.x<=y&&E.y>=_&&E.y<=g&&E!==s&&E!==o&&Nr(a,h,c,p,l,m,E.x,E.y)&&Kt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=A;){if(v.x>=f&&v.x<=y&&v.y>=_&&v.y<=g&&v!==s&&v!==o&&Nr(a,h,c,p,l,m,v.x,v.y)&&Kt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Rp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!rr(n,s)&&Pd(n,t,t.next,s)&&oo(n,s)&&oo(s,n)&&(e.push(n.i,t.i,s.i),ao(t),ao(t.next),t=i=s),t=t.next}while(t!==i);return fs(t)}function Cp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bp(o,a)){let c=Id(o,a);o=fs(o,o.next),c=fs(c,c.next),ro(o,e,t,n,s,r,0),ro(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Pp(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Rd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Op(l))}s.sort(Ip);for(let r=0;r<s.length;r++)t=Dp(s[r],t);return t}function Ip(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Dp(i,e){let t=Lp(i,e);if(!t)return e;let n=Id(t,i);return fs(n,n.next),fs(t,t.next)}function Lp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(rr(i,t))return t;do{if(rr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Cd(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);oo(t,i)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&Np(o,t)))&&(o=t,h=p)}t=t.next}while(t!==a);return o}function Np(i,e){return Kt(i.prev,i,e.prev)<0&&Kt(e.next,i,i.next)<0}function Up(i,e,t,n){let s=i;do s.z===0&&(s.z=Ic(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fp(s)}function Fp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ic(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Op(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Cd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Nr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Cd(i,e,t,n,s,r,o,a)}function Bp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!zp(i,e)&&(oo(i,e)&&oo(e,i)&&Hp(i,e)&&(Kt(i.prev,i,e.prev)||Kt(i,e.prev,e))||rr(i,e)&&Kt(i.prev,i,i.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function rr(i,e){return i.x===e.x&&i.y===e.y}function Pd(i,e,t,n){let s=aa(Kt(i,e,t)),r=aa(Kt(i,e,n)),o=aa(Kt(t,n,i)),a=aa(Kt(t,n,e));return!!(s!==r&&o!==a||s===0&&oa(i,t,e)||r===0&&oa(i,n,e)||o===0&&oa(t,i,n)||a===0&&oa(t,e,n))}function oa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function aa(i){return i>0?1:i<0?-1:0}function zp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Pd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function oo(i,e){return Kt(i.prev,i,i.next)<0?Kt(i,e,i.next)>=0&&Kt(i,i.prev,e)>=0:Kt(i,e,i.prev)<0||Kt(i,i.next,e)<0}function Hp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Id(i,e){let t=Dc(i.i,i.x,i.y),n=Dc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Cu(i,e,t,n){let s=Dc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kp(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Lc=class{static triangulate(e,t,n=2){return wp(e,t,n)}},fi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Pu(e),Iu(n,e);let o=e.length;t.forEach(Pu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Iu(n,t[c]);let a=Lc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Pu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Iu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var or=class i extends mt{constructor(e=new Pi([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Vp,E,v=!1,D,C,U,N;d&&(E=d.getSpacedPoints(h),v=!0,m=!1,D=d.computeFrenetFrames(h,!1),C=new T,U=new T,N=new T),m||(g=0,f=0,_=0,y=0);let b=a.extractPoints(l),w=b.shape,F=b.holes;if(!fi.isClockWise(w)){w=w.reverse();for(let ye=0,he=F.length;ye<he;ye++){let re=F[ye];fi.isClockWise(re)&&(F[ye]=re.reverse())}}function $(ye){let re=10000000000000001e-36,pe=ye[0];for(let Ce=1;Ce<=ye.length;Ce++){let me=Ce%ye.length,Fe=ye[me],Je=Fe.x-pe.x,Xe=Fe.y-pe.y,I=Je*Je+Xe*Xe,x=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(pe.x),Math.abs(pe.y)),X=re*x*x;if(I<=X){ye.splice(me,1),Ce--;continue}pe=Fe}}$(w),F.forEach($);let Q=F.length,O=w;for(let ye=0;ye<Q;ye++){let he=F[ye];w=w.concat(he)}function k(ye,he,re){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),ye.clone().addScaledVector(he,re)}let W=w.length;function z(ye,he,re){let pe,Ce,me,Fe=ye.x-he.x,Je=ye.y-he.y,Xe=re.x-ye.x,I=re.y-ye.y,x=Fe*Fe+Je*Je,X=Fe*I-Je*Xe;if(Math.abs(X)>Number.EPSILON){let ie=Math.sqrt(x),Me=Math.sqrt(Xe*Xe+I*I),P=he.x-Je/ie,B=he.y+Fe/ie,q=re.x-I/Me,xe=re.y+Xe/Me,ve=((q-P)*I-(xe-B)*Xe)/(Fe*I-Je*Xe);pe=P+Fe*ve-ye.x,Ce=B+Je*ve-ye.y;let Se=pe*pe+Ce*Ce;if(Se<=2)return new be(pe,Ce);me=Math.sqrt(Se/2)}else{let ie=!1;Fe>Number.EPSILON?Xe>Number.EPSILON&&(ie=!0):Fe<-Number.EPSILON?Xe<-Number.EPSILON&&(ie=!0):Math.sign(Je)===Math.sign(I)&&(ie=!0),ie?(pe=-Je,Ce=Fe,me=Math.sqrt(x)):(pe=Fe,Ce=Je,me=Math.sqrt(x/2))}return new be(pe/me,Ce/me)}let ge=[];for(let ye=0,he=O.length,re=he-1,pe=ye+1;ye<he;ye++,re++,pe++)re===he&&(re=0),pe===he&&(pe=0),ge[ye]=z(O[ye],O[re],O[pe]);let _e=[],ae,ee=ge.concat();for(let ye=0,he=Q;ye<he;ye++){let re=F[ye];ae=[];for(let pe=0,Ce=re.length,me=Ce-1,Fe=pe+1;pe<Ce;pe++,me++,Fe++)me===Ce&&(me=0),Fe===Ce&&(Fe=0),ae[pe]=z(re[pe],re[me],re[Fe]);_e.push(ae),ee=ee.concat(ae)}let fe;if(g===0)fe=fi.triangulateShape(O,F);else{let ye=[],he=[];for(let re=0;re<g;re++){let pe=re/g,Ce=f*Math.cos(pe*Math.PI/2),me=_*Math.sin(pe*Math.PI/2)+y;for(let Fe=0,Je=O.length;Fe<Je;Fe++){let Xe=k(O[Fe],ge[Fe],me);We(Xe.x,Xe.y,-Ce),pe===0&&ye.push(Xe)}for(let Fe=0,Je=Q;Fe<Je;Fe++){let Xe=F[Fe];ae=_e[Fe];let I=[];for(let x=0,X=Xe.length;x<X;x++){let ie=k(Xe[x],ae[x],me);We(ie.x,ie.y,-Ce),pe===0&&I.push(ie)}pe===0&&he.push(I)}}fe=fi.triangulateShape(ye,he)}let Re=fe.length,je=_+y;for(let ye=0;ye<W;ye++){let he=m?k(w[ye],ee[ye],je):w[ye];v?(U.copy(D.normals[0]).multiplyScalar(he.x),C.copy(D.binormals[0]).multiplyScalar(he.y),N.copy(E[0]).add(U).add(C),We(N.x,N.y,N.z)):We(he.x,he.y,0)}for(let ye=1;ye<=h;ye++)for(let he=0;he<W;he++){let re=m?k(w[he],ee[he],je):w[he];v?(U.copy(D.normals[ye]).multiplyScalar(re.x),C.copy(D.binormals[ye]).multiplyScalar(re.y),N.copy(E[ye]).add(U).add(C),We(N.x,N.y,N.z)):We(re.x,re.y,p/h*ye)}for(let ye=g-1;ye>=0;ye--){let he=ye/g,re=f*Math.cos(he*Math.PI/2),pe=_*Math.sin(he*Math.PI/2)+y;for(let Ce=0,me=O.length;Ce<me;Ce++){let Fe=k(O[Ce],ge[Ce],pe);We(Fe.x,Fe.y,p+re)}for(let Ce=0,me=F.length;Ce<me;Ce++){let Fe=F[Ce];ae=_e[Ce];for(let Je=0,Xe=Fe.length;Je<Xe;Je++){let I=k(Fe[Je],ae[Je],pe);v?We(I.x,I.y+E[h-1].y,E[h-1].x+re):We(I.x,I.y,p+re)}}}j(),ce();function j(){let ye=s.length/3;if(m){let he=0,re=W*he;for(let pe=0;pe<Re;pe++){let Ce=fe[pe];Ve(Ce[2]+re,Ce[1]+re,Ce[0]+re)}he=h+g*2,re=W*he;for(let pe=0;pe<Re;pe++){let Ce=fe[pe];Ve(Ce[0]+re,Ce[1]+re,Ce[2]+re)}}else{for(let he=0;he<Re;he++){let re=fe[he];Ve(re[2],re[1],re[0])}for(let he=0;he<Re;he++){let re=fe[he];Ve(re[0]+W*h,re[1]+W*h,re[2]+W*h)}}n.addGroup(ye,s.length/3-ye,0)}function ce(){let ye=s.length/3,he=0;Ue(O,he),he+=O.length;for(let re=0,pe=F.length;re<pe;re++){let Ce=F[re];Ue(Ce,he),he+=Ce.length}n.addGroup(ye,s.length/3-ye,1)}function Ue(ye,he){let re=ye.length;for(;--re>=0;){let pe=re,Ce=re-1;Ce<0&&(Ce=ye.length-1);for(let me=0,Fe=h+g*2;me<Fe;me++){let Je=W*me,Xe=W*(me+1),I=he+pe+Je,x=he+Ce+Je,X=he+Ce+Xe,ie=he+pe+Xe;ot(I,x,X,ie)}}}function We(ye,he,re){c.push(ye),c.push(he),c.push(re)}function Ve(ye,he,re){Ie(ye),Ie(he),Ie(re);let pe=s.length/3,Ce=A.generateTopUV(n,s,pe-3,pe-2,pe-1);L(Ce[0]),L(Ce[1]),L(Ce[2])}function ot(ye,he,re,pe){Ie(ye),Ie(he),Ie(pe),Ie(he),Ie(re),Ie(pe);let Ce=s.length/3,me=A.generateSideWallUV(n,s,Ce-6,Ce-3,Ce-2,Ce-1);L(me[0]),L(me[1]),L(me[3]),L(me[1]),L(me[2]),L(me[3])}function Ie(ye){s.push(c[ye*3+0]),s.push(c[ye*3+1]),s.push(c[ye*3+2])}function L(ye){r.push(ye.x),r.push(ye.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Gp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Pc[s.type]().fromJSON(s)),new i(n,e.options)}},Vp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new be(r,o),new be(a,c),new be(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],p=e[n*3+2],m=e[s*3],f=e[s*3+1],_=e[s*3+2],y=e[r*3],g=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new be(o,1-c),new be(l,1-p),new be(m,1-_),new be(y,1-d)]:[new be(a,1-c),new be(h,1-p),new be(f,1-_),new be(g,1-d)]}};function Gp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yi=class i extends wa{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Un=class i extends mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,p=e/a,m=t/c,f=[],_=[],y=[],g=[];for(let d=0;d<h;d++){let A=d*m-o;for(let E=0;E<l;E++){let v=E*p-r;_.push(v,-A,0),y.push(0,0,1),g.push(E/a),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<a;A++){let E=A+l*d,v=A+l*(d+1),D=A+1+l*(d+1),C=A+1+l*d;f.push(E,v,C),f.push(v,D,C)}this.setIndex(f),this.setAttribute("position",new ft(_,3)),this.setAttribute("normal",new ft(y,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var lo=class i extends mt{constructor(e=new Pi([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(r,3)),this.setAttribute("uv",new ft(o,2));function l(h){let p=s.length/3,m=h.extractPoints(t),f=m.shape,_=m.holes;fi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,d=_.length;g<d;g++){let A=_[g];fi.isClockWise(A)===!0&&(_[g]=A.reverse())}let y=fi.triangulateShape(f,_);for(let g=0,d=_.length;g<d;g++){let A=_[g];f=f.concat(A)}for(let g=0,d=f.length;g<d;g++){let A=f[g];s.push(A.x,A.y,0),r.push(0,0,1),o.push(A.x,A.y)}for(let g=0,d=y.length;g<d;g++){let A=y[g],E=A[0]+p,v=A[1]+p,D=A[2]+p;n.push(E,v,D),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Wp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Wp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Mn=class i extends mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],p=new T,m=new T,f=[],_=[],y=[],g=[];for(let d=0;d<=n;d++){let A=[],E=d/n,v=0;d===0&&o===0?v=.5/t:d===n&&c===Math.PI&&(v=-.5/t);for(let D=0;D<=t;D++){let C=D/t;p.x=-e*Math.cos(s+C*r)*Math.sin(o+E*a),p.y=e*Math.cos(o+E*a),p.z=e*Math.sin(s+C*r)*Math.sin(o+E*a),_.push(p.x,p.y,p.z),m.copy(p).normalize(),y.push(m.x,m.y,m.z),g.push(C+v,1-E),A.push(l++)}h.push(A)}for(let d=0;d<n;d++)for(let A=0;A<t;A++){let E=h[d][A+1],v=h[d][A],D=h[d+1][A],C=h[d+1][A+1];(d!==0||o>0)&&f.push(E,v,C),(d!==n-1||c<Math.PI)&&f.push(v,D,C)}this.setIndex(f),this.setAttribute("position",new ft(_,3)),this.setAttribute("normal",new ft(y,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var oi=class i extends mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new T,p=new T,m=new T;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){let y=_/s*r,g=f/n*Math.PI*2;p.x=(e+t*Math.cos(g))*Math.cos(y),p.y=(e+t*Math.cos(g))*Math.sin(y),p.z=t*Math.sin(g),a.push(p.x,p.y,p.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),m.subVectors(p,h).normalize(),c.push(m.x,m.y,m.z),l.push(_/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){let y=(s+1)*f+_-1,g=(s+1)*(f-1)+_-1,d=(s+1)*(f-1)+_,A=(s+1)*f+_;o.push(y,g,A),o.push(g,d,A)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ps=class extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Da=class extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},La=class extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var ms=class extends dn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function la(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Xp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Na=class extends gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ac:r=e,a=2*t-n;break;case Rc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ac:o=e,c=2*n-t;break;case Rc:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),y=_*_,g=y*_,d=-m*g+2*m*y-m*_,A=(1+m)*g+(-1.5-2*m)*y+(-.5+m)*_+1,E=(-1-f)*g+(1.5+f)*y+.5*_,v=f*g-f*y;for(let D=0;D!==a;++D)r[D]=d*o[h+D]+A*o[l+D]+E*o[c+D]+v*o[p+D];return r}},Ua=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),p=1-h;for(let m=0;m!==a;++m)r[m]=o[l+m]*p+o[c+m]*h;return r}},Fa=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=la(t,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:la(e.times,Array),values:la(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Na(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case pa:t=this.InterpolantFactoryMethodLinear;break;case ca:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return pa;case this.InterpolantFactoryMethodSmooth:return ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Xp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ca,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let p=a*n,m=p-n,f=p+n;for(let _=0;_!==n;++_){let y=t[p+_];if(y!==t[m+_]||y!==t[f+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,m=o*n;for(let f=0;f!==n;++f)t[m+f]=t[p+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=pa;var Zi=class extends Gn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Br;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Oa.prototype.ValueTypeName="color";var Ba=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Ba.prototype.ValueTypeName="number";var za=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Lt.slerpFlat(r,0,o,l-a,o,l,c);return r}},co=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Gn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Br;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Ha.prototype.ValueTypeName="vector";var ka=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=l.length;p<m;p+=2){let f=l[p],_=l[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Dd=new ka,Va=class{constructor(e){this.manager=e!==void 0?e:Dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Va.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ho=class extends ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wc=new Rt,Du=new T,Lu=new T,Ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Nc=class extends Ga{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=us*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},uo=class extends ar{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Nc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fo=class extends Xr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uc=class extends Ga{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Uc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Wa=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rh="\\[\\]\\.:\\/",Yp=new RegExp("["+rh+"]","g"),oh="[^"+rh+"]",qp="[^"+rh.replace("\\.","")+"]",Zp=/((?:WC+[\/:])*)/.source.replace("WC",oh),Kp=/(WCOD+)?/.source.replace("WCOD",qp),Jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),$p=new RegExp("^"+Zp+Kp+Jp+jp+"$"),Qp=["material","materials","bones","map"],Fc=class{constructor(e,t,n){let s=n||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yp,"")}static parseTrackName(e){let t=$p.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xt.Composite=Fc;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nx=new Float32Array(1);var Nu=new Rt,Fn=class{constructor(e,t,n=0,s=1/0){this.ray=new Xi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nu),this}intersectObject(e,t=!0,n=[]){return Oc(e,this,n,t),n.sort(Uu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Oc(e[s],this,n,t);return n.sort(Uu),n}};function Uu(i,e){return i.distance-e.distance}function Oc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Oc(r[o],e,t,!0)}}var cr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var po=class extends ri{constructor(e=10,t=10,n=4473924,s=8947848){n=new Mt(n),s=new Mt(s);let r=t/2,o=e/t,a=e/2,c=[],l=[];for(let m=0,f=0,_=-a;m<=t;m++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);let y=m===r?n:s;y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3}let h=new mt;h.setAttribute("position",new ft(c,3)),h.setAttribute("color",new ft(l,3));let p=new dn({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var mo=class extends ri{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new mt;r.setIndex(new nn(n,1)),r.setAttribute("position",new ft(s,3)),super(r,new dn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var _s=class extends mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ah(i,e,t,n){let s=em(n);switch(t){case Kc:return i*e;case sl:return i*e/s.components*s.byteLength;case rl:return i*e/s.components*s.byteLength;case jc:return i*e*2/s.components*s.byteLength;case ol:return i*e*2/s.components*s.byteLength;case Jc:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case al:return i*e*4/s.components*s.byteLength;case yo:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:case ul:return Math.max(i,16)*Math.max(e,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(e,8)/2;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Pl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dl:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function em(i){switch(i){case li:case Xc:return{byteLength:1,components:1};case hr:case Yc:case ur:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case ji:case tl:case ci:return{byteLength:4,components:1};case qc:case Zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function nf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tm(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,p=l.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){let h=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,h);else{p.sort((f,_)=>f.start-_.start);let m=0;for(let f=1;f<p.length;f++){let _=p[m],y=p[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++m,p[m]=y)}p.length=m+1;for(let f=0,_=p.length;f<_;f++){let y=p[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wm=`#define PI 3.141592653589793
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
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
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
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
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
#endif`,eg=`struct PhysicalMaterial {
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
}`,tg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ug=`#if defined( USE_POINTS_UV )
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
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
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
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hg=`float getShadowMask() {
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
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n_=`uniform sampler2D t2D;
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`#include <common>
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
}`,l_=`#if DEPTH_PACKING == 3200
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
}`,c_=`#define DISTANCE
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
}`,h_=`#define DISTANCE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`uniform float scale;
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#include <common>
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
}`,g_=`uniform vec3 diffuse;
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
}`,__=`#define LAMBERT
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
}`,y_=`#define LAMBERT
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
}`,x_=`#define MATCAP
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
}`,v_=`#define MATCAP
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
}`,M_=`#define NORMAL
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
}`,E_=`#define NORMAL
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
}`,S_=`#define PHONG
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
}`,b_=`#define PHONG
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
}`,w_=`#define STANDARD
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
}`,T_=`#define STANDARD
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
}`,A_=`#define TOON
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
}`,R_=`#define TOON
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
}`,C_=`uniform float size;
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
}`,P_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,D_=`uniform vec3 color;
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
}`,L_=`uniform float rotation;
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
}`,N_=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:om,alphatest_pars_fragment:am,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:xm,clipping_planes_vertex:vm,color_fragment:Mm,color_pars_fragment:Em,color_pars_vertex:Sm,color_vertex:bm,common:wm,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Im,colorspace_fragment:Dm,colorspace_pars_fragment:Lm,envmap_fragment:Nm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Fm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:Zm,envmap_vertex:Bm,fog_vertex:zm,fog_pars_vertex:Hm,fog_fragment:km,fog_pars_fragment:Vm,gradientmap_pars_fragment:Gm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:Ym,lights_pars_begin:qm,lights_toon_fragment:Km,lights_toon_pars_fragment:Jm,lights_phong_fragment:jm,lights_phong_pars_fragment:$m,lights_physical_fragment:Qm,lights_physical_pars_fragment:eg,lights_fragment_begin:tg,lights_fragment_maps:ng,lights_fragment_end:ig,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:ag,map_fragment:lg,map_pars_fragment:cg,map_particle_fragment:hg,map_particle_pars_fragment:ug,metalnessmap_fragment:dg,metalnessmap_pars_fragment:fg,morphinstance_vertex:pg,morphcolor_vertex:mg,morphnormal_vertex:gg,morphtarget_pars_vertex:_g,morphtarget_vertex:yg,normal_fragment_begin:xg,normal_fragment_maps:vg,normal_pars_fragment:Mg,normal_pars_vertex:Eg,normal_vertex:Sg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:Ag,iridescence_pars_fragment:Rg,opaque_fragment:Cg,packing:Pg,premultiplied_alpha_fragment:Ig,project_vertex:Dg,dithering_fragment:Lg,dithering_pars_fragment:Ng,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:Bg,shadowmap_vertex:zg,shadowmask_pars_fragment:Hg,skinbase_vertex:kg,skinning_pars_vertex:Vg,skinning_vertex:Gg,skinnormal_vertex:Wg,specularmap_fragment:Xg,specularmap_pars_fragment:Yg,tonemapping_fragment:qg,tonemapping_pars_fragment:Zg,transmission_fragment:Kg,transmission_pars_fragment:Jg,uv_pars_fragment:jg,uv_pars_vertex:$g,uv_vertex:Qg,worldpos_vertex:e_,background_vert:t_,background_frag:n_,backgroundCube_vert:i_,backgroundCube_frag:s_,cube_vert:r_,cube_frag:o_,depth_vert:a_,depth_frag:l_,distanceRGBA_vert:c_,distanceRGBA_frag:h_,equirect_vert:u_,equirect_frag:d_,linedashed_vert:f_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:g_,meshlambert_vert:__,meshlambert_frag:y_,meshmatcap_vert:x_,meshmatcap_frag:v_,meshnormal_vert:M_,meshnormal_frag:E_,meshphong_vert:S_,meshphong_frag:b_,meshphysical_vert:w_,meshphysical_frag:T_,meshtoon_vert:A_,meshtoon_frag:R_,points_vert:C_,points_frag:P_,shadow_vert:I_,shadow_frag:D_,sprite_vert:L_,sprite_frag:N_},Ze={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},vi={basic:{uniforms:En([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:En([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Mt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:En([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:En([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:En([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new Mt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:En([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:En([Ze.points,Ze.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:En([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:En([Ze.common,Ze.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:En([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:En([Ze.sprite,Ze.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:En([Ze.common,Ze.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:En([Ze.lights,Ze.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};vi.physical={uniforms:En([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var Fl={r:0,b:0,g:0},Ms=new un,U_=new Rt;function F_(i,e,t,n,s,r,o){let a=new Mt(0),c=r===!0?0:1,l,h,p=null,m=0,f=null;function _(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function y(E){let v=!1,D=_(E);D===null?d(a,c):D&&D.isColor&&(d(D,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,v){let D=_(v);D&&(D.isCubeTexture||D.mapping===go)?(h===void 0&&(h=new Te(new Ct(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:vs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ms.copy(v.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(U_.makeRotationFromEuler(Ms)),h.material.toneMapped=At.getTransfer(D.colorSpace)!==Ot,(p!==D||m!==D.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,p=D,m=D.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new Te(new Un(2,2),new si({name:"BackgroundMaterial",uniforms:vs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=At.getTransfer(D.colorSpace)!==Ot,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(p!==D||m!==D.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,p=D,m=D.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,v){E.getRGB(Fl,ih(i)),n.buffers.color.setClear(Fl.r,Fl.g,Fl.b,v,o)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),c=v,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(a,c)},render:y,addToRenderList:g,dispose:A}}function O_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function a(w,F,K,$,Q){let O=!1,k=p($,K,F);r!==k&&(r=k,l(r.object)),O=f(w,$,K,Q),O&&_(w,$,K,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(w,F,K,$),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function p(w,F,K){let $=K.wireframe===!0,Q=n[w.id];Q===void 0&&(Q={},n[w.id]=Q);let O=Q[F.id];O===void 0&&(O={},Q[F.id]=O);let k=O[$];return k===void 0&&(k=m(c()),O[$]=k),k}function m(w){let F=[],K=[],$=[];for(let Q=0;Q<t;Q++)F[Q]=0,K[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:K,attributeDivisors:$,object:w,attributes:{},index:null}}function f(w,F,K,$){let Q=r.attributes,O=F.attributes,k=0,W=K.getAttributes();for(let z in W)if(W[z].location>=0){let _e=Q[z],ae=O[z];if(ae===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor)),_e===void 0||_e.attribute!==ae||ae&&_e.data!==ae.data)return!0;k++}return r.attributesNum!==k||r.index!==$}function _(w,F,K,$){let Q={},O=F.attributes,k=0,W=K.getAttributes();for(let z in W)if(W[z].location>=0){let _e=O[z];_e===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor));let ae={};ae.attribute=_e,_e&&_e.data&&(ae.data=_e.data),Q[z]=ae,k++}r.attributes=Q,r.attributesNum=k,r.index=$}function y(){let w=r.newAttributes;for(let F=0,K=w.length;F<K;F++)w[F]=0}function g(w){d(w,0)}function d(w,F){let K=r.newAttributes,$=r.enabledAttributes,Q=r.attributeDivisors;K[w]=1,$[w]===0&&(i.enableVertexAttribArray(w),$[w]=1),Q[w]!==F&&(i.vertexAttribDivisor(w,F),Q[w]=F)}function A(){let w=r.newAttributes,F=r.enabledAttributes;for(let K=0,$=F.length;K<$;K++)F[K]!==w[K]&&(i.disableVertexAttribArray(K),F[K]=0)}function E(w,F,K,$,Q,O,k){k===!0?i.vertexAttribIPointer(w,F,K,Q,O):i.vertexAttribPointer(w,F,K,$,Q,O)}function v(w,F,K,$){y();let Q=$.attributes,O=K.getAttributes(),k=F.defaultAttributeValues;for(let W in O){let z=O[W];if(z.location>=0){let ge=Q[W];if(ge===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),ge!==void 0){let _e=ge.normalized,ae=ge.itemSize,ee=e.get(ge);if(ee===void 0)continue;let fe=ee.buffer,Re=ee.type,je=ee.bytesPerElement,j=Re===i.INT||Re===i.UNSIGNED_INT||ge.gpuType===tl;if(ge.isInterleavedBufferAttribute){let ce=ge.data,Ue=ce.stride,We=ge.offset;if(ce.isInstancedInterleavedBuffer){for(let Ve=0;Ve<z.locationSize;Ve++)d(z.location+Ve,ce.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ve=0;Ve<z.locationSize;Ve++)g(z.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Ve=0;Ve<z.locationSize;Ve++)E(z.location+Ve,ae/z.locationSize,Re,_e,Ue*je,(We+ae/z.locationSize*Ve)*je,j)}else{if(ge.isInstancedBufferAttribute){for(let ce=0;ce<z.locationSize;ce++)d(z.location+ce,ge.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ce=0;ce<z.locationSize;ce++)g(z.location+ce);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let ce=0;ce<z.locationSize;ce++)E(z.location+ce,ae/z.locationSize,Re,_e,ae*je,ae/z.locationSize*ce*je,j)}}else if(k!==void 0){let _e=k[W];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(z.location,_e);break;case 3:i.vertexAttrib3fv(z.location,_e);break;case 4:i.vertexAttrib4fv(z.location,_e);break;default:i.vertexAttrib1fv(z.location,_e)}}}}A()}function D(){N();for(let w in n){let F=n[w];for(let K in F){let $=F[K];for(let Q in $)h($[Q].object),delete $[Q];delete F[K]}delete n[w]}}function C(w){if(n[w.id]===void 0)return;let F=n[w.id];for(let K in F){let $=F[K];for(let Q in $)h($[Q].object),delete $[Q];delete F[K]}delete n[w.id]}function U(w){for(let F in n){let K=n[F];if(K[w.id]===void 0)continue;let $=K[w.id];for(let Q in $)h($[Q].object),delete $[Q];delete K[w.id]}}function N(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:g,disableUnusedAttributes:A}}function B_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,p){p!==0&&(i.drawArraysInstanced(n,l,h,p),t.update(h,n,p))}function a(l,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,p);let f=0;for(let _=0;_<p;_++)f+=h[_];t.update(f,n,1)}function c(l,h,p,m){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],h[_],m[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,m,0,p);let _=0;for(let y=0;y<p;y++)_+=h[y]*m[y];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function z_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==qn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let N=U===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==li&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ci&&!N)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:D,maxSamples:C}}function H_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Zt,a=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){let f=p.length!==0||m||n!==0||s;return s=m,n=p.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,f){let _=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,d=i.get(p);if(!s||_===null||_.length===0||r&&!g)r?h(null):l();else{let A=r?0:n,E=A*4,v=d.clippingState||null;c.value=v,v=h(_,m,E,f);for(let D=0;D!==E;++D)v[D]=t[D];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,f,_){let y=p!==null?p.length:0,g=null;if(y!==0){if(g=c.value,_!==!0||g===null){let d=f+y*4,A=m.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<d)&&(g=new Float32Array(d));for(let E=0,v=f;E!==y;++E,v+=4)o.copy(p[E]).applyMatrix4(A,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function k_(i){let e=new WeakMap;function t(o,a){return a===$a?o.mapping=ys:a===Qa&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$a||a===Qa)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new va(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var mr=4,Ld=[.125,.215,.35,.446,.526,.582],bs=20,lh=new fo,Nd=new Mt,ch=null,hh=0,uh=0,dh=!1,Ss=(1+Math.sqrt(5))/2,pr=1/Ss,Ud=[new T(-Ss,pr,0),new T(Ss,pr,0),new T(-pr,0,Ss),new T(pr,0,Ss),new T(0,Ss,-pr),new T(0,Ss,pr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],V_=new T,zl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=V_}=r;ch=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,hh,uh),this._renderer.xr.enabled=dh,e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:ur,format:qn,colorSpace:hs,depthBuffer:!1},s=Fd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G_(r)),this._blurMaterial=W_(r,e,t)}return s}_compileMaterial(e){let t=new Te(this._lodPlanes[0],e);this._renderer.compile(t,lh)}_sceneToCubeUV(e,t,n,s,r){let c=new mn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,f=p.toneMapping;p.getClearColor(Nd),p.toneMapping=Di,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));let y=new $t({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),g=new Te(new Ct,y),d=!1,A=e.background;A?A.isColor&&(y.color.copy(A),e.background=null,d=!0):(y.color.copy(Nd),d=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));let D=this._cubeSize;Ol(s,v*D,E>2?D:0,D,D),p.setRenderTarget(s),d&&p.render(g,c),p.render(e,c)}g.geometry.dispose(),g.material.dispose(),p.toneMapping=f,p.autoClear=m,e.background=A}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ys||e.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Od());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ol(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,lh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ud[(s-r-1)%Ud.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new Te(this._lodPlanes[s],l),m=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bs-1),y=r/_,g=isFinite(r)?1+Math.floor(h*y):bs;g>bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bs}`);let d=[],A=0;for(let U=0;U<bs;++U){let N=U/y,b=Math.exp(-N*N/2);d.push(b),U===0?A+=b:U<g&&(A+=2*b)}for(let U=0;U<d.length;U++)d[U]=d[U]/A;m.envMap.value=e.texture,m.samples.value=g,m.weights.value=d,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:E}=this;m.dTheta.value=_,m.mipInt.value=E-n;let v=this._sizeLods[s],D=3*v*(s>E-mr?s-E+mr:0),C=4*(this._cubeSize-v);Ol(t,D,C,3*v,2*v),c.setRenderTarget(t),c.render(p,lh)}};function G_(i){let e=[],t=[],n=[],s=i,r=i-mr+1+Ld.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-mr?c=Ld[o-i+mr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,p=1+l,m=[h,h,p,h,p,p,h,h,p,p,h,p],f=6,_=6,y=3,g=2,d=1,A=new Float32Array(y*_*f),E=new Float32Array(g*_*f),v=new Float32Array(d*_*f);for(let C=0;C<f;C++){let U=C%3*2/3-1,N=C>2?0:-1,b=[U,N,0,U+2/3,N,0,U+2/3,N+1,0,U,N,0,U+2/3,N+1,0,U,N+1,0];A.set(b,y*_*C),E.set(m,g*_*C);let w=[C,C,C,C,C,C];v.set(w,d*_*C)}let D=new mt;D.setAttribute("position",new nn(A,y)),D.setAttribute("uv",new nn(E,g)),D.setAttribute("faceIndex",new nn(v,d)),e.push(D),s>mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fd(i,e,t){let n=new gi(i,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ol(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function W_(i,e,t){let n=new Float32Array(bs),s=new T(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Od(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Bd(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Sh(){return`

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
	`}function X_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===$a||c===Qa,h=c===ys||c===xs;if(l||h){let p=e.get(a),m=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return t===null&&(t=new zl(i)),p=l?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new zl(i)),p=l?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Y_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function q_(i,e,t,n){let s={},r=new WeakMap;function o(p){let m=p.target;m.index!==null&&e.remove(m.index);for(let _ in m.attributes)e.remove(m.attributes[_]);m.removeEventListener("dispose",o),delete s[m.id];let f=r.get(m);f&&(e.remove(f),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function c(p){let m=p.attributes;for(let f in m)e.update(m[f],i.ARRAY_BUFFER)}function l(p){let m=[],f=p.index,_=p.attributes.position,y=0;if(f!==null){let A=f.array;y=f.version;for(let E=0,v=A.length;E<v;E+=3){let D=A[E+0],C=A[E+1],U=A[E+2];m.push(D,C,C,U,U,D)}}else if(_!==void 0){let A=_.array;y=_.version;for(let E=0,v=A.length/3-1;E<v;E+=3){let D=E+0,C=E+1,U=E+2;m.push(D,C,C,U,U,D)}}else return;let g=new(nh(m)?Wr:Gr)(m,1);g.version=y;let d=r.get(p);d&&e.remove(d),r.set(p,g)}function h(p){let m=r.get(p);if(m){let f=p.index;f!==null&&m.version<f.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function Z_(i,e,t){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function c(m,f){i.drawElements(n,f,r,m*o),t.update(f,n,1)}function l(m,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,m*o,_),t.update(f,n,_))}function h(m,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,m,0,_);let g=0;for(let d=0;d<_;d++)g+=f[d];t.update(g,n,1)}function p(m,f,_,y){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<m.length;d++)l(m[d]/o,f[d],y[d]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,m,0,y,0,_);let d=0;for(let A=0;A<_;A++)d+=f[A]*y[A];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function K_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function J_(i,e,t){let n=new WeakMap,s=new Jt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,m=n.get(a);if(m===void 0||m.count!==p){let b=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",b)};m!==void 0&&m.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],E=0;f===!0&&(E=1),_===!0&&(E=2),y===!0&&(E=3);let v=a.attributes.position.count*E,D=1;v>e.maxTextureSize&&(D=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*D*4*p),U=new Vr(C,v,D,p);U.type=ci,U.needsUpdate=!0;let N=E*4;for(let w=0;w<p;w++){let F=g[w],K=d[w],$=A[w],Q=v*D*4*w;for(let O=0;O<F.count;O++){let k=O*N;f===!0&&(s.fromBufferAttribute(F,O),C[Q+k+0]=s.x,C[Q+k+1]=s.y,C[Q+k+2]=s.z,C[Q+k+3]=0),_===!0&&(s.fromBufferAttribute(K,O),C[Q+k+4]=s.x,C[Q+k+5]=s.y,C[Q+k+6]=s.z,C[Q+k+7]=0),y===!0&&(s.fromBufferAttribute($,O),C[Q+k+8]=s.x,C[Q+k+9]=s.y,C[Q+k+10]=s.z,C[Q+k+11]=$.itemSize===4?s.w:1)}}m={count:p,texture:U,size:new be(v,D)},n.set(a,m),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let _=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function j_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,p=e.get(c,h);if(s.get(p)!==l&&(e.update(p),s.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let m=c.skeleton;s.get(m)!==l&&(m.update(),s.set(m,l))}return p}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var sf=new Cn,zd=new jr(1,1),rf=new Vr,of=new ya,af=new Yr,Hd=[],kd=[],Vd=new Float32Array(16),Gd=new Float32Array(9),Wd=new Float32Array(4);function _r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hd[s];if(r===void 0&&(r=new Float32Array(s),Hd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kl(i,e){let t=kd[e];t===void 0&&(t=new Int32Array(e),kd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function e0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function t0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function n0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Wd.set(n),i.uniformMatrix2fv(this.addr,!1,Wd),rn(t,n)}}function i0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Gd.set(n),i.uniformMatrix3fv(this.addr,!1,Gd),rn(t,n)}}function s0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Vd.set(n),i.uniformMatrix4fv(this.addr,!1,Vd),rn(t,n)}}function r0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function o0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function a0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function l0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function c0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function h0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function f0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zd.compareFunction=Qc,r=zd):r=sf,t.setTexture2D(e||r,s)}function p0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||of,s)}function m0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||af,s)}function g0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rf,s)}function _0(i){switch(i){case 5126:return $_;case 35664:return Q_;case 35665:return e0;case 35666:return t0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function y0(i,e){i.uniform1fv(this.addr,e)}function x0(i,e){let t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function v0(i,e){let t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function M0(i,e){let t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function E0(i,e){let t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function S0(i,e){let t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function b0(i,e){let t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function w0(i,e){i.uniform1iv(this.addr,e)}function T0(i,e){i.uniform2iv(this.addr,e)}function A0(i,e){i.uniform3iv(this.addr,e)}function R0(i,e){i.uniform4iv(this.addr,e)}function C0(i,e){i.uniform1uiv(this.addr,e)}function P0(i,e){i.uniform2uiv(this.addr,e)}function I0(i,e){i.uniform3uiv(this.addr,e)}function D0(i,e){i.uniform4uiv(this.addr,e)}function L0(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sf,r[o])}function N0(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||of,r[o])}function U0(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||af,r[o])}function F0(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rf,r[o])}function O0(i){switch(i){case 5126:return y0;case 35664:return x0;case 35665:return v0;case 35666:return M0;case 35674:return E0;case 35675:return S0;case 35676:return b0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return I0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return F0}}var ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_0(t.type)}},mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O0(t.type)}},gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},fh=/(\w+)(\])?(\[|\.)?/g;function Xd(i,e){i.seq.push(e),i.map[e.id]=e}function B0(i,e,t){let n=i.name,s=n.length;for(fh.lastIndex=0;;){let r=fh.exec(n),o=fh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Xd(t,l===void 0?new ph(a,i,e):new mh(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new gh(a),Xd(t,p)),t=p}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);B0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Yd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var z0=37297,H0=0;function k0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var qd=new pt;function V0(i){At._getMatrix(qd,At.workingColorSpace,i);let e=`mat3( ${qd.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(i)){case zr:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+k0(i.getShaderSource(e),a)}else return r}function G0(i,e){let t=V0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function W0(i,e){let t;switch(e){case rd:t="Linear";break;case od:t="Reinhard";break;case ad:t="Cineon";break;case ld:t="ACESFilmic";break;case hd:t="AgX";break;case ud:t="Neutral";break;case cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bl=new T;function X0(){At.getLuminanceCoefficients(Bl);let i=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function q0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Z0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Eo(i){return i!==""}function Kd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(K0,j0)}var J0=new Map;function j0(i,e){let t=vt[e];if(t===void 0){let n=J0.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _h(t)}var $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(i){return i.replace($0,Q0)}function Q0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $d(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ey(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function ty(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case xs:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ny(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function iy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gc:e="ENVMAP_BLENDING_MULTIPLY";break;case id:e="ENVMAP_BLENDING_MIX";break;case sd:e="ENVMAP_BLENDING_ADD";break}return e}function sy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ry(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=ey(t),l=ty(t),h=ny(t),p=iy(t),m=sy(t),f=Y0(t),_=q0(r),y=s.createProgram(),g,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Eo).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Eo).join(`
`),d.length>0&&(d+=`
`)):(g=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),d=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?vt.tonemapping_pars_fragment:"",t.toneMapping!==Di?W0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,G0("linearToOutputTexel",t.outputColorSpace),X0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),o=_h(o),o=Kd(o,t),o=Jd(o,t),a=_h(a),a=Kd(a,t),a=Jd(a,t),o=jd(o),a=jd(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=A+g+o,v=A+d+a,D=Yd(s,s.VERTEX_SHADER,E),C=Yd(s,s.FRAGMENT_SHADER,v);s.attachShader(y,D),s.attachShader(y,C),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function U(F){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(y)||"",$=s.getShaderInfoLog(D)||"",Q=s.getShaderInfoLog(C)||"",O=K.trim(),k=$.trim(),W=Q.trim(),z=!0,ge=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,D,C);else{let _e=Zd(s,D,"vertex"),ae=Zd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+_e+`
`+ae)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||W==="")&&(ge=!1);ge&&(F.diagnostics={runnable:z,programLog:O,vertexShader:{log:k,prefix:g},fragmentShader:{log:W,prefix:d}})}s.deleteShader(D),s.deleteShader(C),N=new gr(s,y),b=Z0(s,y)}let N;this.getUniforms=function(){return N===void 0&&U(this),N};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(y,z0)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=C,this}var oy=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xh(e),t.set(e,n)),n}},xh=class{constructor(e){this.id=oy++,this.code=e,this.usedTimes=0}};function ay(i,e,t,n,s,r,o){let a=new $s,c=new yh,l=new Set,h=[],p=s.logarithmicDepthBuffer,m=s.vertexTextures,f=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,w,F,K,$){let Q=K.fog,O=$.geometry,k=b.isMeshStandardMaterial?K.environment:null,W=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),z=W&&W.mapping===go?W.image.height:null,ge=_[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let _e=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=_e!==void 0?_e.length:0,ee=0;O.morphAttributes.position!==void 0&&(ee=1),O.morphAttributes.normal!==void 0&&(ee=2),O.morphAttributes.color!==void 0&&(ee=3);let fe,Re,je,j;if(ge){let Tt=vi[ge];fe=Tt.vertexShader,Re=Tt.fragmentShader}else fe=b.vertexShader,Re=b.fragmentShader,c.update(b),je=c.getVertexShaderID(b),j=c.getFragmentShaderID(b);let ce=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),We=$.isInstancedMesh===!0,Ve=$.isBatchedMesh===!0,ot=!!b.map,Ie=!!b.matcap,L=!!W,ye=!!b.aoMap,he=!!b.lightMap,re=!!b.bumpMap,pe=!!b.normalMap,Ce=!!b.displacementMap,me=!!b.emissiveMap,Fe=!!b.metalnessMap,Je=!!b.roughnessMap,Xe=b.anisotropy>0,I=b.clearcoat>0,x=b.dispersion>0,X=b.iridescence>0,ie=b.sheen>0,Me=b.transmission>0,P=Xe&&!!b.anisotropyMap,B=I&&!!b.clearcoatMap,q=I&&!!b.clearcoatNormalMap,xe=I&&!!b.clearcoatRoughnessMap,ve=X&&!!b.iridescenceMap,Se=X&&!!b.iridescenceThicknessMap,Ae=ie&&!!b.sheenColorMap,He=ie&&!!b.sheenRoughnessMap,De=!!b.specularMap,Pe=!!b.specularColorMap,nt=!!b.specularIntensityMap,V=Me&&!!b.transmissionMap,Oe=Me&&!!b.thicknessMap,ke=!!b.gradientMap,$e=!!b.alphaMap,Le=b.alphaTest>0,we=!!b.alphaHash,Qe=!!b.extensions,dt=Di;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(dt=i.toneMapping);let Ut={shaderID:ge,shaderType:b.type,shaderName:b.name,vertexShader:fe,fragmentShader:Re,defines:b.defines,customVertexShaderID:je,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ve,batchingColor:Ve&&$._colorsTexture!==null,instancing:We,instancingColor:We&&$.instanceColor!==null,instancingMorph:We&&$.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:hs,alphaToCoverage:!!b.alphaToCoverage,map:ot,matcap:Ie,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:z,aoMap:ye,lightMap:he,bumpMap:re,normalMap:pe,displacementMap:m&&Ce,emissiveMap:me,normalMapObjectSpace:pe&&b.normalMapType===md,normalMapTangentSpace:pe&&b.normalMapType===$c,metalnessMap:Fe,roughnessMap:Je,anisotropy:Xe,anisotropyMap:P,clearcoat:I,clearcoatMap:B,clearcoatNormalMap:q,clearcoatRoughnessMap:xe,dispersion:x,iridescence:X,iridescenceMap:ve,iridescenceThicknessMap:Se,sheen:ie,sheenColorMap:Ae,sheenRoughnessMap:He,specularMap:De,specularColorMap:Pe,specularIntensityMap:nt,transmission:Me,transmissionMap:V,thicknessMap:Oe,gradientMap:ke,opaque:b.transparent===!1&&b.blending===ls&&b.alphaToCoverage===!1,alphaMap:$e,alphaTest:Le,alphaHash:we,combine:b.combine,mapUv:ot&&y(b.map.channel),aoMapUv:ye&&y(b.aoMap.channel),lightMapUv:he&&y(b.lightMap.channel),bumpMapUv:re&&y(b.bumpMap.channel),normalMapUv:pe&&y(b.normalMap.channel),displacementMapUv:Ce&&y(b.displacementMap.channel),emissiveMapUv:me&&y(b.emissiveMap.channel),metalnessMapUv:Fe&&y(b.metalnessMap.channel),roughnessMapUv:Je&&y(b.roughnessMap.channel),anisotropyMapUv:P&&y(b.anisotropyMap.channel),clearcoatMapUv:B&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:q&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:He&&y(b.sheenRoughnessMap.channel),specularMapUv:De&&y(b.specularMap.channel),specularColorMapUv:Pe&&y(b.specularColorMap.channel),specularIntensityMapUv:nt&&y(b.specularIntensityMap.channel),transmissionMapUv:V&&y(b.transmissionMap.channel),thicknessMapUv:Oe&&y(b.thicknessMap.channel),alphaMapUv:$e&&y(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(pe||Xe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!O.attributes.uv&&(ot||$e),fog:!!Q,useFog:b.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ue,skinning:$.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:ot&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Ot,decodeVideoTextureEmissive:me&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===Ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fn,flipSided:b.side===In,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Qe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&b.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function d(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let F in b.defines)w.push(F),w.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(A(w,b),E(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function A(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function E(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let w=_[b.type],F;if(w){let K=vi[w];F=Td.clone(K.uniforms)}else F=b.uniforms;return F}function D(b,w){let F;for(let K=0,$=h.length;K<$;K++){let Q=h[K];if(Q.cacheKey===w){F=Q,++F.usedTimes;break}}return F===void 0&&(F=new ry(i,w,b,r),h.push(F)),F}function C(b){if(--b.usedTimes===0){let w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),b.destroy()}}function U(b){c.remove(b)}function N(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:v,acquireProgram:D,releaseProgram:C,releaseShaderCache:U,programs:h,dispose:N}}function ly(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function cy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ef(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(p,m,f,_,y,g){let d=i[e];return d===void 0?(d={id:p.id,object:p,geometry:m,material:f,groupOrder:_,renderOrder:p.renderOrder,z:y,group:g},i[e]=d):(d.id=p.id,d.object=p,d.geometry=m,d.material=f,d.groupOrder=_,d.renderOrder=p.renderOrder,d.z=y,d.group=g),e++,d}function a(p,m,f,_,y,g){let d=o(p,m,f,_,y,g);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):t.push(d)}function c(p,m,f,_,y,g){let d=o(p,m,f,_,y,g);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):t.unshift(d)}function l(p,m){t.length>1&&t.sort(p||cy),n.length>1&&n.sort(m||Qd),s.length>1&&s.sort(m||Qd)}function h(){for(let p=e,m=i.length;p<m;p++){let f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function hy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ef,i.set(n,[o])):s>=r.length?(o=new ef,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function uy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Mt};break;case"SpotLight":t={position:new T,direction:new T,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function dy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var fy=0;function py(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function my(i){let e=new uy,t=dy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,r=new Rt,o=new Rt;function a(l){let h=0,p=0,m=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,_=0,y=0,g=0,d=0,A=0,E=0,v=0,D=0,C=0,U=0;l.sort(py);for(let b=0,w=l.length;b<w;b++){let F=l[b],K=F.color,$=F.intensity,Q=F.distance,O=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=K.r*$,p+=K.g*$,m+=K.b*$;else if(F.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(F.sh.coefficients[k],$);U++}else if(F.isDirectionalLight){let k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let W=F.shadow,z=t.get(F);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=F.shadow.matrix,A++}n.directional[f]=k,f++}else if(F.isSpotLight){let k=e.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(K).multiplyScalar($),k.distance=Q,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,n.spot[y]=k;let W=F.shadow;if(F.map&&(n.spotLightMap[D]=F.map,D++,W.updateMatrices(F),F.castShadow&&C++),n.spotLightMatrix[y]=W.matrix,F.castShadow){let z=t.get(F);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.spotShadow[y]=z,n.spotShadowMap[y]=O,v++}y++}else if(F.isRectAreaLight){let k=e.get(F);k.color.copy(K).multiplyScalar($),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),n.rectArea[g]=k,g++}else if(F.isPointLight){let k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),k.distance=F.distance,k.decay=F.decay,F.castShadow){let W=F.shadow,z=t.get(F);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=F.shadow.matrix,E++}n.point[_]=k,_++}else if(F.isHemisphereLight){let k=e.get(F);k.skyColor.copy(F.color).multiplyScalar($),k.groundColor.copy(F.groundColor).multiplyScalar($),n.hemi[d]=k,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ze.LTC_FLOAT_1,n.rectAreaLTC2=Ze.LTC_FLOAT_2):(n.rectAreaLTC1=Ze.LTC_HALF_1,n.rectAreaLTC2=Ze.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=m;let N=n.hash;(N.directionalLength!==f||N.pointLength!==_||N.spotLength!==y||N.rectAreaLength!==g||N.hemiLength!==d||N.numDirectionalShadows!==A||N.numPointShadows!==E||N.numSpotShadows!==v||N.numSpotMaps!==D||N.numLightProbes!==U)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=U,N.directionalLength=f,N.pointLength=_,N.spotLength=y,N.rectAreaLength=g,N.hemiLength=d,N.numDirectionalShadows=A,N.numPointShadows=E,N.numSpotShadows=v,N.numSpotMaps=D,N.numLightProbes=U,n.version=fy++)}function c(l,h){let p=0,m=0,f=0,_=0,y=0,g=h.matrixWorldInverse;for(let d=0,A=l.length;d<A;d++){let E=l[d];if(E.isDirectionalLight){let v=n.directional[p];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(E.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(E.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){let v=n.point[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),m++}else if(E.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:n}}function tf(i){let e=new my(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function gy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new tf(i),e.set(s,[a])):r>=o.length?(a=new tf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var _y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yy=`uniform sampler2D shadow_pass;
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
}`;function xy(i,e,t){let n=new nr,s=new be,r=new be,o=new Jt,a=new Da({depthPacking:pd}),c=new La,l={},h=t.maxTextureSize,p={[Ri]:In,[In]:Ri,[fn]:fn},m=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:_y,fragmentShader:yy}),f=m.clone();f.defines.HORIZONTAL_PASS=1;let _=new mt;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Te(_,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let d=this.type;this.render=function(C,U,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let b=i.getRenderTarget(),w=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Ii),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let $=d!==xi&&this.type===xi,Q=d===xi&&this.type!==xi;for(let O=0,k=C.length;O<k;O++){let W=C[O],z=W.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ge=z.getFrameExtents();if(s.multiply(ge),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ge.x),s.x=r.x*ge.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ge.y),s.y=r.y*ge.y,z.mapSize.y=r.y)),z.map===null||$===!0||Q===!0){let ae=this.type!==xi?{minFilter:Nn,magFilter:Nn}:{};z.map!==null&&z.map.dispose(),z.map=new gi(s.x,s.y,ae),z.map.texture.name=W.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let _e=z.getViewportCount();for(let ae=0;ae<_e;ae++){let ee=z.getViewport(ae);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),K.viewport(o),z.updateMatrices(W,ae),n=z.getFrustum(),v(U,N,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===xi&&A(z,N),z.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(b,w,F)};function A(C,U){let N=e.update(y);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gi(s.x,s.y)),m.uniforms.shadow_pass.value=C.map.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(U,null,N,m,y,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(U,null,N,f,y,null)}function E(C,U,N,b){let w=null,F=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)w=F;else if(w=N.isPointLight===!0?c:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let K=w.uuid,$=U.uuid,Q=l[K];Q===void 0&&(Q={},l[K]=Q);let O=Q[$];O===void 0&&(O=w.clone(),Q[$]=O,U.addEventListener("dispose",D)),w=O}if(w.visible=U.visible,w.wireframe=U.wireframe,b===xi?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:p[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let K=i.properties.get(w);K.light=N}return w}function v(C,U,N,b,w){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===xi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);let $=e.update(C),Q=C.material;if(Array.isArray(Q)){let O=$.groups;for(let k=0,W=O.length;k<W;k++){let z=O[k],ge=Q[z.materialIndex];if(ge&&ge.visible){let _e=E(C,ge,b,w);C.onBeforeShadow(i,C,U,N,$,_e,z),i.renderBufferDirect(N,null,$,_e,C,z),C.onAfterShadow(i,C,U,N,$,_e,z)}}}else if(Q.visible){let O=E(C,Q,b,w);C.onBeforeShadow(i,C,U,N,$,O,null),i.renderBufferDirect(N,null,$,O,C,null),C.onAfterShadow(i,C,U,N,$,O,null)}}let K=C.children;for(let $=0,Q=K.length;$<Q;$++)v(K[$],U,N,b,w)}function D(C){C.target.removeEventListener("dispose",D);for(let N in l){let b=l[N],w=C.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}var vy={[Xa]:Ya,[qa]:Ja,[Za]:ja,[cs]:Ka,[Ya]:Xa,[Ja]:qa,[ja]:Za,[Ka]:cs};function My(i,e){function t(){let V=!1,Oe=new Jt,ke=null,$e=new Jt(0,0,0,0);return{setMask:function(Le){ke!==Le&&!V&&(i.colorMask(Le,Le,Le,Le),ke=Le)},setLocked:function(Le){V=Le},setClear:function(Le,we,Qe,dt,Ut){Ut===!0&&(Le*=dt,we*=dt,Qe*=dt),Oe.set(Le,we,Qe,dt),$e.equals(Oe)===!1&&(i.clearColor(Le,we,Qe,dt),$e.copy(Oe))},reset:function(){V=!1,ke=null,$e.set(-1,0,0,0)}}}function n(){let V=!1,Oe=!1,ke=null,$e=null,Le=null;return{setReversed:function(we){if(Oe!==we){let Qe=e.get("EXT_clip_control");we?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Oe=we;let dt=Le;Le=null,this.setClear(dt)}},getReversed:function(){return Oe},setTest:function(we){we?ce(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(we){ke!==we&&!V&&(i.depthMask(we),ke=we)},setFunc:function(we){if(Oe&&(we=vy[we]),$e!==we){switch(we){case Xa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Ka:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$e=we}},setLocked:function(we){V=we},setClear:function(we){Le!==we&&(Oe&&(we=1-we),i.clearDepth(we),Le=we)},reset:function(){V=!1,ke=null,$e=null,Le=null,Oe=!1}}}function s(){let V=!1,Oe=null,ke=null,$e=null,Le=null,we=null,Qe=null,dt=null,Ut=null;return{setTest:function(Tt){V||(Tt?ce(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(Tt){Oe!==Tt&&!V&&(i.stencilMask(Tt),Oe=Tt)},setFunc:function(Tt,en,Wn){(ke!==Tt||$e!==en||Le!==Wn)&&(i.stencilFunc(Tt,en,Wn),ke=Tt,$e=en,Le=Wn)},setOp:function(Tt,en,Wn){(we!==Tt||Qe!==en||dt!==Wn)&&(i.stencilOp(Tt,en,Wn),we=Tt,Qe=en,dt=Wn)},setLocked:function(Tt){V=Tt},setClear:function(Tt){Ut!==Tt&&(i.clearStencil(Tt),Ut=Tt)},reset:function(){V=!1,Oe=null,ke=null,$e=null,Le=null,we=null,Qe=null,dt=null,Ut=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},p={},m=new WeakMap,f=[],_=null,y=!1,g=null,d=null,A=null,E=null,v=null,D=null,C=null,U=new Mt(0,0,0),N=0,b=!1,w=null,F=null,K=null,$=null,Q=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,W=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=W>=2);let ge=null,_e={},ae=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),fe=new Jt().fromArray(ae),Re=new Jt().fromArray(ee);function je(V,Oe,ke,$e){let Le=new Uint8Array(4),we=i.createTexture();i.bindTexture(V,we),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ke;Qe++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Oe,0,i.RGBA,1,1,$e,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(Oe+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return we}let j={};j[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(cs),re(!1),pe(Bc),ce(i.CULL_FACE),ye(Ii);function ce(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function Ue(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function We(V,Oe){return p[V]!==Oe?(i.bindFramebuffer(V,Oe),p[V]=Oe,V===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Oe),V===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Ve(V,Oe){let ke=f,$e=!1;if(V){ke=m.get(Oe),ke===void 0&&(ke=[],m.set(Oe,ke));let Le=V.textures;if(ke.length!==Le.length||ke[0]!==i.COLOR_ATTACHMENT0){for(let we=0,Qe=Le.length;we<Qe;we++)ke[we]=i.COLOR_ATTACHMENT0+we;ke.length=Le.length,$e=!0}}else ke[0]!==i.BACK&&(ke[0]=i.BACK,$e=!0);$e&&i.drawBuffers(ke)}function ot(V){return _!==V?(i.useProgram(V),_=V,!0):!1}let Ie={[Wi]:i.FUNC_ADD,[Hu]:i.FUNC_SUBTRACT,[ku]:i.FUNC_REVERSE_SUBTRACT};Ie[Vu]=i.MIN,Ie[Gu]=i.MAX;let L={[Wu]:i.ZERO,[Xu]:i.ONE,[Yu]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[$u]:i.SRC_ALPHA_SATURATE,[Ju]:i.DST_COLOR,[Zu]:i.DST_ALPHA,[qu]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[ju]:i.ONE_MINUS_DST_COLOR,[Ku]:i.ONE_MINUS_DST_ALPHA,[Qu]:i.CONSTANT_COLOR,[ed]:i.ONE_MINUS_CONSTANT_COLOR,[td]:i.CONSTANT_ALPHA,[nd]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(V,Oe,ke,$e,Le,we,Qe,dt,Ut,Tt){if(V===Ii){y===!0&&(Ue(i.BLEND),y=!1);return}if(y===!1&&(ce(i.BLEND),y=!0),V!==zu){if(V!==g||Tt!==b){if((d!==Wi||v!==Wi)&&(i.blendEquation(i.FUNC_ADD),d=Wi,v=Wi),Tt)switch(V){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.ONE,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}A=null,E=null,D=null,C=null,U.set(0,0,0),N=0,g=V,b=Tt}return}Le=Le||Oe,we=we||ke,Qe=Qe||$e,(Oe!==d||Le!==v)&&(i.blendEquationSeparate(Ie[Oe],Ie[Le]),d=Oe,v=Le),(ke!==A||$e!==E||we!==D||Qe!==C)&&(i.blendFuncSeparate(L[ke],L[$e],L[we],L[Qe]),A=ke,E=$e,D=we,C=Qe),(dt.equals(U)===!1||Ut!==N)&&(i.blendColor(dt.r,dt.g,dt.b,Ut),U.copy(dt),N=Ut),g=V,b=!1}function he(V,Oe){V.side===fn?Ue(i.CULL_FACE):ce(i.CULL_FACE);let ke=V.side===In;Oe&&(ke=!ke),re(ke),V.blending===ls&&V.transparent===!1?ye(Ii):ye(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let $e=V.stencilWrite;a.setTest($e),$e&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),me(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(V){w!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),w=V)}function pe(V){V!==Fu?(ce(i.CULL_FACE),V!==F&&(V===Bc?i.cullFace(i.BACK):V===Ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),F=V}function Ce(V){V!==K&&(k&&i.lineWidth(V),K=V)}function me(V,Oe,ke){V?(ce(i.POLYGON_OFFSET_FILL),($!==Oe||Q!==ke)&&(i.polygonOffset(Oe,ke),$=Oe,Q=ke)):Ue(i.POLYGON_OFFSET_FILL)}function Fe(V){V?ce(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function Je(V){V===void 0&&(V=i.TEXTURE0+O-1),ge!==V&&(i.activeTexture(V),ge=V)}function Xe(V,Oe,ke){ke===void 0&&(ge===null?ke=i.TEXTURE0+O-1:ke=ge);let $e=_e[ke];$e===void 0&&($e={type:void 0,texture:void 0},_e[ke]=$e),($e.type!==V||$e.texture!==Oe)&&(ge!==ke&&(i.activeTexture(ke),ge=ke),i.bindTexture(V,Oe||j[V]),$e.type=V,$e.texture=Oe)}function I(){let V=_e[ge];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function P(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function B(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function q(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(V){fe.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),fe.copy(V))}function He(V){Re.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Re.copy(V))}function De(V,Oe){let ke=l.get(Oe);ke===void 0&&(ke=new WeakMap,l.set(Oe,ke));let $e=ke.get(V);$e===void 0&&($e=i.getUniformBlockIndex(Oe,V.name),ke.set(V,$e))}function Pe(V,Oe){let $e=l.get(Oe).get(V);c.get(Oe)!==$e&&(i.uniformBlockBinding(Oe,$e,V.__bindingPointIndex),c.set(Oe,$e))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ge=null,_e={},p={},m=new WeakMap,f=[],_=null,y=!1,g=null,d=null,A=null,E=null,v=null,D=null,C=null,U=new Mt(0,0,0),N=0,b=!1,w=null,F=null,K=null,$=null,Q=null,fe.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Ue,bindFramebuffer:We,drawBuffers:Ve,useProgram:ot,setBlending:ye,setMaterial:he,setFlipSided:re,setCullFace:pe,setLineWidth:Ce,setPolygonOffset:me,setScissorTest:Fe,activeTexture:Je,bindTexture:Xe,unbindTexture:I,compressedTexImage2D:x,compressedTexImage3D:X,texImage2D:ve,texImage3D:Se,updateUBOMapping:De,uniformBlockBinding:Pe,texStorage2D:q,texStorage3D:xe,texSubImage2D:ie,texSubImage3D:Me,compressedTexSubImage2D:P,compressedTexSubImage3D:B,scissor:Ae,viewport:He,reset:nt}}function Ey(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new be,h=new WeakMap,p,m=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,x){return f?new OffscreenCanvas(I,x):kr("canvas")}function y(I,x,X){let ie=1,Me=Xe(I);if((Me.width>X||Me.height>X)&&(ie=X/Math.max(Me.width,Me.height)),ie<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let P=Math.floor(ie*Me.width),B=Math.floor(ie*Me.height);p===void 0&&(p=_(P,B));let q=x?_(P,B):p;return q.width=P,q.height=B,q.getContext("2d").drawImage(I,0,0,P,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+P+"x"+B+")."),q}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),I;return I}function g(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(I,x,X,ie,Me=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let P=x;if(x===i.RED&&(X===i.FLOAT&&(P=i.R32F),X===i.HALF_FLOAT&&(P=i.R16F),X===i.UNSIGNED_BYTE&&(P=i.R8)),x===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(P=i.R8UI),X===i.UNSIGNED_SHORT&&(P=i.R16UI),X===i.UNSIGNED_INT&&(P=i.R32UI),X===i.BYTE&&(P=i.R8I),X===i.SHORT&&(P=i.R16I),X===i.INT&&(P=i.R32I)),x===i.RG&&(X===i.FLOAT&&(P=i.RG32F),X===i.HALF_FLOAT&&(P=i.RG16F),X===i.UNSIGNED_BYTE&&(P=i.RG8)),x===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(P=i.RG8UI),X===i.UNSIGNED_SHORT&&(P=i.RG16UI),X===i.UNSIGNED_INT&&(P=i.RG32UI),X===i.BYTE&&(P=i.RG8I),X===i.SHORT&&(P=i.RG16I),X===i.INT&&(P=i.RG32I)),x===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(P=i.RGB8UI),X===i.UNSIGNED_SHORT&&(P=i.RGB16UI),X===i.UNSIGNED_INT&&(P=i.RGB32UI),X===i.BYTE&&(P=i.RGB8I),X===i.SHORT&&(P=i.RGB16I),X===i.INT&&(P=i.RGB32I)),x===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),X===i.UNSIGNED_INT&&(P=i.RGBA32UI),X===i.BYTE&&(P=i.RGBA8I),X===i.SHORT&&(P=i.RGBA16I),X===i.INT&&(P=i.RGBA32I)),x===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(P=i.R11F_G11F_B10F)),x===i.RGBA){let B=Me?zr:At.getTransfer(ie);X===i.FLOAT&&(P=i.RGBA32F),X===i.HALF_FLOAT&&(P=i.RGBA16F),X===i.UNSIGNED_BYTE&&(P=B===Ot?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return(P===i.R16F||P===i.R32F||P===i.RG16F||P===i.RG32F||P===i.RGBA16F||P===i.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function v(I,x){let X;return I?x===null||x===ji||x===dr?X=i.DEPTH24_STENCIL8:x===ci?X=i.DEPTH32F_STENCIL8:x===hr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ji||x===dr?X=i.DEPTH_COMPONENT24:x===ci?X=i.DEPTH_COMPONENT32F:x===hr&&(X=i.DEPTH_COMPONENT16),X}function D(I,x){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Nn&&I.minFilter!==ii?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function C(I){let x=I.target;x.removeEventListener("dispose",C),N(x),x.isVideoTexture&&h.delete(x)}function U(I){let x=I.target;x.removeEventListener("dispose",U),w(x)}function N(I){let x=n.get(I);if(x.__webglInit===void 0)return;let X=I.source,ie=m.get(X);if(ie){let Me=ie[x.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&b(I),Object.keys(ie).length===0&&m.delete(X)}n.remove(I)}function b(I){let x=n.get(I);i.deleteTexture(x.__webglTexture);let X=I.source,ie=m.get(X);delete ie[x.__cacheKey],o.memory.textures--}function w(I){let x=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(x.__webglFramebuffer[ie]))for(let Me=0;Me<x.__webglFramebuffer[ie].length;Me++)i.deleteFramebuffer(x.__webglFramebuffer[ie][Me]);else i.deleteFramebuffer(x.__webglFramebuffer[ie]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ie])}else{if(Array.isArray(x.__webglFramebuffer))for(let ie=0;ie<x.__webglFramebuffer.length;ie++)i.deleteFramebuffer(x.__webglFramebuffer[ie]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ie=0;ie<x.__webglColorRenderbuffer.length;ie++)x.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ie]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let X=I.textures;for(let ie=0,Me=X.length;ie<Me;ie++){let P=n.get(X[ie]);P.__webglTexture&&(i.deleteTexture(P.__webglTexture),o.memory.textures--),n.remove(X[ie])}n.remove(I)}let F=0;function K(){F=0}function $(){let I=F;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function Q(I){let x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function O(I,x){let X=n.get(I);if(I.isVideoTexture&&Fe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){let ie=I.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(X,I,x);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+x)}function k(I,x){let X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){j(X,I,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+x)}function W(I,x){let X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){j(X,I,x);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+x)}function z(I,x){let X=n.get(I);if(I.version>0&&X.__version!==I.version){ce(X,I,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+x)}let ge={[da]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},_e={[Nn]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[_o]:i.NEAREST_MIPMAP_LINEAR,[ii]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},ae={[gd]:i.NEVER,[Ed]:i.ALWAYS,[_d]:i.LESS,[Qc]:i.LEQUAL,[yd]:i.EQUAL,[Md]:i.GEQUAL,[xd]:i.GREATER,[vd]:i.NOTEQUAL};function ee(I,x){if(x.type===ci&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ii||x.magFilter===el||x.magFilter===_o||x.magFilter===Ji||x.minFilter===ii||x.minFilter===el||x.minFilter===_o||x.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ge[x.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ge[x.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ge[x.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,_e[x.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ae[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nn||x.minFilter!==_o&&x.minFilter!==Ji||x.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function fe(I,x){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",C));let ie=x.source,Me=m.get(ie);Me===void 0&&(Me={},m.set(ie,Me));let P=Q(x);if(P!==I.__cacheKey){Me[P]===void 0&&(Me[P]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),Me[P].usedTimes++;let B=Me[I.__cacheKey];B!==void 0&&(Me[I.__cacheKey].usedTimes--,B.usedTimes===0&&b(x)),I.__cacheKey=P,I.__webglTexture=Me[P].texture}return X}function Re(I,x,X){return Math.floor(Math.floor(I/X)/x)}function je(I,x,X,ie){let P=I.updateRanges;if(P.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,X,ie,x.data);else{P.sort((Se,Ae)=>Se.start-Ae.start);let B=0;for(let Se=1;Se<P.length;Se++){let Ae=P[B],He=P[Se],De=Ae.start+Ae.count,Pe=Re(He.start,x.width,4),nt=Re(Ae.start,x.width,4);He.start<=De+1&&Pe===nt&&Re(He.start+He.count-1,x.width,4)===Pe?Ae.count=Math.max(Ae.count,He.start+He.count-Ae.start):(++B,P[B]=He)}P.length=B+1;let q=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Se=0,Ae=P.length;Se<Ae;Se++){let He=P[Se],De=Math.floor(He.start/4),Pe=Math.ceil(He.count/4),nt=De%x.width,V=Math.floor(De/x.width),Oe=Pe,ke=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,nt,V,Oe,ke,X,ie,x.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,q),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function j(I,x,X){let ie=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=i.TEXTURE_3D);let Me=fe(I,x),P=x.source;t.bindTexture(ie,I.__webglTexture,i.TEXTURE0+X);let B=n.get(P);if(P.version!==B.__version||Me===!0){t.activeTexture(i.TEXTURE0+X);let q=At.getPrimaries(At.workingColorSpace),xe=x.colorSpace===Li?null:At.getPrimaries(x.colorSpace),ve=x.colorSpace===Li||q===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Se=y(x.image,!1,s.maxTextureSize);Se=Je(x,Se);let Ae=r.convert(x.format,x.colorSpace),He=r.convert(x.type),De=E(x.internalFormat,Ae,He,x.colorSpace,x.isVideoTexture);ee(ie,x);let Pe,nt=x.mipmaps,V=x.isVideoTexture!==!0,Oe=B.__version===void 0||Me===!0,ke=P.dataReady,$e=D(x,Se);if(x.isDepthTexture)De=v(x.format===fr,x.type),Oe&&(V?t.texStorage2D(i.TEXTURE_2D,1,De,Se.width,Se.height):t.texImage2D(i.TEXTURE_2D,0,De,Se.width,Se.height,0,Ae,He,null));else if(x.isDataTexture)if(nt.length>0){V&&Oe&&t.texStorage2D(i.TEXTURE_2D,$e,De,nt[0].width,nt[0].height);for(let Le=0,we=nt.length;Le<we;Le++)Pe=nt[Le],V?ke&&t.texSubImage2D(i.TEXTURE_2D,Le,0,0,Pe.width,Pe.height,Ae,He,Pe.data):t.texImage2D(i.TEXTURE_2D,Le,De,Pe.width,Pe.height,0,Ae,He,Pe.data);x.generateMipmaps=!1}else V?(Oe&&t.texStorage2D(i.TEXTURE_2D,$e,De,Se.width,Se.height),ke&&je(x,Se,Ae,He)):t.texImage2D(i.TEXTURE_2D,0,De,Se.width,Se.height,0,Ae,He,Se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){V&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,De,nt[0].width,nt[0].height,Se.depth);for(let Le=0,we=nt.length;Le<we;Le++)if(Pe=nt[Le],x.format!==qn)if(Ae!==null)if(V){if(ke)if(x.layerUpdates.size>0){let Qe=ah(Pe.width,Pe.height,x.format,x.type);for(let dt of x.layerUpdates){let Ut=Pe.data.subarray(dt*Qe/Pe.data.BYTES_PER_ELEMENT,(dt+1)*Qe/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,dt,Pe.width,Pe.height,1,Ae,Ut)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,Pe.width,Pe.height,Se.depth,Ae,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Le,De,Pe.width,Pe.height,Se.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ke&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,Pe.width,Pe.height,Se.depth,Ae,He,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Le,De,Pe.width,Pe.height,Se.depth,0,Ae,He,Pe.data)}else{V&&Oe&&t.texStorage2D(i.TEXTURE_2D,$e,De,nt[0].width,nt[0].height);for(let Le=0,we=nt.length;Le<we;Le++)Pe=nt[Le],x.format!==qn?Ae!==null?V?ke&&t.compressedTexSubImage2D(i.TEXTURE_2D,Le,0,0,Pe.width,Pe.height,Ae,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,Le,De,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ke&&t.texSubImage2D(i.TEXTURE_2D,Le,0,0,Pe.width,Pe.height,Ae,He,Pe.data):t.texImage2D(i.TEXTURE_2D,Le,De,Pe.width,Pe.height,0,Ae,He,Pe.data)}else if(x.isDataArrayTexture)if(V){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,De,Se.width,Se.height,Se.depth),ke)if(x.layerUpdates.size>0){let Le=ah(Se.width,Se.height,x.format,x.type);for(let we of x.layerUpdates){let Qe=Se.data.subarray(we*Le/Se.data.BYTES_PER_ELEMENT,(we+1)*Le/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,Se.width,Se.height,1,Ae,He,Qe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ae,He,Se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,Se.width,Se.height,Se.depth,0,Ae,He,Se.data);else if(x.isData3DTexture)V?(Oe&&t.texStorage3D(i.TEXTURE_3D,$e,De,Se.width,Se.height,Se.depth),ke&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ae,He,Se.data)):t.texImage3D(i.TEXTURE_3D,0,De,Se.width,Se.height,Se.depth,0,Ae,He,Se.data);else if(x.isFramebufferTexture){if(Oe)if(V)t.texStorage2D(i.TEXTURE_2D,$e,De,Se.width,Se.height);else{let Le=Se.width,we=Se.height;for(let Qe=0;Qe<$e;Qe++)t.texImage2D(i.TEXTURE_2D,Qe,De,Le,we,0,Ae,He,null),Le>>=1,we>>=1}}else if(nt.length>0){if(V&&Oe){let Le=Xe(nt[0]);t.texStorage2D(i.TEXTURE_2D,$e,De,Le.width,Le.height)}for(let Le=0,we=nt.length;Le<we;Le++)Pe=nt[Le],V?ke&&t.texSubImage2D(i.TEXTURE_2D,Le,0,0,Ae,He,Pe):t.texImage2D(i.TEXTURE_2D,Le,De,Ae,He,Pe);x.generateMipmaps=!1}else if(V){if(Oe){let Le=Xe(Se);t.texStorage2D(i.TEXTURE_2D,$e,De,Le.width,Le.height)}ke&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,He,Se)}else t.texImage2D(i.TEXTURE_2D,0,De,Ae,He,Se);g(x)&&d(ie),B.__version=P.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function ce(I,x,X){if(x.image.length!==6)return;let ie=fe(I,x),Me=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);let P=n.get(Me);if(Me.version!==P.__version||ie===!0){t.activeTexture(i.TEXTURE0+X);let B=At.getPrimaries(At.workingColorSpace),q=x.colorSpace===Li?null:At.getPrimaries(x.colorSpace),xe=x.colorSpace===Li||B===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ve=x.isCompressedTexture||x.image[0].isCompressedTexture,Se=x.image[0]&&x.image[0].isDataTexture,Ae=[];for(let we=0;we<6;we++)!ve&&!Se?Ae[we]=y(x.image[we],!0,s.maxCubemapSize):Ae[we]=Se?x.image[we].image:x.image[we],Ae[we]=Je(x,Ae[we]);let He=Ae[0],De=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type),nt=E(x.internalFormat,De,Pe,x.colorSpace),V=x.isVideoTexture!==!0,Oe=P.__version===void 0||ie===!0,ke=Me.dataReady,$e=D(x,He);ee(i.TEXTURE_CUBE_MAP,x);let Le;if(ve){V&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,nt,He.width,He.height);for(let we=0;we<6;we++){Le=Ae[we].mipmaps;for(let Qe=0;Qe<Le.length;Qe++){let dt=Le[Qe];x.format!==qn?De!==null?V?ke&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe,0,0,dt.width,dt.height,De,dt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe,nt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe,0,0,dt.width,dt.height,De,Pe,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe,nt,dt.width,dt.height,0,De,Pe,dt.data)}}}else{if(Le=x.mipmaps,V&&Oe){Le.length>0&&$e++;let we=Xe(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,nt,we.width,we.height)}for(let we=0;we<6;we++)if(Se){V?ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ae[we].width,Ae[we].height,De,Pe,Ae[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,nt,Ae[we].width,Ae[we].height,0,De,Pe,Ae[we].data);for(let Qe=0;Qe<Le.length;Qe++){let Ut=Le[Qe].image[we].image;V?ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe+1,0,0,Ut.width,Ut.height,De,Pe,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe+1,nt,Ut.width,Ut.height,0,De,Pe,Ut.data)}}else{V?ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,De,Pe,Ae[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,nt,De,Pe,Ae[we]);for(let Qe=0;Qe<Le.length;Qe++){let dt=Le[Qe];V?ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe+1,0,0,De,Pe,dt.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe+1,nt,De,Pe,dt.image[we])}}}g(x)&&d(i.TEXTURE_CUBE_MAP),P.__version=Me.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function Ue(I,x,X,ie,Me,P){let B=r.convert(X.format,X.colorSpace),q=r.convert(X.type),xe=E(X.internalFormat,B,q,X.colorSpace),ve=n.get(x),Se=n.get(X);if(Se.__renderTarget=x,!ve.__hasExternalTextures){let Ae=Math.max(1,x.width>>P),He=Math.max(1,x.height>>P);Me===i.TEXTURE_3D||Me===i.TEXTURE_2D_ARRAY?t.texImage3D(Me,P,xe,Ae,He,x.depth,0,B,q,null):t.texImage2D(Me,P,xe,Ae,He,0,B,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),me(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,Me,Se.__webglTexture,0,Ce(x)):(Me===i.TEXTURE_2D||Me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,Me,Se.__webglTexture,P),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(I,x,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),x.depthBuffer){let ie=x.depthTexture,Me=ie&&ie.isDepthTexture?ie.type:null,P=v(x.stencilBuffer,Me),B=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=Ce(x);me(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,P,x.width,x.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,P,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,P,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,I)}else{let ie=x.textures;for(let Me=0;Me<ie.length;Me++){let P=ie[Me],B=r.convert(P.format,P.colorSpace),q=r.convert(P.type),xe=E(P.internalFormat,B,q,P.colorSpace),ve=Ce(x);X&&me(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,xe,x.width,x.height):me(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,xe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(I,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ie=n.get(x.depthTexture);ie.__renderTarget=x,(!ie.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),O(x.depthTexture,0);let Me=ie.__webglTexture,P=Ce(x);if(x.depthTexture.format===Ks)me(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Me,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Me,0);else if(x.depthTexture.format===fr)me(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Me,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function ot(I){let x=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){let ie=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){let Me=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",Me)};ie.addEventListener("dispose",Me),x.__depthDisposeCallback=Me}x.__boundDepthTexture=ie}if(I.depthTexture&&!x.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");let ie=I.texture.mipmaps;ie&&ie.length>0?Ve(x.__webglFramebuffer[0],I):Ve(x.__webglFramebuffer,I)}else if(X){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=i.createRenderbuffer(),We(x.__webglDepthbuffer[ie],I,!1);else{let Me=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=x.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,P)}}else{let ie=I.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),We(x.__webglDepthbuffer,I,!1);else{let Me=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,P)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(I,x,X){let ie=n.get(I);x!==void 0&&Ue(ie.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ot(I)}function L(I){let x=I.texture,X=n.get(I),ie=n.get(x);I.addEventListener("dispose",U);let Me=I.textures,P=I.isWebGLCubeRenderTarget===!0,B=Me.length>1;if(B||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=x.version,o.memory.textures++),P){X.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer[q]=[];for(let xe=0;xe<x.mipmaps.length;xe++)X.__webglFramebuffer[q][xe]=i.createFramebuffer()}else X.__webglFramebuffer[q]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)X.__webglFramebuffer[q]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(B)for(let q=0,xe=Me.length;q<xe;q++){let ve=n.get(Me[q]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&me(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let q=0;q<Me.length;q++){let xe=Me[q];X.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[q]);let ve=r.convert(xe.format,xe.colorSpace),Se=r.convert(xe.type),Ae=E(xe.internalFormat,ve,Se,xe.colorSpace,I.isXRRenderTarget===!0),He=Ce(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ae,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,X.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),We(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),ee(i.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Ue(X.__webglFramebuffer[q][xe],I,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe);else Ue(X.__webglFramebuffer[q],I,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);g(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(B){for(let q=0,xe=Me.length;q<xe;q++){let ve=Me[q],Se=n.get(ve),Ae=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Se.__webglTexture),ee(Ae,ve),Ue(X.__webglFramebuffer,I,ve,i.COLOR_ATTACHMENT0+q,Ae,0),g(ve)&&d(Ae)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(q=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,ie.__webglTexture),ee(q,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Ue(X.__webglFramebuffer[xe],I,x,i.COLOR_ATTACHMENT0,q,xe);else Ue(X.__webglFramebuffer,I,x,i.COLOR_ATTACHMENT0,q,0);g(x)&&d(q),t.unbindTexture()}I.depthBuffer&&ot(I)}function ye(I){let x=I.textures;for(let X=0,ie=x.length;X<ie;X++){let Me=x[X];if(g(Me)){let P=A(I),B=n.get(Me).__webglTexture;t.bindTexture(P,B),d(P),t.unbindTexture()}}}let he=[],re=[];function pe(I){if(I.samples>0){if(me(I)===!1){let x=I.textures,X=I.width,ie=I.height,Me=i.COLOR_BUFFER_BIT,P=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=n.get(I),q=x.length>1;if(q)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer);let xe=I.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Me|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Me|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,B.__webglColorRenderbuffer[ve]);let Se=n.get(x[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,X,ie,0,0,X,ie,Me,i.NEAREST),c===!0&&(he.length=0,re.length=0,he.push(i.COLOR_ATTACHMENT0+ve),I.depthBuffer&&I.resolveDepthBuffer===!1&&(he.push(P),re.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,B.__webglColorRenderbuffer[ve]);let Se=n.get(x[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let x=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ce(I){return Math.min(s.maxSamples,I.samples)}function me(I){let x=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Fe(I){let x=o.render.frame;h.get(I)!==x&&(h.set(I,x),I.update())}function Je(I,x){let X=I.colorSpace,ie=I.format,Me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==hs&&X!==Li&&(At.getTransfer(X)===Ot?(ie!==qn||Me!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),x}function Xe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=K,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=Ie,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=me}function Sy(i,e){function t(n,s=Li){let r,o=At.getTransfer(s);if(n===li)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xc)return i.BYTE;if(n===Yc)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===ur)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===qn)return i.RGBA;if(n===Ks)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===jc)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===yo||n===xo||n===vo||n===Mo)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===fl)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===_l||n===yl||n===xl||n===vl||n===Ml||n===El||n===Sl||n===bl||n===wl||n===Tl||n===Al||n===Rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cl||n===Pl||n===Il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cl)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dl||n===Ll||n===Nl||n===Ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var by=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
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

}`,vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $r(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new si({vertexShader:by,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends mi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,m=null,f=null,_=null,y=typeof XRWebGLBinding<"u",g=new vh,d={},A=t.getContextAttributes(),E=null,v=null,D=[],C=[],U=new be,N=null,b=new mn;b.viewport=new Jt;let w=new mn;w.viewport=new Jt;let F=[b,w],K=new Wa,$=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ce=D[j];return ce===void 0&&(ce=new Qs,D[j]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(j){let ce=D[j];return ce===void 0&&(ce=new Qs,D[j]=ce),ce.getGripSpace()},this.getHand=function(j){let ce=D[j];return ce===void 0&&(ce=new Qs,D[j]=ce),ce.getHandSpace()};function O(j){let ce=C.indexOf(j.inputSource);if(ce===-1)return;let Ue=D[ce];Ue!==void 0&&(Ue.update(j.inputSource,j.frame,l||o),Ue.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",W);for(let j=0;j<D.length;j++){let ce=C[j];ce!==null&&(C[j]=null,D[j].disconnect(ce))}$=null,Q=null,g.reset();for(let j in d)delete d[j];e.setRenderTarget(E),f=null,m=null,p=null,s=null,v=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",k),s.addEventListener("inputsourceschange",W),A.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(U),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,We=null,Ve=null;A.depth&&(Ve=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=A.stencil?fr:Ks,We=A.stencil?dr:ji);let ot={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:r};p=this.getBinding(),m=p.createProjectionLayer(ot),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),v=new gi(m.textureWidth,m.textureHeight,{format:qn,type:li,depthTexture:new jr(m.textureWidth,m.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{let Ue={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new gi(f.framebufferWidth,f.framebufferHeight,{format:qn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(j){for(let ce=0;ce<j.removed.length;ce++){let Ue=j.removed[ce],We=C.indexOf(Ue);We>=0&&(C[We]=null,D[We].disconnect(Ue))}for(let ce=0;ce<j.added.length;ce++){let Ue=j.added[ce],We=C.indexOf(Ue);if(We===-1){for(let ot=0;ot<D.length;ot++)if(ot>=C.length){C.push(Ue),We=ot;break}else if(C[ot]===null){C[ot]=Ue,We=ot;break}if(We===-1)break}let Ve=D[We];Ve&&Ve.connect(Ue)}}let z=new T,ge=new T;function _e(j,ce,Ue){z.setFromMatrixPosition(ce.matrixWorld),ge.setFromMatrixPosition(Ue.matrixWorld);let We=z.distanceTo(ge),Ve=ce.projectionMatrix.elements,ot=Ue.projectionMatrix.elements,Ie=Ve[14]/(Ve[10]-1),L=Ve[14]/(Ve[10]+1),ye=(Ve[9]+1)/Ve[5],he=(Ve[9]-1)/Ve[5],re=(Ve[8]-1)/Ve[0],pe=(ot[8]+1)/ot[0],Ce=Ie*re,me=Ie*pe,Fe=We/(-re+pe),Je=Fe*-re;if(ce.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Je),j.translateZ(Fe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ve[10]===-1)j.projectionMatrix.copy(ce.projectionMatrix),j.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let Xe=Ie+Fe,I=L+Fe,x=Ce-Je,X=me+(We-Je),ie=ye*L/I*Xe,Me=he*L/I*Xe;j.projectionMatrix.makePerspective(x,X,ie,Me,Xe,I),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ae(j,ce){ce===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ce.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ce=j.near,Ue=j.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(Ue=g.depthFar)),K.near=w.near=b.near=ce,K.far=w.far=b.far=Ue,($!==K.near||Q!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),$=K.near,Q=K.far),K.layers.mask=j.layers.mask|6,b.layers.mask=K.layers.mask&3,w.layers.mask=K.layers.mask&5;let We=j.parent,Ve=K.cameras;ae(K,We);for(let ot=0;ot<Ve.length;ot++)ae(Ve[ot],We);Ve.length===2?_e(K,b,w):K.projectionMatrix.copy(b.projectionMatrix),ee(j,K,We)};function ee(j,ce,Ue){Ue===null?j.matrix.copy(ce.matrixWorld):(j.matrix.copy(Ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(ce.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ce.projectionMatrix),j.projectionMatrixInverse.copy(ce.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=us*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(m===null&&f===null))return c},this.setFoveation=function(j){c=j,m!==null&&(m.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(K)},this.getCameraTexture=function(j){return d[j]};let fe=null;function Re(j,ce){if(h=ce.getViewerPose(l||o),_=ce,h!==null){let Ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let We=!1;Ue.length!==K.cameras.length&&(K.cameras.length=0,We=!0);for(let L=0;L<Ue.length;L++){let ye=Ue[L],he=null;if(f!==null)he=f.getViewport(ye);else{let pe=p.getViewSubImage(m,ye);he=pe.viewport,L===0&&(e.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(v))}let re=F[L];re===void 0&&(re=new mn,re.layers.enable(L),re.viewport=new Jt,F[L]=re),re.matrix.fromArray(ye.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ye.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(he.x,he.y,he.width,he.height),L===0&&(K.matrix.copy(re.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),We===!0&&K.cameras.push(re)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=n.getBinding();let L=p.getDepthInformation(Ue[0]);L&&L.isValid&&L.texture&&g.init(L,s.renderState)}if(Ve&&Ve.includes("camera-access")&&y){e.state.unbindTexture(),p=n.getBinding();for(let L=0;L<Ue.length;L++){let ye=Ue[L].camera;if(ye){let he=d[ye];he||(he=new $r,d[ye]=he);let re=p.getCameraImage(ye);he.sourceTexture=re}}}}for(let Ue=0;Ue<D.length;Ue++){let We=C[Ue],Ve=D[Ue];We!==null&&Ve!==void 0&&Ve.update(We,ce,l||o)}fe&&fe(j,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),_=null}let je=new nf;je.setAnimationLoop(Re),this.setAnimationLoop=function(j){fe=j},this.dispose=function(){}}},Es=new un,Ty=new Rt;function Ay(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,ih(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,A,E,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),p(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),m(g,d),d.isMeshPhysicalMaterial&&f(g,d,v)):d.isMeshMatcapMaterial?(r(g,d),_(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),y(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?c(g,d,A,E):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===In&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===In&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let A=e.get(d),E=A.envMap,v=A.envMapRotation;E&&(g.envMap.value=E,Es.copy(v),Es.x*=-1,Es.y*=-1,Es.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),g.envMapRotation.value.setFromMatrix4(Ty.makeRotationFromEuler(Es)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,A,E){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*A,g.scale.value=E*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function m(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function f(g,d,A){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===In&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){let A=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ry(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,E){let v=E.program;n.uniformBlockBinding(A,v)}function l(A,E){let v=s[A.id];v===void 0&&(_(A),v=h(A),s[A.id]=v,A.addEventListener("dispose",g));let D=E.program;n.updateUBOMapping(A,D);let C=e.render.frame;r[A.id]!==C&&(m(A),r[A.id]=C)}function h(A){let E=p();A.__bindingPointIndex=E;let v=i.createBuffer(),D=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function p(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){let E=s[A.id],v=A.uniforms,D=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,U=v.length;C<U;C++){let N=Array.isArray(v[C])?v[C]:[v[C]];for(let b=0,w=N.length;b<w;b++){let F=N[b];if(f(F,C,b,D)===!0){let K=F.__offset,$=Array.isArray(F.value)?F.value:[F.value],Q=0;for(let O=0;O<$.length;O++){let k=$[O],W=y(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,K+Q,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,Q),Q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,E,v,D){let C=A.value,U=E+"_"+v;if(D[U]===void 0)return typeof C=="number"||typeof C=="boolean"?D[U]=C:D[U]=C.clone(),!0;{let N=D[U];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return D[U]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(A){let E=A.uniforms,v=0,D=16;for(let U=0,N=E.length;U<N;U++){let b=Array.isArray(E[U])?E[U]:[E[U]];for(let w=0,F=b.length;w<F;w++){let K=b[w],$=Array.isArray(K.value)?K.value:[K.value];for(let Q=0,O=$.length;Q<O;Q++){let k=$[Q],W=y(k),z=v%D,ge=z%W.boundary,_e=z+ge;v+=ge,_e!==0&&D-_e<W.storage&&(v+=D-_e),K.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=v,v+=W.storage}}}let C=v%D;return C>0&&(v+=D-C),A.__size=v,A.__cache={},this}function y(A){let E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function g(A){let E=A.target;E.removeEventListener("dispose",g);let v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Hl=class{constructor(e={}){let{canvas:t=Sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let _=new Uint32Array(4),y=new Int32Array(4),g=null,d=null,A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,D=!1;this._outputColorSpace=hn;let C=0,U=0,N=null,b=-1,w=null,F=new Jt,K=new Jt,$=null,Q=new Mt(0),O=0,k=t.width,W=t.height,z=1,ge=null,_e=null,ae=new Jt(0,0,k,W),ee=new Jt(0,0,k,W),fe=!1,Re=new nr,je=!1,j=!1,ce=new Rt,Ue=new T,We=new Jt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function Ie(){return N===null?z:1}let L=n;function ye(R,Y){return t.getContext(R,Y)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Le,!1),L===null){let Y="webgl2";if(L=ye(Y,R),L===null)throw ye(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let he,re,pe,Ce,me,Fe,Je,Xe,I,x,X,ie,Me,P,B,q,xe,ve,Se,Ae,He,De,Pe,nt;function V(){he=new Y_(L),he.init(),De=new Sy(L,he),re=new z_(L,he,e,De),pe=new My(L,he),re.reversedDepthBuffer&&m&&pe.buffers.depth.setReversed(!0),Ce=new K_(L),me=new ly,Fe=new Ey(L,he,pe,me,re,De,Ce),Je=new k_(v),Xe=new X_(v),I=new tm(L),Pe=new O_(L,I),x=new q_(L,I,Ce,Pe),X=new j_(L,x,I,Ce),Se=new J_(L,re,Fe),q=new H_(me),ie=new ay(v,Je,Xe,he,re,Pe,q),Me=new Ay(v,me),P=new hy,B=new gy(he),ve=new F_(v,Je,Xe,pe,X,f,c),xe=new xy(v,X,re),nt=new Ry(L,Ce,re,pe),Ae=new B_(L,he,Ce),He=new Z_(L,he,Ce),Ce.programs=ie.programs,v.capabilities=re,v.extensions=he,v.properties=me,v.renderLists=P,v.shadowMap=xe,v.state=pe,v.info=Ce}V();let Oe=new Mh(v,L);this.xr=Oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let R=he.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=he.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(k,W,!1))},this.getSize=function(R){return R.set(k,W)},this.setSize=function(R,Y,se=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,W=Y,t.width=Math.floor(R*z),t.height=Math.floor(Y*z),se===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(k*z,W*z).floor()},this.setDrawingBufferSize=function(R,Y,se){k=R,W=Y,z=se,t.width=Math.floor(R*se),t.height=Math.floor(Y*se),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(ae)},this.setViewport=function(R,Y,se,le){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,Y,se,le),pe.viewport(F.copy(ae).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,Y,se,le){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,Y,se,le),pe.scissor(K.copy(ee).multiplyScalar(z).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(R){pe.setScissorTest(fe=R)},this.setOpaqueSort=function(R){ge=R},this.setTransparentSort=function(R){_e=R},this.getClearColor=function(R){return R.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,se=!0){let le=0;if(R){let J=!1;if(N!==null){let Ne=N.texture.format;J=Ne===al||Ne===ol||Ne===rl}if(J){let Ne=N.texture.type,Ye=Ne===li||Ne===ji||Ne===hr||Ne===dr||Ne===nl||Ne===il,et=ve.getClearColor(),Ke=ve.getClearAlpha(),ct=et.r,it=et.g,st=et.b;Ye?(_[0]=ct,_[1]=it,_[2]=st,_[3]=Ke,L.clearBufferuiv(L.COLOR,0,_)):(y[0]=ct,y[1]=it,y[2]=st,y[3]=Ke,L.clearBufferiv(L.COLOR,0,y))}else le|=L.COLOR_BUFFER_BIT}Y&&(le|=L.DEPTH_BUFFER_BIT),se&&(le|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),ve.dispose(),P.dispose(),B.dispose(),me.dispose(),Je.dispose(),Xe.dispose(),X.dispose(),Pe.dispose(),nt.dispose(),ie.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Wn),Oe.removeEventListener("sessionend",Ro),hi.stop()};function ke(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function $e(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let R=Ce.autoReset,Y=xe.enabled,se=xe.autoUpdate,le=xe.needsUpdate,J=xe.type;V(),Ce.autoReset=R,xe.enabled=Y,xe.autoUpdate=se,xe.needsUpdate=le,xe.type=J}function Le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function we(R){let Y=R.target;Y.removeEventListener("dispose",we),Qe(Y)}function Qe(R){dt(R),me.remove(R)}function dt(R){let Y=me.get(R).programs;Y!==void 0&&(Y.forEach(function(se){ie.releaseProgram(se)}),R.isShaderMaterial&&ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,se,le,J,Ne){Y===null&&(Y=Ve);let Ye=J.isMesh&&J.matrixWorld.determinant()<0,et=xr(R,Y,se,le,J);pe.setMaterial(le,Ye);let Ke=se.index,ct=1;if(le.wireframe===!0){if(Ke=x.getWireframeAttribute(se),Ke===void 0)return;ct=2}let it=se.drawRange,st=se.attributes.position,_t=it.start*ct,It=(it.start+it.count)*ct;Ne!==null&&(_t=Math.max(_t,Ne.start*ct),It=Math.min(It,(Ne.start+Ne.count)*ct)),Ke!==null?(_t=Math.max(_t,0),It=Math.min(It,Ke.count)):st!=null&&(_t=Math.max(_t,0),It=Math.min(It,st.count));let Wt=It-_t;if(Wt<0||Wt===1/0)return;Pe.setup(J,le,et,se,Ke);let Pt,ht=Ae;if(Ke!==null&&(Pt=I.get(Ke),ht=He,ht.setIndex(Pt)),J.isMesh)le.wireframe===!0?(pe.setLineWidth(le.wireframeLinewidth*Ie()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(J.isLine){let ze=le.linewidth;ze===void 0&&(ze=1),pe.setLineWidth(ze*Ie()),J.isLineSegments?ht.setMode(L.LINES):J.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else J.isPoints?ht.setMode(L.POINTS):J.isSprite&&ht.setMode(L.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))ht.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let ze=J._multiDrawStarts,wt=J._multiDrawCounts,gt=J._multiDrawCount,Dt=Ke?I.get(Ke).bytesPerElement:1,Ni=me.get(le).currentProgram.getUniforms();for(let an=0;an<gt;an++)Ni.setValue(L,"_gl_DrawID",an),ht.render(ze[an]/Dt,wt[an])}else if(J.isInstancedMesh)ht.renderInstances(_t,Wt,J.count);else if(se.isInstancedBufferGeometry){let ze=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,wt=Math.min(se.instanceCount,ze);ht.renderInstances(_t,Wt,wt)}else ht.render(_t,Wt)};function Ut(R,Y,se){R.transparent===!0&&R.side===fn&&R.forceSinglePass===!1?(R.side=In,R.needsUpdate=!0,St(R,Y,se),R.side=Ri,R.needsUpdate=!0,St(R,Y,se),R.side=fn):St(R,Y,se)}this.compile=function(R,Y,se=null){se===null&&(se=R),d=B.get(se),d.init(Y),E.push(d),se.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),R!==se&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),d.setupLights();let le=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Ne=J.material;if(Ne)if(Array.isArray(Ne))for(let Ye=0;Ye<Ne.length;Ye++){let et=Ne[Ye];Ut(et,se,J),le.add(et)}else Ut(Ne,se,J),le.add(Ne)}),d=E.pop(),le},this.compileAsync=function(R,Y,se=null){let le=this.compile(R,Y,se);return new Promise(J=>{function Ne(){if(le.forEach(function(Ye){me.get(Ye).currentProgram.isReady()&&le.delete(Ye)}),le.size===0){J(R);return}setTimeout(Ne,10)}he.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Tt=null;function en(R){Tt&&Tt(R)}function Wn(){hi.stop()}function Ro(){hi.start()}let hi=new nf;hi.setAnimationLoop(en),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(R){Tt=R,Oe.setAnimationLoop(R),R===null?hi.stop():hi.start()},Oe.addEventListener("sessionstart",Wn),Oe.addEventListener("sessionend",Ro),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(Y),Y=Oe.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,Y,N),d=B.get(R,E.length),d.init(Y),E.push(d),ce.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Re.setFromProjectionMatrix(ce,ni,Y.reversedDepth),j=this.localClippingEnabled,je=q.init(this.clippingPlanes,j),g=P.get(R,A.length),g.init(),A.push(g),Oe.enabled===!0&&Oe.isPresenting===!0){let Ne=v.xr.getDepthSensingMesh();Ne!==null&&at(Ne,Y,-1/0,v.sortObjects)}at(R,Y,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ge,_e),ot=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,ot&&ve.addToRenderList(g,R),this.info.render.frame++,je===!0&&q.beginShadows();let se=d.state.shadowsArray;xe.render(se,R,Y),je===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset();let le=g.opaque,J=g.transmissive;if(d.setupLights(),Y.isArrayCamera){let Ne=Y.cameras;if(J.length>0)for(let Ye=0,et=Ne.length;Ye<et;Ye++){let Ke=Ne[Ye];Et(le,J,R,Ke)}ot&&ve.render(R);for(let Ye=0,et=Ne.length;Ye<et;Ye++){let Ke=Ne[Ye];bn(g,R,Ke,Ke.viewport)}}else J.length>0&&Et(le,J,R,Y),ot&&ve.render(R),bn(g,R,Y);N!==null&&U===0&&(Fe.updateMultisampleRenderTarget(N),Fe.updateRenderTargetMipmap(N)),R.isScene===!0&&R.onAfterRender(v,R,Y),Pe.resetDefaultState(),b=-1,w=null,E.pop(),E.length>0?(d=E[E.length-1],je===!0&&q.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function at(R,Y,se,le){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Re.intersectsSprite(R)){le&&We.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ce);let Ye=X.update(R),et=R.material;et.visible&&g.push(R,Ye,et,se,We.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Re.intersectsObject(R))){let Ye=X.update(R),et=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),We.copy(R.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),We.copy(Ye.boundingSphere.center)),We.applyMatrix4(R.matrixWorld).applyMatrix4(ce)),Array.isArray(et)){let Ke=Ye.groups;for(let ct=0,it=Ke.length;ct<it;ct++){let st=Ke[ct],_t=et[st.materialIndex];_t&&_t.visible&&g.push(R,Ye,_t,se,We.z,st)}}else et.visible&&g.push(R,Ye,et,se,We.z,null)}}let Ne=R.children;for(let Ye=0,et=Ne.length;Ye<et;Ye++)at(Ne[Ye],Y,se,le)}function bn(R,Y,se,le){let J=R.opaque,Ne=R.transmissive,Ye=R.transparent;d.setupLightsView(se),je===!0&&q.setGlobalState(v.clippingPlanes,se),le&&pe.viewport(F.copy(le)),J.length>0&&ue(J,Y,se),Ne.length>0&&ue(Ne,Y,se),Ye.length>0&&ue(Ye,Y,se),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Et(R,Y,se,le){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[le.id]===void 0&&(d.state.transmissionRenderTarget[le.id]=new gi(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?ur:li,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));let Ne=d.state.transmissionRenderTarget[le.id],Ye=le.viewport||F;Ne.setSize(Ye.z*v.transmissionResolutionScale,Ye.w*v.transmissionResolutionScale);let et=v.getRenderTarget(),Ke=v.getActiveCubeFace(),ct=v.getActiveMipmapLevel();v.setRenderTarget(Ne),v.getClearColor(Q),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),ot&&ve.render(se);let it=v.toneMapping;v.toneMapping=Di;let st=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),d.setupLightsView(le),je===!0&&q.setGlobalState(v.clippingPlanes,le),ue(R,se,le),Fe.updateMultisampleRenderTarget(Ne),Fe.updateRenderTargetMipmap(Ne),he.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let It=0,Wt=Y.length;It<Wt;It++){let Pt=Y[It],ht=Pt.object,ze=Pt.geometry,wt=Pt.material,gt=Pt.group;if(wt.side===fn&&ht.layers.test(le.layers)){let Dt=wt.side;wt.side=In,wt.needsUpdate=!0,kt(ht,se,le,ze,wt,gt),wt.side=Dt,wt.needsUpdate=!0,_t=!0}}_t===!0&&(Fe.updateMultisampleRenderTarget(Ne),Fe.updateRenderTargetMipmap(Ne))}v.setRenderTarget(et,Ke,ct),v.setClearColor(Q,O),st!==void 0&&(le.viewport=st),v.toneMapping=it}function ue(R,Y,se){let le=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Ne=R.length;J<Ne;J++){let Ye=R[J],et=Ye.object,Ke=Ye.geometry,ct=Ye.group,it=Ye.material;it.allowOverride===!0&&le!==null&&(it=le),et.layers.test(se.layers)&&kt(et,Y,se,Ke,it,ct)}}function kt(R,Y,se,le,J,Ne){R.onBeforeRender(v,Y,se,le,J,Ne),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(v,Y,se,le,R,Ne),J.transparent===!0&&J.side===fn&&J.forceSinglePass===!1?(J.side=In,J.needsUpdate=!0,v.renderBufferDirect(se,Y,le,J,R,Ne),J.side=Ri,J.needsUpdate=!0,v.renderBufferDirect(se,Y,le,J,R,Ne),J.side=fn):v.renderBufferDirect(se,Y,le,J,R,Ne),R.onAfterRender(v,Y,se,le,J,Ne)}function St(R,Y,se){Y.isScene!==!0&&(Y=Ve);let le=me.get(R),J=d.state.lights,Ne=d.state.shadowsArray,Ye=J.state.version,et=ie.getParameters(R,J.state,Ne,Y,se),Ke=ie.getProgramCacheKey(et),ct=le.programs;le.environment=R.isMeshStandardMaterial?Y.environment:null,le.fog=Y.fog,le.envMap=(R.isMeshStandardMaterial?Xe:Je).get(R.envMap||le.environment),le.envMapRotation=le.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ct===void 0&&(R.addEventListener("dispose",we),ct=new Map,le.programs=ct);let it=ct.get(Ke);if(it!==void 0){if(le.currentProgram===it&&le.lightsStateVersion===Ye)return zn(R,et),it}else et.uniforms=ie.getUniforms(R),R.onBeforeCompile(et,v),it=ie.acquireProgram(et,Ke),ct.set(Ke,it),le.uniforms=et.uniforms;let st=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(st.clippingPlanes=q.uniform),zn(R,et),le.needsLights=Zn(R),le.lightsStateVersion=Ye,le.needsLights&&(st.ambientLightColor.value=J.state.ambient,st.lightProbe.value=J.state.probe,st.directionalLights.value=J.state.directional,st.directionalLightShadows.value=J.state.directionalShadow,st.spotLights.value=J.state.spot,st.spotLightShadows.value=J.state.spotShadow,st.rectAreaLights.value=J.state.rectArea,st.ltc_1.value=J.state.rectAreaLTC1,st.ltc_2.value=J.state.rectAreaLTC2,st.pointLights.value=J.state.point,st.pointLightShadows.value=J.state.pointShadow,st.hemisphereLights.value=J.state.hemi,st.directionalShadowMap.value=J.state.directionalShadowMap,st.directionalShadowMatrix.value=J.state.directionalShadowMatrix,st.spotShadowMap.value=J.state.spotShadowMap,st.spotLightMatrix.value=J.state.spotLightMatrix,st.spotLightMap.value=J.state.spotLightMap,st.pointShadowMap.value=J.state.pointShadowMap,st.pointShadowMatrix.value=J.state.pointShadowMatrix),le.currentProgram=it,le.uniformsList=null,it}function bt(R){if(R.uniformsList===null){let Y=R.currentProgram.getUniforms();R.uniformsList=gr.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function zn(R,Y){let se=me.get(R);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function xr(R,Y,se,le,J){Y.isScene!==!0&&(Y=Ve),Fe.resetTextureUnits();let Ne=Y.fog,Ye=le.isMeshStandardMaterial?Y.environment:null,et=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:hs,Ke=(le.isMeshStandardMaterial?Xe:Je).get(le.envMap||Ye),ct=le.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!se.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),st=!!se.morphAttributes.position,_t=!!se.morphAttributes.normal,It=!!se.morphAttributes.color,Wt=Di;le.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Wt=v.toneMapping);let Pt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ht=Pt!==void 0?Pt.length:0,ze=me.get(le),wt=d.state.lights;if(je===!0&&(j===!0||R!==w)){let ln=R===w&&le.id===b;q.setState(le,R,ln)}let gt=!1;le.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==wt.state.version||ze.outputColorSpace!==et||J.isBatchedMesh&&ze.batching===!1||!J.isBatchedMesh&&ze.batching===!0||J.isBatchedMesh&&ze.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ze.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ze.instancing===!1||!J.isInstancedMesh&&ze.instancing===!0||J.isSkinnedMesh&&ze.skinning===!1||!J.isSkinnedMesh&&ze.skinning===!0||J.isInstancedMesh&&ze.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ze.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ze.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ze.instancingMorph===!1&&J.morphTexture!==null||ze.envMap!==Ke||le.fog===!0&&ze.fog!==Ne||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==q.numPlanes||ze.numIntersection!==q.numIntersection)||ze.vertexAlphas!==ct||ze.vertexTangents!==it||ze.morphTargets!==st||ze.morphNormals!==_t||ze.morphColors!==It||ze.toneMapping!==Wt||ze.morphTargetsCount!==ht)&&(gt=!0):(gt=!0,ze.__version=le.version);let Dt=ze.currentProgram;gt===!0&&(Dt=St(le,Y,J));let Ni=!1,an=!1,Kn=!1,Gt=Dt.getUniforms(),_n=ze.uniforms;if(pe.useProgram(Dt.program)&&(Ni=!0,an=!0,Kn=!0),le.id!==b&&(b=le.id,an=!0),Ni||w!==R){pe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Gt.setValue(L,"projectionMatrix",R.projectionMatrix),Gt.setValue(L,"viewMatrix",R.matrixWorldInverse);let pn=Gt.map.cameraPosition;pn!==void 0&&pn.setValue(L,Ue.setFromMatrixPosition(R.matrixWorld)),re.logarithmicDepthBuffer&&Gt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Gt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,an=!0,Kn=!0)}if(J.isSkinnedMesh){Gt.setOptional(L,J,"bindMatrix"),Gt.setOptional(L,J,"bindMatrixInverse");let ln=J.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Gt.setValue(L,"boneTexture",ln.boneTexture,Fe))}J.isBatchedMesh&&(Gt.setOptional(L,J,"batchingTexture"),Gt.setValue(L,"batchingTexture",J._matricesTexture,Fe),Gt.setOptional(L,J,"batchingIdTexture"),Gt.setValue(L,"batchingIdTexture",J._indirectTexture,Fe),Gt.setOptional(L,J,"batchingColorTexture"),J._colorsTexture!==null&&Gt.setValue(L,"batchingColorTexture",J._colorsTexture,Fe));let wn=se.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Se.update(J,se,Dt),(an||ze.receiveShadow!==J.receiveShadow)&&(ze.receiveShadow=J.receiveShadow,Gt.setValue(L,"receiveShadow",J.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(_n.envMap.value=Ke,_n.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&Y.environment!==null&&(_n.envMapIntensity.value=Y.environmentIntensity),an&&(Gt.setValue(L,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&vr(_n,Kn),Ne&&le.fog===!0&&Me.refreshFogUniforms(_n,Ne),Me.refreshMaterialUniforms(_n,le,z,W,d.state.transmissionRenderTarget[R.id]),gr.upload(L,bt(ze),_n,Fe)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(gr.upload(L,bt(ze),_n,Fe),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Gt.setValue(L,"center",J.center),Gt.setValue(L,"modelViewMatrix",J.modelViewMatrix),Gt.setValue(L,"normalMatrix",J.normalMatrix),Gt.setValue(L,"modelMatrix",J.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){let ln=le.uniformsGroups;for(let pn=0,As=ln.length;pn<As;pn++){let ui=ln[pn];nt.update(ui,Dt),nt.bind(ui,Dt)}}return Dt}function vr(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Zn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(R,Y,se){let le=me.get(R);le.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),me.get(R.texture).__webglTexture=Y,me.get(R.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:se,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){let se=me.get(R);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};let Mr=L.createFramebuffer();this.setRenderTarget=function(R,Y=0,se=0){N=R,C=Y,U=se;let le=!0,J=null,Ne=!1,Ye=!1;if(R){let Ke=me.get(R);if(Ke.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(L.FRAMEBUFFER,null),le=!1;else if(Ke.__webglFramebuffer===void 0)Fe.setupRenderTarget(R);else if(Ke.__hasExternalTextures)Fe.rebindTextures(R,me.get(R.texture).__webglTexture,me.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let st=R.depthTexture;if(Ke.__boundDepthTexture!==st){if(st!==null&&me.has(st)&&(R.width!==st.image.width||R.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(R)}}let ct=R.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ye=!0);let it=me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?J=it[Y][se]:J=it[Y],Ne=!0):R.samples>0&&Fe.useMultisampledRTT(R)===!1?J=me.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?J=it[se]:J=it,F.copy(R.viewport),K.copy(R.scissor),$=R.scissorTest}else F.copy(ae).multiplyScalar(z).floor(),K.copy(ee).multiplyScalar(z).floor(),$=fe;if(se!==0&&(J=Mr),pe.bindFramebuffer(L.FRAMEBUFFER,J)&&le&&pe.drawBuffers(R,J),pe.viewport(F),pe.scissor(K),pe.setScissorTest($),Ne){let Ke=me.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ke.__webglTexture,se)}else if(Ye){let Ke=Y;for(let ct=0;ct<R.textures.length;ct++){let it=me.get(R.textures[ct]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ct,it.__webglTexture,se,Ke)}}else if(R!==null&&se!==0){let Ke=me.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ke.__webglTexture,se)}b=-1},this.readRenderTargetPixels=function(R,Y,se,le,J,Ne,Ye,et=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ke=Ke[Ye]),Ke){pe.bindFramebuffer(L.FRAMEBUFFER,Ke);try{let ct=R.textures[et],it=ct.format,st=ct.type;if(!re.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-le&&se>=0&&se<=R.height-J&&(R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+et),L.readPixels(Y,se,le,J,De.convert(it),De.convert(st),Ne))}finally{let ct=N!==null?me.get(N).__webglFramebuffer:null;pe.bindFramebuffer(L.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(R,Y,se,le,J,Ne,Ye,et=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ke=Ke[Ye]),Ke)if(Y>=0&&Y<=R.width-le&&se>=0&&se<=R.height-J){pe.bindFramebuffer(L.FRAMEBUFFER,Ke);let ct=R.textures[et],it=ct.format,st=ct.type;if(!re.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,_t),L.bufferData(L.PIXEL_PACK_BUFFER,Ne.byteLength,L.STREAM_READ),R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+et),L.readPixels(Y,se,le,J,De.convert(it),De.convert(st),0);let It=N!==null?me.get(N).__webglFramebuffer:null;pe.bindFramebuffer(L.FRAMEBUFFER,It);let Wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await bd(L,Wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,_t),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ne),L.deleteBuffer(_t),L.deleteSync(Wt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,se=0){let le=Math.pow(2,-se),J=Math.floor(R.image.width*le),Ne=Math.floor(R.image.height*le),Ye=Y!==null?Y.x:0,et=Y!==null?Y.y:0;Fe.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,se,0,0,Ye,et,J,Ne),pe.unbindTexture()};let Er=L.createFramebuffer(),Co=L.createFramebuffer();this.copyTextureToTexture=function(R,Y,se=null,le=null,J=0,Ne=null){Ne===null&&(J!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=J,J=0):Ne=0);let Ye,et,Ke,ct,it,st,_t,It,Wt,Pt=R.isCompressedTexture?R.mipmaps[Ne]:R.image;if(se!==null)Ye=se.max.x-se.min.x,et=se.max.y-se.min.y,Ke=se.isBox3?se.max.z-se.min.z:1,ct=se.min.x,it=se.min.y,st=se.isBox3?se.min.z:0;else{let wn=Math.pow(2,-J);Ye=Math.floor(Pt.width*wn),et=Math.floor(Pt.height*wn),R.isDataArrayTexture?Ke=Pt.depth:R.isData3DTexture?Ke=Math.floor(Pt.depth*wn):Ke=1,ct=0,it=0,st=0}le!==null?(_t=le.x,It=le.y,Wt=le.z):(_t=0,It=0,Wt=0);let ht=De.convert(Y.format),ze=De.convert(Y.type),wt;Y.isData3DTexture?(Fe.setTexture3D(Y,0),wt=L.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Fe.setTexture2DArray(Y,0),wt=L.TEXTURE_2D_ARRAY):(Fe.setTexture2D(Y,0),wt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Y.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Y.unpackAlignment);let gt=L.getParameter(L.UNPACK_ROW_LENGTH),Dt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ni=L.getParameter(L.UNPACK_SKIP_PIXELS),an=L.getParameter(L.UNPACK_SKIP_ROWS),Kn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,it),L.pixelStorei(L.UNPACK_SKIP_IMAGES,st);let Gt=R.isDataArrayTexture||R.isData3DTexture,_n=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){let wn=me.get(R),ln=me.get(Y),pn=me.get(wn.__renderTarget),As=me.get(ln.__renderTarget);pe.bindFramebuffer(L.READ_FRAMEBUFFER,pn.__webglFramebuffer),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let ui=0;ui<Ke;ui++)Gt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.get(R).__webglTexture,J,st+ui),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.get(Y).__webglTexture,Ne,Wt+ui)),L.blitFramebuffer(ct,it,Ye,et,_t,It,Ye,et,L.DEPTH_BUFFER_BIT,L.NEAREST);pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||me.has(R)){let wn=me.get(R),ln=me.get(Y);pe.bindFramebuffer(L.READ_FRAMEBUFFER,Er),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Co);for(let pn=0;pn<Ke;pn++)Gt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wn.__webglTexture,J,st+pn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wn.__webglTexture,J),_n?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,Ne,Wt+pn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,Ne),J!==0?L.blitFramebuffer(ct,it,Ye,et,_t,It,Ye,et,L.COLOR_BUFFER_BIT,L.NEAREST):_n?L.copyTexSubImage3D(wt,Ne,_t,It,Wt+pn,ct,it,Ye,et):L.copyTexSubImage2D(wt,Ne,_t,It,ct,it,Ye,et);pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _n?R.isDataTexture||R.isData3DTexture?L.texSubImage3D(wt,Ne,_t,It,Wt,Ye,et,Ke,ht,ze,Pt.data):Y.isCompressedArrayTexture?L.compressedTexSubImage3D(wt,Ne,_t,It,Wt,Ye,et,Ke,ht,Pt.data):L.texSubImage3D(wt,Ne,_t,It,Wt,Ye,et,Ke,ht,ze,Pt):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ne,_t,It,Ye,et,ht,ze,Pt.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ne,_t,It,Pt.width,Pt.height,ht,Pt.data):L.texSubImage2D(L.TEXTURE_2D,Ne,_t,It,Ye,et,ht,ze,Pt);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ni),L.pixelStorei(L.UNPACK_SKIP_ROWS,an),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Kn),Ne===0&&Y.generateMipmaps&&L.generateMipmap(wt),pe.unbindTexture()},this.initRenderTarget=function(R){me.get(R).__webglFramebuffer===void 0&&Fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Fe.setTextureCube(R,0):R.isData3DTexture?Fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Fe.setTexture2DArray(R,0):Fe.setTexture2D(R,0),pe.unbindTexture()},this.resetState=function(){C=0,U=0,N=null,pe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};var lf={type:"change"},wh={type:"start"},hf={type:"end"},Vl=new Xi,cf=new Zt,Cy=Math.cos(70*On.DEG2RAD),on=new T,Bn=2*Math.PI,Ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6,Gl=class extends _s{constructor(e,t=null){super(e,t),this.state=Ht.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pn.ROTATE,MIDDLE:Pn.DOLLY,RIGHT:Pn.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Lt,this._lastTargetPosition=new T,this._quat=new Lt().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cr,this._sphericalDelta=new cr,this._scale=1,this._panOffset=new T,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new T,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Iy.bind(this),this._onPointerDown=Py.bind(this),this._onPointerUp=Dy.bind(this),this._onContextMenu=zy.bind(this),this._onMouseWheel=Uy.bind(this),this._onKeyDown=Fy.bind(this),this._onTouchStart=Oy.bind(this),this._onTouchMove=By.bind(this),this._onMouseDown=Ly.bind(this),this._onMouseMove=Ny.bind(this),this._interceptControlDown=Hy.bind(this),this._interceptControlUp=ky.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lf),this.update(),this.state=Ht.NONE}update(e=null){let t=this.object.position;on.copy(t).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Bn:n>Math.PI&&(n-=Bn),s<-Math.PI?s+=Bn:s>Math.PI&&(s-=Bn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),t.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=on.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vl.origin.copy(this.object.position),Vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vl.direction))<Cy?this.object.lookAt(this.target):(cf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vl.intersectPlane(cf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(lf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bn/60*this.autoRotateSpeed*e:Bn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){on.setFromMatrixColumn(t,0),on.multiplyScalar(-e),this._panOffset.add(on)}_panUp(e,t){this.screenSpacePanning===!0?on.setFromMatrixColumn(t,1):(on.setFromMatrixColumn(t,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(e),this._panOffset.add(on)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;on.copy(s).sub(this.target);let r=on.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Py(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Iy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Dy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hf),this.state=Ht.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ly(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ht.DOLLY;break;case Pn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ht.ROTATE}break;case Pn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ht.PAN}break;default:this.state=Ht.NONE}this.state!==Ht.NONE&&this.dispatchEvent(wh)}function Ny(i){switch(this.state){case Ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Uy(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ht.NONE||(i.preventDefault(),this.dispatchEvent(wh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(hf))}function Fy(i){this.enabled!==!1&&this._handleKeyDown(i)}function Oy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ai.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ht.TOUCH_ROTATE;break;case ai.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ht.TOUCH_PAN;break;default:this.state=Ht.NONE}break;case 2:switch(this.touches.TWO){case ai.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ht.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ht.TOUCH_DOLLY_ROTATE;break;default:this.state=Ht.NONE}break;default:this.state=Ht.NONE}this.state!==Ht.NONE&&this.dispatchEvent(wh)}function By(i){switch(this._trackPointer(i),this.state){case Ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ht.NONE}}function zy(i){this.enabled!==!1&&i.preventDefault()}function Hy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ky(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ws=new Fn,Sn=new T,$i=new T,qt=new Lt,uf={X:new T(1,0,0),Y:new T(0,1,0),Z:new T(0,0,1)},Th={type:"change"},df={type:"mouseDown",mode:null},ff={type:"mouseUp",mode:null},pf={type:"objectChange"},Zl=class extends _s{constructor(e,t=null){super(void 0,t);let n=new Rh(this);this._root=n;let s=new Ch;this._gizmo=s,n.add(s);let r=new Ph;this._plane=r,n.add(r);let o=this;function a(E,v){let D=v;Object.defineProperty(o,E,{get:function(){return D!==void 0?D:v},set:function(C){D!==C&&(D=C,r[E]=C,s[E]=C,o.dispatchEvent({type:E+"-changed",value:C}),o.dispatchEvent(Th))}}),o[E]=v,r[E]=v,s[E]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let c=new T,l=new T,h=new Lt,p=new Lt,m=new T,f=new Lt,_=new T,y=new T,g=new T,d=0,A=new T;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",h),a("worldQuaternionStart",p),a("cameraPosition",m),a("cameraQuaternion",f),a("pointStart",_),a("pointEnd",y),a("rotationAxis",g),a("rotationAngle",d),a("eye",A),this._offset=new T,this._startNorm=new T,this._endNorm=new T,this._cameraScale=new T,this._parentPosition=new T,this._parentQuaternion=new Lt,this._parentQuaternionInv=new Lt,this._parentScale=new T,this._worldScaleStart=new T,this._worldQuaternionInv=new Lt,this._worldScale=new T,this._positionStart=new T,this._quaternionStart=new Lt,this._scaleStart=new T,this._getPointer=Vy.bind(this),this._onPointerDown=Wy.bind(this),this._onPointerHover=Gy.bind(this),this._onPointerMove=Xy.bind(this),this._onPointerUp=Yy.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&ws.setFromCamera(e,this.camera);let t=Ah(this._gizmo.picker[this.mode],ws);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&ws.setFromCamera(e,this.camera);let t=Ah(this._plane,ws,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,df.mode=this.mode,this.dispatchEvent(df)}}pointerMove(e){let t=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&ws.setFromCamera(e,this.camera);let o=Ah(this._plane,ws,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(qt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Sn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Sn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),$i.set(a,a,a)}else Sn.copy(this.pointStart),$i.copy(this.pointEnd),Sn.applyQuaternion(this._worldQuaternionInv),$i.applyQuaternion(this._worldQuaternionInv),$i.divide(Sn),t.search("X")===-1&&($i.x=1),t.search("Y")===-1&&($i.y=1),t.search("Z")===-1&&($i.z=1);s.scale.copy(this._scaleStart).multiply($i),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(Sn.setFromMatrixPosition(this.camera.matrixWorld)),c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Sn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(uf[t]),Sn.copy(uf[t]),r==="local"&&Sn.applyQuaternion(this.worldQuaternion),Sn.cross(this.eye),Sn.length()===0?c=!0:this.rotationAngle=this._offset.dot(Sn.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(qt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(qt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Th),this.dispatchEvent(pf)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(ff.mode=this.mode,this.dispatchEvent(ff)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Th),this.dispatchEvent(pf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ws}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function Vy(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function Gy(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Wy(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Xy(i){this.enabled&&this.pointerMove(this._getPointer(i))}function Yy(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Ah(i,e,t){let n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}var Wl=new un,Vt=new T(0,1,0),mf=new T(0,0,0),gf=new Rt,Xl=new Lt,ql=new Lt,Mi=new T,_f=new Rt,wo=new T(1,0,0),Ts=new T(0,1,0),To=new T(0,0,1),Yl=new T,So=new T,bo=new T,Rh=class extends Nt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Ch=class extends Nt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new $t({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new dn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let c=e.clone();c.color.setHex(16711680),c.opacity=.5;let l=e.clone();l.color.setHex(65280),l.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let p=e.clone();p.opacity=.25;let m=e.clone();m.color.setHex(16776960),m.opacity=.25;let f=e.clone();f.color.setHex(16776960);let _=e.clone();_.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:h,activeTransparent:m};let y=new Qt(0,.04,.1,12);y.translate(0,.05,0);let g=new Ct(.08,.08,.08);g.translate(0,.04,0);let d=new mt;d.setAttribute("position",new ft([0,0,0,1,0,0],3));let A=new Qt(.0075,.0075,.5,3);A.translate(0,.25,0);function E(O,k){let W=new oi(O,.0075,3,64,k*Math.PI*2);return W.rotateY(Math.PI/2),W.rotateX(Math.PI/2),W}function v(){let O=new mt;return O.setAttribute("position",new ft([0,0,0,1,1,1],3)),O}let D={X:[[new Te(y,r),[.5,0,0],[0,0,-Math.PI/2]],[new Te(y,r),[-.5,0,0],[0,0,Math.PI/2]],[new Te(A,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Te(y,o),[0,.5,0]],[new Te(y,o),[0,-.5,0],[Math.PI,0,0]],[new Te(A,o)]],Z:[[new Te(y,a),[0,0,.5],[Math.PI/2,0,0]],[new Te(y,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Te(A,a),null,[Math.PI/2,0,0]]],XYZ:[[new Te(new yi(.1,0),p),[0,0,0]]],XY:[[new Te(new Ct(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new Te(new Ct(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Te(new Ct(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new Te(new Qt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Te(new Qt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Te(new Qt(.2,0,.6,4),n),[0,.3,0]],[new Te(new Qt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Te(new Qt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Te(new Qt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Te(new yi(.2,0),n)]],XY:[[new Te(new Ct(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Te(new Ct(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Te(new Ct(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},U={START:[[new Te(new yi(.01,2),s),null,null,null,"helper"]],END:[[new Te(new yi(.01,2),s),null,null,null,"helper"]],DELTA:[[new Yt(v(),s),null,null,null,"helper"]],X:[[new Yt(d,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Yt(d,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Yt(d,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},N={XYZE:[[new Te(E(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new Te(E(.5,.5),r)]],Y:[[new Te(E(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Te(E(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Te(E(.75,1),m),null,[0,Math.PI/2,0]]]},b={AXIS:[[new Yt(d,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},w={XYZE:[[new Te(new Mn(.25,10,8),n)]],X:[[new Te(new oi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Te(new oi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Te(new oi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Te(new oi(.75,.1,2,24),n)]]},F={X:[[new Te(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new Te(A,r),[0,0,0],[0,0,-Math.PI/2]],[new Te(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Te(g,o),[0,.5,0]],[new Te(A,o)],[new Te(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Te(g,a),[0,0,.5],[Math.PI/2,0,0]],[new Te(A,a),[0,0,0],[Math.PI/2,0,0]],[new Te(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Te(new Ct(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new Te(new Ct(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Te(new Ct(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Te(new Ct(.1,.1,.1),p)]]},K={X:[[new Te(new Qt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Te(new Qt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Te(new Qt(.2,0,.6,4),n),[0,.3,0]],[new Te(new Qt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Te(new Qt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Te(new Qt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Te(new Ct(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Te(new Ct(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Te(new Ct(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Te(new Ct(.2,.2,.2),n),[0,0,0]]]},$={X:[[new Yt(d,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Yt(d,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Yt(d,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function Q(O){let k=new Nt;for(let W in O)for(let z=O[W].length;z--;){let ge=O[W][z][0].clone(),_e=O[W][z][1],ae=O[W][z][2],ee=O[W][z][3],fe=O[W][z][4];ge.name=W,ge.tag=fe,_e&&ge.position.set(_e[0],_e[1],_e[2]),ae&&ge.rotation.set(ae[0],ae[1],ae[2]),ee&&ge.scale.set(ee[0],ee[1],ee[2]),ge.updateMatrix();let Re=ge.geometry.clone();Re.applyMatrix4(ge.matrix),ge.geometry=Re,ge.renderOrder=1/0,ge.position.set(0,0,0),ge.rotation.set(0,0,0),ge.scale.set(1,1,1),k.add(ge)}return k}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=Q(D)),this.add(this.gizmo.rotate=Q(N)),this.add(this.gizmo.scale=Q(F)),this.add(this.picker.translate=Q(C)),this.add(this.picker.rotate=Q(w)),this.add(this.picker.scale=Q(K)),this.add(this.helper.translate=Q(U)),this.add(this.helper.rotate=Q(b)),this.add(this.helper.scale=Q($)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ql;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(qt.setFromEuler(Wl.set(0,0,0)),o.quaternion.copy(n).multiply(qt),Math.abs(Vt.copy(wo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(qt.setFromEuler(Wl.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(qt),Math.abs(Vt.copy(Ts).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(qt.setFromEuler(Wl.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(qt),Math.abs(Vt.copy(To).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(qt.setFromEuler(Wl.set(0,Math.PI/2,0)),Vt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(gf.lookAt(mf,Vt,Ts)),o.quaternion.multiply(qt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Sn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Sn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Sn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Vt.copy(wo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Vt.copy(Ts).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Vt.copy(To).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Vt.copy(To).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Vt.copy(wo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Vt.copy(Ts).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Xl.copy(n),Vt.copy(this.eye).applyQuaternion(qt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(gf.lookAt(this.eye,mf,Ts)),o.name==="X"&&(qt.setFromAxisAngle(wo,Math.atan2(-Vt.y,Vt.z)),qt.multiplyQuaternions(Xl,qt),o.quaternion.copy(qt)),o.name==="Y"&&(qt.setFromAxisAngle(Ts,Math.atan2(Vt.x,Vt.z)),qt.multiplyQuaternions(Xl,qt),o.quaternion.copy(qt)),o.name==="Z"&&(qt.setFromAxisAngle(To,Math.atan2(Vt.y,Vt.x)),qt.multiplyQuaternions(Xl,qt),o.quaternion.copy(qt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},Ph=class extends Te{constructor(){super(new Un(1e5,1e5,2,2),new $t({visible:!1,wireframe:!0,side:fn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Yl.copy(wo).applyQuaternion(t==="local"?this.worldQuaternion:ql),So.copy(Ts).applyQuaternion(t==="local"?this.worldQuaternion:ql),bo.copy(To).applyQuaternion(t==="local"?this.worldQuaternion:ql),Vt.copy(So),this.mode){case"translate":case"scale":switch(this.axis){case"X":Vt.copy(this.eye).cross(Yl),Mi.copy(Yl).cross(Vt);break;case"Y":Vt.copy(this.eye).cross(So),Mi.copy(So).cross(Vt);break;case"Z":Vt.copy(this.eye).cross(bo),Mi.copy(bo).cross(Vt);break;case"XY":Mi.copy(bo);break;case"YZ":Mi.copy(Yl);break;case"XZ":Vt.copy(bo),Mi.copy(So);break;case"XYZ":case"E":Mi.set(0,0,0);break}break;case"rotate":default:Mi.set(0,0,0)}Mi.length()===0?this.quaternion.copy(this.cameraQuaternion):(_f.lookAt(Sn.set(0,0,0),Mi,Vt),this.quaternion.setFromRotationMatrix(_f)),super.updateMatrixWorld(e)}};function yf({scene:i,camera:e,canvas:t}){let n=new jt;n.userData.primitiveBounds=!0,n.visible=!1,i.add(n);let s=new Ct(1,1,1),r=new eo(s);s.dispose();let o=new dn({color:7977215,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),a=new ri(r,o);a.renderOrder=30,n.add(a);let c=new Un(1,1),l=new $t({color:14150399,depthTest:!1,depthWrite:!1,side:fn}),h=[];for(let O of["x","y","z"])for(let k of[-1,1]){let W=new Te(c,l);W.userData.boundsHandle={axis:O,sign:k},W.renderOrder=32,n.add(W),h.push(W)}let p=new mt;p.setAttribute("position",new nn(new Float32Array(36),3));let m=new ri(p,o);m.renderOrder=30,m.frustumCulled=!1,n.add(m);let f=new mt;f.setAttribute("position",new nn(new Float32Array(54),3));let _=new ri(f,o);_.renderOrder=30,n.add(_),_.frustumCulled=!1;let y=["W","D","H"].map(O=>{let k=document.createElement("div");return k.dataset.primitiveDimension=O,k.style.cssText="position:absolute;pointer-events:none;display:none;z-index:24;padding:4px 7px;border:1px solid #79b8ff66;border-radius:4px;background:#172b37ed;color:#d7eaff;font:13px system-ui;white-space:nowrap;",t.parentElement?.append(k),k}),g=null,d=null,A=new Fn,E=new T,v=new T,D=()=>t.getBoundingClientRect();function C(O,k){return v.copy(O).applyMatrix4(e.matrixWorldInverse),E.copy(O).project(e),{x:k.left+(E.x+1)*k.width/2,y:k.top+(1-E.y)*k.height/2,depth:v.z,visible:v.z<0&&E.z>=-1&&E.z<=1}}function U(O,k){let W=O.clone().applyMatrix4(e.matrixWorldInverse);return Math.max(1e-6,2*Math.abs(W.z)*Math.tan(e.fov*Math.PI/360)/Math.max(1,k.height))}function N(O){let k=D();A.setFromCamera(new be((O.clientX-k.left)/Math.max(1,k.width)*2-1,1-(O.clientY-k.top)/Math.max(1,k.height)*2),e)}function b(O,k,{handles:W=!0}={}){g=O,n.visible=!!(k&&O);for(let me of y)me.style.display="none";if(!n.visible)return;e.updateMatrixWorld(!0),O.updateWorldMatrix(!0,!1);let z=D(),ge=O.getWorldPosition(new T),_e=O.getWorldQuaternion(new Lt),ae=U(ge,z);a.position.copy(ge),a.quaternion.copy(_e),a.scale.copy(O.scale);let ee=C(ge,z),fe=[],Re=p.attributes.position,je=0,j=!1;for(let me of h){let{axis:Fe,sign:Je}=me.userData.boundsHandle,Xe=new T,I=new T;Xe[Fe]=Je*.5,I[Fe]=1,I.applyQuaternion(_e),O.localToWorld(Xe),me.userData.facePosition=Xe.clone();let x=C(Xe,z),X=e.position.clone().sub(Xe).normalize();if(me.visible=W&&x.visible&&Math.abs(X.dot(I))<.98,me.visible){let Me=x.x-ee.x,P=x.y-ee.y,B=Math.hypot(Me,P),q=B>1e-6?Me/B:1,xe=B>1e-6?P/B:0,ve=Math.max(24,B),Se=ee.x+q*ve,Ae=ee.y+xe*ve;for(;fe.some(He=>Math.hypot(He.x-Se,He.y-Ae)<20)&&ve<Math.max(24,B)+80;)ve+=12,Se=ee.x+q*ve,Ae=ee.y+xe*ve;if(fe.push({x:Se,y:Ae}),Math.hypot(Se-x.x,Ae-x.y)>.5){j=!0;let He=Xe.clone().project(e);Xe.set((Se-z.left)/z.width*2-1,1-(Ae-z.top)/z.height*2,He.z).unproject(e)}}me.position.copy(Xe),me.quaternion.copy(e.quaternion),me.scale.setScalar(U(Xe,z)*(me===d?11:9)),me.userData.screen=C(Xe,z);let ie=me.visible?me.userData.facePosition:Xe;Re.setXYZ(je++,ie.x,ie.y,ie.z),Re.setXYZ(je++,Xe.x,Xe.y,Xe.z)}Re.needsUpdate=!0;let ce=O.worldToLocal(e.position.clone()),Ue=ce.x>=0?1:-1,We=ce.z>=0?1:-1,Ve=ae*(j?55:27),ot=Ue*(.5+Ve/O.scale.x),Ie=We*(.5+Ve/O.scale.z),L=-.5-Ve/O.scale.y,ye=[{a:[-.5,L,Ie],b:[.5,L,Ie],tick:[0,1,0],size:O.scale.x},{a:[ot,L,-.5],b:[ot,L,.5],tick:[0,1,0],size:O.scale.z},{a:[ot,-.5,Ie],b:[ot,.5,Ie],tick:[1,0,0],size:O.scale.y}],he=f.attributes.position,re=0,pe=me=>he.setXYZ(re++,me.x,me.y,me.z),Ce=[];ye.forEach((me,Fe)=>{let Je=O.localToWorld(new T(...me.a)),Xe=O.localToWorld(new T(...me.b)),I=new T(...me.tick).applyQuaternion(_e).multiplyScalar(ae*4);pe(Je),pe(Xe);for(let B of[Je,Xe])pe(B.clone().sub(I)),pe(B.clone().add(I));let x=C(Je.clone().add(Xe).multiplyScalar(.5),z),X=y[Fe];if(X.textContent=y[Fe].dataset.primitiveDimension+" "+me.size.toFixed(2)+" m",!x.visible||x.x<z.left||x.y<z.top||x.x>z.left+z.width||x.y>z.top+z.height)return;let ie=Math.max(5,Math.min(z.width-88,x.x-z.left-40)),Me=Math.max(5,Math.min(z.height-31,x.y-z.top-12)),P=Me;for(let B of[0,30,-30,60,-60,90,-90]){let q=Math.max(5,Math.min(z.height-31,Me+B));if(!Ce.some(xe=>Math.abs(xe.left-ie)<87&&Math.abs(xe.top-q)<28)){P=q;break}}Ce.push({left:ie,top:P}),Object.assign(X.style,{display:"block",left:ie+"px",top:P+"px"})}),he.needsUpdate=!0,n.updateMatrixWorld(!0)}function w(O){if(!n.visible||!g)return null;b(g,!0);let k=O.pointerType==="touch"?18:10;return h.filter(z=>z.visible).map(z=>({handle:z,p:z.userData.screen,d:Math.hypot(O.clientX-z.userData.screen.x,O.clientY-z.userData.screen.y)})).filter(z=>z.d<=k).sort((z,ge)=>Math.abs(z.d-ge.d)<2?ge.p.depth-z.p.depth:z.d-ge.d)[0]?.handle||null}function F(O){d=O}function K(O,k,W){let{axis:z,sign:ge}=k.userData.boundsHandle,_e=new T;_e[z]=1,_e.applyQuaternion(W.getWorldQuaternion(new Lt)).normalize();let ae=k.userData.facePosition.clone(),ee=e.position.clone().sub(ae).normalize();if(Math.abs(ee.dot(_e))>=.98)return null;let fe=ee.addScaledVector(_e,-ee.dot(_e)).normalize(),Re=new Zt().setFromNormalAndCoplanarPoint(fe,ae);N(O);let je=A.ray.intersectPlane(Re,new T);return je?{axis:z,sign:ge,direction:_e,plane:Re,start:je,position:W.position.clone(),scale:W.scale.clone()}:null}function $(O,k,W,z){N(k);let ge=A.ray.intersectPlane(O.plane,new T);if(!ge)return;let _e=O.scale[O.axis]+ge.sub(O.start).dot(O.direction)*O.sign;z&&(_e=Math.round(_e/z)*z),_e=Math.max(O.original.wall?.25:.02,Math.min(O.original.wall&&O.axis==="z"?1:150,_e)),W.scale.copy(O.scale),W.scale[O.axis]=_e,W.position.copy(O.position).addScaledVector(O.direction,(_e-O.scale[O.axis])*O.sign/2),W.updateMatrixWorld(!0),b(W,!0)}function Q(){n.removeFromParent(),r.dispose(),c.dispose(),l.dispose(),p.dispose(),f.dispose(),o.dispose();for(let O of y)O.remove()}return{update:b,hit:w,hover:F,begin:K,resize:$,dispose:Q}}function xf(i,e){let t=new Nt;t.userData.primitiveGroup=!0,i.add(t);let n=[],s=0;function r(m){n=m.slice();let f=new gn;s=0;for(let _ of n)_.updateMatrix(),f.union(new gn(new T(-.5,-.5,-.5),new T(.5,.5,.5)).applyMatrix4(_.matrix)),s+=e.get(_.userData.level)?.position.y||0;s/=Math.max(1,n.length),n.length&&(f.getCenter(t.position),t.position.y+=s,f.getSize(t.scale),t.scale.max(new T(.02,.02,.02)),t.quaternion.identity(),t.updateMatrixWorld(!0))}function o(){let m=n.reduce((f,_)=>f+(e.get(_.userData.level)?.position.y||0),0)/Math.max(1,n.length);t.position.y+=m-s,s=m,t.updateMatrixWorld(!0)}function a(){return{group:!0,position:t.position.clone(),scale:t.scale.clone(),quaternion:t.quaternion.clone(),pivot:t.position.clone().add(new T(0,-s,0)),members:n.map(m=>({root:m,original:JSON.parse(JSON.stringify(m.userData.record)),position:m.position.clone(),scale:m.scale.clone(),quaternion:m.quaternion.clone()}))}}let c=(m,f)=>f?c(f,m%f):m;function l(m,f,_){let y=0,g=1/0,d=0;for(let v of m.members)for(let D of["x","y","z"])y=Math.max(y,(v.original.wall?.25:.02)/v.scale[D]),g=Math.min(g,(v.original.wall&&D==="z"?1:150)/v.scale[D]),v.original.wall&&(d=c(d,Math.round(v.scale[D]*4)));let A=d?1/d:_/Math.max(m.scale.x,m.scale.y,m.scale.z),E=Number.isFinite(f)?f:1;if(A){let v=d?0:1;E=v+Math.round((E-v)/A)*A,y=v+Math.ceil((y-v-1e-9)/A)*A,g=v+Math.floor((g-v+1e-9)/A)*A}return Math.max(y,Math.min(g,E))}function h(m,f,_){if(f==="translate"){let y=t.position.clone().sub(m.position);if(_)for(let g of["x","y","z"])y[g]=Math.round(y[g]/_)*_;t.position.copy(m.position).add(y);for(let g of m.members)g.root.position.copy(g.position).add(y),g.root.quaternion.copy(g.quaternion),g.root.scale.copy(g.scale)}else if(f==="rotate"){let y=t.quaternion.clone().multiply(m.quaternion.clone().invert());for(let g of m.members)g.root.position.copy(g.position).sub(m.pivot).applyQuaternion(y).add(m.pivot),g.root.quaternion.copy(y).multiply(g.quaternion),g.root.scale.copy(g.scale)}else if(f==="scale"){let y=l(m,t.scale.x/m.scale.x,_);t.scale.copy(m.scale).multiplyScalar(y);for(let g of m.members)g.root.position.copy(g.position).sub(m.pivot).multiplyScalar(y).add(m.pivot),g.root.scale.copy(g.scale).multiplyScalar(y),g.root.quaternion.copy(g.quaternion)}for(let y of m.members)y.root.updateMatrixWorld(!0);t.updateMatrixWorld(!0)}function p(m){for(let f of m.members)f.root.position.copy(f.position),f.root.scale.copy(f.scale),f.root.quaternion.copy(f.quaternion),f.root.updateMatrixWorld(!0);t.position.copy(m.position),t.scale.copy(m.scale),t.quaternion.copy(m.quaternion),t.updateMatrixWorld(!0)}return{target:t,select:r,syncDisplay:o,begin:a,preview:h,restore:p,dispose(){t.removeFromParent()}}}function vf({scene:i,camera:e,renderer:t,controls:n,groups:s,data:r,prismGeometry:o,surfaceHit:a,enabled:c,canNavigate:l=()=>!0,onSelect:h,onEdit:p,onEditMany:m}){let f=t.domElement,_=[],y=new Map,g=new Fn,d=new be,A={cube:new Ct(1,1,1),cylinder:new Qt(.5,.5,1,32),sphere:new Mn(.5,32,16),hemisphere:new Mn(.5,32,16,0,Math.PI*2,0,Math.PI/2)};A.hemisphere.scale(1,2,1),A.hemisphere.translate(0,-.5,0);let E=new Qr(.5,32);E.rotateX(Math.PI/2),E.translate(0,-.5,0);let v=[],D=[];for(let P of r.levels)for(let B of P.primitives||[]){let q=new jt,xe=new ps({color:B.color||"#d6a46b",roughness:.8,side:fn});v.push(xe);let ve=JSON.parse(JSON.stringify(B)),Se=P.rampWallCuts?.[B.id];if(q.userData={primitive:B.id,level:P.id,record:ve,floorZ:P.z},fe(q,B),Array.isArray(Se)&&o){let Ae=q.matrixWorld.clone().invert();for(let He of Se){let De=o(He);De.translate(0,He.z,0),De.applyMatrix4(Ae),D.push(De),q.add(new Te(De,xe))}}else{let Ae=A[B.primitive];if(B.primitive==="cube"&&B.taper){Ae=Ae.clone();let He=Ae.attributes.position,De=B.taper;for(let Pe=0;Pe<He.count;Pe++){let nt=He.getY(Pe)>0;He.setX(Pe,He.getX(Pe)*(nt?De.topX:De.bottomX)),He.setZ(Pe,He.getZ(Pe)*(nt?De.topY:De.bottomY))}He.needsUpdate=!0,Ae.computeVertexNormals(),Ae.computeBoundingBox(),Ae.computeBoundingSphere(),D.push(Ae)}q.add(new Te(Ae,xe)),B.primitive==="hemisphere"&&q.add(new Te(E,xe))}s.get(P.id).add(q),_.push(q),y.set(P.id+"\0"+B.id,q)}let C=new Zl(e,f);C.disconnect(),f.style.touchAction="none",C.setSize(.8),C.setSpace("world");let U=C.getHelper();i.add(U);let N=yf({scene:i,camera:e,canvas:f}),b=xf(i,s),w=["gizmo","picker","helper"].map(P=>({parent:C._gizmo[P].scale,children:C._gizmo[P].scale.children.slice()})),F=!1;function K(P){if(F!==P){F=P;for(let B of w){for(let q of B.children)B.parent.remove(q);for(let q of B.children)(!P||q.name==="XYZ")&&B.parent.add(q)}}}let $=[],Q=new Set,O=()=>$.length>1,k=null,W=null,z=null,ge=!1,_e=null,ae=window.KERN_DRAG_AXES?.register(()=>W&&!W.bounds&&C.mode==="translate"?W:null,()=>x(),P=>({space:"3d",origin:P.feedbackOrigin,supported:P.feedbackAxes})),ee=C._plane.updateMatrixWorld;C._plane.updateMatrixWorld=function(P){W?.translationPlane&&C.mode==="translate"?(this.position.copy(W.translationPlane.position),this.quaternion.copy(W.translationPlane.quaternion),Nt.prototype.updateMatrixWorld.call(this,P)):ee.call(this,P)};function fe(P,B){P.position.set(B.x+B.w/2,P.userData.floorZ+B.z+B.height/2,B.y+B.h/2),P.scale.set(B.w,B.height,B.h),P.rotation.set(B.tiltX*Math.PI/180,-B.rotation*Math.PI/180,B.tiltY*Math.PI/180,"XYZ"),P.updateMatrixWorld(!0)}let Re=P=>s.get(P.userData.level)?.visible&&window.KERN_LAYERS?.shown?.("primitives",P.userData.primitive,P.userData.level)!==!1,je=P=>Re(P)&&window.KERN_LAYERS?.available?.("primitives",P.userData.primitive,P.userData.level)!==!1;function j(){if(!k||!c()||!$.length||$.some(B=>!je(B)))return!1;let P=window.KERN_LAYERS?.references?.();return!P||P.length===$.length&&P.every(B=>B.kind==="primitives"&&Q.has(B.floor+"\0"+B.id))}function ce(){O()&&!W&&b.syncDisplay(),N.update(k,j(),{handles:!O()})}function Ue(){if(ge)return;for(let B of _)B.visible=window.KERN_LAYERS?.shown?.("primitives",B.userData.primitive,B.userData.level)!==!1;let P=j();C.enabled=P,U.visible=P,!P&&W&&x(),ce()}function We(P){x();let B=(P||[]).filter(q=>q.kind==="primitives").map(q=>y.get(q.floor+"\0"+q.id)).filter(Boolean);$=B.length===P.length?B:[],Q=new Set($.map(q=>q.userData.level+"\0"+q.userData.primitive)),O()&&b.select($),k=O()?b.target:$[0]||null,k?C.attach(k):C.detach(),C.setMode(window.KERN_PRIMITIVE_UI?.mode()||"translate"),C.setSpace(C.mode==="scale"?"local":"world"),ot(),Ue()}function Ve(){let P=Number(window.snapSize?.());return Number.isFinite(P)&&P>0?P:null}function ot(P={}){let B=$.some(q=>q.userData.record.wall===!0);C.setTranslationSnap(!O()&&B?.25:null),C.setScaleSnap(O()?null:B?.25:P.ctrlKey?null:Ve()),C.setRotationSnap(P.shiftKey&&!P.ctrlKey?Math.PI/36:B?Math.PI/180:null),C.showX=C.showZ=!(B&&C.mode==="rotate"),C.showY=!0,K(O()&&C.mode==="scale")}function Ie(P,B){_e&&(_e.removeFromParent(),_e.geometry.dispose(),_e.material.dispose(),_e=null),!(!P||!s.has(B))&&(_e=new Te(new Ct(1,1,1),new $t({color:"#72d8b0",transparent:!0,opacity:.4,depthWrite:!1})),_e.userData.floorZ=r.levels.find(q=>q.id===B).z,fe(_e,P),s.get(B).add(_e))}function L(P){let B=f.getBoundingClientRect();return{x:(P.clientX-B.left)/Math.max(1,B.width)*2-1,y:-(P.clientY-B.top)/Math.max(1,B.height)*2+1,button:P.button??0}}function ye(P){let B=L(P);return d.set(B.x,B.y),i.updateMatrixWorld(!0),e.updateMatrixWorld(!0),g.setFromCamera(d,e),g.intersectObjects(_.filter(Re),!0).map(q=>{let xe=q.object;for(;xe&&!xe.userData.primitive;)xe=xe.parent;return{...q,root:xe}}).filter(q=>q.root)}function he(P){let B=ye(P)[0];if(!B)return null;let q=a(P);return q&&q.point.distanceTo(e.position)+.002<B.distance?null:B}function re(P){P.preventDefault(),P.stopImmediatePropagation()}function pe(P){if(ge)return!1;if(W||z)return re(P),!0;if(!c()||P.altKey||P.button!==0)return!1;if(Ue(),k&&C.enabled&&!O()&&!P.shiftKey){let q=N.hit(P),xe=q&&N.begin(P,q,k);if(xe)return W={...xe,bounds:!0,id:P.pointerId,root:k,original:JSON.parse(JSON.stringify(k.userData.record))},C.axis=null,n.enabled=!1,N.hover(q),f.setPointerCapture?.(P.pointerId),re(P),!0}if(k&&C.enabled&&(!P.shiftKey||C.mode==="rotate")&&(ot(P),i.updateMatrixWorld(!0),C.pointerHover(L(P)),C.axis)){let q=O()?window.KERN_PRIMITIVE_UI?.transformScope?.():null;if(O()&&!q)return re(P),!0;let xe=O()?null:JSON.parse(JSON.stringify(k.userData.record)),ve=O()?b.begin():null;if(C.pointerDown(L(P)),C.dragging)return W=ve?{...ve,scope:q,id:P.pointerId,mode:C.mode,clientX:P.clientX,clientY:P.clientY}:{id:P.pointerId,root:k,original:xe,position:k.position.clone()},C.mode==="translate"&&(W.feedbackOrigin=k.getWorldPosition(new T),W.feedbackAxes=["x","y","z"].filter(Se=>C.axis?.toLowerCase().includes(Se)),W.translationPlane={position:C._plane.position.clone(),quaternion:C._plane.quaternion.clone()},window.KERN_DRAG_AXES?.begin(W,k.position)),n.enabled=!1,f.setPointerCapture?.(P.pointerId),re(P),!0}let B=he(P);return B?(z={id:P.pointerId,x:P.clientX,y:P.clientY,root:B.root,shift:P.shiftKey},f.setPointerCapture?.(P.pointerId),re(P),!0):!1}function Ce(P){if(ge)return!1;if(Ue(),W&&P.pointerId===W.id){if(W.bounds)return N.resize(W,P,W.root,W.original.wall?.25:P.ctrlKey?null:Ve()),re(P),!0;if(ot(P),W.group&&W.mode==="scale"?k.scale.copy(W.scale).multiplyScalar(Math.exp(Math.max(-20,Math.min(20,(P.clientX-W.clientX-P.clientY+W.clientY)*.005)))):C.pointerMove({...L(P),button:-1}),W.group){let q=$.some(xe=>xe.userData.record.wall)?.25:P.ctrlKey?0:Ve()||0;if(W.mode==="translate"){if(q)for(let ve of["x","y","z"])k.position[ve]=W.position[ve]+Math.round((k.position[ve]-W.position[ve])/q)*q;let xe=window.KERN_DRAG_AXES?.apply(W,k.position,W.position);xe&&k.position.set(xe.x,xe.y,xe.z),q=0}return b.preview(W,W.mode,q),ce(),re(P),!0}let B=!W.original.wall&&!P.ctrlKey&&C.mode==="translate"&&Ve();if(B){let q=W.root,xe=W.position;for(let ve of["x","y","z"])q.position[ve]=xe[ve]+Math.round((q.position[ve]-xe[ve])/B)*B;q.updateMatrixWorld(!0)}if(C.mode==="translate"){let q=window.KERN_DRAG_AXES?.apply(W,k.position,W.position);q&&(k.position.set(q.x,q.y,q.z),k.updateMatrixWorld(!0))}return ce(),re(P),!0}if(W||z&&P.pointerId===z.id)return re(P),!0;if(k&&C.enabled&&!P.altKey&&!P.buttons){let B=!O()&&!P.shiftKey&&N.hit(P);if(N.hover(B),B)return C.axis=null,f.style.cursor="ew-resize",f.title="Drag "+{x:"width",y:"height",z:"depth"}[B.userData.boundsHandle.axis]+" \xB7 opposite face stays fixed \xB7 "+(k.userData.record.wall?"0.25 m steps":"Ctrl: free"),re(P),!0;if(i.updateMatrixWorld(!0),C.pointerHover(L(P)),O()&&C.mode==="scale"&&C.axis==="XYZ")return f.title="Uniform group scale \xB7 drag right or up to enlarge; left or down to shrink",re(P),!0}return!1}function me(P){f.hasPointerCapture?.(P)&&f.releasePointerCapture(P)}function Fe(P){let B=new Rt().makeRotationFromQuaternion(P).elements,q=Math.hypot(B[0],B[4]),xe=B[8]>=0?1:-1,ve=q>1e-12?Math.atan2(-B[4],B[0]):0,Se=Math.atan2(B[6]+xe*B[1],B[5]-xe*B[2]),Ae=Se-xe*ve;return{x:Math.atan2(Math.sin(Ae),Math.cos(Ae)),y:Math.atan2(B[8],q),z:ve}}function Je(P,B,q=!1){let xe=Fe(P.quaternion),ve=Ae=>Math.round(Ae*1e6)/1e6,Se=q||P.quaternion.angleTo(new Lt().setFromEuler(new un(B.tiltX*Math.PI/180,-B.rotation*Math.PI/180,B.tiltY*Math.PI/180,"XYZ")))<1e-7;return{x:ve(P.position.x-P.scale.x/2),y:ve(P.position.z-P.scale.z/2),z:ve(P.position.y-P.userData.floorZ-P.scale.y/2),w:ve(P.scale.x),h:ve(P.scale.z),height:ve(P.scale.y),rotation:Se?B.rotation:ve(B.wall?(()=>{let Ae=new T(1,0,0).applyQuaternion(P.quaternion),He=Math.atan2(Ae.z,Ae.x)*180/Math.PI;return[He-360,He,He+360].filter(De=>De>=-360&&De<=360).sort((De,Pe)=>Math.abs(De-B.rotation)-Math.abs(Pe-B.rotation))[0]})():-xe.y*180/Math.PI),tiltX:Se?B.tiltX:B.wall?0:ve(xe.x*180/Math.PI),tiltY:Se?B.tiltY:B.wall?0:ve(xe.z*180/Math.PI)}}let Xe=(P,B)=>Object.entries(P).some(([q,xe])=>Math.abs(xe-B[q])>1e-6);function I(P){if(W&&P.pointerId===W.id){let B=W;if(W=null,window.KERN_DRAG_AXES?.refresh?.(),C.pointerUp({button:0}),n.enabled=l(),N.hover(null),me(P.pointerId),re(P),B.group){let q=B.members.map(xe=>({floor:xe.root.userData.level,id:xe.root.userData.primitive,changes:Je(xe.root,xe.original,B.mode!=="rotate"),baseline:xe.original}));q.some(xe=>Xe(xe.changes,xe.baseline))?m?.(q,B.scope)!==!0&&b.restore(B):b.restore(B)}else{let q=B.root,xe=Je(q,B.original,B.bounds);Xe(xe,B.original)?p(q.userData.level,q.userData.primitive,xe,B.original,{resizeBounds:!!B.bounds})===!1&&fe(q,B.original):fe(q,B.original)}return ce(),!0}if(z&&P.pointerId===z.id){let B=z;return z=null,me(P.pointerId),re(P),Math.hypot(P.clientX-B.x,P.clientY-B.y)<=5&&!(O()&&C.mode==="rotate"&&!B.shift&&$.includes(B.root))&&h(B.root.userData.level,B.root.userData.primitive,B.shift),!0}return!1}function x(P){if(P!=null&&(W?.id??z?.id)!==P)return!1;let B=W,q=z;return W=null,z=null,window.KERN_DRAG_AXES?.refresh?.(),N.hover(null),B&&(B.group?b.restore(B):fe(B.root,B.original),C.pointerUp({button:0}),n.enabled=l(),me(B.id)),q&&me(q.id),ce(),!!(B||q)}let X=P=>{P.key==="Escape"&&W&&(re(P),x())};window.addEventListener("keydown",X,!0);function ie(P,B,{floorPlane:q=!1}={}){Ue();let xe=r.levels.find(nt=>nt.id===B);if(!xe||!s.get(B)?.visible)return null;let ve=!q&&ye(P).find(nt=>nt.root.userData.level===B),Se=!q&&a(P),Ae=Se?.floor===B?Se:null,He=ve&&(!Ae||ve.distance<Ae.point.distanceTo(e.position))?{point:ve.point,normal:ve.face.normal.clone().applyMatrix3(new pt().getNormalMatrix(ve.object.matrixWorld)).normalize()}:Ae;if(!He){let nt=L(P);g.setFromCamera(new be(nt.x,nt.y),e);let V=g.ray.intersectPlane(new Zt(new T(0,1,0),-(xe.z+s.get(B).position.y)),new T);if(!V)return null;He={point:V,normal:new T(0,1,0)}}let De=He.point,Pe=He.normal||new T(0,1,0);return{x:De.x,y:De.z,z:De.y-s.get(B).position.y,normal:{x:Pe.x,y:Pe.z,z:Pe.y}}}function Me(){if(!ge){ae?.(),Ie(null),x(),ge=!0,window.removeEventListener("keydown",X,!0),N.dispose(),b.dispose(),K(!1),C.detach(),C.dispose(),i.remove(U);for(let P of _)P.removeFromParent();for(let P of[...Object.values(A),...D])P.dispose();E.dispose();for(let P of v)P.dispose()}}return{pick:he,select:We,sync:Ue,updateBounds:ce,down:pe,move:Ce,up:I,cancel:x,placement:ie,previewWall:Ie,dispose:Me,dragging:()=>!!W,ownsGesture:P=>P===W,busy:()=>!!(W||z),setMode(P){["translate","scale","rotate"].includes(P)&&(x(),C.setMode(P),C.setSpace(P==="scale"?"local":"world"),ot())},objects:()=>_}}var Qi=["x","y","z"],Ih={x:"#e47b74",y:"#7acb99",z:"#70b9ec"},qy=i=>Math.abs(i)<.005?0:i,Zy=i=>{let e=qy(i);return(e>0?"+":"")+e.toFixed(2)};function Mf({scene:i,camera:e,canvas:t,container:n,manager:s,owns:r=()=>!0}){let o=new jt;o.name="translation-feedback",o.userData.dragFeedback="3d",o.visible=!1,i.add(o);let a=[],c=[];function l(ae,{dashed:ee=!1,opacity:fe=1}={}){let Re=new mt;Re.setAttribute("position",new ft(new Float32Array(6),3)),a.push(Re),ee&&Re.setAttribute("lineDistance",new ft([0,0],1));let je={color:ae,transparent:!0,opacity:fe,depthTest:!1,depthWrite:!1},j=ee?new ms({...je,dashSize:.15,gapSize:.1}):new dn(je);c.push(j);let ce=new Yt(Re,j);return ce.frustumCulled=!1,ce.renderOrder=40,ce.raycast=()=>{},o.add(ce),ce}let h=Object.fromEntries(Qi.map(ae=>{let ee=l(Ih[ae],{opacity:.64});return ee.userData.dragAxis=ae,ee.visible=!1,[ae,ee]})),p=l("#e7b76e",{dashed:!0,opacity:.92});p.userData.dragDistance=!0,p.renderOrder=41;let m=new Mn(1,10,6),f=new $t({color:"#e7b76e",transparent:!0,opacity:.96,depthTest:!1,depthWrite:!1});a.push(m),c.push(f);let _=["origin","current"].map(ae=>{let ee=new Te(m,f);return ee.userData.dragMarker=ae,ee.renderOrder=42,ee.frustumCulled=!1,ee.raycast=()=>{},o.add(ee),ee}),y=document.createElement("div");y.dataset.dragFeedback="3d",y.style.cssText="position:absolute;display:none;pointer-events:none;user-select:none;z-index:8;padding:7px 9px;border:1px solid #dce9f02b;border-radius:5px;background:#17232eed;color:#e8eef4;box-shadow:0 2px 9px #0003;font:12px/1.45 system-ui;white-space:nowrap;max-width:calc(100% - 16px);overflow:hidden";let g=document.createElement("div");g.dataset.dragAxisStatus="true",g.style.cssText="font-size:11px;font-weight:650;letter-spacing:.025em;margin-bottom:2px;display:none",y.append(g);let d=document.createElement("div");d.dataset.dragDistance="true",d.style.cssText="font-size:13px;font-weight:650;color:#e7b76e",y.append(d);let A=document.createElement("div");A.style.cssText="font-size:11px;font-variant-numeric:tabular-nums",y.append(A);let E=Object.fromEntries(Qi.map((ae,ee)=>{ee&&A.append(document.createTextNode(" \xB7 "));let fe=document.createElement("span");return fe.dataset.dragComponent=ae,fe.style.color=Ih[ae],A.append(fe),[ae,fe]}));n.append(y);let v=new T,D=new T,C=new T,U=new T,N=new T,b=new T,w=null,F=!1,K=260,$=64,Q=!0;function O(ae,ee,fe){let Re=ae.geometry.attributes.position;Re.setXYZ(0,ee.x,ee.y,ee.z),Re.setXYZ(1,fe.x,fe.y,fe.z),Re.needsUpdate=!0}function k(){o.visible=!1,y.style.display="none",g.style.display="none",g.textContent="",delete y.dataset.axes;for(let ae of Object.values(h))ae.visible=!1}function W(ae){if(F)return;if(w=ae?.space==="3d"&&r(ae.owner)&&Qi.every(j=>Number.isFinite(ae.origin?.[j])&&Number.isFinite(ae.delta?.[j]))?ae:null,!w){k();return}v.set(ae.origin.x,ae.origin.y,ae.origin.z),D.set(v.x+ae.delta.x,v.y+ae.delta.y,v.z+ae.delta.z);let ee=Qi.filter(j=>ae.axes?.includes(j)),fe=ae.supported||Qi,Re=ee.some(j=>!fe.includes(j));y.dataset.axes=ee.join(""),y.dataset.total=Math.hypot(ae.delta.x,ae.delta.y,ae.delta.z).toFixed(6),g.style.display=ee.length?"block":"none",g.textContent=ee.length?ee.map(j=>j.toUpperCase()).join(" + ")+" locked"+(Re?" \xB7 "+(fe.includes("y")?fe.length===1&&fe[0]==="y"?"vertical edit":"gizmo axis":"planar edit"):""):"",g.style.color=ee.length===1?Ih[ee[0]]:"#e8eef4",d.textContent="Move "+Math.hypot(ae.delta.x,ae.delta.y,ae.delta.z).toFixed(2)+" m";for(let j of Qi)E[j].textContent=j.toUpperCase()+" "+Zy(ae.delta[j]);for(let j of Qi)h[j].visible=ee.includes(j)&&fe.includes(j);o.visible=!0,p.visible=D.distanceToSquared(v)>1e-12,O(p,v,D);let je=p.geometry.attributes.lineDistance;je.setX(0,0),je.setX(1,D.distanceTo(v)),je.needsUpdate=!0,_[0].position.copy(v),_[1].position.copy(D),Q=!0,z()}function z(){if(F||!w)return;let ae=t.getBoundingClientRect();if(!ae.width||!ae.height){y.style.display="none",o.visible=!1;return}if(e.updateMatrixWorld(!0),U.copy(D).applyMatrix4(e.matrixWorldInverse),U.z>=0){y.style.display="none",o.visible=!1;return}o.visible=!0;let ee=e.isOrthographicCamera?Math.abs(e.top-e.bottom)/e.zoom/ae.height:2*Math.abs(U.z)*Math.tan(e.fov*Math.PI/360)/e.zoom/ae.height,fe=Math.max(1e-5,ee),Re=fe*90;for(let ye of Qi)h[ye].visible&&(N.copy(D),b.copy(D),N[ye]-=Re,b[ye]+=Re,O(h[ye],N,b));if(_[0].scale.setScalar(fe*2.3),_[1].scale.setScalar(fe*3.2),_[0].visible=D.distanceTo(v)>fe*5,p.material.dashSize=fe*6,p.material.gapSize=fe*4,C.copy(D).project(e),!Number.isFinite(C.x)||!Number.isFinite(C.y)){y.style.display="none";return}y.style.display="block",Q&&(K=y.offsetWidth||260,$=y.offsetHeight||(g.style.display==="none"?48:64),Q=!1);let je=Math.min(K,ae.width-16),j=Math.min($,ae.height-16),ce=(C.x+1)*ae.width/2,Ue=(1-C.y)*ae.height/2,We=ce+14+je<=ae.width-8?ce+14:ce-je-14,Ve=Ue-j-14,ot=n.getBoundingClientRect(),Ie=ae.left-ot.left+(n.scrollLeft||0),L=ae.top-ot.top+(n.scrollTop||0);y.style.left=Ie+Math.max(8,Math.min(ae.width-je-8,We))+"px",y.style.top=L+Math.max(8,Math.min(ae.height-j-8,Ve))+"px"}let ge=s?.subscribe?.(W);function _e(){if(!F){k(),F=!0,ge?.(),w=null,y.remove(),o.removeFromParent();for(let ae of a)ae.dispose();for(let ae of c)ae.dispose()}}return{update:z,dispose:_e}}function Ef({scene:i,camera:e,renderer:t,controls:n,groups:s,container:r,enabled:o,onStart:a,pick:c}){let l=t.domElement,h=new jt,p=new jt,m=new jt,f=new Fn,_=new be;h.userData.groupRotation=!0,h.add(p,m),i.add(h);let y=new $t({color:14528101,depthTest:!1,transparent:!0,opacity:.9}),g=new dn({color:16766615,depthTest:!1,transparent:!0,opacity:.9}),d=[],A=document.createElement("div");A.dataset.groupRotationReadout="true",A.style.cssText="position:absolute;pointer-events:none;display:none;padding:6px 9px;border-radius:4px;background:#172b37ee;color:#ffe4a5;font:13px system-ui",r.append(A);let E=null,v=null,D=!1,C=!1,U=!0,N=()=>window.KERN_GROUP_ROTATE,b=ee=>{ee.preventDefault(),ee.stopImmediatePropagation()};function w(ee){for(let fe of[...ee.children])fe.geometry?.dispose(),ee.remove(fe)}function F(ee){let fe=l.getBoundingClientRect();_.set((ee.clientX-fe.left)/fe.width*2-1,-(ee.clientY-fe.top)/fe.height*2+1),e.updateMatrixWorld(),i.updateMatrixWorld(!0),f.setFromCamera(_,e)}function K(ee){return F(ee),f.ray.intersectPlane(new Zt(new T(0,1,0),-(E?.planeY??m.position.y)),new T)}function $(ee){w(m),w(p),d.length=0;let fe=ee.pivot,Re=Math.max(1,Math.hypot(ee.bounds.w,ee.bounds.h)/2+.6),je=N().paths(ee.model,ee.analysis.refs),j=je.map(Ie=>Ie.z+(s.get(Ie.ref.floor)?.position.y||0)),ce=Math.min(...j)+.15;m.position.set(fe.x,ce,fe.y);let Ue=new Te(new oi(Re,.055,8,96),y);Ue.rotation.x=Math.PI/2,Ue.userData.groupRotateRing=!0,m.add(Ue);for(let Ie=0;Ie<4;Ie++){let L=new Te(new Mn(.2,12,8),y),ye=Ie*Math.PI/2;L.position.set(Math.cos(ye)*Re,0,Math.sin(ye)*Re),L.userData.groupRotateHandle=Ie,L.renderOrder=31,m.add(L),d.push(L)}let We=new Te(new Mn(.12,10,6),y);We.renderOrder=31,m.add(We);let Ve=[];for(let Ie of je){let L=s.get(Ie.ref.floor)?.position.y||0,ye=Ie.z+L+.08,he=Ie.height,re=Ie.points;for(let pe=0;pe<(re.length>2?re.length:re.length-1);pe++){let Ce=re[pe],me=re[(pe+1)%re.length];Ve.push(Ce[0]-fe.x,ye,Ce[1]-fe.y,me[0]-fe.x,ye,me[1]-fe.y),he>0&&Ve.push(Ce[0]-fe.x,ye+he,Ce[1]-fe.y,me[0]-fe.x,ye+he,me[1]-fe.y,Ce[0]-fe.x,ye,Ce[1]-fe.y,Ce[0]-fe.x,ye+he,Ce[1]-fe.y)}}let ot=new ri(new mt().setAttribute("position",new ft(Ve,3)),g);ot.renderOrder=30,p.add(ot),p.position.set(fe.x,0,fe.y),p.rotation.y=0,p.visible=!1,v=ee}function Q(ee){if(!E||ee!==void 0&&ee!==E.id)return!1;let fe=E;return E=null,N()?.finish(fe.stamp,!0),p.visible=!1,p.rotation.y=0,n.enabled=U,l.hasPointerCapture?.(fe.id)&&l.releasePointerCapture(fe.id),A.style.display="none",!0}function O(){if(D)return;let ee=o()&&N()?.active(),fe=N()?.context();if(C=!!ee&&fe&&!fe.error,E&&(!C||!N()?.valid(E.stamp))&&Q(),h.visible=C,!C){A.style.display="none";return}!E&&(v!==fe||m.userData.offset!==[...s.values()].map(ce=>ce.position.y).join(","))&&($(fe),m.userData.offset=[...s.values()].map(ce=>ce.position.y).join(","));let Re=l.getBoundingClientRect(),je=Math.max(.6,e.position.distanceTo(m.position)*Math.tan(e.fov*Math.PI/360)/Math.max(1,Re.height)*80);for(let ce of d)ce.scale.setScalar(je);let j=m.position.clone().project(e);A.style.display="block",A.style.left=Math.max(8,Math.min(Re.width-250,(j.x+1)*Re.width/2+15))+"px",A.style.top=Math.max(8,Math.min(Re.height-36,(1-j.y)*Re.height/2+15))+"px",A.textContent=E?(E.degrees>0?"+":"")+E.degrees.toFixed(1)+"\xB0 \xB7 release to apply":"Drag selected objects or amber ring"+(fe.step?" \xB7 90\xB0":" \xB7 Shift: 5\xB0")}function k(ee){if(ee.target!==l||ee.button!==0||ee.altKey||!o()||!N()?.modeActive())return;if(E){b(ee);return}O(),F(ee);let fe=C&&f.intersectObjects(m.children,!1).some(Ue=>Ue.object.userData.groupRotateHandle!==void 0||Ue.object.userData.groupRotateRing),Re=fe?null:c?.(ee);if(!fe){if(Re?.handle&&!N().group())return;if(Re?.ref&&ee.shiftKey){b(ee),N().choose(Re.ref,{shiftKey:!0}),O();return}if(Re?.ref&&N().group()&&!N().handlesGroup()&&N().selected(Re.ref))return;if(!(Re?.ref&&N().group()&&N().selected(Re.ref))){if(Re?.ref&&Re.ref.kind!=="primitives"&&N().selected(Re.ref)){b(ee);return}Re?.ref&&!N().selected(Re.ref)&&(b(ee),N().choose(Re.ref),O());return}}b(ee);let je=Re?.point?.y??m.position.y,j=N().begin();if(!j)return;F(ee);let ce=f.ray.intersectPlane(new Zt(new T(0,1,0),-je),new T);if(!ce){N()?.cancel();return}a?.(),U=n.enabled,n.enabled=!1,E={id:ee.pointerId,stamp:j,planeY:je,last:Math.atan2(ce.z-j.pivot.y,ce.x-j.pivot.x),total:0,degrees:0,x:ee.clientX,y:ee.clientY},p.visible=!0,l.setPointerCapture?.(ee.pointerId)}function W(ee){if(!E)return;if(ee.pointerId!==E.id){b(ee);return}b(ee);let fe=K(ee);if(!fe)return;let Re=E,je=Math.atan2(fe.z-Re.stamp.pivot.y,fe.x-Re.stamp.pivot.x);if(Re.total+=Math.atan2(Math.sin(je-Re.last),Math.cos(je-Re.last))*180/Math.PI,Re.last=je,Math.hypot(ee.clientX-Re.x,ee.clientY-Re.y)<3&&!Re.degrees)return;let j=N().preview(Re.stamp,Re.total,ee);j?(Re.degrees=j.degrees,p.rotation.y=-Re.degrees*Math.PI/180):N().state()||Q(),O()}function z(ee){if(!E)return;if(ee.pointerId!==E.id){b(ee);return}b(ee);let fe=E;E=null,p.visible=!1,n.enabled=U,N().finish(fe.stamp),l.hasPointerCapture?.(ee.pointerId)&&l.releasePointerCapture(ee.pointerId),O()}function ge(ee){if(E&&E.id!==ee.pointerId){b(ee);return}Q(ee.pointerId)&&b(ee)}let _e=()=>Q();for(let[ee,fe]of[["pointerdown",k],["pointermove",W],["pointerup",z],["pointercancel",ge],["lostpointercapture",ge]])window.addEventListener(ee,fe,!0);window.addEventListener("blur",_e);function ae(){if(!D){Q(),D=!0;for(let[ee,fe]of[["pointerdown",k],["pointermove",W],["pointerup",z],["pointercancel",ge],["lostpointercapture",ge]])window.removeEventListener(ee,fe,!0);window.removeEventListener("blur",_e),w(m),w(p),h.removeFromParent(),y.dispose(),g.dispose(),A.remove()}}return{sync:O,cancel:Q,dispose:ae,dragging:()=>!!E}}function Ao(i){let e=new Pi(i.polygon.map(s=>new be(s[0],-s[1])));for(let s of i.holes||[])e.holes.push(new qi(s.map(r=>new be(r[0],-r[1]))));let t=i.bottomPlane||i.topPlane,n=new or(e,{depth:t?1:i.height,bevelEnabled:!1,steps:1});if(n.rotateX(-Math.PI/2),t){let s=n.attributes.position,r=(o,a,c,l)=>o?o.a*a+o.b*c+o.c:l;for(let o=0;o<s.count;o++){let a=s.getX(o),c=s.getZ(o),l=s.getY(o)>.5;s.setY(o,r(l?i.topPlane:i.bottomPlane,a,c,i.z+(l?i.height:0))-i.z)}s.needsUpdate=!0,n.computeVertexNormals()}return n.computeBoundingBox(),n.computeBoundingSphere(),n}function Sf(i){return i.flights.flatMap(e=>{if(!e.ramp)return e.treads.map(l=>({...l.rect,polygon:l.polygon,z:l.z-.12,height:.12}));let[t,n]=e.upPath,s=n[0]-t[0],r=n[1]-t[1],o=(e.z1-e.z0)/(s*s+r*r||1),a=e.surface?.thickness??.18,c={a:s*o,b:r*o,c:e.z0-o*(s*t[0]+r*t[1])};return[{...e.rect,polygon:e.polygon,z:e.z0-a,height:e.z1-e.z0+a,topPlane:c,bottomPlane:{...c,c:c.c-a}}]}).concat(i.landings.map(e=>({...e.rect,polygon:e.polygon,z:e.z-.18,height:.18})))}function bf(i,e,t){let n=0,s=1;for(let r of["x","y","z"]){let o=e[r]-i[r],a=t.min[r],c=t.max[r];if(Math.abs(o)<1e-8){if(i[r]<a||i[r]>c)return null;continue}let l=(a-i[r])/o,h=(c-i[r])/o;if(l>h&&([l,h]=[h,l]),n=Math.max(n,l),s=Math.min(s,h),n>s)return null}return n>=0&&n<=1?n:null}function Ky(i,e){if(i.polygon&&window.KERN_SHAPES){let r=window.KERN_SHAPES,o=(e.polygons||[]).filter(m=>m.kind==="slab"&&m.room===i.id&&Math.abs(m.z+m.height-i.z)<.01),a=m=>o.some(f=>r.contains(m,f.polygon)&&!(f.holes||[]).some(_=>r.contains(m,_))),c=r.labelAnchor(i),l=Math.min(i.w,4),h=Math.min(i.h,2);if(a(c))return{x:c.x-l/2,y:c.y-h/2,w:l,h,z:i.z};let p=null;for(let m of o){let f=[m.polygon,...m.holes||[]],_=r.bounds(m.polygon);for(let y=0;y<12;y++)for(let g=0;g<12;g++){let d={x:_.x+_.w*(g+.5)/12,y:_.y+_.h*(y+.5)/12};if(!a(d))continue;let A=Math.min(...f.flatMap(D=>D.map((C,U)=>{let N=D[(U+1)%D.length];return Math.hypot(C[0]-N[0],C[1]-N[1])>1e-8?r.project(d,{a:C,b:N}).distance:1/0}))),E=Math.min(1,A/Math.hypot(l/2,h/2)),v=E*l*h-Math.hypot(d.x-c.x,d.y-c.y)*1e-4;E*l>.35&&E*h>.35&&(!p||v>p.score)&&(p={...d,w:l*E,h:h*E,score:v})}}return p?{x:p.x-p.w/2,y:p.y-p.h/2,w:p.w,h:p.h,z:i.z}:null}let t=e.boxes.filter(r=>(r.kind==="slab"&&(!r.room||r.room===i.id)||r.kind==="landing")&&Math.abs(r.z+r.height-i.z)<.01).map(r=>{let o=Math.max(i.x,r.x),a=Math.max(i.y,r.y);return{x:o,y:a,w:Math.min(i.x+i.w,r.x+r.w)-o,h:Math.min(i.y+i.h,r.y+r.h)-a,z:r.z+r.height}}).filter(r=>r.w>.35&&r.h>.35),n=i.x+i.w/2,s=i.y+i.h/2;return t.sort((r,o)=>o.w*o.h-r.w*r.h||Math.hypot(r.x+r.w/2-n,r.y+r.h/2-s)-Math.hypot(o.x+o.w/2-n,o.y+o.h/2-s))[0]||null}function Jy(i,e,t,n){let s=Math.min(56,t*.42),r=[],o=a=>n.measureText?.(a).width??a.length*s*.56;for(let a=0;a<90;a++){n.font=`600 ${s}px system-ui`,r=[];let c="";for(let l of String(i).split(/\s+/)){let h=c?c+" "+l:l;c&&o(h)>e?(r.push(c),c=l):c=h}if(c&&r.push(c),r.every(l=>o(l)<=e)&&r.length*s*1.24<=t)break;s*=.92}return{lines:r,fontSize:s,lineHeight:s*1.24}}function wf(i,e,t){return i.stairs?.some(n=>{if(n.connectionId!==t.stair)return!1;let s=n.stops.find(o=>o.floor===e.id);if(!s)return!1;let r=n.stops.filter(o=>o.z<s.z-1e-6);return r.length>0&&t.z<s.z&&t.z>=Math.max(...r.map(o=>o.z))-.2})}function jy(i,e,t={}){let n=null,s=null,r=null,o=null,a=new Hl({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),c=()=>{a.setAnimationLoop(null),a.dispose(),a.forceContextLoss(),a.domElement.remove()};try{let xe=function(u,M){let S=u.height;if(u.contextOnly&&Ie!==M.id||u.kind==="slab"&&(!Bt||es)&&!je||u.kind==="ceiling"&&(!Bt||es)&&(!Re||j))return 0;let H=u.kind==="wall"||u.kind==="solid";return j&&H&&(S=Math.max(0,Math.min(S,(u.baseZ??M.z)+ce-u.z))),H&&!fe&&(S=0),S},ve=function(){let u=new Nt;L=[];for(let M of d.values())M.position.y=M.userData.rank*ae;_e.position.y=0,_e.userData.displayDatum=_e.position.y;for(let M of D){let S=e.levels.find(de=>de.id===M.userData.level),H=d.get(S.id),te=M.userData.fadeMesh;M.userData.boxes.forEach((de,Z)=>{let G=xe(de,S),oe=We&&M.userData.faded.has(Z),ne=(Ee,Be)=>{let qe=Be&&G>.001;u.position.set(de.x+de.w/2,de.z+G/2,de.y+de.h/2),u.scale.set(qe?de.w:0,qe?G:0,qe?de.h:0),u.updateMatrix(),Ee.setMatrixAt(Z,u.matrix)};ne(M,!oe),te&&ne(te,oe),H.visible&&G>.001&&L.push({mesh:M,index:Z,kind:de.kind,level:S.id,min:{x:de.x,y:de.z+H.position.y,z:de.y},max:{x:de.x+de.w,y:de.z+G+H.position.y,z:de.y+de.h}})}),M.visible=M.userData.boxes.some((de,Z)=>xe(de,S)>.001&&!(We&&M.userData.faded.has(Z))),M.instanceMatrix.needsUpdate=!0,te&&(te.visible=We&&M.userData.boxes.some((de,Z)=>xe(de,S)>.001&&M.userData.faded.has(Z)),te.instanceMatrix.needsUpdate=!0)}for(let M of U){let S=M.userData.shape,H=e.levels.find(de=>de.id===M.userData.level),te=xe(S,H);if(S.bottomPlane||S.topPlane){let de=j&&["wall","solid"].includes(S.kind)?(S.baseZ??H.z)+ce:1/0;if(M.userData.prismCutHeight!==de){let Z=window.KERN_ELEVATIONS?.clipPrism?.(S,-1/0,de)||[S],G=[];for(let ne of Z){let Ee=Ao(ne),Be=Ee.attributes.position;for(let qe=0;qe<Be.count;qe++)G.push(Be.getX(qe),Be.getY(qe)+ne.z-S.z,Be.getZ(qe));Ee.dispose()}let oe=new mt;oe.setAttribute("position",new ft(G,3)),oe.computeVertexNormals(),oe.computeBoundingBox(),oe.computeBoundingSphere(),M.geometry.dispose(),M.geometry=oe,M.userData.prismCutHeight=de}M.scale.y=1}else M.scale.y=te/S.height;M.visible=te>.001&&(!M.userData.contextOnly||Ie===M.userData.level)}for(let M of A)M.visible=Ue;for(let M of E)M.visible=Ue&&!M.userData.duplicate;Se(),l.updateMatrixWorld(!0),ye=""},Se=function(){for(let u of C){let M=u.userData.floorHighlight||u.userData.floorLeader;u.visible=!!d.get(M)?.visible&&(M===ot||B.has(M))}for(let u of A)u.material.color.set(u.userData.level===ot||B.has(u.userData.level)?10410239:16777215)},Ae=function(u){B=new Set((u||[]).filter(M=>d.has(M))),Se()},He=function(u){u&&!d.get(u)?.visible&&(u=null),u!==ot&&(ot=u,Se(),a.domElement.style.cursor=u?"pointer":"default",t.onHover?.(u?e.levels.find(M=>M.id===u):null))},De=function(u=!1){h.updateMatrixWorld(!0);let M=[...h.position.toArray(),...h.quaternion.toArray(),ae,fe,j,ce,Ue,We,Ie,...P()].join(":");if(!u&&M===ye&&!Fe)return;let S=[...h.position.toArray().map(ne=>ne.toFixed(2)),...h.quaternion.toArray().map(ne=>ne.toFixed(3)),ae,fe,j,ce,We,...P()].join(":");S!==Ce&&(Ce=S,me=performance.now(),Fe=We);let H=!We||!pe&&!re&&(u||performance.now()-me>=180),te=new Map(D.map(ne=>[ne,new Set]));if(H&&We&&fe)for(let ne of e.levels){let Ee=d.get(ne.id);if(!Ee.visible)continue;let Be=ne.boxes.filter(qe=>qe.kind==="slab").sort((qe,Ge)=>Ge.w*Ge.h-qe.w*qe.h).slice(0,12);for(let qe of Be)for(let[Ge,tt]of[[.5,.5],[.22,.22],[.78,.78]]){let ut={x:qe.x+qe.w*Ge,y:qe.z+qe.height+.8+Ee.position.y,z:qe.y+qe.h*tt},rt=null,lt=1;for(let yt of L){let zt=bf(h.position,ut,yt);zt!==null&&zt>1e-5&&zt<lt&&(lt=zt,rt=yt)}rt?.kind==="wall"&&lt<.985&&te.get(rt.mesh).add(rt.index)}}if(H){let ne=new Set,Ee=U.filter(Be=>Be.userData.kind==="wall"&&Be.visible&&d.get(Be.userData.level)?.visible);if(We&&fe){for(let Be of e.levels)if(d.get(Be.id)?.visible)for(let qe of(Be.rooms||[]).slice(0,20)){let Ge=window.KERN_SHAPES?window.KERN_SHAPES.centroid(qe):{x:qe.x+qe.w/2,y:qe.y+qe.h/2},tt=new T(Ge.x,qe.z+.8+d.get(Be.id).position.y,Ge.y),ut=tt.clone().sub(h.position),rt=ut.length(),yt=new Fn(h.position,ut.normalize(),.05,rt-.05).intersectObjects(Ee,!1)[0];yt&&ne.add(yt.object)}}for(let Be of U)Be.userData.kind==="wall"&&(Be.material=N(Be.userData.shape.color,ne.has(Be)))}let de=!1;if(H){for(let ne of D){let Ee=te.get(ne),Be=ne.userData.faded;(Ee.size!==Be.size||[...Ee].some(qe=>!Be.has(qe)))&&(de=!0),ne.userData.faded=Ee}Fe=!1}de&&ve();let Z=[],G=Math.max(1,i.clientWidth),oe=Math.max(1,i.clientHeight);for(let ne of[...A].sort((Ee,Be)=>+!!Ee.userData.roomLabel-+!!Be.userData.roomLabel||(Be.userData.area||0)-(Ee.userData.area||0))){let Ee=ne.getWorldPosition(new T),Be=Ee.clone().applyMatrix4(h.matrixWorldInverse),qe=2*Math.max(.1,-Be.z)*Math.tan(On.degToRad(h.fov/2))/oe,Ge=Math.min(ne.userData.labelWidth*qe,ne.userData.maxWorldWidth||1/0);ne.scale.set(Ge,Ge*ne.userData.labelRatio,1);let tt=Ee.clone().project(h),ut=Ge/qe,rt=ut*ne.userData.labelRatio,lt={x:(tt.x+1)*G/2-ut/2,y:(1-tt.y)*oe/2-rt/2,w:ut,h:rt},yt=Z.some(zt=>lt.x<zt.x+zt.w+5&&lt.x+lt.w+5>zt.x&&lt.y<zt.y+zt.h+5&&lt.y+lt.h+5>zt.y);if(ne.visible=Ue&&d.get(ne.userData.level).visible&&(!ne.userData.roomLabel||ne.userData.level===Ie)&&Be.z<0&&tt.z>=-1&&tt.z<=1&&lt.x+lt.w>0&&lt.y+lt.h>0&&lt.x<G&&lt.y<oe&&ut>=58&&!yt&&!L.some(zt=>{let Jn=bf(h.position,Ee,zt);return Jn!==null&&Jn>1e-5&&Jn<.995}),ne.visible&&Z.push(lt),ne.userData.floorLabel){let zt=C.find(Jn=>Jn.userData.floorLeader===ne.userData.level);if(zt){let Jn=zt.geometry.attributes.position;Jn.setX(0,ne.position.x+Ge/2),Jn.needsUpdate=!0,zt.visible=Ue&&ne.visible&&(ne.userData.level===ot||B.has(ne.userData.level))}}}for(let ne of E){let Ee=ne.getWorldPosition(new T);ne.visible=Ue&&d.get(ne.userData.level).visible&&!ne.userData.duplicate&&h.position.y>Ee.y}ye=M},Pe=function(){re=null},nt=function(u,M,S,H=Xe){let te=h.position.clone(),de=f.target.clone(),Z=f.enableDamping;f.enableDamping=!1,f.update(),h.position.copy(te),f.target.copy(de),f.update(),f.enableDamping=Z,re=S&&!x?.matches?{from:te,targetFrom:de,to:u.clone(),targetTo:M.clone(),datumFrom:Xe,datumTo:H,start:performance.now(),duration:420}:null,re||(Xe=H,h.position.copy(u),f.target.copy(M),h.lookAt(M),f.update(),De(!0))},V=function(u=performance.now()){if(!re)return!1;let M=re,S=x?.matches?1:Math.min(1,Math.max(0,(u-M.start)/M.duration)),H=S*S*(3-2*S);return Xe=On.lerp(M.datumFrom,M.datumTo,H),h.position.lerpVectors(M.from,M.to,H),f.target.lerpVectors(M.targetFrom,M.targetTo,H),h.lookAt(f.target),h.updateMatrixWorld(!0),S===1&&(re=null,f.update()),!0},$e=function(){let u=`${P().join("|")}:${ae}:${h.aspect}:${h.fov}`;if(Oe?.key===u)return Oe;let M=new gn;for(let G of d.values())if(G.visible){let oe=e.levels.find(ne=>ne.id===G.userData.id);for(let ne of[...oe.boxes,...oe.polygons||[],...k(oe)])M.expandByPoint(new T(ne.x,ne.z+G.position.y,ne.y)),M.expandByPoint(new T(ne.x+ne.w,ne.z+ne.height+G.position.y,ne.y+ne.h))}M.isEmpty()&&(M.min.set(b.minX,b.minZ-O*ae,b.minY),M.max.set(b.maxX,b.maxZ+(e.levels.length-1-O)*ae,b.maxY));let S=M.getCenter(new T),H=M.getSize(new T),te=Math.max(H.length()/2,8),de=On.degToRad(h.fov/2),Z=te/Math.sin(de)*Math.max(1,1/h.aspect)*1.1;return Oe={key:u,center:S,distance:Z}},Le=function(){return Bt?1/Math.tan(On.degToRad(h.fov/2)):$e().distance/Math.max(.001,h.position.distanceTo(f.target))},we=function(){let u=Le(),M=u<.1?Math.max(.1,Math.round(u*1e3)/10):Math.round(u*100);Number.isFinite(u)&&M!==ke&&(ke=M,t.onCameraChange?.(u))},Qe=function(u=!1,M=!1){let{center:S,distance:H}=$e(),te=u?h.position.clone().sub(f.target).normalize():new T(1,.9,1.2).normalize();h.near=.05,h.far=Math.max(5e3,H*5),h.updateProjectionMatrix(),nt(S.clone().add(te.multiplyScalar(H)),S,M,I(Je))},dt=function(u,M=!0){let S=I(u),H=S-Xe;Je=u,nt(h.position.clone().add(new T(0,H,0)),f.target.clone().add(new T(0,H,0)),M,S)},Ut=function(){if(t.onFloorVisibility)return t.onFloorVisibility({all:!0});Xn(),(ze||ht==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&Dt(!0),ue&&Dn(),Pe();for(let u of d.values())u.visible=!0;Ie=null,He(null),ve(),De(!0),q("visibility")},Tt=function(u){if(t.onFloorSelect)return t.onFloorSelect(u,{additive:!1});if(Xn(),(ze||ht==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&Dt(!0),ue&&Dn(),!!d.has(u)){if(Ie===u&&P().length===1){q();return}se(null,null),Ie=u;for(let[M,S]of d)S.visible=M===u;He(null),ve(),dt(u),q(),se(u,null)}},en=function(u,{preserveEditing:M=!1}={}){if(d.has(u)){if(t.onFloorSelect&&!M)return t.onFloorSelect(u,{additive:!1});if(M&&t.getFloorState)return J(t.getFloorState());!M&&!d.get(u).visible&&(d.get(u).visible=!0,ve()),Ie!==u&&(window.KERN_CONNECTION_3D?.cancel(),(ht==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&Dt(!0)),Ie=u,Je=u,Xe=I(u),He(null),M||Ye([u]),De(!0),q(M?"sync":"navigation")}},Wn=function(u,M=!1){if(!d.has(u))return;if(t.onFloorSelect)return t.onFloorSelect(u,{additive:M});if(!M)return Tt(u);Xn(),Dt(),Dn();let S=d.get(u);S.visible=!S.visible,P().length||(S.visible=!0),se(null,null),en(S.visible?u:P()[0]),ve()},Ro=function(u){d.has(u)&&u!==Je&&en(u,{preserveEditing:!0})},hi=function(u){let M=e.levels.findIndex(H=>H.id===Ie),S=e.levels[M+Math.sign(u)];M>=0&&S&&(en(S.id),dt(S.id))},bn=function(u,{physicalOnly:M=!1}={}){at=null;let S=a.domElement.getBoundingClientRect();if(!S.width||!S.height)return null;Me.set((u.clientX-S.left)/S.width*2-1,-(u.clientY-S.top)/S.height*2+1),h.updateMatrixWorld(!0),l.updateMatrixWorld(!0),ie.setFromCamera(Me,h);let H=[...v,...U,...M?[]:[...A,...E]].filter(Ee=>Ee.visible&&d.get(Ee.userData.level)?.visible),te=ie.intersectObjects(H,!1)[0],de=te?.object.userData.level,Z=te?.object.userData.boxes?.[te.instanceId],G=te?.object.userData.room||Z?.room,oe=e.levels.find(Ee=>Ee.id===de)?.rooms?.find(Ee=>Ee.id===G);a.domElement.title=oe?oe.name:"";let ne=te?.object.userData.sourceFloor||Z?.sourceFloor||de;return at=te?{floor:ne,displayFloor:de,door:te.object.userData.door||Z?.door,room:G||Z?.rooms?.[0],kind:te.object.userData.kind||Z?.kind,roomLabel:!!te.object.userData.roomLabel,floorSurface:(te.object.userData.kind||Z?.kind)==="slab"&&!te.object.userData.door&&!Z?.door,point:te.point,normal:te.face?.normal?.clone().applyMatrix3(new pt().getNormalMatrix(te.object.matrixWorld)).normalize()}:null,ne||null},Mr=function(u){u?.routeStair&&(u=window.KERN_ROUTE_STAIRS.editFrame(u));let M=u&&window.KERN_TRANSFORM?.frame(u),S=M?M.point(M.x+M.w/2,M.y+M.h):u?[u.x+u.w/2,u.y+u.h]:null;vr=u?{x:S[0],y:S[1],z:u.z+d.get(u.floor).position.y,w:M?.w??u.w,h:M?.h??u.h}:null,Er()},Er=function(){if(!vr||Bt){Zn.style.display="none";return}let u=vr,M=new T(u.x,u.z,u.y).project(h),S=a.domElement.getBoundingClientRect();Zn.textContent=u.w.toFixed(2)+" \xD7 "+u.h.toFixed(2)+" m",Zn.style.display="block",Zn.style.left=Math.min(Math.max(6,(M.x+1)*S.width/2-45),Math.max(6,S.width-135))+"px",Zn.style.top=Math.min(Math.max(6,(1-M.y)*S.height/2+15),Math.max(6,S.height-28))+"px"},se=function(u,M){for(n?.select([]),Mr(null),kt=u?{floor:u,ids:M?[M]:[]}:null;St.children.length;){let de=St.children[0];St.remove(de),de.geometry.dispose()}let S=e.levels.find(de=>de.id===u)?.rooms.find(de=>de.id===M)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(u,M),H=e.levels.find(de=>de.id===u),te=H&&W(H);Et=d.has(u)?S?{...S,floor:u}:!M&&H?{id:null,isFloor:!0,floor:u,z:H.z,x:te.minX,y:te.minY,w:te.maxX-te.minX,h:te.maxY-te.minY}:null:null,Et&&Ke(Et)},le=function(u,M){if(se(u,M[0]||null),kt={floor:u,ids:[...M]},M.length<2)return;for(Et=null;St.children.length;){let H=St.children[0];St.remove(H),H.geometry.dispose()}let S=e.levels.find(H=>H.id===u)?.rooms.filter(H=>M.includes(H.id))||[];for(let H of S){let te=H.routeStair?window.KERN_ROUTE_STAIRS.editFrame(H):H,de=window.KERN_SHAPES?.points(te)||[[te.x,te.y],[te.x+te.w,te.y],[te.x+te.w,te.y+te.h],[te.x,te.y+te.h]],Z=new Yi(new mt().setFromPoints(de.map(G=>new T(G[0],te.z+d.get(u).position.y+.08,G[1]))),Y);Z.renderOrder=10,St.add(Z)}if(S.length){let H=S.map(Z=>Z.routeStair?{...Z,...window.KERN_ROUTE_STAIRS.bounds(Z)}:Z),te=Math.min(...H.map(Z=>Z.x)),de=Math.min(...H.map(Z=>Z.y));Mr({floor:u,x:te,y:de,z:Math.min(...H.map(Z=>Z.z)),w:Math.max(...H.map(Z=>Z.x+Z.w))-te,h:Math.max(...H.map(Z=>Z.y+Z.h))-de})}},J=function({active:u,selected:M=[],visible:S=[],select:H=!1,navigate:te=!1}){let de=new Set(S),Z=M.includes(u)&&d.has(u)?u:null;if(!(Ie===Z&&d.has(u)&&Je===u&&P().length===de.size&&P().every(oe=>de.has(oe))&&B.size===M.length&&M.every(oe=>B.has(oe))&&!H&&!te)){n?.cancel(),ue&&Dn(),(ze||ht==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&Dt(!0),Xn(),X.clear(),he=null;for(let[oe,ne]of d)ne.visible=de.has(oe);if(Ie=Z,Ae(M),d.has(u)&&(te?dt(u):(Je=u,Xe=I(u))),H)Ye(M);else if(Et&&!de.has(Et.floor)){let oe=Et.isFloor?kt:null;se(null,null),oe&&(kt=oe)}kt?.objects&&Ne(kt.objects.filter(oe=>de.has(oe.floor))),He(null),ve(),De(!0),q("controller")}},Ne=function(u){let M=(u||[]).filter(S=>d.has(S.floor));if(M.length&&M.every(S=>S.kind==="rooms"&&S.floor===M[0].floor)){le(M[0].floor,M.map(S=>S.id));return}if(se(null,null),n?.select(M),!!M.length){kt={objects:M.map(S=>({...S}))};for(let S of M){let H=S.polygons?.length?S.polygons:[[[S.x,S.y],[S.x+S.w,S.y],[S.x+S.w,S.y+S.h],[S.x,S.y+S.h]]],te=S.z+d.get(S.floor).position.y+.08;for(let de of H){let Z=new Yi(new mt().setFromPoints(de.map(G=>new T(G[0],te,G[1]))),Y);Z.renderOrder=10,Z.userData.selectedObject={floor:S.floor,kind:S.kind,id:S.id},St.add(Z)}}}},Ye=function(u){let M=[...new Set(u||[])].filter(S=>d.get(S)?.visible);Ae(u),se(M.length===1?M[0]:null,null),kt=M.length?{floors:M}:null},et=function(){if(!kt)return Qe(!0,!0);let u=new gn,M=kt.floor;if(kt.objects){M=kt.objects[0]?.floor;for(let Z of kt.objects){let G=d.get(Z.floor).position.y;u.expandByPoint(new T(Z.x,Z.z+G,Z.y)),u.expandByPoint(new T(Z.x+Z.w,Z.z+Z.height+G,Z.y+Z.h))}}else if(kt.floors){M=kt.floors.includes(Ie)?Ie:kt.floors[0];for(let Z of kt.floors){let G=e.levels.find(ne=>ne.id===Z);if(!G||!d.get(Z)?.visible)continue;let oe=d.get(Z).position.y;for(let ne of[...G.boxes,...G.polygons||[],...k(G)])u.expandByPoint(new T(ne.x,ne.z+oe,ne.y)),u.expandByPoint(new T(ne.x+ne.w,ne.z+ne.height+oe,ne.y+ne.h))}}else{let Z=e.levels.find(ne=>ne.id===M);if(!Z)return;let G=kt.ids.length?kt.ids.map(ne=>Z.rooms.find(Ee=>Ee.id===ne)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(Z.id,ne)).filter(Boolean):Z.rooms,oe=d.get(Z.id).position.y;for(let ne of G){let Ee=ne.routeStair?{...ne,...window.KERN_ROUTE_STAIRS.bounds(ne)}:ne;u.expandByPoint(new T(Ee.x,Ee.z+oe,Ee.y)),u.expandByPoint(new T(Ee.x+Ee.w,Ee.z+(Ee.height||Z.height||3)+oe,Ee.y+Ee.h))}}if(u.isEmpty())return;let S=u.getCenter(new T),H=Math.max(2,u.getSize(new T).length()/2),te=H/Math.sin(On.degToRad(h.fov/2))*Math.max(1,1/h.aspect)*1.15,de=h.position.clone().sub(f.target).normalize();nt(S.clone().add(de.multiplyScalar(te)),S,!0,I(M))},Ke=function(u){for(u.routeStair&&(u=window.KERN_ROUTE_STAIRS.editFrame(u)),Mr(u);St.children.length;){let S=St.children[0];St.remove(S),S.geometry.dispose()}let M=u.z+d.get(u.floor).position.y+.08;if(!u.isFloor){let S=new Yi(new mt().setFromPoints((window.KERN_SHAPES?.points(u)||[[u.x,u.y],[u.x+u.w,u.y],[u.x+u.w,u.y+u.h],[u.x,u.y+u.h]]).map(H=>new T(H[0],M,H[1]))),Y);if(S.renderOrder=10,St.add(S),window.KERN_CONCRETE_CAP_UI?.readOnly(u.floor,u.id))return;for(let[H,te,de]of window.KERN_ROTATE?.active()&&window.KERN_ROTATE.eligibleRoom(u)?window.KERN_SHAPES.raw(u).map((Z,G)=>["rotate-"+G,...Z]):(window.KERN_TRANSFORM?.handles(u)||[["nw",u.x,u.y],["ne",u.x+u.w,u.y],["se",u.x+u.w,u.y+u.h],["sw",u.x,u.y+u.h]]).filter(Z=>Z[0].length===2)){let Z=H.startsWith("rotate-")&&window.KERN_ROTATE?.pivotFor(u)?.index===Number(H.slice(7)),G=new Te(new Ct(Z?.55:.35,.15,Z?.55:.35),Z?zn:Y);G.position.set(te,M,de),G.userData.edge=H,G.renderOrder=11,St.add(G)}}if(u.routeStair&&window.KERN_ROUTE_STAIRS){let S=u.routeStair,H=S.nodes,te=window.KERN_ROUTE_STAIRS.elevations(u,window.kernPlanner?.getPlan());for(let de=0;de<H.length;de++){let Z=window.KERN_ROUTE_STAIRS.point(u,H[de]),G=te[de],oe=(de===0?S.start?.floor:de===H.length-1?S.end?.floor:null)||u.floor,ne=d.get(oe)?.position.y??d.get(u.floor).position.y,Ee=G+ne,Be=new Te(new Mn(.23,10,8),Y);Be.position.set(Z[0],Ee+.12,Z[1]),Be.userData.edge="route-node-"+de,Be.userData.routeZ=G,Be.userData.displayOffset=ne,Be.renderOrder=16,St.add(Be);let qe=new Te(new ir(.18,.45,8),zn);if(qe.position.set(Z[0],Ee+1,Z[1]),qe.userData.edge="route-height-"+de,qe.userData.routeZ=G,qe.userData.displayOffset=ne,qe.renderOrder=16,St.add(qe),de===(window.KERN_ROUTE_UI?.selectedNode??0))for(let[Ge,tt]of(H[de].landing||[]).entries()){let ut=window.KERN_ROUTE_STAIRS.point(u,tt),rt=new Te(new Ct(.22,.15,.22),zn);rt.position.set(ut[0],Ee+.14,ut[1]),rt.userData.edge="route-landing-"+de+"-"+Ge,rt.userData.routeZ=G,rt.userData.displayOffset=ne,rt.renderOrder=17,St.add(rt)}}}if(!u.isFloor&&!window.KERN_ROTATE?.active()){let S=new Te(new yi(.28),Y);S.position.set(u.x+u.w/2,M,u.y+u.h/2),S.userData.edge="move",S.renderOrder=14,St.add(S)}if(!u.routeStair&&!window.KERN_ROTATE?.active()&&(u.isFloor||u.localSteps||window.KERN_ROTATE?.eligibleRoom(u))){let S=u.localSteps&&window.KERN_ELEVATION_UI?.handlePoint(u.floor,u.id),H=S?.x??u.x+u.w/2,te=S?.y??u.y+u.h/2,de=(u.__elevation?u.z:window.KERN_ELEVATION_UI?.handleZ(u.floor,u.id)??u.z)+d.get(u.floor).position.y,Z=new Yt(new mt().setFromPoints([new T(H,de,te),new T(H,de+1.6,te)]),zn);Z.renderOrder=12,St.add(Z);let G=new Te(new ir(.23,.55,8),zn);G.position.set(H,de+1.6,te),G.userData.edge="elevate",G.renderOrder=13,St.add(G)}},ct=function(u,M){let S=a.domElement.getBoundingClientRect();return Me.set((u.clientX-S.left)/S.width*2-1,-(u.clientY-S.top)/S.height*2+1),h.updateMatrixWorld(!0),l.updateMatrixWorld(!0),ie.setFromCamera(Me,h),ie.ray.intersectPlane(new Zt(new T(0,1,0),-(M.z+d.get(M.floor).position.y)),new T)},gt=function(){for(;wt.children.length;){let u=wt.children[0];wt.remove(u),u.geometry.dispose()}},Dt=function(u=!1){let M=ze;ze=null,window.KERN_BRIDGE_UI?.cancel(),gt(),bt.style.display="none",f.enabled=!Bt,M&&a.domElement.hasPointerCapture(M.pointerId)&&a.domElement.releasePointerCapture(M.pointerId),u&&(window.KERN_CONNECTION_3D?.cancel(),ht="select",St.visible=!Bt)},Ni=function(u){u!==ht&&(n?.cancel(),ue&&Dn(),window.KERN_CONNECTION_3D?.cancel(),Dt(),u!=="select"&&u!=="bridge"&&!Ie&&en(Je,{preserveEditing:!0}),ht=u,St.visible=u==="select",a.domElement.title=u==="bridge"?"Click two room floors at the same height":u==="edge-steps"?"Click a room edge and drag outward":u==="steps"?"Draw between two different-height surfaces":u==="room"?"Drag a room footprint":u==="stairs"?"Draw a stair footprint, then choose destination floors":"")},an=function(u,M){let S=a.domElement.getBoundingClientRect();Me.set((u.clientX-S.left)/S.width*2-1,-(u.clientY-S.top)/S.height*2+1),h.updateMatrixWorld(!0),ie.setFromCamera(Me,h);let H=ie.ray.intersectPlane(new Zt(new T(0,1,0),-M),new T);return H?{x:H.x,y:H.z}:null},Kn=function(u){if(gt(),bt.style.display="block",bt.style.left="18px",bt.style.top="auto",bt.style.bottom="18px",bt.textContent=u.error||u.summary,u.error||u.valid===!1||!u.room&&!u.detail||!d.has(u.fid))return;let M=u.room?.bridge?[{...u.room,polygon:window.KERN_SHAPES.points(u.room),z:u.room.z-.15,height:.15}]:u.detail?Sf(u.detail):[{...u.room,z:e.levels.find(S=>S.id===u.fid).z-.15,height:.15}];for(let S of M){let H;S.polygon?H=Ao(S):H=new Ct(S.w,S.height,S.h);let te=new Te(H,zn);S.polygon?te.position.y=S.z+d.get(u.fid).position.y:te.position.set(S.x+S.w/2,S.z+S.height/2+d.get(u.fid).position.y,S.y+S.h/2),te.renderOrder=14,wt.add(te)}},Gt=function(u){if(bn(u,{physicalOnly:!0}),!at?.floorSurface||!at.room||!at.normal||at.normal.y<.5)return null;let M=e.levels.find(H=>H.id===at.floor),S=M?.rooms.find(H=>H.id===at.room);return S?{floor:M.id,p:{x:at.point.x,y:at.point.z},z:S.z}:null},_n=function(u,M=Ie||Je){bn(u);let S=at?.floor||M,H=e.levels.find(Z=>Z.id===S);if(!H)return null;let te=at?{x:at.point.x,y:at.point.z}:an(u,H.z+d.get(S).position.y);if(!te)return null;let de=at?.point||new T(te.x,H.z+d.get(S).position.y,te.y);return{floor:S,room:at?.room,door:at?.door,p:te,altKey:!!u.altKey,worldPerPixel:2*h.position.distanceTo(de)*Math.tan(h.fov*Math.PI/360)/Math.max(1,a.domElement.getBoundingClientRect().height)}},wn=function(u){gt(),bt.style.display="block",bt.style.left="18px",bt.style.top="auto",bt.style.bottom="18px",bt.textContent=u.valid?u.summary||(ht==="disconnect"?"Release to remove connection":"Click or release to place opening"):u.reason||"Choose a wall";let M=u.geometry;if(!(!M||!d.has(u.fid)))for(let S of M.segments||[M]){let H=S,te=H.axis==="poly"?H.p0:H.axis==="h"?[H.start,H.fixed]:[H.fixed,H.start],de=H.axis==="poly"?H.p1:H.axis==="h"?[H.end,H.fixed]:[H.fixed,H.end],Z=u.door?.kind==="window"?u.door.sill??.9:0,G=u.door?.kind==="window"?u.door.height??1.4:u.door?.maximumPassage?u.door.height:window.KERN_LOW_OPENINGS?.recognized(u.door)?u.clearHeight??u.door.height:2.2,oe=u.z+Z+d.get(u.fid).position.y,ne=[[te[0],oe,te[1]],[de[0],oe,de[1]],[de[0],oe+G,de[1]],[te[0],oe+G,te[1]]],Ee=new Yi(new mt().setFromPoints(ne.map(Be=>new T(...Be))),R);Ee.renderOrder=20,wt.add(Ee)}},Pf=function(u=performance.now()){return!!Ln&&!x?.matches&&u-Ln.start<Ln.duration},$h=function(u=performance.now()){if(!An)return;let M=new T(An.x+(An.bobX||0)*Math.cos(Io),An.z+(An.eyeHeight??1.6278874)+(An.bobY||0),An.y-(An.bobX||0)*Math.sin(Io)),S=new Lt().setFromEuler(new un(Zh,Io,An.roll||0,"YXZ"));if(h.rotation.order="YXZ",Ln){let te=x?.matches?1:On.clamp((u-Ln.start)/Ln.duration,0,1),de=te*te*(3-2*te);h.position.lerpVectors(Ln.position,M,de),h.quaternion.slerpQuaternions(Ln.orientation,S,de),h.fov=On.lerp(Ln.fov,An.fov??90,de),h.updateProjectionMatrix(),te===1&&(Ln=null)}else h.position.copy(M),h.quaternion.copy(S);h.updateMatrixWorld(!0);let H=new T(0,0,-1).applyQuaternion(h.quaternion);if(Ui.position.copy(h.position),Ui.target.position.copy(h.position).add(H.multiplyScalar(8)),Ui.visible=Kh,!An.fly){for(let te of A)te.visible=!1;for(let te of E)te.visible=!te.userData.duplicate&&Math.abs(te.position.y-An.z)<.2}},If=function(u,M=0,S=0,H=!0,te=!1,de=!1){if(u){let Z=de&&!u.fly&&!x?.matches?{position:h.position.clone(),orientation:h.quaternion.clone(),fov:h.fov,start:performance.now(),duration:360}:null;if(n?.cancel(),ue&&Dn(),Dt(!0),!Bt){if(Cs=Jl(),Bt=!0,es=!!u.fly,l.children.filter(G=>G.isHemisphereLight||G.isDirectionalLight).forEach(G=>{G.userData.originalIntensity=G.intensity,u.fly||(G.intensity=G.isHemisphereLight?.8:.3)}),St.visible=!1,f.enabled=!1,re=null,!u.fly){ae=0,fe=!0,j=!1,We=!1,Ue=!1,Ie=null;for(let G of d.values())G.visible=!0;_e.visible=!1,Fi.visible=!0}ve()}if(es&&!u.fly){ae=0,fe=!0,j=!1,We=!1,Ue=!1,Ie=null;for(let G of d.values())G.visible=!0;_e.visible=!1,Fi.visible=!0,es=!1,ve()}es=!!u.fly,(de||u.fly)&&(Ln=Z),!Ln&&h.fov!==(u.fov??90)&&(h.fov=u.fov??90,h.updateProjectionMatrix()),An=u,Io=Number.isFinite(M)?M:0,Zh=On.clamp(Number.isFinite(S)?S:0,-Math.PI/2+.001,Math.PI/2-.001),Kh=H,$h()}else if(Bt){let Z=h.position.clone(),G=h.getWorldDirection(new T);Bt=!1,es=!1,Ln=null,h.fov=Cs?.fov??42,h.updateProjectionMatrix(),l.children.filter(oe=>oe.isHemisphereLight||oe.isDirectionalLight).forEach(oe=>oe.intensity=oe.userData.originalIntensity??oe.intensity),St.visible=!0,An=null,Ui.visible=!1,Fi.visible=!1,f.enabled=!0,h.rotation.order="XYZ",jl(te?{...Cs,position:Z.toArray(),target:Z.clone().add(G.multiplyScalar(10)).toArray()}:Cs)}},Jl=function(){return{fov:h.fov,position:h.position.toArray(),target:f.target.toArray(),focused:Ie,navigationFloor:Je,navigationY:Xe,navigationElevation:I(Je),visible:P(),gap:ae,showWalls:fe,showCeilings:Re,showSlabs:je,cutaway:j,cutHeight:ce,labels:Ue,xray:We,showGrid:Ve,overview:null}},jl=function(u){if(!u||ee)return;h.fov=Number.isFinite(u.fov)?u.fov:42,h.updateProjectionMatrix();let M=te=>Array.isArray(te)&&te.length===3&&te.every(Number.isFinite);Pe(),ae=Math.max(0,Math.min(12,Number(u.gap)||0)),fe=u.showWalls!==!1,Re=!!u.showCeilings,je=u.showSlabs!==!1,j=u.cutaway!==!1,ce=Number.isFinite(u.cutHeight)?Math.max(.4,Math.min(2.4,u.cutHeight)):1.15,Ue=u.labels!==!1,We=!!u.xray,Ve=u.showGrid!==!1,_e.visible=Ve,Ie=d.has(u.focused)?u.focused:null;let S=Array.isArray(u.visible)?u.visible.filter(te=>d.has(te)):[...d.keys()];for(let[te,de]of d)de.visible=S.includes(te);if(!Ie&&!S.length&&u.visible?.length)for(let te of d.values())te.visible=!0;Je=d.has(u.navigationFloor)?u.navigationFloor:Ie||Je;let H=d.has(u.navigationFloor)&&Number.isFinite(u.navigationElevation)?I(Je)-u.navigationElevation:0;Xe=(Number.isFinite(u.navigationY)?u.navigationY:I(Je))+H,He(null),ve(),M(u.position)&&M(u.target)?nt(new T().fromArray(u.position).add(new T(0,H,0)),new T().fromArray(u.target).add(new T(0,H,0)),!1):Qe(),De(!0),q("restore")},Qh=function(){if(!ee){o?.dispose(),s?.dispose(),r?.(),n?.dispose(),a.domElement.removeEventListener("pointerdown",Lh,!0),a.domElement.removeEventListener("pointermove",Nh,!0),a.domElement.removeEventListener("pointerup",Uh,!0),a.domElement.removeEventListener("pointercancel",Po,!0),a.domElement.removeEventListener("lostpointercapture",Po,!0),Dt(!0),a.domElement.removeEventListener("pointerdown",It,!0),a.domElement.removeEventListener("pointermove",Wt,!0),a.domElement.removeEventListener("lostpointercapture",Pt,!0),a.domElement.removeEventListener("pointerup",Pt,!0),a.domElement.removeEventListener("pointercancel",Pt,!0),a.domElement.removeEventListener("pointerdown",ln,!0),a.domElement.removeEventListener("pointermove",pn,!0),a.domElement.removeEventListener("pointerup",As,!0),a.domElement.removeEventListener("pointercancel",ui,!0),a.domElement.removeEventListener("lostpointercapture",Dh,!0),ee=!0,Ln=null,Ui.dispose();for(let u of Fi.children)u.geometry.dispose();re=null,a.setAnimationLoop(null),Yh.disconnect(),a.domElement.removeEventListener("pointerdown",Fh,!0),a.domElement.removeEventListener("pointermove",Oh,!0),a.domElement.removeEventListener("pointerup",Bh,!0),a.domElement.removeEventListener("pointercancel",Dn,!0),a.domElement.removeEventListener("lostpointercapture",Dn,!0),Rs.remove(),a.domElement.removeEventListener("pointerdown",zh,!0),a.domElement.removeEventListener("pointermove",Hh,!0),a.domElement.removeEventListener("pointerup",kh,!0),a.domElement.removeEventListener("pointercancel",Xn,!0),a.domElement.removeEventListener("lostpointercapture",Xn,!0),Zn.remove(),bt.remove(),xr.dispose(),zn.dispose(),Y.dispose(),R.dispose(),Co.dispose();for(let u of St.children)u.geometry.dispose();f.removeEventListener("start",Wh),f.removeEventListener("end",Xh),f.dispose();for(let[u,M]of Object.entries(Vh))a.domElement.removeEventListener(u,M);a.domElement.removeEventListener("webglcontextlost",qh),window.removeEventListener("blur",Kl);for(let u of[...A,...E])u.material.map.dispose(),u.material.dispose(),u.geometry&&!u.isSprite&&u.geometry.dispose();for(let u of C)u.geometry.dispose(),u.material.dispose();for(let u of U)u.geometry.dispose();for(let u of g.values())u.dispose();y.dispose(),_e.geometry.dispose();for(let u of Array.isArray(_e.material)?_e.material:[_e.material])u.dispose();a.dispose(),a.forceContextLoss(),a.domElement.remove(),l.clear(),X.clear()}};a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.outputColorSpace=hn,a.setClearColor(1514532),a.domElement.setAttribute("aria-label","3D building editor. Alt-left drag orbits; middle or right drag pans. Alt-right drag horizontally zooms at the starting pointer: right closer, left farther. Click a floor or floor control to show and edit it alone; Shift-click adds or removes floors. F frames the selection. Click rooms and openings within the selected floor to edit them."),a.domElement.tabIndex=0,i.appendChild(a.domElement);let l=new qr,h=new mn(42,1,.05,5e3);l.add(new ho(15988735,4739939,2.2));let p=new lr(16777215,2.5);p.position.set(-40,80,-30),l.add(p);let m=new lr(12044524,.6);m.position.set(40,10,60),l.add(m);let f=new Gl(h,a.domElement),_=c;c=()=>{o?.dispose(),s?.dispose(),r?.(),n?.dispose(),f.dispose();let u=new Set,M=new Set,S=new Set;l.traverse(H=>{H.geometry&&u.add(H.geometry);for(let te of Array.isArray(H.material)?H.material:H.material?[H.material]:[])M.add(te),te.map&&S.add(te.map)});for(let H of S)H.dispose();for(let H of M)H.dispose();for(let H of u)H.dispose();l.clear(),_()},f.enableDamping=!0,f.dampingFactor=.09,f.maxPolarAngle=Math.PI-.001,f.minDistance=1,f.maxDistance=1600,f.screenSpacePanning=!0,f.mouseButtons={LEFT:null,MIDDLE:Pn.PAN,RIGHT:Pn.PAN},f.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN};let y=new Ct(1,1,1),g=new Map,d=new Map,A=[],E=[],v=[],D=[],C=[],U=[],N=(u,M=!1)=>{let S=u+(M?":xray":"");return g.has(S)||g.set(S,new ps({color:u,roughness:.88,metalness:0,transparent:M,opacity:M?.5:1,depthWrite:!M})),g.get(S)},b=e.bounds,w=(b.minX+b.maxX)/2,F=(b.minY+b.maxY)/2,K=Math.max(6,(b.maxX-b.minX)*.22),$=e.levels.find(u=>u.id==="L0"),Q=e.siteGroundZ??$?.z??0,O=$?e.levels.indexOf($):e.levels.reduce((u,M,S)=>Math.abs(M.z-Q)<Math.abs(e.levels[u].z-Q)?S:u,0),k=u=>(u.primitives||[]).map(M=>{let S=window.KERN_PRIMITIVES.bounds(M);return{...S,z:u.z+S.z}}),W=u=>{let M=[...u.boxes,...u.polygons||[],...k(u)];return M.length?{minX:Math.min(...M.map(S=>S.x)),maxX:Math.max(...M.map(S=>S.x+S.w)),minY:Math.min(...M.map(S=>S.y)),maxY:Math.max(...M.map(S=>S.y+S.h))}:b},z=(u,M,S)=>{let H=Ky(u,M);if(!H)return;let te=String(u.name||u.id),de=Math.min(.32,Math.min(H.w,H.h)*.1),Z=H.h>H.w*1.35,G=(Z?H.h:H.w)-de*2,oe=(Z?H.w:H.h)-de*2,ne=Math.min(G,9),Ee=Math.min(oe,2.5),Be=64,qe=document.createElement("canvas");qe.width=Math.ceil(ne*Be),qe.height=Math.ceil(Ee*Be);let Ge=qe.getContext("2d");if(!Ge)return;let tt=Jy(te,qe.width-10,qe.height-8,Ge);Ge.fillStyle="#263545",Ge.textAlign="center",Ge.textBaseline="middle",Ge.strokeStyle="#eef3f4",Ge.lineWidth=Math.max(1,tt.fontSize*.045),Ge.lineJoin="round",tt.lines.forEach((lt,yt)=>{let zt=qe.height/2+(yt-(tt.lines.length-1)/2)*tt.lineHeight;Ge.strokeText?.(lt,qe.width/2,zt),Ge.fillText(lt,qe.width/2,zt)});let ut=new ds(qe);ut.colorSpace=hn;let rt=new Te(new Un(ne,Ee),new $t({map:ut,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));rt.rotation.set(-Math.PI/2,0,Z?Math.PI/2:0),rt.position.set(H.x+H.w/2,H.z+.006,H.y+H.h/2),rt.renderOrder=2,rt.userData={level:M.id,roomLabel:!0,room:u.id,name:te,surface:H,worldWidth:ne,worldHeight:Ee,fontSize:tt.fontSize/Be,lines:tt.lines},rt.userData.duplicate=E.some(lt=>lt.userData.level===M.id&&lt.position.distanceTo(rt.position)<.01),S.add(rt),E.push(rt)};for(let u=0;u<e.levels.length;u++){let M=e.levels[u],S=new jt,H=W(M);S.userData={id:M.id,rank:u-O,z:M.z},d.set(M.id,S),l.add(S);let te=new Map;for(let oe of[...M.boxes,...e.levels.flatMap(ne=>ne.id===M.id?[]:ne.boxes.filter(Ee=>["stair","landing"].includes(Ee.kind)&&wf(e,M,Ee)).map(Ee=>({...Ee,contextOnly:!0})))]){let ne=`${oe.color}:${oe.kind}:${!!oe.contextOnly}`;te.has(ne)||te.set(ne,[]),te.get(ne).push(oe)}for(let oe of te.values()){let ne=new tr(y,N(oe[0].color,oe[0].kind==="window"),oe.length);if(ne.frustumCulled=!1,ne.userData={boxes:oe,level:M.id,faded:new Set},S.add(ne),v.push(ne),D.push(ne),oe[0].kind==="wall"){let Ee=new tr(y,N(oe[0].color,!0),oe.length);Ee.frustumCulled=!1,Ee.renderOrder=1,Ee.userData={boxes:oe,level:M.id,primary:ne,xray:!0},ne.userData.fadeMesh=Ee,S.add(Ee),v.push(Ee)}}for(let oe of[...M.polygons||[],...e.levels.flatMap(ne=>ne.id===M.id?[]:(ne.polygons||[]).filter(Ee=>wf(e,M,Ee)).map(Ee=>({...Ee,contextOnly:!0})))]){let ne=Ao(oe),Ee=new Te(ne,N(oe.color,oe.kind==="window"));Ee.position.y=oe.z,Ee.userData={level:M.id,stair:oe.stair,sourceFloor:oe.sourceFloor,door:oe.door,contextOnly:!!oe.contextOnly,room:oe.room,kind:oe.kind,shape:oe},S.add(Ee),U.push(Ee)}let de=new mo(new gn(new T(H.minX,M.z+.04,H.minY),new T(H.maxX,M.z+.07,H.maxY)),8176895);de.visible=!1,de.material.depthTest=!0,de.material.transparent=!0,de.material.opacity=.95,de.userData.floorHighlight=M.id,S.add(de),C.push(de);let Z=document.createElement("canvas");Z.width=640,Z.height=96;let G=Z.getContext("2d");if(G){G.fillStyle="#202936",G.fillRect(0,0,640,96),G.strokeStyle="#465367",G.strokeRect(1,1,638,94),G.fillStyle="#e7effc",G.font="500 34px system-ui",G.fillText(`${M.id} \xB7 ${M.z>0?"+":""}${M.z.toFixed(2)} m`,18,38),G.fillStyle="#c9d4e4",G.font="30px system-ui",G.fillText(String(M.name).slice(0,40),18,77,604);let oe=new ds(Z);oe.colorSpace=hn;let ne=new Kr(new er({map:oe,depthTest:!0,depthWrite:!1}));ne.position.set(b.minX-K*.65-1,M.z+.2,(H.minY+H.maxY)/2),ne.scale.set(K,K*96/640,1),ne.userData={level:M.id,floorLabel:!0,labelWidth:230,labelRatio:96/640},S.add(ne),A.push(ne);let Ee=new Yt(new mt().setFromPoints([new T(ne.position.x+K/2,M.z+.2,ne.position.z),new T(H.minX,M.z+.07,ne.position.z)]),new dn({color:8176895,depthTest:!0,transparent:!0,opacity:.9}));Ee.visible=!1,Ee.userData.floorLeader=M.id,S.add(Ee),C.push(Ee)}for(let oe of M.rooms||[])z(oe,M,S);for(let oe of M.annotations||[]){let ne=String(oe.text||""),Ee=oe.fontSize||.45;if(!ne)continue;let Be=Math.min(30,Math.max(Ee,ne.length*Ee*.58)),qe=Ee*1.3,Ge=document.createElement("canvas");Ge.width=Math.ceil(Be*64),Ge.height=Math.ceil(qe*64);let tt=Ge.getContext("2d");if(!tt)continue;tt.font=`${Ee*64}px system-ui,Segoe UI,sans-serif`,tt.fillStyle="#53686d",tt.textAlign="center",tt.textBaseline="middle",tt.fillText(ne,Ge.width/2,Ge.height/2,Ge.width);let ut=new ds(Ge);ut.colorSpace=hn;let rt=new Te(new Un(Be,qe),new $t({map:ut,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1})),lt=M.rooms.find(yt=>yt.id===oe.sourceRoom)||M.rooms.find(yt=>oe.x>=yt.x&&oe.x<=yt.x+yt.w&&oe.y>=yt.y&&oe.y<=yt.y+yt.h);rt.rotation.x=-Math.PI/2,rt.position.set(oe.x,(lt?.z??M.z)+.008,oe.y),rt.renderOrder=2,rt.userData={level:M.id,annotationLabel:!0,annotation:oe.id,name:ne},S.add(rt),E.push(rt)}}let ge=Math.max(b.maxX-b.minX,b.maxY-b.minY,15)*1.35,_e=new po(ge,Math.min(100,Math.ceil(ge)),6781842,3160648);_e.position.set(w,Q,F),_e.userData.groundDatum=Q,l.add(_e),_e.renderOrder=-10;for(let u of Array.isArray(_e.material)?_e.material:[_e.material])u.transparent=!1,u.opacity=1,u.depthWrite=!1;let ae=0,ee=!1,fe=!0,Re=!1,je=!0,j=!0,ce=1.15,Ue=!0,We=!1,Ve=!0,ot=null,Ie=null,L=[],ye="",he=null,re=null,pe=!1,Ce="",me=0,Fe=!1,Je=d.has(t.activeFloor)?t.activeFloor:$?.id||e.levels[O]?.id,Xe=d.get(Je)?.userData.z||0,I=u=>{let M=d.get(u);return M?M.userData.z+M.userData.rank*ae:Xe},x=window.matchMedia?.("(prefers-reduced-motion: reduce)"),X=new Set,ie=new Fn,Me=new be,P=()=>[...d].filter(([,u])=>u.visible).map(([u])=>u),B=new Set((t.editableFloors||[]).filter(u=>d.has(u))),q=(u="navigation")=>t.onVisibilityChanged?.(P(),Ie,u),Oe=null,ke=null,at=null,Et=null,ue=null,kt=null;r=window.KERN_DRAG_AXES?.register(()=>ue&&(!ue.edge||ue.edge==="elevate"||ue.edge.startsWith("route-"))?ue:null,()=>Dn(),u=>({space:"3d",origin:u.feedbackOrigin,supported:u.edge==="elevate"||u.edge?.startsWith("route-height")?["y"]:["x","z"]}));let St=new jt;l.add(St),s=Mf({scene:l,camera:h,canvas:a.domElement,container:i,manager:window.KERN_DRAG_AXES,owns:u=>u===ue||n?.ownsGesture(u)});let bt=document.createElement("div");bt.style.cssText="position:absolute;left:18px;bottom:18px;padding:8px 12px;background:#172b37;color:#e7b16b;pointer-events:none;display:none",i.append(bt);let zn=new $t({color:15184235,transparent:!0,opacity:.65,depthTest:!1}),xr=new ms({color:15185774,dashSize:.18,gapSize:.12,depthTest:!1}),vr=null,Zn=document.createElement("div");Zn.dataset.selectionDimensions="true",Zn.style.cssText="position:absolute;pointer-events:none;display:none;padding:4px 7px;border-radius:4px;background:#172b37dd;color:#e7b76e;font:13px system-ui",i.append(Zn);let Co=new $t({color:11184810,transparent:!0,opacity:.1,depthTest:!1,depthWrite:!1,side:fn}),R=new dn({color:5493465,depthTest:!1}),Y=new $t({color:5941759,depthTest:!1}),it=null,st=null,_t=0,It=u=>{if(n?.busy()||window.KERN_MAX_PASSAGE_UI?.altConnectIntent(u)||Bt||!u.altKey||ue||ze||![0,1,2].includes(u.button)||u.button===0&&Et&&ht==="select"&&(ct(u,Et),ie.intersectObjects(St.children,!1).some(H=>["nw","ne","se","sw"].includes(H.object.userData.edge))))return;if(it=u.pointerId,he=null,X.clear(),Xn(),Pe(),_t=performance.now()+500,f.mouseButtons.LEFT=Pn.ROTATE,f.mouseButtons.RIGHT=Pn.PAN,a.domElement.style.cursor=u.button===2?"ew-resize":"grabbing",u.__viewNavigation=!0,u.preventDefault(),u.button!==2){f.enabled=!0;return}nt(h.position.clone(),f.target.clone(),!1),bn(u);let M=h.getWorldDirection(new T),S=at?.point.clone()||ie.ray.intersectPlane(new Zt().setFromNormalAndCoplanarPoint(M,f.target),new T)||f.target.clone();st={x:u.clientX,anchor:S,position:h.position.clone(),target:f.target.clone(),distance:h.position.distanceTo(f.target)},f.enabled=!1,a.domElement.setPointerCapture(u.pointerId),u.stopImmediatePropagation()},Wt=u=>{if(it!==u.pointerId||!st)return;u.__viewNavigation=!0,u.preventDefault(),u.stopImmediatePropagation();let M=st,S=On.clamp(M.distance*Math.exp(-(u.clientX-M.x)*.01),f.minDistance,f.maxDistance)/M.distance;nt(M.position.clone().sub(M.anchor).multiplyScalar(S).add(M.anchor),M.target.clone().sub(M.anchor).multiplyScalar(S).add(M.anchor),!1),Er()},Pt=u=>{if(it!==u.pointerId)return;let M=!!st;u.__viewNavigation=!0,it=null,st=null,_t=performance.now()+400,f.mouseButtons.LEFT=null,f.mouseButtons.RIGHT=Pn.PAN,f.enabled=!Bt,window.KERN_TRANSFORM?.syncCursor(),a.domElement.style.cursor="",M&&(u.preventDefault(),u.stopImmediatePropagation(),a.domElement.hasPointerCapture(u.pointerId)&&a.domElement.releasePointerCapture(u.pointerId))};a.domElement.addEventListener("pointerdown",It,!0),a.domElement.addEventListener("pointermove",Wt,!0),a.domElement.addEventListener("pointerup",Pt,!0),a.domElement.addEventListener("pointercancel",Pt,!0),a.domElement.addEventListener("lostpointercapture",Pt,!0);let ht="select",ze=null,wt=new jt;wt.userData.authorPreview=!0,l.add(wt);let ln=u=>{if(it===u.pointerId||u.__viewNavigation||Bt||ht==="select"||u.button!==0)return;if(u.preventDefault(),u.stopImmediatePropagation(),ht==="bridge"){let Z=Gt(u);Z&&window.KERN_BRIDGE_UI?.click(Z),gt(),bt.style.display="none";return}if(["door","connect","disconnect"].includes(ht)){let Z=_n(u);if(!Z)return;en(Z.floor,{preserveEditing:!0}),ze={connection:!0,pointerId:u.pointerId,floor:Z.floor,begin:window.KERN_CONNECTION_3D.begin(ht,Z),last:Z,clientX:u.clientX,clientY:u.clientY},f.enabled=!1,a.domElement.setPointerCapture(u.pointerId);return}if(!window.KERN_AUTHORING_3D||(bn(u),at?.floor&&!(ht==="stair-route"&&window.KERN_ROUTE_UI?.getDraft().length)&&en(at.floor,{preserveEditing:!0}),!Ie))return;let M=e.levels.find(Z=>Z.id===(at?.floor||Ie)),S=M.rooms.find(Z=>Z.id===at?.room)||(Et?.isFloor?null:Et),H=(S?.z??M.z)+d.get(M.id).position.y,te=an(u,H);if(!te)return;if(ht==="stair-route"){window.KERN_ROUTE_UI?.addPoint(te,u,S?.id,M.id);return}let de=window.KERN_AUTHORING_3D.begin(ht,at?.floor||Ie,te,S?.id,window.KERN_AUTHORING_3D.width());if(de.error){Kn(de);return}ze={pointerId:u.pointerId,z:H,begin:de,floor:Ie},f.enabled=!1,a.domElement.setPointerCapture(u.pointerId)},pn=u=>{if(ze?.connection){if(u.pointerId!==ze.pointerId)return;u.preventDefault(),u.stopImmediatePropagation(),ze.last=_n(u,ze.floor)||ze.last,ze.moved=Math.hypot(u.clientX-ze.clientX,u.clientY-ze.clientY)>5,wn(window.KERN_CONNECTION_3D.preview(ht,ze.last,ze.moved?ze.begin.hit:ze.begin.pending));return}if(!ze){if(!Bt&&it===null&&ht==="bridge"){let S=Gt(u),H=S&&window.KERN_BRIDGE_UI?.preview(S);H?Kn(H):(gt(),bt.style.display="none");return}if(!Bt&&it===null&&["door","connect","disconnect"].includes(ht)){let S=_n(u);S&&wn(window.KERN_CONNECTION_3D.preview(ht,S));return}if(!Bt&&it===null&&Ie&&["edge-steps","stair-route"].includes(ht)){bn(u);let S=e.levels.find(Z=>Z.id===(at?.floor||Ie)),H=S.rooms.find(Z=>Z.id===at?.room),te=(H?.z??S.z)+d.get(S.id).position.y,de=an(u,te);if(gt(),!de)return;if(ht==="edge-steps"){let Z=window.KERN_AUTHORING_3D.begin("edge-steps",Ie,de,H?.id,window.KERN_AUTHORING_3D.width());if(!Z.error){let G=new Yt(new mt().setFromPoints([Z.edge.a,Z.edge.b].map(oe=>new T(oe[0],te+.1,oe[1]))),R);G.renderOrder=18,wt.add(G)}}else{let Z=window.KERN_ROUTE_UI?.preview(de,u,H?.id,S.id);if(Z){Z.detail&&Kn(Z);let G=window.snapSize?.()||.25,oe=new Te(new Un(G,G),Co);oe.rotation.x=-Math.PI/2,oe.position.set(Z.point[0],te+.025,Z.point[1]),oe.renderOrder=17,wt.add(oe);let ne=new Te(new Mn(.07,10,8),Y);ne.position.set(Z.point[0],te+.1,Z.point[1]),ne.renderOrder=19,wt.add(ne)}}}return}if(u.pointerId!==ze.pointerId)return;if(u.preventDefault(),u.stopImmediatePropagation(),ze.floor!==Ie){Dt();return}let M=an(u,ze.z);M&&(ze.next=window.KERN_AUTHORING_3D.candidate(ze.begin,M,u.ctrlKey),Kn(ze.next))},As=u=>{if(!ze||u.pointerId!==ze.pointerId)return;if(u.preventDefault(),u.stopImmediatePropagation(),ze.connection){let S=ze;ze=null,gt(),bt.style.display="none",f.enabled=!0,a.domElement.hasPointerCapture(u.pointerId)&&a.domElement.releasePointerCapture(u.pointerId),window.KERN_CONNECTION_3D.finish(S.begin,S.last,S.moved);return}let M=ze.next;Dt(),M&&!M.error&&(Dt(!0),window.KERN_AUTHORING_3D.finish(M))};a.domElement.addEventListener("pointerdown",ln,!0),a.domElement.addEventListener("pointermove",pn,!0),a.domElement.addEventListener("pointerup",As,!0);let ui=u=>{!n?.busy()&&(!ze||ze.pointerId===u.pointerId)&&Dt(!0)};a.domElement.addEventListener("pointercancel",ui,!0);let Dh=u=>{ze?.pointerId===u.pointerId&&Dt()};a.domElement.addEventListener("lostpointercapture",Dh,!0);let Lh=u=>{it===u.pointerId||u.__viewNavigation||n?.down(u)&&nt(h.position.clone(),f.target.clone(),!1)},Nh=u=>n?.move(u),Uh=u=>n?.up(u),Po=u=>{(n?.cancel(u.pointerId)||n?.dragging())&&(u.preventDefault(),u.stopImmediatePropagation())};a.domElement.addEventListener("pointerdown",Lh,!0),a.domElement.addEventListener("pointermove",Nh,!0),a.domElement.addEventListener("pointerup",Uh,!0),a.domElement.addEventListener("pointercancel",Po,!0),a.domElement.addEventListener("lostpointercapture",Po,!0);let Fh=u=>{if(ue){u.preventDefault(),u.stopImmediatePropagation();return}if(it===u.pointerId||u.__viewNavigation||Bt||u.button!==0||!Et)return;let M=ct(u,Et),S=ie.intersectObjects(St.children,!1).find(te=>te.object.userData.edge);if(!S||(Number.isFinite(S.object.userData.routeZ)&&(M=ct(u,{...Et,z:S.object.userData.routeZ+(S.object.userData.displayOffset??d.get(Et.floor).position.y)-d.get(Et.floor).position.y})||S.point.clone()),M||(M=S.point.clone()),bn(u),S.object.userData.edge?.startsWith("route-")&&window.KERN_ROUTE_UI?.selectPoint(Number(S.object.userData.edge.split("-")[2])),window.KERN_ROTATE?.active()&&(!S||!window.KERN_ROTATE.eligibleRoom(Et))))return;let H=null;if(S?.object.userData.edge?.startsWith("rotate-")){let te=Number(S.object.userData.edge.slice(7));if(H=window.KERN_ROTATE.pivotFor(Et),!H||H.index===te){window.KERN_ROTATE.choosePivot(Et,"rooms",te),Ke(Et),u.preventDefault(),u.stopImmediatePropagation();return}}ue={feedbackOrigin:S.object.getWorldPosition(new T),rotationPivot:H,start:M.clone(),original:JSON.parse(JSON.stringify(Et)),next:JSON.parse(JSON.stringify(Et)),routeZ:S?.object.userData.routeZ,planeZ:Number.isFinite(S?.object.userData.routeZ)?S.object.userData.routeZ+(S.object.userData.displayOffset??d.get(Et.floor).position.y)-d.get(Et.floor).position.y:Et.z,edge:S?.object.userData.edge==="move"?null:S?.object.userData.edge,clientY:u.clientY,baseHeight:window.KERN_ELEVATION_UI?.handleZ(Et.floor,Et.id)??Et.z,baseGroupY:d.get(Et.floor).position.y,pointerId:u.pointerId},Et.routeStair&&ue.edge&&/^[nesw]{1,2}$/.test(ue.edge)&&(ue.original=window.KERN_ROUTE_STAIRS.editFrame(Et),ue.next=JSON.parse(JSON.stringify(ue.original))),window.KERN_DRAG_AXES?.begin(ue),f.enabled=!1,u.preventDefault(),u.stopImmediatePropagation(),a.domElement.setPointerCapture(u.pointerId)},Oh=u=>{if(!ue||ue.pointerId!==u.pointerId)return;let M=ct(u,{...ue.original,z:ue.planeZ??ue.original.z})||(ue.edge==="elevate"||ue.edge?.startsWith("route-height")?ue.start:null);if(!M)return;if(ue.edge?.startsWith("route-landing-")){let G=ue.original,oe=JSON.parse(JSON.stringify(G)),ne=ue.edge.split("-"),Ee=Number(ne[2]),Be=Number(ne[3]),qe=oe.routeStair.nodes[Ee].landing[Be],Ge=window.KERN_ROUTE_STAIRS.point(G,qe),tt=u.ctrlKey?0:window.snapSize?.()??.25,ut=Ge[0]+M.x-ue.start.x,rt=Ge[1]+M.z-ue.start.z,lt=window.KERN_DRAG_AXES?.plan(ue,{x:(tt?Math.round(ut/tt)*tt:ut)-Ge[0],y:(tt?Math.round(rt/tt)*tt:rt)-Ge[1]})||{x:ut-Ge[0],y:rt-Ge[1]};Object.assign(qe,window.KERN_ROUTE_STAIRS.local(G,[Ge[0]+lt.x,Ge[1]+lt.y])),window.KERN_ROUTE_STAIRS.simplePolygon(oe.routeStair.nodes[Ee].landing.map(zt=>window.KERN_ROUTE_STAIRS.point(oe,zt)))&&(ue.next=oe,Ke(oe));let yt=window.KERN_ROUTE_STAIRS.point(ue.next,ue.next.routeStair.nodes[Ee].landing[Be]);window.KERN_DRAG_AXES?.acceptPlan(ue,{x:yt[0]-Ge[0],y:yt[1]-Ge[1]}),u.preventDefault(),u.stopImmediatePropagation();return}if(ue.edge?.startsWith("route-")){let G=ue.original,oe=JSON.parse(JSON.stringify(G)),ne=oe.routeStair,Ee=Number(ue.edge.split("-").at(-1)),Be=ne.nodes[Ee];if(ue.edge.startsWith("route-height")){let Ge=2*h.position.distanceTo(new T(G.x+G.w/2,G.z+ue.baseGroupY,G.y+G.h/2))*Math.tan(h.fov*Math.PI/360)/Math.max(1,a.domElement.getBoundingClientRect().height),tt=ue.routeZ+(ue.clientY-u.clientY)*Ge,ut=u.ctrlKey?tt:Math.round(tt*4)/4,rt=window.KERN_DRAG_AXES?.apply(ue,{y:ut-ue.routeZ}),lt=rt?ue.routeZ+rt.y:ut;Math.abs(lt-ue.routeZ)>1e-9&&window.KERN_ROUTE_STAIRS.setHeight(oe,Ee,lt,window.kernPlanner?.getPlan())}else{let Ge=window.KERN_ROUTE_STAIRS.point(G,Be),tt=u.ctrlKey?0:window.snapSize?.()??.25,ut=Ge[0]+M.x-ue.start.x,rt=Ge[1]+M.z-ue.start.z,lt=window.KERN_ROUTE_STAIRS.snapNode(oe,Ee,[ut,rt],tt,u.ctrlKey,u.shiftKey),yt=window.KERN_DRAG_AXES?.plan(ue,{x:lt[0]-Ge[0],y:lt[1]-Ge[1]});yt&&(lt[0]=Ge[0]+yt.x,lt[1]=Ge[1]+yt.y),Math.hypot(lt[0]-Ge[0],lt[1]-Ge[1])>1e-9&&(window.KERN_ROUTE_STAIRS.moveNode(oe,Ee,lt,window.kernPlanner?.getPlan()),window.KERN_ROUTE_UI?.attachEndpoint(oe,Ee,lt))}ue.next=oe,Ke(oe);let qe=window.kernPlanner?.getPlan();if(ue.edge.startsWith("route-height"))window.KERN_DRAG_AXES?.accept(ue,{y:window.KERN_ROUTE_STAIRS.elevations(oe,qe)[Ee]-ue.routeZ});else{let Ge=window.KERN_ROUTE_STAIRS.point(G,G.routeStair.nodes[Ee]),tt=window.KERN_ROUTE_STAIRS.point(oe,oe.routeStair.nodes[Ee]);window.KERN_DRAG_AXES?.acceptPlan(ue,{x:tt[0]-Ge[0],y:tt[1]-Ge[1]})}if(qe){let Ge=qe.floors[G.floor];if(Ge?.rooms.some(tt=>tt.id===G.id)){let tt={...qe,floors:{...qe.floors,[G.floor]:{...Ge,rooms:Ge.rooms.map(rt=>rt.id===G.id?oe:rt)}}},ut=window.KERN_ROUTE_STAIRS.build(tt,G.floor,G.id);Kn({detail:ut,fid:G.floor,summary:ut.warnings[0]?.text||"Editable stair route"})}}u.preventDefault(),u.stopImmediatePropagation();return}if(ue.edge==="elevate"){let G=ue.original,oe=2*h.position.distanceTo(new T(G.x+G.w/2,G.z+ue.baseGroupY,G.y+G.h/2))*Math.tan(h.fov*Math.PI/360)/Math.max(1,a.domElement.getBoundingClientRect().height),ne=ue.baseHeight+(ue.clientY-u.clientY)*oe,Ee=u.ctrlKey?0:.25,Be=Math.max(-150,Math.min(150,Ee?Math.round(ne/Ee)*Ee:ne)),qe=window.KERN_DRAG_AXES?.apply(ue,{y:Be-ue.baseHeight}),Ge=qe?ue.baseHeight+qe.y:Be;if(ue.next={...G,z:Ge,...Math.abs(Ge-ue.baseHeight)>1e-9?{__elevation:!0}:{}},bt.style.display="block",bt.style.top="auto",bt.style.bottom="18px",bt.style.left="18px",bt.textContent=(G.isFloor?"Floor":"Surface")+" "+Ge.toFixed(2)+" m \xB7 "+(u.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"),d.get(G.floor).position.y=ue.baseGroupY,Ke(ue.next),G.isFloor)d.get(G.floor).position.y=ue.baseGroupY+Ge-G.z;else{let Sr=window.KERN_ELEVATION_UI?.preview(G.floor,G.id,Ge),jn=Sr&&window.KERN_ELEVATIONS?.build(Sr,G.floor,G.id),Df=jn?Sf(jn):[{x:G.x,y:G.y,w:G.w,h:G.h,z:Ge-.18,height:.18}];for(let yn of Df){let ts,ns;if(yn.polygon)ts=Ao(yn),ns=new Te(ts,zn),ns.position.y=yn.z+ue.baseGroupY;else if(!jn&&G.shape){let Lf=new Pi(window.KERN_SHAPES.points(G).map(tu=>new be(tu[0],-tu[1])));ts=new or(Lf,{depth:yn.height,bevelEnabled:!1,steps:1}),ts.rotateX(-Math.PI/2),ns=new Te(ts,zn),ns.position.y=yn.z+ue.baseGroupY}else ts=new Ct(yn.w,yn.height,yn.h),ns=new Te(ts,zn),ns.position.set(yn.x+yn.w/2,yn.z+yn.height/2+ue.baseGroupY,yn.y+yn.h/2);St.add(ns)}jn&&(bt.textContent=Ge.toFixed(2)+" m \xB7 "+(jn.ramp?"Ramp \xB7 "+Math.max(...jn.flights.map(yn=>yn.gradePercent||0)).toFixed(1)+"% grade":jn.segments[0].risers+" rises \xD7 "+(jn.metrics.riserMax*100).toFixed(1)+" cm")+" \xB7 "+(u.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"))}let tt=G.x-.25,ut=G.y+G.h+.25,rt=ue.baseHeight+ue.baseGroupY,lt=Ge+ue.baseGroupY,yt=[new T(tt,rt,ut),new T(tt,lt,ut)],zt=new Yt(new mt().setFromPoints(yt),xr);zt.computeLineDistances(),zt.renderOrder=16,St.add(zt);for(let Sr of[rt,lt]){let jn=new Yt(new mt().setFromPoints([new T(tt-.18,Sr,ut),new T(tt+.18,Sr,ut)]),Y);jn.renderOrder=16,St.add(jn)}let Jn=new T(tt,(rt+lt)/2,ut).project(h),Do=a.domElement.getBoundingClientRect(),eu=Ge-ue.baseHeight;bt.style.bottom="auto",bt.style.left=Math.min(Math.max(8,(Jn.x+1)*Do.width/2+12),Math.max(8,Do.width-260))+"px",bt.style.top=Math.min(Math.max(8,(1-Jn.y)*Do.height/2),Math.max(8,Do.height-60))+"px",bt.textContent=(eu>0?"+":"")+eu.toFixed(2)+" m \xB7 "+bt.textContent,u.preventDefault(),u.stopImmediatePropagation();return}let S=ue.original,H=u.ctrlKey?0:window.snapSize?.()??.5,te=H?Math.round((M.x-ue.start.x)/H)*H:M.x-ue.start.x,de=H?Math.round((M.z-ue.start.z)/H)*H:M.z-ue.start.z,Z={...S};if(ue.edge?.startsWith("rotate-")){let G=ue.rotationPivot||{x:S.x+S.w/2,y:S.y+S.h/2},oe=Math.atan2(ue.start.z-G.y,ue.start.x-G.x),ne=window.KERN_ROTATE.delta(S,(Math.atan2(M.z-G.y,M.x-G.x)-oe)*180/Math.PI,u.shiftKey);window.KERN_SHAPES.rotate(Z,ne,G),ue.rotationFeedback={center:G,start:oe,degrees:ne,cursor:M.clone()}}else if(ue.edge)ue.edge.includes("e")&&(Z.w=Math.max(1,S.w+te)),ue.edge.includes("s")&&(Z.h=Math.max(1,S.h+de)),ue.edge.includes("w")&&(Z.x=Math.min(S.x+S.w-1,S.x+te),Z.w=S.x+S.w-Z.x),ue.edge.includes("n")&&(Z.y=Math.min(S.y+S.h-1,S.y+de),Z.h=S.y+S.h-Z.y);else{Z.x+=M.x-ue.start.x,Z.y+=M.z-ue.start.z;let G=18*h.position.distanceTo(M)*Math.tan(h.fov*Math.PI/360)/Math.max(1,a.domElement.getBoundingClientRect().height),oe=u.ctrlKey&&u.shiftKey&&!u.altKey&&window.KERN_ROOM_SNAP?.translation(Z,e.levels.find(ne=>ne.id===S.floor).rooms,new Set([S.id]),G);ue.snap=oe||null,oe?(Z.x+=oe.dx,Z.y+=oe.dy):u.ctrlKey||(Z.x=S.x+te,Z.y=S.y+de)}if(ue.edge&&!ue.edge.startsWith("rotate-")&&(u.shiftKey&&!u.ctrlKey||u.altKey)&&window.KERN_TRANSFORM&&Object.assign(Z,window.KERN_TRANSFORM.resize(S,ue.edge,te,de,{...u,shiftKey:u.shiftKey&&!u.ctrlKey,altKey:u.altKey})),ue.edge&&!ue.edge.startsWith("rotate-")&&u.shiftKey&&u.ctrlKey&&!u.altKey){let G=ue.edge,oe={x:S.x+(G.includes("e")?S.w:0)+M.x-ue.start.x,y:S.y+(G.includes("s")?S.h:0)+M.z-ue.start.z},ne=18*h.position.distanceTo(M)*Math.tan(h.fov*Math.PI/360)/Math.max(1,a.domElement.getBoundingClientRect().height),Ee=window.KERN_ROOM_SNAP?.point(oe,e.levels.find(Be=>Be.id===S.floor).rooms,new Set([S.id]),ne);ue.snap=Ee||null,Ee&&(G.includes("e")&&(Z.w=Math.max(1,Ee.x-S.x)),G.includes("s")&&(Z.h=Math.max(1,Ee.y-S.y)),G.includes("w")&&(Z.x=Math.min(Ee.x,S.x+S.w-1),Z.w=S.x+S.w-Z.x),G.includes("n")&&(Z.y=Math.min(Ee.y,S.y+S.h-1),Z.h=S.y+S.h-Z.y))}if(S.shape&&ue.edge&&!ue.edge.startsWith("rotate-")&&window.KERN_TRANSFORM?.orientedResize&&Object.assign(Z,window.KERN_TRANSFORM.orientedResize(S,ue.edge,M.x-ue.start.x,M.z-ue.start.z,u)),!ue.edge){let G=window.KERN_DRAG_AXES?.plan(ue,{x:Z.x-S.x,y:Z.y-S.y});G&&(Z.x=S.x+G.x,Z.y=S.y+G.y)}if(ue.next=Z,Ke(Z),ue.rotationFeedback){let G=ue.rotationFeedback,oe=G.center,ne=Math.hypot(G.cursor.x-oe.x,G.cursor.z-oe.y),Ee=Math.min(ne,6)*.8,Be=G.start+G.degrees*Math.PI/180,qe=Z.z+ue.baseGroupY+.12,Ge=[];for(let rt=0,lt=Math.max(2,Math.min(160,Math.ceil(Math.abs(G.degrees)/5)));rt<=lt;rt++){let yt=G.start+(Be-G.start)*rt/lt;Ge.push(new T(oe.x+Math.cos(yt)*Ee,qe,oe.y+Math.sin(yt)*Ee))}let tt=[new T(oe.x+Math.cos(G.start)*ne,qe,oe.y+Math.sin(G.start)*ne),new T(oe.x,qe,oe.y),new T(oe.x+Math.cos(Be)*ne,qe,oe.y+Math.sin(Be)*ne)];for(let rt of[Ge,tt]){let lt=new Yt(new mt().setFromPoints(rt),xr);lt.computeLineDistances(),lt.renderOrder=15,St.add(lt)}let ut=a.domElement.getBoundingClientRect();bt.style.display="block",bt.style.bottom="auto",bt.style.left=Math.min(Math.max(8,u.clientX-ut.left+16),Math.max(8,ut.width-130))+"px",bt.style.top=Math.max(8,u.clientY-ut.top-38)+"px",bt.textContent=(G.degrees>0?"+":"")+G.degrees.toFixed(1)+"\xB0"}if(ue.snap)for(let G of ue.snap.guides?.length?ue.snap.guides:[ue.snap]){let oe=Z.z+d.get(Z.floor).position.y+.1,ne=G.edge?[G.edge.a,G.edge.b]:[[G.x-.2,G.y],[G.x+.2,G.y],[G.x,G.y],[G.x,G.y-.2],[G.x,G.y+.2]],Ee=new Yt(new mt().setFromPoints(ne.map(Be=>new T(Be[0],oe,Be[1]))),R);Ee.renderOrder=12,St.add(Ee)}u.preventDefault(),u.stopImmediatePropagation()},Bh=u=>{if(!ue||ue.pointerId!==u.pointerId)return;let M=ue;ue=null,window.KERN_DRAG_AXES?.refresh?.(),gt(),d.get(M.original.floor).position.y=M.baseGroupY,bt.style.display="none",f.enabled=!0,u.preventDefault(),u.stopImmediatePropagation(),a.domElement.hasPointerCapture(u.pointerId)&&a.domElement.releasePointerCapture(u.pointerId),M.next.__elevation||["x","y","w","h"].some(S=>M.next[S]!==M.original[S])||JSON.stringify(M.next.shape)!==JSON.stringify(M.original.shape)||JSON.stringify(M.next.routeStair)!==JSON.stringify(M.original.routeStair)?t.onRoomEdit?.(M.original.floor,M.original.id,M.next):M.edge?.startsWith("rotate-")&&(window.KERN_ROTATE.choosePivot(M.original,"rooms",Number(M.edge.slice(7))),Ke(M.original))},Dn=u=>{if(ue&&u?.pointerId!==void 0&&ue.pointerId!==u.pointerId)return;let M=ue;ue=null,window.KERN_DRAG_AXES?.refresh?.(),gt(),M&&(d.get(M.original.floor).position.y=M.baseGroupY),bt.style.display="none",f.enabled=!Bt,M&&a.domElement.hasPointerCapture?.(M.pointerId)&&a.domElement.releasePointerCapture(M.pointerId),Et&&Ke(Et)};a.domElement.addEventListener("pointerdown",Fh,!0),a.domElement.addEventListener("pointermove",Oh,!0),a.domElement.addEventListener("pointerup",Bh,!0),a.domElement.addEventListener("pointercancel",Dn,!0),a.domElement.addEventListener("lostpointercapture",Dn,!0);let Tn=null,Rs=document.createElement("div");Rs.style.cssText="position:absolute;border:1px solid #79b8ff;background:#79b8ff20;pointer-events:none;display:none;z-index:25",i.append(Rs);let Xn=()=>{Tn=null,Rs.style.display="none"},zh=u=>{Bt||it!==null||u.altKey||u.button!==0||ue||ht!=="select"||(Tn={id:u.pointerId,x:u.clientX,y:u.clientY,shift:u.shiftKey,subtract:u.ctrlKey||u.metaKey,previous:kt?.ids||[]})},Hh=u=>{if(!Tn||Tn.id!==u.pointerId||Math.hypot(u.clientX-Tn.x,u.clientY-Tn.y)<5)return;let M=a.domElement.getBoundingClientRect();Tn.moved=!0,Rs.style.display="block",Object.assign(Rs.style,{left:Math.min(u.clientX,Tn.x)-M.left+"px",top:Math.min(u.clientY,Tn.y)-M.top+"px",width:Math.abs(u.clientX-Tn.x)+"px",height:Math.abs(u.clientY-Tn.y)+"px"})},kh=u=>{if(!Tn||Tn.id!==u.pointerId)return;let M=Tn;if(Xn(),!M.moved)return;u.preventDefault(),X.clear(),he=null;let S=a.domElement.getBoundingClientRect(),H=Math.min(M.x,u.clientX),te=Math.max(M.x,u.clientX),de=Math.min(M.y,u.clientY),Z=Math.max(M.y,u.clientY),G=Ie||Je,oe=e.levels.find(Be=>Be.id===G);if(!oe)return;if(h.updateMatrixWorld(!0),window.KERN_GROUP_ROTATE?.modeActive()){let Be=window.KERN_GROUP_ROTATE,qe=Be.paths(window.kernPlanner.getPlan(),Be.candidates({three:!0})),Ge=new Map;for(let tt of qe){let ut=tt.points.flatMap(yt=>[tt.z,tt.z+tt.height].map(zt=>new T(yt[0],zt+(d.get(tt.ref.floor)?.position.y||0),yt[1]).project(h))).filter(yt=>yt.z>=-1&&yt.z<=1);if(!ut.length)continue;let rt=ut.map(yt=>(yt.x+1)*S.width/2+S.left),lt=ut.map(yt=>(1-yt.y)*S.height/2+S.top);Math.min(...rt)<=te&&Math.max(...rt)>=H&&Math.min(...lt)<=Z&&Math.max(...lt)>=de&&Ge.set(JSON.stringify(tt.ref),tt.ref)}Be.chooseMany([...Ge.values()],{additive:M.shift,subtractive:M.subtract});return}let ne=oe.rooms.filter(Be=>{let qe=(window.KERN_SHAPES?.points(Be)||[[Be.x,Be.y],[Be.x+Be.w,Be.y],[Be.x+Be.w,Be.y+Be.h],[Be.x,Be.y+Be.h]]).flatMap(ut=>[Be.z,Be.z+(Be.height||0)].map(rt=>new T(ut[0],rt+d.get(G).position.y,ut[1]).project(h))).filter(ut=>ut.z>=-1&&ut.z<=1);if(!qe.length)return!1;let Ge=qe.map(ut=>(ut.x+1)*S.width/2+S.left),tt=qe.map(ut=>(1-ut.y)*S.height/2+S.top);return Math.min(...Ge)<=te&&Math.max(...Ge)>=H&&Math.min(...tt)<=Z&&Math.max(...tt)>=de}).map(Be=>Be.id),Ee=M.subtract?M.previous.filter(Be=>!ne.includes(Be)):M.shift?[...new Set([...M.previous,...ne])]:ne;Ie||en(G,{preserveEditing:!0}),le(G,Ee),t.onRoomsSelect?.(G,Ee)};a.domElement.addEventListener("pointerdown",zh,!0),a.domElement.addEventListener("pointermove",Hh,!0),a.domElement.addEventListener("pointerup",kh,!0),a.domElement.addEventListener("pointercancel",Xn,!0),a.domElement.addEventListener("lostpointercapture",Xn,!0);let Tf=u=>{Bt||it===u.pointerId||u.__viewNavigation||(X.add(u.pointerId),X.size>1?he=null:he=u.button===0?{id:u.pointerId,x:u.clientX,y:u.clientY,moved:!1}:null)},Af=u=>{if(!Bt){if(he&&Math.hypot(u.clientX-he.x,u.clientY-he.y)>5&&(he.moved=!0),X.size||u.buttons){a.domElement.title="",He(null);return}He(bn(u))}},Rf=u=>{if(Bt||u.__viewNavigation)return;let M=he&&u.pointerId===he.id&&!he.moved&&Math.hypot(u.clientX-he.x,u.clientY-he.y)<=5&&X.size===1;if(X.delete(u.pointerId),he=null,!M)return;let S=bn(u);if(!S)return;if(u.shiftKey){if(!B.has(S))return;at?.door?t.onDoorSelect?.(S,at.door,{additive:!0}):at?.room&&t.onRoomSelect?.(S,at.room,{additive:!0});return}if(t.onFloorSelect){let te=Ie===S&&B.size===1&&B.has(S)&&!at?.floorSurface;t.onFloorSelect(S,{additive:!1}),te&&(at?.door?t.onDoorSelect?.(S,at.door):at?.room&&t.onRoomSelect?.(S,at.room));return}at?.floorSurface||at?.roomLabel&&(Ie!==S||!B.has(S))?en(S):(en(S,{preserveEditing:!!at?.room||!!at?.door}),at?.door?t.onDoorSelect?.(S,at.door):at?.room&&t.onRoomSelect?.(S,at.room))},Kl=()=>{n?.cancel(),Xn(),it=null,st=null,a.domElement.style.cursor="",f.mouseButtons.LEFT=null,f.mouseButtons.RIGHT=Pn.PAN,Dt(!0),Dn(),X.clear(),he=null,pe=!1,Pe(),He(null)};window.addEventListener("blur",Kl);let Cf=c;c=()=>{window.removeEventListener("blur",Kl),Cf()};let Vh={pointerdown:Tf,pointermove:Af,pointerup:Rf,pointercancel:u=>{X.delete(u.pointerId),he=null,He(null)},pointerleave:()=>{X.size||(a.domElement.title="",He(null))},keydown:u=>{if(!window.KERN_PRIMITIVE_UI?.handleKey?.(u)){if(u.key==="Escape"&&Tn){Xn(),he=null,X.clear(),u.preventDefault(),u.stopPropagation();return}if(u.key==="Escape"&&(ze||ht!=="select")){u.preventDefault(),u.stopImmediatePropagation(),Dt(!0);return}if(u.key==="Escape"&&ue){u.preventDefault(),u.stopImmediatePropagation(),Dn();return}u.key==="Escape"&&Ie?(u.preventDefault(),u.stopPropagation(),Ut()):Ie&&["ArrowUp","ArrowDown"].includes(u.key)&&(u.preventDefault(),u.stopPropagation(),hi(u.key==="ArrowUp"?1:-1))}},contextmenu:u=>{if(u.preventDefault(),Bt||u.altKey||performance.now()<_t)return;bn(u);let M=at;if(!M)return;bn(u,{physicalOnly:!0});let S=at,H=S&&["slab","landing","stair"].includes(S.kind)&&S.normal?.y>.2?{x:S.point.x,y:S.point.z,z:S.point.y-(d.get(S.displayFloor)?.position.y||0),floor:["stair","landing"].includes(S.kind)?void 0:S.floor}:null;t.onContext?.({floor:M.floor,room:M.room,x:M.point.x,y:M.point.z,z:e.levels.find(te=>te.id===M.floor)?.rooms.find(te=>te.id===M.room)?.z??e.levels.find(te=>te.id===M.floor)?.z??M.point.y,walkTarget:H,clientX:u.clientX,clientY:u.clientY})}};for(let[u,M]of Object.entries(Vh))a.domElement.addEventListener(u,M);let Gh=()=>{if(ee)return;let u=Math.max(1,i.clientWidth),M=Math.max(1,i.clientHeight);a.setSize(u,M,!1),h.aspect=u/M,h.updateProjectionMatrix(),s?.update(),ye=""},Wh=()=>{Pe(),pe=!0},Xh=()=>{pe=!1,me=performance.now(),Fe=We};f.addEventListener("start",Wh),f.addEventListener("end",Xh);let Yh=new ResizeObserver(Gh),qh=u=>{u.preventDefault(),t.onContextLost?.()};a.domElement.addEventListener("webglcontextlost",qh);let Bt=!1,es=!1,An=null,Cs=null,Io=0,Zh=0,Kh=!0,Ln=null,Ui=new uo(16773074,55,35,Math.PI/7,.65,1.3);Ui.visible=!1,l.add(Ui),l.add(Ui.target);let Fi=new jt,Jh=[...$?.rooms||[],...e.levels.filter(u=>u.id!==$?.id).flatMap(u=>u.rooms.filter(M=>M.groundSurface||M.localSteps&&e.stairs.some(S=>S.localSteps&&S.floorId===u.id&&S.roomId===M.id&&Math.min(...S.stops.map(H=>H.z))<=Q+.2&&Math.max(...S.stops.map(H=>H.z))>=Q-.2)))],jh={x:w-(ge+50)/2,y:F-(ge+50)/2,w:ge+50,h:ge+50};if(e.shapeAware&&window.KERN_SHAPES){let u=window.KERN_SHAPES,M=u.difference(u.multi(jh),Jh.filter(S=>S.groundSurface||S.localSteps||!["courtyard","terrace"].includes(S.type)).map(S=>S.routeStair&&e.stairs.find(H=>H.roomId===S.id)?.footprintGeometry||u.multi(S)));for(let S of M){let H=new Pi(S[0].map(de=>new be(de[0],-de[1])));for(let de of S.slice(1))H.holes.push(new qi(de.map(Z=>new be(Z[0],-Z[1]))));let te=new Te(new lo(H),N("#535c62"));te.rotation.x=-Math.PI/2,te.position.y=Q-.02,Fi.add(te)}}else for(let u of window.BuildingPreviewGeometry.subtractAll(jh,Jh.filter(M=>M.groundSurface||M.localSteps||!["courtyard","terrace"].includes(M.type)))){let M=new Te(new Un(u.w,u.h),N("#535c62"));M.rotation.x=-Math.PI/2,M.position.set(u.x+u.w/2,Q-.02,u.y+u.h/2),Fi.add(M)}return Fi.visible=!1,l.add(Fi),n=vf({scene:l,camera:h,renderer:a,controls:f,groups:d,data:e,prismGeometry:Ao,enabled:()=>!Bt&&ht==="select",canNavigate:()=>!Bt,surfaceHit:u=>(bn(u,{physicalOnly:!0}),at),onSelect:(u,M,S)=>S&&!B.has(u)?!1:window.KERN_PRIMITIVE_UI?.select(u,M,S),onEditMany:(u,M)=>window.KERN_PRIMITIVE_UI?.editMany(u,M),onEdit:(u,M,S,H,te)=>window.KERN_PRIMITIVE_UI?.edit(u,M,S,H,te)}),c=Qh,Yh.observe(i),Gh(),ve(),t.viewState?jl(t.viewState):Qe(),o=Ef({scene:l,camera:h,renderer:a,controls:f,groups:d,container:i,pick:u=>{let M=n?.pick(u);return M?{ref:{floor:M.root.userData.level,kind:"primitives",id:M.root.userData.primitive},point:M.point}:(bn(u),!at?.room&&!at?.door?null:{ref:{floor:at.floor,kind:at.door?"doors":"rooms",id:at.door||at.room},point:at.point,handle:ie.intersectObjects(St.children,!1).some(S=>S.object.userData.edge)})},enabled:()=>!Bt&&ht==="select",onStart:()=>{nt(h.position.clone(),f.target.clone(),!1)}}),a.setAnimationLoop(()=>{if(!ee){if(o?.sync(),n?.sync(),Bt){$h(),An?.fly&&De(),we(),a.render(l,h);return}V()||f.update(),Er(),n?.updateBounds(),s?.update(),De(),we(),a.render(l,h)}}),{cancelGroupRotation:()=>o?.cancel(),groupRotationDragging:()=>o?.dragging(),primitivePlacement:(u,M,S)=>n?.placement(u,M,S),previewWall:(u,M)=>n?.previewWall(u,M),setPrimitiveMode:u=>n?.setMode(u),cancelPrimitive:()=>n?.cancel(),primitiveDragging:()=>n?.dragging(),cameraPose(){let u=h.getWorldDirection(new T);return{x:h.position.x,y:h.position.z,z:h.position.y,yaw:Math.atan2(-u.x,-u.z),pitch:Math.asin(Math.max(-1,Math.min(1,u.y))),fov:h.fov,roll:new un().setFromQuaternion(h.quaternion,"YXZ").z}},setAuthoringMode:Ni,cancelAuthoring:()=>Dt(!0),cancelEdit:Dn,getOrbitViewState(){return Bt&&Cs?JSON.parse(JSON.stringify(Cs)):Jl()},applyFloorState:J,selectRoom:se,selectRooms:le,selectObjects:Ne,selectFloors:Ye,setEditableFloors:Ae,activateFloor:en,chooseFloor:Wn,frameSelection:et,setWalk:If,isWalkTransitioning:Pf,fit:Qe,dispose:Qh,showAll:Ut,isolate:Tt,hoverFloor:He,adjacentFloor:hi,getViewState:Jl,getZoom:Le,restoreViewState:jl,syncActiveFloor:Ro,zoomBy(u){if(!Number.isFinite(u)||u<=0)return;let M=h.position.clone().sub(f.target),S=On.clamp(M.length()*u,f.minDistance,f.maxDistance);nt(f.target.clone().add(M.normalize().multiplyScalar(S)),f.target,!1)},setGrid(u){Ve=!!u,_e.visible=Ve},getFocusedFloor(){return Ie},setFloor(u,M){if(t.onFloorVisibility)return t.onFloorVisibility({id:u,visible:M});let S=d.get(u);if(S){if(Pe(),S.visible=!!M,Ie===u&&!M&&(Ie=P()[0]||null),!Ie&&M&&(Ie=u),!M&&Et?.floor===u){let H=Et.isFloor?kt:null;se(null,null),H&&(kt=H)}!M&&kt?.objects&&Ne(kt.objects.filter(H=>H.floor!==u)),He(null),ve(),De(!0),q("visibility")}},setExplode(u){let M=Math.max(0,Math.min(12,Number(u)||0));if(M===ae)return;let S=I(Je);ae=M,He(null),ve(),Ie?dt(Ie,!!re):(Pe(),Xe+=I(Je)-S),De(!0)},setSlabs(u){je=!!u,ve(),De(!0)},setCeilings(u){Re=!!u,ve(),De(!0)},setWalls(u){fe=!!u,ve(),De(!0)},setCutaway(u){j=!!u,ve(),De(!0)},setCutHeight(u){let M=Number(u);Number.isFinite(M)&&(ce=Math.max(.4,Math.min(2.4,M)),ve(),De(!0))},setLabels(u){Ue=!!u,ve(),De(!0)},setXray(u){We=!!u,ve(),De(!0)},png(){return De(!0),a.render(l,h),new Promise((u,M)=>a.domElement.toBlob(S=>S?u(S):M(Error("Could not create this image.")),"image/png"))}}}catch(l){try{c()}catch{}throw l}}window.Building3D={mount:jy,version:"180"};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
