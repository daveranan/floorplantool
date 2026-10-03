(()=>{var cn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hh=0,rc=1,kh=2;var oc=1,Vh=2,ti=3,fi=0,hn=1,Cn=2,mi=0,Gi=1,ac=2,lc=3,cc=4,Gh=5,Ai=100,Wh=101,Xh=102,Yh=103,qh=104,Zh=200,Kh=201,Jh=202,$h=203,Uo=204,Fo=205,jh=206,Qh=207,eu=208,tu=209,nu=210,iu=211,su=212,ru=213,ou=214,_a=0,xa=1,ya=2,Wi=3,va=4,Ma=5,Sa=6,Ea=7,hc=0,au=1,lu=2,gi=0,cu=1,hu=2,uu=3,du=4,fu=5,pu=6,mu=7;var uc=300,$i=301,ji=302,ba=303,wa=304,Jr=306,Oo=1e3,Ti=1001,Bo=1002,fn=1003,gu=1004;var $r=1005;var zn=1006,Ta=1007;var Li=1008;var Gn=1009,dc=1010,fc=1011,Ws=1012,Aa=1013,Ni=1014,Wn=1015,Xs=1016,Ra=1017,Ca=1018,Ys=1020,pc=35902,mc=35899,gc=1021,_c=1022,Pn=1023,Rs=1026,qs=1027,Pa=1028,Ia=1029,xc=1030,Da=1031;var La=1033,jr=33776,Qr=33777,eo=33778,to=33779,Na=35840,Ua=35841,Fa=35842,Oa=35843,Ba=36196,za=37492,Ha=37496,ka=37808,Va=37809,Ga=37810,Wa=37811,Xa=37812,Ya=37813,qa=37814,Za=37815,Ka=37816,Ja=37817,$a=37818,ja=37819,Qa=37820,el=37821,tl=36492,nl=36494,il=36495,sl=36283,rl=36284,ol=36285,al=36286;var gr=2300,zo=2301,No=2302,ql=2400,Zl=2401,Kl=2402;var _u=3200,xu=3201;var yc=0,yu=1,_i="",qt="srgb",Xi="srgb-linear",_r="linear",wt="srgb";var Vi=7680;var Jl=519,vu=512,Mu=513,Su=514,vc=515,Eu=516,bu=517,wu=518,Tu=519,Ho=35044;var Mc="300 es",Bn=2e3,xr=2001;var Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oh=1234567,dr=Math.PI/180,Yi=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Sc(i,e){return(i%e+e)%e}function yd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vd(i,e,t){return i!==e?(t-i)/(e-i):0}function fr(i,e,t){return(1-t)*i+t*e}function Md(i,e,t,n){return fr(i,e,1-Math.exp(-t*n))}function Sd(i,e=1){return e-Math.abs(Sc(i,e*2)-e)}function Ed(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Td(i,e){return i+Math.random()*(e-i)}function Ad(i){return i*(.5-Math.random())}function Rd(i){i!==void 0&&(oh=i);let e=oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cd(i){return i*dr}function Pd(i){return i*Yi}function Id(i){return(i&i-1)===0&&i!==0}function Dd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ld(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),m=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*f,c*m,a*l);break;case"YZY":i.set(c*m,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*m,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ni={DEG2RAD:dr,RAD2DEG:Yi,generateUUID:Zn,clamp:dt,euclideanModulo:Sc,mapLinear:yd,inverseLerp:vd,lerp:fr,damp:Md,pingpong:Sd,smoothstep:Ed,smootherstep:bd,randInt:wd,randFloat:Td,randFloatSpread:Ad,seededRandom:Rd,degToRad:Cd,radToDeg:Pd,isPowerOfTwo:Id,ceilPowerOfTwo:Dd,floorPowerOfTwo:Ld,setQuaternionFromProperEuler:Nd,normalize:bt,denormalize:On},me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},An=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],m=r[o+0],d=r[o+1],_=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=m,e[t+1]=d,e[t+2]=_,e[t+3]=y;return}if(f!==y||c!==m||l!==d||u!==_){let g=1-a,p=c*m+l*d+u*_+f*y,R=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){let P=Math.sqrt(T),I=Math.atan2(P,p*R);g=Math.sin(g*I)/P,a=Math.sin(a*I)/P}let v=a*R;if(c=c*g+m*v,l=l*g+d*v,u=u*g+_*v,f=f*g+y*v,g===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=P,l*=P,u*=P,f*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],m=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*f+c*d-l*m,e[t+1]=c*_+u*m+l*f-a*d,e[t+2]=l*_+u*d+a*m-c*f,e[t+3]=u*_-a*f-c*m-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),m=c(n/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=m*u*f+l*d*_,this._y=l*d*f-m*u*_,this._z=l*u*_+m*d*f,this._w=l*u*f-m*d*_;break;case"YXZ":this._x=m*u*f+l*d*_,this._y=l*d*f-m*u*_,this._z=l*u*_-m*d*f,this._w=l*u*f+m*d*_;break;case"ZXY":this._x=m*u*f-l*d*_,this._y=l*d*f+m*u*_,this._z=l*u*_+m*d*f,this._w=l*u*f-m*d*_;break;case"ZYX":this._x=m*u*f-l*d*_,this._y=l*d*f+m*u*_,this._z=l*u*_-m*d*f,this._w=l*u*f+m*d*_;break;case"YZX":this._x=m*u*f+l*d*_,this._y=l*d*f+m*u*_,this._z=l*u*_-m*d*f,this._w=l*u*f-m*d*_;break;case"XZY":this._x=m*u*f-l*d*_,this._y=l*d*f-m*u*_,this._z=l*u*_+m*d*f,this._w=l*u*f+m*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],m=n+a+f;if(m>0){let d=.5/Math.sqrt(m+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,m=Math.sin(t*u)/l;return this._w=o*f+this._w*m,this._x=n*f+this._x*m,this._y=s*f+this._y*m,this._z=r*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ah.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vl=new C,ah=new An,ht=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],m=n[2],d=n[5],_=n[8],y=s[0],g=s[3],p=s[6],R=s[1],T=s[4],v=s[7],P=s[2],I=s[5],N=s[8];return r[0]=o*y+a*R+c*P,r[3]=o*g+a*T+c*I,r[6]=o*p+a*v+c*N,r[1]=l*y+u*R+f*P,r[4]=l*g+u*T+f*I,r[7]=l*p+u*v+f*N,r[2]=m*y+d*R+_*P,r[5]=m*g+d*T+_*I,r[8]=m*p+d*v+_*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,m=a*c-u*r,d=l*r-o*c,_=t*f+n*m+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=f*y,e[1]=(s*l-u*n)*y,e[2]=(a*n-s*o)*y,e[3]=m*y,e[4]=(u*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=d*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ml=new ht;function Ec(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Au(){let i=yr("canvas");return i.style.display="block",i}var lh={};function Cs(i){i in lh||(lh[i]=!0,console.warn(i))}function Ru(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ch=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ud(){let i={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===wt&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?_r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xi]:{primaries:e,whitePoint:n,transfer:_r,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var xt=Ud();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hs,ko=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=yr("canvas")),hs.width=e.width,hs.height=e.height;let s=hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fd=0,Ps=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Sl(s[o].image)):r.push(Sl(s[o]))}else r=Sl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Sl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Od=0,El=new C,ln=class i extends Kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ti,s=Ti,r=zn,o=Li,a=Pn,c=Gn,l=i.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Zn(),this.name="",this.source=new Ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oo:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oo:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=uc;ln.DEFAULT_ANISOTROPY=1;var Bt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],f=c[8],m=c[1],d=c[5],_=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(u-m)<.01&&Math.abs(f-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+m)<.1&&Math.abs(f+y)<.1&&Math.abs(_+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,v=(d+1)/2,P=(p+1)/2,I=(u+m)/4,N=(f+y)/4,O=(_+g)/4;return T>v&&T>P?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=I/n,r=N/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=I/s,r=O/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=N/r,s=O/r),this.set(n,s,r,t),this}let R=Math.sqrt((g-_)*(g-_)+(f-y)*(f-y)+(m-u)*(m-u));return Math.abs(R)<.001&&(R=1),this.x=(g-_)/R,this.y=(f-y)/R,this.z=(m-u)/R,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vo=class extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new ln(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ps(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Vo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vr=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Go=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),ao.subVectors(this.max,tr),us.subVectors(e.a,tr),ds.subVectors(e.b,tr),fs.subVectors(e.c,tr),vi.subVectors(ds,us),Mi.subVectors(fs,ds),Bi.subVectors(us,fs);let t=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-Bi.z,Bi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,Bi.z,0,-Bi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-Bi.y,Bi.x,0];return!bl(t,us,ds,fs,ao)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,us,ds,fs,ao))?!1:(lo.crossVectors(vi,Mi),t=[lo.x,lo.y,lo.z],bl(t,us,ds,fs,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},oi=[new C,new C,new C,new C,new C,new C,new C,new C],Nn=new C,oo=new pn,us=new C,ds=new C,fs=new C,vi=new C,Mi=new C,Bi=new C,tr=new C,ao=new C,lo=new C,zi=new C;function bl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);let a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=e.dot(zi),l=t.dot(zi),u=n.dot(zi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Bd=new pn,nr=new C,wl=new C,pi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Bd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);let t=nr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(wl)),this.expandByPoint(nr.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ai=new C,Tl=new C,co=new C,Si=new C,Al=new C,ho=new C,Rl=new C,Ri=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Tl.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Tl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(co),a=Si.dot(this.direction),c=-Si.dot(co),l=Si.lengthSq(),u=Math.abs(1-o*o),f,m,d,_;if(u>0)if(f=o*c-a,m=o*a-c,_=r*u,f>=0)if(m>=-_)if(m<=_){let y=1/u;f*=y,m*=y,d=f*(f+o*m+2*a)+m*(o*f+m+2*c)+l}else m=r,f=Math.max(0,-(o*m+a)),d=-f*f+m*(m+2*c)+l;else m=-r,f=Math.max(0,-(o*m+a)),d=-f*f+m*(m+2*c)+l;else m<=-_?(f=Math.max(0,-(-o*r+a)),m=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+m*(m+2*c)+l):m<=_?(f=0,m=Math.min(Math.max(-r,-c),r),d=m*(m+2*c)+l):(f=Math.max(0,-(o*r+a)),m=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+m*(m+2*c)+l);else m=o>0?-r:r,f=Math.max(0,-(o*m+a)),d=-f*f+m*(m+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Tl).addScaledVector(co,m),d}intersectSphere(e,t){ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,m=this.origin;return l>=0?(n=(e.min.x-m.x)*l,s=(e.max.x-m.x)*l):(n=(e.max.x-m.x)*l,s=(e.min.x-m.x)*l),u>=0?(r=(e.min.y-m.y)*u,o=(e.max.y-m.y)*u):(r=(e.max.y-m.y)*u,o=(e.min.y-m.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-m.z)*f,c=(e.max.z-m.z)*f):(a=(e.max.z-m.z)*f,c=(e.min.z-m.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){Al.subVectors(t,e),ho.subVectors(n,e),Rl.crossVectors(Al,ho);let o=this.direction.dot(Rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);let c=a*this.direction.dot(ho.crossVectors(Si,ho));if(c<0)return null;let l=a*this.direction.dot(Al.cross(Si));if(l<0||c+l>o)return null;let u=-a*Si.dot(Rl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class i{constructor(e,t,n,s,r,o,a,c,l,u,f,m,d,_,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,f,m,d,_,y,g)}set(e,t,n,s,r,o,a,c,l,u,f,m,d,_,y,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=m,p[3]=d,p[7]=_,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let m=o*u,d=o*f,_=a*u,y=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+_*l,t[5]=m-y*l,t[9]=-a*c,t[2]=y-m*l,t[6]=_+d*l,t[10]=o*c}else if(e.order==="YXZ"){let m=c*u,d=c*f,_=l*u,y=l*f;t[0]=m+y*a,t[4]=_*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=y+m*a,t[10]=o*c}else if(e.order==="ZXY"){let m=c*u,d=c*f,_=l*u,y=l*f;t[0]=m-y*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=y-m*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let m=o*u,d=o*f,_=a*u,y=a*f;t[0]=c*u,t[4]=_*l-d,t[8]=m*l+y,t[1]=c*f,t[5]=y*l+m,t[9]=d*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let m=o*c,d=o*l,_=a*c,y=a*l;t[0]=c*u,t[4]=y-m*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*f+_,t[10]=m-y*f}else if(e.order==="XZY"){let m=o*c,d=o*l,_=a*c,y=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=m*f+y,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=y*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,Hd)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ei.crossVectors(n,xn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ei.crossVectors(n,xn)),Ei.normalize(),uo.crossVectors(xn,Ei),s[0]=Ei.x,s[4]=uo.x,s[8]=xn.x,s[1]=Ei.y,s[5]=uo.y,s[9]=xn.y,s[2]=Ei.z,s[6]=uo.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],m=n[9],d=n[13],_=n[2],y=n[6],g=n[10],p=n[14],R=n[3],T=n[7],v=n[11],P=n[15],I=s[0],N=s[4],O=s[8],w=s[12],S=s[1],L=s[5],V=s[9],ee=s[13],te=s[2],q=s[6],J=s[10],_e=s[14],$=s[3],Ae=s[7],De=s[11],Ne=s[15];return r[0]=o*I+a*S+c*te+l*$,r[4]=o*N+a*L+c*q+l*Ae,r[8]=o*O+a*V+c*J+l*De,r[12]=o*w+a*ee+c*_e+l*Ne,r[1]=u*I+f*S+m*te+d*$,r[5]=u*N+f*L+m*q+d*Ae,r[9]=u*O+f*V+m*J+d*De,r[13]=u*w+f*ee+m*_e+d*Ne,r[2]=_*I+y*S+g*te+p*$,r[6]=_*N+y*L+g*q+p*Ae,r[10]=_*O+y*V+g*J+p*De,r[14]=_*w+y*ee+g*_e+p*Ne,r[3]=R*I+T*S+v*te+P*$,r[7]=R*N+T*L+v*q+P*Ae,r[11]=R*O+T*V+v*J+P*De,r[15]=R*w+T*ee+v*_e+P*Ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],m=e[10],d=e[14],_=e[3],y=e[7],g=e[11],p=e[15];return _*(+r*c*f-s*l*f-r*a*m+n*l*m+s*a*d-n*c*d)+y*(+t*c*d-t*l*m+r*o*m-s*o*d+s*l*u-r*c*u)+g*(+t*l*f-t*a*d-r*o*f+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-t*c*f+t*a*m+s*o*f-n*o*m+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],m=e[10],d=e[11],_=e[12],y=e[13],g=e[14],p=e[15],R=f*g*l-y*m*l+y*c*d-a*g*d-f*c*p+a*m*p,T=_*m*l-u*g*l-_*c*d+o*g*d+u*c*p-o*m*p,v=u*y*l-_*f*l+_*a*d-o*y*d-u*a*p+o*f*p,P=_*f*c-u*y*c-_*a*m+o*y*m+u*a*g-o*f*g,I=t*R+n*T+s*v+r*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/I;return e[0]=R*N,e[1]=(y*m*r-f*g*r-y*s*d+n*g*d+f*s*p-n*m*p)*N,e[2]=(a*g*r-y*c*r+y*s*l-n*g*l-a*s*p+n*c*p)*N,e[3]=(f*c*r-a*m*r-f*s*l+n*m*l+a*s*d-n*c*d)*N,e[4]=T*N,e[5]=(u*g*r-_*m*r+_*s*d-t*g*d-u*s*p+t*m*p)*N,e[6]=(_*c*r-o*g*r-_*s*l+t*g*l+o*s*p-t*c*p)*N,e[7]=(o*m*r-u*c*r+u*s*l-t*m*l-o*s*d+t*c*d)*N,e[8]=v*N,e[9]=(_*f*r-u*y*r-_*n*d+t*y*d+u*n*p-t*f*p)*N,e[10]=(o*y*r-_*a*r+_*n*l-t*y*l-o*n*p+t*a*p)*N,e[11]=(u*a*r-o*f*r-u*n*l+t*f*l+o*n*d-t*a*d)*N,e[12]=P*N,e[13]=(u*y*s-_*f*s+_*n*m-t*y*m-u*n*g+t*f*g)*N,e[14]=(_*a*s-o*y*s-_*n*c+t*y*c+o*n*g-t*a*g)*N,e[15]=(o*f*s-u*a*s+u*n*c-t*f*c-o*n*m+t*a*m)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,f=a+a,m=r*l,d=r*u,_=r*f,y=o*u,g=o*f,p=a*f,R=c*l,T=c*u,v=c*f,P=n.x,I=n.y,N=n.z;return s[0]=(1-(y+p))*P,s[1]=(d+v)*P,s[2]=(_-T)*P,s[3]=0,s[4]=(d-v)*I,s[5]=(1-(m+p))*I,s[6]=(g+R)*I,s[7]=0,s[8]=(_+T)*N,s[9]=(g-R)*N,s[10]=(1-(m+y))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ps.set(s[0],s[1],s[2]).length(),o=ps.set(s[4],s[5],s[6]).length(),a=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let l=1/r,u=1/o,f=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,t.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Bn,c=!1){let l=this.elements,u=2*r/(t-e),f=2*r/(n-s),m=(t+e)/(t-e),d=(n+s)/(n-s),_,y;if(c)_=r/(o-r),y=o*r/(o-r);else if(a===Bn)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===xr)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Bn,c=!1){let l=this.elements,u=2/(t-e),f=2/(n-s),m=-(t+e)/(t-e),d=-(n+s)/(n-s),_,y;if(c)_=1/(o-r),y=o/(o-r);else if(a===Bn)_=-2/(o-r),y=-(o+r)/(o-r);else if(a===xr)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ps=new C,Un=new Ct,zd=new C(0,0,0),Hd=new C(1,1,1),Ei=new C,uo=new C,xn=new C,uh=new Ct,dh=new An,vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],m=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dh.setFromEuler(this),this.setFromQuaternion(dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kd=0,fh=new C,ms=new An,li=new Ct,fo=new C,ir=new C,Vd=new C,Gd=new An,ph=new C(1,0,0),mh=new C(0,1,0),gh=new C(0,0,1),_h={type:"added"},Wd={type:"removed"},gs={type:"childadded",child:null},Cl={type:"childremoved",child:null},zt=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new vn,n=new An,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new ht}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(ph,e)}rotateY(e){return this.rotateOnAxis(mh,e)}rotateZ(e){return this.rotateOnAxis(gh,e)}translateOnAxis(e,t){return fh.copy(e).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ph,e)}translateY(e){return this.translateOnAxis(mh,e)}translateZ(e){return this.translateOnAxis(gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fo.copy(e):fo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(ir,fo,this.up):li.lookAt(fo,ir,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(li),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_h),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wd),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_h),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),m=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};zt.DEFAULT_UP=new C(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new C,ci=new C,Pl=new C,hi=new C,_s=new C,xs=new C,xh=new C,Il=new C,Dl=new C,Ll=new C,Nl=new Bt,Ul=new Bt,Fl=new Bt,ui=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),ci.subVectors(n,t),Pl.subVectors(e,t);let o=Fn.dot(Fn),a=Fn.dot(ci),c=Fn.dot(Pl),l=ci.dot(ci),u=ci.dot(Pl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let m=1/f,d=(l*c-a*u)*m,_=(o*u-a*c)*m;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Nl.setScalar(0),Ul.setScalar(0),Fl.setScalar(0),Nl.fromBufferAttribute(e,t),Ul.fromBufferAttribute(e,n),Fl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Nl,r.x),o.addScaledVector(Ul,r.y),o.addScaledVector(Fl,r.z),o}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),ci.subVectors(e,t),Fn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Fn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;_s.subVectors(s,n),xs.subVectors(r,n),Il.subVectors(e,n);let c=_s.dot(Il),l=xs.dot(Il);if(c<=0&&l<=0)return t.copy(n);Dl.subVectors(e,s);let u=_s.dot(Dl),f=xs.dot(Dl);if(u>=0&&f<=u)return t.copy(s);let m=c*f-u*l;if(m<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(_s,o);Ll.subVectors(e,r);let d=_s.dot(Ll),_=xs.dot(Ll);if(_>=0&&d<=_)return t.copy(r);let y=d*l-c*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(xs,a);let g=u*_-d*f;if(g<=0&&f-u>=0&&d-_>=0)return xh.subVectors(r,s),a=(f-u)/(f-u+(d-_)),t.copy(s).addScaledVector(xh,a);let p=1/(g+y+m);return o=y*p,a=m*p,t.copy(n).addScaledVector(_s,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},po={h:0,s:0,l:0};function Ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var mt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=Sc(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ol(o,r,e+1/3),this.g=Ol(o,r,e),this.b=Ol(o,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=Cu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return xt.workingToColorSpace(en.copy(this),e),Math.round(dt(en.r*255,0,255))*65536+Math.round(dt(en.g*255,0,255))*256+Math.round(dt(en.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(en.copy(this),t);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=qt){xt.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,s=en.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(po);let n=fr(bi.h,po.h,t),s=fr(bi.s,po.s,t),r=fr(bi.l,po.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new mt;mt.NAMES=Cu;var Xd=0,$n=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Gi,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=Fo,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uo&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Hn=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new C,mo=new me,Yd=0,nn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ho,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ho&&(e.usage=this.usage),e}};var Mr=class extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Sr=class extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}},qd=0,wn=new Ct,Bl=new zt,ys=new C,yn=new pn,sr=new pn,Yt=new C,At=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ec(e)?Sr:Mr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(yn.min,sr.min),yn.expandByPoint(Yt),Yt.addVectors(yn.max,sr.max),yn.expandByPoint(Yt)):(yn.expandByPoint(sr.min),yn.expandByPoint(sr.max))}yn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Yt.fromBufferAttribute(a,l),c&&(ys.fromBufferAttribute(e,l),Yt.add(ys)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<n.count;O++)a[O]=new C,c[O]=new C;let l=new C,u=new C,f=new C,m=new me,d=new me,_=new me,y=new C,g=new C;function p(O,w,S){l.fromBufferAttribute(n,O),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,S),m.fromBufferAttribute(r,O),d.fromBufferAttribute(r,w),_.fromBufferAttribute(r,S),u.sub(l),f.sub(l),d.sub(m),_.sub(m);let L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(L),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(L),a[O].add(y),a[w].add(y),a[S].add(y),c[O].add(g),c[w].add(g),c[S].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let O=0,w=R.length;O<w;++O){let S=R[O],L=S.start,V=S.count;for(let ee=L,te=L+V;ee<te;ee+=3)p(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}let T=new C,v=new C,P=new C,I=new C;function N(O){P.fromBufferAttribute(s,O),I.copy(P);let w=a[O];T.copy(w),T.sub(P.multiplyScalar(P.dot(w))).normalize(),v.crossVectors(I,w);let L=v.dot(c[O])<0?-1:1;o.setXYZW(O,T.x,T.y,T.z,L)}for(let O=0,w=R.length;O<w;++O){let S=R[O],L=S.start,V=S.count;for(let ee=L,te=L+V;ee<te;ee+=3)N(e.getX(ee+0)),N(e.getX(ee+1)),N(e.getX(ee+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,d=n.count;m<d;m++)n.setXYZ(m,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,u=new C,f=new C;if(e)for(let m=0,d=e.count;m<d;m+=3){let _=e.getX(m+0),y=e.getX(m+1),g=e.getX(m+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let m=0,d=t.count;m<d;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,f=a.normalized,m=new l.constructor(c.length*u),d=0,_=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let p=0;p<u;p++)m[_++]=l[d++]}return new nn(m,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let m=l[u],d=e(m,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,m=l.length;f<m;f++){let d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],f=r[l];for(let m=0,d=f.length;m<d;m++)u.push(f[m].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yh=new Ct,Hi=new Ri,go=new pi,vh=new C,_o=new C,xo=new C,yo=new C,zl=new C,vo=new C,Mh=new C,Mo=new C,Mt=class extends zt{constructor(e=new At,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(zl.fromBufferAttribute(f,e),o?vo.addScaledVector(zl,u):vo.addScaledVector(zl.sub(t),u))}t.add(vo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(go.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(go,vh)===null||Hi.origin.distanceToSquared(vh)>(e.far-e.near)**2))&&(yh.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,m=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=m.length;_<y;_++){let g=m[_],p=o[g.materialIndex],R=Math.max(g.start,d.start),T=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=R,P=T;v<P;v+=3){let I=a.getX(v),N=a.getX(v+1),O=a.getX(v+2);s=So(this,p,e,n,l,u,f,I,N,O),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let g=_,p=y;g<p;g+=3){let R=a.getX(g),T=a.getX(g+1),v=a.getX(g+2);s=So(this,o,e,n,l,u,f,R,T,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,y=m.length;_<y;_++){let g=m[_],p=o[g.materialIndex],R=Math.max(g.start,d.start),T=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=R,P=T;v<P;v+=3){let I=v,N=v+1,O=v+2;s=So(this,p,e,n,l,u,f,I,N,O),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let g=_,p=y;g<p;g+=3){let R=g,T=g+1,v=g+2;s=So(this,o,e,n,l,u,f,R,T,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Zd(i,e,t,n,s,r,o,a){let c;if(e.side===hn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===fi,a),c===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Mo);return l<t.near||l>t.far?null:{distance:l,point:Mo.clone(),object:i}}function So(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,_o),i.getVertexPosition(c,xo),i.getVertexPosition(l,yo);let u=Zd(i,e,t,n,_o,xo,yo,Mh);if(u){let f=new C;ui.getBarycoord(Mh,_o,xo,yo,f),s&&(u.uv=ui.getInterpolatedAttribute(s,a,c,l,f,new me)),r&&(u.uv1=ui.getInterpolatedAttribute(r,a,c,l,f,new me)),o&&(u.normal=ui.getInterpolatedAttribute(o,a,c,l,f,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let m={a,b:c,c:l,normal:new C,materialIndex:0};ui.getNormal(_o,xo,yo,m.normal),u.face=m,u.barycoord=f}return u}var Rn=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],m=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(f,2));function _(y,g,p,R,T,v,P,I,N,O,w){let S=v/N,L=P/O,V=v/2,ee=P/2,te=I/2,q=N+1,J=O+1,_e=0,$=0,Ae=new C;for(let De=0;De<J;De++){let Ne=De*L-ee;for(let Qe=0;Qe<q;Qe++){let st=Qe*S-V;Ae[y]=st*R,Ae[g]=Ne*T,Ae[p]=te,l.push(Ae.x,Ae.y,Ae.z),Ae[y]=0,Ae[g]=0,Ae[p]=I>0?1:-1,u.push(Ae.x,Ae.y,Ae.z),f.push(Qe/N),f.push(1-De/O),_e+=1}}for(let De=0;De<O;De++)for(let Ne=0;Ne<N;Ne++){let Qe=m+Ne+q*De,st=m+Ne+q*(De+1),rt=m+(Ne+1)+q*(De+1),pt=m+(Ne+1)+q*De;c.push(Qe,st,pt),c.push(st,rt,pt),$+=6}a.addGroup(d,$,w),d+=$,m+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=Qi(i[t]);for(let s in n)e[s]=n[s]}return e}function Kd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var Pu={clone:Qi,merge:sn},Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=Kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Er=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new C,Sh=new me,Eh=new me,Jt=class extends Er{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Sh,Eh),t.subVectors(Eh,Sh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(dr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vs=-90,Ms=1,Wo=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(vs,Ms,e,t);s.layers=this.layers,this.add(s);let r=new Jt(vs,Ms,e,t);r.layers=this.layers,this.add(r);let o=new Jt(vs,Ms,e,t);o.layers=this.layers,this.add(o);let a=new Jt(vs,Ms,e,t);a.layers=this.layers,this.add(a);let c=new Jt(vs,Ms,e,t);c.layers=this.layers,this.add(c);let l=new Jt(vs,Ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,m,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},br=class extends ln{constructor(e=[],t=$i,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xo=class extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new br(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rn(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:mi});r.uniforms.tEquirect.value=t;let o=new Mt(s,r),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=zn),new Wo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Tn=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jd={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],m=u.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&m>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var wr=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Yo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ho,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new C,Tr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ls=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ss,rr=new C,Es=new C,bs=new C,ws=new me,or=new me,Iu=new Ct,Eo=new C,ar=new C,bo=new C,bh=new me,Hl=new me,wh=new me,Ar=class extends zt{constructor(e=new Ls){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yo(t,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Tr(n,3,0,!1)),Ss.setAttribute("uv",new Tr(n,2,3,!1))}this.geometry=Ss,this.material=e,this.center=new me(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Iu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;wo(Eo.set(-.5,-.5,0),bs,o,Es,s,r),wo(ar.set(.5,-.5,0),bs,o,Es,s,r),wo(bo.set(.5,.5,0),bs,o,Es,s,r),bh.set(0,0),Hl.set(1,0),wh.set(1,1);let a=e.ray.intersectTriangle(Eo,ar,bo,!1,rr);if(a===null&&(wo(ar.set(-.5,.5,0),bs,o,Es,s,r),Hl.set(0,1),a=e.ray.intersectTriangle(Eo,bo,ar,!1,rr),a===null))return;let c=e.ray.origin.distanceTo(rr);c<e.near||c>e.far||t.push({distance:c,point:rr.clone(),uv:ui.getInterpolation(rr,Eo,ar,bo,bh,Hl,wh,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function wo(i,e,t,n,s,r){ws.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(or.x=r*ws.x-s*ws.y,or.y=s*ws.x+r*ws.y):or.copy(ws),i.copy(e),i.x+=or.x,i.y+=or.y,i.applyMatrix4(Iu)}var qo=class extends ln{constructor(e=null,t=1,n=1,s,r,o,a,c,l=fn,u=fn,f,m){super(null,o,a,c,l,u,s,r,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ts=new Ct,Th=new Ct,To=[],Ah=new pn,Qd=new Ct,lr=new Mt,cr=new pi,Ns=class extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),Ah.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Ah)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),cr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),Th.multiplyMatrices(n,Ts),lr.matrixWorld=Th,lr.raycast(e,To);for(let o=0,a=To.length;o<a;o++){let c=To[o];c.instanceId=r,c.object=this,t.push(c)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qo(new Float32Array(s*this.count),s,this.count,Pa,Wn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},kl=new C,ef=new C,tf=new ht,tn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=kl.subVectors(n,t).cross(ef.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(kl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tf.getNormalMatrix(e),s=this.coplanarPoint(kl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new pi,nf=new me(.5,.5),Ao=new C,Us=class{constructor(e=new tn,t=new tn,n=new tn,s=new tn,r=new tn,o=new tn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],m=r[6],d=r[7],_=r[8],y=r[9],g=r[10],p=r[11],R=r[12],T=r[13],v=r[14],P=r[15];if(s[0].setComponents(l-o,d-u,p-_,P-R).normalize(),s[1].setComponents(l+o,d+u,p+_,P+R).normalize(),s[2].setComponents(l+a,d+f,p+y,P+T).normalize(),s[3].setComponents(l-a,d-f,p-y,P-T).normalize(),n)s[4].setComponents(c,m,g,v).normalize(),s[5].setComponents(l-c,d-m,p-g,P-v).normalize();else if(s[4].setComponents(l-c,d-m,p-g,P-v).normalize(),t===Bn)s[5].setComponents(l+c,d+m,p+g,P+v).normalize();else if(t===xr)s[5].setComponents(c,m,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);let t=nf.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ao.x=s.normal.x>0?e.max.x:e.min.x,Ao.y=s.normal.y>0?e.max.y:e.min.y,Ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var jn=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zo=new C,Ko=new C,Rh=new Ct,hr=new Ri,Ro=new pi,Vl=new C,Ch=new C,Mn=class extends zt{constructor(e=new At,t=new jn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Zo.fromBufferAttribute(t,s-1),Ko.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Zo.distanceTo(Ko);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;Rh.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Rh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,m=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let y=d,g=_-1;y<g;y+=l){let p=u.getX(y),R=u.getX(y+1),T=Co(this,e,hr,c,p,R,y);T&&t.push(T)}if(this.isLineLoop){let y=u.getX(_-1),g=u.getX(d),p=Co(this,e,hr,c,y,g,_-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let y=d,g=_-1;y<g;y+=l){let p=Co(this,e,hr,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=Co(this,e,hr,c,_-1,d,_-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Co(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Zo.fromBufferAttribute(a,s),Ko.fromBufferAttribute(a,r),t.distanceSqToSegment(Zo,Ko,Vl,Ch)>n)return;Vl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Vl);if(!(l<e.near||l>e.far))return{distance:l,point:Ch.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Ph=new C,Ih=new C,Cr=class extends Mn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ph.fromBufferAttribute(t,s),Ih.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ph.distanceTo(Ih);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ci=class extends Mn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var qi=class extends ln{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pr=class extends ln{constructor(e,t,n=Ni,s,r,o,a=fn,c=fn,l,u=Rs,f=1){if(u!==Rs&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:f};super(m,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ps(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ir=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Jo=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],m=[],d=[],_=0,y=[],g=n/2,p=0;R(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Tt(f,3)),this.setAttribute("normal",new Tt(m,3)),this.setAttribute("uv",new Tt(d,2));function R(){let v=new C,P=new C,I=0,N=(t-e)/n;for(let O=0;O<=r;O++){let w=[],S=O/r,L=S*(t-e)+e;for(let V=0;V<=s;V++){let ee=V/s,te=ee*c+a,q=Math.sin(te),J=Math.cos(te);P.x=L*q,P.y=-S*n+g,P.z=L*J,f.push(P.x,P.y,P.z),v.set(q,N,J).normalize(),m.push(v.x,v.y,v.z),d.push(ee,1-S),w.push(_++)}y.push(w)}for(let O=0;O<s;O++)for(let w=0;w<r;w++){let S=y[w][O],L=y[w+1][O],V=y[w+1][O+1],ee=y[w][O+1];(e>0||w!==0)&&(u.push(S,L,ee),I+=3),(t>0||w!==r-1)&&(u.push(L,V,ee),I+=3)}l.addGroup(p,I,0),p+=I}function T(v){let P=_,I=new me,N=new C,O=0,w=v===!0?e:t,S=v===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,g*S,0),m.push(0,S,0),d.push(.5,.5),_++;let L=_;for(let V=0;V<=s;V++){let te=V/s*c+a,q=Math.cos(te),J=Math.sin(te);N.x=w*J,N.y=g*S,N.z=w*q,f.push(N.x,N.y,N.z),m.push(0,S,0),I.x=q*.5+.5,I.y=J*.5*S+.5,d.push(I.x,I.y),_++}for(let V=0;V<s;V++){let ee=P+V,te=L+V;v===!0?u.push(te,te+1,ee):u.push(te+1,te,ee),O+=3}l.addGroup(p,O,v===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fs=class i extends Jo{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$o=class i extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(R){let T=new C,v=new C,P=new C;for(let I=0;I<t.length;I+=3)d(t[I+0],T),d(t[I+1],v),d(t[I+2],P),c(T,v,P,R)}function c(R,T,v,P){let I=P+1,N=[];for(let O=0;O<=I;O++){N[O]=[];let w=R.clone().lerp(v,O/I),S=T.clone().lerp(v,O/I),L=I-O;for(let V=0;V<=L;V++)V===0&&O===I?N[O][V]=w:N[O][V]=w.clone().lerp(S,V/L)}for(let O=0;O<I;O++)for(let w=0;w<2*(I-O)-1;w++){let S=Math.floor(w/2);w%2===0?(m(N[O][S+1]),m(N[O+1][S]),m(N[O][S])):(m(N[O][S+1]),m(N[O+1][S+1]),m(N[O+1][S]))}}function l(R){let T=new C;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(R),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function u(){let R=new C;for(let T=0;T<r.length;T+=3){R.x=r[T+0],R.y=r[T+1],R.z=r[T+2];let v=g(R)/2/Math.PI+.5,P=p(R)/Math.PI+.5;o.push(v,1-P)}_(),f()}function f(){for(let R=0;R<o.length;R+=6){let T=o[R+0],v=o[R+2],P=o[R+4],I=Math.max(T,v,P),N=Math.min(T,v,P);I>.9&&N<.1&&(T<.2&&(o[R+0]+=1),v<.2&&(o[R+2]+=1),P<.2&&(o[R+4]+=1))}}function m(R){r.push(R.x,R.y,R.z)}function d(R,T){let v=R*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function _(){let R=new C,T=new C,v=new C,P=new C,I=new me,N=new me,O=new me;for(let w=0,S=0;w<r.length;w+=9,S+=6){R.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),I.set(o[S+0],o[S+1]),N.set(o[S+2],o[S+3]),O.set(o[S+4],o[S+5]),P.copy(R).add(T).add(v).divideScalar(3);let L=g(P);y(I,S+0,R,L),y(N,S+2,T,L),y(O,S+4,v,L)}}function y(R,T,v,P){P<0&&R.x===1&&(o[T]=R.x-1),v.x===0&&v.z===0&&(o[T]=P/2/Math.PI+.5)}function g(R){return Math.atan2(R.z,-R.x)}function p(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],m=n[s+1]-u,d=(o-u)/m;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new me:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],o=[],a=new C,c=new Ct;for(let d=0;d<=e;d++){let _=d/e;s[d]=this.getTangentAt(_,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),m=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),m<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(dt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(dt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Os=class extends Sn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),m=c-this.aX,d=l-this.aY;c=m*u-d*f+this.aX,l=m*f+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jo=class extends Os{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let m=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;m*=u,d*=u,s(o,a,m,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Po=new C,Gl=new wc,Wl=new wc,Xl=new wc,Qo=class extends Sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Po.subVectors(s[0],s[1]).add(s[0]),l=Po);let f=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Po.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Po),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(m),d),g=Math.pow(m.distanceToSquared(u),d);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),Gl.initNonuniformCatmullRom(l.x,f.x,m.x,u.x,_,y,g),Wl.initNonuniformCatmullRom(l.y,f.y,m.y,u.y,_,y,g),Xl.initNonuniformCatmullRom(l.z,f.z,m.z,u.z,_,y,g)}else this.curveType==="catmullrom"&&(Gl.initCatmullRom(l.x,f.x,m.x,u.x,this.tension),Wl.initCatmullRom(l.y,f.y,m.y,u.y,this.tension),Xl.initCatmullRom(l.z,f.z,m.z,u.z,this.tension));return n.set(Gl.calc(c),Wl.calc(c),Xl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dh(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function sf(i,e){let t=1-i;return t*t*e}function rf(i,e){return 2*(1-i)*i*e}function of(i,e){return i*i*e}function pr(i,e,t,n){return sf(i,e)+rf(i,t)+of(i,n)}function af(i,e){let t=1-i;return t*t*t*e}function lf(i,e){let t=1-i;return 3*t*t*i*e}function cf(i,e){return 3*(1-i)*i*i*e}function hf(i,e){return i*i*i*e}function mr(i,e,t,n,s){return af(i,e)+lf(i,t)+cf(i,n)+hf(i,s)}var Dr=class extends Sn{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(e,s.x,r.x,o.x,a.x),mr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ea=class extends Sn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(e,s.x,r.x,o.x,a.x),mr(e,s.y,r.y,o.y,a.y),mr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lr=class extends Sn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends Sn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nr=class extends Sn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(e,s.x,r.x,o.x),pr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends Sn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(e,s.x,r.x,o.x),pr(e,s.y,r.y,o.y),pr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ur=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Dh(a,c.x,l.x,u.x,f.x),Dh(a,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},$l=Object.freeze({__proto__:null,ArcCurve:jo,CatmullRomCurve3:Qo,CubicBezierCurve:Dr,CubicBezierCurve3:ea,EllipseCurve:Os,LineCurve:Lr,LineCurve3:ta,QuadraticBezierCurve:Nr,QuadraticBezierCurve3:na,SplineCurve:Ur}),ia=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $l[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new $l[s.type]().fromJSON(s))}return this}},Pi=class extends ia{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Lr(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Nr(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Dr(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ur(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Os(e,t,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Qn=class extends Pi{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Pi().fromJSON(s))}return this}};function uf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Du(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=gf(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let u=-1/0,f=-1/0;for(let m=t;m<s;m+=t){let d=i[m],_=i[m+1];d<a&&(a=d),_<c&&(c=_),d>u&&(u=d),_>f&&(f=_)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Fr(r,o,t,a,c,l,0),o}function Du(i,e,t,n,s){let r;if(s===Af(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Lh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Lh(o/n|0,i[o],i[o+1],r);return r&&Bs(r,r.next)&&(Br(r),r=r.next),r}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Bs(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Br(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Mf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?ff(i,n,s,r):df(i)){e.push(c.i,i.i,l.i),Br(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=pf(Zi(i),e),Fr(i,e,t,n,s,r,2)):o===2&&mf(i,e,t,n,s,r):Fr(Zi(i),e,t,n,s,r,1);break}}}function df(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),f=Math.min(a,c,l),m=Math.max(s,r,o),d=Math.max(a,c,l),_=n.next;for(;_!==e;){if(_.x>=u&&_.x<=m&&_.y>=f&&_.y<=d&&ur(s,a,r,c,o,l,_.x,_.y)&&Ot(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ff(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,m=o.y,d=Math.min(a,c,l),_=Math.min(u,f,m),y=Math.max(a,c,l),g=Math.max(u,f,m),p=jl(d,_,e,t,n),R=jl(y,g,e,t,n),T=i.prevZ,v=i.nextZ;for(;T&&T.z>=p&&v&&v.z<=R;){if(T.x>=d&&T.x<=y&&T.y>=_&&T.y<=g&&T!==s&&T!==o&&ur(a,u,c,f,l,m,T.x,T.y)&&Ot(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=d&&v.x<=y&&v.y>=_&&v.y<=g&&v!==s&&v!==o&&ur(a,u,c,f,l,m,v.x,v.y)&&Ot(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=p;){if(T.x>=d&&T.x<=y&&T.y>=_&&T.y<=g&&T!==s&&T!==o&&ur(a,u,c,f,l,m,T.x,T.y)&&Ot(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=R;){if(v.x>=d&&v.x<=y&&v.y>=_&&v.y<=g&&v!==s&&v!==o&&ur(a,u,c,f,l,m,v.x,v.y)&&Ot(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function pf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Bs(n,s)&&Nu(n,t,t.next,s)&&Or(n,s)&&Or(s,n)&&(e.push(n.i,t.i,s.i),Br(t),Br(t.next),t=i=s),t=t.next}while(t!==i);return Zi(t)}function mf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bf(o,a)){let c=Uu(o,a);o=Zi(o,o.next),c=Zi(c,c.next),Fr(o,e,t,n,s,r,0),Fr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gf(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Du(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Ef(l))}s.sort(_f);for(let r=0;r<s.length;r++)t=xf(s[r],t);return t}function _f(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function xf(i,e){let t=yf(i,e);if(!t)return e;let n=Uu(t,i);return Zi(n,n.next),Zi(t,t.next)}function yf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Bs(i,t))return t;do{if(Bs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Lu(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Or(t,i)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&vf(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function vf(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function Mf(i,e,t,n){let s=i;do s.z===0&&(s.z=jl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sf(s)}function Sf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function jl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ef(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Lu(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ur(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Lu(i,e,t,n,s,r,o,a)}function bf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!wf(i,e)&&(Or(i,e)&&Or(e,i)&&Tf(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||Bs(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Bs(i,e){return i.x===e.x&&i.y===e.y}function Nu(i,e,t,n){let s=Do(Ot(i,e,t)),r=Do(Ot(i,e,n)),o=Do(Ot(t,n,i)),a=Do(Ot(t,n,e));return!!(s!==r&&o!==a||s===0&&Io(i,t,e)||r===0&&Io(i,n,e)||o===0&&Io(t,i,n)||a===0&&Io(t,e,n))}function Io(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Do(i){return i>0?1:i<0?-1:0}function wf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Nu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Or(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function Tf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Uu(i,e){let t=Ql(i.i,i.x,i.y),n=Ql(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lh(i,e,t,n){let s=Ql(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ql(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Af(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ec=class{static triangulate(e,t,n=2){return uf(e,t,n)}},qn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Nh(e),Uh(n,e);let o=e.length;t.forEach(Nh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Uh(n,t[c]);let a=ec.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Nh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Uh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ki=class i extends At{constructor(e=new Qn([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Tt(s,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:Rf,T,v=!1,P,I,N,O;p&&(T=p.getSpacedPoints(u),v=!0,m=!1,P=p.computeFrenetFrames(u,!1),I=new C,N=new C,O=new C),m||(g=0,d=0,_=0,y=0);let w=a.extractPoints(l),S=w.shape,L=w.holes;if(!qn.isClockWise(S)){S=S.reverse();for(let ge=0,he=L.length;ge<he;ge++){let ie=L[ge];qn.isClockWise(ie)&&(L[ge]=ie.reverse())}}function ee(ge){let ie=10000000000000001e-36,re=ge[0];for(let we=1;we<=ge.length;we++){let Me=we%ge.length,Se=ge[Me],Ke=Se.x-re.x,$e=Se.y-re.y,A=Ke*Ke+$e*$e,x=Math.max(Math.abs(Se.x),Math.abs(Se.y),Math.abs(re.x),Math.abs(re.y)),H=ie*x*x;if(A<=H){ge.splice(Me,1),we--;continue}re=Se}}ee(S),L.forEach(ee);let te=L.length,q=S;for(let ge=0;ge<te;ge++){let he=L[ge];S=S.concat(he)}function J(ge,he,ie){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),ge.clone().addScaledVector(he,ie)}let _e=S.length;function $(ge,he,ie){let re,we,Me,Se=ge.x-he.x,Ke=ge.y-he.y,$e=ie.x-ge.x,A=ie.y-ge.y,x=Se*Se+Ke*Ke,H=Se*A-Ke*$e;if(Math.abs(H)>Number.EPSILON){let j=Math.sqrt(x),ae=Math.sqrt($e*$e+A*A),ne=he.x-Ke/j,Ge=he.y+Se/j,ye=ie.x-A/ae,Pe=ie.y+$e/ae,ze=((ye-ne)*A-(Pe-Ge)*$e)/(Se*A-Ke*$e);re=ne+Se*ze-ge.x,we=Ge+Ke*ze-ge.y;let xe=re*re+we*we;if(xe<=2)return new me(re,we);Me=Math.sqrt(xe/2)}else{let j=!1;Se>Number.EPSILON?$e>Number.EPSILON&&(j=!0):Se<-Number.EPSILON?$e<-Number.EPSILON&&(j=!0):Math.sign(Ke)===Math.sign(A)&&(j=!0),j?(re=-Ke,we=Se,Me=Math.sqrt(x)):(re=Se,we=Ke,Me=Math.sqrt(x/2))}return new me(re/Me,we/Me)}let Ae=[];for(let ge=0,he=q.length,ie=he-1,re=ge+1;ge<he;ge++,ie++,re++)ie===he&&(ie=0),re===he&&(re=0),Ae[ge]=$(q[ge],q[ie],q[re]);let De=[],Ne,Qe=Ae.concat();for(let ge=0,he=te;ge<he;ge++){let ie=L[ge];Ne=[];for(let re=0,we=ie.length,Me=we-1,Se=re+1;re<we;re++,Me++,Se++)Me===we&&(Me=0),Se===we&&(Se=0),Ne[re]=$(ie[re],ie[Me],ie[Se]);De.push(Ne),Qe=Qe.concat(Ne)}let st;if(g===0)st=qn.triangulateShape(q,L);else{let ge=[],he=[];for(let ie=0;ie<g;ie++){let re=ie/g,we=d*Math.cos(re*Math.PI/2),Me=_*Math.sin(re*Math.PI/2)+y;for(let Se=0,Ke=q.length;Se<Ke;Se++){let $e=J(q[Se],Ae[Se],Me);Xe($e.x,$e.y,-we),re===0&&ge.push($e)}for(let Se=0,Ke=te;Se<Ke;Se++){let $e=L[Se];Ne=De[Se];let A=[];for(let x=0,H=$e.length;x<H;x++){let j=J($e[x],Ne[x],Me);Xe(j.x,j.y,-we),re===0&&A.push(j)}re===0&&he.push(A)}}st=qn.triangulateShape(ge,he)}let rt=st.length,pt=_+y;for(let ge=0;ge<_e;ge++){let he=m?J(S[ge],Qe[ge],pt):S[ge];v?(N.copy(P.normals[0]).multiplyScalar(he.x),I.copy(P.binormals[0]).multiplyScalar(he.y),O.copy(T[0]).add(N).add(I),Xe(O.x,O.y,O.z)):Xe(he.x,he.y,0)}for(let ge=1;ge<=u;ge++)for(let he=0;he<_e;he++){let ie=m?J(S[he],Qe[he],pt):S[he];v?(N.copy(P.normals[ge]).multiplyScalar(ie.x),I.copy(P.binormals[ge]).multiplyScalar(ie.y),O.copy(T[ge]).add(N).add(I),Xe(O.x,O.y,O.z)):Xe(ie.x,ie.y,f/u*ge)}for(let ge=g-1;ge>=0;ge--){let he=ge/g,ie=d*Math.cos(he*Math.PI/2),re=_*Math.sin(he*Math.PI/2)+y;for(let we=0,Me=q.length;we<Me;we++){let Se=J(q[we],Ae[we],re);Xe(Se.x,Se.y,f+ie)}for(let we=0,Me=L.length;we<Me;we++){let Se=L[we];Ne=De[we];for(let Ke=0,$e=Se.length;Ke<$e;Ke++){let A=J(Se[Ke],Ne[Ke],re);v?Xe(A.x,A.y+T[u-1].y,T[u-1].x+ie):Xe(A.x,A.y,f+ie)}}}le(),Z();function le(){let ge=s.length/3;if(m){let he=0,ie=_e*he;for(let re=0;re<rt;re++){let we=st[re];Ce(we[2]+ie,we[1]+ie,we[0]+ie)}he=u+g*2,ie=_e*he;for(let re=0;re<rt;re++){let we=st[re];Ce(we[0]+ie,we[1]+ie,we[2]+ie)}}else{for(let he=0;he<rt;he++){let ie=st[he];Ce(ie[2],ie[1],ie[0])}for(let he=0;he<rt;he++){let ie=st[he];Ce(ie[0]+_e*u,ie[1]+_e*u,ie[2]+_e*u)}}n.addGroup(ge,s.length/3-ge,0)}function Z(){let ge=s.length/3,he=0;Be(q,he),he+=q.length;for(let ie=0,re=L.length;ie<re;ie++){let we=L[ie];Be(we,he),he+=we.length}n.addGroup(ge,s.length/3-ge,1)}function Be(ge,he){let ie=ge.length;for(;--ie>=0;){let re=ie,we=ie-1;we<0&&(we=ge.length-1);for(let Me=0,Se=u+g*2;Me<Se;Me++){let Ke=_e*Me,$e=_e*(Me+1),A=he+re+Ke,x=he+we+Ke,H=he+we+$e,j=he+re+$e;tt(A,x,H,j)}}}function Xe(ge,he,ie){c.push(ge),c.push(he),c.push(ie)}function Ce(ge,he,ie){vt(ge),vt(he),vt(ie);let re=s.length/3,we=R.generateTopUV(n,s,re-3,re-2,re-1);D(we[0]),D(we[1]),D(we[2])}function tt(ge,he,ie,re){vt(ge),vt(he),vt(re),vt(he),vt(ie),vt(re);let we=s.length/3,Me=R.generateSideWallUV(n,s,we-6,we-3,we-2,we-1);D(Me[0]),D(Me[1]),D(Me[3]),D(Me[1]),D(Me[2]),D(Me[3])}function vt(ge){s.push(c[ge*3+0]),s.push(c[ge*3+1]),s.push(c[ge*3+2])}function D(ge){r.push(ge.x),r.push(ge.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Cf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $l[s.type]().fromJSON(s)),new i(n,e.options)}},Rf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new me(r,o),new me(a,c),new me(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],f=e[n*3+2],m=e[s*3],d=e[s*3+1],_=e[s*3+2],y=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new me(o,1-c),new me(l,1-f),new me(m,1-_),new me(y,1-p)]:[new me(a,1-c),new me(u,1-f),new me(d,1-_),new me(g,1-p)]}};function Cf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var zr=class i extends $o{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ei=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=e/a,m=t/c,d=[],_=[],y=[],g=[];for(let p=0;p<u;p++){let R=p*m-o;for(let T=0;T<l;T++){let v=T*f-r;_.push(v,-R,0),y.push(0,0,1),g.push(T/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let R=0;R<a;R++){let T=R+l*p,v=R+l*(p+1),P=R+1+l*(p+1),I=R+1+l*p;d.push(T,v,I),d.push(v,P,I)}this.setIndex(d),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Hr=class i extends At{constructor(e=new Qn([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(r,3)),this.setAttribute("uv",new Tt(o,2));function l(u){let f=s.length/3,m=u.extractPoints(t),d=m.shape,_=m.holes;qn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=_.length;g<p;g++){let R=_[g];qn.isClockWise(R)===!0&&(_[g]=R.reverse())}let y=qn.triangulateShape(d,_);for(let g=0,p=_.length;g<p;g++){let R=_[g];d=d.concat(R)}for(let g=0,p=d.length;g<p;g++){let R=d[g];s.push(R.x,R.y,0),r.push(0,0,1),o.push(R.x,R.y)}for(let g=0,p=y.length;g<p;g++){let R=y[g],T=R[0]+f,v=R[1]+f,P=R[2]+f;n.push(T,v,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Pf(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Pf(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var zs=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new C,m=new C,d=[],_=[],y=[],g=[];for(let p=0;p<=n;p++){let R=[],T=p/n,v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){let I=P/t;f.x=-e*Math.cos(s+I*r)*Math.sin(o+T*a),f.y=e*Math.cos(o+T*a),f.z=e*Math.sin(s+I*r)*Math.sin(o+T*a),_.push(f.x,f.y,f.z),m.copy(f).normalize(),y.push(m.x,m.y,m.z),g.push(I+v,1-T),R.push(l++)}u.push(R)}for(let p=0;p<n;p++)for(let R=0;R<t;R++){let T=u[p][R+1],v=u[p][R],P=u[p+1][R],I=u[p+1][R+1];(p!==0||o>0)&&d.push(T,v,I),(p!==n-1||c<Math.PI)&&d.push(v,P,I)}this.setIndex(d),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var kr=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var sa=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ra=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Vr=class extends jn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Lo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function If(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oa=class extends Ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ql,endingEnd:ql}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zl:r=e,a=2*t-n;break;case Kl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zl:o=e,c=2*n-t;break;case Kl:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,d=this._weightNext,_=(n-t)/(s-t),y=_*_,g=y*_,p=-m*g+2*m*y-m*_,R=(1+m)*g+(-1.5-2*m)*y+(-.5+m)*_+1,T=(-1-d)*g+(1.5+d)*y+.5*_,v=d*g-d*y;for(let P=0;P!==a;++P)r[P]=p*o[u+P]+R*o[l+P]+T*o[c+P]+v*o[f+P];return r}},aa=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),f=1-u;for(let m=0;m!==a;++m)r[m]=o[l+m]*f+o[c+m]*u;return r}},la=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},En=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lo(t,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lo(e.times,Array),values:Lo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new la(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case zo:t=this.InterpolantFactoryMethodLinear;break;case No:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return No}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&If(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===No,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,m=f-n,d=f+n;for(let _=0;_!==n;++_){let y=t[f+_];if(y!==t[m+_]||y!==t[d+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,m=o*n;for(let d=0;d!==n;++d)t[m+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=zo;var Ii=class extends En{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=gr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};ca.prototype.ValueTypeName="color";var ha=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};ha.prototype.ValueTypeName="number";var ua=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)An.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gr=class extends En{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends En{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=gr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};da.prototype.ValueTypeName="vector";var fa=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,m=l.length;f<m;f+=2){let d=l[f],_=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Fu=new fa,pa=class{constructor(e){this.manager=e!==void 0?e:Fu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hs=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Wr=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Yl=new Ct,Fh=new C,Oh=new C,ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),Yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tc=class extends ma{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Yi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Xr=class extends Hs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Yr=class extends Er{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nc=class extends ma{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new nc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ga=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Tc="\\[\\]\\.:\\/",Df=new RegExp("["+Tc+"]","g"),Ac="[^"+Tc+"]",Lf="[^"+Tc.replace("\\.","")+"]",Nf=/((?:WC+[\/:])*)/.source.replace("WC",Ac),Uf=/(WCOD+)?/.source.replace("WCOD",Lf),Ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),Of=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),Bf=new RegExp("^"+Nf+Uf+Ff+Of+"$"),zf=["material","materials","bones","map"],ic=class{constructor(e,t,n){let s=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Df,"")}static parseTrackName(e){let t=Bf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=ic;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fx=new Float32Array(1);var Bh=new Ct,Vs=class{constructor(e,t,n=0,s=1/0){this.ray=new Ri(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(e,t=!0,n=[]){return sc(e,this,n,t),n.sort(zh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)sc(e[s],this,n,t);return n.sort(zh),n}};function zh(i,e){return i.distance-e.distance}function sc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)sc(r[o],e,t,!0)}}var Gs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var qr=class extends Cr{constructor(e=10,t=10,n=4473924,s=8947848){n=new mt(n),s=new mt(s);let r=t/2,o=e/t,a=e/2,c=[],l=[];for(let m=0,d=0,_=-a;m<=t;m++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);let y=m===r?n:s;y.toArray(l,d),d+=3,y.toArray(l,d),d+=3,y.toArray(l,d),d+=3,y.toArray(l,d),d+=3}let u=new At;u.setAttribute("position",new Tt(c,3)),u.setAttribute("color",new Tt(l,3));let f=new jn({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Zr=class extends Cr{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new At;r.setIndex(new nn(n,1)),r.setAttribute("position",new Tt(s,3)),super(r,new jn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var Kr=class extends Kn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Rc(i,e,t,n){let s=Hf(n);switch(t){case gc:return i*e;case Pa:return i*e/s.components*s.byteLength;case Ia:return i*e/s.components*s.byteLength;case xc:return i*e*2/s.components*s.byteLength;case Da:return i*e*2/s.components*s.byteLength;case _c:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case La:return i*e*4/s.components*s.byteLength;case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:case Oa:return Math.max(i,16)*Math.max(e,8)/4;case Na:case Fa:return Math.max(i,8)*Math.max(e,8)/2;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case tl:case nl:case il:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sl:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ol:case al:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hf(i){switch(i){case Gn:case dc:return{byteLength:1,components:1};case Ws:case fc:case Xs:return{byteLength:2,components:1};case Ra:case Ca:return{byteLength:2,components:4};case Ni:case Aa:case Wn:return{byteLength:4,components:1};case pc:case mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function od(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kf(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,f=l.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,_)=>d.start-_.start);let m=0;for(let d=1;d<f.length;d++){let _=f[m],y=f[d];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++m,f[m]=y)}f.length=m+1;for(let d=0,_=f.length;d<_;d++){let y=f[d];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
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
#endif`,$f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
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
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
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
#endif`,Hp=`struct PhysicalMaterial {
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
}`,kp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$p=`#if defined( USE_POINTS_UV )
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
#endif`,jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tm=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,Km=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,cg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,dg=`#define STANDARD
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
}`,fg=`#define TOON
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
}`,pg=`#define TOON
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,yg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Vf,alphahash_pars_fragment:Gf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:Yf,alphatest_pars_fragment:qf,aomap_fragment:Zf,aomap_pars_fragment:Kf,batching_pars_vertex:Jf,batching_vertex:$f,begin_vertex:jf,beginnormal_vertex:Qf,bsdfs:ep,iridescence_fragment:tp,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:rp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:hp,common:up,cube_uv_reflection_fragment:dp,defaultnormal_vertex:fp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:_p,colorspace_fragment:xp,colorspace_pars_fragment:yp,envmap_fragment:vp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Np,envmap_vertex:bp,fog_vertex:wp,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Dp,lights_pars_begin:Lp,lights_toon_fragment:Up,lights_toon_pars_fragment:Fp,lights_phong_fragment:Op,lights_phong_pars_fragment:Bp,lights_physical_fragment:zp,lights_physical_pars_fragment:Hp,lights_fragment_begin:kp,lights_fragment_maps:Vp,lights_fragment_end:Gp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:qp,map_fragment:Zp,map_pars_fragment:Kp,map_particle_fragment:Jp,map_particle_pars_fragment:$p,metalnessmap_fragment:jp,metalnessmap_pars_fragment:Qp,morphinstance_vertex:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:om,normal_pars_fragment:am,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:fm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:xm,dithering_fragment:ym,dithering_pars_fragment:vm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:bm,shadowmap_vertex:wm,shadowmask_pars_fragment:Tm,skinbase_vertex:Am,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Im,specularmap_pars_fragment:Dm,tonemapping_fragment:Lm,tonemapping_pars_fragment:Nm,transmission_fragment:Um,transmission_pars_fragment:Fm,uv_pars_fragment:Om,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:Hm,background_vert:km,background_frag:Vm,backgroundCube_vert:Gm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:Ym,depth_vert:qm,depth_frag:Zm,distanceRGBA_vert:Km,distanceRGBA_frag:Jm,equirect_vert:$m,equirect_frag:jm,linedashed_vert:Qm,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:og,meshnormal_vert:ag,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:dg,meshtoon_vert:fg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:xg,sprite_vert:yg,sprite_frag:vg},Le={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ii={basic:{uniforms:sn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:sn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new mt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:sn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:sn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:sn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new mt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:sn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:sn([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:sn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:sn([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:sn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:sn([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:sn([Le.common,Le.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:sn([Le.lights,Le.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};ii.physical={uniforms:sn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var ll={r:0,b:0,g:0},es=new vn,Mg=new Ct;function Sg(i,e,t,n,s,r,o){let a=new mt(0),c=r===!0?0:1,l,u,f=null,m=0,d=null;function _(T){let v=T.isScene===!0?T.background:null;return v&&v.isTexture&&(v=(T.backgroundBlurriness>0?t:e).get(v)),v}function y(T){let v=!1,P=_(T);P===null?p(a,c):P&&P.isColor&&(p(P,1),v=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(T,v){let P=_(v);P&&(P.isCubeTexture||P.mapping===Jr)?(u===void 0&&(u=new Mt(new Rn(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Qi(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),es.copy(v.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(es)),u.material.toneMapped=xt.getTransfer(P.colorSpace)!==wt,(f!==P||m!==P.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=P,m=P.version,d=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new Mt(new ei(2,2),new kn({name:"BackgroundMaterial",uniforms:Qi(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=xt.getTransfer(P.colorSpace)!==wt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||m!==P.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=P,m=P.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,v){T.getRGB(ll,bc(i)),n.buffers.color.setClear(ll.r,ll.g,ll.b,v,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,v=1){a.set(T),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:y,addToRenderList:g,dispose:R}}function Eg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function a(S,L,V,ee,te){let q=!1,J=f(ee,V,L);r!==J&&(r=J,l(r.object)),q=d(S,ee,V,te),q&&_(S,ee,V,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(S,L,V,ee),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function f(S,L,V){let ee=V.wireframe===!0,te=n[S.id];te===void 0&&(te={},n[S.id]=te);let q=te[L.id];q===void 0&&(q={},te[L.id]=q);let J=q[ee];return J===void 0&&(J=m(c()),q[ee]=J),J}function m(S){let L=[],V=[],ee=[];for(let te=0;te<t;te++)L[te]=0,V[te]=0,ee[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:ee,object:S,attributes:{},index:null}}function d(S,L,V,ee){let te=r.attributes,q=L.attributes,J=0,_e=V.getAttributes();for(let $ in _e)if(_e[$].location>=0){let De=te[$],Ne=q[$];if(Ne===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Ne=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Ne=S.instanceColor)),De===void 0||De.attribute!==Ne||Ne&&De.data!==Ne.data)return!0;J++}return r.attributesNum!==J||r.index!==ee}function _(S,L,V,ee){let te={},q=L.attributes,J=0,_e=V.getAttributes();for(let $ in _e)if(_e[$].location>=0){let De=q[$];De===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(De=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(De=S.instanceColor));let Ne={};Ne.attribute=De,De&&De.data&&(Ne.data=De.data),te[$]=Ne,J++}r.attributes=te,r.attributesNum=J,r.index=ee}function y(){let S=r.newAttributes;for(let L=0,V=S.length;L<V;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){let V=r.newAttributes,ee=r.enabledAttributes,te=r.attributeDivisors;V[S]=1,ee[S]===0&&(i.enableVertexAttribArray(S),ee[S]=1),te[S]!==L&&(i.vertexAttribDivisor(S,L),te[S]=L)}function R(){let S=r.newAttributes,L=r.enabledAttributes;for(let V=0,ee=L.length;V<ee;V++)L[V]!==S[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function T(S,L,V,ee,te,q,J){J===!0?i.vertexAttribIPointer(S,L,V,te,q):i.vertexAttribPointer(S,L,V,ee,te,q)}function v(S,L,V,ee){y();let te=ee.attributes,q=V.getAttributes(),J=L.defaultAttributeValues;for(let _e in q){let $=q[_e];if($.location>=0){let Ae=te[_e];if(Ae===void 0&&(_e==="instanceMatrix"&&S.instanceMatrix&&(Ae=S.instanceMatrix),_e==="instanceColor"&&S.instanceColor&&(Ae=S.instanceColor)),Ae!==void 0){let De=Ae.normalized,Ne=Ae.itemSize,Qe=e.get(Ae);if(Qe===void 0)continue;let st=Qe.buffer,rt=Qe.type,pt=Qe.bytesPerElement,le=rt===i.INT||rt===i.UNSIGNED_INT||Ae.gpuType===Aa;if(Ae.isInterleavedBufferAttribute){let Z=Ae.data,Be=Z.stride,Xe=Ae.offset;if(Z.isInstancedInterleavedBuffer){for(let Ce=0;Ce<$.locationSize;Ce++)p($.location+Ce,Z.meshPerAttribute);S.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ce=0;Ce<$.locationSize;Ce++)g($.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Ce=0;Ce<$.locationSize;Ce++)T($.location+Ce,Ne/$.locationSize,rt,De,Be*pt,(Xe+Ne/$.locationSize*Ce)*pt,le)}else{if(Ae.isInstancedBufferAttribute){for(let Z=0;Z<$.locationSize;Z++)p($.location+Z,Ae.meshPerAttribute);S.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Z=0;Z<$.locationSize;Z++)g($.location+Z);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Z=0;Z<$.locationSize;Z++)T($.location+Z,Ne/$.locationSize,rt,De,Ne*pt,Ne/$.locationSize*Z*pt,le)}}else if(J!==void 0){let De=J[_e];if(De!==void 0)switch(De.length){case 2:i.vertexAttrib2fv($.location,De);break;case 3:i.vertexAttrib3fv($.location,De);break;case 4:i.vertexAttrib4fv($.location,De);break;default:i.vertexAttrib1fv($.location,De)}}}}R()}function P(){O();for(let S in n){let L=n[S];for(let V in L){let ee=L[V];for(let te in ee)u(ee[te].object),delete ee[te];delete L[V]}delete n[S]}}function I(S){if(n[S.id]===void 0)return;let L=n[S.id];for(let V in L){let ee=L[V];for(let te in ee)u(ee[te].object),delete ee[te];delete L[V]}delete n[S.id]}function N(S){for(let L in n){let V=n[L];if(V[S.id]===void 0)continue;let ee=V[S.id];for(let te in ee)u(ee[te].object),delete ee[te];delete V[S.id]}}function O(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:g,disableUnusedAttributes:R}}function bg(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,n,1)}function c(l,u,f,m){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],m[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,m,0,f);let _=0;for(let y=0;y<f;y++)_+=u[y]*m[y];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Pn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let O=N===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Gn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Wn&&!O)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:P,maxSamples:I}}function Tg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new tn,a=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){let d=f.length!==0||m||n!==0||s;return s=m,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){t=u(f,m,0)},this.setState=function(f,m,d){let _=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||_===null||_.length===0||r&&!g)r?u(null):l();else{let R=r?0:n,T=R*4,v=p.clippingState||null;c.value=v,v=u(_,m,T,d);for(let P=0;P!==T;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,m,d,_){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=c.value,_!==!0||g===null){let p=d+y*4,R=m.matrixWorldInverse;a.getNormalMatrix(R),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,v=d;T!==y;++T,v+=4)o.copy(f[T]).applyMatrix4(R,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function Ag(i){let e=new WeakMap;function t(o,a){return a===ba?o.mapping=$i:a===wa&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ba||a===wa)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Xo(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ks=4,Ou=[.125,.215,.35,.446,.526,.582],is=20,Cc=new Yr,Bu=new mt,Pc=null,Ic=0,Dc=0,Lc=!1,ns=(1+Math.sqrt(5))/2,Zs=1/ns,zu=[new C(-ns,Zs,0),new C(ns,Zs,0),new C(-Zs,0,ns),new C(Zs,0,ns),new C(0,ns,-Zs),new C(0,ns,Zs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Rg=new C,ul=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Rg}=r;Pc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pc,Ic,Dc),this._renderer.xr.enabled=Lc,e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Xs,format:Pn,colorSpace:Xi,depthBuffer:!1},s=Hu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Pg(r,e,t)}return s}_compileMaterial(e){let t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,Cc)}_sceneToCubeUV(e,t,n,s,r){let c=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,d=f.toneMapping;f.getClearColor(Bu),f.toneMapping=gi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let y=new Hn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Mt(new Rn,y),p=!1,R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,p=!0):(y.color.copy(Bu),p=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));let P=this._cubeSize;cl(s,v*P,T>2?P:0,P,P),f.setRenderTarget(s),p&&f.render(g,c),f.render(e,c)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=m,e.background=R}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===$i||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;cl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Cc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zu[(s-r-1)%zu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Mt(this._lodPlanes[s],l),m=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*is-1),y=r/_,g=isFinite(r)?1+Math.floor(u*y):is;g>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${is}`);let p=[],R=0;for(let N=0;N<is;++N){let O=N/y,w=Math.exp(-O*O/2);p.push(w),N===0?R+=w:N<g&&(R+=2*w)}for(let N=0;N<p.length;N++)p[N]=p[N]/R;m.envMap.value=e.texture,m.samples.value=g,m.weights.value=p,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:T}=this;m.dTheta.value=_,m.mipInt.value=T-n;let v=this._sizeLods[s],P=3*v*(s>T-Ks?s-T+Ks:0),I=4*(this._cubeSize-v);cl(t,P,I,3*v,2*v),c.setRenderTarget(t),c.render(f,Cc)}};function Cg(i){let e=[],t=[],n=[],s=i,r=i-Ks+1+Ou.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ks?c=Ou[o-i+Ks-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,f=1+l,m=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,y=3,g=2,p=1,R=new Float32Array(y*_*d),T=new Float32Array(g*_*d),v=new Float32Array(p*_*d);for(let I=0;I<d;I++){let N=I%3*2/3-1,O=I>2?0:-1,w=[N,O,0,N+2/3,O,0,N+2/3,O+1,0,N,O,0,N+2/3,O+1,0,N,O+1,0];R.set(w,y*_*I),T.set(m,g*_*I);let S=[I,I,I,I,I,I];v.set(S,p*_*I)}let P=new At;P.setAttribute("position",new nn(R,y)),P.setAttribute("uv",new nn(T,g)),P.setAttribute("faceIndex",new nn(v,p)),e.push(P),s>Ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hu(i,e,t){let n=new Jn(i,e,t);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pg(i,e,t){let n=new Float32Array(is),s=new C(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ku(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Vu(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}function Ig(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ba||c===wa,u=c===$i||c===ji;if(l||u){let f=e.get(a),m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return t===null&&(t=new ul(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new ul(i)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Dg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lg(i,e,t,n){let s={},r=new WeakMap;function o(f){let m=f.target;m.index!==null&&e.remove(m.index);for(let _ in m.attributes)e.remove(m.attributes[_]);m.removeEventListener("dispose",o),delete s[m.id];let d=r.get(m);d&&(e.remove(d),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(f,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function c(f){let m=f.attributes;for(let d in m)e.update(m[d],i.ARRAY_BUFFER)}function l(f){let m=[],d=f.index,_=f.attributes.position,y=0;if(d!==null){let R=d.array;y=d.version;for(let T=0,v=R.length;T<v;T+=3){let P=R[T+0],I=R[T+1],N=R[T+2];m.push(P,I,I,N,N,P)}}else if(_!==void 0){let R=_.array;y=_.version;for(let T=0,v=R.length/3-1;T<v;T+=3){let P=T+0,I=T+1,N=T+2;m.push(P,I,I,N,N,P)}}else return;let g=new(Ec(m)?Sr:Mr)(m,1);g.version=y;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){let m=r.get(f);if(m){let d=f.index;d!==null&&m.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Ng(i,e,t){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function c(m,d){i.drawElements(n,d,r,m*o),t.update(d,n,1)}function l(m,d,_){_!==0&&(i.drawElementsInstanced(n,d,r,m*o,_),t.update(d,n,_))}function u(m,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,m,0,_);let g=0;for(let p=0;p<_;p++)g+=d[p];t.update(g,n,1)}function f(m,d,_,y){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<m.length;p++)l(m[p]/o,d[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,m,0,y,0,_);let p=0;for(let R=0;R<_;R++)p+=d[R]*y[R];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Ug(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Fg(i,e,t){let n=new WeakMap,s=new Bt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,m=n.get(a);if(m===void 0||m.count!==f){let w=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",w)};m!==void 0&&m.texture.dispose();let d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],T=0;d===!0&&(T=1),_===!0&&(T=2),y===!0&&(T=3);let v=a.attributes.position.count*T,P=1;v>e.maxTextureSize&&(P=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let I=new Float32Array(v*P*4*f),N=new vr(I,v,P,f);N.type=Wn,N.needsUpdate=!0;let O=T*4;for(let S=0;S<f;S++){let L=g[S],V=p[S],ee=R[S],te=v*P*4*S;for(let q=0;q<L.count;q++){let J=q*O;d===!0&&(s.fromBufferAttribute(L,q),I[te+J+0]=s.x,I[te+J+1]=s.y,I[te+J+2]=s.z,I[te+J+3]=0),_===!0&&(s.fromBufferAttribute(V,q),I[te+J+4]=s.x,I[te+J+5]=s.y,I[te+J+6]=s.z,I[te+J+7]=0),y===!0&&(s.fromBufferAttribute(ee,q),I[te+J+8]=s.x,I[te+J+9]=s.y,I[te+J+10]=s.z,I[te+J+11]=ee.itemSize===4?s.w:1)}}m={count:f,texture:N,size:new me(v,P)},n.set(a,m),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let _=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function Og(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let m=c.skeleton;s.get(m)!==l&&(m.update(),s.set(m,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ad=new ln,Gu=new Pr(1,1),ld=new vr,cd=new Go,hd=new br,Wu=[],Xu=[],Yu=new Float32Array(16),qu=new Float32Array(9),Zu=new Float32Array(4);function $s(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Wu[s];if(r===void 0&&(r=new Float32Array(s),Wu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fl(i,e){let t=Xu[e];t===void 0&&(t=new Int32Array(e),Xu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function Vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),Gt(t,n)}}function Gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;qu.set(n),i.uniformMatrix3fv(this.addr,!1,qu),Gt(t,n)}}function Wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),Gt(t,n)}}function Xg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function Kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function Qg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gu.compareFunction=vc,r=Gu):r=ad,t.setTexture2D(e||r,s)}function e_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||cd,s)}function t_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hd,s)}function n_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ld,s)}function i_(i){switch(i){case 5126:return Bg;case 35664:return zg;case 35665:return Hg;case 35666:return kg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return Yg;case 35668:case 35672:return qg;case 35669:case 35673:return Zg;case 5125:return Kg;case 36294:return Jg;case 36295:return $g;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}function s_(i,e){i.uniform1fv(this.addr,e)}function r_(i,e){let t=$s(e,this.size,2);i.uniform2fv(this.addr,t)}function o_(i,e){let t=$s(e,this.size,3);i.uniform3fv(this.addr,t)}function a_(i,e){let t=$s(e,this.size,4);i.uniform4fv(this.addr,t)}function l_(i,e){let t=$s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function c_(i,e){let t=$s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function h_(i,e){let t=$s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function u_(i,e){i.uniform1iv(this.addr,e)}function d_(i,e){i.uniform2iv(this.addr,e)}function f_(i,e){i.uniform3iv(this.addr,e)}function p_(i,e){i.uniform4iv(this.addr,e)}function m_(i,e){i.uniform1uiv(this.addr,e)}function g_(i,e){i.uniform2uiv(this.addr,e)}function __(i,e){i.uniform3uiv(this.addr,e)}function x_(i,e){i.uniform4uiv(this.addr,e)}function y_(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ad,r[o])}function v_(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||cd,r[o])}function M_(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hd,r[o])}function S_(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ld,r[o])}function E_(i){switch(i){case 5126:return s_;case 35664:return r_;case 35665:return o_;case 35666:return a_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}var Uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i_(t.type)}},Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E_(t.type)}},Oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Nc=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function b_(i,e,t){let n=i.name,s=n.length;for(Nc.lastIndex=0;;){let r=Nc.exec(n),o=Nc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ku(t,l===void 0?new Uc(a,i,e):new Fc(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Oc(a),Ku(t,f)),t=f}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);b_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ju(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var w_=37297,T_=0;function A_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var $u=new ht;function R_(i){xt._getMatrix($u,xt.workingColorSpace,i);let e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case _r:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ju(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+A_(i.getShaderSource(e),a)}else return r}function C_(i,e){let t=R_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function P_(i,e){let t;switch(e){case cu:t="Linear";break;case hu:t="Reinhard";break;case uu:t="Cineon";break;case du:t="ACESFilmic";break;case pu:t="AgX";break;case mu:t="Neutral";break;case fu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hl=new C;function I_(){xt.getLuminanceCoefficients(hl);let i=hl.x.toFixed(4),e=hl.y.toFixed(4),t=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function L_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function no(i){return i!==""}function Qu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ed(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(i){return i.replace(U_,O_)}var F_=new Map;function O_(i,e){let t=ft[e];if(t===void 0){let n=F_.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bc(t)}var B_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(i){return i.replace(B_,z_)}function z_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function H_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function k_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $i:case ji:e="ENVMAP_TYPE_CUBE";break;case Jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function G_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hc:e="ENVMAP_BLENDING_MULTIPLY";break;case au:e="ENVMAP_BLENDING_MIX";break;case lu:e="ENVMAP_BLENDING_ADD";break}return e}function W_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function X_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=H_(t),l=k_(t),u=V_(t),f=G_(t),m=W_(t),d=D_(t),_=L_(r),y=s.createProgram(),g,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(no).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(no).join(`
`),p.length>0&&(p+=`
`)):(g=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),p=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?ft.tonemapping_pars_fragment:"",t.toneMapping!==gi?P_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,C_("linearToOutputTexel",t.outputColorSpace),I_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),o=Bc(o),o=Qu(o,t),o=ed(o,t),a=Bc(a),a=Qu(a,t),a=ed(a,t),o=td(o),a=td(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=R+g+o,v=R+p+a,P=Ju(s,s.VERTEX_SHADER,T),I=Ju(s,s.FRAGMENT_SHADER,v);s.attachShader(y,P),s.attachShader(y,I),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function N(L){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(y)||"",ee=s.getShaderInfoLog(P)||"",te=s.getShaderInfoLog(I)||"",q=V.trim(),J=ee.trim(),_e=te.trim(),$=!0,Ae=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,P,I);else{let De=ju(s,P,"vertex"),Ne=ju(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+De+`
`+Ne)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(J===""||_e==="")&&(Ae=!1);Ae&&(L.diagnostics={runnable:$,programLog:q,vertexShader:{log:J,prefix:g},fragmentShader:{log:_e,prefix:p}})}s.deleteShader(P),s.deleteShader(I),O=new Js(s,y),w=N_(s,y)}let O;this.getUniforms=function(){return O===void 0&&N(this),O};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,w_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=I,this}var Y_=0,zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hc(e),t.set(e,n)),n}},Hc=class{constructor(e){this.id=Y_++,this.code=e,this.usedTimes=0}};function q_(i,e,t,n,s,r,o){let a=new Is,c=new zc,l=new Set,u=[],f=s.logarithmicDepthBuffer,m=s.vertexTextures,d=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,S,L,V,ee){let te=V.fog,q=ee.geometry,J=w.isMeshStandardMaterial?V.environment:null,_e=(w.isMeshStandardMaterial?t:e).get(w.envMap||J),$=_e&&_e.mapping===Jr?_e.image.height:null,Ae=_[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let De=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ne=De!==void 0?De.length:0,Qe=0;q.morphAttributes.position!==void 0&&(Qe=1),q.morphAttributes.normal!==void 0&&(Qe=2),q.morphAttributes.color!==void 0&&(Qe=3);let st,rt,pt,le;if(Ae){let Ve=ii[Ae];st=Ve.vertexShader,rt=Ve.fragmentShader}else st=w.vertexShader,rt=w.fragmentShader,c.update(w),pt=c.getVertexShaderID(w),le=c.getFragmentShaderID(w);let Z=i.getRenderTarget(),Be=i.state.buffers.depth.getReversed(),Xe=ee.isInstancedMesh===!0,Ce=ee.isBatchedMesh===!0,tt=!!w.map,vt=!!w.matcap,D=!!_e,ge=!!w.aoMap,he=!!w.lightMap,ie=!!w.bumpMap,re=!!w.normalMap,we=!!w.displacementMap,Me=!!w.emissiveMap,Se=!!w.metalnessMap,Ke=!!w.roughnessMap,$e=w.anisotropy>0,A=w.clearcoat>0,x=w.dispersion>0,H=w.iridescence>0,j=w.sheen>0,ae=w.transmission>0,ne=$e&&!!w.anisotropyMap,Ge=A&&!!w.clearcoatMap,ye=A&&!!w.clearcoatNormalMap,Pe=A&&!!w.clearcoatRoughnessMap,ze=H&&!!w.iridescenceMap,xe=H&&!!w.iridescenceThicknessMap,Ue=j&&!!w.sheenColorMap,Je=j&&!!w.sheenRoughnessMap,We=!!w.specularMap,Ie=!!w.specularColorMap,ot=!!w.specularIntensityMap,F=ae&&!!w.transmissionMap,Ee=ae&&!!w.thicknessMap,Re=!!w.gradientMap,He=!!w.alphaMap,se=w.alphaTest>0,ce=!!w.alphaHash,be=!!w.extensions,Q=gi;w.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Q=i.toneMapping);let nt={shaderID:Ae,shaderType:w.type,shaderName:w.name,vertexShader:st,fragmentShader:rt,defines:w.defines,customVertexShaderID:pt,customFragmentShaderID:le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&ee._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ee.instanceColor!==null,instancingMorph:Xe&&ee.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Xi,alphaToCoverage:!!w.alphaToCoverage,map:tt,matcap:vt,envMap:D,envMapMode:D&&_e.mapping,envMapCubeUVHeight:$,aoMap:ge,lightMap:he,bumpMap:ie,normalMap:re,displacementMap:m&&we,emissiveMap:Me,normalMapObjectSpace:re&&w.normalMapType===yu,normalMapTangentSpace:re&&w.normalMapType===yc,metalnessMap:Se,roughnessMap:Ke,anisotropy:$e,anisotropyMap:ne,clearcoat:A,clearcoatMap:Ge,clearcoatNormalMap:ye,clearcoatRoughnessMap:Pe,dispersion:x,iridescence:H,iridescenceMap:ze,iridescenceThicknessMap:xe,sheen:j,sheenColorMap:Ue,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Ie,specularIntensityMap:ot,transmission:ae,transmissionMap:F,thicknessMap:Ee,gradientMap:Re,opaque:w.transparent===!1&&w.blending===Gi&&w.alphaToCoverage===!1,alphaMap:He,alphaTest:se,alphaHash:ce,combine:w.combine,mapUv:tt&&y(w.map.channel),aoMapUv:ge&&y(w.aoMap.channel),lightMapUv:he&&y(w.lightMap.channel),bumpMapUv:ie&&y(w.bumpMap.channel),normalMapUv:re&&y(w.normalMap.channel),displacementMapUv:we&&y(w.displacementMap.channel),emissiveMapUv:Me&&y(w.emissiveMap.channel),metalnessMapUv:Se&&y(w.metalnessMap.channel),roughnessMapUv:Ke&&y(w.roughnessMap.channel),anisotropyMapUv:ne&&y(w.anisotropyMap.channel),clearcoatMapUv:Ge&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:ye&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Je&&y(w.sheenRoughnessMap.channel),specularMapUv:We&&y(w.specularMap.channel),specularColorMapUv:Ie&&y(w.specularColorMap.channel),specularIntensityMapUv:ot&&y(w.specularIntensityMap.channel),transmissionMapUv:F&&y(w.transmissionMap.channel),thicknessMapUv:Ee&&y(w.thicknessMap.channel),alphaMapUv:He&&y(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(re||$e),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!q.attributes.uv&&(tt||He),fog:!!te,useFog:w.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Be,skinning:ee.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Qe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:tt&&w.map.isVideoTexture===!0&&xt.getTransfer(w.map.colorSpace)===wt,decodeVideoTextureEmissive:Me&&w.emissiveMap.isVideoTexture===!0&&xt.getTransfer(w.emissiveMap.colorSpace)===wt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Cn,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:be&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&w.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function p(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(R(S,w),T(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function R(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function T(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let S=_[w.type],L;if(S){let V=ii[S];L=Pu.clone(V.uniforms)}else L=w.uniforms;return L}function P(w,S){let L;for(let V=0,ee=u.length;V<ee;V++){let te=u[V];if(te.cacheKey===S){L=te,++L.usedTimes;break}}return L===void 0&&(L=new X_(i,S,w,r),u.push(L)),L}function I(w){if(--w.usedTimes===0){let S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function N(w){c.remove(w)}function O(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:I,releaseShaderCache:N,programs:u,dispose:O}}function Z_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function K_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function id(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,m,d,_,y,g){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:m,material:d,groupOrder:_,renderOrder:f.renderOrder,z:y,group:g},i[e]=p):(p.id=f.id,p.object=f,p.geometry=m,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=y,p.group=g),e++,p}function a(f,m,d,_,y,g){let p=o(f,m,d,_,y,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(f,m,d,_,y,g){let p=o(f,m,d,_,y,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(f,m){t.length>1&&t.sort(f||K_),n.length>1&&n.sort(m||id),s.length>1&&s.sort(m||id)}function u(){for(let f=e,m=i.length;f<m;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function J_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new sd,i.set(n,[o])):s>=r.length?(o=new sd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new mt};break;case"SpotLight":t={position:new C,direction:new C,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function j_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Q_=0;function ex(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tx(i){let e=new $_,t=j_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,r=new Ct,o=new Ct;function a(l){let u=0,f=0,m=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,_=0,y=0,g=0,p=0,R=0,T=0,v=0,P=0,I=0,N=0;l.sort(ex);for(let w=0,S=l.length;w<S;w++){let L=l[w],V=L.color,ee=L.intensity,te=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=V.r*ee,f+=V.g*ee,m+=V.b*ee;else if(L.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(L.sh.coefficients[J],ee);N++}else if(L.isDirectionalLight){let J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let _e=L.shadow,$=t.get(L);$.shadowIntensity=_e.intensity,$.shadowBias=_e.bias,$.shadowNormalBias=_e.normalBias,$.shadowRadius=_e.radius,$.shadowMapSize=_e.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=L.shadow.matrix,R++}n.directional[d]=J,d++}else if(L.isSpotLight){let J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(V).multiplyScalar(ee),J.distance=te,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,n.spot[y]=J;let _e=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,_e.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[y]=_e.matrix,L.castShadow){let $=t.get(L);$.shadowIntensity=_e.intensity,$.shadowBias=_e.bias,$.shadowNormalBias=_e.normalBias,$.shadowRadius=_e.radius,$.shadowMapSize=_e.mapSize,n.spotShadow[y]=$,n.spotShadowMap[y]=q,v++}y++}else if(L.isRectAreaLight){let J=e.get(L);J.color.copy(V).multiplyScalar(ee),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=J,g++}else if(L.isPointLight){let J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){let _e=L.shadow,$=t.get(L);$.shadowIntensity=_e.intensity,$.shadowBias=_e.bias,$.shadowNormalBias=_e.normalBias,$.shadowRadius=_e.radius,$.shadowMapSize=_e.mapSize,$.shadowCameraNear=_e.camera.near,$.shadowCameraFar=_e.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=L.shadow.matrix,T++}n.point[_]=J,_++}else if(L.isHemisphereLight){let J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(ee),J.groundColor.copy(L.groundColor).multiplyScalar(ee),n.hemi[p]=J,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=m;let O=n.hash;(O.directionalLength!==d||O.pointLength!==_||O.spotLength!==y||O.rectAreaLength!==g||O.hemiLength!==p||O.numDirectionalShadows!==R||O.numPointShadows!==T||O.numSpotShadows!==v||O.numSpotMaps!==P||O.numLightProbes!==N)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=N,O.directionalLength=d,O.pointLength=_,O.spotLength=y,O.rectAreaLength=g,O.hemiLength=p,O.numDirectionalShadows=R,O.numPointShadows=T,O.numSpotShadows=v,O.numSpotMaps=P,O.numLightProbes=N,n.version=Q_++)}function c(l,u){let f=0,m=0,d=0,_=0,y=0,g=u.matrixWorldInverse;for(let p=0,R=l.length;p<R;p++){let T=l[p];if(T.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(T.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(T.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(T.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){let v=n.point[m];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(g),m++}else if(T.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:n}}function rd(i){let e=new tx(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function nx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new rd(i),e.set(s,[a])):r>=o.length?(a=new rd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
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
}`;function rx(i,e,t){let n=new Us,s=new me,r=new me,o=new Bt,a=new sa({depthPacking:xu}),c=new ra,l={},u=t.maxTextureSize,f={[fi]:hn,[hn]:fi,[Cn]:Cn},m=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:ix,fragmentShader:sx}),d=m.clone();d.defines.HORIZONTAL_PASS=1;let _=new At;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Mt(_,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let p=this.type;this.render=function(I,N,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(mi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let ee=p!==ti&&this.type===ti,te=p===ti&&this.type!==ti;for(let q=0,J=I.length;q<J;q++){let _e=I[q],$=_e.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",_e,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let Ae=$.getFrameExtents();if(s.multiply(Ae),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Ae.x),s.x=r.x*Ae.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Ae.y),s.y=r.y*Ae.y,$.mapSize.y=r.y)),$.map===null||ee===!0||te===!0){let Ne=this.type!==ti?{minFilter:fn,magFilter:fn}:{};$.map!==null&&$.map.dispose(),$.map=new Jn(s.x,s.y,Ne),$.map.texture.name=_e.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let De=$.getViewportCount();for(let Ne=0;Ne<De;Ne++){let Qe=$.getViewport(Ne);o.set(r.x*Qe.x,r.y*Qe.y,r.x*Qe.z,r.y*Qe.w),V.viewport(o),$.updateMatrices(_e,Ne),n=$.getFrustum(),v(N,O,$.camera,_e,this.type)}$.isPointLightShadow!==!0&&this.type===ti&&R($,O),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,S,L)};function R(I,N){let O=e.update(y);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Jn(s.x,s.y)),m.uniforms.shadow_pass.value=I.map.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(N,null,O,m,y,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(N,null,O,d,y,null)}function T(I,N,O,w){let S=null,L=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(L!==void 0)S=L;else if(S=O.isPointLight===!0?c:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let V=S.uuid,ee=N.uuid,te=l[V];te===void 0&&(te={},l[V]=te);let q=te[ee];q===void 0&&(q=S.clone(),te[ee]=q,N.addEventListener("dispose",P)),S=q}if(S.visible=N.visible,S.wireframe=N.wireframe,w===ti?S.side=N.shadowSide!==null?N.shadowSide:N.side:S.side=N.shadowSide!==null?N.shadowSide:f[N.side],S.alphaMap=N.alphaMap,S.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,S.map=N.map,S.clipShadows=N.clipShadows,S.clippingPlanes=N.clippingPlanes,S.clipIntersection=N.clipIntersection,S.displacementMap=N.displacementMap,S.displacementScale=N.displacementScale,S.displacementBias=N.displacementBias,S.wireframeLinewidth=N.wireframeLinewidth,S.linewidth=N.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let V=i.properties.get(S);V.light=O}return S}function v(I,N,O,w,S){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===ti)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);let ee=e.update(I),te=I.material;if(Array.isArray(te)){let q=ee.groups;for(let J=0,_e=q.length;J<_e;J++){let $=q[J],Ae=te[$.materialIndex];if(Ae&&Ae.visible){let De=T(I,Ae,w,S);I.onBeforeShadow(i,I,N,O,ee,De,$),i.renderBufferDirect(O,null,ee,De,I,$),I.onAfterShadow(i,I,N,O,ee,De,$)}}}else if(te.visible){let q=T(I,te,w,S);I.onBeforeShadow(i,I,N,O,ee,q,null),i.renderBufferDirect(O,null,ee,q,I,null),I.onAfterShadow(i,I,N,O,ee,q,null)}}let V=I.children;for(let ee=0,te=V.length;ee<te;ee++)v(V[ee],N,O,w,S)}function P(I){I.target.removeEventListener("dispose",P);for(let O in l){let w=l[O],S=I.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var ox={[_a]:xa,[ya]:Sa,[va]:Ea,[Wi]:Ma,[xa]:_a,[Sa]:ya,[Ea]:va,[Ma]:Wi};function ax(i,e){function t(){let F=!1,Ee=new Bt,Re=null,He=new Bt(0,0,0,0);return{setMask:function(se){Re!==se&&!F&&(i.colorMask(se,se,se,se),Re=se)},setLocked:function(se){F=se},setClear:function(se,ce,be,Q,nt){nt===!0&&(se*=Q,ce*=Q,be*=Q),Ee.set(se,ce,be,Q),He.equals(Ee)===!1&&(i.clearColor(se,ce,be,Q),He.copy(Ee))},reset:function(){F=!1,Re=null,He.set(-1,0,0,0)}}}function n(){let F=!1,Ee=!1,Re=null,He=null,se=null;return{setReversed:function(ce){if(Ee!==ce){let be=e.get("EXT_clip_control");ce?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Ee=ce;let Q=se;se=null,this.setClear(Q)}},getReversed:function(){return Ee},setTest:function(ce){ce?Z(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(ce){Re!==ce&&!F&&(i.depthMask(ce),Re=ce)},setFunc:function(ce){if(Ee&&(ce=ox[ce]),He!==ce){switch(ce){case _a:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}He=ce}},setLocked:function(ce){F=ce},setClear:function(ce){se!==ce&&(Ee&&(ce=1-ce),i.clearDepth(ce),se=ce)},reset:function(){F=!1,Re=null,He=null,se=null,Ee=!1}}}function s(){let F=!1,Ee=null,Re=null,He=null,se=null,ce=null,be=null,Q=null,nt=null;return{setTest:function(Ve){F||(Ve?Z(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(Ve){Ee!==Ve&&!F&&(i.stencilMask(Ve),Ee=Ve)},setFunc:function(Ve,at,Ht){(Re!==Ve||He!==at||se!==Ht)&&(i.stencilFunc(Ve,at,Ht),Re=Ve,He=at,se=Ht)},setOp:function(Ve,at,Ht){(ce!==Ve||be!==at||Q!==Ht)&&(i.stencilOp(Ve,at,Ht),ce=Ve,be=at,Q=Ht)},setLocked:function(Ve){F=Ve},setClear:function(Ve){nt!==Ve&&(i.clearStencil(Ve),nt=Ve)},reset:function(){F=!1,Ee=null,Re=null,He=null,se=null,ce=null,be=null,Q=null,nt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},m=new WeakMap,d=[],_=null,y=!1,g=null,p=null,R=null,T=null,v=null,P=null,I=null,N=new mt(0,0,0),O=0,w=!1,S=null,L=null,V=null,ee=null,te=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,_e=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec($)[1]),J=_e>=1):$.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=_e>=2);let Ae=null,De={},Ne=i.getParameter(i.SCISSOR_BOX),Qe=i.getParameter(i.VIEWPORT),st=new Bt().fromArray(Ne),rt=new Bt().fromArray(Qe);function pt(F,Ee,Re,He){let se=new Uint8Array(4),ce=i.createTexture();i.bindTexture(F,ce),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<Re;be++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,He,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(Ee+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ce}let le={};le[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Wi),ie(!1),re(rc),Z(i.CULL_FACE),ge(mi);function Z(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function Be(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Xe(F,Ee){return f[F]!==Ee?(i.bindFramebuffer(F,Ee),f[F]=Ee,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ee),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Ce(F,Ee){let Re=d,He=!1;if(F){Re=m.get(Ee),Re===void 0&&(Re=[],m.set(Ee,Re));let se=F.textures;if(Re.length!==se.length||Re[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,be=se.length;ce<be;ce++)Re[ce]=i.COLOR_ATTACHMENT0+ce;Re.length=se.length,He=!0}}else Re[0]!==i.BACK&&(Re[0]=i.BACK,He=!0);He&&i.drawBuffers(Re)}function tt(F){return _!==F?(i.useProgram(F),_=F,!0):!1}let vt={[Ai]:i.FUNC_ADD,[Wh]:i.FUNC_SUBTRACT,[Xh]:i.FUNC_REVERSE_SUBTRACT};vt[Yh]=i.MIN,vt[qh]=i.MAX;let D={[Zh]:i.ZERO,[Kh]:i.ONE,[Jh]:i.SRC_COLOR,[Uo]:i.SRC_ALPHA,[nu]:i.SRC_ALPHA_SATURATE,[eu]:i.DST_COLOR,[jh]:i.DST_ALPHA,[$h]:i.ONE_MINUS_SRC_COLOR,[Fo]:i.ONE_MINUS_SRC_ALPHA,[tu]:i.ONE_MINUS_DST_COLOR,[Qh]:i.ONE_MINUS_DST_ALPHA,[iu]:i.CONSTANT_COLOR,[su]:i.ONE_MINUS_CONSTANT_COLOR,[ru]:i.CONSTANT_ALPHA,[ou]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(F,Ee,Re,He,se,ce,be,Q,nt,Ve){if(F===mi){y===!0&&(Be(i.BLEND),y=!1);return}if(y===!1&&(Z(i.BLEND),y=!0),F!==Gh){if(F!==g||Ve!==w){if((p!==Ai||v!==Ai)&&(i.blendEquation(i.FUNC_ADD),p=Ai,v=Ai),Ve)switch(F){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFunc(i.ONE,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case lc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}R=null,T=null,P=null,I=null,N.set(0,0,0),O=0,g=F,w=Ve}return}se=se||Ee,ce=ce||Re,be=be||He,(Ee!==p||se!==v)&&(i.blendEquationSeparate(vt[Ee],vt[se]),p=Ee,v=se),(Re!==R||He!==T||ce!==P||be!==I)&&(i.blendFuncSeparate(D[Re],D[He],D[ce],D[be]),R=Re,T=He,P=ce,I=be),(Q.equals(N)===!1||nt!==O)&&(i.blendColor(Q.r,Q.g,Q.b,nt),N.copy(Q),O=nt),g=F,w=!1}function he(F,Ee){F.side===Cn?Be(i.CULL_FACE):Z(i.CULL_FACE);let Re=F.side===hn;Ee&&(Re=!Re),ie(Re),F.blending===Gi&&F.transparent===!1?ge(mi):ge(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let He=F.stencilWrite;a.setTest(He),He&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Me(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function re(F){F!==Hh?(Z(i.CULL_FACE),F!==L&&(F===rc?i.cullFace(i.BACK):F===kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),L=F}function we(F){F!==V&&(J&&i.lineWidth(F),V=F)}function Me(F,Ee,Re){F?(Z(i.POLYGON_OFFSET_FILL),(ee!==Ee||te!==Re)&&(i.polygonOffset(Ee,Re),ee=Ee,te=Re)):Be(i.POLYGON_OFFSET_FILL)}function Se(F){F?Z(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function Ke(F){F===void 0&&(F=i.TEXTURE0+q-1),Ae!==F&&(i.activeTexture(F),Ae=F)}function $e(F,Ee,Re){Re===void 0&&(Ae===null?Re=i.TEXTURE0+q-1:Re=Ae);let He=De[Re];He===void 0&&(He={type:void 0,texture:void 0},De[Re]=He),(He.type!==F||He.texture!==Ee)&&(Ae!==Re&&(i.activeTexture(Re),Ae=Re),i.bindTexture(F,Ee||le[F]),He.type=F,He.texture=Ee)}function A(){let F=De[Ae];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(F){st.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),st.copy(F))}function Je(F){rt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),rt.copy(F))}function We(F,Ee){let Re=l.get(Ee);Re===void 0&&(Re=new WeakMap,l.set(Ee,Re));let He=Re.get(F);He===void 0&&(He=i.getUniformBlockIndex(Ee,F.name),Re.set(F,He))}function Ie(F,Ee){let He=l.get(Ee).get(F);c.get(Ee)!==He&&(i.uniformBlockBinding(Ee,He,F.__bindingPointIndex),c.set(Ee,He))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Ae=null,De={},f={},m=new WeakMap,d=[],_=null,y=!1,g=null,p=null,R=null,T=null,v=null,P=null,I=null,N=new mt(0,0,0),O=0,w=!1,S=null,L=null,V=null,ee=null,te=null,st.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:Be,bindFramebuffer:Xe,drawBuffers:Ce,useProgram:tt,setBlending:ge,setMaterial:he,setFlipSided:ie,setCullFace:re,setLineWidth:we,setPolygonOffset:Me,setScissorTest:Se,activeTexture:Ke,bindTexture:$e,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:H,texImage2D:ze,texImage3D:xe,updateUBOMapping:We,uniformBlockBinding:Ie,texStorage2D:ye,texStorage3D:Pe,texSubImage2D:j,texSubImage3D:ae,compressedTexSubImage2D:ne,compressedTexSubImage3D:Ge,scissor:Ue,viewport:Je,reset:ot}}function lx(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,u=new WeakMap,f,m=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return d?new OffscreenCanvas(A,x):yr("canvas")}function y(A,x,H){let j=1,ae=$e(A);if((ae.width>H||ae.height>H)&&(j=H/Math.max(ae.width,ae.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ne=Math.floor(j*ae.width),Ge=Math.floor(j*ae.height);f===void 0&&(f=_(ne,Ge));let ye=x?_(ne,Ge):f;return ye.width=ne,ye.height=Ge,ye.getContext("2d").drawImage(A,0,0,ne,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ne+"x"+Ge+")."),ye}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,x,H,j,ae=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=x;if(x===i.RED&&(H===i.FLOAT&&(ne=i.R32F),H===i.HALF_FLOAT&&(ne=i.R16F),H===i.UNSIGNED_BYTE&&(ne=i.R8)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.R8UI),H===i.UNSIGNED_SHORT&&(ne=i.R16UI),H===i.UNSIGNED_INT&&(ne=i.R32UI),H===i.BYTE&&(ne=i.R8I),H===i.SHORT&&(ne=i.R16I),H===i.INT&&(ne=i.R32I)),x===i.RG&&(H===i.FLOAT&&(ne=i.RG32F),H===i.HALF_FLOAT&&(ne=i.RG16F),H===i.UNSIGNED_BYTE&&(ne=i.RG8)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RG8UI),H===i.UNSIGNED_SHORT&&(ne=i.RG16UI),H===i.UNSIGNED_INT&&(ne=i.RG32UI),H===i.BYTE&&(ne=i.RG8I),H===i.SHORT&&(ne=i.RG16I),H===i.INT&&(ne=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),H===i.UNSIGNED_INT&&(ne=i.RGB32UI),H===i.BYTE&&(ne=i.RGB8I),H===i.SHORT&&(ne=i.RGB16I),H===i.INT&&(ne=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),H===i.UNSIGNED_INT&&(ne=i.RGBA32UI),H===i.BYTE&&(ne=i.RGBA8I),H===i.SHORT&&(ne=i.RGBA16I),H===i.INT&&(ne=i.RGBA32I)),x===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),x===i.RGBA){let Ge=ae?_r:xt.getTransfer(j);H===i.FLOAT&&(ne=i.RGBA32F),H===i.HALF_FLOAT&&(ne=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ne=Ge===wt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(A,x){let H;return A?x===null||x===Ni||x===Ys?H=i.DEPTH24_STENCIL8:x===Wn?H=i.DEPTH32F_STENCIL8:x===Ws&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ni||x===Ys?H=i.DEPTH_COMPONENT24:x===Wn?H=i.DEPTH_COMPONENT32F:x===Ws&&(H=i.DEPTH_COMPONENT16),H}function P(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==fn&&A.minFilter!==zn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function I(A){let x=A.target;x.removeEventListener("dispose",I),O(x),x.isVideoTexture&&u.delete(x)}function N(A){let x=A.target;x.removeEventListener("dispose",N),S(x)}function O(A){let x=n.get(A);if(x.__webglInit===void 0)return;let H=A.source,j=m.get(H);if(j){let ae=j[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(A),Object.keys(j).length===0&&m.delete(H)}n.remove(A)}function w(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let H=A.source,j=m.get(H);delete j[x.__cacheKey],o.memory.textures--}function S(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let ae=0;ae<x.__webglFramebuffer[j].length;ae++)i.deleteFramebuffer(x.__webglFramebuffer[j][ae]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=A.textures;for(let j=0,ae=H.length;j<ae;j++){let ne=n.get(H[j]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(H[j])}n.remove(A)}let L=0;function V(){L=0}function ee(){let A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function te(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function q(A,x){let H=n.get(A);if(A.isVideoTexture&&Se(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(H,A,x);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function J(A,x){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){le(H,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function _e(A,x){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){le(H,A,x);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function $(A,x){let H=n.get(A);if(A.version>0&&H.__version!==A.version){Z(H,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}let Ae={[Oo]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Bo]:i.MIRRORED_REPEAT},De={[fn]:i.NEAREST,[gu]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},Ne={[vu]:i.NEVER,[Tu]:i.ALWAYS,[Mu]:i.LESS,[vc]:i.LEQUAL,[Su]:i.EQUAL,[wu]:i.GEQUAL,[Eu]:i.GREATER,[bu]:i.NOTEQUAL};function Qe(A,x){if(x.type===Wn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===zn||x.magFilter===Ta||x.magFilter===$r||x.magFilter===Li||x.minFilter===zn||x.minFilter===Ta||x.minFilter===$r||x.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ae[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ae[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ae[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,De[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,De[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn||x.minFilter!==$r&&x.minFilter!==Li||x.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function st(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",I));let j=x.source,ae=m.get(j);ae===void 0&&(ae={},m.set(j,ae));let ne=te(x);if(ne!==A.__cacheKey){ae[ne]===void 0&&(ae[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ae[ne].usedTimes++;let Ge=ae[A.__cacheKey];Ge!==void 0&&(ae[A.__cacheKey].usedTimes--,Ge.usedTimes===0&&w(x)),A.__cacheKey=ne,A.__webglTexture=ae[ne].texture}return H}function rt(A,x,H){return Math.floor(Math.floor(A/H)/x)}function pt(A,x,H,j){let ne=A.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,H,j,x.data);else{ne.sort((xe,Ue)=>xe.start-Ue.start);let Ge=0;for(let xe=1;xe<ne.length;xe++){let Ue=ne[Ge],Je=ne[xe],We=Ue.start+Ue.count,Ie=rt(Je.start,x.width,4),ot=rt(Ue.start,x.width,4);Je.start<=We+1&&Ie===ot&&rt(Je.start+Je.count-1,x.width,4)===Ie?Ue.count=Math.max(Ue.count,Je.start+Je.count-Ue.start):(++Ge,ne[Ge]=Je)}ne.length=Ge+1;let ye=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),ze=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let xe=0,Ue=ne.length;xe<Ue;xe++){let Je=ne[xe],We=Math.floor(Je.start/4),Ie=Math.ceil(Je.count/4),ot=We%x.width,F=Math.floor(We/x.width),Ee=Ie,Re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,ot,F,Ee,Re,H,j,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ye),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,ze)}}function le(A,x,H){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let ae=st(A,x),ne=x.source;t.bindTexture(j,A.__webglTexture,i.TEXTURE0+H);let Ge=n.get(ne);if(ne.version!==Ge.__version||ae===!0){t.activeTexture(i.TEXTURE0+H);let ye=xt.getPrimaries(xt.workingColorSpace),Pe=x.colorSpace===_i?null:xt.getPrimaries(x.colorSpace),ze=x.colorSpace===_i||ye===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let xe=y(x.image,!1,s.maxTextureSize);xe=Ke(x,xe);let Ue=r.convert(x.format,x.colorSpace),Je=r.convert(x.type),We=T(x.internalFormat,Ue,Je,x.colorSpace,x.isVideoTexture);Qe(j,x);let Ie,ot=x.mipmaps,F=x.isVideoTexture!==!0,Ee=Ge.__version===void 0||ae===!0,Re=ne.dataReady,He=P(x,xe);if(x.isDepthTexture)We=v(x.format===qs,x.type),Ee&&(F?t.texStorage2D(i.TEXTURE_2D,1,We,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,We,xe.width,xe.height,0,Ue,Je,null));else if(x.isDataTexture)if(ot.length>0){F&&Ee&&t.texStorage2D(i.TEXTURE_2D,He,We,ot[0].width,ot[0].height);for(let se=0,ce=ot.length;se<ce;se++)Ie=ot[se],F?Re&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ie.width,Ie.height,Ue,Je,Ie.data):t.texImage2D(i.TEXTURE_2D,se,We,Ie.width,Ie.height,0,Ue,Je,Ie.data);x.generateMipmaps=!1}else F?(Ee&&t.texStorage2D(i.TEXTURE_2D,He,We,xe.width,xe.height),Re&&pt(x,xe,Ue,Je)):t.texImage2D(i.TEXTURE_2D,0,We,xe.width,xe.height,0,Ue,Je,xe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,We,ot[0].width,ot[0].height,xe.depth);for(let se=0,ce=ot.length;se<ce;se++)if(Ie=ot[se],x.format!==Pn)if(Ue!==null)if(F){if(Re)if(x.layerUpdates.size>0){let be=Rc(Ie.width,Ie.height,x.format,x.type);for(let Q of x.layerUpdates){let nt=Ie.data.subarray(Q*be/Ie.data.BYTES_PER_ELEMENT,(Q+1)*be/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Q,Ie.width,Ie.height,1,Ue,nt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ie.width,Ie.height,xe.depth,Ue,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,We,Ie.width,Ie.height,xe.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ie.width,Ie.height,xe.depth,Ue,Je,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,We,Ie.width,Ie.height,xe.depth,0,Ue,Je,Ie.data)}else{F&&Ee&&t.texStorage2D(i.TEXTURE_2D,He,We,ot[0].width,ot[0].height);for(let se=0,ce=ot.length;se<ce;se++)Ie=ot[se],x.format!==Pn?Ue!==null?F?Re&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,se,We,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Re&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ie.width,Ie.height,Ue,Je,Ie.data):t.texImage2D(i.TEXTURE_2D,se,We,Ie.width,Ie.height,0,Ue,Je,Ie.data)}else if(x.isDataArrayTexture)if(F){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,We,xe.width,xe.height,xe.depth),Re)if(x.layerUpdates.size>0){let se=Rc(xe.width,xe.height,x.format,x.type);for(let ce of x.layerUpdates){let be=xe.data.subarray(ce*se/xe.data.BYTES_PER_ELEMENT,(ce+1)*se/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,xe.width,xe.height,1,Ue,Je,be)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ue,Je,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,xe.width,xe.height,xe.depth,0,Ue,Je,xe.data);else if(x.isData3DTexture)F?(Ee&&t.texStorage3D(i.TEXTURE_3D,He,We,xe.width,xe.height,xe.depth),Re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ue,Je,xe.data)):t.texImage3D(i.TEXTURE_3D,0,We,xe.width,xe.height,xe.depth,0,Ue,Je,xe.data);else if(x.isFramebufferTexture){if(Ee)if(F)t.texStorage2D(i.TEXTURE_2D,He,We,xe.width,xe.height);else{let se=xe.width,ce=xe.height;for(let be=0;be<He;be++)t.texImage2D(i.TEXTURE_2D,be,We,se,ce,0,Ue,Je,null),se>>=1,ce>>=1}}else if(ot.length>0){if(F&&Ee){let se=$e(ot[0]);t.texStorage2D(i.TEXTURE_2D,He,We,se.width,se.height)}for(let se=0,ce=ot.length;se<ce;se++)Ie=ot[se],F?Re&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ue,Je,Ie):t.texImage2D(i.TEXTURE_2D,se,We,Ue,Je,Ie);x.generateMipmaps=!1}else if(F){if(Ee){let se=$e(xe);t.texStorage2D(i.TEXTURE_2D,He,We,se.width,se.height)}Re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ue,Je,xe)}else t.texImage2D(i.TEXTURE_2D,0,We,Ue,Je,xe);g(x)&&p(j),Ge.__version=ne.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Z(A,x,H){if(x.image.length!==6)return;let j=st(A,x),ae=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);let ne=n.get(ae);if(ae.version!==ne.__version||j===!0){t.activeTexture(i.TEXTURE0+H);let Ge=xt.getPrimaries(xt.workingColorSpace),ye=x.colorSpace===_i?null:xt.getPrimaries(x.colorSpace),Pe=x.colorSpace===_i||Ge===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ze=x.isCompressedTexture||x.image[0].isCompressedTexture,xe=x.image[0]&&x.image[0].isDataTexture,Ue=[];for(let ce=0;ce<6;ce++)!ze&&!xe?Ue[ce]=y(x.image[ce],!0,s.maxCubemapSize):Ue[ce]=xe?x.image[ce].image:x.image[ce],Ue[ce]=Ke(x,Ue[ce]);let Je=Ue[0],We=r.convert(x.format,x.colorSpace),Ie=r.convert(x.type),ot=T(x.internalFormat,We,Ie,x.colorSpace),F=x.isVideoTexture!==!0,Ee=ne.__version===void 0||j===!0,Re=ae.dataReady,He=P(x,Je);Qe(i.TEXTURE_CUBE_MAP,x);let se;if(ze){F&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,ot,Je.width,Je.height);for(let ce=0;ce<6;ce++){se=Ue[ce].mipmaps;for(let be=0;be<se.length;be++){let Q=se[be];x.format!==Pn?We!==null?F?Re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be,0,0,Q.width,Q.height,We,Q.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be,ot,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be,0,0,Q.width,Q.height,We,Ie,Q.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be,ot,Q.width,Q.height,0,We,Ie,Q.data)}}}else{if(se=x.mipmaps,F&&Ee){se.length>0&&He++;let ce=$e(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,ot,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(xe){F?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ue[ce].width,Ue[ce].height,We,Ie,Ue[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ot,Ue[ce].width,Ue[ce].height,0,We,Ie,Ue[ce].data);for(let be=0;be<se.length;be++){let nt=se[be].image[ce].image;F?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be+1,0,0,nt.width,nt.height,We,Ie,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be+1,ot,nt.width,nt.height,0,We,Ie,nt.data)}}else{F?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,We,Ie,Ue[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ot,We,Ie,Ue[ce]);for(let be=0;be<se.length;be++){let Q=se[be];F?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be+1,0,0,We,Ie,Q.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be+1,ot,We,Ie,Q.image[ce])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),ne.__version=ae.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Be(A,x,H,j,ae,ne){let Ge=r.convert(H.format,H.colorSpace),ye=r.convert(H.type),Pe=T(H.internalFormat,Ge,ye,H.colorSpace),ze=n.get(x),xe=n.get(H);if(xe.__renderTarget=x,!ze.__hasExternalTextures){let Ue=Math.max(1,x.width>>ne),Je=Math.max(1,x.height>>ne);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ne,Pe,Ue,Je,x.depth,0,Ge,ye,null):t.texImage2D(ae,ne,Pe,Ue,Je,0,Ge,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Me(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ae,xe.__webglTexture,0,we(x)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ae,xe.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(A,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let j=x.depthTexture,ae=j&&j.isDepthTexture?j.type:null,ne=v(x.stencilBuffer,ae),Ge=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=we(x);Me(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ne,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,A)}else{let j=x.textures;for(let ae=0;ae<j.length;ae++){let ne=j[ae],Ge=r.convert(ne.format,ne.colorSpace),ye=r.convert(ne.type),Pe=T(ne.internalFormat,Ge,ye,ne.colorSpace),ze=we(x);H&&Me(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Pe,x.width,x.height):Me(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,Pe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);let ae=j.__webglTexture,ne=we(x);if(x.depthTexture.format===Rs)Me(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(x.depthTexture.format===qs)Me(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function tt(A){let x=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let ae=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",ae)};j.addEventListener("dispose",ae),x.__depthDisposeCallback=ae}x.__boundDepthTexture=j}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let j=A.texture.mipmaps;j&&j.length>0?Ce(x.__webglFramebuffer[0],A):Ce(x.__webglFramebuffer,A)}else if(H){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),Xe(x.__webglDepthbuffer[j],A,!1);else{let ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ne)}}else{let j=A.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Xe(x.__webglDepthbuffer,A,!1);else{let ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(A,x,H){let j=n.get(A);x!==void 0&&Be(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&tt(A)}function D(A){let x=A.texture,H=n.get(A),j=n.get(x);A.addEventListener("dispose",N);let ae=A.textures,ne=A.isWebGLCubeRenderTarget===!0,Ge=ae.length>1;if(Ge||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,o.memory.textures++),ne){H.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[ye]=[];for(let Pe=0;Pe<x.mipmaps.length;Pe++)H.__webglFramebuffer[ye][Pe]=i.createFramebuffer()}else H.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let ye=0;ye<x.mipmaps.length;ye++)H.__webglFramebuffer[ye]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let ye=0,Pe=ae.length;ye<Pe;ye++){let ze=n.get(ae[ye]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Me(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ye=0;ye<ae.length;ye++){let Pe=ae[ye];H.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ye]);let ze=r.convert(Pe.format,Pe.colorSpace),xe=r.convert(Pe.type),Ue=T(Pe.internalFormat,ze,xe,Pe.colorSpace,A.isXRRenderTarget===!0),Je=we(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,H.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,x);for(let ye=0;ye<6;ye++)if(x.mipmaps&&x.mipmaps.length>0)for(let Pe=0;Pe<x.mipmaps.length;Pe++)Be(H.__webglFramebuffer[ye][Pe],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe);else Be(H.__webglFramebuffer[ye],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);g(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let ye=0,Pe=ae.length;ye<Pe;ye++){let ze=ae[ye],xe=n.get(ze),Ue=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ue,xe.__webglTexture),Qe(Ue,ze),Be(H.__webglFramebuffer,A,ze,i.COLOR_ATTACHMENT0+ye,Ue,0),g(ze)&&p(Ue)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ye=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,j.__webglTexture),Qe(ye,x),x.mipmaps&&x.mipmaps.length>0)for(let Pe=0;Pe<x.mipmaps.length;Pe++)Be(H.__webglFramebuffer[Pe],A,x,i.COLOR_ATTACHMENT0,ye,Pe);else Be(H.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ye,0);g(x)&&p(ye),t.unbindTexture()}A.depthBuffer&&tt(A)}function ge(A){let x=A.textures;for(let H=0,j=x.length;H<j;H++){let ae=x[H];if(g(ae)){let ne=R(A),Ge=n.get(ae).__webglTexture;t.bindTexture(ne,Ge),p(ne),t.unbindTexture()}}}let he=[],ie=[];function re(A){if(A.samples>0){if(Me(A)===!1){let x=A.textures,H=A.width,j=A.height,ae=i.COLOR_BUFFER_BIT,ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(A),ye=x.length>1;if(ye)for(let ze=0;ze<x.length;ze++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);let Pe=A.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ze=0;ze<x.length;ze++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);let xe=n.get(x[ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,ae,i.NEAREST),c===!0&&(he.length=0,ie.length=0,he.push(i.COLOR_ATTACHMENT0+ze),A.depthBuffer&&A.resolveDepthBuffer===!1&&(he.push(ne),ie.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let ze=0;ze<x.length;ze++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);let xe=n.get(x[ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function we(A){return Math.min(s.maxSamples,A.samples)}function Me(A){let x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Se(A){let x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Ke(A,x){let H=A.colorSpace,j=A.format,ae=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Xi&&H!==_i&&(xt.getTransfer(H)===wt?(j!==Pn||ae!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function $e(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=_e,this.setTextureCube=$,this.rebindTextures=vt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=Me}function cx(i,e){function t(n,s=_i){let r,o=xt.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dc)return i.BYTE;if(n===fc)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===Aa)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Xs)return i.HALF_FLOAT;if(n===gc)return i.ALPHA;if(n===_c)return i.RGB;if(n===Pn)return i.RGBA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===qs)return i.DEPTH_STENCIL;if(n===Pa)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===xc)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===jr||n===Qr||n===eo||n===to)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Ua||n===Fa||n===Oa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===za||n===Ha)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ba||n===za)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===Va||n===Ga||n===Wa||n===Xa||n===Ya||n===qa||n===Za||n===Ka||n===Ja||n===$a||n===ja||n===Qa||n===el)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tl||n===nl||n===il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===tl)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===rl||n===ol||n===al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ux=`
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

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ir(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kn({vertexShader:hx,fragmentShader:ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vc=class extends Kn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,m=null,d=null,_=null,y=typeof XRWebGLBinding<"u",g=new kc,p={},R=t.getContextAttributes(),T=null,v=null,P=[],I=[],N=new me,O=null,w=new Jt;w.viewport=new Bt;let S=new Jt;S.viewport=new Bt;let L=[w,S],V=new ga,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Z=P[le];return Z===void 0&&(Z=new Ds,P[le]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(le){let Z=P[le];return Z===void 0&&(Z=new Ds,P[le]=Z),Z.getGripSpace()},this.getHand=function(le){let Z=P[le];return Z===void 0&&(Z=new Ds,P[le]=Z),Z.getHandSpace()};function q(le){let Z=I.indexOf(le.inputSource);if(Z===-1)return;let Be=P[Z];Be!==void 0&&(Be.update(le.inputSource,le.frame,l||o),Be.dispatchEvent({type:le.type,data:le.inputSource}))}function J(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",_e);for(let le=0;le<P.length;le++){let Z=I[le];Z!==null&&(I[le]=null,P[le].disconnect(Z))}ee=null,te=null,g.reset();for(let le in p)delete p[le];e.setRenderTarget(T),d=null,m=null,f=null,s=null,v=null,pt.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(le){l=le},this.getBaseLayer=function(){return m!==null?m:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",J),s.addEventListener("inputsourceschange",_e),R.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(N),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Be=null,Xe=null,Ce=null;R.depth&&(Ce=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Be=R.stencil?qs:Rs,Xe=R.stencil?Ys:Ni);let tt={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};f=this.getBinding(),m=f.createProjectionLayer(tt),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),v=new Jn(m.textureWidth,m.textureHeight,{format:Pn,type:Gn,depthTexture:new Pr(m.textureWidth,m.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Be),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{let Be={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Be),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Jn(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function _e(le){for(let Z=0;Z<le.removed.length;Z++){let Be=le.removed[Z],Xe=I.indexOf(Be);Xe>=0&&(I[Xe]=null,P[Xe].disconnect(Be))}for(let Z=0;Z<le.added.length;Z++){let Be=le.added[Z],Xe=I.indexOf(Be);if(Xe===-1){for(let tt=0;tt<P.length;tt++)if(tt>=I.length){I.push(Be),Xe=tt;break}else if(I[tt]===null){I[tt]=Be,Xe=tt;break}if(Xe===-1)break}let Ce=P[Xe];Ce&&Ce.connect(Be)}}let $=new C,Ae=new C;function De(le,Z,Be){$.setFromMatrixPosition(Z.matrixWorld),Ae.setFromMatrixPosition(Be.matrixWorld);let Xe=$.distanceTo(Ae),Ce=Z.projectionMatrix.elements,tt=Be.projectionMatrix.elements,vt=Ce[14]/(Ce[10]-1),D=Ce[14]/(Ce[10]+1),ge=(Ce[9]+1)/Ce[5],he=(Ce[9]-1)/Ce[5],ie=(Ce[8]-1)/Ce[0],re=(tt[8]+1)/tt[0],we=vt*ie,Me=vt*re,Se=Xe/(-ie+re),Ke=Se*-ie;if(Z.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Ke),le.translateZ(Se),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Ce[10]===-1)le.projectionMatrix.copy(Z.projectionMatrix),le.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let $e=vt+Se,A=D+Se,x=we-Ke,H=Me+(Xe-Ke),j=ge*D/A*$e,ae=he*D/A*$e;le.projectionMatrix.makePerspective(x,H,j,ae,$e,A),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Ne(le,Z){Z===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Z.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let Z=le.near,Be=le.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(Be=g.depthFar)),V.near=S.near=w.near=Z,V.far=S.far=w.far=Be,(ee!==V.near||te!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),ee=V.near,te=V.far),V.layers.mask=le.layers.mask|6,w.layers.mask=V.layers.mask&3,S.layers.mask=V.layers.mask&5;let Xe=le.parent,Ce=V.cameras;Ne(V,Xe);for(let tt=0;tt<Ce.length;tt++)Ne(Ce[tt],Xe);Ce.length===2?De(V,w,S):V.projectionMatrix.copy(w.projectionMatrix),Qe(le,V,Xe)};function Qe(le,Z,Be){Be===null?le.matrix.copy(Z.matrixWorld):(le.matrix.copy(Be.matrixWorld),le.matrix.invert(),le.matrix.multiply(Z.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Z.projectionMatrix),le.projectionMatrixInverse.copy(Z.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Yi*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(m===null&&d===null))return c},this.setFoveation=function(le){c=le,m!==null&&(m.fixedFoveation=le),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=le)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(le){return p[le]};let st=null;function rt(le,Z){if(u=Z.getViewerPose(l||o),_=Z,u!==null){let Be=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Xe=!1;Be.length!==V.cameras.length&&(V.cameras.length=0,Xe=!0);for(let D=0;D<Be.length;D++){let ge=Be[D],he=null;if(d!==null)he=d.getViewport(ge);else{let re=f.getViewSubImage(m,ge);he=re.viewport,D===0&&(e.setRenderTargetTextures(v,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(v))}let ie=L[D];ie===void 0&&(ie=new Jt,ie.layers.enable(D),ie.viewport=new Bt,L[D]=ie),ie.matrix.fromArray(ge.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ge.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(he.x,he.y,he.width,he.height),D===0&&(V.matrix.copy(ie.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Xe===!0&&V.cameras.push(ie)}let Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let D=f.getDepthInformation(Be[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(Ce&&Ce.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let D=0;D<Be.length;D++){let ge=Be[D].camera;if(ge){let he=p[ge];he||(he=new Ir,p[ge]=he);let ie=f.getCameraImage(ge);he.sourceTexture=ie}}}}for(let Be=0;Be<P.length;Be++){let Xe=I[Be],Ce=P[Be];Xe!==null&&Ce!==void 0&&Ce.update(Xe,Z,l||o)}st&&st(le,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}let pt=new od;pt.setAnimationLoop(rt),this.setAnimationLoop=function(le){st=le},this.dispose=function(){}}},ts=new vn,dx=new Ct;function fx(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,bc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,R,T,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),m(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,R,T):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===hn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===hn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let R=e.get(p),T=R.envMap,v=R.envMapRotation;T&&(g.envMap.value=T,ts.copy(v),ts.x*=-1,ts.y*=-1,ts.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),g.envMapRotation.value.setFromMatrix4(dx.makeRotationFromEuler(ts)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,R,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*R,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function m(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,R){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let R=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function px(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,T){let v=T.program;n.uniformBlockBinding(R,v)}function l(R,T){let v=s[R.id];v===void 0&&(_(R),v=u(R),s[R.id]=v,R.addEventListener("dispose",g));let P=T.program;n.updateUBOMapping(R,P);let I=e.render.frame;r[R.id]!==I&&(m(R),r[R.id]=I)}function u(R){let T=f();R.__bindingPointIndex=T;let v=i.createBuffer(),P=R.__size,I=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,v),v}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){let T=s[R.id],v=R.uniforms,P=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let I=0,N=v.length;I<N;I++){let O=Array.isArray(v[I])?v[I]:[v[I]];for(let w=0,S=O.length;w<S;w++){let L=O[w];if(d(L,I,w,P)===!0){let V=L.__offset,ee=Array.isArray(L.value)?L.value:[L.value],te=0;for(let q=0;q<ee.length;q++){let J=ee[q],_e=y(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,V+te,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,te),te+=_e.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(R,T,v,P){let I=R.value,N=T+"_"+v;if(P[N]===void 0)return typeof I=="number"||typeof I=="boolean"?P[N]=I:P[N]=I.clone(),!0;{let O=P[N];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return P[N]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function _(R){let T=R.uniforms,v=0,P=16;for(let N=0,O=T.length;N<O;N++){let w=Array.isArray(T[N])?T[N]:[T[N]];for(let S=0,L=w.length;S<L;S++){let V=w[S],ee=Array.isArray(V.value)?V.value:[V.value];for(let te=0,q=ee.length;te<q;te++){let J=ee[te],_e=y(J),$=v%P,Ae=$%_e.boundary,De=$+Ae;v+=Ae,De!==0&&P-De<_e.storage&&(v+=P-De),V.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=_e.storage}}}let I=v%P;return I>0&&(v+=P-I),R.__size=v,R.__cache={},this}function y(R){let T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function g(R){let T=R.target;T.removeEventListener("dispose",g);let v=o.indexOf(T.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var dl=class{constructor(e={}){let{canvas:t=Au(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let _=new Uint32Array(4),y=new Int32Array(4),g=null,p=null,R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,P=!1;this._outputColorSpace=qt;let I=0,N=0,O=null,w=-1,S=null,L=new Bt,V=new Bt,ee=null,te=new mt(0),q=0,J=t.width,_e=t.height,$=1,Ae=null,De=null,Ne=new Bt(0,0,J,_e),Qe=new Bt(0,0,J,_e),st=!1,rt=new Us,pt=!1,le=!1,Z=new Ct,Be=new C,Xe=new Bt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function vt(){return O===null?$:1}let D=n;function ge(E,B){return t.getContext(E,B)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",se,!1),D===null){let B="webgl2";if(D=ge(B,E),D===null)throw ge(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let he,ie,re,we,Me,Se,Ke,$e,A,x,H,j,ae,ne,Ge,ye,Pe,ze,xe,Ue,Je,We,Ie,ot;function F(){he=new Dg(D),he.init(),We=new cx(D,he),ie=new wg(D,he,e,We),re=new ax(D,he),ie.reversedDepthBuffer&&m&&re.buffers.depth.setReversed(!0),we=new Ug(D),Me=new Z_,Se=new lx(D,he,re,Me,ie,We,we),Ke=new Ag(v),$e=new Ig(v),A=new kf(D),Ie=new Eg(D,A),x=new Lg(D,A,we,Ie),H=new Og(D,x,A,we),xe=new Fg(D,ie,Se),ye=new Tg(Me),j=new q_(v,Ke,$e,he,ie,Ie,ye),ae=new fx(v,Me),ne=new J_,Ge=new nx(he),ze=new Sg(v,Ke,$e,re,H,d,c),Pe=new rx(v,H,ie),ot=new px(D,we,ie,re),Ue=new bg(D,he,we),Je=new Ng(D,he,we),we.programs=j.programs,v.capabilities=ie,v.extensions=he,v.properties=Me,v.renderLists=ne,v.shadowMap=Pe,v.state=re,v.info=we}F();let Ee=new Vc(v,D);this.xr=Ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(J,_e,!1))},this.getSize=function(E){return E.set(J,_e)},this.setSize=function(E,B,W=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,_e=B,t.width=Math.floor(E*$),t.height=Math.floor(B*$),W===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(J*$,_e*$).floor()},this.setDrawingBufferSize=function(E,B,W){J=E,_e=B,$=W,t.width=Math.floor(E*W),t.height=Math.floor(B*W),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(Ne)},this.setViewport=function(E,B,W,K){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,B,W,K),re.viewport(L.copy(Ne).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(Qe)},this.setScissor=function(E,B,W,K){E.isVector4?Qe.set(E.x,E.y,E.z,E.w):Qe.set(E,B,W,K),re.scissor(V.copy(Qe).multiplyScalar($).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(E){re.setScissorTest(st=E)},this.setOpaqueSort=function(E){Ae=E},this.setTransparentSort=function(E){De=E},this.getClearColor=function(E){return E.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,W=!0){let K=0;if(E){let z=!1;if(O!==null){let de=O.texture.format;z=de===La||de===Da||de===Ia}if(z){let de=O.texture.type,pe=de===Gn||de===Ni||de===Ws||de===Ys||de===Ra||de===Ca,Oe=ze.getClearColor(),Fe=ze.getClearAlpha(),ke=Oe.r,et=Oe.g,qe=Oe.b;pe?(_[0]=ke,_[1]=et,_[2]=qe,_[3]=Fe,D.clearBufferuiv(D.COLOR,0,_)):(y[0]=ke,y[1]=et,y[2]=qe,y[3]=Fe,D.clearBufferiv(D.COLOR,0,y))}else K|=D.COLOR_BUFFER_BIT}B&&(K|=D.DEPTH_BUFFER_BIT),W&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ze.dispose(),ne.dispose(),Ge.dispose(),Me.dispose(),Ke.dispose(),$e.dispose(),H.dispose(),Ie.dispose(),ot.dispose(),j.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ht),Ee.removeEventListener("sessionend",ss),In.stop()};function Re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let E=we.autoReset,B=Pe.enabled,W=Pe.autoUpdate,K=Pe.needsUpdate,z=Pe.type;F(),we.autoReset=E,Pe.enabled=B,Pe.autoUpdate=W,Pe.needsUpdate=K,Pe.type=z}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ce(E){let B=E.target;B.removeEventListener("dispose",ce),be(B)}function be(E){Q(E),Me.remove(E)}function Q(E){let B=Me.get(E).programs;B!==void 0&&(B.forEach(function(W){j.releaseProgram(W)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,W,K,z,de){B===null&&(B=Ce);let pe=z.isMesh&&z.matrixWorld.determinant()<0,Oe=io(E,B,W,K,z);re.setMaterial(K,pe);let Fe=W.index,ke=1;if(K.wireframe===!0){if(Fe=x.getWireframeAttribute(W),Fe===void 0)return;ke=2}let et=W.drawRange,qe=W.attributes.position,ut=et.start*ke,yt=(et.start+et.count)*ke;de!==null&&(ut=Math.max(ut,de.start*ke),yt=Math.min(yt,(de.start+de.count)*ke)),Fe!==null?(ut=Math.max(ut,0),yt=Math.min(yt,Fe.count)):qe!=null&&(ut=Math.max(ut,0),yt=Math.min(yt,qe.count));let Dt=yt-ut;if(Dt<0||Dt===1/0)return;Ie.setup(z,K,Oe,W,Fe);let Rt,St=Ue;if(Fe!==null&&(Rt=A.get(Fe),St=Je,St.setIndex(Rt)),z.isMesh)K.wireframe===!0?(re.setLineWidth(K.wireframeLinewidth*vt()),St.setMode(D.LINES)):St.setMode(D.TRIANGLES);else if(z.isLine){let Ze=K.linewidth;Ze===void 0&&(Ze=1),re.setLineWidth(Ze*vt()),z.isLineSegments?St.setMode(D.LINES):z.isLineLoop?St.setMode(D.LINE_LOOP):St.setMode(D.LINE_STRIP)}else z.isPoints?St.setMode(D.POINTS):z.isSprite&&St.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))St.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ze=z._multiDrawStarts,It=z._multiDrawCounts,gt=z._multiDrawCount,$t=Fe?A.get(Fe).bytesPerElement:1,Zt=Me.get(K).currentProgram.getUniforms();for(let Et=0;Et<gt;Et++)Zt.setValue(D,"_gl_DrawID",Et),St.render(Ze[Et]/$t,It[Et])}else if(z.isInstancedMesh)St.renderInstances(ut,Dt,z.count);else if(W.isInstancedBufferGeometry){let Ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,It=Math.min(W.instanceCount,Ze);St.renderInstances(ut,Dt,It)}else St.render(ut,Dt)};function nt(E,B,W){E.transparent===!0&&E.side===Cn&&E.forceSinglePass===!1?(E.side=hn,E.needsUpdate=!0,un(E,B,W),E.side=fi,E.needsUpdate=!0,un(E,B,W),E.side=Cn):un(E,B,W)}this.compile=function(E,B,W=null){W===null&&(W=E),p=Ge.get(W),p.init(B),T.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let K=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let de=z.material;if(de)if(Array.isArray(de))for(let pe=0;pe<de.length;pe++){let Oe=de[pe];nt(Oe,W,z),K.add(Oe)}else nt(de,W,z),K.add(de)}),p=T.pop(),K},this.compileAsync=function(E,B,W=null){let K=this.compile(E,B,W);return new Promise(z=>{function de(){if(K.forEach(function(pe){Me.get(pe).currentProgram.isReady()&&K.delete(pe)}),K.size===0){z(E);return}setTimeout(de,10)}he.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ve=null;function at(E){Ve&&Ve(E)}function Ht(){In.stop()}function ss(){In.start()}let In=new od;In.setAnimationLoop(at),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(E){Ve=E,Ee.setAnimationLoop(E),E===null?In.stop():In.start()},Ee.addEventListener("sessionstart",Ht),Ee.addEventListener("sessionend",ss),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(B),B=Ee.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,O),p=Ge.get(E,T.length),p.init(B),T.push(p),Z.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),rt.setFromProjectionMatrix(Z,Bn,B.reversedDepth),le=this.localClippingEnabled,pt=ye.init(this.clippingPlanes,le),g=ne.get(E,R.length),g.init(),R.push(g),Ee.enabled===!0&&Ee.isPresenting===!0){let de=v.xr.getDepthSensingMesh();de!==null&&gn(de,B,-1/0,v.sortObjects)}gn(E,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Ae,De),tt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,tt&&ze.addToRenderList(g,E),this.info.render.frame++,pt===!0&&ye.beginShadows();let W=p.state.shadowsArray;Pe.render(W,E,B),pt===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=g.opaque,z=g.transmissive;if(p.setupLights(),B.isArrayCamera){let de=B.cameras;if(z.length>0)for(let pe=0,Oe=de.length;pe<Oe;pe++){let Fe=de[pe];os(K,z,E,Fe)}tt&&ze.render(E);for(let pe=0,Oe=de.length;pe<Oe;pe++){let Fe=de[pe];rs(g,E,Fe,Fe.viewport)}}else z.length>0&&os(K,z,E,B),tt&&ze.render(E),rs(g,E,B);O!==null&&N===0&&(Se.updateMultisampleRenderTarget(O),Se.updateRenderTargetMipmap(O)),E.isScene===!0&&E.onAfterRender(v,E,B),Ie.resetDefaultState(),w=-1,S=null,T.pop(),T.length>0?(p=T[T.length-1],pt===!0&&ye.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?g=R[R.length-1]:g=null};function gn(E,B,W,K){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||rt.intersectsSprite(E)){K&&Xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);let pe=H.update(E),Oe=E.material;Oe.visible&&g.push(E,pe,Oe,W,Xe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||rt.intersectsObject(E))){let pe=H.update(E),Oe=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xe.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Xe.copy(pe.boundingSphere.center)),Xe.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(Oe)){let Fe=pe.groups;for(let ke=0,et=Fe.length;ke<et;ke++){let qe=Fe[ke],ut=Oe[qe.materialIndex];ut&&ut.visible&&g.push(E,pe,ut,W,Xe.z,qe)}}else Oe.visible&&g.push(E,pe,Oe,W,Xe.z,null)}}let de=E.children;for(let pe=0,Oe=de.length;pe<Oe;pe++)gn(de[pe],B,W,K)}function rs(E,B,W,K){let z=E.opaque,de=E.transmissive,pe=E.transparent;p.setupLightsView(W),pt===!0&&ye.setGlobalState(v.clippingPlanes,W),K&&re.viewport(L.copy(K)),z.length>0&&Ui(z,B,W),de.length>0&&Ui(de,B,W),pe.length>0&&Ui(pe,B,W),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function os(E,B,W,K){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Jn(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Xs:Gn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));let de=p.state.transmissionRenderTarget[K.id],pe=K.viewport||L;de.setSize(pe.z*v.transmissionResolutionScale,pe.w*v.transmissionResolutionScale);let Oe=v.getRenderTarget(),Fe=v.getActiveCubeFace(),ke=v.getActiveMipmapLevel();v.setRenderTarget(de),v.getClearColor(te),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),tt&&ze.render(W);let et=v.toneMapping;v.toneMapping=gi;let qe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),pt===!0&&ye.setGlobalState(v.clippingPlanes,K),Ui(E,W,K),Se.updateMultisampleRenderTarget(de),Se.updateRenderTargetMipmap(de),he.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let yt=0,Dt=B.length;yt<Dt;yt++){let Rt=B[yt],St=Rt.object,Ze=Rt.geometry,It=Rt.material,gt=Rt.group;if(It.side===Cn&&St.layers.test(K.layers)){let $t=It.side;It.side=hn,It.needsUpdate=!0,Fi(St,W,K,Ze,It,gt),It.side=$t,It.needsUpdate=!0,ut=!0}}ut===!0&&(Se.updateMultisampleRenderTarget(de),Se.updateRenderTargetMipmap(de))}v.setRenderTarget(Oe,Fe,ke),v.setClearColor(te,q),qe!==void 0&&(K.viewport=qe),v.toneMapping=et}function Ui(E,B,W){let K=B.isScene===!0?B.overrideMaterial:null;for(let z=0,de=E.length;z<de;z++){let pe=E[z],Oe=pe.object,Fe=pe.geometry,ke=pe.group,et=pe.material;et.allowOverride===!0&&K!==null&&(et=K),Oe.layers.test(W.layers)&&Fi(Oe,B,W,Fe,et,ke)}}function Fi(E,B,W,K,z,de){E.onBeforeRender(v,B,W,K,z,de),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(v,B,W,K,E,de),z.transparent===!0&&z.side===Cn&&z.forceSinglePass===!1?(z.side=hn,z.needsUpdate=!0,v.renderBufferDirect(W,B,K,z,E,de),z.side=fi,z.needsUpdate=!0,v.renderBufferDirect(W,B,K,z,E,de),z.side=Cn):v.renderBufferDirect(W,B,K,z,E,de),E.onAfterRender(v,B,W,K,z,de)}function un(E,B,W){B.isScene!==!0&&(B=Ce);let K=Me.get(E),z=p.state.lights,de=p.state.shadowsArray,pe=z.state.version,Oe=j.getParameters(E,z.state,de,B,W),Fe=j.getProgramCacheKey(Oe),ke=K.programs;K.environment=E.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(E.isMeshStandardMaterial?$e:Ke).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",ce),ke=new Map,K.programs=ke);let et=ke.get(Fe);if(et!==void 0){if(K.currentProgram===et&&K.lightsStateVersion===pe)return as(E,Oe),et}else Oe.uniforms=j.getUniforms(E),E.onBeforeCompile(Oe,v),et=j.acquireProgram(Oe,Fe),ke.set(Fe,et),K.uniforms=Oe.uniforms;let qe=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qe.clippingPlanes=ye.uniform),as(E,Oe),K.needsLights=gl(E),K.lightsStateVersion=pe,K.needsLights&&(qe.ambientLightColor.value=z.state.ambient,qe.lightProbe.value=z.state.probe,qe.directionalLights.value=z.state.directional,qe.directionalLightShadows.value=z.state.directionalShadow,qe.spotLights.value=z.state.spot,qe.spotLightShadows.value=z.state.spotShadow,qe.rectAreaLights.value=z.state.rectArea,qe.ltc_1.value=z.state.rectAreaLTC1,qe.ltc_2.value=z.state.rectAreaLTC2,qe.pointLights.value=z.state.point,qe.pointLightShadows.value=z.state.pointShadow,qe.hemisphereLights.value=z.state.hemi,qe.directionalShadowMap.value=z.state.directionalShadowMap,qe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,qe.spotShadowMap.value=z.state.spotShadowMap,qe.spotLightMatrix.value=z.state.spotLightMatrix,qe.spotLightMap.value=z.state.spotLightMap,qe.pointShadowMap.value=z.state.pointShadowMap,qe.pointShadowMatrix.value=z.state.pointShadowMatrix),K.currentProgram=et,K.uniformsList=null,et}function Dn(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Js.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function as(E,B){let W=Me.get(E);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function io(E,B,W,K,z){B.isScene!==!0&&(B=Ce),Se.resetTextureUnits();let de=B.fog,pe=K.isMeshStandardMaterial?B.environment:null,Oe=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Xi,Fe=(K.isMeshStandardMaterial?$e:Ke).get(K.envMap||pe),ke=K.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,et=!!W.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),qe=!!W.morphAttributes.position,ut=!!W.morphAttributes.normal,yt=!!W.morphAttributes.color,Dt=gi;K.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Dt=v.toneMapping);let Rt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,St=Rt!==void 0?Rt.length:0,Ze=Me.get(K),It=p.state.lights;if(pt===!0&&(le===!0||E!==S)){let Xt=E===S&&K.id===w;ye.setState(K,E,Xt)}let gt=!1;K.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==It.state.version||Ze.outputColorSpace!==Oe||z.isBatchedMesh&&Ze.batching===!1||!z.isBatchedMesh&&Ze.batching===!0||z.isBatchedMesh&&Ze.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ze.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ze.instancing===!1||!z.isInstancedMesh&&Ze.instancing===!0||z.isSkinnedMesh&&Ze.skinning===!1||!z.isSkinnedMesh&&Ze.skinning===!0||z.isInstancedMesh&&Ze.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ze.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ze.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ze.instancingMorph===!1&&z.morphTexture!==null||Ze.envMap!==Fe||K.fog===!0&&Ze.fog!==de||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ye.numPlanes||Ze.numIntersection!==ye.numIntersection)||Ze.vertexAlphas!==ke||Ze.vertexTangents!==et||Ze.morphTargets!==qe||Ze.morphNormals!==ut||Ze.morphColors!==yt||Ze.toneMapping!==Dt||Ze.morphTargetsCount!==St)&&(gt=!0):(gt=!0,Ze.__version=K.version);let $t=Ze.currentProgram;gt===!0&&($t=un(K,B,z));let Zt=!1,Et=!1,bn=!1,_t=$t.getUniforms(),rn=Ze.uniforms;if(re.useProgram($t.program)&&(Zt=!0,Et=!0,bn=!0),K.id!==w&&(w=K.id,Et=!0),Zt||S!==E){re.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),_t.setValue(D,"projectionMatrix",E.projectionMatrix),_t.setValue(D,"viewMatrix",E.matrixWorldInverse);let jt=_t.map.cameraPosition;jt!==void 0&&jt.setValue(D,Be.setFromMatrixPosition(E.matrixWorld)),ie.logarithmicDepthBuffer&&_t.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&_t.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Et=!0,bn=!0)}if(z.isSkinnedMesh){_t.setOptional(D,z,"bindMatrix"),_t.setOptional(D,z,"bindMatrixInverse");let Xt=z.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),_t.setValue(D,"boneTexture",Xt.boneTexture,Se))}z.isBatchedMesh&&(_t.setOptional(D,z,"batchingTexture"),_t.setValue(D,"batchingTexture",z._matricesTexture,Se),_t.setOptional(D,z,"batchingIdTexture"),_t.setValue(D,"batchingIdTexture",z._indirectTexture,Se),_t.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&_t.setValue(D,"batchingColorTexture",z._colorsTexture,Se));let on=W.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&xe.update(z,W,$t),(Et||Ze.receiveShadow!==z.receiveShadow)&&(Ze.receiveShadow=z.receiveShadow,_t.setValue(D,"receiveShadow",z.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(rn.envMap.value=Fe,rn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(rn.envMapIntensity.value=B.environmentIntensity),Et&&(_t.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&so(rn,bn),de&&K.fog===!0&&ae.refreshFogUniforms(rn,de),ae.refreshMaterialUniforms(rn,K,$,_e,p.state.transmissionRenderTarget[E.id]),Js.upload(D,Dn(Ze),rn,Se)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Js.upload(D,Dn(Ze),rn,Se),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&_t.setValue(D,"center",z.center),_t.setValue(D,"modelViewMatrix",z.modelViewMatrix),_t.setValue(D,"normalMatrix",z.normalMatrix),_t.setValue(D,"modelMatrix",z.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Xt=K.uniformsGroups;for(let jt=0,js=Xt.length;jt<js;jt++){let si=Xt[jt];ot.update(si,$t),ot.bind(si,$t)}}return $t}function so(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function gl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,B,W){let K=Me.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Me.get(E.texture).__webglTexture=B,Me.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:W,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let W=Me.get(E);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};let Xn=D.createFramebuffer();this.setRenderTarget=function(E,B=0,W=0){O=E,I=B,N=W;let K=!0,z=null,de=!1,pe=!1;if(E){let Fe=Me.get(E);if(Fe.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(D.FRAMEBUFFER,null),K=!1;else if(Fe.__webglFramebuffer===void 0)Se.setupRenderTarget(E);else if(Fe.__hasExternalTextures)Se.rebindTextures(E,Me.get(E.texture).__webglTexture,Me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let qe=E.depthTexture;if(Fe.__boundDepthTexture!==qe){if(qe!==null&&Me.has(qe)&&(E.width!==qe.image.width||E.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(E)}}let ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(pe=!0);let et=Me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(et[B])?z=et[B][W]:z=et[B],de=!0):E.samples>0&&Se.useMultisampledRTT(E)===!1?z=Me.get(E).__webglMultisampledFramebuffer:Array.isArray(et)?z=et[W]:z=et,L.copy(E.viewport),V.copy(E.scissor),ee=E.scissorTest}else L.copy(Ne).multiplyScalar($).floor(),V.copy(Qe).multiplyScalar($).floor(),ee=st;if(W!==0&&(z=Xn),re.bindFramebuffer(D.FRAMEBUFFER,z)&&K&&re.drawBuffers(E,z),re.viewport(L),re.scissor(V),re.setScissorTest(ee),de){let Fe=Me.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe.__webglTexture,W)}else if(pe){let Fe=B;for(let ke=0;ke<E.textures.length;ke++){let et=Me.get(E.textures[ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ke,et.__webglTexture,W,Fe)}}else if(E!==null&&W!==0){let Fe=Me.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,W)}w=-1},this.readRenderTargetPixels=function(E,B,W,K,z,de,pe,Oe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Fe=Fe[pe]),Fe){re.bindFramebuffer(D.FRAMEBUFFER,Fe);try{let ke=E.textures[Oe],et=ke.format,qe=ke.type;if(!ie.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-K&&W>=0&&W<=E.height-z&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Oe),D.readPixels(B,W,K,z,We.convert(et),We.convert(qe),de))}finally{let ke=O!==null?Me.get(O).__webglFramebuffer:null;re.bindFramebuffer(D.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,B,W,K,z,de,pe,Oe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Fe=Fe[pe]),Fe)if(B>=0&&B<=E.width-K&&W>=0&&W<=E.height-z){re.bindFramebuffer(D.FRAMEBUFFER,Fe);let ke=E.textures[Oe],et=ke.format,qe=ke.type;if(!ie.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Oe),D.readPixels(B,W,K,z,We.convert(et),We.convert(qe),0);let yt=O!==null?Me.get(O).__webglFramebuffer:null;re.bindFramebuffer(D.FRAMEBUFFER,yt);let Dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ru(D,Dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(ut),D.deleteSync(Dt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,W=0){let K=Math.pow(2,-W),z=Math.floor(E.image.width*K),de=Math.floor(E.image.height*K),pe=B!==null?B.x:0,Oe=B!==null?B.y:0;Se.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,pe,Oe,z,de),re.unbindTexture()};let ls=D.createFramebuffer(),_n=D.createFramebuffer();this.copyTextureToTexture=function(E,B,W=null,K=null,z=0,de=null){de===null&&(z!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=z,z=0):de=0);let pe,Oe,Fe,ke,et,qe,ut,yt,Dt,Rt=E.isCompressedTexture?E.mipmaps[de]:E.image;if(W!==null)pe=W.max.x-W.min.x,Oe=W.max.y-W.min.y,Fe=W.isBox3?W.max.z-W.min.z:1,ke=W.min.x,et=W.min.y,qe=W.isBox3?W.min.z:0;else{let on=Math.pow(2,-z);pe=Math.floor(Rt.width*on),Oe=Math.floor(Rt.height*on),E.isDataArrayTexture?Fe=Rt.depth:E.isData3DTexture?Fe=Math.floor(Rt.depth*on):Fe=1,ke=0,et=0,qe=0}K!==null?(ut=K.x,yt=K.y,Dt=K.z):(ut=0,yt=0,Dt=0);let St=We.convert(B.format),Ze=We.convert(B.type),It;B.isData3DTexture?(Se.setTexture3D(B,0),It=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Se.setTexture2DArray(B,0),It=D.TEXTURE_2D_ARRAY):(Se.setTexture2D(B,0),It=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let gt=D.getParameter(D.UNPACK_ROW_LENGTH),$t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Zt=D.getParameter(D.UNPACK_SKIP_PIXELS),Et=D.getParameter(D.UNPACK_SKIP_ROWS),bn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,et),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe);let _t=E.isDataArrayTexture||E.isData3DTexture,rn=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let on=Me.get(E),Xt=Me.get(B),jt=Me.get(on.__renderTarget),js=Me.get(Xt.__renderTarget);re.bindFramebuffer(D.READ_FRAMEBUFFER,jt.__webglFramebuffer),re.bindFramebuffer(D.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let si=0;si<Fe;si++)_t&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(E).__webglTexture,z,qe+si),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(B).__webglTexture,de,Dt+si)),D.blitFramebuffer(ke,et,pe,Oe,ut,yt,pe,Oe,D.DEPTH_BUFFER_BIT,D.NEAREST);re.bindFramebuffer(D.READ_FRAMEBUFFER,null),re.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Me.has(E)){let on=Me.get(E),Xt=Me.get(B);re.bindFramebuffer(D.READ_FRAMEBUFFER,ls),re.bindFramebuffer(D.DRAW_FRAMEBUFFER,_n);for(let jt=0;jt<Fe;jt++)_t?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,on.__webglTexture,z,qe+jt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,on.__webglTexture,z),rn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xt.__webglTexture,de,Dt+jt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Xt.__webglTexture,de),z!==0?D.blitFramebuffer(ke,et,pe,Oe,ut,yt,pe,Oe,D.COLOR_BUFFER_BIT,D.NEAREST):rn?D.copyTexSubImage3D(It,de,ut,yt,Dt+jt,ke,et,pe,Oe):D.copyTexSubImage2D(It,de,ut,yt,ke,et,pe,Oe);re.bindFramebuffer(D.READ_FRAMEBUFFER,null),re.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else rn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(It,de,ut,yt,Dt,pe,Oe,Fe,St,Ze,Rt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(It,de,ut,yt,Dt,pe,Oe,Fe,St,Rt.data):D.texSubImage3D(It,de,ut,yt,Dt,pe,Oe,Fe,St,Ze,Rt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,ut,yt,pe,Oe,St,Ze,Rt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,ut,yt,Rt.width,Rt.height,St,Rt.data):D.texSubImage2D(D.TEXTURE_2D,de,ut,yt,pe,Oe,St,Ze,Rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Et),D.pixelStorei(D.UNPACK_SKIP_IMAGES,bn),de===0&&B.generateMipmaps&&D.generateMipmap(It),re.unbindTexture()},this.initRenderTarget=function(E){Me.get(E).__webglFramebuffer===void 0&&Se.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Se.setTextureCube(E,0):E.isData3DTexture?Se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Se.setTexture2DArray(E,0):Se.setTexture2D(E,0),re.unbindTexture()},this.resetState=function(){I=0,N=0,O=null,re.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var ud={type:"change"},Yc={type:"start"},fd={type:"end"},pl=new Ri,dd=new tn,gx=Math.cos(70*ni.DEG2RAD),Wt=new C,mn=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xc=1e-6,ml=class extends Kr{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cn.ROTATE,MIDDLE:cn.DOLLY,RIGHT:cn.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new An,this._lastTargetPosition=new C,this._quat=new An().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gs,this._sphericalDelta=new Gs,this._scale=1,this._panOffset=new C,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new C,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xx.bind(this),this._onPointerDown=_x.bind(this),this._onPointerUp=yx.bind(this),this._onContextMenu=Tx.bind(this),this._onMouseWheel=Sx.bind(this),this._onKeyDown=Ex.bind(this),this._onTouchStart=bx.bind(this),this._onTouchMove=wx.bind(this),this._onMouseDown=vx.bind(this),this._onMouseMove=Mx.bind(this),this._interceptControlDown=Ax.bind(this),this._interceptControlUp=Rx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ud),this.update(),this.state=Pt.NONE}update(e=null){let t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),s<-Math.PI?s+=mn:s>Math.PI&&(s-=mn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Wt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pl.origin.copy(this.object.position),pl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pl.direction))<gx?this.object.lookAt(this.target):(dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),pl.intersectPlane(dd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xc||this._lastTargetPosition.distanceToSquared(this.target)>Xc?(this.dispatchEvent(ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mn/60*this.autoRotateSpeed*e:mn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Wt.copy(s).sub(this.target);let r=Wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function _x(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function xx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function yx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fd),this.state=Pt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case cn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Pt.DOLLY;break;case cn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pt.ROTATE}break;case cn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Yc)}function Mx(i){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Sx(i){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(i.preventDefault(),this.dispatchEvent(Yc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fd))}function Ex(i){this.enabled!==!1&&this._handleKeyDown(i)}function bx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Pt.TOUCH_ROTATE;break;case Vn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case Vn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Pt.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Yc)}function wx(i){switch(this._trackPointer(i),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Pt.NONE}}function Tx(i){this.enabled!==!1&&i.preventDefault()}function Ax(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pd(i,e,t){let n=0,s=1;for(let r of["x","y","z"]){let o=e[r]-i[r],a=t.min[r],c=t.max[r];if(Math.abs(o)<1e-8){if(i[r]<a||i[r]>c)return null;continue}let l=(a-i[r])/o,u=(c-i[r])/o;if(l>u&&([l,u]=[u,l]),n=Math.max(n,l),s=Math.min(s,u),n>s)return null}return n>=0&&n<=1?n:null}function Cx(i,e){if(i.polygon&&window.KERN_SHAPES){let r=(e.polygons||[]).filter(c=>c.kind==="slab"&&c.room===i.id),o=c=>r.some(l=>window.KERN_SHAPES.contains(c,l.polygon)&&!(l.holes||[]).some(u=>window.KERN_SHAPES.contains(c,u))),a=window.KERN_SHAPES.centroid(i);return o(a)?{x:a.x-Math.min(i.w,4)/2,y:a.y-Math.min(i.h,2)/2,w:Math.min(i.w,4),h:Math.min(i.h,2),z:i.z}:null}let t=e.boxes.filter(r=>(r.kind==="slab"&&(!r.room||r.room===i.id)||r.kind==="landing")&&Math.abs(r.z+r.height-i.z)<.01).map(r=>{let o=Math.max(i.x,r.x),a=Math.max(i.y,r.y);return{x:o,y:a,w:Math.min(i.x+i.w,r.x+r.w)-o,h:Math.min(i.y+i.h,r.y+r.h)-a,z:r.z+r.height}}).filter(r=>r.w>.35&&r.h>.35),n=i.x+i.w/2,s=i.y+i.h/2;return t.sort((r,o)=>o.w*o.h-r.w*r.h||Math.hypot(r.x+r.w/2-n,r.y+r.h/2-s)-Math.hypot(o.x+o.w/2-n,o.y+o.h/2-s))[0]||null}function Px(i,e,t,n){let s=Math.min(56,t*.42),r=[],o=a=>n.measureText?.(a).width??a.length*s*.56;for(let a=0;a<90;a++){n.font=`600 ${s}px system-ui`,r=[];let c="";for(let l of String(i).split(/\s+/)){let u=c?c+" "+l:l;c&&o(u)>e?(r.push(c),c=l):c=u}if(c&&r.push(c),r.every(l=>o(l)<=e)&&r.length*s*1.24<=t)break;s*=.92}return{lines:r,fontSize:s,lineHeight:s*1.24}}function Ix(i,e,t={}){let n=new dl({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),s=()=>{n.setAnimationLoop(null),n.dispose(),n.forceContextLoss(),n.domElement.remove()};try{let j=function(h,M){let b=h.height;if(h.contextOnly&&Z!==M.id||h.kind==="slab"&&(!Ft||Oi)&&!De||h.kind==="ceiling"&&(!Ft||Oi)&&(!Ae||Ne))return 0;let U=h.kind==="wall"||h.kind==="solid";return Ne&&U&&(b=Math.max(0,Math.min(b,(h.baseZ??M.z)+Qe-h.z))),U&&!$&&(b=0),b},ae=function(){let h=new zt;Be=[];for(let M of d.values())M.position.y=M.userData.rank*J;q.position.y=0,q.userData.displayDatum=q.position.y;for(let M of p){let b=e.levels.find(X=>X.id===M.userData.level),U=d.get(b.id),fe=M.userData.fadeMesh;M.userData.boxes.forEach((X,Y)=>{let k=j(X,b),oe=rt&&M.userData.faded.has(Y),G=(ve,ue)=>{let Te=ue&&k>.001;h.position.set(X.x+X.w/2,X.z+k/2,X.y+X.h/2),h.scale.set(Te?X.w:0,Te?k:0,Te?X.h:0),h.updateMatrix(),ve.setMatrixAt(Y,h.matrix)};G(M,!oe),fe&&G(fe,oe),U.visible&&k>.001&&Be.push({mesh:M,index:Y,kind:X.kind,level:b.id,min:{x:X.x,y:X.z+U.position.y,z:X.y},max:{x:X.x+X.w,y:X.z+k+U.position.y,z:X.y+X.h}})}),M.visible=M.userData.boxes.some((X,Y)=>j(X,b)>.001&&!(rt&&M.userData.faded.has(Y))),M.instanceMatrix.needsUpdate=!0,fe&&(fe.visible=rt&&M.userData.boxes.some((X,Y)=>j(X,b)>.001&&M.userData.faded.has(Y)),fe.instanceMatrix.needsUpdate=!0)}for(let M of T){let b=M.userData.shape,U=e.levels.find(X=>X.id===M.userData.level),fe=j(b,U);M.scale.y=fe/b.height,M.visible=fe>.001&&(!M.userData.contextOnly||Z===M.userData.level)}for(let M of _)M.visible=st;for(let M of y)M.visible=st&&!M.userData.duplicate;ne(),r.updateMatrixWorld(!0),Xe=""},ne=function(){for(let h of R){let M=h.userData.floorHighlight||h.userData.floorLeader;h.visible=!!d.get(M)?.visible&&(M===le||x.has(M))}for(let h of _)h.material.color.set(h.userData.level===le||x.has(h.userData.level)?10410239:16777215)},Ge=function(h){x=new Set((h||[]).filter(M=>d.has(M))),ne()},ye=function(h){h&&!d.get(h)?.visible&&(h=null),h!==le&&(le=h,ne(),n.domElement.style.cursor=h?"pointer":"default",t.onHover?.(h?e.levels.find(M=>M.id===h):null))},Pe=function(h=!1){o.updateMatrixWorld(!0);let M=[...o.position.toArray(),...o.quaternion.toArray(),J,$,Ne,Qe,st,rt,Z,...A()].join(":");if(!h&&M===Xe&&!he)return;let b=[...o.position.toArray().map(G=>G.toFixed(2)),...o.quaternion.toArray().map(G=>G.toFixed(3)),J,$,Ne,Qe,rt,...A()].join(":");b!==D&&(D=b,ge=performance.now(),he=rt);let U=!rt||!vt&&!tt&&(h||performance.now()-ge>=180),fe=new Map(p.map(G=>[G,new Set]));if(U&&rt&&$)for(let G of e.levels){let ve=d.get(G.id);if(!ve.visible)continue;let ue=G.boxes.filter(Te=>Te.kind==="slab").sort((Te,Ye)=>Ye.w*Ye.h-Te.w*Te.h).slice(0,12);for(let Te of ue)for(let[Ye,je]of[[.5,.5],[.22,.22],[.78,.78]]){let lt={x:Te.x+Te.w*Ye,y:Te.z+Te.height+.8+ve.position.y,z:Te.y+Te.h*je},it=null,ct=1;for(let Ut of Be){let Lt=pd(o.position,lt,Ut);Lt!==null&&Lt>1e-5&&Lt<ct&&(ct=Lt,it=Ut)}it?.kind==="wall"&&ct<.985&&fe.get(it.mesh).add(it.index)}}if(U){let G=new Set,ve=T.filter(ue=>ue.userData.kind==="wall"&&ue.visible&&d.get(ue.userData.level)?.visible);if(rt&&$){for(let ue of e.levels)if(d.get(ue.id)?.visible)for(let Te of(ue.rooms||[]).slice(0,20)){let Ye=window.KERN_SHAPES?window.KERN_SHAPES.centroid(Te):{x:Te.x+Te.w/2,y:Te.y+Te.h/2},je=new C(Ye.x,Te.z+.8+d.get(ue.id).position.y,Ye.y),lt=je.clone().sub(o.position),it=lt.length(),Ut=new Vs(o.position,lt.normalize(),.05,it-.05).intersectObjects(ve,!1)[0];Ut&&G.add(Ut.object)}}for(let ue of T)ue.userData.kind==="wall"&&(ue.material=v(ue.userData.shape.color,G.has(ue)))}let X=!1;if(U){for(let G of p){let ve=fe.get(G),ue=G.userData.faded;(ve.size!==ue.size||[...ve].some(Te=>!ue.has(Te)))&&(X=!0),G.userData.faded=ve}he=!1}X&&ae();let Y=[],k=Math.max(1,i.clientWidth),oe=Math.max(1,i.clientHeight);for(let G of[..._].sort((ve,ue)=>+!!ve.userData.roomLabel-+!!ue.userData.roomLabel||(ue.userData.area||0)-(ve.userData.area||0))){let ve=G.getWorldPosition(new C),ue=ve.clone().applyMatrix4(o.matrixWorldInverse),Te=2*Math.max(.1,-ue.z)*Math.tan(ni.degToRad(o.fov/2))/oe,Ye=Math.min(G.userData.labelWidth*Te,G.userData.maxWorldWidth||1/0);G.scale.set(Ye,Ye*G.userData.labelRatio,1);let je=ve.clone().project(o),lt=Ye/Te,it=lt*G.userData.labelRatio,ct={x:(je.x+1)*k/2-lt/2,y:(1-je.y)*oe/2-it/2,w:lt,h:it},Ut=Y.some(Lt=>ct.x<Lt.x+Lt.w+5&&ct.x+ct.w+5>Lt.x&&ct.y<Lt.y+Lt.h+5&&ct.y+ct.h+5>Lt.y);if(G.visible=st&&d.get(G.userData.level).visible&&(!G.userData.roomLabel||G.userData.level===Z)&&ue.z<0&&je.z>=-1&&je.z<=1&&ct.x+ct.w>0&&ct.y+ct.h>0&&ct.x<k&&ct.y<oe&&lt>=58&&!Ut&&!Be.some(Lt=>{let Ln=pd(o.position,ve,Lt);return Ln!==null&&Ln>1e-5&&Ln<.995}),G.visible&&Y.push(ct),G.userData.floorLabel){let Lt=R.find(Ln=>Ln.userData.floorLeader===G.userData.level);if(Lt){let Ln=Lt.geometry.attributes.position;Ln.setX(0,G.position.x+Ye/2),Ln.needsUpdate=!0,Lt.visible=st&&G.visible&&(G.userData.level===le||x.has(G.userData.level))}}}for(let G of y){let ve=G.getWorldPosition(new C);G.visible=st&&d.get(G.userData.level).visible&&!G.userData.duplicate&&o.position.y>ve.y}Xe=M},ze=function(){tt=null},xe=function(h,M,b,U=re){let fe=o.position.clone(),X=l.target.clone(),Y=l.enableDamping;l.enableDamping=!1,l.update(),o.position.copy(fe),l.target.copy(X),l.update(),l.enableDamping=Y,tt=b&&!Me?.matches?{from:fe,targetFrom:X,to:h.clone(),targetTo:M.clone(),datumFrom:re,datumTo:U,start:performance.now(),duration:420}:null,tt||(re=U,o.position.copy(h),l.target.copy(M),o.lookAt(M),l.update(),Pe(!0))},Ue=function(h=performance.now()){if(!tt)return!1;let M=tt,b=Me?.matches?1:Math.min(1,Math.max(0,(h-M.start)/M.duration)),U=b*b*(3-2*b);return re=ni.lerp(M.datumFrom,M.datumTo,U),o.position.lerpVectors(M.from,M.to,U),l.target.lerpVectors(M.targetFrom,M.targetTo,U),o.lookAt(l.target),o.updateMatrixWorld(!0),b===1&&(tt=null,l.update()),!0},Je=function(h=!1,M=!1){let b=new pn;for(let G of d.values())if(G.visible){let ve=e.levels.find(ue=>ue.id===G.userData.id);for(let ue of[...ve.boxes,...ve.polygons||[]])b.expandByPoint(new C(ue.x,ue.z+G.position.y,ue.y)),b.expandByPoint(new C(ue.x+ue.w,ue.z+ue.height+G.position.y,ue.y+ue.h))}b.isEmpty()&&(b.min.set(P.minX,P.minZ-L*J,P.minY),b.max.set(P.maxX,P.maxZ+(e.levels.length-1-L)*J,P.maxY));let U=b.getCenter(new C),fe=b.getSize(new C),X=Math.max(fe.length()/2,8),Y=ni.degToRad(o.fov/2),k=X/Math.sin(Y)*Math.max(1,1/o.aspect)*1.1,oe=h?o.position.clone().sub(l.target).normalize():new C(1,.9,1.2).normalize();o.near=.05,o.far=Math.max(5e3,k*5),o.updateProjectionMatrix(),xe(U.clone().add(oe.multiplyScalar(k)),U,M,we(ie))},We=function(h,M=!0){let b=we(h),U=b-re;ie=h,xe(o.position.clone().add(new C(0,U,0)),l.target.clone().add(new C(0,U,0)),M,b)},Ie=function(){_t(),pe&&ke(!0),Q&&Zt(),ze();for(let h of d.values())h.visible=!0;Z=null,ye(null),ae(),Pe(!0),H("visibility")},ot=function(h){if(_t(),pe&&ke(!0),Q&&Zt(),!!d.has(h)){if(Z===h&&A().length===1){H();return}Dn(null,null),Z=h;for(let[M,b]of d)b.visible=M===h;ye(null),ae(),We(h),H(),Dn(h,null)}},F=function(h,{preserveEditing:M=!1}={}){d.has(h)&&(!M&&!d.get(h).visible&&(d.get(h).visible=!0,ae()),Z!==h&&window.KERN_CONNECTION_3D?.cancel(),Z=h,ie=h,re=we(h),ye(null),M||so([h]),Pe(!0),H(M?"sync":"navigation"))},Ee=function(h,M=!1){if(!d.has(h))return;if(!M)return ot(h);_t(),ke(),Zt();let b=d.get(h);b.visible=!b.visible,A().length||(b.visible=!0),Dn(null,null),F(b.visible?h:A()[0]),ae()},Re=function(h){d.has(h)&&h!==ie&&F(h,{preserveEditing:!0})},He=function(h){let M=e.levels.findIndex(U=>U.id===Z),b=e.levels[M+Math.sign(h)];M>=0&&b&&(F(b.id),We(b.id))},ce=function(h){let M=n.domElement.getBoundingClientRect();if(!M.width||!M.height)return null;$e.set((h.clientX-M.left)/M.width*2-1,-(h.clientY-M.top)/M.height*2+1),o.updateMatrixWorld(!0),r.updateMatrixWorld(!0),Ke.setFromCamera($e,o);let b=[...g,...T,..._,...y].filter(G=>G.visible&&d.get(G.userData.level)?.visible),U=Ke.intersectObjects(b,!1)[0],fe=U?.object.userData.level,X=U?.object.userData.boxes?.[U.instanceId],Y=U?.object.userData.room||X?.room,k=e.levels.find(G=>G.id===fe)?.rooms?.find(G=>G.id===Y);n.domElement.title=k?k.name:"";let oe=U?.object.userData.sourceFloor||X?.sourceFloor||fe;return se=U?{floor:oe,displayFloor:fe,door:U.object.userData.door||X?.door,room:Y||X?.rooms?.[0],roomLabel:!!U.object.userData.roomLabel,floorSurface:(U.object.userData.kind||X?.kind)==="slab"&&!U.object.userData.door&&!X?.door,point:U.point}:null,oe||null},rs=function(h){let M=h&&window.KERN_TRANSFORM?.frame(h),b=M?M.point(M.x+M.w/2,M.y+M.h):h?[h.x+h.w/2,h.y+h.h]:null;In=h?{x:b[0],y:b[1],z:h.z+d.get(h.floor).position.y,w:M?.w??h.w,h:M?.h??h.h}:null,os()},os=function(){if(!In||Ft){gn.style.display="none";return}let h=In,M=new C(h.x,h.z,h.y).project(o),b=n.domElement.getBoundingClientRect();gn.textContent=h.w.toFixed(2)+" \xD7 "+h.h.toFixed(2)+" m",gn.style.display="block",gn.style.left=Math.min(Math.max(6,(M.x+1)*b.width/2-45),Math.max(6,b.width-135))+"px",gn.style.top=Math.min(Math.max(6,(1-M.y)*b.height/2+15),Math.max(6,b.height-28))+"px"},Dn=function(h,M){for(rs(null),nt=h?{floor:h,ids:M?[M]:[]}:null;Ve.children.length;){let X=Ve.children[0];Ve.remove(X),X.geometry.dispose()}let b=e.levels.find(X=>X.id===h)?.rooms.find(X=>X.id===M)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(h,M),U=e.levels.find(X=>X.id===h),fe=U&&V(U);be=d.has(h)?b?{...b,floor:h}:!M&&U?{id:null,isFloor:!0,floor:h,z:U.z,x:fe.minX,y:fe.minY,w:fe.maxX-fe.minX,h:fe.maxY-fe.minY}:null:null,be&&Xn(be)},as=function(h,M){if(Dn(h,M[0]||null),nt={floor:h,ids:[...M]},M.length<2)return;for(be=null;Ve.children.length;){let U=Ve.children[0];Ve.remove(U),U.geometry.dispose()}let b=e.levels.find(U=>U.id===h)?.rooms.filter(U=>M.includes(U.id))||[];for(let U of b){let fe=window.KERN_SHAPES?.points(U)||[[U.x,U.y],[U.x+U.w,U.y],[U.x+U.w,U.y+U.h],[U.x,U.y+U.h]],X=new Ci(new At().setFromPoints(fe.map(Y=>new C(Y[0],U.z+d.get(h).position.y+.08,Y[1]))),un);X.renderOrder=10,Ve.add(X)}if(b.length){let U=Math.min(...b.map(X=>X.x)),fe=Math.min(...b.map(X=>X.y));rs({floor:h,x:U,y:fe,z:Math.min(...b.map(X=>X.z)),w:Math.max(...b.map(X=>X.x+X.w))-U,h:Math.max(...b.map(X=>X.y+X.h))-fe})}},io=function(h){let M=(h||[]).filter(b=>d.has(b.floor));if(M.length&&M.every(b=>b.kind==="rooms"&&b.floor===M[0].floor)){as(M[0].floor,M.map(b=>b.id));return}if(Dn(null,null),!!M.length){nt={objects:M.map(b=>({...b}))};for(let b of M){let U=b.polygons?.length?b.polygons:[[[b.x,b.y],[b.x+b.w,b.y],[b.x+b.w,b.y+b.h],[b.x,b.y+b.h]]],fe=b.z+d.get(b.floor).position.y+.08;for(let X of U){let Y=new Ci(new At().setFromPoints(X.map(k=>new C(k[0],fe,k[1]))),un);Y.renderOrder=10,Y.userData.selectedObject={floor:b.floor,kind:b.kind,id:b.id},Ve.add(Y)}}}},so=function(h){let M=[...new Set(h||[])].filter(b=>d.get(b)?.visible);Ge(h),Dn(M.length===1?M[0]:null,null),nt=M.length?{floors:M}:null},gl=function(){if(!nt)return Je(!0,!0);let h=new pn,M=nt.floor;if(nt.objects){M=nt.objects[0]?.floor;for(let Y of nt.objects){let k=d.get(Y.floor).position.y;h.expandByPoint(new C(Y.x,Y.z+k,Y.y)),h.expandByPoint(new C(Y.x+Y.w,Y.z+Y.height+k,Y.y+Y.h))}}else if(nt.floors){M=nt.floors.includes(Z)?Z:nt.floors[0];for(let Y of nt.floors){let k=e.levels.find(G=>G.id===Y);if(!k||!d.get(Y)?.visible)continue;let oe=d.get(Y).position.y;for(let G of[...k.boxes,...k.polygons||[]])h.expandByPoint(new C(G.x,G.z+oe,G.y)),h.expandByPoint(new C(G.x+G.w,G.z+G.height+oe,G.y+G.h))}}else{let Y=e.levels.find(G=>G.id===M);if(!Y)return;let k=nt.ids.length?nt.ids.map(G=>Y.rooms.find(ve=>ve.id===G)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(Y.id,G)).filter(Boolean):Y.rooms,oe=d.get(Y.id).position.y;for(let G of k)h.expandByPoint(new C(G.x,G.z+oe,G.y)),h.expandByPoint(new C(G.x+G.w,G.z+(G.height||Y.height||3)+oe,G.y+G.h))}if(h.isEmpty())return;let b=h.getCenter(new C),U=Math.max(2,h.getSize(new C).length()/2),fe=U/Math.sin(ni.degToRad(o.fov/2))*Math.max(1,1/o.aspect)*1.15,X=o.position.clone().sub(l.target).normalize();xe(b.clone().add(X.multiplyScalar(fe)),b,!0,we(M))},Xn=function(h){for(rs(h);Ve.children.length;){let b=Ve.children[0];Ve.remove(b),b.geometry.dispose()}let M=h.z+d.get(h.floor).position.y+.08;if(!h.isFloor){let b=new Ci(new At().setFromPoints((window.KERN_SHAPES?.points(h)||[[h.x,h.y],[h.x+h.w,h.y],[h.x+h.w,h.y+h.h],[h.x,h.y+h.h]]).map(U=>new C(U[0],M,U[1]))),un);if(b.renderOrder=10,Ve.add(b),window.KERN_CONCRETE_CAP_UI?.readOnly(h.floor,h.id))return;for(let[U,fe,X]of window.KERN_ROTATE?.active()&&window.KERN_ROTATE.eligibleRoom(h)?window.KERN_SHAPES.raw(h).map((Y,k)=>["rotate-"+k,...Y]):(window.KERN_TRANSFORM?.handles(h)||[["nw",h.x,h.y],["ne",h.x+h.w,h.y],["se",h.x+h.w,h.y+h.h],["sw",h.x,h.y+h.h]]).filter(Y=>Y[0].length===2)){let Y=U.startsWith("rotate-")&&window.KERN_ROTATE?.pivotFor(h)?.index===Number(U.slice(7)),k=new Mt(new Rn(Y?.55:.35,.15,Y?.55:.35),Y?Ht:un);k.position.set(fe,M,X),k.userData.edge=U,k.renderOrder=11,Ve.add(k)}}if(h.routeStair&&window.KERN_ROUTE_STAIRS){let b=h.routeStair,U=b.nodes,fe=window.KERN_ROUTE_STAIRS.elevations(h,window.kernPlanner?.getPlan());for(let X=0;X<U.length;X++){let Y=window.KERN_ROUTE_STAIRS.point(h,U[X]),k=fe[X],oe=(X===0?b.start?.floor:X===U.length-1?b.end?.floor:null)||h.floor,G=d.get(oe)?.position.y??d.get(h.floor).position.y,ve=k+G,ue=new Mt(new zs(.23,10,8),un);ue.position.set(Y[0],ve+.12,Y[1]),ue.userData.edge="route-node-"+X,ue.userData.routeZ=k,ue.userData.displayOffset=G,ue.renderOrder=16,Ve.add(ue);let Te=new Mt(new Fs(.18,.45,8),Ht);if(Te.position.set(Y[0],ve+1,Y[1]),Te.userData.edge="route-height-"+X,Te.userData.routeZ=k,Te.userData.displayOffset=G,Te.renderOrder=16,Ve.add(Te),X===(window.KERN_ROUTE_UI?.selectedNode??0))for(let[Ye,je]of(U[X].landing||[]).entries()){let lt=window.KERN_ROUTE_STAIRS.point(h,je),it=new Mt(new Rn(.22,.15,.22),Ht);it.position.set(lt[0],ve+.14,lt[1]),it.userData.edge="route-landing-"+X+"-"+Ye,it.userData.routeZ=k,it.userData.displayOffset=G,it.renderOrder=17,Ve.add(it)}}}if(!h.isFloor&&!window.KERN_ROTATE?.active()){let b=new Mt(new zr(.28),un);b.position.set(h.x+h.w/2,M,h.y+h.h/2),b.userData.edge="move",b.renderOrder=14,Ve.add(b)}if(!h.routeStair&&!window.KERN_ROTATE?.active()&&(h.isFloor||h.localSteps||window.KERN_ROTATE?.eligibleRoom(h))){let b=h.localSteps&&window.KERN_ELEVATION_UI?.handlePoint(h.floor,h.id),U=b?.x??h.x+h.w/2,fe=b?.y??h.y+h.h/2,X=(h.__elevation?h.z:window.KERN_ELEVATION_UI?.handleZ(h.floor,h.id)??h.z)+d.get(h.floor).position.y,Y=new Mn(new At().setFromPoints([new C(U,X,fe),new C(U,X+1.6,fe)]),Ht);Y.renderOrder=12,Ve.add(Y);let k=new Mt(new Fs(.23,.55,8),Ht);k.position.set(U,X+1.6,fe),k.userData.edge="elevate",k.renderOrder=13,Ve.add(k)}},ls=function(h,M){let b=n.domElement.getBoundingClientRect();return $e.set((h.clientX-b.left)/b.width*2-1,-(h.clientY-b.top)/b.height*2+1),o.updateMatrixWorld(!0),r.updateMatrixWorld(!0),Ke.setFromCamera($e,o),Ke.ray.intersectPlane(new tn(new C(0,1,0),-(M.z+d.get(M.floor).position.y)),new C)},Fe=function(){for(;Oe.children.length;){let h=Oe.children[0];Oe.remove(h),h.geometry.dispose()}},ke=function(h=!1){let M=pe;pe=null,Fe(),at.style.display="none",l.enabled=!Ft,M&&n.domElement.hasPointerCapture(M.pointerId)&&n.domElement.releasePointerCapture(M.pointerId),h&&(window.KERN_CONNECTION_3D?.cancel(),de="select",Ve.visible=!Ft)},et=function(h){h!==de&&(window.KERN_CONNECTION_3D?.cancel(),ke(),h!=="select"&&!Z&&F(ie,{preserveEditing:!0}),de=h,Ve.visible=h==="select",n.domElement.title=h==="edge-steps"?"Click a room edge and drag outward":h==="steps"?"Draw between two different-height surfaces":h==="room"?"Drag a room footprint":h==="stairs"?"Draw a stair footprint, then choose destination floors":"")},qe=function(h,M){let b=n.domElement.getBoundingClientRect();$e.set((h.clientX-b.left)/b.width*2-1,-(h.clientY-b.top)/b.height*2+1),o.updateMatrixWorld(!0),Ke.setFromCamera($e,o);let U=Ke.ray.intersectPlane(new tn(new C(0,1,0),-M),new C);return U?{x:U.x,y:U.z}:null},ut=function(h){if(Fe(),at.style.display="block",at.style.left="18px",at.style.top="auto",at.style.bottom="18px",at.textContent=h.error||h.summary,h.error)return;let M=h.detail?[...h.detail.flights.flatMap(b=>b.treads.map(U=>({...U.rect,polygon:U.polygon,z:U.z-.12,height:.12}))),...h.detail.landings.map(b=>({...b.rect,polygon:b.polygon,z:b.z-.15,height:.15}))]:[{...h.room,z:e.levels.find(b=>b.id===h.fid).z-.15,height:.15}];for(let b of M){let U;if(b.polygon){let X=new Qn(b.polygon.map(Y=>new me(Y[0],-Y[1])));U=new Ki(X,{depth:b.height,bevelEnabled:!1}),U.rotateX(-Math.PI/2)}else U=new Rn(b.w,b.height,b.h);let fe=new Mt(U,Ht);b.polygon?fe.position.y=b.z+d.get(h.fid).position.y:fe.position.set(b.x+b.w/2,b.z+b.height/2+d.get(h.fid).position.y,b.y+b.h/2),fe.renderOrder=14,Oe.add(fe)}},yt=function(h,M=Z||ie){ce(h);let b=se?.floor||M,U=e.levels.find(Y=>Y.id===b);if(!U)return null;let fe=se?{x:se.point.x,y:se.point.z}:qe(h,U.z+d.get(b).position.y);if(!fe)return null;let X=se?.point||new C(fe.x,U.z+d.get(b).position.y,fe.y);return{floor:b,room:se?.room,door:se?.door,p:fe,worldPerPixel:2*o.position.distanceTo(X)*Math.tan(o.fov*Math.PI/360)/Math.max(1,n.domElement.getBoundingClientRect().height)}},Dt=function(h){Fe(),at.style.display="block",at.style.left="18px",at.style.top="auto",at.style.bottom="18px",at.textContent=h.valid?de==="disconnect"?"Release to remove connection":"Click or release to place opening":h.reason||"Choose a wall";let M=h.geometry;if(!(!M||!d.has(h.fid)))for(let b of M.segments||[M]){let U=b,fe=U.axis==="poly"?U.p0:U.axis==="h"?[U.start,U.fixed]:[U.fixed,U.start],X=U.axis==="poly"?U.p1:U.axis==="h"?[U.end,U.fixed]:[U.fixed,U.end],Y=h.door?.kind==="window"?h.door.sill??.9:0,k=h.door?.kind==="window"?h.door.height??1.4:2.2,oe=h.z+Y+d.get(h.fid).position.y,G=[[fe[0],oe,fe[1]],[X[0],oe,X[1]],[X[0],oe+k,X[1]],[fe[0],oe+k,fe[1]]],ve=new Ci(new At().setFromPoints(G.map(ue=>new C(...ue))),Fi);ve.renderOrder=20,Oe.add(ve)}},ih=function(){if(!dn)return;o.position.set(dn.x+(dn.bobX||0)*Math.cos(ro),dn.z+(dn.eyeHeight??1.6278874)+(dn.bobY||0),dn.y-(dn.bobX||0)*Math.sin(ro)),o.rotation.order="YXZ",o.rotation.set(Qc,ro,dn.roll||0);let h=new C(0,0,-1).applyQuaternion(o.quaternion);if(xi.position.copy(o.position),xi.target.position.copy(o.position).add(h.multiplyScalar(8)),xi.visible=eh,!dn.fly){for(let M of _)M.visible=!1;for(let M of y)M.visible=!M.userData.duplicate&&Math.abs(M.position.y-dn.z)<.2}},gd=function(h,M=0,b=0,U=!0,fe=!1){if(h){if(ke(!0),!Ft){if(cs=xl(),o.fov=h.fov??90,o.updateProjectionMatrix(),Ft=!0,Oi=!!h.fly,r.children.filter(X=>X.isHemisphereLight||X.isDirectionalLight).forEach(X=>{X.userData.originalIntensity=X.intensity,h.fly||(X.intensity=X.isHemisphereLight?.8:.3)}),Ve.visible=!1,l.enabled=!1,tt=null,!h.fly){J=0,$=!0,Ne=!1,rt=!1,st=!1,Z=null;for(let X of d.values())X.visible=!0;q.visible=!1,yi.visible=!0}ae()}if(Oi&&!h.fly){J=0,$=!0,Ne=!1,rt=!1,st=!1,Z=null;for(let X of d.values())X.visible=!0;q.visible=!1,yi.visible=!0,Oi=!1,ae()}Oi=!!h.fly,o.fov!==(h.fov??90)&&(o.fov=h.fov??90,o.updateProjectionMatrix()),dn=h,ro=M,Qc=b,eh=U,ih()}else if(Ft){let X=o.position.clone(),Y=o.getWorldDirection(new C);Ft=!1,Oi=!1,o.fov=cs?.fov??42,o.updateProjectionMatrix(),r.children.filter(k=>k.isHemisphereLight||k.isDirectionalLight).forEach(k=>k.intensity=k.userData.originalIntensity??k.intensity),Ve.visible=!0,dn=null,xi.visible=!1,yi.visible=!1,l.enabled=!0,o.rotation.order="XYZ",yl(fe?{...cs,position:X.toArray(),target:X.clone().add(Y.multiplyScalar(10)).toArray()}:cs)}},xl=function(){return{fov:o.fov,position:o.position.toArray(),target:l.target.toArray(),focused:Z,navigationFloor:ie,navigationY:re,navigationElevation:we(ie),visible:A(),gap:J,showWalls:$,showCeilings:Ae,showSlabs:De,cutaway:Ne,cutHeight:Qe,labels:st,xray:rt,showGrid:pt,overview:null}},yl=function(h){if(!h||_e)return;o.fov=Number.isFinite(h.fov)?h.fov:42,o.updateProjectionMatrix();let M=fe=>Array.isArray(fe)&&fe.length===3&&fe.every(Number.isFinite);ze(),J=Math.max(0,Math.min(12,Number(h.gap)||0)),$=h.showWalls!==!1,Ae=!!h.showCeilings,De=h.showSlabs!==!1,Ne=h.cutaway!==!1,Qe=Number.isFinite(h.cutHeight)?Math.max(.4,Math.min(2.4,h.cutHeight)):1.15,st=h.labels!==!1,rt=!!h.xray,pt=h.showGrid!==!1,q.visible=pt,Z=d.has(h.focused)?h.focused:null;let b=Array.isArray(h.visible)?h.visible.filter(fe=>d.has(fe)):[...d.keys()];for(let[fe,X]of d)X.visible=b.includes(fe);if(!Z&&!b.length&&h.visible?.length)for(let fe of d.values())fe.visible=!0;ie=d.has(h.navigationFloor)?h.navigationFloor:Z||ie;let U=d.has(h.navigationFloor)&&Number.isFinite(h.navigationElevation)?we(ie)-h.navigationElevation:0;re=(Number.isFinite(h.navigationY)?h.navigationY:we(ie))+U,ye(null),ae(),M(h.position)&&M(h.target)?xe(new C().fromArray(h.position).add(new C(0,U,0)),new C().fromArray(h.target).add(new C(0,U,0)),!1):Je(),Pe(!0),H("restore")},sh=function(){if(!_e){ke(!0),n.domElement.removeEventListener("pointerdown",W,!0),n.domElement.removeEventListener("pointermove",K,!0),n.domElement.removeEventListener("lostpointercapture",z,!0),n.domElement.removeEventListener("pointerup",z,!0),n.domElement.removeEventListener("pointercancel",z,!0),n.domElement.removeEventListener("pointerdown",Rt,!0),n.domElement.removeEventListener("pointermove",St,!0),n.domElement.removeEventListener("pointerup",Ze,!0),n.domElement.removeEventListener("pointercancel",ke,!0),_e=!0,xi.dispose();for(let h of yi.children)h.geometry.dispose();tt=null,n.setAnimationLoop(null),$c.disconnect(),n.domElement.removeEventListener("pointerdown",It,!0),n.domElement.removeEventListener("pointermove",gt,!0),n.domElement.removeEventListener("pointerup",$t,!0),n.domElement.removeEventListener("pointercancel",Zt,!0),n.domElement.removeEventListener("lostpointercapture",Zt,!0),bn.remove(),n.domElement.removeEventListener("pointerdown",rn,!0),n.domElement.removeEventListener("pointermove",on,!0),n.domElement.removeEventListener("pointerup",Xt,!0),n.domElement.removeEventListener("pointercancel",_t,!0),n.domElement.removeEventListener("lostpointercapture",_t,!0),gn.remove(),at.remove(),ss.dispose(),Ht.dispose(),un.dispose(),Fi.dispose(),Ui.dispose();for(let h of Ve.children)h.geometry.dispose();l.removeEventListener("start",Kc),l.removeEventListener("end",Jc),l.dispose();for(let[h,M]of Object.entries(qc))n.domElement.removeEventListener(h,M);n.domElement.removeEventListener("webglcontextlost",jc),window.removeEventListener("blur",_l);for(let h of[..._,...y])h.material.map.dispose(),h.material.dispose(),h.geometry&&!h.isSprite&&h.geometry.dispose();for(let h of R)h.geometry.dispose(),h.material.dispose();for(let h of T)h.geometry.dispose();for(let h of m.values())h.dispose();f.dispose(),q.geometry.dispose();for(let h of Array.isArray(q.material)?q.material:[q.material])h.dispose();n.dispose(),n.forceContextLoss(),n.domElement.remove(),r.clear(),Se.clear()}};n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=qt,n.setClearColor(1514532),n.domElement.setAttribute("aria-label","3D building editor. Alt-left drag orbits; middle or right drag pans. Alt-right drag horizontally zooms at the starting pointer: right closer, left farther. Click a floor surface or floor control to select its floor; Shift-click adds or removes editable floors. F frames the selection. Room labels and walls select individual rooms."),n.domElement.tabIndex=0,i.appendChild(n.domElement);let r=new wr,o=new Jt(42,1,.05,5e3);r.add(new Wr(15988735,4739939,2.2));let a=new ks(16777215,2.5);a.position.set(-40,80,-30),r.add(a);let c=new ks(12044524,.6);c.position.set(40,10,60),r.add(c);let l=new ml(o,n.domElement),u=s;s=()=>{l.dispose();let h=new Set,M=new Set,b=new Set;r.traverse(U=>{U.geometry&&h.add(U.geometry);for(let fe of Array.isArray(U.material)?U.material:U.material?[U.material]:[])M.add(fe),fe.map&&b.add(fe.map)});for(let U of b)U.dispose();for(let U of M)U.dispose();for(let U of h)U.dispose();r.clear(),u()},l.enableDamping=!0,l.dampingFactor=.09,l.maxPolarAngle=Math.PI-.001,l.minDistance=1,l.maxDistance=1600,l.screenSpacePanning=!0,l.mouseButtons={LEFT:null,MIDDLE:cn.PAN,RIGHT:cn.PAN},l.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN};let f=new Rn(1,1,1),m=new Map,d=new Map,_=[],y=[],g=[],p=[],R=[],T=[],v=(h,M=!1)=>{let b=h+(M?":xray":"");return m.has(b)||m.set(b,new kr({color:h,roughness:.88,metalness:0,transparent:M,opacity:M?.5:1,depthWrite:!M})),m.get(b)},P=e.bounds,I=(P.minX+P.maxX)/2,N=(P.minY+P.maxY)/2,O=Math.max(6,(P.maxX-P.minX)*.22),w=e.levels.find(h=>h.id==="L0"),S=e.siteGroundZ??w?.z??0,L=w?e.levels.indexOf(w):e.levels.reduce((h,M,b)=>Math.abs(M.z-S)<Math.abs(e.levels[h].z-S)?b:h,0),V=h=>{let M=[...h.boxes,...h.polygons||[]];return M.length?{minX:Math.min(...M.map(b=>b.x)),maxX:Math.max(...M.map(b=>b.x+b.w)),minY:Math.min(...M.map(b=>b.y)),maxY:Math.max(...M.map(b=>b.y+b.h))}:P},ee=(h,M,b)=>{let U=Cx(h,M);if(!U)return;let fe=String(h.name||h.id),X=Math.min(.32,Math.min(U.w,U.h)*.1),Y=U.h>U.w*1.35,k=(Y?U.h:U.w)-X*2,oe=(Y?U.w:U.h)-X*2,G=Math.min(k,9),ve=Math.min(oe,2.5),ue=64,Te=document.createElement("canvas");Te.width=Math.ceil(G*ue),Te.height=Math.ceil(ve*ue);let Ye=Te.getContext("2d");if(!Ye)return;let je=Px(fe,Te.width-10,Te.height-8,Ye);Ye.fillStyle="#263545",Ye.textAlign="center",Ye.textBaseline="middle",Ye.strokeStyle="#eef3f4",Ye.lineWidth=Math.max(1,je.fontSize*.045),Ye.lineJoin="round",je.lines.forEach((ct,Ut)=>{let Lt=Te.height/2+(Ut-(je.lines.length-1)/2)*je.lineHeight;Ye.strokeText?.(ct,Te.width/2,Lt),Ye.fillText(ct,Te.width/2,Lt)});let lt=new qi(Te);lt.colorSpace=qt;let it=new Mt(new ei(G,ve),new Hn({map:lt,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));it.rotation.set(-Math.PI/2,0,Y?Math.PI/2:0),it.position.set(U.x+U.w/2,U.z+.006,U.y+U.h/2),it.renderOrder=2,it.userData={level:M.id,roomLabel:!0,room:h.id,name:fe,surface:U,worldWidth:G,worldHeight:ve,fontSize:je.fontSize/ue,lines:je.lines},it.userData.duplicate=y.some(ct=>ct.userData.level===M.id&&ct.position.distanceTo(it.position)<.01),b.add(it),y.push(it)};for(let h=0;h<e.levels.length;h++){let M=e.levels[h],b=new Tn,U=V(M);b.userData={id:M.id,rank:h-L,z:M.z},d.set(M.id,b),r.add(b);let fe=new Map;for(let oe of[...M.boxes,...e.levels.flatMap(G=>G.id===M.id?[]:G.boxes.filter(ve=>["stair","landing"].includes(ve.kind)&&ve.z<M.z&&e.stairs?.some(ue=>ue.connectionId===ve.stair&&ue.stops.some(Te=>Te.floor===M.id)&&ve.z>=Math.max(...ue.stops.filter(Te=>Te.z<M.z).map(Te=>Te.z))-.2)).map(ve=>({...ve,contextOnly:!0})))]){let G=`${oe.color}:${oe.kind}:${!!oe.contextOnly}`;fe.has(G)||fe.set(G,[]),fe.get(G).push(oe)}for(let oe of fe.values()){let G=new Ns(f,v(oe[0].color,oe[0].kind==="window"),oe.length);if(G.frustumCulled=!1,G.userData={boxes:oe,level:M.id,faded:new Set},b.add(G),g.push(G),p.push(G),oe[0].kind==="wall"){let ve=new Ns(f,v(oe[0].color,!0),oe.length);ve.frustumCulled=!1,ve.renderOrder=1,ve.userData={boxes:oe,level:M.id,primary:G,xray:!0},G.userData.fadeMesh=ve,b.add(ve),g.push(ve)}}for(let oe of[...M.polygons||[],...e.levels.flatMap(G=>G.id===M.id?[]:(G.polygons||[]).filter(ve=>ve.z<M.z&&e.stairs?.some(ue=>ue.connectionId===ve.stair&&ue.stops.some(Te=>Te.floor===M.id)&&ve.z>=Math.max(...ue.stops.filter(Te=>Te.z<M.z).map(Te=>Te.z))-.2)).map(ve=>({...ve,contextOnly:!0})))]){let G=new Qn(oe.polygon.map(Te=>new me(Te[0],-Te[1])));for(let Te of oe.holes||[])G.holes.push(new Pi(Te.map(Ye=>new me(Ye[0],-Ye[1]))));let ve=new Ki(G,{depth:oe.height,bevelEnabled:!1,steps:1});ve.rotateX(-Math.PI/2);let ue=new Mt(ve,v(oe.color,oe.kind==="window"));ue.position.y=oe.z,ue.userData={level:M.id,stair:oe.stair,sourceFloor:oe.sourceFloor,door:oe.door,contextOnly:!!oe.contextOnly,room:oe.room,kind:oe.kind,shape:oe},b.add(ue),T.push(ue)}let X=new Zr(new pn(new C(U.minX,M.z+.04,U.minY),new C(U.maxX,M.z+.07,U.maxY)),8176895);X.visible=!1,X.material.depthTest=!0,X.material.transparent=!0,X.material.opacity=.95,X.userData.floorHighlight=M.id,b.add(X),R.push(X);let Y=document.createElement("canvas");Y.width=640,Y.height=96;let k=Y.getContext("2d");if(k){k.fillStyle="#202936",k.fillRect(0,0,640,96),k.strokeStyle="#465367",k.strokeRect(1,1,638,94),k.fillStyle="#e7effc",k.font="500 34px system-ui",k.fillText(`${M.id} \xB7 ${M.z>0?"+":""}${M.z.toFixed(2)} m`,18,38),k.fillStyle="#c9d4e4",k.font="30px system-ui",k.fillText(String(M.name).slice(0,40),18,77,604);let oe=new qi(Y);oe.colorSpace=qt;let G=new Ar(new Ls({map:oe,depthTest:!0,depthWrite:!1}));G.position.set(P.minX-O*.65-1,M.z+.2,(U.minY+U.maxY)/2),G.scale.set(O,O*96/640,1),G.userData={level:M.id,floorLabel:!0,labelWidth:230,labelRatio:96/640},b.add(G),_.push(G);let ve=new Mn(new At().setFromPoints([new C(G.position.x+O/2,M.z+.2,G.position.z),new C(U.minX,M.z+.07,G.position.z)]),new jn({color:8176895,depthTest:!0,transparent:!0,opacity:.9}));ve.visible=!1,ve.userData.floorLeader=M.id,b.add(ve),R.push(ve)}for(let oe of M.rooms||[])ee(oe,M,b);for(let oe of M.annotations||[]){let G=String(oe.text||""),ve=oe.fontSize||.45;if(!G)continue;let ue=Math.min(30,Math.max(ve,G.length*ve*.58)),Te=ve*1.3,Ye=document.createElement("canvas");Ye.width=Math.ceil(ue*64),Ye.height=Math.ceil(Te*64);let je=Ye.getContext("2d");if(!je)continue;je.font=`${ve*64}px system-ui,Segoe UI,sans-serif`,je.fillStyle="#53686d",je.textAlign="center",je.textBaseline="middle",je.fillText(G,Ye.width/2,Ye.height/2,Ye.width);let lt=new qi(Ye);lt.colorSpace=qt;let it=new Mt(new ei(ue,Te),new Hn({map:lt,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1})),ct=M.rooms.find(Ut=>Ut.id===oe.sourceRoom)||M.rooms.find(Ut=>oe.x>=Ut.x&&oe.x<=Ut.x+Ut.w&&oe.y>=Ut.y&&oe.y<=Ut.y+Ut.h);it.rotation.x=-Math.PI/2,it.position.set(oe.x,(ct?.z??M.z)+.008,oe.y),it.renderOrder=2,it.userData={level:M.id,annotationLabel:!0,annotation:oe.id,name:G},b.add(it),y.push(it)}}let te=Math.max(P.maxX-P.minX,P.maxY-P.minY,15)*1.35,q=new qr(te,Math.min(100,Math.ceil(te)),6781842,3160648);q.position.set(I,S,N),q.userData.groundDatum=S,r.add(q),q.renderOrder=-10;for(let h of Array.isArray(q.material)?q.material:[q.material])h.transparent=!1,h.opacity=1,h.depthWrite=!1;let J=0,_e=!1,$=!0,Ae=!1,De=!0,Ne=!0,Qe=1.15,st=!0,rt=!1,pt=!0,le=null,Z=null,Be=[],Xe="",Ce=null,tt=null,vt=!1,D="",ge=0,he=!1,ie=d.has(t.activeFloor)?t.activeFloor:w?.id||e.levels[L]?.id,re=d.get(ie)?.userData.z||0,we=h=>{let M=d.get(h);return M?M.userData.z+M.userData.rank*J:re},Me=window.matchMedia?.("(prefers-reduced-motion: reduce)"),Se=new Set,Ke=new Vs,$e=new me,A=()=>[...d].filter(([,h])=>h.visible).map(([h])=>h),x=new Set((t.editableFloors||[]).filter(h=>d.has(h))),H=(h="navigation")=>t.onVisibilityChanged?.(A(),Z,h),se=null,be=null,Q=null,nt=null,Ve=new Tn;r.add(Ve);let at=document.createElement("div");at.style.cssText="position:absolute;left:18px;bottom:18px;padding:8px 12px;background:#172b37;color:#e7b16b;pointer-events:none;display:none",i.append(at);let Ht=new Hn({color:15184235,transparent:!0,opacity:.65,depthTest:!1}),ss=new Vr({color:15185774,dashSize:.18,gapSize:.12,depthTest:!1}),In=null,gn=document.createElement("div");gn.dataset.selectionDimensions="true",gn.style.cssText="position:absolute;pointer-events:none;display:none;padding:4px 7px;border-radius:4px;background:#172b37dd;color:#e7b76e;font:13px system-ui",i.append(gn);let Ui=new Hn({color:11184810,transparent:!0,opacity:.1,depthTest:!1,depthWrite:!1,side:Cn}),Fi=new jn({color:5493465,depthTest:!1}),un=new Hn({color:5941759,depthTest:!1}),_n=null,E=null,B=0,W=h=>{if(Ft||!h.altKey||Q||pe||![0,1,2].includes(h.button)||h.button===0&&be&&de==="select"&&(ls(h,be),Ke.intersectObjects(Ve.children,!1).some(U=>["nw","ne","se","sw"].includes(U.object.userData.edge))))return;if(_n=h.pointerId,Ce=null,Se.clear(),_t(),ze(),B=performance.now()+500,l.mouseButtons.LEFT=cn.ROTATE,l.mouseButtons.RIGHT=cn.PAN,n.domElement.style.cursor=h.button===2?"ew-resize":"grabbing",h.__viewNavigation=!0,h.preventDefault(),h.button!==2){l.enabled=!0;return}xe(o.position.clone(),l.target.clone(),!1),ce(h);let M=o.getWorldDirection(new C),b=se?.point.clone()||Ke.ray.intersectPlane(new tn().setFromNormalAndCoplanarPoint(M,l.target),new C)||l.target.clone();E={x:h.clientX,anchor:b,position:o.position.clone(),target:l.target.clone(),distance:o.position.distanceTo(l.target)},l.enabled=!1,n.domElement.setPointerCapture(h.pointerId),h.stopImmediatePropagation()},K=h=>{if(_n!==h.pointerId||!E)return;h.__viewNavigation=!0,h.preventDefault(),h.stopImmediatePropagation();let M=E,b=ni.clamp(M.distance*Math.exp(-(h.clientX-M.x)*.01),l.minDistance,l.maxDistance)/M.distance;xe(M.position.clone().sub(M.anchor).multiplyScalar(b).add(M.anchor),M.target.clone().sub(M.anchor).multiplyScalar(b).add(M.anchor),!1),os()},z=h=>{if(_n!==h.pointerId)return;let M=!!E;h.__viewNavigation=!0,_n=null,E=null,B=performance.now()+400,l.mouseButtons.LEFT=null,l.mouseButtons.RIGHT=cn.PAN,l.enabled=!Ft,window.KERN_TRANSFORM?.syncCursor(),n.domElement.style.cursor="",M&&(h.preventDefault(),h.stopImmediatePropagation(),n.domElement.hasPointerCapture(h.pointerId)&&n.domElement.releasePointerCapture(h.pointerId))};n.domElement.addEventListener("pointerdown",W,!0),n.domElement.addEventListener("pointermove",K,!0),n.domElement.addEventListener("pointerup",z,!0),n.domElement.addEventListener("pointercancel",z,!0),n.domElement.addEventListener("lostpointercapture",z,!0);let de="select",pe=null,Oe=new Tn;Oe.userData.authorPreview=!0,r.add(Oe);let Rt=h=>{if(_n===h.pointerId||h.__viewNavigation||Ft||de==="select"||h.button!==0)return;if(h.preventDefault(),h.stopImmediatePropagation(),["door","connect","disconnect"].includes(de)){let Y=yt(h);if(!Y)return;F(Y.floor,{preserveEditing:!0}),pe={connection:!0,pointerId:h.pointerId,floor:Y.floor,begin:window.KERN_CONNECTION_3D.begin(de,Y),last:Y,clientX:h.clientX,clientY:h.clientY},l.enabled=!1,n.domElement.setPointerCapture(h.pointerId);return}if(!window.KERN_AUTHORING_3D||(ce(h),se?.floor&&!(de==="stair-route"&&window.KERN_ROUTE_UI?.getDraft().length)&&F(se.floor,{preserveEditing:!0}),!Z))return;let M=e.levels.find(Y=>Y.id===(se?.floor||Z)),b=M.rooms.find(Y=>Y.id===se?.room)||(be?.isFloor?null:be),U=(b?.z??M.z)+d.get(M.id).position.y,fe=qe(h,U);if(!fe)return;if(de==="stair-route"){window.KERN_ROUTE_UI?.addPoint(fe,h,b?.id,M.id);return}let X=window.KERN_AUTHORING_3D.begin(de,Z,fe,b?.id,window.KERN_AUTHORING_3D.width());if(X.error){ut(X);return}pe={pointerId:h.pointerId,z:U,begin:X,floor:Z},l.enabled=!1,n.domElement.setPointerCapture(h.pointerId)},St=h=>{if(pe?.connection){if(h.pointerId!==pe.pointerId)return;h.preventDefault(),h.stopImmediatePropagation(),pe.last=yt(h,pe.floor)||pe.last,pe.moved=Math.hypot(h.clientX-pe.clientX,h.clientY-pe.clientY)>5,Dt(window.KERN_CONNECTION_3D.preview(de,pe.last,pe.moved?pe.begin.hit:pe.begin.pending));return}if(!pe){if(!Ft&&_n===null&&["door","connect","disconnect"].includes(de)){let b=yt(h);b&&Dt(window.KERN_CONNECTION_3D.preview(de,b));return}if(!Ft&&_n===null&&Z&&["edge-steps","stair-route"].includes(de)){ce(h);let b=e.levels.find(Y=>Y.id===(se?.floor||Z)),U=b.rooms.find(Y=>Y.id===se?.room),fe=(U?.z??b.z)+d.get(b.id).position.y,X=qe(h,fe);if(Fe(),!X)return;if(de==="edge-steps"){let Y=window.KERN_AUTHORING_3D.begin("edge-steps",Z,X,U?.id,window.KERN_AUTHORING_3D.width());if(!Y.error){let k=new Mn(new At().setFromPoints([Y.edge.a,Y.edge.b].map(oe=>new C(oe[0],fe+.1,oe[1]))),Fi);k.renderOrder=18,Oe.add(k)}}else{let Y=window.KERN_ROUTE_UI?.preview(X,h,U?.id,b.id);if(Y){Y.detail&&ut(Y);let k=window.snapSize?.()||.25,oe=new Mt(new ei(k,k),Ui);oe.rotation.x=-Math.PI/2,oe.position.set(Y.point[0],fe+.025,Y.point[1]),oe.renderOrder=17,Oe.add(oe);let G=new Mt(new zs(.07,10,8),un);G.position.set(Y.point[0],fe+.1,Y.point[1]),G.renderOrder=19,Oe.add(G)}}}return}if(h.pointerId!==pe.pointerId)return;if(h.preventDefault(),h.stopImmediatePropagation(),pe.floor!==Z){ke();return}let M=qe(h,pe.z);M&&(pe.next=window.KERN_AUTHORING_3D.candidate(pe.begin,M,h.ctrlKey),ut(pe.next))},Ze=h=>{if(!pe||h.pointerId!==pe.pointerId)return;if(h.preventDefault(),h.stopImmediatePropagation(),pe.connection){let b=pe;pe=null,Fe(),at.style.display="none",l.enabled=!0,n.domElement.hasPointerCapture(h.pointerId)&&n.domElement.releasePointerCapture(h.pointerId),window.KERN_CONNECTION_3D.finish(b.begin,b.last,b.moved);return}let M=pe.next;ke(),M&&!M.error&&(ke(!0),window.KERN_AUTHORING_3D.finish(M))};n.domElement.addEventListener("pointerdown",Rt,!0),n.domElement.addEventListener("pointermove",St,!0),n.domElement.addEventListener("pointerup",Ze,!0),n.domElement.addEventListener("pointercancel",ke,!0),n.domElement.addEventListener("lostpointercapture",()=>{pe&&ke()},!0);let It=h=>{if(_n===h.pointerId||h.__viewNavigation||Ft||h.button!==0||!be)return;let M=ls(h,be),b=Ke.intersectObjects(Ve.children,!1).find(fe=>fe.object.userData.edge);if(!b||(Number.isFinite(b.object.userData.routeZ)&&(M=ls(h,{...be,z:b.object.userData.routeZ+(b.object.userData.displayOffset??d.get(be.floor).position.y)-d.get(be.floor).position.y})||b.point.clone()),M||(M=b.point.clone()),ce(h),b.object.userData.edge?.startsWith("route-")&&window.KERN_ROUTE_UI?.selectPoint(Number(b.object.userData.edge.split("-")[2])),window.KERN_ROTATE?.active()&&(!b||!window.KERN_ROTATE.eligibleRoom(be))))return;let U=null;if(b?.object.userData.edge?.startsWith("rotate-")){let fe=Number(b.object.userData.edge.slice(7));if(U=window.KERN_ROTATE.pivotFor(be),!U||U.index===fe){window.KERN_ROTATE.choosePivot(be,"rooms",fe),Xn(be),h.preventDefault(),h.stopImmediatePropagation();return}}Q={rotationPivot:U,start:M.clone(),original:JSON.parse(JSON.stringify(be)),next:JSON.parse(JSON.stringify(be)),routeZ:b?.object.userData.routeZ,planeZ:Number.isFinite(b?.object.userData.routeZ)?b.object.userData.routeZ+(b.object.userData.displayOffset??d.get(be.floor).position.y)-d.get(be.floor).position.y:be.z,edge:b?.object.userData.edge==="move"?null:b?.object.userData.edge,clientY:h.clientY,baseHeight:window.KERN_ELEVATION_UI?.handleZ(be.floor,be.id)??be.z,baseGroupY:d.get(be.floor).position.y,pointerId:h.pointerId},l.enabled=!1,h.preventDefault(),h.stopImmediatePropagation(),n.domElement.setPointerCapture(h.pointerId)},gt=h=>{if(!Q||Q.pointerId!==h.pointerId)return;let M=ls(h,{...Q.original,z:Q.planeZ??Q.original.z})||(Q.edge==="elevate"||Q.edge?.startsWith("route-height")?Q.start:null);if(!M)return;if(Q.edge?.startsWith("route-landing-")){let k=Q.original,oe=JSON.parse(JSON.stringify(k)),G=Q.edge.split("-"),ve=Number(G[2]),ue=Number(G[3]),Te=oe.routeStair.nodes[ve].landing[ue],Ye=window.KERN_ROUTE_STAIRS.point(k,Te),je=h.ctrlKey?0:window.snapSize?.()??.25,lt=Ye[0]+M.x-Q.start.x,it=Ye[1]+M.z-Q.start.z;Object.assign(Te,window.KERN_ROUTE_STAIRS.local(k,[je?Math.round(lt/je)*je:lt,je?Math.round(it/je)*je:it])),window.KERN_ROUTE_STAIRS.simplePolygon(oe.routeStair.nodes[ve].landing.map(ct=>window.KERN_ROUTE_STAIRS.point(oe,ct)))&&(Q.next=oe,Xn(oe)),h.preventDefault(),h.stopImmediatePropagation();return}if(Q.edge?.startsWith("route-")){let k=Q.original,oe=JSON.parse(JSON.stringify(k)),G=oe.routeStair,ve=Number(Q.edge.split("-").at(-1)),ue=G.nodes[ve];if(Q.edge.startsWith("route-height")){let Ye=2*o.position.distanceTo(new C(k.x+k.w/2,k.z+Q.baseGroupY,k.y+k.h/2))*Math.tan(o.fov*Math.PI/360)/Math.max(1,n.domElement.getBoundingClientRect().height),je=Q.routeZ+(Q.clientY-h.clientY)*Ye,lt=h.ctrlKey?je:Math.round(je*4)/4;window.KERN_ROUTE_STAIRS.setHeight(oe,ve,lt,window.kernPlanner?.getPlan())}else{let Ye=window.KERN_ROUTE_STAIRS.point(k,ue),je=h.ctrlKey?0:window.snapSize?.()??.25,lt=Ye[0]+M.x-Q.start.x,it=Ye[1]+M.z-Q.start.z,ct=window.KERN_ROUTE_STAIRS.snapNode(oe,ve,[lt,it],je,h.ctrlKey,h.shiftKey);window.KERN_ROUTE_STAIRS.moveNode(oe,ve,ct,window.kernPlanner?.getPlan()),window.KERN_ROUTE_UI?.attachEndpoint(oe,ve,ct)}Q.next=oe,Xn(oe);let Te=window.kernPlanner?.getPlan();if(Te){let Ye=Te.floors[k.floor]?.rooms.find(je=>je.id===k.id);if(Ye){Object.assign(Ye,oe);let je=window.KERN_ROUTE_STAIRS.build(Te,k.floor,k.id);ut({detail:je,fid:k.floor,summary:je.warnings[0]?.text||"Editable stair route"})}}h.preventDefault(),h.stopImmediatePropagation();return}if(Q.edge==="elevate"){let k=Q.original,oe=2*o.position.distanceTo(new C(k.x+k.w/2,k.z+Q.baseGroupY,k.y+k.h/2))*Math.tan(o.fov*Math.PI/360)/Math.max(1,n.domElement.getBoundingClientRect().height),G=Q.baseHeight+(Q.clientY-h.clientY)*oe,ve=h.ctrlKey?0:.25,ue=Math.max(-150,Math.min(150,ve?Math.round(G/ve)*ve:G));if(Q.next={...k,z:ue,__elevation:!0},at.style.display="block",at.style.top="auto",at.style.bottom="18px",at.style.left="18px",at.textContent=(k.isFloor?"Floor":"Surface")+" "+ue.toFixed(2)+" m \xB7 "+(h.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"),d.get(k.floor).position.y=Q.baseGroupY,Xn(Q.next),k.isFloor)d.get(k.floor).position.y=Q.baseGroupY+ue-k.z;else{let Qs=window.KERN_ELEVATION_UI?.preview(k.floor,k.id,ue),Yn=Qs&&window.KERN_ELEVATIONS?.build(Qs,k.floor,k.id),_d=Yn?[...Yn.flights.flatMap(Kt=>Kt.treads.map(ri=>({...ri.rect,polygon:ri.polygon,z:ri.z-.12,height:.12}))),...Yn.landings.map(Kt=>({...Kt.rect,polygon:Kt.polygon,z:Kt.z-.15,height:.15}))]:[{x:k.x,y:k.y,w:k.w,h:k.h,z:ue-.18,height:.18}];for(let Kt of _d){let ri,er;if(!Yn&&k.shape){let xd=new Qn(window.KERN_SHAPES.points(k).map(rh=>new me(rh[0],-rh[1])));ri=new Ki(xd,{depth:Kt.height,bevelEnabled:!1,steps:1}),ri.rotateX(-Math.PI/2),er=new Mt(ri,Ht),er.position.y=Kt.z+Q.baseGroupY}else ri=new Rn(Kt.w,Kt.height,Kt.h),er=new Mt(ri,Ht),er.position.set(Kt.x+Kt.w/2,Kt.z+Kt.height/2+Q.baseGroupY,Kt.y+Kt.h/2);Ve.add(er)}Yn&&(at.textContent=ue.toFixed(2)+" m \xB7 "+Yn.segments[0].risers+" rises \xD7 "+(Yn.metrics.riserMax*100).toFixed(1)+" cm \xB7 "+(h.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"))}let Te=k.x-.25,Ye=k.y+k.h+.25,je=Q.baseHeight+Q.baseGroupY,lt=ue+Q.baseGroupY,it=[new C(Te,je,Ye),new C(Te,lt,Ye)],ct=new Mn(new At().setFromPoints(it),ss);ct.computeLineDistances(),ct.renderOrder=16,Ve.add(ct);for(let Qs of[je,lt]){let Yn=new Mn(new At().setFromPoints([new C(Te-.18,Qs,Ye),new C(Te+.18,Qs,Ye)]),un);Yn.renderOrder=16,Ve.add(Yn)}let Ut=new C(Te,(je+lt)/2,Ye).project(o),Lt=n.domElement.getBoundingClientRect(),Ln=ue-Q.baseHeight;at.style.bottom="auto",at.style.left=Math.min(Math.max(8,(Ut.x+1)*Lt.width/2+12),Math.max(8,Lt.width-260))+"px",at.style.top=Math.min(Math.max(8,(1-Ut.y)*Lt.height/2),Math.max(8,Lt.height-60))+"px",at.textContent=(Ln>0?"+":"")+Ln.toFixed(2)+" m \xB7 "+at.textContent,h.preventDefault(),h.stopImmediatePropagation();return}let b=Q.original,U=h.ctrlKey?0:window.snapSize?.()??.5,fe=U?Math.round((M.x-Q.start.x)/U)*U:M.x-Q.start.x,X=U?Math.round((M.z-Q.start.z)/U)*U:M.z-Q.start.z,Y={...b};if(Q.edge?.startsWith("rotate-")){let k=Q.rotationPivot||{x:b.x+b.w/2,y:b.y+b.h/2},oe=Math.atan2(Q.start.z-k.y,Q.start.x-k.x),G=window.KERN_ROTATE.delta(b,(Math.atan2(M.z-k.y,M.x-k.x)-oe)*180/Math.PI,h.shiftKey);window.KERN_SHAPES.rotate(Y,G,k),Q.rotationFeedback={center:k,start:oe,degrees:G,cursor:M.clone()}}else if(Q.edge)Q.edge.includes("e")&&(Y.w=Math.max(1,b.w+fe)),Q.edge.includes("s")&&(Y.h=Math.max(1,b.h+X)),Q.edge.includes("w")&&(Y.x=Math.min(b.x+b.w-1,b.x+fe),Y.w=b.x+b.w-Y.x),Q.edge.includes("n")&&(Y.y=Math.min(b.y+b.h-1,b.y+X),Y.h=b.y+b.h-Y.y);else{Y.x+=M.x-Q.start.x,Y.y+=M.z-Q.start.z;let k=18*o.position.distanceTo(M)*Math.tan(o.fov*Math.PI/360)/Math.max(1,n.domElement.getBoundingClientRect().height),oe=h.ctrlKey&&h.shiftKey&&!h.altKey&&window.KERN_ROOM_SNAP?.translation(Y,e.levels.find(G=>G.id===b.floor).rooms,new Set([b.id]),k);Q.snap=oe||null,oe?(Y.x+=oe.dx,Y.y+=oe.dy):h.ctrlKey||(Y.x=b.x+fe,Y.y=b.y+X)}if(Q.edge&&!Q.edge.startsWith("rotate-")&&(h.shiftKey&&!h.ctrlKey||h.altKey)&&window.KERN_TRANSFORM&&Object.assign(Y,window.KERN_TRANSFORM.resize(b,Q.edge,fe,X,{...h,shiftKey:h.shiftKey&&!h.ctrlKey,altKey:h.altKey})),Q.edge&&!Q.edge.startsWith("rotate-")&&h.shiftKey&&h.ctrlKey&&!h.altKey){let k=Q.edge,oe={x:b.x+(k.includes("e")?b.w:0)+M.x-Q.start.x,y:b.y+(k.includes("s")?b.h:0)+M.z-Q.start.z},G=18*o.position.distanceTo(M)*Math.tan(o.fov*Math.PI/360)/Math.max(1,n.domElement.getBoundingClientRect().height),ve=window.KERN_ROOM_SNAP?.point(oe,e.levels.find(ue=>ue.id===b.floor).rooms,new Set([b.id]),G);Q.snap=ve||null,ve&&(k.includes("e")&&(Y.w=Math.max(1,ve.x-b.x)),k.includes("s")&&(Y.h=Math.max(1,ve.y-b.y)),k.includes("w")&&(Y.x=Math.min(ve.x,b.x+b.w-1),Y.w=b.x+b.w-Y.x),k.includes("n")&&(Y.y=Math.min(ve.y,b.y+b.h-1),Y.h=b.y+b.h-Y.y))}if(b.shape&&Q.edge&&!Q.edge.startsWith("rotate-")&&window.KERN_TRANSFORM?.orientedResize&&Object.assign(Y,window.KERN_TRANSFORM.orientedResize(b,Q.edge,M.x-Q.start.x,M.z-Q.start.z,h)),Q.next=Y,Xn(Y),Q.rotationFeedback){let k=Q.rotationFeedback,oe=k.center,G=Math.hypot(k.cursor.x-oe.x,k.cursor.z-oe.y),ve=Math.min(G,6)*.8,ue=k.start+k.degrees*Math.PI/180,Te=Y.z+Q.baseGroupY+.12,Ye=[];for(let it=0,ct=Math.max(2,Math.min(160,Math.ceil(Math.abs(k.degrees)/5)));it<=ct;it++){let Ut=k.start+(ue-k.start)*it/ct;Ye.push(new C(oe.x+Math.cos(Ut)*ve,Te,oe.y+Math.sin(Ut)*ve))}let je=[new C(oe.x+Math.cos(k.start)*G,Te,oe.y+Math.sin(k.start)*G),new C(oe.x,Te,oe.y),new C(oe.x+Math.cos(ue)*G,Te,oe.y+Math.sin(ue)*G)];for(let it of[Ye,je]){let ct=new Mn(new At().setFromPoints(it),ss);ct.computeLineDistances(),ct.renderOrder=15,Ve.add(ct)}let lt=n.domElement.getBoundingClientRect();at.style.display="block",at.style.bottom="auto",at.style.left=Math.min(Math.max(8,h.clientX-lt.left+16),Math.max(8,lt.width-130))+"px",at.style.top=Math.max(8,h.clientY-lt.top-38)+"px",at.textContent=(k.degrees>0?"+":"")+k.degrees.toFixed(1)+"\xB0"}if(Q.snap)for(let k of Q.snap.guides?.length?Q.snap.guides:[Q.snap]){let oe=Y.z+d.get(Y.floor).position.y+.1,G=k.edge?[k.edge.a,k.edge.b]:[[k.x-.2,k.y],[k.x+.2,k.y],[k.x,k.y],[k.x,k.y-.2],[k.x,k.y+.2]],ve=new Mn(new At().setFromPoints(G.map(ue=>new C(ue[0],oe,ue[1]))),Fi);ve.renderOrder=12,Ve.add(ve)}h.preventDefault(),h.stopImmediatePropagation()},$t=h=>{if(!Q||Q.pointerId!==h.pointerId)return;let M=Q;Q=null,Fe(),d.get(M.original.floor).position.y=M.baseGroupY,at.style.display="none",l.enabled=!0,h.preventDefault(),h.stopImmediatePropagation(),n.domElement.hasPointerCapture(h.pointerId)&&n.domElement.releasePointerCapture(h.pointerId),M.next.__elevation||["x","y","w","h"].some(b=>M.next[b]!==M.original[b])||JSON.stringify(M.next.shape)!==JSON.stringify(M.original.shape)||JSON.stringify(M.next.routeStair)!==JSON.stringify(M.original.routeStair)?t.onRoomEdit?.(M.original.floor,M.original.id,M.next):M.edge?.startsWith("rotate-")&&(window.KERN_ROTATE.choosePivot(M.original,"rooms",Number(M.edge.slice(7))),Xn(M.original))},Zt=()=>{Fe(),Q&&(d.get(Q.original.floor).position.y=Q.baseGroupY),at.style.display="none",Q=null,l.enabled=!Ft,be&&Xn(be)};n.domElement.addEventListener("pointerdown",It,!0),n.domElement.addEventListener("pointermove",gt,!0),n.domElement.addEventListener("pointerup",$t,!0),n.domElement.addEventListener("pointercancel",Zt,!0),n.domElement.addEventListener("lostpointercapture",Zt,!0);let Et=null,bn=document.createElement("div");bn.style.cssText="position:absolute;border:1px solid #79b8ff;background:#79b8ff20;pointer-events:none;display:none;z-index:25",i.append(bn);let _t=()=>{Et=null,bn.style.display="none"},rn=h=>{Ft||_n!==null||h.altKey||h.button!==0||Q||de!=="select"||(Et={id:h.pointerId,x:h.clientX,y:h.clientY,shift:h.shiftKey,subtract:h.ctrlKey||h.metaKey,previous:nt?.ids||[]})},on=h=>{if(!Et||Et.id!==h.pointerId||Math.hypot(h.clientX-Et.x,h.clientY-Et.y)<5)return;let M=n.domElement.getBoundingClientRect();Et.moved=!0,bn.style.display="block",Object.assign(bn.style,{left:Math.min(h.clientX,Et.x)-M.left+"px",top:Math.min(h.clientY,Et.y)-M.top+"px",width:Math.abs(h.clientX-Et.x)+"px",height:Math.abs(h.clientY-Et.y)+"px"})},Xt=h=>{if(!Et||Et.id!==h.pointerId)return;let M=Et;if(_t(),!M.moved)return;h.preventDefault(),Se.clear(),Ce=null;let b=n.domElement.getBoundingClientRect(),U=Math.min(M.x,h.clientX),fe=Math.max(M.x,h.clientX),X=Math.min(M.y,h.clientY),Y=Math.max(M.y,h.clientY),k=Z||ie,oe=e.levels.find(ue=>ue.id===k);if(!oe)return;o.updateMatrixWorld(!0);let G=oe.rooms.filter(ue=>{let Te=(window.KERN_SHAPES?.points(ue)||[[ue.x,ue.y],[ue.x+ue.w,ue.y],[ue.x+ue.w,ue.y+ue.h],[ue.x,ue.y+ue.h]]).flatMap(lt=>[ue.z,ue.z+(ue.height||0)].map(it=>new C(lt[0],it+d.get(k).position.y,lt[1]).project(o))).filter(lt=>lt.z>=-1&&lt.z<=1);if(!Te.length)return!1;let Ye=Te.map(lt=>(lt.x+1)*b.width/2+b.left),je=Te.map(lt=>(1-lt.y)*b.height/2+b.top);return Math.min(...Ye)<=fe&&Math.max(...Ye)>=U&&Math.min(...je)<=Y&&Math.max(...je)>=X}).map(ue=>ue.id),ve=M.subtract?M.previous.filter(ue=>!G.includes(ue)):M.shift?[...new Set([...M.previous,...G])]:G;Z||F(k,{preserveEditing:!0}),as(k,ve),t.onRoomsSelect?.(k,ve)};n.domElement.addEventListener("pointerdown",rn,!0),n.domElement.addEventListener("pointermove",on,!0),n.domElement.addEventListener("pointerup",Xt,!0),n.domElement.addEventListener("pointercancel",_t,!0),n.domElement.addEventListener("lostpointercapture",_t,!0);let jt=h=>{Ft||_n===h.pointerId||h.__viewNavigation||(Se.add(h.pointerId),Se.size>1?Ce=null:Ce=h.button===0?{id:h.pointerId,x:h.clientX,y:h.clientY,moved:!1}:null)},js=h=>{if(!Ft){if(Ce&&Math.hypot(h.clientX-Ce.x,h.clientY-Ce.y)>5&&(Ce.moved=!0),Se.size||h.buttons){n.domElement.title="",ye(null);return}ye(ce(h))}},si=h=>{if(Ft||h.__viewNavigation)return;let M=Ce&&h.pointerId===Ce.id&&!Ce.moved&&Math.hypot(h.clientX-Ce.x,h.clientY-Ce.y)<=5&&Se.size===1;if(Se.delete(h.pointerId),Ce=null,M){let b=ce(h);if(b){let U=se?.floorSurface||se?.roomLabel&&(h.shiftKey||Z!==b||!x.has(b));h.shiftKey&&(U||!se?.room&&!se?.door)?t.onFloorScopeToggle?t.onFloorScopeToggle(b):Ee(b,!0):U?F(b):(F(b,{preserveEditing:!!se?.room||!!se?.door}),se?.door?t.onDoorSelect?.(b,se.door):se?.room&&t.onRoomSelect?.(b,se.room))}}},_l=()=>{_t(),_n=null,E=null,n.domElement.style.cursor="",l.mouseButtons.LEFT=null,l.mouseButtons.RIGHT=cn.PAN,ke(!0),Zt(),Se.clear(),Ce=null,vt=!1,ze(),ye(null)};window.addEventListener("blur",_l);let md=s;s=()=>{window.removeEventListener("blur",_l),md()};let qc={pointerdown:jt,pointermove:js,pointerup:si,pointercancel:h=>{Se.delete(h.pointerId),Ce=null,ye(null)},pointerleave:()=>{Se.size||(n.domElement.title="",ye(null))},keydown:h=>{if(h.key==="Escape"&&Et){_t(),Ce=null,Se.clear(),h.preventDefault(),h.stopPropagation();return}if(h.key==="Escape"&&(pe||de!=="select")){h.preventDefault(),h.stopImmediatePropagation(),ke(!0);return}if(h.key==="Escape"&&Q){h.preventDefault(),h.stopImmediatePropagation(),Zt();return}h.key==="Escape"&&Z?(h.preventDefault(),h.stopPropagation(),Ie()):Z&&["ArrowUp","ArrowDown"].includes(h.key)&&(h.preventDefault(),h.stopPropagation(),He(h.key==="ArrowUp"?1:-1))},contextmenu:h=>{h.preventDefault(),!(Ft||h.altKey||performance.now()<B)&&(ce(h),se&&t.onContext?.({floor:se.floor,room:se.room,x:se.point.x,y:se.point.z,z:e.levels.find(M=>M.id===se.floor)?.rooms.find(M=>M.id===se.room)?.z??e.levels.find(M=>M.id===se.floor)?.z??se.point.y,clientX:h.clientX,clientY:h.clientY}))}};for(let[h,M]of Object.entries(qc))n.domElement.addEventListener(h,M);let Zc=()=>{if(_e)return;let h=Math.max(1,i.clientWidth),M=Math.max(1,i.clientHeight);n.setSize(h,M,!1),o.aspect=h/M,o.updateProjectionMatrix(),Xe=""},Kc=()=>{ze(),vt=!0},Jc=()=>{vt=!1,ge=performance.now(),he=rt};l.addEventListener("start",Kc),l.addEventListener("end",Jc);let $c=new ResizeObserver(Zc),jc=h=>{h.preventDefault(),t.onContextLost?.()};n.domElement.addEventListener("webglcontextlost",jc);let Ft=!1,Oi=!1,dn=null,cs=null,ro=0,Qc=0,eh=!0,xi=new Xr(16773074,55,35,Math.PI/7,.65,1.3);xi.visible=!1,r.add(xi),r.add(xi.target);let yi=new Tn,th=[...w?.rooms||[],...e.levels.filter(h=>h.id!==w?.id).flatMap(h=>h.rooms.filter(M=>M.groundSurface||M.localSteps&&e.stairs.some(b=>b.localSteps&&b.floorId===h.id&&b.roomId===M.id&&Math.min(...b.stops.map(U=>U.z))<=S+.2&&Math.max(...b.stops.map(U=>U.z))>=S-.2)))],nh={x:I-(te+50)/2,y:N-(te+50)/2,w:te+50,h:te+50};if(e.shapeAware&&window.KERN_SHAPES){let h=window.KERN_SHAPES,M=h.difference(h.multi(nh),th.filter(b=>b.groundSurface||b.localSteps||!["courtyard","terrace"].includes(b.type)).map(b=>b.routeStair&&e.stairs.find(U=>U.roomId===b.id)?.footprintGeometry||h.multi(b)));for(let b of M){let U=new Qn(b[0].map(X=>new me(X[0],-X[1])));for(let X of b.slice(1))U.holes.push(new Pi(X.map(Y=>new me(Y[0],-Y[1]))));let fe=new Mt(new Hr(U),v("#535c62"));fe.rotation.x=-Math.PI/2,fe.position.y=S-.02,yi.add(fe)}}else for(let h of window.BuildingPreviewGeometry.subtractAll(nh,th.filter(M=>M.groundSurface||M.localSteps||!["courtyard","terrace"].includes(M.type)))){let M=new Mt(new ei(h.w,h.h),v("#535c62"));M.rotation.x=-Math.PI/2,M.position.set(h.x+h.w/2,S-.02,h.y+h.h/2),yi.add(M)}return yi.visible=!1,r.add(yi),s=sh,$c.observe(i),Zc(),ae(),t.viewState?yl(t.viewState):Je(),n.setAnimationLoop(()=>{if(!_e){if(Ft){ih(),dn?.fly&&Pe(),n.render(r,o);return}Ue()||l.update(),os(),Pe(),n.render(r,o)}}),{cameraPose(){let h=o.getWorldDirection(new C);return{x:o.position.x,y:o.position.z,z:o.position.y,yaw:Math.atan2(-h.x,-h.z),pitch:Math.asin(Math.max(-1,Math.min(1,h.y))),fov:o.fov,roll:new vn().setFromQuaternion(o.quaternion,"YXZ").z}},setAuthoringMode:et,cancelAuthoring:()=>ke(!0),cancelEdit:Zt,getOrbitViewState(){return Ft&&cs?JSON.parse(JSON.stringify(cs)):xl()},selectRoom:Dn,selectRooms:as,selectObjects:io,selectFloors:so,setEditableFloors:Ge,activateFloor:F,chooseFloor:Ee,frameSelection:gl,setWalk:gd,fit:Je,dispose:sh,showAll:Ie,isolate:ot,hoverFloor:ye,adjacentFloor:He,getViewState:xl,restoreViewState:yl,syncActiveFloor:Re,zoomBy(h){if(!Number.isFinite(h)||h<=0)return;let M=o.position.clone().sub(l.target),b=ni.clamp(M.length()*h,l.minDistance,l.maxDistance);xe(l.target.clone().add(M.normalize().multiplyScalar(b)),l.target,!1)},setGrid(h){pt=!!h,q.visible=pt},getFocusedFloor(){return Z},setFloor(h,M){let b=d.get(h);if(b){if(ze(),b.visible=!!M,Z===h&&!M&&(Z=A()[0]||null),!Z&&M&&(Z=h),!M&&be?.floor===h){let U=be.isFloor?nt:null;Dn(null,null),U&&(nt=U)}!M&&nt?.objects&&io(nt.objects.filter(U=>U.floor!==h)),ye(null),ae(),Pe(!0),H("visibility")}},setExplode(h){let M=Math.max(0,Math.min(12,Number(h)||0));if(M===J)return;let b=we(ie);J=M,ye(null),ae(),Z?We(Z,!!tt):(ze(),re+=we(ie)-b),Pe(!0)},setSlabs(h){De=!!h,ae(),Pe(!0)},setCeilings(h){Ae=!!h,ae(),Pe(!0)},setWalls(h){$=!!h,ae(),Pe(!0)},setCutaway(h){Ne=!!h,ae(),Pe(!0)},setCutHeight(h){let M=Number(h);Number.isFinite(M)&&(Qe=Math.max(.4,Math.min(2.4,M)),ae(),Pe(!0))},setLabels(h){st=!!h,ae(),Pe(!0)},setXray(h){rt=!!h,ae(),Pe(!0)},png(){return Pe(!0),n.render(r,o),new Promise((h,M)=>n.domElement.toBlob(b=>b?h(b):M(Error("Could not create this image.")),"image/png"))}}}catch(r){try{s()}catch{}throw r}}window.Building3D={mount:Ix,version:"180"};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
