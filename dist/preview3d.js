(()=>{var En={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mu=0,Rc=1,Su=2;var Cc=1,Eu=2,mi=3,Ai=0,bn=1,pn=2,Ii=0,rs=1,Ic=2,Pc=3,Dc=4,bu=5,Wi=100,wu=101,Tu=102,Au=103,Ru=104,Cu=200,Iu=201,Pu=202,Du=203,ea=204,na=205,Lu=206,Nu=207,Uu=208,Fu=209,Ou=210,Bu=211,zu=212,Hu=213,ku=214,Fa=0,Oa=1,Ba=2,os=3,za=4,Ha=5,ka=6,Va=7,Lc=0,Vu=1,Gu=2,Pi=0,Wu=1,Xu=2,Yu=3,qu=4,Zu=5,Ku=6,Ju=7;var Nc=300,ms=301,gs=302,Ga=303,Wa=304,fo=306,ia=1e3,Gi=1001,sa=1002,An=1003,$u=1004;var po=1005;var jn=1006,Xa=1007;var Ji=1008;var ni=1009,Uc=1010,Fc=1011,ar=1012,Ya=1013,$i=1014,ii=1015,lr=1016,qa=1017,Za=1018,cr=1020,Oc=35902,Bc=35899,zc=1021,Hc=1022,Vn=1023,qs=1026,hr=1027,Ka=1028,Ja=1029,kc=1030,$a=1031;var ja=1033,mo=33776,go=33777,_o=33778,xo=33779,Qa=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,rl=37496,ol=37808,al=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,_l=37819,xl=37820,yl=37821,vl=36492,Ml=36494,Sl=36495,El=36283,bl=36284,wl=36285,Tl=36286;var Nr=2300,ra=2301,ta=2302,gc=2400,_c=2401,xc=2402;var ju=3200,Qu=3201;var Vc=0,td=1,Di="",sn="srgb",as="srgb-linear",Ur="linear",Le="srgb";var ss=7680;var yc=519,ed=512,nd=513,id=514,Gc=515,sd=516,rd=517,od=518,ad=519,oa=35044;var Wc="300 es",$n=2e3,Fr=2001;var ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kh=1234567,Ir=Math.PI/180,ls=180/Math.PI;function li(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function Xc(i,t){return(i%t+t)%t}function pf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function mf(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function gf(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function _f(i,t=1){return t-Math.abs(Xc(i,t*2)-t)}function xf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mf(i,t){return i+Math.random()*(t-i)}function Sf(i){return i*(.5-Math.random())}function Ef(i){i!==void 0&&(kh=i);let t=kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bf(i){return i*Ir}function wf(i){return i*ls}function Tf(i){return(i&i-1)===0&&i!==0}function Af(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),p=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var si={DEG2RAD:Ir,RAD2DEG:ls,generateUUID:li,clamp:xe,euclideanModulo:Xc,mapLinear:pf,inverseLerp:mf,lerp:Pr,damp:gf,pingpong:_f,smoothstep:xf,smootherstep:yf,randInt:vf,randFloat:Mf,randFloatSpread:Sf,seededRandom:Ef,degToRad:bf,radToDeg:wf,isPowerOfTwo:Tf,ceilPowerOfTwo:Af,floorPowerOfTwo:Rf,setQuaternionFromProperEuler:Cf,normalize:De,denormalize:Jn},ft=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],p=r[o+0],m=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=y;return}if(d!==y||l!==p||c!==m||h!==g){let _=1-a,f=l*p+c*m+h*g+d*y,R=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let P=Math.sqrt(S),I=Math.atan2(P,f*R);_=Math.sin(_*I)/P,a=Math.sin(a*I)/P}let M=a*R;if(l=l*_+p*M,c=c*_+m*M,h=h*_+g*M,d=d*_+y*M,_===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*m-c*p,t[e+1]=l*g+h*p+c*d-a*m,t[e+2]=c*g+h*m+a*p-l*d,t[e+3]=h*g-a*d-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*d+c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d-p*m*g;break;case"YXZ":this._x=p*h*d+c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d+p*m*g;break;case"ZXY":this._x=p*h*d-c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d-p*m*g;break;case"ZYX":this._x=p*h*d-c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d+p*m*g;break;case"YZX":this._x=p*h*d+c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d-p*m*g;break;case"XZY":this._x=p*h*d-c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],p=n+a+d;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gl=new A,Vh=new Ye,he=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],m=n[5],g=n[8],y=s[0],_=s[3],f=s[6],R=s[1],S=s[4],M=s[7],P=s[2],I=s[5],L=s[8];return r[0]=o*y+a*R+l*P,r[3]=o*_+a*S+l*I,r[6]=o*f+a*M+l*L,r[1]=c*y+h*R+d*P,r[4]=c*_+h*S+d*I,r[7]=c*f+h*M+d*L,r[2]=p*y+m*R+g*P,r[5]=p*_+m*S+g*I,r[8]=p*f+m*M+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,p=a*l-h*r,m=c*r-o*l,g=e*d+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=p*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=m*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wl.makeScale(t,e)),this}rotate(t){return this.premultiply(Wl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wl=new he;function Yc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ld(){let i=Or("canvas");return i.style.display="block",i}var Gh={};function Zs(i){i in Gh||(Gh[i]=!0,console.warn(i))}function cd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Wh=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function If(){let i={enabled:!0,workingColorSpace:as,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Le&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Le&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[as]:{primaries:t,whitePoint:n,transfer:Ur,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:Le,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}var Ae=If();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cs,aa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cs===void 0&&(Cs=Or("canvas")),Cs.width=t.width,Cs.height=t.height;let s=Cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pf=0,Ks=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xl(s[o].image)):r.push(Xl(s[o]))}else r=Xl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Df=0,Yl=new A,Mn=class i extends ci{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=jn,o=Ji,a=Vn,l=ni,c=i.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=li(),this.name="",this.source=new Ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Nc;Mn.DEFAULT_ANISOTROPY=1;var qe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],y=l[2],_=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-y)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+y)<.1&&Math.abs(g+_)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,M=(m+1)/2,P=(f+1)/2,I=(h+p)/4,L=(d+y)/4,U=(g+_)/4;return S>M&&S>P?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=I/n,r=L/n):M>P?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=I/s,r=U/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=L/r,s=U/r),this.set(n,s,r,e),this}let R=Math.sqrt((_-g)*(_-g)+(d-y)*(d-y)+(p-h)*(p-h));return Math.abs(R)<.001&&(R=1),this.x=(_-g)/R,this.y=(d-y)/R,this.z=(p-h)/R,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},la=class extends ci{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Mn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ks(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends la{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Br=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ca=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ao.copy(n.boundingBox)),Ao.applyMatrix4(t.matrixWorld),this.union(Ao)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),Ro.subVectors(this.max,yr),Is.subVectors(t.a,yr),Ps.subVectors(t.b,yr),Ds.subVectors(t.c,yr),Oi.subVectors(Ps,Is),Bi.subVectors(Ds,Ps),ts.subVectors(Is,Ds);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-ts.z,ts.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,ts.z,0,-ts.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-ts.y,ts.x,0];return!ql(e,Is,Ps,Ds,Ro)||(e=[1,0,0,0,1,0,0,0,1],!ql(e,Is,Ps,Ds,Ro))?!1:(Co.crossVectors(Oi,Bi),e=[Co.x,Co.y,Co.z],ql(e,Is,Ps,Ds,Ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vi=[new A,new A,new A,new A,new A,new A,new A,new A],qn=new A,Ao=new Rn,Is=new A,Ps=new A,Ds=new A,Oi=new A,Bi=new A,ts=new A,yr=new A,Ro=new A,Co=new A,es=new A;function ql(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){es.fromArray(i,r);let a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),h=n.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Lf=new Rn,vr=new A,Zl=new A,Ri=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);let e=vr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(Zl)),this.expandByPoint(vr.copy(t.center).sub(Zl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mi=new A,Kl=new A,Io=new A,zi=new A,Jl=new A,Po=new A,$l=new A,Xi=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Kl.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(Kl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=zi.dot(this.direction),l=-zi.dot(Io),c=zi.lengthSq(),h=Math.abs(1-o*o),d,p,m,g;if(h>0)if(d=o*l-a,p=o*a-l,g=r*h,d>=0)if(p>=-g)if(p<=g){let y=1/h;d*=y,p*=y,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Kl).addScaledVector(Io,p),m}intersectSphere(t,e){Mi.subVectors(t.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,s,r){Jl.subVectors(e,t),Po.subVectors(n,t),$l.crossVectors(Jl,Po);let o=this.direction.dot($l),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,t);let l=a*this.direction.dot(Po.crossVectors(zi,Po));if(l<0)return null;let c=a*this.direction.dot(Jl.cross(zi));if(c<0||l+c>o)return null;let h=-a*zi.dot($l);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,p,m,g,y,_){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,p,m,g,y,_)}set(t,e,n,s,r,o,a,l,c,h,d,p,m,g,y,_){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=p,f[3]=m,f[7]=g,f[11]=y,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=o*h,m=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=p-y*c,e[9]=-a*l,e[2]=y-p*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*h,m=l*d,g=c*h,y=c*d;e[0]=p+y*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=y+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*h,m=l*d,g=c*h,y=c*d;e[0]=p-y*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=y-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*h,m=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=g*c-m,e[8]=p*c+y,e[1]=l*d,e[5]=y*c+p,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,m=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-p*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+g,e[10]=p-y*d}else if(t.order==="XZY"){let p=o*l,m=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=p*d+y,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=y*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Uf)}lookAt(t,e,n){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Hi.crossVectors(n,Pn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Hi.crossVectors(n,Pn)),Hi.normalize(),Do.crossVectors(Pn,Hi),s[0]=Hi.x,s[4]=Do.x,s[8]=Pn.x,s[1]=Hi.y,s[5]=Do.y,s[9]=Pn.y,s[2]=Hi.z,s[6]=Do.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],m=n[13],g=n[2],y=n[6],_=n[10],f=n[14],R=n[3],S=n[7],M=n[11],P=n[15],I=s[0],L=s[4],U=s[8],T=s[12],b=s[1],N=s[5],G=s[9],K=s[13],tt=s[2],et=s[6],J=s[10],rt=s[14],X=s[3],_t=s[7],Rt=s[11],Pt=s[15];return r[0]=o*I+a*b+l*tt+c*X,r[4]=o*L+a*N+l*et+c*_t,r[8]=o*U+a*G+l*J+c*Rt,r[12]=o*T+a*K+l*rt+c*Pt,r[1]=h*I+d*b+p*tt+m*X,r[5]=h*L+d*N+p*et+m*_t,r[9]=h*U+d*G+p*J+m*Rt,r[13]=h*T+d*K+p*rt+m*Pt,r[2]=g*I+y*b+_*tt+f*X,r[6]=g*L+y*N+_*et+f*_t,r[10]=g*U+y*G+_*J+f*Rt,r[14]=g*T+y*K+_*rt+f*Pt,r[3]=R*I+S*b+M*tt+P*X,r[7]=R*L+S*N+M*et+P*_t,r[11]=R*U+S*G+M*J+P*Rt,r[15]=R*T+S*K+M*rt+P*Pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],p=t[10],m=t[14],g=t[3],y=t[7],_=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*p+n*c*p+s*a*m-n*l*m)+y*(+e*l*m-e*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+_*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+f*(-s*a*h-e*l*d+e*a*p+s*o*d-n*o*p+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],p=t[10],m=t[11],g=t[12],y=t[13],_=t[14],f=t[15],R=d*_*c-y*p*c+y*l*m-a*_*m-d*l*f+a*p*f,S=g*p*c-h*_*c-g*l*m+o*_*m+h*l*f-o*p*f,M=h*y*c-g*d*c+g*a*m-o*y*m-h*a*f+o*d*f,P=g*d*l-h*y*l-g*a*p+o*y*p+h*a*_-o*d*_,I=e*R+n*S+s*M+r*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return t[0]=R*L,t[1]=(y*p*r-d*_*r-y*s*m+n*_*m+d*s*f-n*p*f)*L,t[2]=(a*_*r-y*l*r+y*s*c-n*_*c-a*s*f+n*l*f)*L,t[3]=(d*l*r-a*p*r-d*s*c+n*p*c+a*s*m-n*l*m)*L,t[4]=S*L,t[5]=(h*_*r-g*p*r+g*s*m-e*_*m-h*s*f+e*p*f)*L,t[6]=(g*l*r-o*_*r-g*s*c+e*_*c+o*s*f-e*l*f)*L,t[7]=(o*p*r-h*l*r+h*s*c-e*p*c-o*s*m+e*l*m)*L,t[8]=M*L,t[9]=(g*d*r-h*y*r-g*n*m+e*y*m+h*n*f-e*d*f)*L,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*f+e*a*f)*L,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*m-e*a*m)*L,t[12]=P*L,t[13]=(h*y*s-g*d*s+g*n*p-e*y*p-h*n*_+e*d*_)*L,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*_-e*a*_)*L,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*p+e*a*p)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,p=r*c,m=r*h,g=r*d,y=o*h,_=o*d,f=a*d,R=l*c,S=l*h,M=l*d,P=n.x,I=n.y,L=n.z;return s[0]=(1-(y+f))*P,s[1]=(m+M)*P,s[2]=(g-S)*P,s[3]=0,s[4]=(m-M)*I,s[5]=(1-(p+f))*I,s[6]=(_+R)*I,s[7]=0,s[8]=(g+S)*L,s[9]=(_-R)*L,s[10]=(1-(p+y))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ls.set(s[0],s[1],s[2]).length(),o=Ls.set(s[4],s[5],s[6]).length(),a=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Zn.copy(this);let c=1/r,h=1/o,d=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,e.setFromRotationMatrix(Zn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=$n,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),p=(e+t)/(e-t),m=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Fr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=$n,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),p=-(e+t)/(e-t),m=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===$n)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Fr)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ls=new A,Zn=new Ce,Nf=new A(0,0,0),Uf=new A(1,1,1),Hi=new A,Do=new A,Pn=new A,Yh=new Ce,qh=new Ye,Sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qh.setFromEuler(this),this.setFromQuaternion(qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ff=0,Zh=new A,Ns=new Ye,Si=new Ce,Lo=new A,Mr=new A,Of=new A,Bf=new Ye,Kh=new A(1,0,0),Jh=new A(0,1,0),$h=new A(0,0,1),jh={type:"added"},zf={type:"removed"},Us={type:"childadded",child:null},jl={type:"childremoved",child:null},ze=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new Sn,n=new Ye,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new he}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(Kh,t)}rotateY(t){return this.rotateOnAxis(Jh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return Zh.copy(t).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kh,t)}translateY(t){return this.translateOnAxis(Jh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lo.copy(t):Lo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Mr,Lo,this.up):Si.lookAt(Lo,Mr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(Si),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jh),Us.child=t,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zf),jl.child=t,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jh),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,Of),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),p=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ze.DEFAULT_UP=new A(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new A,Ei=new A,Ql=new A,bi=new A,Fs=new A,Os=new A,Qh=new A,tc=new A,ec=new A,nc=new A,ic=new qe,sc=new qe,rc=new qe,wi=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Kn.subVectors(t,e),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Kn.subVectors(s,e),Ei.subVectors(n,e),Ql.subVectors(t,e);let o=Kn.dot(Kn),a=Kn.dot(Ei),l=Kn.dot(Ql),c=Ei.dot(Ei),h=Ei.dot(Ql),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,m=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ic.setScalar(0),sc.setScalar(0),rc.setScalar(0),ic.fromBufferAttribute(t,e),sc.fromBufferAttribute(t,n),rc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ic,r.x),o.addScaledVector(sc,r.y),o.addScaledVector(rc,r.z),o}static isFrontFacing(t,e,n,s){return Kn.subVectors(n,e),Ei.subVectors(t,e),Kn.cross(Ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Kn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Fs.subVectors(s,n),Os.subVectors(r,n),tc.subVectors(t,n);let l=Fs.dot(tc),c=Os.dot(tc);if(l<=0&&c<=0)return e.copy(n);ec.subVectors(t,s);let h=Fs.dot(ec),d=Os.dot(ec);if(h>=0&&d<=h)return e.copy(s);let p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Fs,o);nc.subVectors(t,r);let m=Fs.dot(nc),g=Os.dot(nc);if(g>=0&&m<=g)return e.copy(r);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Os,a);let _=h*g-m*d;if(_<=0&&d-h>=0&&m-g>=0)return Qh.subVectors(r,s),a=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(Qh,a);let f=1/(_+y+p);return o=y*f,a=p*f,e.copy(n).addScaledVector(Fs,o).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},No={h:0,s:0,l:0};function oc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ve=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ae.workingColorSpace){if(t=Xc(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=oc(o,r,t+1/3),this.g=oc(o,r,t),this.b=oc(o,r,t-1/3)}return Ae.colorSpaceToWorking(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let n=hd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Ae.workingToColorSpace(un.copy(this),t),Math.round(xe(un.r*255,0,255))*65536+Math.round(xe(un.g*255,0,255))*256+Math.round(xe(un.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.workingToColorSpace(un.copy(this),e);let n=un.r,s=un.g,r=un.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ae.workingColorSpace){return Ae.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=sn){Ae.workingToColorSpace(un.copy(this),t);let e=un.r,n=un.g,s=un.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(No);let n=Pr(ki.h,No.h,e),s=Pr(ki.s,No.s,e),r=Pr(ki.l,No.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new ve;ve.NAMES=hd;var Hf=0,ui=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=li(),this.name="",this.type="Material",this.blending=rs,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=na,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},fn=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Je=new A,Uo=new ft,kf=0,dn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oa,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oa&&(t.usage=this.usage),t}};var zr=class extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hr=class extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Me=class extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vf=0,zn=new Ce,ac=new ze,Bs=new A,Dn=new Rn,Sr=new Rn,nn=new A,Te=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yc(t)?Hr:zr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return ac.lookAt(t),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Dn.min,Sr.min),Dn.expandByPoint(nn),nn.addVectors(Dn.max,Sr.max),Dn.expandByPoint(nn)):(Dn.expandByPoint(Sr.min),Dn.expandByPoint(Sr.max))}Dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(t,c),nn.add(Bs)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new A,l[U]=new A;let c=new A,h=new A,d=new A,p=new ft,m=new ft,g=new ft,y=new A,_=new A;function f(U,T,b){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,b),p.fromBufferAttribute(r,U),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),m.sub(p),g.sub(p);let N=1/(m.x*g.y-g.x*m.y);isFinite(N)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(N),_.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(N),a[U].add(y),a[T].add(y),a[b].add(y),l[U].add(_),l[T].add(_),l[b].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let U=0,T=R.length;U<T;++U){let b=R[U],N=b.start,G=b.count;for(let K=N,tt=N+G;K<tt;K+=3)f(t.getX(K+0),t.getX(K+1),t.getX(K+2))}let S=new A,M=new A,P=new A,I=new A;function L(U){P.fromBufferAttribute(s,U),I.copy(P);let T=a[U];S.copy(T),S.sub(P.multiplyScalar(P.dot(T))).normalize(),M.crossVectors(I,T);let N=M.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,N)}for(let U=0,T=R.length;U<T;++U){let b=R[U],N=b.start,G=b.count;for(let K=N,tt=N+G;K<tt;K+=3)L(t.getX(K+0)),L(t.getX(K+1)),L(t.getX(K+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let p=0,m=t.count;p<m;p+=3){let g=t.getX(p+0),y=t.getX(p+1),_=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,_),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,p=new c.constructor(l.length*h),m=0,g=0;for(let y=0,_=l.length;y<_;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let f=0;f<h;f++)p[g++]=c[m++]}return new dn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let p=c[h],m=t(p,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let p=0,m=d.length;p<m;p++)h.push(d[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tu=new Ce,ns=new Xi,Fo=new Ri,eu=new A,Oo=new A,Bo=new A,zo=new A,lc=new A,Ho=new A,nu=new A,ko=new A,bt=class extends ze{constructor(t=new Te,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(lc.fromBufferAttribute(d,t),o?Ho.addScaledVector(lc,h):Ho.addScaledVector(lc.sub(e),h))}e.add(Ho)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(Fo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Fo,eu)===null||ns.origin.distanceToSquared(eu)>(t.far-t.near)**2))&&(tu.copy(r).invert(),ns.copy(t.ray).applyMatrix4(tu),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){let _=p[g],f=o[_.materialIndex],R=Math.max(_.start,m.start),S=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let M=R,P=S;M<P;M+=3){let I=a.getX(M),L=a.getX(M+1),U=a.getX(M+2);s=Vo(this,f,t,n,c,h,d,I,L,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let _=g,f=y;_<f;_+=3){let R=a.getX(_),S=a.getX(_+1),M=a.getX(_+2);s=Vo(this,o,t,n,c,h,d,R,S,M),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){let _=p[g],f=o[_.materialIndex],R=Math.max(_.start,m.start),S=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let M=R,P=S;M<P;M+=3){let I=M,L=M+1,U=M+2;s=Vo(this,f,t,n,c,h,d,I,L,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let _=g,f=y;_<f;_+=3){let R=_,S=_+1,M=_+2;s=Vo(this,o,t,n,c,h,d,R,S,M),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Gf(i,t,e,n,s,r,o,a){let l;if(t.side===bn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ai,a),l===null)return null;ko.copy(a),ko.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ko);return c<e.near||c>e.far?null:{distance:c,point:ko.clone(),object:i}}function Vo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Oo),i.getVertexPosition(l,Bo),i.getVertexPosition(c,zo);let h=Gf(i,t,e,n,Oo,Bo,zo,nu);if(h){let d=new A;wi.getBarycoord(nu,Oo,Bo,zo,d),s&&(h.uv=wi.getInterpolatedAttribute(s,a,l,c,d,new ft)),r&&(h.uv1=wi.getInterpolatedAttribute(r,a,l,c,d,new ft)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,l,c,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new A,materialIndex:0};wi.getNormal(Oo,Bo,zo,p.normal),h.face=p,h.barycoord=d}return h}var Ie=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],p=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(d,2));function g(y,_,f,R,S,M,P,I,L,U,T){let b=M/L,N=P/U,G=M/2,K=P/2,tt=I/2,et=L+1,J=U+1,rt=0,X=0,_t=new A;for(let Rt=0;Rt<J;Rt++){let Pt=Rt*N-K;for(let te=0;te<et;te++){let oe=te*b-G;_t[y]=oe*R,_t[_]=Pt*S,_t[f]=tt,c.push(_t.x,_t.y,_t.z),_t[y]=0,_t[_]=0,_t[f]=I>0?1:-1,h.push(_t.x,_t.y,_t.z),d.push(te/L),d.push(1-Rt/U),rt+=1}}for(let Rt=0;Rt<U;Rt++)for(let Pt=0;Pt<L;Pt++){let te=p+Pt+et*Rt,oe=p+Pt+et*(Rt+1),ue=p+(Pt+1)+et*(Rt+1),ae=p+(Pt+1)+et*Rt;l.push(te,oe,ae),l.push(oe,ue,ae),X+=6}a.addGroup(m,X,T),m+=X,p+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function mn(i){let t={};for(let e=0;e<i.length;e++){let n=_s(i[e]);for(let s in n)t[s]=n[s]}return t}function Wf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}var ud={clone:_s,merge:mn},Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},kr=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vi=new A,iu=new ft,su=new ft,cn=class extends kr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,iu,su),e.subVectors(su,iu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},zs=-90,Hs=1,ha=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(zs,Hs,t,e);s.layers=this.layers,this.add(s);let r=new cn(zs,Hs,t,e);r.layers=this.layers,this.add(r);let o=new cn(zs,Hs,t,e);o.layers=this.layers,this.add(o);let a=new cn(zs,Hs,t,e);a.layers=this.layers,this.add(a);let l=new cn(zs,Hs,t,e);l.layers=this.layers,this.add(l);let c=new cn(zs,Hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Vr=class extends Mn{constructor(t=[],e=ms,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ua=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ie(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:Ii});r.uniforms.tEquirect.value=e;let o=new bt(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=jn),new ha(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Tn=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},qf={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let _=e.getJointPose(y,n),f=this._getHandJoint(c,y);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Gr=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},da=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oa,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new A,Wr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},js=class extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ks,Er=new A,Vs=new A,Gs=new A,Ws=new ft,br=new ft,dd=new Ce,Go=new A,wr=new A,Wo=new A,ru=new ft,cc=new ft,ou=new ft,Xr=class extends ze{constructor(t=new js){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new Te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new da(e,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new Wr(n,3,0,!1)),ks.setAttribute("uv",new Wr(n,2,3,!1))}this.geometry=ks,this.material=t,this.center=new ft(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),dd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Gs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Xo(Go.set(-.5,-.5,0),Gs,o,Vs,s,r),Xo(wr.set(.5,-.5,0),Gs,o,Vs,s,r),Xo(Wo.set(.5,.5,0),Gs,o,Vs,s,r),ru.set(0,0),cc.set(1,0),ou.set(1,1);let a=t.ray.intersectTriangle(Go,wr,Wo,!1,Er);if(a===null&&(Xo(wr.set(-.5,.5,0),Gs,o,Vs,s,r),cc.set(0,1),a=t.ray.intersectTriangle(Go,Wo,wr,!1,Er),a===null))return;let l=t.ray.origin.distanceTo(Er);l<t.near||l>t.far||e.push({distance:l,point:Er.clone(),uv:wi.getInterpolation(Er,Go,wr,Wo,ru,cc,ou,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Xo(i,t,e,n,s,r){Ws.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(br.x=r*Ws.x-s*Ws.y,br.y=s*Ws.x+r*Ws.y):br.copy(Ws),i.copy(t),i.x+=br.x,i.y+=br.y,i.applyMatrix4(dd)}var fa=class extends Mn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=An,h=An,d,p){super(null,o,a,l,c,h,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yr=class extends dn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Xs=new Ce,au=new Ce,Yo=[],lu=new Rn,Zf=new Ce,Tr=new bt,Ar=new Ri,Qs=class extends bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),lu.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(lu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Ar.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),t.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),au.multiplyMatrices(n,Xs),Tr.matrixWorld=au,Tr.raycast(t,Yo);for(let o=0,a=Yo.length;o<a;o++){let l=Yo[o];l.instanceId=r,l.object=this,e.push(l)}Yo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fa(new Float32Array(s*this.count),s,this.count,Ka,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hc=new A,Kf=new A,Jf=new he,rn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=hc.subVectors(n,e).cross(Kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(hc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Jf.getNormalMatrix(t),s=this.coplanarPoint(hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new Ri,$f=new ft(.5,.5),qo=new A,tr=class{constructor(t=new rn,e=new rn,n=new rn,s=new rn,r=new rn,o=new rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],p=r[6],m=r[7],g=r[8],y=r[9],_=r[10],f=r[11],R=r[12],S=r[13],M=r[14],P=r[15];if(s[0].setComponents(c-o,m-h,f-g,P-R).normalize(),s[1].setComponents(c+o,m+h,f+g,P+R).normalize(),s[2].setComponents(c+a,m+d,f+y,P+S).normalize(),s[3].setComponents(c-a,m-d,f-y,P-S).normalize(),n)s[4].setComponents(l,p,_,M).normalize(),s[5].setComponents(c-l,m-p,f-_,P-M).normalize();else if(s[4].setComponents(c-l,m-p,f-_,P-M).normalize(),e===$n)s[5].setComponents(c+l,m+p,f+_,P+M).normalize();else if(e===Fr)s[5].setComponents(l,p,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);let e=$f.distanceTo(t.center);return is.radius=.7071067811865476+e,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qo.x=s.normal.x>0?t.max.x:t.min.x,qo.y=s.normal.y>0?t.max.y:t.min.y,qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hn=class extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pa=new A,ma=new A,cu=new Ce,Rr=new Xi,Zo=new Ri,uc=new A,hu=new A,Ze=class extends ze{constructor(t=new Te,e=new Hn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)pa.fromBufferAttribute(e,s-1),ma.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=pa.distanceTo(ma);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;cu.copy(s).invert(),Rr.copy(t.ray).applyMatrix4(cu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=m,_=g-1;y<_;y+=c){let f=h.getX(y),R=h.getX(y+1),S=Ko(this,t,Rr,l,f,R,y);S&&e.push(S)}if(this.isLineLoop){let y=h.getX(g-1),_=h.getX(m),f=Ko(this,t,Rr,l,y,_,g-1);f&&e.push(f)}}else{let m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let y=m,_=g-1;y<_;y+=c){let f=Ko(this,t,Rr,l,y,y+1,y);f&&e.push(f)}if(this.isLineLoop){let y=Ko(this,t,Rr,l,g-1,m,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ko(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(pa.fromBufferAttribute(a,s),ma.fromBufferAttribute(a,r),e.distanceSqToSegment(pa,ma,uc,hu)>n)return;uc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(uc);if(!(c<t.near||c>t.far))return{distance:c,point:hu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var uu=new A,du=new A,qr=class extends Ze{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)uu.fromBufferAttribute(e,s),du.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uu.distanceTo(du);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yi=class extends Ze{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var cs=class extends Mn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zr=class extends Mn{constructor(t,e,n=$i,s,r,o,a=An,l=An,c,h=qs,d=1){if(h!==qs&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:d};super(p,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ks(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kr=class extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Jr=class i extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){let m=n+d/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ke=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],m=[],g=0,y=[],_=n/2,f=0;R(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(m,2));function R(){let M=new A,P=new A,I=0,L=(e-t)/n;for(let U=0;U<=r;U++){let T=[],b=U/r,N=b*(e-t)+t;for(let G=0;G<=s;G++){let K=G/s,tt=K*l+a,et=Math.sin(tt),J=Math.cos(tt);P.x=N*et,P.y=-b*n+_,P.z=N*J,d.push(P.x,P.y,P.z),M.set(et,L,J).normalize(),p.push(M.x,M.y,M.z),m.push(K,1-b),T.push(g++)}y.push(T)}for(let U=0;U<s;U++)for(let T=0;T<r;T++){let b=y[T][U],N=y[T+1][U],G=y[T+1][U+1],K=y[T][U+1];(t>0||T!==0)&&(h.push(b,N,K),I+=3),(e>0||T!==r-1)&&(h.push(N,G,K),I+=3)}c.addGroup(f,I,0),f+=I}function S(M){let P=g,I=new ft,L=new A,U=0,T=M===!0?t:e,b=M===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,_*b,0),p.push(0,b,0),m.push(.5,.5),g++;let N=g;for(let G=0;G<=s;G++){let tt=G/s*l+a,et=Math.cos(tt),J=Math.sin(tt);L.x=T*J,L.y=_*b,L.z=T*et,d.push(L.x,L.y,L.z),p.push(0,b,0),I.x=et*.5+.5,I.y=J*.5*b+.5,m.push(I.x,I.y),g++}for(let G=0;G<s;G++){let K=P+G,tt=N+G;M===!0?h.push(tt,tt+1,K):h.push(tt+1,tt,K),U+=3}c.addGroup(f,U,M===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},er=class i extends Ke{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ga=class i extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(R){let S=new A,M=new A,P=new A;for(let I=0;I<e.length;I+=3)m(e[I+0],S),m(e[I+1],M),m(e[I+2],P),l(S,M,P,R)}function l(R,S,M,P){let I=P+1,L=[];for(let U=0;U<=I;U++){L[U]=[];let T=R.clone().lerp(M,U/I),b=S.clone().lerp(M,U/I),N=I-U;for(let G=0;G<=N;G++)G===0&&U===I?L[U][G]=T:L[U][G]=T.clone().lerp(b,G/N)}for(let U=0;U<I;U++)for(let T=0;T<2*(I-U)-1;T++){let b=Math.floor(T/2);T%2===0?(p(L[U][b+1]),p(L[U+1][b]),p(L[U][b])):(p(L[U][b+1]),p(L[U+1][b+1]),p(L[U+1][b]))}}function c(R){let S=new A;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(R),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){let R=new A;for(let S=0;S<r.length;S+=3){R.x=r[S+0],R.y=r[S+1],R.z=r[S+2];let M=_(R)/2/Math.PI+.5,P=f(R)/Math.PI+.5;o.push(M,1-P)}g(),d()}function d(){for(let R=0;R<o.length;R+=6){let S=o[R+0],M=o[R+2],P=o[R+4],I=Math.max(S,M,P),L=Math.min(S,M,P);I>.9&&L<.1&&(S<.2&&(o[R+0]+=1),M<.2&&(o[R+2]+=1),P<.2&&(o[R+4]+=1))}}function p(R){r.push(R.x,R.y,R.z)}function m(R,S){let M=R*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function g(){let R=new A,S=new A,M=new A,P=new A,I=new ft,L=new ft,U=new ft;for(let T=0,b=0;T<r.length;T+=9,b+=6){R.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),I.set(o[b+0],o[b+1]),L.set(o[b+2],o[b+3]),U.set(o[b+4],o[b+5]),P.copy(R).add(S).add(M).divideScalar(3);let N=_(P);y(I,b+0,R,N),y(L,b+2,S,N),y(U,b+4,M,N)}}function y(R,S,M,P){P<0&&R.x===1&&(o[S]=R.x-1),M.x===0&&M.z===0&&(o[S]=P/2/Math.PI+.5)}function _(R){return Math.atan2(R.z,-R.x)}function f(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ft:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new A,s=[],r=[],o=[],a=new A,l=new Ce;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(xe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(xe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},nr=class extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*d+this.aX,c=p*d+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_a=class extends nr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jo=new A,dc=new Zc,fc=new Zc,pc=new Zc,xa=class extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Jo.subVectors(s[0],s[1]).add(s[0]),c=Jo);let d=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(p),m),_=Math.pow(p.distanceToSquared(h),m);y<1e-4&&(y=1),g<1e-4&&(g=y),_<1e-4&&(_=y),dc.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,g,y,_),fc.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,g,y,_),pc.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,g,y,_)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),fc.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),pc.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return n.set(dc.calc(l),fc.calc(l),pc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function jf(i,t){let e=1-i;return e*e*t}function Qf(i,t){return 2*(1-i)*i*t}function tp(i,t){return i*i*t}function Dr(i,t,e,n){return jf(i,t)+Qf(i,e)+tp(i,n)}function ep(i,t){let e=1-i;return e*e*e*t}function np(i,t){let e=1-i;return 3*e*e*i*t}function ip(i,t){return 3*(1-i)*i*i*t}function sp(i,t){return i*i*i*t}function Lr(i,t,e,n,s){return ep(i,t)+np(i,e)+ip(i,n)+sp(i,s)}var $r=class extends Ln{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(t,s.x,r.x,o.x,a.x),Lr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ya=class extends Ln{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(t,s.x,r.x,o.x,a.x),Lr(t,s.y,r.y,o.y,a.y),Lr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jr=class extends Ln{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},va=class extends Ln{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends Ln{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Dr(t,s.x,r.x,o.x),Dr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends Ln{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Dr(t,s.x,r.x,o.x),Dr(t,s.y,r.y,o.y),Dr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(fu(a,l.x,c.x,h.x,d.x),fu(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},vc=Object.freeze({__proto__:null,ArcCurve:_a,CatmullRomCurve3:xa,CubicBezierCurve:$r,CubicBezierCurve3:ya,EllipseCurve:nr,LineCurve:jr,LineCurve3:va,QuadraticBezierCurve:Qr,QuadraticBezierCurve3:Ma,SplineCurve:to}),Sa=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new vc[s.type]().fromJSON(s))}return this}},qi=class extends Sa{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new jr(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Qr(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new $r(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new to(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new nr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},di=class extends qi{constructor(t){super(t),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new qi().fromJSON(s))}return this}};function rp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=fd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=hp(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,d=-1/0;for(let p=e;p<s;p+=e){let m=i[p],g=i[p+1];m<a&&(a=m),g<l&&(l=g),m>h&&(h=m),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return eo(r,o,e,a,l,c,0),o}function fd(i,t,e,n,s){let r;if(s===Mp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=pu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=pu(o/n|0,i[o],i[o+1],r);return r&&ir(r,r.next)&&(io(r),r=r.next),r}function hs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ir(e,e.next)||Xe(e.prev,e,e.next)===0)){if(io(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function eo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&mp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ap(i,n,s,r):op(i)){t.push(l.i,i.i,c.i),io(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=lp(hs(i),t),eo(i,t,e,n,s,r,2)):o===2&&cp(i,t,e,n,s,r):eo(hs(i),t,e,n,s,r,1);break}}}function op(i){let t=i.prev,e=i,n=i.next;if(Xe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),p=Math.max(s,r,o),m=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=m&&Cr(s,a,r,l,o,c,g.x,g.y)&&Xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ap(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Xe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,p=o.y,m=Math.min(a,l,c),g=Math.min(h,d,p),y=Math.max(a,l,c),_=Math.max(h,d,p),f=Mc(m,g,t,e,n),R=Mc(y,_,t,e,n),S=i.prevZ,M=i.nextZ;for(;S&&S.z>=f&&M&&M.z<=R;){if(S.x>=m&&S.x<=y&&S.y>=g&&S.y<=_&&S!==s&&S!==o&&Cr(a,h,l,d,c,p,S.x,S.y)&&Xe(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=m&&M.x<=y&&M.y>=g&&M.y<=_&&M!==s&&M!==o&&Cr(a,h,l,d,c,p,M.x,M.y)&&Xe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=f;){if(S.x>=m&&S.x<=y&&S.y>=g&&S.y<=_&&S!==s&&S!==o&&Cr(a,h,l,d,c,p,S.x,S.y)&&Xe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=R;){if(M.x>=m&&M.x<=y&&M.y>=g&&M.y<=_&&M!==s&&M!==o&&Cr(a,h,l,d,c,p,M.x,M.y)&&Xe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function lp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ir(n,s)&&md(n,e,e.next,s)&&no(n,s)&&no(s,n)&&(t.push(n.i,e.i,s.i),io(e),io(e.next),e=i=s),e=e.next}while(e!==i);return hs(e)}function cp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xp(o,a)){let l=gd(o,a);o=hs(o,o.next),l=hs(l,l.next),eo(o,t,e,n,s,r,0),eo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function hp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=fd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(_p(c))}s.sort(up);for(let r=0;r<s.length;r++)e=dp(s[r],e);return e}function up(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function dp(i,t){let e=fp(i,t);if(!e)return t;let n=gd(e,i);return hs(n,n.next),hs(e,e.next)}function fp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ir(i,e))return e;do{if(ir(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&pd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);no(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&pp(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function pp(i,t){return Xe(i.prev,i,t.prev)<0&&Xe(t.next,i,i.next)<0}function mp(i,t,e,n){let s=i;do s.z===0&&(s.z=Mc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gp(s)}function gp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Mc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _p(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function pd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Cr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&pd(i,t,e,n,s,r,o,a)}function xp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!yp(i,t)&&(no(i,t)&&no(t,i)&&vp(i,t)&&(Xe(i.prev,i,t.prev)||Xe(i,t.prev,t))||ir(i,t)&&Xe(i.prev,i,i.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ir(i,t){return i.x===t.x&&i.y===t.y}function md(i,t,e,n){let s=jo(Xe(i,t,e)),r=jo(Xe(i,t,n)),o=jo(Xe(e,n,i)),a=jo(Xe(e,n,t));return!!(s!==r&&o!==a||s===0&&$o(i,e,t)||r===0&&$o(i,n,t)||o===0&&$o(e,i,n)||a===0&&$o(e,t,n))}function $o(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function jo(i){return i>0?1:i<0?-1:0}function yp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&md(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function no(i,t){return Xe(i.prev,i,i.next)<0?Xe(i,t,i.next)>=0&&Xe(i,i.prev,t)>=0:Xe(i,t,i.prev)<0||Xe(i,i.next,t)<0}function vp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gd(i,t){let e=Sc(i.i,i.x,i.y),n=Sc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function pu(i,t,e,n){let s=Sc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ec=class{static triangulate(t,e,n=2){return rp(t,e,n)}},ai=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];mu(t),gu(n,t);let o=t.length;e.forEach(mu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,gu(n,e[l]);let a=Ec.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function mu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var us=class i extends Te{constructor(t=new di([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:Sp,S,M=!1,P,I,L,U;f&&(S=f.getSpacedPoints(h),M=!0,p=!1,P=f.computeFrenetFrames(h,!1),I=new A,L=new A,U=new A),p||(_=0,m=0,g=0,y=0);let T=a.extractPoints(c),b=T.shape,N=T.holes;if(!ai.isClockWise(b)){b=b.reverse();for(let ht=0,ct=N.length;ht<ct;ht++){let ot=N[ht];ai.isClockWise(ot)&&(N[ht]=ot.reverse())}}function K(ht){let ot=10000000000000001e-36,lt=ht[0];for(let xt=1;xt<=ht.length;xt++){let ut=xt%ht.length,wt=ht[ut],ce=wt.x-lt.x,Kt=wt.y-lt.y,C=ce*ce+Kt*Kt,x=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(lt.x),Math.abs(lt.y)),H=ot*x*x;if(C<=H){ht.splice(ut,1),xt--;continue}lt=wt}}K(b),N.forEach(K);let tt=N.length,et=b;for(let ht=0;ht<tt;ht++){let ct=N[ht];b=b.concat(ct)}function J(ht,ct,ot){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(ct,ot)}let rt=b.length;function X(ht,ct,ot){let lt,xt,ut,wt=ht.x-ct.x,ce=ht.y-ct.y,Kt=ot.x-ht.x,C=ot.y-ht.y,x=wt*wt+ce*ce,H=wt*C-ce*Kt;if(Math.abs(H)>Number.EPSILON){let j=Math.sqrt(x),pt=Math.sqrt(Kt*Kt+C*C),st=ct.x-ce/j,Dt=ct.y+wt/j,Ct=ot.x-C/pt,Xt=ot.y+Kt/pt,Bt=((Ct-st)*C-(Xt-Dt)*Kt)/(wt*C-ce*Kt);lt=st+wt*Bt-ht.x,xt=Dt+ce*Bt-ht.y;let mt=lt*lt+xt*xt;if(mt<=2)return new ft(lt,xt);ut=Math.sqrt(mt/2)}else{let j=!1;wt>Number.EPSILON?Kt>Number.EPSILON&&(j=!0):wt<-Number.EPSILON?Kt<-Number.EPSILON&&(j=!0):Math.sign(ce)===Math.sign(C)&&(j=!0),j?(lt=-ce,xt=wt,ut=Math.sqrt(x)):(lt=wt,xt=ce,ut=Math.sqrt(x/2))}return new ft(lt/ut,xt/ut)}let _t=[];for(let ht=0,ct=et.length,ot=ct-1,lt=ht+1;ht<ct;ht++,ot++,lt++)ot===ct&&(ot=0),lt===ct&&(lt=0),_t[ht]=X(et[ht],et[ot],et[lt]);let Rt=[],Pt,te=_t.concat();for(let ht=0,ct=tt;ht<ct;ht++){let ot=N[ht];Pt=[];for(let lt=0,xt=ot.length,ut=xt-1,wt=lt+1;lt<xt;lt++,ut++,wt++)ut===xt&&(ut=0),wt===xt&&(wt=0),Pt[lt]=X(ot[lt],ot[ut],ot[wt]);Rt.push(Pt),te=te.concat(Pt)}let oe;if(_===0)oe=ai.triangulateShape(et,N);else{let ht=[],ct=[];for(let ot=0;ot<_;ot++){let lt=ot/_,xt=m*Math.cos(lt*Math.PI/2),ut=g*Math.sin(lt*Math.PI/2)+y;for(let wt=0,ce=et.length;wt<ce;wt++){let Kt=J(et[wt],_t[wt],ut);F(Kt.x,Kt.y,-xt),lt===0&&ht.push(Kt)}for(let wt=0,ce=tt;wt<ce;wt++){let Kt=N[wt];Pt=Rt[wt];let C=[];for(let x=0,H=Kt.length;x<H;x++){let j=J(Kt[x],Pt[x],ut);F(j.x,j.y,-xt),lt===0&&C.push(j)}lt===0&&ct.push(C)}}oe=ai.triangulateShape(ht,ct)}let ue=oe.length,ae=g+y;for(let ht=0;ht<rt;ht++){let ct=p?J(b[ht],te[ht],ae):b[ht];M?(L.copy(P.normals[0]).multiplyScalar(ct.x),I.copy(P.binormals[0]).multiplyScalar(ct.y),U.copy(S[0]).add(L).add(I),F(U.x,U.y,U.z)):F(ct.x,ct.y,0)}for(let ht=1;ht<=h;ht++)for(let ct=0;ct<rt;ct++){let ot=p?J(b[ct],te[ct],ae):b[ct];M?(L.copy(P.normals[ht]).multiplyScalar(ot.x),I.copy(P.binormals[ht]).multiplyScalar(ot.y),U.copy(S[ht]).add(L).add(I),F(U.x,U.y,U.z)):F(ot.x,ot.y,d/h*ht)}for(let ht=_-1;ht>=0;ht--){let ct=ht/_,ot=m*Math.cos(ct*Math.PI/2),lt=g*Math.sin(ct*Math.PI/2)+y;for(let xt=0,ut=et.length;xt<ut;xt++){let wt=J(et[xt],_t[xt],lt);F(wt.x,wt.y,d+ot)}for(let xt=0,ut=N.length;xt<ut;xt++){let wt=N[xt];Pt=Rt[xt];for(let ce=0,Kt=wt.length;ce<Kt;ce++){let C=J(wt[ce],Pt[ce],lt);M?F(C.x,C.y+S[h-1].y,S[h-1].x+ot):F(C.x,C.y,d+ot)}}}nt(),gt();function nt(){let ht=s.length/3;if(p){let ct=0,ot=rt*ct;for(let lt=0;lt<ue;lt++){let xt=oe[lt];q(xt[2]+ot,xt[1]+ot,xt[0]+ot)}ct=h+_*2,ot=rt*ct;for(let lt=0;lt<ue;lt++){let xt=oe[lt];q(xt[0]+ot,xt[1]+ot,xt[2]+ot)}}else{for(let ct=0;ct<ue;ct++){let ot=oe[ct];q(ot[2],ot[1],ot[0])}for(let ct=0;ct<ue;ct++){let ot=oe[ct];q(ot[0]+rt*h,ot[1]+rt*h,ot[2]+rt*h)}}n.addGroup(ht,s.length/3-ht,0)}function gt(){let ht=s.length/3,ct=0;Ht(et,ct),ct+=et.length;for(let ot=0,lt=N.length;ot<lt;ot++){let xt=N[ot];Ht(xt,ct),ct+=xt.length}n.addGroup(ht,s.length/3-ht,1)}function Ht(ht,ct){let ot=ht.length;for(;--ot>=0;){let lt=ot,xt=ot-1;xt<0&&(xt=ht.length-1);for(let ut=0,wt=h+_*2;ut<wt;ut++){let ce=rt*ut,Kt=rt*(ut+1),C=ct+lt+ce,x=ct+xt+ce,H=ct+xt+Kt,j=ct+lt+Kt;yt(C,x,H,j)}}}function F(ht,ct,ot){l.push(ht),l.push(ct),l.push(ot)}function q(ht,ct,ot){Vt(ht),Vt(ct),Vt(ot);let lt=s.length/3,xt=R.generateTopUV(n,s,lt-3,lt-2,lt-1);D(xt[0]),D(xt[1]),D(xt[2])}function yt(ht,ct,ot,lt){Vt(ht),Vt(ct),Vt(lt),Vt(ct),Vt(ot),Vt(lt);let xt=s.length/3,ut=R.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);D(ut[0]),D(ut[1]),D(ut[3]),D(ut[1]),D(ut[2]),D(ut[3])}function Vt(ht){s.push(l[ht*3+0]),s.push(l[ht*3+1]),s.push(l[ht*3+2])}function D(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ep(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new vc[s.type]().fromJSON(s)),new i(n,t.options)}},Sp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ft(r,o),new ft(a,l),new ft(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],p=t[s*3],m=t[s*3+1],g=t[s*3+2],y=t[r*3],_=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-d),new ft(p,1-g),new ft(y,1-f)]:[new ft(a,1-l),new ft(h,1-d),new ft(m,1-g),new ft(_,1-f)]}};function Ep(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var fi=class i extends ga{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},kn=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,p=e/l,m=[],g=[],y=[],_=[];for(let f=0;f<h;f++){let R=f*p-o;for(let S=0;S<c;S++){let M=S*d-r;g.push(M,-R,0),y.push(0,0,1),_.push(S/a),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<a;R++){let S=R+c*f,M=R+c*(f+1),P=R+1+c*(f+1),I=R+1+c*f;m.push(S,M,I),m.push(M,P,I)}this.setIndex(m),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var so=class i extends Te{constructor(t=new di([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(r,3)),this.setAttribute("uv",new Me(o,2));function c(h){let d=s.length/3,p=h.extractPoints(e),m=p.shape,g=p.holes;ai.isClockWise(m)===!1&&(m=m.reverse());for(let _=0,f=g.length;_<f;_++){let R=g[_];ai.isClockWise(R)===!0&&(g[_]=R.reverse())}let y=ai.triangulateShape(m,g);for(let _=0,f=g.length;_<f;_++){let R=g[_];m=m.concat(R)}for(let _=0,f=m.length;_<f;_++){let R=m[_];s.push(R.x,R.y,0),r.push(0,0,1),o.push(R.x,R.y)}for(let _=0,f=y.length;_<f;_++){let R=y[_],S=R[0]+d,M=R[1]+d,P=R[2]+d;n.push(S,M,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return bp(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function bp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ti=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new A,p=new A,m=[],g=[],y=[],_=[];for(let f=0;f<=n;f++){let R=[],S=f/n,M=0;f===0&&o===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){let I=P/e;d.x=-t*Math.cos(s+I*r)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(s+I*r)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),y.push(p.x,p.y,p.z),_.push(I+M,1-S),R.push(c++)}h.push(R)}for(let f=0;f<n;f++)for(let R=0;R<e;R++){let S=h[f][R+1],M=h[f][R],P=h[f+1][R],I=h[f+1][R+1];(f!==0||o>0)&&m.push(S,M,I),(f!==n-1||l<Math.PI)&&m.push(M,P,I)}this.setIndex(m),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ci=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new A,d=new A,p=new A;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let y=g/s*r,_=m/n*Math.PI*2;d.x=(t+e*Math.cos(_))*Math.cos(y),d.y=(t+e*Math.cos(_))*Math.sin(y),d.z=e*Math.sin(_),a.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let y=(s+1)*m+g-1,_=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,R=(s+1)*m+g;o.push(y,_,R),o.push(_,f,R)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ds=class extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ea=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ba=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var ro=class extends Hn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Qo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wa=class extends fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gc,endingEnd:gc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _c:r=t,a=2*e-n;break;case xc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _c:o=t,l=2*n-e;break;case xc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),y=g*g,_=y*g,f=-p*_+2*p*y-p*g,R=(1+p)*_+(-1.5-2*p)*y+(-.5+p)*g+1,S=(-1-m)*_+(1.5+m)*y+.5*g,M=m*_-m*y;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+R*o[c+P]+S*o[l+P]+M*o[d+P];return r}},Ta=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*d+o[l+p]*h;return r}},Aa=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Nn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qo(e,this.TimeBufferType),this.values=Qo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qo(t.times,Array),values:Qo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Nr:e=this.InterpolantFactoryMethodDiscrete;break;case ra:e=this.InterpolantFactoryMethodLinear;break;case ta:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&wp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ta,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,p=d-n,m=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[p+g]||y!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,p=o*n;for(let m=0;m!==n;++m)e[p+m]=e[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=ra;var Zi=class extends Nn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Nr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};Ra.prototype.ValueTypeName="color";var Ca=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};Ca.prototype.ValueTypeName="number";var Ia=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ye.slerpFlat(r,0,o,c-a,o,c,l);return r}},oo=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ia(this.times,this.values,this.getValueSize(),t)}};oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Nn{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Nr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};Pa.prototype.ValueTypeName="vector";var Da=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},_d=new Da,La=class{constructor(t){this.manager=t!==void 0?t:_d,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};La.DEFAULT_MATERIAL_NAME="__DEFAULT";var sr=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ao=class extends sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},mc=new Ce,_u=new A,xu=new A,Na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;_u.setFromMatrixPosition(t.matrixWorld),e.position.copy(_u),xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xu),e.updateMatrixWorld(),mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},bc=class extends Na{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ls*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},lo=class extends sr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var co=class extends kr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wc=class extends Na{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rr=class extends sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new wc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ua=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Kc="\\[\\]\\.:\\/",Tp=new RegExp("["+Kc+"]","g"),Jc="[^"+Kc+"]",Ap="[^"+Kc.replace("\\.","")+"]",Rp=/((?:WC+[\/:])*)/.source.replace("WC",Jc),Cp=/(WCOD+)?/.source.replace("WCOD",Ap),Ip=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jc),Pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jc),Dp=new RegExp("^"+Rp+Cp+Ip+Pp+"$"),Lp=["material","materials","bones","map"],Tc=class{constructor(t,e,n){let s=n||Ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tp,"")}static parseTrackName(t){let e=Dp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=Tc;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nx=new Float32Array(1);var yu=new Ce,pi=class{constructor(t,e,n=0,s=1/0){this.ray=new Xi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yu),this}intersectObject(t,e=!0,n=[]){return Ac(t,this,n,e),n.sort(vu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ac(t[s],this,n,e);return n.sort(vu),n}};function vu(i,t){return i.distance-t.distance}function Ac(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ac(r[o],t,e,!0)}}var or=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ho=class extends qr{constructor(t=10,e=10,n=4473924,s=8947848){n=new ve(n),s=new ve(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let p=0,m=0,g=-a;p<=e;p++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let y=p===r?n:s;y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3}let h=new Te;h.setAttribute("position",new Me(l,3)),h.setAttribute("color",new Me(c,3));let d=new Hn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var uo=class extends qr{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Te;r.setIndex(new dn(n,1)),r.setAttribute("position",new Me(s,3)),super(r,new Hn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}};var ps=class extends ci{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function $c(i,t,e,n){let s=Np(n);switch(e){case zc:return i*t;case Ka:return i*t/s.components*s.byteLength;case Ja:return i*t/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case $a:return i*t*2/s.components*s.byteLength;case Hc:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case ja:return i*t*4/s.components*s.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(i,16)*Math.max(t,8)/4;case Qa:case el:return Math.max(i,8)*Math.max(t,8)/2;case il:case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vl:case Ml:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case El:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wl:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Np(i){switch(i){case ni:case Uc:return{byteLength:1,components:1};case ar:case Fc:case lr:return{byteLength:2,components:1};case qa:case Za:return{byteLength:2,components:4};case $i:case Ya:case ii:return{byteLength:4,components:1};case Oc:case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function kd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Up(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){let g=d[p],y=d[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++p,d[p]=y)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){let y=d[m];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
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
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vp=`#ifdef USE_AOMAP
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
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`#ifdef USE_BATCHING
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
#endif`,Xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Jp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rm=`#define PI 3.141592653589793
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
} // validated`,om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,am=`vec3 transformedNormal = objectNormal;
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
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
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
}`,bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Am=`uniform bool receiveShadow;
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
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
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
#endif`,Nm=`struct PhysicalMaterial {
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
}`,Um=`
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xm=`#if defined( USE_POINTS_UV )
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
#endif`,Ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sg=`#ifdef USE_NORMALMAP
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
#endif`,rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vg=`float getShadowMask() {
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
}`,Mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`#include <common>
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
}`,Vg=`#if DEPTH_PACKING == 3200
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
}`,Gg=`#define DISTANCE
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`uniform float scale;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,$g=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,Qg=`#define MATCAP
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
}`,t_=`#define MATCAP
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
}`,e_=`#define NORMAL
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
}`,n_=`#define NORMAL
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
}`,i_=`#define PHONG
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
}`,s_=`#define PHONG
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
}`,r_=`#define STANDARD
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
}`,o_=`#define STANDARD
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
}`,a_=`#define TOON
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
}`,l_=`#define TOON
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
}`,c_=`uniform float size;
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,d_=`uniform vec3 color;
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
}`,f_=`uniform float rotation;
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
}`,p_=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:Fp,alphahash_pars_fragment:Op,alphamap_fragment:Bp,alphamap_pars_fragment:zp,alphatest_fragment:Hp,alphatest_pars_fragment:kp,aomap_fragment:Vp,aomap_pars_fragment:Gp,batching_pars_vertex:Wp,batching_vertex:Xp,begin_vertex:Yp,beginnormal_vertex:qp,bsdfs:Zp,iridescence_fragment:Kp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:tm,color_fragment:em,color_pars_fragment:nm,color_pars_vertex:im,color_vertex:sm,common:rm,cube_uv_reflection_fragment:om,defaultnormal_vertex:am,displacementmap_pars_vertex:lm,displacementmap_vertex:cm,emissivemap_fragment:hm,emissivemap_pars_fragment:um,colorspace_fragment:dm,colorspace_pars_fragment:fm,envmap_fragment:pm,envmap_common_pars_fragment:mm,envmap_pars_fragment:gm,envmap_pars_vertex:_m,envmap_physical_pars_fragment:Rm,envmap_vertex:xm,fog_vertex:ym,fog_pars_vertex:vm,fog_fragment:Mm,fog_pars_fragment:Sm,gradientmap_pars_fragment:Em,lightmap_pars_fragment:bm,lights_lambert_fragment:wm,lights_lambert_pars_fragment:Tm,lights_pars_begin:Am,lights_toon_fragment:Cm,lights_toon_pars_fragment:Im,lights_phong_fragment:Pm,lights_phong_pars_fragment:Dm,lights_physical_fragment:Lm,lights_physical_pars_fragment:Nm,lights_fragment_begin:Um,lights_fragment_maps:Fm,lights_fragment_end:Om,logdepthbuf_fragment:Bm,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:km,map_fragment:Vm,map_pars_fragment:Gm,map_particle_fragment:Wm,map_particle_pars_fragment:Xm,metalnessmap_fragment:Ym,metalnessmap_pars_fragment:qm,morphinstance_vertex:Zm,morphcolor_vertex:Km,morphnormal_vertex:Jm,morphtarget_pars_vertex:$m,morphtarget_vertex:jm,normal_fragment_begin:Qm,normal_fragment_maps:tg,normal_pars_fragment:eg,normal_pars_vertex:ng,normal_vertex:ig,normalmap_pars_fragment:sg,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:ag,iridescence_pars_fragment:lg,opaque_fragment:cg,packing:hg,premultiplied_alpha_fragment:ug,project_vertex:dg,dithering_fragment:fg,dithering_pars_fragment:pg,roughnessmap_fragment:mg,roughnessmap_pars_fragment:gg,shadowmap_pars_fragment:_g,shadowmap_pars_vertex:xg,shadowmap_vertex:yg,shadowmask_pars_fragment:vg,skinbase_vertex:Mg,skinning_pars_vertex:Sg,skinning_vertex:Eg,skinnormal_vertex:bg,specularmap_fragment:wg,specularmap_pars_fragment:Tg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Rg,transmission_fragment:Cg,transmission_pars_fragment:Ig,uv_pars_fragment:Pg,uv_pars_vertex:Dg,uv_vertex:Lg,worldpos_vertex:Ng,background_vert:Ug,background_frag:Fg,backgroundCube_vert:Og,backgroundCube_frag:Bg,cube_vert:zg,cube_frag:Hg,depth_vert:kg,depth_frag:Vg,distanceRGBA_vert:Gg,distanceRGBA_frag:Wg,equirect_vert:Xg,equirect_frag:Yg,linedashed_vert:qg,linedashed_frag:Zg,meshbasic_vert:Kg,meshbasic_frag:Jg,meshlambert_vert:$g,meshlambert_frag:jg,meshmatcap_vert:Qg,meshmatcap_frag:t_,meshnormal_vert:e_,meshnormal_frag:n_,meshphong_vert:i_,meshphong_frag:s_,meshphysical_vert:r_,meshphysical_frag:o_,meshtoon_vert:a_,meshtoon_frag:l_,points_vert:c_,points_frag:h_,shadow_vert:u_,shadow_frag:d_,sprite_vert:f_,sprite_frag:p_},Ot={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},gi={basic:{uniforms:mn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:mn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ve(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:mn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:mn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:mn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ve(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:mn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:mn([Ot.points,Ot.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:mn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:mn([Ot.common,Ot.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:mn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:mn([Ot.sprite,Ot.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:mn([Ot.common,Ot.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:mn([Ot.lights,Ot.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};gi.physical={uniforms:mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var Al={r:0,b:0,g:0},xs=new Sn,m_=new Ce;function g_(i,t,e,n,s,r,o){let a=new ve(0),l=r===!0?0:1,c,h,d=null,p=0,m=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function y(S){let M=!1,P=g(S);P===null?f(a,l):P&&P.isColor&&(f(P,1),M=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,M){let P=g(M);P&&(P.isCubeTexture||P.mapping===fo)?(h===void 0&&(h=new bt(new Ie(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:_s(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xs.copy(M.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(m_.makeRotationFromEuler(xs)),h.material.toneMapped=Ae.getTransfer(P.colorSpace)!==Le,(d!==P||p!==P.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=P,p=P.version,m=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new bt(new kn(2,2),new Qn({name:"BackgroundMaterial",uniforms:_s(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ae.getTransfer(P.colorSpace)!==Le,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||p!==P.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=P,p=P.version,m=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,M){S.getRGB(Al,qc(i)),n.buffers.color.setClear(Al.r,Al.g,Al.b,M,o)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:y,addToRenderList:_,dispose:R}}function __(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(b,N,G,K,tt){let et=!1,J=d(K,G,N);r!==J&&(r=J,c(r.object)),et=m(b,K,G,tt),et&&g(b,K,G,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,M(b,N,G,K),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function d(b,N,G){let K=G.wireframe===!0,tt=n[b.id];tt===void 0&&(tt={},n[b.id]=tt);let et=tt[N.id];et===void 0&&(et={},tt[N.id]=et);let J=et[K];return J===void 0&&(J=p(l()),et[K]=J),J}function p(b){let N=[],G=[],K=[];for(let tt=0;tt<e;tt++)N[tt]=0,G[tt]=0,K[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:K,object:b,attributes:{},index:null}}function m(b,N,G,K){let tt=r.attributes,et=N.attributes,J=0,rt=G.getAttributes();for(let X in rt)if(rt[X].location>=0){let Rt=tt[X],Pt=et[X];if(Pt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Pt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Pt=b.instanceColor)),Rt===void 0||Rt.attribute!==Pt||Pt&&Rt.data!==Pt.data)return!0;J++}return r.attributesNum!==J||r.index!==K}function g(b,N,G,K){let tt={},et=N.attributes,J=0,rt=G.getAttributes();for(let X in rt)if(rt[X].location>=0){let Rt=et[X];Rt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Rt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Rt=b.instanceColor));let Pt={};Pt.attribute=Rt,Rt&&Rt.data&&(Pt.data=Rt.data),tt[X]=Pt,J++}r.attributes=tt,r.attributesNum=J,r.index=K}function y(){let b=r.newAttributes;for(let N=0,G=b.length;N<G;N++)b[N]=0}function _(b){f(b,0)}function f(b,N){let G=r.newAttributes,K=r.enabledAttributes,tt=r.attributeDivisors;G[b]=1,K[b]===0&&(i.enableVertexAttribArray(b),K[b]=1),tt[b]!==N&&(i.vertexAttribDivisor(b,N),tt[b]=N)}function R(){let b=r.newAttributes,N=r.enabledAttributes;for(let G=0,K=N.length;G<K;G++)N[G]!==b[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function S(b,N,G,K,tt,et,J){J===!0?i.vertexAttribIPointer(b,N,G,tt,et):i.vertexAttribPointer(b,N,G,K,tt,et)}function M(b,N,G,K){y();let tt=K.attributes,et=G.getAttributes(),J=N.defaultAttributeValues;for(let rt in et){let X=et[rt];if(X.location>=0){let _t=tt[rt];if(_t===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(_t=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(_t=b.instanceColor)),_t!==void 0){let Rt=_t.normalized,Pt=_t.itemSize,te=t.get(_t);if(te===void 0)continue;let oe=te.buffer,ue=te.type,ae=te.bytesPerElement,nt=ue===i.INT||ue===i.UNSIGNED_INT||_t.gpuType===Ya;if(_t.isInterleavedBufferAttribute){let gt=_t.data,Ht=gt.stride,F=_t.offset;if(gt.isInstancedInterleavedBuffer){for(let q=0;q<X.locationSize;q++)f(X.location+q,gt.meshPerAttribute);b.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let q=0;q<X.locationSize;q++)_(X.location+q);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let q=0;q<X.locationSize;q++)S(X.location+q,Pt/X.locationSize,ue,Rt,Ht*ae,(F+Pt/X.locationSize*q)*ae,nt)}else{if(_t.isInstancedBufferAttribute){for(let gt=0;gt<X.locationSize;gt++)f(X.location+gt,_t.meshPerAttribute);b.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let gt=0;gt<X.locationSize;gt++)_(X.location+gt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let gt=0;gt<X.locationSize;gt++)S(X.location+gt,Pt/X.locationSize,ue,Rt,Pt*ae,Pt/X.locationSize*gt*ae,nt)}}else if(J!==void 0){let Rt=J[rt];if(Rt!==void 0)switch(Rt.length){case 2:i.vertexAttrib2fv(X.location,Rt);break;case 3:i.vertexAttrib3fv(X.location,Rt);break;case 4:i.vertexAttrib4fv(X.location,Rt);break;default:i.vertexAttrib1fv(X.location,Rt)}}}}R()}function P(){U();for(let b in n){let N=n[b];for(let G in N){let K=N[G];for(let tt in K)h(K[tt].object),delete K[tt];delete N[G]}delete n[b]}}function I(b){if(n[b.id]===void 0)return;let N=n[b.id];for(let G in N){let K=N[G];for(let tt in K)h(K[tt].object),delete K[tt];delete N[G]}delete n[b.id]}function L(b){for(let N in n){let G=n[N];if(G[b.id]===void 0)continue;let K=G[b.id];for(let tt in K)h(K[tt].object),delete K[tt];delete G[b.id]}}function U(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:_,disableUnusedAttributes:R}}function x_(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,n,1)}function l(c,h,d,p){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*p[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Vn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let U=L===lr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==ni&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ii&&!U)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:R,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:P,maxSamples:I}}function v_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new rn,a=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,m){let g=d.clippingPlanes,y=d.clipIntersection,_=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!_)r?h(null):c();else{let R=r?0:n,S=R*4,M=f.clippingState||null;l.value=M,M=h(g,p,S,m);for(let P=0;P!==S;++P)M[P]=e[P];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,m,g){let y=d!==null?d.length:0,_=null;if(y!==0){if(_=l.value,g!==!0||_===null){let f=m+y*4,R=p.matrixWorldInverse;a.getNormalMatrix(R),(_===null||_.length<f)&&(_=new Float32Array(f));for(let S=0,M=m;S!==y;++S,M+=4)o.copy(d[S]).applyMatrix4(R,a),o.normal.toArray(_,M),_[M+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,_}}function M_(i){let t=new WeakMap;function e(o,a){return a===Ga?o.mapping=ms:a===Wa&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ga||a===Wa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ua(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var dr=4,xd=[.125,.215,.35,.446,.526,.582],Ms=20,jc=new co,yd=new ve,Qc=null,th=0,eh=0,nh=!1,vs=(1+Math.sqrt(5))/2,ur=1/vs,vd=[new A(-vs,ur,0),new A(vs,ur,0),new A(-ur,0,vs),new A(ur,0,vs),new A(0,vs,-ur),new A(0,vs,ur),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],S_=new A,Il=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=S_}=r;Qc=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qc,th,eh),this._renderer.xr.enabled=nh,t.scissorTest=!1,Rl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qc=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:lr,format:Vn,colorSpace:as,depthBuffer:!1},s=Md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E_(r)),this._blurMaterial=b_(r,t,e)}return s}_compileMaterial(t){let e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,jc)}_sceneToCubeUV(t,e,n,s,r){let l=new cn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(yd),d.toneMapping=Pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let y=new fn({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),_=new bt(new Ie,y),f=!1,R=t.background;R?R.isColor&&(y.color.copy(R),t.background=null,f=!0):(y.color.copy(yd),f=!0);for(let S=0;S<6;S++){let M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let P=this._cubeSize;Rl(s,M*P,S>2?P:0,P,P),d.setRenderTarget(s),f&&d.render(_,l),d.render(t,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=m,d.autoClear=p,t.background=R}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ms||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Rl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,jc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vd[(s-r-1)%vd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new bt(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ms-1),y=r/g,_=isFinite(r)?1+Math.floor(h*y):Ms;_>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ms}`);let f=[],R=0;for(let L=0;L<Ms;++L){let U=L/y,T=Math.exp(-U*U/2);f.push(T),L===0?R+=T:L<_&&(R+=2*T)}for(let L=0;L<f.length;L++)f[L]=f[L]/R;p.envMap.value=t.texture,p.samples.value=_,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-n;let M=this._sizeLods[s],P=3*M*(s>S-dr?s-S+dr:0),I=4*(this._cubeSize-M);Rl(e,P,I,3*M,2*M),l.setRenderTarget(e),l.render(d,jc)}};function E_(i){let t=[],e=[],n=[],s=i,r=i-dr+1+xd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-dr?l=xd[o-i+dr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,y=3,_=2,f=1,R=new Float32Array(y*g*m),S=new Float32Array(_*g*m),M=new Float32Array(f*g*m);for(let I=0;I<m;I++){let L=I%3*2/3-1,U=I>2?0:-1,T=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];R.set(T,y*g*I),S.set(p,_*g*I);let b=[I,I,I,I,I,I];M.set(b,f*g*I)}let P=new Te;P.setAttribute("position",new dn(R,y)),P.setAttribute("uv",new dn(S,_)),P.setAttribute("faceIndex",new dn(M,f)),t.push(P),s>dr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Md(i,t,e){let n=new hi(i,t,e);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rl(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function b_(i,t,e){let n=new Float32Array(Ms),s=new A(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Sd(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ed(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function w_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ga||l===Wa,h=l===ms||l===gs;if(c||h){let d=t.get(a),p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Il(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Il(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function T_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function A_(i,t,e,n){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(d){let p=d.attributes;for(let m in p)t.update(p[m],i.ARRAY_BUFFER)}function c(d){let p=[],m=d.index,g=d.attributes.position,y=0;if(m!==null){let R=m.array;y=m.version;for(let S=0,M=R.length;S<M;S+=3){let P=R[S+0],I=R[S+1],L=R[S+2];p.push(P,I,I,L,L,P)}}else if(g!==void 0){let R=g.array;y=g.version;for(let S=0,M=R.length/3-1;S<M;S+=3){let P=S+0,I=S+1,L=S+2;p.push(P,I,I,L,L,P)}}else return;let _=new(Yc(p)?Hr:zr)(p,1);_.version=y;let f=r.get(d);f&&t.remove(f),r.set(d,_)}function h(d){let p=r.get(d);if(p){let m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function R_(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*o),e.update(m,n,1)}function c(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,p*o,g),e.update(m,n,g))}function h(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,g);let _=0;for(let f=0;f<g;f++)_+=m[f];e.update(_,n,1)}function d(p,m,g,y){if(g===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<p.length;f++)c(p[f]/o,m[f],y[f]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,y,0,g);let f=0;for(let R=0;R<g;R++)f+=m[R]*y[R];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function C_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function I_(i,t,e){let n=new WeakMap,s=new qe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==d){let T=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",T)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],S=0;m===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let M=a.attributes.position.count*S,P=1;M>t.maxTextureSize&&(P=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let I=new Float32Array(M*P*4*d),L=new Br(I,M,P,d);L.type=ii,L.needsUpdate=!0;let U=S*4;for(let b=0;b<d;b++){let N=_[b],G=f[b],K=R[b],tt=M*P*4*b;for(let et=0;et<N.count;et++){let J=et*U;m===!0&&(s.fromBufferAttribute(N,et),I[tt+J+0]=s.x,I[tt+J+1]=s.y,I[tt+J+2]=s.z,I[tt+J+3]=0),g===!0&&(s.fromBufferAttribute(G,et),I[tt+J+4]=s.x,I[tt+J+5]=s.y,I[tt+J+6]=s.z,I[tt+J+7]=0),y===!0&&(s.fromBufferAttribute(K,et),I[tt+J+8]=s.x,I[tt+J+9]=s.y,I[tt+J+10]=s.z,I[tt+J+11]=K.itemSize===4?s.w:1)}}p={count:d,texture:L,size:new ft(M,P)},n.set(a,p),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function P_(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Vd=new Mn,bd=new Zr(1,1),Gd=new Br,Wd=new ca,Xd=new Vr,wd=[],Td=[],Ad=new Float32Array(16),Rd=new Float32Array(9),Cd=new Float32Array(4);function pr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=wd[s];if(r===void 0&&(r=new Float32Array(s),wd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dl(i,t){let e=Td[t];e===void 0&&(e=new Int32Array(t),Td[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function D_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function N_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function U_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function F_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Cd.set(n),i.uniformMatrix2fv(this.addr,!1,Cd),Qe(e,n)}}function O_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Rd.set(n),i.uniformMatrix3fv(this.addr,!1,Rd),Qe(e,n)}}function B_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Ad.set(n),i.uniformMatrix4fv(this.addr,!1,Ad),Qe(e,n)}}function z_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function H_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function k_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function V_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function G_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function W_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function X_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function Y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function q_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bd.compareFunction=Gc,r=bd):r=Vd,e.setTexture2D(t||r,s)}function Z_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wd,s)}function K_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xd,s)}function J_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gd,s)}function $_(i){switch(i){case 5126:return D_;case 35664:return L_;case 35665:return N_;case 35666:return U_;case 35674:return F_;case 35675:return O_;case 35676:return B_;case 5124:case 35670:return z_;case 35667:case 35671:return H_;case 35668:case 35672:return k_;case 35669:case 35673:return V_;case 5125:return G_;case 36294:return W_;case 36295:return X_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return J_}}function j_(i,t){i.uniform1fv(this.addr,t)}function Q_(i,t){let e=pr(t,this.size,2);i.uniform2fv(this.addr,e)}function t0(i,t){let e=pr(t,this.size,3);i.uniform3fv(this.addr,e)}function e0(i,t){let e=pr(t,this.size,4);i.uniform4fv(this.addr,e)}function n0(i,t){let e=pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function i0(i,t){let e=pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function s0(i,t){let e=pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function r0(i,t){i.uniform1iv(this.addr,t)}function o0(i,t){i.uniform2iv(this.addr,t)}function a0(i,t){i.uniform3iv(this.addr,t)}function l0(i,t){i.uniform4iv(this.addr,t)}function c0(i,t){i.uniform1uiv(this.addr,t)}function h0(i,t){i.uniform2uiv(this.addr,t)}function u0(i,t){i.uniform3uiv(this.addr,t)}function d0(i,t){i.uniform4uiv(this.addr,t)}function f0(i,t,e){let n=this.cache,s=t.length,r=Dl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Vd,r[o])}function p0(i,t,e){let n=this.cache,s=t.length,r=Dl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wd,r[o])}function m0(i,t,e){let n=this.cache,s=t.length,r=Dl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xd,r[o])}function g0(i,t,e){let n=this.cache,s=t.length,r=Dl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gd,r[o])}function _0(i){switch(i){case 5126:return j_;case 35664:return Q_;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}var sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$_(e.type)}},rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_0(e.type)}},oh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ih=/(\w+)(\])?(\[|\.)?/g;function Id(i,t){i.seq.push(t),i.map[t.id]=t}function x0(i,t,e){let n=i.name,s=n.length;for(ih.lastIndex=0;;){let r=ih.exec(n),o=ih.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Id(e,c===void 0?new sh(a,i,t):new rh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new oh(a),Id(e,d)),e=d}}}var fr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);x0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Pd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var y0=37297,v0=0;function M0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Dd=new he;function S0(i){Ae._getMatrix(Dd,Ae.workingColorSpace,i);let t=`mat3( ${Dd.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(i)){case Ur:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ld(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+M0(i.getShaderSource(t),a)}else return r}function E0(i,t){let e=S0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b0(i,t){let e;switch(t){case Wu:e="Linear";break;case Xu:e="Reinhard";break;case Yu:e="Cineon";break;case qu:e="ACESFilmic";break;case Ku:e="AgX";break;case Ju:e="Neutral";break;case Zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Cl=new A;function w0(){Ae.getLuminanceCoefficients(Cl);let i=Cl.x.toFixed(4),t=Cl.y.toFixed(4),e=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function A0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function yo(i){return i!==""}function Nd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ud(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(i){return i.replace(C0,P0)}var I0=new Map;function P0(i,t){let e=ye[t];if(e===void 0){let n=I0.get(t);if(n!==void 0)e=ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ah(e)}var D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fd(i){return i.replace(D0,L0)}function L0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Od(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function N0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function U0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function O0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lc:t="ENVMAP_BLENDING_MULTIPLY";break;case Vu:t="ENVMAP_BLENDING_MIX";break;case Gu:t="ENVMAP_BLENDING_ADD";break}return t}function B0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function z0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=N0(e),c=U0(e),h=F0(e),d=O0(e),p=B0(e),m=T0(e),g=A0(r),y=s.createProgram(),_,f,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yo).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yo).join(`
`),f.length>0&&(f+=`
`)):(_=[Od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),f=[Od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?ye.tonemapping_pars_fragment:"",e.toneMapping!==Pi?b0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,E0("linearToOutputTexel",e.outputColorSpace),w0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yo).join(`
`)),o=ah(o),o=Nd(o,e),o=Ud(o,e),a=ah(a),a=Nd(a,e),a=Ud(a,e),o=Fd(o),a=Fd(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",e.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=R+_+o,M=R+f+a,P=Pd(s,s.VERTEX_SHADER,S),I=Pd(s,s.FRAGMENT_SHADER,M);s.attachShader(y,P),s.attachShader(y,I),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(N){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(y)||"",K=s.getShaderInfoLog(P)||"",tt=s.getShaderInfoLog(I)||"",et=G.trim(),J=K.trim(),rt=tt.trim(),X=!0,_t=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,P,I);else{let Rt=Ld(s,P,"vertex"),Pt=Ld(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+et+`
`+Rt+`
`+Pt)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(J===""||rt==="")&&(_t=!1);_t&&(N.diagnostics={runnable:X,programLog:et,vertexShader:{log:J,prefix:_},fragmentShader:{log:rt,prefix:f}})}s.deleteShader(P),s.deleteShader(I),U=new fr(s,y),T=R0(s,y)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,y0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=I,this}var H0=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ch(t),e.set(t,n)),n}},ch=class{constructor(t){this.id=H0++,this.code=t,this.usedTimes=0}};function k0(i,t,e,n,s,r,o){let a=new Js,l=new lh,c=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,b,N,G,K){let tt=G.fog,et=K.geometry,J=T.isMeshStandardMaterial?G.environment:null,rt=(T.isMeshStandardMaterial?e:t).get(T.envMap||J),X=rt&&rt.mapping===fo?rt.image.height:null,_t=g[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));let Rt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Pt=Rt!==void 0?Rt.length:0,te=0;et.morphAttributes.position!==void 0&&(te=1),et.morphAttributes.normal!==void 0&&(te=2),et.morphAttributes.color!==void 0&&(te=3);let oe,ue,ae,nt;if(_t){let Re=gi[_t];oe=Re.vertexShader,ue=Re.fragmentShader}else oe=T.vertexShader,ue=T.fragmentShader,l.update(T),ae=l.getVertexShaderID(T),nt=l.getFragmentShaderID(T);let gt=i.getRenderTarget(),Ht=i.state.buffers.depth.getReversed(),F=K.isInstancedMesh===!0,q=K.isBatchedMesh===!0,yt=!!T.map,Vt=!!T.matcap,D=!!rt,ht=!!T.aoMap,ct=!!T.lightMap,ot=!!T.bumpMap,lt=!!T.normalMap,xt=!!T.displacementMap,ut=!!T.emissiveMap,wt=!!T.metalnessMap,ce=!!T.roughnessMap,Kt=T.anisotropy>0,C=T.clearcoat>0,x=T.dispersion>0,H=T.iridescence>0,j=T.sheen>0,pt=T.transmission>0,st=Kt&&!!T.anisotropyMap,Dt=C&&!!T.clearcoatMap,Ct=C&&!!T.clearcoatNormalMap,Xt=C&&!!T.clearcoatRoughnessMap,Bt=H&&!!T.iridescenceMap,mt=H&&!!T.iridescenceThicknessMap,Lt=j&&!!T.sheenColorMap,jt=j&&!!T.sheenRoughnessMap,Jt=!!T.specularMap,Nt=!!T.specularColorMap,de=!!T.specularIntensityMap,B=pt&&!!T.transmissionMap,Tt=pt&&!!T.thicknessMap,It=!!T.gradientMap,Gt=!!T.alphaMap,Et=T.alphaTest>0,dt=!!T.alphaHash,Yt=!!T.extensions,ee=Pi;T.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ee=i.toneMapping);let Pe={shaderID:_t,shaderType:T.type,shaderName:T.name,vertexShader:oe,fragmentShader:ue,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:q,batchingColor:q&&K._colorsTexture!==null,instancing:F,instancingColor:F&&K.instanceColor!==null,instancingMorph:F&&K.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:as,alphaToCoverage:!!T.alphaToCoverage,map:yt,matcap:Vt,envMap:D,envMapMode:D&&rt.mapping,envMapCubeUVHeight:X,aoMap:ht,lightMap:ct,bumpMap:ot,normalMap:lt,displacementMap:p&&xt,emissiveMap:ut,normalMapObjectSpace:lt&&T.normalMapType===td,normalMapTangentSpace:lt&&T.normalMapType===Vc,metalnessMap:wt,roughnessMap:ce,anisotropy:Kt,anisotropyMap:st,clearcoat:C,clearcoatMap:Dt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Xt,dispersion:x,iridescence:H,iridescenceMap:Bt,iridescenceThicknessMap:mt,sheen:j,sheenColorMap:Lt,sheenRoughnessMap:jt,specularMap:Jt,specularColorMap:Nt,specularIntensityMap:de,transmission:pt,transmissionMap:B,thicknessMap:Tt,gradientMap:It,opaque:T.transparent===!1&&T.blending===rs&&T.alphaToCoverage===!1,alphaMap:Gt,alphaTest:Et,alphaHash:dt,combine:T.combine,mapUv:yt&&y(T.map.channel),aoMapUv:ht&&y(T.aoMap.channel),lightMapUv:ct&&y(T.lightMap.channel),bumpMapUv:ot&&y(T.bumpMap.channel),normalMapUv:lt&&y(T.normalMap.channel),displacementMapUv:xt&&y(T.displacementMap.channel),emissiveMapUv:ut&&y(T.emissiveMap.channel),metalnessMapUv:wt&&y(T.metalnessMap.channel),roughnessMapUv:ce&&y(T.roughnessMap.channel),anisotropyMapUv:st&&y(T.anisotropyMap.channel),clearcoatMapUv:Dt&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:jt&&y(T.sheenRoughnessMap.channel),specularMapUv:Jt&&y(T.specularMap.channel),specularColorMapUv:Nt&&y(T.specularColorMap.channel),specularIntensityMapUv:de&&y(T.specularIntensityMap.channel),transmissionMapUv:B&&y(T.transmissionMap.channel),thicknessMapUv:Tt&&y(T.thicknessMap.channel),alphaMapUv:Gt&&y(T.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(lt||Kt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!et.attributes.uv&&(yt||Gt),fog:!!tt,useFog:T.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ht,skinning:K.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:yt&&T.map.isVideoTexture===!0&&Ae.getTransfer(T.map.colorSpace)===Le,decodeVideoTextureEmissive:ut&&T.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(T.emissiveMap.colorSpace)===Le,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pn,flipSided:T.side===bn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Yt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&T.extensions.multiDraw===!0||q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function f(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let N in T.defines)b.push(N),b.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(R(b,T),S(b,T),b.push(i.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function R(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function S(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){let b=g[T.type],N;if(b){let G=gi[b];N=ud.clone(G.uniforms)}else N=T.uniforms;return N}function P(T,b){let N;for(let G=0,K=h.length;G<K;G++){let tt=h[G];if(tt.cacheKey===b){N=tt,++N.usedTimes;break}}return N===void 0&&(N=new z0(i,b,T,r),h.push(N)),N}function I(T){if(--T.usedTimes===0){let b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function L(T){l.remove(T)}function U(){l.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:M,acquireProgram:P,releaseProgram:I,releaseShaderCache:L,programs:h,dispose:U}}function V0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function G0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,p,m,g,y,_){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:_},i[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=y,f.group=_),t++,f}function a(d,p,m,g,y,_){let f=o(d,p,m,g,y,_);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(d,p,m,g,y,_){let f=o(d,p,m,g,y,_);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,p){e.length>1&&e.sort(d||G0),n.length>1&&n.sort(p||Bd),s.length>1&&s.sort(p||Bd)}function h(){for(let d=t,p=i.length;d<p;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function W0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new zd,i.set(n,[o])):s>=r.length?(o=new zd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function X0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new ve};break;case"SpotLight":e={position:new A,direction:new A,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new ve,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":e={color:new ve,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Y0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var q0=0;function Z0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function K0(i){let t=new X0,e=Y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new Ce,o=new Ce;function a(c){let h=0,d=0,p=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,g=0,y=0,_=0,f=0,R=0,S=0,M=0,P=0,I=0,L=0;c.sort(Z0);for(let T=0,b=c.length;T<b;T++){let N=c[T],G=N.color,K=N.intensity,tt=N.distance,et=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=G.r*K,d+=G.g*K,p+=G.b*K;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],K);L++}else if(N.isDirectionalLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let rt=N.shadow,X=e.get(N);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=N.shadow.matrix,R++}n.directional[m]=J,m++}else if(N.isSpotLight){let J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(G).multiplyScalar(K),J.distance=tt,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[y]=J;let rt=N.shadow;if(N.map&&(n.spotLightMap[P]=N.map,P++,rt.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[y]=rt.matrix,N.castShadow){let X=e.get(N);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=et,M++}y++}else if(N.isRectAreaLight){let J=t.get(N);J.color.copy(G).multiplyScalar(K),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=J,_++}else if(N.isPointLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){let rt=N.shadow,X=e.get(N);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,X.shadowCameraNear=rt.camera.near,X.shadowCameraFar=rt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=N.shadow.matrix,S++}n.point[g]=J,g++}else if(N.isHemisphereLight){let J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(K),J.groundColor.copy(N.groundColor).multiplyScalar(K),n.hemi[f]=J,f++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let U=n.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==_||U.hemiLength!==f||U.numDirectionalShadows!==R||U.numPointShadows!==S||U.numSpotShadows!==M||U.numSpotMaps!==P||U.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=_,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=L,U.directionalLength=m,U.pointLength=g,U.spotLength=y,U.rectAreaLength=_,U.hemiLength=f,U.numDirectionalShadows=R,U.numPointShadows=S,U.numSpotShadows=M,U.numSpotMaps=P,U.numLightProbes=L,n.version=q0++)}function l(c,h){let d=0,p=0,m=0,g=0,y=0,_=h.matrixWorldInverse;for(let f=0,R=c.length;f<R;f++){let S=c[f];if(S.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),d++}else if(S.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),m++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(_),o.identity(),r.copy(S.matrixWorld),r.premultiply(_),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(_),p++}else if(S.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(_),y++}}}return{setup:a,setupView:l,state:n}}function Hd(i){let t=new K0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function J0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hd(i),t.set(s,[a])):r>=o.length?(a=new Hd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var $0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j0=`uniform sampler2D shadow_pass;
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
}`;function Q0(i,t,e){let n=new tr,s=new ft,r=new ft,o=new qe,a=new Ea({depthPacking:Qu}),l=new ba,c={},h=e.maxTextureSize,d={[Ai]:bn,[bn]:Ai,[pn]:pn},p=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:$0,fragmentShader:j0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Te;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new bt(g,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let f=this.type;this.render=function(I,L,U){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;let T=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Ii),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let K=f!==mi&&this.type===mi,tt=f===mi&&this.type!==mi;for(let et=0,J=I.length;et<J;et++){let rt=I[et],X=rt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let _t=X.getFrameExtents();if(s.multiply(_t),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/_t.x),s.x=r.x*_t.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/_t.y),s.y=r.y*_t.y,X.mapSize.y=r.y)),X.map===null||K===!0||tt===!0){let Pt=this.type!==mi?{minFilter:An,magFilter:An}:{};X.map!==null&&X.map.dispose(),X.map=new hi(s.x,s.y,Pt),X.map.texture.name=rt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let Rt=X.getViewportCount();for(let Pt=0;Pt<Rt;Pt++){let te=X.getViewport(Pt);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),G.viewport(o),X.updateMatrices(rt,Pt),n=X.getFrustum(),M(L,U,X.camera,rt,this.type)}X.isPointLightShadow!==!0&&this.type===mi&&R(X,U),X.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(T,b,N)};function R(I,L){let U=t.update(y);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new hi(s.x,s.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,U,p,y,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,U,m,y,null)}function S(I,L,U,T){let b=null,N=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)b=N;else if(b=U.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let G=b.uuid,K=L.uuid,tt=c[G];tt===void 0&&(tt={},c[G]=tt);let et=tt[K];et===void 0&&(et=b.clone(),tt[K]=et,L.addEventListener("dispose",P)),b=et}if(b.visible=L.visible,b.wireframe=L.wireframe,T===mi?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=i.properties.get(b);G.light=U}return b}function M(I,L,U,T,b){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===mi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);let K=t.update(I),tt=I.material;if(Array.isArray(tt)){let et=K.groups;for(let J=0,rt=et.length;J<rt;J++){let X=et[J],_t=tt[X.materialIndex];if(_t&&_t.visible){let Rt=S(I,_t,T,b);I.onBeforeShadow(i,I,L,U,K,Rt,X),i.renderBufferDirect(U,null,K,Rt,I,X),I.onAfterShadow(i,I,L,U,K,Rt,X)}}}else if(tt.visible){let et=S(I,tt,T,b);I.onBeforeShadow(i,I,L,U,K,et,null),i.renderBufferDirect(U,null,K,et,I,null),I.onAfterShadow(i,I,L,U,K,et,null)}}let G=I.children;for(let K=0,tt=G.length;K<tt;K++)M(G[K],L,U,T,b)}function P(I){I.target.removeEventListener("dispose",P);for(let U in c){let T=c[U],b=I.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var tx={[Fa]:Oa,[Ba]:ka,[za]:Va,[os]:Ha,[Oa]:Fa,[ka]:Ba,[Va]:za,[Ha]:os};function ex(i,t){function e(){let B=!1,Tt=new qe,It=null,Gt=new qe(0,0,0,0);return{setMask:function(Et){It!==Et&&!B&&(i.colorMask(Et,Et,Et,Et),It=Et)},setLocked:function(Et){B=Et},setClear:function(Et,dt,Yt,ee,Pe){Pe===!0&&(Et*=ee,dt*=ee,Yt*=ee),Tt.set(Et,dt,Yt,ee),Gt.equals(Tt)===!1&&(i.clearColor(Et,dt,Yt,ee),Gt.copy(Tt))},reset:function(){B=!1,It=null,Gt.set(-1,0,0,0)}}}function n(){let B=!1,Tt=!1,It=null,Gt=null,Et=null;return{setReversed:function(dt){if(Tt!==dt){let Yt=t.get("EXT_clip_control");dt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Tt=dt;let ee=Et;Et=null,this.setClear(ee)}},getReversed:function(){return Tt},setTest:function(dt){dt?gt(i.DEPTH_TEST):Ht(i.DEPTH_TEST)},setMask:function(dt){It!==dt&&!B&&(i.depthMask(dt),It=dt)},setFunc:function(dt){if(Tt&&(dt=tx[dt]),Gt!==dt){switch(dt){case Fa:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Gt=dt}},setLocked:function(dt){B=dt},setClear:function(dt){Et!==dt&&(Tt&&(dt=1-dt),i.clearDepth(dt),Et=dt)},reset:function(){B=!1,It=null,Gt=null,Et=null,Tt=!1}}}function s(){let B=!1,Tt=null,It=null,Gt=null,Et=null,dt=null,Yt=null,ee=null,Pe=null;return{setTest:function(Re){B||(Re?gt(i.STENCIL_TEST):Ht(i.STENCIL_TEST))},setMask:function(Re){Tt!==Re&&!B&&(i.stencilMask(Re),Tt=Re)},setFunc:function(Re,Un,qt){(It!==Re||Gt!==Un||Et!==qt)&&(i.stencilFunc(Re,Un,qt),It=Re,Gt=Un,Et=qt)},setOp:function(Re,Un,qt){(dt!==Re||Yt!==Un||ee!==qt)&&(i.stencilOp(Re,Un,qt),dt=Re,Yt=Un,ee=qt)},setLocked:function(Re){B=Re},setClear:function(Re){Pe!==Re&&(i.clearStencil(Re),Pe=Re)},reset:function(){B=!1,Tt=null,It=null,Gt=null,Et=null,dt=null,Yt=null,ee=null,Pe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},p=new WeakMap,m=[],g=null,y=!1,_=null,f=null,R=null,S=null,M=null,P=null,I=null,L=new ve(0,0,0),U=0,T=!1,b=null,N=null,G=null,K=null,tt=null,et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,rt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=rt>=1):X.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=rt>=2);let _t=null,Rt={},Pt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),oe=new qe().fromArray(Pt),ue=new qe().fromArray(te);function ae(B,Tt,It,Gt){let Et=new Uint8Array(4),dt=i.createTexture();i.bindTexture(B,dt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<It;Yt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,Gt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(Tt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return dt}let nt={};nt[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(i.DEPTH_TEST),o.setFunc(os),ot(!1),lt(Rc),gt(i.CULL_FACE),ht(Ii);function gt(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Ht(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function F(B,Tt){return d[B]!==Tt?(i.bindFramebuffer(B,Tt),d[B]=Tt,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Tt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function q(B,Tt){let It=m,Gt=!1;if(B){It=p.get(Tt),It===void 0&&(It=[],p.set(Tt,It));let Et=B.textures;if(It.length!==Et.length||It[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Yt=Et.length;dt<Yt;dt++)It[dt]=i.COLOR_ATTACHMENT0+dt;It.length=Et.length,Gt=!0}}else It[0]!==i.BACK&&(It[0]=i.BACK,Gt=!0);Gt&&i.drawBuffers(It)}function yt(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let Vt={[Wi]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};Vt[Au]=i.MIN,Vt[Ru]=i.MAX;let D={[Cu]:i.ZERO,[Iu]:i.ONE,[Pu]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Uu]:i.DST_COLOR,[Lu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[Fu]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[Bu]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[Hu]:i.CONSTANT_ALPHA,[ku]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(B,Tt,It,Gt,Et,dt,Yt,ee,Pe,Re){if(B===Ii){y===!0&&(Ht(i.BLEND),y=!1);return}if(y===!1&&(gt(i.BLEND),y=!0),B!==bu){if(B!==_||Re!==T){if((f!==Wi||M!==Wi)&&(i.blendEquation(i.FUNC_ADD),f=Wi,M=Wi),Re)switch(B){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ic:i.blendFunc(i.ONE,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ic:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}R=null,S=null,P=null,I=null,L.set(0,0,0),U=0,_=B,T=Re}return}Et=Et||Tt,dt=dt||It,Yt=Yt||Gt,(Tt!==f||Et!==M)&&(i.blendEquationSeparate(Vt[Tt],Vt[Et]),f=Tt,M=Et),(It!==R||Gt!==S||dt!==P||Yt!==I)&&(i.blendFuncSeparate(D[It],D[Gt],D[dt],D[Yt]),R=It,S=Gt,P=dt,I=Yt),(ee.equals(L)===!1||Pe!==U)&&(i.blendColor(ee.r,ee.g,ee.b,Pe),L.copy(ee),U=Pe),_=B,T=!1}function ct(B,Tt){B.side===pn?Ht(i.CULL_FACE):gt(i.CULL_FACE);let It=B.side===bn;Tt&&(It=!It),ot(It),B.blending===rs&&B.transparent===!1?ht(Ii):ht(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let Gt=B.stencilWrite;a.setTest(Gt),Gt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ut(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function lt(B){B!==Mu?(gt(i.CULL_FACE),B!==N&&(B===Rc?i.cullFace(i.BACK):B===Su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ht(i.CULL_FACE),N=B}function xt(B){B!==G&&(J&&i.lineWidth(B),G=B)}function ut(B,Tt,It){B?(gt(i.POLYGON_OFFSET_FILL),(K!==Tt||tt!==It)&&(i.polygonOffset(Tt,It),K=Tt,tt=It)):Ht(i.POLYGON_OFFSET_FILL)}function wt(B){B?gt(i.SCISSOR_TEST):Ht(i.SCISSOR_TEST)}function ce(B){B===void 0&&(B=i.TEXTURE0+et-1),_t!==B&&(i.activeTexture(B),_t=B)}function Kt(B,Tt,It){It===void 0&&(_t===null?It=i.TEXTURE0+et-1:It=_t);let Gt=Rt[It];Gt===void 0&&(Gt={type:void 0,texture:void 0},Rt[It]=Gt),(Gt.type!==B||Gt.texture!==Tt)&&(_t!==It&&(i.activeTexture(It),_t=It),i.bindTexture(B,Tt||nt[B]),Gt.type=B,Gt.texture=Tt)}function C(){let B=Rt[_t];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xt(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Bt(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(B){oe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),oe.copy(B))}function jt(B){ue.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ue.copy(B))}function Jt(B,Tt){let It=c.get(Tt);It===void 0&&(It=new WeakMap,c.set(Tt,It));let Gt=It.get(B);Gt===void 0&&(Gt=i.getUniformBlockIndex(Tt,B.name),It.set(B,Gt))}function Nt(B,Tt){let Gt=c.get(Tt).get(B);l.get(Tt)!==Gt&&(i.uniformBlockBinding(Tt,Gt,B.__bindingPointIndex),l.set(Tt,Gt))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},_t=null,Rt={},d={},p=new WeakMap,m=[],g=null,y=!1,_=null,f=null,R=null,S=null,M=null,P=null,I=null,L=new ve(0,0,0),U=0,T=!1,b=null,N=null,G=null,K=null,tt=null,oe.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:Ht,bindFramebuffer:F,drawBuffers:q,useProgram:yt,setBlending:ht,setMaterial:ct,setFlipSided:ot,setCullFace:lt,setLineWidth:xt,setPolygonOffset:ut,setScissorTest:wt,activeTexture:ce,bindTexture:Kt,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:H,texImage2D:Bt,texImage3D:mt,updateUBOMapping:Jt,uniformBlockBinding:Nt,texStorage2D:Ct,texStorage3D:Xt,texSubImage2D:j,texSubImage3D:pt,compressedTexSubImage2D:st,compressedTexSubImage3D:Dt,scissor:Lt,viewport:jt,reset:de}}function nx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap,d,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return m?new OffscreenCanvas(C,x):Or("canvas")}function y(C,x,H){let j=1,pt=Kt(C);if((pt.width>H||pt.height>H)&&(j=H/Math.max(pt.width,pt.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let st=Math.floor(j*pt.width),Dt=Math.floor(j*pt.height);d===void 0&&(d=g(st,Dt));let Ct=x?g(st,Dt):d;return Ct.width=st,Ct.height=Dt,Ct.getContext("2d").drawImage(C,0,0,st,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+st+"x"+Dt+")."),Ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),C;return C}function _(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,x,H,j,pt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let st=x;if(x===i.RED&&(H===i.FLOAT&&(st=i.R32F),H===i.HALF_FLOAT&&(st=i.R16F),H===i.UNSIGNED_BYTE&&(st=i.R8)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(st=i.R8UI),H===i.UNSIGNED_SHORT&&(st=i.R16UI),H===i.UNSIGNED_INT&&(st=i.R32UI),H===i.BYTE&&(st=i.R8I),H===i.SHORT&&(st=i.R16I),H===i.INT&&(st=i.R32I)),x===i.RG&&(H===i.FLOAT&&(st=i.RG32F),H===i.HALF_FLOAT&&(st=i.RG16F),H===i.UNSIGNED_BYTE&&(st=i.RG8)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(st=i.RG8UI),H===i.UNSIGNED_SHORT&&(st=i.RG16UI),H===i.UNSIGNED_INT&&(st=i.RG32UI),H===i.BYTE&&(st=i.RG8I),H===i.SHORT&&(st=i.RG16I),H===i.INT&&(st=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(st=i.RGB8UI),H===i.UNSIGNED_SHORT&&(st=i.RGB16UI),H===i.UNSIGNED_INT&&(st=i.RGB32UI),H===i.BYTE&&(st=i.RGB8I),H===i.SHORT&&(st=i.RGB16I),H===i.INT&&(st=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),H===i.UNSIGNED_INT&&(st=i.RGBA32UI),H===i.BYTE&&(st=i.RGBA8I),H===i.SHORT&&(st=i.RGBA16I),H===i.INT&&(st=i.RGBA32I)),x===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),x===i.RGBA){let Dt=pt?Ur:Ae.getTransfer(j);H===i.FLOAT&&(st=i.RGBA32F),H===i.HALF_FLOAT&&(st=i.RGBA16F),H===i.UNSIGNED_BYTE&&(st=Dt===Le?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(C,x){let H;return C?x===null||x===$i||x===cr?H=i.DEPTH24_STENCIL8:x===ii?H=i.DEPTH32F_STENCIL8:x===ar&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===$i||x===cr?H=i.DEPTH_COMPONENT24:x===ii?H=i.DEPTH_COMPONENT32F:x===ar&&(H=i.DEPTH_COMPONENT16),H}function P(C,x){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==An&&C.minFilter!==jn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function I(C){let x=C.target;x.removeEventListener("dispose",I),U(x),x.isVideoTexture&&h.delete(x)}function L(C){let x=C.target;x.removeEventListener("dispose",L),b(x)}function U(C){let x=n.get(C);if(x.__webglInit===void 0)return;let H=C.source,j=p.get(H);if(j){let pt=j[x.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&T(C),Object.keys(j).length===0&&p.delete(H)}n.remove(C)}function T(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let H=C.source,j=p.get(H);delete j[x.__cacheKey],o.memory.textures--}function b(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let pt=0;pt<x.__webglFramebuffer[j].length;pt++)i.deleteFramebuffer(x.__webglFramebuffer[j][pt]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=C.textures;for(let j=0,pt=H.length;j<pt;j++){let st=n.get(H[j]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(H[j])}n.remove(C)}let N=0;function G(){N=0}function K(){let C=N;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function tt(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function et(C,x){let H=n.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(H,C,x);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function J(C,x){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){nt(H,C,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function rt(C,x){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){nt(H,C,x);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function X(C,x){let H=n.get(C);if(C.version>0&&H.__version!==C.version){gt(H,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}let _t={[ia]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},Rt={[An]:i.NEAREST,[$u]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},Pt={[ed]:i.NEVER,[ad]:i.ALWAYS,[nd]:i.LESS,[Gc]:i.LEQUAL,[id]:i.EQUAL,[od]:i.GEQUAL,[sd]:i.GREATER,[rd]:i.NOTEQUAL};function te(C,x){if(x.type===ii&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===jn||x.magFilter===Xa||x.magFilter===po||x.magFilter===Ji||x.minFilter===jn||x.minFilter===Xa||x.minFilter===po||x.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,_t[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,_t[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,_t[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Rt[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Rt[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===An||x.minFilter!==po&&x.minFilter!==Ji||x.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function oe(C,x){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",I));let j=x.source,pt=p.get(j);pt===void 0&&(pt={},p.set(j,pt));let st=tt(x);if(st!==C.__cacheKey){pt[st]===void 0&&(pt[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),pt[st].usedTimes++;let Dt=pt[C.__cacheKey];Dt!==void 0&&(pt[C.__cacheKey].usedTimes--,Dt.usedTimes===0&&T(x)),C.__cacheKey=st,C.__webglTexture=pt[st].texture}return H}function ue(C,x,H){return Math.floor(Math.floor(C/H)/x)}function ae(C,x,H,j){let st=C.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,H,j,x.data);else{st.sort((mt,Lt)=>mt.start-Lt.start);let Dt=0;for(let mt=1;mt<st.length;mt++){let Lt=st[Dt],jt=st[mt],Jt=Lt.start+Lt.count,Nt=ue(jt.start,x.width,4),de=ue(Lt.start,x.width,4);jt.start<=Jt+1&&Nt===de&&ue(jt.start+jt.count-1,x.width,4)===Nt?Lt.count=Math.max(Lt.count,jt.start+jt.count-Lt.start):(++Dt,st[Dt]=jt)}st.length=Dt+1;let Ct=i.getParameter(i.UNPACK_ROW_LENGTH),Xt=i.getParameter(i.UNPACK_SKIP_PIXELS),Bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let mt=0,Lt=st.length;mt<Lt;mt++){let jt=st[mt],Jt=Math.floor(jt.start/4),Nt=Math.ceil(jt.count/4),de=Jt%x.width,B=Math.floor(Jt/x.width),Tt=Nt,It=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,de),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,de,B,Tt,It,H,j,x.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Bt)}}function nt(C,x,H){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let pt=oe(C,x),st=x.source;e.bindTexture(j,C.__webglTexture,i.TEXTURE0+H);let Dt=n.get(st);if(st.version!==Dt.__version||pt===!0){e.activeTexture(i.TEXTURE0+H);let Ct=Ae.getPrimaries(Ae.workingColorSpace),Xt=x.colorSpace===Di?null:Ae.getPrimaries(x.colorSpace),Bt=x.colorSpace===Di||Ct===Xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let mt=y(x.image,!1,s.maxTextureSize);mt=ce(x,mt);let Lt=r.convert(x.format,x.colorSpace),jt=r.convert(x.type),Jt=S(x.internalFormat,Lt,jt,x.colorSpace,x.isVideoTexture);te(j,x);let Nt,de=x.mipmaps,B=x.isVideoTexture!==!0,Tt=Dt.__version===void 0||pt===!0,It=st.dataReady,Gt=P(x,mt);if(x.isDepthTexture)Jt=M(x.format===hr,x.type),Tt&&(B?e.texStorage2D(i.TEXTURE_2D,1,Jt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Jt,mt.width,mt.height,0,Lt,jt,null));else if(x.isDataTexture)if(de.length>0){B&&Tt&&e.texStorage2D(i.TEXTURE_2D,Gt,Jt,de[0].width,de[0].height);for(let Et=0,dt=de.length;Et<dt;Et++)Nt=de[Et],B?It&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Nt.width,Nt.height,Lt,jt,Nt.data):e.texImage2D(i.TEXTURE_2D,Et,Jt,Nt.width,Nt.height,0,Lt,jt,Nt.data);x.generateMipmaps=!1}else B?(Tt&&e.texStorage2D(i.TEXTURE_2D,Gt,Jt,mt.width,mt.height),It&&ae(x,mt,Lt,jt)):e.texImage2D(i.TEXTURE_2D,0,Jt,mt.width,mt.height,0,Lt,jt,mt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Jt,de[0].width,de[0].height,mt.depth);for(let Et=0,dt=de.length;Et<dt;Et++)if(Nt=de[Et],x.format!==Vn)if(Lt!==null)if(B){if(It)if(x.layerUpdates.size>0){let Yt=$c(Nt.width,Nt.height,x.format,x.type);for(let ee of x.layerUpdates){let Pe=Nt.data.subarray(ee*Yt/Nt.data.BYTES_PER_ELEMENT,(ee+1)*Yt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,ee,Nt.width,Nt.height,1,Lt,Pe)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,Nt.width,Nt.height,mt.depth,Lt,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Et,Jt,Nt.width,Nt.height,mt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?It&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,Nt.width,Nt.height,mt.depth,Lt,jt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Et,Jt,Nt.width,Nt.height,mt.depth,0,Lt,jt,Nt.data)}else{B&&Tt&&e.texStorage2D(i.TEXTURE_2D,Gt,Jt,de[0].width,de[0].height);for(let Et=0,dt=de.length;Et<dt;Et++)Nt=de[Et],x.format!==Vn?Lt!==null?B?It&&e.compressedTexSubImage2D(i.TEXTURE_2D,Et,0,0,Nt.width,Nt.height,Lt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,Et,Jt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?It&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Nt.width,Nt.height,Lt,jt,Nt.data):e.texImage2D(i.TEXTURE_2D,Et,Jt,Nt.width,Nt.height,0,Lt,jt,Nt.data)}else if(x.isDataArrayTexture)if(B){if(Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Jt,mt.width,mt.height,mt.depth),It)if(x.layerUpdates.size>0){let Et=$c(mt.width,mt.height,x.format,x.type);for(let dt of x.layerUpdates){let Yt=mt.data.subarray(dt*Et/mt.data.BYTES_PER_ELEMENT,(dt+1)*Et/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,mt.width,mt.height,1,Lt,jt,Yt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Lt,jt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Jt,mt.width,mt.height,mt.depth,0,Lt,jt,mt.data);else if(x.isData3DTexture)B?(Tt&&e.texStorage3D(i.TEXTURE_3D,Gt,Jt,mt.width,mt.height,mt.depth),It&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Lt,jt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Jt,mt.width,mt.height,mt.depth,0,Lt,jt,mt.data);else if(x.isFramebufferTexture){if(Tt)if(B)e.texStorage2D(i.TEXTURE_2D,Gt,Jt,mt.width,mt.height);else{let Et=mt.width,dt=mt.height;for(let Yt=0;Yt<Gt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,Jt,Et,dt,0,Lt,jt,null),Et>>=1,dt>>=1}}else if(de.length>0){if(B&&Tt){let Et=Kt(de[0]);e.texStorage2D(i.TEXTURE_2D,Gt,Jt,Et.width,Et.height)}for(let Et=0,dt=de.length;Et<dt;Et++)Nt=de[Et],B?It&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Lt,jt,Nt):e.texImage2D(i.TEXTURE_2D,Et,Jt,Lt,jt,Nt);x.generateMipmaps=!1}else if(B){if(Tt){let Et=Kt(mt);e.texStorage2D(i.TEXTURE_2D,Gt,Jt,Et.width,Et.height)}It&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,jt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Jt,Lt,jt,mt);_(x)&&f(j),Dt.__version=st.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function gt(C,x,H){if(x.image.length!==6)return;let j=oe(C,x),pt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let st=n.get(pt);if(pt.version!==st.__version||j===!0){e.activeTexture(i.TEXTURE0+H);let Dt=Ae.getPrimaries(Ae.workingColorSpace),Ct=x.colorSpace===Di?null:Ae.getPrimaries(x.colorSpace),Xt=x.colorSpace===Di||Dt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Bt=x.isCompressedTexture||x.image[0].isCompressedTexture,mt=x.image[0]&&x.image[0].isDataTexture,Lt=[];for(let dt=0;dt<6;dt++)!Bt&&!mt?Lt[dt]=y(x.image[dt],!0,s.maxCubemapSize):Lt[dt]=mt?x.image[dt].image:x.image[dt],Lt[dt]=ce(x,Lt[dt]);let jt=Lt[0],Jt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type),de=S(x.internalFormat,Jt,Nt,x.colorSpace),B=x.isVideoTexture!==!0,Tt=st.__version===void 0||j===!0,It=pt.dataReady,Gt=P(x,jt);te(i.TEXTURE_CUBE_MAP,x);let Et;if(Bt){B&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,de,jt.width,jt.height);for(let dt=0;dt<6;dt++){Et=Lt[dt].mipmaps;for(let Yt=0;Yt<Et.length;Yt++){let ee=Et[Yt];x.format!==Vn?Jt!==null?B?It&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt,0,0,ee.width,ee.height,Jt,ee.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt,de,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?It&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt,0,0,ee.width,ee.height,Jt,Nt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt,de,ee.width,ee.height,0,Jt,Nt,ee.data)}}}else{if(Et=x.mipmaps,B&&Tt){Et.length>0&&Gt++;let dt=Kt(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,de,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(mt){B?It&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Lt[dt].width,Lt[dt].height,Jt,Nt,Lt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,de,Lt[dt].width,Lt[dt].height,0,Jt,Nt,Lt[dt].data);for(let Yt=0;Yt<Et.length;Yt++){let Pe=Et[Yt].image[dt].image;B?It&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt+1,0,0,Pe.width,Pe.height,Jt,Nt,Pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt+1,de,Pe.width,Pe.height,0,Jt,Nt,Pe.data)}}else{B?It&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Jt,Nt,Lt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,de,Jt,Nt,Lt[dt]);for(let Yt=0;Yt<Et.length;Yt++){let ee=Et[Yt];B?It&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt+1,0,0,Jt,Nt,ee.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt+1,de,Jt,Nt,ee.image[dt])}}}_(x)&&f(i.TEXTURE_CUBE_MAP),st.__version=pt.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ht(C,x,H,j,pt,st){let Dt=r.convert(H.format,H.colorSpace),Ct=r.convert(H.type),Xt=S(H.internalFormat,Dt,Ct,H.colorSpace),Bt=n.get(x),mt=n.get(H);if(mt.__renderTarget=x,!Bt.__hasExternalTextures){let Lt=Math.max(1,x.width>>st),jt=Math.max(1,x.height>>st);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,st,Xt,Lt,jt,x.depth,0,Dt,Ct,null):e.texImage2D(pt,st,Xt,Lt,jt,0,Dt,Ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ut(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,pt,mt.__webglTexture,0,xt(x)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,pt,mt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function F(C,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let j=x.depthTexture,pt=j&&j.isDepthTexture?j.type:null,st=M(x.stencilBuffer,pt),Dt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=xt(x);ut(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,st,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,st,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,st,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,C)}else{let j=x.textures;for(let pt=0;pt<j.length;pt++){let st=j[pt],Dt=r.convert(st.format,st.colorSpace),Ct=r.convert(st.type),Xt=S(st.internalFormat,Dt,Ct,st.colorSpace),Bt=xt(x);H&&ut(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Xt,x.width,x.height):ut(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt,Xt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Xt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function q(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),et(x.depthTexture,0);let pt=j.__webglTexture,st=xt(x);if(x.depthTexture.format===qs)ut(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(x.depthTexture.format===hr)ut(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function yt(C){let x=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let pt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",pt)};j.addEventListener("dispose",pt),x.__depthDisposeCallback=pt}x.__boundDepthTexture=j}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let j=C.texture.mipmaps;j&&j.length>0?q(x.__webglFramebuffer[0],C):q(x.__webglFramebuffer,C)}else if(H){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),F(x.__webglDepthbuffer[j],C,!1);else{let pt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,st)}}else{let j=C.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),F(x.__webglDepthbuffer,C,!1);else{let pt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(C,x,H){let j=n.get(C);x!==void 0&&Ht(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&yt(C)}function D(C){let x=C.texture,H=n.get(C),j=n.get(x);C.addEventListener("dispose",L);let pt=C.textures,st=C.isWebGLCubeRenderTarget===!0,Dt=pt.length>1;if(Dt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,o.memory.textures++),st){H.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[Ct]=[];for(let Xt=0;Xt<x.mipmaps.length;Xt++)H.__webglFramebuffer[Ct][Xt]=i.createFramebuffer()}else H.__webglFramebuffer[Ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ct=0;Ct<x.mipmaps.length;Ct++)H.__webglFramebuffer[Ct]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let Ct=0,Xt=pt.length;Ct<Xt;Ct++){let Bt=n.get(pt[Ct]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ut(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ct=0;Ct<pt.length;Ct++){let Xt=pt[Ct];H.__webglColorRenderbuffer[Ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Ct]);let Bt=r.convert(Xt.format,Xt.colorSpace),mt=r.convert(Xt.type),Lt=S(Xt.internalFormat,Bt,mt,Xt.colorSpace,C.isXRRenderTarget===!0),jt=xt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Lt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,H.__webglColorRenderbuffer[Ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),F(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),te(i.TEXTURE_CUBE_MAP,x);for(let Ct=0;Ct<6;Ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let Xt=0;Xt<x.mipmaps.length;Xt++)Ht(H.__webglFramebuffer[Ct][Xt],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Xt);else Ht(H.__webglFramebuffer[Ct],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);_(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let Ct=0,Xt=pt.length;Ct<Xt;Ct++){let Bt=pt[Ct],mt=n.get(Bt),Lt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Lt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Lt,mt.__webglTexture),te(Lt,Bt),Ht(H.__webglFramebuffer,C,Bt,i.COLOR_ATTACHMENT0+Ct,Lt,0),_(Bt)&&f(Lt)}e.unbindTexture()}else{let Ct=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ct=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,j.__webglTexture),te(Ct,x),x.mipmaps&&x.mipmaps.length>0)for(let Xt=0;Xt<x.mipmaps.length;Xt++)Ht(H.__webglFramebuffer[Xt],C,x,i.COLOR_ATTACHMENT0,Ct,Xt);else Ht(H.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,Ct,0);_(x)&&f(Ct),e.unbindTexture()}C.depthBuffer&&yt(C)}function ht(C){let x=C.textures;for(let H=0,j=x.length;H<j;H++){let pt=x[H];if(_(pt)){let st=R(C),Dt=n.get(pt).__webglTexture;e.bindTexture(st,Dt),f(st),e.unbindTexture()}}}let ct=[],ot=[];function lt(C){if(C.samples>0){if(ut(C)===!1){let x=C.textures,H=C.width,j=C.height,pt=i.COLOR_BUFFER_BIT,st=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(C),Ct=x.length>1;if(Ct)for(let Bt=0;Bt<x.length;Bt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);let Xt=C.texture.mipmaps;Xt&&Xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Bt=0;Bt<x.length;Bt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),Ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Bt]);let mt=n.get(x[Bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,pt,i.NEAREST),l===!0&&(ct.length=0,ot.length=0,ct.push(i.COLOR_ATTACHMENT0+Bt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ct.push(st),ot.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ct)for(let Bt=0;Bt<x.length;Bt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Bt]);let mt=n.get(x[Bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function xt(C){return Math.min(s.maxSamples,C.samples)}function ut(C){let x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function wt(C){let x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function ce(C,x){let H=C.colorSpace,j=C.format,pt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==as&&H!==Di&&(Ae.getTransfer(H)===Le?(j!==Vn||pt!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Kt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.setTexture2D=et,this.setTexture2DArray=J,this.setTexture3D=rt,this.setTextureCube=X,this.rebindTextures=Vt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=ut}function ix(i,t){function e(n,s=Di){let r,o=Ae.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uc)return i.BYTE;if(n===Fc)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===Hc)return i.RGB;if(n===Vn)return i.RGBA;if(n===qs)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===Ka)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===kc)return i.RG;if(n===$a)return i.RG_INTEGER;if(n===ja)return i.RGBA_INTEGER;if(n===mo||n===go||n===_o||n===xo)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===sl)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===al)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===Ml||n===Sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vl)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===bl||n===wl||n===Tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===El)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`,hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Kr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Qn({vertexShader:sx,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uh=class extends ci{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,p=null,m=null,g=null,y=typeof XRWebGLBinding<"u",_=new hh,f={},R=e.getContextAttributes(),S=null,M=null,P=[],I=[],L=new ft,U=null,T=new cn;T.viewport=new qe;let b=new cn;b.viewport=new qe;let N=[T,b],G=new Ua,K=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let gt=P[nt];return gt===void 0&&(gt=new $s,P[nt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(nt){let gt=P[nt];return gt===void 0&&(gt=new $s,P[nt]=gt),gt.getGripSpace()},this.getHand=function(nt){let gt=P[nt];return gt===void 0&&(gt=new $s,P[nt]=gt),gt.getHandSpace()};function et(nt){let gt=I.indexOf(nt.inputSource);if(gt===-1)return;let Ht=P[gt];Ht!==void 0&&(Ht.update(nt.inputSource,nt.frame,c||o),Ht.dispatchEvent({type:nt.type,data:nt.inputSource}))}function J(){s.removeEventListener("select",et),s.removeEventListener("selectstart",et),s.removeEventListener("selectend",et),s.removeEventListener("squeeze",et),s.removeEventListener("squeezestart",et),s.removeEventListener("squeezeend",et),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",rt);for(let nt=0;nt<P.length;nt++){let gt=I[nt];gt!==null&&(I[nt]=null,P[nt].disconnect(gt))}K=null,tt=null,_.reset();for(let nt in f)delete f[nt];t.setRenderTarget(S),m=null,p=null,d=null,s=null,M=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",et),s.addEventListener("selectstart",et),s.addEventListener("selectend",et),s.addEventListener("squeeze",et),s.addEventListener("squeezestart",et),s.addEventListener("squeezeend",et),s.addEventListener("end",J),s.addEventListener("inputsourceschange",rt),R.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ht=null,F=null,q=null;R.depth&&(q=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ht=R.stencil?hr:qs,F=R.stencil?cr:$i);let yt={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(yt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new hi(p.textureWidth,p.textureHeight,{format:Vn,type:ni,depthTexture:new Zr(p.textureWidth,p.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,Ht),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let Ht={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Ht),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new hi(m.framebufferWidth,m.framebufferHeight,{format:Vn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function rt(nt){for(let gt=0;gt<nt.removed.length;gt++){let Ht=nt.removed[gt],F=I.indexOf(Ht);F>=0&&(I[F]=null,P[F].disconnect(Ht))}for(let gt=0;gt<nt.added.length;gt++){let Ht=nt.added[gt],F=I.indexOf(Ht);if(F===-1){for(let yt=0;yt<P.length;yt++)if(yt>=I.length){I.push(Ht),F=yt;break}else if(I[yt]===null){I[yt]=Ht,F=yt;break}if(F===-1)break}let q=P[F];q&&q.connect(Ht)}}let X=new A,_t=new A;function Rt(nt,gt,Ht){X.setFromMatrixPosition(gt.matrixWorld),_t.setFromMatrixPosition(Ht.matrixWorld);let F=X.distanceTo(_t),q=gt.projectionMatrix.elements,yt=Ht.projectionMatrix.elements,Vt=q[14]/(q[10]-1),D=q[14]/(q[10]+1),ht=(q[9]+1)/q[5],ct=(q[9]-1)/q[5],ot=(q[8]-1)/q[0],lt=(yt[8]+1)/yt[0],xt=Vt*ot,ut=Vt*lt,wt=F/(-ot+lt),ce=wt*-ot;if(gt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ce),nt.translateZ(wt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),q[10]===-1)nt.projectionMatrix.copy(gt.projectionMatrix),nt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let Kt=Vt+wt,C=D+wt,x=xt-ce,H=ut+(F-ce),j=ht*D/C*Kt,pt=ct*D/C*Kt;nt.projectionMatrix.makePerspective(x,H,j,pt,Kt,C),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Pt(nt,gt){gt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(gt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let gt=nt.near,Ht=nt.far;_.texture!==null&&(_.depthNear>0&&(gt=_.depthNear),_.depthFar>0&&(Ht=_.depthFar)),G.near=b.near=T.near=gt,G.far=b.far=T.far=Ht,(K!==G.near||tt!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),K=G.near,tt=G.far),G.layers.mask=nt.layers.mask|6,T.layers.mask=G.layers.mask&3,b.layers.mask=G.layers.mask&5;let F=nt.parent,q=G.cameras;Pt(G,F);for(let yt=0;yt<q.length;yt++)Pt(q[yt],F);q.length===2?Rt(G,T,b):G.projectionMatrix.copy(T.projectionMatrix),te(nt,G,F)};function te(nt,gt,Ht){Ht===null?nt.matrix.copy(gt.matrixWorld):(nt.matrix.copy(Ht.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(gt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(gt.projectionMatrix),nt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=ls*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(nt){l=nt,p!==null&&(p.fixedFoveation=nt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=nt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(G)},this.getCameraTexture=function(nt){return f[nt]};let oe=null;function ue(nt,gt){if(h=gt.getViewerPose(c||o),g=gt,h!==null){let Ht=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let F=!1;Ht.length!==G.cameras.length&&(G.cameras.length=0,F=!0);for(let D=0;D<Ht.length;D++){let ht=Ht[D],ct=null;if(m!==null)ct=m.getViewport(ht);else{let lt=d.getViewSubImage(p,ht);ct=lt.viewport,D===0&&(t.setRenderTargetTextures(M,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(M))}let ot=N[D];ot===void 0&&(ot=new cn,ot.layers.enable(D),ot.viewport=new qe,N[D]=ot),ot.matrix.fromArray(ht.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(ht.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(ct.x,ct.y,ct.width,ct.height),D===0&&(G.matrix.copy(ot.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),F===!0&&G.cameras.push(ot)}let q=s.enabledFeatures;if(q&&q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let D=d.getDepthInformation(Ht[0]);D&&D.isValid&&D.texture&&_.init(D,s.renderState)}if(q&&q.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let D=0;D<Ht.length;D++){let ht=Ht[D].camera;if(ht){let ct=f[ht];ct||(ct=new Kr,f[ht]=ct);let ot=d.getCameraImage(ht);ct.sourceTexture=ot}}}}for(let Ht=0;Ht<P.length;Ht++){let F=I[Ht],q=P[Ht];F!==null&&q!==void 0&&q.update(F,gt,c||o)}oe&&oe(nt,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),g=null}let ae=new kd;ae.setAnimationLoop(ue),this.setAnimationLoop=function(nt){oe=nt},this.dispose=function(){}}},ys=new Sn,ox=new Ce;function ax(i,t){function e(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,qc(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,R,S,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(_,f):f.isMeshToonMaterial?(r(_,f),d(_,f)):f.isMeshPhongMaterial?(r(_,f),h(_,f)):f.isMeshStandardMaterial?(r(_,f),p(_,f),f.isMeshPhysicalMaterial&&m(_,f,M)):f.isMeshMatcapMaterial?(r(_,f),g(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),y(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(o(_,f),f.isLineDashedMaterial&&a(_,f)):f.isPointsMaterial?l(_,f,R,S):f.isSpriteMaterial?c(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,e(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===bn&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,e(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===bn&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,e(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,e(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);let R=t.get(f),S=R.envMap,M=R.envMapRotation;S&&(_.envMap.value=S,ys.copy(M),ys.x*=-1,ys.y*=-1,ys.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),_.envMapRotation.value.setFromMatrix4(ox.makeRotationFromEuler(ys)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,_.aoMapTransform))}function o(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform))}function a(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,R,S){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*R,_.scale.value=S*.5,f.map&&(_.map.value=f.map,e(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function h(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function d(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function p(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function m(_,f,R){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,f){f.matcap&&(_.matcap.value=f.matcap)}function y(_,f){let R=t.get(f).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,S){let M=S.program;n.uniformBlockBinding(R,M)}function c(R,S){let M=s[R.id];M===void 0&&(g(R),M=h(R),s[R.id]=M,R.addEventListener("dispose",_));let P=S.program;n.updateUBOMapping(R,P);let I=t.render.frame;r[R.id]!==I&&(p(R),r[R.id]=I)}function h(R){let S=d();R.__bindingPointIndex=S;let M=i.createBuffer(),P=R.__size,I=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){let S=s[R.id],M=R.uniforms,P=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let I=0,L=M.length;I<L;I++){let U=Array.isArray(M[I])?M[I]:[M[I]];for(let T=0,b=U.length;T<b;T++){let N=U[T];if(m(N,I,T,P)===!0){let G=N.__offset,K=Array.isArray(N.value)?N.value:[N.value],tt=0;for(let et=0;et<K.length;et++){let J=K[et],rt=y(J);typeof J=="number"||typeof J=="boolean"?(N.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,G+tt,N.__data)):J.isMatrix3?(N.__data[0]=J.elements[0],N.__data[1]=J.elements[1],N.__data[2]=J.elements[2],N.__data[3]=0,N.__data[4]=J.elements[3],N.__data[5]=J.elements[4],N.__data[6]=J.elements[5],N.__data[7]=0,N.__data[8]=J.elements[6],N.__data[9]=J.elements[7],N.__data[10]=J.elements[8],N.__data[11]=0):(J.toArray(N.__data,tt),tt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,S,M,P){let I=R.value,L=S+"_"+M;if(P[L]===void 0)return typeof I=="number"||typeof I=="boolean"?P[L]=I:P[L]=I.clone(),!0;{let U=P[L];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return P[L]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(R){let S=R.uniforms,M=0,P=16;for(let L=0,U=S.length;L<U;L++){let T=Array.isArray(S[L])?S[L]:[S[L]];for(let b=0,N=T.length;b<N;b++){let G=T[b],K=Array.isArray(G.value)?G.value:[G.value];for(let tt=0,et=K.length;tt<et;tt++){let J=K[tt],rt=y(J),X=M%P,_t=X%rt.boundary,Rt=X+_t;M+=_t,Rt!==0&&P-Rt<rt.storage&&(M+=P-Rt),G.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=rt.storage}}}let I=M%P;return I>0&&(M+=P-I),R.__size=M,R.__cache={},this}function y(R){let S={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(S.boundary=4,S.storage=4):R.isVector2?(S.boundary=8,S.storage=8):R.isVector3||R.isColor?(S.boundary=16,S.storage=12):R.isVector4?(S.boundary=16,S.storage=16):R.isMatrix3?(S.boundary=48,S.storage=48):R.isMatrix4?(S.boundary=64,S.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),S}function _(R){let S=R.target;S.removeEventListener("dispose",_);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Pl=class{constructor(t={}){let{canvas:e=ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),y=new Int32Array(4),_=null,f=null,R=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,P=!1;this._outputColorSpace=sn;let I=0,L=0,U=null,T=-1,b=null,N=new qe,G=new qe,K=null,tt=new ve(0),et=0,J=e.width,rt=e.height,X=1,_t=null,Rt=null,Pt=new qe(0,0,J,rt),te=new qe(0,0,J,rt),oe=!1,ue=new tr,ae=!1,nt=!1,gt=new Ce,Ht=new A,F=new qe,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function Vt(){return U===null?X:1}let D=n;function ht(w,z){return e.getContext(w,z)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),D===null){let z="webgl2";if(D=ht(z,w),D===null)throw ht(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ct,ot,lt,xt,ut,wt,ce,Kt,C,x,H,j,pt,st,Dt,Ct,Xt,Bt,mt,Lt,jt,Jt,Nt,de;function B(){ct=new T_(D),ct.init(),Jt=new ix(D,ct),ot=new y_(D,ct,t,Jt),lt=new ex(D,ct),ot.reversedDepthBuffer&&p&&lt.buffers.depth.setReversed(!0),xt=new C_(D),ut=new V0,wt=new nx(D,ct,lt,ut,ot,Jt,xt),ce=new M_(M),Kt=new w_(M),C=new Up(D),Nt=new __(D,C),x=new A_(D,C,xt,Nt),H=new P_(D,x,C,xt),mt=new I_(D,ot,wt),Ct=new v_(ut),j=new k0(M,ce,Kt,ct,ot,Nt,Ct),pt=new ax(M,ut),st=new W0,Dt=new J0(ct),Bt=new g_(M,ce,Kt,lt,H,m,l),Xt=new Q0(M,H,ot),de=new lx(D,xt,ot,lt),Lt=new x_(D,ct,xt),jt=new R_(D,ct,xt),xt.programs=j.programs,M.capabilities=ot,M.extensions=ct,M.properties=ut,M.renderLists=st,M.shadowMap=Xt,M.state=lt,M.info=xt}B();let Tt=new uh(M,D);this.xr=Tt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(J,rt,!1))},this.getSize=function(w){return w.set(J,rt)},this.setSize=function(w,z,$=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,rt=z,e.width=Math.floor(w*X),e.height=Math.floor(z*X),$===!0&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(J*X,rt*X).floor()},this.setDrawingBufferSize=function(w,z,$){J=w,rt=z,X=$,e.width=Math.floor(w*$),e.height=Math.floor(z*$),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(Pt)},this.setViewport=function(w,z,$,Q){w.isVector4?Pt.set(w.x,w.y,w.z,w.w):Pt.set(w,z,$,Q),lt.viewport(N.copy(Pt).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,z,$,Q){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,z,$,Q),lt.scissor(G.copy(te).multiplyScalar(X).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){lt.setScissorTest(oe=w)},this.setOpaqueSort=function(w){_t=w},this.setTransparentSort=function(w){Rt=w},this.getClearColor=function(w){return w.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,$=!0){let Q=0;if(w){let k=!1;if(U!==null){let vt=U.texture.format;k=vt===ja||vt===$a||vt===Ja}if(k){let vt=U.texture.type,Ut=vt===ni||vt===$i||vt===ar||vt===cr||vt===qa||vt===Za,Ft=Bt.getClearColor(),kt=Bt.getClearAlpha(),ie=Ft.r,se=Ft.g,Qt=Ft.b;Ut?(g[0]=ie,g[1]=se,g[2]=Qt,g[3]=kt,D.clearBufferuiv(D.COLOR,0,g)):(y[0]=ie,y[1]=se,y[2]=Qt,y[3]=kt,D.clearBufferiv(D.COLOR,0,y))}else Q|=D.COLOR_BUFFER_BIT}z&&(Q|=D.DEPTH_BUFFER_BIT),$&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Bt.dispose(),st.dispose(),Dt.dispose(),ut.dispose(),ce.dispose(),Kt.dispose(),H.dispose(),Nt.dispose(),de.dispose(),j.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",qt),Tt.removeEventListener("sessionend",In),ge.stop()};function It(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let w=xt.autoReset,z=Xt.enabled,$=Xt.autoUpdate,Q=Xt.needsUpdate,k=Xt.type;B(),xt.autoReset=w,Xt.enabled=z,Xt.autoUpdate=$,Xt.needsUpdate=Q,Xt.type=k}function Et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function dt(w){let z=w.target;z.removeEventListener("dispose",dt),Yt(z)}function Yt(w){ee(w),ut.remove(w)}function ee(w){let z=ut.get(w).programs;z!==void 0&&(z.forEach(function($){j.releaseProgram($)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,$,Q,k,vt){z===null&&(z=q);let Ut=k.isMesh&&k.matrixWorld.determinant()<0,Ft=mr(w,z,$,Q,k);lt.setMaterial(Q,Ut);let kt=$.index,ie=1;if(Q.wireframe===!0){if(kt=x.getWireframeAttribute($),kt===void 0)return;ie=2}let se=$.drawRange,Qt=$.attributes.position,fe=se.start*ie,ne=(se.start+se.count)*ie;vt!==null&&(fe=Math.max(fe,vt.start*ie),ne=Math.min(ne,(vt.start+vt.count)*ie)),kt!==null?(fe=Math.max(fe,0),ne=Math.min(ne,kt.count)):Qt!=null&&(fe=Math.max(fe,0),ne=Math.min(ne,Qt.count));let Zt=ne-fe;if(Zt<0||Zt===1/0)return;Nt.setup(k,Q,Ft,$,kt);let be,Se=Lt;if(kt!==null&&(be=C.get(kt),Se=jt,Se.setIndex(be)),k.isMesh)Q.wireframe===!0?(lt.setLineWidth(Q.wireframeLinewidth*Vt()),Se.setMode(D.LINES)):Se.setMode(D.TRIANGLES);else if(k.isLine){let Wt=Q.linewidth;Wt===void 0&&(Wt=1),lt.setLineWidth(Wt*Vt()),k.isLineSegments?Se.setMode(D.LINES):k.isLineLoop?Se.setMode(D.LINE_LOOP):Se.setMode(D.LINE_STRIP)}else k.isPoints?Se.setMode(D.POINTS):k.isSprite&&Se.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Wt=k._multiDrawStarts,He=k._multiDrawCounts,Ee=k._multiDrawCount,$e=kt?C.get(kt).bytesPerElement:1,xi=ut.get(Q).currentProgram.getUniforms();for(let on=0;on<Ee;on++)xi.setValue(D,"_gl_DrawID",on),Se.render(Wt[on]/$e,He[on])}else if(k.isInstancedMesh)Se.renderInstances(fe,Zt,k.count);else if($.isInstancedBufferGeometry){let Wt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,He=Math.min($.instanceCount,Wt);Se.renderInstances(fe,Zt,He)}else Se.render(fe,Zt)};function Pe(w,z,$){w.transparent===!0&&w.side===pn&&w.forceSinglePass===!1?(w.side=bn,w.needsUpdate=!0,Li(w,z,$),w.side=Ai,w.needsUpdate=!0,Li(w,z,$),w.side=pn):Li(w,z,$)}this.compile=function(w,z,$=null){$===null&&($=w),f=Dt.get($),f.init(z),S.push(f),$.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),w!==$&&w.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();let Q=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let vt=k.material;if(vt)if(Array.isArray(vt))for(let Ut=0;Ut<vt.length;Ut++){let Ft=vt[Ut];Pe(Ft,$,k),Q.add(Ft)}else Pe(vt,$,k),Q.add(vt)}),f=S.pop(),Q},this.compileAsync=function(w,z,$=null){let Q=this.compile(w,z,$);return new Promise(k=>{function vt(){if(Q.forEach(function(Ut){ut.get(Ut).currentProgram.isReady()&&Q.delete(Ut)}),Q.size===0){k(w);return}setTimeout(vt,10)}ct.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Re=null;function Un(w){Re&&Re(w)}function qt(){ge.stop()}function In(){ge.start()}let ge=new kd;ge.setAnimationLoop(Un),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(w){Re=w,Tt.setAnimationLoop(w),w===null?ge.stop():ge.start()},Tt.addEventListener("sessionstart",qt),Tt.addEventListener("sessionend",In),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(z),z=Tt.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,z,U),f=Dt.get(w,S.length),f.init(z),S.push(f),gt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ue.setFromProjectionMatrix(gt,$n,z.reversedDepth),nt=this.localClippingEnabled,ae=Ct.init(this.clippingPlanes,nt),_=st.get(w,R.length),_.init(),R.push(_),Tt.enabled===!0&&Tt.isPresenting===!0){let vt=M.xr.getDepthSensingMesh();vt!==null&&Mt(vt,z,-1/0,M.sortObjects)}Mt(w,z,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(_t,Rt),yt=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,yt&&Bt.addToRenderList(_,w),this.info.render.frame++,ae===!0&&Ct.beginShadows();let $=f.state.shadowsArray;Xt.render($,w,z),ae===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=_.opaque,k=_.transmissive;if(f.setupLights(),z.isArrayCamera){let vt=z.cameras;if(k.length>0)for(let Ut=0,Ft=vt.length;Ut<Ft;Ut++){let kt=vt[Ut];we(Q,k,w,kt)}yt&&Bt.render(w);for(let Ut=0,Ft=vt.length;Ut<Ft;Ut++){let kt=vt[Ut];Ue(_,w,kt,kt.viewport)}}else k.length>0&&we(Q,k,w,z),yt&&Bt.render(w),Ue(_,w,z);U!==null&&L===0&&(wt.updateMultisampleRenderTarget(U),wt.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(M,w,z),Nt.resetDefaultState(),T=-1,b=null,S.pop(),S.length>0?(f=S[S.length-1],ae===!0&&Ct.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function Mt(w,z,$,Q){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ue.intersectsSprite(w)){Q&&F.setFromMatrixPosition(w.matrixWorld).applyMatrix4(gt);let Ut=H.update(w),Ft=w.material;Ft.visible&&_.push(w,Ut,Ft,$,F.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ue.intersectsObject(w))){let Ut=H.update(w),Ft=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),F.copy(w.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),F.copy(Ut.boundingSphere.center)),F.applyMatrix4(w.matrixWorld).applyMatrix4(gt)),Array.isArray(Ft)){let kt=Ut.groups;for(let ie=0,se=kt.length;ie<se;ie++){let Qt=kt[ie],fe=Ft[Qt.materialIndex];fe&&fe.visible&&_.push(w,Ut,fe,$,F.z,Qt)}}else Ft.visible&&_.push(w,Ut,Ft,$,F.z,null)}}let vt=w.children;for(let Ut=0,Ft=vt.length;Ut<Ft;Ut++)Mt(vt[Ut],z,$,Q)}function Ue(w,z,$,Q){let k=w.opaque,vt=w.transmissive,Ut=w.transparent;f.setupLightsView($),ae===!0&&Ct.setGlobalState(M.clippingPlanes,$),Q&&lt.viewport(N.copy(Q)),k.length>0&&_e(k,z,$),vt.length>0&&_e(vt,z,$),Ut.length>0&&_e(Ut,z,$),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function we(w,z,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Q.id]===void 0&&(f.state.transmissionRenderTarget[Q.id]=new hi(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?lr:ni,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));let vt=f.state.transmissionRenderTarget[Q.id],Ut=Q.viewport||N;vt.setSize(Ut.z*M.transmissionResolutionScale,Ut.w*M.transmissionResolutionScale);let Ft=M.getRenderTarget(),kt=M.getActiveCubeFace(),ie=M.getActiveMipmapLevel();M.setRenderTarget(vt),M.getClearColor(tt),et=M.getClearAlpha(),et<1&&M.setClearColor(16777215,.5),M.clear(),yt&&Bt.render($);let se=M.toneMapping;M.toneMapping=Pi;let Qt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),f.setupLightsView(Q),ae===!0&&Ct.setGlobalState(M.clippingPlanes,Q),_e(w,$,Q),wt.updateMultisampleRenderTarget(vt),wt.updateRenderTargetMipmap(vt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let ne=0,Zt=z.length;ne<Zt;ne++){let be=z[ne],Se=be.object,Wt=be.geometry,He=be.material,Ee=be.group;if(He.side===pn&&Se.layers.test(Q.layers)){let $e=He.side;He.side=bn,He.needsUpdate=!0,Fn(Se,$,Q,Wt,He,Ee),He.side=$e,He.needsUpdate=!0,fe=!0}}fe===!0&&(wt.updateMultisampleRenderTarget(vt),wt.updateRenderTargetMipmap(vt))}M.setRenderTarget(Ft,kt,ie),M.setClearColor(tt,et),Qt!==void 0&&(Q.viewport=Qt),M.toneMapping=se}function _e(w,z,$){let Q=z.isScene===!0?z.overrideMaterial:null;for(let k=0,vt=w.length;k<vt;k++){let Ut=w[k],Ft=Ut.object,kt=Ut.geometry,ie=Ut.group,se=Ut.material;se.allowOverride===!0&&Q!==null&&(se=Q),Ft.layers.test($.layers)&&Fn(Ft,z,$,kt,se,ie)}}function Fn(w,z,$,Q,k,vt){w.onBeforeRender(M,z,$,Q,k,vt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(M,z,$,Q,w,vt),k.transparent===!0&&k.side===pn&&k.forceSinglePass===!1?(k.side=bn,k.needsUpdate=!0,M.renderBufferDirect($,z,Q,k,w,vt),k.side=Ai,k.needsUpdate=!0,M.renderBufferDirect($,z,Q,k,w,vt),k.side=pn):M.renderBufferDirect($,z,Q,k,w,vt),w.onAfterRender(M,z,$,Q,k,vt)}function Li(w,z,$){z.isScene!==!0&&(z=q);let Q=ut.get(w),k=f.state.lights,vt=f.state.shadowsArray,Ut=k.state.version,Ft=j.getParameters(w,k.state,vt,z,$),kt=j.getProgramCacheKey(Ft),ie=Q.programs;Q.environment=w.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(w.isMeshStandardMaterial?Kt:ce).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,ie===void 0&&(w.addEventListener("dispose",dt),ie=new Map,Q.programs=ie);let se=ie.get(kt);if(se!==void 0){if(Q.currentProgram===se&&Q.lightsStateVersion===Ut)return On(w,Ft),se}else Ft.uniforms=j.getUniforms(w),w.onBeforeCompile(Ft,M),se=j.acquireProgram(Ft,kt),ie.set(kt,se),Q.uniforms=Ft.uniforms;let Qt=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qt.clippingPlanes=Ct.uniform),On(w,Ft),Q.needsLights=bo(w),Q.lightsStateVersion=Ut,Q.needsLights&&(Qt.ambientLightColor.value=k.state.ambient,Qt.lightProbe.value=k.state.probe,Qt.directionalLights.value=k.state.directional,Qt.directionalLightShadows.value=k.state.directionalShadow,Qt.spotLights.value=k.state.spot,Qt.spotLightShadows.value=k.state.spotShadow,Qt.rectAreaLights.value=k.state.rectArea,Qt.ltc_1.value=k.state.rectAreaLTC1,Qt.ltc_2.value=k.state.rectAreaLTC2,Qt.pointLights.value=k.state.point,Qt.pointLightShadows.value=k.state.pointShadow,Qt.hemisphereLights.value=k.state.hemi,Qt.directionalShadowMap.value=k.state.directionalShadowMap,Qt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Qt.spotShadowMap.value=k.state.spotShadowMap,Qt.spotLightMatrix.value=k.state.spotLightMatrix,Qt.spotLightMap.value=k.state.spotLightMap,Qt.pointShadowMap.value=k.state.pointShadowMap,Qt.pointShadowMatrix.value=k.state.pointShadowMatrix),Q.currentProgram=se,Q.uniformsList=null,se}function bs(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=fr.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function On(w,z){let $=ut.get(w);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function mr(w,z,$,Q,k){z.isScene!==!0&&(z=q),wt.resetTextureUnits();let vt=z.fog,Ut=Q.isMeshStandardMaterial?z.environment:null,Ft=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:as,kt=(Q.isMeshStandardMaterial?Kt:ce).get(Q.envMap||Ut),ie=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,se=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Qt=!!$.morphAttributes.position,fe=!!$.morphAttributes.normal,ne=!!$.morphAttributes.color,Zt=Pi;Q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Zt=M.toneMapping);let be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Se=be!==void 0?be.length:0,Wt=ut.get(Q),He=f.state.lights;if(ae===!0&&(nt===!0||w!==b)){let en=w===b&&Q.id===T;Ct.setState(Q,w,en)}let Ee=!1;Q.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==He.state.version||Wt.outputColorSpace!==Ft||k.isBatchedMesh&&Wt.batching===!1||!k.isBatchedMesh&&Wt.batching===!0||k.isBatchedMesh&&Wt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Wt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Wt.instancing===!1||!k.isInstancedMesh&&Wt.instancing===!0||k.isSkinnedMesh&&Wt.skinning===!1||!k.isSkinnedMesh&&Wt.skinning===!0||k.isInstancedMesh&&Wt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Wt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Wt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Wt.instancingMorph===!1&&k.morphTexture!==null||Wt.envMap!==kt||Q.fog===!0&&Wt.fog!==vt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Ct.numPlanes||Wt.numIntersection!==Ct.numIntersection)||Wt.vertexAlphas!==ie||Wt.vertexTangents!==se||Wt.morphTargets!==Qt||Wt.morphNormals!==fe||Wt.morphColors!==ne||Wt.toneMapping!==Zt||Wt.morphTargetsCount!==Se)&&(Ee=!0):(Ee=!0,Wt.__version=Q.version);let $e=Wt.currentProgram;Ee===!0&&($e=Li(Q,z,k));let xi=!1,on=!1,Ni=!1,Be=$e.getUniforms(),_n=Wt.uniforms;if(lt.useProgram($e.program)&&(xi=!0,on=!0,Ni=!0),Q.id!==T&&(T=Q.id,on=!0),xi||b!==w){lt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Be.setValue(D,"projectionMatrix",w.projectionMatrix),Be.setValue(D,"viewMatrix",w.matrixWorldInverse);let an=Be.map.cameraPosition;an!==void 0&&an.setValue(D,Ht.setFromMatrixPosition(w.matrixWorld)),ot.logarithmicDepthBuffer&&Be.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Be.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,on=!0,Ni=!0)}if(k.isSkinnedMesh){Be.setOptional(D,k,"bindMatrix"),Be.setOptional(D,k,"bindMatrixInverse");let en=k.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Be.setValue(D,"boneTexture",en.boneTexture,wt))}k.isBatchedMesh&&(Be.setOptional(D,k,"batchingTexture"),Be.setValue(D,"batchingTexture",k._matricesTexture,wt),Be.setOptional(D,k,"batchingIdTexture"),Be.setValue(D,"batchingIdTexture",k._indirectTexture,wt),Be.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Be.setValue(D,"batchingColorTexture",k._colorsTexture,wt));let xn=$.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&mt.update(k,$,$e),(on||Wt.receiveShadow!==k.receiveShadow)&&(Wt.receiveShadow=k.receiveShadow,Be.setValue(D,"receiveShadow",k.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(_n.envMap.value=kt,_n.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&z.environment!==null&&(_n.envMapIntensity.value=z.environmentIntensity),on&&(Be.setValue(D,"toneMappingExposure",M.toneMappingExposure),Wt.needsLights&&gr(_n,Ni),vt&&Q.fog===!0&&pt.refreshFogUniforms(_n,vt),pt.refreshMaterialUniforms(_n,Q,X,rt,f.state.transmissionRenderTarget[w.id]),fr.upload(D,bs(Wt),_n,wt)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(fr.upload(D,bs(Wt),_n,wt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Be.setValue(D,"center",k.center),Be.setValue(D,"modelViewMatrix",k.modelViewMatrix),Be.setValue(D,"normalMatrix",k.normalMatrix),Be.setValue(D,"modelMatrix",k.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let en=Q.uniformsGroups;for(let an=0,Ts=en.length;an<Ts;an++){let ri=en[an];de.update(ri,$e),de.bind(ri,$e)}}return $e}function gr(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function bo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,z,$){let Q=ut.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ut.get(w.texture).__webglTexture=z,ut.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:$,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){let $=ut.get(w);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0};let ws=D.createFramebuffer();this.setRenderTarget=function(w,z=0,$=0){U=w,I=z,L=$;let Q=!0,k=null,vt=!1,Ut=!1;if(w){let kt=ut.get(w);if(kt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(D.FRAMEBUFFER,null),Q=!1;else if(kt.__webglFramebuffer===void 0)wt.setupRenderTarget(w);else if(kt.__hasExternalTextures)wt.rebindTextures(w,ut.get(w.texture).__webglTexture,ut.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Qt=w.depthTexture;if(kt.__boundDepthTexture!==Qt){if(Qt!==null&&ut.has(Qt)&&(w.width!==Qt.image.width||w.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");wt.setupDepthRenderbuffer(w)}}let ie=w.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ut=!0);let se=ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(se[z])?k=se[z][$]:k=se[z],vt=!0):w.samples>0&&wt.useMultisampledRTT(w)===!1?k=ut.get(w).__webglMultisampledFramebuffer:Array.isArray(se)?k=se[$]:k=se,N.copy(w.viewport),G.copy(w.scissor),K=w.scissorTest}else N.copy(Pt).multiplyScalar(X).floor(),G.copy(te).multiplyScalar(X).floor(),K=oe;if($!==0&&(k=ws),lt.bindFramebuffer(D.FRAMEBUFFER,k)&&Q&&lt.drawBuffers(w,k),lt.viewport(N),lt.scissor(G),lt.setScissorTest(K),vt){let kt=ut.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,kt.__webglTexture,$)}else if(Ut){let kt=z;for(let ie=0;ie<w.textures.length;ie++){let se=ut.get(w.textures[ie]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ie,se.__webglTexture,$,kt)}}else if(w!==null&&$!==0){let kt=ut.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kt.__webglTexture,$)}T=-1},this.readRenderTargetPixels=function(w,z,$,Q,k,vt,Ut,Ft=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(kt=kt[Ut]),kt){lt.bindFramebuffer(D.FRAMEBUFFER,kt);try{let ie=w.textures[Ft],se=ie.format,Qt=ie.type;if(!ot.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-Q&&$>=0&&$<=w.height-k&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ft),D.readPixels(z,$,Q,k,Jt.convert(se),Jt.convert(Qt),vt))}finally{let ie=U!==null?ut.get(U).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(w,z,$,Q,k,vt,Ut,Ft=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(kt=kt[Ut]),kt)if(z>=0&&z<=w.width-Q&&$>=0&&$<=w.height-k){lt.bindFramebuffer(D.FRAMEBUFFER,kt);let ie=w.textures[Ft],se=ie.format,Qt=ie.type;if(!ot.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,fe),D.bufferData(D.PIXEL_PACK_BUFFER,vt.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ft),D.readPixels(z,$,Q,k,Jt.convert(se),Jt.convert(Qt),0);let ne=U!==null?ut.get(U).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,ne);let Zt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await cd(D,Zt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,fe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,vt),D.deleteBuffer(fe),D.deleteSync(Zt),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,$=0){let Q=Math.pow(2,-$),k=Math.floor(w.image.width*Q),vt=Math.floor(w.image.height*Q),Ut=z!==null?z.x:0,Ft=z!==null?z.y:0;wt.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Ut,Ft,k,vt),lt.unbindTexture()};let Gn=D.createFramebuffer(),Wn=D.createFramebuffer();this.copyTextureToTexture=function(w,z,$=null,Q=null,k=0,vt=null){vt===null&&(k!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=k,k=0):vt=0);let Ut,Ft,kt,ie,se,Qt,fe,ne,Zt,be=w.isCompressedTexture?w.mipmaps[vt]:w.image;if($!==null)Ut=$.max.x-$.min.x,Ft=$.max.y-$.min.y,kt=$.isBox3?$.max.z-$.min.z:1,ie=$.min.x,se=$.min.y,Qt=$.isBox3?$.min.z:0;else{let xn=Math.pow(2,-k);Ut=Math.floor(be.width*xn),Ft=Math.floor(be.height*xn),w.isDataArrayTexture?kt=be.depth:w.isData3DTexture?kt=Math.floor(be.depth*xn):kt=1,ie=0,se=0,Qt=0}Q!==null?(fe=Q.x,ne=Q.y,Zt=Q.z):(fe=0,ne=0,Zt=0);let Se=Jt.convert(z.format),Wt=Jt.convert(z.type),He;z.isData3DTexture?(wt.setTexture3D(z,0),He=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(wt.setTexture2DArray(z,0),He=D.TEXTURE_2D_ARRAY):(wt.setTexture2D(z,0),He=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let Ee=D.getParameter(D.UNPACK_ROW_LENGTH),$e=D.getParameter(D.UNPACK_IMAGE_HEIGHT),xi=D.getParameter(D.UNPACK_SKIP_PIXELS),on=D.getParameter(D.UNPACK_SKIP_ROWS),Ni=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,be.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ie),D.pixelStorei(D.UNPACK_SKIP_ROWS,se),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qt);let Be=w.isDataArrayTexture||w.isData3DTexture,_n=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){let xn=ut.get(w),en=ut.get(z),an=ut.get(xn.__renderTarget),Ts=ut.get(en.__renderTarget);lt.bindFramebuffer(D.READ_FRAMEBUFFER,an.__webglFramebuffer),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let ri=0;ri<kt;ri++)Be&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.get(w).__webglTexture,k,Qt+ri),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.get(z).__webglTexture,vt,Zt+ri)),D.blitFramebuffer(ie,se,Ut,Ft,fe,ne,Ut,Ft,D.DEPTH_BUFFER_BIT,D.NEAREST);lt.bindFramebuffer(D.READ_FRAMEBUFFER,null),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||ut.has(w)){let xn=ut.get(w),en=ut.get(z);lt.bindFramebuffer(D.READ_FRAMEBUFFER,Gn),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wn);for(let an=0;an<kt;an++)Be?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xn.__webglTexture,k,Qt+an):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xn.__webglTexture,k),_n?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,en.__webglTexture,vt,Zt+an):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,en.__webglTexture,vt),k!==0?D.blitFramebuffer(ie,se,Ut,Ft,fe,ne,Ut,Ft,D.COLOR_BUFFER_BIT,D.NEAREST):_n?D.copyTexSubImage3D(He,vt,fe,ne,Zt+an,ie,se,Ut,Ft):D.copyTexSubImage2D(He,vt,fe,ne,ie,se,Ut,Ft);lt.bindFramebuffer(D.READ_FRAMEBUFFER,null),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _n?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(He,vt,fe,ne,Zt,Ut,Ft,kt,Se,Wt,be.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(He,vt,fe,ne,Zt,Ut,Ft,kt,Se,be.data):D.texSubImage3D(He,vt,fe,ne,Zt,Ut,Ft,kt,Se,Wt,be):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,vt,fe,ne,Ut,Ft,Se,Wt,be.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,vt,fe,ne,be.width,be.height,Se,be.data):D.texSubImage2D(D.TEXTURE_2D,vt,fe,ne,Ut,Ft,Se,Wt,be);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$e),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xi),D.pixelStorei(D.UNPACK_SKIP_ROWS,on),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ni),vt===0&&z.generateMipmaps&&D.generateMipmap(He),lt.unbindTexture()},this.initRenderTarget=function(w){ut.get(w).__webglFramebuffer===void 0&&wt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?wt.setTextureCube(w,0):w.isData3DTexture?wt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?wt.setTexture2DArray(w,0):wt.setTexture2D(w,0),lt.unbindTexture()},this.resetState=function(){I=0,L=0,U=null,lt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}};var qd={type:"change"},mh={type:"start"},Kd={type:"end"},Ll=new Xi,Zd=new rn,cx=Math.cos(70*si.DEG2RAD),tn=new A,Cn=2*Math.PI,Ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ph=1e-6,Nl=class extends ps{constructor(t,e=null){super(t,e),this.state=Ne.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:En.ROTATE,MIDDLE:En.DOLLY,RIGHT:En.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Ye,this._lastTargetPosition=new A,this._quat=new Ye().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new or,this._sphericalDelta=new or,this._scale=1,this._panOffset=new A,this._rotateStart=new ft,this._rotateEnd=new ft,this._rotateDelta=new ft,this._panStart=new ft,this._panEnd=new ft,this._panDelta=new ft,this._dollyStart=new ft,this._dollyEnd=new ft,this._dollyDelta=new ft,this._dollyDirection=new A,this._mouse=new ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ux.bind(this),this._onPointerDown=hx.bind(this),this._onPointerUp=dx.bind(this),this._onContextMenu=yx.bind(this),this._onMouseWheel=mx.bind(this),this._onKeyDown=gx.bind(this),this._onTouchStart=_x.bind(this),this._onTouchMove=xx.bind(this),this._onMouseDown=fx.bind(this),this._onMouseMove=px.bind(this),this._interceptControlDown=vx.bind(this),this._interceptControlUp=Mx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qd),this.update(),this.state=Ne.NONE}update(t=null){let e=this.object.position;tn.copy(e).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Cn:n>Math.PI&&(n-=Cn),s<-Math.PI?s+=Cn:s>Math.PI&&(s-=Cn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),e.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=tn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ll.origin.copy(this.object.position),Ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ll.direction))<cx?this.object.lookAt(this.target):(Zd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ll.intersectPlane(Zd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ph||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ph||this._lastTargetPosition.distanceToSquared(this.target)>ph?(this.dispatchEvent(qd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Cn/60*this.autoRotateSpeed*t:Cn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){tn.setFromMatrixColumn(e,0),tn.multiplyScalar(-t),this._panOffset.add(tn)}_panUp(t,e){this.screenSpacePanning===!0?tn.setFromMatrixColumn(e,1):(tn.setFromMatrixColumn(e,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(t),this._panOffset.add(tn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;tn.copy(s).sub(this.target);let r=tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function hx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ux(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function dx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kd),this.state=Ne.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function fx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case En.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ne.DOLLY;break;case En.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ne.ROTATE}break;case En.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ne.PAN}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(mh)}function px(i){switch(this.state){case Ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function mx(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ne.NONE||(i.preventDefault(),this.dispatchEvent(mh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Kd))}function gx(i){this.enabled!==!1&&this._handleKeyDown(i)}function _x(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ne.TOUCH_ROTATE;break;case ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ne.TOUCH_PAN;break;default:this.state=Ne.NONE}break;case 2:switch(this.touches.TWO){case ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ne.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ne.TOUCH_DOLLY_ROTATE;break;default:this.state=Ne.NONE}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(mh)}function xx(i){switch(this._trackPointer(i),this.state){case Ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ne.NONE}}function yx(i){this.enabled!==!1&&i.preventDefault()}function vx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ss=new pi,gn=new A,ji=new A,We=new Ye,Jd={X:new A(1,0,0),Y:new A(0,1,0),Z:new A(0,0,1)},gh={type:"change"},$d={type:"mouseDown",mode:null},jd={type:"mouseUp",mode:null},Qd={type:"objectChange"},zl=class extends ps{constructor(t,e=null){super(void 0,e);let n=new xh(this);this._root=n;let s=new yh;this._gizmo=s,n.add(s);let r=new vh;this._plane=r,n.add(r);let o=this;function a(S,M){let P=M;Object.defineProperty(o,S,{get:function(){return P!==void 0?P:M},set:function(I){P!==I&&(P=I,r[S]=I,s[S]=I,o.dispatchEvent({type:S+"-changed",value:I}),o.dispatchEvent(gh))}}),o[S]=M,r[S]=M,s[S]=M}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new A,c=new A,h=new Ye,d=new Ye,p=new A,m=new Ye,g=new A,y=new A,_=new A,f=0,R=new A;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",d),a("cameraPosition",p),a("cameraQuaternion",m),a("pointStart",g),a("pointEnd",y),a("rotationAxis",_),a("rotationAngle",f),a("eye",R),this._offset=new A,this._startNorm=new A,this._endNorm=new A,this._cameraScale=new A,this._parentPosition=new A,this._parentQuaternion=new Ye,this._parentQuaternionInv=new Ye,this._parentScale=new A,this._worldScaleStart=new A,this._worldQuaternionInv=new Ye,this._worldScale=new A,this._positionStart=new A,this._quaternionStart=new Ye,this._scaleStart=new A,this._getPointer=Sx.bind(this),this._onPointerDown=bx.bind(this),this._onPointerHover=Ex.bind(this),this._onPointerMove=wx.bind(this),this._onPointerUp=Tx.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Ss.setFromCamera(t,this.camera);let e=_h(this._gizmo.picker[this.mode],Ss);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Ss.setFromCamera(t,this.camera);let e=_h(this._plane,Ss,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,$d.mode=this.mode,this.dispatchEvent($d)}}pointerMove(t){let e=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Ss.setFromCamera(t,this.camera);let o=_h(this._plane,Ss,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(We.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(gn.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(gn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ji.set(a,a,a)}else gn.copy(this.pointStart),ji.copy(this.pointEnd),gn.applyQuaternion(this._worldQuaternionInv),ji.applyQuaternion(this._worldQuaternionInv),ji.divide(gn),e.search("X")===-1&&(ji.x=1),e.search("Y")===-1&&(ji.y=1),e.search("Z")===-1&&(ji.z=1);s.scale.copy(this._scaleStart).multiply(ji),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(gn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(gn.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Jd[e]),gn.copy(Jd[e]),r==="local"&&gn.applyQuaternion(this.worldQuaternion),gn.cross(this.eye),gn.length()===0?l=!0:this.rotationAngle=this._offset.dot(gn.normalize())*a),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(We.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(We.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(gh),this.dispatchEvent(Qd)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(jd.mode=this.mode,this.dispatchEvent(jd)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(gh),this.dispatchEvent(Qd),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ss}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function Sx(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function Ex(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function bx(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function wx(i){this.enabled&&this.pointerMove(this._getPointer(i))}function Tx(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function _h(i,t,e){let n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}var Ul=new Sn,Oe=new A(0,1,0),tf=new A(0,0,0),ef=new Ce,Fl=new Ye,Bl=new Ye,_i=new A,nf=new Ce,So=new A(1,0,0),Es=new A(0,1,0),Eo=new A(0,0,1),Ol=new A,vo=new A,Mo=new A,xh=class extends ze{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){let e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}},yh=class extends ze{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let t=new fn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new Hn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;let s=e.clone();s.opacity=.5;let r=t.clone();r.color.setHex(16711680);let o=t.clone();o.color.setHex(65280);let a=t.clone();a.color.setHex(255);let l=t.clone();l.color.setHex(16711680),l.opacity=.5;let c=t.clone();c.color.setHex(65280),c.opacity=.5;let h=t.clone();h.color.setHex(255),h.opacity=.5;let d=t.clone();d.opacity=.25;let p=t.clone();p.color.setHex(16776960),p.opacity=.25;let m=t.clone();m.color.setHex(16776960);let g=t.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:m,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:p};let y=new Ke(0,.04,.1,12);y.translate(0,.05,0);let _=new Ie(.08,.08,.08);_.translate(0,.04,0);let f=new Te;f.setAttribute("position",new Me([0,0,0,1,0,0],3));let R=new Ke(.0075,.0075,.5,3);R.translate(0,.25,0);function S(et,J){let rt=new Ci(et,.0075,3,64,J*Math.PI*2);return rt.rotateY(Math.PI/2),rt.rotateX(Math.PI/2),rt}function M(){let et=new Te;return et.setAttribute("position",new Me([0,0,0,1,1,1],3)),et}let P={X:[[new bt(y,r),[.5,0,0],[0,0,-Math.PI/2]],[new bt(y,r),[-.5,0,0],[0,0,Math.PI/2]],[new bt(R,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new bt(y,o),[0,.5,0]],[new bt(y,o),[0,-.5,0],[Math.PI,0,0]],[new bt(R,o)]],Z:[[new bt(y,a),[0,0,.5],[Math.PI/2,0,0]],[new bt(y,a),[0,0,-.5],[-Math.PI/2,0,0]],[new bt(R,a),null,[Math.PI/2,0,0]]],XYZ:[[new bt(new fi(.1,0),d),[0,0,0]]],XY:[[new bt(new Ie(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new bt(new Ie(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new bt(new Ie(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},I={X:[[new bt(new Ke(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new bt(new Ke(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new bt(new Ke(.2,0,.6,4),n),[0,.3,0]],[new bt(new Ke(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new bt(new Ke(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new bt(new Ke(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new bt(new fi(.2,0),n)]],XY:[[new bt(new Ie(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new bt(new Ie(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new bt(new Ie(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},L={START:[[new bt(new fi(.01,2),s),null,null,null,"helper"]],END:[[new bt(new fi(.01,2),s),null,null,null,"helper"]],DELTA:[[new Ze(M(),s),null,null,null,"helper"]],X:[[new Ze(f,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ze(f,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ze(f,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},U={XYZE:[[new bt(S(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new bt(S(.5,.5),r)]],Y:[[new bt(S(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new bt(S(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new bt(S(.75,1),p),null,[0,Math.PI/2,0]]]},T={AXIS:[[new Ze(f,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new bt(new ti(.25,10,8),n)]],X:[[new bt(new Ci(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new bt(new Ci(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new bt(new Ci(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new bt(new Ci(.75,.1,2,24),n)]]},N={X:[[new bt(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new bt(R,r),[0,0,0],[0,0,-Math.PI/2]],[new bt(_,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new bt(_,o),[0,.5,0]],[new bt(R,o)],[new bt(_,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new bt(_,a),[0,0,.5],[Math.PI/2,0,0]],[new bt(R,a),[0,0,0],[Math.PI/2,0,0]],[new bt(_,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new bt(new Ie(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new bt(new Ie(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new bt(new Ie(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new bt(new Ie(.1,.1,.1),d)]]},G={X:[[new bt(new Ke(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new bt(new Ke(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new bt(new Ke(.2,0,.6,4),n),[0,.3,0]],[new bt(new Ke(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new bt(new Ke(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new bt(new Ke(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new bt(new Ie(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new bt(new Ie(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new bt(new Ie(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new bt(new Ie(.2,.2,.2),n),[0,0,0]]]},K={X:[[new Ze(f,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ze(f,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ze(f,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function tt(et){let J=new ze;for(let rt in et)for(let X=et[rt].length;X--;){let _t=et[rt][X][0].clone(),Rt=et[rt][X][1],Pt=et[rt][X][2],te=et[rt][X][3],oe=et[rt][X][4];_t.name=rt,_t.tag=oe,Rt&&_t.position.set(Rt[0],Rt[1],Rt[2]),Pt&&_t.rotation.set(Pt[0],Pt[1],Pt[2]),te&&_t.scale.set(te[0],te[1],te[2]),_t.updateMatrix();let ue=_t.geometry.clone();ue.applyMatrix4(_t.matrix),_t.geometry=ue,_t.renderOrder=1/0,_t.position.set(0,0,0),_t.rotation.set(0,0,0),_t.scale.set(1,1,1),J.add(_t)}return J}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=tt(P)),this.add(this.gizmo.rotate=tt(U)),this.add(this.gizmo.scale=tt(N)),this.add(this.picker.translate=tt(I)),this.add(this.picker.rotate=tt(b)),this.add(this.picker.scale=tt(G)),this.add(this.helper.translate=tt(L)),this.add(this.helper.rotate=tt(T)),this.add(this.helper.scale=tt(K)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Bl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(We.setFromEuler(Ul.set(0,0,0)),o.quaternion.copy(n).multiply(We),Math.abs(Oe.copy(So).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(We.setFromEuler(Ul.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(We),Math.abs(Oe.copy(Es).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(We.setFromEuler(Ul.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(We),Math.abs(Oe.copy(Eo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(We.setFromEuler(Ul.set(0,Math.PI/2,0)),Oe.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(ef.lookAt(tf,Oe,Es)),o.quaternion.multiply(We),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),gn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),gn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(gn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Oe.copy(So).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Oe.copy(Es).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Oe.copy(Eo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Oe.copy(Eo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Oe.copy(So).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Oe.copy(Es).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Fl.copy(n),Oe.copy(this.eye).applyQuaternion(We.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(ef.lookAt(this.eye,tf,Es)),o.name==="X"&&(We.setFromAxisAngle(So,Math.atan2(-Oe.y,Oe.z)),We.multiplyQuaternions(Fl,We),o.quaternion.copy(We)),o.name==="Y"&&(We.setFromAxisAngle(Es,Math.atan2(Oe.x,Oe.z)),We.multiplyQuaternions(Fl,We),o.quaternion.copy(We)),o.name==="Z"&&(We.setFromAxisAngle(Eo,Math.atan2(Oe.y,Oe.x)),We.multiplyQuaternions(Fl,We),o.quaternion.copy(We))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}},vh=class extends bt{constructor(){super(new kn(1e5,1e5,2,2),new fn({visible:!1,wireframe:!0,side:pn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Ol.copy(So).applyQuaternion(e==="local"?this.worldQuaternion:Bl),vo.copy(Es).applyQuaternion(e==="local"?this.worldQuaternion:Bl),Mo.copy(Eo).applyQuaternion(e==="local"?this.worldQuaternion:Bl),Oe.copy(vo),this.mode){case"translate":case"scale":switch(this.axis){case"X":Oe.copy(this.eye).cross(Ol),_i.copy(Ol).cross(Oe);break;case"Y":Oe.copy(this.eye).cross(vo),_i.copy(vo).cross(Oe);break;case"Z":Oe.copy(this.eye).cross(Mo),_i.copy(Mo).cross(Oe);break;case"XY":_i.copy(Mo);break;case"YZ":_i.copy(Ol);break;case"XZ":Oe.copy(Mo),_i.copy(vo);break;case"XYZ":case"E":_i.set(0,0,0);break}break;case"rotate":default:_i.set(0,0,0)}_i.length()===0?this.quaternion.copy(this.cameraQuaternion):(nf.lookAt(gn.set(0,0,0),_i,Oe),this.quaternion.setFromRotationMatrix(nf)),super.updateMatrixWorld(t)}};function sf({scene:i,camera:t,renderer:e,controls:n,groups:s,data:r,surfaceHit:o,enabled:a,canNavigate:l=()=>!0,onSelect:c,onEdit:h}){let d=e.domElement,p=[],m=new Map,g=new pi,y=new ft,_={cube:new Ie(1,1,1),cylinder:new Ke(.5,.5,1,32),sphere:new ti(.5,32,16),hemisphere:new ti(.5,32,16,0,Math.PI*2,0,Math.PI/2)};_.hemisphere.scale(1,2,1),_.hemisphere.translate(0,-.5,0);let f=new Jr(.5,32);f.rotateX(Math.PI/2),f.translate(0,-.5,0);let R=[];for(let F of r.levels)for(let q of F.primitives||[]){let yt=new Tn,Vt=new ds({color:q.color||"#d6a46b",roughness:.8,side:pn});R.push(Vt),yt.userData={primitive:q.id,level:F.id,record:JSON.parse(JSON.stringify(q)),floorZ:F.z},yt.add(new bt(_[q.primitive],Vt)),q.primitive==="hemisphere"&&yt.add(new bt(f,Vt)),b(yt,q),s.get(F.id).add(yt),p.push(yt),m.set(F.id+"\0"+q.id,yt)}let S=new zl(t,d);S.disconnect(),d.style.touchAction="none",S.setSize(.8),S.setSpace("world");let M=S.getHelper();i.add(M);let P=null,I=null,L=null,U=!1,T=null;function b(F,q){F.position.set(q.x+q.w/2,F.userData.floorZ+q.z+q.height/2,q.y+q.h/2),F.scale.set(q.w,q.height,q.h),F.rotation.set(q.tiltX*Math.PI/180,-q.rotation*Math.PI/180,q.tiltY*Math.PI/180,"XYZ"),F.updateMatrixWorld(!0)}let N=F=>s.get(F.userData.level)?.visible&&window.KERN_LAYERS?.shown?.("primitives",F.userData.primitive,F.userData.level)!==!1,G=F=>N(F)&&window.KERN_LAYERS?.available?.("primitives",F.userData.primitive,F.userData.level)!==!1;function K(){if(U)return;for(let q of p)q.visible=window.KERN_LAYERS?.shown?.("primitives",q.userData.primitive,q.userData.level)!==!1;let F=!!P&&a()&&G(P);S.enabled=F,M.visible=F,!F&&I&&nt()}function tt(F){nt();let q=(F||[]).filter(yt=>yt.kind==="primitives").map(yt=>m.get(yt.floor+"\0"+yt.id)).filter(Boolean);P=q.length===1&&F.length===1?q[0]:null,P?S.attach(P):S.detach(),S.setMode(window.KERN_PRIMITIVE_UI?.mode()||"translate"),S.setSpace(S.mode==="scale"?"local":"world"),J(),K()}function et(){let F=Number(window.snapSize?.());return Number.isFinite(F)&&F>0?F:null}function J(F={}){let q=P?.userData.record.wall===!0;S.setTranslationSnap(q?.25:null),S.setScaleSnap(q?.25:F.ctrlKey?null:et()),S.setRotationSnap(F.shiftKey&&!F.ctrlKey?Math.PI/36:q?Math.PI/180:null),S.showX=S.showZ=!(q&&S.mode==="rotate"),S.showY=!0}function rt(F,q){T&&(T.removeFromParent(),T.geometry.dispose(),T.material.dispose(),T=null),!(!F||!s.has(q))&&(T=new bt(new Ie(1,1,1),new fn({color:"#72d8b0",transparent:!0,opacity:.4,depthWrite:!1})),T.userData.floorZ=r.levels.find(yt=>yt.id===q).z,b(T,F),s.get(q).add(T))}function X(F){let q=d.getBoundingClientRect();return{x:(F.clientX-q.left)/Math.max(1,q.width)*2-1,y:-(F.clientY-q.top)/Math.max(1,q.height)*2+1,button:F.button??0}}function _t(F){let q=X(F);return y.set(q.x,q.y),i.updateMatrixWorld(!0),t.updateMatrixWorld(!0),g.setFromCamera(y,t),g.intersectObjects(p.filter(N),!0).map(yt=>{let Vt=yt.object;for(;Vt&&!Vt.userData.primitive;)Vt=Vt.parent;return{...yt,root:Vt}}).filter(yt=>yt.root)}function Rt(F){let q=_t(F)[0];if(!q)return null;let yt=o(F);return yt&&yt.point.distanceTo(t.position)+.002<q.distance?null:q}function Pt(F){F.preventDefault(),F.stopImmediatePropagation()}function te(F){if(U)return!1;if(I||L)return Pt(F),!0;if(!a()||F.altKey||F.button!==0)return!1;if(K(),P&&S.enabled&&(!F.shiftKey||S.mode==="rotate")&&(J(F),i.updateMatrixWorld(!0),S.pointerHover(X(F)),S.axis)){let yt=JSON.parse(JSON.stringify(P.userData.record));if(S.pointerDown(X(F)),S.dragging)return I={id:F.pointerId,root:P,original:yt,position:P.position.clone()},n.enabled=!1,d.setPointerCapture?.(F.pointerId),Pt(F),!0}let q=Rt(F);return q?(L={id:F.pointerId,x:F.clientX,y:F.clientY,root:q.root,shift:F.shiftKey},d.setPointerCapture?.(F.pointerId),Pt(F),!0):!1}function oe(F){if(U)return!1;if(K(),I&&F.pointerId===I.id){J(F),S.pointerMove({...X(F),button:-1});let q=!I.original.wall&&!F.ctrlKey&&S.mode==="translate"&&et();if(q){let yt=I.root,Vt=I.position;for(let D of["x","y","z"])yt.position[D]=Vt[D]+Math.round((yt.position[D]-Vt[D])/q)*q;yt.updateMatrixWorld(!0)}return Pt(F),!0}return L&&F.pointerId===L.id?(Pt(F),!0):(P&&S.enabled&&!F.altKey&&!F.buttons&&(i.updateMatrixWorld(!0),S.pointerHover(X(F))),!1)}function ue(F){d.hasPointerCapture?.(F)&&d.releasePointerCapture(F)}function ae(F){if(I&&F.pointerId===I.id){let q=I;I=null,S.pointerUp({button:0}),n.enabled=l(),ue(F.pointerId);let yt=q.root,Vt=ht=>Math.round(ht*1e6)/1e6,D={x:Vt(yt.position.x-yt.scale.x/2),y:Vt(yt.position.z-yt.scale.z/2),z:Vt(yt.position.y-yt.userData.floorZ-yt.scale.y/2),w:Vt(yt.scale.x),h:Vt(yt.scale.z),height:Vt(yt.scale.y),rotation:Vt(yt.userData.record.wall?(()=>{let ht=new A(1,0,0).applyQuaternion(yt.quaternion),ct=Math.atan2(ht.z,ht.x)*180/Math.PI;return[ct-360,ct,ct+360].filter(ot=>ot>=-360&&ot<=360).sort((ot,lt)=>Math.abs(ot-q.original.rotation)-Math.abs(lt-q.original.rotation))[0]})():-yt.rotation.y*180/Math.PI),tiltX:yt.userData.record.wall?0:Vt(yt.rotation.x*180/Math.PI),tiltY:yt.userData.record.wall?0:Vt(yt.rotation.z*180/Math.PI)};return Pt(F),Object.entries(D).some(([ht,ct])=>Math.abs(ct-q.original[ht])>1e-6)?h(yt.userData.level,yt.userData.primitive,D,q.original)===!1&&b(yt,q.original):b(yt,q.original),!0}if(L&&F.pointerId===L.id){let q=L;return L=null,ue(F.pointerId),Pt(F),Math.hypot(F.clientX-q.x,F.clientY-q.y)<=5&&c(q.root.userData.level,q.root.userData.primitive,q.shift),!0}return!1}function nt(F){if(F!=null&&(I?.id??L?.id)!==F)return!1;let q=I,yt=L;return I=null,L=null,q&&(b(q.root,q.original),S.pointerUp({button:0}),n.enabled=l(),ue(q.id)),yt&&ue(yt.id),!!(q||yt)}function gt(F,q,{floorPlane:yt=!1}={}){K();let Vt=r.levels.find(ut=>ut.id===q);if(!Vt||!s.get(q)?.visible)return null;let D=!yt&&_t(F).find(ut=>ut.root.userData.level===q),ht=!yt&&o(F),ct=ht?.floor===q?ht:null,ot=D&&(!ct||D.distance<ct.point.distanceTo(t.position))?{point:D.point,normal:D.face.normal.clone().applyMatrix3(new he().getNormalMatrix(D.object.matrixWorld)).normalize()}:ct;if(!ot){let ut=X(F);g.setFromCamera(new ft(ut.x,ut.y),t);let wt=g.ray.intersectPlane(new rn(new A(0,1,0),-(Vt.z+s.get(q).position.y)),new A);if(!wt)return null;ot={point:wt,normal:new A(0,1,0)}}let lt=ot.point,xt=ot.normal||new A(0,1,0);return{x:lt.x,y:lt.z,z:lt.y-s.get(q).position.y,normal:{x:xt.x,y:xt.z,z:xt.y}}}function Ht(){if(!U){rt(null),nt(),U=!0,S.detach(),S.dispose(),i.remove(M);for(let F of p)F.removeFromParent();for(let F of Object.values(_))F.dispose();f.dispose();for(let F of R)F.dispose()}}return{select:tt,sync:K,down:te,move:oe,up:ae,cancel:nt,placement:gt,previewWall:rt,dispose:Ht,dragging:()=>!!I,busy:()=>!!(I||L),setMode(F){["translate","scale","rotate"].includes(F)&&(nt(),S.setMode(F),S.setSpace(F==="scale"?"local":"world"),J())},objects:()=>p}}function rf(i,t,e){let n=0,s=1;for(let r of["x","y","z"]){let o=t[r]-i[r],a=e.min[r],l=e.max[r];if(Math.abs(o)<1e-8){if(i[r]<a||i[r]>l)return null;continue}let c=(a-i[r])/o,h=(l-i[r])/o;if(c>h&&([c,h]=[h,c]),n=Math.max(n,c),s=Math.min(s,h),n>s)return null}return n>=0&&n<=1?n:null}function Ax(i,t){if(i.polygon&&window.KERN_SHAPES){let r=window.KERN_SHAPES,o=(t.polygons||[]).filter(p=>p.kind==="slab"&&p.room===i.id&&Math.abs(p.z+p.height-i.z)<.01),a=p=>o.some(m=>r.contains(p,m.polygon)&&!(m.holes||[]).some(g=>r.contains(p,g))),l=r.labelAnchor(i),c=Math.min(i.w,4),h=Math.min(i.h,2);if(a(l))return{x:l.x-c/2,y:l.y-h/2,w:c,h,z:i.z};let d=null;for(let p of o){let m=[p.polygon,...p.holes||[]],g=r.bounds(p.polygon);for(let y=0;y<12;y++)for(let _=0;_<12;_++){let f={x:g.x+g.w*(_+.5)/12,y:g.y+g.h*(y+.5)/12};if(!a(f))continue;let R=Math.min(...m.flatMap(P=>P.map((I,L)=>{let U=P[(L+1)%P.length];return Math.hypot(I[0]-U[0],I[1]-U[1])>1e-8?r.project(f,{a:I,b:U}).distance:1/0}))),S=Math.min(1,R/Math.hypot(c/2,h/2)),M=S*c*h-Math.hypot(f.x-l.x,f.y-l.y)*1e-4;S*c>.35&&S*h>.35&&(!d||M>d.score)&&(d={...f,w:c*S,h:h*S,score:M})}}return d?{x:d.x-d.w/2,y:d.y-d.h/2,w:d.w,h:d.h,z:i.z}:null}let e=t.boxes.filter(r=>(r.kind==="slab"&&(!r.room||r.room===i.id)||r.kind==="landing")&&Math.abs(r.z+r.height-i.z)<.01).map(r=>{let o=Math.max(i.x,r.x),a=Math.max(i.y,r.y);return{x:o,y:a,w:Math.min(i.x+i.w,r.x+r.w)-o,h:Math.min(i.y+i.h,r.y+r.h)-a,z:r.z+r.height}}).filter(r=>r.w>.35&&r.h>.35),n=i.x+i.w/2,s=i.y+i.h/2;return e.sort((r,o)=>o.w*o.h-r.w*r.h||Math.hypot(r.x+r.w/2-n,r.y+r.h/2-s)-Math.hypot(o.x+o.w/2-n,o.y+o.h/2-s))[0]||null}function Rx(i,t,e,n){let s=Math.min(56,e*.42),r=[],o=a=>n.measureText?.(a).width??a.length*s*.56;for(let a=0;a<90;a++){n.font=`600 ${s}px system-ui`,r=[];let l="";for(let c of String(i).split(/\s+/)){let h=l?l+" "+c:c;l&&o(h)>t?(r.push(l),l=c):l=h}if(l&&r.push(l),r.every(c=>o(c)<=t)&&r.length*s*1.24<=e)break;s*=.92}return{lines:r,fontSize:s,lineHeight:s*1.24}}function of(i,t,e){return i.stairs?.some(n=>{if(n.connectionId!==e.stair)return!1;let s=n.stops.find(o=>o.floor===t.id);if(!s)return!1;let r=n.stops.filter(o=>o.z<s.z-1e-6);return r.length>0&&e.z<s.z&&e.z>=Math.max(...r.map(o=>o.z))-.2})}function Cx(i,t,e={}){let n=null,s=new Pl({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),r=()=>{s.setAnimationLoop(null),s.dispose(),s.forceContextLoss(),s.domElement.remove()};try{let st=function(u,v){let E=u.height;if(u.contextOnly&&F!==v.id||u.kind==="slab"&&(!Fe||Qi)&&!te||u.kind==="ceiling"&&(!Fe||Qi)&&(!Pt||oe))return 0;let O=u.kind==="wall"||u.kind==="solid";return oe&&O&&(E=Math.max(0,Math.min(E,(u.baseZ??v.z)+ue-u.z))),O&&!Rt&&(E=0),E},Dt=function(){let u=new ze;q=[];for(let v of g.values())v.position.y=v.userData.rank*X;rt.position.y=0,rt.userData.displayDatum=rt.position.y;for(let v of R){let E=t.levels.find(Z=>Z.id===v.userData.level),O=g.get(E.id),at=v.userData.fadeMesh;v.userData.boxes.forEach((Z,Y)=>{let V=st(Z,E),it=nt&&v.userData.faded.has(Y),W=(St,At)=>{let zt=At&&V>.001;u.position.set(Z.x+Z.w/2,Z.z+V/2,Z.y+Z.h/2),u.scale.set(zt?Z.w:0,zt?V:0,zt?Z.h:0),u.updateMatrix(),St.setMatrixAt(Y,u.matrix)};W(v,!it),at&&W(at,it),O.visible&&V>.001&&q.push({mesh:v,index:Y,kind:Z.kind,level:E.id,min:{x:Z.x,y:Z.z+O.position.y,z:Z.y},max:{x:Z.x+Z.w,y:Z.z+V+O.position.y,z:Z.y+Z.h}})}),v.visible=v.userData.boxes.some((Z,Y)=>st(Z,E)>.001&&!(nt&&v.userData.faded.has(Y))),v.instanceMatrix.needsUpdate=!0,at&&(at.visible=nt&&v.userData.boxes.some((Z,Y)=>st(Z,E)>.001&&v.userData.faded.has(Y)),at.instanceMatrix.needsUpdate=!0)}for(let v of M){let E=v.userData.shape,O=t.levels.find(Z=>Z.id===v.userData.level),at=st(E,O);v.scale.y=at/E.height,v.visible=at>.001&&(!v.userData.contextOnly||F===v.userData.level)}for(let v of y)v.visible=ae;for(let v of _)v.visible=ae&&!v.userData.duplicate;Ct(),o.updateMatrixWorld(!0),yt=""},Ct=function(){for(let u of S){let v=u.userData.floorHighlight||u.userData.floorLeader;u.visible=!!g.get(v)?.visible&&(v===Ht||j.has(v))}for(let u of y)u.material.color.set(u.userData.level===Ht||j.has(u.userData.level)?10410239:16777215)},Xt=function(u){j=new Set((u||[]).filter(v=>g.has(v))),Ct()},Bt=function(u){u&&!g.get(u)?.visible&&(u=null),u!==Ht&&(Ht=u,Ct(),s.domElement.style.cursor=u?"pointer":"default",e.onHover?.(u?t.levels.find(v=>v.id===u):null))},mt=function(u=!1){a.updateMatrixWorld(!0);let v=[...a.position.toArray(),...a.quaternion.toArray(),X,Rt,oe,ue,ae,nt,F,...H()].join(":");if(!u&&v===yt&&!lt)return;let E=[...a.position.toArray().map(W=>W.toFixed(2)),...a.quaternion.toArray().map(W=>W.toFixed(3)),X,Rt,oe,ue,nt,...H()].join(":");E!==ct&&(ct=E,ot=performance.now(),lt=nt);let O=!nt||!ht&&!D&&(u||performance.now()-ot>=180),at=new Map(R.map(W=>[W,new Set]));if(O&&nt&&Rt)for(let W of t.levels){let St=g.get(W.id);if(!St.visible)continue;let At=W.boxes.filter(zt=>zt.kind==="slab").sort((zt,$t)=>$t.w*$t.h-zt.w*zt.h).slice(0,12);for(let zt of At)for(let[$t,re]of[[.5,.5],[.22,.22],[.78,.78]]){let pe={x:zt.x+zt.w*$t,y:zt.z+zt.height+.8+St.position.y,z:zt.y+zt.h*re},le=null,me=1;for(let Ge of q){let ke=rf(a.position,pe,Ge);ke!==null&&ke>1e-5&&ke<me&&(me=ke,le=Ge)}le?.kind==="wall"&&me<.985&&at.get(le.mesh).add(le.index)}}if(O){let W=new Set,St=M.filter(At=>At.userData.kind==="wall"&&At.visible&&g.get(At.userData.level)?.visible);if(nt&&Rt){for(let At of t.levels)if(g.get(At.id)?.visible)for(let zt of(At.rooms||[]).slice(0,20)){let $t=window.KERN_SHAPES?window.KERN_SHAPES.centroid(zt):{x:zt.x+zt.w/2,y:zt.y+zt.h/2},re=new A($t.x,zt.z+.8+g.get(At.id).position.y,$t.y),pe=re.clone().sub(a.position),le=pe.length(),Ge=new pi(a.position,pe.normalize(),.05,le-.05).intersectObjects(St,!1)[0];Ge&&W.add(Ge.object)}}for(let At of M)At.userData.kind==="wall"&&(At.material=P(At.userData.shape.color,W.has(At)))}let Z=!1;if(O){for(let W of R){let St=at.get(W),At=W.userData.faded;(St.size!==At.size||[...St].some(zt=>!At.has(zt)))&&(Z=!0),W.userData.faded=St}lt=!1}Z&&Dt();let Y=[],V=Math.max(1,i.clientWidth),it=Math.max(1,i.clientHeight);for(let W of[...y].sort((St,At)=>+!!St.userData.roomLabel-+!!At.userData.roomLabel||(At.userData.area||0)-(St.userData.area||0))){let St=W.getWorldPosition(new A),At=St.clone().applyMatrix4(a.matrixWorldInverse),zt=2*Math.max(.1,-At.z)*Math.tan(si.degToRad(a.fov/2))/it,$t=Math.min(W.userData.labelWidth*zt,W.userData.maxWorldWidth||1/0);W.scale.set($t,$t*W.userData.labelRatio,1);let re=St.clone().project(a),pe=$t/zt,le=pe*W.userData.labelRatio,me={x:(re.x+1)*V/2-pe/2,y:(1-re.y)*it/2-le/2,w:pe,h:le},Ge=Y.some(ke=>me.x<ke.x+ke.w+5&&me.x+me.w+5>ke.x&&me.y<ke.y+ke.h+5&&me.y+me.h+5>ke.y);if(W.visible=ae&&g.get(W.userData.level).visible&&(!W.userData.roomLabel||W.userData.level===F)&&At.z<0&&re.z>=-1&&re.z<=1&&me.x+me.w>0&&me.y+me.h>0&&me.x<V&&me.y<it&&pe>=58&&!Ge&&!q.some(ke=>{let Yn=rf(a.position,St,ke);return Yn!==null&&Yn>1e-5&&Yn<.995}),W.visible&&Y.push(me),W.userData.floorLabel){let ke=S.find(Yn=>Yn.userData.floorLeader===W.userData.level);if(ke){let Yn=ke.geometry.attributes.position;Yn.setX(0,W.position.x+$t/2),Yn.needsUpdate=!0,ke.visible=ae&&W.visible&&(W.userData.level===Ht||j.has(W.userData.level))}}}for(let W of _){let St=W.getWorldPosition(new A);W.visible=ae&&g.get(W.userData.level).visible&&!W.userData.duplicate&&a.position.y>St.y}yt=v},Lt=function(){D=null},jt=function(u,v,E,O=ut){let at=a.position.clone(),Z=h.target.clone(),Y=h.enableDamping;h.enableDamping=!1,h.update(),a.position.copy(at),h.target.copy(Z),h.update(),h.enableDamping=Y,D=E&&!ce?.matches?{from:at,targetFrom:Z,to:u.clone(),targetTo:v.clone(),datumFrom:ut,datumTo:O,start:performance.now(),duration:420}:null,D||(ut=O,a.position.copy(u),h.target.copy(v),a.lookAt(v),h.update(),mt(!0))},Jt=function(u=performance.now()){if(!D)return!1;let v=D,E=ce?.matches?1:Math.min(1,Math.max(0,(u-v.start)/v.duration)),O=E*E*(3-2*E);return ut=si.lerp(v.datumFrom,v.datumTo,O),a.position.lerpVectors(v.from,v.to,O),h.target.lerpVectors(v.targetFrom,v.targetTo,O),a.lookAt(h.target),a.updateMatrixWorld(!0),E===1&&(D=null,h.update()),!0},B=function(){let u=`${H().join("|")}:${X}:${a.aspect}:${a.fov}`;if(Nt?.key===u)return Nt;let v=new Rn;for(let V of g.values())if(V.visible){let it=t.levels.find(W=>W.id===V.userData.id);for(let W of[...it.boxes,...it.polygons||[],...K(it)])v.expandByPoint(new A(W.x,W.z+V.position.y,W.y)),v.expandByPoint(new A(W.x+W.w,W.z+W.height+V.position.y,W.y+W.h))}v.isEmpty()&&(v.min.set(I.minX,I.minZ-G*X,I.minY),v.max.set(I.maxX,I.maxZ+(t.levels.length-1-G)*X,I.maxY));let E=v.getCenter(new A),O=v.getSize(new A),at=Math.max(O.length()/2,8),Z=si.degToRad(a.fov/2),Y=at/Math.sin(Z)*Math.max(1,1/a.aspect)*1.1;return Nt={key:u,center:E,distance:Y}},Tt=function(){return Fe?1/Math.tan(si.degToRad(a.fov/2)):B().distance/Math.max(.001,a.position.distanceTo(h.target))},It=function(){let u=Tt(),v=u<.1?Math.max(.1,Math.round(u*1e3)/10):Math.round(u*100);Number.isFinite(u)&&v!==de&&(de=v,e.onCameraChange?.(u))},Gt=function(u=!1,v=!1){let{center:E,distance:O}=B(),at=u?a.position.clone().sub(h.target).normalize():new A(1,.9,1.2).normalize();a.near=.05,a.far=Math.max(5e3,O*5),a.updateProjectionMatrix(),jt(E.clone().add(at.multiplyScalar(O)),E,v,wt(xt))},Et=function(u,v=!0){let E=wt(u),O=E-ut;xt=u,jt(a.position.clone().add(new A(0,O,0)),h.target.clone().add(new A(0,O,0)),v,E)},dt=function(){if(e.onFloorVisibility)return e.onFloorVisibility({all:!0});Bn(),(Zt||ne==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&Wt(!0),Mt&&Xn(),Lt();for(let u of g.values())u.visible=!0;F=null,Bt(null),Dt(),mt(!0),pt("visibility")},Yt=function(u){if(e.onFloorSelect)return e.onFloorSelect(u,{additive:!1});if(Bn(),(Zt||ne==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&Wt(!0),Mt&&Xn(),!!g.has(u)){if(F===u&&H().length===1){pt();return}Wn(null,null),F=u;for(let[v,E]of g)E.visible=v===u;Bt(null),Dt(),Et(u),pt(),Wn(u,null)}},ee=function(u,{preserveEditing:v=!1}={}){if(g.has(u)){if(e.onFloorSelect&&!v)return e.onFloorSelect(u,{additive:!1});if(v&&e.getFloorState)return z(e.getFloorState());!v&&!g.get(u).visible&&(g.get(u).visible=!0,Dt()),F!==u&&(window.KERN_CONNECTION_3D?.cancel(),(ne==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&Wt(!0)),F=u,xt=u,ut=wt(u),Bt(null),v||Q([u]),mt(!0),pt(v?"sync":"navigation")}},Pe=function(u,v=!1){if(!g.has(u))return;if(e.onFloorSelect)return e.onFloorSelect(u,{additive:v});if(!v)return Yt(u);Bn(),Wt(),Xn();let E=g.get(u);E.visible=!E.visible,H().length||(E.visible=!0),Wn(null,null),ee(E.visible?u:H()[0]),Dt()},Re=function(u){g.has(u)&&u!==xt&&ee(u,{preserveEditing:!0})},Un=function(u){let v=t.levels.findIndex(O=>O.id===F),E=t.levels[v+Math.sign(u)];v>=0&&E&&(ee(E.id),Et(E.id))},In=function(u,{physicalOnly:v=!1}={}){let E=s.domElement.getBoundingClientRect();if(!E.width||!E.height)return null;x.set((u.clientX-E.left)/E.width*2-1,-(u.clientY-E.top)/E.height*2+1),a.updateMatrixWorld(!0),o.updateMatrixWorld(!0),C.setFromCamera(x,a);let O=[...f,...M,...v?[]:[...y,..._]].filter(St=>St.visible&&g.get(St.userData.level)?.visible),at=C.intersectObjects(O,!1)[0],Z=at?.object.userData.level,Y=at?.object.userData.boxes?.[at.instanceId],V=at?.object.userData.room||Y?.room,it=t.levels.find(St=>St.id===Z)?.rooms?.find(St=>St.id===V);s.domElement.title=it?it.name:"";let W=at?.object.userData.sourceFloor||Y?.sourceFloor||Z;return qt=at?{floor:W,displayFloor:Z,door:at.object.userData.door||Y?.door,room:V||Y?.rooms?.[0],roomLabel:!!at.object.userData.roomLabel,floorSurface:(at.object.userData.kind||Y?.kind)==="slab"&&!at.object.userData.door&&!Y?.door,point:at.point,normal:at.face?.normal?.clone().applyMatrix3(new he().getNormalMatrix(at.object.matrixWorld)).normalize()}:null,W||null},mr=function(u){let v=u&&window.KERN_TRANSFORM?.frame(u),E=v?v.point(v.x+v.w/2,v.y+v.h):u?[u.x+u.w/2,u.y+u.h]:null;bs=u?{x:E[0],y:E[1],z:u.z+g.get(u.floor).position.y,w:v?.w??u.w,h:v?.h??u.h}:null,gr()},gr=function(){if(!bs||Fe){On.style.display="none";return}let u=bs,v=new A(u.x,u.z,u.y).project(a),E=s.domElement.getBoundingClientRect();On.textContent=u.w.toFixed(2)+" \xD7 "+u.h.toFixed(2)+" m",On.style.display="block",On.style.left=Math.min(Math.max(6,(v.x+1)*E.width/2-45),Math.max(6,E.width-135))+"px",On.style.top=Math.min(Math.max(6,(1-v.y)*E.height/2+15),Math.max(6,E.height-28))+"px"},Wn=function(u,v){for(n?.select([]),mr(null),Ue=u?{floor:u,ids:v?[v]:[]}:null;we.children.length;){let Z=we.children[0];we.remove(Z),Z.geometry.dispose()}let E=t.levels.find(Z=>Z.id===u)?.rooms.find(Z=>Z.id===v)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(u,v),O=t.levels.find(Z=>Z.id===u),at=O&&tt(O);ge=g.has(u)?E?{...E,floor:u}:!v&&O?{id:null,isFloor:!0,floor:u,z:O.z,x:at.minX,y:at.minY,w:at.maxX-at.minX,h:at.maxY-at.minY}:null:null,ge&&vt(ge)},w=function(u,v){if(Wn(u,v[0]||null),Ue={floor:u,ids:[...v]},v.length<2)return;for(ge=null;we.children.length;){let O=we.children[0];we.remove(O),O.geometry.dispose()}let E=t.levels.find(O=>O.id===u)?.rooms.filter(O=>v.includes(O.id))||[];for(let O of E){let at=window.KERN_SHAPES?.points(O)||[[O.x,O.y],[O.x+O.w,O.y],[O.x+O.w,O.y+O.h],[O.x,O.y+O.h]],Z=new Yi(new Te().setFromPoints(at.map(Y=>new A(Y[0],O.z+g.get(u).position.y+.08,Y[1]))),Gn);Z.renderOrder=10,we.add(Z)}if(E.length){let O=Math.min(...E.map(Z=>Z.x)),at=Math.min(...E.map(Z=>Z.y));mr({floor:u,x:O,y:at,z:Math.min(...E.map(Z=>Z.z)),w:Math.max(...E.map(Z=>Z.x+Z.w))-O,h:Math.max(...E.map(Z=>Z.y+Z.h))-at})}},z=function({active:u,selected:v=[],visible:E=[],select:O=!1,navigate:at=!1}){let Z=new Set(E),Y=v.includes(u)&&g.has(u)?u:null;if(!(F===Y&&g.has(u)&&xt===u&&H().length===Z.size&&H().every(it=>Z.has(it))&&j.size===v.length&&v.every(it=>j.has(it))&&!O&&!at)){n?.cancel(),Mt&&Xn(),(Zt||ne==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&Wt(!0),Bn(),Kt.clear(),Vt=null;for(let[it,W]of g)W.visible=Z.has(it);if(F=Y,Xt(v),g.has(u)&&(at?Et(u):(xt=u,ut=wt(u))),O)Q(v);else if(ge&&!Z.has(ge.floor)){let it=ge.isFloor?Ue:null;Wn(null,null),it&&(Ue=it)}Ue?.objects&&$(Ue.objects.filter(it=>Z.has(it.floor))),Bt(null),Dt(),mt(!0),pt("controller")}},$=function(u){let v=(u||[]).filter(E=>g.has(E.floor));if(v.length&&v.every(E=>E.kind==="rooms"&&E.floor===v[0].floor)){w(v[0].floor,v.map(E=>E.id));return}if(Wn(null,null),n?.select(v),!!v.length){Ue={objects:v.map(E=>({...E}))};for(let E of v){let O=E.polygons?.length?E.polygons:[[[E.x,E.y],[E.x+E.w,E.y],[E.x+E.w,E.y+E.h],[E.x,E.y+E.h]]],at=E.z+g.get(E.floor).position.y+.08;for(let Z of O){let Y=new Yi(new Te().setFromPoints(Z.map(V=>new A(V[0],at,V[1]))),Gn);Y.renderOrder=10,Y.userData.selectedObject={floor:E.floor,kind:E.kind,id:E.id},we.add(Y)}}}},Q=function(u){let v=[...new Set(u||[])].filter(E=>g.get(E)?.visible);Xt(u),Wn(v.length===1?v[0]:null,null),Ue=v.length?{floors:v}:null},k=function(){if(!Ue)return Gt(!0,!0);let u=new Rn,v=Ue.floor;if(Ue.objects){v=Ue.objects[0]?.floor;for(let Y of Ue.objects){let V=g.get(Y.floor).position.y;u.expandByPoint(new A(Y.x,Y.z+V,Y.y)),u.expandByPoint(new A(Y.x+Y.w,Y.z+Y.height+V,Y.y+Y.h))}}else if(Ue.floors){v=Ue.floors.includes(F)?F:Ue.floors[0];for(let Y of Ue.floors){let V=t.levels.find(W=>W.id===Y);if(!V||!g.get(Y)?.visible)continue;let it=g.get(Y).position.y;for(let W of[...V.boxes,...V.polygons||[],...K(V)])u.expandByPoint(new A(W.x,W.z+it,W.y)),u.expandByPoint(new A(W.x+W.w,W.z+W.height+it,W.y+W.h))}}else{let Y=t.levels.find(W=>W.id===v);if(!Y)return;let V=Ue.ids.length?Ue.ids.map(W=>Y.rooms.find(St=>St.id===W)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(Y.id,W)).filter(Boolean):Y.rooms,it=g.get(Y.id).position.y;for(let W of V)u.expandByPoint(new A(W.x,W.z+it,W.y)),u.expandByPoint(new A(W.x+W.w,W.z+(W.height||Y.height||3)+it,W.y+W.h))}if(u.isEmpty())return;let E=u.getCenter(new A),O=Math.max(2,u.getSize(new A).length()/2),at=O/Math.sin(si.degToRad(a.fov/2))*Math.max(1,1/a.aspect)*1.15,Z=a.position.clone().sub(h.target).normalize();jt(E.clone().add(Z.multiplyScalar(at)),E,!0,wt(v))},vt=function(u){for(mr(u);we.children.length;){let E=we.children[0];we.remove(E),E.geometry.dispose()}let v=u.z+g.get(u.floor).position.y+.08;if(!u.isFloor){let E=new Yi(new Te().setFromPoints((window.KERN_SHAPES?.points(u)||[[u.x,u.y],[u.x+u.w,u.y],[u.x+u.w,u.y+u.h],[u.x,u.y+u.h]]).map(O=>new A(O[0],v,O[1]))),Gn);if(E.renderOrder=10,we.add(E),window.KERN_CONCRETE_CAP_UI?.readOnly(u.floor,u.id))return;for(let[O,at,Z]of window.KERN_ROTATE?.active()&&window.KERN_ROTATE.eligibleRoom(u)?window.KERN_SHAPES.raw(u).map((Y,V)=>["rotate-"+V,...Y]):(window.KERN_TRANSFORM?.handles(u)||[["nw",u.x,u.y],["ne",u.x+u.w,u.y],["se",u.x+u.w,u.y+u.h],["sw",u.x,u.y+u.h]]).filter(Y=>Y[0].length===2)){let Y=O.startsWith("rotate-")&&window.KERN_ROTATE?.pivotFor(u)?.index===Number(O.slice(7)),V=new bt(new Ie(Y?.55:.35,.15,Y?.55:.35),Y?Fn:Gn);V.position.set(at,v,Z),V.userData.edge=O,V.renderOrder=11,we.add(V)}}if(u.routeStair&&window.KERN_ROUTE_STAIRS){let E=u.routeStair,O=E.nodes,at=window.KERN_ROUTE_STAIRS.elevations(u,window.kernPlanner?.getPlan());for(let Z=0;Z<O.length;Z++){let Y=window.KERN_ROUTE_STAIRS.point(u,O[Z]),V=at[Z],it=(Z===0?E.start?.floor:Z===O.length-1?E.end?.floor:null)||u.floor,W=g.get(it)?.position.y??g.get(u.floor).position.y,St=V+W,At=new bt(new ti(.23,10,8),Gn);At.position.set(Y[0],St+.12,Y[1]),At.userData.edge="route-node-"+Z,At.userData.routeZ=V,At.userData.displayOffset=W,At.renderOrder=16,we.add(At);let zt=new bt(new er(.18,.45,8),Fn);if(zt.position.set(Y[0],St+1,Y[1]),zt.userData.edge="route-height-"+Z,zt.userData.routeZ=V,zt.userData.displayOffset=W,zt.renderOrder=16,we.add(zt),Z===(window.KERN_ROUTE_UI?.selectedNode??0))for(let[$t,re]of(O[Z].landing||[]).entries()){let pe=window.KERN_ROUTE_STAIRS.point(u,re),le=new bt(new Ie(.22,.15,.22),Fn);le.position.set(pe[0],St+.14,pe[1]),le.userData.edge="route-landing-"+Z+"-"+$t,le.userData.routeZ=V,le.userData.displayOffset=W,le.renderOrder=17,we.add(le)}}}if(!u.isFloor&&!window.KERN_ROTATE?.active()){let E=new bt(new fi(.28),Gn);E.position.set(u.x+u.w/2,v,u.y+u.h/2),E.userData.edge="move",E.renderOrder=14,we.add(E)}if(!u.routeStair&&!window.KERN_ROTATE?.active()&&(u.isFloor||u.localSteps||window.KERN_ROTATE?.eligibleRoom(u))){let E=u.localSteps&&window.KERN_ELEVATION_UI?.handlePoint(u.floor,u.id),O=E?.x??u.x+u.w/2,at=E?.y??u.y+u.h/2,Z=(u.__elevation?u.z:window.KERN_ELEVATION_UI?.handleZ(u.floor,u.id)??u.z)+g.get(u.floor).position.y,Y=new Ze(new Te().setFromPoints([new A(O,Z,at),new A(O,Z+1.6,at)]),Fn);Y.renderOrder=12,we.add(Y);let V=new bt(new er(.23,.55,8),Fn);V.position.set(O,Z+1.6,at),V.userData.edge="elevate",V.renderOrder=13,we.add(V)}},Ut=function(u,v){let E=s.domElement.getBoundingClientRect();return x.set((u.clientX-E.left)/E.width*2-1,-(u.clientY-E.top)/E.height*2+1),a.updateMatrixWorld(!0),o.updateMatrixWorld(!0),C.setFromCamera(x,a),C.ray.intersectPlane(new rn(new A(0,1,0),-(v.z+g.get(v.floor).position.y)),new A)},Se=function(){for(;be.children.length;){let u=be.children[0];be.remove(u),u.geometry.dispose()}},Wt=function(u=!1){let v=Zt;Zt=null,window.KERN_BRIDGE_UI?.cancel(),Se(),_e.style.display="none",h.enabled=!Fe,v&&s.domElement.hasPointerCapture(v.pointerId)&&s.domElement.releasePointerCapture(v.pointerId),u&&(window.KERN_CONNECTION_3D?.cancel(),ne="select",we.visible=!Fe)},He=function(u){u!==ne&&(n?.cancel(),window.KERN_CONNECTION_3D?.cancel(),Wt(),u!=="select"&&u!=="bridge"&&!F&&ee(xt,{preserveEditing:!0}),ne=u,we.visible=u==="select",s.domElement.title=u==="bridge"?"Click two room floors at the same height":u==="edge-steps"?"Click a room edge and drag outward":u==="steps"?"Draw between two different-height surfaces":u==="room"?"Drag a room footprint":u==="stairs"?"Draw a stair footprint, then choose destination floors":"")},Ee=function(u,v){let E=s.domElement.getBoundingClientRect();x.set((u.clientX-E.left)/E.width*2-1,-(u.clientY-E.top)/E.height*2+1),a.updateMatrixWorld(!0),C.setFromCamera(x,a);let O=C.ray.intersectPlane(new rn(new A(0,1,0),-v),new A);return O?{x:O.x,y:O.z}:null},$e=function(u){if(Se(),_e.style.display="block",_e.style.left="18px",_e.style.top="auto",_e.style.bottom="18px",_e.textContent=u.error||u.summary,u.error||u.valid===!1||!u.room&&!u.detail||!g.has(u.fid))return;let v=u.room?.bridge?[{...u.room,polygon:window.KERN_SHAPES.points(u.room),z:u.room.z-.15,height:.15}]:u.detail?[...u.detail.flights.flatMap(E=>E.treads.map(O=>({...O.rect,polygon:O.polygon,z:O.z-.12,height:.12}))),...u.detail.landings.map(E=>({...E.rect,polygon:E.polygon,z:E.z-.15,height:.15}))]:[{...u.room,z:t.levels.find(E=>E.id===u.fid).z-.15,height:.15}];for(let E of v){let O;if(E.polygon){let Z=new di(E.polygon.map(Y=>new ft(Y[0],-Y[1])));O=new us(Z,{depth:E.height,bevelEnabled:!1}),O.rotateX(-Math.PI/2)}else O=new Ie(E.w,E.height,E.h);let at=new bt(O,Fn);E.polygon?at.position.y=E.z+g.get(u.fid).position.y:at.position.set(E.x+E.w/2,E.z+E.height/2+g.get(u.fid).position.y,E.y+E.h/2),at.renderOrder=14,be.add(at)}},xi=function(u){if(In(u,{physicalOnly:!0}),!qt?.floorSurface||!qt.room||!qt.normal||qt.normal.y<.5)return null;let v=t.levels.find(O=>O.id===qt.floor),E=v?.rooms.find(O=>O.id===qt.room);return E?{floor:v.id,p:{x:qt.point.x,y:qt.point.z},z:E.z}:null},on=function(u,v=F||xt){In(u);let E=qt?.floor||v,O=t.levels.find(Y=>Y.id===E);if(!O)return null;let at=qt?{x:qt.point.x,y:qt.point.z}:Ee(u,O.z+g.get(E).position.y);if(!at)return null;let Z=qt?.point||new A(at.x,O.z+g.get(E).position.y,at.y);return{floor:E,room:qt?.room,door:qt?.door,p:at,altKey:!!u.altKey,worldPerPixel:2*a.position.distanceTo(Z)*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height)}},Ni=function(u){Se(),_e.style.display="block",_e.style.left="18px",_e.style.top="auto",_e.style.bottom="18px",_e.textContent=u.valid?u.summary||(ne==="disconnect"?"Release to remove connection":"Click or release to place opening"):u.reason||"Choose a wall";let v=u.geometry;if(!(!v||!g.has(u.fid)))for(let E of v.segments||[v]){let O=E,at=O.axis==="poly"?O.p0:O.axis==="h"?[O.start,O.fixed]:[O.fixed,O.start],Z=O.axis==="poly"?O.p1:O.axis==="h"?[O.end,O.fixed]:[O.fixed,O.end],Y=u.door?.kind==="window"?u.door.sill??.9:0,V=u.door?.kind==="window"?u.door.height??1.4:u.door?.maximumPassage?u.door.height:window.KERN_LOW_OPENINGS?.recognized(u.door)?u.clearHeight??u.door.height:2.2,it=u.z+Y+g.get(u.fid).position.y,W=[[at[0],it,at[1]],[Z[0],it,Z[1]],[Z[0],it+V,Z[1]],[at[0],it+V,at[1]]],St=new Yi(new Te().setFromPoints(W.map(At=>new A(...At))),ws);St.renderOrder=20,be.add(St)}},Bh=function(){if(!wn)return;a.position.set(wn.x+(wn.bobX||0)*Math.cos(To),wn.z+(wn.eyeHeight??1.6278874)+(wn.bobY||0),wn.y-(wn.bobX||0)*Math.sin(To)),a.rotation.order="YXZ",a.rotation.set(Nh,To,wn.roll||0);let u=new A(0,0,-1).applyQuaternion(a.quaternion);if(Ui.position.copy(a.position),Ui.target.position.copy(a.position).add(u.multiplyScalar(8)),Ui.visible=Uh,!wn.fly){for(let v of y)v.visible=!1;for(let v of _)v.visible=!v.userData.duplicate&&Math.abs(v.position.y-wn.z)<.2}},uf=function(u,v=0,E=0,O=!0,at=!1){if(u){if(n?.cancel(),Wt(!0),!Fe){if(Rs=kl(),a.fov=u.fov??90,a.updateProjectionMatrix(),Fe=!0,Qi=!!u.fly,o.children.filter(Z=>Z.isHemisphereLight||Z.isDirectionalLight).forEach(Z=>{Z.userData.originalIntensity=Z.intensity,u.fly||(Z.intensity=Z.isHemisphereLight?.8:.3)}),we.visible=!1,h.enabled=!1,D=null,!u.fly){X=0,Rt=!0,oe=!1,nt=!1,ae=!1,F=null;for(let Z of g.values())Z.visible=!0;rt.visible=!1,Fi.visible=!0}Dt()}if(Qi&&!u.fly){X=0,Rt=!0,oe=!1,nt=!1,ae=!1,F=null;for(let Z of g.values())Z.visible=!0;rt.visible=!1,Fi.visible=!0,Qi=!1,Dt()}Qi=!!u.fly,a.fov!==(u.fov??90)&&(a.fov=u.fov??90,a.updateProjectionMatrix()),wn=u,To=v,Nh=E,Uh=O,Bh()}else if(Fe){let Z=a.position.clone(),Y=a.getWorldDirection(new A);Fe=!1,Qi=!1,a.fov=Rs?.fov??42,a.updateProjectionMatrix(),o.children.filter(V=>V.isHemisphereLight||V.isDirectionalLight).forEach(V=>V.intensity=V.userData.originalIntensity??V.intensity),we.visible=!0,wn=null,Ui.visible=!1,Fi.visible=!1,h.enabled=!0,a.rotation.order="XYZ",Vl(at?{...Rs,position:Z.toArray(),target:Z.clone().add(Y.multiplyScalar(10)).toArray()}:Rs)}},kl=function(){return{fov:a.fov,position:a.position.toArray(),target:h.target.toArray(),focused:F,navigationFloor:xt,navigationY:ut,navigationElevation:wt(xt),visible:H(),gap:X,showWalls:Rt,showCeilings:Pt,showSlabs:te,cutaway:oe,cutHeight:ue,labels:ae,xray:nt,showGrid:gt,overview:null}},Vl=function(u){if(!u||_t)return;a.fov=Number.isFinite(u.fov)?u.fov:42,a.updateProjectionMatrix();let v=at=>Array.isArray(at)&&at.length===3&&at.every(Number.isFinite);Lt(),X=Math.max(0,Math.min(12,Number(u.gap)||0)),Rt=u.showWalls!==!1,Pt=!!u.showCeilings,te=u.showSlabs!==!1,oe=u.cutaway!==!1,ue=Number.isFinite(u.cutHeight)?Math.max(.4,Math.min(2.4,u.cutHeight)):1.15,ae=u.labels!==!1,nt=!!u.xray,gt=u.showGrid!==!1,rt.visible=gt,F=g.has(u.focused)?u.focused:null;let E=Array.isArray(u.visible)?u.visible.filter(at=>g.has(at)):[...g.keys()];for(let[at,Z]of g)Z.visible=E.includes(at);if(!F&&!E.length&&u.visible?.length)for(let at of g.values())at.visible=!0;xt=g.has(u.navigationFloor)?u.navigationFloor:F||xt;let O=g.has(u.navigationFloor)&&Number.isFinite(u.navigationElevation)?wt(xt)-u.navigationElevation:0;ut=(Number.isFinite(u.navigationY)?u.navigationY:wt(xt))+O,Bt(null),Dt(),v(u.position)&&v(u.target)?jt(new A().fromArray(u.position).add(new A(0,O,0)),new A().fromArray(u.target).add(new A(0,O,0)),!1):Gt(),mt(!0),pt("restore")},zh=function(){if(!_t){n?.dispose(),s.domElement.removeEventListener("pointerdown",Ts,!0),s.domElement.removeEventListener("pointermove",ri,!0),s.domElement.removeEventListener("pointerup",Mh,!0),s.domElement.removeEventListener("pointercancel",wo,!0),s.domElement.removeEventListener("lostpointercapture",wo,!0),Wt(!0),s.domElement.removeEventListener("pointerdown",se,!0),s.domElement.removeEventListener("pointermove",Qt,!0),s.domElement.removeEventListener("lostpointercapture",fe,!0),s.domElement.removeEventListener("pointerup",fe,!0),s.domElement.removeEventListener("pointercancel",fe,!0),s.domElement.removeEventListener("pointerdown",Be,!0),s.domElement.removeEventListener("pointermove",_n,!0),s.domElement.removeEventListener("pointerup",xn,!0),s.domElement.removeEventListener("pointercancel",en,!0),s.domElement.removeEventListener("lostpointercapture",an,!0),_t=!0,Ui.dispose();for(let u of Fi.children)u.geometry.dispose();D=null,s.setAnimationLoop(null),Dh.disconnect(),s.domElement.removeEventListener("pointerdown",Sh,!0),s.domElement.removeEventListener("pointermove",Eh,!0),s.domElement.removeEventListener("pointerup",bh,!0),s.domElement.removeEventListener("pointercancel",Xn,!0),s.domElement.removeEventListener("lostpointercapture",Xn,!0),As.remove(),s.domElement.removeEventListener("pointerdown",wh,!0),s.domElement.removeEventListener("pointermove",Th,!0),s.domElement.removeEventListener("pointerup",Ah,!0),s.domElement.removeEventListener("pointercancel",Bn,!0),s.domElement.removeEventListener("lostpointercapture",Bn,!0),On.remove(),_e.remove(),Li.dispose(),Fn.dispose(),Gn.dispose(),ws.dispose(),bo.dispose();for(let u of we.children)u.geometry.dispose();h.removeEventListener("start",Ih),h.removeEventListener("end",Ph),h.dispose();for(let[u,v]of Object.entries(Rh))s.domElement.removeEventListener(u,v);s.domElement.removeEventListener("webglcontextlost",Lh),window.removeEventListener("blur",Hl);for(let u of[...y,..._])u.material.map.dispose(),u.material.dispose(),u.geometry&&!u.isSprite&&u.geometry.dispose();for(let u of S)u.geometry.dispose(),u.material.dispose();for(let u of M)u.geometry.dispose();for(let u of m.values())u.dispose();p.dispose(),rt.geometry.dispose();for(let u of Array.isArray(rt.material)?rt.material:[rt.material])u.dispose();s.dispose(),s.forceContextLoss(),s.domElement.remove(),o.clear(),Kt.clear()}};s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.outputColorSpace=sn,s.setClearColor(1514532),s.domElement.setAttribute("aria-label","3D building editor. Alt-left drag orbits; middle or right drag pans. Alt-right drag horizontally zooms at the starting pointer: right closer, left farther. Click a floor or floor control to show and edit it alone; Shift-click adds or removes floors. F frames the selection. Click rooms and openings within the selected floor to edit them."),s.domElement.tabIndex=0,i.appendChild(s.domElement);let o=new Gr,a=new cn(42,1,.05,5e3);o.add(new ao(15988735,4739939,2.2));let l=new rr(16777215,2.5);l.position.set(-40,80,-30),o.add(l);let c=new rr(12044524,.6);c.position.set(40,10,60),o.add(c);let h=new Nl(a,s.domElement),d=r;r=()=>{h.dispose();let u=new Set,v=new Set,E=new Set;o.traverse(O=>{O.geometry&&u.add(O.geometry);for(let at of Array.isArray(O.material)?O.material:O.material?[O.material]:[])v.add(at),at.map&&E.add(at.map)});for(let O of E)O.dispose();for(let O of v)O.dispose();for(let O of u)O.dispose();o.clear(),d()},h.enableDamping=!0,h.dampingFactor=.09,h.maxPolarAngle=Math.PI-.001,h.minDistance=1,h.maxDistance=1600,h.screenSpacePanning=!0,h.mouseButtons={LEFT:null,MIDDLE:En.PAN,RIGHT:En.PAN},h.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN};let p=new Ie(1,1,1),m=new Map,g=new Map,y=[],_=[],f=[],R=[],S=[],M=[],P=(u,v=!1)=>{let E=u+(v?":xray":"");return m.has(E)||m.set(E,new ds({color:u,roughness:.88,metalness:0,transparent:v,opacity:v?.5:1,depthWrite:!v})),m.get(E)},I=t.bounds,L=(I.minX+I.maxX)/2,U=(I.minY+I.maxY)/2,T=Math.max(6,(I.maxX-I.minX)*.22),b=t.levels.find(u=>u.id==="L0"),N=t.siteGroundZ??b?.z??0,G=b?t.levels.indexOf(b):t.levels.reduce((u,v,E)=>Math.abs(v.z-N)<Math.abs(t.levels[u].z-N)?E:u,0),K=u=>(u.primitives||[]).map(v=>{let E=window.KERN_PRIMITIVES.bounds(v);return{...E,z:u.z+E.z}}),tt=u=>{let v=[...u.boxes,...u.polygons||[],...K(u)];return v.length?{minX:Math.min(...v.map(E=>E.x)),maxX:Math.max(...v.map(E=>E.x+E.w)),minY:Math.min(...v.map(E=>E.y)),maxY:Math.max(...v.map(E=>E.y+E.h))}:I},et=(u,v,E)=>{let O=Ax(u,v);if(!O)return;let at=String(u.name||u.id),Z=Math.min(.32,Math.min(O.w,O.h)*.1),Y=O.h>O.w*1.35,V=(Y?O.h:O.w)-Z*2,it=(Y?O.w:O.h)-Z*2,W=Math.min(V,9),St=Math.min(it,2.5),At=64,zt=document.createElement("canvas");zt.width=Math.ceil(W*At),zt.height=Math.ceil(St*At);let $t=zt.getContext("2d");if(!$t)return;let re=Rx(at,zt.width-10,zt.height-8,$t);$t.fillStyle="#263545",$t.textAlign="center",$t.textBaseline="middle",$t.strokeStyle="#eef3f4",$t.lineWidth=Math.max(1,re.fontSize*.045),$t.lineJoin="round",re.lines.forEach((me,Ge)=>{let ke=zt.height/2+(Ge-(re.lines.length-1)/2)*re.lineHeight;$t.strokeText?.(me,zt.width/2,ke),$t.fillText(me,zt.width/2,ke)});let pe=new cs(zt);pe.colorSpace=sn;let le=new bt(new kn(W,St),new fn({map:pe,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));le.rotation.set(-Math.PI/2,0,Y?Math.PI/2:0),le.position.set(O.x+O.w/2,O.z+.006,O.y+O.h/2),le.renderOrder=2,le.userData={level:v.id,roomLabel:!0,room:u.id,name:at,surface:O,worldWidth:W,worldHeight:St,fontSize:re.fontSize/At,lines:re.lines},le.userData.duplicate=_.some(me=>me.userData.level===v.id&&me.position.distanceTo(le.position)<.01),E.add(le),_.push(le)};for(let u=0;u<t.levels.length;u++){let v=t.levels[u],E=new Tn,O=tt(v);E.userData={id:v.id,rank:u-G,z:v.z},g.set(v.id,E),o.add(E);let at=new Map;for(let it of[...v.boxes,...t.levels.flatMap(W=>W.id===v.id?[]:W.boxes.filter(St=>["stair","landing"].includes(St.kind)&&of(t,v,St)).map(St=>({...St,contextOnly:!0})))]){let W=`${it.color}:${it.kind}:${!!it.contextOnly}`;at.has(W)||at.set(W,[]),at.get(W).push(it)}for(let it of at.values()){let W=new Qs(p,P(it[0].color,it[0].kind==="window"),it.length);if(W.frustumCulled=!1,W.userData={boxes:it,level:v.id,faded:new Set},E.add(W),f.push(W),R.push(W),it[0].kind==="wall"){let St=new Qs(p,P(it[0].color,!0),it.length);St.frustumCulled=!1,St.renderOrder=1,St.userData={boxes:it,level:v.id,primary:W,xray:!0},W.userData.fadeMesh=St,E.add(St),f.push(St)}}for(let it of[...v.polygons||[],...t.levels.flatMap(W=>W.id===v.id?[]:(W.polygons||[]).filter(St=>of(t,v,St)).map(St=>({...St,contextOnly:!0})))]){let W=new di(it.polygon.map(zt=>new ft(zt[0],-zt[1])));for(let zt of it.holes||[])W.holes.push(new qi(zt.map($t=>new ft($t[0],-$t[1]))));let St=new us(W,{depth:it.height,bevelEnabled:!1,steps:1});St.rotateX(-Math.PI/2);let At=new bt(St,P(it.color,it.kind==="window"));At.position.y=it.z,At.userData={level:v.id,stair:it.stair,sourceFloor:it.sourceFloor,door:it.door,contextOnly:!!it.contextOnly,room:it.room,kind:it.kind,shape:it},E.add(At),M.push(At)}let Z=new uo(new Rn(new A(O.minX,v.z+.04,O.minY),new A(O.maxX,v.z+.07,O.maxY)),8176895);Z.visible=!1,Z.material.depthTest=!0,Z.material.transparent=!0,Z.material.opacity=.95,Z.userData.floorHighlight=v.id,E.add(Z),S.push(Z);let Y=document.createElement("canvas");Y.width=640,Y.height=96;let V=Y.getContext("2d");if(V){V.fillStyle="#202936",V.fillRect(0,0,640,96),V.strokeStyle="#465367",V.strokeRect(1,1,638,94),V.fillStyle="#e7effc",V.font="500 34px system-ui",V.fillText(`${v.id} \xB7 ${v.z>0?"+":""}${v.z.toFixed(2)} m`,18,38),V.fillStyle="#c9d4e4",V.font="30px system-ui",V.fillText(String(v.name).slice(0,40),18,77,604);let it=new cs(Y);it.colorSpace=sn;let W=new Xr(new js({map:it,depthTest:!0,depthWrite:!1}));W.position.set(I.minX-T*.65-1,v.z+.2,(O.minY+O.maxY)/2),W.scale.set(T,T*96/640,1),W.userData={level:v.id,floorLabel:!0,labelWidth:230,labelRatio:96/640},E.add(W),y.push(W);let St=new Ze(new Te().setFromPoints([new A(W.position.x+T/2,v.z+.2,W.position.z),new A(O.minX,v.z+.07,W.position.z)]),new Hn({color:8176895,depthTest:!0,transparent:!0,opacity:.9}));St.visible=!1,St.userData.floorLeader=v.id,E.add(St),S.push(St)}for(let it of v.rooms||[])et(it,v,E);for(let it of v.annotations||[]){let W=String(it.text||""),St=it.fontSize||.45;if(!W)continue;let At=Math.min(30,Math.max(St,W.length*St*.58)),zt=St*1.3,$t=document.createElement("canvas");$t.width=Math.ceil(At*64),$t.height=Math.ceil(zt*64);let re=$t.getContext("2d");if(!re)continue;re.font=`${St*64}px system-ui,Segoe UI,sans-serif`,re.fillStyle="#53686d",re.textAlign="center",re.textBaseline="middle",re.fillText(W,$t.width/2,$t.height/2,$t.width);let pe=new cs($t);pe.colorSpace=sn;let le=new bt(new kn(At,zt),new fn({map:pe,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1})),me=v.rooms.find(Ge=>Ge.id===it.sourceRoom)||v.rooms.find(Ge=>it.x>=Ge.x&&it.x<=Ge.x+Ge.w&&it.y>=Ge.y&&it.y<=Ge.y+Ge.h);le.rotation.x=-Math.PI/2,le.position.set(it.x,(me?.z??v.z)+.008,it.y),le.renderOrder=2,le.userData={level:v.id,annotationLabel:!0,annotation:it.id,name:W},E.add(le),_.push(le)}}let J=Math.max(I.maxX-I.minX,I.maxY-I.minY,15)*1.35,rt=new ho(J,Math.min(100,Math.ceil(J)),6781842,3160648);rt.position.set(L,N,U),rt.userData.groundDatum=N,o.add(rt),rt.renderOrder=-10;for(let u of Array.isArray(rt.material)?rt.material:[rt.material])u.transparent=!1,u.opacity=1,u.depthWrite=!1;let X=0,_t=!1,Rt=!0,Pt=!1,te=!0,oe=!0,ue=1.15,ae=!0,nt=!1,gt=!0,Ht=null,F=null,q=[],yt="",Vt=null,D=null,ht=!1,ct="",ot=0,lt=!1,xt=g.has(e.activeFloor)?e.activeFloor:b?.id||t.levels[G]?.id,ut=g.get(xt)?.userData.z||0,wt=u=>{let v=g.get(u);return v?v.userData.z+v.userData.rank*X:ut},ce=window.matchMedia?.("(prefers-reduced-motion: reduce)"),Kt=new Set,C=new pi,x=new ft,H=()=>[...g].filter(([,u])=>u.visible).map(([u])=>u),j=new Set((e.editableFloors||[]).filter(u=>g.has(u))),pt=(u="navigation")=>e.onVisibilityChanged?.(H(),F,u),Nt=null,de=null,qt=null,ge=null,Mt=null,Ue=null,we=new Tn;o.add(we);let _e=document.createElement("div");_e.style.cssText="position:absolute;left:18px;bottom:18px;padding:8px 12px;background:#172b37;color:#e7b16b;pointer-events:none;display:none",i.append(_e);let Fn=new fn({color:15184235,transparent:!0,opacity:.65,depthTest:!1}),Li=new ro({color:15185774,dashSize:.18,gapSize:.12,depthTest:!1}),bs=null,On=document.createElement("div");On.dataset.selectionDimensions="true",On.style.cssText="position:absolute;pointer-events:none;display:none;padding:4px 7px;border-radius:4px;background:#172b37dd;color:#e7b76e;font:13px system-ui",i.append(On);let bo=new fn({color:11184810,transparent:!0,opacity:.1,depthTest:!1,depthWrite:!1,side:pn}),ws=new Hn({color:5493465,depthTest:!1}),Gn=new fn({color:5941759,depthTest:!1}),Ft=null,kt=null,ie=0,se=u=>{if(n?.busy()||window.KERN_MAX_PASSAGE_UI?.altConnectIntent(u)||Fe||!u.altKey||Mt||Zt||![0,1,2].includes(u.button)||u.button===0&&ge&&ne==="select"&&(Ut(u,ge),C.intersectObjects(we.children,!1).some(O=>["nw","ne","se","sw"].includes(O.object.userData.edge))))return;if(Ft=u.pointerId,Vt=null,Kt.clear(),Bn(),Lt(),ie=performance.now()+500,h.mouseButtons.LEFT=En.ROTATE,h.mouseButtons.RIGHT=En.PAN,s.domElement.style.cursor=u.button===2?"ew-resize":"grabbing",u.__viewNavigation=!0,u.preventDefault(),u.button!==2){h.enabled=!0;return}jt(a.position.clone(),h.target.clone(),!1),In(u);let v=a.getWorldDirection(new A),E=qt?.point.clone()||C.ray.intersectPlane(new rn().setFromNormalAndCoplanarPoint(v,h.target),new A)||h.target.clone();kt={x:u.clientX,anchor:E,position:a.position.clone(),target:h.target.clone(),distance:a.position.distanceTo(h.target)},h.enabled=!1,s.domElement.setPointerCapture(u.pointerId),u.stopImmediatePropagation()},Qt=u=>{if(Ft!==u.pointerId||!kt)return;u.__viewNavigation=!0,u.preventDefault(),u.stopImmediatePropagation();let v=kt,E=si.clamp(v.distance*Math.exp(-(u.clientX-v.x)*.01),h.minDistance,h.maxDistance)/v.distance;jt(v.position.clone().sub(v.anchor).multiplyScalar(E).add(v.anchor),v.target.clone().sub(v.anchor).multiplyScalar(E).add(v.anchor),!1),gr()},fe=u=>{if(Ft!==u.pointerId)return;let v=!!kt;u.__viewNavigation=!0,Ft=null,kt=null,ie=performance.now()+400,h.mouseButtons.LEFT=null,h.mouseButtons.RIGHT=En.PAN,h.enabled=!Fe,window.KERN_TRANSFORM?.syncCursor(),s.domElement.style.cursor="",v&&(u.preventDefault(),u.stopImmediatePropagation(),s.domElement.hasPointerCapture(u.pointerId)&&s.domElement.releasePointerCapture(u.pointerId))};s.domElement.addEventListener("pointerdown",se,!0),s.domElement.addEventListener("pointermove",Qt,!0),s.domElement.addEventListener("pointerup",fe,!0),s.domElement.addEventListener("pointercancel",fe,!0),s.domElement.addEventListener("lostpointercapture",fe,!0);let ne="select",Zt=null,be=new Tn;be.userData.authorPreview=!0,o.add(be);let Be=u=>{if(Ft===u.pointerId||u.__viewNavigation||Fe||ne==="select"||u.button!==0)return;if(u.preventDefault(),u.stopImmediatePropagation(),ne==="bridge"){let Y=xi(u);Y&&window.KERN_BRIDGE_UI?.click(Y),Se(),_e.style.display="none";return}if(["door","connect","disconnect"].includes(ne)){let Y=on(u);if(!Y)return;ee(Y.floor,{preserveEditing:!0}),Zt={connection:!0,pointerId:u.pointerId,floor:Y.floor,begin:window.KERN_CONNECTION_3D.begin(ne,Y),last:Y,clientX:u.clientX,clientY:u.clientY},h.enabled=!1,s.domElement.setPointerCapture(u.pointerId);return}if(!window.KERN_AUTHORING_3D||(In(u),qt?.floor&&!(ne==="stair-route"&&window.KERN_ROUTE_UI?.getDraft().length)&&ee(qt.floor,{preserveEditing:!0}),!F))return;let v=t.levels.find(Y=>Y.id===(qt?.floor||F)),E=v.rooms.find(Y=>Y.id===qt?.room)||(ge?.isFloor?null:ge),O=(E?.z??v.z)+g.get(v.id).position.y,at=Ee(u,O);if(!at)return;if(ne==="stair-route"){window.KERN_ROUTE_UI?.addPoint(at,u,E?.id,v.id);return}let Z=window.KERN_AUTHORING_3D.begin(ne,qt?.floor||F,at,E?.id,window.KERN_AUTHORING_3D.width());if(Z.error){$e(Z);return}Zt={pointerId:u.pointerId,z:O,begin:Z,floor:F},h.enabled=!1,s.domElement.setPointerCapture(u.pointerId)},_n=u=>{if(Zt?.connection){if(u.pointerId!==Zt.pointerId)return;u.preventDefault(),u.stopImmediatePropagation(),Zt.last=on(u,Zt.floor)||Zt.last,Zt.moved=Math.hypot(u.clientX-Zt.clientX,u.clientY-Zt.clientY)>5,Ni(window.KERN_CONNECTION_3D.preview(ne,Zt.last,Zt.moved?Zt.begin.hit:Zt.begin.pending));return}if(!Zt){if(!Fe&&Ft===null&&ne==="bridge"){let E=xi(u),O=E&&window.KERN_BRIDGE_UI?.preview(E);O?$e(O):(Se(),_e.style.display="none");return}if(!Fe&&Ft===null&&["door","connect","disconnect"].includes(ne)){let E=on(u);E&&Ni(window.KERN_CONNECTION_3D.preview(ne,E));return}if(!Fe&&Ft===null&&F&&["edge-steps","stair-route"].includes(ne)){In(u);let E=t.levels.find(Y=>Y.id===(qt?.floor||F)),O=E.rooms.find(Y=>Y.id===qt?.room),at=(O?.z??E.z)+g.get(E.id).position.y,Z=Ee(u,at);if(Se(),!Z)return;if(ne==="edge-steps"){let Y=window.KERN_AUTHORING_3D.begin("edge-steps",F,Z,O?.id,window.KERN_AUTHORING_3D.width());if(!Y.error){let V=new Ze(new Te().setFromPoints([Y.edge.a,Y.edge.b].map(it=>new A(it[0],at+.1,it[1]))),ws);V.renderOrder=18,be.add(V)}}else{let Y=window.KERN_ROUTE_UI?.preview(Z,u,O?.id,E.id);if(Y){Y.detail&&$e(Y);let V=window.snapSize?.()||.25,it=new bt(new kn(V,V),bo);it.rotation.x=-Math.PI/2,it.position.set(Y.point[0],at+.025,Y.point[1]),it.renderOrder=17,be.add(it);let W=new bt(new ti(.07,10,8),Gn);W.position.set(Y.point[0],at+.1,Y.point[1]),W.renderOrder=19,be.add(W)}}}return}if(u.pointerId!==Zt.pointerId)return;if(u.preventDefault(),u.stopImmediatePropagation(),Zt.floor!==F){Wt();return}let v=Ee(u,Zt.z);v&&(Zt.next=window.KERN_AUTHORING_3D.candidate(Zt.begin,v,u.ctrlKey),$e(Zt.next))},xn=u=>{if(!Zt||u.pointerId!==Zt.pointerId)return;if(u.preventDefault(),u.stopImmediatePropagation(),Zt.connection){let E=Zt;Zt=null,Se(),_e.style.display="none",h.enabled=!0,s.domElement.hasPointerCapture(u.pointerId)&&s.domElement.releasePointerCapture(u.pointerId),window.KERN_CONNECTION_3D.finish(E.begin,E.last,E.moved);return}let v=Zt.next;Wt(),v&&!v.error&&(Wt(!0),window.KERN_AUTHORING_3D.finish(v))};s.domElement.addEventListener("pointerdown",Be,!0),s.domElement.addEventListener("pointermove",_n,!0),s.domElement.addEventListener("pointerup",xn,!0);let en=u=>{!n?.busy()&&(!Zt||Zt.pointerId===u.pointerId)&&Wt(!0)};s.domElement.addEventListener("pointercancel",en,!0);let an=u=>{Zt?.pointerId===u.pointerId&&Wt()};s.domElement.addEventListener("lostpointercapture",an,!0);let Ts=u=>{Ft===u.pointerId||u.__viewNavigation||n?.down(u)&&jt(a.position.clone(),h.target.clone(),!1)},ri=u=>n?.move(u),Mh=u=>n?.up(u),wo=u=>{(n?.cancel(u.pointerId)||n?.dragging())&&(u.preventDefault(),u.stopImmediatePropagation())};s.domElement.addEventListener("pointerdown",Ts,!0),s.domElement.addEventListener("pointermove",ri,!0),s.domElement.addEventListener("pointerup",Mh,!0),s.domElement.addEventListener("pointercancel",wo,!0),s.domElement.addEventListener("lostpointercapture",wo,!0);let Sh=u=>{if(Ft===u.pointerId||u.__viewNavigation||Fe||u.button!==0||!ge)return;let v=Ut(u,ge),E=C.intersectObjects(we.children,!1).find(at=>at.object.userData.edge);if(!E||(Number.isFinite(E.object.userData.routeZ)&&(v=Ut(u,{...ge,z:E.object.userData.routeZ+(E.object.userData.displayOffset??g.get(ge.floor).position.y)-g.get(ge.floor).position.y})||E.point.clone()),v||(v=E.point.clone()),In(u),E.object.userData.edge?.startsWith("route-")&&window.KERN_ROUTE_UI?.selectPoint(Number(E.object.userData.edge.split("-")[2])),window.KERN_ROTATE?.active()&&(!E||!window.KERN_ROTATE.eligibleRoom(ge))))return;let O=null;if(E?.object.userData.edge?.startsWith("rotate-")){let at=Number(E.object.userData.edge.slice(7));if(O=window.KERN_ROTATE.pivotFor(ge),!O||O.index===at){window.KERN_ROTATE.choosePivot(ge,"rooms",at),vt(ge),u.preventDefault(),u.stopImmediatePropagation();return}}Mt={rotationPivot:O,start:v.clone(),original:JSON.parse(JSON.stringify(ge)),next:JSON.parse(JSON.stringify(ge)),routeZ:E?.object.userData.routeZ,planeZ:Number.isFinite(E?.object.userData.routeZ)?E.object.userData.routeZ+(E.object.userData.displayOffset??g.get(ge.floor).position.y)-g.get(ge.floor).position.y:ge.z,edge:E?.object.userData.edge==="move"?null:E?.object.userData.edge,clientY:u.clientY,baseHeight:window.KERN_ELEVATION_UI?.handleZ(ge.floor,ge.id)??ge.z,baseGroupY:g.get(ge.floor).position.y,pointerId:u.pointerId},h.enabled=!1,u.preventDefault(),u.stopImmediatePropagation(),s.domElement.setPointerCapture(u.pointerId)},Eh=u=>{if(!Mt||Mt.pointerId!==u.pointerId)return;let v=Ut(u,{...Mt.original,z:Mt.planeZ??Mt.original.z})||(Mt.edge==="elevate"||Mt.edge?.startsWith("route-height")?Mt.start:null);if(!v)return;if(Mt.edge?.startsWith("route-landing-")){let V=Mt.original,it=JSON.parse(JSON.stringify(V)),W=Mt.edge.split("-"),St=Number(W[2]),At=Number(W[3]),zt=it.routeStair.nodes[St].landing[At],$t=window.KERN_ROUTE_STAIRS.point(V,zt),re=u.ctrlKey?0:window.snapSize?.()??.25,pe=$t[0]+v.x-Mt.start.x,le=$t[1]+v.z-Mt.start.z;Object.assign(zt,window.KERN_ROUTE_STAIRS.local(V,[re?Math.round(pe/re)*re:pe,re?Math.round(le/re)*re:le])),window.KERN_ROUTE_STAIRS.simplePolygon(it.routeStair.nodes[St].landing.map(me=>window.KERN_ROUTE_STAIRS.point(it,me)))&&(Mt.next=it,vt(it)),u.preventDefault(),u.stopImmediatePropagation();return}if(Mt.edge?.startsWith("route-")){let V=Mt.original,it=JSON.parse(JSON.stringify(V)),W=it.routeStair,St=Number(Mt.edge.split("-").at(-1)),At=W.nodes[St];if(Mt.edge.startsWith("route-height")){let $t=2*a.position.distanceTo(new A(V.x+V.w/2,V.z+Mt.baseGroupY,V.y+V.h/2))*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),re=Mt.routeZ+(Mt.clientY-u.clientY)*$t,pe=u.ctrlKey?re:Math.round(re*4)/4;window.KERN_ROUTE_STAIRS.setHeight(it,St,pe,window.kernPlanner?.getPlan())}else{let $t=window.KERN_ROUTE_STAIRS.point(V,At),re=u.ctrlKey?0:window.snapSize?.()??.25,pe=$t[0]+v.x-Mt.start.x,le=$t[1]+v.z-Mt.start.z,me=window.KERN_ROUTE_STAIRS.snapNode(it,St,[pe,le],re,u.ctrlKey,u.shiftKey);window.KERN_ROUTE_STAIRS.moveNode(it,St,me,window.kernPlanner?.getPlan()),window.KERN_ROUTE_UI?.attachEndpoint(it,St,me)}Mt.next=it,vt(it);let zt=window.kernPlanner?.getPlan();if(zt){let $t=zt.floors[V.floor]?.rooms.find(re=>re.id===V.id);if($t){Object.assign($t,it);let re=window.KERN_ROUTE_STAIRS.build(zt,V.floor,V.id);$e({detail:re,fid:V.floor,summary:re.warnings[0]?.text||"Editable stair route"})}}u.preventDefault(),u.stopImmediatePropagation();return}if(Mt.edge==="elevate"){let V=Mt.original,it=2*a.position.distanceTo(new A(V.x+V.w/2,V.z+Mt.baseGroupY,V.y+V.h/2))*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),W=Mt.baseHeight+(Mt.clientY-u.clientY)*it,St=u.ctrlKey?0:.25,At=Math.max(-150,Math.min(150,St?Math.round(W/St)*St:W));if(Mt.next={...V,z:At,__elevation:!0},_e.style.display="block",_e.style.top="auto",_e.style.bottom="18px",_e.style.left="18px",_e.textContent=(V.isFloor?"Floor":"Surface")+" "+At.toFixed(2)+" m \xB7 "+(u.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"),g.get(V.floor).position.y=Mt.baseGroupY,vt(Mt.next),V.isFloor)g.get(V.floor).position.y=Mt.baseGroupY+At-V.z;else{let _r=window.KERN_ELEVATION_UI?.preview(V.floor,V.id,At),oi=_r&&window.KERN_ELEVATIONS?.build(_r,V.floor,V.id),df=oi?[...oi.flights.flatMap(ln=>ln.treads.map(yi=>({...yi.rect,polygon:yi.polygon,z:yi.z-.12,height:.12}))),...oi.landings.map(ln=>({...ln.rect,polygon:ln.polygon,z:ln.z-.15,height:.15}))]:[{x:V.x,y:V.y,w:V.w,h:V.h,z:At-.18,height:.18}];for(let ln of df){let yi,xr;if(!oi&&V.shape){let ff=new di(window.KERN_SHAPES.points(V).map(Hh=>new ft(Hh[0],-Hh[1])));yi=new us(ff,{depth:ln.height,bevelEnabled:!1,steps:1}),yi.rotateX(-Math.PI/2),xr=new bt(yi,Fn),xr.position.y=ln.z+Mt.baseGroupY}else yi=new Ie(ln.w,ln.height,ln.h),xr=new bt(yi,Fn),xr.position.set(ln.x+ln.w/2,ln.z+ln.height/2+Mt.baseGroupY,ln.y+ln.h/2);we.add(xr)}oi&&(_e.textContent=At.toFixed(2)+" m \xB7 "+oi.segments[0].risers+" rises \xD7 "+(oi.metrics.riserMax*100).toFixed(1)+" cm \xB7 "+(u.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"))}let zt=V.x-.25,$t=V.y+V.h+.25,re=Mt.baseHeight+Mt.baseGroupY,pe=At+Mt.baseGroupY,le=[new A(zt,re,$t),new A(zt,pe,$t)],me=new Ze(new Te().setFromPoints(le),Li);me.computeLineDistances(),me.renderOrder=16,we.add(me);for(let _r of[re,pe]){let oi=new Ze(new Te().setFromPoints([new A(zt-.18,_r,$t),new A(zt+.18,_r,$t)]),Gn);oi.renderOrder=16,we.add(oi)}let Ge=new A(zt,(re+pe)/2,$t).project(a),ke=s.domElement.getBoundingClientRect(),Yn=At-Mt.baseHeight;_e.style.bottom="auto",_e.style.left=Math.min(Math.max(8,(Ge.x+1)*ke.width/2+12),Math.max(8,ke.width-260))+"px",_e.style.top=Math.min(Math.max(8,(1-Ge.y)*ke.height/2),Math.max(8,ke.height-60))+"px",_e.textContent=(Yn>0?"+":"")+Yn.toFixed(2)+" m \xB7 "+_e.textContent,u.preventDefault(),u.stopImmediatePropagation();return}let E=Mt.original,O=u.ctrlKey?0:window.snapSize?.()??.5,at=O?Math.round((v.x-Mt.start.x)/O)*O:v.x-Mt.start.x,Z=O?Math.round((v.z-Mt.start.z)/O)*O:v.z-Mt.start.z,Y={...E};if(Mt.edge?.startsWith("rotate-")){let V=Mt.rotationPivot||{x:E.x+E.w/2,y:E.y+E.h/2},it=Math.atan2(Mt.start.z-V.y,Mt.start.x-V.x),W=window.KERN_ROTATE.delta(E,(Math.atan2(v.z-V.y,v.x-V.x)-it)*180/Math.PI,u.shiftKey);window.KERN_SHAPES.rotate(Y,W,V),Mt.rotationFeedback={center:V,start:it,degrees:W,cursor:v.clone()}}else if(Mt.edge)Mt.edge.includes("e")&&(Y.w=Math.max(1,E.w+at)),Mt.edge.includes("s")&&(Y.h=Math.max(1,E.h+Z)),Mt.edge.includes("w")&&(Y.x=Math.min(E.x+E.w-1,E.x+at),Y.w=E.x+E.w-Y.x),Mt.edge.includes("n")&&(Y.y=Math.min(E.y+E.h-1,E.y+Z),Y.h=E.y+E.h-Y.y);else{Y.x+=v.x-Mt.start.x,Y.y+=v.z-Mt.start.z;let V=18*a.position.distanceTo(v)*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),it=u.ctrlKey&&u.shiftKey&&!u.altKey&&window.KERN_ROOM_SNAP?.translation(Y,t.levels.find(W=>W.id===E.floor).rooms,new Set([E.id]),V);Mt.snap=it||null,it?(Y.x+=it.dx,Y.y+=it.dy):u.ctrlKey||(Y.x=E.x+at,Y.y=E.y+Z)}if(Mt.edge&&!Mt.edge.startsWith("rotate-")&&(u.shiftKey&&!u.ctrlKey||u.altKey)&&window.KERN_TRANSFORM&&Object.assign(Y,window.KERN_TRANSFORM.resize(E,Mt.edge,at,Z,{...u,shiftKey:u.shiftKey&&!u.ctrlKey,altKey:u.altKey})),Mt.edge&&!Mt.edge.startsWith("rotate-")&&u.shiftKey&&u.ctrlKey&&!u.altKey){let V=Mt.edge,it={x:E.x+(V.includes("e")?E.w:0)+v.x-Mt.start.x,y:E.y+(V.includes("s")?E.h:0)+v.z-Mt.start.z},W=18*a.position.distanceTo(v)*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),St=window.KERN_ROOM_SNAP?.point(it,t.levels.find(At=>At.id===E.floor).rooms,new Set([E.id]),W);Mt.snap=St||null,St&&(V.includes("e")&&(Y.w=Math.max(1,St.x-E.x)),V.includes("s")&&(Y.h=Math.max(1,St.y-E.y)),V.includes("w")&&(Y.x=Math.min(St.x,E.x+E.w-1),Y.w=E.x+E.w-Y.x),V.includes("n")&&(Y.y=Math.min(St.y,E.y+E.h-1),Y.h=E.y+E.h-Y.y))}if(E.shape&&Mt.edge&&!Mt.edge.startsWith("rotate-")&&window.KERN_TRANSFORM?.orientedResize&&Object.assign(Y,window.KERN_TRANSFORM.orientedResize(E,Mt.edge,v.x-Mt.start.x,v.z-Mt.start.z,u)),Mt.next=Y,vt(Y),Mt.rotationFeedback){let V=Mt.rotationFeedback,it=V.center,W=Math.hypot(V.cursor.x-it.x,V.cursor.z-it.y),St=Math.min(W,6)*.8,At=V.start+V.degrees*Math.PI/180,zt=Y.z+Mt.baseGroupY+.12,$t=[];for(let le=0,me=Math.max(2,Math.min(160,Math.ceil(Math.abs(V.degrees)/5)));le<=me;le++){let Ge=V.start+(At-V.start)*le/me;$t.push(new A(it.x+Math.cos(Ge)*St,zt,it.y+Math.sin(Ge)*St))}let re=[new A(it.x+Math.cos(V.start)*W,zt,it.y+Math.sin(V.start)*W),new A(it.x,zt,it.y),new A(it.x+Math.cos(At)*W,zt,it.y+Math.sin(At)*W)];for(let le of[$t,re]){let me=new Ze(new Te().setFromPoints(le),Li);me.computeLineDistances(),me.renderOrder=15,we.add(me)}let pe=s.domElement.getBoundingClientRect();_e.style.display="block",_e.style.bottom="auto",_e.style.left=Math.min(Math.max(8,u.clientX-pe.left+16),Math.max(8,pe.width-130))+"px",_e.style.top=Math.max(8,u.clientY-pe.top-38)+"px",_e.textContent=(V.degrees>0?"+":"")+V.degrees.toFixed(1)+"\xB0"}if(Mt.snap)for(let V of Mt.snap.guides?.length?Mt.snap.guides:[Mt.snap]){let it=Y.z+g.get(Y.floor).position.y+.1,W=V.edge?[V.edge.a,V.edge.b]:[[V.x-.2,V.y],[V.x+.2,V.y],[V.x,V.y],[V.x,V.y-.2],[V.x,V.y+.2]],St=new Ze(new Te().setFromPoints(W.map(At=>new A(At[0],it,At[1]))),ws);St.renderOrder=12,we.add(St)}u.preventDefault(),u.stopImmediatePropagation()},bh=u=>{if(!Mt||Mt.pointerId!==u.pointerId)return;let v=Mt;Mt=null,Se(),g.get(v.original.floor).position.y=v.baseGroupY,_e.style.display="none",h.enabled=!0,u.preventDefault(),u.stopImmediatePropagation(),s.domElement.hasPointerCapture(u.pointerId)&&s.domElement.releasePointerCapture(u.pointerId),v.next.__elevation||["x","y","w","h"].some(E=>v.next[E]!==v.original[E])||JSON.stringify(v.next.shape)!==JSON.stringify(v.original.shape)||JSON.stringify(v.next.routeStair)!==JSON.stringify(v.original.routeStair)?e.onRoomEdit?.(v.original.floor,v.original.id,v.next):v.edge?.startsWith("rotate-")&&(window.KERN_ROTATE.choosePivot(v.original,"rooms",Number(v.edge.slice(7))),vt(v.original))},Xn=()=>{Se(),Mt&&(g.get(Mt.original.floor).position.y=Mt.baseGroupY),_e.style.display="none",Mt=null,h.enabled=!Fe,ge&&vt(ge)};s.domElement.addEventListener("pointerdown",Sh,!0),s.domElement.addEventListener("pointermove",Eh,!0),s.domElement.addEventListener("pointerup",bh,!0),s.domElement.addEventListener("pointercancel",Xn,!0),s.domElement.addEventListener("lostpointercapture",Xn,!0);let yn=null,As=document.createElement("div");As.style.cssText="position:absolute;border:1px solid #79b8ff;background:#79b8ff20;pointer-events:none;display:none;z-index:25",i.append(As);let Bn=()=>{yn=null,As.style.display="none"},wh=u=>{Fe||Ft!==null||u.altKey||u.button!==0||Mt||ne!=="select"||(yn={id:u.pointerId,x:u.clientX,y:u.clientY,shift:u.shiftKey,subtract:u.ctrlKey||u.metaKey,previous:Ue?.ids||[]})},Th=u=>{if(!yn||yn.id!==u.pointerId||Math.hypot(u.clientX-yn.x,u.clientY-yn.y)<5)return;let v=s.domElement.getBoundingClientRect();yn.moved=!0,As.style.display="block",Object.assign(As.style,{left:Math.min(u.clientX,yn.x)-v.left+"px",top:Math.min(u.clientY,yn.y)-v.top+"px",width:Math.abs(u.clientX-yn.x)+"px",height:Math.abs(u.clientY-yn.y)+"px"})},Ah=u=>{if(!yn||yn.id!==u.pointerId)return;let v=yn;if(Bn(),!v.moved)return;u.preventDefault(),Kt.clear(),Vt=null;let E=s.domElement.getBoundingClientRect(),O=Math.min(v.x,u.clientX),at=Math.max(v.x,u.clientX),Z=Math.min(v.y,u.clientY),Y=Math.max(v.y,u.clientY),V=F||xt,it=t.levels.find(At=>At.id===V);if(!it)return;a.updateMatrixWorld(!0);let W=it.rooms.filter(At=>{let zt=(window.KERN_SHAPES?.points(At)||[[At.x,At.y],[At.x+At.w,At.y],[At.x+At.w,At.y+At.h],[At.x,At.y+At.h]]).flatMap(pe=>[At.z,At.z+(At.height||0)].map(le=>new A(pe[0],le+g.get(V).position.y,pe[1]).project(a))).filter(pe=>pe.z>=-1&&pe.z<=1);if(!zt.length)return!1;let $t=zt.map(pe=>(pe.x+1)*E.width/2+E.left),re=zt.map(pe=>(1-pe.y)*E.height/2+E.top);return Math.min(...$t)<=at&&Math.max(...$t)>=O&&Math.min(...re)<=Y&&Math.max(...re)>=Z}).map(At=>At.id),St=v.subtract?v.previous.filter(At=>!W.includes(At)):v.shift?[...new Set([...v.previous,...W])]:W;F||ee(V,{preserveEditing:!0}),w(V,St),e.onRoomsSelect?.(V,St)};s.domElement.addEventListener("pointerdown",wh,!0),s.domElement.addEventListener("pointermove",Th,!0),s.domElement.addEventListener("pointerup",Ah,!0),s.domElement.addEventListener("pointercancel",Bn,!0),s.domElement.addEventListener("lostpointercapture",Bn,!0);let af=u=>{Fe||Ft===u.pointerId||u.__viewNavigation||(Kt.add(u.pointerId),Kt.size>1?Vt=null:Vt=u.button===0?{id:u.pointerId,x:u.clientX,y:u.clientY,moved:!1}:null)},lf=u=>{if(!Fe){if(Vt&&Math.hypot(u.clientX-Vt.x,u.clientY-Vt.y)>5&&(Vt.moved=!0),Kt.size||u.buttons){s.domElement.title="",Bt(null);return}Bt(In(u))}},cf=u=>{if(Fe||u.__viewNavigation)return;let v=Vt&&u.pointerId===Vt.id&&!Vt.moved&&Math.hypot(u.clientX-Vt.x,u.clientY-Vt.y)<=5&&Kt.size===1;if(Kt.delete(u.pointerId),Vt=null,v){let E=In(u);if(E){if(e.onFloorSelect){let at=F===E&&j.size===1&&j.has(E)&&!qt?.floorSurface;e.onFloorSelect(E,{additive:!!u.shiftKey}),!u.shiftKey&&at&&(qt?.door?e.onDoorSelect?.(E,qt.door):qt?.room&&e.onRoomSelect?.(E,qt.room));return}let O=qt?.floorSurface||qt?.roomLabel&&(u.shiftKey||F!==E||!j.has(E));u.shiftKey&&(O||!qt?.room&&!qt?.door)?e.onFloorScopeToggle?e.onFloorScopeToggle(E):Pe(E,!0):O?ee(E):(ee(E,{preserveEditing:!!qt?.room||!!qt?.door}),qt?.door?e.onDoorSelect?.(E,qt.door):qt?.room&&e.onRoomSelect?.(E,qt.room))}}},Hl=()=>{n?.cancel(),Bn(),Ft=null,kt=null,s.domElement.style.cursor="",h.mouseButtons.LEFT=null,h.mouseButtons.RIGHT=En.PAN,Wt(!0),Xn(),Kt.clear(),Vt=null,ht=!1,Lt(),Bt(null)};window.addEventListener("blur",Hl);let hf=r;r=()=>{window.removeEventListener("blur",Hl),hf()};let Rh={pointerdown:af,pointermove:lf,pointerup:cf,pointercancel:u=>{Kt.delete(u.pointerId),Vt=null,Bt(null)},pointerleave:()=>{Kt.size||(s.domElement.title="",Bt(null))},keydown:u=>{if(!window.KERN_PRIMITIVE_UI?.handleKey?.(u)){if(u.key==="Escape"&&yn){Bn(),Vt=null,Kt.clear(),u.preventDefault(),u.stopPropagation();return}if(u.key==="Escape"&&(Zt||ne!=="select")){u.preventDefault(),u.stopImmediatePropagation(),Wt(!0);return}if(u.key==="Escape"&&Mt){u.preventDefault(),u.stopImmediatePropagation(),Xn();return}u.key==="Escape"&&F?(u.preventDefault(),u.stopPropagation(),dt()):F&&["ArrowUp","ArrowDown"].includes(u.key)&&(u.preventDefault(),u.stopPropagation(),Un(u.key==="ArrowUp"?1:-1))}},contextmenu:u=>{u.preventDefault(),!(Fe||u.altKey||performance.now()<ie)&&(In(u),qt&&e.onContext?.({floor:qt.floor,room:qt.room,x:qt.point.x,y:qt.point.z,z:t.levels.find(v=>v.id===qt.floor)?.rooms.find(v=>v.id===qt.room)?.z??t.levels.find(v=>v.id===qt.floor)?.z??qt.point.y,clientX:u.clientX,clientY:u.clientY}))}};for(let[u,v]of Object.entries(Rh))s.domElement.addEventListener(u,v);let Ch=()=>{if(_t)return;let u=Math.max(1,i.clientWidth),v=Math.max(1,i.clientHeight);s.setSize(u,v,!1),a.aspect=u/v,a.updateProjectionMatrix(),yt=""},Ih=()=>{Lt(),ht=!0},Ph=()=>{ht=!1,ot=performance.now(),lt=nt};h.addEventListener("start",Ih),h.addEventListener("end",Ph);let Dh=new ResizeObserver(Ch),Lh=u=>{u.preventDefault(),e.onContextLost?.()};s.domElement.addEventListener("webglcontextlost",Lh);let Fe=!1,Qi=!1,wn=null,Rs=null,To=0,Nh=0,Uh=!0,Ui=new lo(16773074,55,35,Math.PI/7,.65,1.3);Ui.visible=!1,o.add(Ui),o.add(Ui.target);let Fi=new Tn,Fh=[...b?.rooms||[],...t.levels.filter(u=>u.id!==b?.id).flatMap(u=>u.rooms.filter(v=>v.groundSurface||v.localSteps&&t.stairs.some(E=>E.localSteps&&E.floorId===u.id&&E.roomId===v.id&&Math.min(...E.stops.map(O=>O.z))<=N+.2&&Math.max(...E.stops.map(O=>O.z))>=N-.2)))],Oh={x:L-(J+50)/2,y:U-(J+50)/2,w:J+50,h:J+50};if(t.shapeAware&&window.KERN_SHAPES){let u=window.KERN_SHAPES,v=u.difference(u.multi(Oh),Fh.filter(E=>E.groundSurface||E.localSteps||!["courtyard","terrace"].includes(E.type)).map(E=>E.routeStair&&t.stairs.find(O=>O.roomId===E.id)?.footprintGeometry||u.multi(E)));for(let E of v){let O=new di(E[0].map(Z=>new ft(Z[0],-Z[1])));for(let Z of E.slice(1))O.holes.push(new qi(Z.map(Y=>new ft(Y[0],-Y[1]))));let at=new bt(new so(O),P("#535c62"));at.rotation.x=-Math.PI/2,at.position.y=N-.02,Fi.add(at)}}else for(let u of window.BuildingPreviewGeometry.subtractAll(Oh,Fh.filter(v=>v.groundSurface||v.localSteps||!["courtyard","terrace"].includes(v.type)))){let v=new bt(new kn(u.w,u.h),P("#535c62"));v.rotation.x=-Math.PI/2,v.position.set(u.x+u.w/2,N-.02,u.y+u.h/2),Fi.add(v)}return Fi.visible=!1,o.add(Fi),n=sf({scene:o,camera:a,renderer:s,controls:h,groups:g,data:t,enabled:()=>!Fe&&ne==="select",canNavigate:()=>!Fe,surfaceHit:u=>(In(u,{physicalOnly:!0}),qt),onSelect:(u,v,E)=>window.KERN_PRIMITIVE_UI?.select(u,v,E),onEdit:(u,v,E,O)=>window.KERN_PRIMITIVE_UI?.edit(u,v,E,O)}),r=zh,Dh.observe(i),Ch(),Dt(),e.viewState?Vl(e.viewState):Gt(),s.setAnimationLoop(()=>{if(!_t){if(n?.sync(),Fe){Bh(),wn?.fly&&mt(),It(),s.render(o,a);return}Jt()||h.update(),gr(),mt(),It(),s.render(o,a)}}),{primitivePlacement:(u,v,E)=>n?.placement(u,v,E),previewWall:(u,v)=>n?.previewWall(u,v),setPrimitiveMode:u=>n?.setMode(u),cancelPrimitive:()=>n?.cancel(),primitiveDragging:()=>n?.dragging(),cameraPose(){let u=a.getWorldDirection(new A);return{x:a.position.x,y:a.position.z,z:a.position.y,yaw:Math.atan2(-u.x,-u.z),pitch:Math.asin(Math.max(-1,Math.min(1,u.y))),fov:a.fov,roll:new Sn().setFromQuaternion(a.quaternion,"YXZ").z}},setAuthoringMode:He,cancelAuthoring:()=>Wt(!0),cancelEdit:Xn,getOrbitViewState(){return Fe&&Rs?JSON.parse(JSON.stringify(Rs)):kl()},applyFloorState:z,selectRoom:Wn,selectRooms:w,selectObjects:$,selectFloors:Q,setEditableFloors:Xt,activateFloor:ee,chooseFloor:Pe,frameSelection:k,setWalk:uf,fit:Gt,dispose:zh,showAll:dt,isolate:Yt,hoverFloor:Bt,adjacentFloor:Un,getViewState:kl,getZoom:Tt,restoreViewState:Vl,syncActiveFloor:Re,zoomBy(u){if(!Number.isFinite(u)||u<=0)return;let v=a.position.clone().sub(h.target),E=si.clamp(v.length()*u,h.minDistance,h.maxDistance);jt(h.target.clone().add(v.normalize().multiplyScalar(E)),h.target,!1)},setGrid(u){gt=!!u,rt.visible=gt},getFocusedFloor(){return F},setFloor(u,v){if(e.onFloorVisibility)return e.onFloorVisibility({id:u,visible:v});let E=g.get(u);if(E){if(Lt(),E.visible=!!v,F===u&&!v&&(F=H()[0]||null),!F&&v&&(F=u),!v&&ge?.floor===u){let O=ge.isFloor?Ue:null;Wn(null,null),O&&(Ue=O)}!v&&Ue?.objects&&$(Ue.objects.filter(O=>O.floor!==u)),Bt(null),Dt(),mt(!0),pt("visibility")}},setExplode(u){let v=Math.max(0,Math.min(12,Number(u)||0));if(v===X)return;let E=wt(xt);X=v,Bt(null),Dt(),F?Et(F,!!D):(Lt(),ut+=wt(xt)-E),mt(!0)},setSlabs(u){te=!!u,Dt(),mt(!0)},setCeilings(u){Pt=!!u,Dt(),mt(!0)},setWalls(u){Rt=!!u,Dt(),mt(!0)},setCutaway(u){oe=!!u,Dt(),mt(!0)},setCutHeight(u){let v=Number(u);Number.isFinite(v)&&(ue=Math.max(.4,Math.min(2.4,v)),Dt(),mt(!0))},setLabels(u){ae=!!u,Dt(),mt(!0)},setXray(u){nt=!!u,Dt(),mt(!0)},png(){return mt(!0),s.render(o,a),new Promise((u,v)=>s.domElement.toBlob(E=>E?u(E):v(Error("Could not create this image.")),"image/png"))}}}catch(o){try{r()}catch{}throw o}}window.Building3D={mount:Cx,version:"180"};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
