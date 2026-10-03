(()=>{var Sn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pu=0,wc=1,mu=2;var Tc=1,gu=2,li=3,Mi=0,En=1,pn=2,bi=0,ns=1,Ac=2,Rc=3,Cc=4,_u=5,Bi=100,xu=101,yu=102,vu=103,Mu=104,Su=200,Eu=201,bu=202,wu=203,$o=204,jo=205,Tu=206,Au=207,Ru=208,Cu=209,Pu=210,Iu=211,Du=212,Lu=213,Nu=214,Da=0,La=1,Na=2,is=3,Ua=4,Fa=5,Oa=6,Ba=7,Pc=0,Uu=1,Fu=2,wi=0,Ou=1,Bu=2,zu=3,Hu=4,ku=5,Vu=6,Gu=7;var Ic=300,ds=301,fs=302,za=303,Ha=304,co=306,Qo=1e3,Oi=1001,ta=1002,Tn=1003,Wu=1004;var ho=1005;var qn=1006,ka=1007;var Wi=1008;var $n=1009,Dc=1010,Lc=1011,ir=1012,Va=1013,Xi=1014,jn=1015,sr=1016,Ga=1017,Wa=1018,rr=1020,Nc=35902,Uc=35899,Fc=1021,Oc=1022,zn=1023,Gs=1026,or=1027,Xa=1028,Ya=1029,Bc=1030,qa=1031;var Za=1033,uo=33776,fo=33777,po=33778,mo=33779,Ka=35840,Ja=35841,$a=35842,ja=35843,Qa=36196,tl=37492,el=37496,nl=37808,il=37809,sl=37810,rl=37811,ol=37812,al=37813,ll=37814,cl=37815,hl=37816,ul=37817,dl=37818,fl=37819,pl=37820,ml=37821,gl=36492,_l=36494,xl=36495,yl=36283,vl=36284,Ml=36285,Sl=36286;var Ir=2300,ea=2301,Jo=2302,fc=2400,pc=2401,mc=2402;var Xu=3200,Yu=3201;var zc=0,qu=1,Ti="",tn="srgb",ss="srgb-linear",Dr="linear",Pe="srgb";var es=7680;var gc=519,Zu=512,Ku=513,Ju=514,Hc=515,$u=516,ju=517,Qu=518,td=519,na=35044;var kc="300 es",Yn=2e3,Lr=2001;var ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nh=1234567,Ar=Math.PI/180,rs=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Vc(i,t){return(i%t+t)%t}function of(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function af(i,t,e){return i!==t?(e-i)/(t-i):0}function Rr(i,t,e){return(1-e)*i+e*t}function lf(i,t,e,n){return Rr(i,t,1-Math.exp(-e*n))}function cf(i,t=1){return t-Math.abs(Vc(i,t*2)-t)}function hf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function uf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function df(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ff(i,t){return i+Math.random()*(t-i)}function pf(i){return i*(.5-Math.random())}function mf(i){i!==void 0&&(Nh=i);let t=Nh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gf(i){return i*Ar}function _f(i){return i*rs}function xf(i){return(i&i-1)===0&&i!==0}function yf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),p=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ci={DEG2RAD:Ar,RAD2DEG:rs,generateUUID:ei,clamp:me,euclideanModulo:Vc,mapLinear:of,inverseLerp:af,lerp:Rr,damp:lf,pingpong:cf,smoothstep:hf,smootherstep:uf,randInt:df,randFloat:ff,randFloatSpread:pf,seededRandom:mf,degToRad:gf,radToDeg:_f,isPowerOfTwo:xf,ceilPowerOfTwo:yf,floorPowerOfTwo:vf,setQuaternionFromProperEuler:Mf,normalize:Ce,denormalize:Xn},mt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],p=r[o+0],m=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=y;return}if(d!==y||l!==p||c!==m||h!==g){let _=1-a,f=l*p+c*m+h*g+d*y,R=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let I=Math.sqrt(S),P=Math.atan2(I,f*R);_=Math.sin(_*P)/I,a=Math.sin(a*P)/I}let v=a*R;if(l=l*_+p*v,c=c*_+m*v,h=h*_+g*v,d=d*_+y*v,_===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*m-c*p,t[e+1]=l*g+h*p+c*d-a*m,t[e+2]=c*g+h*m+a*p-l*d,t[e+3]=h*g-a*d-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*d+c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d-p*m*g;break;case"YXZ":this._x=p*h*d+c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d+p*m*g;break;case"ZXY":this._x=p*h*d-c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d-p*m*g;break;case"ZYX":this._x=p*h*d-c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d+p*m*g;break;case"YZX":this._x=p*h*d+c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d-p*m*g;break;case"XZY":this._x=p*h*d-c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],p=n+a+d;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hl.copy(this).projectOnVector(t),this.sub(Hl)}reflect(t){return this.sub(Hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hl=new A,Uh=new We,he=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],m=n[5],g=n[8],y=s[0],_=s[3],f=s[6],R=s[1],S=s[4],v=s[7],I=s[2],P=s[5],L=s[8];return r[0]=o*y+a*R+l*I,r[3]=o*_+a*S+l*P,r[6]=o*f+a*v+l*L,r[1]=c*y+h*R+d*I,r[4]=c*_+h*S+d*P,r[7]=c*f+h*v+d*L,r[2]=p*y+m*R+g*I,r[5]=p*_+m*S+g*P,r[8]=p*f+m*v+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,p=a*l-h*r,m=c*r-o*l,g=e*d+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=p*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=m*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kl.makeScale(t,e)),this}rotate(t){return this.premultiply(kl.makeRotation(-t)),this}translate(t,e){return this.premultiply(kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kl=new he;function Gc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ed(){let i=Nr("canvas");return i.style.display="block",i}var Fh={};function Ws(i){i in Fh||(Fh[i]=!0,console.warn(i))}function nd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Oh=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sf(){let i={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Pe&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pe&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ws("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ws("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ss]:{primaries:t,whitePoint:n,transfer:Dr,toXYZ:Oh,fromXYZ:Bh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:Pe,toXYZ:Oh,fromXYZ:Bh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}var Ee=Sf();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ws,ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ws===void 0&&(ws=Nr("canvas")),ws.width=t.width,ws.height=t.height;let s=ws.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ws}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ef=0,Xs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vl(s[o].image)):r.push(Vl(s[o]))}else r=Vl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bf=0,Gl=new A,vn=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Oi,s=Oi,r=qn,o=Wi,a=zn,l=$n,c=i.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=ei(),this.name="",this.source=new Xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qo:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qo:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Ic;vn.DEFAULT_ANISOTROPY=1;var Xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],y=l[2],_=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-y)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+y)<.1&&Math.abs(g+_)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(m+1)/2,I=(f+1)/2,P=(h+p)/4,L=(d+y)/4,U=(g+_)/4;return S>v&&S>I?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=P/n,r=L/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=P/s,r=U/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=L/r,s=U/r),this.set(n,s,r,e),this}let R=Math.sqrt((_-g)*(_-g)+(d-y)*(d-y)+(p-h)*(p-h));return Math.abs(R)<.001&&(R=1),this.x=(_-g)/R,this.y=(d-y)/R,this.z=(p-h)/R,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sa=class extends ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new vn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Xs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ur=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ra=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var An=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),bo.subVectors(this.max,gr),Ts.subVectors(t.a,gr),As.subVectors(t.b,gr),Rs.subVectors(t.c,gr),Ii.subVectors(As,Ts),Di.subVectors(Rs,As),$i.subVectors(Ts,Rs);let e=[0,-Ii.z,Ii.y,0,-Di.z,Di.y,0,-$i.z,$i.y,Ii.z,0,-Ii.x,Di.z,0,-Di.x,$i.z,0,-$i.x,-Ii.y,Ii.x,0,-Di.y,Di.x,0,-$i.y,$i.x,0];return!Wl(e,Ts,As,Rs,bo)||(e=[1,0,0,0,1,0,0,0,1],!Wl(e,Ts,As,Rs,bo))?!1:(wo.crossVectors(Ii,Di),e=[wo.x,wo.y,wo.z],Wl(e,Ts,As,Rs,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pi=[new A,new A,new A,new A,new A,new A,new A,new A],Vn=new A,Eo=new An,Ts=new A,As=new A,Rs=new A,Ii=new A,Di=new A,$i=new A,gr=new A,bo=new A,wo=new A,ji=new A;function Wl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ji.fromArray(i,r);let a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var wf=new An,_r=new A,Xl=new A,Si=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_r.subVectors(t,this.center);let e=_r.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_r,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_r.copy(t.center).add(Xl)),this.expandByPoint(_r.copy(t.center).sub(Xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},mi=new A,Yl=new A,To=new A,Li=new A,ql=new A,Ao=new A,Zl=new A,zi=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yl.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),Li.copy(this.origin).sub(Yl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(To),a=Li.dot(this.direction),l=-Li.dot(To),c=Li.lengthSq(),h=Math.abs(1-o*o),d,p,m,g;if(h>0)if(d=o*l-a,p=o*a-l,g=r*h,d>=0)if(p>=-g)if(p<=g){let y=1/h;d*=y,p*=y,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yl).addScaledVector(To,p),m}intersectSphere(t,e){mi.subVectors(t.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,n,s,r){ql.subVectors(e,t),Ao.subVectors(n,t),Zl.crossVectors(ql,Ao);let o=this.direction.dot(Zl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,t);let l=a*this.direction.dot(Ao.crossVectors(Li,Ao));if(l<0)return null;let c=a*this.direction.dot(ql.cross(Li));if(c<0||l+c>o)return null;let h=-a*Li.dot(Zl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,p,m,g,y,_){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,p,m,g,y,_)}set(t,e,n,s,r,o,a,l,c,h,d,p,m,g,y,_){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=p,f[3]=m,f[7]=g,f[11]=y,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Cs.setFromMatrixColumn(t,0).length(),r=1/Cs.setFromMatrixColumn(t,1).length(),o=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=o*h,m=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=p-y*c,e[9]=-a*l,e[2]=y-p*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*h,m=l*d,g=c*h,y=c*d;e[0]=p+y*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=y+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*h,m=l*d,g=c*h,y=c*d;e[0]=p-y*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=y-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*h,m=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=g*c-m,e[8]=p*c+y,e[1]=l*d,e[5]=y*c+p,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,m=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-p*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+g,e[10]=p-y*d}else if(t.order==="XZY"){let p=o*l,m=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=p*d+y,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=y*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tf,t,Af)}lookAt(t,e,n){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ni.crossVectors(n,Cn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ni.crossVectors(n,Cn)),Ni.normalize(),Ro.crossVectors(Cn,Ni),s[0]=Ni.x,s[4]=Ro.x,s[8]=Cn.x,s[1]=Ni.y,s[5]=Ro.y,s[9]=Cn.y,s[2]=Ni.z,s[6]=Ro.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],m=n[13],g=n[2],y=n[6],_=n[10],f=n[14],R=n[3],S=n[7],v=n[11],I=n[15],P=s[0],L=s[4],U=s[8],T=s[12],b=s[1],N=s[5],G=s[9],J=s[13],tt=s[2],et=s[6],j=s[10],nt=s[14],Z=s[3],Et=s[7],wt=s[11],Bt=s[15];return r[0]=o*P+a*b+l*tt+c*Z,r[4]=o*L+a*N+l*et+c*Et,r[8]=o*U+a*G+l*j+c*wt,r[12]=o*T+a*J+l*nt+c*Bt,r[1]=h*P+d*b+p*tt+m*Z,r[5]=h*L+d*N+p*et+m*Et,r[9]=h*U+d*G+p*j+m*wt,r[13]=h*T+d*J+p*nt+m*Bt,r[2]=g*P+y*b+_*tt+f*Z,r[6]=g*L+y*N+_*et+f*Et,r[10]=g*U+y*G+_*j+f*wt,r[14]=g*T+y*J+_*nt+f*Bt,r[3]=R*P+S*b+v*tt+I*Z,r[7]=R*L+S*N+v*et+I*Et,r[11]=R*U+S*G+v*j+I*wt,r[15]=R*T+S*J+v*nt+I*Bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],p=t[10],m=t[14],g=t[3],y=t[7],_=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*p+n*c*p+s*a*m-n*l*m)+y*(+e*l*m-e*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+_*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+f*(-s*a*h-e*l*d+e*a*p+s*o*d-n*o*p+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],p=t[10],m=t[11],g=t[12],y=t[13],_=t[14],f=t[15],R=d*_*c-y*p*c+y*l*m-a*_*m-d*l*f+a*p*f,S=g*p*c-h*_*c-g*l*m+o*_*m+h*l*f-o*p*f,v=h*y*c-g*d*c+g*a*m-o*y*m-h*a*f+o*d*f,I=g*d*l-h*y*l-g*a*p+o*y*p+h*a*_-o*d*_,P=e*R+n*S+s*v+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return t[0]=R*L,t[1]=(y*p*r-d*_*r-y*s*m+n*_*m+d*s*f-n*p*f)*L,t[2]=(a*_*r-y*l*r+y*s*c-n*_*c-a*s*f+n*l*f)*L,t[3]=(d*l*r-a*p*r-d*s*c+n*p*c+a*s*m-n*l*m)*L,t[4]=S*L,t[5]=(h*_*r-g*p*r+g*s*m-e*_*m-h*s*f+e*p*f)*L,t[6]=(g*l*r-o*_*r-g*s*c+e*_*c+o*s*f-e*l*f)*L,t[7]=(o*p*r-h*l*r+h*s*c-e*p*c-o*s*m+e*l*m)*L,t[8]=v*L,t[9]=(g*d*r-h*y*r-g*n*m+e*y*m+h*n*f-e*d*f)*L,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*f+e*a*f)*L,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*m-e*a*m)*L,t[12]=I*L,t[13]=(h*y*s-g*d*s+g*n*p-e*y*p-h*n*_+e*d*_)*L,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*_-e*a*_)*L,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*p+e*a*p)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,p=r*c,m=r*h,g=r*d,y=o*h,_=o*d,f=a*d,R=l*c,S=l*h,v=l*d,I=n.x,P=n.y,L=n.z;return s[0]=(1-(y+f))*I,s[1]=(m+v)*I,s[2]=(g-S)*I,s[3]=0,s[4]=(m-v)*P,s[5]=(1-(p+f))*P,s[6]=(_+R)*P,s[7]=0,s[8]=(g+S)*L,s[9]=(_-R)*L,s[10]=(1-(p+y))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Cs.set(s[0],s[1],s[2]).length(),o=Cs.set(s[4],s[5],s[6]).length(),a=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);let c=1/r,h=1/o,d=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Yn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),p=(e+t)/(e-t),m=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Yn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Lr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Yn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),p=-(e+t)/(e-t),m=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Yn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Lr)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Cs=new A,Gn=new we,Tf=new A(0,0,0),Af=new A(1,1,1),Ni=new A,Ro=new A,Cn=new A,zh=new we,Hh=new We,Mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var Ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rf=0,kh=new A,Ps=new We,gi=new we,Co=new A,xr=new A,Cf=new A,Pf=new We,Vh=new A(1,0,0),Gh=new A(0,1,0),Wh=new A(0,0,1),Xh={type:"added"},If={type:"removed"},Is={type:"childadded",child:null},Kl={type:"childremoved",child:null},Oe=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new Mn,n=new We,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new he}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Vh,t)}rotateY(t){return this.rotateOnAxis(Gh,t)}rotateZ(t){return this.rotateOnAxis(Wh,t)}translateOnAxis(t,e){return kh.copy(t).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vh,t)}translateY(t){return this.translateOnAxis(Gh,t)}translateZ(t){return this.translateOnAxis(Wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Co.copy(t):Co.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(xr,Co,this.up):gi.lookAt(Co,xr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(gi),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xh),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(If),Kl.child=t,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xh),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,Cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),p=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Oe.DEFAULT_UP=new A(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new A,_i=new A,Jl=new A,xi=new A,Ds=new A,Ls=new A,Yh=new A,$l=new A,jl=new A,Ql=new A,tc=new Xe,ec=new Xe,nc=new Xe,yi=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Wn.subVectors(s,e),_i.subVectors(n,e),Jl.subVectors(t,e);let o=Wn.dot(Wn),a=Wn.dot(_i),l=Wn.dot(Jl),c=_i.dot(_i),h=_i.dot(Jl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,m=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return tc.setScalar(0),ec.setScalar(0),nc.setScalar(0),tc.fromBufferAttribute(t,e),ec.fromBufferAttribute(t,n),nc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(tc,r.x),o.addScaledVector(ec,r.y),o.addScaledVector(nc,r.z),o}static isFrontFacing(t,e,n,s){return Wn.subVectors(n,e),_i.subVectors(t,e),Wn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ds.subVectors(s,n),Ls.subVectors(r,n),$l.subVectors(t,n);let l=Ds.dot($l),c=Ls.dot($l);if(l<=0&&c<=0)return e.copy(n);jl.subVectors(t,s);let h=Ds.dot(jl),d=Ls.dot(jl);if(h>=0&&d<=h)return e.copy(s);let p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ds,o);Ql.subVectors(t,r);let m=Ds.dot(Ql),g=Ls.dot(Ql);if(g>=0&&m<=g)return e.copy(r);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ls,a);let _=h*g-m*d;if(_<=0&&d-h>=0&&m-g>=0)return Yh.subVectors(r,s),a=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(Yh,a);let f=1/(_+y+p);return o=y*f,a=p*f,e.copy(n).addScaledVector(Ds,o).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Po={h:0,s:0,l:0};function ic(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var _e=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ee.workingColorSpace){if(t=Vc(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ic(o,r,t+1/3),this.g=ic(o,r,t),this.b=ic(o,r,t-1/3)}return Ee.colorSpaceToWorking(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Ee.workingToColorSpace(un.copy(this),t),Math.round(me(un.r*255,0,255))*65536+Math.round(me(un.g*255,0,255))*256+Math.round(me(un.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.workingToColorSpace(un.copy(this),e);let n=un.r,s=un.g,r=un.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=tn){Ee.workingToColorSpace(un.copy(this),t);let e=un.r,n=un.g,s=un.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(Po);let n=Rr(Ui.h,Po.h,e),s=Rr(Ui.s,Po.s,e),r=Rr(Ui.l,Po.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new _e;_e.NAMES=id;var Df=0,si=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=ns,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$o,this.blendDst=jo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$o&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},fn=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ze=new A,Io=new mt,Lf=0,dn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=na,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Io.fromBufferAttribute(this,e),Io.applyMatrix3(t),this.setXY(e,Io.x,Io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==na&&(t.usage=this.usage),t}};var Fr=class extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Or=class extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Nf=0,Fn=new we,sc=new Oe,Ns=new A,Pn=new An,yr=new An,Qe=new A,Se=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gc(t)?Or:Fr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return sc.lookAt(t),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ye(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Pn.min,yr.min),Pn.expandByPoint(Qe),Qe.addVectors(Pn.max,yr.max),Pn.expandByPoint(Qe)):(Pn.expandByPoint(yr.min),Pn.expandByPoint(yr.max))}Pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(t,c),Qe.add(Ns)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new A,l[U]=new A;let c=new A,h=new A,d=new A,p=new mt,m=new mt,g=new mt,y=new A,_=new A;function f(U,T,b){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,b),p.fromBufferAttribute(r,U),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),m.sub(p),g.sub(p);let N=1/(m.x*g.y-g.x*m.y);isFinite(N)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(N),_.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(N),a[U].add(y),a[T].add(y),a[b].add(y),l[U].add(_),l[T].add(_),l[b].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let U=0,T=R.length;U<T;++U){let b=R[U],N=b.start,G=b.count;for(let J=N,tt=N+G;J<tt;J+=3)f(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let S=new A,v=new A,I=new A,P=new A;function L(U){I.fromBufferAttribute(s,U),P.copy(I);let T=a[U];S.copy(T),S.sub(I.multiplyScalar(I.dot(T))).normalize(),v.crossVectors(P,T);let N=v.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,N)}for(let U=0,T=R.length;U<T;++U){let b=R[U],N=b.start,G=b.count;for(let J=N,tt=N+G;J<tt;J+=3)L(t.getX(J+0)),L(t.getX(J+1)),L(t.getX(J+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let p=0,m=t.count;p<m;p+=3){let g=t.getX(p+0),y=t.getX(p+1),_=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,_),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,p=new c.constructor(l.length*h),m=0,g=0;for(let y=0,_=l.length;y<_;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let f=0;f<h;f++)p[g++]=c[m++]}return new dn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let p=c[h],m=t(p,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let p=0,m=d.length;p<m;p++)h.push(d[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qh=new we,Qi=new zi,Do=new Si,Zh=new A,Lo=new A,No=new A,Uo=new A,rc=new A,Fo=new A,Kh=new A,Oo=new A,bt=class extends Oe{constructor(t=new Se,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(rc.fromBufferAttribute(d,t),o?Fo.addScaledVector(rc,h):Fo.addScaledVector(rc.sub(e),h))}e.add(Fo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(Do.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Do,Zh)===null||Qi.origin.distanceToSquared(Zh)>(t.far-t.near)**2))&&(qh.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(qh),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){let _=p[g],f=o[_.materialIndex],R=Math.max(_.start,m.start),S=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let v=R,I=S;v<I;v+=3){let P=a.getX(v),L=a.getX(v+1),U=a.getX(v+2);s=Bo(this,f,t,n,c,h,d,P,L,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let _=g,f=y;_<f;_+=3){let R=a.getX(_),S=a.getX(_+1),v=a.getX(_+2);s=Bo(this,o,t,n,c,h,d,R,S,v),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){let _=p[g],f=o[_.materialIndex],R=Math.max(_.start,m.start),S=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let v=R,I=S;v<I;v+=3){let P=v,L=v+1,U=v+2;s=Bo(this,f,t,n,c,h,d,P,L,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let _=g,f=y;_<f;_+=3){let R=_,S=_+1,v=_+2;s=Bo(this,o,t,n,c,h,d,R,S,v),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Uf(i,t,e,n,s,r,o,a){let l;if(t.side===En?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Mi,a),l===null)return null;Oo.copy(a),Oo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oo);return c<e.near||c>e.far?null:{distance:c,point:Oo.clone(),object:i}}function Bo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Lo),i.getVertexPosition(l,No),i.getVertexPosition(c,Uo);let h=Uf(i,t,e,n,Lo,No,Uo,Kh);if(h){let d=new A;yi.getBarycoord(Kh,Lo,No,Uo,d),s&&(h.uv=yi.getInterpolatedAttribute(s,a,l,c,d,new mt)),r&&(h.uv1=yi.getInterpolatedAttribute(r,a,l,c,d,new mt)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,l,c,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new A,materialIndex:0};yi.getNormal(Lo,No,Uo,p.normal),h.face=p,h.barycoord=d}return h}var Te=class i extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],p=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(d,2));function g(y,_,f,R,S,v,I,P,L,U,T){let b=v/L,N=I/U,G=v/2,J=I/2,tt=P/2,et=L+1,j=U+1,nt=0,Z=0,Et=new A;for(let wt=0;wt<j;wt++){let Bt=wt*N-J;for(let te=0;te<et;te++){let se=te*b-G;Et[y]=se*R,Et[_]=Bt*S,Et[f]=tt,c.push(Et.x,Et.y,Et.z),Et[y]=0,Et[_]=0,Et[f]=P>0?1:-1,h.push(Et.x,Et.y,Et.z),d.push(te/L),d.push(1-wt/U),nt+=1}}for(let wt=0;wt<U;wt++)for(let Bt=0;Bt<L;Bt++){let te=p+Bt+et*wt,se=p+Bt+et*(wt+1),pe=p+(Bt+1)+et*(wt+1),re=p+(Bt+1)+et*wt;l.push(te,se,re),l.push(se,pe,re),Z+=6}a.addGroup(m,Z,T),m+=Z,p+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ps(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function mn(i){let t={};for(let e=0;e<i.length;e++){let n=ps(i[e]);for(let s in n)t[s]=n[s]}return t}function Ff(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}var sd={clone:ps,merge:mn},Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Br=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fi=new A,Jh=new mt,$h=new mt,an=class extends Br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Jh,$h),e.subVectors($h,Jh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Us=-90,Fs=1,oa=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Us,Fs,t,e);s.layers=this.layers,this.add(s);let r=new an(Us,Fs,t,e);r.layers=this.layers,this.add(r);let o=new an(Us,Fs,t,e);o.layers=this.layers,this.add(o);let a=new an(Us,Fs,t,e);a.layers=this.layers,this.add(a);let l=new an(Us,Fs,t,e);l.layers=this.layers,this.add(l);let c=new an(Us,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},zr=class extends vn{constructor(t=[],e=ds,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},aa=class extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Te(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:bi});r.uniforms.tEquirect.value=e;let o=new bt(s,r),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=qn),new oa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},wn=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},zf={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let _=e.getJointPose(y,n),f=this._getHandJoint(c,y);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Hr=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},la=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=na,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new A,kr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zs=class extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Os,vr=new A,Bs=new A,zs=new A,Hs=new mt,Mr=new mt,rd=new we,zo=new A,Sr=new A,Ho=new A,jh=new mt,oc=new mt,Qh=new mt,Vr=class extends Oe{constructor(t=new Zs){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new Se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new la(e,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new kr(n,3,0,!1)),Os.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=Os,this.material=t,this.center=new mt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-zs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ko(zo.set(-.5,-.5,0),zs,o,Bs,s,r),ko(Sr.set(.5,-.5,0),zs,o,Bs,s,r),ko(Ho.set(.5,.5,0),zs,o,Bs,s,r),jh.set(0,0),oc.set(1,0),Qh.set(1,1);let a=t.ray.intersectTriangle(zo,Sr,Ho,!1,vr);if(a===null&&(ko(Sr.set(-.5,.5,0),zs,o,Bs,s,r),oc.set(0,1),a=t.ray.intersectTriangle(zo,Ho,Sr,!1,vr),a===null))return;let l=t.ray.origin.distanceTo(vr);l<t.near||l>t.far||e.push({distance:l,point:vr.clone(),uv:yi.getInterpolation(vr,zo,Sr,Ho,jh,oc,Qh,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ko(i,t,e,n,s,r){Hs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Mr.x=r*Hs.x-s*Hs.y,Mr.y=s*Hs.x+r*Hs.y):Mr.copy(Hs),i.copy(t),i.x+=Mr.x,i.y+=Mr.y,i.applyMatrix4(rd)}var ca=class extends vn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Tn,h=Tn,d,p){super(null,o,a,l,c,h,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gr=class extends dn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ks=new we,tu=new we,Vo=[],eu=new An,Hf=new we,Er=new bt,br=new Si,Ks=class extends bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new An),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ks),eu.copy(t.boundingBox).applyMatrix4(ks),this.boundingBox.union(eu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ks),br.copy(t.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),t.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ks),tu.multiplyMatrices(n,ks),Er.matrixWorld=tu,Er.raycast(t,Vo);for(let o=0,a=Vo.length;o<a;o++){let l=Vo[o];l.instanceId=r,l.object=this,e.push(l)}Vo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ca(new Float32Array(s*this.count),s,this.count,Xa,jn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ac=new A,kf=new A,Vf=new he,en=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ac.subVectors(n,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ac),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vf.getNormalMatrix(t),s=this.coplanarPoint(ac).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new Si,Gf=new mt(.5,.5),Go=new A,Js=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,o=new en){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],p=r[6],m=r[7],g=r[8],y=r[9],_=r[10],f=r[11],R=r[12],S=r[13],v=r[14],I=r[15];if(s[0].setComponents(c-o,m-h,f-g,I-R).normalize(),s[1].setComponents(c+o,m+h,f+g,I+R).normalize(),s[2].setComponents(c+a,m+d,f+y,I+S).normalize(),s[3].setComponents(c-a,m-d,f-y,I-S).normalize(),n)s[4].setComponents(l,p,_,v).normalize(),s[5].setComponents(c-l,m-p,f-_,I-v).normalize();else if(s[4].setComponents(c-l,m-p,f-_,I-v).normalize(),e===Yn)s[5].setComponents(c+l,m+p,f+_,I+v).normalize();else if(e===Lr)s[5].setComponents(l,p,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);let e=Gf.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var On=class extends si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ha=new A,ua=new A,nu=new we,wr=new zi,Wo=new Si,lc=new A,iu=new A,Ye=class extends Oe{constructor(t=new Se,e=new On){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ha.fromBufferAttribute(e,s-1),ua.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ha.distanceTo(ua);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,t.ray.intersectsSphere(Wo)===!1)return;nu.copy(s).invert(),wr.copy(t.ray).applyMatrix4(nu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=m,_=g-1;y<_;y+=c){let f=h.getX(y),R=h.getX(y+1),S=Xo(this,t,wr,l,f,R,y);S&&e.push(S)}if(this.isLineLoop){let y=h.getX(g-1),_=h.getX(m),f=Xo(this,t,wr,l,y,_,g-1);f&&e.push(f)}}else{let m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let y=m,_=g-1;y<_;y+=c){let f=Xo(this,t,wr,l,y,y+1,y);f&&e.push(f)}if(this.isLineLoop){let y=Xo(this,t,wr,l,g-1,m,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ha.fromBufferAttribute(a,s),ua.fromBufferAttribute(a,r),e.distanceSqToSegment(ha,ua,lc,iu)>n)return;lc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(lc);if(!(c<t.near||c>t.far))return{distance:c,point:iu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var su=new A,ru=new A,Wr=class extends Ye{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)su.fromBufferAttribute(e,s),ru.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+su.distanceTo(ru);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Hi=class extends Ye{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var os=class extends vn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xr=class extends vn{constructor(t,e,n=Xi,s,r,o,a=Tn,l=Tn,c,h=Gs,d=1){if(h!==Gs&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:d};super(p,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yr=class extends vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var qr=class i extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){let m=n+d/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qe=class i extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],m=[],g=0,y=[],_=n/2,f=0;R(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(p,3)),this.setAttribute("uv",new ye(m,2));function R(){let v=new A,I=new A,P=0,L=(e-t)/n;for(let U=0;U<=r;U++){let T=[],b=U/r,N=b*(e-t)+t;for(let G=0;G<=s;G++){let J=G/s,tt=J*l+a,et=Math.sin(tt),j=Math.cos(tt);I.x=N*et,I.y=-b*n+_,I.z=N*j,d.push(I.x,I.y,I.z),v.set(et,L,j).normalize(),p.push(v.x,v.y,v.z),m.push(J,1-b),T.push(g++)}y.push(T)}for(let U=0;U<s;U++)for(let T=0;T<r;T++){let b=y[T][U],N=y[T+1][U],G=y[T+1][U+1],J=y[T][U+1];(t>0||T!==0)&&(h.push(b,N,J),P+=3),(e>0||T!==r-1)&&(h.push(N,G,J),P+=3)}c.addGroup(f,P,0),f+=P}function S(v){let I=g,P=new mt,L=new A,U=0,T=v===!0?t:e,b=v===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,_*b,0),p.push(0,b,0),m.push(.5,.5),g++;let N=g;for(let G=0;G<=s;G++){let tt=G/s*l+a,et=Math.cos(tt),j=Math.sin(tt);L.x=T*j,L.y=_*b,L.z=T*et,d.push(L.x,L.y,L.z),p.push(0,b,0),P.x=et*.5+.5,P.y=j*.5*b+.5,m.push(P.x,P.y),g++}for(let G=0;G<s;G++){let J=I+G,tt=N+G;v===!0?h.push(tt,tt+1,J):h.push(tt+1,tt,J),U+=3}c.addGroup(f,U,v===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$s=class i extends qe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},da=class i extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(R){let S=new A,v=new A,I=new A;for(let P=0;P<e.length;P+=3)m(e[P+0],S),m(e[P+1],v),m(e[P+2],I),l(S,v,I,R)}function l(R,S,v,I){let P=I+1,L=[];for(let U=0;U<=P;U++){L[U]=[];let T=R.clone().lerp(v,U/P),b=S.clone().lerp(v,U/P),N=P-U;for(let G=0;G<=N;G++)G===0&&U===P?L[U][G]=T:L[U][G]=T.clone().lerp(b,G/N)}for(let U=0;U<P;U++)for(let T=0;T<2*(P-U)-1;T++){let b=Math.floor(T/2);T%2===0?(p(L[U][b+1]),p(L[U+1][b]),p(L[U][b])):(p(L[U][b+1]),p(L[U+1][b+1]),p(L[U+1][b]))}}function c(R){let S=new A;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(R),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let R=new A;for(let S=0;S<r.length;S+=3){R.x=r[S+0],R.y=r[S+1],R.z=r[S+2];let v=_(R)/2/Math.PI+.5,I=f(R)/Math.PI+.5;o.push(v,1-I)}g(),d()}function d(){for(let R=0;R<o.length;R+=6){let S=o[R+0],v=o[R+2],I=o[R+4],P=Math.max(S,v,I),L=Math.min(S,v,I);P>.9&&L<.1&&(S<.2&&(o[R+0]+=1),v<.2&&(o[R+2]+=1),I<.2&&(o[R+4]+=1))}}function p(R){r.push(R.x,R.y,R.z)}function m(R,S){let v=R*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function g(){let R=new A,S=new A,v=new A,I=new A,P=new mt,L=new mt,U=new mt;for(let T=0,b=0;T<r.length;T+=9,b+=6){R.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),P.set(o[b+0],o[b+1]),L.set(o[b+2],o[b+3]),U.set(o[b+4],o[b+5]),I.copy(R).add(S).add(v).divideScalar(3);let N=_(I);y(P,b+0,R,N),y(L,b+2,S,N),y(U,b+4,v,N)}}function y(R,S,v,I){I<0&&R.x===1&&(o[S]=R.x-1),v.x===0&&v.z===0&&(o[S]=I/2/Math.PI+.5)}function _(R){return Math.atan2(R.z,-R.x)}function f(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new mt:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new A,s=[],r=[],o=[],a=new A,l=new we;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(me(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(me(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},js=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*d+this.aX,c=p*d+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fa=class extends js{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Xc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Yo=new A,cc=new Xc,hc=new Xc,uc=new Xc,pa=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Yo.subVectors(s[0],s[1]).add(s[0]),c=Yo);let d=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(p),m),_=Math.pow(p.distanceToSquared(h),m);y<1e-4&&(y=1),g<1e-4&&(g=y),_<1e-4&&(_=y),cc.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,g,y,_),hc.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,g,y,_),uc.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,g,y,_)}else this.curveType==="catmullrom"&&(cc.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),hc.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),uc.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return n.set(cc.calc(l),hc.calc(l),uc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ou(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Wf(i,t){let e=1-i;return e*e*t}function Xf(i,t){return 2*(1-i)*i*t}function Yf(i,t){return i*i*t}function Cr(i,t,e,n){return Wf(i,t)+Xf(i,e)+Yf(i,n)}function qf(i,t){let e=1-i;return e*e*e*t}function Zf(i,t){let e=1-i;return 3*e*e*i*t}function Kf(i,t){return 3*(1-i)*i*i*t}function Jf(i,t){return i*i*i*t}function Pr(i,t,e,n,s){return qf(i,t)+Zf(i,e)+Kf(i,n)+Jf(i,s)}var Zr=class extends In{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Pr(t,s.x,r.x,o.x,a.x),Pr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ma=class extends In{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Pr(t,s.x,r.x,o.x,a.x),Pr(t,s.y,r.y,o.y,a.y),Pr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kr=class extends In{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends In{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends In{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Cr(t,s.x,r.x,o.x),Cr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends In{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Cr(t,s.x,r.x,o.x),Cr(t,s.y,r.y,o.y),Cr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$r=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ou(a,l.x,c.x,h.x,d.x),ou(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},_c=Object.freeze({__proto__:null,ArcCurve:fa,CatmullRomCurve3:pa,CubicBezierCurve:Zr,CubicBezierCurve3:ma,EllipseCurve:js,LineCurve:Kr,LineCurve3:ga,QuadraticBezierCurve:Jr,QuadraticBezierCurve3:_a,SplineCurve:$r}),xa=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _c[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new _c[s.type]().fromJSON(s))}return this}},ki=class extends xa{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Kr(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Jr(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Zr(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $r(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new js(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ri=class extends ki{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ki().fromJSON(s))}return this}};function $f(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=od(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=np(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,d=-1/0;for(let p=e;p<s;p+=e){let m=i[p],g=i[p+1];m<a&&(a=m),g<l&&(l=g),m>h&&(h=m),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return jr(r,o,e,a,l,c,0),o}function od(i,t,e,n,s){let r;if(s===fp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=au(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=au(o/n|0,i[o],i[o+1],r);return r&&Qs(r,r.next)&&(to(r),r=r.next),r}function as(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qs(e,e.next)||Ge(e.prev,e,e.next)===0)){if(to(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function jr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ap(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Qf(i,n,s,r):jf(i)){t.push(l.i,i.i,c.i),to(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=tp(as(i),t),jr(i,t,e,n,s,r,2)):o===2&&ep(i,t,e,n,s,r):jr(as(i),t,e,n,s,r,1);break}}}function jf(i){let t=i.prev,e=i,n=i.next;if(Ge(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),p=Math.max(s,r,o),m=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=m&&Tr(s,a,r,l,o,c,g.x,g.y)&&Ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qf(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ge(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,p=o.y,m=Math.min(a,l,c),g=Math.min(h,d,p),y=Math.max(a,l,c),_=Math.max(h,d,p),f=xc(m,g,t,e,n),R=xc(y,_,t,e,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=f&&v&&v.z<=R;){if(S.x>=m&&S.x<=y&&S.y>=g&&S.y<=_&&S!==s&&S!==o&&Tr(a,h,l,d,c,p,S.x,S.y)&&Ge(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=m&&v.x<=y&&v.y>=g&&v.y<=_&&v!==s&&v!==o&&Tr(a,h,l,d,c,p,v.x,v.y)&&Ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=f;){if(S.x>=m&&S.x<=y&&S.y>=g&&S.y<=_&&S!==s&&S!==o&&Tr(a,h,l,d,c,p,S.x,S.y)&&Ge(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=R;){if(v.x>=m&&v.x<=y&&v.y>=g&&v.y<=_&&v!==s&&v!==o&&Tr(a,h,l,d,c,p,v.x,v.y)&&Ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function tp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Qs(n,s)&&ld(n,e,e.next,s)&&Qr(n,s)&&Qr(s,n)&&(t.push(n.i,e.i,s.i),to(e),to(e.next),e=i=s),e=e.next}while(e!==i);return as(e)}function ep(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hp(o,a)){let l=cd(o,a);o=as(o,o.next),l=as(l,l.next),jr(o,t,e,n,s,r,0),jr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function np(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=od(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(cp(c))}s.sort(ip);for(let r=0;r<s.length;r++)e=sp(s[r],e);return e}function ip(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function sp(i,t){let e=rp(i,t);if(!e)return t;let n=cd(e,i);return as(n,n.next),as(e,e.next)}function rp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Qs(i,e))return e;do{if(Qs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ad(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Qr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&op(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function op(i,t){return Ge(i.prev,i,t.prev)<0&&Ge(t.next,i,i.next)<0}function ap(i,t,e,n){let s=i;do s.z===0&&(s.z=xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lp(s)}function lp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ad(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Tr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&ad(i,t,e,n,s,r,o,a)}function hp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!up(i,t)&&(Qr(i,t)&&Qr(t,i)&&dp(i,t)&&(Ge(i.prev,i,t.prev)||Ge(i,t.prev,t))||Qs(i,t)&&Ge(i.prev,i,i.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qs(i,t){return i.x===t.x&&i.y===t.y}function ld(i,t,e,n){let s=Zo(Ge(i,t,e)),r=Zo(Ge(i,t,n)),o=Zo(Ge(e,n,i)),a=Zo(Ge(e,n,t));return!!(s!==r&&o!==a||s===0&&qo(i,e,t)||r===0&&qo(i,n,t)||o===0&&qo(e,i,n)||a===0&&qo(e,t,n))}function qo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zo(i){return i>0?1:i<0?-1:0}function up(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ld(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qr(i,t){return Ge(i.prev,i,i.next)<0?Ge(i,t,i.next)>=0&&Ge(i,i.prev,t)>=0:Ge(i,t,i.prev)<0||Ge(i,i.next,t)<0}function dp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cd(i,t){let e=yc(i.i,i.x,i.y),n=yc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function au(i,t,e,n){let s=yc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function to(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var vc=class{static triangulate(t,e,n=2){return $f(t,e,n)}},ti=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];lu(t),cu(n,t);let o=t.length;e.forEach(lu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,cu(n,e[l]);let a=vc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function lu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function cu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ls=class i extends Se{constructor(t=new ri([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:pp,S,v=!1,I,P,L,U;f&&(S=f.getSpacedPoints(h),v=!0,p=!1,I=f.computeFrenetFrames(h,!1),P=new A,L=new A,U=new A),p||(_=0,m=0,g=0,y=0);let T=a.extractPoints(c),b=T.shape,N=T.holes;if(!ti.isClockWise(b)){b=b.reverse();for(let dt=0,ht=N.length;dt<ht;dt++){let lt=N[dt];ti.isClockWise(lt)&&(N[dt]=lt.reverse())}}function J(dt){let lt=10000000000000001e-36,ct=dt[0];for(let Mt=1;Mt<=dt.length;Mt++){let vt=Mt%dt.length,Rt=dt[vt],le=Rt.x-ct.x,Zt=Rt.y-ct.y,C=le*le+Zt*Zt,x=Math.max(Math.abs(Rt.x),Math.abs(Rt.y),Math.abs(ct.x),Math.abs(ct.y)),z=lt*x*x;if(C<=z){dt.splice(vt,1),Mt--;continue}ct=Rt}}J(b),N.forEach(J);let tt=N.length,et=b;for(let dt=0;dt<tt;dt++){let ht=N[dt];b=b.concat(ht)}function j(dt,ht,lt){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(ht,lt)}let nt=b.length;function Z(dt,ht,lt){let ct,Mt,vt,Rt=dt.x-ht.x,le=dt.y-ht.y,Zt=lt.x-dt.x,C=lt.y-dt.y,x=Rt*Rt+le*le,z=Rt*C-le*Zt;if(Math.abs(z)>Number.EPSILON){let Q=Math.sqrt(x),_t=Math.sqrt(Zt*Zt+C*C),rt=ht.x-le/Q,Ut=ht.y+Rt/Q,Dt=lt.x-C/_t,Xt=lt.y+Zt/_t,kt=((Dt-rt)*C-(Xt-Ut)*Zt)/(Rt*C-le*Zt);ct=rt+Rt*kt-dt.x,Mt=Ut+le*kt-dt.y;let xt=ct*ct+Mt*Mt;if(xt<=2)return new mt(ct,Mt);vt=Math.sqrt(xt/2)}else{let Q=!1;Rt>Number.EPSILON?Zt>Number.EPSILON&&(Q=!0):Rt<-Number.EPSILON?Zt<-Number.EPSILON&&(Q=!0):Math.sign(le)===Math.sign(C)&&(Q=!0),Q?(ct=-le,Mt=Rt,vt=Math.sqrt(x)):(ct=Rt,Mt=le,vt=Math.sqrt(x/2))}return new mt(ct/vt,Mt/vt)}let Et=[];for(let dt=0,ht=et.length,lt=ht-1,ct=dt+1;dt<ht;dt++,lt++,ct++)lt===ht&&(lt=0),ct===ht&&(ct=0),Et[dt]=Z(et[dt],et[lt],et[ct]);let wt=[],Bt,te=Et.concat();for(let dt=0,ht=tt;dt<ht;dt++){let lt=N[dt];Bt=[];for(let ct=0,Mt=lt.length,vt=Mt-1,Rt=ct+1;ct<Mt;ct++,vt++,Rt++)vt===Mt&&(vt=0),Rt===Mt&&(Rt=0),Bt[ct]=Z(lt[ct],lt[vt],lt[Rt]);wt.push(Bt),te=te.concat(Bt)}let se;if(_===0)se=ti.triangulateShape(et,N);else{let dt=[],ht=[];for(let lt=0;lt<_;lt++){let ct=lt/_,Mt=m*Math.cos(ct*Math.PI/2),vt=g*Math.sin(ct*Math.PI/2)+y;for(let Rt=0,le=et.length;Rt<le;Rt++){let Zt=j(et[Rt],Et[Rt],vt);V(Zt.x,Zt.y,-Mt),ct===0&&dt.push(Zt)}for(let Rt=0,le=tt;Rt<le;Rt++){let Zt=N[Rt];Bt=wt[Rt];let C=[];for(let x=0,z=Zt.length;x<z;x++){let Q=j(Zt[x],Bt[x],vt);V(Q.x,Q.y,-Mt),ct===0&&C.push(Q)}ct===0&&ht.push(C)}}se=ti.triangulateShape(dt,ht)}let pe=se.length,re=g+y;for(let dt=0;dt<nt;dt++){let ht=p?j(b[dt],te[dt],re):b[dt];v?(L.copy(I.normals[0]).multiplyScalar(ht.x),P.copy(I.binormals[0]).multiplyScalar(ht.y),U.copy(S[0]).add(L).add(P),V(U.x,U.y,U.z)):V(ht.x,ht.y,0)}for(let dt=1;dt<=h;dt++)for(let ht=0;ht<nt;ht++){let lt=p?j(b[ht],te[ht],re):b[ht];v?(L.copy(I.normals[dt]).multiplyScalar(lt.x),P.copy(I.binormals[dt]).multiplyScalar(lt.y),U.copy(S[dt]).add(L).add(P),V(U.x,U.y,U.z)):V(lt.x,lt.y,d/h*dt)}for(let dt=_-1;dt>=0;dt--){let ht=dt/_,lt=m*Math.cos(ht*Math.PI/2),ct=g*Math.sin(ht*Math.PI/2)+y;for(let Mt=0,vt=et.length;Mt<vt;Mt++){let Rt=j(et[Mt],Et[Mt],ct);V(Rt.x,Rt.y,d+lt)}for(let Mt=0,vt=N.length;Mt<vt;Mt++){let Rt=N[Mt];Bt=wt[Mt];for(let le=0,Zt=Rt.length;le<Zt;le++){let C=j(Rt[le],Bt[le],ct);v?V(C.x,C.y+S[h-1].y,S[h-1].x+lt):V(C.x,C.y,d+lt)}}}st(),yt();function st(){let dt=s.length/3;if(p){let ht=0,lt=nt*ht;for(let ct=0;ct<pe;ct++){let Mt=se[ct];ut(Mt[2]+lt,Mt[1]+lt,Mt[0]+lt)}ht=h+_*2,lt=nt*ht;for(let ct=0;ct<pe;ct++){let Mt=se[ct];ut(Mt[0]+lt,Mt[1]+lt,Mt[2]+lt)}}else{for(let ht=0;ht<pe;ht++){let lt=se[ht];ut(lt[2],lt[1],lt[0])}for(let ht=0;ht<pe;ht++){let lt=se[ht];ut(lt[0]+nt*h,lt[1]+nt*h,lt[2]+nt*h)}}n.addGroup(dt,s.length/3-dt,0)}function yt(){let dt=s.length/3,ht=0;H(et,ht),ht+=et.length;for(let lt=0,ct=N.length;lt<ct;lt++){let Mt=N[lt];H(Mt,ht),ht+=Mt.length}n.addGroup(dt,s.length/3-dt,1)}function H(dt,ht){let lt=dt.length;for(;--lt>=0;){let ct=lt,Mt=lt-1;Mt<0&&(Mt=dt.length-1);for(let vt=0,Rt=h+_*2;vt<Rt;vt++){let le=nt*vt,Zt=nt*(vt+1),C=ht+ct+le,x=ht+Mt+le,z=ht+Mt+Zt,Q=ht+ct+Zt;Wt(C,x,z,Q)}}}function V(dt,ht,lt){l.push(dt),l.push(ht),l.push(lt)}function ut(dt,ht,lt){ee(dt),ee(ht),ee(lt);let ct=s.length/3,Mt=R.generateTopUV(n,s,ct-3,ct-2,ct-1);D(Mt[0]),D(Mt[1]),D(Mt[2])}function Wt(dt,ht,lt,ct){ee(dt),ee(ht),ee(ct),ee(ht),ee(lt),ee(ct);let Mt=s.length/3,vt=R.generateSideWallUV(n,s,Mt-6,Mt-3,Mt-2,Mt-1);D(vt[0]),D(vt[1]),D(vt[3]),D(vt[1]),D(vt[2]),D(vt[3])}function ee(dt){s.push(l[dt*3+0]),s.push(l[dt*3+1]),s.push(l[dt*3+2])}function D(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _c[s.type]().fromJSON(s)),new i(n,t.options)}},pp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new mt(r,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],p=t[s*3],m=t[s*3+1],g=t[s*3+2],y=t[r*3],_=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-d),new mt(p,1-g),new mt(y,1-f)]:[new mt(a,1-l),new mt(h,1-d),new mt(m,1-g),new mt(_,1-f)]}};function mp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var oi=class i extends da{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Bn=class i extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,p=e/l,m=[],g=[],y=[],_=[];for(let f=0;f<h;f++){let R=f*p-o;for(let S=0;S<c;S++){let v=S*d-r;g.push(v,-R,0),y.push(0,0,1),_.push(S/a),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<a;R++){let S=R+c*f,v=R+c*(f+1),I=R+1+c*(f+1),P=R+1+c*f;m.push(S,v,P),m.push(v,I,P)}this.setIndex(m),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(y,3)),this.setAttribute("uv",new ye(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var eo=class i extends Se{constructor(t=new ri([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(r,3)),this.setAttribute("uv",new ye(o,2));function c(h){let d=s.length/3,p=h.extractPoints(e),m=p.shape,g=p.holes;ti.isClockWise(m)===!1&&(m=m.reverse());for(let _=0,f=g.length;_<f;_++){let R=g[_];ti.isClockWise(R)===!0&&(g[_]=R.reverse())}let y=ti.triangulateShape(m,g);for(let _=0,f=g.length;_<f;_++){let R=g[_];m=m.concat(R)}for(let _=0,f=m.length;_<f;_++){let R=m[_];s.push(R.x,R.y,0),r.push(0,0,1),o.push(R.x,R.y)}for(let _=0,f=y.length;_<f;_++){let R=y[_],S=R[0]+d,v=R[1]+d,I=R[2]+d;n.push(S,v,I),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return gp(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function gp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Kn=class i extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new A,p=new A,m=[],g=[],y=[],_=[];for(let f=0;f<=n;f++){let R=[],S=f/n,v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){let P=I/e;d.x=-t*Math.cos(s+P*r)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(s+P*r)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),y.push(p.x,p.y,p.z),_.push(P+v,1-S),R.push(c++)}h.push(R)}for(let f=0;f<n;f++)for(let R=0;R<e;R++){let S=h[f][R+1],v=h[f][R],I=h[f+1][R],P=h[f+1][R+1];(f!==0||o>0)&&m.push(S,v,P),(f!==n-1||l<Math.PI)&&m.push(v,I,P)}this.setIndex(m),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(y,3)),this.setAttribute("uv",new ye(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ei=class i extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new A,d=new A,p=new A;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let y=g/s*r,_=m/n*Math.PI*2;d.x=(t+e*Math.cos(_))*Math.cos(y),d.y=(t+e*Math.cos(_))*Math.sin(y),d.z=e*Math.sin(_),a.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let y=(s+1)*m+g-1,_=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,R=(s+1)*m+g;o.push(y,_,R),o.push(_,f,R)}this.setIndex(o),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var cs=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ya=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},va=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var no=class extends On{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Ko(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _p(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ma=class extends hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fc,endingEnd:fc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pc:r=t,a=2*e-n;break;case mc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pc:o=t,l=2*n-e;break;case mc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),y=g*g,_=y*g,f=-p*_+2*p*y-p*g,R=(1+p)*_+(-1.5-2*p)*y+(-.5+p)*g+1,S=(-1-m)*_+(1.5+m)*y+.5*g,v=m*_-m*y;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+R*o[c+I]+S*o[l+I]+v*o[d+I];return r}},Sa=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*d+o[l+p]*h;return r}},Ea=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ko(e,this.TimeBufferType),this.values=Ko(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ko(t.times,Array),values:Ko(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ma(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ir:e=this.InterpolantFactoryMethodDiscrete;break;case ea:e=this.InterpolantFactoryMethodLinear;break;case Jo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&_p(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,p=d-n,m=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[p+g]||y!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,p=o*n;for(let m=0;m!==n;++m)e[p+m]=e[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=ea;var Vi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Ir;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="color";var wa=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}};wa.prototype.ValueTypeName="number";var Ta=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)We.slerpFlat(r,0,o,c-a,o,c,l);return r}},io=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}};io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Ir;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}};Aa.prototype.ValueTypeName="vector";var Ra=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},hd=new Ra,Ca=class{constructor(t){this.manager=t!==void 0?t:hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},so=class extends tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},dc=new we,hu=new A,uu=new A,Pa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(hu),uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uu),e.updateMatrixWorld(),dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Mc=class extends Pa{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=rs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ro=class extends tr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Mc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var oo=class extends Br{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sc=class extends Pa{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},er=class extends tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Sc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ia=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Yc="\\[\\]\\.:\\/",xp=new RegExp("["+Yc+"]","g"),qc="[^"+Yc+"]",yp="[^"+Yc.replace("\\.","")+"]",vp=/((?:WC+[\/:])*)/.source.replace("WC",qc),Mp=/(WCOD+)?/.source.replace("WCOD",yp),Sp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),Ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),bp=new RegExp("^"+vp+Mp+Sp+Ep+"$"),wp=["material","materials","bones","map"],Ec=class{constructor(t,e,n){let s=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xp,"")}static parseTrackName(t){let e=bp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Ec;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tx=new Float32Array(1);var du=new we,ai=class{constructor(t,e,n=0,s=1/0){this.ray=new zi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return du.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(du),this}intersectObject(t,e=!0,n=[]){return bc(t,this,n,e),n.sort(fu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bc(t[s],this,n,e);return n.sort(fu),n}};function fu(i,t){return i.distance-t.distance}function bc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)bc(r[o],t,e,!0)}}var nr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ao=class extends Wr{constructor(t=10,e=10,n=4473924,s=8947848){n=new _e(n),s=new _e(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let p=0,m=0,g=-a;p<=e;p++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let y=p===r?n:s;y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3}let h=new Se;h.setAttribute("position",new ye(l,3)),h.setAttribute("color",new ye(c,3));let d=new On({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var lo=class extends Wr{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Se;r.setIndex(new dn(n,1)),r.setAttribute("position",new ye(s,3)),super(r,new On({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}};var us=class extends ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Zc(i,t,e,n){let s=Tp(n);switch(e){case Fc:return i*t;case Xa:return i*t/s.components*s.byteLength;case Ya:return i*t/s.components*s.byteLength;case Bc:return i*t*2/s.components*s.byteLength;case qa:return i*t*2/s.components*s.byteLength;case Oc:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case Za:return i*t*4/s.components*s.byteLength;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:case ja:return Math.max(i,16)*Math.max(t,8)/4;case Ka:case $a:return Math.max(i,8)*Math.max(t,8)/2;case Qa:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gl:case _l:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ml:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tp(i){switch(i){case $n:case Dc:return{byteLength:1,components:1};case ir:case Lc:case sr:return{byteLength:2,components:1};case Ga:case Wa:return{byteLength:2,components:4};case Xi:case Va:case jn:return{byteLength:4,components:1};case Nc:case Uc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Nd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ap(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){let g=d[p],y=d[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++p,d[p]=y)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){let y=d[m];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Vp=`#ifdef USE_BUMPMAP
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$p=`#define PI 3.141592653589793
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
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
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
#endif`,Tm=`struct PhysicalMaterial {
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
}`,Am=`
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Om=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dg=`float getShadowMask() {
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
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
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
}`,Ng=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,Fg=`#define DISTANCE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Gg=`#define LAMBERT
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
}`,Wg=`#define LAMBERT
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
}`,Xg=`#define MATCAP
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
}`,Yg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,Kg=`#define PHONG
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
}`,Jg=`#define PHONG
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
}`,$g=`#define STANDARD
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
}`,jg=`#define STANDARD
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
}`,Qg=`#define TOON
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
}`,t_=`#define TOON
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
}`,e_=`uniform float size;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 color;
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
}`,r_=`uniform float rotation;
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
}`,o_=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:Rp,alphahash_pars_fragment:Cp,alphamap_fragment:Pp,alphamap_pars_fragment:Ip,alphatest_fragment:Dp,alphatest_pars_fragment:Lp,aomap_fragment:Np,aomap_pars_fragment:Up,batching_pars_vertex:Fp,batching_vertex:Op,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:Hp,iridescence_fragment:kp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:Yp,color_fragment:qp,color_pars_fragment:Zp,color_pars_vertex:Kp,color_vertex:Jp,common:$p,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:tm,displacementmap_vertex:em,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:sm,colorspace_pars_fragment:rm,envmap_fragment:om,envmap_common_pars_fragment:am,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:vm,envmap_vertex:hm,fog_vertex:um,fog_pars_vertex:dm,fog_fragment:fm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:xm,lights_pars_begin:ym,lights_toon_fragment:Mm,lights_toon_pars_fragment:Sm,lights_phong_fragment:Em,lights_phong_pars_fragment:bm,lights_physical_fragment:wm,lights_physical_pars_fragment:Tm,lights_fragment_begin:Am,lights_fragment_maps:Rm,lights_fragment_end:Cm,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Lm,map_fragment:Nm,map_pars_fragment:Um,map_particle_fragment:Fm,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:Hm,morphcolor_vertex:km,morphnormal_vertex:Vm,morphtarget_pars_vertex:Gm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:Ym,normal_pars_fragment:qm,normal_pars_vertex:Zm,normal_vertex:Km,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:tg,opaque_fragment:eg,packing:ng,premultiplied_alpha_fragment:ig,project_vertex:sg,dithering_fragment:rg,dithering_pars_fragment:og,roughnessmap_fragment:ag,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:hg,shadowmap_vertex:ug,shadowmask_pars_fragment:dg,skinbase_vertex:fg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:_g,specularmap_pars_fragment:xg,tonemapping_fragment:yg,tonemapping_pars_fragment:vg,transmission_fragment:Mg,transmission_pars_fragment:Sg,uv_pars_fragment:Eg,uv_pars_vertex:bg,uv_vertex:wg,worldpos_vertex:Tg,background_vert:Ag,background_frag:Rg,backgroundCube_vert:Cg,backgroundCube_frag:Pg,cube_vert:Ig,cube_frag:Dg,depth_vert:Lg,depth_frag:Ng,distanceRGBA_vert:Ug,distanceRGBA_frag:Fg,equirect_vert:Og,equirect_frag:Bg,linedashed_vert:zg,linedashed_frag:Hg,meshbasic_vert:kg,meshbasic_frag:Vg,meshlambert_vert:Gg,meshlambert_frag:Wg,meshmatcap_vert:Xg,meshmatcap_frag:Yg,meshnormal_vert:qg,meshnormal_frag:Zg,meshphong_vert:Kg,meshphong_frag:Jg,meshphysical_vert:$g,meshphysical_frag:jg,meshtoon_vert:Qg,meshtoon_frag:t_,points_vert:e_,points_frag:n_,shadow_vert:i_,shadow_frag:s_,sprite_vert:r_,sprite_frag:o_},Ht={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},hi={basic:{uniforms:mn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:mn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:mn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:mn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:mn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:mn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:mn([Ht.points,Ht.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:mn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:mn([Ht.common,Ht.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:mn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:mn([Ht.sprite,Ht.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:mn([Ht.common,Ht.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:mn([Ht.lights,Ht.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};hi.physical={uniforms:mn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var El={r:0,b:0,g:0},ms=new Mn,a_=new we;function l_(i,t,e,n,s,r,o){let a=new _e(0),l=r===!0?0:1,c,h,d=null,p=0,m=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function y(S){let v=!1,I=g(S);I===null?f(a,l):I&&I.isColor&&(f(I,1),v=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,v){let I=g(v);I&&(I.isCubeTexture||I.mapping===co)?(h===void 0&&(h=new bt(new Te(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:ps(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ms.copy(v.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(a_.makeRotationFromEuler(ms)),h.material.toneMapped=Ee.getTransfer(I.colorSpace)!==Pe,(d!==I||p!==I.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=I,p=I.version,m=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new bt(new Bn(2,2),new Zn({name:"BackgroundMaterial",uniforms:ps(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ee.getTransfer(I.colorSpace)!==Pe,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||p!==I.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=I,p=I.version,m=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,v){S.getRGB(El,Wc(i)),n.buffers.color.setClear(El.r,El.g,El.b,v,o)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:y,addToRenderList:_,dispose:R}}function c_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(b,N,G,J,tt){let et=!1,j=d(J,G,N);r!==j&&(r=j,c(r.object)),et=m(b,J,G,tt),et&&g(b,J,G,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,v(b,N,G,J),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function d(b,N,G){let J=G.wireframe===!0,tt=n[b.id];tt===void 0&&(tt={},n[b.id]=tt);let et=tt[N.id];et===void 0&&(et={},tt[N.id]=et);let j=et[J];return j===void 0&&(j=p(l()),et[J]=j),j}function p(b){let N=[],G=[],J=[];for(let tt=0;tt<e;tt++)N[tt]=0,G[tt]=0,J[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:J,object:b,attributes:{},index:null}}function m(b,N,G,J){let tt=r.attributes,et=N.attributes,j=0,nt=G.getAttributes();for(let Z in nt)if(nt[Z].location>=0){let wt=tt[Z],Bt=et[Z];if(Bt===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(Bt=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(Bt=b.instanceColor)),wt===void 0||wt.attribute!==Bt||Bt&&wt.data!==Bt.data)return!0;j++}return r.attributesNum!==j||r.index!==J}function g(b,N,G,J){let tt={},et=N.attributes,j=0,nt=G.getAttributes();for(let Z in nt)if(nt[Z].location>=0){let wt=et[Z];wt===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(wt=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(wt=b.instanceColor));let Bt={};Bt.attribute=wt,wt&&wt.data&&(Bt.data=wt.data),tt[Z]=Bt,j++}r.attributes=tt,r.attributesNum=j,r.index=J}function y(){let b=r.newAttributes;for(let N=0,G=b.length;N<G;N++)b[N]=0}function _(b){f(b,0)}function f(b,N){let G=r.newAttributes,J=r.enabledAttributes,tt=r.attributeDivisors;G[b]=1,J[b]===0&&(i.enableVertexAttribArray(b),J[b]=1),tt[b]!==N&&(i.vertexAttribDivisor(b,N),tt[b]=N)}function R(){let b=r.newAttributes,N=r.enabledAttributes;for(let G=0,J=N.length;G<J;G++)N[G]!==b[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function S(b,N,G,J,tt,et,j){j===!0?i.vertexAttribIPointer(b,N,G,tt,et):i.vertexAttribPointer(b,N,G,J,tt,et)}function v(b,N,G,J){y();let tt=J.attributes,et=G.getAttributes(),j=N.defaultAttributeValues;for(let nt in et){let Z=et[nt];if(Z.location>=0){let Et=tt[nt];if(Et===void 0&&(nt==="instanceMatrix"&&b.instanceMatrix&&(Et=b.instanceMatrix),nt==="instanceColor"&&b.instanceColor&&(Et=b.instanceColor)),Et!==void 0){let wt=Et.normalized,Bt=Et.itemSize,te=t.get(Et);if(te===void 0)continue;let se=te.buffer,pe=te.type,re=te.bytesPerElement,st=pe===i.INT||pe===i.UNSIGNED_INT||Et.gpuType===Va;if(Et.isInterleavedBufferAttribute){let yt=Et.data,H=yt.stride,V=Et.offset;if(yt.isInstancedInterleavedBuffer){for(let ut=0;ut<Z.locationSize;ut++)f(Z.location+ut,yt.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ut=0;ut<Z.locationSize;ut++)_(Z.location+ut);i.bindBuffer(i.ARRAY_BUFFER,se);for(let ut=0;ut<Z.locationSize;ut++)S(Z.location+ut,Bt/Z.locationSize,pe,wt,H*re,(V+Bt/Z.locationSize*ut)*re,st)}else{if(Et.isInstancedBufferAttribute){for(let yt=0;yt<Z.locationSize;yt++)f(Z.location+yt,Et.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let yt=0;yt<Z.locationSize;yt++)_(Z.location+yt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let yt=0;yt<Z.locationSize;yt++)S(Z.location+yt,Bt/Z.locationSize,pe,wt,Bt*re,Bt/Z.locationSize*yt*re,st)}}else if(j!==void 0){let wt=j[nt];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv(Z.location,wt);break;case 3:i.vertexAttrib3fv(Z.location,wt);break;case 4:i.vertexAttrib4fv(Z.location,wt);break;default:i.vertexAttrib1fv(Z.location,wt)}}}}R()}function I(){U();for(let b in n){let N=n[b];for(let G in N){let J=N[G];for(let tt in J)h(J[tt].object),delete J[tt];delete N[G]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;let N=n[b.id];for(let G in N){let J=N[G];for(let tt in J)h(J[tt].object),delete J[tt];delete N[G]}delete n[b.id]}function L(b){for(let N in n){let G=n[N];if(G[b.id]===void 0)continue;let J=G[b.id];for(let tt in J)h(J[tt].object),delete J[tt];delete G[b.id]}}function U(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:_,disableUnusedAttributes:R}}function h_(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,n,1)}function l(c,h,d,p){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*p[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function u_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==zn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let U=L===sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==$n&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==jn&&!U)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:R,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:I,maxSamples:P}}function d_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new en,a=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,m){let g=d.clippingPlanes,y=d.clipIntersection,_=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!_)r?h(null):c();else{let R=r?0:n,S=R*4,v=f.clippingState||null;l.value=v,v=h(g,p,S,m);for(let I=0;I!==S;++I)v[I]=e[I];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,m,g){let y=d!==null?d.length:0,_=null;if(y!==0){if(_=l.value,g!==!0||_===null){let f=m+y*4,R=p.matrixWorldInverse;a.getNormalMatrix(R),(_===null||_.length<f)&&(_=new Float32Array(f));for(let S=0,v=m;S!==y;++S,v+=4)o.copy(d[S]).applyMatrix4(R,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,_}}function f_(i){let t=new WeakMap;function e(o,a){return a===za?o.mapping=ds:a===Ha&&(o.mapping=fs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===za||a===Ha)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new aa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var lr=4,ud=[.125,.215,.35,.446,.526,.582],xs=20,Kc=new oo,dd=new _e,Jc=null,$c=0,jc=0,Qc=!1,_s=(1+Math.sqrt(5))/2,ar=1/_s,fd=[new A(-_s,ar,0),new A(_s,ar,0),new A(-ar,0,_s),new A(ar,0,_s),new A(0,_s,-ar),new A(0,_s,ar),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],p_=new A,Tl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=p_}=r;Jc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jc,$c,jc),this._renderer.xr.enabled=Qc,t.scissorTest=!1,bl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:sr,format:zn,colorSpace:ss,depthBuffer:!1},s=pd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m_(r)),this._blurMaterial=g_(r,t,e)}return s}_compileMaterial(t){let e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,Kc)}_sceneToCubeUV(t,e,n,s,r){let l=new an(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(dd),d.toneMapping=wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let y=new fn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),_=new bt(new Te,y),f=!1,R=t.background;R?R.isColor&&(y.color.copy(R),t.background=null,f=!0):(y.color.copy(dd),f=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let I=this._cubeSize;bl(s,v*I,S>2?I:0,I,I),d.setRenderTarget(s),f&&d.render(_,l),d.render(t,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=m,d.autoClear=p,t.background=R}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ds||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;bl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Kc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fd[(s-r-1)%fd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new bt(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*xs-1),y=r/g,_=isFinite(r)?1+Math.floor(h*y):xs;_>xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${xs}`);let f=[],R=0;for(let L=0;L<xs;++L){let U=L/y,T=Math.exp(-U*U/2);f.push(T),L===0?R+=T:L<_&&(R+=2*T)}for(let L=0;L<f.length;L++)f[L]=f[L]/R;p.envMap.value=t.texture,p.samples.value=_,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-n;let v=this._sizeLods[s],I=3*v*(s>S-lr?s-S+lr:0),P=4*(this._cubeSize-v);bl(e,I,P,3*v,2*v),l.setRenderTarget(e),l.render(d,Kc)}};function m_(i){let t=[],e=[],n=[],s=i,r=i-lr+1+ud.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-lr?l=ud[o-i+lr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,y=3,_=2,f=1,R=new Float32Array(y*g*m),S=new Float32Array(_*g*m),v=new Float32Array(f*g*m);for(let P=0;P<m;P++){let L=P%3*2/3-1,U=P>2?0:-1,T=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];R.set(T,y*g*P),S.set(p,_*g*P);let b=[P,P,P,P,P,P];v.set(b,f*g*P)}let I=new Se;I.setAttribute("position",new dn(R,y)),I.setAttribute("uv",new dn(S,_)),I.setAttribute("faceIndex",new dn(v,f)),t.push(I),s>lr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pd(i,t,e){let n=new ii(i,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bl(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function g_(i,t,e){let n=new Float32Array(xs),s=new A(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hh(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function md(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function gd(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function hh(){return`

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
	`}function __(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===za||l===Ha,h=l===ds||l===fs;if(c||h){let d=t.get(a),p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Tl(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Tl(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function x_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function y_(i,t,e,n){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(d){let p=d.attributes;for(let m in p)t.update(p[m],i.ARRAY_BUFFER)}function c(d){let p=[],m=d.index,g=d.attributes.position,y=0;if(m!==null){let R=m.array;y=m.version;for(let S=0,v=R.length;S<v;S+=3){let I=R[S+0],P=R[S+1],L=R[S+2];p.push(I,P,P,L,L,I)}}else if(g!==void 0){let R=g.array;y=g.version;for(let S=0,v=R.length/3-1;S<v;S+=3){let I=S+0,P=S+1,L=S+2;p.push(I,P,P,L,L,I)}}else return;let _=new(Gc(p)?Or:Fr)(p,1);_.version=y;let f=r.get(d);f&&t.remove(f),r.set(d,_)}function h(d){let p=r.get(d);if(p){let m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function v_(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*o),e.update(m,n,1)}function c(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,p*o,g),e.update(m,n,g))}function h(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,g);let _=0;for(let f=0;f<g;f++)_+=m[f];e.update(_,n,1)}function d(p,m,g,y){if(g===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<p.length;f++)c(p[f]/o,m[f],y[f]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,y,0,g);let f=0;for(let R=0;R<g;R++)f+=m[R]*y[R];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function M_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function S_(i,t,e){let n=new WeakMap,s=new Xe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==d){let T=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",T)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],S=0;m===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let v=a.attributes.position.count*S,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let P=new Float32Array(v*I*4*d),L=new Ur(P,v,I,d);L.type=jn,L.needsUpdate=!0;let U=S*4;for(let b=0;b<d;b++){let N=_[b],G=f[b],J=R[b],tt=v*I*4*b;for(let et=0;et<N.count;et++){let j=et*U;m===!0&&(s.fromBufferAttribute(N,et),P[tt+j+0]=s.x,P[tt+j+1]=s.y,P[tt+j+2]=s.z,P[tt+j+3]=0),g===!0&&(s.fromBufferAttribute(G,et),P[tt+j+4]=s.x,P[tt+j+5]=s.y,P[tt+j+6]=s.z,P[tt+j+7]=0),y===!0&&(s.fromBufferAttribute(J,et),P[tt+j+8]=s.x,P[tt+j+9]=s.y,P[tt+j+10]=s.z,P[tt+j+11]=J.itemSize===4?s.w:1)}}p={count:d,texture:L,size:new mt(v,I)},n.set(a,p),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function E_(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ud=new vn,_d=new Xr(1,1),Fd=new Ur,Od=new ra,Bd=new zr,xd=[],yd=[],vd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);function hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xd[s];if(r===void 0&&(r=new Float32Array(s),xd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rl(i,t){let e=yd[t];e===void 0&&(e=new Int32Array(t),yd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function b_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function w_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function T_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function A_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function R_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;Sd.set(n),i.uniformMatrix2fv(this.addr,!1,Sd),Je(e,n)}}function C_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;Md.set(n),i.uniformMatrix3fv(this.addr,!1,Md),Je(e,n)}}function P_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;vd.set(n),i.uniformMatrix4fv(this.addr,!1,vd),Je(e,n)}}function I_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function D_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function N_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function U_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function F_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function O_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function B_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function z_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_d.compareFunction=Hc,r=_d):r=Ud,e.setTexture2D(t||r,s)}function H_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Od,s)}function k_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bd,s)}function V_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fd,s)}function G_(i){switch(i){case 5126:return b_;case 35664:return w_;case 35665:return T_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return I_;case 35667:case 35671:return D_;case 35668:case 35672:return L_;case 35669:case 35673:return N_;case 5125:return U_;case 36294:return F_;case 36295:return O_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return V_}}function W_(i,t){i.uniform1fv(this.addr,t)}function X_(i,t){let e=hr(t,this.size,2);i.uniform2fv(this.addr,e)}function Y_(i,t){let e=hr(t,this.size,3);i.uniform3fv(this.addr,e)}function q_(i,t){let e=hr(t,this.size,4);i.uniform4fv(this.addr,e)}function Z_(i,t){let e=hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function K_(i,t){let e=hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function J_(i,t){let e=hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $_(i,t){i.uniform1iv(this.addr,t)}function j_(i,t){i.uniform2iv(this.addr,t)}function Q_(i,t){i.uniform3iv(this.addr,t)}function t0(i,t){i.uniform4iv(this.addr,t)}function e0(i,t){i.uniform1uiv(this.addr,t)}function n0(i,t){i.uniform2uiv(this.addr,t)}function i0(i,t){i.uniform3uiv(this.addr,t)}function s0(i,t){i.uniform4uiv(this.addr,t)}function r0(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ud,r[o])}function o0(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Od,r[o])}function a0(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bd,r[o])}function l0(i,t,e){let n=this.cache,s=t.length,r=Rl(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fd,r[o])}function c0(i){switch(i){case 5126:return W_;case 35664:return X_;case 35665:return Y_;case 35666:return q_;case 35674:return Z_;case 35675:return K_;case 35676:return J_;case 5124:case 35670:return $_;case 35667:case 35671:return j_;case 35668:case 35672:return Q_;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return l0}}var eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=G_(e.type)}},nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=c0(e.type)}},ih=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},th=/(\w+)(\])?(\[|\.)?/g;function Ed(i,t){i.seq.push(t),i.map[t.id]=t}function h0(i,t,e){let n=i.name,s=n.length;for(th.lastIndex=0;;){let r=th.exec(n),o=th.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ed(e,c===void 0?new eh(a,i,t):new nh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ih(a),Ed(e,d)),e=d}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);h0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function bd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var u0=37297,d0=0;function f0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var wd=new he;function p0(i){Ee._getMatrix(wd,Ee.workingColorSpace,i);let t=`mat3( ${wd.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(i)){case Dr:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Td(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+f0(i.getShaderSource(t),a)}else return r}function m0(i,t){let e=p0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function g0(i,t){let e;switch(t){case Ou:e="Linear";break;case Bu:e="Reinhard";break;case zu:e="Cineon";break;case Hu:e="ACESFilmic";break;case Vu:e="AgX";break;case Gu:e="Neutral";break;case ku:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wl=new A;function _0(){Ee.getLuminanceCoefficients(wl);let i=wl.x.toFixed(4),t=wl.y.toFixed(4),e=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function y0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function v0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function go(i){return i!==""}function Ad(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(i){return i.replace(M0,E0)}var S0=new Map;function E0(i,t){let e=ge[t];if(e===void 0){let n=S0.get(t);if(n!==void 0)e=ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sh(e)}var b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cd(i){return i.replace(b0,w0)}function w0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function T0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function A0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case fs:t="ENVMAP_TYPE_CUBE";break;case co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function R0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function C0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pc:t="ENVMAP_BLENDING_MULTIPLY";break;case Uu:t="ENVMAP_BLENDING_MIX";break;case Fu:t="ENVMAP_BLENDING_ADD";break}return t}function P0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function I0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=T0(e),c=A0(e),h=R0(e),d=C0(e),p=P0(e),m=x0(e),g=y0(r),y=s.createProgram(),_,f,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(go).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(go).join(`
`),f.length>0&&(f+=`
`)):(_=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),f=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?ge.tonemapping_pars_fragment:"",e.toneMapping!==wi?g0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,m0("linearToOutputTexel",e.outputColorSpace),_0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(go).join(`
`)),o=sh(o),o=Ad(o,e),o=Rd(o,e),a=sh(a),a=Ad(a,e),a=Rd(a,e),o=Cd(o),a=Cd(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=R+_+o,v=R+f+a,I=bd(s,s.VERTEX_SHADER,S),P=bd(s,s.FRAGMENT_SHADER,v);s.attachShader(y,I),s.attachShader(y,P),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(N){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(y)||"",J=s.getShaderInfoLog(I)||"",tt=s.getShaderInfoLog(P)||"",et=G.trim(),j=J.trim(),nt=tt.trim(),Z=!0,Et=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,P);else{let wt=Td(s,I,"vertex"),Bt=Td(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+et+`
`+wt+`
`+Bt)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(j===""||nt==="")&&(Et=!1);Et&&(N.diagnostics={runnable:Z,programLog:et,vertexShader:{log:j,prefix:_},fragmentShader:{log:nt,prefix:f}})}s.deleteShader(I),s.deleteShader(P),U=new cr(s,y),T=v0(s,y)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,u0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=P,this}var D0=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oh(t),e.set(t,n)),n}},oh=class{constructor(t){this.id=D0++,this.code=t,this.usedTimes=0}};function L0(i,t,e,n,s,r,o){let a=new Ys,l=new rh,c=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,b,N,G,J){let tt=G.fog,et=J.geometry,j=T.isMeshStandardMaterial?G.environment:null,nt=(T.isMeshStandardMaterial?e:t).get(T.envMap||j),Z=nt&&nt.mapping===co?nt.image.height:null,Et=g[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));let wt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Bt=wt!==void 0?wt.length:0,te=0;et.morphAttributes.position!==void 0&&(te=1),et.morphAttributes.normal!==void 0&&(te=2),et.morphAttributes.color!==void 0&&(te=3);let se,pe,re,st;if(Et){let ot=hi[Et];se=ot.vertexShader,pe=ot.fragmentShader}else se=T.vertexShader,pe=T.fragmentShader,l.update(T),re=l.getVertexShaderID(T),st=l.getFragmentShaderID(T);let yt=i.getRenderTarget(),H=i.state.buffers.depth.getReversed(),V=J.isInstancedMesh===!0,ut=J.isBatchedMesh===!0,Wt=!!T.map,ee=!!T.matcap,D=!!nt,dt=!!T.aoMap,ht=!!T.lightMap,lt=!!T.bumpMap,ct=!!T.normalMap,Mt=!!T.displacementMap,vt=!!T.emissiveMap,Rt=!!T.metalnessMap,le=!!T.roughnessMap,Zt=T.anisotropy>0,C=T.clearcoat>0,x=T.dispersion>0,z=T.iridescence>0,Q=T.sheen>0,_t=T.transmission>0,rt=Zt&&!!T.anisotropyMap,Ut=C&&!!T.clearcoatMap,Dt=C&&!!T.clearcoatNormalMap,Xt=C&&!!T.clearcoatRoughnessMap,kt=z&&!!T.iridescenceMap,xt=z&&!!T.iridescenceThicknessMap,Ft=Q&&!!T.sheenColorMap,jt=Q&&!!T.sheenRoughnessMap,Kt=!!T.specularMap,Ot=!!T.specularColorMap,ce=!!T.specularIntensityMap,O=_t&&!!T.transmissionMap,Ct=_t&&!!T.thicknessMap,It=!!T.gradientMap,Gt=!!T.alphaMap,Tt=T.alphaTest>0,ft=!!T.alphaHash,gt=!!T.extensions,ne=wi;T.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ne=i.toneMapping);let qt={shaderID:Et,shaderType:T.type,shaderName:T.name,vertexShader:se,fragmentShader:pe,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:st,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:ut,batchingColor:ut&&J._colorsTexture!==null,instancing:V,instancingColor:V&&J.instanceColor!==null,instancingMorph:V&&J.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:ss,alphaToCoverage:!!T.alphaToCoverage,map:Wt,matcap:ee,envMap:D,envMapMode:D&&nt.mapping,envMapCubeUVHeight:Z,aoMap:dt,lightMap:ht,bumpMap:lt,normalMap:ct,displacementMap:p&&Mt,emissiveMap:vt,normalMapObjectSpace:ct&&T.normalMapType===qu,normalMapTangentSpace:ct&&T.normalMapType===zc,metalnessMap:Rt,roughnessMap:le,anisotropy:Zt,anisotropyMap:rt,clearcoat:C,clearcoatMap:Ut,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Xt,dispersion:x,iridescence:z,iridescenceMap:kt,iridescenceThicknessMap:xt,sheen:Q,sheenColorMap:Ft,sheenRoughnessMap:jt,specularMap:Kt,specularColorMap:Ot,specularIntensityMap:ce,transmission:_t,transmissionMap:O,thicknessMap:Ct,gradientMap:It,opaque:T.transparent===!1&&T.blending===ns&&T.alphaToCoverage===!1,alphaMap:Gt,alphaTest:Tt,alphaHash:ft,combine:T.combine,mapUv:Wt&&y(T.map.channel),aoMapUv:dt&&y(T.aoMap.channel),lightMapUv:ht&&y(T.lightMap.channel),bumpMapUv:lt&&y(T.bumpMap.channel),normalMapUv:ct&&y(T.normalMap.channel),displacementMapUv:Mt&&y(T.displacementMap.channel),emissiveMapUv:vt&&y(T.emissiveMap.channel),metalnessMapUv:Rt&&y(T.metalnessMap.channel),roughnessMapUv:le&&y(T.roughnessMap.channel),anisotropyMapUv:rt&&y(T.anisotropyMap.channel),clearcoatMapUv:Ut&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:jt&&y(T.sheenRoughnessMap.channel),specularMapUv:Kt&&y(T.specularMap.channel),specularColorMapUv:Ot&&y(T.specularColorMap.channel),specularIntensityMapUv:ce&&y(T.specularIntensityMap.channel),transmissionMapUv:O&&y(T.transmissionMap.channel),thicknessMapUv:Ct&&y(T.thicknessMap.channel),alphaMapUv:Gt&&y(T.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(ct||Zt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!et.attributes.uv&&(Wt||Gt),fog:!!tt,useFog:T.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:H,skinning:J.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Wt&&T.map.isVideoTexture===!0&&Ee.getTransfer(T.map.colorSpace)===Pe,decodeVideoTextureEmissive:vt&&T.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(T.emissiveMap.colorSpace)===Pe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pn,flipSided:T.side===En,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:gt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&T.extensions.multiDraw===!0||ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function f(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let N in T.defines)b.push(N),b.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(R(b,T),S(b,T),b.push(i.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function R(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function S(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){let b=g[T.type],N;if(b){let G=hi[b];N=sd.clone(G.uniforms)}else N=T.uniforms;return N}function I(T,b){let N;for(let G=0,J=h.length;G<J;G++){let tt=h[G];if(tt.cacheKey===b){N=tt,++N.usedTimes;break}}return N===void 0&&(N=new I0(i,b,T,r),h.push(N)),N}function P(T){if(--T.usedTimes===0){let b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function L(T){l.remove(T)}function U(){l.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:v,acquireProgram:I,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:U}}function N0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function U0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Id(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,p,m,g,y,_){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:_},i[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=y,f.group=_),t++,f}function a(d,p,m,g,y,_){let f=o(d,p,m,g,y,_);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(d,p,m,g,y,_){let f=o(d,p,m,g,y,_);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,p){e.length>1&&e.sort(d||U0),n.length>1&&n.sort(p||Id),s.length>1&&s.sort(p||Id)}function h(){for(let d=t,p=i.length;d<p;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function F0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Dd,i.set(n,[o])):s>=r.length?(o=new Dd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function O0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new _e};break;case"SpotLight":e={position:new A,direction:new A,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function B0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var z0=0;function H0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k0(i){let t=new O0,e=B0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new we,o=new we;function a(c){let h=0,d=0,p=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,g=0,y=0,_=0,f=0,R=0,S=0,v=0,I=0,P=0,L=0;c.sort(H0);for(let T=0,b=c.length;T<b;T++){let N=c[T],G=N.color,J=N.intensity,tt=N.distance,et=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=G.r*J,d+=G.g*J,p+=G.b*J;else if(N.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(N.sh.coefficients[j],J);L++}else if(N.isDirectionalLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let nt=N.shadow,Z=e.get(N);Z.shadowIntensity=nt.intensity,Z.shadowBias=nt.bias,Z.shadowNormalBias=nt.normalBias,Z.shadowRadius=nt.radius,Z.shadowMapSize=nt.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=N.shadow.matrix,R++}n.directional[m]=j,m++}else if(N.isSpotLight){let j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(G).multiplyScalar(J),j.distance=tt,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,n.spot[y]=j;let nt=N.shadow;if(N.map&&(n.spotLightMap[I]=N.map,I++,nt.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[y]=nt.matrix,N.castShadow){let Z=e.get(N);Z.shadowIntensity=nt.intensity,Z.shadowBias=nt.bias,Z.shadowNormalBias=nt.normalBias,Z.shadowRadius=nt.radius,Z.shadowMapSize=nt.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=et,v++}y++}else if(N.isRectAreaLight){let j=t.get(N);j.color.copy(G).multiplyScalar(J),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=j,_++}else if(N.isPointLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){let nt=N.shadow,Z=e.get(N);Z.shadowIntensity=nt.intensity,Z.shadowBias=nt.bias,Z.shadowNormalBias=nt.normalBias,Z.shadowRadius=nt.radius,Z.shadowMapSize=nt.mapSize,Z.shadowCameraNear=nt.camera.near,Z.shadowCameraFar=nt.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=N.shadow.matrix,S++}n.point[g]=j,g++}else if(N.isHemisphereLight){let j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(J),j.groundColor.copy(N.groundColor).multiplyScalar(J),n.hemi[f]=j,f++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let U=n.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==_||U.hemiLength!==f||U.numDirectionalShadows!==R||U.numPointShadows!==S||U.numSpotShadows!==v||U.numSpotMaps!==I||U.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=_,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,U.directionalLength=m,U.pointLength=g,U.spotLength=y,U.rectAreaLength=_,U.hemiLength=f,U.numDirectionalShadows=R,U.numPointShadows=S,U.numSpotShadows=v,U.numSpotMaps=I,U.numLightProbes=L,n.version=z0++)}function l(c,h){let d=0,p=0,m=0,g=0,y=0,_=h.matrixWorldInverse;for(let f=0,R=c.length;f<R;f++){let S=c[f];if(S.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),d++}else if(S.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),m++}else if(S.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),o.identity(),r.copy(S.matrixWorld),r.premultiply(_),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),p++}else if(S.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(_),y++}}}return{setup:a,setupView:l,state:n}}function Ld(i){let t=new k0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function V0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ld(i),t.set(s,[a])):r>=o.length?(a=new Ld(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
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
}`;function X0(i,t,e){let n=new Js,s=new mt,r=new mt,o=new Xe,a=new ya({depthPacking:Yu}),l=new va,c={},h=e.maxTextureSize,d={[Mi]:En,[En]:Mi,[pn]:pn},p=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:G0,fragmentShader:W0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Se;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new bt(g,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let f=this.type;this.render=function(P,L,U){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;let T=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),G=i.state;G.setBlending(bi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let J=f!==li&&this.type===li,tt=f===li&&this.type!==li;for(let et=0,j=P.length;et<j;et++){let nt=P[et],Z=nt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Et=Z.getFrameExtents();if(s.multiply(Et),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Et.x),s.x=r.x*Et.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Et.y),s.y=r.y*Et.y,Z.mapSize.y=r.y)),Z.map===null||J===!0||tt===!0){let Bt=this.type!==li?{minFilter:Tn,magFilter:Tn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ii(s.x,s.y,Bt),Z.map.texture.name=nt.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let wt=Z.getViewportCount();for(let Bt=0;Bt<wt;Bt++){let te=Z.getViewport(Bt);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),G.viewport(o),Z.updateMatrices(nt,Bt),n=Z.getFrustum(),v(L,U,Z.camera,nt,this.type)}Z.isPointLightShadow!==!0&&this.type===li&&R(Z,U),Z.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(T,b,N)};function R(P,L){let U=t.update(y);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ii(s.x,s.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,U,p,y,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,U,m,y,null)}function S(P,L,U,T){let b=null,N=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)b=N;else if(b=U.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let G=b.uuid,J=L.uuid,tt=c[G];tt===void 0&&(tt={},c[G]=tt);let et=tt[J];et===void 0&&(et=b.clone(),tt[J]=et,L.addEventListener("dispose",I)),b=et}if(b.visible=L.visible,b.wireframe=L.wireframe,T===li?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=i.properties.get(b);G.light=U}return b}function v(P,L,U,T,b){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===li)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);let J=t.update(P),tt=P.material;if(Array.isArray(tt)){let et=J.groups;for(let j=0,nt=et.length;j<nt;j++){let Z=et[j],Et=tt[Z.materialIndex];if(Et&&Et.visible){let wt=S(P,Et,T,b);P.onBeforeShadow(i,P,L,U,J,wt,Z),i.renderBufferDirect(U,null,J,wt,P,Z),P.onAfterShadow(i,P,L,U,J,wt,Z)}}}else if(tt.visible){let et=S(P,tt,T,b);P.onBeforeShadow(i,P,L,U,J,et,null),i.renderBufferDirect(U,null,J,et,P,null),P.onAfterShadow(i,P,L,U,J,et,null)}}let G=P.children;for(let J=0,tt=G.length;J<tt;J++)v(G[J],L,U,T,b)}function I(P){P.target.removeEventListener("dispose",I);for(let U in c){let T=c[U],b=P.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var Y0={[Da]:La,[Na]:Oa,[Ua]:Ba,[is]:Fa,[La]:Da,[Oa]:Na,[Ba]:Ua,[Fa]:is};function q0(i,t){function e(){let O=!1,Ct=new Xe,It=null,Gt=new Xe(0,0,0,0);return{setMask:function(Tt){It!==Tt&&!O&&(i.colorMask(Tt,Tt,Tt,Tt),It=Tt)},setLocked:function(Tt){O=Tt},setClear:function(Tt,ft,gt,ne,qt){qt===!0&&(Tt*=ne,ft*=ne,gt*=ne),Ct.set(Tt,ft,gt,ne),Gt.equals(Ct)===!1&&(i.clearColor(Tt,ft,gt,ne),Gt.copy(Ct))},reset:function(){O=!1,It=null,Gt.set(-1,0,0,0)}}}function n(){let O=!1,Ct=!1,It=null,Gt=null,Tt=null;return{setReversed:function(ft){if(Ct!==ft){let gt=t.get("EXT_clip_control");ft?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),Ct=ft;let ne=Tt;Tt=null,this.setClear(ne)}},getReversed:function(){return Ct},setTest:function(ft){ft?yt(i.DEPTH_TEST):H(i.DEPTH_TEST)},setMask:function(ft){It!==ft&&!O&&(i.depthMask(ft),It=ft)},setFunc:function(ft){if(Ct&&(ft=Y0[ft]),Gt!==ft){switch(ft){case Da:i.depthFunc(i.NEVER);break;case La:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Gt=ft}},setLocked:function(ft){O=ft},setClear:function(ft){Tt!==ft&&(Ct&&(ft=1-ft),i.clearDepth(ft),Tt=ft)},reset:function(){O=!1,It=null,Gt=null,Tt=null,Ct=!1}}}function s(){let O=!1,Ct=null,It=null,Gt=null,Tt=null,ft=null,gt=null,ne=null,qt=null;return{setTest:function(ot){O||(ot?yt(i.STENCIL_TEST):H(i.STENCIL_TEST))},setMask:function(ot){Ct!==ot&&!O&&(i.stencilMask(ot),Ct=ot)},setFunc:function(ot,Me,ue){(It!==ot||Gt!==Me||Tt!==ue)&&(i.stencilFunc(ot,Me,ue),It=ot,Gt=Me,Tt=ue)},setOp:function(ot,Me,ue){(ft!==ot||gt!==Me||ne!==ue)&&(i.stencilOp(ot,Me,ue),ft=ot,gt=Me,ne=ue)},setLocked:function(ot){O=ot},setClear:function(ot){qt!==ot&&(i.clearStencil(ot),qt=ot)},reset:function(){O=!1,Ct=null,It=null,Gt=null,Tt=null,ft=null,gt=null,ne=null,qt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},p=new WeakMap,m=[],g=null,y=!1,_=null,f=null,R=null,S=null,v=null,I=null,P=null,L=new _e(0,0,0),U=0,T=!1,b=null,N=null,G=null,J=null,tt=null,et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,nt=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=nt>=1):Z.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=nt>=2);let Et=null,wt={},Bt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),se=new Xe().fromArray(Bt),pe=new Xe().fromArray(te);function re(O,Ct,It,Gt){let Tt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(O,ft),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<It;gt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,Gt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(Ct+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return ft}let st={};st[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),yt(i.DEPTH_TEST),o.setFunc(is),lt(!1),ct(wc),yt(i.CULL_FACE),dt(bi);function yt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function H(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function V(O,Ct){return d[O]!==Ct?(i.bindFramebuffer(O,Ct),d[O]=Ct,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ct),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function ut(O,Ct){let It=m,Gt=!1;if(O){It=p.get(Ct),It===void 0&&(It=[],p.set(Ct,It));let Tt=O.textures;if(It.length!==Tt.length||It[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,gt=Tt.length;ft<gt;ft++)It[ft]=i.COLOR_ATTACHMENT0+ft;It.length=Tt.length,Gt=!0}}else It[0]!==i.BACK&&(It[0]=i.BACK,Gt=!0);Gt&&i.drawBuffers(It)}function Wt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let ee={[Bi]:i.FUNC_ADD,[xu]:i.FUNC_SUBTRACT,[yu]:i.FUNC_REVERSE_SUBTRACT};ee[vu]=i.MIN,ee[Mu]=i.MAX;let D={[Su]:i.ZERO,[Eu]:i.ONE,[bu]:i.SRC_COLOR,[$o]:i.SRC_ALPHA,[Pu]:i.SRC_ALPHA_SATURATE,[Ru]:i.DST_COLOR,[Tu]:i.DST_ALPHA,[wu]:i.ONE_MINUS_SRC_COLOR,[jo]:i.ONE_MINUS_SRC_ALPHA,[Cu]:i.ONE_MINUS_DST_COLOR,[Au]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Nu]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(O,Ct,It,Gt,Tt,ft,gt,ne,qt,ot){if(O===bi){y===!0&&(H(i.BLEND),y=!1);return}if(y===!1&&(yt(i.BLEND),y=!0),O!==_u){if(O!==_||ot!==T){if((f!==Bi||v!==Bi)&&(i.blendEquation(i.FUNC_ADD),f=Bi,v=Bi),ot)switch(O){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFunc(i.ONE,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}R=null,S=null,I=null,P=null,L.set(0,0,0),U=0,_=O,T=ot}return}Tt=Tt||Ct,ft=ft||It,gt=gt||Gt,(Ct!==f||Tt!==v)&&(i.blendEquationSeparate(ee[Ct],ee[Tt]),f=Ct,v=Tt),(It!==R||Gt!==S||ft!==I||gt!==P)&&(i.blendFuncSeparate(D[It],D[Gt],D[ft],D[gt]),R=It,S=Gt,I=ft,P=gt),(ne.equals(L)===!1||qt!==U)&&(i.blendColor(ne.r,ne.g,ne.b,qt),L.copy(ne),U=qt),_=O,T=!1}function ht(O,Ct){O.side===pn?H(i.CULL_FACE):yt(i.CULL_FACE);let It=O.side===En;Ct&&(It=!It),lt(It),O.blending===ns&&O.transparent===!1?dt(bi):dt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Gt=O.stencilWrite;a.setTest(Gt),Gt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),vt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):H(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function ct(O){O!==pu?(yt(i.CULL_FACE),O!==N&&(O===wc?i.cullFace(i.BACK):O===mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):H(i.CULL_FACE),N=O}function Mt(O){O!==G&&(j&&i.lineWidth(O),G=O)}function vt(O,Ct,It){O?(yt(i.POLYGON_OFFSET_FILL),(J!==Ct||tt!==It)&&(i.polygonOffset(Ct,It),J=Ct,tt=It)):H(i.POLYGON_OFFSET_FILL)}function Rt(O){O?yt(i.SCISSOR_TEST):H(i.SCISSOR_TEST)}function le(O){O===void 0&&(O=i.TEXTURE0+et-1),Et!==O&&(i.activeTexture(O),Et=O)}function Zt(O,Ct,It){It===void 0&&(Et===null?It=i.TEXTURE0+et-1:It=Et);let Gt=wt[It];Gt===void 0&&(Gt={type:void 0,texture:void 0},wt[It]=Gt),(Gt.type!==O||Gt.texture!==Ct)&&(Et!==It&&(i.activeTexture(It),Et=It),i.bindTexture(O,Ct||st[O]),Gt.type=O,Gt.texture=Ct)}function C(){let O=wt[Et];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(O){se.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function jt(O){pe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),pe.copy(O))}function Kt(O,Ct){let It=c.get(Ct);It===void 0&&(It=new WeakMap,c.set(Ct,It));let Gt=It.get(O);Gt===void 0&&(Gt=i.getUniformBlockIndex(Ct,O.name),It.set(O,Gt))}function Ot(O,Ct){let Gt=c.get(Ct).get(O);l.get(Ct)!==Gt&&(i.uniformBlockBinding(Ct,Gt,O.__bindingPointIndex),l.set(Ct,Gt))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Et=null,wt={},d={},p=new WeakMap,m=[],g=null,y=!1,_=null,f=null,R=null,S=null,v=null,I=null,P=null,L=new _e(0,0,0),U=0,T=!1,b=null,N=null,G=null,J=null,tt=null,se.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:yt,disable:H,bindFramebuffer:V,drawBuffers:ut,useProgram:Wt,setBlending:dt,setMaterial:ht,setFlipSided:lt,setCullFace:ct,setLineWidth:Mt,setPolygonOffset:vt,setScissorTest:Rt,activeTexture:le,bindTexture:Zt,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:kt,texImage3D:xt,updateUBOMapping:Kt,uniformBlockBinding:Ot,texStorage2D:Dt,texStorage3D:Xt,texSubImage2D:Q,texSubImage3D:_t,compressedTexSubImage2D:rt,compressedTexSubImage3D:Ut,scissor:Ft,viewport:jt,reset:ce}}function Z0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,d,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return m?new OffscreenCanvas(C,x):Nr("canvas")}function y(C,x,z){let Q=1,_t=Zt(C);if((_t.width>z||_t.height>z)&&(Q=z/Math.max(_t.width,_t.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let rt=Math.floor(Q*_t.width),Ut=Math.floor(Q*_t.height);d===void 0&&(d=g(rt,Ut));let Dt=x?g(rt,Ut):d;return Dt.width=rt,Dt.height=Ut,Dt.getContext("2d").drawImage(C,0,0,rt,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+rt+"x"+Ut+")."),Dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),C;return C}function _(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,x,z,Q,_t=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=x;if(x===i.RED&&(z===i.FLOAT&&(rt=i.R32F),z===i.HALF_FLOAT&&(rt=i.R16F),z===i.UNSIGNED_BYTE&&(rt=i.R8)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.R8UI),z===i.UNSIGNED_SHORT&&(rt=i.R16UI),z===i.UNSIGNED_INT&&(rt=i.R32UI),z===i.BYTE&&(rt=i.R8I),z===i.SHORT&&(rt=i.R16I),z===i.INT&&(rt=i.R32I)),x===i.RG&&(z===i.FLOAT&&(rt=i.RG32F),z===i.HALF_FLOAT&&(rt=i.RG16F),z===i.UNSIGNED_BYTE&&(rt=i.RG8)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.RG8UI),z===i.UNSIGNED_SHORT&&(rt=i.RG16UI),z===i.UNSIGNED_INT&&(rt=i.RG32UI),z===i.BYTE&&(rt=i.RG8I),z===i.SHORT&&(rt=i.RG16I),z===i.INT&&(rt=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),z===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),z===i.UNSIGNED_INT&&(rt=i.RGB32UI),z===i.BYTE&&(rt=i.RGB8I),z===i.SHORT&&(rt=i.RGB16I),z===i.INT&&(rt=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),z===i.UNSIGNED_INT&&(rt=i.RGBA32UI),z===i.BYTE&&(rt=i.RGBA8I),z===i.SHORT&&(rt=i.RGBA16I),z===i.INT&&(rt=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),x===i.RGBA){let Ut=_t?Dr:Ee.getTransfer(Q);z===i.FLOAT&&(rt=i.RGBA32F),z===i.HALF_FLOAT&&(rt=i.RGBA16F),z===i.UNSIGNED_BYTE&&(rt=Ut===Pe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function v(C,x){let z;return C?x===null||x===Xi||x===rr?z=i.DEPTH24_STENCIL8:x===jn?z=i.DEPTH32F_STENCIL8:x===ir&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xi||x===rr?z=i.DEPTH_COMPONENT24:x===jn?z=i.DEPTH_COMPONENT32F:x===ir&&(z=i.DEPTH_COMPONENT16),z}function I(C,x){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==Tn&&C.minFilter!==qn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function P(C){let x=C.target;x.removeEventListener("dispose",P),U(x),x.isVideoTexture&&h.delete(x)}function L(C){let x=C.target;x.removeEventListener("dispose",L),b(x)}function U(C){let x=n.get(C);if(x.__webglInit===void 0)return;let z=C.source,Q=p.get(z);if(Q){let _t=Q[x.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&T(C),Object.keys(Q).length===0&&p.delete(z)}n.remove(C)}function T(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let z=C.source,Q=p.get(z);delete Q[x.__cacheKey],o.memory.textures--}function b(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let _t=0;_t<x.__webglFramebuffer[Q].length;_t++)i.deleteFramebuffer(x.__webglFramebuffer[Q][_t]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=C.textures;for(let Q=0,_t=z.length;Q<_t;Q++){let rt=n.get(z[Q]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(z[Q])}n.remove(C)}let N=0;function G(){N=0}function J(){let C=N;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function tt(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function et(C,x){let z=n.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(z,C,x);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function j(C,x){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){st(z,C,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function nt(C,x){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){st(z,C,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function Z(C,x){let z=n.get(C);if(C.version>0&&z.__version!==C.version){yt(z,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let Et={[Qo]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},wt={[Tn]:i.NEAREST,[Wu]:i.NEAREST_MIPMAP_NEAREST,[ho]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},Bt={[Zu]:i.NEVER,[td]:i.ALWAYS,[Ku]:i.LESS,[Hc]:i.LEQUAL,[Ju]:i.EQUAL,[Qu]:i.GEQUAL,[$u]:i.GREATER,[ju]:i.NOTEQUAL};function te(C,x){if(x.type===jn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===qn||x.magFilter===ka||x.magFilter===ho||x.magFilter===Wi||x.minFilter===qn||x.minFilter===ka||x.minFilter===ho||x.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Et[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Et[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Et[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,wt[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,wt[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Bt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Tn||x.minFilter!==ho&&x.minFilter!==Wi||x.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function se(C,x){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",P));let Q=x.source,_t=p.get(Q);_t===void 0&&(_t={},p.set(Q,_t));let rt=tt(x);if(rt!==C.__cacheKey){_t[rt]===void 0&&(_t[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),_t[rt].usedTimes++;let Ut=_t[C.__cacheKey];Ut!==void 0&&(_t[C.__cacheKey].usedTimes--,Ut.usedTimes===0&&T(x)),C.__cacheKey=rt,C.__webglTexture=_t[rt].texture}return z}function pe(C,x,z){return Math.floor(Math.floor(C/z)/x)}function re(C,x,z,Q){let rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,Q,x.data);else{rt.sort((xt,Ft)=>xt.start-Ft.start);let Ut=0;for(let xt=1;xt<rt.length;xt++){let Ft=rt[Ut],jt=rt[xt],Kt=Ft.start+Ft.count,Ot=pe(jt.start,x.width,4),ce=pe(Ft.start,x.width,4);jt.start<=Kt+1&&Ot===ce&&pe(jt.start+jt.count-1,x.width,4)===Ot?Ft.count=Math.max(Ft.count,jt.start+jt.count-Ft.start):(++Ut,rt[Ut]=jt)}rt.length=Ut+1;let Dt=i.getParameter(i.UNPACK_ROW_LENGTH),Xt=i.getParameter(i.UNPACK_SKIP_PIXELS),kt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let xt=0,Ft=rt.length;xt<Ft;xt++){let jt=rt[xt],Kt=Math.floor(jt.start/4),Ot=Math.ceil(jt.count/4),ce=Kt%x.width,O=Math.floor(Kt/x.width),Ct=Ot,It=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,ce,O,Ct,It,z,Q,x.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,kt)}}function st(C,x,z){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);let _t=se(C,x),rt=x.source;e.bindTexture(Q,C.__webglTexture,i.TEXTURE0+z);let Ut=n.get(rt);if(rt.version!==Ut.__version||_t===!0){e.activeTexture(i.TEXTURE0+z);let Dt=Ee.getPrimaries(Ee.workingColorSpace),Xt=x.colorSpace===Ti?null:Ee.getPrimaries(x.colorSpace),kt=x.colorSpace===Ti||Dt===Xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let xt=y(x.image,!1,s.maxTextureSize);xt=le(x,xt);let Ft=r.convert(x.format,x.colorSpace),jt=r.convert(x.type),Kt=S(x.internalFormat,Ft,jt,x.colorSpace,x.isVideoTexture);te(Q,x);let Ot,ce=x.mipmaps,O=x.isVideoTexture!==!0,Ct=Ut.__version===void 0||_t===!0,It=rt.dataReady,Gt=I(x,xt);if(x.isDepthTexture)Kt=v(x.format===or,x.type),Ct&&(O?e.texStorage2D(i.TEXTURE_2D,1,Kt,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,Kt,xt.width,xt.height,0,Ft,jt,null));else if(x.isDataTexture)if(ce.length>0){O&&Ct&&e.texStorage2D(i.TEXTURE_2D,Gt,Kt,ce[0].width,ce[0].height);for(let Tt=0,ft=ce.length;Tt<ft;Tt++)Ot=ce[Tt],O?It&&e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Ot.width,Ot.height,Ft,jt,Ot.data):e.texImage2D(i.TEXTURE_2D,Tt,Kt,Ot.width,Ot.height,0,Ft,jt,Ot.data);x.generateMipmaps=!1}else O?(Ct&&e.texStorage2D(i.TEXTURE_2D,Gt,Kt,xt.width,xt.height),It&&re(x,xt,Ft,jt)):e.texImage2D(i.TEXTURE_2D,0,Kt,xt.width,xt.height,0,Ft,jt,xt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Kt,ce[0].width,ce[0].height,xt.depth);for(let Tt=0,ft=ce.length;Tt<ft;Tt++)if(Ot=ce[Tt],x.format!==zn)if(Ft!==null)if(O){if(It)if(x.layerUpdates.size>0){let gt=Zc(Ot.width,Ot.height,x.format,x.type);for(let ne of x.layerUpdates){let qt=Ot.data.subarray(ne*gt/Ot.data.BYTES_PER_ELEMENT,(ne+1)*gt/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,ne,Ot.width,Ot.height,1,Ft,qt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,0,Ot.width,Ot.height,xt.depth,Ft,Ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Tt,Kt,Ot.width,Ot.height,xt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?It&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,0,Ot.width,Ot.height,xt.depth,Ft,jt,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Tt,Kt,Ot.width,Ot.height,xt.depth,0,Ft,jt,Ot.data)}else{O&&Ct&&e.texStorage2D(i.TEXTURE_2D,Gt,Kt,ce[0].width,ce[0].height);for(let Tt=0,ft=ce.length;Tt<ft;Tt++)Ot=ce[Tt],x.format!==zn?Ft!==null?O?It&&e.compressedTexSubImage2D(i.TEXTURE_2D,Tt,0,0,Ot.width,Ot.height,Ft,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,Tt,Kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?It&&e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Ot.width,Ot.height,Ft,jt,Ot.data):e.texImage2D(i.TEXTURE_2D,Tt,Kt,Ot.width,Ot.height,0,Ft,jt,Ot.data)}else if(x.isDataArrayTexture)if(O){if(Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Kt,xt.width,xt.height,xt.depth),It)if(x.layerUpdates.size>0){let Tt=Zc(xt.width,xt.height,x.format,x.type);for(let ft of x.layerUpdates){let gt=xt.data.subarray(ft*Tt/xt.data.BYTES_PER_ELEMENT,(ft+1)*Tt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,xt.width,xt.height,1,Ft,jt,gt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ft,jt,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Kt,xt.width,xt.height,xt.depth,0,Ft,jt,xt.data);else if(x.isData3DTexture)O?(Ct&&e.texStorage3D(i.TEXTURE_3D,Gt,Kt,xt.width,xt.height,xt.depth),It&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ft,jt,xt.data)):e.texImage3D(i.TEXTURE_3D,0,Kt,xt.width,xt.height,xt.depth,0,Ft,jt,xt.data);else if(x.isFramebufferTexture){if(Ct)if(O)e.texStorage2D(i.TEXTURE_2D,Gt,Kt,xt.width,xt.height);else{let Tt=xt.width,ft=xt.height;for(let gt=0;gt<Gt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Kt,Tt,ft,0,Ft,jt,null),Tt>>=1,ft>>=1}}else if(ce.length>0){if(O&&Ct){let Tt=Zt(ce[0]);e.texStorage2D(i.TEXTURE_2D,Gt,Kt,Tt.width,Tt.height)}for(let Tt=0,ft=ce.length;Tt<ft;Tt++)Ot=ce[Tt],O?It&&e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Ft,jt,Ot):e.texImage2D(i.TEXTURE_2D,Tt,Kt,Ft,jt,Ot);x.generateMipmaps=!1}else if(O){if(Ct){let Tt=Zt(xt);e.texStorage2D(i.TEXTURE_2D,Gt,Kt,Tt.width,Tt.height)}It&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,jt,xt)}else e.texImage2D(i.TEXTURE_2D,0,Kt,Ft,jt,xt);_(x)&&f(Q),Ut.__version=rt.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function yt(C,x,z){if(x.image.length!==6)return;let Q=se(C,x),_t=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let rt=n.get(_t);if(_t.version!==rt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);let Ut=Ee.getPrimaries(Ee.workingColorSpace),Dt=x.colorSpace===Ti?null:Ee.getPrimaries(x.colorSpace),Xt=x.colorSpace===Ti||Ut===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let kt=x.isCompressedTexture||x.image[0].isCompressedTexture,xt=x.image[0]&&x.image[0].isDataTexture,Ft=[];for(let ft=0;ft<6;ft++)!kt&&!xt?Ft[ft]=y(x.image[ft],!0,s.maxCubemapSize):Ft[ft]=xt?x.image[ft].image:x.image[ft],Ft[ft]=le(x,Ft[ft]);let jt=Ft[0],Kt=r.convert(x.format,x.colorSpace),Ot=r.convert(x.type),ce=S(x.internalFormat,Kt,Ot,x.colorSpace),O=x.isVideoTexture!==!0,Ct=rt.__version===void 0||Q===!0,It=_t.dataReady,Gt=I(x,jt);te(i.TEXTURE_CUBE_MAP,x);let Tt;if(kt){O&&Ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,ce,jt.width,jt.height);for(let ft=0;ft<6;ft++){Tt=Ft[ft].mipmaps;for(let gt=0;gt<Tt.length;gt++){let ne=Tt[gt];x.format!==zn?Kt!==null?O?It&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt,0,0,ne.width,ne.height,Kt,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt,ce,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?It&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt,0,0,ne.width,ne.height,Kt,Ot,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt,ce,ne.width,ne.height,0,Kt,Ot,ne.data)}}}else{if(Tt=x.mipmaps,O&&Ct){Tt.length>0&&Gt++;let ft=Zt(Ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,ce,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(xt){O?It&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Ft[ft].width,Ft[ft].height,Kt,Ot,Ft[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ce,Ft[ft].width,Ft[ft].height,0,Kt,Ot,Ft[ft].data);for(let gt=0;gt<Tt.length;gt++){let qt=Tt[gt].image[ft].image;O?It&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt+1,0,0,qt.width,qt.height,Kt,Ot,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt+1,ce,qt.width,qt.height,0,Kt,Ot,qt.data)}}else{O?It&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Kt,Ot,Ft[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ce,Kt,Ot,Ft[ft]);for(let gt=0;gt<Tt.length;gt++){let ne=Tt[gt];O?It&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt+1,0,0,Kt,Ot,ne.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt+1,ce,Kt,Ot,ne.image[ft])}}}_(x)&&f(i.TEXTURE_CUBE_MAP),rt.__version=_t.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function H(C,x,z,Q,_t,rt){let Ut=r.convert(z.format,z.colorSpace),Dt=r.convert(z.type),Xt=S(z.internalFormat,Ut,Dt,z.colorSpace),kt=n.get(x),xt=n.get(z);if(xt.__renderTarget=x,!kt.__hasExternalTextures){let Ft=Math.max(1,x.width>>rt),jt=Math.max(1,x.height>>rt);_t===i.TEXTURE_3D||_t===i.TEXTURE_2D_ARRAY?e.texImage3D(_t,rt,Xt,Ft,jt,x.depth,0,Ut,Dt,null):e.texImage2D(_t,rt,Xt,Ft,jt,0,Ut,Dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),vt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,_t,xt.__webglTexture,0,Mt(x)):(_t===i.TEXTURE_2D||_t>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,_t,xt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function V(C,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let Q=x.depthTexture,_t=Q&&Q.isDepthTexture?Q.type:null,rt=v(x.stencilBuffer,_t),Ut=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=Mt(x);vt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,rt,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,rt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,rt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,C)}else{let Q=x.textures;for(let _t=0;_t<Q.length;_t++){let rt=Q[_t],Ut=r.convert(rt.format,rt.colorSpace),Dt=r.convert(rt.type),Xt=S(rt.internalFormat,Ut,Dt,rt.colorSpace),kt=Mt(x);z&&vt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Xt,x.width,x.height):vt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,Xt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Xt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(x.depthTexture);Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),et(x.depthTexture,0);let _t=Q.__webglTexture,rt=Mt(x);if(x.depthTexture.format===Gs)vt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0);else if(x.depthTexture.format===or)vt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Wt(C){let x=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){let _t=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",_t)};Q.addEventListener("dispose",_t),x.__depthDisposeCallback=_t}x.__boundDepthTexture=Q}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let Q=C.texture.mipmaps;Q&&Q.length>0?ut(x.__webglFramebuffer[0],C):ut(x.__webglFramebuffer,C)}else if(z){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=i.createRenderbuffer(),V(x.__webglDepthbuffer[Q],C,!1);else{let _t=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,rt)}}else{let Q=C.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),V(x.__webglDepthbuffer,C,!1);else{let _t=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(C,x,z){let Q=n.get(C);x!==void 0&&H(Q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Wt(C)}function D(C){let x=C.texture,z=n.get(C),Q=n.get(x);C.addEventListener("dispose",L);let _t=C.textures,rt=C.isWebGLCubeRenderTarget===!0,Ut=_t.length>1;if(Ut||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,o.memory.textures++),rt){z.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[Dt]=[];for(let Xt=0;Xt<x.mipmaps.length;Xt++)z.__webglFramebuffer[Dt][Xt]=i.createFramebuffer()}else z.__webglFramebuffer[Dt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Dt=0;Dt<x.mipmaps.length;Dt++)z.__webglFramebuffer[Dt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let Dt=0,Xt=_t.length;Dt<Xt;Dt++){let kt=n.get(_t[Dt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&vt(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Dt=0;Dt<_t.length;Dt++){let Xt=_t[Dt];z.__webglColorRenderbuffer[Dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Dt]);let kt=r.convert(Xt.format,Xt.colorSpace),xt=r.convert(Xt.type),Ft=S(Xt.internalFormat,kt,xt,Xt.colorSpace,C.isXRRenderTarget===!0),jt=Mt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Ft,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,z.__webglColorRenderbuffer[Dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),V(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),te(i.TEXTURE_CUBE_MAP,x);for(let Dt=0;Dt<6;Dt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Xt=0;Xt<x.mipmaps.length;Xt++)H(z.__webglFramebuffer[Dt][Xt],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Xt);else H(z.__webglFramebuffer[Dt],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);_(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let Dt=0,Xt=_t.length;Dt<Xt;Dt++){let kt=_t[Dt],xt=n.get(kt),Ft=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ft=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ft,xt.__webglTexture),te(Ft,kt),H(z.__webglFramebuffer,C,kt,i.COLOR_ATTACHMENT0+Dt,Ft,0),_(kt)&&f(Ft)}e.unbindTexture()}else{let Dt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Dt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Dt,Q.__webglTexture),te(Dt,x),x.mipmaps&&x.mipmaps.length>0)for(let Xt=0;Xt<x.mipmaps.length;Xt++)H(z.__webglFramebuffer[Xt],C,x,i.COLOR_ATTACHMENT0,Dt,Xt);else H(z.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,Dt,0);_(x)&&f(Dt),e.unbindTexture()}C.depthBuffer&&Wt(C)}function dt(C){let x=C.textures;for(let z=0,Q=x.length;z<Q;z++){let _t=x[z];if(_(_t)){let rt=R(C),Ut=n.get(_t).__webglTexture;e.bindTexture(rt,Ut),f(rt),e.unbindTexture()}}}let ht=[],lt=[];function ct(C){if(C.samples>0){if(vt(C)===!1){let x=C.textures,z=C.width,Q=C.height,_t=i.COLOR_BUFFER_BIT,rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(C),Dt=x.length>1;if(Dt)for(let kt=0;kt<x.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);let Xt=C.texture.mipmaps;Xt&&Xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let kt=0;kt<x.length;kt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(_t|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(_t|=i.STENCIL_BUFFER_BIT)),Dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[kt]);let xt=n.get(x[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,z,Q,0,0,z,Q,_t,i.NEAREST),l===!0&&(ht.length=0,lt.length=0,ht.push(i.COLOR_ATTACHMENT0+kt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ht.push(rt),lt.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Dt)for(let kt=0;kt<x.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[kt]);let xt=n.get(x[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Mt(C){return Math.min(s.maxSamples,C.samples)}function vt(C){let x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Rt(C){let x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function le(C,x){let z=C.colorSpace,Q=C.format,_t=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==ss&&z!==Ti&&(Ee.getTransfer(z)===Pe?(Q!==zn||_t!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=G,this.setTexture2D=et,this.setTexture2DArray=j,this.setTexture3D=nt,this.setTextureCube=Z,this.rebindTextures=ee,this.setupRenderTarget=D,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=H,this.useMultisampledRTT=vt}function K0(i,t){function e(n,s=Ti){let r,o=Ee.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===Ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dc)return i.BYTE;if(n===Lc)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===Va)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===sr)return i.HALF_FLOAT;if(n===Fc)return i.ALPHA;if(n===Oc)return i.RGB;if(n===zn)return i.RGBA;if(n===Gs)return i.DEPTH_COMPONENT;if(n===or)return i.DEPTH_STENCIL;if(n===Xa)return i.RED;if(n===Ya)return i.RED_INTEGER;if(n===Bc)return i.RG;if(n===qa)return i.RG_INTEGER;if(n===Za)return i.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(o===Pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===Ja||n===$a||n===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===tl)return o===Pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ll)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ml)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gl||n===_l||n===xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gl)return o===Pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===vl||n===Ml||n===Sl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var J0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$0=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Zn({vertexShader:J0,fragmentShader:$0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lh=class extends ni{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,p=null,m=null,g=null,y=typeof XRWebGLBinding<"u",_=new ah,f={},R=e.getContextAttributes(),S=null,v=null,I=[],P=[],L=new mt,U=null,T=new an;T.viewport=new Xe;let b=new an;b.viewport=new Xe;let N=[T,b],G=new Ia,J=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let yt=I[st];return yt===void 0&&(yt=new qs,I[st]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(st){let yt=I[st];return yt===void 0&&(yt=new qs,I[st]=yt),yt.getGripSpace()},this.getHand=function(st){let yt=I[st];return yt===void 0&&(yt=new qs,I[st]=yt),yt.getHandSpace()};function et(st){let yt=P.indexOf(st.inputSource);if(yt===-1)return;let H=I[yt];H!==void 0&&(H.update(st.inputSource,st.frame,c||o),H.dispatchEvent({type:st.type,data:st.inputSource}))}function j(){s.removeEventListener("select",et),s.removeEventListener("selectstart",et),s.removeEventListener("selectend",et),s.removeEventListener("squeeze",et),s.removeEventListener("squeezestart",et),s.removeEventListener("squeezeend",et),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",nt);for(let st=0;st<I.length;st++){let yt=P[st];yt!==null&&(P[st]=null,I[st].disconnect(yt))}J=null,tt=null,_.reset();for(let st in f)delete f[st];t.setRenderTarget(S),m=null,p=null,d=null,s=null,v=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",et),s.addEventListener("selectstart",et),s.addEventListener("selectend",et),s.addEventListener("squeeze",et),s.addEventListener("squeezestart",et),s.addEventListener("squeezeend",et),s.addEventListener("end",j),s.addEventListener("inputsourceschange",nt),R.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,V=null,ut=null;R.depth&&(ut=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=R.stencil?or:Gs,V=R.stencil?rr:Xi);let Wt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(Wt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new ii(p.textureWidth,p.textureHeight,{format:zn,type:$n,depthTexture:new Xr(p.textureWidth,p.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let H={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,H),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new ii(m.framebufferWidth,m.framebufferHeight,{format:zn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function nt(st){for(let yt=0;yt<st.removed.length;yt++){let H=st.removed[yt],V=P.indexOf(H);V>=0&&(P[V]=null,I[V].disconnect(H))}for(let yt=0;yt<st.added.length;yt++){let H=st.added[yt],V=P.indexOf(H);if(V===-1){for(let Wt=0;Wt<I.length;Wt++)if(Wt>=P.length){P.push(H),V=Wt;break}else if(P[Wt]===null){P[Wt]=H,V=Wt;break}if(V===-1)break}let ut=I[V];ut&&ut.connect(H)}}let Z=new A,Et=new A;function wt(st,yt,H){Z.setFromMatrixPosition(yt.matrixWorld),Et.setFromMatrixPosition(H.matrixWorld);let V=Z.distanceTo(Et),ut=yt.projectionMatrix.elements,Wt=H.projectionMatrix.elements,ee=ut[14]/(ut[10]-1),D=ut[14]/(ut[10]+1),dt=(ut[9]+1)/ut[5],ht=(ut[9]-1)/ut[5],lt=(ut[8]-1)/ut[0],ct=(Wt[8]+1)/Wt[0],Mt=ee*lt,vt=ee*ct,Rt=V/(-lt+ct),le=Rt*-lt;if(yt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(le),st.translateZ(Rt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),ut[10]===-1)st.projectionMatrix.copy(yt.projectionMatrix),st.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{let Zt=ee+Rt,C=D+Rt,x=Mt-le,z=vt+(V-le),Q=dt*D/C*Zt,_t=ht*D/C*Zt;st.projectionMatrix.makePerspective(x,z,Q,_t,Zt,C),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function Bt(st,yt){yt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(yt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let yt=st.near,H=st.far;_.texture!==null&&(_.depthNear>0&&(yt=_.depthNear),_.depthFar>0&&(H=_.depthFar)),G.near=b.near=T.near=yt,G.far=b.far=T.far=H,(J!==G.near||tt!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),J=G.near,tt=G.far),G.layers.mask=st.layers.mask|6,T.layers.mask=G.layers.mask&3,b.layers.mask=G.layers.mask&5;let V=st.parent,ut=G.cameras;Bt(G,V);for(let Wt=0;Wt<ut.length;Wt++)Bt(ut[Wt],V);ut.length===2?wt(G,T,b):G.projectionMatrix.copy(T.projectionMatrix),te(st,G,V)};function te(st,yt,H){H===null?st.matrix.copy(yt.matrixWorld):(st.matrix.copy(H.matrixWorld),st.matrix.invert(),st.matrix.multiply(yt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(yt.projectionMatrix),st.projectionMatrixInverse.copy(yt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=rs*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(st){l=st,p!==null&&(p.fixedFoveation=st),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=st)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(G)},this.getCameraTexture=function(st){return f[st]};let se=null;function pe(st,yt){if(h=yt.getViewerPose(c||o),g=yt,h!==null){let H=h.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let V=!1;H.length!==G.cameras.length&&(G.cameras.length=0,V=!0);for(let D=0;D<H.length;D++){let dt=H[D],ht=null;if(m!==null)ht=m.getViewport(dt);else{let ct=d.getViewSubImage(p,dt);ht=ct.viewport,D===0&&(t.setRenderTargetTextures(v,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(v))}let lt=N[D];lt===void 0&&(lt=new an,lt.layers.enable(D),lt.viewport=new Xe,N[D]=lt),lt.matrix.fromArray(dt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(dt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ht.x,ht.y,ht.width,ht.height),D===0&&(G.matrix.copy(lt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),V===!0&&G.cameras.push(lt)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let D=d.getDepthInformation(H[0]);D&&D.isValid&&D.texture&&_.init(D,s.renderState)}if(ut&&ut.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let D=0;D<H.length;D++){let dt=H[D].camera;if(dt){let ht=f[dt];ht||(ht=new Yr,f[dt]=ht);let lt=d.getCameraImage(dt);ht.sourceTexture=lt}}}}for(let H=0;H<I.length;H++){let V=P[H],ut=I[H];V!==null&&ut!==void 0&&ut.update(V,yt,c||o)}se&&se(st,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),g=null}let re=new Nd;re.setAnimationLoop(pe),this.setAnimationLoop=function(st){se=st},this.dispose=function(){}}},gs=new Mn,j0=new we;function Q0(i,t){function e(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,Wc(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,R,S,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(_,f):f.isMeshToonMaterial?(r(_,f),d(_,f)):f.isMeshPhongMaterial?(r(_,f),h(_,f)):f.isMeshStandardMaterial?(r(_,f),p(_,f),f.isMeshPhysicalMaterial&&m(_,f,v)):f.isMeshMatcapMaterial?(r(_,f),g(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),y(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(o(_,f),f.isLineDashedMaterial&&a(_,f)):f.isPointsMaterial?l(_,f,R,S):f.isSpriteMaterial?c(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,e(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===En&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,e(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===En&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,e(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,e(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);let R=t.get(f),S=R.envMap,v=R.envMapRotation;S&&(_.envMap.value=S,gs.copy(v),gs.x*=-1,gs.y*=-1,gs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),_.envMapRotation.value.setFromMatrix4(j0.makeRotationFromEuler(gs)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,_.aoMapTransform))}function o(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform))}function a(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,R,S){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*R,_.scale.value=S*.5,f.map&&(_.map.value=f.map,e(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function h(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function d(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function p(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function m(_,f,R){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,f){f.matcap&&(_.matcap.value=f.matcap)}function y(_,f){let R=t.get(f).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,S){let v=S.program;n.uniformBlockBinding(R,v)}function c(R,S){let v=s[R.id];v===void 0&&(g(R),v=h(R),s[R.id]=v,R.addEventListener("dispose",_));let I=S.program;n.updateUBOMapping(R,I);let P=t.render.frame;r[R.id]!==P&&(p(R),r[R.id]=P)}function h(R){let S=d();R.__bindingPointIndex=S;let v=i.createBuffer(),I=R.__size,P=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){let S=s[R.id],v=R.uniforms,I=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let P=0,L=v.length;P<L;P++){let U=Array.isArray(v[P])?v[P]:[v[P]];for(let T=0,b=U.length;T<b;T++){let N=U[T];if(m(N,P,T,I)===!0){let G=N.__offset,J=Array.isArray(N.value)?N.value:[N.value],tt=0;for(let et=0;et<J.length;et++){let j=J[et],nt=y(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,G+tt,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,tt),tt+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,S,v,I){let P=R.value,L=S+"_"+v;if(I[L]===void 0)return typeof P=="number"||typeof P=="boolean"?I[L]=P:I[L]=P.clone(),!0;{let U=I[L];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return I[L]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function g(R){let S=R.uniforms,v=0,I=16;for(let L=0,U=S.length;L<U;L++){let T=Array.isArray(S[L])?S[L]:[S[L]];for(let b=0,N=T.length;b<N;b++){let G=T[b],J=Array.isArray(G.value)?G.value:[G.value];for(let tt=0,et=J.length;tt<et;tt++){let j=J[tt],nt=y(j),Z=v%I,Et=Z%nt.boundary,wt=Z+Et;v+=Et,wt!==0&&I-wt<nt.storage&&(v+=I-wt),G.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=nt.storage}}}let P=v%I;return P>0&&(v+=I-P),R.__size=v,R.__cache={},this}function y(R){let S={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(S.boundary=4,S.storage=4):R.isVector2?(S.boundary=8,S.storage=8):R.isVector3||R.isColor?(S.boundary=16,S.storage=12):R.isVector4?(S.boundary=16,S.storage=16):R.isMatrix3?(S.boundary=48,S.storage=48):R.isMatrix4?(S.boundary=64,S.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),S}function _(R){let S=R.target;S.removeEventListener("dispose",_);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Al=class{constructor(t={}){let{canvas:e=ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),y=new Int32Array(4),_=null,f=null,R=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,I=!1;this._outputColorSpace=tn;let P=0,L=0,U=null,T=-1,b=null,N=new Xe,G=new Xe,J=null,tt=new _e(0),et=0,j=e.width,nt=e.height,Z=1,Et=null,wt=null,Bt=new Xe(0,0,j,nt),te=new Xe(0,0,j,nt),se=!1,pe=new Js,re=!1,st=!1,yt=new we,H=new A,V=new Xe,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function ee(){return U===null?Z:1}let D=n;function dt(w,B){return e.getContext(w,B)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),D===null){let B="webgl2";if(D=dt(B,w),D===null)throw dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,lt,ct,Mt,vt,Rt,le,Zt,C,x,z,Q,_t,rt,Ut,Dt,Xt,kt,xt,Ft,jt,Kt,Ot,ce;function O(){ht=new x_(D),ht.init(),Kt=new K0(D,ht),lt=new u_(D,ht,t,Kt),ct=new q0(D,ht),lt.reversedDepthBuffer&&p&&ct.buffers.depth.setReversed(!0),Mt=new M_(D),vt=new N0,Rt=new Z0(D,ht,ct,vt,lt,Kt,Mt),le=new f_(v),Zt=new __(v),C=new Ap(D),Ot=new c_(D,C),x=new y_(D,C,Mt,Ot),z=new E_(D,x,C,Mt),xt=new S_(D,lt,Rt),Dt=new d_(vt),Q=new L0(v,le,Zt,ht,lt,Ot,Dt),_t=new Q0(v,vt),rt=new F0,Ut=new V0(ht),kt=new l_(v,le,Zt,ct,z,m,l),Xt=new X0(v,z,lt),ce=new tx(D,Mt,lt,ct),Ft=new h_(D,ht,Mt),jt=new v_(D,ht,Mt),Mt.programs=Q.programs,v.capabilities=lt,v.extensions=ht,v.properties=vt,v.renderLists=rt,v.shadowMap=Xt,v.state=ct,v.info=Mt}O();let Ct=new lh(v,D);this.xr=Ct,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(j,nt,!1))},this.getSize=function(w){return w.set(j,nt)},this.setSize=function(w,B,Y=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,nt=B,e.width=Math.floor(w*Z),e.height=Math.floor(B*Z),Y===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(j*Z,nt*Z).floor()},this.setDrawingBufferSize=function(w,B,Y){j=w,nt=B,Z=Y,e.width=Math.floor(w*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(Bt)},this.setViewport=function(w,B,Y,$){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,B,Y,$),ct.viewport(N.copy(Bt).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,B,Y,$){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,B,Y,$),ct.scissor(G.copy(te).multiplyScalar(Z).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){ct.setScissorTest(se=w)},this.setOpaqueSort=function(w){Et=w},this.setTransparentSort=function(w){wt=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,Y=!0){let $=0;if(w){let k=!1;if(U!==null){let At=U.texture.format;k=At===Za||At===qa||At===Ya}if(k){let At=U.texture.type,zt=At===$n||At===Xi||At===ir||At===rr||At===Ga||At===Wa,Vt=kt.getClearColor(),Pt=kt.getClearAlpha(),Nt=Vt.r,$t=Vt.g,Yt=Vt.b;zt?(g[0]=Nt,g[1]=$t,g[2]=Yt,g[3]=Pt,D.clearBufferuiv(D.COLOR,0,g)):(y[0]=Nt,y[1]=$t,y[2]=Yt,y[3]=Pt,D.clearBufferiv(D.COLOR,0,y))}else $|=D.COLOR_BUFFER_BIT}B&&($|=D.DEPTH_BUFFER_BIT),Y&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),kt.dispose(),rt.dispose(),Ut.dispose(),vt.dispose(),le.dispose(),Zt.dispose(),z.dispose(),Ot.dispose(),ce.dispose(),Q.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ue),Ct.removeEventListener("sessionend",xe),nn.stop()};function It(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let w=Mt.autoReset,B=Xt.enabled,Y=Xt.autoUpdate,$=Xt.needsUpdate,k=Xt.type;O(),Mt.autoReset=w,Xt.enabled=B,Xt.autoUpdate=Y,Xt.needsUpdate=$,Xt.type=k}function Tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ft(w){let B=w.target;B.removeEventListener("dispose",ft),gt(B)}function gt(w){ne(w),vt.remove(w)}function ne(w){let B=vt.get(w).programs;B!==void 0&&(B.forEach(function(Y){Q.releaseProgram(Y)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,Y,$,k,At){B===null&&(B=ut);let zt=k.isMesh&&k.matrixWorld.determinant()<0,Vt=Hn(w,B,Y,$,k);ct.setMaterial($,zt);let Pt=Y.index,Nt=1;if($.wireframe===!0){if(Pt=x.getWireframeAttribute(Y),Pt===void 0)return;Nt=2}let $t=Y.drawRange,Yt=Y.attributes.position,ie=$t.start*Nt,Ae=($t.start+$t.count)*Nt;At!==null&&(ie=Math.max(ie,At.start*Nt),Ae=Math.min(Ae,(At.start+At.count)*Nt)),Pt!==null?(ie=Math.max(ie,0),Ae=Math.min(Ae,Pt.count)):Yt!=null&&(ie=Math.max(ie,0),Ae=Math.min(Ae,Yt.count));let De=Ae-ie;if(De<0||De===1/0)return;Ot.setup(k,$,Vt,Y,Pt);let be,Re=Ft;if(Pt!==null&&(be=C.get(Pt),Re=jt,Re.setIndex(be)),k.isMesh)$.wireframe===!0?(ct.setLineWidth($.wireframeLinewidth*ee()),Re.setMode(D.LINES)):Re.setMode(D.TRIANGLES);else if(k.isLine){let Qt=$.linewidth;Qt===void 0&&(Qt=1),ct.setLineWidth(Qt*ee()),k.isLineSegments?Re.setMode(D.LINES):k.isLineLoop?Re.setMode(D.LINE_LOOP):Re.setMode(D.LINE_STRIP)}else k.isPoints?Re.setMode(D.POINTS):k.isSprite&&Re.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Re.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Qt=k._multiDrawStarts,Ne=k._multiDrawCounts,ve=k._multiDrawCount,ln=Pt?C.get(Pt).bytesPerElement:1,di=vt.get($).currentProgram.getUniforms();for(let cn=0;cn<ve;cn++)di.setValue(D,"_gl_DrawID",cn),Re.render(Qt[cn]/ln,Ne[cn])}else if(k.isInstancedMesh)Re.renderInstances(ie,De,k.count);else if(Y.isInstancedBufferGeometry){let Qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ne=Math.min(Y.instanceCount,Qt);Re.renderInstances(ie,De,Ne)}else Re.render(ie,De)};function qt(w,B,Y){w.transparent===!0&&w.side===pn&&w.forceSinglePass===!1?(w.side=En,w.needsUpdate=!0,Zi(w,B,Y),w.side=Mi,w.needsUpdate=!0,Zi(w,B,Y),w.side=pn):Zi(w,B,Y)}this.compile=function(w,B,Y=null){Y===null&&(Y=w),f=Ut.get(Y),f.init(B),S.push(f),Y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),w!==Y&&w.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();let $=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let At=k.material;if(At)if(Array.isArray(At))for(let zt=0;zt<At.length;zt++){let Vt=At[zt];qt(Vt,Y,k),$.add(Vt)}else qt(At,Y,k),$.add(At)}),f=S.pop(),$},this.compileAsync=function(w,B,Y=null){let $=this.compile(w,B,Y);return new Promise(k=>{function At(){if($.forEach(function(zt){vt.get(zt).currentProgram.isReady()&&$.delete(zt)}),$.size===0){k(w);return}setTimeout(At,10)}ht.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ot=null;function Me(w){ot&&ot(w)}function ue(){nn.stop()}function xe(){nn.start()}let nn=new Nd;nn.setAnimationLoop(Me),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(w){ot=w,Ct.setAnimationLoop(w),w===null?nn.stop():nn.start()},Ct.addEventListener("sessionstart",ue),Ct.addEventListener("sessionend",xe),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(B),B=Ct.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,U),f=Ut.get(w,S.length),f.init(B),S.push(f),yt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),pe.setFromProjectionMatrix(yt,Yn,B.reversedDepth),st=this.localClippingEnabled,re=Dt.init(this.clippingPlanes,st),_=rt.get(w,R.length),_.init(),R.push(_),Ct.enabled===!0&&Ct.isPresenting===!0){let At=v.xr.getDepthSensingMesh();At!==null&&qi(At,B,-1/0,v.sortObjects)}qi(w,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Et,wt),Wt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Wt&&kt.addToRenderList(_,w),this.info.render.frame++,re===!0&&Dt.beginShadows();let Y=f.state.shadowsArray;Xt.render(Y,w,B),re===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=_.opaque,k=_.transmissive;if(f.setupLights(),B.isArrayCamera){let At=B.cameras;if(k.length>0)for(let zt=0,Vt=At.length;zt<Vt;zt++){let Pt=At[zt];Ln($,k,w,Pt)}Wt&&kt.render(w);for(let zt=0,Vt=At.length;zt<Vt;zt++){let Pt=At[zt];Ms(_,w,Pt,Pt.viewport)}}else k.length>0&&Ln($,k,w,B),Wt&&kt.render(w),Ms(_,w,B);U!==null&&L===0&&(Rt.updateMultisampleRenderTarget(U),Rt.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(v,w,B),Ot.resetDefaultState(),T=-1,b=null,S.pop(),S.length>0?(f=S[S.length-1],re===!0&&Dt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function qi(w,B,Y,$){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||pe.intersectsSprite(w)){$&&V.setFromMatrixPosition(w.matrixWorld).applyMatrix4(yt);let zt=z.update(w),Vt=w.material;Vt.visible&&_.push(w,zt,Vt,Y,V.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||pe.intersectsObject(w))){let zt=z.update(w),Vt=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),V.copy(w.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),V.copy(zt.boundingSphere.center)),V.applyMatrix4(w.matrixWorld).applyMatrix4(yt)),Array.isArray(Vt)){let Pt=zt.groups;for(let Nt=0,$t=Pt.length;Nt<$t;Nt++){let Yt=Pt[Nt],ie=Vt[Yt.materialIndex];ie&&ie.visible&&_.push(w,zt,ie,Y,V.z,Yt)}}else Vt.visible&&_.push(w,zt,Vt,Y,V.z,null)}}let At=w.children;for(let zt=0,Vt=At.length;zt<Vt;zt++)qi(At[zt],B,Y,$)}function Ms(w,B,Y,$){let k=w.opaque,At=w.transmissive,zt=w.transparent;f.setupLightsView(Y),re===!0&&Dt.setGlobalState(v.clippingPlanes,Y),$&&ct.viewport(N.copy($)),k.length>0&&Ai(k,B,Y),At.length>0&&Ai(At,B,Y),zt.length>0&&Ai(zt,B,Y),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Ln(w,B,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new ii(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?sr:$n,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));let At=f.state.transmissionRenderTarget[$.id],zt=$.viewport||N;At.setSize(zt.z*v.transmissionResolutionScale,zt.w*v.transmissionResolutionScale);let Vt=v.getRenderTarget(),Pt=v.getActiveCubeFace(),Nt=v.getActiveMipmapLevel();v.setRenderTarget(At),v.getClearColor(tt),et=v.getClearAlpha(),et<1&&v.setClearColor(16777215,.5),v.clear(),Wt&&kt.render(Y);let $t=v.toneMapping;v.toneMapping=wi;let Yt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),re===!0&&Dt.setGlobalState(v.clippingPlanes,$),Ai(w,Y,$),Rt.updateMultisampleRenderTarget(At),Rt.updateRenderTargetMipmap(At),ht.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Ae=0,De=B.length;Ae<De;Ae++){let be=B[Ae],Re=be.object,Qt=be.geometry,Ne=be.material,ve=be.group;if(Ne.side===pn&&Re.layers.test($.layers)){let ln=Ne.side;Ne.side=En,Ne.needsUpdate=!0,Ss(Re,Y,$,Qt,Ne,ve),Ne.side=ln,Ne.needsUpdate=!0,ie=!0}}ie===!0&&(Rt.updateMultisampleRenderTarget(At),Rt.updateRenderTargetMipmap(At))}v.setRenderTarget(Vt,Pt,Nt),v.setClearColor(tt,et),Yt!==void 0&&($.viewport=Yt),v.toneMapping=$t}function Ai(w,B,Y){let $=B.isScene===!0?B.overrideMaterial:null;for(let k=0,At=w.length;k<At;k++){let zt=w[k],Vt=zt.object,Pt=zt.geometry,Nt=zt.group,$t=zt.material;$t.allowOverride===!0&&$!==null&&($t=$),Vt.layers.test(Y.layers)&&Ss(Vt,B,Y,Pt,$t,Nt)}}function Ss(w,B,Y,$,k,At){w.onBeforeRender(v,B,Y,$,k,At),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(v,B,Y,$,w,At),k.transparent===!0&&k.side===pn&&k.forceSinglePass===!1?(k.side=En,k.needsUpdate=!0,v.renderBufferDirect(Y,B,$,k,w,At),k.side=Mi,k.needsUpdate=!0,v.renderBufferDirect(Y,B,$,k,w,At),k.side=pn):v.renderBufferDirect(Y,B,$,k,w,At),w.onAfterRender(v,B,Y,$,k,At)}function Zi(w,B,Y){B.isScene!==!0&&(B=ut);let $=vt.get(w),k=f.state.lights,At=f.state.shadowsArray,zt=k.state.version,Vt=Q.getParameters(w,k.state,At,B,Y),Pt=Q.getProgramCacheKey(Vt),Nt=$.programs;$.environment=w.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(w.isMeshStandardMaterial?Zt:le).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Nt===void 0&&(w.addEventListener("dispose",ft),Nt=new Map,$.programs=Nt);let $t=Nt.get(Pt);if($t!==void 0){if($.currentProgram===$t&&$.lightsStateVersion===zt)return Nn(w,Vt),$t}else Vt.uniforms=Q.getUniforms(w),w.onBeforeCompile(Vt,v),$t=Q.acquireProgram(Vt,Pt),Nt.set(Pt,$t),$.uniforms=Vt.uniforms;let Yt=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Yt.clippingPlanes=Dt.uniform),Nn(w,Vt),$.needsLights=Mo(w),$.lightsStateVersion=zt,$.needsLights&&(Yt.ambientLightColor.value=k.state.ambient,Yt.lightProbe.value=k.state.probe,Yt.directionalLights.value=k.state.directional,Yt.directionalLightShadows.value=k.state.directionalShadow,Yt.spotLights.value=k.state.spot,Yt.spotLightShadows.value=k.state.spotShadow,Yt.rectAreaLights.value=k.state.rectArea,Yt.ltc_1.value=k.state.rectAreaLTC1,Yt.ltc_2.value=k.state.rectAreaLTC2,Yt.pointLights.value=k.state.point,Yt.pointLightShadows.value=k.state.pointShadow,Yt.hemisphereLights.value=k.state.hemi,Yt.directionalShadowMap.value=k.state.directionalShadowMap,Yt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Yt.spotShadowMap.value=k.state.spotShadowMap,Yt.spotLightMatrix.value=k.state.spotLightMatrix,Yt.spotLightMap.value=k.state.spotLightMap,Yt.pointShadowMap.value=k.state.pointShadowMap,Yt.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=$t,$.uniformsList=null,$t}function Ki(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=cr.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Nn(w,B){let Y=vt.get(w);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Hn(w,B,Y,$,k){B.isScene!==!0&&(B=ut),Rt.resetTextureUnits();let At=B.fog,zt=$.isMeshStandardMaterial?B.environment:null,Vt=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ss,Pt=($.isMeshStandardMaterial?Zt:le).get($.envMap||zt),Nt=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$t=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Yt=!!Y.morphAttributes.position,ie=!!Y.morphAttributes.normal,Ae=!!Y.morphAttributes.color,De=wi;$.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(De=v.toneMapping);let be=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Re=be!==void 0?be.length:0,Qt=vt.get($),Ne=f.state.lights;if(re===!0&&(st===!0||w!==b)){let je=w===b&&$.id===T;Dt.setState($,w,je)}let ve=!1;$.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ne.state.version||Qt.outputColorSpace!==Vt||k.isBatchedMesh&&Qt.batching===!1||!k.isBatchedMesh&&Qt.batching===!0||k.isBatchedMesh&&Qt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Qt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Qt.instancing===!1||!k.isInstancedMesh&&Qt.instancing===!0||k.isSkinnedMesh&&Qt.skinning===!1||!k.isSkinnedMesh&&Qt.skinning===!0||k.isInstancedMesh&&Qt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Qt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Qt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Qt.instancingMorph===!1&&k.morphTexture!==null||Qt.envMap!==Pt||$.fog===!0&&Qt.fog!==At||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Dt.numPlanes||Qt.numIntersection!==Dt.numIntersection)||Qt.vertexAlphas!==Nt||Qt.vertexTangents!==$t||Qt.morphTargets!==Yt||Qt.morphNormals!==ie||Qt.morphColors!==Ae||Qt.toneMapping!==De||Qt.morphTargetsCount!==Re)&&(ve=!0):(ve=!0,Qt.__version=$.version);let ln=Qt.currentProgram;ve===!0&&(ln=Zi($,B,k));let di=!1,cn=!1,Ri=!1,Ue=ln.getUniforms(),sn=Qt.uniforms;if(ct.useProgram(ln.program)&&(di=!0,cn=!0,Ri=!0),$.id!==T&&(T=$.id,cn=!0),di||b!==w){ct.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ue.setValue(D,"projectionMatrix",w.projectionMatrix),Ue.setValue(D,"viewMatrix",w.matrixWorldInverse);let rn=Ue.map.cameraPosition;rn!==void 0&&rn.setValue(D,H.setFromMatrixPosition(w.matrixWorld)),lt.logarithmicDepthBuffer&&Ue.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ue.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,cn=!0,Ri=!0)}if(k.isSkinnedMesh){Ue.setOptional(D,k,"bindMatrix"),Ue.setOptional(D,k,"bindMatrixInverse");let je=k.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Ue.setValue(D,"boneTexture",je.boneTexture,Rt))}k.isBatchedMesh&&(Ue.setOptional(D,k,"batchingTexture"),Ue.setValue(D,"batchingTexture",k._matricesTexture,Rt),Ue.setOptional(D,k,"batchingIdTexture"),Ue.setValue(D,"batchingIdTexture",k._indirectTexture,Rt),Ue.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Ue.setValue(D,"batchingColorTexture",k._colorsTexture,Rt));let _n=Y.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&xt.update(k,Y,ln),(cn||Qt.receiveShadow!==k.receiveShadow)&&(Qt.receiveShadow=k.receiveShadow,Ue.setValue(D,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(sn.envMap.value=Pt,sn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(sn.envMapIntensity.value=B.environmentIntensity),cn&&(Ue.setValue(D,"toneMappingExposure",v.toneMappingExposure),Qt.needsLights&&ur(sn,Ri),At&&$.fog===!0&&_t.refreshFogUniforms(sn,At),_t.refreshMaterialUniforms(sn,$,Z,nt,f.state.transmissionRenderTarget[w.id]),cr.upload(D,Ki(Qt),sn,Rt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(cr.upload(D,Ki(Qt),sn,Rt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ue.setValue(D,"center",k.center),Ue.setValue(D,"modelViewMatrix",k.modelViewMatrix),Ue.setValue(D,"normalMatrix",k.normalMatrix),Ue.setValue(D,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let je=$.uniformsGroups;for(let rn=0,xn=je.length;rn<xn;rn++){let Ve=je[rn];ce.update(Ve,ln),ce.bind(Ve,ln)}}return ln}function ur(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Mo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,B,Y){let $=vt.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),vt.get(w.texture).__webglTexture=B,vt.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Y,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let Y=vt.get(w);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};let dr=D.createFramebuffer();this.setRenderTarget=function(w,B=0,Y=0){U=w,P=B,L=Y;let $=!0,k=null,At=!1,zt=!1;if(w){let Pt=vt.get(w);if(Pt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Pt.__webglFramebuffer===void 0)Rt.setupRenderTarget(w);else if(Pt.__hasExternalTextures)Rt.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Yt=w.depthTexture;if(Pt.__boundDepthTexture!==Yt){if(Yt!==null&&vt.has(Yt)&&(w.width!==Yt.image.width||w.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Rt.setupDepthRenderbuffer(w)}}let Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(zt=!0);let $t=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($t[B])?k=$t[B][Y]:k=$t[B],At=!0):w.samples>0&&Rt.useMultisampledRTT(w)===!1?k=vt.get(w).__webglMultisampledFramebuffer:Array.isArray($t)?k=$t[Y]:k=$t,N.copy(w.viewport),G.copy(w.scissor),J=w.scissorTest}else N.copy(Bt).multiplyScalar(Z).floor(),G.copy(te).multiplyScalar(Z).floor(),J=se;if(Y!==0&&(k=dr),ct.bindFramebuffer(D.FRAMEBUFFER,k)&&$&&ct.drawBuffers(w,k),ct.viewport(N),ct.scissor(G),ct.setScissorTest(J),At){let Pt=vt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pt.__webglTexture,Y)}else if(zt){let Pt=B;for(let Nt=0;Nt<w.textures.length;Nt++){let $t=vt.get(w.textures[Nt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Nt,$t.__webglTexture,Y,Pt)}}else if(w!==null&&Y!==0){let Pt=vt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,Y)}T=-1},this.readRenderTargetPixels=function(w,B,Y,$,k,At,zt,Vt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Pt=Pt[zt]),Pt){ct.bindFramebuffer(D.FRAMEBUFFER,Pt);try{let Nt=w.textures[Vt],$t=Nt.format,Yt=Nt.type;if(!lt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-$&&Y>=0&&Y<=w.height-k&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Vt),D.readPixels(B,Y,$,k,Kt.convert($t),Kt.convert(Yt),At))}finally{let Nt=U!==null?vt.get(U).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(w,B,Y,$,k,At,zt,Vt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Pt=Pt[zt]),Pt)if(B>=0&&B<=w.width-$&&Y>=0&&Y<=w.height-k){ct.bindFramebuffer(D.FRAMEBUFFER,Pt);let Nt=w.textures[Vt],$t=Nt.format,Yt=Nt.type;if(!lt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ie),D.bufferData(D.PIXEL_PACK_BUFFER,At.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Vt),D.readPixels(B,Y,$,k,Kt.convert($t),Kt.convert(Yt),0);let Ae=U!==null?vt.get(U).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,Ae);let De=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await nd(D,De,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ie),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,At),D.deleteBuffer(ie),D.deleteSync(De),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,Y=0){let $=Math.pow(2,-Y),k=Math.floor(w.image.width*$),At=Math.floor(w.image.height*$),zt=B!==null?B.x:0,Vt=B!==null?B.y:0;Rt.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,zt,Vt,k,At),ct.unbindTexture()};let fr=D.createFramebuffer(),Fl=D.createFramebuffer();this.copyTextureToTexture=function(w,B,Y=null,$=null,k=0,At=null){At===null&&(k!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=k,k=0):At=0);let zt,Vt,Pt,Nt,$t,Yt,ie,Ae,De,be=w.isCompressedTexture?w.mipmaps[At]:w.image;if(Y!==null)zt=Y.max.x-Y.min.x,Vt=Y.max.y-Y.min.y,Pt=Y.isBox3?Y.max.z-Y.min.z:1,Nt=Y.min.x,$t=Y.min.y,Yt=Y.isBox3?Y.min.z:0;else{let _n=Math.pow(2,-k);zt=Math.floor(be.width*_n),Vt=Math.floor(be.height*_n),w.isDataArrayTexture?Pt=be.depth:w.isData3DTexture?Pt=Math.floor(be.depth*_n):Pt=1,Nt=0,$t=0,Yt=0}$!==null?(ie=$.x,Ae=$.y,De=$.z):(ie=0,Ae=0,De=0);let Re=Kt.convert(B.format),Qt=Kt.convert(B.type),Ne;B.isData3DTexture?(Rt.setTexture3D(B,0),Ne=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Rt.setTexture2DArray(B,0),Ne=D.TEXTURE_2D_ARRAY):(Rt.setTexture2D(B,0),Ne=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let ve=D.getParameter(D.UNPACK_ROW_LENGTH),ln=D.getParameter(D.UNPACK_IMAGE_HEIGHT),di=D.getParameter(D.UNPACK_SKIP_PIXELS),cn=D.getParameter(D.UNPACK_SKIP_ROWS),Ri=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,be.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,$t),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yt);let Ue=w.isDataArrayTexture||w.isData3DTexture,sn=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let _n=vt.get(w),je=vt.get(B),rn=vt.get(_n.__renderTarget),xn=vt.get(je.__renderTarget);ct.bindFramebuffer(D.READ_FRAMEBUFFER,rn.__webglFramebuffer),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let Ve=0;Ve<Pt;Ve++)Ue&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(w).__webglTexture,k,Yt+Ve),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(B).__webglTexture,At,De+Ve)),D.blitFramebuffer(Nt,$t,zt,Vt,ie,Ae,zt,Vt,D.DEPTH_BUFFER_BIT,D.NEAREST);ct.bindFramebuffer(D.READ_FRAMEBUFFER,null),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||vt.has(w)){let _n=vt.get(w),je=vt.get(B);ct.bindFramebuffer(D.READ_FRAMEBUFFER,fr),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fl);for(let rn=0;rn<Pt;rn++)Ue?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_n.__webglTexture,k,Yt+rn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_n.__webglTexture,k),sn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,je.__webglTexture,At,De+rn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,je.__webglTexture,At),k!==0?D.blitFramebuffer(Nt,$t,zt,Vt,ie,Ae,zt,Vt,D.COLOR_BUFFER_BIT,D.NEAREST):sn?D.copyTexSubImage3D(Ne,At,ie,Ae,De+rn,Nt,$t,zt,Vt):D.copyTexSubImage2D(Ne,At,ie,Ae,Nt,$t,zt,Vt);ct.bindFramebuffer(D.READ_FRAMEBUFFER,null),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else sn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ne,At,ie,Ae,De,zt,Vt,Pt,Re,Qt,be.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ne,At,ie,Ae,De,zt,Vt,Pt,Re,be.data):D.texSubImage3D(Ne,At,ie,Ae,De,zt,Vt,Pt,Re,Qt,be):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,At,ie,Ae,zt,Vt,Re,Qt,be.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,At,ie,Ae,be.width,be.height,Re,be.data):D.texSubImage2D(D.TEXTURE_2D,At,ie,Ae,zt,Vt,Re,Qt,be);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ln),D.pixelStorei(D.UNPACK_SKIP_PIXELS,di),D.pixelStorei(D.UNPACK_SKIP_ROWS,cn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ri),At===0&&B.generateMipmaps&&D.generateMipmap(Ne),ct.unbindTexture()},this.initRenderTarget=function(w){vt.get(w).__webglFramebuffer===void 0&&Rt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Rt.setTextureCube(w,0):w.isData3DTexture?Rt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Rt.setTexture2DArray(w,0):Rt.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){P=0,L=0,U=null,ct.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}};var Hd={type:"change"},dh={type:"start"},Vd={type:"end"},Cl=new zi,kd=new en,ex=Math.cos(70*ci.DEG2RAD),$e=new A,Rn=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uh=1e-6,Pl=class extends us{constructor(t,e=null){super(t,e),this.state=Ie.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sn.ROTATE,MIDDLE:Sn.DOLLY,RIGHT:Sn.PAN},this.touches={ONE:Jn.ROTATE,TWO:Jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new We,this._lastTargetPosition=new A,this._quat=new We().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nr,this._sphericalDelta=new nr,this._scale=1,this._panOffset=new A,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new A,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ix.bind(this),this._onPointerDown=nx.bind(this),this._onPointerUp=sx.bind(this),this._onContextMenu=ux.bind(this),this._onMouseWheel=ax.bind(this),this._onKeyDown=lx.bind(this),this._onTouchStart=cx.bind(this),this._onTouchMove=hx.bind(this),this._onMouseDown=rx.bind(this),this._onMouseMove=ox.bind(this),this._interceptControlDown=dx.bind(this),this._interceptControlUp=fx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hd),this.update(),this.state=Ie.NONE}update(t=null){let e=this.object.position;$e.copy(e).sub(this.target),$e.applyQuaternion(this._quat),this._spherical.setFromVector3($e),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Rn:n>Math.PI&&(n-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if($e.setFromSpherical(this._spherical),$e.applyQuaternion(this._quatInverse),e.copy(this.target).add($e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=$e.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=$e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Cl.origin.copy(this.object.position),Cl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cl.direction))<ex?this.object.lookAt(this.target):(kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cl.intersectPlane(kd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>uh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uh||this._lastTargetPosition.distanceToSquared(this.target)>uh?(this.dispatchEvent(Hd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Rn/60*this.autoRotateSpeed*t:Rn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){$e.setFromMatrixColumn(e,0),$e.multiplyScalar(-t),this._panOffset.add($e)}_panUp(t,e){this.screenSpacePanning===!0?$e.setFromMatrixColumn(e,1):($e.setFromMatrixColumn(e,0),$e.crossVectors(this.object.up,$e)),$e.multiplyScalar(t),this._panOffset.add($e)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;$e.copy(s).sub(this.target);let r=$e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function nx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ix(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vd),this.state=Ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function rx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ie.DOLLY;break;case Sn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ie.ROTATE}break;case Sn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(dh)}function ox(i){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ax(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(i.preventDefault(),this.dispatchEvent(dh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Vd))}function lx(i){this.enabled!==!1&&this._handleKeyDown(i)}function cx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Jn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ie.TOUCH_ROTATE;break;case Jn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case Jn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ie.TOUCH_DOLLY_PAN;break;case Jn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(dh)}function hx(i){switch(this._trackPointer(i),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ie.NONE}}function ux(i){this.enabled!==!1&&i.preventDefault()}function dx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ys=new ai,gn=new A,Yi=new A,ke=new We,Gd={X:new A(1,0,0),Y:new A(0,1,0),Z:new A(0,0,1)},fh={type:"change"},Wd={type:"mouseDown",mode:null},Xd={type:"mouseUp",mode:null},Yd={type:"objectChange"},Ul=class extends us{constructor(t,e=null){super(void 0,e);let n=new mh(this);this._root=n;let s=new gh;this._gizmo=s,n.add(s);let r=new _h;this._plane=r,n.add(r);let o=this;function a(S,v){let I=v;Object.defineProperty(o,S,{get:function(){return I!==void 0?I:v},set:function(P){I!==P&&(I=P,r[S]=P,s[S]=P,o.dispatchEvent({type:S+"-changed",value:P}),o.dispatchEvent(fh))}}),o[S]=v,r[S]=v,s[S]=v}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new A,c=new A,h=new We,d=new We,p=new A,m=new We,g=new A,y=new A,_=new A,f=0,R=new A;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",d),a("cameraPosition",p),a("cameraQuaternion",m),a("pointStart",g),a("pointEnd",y),a("rotationAxis",_),a("rotationAngle",f),a("eye",R),this._offset=new A,this._startNorm=new A,this._endNorm=new A,this._cameraScale=new A,this._parentPosition=new A,this._parentQuaternion=new We,this._parentQuaternionInv=new We,this._parentScale=new A,this._worldScaleStart=new A,this._worldQuaternionInv=new We,this._worldScale=new A,this._positionStart=new A,this._quaternionStart=new We,this._scaleStart=new A,this._getPointer=px.bind(this),this._onPointerDown=gx.bind(this),this._onPointerHover=mx.bind(this),this._onPointerMove=_x.bind(this),this._onPointerUp=xx.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&ys.setFromCamera(t,this.camera);let e=ph(this._gizmo.picker[this.mode],ys);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&ys.setFromCamera(t,this.camera);let e=ph(this._plane,ys,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,Wd.mode=this.mode,this.dispatchEvent(Wd)}}pointerMove(t){let e=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&ys.setFromCamera(t,this.camera);let o=ph(this._plane,ys,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(ke.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(gn.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(gn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Yi.set(a,a,a)}else gn.copy(this.pointStart),Yi.copy(this.pointEnd),gn.applyQuaternion(this._worldQuaternionInv),Yi.applyQuaternion(this._worldQuaternionInv),Yi.divide(gn),e.search("X")===-1&&(Yi.x=1),e.search("Y")===-1&&(Yi.y=1),e.search("Z")===-1&&(Yi.z=1);s.scale.copy(this._scaleStart).multiply(Yi),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(gn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(gn.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Gd[e]),gn.copy(Gd[e]),r==="local"&&gn.applyQuaternion(this.worldQuaternion),gn.cross(this.eye),gn.length()===0?l=!0:this.rotationAngle=this._offset.dot(gn.normalize())*a),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(ke.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(ke.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(fh),this.dispatchEvent(Yd)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(Xd.mode=this.mode,this.dispatchEvent(Xd)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(fh),this.dispatchEvent(Yd),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ys}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function px(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function mx(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function gx(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function _x(i){this.enabled&&this.pointerMove(this._getPointer(i))}function xx(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function ph(i,t,e){let n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}var Il=new Mn,Le=new A(0,1,0),qd=new A(0,0,0),Zd=new we,Dl=new We,Nl=new We,ui=new A,Kd=new we,yo=new A(1,0,0),vs=new A(0,1,0),vo=new A(0,0,1),Ll=new A,_o=new A,xo=new A,mh=class extends Oe{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){let e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}},gh=class extends Oe{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let t=new fn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new On({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;let s=e.clone();s.opacity=.5;let r=t.clone();r.color.setHex(16711680);let o=t.clone();o.color.setHex(65280);let a=t.clone();a.color.setHex(255);let l=t.clone();l.color.setHex(16711680),l.opacity=.5;let c=t.clone();c.color.setHex(65280),c.opacity=.5;let h=t.clone();h.color.setHex(255),h.opacity=.5;let d=t.clone();d.opacity=.25;let p=t.clone();p.color.setHex(16776960),p.opacity=.25;let m=t.clone();m.color.setHex(16776960);let g=t.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:m,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:p};let y=new qe(0,.04,.1,12);y.translate(0,.05,0);let _=new Te(.08,.08,.08);_.translate(0,.04,0);let f=new Se;f.setAttribute("position",new ye([0,0,0,1,0,0],3));let R=new qe(.0075,.0075,.5,3);R.translate(0,.25,0);function S(et,j){let nt=new Ei(et,.0075,3,64,j*Math.PI*2);return nt.rotateY(Math.PI/2),nt.rotateX(Math.PI/2),nt}function v(){let et=new Se;return et.setAttribute("position",new ye([0,0,0,1,1,1],3)),et}let I={X:[[new bt(y,r),[.5,0,0],[0,0,-Math.PI/2]],[new bt(y,r),[-.5,0,0],[0,0,Math.PI/2]],[new bt(R,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new bt(y,o),[0,.5,0]],[new bt(y,o),[0,-.5,0],[Math.PI,0,0]],[new bt(R,o)]],Z:[[new bt(y,a),[0,0,.5],[Math.PI/2,0,0]],[new bt(y,a),[0,0,-.5],[-Math.PI/2,0,0]],[new bt(R,a),null,[Math.PI/2,0,0]]],XYZ:[[new bt(new oi(.1,0),d),[0,0,0]]],XY:[[new bt(new Te(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new bt(new Te(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new bt(new Te(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},P={X:[[new bt(new qe(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new bt(new qe(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new bt(new qe(.2,0,.6,4),n),[0,.3,0]],[new bt(new qe(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new bt(new qe(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new bt(new qe(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new bt(new oi(.2,0),n)]],XY:[[new bt(new Te(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new bt(new Te(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new bt(new Te(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},L={START:[[new bt(new oi(.01,2),s),null,null,null,"helper"]],END:[[new bt(new oi(.01,2),s),null,null,null,"helper"]],DELTA:[[new Ye(v(),s),null,null,null,"helper"]],X:[[new Ye(f,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ye(f,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ye(f,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},U={XYZE:[[new bt(S(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new bt(S(.5,.5),r)]],Y:[[new bt(S(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new bt(S(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new bt(S(.75,1),p),null,[0,Math.PI/2,0]]]},T={AXIS:[[new Ye(f,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new bt(new Kn(.25,10,8),n)]],X:[[new bt(new Ei(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new bt(new Ei(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new bt(new Ei(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new bt(new Ei(.75,.1,2,24),n)]]},N={X:[[new bt(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new bt(R,r),[0,0,0],[0,0,-Math.PI/2]],[new bt(_,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new bt(_,o),[0,.5,0]],[new bt(R,o)],[new bt(_,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new bt(_,a),[0,0,.5],[Math.PI/2,0,0]],[new bt(R,a),[0,0,0],[Math.PI/2,0,0]],[new bt(_,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new bt(new Te(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new bt(new Te(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new bt(new Te(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new bt(new Te(.1,.1,.1),d)]]},G={X:[[new bt(new qe(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new bt(new qe(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new bt(new qe(.2,0,.6,4),n),[0,.3,0]],[new bt(new qe(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new bt(new qe(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new bt(new qe(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new bt(new Te(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new bt(new Te(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new bt(new Te(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new bt(new Te(.2,.2,.2),n),[0,0,0]]]},J={X:[[new Ye(f,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ye(f,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ye(f,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function tt(et){let j=new Oe;for(let nt in et)for(let Z=et[nt].length;Z--;){let Et=et[nt][Z][0].clone(),wt=et[nt][Z][1],Bt=et[nt][Z][2],te=et[nt][Z][3],se=et[nt][Z][4];Et.name=nt,Et.tag=se,wt&&Et.position.set(wt[0],wt[1],wt[2]),Bt&&Et.rotation.set(Bt[0],Bt[1],Bt[2]),te&&Et.scale.set(te[0],te[1],te[2]),Et.updateMatrix();let pe=Et.geometry.clone();pe.applyMatrix4(Et.matrix),Et.geometry=pe,Et.renderOrder=1/0,Et.position.set(0,0,0),Et.rotation.set(0,0,0),Et.scale.set(1,1,1),j.add(Et)}return j}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=tt(I)),this.add(this.gizmo.rotate=tt(U)),this.add(this.gizmo.scale=tt(N)),this.add(this.picker.translate=tt(P)),this.add(this.picker.rotate=tt(b)),this.add(this.picker.scale=tt(G)),this.add(this.helper.translate=tt(L)),this.add(this.helper.rotate=tt(T)),this.add(this.helper.scale=tt(J)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Nl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(ke.setFromEuler(Il.set(0,0,0)),o.quaternion.copy(n).multiply(ke),Math.abs(Le.copy(yo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(ke.setFromEuler(Il.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(ke),Math.abs(Le.copy(vs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(ke.setFromEuler(Il.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(ke),Math.abs(Le.copy(vo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(ke.setFromEuler(Il.set(0,Math.PI/2,0)),Le.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Zd.lookAt(qd,Le,vs)),o.quaternion.multiply(ke),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),gn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),gn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(gn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Le.copy(yo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Le.copy(vs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Le.copy(vo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Le.copy(vo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Le.copy(yo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Le.copy(vs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Dl.copy(n),Le.copy(this.eye).applyQuaternion(ke.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Zd.lookAt(this.eye,qd,vs)),o.name==="X"&&(ke.setFromAxisAngle(yo,Math.atan2(-Le.y,Le.z)),ke.multiplyQuaternions(Dl,ke),o.quaternion.copy(ke)),o.name==="Y"&&(ke.setFromAxisAngle(vs,Math.atan2(Le.x,Le.z)),ke.multiplyQuaternions(Dl,ke),o.quaternion.copy(ke)),o.name==="Z"&&(ke.setFromAxisAngle(vo,Math.atan2(Le.y,Le.x)),ke.multiplyQuaternions(Dl,ke),o.quaternion.copy(ke))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}},_h=class extends bt{constructor(){super(new Bn(1e5,1e5,2,2),new fn({visible:!1,wireframe:!0,side:pn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Ll.copy(yo).applyQuaternion(e==="local"?this.worldQuaternion:Nl),_o.copy(vs).applyQuaternion(e==="local"?this.worldQuaternion:Nl),xo.copy(vo).applyQuaternion(e==="local"?this.worldQuaternion:Nl),Le.copy(_o),this.mode){case"translate":case"scale":switch(this.axis){case"X":Le.copy(this.eye).cross(Ll),ui.copy(Ll).cross(Le);break;case"Y":Le.copy(this.eye).cross(_o),ui.copy(_o).cross(Le);break;case"Z":Le.copy(this.eye).cross(xo),ui.copy(xo).cross(Le);break;case"XY":ui.copy(xo);break;case"YZ":ui.copy(Ll);break;case"XZ":Le.copy(xo),ui.copy(_o);break;case"XYZ":case"E":ui.set(0,0,0);break}break;case"rotate":default:ui.set(0,0,0)}ui.length()===0?this.quaternion.copy(this.cameraQuaternion):(Kd.lookAt(gn.set(0,0,0),ui,Le),this.quaternion.setFromRotationMatrix(Kd)),super.updateMatrixWorld(t)}};function Jd({scene:i,camera:t,renderer:e,controls:n,groups:s,data:r,surfaceHit:o,enabled:a,canNavigate:l=()=>!0,onSelect:c,onEdit:h}){let d=e.domElement,p=[],m=new Map,g=new ai,y=new mt,_={cube:new Te(1,1,1),cylinder:new qe(.5,.5,1,32),sphere:new Kn(.5,32,16),hemisphere:new Kn(.5,32,16,0,Math.PI*2,0,Math.PI/2)};_.hemisphere.scale(1,2,1),_.hemisphere.translate(0,-.5,0);let f=new qr(.5,32);f.rotateX(Math.PI/2),f.translate(0,-.5,0);let R=[];for(let H of r.levels)for(let V of H.primitives||[]){let ut=new wn,Wt=new cs({color:V.color||"#d6a46b",roughness:.8,side:pn});R.push(Wt),ut.userData={primitive:V.id,level:H.id,record:JSON.parse(JSON.stringify(V)),floorZ:H.z},ut.add(new bt(_[V.primitive],Wt)),V.primitive==="hemisphere"&&ut.add(new bt(f,Wt)),b(ut,V),s.get(H.id).add(ut),p.push(ut),m.set(H.id+"\0"+V.id,ut)}let S=new Ul(t,d);S.disconnect(),d.style.touchAction="none",S.setSize(.8),S.setSpace("world");let v=S.getHelper();i.add(v);let I=null,P=null,L=null,U=!1,T=null;function b(H,V){H.position.set(V.x+V.w/2,H.userData.floorZ+V.z+V.height/2,V.y+V.h/2),H.scale.set(V.w,V.height,V.h),H.rotation.set(V.tiltX*Math.PI/180,-V.rotation*Math.PI/180,V.tiltY*Math.PI/180,"XYZ"),H.updateMatrixWorld(!0)}let N=H=>s.get(H.userData.level)?.visible&&window.KERN_LAYERS?.shown?.("primitives",H.userData.primitive,H.userData.level)!==!1,G=H=>N(H)&&window.KERN_LAYERS?.available?.("primitives",H.userData.primitive,H.userData.level)!==!1;function J(){if(U)return;for(let V of p)V.visible=window.KERN_LAYERS?.shown?.("primitives",V.userData.primitive,V.userData.level)!==!1;let H=!!I&&a()&&G(I);S.enabled=H,v.visible=H,!H&&P&&re()}function tt(H){re();let V=(H||[]).filter(ut=>ut.kind==="primitives").map(ut=>m.get(ut.floor+"\0"+ut.id)).filter(Boolean);I=V.length===1&&H.length===1?V[0]:null,I?S.attach(I):S.detach(),S.setMode(window.KERN_PRIMITIVE_UI?.mode()||"translate"),et(),J()}function et(){let H=I?.userData.record.wall===!0;S.setTranslationSnap(H?.25:null),S.setScaleSnap(H?.25:null),S.setRotationSnap(H?Math.PI/180:null),S.showX=S.showZ=!(H&&S.mode==="rotate"),S.showY=!0}function j(H,V){T&&(T.removeFromParent(),T.geometry.dispose(),T.material.dispose(),T=null),!(!H||!s.has(V))&&(T=new bt(new Te(1,1,1),new fn({color:"#72d8b0",transparent:!0,opacity:.4,depthWrite:!1})),T.userData.floorZ=r.levels.find(ut=>ut.id===V).z,b(T,H),s.get(V).add(T))}function nt(H){let V=d.getBoundingClientRect();return{x:(H.clientX-V.left)/Math.max(1,V.width)*2-1,y:-(H.clientY-V.top)/Math.max(1,V.height)*2+1,button:H.button??0}}function Z(H){let V=nt(H);return y.set(V.x,V.y),i.updateMatrixWorld(!0),t.updateMatrixWorld(!0),g.setFromCamera(y,t),g.intersectObjects(p.filter(N),!0).map(ut=>{let Wt=ut.object;for(;Wt&&!Wt.userData.primitive;)Wt=Wt.parent;return{...ut,root:Wt}}).filter(ut=>ut.root)}function Et(H){let V=Z(H)[0];if(!V)return null;let ut=o(H);return ut&&ut.point.distanceTo(t.position)+.002<V.distance?null:V}function wt(H){H.preventDefault(),H.stopImmediatePropagation()}function Bt(H){if(U||!a()||H.altKey||H.button!==0)return!1;if(J(),I&&S.enabled&&!H.shiftKey&&(i.updateMatrixWorld(!0),S.pointerHover(nt(H)),S.axis)){let ut=JSON.parse(JSON.stringify(I.userData.record));if(S.pointerDown(nt(H)),S.dragging)return P={id:H.pointerId,root:I,original:ut},n.enabled=!1,d.setPointerCapture?.(H.pointerId),wt(H),!0}let V=Et(H);return V?(L={id:H.pointerId,x:H.clientX,y:H.clientY,root:V.root,shift:H.shiftKey},d.setPointerCapture?.(H.pointerId),wt(H),!0):!1}function te(H){return U?!1:(J(),P&&H.pointerId===P.id?(S.pointerMove({...nt(H),button:-1}),wt(H),!0):L&&H.pointerId===L.id?(wt(H),!0):(I&&S.enabled&&!H.altKey&&!H.buttons&&(i.updateMatrixWorld(!0),S.pointerHover(nt(H))),!1))}function se(H){d.hasPointerCapture?.(H)&&d.releasePointerCapture(H)}function pe(H){if(P&&H.pointerId===P.id){let V=P;P=null,S.pointerUp({button:0}),n.enabled=l(),se(H.pointerId);let ut=V.root,Wt=D=>Math.round(D*1e6)/1e6,ee={x:Wt(ut.position.x-ut.scale.x/2),y:Wt(ut.position.z-ut.scale.z/2),z:Wt(ut.position.y-ut.userData.floorZ-ut.scale.y/2),w:Wt(ut.scale.x),h:Wt(ut.scale.z),height:Wt(ut.scale.y),rotation:Wt(ut.userData.record.wall?(()=>{let D=new A(1,0,0).applyQuaternion(ut.quaternion),dt=Math.atan2(D.z,D.x)*180/Math.PI;return[dt-360,dt,dt+360].filter(ht=>ht>=-360&&ht<=360).sort((ht,lt)=>Math.abs(ht-V.original.rotation)-Math.abs(lt-V.original.rotation))[0]})():-ut.rotation.y*180/Math.PI),tiltX:ut.userData.record.wall?0:Wt(ut.rotation.x*180/Math.PI),tiltY:ut.userData.record.wall?0:Wt(ut.rotation.z*180/Math.PI)};return wt(H),Object.entries(ee).some(([D,dt])=>Math.abs(dt-V.original[D])>1e-6)?h(ut.userData.level,ut.userData.primitive,ee,V.original)===!1&&b(ut,V.original):b(ut,V.original),!0}if(L&&H.pointerId===L.id){let V=L;return L=null,se(H.pointerId),wt(H),Math.hypot(H.clientX-V.x,H.clientY-V.y)<=5&&c(V.root.userData.level,V.root.userData.primitive,V.shift),!0}return!1}function re(){let H=P,V=L;P=null,L=null,H&&(b(H.root,H.original),S.pointerUp({button:0}),n.enabled=l(),se(H.id)),V&&se(V.id)}function st(H,V,{floorPlane:ut=!1}={}){J();let Wt=r.levels.find(Mt=>Mt.id===V);if(!Wt||!s.get(V)?.visible)return null;let ee=!ut&&Z(H).find(Mt=>Mt.root.userData.level===V),D=!ut&&o(H),dt=D?.floor===V?D:null,ht=ee&&(!dt||ee.distance<dt.point.distanceTo(t.position))?{point:ee.point,normal:ee.face.normal.clone().applyMatrix3(new he().getNormalMatrix(ee.object.matrixWorld)).normalize()}:dt;if(!ht){let Mt=nt(H);g.setFromCamera(new mt(Mt.x,Mt.y),t);let vt=g.ray.intersectPlane(new en(new A(0,1,0),-(Wt.z+s.get(V).position.y)),new A);if(!vt)return null;ht={point:vt,normal:new A(0,1,0)}}let lt=ht.point,ct=ht.normal||new A(0,1,0);return{x:lt.x,y:lt.z,z:lt.y-s.get(V).position.y,normal:{x:ct.x,y:ct.z,z:ct.y}}}function yt(){if(!U){j(null),re(),U=!0,S.detach(),S.dispose(),i.remove(v);for(let H of p)H.removeFromParent();for(let H of Object.values(_))H.dispose();f.dispose();for(let H of R)H.dispose()}}return{select:tt,sync:J,down:Bt,move:te,up:pe,cancel:re,placement:st,previewWall:j,dispose:yt,dragging:()=>!!P,setMode(H){["translate","scale","rotate"].includes(H)&&(re(),S.setMode(H),S.setSpace(H==="scale"?"local":"world"),et())},objects:()=>p}}function $d(i,t,e){let n=0,s=1;for(let r of["x","y","z"]){let o=t[r]-i[r],a=e.min[r],l=e.max[r];if(Math.abs(o)<1e-8){if(i[r]<a||i[r]>l)return null;continue}let c=(a-i[r])/o,h=(l-i[r])/o;if(c>h&&([c,h]=[h,c]),n=Math.max(n,c),s=Math.min(s,h),n>s)return null}return n>=0&&n<=1?n:null}function yx(i,t){if(i.polygon&&window.KERN_SHAPES){let r=window.KERN_SHAPES,o=(t.polygons||[]).filter(p=>p.kind==="slab"&&p.room===i.id&&Math.abs(p.z+p.height-i.z)<.01),a=p=>o.some(m=>r.contains(p,m.polygon)&&!(m.holes||[]).some(g=>r.contains(p,g))),l=r.labelAnchor(i),c=Math.min(i.w,4),h=Math.min(i.h,2);if(a(l))return{x:l.x-c/2,y:l.y-h/2,w:c,h,z:i.z};let d=null;for(let p of o){let m=[p.polygon,...p.holes||[]],g=r.bounds(p.polygon);for(let y=0;y<12;y++)for(let _=0;_<12;_++){let f={x:g.x+g.w*(_+.5)/12,y:g.y+g.h*(y+.5)/12};if(!a(f))continue;let R=Math.min(...m.flatMap(I=>I.map((P,L)=>{let U=I[(L+1)%I.length];return Math.hypot(P[0]-U[0],P[1]-U[1])>1e-8?r.project(f,{a:P,b:U}).distance:1/0}))),S=Math.min(1,R/Math.hypot(c/2,h/2)),v=S*c*h-Math.hypot(f.x-l.x,f.y-l.y)*1e-4;S*c>.35&&S*h>.35&&(!d||v>d.score)&&(d={...f,w:c*S,h:h*S,score:v})}}return d?{x:d.x-d.w/2,y:d.y-d.h/2,w:d.w,h:d.h,z:i.z}:null}let e=t.boxes.filter(r=>(r.kind==="slab"&&(!r.room||r.room===i.id)||r.kind==="landing")&&Math.abs(r.z+r.height-i.z)<.01).map(r=>{let o=Math.max(i.x,r.x),a=Math.max(i.y,r.y);return{x:o,y:a,w:Math.min(i.x+i.w,r.x+r.w)-o,h:Math.min(i.y+i.h,r.y+r.h)-a,z:r.z+r.height}}).filter(r=>r.w>.35&&r.h>.35),n=i.x+i.w/2,s=i.y+i.h/2;return e.sort((r,o)=>o.w*o.h-r.w*r.h||Math.hypot(r.x+r.w/2-n,r.y+r.h/2-s)-Math.hypot(o.x+o.w/2-n,o.y+o.h/2-s))[0]||null}function vx(i,t,e,n){let s=Math.min(56,e*.42),r=[],o=a=>n.measureText?.(a).width??a.length*s*.56;for(let a=0;a<90;a++){n.font=`600 ${s}px system-ui`,r=[];let l="";for(let c of String(i).split(/\s+/)){let h=l?l+" "+c:c;l&&o(h)>t?(r.push(l),l=c):l=h}if(l&&r.push(l),r.every(c=>o(c)<=t)&&r.length*s*1.24<=e)break;s*=.92}return{lines:r,fontSize:s,lineHeight:s*1.24}}function Mx(i,t,e={}){let n=null,s=new Al({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),r=()=>{s.setAnimationLoop(null),s.dispose(),s.forceContextLoss(),s.domElement.remove()};try{let rt=function(u,M){let E=u.height;if(u.contextOnly&&V!==M.id||u.kind==="slab"&&(!Fe||Ji)&&!te||u.kind==="ceiling"&&(!Fe||Ji)&&(!Bt||se))return 0;let F=u.kind==="wall"||u.kind==="solid";return se&&F&&(E=Math.max(0,Math.min(E,(u.baseZ??M.z)+pe-u.z))),F&&!wt&&(E=0),E},Ut=function(){let u=new Oe;ut=[];for(let M of g.values())M.position.y=M.userData.rank*Z;nt.position.y=0,nt.userData.displayDatum=nt.position.y;for(let M of R){let E=t.levels.find(K=>K.id===M.userData.level),F=g.get(E.id),at=M.userData.fadeMesh;M.userData.boxes.forEach((K,q)=>{let W=rt(K,E),it=st&&M.userData.faded.has(q),X=(St,pt)=>{let Lt=pt&&W>.001;u.position.set(K.x+K.w/2,K.z+W/2,K.y+K.h/2),u.scale.set(Lt?K.w:0,Lt?W:0,Lt?K.h:0),u.updateMatrix(),St.setMatrixAt(q,u.matrix)};X(M,!it),at&&X(at,it),F.visible&&W>.001&&ut.push({mesh:M,index:q,kind:K.kind,level:E.id,min:{x:K.x,y:K.z+F.position.y,z:K.y},max:{x:K.x+K.w,y:K.z+W+F.position.y,z:K.y+K.h}})}),M.visible=M.userData.boxes.some((K,q)=>rt(K,E)>.001&&!(st&&M.userData.faded.has(q))),M.instanceMatrix.needsUpdate=!0,at&&(at.visible=st&&M.userData.boxes.some((K,q)=>rt(K,E)>.001&&M.userData.faded.has(q)),at.instanceMatrix.needsUpdate=!0)}for(let M of v){let E=M.userData.shape,F=t.levels.find(K=>K.id===M.userData.level),at=rt(E,F);M.scale.y=at/E.height,M.visible=at>.001&&(!M.userData.contextOnly||V===M.userData.level)}for(let M of y)M.visible=re;for(let M of _)M.visible=re&&!M.userData.duplicate;Dt(),o.updateMatrixWorld(!0),Wt=""},Dt=function(){for(let u of S){let M=u.userData.floorHighlight||u.userData.floorLeader;u.visible=!!g.get(M)?.visible&&(M===H||Q.has(M))}for(let u of y)u.material.color.set(u.userData.level===H||Q.has(u.userData.level)?10410239:16777215)},Xt=function(u){Q=new Set((u||[]).filter(M=>g.has(M))),Dt()},kt=function(u){u&&!g.get(u)?.visible&&(u=null),u!==H&&(H=u,Dt(),s.domElement.style.cursor=u?"pointer":"default",e.onHover?.(u?t.levels.find(M=>M.id===u):null))},xt=function(u=!1){a.updateMatrixWorld(!0);let M=[...a.position.toArray(),...a.quaternion.toArray(),Z,wt,se,pe,re,st,V,...z()].join(":");if(!u&&M===Wt&&!ct)return;let E=[...a.position.toArray().map(X=>X.toFixed(2)),...a.quaternion.toArray().map(X=>X.toFixed(3)),Z,wt,se,pe,st,...z()].join(":");E!==ht&&(ht=E,lt=performance.now(),ct=st);let F=!st||!dt&&!D&&(u||performance.now()-lt>=180),at=new Map(R.map(X=>[X,new Set]));if(F&&st&&wt)for(let X of t.levels){let St=g.get(X.id);if(!St.visible)continue;let pt=X.boxes.filter(Lt=>Lt.kind==="slab").sort((Lt,Jt)=>Jt.w*Jt.h-Lt.w*Lt.h).slice(0,12);for(let Lt of pt)for(let[Jt,oe]of[[.5,.5],[.22,.22],[.78,.78]]){let de={x:Lt.x+Lt.w*Jt,y:Lt.z+Lt.height+.8+St.position.y,z:Lt.y+Lt.h*oe},ae=null,fe=1;for(let He of ut){let Be=$d(a.position,de,He);Be!==null&&Be>1e-5&&Be<fe&&(fe=Be,ae=He)}ae?.kind==="wall"&&fe<.985&&at.get(ae.mesh).add(ae.index)}}if(F){let X=new Set,St=v.filter(pt=>pt.userData.kind==="wall"&&pt.visible&&g.get(pt.userData.level)?.visible);if(st&&wt){for(let pt of t.levels)if(g.get(pt.id)?.visible)for(let Lt of(pt.rooms||[]).slice(0,20)){let Jt=window.KERN_SHAPES?window.KERN_SHAPES.centroid(Lt):{x:Lt.x+Lt.w/2,y:Lt.y+Lt.h/2},oe=new A(Jt.x,Lt.z+.8+g.get(pt.id).position.y,Jt.y),de=oe.clone().sub(a.position),ae=de.length(),He=new ai(a.position,de.normalize(),.05,ae-.05).intersectObjects(St,!1)[0];He&&X.add(He.object)}}for(let pt of v)pt.userData.kind==="wall"&&(pt.material=I(pt.userData.shape.color,X.has(pt)))}let K=!1;if(F){for(let X of R){let St=at.get(X),pt=X.userData.faded;(St.size!==pt.size||[...St].some(Lt=>!pt.has(Lt)))&&(K=!0),X.userData.faded=St}ct=!1}K&&Ut();let q=[],W=Math.max(1,i.clientWidth),it=Math.max(1,i.clientHeight);for(let X of[...y].sort((St,pt)=>+!!St.userData.roomLabel-+!!pt.userData.roomLabel||(pt.userData.area||0)-(St.userData.area||0))){let St=X.getWorldPosition(new A),pt=St.clone().applyMatrix4(a.matrixWorldInverse),Lt=2*Math.max(.1,-pt.z)*Math.tan(ci.degToRad(a.fov/2))/it,Jt=Math.min(X.userData.labelWidth*Lt,X.userData.maxWorldWidth||1/0);X.scale.set(Jt,Jt*X.userData.labelRatio,1);let oe=St.clone().project(a),de=Jt/Lt,ae=de*X.userData.labelRatio,fe={x:(oe.x+1)*W/2-de/2,y:(1-oe.y)*it/2-ae/2,w:de,h:ae},He=q.some(Be=>fe.x<Be.x+Be.w+5&&fe.x+fe.w+5>Be.x&&fe.y<Be.y+Be.h+5&&fe.y+fe.h+5>Be.y);if(X.visible=re&&g.get(X.userData.level).visible&&(!X.userData.roomLabel||X.userData.level===V)&&pt.z<0&&oe.z>=-1&&oe.z<=1&&fe.x+fe.w>0&&fe.y+fe.h>0&&fe.x<W&&fe.y<it&&de>=58&&!He&&!ut.some(Be=>{let kn=$d(a.position,St,Be);return kn!==null&&kn>1e-5&&kn<.995}),X.visible&&q.push(fe),X.userData.floorLabel){let Be=S.find(kn=>kn.userData.floorLeader===X.userData.level);if(Be){let kn=Be.geometry.attributes.position;kn.setX(0,X.position.x+Jt/2),kn.needsUpdate=!0,Be.visible=re&&X.visible&&(X.userData.level===H||Q.has(X.userData.level))}}}for(let X of _){let St=X.getWorldPosition(new A);X.visible=re&&g.get(X.userData.level).visible&&!X.userData.duplicate&&a.position.y>St.y}Wt=M},Ft=function(){D=null},jt=function(u,M,E,F=vt){let at=a.position.clone(),K=h.target.clone(),q=h.enableDamping;h.enableDamping=!1,h.update(),a.position.copy(at),h.target.copy(K),h.update(),h.enableDamping=q,D=E&&!le?.matches?{from:at,targetFrom:K,to:u.clone(),targetTo:M.clone(),datumFrom:vt,datumTo:F,start:performance.now(),duration:420}:null,D||(vt=F,a.position.copy(u),h.target.copy(M),a.lookAt(M),h.update(),xt(!0))},Kt=function(u=performance.now()){if(!D)return!1;let M=D,E=le?.matches?1:Math.min(1,Math.max(0,(u-M.start)/M.duration)),F=E*E*(3-2*E);return vt=ci.lerp(M.datumFrom,M.datumTo,F),a.position.lerpVectors(M.from,M.to,F),h.target.lerpVectors(M.targetFrom,M.targetTo,F),a.lookAt(h.target),a.updateMatrixWorld(!0),E===1&&(D=null,h.update()),!0},Ot=function(u=!1,M=!1){let E=new An;for(let X of g.values())if(X.visible){let St=t.levels.find(pt=>pt.id===X.userData.id);for(let pt of[...St.boxes,...St.polygons||[],...J(St)])E.expandByPoint(new A(pt.x,pt.z+X.position.y,pt.y)),E.expandByPoint(new A(pt.x+pt.w,pt.z+pt.height+X.position.y,pt.y+pt.h))}E.isEmpty()&&(E.min.set(P.minX,P.minZ-G*Z,P.minY),E.max.set(P.maxX,P.maxZ+(t.levels.length-1-G)*Z,P.maxY));let F=E.getCenter(new A),at=E.getSize(new A),K=Math.max(at.length()/2,8),q=ci.degToRad(a.fov/2),W=K/Math.sin(q)*Math.max(1,1/a.aspect)*1.1,it=u?a.position.clone().sub(h.target).normalize():new A(1,.9,1.2).normalize();a.near=.05,a.far=Math.max(5e3,W*5),a.updateProjectionMatrix(),jt(F.clone().add(it.multiplyScalar(W)),F,M,Rt(Mt))},ce=function(u,M=!0){let E=Rt(u),F=E-vt;Mt=u,jt(a.position.clone().add(new A(0,F,0)),h.target.clone().add(new A(0,F,0)),M,E)},O=function(){if(e.onFloorVisibility)return e.onFloorVisibility({all:!0});Un(),(Nt||Pt==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&ie(!0),ot&&xn(),Ft();for(let u of g.values())u.visible=!0;V=null,kt(null),Ut(),xt(!0),_t("visibility")},Ct=function(u){if(e.onFloorSelect)return e.onFloorSelect(u,{additive:!1});if(Un(),(Nt||Pt==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&ie(!0),ot&&xn(),!!g.has(u)){if(V===u&&z().length===1){_t();return}Hn(null,null),V=u;for(let[M,E]of g)E.visible=M===u;kt(null),Ut(),ce(u),_t(),Hn(u,null)}},It=function(u,{preserveEditing:M=!1}={}){if(g.has(u)){if(e.onFloorSelect&&!M)return e.onFloorSelect(u,{additive:!1});if(M&&e.getFloorState)return Mo(e.getFloorState());!M&&!g.get(u).visible&&(g.get(u).visible=!0,Ut()),V!==u&&(window.KERN_CONNECTION_3D?.cancel(),(Pt==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&ie(!0)),V=u,Mt=u,vt=Rt(u),kt(null),M||fr([u]),xt(!0),_t(M?"sync":"navigation")}},Gt=function(u,M=!1){if(!g.has(u))return;if(e.onFloorSelect)return e.onFloorSelect(u,{additive:M});if(!M)return Ct(u);Un(),ie(),xn();let E=g.get(u);E.visible=!E.visible,z().length||(E.visible=!0),Hn(null,null),It(E.visible?u:z()[0]),Ut()},Tt=function(u){g.has(u)&&u!==Mt&&It(u,{preserveEditing:!0})},ft=function(u){let M=t.levels.findIndex(F=>F.id===V),E=t.levels[M+Math.sign(u)];M>=0&&E&&(It(E.id),ce(E.id))},ne=function(u,{physicalOnly:M=!1}={}){let E=s.domElement.getBoundingClientRect();if(!E.width||!E.height)return null;x.set((u.clientX-E.left)/E.width*2-1,-(u.clientY-E.top)/E.height*2+1),a.updateMatrixWorld(!0),o.updateMatrixWorld(!0),C.setFromCamera(x,a);let F=[...f,...v,...M?[]:[...y,..._]].filter(St=>St.visible&&g.get(St.userData.level)?.visible),at=C.intersectObjects(F,!1)[0],K=at?.object.userData.level,q=at?.object.userData.boxes?.[at.instanceId],W=at?.object.userData.room||q?.room,it=t.levels.find(St=>St.id===K)?.rooms?.find(St=>St.id===W);s.domElement.title=it?it.name:"";let X=at?.object.userData.sourceFloor||q?.sourceFloor||K;return gt=at?{floor:X,displayFloor:K,door:at.object.userData.door||q?.door,room:W||q?.rooms?.[0],roomLabel:!!at.object.userData.roomLabel,floorSurface:(at.object.userData.kind||q?.kind)==="slab"&&!at.object.userData.door&&!q?.door,point:at.point,normal:at.face?.normal?.clone().applyMatrix3(new he().getNormalMatrix(at.object.matrixWorld)).normalize()}:null,X||null},Ai=function(u){let M=u&&window.KERN_TRANSFORM?.frame(u),E=M?M.point(M.x+M.w/2,M.y+M.h):u?[u.x+u.w/2,u.y+u.h]:null;Ms=u?{x:E[0],y:E[1],z:u.z+g.get(u.floor).position.y,w:M?.w??u.w,h:M?.h??u.h}:null,Ss()},Ss=function(){if(!Ms||Fe){Ln.style.display="none";return}let u=Ms,M=new A(u.x,u.z,u.y).project(a),E=s.domElement.getBoundingClientRect();Ln.textContent=u.w.toFixed(2)+" \xD7 "+u.h.toFixed(2)+" m",Ln.style.display="block",Ln.style.left=Math.min(Math.max(6,(M.x+1)*E.width/2-45),Math.max(6,E.width-135))+"px",Ln.style.top=Math.min(Math.max(6,(1-M.y)*E.height/2+15),Math.max(6,E.height-28))+"px"},Hn=function(u,M){for(n?.select([]),Ai(null),Me=u?{floor:u,ids:M?[M]:[]}:null;ue.children.length;){let K=ue.children[0];ue.remove(K),K.geometry.dispose()}let E=t.levels.find(K=>K.id===u)?.rooms.find(K=>K.id===M)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(u,M),F=t.levels.find(K=>K.id===u),at=F&&tt(F);qt=g.has(u)?E?{...E,floor:u}:!M&&F?{id:null,isFloor:!0,floor:u,z:F.z,x:at.minX,y:at.minY,w:at.maxX-at.minX,h:at.maxY-at.minY}:null:null,qt&&w(qt)},ur=function(u,M){if(Hn(u,M[0]||null),Me={floor:u,ids:[...M]},M.length<2)return;for(qt=null;ue.children.length;){let F=ue.children[0];ue.remove(F),F.geometry.dispose()}let E=t.levels.find(F=>F.id===u)?.rooms.filter(F=>M.includes(F.id))||[];for(let F of E){let at=window.KERN_SHAPES?.points(F)||[[F.x,F.y],[F.x+F.w,F.y],[F.x+F.w,F.y+F.h],[F.x,F.y+F.h]],K=new Hi(new Se().setFromPoints(at.map(q=>new A(q[0],F.z+g.get(u).position.y+.08,q[1]))),Nn);K.renderOrder=10,ue.add(K)}if(E.length){let F=Math.min(...E.map(K=>K.x)),at=Math.min(...E.map(K=>K.y));Ai({floor:u,x:F,y:at,z:Math.min(...E.map(K=>K.z)),w:Math.max(...E.map(K=>K.x+K.w))-F,h:Math.max(...E.map(K=>K.y+K.h))-at})}},Mo=function({active:u,selected:M=[],visible:E=[],select:F=!1,navigate:at=!1}){let K=new Set(E),q=M.includes(u)&&g.has(u)?u:null;if(!(V===q&&g.has(u)&&Mt===u&&z().length===K.size&&z().every(it=>K.has(it))&&Q.size===M.length&&M.every(it=>Q.has(it))&&!F&&!at)){n?.cancel(),ot&&xn(),(Nt||Pt==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&ie(!0),Un(),Zt.clear(),ee=null;for(let[it,X]of g)X.visible=K.has(it);if(V=q,Xt(M),g.has(u)&&(at?ce(u):(Mt=u,vt=Rt(u))),F)fr(M);else if(qt&&!K.has(qt.floor)){let it=qt.isFloor?Me:null;Hn(null,null),it&&(Me=it)}Me?.objects&&dr(Me.objects.filter(it=>K.has(it.floor))),kt(null),Ut(),xt(!0),_t("controller")}},dr=function(u){let M=(u||[]).filter(E=>g.has(E.floor));if(M.length&&M.every(E=>E.kind==="rooms"&&E.floor===M[0].floor)){ur(M[0].floor,M.map(E=>E.id));return}if(Hn(null,null),n?.select(M),!!M.length){Me={objects:M.map(E=>({...E}))};for(let E of M){let F=E.polygons?.length?E.polygons:[[[E.x,E.y],[E.x+E.w,E.y],[E.x+E.w,E.y+E.h],[E.x,E.y+E.h]]],at=E.z+g.get(E.floor).position.y+.08;for(let K of F){let q=new Hi(new Se().setFromPoints(K.map(W=>new A(W[0],at,W[1]))),Nn);q.renderOrder=10,q.userData.selectedObject={floor:E.floor,kind:E.kind,id:E.id},ue.add(q)}}}},fr=function(u){let M=[...new Set(u||[])].filter(E=>g.get(E)?.visible);Xt(u),Hn(M.length===1?M[0]:null,null),Me=M.length?{floors:M}:null},Fl=function(){if(!Me)return Ot(!0,!0);let u=new An,M=Me.floor;if(Me.objects){M=Me.objects[0]?.floor;for(let q of Me.objects){let W=g.get(q.floor).position.y;u.expandByPoint(new A(q.x,q.z+W,q.y)),u.expandByPoint(new A(q.x+q.w,q.z+q.height+W,q.y+q.h))}}else if(Me.floors){M=Me.floors.includes(V)?V:Me.floors[0];for(let q of Me.floors){let W=t.levels.find(X=>X.id===q);if(!W||!g.get(q)?.visible)continue;let it=g.get(q).position.y;for(let X of[...W.boxes,...W.polygons||[],...J(W)])u.expandByPoint(new A(X.x,X.z+it,X.y)),u.expandByPoint(new A(X.x+X.w,X.z+X.height+it,X.y+X.h))}}else{let q=t.levels.find(X=>X.id===M);if(!q)return;let W=Me.ids.length?Me.ids.map(X=>q.rooms.find(St=>St.id===X)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(q.id,X)).filter(Boolean):q.rooms,it=g.get(q.id).position.y;for(let X of W)u.expandByPoint(new A(X.x,X.z+it,X.y)),u.expandByPoint(new A(X.x+X.w,X.z+(X.height||q.height||3)+it,X.y+X.h))}if(u.isEmpty())return;let E=u.getCenter(new A),F=Math.max(2,u.getSize(new A).length()/2),at=F/Math.sin(ci.degToRad(a.fov/2))*Math.max(1,1/a.aspect)*1.15,K=a.position.clone().sub(h.target).normalize();jt(E.clone().add(K.multiplyScalar(at)),E,!0,Rt(M))},w=function(u){for(Ai(u);ue.children.length;){let E=ue.children[0];ue.remove(E),E.geometry.dispose()}let M=u.z+g.get(u.floor).position.y+.08;if(!u.isFloor){let E=new Hi(new Se().setFromPoints((window.KERN_SHAPES?.points(u)||[[u.x,u.y],[u.x+u.w,u.y],[u.x+u.w,u.y+u.h],[u.x,u.y+u.h]]).map(F=>new A(F[0],M,F[1]))),Nn);if(E.renderOrder=10,ue.add(E),window.KERN_CONCRETE_CAP_UI?.readOnly(u.floor,u.id))return;for(let[F,at,K]of window.KERN_ROTATE?.active()&&window.KERN_ROTATE.eligibleRoom(u)?window.KERN_SHAPES.raw(u).map((q,W)=>["rotate-"+W,...q]):(window.KERN_TRANSFORM?.handles(u)||[["nw",u.x,u.y],["ne",u.x+u.w,u.y],["se",u.x+u.w,u.y+u.h],["sw",u.x,u.y+u.h]]).filter(q=>q[0].length===2)){let q=F.startsWith("rotate-")&&window.KERN_ROTATE?.pivotFor(u)?.index===Number(F.slice(7)),W=new bt(new Te(q?.55:.35,.15,q?.55:.35),q?nn:Nn);W.position.set(at,M,K),W.userData.edge=F,W.renderOrder=11,ue.add(W)}}if(u.routeStair&&window.KERN_ROUTE_STAIRS){let E=u.routeStair,F=E.nodes,at=window.KERN_ROUTE_STAIRS.elevations(u,window.kernPlanner?.getPlan());for(let K=0;K<F.length;K++){let q=window.KERN_ROUTE_STAIRS.point(u,F[K]),W=at[K],it=(K===0?E.start?.floor:K===F.length-1?E.end?.floor:null)||u.floor,X=g.get(it)?.position.y??g.get(u.floor).position.y,St=W+X,pt=new bt(new Kn(.23,10,8),Nn);pt.position.set(q[0],St+.12,q[1]),pt.userData.edge="route-node-"+K,pt.userData.routeZ=W,pt.userData.displayOffset=X,pt.renderOrder=16,ue.add(pt);let Lt=new bt(new $s(.18,.45,8),nn);if(Lt.position.set(q[0],St+1,q[1]),Lt.userData.edge="route-height-"+K,Lt.userData.routeZ=W,Lt.userData.displayOffset=X,Lt.renderOrder=16,ue.add(Lt),K===(window.KERN_ROUTE_UI?.selectedNode??0))for(let[Jt,oe]of(F[K].landing||[]).entries()){let de=window.KERN_ROUTE_STAIRS.point(u,oe),ae=new bt(new Te(.22,.15,.22),nn);ae.position.set(de[0],St+.14,de[1]),ae.userData.edge="route-landing-"+K+"-"+Jt,ae.userData.routeZ=W,ae.userData.displayOffset=X,ae.renderOrder=17,ue.add(ae)}}}if(!u.isFloor&&!window.KERN_ROTATE?.active()){let E=new bt(new oi(.28),Nn);E.position.set(u.x+u.w/2,M,u.y+u.h/2),E.userData.edge="move",E.renderOrder=14,ue.add(E)}if(!u.routeStair&&!window.KERN_ROTATE?.active()&&(u.isFloor||u.localSteps||window.KERN_ROTATE?.eligibleRoom(u))){let E=u.localSteps&&window.KERN_ELEVATION_UI?.handlePoint(u.floor,u.id),F=E?.x??u.x+u.w/2,at=E?.y??u.y+u.h/2,K=(u.__elevation?u.z:window.KERN_ELEVATION_UI?.handleZ(u.floor,u.id)??u.z)+g.get(u.floor).position.y,q=new Ye(new Se().setFromPoints([new A(F,K,at),new A(F,K+1.6,at)]),nn);q.renderOrder=12,ue.add(q);let W=new bt(new $s(.23,.55,8),nn);W.position.set(F,K+1.6,at),W.userData.edge="elevate",W.renderOrder=13,ue.add(W)}},B=function(u,M){let E=s.domElement.getBoundingClientRect();return x.set((u.clientX-E.left)/E.width*2-1,-(u.clientY-E.top)/E.height*2+1),a.updateMatrixWorld(!0),o.updateMatrixWorld(!0),C.setFromCamera(x,a),C.ray.intersectPlane(new en(new A(0,1,0),-(M.z+g.get(M.floor).position.y)),new A)},Yt=function(){for(;$t.children.length;){let u=$t.children[0];$t.remove(u),u.geometry.dispose()}},ie=function(u=!1){let M=Nt;Nt=null,window.KERN_BRIDGE_UI?.cancel(),Yt(),xe.style.display="none",h.enabled=!Fe,M&&s.domElement.hasPointerCapture(M.pointerId)&&s.domElement.releasePointerCapture(M.pointerId),u&&(window.KERN_CONNECTION_3D?.cancel(),Pt="select",ue.visible=!Fe)},Ae=function(u){u!==Pt&&(n?.cancel(),window.KERN_CONNECTION_3D?.cancel(),ie(),u!=="select"&&u!=="bridge"&&!V&&It(Mt,{preserveEditing:!0}),Pt=u,ue.visible=u==="select",s.domElement.title=u==="bridge"?"Click two room floors at the same height":u==="edge-steps"?"Click a room edge and drag outward":u==="steps"?"Draw between two different-height surfaces":u==="room"?"Drag a room footprint":u==="stairs"?"Draw a stair footprint, then choose destination floors":"")},De=function(u,M){let E=s.domElement.getBoundingClientRect();x.set((u.clientX-E.left)/E.width*2-1,-(u.clientY-E.top)/E.height*2+1),a.updateMatrixWorld(!0),C.setFromCamera(x,a);let F=C.ray.intersectPlane(new en(new A(0,1,0),-M),new A);return F?{x:F.x,y:F.z}:null},be=function(u){if(Yt(),xe.style.display="block",xe.style.left="18px",xe.style.top="auto",xe.style.bottom="18px",xe.textContent=u.error||u.summary,u.error||u.valid===!1||!u.room&&!u.detail||!g.has(u.fid))return;let M=u.room?.bridge?[{...u.room,polygon:window.KERN_SHAPES.points(u.room),z:u.room.z-.15,height:.15}]:u.detail?[...u.detail.flights.flatMap(E=>E.treads.map(F=>({...F.rect,polygon:F.polygon,z:F.z-.12,height:.12}))),...u.detail.landings.map(E=>({...E.rect,polygon:E.polygon,z:E.z-.15,height:.15}))]:[{...u.room,z:t.levels.find(E=>E.id===u.fid).z-.15,height:.15}];for(let E of M){let F;if(E.polygon){let K=new ri(E.polygon.map(q=>new mt(q[0],-q[1])));F=new ls(K,{depth:E.height,bevelEnabled:!1}),F.rotateX(-Math.PI/2)}else F=new Te(E.w,E.height,E.h);let at=new bt(F,nn);E.polygon?at.position.y=E.z+g.get(u.fid).position.y:at.position.set(E.x+E.w/2,E.z+E.height/2+g.get(u.fid).position.y,E.y+E.h/2),at.renderOrder=14,$t.add(at)}},Re=function(u){if(ne(u,{physicalOnly:!0}),!gt?.floorSurface||!gt.room||!gt.normal||gt.normal.y<.5)return null;let M=t.levels.find(F=>F.id===gt.floor),E=M?.rooms.find(F=>F.id===gt.room);return E?{floor:M.id,p:{x:gt.point.x,y:gt.point.z},z:E.z}:null},Qt=function(u,M=V||Mt){ne(u);let E=gt?.floor||M,F=t.levels.find(q=>q.id===E);if(!F)return null;let at=gt?{x:gt.point.x,y:gt.point.z}:De(u,F.z+g.get(E).position.y);if(!at)return null;let K=gt?.point||new A(at.x,F.z+g.get(E).position.y,at.y);return{floor:E,room:gt?.room,door:gt?.door,p:at,altKey:!!u.altKey,worldPerPixel:2*a.position.distanceTo(K)*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height)}},Ne=function(u){Yt(),xe.style.display="block",xe.style.left="18px",xe.style.top="auto",xe.style.bottom="18px",xe.textContent=u.valid?u.summary||(Pt==="disconnect"?"Release to remove connection":"Click or release to place opening"):u.reason||"Choose a wall";let M=u.geometry;if(!(!M||!g.has(u.fid)))for(let E of M.segments||[M]){let F=E,at=F.axis==="poly"?F.p0:F.axis==="h"?[F.start,F.fixed]:[F.fixed,F.start],K=F.axis==="poly"?F.p1:F.axis==="h"?[F.end,F.fixed]:[F.fixed,F.end],q=u.door?.kind==="window"?u.door.sill??.9:0,W=u.door?.kind==="window"?u.door.height??1.4:u.door?.maximumPassage?u.door.height:2.2,it=u.z+q+g.get(u.fid).position.y,X=[[at[0],it,at[1]],[K[0],it,K[1]],[K[0],it+W,K[1]],[at[0],it+W,at[1]]],St=new Hi(new Se().setFromPoints(X.map(pt=>new A(...pt))),Ki);St.renderOrder=20,$t.add(St)}},Ih=function(){if(!bn)return;a.position.set(bn.x+(bn.bobX||0)*Math.cos(So),bn.z+(bn.eyeHeight??1.6278874)+(bn.bobY||0),bn.y-(bn.bobX||0)*Math.sin(So)),a.rotation.order="YXZ",a.rotation.set(Ah,So,bn.roll||0);let u=new A(0,0,-1).applyQuaternion(a.quaternion);if(Ci.position.copy(a.position),Ci.target.position.copy(a.position).add(u.multiplyScalar(8)),Ci.visible=Rh,!bn.fly){for(let M of y)M.visible=!1;for(let M of _)M.visible=!M.userData.duplicate&&Math.abs(M.position.y-bn.z)<.2}},nf=function(u,M=0,E=0,F=!0,at=!1){if(u){if(n?.cancel(),ie(!0),!Fe){if(bs=Bl(),a.fov=u.fov??90,a.updateProjectionMatrix(),Fe=!0,Ji=!!u.fly,o.children.filter(K=>K.isHemisphereLight||K.isDirectionalLight).forEach(K=>{K.userData.originalIntensity=K.intensity,u.fly||(K.intensity=K.isHemisphereLight?.8:.3)}),ue.visible=!1,h.enabled=!1,D=null,!u.fly){Z=0,wt=!0,se=!1,st=!1,re=!1,V=null;for(let K of g.values())K.visible=!0;nt.visible=!1,Pi.visible=!0}Ut()}if(Ji&&!u.fly){Z=0,wt=!0,se=!1,st=!1,re=!1,V=null;for(let K of g.values())K.visible=!0;nt.visible=!1,Pi.visible=!0,Ji=!1,Ut()}Ji=!!u.fly,a.fov!==(u.fov??90)&&(a.fov=u.fov??90,a.updateProjectionMatrix()),bn=u,So=M,Ah=E,Rh=F,Ih()}else if(Fe){let K=a.position.clone(),q=a.getWorldDirection(new A);Fe=!1,Ji=!1,a.fov=bs?.fov??42,a.updateProjectionMatrix(),o.children.filter(W=>W.isHemisphereLight||W.isDirectionalLight).forEach(W=>W.intensity=W.userData.originalIntensity??W.intensity),ue.visible=!0,bn=null,Ci.visible=!1,Pi.visible=!1,h.enabled=!0,a.rotation.order="XYZ",zl(at?{...bs,position:K.toArray(),target:K.clone().add(q.multiplyScalar(10)).toArray()}:bs)}},Bl=function(){return{fov:a.fov,position:a.position.toArray(),target:h.target.toArray(),focused:V,navigationFloor:Mt,navigationY:vt,navigationElevation:Rt(Mt),visible:z(),gap:Z,showWalls:wt,showCeilings:Bt,showSlabs:te,cutaway:se,cutHeight:pe,labels:re,xray:st,showGrid:yt,overview:null}},zl=function(u){if(!u||Et)return;a.fov=Number.isFinite(u.fov)?u.fov:42,a.updateProjectionMatrix();let M=at=>Array.isArray(at)&&at.length===3&&at.every(Number.isFinite);Ft(),Z=Math.max(0,Math.min(12,Number(u.gap)||0)),wt=u.showWalls!==!1,Bt=!!u.showCeilings,te=u.showSlabs!==!1,se=u.cutaway!==!1,pe=Number.isFinite(u.cutHeight)?Math.max(.4,Math.min(2.4,u.cutHeight)):1.15,re=u.labels!==!1,st=!!u.xray,yt=u.showGrid!==!1,nt.visible=yt,V=g.has(u.focused)?u.focused:null;let E=Array.isArray(u.visible)?u.visible.filter(at=>g.has(at)):[...g.keys()];for(let[at,K]of g)K.visible=E.includes(at);if(!V&&!E.length&&u.visible?.length)for(let at of g.values())at.visible=!0;Mt=g.has(u.navigationFloor)?u.navigationFloor:V||Mt;let F=g.has(u.navigationFloor)&&Number.isFinite(u.navigationElevation)?Rt(Mt)-u.navigationElevation:0;vt=(Number.isFinite(u.navigationY)?u.navigationY:Rt(Mt))+F,kt(null),Ut(),M(u.position)&&M(u.target)?jt(new A().fromArray(u.position).add(new A(0,F,0)),new A().fromArray(u.target).add(new A(0,F,0)),!1):Ot(),xt(!0),_t("restore")},Dh=function(){if(!Et){n?.dispose(),s.domElement.removeEventListener("pointerdown",cn,!0),s.domElement.removeEventListener("pointermove",Ri,!0),s.domElement.removeEventListener("pointerup",Ue,!0),s.domElement.removeEventListener("pointercancel",sn,!0),s.domElement.removeEventListener("lostpointercapture",sn,!0),ie(!0),s.domElement.removeEventListener("pointerdown",At,!0),s.domElement.removeEventListener("pointermove",zt,!0),s.domElement.removeEventListener("lostpointercapture",Vt,!0),s.domElement.removeEventListener("pointerup",Vt,!0),s.domElement.removeEventListener("pointercancel",Vt,!0),s.domElement.removeEventListener("pointerdown",ve,!0),s.domElement.removeEventListener("pointermove",ln,!0),s.domElement.removeEventListener("pointerup",di,!0),s.domElement.removeEventListener("pointercancel",ie,!0),Et=!0,Ci.dispose();for(let u of Pi.children)u.geometry.dispose();D=null,s.setAnimationLoop(null),wh.disconnect(),s.domElement.removeEventListener("pointerdown",_n,!0),s.domElement.removeEventListener("pointermove",je,!0),s.domElement.removeEventListener("pointerup",rn,!0),s.domElement.removeEventListener("pointercancel",xn,!0),s.domElement.removeEventListener("lostpointercapture",xn,!0),Es.remove(),s.domElement.removeEventListener("pointerdown",xh,!0),s.domElement.removeEventListener("pointermove",yh,!0),s.domElement.removeEventListener("pointerup",vh,!0),s.domElement.removeEventListener("pointercancel",Un,!0),s.domElement.removeEventListener("lostpointercapture",Un,!0),Ln.remove(),xe.remove(),qi.dispose(),nn.dispose(),Nn.dispose(),Ki.dispose(),Zi.dispose();for(let u of ue.children)u.geometry.dispose();h.removeEventListener("start",Eh),h.removeEventListener("end",bh),h.dispose();for(let[u,M]of Object.entries(Mh))s.domElement.removeEventListener(u,M);s.domElement.removeEventListener("webglcontextlost",Th),window.removeEventListener("blur",Ol);for(let u of[...y,..._])u.material.map.dispose(),u.material.dispose(),u.geometry&&!u.isSprite&&u.geometry.dispose();for(let u of S)u.geometry.dispose(),u.material.dispose();for(let u of v)u.geometry.dispose();for(let u of m.values())u.dispose();p.dispose(),nt.geometry.dispose();for(let u of Array.isArray(nt.material)?nt.material:[nt.material])u.dispose();s.dispose(),s.forceContextLoss(),s.domElement.remove(),o.clear(),Zt.clear()}};s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.outputColorSpace=tn,s.setClearColor(1514532),s.domElement.setAttribute("aria-label","3D building editor. Alt-left drag orbits; middle or right drag pans. Alt-right drag horizontally zooms at the starting pointer: right closer, left farther. Click a floor or floor control to show and edit it alone; Shift-click adds or removes floors. F frames the selection. Click rooms and openings within the selected floor to edit them."),s.domElement.tabIndex=0,i.appendChild(s.domElement);let o=new Hr,a=new an(42,1,.05,5e3);o.add(new so(15988735,4739939,2.2));let l=new er(16777215,2.5);l.position.set(-40,80,-30),o.add(l);let c=new er(12044524,.6);c.position.set(40,10,60),o.add(c);let h=new Pl(a,s.domElement),d=r;r=()=>{h.dispose();let u=new Set,M=new Set,E=new Set;o.traverse(F=>{F.geometry&&u.add(F.geometry);for(let at of Array.isArray(F.material)?F.material:F.material?[F.material]:[])M.add(at),at.map&&E.add(at.map)});for(let F of E)F.dispose();for(let F of M)F.dispose();for(let F of u)F.dispose();o.clear(),d()},h.enableDamping=!0,h.dampingFactor=.09,h.maxPolarAngle=Math.PI-.001,h.minDistance=1,h.maxDistance=1600,h.screenSpacePanning=!0,h.mouseButtons={LEFT:null,MIDDLE:Sn.PAN,RIGHT:Sn.PAN},h.touches={ONE:Jn.ROTATE,TWO:Jn.DOLLY_PAN};let p=new Te(1,1,1),m=new Map,g=new Map,y=[],_=[],f=[],R=[],S=[],v=[],I=(u,M=!1)=>{let E=u+(M?":xray":"");return m.has(E)||m.set(E,new cs({color:u,roughness:.88,metalness:0,transparent:M,opacity:M?.5:1,depthWrite:!M})),m.get(E)},P=t.bounds,L=(P.minX+P.maxX)/2,U=(P.minY+P.maxY)/2,T=Math.max(6,(P.maxX-P.minX)*.22),b=t.levels.find(u=>u.id==="L0"),N=t.siteGroundZ??b?.z??0,G=b?t.levels.indexOf(b):t.levels.reduce((u,M,E)=>Math.abs(M.z-N)<Math.abs(t.levels[u].z-N)?E:u,0),J=u=>(u.primitives||[]).map(M=>{let E=window.KERN_PRIMITIVES.bounds(M);return{...E,z:u.z+E.z}}),tt=u=>{let M=[...u.boxes,...u.polygons||[],...J(u)];return M.length?{minX:Math.min(...M.map(E=>E.x)),maxX:Math.max(...M.map(E=>E.x+E.w)),minY:Math.min(...M.map(E=>E.y)),maxY:Math.max(...M.map(E=>E.y+E.h))}:P},et=(u,M,E)=>{let F=yx(u,M);if(!F)return;let at=String(u.name||u.id),K=Math.min(.32,Math.min(F.w,F.h)*.1),q=F.h>F.w*1.35,W=(q?F.h:F.w)-K*2,it=(q?F.w:F.h)-K*2,X=Math.min(W,9),St=Math.min(it,2.5),pt=64,Lt=document.createElement("canvas");Lt.width=Math.ceil(X*pt),Lt.height=Math.ceil(St*pt);let Jt=Lt.getContext("2d");if(!Jt)return;let oe=vx(at,Lt.width-10,Lt.height-8,Jt);Jt.fillStyle="#263545",Jt.textAlign="center",Jt.textBaseline="middle",Jt.strokeStyle="#eef3f4",Jt.lineWidth=Math.max(1,oe.fontSize*.045),Jt.lineJoin="round",oe.lines.forEach((fe,He)=>{let Be=Lt.height/2+(He-(oe.lines.length-1)/2)*oe.lineHeight;Jt.strokeText?.(fe,Lt.width/2,Be),Jt.fillText(fe,Lt.width/2,Be)});let de=new os(Lt);de.colorSpace=tn;let ae=new bt(new Bn(X,St),new fn({map:de,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));ae.rotation.set(-Math.PI/2,0,q?Math.PI/2:0),ae.position.set(F.x+F.w/2,F.z+.006,F.y+F.h/2),ae.renderOrder=2,ae.userData={level:M.id,roomLabel:!0,room:u.id,name:at,surface:F,worldWidth:X,worldHeight:St,fontSize:oe.fontSize/pt,lines:oe.lines},ae.userData.duplicate=_.some(fe=>fe.userData.level===M.id&&fe.position.distanceTo(ae.position)<.01),E.add(ae),_.push(ae)};for(let u=0;u<t.levels.length;u++){let M=t.levels[u],E=new wn,F=tt(M);E.userData={id:M.id,rank:u-G,z:M.z},g.set(M.id,E),o.add(E);let at=new Map;for(let it of[...M.boxes,...t.levels.flatMap(X=>X.id===M.id?[]:X.boxes.filter(St=>["stair","landing"].includes(St.kind)&&St.z<M.z&&t.stairs?.some(pt=>pt.connectionId===St.stair&&pt.stops.some(Lt=>Lt.floor===M.id)&&St.z>=Math.max(...pt.stops.filter(Lt=>Lt.z<M.z).map(Lt=>Lt.z))-.2)).map(St=>({...St,contextOnly:!0})))]){let X=`${it.color}:${it.kind}:${!!it.contextOnly}`;at.has(X)||at.set(X,[]),at.get(X).push(it)}for(let it of at.values()){let X=new Ks(p,I(it[0].color,it[0].kind==="window"),it.length);if(X.frustumCulled=!1,X.userData={boxes:it,level:M.id,faded:new Set},E.add(X),f.push(X),R.push(X),it[0].kind==="wall"){let St=new Ks(p,I(it[0].color,!0),it.length);St.frustumCulled=!1,St.renderOrder=1,St.userData={boxes:it,level:M.id,primary:X,xray:!0},X.userData.fadeMesh=St,E.add(St),f.push(St)}}for(let it of[...M.polygons||[],...t.levels.flatMap(X=>X.id===M.id?[]:(X.polygons||[]).filter(St=>St.z<M.z&&t.stairs?.some(pt=>pt.connectionId===St.stair&&pt.stops.some(Lt=>Lt.floor===M.id)&&St.z>=Math.max(...pt.stops.filter(Lt=>Lt.z<M.z).map(Lt=>Lt.z))-.2)).map(St=>({...St,contextOnly:!0})))]){let X=new ri(it.polygon.map(Lt=>new mt(Lt[0],-Lt[1])));for(let Lt of it.holes||[])X.holes.push(new ki(Lt.map(Jt=>new mt(Jt[0],-Jt[1]))));let St=new ls(X,{depth:it.height,bevelEnabled:!1,steps:1});St.rotateX(-Math.PI/2);let pt=new bt(St,I(it.color,it.kind==="window"));pt.position.y=it.z,pt.userData={level:M.id,stair:it.stair,sourceFloor:it.sourceFloor,door:it.door,contextOnly:!!it.contextOnly,room:it.room,kind:it.kind,shape:it},E.add(pt),v.push(pt)}let K=new lo(new An(new A(F.minX,M.z+.04,F.minY),new A(F.maxX,M.z+.07,F.maxY)),8176895);K.visible=!1,K.material.depthTest=!0,K.material.transparent=!0,K.material.opacity=.95,K.userData.floorHighlight=M.id,E.add(K),S.push(K);let q=document.createElement("canvas");q.width=640,q.height=96;let W=q.getContext("2d");if(W){W.fillStyle="#202936",W.fillRect(0,0,640,96),W.strokeStyle="#465367",W.strokeRect(1,1,638,94),W.fillStyle="#e7effc",W.font="500 34px system-ui",W.fillText(`${M.id} \xB7 ${M.z>0?"+":""}${M.z.toFixed(2)} m`,18,38),W.fillStyle="#c9d4e4",W.font="30px system-ui",W.fillText(String(M.name).slice(0,40),18,77,604);let it=new os(q);it.colorSpace=tn;let X=new Vr(new Zs({map:it,depthTest:!0,depthWrite:!1}));X.position.set(P.minX-T*.65-1,M.z+.2,(F.minY+F.maxY)/2),X.scale.set(T,T*96/640,1),X.userData={level:M.id,floorLabel:!0,labelWidth:230,labelRatio:96/640},E.add(X),y.push(X);let St=new Ye(new Se().setFromPoints([new A(X.position.x+T/2,M.z+.2,X.position.z),new A(F.minX,M.z+.07,X.position.z)]),new On({color:8176895,depthTest:!0,transparent:!0,opacity:.9}));St.visible=!1,St.userData.floorLeader=M.id,E.add(St),S.push(St)}for(let it of M.rooms||[])et(it,M,E);for(let it of M.annotations||[]){let X=String(it.text||""),St=it.fontSize||.45;if(!X)continue;let pt=Math.min(30,Math.max(St,X.length*St*.58)),Lt=St*1.3,Jt=document.createElement("canvas");Jt.width=Math.ceil(pt*64),Jt.height=Math.ceil(Lt*64);let oe=Jt.getContext("2d");if(!oe)continue;oe.font=`${St*64}px system-ui,Segoe UI,sans-serif`,oe.fillStyle="#53686d",oe.textAlign="center",oe.textBaseline="middle",oe.fillText(X,Jt.width/2,Jt.height/2,Jt.width);let de=new os(Jt);de.colorSpace=tn;let ae=new bt(new Bn(pt,Lt),new fn({map:de,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1})),fe=M.rooms.find(He=>He.id===it.sourceRoom)||M.rooms.find(He=>it.x>=He.x&&it.x<=He.x+He.w&&it.y>=He.y&&it.y<=He.y+He.h);ae.rotation.x=-Math.PI/2,ae.position.set(it.x,(fe?.z??M.z)+.008,it.y),ae.renderOrder=2,ae.userData={level:M.id,annotationLabel:!0,annotation:it.id,name:X},E.add(ae),_.push(ae)}}let j=Math.max(P.maxX-P.minX,P.maxY-P.minY,15)*1.35,nt=new ao(j,Math.min(100,Math.ceil(j)),6781842,3160648);nt.position.set(L,N,U),nt.userData.groundDatum=N,o.add(nt),nt.renderOrder=-10;for(let u of Array.isArray(nt.material)?nt.material:[nt.material])u.transparent=!1,u.opacity=1,u.depthWrite=!1;let Z=0,Et=!1,wt=!0,Bt=!1,te=!0,se=!0,pe=1.15,re=!0,st=!1,yt=!0,H=null,V=null,ut=[],Wt="",ee=null,D=null,dt=!1,ht="",lt=0,ct=!1,Mt=g.has(e.activeFloor)?e.activeFloor:b?.id||t.levels[G]?.id,vt=g.get(Mt)?.userData.z||0,Rt=u=>{let M=g.get(u);return M?M.userData.z+M.userData.rank*Z:vt},le=window.matchMedia?.("(prefers-reduced-motion: reduce)"),Zt=new Set,C=new ai,x=new mt,z=()=>[...g].filter(([,u])=>u.visible).map(([u])=>u),Q=new Set((e.editableFloors||[]).filter(u=>g.has(u))),_t=(u="navigation")=>e.onVisibilityChanged?.(z(),V,u),gt=null,qt=null,ot=null,Me=null,ue=new wn;o.add(ue);let xe=document.createElement("div");xe.style.cssText="position:absolute;left:18px;bottom:18px;padding:8px 12px;background:#172b37;color:#e7b16b;pointer-events:none;display:none",i.append(xe);let nn=new fn({color:15184235,transparent:!0,opacity:.65,depthTest:!1}),qi=new no({color:15185774,dashSize:.18,gapSize:.12,depthTest:!1}),Ms=null,Ln=document.createElement("div");Ln.dataset.selectionDimensions="true",Ln.style.cssText="position:absolute;pointer-events:none;display:none;padding:4px 7px;border-radius:4px;background:#172b37dd;color:#e7b76e;font:13px system-ui",i.append(Ln);let Zi=new fn({color:11184810,transparent:!0,opacity:.1,depthTest:!1,depthWrite:!1,side:pn}),Ki=new On({color:5493465,depthTest:!1}),Nn=new fn({color:5941759,depthTest:!1}),Y=null,$=null,k=0,At=u=>{if(window.KERN_MAX_PASSAGE_UI?.altConnectIntent(u)||Fe||!u.altKey||ot||Nt||![0,1,2].includes(u.button)||u.button===0&&qt&&Pt==="select"&&(B(u,qt),C.intersectObjects(ue.children,!1).some(F=>["nw","ne","se","sw"].includes(F.object.userData.edge))))return;if(Y=u.pointerId,ee=null,Zt.clear(),Un(),Ft(),k=performance.now()+500,h.mouseButtons.LEFT=Sn.ROTATE,h.mouseButtons.RIGHT=Sn.PAN,s.domElement.style.cursor=u.button===2?"ew-resize":"grabbing",u.__viewNavigation=!0,u.preventDefault(),u.button!==2){h.enabled=!0;return}jt(a.position.clone(),h.target.clone(),!1),ne(u);let M=a.getWorldDirection(new A),E=gt?.point.clone()||C.ray.intersectPlane(new en().setFromNormalAndCoplanarPoint(M,h.target),new A)||h.target.clone();$={x:u.clientX,anchor:E,position:a.position.clone(),target:h.target.clone(),distance:a.position.distanceTo(h.target)},h.enabled=!1,s.domElement.setPointerCapture(u.pointerId),u.stopImmediatePropagation()},zt=u=>{if(Y!==u.pointerId||!$)return;u.__viewNavigation=!0,u.preventDefault(),u.stopImmediatePropagation();let M=$,E=ci.clamp(M.distance*Math.exp(-(u.clientX-M.x)*.01),h.minDistance,h.maxDistance)/M.distance;jt(M.position.clone().sub(M.anchor).multiplyScalar(E).add(M.anchor),M.target.clone().sub(M.anchor).multiplyScalar(E).add(M.anchor),!1),Ss()},Vt=u=>{if(Y!==u.pointerId)return;let M=!!$;u.__viewNavigation=!0,Y=null,$=null,k=performance.now()+400,h.mouseButtons.LEFT=null,h.mouseButtons.RIGHT=Sn.PAN,h.enabled=!Fe,window.KERN_TRANSFORM?.syncCursor(),s.domElement.style.cursor="",M&&(u.preventDefault(),u.stopImmediatePropagation(),s.domElement.hasPointerCapture(u.pointerId)&&s.domElement.releasePointerCapture(u.pointerId))};s.domElement.addEventListener("pointerdown",At,!0),s.domElement.addEventListener("pointermove",zt,!0),s.domElement.addEventListener("pointerup",Vt,!0),s.domElement.addEventListener("pointercancel",Vt,!0),s.domElement.addEventListener("lostpointercapture",Vt,!0);let Pt="select",Nt=null,$t=new wn;$t.userData.authorPreview=!0,o.add($t);let ve=u=>{if(Y===u.pointerId||u.__viewNavigation||Fe||Pt==="select"||u.button!==0)return;if(u.preventDefault(),u.stopImmediatePropagation(),Pt==="bridge"){let q=Re(u);q&&window.KERN_BRIDGE_UI?.click(q),Yt(),xe.style.display="none";return}if(["door","connect","disconnect"].includes(Pt)){let q=Qt(u);if(!q)return;It(q.floor,{preserveEditing:!0}),Nt={connection:!0,pointerId:u.pointerId,floor:q.floor,begin:window.KERN_CONNECTION_3D.begin(Pt,q),last:q,clientX:u.clientX,clientY:u.clientY},h.enabled=!1,s.domElement.setPointerCapture(u.pointerId);return}if(!window.KERN_AUTHORING_3D||(ne(u),gt?.floor&&!(Pt==="stair-route"&&window.KERN_ROUTE_UI?.getDraft().length)&&It(gt.floor,{preserveEditing:!0}),!V))return;let M=t.levels.find(q=>q.id===(gt?.floor||V)),E=M.rooms.find(q=>q.id===gt?.room)||(qt?.isFloor?null:qt),F=(E?.z??M.z)+g.get(M.id).position.y,at=De(u,F);if(!at)return;if(Pt==="stair-route"){window.KERN_ROUTE_UI?.addPoint(at,u,E?.id,M.id);return}let K=window.KERN_AUTHORING_3D.begin(Pt,gt?.floor||V,at,E?.id,window.KERN_AUTHORING_3D.width());if(K.error){be(K);return}Nt={pointerId:u.pointerId,z:F,begin:K,floor:V},h.enabled=!1,s.domElement.setPointerCapture(u.pointerId)},ln=u=>{if(Nt?.connection){if(u.pointerId!==Nt.pointerId)return;u.preventDefault(),u.stopImmediatePropagation(),Nt.last=Qt(u,Nt.floor)||Nt.last,Nt.moved=Math.hypot(u.clientX-Nt.clientX,u.clientY-Nt.clientY)>5,Ne(window.KERN_CONNECTION_3D.preview(Pt,Nt.last,Nt.moved?Nt.begin.hit:Nt.begin.pending));return}if(!Nt){if(!Fe&&Y===null&&Pt==="bridge"){let E=Re(u),F=E&&window.KERN_BRIDGE_UI?.preview(E);F?be(F):(Yt(),xe.style.display="none");return}if(!Fe&&Y===null&&["door","connect","disconnect"].includes(Pt)){let E=Qt(u);E&&Ne(window.KERN_CONNECTION_3D.preview(Pt,E));return}if(!Fe&&Y===null&&V&&["edge-steps","stair-route"].includes(Pt)){ne(u);let E=t.levels.find(q=>q.id===(gt?.floor||V)),F=E.rooms.find(q=>q.id===gt?.room),at=(F?.z??E.z)+g.get(E.id).position.y,K=De(u,at);if(Yt(),!K)return;if(Pt==="edge-steps"){let q=window.KERN_AUTHORING_3D.begin("edge-steps",V,K,F?.id,window.KERN_AUTHORING_3D.width());if(!q.error){let W=new Ye(new Se().setFromPoints([q.edge.a,q.edge.b].map(it=>new A(it[0],at+.1,it[1]))),Ki);W.renderOrder=18,$t.add(W)}}else{let q=window.KERN_ROUTE_UI?.preview(K,u,F?.id,E.id);if(q){q.detail&&be(q);let W=window.snapSize?.()||.25,it=new bt(new Bn(W,W),Zi);it.rotation.x=-Math.PI/2,it.position.set(q.point[0],at+.025,q.point[1]),it.renderOrder=17,$t.add(it);let X=new bt(new Kn(.07,10,8),Nn);X.position.set(q.point[0],at+.1,q.point[1]),X.renderOrder=19,$t.add(X)}}}return}if(u.pointerId!==Nt.pointerId)return;if(u.preventDefault(),u.stopImmediatePropagation(),Nt.floor!==V){ie();return}let M=De(u,Nt.z);M&&(Nt.next=window.KERN_AUTHORING_3D.candidate(Nt.begin,M,u.ctrlKey),be(Nt.next))},di=u=>{if(!Nt||u.pointerId!==Nt.pointerId)return;if(u.preventDefault(),u.stopImmediatePropagation(),Nt.connection){let E=Nt;Nt=null,Yt(),xe.style.display="none",h.enabled=!0,s.domElement.hasPointerCapture(u.pointerId)&&s.domElement.releasePointerCapture(u.pointerId),window.KERN_CONNECTION_3D.finish(E.begin,E.last,E.moved);return}let M=Nt.next;ie(),M&&!M.error&&(ie(!0),window.KERN_AUTHORING_3D.finish(M))};s.domElement.addEventListener("pointerdown",ve,!0),s.domElement.addEventListener("pointermove",ln,!0),s.domElement.addEventListener("pointerup",di,!0),s.domElement.addEventListener("pointercancel",ie,!0),s.domElement.addEventListener("lostpointercapture",()=>{Nt&&ie()},!0);let cn=u=>{Y===u.pointerId||u.__viewNavigation||n?.down(u)&&jt(a.position.clone(),h.target.clone(),!1)},Ri=u=>n?.move(u),Ue=u=>n?.up(u),sn=()=>n?.cancel();s.domElement.addEventListener("pointerdown",cn,!0),s.domElement.addEventListener("pointermove",Ri,!0),s.domElement.addEventListener("pointerup",Ue,!0),s.domElement.addEventListener("pointercancel",sn,!0),s.domElement.addEventListener("lostpointercapture",sn,!0);let _n=u=>{if(Y===u.pointerId||u.__viewNavigation||Fe||u.button!==0||!qt)return;let M=B(u,qt),E=C.intersectObjects(ue.children,!1).find(at=>at.object.userData.edge);if(!E||(Number.isFinite(E.object.userData.routeZ)&&(M=B(u,{...qt,z:E.object.userData.routeZ+(E.object.userData.displayOffset??g.get(qt.floor).position.y)-g.get(qt.floor).position.y})||E.point.clone()),M||(M=E.point.clone()),ne(u),E.object.userData.edge?.startsWith("route-")&&window.KERN_ROUTE_UI?.selectPoint(Number(E.object.userData.edge.split("-")[2])),window.KERN_ROTATE?.active()&&(!E||!window.KERN_ROTATE.eligibleRoom(qt))))return;let F=null;if(E?.object.userData.edge?.startsWith("rotate-")){let at=Number(E.object.userData.edge.slice(7));if(F=window.KERN_ROTATE.pivotFor(qt),!F||F.index===at){window.KERN_ROTATE.choosePivot(qt,"rooms",at),w(qt),u.preventDefault(),u.stopImmediatePropagation();return}}ot={rotationPivot:F,start:M.clone(),original:JSON.parse(JSON.stringify(qt)),next:JSON.parse(JSON.stringify(qt)),routeZ:E?.object.userData.routeZ,planeZ:Number.isFinite(E?.object.userData.routeZ)?E.object.userData.routeZ+(E.object.userData.displayOffset??g.get(qt.floor).position.y)-g.get(qt.floor).position.y:qt.z,edge:E?.object.userData.edge==="move"?null:E?.object.userData.edge,clientY:u.clientY,baseHeight:window.KERN_ELEVATION_UI?.handleZ(qt.floor,qt.id)??qt.z,baseGroupY:g.get(qt.floor).position.y,pointerId:u.pointerId},h.enabled=!1,u.preventDefault(),u.stopImmediatePropagation(),s.domElement.setPointerCapture(u.pointerId)},je=u=>{if(!ot||ot.pointerId!==u.pointerId)return;let M=B(u,{...ot.original,z:ot.planeZ??ot.original.z})||(ot.edge==="elevate"||ot.edge?.startsWith("route-height")?ot.start:null);if(!M)return;if(ot.edge?.startsWith("route-landing-")){let W=ot.original,it=JSON.parse(JSON.stringify(W)),X=ot.edge.split("-"),St=Number(X[2]),pt=Number(X[3]),Lt=it.routeStair.nodes[St].landing[pt],Jt=window.KERN_ROUTE_STAIRS.point(W,Lt),oe=u.ctrlKey?0:window.snapSize?.()??.25,de=Jt[0]+M.x-ot.start.x,ae=Jt[1]+M.z-ot.start.z;Object.assign(Lt,window.KERN_ROUTE_STAIRS.local(W,[oe?Math.round(de/oe)*oe:de,oe?Math.round(ae/oe)*oe:ae])),window.KERN_ROUTE_STAIRS.simplePolygon(it.routeStair.nodes[St].landing.map(fe=>window.KERN_ROUTE_STAIRS.point(it,fe)))&&(ot.next=it,w(it)),u.preventDefault(),u.stopImmediatePropagation();return}if(ot.edge?.startsWith("route-")){let W=ot.original,it=JSON.parse(JSON.stringify(W)),X=it.routeStair,St=Number(ot.edge.split("-").at(-1)),pt=X.nodes[St];if(ot.edge.startsWith("route-height")){let Jt=2*a.position.distanceTo(new A(W.x+W.w/2,W.z+ot.baseGroupY,W.y+W.h/2))*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),oe=ot.routeZ+(ot.clientY-u.clientY)*Jt,de=u.ctrlKey?oe:Math.round(oe*4)/4;window.KERN_ROUTE_STAIRS.setHeight(it,St,de,window.kernPlanner?.getPlan())}else{let Jt=window.KERN_ROUTE_STAIRS.point(W,pt),oe=u.ctrlKey?0:window.snapSize?.()??.25,de=Jt[0]+M.x-ot.start.x,ae=Jt[1]+M.z-ot.start.z,fe=window.KERN_ROUTE_STAIRS.snapNode(it,St,[de,ae],oe,u.ctrlKey,u.shiftKey);window.KERN_ROUTE_STAIRS.moveNode(it,St,fe,window.kernPlanner?.getPlan()),window.KERN_ROUTE_UI?.attachEndpoint(it,St,fe)}ot.next=it,w(it);let Lt=window.kernPlanner?.getPlan();if(Lt){let Jt=Lt.floors[W.floor]?.rooms.find(oe=>oe.id===W.id);if(Jt){Object.assign(Jt,it);let oe=window.KERN_ROUTE_STAIRS.build(Lt,W.floor,W.id);be({detail:oe,fid:W.floor,summary:oe.warnings[0]?.text||"Editable stair route"})}}u.preventDefault(),u.stopImmediatePropagation();return}if(ot.edge==="elevate"){let W=ot.original,it=2*a.position.distanceTo(new A(W.x+W.w/2,W.z+ot.baseGroupY,W.y+W.h/2))*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),X=ot.baseHeight+(ot.clientY-u.clientY)*it,St=u.ctrlKey?0:.25,pt=Math.max(-150,Math.min(150,St?Math.round(X/St)*St:X));if(ot.next={...W,z:pt,__elevation:!0},xe.style.display="block",xe.style.top="auto",xe.style.bottom="18px",xe.style.left="18px",xe.textContent=(W.isFloor?"Floor":"Surface")+" "+pt.toFixed(2)+" m \xB7 "+(u.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"),g.get(W.floor).position.y=ot.baseGroupY,w(ot.next),W.isFloor)g.get(W.floor).position.y=ot.baseGroupY+pt-W.z;else{let pr=window.KERN_ELEVATION_UI?.preview(W.floor,W.id,pt),Qn=pr&&window.KERN_ELEVATIONS?.build(pr,W.floor,W.id),sf=Qn?[...Qn.flights.flatMap(on=>on.treads.map(fi=>({...fi.rect,polygon:fi.polygon,z:fi.z-.12,height:.12}))),...Qn.landings.map(on=>({...on.rect,polygon:on.polygon,z:on.z-.15,height:.15}))]:[{x:W.x,y:W.y,w:W.w,h:W.h,z:pt-.18,height:.18}];for(let on of sf){let fi,mr;if(!Qn&&W.shape){let rf=new ri(window.KERN_SHAPES.points(W).map(Lh=>new mt(Lh[0],-Lh[1])));fi=new ls(rf,{depth:on.height,bevelEnabled:!1,steps:1}),fi.rotateX(-Math.PI/2),mr=new bt(fi,nn),mr.position.y=on.z+ot.baseGroupY}else fi=new Te(on.w,on.height,on.h),mr=new bt(fi,nn),mr.position.set(on.x+on.w/2,on.z+on.height/2+ot.baseGroupY,on.y+on.h/2);ue.add(mr)}Qn&&(xe.textContent=pt.toFixed(2)+" m \xB7 "+Qn.segments[0].risers+" rises \xD7 "+(Qn.metrics.riserMax*100).toFixed(1)+" cm \xB7 "+(u.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"))}let Lt=W.x-.25,Jt=W.y+W.h+.25,oe=ot.baseHeight+ot.baseGroupY,de=pt+ot.baseGroupY,ae=[new A(Lt,oe,Jt),new A(Lt,de,Jt)],fe=new Ye(new Se().setFromPoints(ae),qi);fe.computeLineDistances(),fe.renderOrder=16,ue.add(fe);for(let pr of[oe,de]){let Qn=new Ye(new Se().setFromPoints([new A(Lt-.18,pr,Jt),new A(Lt+.18,pr,Jt)]),Nn);Qn.renderOrder=16,ue.add(Qn)}let He=new A(Lt,(oe+de)/2,Jt).project(a),Be=s.domElement.getBoundingClientRect(),kn=pt-ot.baseHeight;xe.style.bottom="auto",xe.style.left=Math.min(Math.max(8,(He.x+1)*Be.width/2+12),Math.max(8,Be.width-260))+"px",xe.style.top=Math.min(Math.max(8,(1-He.y)*Be.height/2),Math.max(8,Be.height-60))+"px",xe.textContent=(kn>0?"+":"")+kn.toFixed(2)+" m \xB7 "+xe.textContent,u.preventDefault(),u.stopImmediatePropagation();return}let E=ot.original,F=u.ctrlKey?0:window.snapSize?.()??.5,at=F?Math.round((M.x-ot.start.x)/F)*F:M.x-ot.start.x,K=F?Math.round((M.z-ot.start.z)/F)*F:M.z-ot.start.z,q={...E};if(ot.edge?.startsWith("rotate-")){let W=ot.rotationPivot||{x:E.x+E.w/2,y:E.y+E.h/2},it=Math.atan2(ot.start.z-W.y,ot.start.x-W.x),X=window.KERN_ROTATE.delta(E,(Math.atan2(M.z-W.y,M.x-W.x)-it)*180/Math.PI,u.shiftKey);window.KERN_SHAPES.rotate(q,X,W),ot.rotationFeedback={center:W,start:it,degrees:X,cursor:M.clone()}}else if(ot.edge)ot.edge.includes("e")&&(q.w=Math.max(1,E.w+at)),ot.edge.includes("s")&&(q.h=Math.max(1,E.h+K)),ot.edge.includes("w")&&(q.x=Math.min(E.x+E.w-1,E.x+at),q.w=E.x+E.w-q.x),ot.edge.includes("n")&&(q.y=Math.min(E.y+E.h-1,E.y+K),q.h=E.y+E.h-q.y);else{q.x+=M.x-ot.start.x,q.y+=M.z-ot.start.z;let W=18*a.position.distanceTo(M)*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),it=u.ctrlKey&&u.shiftKey&&!u.altKey&&window.KERN_ROOM_SNAP?.translation(q,t.levels.find(X=>X.id===E.floor).rooms,new Set([E.id]),W);ot.snap=it||null,it?(q.x+=it.dx,q.y+=it.dy):u.ctrlKey||(q.x=E.x+at,q.y=E.y+K)}if(ot.edge&&!ot.edge.startsWith("rotate-")&&(u.shiftKey&&!u.ctrlKey||u.altKey)&&window.KERN_TRANSFORM&&Object.assign(q,window.KERN_TRANSFORM.resize(E,ot.edge,at,K,{...u,shiftKey:u.shiftKey&&!u.ctrlKey,altKey:u.altKey})),ot.edge&&!ot.edge.startsWith("rotate-")&&u.shiftKey&&u.ctrlKey&&!u.altKey){let W=ot.edge,it={x:E.x+(W.includes("e")?E.w:0)+M.x-ot.start.x,y:E.y+(W.includes("s")?E.h:0)+M.z-ot.start.z},X=18*a.position.distanceTo(M)*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),St=window.KERN_ROOM_SNAP?.point(it,t.levels.find(pt=>pt.id===E.floor).rooms,new Set([E.id]),X);ot.snap=St||null,St&&(W.includes("e")&&(q.w=Math.max(1,St.x-E.x)),W.includes("s")&&(q.h=Math.max(1,St.y-E.y)),W.includes("w")&&(q.x=Math.min(St.x,E.x+E.w-1),q.w=E.x+E.w-q.x),W.includes("n")&&(q.y=Math.min(St.y,E.y+E.h-1),q.h=E.y+E.h-q.y))}if(E.shape&&ot.edge&&!ot.edge.startsWith("rotate-")&&window.KERN_TRANSFORM?.orientedResize&&Object.assign(q,window.KERN_TRANSFORM.orientedResize(E,ot.edge,M.x-ot.start.x,M.z-ot.start.z,u)),ot.next=q,w(q),ot.rotationFeedback){let W=ot.rotationFeedback,it=W.center,X=Math.hypot(W.cursor.x-it.x,W.cursor.z-it.y),St=Math.min(X,6)*.8,pt=W.start+W.degrees*Math.PI/180,Lt=q.z+ot.baseGroupY+.12,Jt=[];for(let ae=0,fe=Math.max(2,Math.min(160,Math.ceil(Math.abs(W.degrees)/5)));ae<=fe;ae++){let He=W.start+(pt-W.start)*ae/fe;Jt.push(new A(it.x+Math.cos(He)*St,Lt,it.y+Math.sin(He)*St))}let oe=[new A(it.x+Math.cos(W.start)*X,Lt,it.y+Math.sin(W.start)*X),new A(it.x,Lt,it.y),new A(it.x+Math.cos(pt)*X,Lt,it.y+Math.sin(pt)*X)];for(let ae of[Jt,oe]){let fe=new Ye(new Se().setFromPoints(ae),qi);fe.computeLineDistances(),fe.renderOrder=15,ue.add(fe)}let de=s.domElement.getBoundingClientRect();xe.style.display="block",xe.style.bottom="auto",xe.style.left=Math.min(Math.max(8,u.clientX-de.left+16),Math.max(8,de.width-130))+"px",xe.style.top=Math.max(8,u.clientY-de.top-38)+"px",xe.textContent=(W.degrees>0?"+":"")+W.degrees.toFixed(1)+"\xB0"}if(ot.snap)for(let W of ot.snap.guides?.length?ot.snap.guides:[ot.snap]){let it=q.z+g.get(q.floor).position.y+.1,X=W.edge?[W.edge.a,W.edge.b]:[[W.x-.2,W.y],[W.x+.2,W.y],[W.x,W.y],[W.x,W.y-.2],[W.x,W.y+.2]],St=new Ye(new Se().setFromPoints(X.map(pt=>new A(pt[0],it,pt[1]))),Ki);St.renderOrder=12,ue.add(St)}u.preventDefault(),u.stopImmediatePropagation()},rn=u=>{if(!ot||ot.pointerId!==u.pointerId)return;let M=ot;ot=null,Yt(),g.get(M.original.floor).position.y=M.baseGroupY,xe.style.display="none",h.enabled=!0,u.preventDefault(),u.stopImmediatePropagation(),s.domElement.hasPointerCapture(u.pointerId)&&s.domElement.releasePointerCapture(u.pointerId),M.next.__elevation||["x","y","w","h"].some(E=>M.next[E]!==M.original[E])||JSON.stringify(M.next.shape)!==JSON.stringify(M.original.shape)||JSON.stringify(M.next.routeStair)!==JSON.stringify(M.original.routeStair)?e.onRoomEdit?.(M.original.floor,M.original.id,M.next):M.edge?.startsWith("rotate-")&&(window.KERN_ROTATE.choosePivot(M.original,"rooms",Number(M.edge.slice(7))),w(M.original))},xn=()=>{Yt(),ot&&(g.get(ot.original.floor).position.y=ot.baseGroupY),xe.style.display="none",ot=null,h.enabled=!Fe,qt&&w(qt)};s.domElement.addEventListener("pointerdown",_n,!0),s.domElement.addEventListener("pointermove",je,!0),s.domElement.addEventListener("pointerup",rn,!0),s.domElement.addEventListener("pointercancel",xn,!0),s.domElement.addEventListener("lostpointercapture",xn,!0);let Ve=null,Es=document.createElement("div");Es.style.cssText="position:absolute;border:1px solid #79b8ff;background:#79b8ff20;pointer-events:none;display:none;z-index:25",i.append(Es);let Un=()=>{Ve=null,Es.style.display="none"},xh=u=>{Fe||Y!==null||u.altKey||u.button!==0||ot||Pt!=="select"||(Ve={id:u.pointerId,x:u.clientX,y:u.clientY,shift:u.shiftKey,subtract:u.ctrlKey||u.metaKey,previous:Me?.ids||[]})},yh=u=>{if(!Ve||Ve.id!==u.pointerId||Math.hypot(u.clientX-Ve.x,u.clientY-Ve.y)<5)return;let M=s.domElement.getBoundingClientRect();Ve.moved=!0,Es.style.display="block",Object.assign(Es.style,{left:Math.min(u.clientX,Ve.x)-M.left+"px",top:Math.min(u.clientY,Ve.y)-M.top+"px",width:Math.abs(u.clientX-Ve.x)+"px",height:Math.abs(u.clientY-Ve.y)+"px"})},vh=u=>{if(!Ve||Ve.id!==u.pointerId)return;let M=Ve;if(Un(),!M.moved)return;u.preventDefault(),Zt.clear(),ee=null;let E=s.domElement.getBoundingClientRect(),F=Math.min(M.x,u.clientX),at=Math.max(M.x,u.clientX),K=Math.min(M.y,u.clientY),q=Math.max(M.y,u.clientY),W=V||Mt,it=t.levels.find(pt=>pt.id===W);if(!it)return;a.updateMatrixWorld(!0);let X=it.rooms.filter(pt=>{let Lt=(window.KERN_SHAPES?.points(pt)||[[pt.x,pt.y],[pt.x+pt.w,pt.y],[pt.x+pt.w,pt.y+pt.h],[pt.x,pt.y+pt.h]]).flatMap(de=>[pt.z,pt.z+(pt.height||0)].map(ae=>new A(de[0],ae+g.get(W).position.y,de[1]).project(a))).filter(de=>de.z>=-1&&de.z<=1);if(!Lt.length)return!1;let Jt=Lt.map(de=>(de.x+1)*E.width/2+E.left),oe=Lt.map(de=>(1-de.y)*E.height/2+E.top);return Math.min(...Jt)<=at&&Math.max(...Jt)>=F&&Math.min(...oe)<=q&&Math.max(...oe)>=K}).map(pt=>pt.id),St=M.subtract?M.previous.filter(pt=>!X.includes(pt)):M.shift?[...new Set([...M.previous,...X])]:X;V||It(W,{preserveEditing:!0}),ur(W,St),e.onRoomsSelect?.(W,St)};s.domElement.addEventListener("pointerdown",xh,!0),s.domElement.addEventListener("pointermove",yh,!0),s.domElement.addEventListener("pointerup",vh,!0),s.domElement.addEventListener("pointercancel",Un,!0),s.domElement.addEventListener("lostpointercapture",Un,!0);let jd=u=>{Fe||Y===u.pointerId||u.__viewNavigation||(Zt.add(u.pointerId),Zt.size>1?ee=null:ee=u.button===0?{id:u.pointerId,x:u.clientX,y:u.clientY,moved:!1}:null)},Qd=u=>{if(!Fe){if(ee&&Math.hypot(u.clientX-ee.x,u.clientY-ee.y)>5&&(ee.moved=!0),Zt.size||u.buttons){s.domElement.title="",kt(null);return}kt(ne(u))}},tf=u=>{if(Fe||u.__viewNavigation)return;let M=ee&&u.pointerId===ee.id&&!ee.moved&&Math.hypot(u.clientX-ee.x,u.clientY-ee.y)<=5&&Zt.size===1;if(Zt.delete(u.pointerId),ee=null,M){let E=ne(u);if(E){if(e.onFloorSelect){let at=V===E&&Q.size===1&&Q.has(E)&&!gt?.floorSurface;e.onFloorSelect(E,{additive:!!u.shiftKey}),!u.shiftKey&&at&&(gt?.door?e.onDoorSelect?.(E,gt.door):gt?.room&&e.onRoomSelect?.(E,gt.room));return}let F=gt?.floorSurface||gt?.roomLabel&&(u.shiftKey||V!==E||!Q.has(E));u.shiftKey&&(F||!gt?.room&&!gt?.door)?e.onFloorScopeToggle?e.onFloorScopeToggle(E):Gt(E,!0):F?It(E):(It(E,{preserveEditing:!!gt?.room||!!gt?.door}),gt?.door?e.onDoorSelect?.(E,gt.door):gt?.room&&e.onRoomSelect?.(E,gt.room))}}},Ol=()=>{n?.cancel(),Un(),Y=null,$=null,s.domElement.style.cursor="",h.mouseButtons.LEFT=null,h.mouseButtons.RIGHT=Sn.PAN,ie(!0),xn(),Zt.clear(),ee=null,dt=!1,Ft(),kt(null)};window.addEventListener("blur",Ol);let ef=r;r=()=>{window.removeEventListener("blur",Ol),ef()};let Mh={pointerdown:jd,pointermove:Qd,pointerup:tf,pointercancel:u=>{Zt.delete(u.pointerId),ee=null,kt(null)},pointerleave:()=>{Zt.size||(s.domElement.title="",kt(null))},keydown:u=>{if(u.key==="Escape"&&Ve){Un(),ee=null,Zt.clear(),u.preventDefault(),u.stopPropagation();return}if(u.key==="Escape"&&(Nt||Pt!=="select")){u.preventDefault(),u.stopImmediatePropagation(),ie(!0);return}if(u.key==="Escape"&&ot){u.preventDefault(),u.stopImmediatePropagation(),xn();return}u.key==="Escape"&&V?(u.preventDefault(),u.stopPropagation(),O()):V&&["ArrowUp","ArrowDown"].includes(u.key)&&(u.preventDefault(),u.stopPropagation(),ft(u.key==="ArrowUp"?1:-1))},contextmenu:u=>{u.preventDefault(),!(Fe||u.altKey||performance.now()<k)&&(ne(u),gt&&e.onContext?.({floor:gt.floor,room:gt.room,x:gt.point.x,y:gt.point.z,z:t.levels.find(M=>M.id===gt.floor)?.rooms.find(M=>M.id===gt.room)?.z??t.levels.find(M=>M.id===gt.floor)?.z??gt.point.y,clientX:u.clientX,clientY:u.clientY}))}};for(let[u,M]of Object.entries(Mh))s.domElement.addEventListener(u,M);let Sh=()=>{if(Et)return;let u=Math.max(1,i.clientWidth),M=Math.max(1,i.clientHeight);s.setSize(u,M,!1),a.aspect=u/M,a.updateProjectionMatrix(),Wt=""},Eh=()=>{Ft(),dt=!0},bh=()=>{dt=!1,lt=performance.now(),ct=st};h.addEventListener("start",Eh),h.addEventListener("end",bh);let wh=new ResizeObserver(Sh),Th=u=>{u.preventDefault(),e.onContextLost?.()};s.domElement.addEventListener("webglcontextlost",Th);let Fe=!1,Ji=!1,bn=null,bs=null,So=0,Ah=0,Rh=!0,Ci=new ro(16773074,55,35,Math.PI/7,.65,1.3);Ci.visible=!1,o.add(Ci),o.add(Ci.target);let Pi=new wn,Ch=[...b?.rooms||[],...t.levels.filter(u=>u.id!==b?.id).flatMap(u=>u.rooms.filter(M=>M.groundSurface||M.localSteps&&t.stairs.some(E=>E.localSteps&&E.floorId===u.id&&E.roomId===M.id&&Math.min(...E.stops.map(F=>F.z))<=N+.2&&Math.max(...E.stops.map(F=>F.z))>=N-.2)))],Ph={x:L-(j+50)/2,y:U-(j+50)/2,w:j+50,h:j+50};if(t.shapeAware&&window.KERN_SHAPES){let u=window.KERN_SHAPES,M=u.difference(u.multi(Ph),Ch.filter(E=>E.groundSurface||E.localSteps||!["courtyard","terrace"].includes(E.type)).map(E=>E.routeStair&&t.stairs.find(F=>F.roomId===E.id)?.footprintGeometry||u.multi(E)));for(let E of M){let F=new ri(E[0].map(K=>new mt(K[0],-K[1])));for(let K of E.slice(1))F.holes.push(new ki(K.map(q=>new mt(q[0],-q[1]))));let at=new bt(new eo(F),I("#535c62"));at.rotation.x=-Math.PI/2,at.position.y=N-.02,Pi.add(at)}}else for(let u of window.BuildingPreviewGeometry.subtractAll(Ph,Ch.filter(M=>M.groundSurface||M.localSteps||!["courtyard","terrace"].includes(M.type)))){let M=new bt(new Bn(u.w,u.h),I("#535c62"));M.rotation.x=-Math.PI/2,M.position.set(u.x+u.w/2,N-.02,u.y+u.h/2),Pi.add(M)}return Pi.visible=!1,o.add(Pi),n=Jd({scene:o,camera:a,renderer:s,controls:h,groups:g,data:t,enabled:()=>!Fe&&Pt==="select",canNavigate:()=>!Fe,surfaceHit:u=>(ne(u,{physicalOnly:!0}),gt),onSelect:(u,M,E)=>window.KERN_PRIMITIVE_UI?.select(u,M,E),onEdit:(u,M,E,F)=>window.KERN_PRIMITIVE_UI?.edit(u,M,E,F)}),r=Dh,wh.observe(i),Sh(),Ut(),e.viewState?zl(e.viewState):Ot(),s.setAnimationLoop(()=>{if(!Et){if(n?.sync(),Fe){Ih(),bn?.fly&&xt(),s.render(o,a);return}Kt()||h.update(),Ss(),xt(),s.render(o,a)}}),{primitivePlacement:(u,M,E)=>n?.placement(u,M,E),previewWall:(u,M)=>n?.previewWall(u,M),setPrimitiveMode:u=>n?.setMode(u),cancelPrimitive:()=>n?.cancel(),primitiveDragging:()=>n?.dragging(),cameraPose(){let u=a.getWorldDirection(new A);return{x:a.position.x,y:a.position.z,z:a.position.y,yaw:Math.atan2(-u.x,-u.z),pitch:Math.asin(Math.max(-1,Math.min(1,u.y))),fov:a.fov,roll:new Mn().setFromQuaternion(a.quaternion,"YXZ").z}},setAuthoringMode:Ae,cancelAuthoring:()=>ie(!0),cancelEdit:xn,getOrbitViewState(){return Fe&&bs?JSON.parse(JSON.stringify(bs)):Bl()},applyFloorState:Mo,selectRoom:Hn,selectRooms:ur,selectObjects:dr,selectFloors:fr,setEditableFloors:Xt,activateFloor:It,chooseFloor:Gt,frameSelection:Fl,setWalk:nf,fit:Ot,dispose:Dh,showAll:O,isolate:Ct,hoverFloor:kt,adjacentFloor:ft,getViewState:Bl,restoreViewState:zl,syncActiveFloor:Tt,zoomBy(u){if(!Number.isFinite(u)||u<=0)return;let M=a.position.clone().sub(h.target),E=ci.clamp(M.length()*u,h.minDistance,h.maxDistance);jt(h.target.clone().add(M.normalize().multiplyScalar(E)),h.target,!1)},setGrid(u){yt=!!u,nt.visible=yt},getFocusedFloor(){return V},setFloor(u,M){if(e.onFloorVisibility)return e.onFloorVisibility({id:u,visible:M});let E=g.get(u);if(E){if(Ft(),E.visible=!!M,V===u&&!M&&(V=z()[0]||null),!V&&M&&(V=u),!M&&qt?.floor===u){let F=qt.isFloor?Me:null;Hn(null,null),F&&(Me=F)}!M&&Me?.objects&&dr(Me.objects.filter(F=>F.floor!==u)),kt(null),Ut(),xt(!0),_t("visibility")}},setExplode(u){let M=Math.max(0,Math.min(12,Number(u)||0));if(M===Z)return;let E=Rt(Mt);Z=M,kt(null),Ut(),V?ce(V,!!D):(Ft(),vt+=Rt(Mt)-E),xt(!0)},setSlabs(u){te=!!u,Ut(),xt(!0)},setCeilings(u){Bt=!!u,Ut(),xt(!0)},setWalls(u){wt=!!u,Ut(),xt(!0)},setCutaway(u){se=!!u,Ut(),xt(!0)},setCutHeight(u){let M=Number(u);Number.isFinite(M)&&(pe=Math.max(.4,Math.min(2.4,M)),Ut(),xt(!0))},setLabels(u){re=!!u,Ut(),xt(!0)},setXray(u){st=!!u,Ut(),xt(!0)},png(){return xt(!0),s.render(o,a),new Promise((u,M)=>s.domElement.toBlob(E=>E?u(E):M(Error("Could not create this image.")),"image/png"))}}}catch(o){try{r()}catch{}throw o}}window.Building3D={mount:Mx,version:"180"};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
