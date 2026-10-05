(()=>{var Tn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iu=0,Fc=1,Du=2;var Oc=1,Lu=2,mi=3,wi=0,An=1,ln=2,Pi=0,rs=1,Bc=2,zc=3,Hc=4,Nu=5,Vi=100,Uu=101,Fu=102,Ou=103,Bu=104,zu=200,Hu=201,ku=202,Vu=203,aa=204,la=205,Gu=206,Wu=207,Xu=208,Yu=209,qu=210,Zu=211,Ku=212,Ju=213,$u=214,Va=0,Ga=1,Wa=2,os=3,Xa=4,Ya=5,qa=6,Za=7,kc=0,ju=1,Qu=2,Ii=0,td=1,ed=2,nd=3,id=4,sd=5,rd=6,od=7;var Vc=300,ps=301,ms=302,Ka=303,Ja=304,fo=306,ca=1e3,ki=1001,ha=1002,Cn=1003,ad=1004;var po=1005;var ti=1006,$a=1007;var Zi=1008;var si=1009,Gc=1010,Wc=1011,cr=1012,ja=1013,Ki=1014,ri=1015,hr=1016,Qa=1017,tl=1018,ur=1020,Xc=35902,Yc=35899,qc=1021,Zc=1022,Wn=1023,Zs=1026,dr=1027,el=1028,nl=1029,Kc=1030,il=1031;var sl=1033,mo=33776,go=33777,_o=33778,xo=33779,rl=35840,ol=35841,al=35842,ll=35843,cl=36196,hl=37492,ul=37496,dl=37808,fl=37809,pl=37810,ml=37811,gl=37812,_l=37813,xl=37814,yl=37815,vl=37816,Ml=37817,El=37818,Sl=37819,bl=37820,wl=37821,Tl=36492,Al=36494,Rl=36495,Cl=36283,Pl=36284,Il=36285,Dl=36286;var Nr=2300,ua=2301,oa=2302,bc=2400,wc=2401,Tc=2402;var ld=3200,cd=3201;var Jc=0,hd=1,Di="",on="srgb",as="srgb-linear",Ur="linear",Ue="srgb";var ss=7680;var Ac=519,ud=512,dd=513,fd=514,$c=515,pd=516,md=517,gd=518,_d=519,da=35044;var jc="300 es",Qn=2e3,Fr=2001;var ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$h=1234567,Ys=Math.PI/180,ls=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function Qc(i,t){return(i%t+t)%t}function Tf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Af(i,t,e){return i!==t?(e-i)/(t-i):0}function Ir(i,t,e){return(1-e)*i+e*t}function Rf(i,t,e,n){return Ir(i,t,1-Math.exp(-e*n))}function Cf(i,t=1){return t-Math.abs(Qc(i,t*2)-t)}function Pf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function If(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Df(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Lf(i,t){return i+Math.random()*(t-i)}function Nf(i){return i*(.5-Math.random())}function Uf(i){i!==void 0&&($h=i);let t=$h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ff(i){return i*Ys}function Of(i){return i*ls}function Bf(i){return(i&i-1)===0&&i!==0}function zf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var oi={DEG2RAD:Ys,RAD2DEG:ls,generateUUID:hi,clamp:xe,euclideanModulo:Qc,mapLinear:Tf,inverseLerp:Af,lerp:Ir,damp:Rf,pingpong:Cf,smoothstep:Pf,smootherstep:If,randInt:Df,randFloat:Lf,randFloatSpread:Nf,seededRandom:Uf,degToRad:Ff,radToDeg:Of,isPowerOfTwo:Bf,ceilPowerOfTwo:zf,floorPowerOfTwo:Hf,setQuaternionFromProperEuler:kf,normalize:Ne,denormalize:jn},vt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Oe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==d||c!==p||h!==g){let _=1-a,m=l*d+c*p+h*g+f*x,C=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){let D=Math.sqrt(S),A=Math.atan2(D,m*C);_=Math.sin(_*A)/D,a=Math.sin(a*A)/D}let v=a*C;if(l=l*_+d*v,c=c*_+p*v,h=h*_+g*v,f=f*_+x*v,_===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=D,c*=D,h*=D,f*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*p-c*d,t[e+1]=l*g+h*d+c*f-a*p,t[e+2]=c*g+h*p+a*d-l*f,t[e+3]=h*g-a*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jl.copy(this).projectOnVector(t),this.sub(Jl)}reflect(t){return this.sub(Jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jl=new R,jh=new Oe,pe=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],x=s[0],_=s[3],m=s[6],C=s[1],S=s[4],v=s[7],D=s[2],A=s[5],N=s[8];return r[0]=o*x+a*C+l*D,r[3]=o*_+a*S+l*A,r[6]=o*m+a*v+l*N,r[1]=c*x+h*C+f*D,r[4]=c*_+h*S+f*A,r[7]=c*m+h*v+f*N,r[2]=d*x+p*C+g*D,r[5]=d*_+p*S+g*A,r[8]=d*m+p*v+g*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*f+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($l.makeScale(t,e)),this}rotate(t){return this.premultiply($l.makeRotation(-t)),this}translate(t,e){return this.premultiply($l.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$l=new pe;function th(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xd(){let i=Or("canvas");return i.style.display="block",i}var Qh={};function Ks(i){i in Qh||(Qh[i]=!0,console.warn(i))}function yd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var tu=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vf(){let i={enabled:!0,workingColorSpace:as,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ue&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ue&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[as]:{primaries:t,whitePoint:n,transfer:Ur,toXYZ:tu,fromXYZ:eu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:Ue,toXYZ:tu,fromXYZ:eu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}var Re=Vf();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cs,fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cs===void 0&&(Cs=Or("canvas")),Cs.width=t.width,Cs.height=t.height;let s=Cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gf=0,Js=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jl(s[o].image)):r.push(jl(s[o]))}else r=jl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wf=0,Ql=new R,wn=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ki,s=ki,r=ti,o=Zi,a=Wn,l=si,c=i.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=hi(),this.name="",this.source=new Js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ca:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ca:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Vc;wn.DEFAULT_ANISOTROPY=1;var qe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],x=l[2],_=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(p+1)/2,D=(m+1)/2,A=(h+d)/4,N=(f+x)/4,O=(g+_)/4;return S>v&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=N/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=O/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=N/r,s=O/r),this.set(n,s,r,e),this}let C=Math.sqrt((_-g)*(_-g)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(_-g)/C,this.y=(f-x)/C,this.z=(d-h)/C,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pa=class extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new wn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Js(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends pa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Br=class extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ma=class extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(t.matrixWorld),this.union(Po)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),Io.subVectors(this.max,vr),Ps.subVectors(t.a,vr),Is.subVectors(t.b,vr),Ds.subVectors(t.c,vr),Ui.subVectors(Is,Ps),Fi.subVectors(Ds,Is),ts.subVectors(Ps,Ds);let e=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ts.z,ts.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ts.z,0,-ts.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ts.y,ts.x,0];return!tc(e,Ps,Is,Ds,Io)||(e=[1,0,0,0,1,0,0,0,1],!tc(e,Ps,Is,Ds,Io))?!1:(Do.crossVectors(Ui,Fi),e=[Do.x,Do.y,Do.z],tc(e,Ps,Is,Ds,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yi=[new R,new R,new R,new R,new R,new R,new R,new R],Kn=new R,Po=new un,Ps=new R,Is=new R,Ds=new R,Ui=new R,Fi=new R,ts=new R,vr=new R,Io=new R,Do=new R,es=new R;function tc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){es.fromArray(i,r);let a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),h=n.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Xf=new un,Mr=new R,ec=new R,Ti=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);let e=Mr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(ec)),this.expandByPoint(Mr.copy(t.center).sub(ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vi=new R,nc=new R,Lo=new R,Oi=new R,ic=new R,No=new R,sc=new R,Gi=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nc.copy(t).add(e).multiplyScalar(.5),Lo.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(nc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Lo),a=Oi.dot(this.direction),l=-Oi.dot(Lo),c=Oi.lengthSq(),h=Math.abs(1-o*o),f,d,p,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let x=1/h;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(nc).addScaledVector(Lo,d),p}intersectSphere(t,e){vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,r){ic.subVectors(e,t),No.subVectors(n,t),sc.crossVectors(ic,No);let o=this.direction.dot(sc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,t);let l=a*this.direction.dot(No.crossVectors(Oi,No));if(l<0)return null;let c=a*this.direction.dot(ic.cross(Oi));if(c<0||l+c>o)return null;let h=-a*Oi.dot(sc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class i{constructor(t,e,n,s,r,o,a,l,c,h,f,d,p,g,x,_){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,d,p,g,x,_)}set(t,e,n,s,r,o,a,l,c,h,f,d,p,g,x,_){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=p,m[7]=g,m[11]=x,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*f,g=c*h,x=c*f;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*f,g=c*h,x=c*f;e[0]=d-x*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*f,e[8]=g*f+p,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*f+g,e[10]=d-x*f}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+x,e[5]=o*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*h,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yf,t,qf)}lookAt(t,e,n){let s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Bi.crossVectors(n,Nn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Bi.crossVectors(n,Nn)),Bi.normalize(),Uo.crossVectors(Nn,Bi),s[0]=Bi.x,s[4]=Uo.x,s[8]=Nn.x,s[1]=Bi.y,s[5]=Uo.y,s[9]=Nn.y,s[2]=Bi.z,s[6]=Uo.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],x=n[6],_=n[10],m=n[14],C=n[3],S=n[7],v=n[11],D=n[15],A=s[0],N=s[4],O=s[8],w=s[12],b=s[1],U=s[5],J=s[9],Q=s[13],tt=s[2],B=s[6],G=s[10],k=s[14],z=s[3],ft=s[7],xt=s[11],Nt=s[15];return r[0]=o*A+a*b+l*tt+c*z,r[4]=o*N+a*U+l*B+c*ft,r[8]=o*O+a*J+l*G+c*xt,r[12]=o*w+a*Q+l*k+c*Nt,r[1]=h*A+f*b+d*tt+p*z,r[5]=h*N+f*U+d*B+p*ft,r[9]=h*O+f*J+d*G+p*xt,r[13]=h*w+f*Q+d*k+p*Nt,r[2]=g*A+x*b+_*tt+m*z,r[6]=g*N+x*U+_*B+m*ft,r[10]=g*O+x*J+_*G+m*xt,r[14]=g*w+x*Q+_*k+m*Nt,r[3]=C*A+S*b+v*tt+D*z,r[7]=C*N+S*U+v*B+D*ft,r[11]=C*O+S*J+v*G+D*xt,r[15]=C*w+S*Q+v*k+D*Nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],p=t[14],g=t[3],x=t[7],_=t[11],m=t[15];return g*(+r*l*f-s*c*f-r*a*d+n*c*d+s*a*p-n*l*p)+x*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+_*(+e*c*f-e*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+m*(-s*a*h-e*l*f+e*a*d+s*o*f-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],p=t[11],g=t[12],x=t[13],_=t[14],m=t[15],C=f*_*c-x*d*c+x*l*p-a*_*p-f*l*m+a*d*m,S=g*d*c-h*_*c-g*l*p+o*_*p+h*l*m-o*d*m,v=h*x*c-g*f*c+g*a*p-o*x*p-h*a*m+o*f*m,D=g*f*l-h*x*l-g*a*d+o*x*d+h*a*_-o*f*_,A=e*C+n*S+s*v+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/A;return t[0]=C*N,t[1]=(x*d*r-f*_*r-x*s*p+n*_*p+f*s*m-n*d*m)*N,t[2]=(a*_*r-x*l*r+x*s*c-n*_*c-a*s*m+n*l*m)*N,t[3]=(f*l*r-a*d*r-f*s*c+n*d*c+a*s*p-n*l*p)*N,t[4]=S*N,t[5]=(h*_*r-g*d*r+g*s*p-e*_*p-h*s*m+e*d*m)*N,t[6]=(g*l*r-o*_*r-g*s*c+e*_*c+o*s*m-e*l*m)*N,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*N,t[8]=v*N,t[9]=(g*f*r-h*x*r-g*n*p+e*x*p+h*n*m-e*f*m)*N,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*m+e*a*m)*N,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*p-e*a*p)*N,t[12]=D*N,t[13]=(h*x*s-g*f*s+g*n*d-e*x*d-h*n*_+e*f*_)*N,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*_-e*a*_)*N,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*d+e*a*d)*N,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,d=r*c,p=r*h,g=r*f,x=o*h,_=o*f,m=a*f,C=l*c,S=l*h,v=l*f,D=n.x,A=n.y,N=n.z;return s[0]=(1-(x+m))*D,s[1]=(p+v)*D,s[2]=(g-S)*D,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(d+m))*A,s[6]=(_+C)*A,s[7]=0,s[8]=(g+S)*N,s[9]=(_-C)*N,s[10]=(1-(d+x))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ls.set(s[0],s[1],s[2]).length(),o=Ls.set(s[4],s[5],s[6]).length(),a=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);let c=1/r,h=1/o,f=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,e.setFromRotationMatrix(Jn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Qn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Fr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Qn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Fr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ls=new R,Jn=new Ce,Yf=new R(0,0,0),qf=new R(1,1,1),Bi=new R,Uo=new R,Nn=new R,nu=new Ce,iu=new Oe,dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return iu.setFromEuler(this),this.setFromQuaternion(iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zf=0,su=new R,Ns=new Oe,Mi=new Ce,Fo=new R,Er=new R,Kf=new R,Jf=new Oe,ru=new R(1,0,0),ou=new R(0,1,0),au=new R(0,0,1),lu={type:"added"},$f={type:"removed"},Us={type:"childadded",child:null},rc={type:"childremoved",child:null},Le=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new dn,n=new Oe,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new pe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(ru,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(au,t)}translateOnAxis(t,e){return su.copy(t).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ru,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fo.copy(t):Fo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Er,Fo,this.up):Mi.lookAt(Fo,Er,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lu),Us.child=t,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($f),rc.child=t,this.dispatchEvent(rc),rc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lu),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Le.DEFAULT_UP=new R(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new R,Ei=new R,oc=new R,Si=new R,Fs=new R,Os=new R,cu=new R,ac=new R,lc=new R,cc=new R,hc=new qe,uc=new qe,dc=new qe,li=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),Ei.subVectors(n,e),oc.subVectors(t,e);let o=$n.dot($n),a=$n.dot(Ei),l=$n.dot(oc),c=Ei.dot(Ei),h=Ei.dot(oc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return hc.setScalar(0),uc.setScalar(0),dc.setScalar(0),hc.fromBufferAttribute(t,e),uc.fromBufferAttribute(t,n),dc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(hc,r.x),o.addScaledVector(uc,r.y),o.addScaledVector(dc,r.z),o}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),Ei.subVectors(t,e),$n.cross(Ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),$n.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Fs.subVectors(s,n),Os.subVectors(r,n),ac.subVectors(t,n);let l=Fs.dot(ac),c=Os.dot(ac);if(l<=0&&c<=0)return e.copy(n);lc.subVectors(t,s);let h=Fs.dot(lc),f=Os.dot(lc);if(h>=0&&f<=h)return e.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Fs,o);cc.subVectors(t,r);let p=Fs.dot(cc),g=Os.dot(cc);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Os,a);let _=h*g-p*f;if(_<=0&&f-h>=0&&p-g>=0)return cu.subVectors(r,s),a=(f-h)/(f-h+(p-g)),e.copy(s).addScaledVector(cu,a);let m=1/(_+x+d);return o=x*m,a=d*m,e.copy(n).addScaledVector(Fs,o).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function fc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Me=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Re.workingColorSpace){return this.r=t,this.g=e,this.b=n,Re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Re.workingColorSpace){if(t=Qc(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fc(o,r,t+1/3),this.g=fc(o,r,t),this.b=fc(o,r,t-1/3)}return Re.colorSpaceToWorking(this,s),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Re.workingToColorSpace(gn.copy(this),t),Math.round(xe(gn.r*255,0,255))*65536+Math.round(xe(gn.g*255,0,255))*256+Math.round(xe(gn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.workingToColorSpace(gn.copy(this),e);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Re.workingColorSpace){return Re.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=on){Re.workingToColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,s=gn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(Oo);let n=Ir(zi.h,Oo.h,e),s=Ir(zi.s,Oo.s,e),r=Ir(zi.l,Oo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Me;Me.NAMES=vd;var jf=0,fi=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=rs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},an=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Je=new R,Bo=new vt,Qf=0,je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=da,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==da&&(t.usage=this.usage),t}};var zr=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hr=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},tp=0,Vn=new Ce,pc=new Le,Bs=new R,Un=new un,Sr=new un,rn=new R,Ee=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(th(t)?Hr:zr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return pc.lookAt(t),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Un.min,Sr.min),Un.expandByPoint(rn),rn.addVectors(Un.max,Sr.max),Un.expandByPoint(rn)):(Un.expandByPoint(Sr.min),Un.expandByPoint(Sr.max))}Un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)rn.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(t,c),rn.add(Bs)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new R,l[O]=new R;let c=new R,h=new R,f=new R,d=new vt,p=new vt,g=new vt,x=new R,_=new R;function m(O,w,b){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,b),d.fromBufferAttribute(r,O),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(c),f.sub(c),p.sub(d),g.sub(d);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(U),_.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),a[O].add(x),a[w].add(x),a[b].add(x),l[O].add(_),l[w].add(_),l[b].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let O=0,w=C.length;O<w;++O){let b=C[O],U=b.start,J=b.count;for(let Q=U,tt=U+J;Q<tt;Q+=3)m(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let S=new R,v=new R,D=new R,A=new R;function N(O){D.fromBufferAttribute(s,O),A.copy(D);let w=a[O];S.copy(w),S.sub(D.multiplyScalar(D.dot(w))).normalize(),v.crossVectors(A,w);let U=v.dot(l[O])<0?-1:1;o.setXYZW(O,S.x,S.y,S.z,U)}for(let O=0,w=C.length;O<w;++O){let b=C[O],U=b.start,J=b.count;for(let Q=U,tt=U+J;Q<tt;Q+=3)N(t.getX(Q+0)),N(t.getX(Q+1)),N(t.getX(Q+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,f=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,_),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,_=l.length;x<_;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new je(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hu=new Ce,ns=new Gi,zo=new Ti,uu=new R,Ho=new R,ko=new R,Vo=new R,mc=new R,Go=new R,du=new R,Wo=new R,At=class extends Le{constructor(t=new Ee,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(mc.fromBufferAttribute(f,t),o?Go.addScaledVector(mc,h):Go.addScaledVector(mc.sub(e),h))}e.add(Go)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(zo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(zo,uu)===null||ns.origin.distanceToSquared(uu)>(t.far-t.near)**2))&&(hu.copy(r).invert(),ns.copy(t.ray).applyMatrix4(hu),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let _=d[g],m=o[_.materialIndex],C=Math.max(_.start,p.start),S=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let v=C,D=S;v<D;v+=3){let A=a.getX(v),N=a.getX(v+1),O=a.getX(v+2);s=Xo(this,m,t,n,c,h,f,A,N,O),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let _=g,m=x;_<m;_+=3){let C=a.getX(_),S=a.getX(_+1),v=a.getX(_+2);s=Xo(this,o,t,n,c,h,f,C,S,v),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let _=d[g],m=o[_.materialIndex],C=Math.max(_.start,p.start),S=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let v=C,D=S;v<D;v+=3){let A=v,N=v+1,O=v+2;s=Xo(this,m,t,n,c,h,f,A,N,O),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let _=g,m=x;_<m;_+=3){let C=_,S=_+1,v=_+2;s=Xo(this,o,t,n,c,h,f,C,S,v),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function ep(i,t,e,n,s,r,o,a){let l;if(t.side===An?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===wi,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Wo);return c<e.near||c>e.far?null:{distance:c,point:Wo.clone(),object:i}}function Xo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ho),i.getVertexPosition(l,ko),i.getVertexPosition(c,Vo);let h=ep(i,t,e,n,Ho,ko,Vo,du);if(h){let f=new R;li.getBarycoord(du,Ho,ko,Vo,f),s&&(h.uv=li.getInterpolatedAttribute(s,a,l,c,f,new vt)),r&&(h.uv1=li.getInterpolatedAttribute(r,a,l,c,f,new vt)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};li.getNormal(Ho,ko,Vo,d.normal),h.face=d,h.barycoord=f}return h}var Pe=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(f,2));function g(x,_,m,C,S,v,D,A,N,O,w){let b=v/N,U=D/O,J=v/2,Q=D/2,tt=A/2,B=N+1,G=O+1,k=0,z=0,ft=new R;for(let xt=0;xt<G;xt++){let Nt=xt*U-Q;for(let qt=0;qt<B;qt++){let jt=qt*b-J;ft[x]=jt*C,ft[_]=Nt*S,ft[m]=tt,c.push(ft.x,ft.y,ft.z),ft[x]=0,ft[_]=0,ft[m]=A>0?1:-1,h.push(ft.x,ft.y,ft.z),f.push(qt/N),f.push(1-xt/O),k+=1}}for(let xt=0;xt<O;xt++)for(let Nt=0;Nt<N;Nt++){let qt=d+Nt+B*xt,jt=d+Nt+B*(xt+1),ue=d+(Nt+1)+B*(xt+1),se=d+(Nt+1)+B*xt;l.push(qt,jt,se),l.push(jt,ue,se),z+=6}a.addGroup(p,z,w),p+=z,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=gs(i[e]);for(let s in n)t[s]=n[s]}return t}function np(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function eh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}var Md={clone:gs,merge:xn},ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=np(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},kr=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new R,fu=new vt,pu=new vt,hn=class extends kr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,fu,pu),e.subVectors(pu,fu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},zs=-90,Hs=1,ga=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(zs,Hs,t,e);s.layers=this.layers,this.add(s);let r=new hn(zs,Hs,t,e);r.layers=this.layers,this.add(r);let o=new hn(zs,Hs,t,e);o.layers=this.layers,this.add(o);let a=new hn(zs,Hs,t,e);a.layers=this.layers,this.add(a);let l=new hn(zs,Hs,t,e);l.layers=this.layers,this.add(l);let c=new hn(zs,Hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Vr=class extends wn{constructor(t=[],e=ps,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_a=class extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Pi});r.uniforms.tEquirect.value=e;let o=new At(s,r),a=e.minFilter;return e.minFilter===Zi&&(e.minFilter=ti),new ga(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},_n=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},rp={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let _=e.getJointPose(x,n),m=this._getHandJoint(c,x);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Gr=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=da,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new R,Wr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qs=class extends fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ks,br=new R,Vs=new R,Gs=new R,Ws=new vt,wr=new vt,Ed=new Ce,Yo=new R,Tr=new R,qo=new R,mu=new vt,gc=new vt,gu=new vt,Xr=class extends Le{constructor(t=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xa(e,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new Wr(n,3,0,!1)),ks.setAttribute("uv",new Wr(n,2,3,!1))}this.geometry=ks,this.material=t,this.center=new vt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),Ed.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Gs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Zo(Yo.set(-.5,-.5,0),Gs,o,Vs,s,r),Zo(Tr.set(.5,-.5,0),Gs,o,Vs,s,r),Zo(qo.set(.5,.5,0),Gs,o,Vs,s,r),mu.set(0,0),gc.set(1,0),gu.set(1,1);let a=t.ray.intersectTriangle(Yo,Tr,qo,!1,br);if(a===null&&(Zo(Tr.set(-.5,.5,0),Gs,o,Vs,s,r),gc.set(0,1),a=t.ray.intersectTriangle(Yo,qo,Tr,!1,br),a===null))return;let l=t.ray.origin.distanceTo(br);l<t.near||l>t.far||e.push({distance:l,point:br.clone(),uv:li.getInterpolation(br,Yo,Tr,qo,mu,gc,gu,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Zo(i,t,e,n,s,r){Ws.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(wr.x=r*Ws.x-s*Ws.y,wr.y=s*Ws.x+r*Ws.y):wr.copy(Ws),i.copy(t),i.x+=wr.x,i.y+=wr.y,i.applyMatrix4(Ed)}var ya=class extends wn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Cn,h=Cn,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yr=class extends je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Xs=new Ce,_u=new Ce,Ko=[],xu=new un,op=new Ce,Ar=new At,Rr=new Ti,tr=class extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,op)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),xu.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Rr.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),_u.multiplyMatrices(n,Xs),Ar.matrixWorld=_u,Ar.raycast(t,Ko);for(let o=0,a=Ko.length;o<a;o++){let l=Ko[o];l.instanceId=r,l.object=this,e.push(l)}Ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ya(new Float32Array(s*this.count),s,this.count,el,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_c=new R,ap=new R,lp=new pe,$e=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_c.subVectors(n,e).cross(ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_c),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lp.getNormalMatrix(t),s=this.coplanarPoint(_c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new Ti,cp=new vt(.5,.5),Jo=new R,er=class{constructor(t=new $e,e=new $e,n=new $e,s=new $e,r=new $e,o=new $e){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],p=r[7],g=r[8],x=r[9],_=r[10],m=r[11],C=r[12],S=r[13],v=r[14],D=r[15];if(s[0].setComponents(c-o,p-h,m-g,D-C).normalize(),s[1].setComponents(c+o,p+h,m+g,D+C).normalize(),s[2].setComponents(c+a,p+f,m+x,D+S).normalize(),s[3].setComponents(c-a,p-f,m-x,D-S).normalize(),n)s[4].setComponents(l,d,_,v).normalize(),s[5].setComponents(c-l,p-d,m-_,D-v).normalize();else if(s[4].setComponents(c-l,p-d,m-_,D-v).normalize(),e===Qn)s[5].setComponents(c+l,p+d,m+_,D+v).normalize();else if(e===Fr)s[5].setComponents(l,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);let e=cp.distanceTo(t.center);return is.radius=.7071067811865476+e,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Jo.x=s.normal.x>0?t.max.x:t.min.x,Jo.y=s.normal.y>0?t.max.y:t.min.y,Jo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pn=class extends fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},va=new R,Ma=new R,yu=new Ce,Cr=new Gi,$o=new Ti,xc=new R,vu=new R,Ze=class extends Le{constructor(t=new Ee,e=new Pn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)va.fromBufferAttribute(e,s-1),Ma.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=va.distanceTo(Ma);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,t.ray.intersectsSphere($o)===!1)return;yu.copy(s).invert(),Cr.copy(t.ray).applyMatrix4(yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,_=g-1;x<_;x+=c){let m=h.getX(x),C=h.getX(x+1),S=jo(this,t,Cr,l,m,C,x);S&&e.push(S)}if(this.isLineLoop){let x=h.getX(g-1),_=h.getX(p),m=jo(this,t,Cr,l,x,_,g-1);m&&e.push(m)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,_=g-1;x<_;x+=c){let m=jo(this,t,Cr,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=jo(this,t,Cr,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(va.fromBufferAttribute(a,s),Ma.fromBufferAttribute(a,r),e.distanceSqToSegment(va,Ma,xc,vu)>n)return;xc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(xc);if(!(c<t.near||c>t.far))return{distance:c,point:vu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Mu=new R,Eu=new R,Ai=class extends Ze{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Mu.fromBufferAttribute(e,s),Eu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Mu.distanceTo(Eu);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Wi=class extends Ze{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var cs=class extends wn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qr=class extends wn{constructor(t,e,n=Ki,s,r,o,a=Cn,l=Cn,c,h=Zs,f=1){if(h!==Zs&&h!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Js(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Zr=class extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Kr=class i extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let p=n+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ke=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],g=0,x=[],_=n/2,m=0;C(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(p,2));function C(){let v=new R,D=new R,A=0,N=(e-t)/n;for(let O=0;O<=r;O++){let w=[],b=O/r,U=b*(e-t)+t;for(let J=0;J<=s;J++){let Q=J/s,tt=Q*l+a,B=Math.sin(tt),G=Math.cos(tt);D.x=U*B,D.y=-b*n+_,D.z=U*G,f.push(D.x,D.y,D.z),v.set(B,N,G).normalize(),d.push(v.x,v.y,v.z),p.push(Q,1-b),w.push(g++)}x.push(w)}for(let O=0;O<s;O++)for(let w=0;w<r;w++){let b=x[w][O],U=x[w+1][O],J=x[w+1][O+1],Q=x[w][O+1];(t>0||w!==0)&&(h.push(b,U,Q),A+=3),(e>0||w!==r-1)&&(h.push(U,J,Q),A+=3)}c.addGroup(m,A,0),m+=A}function S(v){let D=g,A=new vt,N=new R,O=0,w=v===!0?t:e,b=v===!0?1:-1;for(let J=1;J<=s;J++)f.push(0,_*b,0),d.push(0,b,0),p.push(.5,.5),g++;let U=g;for(let J=0;J<=s;J++){let tt=J/s*l+a,B=Math.cos(tt),G=Math.sin(tt);N.x=w*G,N.y=_*b,N.z=w*B,f.push(N.x,N.y,N.z),d.push(0,b,0),A.x=B*.5+.5,A.y=G*.5*b+.5,p.push(A.x,A.y),g++}for(let J=0;J<s;J++){let Q=D+J,tt=U+J;v===!0?h.push(tt,tt+1,Q):h.push(tt+1,tt,Q),O+=3}c.addGroup(m,O,v===!0?1:2),m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nr=class i extends Ke{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ea=class i extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(C){let S=new R,v=new R,D=new R;for(let A=0;A<e.length;A+=3)p(e[A+0],S),p(e[A+1],v),p(e[A+2],D),l(S,v,D,C)}function l(C,S,v,D){let A=D+1,N=[];for(let O=0;O<=A;O++){N[O]=[];let w=C.clone().lerp(v,O/A),b=S.clone().lerp(v,O/A),U=A-O;for(let J=0;J<=U;J++)J===0&&O===A?N[O][J]=w:N[O][J]=w.clone().lerp(b,J/U)}for(let O=0;O<A;O++)for(let w=0;w<2*(A-O)-1;w++){let b=Math.floor(w/2);w%2===0?(d(N[O][b+1]),d(N[O+1][b]),d(N[O][b])):(d(N[O][b+1]),d(N[O+1][b+1]),d(N[O+1][b]))}}function c(C){let S=new R;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(C),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let C=new R;for(let S=0;S<r.length;S+=3){C.x=r[S+0],C.y=r[S+1],C.z=r[S+2];let v=_(C)/2/Math.PI+.5,D=m(C)/Math.PI+.5;o.push(v,1-D)}g(),f()}function f(){for(let C=0;C<o.length;C+=6){let S=o[C+0],v=o[C+2],D=o[C+4],A=Math.max(S,v,D),N=Math.min(S,v,D);A>.9&&N<.1&&(S<.2&&(o[C+0]+=1),v<.2&&(o[C+2]+=1),D<.2&&(o[C+4]+=1))}}function d(C){r.push(C.x,C.y,C.z)}function p(C,S){let v=C*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function g(){let C=new R,S=new R,v=new R,D=new R,A=new vt,N=new vt,O=new vt;for(let w=0,b=0;w<r.length;w+=9,b+=6){C.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),A.set(o[b+0],o[b+1]),N.set(o[b+2],o[b+3]),O.set(o[b+4],o[b+5]),D.copy(C).add(S).add(v).divideScalar(3);let U=_(D);x(A,b+0,C,U),x(N,b+2,S,U),x(O,b+4,v,U)}}function x(C,S,v,D){D<0&&C.x===1&&(o[S]=C.x-1),v.x===0&&v.z===0&&(o[S]=D/2/Math.PI+.5)}function _(C){return Math.atan2(C.z,-C.x)}function m(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Qo=new R,ta=new R,yc=new R,ea=new li,Jr=class extends Ee{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Ys*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:_,c:m}=ea;if(x.fromBufferAttribute(a,c[0]),_.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),ea.getNormal(yc),f[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,f[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let C=0;C<3;C++){let S=(C+1)%3,v=f[C],D=f[S],A=ea[h[C]],N=ea[h[S]],O=`${v}_${D}`,w=`${D}_${v}`;w in d&&d[w]?(yc.dot(d[w].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(N.x,N.y,N.z)),d[w]=null):O in d||(d[O]={index0:c[C],index1:c[S],normal:yc.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:_}=d[g];Qo.fromBufferAttribute(a,x),ta.fromBufferAttribute(a,_),p.push(Qo.x,Qo.y,Qo.z),p.push(ta.x,ta.y,ta.z)}this.setAttribute("position",new ge(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new vt:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,s=[],r=[],o=[],a=new R,l=new Ce;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(xe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(xe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ir=class extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Sa=class extends ir{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var na=new R,vc=new nh,Mc=new nh,Ec=new nh,ba=class extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(na.subVectors(s[0],s[1]).add(s[0]),c=na);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(na.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=na),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),_<1e-4&&(_=x),vc.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,x,_),Mc.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,x,_),Ec.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,x,_)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Mc.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Ec.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(vc.calc(l),Mc.calc(l),Ec.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Su(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function hp(i,t){let e=1-i;return e*e*t}function up(i,t){return 2*(1-i)*i*t}function dp(i,t){return i*i*t}function Dr(i,t,e,n){return hp(i,t)+up(i,e)+dp(i,n)}function fp(i,t){let e=1-i;return e*e*e*t}function pp(i,t){let e=1-i;return 3*e*e*i*t}function mp(i,t){return 3*(1-i)*i*i*t}function gp(i,t){return i*i*i*t}function Lr(i,t,e,n,s){return fp(i,t)+pp(i,e)+mp(i,n)+gp(i,s)}var $r=class extends Fn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(t,s.x,r.x,o.x,a.x),Lr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wa=class extends Fn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(t,s.x,r.x,o.x,a.x),Lr(t,s.y,r.y,o.y,a.y),Lr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jr=class extends Fn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends Fn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends Fn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Dr(t,s.x,r.x,o.x),Dr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends Fn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Dr(t,s.x,r.x,o.x),Dr(t,s.y,r.y,o.y),Dr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Su(a,l.x,c.x,h.x,f.x),Su(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},Rc=Object.freeze({__proto__:null,ArcCurve:Sa,CatmullRomCurve3:ba,CubicBezierCurve:$r,CubicBezierCurve3:wa,EllipseCurve:ir,LineCurve:jr,LineCurve3:Ta,QuadraticBezierCurve:Qr,QuadraticBezierCurve3:Aa,SplineCurve:to}),Ra=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Rc[s.type]().fromJSON(s))}return this}},Xi=class extends Ra{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new jr(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Qr(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new $r(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new to(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new ir(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ri=class extends Xi{constructor(t){super(t),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xi().fromJSON(s))}return this}};function _p(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Sd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ep(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,f=-1/0;for(let d=e;d<s;d+=e){let p=i[d],g=i[d+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>f&&(f=g)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return eo(r,o,e,a,l,c,0),o}function Sd(i,t,e,n,s){let r;if(s===Lp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=bu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=bu(o/n|0,i[o],i[o+1],r);return r&&sr(r,r.next)&&(io(r),r=r.next),r}function hs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(sr(e,e.next)||Ye(e.prev,e,e.next)===0)){if(io(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function eo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Ap(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?yp(i,n,s,r):xp(i)){t.push(l.i,i.i,c.i),io(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=vp(hs(i),t),eo(i,t,e,n,s,r,2)):o===2&&Mp(i,t,e,n,s,r):eo(hs(i),t,e,n,s,r,1);break}}}function xp(i){let t=i.prev,e=i,n=i.next;if(Ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),d=Math.max(s,r,o),p=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=p&&Pr(s,a,r,l,o,c,g.x,g.y)&&Ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ye(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,d=o.y,p=Math.min(a,l,c),g=Math.min(h,f,d),x=Math.max(a,l,c),_=Math.max(h,f,d),m=Cc(p,g,t,e,n),C=Cc(x,_,t,e,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=m&&v&&v.z<=C;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=_&&S!==s&&S!==o&&Pr(a,h,l,f,c,d,S.x,S.y)&&Ye(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=_&&v!==s&&v!==o&&Pr(a,h,l,f,c,d,v.x,v.y)&&Ye(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=_&&S!==s&&S!==o&&Pr(a,h,l,f,c,d,S.x,S.y)&&Ye(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=C;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=_&&v!==s&&v!==o&&Pr(a,h,l,f,c,d,v.x,v.y)&&Ye(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function vp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!sr(n,s)&&wd(n,e,e.next,s)&&no(n,s)&&no(s,n)&&(t.push(n.i,e.i,s.i),io(e),io(e.next),e=i=s),e=e.next}while(e!==i);return hs(e)}function Mp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pp(o,a)){let l=Td(o,a);o=hs(o,o.next),l=hs(l,l.next),eo(o,t,e,n,s,r,0),eo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ep(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Sd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Cp(c))}s.sort(Sp);for(let r=0;r<s.length;r++)e=bp(s[r],e);return e}function Sp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function bp(i,t){let e=wp(i,t);if(!e)return t;let n=Td(e,i);return hs(n,n.next),hs(e,e.next)}function wp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(sr(i,e))return e;do{if(sr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&bd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);no(e,i)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Tp(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function Tp(i,t){return Ye(i.prev,i,t.prev)<0&&Ye(t.next,i,i.next)<0}function Ap(i,t,e,n){let s=i;do s.z===0&&(s.z=Cc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rp(s)}function Rp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Cc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Cp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Pr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&bd(i,t,e,n,s,r,o,a)}function Pp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ip(i,t)&&(no(i,t)&&no(t,i)&&Dp(i,t)&&(Ye(i.prev,i,t.prev)||Ye(i,t.prev,t))||sr(i,t)&&Ye(i.prev,i,i.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function sr(i,t){return i.x===t.x&&i.y===t.y}function wd(i,t,e,n){let s=sa(Ye(i,t,e)),r=sa(Ye(i,t,n)),o=sa(Ye(e,n,i)),a=sa(Ye(e,n,t));return!!(s!==r&&o!==a||s===0&&ia(i,e,t)||r===0&&ia(i,n,t)||o===0&&ia(e,i,n)||a===0&&ia(e,t,n))}function ia(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function sa(i){return i>0?1:i<0?-1:0}function Ip(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&wd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function no(i,t){return Ye(i.prev,i,i.next)<0?Ye(i,t,i.next)>=0&&Ye(i,i.prev,t)>=0:Ye(i,t,i.prev)<0||Ye(i,i.next,t)<0}function Dp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Td(i,t){let e=Pc(i.i,i.x,i.y),n=Pc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bu(i,t,e,n){let s=Pc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ic=class{static triangulate(t,e,n=2){return _p(t,e,n)}},ci=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];wu(t),Tu(n,t);let o=t.length;e.forEach(wu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Tu(n,e[l]);let a=Ic.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function wu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var rr=class i extends Ee{constructor(t=new Ri([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,C=e.UVGenerator!==void 0?e.UVGenerator:Np,S,v=!1,D,A,N,O;m&&(S=m.getSpacedPoints(h),v=!0,d=!1,D=m.computeFrenetFrames(h,!1),A=new R,N=new R,O=new R),d||(_=0,p=0,g=0,x=0);let w=a.extractPoints(c),b=w.shape,U=w.holes;if(!ci.isClockWise(b)){b=b.reverse();for(let Et=0,mt=U.length;Et<mt;Et++){let at=U[Et];ci.isClockWise(at)&&(U[Et]=at.reverse())}}function Q(Et){let at=10000000000000001e-36,ut=Et[0];for(let bt=1;bt<=Et.length;bt++){let lt=bt%Et.length,wt=Et[lt],ne=wt.x-ut.x,Ut=wt.y-ut.y,I=ne*ne+Ut*Ut,y=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(ut.x),Math.abs(ut.y)),W=at*y*y;if(I<=W){Et.splice(lt,1),bt--;continue}ut=wt}}Q(b),U.forEach(Q);let tt=U.length,B=b;for(let Et=0;Et<tt;Et++){let mt=U[Et];b=b.concat(mt)}function G(Et,mt,at){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Et.clone().addScaledVector(mt,at)}let k=b.length;function z(Et,mt,at){let ut,bt,lt,wt=Et.x-mt.x,ne=Et.y-mt.y,Ut=at.x-Et.x,I=at.y-Et.y,y=wt*wt+ne*ne,W=wt*I-ne*Ut;if(Math.abs(W)>Number.EPSILON){let j=Math.sqrt(y),pt=Math.sqrt(Ut*Ut+I*I),P=mt.x-ne/j,F=mt.y+wt/j,q=at.x-I/pt,dt=at.y+Ut/pt,_t=((q-P)*I-(dt-F)*Ut)/(wt*I-ne*Ut);ut=P+wt*_t-Et.x,bt=F+ne*_t-Et.y;let ct=ut*ut+bt*bt;if(ct<=2)return new vt(ut,bt);lt=Math.sqrt(ct/2)}else{let j=!1;wt>Number.EPSILON?Ut>Number.EPSILON&&(j=!0):wt<-Number.EPSILON?Ut<-Number.EPSILON&&(j=!0):Math.sign(ne)===Math.sign(I)&&(j=!0),j?(ut=-ne,bt=wt,lt=Math.sqrt(y)):(ut=wt,bt=ne,lt=Math.sqrt(y/2))}return new vt(ut/lt,bt/lt)}let ft=[];for(let Et=0,mt=B.length,at=mt-1,ut=Et+1;Et<mt;Et++,at++,ut++)at===mt&&(at=0),ut===mt&&(ut=0),ft[Et]=z(B[Et],B[at],B[ut]);let xt=[],Nt,qt=ft.concat();for(let Et=0,mt=tt;Et<mt;Et++){let at=U[Et];Nt=[];for(let ut=0,bt=at.length,lt=bt-1,wt=ut+1;ut<bt;ut++,lt++,wt++)lt===bt&&(lt=0),wt===bt&&(wt=0),Nt[ut]=z(at[ut],at[lt],at[wt]);xt.push(Nt),qt=qt.concat(Nt)}let jt;if(_===0)jt=ci.triangulateShape(B,U);else{let Et=[],mt=[];for(let at=0;at<_;at++){let ut=at/_,bt=p*Math.cos(ut*Math.PI/2),lt=g*Math.sin(ut*Math.PI/2)+x;for(let wt=0,ne=B.length;wt<ne;wt++){let Ut=G(B[wt],ft[wt],lt);St(Ut.x,Ut.y,-bt),ut===0&&Et.push(Ut)}for(let wt=0,ne=tt;wt<ne;wt++){let Ut=U[wt];Nt=xt[wt];let I=[];for(let y=0,W=Ut.length;y<W;y++){let j=G(Ut[y],Nt[y],lt);St(j.x,j.y,-bt),ut===0&&I.push(j)}ut===0&&mt.push(I)}}jt=ci.triangulateShape(Et,mt)}let ue=jt.length,se=g+x;for(let Et=0;Et<k;Et++){let mt=d?G(b[Et],qt[Et],se):b[Et];v?(N.copy(D.normals[0]).multiplyScalar(mt.x),A.copy(D.binormals[0]).multiplyScalar(mt.y),O.copy(S[0]).add(N).add(A),St(O.x,O.y,O.z)):St(mt.x,mt.y,0)}for(let Et=1;Et<=h;Et++)for(let mt=0;mt<k;mt++){let at=d?G(b[mt],qt[mt],se):b[mt];v?(N.copy(D.normals[Et]).multiplyScalar(at.x),A.copy(D.binormals[Et]).multiplyScalar(at.y),O.copy(S[Et]).add(N).add(A),St(O.x,O.y,O.z)):St(at.x,at.y,f/h*Et)}for(let Et=_-1;Et>=0;Et--){let mt=Et/_,at=p*Math.cos(mt*Math.PI/2),ut=g*Math.sin(mt*Math.PI/2)+x;for(let bt=0,lt=B.length;bt<lt;bt++){let wt=G(B[bt],ft[bt],ut);St(wt.x,wt.y,f+at)}for(let bt=0,lt=U.length;bt<lt;bt++){let wt=U[bt];Nt=xt[bt];for(let ne=0,Ut=wt.length;ne<Ut;ne++){let I=G(wt[ne],Nt[ne],ut);v?St(I.x,I.y+S[h-1].y,S[h-1].x+at):St(I.x,I.y,f+at)}}}ot(),gt();function ot(){let Et=s.length/3;if(d){let mt=0,at=k*mt;for(let ut=0;ut<ue;ut++){let bt=jt[ut];Vt(bt[2]+at,bt[1]+at,bt[0]+at)}mt=h+_*2,at=k*mt;for(let ut=0;ut<ue;ut++){let bt=jt[ut];Vt(bt[0]+at,bt[1]+at,bt[2]+at)}}else{for(let mt=0;mt<ue;mt++){let at=jt[mt];Vt(at[2],at[1],at[0])}for(let mt=0;mt<ue;mt++){let at=jt[mt];Vt(at[0]+k*h,at[1]+k*h,at[2]+k*h)}}n.addGroup(Et,s.length/3-Et,0)}function gt(){let Et=s.length/3,mt=0;Bt(B,mt),mt+=B.length;for(let at=0,ut=U.length;at<ut;at++){let bt=U[at];Bt(bt,mt),mt+=bt.length}n.addGroup(Et,s.length/3-Et,1)}function Bt(Et,mt){let at=Et.length;for(;--at>=0;){let ut=at,bt=at-1;bt<0&&(bt=Et.length-1);for(let lt=0,wt=h+_*2;lt<wt;lt++){let ne=k*lt,Ut=k*(lt+1),I=mt+ut+ne,y=mt+bt+ne,W=mt+bt+Ut,j=mt+ut+Ut;ae(I,y,W,j)}}}function St(Et,mt,at){l.push(Et),l.push(mt),l.push(at)}function Vt(Et,mt,at){re(Et),re(mt),re(at);let ut=s.length/3,bt=C.generateTopUV(n,s,ut-3,ut-2,ut-1);L(bt[0]),L(bt[1]),L(bt[2])}function ae(Et,mt,at,ut){re(Et),re(mt),re(ut),re(mt),re(at),re(ut);let bt=s.length/3,lt=C.generateSideWallUV(n,s,bt-6,bt-3,bt-2,bt-1);L(lt[0]),L(lt[1]),L(lt[3]),L(lt[1]),L(lt[2]),L(lt[3])}function re(Et){s.push(l[Et*3+0]),s.push(l[Et*3+1]),s.push(l[Et*3+2])}function L(Et){r.push(Et.x),r.push(Et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Up(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Rc[s.type]().fromJSON(s)),new i(n,t.options)}},Np={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new vt(r,o),new vt(a,l),new vt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],_=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new vt(o,1-l),new vt(c,1-f),new vt(d,1-g),new vt(x,1-m)]:[new vt(a,1-l),new vt(h,1-f),new vt(p,1-g),new vt(_,1-m)]}};function Up(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var pi=class i extends Ea{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},In=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,d=e/l,p=[],g=[],x=[],_=[];for(let m=0;m<h;m++){let C=m*d-o;for(let S=0;S<c;S++){let v=S*f-r;g.push(v,-C,0),x.push(0,0,1),_.push(S/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let C=0;C<a;C++){let S=C+c*m,v=C+c*(m+1),D=C+1+c*(m+1),A=C+1+c*m;p.push(S,v,A),p.push(v,D,A)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var so=class i extends Ee{constructor(t=new Ri([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ge(s,3)),this.setAttribute("normal",new ge(r,3)),this.setAttribute("uv",new ge(o,2));function c(h){let f=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;ci.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,m=g.length;_<m;_++){let C=g[_];ci.isClockWise(C)===!0&&(g[_]=C.reverse())}let x=ci.triangulateShape(p,g);for(let _=0,m=g.length;_<m;_++){let C=g[_];p=p.concat(C)}for(let _=0,m=p.length;_<m;_++){let C=p[_];s.push(C.x,C.y,0),r.push(0,0,1),o.push(C.x,C.y)}for(let _=0,m=x.length;_<m;_++){let C=x[_],S=C[0]+f,v=C[1]+f,D=C[2]+f;n.push(S,v,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Fp(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Fp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ni=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new R,d=new R,p=[],g=[],x=[],_=[];for(let m=0;m<=n;m++){let C=[],S=m/n,v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){let A=D/e;f.x=-t*Math.cos(s+A*r)*Math.sin(o+S*a),f.y=t*Math.cos(o+S*a),f.z=t*Math.sin(s+A*r)*Math.sin(o+S*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),_.push(A+v,1-S),C.push(c++)}h.push(C)}for(let m=0;m<n;m++)for(let C=0;C<e;C++){let S=h[m][C+1],v=h[m][C],D=h[m+1][C],A=h[m+1][C+1];(m!==0||o>0)&&p.push(S,v,A),(m!==n-1||l<Math.PI)&&p.push(v,D,A)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ci=class i extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new R,f=new R,d=new R;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,_=p/n*Math.PI*2;f.x=(t+e*Math.cos(_))*Math.cos(x),f.y=(t+e*Math.cos(_))*Math.sin(x),f.z=e*Math.sin(_),a.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,_=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,C=(s+1)*p+g;o.push(x,_,C),o.push(_,m,C)}this.setIndex(o),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var us=class extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ca=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pa=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var ro=class extends Pn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function ra(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Op(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ds=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ia=class extends ds{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wc:r=t,a=2*e-n;break;case Tc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wc:o=t,l=2*n-e;break;case Tc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,_=x*g,m=-d*_+2*d*x-d*g,C=(1+d)*_+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-p)*_+(1.5+p)*x+.5*g,v=p*_-p*x;for(let D=0;D!==a;++D)r[D]=m*o[h+D]+C*o[c+D]+S*o[l+D]+v*o[f+D];return r}},Da=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},La=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},On=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ra(e,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ra(t.times,Array),values:ra(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ia(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Nr:e=this.InterpolantFactoryMethodDiscrete;break;case ua:e=this.InterpolantFactoryMethodLinear;break;case oa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Op(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,d=f-n,p=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[f+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=ua;var Yi=class extends On{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Nr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};Na.prototype.ValueTypeName="color";var Ua=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};Ua.prototype.ValueTypeName="number";var Fa=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Oe.slerpFlat(r,0,o,c-a,o,c,l);return r}},oo=class extends On{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}};oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends On{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Nr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};Oa.prototype.ValueTypeName="vector";var Ba=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ad=new Ba,za=class{constructor(t){this.manager=t!==void 0?t:Ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};za.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ao=class extends or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Sc=new Ce,Au=new R,Ru=new R,Ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Au.setFromMatrixPosition(t.matrixWorld),e.position.copy(Au),Ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ru),e.updateMatrixWorld(),Sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Dc=class extends Ha{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ls*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},lo=class extends or{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var co=class extends kr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Lc=class extends Ha{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Lc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ka=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ih="\\[\\]\\.:\\/",Bp=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",zp="[^"+ih.replace("\\.","")+"]",Hp=/((?:WC+[\/:])*)/.source.replace("WC",sh),kp=/(WCOD+)?/.source.replace("WCOD",zp),Vp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),Gp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),Wp=new RegExp("^"+Hp+kp+Vp+Gp+"$"),Xp=["material","materials","bones","map"],Nc=class{constructor(t,e,n){let s=n||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},We=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bp,"")}static parseTrackName(t){let e=Wp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Nc;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yx=new Float32Array(1);var Cu=new Ce,Gn=class{constructor(t,e,n=0,s=1/0){this.ray=new Gi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cu),this}intersectObject(t,e=!0,n=[]){return Uc(t,this,n,e),n.sort(Pu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Uc(t[s],this,n,e);return n.sort(Pu),n}};function Pu(i,t){return i.distance-t.distance}function Uc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Uc(r[o],t,e,!0)}}var lr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ho=class extends Ai{constructor(t=10,e=10,n=4473924,s=8947848){n=new Me(n),s=new Me(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let x=d===r?n:s;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}let h=new Ee;h.setAttribute("position",new ge(l,3)),h.setAttribute("color",new ge(c,3));let f=new Pn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var uo=class extends Ai{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ee;r.setIndex(new je(n,1)),r.setAttribute("position",new ge(s,3)),super(r,new Pn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}};var fs=class extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function rh(i,t,e,n){let s=Yp(n);switch(e){case qc:return i*t;case el:return i*t/s.components*s.byteLength;case nl:return i*t/s.components*s.byteLength;case Kc:return i*t*2/s.components*s.byteLength;case il:return i*t*2/s.components*s.byteLength;case Zc:return i*t*3/s.components*s.byteLength;case Wn:return i*t*4/s.components*s.byteLength;case sl:return i*t*4/s.components*s.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:case ll:return Math.max(i,16)*Math.max(t,8)/4;case rl:case al:return Math.max(i,8)*Math.max(t,8)/2;case cl:case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case bl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tl:case Al:case Rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Il:case Dl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yp(i){switch(i){case si:case Gc:return{byteLength:1,components:1};case cr:case Wc:case hr:return{byteLength:2,components:1};case Qa:case tl:return{byteLength:2,components:4};case Ki:case ja:case ri:return{byteLength:4,components:1};case Xc:case Yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function $d(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let x=f[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
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
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_m=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,Ym=`struct PhysicalMaterial {
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
}`,qm=`
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
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
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
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
}`,t_=`#if DEPTH_PACKING == 3200
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
}`,e_=`#define DISTANCE
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
}`,n_=`#define DISTANCE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`uniform float scale;
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
}`,o_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,l_=`uniform vec3 diffuse;
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
}`,c_=`#define LAMBERT
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
}`,h_=`#define LAMBERT
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
}`,u_=`#define MATCAP
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
}`,d_=`#define MATCAP
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
}`,f_=`#define NORMAL
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
}`,p_=`#define NORMAL
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
}`,m_=`#define PHONG
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
}`,g_=`#define PHONG
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
}`,__=`#define STANDARD
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
}`,x_=`#define STANDARD
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
}`,y_=`#define TOON
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
}`,v_=`#define TOON
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
}`,M_=`uniform float size;
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
}`,E_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,b_=`uniform vec3 color;
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
}`,w_=`uniform float rotation;
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
}`,T_=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:Zp,alphahash_pars_fragment:Kp,alphamap_fragment:Jp,alphamap_pars_fragment:$p,alphatest_fragment:jp,alphatest_pars_fragment:Qp,aomap_fragment:tm,aomap_pars_fragment:em,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:om,iridescence_fragment:am,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:_m,cube_uv_reflection_fragment:xm,defaultnormal_vertex:ym,displacementmap_pars_vertex:vm,displacementmap_vertex:Mm,emissivemap_fragment:Em,emissivemap_pars_fragment:Sm,colorspace_fragment:bm,colorspace_pars_fragment:wm,envmap_fragment:Tm,envmap_common_pars_fragment:Am,envmap_pars_fragment:Rm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:Hm,envmap_vertex:Pm,fog_vertex:Im,fog_pars_vertex:Dm,fog_fragment:Lm,fog_pars_fragment:Nm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Fm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Bm,lights_pars_begin:zm,lights_toon_fragment:km,lights_toon_pars_fragment:Vm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:Ym,lights_fragment_begin:qm,lights_fragment_maps:Zm,lights_fragment_end:Km,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Qm,map_fragment:tg,map_pars_fragment:eg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:og,morphcolor_vertex:ag,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:vg,opaque_fragment:Mg,packing:Eg,premultiplied_alpha_fragment:Sg,project_vertex:bg,dithering_fragment:wg,dithering_pars_fragment:Tg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Ig,shadowmask_pars_fragment:Dg,skinbase_vertex:Lg,skinning_pars_vertex:Ng,skinning_vertex:Ug,skinnormal_vertex:Fg,specularmap_fragment:Og,specularmap_pars_fragment:Bg,tonemapping_fragment:zg,tonemapping_pars_fragment:Hg,transmission_fragment:kg,transmission_pars_fragment:Vg,uv_pars_fragment:Gg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:Yg,background_vert:qg,background_frag:Zg,backgroundCube_vert:Kg,backgroundCube_frag:Jg,cube_vert:$g,cube_frag:jg,depth_vert:Qg,depth_frag:t_,distanceRGBA_vert:e_,distanceRGBA_frag:n_,equirect_vert:i_,equirect_frag:s_,linedashed_vert:r_,linedashed_frag:o_,meshbasic_vert:a_,meshbasic_frag:l_,meshlambert_vert:c_,meshlambert_frag:h_,meshmatcap_vert:u_,meshmatcap_frag:d_,meshnormal_vert:f_,meshnormal_frag:p_,meshphong_vert:m_,meshphong_frag:g_,meshphysical_vert:__,meshphysical_frag:x_,meshtoon_vert:y_,meshtoon_frag:v_,points_vert:M_,points_frag:E_,shadow_vert:S_,shadow_frag:b_,sprite_vert:w_,sprite_frag:T_},kt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},gi={basic:{uniforms:xn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:xn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:xn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:xn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:xn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:xn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:xn([kt.points,kt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:xn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:xn([kt.common,kt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:xn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:xn([kt.sprite,kt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:xn([kt.common,kt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:xn([kt.lights,kt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};gi.physical={uniforms:xn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var Ll={r:0,b:0,g:0},_s=new dn,A_=new Ce;function R_(i,t,e,n,s,r,o){let a=new Me(0),l=r===!0?0:1,c,h,f=null,d=0,p=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function x(S){let v=!1,D=g(S);D===null?m(a,l):D&&D.isColor&&(m(D,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,v){let D=g(v);D&&(D.isCubeTexture||D.mapping===fo)?(h===void 0&&(h=new At(new Pe(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:gs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_s.copy(v.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(A_.makeRotationFromEuler(_s)),h.material.toneMapped=Re.getTransfer(D.colorSpace)!==Ue,(f!==D||d!==D.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=D,d=D.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new At(new In(2,2),new ei({name:"BackgroundMaterial",uniforms:gs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Re.getTransfer(D.colorSpace)!==Ue,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||d!==D.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=D,d=D.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,v){S.getRGB(Ll,eh(i)),n.buffers.color.setClear(Ll.r,Ll.g,Ll.b,v,o)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:x,addToRenderList:_,dispose:C}}function C_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,U,J,Q,tt){let B=!1,G=f(Q,J,U);r!==G&&(r=G,c(r.object)),B=p(b,Q,J,tt),B&&g(b,Q,J,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(b,U,J,Q),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function f(b,U,J){let Q=J.wireframe===!0,tt=n[b.id];tt===void 0&&(tt={},n[b.id]=tt);let B=tt[U.id];B===void 0&&(B={},tt[U.id]=B);let G=B[Q];return G===void 0&&(G=d(l()),B[Q]=G),G}function d(b){let U=[],J=[],Q=[];for(let tt=0;tt<e;tt++)U[tt]=0,J[tt]=0,Q[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:J,attributeDivisors:Q,object:b,attributes:{},index:null}}function p(b,U,J,Q){let tt=r.attributes,B=U.attributes,G=0,k=J.getAttributes();for(let z in k)if(k[z].location>=0){let xt=tt[z],Nt=B[z];if(Nt===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(Nt=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(Nt=b.instanceColor)),xt===void 0||xt.attribute!==Nt||Nt&&xt.data!==Nt.data)return!0;G++}return r.attributesNum!==G||r.index!==Q}function g(b,U,J,Q){let tt={},B=U.attributes,G=0,k=J.getAttributes();for(let z in k)if(k[z].location>=0){let xt=B[z];xt===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor));let Nt={};Nt.attribute=xt,xt&&xt.data&&(Nt.data=xt.data),tt[z]=Nt,G++}r.attributes=tt,r.attributesNum=G,r.index=Q}function x(){let b=r.newAttributes;for(let U=0,J=b.length;U<J;U++)b[U]=0}function _(b){m(b,0)}function m(b,U){let J=r.newAttributes,Q=r.enabledAttributes,tt=r.attributeDivisors;J[b]=1,Q[b]===0&&(i.enableVertexAttribArray(b),Q[b]=1),tt[b]!==U&&(i.vertexAttribDivisor(b,U),tt[b]=U)}function C(){let b=r.newAttributes,U=r.enabledAttributes;for(let J=0,Q=U.length;J<Q;J++)U[J]!==b[J]&&(i.disableVertexAttribArray(J),U[J]=0)}function S(b,U,J,Q,tt,B,G){G===!0?i.vertexAttribIPointer(b,U,J,tt,B):i.vertexAttribPointer(b,U,J,Q,tt,B)}function v(b,U,J,Q){x();let tt=Q.attributes,B=J.getAttributes(),G=U.defaultAttributeValues;for(let k in B){let z=B[k];if(z.location>=0){let ft=tt[k];if(ft===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor)),ft!==void 0){let xt=ft.normalized,Nt=ft.itemSize,qt=t.get(ft);if(qt===void 0)continue;let jt=qt.buffer,ue=qt.type,se=qt.bytesPerElement,ot=ue===i.INT||ue===i.UNSIGNED_INT||ft.gpuType===ja;if(ft.isInterleavedBufferAttribute){let gt=ft.data,Bt=gt.stride,St=ft.offset;if(gt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<z.locationSize;Vt++)m(z.location+Vt,gt.meshPerAttribute);b.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Vt=0;Vt<z.locationSize;Vt++)_(z.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Vt=0;Vt<z.locationSize;Vt++)S(z.location+Vt,Nt/z.locationSize,ue,xt,Bt*se,(St+Nt/z.locationSize*Vt)*se,ot)}else{if(ft.isInstancedBufferAttribute){for(let gt=0;gt<z.locationSize;gt++)m(z.location+gt,ft.meshPerAttribute);b.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let gt=0;gt<z.locationSize;gt++)_(z.location+gt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let gt=0;gt<z.locationSize;gt++)S(z.location+gt,Nt/z.locationSize,ue,xt,Nt*se,Nt/z.locationSize*gt*se,ot)}}else if(G!==void 0){let xt=G[k];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(z.location,xt);break;case 3:i.vertexAttrib3fv(z.location,xt);break;case 4:i.vertexAttrib4fv(z.location,xt);break;default:i.vertexAttrib1fv(z.location,xt)}}}}C()}function D(){O();for(let b in n){let U=n[b];for(let J in U){let Q=U[J];for(let tt in Q)h(Q[tt].object),delete Q[tt];delete U[J]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;let U=n[b.id];for(let J in U){let Q=U[J];for(let tt in Q)h(Q[tt].object),delete Q[tt];delete U[J]}delete n[b.id]}function N(b){for(let U in n){let J=n[U];if(J[b.id]===void 0)continue;let Q=J[b.id];for(let tt in Q)h(Q[tt].object),delete Q[tt];delete J[b.id]}}function O(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:_,disableUnusedAttributes:C}}function P_(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function l(c,h,f,d){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function I_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Wn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let O=N===hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==si&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ri&&!O)}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:C,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:D,maxSamples:A}}function D_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new $e,a=new pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,x=f.clipIntersection,_=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!_)r?h(null):c();else{let C=r?0:n,S=C*4,v=m.clippingState||null;l.value=v,v=h(g,d,S,p);for(let D=0;D!==S;++D)v[D]=e[D];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,p,g){let x=f!==null?f.length:0,_=null;if(x!==0){if(_=l.value,g!==!0||_===null){let m=p+x*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(_===null||_.length<m)&&(_=new Float32Array(m));for(let S=0,v=p;S!==x;++S,v+=4)o.copy(f[S]).applyMatrix4(C,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,_}}function L_(i){let t=new WeakMap;function e(o,a){return a===Ka?o.mapping=ps:a===Ja&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ka||a===Ja)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _a(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var pr=4,Rd=[.125,.215,.35,.446,.526,.582],vs=20,oh=new co,Cd=new Me,ah=null,lh=0,ch=0,hh=!1,ys=(1+Math.sqrt(5))/2,fr=1/ys,Pd=[new R(-ys,fr,0),new R(ys,fr,0),new R(-fr,0,ys),new R(fr,0,ys),new R(0,ys,-fr),new R(0,ys,fr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],N_=new R,Fl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=N_}=r;ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ah,lh,ch),this._renderer.xr.enabled=hh,t.scissorTest=!1,Nl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:hr,format:Wn,colorSpace:as,depthBuffer:!1},s=Id(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U_(r)),this._blurMaterial=F_(r,t,e)}return s}_compileMaterial(t){let e=new At(this._lodPlanes[0],t);this._renderer.compile(e,oh)}_sceneToCubeUV(t,e,n,s,r){let l=new hn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Cd),f.toneMapping=Ii,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let x=new an({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),_=new At(new Pe,x),m=!1,C=t.background;C?C.isColor&&(x.color.copy(C),t.background=null,m=!0):(x.color.copy(Cd),m=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let D=this._cubeSize;Nl(s,v*D,S>2?D:0,D,D),f.setRenderTarget(s),m&&f.render(_,l),f.render(t,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=p,f.autoClear=d,t.background=C}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ps||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Nl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,oh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pd[(s-r-1)%Pd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new At(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vs-1),x=r/g,_=isFinite(r)?1+Math.floor(h*x):vs;_>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${vs}`);let m=[],C=0;for(let N=0;N<vs;++N){let O=N/x,w=Math.exp(-O*O/2);m.push(w),N===0?C+=w:N<_&&(C+=2*w)}for(let N=0;N<m.length;N++)m[N]=m[N]/C;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let v=this._sizeLods[s],D=3*v*(s>S-pr?s-S+pr:0),A=4*(this._cubeSize-v);Nl(e,D,A,3*v,2*v),l.setRenderTarget(e),l.render(f,oh)}};function U_(i){let t=[],e=[],n=[],s=i,r=i-pr+1+Rd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-pr?l=Rd[o-i+pr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,x=3,_=2,m=1,C=new Float32Array(x*g*p),S=new Float32Array(_*g*p),v=new Float32Array(m*g*p);for(let A=0;A<p;A++){let N=A%3*2/3-1,O=A>2?0:-1,w=[N,O,0,N+2/3,O,0,N+2/3,O+1,0,N,O,0,N+2/3,O+1,0,N,O+1,0];C.set(w,x*g*A),S.set(d,_*g*A);let b=[A,A,A,A,A,A];v.set(b,m*g*A)}let D=new Ee;D.setAttribute("position",new je(C,x)),D.setAttribute("uv",new je(S,_)),D.setAttribute("faceIndex",new je(v,m)),t.push(D),s>pr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Id(i,t,e){let n=new di(i,t,e);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nl(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function F_(i,t,e){let n=new Float32Array(vs),s=new R(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Dd(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Ld(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}function O_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ka||l===Ja,h=l===ps||l===ms;if(c||h){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Fl(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Fl(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function B_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function z_(i,t,e,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(f){let d=[],p=f.index,g=f.attributes.position,x=0;if(p!==null){let C=p.array;x=p.version;for(let S=0,v=C.length;S<v;S+=3){let D=C[S+0],A=C[S+1],N=C[S+2];d.push(D,A,A,N,N,D)}}else if(g!==void 0){let C=g.array;x=g.version;for(let S=0,v=C.length/3-1;S<v;S+=3){let D=S+0,A=S+1,N=S+2;d.push(D,A,A,N,N,D)}}else return;let _=new(th(d)?Hr:zr)(d,1);_.version=x;let m=r.get(f);m&&t.remove(m),r.set(f,_)}function h(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function H_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];e.update(_,n,1)}function f(d,p,g,x){if(g===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<d.length;m++)c(d[m]/o,p[m],x[m]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let m=0;for(let C=0;C<g;C++)m+=p[C]*x[C];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function k_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function V_(i,t,e){let n=new WeakMap,s=new qe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let w=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,D=1;v>t.maxTextureSize&&(D=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*D*4*f),N=new Br(A,v,D,f);N.type=ri,N.needsUpdate=!0;let O=S*4;for(let b=0;b<f;b++){let U=_[b],J=m[b],Q=C[b],tt=v*D*4*b;for(let B=0;B<U.count;B++){let G=B*O;p===!0&&(s.fromBufferAttribute(U,B),A[tt+G+0]=s.x,A[tt+G+1]=s.y,A[tt+G+2]=s.z,A[tt+G+3]=0),g===!0&&(s.fromBufferAttribute(J,B),A[tt+G+4]=s.x,A[tt+G+5]=s.y,A[tt+G+6]=s.z,A[tt+G+7]=0),x===!0&&(s.fromBufferAttribute(Q,B),A[tt+G+8]=s.x,A[tt+G+9]=s.y,A[tt+G+10]=s.z,A[tt+G+11]=Q.itemSize===4?s.w:1)}}d={count:f,texture:N,size:new vt(v,D)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function G_(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var jd=new wn,Nd=new qr(1,1),Qd=new Br,tf=new ma,ef=new Vr,Ud=[],Fd=[],Od=new Float32Array(16),Bd=new Float32Array(9),zd=new Float32Array(4);function gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ud[s];if(r===void 0&&(r=new Float32Array(s),Ud[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Bl(i,t){let e=Fd[t];e===void 0&&(e=new Int32Array(t),Fd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function W_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function X_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),tn(e,t)}}function Y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),tn(e,t)}}function q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),tn(e,t)}}function Z_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;zd.set(n),i.uniformMatrix2fv(this.addr,!1,zd),tn(e,n)}}function K_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Bd.set(n),i.uniformMatrix3fv(this.addr,!1,Bd),tn(e,n)}}function J_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Od.set(n),i.uniformMatrix4fv(this.addr,!1,Od),tn(e,n)}}function $_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function j_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),tn(e,t)}}function Q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),tn(e,t)}}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),tn(e,t)}}function e0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),tn(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),tn(e,t)}}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),tn(e,t)}}function r0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nd.compareFunction=$c,r=Nd):r=jd,e.setTexture2D(t||r,s)}function o0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||tf,s)}function a0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ef,s)}function l0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qd,s)}function c0(i){switch(i){case 5126:return W_;case 35664:return X_;case 35665:return Y_;case 35666:return q_;case 35674:return Z_;case 35675:return K_;case 35676:return J_;case 5124:case 35670:return $_;case 35667:case 35671:return j_;case 35668:case 35672:return Q_;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return l0}}function h0(i,t){i.uniform1fv(this.addr,t)}function u0(i,t){let e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function d0(i,t){let e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function f0(i,t){let e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function p0(i,t){let e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function m0(i,t){let e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function g0(i,t){let e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _0(i,t){i.uniform1iv(this.addr,t)}function x0(i,t){i.uniform2iv(this.addr,t)}function y0(i,t){i.uniform3iv(this.addr,t)}function v0(i,t){i.uniform4iv(this.addr,t)}function M0(i,t){i.uniform1uiv(this.addr,t)}function E0(i,t){i.uniform2uiv(this.addr,t)}function S0(i,t){i.uniform3uiv(this.addr,t)}function b0(i,t){i.uniform4uiv(this.addr,t)}function w0(i,t,e){let n=this.cache,s=t.length,r=Bl(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||jd,r[o])}function T0(i,t,e){let n=this.cache,s=t.length,r=Bl(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||tf,r[o])}function A0(i,t,e){let n=this.cache,s=t.length,r=Bl(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ef,r[o])}function R0(i,t,e){let n=this.cache,s=t.length,r=Bl(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qd,r[o])}function C0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return x0;case 35668:case 35672:return y0;case 35669:case 35673:return v0;case 5125:return M0;case 36294:return E0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}var dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c0(e.type)}},fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C0(e.type)}},ph=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},uh=/(\w+)(\])?(\[|\.)?/g;function Hd(i,t){i.seq.push(t),i.map[t.id]=t}function P0(i,t,e){let n=i.name,s=n.length;for(uh.lastIndex=0;;){let r=uh.exec(n),o=uh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hd(e,c===void 0?new dh(a,i,t):new fh(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new ph(a),Hd(e,f)),e=f}}}var mr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);P0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function kd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var I0=37297,D0=0;function L0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Vd=new pe;function N0(i){Re._getMatrix(Vd,Re.workingColorSpace,i);let t=`mat3( ${Vd.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(i)){case Ur:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+L0(i.getShaderSource(t),a)}else return r}function U0(i,t){let e=N0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function F0(i,t){let e;switch(t){case td:e="Linear";break;case ed:e="Reinhard";break;case nd:e="Cineon";break;case id:e="ACESFilmic";break;case rd:e="AgX";break;case od:e="Neutral";break;case sd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ul=new R;function O0(){Re.getLuminanceCoefficients(Ul);let i=Ul.x.toFixed(4),t=Ul.y.toFixed(4),e=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function z0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function H0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function yo(i){return i!==""}function Wd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(i){return i.replace(k0,G0)}var V0=new Map;function G0(i,t){let e=ye[t];if(e===void 0){let n=V0.get(t);if(n!==void 0)e=ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mh(e)}var W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yd(i){return i.replace(W0,X0)}function X0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qd(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function q0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function K0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kc:t="ENVMAP_BLENDING_MULTIPLY";break;case ju:t="ENVMAP_BLENDING_MIX";break;case Qu:t="ENVMAP_BLENDING_ADD";break}return t}function J0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Y0(e),c=q0(e),h=Z0(e),f=K0(e),d=J0(e),p=B0(e),g=z0(r),x=s.createProgram(),_,m,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yo).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yo).join(`
`),m.length>0&&(m+=`
`)):(_=[qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),m=[qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?ye.tonemapping_pars_fragment:"",e.toneMapping!==Ii?F0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,U0("linearToOutputTexel",e.outputColorSpace),O0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yo).join(`
`)),o=mh(o),o=Wd(o,e),o=Xd(o,e),a=mh(a),a=Wd(a,e),a=Xd(a,e),o=Yd(o),a=Yd(a),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=C+_+o,v=C+m+a,D=kd(s,s.VERTEX_SHADER,S),A=kd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,D),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function N(U){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(x)||"",Q=s.getShaderInfoLog(D)||"",tt=s.getShaderInfoLog(A)||"",B=J.trim(),G=Q.trim(),k=tt.trim(),z=!0,ft=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,A);else{let xt=Gd(s,D,"vertex"),Nt=Gd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+B+`
`+xt+`
`+Nt)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||k==="")&&(ft=!1);ft&&(U.diagnostics={runnable:z,programLog:B,vertexShader:{log:G,prefix:_},fragmentShader:{log:k,prefix:m}})}s.deleteShader(D),s.deleteShader(A),O=new mr(s,x),w=H0(s,x)}let O;this.getUniforms=function(){return O===void 0&&N(this),O};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,I0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=A,this}var j0=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _h(t),e.set(t,n)),n}},_h=class{constructor(t){this.id=j0++,this.code=t,this.usedTimes=0}};function Q0(i,t,e,n,s,r,o){let a=new $s,l=new gh,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function _(w,b,U,J,Q){let tt=J.fog,B=Q.geometry,G=w.isMeshStandardMaterial?J.environment:null,k=(w.isMeshStandardMaterial?e:t).get(w.envMap||G),z=k&&k.mapping===fo?k.image.height:null,ft=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let xt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Nt=xt!==void 0?xt.length:0,qt=0;B.morphAttributes.position!==void 0&&(qt=1),B.morphAttributes.normal!==void 0&&(qt=2),B.morphAttributes.color!==void 0&&(qt=3);let jt,ue,se,ot;if(ft){let Ie=gi[ft];jt=Ie.vertexShader,ue=Ie.fragmentShader}else jt=w.vertexShader,ue=w.fragmentShader,l.update(w),se=l.getVertexShaderID(w),ot=l.getFragmentShaderID(w);let gt=i.getRenderTarget(),Bt=i.state.buffers.depth.getReversed(),St=Q.isInstancedMesh===!0,Vt=Q.isBatchedMesh===!0,ae=!!w.map,re=!!w.matcap,L=!!k,Et=!!w.aoMap,mt=!!w.lightMap,at=!!w.bumpMap,ut=!!w.normalMap,bt=!!w.displacementMap,lt=!!w.emissiveMap,wt=!!w.metalnessMap,ne=!!w.roughnessMap,Ut=w.anisotropy>0,I=w.clearcoat>0,y=w.dispersion>0,W=w.iridescence>0,j=w.sheen>0,pt=w.transmission>0,P=Ut&&!!w.anisotropyMap,F=I&&!!w.clearcoatMap,q=I&&!!w.clearcoatNormalMap,dt=I&&!!w.clearcoatRoughnessMap,_t=W&&!!w.iridescenceMap,ct=W&&!!w.iridescenceThicknessMap,Tt=j&&!!w.sheenColorMap,zt=j&&!!w.sheenRoughnessMap,Gt=!!w.specularMap,Dt=!!w.specularColorMap,le=!!w.specularIntensityMap,H=pt&&!!w.transmissionMap,Pt=pt&&!!w.thicknessMap,Lt=!!w.gradientMap,Xt=!!w.alphaMap,Rt=w.alphaTest>0,Mt=!!w.alphaHash,Zt=!!w.extensions,ie=Ii;w.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Fe={shaderID:ft,shaderType:w.type,shaderName:w.name,vertexShader:jt,fragmentShader:ue,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:ot,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Vt,batchingColor:Vt&&Q._colorsTexture!==null,instancing:St,instancingColor:St&&Q.instanceColor!==null,instancingMorph:St&&Q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:as,alphaToCoverage:!!w.alphaToCoverage,map:ae,matcap:re,envMap:L,envMapMode:L&&k.mapping,envMapCubeUVHeight:z,aoMap:Et,lightMap:mt,bumpMap:at,normalMap:ut,displacementMap:d&&bt,emissiveMap:lt,normalMapObjectSpace:ut&&w.normalMapType===hd,normalMapTangentSpace:ut&&w.normalMapType===Jc,metalnessMap:wt,roughnessMap:ne,anisotropy:Ut,anisotropyMap:P,clearcoat:I,clearcoatMap:F,clearcoatNormalMap:q,clearcoatRoughnessMap:dt,dispersion:y,iridescence:W,iridescenceMap:_t,iridescenceThicknessMap:ct,sheen:j,sheenColorMap:Tt,sheenRoughnessMap:zt,specularMap:Gt,specularColorMap:Dt,specularIntensityMap:le,transmission:pt,transmissionMap:H,thicknessMap:Pt,gradientMap:Lt,opaque:w.transparent===!1&&w.blending===rs&&w.alphaToCoverage===!1,alphaMap:Xt,alphaTest:Rt,alphaHash:Mt,combine:w.combine,mapUv:ae&&x(w.map.channel),aoMapUv:Et&&x(w.aoMap.channel),lightMapUv:mt&&x(w.lightMap.channel),bumpMapUv:at&&x(w.bumpMap.channel),normalMapUv:ut&&x(w.normalMap.channel),displacementMapUv:bt&&x(w.displacementMap.channel),emissiveMapUv:lt&&x(w.emissiveMap.channel),metalnessMapUv:wt&&x(w.metalnessMap.channel),roughnessMapUv:ne&&x(w.roughnessMap.channel),anisotropyMapUv:P&&x(w.anisotropyMap.channel),clearcoatMapUv:F&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:q&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:zt&&x(w.sheenRoughnessMap.channel),specularMapUv:Gt&&x(w.specularMap.channel),specularColorMapUv:Dt&&x(w.specularColorMap.channel),specularIntensityMapUv:le&&x(w.specularIntensityMap.channel),transmissionMapUv:H&&x(w.transmissionMap.channel),thicknessMapUv:Pt&&x(w.thicknessMap.channel),alphaMapUv:Xt&&x(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ut||Ut),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!B.attributes.uv&&(ae||Xt),fog:!!tt,useFog:w.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Bt,skinning:Q.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:qt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:ae&&w.map.isVideoTexture===!0&&Re.getTransfer(w.map.colorSpace)===Ue,decodeVideoTextureEmissive:lt&&w.emissiveMap.isVideoTexture===!0&&Re.getTransfer(w.emissiveMap.colorSpace)===Ue,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ln,flipSided:w.side===An,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function m(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let U in w.defines)b.push(U),b.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(C(b,w),S(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function C(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let b=g[w.type],U;if(b){let J=gi[b];U=Md.clone(J.uniforms)}else U=w.uniforms;return U}function D(w,b){let U;for(let J=0,Q=h.length;J<Q;J++){let tt=h[J];if(tt.cacheKey===b){U=tt,++U.usedTimes;break}}return U===void 0&&(U=new $0(i,b,w,r),h.push(U)),U}function A(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function N(w){l.remove(w)}function O(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:v,acquireProgram:D,releaseProgram:A,releaseShaderCache:N,programs:h,dispose:O}}function tx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ex(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,d,p,g,x,_){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:_},i[t]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=x,m.group=_),t++,m}function a(f,d,p,g,x,_){let m=o(f,d,p,g,x,_);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(f,d,p,g,x,_){let m=o(f,d,p,g,x,_);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(f,d){e.length>1&&e.sort(f||ex),n.length>1&&n.sort(d||Zd),s.length>1&&s.sort(d||Zd)}function h(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function nx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Kd,i.set(n,[o])):s>=r.length?(o=new Kd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ix(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Me};break;case"SpotLight":e={position:new R,direction:new R,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":e={color:new Me,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function sx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var rx=0;function ox(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ax(i){let t=new ix,e=sx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new Ce,o=new Ce;function a(c){let h=0,f=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,x=0,_=0,m=0,C=0,S=0,v=0,D=0,A=0,N=0;c.sort(ox);for(let w=0,b=c.length;w<b;w++){let U=c[w],J=U.color,Q=U.intensity,tt=U.distance,B=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=J.r*Q,f+=J.g*Q,d+=J.b*Q;else if(U.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(U.sh.coefficients[G],Q);N++}else if(U.isDirectionalLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let k=U.shadow,z=e.get(U);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=U.shadow.matrix,C++}n.directional[p]=G,p++}else if(U.isSpotLight){let G=t.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(J).multiplyScalar(Q),G.distance=tt,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,n.spot[x]=G;let k=U.shadow;if(U.map&&(n.spotLightMap[D]=U.map,D++,k.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[x]=k.matrix,U.castShadow){let z=e.get(U);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=B,v++}x++}else if(U.isRectAreaLight){let G=t.get(U);G.color.copy(J).multiplyScalar(Q),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),n.rectArea[_]=G,_++}else if(U.isPointLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),G.distance=U.distance,G.decay=U.decay,U.castShadow){let k=U.shadow,z=e.get(U);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=U.shadow.matrix,S++}n.point[g]=G,g++}else if(U.isHemisphereLight){let G=t.get(U);G.skyColor.copy(U.color).multiplyScalar(Q),G.groundColor.copy(U.groundColor).multiplyScalar(Q),n.hemi[m]=G,m++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=kt.LTC_FLOAT_1,n.rectAreaLTC2=kt.LTC_FLOAT_2):(n.rectAreaLTC1=kt.LTC_HALF_1,n.rectAreaLTC2=kt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let O=n.hash;(O.directionalLength!==p||O.pointLength!==g||O.spotLength!==x||O.rectAreaLength!==_||O.hemiLength!==m||O.numDirectionalShadows!==C||O.numPointShadows!==S||O.numSpotShadows!==v||O.numSpotMaps!==D||O.numLightProbes!==N)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=_,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=N,O.directionalLength=p,O.pointLength=g,O.spotLength=x,O.rectAreaLength=_,O.hemiLength=m,O.numDirectionalShadows=C,O.numPointShadows=S,O.numSpotShadows=v,O.numSpotMaps=D,O.numLightProbes=N,n.version=rx++)}function l(c,h){let f=0,d=0,p=0,g=0,x=0,_=h.matrixWorldInverse;for(let m=0,C=c.length;m<C;m++){let S=c[m];if(S.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),f++}else if(S.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),p++}else if(S.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),o.identity(),r.copy(S.matrixWorld),r.premultiply(_),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),d++}else if(S.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(_),x++}}}return{setup:a,setupView:l,state:n}}function Jd(i){let t=new ax(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function lx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Jd(i),t.set(s,[a])):r>=o.length?(a=new Jd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hx=`uniform sampler2D shadow_pass;
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
}`;function ux(i,t,e){let n=new er,s=new vt,r=new vt,o=new qe,a=new Ca({depthPacking:cd}),l=new Pa,c={},h=e.maxTextureSize,f={[wi]:An,[An]:wi,[ln]:ln},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:cx,fragmentShader:hx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new At(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let m=this.type;this.render=function(A,N,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;let w=i.getRenderTarget(),b=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Pi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let Q=m!==mi&&this.type===mi,tt=m===mi&&this.type!==mi;for(let B=0,G=A.length;B<G;B++){let k=A[B],z=k.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ft=z.getFrameExtents();if(s.multiply(ft),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,z.mapSize.y=r.y)),z.map===null||Q===!0||tt===!0){let Nt=this.type!==mi?{minFilter:Cn,magFilter:Cn}:{};z.map!==null&&z.map.dispose(),z.map=new di(s.x,s.y,Nt),z.map.texture.name=k.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let xt=z.getViewportCount();for(let Nt=0;Nt<xt;Nt++){let qt=z.getViewport(Nt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),J.viewport(o),z.updateMatrices(k,Nt),n=z.getFrustum(),v(N,O,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===mi&&C(z,O),z.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(w,b,U)};function C(A,N){let O=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new di(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(N,null,O,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(N,null,O,p,x,null)}function S(A,N,O,w){let b=null,U=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)b=U;else if(b=O.isPointLight===!0?l:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let J=b.uuid,Q=N.uuid,tt=c[J];tt===void 0&&(tt={},c[J]=tt);let B=tt[Q];B===void 0&&(B=b.clone(),tt[Q]=B,N.addEventListener("dispose",D)),b=B}if(b.visible=N.visible,b.wireframe=N.wireframe,w===mi?b.side=N.shadowSide!==null?N.shadowSide:N.side:b.side=N.shadowSide!==null?N.shadowSide:f[N.side],b.alphaMap=N.alphaMap,b.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,b.map=N.map,b.clipShadows=N.clipShadows,b.clippingPlanes=N.clippingPlanes,b.clipIntersection=N.clipIntersection,b.displacementMap=N.displacementMap,b.displacementScale=N.displacementScale,b.displacementBias=N.displacementBias,b.wireframeLinewidth=N.wireframeLinewidth,b.linewidth=N.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let J=i.properties.get(b);J.light=O}return b}function v(A,N,O,w,b){if(A.visible===!1)return;if(A.layers.test(N.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===mi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let Q=t.update(A),tt=A.material;if(Array.isArray(tt)){let B=Q.groups;for(let G=0,k=B.length;G<k;G++){let z=B[G],ft=tt[z.materialIndex];if(ft&&ft.visible){let xt=S(A,ft,w,b);A.onBeforeShadow(i,A,N,O,Q,xt,z),i.renderBufferDirect(O,null,Q,xt,A,z),A.onAfterShadow(i,A,N,O,Q,xt,z)}}}else if(tt.visible){let B=S(A,tt,w,b);A.onBeforeShadow(i,A,N,O,Q,B,null),i.renderBufferDirect(O,null,Q,B,A,null),A.onAfterShadow(i,A,N,O,Q,B,null)}}let J=A.children;for(let Q=0,tt=J.length;Q<tt;Q++)v(J[Q],N,O,w,b)}function D(A){A.target.removeEventListener("dispose",D);for(let O in c){let w=c[O],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var dx={[Va]:Ga,[Wa]:qa,[Xa]:Za,[os]:Ya,[Ga]:Va,[qa]:Wa,[Za]:Xa,[Ya]:os};function fx(i,t){function e(){let H=!1,Pt=new qe,Lt=null,Xt=new qe(0,0,0,0);return{setMask:function(Rt){Lt!==Rt&&!H&&(i.colorMask(Rt,Rt,Rt,Rt),Lt=Rt)},setLocked:function(Rt){H=Rt},setClear:function(Rt,Mt,Zt,ie,Fe){Fe===!0&&(Rt*=ie,Mt*=ie,Zt*=ie),Pt.set(Rt,Mt,Zt,ie),Xt.equals(Pt)===!1&&(i.clearColor(Rt,Mt,Zt,ie),Xt.copy(Pt))},reset:function(){H=!1,Lt=null,Xt.set(-1,0,0,0)}}}function n(){let H=!1,Pt=!1,Lt=null,Xt=null,Rt=null;return{setReversed:function(Mt){if(Pt!==Mt){let Zt=t.get("EXT_clip_control");Mt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Pt=Mt;let ie=Rt;Rt=null,this.setClear(ie)}},getReversed:function(){return Pt},setTest:function(Mt){Mt?gt(i.DEPTH_TEST):Bt(i.DEPTH_TEST)},setMask:function(Mt){Lt!==Mt&&!H&&(i.depthMask(Mt),Lt=Mt)},setFunc:function(Mt){if(Pt&&(Mt=dx[Mt]),Xt!==Mt){switch(Mt){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Xt=Mt}},setLocked:function(Mt){H=Mt},setClear:function(Mt){Rt!==Mt&&(Pt&&(Mt=1-Mt),i.clearDepth(Mt),Rt=Mt)},reset:function(){H=!1,Lt=null,Xt=null,Rt=null,Pt=!1}}}function s(){let H=!1,Pt=null,Lt=null,Xt=null,Rt=null,Mt=null,Zt=null,ie=null,Fe=null;return{setTest:function(Ie){H||(Ie?gt(i.STENCIL_TEST):Bt(i.STENCIL_TEST))},setMask:function(Ie){Pt!==Ie&&!H&&(i.stencilMask(Ie),Pt=Ie)},setFunc:function(Ie,Bn,Jt){(Lt!==Ie||Xt!==Bn||Rt!==Jt)&&(i.stencilFunc(Ie,Bn,Jt),Lt=Ie,Xt=Bn,Rt=Jt)},setOp:function(Ie,Bn,Jt){(Mt!==Ie||Zt!==Bn||ie!==Jt)&&(i.stencilOp(Ie,Bn,Jt),Mt=Ie,Zt=Bn,ie=Jt)},setLocked:function(Ie){H=Ie},setClear:function(Ie){Fe!==Ie&&(i.clearStencil(Ie),Fe=Ie)},reset:function(){H=!1,Pt=null,Lt=null,Xt=null,Rt=null,Mt=null,Zt=null,ie=null,Fe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,p=[],g=null,x=!1,_=null,m=null,C=null,S=null,v=null,D=null,A=null,N=new Me(0,0,0),O=0,w=!1,b=null,U=null,J=null,Q=null,tt=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,k=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=k>=2);let ft=null,xt={},Nt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),jt=new qe().fromArray(Nt),ue=new qe().fromArray(qt);function se(H,Pt,Lt,Xt){let Rt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(H,Mt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<Lt;Zt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Xt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(Pt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return Mt}let ot={};ot[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(i.DEPTH_TEST),o.setFunc(os),at(!1),ut(Fc),gt(i.CULL_FACE),Et(Pi);function gt(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function Bt(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function St(H,Pt){return f[H]!==Pt?(i.bindFramebuffer(H,Pt),f[H]=Pt,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Pt),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Vt(H,Pt){let Lt=p,Xt=!1;if(H){Lt=d.get(Pt),Lt===void 0&&(Lt=[],d.set(Pt,Lt));let Rt=H.textures;if(Lt.length!==Rt.length||Lt[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Zt=Rt.length;Mt<Zt;Mt++)Lt[Mt]=i.COLOR_ATTACHMENT0+Mt;Lt.length=Rt.length,Xt=!0}}else Lt[0]!==i.BACK&&(Lt[0]=i.BACK,Xt=!0);Xt&&i.drawBuffers(Lt)}function ae(H){return g!==H?(i.useProgram(H),g=H,!0):!1}let re={[Vi]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[Fu]:i.FUNC_REVERSE_SUBTRACT};re[Ou]=i.MIN,re[Bu]=i.MAX;let L={[zu]:i.ZERO,[Hu]:i.ONE,[ku]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[qu]:i.SRC_ALPHA_SATURATE,[Xu]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[Vu]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[Yu]:i.ONE_MINUS_DST_COLOR,[Wu]:i.ONE_MINUS_DST_ALPHA,[Zu]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[Ju]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function Et(H,Pt,Lt,Xt,Rt,Mt,Zt,ie,Fe,Ie){if(H===Pi){x===!0&&(Bt(i.BLEND),x=!1);return}if(x===!1&&(gt(i.BLEND),x=!0),H!==Nu){if(H!==_||Ie!==w){if((m!==Vi||v!==Vi)&&(i.blendEquation(i.FUNC_ADD),m=Vi,v=Vi),Ie)switch(H){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFunc(i.ONE,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}C=null,S=null,D=null,A=null,N.set(0,0,0),O=0,_=H,w=Ie}return}Rt=Rt||Pt,Mt=Mt||Lt,Zt=Zt||Xt,(Pt!==m||Rt!==v)&&(i.blendEquationSeparate(re[Pt],re[Rt]),m=Pt,v=Rt),(Lt!==C||Xt!==S||Mt!==D||Zt!==A)&&(i.blendFuncSeparate(L[Lt],L[Xt],L[Mt],L[Zt]),C=Lt,S=Xt,D=Mt,A=Zt),(ie.equals(N)===!1||Fe!==O)&&(i.blendColor(ie.r,ie.g,ie.b,Fe),N.copy(ie),O=Fe),_=H,w=!1}function mt(H,Pt){H.side===ln?Bt(i.CULL_FACE):gt(i.CULL_FACE);let Lt=H.side===An;Pt&&(Lt=!Lt),at(Lt),H.blending===rs&&H.transparent===!1?Et(Pi):Et(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Xt=H.stencilWrite;a.setTest(Xt),Xt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),lt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(H){b!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),b=H)}function ut(H){H!==Iu?(gt(i.CULL_FACE),H!==U&&(H===Fc?i.cullFace(i.BACK):H===Du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Bt(i.CULL_FACE),U=H}function bt(H){H!==J&&(G&&i.lineWidth(H),J=H)}function lt(H,Pt,Lt){H?(gt(i.POLYGON_OFFSET_FILL),(Q!==Pt||tt!==Lt)&&(i.polygonOffset(Pt,Lt),Q=Pt,tt=Lt)):Bt(i.POLYGON_OFFSET_FILL)}function wt(H){H?gt(i.SCISSOR_TEST):Bt(i.SCISSOR_TEST)}function ne(H){H===void 0&&(H=i.TEXTURE0+B-1),ft!==H&&(i.activeTexture(H),ft=H)}function Ut(H,Pt,Lt){Lt===void 0&&(ft===null?Lt=i.TEXTURE0+B-1:Lt=ft);let Xt=xt[Lt];Xt===void 0&&(Xt={type:void 0,texture:void 0},xt[Lt]=Xt),(Xt.type!==H||Xt.texture!==Pt)&&(ft!==Lt&&(i.activeTexture(Lt),ft=Lt),i.bindTexture(H,Pt||ot[H]),Xt.type=H,Xt.texture=Pt)}function I(){let H=xt[ft];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{i.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{i.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function P(){try{i.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function F(){try{i.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function q(){try{i.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{i.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(){try{i.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{i.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(H){jt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),jt.copy(H))}function zt(H){ue.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),ue.copy(H))}function Gt(H,Pt){let Lt=c.get(Pt);Lt===void 0&&(Lt=new WeakMap,c.set(Pt,Lt));let Xt=Lt.get(H);Xt===void 0&&(Xt=i.getUniformBlockIndex(Pt,H.name),Lt.set(H,Xt))}function Dt(H,Pt){let Xt=c.get(Pt).get(H);l.get(Pt)!==Xt&&(i.uniformBlockBinding(Pt,Xt,H.__bindingPointIndex),l.set(Pt,Xt))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ft=null,xt={},f={},d=new WeakMap,p=[],g=null,x=!1,_=null,m=null,C=null,S=null,v=null,D=null,A=null,N=new Me(0,0,0),O=0,w=!1,b=null,U=null,J=null,Q=null,tt=null,jt.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:Bt,bindFramebuffer:St,drawBuffers:Vt,useProgram:ae,setBlending:Et,setMaterial:mt,setFlipSided:at,setCullFace:ut,setLineWidth:bt,setPolygonOffset:lt,setScissorTest:wt,activeTexture:ne,bindTexture:Ut,unbindTexture:I,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:_t,texImage3D:ct,updateUBOMapping:Gt,uniformBlockBinding:Dt,texStorage2D:q,texStorage3D:dt,texSubImage2D:j,texSubImage3D:pt,compressedTexSubImage2D:P,compressedTexSubImage3D:F,scissor:Tt,viewport:zt,reset:le}}function px(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,y){return p?new OffscreenCanvas(I,y):Or("canvas")}function x(I,y,W){let j=1,pt=Ut(I);if((pt.width>W||pt.height>W)&&(j=W/Math.max(pt.width,pt.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let P=Math.floor(j*pt.width),F=Math.floor(j*pt.height);f===void 0&&(f=g(P,F));let q=y?g(P,F):f;return q.width=P,q.height=F,q.getContext("2d").drawImage(I,0,0,P,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+P+"x"+F+")."),q}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),I;return I}function _(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(I,y,W,j,pt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let P=y;if(y===i.RED&&(W===i.FLOAT&&(P=i.R32F),W===i.HALF_FLOAT&&(P=i.R16F),W===i.UNSIGNED_BYTE&&(P=i.R8)),y===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(P=i.R8UI),W===i.UNSIGNED_SHORT&&(P=i.R16UI),W===i.UNSIGNED_INT&&(P=i.R32UI),W===i.BYTE&&(P=i.R8I),W===i.SHORT&&(P=i.R16I),W===i.INT&&(P=i.R32I)),y===i.RG&&(W===i.FLOAT&&(P=i.RG32F),W===i.HALF_FLOAT&&(P=i.RG16F),W===i.UNSIGNED_BYTE&&(P=i.RG8)),y===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(P=i.RG8UI),W===i.UNSIGNED_SHORT&&(P=i.RG16UI),W===i.UNSIGNED_INT&&(P=i.RG32UI),W===i.BYTE&&(P=i.RG8I),W===i.SHORT&&(P=i.RG16I),W===i.INT&&(P=i.RG32I)),y===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(P=i.RGB8UI),W===i.UNSIGNED_SHORT&&(P=i.RGB16UI),W===i.UNSIGNED_INT&&(P=i.RGB32UI),W===i.BYTE&&(P=i.RGB8I),W===i.SHORT&&(P=i.RGB16I),W===i.INT&&(P=i.RGB32I)),y===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),W===i.UNSIGNED_INT&&(P=i.RGBA32UI),W===i.BYTE&&(P=i.RGBA8I),W===i.SHORT&&(P=i.RGBA16I),W===i.INT&&(P=i.RGBA32I)),y===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(P=i.R11F_G11F_B10F)),y===i.RGBA){let F=pt?Ur:Re.getTransfer(j);W===i.FLOAT&&(P=i.RGBA32F),W===i.HALF_FLOAT&&(P=i.RGBA16F),W===i.UNSIGNED_BYTE&&(P=F===Ue?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return(P===i.R16F||P===i.R32F||P===i.RG16F||P===i.RG32F||P===i.RGBA16F||P===i.RGBA32F)&&t.get("EXT_color_buffer_float"),P}function v(I,y){let W;return I?y===null||y===Ki||y===ur?W=i.DEPTH24_STENCIL8:y===ri?W=i.DEPTH32F_STENCIL8:y===cr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ki||y===ur?W=i.DEPTH_COMPONENT24:y===ri?W=i.DEPTH_COMPONENT32F:y===cr&&(W=i.DEPTH_COMPONENT16),W}function D(I,y){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==Cn&&I.minFilter!==ti?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function A(I){let y=I.target;y.removeEventListener("dispose",A),O(y),y.isVideoTexture&&h.delete(y)}function N(I){let y=I.target;y.removeEventListener("dispose",N),b(y)}function O(I){let y=n.get(I);if(y.__webglInit===void 0)return;let W=I.source,j=d.get(W);if(j){let pt=j[y.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&w(I),Object.keys(j).length===0&&d.delete(W)}n.remove(I)}function w(I){let y=n.get(I);i.deleteTexture(y.__webglTexture);let W=I.source,j=d.get(W);delete j[y.__cacheKey],o.memory.textures--}function b(I){let y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let pt=0;pt<y.__webglFramebuffer[j].length;pt++)i.deleteFramebuffer(y.__webglFramebuffer[j][pt]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let W=I.textures;for(let j=0,pt=W.length;j<pt;j++){let P=n.get(W[j]);P.__webglTexture&&(i.deleteTexture(P.__webglTexture),o.memory.textures--),n.remove(W[j])}n.remove(I)}let U=0;function J(){U=0}function Q(){let I=U;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),U+=1,I}function tt(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function B(I,y){let W=n.get(I);if(I.isVideoTexture&&wt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){let j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(W,I,y);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+y)}function G(I,y){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){ot(W,I,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+y)}function k(I,y){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){ot(W,I,y);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+y)}function z(I,y){let W=n.get(I);if(I.version>0&&W.__version!==I.version){gt(W,I,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+y)}let ft={[ca]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},xt={[Cn]:i.NEAREST,[ad]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},Nt={[ud]:i.NEVER,[_d]:i.ALWAYS,[dd]:i.LESS,[$c]:i.LEQUAL,[fd]:i.EQUAL,[gd]:i.GEQUAL,[pd]:i.GREATER,[md]:i.NOTEQUAL};function qt(I,y){if(y.type===ri&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ti||y.magFilter===$a||y.magFilter===po||y.magFilter===Zi||y.minFilter===ti||y.minFilter===$a||y.minFilter===po||y.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ft[y.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ft[y.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ft[y.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,xt[y.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,xt[y.minFilter]),y.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Cn||y.minFilter!==po&&y.minFilter!==Zi||y.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function jt(I,y){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",A));let j=y.source,pt=d.get(j);pt===void 0&&(pt={},d.set(j,pt));let P=tt(y);if(P!==I.__cacheKey){pt[P]===void 0&&(pt[P]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),pt[P].usedTimes++;let F=pt[I.__cacheKey];F!==void 0&&(pt[I.__cacheKey].usedTimes--,F.usedTimes===0&&w(y)),I.__cacheKey=P,I.__webglTexture=pt[P].texture}return W}function ue(I,y,W){return Math.floor(Math.floor(I/W)/y)}function se(I,y,W,j){let P=I.updateRanges;if(P.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,W,j,y.data);else{P.sort((ct,Tt)=>ct.start-Tt.start);let F=0;for(let ct=1;ct<P.length;ct++){let Tt=P[F],zt=P[ct],Gt=Tt.start+Tt.count,Dt=ue(zt.start,y.width,4),le=ue(Tt.start,y.width,4);zt.start<=Gt+1&&Dt===le&&ue(zt.start+zt.count-1,y.width,4)===Dt?Tt.count=Math.max(Tt.count,zt.start+zt.count-Tt.start):(++F,P[F]=zt)}P.length=F+1;let q=i.getParameter(i.UNPACK_ROW_LENGTH),dt=i.getParameter(i.UNPACK_SKIP_PIXELS),_t=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ct=0,Tt=P.length;ct<Tt;ct++){let zt=P[ct],Gt=Math.floor(zt.start/4),Dt=Math.ceil(zt.count/4),le=Gt%y.width,H=Math.floor(Gt/y.width),Pt=Dt,Lt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,le),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,le,H,Pt,Lt,W,j,y.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,q),i.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function ot(I,y,W){let j=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=i.TEXTURE_3D);let pt=jt(I,y),P=y.source;e.bindTexture(j,I.__webglTexture,i.TEXTURE0+W);let F=n.get(P);if(P.version!==F.__version||pt===!0){e.activeTexture(i.TEXTURE0+W);let q=Re.getPrimaries(Re.workingColorSpace),dt=y.colorSpace===Di?null:Re.getPrimaries(y.colorSpace),_t=y.colorSpace===Di||q===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let ct=x(y.image,!1,s.maxTextureSize);ct=ne(y,ct);let Tt=r.convert(y.format,y.colorSpace),zt=r.convert(y.type),Gt=S(y.internalFormat,Tt,zt,y.colorSpace,y.isVideoTexture);qt(j,y);let Dt,le=y.mipmaps,H=y.isVideoTexture!==!0,Pt=F.__version===void 0||pt===!0,Lt=P.dataReady,Xt=D(y,ct);if(y.isDepthTexture)Gt=v(y.format===dr,y.type),Pt&&(H?e.texStorage2D(i.TEXTURE_2D,1,Gt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,Tt,zt,null));else if(y.isDataTexture)if(le.length>0){H&&Pt&&e.texStorage2D(i.TEXTURE_2D,Xt,Gt,le[0].width,le[0].height);for(let Rt=0,Mt=le.length;Rt<Mt;Rt++)Dt=le[Rt],H?Lt&&e.texSubImage2D(i.TEXTURE_2D,Rt,0,0,Dt.width,Dt.height,Tt,zt,Dt.data):e.texImage2D(i.TEXTURE_2D,Rt,Gt,Dt.width,Dt.height,0,Tt,zt,Dt.data);y.generateMipmaps=!1}else H?(Pt&&e.texStorage2D(i.TEXTURE_2D,Xt,Gt,ct.width,ct.height),Lt&&se(y,ct,Tt,zt)):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,Tt,zt,ct.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){H&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Gt,le[0].width,le[0].height,ct.depth);for(let Rt=0,Mt=le.length;Rt<Mt;Rt++)if(Dt=le[Rt],y.format!==Wn)if(Tt!==null)if(H){if(Lt)if(y.layerUpdates.size>0){let Zt=rh(Dt.width,Dt.height,y.format,y.type);for(let ie of y.layerUpdates){let Fe=Dt.data.subarray(ie*Zt/Dt.data.BYTES_PER_ELEMENT,(ie+1)*Zt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Rt,0,0,ie,Dt.width,Dt.height,1,Tt,Fe)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Rt,0,0,0,Dt.width,Dt.height,ct.depth,Tt,Dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Rt,Gt,Dt.width,Dt.height,ct.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Rt,0,0,0,Dt.width,Dt.height,ct.depth,Tt,zt,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Rt,Gt,Dt.width,Dt.height,ct.depth,0,Tt,zt,Dt.data)}else{H&&Pt&&e.texStorage2D(i.TEXTURE_2D,Xt,Gt,le[0].width,le[0].height);for(let Rt=0,Mt=le.length;Rt<Mt;Rt++)Dt=le[Rt],y.format!==Wn?Tt!==null?H?Lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Rt,0,0,Dt.width,Dt.height,Tt,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,Rt,Gt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Lt&&e.texSubImage2D(i.TEXTURE_2D,Rt,0,0,Dt.width,Dt.height,Tt,zt,Dt.data):e.texImage2D(i.TEXTURE_2D,Rt,Gt,Dt.width,Dt.height,0,Tt,zt,Dt.data)}else if(y.isDataArrayTexture)if(H){if(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Gt,ct.width,ct.height,ct.depth),Lt)if(y.layerUpdates.size>0){let Rt=rh(ct.width,ct.height,y.format,y.type);for(let Mt of y.layerUpdates){let Zt=ct.data.subarray(Mt*Rt/ct.data.BYTES_PER_ELEMENT,(Mt+1)*Rt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,ct.width,ct.height,1,Tt,zt,Zt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Tt,zt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,ct.width,ct.height,ct.depth,0,Tt,zt,ct.data);else if(y.isData3DTexture)H?(Pt&&e.texStorage3D(i.TEXTURE_3D,Xt,Gt,ct.width,ct.height,ct.depth),Lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Tt,zt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,ct.width,ct.height,ct.depth,0,Tt,zt,ct.data);else if(y.isFramebufferTexture){if(Pt)if(H)e.texStorage2D(i.TEXTURE_2D,Xt,Gt,ct.width,ct.height);else{let Rt=ct.width,Mt=ct.height;for(let Zt=0;Zt<Xt;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,Gt,Rt,Mt,0,Tt,zt,null),Rt>>=1,Mt>>=1}}else if(le.length>0){if(H&&Pt){let Rt=Ut(le[0]);e.texStorage2D(i.TEXTURE_2D,Xt,Gt,Rt.width,Rt.height)}for(let Rt=0,Mt=le.length;Rt<Mt;Rt++)Dt=le[Rt],H?Lt&&e.texSubImage2D(i.TEXTURE_2D,Rt,0,0,Tt,zt,Dt):e.texImage2D(i.TEXTURE_2D,Rt,Gt,Tt,zt,Dt);y.generateMipmaps=!1}else if(H){if(Pt){let Rt=Ut(ct);e.texStorage2D(i.TEXTURE_2D,Xt,Gt,Rt.width,Rt.height)}Lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,zt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Tt,zt,ct);_(y)&&m(j),F.__version=P.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function gt(I,y,W){if(y.image.length!==6)return;let j=jt(I,y),pt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);let P=n.get(pt);if(pt.version!==P.__version||j===!0){e.activeTexture(i.TEXTURE0+W);let F=Re.getPrimaries(Re.workingColorSpace),q=y.colorSpace===Di?null:Re.getPrimaries(y.colorSpace),dt=y.colorSpace===Di||F===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let _t=y.isCompressedTexture||y.image[0].isCompressedTexture,ct=y.image[0]&&y.image[0].isDataTexture,Tt=[];for(let Mt=0;Mt<6;Mt++)!_t&&!ct?Tt[Mt]=x(y.image[Mt],!0,s.maxCubemapSize):Tt[Mt]=ct?y.image[Mt].image:y.image[Mt],Tt[Mt]=ne(y,Tt[Mt]);let zt=Tt[0],Gt=r.convert(y.format,y.colorSpace),Dt=r.convert(y.type),le=S(y.internalFormat,Gt,Dt,y.colorSpace),H=y.isVideoTexture!==!0,Pt=P.__version===void 0||j===!0,Lt=pt.dataReady,Xt=D(y,zt);qt(i.TEXTURE_CUBE_MAP,y);let Rt;if(_t){H&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Xt,le,zt.width,zt.height);for(let Mt=0;Mt<6;Mt++){Rt=Tt[Mt].mipmaps;for(let Zt=0;Zt<Rt.length;Zt++){let ie=Rt[Zt];y.format!==Wn?Gt!==null?H?Lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt,0,0,ie.width,ie.height,Gt,ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt,le,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt,0,0,ie.width,ie.height,Gt,Dt,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt,le,ie.width,ie.height,0,Gt,Dt,ie.data)}}}else{if(Rt=y.mipmaps,H&&Pt){Rt.length>0&&Xt++;let Mt=Ut(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Xt,le,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(ct){H?Lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Tt[Mt].width,Tt[Mt].height,Gt,Dt,Tt[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,le,Tt[Mt].width,Tt[Mt].height,0,Gt,Dt,Tt[Mt].data);for(let Zt=0;Zt<Rt.length;Zt++){let Fe=Rt[Zt].image[Mt].image;H?Lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt+1,0,0,Fe.width,Fe.height,Gt,Dt,Fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt+1,le,Fe.width,Fe.height,0,Gt,Dt,Fe.data)}}else{H?Lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Gt,Dt,Tt[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,le,Gt,Dt,Tt[Mt]);for(let Zt=0;Zt<Rt.length;Zt++){let ie=Rt[Zt];H?Lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt+1,0,0,Gt,Dt,ie.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt+1,le,Gt,Dt,ie.image[Mt])}}}_(y)&&m(i.TEXTURE_CUBE_MAP),P.__version=pt.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Bt(I,y,W,j,pt,P){let F=r.convert(W.format,W.colorSpace),q=r.convert(W.type),dt=S(W.internalFormat,F,q,W.colorSpace),_t=n.get(y),ct=n.get(W);if(ct.__renderTarget=y,!_t.__hasExternalTextures){let Tt=Math.max(1,y.width>>P),zt=Math.max(1,y.height>>P);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,P,dt,Tt,zt,y.depth,0,F,q,null):e.texImage2D(pt,P,dt,Tt,zt,0,F,q,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),lt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,pt,ct.__webglTexture,0,bt(y)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,pt,ct.__webglTexture,P),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(I,y,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),y.depthBuffer){let j=y.depthTexture,pt=j&&j.isDepthTexture?j.type:null,P=v(y.stencilBuffer,pt),F=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=bt(y);lt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,P,y.width,y.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,P,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,P,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,I)}else{let j=y.textures;for(let pt=0;pt<j.length;pt++){let P=j[pt],F=r.convert(P.format,P.colorSpace),q=r.convert(P.type),dt=S(P.internalFormat,F,q,P.colorSpace),_t=bt(y);W&&lt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,dt,y.width,y.height):lt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,dt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,dt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(I,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);let pt=j.__webglTexture,P=bt(y);if(y.depthTexture.format===Zs)lt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(y.depthTexture.format===dr)lt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function ae(I){let y=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let j=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){let pt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",pt)};j.addEventListener("dispose",pt),y.__depthDisposeCallback=pt}y.__boundDepthTexture=j}if(I.depthTexture&&!y.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");let j=I.texture.mipmaps;j&&j.length>0?Vt(y.__webglFramebuffer[0],I):Vt(y.__webglFramebuffer,I)}else if(W){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=i.createRenderbuffer(),St(y.__webglDepthbuffer[j],I,!1);else{let pt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=y.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,P)}}else{let j=I.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),St(y.__webglDepthbuffer,I,!1);else{let pt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,P)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(I,y,W){let j=n.get(I);y!==void 0&&Bt(j.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ae(I)}function L(I){let y=I.texture,W=n.get(I),j=n.get(y);I.addEventListener("dispose",N);let pt=I.textures,P=I.isWebGLCubeRenderTarget===!0,F=pt.length>1;if(F||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,o.memory.textures++),P){W.__webglFramebuffer=[];for(let q=0;q<6;q++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[q]=[];for(let dt=0;dt<y.mipmaps.length;dt++)W.__webglFramebuffer[q][dt]=i.createFramebuffer()}else W.__webglFramebuffer[q]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let q=0;q<y.mipmaps.length;q++)W.__webglFramebuffer[q]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(F)for(let q=0,dt=pt.length;q<dt;q++){let _t=n.get(pt[q]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&lt(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let q=0;q<pt.length;q++){let dt=pt[q];W.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[q]);let _t=r.convert(dt.format,dt.colorSpace),ct=r.convert(dt.type),Tt=S(dt.internalFormat,_t,ct,dt.colorSpace,I.isXRRenderTarget===!0),zt=bt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Tt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,W.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),St(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),qt(i.TEXTURE_CUBE_MAP,y);for(let q=0;q<6;q++)if(y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)Bt(W.__webglFramebuffer[q][dt],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,dt);else Bt(W.__webglFramebuffer[q],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);_(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(F){for(let q=0,dt=pt.length;q<dt;q++){let _t=pt[q],ct=n.get(_t),Tt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Tt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,ct.__webglTexture),qt(Tt,_t),Bt(W.__webglFramebuffer,I,_t,i.COLOR_ATTACHMENT0+q,Tt,0),_(_t)&&m(Tt)}e.unbindTexture()}else{let q=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(q=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,j.__webglTexture),qt(q,y),y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)Bt(W.__webglFramebuffer[dt],I,y,i.COLOR_ATTACHMENT0,q,dt);else Bt(W.__webglFramebuffer,I,y,i.COLOR_ATTACHMENT0,q,0);_(y)&&m(q),e.unbindTexture()}I.depthBuffer&&ae(I)}function Et(I){let y=I.textures;for(let W=0,j=y.length;W<j;W++){let pt=y[W];if(_(pt)){let P=C(I),F=n.get(pt).__webglTexture;e.bindTexture(P,F),m(P),e.unbindTexture()}}}let mt=[],at=[];function ut(I){if(I.samples>0){if(lt(I)===!1){let y=I.textures,W=I.width,j=I.height,pt=i.COLOR_BUFFER_BIT,P=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=n.get(I),q=y.length>1;if(q)for(let _t=0;_t<y.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer);let dt=I.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,F.__webglColorRenderbuffer[_t]);let ct=n.get(y[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,W,j,0,0,W,j,pt,i.NEAREST),l===!0&&(mt.length=0,at.length=0,mt.push(i.COLOR_ATTACHMENT0+_t),I.depthBuffer&&I.resolveDepthBuffer===!1&&(mt.push(P),at.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,at)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let _t=0;_t<y.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,F.__webglColorRenderbuffer[_t]);let ct=n.get(y[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function bt(I){return Math.min(s.maxSamples,I.samples)}function lt(I){let y=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function wt(I){let y=o.render.frame;h.get(I)!==y&&(h.set(I,y),I.update())}function ne(I,y){let W=I.colorSpace,j=I.format,pt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==as&&W!==Di&&(Re.getTransfer(W)===Ue?(j!==Wn||pt!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),y}function Ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=J,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=re,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=lt}function mx(i,t){function e(n,s=Di){let r,o=Re.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return i.BYTE;if(n===Wc)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===hr)return i.HALF_FLOAT;if(n===qc)return i.ALPHA;if(n===Zc)return i.RGB;if(n===Wn)return i.RGBA;if(n===Zs)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===el)return i.RED;if(n===nl)return i.RED_INTEGER;if(n===Kc)return i.RG;if(n===il)return i.RG_INTEGER;if(n===sl)return i.RGBA_INTEGER;if(n===mo||n===go||n===_o||n===xo)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===ol||n===al||n===ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===hl)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ul)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===yl||n===vl||n===Ml||n===El||n===Sl||n===bl||n===wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ml)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tl||n===Al||n===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tl)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Pl||n===Il||n===Dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
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

}`,xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ei({vertexShader:gx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yh=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",_=new xh,m={},C=e.getContextAttributes(),S=null,v=null,D=[],A=[],N=new vt,O=null,w=new hn;w.viewport=new qe;let b=new hn;b.viewport=new qe;let U=[w,b],J=new ka,Q=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let gt=D[ot];return gt===void 0&&(gt=new js,D[ot]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(ot){let gt=D[ot];return gt===void 0&&(gt=new js,D[ot]=gt),gt.getGripSpace()},this.getHand=function(ot){let gt=D[ot];return gt===void 0&&(gt=new js,D[ot]=gt),gt.getHandSpace()};function B(ot){let gt=A.indexOf(ot.inputSource);if(gt===-1)return;let Bt=D[gt];Bt!==void 0&&(Bt.update(ot.inputSource,ot.frame,c||o),Bt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",k);for(let ot=0;ot<D.length;ot++){let gt=A[ot];gt!==null&&(A[ot]=null,D[ot].disconnect(gt))}Q=null,tt=null,_.reset();for(let ot in m)delete m[ot];t.setRenderTarget(S),p=null,d=null,f=null,s=null,v=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",k),C.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(N),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Bt=null,St=null,Vt=null;C.depth&&(Vt=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Bt=C.stencil?dr:Zs,St=C.stencil?ur:Ki);let ae={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(ae),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new di(d.textureWidth,d.textureHeight,{format:Wn,type:si,depthTexture:new qr(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,Bt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Bt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new di(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(ot){for(let gt=0;gt<ot.removed.length;gt++){let Bt=ot.removed[gt],St=A.indexOf(Bt);St>=0&&(A[St]=null,D[St].disconnect(Bt))}for(let gt=0;gt<ot.added.length;gt++){let Bt=ot.added[gt],St=A.indexOf(Bt);if(St===-1){for(let ae=0;ae<D.length;ae++)if(ae>=A.length){A.push(Bt),St=ae;break}else if(A[ae]===null){A[ae]=Bt,St=ae;break}if(St===-1)break}let Vt=D[St];Vt&&Vt.connect(Bt)}}let z=new R,ft=new R;function xt(ot,gt,Bt){z.setFromMatrixPosition(gt.matrixWorld),ft.setFromMatrixPosition(Bt.matrixWorld);let St=z.distanceTo(ft),Vt=gt.projectionMatrix.elements,ae=Bt.projectionMatrix.elements,re=Vt[14]/(Vt[10]-1),L=Vt[14]/(Vt[10]+1),Et=(Vt[9]+1)/Vt[5],mt=(Vt[9]-1)/Vt[5],at=(Vt[8]-1)/Vt[0],ut=(ae[8]+1)/ae[0],bt=re*at,lt=re*ut,wt=St/(-at+ut),ne=wt*-at;if(gt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(ne),ot.translateZ(wt),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Vt[10]===-1)ot.projectionMatrix.copy(gt.projectionMatrix),ot.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let Ut=re+wt,I=L+wt,y=bt-ne,W=lt+(St-ne),j=Et*L/I*Ut,pt=mt*L/I*Ut;ot.projectionMatrix.makePerspective(y,W,j,pt,Ut,I),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function Nt(ot,gt){gt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(gt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let gt=ot.near,Bt=ot.far;_.texture!==null&&(_.depthNear>0&&(gt=_.depthNear),_.depthFar>0&&(Bt=_.depthFar)),J.near=b.near=w.near=gt,J.far=b.far=w.far=Bt,(Q!==J.near||tt!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),Q=J.near,tt=J.far),J.layers.mask=ot.layers.mask|6,w.layers.mask=J.layers.mask&3,b.layers.mask=J.layers.mask&5;let St=ot.parent,Vt=J.cameras;Nt(J,St);for(let ae=0;ae<Vt.length;ae++)Nt(Vt[ae],St);Vt.length===2?xt(J,w,b):J.projectionMatrix.copy(w.projectionMatrix),qt(ot,J,St)};function qt(ot,gt,Bt){Bt===null?ot.matrix.copy(gt.matrixWorld):(ot.matrix.copy(Bt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(gt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(gt.projectionMatrix),ot.projectionMatrixInverse.copy(gt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=ls*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ot){l=ot,d!==null&&(d.fixedFoveation=ot),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ot)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(J)},this.getCameraTexture=function(ot){return m[ot]};let jt=null;function ue(ot,gt){if(h=gt.getViewerPose(c||o),g=gt,h!==null){let Bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let St=!1;Bt.length!==J.cameras.length&&(J.cameras.length=0,St=!0);for(let L=0;L<Bt.length;L++){let Et=Bt[L],mt=null;if(p!==null)mt=p.getViewport(Et);else{let ut=f.getViewSubImage(d,Et);mt=ut.viewport,L===0&&(t.setRenderTargetTextures(v,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(v))}let at=U[L];at===void 0&&(at=new hn,at.layers.enable(L),at.viewport=new qe,U[L]=at),at.matrix.fromArray(Et.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Et.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(mt.x,mt.y,mt.width,mt.height),L===0&&(J.matrix.copy(at.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),St===!0&&J.cameras.push(at)}let Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let L=f.getDepthInformation(Bt[0]);L&&L.isValid&&L.texture&&_.init(L,s.renderState)}if(Vt&&Vt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let L=0;L<Bt.length;L++){let Et=Bt[L].camera;if(Et){let mt=m[Et];mt||(mt=new Zr,m[Et]=mt);let at=f.getCameraImage(Et);mt.sourceTexture=at}}}}for(let Bt=0;Bt<D.length;Bt++){let St=A[Bt],Vt=D[Bt];St!==null&&Vt!==void 0&&Vt.update(St,gt,c||o)}jt&&jt(ot,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),g=null}let se=new $d;se.setAnimationLoop(ue),this.setAnimationLoop=function(ot){jt=ot},this.dispose=function(){}}},xs=new dn,xx=new Ce;function yx(i,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,eh(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,C,S,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),f(_,m)):m.isMeshPhongMaterial?(r(_,m),h(_,m)):m.isMeshStandardMaterial?(r(_,m),d(_,m),m.isMeshPhysicalMaterial&&p(_,m,v)):m.isMeshMatcapMaterial?(r(_,m),g(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),x(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,C,S):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===An&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===An&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let C=t.get(m),S=C.envMap,v=C.envMapRotation;S&&(_.envMap.value=S,xs.copy(v),xs.x*=-1,xs.y*=-1,xs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),_.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(xs)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,C,S){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*C,_.scale.value=S*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,C){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===An&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function x(_,m){let C=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,S){let v=S.program;n.uniformBlockBinding(C,v)}function c(C,S){let v=s[C.id];v===void 0&&(g(C),v=h(C),s[C.id]=v,C.addEventListener("dispose",_));let D=S.program;n.updateUBOMapping(C,D);let A=t.render.frame;r[C.id]!==A&&(d(C),r[C.id]=A)}function h(C){let S=f();C.__bindingPointIndex=S;let v=i.createBuffer(),D=C.__size,A=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function f(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let S=s[C.id],v=C.uniforms,D=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,N=v.length;A<N;A++){let O=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,b=O.length;w<b;w++){let U=O[w];if(p(U,A,w,D)===!0){let J=U.__offset,Q=Array.isArray(U.value)?U.value:[U.value],tt=0;for(let B=0;B<Q.length;B++){let G=Q[B],k=x(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,J+tt,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,tt),tt+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(C,S,v,D){let A=C.value,N=S+"_"+v;if(D[N]===void 0)return typeof A=="number"||typeof A=="boolean"?D[N]=A:D[N]=A.clone(),!0;{let O=D[N];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return D[N]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(C){let S=C.uniforms,v=0,D=16;for(let N=0,O=S.length;N<O;N++){let w=Array.isArray(S[N])?S[N]:[S[N]];for(let b=0,U=w.length;b<U;b++){let J=w[b],Q=Array.isArray(J.value)?J.value:[J.value];for(let tt=0,B=Q.length;tt<B;tt++){let G=Q[tt],k=x(G),z=v%D,ft=z%k.boundary,xt=z+ft;v+=ft,xt!==0&&D-xt<k.storage&&(v+=D-xt),J.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=v,v+=k.storage}}}let A=v%D;return A>0&&(v+=D-A),C.__size=v,C.__cache={},this}function x(C){let S={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(S.boundary=4,S.storage=4):C.isVector2?(S.boundary=8,S.storage=8):C.isVector3||C.isColor?(S.boundary=16,S.storage=12):C.isVector4?(S.boundary=16,S.storage=16):C.isMatrix3?(S.boundary=48,S.storage=48):C.isMatrix4?(S.boundary=64,S.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),S}function _(C){let S=C.target;S.removeEventListener("dispose",_);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Ol=class{constructor(t={}){let{canvas:e=xd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),_=null,m=null,C=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,D=!1;this._outputColorSpace=on;let A=0,N=0,O=null,w=-1,b=null,U=new qe,J=new qe,Q=null,tt=new Me(0),B=0,G=e.width,k=e.height,z=1,ft=null,xt=null,Nt=new qe(0,0,G,k),qt=new qe(0,0,G,k),jt=!1,ue=new er,se=!1,ot=!1,gt=new Ce,Bt=new R,St=new qe,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function re(){return O===null?z:1}let L=n;function Et(T,Y){return e.getContext(T,Y)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),L===null){let Y="webgl2";if(L=Et(Y,T),L===null)throw Et(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let mt,at,ut,bt,lt,wt,ne,Ut,I,y,W,j,pt,P,F,q,dt,_t,ct,Tt,zt,Gt,Dt,le;function H(){mt=new B_(L),mt.init(),Gt=new mx(L,mt),at=new I_(L,mt,t,Gt),ut=new fx(L,mt),at.reversedDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),bt=new k_(L),lt=new tx,wt=new px(L,mt,ut,lt,at,Gt,bt),ne=new L_(v),Ut=new O_(v),I=new qp(L),Dt=new C_(L,I),y=new z_(L,I,bt,Dt),W=new G_(L,y,I,bt),ct=new V_(L,at,wt),q=new D_(lt),j=new Q0(v,ne,Ut,mt,at,Dt,q),pt=new yx(v,lt),P=new nx,F=new lx(mt),_t=new R_(v,ne,Ut,ut,W,p,l),dt=new ux(v,W,at),le=new vx(L,bt,at,ut),Tt=new P_(L,mt,bt),zt=new H_(L,mt,bt),bt.programs=j.programs,v.capabilities=at,v.extensions=mt,v.properties=lt,v.renderLists=P,v.shadowMap=dt,v.state=ut,v.info=bt}H();let Pt=new yh(v,L);this.xr=Pt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(G,k,!1))},this.getSize=function(T){return T.set(G,k)},this.setSize=function(T,Y,et=!0){if(Pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,k=Y,e.width=Math.floor(T*z),e.height=Math.floor(Y*z),et===!0&&(e.style.width=T+"px",e.style.height=Y+"px"),this.setViewport(0,0,T,Y)},this.getDrawingBufferSize=function(T){return T.set(G*z,k*z).floor()},this.setDrawingBufferSize=function(T,Y,et){G=T,k=Y,z=et,e.width=Math.floor(T*et),e.height=Math.floor(Y*et),this.setViewport(0,0,T,Y)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(Nt)},this.setViewport=function(T,Y,et,nt){T.isVector4?Nt.set(T.x,T.y,T.z,T.w):Nt.set(T,Y,et,nt),ut.viewport(U.copy(Nt).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(qt)},this.setScissor=function(T,Y,et,nt){T.isVector4?qt.set(T.x,T.y,T.z,T.w):qt.set(T,Y,et,nt),ut.scissor(J.copy(qt).multiplyScalar(z).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(T){ut.setScissorTest(jt=T)},this.setOpaqueSort=function(T){ft=T},this.setTransparentSort=function(T){xt=T},this.getClearColor=function(T){return T.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(T=!0,Y=!0,et=!0){let nt=0;if(T){let Z=!1;if(O!==null){let Ct=O.texture.format;Z=Ct===sl||Ct===il||Ct===nl}if(Z){let Ct=O.texture.type,Ft=Ct===si||Ct===Ki||Ct===cr||Ct===ur||Ct===Qa||Ct===tl,Yt=_t.getClearColor(),Ot=_t.getClearAlpha(),Qt=Yt.r,ce=Yt.g,te=Yt.b;Ft?(g[0]=Qt,g[1]=ce,g[2]=te,g[3]=Ot,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Qt,x[1]=ce,x[2]=te,x[3]=Ot,L.clearBufferiv(L.COLOR,0,x))}else nt|=L.COLOR_BUFFER_BIT}Y&&(nt|=L.DEPTH_BUFFER_BIT),et&&(nt|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),_t.dispose(),P.dispose(),F.dispose(),lt.dispose(),ne.dispose(),Ut.dispose(),W.dispose(),Dt.dispose(),le.dispose(),j.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Jt),Pt.removeEventListener("sessionend",Ln),me.stop()};function Lt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let T=bt.autoReset,Y=dt.enabled,et=dt.autoUpdate,nt=dt.needsUpdate,Z=dt.type;H(),bt.autoReset=T,dt.enabled=Y,dt.autoUpdate=et,dt.needsUpdate=nt,dt.type=Z}function Rt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Mt(T){let Y=T.target;Y.removeEventListener("dispose",Mt),Zt(Y)}function Zt(T){ie(T),lt.remove(T)}function ie(T){let Y=lt.get(T).programs;Y!==void 0&&(Y.forEach(function(et){j.releaseProgram(et)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,Y,et,nt,Z,Ct){Y===null&&(Y=Vt);let Ft=Z.isMesh&&Z.matrixWorld.determinant()<0,Yt=Xn(T,Y,et,nt,Z);ut.setMaterial(nt,Ft);let Ot=et.index,Qt=1;if(nt.wireframe===!0){if(Ot=y.getWireframeAttribute(et),Ot===void 0)return;Qt=2}let ce=et.drawRange,te=et.attributes.position,ve=ce.start*Qt,Te=(ce.start+ce.count)*Qt;Ct!==null&&(ve=Math.max(ve,Ct.start*Qt),Te=Math.min(Te,(Ct.start+Ct.count)*Qt)),Ot!==null?(ve=Math.max(ve,0),Te=Math.min(Te,Ot.count)):te!=null&&(ve=Math.max(ve,0),Te=Math.min(Te,te.count));let fe=Te-ve;if(fe<0||fe===1/0)return;Dt.setup(Z,nt,Yt,et,Ot);let Kt,be=Tt;if(Ot!==null&&(Kt=I.get(Ot),be=zt,be.setIndex(Kt)),Z.isMesh)nt.wireframe===!0?(ut.setLineWidth(nt.wireframeLinewidth*re()),be.setMode(L.LINES)):be.setMode(L.TRIANGLES);else if(Z.isLine){let $t=nt.linewidth;$t===void 0&&($t=1),ut.setLineWidth($t*re()),Z.isLineSegments?be.setMode(L.LINES):Z.isLineLoop?be.setMode(L.LINE_LOOP):be.setMode(L.LINE_STRIP)}else Z.isPoints?be.setMode(L.POINTS):Z.isSprite&&be.setMode(L.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))be.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let $t=Z._multiDrawStarts,_e=Z._multiDrawCounts,Ae=Z._multiDrawCount,nn=Ot?I.get(Ot).bytesPerElement:1,zn=lt.get(nt).currentProgram.getUniforms();for(let fn=0;fn<Ae;fn++)zn.setValue(L,"_gl_DrawID",fn),be.render($t[fn]/nn,_e[fn])}else if(Z.isInstancedMesh)be.renderInstances(ve,fe,Z.count);else if(et.isInstancedBufferGeometry){let $t=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,_e=Math.min(et.instanceCount,$t);be.renderInstances(ve,fe,_e)}else be.render(ve,fe)};function Fe(T,Y,et){T.transparent===!0&&T.side===ln&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,vn(T,Y,et),T.side=wi,T.needsUpdate=!0,vn(T,Y,et),T.side=ln):vn(T,Y,et)}this.compile=function(T,Y,et=null){et===null&&(et=T),m=F.get(et),m.init(Y),S.push(m),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),T!==et&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();let nt=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ct=Z.material;if(Ct)if(Array.isArray(Ct))for(let Ft=0;Ft<Ct.length;Ft++){let Yt=Ct[Ft];Fe(Yt,et,Z),nt.add(Yt)}else Fe(Ct,et,Z),nt.add(Ct)}),m=S.pop(),nt},this.compileAsync=function(T,Y,et=null){let nt=this.compile(T,Y,et);return new Promise(Z=>{function Ct(){if(nt.forEach(function(Ft){lt.get(Ft).currentProgram.isReady()&&nt.delete(Ft)}),nt.size===0){Z(T);return}setTimeout(Ct,10)}mt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Ie=null;function Bn(T){Ie&&Ie(T)}function Jt(){me.stop()}function Ln(){me.start()}let me=new $d;me.setAnimationLoop(Bn),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(T){Ie=T,Pt.setAnimationLoop(T),T===null?me.stop():me.start()},Pt.addEventListener("sessionstart",Jt),Pt.addEventListener("sessionend",Ln),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(Y),Y=Pt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,Y,O),m=F.get(T,S.length),m.init(Y),S.push(m),gt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ue.setFromProjectionMatrix(gt,Qn,Y.reversedDepth),ot=this.localClippingEnabled,se=q.init(this.clippingPlanes,ot),_=P.get(T,C.length),_.init(),C.push(_),Pt.enabled===!0&&Pt.isPresenting===!0){let Ct=v.xr.getDepthSensingMesh();Ct!==null&&ht(Ct,Y,-1/0,v.sortObjects)}ht(T,Y,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(ft,xt),ae=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,ae&&_t.addToRenderList(_,T),this.info.render.frame++,se===!0&&q.beginShadows();let et=m.state.shadowsArray;dt.render(et,T,Y),se===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset();let nt=_.opaque,Z=_.transmissive;if(m.setupLights(),Y.isArrayCamera){let Ct=Y.cameras;if(Z.length>0)for(let Ft=0,Yt=Ct.length;Ft<Yt;Ft++){let Ot=Ct[Ft];wo(nt,Z,T,Ot)}ae&&_t.render(T);for(let Ft=0,Yt=Ct.length;Ft<Yt;Ft++){let Ot=Ct[Ft];ze(_,T,Ot,Ot.viewport)}}else Z.length>0&&wo(nt,Z,T,Y),ae&&_t.render(T),ze(_,T,Y);O!==null&&N===0&&(wt.updateMultisampleRenderTarget(O),wt.updateRenderTargetMipmap(O)),T.isScene===!0&&T.onAfterRender(v,T,Y),Dt.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(m=S[S.length-1],se===!0&&q.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,C.pop(),C.length>0?_=C[C.length-1]:_=null};function ht(T,Y,et,nt){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)et=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ue.intersectsSprite(T)){nt&&St.setFromMatrixPosition(T.matrixWorld).applyMatrix4(gt);let Ft=W.update(T),Yt=T.material;Yt.visible&&_.push(T,Ft,Yt,et,St.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ue.intersectsObject(T))){let Ft=W.update(T),Yt=T.material;if(nt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),St.copy(T.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),St.copy(Ft.boundingSphere.center)),St.applyMatrix4(T.matrixWorld).applyMatrix4(gt)),Array.isArray(Yt)){let Ot=Ft.groups;for(let Qt=0,ce=Ot.length;Qt<ce;Qt++){let te=Ot[Qt],ve=Yt[te.materialIndex];ve&&ve.visible&&_.push(T,Ft,ve,et,St.z,te)}}else Yt.visible&&_.push(T,Ft,Yt,et,St.z,null)}}let Ct=T.children;for(let Ft=0,Yt=Ct.length;Ft<Yt;Ft++)ht(Ct[Ft],Y,et,nt)}function ze(T,Y,et,nt){let Z=T.opaque,Ct=T.transmissive,Ft=T.transparent;m.setupLightsView(et),se===!0&&q.setGlobalState(v.clippingPlanes,et),nt&&ut.viewport(U.copy(nt)),Z.length>0&&we(Z,Y,et),Ct.length>0&&we(Ct,Y,et),Ft.length>0&&we(Ft,Y,et),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function wo(T,Y,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[nt.id]===void 0&&(m.state.transmissionRenderTarget[nt.id]=new di(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?hr:si,minFilter:Zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));let Ct=m.state.transmissionRenderTarget[nt.id],Ft=nt.viewport||U;Ct.setSize(Ft.z*v.transmissionResolutionScale,Ft.w*v.transmissionResolutionScale);let Yt=v.getRenderTarget(),Ot=v.getActiveCubeFace(),Qt=v.getActiveMipmapLevel();v.setRenderTarget(Ct),v.getClearColor(tt),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),ae&&_t.render(et);let ce=v.toneMapping;v.toneMapping=Ii;let te=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),m.setupLightsView(nt),se===!0&&q.setGlobalState(v.clippingPlanes,nt),we(T,et,nt),wt.updateMultisampleRenderTarget(Ct),wt.updateRenderTargetMipmap(Ct),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Te=0,fe=Y.length;Te<fe;Te++){let Kt=Y[Te],be=Kt.object,$t=Kt.geometry,_e=Kt.material,Ae=Kt.group;if(_e.side===ln&&be.layers.test(nt.layers)){let nn=_e.side;_e.side=An,_e.needsUpdate=!0,Se(be,et,nt,$t,_e,Ae),_e.side=nn,_e.needsUpdate=!0,ve=!0}}ve===!0&&(wt.updateMultisampleRenderTarget(Ct),wt.updateRenderTargetMipmap(Ct))}v.setRenderTarget(Yt,Ot,Qt),v.setClearColor(tt,B),te!==void 0&&(nt.viewport=te),v.toneMapping=ce}function we(T,Y,et){let nt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Ct=T.length;Z<Ct;Z++){let Ft=T[Z],Yt=Ft.object,Ot=Ft.geometry,Qt=Ft.group,ce=Ft.material;ce.allowOverride===!0&&nt!==null&&(ce=nt),Yt.layers.test(et.layers)&&Se(Yt,Y,et,Ot,ce,Qt)}}function Se(T,Y,et,nt,Z,Ct){T.onBeforeRender(v,Y,et,nt,Z,Ct),T.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(v,Y,et,nt,T,Ct),Z.transparent===!0&&Z.side===ln&&Z.forceSinglePass===!1?(Z.side=An,Z.needsUpdate=!0,v.renderBufferDirect(et,Y,nt,Z,T,Ct),Z.side=wi,Z.needsUpdate=!0,v.renderBufferDirect(et,Y,nt,Z,T,Ct),Z.side=ln):v.renderBufferDirect(et,Y,nt,Z,T,Ct),T.onAfterRender(v,Y,et,nt,Z,Ct)}function vn(T,Y,et){Y.isScene!==!0&&(Y=Vt);let nt=lt.get(T),Z=m.state.lights,Ct=m.state.shadowsArray,Ft=Z.state.version,Yt=j.getParameters(T,Z.state,Ct,Y,et),Ot=j.getProgramCacheKey(Yt),Qt=nt.programs;nt.environment=T.isMeshStandardMaterial?Y.environment:null,nt.fog=Y.fog,nt.envMap=(T.isMeshStandardMaterial?Ut:ne).get(T.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&T.envMap===null?Y.environmentRotation:T.envMapRotation,Qt===void 0&&(T.addEventListener("dispose",Mt),Qt=new Map,nt.programs=Qt);let ce=Qt.get(Ot);if(ce!==void 0){if(nt.currentProgram===ce&&nt.lightsStateVersion===Ft)return bs(T,Yt),ce}else Yt.uniforms=j.getUniforms(T),T.onBeforeCompile(Yt,v),ce=j.acquireProgram(Yt,Ot),Qt.set(Ot,ce),nt.uniforms=Yt.uniforms;let te=nt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(te.clippingPlanes=q.uniform),bs(T,Yt),nt.needsLights=xr(T),nt.lightsStateVersion=Ft,nt.needsLights&&(te.ambientLightColor.value=Z.state.ambient,te.lightProbe.value=Z.state.probe,te.directionalLights.value=Z.state.directional,te.directionalLightShadows.value=Z.state.directionalShadow,te.spotLights.value=Z.state.spot,te.spotLightShadows.value=Z.state.spotShadow,te.rectAreaLights.value=Z.state.rectArea,te.ltc_1.value=Z.state.rectAreaLTC1,te.ltc_2.value=Z.state.rectAreaLTC2,te.pointLights.value=Z.state.point,te.pointLightShadows.value=Z.state.pointShadow,te.hemisphereLights.value=Z.state.hemi,te.directionalShadowMap.value=Z.state.directionalShadowMap,te.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,te.spotShadowMap.value=Z.state.spotShadowMap,te.spotLightMatrix.value=Z.state.spotLightMatrix,te.spotLightMap.value=Z.state.spotLightMap,te.pointShadowMap.value=Z.state.pointShadowMap,te.pointShadowMatrix.value=Z.state.pointShadowMatrix),nt.currentProgram=ce,nt.uniformsList=null,ce}function Ss(T){if(T.uniformsList===null){let Y=T.currentProgram.getUniforms();T.uniformsList=mr.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function bs(T,Y){let et=lt.get(T);et.outputColorSpace=Y.outputColorSpace,et.batching=Y.batching,et.batchingColor=Y.batchingColor,et.instancing=Y.instancing,et.instancingColor=Y.instancingColor,et.instancingMorph=Y.instancingMorph,et.skinning=Y.skinning,et.morphTargets=Y.morphTargets,et.morphNormals=Y.morphNormals,et.morphColors=Y.morphColors,et.morphTargetsCount=Y.morphTargetsCount,et.numClippingPlanes=Y.numClippingPlanes,et.numIntersection=Y.numClipIntersection,et.vertexAlphas=Y.vertexAlphas,et.vertexTangents=Y.vertexTangents,et.toneMapping=Y.toneMapping}function Xn(T,Y,et,nt,Z){Y.isScene!==!0&&(Y=Vt),wt.resetTextureUnits();let Ct=Y.fog,Ft=nt.isMeshStandardMaterial?Y.environment:null,Yt=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:as,Ot=(nt.isMeshStandardMaterial?Ut:ne).get(nt.envMap||Ft),Qt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ce=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),te=!!et.morphAttributes.position,ve=!!et.morphAttributes.normal,Te=!!et.morphAttributes.color,fe=Ii;nt.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(fe=v.toneMapping);let Kt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,be=Kt!==void 0?Kt.length:0,$t=lt.get(nt),_e=m.state.lights;if(se===!0&&(ot===!0||T!==b)){let sn=T===b&&nt.id===w;q.setState(nt,T,sn)}let Ae=!1;nt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==_e.state.version||$t.outputColorSpace!==Yt||Z.isBatchedMesh&&$t.batching===!1||!Z.isBatchedMesh&&$t.batching===!0||Z.isBatchedMesh&&$t.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&$t.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&$t.instancing===!1||!Z.isInstancedMesh&&$t.instancing===!0||Z.isSkinnedMesh&&$t.skinning===!1||!Z.isSkinnedMesh&&$t.skinning===!0||Z.isInstancedMesh&&$t.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&$t.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&$t.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&$t.instancingMorph===!1&&Z.morphTexture!==null||$t.envMap!==Ot||nt.fog===!0&&$t.fog!==Ct||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==q.numPlanes||$t.numIntersection!==q.numIntersection)||$t.vertexAlphas!==Qt||$t.vertexTangents!==ce||$t.morphTargets!==te||$t.morphNormals!==ve||$t.morphColors!==Te||$t.toneMapping!==fe||$t.morphTargetsCount!==be)&&(Ae=!0):(Ae=!0,$t.__version=nt.version);let nn=$t.currentProgram;Ae===!0&&(nn=vn(nt,Y,Z));let zn=!1,fn=!1,xi=!1,Ve=nn.getUniforms(),Mn=$t.uniforms;if(ut.useProgram(nn.program)&&(zn=!0,fn=!0,xi=!0),nt.id!==w&&(w=nt.id,fn=!0),zn||b!==T){ut.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ve.setValue(L,"projectionMatrix",T.projectionMatrix),Ve.setValue(L,"viewMatrix",T.matrixWorldInverse);let cn=Ve.map.cameraPosition;cn!==void 0&&cn.setValue(L,Bt.setFromMatrixPosition(T.matrixWorld)),at.logarithmicDepthBuffer&&Ve.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ve.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,fn=!0,xi=!0)}if(Z.isSkinnedMesh){Ve.setOptional(L,Z,"bindMatrix"),Ve.setOptional(L,Z,"bindMatrixInverse");let sn=Z.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ve.setValue(L,"boneTexture",sn.boneTexture,wt))}Z.isBatchedMesh&&(Ve.setOptional(L,Z,"batchingTexture"),Ve.setValue(L,"batchingTexture",Z._matricesTexture,wt),Ve.setOptional(L,Z,"batchingIdTexture"),Ve.setValue(L,"batchingIdTexture",Z._indirectTexture,wt),Ve.setOptional(L,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ve.setValue(L,"batchingColorTexture",Z._colorsTexture,wt));let En=et.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&ct.update(Z,et,nn),(fn||$t.receiveShadow!==Z.receiveShadow)&&($t.receiveShadow=Z.receiveShadow,Ve.setValue(L,"receiveShadow",Z.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Mn.envMap.value=Ot,Mn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&Y.environment!==null&&(Mn.envMapIntensity.value=Y.environmentIntensity),fn&&(Ve.setValue(L,"toneMappingExposure",v.toneMappingExposure),$t.needsLights&&_r(Mn,xi),Ct&&nt.fog===!0&&pt.refreshFogUniforms(Mn,Ct),pt.refreshMaterialUniforms(Mn,nt,z,k,m.state.transmissionRenderTarget[T.id]),mr.upload(L,Ss($t),Mn,wt)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(mr.upload(L,Ss($t),Mn,wt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ve.setValue(L,"center",Z.center),Ve.setValue(L,"modelViewMatrix",Z.modelViewMatrix),Ve.setValue(L,"normalMatrix",Z.normalMatrix),Ve.setValue(L,"modelMatrix",Z.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let sn=nt.uniformsGroups;for(let cn=0,Ts=sn.length;cn<Ts;cn++){let ai=sn[cn];le.update(ai,nn),le.bind(ai,nn)}}return nn}function _r(T,Y){T.ambientLightColor.needsUpdate=Y,T.lightProbe.needsUpdate=Y,T.directionalLights.needsUpdate=Y,T.directionalLightShadows.needsUpdate=Y,T.pointLights.needsUpdate=Y,T.pointLightShadows.needsUpdate=Y,T.spotLights.needsUpdate=Y,T.spotLightShadows.needsUpdate=Y,T.rectAreaLights.needsUpdate=Y,T.hemisphereLights.needsUpdate=Y}function xr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(T,Y,et){let nt=lt.get(T);nt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),lt.get(T.texture).__webglTexture=Y,lt.get(T.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:et,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Y){let et=lt.get(T);et.__webglFramebuffer=Y,et.__useDefaultFramebuffer=Y===void 0};let To=L.createFramebuffer();this.setRenderTarget=function(T,Y=0,et=0){O=T,A=Y,N=et;let nt=!0,Z=null,Ct=!1,Ft=!1;if(T){let Ot=lt.get(T);if(Ot.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(L.FRAMEBUFFER,null),nt=!1;else if(Ot.__webglFramebuffer===void 0)wt.setupRenderTarget(T);else if(Ot.__hasExternalTextures)wt.rebindTextures(T,lt.get(T.texture).__webglTexture,lt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let te=T.depthTexture;if(Ot.__boundDepthTexture!==te){if(te!==null&&lt.has(te)&&(T.width!==te.image.width||T.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");wt.setupDepthRenderbuffer(T)}}let Qt=T.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ft=!0);let ce=lt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ce[Y])?Z=ce[Y][et]:Z=ce[Y],Ct=!0):T.samples>0&&wt.useMultisampledRTT(T)===!1?Z=lt.get(T).__webglMultisampledFramebuffer:Array.isArray(ce)?Z=ce[et]:Z=ce,U.copy(T.viewport),J.copy(T.scissor),Q=T.scissorTest}else U.copy(Nt).multiplyScalar(z).floor(),J.copy(qt).multiplyScalar(z).floor(),Q=jt;if(et!==0&&(Z=To),ut.bindFramebuffer(L.FRAMEBUFFER,Z)&&nt&&ut.drawBuffers(T,Z),ut.viewport(U),ut.scissor(J),ut.setScissorTest(Q),Ct){let Ot=lt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,et)}else if(Ft){let Ot=Y;for(let Qt=0;Qt<T.textures.length;Qt++){let ce=lt.get(T.textures[Qt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Qt,ce.__webglTexture,et,Ot)}}else if(T!==null&&et!==0){let Ot=lt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ot.__webglTexture,et)}w=-1},this.readRenderTargetPixels=function(T,Y,et,nt,Z,Ct,Ft,Yt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot){ut.bindFramebuffer(L.FRAMEBUFFER,Ot);try{let Qt=T.textures[Yt],ce=Qt.format,te=Qt.type;if(!at.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=T.width-nt&&et>=0&&et<=T.height-Z&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Yt),L.readPixels(Y,et,nt,Z,Gt.convert(ce),Gt.convert(te),Ct))}finally{let Qt=O!==null?lt.get(O).__webglFramebuffer:null;ut.bindFramebuffer(L.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(T,Y,et,nt,Z,Ct,Ft,Yt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot)if(Y>=0&&Y<=T.width-nt&&et>=0&&et<=T.height-Z){ut.bindFramebuffer(L.FRAMEBUFFER,Ot);let Qt=T.textures[Yt],ce=Qt.format,te=Qt.type;if(!at.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.bufferData(L.PIXEL_PACK_BUFFER,Ct.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Yt),L.readPixels(Y,et,nt,Z,Gt.convert(ce),Gt.convert(te),0);let Te=O!==null?lt.get(O).__webglFramebuffer:null;ut.bindFramebuffer(L.FRAMEBUFFER,Te);let fe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yd(L,fe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ct),L.deleteBuffer(ve),L.deleteSync(fe),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Y=null,et=0){let nt=Math.pow(2,-et),Z=Math.floor(T.image.width*nt),Ct=Math.floor(T.image.height*nt),Ft=Y!==null?Y.x:0,Yt=Y!==null?Y.y:0;wt.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,et,0,0,Ft,Yt,Z,Ct),ut.unbindTexture()};let ws=L.createFramebuffer(),Yn=L.createFramebuffer();this.copyTextureToTexture=function(T,Y,et=null,nt=null,Z=0,Ct=null){Ct===null&&(Z!==0?(Ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=Z,Z=0):Ct=0);let Ft,Yt,Ot,Qt,ce,te,ve,Te,fe,Kt=T.isCompressedTexture?T.mipmaps[Ct]:T.image;if(et!==null)Ft=et.max.x-et.min.x,Yt=et.max.y-et.min.y,Ot=et.isBox3?et.max.z-et.min.z:1,Qt=et.min.x,ce=et.min.y,te=et.isBox3?et.min.z:0;else{let En=Math.pow(2,-Z);Ft=Math.floor(Kt.width*En),Yt=Math.floor(Kt.height*En),T.isDataArrayTexture?Ot=Kt.depth:T.isData3DTexture?Ot=Math.floor(Kt.depth*En):Ot=1,Qt=0,ce=0,te=0}nt!==null?(ve=nt.x,Te=nt.y,fe=nt.z):(ve=0,Te=0,fe=0);let be=Gt.convert(Y.format),$t=Gt.convert(Y.type),_e;Y.isData3DTexture?(wt.setTexture3D(Y,0),_e=L.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(wt.setTexture2DArray(Y,0),_e=L.TEXTURE_2D_ARRAY):(wt.setTexture2D(Y,0),_e=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Y.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Y.unpackAlignment);let Ae=L.getParameter(L.UNPACK_ROW_LENGTH),nn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),zn=L.getParameter(L.UNPACK_SKIP_PIXELS),fn=L.getParameter(L.UNPACK_SKIP_ROWS),xi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,te);let Ve=T.isDataArrayTexture||T.isData3DTexture,Mn=Y.isDataArrayTexture||Y.isData3DTexture;if(T.isDepthTexture){let En=lt.get(T),sn=lt.get(Y),cn=lt.get(En.__renderTarget),Ts=lt.get(sn.__renderTarget);ut.bindFramebuffer(L.READ_FRAMEBUFFER,cn.__webglFramebuffer),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let ai=0;ai<Ot;ai++)Ve&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,lt.get(T).__webglTexture,Z,te+ai),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,lt.get(Y).__webglTexture,Ct,fe+ai)),L.blitFramebuffer(Qt,ce,Ft,Yt,ve,Te,Ft,Yt,L.DEPTH_BUFFER_BIT,L.NEAREST);ut.bindFramebuffer(L.READ_FRAMEBUFFER,null),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||lt.has(T)){let En=lt.get(T),sn=lt.get(Y);ut.bindFramebuffer(L.READ_FRAMEBUFFER,ws),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,Yn);for(let cn=0;cn<Ot;cn++)Ve?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,En.__webglTexture,Z,te+cn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,En.__webglTexture,Z),Mn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,sn.__webglTexture,Ct,fe+cn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,sn.__webglTexture,Ct),Z!==0?L.blitFramebuffer(Qt,ce,Ft,Yt,ve,Te,Ft,Yt,L.COLOR_BUFFER_BIT,L.NEAREST):Mn?L.copyTexSubImage3D(_e,Ct,ve,Te,fe+cn,Qt,ce,Ft,Yt):L.copyTexSubImage2D(_e,Ct,ve,Te,Qt,ce,Ft,Yt);ut.bindFramebuffer(L.READ_FRAMEBUFFER,null),ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Mn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(_e,Ct,ve,Te,fe,Ft,Yt,Ot,be,$t,Kt.data):Y.isCompressedArrayTexture?L.compressedTexSubImage3D(_e,Ct,ve,Te,fe,Ft,Yt,Ot,be,Kt.data):L.texSubImage3D(_e,Ct,ve,Te,fe,Ft,Yt,Ot,be,$t,Kt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ct,ve,Te,Ft,Yt,be,$t,Kt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ct,ve,Te,Kt.width,Kt.height,be,Kt.data):L.texSubImage2D(L.TEXTURE_2D,Ct,ve,Te,Ft,Yt,be,$t,Kt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ae),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,zn),L.pixelStorei(L.UNPACK_SKIP_ROWS,fn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xi),Ct===0&&Y.generateMipmaps&&L.generateMipmap(_e),ut.unbindTexture()},this.initRenderTarget=function(T){lt.get(T).__webglFramebuffer===void 0&&wt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?wt.setTextureCube(T,0):T.isData3DTexture?wt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?wt.setTexture2DArray(T,0):wt.setTexture2D(T,0),ut.unbindTexture()},this.resetState=function(){A=0,N=0,O=null,ut.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),e.unpackColorSpace=Re._getUnpackColorSpace()}};var nf={type:"change"},Sh={type:"start"},rf={type:"end"},Hl=new Gi,sf=new $e,Mx=Math.cos(70*oi.DEG2RAD),en=new R,Dn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eh=1e-6,kl=class extends fs{constructor(t,e=null){super(t,e),this.state=Be.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tn.ROTATE,MIDDLE:Tn.DOLLY,RIGHT:Tn.PAN},this.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Oe,this._lastTargetPosition=new R,this._quat=new Oe().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lr,this._sphericalDelta=new lr,this._scale=1,this._panOffset=new R,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new R,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Sx.bind(this),this._onPointerDown=Ex.bind(this),this._onPointerUp=bx.bind(this),this._onContextMenu=Ix.bind(this),this._onMouseWheel=Ax.bind(this),this._onKeyDown=Rx.bind(this),this._onTouchStart=Cx.bind(this),this._onTouchMove=Px.bind(this),this._onMouseDown=wx.bind(this),this._onMouseMove=Tx.bind(this),this._interceptControlDown=Dx.bind(this),this._interceptControlUp=Lx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nf),this.update(),this.state=Be.NONE}update(t=null){let e=this.object.position;en.copy(e).sub(this.target),en.applyQuaternion(this._quat),this._spherical.setFromVector3(en),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Dn:n>Math.PI&&(n-=Dn),s<-Math.PI?s+=Dn:s>Math.PI&&(s-=Dn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(en.setFromSpherical(this._spherical),en.applyQuaternion(this._quatInverse),e.copy(this.target).add(en),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=en.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=en.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Hl.origin.copy(this.object.position),Hl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hl.direction))<Mx?this.object.lookAt(this.target):(sf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hl.intersectPlane(sf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Eh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eh||this._lastTargetPosition.distanceToSquared(this.target)>Eh?(this.dispatchEvent(nf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Dn/60*this.autoRotateSpeed*t:Dn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){en.setFromMatrixColumn(e,0),en.multiplyScalar(-t),this._panOffset.add(en)}_panUp(t,e){this.screenSpacePanning===!0?en.setFromMatrixColumn(e,1):(en.setFromMatrixColumn(e,0),en.crossVectors(this.object.up,en)),en.multiplyScalar(t),this._panOffset.add(en)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;en.copy(s).sub(this.target);let r=en.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ex(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Sx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function bx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rf),this.state=Be.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function wx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Be.DOLLY;break;case Tn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Be.ROTATE}break;case Tn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(Sh)}function Tx(i){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ax(i){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(i.preventDefault(),this.dispatchEvent(Sh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(rf))}function Rx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Cx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Be.TOUCH_ROTATE;break;case ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Be.TOUCH_DOLLY_PAN;break;case ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(Sh)}function Px(i){switch(this._trackPointer(i),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Be.NONE}}function Ix(i){this.enabled!==!1&&i.preventDefault()}function Dx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ms=new Gn,yn=new R,Ji=new R,Xe=new Oe,of={X:new R(1,0,0),Y:new R(0,1,0),Z:new R(0,0,1)},bh={type:"change"},af={type:"mouseDown",mode:null},lf={type:"mouseUp",mode:null},cf={type:"objectChange"},Yl=class extends fs{constructor(t,e=null){super(void 0,e);let n=new Th(this);this._root=n;let s=new Ah;this._gizmo=s,n.add(s);let r=new Rh;this._plane=r,n.add(r);let o=this;function a(S,v){let D=v;Object.defineProperty(o,S,{get:function(){return D!==void 0?D:v},set:function(A){D!==A&&(D=A,r[S]=A,s[S]=A,o.dispatchEvent({type:S+"-changed",value:A}),o.dispatchEvent(bh))}}),o[S]=v,r[S]=v,s[S]=v}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new R,c=new R,h=new Oe,f=new Oe,d=new R,p=new Oe,g=new R,x=new R,_=new R,m=0,C=new R;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",f),a("cameraPosition",d),a("cameraQuaternion",p),a("pointStart",g),a("pointEnd",x),a("rotationAxis",_),a("rotationAngle",m),a("eye",C),this._offset=new R,this._startNorm=new R,this._endNorm=new R,this._cameraScale=new R,this._parentPosition=new R,this._parentQuaternion=new Oe,this._parentQuaternionInv=new Oe,this._parentScale=new R,this._worldScaleStart=new R,this._worldQuaternionInv=new Oe,this._worldScale=new R,this._positionStart=new R,this._quaternionStart=new Oe,this._scaleStart=new R,this._getPointer=Nx.bind(this),this._onPointerDown=Fx.bind(this),this._onPointerHover=Ux.bind(this),this._onPointerMove=Ox.bind(this),this._onPointerUp=Bx.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Ms.setFromCamera(t,this.camera);let e=wh(this._gizmo.picker[this.mode],Ms);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Ms.setFromCamera(t,this.camera);let e=wh(this._plane,Ms,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,af.mode=this.mode,this.dispatchEvent(af)}}pointerMove(t){let e=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Ms.setFromCamera(t,this.camera);let o=wh(this._plane,Ms,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Xe.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(yn.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(yn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ji.set(a,a,a)}else yn.copy(this.pointStart),Ji.copy(this.pointEnd),yn.applyQuaternion(this._worldQuaternionInv),Ji.applyQuaternion(this._worldQuaternionInv),Ji.divide(yn),e.search("X")===-1&&(Ji.x=1),e.search("Y")===-1&&(Ji.y=1),e.search("Z")===-1&&(Ji.z=1);s.scale.copy(this._scaleStart).multiply(Ji),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(yn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(yn.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(of[e]),yn.copy(of[e]),r==="local"&&yn.applyQuaternion(this.worldQuaternion),yn.cross(this.eye),yn.length()===0?l=!0:this.rotationAngle=this._offset.dot(yn.normalize())*a),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Xe.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Xe.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(bh),this.dispatchEvent(cf)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(lf.mode=this.mode,this.dispatchEvent(lf)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(bh),this.dispatchEvent(cf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ms}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function Nx(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function Ux(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Fx(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Ox(i){this.enabled&&this.pointerMove(this._getPointer(i))}function Bx(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function wh(i,t,e){let n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}var Vl=new dn,ke=new R(0,1,0),hf=new R(0,0,0),uf=new Ce,Gl=new Oe,Xl=new Oe,_i=new R,df=new Ce,Eo=new R(1,0,0),Es=new R(0,1,0),So=new R(0,0,1),Wl=new R,vo=new R,Mo=new R,Th=class extends Le{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){let e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}},Ah=class extends Le{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let t=new an({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new Pn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;let s=e.clone();s.opacity=.5;let r=t.clone();r.color.setHex(16711680);let o=t.clone();o.color.setHex(65280);let a=t.clone();a.color.setHex(255);let l=t.clone();l.color.setHex(16711680),l.opacity=.5;let c=t.clone();c.color.setHex(65280),c.opacity=.5;let h=t.clone();h.color.setHex(255),h.opacity=.5;let f=t.clone();f.opacity=.25;let d=t.clone();d.color.setHex(16776960),d.opacity=.25;let p=t.clone();p.color.setHex(16776960);let g=t.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:p,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:d};let x=new Ke(0,.04,.1,12);x.translate(0,.05,0);let _=new Pe(.08,.08,.08);_.translate(0,.04,0);let m=new Ee;m.setAttribute("position",new ge([0,0,0,1,0,0],3));let C=new Ke(.0075,.0075,.5,3);C.translate(0,.25,0);function S(B,G){let k=new Ci(B,.0075,3,64,G*Math.PI*2);return k.rotateY(Math.PI/2),k.rotateX(Math.PI/2),k}function v(){let B=new Ee;return B.setAttribute("position",new ge([0,0,0,1,1,1],3)),B}let D={X:[[new At(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new At(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new At(C,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new At(x,o),[0,.5,0]],[new At(x,o),[0,-.5,0],[Math.PI,0,0]],[new At(C,o)]],Z:[[new At(x,a),[0,0,.5],[Math.PI/2,0,0]],[new At(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new At(C,a),null,[Math.PI/2,0,0]]],XYZ:[[new At(new pi(.1,0),f),[0,0,0]]],XY:[[new At(new Pe(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new At(new Pe(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new At(new Pe(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new At(new Ke(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new At(new Ke(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new At(new Ke(.2,0,.6,4),n),[0,.3,0]],[new At(new Ke(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new At(new Ke(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new At(new Ke(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new At(new pi(.2,0),n)]],XY:[[new At(new Pe(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new At(new Pe(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new At(new Pe(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},N={START:[[new At(new pi(.01,2),s),null,null,null,"helper"]],END:[[new At(new pi(.01,2),s),null,null,null,"helper"]],DELTA:[[new Ze(v(),s),null,null,null,"helper"]],X:[[new Ze(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ze(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ze(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},O={XYZE:[[new At(S(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new At(S(.5,.5),r)]],Y:[[new At(S(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new At(S(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new At(S(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new Ze(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new At(new ni(.25,10,8),n)]],X:[[new At(new Ci(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new At(new Ci(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new At(new Ci(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new At(new Ci(.75,.1,2,24),n)]]},U={X:[[new At(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new At(C,r),[0,0,0],[0,0,-Math.PI/2]],[new At(_,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new At(_,o),[0,.5,0]],[new At(C,o)],[new At(_,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new At(_,a),[0,0,.5],[Math.PI/2,0,0]],[new At(C,a),[0,0,0],[Math.PI/2,0,0]],[new At(_,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new At(new Pe(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new At(new Pe(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new At(new Pe(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new At(new Pe(.1,.1,.1),f)]]},J={X:[[new At(new Ke(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new At(new Ke(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new At(new Ke(.2,0,.6,4),n),[0,.3,0]],[new At(new Ke(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new At(new Ke(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new At(new Ke(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new At(new Pe(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new At(new Pe(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new At(new Pe(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new At(new Pe(.2,.2,.2),n),[0,0,0]]]},Q={X:[[new Ze(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ze(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ze(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function tt(B){let G=new Le;for(let k in B)for(let z=B[k].length;z--;){let ft=B[k][z][0].clone(),xt=B[k][z][1],Nt=B[k][z][2],qt=B[k][z][3],jt=B[k][z][4];ft.name=k,ft.tag=jt,xt&&ft.position.set(xt[0],xt[1],xt[2]),Nt&&ft.rotation.set(Nt[0],Nt[1],Nt[2]),qt&&ft.scale.set(qt[0],qt[1],qt[2]),ft.updateMatrix();let ue=ft.geometry.clone();ue.applyMatrix4(ft.matrix),ft.geometry=ue,ft.renderOrder=1/0,ft.position.set(0,0,0),ft.rotation.set(0,0,0),ft.scale.set(1,1,1),G.add(ft)}return G}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=tt(D)),this.add(this.gizmo.rotate=tt(O)),this.add(this.gizmo.scale=tt(U)),this.add(this.picker.translate=tt(A)),this.add(this.picker.rotate=tt(b)),this.add(this.picker.scale=tt(J)),this.add(this.helper.translate=tt(N)),this.add(this.helper.rotate=tt(w)),this.add(this.helper.scale=tt(Q)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Xl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Xe.setFromEuler(Vl.set(0,0,0)),o.quaternion.copy(n).multiply(Xe),Math.abs(ke.copy(Eo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Xe.setFromEuler(Vl.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Xe),Math.abs(ke.copy(Es).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Xe.setFromEuler(Vl.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Xe),Math.abs(ke.copy(So).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Xe.setFromEuler(Vl.set(0,Math.PI/2,0)),ke.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(uf.lookAt(hf,ke,Es)),o.quaternion.multiply(Xe),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),yn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),yn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(yn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(ke.copy(Eo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(ke.copy(Es).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(ke.copy(So).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(ke.copy(So).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(ke.copy(Eo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(ke.copy(Es).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Gl.copy(n),ke.copy(this.eye).applyQuaternion(Xe.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(uf.lookAt(this.eye,hf,Es)),o.name==="X"&&(Xe.setFromAxisAngle(Eo,Math.atan2(-ke.y,ke.z)),Xe.multiplyQuaternions(Gl,Xe),o.quaternion.copy(Xe)),o.name==="Y"&&(Xe.setFromAxisAngle(Es,Math.atan2(ke.x,ke.z)),Xe.multiplyQuaternions(Gl,Xe),o.quaternion.copy(Xe)),o.name==="Z"&&(Xe.setFromAxisAngle(So,Math.atan2(ke.y,ke.x)),Xe.multiplyQuaternions(Gl,Xe),o.quaternion.copy(Xe))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}},Rh=class extends At{constructor(){super(new In(1e5,1e5,2,2),new an({visible:!1,wireframe:!0,side:ln,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Wl.copy(Eo).applyQuaternion(e==="local"?this.worldQuaternion:Xl),vo.copy(Es).applyQuaternion(e==="local"?this.worldQuaternion:Xl),Mo.copy(So).applyQuaternion(e==="local"?this.worldQuaternion:Xl),ke.copy(vo),this.mode){case"translate":case"scale":switch(this.axis){case"X":ke.copy(this.eye).cross(Wl),_i.copy(Wl).cross(ke);break;case"Y":ke.copy(this.eye).cross(vo),_i.copy(vo).cross(ke);break;case"Z":ke.copy(this.eye).cross(Mo),_i.copy(Mo).cross(ke);break;case"XY":_i.copy(Mo);break;case"YZ":_i.copy(Wl);break;case"XZ":ke.copy(Mo),_i.copy(vo);break;case"XYZ":case"E":_i.set(0,0,0);break}break;case"rotate":default:_i.set(0,0,0)}_i.length()===0?this.quaternion.copy(this.cameraQuaternion):(df.lookAt(yn.set(0,0,0),_i,ke),this.quaternion.setFromRotationMatrix(df)),super.updateMatrixWorld(t)}};function ff({scene:i,camera:t,canvas:e}){let n=new _n;n.userData.primitiveBounds=!0,n.visible=!1,i.add(n);let s=new Pe(1,1,1),r=new Jr(s);s.dispose();let o=new Pn({color:7977215,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),a=new Ai(r,o);a.renderOrder=30,n.add(a);let l=new In(1,1),c=new an({color:14150399,depthTest:!1,depthWrite:!1,side:ln}),h=[];for(let B of["x","y","z"])for(let G of[-1,1]){let k=new At(l,c);k.userData.boundsHandle={axis:B,sign:G},k.renderOrder=32,n.add(k),h.push(k)}let f=new Ee;f.setAttribute("position",new je(new Float32Array(36),3));let d=new Ai(f,o);d.renderOrder=30,d.frustumCulled=!1,n.add(d);let p=new Ee;p.setAttribute("position",new je(new Float32Array(54),3));let g=new Ai(p,o);g.renderOrder=30,n.add(g),g.frustumCulled=!1;let x=["W","D","H"].map(B=>{let G=document.createElement("div");return G.dataset.primitiveDimension=B,G.style.cssText="position:absolute;pointer-events:none;display:none;z-index:24;padding:4px 7px;border:1px solid #79b8ff66;border-radius:4px;background:#172b37ed;color:#d7eaff;font:13px system-ui;white-space:nowrap;",e.parentElement?.append(G),G}),_=null,m=null,C=new Gn,S=new R,v=new R,D=()=>e.getBoundingClientRect();function A(B,G){return v.copy(B).applyMatrix4(t.matrixWorldInverse),S.copy(B).project(t),{x:G.left+(S.x+1)*G.width/2,y:G.top+(1-S.y)*G.height/2,depth:v.z,visible:v.z<0&&S.z>=-1&&S.z<=1}}function N(B,G){let k=B.clone().applyMatrix4(t.matrixWorldInverse);return Math.max(1e-6,2*Math.abs(k.z)*Math.tan(t.fov*Math.PI/360)/Math.max(1,G.height))}function O(B){let G=D();C.setFromCamera(new vt((B.clientX-G.left)/Math.max(1,G.width)*2-1,1-(B.clientY-G.top)/Math.max(1,G.height)*2),t)}function w(B,G,{handles:k=!0}={}){_=B,n.visible=!!(G&&B);for(let lt of x)lt.style.display="none";if(!n.visible)return;t.updateMatrixWorld(!0),B.updateWorldMatrix(!0,!1);let z=D(),ft=B.getWorldPosition(new R),xt=B.getWorldQuaternion(new Oe),Nt=N(ft,z);a.position.copy(ft),a.quaternion.copy(xt),a.scale.copy(B.scale);let qt=A(ft,z),jt=[],ue=f.attributes.position,se=0,ot=!1;for(let lt of h){let{axis:wt,sign:ne}=lt.userData.boundsHandle,Ut=new R,I=new R;Ut[wt]=ne*.5,I[wt]=1,I.applyQuaternion(xt),B.localToWorld(Ut),lt.userData.facePosition=Ut.clone();let y=A(Ut,z),W=t.position.clone().sub(Ut).normalize();if(lt.visible=k&&y.visible&&Math.abs(W.dot(I))<.98,lt.visible){let pt=y.x-qt.x,P=y.y-qt.y,F=Math.hypot(pt,P),q=F>1e-6?pt/F:1,dt=F>1e-6?P/F:0,_t=Math.max(24,F),ct=qt.x+q*_t,Tt=qt.y+dt*_t;for(;jt.some(zt=>Math.hypot(zt.x-ct,zt.y-Tt)<20)&&_t<Math.max(24,F)+80;)_t+=12,ct=qt.x+q*_t,Tt=qt.y+dt*_t;if(jt.push({x:ct,y:Tt}),Math.hypot(ct-y.x,Tt-y.y)>.5){ot=!0;let zt=Ut.clone().project(t);Ut.set((ct-z.left)/z.width*2-1,1-(Tt-z.top)/z.height*2,zt.z).unproject(t)}}lt.position.copy(Ut),lt.quaternion.copy(t.quaternion),lt.scale.setScalar(N(Ut,z)*(lt===m?11:9)),lt.userData.screen=A(Ut,z);let j=lt.visible?lt.userData.facePosition:Ut;ue.setXYZ(se++,j.x,j.y,j.z),ue.setXYZ(se++,Ut.x,Ut.y,Ut.z)}ue.needsUpdate=!0;let gt=B.worldToLocal(t.position.clone()),Bt=gt.x>=0?1:-1,St=gt.z>=0?1:-1,Vt=Nt*(ot?55:27),ae=Bt*(.5+Vt/B.scale.x),re=St*(.5+Vt/B.scale.z),L=-.5-Vt/B.scale.y,Et=[{a:[-.5,L,re],b:[.5,L,re],tick:[0,1,0],size:B.scale.x},{a:[ae,L,-.5],b:[ae,L,.5],tick:[0,1,0],size:B.scale.z},{a:[ae,-.5,re],b:[ae,.5,re],tick:[1,0,0],size:B.scale.y}],mt=p.attributes.position,at=0,ut=lt=>mt.setXYZ(at++,lt.x,lt.y,lt.z),bt=[];Et.forEach((lt,wt)=>{let ne=B.localToWorld(new R(...lt.a)),Ut=B.localToWorld(new R(...lt.b)),I=new R(...lt.tick).applyQuaternion(xt).multiplyScalar(Nt*4);ut(ne),ut(Ut);for(let F of[ne,Ut])ut(F.clone().sub(I)),ut(F.clone().add(I));let y=A(ne.clone().add(Ut).multiplyScalar(.5),z),W=x[wt];if(W.textContent=x[wt].dataset.primitiveDimension+" "+lt.size.toFixed(2)+" m",!y.visible||y.x<z.left||y.y<z.top||y.x>z.left+z.width||y.y>z.top+z.height)return;let j=Math.max(5,Math.min(z.width-88,y.x-z.left-40)),pt=Math.max(5,Math.min(z.height-31,y.y-z.top-12)),P=pt;for(let F of[0,30,-30,60,-60,90,-90]){let q=Math.max(5,Math.min(z.height-31,pt+F));if(!bt.some(dt=>Math.abs(dt.left-j)<87&&Math.abs(dt.top-q)<28)){P=q;break}}bt.push({left:j,top:P}),Object.assign(W.style,{display:"block",left:j+"px",top:P+"px"})}),mt.needsUpdate=!0,n.updateMatrixWorld(!0)}function b(B){if(!n.visible||!_)return null;w(_,!0);let G=B.pointerType==="touch"?18:10;return h.filter(z=>z.visible).map(z=>({handle:z,p:z.userData.screen,d:Math.hypot(B.clientX-z.userData.screen.x,B.clientY-z.userData.screen.y)})).filter(z=>z.d<=G).sort((z,ft)=>Math.abs(z.d-ft.d)<2?ft.p.depth-z.p.depth:z.d-ft.d)[0]?.handle||null}function U(B){m=B}function J(B,G,k){let{axis:z,sign:ft}=G.userData.boundsHandle,xt=new R;xt[z]=1,xt.applyQuaternion(k.getWorldQuaternion(new Oe)).normalize();let Nt=G.userData.facePosition.clone(),qt=t.position.clone().sub(Nt).normalize();if(Math.abs(qt.dot(xt))>=.98)return null;let jt=qt.addScaledVector(xt,-qt.dot(xt)).normalize(),ue=new $e().setFromNormalAndCoplanarPoint(jt,Nt);O(B);let se=C.ray.intersectPlane(ue,new R);return se?{axis:z,sign:ft,direction:xt,plane:ue,start:se,position:k.position.clone(),scale:k.scale.clone()}:null}function Q(B,G,k,z){O(G);let ft=C.ray.intersectPlane(B.plane,new R);if(!ft)return;let xt=B.scale[B.axis]+ft.sub(B.start).dot(B.direction)*B.sign;z&&(xt=Math.round(xt/z)*z),xt=Math.max(B.original.wall?.25:.02,Math.min(B.original.wall&&B.axis==="z"?1:150,xt)),k.scale.copy(B.scale),k.scale[B.axis]=xt,k.position.copy(B.position).addScaledVector(B.direction,(xt-B.scale[B.axis])*B.sign/2),k.updateMatrixWorld(!0),w(k,!0)}function tt(){n.removeFromParent(),r.dispose(),l.dispose(),c.dispose(),f.dispose(),p.dispose(),o.dispose();for(let B of x)B.remove()}return{update:w,hit:b,hover:U,begin:J,resize:Q,dispose:tt}}function pf(i,t){let e=new Le;e.userData.primitiveGroup=!0,i.add(e);let n=[],s=0;function r(d){n=d.slice();let p=new un;s=0;for(let g of n)g.updateMatrix(),p.union(new un(new R(-.5,-.5,-.5),new R(.5,.5,.5)).applyMatrix4(g.matrix)),s+=t.get(g.userData.level)?.position.y||0;s/=Math.max(1,n.length),n.length&&(p.getCenter(e.position),e.position.y+=s,p.getSize(e.scale),e.scale.max(new R(.02,.02,.02)),e.quaternion.identity(),e.updateMatrixWorld(!0))}function o(){let d=n.reduce((p,g)=>p+(t.get(g.userData.level)?.position.y||0),0)/Math.max(1,n.length);e.position.y+=d-s,s=d,e.updateMatrixWorld(!0)}function a(){return{group:!0,position:e.position.clone(),scale:e.scale.clone(),quaternion:e.quaternion.clone(),pivot:e.position.clone().add(new R(0,-s,0)),members:n.map(d=>({root:d,original:JSON.parse(JSON.stringify(d.userData.record)),position:d.position.clone(),scale:d.scale.clone(),quaternion:d.quaternion.clone()}))}}let l=(d,p)=>p?l(p,d%p):d;function c(d,p,g){let x=0,_=1/0,m=0;for(let v of d.members)for(let D of["x","y","z"])x=Math.max(x,(v.original.wall?.25:.02)/v.scale[D]),_=Math.min(_,(v.original.wall&&D==="z"?1:150)/v.scale[D]),v.original.wall&&(m=l(m,Math.round(v.scale[D]*4)));let C=m?1/m:g/Math.max(d.scale.x,d.scale.y,d.scale.z),S=Number.isFinite(p)?p:1;if(C){let v=m?0:1;S=v+Math.round((S-v)/C)*C,x=v+Math.ceil((x-v-1e-9)/C)*C,_=v+Math.floor((_-v+1e-9)/C)*C}return Math.max(x,Math.min(_,S))}function h(d,p,g){if(p==="translate"){let x=e.position.clone().sub(d.position);if(g)for(let _ of["x","y","z"])x[_]=Math.round(x[_]/g)*g;e.position.copy(d.position).add(x);for(let _ of d.members)_.root.position.copy(_.position).add(x),_.root.quaternion.copy(_.quaternion),_.root.scale.copy(_.scale)}else if(p==="rotate"){let x=e.quaternion.clone().multiply(d.quaternion.clone().invert());for(let _ of d.members)_.root.position.copy(_.position).sub(d.pivot).applyQuaternion(x).add(d.pivot),_.root.quaternion.copy(x).multiply(_.quaternion),_.root.scale.copy(_.scale)}else if(p==="scale"){let x=c(d,e.scale.x/d.scale.x,g);e.scale.copy(d.scale).multiplyScalar(x);for(let _ of d.members)_.root.position.copy(_.position).sub(d.pivot).multiplyScalar(x).add(d.pivot),_.root.scale.copy(_.scale).multiplyScalar(x),_.root.quaternion.copy(_.quaternion)}for(let x of d.members)x.root.updateMatrixWorld(!0);e.updateMatrixWorld(!0)}function f(d){for(let p of d.members)p.root.position.copy(p.position),p.root.scale.copy(p.scale),p.root.quaternion.copy(p.quaternion),p.root.updateMatrixWorld(!0);e.position.copy(d.position),e.scale.copy(d.scale),e.quaternion.copy(d.quaternion),e.updateMatrixWorld(!0)}return{target:e,select:r,syncDisplay:o,begin:a,preview:h,restore:f,dispose(){e.removeFromParent()}}}function mf({scene:i,camera:t,renderer:e,controls:n,groups:s,data:r,prismGeometry:o,surfaceHit:a,enabled:l,canNavigate:c=()=>!0,onSelect:h,onEdit:f,onEditMany:d}){let p=e.domElement,g=[],x=new Map,_=new Gn,m=new vt,C={cube:new Pe(1,1,1),cylinder:new Ke(.5,.5,1,32),sphere:new ni(.5,32,16),hemisphere:new ni(.5,32,16,0,Math.PI*2,0,Math.PI/2)};C.hemisphere.scale(1,2,1),C.hemisphere.translate(0,-.5,0);let S=new Kr(.5,32);S.rotateX(Math.PI/2),S.translate(0,-.5,0);let v=[],D=[];for(let P of r.levels)for(let F of P.primitives||[]){let q=new _n,dt=new us({color:F.color||"#d6a46b",roughness:.8,side:ln});v.push(dt);let _t=JSON.parse(JSON.stringify(F)),ct=P.rampWallCuts?.[F.id];if(q.userData={primitive:F.id,level:P.id,record:_t,floorZ:P.z},jt(q,F),Array.isArray(ct)&&o){let Tt=q.matrixWorld.clone().invert();for(let zt of ct){let Gt=o(zt);Gt.translate(0,zt.z,0),Gt.applyMatrix4(Tt),D.push(Gt),q.add(new At(Gt,dt))}}else q.add(new At(C[F.primitive],dt)),F.primitive==="hemisphere"&&q.add(new At(S,dt));s.get(P.id).add(q),g.push(q),x.set(P.id+"\0"+F.id,q)}let A=new Yl(t,p);A.disconnect(),p.style.touchAction="none",A.setSize(.8),A.setSpace("world");let N=A.getHelper();i.add(N);let O=ff({scene:i,camera:t,canvas:p}),w=pf(i,s),b=["gizmo","picker","helper"].map(P=>({parent:A._gizmo[P].scale,children:A._gizmo[P].scale.children.slice()})),U=!1;function J(P){if(U!==P){U=P;for(let F of b){for(let q of F.children)F.parent.remove(q);for(let q of F.children)(!P||q.name==="XYZ")&&F.parent.add(q)}}}let Q=[],tt=new Set,B=()=>Q.length>1,G=null,k=null,z=null,ft=!1,xt=null,Nt=window.KERN_DRAG_AXES?.register(()=>k&&!k.bounds&&A.mode==="translate"?k:null,()=>y()),qt=A._plane.updateMatrixWorld;A._plane.updateMatrixWorld=function(P){k?.translationPlane&&A.mode==="translate"?(this.position.copy(k.translationPlane.position),this.quaternion.copy(k.translationPlane.quaternion),Le.prototype.updateMatrixWorld.call(this,P)):qt.call(this,P)};function jt(P,F){P.position.set(F.x+F.w/2,P.userData.floorZ+F.z+F.height/2,F.y+F.h/2),P.scale.set(F.w,F.height,F.h),P.rotation.set(F.tiltX*Math.PI/180,-F.rotation*Math.PI/180,F.tiltY*Math.PI/180,"XYZ"),P.updateMatrixWorld(!0)}let ue=P=>s.get(P.userData.level)?.visible&&window.KERN_LAYERS?.shown?.("primitives",P.userData.primitive,P.userData.level)!==!1,se=P=>ue(P)&&window.KERN_LAYERS?.available?.("primitives",P.userData.primitive,P.userData.level)!==!1;function ot(){if(!G||!l()||!Q.length||Q.some(F=>!se(F)))return!1;let P=window.KERN_LAYERS?.references?.();return!P||P.length===Q.length&&P.every(F=>F.kind==="primitives"&&tt.has(F.floor+"\0"+F.id))}function gt(){B()&&!k&&w.syncDisplay(),O.update(G,ot(),{handles:!B()})}function Bt(){if(ft)return;for(let F of g)F.visible=window.KERN_LAYERS?.shown?.("primitives",F.userData.primitive,F.userData.level)!==!1;let P=ot();A.enabled=P,N.visible=P,!P&&k&&y(),gt()}function St(P){y();let F=(P||[]).filter(q=>q.kind==="primitives").map(q=>x.get(q.floor+"\0"+q.id)).filter(Boolean);Q=F.length===P.length?F:[],tt=new Set(Q.map(q=>q.userData.level+"\0"+q.userData.primitive)),B()&&w.select(Q),G=B()?w.target:Q[0]||null,G?A.attach(G):A.detach(),A.setMode(window.KERN_PRIMITIVE_UI?.mode()||"translate"),A.setSpace(A.mode==="scale"?"local":"world"),ae(),Bt()}function Vt(){let P=Number(window.snapSize?.());return Number.isFinite(P)&&P>0?P:null}function ae(P={}){let F=Q.some(q=>q.userData.record.wall===!0);A.setTranslationSnap(!B()&&F?.25:null),A.setScaleSnap(B()?null:F?.25:P.ctrlKey?null:Vt()),A.setRotationSnap(P.shiftKey&&!P.ctrlKey?Math.PI/36:F?Math.PI/180:null),A.showX=A.showZ=!(F&&A.mode==="rotate"),A.showY=!0,J(B()&&A.mode==="scale")}function re(P,F){xt&&(xt.removeFromParent(),xt.geometry.dispose(),xt.material.dispose(),xt=null),!(!P||!s.has(F))&&(xt=new At(new Pe(1,1,1),new an({color:"#72d8b0",transparent:!0,opacity:.4,depthWrite:!1})),xt.userData.floorZ=r.levels.find(q=>q.id===F).z,jt(xt,P),s.get(F).add(xt))}function L(P){let F=p.getBoundingClientRect();return{x:(P.clientX-F.left)/Math.max(1,F.width)*2-1,y:-(P.clientY-F.top)/Math.max(1,F.height)*2+1,button:P.button??0}}function Et(P){let F=L(P);return m.set(F.x,F.y),i.updateMatrixWorld(!0),t.updateMatrixWorld(!0),_.setFromCamera(m,t),_.intersectObjects(g.filter(ue),!0).map(q=>{let dt=q.object;for(;dt&&!dt.userData.primitive;)dt=dt.parent;return{...q,root:dt}}).filter(q=>q.root)}function mt(P){let F=Et(P)[0];if(!F)return null;let q=a(P);return q&&q.point.distanceTo(t.position)+.002<F.distance?null:F}function at(P){P.preventDefault(),P.stopImmediatePropagation()}function ut(P){if(ft)return!1;if(k||z)return at(P),!0;if(!l()||P.altKey||P.button!==0)return!1;if(Bt(),G&&A.enabled&&!B()&&!P.shiftKey){let q=O.hit(P),dt=q&&O.begin(P,q,G);if(dt)return k={...dt,bounds:!0,id:P.pointerId,root:G,original:JSON.parse(JSON.stringify(G.userData.record))},A.axis=null,n.enabled=!1,O.hover(q),p.setPointerCapture?.(P.pointerId),at(P),!0}if(G&&A.enabled&&(!P.shiftKey||A.mode==="rotate")&&(ae(P),i.updateMatrixWorld(!0),A.pointerHover(L(P)),A.axis)){let q=B()?window.KERN_PRIMITIVE_UI?.transformScope?.():null;if(B()&&!q)return at(P),!0;let dt=B()?null:JSON.parse(JSON.stringify(G.userData.record)),_t=B()?w.begin():null;if(A.pointerDown(L(P)),A.dragging)return k=_t?{..._t,scope:q,id:P.pointerId,mode:A.mode,clientX:P.clientX,clientY:P.clientY}:{id:P.pointerId,root:G,original:dt,position:G.position.clone()},A.mode==="translate"&&(k.translationPlane={position:A._plane.position.clone(),quaternion:A._plane.quaternion.clone()},window.KERN_DRAG_AXES?.begin(k,G.position)),n.enabled=!1,p.setPointerCapture?.(P.pointerId),at(P),!0}let F=mt(P);return F?(z={id:P.pointerId,x:P.clientX,y:P.clientY,root:F.root,shift:P.shiftKey},p.setPointerCapture?.(P.pointerId),at(P),!0):!1}function bt(P){if(ft)return!1;if(Bt(),k&&P.pointerId===k.id){if(k.bounds)return O.resize(k,P,k.root,k.original.wall?.25:P.ctrlKey?null:Vt()),at(P),!0;if(ae(P),k.group&&k.mode==="scale"?G.scale.copy(k.scale).multiplyScalar(Math.exp(Math.max(-20,Math.min(20,(P.clientX-k.clientX-P.clientY+k.clientY)*.005)))):A.pointerMove({...L(P),button:-1}),k.group){let q=Q.some(dt=>dt.userData.record.wall)?.25:P.ctrlKey?0:Vt()||0;if(k.mode==="translate"){if(q)for(let _t of["x","y","z"])G.position[_t]=k.position[_t]+Math.round((G.position[_t]-k.position[_t])/q)*q;let dt=window.KERN_DRAG_AXES?.apply(k,G.position,k.position);dt&&G.position.set(dt.x,dt.y,dt.z),q=0}return w.preview(k,k.mode,q),gt(),at(P),!0}let F=!k.original.wall&&!P.ctrlKey&&A.mode==="translate"&&Vt();if(F){let q=k.root,dt=k.position;for(let _t of["x","y","z"])q.position[_t]=dt[_t]+Math.round((q.position[_t]-dt[_t])/F)*F;q.updateMatrixWorld(!0)}if(A.mode==="translate"){let q=window.KERN_DRAG_AXES?.apply(k,G.position,k.position);q&&(G.position.set(q.x,q.y,q.z),G.updateMatrixWorld(!0))}return gt(),at(P),!0}if(k||z&&P.pointerId===z.id)return at(P),!0;if(G&&A.enabled&&!P.altKey&&!P.buttons){let F=!B()&&!P.shiftKey&&O.hit(P);if(O.hover(F),F)return A.axis=null,p.style.cursor="ew-resize",p.title="Drag "+{x:"width",y:"height",z:"depth"}[F.userData.boundsHandle.axis]+" \xB7 opposite face stays fixed \xB7 "+(G.userData.record.wall?"0.25 m steps":"Ctrl: free"),at(P),!0;if(i.updateMatrixWorld(!0),A.pointerHover(L(P)),B()&&A.mode==="scale"&&A.axis==="XYZ")return p.title="Uniform group scale \xB7 drag right or up to enlarge; left or down to shrink",at(P),!0}return!1}function lt(P){p.hasPointerCapture?.(P)&&p.releasePointerCapture(P)}function wt(P){let F=new Ce().makeRotationFromQuaternion(P).elements,q=Math.hypot(F[0],F[4]),dt=F[8]>=0?1:-1,_t=q>1e-12?Math.atan2(-F[4],F[0]):0,ct=Math.atan2(F[6]+dt*F[1],F[5]-dt*F[2]),Tt=ct-dt*_t;return{x:Math.atan2(Math.sin(Tt),Math.cos(Tt)),y:Math.atan2(F[8],q),z:_t}}function ne(P,F,q=!1){let dt=wt(P.quaternion),_t=Tt=>Math.round(Tt*1e6)/1e6,ct=q||P.quaternion.angleTo(new Oe().setFromEuler(new dn(F.tiltX*Math.PI/180,-F.rotation*Math.PI/180,F.tiltY*Math.PI/180,"XYZ")))<1e-7;return{x:_t(P.position.x-P.scale.x/2),y:_t(P.position.z-P.scale.z/2),z:_t(P.position.y-P.userData.floorZ-P.scale.y/2),w:_t(P.scale.x),h:_t(P.scale.z),height:_t(P.scale.y),rotation:ct?F.rotation:_t(F.wall?(()=>{let Tt=new R(1,0,0).applyQuaternion(P.quaternion),zt=Math.atan2(Tt.z,Tt.x)*180/Math.PI;return[zt-360,zt,zt+360].filter(Gt=>Gt>=-360&&Gt<=360).sort((Gt,Dt)=>Math.abs(Gt-F.rotation)-Math.abs(Dt-F.rotation))[0]})():-dt.y*180/Math.PI),tiltX:ct?F.tiltX:F.wall?0:_t(dt.x*180/Math.PI),tiltY:ct?F.tiltY:F.wall?0:_t(dt.z*180/Math.PI)}}let Ut=(P,F)=>Object.entries(P).some(([q,dt])=>Math.abs(dt-F[q])>1e-6);function I(P){if(k&&P.pointerId===k.id){let F=k;if(k=null,A.pointerUp({button:0}),n.enabled=c(),O.hover(null),lt(P.pointerId),at(P),F.group){let q=F.members.map(dt=>({floor:dt.root.userData.level,id:dt.root.userData.primitive,changes:ne(dt.root,dt.original,F.mode!=="rotate"),baseline:dt.original}));q.some(dt=>Ut(dt.changes,dt.baseline))?d?.(q,F.scope)!==!0&&w.restore(F):w.restore(F)}else{let q=F.root,dt=ne(q,F.original,F.bounds);Ut(dt,F.original)?f(q.userData.level,q.userData.primitive,dt,F.original,{resizeBounds:!!F.bounds})===!1&&jt(q,F.original):jt(q,F.original)}return gt(),!0}if(z&&P.pointerId===z.id){let F=z;return z=null,lt(P.pointerId),at(P),Math.hypot(P.clientX-F.x,P.clientY-F.y)<=5&&h(F.root.userData.level,F.root.userData.primitive,F.shift),!0}return!1}function y(P){if(P!=null&&(k?.id??z?.id)!==P)return!1;let F=k,q=z;return k=null,z=null,O.hover(null),F&&(F.group?w.restore(F):jt(F.root,F.original),A.pointerUp({button:0}),n.enabled=c(),lt(F.id)),q&&lt(q.id),gt(),!!(F||q)}let W=P=>{P.key==="Escape"&&k&&(at(P),y())};window.addEventListener("keydown",W,!0);function j(P,F,{floorPlane:q=!1}={}){Bt();let dt=r.levels.find(le=>le.id===F);if(!dt||!s.get(F)?.visible)return null;let _t=!q&&Et(P).find(le=>le.root.userData.level===F),ct=!q&&a(P),Tt=ct?.floor===F?ct:null,zt=_t&&(!Tt||_t.distance<Tt.point.distanceTo(t.position))?{point:_t.point,normal:_t.face.normal.clone().applyMatrix3(new pe().getNormalMatrix(_t.object.matrixWorld)).normalize()}:Tt;if(!zt){let le=L(P);_.setFromCamera(new vt(le.x,le.y),t);let H=_.ray.intersectPlane(new $e(new R(0,1,0),-(dt.z+s.get(F).position.y)),new R);if(!H)return null;zt={point:H,normal:new R(0,1,0)}}let Gt=zt.point,Dt=zt.normal||new R(0,1,0);return{x:Gt.x,y:Gt.z,z:Gt.y-s.get(F).position.y,normal:{x:Dt.x,y:Dt.z,z:Dt.y}}}function pt(){if(!ft){Nt?.(),re(null),y(),ft=!0,window.removeEventListener("keydown",W,!0),O.dispose(),w.dispose(),J(!1),A.detach(),A.dispose(),i.remove(N);for(let P of g)P.removeFromParent();for(let P of[...Object.values(C),...D])P.dispose();S.dispose();for(let P of v)P.dispose()}}return{select:St,sync:Bt,updateBounds:gt,down:ut,move:bt,up:I,cancel:y,placement:j,previewWall:re,dispose:pt,dragging:()=>!!k,busy:()=>!!(k||z),setMode(P){["translate","scale","rotate"].includes(P)&&(y(),A.setMode(P),A.setSpace(P==="scale"?"local":"world"),ae())},objects:()=>g}}function bo(i){let t=new Ri(i.polygon.map(s=>new vt(s[0],-s[1])));for(let s of i.holes||[])t.holes.push(new Xi(s.map(r=>new vt(r[0],-r[1]))));let e=i.bottomPlane||i.topPlane,n=new rr(t,{depth:e?1:i.height,bevelEnabled:!1,steps:1});if(n.rotateX(-Math.PI/2),e){let s=n.attributes.position,r=(o,a,l,c)=>o?o.a*a+o.b*l+o.c:c;for(let o=0;o<s.count;o++){let a=s.getX(o),l=s.getZ(o),c=s.getY(o)>.5;s.setY(o,r(c?i.topPlane:i.bottomPlane,a,l,i.z+(c?i.height:0))-i.z)}s.needsUpdate=!0,n.computeVertexNormals()}return n.computeBoundingBox(),n.computeBoundingSphere(),n}function gf(i){return i.flights.flatMap(t=>{if(!t.ramp)return t.treads.map(c=>({...c.rect,polygon:c.polygon,z:c.z-.12,height:.12}));let[e,n]=t.upPath,s=n[0]-e[0],r=n[1]-e[1],o=(t.z1-t.z0)/(s*s+r*r||1),a=t.surface?.thickness??.18,l={a:s*o,b:r*o,c:t.z0-o*(s*e[0]+r*e[1])};return[{...t.rect,polygon:t.polygon,z:t.z0-a,height:t.z1-t.z0+a,topPlane:l,bottomPlane:{...l,c:l.c-a}}]}).concat(i.landings.map(t=>({...t.rect,polygon:t.polygon,z:t.z-.18,height:.18})))}function _f(i,t,e){let n=0,s=1;for(let r of["x","y","z"]){let o=t[r]-i[r],a=e.min[r],l=e.max[r];if(Math.abs(o)<1e-8){if(i[r]<a||i[r]>l)return null;continue}let c=(a-i[r])/o,h=(l-i[r])/o;if(c>h&&([c,h]=[h,c]),n=Math.max(n,c),s=Math.min(s,h),n>s)return null}return n>=0&&n<=1?n:null}function zx(i,t){if(i.polygon&&window.KERN_SHAPES){let r=window.KERN_SHAPES,o=(t.polygons||[]).filter(d=>d.kind==="slab"&&d.room===i.id&&Math.abs(d.z+d.height-i.z)<.01),a=d=>o.some(p=>r.contains(d,p.polygon)&&!(p.holes||[]).some(g=>r.contains(d,g))),l=r.labelAnchor(i),c=Math.min(i.w,4),h=Math.min(i.h,2);if(a(l))return{x:l.x-c/2,y:l.y-h/2,w:c,h,z:i.z};let f=null;for(let d of o){let p=[d.polygon,...d.holes||[]],g=r.bounds(d.polygon);for(let x=0;x<12;x++)for(let _=0;_<12;_++){let m={x:g.x+g.w*(_+.5)/12,y:g.y+g.h*(x+.5)/12};if(!a(m))continue;let C=Math.min(...p.flatMap(D=>D.map((A,N)=>{let O=D[(N+1)%D.length];return Math.hypot(A[0]-O[0],A[1]-O[1])>1e-8?r.project(m,{a:A,b:O}).distance:1/0}))),S=Math.min(1,C/Math.hypot(c/2,h/2)),v=S*c*h-Math.hypot(m.x-l.x,m.y-l.y)*1e-4;S*c>.35&&S*h>.35&&(!f||v>f.score)&&(f={...m,w:c*S,h:h*S,score:v})}}return f?{x:f.x-f.w/2,y:f.y-f.h/2,w:f.w,h:f.h,z:i.z}:null}let e=t.boxes.filter(r=>(r.kind==="slab"&&(!r.room||r.room===i.id)||r.kind==="landing")&&Math.abs(r.z+r.height-i.z)<.01).map(r=>{let o=Math.max(i.x,r.x),a=Math.max(i.y,r.y);return{x:o,y:a,w:Math.min(i.x+i.w,r.x+r.w)-o,h:Math.min(i.y+i.h,r.y+r.h)-a,z:r.z+r.height}}).filter(r=>r.w>.35&&r.h>.35),n=i.x+i.w/2,s=i.y+i.h/2;return e.sort((r,o)=>o.w*o.h-r.w*r.h||Math.hypot(r.x+r.w/2-n,r.y+r.h/2-s)-Math.hypot(o.x+o.w/2-n,o.y+o.h/2-s))[0]||null}function Hx(i,t,e,n){let s=Math.min(56,e*.42),r=[],o=a=>n.measureText?.(a).width??a.length*s*.56;for(let a=0;a<90;a++){n.font=`600 ${s}px system-ui`,r=[];let l="";for(let c of String(i).split(/\s+/)){let h=l?l+" "+c:c;l&&o(h)>t?(r.push(l),l=c):l=h}if(l&&r.push(l),r.every(c=>o(c)<=t)&&r.length*s*1.24<=e)break;s*=.92}return{lines:r,fontSize:s,lineHeight:s*1.24}}function xf(i,t,e){return i.stairs?.some(n=>{if(n.connectionId!==e.stair)return!1;let s=n.stops.find(o=>o.floor===t.id);if(!s)return!1;let r=n.stops.filter(o=>o.z<s.z-1e-6);return r.length>0&&e.z<s.z&&e.z>=Math.max(...r.map(o=>o.z))-.2})}function kx(i,t,e={}){let n=null,s=new Ol({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),r=()=>{s.setAnimationLoop(null),s.dispose(),s.forceContextLoss(),s.domElement.remove()};try{let P=function(u,M){let E=u.height;if(u.contextOnly&&St!==M.id||u.kind==="slab"&&(!He||$i)&&!qt||u.kind==="ceiling"&&(!He||$i)&&(!Nt||jt))return 0;let V=u.kind==="wall"||u.kind==="solid";return jt&&V&&(E=Math.max(0,Math.min(E,(u.baseZ??M.z)+ue-u.z))),V&&!xt&&(E=0),E},F=function(){let u=new Le;Vt=[];for(let M of g.values())M.position.y=M.userData.rank*z;k.position.y=0,k.userData.displayDatum=k.position.y;for(let M of C){let E=t.levels.find(st=>st.id===M.userData.level),V=g.get(E.id),it=M.userData.fadeMesh;M.userData.boxes.forEach((st,K)=>{let X=P(st,E),rt=ot&&M.userData.faded.has(K),$=(yt,It)=>{let Wt=It&&X>.001;u.position.set(st.x+st.w/2,st.z+X/2,st.y+st.h/2),u.scale.set(Wt?st.w:0,Wt?X:0,Wt?st.h:0),u.updateMatrix(),yt.setMatrixAt(K,u.matrix)};$(M,!rt),it&&$(it,rt),V.visible&&X>.001&&Vt.push({mesh:M,index:K,kind:st.kind,level:E.id,min:{x:st.x,y:st.z+V.position.y,z:st.y},max:{x:st.x+st.w,y:st.z+X+V.position.y,z:st.y+st.h}})}),M.visible=M.userData.boxes.some((st,K)=>P(st,E)>.001&&!(ot&&M.userData.faded.has(K))),M.instanceMatrix.needsUpdate=!0,it&&(it.visible=ot&&M.userData.boxes.some((st,K)=>P(st,E)>.001&&M.userData.faded.has(K)),it.instanceMatrix.needsUpdate=!0)}for(let M of v){let E=M.userData.shape,V=t.levels.find(st=>st.id===M.userData.level),it=P(E,V);if(E.bottomPlane||E.topPlane){let st=jt&&["wall","solid"].includes(E.kind)?(E.baseZ??V.z)+ue:1/0;if(M.userData.prismCutHeight!==st){let K=window.KERN_ELEVATIONS?.clipPrism?.(E,-1/0,st)||[E],X=[];for(let $ of K){let yt=bo($),It=yt.attributes.position;for(let Wt=0;Wt<It.count;Wt++)X.push(It.getX(Wt),It.getY(Wt)+$.z-E.z,It.getZ(Wt));yt.dispose()}let rt=new Ee;rt.setAttribute("position",new ge(X,3)),rt.computeVertexNormals(),rt.computeBoundingBox(),rt.computeBoundingSphere(),M.geometry.dispose(),M.geometry=rt,M.userData.prismCutHeight=st}M.scale.y=1}else M.scale.y=it/E.height;M.visible=it>.001&&(!M.userData.contextOnly||St===M.userData.level)}for(let M of x)M.visible=se;for(let M of _)M.visible=se&&!M.userData.duplicate;q(),o.updateMatrixWorld(!0),ae=""},q=function(){for(let u of S){let M=u.userData.floorHighlight||u.userData.floorLeader;u.visible=!!g.get(M)?.visible&&(M===Bt||j.has(M))}for(let u of x)u.material.color.set(u.userData.level===Bt||j.has(u.userData.level)?10410239:16777215)},dt=function(u){j=new Set((u||[]).filter(M=>g.has(M))),q()},_t=function(u){u&&!g.get(u)?.visible&&(u=null),u!==Bt&&(Bt=u,q(),s.domElement.style.cursor=u?"pointer":"default",e.onHover?.(u?t.levels.find(M=>M.id===u):null))},ct=function(u=!1){a.updateMatrixWorld(!0);let M=[...a.position.toArray(),...a.quaternion.toArray(),z,xt,jt,ue,se,ot,St,...W()].join(":");if(!u&&M===ae&&!ut)return;let E=[...a.position.toArray().map($=>$.toFixed(2)),...a.quaternion.toArray().map($=>$.toFixed(3)),z,xt,jt,ue,ot,...W()].join(":");E!==mt&&(mt=E,at=performance.now(),ut=ot);let V=!ot||!Et&&!L&&(u||performance.now()-at>=180),it=new Map(C.map($=>[$,new Set]));if(V&&ot&&xt)for(let $ of t.levels){let yt=g.get($.id);if(!yt.visible)continue;let It=$.boxes.filter(Wt=>Wt.kind==="slab").sort((Wt,Ht)=>Ht.w*Ht.h-Wt.w*Wt.h).slice(0,12);for(let Wt of It)for(let[Ht,he]of[[.5,.5],[.22,.22],[.78,.78]]){let de={x:Wt.x+Wt.w*Ht,y:Wt.z+Wt.height+.8+yt.position.y,z:Wt.y+Wt.h*he},ee=null,oe=1;for(let De of Vt){let Ge=_f(a.position,de,De);Ge!==null&&Ge>1e-5&&Ge<oe&&(oe=Ge,ee=De)}ee?.kind==="wall"&&oe<.985&&it.get(ee.mesh).add(ee.index)}}if(V){let $=new Set,yt=v.filter(It=>It.userData.kind==="wall"&&It.visible&&g.get(It.userData.level)?.visible);if(ot&&xt){for(let It of t.levels)if(g.get(It.id)?.visible)for(let Wt of(It.rooms||[]).slice(0,20)){let Ht=window.KERN_SHAPES?window.KERN_SHAPES.centroid(Wt):{x:Wt.x+Wt.w/2,y:Wt.y+Wt.h/2},he=new R(Ht.x,Wt.z+.8+g.get(It.id).position.y,Ht.y),de=he.clone().sub(a.position),ee=de.length(),De=new Gn(a.position,de.normalize(),.05,ee-.05).intersectObjects(yt,!1)[0];De&&$.add(De.object)}}for(let It of v)It.userData.kind==="wall"&&(It.material=D(It.userData.shape.color,$.has(It)))}let st=!1;if(V){for(let $ of C){let yt=it.get($),It=$.userData.faded;(yt.size!==It.size||[...yt].some(Wt=>!It.has(Wt)))&&(st=!0),$.userData.faded=yt}ut=!1}st&&F();let K=[],X=Math.max(1,i.clientWidth),rt=Math.max(1,i.clientHeight);for(let $ of[...x].sort((yt,It)=>+!!yt.userData.roomLabel-+!!It.userData.roomLabel||(It.userData.area||0)-(yt.userData.area||0))){let yt=$.getWorldPosition(new R),It=yt.clone().applyMatrix4(a.matrixWorldInverse),Wt=2*Math.max(.1,-It.z)*Math.tan(oi.degToRad(a.fov/2))/rt,Ht=Math.min($.userData.labelWidth*Wt,$.userData.maxWorldWidth||1/0);$.scale.set(Ht,Ht*$.userData.labelRatio,1);let he=yt.clone().project(a),de=Ht/Wt,ee=de*$.userData.labelRatio,oe={x:(he.x+1)*X/2-de/2,y:(1-he.y)*rt/2-ee/2,w:de,h:ee},De=K.some(Ge=>oe.x<Ge.x+Ge.w+5&&oe.x+oe.w+5>Ge.x&&oe.y<Ge.y+Ge.h+5&&oe.y+oe.h+5>Ge.y);if($.visible=se&&g.get($.userData.level).visible&&(!$.userData.roomLabel||$.userData.level===St)&&It.z<0&&he.z>=-1&&he.z<=1&&oe.x+oe.w>0&&oe.y+oe.h>0&&oe.x<X&&oe.y<rt&&de>=58&&!De&&!Vt.some(Ge=>{let qn=_f(a.position,yt,Ge);return qn!==null&&qn>1e-5&&qn<.995}),$.visible&&K.push(oe),$.userData.floorLabel){let Ge=S.find(qn=>qn.userData.floorLeader===$.userData.level);if(Ge){let qn=Ge.geometry.attributes.position;qn.setX(0,$.position.x+Ht/2),qn.needsUpdate=!0,Ge.visible=se&&$.visible&&($.userData.level===Bt||j.has($.userData.level))}}}for(let $ of _){let yt=$.getWorldPosition(new R);$.visible=se&&g.get($.userData.level).visible&&!$.userData.duplicate&&a.position.y>yt.y}ae=M},Tt=function(){L=null},zt=function(u,M,E,V=lt){let it=a.position.clone(),st=h.target.clone(),K=h.enableDamping;h.enableDamping=!1,h.update(),a.position.copy(it),h.target.copy(st),h.update(),h.enableDamping=K,L=E&&!ne?.matches?{from:it,targetFrom:st,to:u.clone(),targetTo:M.clone(),datumFrom:lt,datumTo:V,start:performance.now(),duration:420}:null,L||(lt=V,a.position.copy(u),h.target.copy(M),a.lookAt(M),h.update(),ct(!0))},Gt=function(u=performance.now()){if(!L)return!1;let M=L,E=ne?.matches?1:Math.min(1,Math.max(0,(u-M.start)/M.duration)),V=E*E*(3-2*E);return lt=oi.lerp(M.datumFrom,M.datumTo,V),a.position.lerpVectors(M.from,M.to,V),h.target.lerpVectors(M.targetFrom,M.targetTo,V),a.lookAt(h.target),a.updateMatrixWorld(!0),E===1&&(L=null,h.update()),!0},H=function(){let u=`${W().join("|")}:${z}:${a.aspect}:${a.fov}`;if(Dt?.key===u)return Dt;let M=new un;for(let X of g.values())if(X.visible){let rt=t.levels.find($=>$.id===X.userData.id);for(let $ of[...rt.boxes,...rt.polygons||[],...Q(rt)])M.expandByPoint(new R($.x,$.z+X.position.y,$.y)),M.expandByPoint(new R($.x+$.w,$.z+$.height+X.position.y,$.y+$.h))}M.isEmpty()&&(M.min.set(A.minX,A.minZ-J*z,A.minY),M.max.set(A.maxX,A.maxZ+(t.levels.length-1-J)*z,A.maxY));let E=M.getCenter(new R),V=M.getSize(new R),it=Math.max(V.length()/2,8),st=oi.degToRad(a.fov/2),K=it/Math.sin(st)*Math.max(1,1/a.aspect)*1.1;return Dt={key:u,center:E,distance:K}},Pt=function(){return He?1/Math.tan(oi.degToRad(a.fov/2)):H().distance/Math.max(.001,a.position.distanceTo(h.target))},Lt=function(){let u=Pt(),M=u<.1?Math.max(.1,Math.round(u*1e3)/10):Math.round(u*100);Number.isFinite(u)&&M!==le&&(le=M,e.onCameraChange?.(u))},Xt=function(u=!1,M=!1){let{center:E,distance:V}=H(),it=u?a.position.clone().sub(h.target).normalize():new R(1,.9,1.2).normalize();a.near=.05,a.far=Math.max(5e3,V*5),a.updateProjectionMatrix(),zt(E.clone().add(it.multiplyScalar(V)),E,M,wt(bt))},Rt=function(u,M=!0){let E=wt(u),V=E-lt;bt=u,zt(a.position.clone().add(new R(0,V,0)),h.target.clone().add(new R(0,V,0)),M,E)},Mt=function(){if(e.onFloorVisibility)return e.onFloorVisibility({all:!0});kn(),(Kt||fe==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&_e(!0),ht&&Hn(),Tt();for(let u of g.values())u.visible=!0;St=null,_t(null),F(),ct(!0),pt("visibility")},Zt=function(u){if(e.onFloorSelect)return e.onFloorSelect(u,{additive:!1});if(kn(),(Kt||fe==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&_e(!0),ht&&Hn(),!!g.has(u)){if(St===u&&W().length===1){pt();return}T(null,null),St=u;for(let[M,E]of g)E.visible=M===u;_t(null),F(),Rt(u),pt(),T(u,null)}},ie=function(u,{preserveEditing:M=!1}={}){if(g.has(u)){if(e.onFloorSelect&&!M)return e.onFloorSelect(u,{additive:!1});if(M&&e.getFloorState)return et(e.getFloorState());!M&&!g.get(u).visible&&(g.get(u).visible=!0,F()),St!==u&&(window.KERN_CONNECTION_3D?.cancel(),(fe==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&_e(!0)),St=u,bt=u,lt=wt(u),_t(null),M||Z([u]),ct(!0),pt(M?"sync":"navigation")}},Fe=function(u,M=!1){if(!g.has(u))return;if(e.onFloorSelect)return e.onFloorSelect(u,{additive:M});if(!M)return Zt(u);kn(),_e(),Hn();let E=g.get(u);E.visible=!E.visible,W().length||(E.visible=!0),T(null,null),ie(E.visible?u:W()[0]),F()},Ie=function(u){g.has(u)&&u!==bt&&ie(u,{preserveEditing:!0})},Bn=function(u){let M=t.levels.findIndex(V=>V.id===St),E=t.levels[M+Math.sign(u)];M>=0&&E&&(ie(E.id),Rt(E.id))},Ln=function(u,{physicalOnly:M=!1}={}){let E=s.domElement.getBoundingClientRect();if(!E.width||!E.height)return null;y.set((u.clientX-E.left)/E.width*2-1,-(u.clientY-E.top)/E.height*2+1),a.updateMatrixWorld(!0),o.updateMatrixWorld(!0),I.setFromCamera(y,a);let V=[...m,...v,...M?[]:[...x,..._]].filter(yt=>yt.visible&&g.get(yt.userData.level)?.visible),it=I.intersectObjects(V,!1)[0],st=it?.object.userData.level,K=it?.object.userData.boxes?.[it.instanceId],X=it?.object.userData.room||K?.room,rt=t.levels.find(yt=>yt.id===st)?.rooms?.find(yt=>yt.id===X);s.domElement.title=rt?rt.name:"";let $=it?.object.userData.sourceFloor||K?.sourceFloor||st;return Jt=it?{floor:$,displayFloor:st,door:it.object.userData.door||K?.door,room:X||K?.rooms?.[0],roomLabel:!!it.object.userData.roomLabel,floorSurface:(it.object.userData.kind||K?.kind)==="slab"&&!it.object.userData.door&&!K?.door,point:it.point,normal:it.face?.normal?.clone().applyMatrix3(new pe().getNormalMatrix(it.object.matrixWorld)).normalize()}:null,$||null},_r=function(u){u?.routeStair&&(u=window.KERN_ROUTE_STAIRS.editFrame(u));let M=u&&window.KERN_TRANSFORM?.frame(u),E=M?M.point(M.x+M.w/2,M.y+M.h):u?[u.x+u.w/2,u.y+u.h]:null;bs=u?{x:E[0],y:E[1],z:u.z+g.get(u.floor).position.y,w:M?.w??u.w,h:M?.h??u.h}:null,xr()},xr=function(){if(!bs||He){Xn.style.display="none";return}let u=bs,M=new R(u.x,u.z,u.y).project(a),E=s.domElement.getBoundingClientRect();Xn.textContent=u.w.toFixed(2)+" \xD7 "+u.h.toFixed(2)+" m",Xn.style.display="block",Xn.style.left=Math.min(Math.max(6,(M.x+1)*E.width/2-45),Math.max(6,E.width-135))+"px",Xn.style.top=Math.min(Math.max(6,(1-M.y)*E.height/2+15),Math.max(6,E.height-28))+"px"},T=function(u,M){for(n?.select([]),_r(null),ze=u?{floor:u,ids:M?[M]:[]}:null;we.children.length;){let st=we.children[0];we.remove(st),st.geometry.dispose()}let E=t.levels.find(st=>st.id===u)?.rooms.find(st=>st.id===M)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(u,M),V=t.levels.find(st=>st.id===u),it=V&&tt(V);me=g.has(u)?E?{...E,floor:u}:!M&&V?{id:null,isFloor:!0,floor:u,z:V.z,x:it.minX,y:it.minY,w:it.maxX-it.minX,h:it.maxY-it.minY}:null:null,me&&Ft(me)},Y=function(u,M){if(T(u,M[0]||null),ze={floor:u,ids:[...M]},M.length<2)return;for(me=null;we.children.length;){let V=we.children[0];we.remove(V),V.geometry.dispose()}let E=t.levels.find(V=>V.id===u)?.rooms.filter(V=>M.includes(V.id))||[];for(let V of E){let it=V.routeStair?window.KERN_ROUTE_STAIRS.editFrame(V):V,st=window.KERN_SHAPES?.points(it)||[[it.x,it.y],[it.x+it.w,it.y],[it.x+it.w,it.y+it.h],[it.x,it.y+it.h]],K=new Wi(new Ee().setFromPoints(st.map(X=>new R(X[0],it.z+g.get(u).position.y+.08,X[1]))),Yn);K.renderOrder=10,we.add(K)}if(E.length){let V=E.map(K=>K.routeStair?{...K,...window.KERN_ROUTE_STAIRS.bounds(K)}:K),it=Math.min(...V.map(K=>K.x)),st=Math.min(...V.map(K=>K.y));_r({floor:u,x:it,y:st,z:Math.min(...V.map(K=>K.z)),w:Math.max(...V.map(K=>K.x+K.w))-it,h:Math.max(...V.map(K=>K.y+K.h))-st})}},et=function({active:u,selected:M=[],visible:E=[],select:V=!1,navigate:it=!1}){let st=new Set(E),K=M.includes(u)&&g.has(u)?u:null;if(!(St===K&&g.has(u)&&bt===u&&W().length===st.size&&W().every(rt=>st.has(rt))&&j.size===M.length&&M.every(rt=>j.has(rt))&&!V&&!it)){n?.cancel(),ht&&Hn(),(Kt||fe==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&_e(!0),kn(),Ut.clear(),re=null;for(let[rt,$]of g)$.visible=st.has(rt);if(St=K,dt(M),g.has(u)&&(it?Rt(u):(bt=u,lt=wt(u))),V)Z(M);else if(me&&!st.has(me.floor)){let rt=me.isFloor?ze:null;T(null,null),rt&&(ze=rt)}ze?.objects&&nt(ze.objects.filter(rt=>st.has(rt.floor))),_t(null),F(),ct(!0),pt("controller")}},nt=function(u){let M=(u||[]).filter(E=>g.has(E.floor));if(M.length&&M.every(E=>E.kind==="rooms"&&E.floor===M[0].floor)){Y(M[0].floor,M.map(E=>E.id));return}if(T(null,null),n?.select(M),!!M.length){ze={objects:M.map(E=>({...E}))};for(let E of M){let V=E.polygons?.length?E.polygons:[[[E.x,E.y],[E.x+E.w,E.y],[E.x+E.w,E.y+E.h],[E.x,E.y+E.h]]],it=E.z+g.get(E.floor).position.y+.08;for(let st of V){let K=new Wi(new Ee().setFromPoints(st.map(X=>new R(X[0],it,X[1]))),Yn);K.renderOrder=10,K.userData.selectedObject={floor:E.floor,kind:E.kind,id:E.id},we.add(K)}}}},Z=function(u){let M=[...new Set(u||[])].filter(E=>g.get(E)?.visible);dt(u),T(M.length===1?M[0]:null,null),ze=M.length?{floors:M}:null},Ct=function(){if(!ze)return Xt(!0,!0);let u=new un,M=ze.floor;if(ze.objects){M=ze.objects[0]?.floor;for(let K of ze.objects){let X=g.get(K.floor).position.y;u.expandByPoint(new R(K.x,K.z+X,K.y)),u.expandByPoint(new R(K.x+K.w,K.z+K.height+X,K.y+K.h))}}else if(ze.floors){M=ze.floors.includes(St)?St:ze.floors[0];for(let K of ze.floors){let X=t.levels.find($=>$.id===K);if(!X||!g.get(K)?.visible)continue;let rt=g.get(K).position.y;for(let $ of[...X.boxes,...X.polygons||[],...Q(X)])u.expandByPoint(new R($.x,$.z+rt,$.y)),u.expandByPoint(new R($.x+$.w,$.z+$.height+rt,$.y+$.h))}}else{let K=t.levels.find($=>$.id===M);if(!K)return;let X=ze.ids.length?ze.ids.map($=>K.rooms.find(yt=>yt.id===$)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(K.id,$)).filter(Boolean):K.rooms,rt=g.get(K.id).position.y;for(let $ of X){let yt=$.routeStair?{...$,...window.KERN_ROUTE_STAIRS.bounds($)}:$;u.expandByPoint(new R(yt.x,yt.z+rt,yt.y)),u.expandByPoint(new R(yt.x+yt.w,yt.z+(yt.height||K.height||3)+rt,yt.y+yt.h))}}if(u.isEmpty())return;let E=u.getCenter(new R),V=Math.max(2,u.getSize(new R).length()/2),it=V/Math.sin(oi.degToRad(a.fov/2))*Math.max(1,1/a.aspect)*1.15,st=a.position.clone().sub(h.target).normalize();zt(E.clone().add(st.multiplyScalar(it)),E,!0,wt(M))},Ft=function(u){for(u.routeStair&&(u=window.KERN_ROUTE_STAIRS.editFrame(u)),_r(u);we.children.length;){let E=we.children[0];we.remove(E),E.geometry.dispose()}let M=u.z+g.get(u.floor).position.y+.08;if(!u.isFloor){let E=new Wi(new Ee().setFromPoints((window.KERN_SHAPES?.points(u)||[[u.x,u.y],[u.x+u.w,u.y],[u.x+u.w,u.y+u.h],[u.x,u.y+u.h]]).map(V=>new R(V[0],M,V[1]))),Yn);if(E.renderOrder=10,we.add(E),window.KERN_CONCRETE_CAP_UI?.readOnly(u.floor,u.id))return;for(let[V,it,st]of window.KERN_ROTATE?.active()&&window.KERN_ROTATE.eligibleRoom(u)?window.KERN_SHAPES.raw(u).map((K,X)=>["rotate-"+X,...K]):(window.KERN_TRANSFORM?.handles(u)||[["nw",u.x,u.y],["ne",u.x+u.w,u.y],["se",u.x+u.w,u.y+u.h],["sw",u.x,u.y+u.h]]).filter(K=>K[0].length===2)){let K=V.startsWith("rotate-")&&window.KERN_ROTATE?.pivotFor(u)?.index===Number(V.slice(7)),X=new At(new Pe(K?.55:.35,.15,K?.55:.35),K?vn:Yn);X.position.set(it,M,st),X.userData.edge=V,X.renderOrder=11,we.add(X)}}if(u.routeStair&&window.KERN_ROUTE_STAIRS){let E=u.routeStair,V=E.nodes,it=window.KERN_ROUTE_STAIRS.elevations(u,window.kernPlanner?.getPlan());for(let st=0;st<V.length;st++){let K=window.KERN_ROUTE_STAIRS.point(u,V[st]),X=it[st],rt=(st===0?E.start?.floor:st===V.length-1?E.end?.floor:null)||u.floor,$=g.get(rt)?.position.y??g.get(u.floor).position.y,yt=X+$,It=new At(new ni(.23,10,8),Yn);It.position.set(K[0],yt+.12,K[1]),It.userData.edge="route-node-"+st,It.userData.routeZ=X,It.userData.displayOffset=$,It.renderOrder=16,we.add(It);let Wt=new At(new nr(.18,.45,8),vn);if(Wt.position.set(K[0],yt+1,K[1]),Wt.userData.edge="route-height-"+st,Wt.userData.routeZ=X,Wt.userData.displayOffset=$,Wt.renderOrder=16,we.add(Wt),st===(window.KERN_ROUTE_UI?.selectedNode??0))for(let[Ht,he]of(V[st].landing||[]).entries()){let de=window.KERN_ROUTE_STAIRS.point(u,he),ee=new At(new Pe(.22,.15,.22),vn);ee.position.set(de[0],yt+.14,de[1]),ee.userData.edge="route-landing-"+st+"-"+Ht,ee.userData.routeZ=X,ee.userData.displayOffset=$,ee.renderOrder=17,we.add(ee)}}}if(!u.isFloor&&!window.KERN_ROTATE?.active()){let E=new At(new pi(.28),Yn);E.position.set(u.x+u.w/2,M,u.y+u.h/2),E.userData.edge="move",E.renderOrder=14,we.add(E)}if(!u.routeStair&&!window.KERN_ROTATE?.active()&&(u.isFloor||u.localSteps||window.KERN_ROTATE?.eligibleRoom(u))){let E=u.localSteps&&window.KERN_ELEVATION_UI?.handlePoint(u.floor,u.id),V=E?.x??u.x+u.w/2,it=E?.y??u.y+u.h/2,st=(u.__elevation?u.z:window.KERN_ELEVATION_UI?.handleZ(u.floor,u.id)??u.z)+g.get(u.floor).position.y,K=new Ze(new Ee().setFromPoints([new R(V,st,it),new R(V,st+1.6,it)]),vn);K.renderOrder=12,we.add(K);let X=new At(new nr(.23,.55,8),vn);X.position.set(V,st+1.6,it),X.userData.edge="elevate",X.renderOrder=13,we.add(X)}},Yt=function(u,M){let E=s.domElement.getBoundingClientRect();return y.set((u.clientX-E.left)/E.width*2-1,-(u.clientY-E.top)/E.height*2+1),a.updateMatrixWorld(!0),o.updateMatrixWorld(!0),I.setFromCamera(y,a),I.ray.intersectPlane(new $e(new R(0,1,0),-(M.z+g.get(M.floor).position.y)),new R)},$t=function(){for(;be.children.length;){let u=be.children[0];be.remove(u),u.geometry.dispose()}},_e=function(u=!1){let M=Kt;Kt=null,window.KERN_BRIDGE_UI?.cancel(),$t(),Se.style.display="none",h.enabled=!He,M&&s.domElement.hasPointerCapture(M.pointerId)&&s.domElement.releasePointerCapture(M.pointerId),u&&(window.KERN_CONNECTION_3D?.cancel(),fe="select",we.visible=!He)},Ae=function(u){u!==fe&&(n?.cancel(),window.KERN_CONNECTION_3D?.cancel(),_e(),u!=="select"&&u!=="bridge"&&!St&&ie(bt,{preserveEditing:!0}),fe=u,we.visible=u==="select",s.domElement.title=u==="bridge"?"Click two room floors at the same height":u==="edge-steps"?"Click a room edge and drag outward":u==="steps"?"Draw between two different-height surfaces":u==="room"?"Drag a room footprint":u==="stairs"?"Draw a stair footprint, then choose destination floors":"")},nn=function(u,M){let E=s.domElement.getBoundingClientRect();y.set((u.clientX-E.left)/E.width*2-1,-(u.clientY-E.top)/E.height*2+1),a.updateMatrixWorld(!0),I.setFromCamera(y,a);let V=I.ray.intersectPlane(new $e(new R(0,1,0),-M),new R);return V?{x:V.x,y:V.z}:null},zn=function(u){if($t(),Se.style.display="block",Se.style.left="18px",Se.style.top="auto",Se.style.bottom="18px",Se.textContent=u.error||u.summary,u.error||u.valid===!1||!u.room&&!u.detail||!g.has(u.fid))return;let M=u.room?.bridge?[{...u.room,polygon:window.KERN_SHAPES.points(u.room),z:u.room.z-.15,height:.15}]:u.detail?gf(u.detail):[{...u.room,z:t.levels.find(E=>E.id===u.fid).z-.15,height:.15}];for(let E of M){let V;E.polygon?V=bo(E):V=new Pe(E.w,E.height,E.h);let it=new At(V,vn);E.polygon?it.position.y=E.z+g.get(u.fid).position.y:it.position.set(E.x+E.w/2,E.z+E.height/2+g.get(u.fid).position.y,E.y+E.h/2),it.renderOrder=14,be.add(it)}},fn=function(u){if(Ln(u,{physicalOnly:!0}),!Jt?.floorSurface||!Jt.room||!Jt.normal||Jt.normal.y<.5)return null;let M=t.levels.find(V=>V.id===Jt.floor),E=M?.rooms.find(V=>V.id===Jt.room);return E?{floor:M.id,p:{x:Jt.point.x,y:Jt.point.z},z:E.z}:null},xi=function(u,M=St||bt){Ln(u);let E=Jt?.floor||M,V=t.levels.find(K=>K.id===E);if(!V)return null;let it=Jt?{x:Jt.point.x,y:Jt.point.z}:nn(u,V.z+g.get(E).position.y);if(!it)return null;let st=Jt?.point||new R(it.x,V.z+g.get(E).position.y,it.y);return{floor:E,room:Jt?.room,door:Jt?.door,p:it,altKey:!!u.altKey,worldPerPixel:2*a.position.distanceTo(st)*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height)}},Ve=function(u){$t(),Se.style.display="block",Se.style.left="18px",Se.style.top="auto",Se.style.bottom="18px",Se.textContent=u.valid?u.summary||(fe==="disconnect"?"Release to remove connection":"Click or release to place opening"):u.reason||"Choose a wall";let M=u.geometry;if(!(!M||!g.has(u.fid)))for(let E of M.segments||[M]){let V=E,it=V.axis==="poly"?V.p0:V.axis==="h"?[V.start,V.fixed]:[V.fixed,V.start],st=V.axis==="poly"?V.p1:V.axis==="h"?[V.end,V.fixed]:[V.fixed,V.end],K=u.door?.kind==="window"?u.door.sill??.9:0,X=u.door?.kind==="window"?u.door.height??1.4:u.door?.maximumPassage?u.door.height:window.KERN_LOW_OPENINGS?.recognized(u.door)?u.clearHeight??u.door.height:2.2,rt=u.z+K+g.get(u.fid).position.y,$=[[it[0],rt,it[1]],[st[0],rt,st[1]],[st[0],rt+X,st[1]],[it[0],rt+X,it[1]]],yt=new Wi(new Ee().setFromPoints($.map(It=>new R(...It))),ws);yt.renderOrder=20,be.add(yt)}},qh=function(){if(!Rn)return;a.position.set(Rn.x+(Rn.bobX||0)*Math.cos(Ro),Rn.z+(Rn.eyeHeight??1.6278874)+(Rn.bobY||0),Rn.y-(Rn.bobX||0)*Math.sin(Ro)),a.rotation.order="YXZ",a.rotation.set(Gh,Ro,Rn.roll||0);let u=new R(0,0,-1).applyQuaternion(a.quaternion);if(Li.position.copy(a.position),Li.target.position.copy(a.position).add(u.multiplyScalar(8)),Li.visible=Wh,!Rn.fly){for(let M of x)M.visible=!1;for(let M of _)M.visible=!M.userData.duplicate&&Math.abs(M.position.y-Rn.z)<.2}},Sf=function(u,M=0,E=0,V=!0,it=!1){if(u){if(n?.cancel(),_e(!0),!He){if(Rs=Zl(),a.fov=u.fov??90,a.updateProjectionMatrix(),He=!0,$i=!!u.fly,o.children.filter(st=>st.isHemisphereLight||st.isDirectionalLight).forEach(st=>{st.userData.originalIntensity=st.intensity,u.fly||(st.intensity=st.isHemisphereLight?.8:.3)}),we.visible=!1,h.enabled=!1,L=null,!u.fly){z=0,xt=!0,jt=!1,ot=!1,se=!1,St=null;for(let st of g.values())st.visible=!0;k.visible=!1,Ni.visible=!0}F()}if($i&&!u.fly){z=0,xt=!0,jt=!1,ot=!1,se=!1,St=null;for(let st of g.values())st.visible=!0;k.visible=!1,Ni.visible=!0,$i=!1,F()}$i=!!u.fly,a.fov!==(u.fov??90)&&(a.fov=u.fov??90,a.updateProjectionMatrix()),Rn=u,Ro=M,Gh=E,Wh=V,qh()}else if(He){let st=a.position.clone(),K=a.getWorldDirection(new R);He=!1,$i=!1,a.fov=Rs?.fov??42,a.updateProjectionMatrix(),o.children.filter(X=>X.isHemisphereLight||X.isDirectionalLight).forEach(X=>X.intensity=X.userData.originalIntensity??X.intensity),we.visible=!0,Rn=null,Li.visible=!1,Ni.visible=!1,h.enabled=!0,a.rotation.order="XYZ",Kl(it?{...Rs,position:st.toArray(),target:st.clone().add(K.multiplyScalar(10)).toArray()}:Rs)}},Zl=function(){return{fov:a.fov,position:a.position.toArray(),target:h.target.toArray(),focused:St,navigationFloor:bt,navigationY:lt,navigationElevation:wt(bt),visible:W(),gap:z,showWalls:xt,showCeilings:Nt,showSlabs:qt,cutaway:jt,cutHeight:ue,labels:se,xray:ot,showGrid:gt,overview:null}},Kl=function(u){if(!u||ft)return;a.fov=Number.isFinite(u.fov)?u.fov:42,a.updateProjectionMatrix();let M=it=>Array.isArray(it)&&it.length===3&&it.every(Number.isFinite);Tt(),z=Math.max(0,Math.min(12,Number(u.gap)||0)),xt=u.showWalls!==!1,Nt=!!u.showCeilings,qt=u.showSlabs!==!1,jt=u.cutaway!==!1,ue=Number.isFinite(u.cutHeight)?Math.max(.4,Math.min(2.4,u.cutHeight)):1.15,se=u.labels!==!1,ot=!!u.xray,gt=u.showGrid!==!1,k.visible=gt,St=g.has(u.focused)?u.focused:null;let E=Array.isArray(u.visible)?u.visible.filter(it=>g.has(it)):[...g.keys()];for(let[it,st]of g)st.visible=E.includes(it);if(!St&&!E.length&&u.visible?.length)for(let it of g.values())it.visible=!0;bt=g.has(u.navigationFloor)?u.navigationFloor:St||bt;let V=g.has(u.navigationFloor)&&Number.isFinite(u.navigationElevation)?wt(bt)-u.navigationElevation:0;lt=(Number.isFinite(u.navigationY)?u.navigationY:wt(bt))+V,_t(null),F(),M(u.position)&&M(u.target)?zt(new R().fromArray(u.position).add(new R(0,V,0)),new R().fromArray(u.target).add(new R(0,V,0)),!1):Xt(),ct(!0),pt("restore")},Zh=function(){if(!ft){wo?.(),n?.dispose(),s.domElement.removeEventListener("pointerdown",ai,!0),s.domElement.removeEventListener("pointermove",Ch,!0),s.domElement.removeEventListener("pointerup",Ph,!0),s.domElement.removeEventListener("pointercancel",Ao,!0),s.domElement.removeEventListener("lostpointercapture",Ao,!0),_e(!0),s.domElement.removeEventListener("pointerdown",te,!0),s.domElement.removeEventListener("pointermove",ve,!0),s.domElement.removeEventListener("lostpointercapture",Te,!0),s.domElement.removeEventListener("pointerup",Te,!0),s.domElement.removeEventListener("pointercancel",Te,!0),s.domElement.removeEventListener("pointerdown",Mn,!0),s.domElement.removeEventListener("pointermove",En,!0),s.domElement.removeEventListener("pointerup",sn,!0),s.domElement.removeEventListener("pointercancel",cn,!0),s.domElement.removeEventListener("lostpointercapture",Ts,!0),ft=!0,Li.dispose();for(let u of Ni.children)u.geometry.dispose();L=null,s.setAnimationLoop(null),kh.disconnect(),s.domElement.removeEventListener("pointerdown",Ih,!0),s.domElement.removeEventListener("pointermove",Dh,!0),s.domElement.removeEventListener("pointerup",Lh,!0),s.domElement.removeEventListener("pointercancel",Hn,!0),s.domElement.removeEventListener("lostpointercapture",Hn,!0),As.remove(),s.domElement.removeEventListener("pointerdown",Nh,!0),s.domElement.removeEventListener("pointermove",Uh,!0),s.domElement.removeEventListener("pointerup",Fh,!0),s.domElement.removeEventListener("pointercancel",kn,!0),s.domElement.removeEventListener("lostpointercapture",kn,!0),Xn.remove(),Se.remove(),Ss.dispose(),vn.dispose(),Yn.dispose(),ws.dispose(),To.dispose();for(let u of we.children)u.geometry.dispose();h.removeEventListener("start",zh),h.removeEventListener("end",Hh),h.dispose();for(let[u,M]of Object.entries(Oh))s.domElement.removeEventListener(u,M);s.domElement.removeEventListener("webglcontextlost",Vh),window.removeEventListener("blur",ql);for(let u of[...x,..._])u.material.map.dispose(),u.material.dispose(),u.geometry&&!u.isSprite&&u.geometry.dispose();for(let u of S)u.geometry.dispose(),u.material.dispose();for(let u of v)u.geometry.dispose();for(let u of p.values())u.dispose();d.dispose(),k.geometry.dispose();for(let u of Array.isArray(k.material)?k.material:[k.material])u.dispose();s.dispose(),s.forceContextLoss(),s.domElement.remove(),o.clear(),Ut.clear()}};s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.outputColorSpace=on,s.setClearColor(1514532),s.domElement.setAttribute("aria-label","3D building editor. Alt-left drag orbits; middle or right drag pans. Alt-right drag horizontally zooms at the starting pointer: right closer, left farther. Click a floor or floor control to show and edit it alone; Shift-click adds or removes floors. F frames the selection. Click rooms and openings within the selected floor to edit them."),s.domElement.tabIndex=0,i.appendChild(s.domElement);let o=new Gr,a=new hn(42,1,.05,5e3);o.add(new ao(15988735,4739939,2.2));let l=new ar(16777215,2.5);l.position.set(-40,80,-30),o.add(l);let c=new ar(12044524,.6);c.position.set(40,10,60),o.add(c);let h=new kl(a,s.domElement),f=r;r=()=>{h.dispose();let u=new Set,M=new Set,E=new Set;o.traverse(V=>{V.geometry&&u.add(V.geometry);for(let it of Array.isArray(V.material)?V.material:V.material?[V.material]:[])M.add(it),it.map&&E.add(it.map)});for(let V of E)V.dispose();for(let V of M)V.dispose();for(let V of u)V.dispose();o.clear(),f()},h.enableDamping=!0,h.dampingFactor=.09,h.maxPolarAngle=Math.PI-.001,h.minDistance=1,h.maxDistance=1600,h.screenSpacePanning=!0,h.mouseButtons={LEFT:null,MIDDLE:Tn.PAN,RIGHT:Tn.PAN},h.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN};let d=new Pe(1,1,1),p=new Map,g=new Map,x=[],_=[],m=[],C=[],S=[],v=[],D=(u,M=!1)=>{let E=u+(M?":xray":"");return p.has(E)||p.set(E,new us({color:u,roughness:.88,metalness:0,transparent:M,opacity:M?.5:1,depthWrite:!M})),p.get(E)},A=t.bounds,N=(A.minX+A.maxX)/2,O=(A.minY+A.maxY)/2,w=Math.max(6,(A.maxX-A.minX)*.22),b=t.levels.find(u=>u.id==="L0"),U=t.siteGroundZ??b?.z??0,J=b?t.levels.indexOf(b):t.levels.reduce((u,M,E)=>Math.abs(M.z-U)<Math.abs(t.levels[u].z-U)?E:u,0),Q=u=>(u.primitives||[]).map(M=>{let E=window.KERN_PRIMITIVES.bounds(M);return{...E,z:u.z+E.z}}),tt=u=>{let M=[...u.boxes,...u.polygons||[],...Q(u)];return M.length?{minX:Math.min(...M.map(E=>E.x)),maxX:Math.max(...M.map(E=>E.x+E.w)),minY:Math.min(...M.map(E=>E.y)),maxY:Math.max(...M.map(E=>E.y+E.h))}:A},B=(u,M,E)=>{let V=zx(u,M);if(!V)return;let it=String(u.name||u.id),st=Math.min(.32,Math.min(V.w,V.h)*.1),K=V.h>V.w*1.35,X=(K?V.h:V.w)-st*2,rt=(K?V.w:V.h)-st*2,$=Math.min(X,9),yt=Math.min(rt,2.5),It=64,Wt=document.createElement("canvas");Wt.width=Math.ceil($*It),Wt.height=Math.ceil(yt*It);let Ht=Wt.getContext("2d");if(!Ht)return;let he=Hx(it,Wt.width-10,Wt.height-8,Ht);Ht.fillStyle="#263545",Ht.textAlign="center",Ht.textBaseline="middle",Ht.strokeStyle="#eef3f4",Ht.lineWidth=Math.max(1,he.fontSize*.045),Ht.lineJoin="round",he.lines.forEach((oe,De)=>{let Ge=Wt.height/2+(De-(he.lines.length-1)/2)*he.lineHeight;Ht.strokeText?.(oe,Wt.width/2,Ge),Ht.fillText(oe,Wt.width/2,Ge)});let de=new cs(Wt);de.colorSpace=on;let ee=new At(new In($,yt),new an({map:de,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));ee.rotation.set(-Math.PI/2,0,K?Math.PI/2:0),ee.position.set(V.x+V.w/2,V.z+.006,V.y+V.h/2),ee.renderOrder=2,ee.userData={level:M.id,roomLabel:!0,room:u.id,name:it,surface:V,worldWidth:$,worldHeight:yt,fontSize:he.fontSize/It,lines:he.lines},ee.userData.duplicate=_.some(oe=>oe.userData.level===M.id&&oe.position.distanceTo(ee.position)<.01),E.add(ee),_.push(ee)};for(let u=0;u<t.levels.length;u++){let M=t.levels[u],E=new _n,V=tt(M);E.userData={id:M.id,rank:u-J,z:M.z},g.set(M.id,E),o.add(E);let it=new Map;for(let rt of[...M.boxes,...t.levels.flatMap($=>$.id===M.id?[]:$.boxes.filter(yt=>["stair","landing"].includes(yt.kind)&&xf(t,M,yt)).map(yt=>({...yt,contextOnly:!0})))]){let $=`${rt.color}:${rt.kind}:${!!rt.contextOnly}`;it.has($)||it.set($,[]),it.get($).push(rt)}for(let rt of it.values()){let $=new tr(d,D(rt[0].color,rt[0].kind==="window"),rt.length);if($.frustumCulled=!1,$.userData={boxes:rt,level:M.id,faded:new Set},E.add($),m.push($),C.push($),rt[0].kind==="wall"){let yt=new tr(d,D(rt[0].color,!0),rt.length);yt.frustumCulled=!1,yt.renderOrder=1,yt.userData={boxes:rt,level:M.id,primary:$,xray:!0},$.userData.fadeMesh=yt,E.add(yt),m.push(yt)}}for(let rt of[...M.polygons||[],...t.levels.flatMap($=>$.id===M.id?[]:($.polygons||[]).filter(yt=>xf(t,M,yt)).map(yt=>({...yt,contextOnly:!0})))]){let $=bo(rt),yt=new At($,D(rt.color,rt.kind==="window"));yt.position.y=rt.z,yt.userData={level:M.id,stair:rt.stair,sourceFloor:rt.sourceFloor,door:rt.door,contextOnly:!!rt.contextOnly,room:rt.room,kind:rt.kind,shape:rt},E.add(yt),v.push(yt)}let st=new uo(new un(new R(V.minX,M.z+.04,V.minY),new R(V.maxX,M.z+.07,V.maxY)),8176895);st.visible=!1,st.material.depthTest=!0,st.material.transparent=!0,st.material.opacity=.95,st.userData.floorHighlight=M.id,E.add(st),S.push(st);let K=document.createElement("canvas");K.width=640,K.height=96;let X=K.getContext("2d");if(X){X.fillStyle="#202936",X.fillRect(0,0,640,96),X.strokeStyle="#465367",X.strokeRect(1,1,638,94),X.fillStyle="#e7effc",X.font="500 34px system-ui",X.fillText(`${M.id} \xB7 ${M.z>0?"+":""}${M.z.toFixed(2)} m`,18,38),X.fillStyle="#c9d4e4",X.font="30px system-ui",X.fillText(String(M.name).slice(0,40),18,77,604);let rt=new cs(K);rt.colorSpace=on;let $=new Xr(new Qs({map:rt,depthTest:!0,depthWrite:!1}));$.position.set(A.minX-w*.65-1,M.z+.2,(V.minY+V.maxY)/2),$.scale.set(w,w*96/640,1),$.userData={level:M.id,floorLabel:!0,labelWidth:230,labelRatio:96/640},E.add($),x.push($);let yt=new Ze(new Ee().setFromPoints([new R($.position.x+w/2,M.z+.2,$.position.z),new R(V.minX,M.z+.07,$.position.z)]),new Pn({color:8176895,depthTest:!0,transparent:!0,opacity:.9}));yt.visible=!1,yt.userData.floorLeader=M.id,E.add(yt),S.push(yt)}for(let rt of M.rooms||[])B(rt,M,E);for(let rt of M.annotations||[]){let $=String(rt.text||""),yt=rt.fontSize||.45;if(!$)continue;let It=Math.min(30,Math.max(yt,$.length*yt*.58)),Wt=yt*1.3,Ht=document.createElement("canvas");Ht.width=Math.ceil(It*64),Ht.height=Math.ceil(Wt*64);let he=Ht.getContext("2d");if(!he)continue;he.font=`${yt*64}px system-ui,Segoe UI,sans-serif`,he.fillStyle="#53686d",he.textAlign="center",he.textBaseline="middle",he.fillText($,Ht.width/2,Ht.height/2,Ht.width);let de=new cs(Ht);de.colorSpace=on;let ee=new At(new In(It,Wt),new an({map:de,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1})),oe=M.rooms.find(De=>De.id===rt.sourceRoom)||M.rooms.find(De=>rt.x>=De.x&&rt.x<=De.x+De.w&&rt.y>=De.y&&rt.y<=De.y+De.h);ee.rotation.x=-Math.PI/2,ee.position.set(rt.x,(oe?.z??M.z)+.008,rt.y),ee.renderOrder=2,ee.userData={level:M.id,annotationLabel:!0,annotation:rt.id,name:$},E.add(ee),_.push(ee)}}let G=Math.max(A.maxX-A.minX,A.maxY-A.minY,15)*1.35,k=new ho(G,Math.min(100,Math.ceil(G)),6781842,3160648);k.position.set(N,U,O),k.userData.groundDatum=U,o.add(k),k.renderOrder=-10;for(let u of Array.isArray(k.material)?k.material:[k.material])u.transparent=!1,u.opacity=1,u.depthWrite=!1;let z=0,ft=!1,xt=!0,Nt=!1,qt=!0,jt=!0,ue=1.15,se=!0,ot=!1,gt=!0,Bt=null,St=null,Vt=[],ae="",re=null,L=null,Et=!1,mt="",at=0,ut=!1,bt=g.has(e.activeFloor)?e.activeFloor:b?.id||t.levels[J]?.id,lt=g.get(bt)?.userData.z||0,wt=u=>{let M=g.get(u);return M?M.userData.z+M.userData.rank*z:lt},ne=window.matchMedia?.("(prefers-reduced-motion: reduce)"),Ut=new Set,I=new Gn,y=new vt,W=()=>[...g].filter(([,u])=>u.visible).map(([u])=>u),j=new Set((e.editableFloors||[]).filter(u=>g.has(u))),pt=(u="navigation")=>e.onVisibilityChanged?.(W(),St,u),Dt=null,le=null,Jt=null,me=null,ht=null,ze=null,wo=window.KERN_DRAG_AXES?.register(()=>ht&&(!ht.edge||ht.edge==="elevate"||ht.edge.startsWith("route-"))?ht:null,()=>Hn()),we=new _n;o.add(we);let Se=document.createElement("div");Se.style.cssText="position:absolute;left:18px;bottom:18px;padding:8px 12px;background:#172b37;color:#e7b16b;pointer-events:none;display:none",i.append(Se);let vn=new an({color:15184235,transparent:!0,opacity:.65,depthTest:!1}),Ss=new ro({color:15185774,dashSize:.18,gapSize:.12,depthTest:!1}),bs=null,Xn=document.createElement("div");Xn.dataset.selectionDimensions="true",Xn.style.cssText="position:absolute;pointer-events:none;display:none;padding:4px 7px;border-radius:4px;background:#172b37dd;color:#e7b76e;font:13px system-ui",i.append(Xn);let To=new an({color:11184810,transparent:!0,opacity:.1,depthTest:!1,depthWrite:!1,side:ln}),ws=new Pn({color:5493465,depthTest:!1}),Yn=new an({color:5941759,depthTest:!1}),Ot=null,Qt=null,ce=0,te=u=>{if(n?.busy()||window.KERN_MAX_PASSAGE_UI?.altConnectIntent(u)||He||!u.altKey||ht||Kt||![0,1,2].includes(u.button)||u.button===0&&me&&fe==="select"&&(Yt(u,me),I.intersectObjects(we.children,!1).some(V=>["nw","ne","se","sw"].includes(V.object.userData.edge))))return;if(Ot=u.pointerId,re=null,Ut.clear(),kn(),Tt(),ce=performance.now()+500,h.mouseButtons.LEFT=Tn.ROTATE,h.mouseButtons.RIGHT=Tn.PAN,s.domElement.style.cursor=u.button===2?"ew-resize":"grabbing",u.__viewNavigation=!0,u.preventDefault(),u.button!==2){h.enabled=!0;return}zt(a.position.clone(),h.target.clone(),!1),Ln(u);let M=a.getWorldDirection(new R),E=Jt?.point.clone()||I.ray.intersectPlane(new $e().setFromNormalAndCoplanarPoint(M,h.target),new R)||h.target.clone();Qt={x:u.clientX,anchor:E,position:a.position.clone(),target:h.target.clone(),distance:a.position.distanceTo(h.target)},h.enabled=!1,s.domElement.setPointerCapture(u.pointerId),u.stopImmediatePropagation()},ve=u=>{if(Ot!==u.pointerId||!Qt)return;u.__viewNavigation=!0,u.preventDefault(),u.stopImmediatePropagation();let M=Qt,E=oi.clamp(M.distance*Math.exp(-(u.clientX-M.x)*.01),h.minDistance,h.maxDistance)/M.distance;zt(M.position.clone().sub(M.anchor).multiplyScalar(E).add(M.anchor),M.target.clone().sub(M.anchor).multiplyScalar(E).add(M.anchor),!1),xr()},Te=u=>{if(Ot!==u.pointerId)return;let M=!!Qt;u.__viewNavigation=!0,Ot=null,Qt=null,ce=performance.now()+400,h.mouseButtons.LEFT=null,h.mouseButtons.RIGHT=Tn.PAN,h.enabled=!He,window.KERN_TRANSFORM?.syncCursor(),s.domElement.style.cursor="",M&&(u.preventDefault(),u.stopImmediatePropagation(),s.domElement.hasPointerCapture(u.pointerId)&&s.domElement.releasePointerCapture(u.pointerId))};s.domElement.addEventListener("pointerdown",te,!0),s.domElement.addEventListener("pointermove",ve,!0),s.domElement.addEventListener("pointerup",Te,!0),s.domElement.addEventListener("pointercancel",Te,!0),s.domElement.addEventListener("lostpointercapture",Te,!0);let fe="select",Kt=null,be=new _n;be.userData.authorPreview=!0,o.add(be);let Mn=u=>{if(Ot===u.pointerId||u.__viewNavigation||He||fe==="select"||u.button!==0)return;if(u.preventDefault(),u.stopImmediatePropagation(),fe==="bridge"){let K=fn(u);K&&window.KERN_BRIDGE_UI?.click(K),$t(),Se.style.display="none";return}if(["door","connect","disconnect"].includes(fe)){let K=xi(u);if(!K)return;ie(K.floor,{preserveEditing:!0}),Kt={connection:!0,pointerId:u.pointerId,floor:K.floor,begin:window.KERN_CONNECTION_3D.begin(fe,K),last:K,clientX:u.clientX,clientY:u.clientY},h.enabled=!1,s.domElement.setPointerCapture(u.pointerId);return}if(!window.KERN_AUTHORING_3D||(Ln(u),Jt?.floor&&!(fe==="stair-route"&&window.KERN_ROUTE_UI?.getDraft().length)&&ie(Jt.floor,{preserveEditing:!0}),!St))return;let M=t.levels.find(K=>K.id===(Jt?.floor||St)),E=M.rooms.find(K=>K.id===Jt?.room)||(me?.isFloor?null:me),V=(E?.z??M.z)+g.get(M.id).position.y,it=nn(u,V);if(!it)return;if(fe==="stair-route"){window.KERN_ROUTE_UI?.addPoint(it,u,E?.id,M.id);return}let st=window.KERN_AUTHORING_3D.begin(fe,Jt?.floor||St,it,E?.id,window.KERN_AUTHORING_3D.width());if(st.error){zn(st);return}Kt={pointerId:u.pointerId,z:V,begin:st,floor:St},h.enabled=!1,s.domElement.setPointerCapture(u.pointerId)},En=u=>{if(Kt?.connection){if(u.pointerId!==Kt.pointerId)return;u.preventDefault(),u.stopImmediatePropagation(),Kt.last=xi(u,Kt.floor)||Kt.last,Kt.moved=Math.hypot(u.clientX-Kt.clientX,u.clientY-Kt.clientY)>5,Ve(window.KERN_CONNECTION_3D.preview(fe,Kt.last,Kt.moved?Kt.begin.hit:Kt.begin.pending));return}if(!Kt){if(!He&&Ot===null&&fe==="bridge"){let E=fn(u),V=E&&window.KERN_BRIDGE_UI?.preview(E);V?zn(V):($t(),Se.style.display="none");return}if(!He&&Ot===null&&["door","connect","disconnect"].includes(fe)){let E=xi(u);E&&Ve(window.KERN_CONNECTION_3D.preview(fe,E));return}if(!He&&Ot===null&&St&&["edge-steps","stair-route"].includes(fe)){Ln(u);let E=t.levels.find(K=>K.id===(Jt?.floor||St)),V=E.rooms.find(K=>K.id===Jt?.room),it=(V?.z??E.z)+g.get(E.id).position.y,st=nn(u,it);if($t(),!st)return;if(fe==="edge-steps"){let K=window.KERN_AUTHORING_3D.begin("edge-steps",St,st,V?.id,window.KERN_AUTHORING_3D.width());if(!K.error){let X=new Ze(new Ee().setFromPoints([K.edge.a,K.edge.b].map(rt=>new R(rt[0],it+.1,rt[1]))),ws);X.renderOrder=18,be.add(X)}}else{let K=window.KERN_ROUTE_UI?.preview(st,u,V?.id,E.id);if(K){K.detail&&zn(K);let X=window.snapSize?.()||.25,rt=new At(new In(X,X),To);rt.rotation.x=-Math.PI/2,rt.position.set(K.point[0],it+.025,K.point[1]),rt.renderOrder=17,be.add(rt);let $=new At(new ni(.07,10,8),Yn);$.position.set(K.point[0],it+.1,K.point[1]),$.renderOrder=19,be.add($)}}}return}if(u.pointerId!==Kt.pointerId)return;if(u.preventDefault(),u.stopImmediatePropagation(),Kt.floor!==St){_e();return}let M=nn(u,Kt.z);M&&(Kt.next=window.KERN_AUTHORING_3D.candidate(Kt.begin,M,u.ctrlKey),zn(Kt.next))},sn=u=>{if(!Kt||u.pointerId!==Kt.pointerId)return;if(u.preventDefault(),u.stopImmediatePropagation(),Kt.connection){let E=Kt;Kt=null,$t(),Se.style.display="none",h.enabled=!0,s.domElement.hasPointerCapture(u.pointerId)&&s.domElement.releasePointerCapture(u.pointerId),window.KERN_CONNECTION_3D.finish(E.begin,E.last,E.moved);return}let M=Kt.next;_e(),M&&!M.error&&(_e(!0),window.KERN_AUTHORING_3D.finish(M))};s.domElement.addEventListener("pointerdown",Mn,!0),s.domElement.addEventListener("pointermove",En,!0),s.domElement.addEventListener("pointerup",sn,!0);let cn=u=>{!n?.busy()&&(!Kt||Kt.pointerId===u.pointerId)&&_e(!0)};s.domElement.addEventListener("pointercancel",cn,!0);let Ts=u=>{Kt?.pointerId===u.pointerId&&_e()};s.domElement.addEventListener("lostpointercapture",Ts,!0);let ai=u=>{Ot===u.pointerId||u.__viewNavigation||n?.down(u)&&zt(a.position.clone(),h.target.clone(),!1)},Ch=u=>n?.move(u),Ph=u=>n?.up(u),Ao=u=>{(n?.cancel(u.pointerId)||n?.dragging())&&(u.preventDefault(),u.stopImmediatePropagation())};s.domElement.addEventListener("pointerdown",ai,!0),s.domElement.addEventListener("pointermove",Ch,!0),s.domElement.addEventListener("pointerup",Ph,!0),s.domElement.addEventListener("pointercancel",Ao,!0),s.domElement.addEventListener("lostpointercapture",Ao,!0);let Ih=u=>{if(ht){u.preventDefault(),u.stopImmediatePropagation();return}if(Ot===u.pointerId||u.__viewNavigation||He||u.button!==0||!me)return;let M=Yt(u,me),E=I.intersectObjects(we.children,!1).find(it=>it.object.userData.edge);if(!E||(Number.isFinite(E.object.userData.routeZ)&&(M=Yt(u,{...me,z:E.object.userData.routeZ+(E.object.userData.displayOffset??g.get(me.floor).position.y)-g.get(me.floor).position.y})||E.point.clone()),M||(M=E.point.clone()),Ln(u),E.object.userData.edge?.startsWith("route-")&&window.KERN_ROUTE_UI?.selectPoint(Number(E.object.userData.edge.split("-")[2])),window.KERN_ROTATE?.active()&&(!E||!window.KERN_ROTATE.eligibleRoom(me))))return;let V=null;if(E?.object.userData.edge?.startsWith("rotate-")){let it=Number(E.object.userData.edge.slice(7));if(V=window.KERN_ROTATE.pivotFor(me),!V||V.index===it){window.KERN_ROTATE.choosePivot(me,"rooms",it),Ft(me),u.preventDefault(),u.stopImmediatePropagation();return}}ht={rotationPivot:V,start:M.clone(),original:JSON.parse(JSON.stringify(me)),next:JSON.parse(JSON.stringify(me)),routeZ:E?.object.userData.routeZ,planeZ:Number.isFinite(E?.object.userData.routeZ)?E.object.userData.routeZ+(E.object.userData.displayOffset??g.get(me.floor).position.y)-g.get(me.floor).position.y:me.z,edge:E?.object.userData.edge==="move"?null:E?.object.userData.edge,clientY:u.clientY,baseHeight:window.KERN_ELEVATION_UI?.handleZ(me.floor,me.id)??me.z,baseGroupY:g.get(me.floor).position.y,pointerId:u.pointerId},me.routeStair&&ht.edge&&/^[nesw]{1,2}$/.test(ht.edge)&&(ht.original=window.KERN_ROUTE_STAIRS.editFrame(me),ht.next=JSON.parse(JSON.stringify(ht.original))),window.KERN_DRAG_AXES?.begin(ht),h.enabled=!1,u.preventDefault(),u.stopImmediatePropagation(),s.domElement.setPointerCapture(u.pointerId)},Dh=u=>{if(!ht||ht.pointerId!==u.pointerId)return;let M=Yt(u,{...ht.original,z:ht.planeZ??ht.original.z})||(ht.edge==="elevate"||ht.edge?.startsWith("route-height")?ht.start:null);if(!M)return;if(ht.edge?.startsWith("route-landing-")){let X=ht.original,rt=JSON.parse(JSON.stringify(X)),$=ht.edge.split("-"),yt=Number($[2]),It=Number($[3]),Wt=rt.routeStair.nodes[yt].landing[It],Ht=window.KERN_ROUTE_STAIRS.point(X,Wt),he=u.ctrlKey?0:window.snapSize?.()??.25,de=Ht[0]+M.x-ht.start.x,ee=Ht[1]+M.z-ht.start.z,oe=window.KERN_DRAG_AXES?.plan(ht,{x:(he?Math.round(de/he)*he:de)-Ht[0],y:(he?Math.round(ee/he)*he:ee)-Ht[1]})||{x:de-Ht[0],y:ee-Ht[1]};Object.assign(Wt,window.KERN_ROUTE_STAIRS.local(X,[Ht[0]+oe.x,Ht[1]+oe.y])),window.KERN_ROUTE_STAIRS.simplePolygon(rt.routeStair.nodes[yt].landing.map(Ge=>window.KERN_ROUTE_STAIRS.point(rt,Ge)))&&(ht.next=rt,Ft(rt));let De=window.KERN_ROUTE_STAIRS.point(ht.next,ht.next.routeStair.nodes[yt].landing[It]);window.KERN_DRAG_AXES?.acceptPlan(ht,{x:De[0]-Ht[0],y:De[1]-Ht[1]}),u.preventDefault(),u.stopImmediatePropagation();return}if(ht.edge?.startsWith("route-")){let X=ht.original,rt=JSON.parse(JSON.stringify(X)),$=rt.routeStair,yt=Number(ht.edge.split("-").at(-1)),It=$.nodes[yt];if(ht.edge.startsWith("route-height")){let Ht=2*a.position.distanceTo(new R(X.x+X.w/2,X.z+ht.baseGroupY,X.y+X.h/2))*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),he=ht.routeZ+(ht.clientY-u.clientY)*Ht,de=u.ctrlKey?he:Math.round(he*4)/4,ee=window.KERN_DRAG_AXES?.apply(ht,{y:de-ht.routeZ}),oe=ee?ht.routeZ+ee.y:de;Math.abs(oe-ht.routeZ)>1e-9&&window.KERN_ROUTE_STAIRS.setHeight(rt,yt,oe,window.kernPlanner?.getPlan())}else{let Ht=window.KERN_ROUTE_STAIRS.point(X,It),he=u.ctrlKey?0:window.snapSize?.()??.25,de=Ht[0]+M.x-ht.start.x,ee=Ht[1]+M.z-ht.start.z,oe=window.KERN_ROUTE_STAIRS.snapNode(rt,yt,[de,ee],he,u.ctrlKey,u.shiftKey),De=window.KERN_DRAG_AXES?.plan(ht,{x:oe[0]-Ht[0],y:oe[1]-Ht[1]});De&&(oe[0]=Ht[0]+De.x,oe[1]=Ht[1]+De.y),Math.hypot(oe[0]-Ht[0],oe[1]-Ht[1])>1e-9&&(window.KERN_ROUTE_STAIRS.moveNode(rt,yt,oe,window.kernPlanner?.getPlan()),window.KERN_ROUTE_UI?.attachEndpoint(rt,yt,oe))}ht.next=rt,Ft(rt);let Wt=window.kernPlanner?.getPlan();if(Wt){let Ht=Wt.floors[X.floor];if(Ht?.rooms.some(he=>he.id===X.id)){let he={...Wt,floors:{...Wt.floors,[X.floor]:{...Ht,rooms:Ht.rooms.map(ee=>ee.id===X.id?rt:ee)}}},de=window.KERN_ROUTE_STAIRS.build(he,X.floor,X.id);zn({detail:de,fid:X.floor,summary:de.warnings[0]?.text||"Editable stair route"})}}u.preventDefault(),u.stopImmediatePropagation();return}if(ht.edge==="elevate"){let X=ht.original,rt=2*a.position.distanceTo(new R(X.x+X.w/2,X.z+ht.baseGroupY,X.y+X.h/2))*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),$=ht.baseHeight+(ht.clientY-u.clientY)*rt,yt=u.ctrlKey?0:.25,It=Math.max(-150,Math.min(150,yt?Math.round($/yt)*yt:$)),Wt=window.KERN_DRAG_AXES?.apply(ht,{y:It-ht.baseHeight}),Ht=Wt?ht.baseHeight+Wt.y:It;if(ht.next={...X,z:Ht,...Math.abs(Ht-ht.baseHeight)>1e-9?{__elevation:!0}:{}},Se.style.display="block",Se.style.top="auto",Se.style.bottom="18px",Se.style.left="18px",Se.textContent=(X.isFloor?"Floor":"Surface")+" "+Ht.toFixed(2)+" m \xB7 "+(u.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"),g.get(X.floor).position.y=ht.baseGroupY,Ft(ht.next),X.isFloor)g.get(X.floor).position.y=ht.baseGroupY+Ht-X.z;else{let yr=window.KERN_ELEVATION_UI?.preview(X.floor,X.id,Ht),Zn=yr&&window.KERN_ELEVATIONS?.build(yr,X.floor,X.id),bf=Zn?gf(Zn):[{x:X.x,y:X.y,w:X.w,h:X.h,z:Ht-.18,height:.18}];for(let pn of bf){let ji,Qi;if(pn.polygon)ji=bo(pn),Qi=new At(ji,vn),Qi.position.y=pn.z+ht.baseGroupY;else if(!Zn&&X.shape){let wf=new Ri(window.KERN_SHAPES.points(X).map(Jh=>new vt(Jh[0],-Jh[1])));ji=new rr(wf,{depth:pn.height,bevelEnabled:!1,steps:1}),ji.rotateX(-Math.PI/2),Qi=new At(ji,vn),Qi.position.y=pn.z+ht.baseGroupY}else ji=new Pe(pn.w,pn.height,pn.h),Qi=new At(ji,vn),Qi.position.set(pn.x+pn.w/2,pn.z+pn.height/2+ht.baseGroupY,pn.y+pn.h/2);we.add(Qi)}Zn&&(Se.textContent=Ht.toFixed(2)+" m \xB7 "+(Zn.ramp?"Ramp \xB7 "+Math.max(...Zn.flights.map(pn=>pn.gradePercent||0)).toFixed(1)+"% grade":Zn.segments[0].risers+" rises \xD7 "+(Zn.metrics.riserMax*100).toFixed(1)+" cm")+" \xB7 "+(u.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"))}let he=X.x-.25,de=X.y+X.h+.25,ee=ht.baseHeight+ht.baseGroupY,oe=Ht+ht.baseGroupY,De=[new R(he,ee,de),new R(he,oe,de)],Ge=new Ze(new Ee().setFromPoints(De),Ss);Ge.computeLineDistances(),Ge.renderOrder=16,we.add(Ge);for(let yr of[ee,oe]){let Zn=new Ze(new Ee().setFromPoints([new R(he-.18,yr,de),new R(he+.18,yr,de)]),Yn);Zn.renderOrder=16,we.add(Zn)}let qn=new R(he,(ee+oe)/2,de).project(a),Co=s.domElement.getBoundingClientRect(),Kh=Ht-ht.baseHeight;Se.style.bottom="auto",Se.style.left=Math.min(Math.max(8,(qn.x+1)*Co.width/2+12),Math.max(8,Co.width-260))+"px",Se.style.top=Math.min(Math.max(8,(1-qn.y)*Co.height/2),Math.max(8,Co.height-60))+"px",Se.textContent=(Kh>0?"+":"")+Kh.toFixed(2)+" m \xB7 "+Se.textContent,u.preventDefault(),u.stopImmediatePropagation();return}let E=ht.original,V=u.ctrlKey?0:window.snapSize?.()??.5,it=V?Math.round((M.x-ht.start.x)/V)*V:M.x-ht.start.x,st=V?Math.round((M.z-ht.start.z)/V)*V:M.z-ht.start.z,K={...E};if(ht.edge?.startsWith("rotate-")){let X=ht.rotationPivot||{x:E.x+E.w/2,y:E.y+E.h/2},rt=Math.atan2(ht.start.z-X.y,ht.start.x-X.x),$=window.KERN_ROTATE.delta(E,(Math.atan2(M.z-X.y,M.x-X.x)-rt)*180/Math.PI,u.shiftKey);window.KERN_SHAPES.rotate(K,$,X),ht.rotationFeedback={center:X,start:rt,degrees:$,cursor:M.clone()}}else if(ht.edge)ht.edge.includes("e")&&(K.w=Math.max(1,E.w+it)),ht.edge.includes("s")&&(K.h=Math.max(1,E.h+st)),ht.edge.includes("w")&&(K.x=Math.min(E.x+E.w-1,E.x+it),K.w=E.x+E.w-K.x),ht.edge.includes("n")&&(K.y=Math.min(E.y+E.h-1,E.y+st),K.h=E.y+E.h-K.y);else{K.x+=M.x-ht.start.x,K.y+=M.z-ht.start.z;let X=18*a.position.distanceTo(M)*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),rt=u.ctrlKey&&u.shiftKey&&!u.altKey&&window.KERN_ROOM_SNAP?.translation(K,t.levels.find($=>$.id===E.floor).rooms,new Set([E.id]),X);ht.snap=rt||null,rt?(K.x+=rt.dx,K.y+=rt.dy):u.ctrlKey||(K.x=E.x+it,K.y=E.y+st)}if(ht.edge&&!ht.edge.startsWith("rotate-")&&(u.shiftKey&&!u.ctrlKey||u.altKey)&&window.KERN_TRANSFORM&&Object.assign(K,window.KERN_TRANSFORM.resize(E,ht.edge,it,st,{...u,shiftKey:u.shiftKey&&!u.ctrlKey,altKey:u.altKey})),ht.edge&&!ht.edge.startsWith("rotate-")&&u.shiftKey&&u.ctrlKey&&!u.altKey){let X=ht.edge,rt={x:E.x+(X.includes("e")?E.w:0)+M.x-ht.start.x,y:E.y+(X.includes("s")?E.h:0)+M.z-ht.start.z},$=18*a.position.distanceTo(M)*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),yt=window.KERN_ROOM_SNAP?.point(rt,t.levels.find(It=>It.id===E.floor).rooms,new Set([E.id]),$);ht.snap=yt||null,yt&&(X.includes("e")&&(K.w=Math.max(1,yt.x-E.x)),X.includes("s")&&(K.h=Math.max(1,yt.y-E.y)),X.includes("w")&&(K.x=Math.min(yt.x,E.x+E.w-1),K.w=E.x+E.w-K.x),X.includes("n")&&(K.y=Math.min(yt.y,E.y+E.h-1),K.h=E.y+E.h-K.y))}if(E.shape&&ht.edge&&!ht.edge.startsWith("rotate-")&&window.KERN_TRANSFORM?.orientedResize&&Object.assign(K,window.KERN_TRANSFORM.orientedResize(E,ht.edge,M.x-ht.start.x,M.z-ht.start.z,u)),!ht.edge){let X=window.KERN_DRAG_AXES?.plan(ht,{x:K.x-E.x,y:K.y-E.y});X&&(K.x=E.x+X.x,K.y=E.y+X.y)}if(ht.next=K,Ft(K),ht.rotationFeedback){let X=ht.rotationFeedback,rt=X.center,$=Math.hypot(X.cursor.x-rt.x,X.cursor.z-rt.y),yt=Math.min($,6)*.8,It=X.start+X.degrees*Math.PI/180,Wt=K.z+ht.baseGroupY+.12,Ht=[];for(let ee=0,oe=Math.max(2,Math.min(160,Math.ceil(Math.abs(X.degrees)/5)));ee<=oe;ee++){let De=X.start+(It-X.start)*ee/oe;Ht.push(new R(rt.x+Math.cos(De)*yt,Wt,rt.y+Math.sin(De)*yt))}let he=[new R(rt.x+Math.cos(X.start)*$,Wt,rt.y+Math.sin(X.start)*$),new R(rt.x,Wt,rt.y),new R(rt.x+Math.cos(It)*$,Wt,rt.y+Math.sin(It)*$)];for(let ee of[Ht,he]){let oe=new Ze(new Ee().setFromPoints(ee),Ss);oe.computeLineDistances(),oe.renderOrder=15,we.add(oe)}let de=s.domElement.getBoundingClientRect();Se.style.display="block",Se.style.bottom="auto",Se.style.left=Math.min(Math.max(8,u.clientX-de.left+16),Math.max(8,de.width-130))+"px",Se.style.top=Math.max(8,u.clientY-de.top-38)+"px",Se.textContent=(X.degrees>0?"+":"")+X.degrees.toFixed(1)+"\xB0"}if(ht.snap)for(let X of ht.snap.guides?.length?ht.snap.guides:[ht.snap]){let rt=K.z+g.get(K.floor).position.y+.1,$=X.edge?[X.edge.a,X.edge.b]:[[X.x-.2,X.y],[X.x+.2,X.y],[X.x,X.y],[X.x,X.y-.2],[X.x,X.y+.2]],yt=new Ze(new Ee().setFromPoints($.map(It=>new R(It[0],rt,It[1]))),ws);yt.renderOrder=12,we.add(yt)}u.preventDefault(),u.stopImmediatePropagation()},Lh=u=>{if(!ht||ht.pointerId!==u.pointerId)return;let M=ht;ht=null,$t(),g.get(M.original.floor).position.y=M.baseGroupY,Se.style.display="none",h.enabled=!0,u.preventDefault(),u.stopImmediatePropagation(),s.domElement.hasPointerCapture(u.pointerId)&&s.domElement.releasePointerCapture(u.pointerId),M.next.__elevation||["x","y","w","h"].some(E=>M.next[E]!==M.original[E])||JSON.stringify(M.next.shape)!==JSON.stringify(M.original.shape)||JSON.stringify(M.next.routeStair)!==JSON.stringify(M.original.routeStair)?e.onRoomEdit?.(M.original.floor,M.original.id,M.next):M.edge?.startsWith("rotate-")&&(window.KERN_ROTATE.choosePivot(M.original,"rooms",Number(M.edge.slice(7))),Ft(M.original))},Hn=u=>{if(ht&&u?.pointerId!==void 0&&ht.pointerId!==u.pointerId)return;let M=ht;ht=null,$t(),M&&(g.get(M.original.floor).position.y=M.baseGroupY),Se.style.display="none",h.enabled=!He,M&&s.domElement.hasPointerCapture?.(M.pointerId)&&s.domElement.releasePointerCapture(M.pointerId),me&&Ft(me)};s.domElement.addEventListener("pointerdown",Ih,!0),s.domElement.addEventListener("pointermove",Dh,!0),s.domElement.addEventListener("pointerup",Lh,!0),s.domElement.addEventListener("pointercancel",Hn,!0),s.domElement.addEventListener("lostpointercapture",Hn,!0);let Sn=null,As=document.createElement("div");As.style.cssText="position:absolute;border:1px solid #79b8ff;background:#79b8ff20;pointer-events:none;display:none;z-index:25",i.append(As);let kn=()=>{Sn=null,As.style.display="none"},Nh=u=>{He||Ot!==null||u.altKey||u.button!==0||ht||fe!=="select"||(Sn={id:u.pointerId,x:u.clientX,y:u.clientY,shift:u.shiftKey,subtract:u.ctrlKey||u.metaKey,previous:ze?.ids||[]})},Uh=u=>{if(!Sn||Sn.id!==u.pointerId||Math.hypot(u.clientX-Sn.x,u.clientY-Sn.y)<5)return;let M=s.domElement.getBoundingClientRect();Sn.moved=!0,As.style.display="block",Object.assign(As.style,{left:Math.min(u.clientX,Sn.x)-M.left+"px",top:Math.min(u.clientY,Sn.y)-M.top+"px",width:Math.abs(u.clientX-Sn.x)+"px",height:Math.abs(u.clientY-Sn.y)+"px"})},Fh=u=>{if(!Sn||Sn.id!==u.pointerId)return;let M=Sn;if(kn(),!M.moved)return;u.preventDefault(),Ut.clear(),re=null;let E=s.domElement.getBoundingClientRect(),V=Math.min(M.x,u.clientX),it=Math.max(M.x,u.clientX),st=Math.min(M.y,u.clientY),K=Math.max(M.y,u.clientY),X=St||bt,rt=t.levels.find(It=>It.id===X);if(!rt)return;a.updateMatrixWorld(!0);let $=rt.rooms.filter(It=>{let Wt=(window.KERN_SHAPES?.points(It)||[[It.x,It.y],[It.x+It.w,It.y],[It.x+It.w,It.y+It.h],[It.x,It.y+It.h]]).flatMap(de=>[It.z,It.z+(It.height||0)].map(ee=>new R(de[0],ee+g.get(X).position.y,de[1]).project(a))).filter(de=>de.z>=-1&&de.z<=1);if(!Wt.length)return!1;let Ht=Wt.map(de=>(de.x+1)*E.width/2+E.left),he=Wt.map(de=>(1-de.y)*E.height/2+E.top);return Math.min(...Ht)<=it&&Math.max(...Ht)>=V&&Math.min(...he)<=K&&Math.max(...he)>=st}).map(It=>It.id),yt=M.subtract?M.previous.filter(It=>!$.includes(It)):M.shift?[...new Set([...M.previous,...$])]:$;St||ie(X,{preserveEditing:!0}),Y(X,yt),e.onRoomsSelect?.(X,yt)};s.domElement.addEventListener("pointerdown",Nh,!0),s.domElement.addEventListener("pointermove",Uh,!0),s.domElement.addEventListener("pointerup",Fh,!0),s.domElement.addEventListener("pointercancel",kn,!0),s.domElement.addEventListener("lostpointercapture",kn,!0);let yf=u=>{He||Ot===u.pointerId||u.__viewNavigation||(Ut.add(u.pointerId),Ut.size>1?re=null:re=u.button===0?{id:u.pointerId,x:u.clientX,y:u.clientY,moved:!1}:null)},vf=u=>{if(!He){if(re&&Math.hypot(u.clientX-re.x,u.clientY-re.y)>5&&(re.moved=!0),Ut.size||u.buttons){s.domElement.title="",_t(null);return}_t(Ln(u))}},Mf=u=>{if(He||u.__viewNavigation)return;let M=re&&u.pointerId===re.id&&!re.moved&&Math.hypot(u.clientX-re.x,u.clientY-re.y)<=5&&Ut.size===1;if(Ut.delete(u.pointerId),re=null,!M)return;let E=Ln(u);if(!E)return;if(u.shiftKey){if(!j.has(E))return;Jt?.door?e.onDoorSelect?.(E,Jt.door,{additive:!0}):Jt?.room&&e.onRoomSelect?.(E,Jt.room,{additive:!0});return}if(e.onFloorSelect){let it=St===E&&j.size===1&&j.has(E)&&!Jt?.floorSurface;e.onFloorSelect(E,{additive:!1}),it&&(Jt?.door?e.onDoorSelect?.(E,Jt.door):Jt?.room&&e.onRoomSelect?.(E,Jt.room));return}Jt?.floorSurface||Jt?.roomLabel&&(St!==E||!j.has(E))?ie(E):(ie(E,{preserveEditing:!!Jt?.room||!!Jt?.door}),Jt?.door?e.onDoorSelect?.(E,Jt.door):Jt?.room&&e.onRoomSelect?.(E,Jt.room))},ql=()=>{n?.cancel(),kn(),Ot=null,Qt=null,s.domElement.style.cursor="",h.mouseButtons.LEFT=null,h.mouseButtons.RIGHT=Tn.PAN,_e(!0),Hn(),Ut.clear(),re=null,Et=!1,Tt(),_t(null)};window.addEventListener("blur",ql);let Ef=r;r=()=>{window.removeEventListener("blur",ql),Ef()};let Oh={pointerdown:yf,pointermove:vf,pointerup:Mf,pointercancel:u=>{Ut.delete(u.pointerId),re=null,_t(null)},pointerleave:()=>{Ut.size||(s.domElement.title="",_t(null))},keydown:u=>{if(!window.KERN_PRIMITIVE_UI?.handleKey?.(u)){if(u.key==="Escape"&&Sn){kn(),re=null,Ut.clear(),u.preventDefault(),u.stopPropagation();return}if(u.key==="Escape"&&(Kt||fe!=="select")){u.preventDefault(),u.stopImmediatePropagation(),_e(!0);return}if(u.key==="Escape"&&ht){u.preventDefault(),u.stopImmediatePropagation(),Hn();return}u.key==="Escape"&&St?(u.preventDefault(),u.stopPropagation(),Mt()):St&&["ArrowUp","ArrowDown"].includes(u.key)&&(u.preventDefault(),u.stopPropagation(),Bn(u.key==="ArrowUp"?1:-1))}},contextmenu:u=>{u.preventDefault(),!(He||u.altKey||performance.now()<ce)&&(Ln(u),Jt&&e.onContext?.({floor:Jt.floor,room:Jt.room,x:Jt.point.x,y:Jt.point.z,z:t.levels.find(M=>M.id===Jt.floor)?.rooms.find(M=>M.id===Jt.room)?.z??t.levels.find(M=>M.id===Jt.floor)?.z??Jt.point.y,clientX:u.clientX,clientY:u.clientY}))}};for(let[u,M]of Object.entries(Oh))s.domElement.addEventListener(u,M);let Bh=()=>{if(ft)return;let u=Math.max(1,i.clientWidth),M=Math.max(1,i.clientHeight);s.setSize(u,M,!1),a.aspect=u/M,a.updateProjectionMatrix(),ae=""},zh=()=>{Tt(),Et=!0},Hh=()=>{Et=!1,at=performance.now(),ut=ot};h.addEventListener("start",zh),h.addEventListener("end",Hh);let kh=new ResizeObserver(Bh),Vh=u=>{u.preventDefault(),e.onContextLost?.()};s.domElement.addEventListener("webglcontextlost",Vh);let He=!1,$i=!1,Rn=null,Rs=null,Ro=0,Gh=0,Wh=!0,Li=new lo(16773074,55,35,Math.PI/7,.65,1.3);Li.visible=!1,o.add(Li),o.add(Li.target);let Ni=new _n,Xh=[...b?.rooms||[],...t.levels.filter(u=>u.id!==b?.id).flatMap(u=>u.rooms.filter(M=>M.groundSurface||M.localSteps&&t.stairs.some(E=>E.localSteps&&E.floorId===u.id&&E.roomId===M.id&&Math.min(...E.stops.map(V=>V.z))<=U+.2&&Math.max(...E.stops.map(V=>V.z))>=U-.2)))],Yh={x:N-(G+50)/2,y:O-(G+50)/2,w:G+50,h:G+50};if(t.shapeAware&&window.KERN_SHAPES){let u=window.KERN_SHAPES,M=u.difference(u.multi(Yh),Xh.filter(E=>E.groundSurface||E.localSteps||!["courtyard","terrace"].includes(E.type)).map(E=>E.routeStair&&t.stairs.find(V=>V.roomId===E.id)?.footprintGeometry||u.multi(E)));for(let E of M){let V=new Ri(E[0].map(st=>new vt(st[0],-st[1])));for(let st of E.slice(1))V.holes.push(new Xi(st.map(K=>new vt(K[0],-K[1]))));let it=new At(new so(V),D("#535c62"));it.rotation.x=-Math.PI/2,it.position.y=U-.02,Ni.add(it)}}else for(let u of window.BuildingPreviewGeometry.subtractAll(Yh,Xh.filter(M=>M.groundSurface||M.localSteps||!["courtyard","terrace"].includes(M.type)))){let M=new At(new In(u.w,u.h),D("#535c62"));M.rotation.x=-Math.PI/2,M.position.set(u.x+u.w/2,U-.02,u.y+u.h/2),Ni.add(M)}return Ni.visible=!1,o.add(Ni),n=mf({scene:o,camera:a,renderer:s,controls:h,groups:g,data:t,prismGeometry:bo,enabled:()=>!He&&fe==="select",canNavigate:()=>!He,surfaceHit:u=>(Ln(u,{physicalOnly:!0}),Jt),onSelect:(u,M,E)=>E&&!j.has(u)?!1:window.KERN_PRIMITIVE_UI?.select(u,M,E),onEditMany:(u,M)=>window.KERN_PRIMITIVE_UI?.editMany(u,M),onEdit:(u,M,E,V,it)=>window.KERN_PRIMITIVE_UI?.edit(u,M,E,V,it)}),r=Zh,kh.observe(i),Bh(),F(),e.viewState?Kl(e.viewState):Xt(),s.setAnimationLoop(()=>{if(!ft){if(n?.sync(),He){qh(),Rn?.fly&&ct(),Lt(),s.render(o,a);return}Gt()||h.update(),xr(),n?.updateBounds(),ct(),Lt(),s.render(o,a)}}),{primitivePlacement:(u,M,E)=>n?.placement(u,M,E),previewWall:(u,M)=>n?.previewWall(u,M),setPrimitiveMode:u=>n?.setMode(u),cancelPrimitive:()=>n?.cancel(),primitiveDragging:()=>n?.dragging(),cameraPose(){let u=a.getWorldDirection(new R);return{x:a.position.x,y:a.position.z,z:a.position.y,yaw:Math.atan2(-u.x,-u.z),pitch:Math.asin(Math.max(-1,Math.min(1,u.y))),fov:a.fov,roll:new dn().setFromQuaternion(a.quaternion,"YXZ").z}},setAuthoringMode:Ae,cancelAuthoring:()=>_e(!0),cancelEdit:Hn,getOrbitViewState(){return He&&Rs?JSON.parse(JSON.stringify(Rs)):Zl()},applyFloorState:et,selectRoom:T,selectRooms:Y,selectObjects:nt,selectFloors:Z,setEditableFloors:dt,activateFloor:ie,chooseFloor:Fe,frameSelection:Ct,setWalk:Sf,fit:Xt,dispose:Zh,showAll:Mt,isolate:Zt,hoverFloor:_t,adjacentFloor:Bn,getViewState:Zl,getZoom:Pt,restoreViewState:Kl,syncActiveFloor:Ie,zoomBy(u){if(!Number.isFinite(u)||u<=0)return;let M=a.position.clone().sub(h.target),E=oi.clamp(M.length()*u,h.minDistance,h.maxDistance);zt(h.target.clone().add(M.normalize().multiplyScalar(E)),h.target,!1)},setGrid(u){gt=!!u,k.visible=gt},getFocusedFloor(){return St},setFloor(u,M){if(e.onFloorVisibility)return e.onFloorVisibility({id:u,visible:M});let E=g.get(u);if(E){if(Tt(),E.visible=!!M,St===u&&!M&&(St=W()[0]||null),!St&&M&&(St=u),!M&&me?.floor===u){let V=me.isFloor?ze:null;T(null,null),V&&(ze=V)}!M&&ze?.objects&&nt(ze.objects.filter(V=>V.floor!==u)),_t(null),F(),ct(!0),pt("visibility")}},setExplode(u){let M=Math.max(0,Math.min(12,Number(u)||0));if(M===z)return;let E=wt(bt);z=M,_t(null),F(),St?Rt(St,!!L):(Tt(),lt+=wt(bt)-E),ct(!0)},setSlabs(u){qt=!!u,F(),ct(!0)},setCeilings(u){Nt=!!u,F(),ct(!0)},setWalls(u){xt=!!u,F(),ct(!0)},setCutaway(u){jt=!!u,F(),ct(!0)},setCutHeight(u){let M=Number(u);Number.isFinite(M)&&(ue=Math.max(.4,Math.min(2.4,M)),F(),ct(!0))},setLabels(u){se=!!u,F(),ct(!0)},setXray(u){ot=!!u,F(),ct(!0)},png(){return ct(!0),s.render(o,a),new Promise((u,M)=>s.domElement.toBlob(E=>E?u(E):M(Error("Could not create this image.")),"image/png"))}}}catch(o){try{r()}catch{}throw o}}window.Building3D={mount:kx,version:"180"};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
