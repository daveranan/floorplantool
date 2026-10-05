(()=>{var wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ru=0,Uc=1,Cu=2;var Fc=1,Pu=2,mi=3,wi=0,Tn=1,ln=2,Pi=0,as=1,Oc=2,Bc=3,zc=4,Iu=5,Wi=100,Du=101,Lu=102,Nu=103,Uu=104,Fu=200,Ou=201,Bu=202,zu=203,oa=204,aa=205,Hu=206,ku=207,Vu=208,Gu=209,Wu=210,Xu=211,Yu=212,qu=213,Zu=214,ka=0,Va=1,Ga=2,ls=3,Wa=4,Xa=5,Ya=6,qa=7,Hc=0,Ku=1,Ju=2,Ii=0,$u=1,ju=2,Qu=3,td=4,ed=5,nd=6,id=7;var kc=300,gs=301,_s=302,Za=303,Ka=304,po=306,la=1e3,Gi=1001,ca=1002,Rn=1003,sd=1004;var mo=1005;var ti=1006,Ja=1007;var Ji=1008;var si=1009,Vc=1010,Gc=1011,hr=1012,$a=1013,$i=1014,ri=1015,ur=1016,ja=1017,Qa=1018,dr=1020,Wc=35902,Xc=35899,Yc=1021,qc=1022,Gn=1023,Ks=1026,fr=1027,tl=1028,el=1029,Zc=1030,nl=1031;var il=1033,go=33776,_o=33777,xo=33778,yo=33779,sl=35840,rl=35841,ol=35842,al=35843,ll=36196,cl=37492,hl=37496,ul=37808,dl=37809,fl=37810,pl=37811,ml=37812,gl=37813,_l=37814,xl=37815,yl=37816,vl=37817,Ml=37818,El=37819,Sl=37820,bl=37821,wl=36492,Tl=36494,Al=36495,Rl=36283,Cl=36284,Pl=36285,Il=36286;var Ur=2300,ha=2301,ra=2302,Sc=2400,bc=2401,wc=2402;var rd=3200,od=3201;var Kc=0,ad=1,Di="",on="srgb",cs="srgb-linear",Fr="linear",Le="srgb";var os=7680;var Tc=519,ld=512,cd=513,hd=514,Jc=515,ud=516,dd=517,fd=518,pd=519,ua=35044;var $c="300 es",Qn=2e3,Or=2001;var ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zh=1234567,qs=Math.PI/180,hs=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function jc(i,t){return(i%t+t)%t}function Sf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bf(i,t,e){return i!==t?(e-i)/(t-i):0}function Dr(i,t,e){return(1-e)*i+e*t}function wf(i,t,e,n){return Dr(i,t,1-Math.exp(-e*n))}function Tf(i,t=1){return t-Math.abs(jc(i,t*2)-t)}function Af(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Pf(i,t){return i+Math.random()*(t-i)}function If(i){return i*(.5-Math.random())}function Df(i){i!==void 0&&(Zh=i);let t=Zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lf(i){return i*qs}function Nf(i){return i*hs}function Uf(i){return(i&i-1)===0&&i!==0}function Ff(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Of(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var oi={DEG2RAD:qs,RAD2DEG:hs,generateUUID:hi,clamp:ye,euclideanModulo:jc,mapLinear:Sf,inverseLerp:bf,lerp:Dr,damp:wf,pingpong:Tf,smoothstep:Af,smootherstep:Rf,randInt:Cf,randFloat:Pf,randFloatSpread:If,seededRandom:Df,degToRad:Lf,radToDeg:Nf,isPowerOfTwo:Uf,ceilPowerOfTwo:Ff,floorPowerOfTwo:Of,setQuaternionFromProperEuler:Bf,normalize:De,denormalize:jn},gt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ne=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==d||c!==p||h!==g){let _=1-a,m=l*d+c*p+h*g+f*x,R=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){let D=Math.sqrt(S),C=Math.atan2(D,m*R);_=Math.sin(_*C)/D,a=Math.sin(a*C)/D}let v=a*R;if(l=l*_+d*v,c=c*_+p*v,h=h*_+g*v,f=f*_+x*v,_===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=D,c*=D,h*=D,f*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*p-c*d,t[e+1]=l*g+h*d+c*f-a*p,t[e+2]=c*g+h*p+a*d-l*f,t[e+3]=h*g-a*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kl.copy(this).projectOnVector(t),this.sub(Kl)}reflect(t){return this.sub(Kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kl=new A,Kh=new Ne,ue=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],x=s[0],_=s[3],m=s[6],R=s[1],S=s[4],v=s[7],D=s[2],C=s[5],U=s[8];return r[0]=o*x+a*R+l*D,r[3]=o*_+a*S+l*C,r[6]=o*m+a*v+l*U,r[1]=c*x+h*R+f*D,r[4]=c*_+h*S+f*C,r[7]=c*m+h*v+f*U,r[2]=d*x+p*R+g*D,r[5]=d*_+p*S+g*C,r[8]=d*m+p*v+g*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*f+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new ue;function Qc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function md(){let i=Br("canvas");return i.style.display="block",i}var Jh={};function Js(i){i in Jh||(Jh[i]=!0,console.warn(i))}function gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var $h=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){let i={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Le&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Le&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cs]:{primaries:t,whitePoint:n,transfer:Fr,toXYZ:$h,fromXYZ:jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:Le,toXYZ:$h,fromXYZ:jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}var Ae=zf();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,da=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ps===void 0&&(Ps=Br("canvas")),Ps.width=t.width,Ps.height=t.height;let s=Ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hf=0,$s=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($l(s[o].image)):r.push($l(s[o]))}else r=$l(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function $l(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kf=0,jl=new A,bn=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=ti,o=Ji,a=Gn,l=si,c=i.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=hi(),this.name="",this.source=new $s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case la:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case la:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=kc;bn.DEFAULT_ANISOTROPY=1;var qe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],x=l[2],_=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(p+1)/2,D=(m+1)/2,C=(h+d)/4,U=(f+x)/4,O=(g+_)/4;return S>v&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=U/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=O/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=U/r,s=O/r),this.set(n,s,r,e),this}let R=Math.sqrt((_-g)*(_-g)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(R)<.001&&(R=1),this.x=(_-g)/R,this.y=(f-x)/R,this.z=(d-h)/R,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this.w=ye(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this.w=ye(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fa=class extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new bn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new $s(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends fa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},zr=class extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(t.matrixWorld),this.union(Co)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),Po.subVectors(this.max,Mr),Is.subVectors(t.a,Mr),Ds.subVectors(t.b,Mr),Ls.subVectors(t.c,Mr),Oi.subVectors(Ds,Is),Bi.subVectors(Ls,Ds),ns.subVectors(Is,Ls);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-ns.z,ns.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,ns.z,0,-ns.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-ns.y,ns.x,0];return!Ql(e,Is,Ds,Ls,Po)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,Is,Ds,Ls,Po))?!1:(Io.crossVectors(Oi,Bi),e=[Io.x,Io.y,Io.z],Ql(e,Is,Ds,Ls,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yi=[new A,new A,new A,new A,new A,new A,new A,new A],Kn=new A,Co=new dn,Is=new A,Ds=new A,Ls=new A,Oi=new A,Bi=new A,ns=new A,Mr=new A,Po=new A,Io=new A,is=new A;function Ql(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){is.fromArray(i,r);let a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Vf=new dn,Er=new A,tc=new A,Ti=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);let e=Er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(tc)),this.expandByPoint(Er.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vi=new A,ec=new A,Do=new A,zi=new A,nc=new A,Lo=new A,ic=new A,Xi=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ec.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(ec);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Do),a=zi.dot(this.direction),l=-zi.dot(Do),c=zi.lengthSq(),h=Math.abs(1-o*o),f,d,p,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let x=1/h;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ec).addScaledVector(Do,d),p}intersectSphere(t,e){vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,r){nc.subVectors(e,t),Lo.subVectors(n,t),ic.crossVectors(nc,Lo);let o=this.direction.dot(ic),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,t);let l=a*this.direction.dot(Lo.crossVectors(zi,Lo));if(l<0)return null;let c=a*this.direction.dot(nc.cross(zi));if(c<0||l+c>o)return null;let h=-a*zi.dot(ic);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class i{constructor(t,e,n,s,r,o,a,l,c,h,f,d,p,g,x,_){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,d,p,g,x,_)}set(t,e,n,s,r,o,a,l,c,h,f,d,p,g,x,_){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=p,m[7]=g,m[11]=x,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),o=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*f,g=c*h,x=c*f;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*f,g=c*h,x=c*f;e[0]=d-x*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*f,e[8]=g*f+p,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*f+g,e[10]=d-x*f}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+x,e[5]=o*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*h,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gf,t,Wf)}lookAt(t,e,n){let s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Hi.crossVectors(n,Nn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Hi.crossVectors(n,Nn)),Hi.normalize(),No.crossVectors(Nn,Hi),s[0]=Hi.x,s[4]=No.x,s[8]=Nn.x,s[1]=Hi.y,s[5]=No.y,s[9]=Nn.y,s[2]=Hi.z,s[6]=No.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],x=n[6],_=n[10],m=n[14],R=n[3],S=n[7],v=n[11],D=n[15],C=s[0],U=s[4],O=s[8],w=s[12],b=s[1],F=s[5],K=s[9],$=s[13],tt=s[2],B=s[6],G=s[10],X=s[14],H=s[3],ft=s[7],mt=s[11],It=s[15];return r[0]=o*C+a*b+l*tt+c*H,r[4]=o*U+a*F+l*B+c*ft,r[8]=o*O+a*K+l*G+c*mt,r[12]=o*w+a*$+l*X+c*It,r[1]=h*C+f*b+d*tt+p*H,r[5]=h*U+f*F+d*B+p*ft,r[9]=h*O+f*K+d*G+p*mt,r[13]=h*w+f*$+d*X+p*It,r[2]=g*C+x*b+_*tt+m*H,r[6]=g*U+x*F+_*B+m*ft,r[10]=g*O+x*K+_*G+m*mt,r[14]=g*w+x*$+_*X+m*It,r[3]=R*C+S*b+v*tt+D*H,r[7]=R*U+S*F+v*B+D*ft,r[11]=R*O+S*K+v*G+D*mt,r[15]=R*w+S*$+v*X+D*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],p=t[14],g=t[3],x=t[7],_=t[11],m=t[15];return g*(+r*l*f-s*c*f-r*a*d+n*c*d+s*a*p-n*l*p)+x*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+_*(+e*c*f-e*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+m*(-s*a*h-e*l*f+e*a*d+s*o*f-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],p=t[11],g=t[12],x=t[13],_=t[14],m=t[15],R=f*_*c-x*d*c+x*l*p-a*_*p-f*l*m+a*d*m,S=g*d*c-h*_*c-g*l*p+o*_*p+h*l*m-o*d*m,v=h*x*c-g*f*c+g*a*p-o*x*p-h*a*m+o*f*m,D=g*f*l-h*x*l-g*a*d+o*x*d+h*a*_-o*f*_,C=e*R+n*S+s*v+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return t[0]=R*U,t[1]=(x*d*r-f*_*r-x*s*p+n*_*p+f*s*m-n*d*m)*U,t[2]=(a*_*r-x*l*r+x*s*c-n*_*c-a*s*m+n*l*m)*U,t[3]=(f*l*r-a*d*r-f*s*c+n*d*c+a*s*p-n*l*p)*U,t[4]=S*U,t[5]=(h*_*r-g*d*r+g*s*p-e*_*p-h*s*m+e*d*m)*U,t[6]=(g*l*r-o*_*r-g*s*c+e*_*c+o*s*m-e*l*m)*U,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*U,t[8]=v*U,t[9]=(g*f*r-h*x*r-g*n*p+e*x*p+h*n*m-e*f*m)*U,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*m+e*a*m)*U,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*p-e*a*p)*U,t[12]=D*U,t[13]=(h*x*s-g*f*s+g*n*d-e*x*d-h*n*_+e*f*_)*U,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*_-e*a*_)*U,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*d+e*a*d)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,d=r*c,p=r*h,g=r*f,x=o*h,_=o*f,m=a*f,R=l*c,S=l*h,v=l*f,D=n.x,C=n.y,U=n.z;return s[0]=(1-(x+m))*D,s[1]=(p+v)*D,s[2]=(g-S)*D,s[3]=0,s[4]=(p-v)*C,s[5]=(1-(d+m))*C,s[6]=(_+R)*C,s[7]=0,s[8]=(g+S)*U,s[9]=(_-R)*U,s[10]=(1-(d+x))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ns.set(s[0],s[1],s[2]).length(),o=Ns.set(s[4],s[5],s[6]).length(),a=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);let c=1/r,h=1/o,f=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,e.setFromRotationMatrix(Jn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Qn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Or)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Qn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Or)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ns=new A,Jn=new Re,Gf=new A(0,0,0),Wf=new A(1,1,1),Hi=new A,No=new A,Nn=new A,Qh=new Re,tu=new Ne,fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xf=0,eu=new A,Us=new Ne,Mi=new Re,Uo=new A,Sr=new A,Yf=new A,qf=new Ne,nu=new A(1,0,0),iu=new A(0,1,0),su=new A(0,0,1),ru={type:"added"},Zf={type:"removed"},Fs={type:"childadded",child:null},sc={type:"childremoved",child:null},Ue=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new fn,n=new Ne,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new ue}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Uo.copy(t):Uo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Sr,Uo,this.up):Mi.lookAt(Uo,Sr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(Mi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,Yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ue.DEFAULT_UP=new A(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new A,Ei=new A,rc=new A,Si=new A,Os=new A,Bs=new A,ou=new A,oc=new A,ac=new A,lc=new A,cc=new qe,hc=new qe,uc=new qe,li=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),Ei.subVectors(n,e),rc.subVectors(t,e);let o=$n.dot($n),a=$n.dot(Ei),l=$n.dot(rc),c=Ei.dot(Ei),h=Ei.dot(rc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return cc.setScalar(0),hc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(t,e),hc.fromBufferAttribute(t,n),uc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(cc,r.x),o.addScaledVector(hc,r.y),o.addScaledVector(uc,r.z),o}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),Ei.subVectors(t,e),$n.cross(Ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),$n.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,n),Bs.subVectors(r,n),oc.subVectors(t,n);let l=Os.dot(oc),c=Bs.dot(oc);if(l<=0&&c<=0)return e.copy(n);ac.subVectors(t,s);let h=Os.dot(ac),f=Bs.dot(ac);if(h>=0&&f<=h)return e.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Os,o);lc.subVectors(t,r);let p=Os.dot(lc),g=Bs.dot(lc);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Bs,a);let _=h*g-p*f;if(_<=0&&f-h>=0&&p-g>=0)return ou.subVectors(r,s),a=(f-h)/(f-h+(p-g)),e.copy(s).addScaledVector(ou,a);let m=1/(_+x+d);return o=x*m,a=d*m,e.copy(n).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function dc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Me=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ae.workingColorSpace){if(t=jc(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=dc(o,r,t+1/3),this.g=dc(o,r,t),this.b=dc(o,r,t-1/3)}return Ae.colorSpaceToWorking(this,s),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=_d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Ae.workingToColorSpace(gn.copy(this),t),Math.round(ye(gn.r*255,0,255))*65536+Math.round(ye(gn.g*255,0,255))*256+Math.round(ye(gn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.workingToColorSpace(gn.copy(this),e);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ae.workingColorSpace){return Ae.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=on){Ae.workingToColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,s=gn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(Fo);let n=Dr(ki.h,Fo.h,e),s=Dr(ki.s,Fo.s,e),r=Dr(ki.l,Fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Me;Me.NAMES=_d;var Kf=0,fi=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=as,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=aa,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==aa&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},an=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Je=new A,Oo=new gt,Jf=0,Qe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ua,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oo.fromBufferAttribute(this,e),Oo.applyMatrix3(t),this.setXY(e,Oo.x,Oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ua&&(t.usage=this.usage),t}};var Hr=class extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var kr=class extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},$f=0,kn=new Re,fc=new Ue,zs=new A,Un=new dn,br=new dn,rn=new A,Ee=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qc(t)?kr:Hr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return fc.lookAt(t),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Un.min,br.min),Un.expandByPoint(rn),rn.addVectors(Un.max,br.max),Un.expandByPoint(rn)):(Un.expandByPoint(br.min),Un.expandByPoint(br.max))}Un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)rn.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(t,c),rn.add(zs)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new A,l[O]=new A;let c=new A,h=new A,f=new A,d=new gt,p=new gt,g=new gt,x=new A,_=new A;function m(O,w,b){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,b),d.fromBufferAttribute(r,O),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(c),f.sub(c),p.sub(d),g.sub(d);let F=1/(p.x*g.y-g.x*p.y);isFinite(F)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(F),_.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(F),a[O].add(x),a[w].add(x),a[b].add(x),l[O].add(_),l[w].add(_),l[b].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let O=0,w=R.length;O<w;++O){let b=R[O],F=b.start,K=b.count;for(let $=F,tt=F+K;$<tt;$+=3)m(t.getX($+0),t.getX($+1),t.getX($+2))}let S=new A,v=new A,D=new A,C=new A;function U(O){D.fromBufferAttribute(s,O),C.copy(D);let w=a[O];S.copy(w),S.sub(D.multiplyScalar(D.dot(w))).normalize(),v.crossVectors(C,w);let F=v.dot(l[O])<0?-1:1;o.setXYZW(O,S.x,S.y,S.z,F)}for(let O=0,w=R.length;O<w;++O){let b=R[O],F=b.start,K=b.count;for(let $=F,tt=F+K;$<tt;$+=3)U(t.getX($+0)),U(t.getX($+1)),U(t.getX($+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,f=new A;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,_),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,_=l.length;x<_;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new Qe(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},au=new Re,ss=new Xi,Bo=new Ti,lu=new A,zo=new A,Ho=new A,ko=new A,pc=new A,Vo=new A,cu=new A,Go=new A,Tt=class extends Ue{constructor(t=new Ee,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(pc.fromBufferAttribute(f,t),o?Vo.addScaledVector(pc,h):Vo.addScaledVector(pc.sub(e),h))}e.add(Vo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(Bo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Bo,lu)===null||ss.origin.distanceToSquared(lu)>(t.far-t.near)**2))&&(au.copy(r).invert(),ss.copy(t.ray).applyMatrix4(au),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let _=d[g],m=o[_.materialIndex],R=Math.max(_.start,p.start),S=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let v=R,D=S;v<D;v+=3){let C=a.getX(v),U=a.getX(v+1),O=a.getX(v+2);s=Wo(this,m,t,n,c,h,f,C,U,O),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let _=g,m=x;_<m;_+=3){let R=a.getX(_),S=a.getX(_+1),v=a.getX(_+2);s=Wo(this,o,t,n,c,h,f,R,S,v),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let _=d[g],m=o[_.materialIndex],R=Math.max(_.start,p.start),S=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let v=R,D=S;v<D;v+=3){let C=v,U=v+1,O=v+2;s=Wo(this,m,t,n,c,h,f,C,U,O),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let _=g,m=x;_<m;_+=3){let R=_,S=_+1,v=_+2;s=Wo(this,o,t,n,c,h,f,R,S,v),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function jf(i,t,e,n,s,r,o,a){let l;if(t.side===Tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===wi,a),l===null)return null;Go.copy(a),Go.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Go);return c<e.near||c>e.far?null:{distance:c,point:Go.clone(),object:i}}function Wo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,zo),i.getVertexPosition(l,Ho),i.getVertexPosition(c,ko);let h=jf(i,t,e,n,zo,Ho,ko,cu);if(h){let f=new A;li.getBarycoord(cu,zo,Ho,ko,f),s&&(h.uv=li.getInterpolatedAttribute(s,a,l,c,f,new gt)),r&&(h.uv1=li.getInterpolatedAttribute(r,a,l,c,f,new gt)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,f,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new A,materialIndex:0};li.getNormal(zo,Ho,ko,d.normal),h.face=d,h.barycoord=f}return h}var Ce=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(f,2));function g(x,_,m,R,S,v,D,C,U,O,w){let b=v/U,F=D/O,K=v/2,$=D/2,tt=C/2,B=U+1,G=O+1,X=0,H=0,ft=new A;for(let mt=0;mt<G;mt++){let It=mt*F-$;for(let Yt=0;Yt<B;Yt++){let te=Yt*b-K;ft[x]=te*R,ft[_]=It*S,ft[m]=tt,c.push(ft.x,ft.y,ft.z),ft[x]=0,ft[_]=0,ft[m]=C>0?1:-1,h.push(ft.x,ft.y,ft.z),f.push(Yt/U),f.push(1-mt/O),X+=1}}for(let mt=0;mt<O;mt++)for(let It=0;It<U;It++){let Yt=d+It+B*mt,te=d+It+B*(mt+1),ae=d+(It+1)+B*(mt+1),$t=d+(It+1)+B*mt;l.push(Yt,te,$t),l.push(te,ae,$t),H+=6}a.addGroup(p,H,w),p+=H,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function xs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=xs(i[e]);for(let s in n)t[s]=n[s]}return t}function Qf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function th(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}var xd={clone:xs,merge:xn},tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Vr=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vi=new A,hu=new gt,uu=new gt,un=class extends Vr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,hu,uu),e.subVectors(uu,hu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hs=-90,ks=1,ma=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(Hs,ks,t,e);s.layers=this.layers,this.add(s);let r=new un(Hs,ks,t,e);r.layers=this.layers,this.add(r);let o=new un(Hs,ks,t,e);o.layers=this.layers,this.add(o);let a=new un(Hs,ks,t,e);a.layers=this.layers,this.add(a);let l=new un(Hs,ks,t,e);l.layers=this.layers,this.add(l);let c=new un(Hs,ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Gr=class extends bn{constructor(t=[],e=gs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ga=class extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ce(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Pi});r.uniforms.tEquirect.value=e;let o=new Tt(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=ti),new ma(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},_n=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},np={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let _=e.getJointPose(x,n),m=this._getHandJoint(c,x);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(np)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Wr=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},_a=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ua,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new A,Xr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tr=class extends fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vs,wr=new A,Gs=new A,Ws=new A,Xs=new gt,Tr=new gt,yd=new Re,Xo=new A,Ar=new A,Yo=new A,du=new gt,mc=new gt,fu=new gt,Yr=class extends Ue{constructor(t=new tr){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _a(e,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new Xr(n,3,0,!1)),Vs.setAttribute("uv",new Xr(n,2,3,!1))}this.geometry=Vs,this.material=t,this.center=new gt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Ws.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;qo(Xo.set(-.5,-.5,0),Ws,o,Gs,s,r),qo(Ar.set(.5,-.5,0),Ws,o,Gs,s,r),qo(Yo.set(.5,.5,0),Ws,o,Gs,s,r),du.set(0,0),mc.set(1,0),fu.set(1,1);let a=t.ray.intersectTriangle(Xo,Ar,Yo,!1,wr);if(a===null&&(qo(Ar.set(-.5,.5,0),Ws,o,Gs,s,r),mc.set(0,1),a=t.ray.intersectTriangle(Xo,Yo,Ar,!1,wr),a===null))return;let l=t.ray.origin.distanceTo(wr);l<t.near||l>t.far||e.push({distance:l,point:wr.clone(),uv:li.getInterpolation(wr,Xo,Ar,Yo,du,mc,fu,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function qo(i,t,e,n,s,r){Xs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Tr.x=r*Xs.x-s*Xs.y,Tr.y=s*Xs.x+r*Xs.y):Tr.copy(Xs),i.copy(t),i.x+=Tr.x,i.y+=Tr.y,i.applyMatrix4(yd)}var xa=class extends bn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Rn,h=Rn,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qr=class extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ys=new Re,pu=new Re,Zo=[],mu=new dn,ip=new Re,Rr=new Tt,Cr=new Ti,er=class extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ip)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),mu.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(mu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Cr.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(n),t.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),pu.multiplyMatrices(n,Ys),Rr.matrixWorld=pu,Rr.raycast(t,Zo);for(let o=0,a=Zo.length;o<a;o++){let l=Zo[o];l.instanceId=r,l.object=this,e.push(l)}Zo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xa(new Float32Array(s*this.count),s,this.count,tl,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gc=new A,sp=new A,rp=new ue,$e=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=gc.subVectors(n,e).cross(sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(gc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||rp.getNormalMatrix(t),s=this.coplanarPoint(gc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},rs=new Ti,op=new gt(.5,.5),Ko=new A,nr=class{constructor(t=new $e,e=new $e,n=new $e,s=new $e,r=new $e,o=new $e){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],p=r[7],g=r[8],x=r[9],_=r[10],m=r[11],R=r[12],S=r[13],v=r[14],D=r[15];if(s[0].setComponents(c-o,p-h,m-g,D-R).normalize(),s[1].setComponents(c+o,p+h,m+g,D+R).normalize(),s[2].setComponents(c+a,p+f,m+x,D+S).normalize(),s[3].setComponents(c-a,p-f,m-x,D-S).normalize(),n)s[4].setComponents(l,d,_,v).normalize(),s[5].setComponents(c-l,p-d,m-_,D-v).normalize();else if(s[4].setComponents(c-l,p-d,m-_,D-v).normalize(),e===Qn)s[5].setComponents(c+l,p+d,m+_,D+v).normalize();else if(e===Or)s[5].setComponents(l,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);let e=op.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ko.x=s.normal.x>0?t.max.x:t.min.x,Ko.y=s.normal.y>0?t.max.y:t.min.y,Ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cn=class extends fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ya=new A,va=new A,gu=new Re,Pr=new Xi,Jo=new Ti,_c=new A,_u=new A,Ze=class extends Ue{constructor(t=new Ee,e=new Cn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ya.fromBufferAttribute(e,s-1),va.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ya.distanceTo(va);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,t.ray.intersectsSphere(Jo)===!1)return;gu.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(gu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,_=g-1;x<_;x+=c){let m=h.getX(x),R=h.getX(x+1),S=$o(this,t,Pr,l,m,R,x);S&&e.push(S)}if(this.isLineLoop){let x=h.getX(g-1),_=h.getX(p),m=$o(this,t,Pr,l,x,_,g-1);m&&e.push(m)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,_=g-1;x<_;x+=c){let m=$o(this,t,Pr,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=$o(this,t,Pr,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $o(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ya.fromBufferAttribute(a,s),va.fromBufferAttribute(a,r),e.distanceSqToSegment(ya,va,_c,_u)>n)return;_c.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_c);if(!(c<t.near||c>t.far))return{distance:c,point:_u.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var xu=new A,yu=new A,Ai=class extends Ze{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)xu.fromBufferAttribute(e,s),yu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xu.distanceTo(yu);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yi=class extends Ze{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var us=class extends bn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zr=class extends bn{constructor(t,e,n=$i,s,r,o,a=Rn,l=Rn,c,h=Ks,f=1){if(h!==Ks&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kr=class extends bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Jr=class i extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new gt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let p=n+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ke=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],g=0,x=[],_=n/2,m=0;R(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new _e(f,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(p,2));function R(){let v=new A,D=new A,C=0,U=(e-t)/n;for(let O=0;O<=r;O++){let w=[],b=O/r,F=b*(e-t)+t;for(let K=0;K<=s;K++){let $=K/s,tt=$*l+a,B=Math.sin(tt),G=Math.cos(tt);D.x=F*B,D.y=-b*n+_,D.z=F*G,f.push(D.x,D.y,D.z),v.set(B,U,G).normalize(),d.push(v.x,v.y,v.z),p.push($,1-b),w.push(g++)}x.push(w)}for(let O=0;O<s;O++)for(let w=0;w<r;w++){let b=x[w][O],F=x[w+1][O],K=x[w+1][O+1],$=x[w][O+1];(t>0||w!==0)&&(h.push(b,F,$),C+=3),(e>0||w!==r-1)&&(h.push(F,K,$),C+=3)}c.addGroup(m,C,0),m+=C}function S(v){let D=g,C=new gt,U=new A,O=0,w=v===!0?t:e,b=v===!0?1:-1;for(let K=1;K<=s;K++)f.push(0,_*b,0),d.push(0,b,0),p.push(.5,.5),g++;let F=g;for(let K=0;K<=s;K++){let tt=K/s*l+a,B=Math.cos(tt),G=Math.sin(tt);U.x=w*G,U.y=_*b,U.z=w*B,f.push(U.x,U.y,U.z),d.push(0,b,0),C.x=B*.5+.5,C.y=G*.5*b+.5,p.push(C.x,C.y),g++}for(let K=0;K<s;K++){let $=D+K,tt=F+K;v===!0?h.push(tt,tt+1,$):h.push(tt+1,tt,$),O+=3}c.addGroup(m,O,v===!0?1:2),m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ir=class i extends Ke{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ma=class i extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(R){let S=new A,v=new A,D=new A;for(let C=0;C<e.length;C+=3)p(e[C+0],S),p(e[C+1],v),p(e[C+2],D),l(S,v,D,R)}function l(R,S,v,D){let C=D+1,U=[];for(let O=0;O<=C;O++){U[O]=[];let w=R.clone().lerp(v,O/C),b=S.clone().lerp(v,O/C),F=C-O;for(let K=0;K<=F;K++)K===0&&O===C?U[O][K]=w:U[O][K]=w.clone().lerp(b,K/F)}for(let O=0;O<C;O++)for(let w=0;w<2*(C-O)-1;w++){let b=Math.floor(w/2);w%2===0?(d(U[O][b+1]),d(U[O+1][b]),d(U[O][b])):(d(U[O][b+1]),d(U[O+1][b+1]),d(U[O+1][b]))}}function c(R){let S=new A;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(R),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let R=new A;for(let S=0;S<r.length;S+=3){R.x=r[S+0],R.y=r[S+1],R.z=r[S+2];let v=_(R)/2/Math.PI+.5,D=m(R)/Math.PI+.5;o.push(v,1-D)}g(),f()}function f(){for(let R=0;R<o.length;R+=6){let S=o[R+0],v=o[R+2],D=o[R+4],C=Math.max(S,v,D),U=Math.min(S,v,D);C>.9&&U<.1&&(S<.2&&(o[R+0]+=1),v<.2&&(o[R+2]+=1),D<.2&&(o[R+4]+=1))}}function d(R){r.push(R.x,R.y,R.z)}function p(R,S){let v=R*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function g(){let R=new A,S=new A,v=new A,D=new A,C=new gt,U=new gt,O=new gt;for(let w=0,b=0;w<r.length;w+=9,b+=6){R.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),C.set(o[b+0],o[b+1]),U.set(o[b+2],o[b+3]),O.set(o[b+4],o[b+5]),D.copy(R).add(S).add(v).divideScalar(3);let F=_(D);x(C,b+0,R,F),x(U,b+2,S,F),x(O,b+4,v,F)}}function x(R,S,v,D){D<0&&R.x===1&&(o[S]=R.x-1),v.x===0&&v.z===0&&(o[S]=D/2/Math.PI+.5)}function _(R){return Math.atan2(R.z,-R.x)}function m(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var jo=new A,Qo=new A,xc=new A,ta=new li,$r=class extends Ee{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(qs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:_,c:m}=ta;if(x.fromBufferAttribute(a,c[0]),_.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),ta.getNormal(xc),f[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,f[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let R=0;R<3;R++){let S=(R+1)%3,v=f[R],D=f[S],C=ta[h[R]],U=ta[h[S]],O=`${v}_${D}`,w=`${D}_${v}`;w in d&&d[w]?(xc.dot(d[w].normal)<=r&&(p.push(C.x,C.y,C.z),p.push(U.x,U.y,U.z)),d[w]=null):O in d||(d[O]={index0:c[R],index1:c[S],normal:xc.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:_}=d[g];jo.fromBufferAttribute(a,x),Qo.fromBufferAttribute(a,_),p.push(jo.x,jo.y,jo.z),p.push(Qo.x,Qo.y,Qo.z)}this.setAttribute("position",new _e(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new gt:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new A,s=[],r=[],o=[],a=new A,l=new Re;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ye(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ye(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},sr=class extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ea=class extends sr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function eh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ea=new A,yc=new eh,vc=new eh,Mc=new eh,Sa=class extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ea.subVectors(s[0],s[1]).add(s[0]),c=ea);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ea),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),_<1e-4&&(_=x),yc.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,x,_),vc.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,x,_),Mc.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,x,_)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),vc.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Mc.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(yc.calc(l),vc.calc(l),Mc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ap(i,t){let e=1-i;return e*e*t}function lp(i,t){return 2*(1-i)*i*t}function cp(i,t){return i*i*t}function Lr(i,t,e,n){return ap(i,t)+lp(i,e)+cp(i,n)}function hp(i,t){let e=1-i;return e*e*e*t}function up(i,t){let e=1-i;return 3*e*e*i*t}function dp(i,t){return 3*(1-i)*i*i*t}function fp(i,t){return i*i*i*t}function Nr(i,t,e,n,s){return hp(i,t)+up(i,e)+dp(i,n)+fp(i,s)}var jr=class extends Fn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ba=class extends Fn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y),Nr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qr=class extends Fn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends Fn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends Fn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,s.x,r.x,o.x),Lr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends Fn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,s.x,r.x,o.x),Lr(t,s.y,r.y,o.y),Lr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eo=class extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(vu(a,l.x,c.x,h.x,f.x),vu(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new gt().fromArray(s))}return this}},Ac=Object.freeze({__proto__:null,ArcCurve:Ea,CatmullRomCurve3:Sa,CubicBezierCurve:jr,CubicBezierCurve3:ba,EllipseCurve:sr,LineCurve:Qr,LineCurve3:wa,QuadraticBezierCurve:to,QuadraticBezierCurve3:Ta,SplineCurve:eo}),Aa=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ac[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ac[s.type]().fromJSON(s))}return this}},qi=class extends Aa{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Qr(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new to(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new jr(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new eo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new sr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ri=class extends qi{constructor(t){super(t),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new qi().fromJSON(s))}return this}};function pp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=vd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=yp(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,f=-1/0;for(let d=e;d<s;d+=e){let p=i[d],g=i[d+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>f&&(f=g)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return no(r,o,e,a,l,c,0),o}function vd(i,t,e,n,s){let r;if(s===Pp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Mu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Mu(o/n|0,i[o],i[o+1],r);return r&&rr(r,r.next)&&(so(r),r=r.next),r}function ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(rr(e,e.next)||Ye(e.prev,e,e.next)===0)){if(so(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function no(i,t,e,n,s,r,o){if(!i)return;!o&&r&&bp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?gp(i,n,s,r):mp(i)){t.push(l.i,i.i,c.i),so(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=_p(ds(i),t),no(i,t,e,n,s,r,2)):o===2&&xp(i,t,e,n,s,r):no(ds(i),t,e,n,s,r,1);break}}}function mp(i){let t=i.prev,e=i,n=i.next;if(Ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),d=Math.max(s,r,o),p=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=p&&Ir(s,a,r,l,o,c,g.x,g.y)&&Ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ye(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,d=o.y,p=Math.min(a,l,c),g=Math.min(h,f,d),x=Math.max(a,l,c),_=Math.max(h,f,d),m=Rc(p,g,t,e,n),R=Rc(x,_,t,e,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=m&&v&&v.z<=R;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=_&&S!==s&&S!==o&&Ir(a,h,l,f,c,d,S.x,S.y)&&Ye(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=_&&v!==s&&v!==o&&Ir(a,h,l,f,c,d,v.x,v.y)&&Ye(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=_&&S!==s&&S!==o&&Ir(a,h,l,f,c,d,S.x,S.y)&&Ye(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=R;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=_&&v!==s&&v!==o&&Ir(a,h,l,f,c,d,v.x,v.y)&&Ye(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _p(i,t){let e=i;do{let n=e.prev,s=e.next.next;!rr(n,s)&&Ed(n,e,e.next,s)&&io(n,s)&&io(s,n)&&(t.push(n.i,e.i,s.i),so(e),so(e.next),e=i=s),e=e.next}while(e!==i);return ds(e)}function xp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ap(o,a)){let l=Sd(o,a);o=ds(o,o.next),l=ds(l,l.next),no(o,t,e,n,s,r,0),no(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function yp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=vd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Tp(c))}s.sort(vp);for(let r=0;r<s.length;r++)e=Mp(s[r],e);return e}function vp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Mp(i,t){let e=Ep(i,t);if(!e)return t;let n=Sd(e,i);return ds(n,n.next),ds(e,e.next)}function Ep(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(rr(i,e))return e;do{if(rr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Md(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);io(e,i)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Sp(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function Sp(i,t){return Ye(i.prev,i,t.prev)<0&&Ye(t.next,i,i.next)<0}function bp(i,t,e,n){let s=i;do s.z===0&&(s.z=Rc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wp(s)}function wp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Rc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Tp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Md(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ir(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Md(i,t,e,n,s,r,o,a)}function Ap(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rp(i,t)&&(io(i,t)&&io(t,i)&&Cp(i,t)&&(Ye(i.prev,i,t.prev)||Ye(i,t.prev,t))||rr(i,t)&&Ye(i.prev,i,i.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function rr(i,t){return i.x===t.x&&i.y===t.y}function Ed(i,t,e,n){let s=ia(Ye(i,t,e)),r=ia(Ye(i,t,n)),o=ia(Ye(e,n,i)),a=ia(Ye(e,n,t));return!!(s!==r&&o!==a||s===0&&na(i,e,t)||r===0&&na(i,n,t)||o===0&&na(e,i,n)||a===0&&na(e,t,n))}function na(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ia(i){return i>0?1:i<0?-1:0}function Rp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ed(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function io(i,t){return Ye(i.prev,i,i.next)<0?Ye(i,t,i.next)>=0&&Ye(i,i.prev,t)>=0:Ye(i,t,i.prev)<0||Ye(i,i.next,t)<0}function Cp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Sd(i,t){let e=Cc(i.i,i.x,i.y),n=Cc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mu(i,t,e,n){let s=Cc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function so(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Pc=class{static triangulate(t,e,n=2){return pp(t,e,n)}},ci=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Eu(t),Su(n,t);let o=t.length;e.forEach(Eu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Su(n,e[l]);let a=Pc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Eu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Su(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var or=class i extends Ee{constructor(t=new Ri([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:Ip,S,v=!1,D,C,U,O;m&&(S=m.getSpacedPoints(h),v=!0,d=!1,D=m.computeFrenetFrames(h,!1),C=new A,U=new A,O=new A),d||(_=0,p=0,g=0,x=0);let w=a.extractPoints(c),b=w.shape,F=w.holes;if(!ci.isClockWise(b)){b=b.reverse();for(let ht=0,pt=F.length;ht<pt;ht++){let dt=F[ht];ci.isClockWise(dt)&&(F[ht]=dt.reverse())}}function $(ht){let dt=10000000000000001e-36,at=ht[0];for(let vt=1;vt<=ht.length;vt++){let ot=vt%ht.length,Et=ht[ot],ee=Et.x-at.x,Dt=Et.y-at.y,I=ee*ee+Dt*Dt,y=Math.max(Math.abs(Et.x),Math.abs(Et.y),Math.abs(at.x),Math.abs(at.y)),W=dt*y*y;if(I<=W){ht.splice(ot,1),vt--;continue}at=Et}}$(b),F.forEach($);let tt=F.length,B=b;for(let ht=0;ht<tt;ht++){let pt=F[ht];b=b.concat(pt)}function G(ht,pt,dt){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(pt,dt)}let X=b.length;function H(ht,pt,dt){let at,vt,ot,Et=ht.x-pt.x,ee=ht.y-pt.y,Dt=dt.x-ht.x,I=dt.y-ht.y,y=Et*Et+ee*ee,W=Et*I-ee*Dt;if(Math.abs(W)>Number.EPSILON){let P=Math.sqrt(y),L=Math.sqrt(Dt*Dt+I*I),z=pt.x-ee/P,rt=pt.y+Et/P,ut=dt.x-I/L,Lt=dt.y+Dt/L,Rt=((ut-z)*I-(Lt-rt)*Dt)/(Et*I-ee*Dt);at=z+Et*Rt-ht.x,vt=rt+ee*Rt-ht.y;let lt=at*at+vt*vt;if(lt<=2)return new gt(at,vt);ot=Math.sqrt(lt/2)}else{let P=!1;Et>Number.EPSILON?Dt>Number.EPSILON&&(P=!0):Et<-Number.EPSILON?Dt<-Number.EPSILON&&(P=!0):Math.sign(ee)===Math.sign(I)&&(P=!0),P?(at=-ee,vt=Et,ot=Math.sqrt(y)):(at=Et,vt=ee,ot=Math.sqrt(y/2))}return new gt(at/ot,vt/ot)}let ft=[];for(let ht=0,pt=B.length,dt=pt-1,at=ht+1;ht<pt;ht++,dt++,at++)dt===pt&&(dt=0),at===pt&&(at=0),ft[ht]=H(B[ht],B[dt],B[at]);let mt=[],It,Yt=ft.concat();for(let ht=0,pt=tt;ht<pt;ht++){let dt=F[ht];It=[];for(let at=0,vt=dt.length,ot=vt-1,Et=at+1;at<vt;at++,ot++,Et++)ot===vt&&(ot=0),Et===vt&&(Et=0),It[at]=H(dt[at],dt[ot],dt[Et]);mt.push(It),Yt=Yt.concat(It)}let te;if(_===0)te=ci.triangulateShape(B,F);else{let ht=[],pt=[];for(let dt=0;dt<_;dt++){let at=dt/_,vt=p*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+x;for(let Et=0,ee=B.length;Et<ee;Et++){let Dt=G(B[Et],ft[Et],ot);yt(Dt.x,Dt.y,-vt),at===0&&ht.push(Dt)}for(let Et=0,ee=tt;Et<ee;Et++){let Dt=F[Et];It=mt[Et];let I=[];for(let y=0,W=Dt.length;y<W;y++){let P=G(Dt[y],It[y],ot);yt(P.x,P.y,-vt),at===0&&I.push(P)}at===0&&pt.push(I)}}te=ci.triangulateShape(ht,pt)}let ae=te.length,$t=g+x;for(let ht=0;ht<X;ht++){let pt=d?G(b[ht],Yt[ht],$t):b[ht];v?(U.copy(D.normals[0]).multiplyScalar(pt.x),C.copy(D.binormals[0]).multiplyScalar(pt.y),O.copy(S[0]).add(U).add(C),yt(O.x,O.y,O.z)):yt(pt.x,pt.y,0)}for(let ht=1;ht<=h;ht++)for(let pt=0;pt<X;pt++){let dt=d?G(b[pt],Yt[pt],$t):b[pt];v?(U.copy(D.normals[ht]).multiplyScalar(dt.x),C.copy(D.binormals[ht]).multiplyScalar(dt.y),O.copy(S[ht]).add(U).add(C),yt(O.x,O.y,O.z)):yt(dt.x,dt.y,f/h*ht)}for(let ht=_-1;ht>=0;ht--){let pt=ht/_,dt=p*Math.cos(pt*Math.PI/2),at=g*Math.sin(pt*Math.PI/2)+x;for(let vt=0,ot=B.length;vt<ot;vt++){let Et=G(B[vt],ft[vt],at);yt(Et.x,Et.y,f+dt)}for(let vt=0,ot=F.length;vt<ot;vt++){let Et=F[vt];It=mt[vt];for(let ee=0,Dt=Et.length;ee<Dt;ee++){let I=G(Et[ee],It[ee],at);v?yt(I.x,I.y+S[h-1].y,S[h-1].x+dt):yt(I.x,I.y,f+dt)}}}it(),xt();function it(){let ht=s.length/3;if(d){let pt=0,dt=X*pt;for(let at=0;at<ae;at++){let vt=te[at];kt(vt[2]+dt,vt[1]+dt,vt[0]+dt)}pt=h+_*2,dt=X*pt;for(let at=0;at<ae;at++){let vt=te[at];kt(vt[0]+dt,vt[1]+dt,vt[2]+dt)}}else{for(let pt=0;pt<ae;pt++){let dt=te[pt];kt(dt[2],dt[1],dt[0])}for(let pt=0;pt<ae;pt++){let dt=te[pt];kt(dt[0]+X*h,dt[1]+X*h,dt[2]+X*h)}}n.addGroup(ht,s.length/3-ht,0)}function xt(){let ht=s.length/3,pt=0;Ft(B,pt),pt+=B.length;for(let dt=0,at=F.length;dt<at;dt++){let vt=F[dt];Ft(vt,pt),pt+=vt.length}n.addGroup(ht,s.length/3-ht,1)}function Ft(ht,pt){let dt=ht.length;for(;--dt>=0;){let at=dt,vt=dt-1;vt<0&&(vt=ht.length-1);for(let ot=0,Et=h+_*2;ot<Et;ot++){let ee=X*ot,Dt=X*(ot+1),I=pt+at+ee,y=pt+vt+ee,W=pt+vt+Dt,P=pt+at+Dt;se(I,y,W,P)}}}function yt(ht,pt,dt){l.push(ht),l.push(pt),l.push(dt)}function kt(ht,pt,dt){re(ht),re(pt),re(dt);let at=s.length/3,vt=R.generateTopUV(n,s,at-3,at-2,at-1);N(vt[0]),N(vt[1]),N(vt[2])}function se(ht,pt,dt,at){re(ht),re(pt),re(at),re(pt),re(dt),re(at);let vt=s.length/3,ot=R.generateSideWallUV(n,s,vt-6,vt-3,vt-2,vt-1);N(ot[0]),N(ot[1]),N(ot[3]),N(ot[1]),N(ot[2]),N(ot[3])}function re(ht){s.push(l[ht*3+0]),s.push(l[ht*3+1]),s.push(l[ht*3+2])}function N(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Dp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ac[s.type]().fromJSON(s)),new i(n,t.options)}},Ip={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new gt(r,o),new gt(a,l),new gt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],_=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new gt(o,1-l),new gt(c,1-f),new gt(d,1-g),new gt(x,1-m)]:[new gt(a,1-l),new gt(h,1-f),new gt(p,1-g),new gt(_,1-m)]}};function Dp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var pi=class i extends Ma{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Pn=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,d=e/l,p=[],g=[],x=[],_=[];for(let m=0;m<h;m++){let R=m*d-o;for(let S=0;S<c;S++){let v=S*f-r;g.push(v,-R,0),x.push(0,0,1),_.push(S/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let R=0;R<a;R++){let S=R+c*m,v=R+c*(m+1),D=R+1+c*(m+1),C=R+1+c*m;p.push(S,v,C),p.push(v,D,C)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ro=class i extends Ee{constructor(t=new Ri([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(r,3)),this.setAttribute("uv",new _e(o,2));function c(h){let f=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;ci.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,m=g.length;_<m;_++){let R=g[_];ci.isClockWise(R)===!0&&(g[_]=R.reverse())}let x=ci.triangulateShape(p,g);for(let _=0,m=g.length;_<m;_++){let R=g[_];p=p.concat(R)}for(let _=0,m=p.length;_<m;_++){let R=p[_];s.push(R.x,R.y,0),r.push(0,0,1),o.push(R.x,R.y)}for(let _=0,m=x.length;_<m;_++){let R=x[_],S=R[0]+f,v=R[1]+f,D=R[2]+f;n.push(S,v,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Lp(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Lp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ni=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new A,d=new A,p=[],g=[],x=[],_=[];for(let m=0;m<=n;m++){let R=[],S=m/n,v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){let C=D/e;f.x=-t*Math.cos(s+C*r)*Math.sin(o+S*a),f.y=t*Math.cos(o+S*a),f.z=t*Math.sin(s+C*r)*Math.sin(o+S*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),_.push(C+v,1-S),R.push(c++)}h.push(R)}for(let m=0;m<n;m++)for(let R=0;R<e;R++){let S=h[m][R+1],v=h[m][R],D=h[m+1][R],C=h[m+1][R+1];(m!==0||o>0)&&p.push(S,v,C),(m!==n-1||l<Math.PI)&&p.push(v,D,C)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ci=class i extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new A,f=new A,d=new A;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,_=p/n*Math.PI*2;f.x=(t+e*Math.cos(_))*Math.cos(x),f.y=(t+e*Math.cos(_))*Math.sin(x),f.z=e*Math.sin(_),a.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,_=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,R=(s+1)*p+g;o.push(x,_,R),o.push(_,m,R)}this.setIndex(o),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var fs=class extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ra=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ca=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var oo=class extends Cn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function sa(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Np(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ps=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pa=class extends ps{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bc:r=t,a=2*e-n;break;case wc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:o=t,l=2*n-e;break;case wc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,_=x*g,m=-d*_+2*d*x-d*g,R=(1+d)*_+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-p)*_+(1.5+p)*x+.5*g,v=p*_-p*x;for(let D=0;D!==a;++D)r[D]=m*o[h+D]+R*o[c+D]+S*o[l+D]+v*o[f+D];return r}},Ia=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Da=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},On=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sa(e,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sa(t.times,Array),values:sa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ur:e=this.InterpolantFactoryMethodDiscrete;break;case ha:e=this.InterpolantFactoryMethodLinear;break;case ra:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Np(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ra,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,d=f-n,p=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[f+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=ha;var Zi=class extends On{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Ur;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};La.prototype.ValueTypeName="color";var Na=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};Na.prototype.ValueTypeName="number";var Ua=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ne.slerpFlat(r,0,o,c-a,o,c,l);return r}},ao=class extends On{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends On{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Ur;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};Fa.prototype.ValueTypeName="vector";var Oa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},bd=new Oa,Ba=class{constructor(t){this.manager=t!==void 0?t:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},lo=class extends ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ec=new Re,bu=new A,wu=new A,za=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(bu),wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wu),e.updateMatrixWorld(),Ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ic=class extends za{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=hs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},co=class extends ar{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ic}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ho=class extends Vr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Dc=class extends za{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Dc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ha=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var nh="\\[\\]\\.:\\/",Up=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",Fp="[^"+nh.replace("\\.","")+"]",Op=/((?:WC+[\/:])*)/.source.replace("WC",ih),Bp=/(WCOD+)?/.source.replace("WCOD",Fp),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),Hp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),kp=new RegExp("^"+Op+Bp+zp+Hp+"$"),Vp=["material","materials","bones","map"],Lc=class{constructor(t,e,n){let s=n||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Up,"")}static parseTrackName(t){let e=kp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=Lc;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gx=new Float32Array(1);var Tu=new Re,Vn=class{constructor(t,e,n=0,s=1/0){this.ray=new Xi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tu),this}intersectObject(t,e=!0,n=[]){return Nc(t,this,n,e),n.sort(Au),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Nc(t[s],this,n,e);return n.sort(Au),n}};function Au(i,t){return i.distance-t.distance}function Nc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Nc(r[o],t,e,!0)}}var cr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var uo=class extends Ai{constructor(t=10,e=10,n=4473924,s=8947848){n=new Me(n),s=new Me(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let x=d===r?n:s;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}let h=new Ee;h.setAttribute("position",new _e(l,3)),h.setAttribute("color",new _e(c,3));let f=new Cn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var fo=class extends Ai{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ee;r.setIndex(new Qe(n,1)),r.setAttribute("position",new _e(s,3)),super(r,new Cn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}};var ms=class extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function sh(i,t,e,n){let s=Gp(n);switch(e){case Yc:return i*t;case tl:return i*t/s.components*s.byteLength;case el:return i*t/s.components*s.byteLength;case Zc:return i*t*2/s.components*s.byteLength;case nl:return i*t*2/s.components*s.byteLength;case qc:return i*t*3/s.components*s.byteLength;case Gn:return i*t*4/s.components*s.byteLength;case il:return i*t*4/s.components*s.byteLength;case go:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xo:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:case al:return Math.max(i,16)*Math.max(t,8)/4;case sl:case ol:return Math.max(i,8)*Math.max(t,8)/2;case ll:case cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wl:case Tl:case Al:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rl:case Cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Pl:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gp(i){switch(i){case si:case Vc:return{byteLength:1,components:1};case hr:case Gc:case ur:return{byteLength:2,components:1};case ja:case Qa:return{byteLength:2,components:4};case $i:case $a:case ri:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Zd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let x=f[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
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
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sm=`#ifdef USE_IRIDESCENCE
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
#endif`,rm=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pm=`#define PI 3.141592653589793
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
} // validated`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
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
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
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
#endif`,Gm=`struct PhysicalMaterial {
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
}`,Wm=`
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tg=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
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
#endif`,ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cg=`float getShadowMask() {
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
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Og=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
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
}`,$g=`#if DEPTH_PACKING == 3200
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
}`,jg=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`uniform float scale;
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
}`,i_=`uniform vec3 diffuse;
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
}`,s_=`#include <common>
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
}`,r_=`uniform vec3 diffuse;
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
}`,o_=`#define LAMBERT
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
}`,a_=`#define LAMBERT
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
}`,l_=`#define MATCAP
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
}`,c_=`#define MATCAP
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
}`,h_=`#define NORMAL
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
}`,u_=`#define NORMAL
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
}`,d_=`#define PHONG
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
}`,f_=`#define PHONG
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
}`,p_=`#define STANDARD
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
}`,m_=`#define STANDARD
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
}`,g_=`#define TOON
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
}`,__=`#define TOON
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
}`,x_=`uniform float size;
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
}`,y_=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,M_=`uniform vec3 color;
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
}`,E_=`uniform float rotation;
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
}`,S_=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:Xp,alphahash_pars_fragment:Yp,alphamap_fragment:qp,alphamap_pars_fragment:Zp,alphatest_fragment:Kp,alphatest_pars_fragment:Jp,aomap_fragment:$p,aomap_pars_fragment:jp,batching_pars_vertex:Qp,batching_vertex:tm,begin_vertex:em,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:sm,bumpmap_pars_fragment:rm,clipping_planes_fragment:om,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:hm,color_pars_fragment:um,color_pars_vertex:dm,color_vertex:fm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:_m,displacementmap_vertex:xm,emissivemap_fragment:ym,emissivemap_pars_fragment:vm,colorspace_fragment:Mm,colorspace_pars_fragment:Em,envmap_fragment:Sm,envmap_common_pars_fragment:bm,envmap_pars_fragment:wm,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Om,envmap_vertex:Am,fog_vertex:Rm,fog_pars_vertex:Cm,fog_fragment:Pm,fog_pars_fragment:Im,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Um,lights_pars_begin:Fm,lights_toon_fragment:Bm,lights_toon_pars_fragment:zm,lights_phong_fragment:Hm,lights_phong_pars_fragment:km,lights_physical_fragment:Vm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:Ym,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:Jm,map_fragment:$m,map_pars_fragment:jm,map_particle_fragment:Qm,map_particle_pars_fragment:tg,metalnessmap_fragment:eg,metalnessmap_pars_fragment:ng,morphinstance_vertex:ig,morphcolor_vertex:sg,morphnormal_vertex:rg,morphtarget_pars_vertex:og,morphtarget_vertex:ag,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:hg,normal_pars_vertex:ug,normal_vertex:dg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:_g,opaque_fragment:xg,packing:yg,premultiplied_alpha_fragment:vg,project_vertex:Mg,dithering_fragment:Eg,dithering_pars_fragment:Sg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Rg,shadowmask_pars_fragment:Cg,skinbase_vertex:Pg,skinning_pars_vertex:Ig,skinning_vertex:Dg,skinnormal_vertex:Lg,specularmap_fragment:Ng,specularmap_pars_fragment:Ug,tonemapping_fragment:Fg,tonemapping_pars_fragment:Og,transmission_fragment:Bg,transmission_pars_fragment:zg,uv_pars_fragment:Hg,uv_pars_vertex:kg,uv_vertex:Vg,worldpos_vertex:Gg,background_vert:Wg,background_frag:Xg,backgroundCube_vert:Yg,backgroundCube_frag:qg,cube_vert:Zg,cube_frag:Kg,depth_vert:Jg,depth_frag:$g,distanceRGBA_vert:jg,distanceRGBA_frag:Qg,equirect_vert:t_,equirect_frag:e_,linedashed_vert:n_,linedashed_frag:i_,meshbasic_vert:s_,meshbasic_frag:r_,meshlambert_vert:o_,meshlambert_frag:a_,meshmatcap_vert:l_,meshmatcap_frag:c_,meshnormal_vert:h_,meshnormal_frag:u_,meshphong_vert:d_,meshphong_frag:f_,meshphysical_vert:p_,meshphysical_frag:m_,meshtoon_vert:g_,meshtoon_frag:__,points_vert:x_,points_frag:y_,shadow_vert:v_,shadow_frag:M_,sprite_vert:E_,sprite_frag:S_},Ht={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},gi={basic:{uniforms:xn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:xn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:xn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:xn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:xn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:xn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:xn([Ht.points,Ht.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:xn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:xn([Ht.common,Ht.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:xn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:xn([Ht.sprite,Ht.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:xn([Ht.common,Ht.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:xn([Ht.lights,Ht.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};gi.physical={uniforms:xn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var Dl={r:0,b:0,g:0},ys=new fn,b_=new Re;function w_(i,t,e,n,s,r,o){let a=new Me(0),l=r===!0?0:1,c,h,f=null,d=0,p=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function x(S){let v=!1,D=g(S);D===null?m(a,l):D&&D.isColor&&(m(D,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,v){let D=g(v);D&&(D.isCubeTexture||D.mapping===po)?(h===void 0&&(h=new Tt(new Ce(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:xs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ys.copy(v.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b_.makeRotationFromEuler(ys)),h.material.toneMapped=Ae.getTransfer(D.colorSpace)!==Le,(f!==D||d!==D.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=D,d=D.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Tt(new Pn(2,2),new ei({name:"BackgroundMaterial",uniforms:xs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ae.getTransfer(D.colorSpace)!==Le,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||d!==D.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=D,d=D.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,v){S.getRGB(Dl,th(i)),n.buffers.color.setClear(Dl.r,Dl.g,Dl.b,v,o)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:x,addToRenderList:_,dispose:R}}function T_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,F,K,$,tt){let B=!1,G=f($,K,F);r!==G&&(r=G,c(r.object)),B=p(b,$,K,tt),B&&g(b,$,K,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(b,F,K,$),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function f(b,F,K){let $=K.wireframe===!0,tt=n[b.id];tt===void 0&&(tt={},n[b.id]=tt);let B=tt[F.id];B===void 0&&(B={},tt[F.id]=B);let G=B[$];return G===void 0&&(G=d(l()),B[$]=G),G}function d(b){let F=[],K=[],$=[];for(let tt=0;tt<e;tt++)F[tt]=0,K[tt]=0,$[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:K,attributeDivisors:$,object:b,attributes:{},index:null}}function p(b,F,K,$){let tt=r.attributes,B=F.attributes,G=0,X=K.getAttributes();for(let H in X)if(X[H].location>=0){let mt=tt[H],It=B[H];if(It===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(It=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(It=b.instanceColor)),mt===void 0||mt.attribute!==It||It&&mt.data!==It.data)return!0;G++}return r.attributesNum!==G||r.index!==$}function g(b,F,K,$){let tt={},B=F.attributes,G=0,X=K.getAttributes();for(let H in X)if(X[H].location>=0){let mt=B[H];mt===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor));let It={};It.attribute=mt,mt&&mt.data&&(It.data=mt.data),tt[H]=It,G++}r.attributes=tt,r.attributesNum=G,r.index=$}function x(){let b=r.newAttributes;for(let F=0,K=b.length;F<K;F++)b[F]=0}function _(b){m(b,0)}function m(b,F){let K=r.newAttributes,$=r.enabledAttributes,tt=r.attributeDivisors;K[b]=1,$[b]===0&&(i.enableVertexAttribArray(b),$[b]=1),tt[b]!==F&&(i.vertexAttribDivisor(b,F),tt[b]=F)}function R(){let b=r.newAttributes,F=r.enabledAttributes;for(let K=0,$=F.length;K<$;K++)F[K]!==b[K]&&(i.disableVertexAttribArray(K),F[K]=0)}function S(b,F,K,$,tt,B,G){G===!0?i.vertexAttribIPointer(b,F,K,tt,B):i.vertexAttribPointer(b,F,K,$,tt,B)}function v(b,F,K,$){x();let tt=$.attributes,B=K.getAttributes(),G=F.defaultAttributeValues;for(let X in B){let H=B[X];if(H.location>=0){let ft=tt[X];if(ft===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor)),ft!==void 0){let mt=ft.normalized,It=ft.itemSize,Yt=t.get(ft);if(Yt===void 0)continue;let te=Yt.buffer,ae=Yt.type,$t=Yt.bytesPerElement,it=ae===i.INT||ae===i.UNSIGNED_INT||ft.gpuType===$a;if(ft.isInterleavedBufferAttribute){let xt=ft.data,Ft=xt.stride,yt=ft.offset;if(xt.isInstancedInterleavedBuffer){for(let kt=0;kt<H.locationSize;kt++)m(H.location+kt,xt.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let kt=0;kt<H.locationSize;kt++)_(H.location+kt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let kt=0;kt<H.locationSize;kt++)S(H.location+kt,It/H.locationSize,ae,mt,Ft*$t,(yt+It/H.locationSize*kt)*$t,it)}else{if(ft.isInstancedBufferAttribute){for(let xt=0;xt<H.locationSize;xt++)m(H.location+xt,ft.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let xt=0;xt<H.locationSize;xt++)_(H.location+xt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let xt=0;xt<H.locationSize;xt++)S(H.location+xt,It/H.locationSize,ae,mt,It*$t,It/H.locationSize*xt*$t,it)}}else if(G!==void 0){let mt=G[X];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(H.location,mt);break;case 3:i.vertexAttrib3fv(H.location,mt);break;case 4:i.vertexAttrib4fv(H.location,mt);break;default:i.vertexAttrib1fv(H.location,mt)}}}}R()}function D(){O();for(let b in n){let F=n[b];for(let K in F){let $=F[K];for(let tt in $)h($[tt].object),delete $[tt];delete F[K]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;let F=n[b.id];for(let K in F){let $=F[K];for(let tt in $)h($[tt].object),delete $[tt];delete F[K]}delete n[b.id]}function U(b){for(let F in n){let K=n[F];if(K[b.id]===void 0)continue;let $=K[b.id];for(let tt in $)h($[tt].object),delete $[tt];delete K[b.id]}}function O(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:_,disableUnusedAttributes:R}}function A_(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function l(c,h,f,d){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function R_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==Gn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let O=U===ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==si&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ri&&!O)}function l(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:R,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:D,maxSamples:C}}function C_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new $e,a=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,x=f.clipIntersection,_=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!_)r?h(null):c();else{let R=r?0:n,S=R*4,v=m.clippingState||null;l.value=v,v=h(g,d,S,p);for(let D=0;D!==S;++D)v[D]=e[D];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,p,g){let x=f!==null?f.length:0,_=null;if(x!==0){if(_=l.value,g!==!0||_===null){let m=p+x*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(_===null||_.length<m)&&(_=new Float32Array(m));for(let S=0,v=p;S!==x;++S,v+=4)o.copy(f[S]).applyMatrix4(R,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,_}}function P_(i){let t=new WeakMap;function e(o,a){return a===Za?o.mapping=gs:a===Ka&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Za||a===Ka)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ga(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var mr=4,wd=[.125,.215,.35,.446,.526,.582],Es=20,rh=new ho,Td=new Me,oh=null,ah=0,lh=0,ch=!1,Ms=(1+Math.sqrt(5))/2,pr=1/Ms,Ad=[new A(-Ms,pr,0),new A(Ms,pr,0),new A(-pr,0,Ms),new A(pr,0,Ms),new A(0,Ms,-pr),new A(0,Ms,pr),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],I_=new A,Ul=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=I_}=r;oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oh,ah,lh),this._renderer.xr.enabled=ch,t.scissorTest=!1,Ll(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:ur,format:Gn,colorSpace:cs,depthBuffer:!1},s=Rd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D_(r)),this._blurMaterial=L_(r,t,e)}return s}_compileMaterial(t){let e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,rh)}_sceneToCubeUV(t,e,n,s,r){let l=new un(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Td),f.toneMapping=Ii,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let x=new an({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new Tt(new Ce,x),m=!1,R=t.background;R?R.isColor&&(x.color.copy(R),t.background=null,m=!0):(x.color.copy(Td),m=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let D=this._cubeSize;Ll(s,v*D,S>2?D:0,D,D),f.setRenderTarget(s),m&&f.render(_,l),f.render(t,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=p,f.autoClear=d,t.background=R}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ll(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,rh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ad[(s-r-1)%Ad.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Tt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Es-1),x=r/g,_=isFinite(r)?1+Math.floor(h*x):Es;_>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Es}`);let m=[],R=0;for(let U=0;U<Es;++U){let O=U/x,w=Math.exp(-O*O/2);m.push(w),U===0?R+=w:U<_&&(R+=2*w)}for(let U=0;U<m.length;U++)m[U]=m[U]/R;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let v=this._sizeLods[s],D=3*v*(s>S-mr?s-S+mr:0),C=4*(this._cubeSize-v);Ll(e,D,C,3*v,2*v),l.setRenderTarget(e),l.render(f,rh)}};function D_(i){let t=[],e=[],n=[],s=i,r=i-mr+1+wd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-mr?l=wd[o-i+mr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,x=3,_=2,m=1,R=new Float32Array(x*g*p),S=new Float32Array(_*g*p),v=new Float32Array(m*g*p);for(let C=0;C<p;C++){let U=C%3*2/3-1,O=C>2?0:-1,w=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];R.set(w,x*g*C),S.set(d,_*g*C);let b=[C,C,C,C,C,C];v.set(b,m*g*C)}let D=new Ee;D.setAttribute("position",new Qe(R,x)),D.setAttribute("uv",new Qe(S,_)),D.setAttribute("faceIndex",new Qe(v,m)),t.push(D),s>mr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rd(i,t,e){let n=new di(i,t,e);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ll(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function L_(i,t,e){let n=new Float32Array(Es),s=new A(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vh(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Cd(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Pd(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function vh(){return`

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
	`}function N_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Za||l===Ka,h=l===gs||l===_s;if(c||h){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ul(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ul(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function U_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function F_(i,t,e,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(f){let d=[],p=f.index,g=f.attributes.position,x=0;if(p!==null){let R=p.array;x=p.version;for(let S=0,v=R.length;S<v;S+=3){let D=R[S+0],C=R[S+1],U=R[S+2];d.push(D,C,C,U,U,D)}}else if(g!==void 0){let R=g.array;x=g.version;for(let S=0,v=R.length/3-1;S<v;S+=3){let D=S+0,C=S+1,U=S+2;d.push(D,C,C,U,U,D)}}else return;let _=new(Qc(d)?kr:Hr)(d,1);_.version=x;let m=r.get(f);m&&t.remove(m),r.set(f,_)}function h(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function O_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];e.update(_,n,1)}function f(d,p,g,x){if(g===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<d.length;m++)c(d[m]/o,p[m],x[m]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let m=0;for(let R=0;R<g;R++)m+=p[R]*x[R];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function B_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z_(i,t,e){let n=new WeakMap,s=new qe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let w=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,D=1;v>t.maxTextureSize&&(D=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let C=new Float32Array(v*D*4*f),U=new zr(C,v,D,f);U.type=ri,U.needsUpdate=!0;let O=S*4;for(let b=0;b<f;b++){let F=_[b],K=m[b],$=R[b],tt=v*D*4*b;for(let B=0;B<F.count;B++){let G=B*O;p===!0&&(s.fromBufferAttribute(F,B),C[tt+G+0]=s.x,C[tt+G+1]=s.y,C[tt+G+2]=s.z,C[tt+G+3]=0),g===!0&&(s.fromBufferAttribute(K,B),C[tt+G+4]=s.x,C[tt+G+5]=s.y,C[tt+G+6]=s.z,C[tt+G+7]=0),x===!0&&(s.fromBufferAttribute($,B),C[tt+G+8]=s.x,C[tt+G+9]=s.y,C[tt+G+10]=s.z,C[tt+G+11]=$.itemSize===4?s.w:1)}}d={count:f,texture:U,size:new gt(v,D)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function H_(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Kd=new bn,Id=new Zr(1,1),Jd=new zr,$d=new pa,jd=new Gr,Dd=[],Ld=[],Nd=new Float32Array(16),Ud=new Float32Array(9),Fd=new Float32Array(4);function _r(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Dd[s];if(r===void 0&&(r=new Float32Array(s),Dd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ol(i,t){let e=Ld[t];e===void 0&&(e=new Int32Array(t),Ld[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function k_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function V_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function G_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function W_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function X_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Fd.set(n),i.uniformMatrix2fv(this.addr,!1,Fd),en(e,n)}}function Y_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Ud.set(n),i.uniformMatrix3fv(this.addr,!1,Ud),en(e,n)}}function q_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Nd.set(n),i.uniformMatrix4fv(this.addr,!1,Nd),en(e,n)}}function Z_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function K_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function J_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function $_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function j_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function n0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Id.compareFunction=Jc,r=Id):r=Kd,e.setTexture2D(t||r,s)}function i0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$d,s)}function s0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jd,s)}function r0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jd,s)}function o0(i){switch(i){case 5126:return k_;case 35664:return V_;case 35665:return G_;case 35666:return W_;case 35674:return X_;case 35675:return Y_;case 35676:return q_;case 5124:case 35670:return Z_;case 35667:case 35671:return K_;case 35668:case 35672:return J_;case 35669:case 35673:return $_;case 5125:return j_;case 36294:return Q_;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}function a0(i,t){i.uniform1fv(this.addr,t)}function l0(i,t){let e=_r(t,this.size,2);i.uniform2fv(this.addr,e)}function c0(i,t){let e=_r(t,this.size,3);i.uniform3fv(this.addr,e)}function h0(i,t){let e=_r(t,this.size,4);i.uniform4fv(this.addr,e)}function u0(i,t){let e=_r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function d0(i,t){let e=_r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function f0(i,t){let e=_r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function p0(i,t){i.uniform1iv(this.addr,t)}function m0(i,t){i.uniform2iv(this.addr,t)}function g0(i,t){i.uniform3iv(this.addr,t)}function _0(i,t){i.uniform4iv(this.addr,t)}function x0(i,t){i.uniform1uiv(this.addr,t)}function y0(i,t){i.uniform2uiv(this.addr,t)}function v0(i,t){i.uniform3uiv(this.addr,t)}function M0(i,t){i.uniform4uiv(this.addr,t)}function E0(i,t,e){let n=this.cache,s=t.length,r=Ol(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Kd,r[o])}function S0(i,t,e){let n=this.cache,s=t.length,r=Ol(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$d,r[o])}function b0(i,t,e){let n=this.cache,s=t.length,r=Ol(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jd,r[o])}function w0(i,t,e){let n=this.cache,s=t.length,r=Ol(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Jd,r[o])}function T0(i){switch(i){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return x0;case 36294:return y0;case 36295:return v0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return w0}}var uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=o0(e.type)}},dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T0(e.type)}},fh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},hh=/(\w+)(\])?(\[|\.)?/g;function Od(i,t){i.seq.push(t),i.map[t.id]=t}function A0(i,t,e){let n=i.name,s=n.length;for(hh.lastIndex=0;;){let r=hh.exec(n),o=hh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Od(e,c===void 0?new uh(a,i,t):new dh(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new fh(a),Od(e,f)),e=f}}}var gr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);A0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Bd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var R0=37297,C0=0;function P0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var zd=new ue;function I0(i){Ae._getMatrix(zd,Ae.workingColorSpace,i);let t=`mat3( ${zd.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(i)){case Fr:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+P0(i.getShaderSource(t),a)}else return r}function D0(i,t){let e=I0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function L0(i,t){let e;switch(t){case $u:e="Linear";break;case ju:e="Reinhard";break;case Qu:e="Cineon";break;case td:e="ACESFilmic";break;case nd:e="AgX";break;case id:e="Neutral";break;case ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nl=new A;function N0(){Ae.getLuminanceCoefficients(Nl);let i=Nl.x.toFixed(4),t=Nl.y.toFixed(4),e=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function F0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function O0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vo(i){return i!==""}function kd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(i){return i.replace(B0,H0)}var z0=new Map;function H0(i,t){let e=ve[t];if(e===void 0){let n=z0.get(t);if(n!==void 0)e=ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ph(e)}var k0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(i){return i.replace(k0,V0)}function V0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function G0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function W0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function X0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function Y0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ku:t="ENVMAP_BLENDING_MIX";break;case Ju:t="ENVMAP_BLENDING_ADD";break}return t}function q0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Z0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=G0(e),c=W0(e),h=X0(e),f=Y0(e),d=q0(e),p=U0(e),g=F0(r),x=s.createProgram(),_,m,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vo).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vo).join(`
`),m.length>0&&(m+=`
`)):(_=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),m=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?ve.tonemapping_pars_fragment:"",e.toneMapping!==Ii?L0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,D0("linearToOutputTexel",e.outputColorSpace),N0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vo).join(`
`)),o=ph(o),o=kd(o,e),o=Vd(o,e),a=ph(a),a=kd(a,e),a=Vd(a,e),o=Gd(o),a=Gd(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=R+_+o,v=R+m+a,D=Bd(s,s.VERTEX_SHADER,S),C=Bd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,D),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function U(F){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(x)||"",$=s.getShaderInfoLog(D)||"",tt=s.getShaderInfoLog(C)||"",B=K.trim(),G=$.trim(),X=tt.trim(),H=!0,ft=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,C);else{let mt=Hd(s,D,"vertex"),It=Hd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+B+`
`+mt+`
`+It)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||X==="")&&(ft=!1);ft&&(F.diagnostics={runnable:H,programLog:B,vertexShader:{log:G,prefix:_},fragmentShader:{log:X,prefix:m}})}s.deleteShader(D),s.deleteShader(C),O=new gr(s,x),w=O0(s,x)}let O;this.getUniforms=function(){return O===void 0&&U(this),O};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,R0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=C,this}var K0=0,mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gh(t),e.set(t,n)),n}},gh=class{constructor(t){this.id=K0++,this.code=t,this.usedTimes=0}};function J0(i,t,e,n,s,r,o){let a=new js,l=new mh,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function _(w,b,F,K,$){let tt=K.fog,B=$.geometry,G=w.isMeshStandardMaterial?K.environment:null,X=(w.isMeshStandardMaterial?e:t).get(w.envMap||G),H=X&&X.mapping===po?X.image.height:null,ft=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let mt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,It=mt!==void 0?mt.length:0,Yt=0;B.morphAttributes.position!==void 0&&(Yt=1),B.morphAttributes.normal!==void 0&&(Yt=2),B.morphAttributes.color!==void 0&&(Yt=3);let te,ae,$t,it;if(ft){let Pe=gi[ft];te=Pe.vertexShader,ae=Pe.fragmentShader}else te=w.vertexShader,ae=w.fragmentShader,l.update(w),$t=l.getVertexShaderID(w),it=l.getFragmentShaderID(w);let xt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),yt=$.isInstancedMesh===!0,kt=$.isBatchedMesh===!0,se=!!w.map,re=!!w.matcap,N=!!X,ht=!!w.aoMap,pt=!!w.lightMap,dt=!!w.bumpMap,at=!!w.normalMap,vt=!!w.displacementMap,ot=!!w.emissiveMap,Et=!!w.metalnessMap,ee=!!w.roughnessMap,Dt=w.anisotropy>0,I=w.clearcoat>0,y=w.dispersion>0,W=w.iridescence>0,P=w.sheen>0,L=w.transmission>0,z=Dt&&!!w.anisotropyMap,rt=I&&!!w.clearcoatMap,ut=I&&!!w.clearcoatNormalMap,Lt=I&&!!w.clearcoatRoughnessMap,Rt=W&&!!w.iridescenceMap,lt=W&&!!w.iridescenceThicknessMap,St=P&&!!w.sheenColorMap,Gt=P&&!!w.sheenRoughnessMap,qt=!!w.specularMap,Ut=!!w.specularColorMap,de=!!w.specularIntensityMap,V=L&&!!w.transmissionMap,Ct=L&&!!w.thicknessMap,Nt=!!w.gradientMap,Wt=!!w.alphaMap,At=w.alphaTest>0,_t=!!w.alphaHash,Zt=!!w.extensions,ne=Ii;w.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ne=i.toneMapping);let Ie={shaderID:ft,shaderType:w.type,shaderName:w.name,vertexShader:te,fragmentShader:ae,defines:w.defines,customVertexShaderID:$t,customFragmentShaderID:it,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:kt,batchingColor:kt&&$._colorsTexture!==null,instancing:yt,instancingColor:yt&&$.instanceColor!==null,instancingMorph:yt&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:cs,alphaToCoverage:!!w.alphaToCoverage,map:se,matcap:re,envMap:N,envMapMode:N&&X.mapping,envMapCubeUVHeight:H,aoMap:ht,lightMap:pt,bumpMap:dt,normalMap:at,displacementMap:d&&vt,emissiveMap:ot,normalMapObjectSpace:at&&w.normalMapType===ad,normalMapTangentSpace:at&&w.normalMapType===Kc,metalnessMap:Et,roughnessMap:ee,anisotropy:Dt,anisotropyMap:z,clearcoat:I,clearcoatMap:rt,clearcoatNormalMap:ut,clearcoatRoughnessMap:Lt,dispersion:y,iridescence:W,iridescenceMap:Rt,iridescenceThicknessMap:lt,sheen:P,sheenColorMap:St,sheenRoughnessMap:Gt,specularMap:qt,specularColorMap:Ut,specularIntensityMap:de,transmission:L,transmissionMap:V,thicknessMap:Ct,gradientMap:Nt,opaque:w.transparent===!1&&w.blending===as&&w.alphaToCoverage===!1,alphaMap:Wt,alphaTest:At,alphaHash:_t,combine:w.combine,mapUv:se&&x(w.map.channel),aoMapUv:ht&&x(w.aoMap.channel),lightMapUv:pt&&x(w.lightMap.channel),bumpMapUv:dt&&x(w.bumpMap.channel),normalMapUv:at&&x(w.normalMap.channel),displacementMapUv:vt&&x(w.displacementMap.channel),emissiveMapUv:ot&&x(w.emissiveMap.channel),metalnessMapUv:Et&&x(w.metalnessMap.channel),roughnessMapUv:ee&&x(w.roughnessMap.channel),anisotropyMapUv:z&&x(w.anisotropyMap.channel),clearcoatMapUv:rt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ut&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:St&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&x(w.sheenRoughnessMap.channel),specularMapUv:qt&&x(w.specularMap.channel),specularColorMapUv:Ut&&x(w.specularColorMap.channel),specularIntensityMapUv:de&&x(w.specularIntensityMap.channel),transmissionMapUv:V&&x(w.transmissionMap.channel),thicknessMapUv:Ct&&x(w.thicknessMap.channel),alphaMapUv:Wt&&x(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(at||Dt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!B.attributes.uv&&(se||Wt),fog:!!tt,useFog:w.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ft,skinning:$.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Yt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:se&&w.map.isVideoTexture===!0&&Ae.getTransfer(w.map.colorSpace)===Le,decodeVideoTextureEmissive:ot&&w.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(w.emissiveMap.colorSpace)===Le,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ln,flipSided:w.side===Tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function m(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let F in w.defines)b.push(F),b.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(R(b,w),S(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function R(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let b=g[w.type],F;if(b){let K=gi[b];F=xd.clone(K.uniforms)}else F=w.uniforms;return F}function D(w,b){let F;for(let K=0,$=h.length;K<$;K++){let tt=h[K];if(tt.cacheKey===b){F=tt,++F.usedTimes;break}}return F===void 0&&(F=new Z0(i,b,w,r),h.push(F)),F}function C(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function U(w){l.remove(w)}function O(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:v,acquireProgram:D,releaseProgram:C,releaseShaderCache:U,programs:h,dispose:O}}function $0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function j0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,d,p,g,x,_){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:_},i[t]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=x,m.group=_),t++,m}function a(f,d,p,g,x,_){let m=o(f,d,p,g,x,_);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(f,d,p,g,x,_){let m=o(f,d,p,g,x,_);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(f,d){e.length>1&&e.sort(f||j0),n.length>1&&n.sort(d||Xd),s.length>1&&s.sort(d||Xd)}function h(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Q0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Yd,i.set(n,[o])):s>=r.length?(o=new Yd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function tx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Me};break;case"SpotLight":e={position:new A,direction:new A,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":e={color:new Me,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function ex(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var nx=0;function ix(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sx(i){let t=new tx,e=ex(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new Re,o=new Re;function a(c){let h=0,f=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,x=0,_=0,m=0,R=0,S=0,v=0,D=0,C=0,U=0;c.sort(ix);for(let w=0,b=c.length;w<b;w++){let F=c[w],K=F.color,$=F.intensity,tt=F.distance,B=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=K.r*$,f+=K.g*$,d+=K.b*$;else if(F.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(F.sh.coefficients[G],$);U++}else if(F.isDirectionalLight){let G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let X=F.shadow,H=e.get(F);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=F.shadow.matrix,R++}n.directional[p]=G,p++}else if(F.isSpotLight){let G=t.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(K).multiplyScalar($),G.distance=tt,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,n.spot[x]=G;let X=F.shadow;if(F.map&&(n.spotLightMap[D]=F.map,D++,X.updateMatrices(F),F.castShadow&&C++),n.spotLightMatrix[x]=X.matrix,F.castShadow){let H=e.get(F);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=B,v++}x++}else if(F.isRectAreaLight){let G=t.get(F);G.color.copy(K).multiplyScalar($),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),n.rectArea[_]=G,_++}else if(F.isPointLight){let G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),G.distance=F.distance,G.decay=F.decay,F.castShadow){let X=F.shadow,H=e.get(F);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=F.shadow.matrix,S++}n.point[g]=G,g++}else if(F.isHemisphereLight){let G=t.get(F);G.skyColor.copy(F.color).multiplyScalar($),G.groundColor.copy(F.groundColor).multiplyScalar($),n.hemi[m]=G,m++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let O=n.hash;(O.directionalLength!==p||O.pointLength!==g||O.spotLength!==x||O.rectAreaLength!==_||O.hemiLength!==m||O.numDirectionalShadows!==R||O.numPointShadows!==S||O.numSpotShadows!==v||O.numSpotMaps!==D||O.numLightProbes!==U)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=_,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=U,O.directionalLength=p,O.pointLength=g,O.spotLength=x,O.rectAreaLength=_,O.hemiLength=m,O.numDirectionalShadows=R,O.numPointShadows=S,O.numSpotShadows=v,O.numSpotMaps=D,O.numLightProbes=U,n.version=nx++)}function l(c,h){let f=0,d=0,p=0,g=0,x=0,_=h.matrixWorldInverse;for(let m=0,R=c.length;m<R;m++){let S=c[m];if(S.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),f++}else if(S.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),p++}else if(S.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),o.identity(),r.copy(S.matrixWorld),r.premultiply(_),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),d++}else if(S.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(_),x++}}}return{setup:a,setupView:l,state:n}}function qd(i){let t=new sx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function rx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new qd(i),t.set(s,[a])):r>=o.length?(a=new qd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ax=`uniform sampler2D shadow_pass;
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
}`;function lx(i,t,e){let n=new nr,s=new gt,r=new gt,o=new qe,a=new Ra({depthPacking:od}),l=new Ca,c={},h=e.maxTextureSize,f={[wi]:Tn,[Tn]:wi,[ln]:ln},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:ox,fragmentShader:ax}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Tt(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let m=this.type;this.render=function(C,U,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;let w=i.getRenderTarget(),b=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Pi),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let $=m!==mi&&this.type===mi,tt=m===mi&&this.type!==mi;for(let B=0,G=C.length;B<G;B++){let X=C[B],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ft=H.getFrameExtents();if(s.multiply(ft),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,H.mapSize.y=r.y)),H.map===null||$===!0||tt===!0){let It=this.type!==mi?{minFilter:Rn,magFilter:Rn}:{};H.map!==null&&H.map.dispose(),H.map=new di(s.x,s.y,It),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let mt=H.getViewportCount();for(let It=0;It<mt;It++){let Yt=H.getViewport(It);o.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),K.viewport(o),H.updateMatrices(X,It),n=H.getFrustum(),v(U,O,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===mi&&R(H,O),H.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(w,b,F)};function R(C,U){let O=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new di(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(U,null,O,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(U,null,O,p,x,null)}function S(C,U,O,w){let b=null,F=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)b=F;else if(b=O.isPointLight===!0?l:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let K=b.uuid,$=U.uuid,tt=c[K];tt===void 0&&(tt={},c[K]=tt);let B=tt[$];B===void 0&&(B=b.clone(),tt[$]=B,U.addEventListener("dispose",D)),b=B}if(b.visible=U.visible,b.wireframe=U.wireframe,w===mi?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:f[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let K=i.properties.get(b);K.light=O}return b}function v(C,U,O,w,b){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===mi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let $=t.update(C),tt=C.material;if(Array.isArray(tt)){let B=$.groups;for(let G=0,X=B.length;G<X;G++){let H=B[G],ft=tt[H.materialIndex];if(ft&&ft.visible){let mt=S(C,ft,w,b);C.onBeforeShadow(i,C,U,O,$,mt,H),i.renderBufferDirect(O,null,$,mt,C,H),C.onAfterShadow(i,C,U,O,$,mt,H)}}}else if(tt.visible){let B=S(C,tt,w,b);C.onBeforeShadow(i,C,U,O,$,B,null),i.renderBufferDirect(O,null,$,B,C,null),C.onAfterShadow(i,C,U,O,$,B,null)}}let K=C.children;for(let $=0,tt=K.length;$<tt;$++)v(K[$],U,O,w,b)}function D(C){C.target.removeEventListener("dispose",D);for(let O in c){let w=c[O],b=C.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var cx={[ka]:Va,[Ga]:Ya,[Wa]:qa,[ls]:Xa,[Va]:ka,[Ya]:Ga,[qa]:Wa,[Xa]:ls};function hx(i,t){function e(){let V=!1,Ct=new qe,Nt=null,Wt=new qe(0,0,0,0);return{setMask:function(At){Nt!==At&&!V&&(i.colorMask(At,At,At,At),Nt=At)},setLocked:function(At){V=At},setClear:function(At,_t,Zt,ne,Ie){Ie===!0&&(At*=ne,_t*=ne,Zt*=ne),Ct.set(At,_t,Zt,ne),Wt.equals(Ct)===!1&&(i.clearColor(At,_t,Zt,ne),Wt.copy(Ct))},reset:function(){V=!1,Nt=null,Wt.set(-1,0,0,0)}}}function n(){let V=!1,Ct=!1,Nt=null,Wt=null,At=null;return{setReversed:function(_t){if(Ct!==_t){let Zt=t.get("EXT_clip_control");_t?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Ct=_t;let ne=At;At=null,this.setClear(ne)}},getReversed:function(){return Ct},setTest:function(_t){_t?xt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(_t){Nt!==_t&&!V&&(i.depthMask(_t),Nt=_t)},setFunc:function(_t){if(Ct&&(_t=cx[_t]),Wt!==_t){switch(_t){case ka:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Wt=_t}},setLocked:function(_t){V=_t},setClear:function(_t){At!==_t&&(Ct&&(_t=1-_t),i.clearDepth(_t),At=_t)},reset:function(){V=!1,Nt=null,Wt=null,At=null,Ct=!1}}}function s(){let V=!1,Ct=null,Nt=null,Wt=null,At=null,_t=null,Zt=null,ne=null,Ie=null;return{setTest:function(Pe){V||(Pe?xt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(Pe){Ct!==Pe&&!V&&(i.stencilMask(Pe),Ct=Pe)},setFunc:function(Pe,Bn,Kt){(Nt!==Pe||Wt!==Bn||At!==Kt)&&(i.stencilFunc(Pe,Bn,Kt),Nt=Pe,Wt=Bn,At=Kt)},setOp:function(Pe,Bn,Kt){(_t!==Pe||Zt!==Bn||ne!==Kt)&&(i.stencilOp(Pe,Bn,Kt),_t=Pe,Zt=Bn,ne=Kt)},setLocked:function(Pe){V=Pe},setClear:function(Pe){Ie!==Pe&&(i.clearStencil(Pe),Ie=Pe)},reset:function(){V=!1,Ct=null,Nt=null,Wt=null,At=null,_t=null,Zt=null,ne=null,Ie=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,p=[],g=null,x=!1,_=null,m=null,R=null,S=null,v=null,D=null,C=null,U=new Me(0,0,0),O=0,w=!1,b=null,F=null,K=null,$=null,tt=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,X=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=X>=2);let ft=null,mt={},It=i.getParameter(i.SCISSOR_BOX),Yt=i.getParameter(i.VIEWPORT),te=new qe().fromArray(It),ae=new qe().fromArray(Yt);function $t(V,Ct,Nt,Wt){let At=new Uint8Array(4),_t=i.createTexture();i.bindTexture(V,_t),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<Nt;Zt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,Wt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(Ct+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return _t}let it={};it[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xt(i.DEPTH_TEST),o.setFunc(ls),dt(!1),at(Uc),xt(i.CULL_FACE),ht(Pi);function xt(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function Ft(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function yt(V,Ct){return f[V]!==Ct?(i.bindFramebuffer(V,Ct),f[V]=Ct,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ct),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function kt(V,Ct){let Nt=p,Wt=!1;if(V){Nt=d.get(Ct),Nt===void 0&&(Nt=[],d.set(Ct,Nt));let At=V.textures;if(Nt.length!==At.length||Nt[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Zt=At.length;_t<Zt;_t++)Nt[_t]=i.COLOR_ATTACHMENT0+_t;Nt.length=At.length,Wt=!0}}else Nt[0]!==i.BACK&&(Nt[0]=i.BACK,Wt=!0);Wt&&i.drawBuffers(Nt)}function se(V){return g!==V?(i.useProgram(V),g=V,!0):!1}let re={[Wi]:i.FUNC_ADD,[Du]:i.FUNC_SUBTRACT,[Lu]:i.FUNC_REVERSE_SUBTRACT};re[Nu]=i.MIN,re[Uu]=i.MAX;let N={[Fu]:i.ZERO,[Ou]:i.ONE,[Bu]:i.SRC_COLOR,[oa]:i.SRC_ALPHA,[Wu]:i.SRC_ALPHA_SATURATE,[Vu]:i.DST_COLOR,[Hu]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[aa]:i.ONE_MINUS_SRC_ALPHA,[Gu]:i.ONE_MINUS_DST_COLOR,[ku]:i.ONE_MINUS_DST_ALPHA,[Xu]:i.CONSTANT_COLOR,[Yu]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Zu]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(V,Ct,Nt,Wt,At,_t,Zt,ne,Ie,Pe){if(V===Pi){x===!0&&(Ft(i.BLEND),x=!1);return}if(x===!1&&(xt(i.BLEND),x=!0),V!==Iu){if(V!==_||Pe!==w){if((m!==Wi||v!==Wi)&&(i.blendEquation(i.FUNC_ADD),m=Wi,v=Wi),Pe)switch(V){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oc:i.blendFunc(i.ONE,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,S=null,D=null,C=null,U.set(0,0,0),O=0,_=V,w=Pe}return}At=At||Ct,_t=_t||Nt,Zt=Zt||Wt,(Ct!==m||At!==v)&&(i.blendEquationSeparate(re[Ct],re[At]),m=Ct,v=At),(Nt!==R||Wt!==S||_t!==D||Zt!==C)&&(i.blendFuncSeparate(N[Nt],N[Wt],N[_t],N[Zt]),R=Nt,S=Wt,D=_t,C=Zt),(ne.equals(U)===!1||Ie!==O)&&(i.blendColor(ne.r,ne.g,ne.b,Ie),U.copy(ne),O=Ie),_=V,w=!1}function pt(V,Ct){V.side===ln?Ft(i.CULL_FACE):xt(i.CULL_FACE);let Nt=V.side===Tn;Ct&&(Nt=!Nt),dt(Nt),V.blending===as&&V.transparent===!1?ht(Pi):ht(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Wt=V.stencilWrite;a.setTest(Wt),Wt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ot(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(V){b!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),b=V)}function at(V){V!==Ru?(xt(i.CULL_FACE),V!==F&&(V===Uc?i.cullFace(i.BACK):V===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),F=V}function vt(V){V!==K&&(G&&i.lineWidth(V),K=V)}function ot(V,Ct,Nt){V?(xt(i.POLYGON_OFFSET_FILL),($!==Ct||tt!==Nt)&&(i.polygonOffset(Ct,Nt),$=Ct,tt=Nt)):Ft(i.POLYGON_OFFSET_FILL)}function Et(V){V?xt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function ee(V){V===void 0&&(V=i.TEXTURE0+B-1),ft!==V&&(i.activeTexture(V),ft=V)}function Dt(V,Ct,Nt){Nt===void 0&&(ft===null?Nt=i.TEXTURE0+B-1:Nt=ft);let Wt=mt[Nt];Wt===void 0&&(Wt={type:void 0,texture:void 0},mt[Nt]=Wt),(Wt.type!==V||Wt.texture!==Ct)&&(ft!==Nt&&(i.activeTexture(Nt),ft=Nt),i.bindTexture(V,Ct||it[V]),Wt.type=V,Wt.texture=Ct)}function I(){let V=mt[ft];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function P(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function L(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(V){te.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),te.copy(V))}function Gt(V){ae.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ae.copy(V))}function qt(V,Ct){let Nt=c.get(Ct);Nt===void 0&&(Nt=new WeakMap,c.set(Ct,Nt));let Wt=Nt.get(V);Wt===void 0&&(Wt=i.getUniformBlockIndex(Ct,V.name),Nt.set(V,Wt))}function Ut(V,Ct){let Wt=c.get(Ct).get(V);l.get(Ct)!==Wt&&(i.uniformBlockBinding(Ct,Wt,V.__bindingPointIndex),l.set(Ct,Wt))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ft=null,mt={},f={},d=new WeakMap,p=[],g=null,x=!1,_=null,m=null,R=null,S=null,v=null,D=null,C=null,U=new Me(0,0,0),O=0,w=!1,b=null,F=null,K=null,$=null,tt=null,te.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xt,disable:Ft,bindFramebuffer:yt,drawBuffers:kt,useProgram:se,setBlending:ht,setMaterial:pt,setFlipSided:dt,setCullFace:at,setLineWidth:vt,setPolygonOffset:ot,setScissorTest:Et,activeTexture:ee,bindTexture:Dt,unbindTexture:I,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:Rt,texImage3D:lt,updateUBOMapping:qt,uniformBlockBinding:Ut,texStorage2D:ut,texStorage3D:Lt,texSubImage2D:P,texSubImage3D:L,compressedTexSubImage2D:z,compressedTexSubImage3D:rt,scissor:St,viewport:Gt,reset:de}}function ux(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,y){return p?new OffscreenCanvas(I,y):Br("canvas")}function x(I,y,W){let P=1,L=Dt(I);if((L.width>W||L.height>W)&&(P=W/Math.max(L.width,L.height)),P<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let z=Math.floor(P*L.width),rt=Math.floor(P*L.height);f===void 0&&(f=g(z,rt));let ut=y?g(z,rt):f;return ut.width=z,ut.height=rt,ut.getContext("2d").drawImage(I,0,0,z,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+z+"x"+rt+")."),ut}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),I;return I}function _(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(I,y,W,P,L=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let z=y;if(y===i.RED&&(W===i.FLOAT&&(z=i.R32F),W===i.HALF_FLOAT&&(z=i.R16F),W===i.UNSIGNED_BYTE&&(z=i.R8)),y===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(z=i.R8UI),W===i.UNSIGNED_SHORT&&(z=i.R16UI),W===i.UNSIGNED_INT&&(z=i.R32UI),W===i.BYTE&&(z=i.R8I),W===i.SHORT&&(z=i.R16I),W===i.INT&&(z=i.R32I)),y===i.RG&&(W===i.FLOAT&&(z=i.RG32F),W===i.HALF_FLOAT&&(z=i.RG16F),W===i.UNSIGNED_BYTE&&(z=i.RG8)),y===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(z=i.RG8UI),W===i.UNSIGNED_SHORT&&(z=i.RG16UI),W===i.UNSIGNED_INT&&(z=i.RG32UI),W===i.BYTE&&(z=i.RG8I),W===i.SHORT&&(z=i.RG16I),W===i.INT&&(z=i.RG32I)),y===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(z=i.RGB8UI),W===i.UNSIGNED_SHORT&&(z=i.RGB16UI),W===i.UNSIGNED_INT&&(z=i.RGB32UI),W===i.BYTE&&(z=i.RGB8I),W===i.SHORT&&(z=i.RGB16I),W===i.INT&&(z=i.RGB32I)),y===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),W===i.UNSIGNED_INT&&(z=i.RGBA32UI),W===i.BYTE&&(z=i.RGBA8I),W===i.SHORT&&(z=i.RGBA16I),W===i.INT&&(z=i.RGBA32I)),y===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(z=i.R11F_G11F_B10F)),y===i.RGBA){let rt=L?Fr:Ae.getTransfer(P);W===i.FLOAT&&(z=i.RGBA32F),W===i.HALF_FLOAT&&(z=i.RGBA16F),W===i.UNSIGNED_BYTE&&(z=rt===Le?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function v(I,y){let W;return I?y===null||y===$i||y===dr?W=i.DEPTH24_STENCIL8:y===ri?W=i.DEPTH32F_STENCIL8:y===hr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$i||y===dr?W=i.DEPTH_COMPONENT24:y===ri?W=i.DEPTH_COMPONENT32F:y===hr&&(W=i.DEPTH_COMPONENT16),W}function D(I,y){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==Rn&&I.minFilter!==ti?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function C(I){let y=I.target;y.removeEventListener("dispose",C),O(y),y.isVideoTexture&&h.delete(y)}function U(I){let y=I.target;y.removeEventListener("dispose",U),b(y)}function O(I){let y=n.get(I);if(y.__webglInit===void 0)return;let W=I.source,P=d.get(W);if(P){let L=P[y.__cacheKey];L.usedTimes--,L.usedTimes===0&&w(I),Object.keys(P).length===0&&d.delete(W)}n.remove(I)}function w(I){let y=n.get(I);i.deleteTexture(y.__webglTexture);let W=I.source,P=d.get(W);delete P[y.__cacheKey],o.memory.textures--}function b(I){let y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(y.__webglFramebuffer[P]))for(let L=0;L<y.__webglFramebuffer[P].length;L++)i.deleteFramebuffer(y.__webglFramebuffer[P][L]);else i.deleteFramebuffer(y.__webglFramebuffer[P]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[P])}else{if(Array.isArray(y.__webglFramebuffer))for(let P=0;P<y.__webglFramebuffer.length;P++)i.deleteFramebuffer(y.__webglFramebuffer[P]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let P=0;P<y.__webglColorRenderbuffer.length;P++)y.__webglColorRenderbuffer[P]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[P]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let W=I.textures;for(let P=0,L=W.length;P<L;P++){let z=n.get(W[P]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(W[P])}n.remove(I)}let F=0;function K(){F=0}function $(){let I=F;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function tt(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function B(I,y){let W=n.get(I);if(I.isVideoTexture&&Et(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){let P=I.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(W,I,y);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+y)}function G(I,y){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){it(W,I,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+y)}function X(I,y){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){it(W,I,y);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+y)}function H(I,y){let W=n.get(I);if(I.version>0&&W.__version!==I.version){xt(W,I,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+y)}let ft={[la]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[ca]:i.MIRRORED_REPEAT},mt={[Rn]:i.NEAREST,[sd]:i.NEAREST_MIPMAP_NEAREST,[mo]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[Ja]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},It={[ld]:i.NEVER,[pd]:i.ALWAYS,[cd]:i.LESS,[Jc]:i.LEQUAL,[hd]:i.EQUAL,[fd]:i.GEQUAL,[ud]:i.GREATER,[dd]:i.NOTEQUAL};function Yt(I,y){if(y.type===ri&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ti||y.magFilter===Ja||y.magFilter===mo||y.magFilter===Ji||y.minFilter===ti||y.minFilter===Ja||y.minFilter===mo||y.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ft[y.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ft[y.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ft[y.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,mt[y.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,mt[y.minFilter]),y.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,It[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Rn||y.minFilter!==mo&&y.minFilter!==Ji||y.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function te(I,y){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",C));let P=y.source,L=d.get(P);L===void 0&&(L={},d.set(P,L));let z=tt(y);if(z!==I.__cacheKey){L[z]===void 0&&(L[z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),L[z].usedTimes++;let rt=L[I.__cacheKey];rt!==void 0&&(L[I.__cacheKey].usedTimes--,rt.usedTimes===0&&w(y)),I.__cacheKey=z,I.__webglTexture=L[z].texture}return W}function ae(I,y,W){return Math.floor(Math.floor(I/W)/y)}function $t(I,y,W,P){let z=I.updateRanges;if(z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,W,P,y.data);else{z.sort((lt,St)=>lt.start-St.start);let rt=0;for(let lt=1;lt<z.length;lt++){let St=z[rt],Gt=z[lt],qt=St.start+St.count,Ut=ae(Gt.start,y.width,4),de=ae(St.start,y.width,4);Gt.start<=qt+1&&Ut===de&&ae(Gt.start+Gt.count-1,y.width,4)===Ut?St.count=Math.max(St.count,Gt.start+Gt.count-St.start):(++rt,z[rt]=Gt)}z.length=rt+1;let ut=i.getParameter(i.UNPACK_ROW_LENGTH),Lt=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let lt=0,St=z.length;lt<St;lt++){let Gt=z[lt],qt=Math.floor(Gt.start/4),Ut=Math.ceil(Gt.count/4),de=qt%y.width,V=Math.floor(qt/y.width),Ct=Ut,Nt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,de),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,de,V,Ct,Nt,W,P,y.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ut),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function it(I,y,W){let P=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(P=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(P=i.TEXTURE_3D);let L=te(I,y),z=y.source;e.bindTexture(P,I.__webglTexture,i.TEXTURE0+W);let rt=n.get(z);if(z.version!==rt.__version||L===!0){e.activeTexture(i.TEXTURE0+W);let ut=Ae.getPrimaries(Ae.workingColorSpace),Lt=y.colorSpace===Di?null:Ae.getPrimaries(y.colorSpace),Rt=y.colorSpace===Di||ut===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let lt=x(y.image,!1,s.maxTextureSize);lt=ee(y,lt);let St=r.convert(y.format,y.colorSpace),Gt=r.convert(y.type),qt=S(y.internalFormat,St,Gt,y.colorSpace,y.isVideoTexture);Yt(P,y);let Ut,de=y.mipmaps,V=y.isVideoTexture!==!0,Ct=rt.__version===void 0||L===!0,Nt=z.dataReady,Wt=D(y,lt);if(y.isDepthTexture)qt=v(y.format===fr,y.type),Ct&&(V?e.texStorage2D(i.TEXTURE_2D,1,qt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,qt,lt.width,lt.height,0,St,Gt,null));else if(y.isDataTexture)if(de.length>0){V&&Ct&&e.texStorage2D(i.TEXTURE_2D,Wt,qt,de[0].width,de[0].height);for(let At=0,_t=de.length;At<_t;At++)Ut=de[At],V?Nt&&e.texSubImage2D(i.TEXTURE_2D,At,0,0,Ut.width,Ut.height,St,Gt,Ut.data):e.texImage2D(i.TEXTURE_2D,At,qt,Ut.width,Ut.height,0,St,Gt,Ut.data);y.generateMipmaps=!1}else V?(Ct&&e.texStorage2D(i.TEXTURE_2D,Wt,qt,lt.width,lt.height),Nt&&$t(y,lt,St,Gt)):e.texImage2D(i.TEXTURE_2D,0,qt,lt.width,lt.height,0,St,Gt,lt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){V&&Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,qt,de[0].width,de[0].height,lt.depth);for(let At=0,_t=de.length;At<_t;At++)if(Ut=de[At],y.format!==Gn)if(St!==null)if(V){if(Nt)if(y.layerUpdates.size>0){let Zt=sh(Ut.width,Ut.height,y.format,y.type);for(let ne of y.layerUpdates){let Ie=Ut.data.subarray(ne*Zt/Ut.data.BYTES_PER_ELEMENT,(ne+1)*Zt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,At,0,0,ne,Ut.width,Ut.height,1,St,Ie)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,At,0,0,0,Ut.width,Ut.height,lt.depth,St,Ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,At,qt,Ut.width,Ut.height,lt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Nt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,At,0,0,0,Ut.width,Ut.height,lt.depth,St,Gt,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,At,qt,Ut.width,Ut.height,lt.depth,0,St,Gt,Ut.data)}else{V&&Ct&&e.texStorage2D(i.TEXTURE_2D,Wt,qt,de[0].width,de[0].height);for(let At=0,_t=de.length;At<_t;At++)Ut=de[At],y.format!==Gn?St!==null?V?Nt&&e.compressedTexSubImage2D(i.TEXTURE_2D,At,0,0,Ut.width,Ut.height,St,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,At,qt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Nt&&e.texSubImage2D(i.TEXTURE_2D,At,0,0,Ut.width,Ut.height,St,Gt,Ut.data):e.texImage2D(i.TEXTURE_2D,At,qt,Ut.width,Ut.height,0,St,Gt,Ut.data)}else if(y.isDataArrayTexture)if(V){if(Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,qt,lt.width,lt.height,lt.depth),Nt)if(y.layerUpdates.size>0){let At=sh(lt.width,lt.height,y.format,y.type);for(let _t of y.layerUpdates){let Zt=lt.data.subarray(_t*At/lt.data.BYTES_PER_ELEMENT,(_t+1)*At/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,lt.width,lt.height,1,St,Gt,Zt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,St,Gt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,lt.width,lt.height,lt.depth,0,St,Gt,lt.data);else if(y.isData3DTexture)V?(Ct&&e.texStorage3D(i.TEXTURE_3D,Wt,qt,lt.width,lt.height,lt.depth),Nt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,St,Gt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,qt,lt.width,lt.height,lt.depth,0,St,Gt,lt.data);else if(y.isFramebufferTexture){if(Ct)if(V)e.texStorage2D(i.TEXTURE_2D,Wt,qt,lt.width,lt.height);else{let At=lt.width,_t=lt.height;for(let Zt=0;Zt<Wt;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,qt,At,_t,0,St,Gt,null),At>>=1,_t>>=1}}else if(de.length>0){if(V&&Ct){let At=Dt(de[0]);e.texStorage2D(i.TEXTURE_2D,Wt,qt,At.width,At.height)}for(let At=0,_t=de.length;At<_t;At++)Ut=de[At],V?Nt&&e.texSubImage2D(i.TEXTURE_2D,At,0,0,St,Gt,Ut):e.texImage2D(i.TEXTURE_2D,At,qt,St,Gt,Ut);y.generateMipmaps=!1}else if(V){if(Ct){let At=Dt(lt);e.texStorage2D(i.TEXTURE_2D,Wt,qt,At.width,At.height)}Nt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Gt,lt)}else e.texImage2D(i.TEXTURE_2D,0,qt,St,Gt,lt);_(y)&&m(P),rt.__version=z.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function xt(I,y,W){if(y.image.length!==6)return;let P=te(I,y),L=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);let z=n.get(L);if(L.version!==z.__version||P===!0){e.activeTexture(i.TEXTURE0+W);let rt=Ae.getPrimaries(Ae.workingColorSpace),ut=y.colorSpace===Di?null:Ae.getPrimaries(y.colorSpace),Lt=y.colorSpace===Di||rt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Rt=y.isCompressedTexture||y.image[0].isCompressedTexture,lt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let _t=0;_t<6;_t++)!Rt&&!lt?St[_t]=x(y.image[_t],!0,s.maxCubemapSize):St[_t]=lt?y.image[_t].image:y.image[_t],St[_t]=ee(y,St[_t]);let Gt=St[0],qt=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type),de=S(y.internalFormat,qt,Ut,y.colorSpace),V=y.isVideoTexture!==!0,Ct=z.__version===void 0||P===!0,Nt=L.dataReady,Wt=D(y,Gt);Yt(i.TEXTURE_CUBE_MAP,y);let At;if(Rt){V&&Ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,de,Gt.width,Gt.height);for(let _t=0;_t<6;_t++){At=St[_t].mipmaps;for(let Zt=0;Zt<At.length;Zt++){let ne=At[Zt];y.format!==Gn?qt!==null?V?Nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,0,0,ne.width,ne.height,qt,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,de,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,0,0,ne.width,ne.height,qt,Ut,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,de,ne.width,ne.height,0,qt,Ut,ne.data)}}}else{if(At=y.mipmaps,V&&Ct){At.length>0&&Wt++;let _t=Dt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,de,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(lt){V?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,St[_t].width,St[_t].height,qt,Ut,St[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,de,St[_t].width,St[_t].height,0,qt,Ut,St[_t].data);for(let Zt=0;Zt<At.length;Zt++){let Ie=At[Zt].image[_t].image;V?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,0,0,Ie.width,Ie.height,qt,Ut,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,de,Ie.width,Ie.height,0,qt,Ut,Ie.data)}}else{V?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,qt,Ut,St[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,de,qt,Ut,St[_t]);for(let Zt=0;Zt<At.length;Zt++){let ne=At[Zt];V?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,0,0,qt,Ut,ne.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,de,qt,Ut,ne.image[_t])}}}_(y)&&m(i.TEXTURE_CUBE_MAP),z.__version=L.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Ft(I,y,W,P,L,z){let rt=r.convert(W.format,W.colorSpace),ut=r.convert(W.type),Lt=S(W.internalFormat,rt,ut,W.colorSpace),Rt=n.get(y),lt=n.get(W);if(lt.__renderTarget=y,!Rt.__hasExternalTextures){let St=Math.max(1,y.width>>z),Gt=Math.max(1,y.height>>z);L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?e.texImage3D(L,z,Lt,St,Gt,y.depth,0,rt,ut,null):e.texImage2D(L,z,Lt,St,Gt,0,rt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),ot(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,P,L,lt.__webglTexture,0,vt(y)):(L===i.TEXTURE_2D||L>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,P,L,lt.__webglTexture,z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(I,y,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),y.depthBuffer){let P=y.depthTexture,L=P&&P.isDepthTexture?P.type:null,z=v(y.stencilBuffer,L),rt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=vt(y);ot(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,z,y.width,y.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,I)}else{let P=y.textures;for(let L=0;L<P.length;L++){let z=P[L],rt=r.convert(z.format,z.colorSpace),ut=r.convert(z.type),Lt=S(z.internalFormat,rt,ut,z.colorSpace),Rt=vt(y);W&&ot(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Lt,y.width,y.height):ot(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,Lt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(I,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let P=n.get(y.depthTexture);P.__renderTarget=y,(!P.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);let L=P.__webglTexture,z=vt(y);if(y.depthTexture.format===Ks)ot(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,L,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,L,0);else if(y.depthTexture.format===fr)ot(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,L,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,L,0);else throw new Error("Unknown depthTexture format")}function se(I){let y=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let P=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),P){let L=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,P.removeEventListener("dispose",L)};P.addEventListener("dispose",L),y.__depthDisposeCallback=L}y.__boundDepthTexture=P}if(I.depthTexture&&!y.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");let P=I.texture.mipmaps;P&&P.length>0?kt(y.__webglFramebuffer[0],I):kt(y.__webglFramebuffer,I)}else if(W){y.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[P]),y.__webglDepthbuffer[P]===void 0)y.__webglDepthbuffer[P]=i.createRenderbuffer(),yt(y.__webglDepthbuffer[P],I,!1);else{let L=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=y.__webglDepthbuffer[P];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,z)}}else{let P=I.texture.mipmaps;if(P&&P.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),yt(y.__webglDepthbuffer,I,!1);else{let L=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(I,y,W){let P=n.get(I);y!==void 0&&Ft(P.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&se(I)}function N(I){let y=I.texture,W=n.get(I),P=n.get(y);I.addEventListener("dispose",U);let L=I.textures,z=I.isWebGLCubeRenderTarget===!0,rt=L.length>1;if(rt||(P.__webglTexture===void 0&&(P.__webglTexture=i.createTexture()),P.__version=y.version,o.memory.textures++),z){W.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[ut]=[];for(let Lt=0;Lt<y.mipmaps.length;Lt++)W.__webglFramebuffer[ut][Lt]=i.createFramebuffer()}else W.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)W.__webglFramebuffer[ut]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(rt)for(let ut=0,Lt=L.length;ut<Lt;ut++){let Rt=n.get(L[ut]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ot(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ut=0;ut<L.length;ut++){let Lt=L[ut];W.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ut]);let Rt=r.convert(Lt.format,Lt.colorSpace),lt=r.convert(Lt.type),St=S(Lt.internalFormat,Rt,lt,Lt.colorSpace,I.isXRRenderTarget===!0),Gt=vt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,St,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,W.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let Lt=0;Lt<y.mipmaps.length;Lt++)Ft(W.__webglFramebuffer[ut][Lt],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt);else Ft(W.__webglFramebuffer[ut],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);_(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let ut=0,Lt=L.length;ut<Lt;ut++){let Rt=L[ut],lt=n.get(Rt),St=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(St=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,lt.__webglTexture),Yt(St,Rt),Ft(W.__webglFramebuffer,I,Rt,i.COLOR_ATTACHMENT0+ut,St,0),_(Rt)&&m(St)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ut=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,P.__webglTexture),Yt(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let Lt=0;Lt<y.mipmaps.length;Lt++)Ft(W.__webglFramebuffer[Lt],I,y,i.COLOR_ATTACHMENT0,ut,Lt);else Ft(W.__webglFramebuffer,I,y,i.COLOR_ATTACHMENT0,ut,0);_(y)&&m(ut),e.unbindTexture()}I.depthBuffer&&se(I)}function ht(I){let y=I.textures;for(let W=0,P=y.length;W<P;W++){let L=y[W];if(_(L)){let z=R(I),rt=n.get(L).__webglTexture;e.bindTexture(z,rt),m(z),e.unbindTexture()}}}let pt=[],dt=[];function at(I){if(I.samples>0){if(ot(I)===!1){let y=I.textures,W=I.width,P=I.height,L=i.COLOR_BUFFER_BIT,z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(I),ut=y.length>1;if(ut)for(let Rt=0;Rt<y.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let Lt=I.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let Rt=0;Rt<y.length;Rt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(L|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(L|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[Rt]);let lt=n.get(y[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,W,P,0,0,W,P,L,i.NEAREST),l===!0&&(pt.length=0,dt.length=0,pt.push(i.COLOR_ATTACHMENT0+Rt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(pt.push(z),dt.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Rt=0;Rt<y.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,rt.__webglColorRenderbuffer[Rt]);let lt=n.get(y[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function vt(I){return Math.min(s.maxSamples,I.samples)}function ot(I){let y=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Et(I){let y=o.render.frame;h.get(I)!==y&&(h.set(I,y),I.update())}function ee(I,y){let W=I.colorSpace,P=I.format,L=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==cs&&W!==Di&&(Ae.getTransfer(W)===Le?(P!==Gn||L!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),y}function Dt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=K,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=re,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=ot}function dx(i,t){function e(n,s=Di){let r,o=Ae.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vc)return i.BYTE;if(n===Gc)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===$a)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===ur)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===qc)return i.RGB;if(n===Gn)return i.RGBA;if(n===Ks)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===el)return i.RED_INTEGER;if(n===Zc)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===go||n===_o||n===xo||n===yo)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ll||n===cl)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===yl||n===vl||n===Ml||n===El||n===Sl||n===bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ul)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wl||n===Tl||n===Al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wl)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rl||n===Cl||n===Pl||n===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,px=`
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

}`,_h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Kr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ei({vertexShader:fx,fragmentShader:px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",_=new _h,m={},R=e.getContextAttributes(),S=null,v=null,D=[],C=[],U=new gt,O=null,w=new un;w.viewport=new qe;let b=new un;b.viewport=new qe;let F=[w,b],K=new Ha,$=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let xt=D[it];return xt===void 0&&(xt=new Qs,D[it]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(it){let xt=D[it];return xt===void 0&&(xt=new Qs,D[it]=xt),xt.getGripSpace()},this.getHand=function(it){let xt=D[it];return xt===void 0&&(xt=new Qs,D[it]=xt),xt.getHandSpace()};function B(it){let xt=C.indexOf(it.inputSource);if(xt===-1)return;let Ft=D[xt];Ft!==void 0&&(Ft.update(it.inputSource,it.frame,c||o),Ft.dispatchEvent({type:it.type,data:it.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",X);for(let it=0;it<D.length;it++){let xt=C[it];xt!==null&&(C[it]=null,D[it].disconnect(xt))}$=null,tt=null,_.reset();for(let it in m)delete m[it];t.setRenderTarget(S),p=null,d=null,f=null,s=null,v=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",X),R.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(U),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ft=null,yt=null,kt=null;R.depth&&(kt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ft=R.stencil?fr:Ks,yt=R.stencil?dr:$i);let se={colorFormat:e.RGBA8,depthFormat:kt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(se),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new di(d.textureWidth,d.textureHeight,{format:Gn,type:si,depthTexture:new Zr(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,Ft),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Ft={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Ft),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new di(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(it){for(let xt=0;xt<it.removed.length;xt++){let Ft=it.removed[xt],yt=C.indexOf(Ft);yt>=0&&(C[yt]=null,D[yt].disconnect(Ft))}for(let xt=0;xt<it.added.length;xt++){let Ft=it.added[xt],yt=C.indexOf(Ft);if(yt===-1){for(let se=0;se<D.length;se++)if(se>=C.length){C.push(Ft),yt=se;break}else if(C[se]===null){C[se]=Ft,yt=se;break}if(yt===-1)break}let kt=D[yt];kt&&kt.connect(Ft)}}let H=new A,ft=new A;function mt(it,xt,Ft){H.setFromMatrixPosition(xt.matrixWorld),ft.setFromMatrixPosition(Ft.matrixWorld);let yt=H.distanceTo(ft),kt=xt.projectionMatrix.elements,se=Ft.projectionMatrix.elements,re=kt[14]/(kt[10]-1),N=kt[14]/(kt[10]+1),ht=(kt[9]+1)/kt[5],pt=(kt[9]-1)/kt[5],dt=(kt[8]-1)/kt[0],at=(se[8]+1)/se[0],vt=re*dt,ot=re*at,Et=yt/(-dt+at),ee=Et*-dt;if(xt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ee),it.translateZ(Et),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),kt[10]===-1)it.projectionMatrix.copy(xt.projectionMatrix),it.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{let Dt=re+Et,I=N+Et,y=vt-ee,W=ot+(yt-ee),P=ht*N/I*Dt,L=pt*N/I*Dt;it.projectionMatrix.makePerspective(y,W,P,L,Dt,I),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function It(it,xt){xt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(xt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let xt=it.near,Ft=it.far;_.texture!==null&&(_.depthNear>0&&(xt=_.depthNear),_.depthFar>0&&(Ft=_.depthFar)),K.near=b.near=w.near=xt,K.far=b.far=w.far=Ft,($!==K.near||tt!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),$=K.near,tt=K.far),K.layers.mask=it.layers.mask|6,w.layers.mask=K.layers.mask&3,b.layers.mask=K.layers.mask&5;let yt=it.parent,kt=K.cameras;It(K,yt);for(let se=0;se<kt.length;se++)It(kt[se],yt);kt.length===2?mt(K,w,b):K.projectionMatrix.copy(w.projectionMatrix),Yt(it,K,yt)};function Yt(it,xt,Ft){Ft===null?it.matrix.copy(xt.matrixWorld):(it.matrix.copy(Ft.matrixWorld),it.matrix.invert(),it.matrix.multiply(xt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(xt.projectionMatrix),it.projectionMatrixInverse.copy(xt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=hs*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(it){l=it,d!==null&&(d.fixedFoveation=it),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=it)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(K)},this.getCameraTexture=function(it){return m[it]};let te=null;function ae(it,xt){if(h=xt.getViewerPose(c||o),g=xt,h!==null){let Ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let yt=!1;Ft.length!==K.cameras.length&&(K.cameras.length=0,yt=!0);for(let N=0;N<Ft.length;N++){let ht=Ft[N],pt=null;if(p!==null)pt=p.getViewport(ht);else{let at=f.getViewSubImage(d,ht);pt=at.viewport,N===0&&(t.setRenderTargetTextures(v,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(v))}let dt=F[N];dt===void 0&&(dt=new un,dt.layers.enable(N),dt.viewport=new qe,F[N]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(pt.x,pt.y,pt.width,pt.height),N===0&&(K.matrix.copy(dt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),yt===!0&&K.cameras.push(dt)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let N=f.getDepthInformation(Ft[0]);N&&N.isValid&&N.texture&&_.init(N,s.renderState)}if(kt&&kt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let N=0;N<Ft.length;N++){let ht=Ft[N].camera;if(ht){let pt=m[ht];pt||(pt=new Kr,m[ht]=pt);let dt=f.getCameraImage(ht);pt.sourceTexture=dt}}}}for(let Ft=0;Ft<D.length;Ft++){let yt=C[Ft],kt=D[Ft];yt!==null&&kt!==void 0&&kt.update(yt,xt,c||o)}te&&te(it,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),g=null}let $t=new Zd;$t.setAnimationLoop(ae),this.setAnimationLoop=function(it){te=it},this.dispose=function(){}}},vs=new fn,mx=new Re;function gx(i,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,th(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,R,S,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),f(_,m)):m.isMeshPhongMaterial?(r(_,m),h(_,m)):m.isMeshStandardMaterial?(r(_,m),d(_,m),m.isMeshPhysicalMaterial&&p(_,m,v)):m.isMeshMatcapMaterial?(r(_,m),g(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),x(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,R,S):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Tn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Tn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let R=t.get(m),S=R.envMap,v=R.envMapRotation;S&&(_.envMap.value=S,vs.copy(v),vs.x*=-1,vs.y*=-1,vs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),_.envMapRotation.value.setFromMatrix4(mx.makeRotationFromEuler(vs)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,R,S){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*R,_.scale.value=S*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,R){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function x(_,m){let R=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _x(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,S){let v=S.program;n.uniformBlockBinding(R,v)}function c(R,S){let v=s[R.id];v===void 0&&(g(R),v=h(R),s[R.id]=v,R.addEventListener("dispose",_));let D=S.program;n.updateUBOMapping(R,D);let C=t.render.frame;r[R.id]!==C&&(d(R),r[R.id]=C)}function h(R){let S=f();R.__bindingPointIndex=S;let v=i.createBuffer(),D=R.__size,C=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){let S=s[R.id],v=R.uniforms,D=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,U=v.length;C<U;C++){let O=Array.isArray(v[C])?v[C]:[v[C]];for(let w=0,b=O.length;w<b;w++){let F=O[w];if(p(F,C,w,D)===!0){let K=F.__offset,$=Array.isArray(F.value)?F.value:[F.value],tt=0;for(let B=0;B<$.length;B++){let G=$[B],X=x(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,K+tt,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,tt),tt+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,S,v,D){let C=R.value,U=S+"_"+v;if(D[U]===void 0)return typeof C=="number"||typeof C=="boolean"?D[U]=C:D[U]=C.clone(),!0;{let O=D[U];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return D[U]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(R){let S=R.uniforms,v=0,D=16;for(let U=0,O=S.length;U<O;U++){let w=Array.isArray(S[U])?S[U]:[S[U]];for(let b=0,F=w.length;b<F;b++){let K=w[b],$=Array.isArray(K.value)?K.value:[K.value];for(let tt=0,B=$.length;tt<B;tt++){let G=$[tt],X=x(G),H=v%D,ft=H%X.boundary,mt=H+ft;v+=ft,mt!==0&&D-mt<X.storage&&(v+=D-mt),K.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=v,v+=X.storage}}}let C=v%D;return C>0&&(v+=D-C),R.__size=v,R.__cache={},this}function x(R){let S={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(S.boundary=4,S.storage=4):R.isVector2?(S.boundary=8,S.storage=8):R.isVector3||R.isColor?(S.boundary=16,S.storage=12):R.isVector4?(S.boundary=16,S.storage=16):R.isMatrix3?(S.boundary=48,S.storage=48):R.isMatrix4?(S.boundary=64,S.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),S}function _(R){let S=R.target;S.removeEventListener("dispose",_);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Fl=class{constructor(t={}){let{canvas:e=md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),_=null,m=null,R=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,D=!1;this._outputColorSpace=on;let C=0,U=0,O=null,w=-1,b=null,F=new qe,K=new qe,$=null,tt=new Me(0),B=0,G=e.width,X=e.height,H=1,ft=null,mt=null,It=new qe(0,0,G,X),Yt=new qe(0,0,G,X),te=!1,ae=new nr,$t=!1,it=!1,xt=new Re,Ft=new A,yt=new qe,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function re(){return O===null?H:1}let N=n;function ht(T,Y){return e.getContext(T,Y)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",At,!1),N===null){let Y="webgl2";if(N=ht(Y,T),N===null)throw ht(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let pt,dt,at,vt,ot,Et,ee,Dt,I,y,W,P,L,z,rt,ut,Lt,Rt,lt,St,Gt,qt,Ut,de;function V(){pt=new U_(N),pt.init(),qt=new dx(N,pt),dt=new R_(N,pt,t,qt),at=new hx(N,pt),dt.reversedDepthBuffer&&d&&at.buffers.depth.setReversed(!0),vt=new B_(N),ot=new $0,Et=new ux(N,pt,at,ot,dt,qt,vt),ee=new P_(v),Dt=new N_(v),I=new Wp(N),Ut=new T_(N,I),y=new F_(N,I,vt,Ut),W=new H_(N,y,I,vt),lt=new z_(N,dt,Et),ut=new C_(ot),P=new J0(v,ee,Dt,pt,dt,Ut,ut),L=new gx(v,ot),z=new Q0,rt=new rx(pt),Rt=new w_(v,ee,Dt,at,W,p,l),Lt=new lx(v,W,dt),de=new _x(N,vt,dt,at),St=new A_(N,pt,vt),Gt=new O_(N,pt,vt),vt.programs=P.programs,v.capabilities=dt,v.extensions=pt,v.properties=ot,v.renderLists=z,v.shadowMap=Lt,v.state=at,v.info=vt}V();let Ct=new xh(v,N);this.xr=Ct,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(G,X,!1))},this.getSize=function(T){return T.set(G,X)},this.setSize=function(T,Y,et=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,X=Y,e.width=Math.floor(T*H),e.height=Math.floor(Y*H),et===!0&&(e.style.width=T+"px",e.style.height=Y+"px"),this.setViewport(0,0,T,Y)},this.getDrawingBufferSize=function(T){return T.set(G*H,X*H).floor()},this.setDrawingBufferSize=function(T,Y,et){G=T,X=Y,H=et,e.width=Math.floor(T*et),e.height=Math.floor(Y*et),this.setViewport(0,0,T,Y)},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(It)},this.setViewport=function(T,Y,et,nt){T.isVector4?It.set(T.x,T.y,T.z,T.w):It.set(T,Y,et,nt),at.viewport(F.copy(It).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Yt)},this.setScissor=function(T,Y,et,nt){T.isVector4?Yt.set(T.x,T.y,T.z,T.w):Yt.set(T,Y,et,nt),at.scissor(K.copy(Yt).multiplyScalar(H).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){at.setScissorTest(te=T)},this.setOpaqueSort=function(T){ft=T},this.setTransparentSort=function(T){mt=T},this.getClearColor=function(T){return T.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(T=!0,Y=!0,et=!0){let nt=0;if(T){let q=!1;if(O!==null){let wt=O.texture.format;q=wt===il||wt===nl||wt===el}if(q){let wt=O.texture.type,Ot=wt===si||wt===$i||wt===hr||wt===dr||wt===ja||wt===Qa,Bt=Rt.getClearColor(),Vt=Rt.getClearAlpha(),oe=Bt.r,le=Bt.g,jt=Bt.b;Ot?(g[0]=oe,g[1]=le,g[2]=jt,g[3]=Vt,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=oe,x[1]=le,x[2]=jt,x[3]=Vt,N.clearBufferiv(N.COLOR,0,x))}else nt|=N.COLOR_BUFFER_BIT}Y&&(nt|=N.DEPTH_BUFFER_BIT),et&&(nt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Rt.dispose(),z.dispose(),rt.dispose(),ot.dispose(),ee.dispose(),Dt.dispose(),W.dispose(),Ut.dispose(),de.dispose(),P.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Kt),Ct.removeEventListener("sessionend",Dn),ge.stop()};function Nt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Wt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let T=vt.autoReset,Y=Lt.enabled,et=Lt.autoUpdate,nt=Lt.needsUpdate,q=Lt.type;V(),vt.autoReset=T,Lt.enabled=Y,Lt.autoUpdate=et,Lt.needsUpdate=nt,Lt.type=q}function At(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _t(T){let Y=T.target;Y.removeEventListener("dispose",_t),Zt(Y)}function Zt(T){ne(T),ot.remove(T)}function ne(T){let Y=ot.get(T).programs;Y!==void 0&&(Y.forEach(function(et){P.releaseProgram(et)}),T.isShaderMaterial&&P.releaseShaderCache(T))}this.renderBufferDirect=function(T,Y,et,nt,q,wt){Y===null&&(Y=kt);let Ot=q.isMesh&&q.matrixWorld.determinant()<0,Bt=xr(T,Y,et,nt,q);at.setMaterial(nt,Ot);let Vt=et.index,oe=1;if(nt.wireframe===!0){if(Vt=y.getWireframeAttribute(et),Vt===void 0)return;oe=2}let le=et.drawRange,jt=et.attributes.position,fe=le.start*oe,ie=(le.start+le.count)*oe;wt!==null&&(fe=Math.max(fe,wt.start*oe),ie=Math.min(ie,(wt.start+wt.count)*oe)),Vt!==null?(fe=Math.max(fe,0),ie=Math.min(ie,Vt.count)):jt!=null&&(fe=Math.max(fe,0),ie=Math.min(ie,jt.count));let Jt=ie-fe;if(Jt<0||Jt===1/0)return;Ut.setup(q,nt,Bt,et,Vt);let we,Se=St;if(Vt!==null&&(we=I.get(Vt),Se=Gt,Se.setIndex(we)),q.isMesh)nt.wireframe===!0?(at.setLineWidth(nt.wireframeLinewidth*re()),Se.setMode(N.LINES)):Se.setMode(N.TRIANGLES);else if(q.isLine){let Xt=nt.linewidth;Xt===void 0&&(Xt=1),at.setLineWidth(Xt*re()),q.isLineSegments?Se.setMode(N.LINES):q.isLineLoop?Se.setMode(N.LINE_LOOP):Se.setMode(N.LINE_STRIP)}else q.isPoints?Se.setMode(N.POINTS):q.isSprite&&Se.setMode(N.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Se.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Xt=q._multiDrawStarts,ke=q._multiDrawCounts,be=q._multiDrawCount,je=Vt?I.get(Vt).bytesPerElement:1,xi=ot.get(nt).currentProgram.getUniforms();for(let cn=0;cn<be;cn++)xi.setValue(N,"_gl_DrawID",cn),Se.render(Xt[cn]/je,ke[cn])}else if(q.isInstancedMesh)Se.renderInstances(fe,Jt,q.count);else if(et.isInstancedBufferGeometry){let Xt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,ke=Math.min(et.instanceCount,Xt);Se.renderInstances(fe,Jt,ke)}else Se.render(fe,Jt)};function Ie(T,Y,et){T.transparent===!0&&T.side===ln&&T.forceSinglePass===!1?(T.side=Tn,T.needsUpdate=!0,Li(T,Y,et),T.side=wi,T.needsUpdate=!0,Li(T,Y,et),T.side=ln):Li(T,Y,et)}this.compile=function(T,Y,et=null){et===null&&(et=T),m=rt.get(et),m.init(Y),S.push(m),et.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),T!==et&&T.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();let nt=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let wt=q.material;if(wt)if(Array.isArray(wt))for(let Ot=0;Ot<wt.length;Ot++){let Bt=wt[Ot];Ie(Bt,et,q),nt.add(Bt)}else Ie(wt,et,q),nt.add(wt)}),m=S.pop(),nt},this.compileAsync=function(T,Y,et=null){let nt=this.compile(T,Y,et);return new Promise(q=>{function wt(){if(nt.forEach(function(Ot){ot.get(Ot).currentProgram.isReady()&&nt.delete(Ot)}),nt.size===0){q(T);return}setTimeout(wt,10)}pt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Pe=null;function Bn(T){Pe&&Pe(T)}function Kt(){ge.stop()}function Dn(){ge.start()}let ge=new Zd;ge.setAnimationLoop(Bn),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(T){Pe=T,Ct.setAnimationLoop(T),T===null?ge.stop():ge.start()},Ct.addEventListener("sessionstart",Kt),Ct.addEventListener("sessionend",Dn),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Y),Y=Ct.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,Y,O),m=rt.get(T,S.length),m.init(Y),S.push(m),xt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ae.setFromProjectionMatrix(xt,Qn,Y.reversedDepth),it=this.localClippingEnabled,$t=ut.init(this.clippingPlanes,it),_=z.get(T,R.length),_.init(),R.push(_),Ct.enabled===!0&&Ct.isPresenting===!0){let wt=v.xr.getDepthSensingMesh();wt!==null&&bt(wt,Y,-1/0,v.sortObjects)}bt(T,Y,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(ft,mt),se=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,se&&Rt.addToRenderList(_,T),this.info.render.frame++,$t===!0&&ut.beginShadows();let et=m.state.shadowsArray;Lt.render(et,T,Y),$t===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let nt=_.opaque,q=_.transmissive;if(m.setupLights(),Y.isArrayCamera){let wt=Y.cameras;if(q.length>0)for(let Ot=0,Bt=wt.length;Ot<Bt;Ot++){let Vt=wt[Ot];Te(nt,q,T,Vt)}se&&Rt.render(T);for(let Ot=0,Bt=wt.length;Ot<Bt;Ot++){let Vt=wt[Ot];Oe(_,T,Vt,Vt.viewport)}}else q.length>0&&Te(nt,q,T,Y),se&&Rt.render(T),Oe(_,T,Y);O!==null&&U===0&&(Et.updateMultisampleRenderTarget(O),Et.updateRenderTargetMipmap(O)),T.isScene===!0&&T.onAfterRender(v,T,Y),Ut.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(m=S[S.length-1],$t===!0&&ut.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function bt(T,Y,et,nt){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)et=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ae.intersectsSprite(T)){nt&&yt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xt);let Ot=W.update(T),Bt=T.material;Bt.visible&&_.push(T,Ot,Bt,et,yt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ae.intersectsObject(T))){let Ot=W.update(T),Bt=T.material;if(nt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),yt.copy(T.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),yt.copy(Ot.boundingSphere.center)),yt.applyMatrix4(T.matrixWorld).applyMatrix4(xt)),Array.isArray(Bt)){let Vt=Ot.groups;for(let oe=0,le=Vt.length;oe<le;oe++){let jt=Vt[oe],fe=Bt[jt.materialIndex];fe&&fe.visible&&_.push(T,Ot,fe,et,yt.z,jt)}}else Bt.visible&&_.push(T,Ot,Bt,et,yt.z,null)}}let wt=T.children;for(let Ot=0,Bt=wt.length;Ot<Bt;Ot++)bt(wt[Ot],Y,et,nt)}function Oe(T,Y,et,nt){let q=T.opaque,wt=T.transmissive,Ot=T.transparent;m.setupLightsView(et),$t===!0&&ut.setGlobalState(v.clippingPlanes,et),nt&&at.viewport(F.copy(nt)),q.length>0&&xe(q,Y,et),wt.length>0&&xe(wt,Y,et),Ot.length>0&&xe(Ot,Y,et),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Te(T,Y,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[nt.id]===void 0&&(m.state.transmissionRenderTarget[nt.id]=new di(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?ur:si,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));let wt=m.state.transmissionRenderTarget[nt.id],Ot=nt.viewport||F;wt.setSize(Ot.z*v.transmissionResolutionScale,Ot.w*v.transmissionResolutionScale);let Bt=v.getRenderTarget(),Vt=v.getActiveCubeFace(),oe=v.getActiveMipmapLevel();v.setRenderTarget(wt),v.getClearColor(tt),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),se&&Rt.render(et);let le=v.toneMapping;v.toneMapping=Ii;let jt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),m.setupLightsView(nt),$t===!0&&ut.setGlobalState(v.clippingPlanes,nt),xe(T,et,nt),Et.updateMultisampleRenderTarget(wt),Et.updateRenderTargetMipmap(wt),pt.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let ie=0,Jt=Y.length;ie<Jt;ie++){let we=Y[ie],Se=we.object,Xt=we.geometry,ke=we.material,be=we.group;if(ke.side===ln&&Se.layers.test(nt.layers)){let je=ke.side;ke.side=Tn,ke.needsUpdate=!0,Ln(Se,et,nt,Xt,ke,be),ke.side=je,ke.needsUpdate=!0,fe=!0}}fe===!0&&(Et.updateMultisampleRenderTarget(wt),Et.updateRenderTargetMipmap(wt))}v.setRenderTarget(Bt,Vt,oe),v.setClearColor(tt,B),jt!==void 0&&(nt.viewport=jt),v.toneMapping=le}function xe(T,Y,et){let nt=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,wt=T.length;q<wt;q++){let Ot=T[q],Bt=Ot.object,Vt=Ot.geometry,oe=Ot.group,le=Ot.material;le.allowOverride===!0&&nt!==null&&(le=nt),Bt.layers.test(et.layers)&&Ln(Bt,Y,et,Vt,le,oe)}}function Ln(T,Y,et,nt,q,wt){T.onBeforeRender(v,Y,et,nt,q,wt),T.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(v,Y,et,nt,T,wt),q.transparent===!0&&q.side===ln&&q.forceSinglePass===!1?(q.side=Tn,q.needsUpdate=!0,v.renderBufferDirect(et,Y,nt,q,T,wt),q.side=wi,q.needsUpdate=!0,v.renderBufferDirect(et,Y,nt,q,T,wt),q.side=ln):v.renderBufferDirect(et,Y,nt,q,T,wt),T.onAfterRender(v,Y,et,nt,q,wt)}function Li(T,Y,et){Y.isScene!==!0&&(Y=kt);let nt=ot.get(T),q=m.state.lights,wt=m.state.shadowsArray,Ot=q.state.version,Bt=P.getParameters(T,q.state,wt,Y,et),Vt=P.getProgramCacheKey(Bt),oe=nt.programs;nt.environment=T.isMeshStandardMaterial?Y.environment:null,nt.fog=Y.fog,nt.envMap=(T.isMeshStandardMaterial?Dt:ee).get(T.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&T.envMap===null?Y.environmentRotation:T.envMapRotation,oe===void 0&&(T.addEventListener("dispose",_t),oe=new Map,nt.programs=oe);let le=oe.get(Vt);if(le!==void 0){if(nt.currentProgram===le&&nt.lightsStateVersion===Ot)return zn(T,Bt),le}else Bt.uniforms=P.getUniforms(T),T.onBeforeCompile(Bt,v),le=P.acquireProgram(Bt,Vt),oe.set(Vt,le),nt.uniforms=Bt.uniforms;let jt=nt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(jt.clippingPlanes=ut.uniform),zn(T,Bt),nt.needsLights=To(T),nt.lightsStateVersion=Ot,nt.needsLights&&(jt.ambientLightColor.value=q.state.ambient,jt.lightProbe.value=q.state.probe,jt.directionalLights.value=q.state.directional,jt.directionalLightShadows.value=q.state.directionalShadow,jt.spotLights.value=q.state.spot,jt.spotLightShadows.value=q.state.spotShadow,jt.rectAreaLights.value=q.state.rectArea,jt.ltc_1.value=q.state.rectAreaLTC1,jt.ltc_2.value=q.state.rectAreaLTC2,jt.pointLights.value=q.state.point,jt.pointLightShadows.value=q.state.pointShadow,jt.hemisphereLights.value=q.state.hemi,jt.directionalShadowMap.value=q.state.directionalShadowMap,jt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,jt.spotShadowMap.value=q.state.spotShadowMap,jt.spotLightMatrix.value=q.state.spotLightMatrix,jt.spotLightMap.value=q.state.spotLightMap,jt.pointShadowMap.value=q.state.pointShadowMap,jt.pointShadowMatrix.value=q.state.pointShadowMatrix),nt.currentProgram=le,nt.uniformsList=null,le}function ws(T){if(T.uniformsList===null){let Y=T.currentProgram.getUniforms();T.uniformsList=gr.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function zn(T,Y){let et=ot.get(T);et.outputColorSpace=Y.outputColorSpace,et.batching=Y.batching,et.batchingColor=Y.batchingColor,et.instancing=Y.instancing,et.instancingColor=Y.instancingColor,et.instancingMorph=Y.instancingMorph,et.skinning=Y.skinning,et.morphTargets=Y.morphTargets,et.morphNormals=Y.morphNormals,et.morphColors=Y.morphColors,et.morphTargetsCount=Y.morphTargetsCount,et.numClippingPlanes=Y.numClippingPlanes,et.numIntersection=Y.numClipIntersection,et.vertexAlphas=Y.vertexAlphas,et.vertexTangents=Y.vertexTangents,et.toneMapping=Y.toneMapping}function xr(T,Y,et,nt,q){Y.isScene!==!0&&(Y=kt),Et.resetTextureUnits();let wt=Y.fog,Ot=nt.isMeshStandardMaterial?Y.environment:null,Bt=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:cs,Vt=(nt.isMeshStandardMaterial?Dt:ee).get(nt.envMap||Ot),oe=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,le=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),jt=!!et.morphAttributes.position,fe=!!et.morphAttributes.normal,ie=!!et.morphAttributes.color,Jt=Ii;nt.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Jt=v.toneMapping);let we=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Se=we!==void 0?we.length:0,Xt=ot.get(nt),ke=m.state.lights;if($t===!0&&(it===!0||T!==b)){let sn=T===b&&nt.id===w;ut.setState(nt,T,sn)}let be=!1;nt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==ke.state.version||Xt.outputColorSpace!==Bt||q.isBatchedMesh&&Xt.batching===!1||!q.isBatchedMesh&&Xt.batching===!0||q.isBatchedMesh&&Xt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Xt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Xt.instancing===!1||!q.isInstancedMesh&&Xt.instancing===!0||q.isSkinnedMesh&&Xt.skinning===!1||!q.isSkinnedMesh&&Xt.skinning===!0||q.isInstancedMesh&&Xt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Xt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Xt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Xt.instancingMorph===!1&&q.morphTexture!==null||Xt.envMap!==Vt||nt.fog===!0&&Xt.fog!==wt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ut.numPlanes||Xt.numIntersection!==ut.numIntersection)||Xt.vertexAlphas!==oe||Xt.vertexTangents!==le||Xt.morphTargets!==jt||Xt.morphNormals!==fe||Xt.morphColors!==ie||Xt.toneMapping!==Jt||Xt.morphTargetsCount!==Se)&&(be=!0):(be=!0,Xt.__version=nt.version);let je=Xt.currentProgram;be===!0&&(je=Li(nt,Y,q));let xi=!1,cn=!1,Ni=!1,He=je.getUniforms(),vn=Xt.uniforms;if(at.useProgram(je.program)&&(xi=!0,cn=!0,Ni=!0),nt.id!==w&&(w=nt.id,cn=!0),xi||b!==T){at.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),He.setValue(N,"projectionMatrix",T.projectionMatrix),He.setValue(N,"viewMatrix",T.matrixWorldInverse);let hn=He.map.cameraPosition;hn!==void 0&&hn.setValue(N,Ft.setFromMatrixPosition(T.matrixWorld)),dt.logarithmicDepthBuffer&&He.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&He.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,cn=!0,Ni=!0)}if(q.isSkinnedMesh){He.setOptional(N,q,"bindMatrix"),He.setOptional(N,q,"bindMatrixInverse");let sn=q.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),He.setValue(N,"boneTexture",sn.boneTexture,Et))}q.isBatchedMesh&&(He.setOptional(N,q,"batchingTexture"),He.setValue(N,"batchingTexture",q._matricesTexture,Et),He.setOptional(N,q,"batchingIdTexture"),He.setValue(N,"batchingIdTexture",q._indirectTexture,Et),He.setOptional(N,q,"batchingColorTexture"),q._colorsTexture!==null&&He.setValue(N,"batchingColorTexture",q._colorsTexture,Et));let Mn=et.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&lt.update(q,et,je),(cn||Xt.receiveShadow!==q.receiveShadow)&&(Xt.receiveShadow=q.receiveShadow,He.setValue(N,"receiveShadow",q.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(vn.envMap.value=Vt,vn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&Y.environment!==null&&(vn.envMapIntensity.value=Y.environmentIntensity),cn&&(He.setValue(N,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&yr(vn,Ni),wt&&nt.fog===!0&&L.refreshFogUniforms(vn,wt),L.refreshMaterialUniforms(vn,nt,H,X,m.state.transmissionRenderTarget[T.id]),gr.upload(N,ws(Xt),vn,Et)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(gr.upload(N,ws(Xt),vn,Et),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&He.setValue(N,"center",q.center),He.setValue(N,"modelViewMatrix",q.modelViewMatrix),He.setValue(N,"normalMatrix",q.normalMatrix),He.setValue(N,"modelMatrix",q.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let sn=nt.uniformsGroups;for(let hn=0,As=sn.length;hn<As;hn++){let ai=sn[hn];de.update(ai,je),de.bind(ai,je)}}return je}function yr(T,Y){T.ambientLightColor.needsUpdate=Y,T.lightProbe.needsUpdate=Y,T.directionalLights.needsUpdate=Y,T.directionalLightShadows.needsUpdate=Y,T.pointLights.needsUpdate=Y,T.pointLightShadows.needsUpdate=Y,T.spotLights.needsUpdate=Y,T.spotLightShadows.needsUpdate=Y,T.rectAreaLights.needsUpdate=Y,T.hemisphereLights.needsUpdate=Y}function To(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(T,Y,et){let nt=ot.get(T);nt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),ot.get(T.texture).__webglTexture=Y,ot.get(T.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:et,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Y){let et=ot.get(T);et.__webglFramebuffer=Y,et.__useDefaultFramebuffer=Y===void 0};let Ts=N.createFramebuffer();this.setRenderTarget=function(T,Y=0,et=0){O=T,C=Y,U=et;let nt=!0,q=null,wt=!1,Ot=!1;if(T){let Vt=ot.get(T);if(Vt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(N.FRAMEBUFFER,null),nt=!1;else if(Vt.__webglFramebuffer===void 0)Et.setupRenderTarget(T);else if(Vt.__hasExternalTextures)Et.rebindTextures(T,ot.get(T.texture).__webglTexture,ot.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let jt=T.depthTexture;if(Vt.__boundDepthTexture!==jt){if(jt!==null&&ot.has(jt)&&(T.width!==jt.image.width||T.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Et.setupDepthRenderbuffer(T)}}let oe=T.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Ot=!0);let le=ot.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(le[Y])?q=le[Y][et]:q=le[Y],wt=!0):T.samples>0&&Et.useMultisampledRTT(T)===!1?q=ot.get(T).__webglMultisampledFramebuffer:Array.isArray(le)?q=le[et]:q=le,F.copy(T.viewport),K.copy(T.scissor),$=T.scissorTest}else F.copy(It).multiplyScalar(H).floor(),K.copy(Yt).multiplyScalar(H).floor(),$=te;if(et!==0&&(q=Ts),at.bindFramebuffer(N.FRAMEBUFFER,q)&&nt&&at.drawBuffers(T,q),at.viewport(F),at.scissor(K),at.setScissorTest($),wt){let Vt=ot.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Vt.__webglTexture,et)}else if(Ot){let Vt=Y;for(let oe=0;oe<T.textures.length;oe++){let le=ot.get(T.textures[oe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+oe,le.__webglTexture,et,Vt)}}else if(T!==null&&et!==0){let Vt=ot.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Vt.__webglTexture,et)}w=-1},this.readRenderTargetPixels=function(T,Y,et,nt,q,wt,Ot,Bt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ot!==void 0&&(Vt=Vt[Ot]),Vt){at.bindFramebuffer(N.FRAMEBUFFER,Vt);try{let oe=T.textures[Bt],le=oe.format,jt=oe.type;if(!dt.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=T.width-nt&&et>=0&&et<=T.height-q&&(T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Bt),N.readPixels(Y,et,nt,q,qt.convert(le),qt.convert(jt),wt))}finally{let oe=O!==null?ot.get(O).__webglFramebuffer:null;at.bindFramebuffer(N.FRAMEBUFFER,oe)}}},this.readRenderTargetPixelsAsync=async function(T,Y,et,nt,q,wt,Ot,Bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ot!==void 0&&(Vt=Vt[Ot]),Vt)if(Y>=0&&Y<=T.width-nt&&et>=0&&et<=T.height-q){at.bindFramebuffer(N.FRAMEBUFFER,Vt);let oe=T.textures[Bt],le=oe.format,jt=oe.type;if(!dt.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,fe),N.bufferData(N.PIXEL_PACK_BUFFER,wt.byteLength,N.STREAM_READ),T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Bt),N.readPixels(Y,et,nt,q,qt.convert(le),qt.convert(jt),0);let ie=O!==null?ot.get(O).__webglFramebuffer:null;at.bindFramebuffer(N.FRAMEBUFFER,ie);let Jt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gd(N,Jt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,wt),N.deleteBuffer(fe),N.deleteSync(Jt),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Y=null,et=0){let nt=Math.pow(2,-et),q=Math.floor(T.image.width*nt),wt=Math.floor(T.image.height*nt),Ot=Y!==null?Y.x:0,Bt=Y!==null?Y.y:0;Et.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,et,0,0,Ot,Bt,q,wt),at.unbindTexture()};let Wn=N.createFramebuffer(),Xn=N.createFramebuffer();this.copyTextureToTexture=function(T,Y,et=null,nt=null,q=0,wt=null){wt===null&&(q!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=q,q=0):wt=0);let Ot,Bt,Vt,oe,le,jt,fe,ie,Jt,we=T.isCompressedTexture?T.mipmaps[wt]:T.image;if(et!==null)Ot=et.max.x-et.min.x,Bt=et.max.y-et.min.y,Vt=et.isBox3?et.max.z-et.min.z:1,oe=et.min.x,le=et.min.y,jt=et.isBox3?et.min.z:0;else{let Mn=Math.pow(2,-q);Ot=Math.floor(we.width*Mn),Bt=Math.floor(we.height*Mn),T.isDataArrayTexture?Vt=we.depth:T.isData3DTexture?Vt=Math.floor(we.depth*Mn):Vt=1,oe=0,le=0,jt=0}nt!==null?(fe=nt.x,ie=nt.y,Jt=nt.z):(fe=0,ie=0,Jt=0);let Se=qt.convert(Y.format),Xt=qt.convert(Y.type),ke;Y.isData3DTexture?(Et.setTexture3D(Y,0),ke=N.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Et.setTexture2DArray(Y,0),ke=N.TEXTURE_2D_ARRAY):(Et.setTexture2D(Y,0),ke=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment);let be=N.getParameter(N.UNPACK_ROW_LENGTH),je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),xi=N.getParameter(N.UNPACK_SKIP_PIXELS),cn=N.getParameter(N.UNPACK_SKIP_ROWS),Ni=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,we.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,oe),N.pixelStorei(N.UNPACK_SKIP_ROWS,le),N.pixelStorei(N.UNPACK_SKIP_IMAGES,jt);let He=T.isDataArrayTexture||T.isData3DTexture,vn=Y.isDataArrayTexture||Y.isData3DTexture;if(T.isDepthTexture){let Mn=ot.get(T),sn=ot.get(Y),hn=ot.get(Mn.__renderTarget),As=ot.get(sn.__renderTarget);at.bindFramebuffer(N.READ_FRAMEBUFFER,hn.__webglFramebuffer),at.bindFramebuffer(N.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let ai=0;ai<Vt;ai++)He&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ot.get(T).__webglTexture,q,jt+ai),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ot.get(Y).__webglTexture,wt,Jt+ai)),N.blitFramebuffer(oe,le,Ot,Bt,fe,ie,Ot,Bt,N.DEPTH_BUFFER_BIT,N.NEAREST);at.bindFramebuffer(N.READ_FRAMEBUFFER,null),at.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||ot.has(T)){let Mn=ot.get(T),sn=ot.get(Y);at.bindFramebuffer(N.READ_FRAMEBUFFER,Wn),at.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xn);for(let hn=0;hn<Vt;hn++)He?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mn.__webglTexture,q,jt+hn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Mn.__webglTexture,q),vn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,sn.__webglTexture,wt,Jt+hn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,sn.__webglTexture,wt),q!==0?N.blitFramebuffer(oe,le,Ot,Bt,fe,ie,Ot,Bt,N.COLOR_BUFFER_BIT,N.NEAREST):vn?N.copyTexSubImage3D(ke,wt,fe,ie,Jt+hn,oe,le,Ot,Bt):N.copyTexSubImage2D(ke,wt,fe,ie,oe,le,Ot,Bt);at.bindFramebuffer(N.READ_FRAMEBUFFER,null),at.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else vn?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(ke,wt,fe,ie,Jt,Ot,Bt,Vt,Se,Xt,we.data):Y.isCompressedArrayTexture?N.compressedTexSubImage3D(ke,wt,fe,ie,Jt,Ot,Bt,Vt,Se,we.data):N.texSubImage3D(ke,wt,fe,ie,Jt,Ot,Bt,Vt,Se,Xt,we):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,wt,fe,ie,Ot,Bt,Se,Xt,we.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,wt,fe,ie,we.width,we.height,Se,we.data):N.texSubImage2D(N.TEXTURE_2D,wt,fe,ie,Ot,Bt,Se,Xt,we);N.pixelStorei(N.UNPACK_ROW_LENGTH,be),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xi),N.pixelStorei(N.UNPACK_SKIP_ROWS,cn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ni),wt===0&&Y.generateMipmaps&&N.generateMipmap(ke),at.unbindTexture()},this.initRenderTarget=function(T){ot.get(T).__webglFramebuffer===void 0&&Et.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Et.setTextureCube(T,0):T.isData3DTexture?Et.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Et.setTexture2DArray(T,0):Et.setTexture2D(T,0),at.unbindTexture()},this.resetState=function(){C=0,U=0,O=null,at.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}};var Qd={type:"change"},Eh={type:"start"},ef={type:"end"},zl=new Xi,tf=new $e,xx=Math.cos(70*oi.DEG2RAD),nn=new A,In=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mh=1e-6,Hl=class extends ms{constructor(t,e=null){super(t,e),this.state=Fe.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wn.ROTATE,MIDDLE:wn.DOLLY,RIGHT:wn.PAN},this.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Ne,this._lastTargetPosition=new A,this._quat=new Ne().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cr,this._sphericalDelta=new cr,this._scale=1,this._panOffset=new A,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new A,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vx.bind(this),this._onPointerDown=yx.bind(this),this._onPointerUp=Mx.bind(this),this._onContextMenu=Rx.bind(this),this._onMouseWheel=bx.bind(this),this._onKeyDown=wx.bind(this),this._onTouchStart=Tx.bind(this),this._onTouchMove=Ax.bind(this),this._onMouseDown=Ex.bind(this),this._onMouseMove=Sx.bind(this),this._interceptControlDown=Cx.bind(this),this._interceptControlUp=Px.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qd),this.update(),this.state=Fe.NONE}update(t=null){let e=this.object.position;nn.copy(e).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=In:n>Math.PI&&(n-=In),s<-Math.PI?s+=In:s>Math.PI&&(s-=In),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),e.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=nn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zl.origin.copy(this.object.position),zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zl.direction))<xx?this.object.lookAt(this.target):(tf.setFromNormalAndCoplanarPoint(this.object.up,this.target),zl.intersectPlane(tf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Mh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mh||this._lastTargetPosition.distanceToSquared(this.target)>Mh?(this.dispatchEvent(Qd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?In/60*this.autoRotateSpeed*t:In/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){nn.setFromMatrixColumn(e,0),nn.multiplyScalar(-t),this._panOffset.add(nn)}_panUp(t,e){this.screenSpacePanning===!0?nn.setFromMatrixColumn(e,1):(nn.setFromMatrixColumn(e,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(t),this._panOffset.add(nn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;nn.copy(s).sub(this.target);let r=nn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(In*this._rotateDelta.x/e.clientHeight),this._rotateUp(In*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(In*this._rotateDelta.x/e.clientHeight),this._rotateUp(In*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function yx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function vx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Mx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ef),this.state=Fe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ex(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case wn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Fe.DOLLY;break;case wn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Fe.ROTATE}break;case wn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Eh)}function Sx(i){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function bx(i){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(i.preventDefault(),this.dispatchEvent(Eh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ef))}function wx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Tx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Fe.TOUCH_ROTATE;break;case ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Fe.TOUCH_DOLLY_PAN;break;case ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Eh)}function Ax(i){switch(this._trackPointer(i),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Fe.NONE}}function Rx(i){this.enabled!==!1&&i.preventDefault()}function Cx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Px(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ss=new Vn,yn=new A,ji=new A,Xe=new Ne,nf={X:new A(1,0,0),Y:new A(0,1,0),Z:new A(0,0,1)},Sh={type:"change"},sf={type:"mouseDown",mode:null},rf={type:"mouseUp",mode:null},of={type:"objectChange"},Xl=class extends ms{constructor(t,e=null){super(void 0,e);let n=new wh(this);this._root=n;let s=new Th;this._gizmo=s,n.add(s);let r=new Ah;this._plane=r,n.add(r);let o=this;function a(S,v){let D=v;Object.defineProperty(o,S,{get:function(){return D!==void 0?D:v},set:function(C){D!==C&&(D=C,r[S]=C,s[S]=C,o.dispatchEvent({type:S+"-changed",value:C}),o.dispatchEvent(Sh))}}),o[S]=v,r[S]=v,s[S]=v}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new A,c=new A,h=new Ne,f=new Ne,d=new A,p=new Ne,g=new A,x=new A,_=new A,m=0,R=new A;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",f),a("cameraPosition",d),a("cameraQuaternion",p),a("pointStart",g),a("pointEnd",x),a("rotationAxis",_),a("rotationAngle",m),a("eye",R),this._offset=new A,this._startNorm=new A,this._endNorm=new A,this._cameraScale=new A,this._parentPosition=new A,this._parentQuaternion=new Ne,this._parentQuaternionInv=new Ne,this._parentScale=new A,this._worldScaleStart=new A,this._worldQuaternionInv=new Ne,this._worldScale=new A,this._positionStart=new A,this._quaternionStart=new Ne,this._scaleStart=new A,this._getPointer=Ix.bind(this),this._onPointerDown=Lx.bind(this),this._onPointerHover=Dx.bind(this),this._onPointerMove=Nx.bind(this),this._onPointerUp=Ux.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Ss.setFromCamera(t,this.camera);let e=bh(this._gizmo.picker[this.mode],Ss);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Ss.setFromCamera(t,this.camera);let e=bh(this._plane,Ss,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,sf.mode=this.mode,this.dispatchEvent(sf)}}pointerMove(t){let e=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Ss.setFromCamera(t,this.camera);let o=bh(this._plane,Ss,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Xe.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(yn.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(yn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ji.set(a,a,a)}else yn.copy(this.pointStart),ji.copy(this.pointEnd),yn.applyQuaternion(this._worldQuaternionInv),ji.applyQuaternion(this._worldQuaternionInv),ji.divide(yn),e.search("X")===-1&&(ji.x=1),e.search("Y")===-1&&(ji.y=1),e.search("Z")===-1&&(ji.z=1);s.scale.copy(this._scaleStart).multiply(ji),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(yn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(yn.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(nf[e]),yn.copy(nf[e]),r==="local"&&yn.applyQuaternion(this.worldQuaternion),yn.cross(this.eye),yn.length()===0?l=!0:this.rotationAngle=this._offset.dot(yn.normalize())*a),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Xe.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Xe.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Sh),this.dispatchEvent(of)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(rf.mode=this.mode,this.dispatchEvent(rf)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Sh),this.dispatchEvent(of),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ss}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function Ix(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function Dx(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Lx(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Nx(i){this.enabled&&this.pointerMove(this._getPointer(i))}function Ux(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function bh(i,t,e){let n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}var kl=new fn,ze=new A(0,1,0),af=new A(0,0,0),lf=new Re,Vl=new Ne,Wl=new Ne,_i=new A,cf=new Re,So=new A(1,0,0),bs=new A(0,1,0),bo=new A(0,0,1),Gl=new A,Mo=new A,Eo=new A,wh=class extends Ue{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){let e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}},Th=class extends Ue{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let t=new an({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new Cn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;let s=e.clone();s.opacity=.5;let r=t.clone();r.color.setHex(16711680);let o=t.clone();o.color.setHex(65280);let a=t.clone();a.color.setHex(255);let l=t.clone();l.color.setHex(16711680),l.opacity=.5;let c=t.clone();c.color.setHex(65280),c.opacity=.5;let h=t.clone();h.color.setHex(255),h.opacity=.5;let f=t.clone();f.opacity=.25;let d=t.clone();d.color.setHex(16776960),d.opacity=.25;let p=t.clone();p.color.setHex(16776960);let g=t.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:p,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:d};let x=new Ke(0,.04,.1,12);x.translate(0,.05,0);let _=new Ce(.08,.08,.08);_.translate(0,.04,0);let m=new Ee;m.setAttribute("position",new _e([0,0,0,1,0,0],3));let R=new Ke(.0075,.0075,.5,3);R.translate(0,.25,0);function S(B,G){let X=new Ci(B,.0075,3,64,G*Math.PI*2);return X.rotateY(Math.PI/2),X.rotateX(Math.PI/2),X}function v(){let B=new Ee;return B.setAttribute("position",new _e([0,0,0,1,1,1],3)),B}let D={X:[[new Tt(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new Tt(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new Tt(R,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Tt(x,o),[0,.5,0]],[new Tt(x,o),[0,-.5,0],[Math.PI,0,0]],[new Tt(R,o)]],Z:[[new Tt(x,a),[0,0,.5],[Math.PI/2,0,0]],[new Tt(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Tt(R,a),null,[Math.PI/2,0,0]]],XYZ:[[new Tt(new pi(.1,0),f),[0,0,0]]],XY:[[new Tt(new Ce(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new Tt(new Ce(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Tt(new Ce(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new Tt(new Ke(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Tt(new Ke(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Tt(new Ke(.2,0,.6,4),n),[0,.3,0]],[new Tt(new Ke(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Tt(new Ke(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Tt(new Ke(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Tt(new pi(.2,0),n)]],XY:[[new Tt(new Ce(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Tt(new Ce(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Tt(new Ce(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},U={START:[[new Tt(new pi(.01,2),s),null,null,null,"helper"]],END:[[new Tt(new pi(.01,2),s),null,null,null,"helper"]],DELTA:[[new Ze(v(),s),null,null,null,"helper"]],X:[[new Ze(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ze(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ze(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},O={XYZE:[[new Tt(S(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new Tt(S(.5,.5),r)]],Y:[[new Tt(S(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Tt(S(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Tt(S(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new Ze(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new Tt(new ni(.25,10,8),n)]],X:[[new Tt(new Ci(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Tt(new Ci(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Tt(new Ci(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Tt(new Ci(.75,.1,2,24),n)]]},F={X:[[new Tt(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new Tt(R,r),[0,0,0],[0,0,-Math.PI/2]],[new Tt(_,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Tt(_,o),[0,.5,0]],[new Tt(R,o)],[new Tt(_,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Tt(_,a),[0,0,.5],[Math.PI/2,0,0]],[new Tt(R,a),[0,0,0],[Math.PI/2,0,0]],[new Tt(_,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Tt(new Ce(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new Tt(new Ce(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Tt(new Ce(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Tt(new Ce(.1,.1,.1),f)]]},K={X:[[new Tt(new Ke(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Tt(new Ke(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Tt(new Ke(.2,0,.6,4),n),[0,.3,0]],[new Tt(new Ke(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Tt(new Ke(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Tt(new Ke(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Tt(new Ce(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Tt(new Ce(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Tt(new Ce(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Tt(new Ce(.2,.2,.2),n),[0,0,0]]]},$={X:[[new Ze(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ze(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ze(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function tt(B){let G=new Ue;for(let X in B)for(let H=B[X].length;H--;){let ft=B[X][H][0].clone(),mt=B[X][H][1],It=B[X][H][2],Yt=B[X][H][3],te=B[X][H][4];ft.name=X,ft.tag=te,mt&&ft.position.set(mt[0],mt[1],mt[2]),It&&ft.rotation.set(It[0],It[1],It[2]),Yt&&ft.scale.set(Yt[0],Yt[1],Yt[2]),ft.updateMatrix();let ae=ft.geometry.clone();ae.applyMatrix4(ft.matrix),ft.geometry=ae,ft.renderOrder=1/0,ft.position.set(0,0,0),ft.rotation.set(0,0,0),ft.scale.set(1,1,1),G.add(ft)}return G}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=tt(D)),this.add(this.gizmo.rotate=tt(O)),this.add(this.gizmo.scale=tt(F)),this.add(this.picker.translate=tt(C)),this.add(this.picker.rotate=tt(b)),this.add(this.picker.scale=tt(K)),this.add(this.helper.translate=tt(U)),this.add(this.helper.rotate=tt(w)),this.add(this.helper.scale=tt($)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Wl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Xe.setFromEuler(kl.set(0,0,0)),o.quaternion.copy(n).multiply(Xe),Math.abs(ze.copy(So).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Xe.setFromEuler(kl.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Xe),Math.abs(ze.copy(bs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Xe.setFromEuler(kl.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Xe),Math.abs(ze.copy(bo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Xe.setFromEuler(kl.set(0,Math.PI/2,0)),ze.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(lf.lookAt(af,ze,bs)),o.quaternion.multiply(Xe),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),yn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),yn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(yn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(ze.copy(So).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(ze.copy(bs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(ze.copy(bo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(ze.copy(bo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(ze.copy(So).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(ze.copy(bs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Vl.copy(n),ze.copy(this.eye).applyQuaternion(Xe.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(lf.lookAt(this.eye,af,bs)),o.name==="X"&&(Xe.setFromAxisAngle(So,Math.atan2(-ze.y,ze.z)),Xe.multiplyQuaternions(Vl,Xe),o.quaternion.copy(Xe)),o.name==="Y"&&(Xe.setFromAxisAngle(bs,Math.atan2(ze.x,ze.z)),Xe.multiplyQuaternions(Vl,Xe),o.quaternion.copy(Xe)),o.name==="Z"&&(Xe.setFromAxisAngle(bo,Math.atan2(ze.y,ze.x)),Xe.multiplyQuaternions(Vl,Xe),o.quaternion.copy(Xe))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}},Ah=class extends Tt{constructor(){super(new Pn(1e5,1e5,2,2),new an({visible:!1,wireframe:!0,side:ln,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Gl.copy(So).applyQuaternion(e==="local"?this.worldQuaternion:Wl),Mo.copy(bs).applyQuaternion(e==="local"?this.worldQuaternion:Wl),Eo.copy(bo).applyQuaternion(e==="local"?this.worldQuaternion:Wl),ze.copy(Mo),this.mode){case"translate":case"scale":switch(this.axis){case"X":ze.copy(this.eye).cross(Gl),_i.copy(Gl).cross(ze);break;case"Y":ze.copy(this.eye).cross(Mo),_i.copy(Mo).cross(ze);break;case"Z":ze.copy(this.eye).cross(Eo),_i.copy(Eo).cross(ze);break;case"XY":_i.copy(Eo);break;case"YZ":_i.copy(Gl);break;case"XZ":ze.copy(Eo),_i.copy(Mo);break;case"XYZ":case"E":_i.set(0,0,0);break}break;case"rotate":default:_i.set(0,0,0)}_i.length()===0?this.quaternion.copy(this.cameraQuaternion):(cf.lookAt(yn.set(0,0,0),_i,ze),this.quaternion.setFromRotationMatrix(cf)),super.updateMatrixWorld(t)}};function hf({scene:i,camera:t,canvas:e}){let n=new _n;n.userData.primitiveBounds=!0,n.visible=!1,i.add(n);let s=new Ce(1,1,1),r=new $r(s);s.dispose();let o=new Cn({color:7977215,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),a=new Ai(r,o);a.renderOrder=30,n.add(a);let l=new Pn(1,1),c=new an({color:14150399,depthTest:!1,depthWrite:!1,side:ln}),h=[];for(let B of["x","y","z"])for(let G of[-1,1]){let X=new Tt(l,c);X.userData.boundsHandle={axis:B,sign:G},X.renderOrder=32,n.add(X),h.push(X)}let f=new Ee;f.setAttribute("position",new Qe(new Float32Array(36),3));let d=new Ai(f,o);d.renderOrder=30,d.frustumCulled=!1,n.add(d);let p=new Ee;p.setAttribute("position",new Qe(new Float32Array(54),3));let g=new Ai(p,o);g.renderOrder=30,n.add(g),g.frustumCulled=!1;let x=["W","D","H"].map(B=>{let G=document.createElement("div");return G.dataset.primitiveDimension=B,G.style.cssText="position:absolute;pointer-events:none;display:none;z-index:24;padding:4px 7px;border:1px solid #79b8ff66;border-radius:4px;background:#172b37ed;color:#d7eaff;font:13px system-ui;white-space:nowrap;",e.parentElement?.append(G),G}),_=null,m=null,R=new Vn,S=new A,v=new A,D=()=>e.getBoundingClientRect();function C(B,G){return v.copy(B).applyMatrix4(t.matrixWorldInverse),S.copy(B).project(t),{x:G.left+(S.x+1)*G.width/2,y:G.top+(1-S.y)*G.height/2,depth:v.z,visible:v.z<0&&S.z>=-1&&S.z<=1}}function U(B,G){let X=B.clone().applyMatrix4(t.matrixWorldInverse);return Math.max(1e-6,2*Math.abs(X.z)*Math.tan(t.fov*Math.PI/360)/Math.max(1,G.height))}function O(B){let G=D();R.setFromCamera(new gt((B.clientX-G.left)/Math.max(1,G.width)*2-1,1-(B.clientY-G.top)/Math.max(1,G.height)*2),t)}function w(B,G,{handles:X=!0}={}){_=B,n.visible=!!(G&&B);for(let ot of x)ot.style.display="none";if(!n.visible)return;t.updateMatrixWorld(!0),B.updateWorldMatrix(!0,!1);let H=D(),ft=B.getWorldPosition(new A),mt=B.getWorldQuaternion(new Ne),It=U(ft,H);a.position.copy(ft),a.quaternion.copy(mt),a.scale.copy(B.scale);let Yt=C(ft,H),te=[],ae=f.attributes.position,$t=0,it=!1;for(let ot of h){let{axis:Et,sign:ee}=ot.userData.boundsHandle,Dt=new A,I=new A;Dt[Et]=ee*.5,I[Et]=1,I.applyQuaternion(mt),B.localToWorld(Dt),ot.userData.facePosition=Dt.clone();let y=C(Dt,H),W=t.position.clone().sub(Dt).normalize();if(ot.visible=X&&y.visible&&Math.abs(W.dot(I))<.98,ot.visible){let L=y.x-Yt.x,z=y.y-Yt.y,rt=Math.hypot(L,z),ut=rt>1e-6?L/rt:1,Lt=rt>1e-6?z/rt:0,Rt=Math.max(24,rt),lt=Yt.x+ut*Rt,St=Yt.y+Lt*Rt;for(;te.some(Gt=>Math.hypot(Gt.x-lt,Gt.y-St)<20)&&Rt<Math.max(24,rt)+80;)Rt+=12,lt=Yt.x+ut*Rt,St=Yt.y+Lt*Rt;if(te.push({x:lt,y:St}),Math.hypot(lt-y.x,St-y.y)>.5){it=!0;let Gt=Dt.clone().project(t);Dt.set((lt-H.left)/H.width*2-1,1-(St-H.top)/H.height*2,Gt.z).unproject(t)}}ot.position.copy(Dt),ot.quaternion.copy(t.quaternion),ot.scale.setScalar(U(Dt,H)*(ot===m?11:9)),ot.userData.screen=C(Dt,H);let P=ot.visible?ot.userData.facePosition:Dt;ae.setXYZ($t++,P.x,P.y,P.z),ae.setXYZ($t++,Dt.x,Dt.y,Dt.z)}ae.needsUpdate=!0;let xt=B.worldToLocal(t.position.clone()),Ft=xt.x>=0?1:-1,yt=xt.z>=0?1:-1,kt=It*(it?55:27),se=Ft*(.5+kt/B.scale.x),re=yt*(.5+kt/B.scale.z),N=-.5-kt/B.scale.y,ht=[{a:[-.5,N,re],b:[.5,N,re],tick:[0,1,0],size:B.scale.x},{a:[se,N,-.5],b:[se,N,.5],tick:[0,1,0],size:B.scale.z},{a:[se,-.5,re],b:[se,.5,re],tick:[1,0,0],size:B.scale.y}],pt=p.attributes.position,dt=0,at=ot=>pt.setXYZ(dt++,ot.x,ot.y,ot.z),vt=[];ht.forEach((ot,Et)=>{let ee=B.localToWorld(new A(...ot.a)),Dt=B.localToWorld(new A(...ot.b)),I=new A(...ot.tick).applyQuaternion(mt).multiplyScalar(It*4);at(ee),at(Dt);for(let rt of[ee,Dt])at(rt.clone().sub(I)),at(rt.clone().add(I));let y=C(ee.clone().add(Dt).multiplyScalar(.5),H),W=x[Et];if(W.textContent=x[Et].dataset.primitiveDimension+" "+ot.size.toFixed(2)+" m",!y.visible||y.x<H.left||y.y<H.top||y.x>H.left+H.width||y.y>H.top+H.height)return;let P=Math.max(5,Math.min(H.width-88,y.x-H.left-40)),L=Math.max(5,Math.min(H.height-31,y.y-H.top-12)),z=L;for(let rt of[0,30,-30,60,-60,90,-90]){let ut=Math.max(5,Math.min(H.height-31,L+rt));if(!vt.some(Lt=>Math.abs(Lt.left-P)<87&&Math.abs(Lt.top-ut)<28)){z=ut;break}}vt.push({left:P,top:z}),Object.assign(W.style,{display:"block",left:P+"px",top:z+"px"})}),pt.needsUpdate=!0,n.updateMatrixWorld(!0)}function b(B){if(!n.visible||!_)return null;w(_,!0);let G=B.pointerType==="touch"?18:10;return h.filter(H=>H.visible).map(H=>({handle:H,p:H.userData.screen,d:Math.hypot(B.clientX-H.userData.screen.x,B.clientY-H.userData.screen.y)})).filter(H=>H.d<=G).sort((H,ft)=>Math.abs(H.d-ft.d)<2?ft.p.depth-H.p.depth:H.d-ft.d)[0]?.handle||null}function F(B){m=B}function K(B,G,X){let{axis:H,sign:ft}=G.userData.boundsHandle,mt=new A;mt[H]=1,mt.applyQuaternion(X.getWorldQuaternion(new Ne)).normalize();let It=G.userData.facePosition.clone(),Yt=t.position.clone().sub(It).normalize();if(Math.abs(Yt.dot(mt))>=.98)return null;let te=Yt.addScaledVector(mt,-Yt.dot(mt)).normalize(),ae=new $e().setFromNormalAndCoplanarPoint(te,It);O(B);let $t=R.ray.intersectPlane(ae,new A);return $t?{axis:H,sign:ft,direction:mt,plane:ae,start:$t,position:X.position.clone(),scale:X.scale.clone()}:null}function $(B,G,X,H){O(G);let ft=R.ray.intersectPlane(B.plane,new A);if(!ft)return;let mt=B.scale[B.axis]+ft.sub(B.start).dot(B.direction)*B.sign;H&&(mt=Math.round(mt/H)*H),mt=Math.max(B.original.wall?.25:.02,Math.min(B.original.wall&&B.axis==="z"?1:150,mt)),X.scale.copy(B.scale),X.scale[B.axis]=mt,X.position.copy(B.position).addScaledVector(B.direction,(mt-B.scale[B.axis])*B.sign/2),X.updateMatrixWorld(!0),w(X,!0)}function tt(){n.removeFromParent(),r.dispose(),l.dispose(),c.dispose(),f.dispose(),p.dispose(),o.dispose();for(let B of x)B.remove()}return{update:w,hit:b,hover:F,begin:K,resize:$,dispose:tt}}function uf(i,t){let e=new Ue;e.userData.primitiveGroup=!0,i.add(e);let n=[],s=0;function r(d){n=d.slice();let p=new dn;s=0;for(let g of n)g.updateMatrix(),p.union(new dn(new A(-.5,-.5,-.5),new A(.5,.5,.5)).applyMatrix4(g.matrix)),s+=t.get(g.userData.level)?.position.y||0;s/=Math.max(1,n.length),n.length&&(p.getCenter(e.position),e.position.y+=s,p.getSize(e.scale),e.scale.max(new A(.02,.02,.02)),e.quaternion.identity(),e.updateMatrixWorld(!0))}function o(){let d=n.reduce((p,g)=>p+(t.get(g.userData.level)?.position.y||0),0)/Math.max(1,n.length);e.position.y+=d-s,s=d,e.updateMatrixWorld(!0)}function a(){return{group:!0,position:e.position.clone(),scale:e.scale.clone(),quaternion:e.quaternion.clone(),pivot:e.position.clone().add(new A(0,-s,0)),members:n.map(d=>({root:d,original:JSON.parse(JSON.stringify(d.userData.record)),position:d.position.clone(),scale:d.scale.clone(),quaternion:d.quaternion.clone()}))}}let l=(d,p)=>p?l(p,d%p):d;function c(d,p,g){let x=0,_=1/0,m=0;for(let v of d.members)for(let D of["x","y","z"])x=Math.max(x,(v.original.wall?.25:.02)/v.scale[D]),_=Math.min(_,(v.original.wall&&D==="z"?1:150)/v.scale[D]),v.original.wall&&(m=l(m,Math.round(v.scale[D]*4)));let R=m?1/m:g/Math.max(d.scale.x,d.scale.y,d.scale.z),S=Number.isFinite(p)?p:1;if(R){let v=m?0:1;S=v+Math.round((S-v)/R)*R,x=v+Math.ceil((x-v-1e-9)/R)*R,_=v+Math.floor((_-v+1e-9)/R)*R}return Math.max(x,Math.min(_,S))}function h(d,p,g){if(p==="translate"){let x=e.position.clone().sub(d.position);if(g)for(let _ of["x","y","z"])x[_]=Math.round(x[_]/g)*g;e.position.copy(d.position).add(x);for(let _ of d.members)_.root.position.copy(_.position).add(x),_.root.quaternion.copy(_.quaternion),_.root.scale.copy(_.scale)}else if(p==="rotate"){let x=e.quaternion.clone().multiply(d.quaternion.clone().invert());for(let _ of d.members)_.root.position.copy(_.position).sub(d.pivot).applyQuaternion(x).add(d.pivot),_.root.quaternion.copy(x).multiply(_.quaternion),_.root.scale.copy(_.scale)}else if(p==="scale"){let x=c(d,e.scale.x/d.scale.x,g);e.scale.copy(d.scale).multiplyScalar(x);for(let _ of d.members)_.root.position.copy(_.position).sub(d.pivot).multiplyScalar(x).add(d.pivot),_.root.scale.copy(_.scale).multiplyScalar(x),_.root.quaternion.copy(_.quaternion)}for(let x of d.members)x.root.updateMatrixWorld(!0);e.updateMatrixWorld(!0)}function f(d){for(let p of d.members)p.root.position.copy(p.position),p.root.scale.copy(p.scale),p.root.quaternion.copy(p.quaternion),p.root.updateMatrixWorld(!0);e.position.copy(d.position),e.scale.copy(d.scale),e.quaternion.copy(d.quaternion),e.updateMatrixWorld(!0)}return{target:e,select:r,syncDisplay:o,begin:a,preview:h,restore:f,dispose(){e.removeFromParent()}}}function df({scene:i,camera:t,renderer:e,controls:n,groups:s,data:r,prismGeometry:o,surfaceHit:a,enabled:l,canNavigate:c=()=>!0,onSelect:h,onEdit:f,onEditMany:d}){let p=e.domElement,g=[],x=new Map,_=new Vn,m=new gt,R={cube:new Ce(1,1,1),cylinder:new Ke(.5,.5,1,32),sphere:new ni(.5,32,16),hemisphere:new ni(.5,32,16,0,Math.PI*2,0,Math.PI/2)};R.hemisphere.scale(1,2,1),R.hemisphere.translate(0,-.5,0);let S=new Jr(.5,32);S.rotateX(Math.PI/2),S.translate(0,-.5,0);let v=[],D=[];for(let P of r.levels)for(let L of P.primitives||[]){let z=new _n,rt=new fs({color:L.color||"#d6a46b",roughness:.8,side:ln});v.push(rt);let ut=JSON.parse(JSON.stringify(L)),Lt=P.rampWallCuts?.[L.id];if(z.userData={primitive:L.id,level:P.id,record:ut,floorZ:P.z},It(z,L),Array.isArray(Lt)&&o){let Rt=z.matrixWorld.clone().invert();for(let lt of Lt){let St=o(lt);St.translate(0,lt.z,0),St.applyMatrix4(Rt),D.push(St),z.add(new Tt(St,rt))}}else z.add(new Tt(R[L.primitive],rt)),L.primitive==="hemisphere"&&z.add(new Tt(S,rt));s.get(P.id).add(z),g.push(z),x.set(P.id+"\0"+L.id,z)}let C=new Xl(t,p);C.disconnect(),p.style.touchAction="none",C.setSize(.8),C.setSpace("world");let U=C.getHelper();i.add(U);let O=hf({scene:i,camera:t,canvas:p}),w=uf(i,s),b=["gizmo","picker","helper"].map(P=>({parent:C._gizmo[P].scale,children:C._gizmo[P].scale.children.slice()})),F=!1;function K(P){if(F!==P){F=P;for(let L of b){for(let z of L.children)L.parent.remove(z);for(let z of L.children)(!P||z.name==="XYZ")&&L.parent.add(z)}}}let $=[],tt=new Set,B=()=>$.length>1,G=null,X=null,H=null,ft=!1,mt=null;function It(P,L){P.position.set(L.x+L.w/2,P.userData.floorZ+L.z+L.height/2,L.y+L.h/2),P.scale.set(L.w,L.height,L.h),P.rotation.set(L.tiltX*Math.PI/180,-L.rotation*Math.PI/180,L.tiltY*Math.PI/180,"XYZ"),P.updateMatrixWorld(!0)}let Yt=P=>s.get(P.userData.level)?.visible&&window.KERN_LAYERS?.shown?.("primitives",P.userData.primitive,P.userData.level)!==!1,te=P=>Yt(P)&&window.KERN_LAYERS?.available?.("primitives",P.userData.primitive,P.userData.level)!==!1;function ae(){if(!G||!l()||!$.length||$.some(L=>!te(L)))return!1;let P=window.KERN_LAYERS?.references?.();return!P||P.length===$.length&&P.every(L=>L.kind==="primitives"&&tt.has(L.floor+"\0"+L.id))}function $t(){B()&&!X&&w.syncDisplay(),O.update(G,ae(),{handles:!B()})}function it(){if(ft)return;for(let L of g)L.visible=window.KERN_LAYERS?.shown?.("primitives",L.userData.primitive,L.userData.level)!==!1;let P=ae();C.enabled=P,U.visible=P,!P&&X&&Dt(),$t()}function xt(P){Dt();let L=(P||[]).filter(z=>z.kind==="primitives").map(z=>x.get(z.floor+"\0"+z.id)).filter(Boolean);$=L.length===P.length?L:[],tt=new Set($.map(z=>z.userData.level+"\0"+z.userData.primitive)),B()&&w.select($),G=B()?w.target:$[0]||null,G?C.attach(G):C.detach(),C.setMode(window.KERN_PRIMITIVE_UI?.mode()||"translate"),C.setSpace(C.mode==="scale"?"local":"world"),yt(),it()}function Ft(){let P=Number(window.snapSize?.());return Number.isFinite(P)&&P>0?P:null}function yt(P={}){let L=$.some(z=>z.userData.record.wall===!0);C.setTranslationSnap(!B()&&L?.25:null),C.setScaleSnap(B()?null:L?.25:P.ctrlKey?null:Ft()),C.setRotationSnap(P.shiftKey&&!P.ctrlKey?Math.PI/36:L?Math.PI/180:null),C.showX=C.showZ=!(L&&C.mode==="rotate"),C.showY=!0,K(B()&&C.mode==="scale")}function kt(P,L){mt&&(mt.removeFromParent(),mt.geometry.dispose(),mt.material.dispose(),mt=null),!(!P||!s.has(L))&&(mt=new Tt(new Ce(1,1,1),new an({color:"#72d8b0",transparent:!0,opacity:.4,depthWrite:!1})),mt.userData.floorZ=r.levels.find(z=>z.id===L).z,It(mt,P),s.get(L).add(mt))}function se(P){let L=p.getBoundingClientRect();return{x:(P.clientX-L.left)/Math.max(1,L.width)*2-1,y:-(P.clientY-L.top)/Math.max(1,L.height)*2+1,button:P.button??0}}function re(P){let L=se(P);return m.set(L.x,L.y),i.updateMatrixWorld(!0),t.updateMatrixWorld(!0),_.setFromCamera(m,t),_.intersectObjects(g.filter(Yt),!0).map(z=>{let rt=z.object;for(;rt&&!rt.userData.primitive;)rt=rt.parent;return{...z,root:rt}}).filter(z=>z.root)}function N(P){let L=re(P)[0];if(!L)return null;let z=a(P);return z&&z.point.distanceTo(t.position)+.002<L.distance?null:L}function ht(P){P.preventDefault(),P.stopImmediatePropagation()}function pt(P){if(ft)return!1;if(X||H)return ht(P),!0;if(!l()||P.altKey||P.button!==0)return!1;if(it(),G&&C.enabled&&!B()&&!P.shiftKey){let z=O.hit(P),rt=z&&O.begin(P,z,G);if(rt)return X={...rt,bounds:!0,id:P.pointerId,root:G,original:JSON.parse(JSON.stringify(G.userData.record))},C.axis=null,n.enabled=!1,O.hover(z),p.setPointerCapture?.(P.pointerId),ht(P),!0}if(G&&C.enabled&&(!P.shiftKey||C.mode==="rotate")&&(yt(P),i.updateMatrixWorld(!0),C.pointerHover(se(P)),C.axis)){let z=B()?window.KERN_PRIMITIVE_UI?.transformScope?.():null;if(B()&&!z)return ht(P),!0;let rt=B()?null:JSON.parse(JSON.stringify(G.userData.record)),ut=B()?w.begin():null;if(C.pointerDown(se(P)),C.dragging)return X=ut?{...ut,scope:z,id:P.pointerId,mode:C.mode,clientX:P.clientX,clientY:P.clientY}:{id:P.pointerId,root:G,original:rt,position:G.position.clone()},n.enabled=!1,p.setPointerCapture?.(P.pointerId),ht(P),!0}let L=N(P);return L?(H={id:P.pointerId,x:P.clientX,y:P.clientY,root:L.root,shift:P.shiftKey},p.setPointerCapture?.(P.pointerId),ht(P),!0):!1}function dt(P){if(ft)return!1;if(it(),X&&P.pointerId===X.id){if(X.bounds)return O.resize(X,P,X.root,X.original.wall?.25:P.ctrlKey?null:Ft()),ht(P),!0;if(yt(P),X.group&&X.mode==="scale"?G.scale.copy(X.scale).multiplyScalar(Math.exp(Math.max(-20,Math.min(20,(P.clientX-X.clientX-P.clientY+X.clientY)*.005)))):C.pointerMove({...se(P),button:-1}),X.group)return w.preview(X,X.mode,$.some(z=>z.userData.record.wall)?.25:P.ctrlKey?0:Ft()||0),$t(),ht(P),!0;let L=!X.original.wall&&!P.ctrlKey&&C.mode==="translate"&&Ft();if(L){let z=X.root,rt=X.position;for(let ut of["x","y","z"])z.position[ut]=rt[ut]+Math.round((z.position[ut]-rt[ut])/L)*L;z.updateMatrixWorld(!0)}return $t(),ht(P),!0}if(X||H&&P.pointerId===H.id)return ht(P),!0;if(G&&C.enabled&&!P.altKey&&!P.buttons){let L=!B()&&!P.shiftKey&&O.hit(P);if(O.hover(L),L)return C.axis=null,p.style.cursor="ew-resize",p.title="Drag "+{x:"width",y:"height",z:"depth"}[L.userData.boundsHandle.axis]+" \xB7 opposite face stays fixed \xB7 "+(G.userData.record.wall?"0.25 m steps":"Ctrl: free"),ht(P),!0;if(i.updateMatrixWorld(!0),C.pointerHover(se(P)),B()&&C.mode==="scale"&&C.axis==="XYZ")return p.title="Uniform group scale \xB7 drag right or up to enlarge; left or down to shrink",ht(P),!0}return!1}function at(P){p.hasPointerCapture?.(P)&&p.releasePointerCapture(P)}function vt(P){let L=new Re().makeRotationFromQuaternion(P).elements,z=Math.hypot(L[0],L[4]),rt=L[8]>=0?1:-1,ut=z>1e-12?Math.atan2(-L[4],L[0]):0,Lt=Math.atan2(L[6]+rt*L[1],L[5]-rt*L[2]),Rt=Lt-rt*ut;return{x:Math.atan2(Math.sin(Rt),Math.cos(Rt)),y:Math.atan2(L[8],z),z:ut}}function ot(P,L,z=!1){let rt=vt(P.quaternion),ut=Rt=>Math.round(Rt*1e6)/1e6,Lt=z||P.quaternion.angleTo(new Ne().setFromEuler(new fn(L.tiltX*Math.PI/180,-L.rotation*Math.PI/180,L.tiltY*Math.PI/180,"XYZ")))<1e-7;return{x:ut(P.position.x-P.scale.x/2),y:ut(P.position.z-P.scale.z/2),z:ut(P.position.y-P.userData.floorZ-P.scale.y/2),w:ut(P.scale.x),h:ut(P.scale.z),height:ut(P.scale.y),rotation:Lt?L.rotation:ut(L.wall?(()=>{let Rt=new A(1,0,0).applyQuaternion(P.quaternion),lt=Math.atan2(Rt.z,Rt.x)*180/Math.PI;return[lt-360,lt,lt+360].filter(St=>St>=-360&&St<=360).sort((St,Gt)=>Math.abs(St-L.rotation)-Math.abs(Gt-L.rotation))[0]})():-rt.y*180/Math.PI),tiltX:Lt?L.tiltX:L.wall?0:ut(rt.x*180/Math.PI),tiltY:Lt?L.tiltY:L.wall?0:ut(rt.z*180/Math.PI)}}let Et=(P,L)=>Object.entries(P).some(([z,rt])=>Math.abs(rt-L[z])>1e-6);function ee(P){if(X&&P.pointerId===X.id){let L=X;if(X=null,C.pointerUp({button:0}),n.enabled=c(),O.hover(null),at(P.pointerId),ht(P),L.group){let z=L.members.map(rt=>({floor:rt.root.userData.level,id:rt.root.userData.primitive,changes:ot(rt.root,rt.original,L.mode!=="rotate"),baseline:rt.original}));z.some(rt=>Et(rt.changes,rt.baseline))?d?.(z,L.scope)!==!0&&w.restore(L):w.restore(L)}else{let z=L.root,rt=ot(z,L.original,L.bounds);Et(rt,L.original)?f(z.userData.level,z.userData.primitive,rt,L.original,{resizeBounds:!!L.bounds})===!1&&It(z,L.original):It(z,L.original)}return $t(),!0}if(H&&P.pointerId===H.id){let L=H;return H=null,at(P.pointerId),ht(P),Math.hypot(P.clientX-L.x,P.clientY-L.y)<=5&&h(L.root.userData.level,L.root.userData.primitive,L.shift),!0}return!1}function Dt(P){if(P!=null&&(X?.id??H?.id)!==P)return!1;let L=X,z=H;return X=null,H=null,O.hover(null),L&&(L.group?w.restore(L):It(L.root,L.original),C.pointerUp({button:0}),n.enabled=c(),at(L.id)),z&&at(z.id),$t(),!!(L||z)}let I=P=>{P.key==="Escape"&&X&&(ht(P),Dt())};window.addEventListener("keydown",I,!0);function y(P,L,{floorPlane:z=!1}={}){it();let rt=r.levels.find(qt=>qt.id===L);if(!rt||!s.get(L)?.visible)return null;let ut=!z&&re(P).find(qt=>qt.root.userData.level===L),Lt=!z&&a(P),Rt=Lt?.floor===L?Lt:null,lt=ut&&(!Rt||ut.distance<Rt.point.distanceTo(t.position))?{point:ut.point,normal:ut.face.normal.clone().applyMatrix3(new ue().getNormalMatrix(ut.object.matrixWorld)).normalize()}:Rt;if(!lt){let qt=se(P);_.setFromCamera(new gt(qt.x,qt.y),t);let Ut=_.ray.intersectPlane(new $e(new A(0,1,0),-(rt.z+s.get(L).position.y)),new A);if(!Ut)return null;lt={point:Ut,normal:new A(0,1,0)}}let St=lt.point,Gt=lt.normal||new A(0,1,0);return{x:St.x,y:St.z,z:St.y-s.get(L).position.y,normal:{x:Gt.x,y:Gt.z,z:Gt.y}}}function W(){if(!ft){kt(null),Dt(),ft=!0,window.removeEventListener("keydown",I,!0),O.dispose(),w.dispose(),K(!1),C.detach(),C.dispose(),i.remove(U);for(let P of g)P.removeFromParent();for(let P of[...Object.values(R),...D])P.dispose();S.dispose();for(let P of v)P.dispose()}}return{select:xt,sync:it,updateBounds:$t,down:pt,move:dt,up:ee,cancel:Dt,placement:y,previewWall:kt,dispose:W,dragging:()=>!!X,busy:()=>!!(X||H),setMode(P){["translate","scale","rotate"].includes(P)&&(Dt(),C.setMode(P),C.setSpace(P==="scale"?"local":"world"),yt())},objects:()=>g}}function wo(i){let t=new Ri(i.polygon.map(s=>new gt(s[0],-s[1])));for(let s of i.holes||[])t.holes.push(new qi(s.map(r=>new gt(r[0],-r[1]))));let e=i.bottomPlane||i.topPlane,n=new or(t,{depth:e?1:i.height,bevelEnabled:!1,steps:1});if(n.rotateX(-Math.PI/2),e){let s=n.attributes.position,r=(o,a,l,c)=>o?o.a*a+o.b*l+o.c:c;for(let o=0;o<s.count;o++){let a=s.getX(o),l=s.getZ(o),c=s.getY(o)>.5;s.setY(o,r(c?i.topPlane:i.bottomPlane,a,l,i.z+(c?i.height:0))-i.z)}s.needsUpdate=!0,n.computeVertexNormals()}return n.computeBoundingBox(),n.computeBoundingSphere(),n}function ff(i){return i.flights.flatMap(t=>{if(!t.ramp)return t.treads.map(c=>({...c.rect,polygon:c.polygon,z:c.z-.12,height:.12}));let[e,n]=t.upPath,s=n[0]-e[0],r=n[1]-e[1],o=(t.z1-t.z0)/(s*s+r*r||1),a=t.surface?.thickness??.18,l={a:s*o,b:r*o,c:t.z0-o*(s*e[0]+r*e[1])};return[{...t.rect,polygon:t.polygon,z:t.z0-a,height:t.z1-t.z0+a,topPlane:l,bottomPlane:{...l,c:l.c-a}}]}).concat(i.landings.map(t=>({...t.rect,polygon:t.polygon,z:t.z-.18,height:.18})))}function pf(i,t,e){let n=0,s=1;for(let r of["x","y","z"]){let o=t[r]-i[r],a=e.min[r],l=e.max[r];if(Math.abs(o)<1e-8){if(i[r]<a||i[r]>l)return null;continue}let c=(a-i[r])/o,h=(l-i[r])/o;if(c>h&&([c,h]=[h,c]),n=Math.max(n,c),s=Math.min(s,h),n>s)return null}return n>=0&&n<=1?n:null}function Fx(i,t){if(i.polygon&&window.KERN_SHAPES){let r=window.KERN_SHAPES,o=(t.polygons||[]).filter(d=>d.kind==="slab"&&d.room===i.id&&Math.abs(d.z+d.height-i.z)<.01),a=d=>o.some(p=>r.contains(d,p.polygon)&&!(p.holes||[]).some(g=>r.contains(d,g))),l=r.labelAnchor(i),c=Math.min(i.w,4),h=Math.min(i.h,2);if(a(l))return{x:l.x-c/2,y:l.y-h/2,w:c,h,z:i.z};let f=null;for(let d of o){let p=[d.polygon,...d.holes||[]],g=r.bounds(d.polygon);for(let x=0;x<12;x++)for(let _=0;_<12;_++){let m={x:g.x+g.w*(_+.5)/12,y:g.y+g.h*(x+.5)/12};if(!a(m))continue;let R=Math.min(...p.flatMap(D=>D.map((C,U)=>{let O=D[(U+1)%D.length];return Math.hypot(C[0]-O[0],C[1]-O[1])>1e-8?r.project(m,{a:C,b:O}).distance:1/0}))),S=Math.min(1,R/Math.hypot(c/2,h/2)),v=S*c*h-Math.hypot(m.x-l.x,m.y-l.y)*1e-4;S*c>.35&&S*h>.35&&(!f||v>f.score)&&(f={...m,w:c*S,h:h*S,score:v})}}return f?{x:f.x-f.w/2,y:f.y-f.h/2,w:f.w,h:f.h,z:i.z}:null}let e=t.boxes.filter(r=>(r.kind==="slab"&&(!r.room||r.room===i.id)||r.kind==="landing")&&Math.abs(r.z+r.height-i.z)<.01).map(r=>{let o=Math.max(i.x,r.x),a=Math.max(i.y,r.y);return{x:o,y:a,w:Math.min(i.x+i.w,r.x+r.w)-o,h:Math.min(i.y+i.h,r.y+r.h)-a,z:r.z+r.height}}).filter(r=>r.w>.35&&r.h>.35),n=i.x+i.w/2,s=i.y+i.h/2;return e.sort((r,o)=>o.w*o.h-r.w*r.h||Math.hypot(r.x+r.w/2-n,r.y+r.h/2-s)-Math.hypot(o.x+o.w/2-n,o.y+o.h/2-s))[0]||null}function Ox(i,t,e,n){let s=Math.min(56,e*.42),r=[],o=a=>n.measureText?.(a).width??a.length*s*.56;for(let a=0;a<90;a++){n.font=`600 ${s}px system-ui`,r=[];let l="";for(let c of String(i).split(/\s+/)){let h=l?l+" "+c:c;l&&o(h)>t?(r.push(l),l=c):l=h}if(l&&r.push(l),r.every(c=>o(c)<=t)&&r.length*s*1.24<=e)break;s*=.92}return{lines:r,fontSize:s,lineHeight:s*1.24}}function mf(i,t,e){return i.stairs?.some(n=>{if(n.connectionId!==e.stair)return!1;let s=n.stops.find(o=>o.floor===t.id);if(!s)return!1;let r=n.stops.filter(o=>o.z<s.z-1e-6);return r.length>0&&e.z<s.z&&e.z>=Math.max(...r.map(o=>o.z))-.2})}function Bx(i,t,e={}){let n=null,s=new Fl({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),r=()=>{s.setAnimationLoop(null),s.dispose(),s.forceContextLoss(),s.domElement.remove()};try{let z=function(u,M){let E=u.height;if(u.contextOnly&&yt!==M.id||u.kind==="slab"&&(!Be||Qi)&&!Yt||u.kind==="ceiling"&&(!Be||Qi)&&(!It||te))return 0;let k=u.kind==="wall"||u.kind==="solid";return te&&k&&(E=Math.max(0,Math.min(E,(u.baseZ??M.z)+ae-u.z))),k&&!mt&&(E=0),E},rt=function(){let u=new Ue;kt=[];for(let M of g.values())M.position.y=M.userData.rank*H;X.position.y=0,X.userData.displayDatum=X.position.y;for(let M of R){let E=t.levels.find(Q=>Q.id===M.userData.level),k=g.get(E.id),ct=M.userData.fadeMesh;M.userData.boxes.forEach((Q,j)=>{let Z=z(Q,E),st=it&&M.userData.faded.has(j),J=(Mt,Pt)=>{let zt=Pt&&Z>.001;u.position.set(Q.x+Q.w/2,Q.z+Z/2,Q.y+Q.h/2),u.scale.set(zt?Q.w:0,zt?Z:0,zt?Q.h:0),u.updateMatrix(),Mt.setMatrixAt(j,u.matrix)};J(M,!st),ct&&J(ct,st),k.visible&&Z>.001&&kt.push({mesh:M,index:j,kind:Q.kind,level:E.id,min:{x:Q.x,y:Q.z+k.position.y,z:Q.y},max:{x:Q.x+Q.w,y:Q.z+Z+k.position.y,z:Q.y+Q.h}})}),M.visible=M.userData.boxes.some((Q,j)=>z(Q,E)>.001&&!(it&&M.userData.faded.has(j))),M.instanceMatrix.needsUpdate=!0,ct&&(ct.visible=it&&M.userData.boxes.some((Q,j)=>z(Q,E)>.001&&M.userData.faded.has(j)),ct.instanceMatrix.needsUpdate=!0)}for(let M of v){let E=M.userData.shape,k=t.levels.find(Q=>Q.id===M.userData.level),ct=z(E,k);if(E.bottomPlane||E.topPlane){let Q=te&&["wall","solid"].includes(E.kind)?(E.baseZ??k.z)+ae:1/0;if(M.userData.prismCutHeight!==Q){let j=window.KERN_ELEVATIONS?.clipPrism?.(E,-1/0,Q)||[E],Z=[];for(let J of j){let Mt=wo(J),Pt=Mt.attributes.position;for(let zt=0;zt<Pt.count;zt++)Z.push(Pt.getX(zt),Pt.getY(zt)+J.z-E.z,Pt.getZ(zt));Mt.dispose()}let st=new Ee;st.setAttribute("position",new _e(Z,3)),st.computeVertexNormals(),st.computeBoundingBox(),st.computeBoundingSphere(),M.geometry.dispose(),M.geometry=st,M.userData.prismCutHeight=Q}M.scale.y=1}else M.scale.y=ct/E.height;M.visible=ct>.001&&(!M.userData.contextOnly||yt===M.userData.level)}for(let M of x)M.visible=$t;for(let M of _)M.visible=$t&&!M.userData.duplicate;ut(),o.updateMatrixWorld(!0),se=""},ut=function(){for(let u of S){let M=u.userData.floorHighlight||u.userData.floorLeader;u.visible=!!g.get(M)?.visible&&(M===Ft||P.has(M))}for(let u of x)u.material.color.set(u.userData.level===Ft||P.has(u.userData.level)?10410239:16777215)},Lt=function(u){P=new Set((u||[]).filter(M=>g.has(M))),ut()},Rt=function(u){u&&!g.get(u)?.visible&&(u=null),u!==Ft&&(Ft=u,ut(),s.domElement.style.cursor=u?"pointer":"default",e.onHover?.(u?t.levels.find(M=>M.id===u):null))},lt=function(u=!1){a.updateMatrixWorld(!0);let M=[...a.position.toArray(),...a.quaternion.toArray(),H,mt,te,ae,$t,it,yt,...W()].join(":");if(!u&&M===se&&!at)return;let E=[...a.position.toArray().map(J=>J.toFixed(2)),...a.quaternion.toArray().map(J=>J.toFixed(3)),H,mt,te,ae,it,...W()].join(":");E!==pt&&(pt=E,dt=performance.now(),at=it);let k=!it||!ht&&!N&&(u||performance.now()-dt>=180),ct=new Map(R.map(J=>[J,new Set]));if(k&&it&&mt)for(let J of t.levels){let Mt=g.get(J.id);if(!Mt.visible)continue;let Pt=J.boxes.filter(zt=>zt.kind==="slab").sort((zt,Qt)=>Qt.w*Qt.h-zt.w*zt.h).slice(0,12);for(let zt of Pt)for(let[Qt,ce]of[[.5,.5],[.22,.22],[.78,.78]]){let pe={x:zt.x+zt.w*Qt,y:zt.z+zt.height+.8+Mt.position.y,z:zt.y+zt.h*ce},he=null,me=1;for(let We of kt){let Ve=pf(a.position,pe,We);Ve!==null&&Ve>1e-5&&Ve<me&&(me=Ve,he=We)}he?.kind==="wall"&&me<.985&&ct.get(he.mesh).add(he.index)}}if(k){let J=new Set,Mt=v.filter(Pt=>Pt.userData.kind==="wall"&&Pt.visible&&g.get(Pt.userData.level)?.visible);if(it&&mt){for(let Pt of t.levels)if(g.get(Pt.id)?.visible)for(let zt of(Pt.rooms||[]).slice(0,20)){let Qt=window.KERN_SHAPES?window.KERN_SHAPES.centroid(zt):{x:zt.x+zt.w/2,y:zt.y+zt.h/2},ce=new A(Qt.x,zt.z+.8+g.get(Pt.id).position.y,Qt.y),pe=ce.clone().sub(a.position),he=pe.length(),We=new Vn(a.position,pe.normalize(),.05,he-.05).intersectObjects(Mt,!1)[0];We&&J.add(We.object)}}for(let Pt of v)Pt.userData.kind==="wall"&&(Pt.material=D(Pt.userData.shape.color,J.has(Pt)))}let Q=!1;if(k){for(let J of R){let Mt=ct.get(J),Pt=J.userData.faded;(Mt.size!==Pt.size||[...Mt].some(zt=>!Pt.has(zt)))&&(Q=!0),J.userData.faded=Mt}at=!1}Q&&rt();let j=[],Z=Math.max(1,i.clientWidth),st=Math.max(1,i.clientHeight);for(let J of[...x].sort((Mt,Pt)=>+!!Mt.userData.roomLabel-+!!Pt.userData.roomLabel||(Pt.userData.area||0)-(Mt.userData.area||0))){let Mt=J.getWorldPosition(new A),Pt=Mt.clone().applyMatrix4(a.matrixWorldInverse),zt=2*Math.max(.1,-Pt.z)*Math.tan(oi.degToRad(a.fov/2))/st,Qt=Math.min(J.userData.labelWidth*zt,J.userData.maxWorldWidth||1/0);J.scale.set(Qt,Qt*J.userData.labelRatio,1);let ce=Mt.clone().project(a),pe=Qt/zt,he=pe*J.userData.labelRatio,me={x:(ce.x+1)*Z/2-pe/2,y:(1-ce.y)*st/2-he/2,w:pe,h:he},We=j.some(Ve=>me.x<Ve.x+Ve.w+5&&me.x+me.w+5>Ve.x&&me.y<Ve.y+Ve.h+5&&me.y+me.h+5>Ve.y);if(J.visible=$t&&g.get(J.userData.level).visible&&(!J.userData.roomLabel||J.userData.level===yt)&&Pt.z<0&&ce.z>=-1&&ce.z<=1&&me.x+me.w>0&&me.y+me.h>0&&me.x<Z&&me.y<st&&pe>=58&&!We&&!kt.some(Ve=>{let qn=pf(a.position,Mt,Ve);return qn!==null&&qn>1e-5&&qn<.995}),J.visible&&j.push(me),J.userData.floorLabel){let Ve=S.find(qn=>qn.userData.floorLeader===J.userData.level);if(Ve){let qn=Ve.geometry.attributes.position;qn.setX(0,J.position.x+Qt/2),qn.needsUpdate=!0,Ve.visible=$t&&J.visible&&(J.userData.level===Ft||P.has(J.userData.level))}}}for(let J of _){let Mt=J.getWorldPosition(new A);J.visible=$t&&g.get(J.userData.level).visible&&!J.userData.duplicate&&a.position.y>Mt.y}se=M},St=function(){N=null},Gt=function(u,M,E,k=ot){let ct=a.position.clone(),Q=h.target.clone(),j=h.enableDamping;h.enableDamping=!1,h.update(),a.position.copy(ct),h.target.copy(Q),h.update(),h.enableDamping=j,N=E&&!ee?.matches?{from:ct,targetFrom:Q,to:u.clone(),targetTo:M.clone(),datumFrom:ot,datumTo:k,start:performance.now(),duration:420}:null,N||(ot=k,a.position.copy(u),h.target.copy(M),a.lookAt(M),h.update(),lt(!0))},qt=function(u=performance.now()){if(!N)return!1;let M=N,E=ee?.matches?1:Math.min(1,Math.max(0,(u-M.start)/M.duration)),k=E*E*(3-2*E);return ot=oi.lerp(M.datumFrom,M.datumTo,k),a.position.lerpVectors(M.from,M.to,k),h.target.lerpVectors(M.targetFrom,M.targetTo,k),a.lookAt(h.target),a.updateMatrixWorld(!0),E===1&&(N=null,h.update()),!0},V=function(){let u=`${W().join("|")}:${H}:${a.aspect}:${a.fov}`;if(Ut?.key===u)return Ut;let M=new dn;for(let Z of g.values())if(Z.visible){let st=t.levels.find(J=>J.id===Z.userData.id);for(let J of[...st.boxes,...st.polygons||[],...$(st)])M.expandByPoint(new A(J.x,J.z+Z.position.y,J.y)),M.expandByPoint(new A(J.x+J.w,J.z+J.height+Z.position.y,J.y+J.h))}M.isEmpty()&&(M.min.set(C.minX,C.minZ-K*H,C.minY),M.max.set(C.maxX,C.maxZ+(t.levels.length-1-K)*H,C.maxY));let E=M.getCenter(new A),k=M.getSize(new A),ct=Math.max(k.length()/2,8),Q=oi.degToRad(a.fov/2),j=ct/Math.sin(Q)*Math.max(1,1/a.aspect)*1.1;return Ut={key:u,center:E,distance:j}},Ct=function(){return Be?1/Math.tan(oi.degToRad(a.fov/2)):V().distance/Math.max(.001,a.position.distanceTo(h.target))},Nt=function(){let u=Ct(),M=u<.1?Math.max(.1,Math.round(u*1e3)/10):Math.round(u*100);Number.isFinite(u)&&M!==de&&(de=M,e.onCameraChange?.(u))},Wt=function(u=!1,M=!1){let{center:E,distance:k}=V(),ct=u?a.position.clone().sub(h.target).normalize():new A(1,.9,1.2).normalize();a.near=.05,a.far=Math.max(5e3,k*5),a.updateProjectionMatrix(),Gt(E.clone().add(ct.multiplyScalar(k)),E,M,Et(vt))},At=function(u,M=!0){let E=Et(u),k=E-ot;vt=u,Gt(a.position.clone().add(new A(0,k,0)),h.target.clone().add(new A(0,k,0)),M,E)},_t=function(){if(e.onFloorVisibility)return e.onFloorVisibility({all:!0});Hn(),(Jt||ie==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&Xt(!0),bt&&Yn(),St();for(let u of g.values())u.visible=!0;yt=null,Rt(null),rt(),lt(!0),L("visibility")},Zt=function(u){if(e.onFloorSelect)return e.onFloorSelect(u,{additive:!1});if(Hn(),(Jt||ie==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&Xt(!0),bt&&Yn(),!!g.has(u)){if(yt===u&&W().length===1){L();return}Xn(null,null),yt=u;for(let[M,E]of g)E.visible=M===u;Rt(null),rt(),At(u),L(),Xn(u,null)}},ne=function(u,{preserveEditing:M=!1}={}){if(g.has(u)){if(e.onFloorSelect&&!M)return e.onFloorSelect(u,{additive:!1});if(M&&e.getFloorState)return Y(e.getFloorState());!M&&!g.get(u).visible&&(g.get(u).visible=!0,rt()),yt!==u&&(window.KERN_CONNECTION_3D?.cancel(),(ie==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&Xt(!0)),yt=u,vt=u,ot=Et(u),Rt(null),M||nt([u]),lt(!0),L(M?"sync":"navigation")}},Ie=function(u,M=!1){if(!g.has(u))return;if(e.onFloorSelect)return e.onFloorSelect(u,{additive:M});if(!M)return Zt(u);Hn(),Xt(),Yn();let E=g.get(u);E.visible=!E.visible,W().length||(E.visible=!0),Xn(null,null),ne(E.visible?u:W()[0]),rt()},Pe=function(u){g.has(u)&&u!==vt&&ne(u,{preserveEditing:!0})},Bn=function(u){let M=t.levels.findIndex(k=>k.id===yt),E=t.levels[M+Math.sign(u)];M>=0&&E&&(ne(E.id),At(E.id))},Dn=function(u,{physicalOnly:M=!1}={}){let E=s.domElement.getBoundingClientRect();if(!E.width||!E.height)return null;y.set((u.clientX-E.left)/E.width*2-1,-(u.clientY-E.top)/E.height*2+1),a.updateMatrixWorld(!0),o.updateMatrixWorld(!0),I.setFromCamera(y,a);let k=[...m,...v,...M?[]:[...x,..._]].filter(Mt=>Mt.visible&&g.get(Mt.userData.level)?.visible),ct=I.intersectObjects(k,!1)[0],Q=ct?.object.userData.level,j=ct?.object.userData.boxes?.[ct.instanceId],Z=ct?.object.userData.room||j?.room,st=t.levels.find(Mt=>Mt.id===Q)?.rooms?.find(Mt=>Mt.id===Z);s.domElement.title=st?st.name:"";let J=ct?.object.userData.sourceFloor||j?.sourceFloor||Q;return Kt=ct?{floor:J,displayFloor:Q,door:ct.object.userData.door||j?.door,room:Z||j?.rooms?.[0],roomLabel:!!ct.object.userData.roomLabel,floorSurface:(ct.object.userData.kind||j?.kind)==="slab"&&!ct.object.userData.door&&!j?.door,point:ct.point,normal:ct.face?.normal?.clone().applyMatrix3(new ue().getNormalMatrix(ct.object.matrixWorld)).normalize()}:null,J||null},xr=function(u){let M=u&&window.KERN_TRANSFORM?.frame(u),E=M?M.point(M.x+M.w/2,M.y+M.h):u?[u.x+u.w/2,u.y+u.h]:null;ws=u?{x:E[0],y:E[1],z:u.z+g.get(u.floor).position.y,w:M?.w??u.w,h:M?.h??u.h}:null,yr()},yr=function(){if(!ws||Be){zn.style.display="none";return}let u=ws,M=new A(u.x,u.z,u.y).project(a),E=s.domElement.getBoundingClientRect();zn.textContent=u.w.toFixed(2)+" \xD7 "+u.h.toFixed(2)+" m",zn.style.display="block",zn.style.left=Math.min(Math.max(6,(M.x+1)*E.width/2-45),Math.max(6,E.width-135))+"px",zn.style.top=Math.min(Math.max(6,(1-M.y)*E.height/2+15),Math.max(6,E.height-28))+"px"},Xn=function(u,M){for(n?.select([]),xr(null),Oe=u?{floor:u,ids:M?[M]:[]}:null;Te.children.length;){let Q=Te.children[0];Te.remove(Q),Q.geometry.dispose()}let E=t.levels.find(Q=>Q.id===u)?.rooms.find(Q=>Q.id===M)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(u,M),k=t.levels.find(Q=>Q.id===u),ct=k&&tt(k);ge=g.has(u)?E?{...E,floor:u}:!M&&k?{id:null,isFloor:!0,floor:u,z:k.z,x:ct.minX,y:ct.minY,w:ct.maxX-ct.minX,h:ct.maxY-ct.minY}:null:null,ge&&wt(ge)},T=function(u,M){if(Xn(u,M[0]||null),Oe={floor:u,ids:[...M]},M.length<2)return;for(ge=null;Te.children.length;){let k=Te.children[0];Te.remove(k),k.geometry.dispose()}let E=t.levels.find(k=>k.id===u)?.rooms.filter(k=>M.includes(k.id))||[];for(let k of E){let ct=window.KERN_SHAPES?.points(k)||[[k.x,k.y],[k.x+k.w,k.y],[k.x+k.w,k.y+k.h],[k.x,k.y+k.h]],Q=new Yi(new Ee().setFromPoints(ct.map(j=>new A(j[0],k.z+g.get(u).position.y+.08,j[1]))),Wn);Q.renderOrder=10,Te.add(Q)}if(E.length){let k=Math.min(...E.map(Q=>Q.x)),ct=Math.min(...E.map(Q=>Q.y));xr({floor:u,x:k,y:ct,z:Math.min(...E.map(Q=>Q.z)),w:Math.max(...E.map(Q=>Q.x+Q.w))-k,h:Math.max(...E.map(Q=>Q.y+Q.h))-ct})}},Y=function({active:u,selected:M=[],visible:E=[],select:k=!1,navigate:ct=!1}){let Q=new Set(E),j=M.includes(u)&&g.has(u)?u:null;if(!(yt===j&&g.has(u)&&vt===u&&W().length===Q.size&&W().every(st=>Q.has(st))&&P.size===M.length&&M.every(st=>P.has(st))&&!k&&!ct)){n?.cancel(),bt&&Yn(),(Jt||ie==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&Xt(!0),Hn(),Dt.clear(),re=null;for(let[st,J]of g)J.visible=Q.has(st);if(yt=j,Lt(M),g.has(u)&&(ct?At(u):(vt=u,ot=Et(u))),k)nt(M);else if(ge&&!Q.has(ge.floor)){let st=ge.isFloor?Oe:null;Xn(null,null),st&&(Oe=st)}Oe?.objects&&et(Oe.objects.filter(st=>Q.has(st.floor))),Rt(null),rt(),lt(!0),L("controller")}},et=function(u){let M=(u||[]).filter(E=>g.has(E.floor));if(M.length&&M.every(E=>E.kind==="rooms"&&E.floor===M[0].floor)){T(M[0].floor,M.map(E=>E.id));return}if(Xn(null,null),n?.select(M),!!M.length){Oe={objects:M.map(E=>({...E}))};for(let E of M){let k=E.polygons?.length?E.polygons:[[[E.x,E.y],[E.x+E.w,E.y],[E.x+E.w,E.y+E.h],[E.x,E.y+E.h]]],ct=E.z+g.get(E.floor).position.y+.08;for(let Q of k){let j=new Yi(new Ee().setFromPoints(Q.map(Z=>new A(Z[0],ct,Z[1]))),Wn);j.renderOrder=10,j.userData.selectedObject={floor:E.floor,kind:E.kind,id:E.id},Te.add(j)}}}},nt=function(u){let M=[...new Set(u||[])].filter(E=>g.get(E)?.visible);Lt(u),Xn(M.length===1?M[0]:null,null),Oe=M.length?{floors:M}:null},q=function(){if(!Oe)return Wt(!0,!0);let u=new dn,M=Oe.floor;if(Oe.objects){M=Oe.objects[0]?.floor;for(let j of Oe.objects){let Z=g.get(j.floor).position.y;u.expandByPoint(new A(j.x,j.z+Z,j.y)),u.expandByPoint(new A(j.x+j.w,j.z+j.height+Z,j.y+j.h))}}else if(Oe.floors){M=Oe.floors.includes(yt)?yt:Oe.floors[0];for(let j of Oe.floors){let Z=t.levels.find(J=>J.id===j);if(!Z||!g.get(j)?.visible)continue;let st=g.get(j).position.y;for(let J of[...Z.boxes,...Z.polygons||[],...$(Z)])u.expandByPoint(new A(J.x,J.z+st,J.y)),u.expandByPoint(new A(J.x+J.w,J.z+J.height+st,J.y+J.h))}}else{let j=t.levels.find(J=>J.id===M);if(!j)return;let Z=Oe.ids.length?Oe.ids.map(J=>j.rooms.find(Mt=>Mt.id===J)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(j.id,J)).filter(Boolean):j.rooms,st=g.get(j.id).position.y;for(let J of Z)u.expandByPoint(new A(J.x,J.z+st,J.y)),u.expandByPoint(new A(J.x+J.w,J.z+(J.height||j.height||3)+st,J.y+J.h))}if(u.isEmpty())return;let E=u.getCenter(new A),k=Math.max(2,u.getSize(new A).length()/2),ct=k/Math.sin(oi.degToRad(a.fov/2))*Math.max(1,1/a.aspect)*1.15,Q=a.position.clone().sub(h.target).normalize();Gt(E.clone().add(Q.multiplyScalar(ct)),E,!0,Et(M))},wt=function(u){for(xr(u);Te.children.length;){let E=Te.children[0];Te.remove(E),E.geometry.dispose()}let M=u.z+g.get(u.floor).position.y+.08;if(!u.isFloor){let E=new Yi(new Ee().setFromPoints((window.KERN_SHAPES?.points(u)||[[u.x,u.y],[u.x+u.w,u.y],[u.x+u.w,u.y+u.h],[u.x,u.y+u.h]]).map(k=>new A(k[0],M,k[1]))),Wn);if(E.renderOrder=10,Te.add(E),window.KERN_CONCRETE_CAP_UI?.readOnly(u.floor,u.id))return;for(let[k,ct,Q]of window.KERN_ROTATE?.active()&&window.KERN_ROTATE.eligibleRoom(u)?window.KERN_SHAPES.raw(u).map((j,Z)=>["rotate-"+Z,...j]):(window.KERN_TRANSFORM?.handles(u)||[["nw",u.x,u.y],["ne",u.x+u.w,u.y],["se",u.x+u.w,u.y+u.h],["sw",u.x,u.y+u.h]]).filter(j=>j[0].length===2)){let j=k.startsWith("rotate-")&&window.KERN_ROTATE?.pivotFor(u)?.index===Number(k.slice(7)),Z=new Tt(new Ce(j?.55:.35,.15,j?.55:.35),j?Ln:Wn);Z.position.set(ct,M,Q),Z.userData.edge=k,Z.renderOrder=11,Te.add(Z)}}if(u.routeStair&&window.KERN_ROUTE_STAIRS){let E=u.routeStair,k=E.nodes,ct=window.KERN_ROUTE_STAIRS.elevations(u,window.kernPlanner?.getPlan());for(let Q=0;Q<k.length;Q++){let j=window.KERN_ROUTE_STAIRS.point(u,k[Q]),Z=ct[Q],st=(Q===0?E.start?.floor:Q===k.length-1?E.end?.floor:null)||u.floor,J=g.get(st)?.position.y??g.get(u.floor).position.y,Mt=Z+J,Pt=new Tt(new ni(.23,10,8),Wn);Pt.position.set(j[0],Mt+.12,j[1]),Pt.userData.edge="route-node-"+Q,Pt.userData.routeZ=Z,Pt.userData.displayOffset=J,Pt.renderOrder=16,Te.add(Pt);let zt=new Tt(new ir(.18,.45,8),Ln);if(zt.position.set(j[0],Mt+1,j[1]),zt.userData.edge="route-height-"+Q,zt.userData.routeZ=Z,zt.userData.displayOffset=J,zt.renderOrder=16,Te.add(zt),Q===(window.KERN_ROUTE_UI?.selectedNode??0))for(let[Qt,ce]of(k[Q].landing||[]).entries()){let pe=window.KERN_ROUTE_STAIRS.point(u,ce),he=new Tt(new Ce(.22,.15,.22),Ln);he.position.set(pe[0],Mt+.14,pe[1]),he.userData.edge="route-landing-"+Q+"-"+Qt,he.userData.routeZ=Z,he.userData.displayOffset=J,he.renderOrder=17,Te.add(he)}}}if(!u.isFloor&&!window.KERN_ROTATE?.active()){let E=new Tt(new pi(.28),Wn);E.position.set(u.x+u.w/2,M,u.y+u.h/2),E.userData.edge="move",E.renderOrder=14,Te.add(E)}if(!u.routeStair&&!window.KERN_ROTATE?.active()&&(u.isFloor||u.localSteps||window.KERN_ROTATE?.eligibleRoom(u))){let E=u.localSteps&&window.KERN_ELEVATION_UI?.handlePoint(u.floor,u.id),k=E?.x??u.x+u.w/2,ct=E?.y??u.y+u.h/2,Q=(u.__elevation?u.z:window.KERN_ELEVATION_UI?.handleZ(u.floor,u.id)??u.z)+g.get(u.floor).position.y,j=new Ze(new Ee().setFromPoints([new A(k,Q,ct),new A(k,Q+1.6,ct)]),Ln);j.renderOrder=12,Te.add(j);let Z=new Tt(new ir(.23,.55,8),Ln);Z.position.set(k,Q+1.6,ct),Z.userData.edge="elevate",Z.renderOrder=13,Te.add(Z)}},Ot=function(u,M){let E=s.domElement.getBoundingClientRect();return y.set((u.clientX-E.left)/E.width*2-1,-(u.clientY-E.top)/E.height*2+1),a.updateMatrixWorld(!0),o.updateMatrixWorld(!0),I.setFromCamera(y,a),I.ray.intersectPlane(new $e(new A(0,1,0),-(M.z+g.get(M.floor).position.y)),new A)},Se=function(){for(;we.children.length;){let u=we.children[0];we.remove(u),u.geometry.dispose()}},Xt=function(u=!1){let M=Jt;Jt=null,window.KERN_BRIDGE_UI?.cancel(),Se(),xe.style.display="none",h.enabled=!Be,M&&s.domElement.hasPointerCapture(M.pointerId)&&s.domElement.releasePointerCapture(M.pointerId),u&&(window.KERN_CONNECTION_3D?.cancel(),ie="select",Te.visible=!Be)},ke=function(u){u!==ie&&(n?.cancel(),window.KERN_CONNECTION_3D?.cancel(),Xt(),u!=="select"&&u!=="bridge"&&!yt&&ne(vt,{preserveEditing:!0}),ie=u,Te.visible=u==="select",s.domElement.title=u==="bridge"?"Click two room floors at the same height":u==="edge-steps"?"Click a room edge and drag outward":u==="steps"?"Draw between two different-height surfaces":u==="room"?"Drag a room footprint":u==="stairs"?"Draw a stair footprint, then choose destination floors":"")},be=function(u,M){let E=s.domElement.getBoundingClientRect();y.set((u.clientX-E.left)/E.width*2-1,-(u.clientY-E.top)/E.height*2+1),a.updateMatrixWorld(!0),I.setFromCamera(y,a);let k=I.ray.intersectPlane(new $e(new A(0,1,0),-M),new A);return k?{x:k.x,y:k.z}:null},je=function(u){if(Se(),xe.style.display="block",xe.style.left="18px",xe.style.top="auto",xe.style.bottom="18px",xe.textContent=u.error||u.summary,u.error||u.valid===!1||!u.room&&!u.detail||!g.has(u.fid))return;let M=u.room?.bridge?[{...u.room,polygon:window.KERN_SHAPES.points(u.room),z:u.room.z-.15,height:.15}]:u.detail?ff(u.detail):[{...u.room,z:t.levels.find(E=>E.id===u.fid).z-.15,height:.15}];for(let E of M){let k;E.polygon?k=wo(E):k=new Ce(E.w,E.height,E.h);let ct=new Tt(k,Ln);E.polygon?ct.position.y=E.z+g.get(u.fid).position.y:ct.position.set(E.x+E.w/2,E.z+E.height/2+g.get(u.fid).position.y,E.y+E.h/2),ct.renderOrder=14,we.add(ct)}},xi=function(u){if(Dn(u,{physicalOnly:!0}),!Kt?.floorSurface||!Kt.room||!Kt.normal||Kt.normal.y<.5)return null;let M=t.levels.find(k=>k.id===Kt.floor),E=M?.rooms.find(k=>k.id===Kt.room);return E?{floor:M.id,p:{x:Kt.point.x,y:Kt.point.z},z:E.z}:null},cn=function(u,M=yt||vt){Dn(u);let E=Kt?.floor||M,k=t.levels.find(j=>j.id===E);if(!k)return null;let ct=Kt?{x:Kt.point.x,y:Kt.point.z}:be(u,k.z+g.get(E).position.y);if(!ct)return null;let Q=Kt?.point||new A(ct.x,k.z+g.get(E).position.y,ct.y);return{floor:E,room:Kt?.room,door:Kt?.door,p:ct,altKey:!!u.altKey,worldPerPixel:2*a.position.distanceTo(Q)*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height)}},Ni=function(u){Se(),xe.style.display="block",xe.style.left="18px",xe.style.top="auto",xe.style.bottom="18px",xe.textContent=u.valid?u.summary||(ie==="disconnect"?"Release to remove connection":"Click or release to place opening"):u.reason||"Choose a wall";let M=u.geometry;if(!(!M||!g.has(u.fid)))for(let E of M.segments||[M]){let k=E,ct=k.axis==="poly"?k.p0:k.axis==="h"?[k.start,k.fixed]:[k.fixed,k.start],Q=k.axis==="poly"?k.p1:k.axis==="h"?[k.end,k.fixed]:[k.fixed,k.end],j=u.door?.kind==="window"?u.door.sill??.9:0,Z=u.door?.kind==="window"?u.door.height??1.4:u.door?.maximumPassage?u.door.height:window.KERN_LOW_OPENINGS?.recognized(u.door)?u.clearHeight??u.door.height:2.2,st=u.z+j+g.get(u.fid).position.y,J=[[ct[0],st,ct[1]],[Q[0],st,Q[1]],[Q[0],st+Z,Q[1]],[ct[0],st+Z,ct[1]]],Mt=new Yi(new Ee().setFromPoints(J.map(Pt=>new A(...Pt))),Ts);Mt.renderOrder=20,we.add(Mt)}},Xh=function(){if(!An)return;a.position.set(An.x+(An.bobX||0)*Math.cos(Ro),An.z+(An.eyeHeight??1.6278874)+(An.bobY||0),An.y-(An.bobX||0)*Math.sin(Ro)),a.rotation.order="YXZ",a.rotation.set(kh,Ro,An.roll||0);let u=new A(0,0,-1).applyQuaternion(a.quaternion);if(Ui.position.copy(a.position),Ui.target.position.copy(a.position).add(u.multiplyScalar(8)),Ui.visible=Vh,!An.fly){for(let M of x)M.visible=!1;for(let M of _)M.visible=!M.userData.duplicate&&Math.abs(M.position.y-An.z)<.2}},vf=function(u,M=0,E=0,k=!0,ct=!1){if(u){if(n?.cancel(),Xt(!0),!Be){if(Cs=ql(),a.fov=u.fov??90,a.updateProjectionMatrix(),Be=!0,Qi=!!u.fly,o.children.filter(Q=>Q.isHemisphereLight||Q.isDirectionalLight).forEach(Q=>{Q.userData.originalIntensity=Q.intensity,u.fly||(Q.intensity=Q.isHemisphereLight?.8:.3)}),Te.visible=!1,h.enabled=!1,N=null,!u.fly){H=0,mt=!0,te=!1,it=!1,$t=!1,yt=null;for(let Q of g.values())Q.visible=!0;X.visible=!1,Fi.visible=!0}rt()}if(Qi&&!u.fly){H=0,mt=!0,te=!1,it=!1,$t=!1,yt=null;for(let Q of g.values())Q.visible=!0;X.visible=!1,Fi.visible=!0,Qi=!1,rt()}Qi=!!u.fly,a.fov!==(u.fov??90)&&(a.fov=u.fov??90,a.updateProjectionMatrix()),An=u,Ro=M,kh=E,Vh=k,Xh()}else if(Be){let Q=a.position.clone(),j=a.getWorldDirection(new A);Be=!1,Qi=!1,a.fov=Cs?.fov??42,a.updateProjectionMatrix(),o.children.filter(Z=>Z.isHemisphereLight||Z.isDirectionalLight).forEach(Z=>Z.intensity=Z.userData.originalIntensity??Z.intensity),Te.visible=!0,An=null,Ui.visible=!1,Fi.visible=!1,h.enabled=!0,a.rotation.order="XYZ",Zl(ct?{...Cs,position:Q.toArray(),target:Q.clone().add(j.multiplyScalar(10)).toArray()}:Cs)}},ql=function(){return{fov:a.fov,position:a.position.toArray(),target:h.target.toArray(),focused:yt,navigationFloor:vt,navigationY:ot,navigationElevation:Et(vt),visible:W(),gap:H,showWalls:mt,showCeilings:It,showSlabs:Yt,cutaway:te,cutHeight:ae,labels:$t,xray:it,showGrid:xt,overview:null}},Zl=function(u){if(!u||ft)return;a.fov=Number.isFinite(u.fov)?u.fov:42,a.updateProjectionMatrix();let M=ct=>Array.isArray(ct)&&ct.length===3&&ct.every(Number.isFinite);St(),H=Math.max(0,Math.min(12,Number(u.gap)||0)),mt=u.showWalls!==!1,It=!!u.showCeilings,Yt=u.showSlabs!==!1,te=u.cutaway!==!1,ae=Number.isFinite(u.cutHeight)?Math.max(.4,Math.min(2.4,u.cutHeight)):1.15,$t=u.labels!==!1,it=!!u.xray,xt=u.showGrid!==!1,X.visible=xt,yt=g.has(u.focused)?u.focused:null;let E=Array.isArray(u.visible)?u.visible.filter(ct=>g.has(ct)):[...g.keys()];for(let[ct,Q]of g)Q.visible=E.includes(ct);if(!yt&&!E.length&&u.visible?.length)for(let ct of g.values())ct.visible=!0;vt=g.has(u.navigationFloor)?u.navigationFloor:yt||vt;let k=g.has(u.navigationFloor)&&Number.isFinite(u.navigationElevation)?Et(vt)-u.navigationElevation:0;ot=(Number.isFinite(u.navigationY)?u.navigationY:Et(vt))+k,Rt(null),rt(),M(u.position)&&M(u.target)?Gt(new A().fromArray(u.position).add(new A(0,k,0)),new A().fromArray(u.target).add(new A(0,k,0)),!1):Wt(),lt(!0),L("restore")},Yh=function(){if(!ft){n?.dispose(),s.domElement.removeEventListener("pointerdown",As,!0),s.domElement.removeEventListener("pointermove",ai,!0),s.domElement.removeEventListener("pointerup",Rh,!0),s.domElement.removeEventListener("pointercancel",Ao,!0),s.domElement.removeEventListener("lostpointercapture",Ao,!0),Xt(!0),s.domElement.removeEventListener("pointerdown",le,!0),s.domElement.removeEventListener("pointermove",jt,!0),s.domElement.removeEventListener("lostpointercapture",fe,!0),s.domElement.removeEventListener("pointerup",fe,!0),s.domElement.removeEventListener("pointercancel",fe,!0),s.domElement.removeEventListener("pointerdown",He,!0),s.domElement.removeEventListener("pointermove",vn,!0),s.domElement.removeEventListener("pointerup",Mn,!0),s.domElement.removeEventListener("pointercancel",sn,!0),s.domElement.removeEventListener("lostpointercapture",hn,!0),ft=!0,Ui.dispose();for(let u of Fi.children)u.geometry.dispose();N=null,s.setAnimationLoop(null),zh.disconnect(),s.domElement.removeEventListener("pointerdown",Ch,!0),s.domElement.removeEventListener("pointermove",Ph,!0),s.domElement.removeEventListener("pointerup",Ih,!0),s.domElement.removeEventListener("pointercancel",Yn,!0),s.domElement.removeEventListener("lostpointercapture",Yn,!0),Rs.remove(),s.domElement.removeEventListener("pointerdown",Dh,!0),s.domElement.removeEventListener("pointermove",Lh,!0),s.domElement.removeEventListener("pointerup",Nh,!0),s.domElement.removeEventListener("pointercancel",Hn,!0),s.domElement.removeEventListener("lostpointercapture",Hn,!0),zn.remove(),xe.remove(),Li.dispose(),Ln.dispose(),Wn.dispose(),Ts.dispose(),To.dispose();for(let u of Te.children)u.geometry.dispose();h.removeEventListener("start",Oh),h.removeEventListener("end",Bh),h.dispose();for(let[u,M]of Object.entries(Uh))s.domElement.removeEventListener(u,M);s.domElement.removeEventListener("webglcontextlost",Hh),window.removeEventListener("blur",Yl);for(let u of[...x,..._])u.material.map.dispose(),u.material.dispose(),u.geometry&&!u.isSprite&&u.geometry.dispose();for(let u of S)u.geometry.dispose(),u.material.dispose();for(let u of v)u.geometry.dispose();for(let u of p.values())u.dispose();d.dispose(),X.geometry.dispose();for(let u of Array.isArray(X.material)?X.material:[X.material])u.dispose();s.dispose(),s.forceContextLoss(),s.domElement.remove(),o.clear(),Dt.clear()}};s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.outputColorSpace=on,s.setClearColor(1514532),s.domElement.setAttribute("aria-label","3D building editor. Alt-left drag orbits; middle or right drag pans. Alt-right drag horizontally zooms at the starting pointer: right closer, left farther. Click a floor or floor control to show and edit it alone; Shift-click adds or removes floors. F frames the selection. Click rooms and openings within the selected floor to edit them."),s.domElement.tabIndex=0,i.appendChild(s.domElement);let o=new Wr,a=new un(42,1,.05,5e3);o.add(new lo(15988735,4739939,2.2));let l=new lr(16777215,2.5);l.position.set(-40,80,-30),o.add(l);let c=new lr(12044524,.6);c.position.set(40,10,60),o.add(c);let h=new Hl(a,s.domElement),f=r;r=()=>{h.dispose();let u=new Set,M=new Set,E=new Set;o.traverse(k=>{k.geometry&&u.add(k.geometry);for(let ct of Array.isArray(k.material)?k.material:k.material?[k.material]:[])M.add(ct),ct.map&&E.add(ct.map)});for(let k of E)k.dispose();for(let k of M)k.dispose();for(let k of u)k.dispose();o.clear(),f()},h.enableDamping=!0,h.dampingFactor=.09,h.maxPolarAngle=Math.PI-.001,h.minDistance=1,h.maxDistance=1600,h.screenSpacePanning=!0,h.mouseButtons={LEFT:null,MIDDLE:wn.PAN,RIGHT:wn.PAN},h.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN};let d=new Ce(1,1,1),p=new Map,g=new Map,x=[],_=[],m=[],R=[],S=[],v=[],D=(u,M=!1)=>{let E=u+(M?":xray":"");return p.has(E)||p.set(E,new fs({color:u,roughness:.88,metalness:0,transparent:M,opacity:M?.5:1,depthWrite:!M})),p.get(E)},C=t.bounds,U=(C.minX+C.maxX)/2,O=(C.minY+C.maxY)/2,w=Math.max(6,(C.maxX-C.minX)*.22),b=t.levels.find(u=>u.id==="L0"),F=t.siteGroundZ??b?.z??0,K=b?t.levels.indexOf(b):t.levels.reduce((u,M,E)=>Math.abs(M.z-F)<Math.abs(t.levels[u].z-F)?E:u,0),$=u=>(u.primitives||[]).map(M=>{let E=window.KERN_PRIMITIVES.bounds(M);return{...E,z:u.z+E.z}}),tt=u=>{let M=[...u.boxes,...u.polygons||[],...$(u)];return M.length?{minX:Math.min(...M.map(E=>E.x)),maxX:Math.max(...M.map(E=>E.x+E.w)),minY:Math.min(...M.map(E=>E.y)),maxY:Math.max(...M.map(E=>E.y+E.h))}:C},B=(u,M,E)=>{let k=Fx(u,M);if(!k)return;let ct=String(u.name||u.id),Q=Math.min(.32,Math.min(k.w,k.h)*.1),j=k.h>k.w*1.35,Z=(j?k.h:k.w)-Q*2,st=(j?k.w:k.h)-Q*2,J=Math.min(Z,9),Mt=Math.min(st,2.5),Pt=64,zt=document.createElement("canvas");zt.width=Math.ceil(J*Pt),zt.height=Math.ceil(Mt*Pt);let Qt=zt.getContext("2d");if(!Qt)return;let ce=Ox(ct,zt.width-10,zt.height-8,Qt);Qt.fillStyle="#263545",Qt.textAlign="center",Qt.textBaseline="middle",Qt.strokeStyle="#eef3f4",Qt.lineWidth=Math.max(1,ce.fontSize*.045),Qt.lineJoin="round",ce.lines.forEach((me,We)=>{let Ve=zt.height/2+(We-(ce.lines.length-1)/2)*ce.lineHeight;Qt.strokeText?.(me,zt.width/2,Ve),Qt.fillText(me,zt.width/2,Ve)});let pe=new us(zt);pe.colorSpace=on;let he=new Tt(new Pn(J,Mt),new an({map:pe,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));he.rotation.set(-Math.PI/2,0,j?Math.PI/2:0),he.position.set(k.x+k.w/2,k.z+.006,k.y+k.h/2),he.renderOrder=2,he.userData={level:M.id,roomLabel:!0,room:u.id,name:ct,surface:k,worldWidth:J,worldHeight:Mt,fontSize:ce.fontSize/Pt,lines:ce.lines},he.userData.duplicate=_.some(me=>me.userData.level===M.id&&me.position.distanceTo(he.position)<.01),E.add(he),_.push(he)};for(let u=0;u<t.levels.length;u++){let M=t.levels[u],E=new _n,k=tt(M);E.userData={id:M.id,rank:u-K,z:M.z},g.set(M.id,E),o.add(E);let ct=new Map;for(let st of[...M.boxes,...t.levels.flatMap(J=>J.id===M.id?[]:J.boxes.filter(Mt=>["stair","landing"].includes(Mt.kind)&&mf(t,M,Mt)).map(Mt=>({...Mt,contextOnly:!0})))]){let J=`${st.color}:${st.kind}:${!!st.contextOnly}`;ct.has(J)||ct.set(J,[]),ct.get(J).push(st)}for(let st of ct.values()){let J=new er(d,D(st[0].color,st[0].kind==="window"),st.length);if(J.frustumCulled=!1,J.userData={boxes:st,level:M.id,faded:new Set},E.add(J),m.push(J),R.push(J),st[0].kind==="wall"){let Mt=new er(d,D(st[0].color,!0),st.length);Mt.frustumCulled=!1,Mt.renderOrder=1,Mt.userData={boxes:st,level:M.id,primary:J,xray:!0},J.userData.fadeMesh=Mt,E.add(Mt),m.push(Mt)}}for(let st of[...M.polygons||[],...t.levels.flatMap(J=>J.id===M.id?[]:(J.polygons||[]).filter(Mt=>mf(t,M,Mt)).map(Mt=>({...Mt,contextOnly:!0})))]){let J=wo(st),Mt=new Tt(J,D(st.color,st.kind==="window"));Mt.position.y=st.z,Mt.userData={level:M.id,stair:st.stair,sourceFloor:st.sourceFloor,door:st.door,contextOnly:!!st.contextOnly,room:st.room,kind:st.kind,shape:st},E.add(Mt),v.push(Mt)}let Q=new fo(new dn(new A(k.minX,M.z+.04,k.minY),new A(k.maxX,M.z+.07,k.maxY)),8176895);Q.visible=!1,Q.material.depthTest=!0,Q.material.transparent=!0,Q.material.opacity=.95,Q.userData.floorHighlight=M.id,E.add(Q),S.push(Q);let j=document.createElement("canvas");j.width=640,j.height=96;let Z=j.getContext("2d");if(Z){Z.fillStyle="#202936",Z.fillRect(0,0,640,96),Z.strokeStyle="#465367",Z.strokeRect(1,1,638,94),Z.fillStyle="#e7effc",Z.font="500 34px system-ui",Z.fillText(`${M.id} \xB7 ${M.z>0?"+":""}${M.z.toFixed(2)} m`,18,38),Z.fillStyle="#c9d4e4",Z.font="30px system-ui",Z.fillText(String(M.name).slice(0,40),18,77,604);let st=new us(j);st.colorSpace=on;let J=new Yr(new tr({map:st,depthTest:!0,depthWrite:!1}));J.position.set(C.minX-w*.65-1,M.z+.2,(k.minY+k.maxY)/2),J.scale.set(w,w*96/640,1),J.userData={level:M.id,floorLabel:!0,labelWidth:230,labelRatio:96/640},E.add(J),x.push(J);let Mt=new Ze(new Ee().setFromPoints([new A(J.position.x+w/2,M.z+.2,J.position.z),new A(k.minX,M.z+.07,J.position.z)]),new Cn({color:8176895,depthTest:!0,transparent:!0,opacity:.9}));Mt.visible=!1,Mt.userData.floorLeader=M.id,E.add(Mt),S.push(Mt)}for(let st of M.rooms||[])B(st,M,E);for(let st of M.annotations||[]){let J=String(st.text||""),Mt=st.fontSize||.45;if(!J)continue;let Pt=Math.min(30,Math.max(Mt,J.length*Mt*.58)),zt=Mt*1.3,Qt=document.createElement("canvas");Qt.width=Math.ceil(Pt*64),Qt.height=Math.ceil(zt*64);let ce=Qt.getContext("2d");if(!ce)continue;ce.font=`${Mt*64}px system-ui,Segoe UI,sans-serif`,ce.fillStyle="#53686d",ce.textAlign="center",ce.textBaseline="middle",ce.fillText(J,Qt.width/2,Qt.height/2,Qt.width);let pe=new us(Qt);pe.colorSpace=on;let he=new Tt(new Pn(Pt,zt),new an({map:pe,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1})),me=M.rooms.find(We=>We.id===st.sourceRoom)||M.rooms.find(We=>st.x>=We.x&&st.x<=We.x+We.w&&st.y>=We.y&&st.y<=We.y+We.h);he.rotation.x=-Math.PI/2,he.position.set(st.x,(me?.z??M.z)+.008,st.y),he.renderOrder=2,he.userData={level:M.id,annotationLabel:!0,annotation:st.id,name:J},E.add(he),_.push(he)}}let G=Math.max(C.maxX-C.minX,C.maxY-C.minY,15)*1.35,X=new uo(G,Math.min(100,Math.ceil(G)),6781842,3160648);X.position.set(U,F,O),X.userData.groundDatum=F,o.add(X),X.renderOrder=-10;for(let u of Array.isArray(X.material)?X.material:[X.material])u.transparent=!1,u.opacity=1,u.depthWrite=!1;let H=0,ft=!1,mt=!0,It=!1,Yt=!0,te=!0,ae=1.15,$t=!0,it=!1,xt=!0,Ft=null,yt=null,kt=[],se="",re=null,N=null,ht=!1,pt="",dt=0,at=!1,vt=g.has(e.activeFloor)?e.activeFloor:b?.id||t.levels[K]?.id,ot=g.get(vt)?.userData.z||0,Et=u=>{let M=g.get(u);return M?M.userData.z+M.userData.rank*H:ot},ee=window.matchMedia?.("(prefers-reduced-motion: reduce)"),Dt=new Set,I=new Vn,y=new gt,W=()=>[...g].filter(([,u])=>u.visible).map(([u])=>u),P=new Set((e.editableFloors||[]).filter(u=>g.has(u))),L=(u="navigation")=>e.onVisibilityChanged?.(W(),yt,u),Ut=null,de=null,Kt=null,ge=null,bt=null,Oe=null,Te=new _n;o.add(Te);let xe=document.createElement("div");xe.style.cssText="position:absolute;left:18px;bottom:18px;padding:8px 12px;background:#172b37;color:#e7b16b;pointer-events:none;display:none",i.append(xe);let Ln=new an({color:15184235,transparent:!0,opacity:.65,depthTest:!1}),Li=new oo({color:15185774,dashSize:.18,gapSize:.12,depthTest:!1}),ws=null,zn=document.createElement("div");zn.dataset.selectionDimensions="true",zn.style.cssText="position:absolute;pointer-events:none;display:none;padding:4px 7px;border-radius:4px;background:#172b37dd;color:#e7b76e;font:13px system-ui",i.append(zn);let To=new an({color:11184810,transparent:!0,opacity:.1,depthTest:!1,depthWrite:!1,side:ln}),Ts=new Cn({color:5493465,depthTest:!1}),Wn=new an({color:5941759,depthTest:!1}),Bt=null,Vt=null,oe=0,le=u=>{if(n?.busy()||window.KERN_MAX_PASSAGE_UI?.altConnectIntent(u)||Be||!u.altKey||bt||Jt||![0,1,2].includes(u.button)||u.button===0&&ge&&ie==="select"&&(Ot(u,ge),I.intersectObjects(Te.children,!1).some(k=>["nw","ne","se","sw"].includes(k.object.userData.edge))))return;if(Bt=u.pointerId,re=null,Dt.clear(),Hn(),St(),oe=performance.now()+500,h.mouseButtons.LEFT=wn.ROTATE,h.mouseButtons.RIGHT=wn.PAN,s.domElement.style.cursor=u.button===2?"ew-resize":"grabbing",u.__viewNavigation=!0,u.preventDefault(),u.button!==2){h.enabled=!0;return}Gt(a.position.clone(),h.target.clone(),!1),Dn(u);let M=a.getWorldDirection(new A),E=Kt?.point.clone()||I.ray.intersectPlane(new $e().setFromNormalAndCoplanarPoint(M,h.target),new A)||h.target.clone();Vt={x:u.clientX,anchor:E,position:a.position.clone(),target:h.target.clone(),distance:a.position.distanceTo(h.target)},h.enabled=!1,s.domElement.setPointerCapture(u.pointerId),u.stopImmediatePropagation()},jt=u=>{if(Bt!==u.pointerId||!Vt)return;u.__viewNavigation=!0,u.preventDefault(),u.stopImmediatePropagation();let M=Vt,E=oi.clamp(M.distance*Math.exp(-(u.clientX-M.x)*.01),h.minDistance,h.maxDistance)/M.distance;Gt(M.position.clone().sub(M.anchor).multiplyScalar(E).add(M.anchor),M.target.clone().sub(M.anchor).multiplyScalar(E).add(M.anchor),!1),yr()},fe=u=>{if(Bt!==u.pointerId)return;let M=!!Vt;u.__viewNavigation=!0,Bt=null,Vt=null,oe=performance.now()+400,h.mouseButtons.LEFT=null,h.mouseButtons.RIGHT=wn.PAN,h.enabled=!Be,window.KERN_TRANSFORM?.syncCursor(),s.domElement.style.cursor="",M&&(u.preventDefault(),u.stopImmediatePropagation(),s.domElement.hasPointerCapture(u.pointerId)&&s.domElement.releasePointerCapture(u.pointerId))};s.domElement.addEventListener("pointerdown",le,!0),s.domElement.addEventListener("pointermove",jt,!0),s.domElement.addEventListener("pointerup",fe,!0),s.domElement.addEventListener("pointercancel",fe,!0),s.domElement.addEventListener("lostpointercapture",fe,!0);let ie="select",Jt=null,we=new _n;we.userData.authorPreview=!0,o.add(we);let He=u=>{if(Bt===u.pointerId||u.__viewNavigation||Be||ie==="select"||u.button!==0)return;if(u.preventDefault(),u.stopImmediatePropagation(),ie==="bridge"){let j=xi(u);j&&window.KERN_BRIDGE_UI?.click(j),Se(),xe.style.display="none";return}if(["door","connect","disconnect"].includes(ie)){let j=cn(u);if(!j)return;ne(j.floor,{preserveEditing:!0}),Jt={connection:!0,pointerId:u.pointerId,floor:j.floor,begin:window.KERN_CONNECTION_3D.begin(ie,j),last:j,clientX:u.clientX,clientY:u.clientY},h.enabled=!1,s.domElement.setPointerCapture(u.pointerId);return}if(!window.KERN_AUTHORING_3D||(Dn(u),Kt?.floor&&!(ie==="stair-route"&&window.KERN_ROUTE_UI?.getDraft().length)&&ne(Kt.floor,{preserveEditing:!0}),!yt))return;let M=t.levels.find(j=>j.id===(Kt?.floor||yt)),E=M.rooms.find(j=>j.id===Kt?.room)||(ge?.isFloor?null:ge),k=(E?.z??M.z)+g.get(M.id).position.y,ct=be(u,k);if(!ct)return;if(ie==="stair-route"){window.KERN_ROUTE_UI?.addPoint(ct,u,E?.id,M.id);return}let Q=window.KERN_AUTHORING_3D.begin(ie,Kt?.floor||yt,ct,E?.id,window.KERN_AUTHORING_3D.width());if(Q.error){je(Q);return}Jt={pointerId:u.pointerId,z:k,begin:Q,floor:yt},h.enabled=!1,s.domElement.setPointerCapture(u.pointerId)},vn=u=>{if(Jt?.connection){if(u.pointerId!==Jt.pointerId)return;u.preventDefault(),u.stopImmediatePropagation(),Jt.last=cn(u,Jt.floor)||Jt.last,Jt.moved=Math.hypot(u.clientX-Jt.clientX,u.clientY-Jt.clientY)>5,Ni(window.KERN_CONNECTION_3D.preview(ie,Jt.last,Jt.moved?Jt.begin.hit:Jt.begin.pending));return}if(!Jt){if(!Be&&Bt===null&&ie==="bridge"){let E=xi(u),k=E&&window.KERN_BRIDGE_UI?.preview(E);k?je(k):(Se(),xe.style.display="none");return}if(!Be&&Bt===null&&["door","connect","disconnect"].includes(ie)){let E=cn(u);E&&Ni(window.KERN_CONNECTION_3D.preview(ie,E));return}if(!Be&&Bt===null&&yt&&["edge-steps","stair-route"].includes(ie)){Dn(u);let E=t.levels.find(j=>j.id===(Kt?.floor||yt)),k=E.rooms.find(j=>j.id===Kt?.room),ct=(k?.z??E.z)+g.get(E.id).position.y,Q=be(u,ct);if(Se(),!Q)return;if(ie==="edge-steps"){let j=window.KERN_AUTHORING_3D.begin("edge-steps",yt,Q,k?.id,window.KERN_AUTHORING_3D.width());if(!j.error){let Z=new Ze(new Ee().setFromPoints([j.edge.a,j.edge.b].map(st=>new A(st[0],ct+.1,st[1]))),Ts);Z.renderOrder=18,we.add(Z)}}else{let j=window.KERN_ROUTE_UI?.preview(Q,u,k?.id,E.id);if(j){j.detail&&je(j);let Z=window.snapSize?.()||.25,st=new Tt(new Pn(Z,Z),To);st.rotation.x=-Math.PI/2,st.position.set(j.point[0],ct+.025,j.point[1]),st.renderOrder=17,we.add(st);let J=new Tt(new ni(.07,10,8),Wn);J.position.set(j.point[0],ct+.1,j.point[1]),J.renderOrder=19,we.add(J)}}}return}if(u.pointerId!==Jt.pointerId)return;if(u.preventDefault(),u.stopImmediatePropagation(),Jt.floor!==yt){Xt();return}let M=be(u,Jt.z);M&&(Jt.next=window.KERN_AUTHORING_3D.candidate(Jt.begin,M,u.ctrlKey),je(Jt.next))},Mn=u=>{if(!Jt||u.pointerId!==Jt.pointerId)return;if(u.preventDefault(),u.stopImmediatePropagation(),Jt.connection){let E=Jt;Jt=null,Se(),xe.style.display="none",h.enabled=!0,s.domElement.hasPointerCapture(u.pointerId)&&s.domElement.releasePointerCapture(u.pointerId),window.KERN_CONNECTION_3D.finish(E.begin,E.last,E.moved);return}let M=Jt.next;Xt(),M&&!M.error&&(Xt(!0),window.KERN_AUTHORING_3D.finish(M))};s.domElement.addEventListener("pointerdown",He,!0),s.domElement.addEventListener("pointermove",vn,!0),s.domElement.addEventListener("pointerup",Mn,!0);let sn=u=>{!n?.busy()&&(!Jt||Jt.pointerId===u.pointerId)&&Xt(!0)};s.domElement.addEventListener("pointercancel",sn,!0);let hn=u=>{Jt?.pointerId===u.pointerId&&Xt()};s.domElement.addEventListener("lostpointercapture",hn,!0);let As=u=>{Bt===u.pointerId||u.__viewNavigation||n?.down(u)&&Gt(a.position.clone(),h.target.clone(),!1)},ai=u=>n?.move(u),Rh=u=>n?.up(u),Ao=u=>{(n?.cancel(u.pointerId)||n?.dragging())&&(u.preventDefault(),u.stopImmediatePropagation())};s.domElement.addEventListener("pointerdown",As,!0),s.domElement.addEventListener("pointermove",ai,!0),s.domElement.addEventListener("pointerup",Rh,!0),s.domElement.addEventListener("pointercancel",Ao,!0),s.domElement.addEventListener("lostpointercapture",Ao,!0);let Ch=u=>{if(Bt===u.pointerId||u.__viewNavigation||Be||u.button!==0||!ge)return;let M=Ot(u,ge),E=I.intersectObjects(Te.children,!1).find(ct=>ct.object.userData.edge);if(!E||(Number.isFinite(E.object.userData.routeZ)&&(M=Ot(u,{...ge,z:E.object.userData.routeZ+(E.object.userData.displayOffset??g.get(ge.floor).position.y)-g.get(ge.floor).position.y})||E.point.clone()),M||(M=E.point.clone()),Dn(u),E.object.userData.edge?.startsWith("route-")&&window.KERN_ROUTE_UI?.selectPoint(Number(E.object.userData.edge.split("-")[2])),window.KERN_ROTATE?.active()&&(!E||!window.KERN_ROTATE.eligibleRoom(ge))))return;let k=null;if(E?.object.userData.edge?.startsWith("rotate-")){let ct=Number(E.object.userData.edge.slice(7));if(k=window.KERN_ROTATE.pivotFor(ge),!k||k.index===ct){window.KERN_ROTATE.choosePivot(ge,"rooms",ct),wt(ge),u.preventDefault(),u.stopImmediatePropagation();return}}bt={rotationPivot:k,start:M.clone(),original:JSON.parse(JSON.stringify(ge)),next:JSON.parse(JSON.stringify(ge)),routeZ:E?.object.userData.routeZ,planeZ:Number.isFinite(E?.object.userData.routeZ)?E.object.userData.routeZ+(E.object.userData.displayOffset??g.get(ge.floor).position.y)-g.get(ge.floor).position.y:ge.z,edge:E?.object.userData.edge==="move"?null:E?.object.userData.edge,clientY:u.clientY,baseHeight:window.KERN_ELEVATION_UI?.handleZ(ge.floor,ge.id)??ge.z,baseGroupY:g.get(ge.floor).position.y,pointerId:u.pointerId},h.enabled=!1,u.preventDefault(),u.stopImmediatePropagation(),s.domElement.setPointerCapture(u.pointerId)},Ph=u=>{if(!bt||bt.pointerId!==u.pointerId)return;let M=Ot(u,{...bt.original,z:bt.planeZ??bt.original.z})||(bt.edge==="elevate"||bt.edge?.startsWith("route-height")?bt.start:null);if(!M)return;if(bt.edge?.startsWith("route-landing-")){let Z=bt.original,st=JSON.parse(JSON.stringify(Z)),J=bt.edge.split("-"),Mt=Number(J[2]),Pt=Number(J[3]),zt=st.routeStair.nodes[Mt].landing[Pt],Qt=window.KERN_ROUTE_STAIRS.point(Z,zt),ce=u.ctrlKey?0:window.snapSize?.()??.25,pe=Qt[0]+M.x-bt.start.x,he=Qt[1]+M.z-bt.start.z;Object.assign(zt,window.KERN_ROUTE_STAIRS.local(Z,[ce?Math.round(pe/ce)*ce:pe,ce?Math.round(he/ce)*ce:he])),window.KERN_ROUTE_STAIRS.simplePolygon(st.routeStair.nodes[Mt].landing.map(me=>window.KERN_ROUTE_STAIRS.point(st,me)))&&(bt.next=st,wt(st)),u.preventDefault(),u.stopImmediatePropagation();return}if(bt.edge?.startsWith("route-")){let Z=bt.original,st=JSON.parse(JSON.stringify(Z)),J=st.routeStair,Mt=Number(bt.edge.split("-").at(-1)),Pt=J.nodes[Mt];if(bt.edge.startsWith("route-height")){let Qt=2*a.position.distanceTo(new A(Z.x+Z.w/2,Z.z+bt.baseGroupY,Z.y+Z.h/2))*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),ce=bt.routeZ+(bt.clientY-u.clientY)*Qt,pe=u.ctrlKey?ce:Math.round(ce*4)/4;window.KERN_ROUTE_STAIRS.setHeight(st,Mt,pe,window.kernPlanner?.getPlan())}else{let Qt=window.KERN_ROUTE_STAIRS.point(Z,Pt),ce=u.ctrlKey?0:window.snapSize?.()??.25,pe=Qt[0]+M.x-bt.start.x,he=Qt[1]+M.z-bt.start.z,me=window.KERN_ROUTE_STAIRS.snapNode(st,Mt,[pe,he],ce,u.ctrlKey,u.shiftKey);window.KERN_ROUTE_STAIRS.moveNode(st,Mt,me,window.kernPlanner?.getPlan()),window.KERN_ROUTE_UI?.attachEndpoint(st,Mt,me)}bt.next=st,wt(st);let zt=window.kernPlanner?.getPlan();if(zt){let Qt=zt.floors[Z.floor]?.rooms.find(ce=>ce.id===Z.id);if(Qt){Object.assign(Qt,st);let ce=window.KERN_ROUTE_STAIRS.build(zt,Z.floor,Z.id);je({detail:ce,fid:Z.floor,summary:ce.warnings[0]?.text||"Editable stair route"})}}u.preventDefault(),u.stopImmediatePropagation();return}if(bt.edge==="elevate"){let Z=bt.original,st=2*a.position.distanceTo(new A(Z.x+Z.w/2,Z.z+bt.baseGroupY,Z.y+Z.h/2))*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),J=bt.baseHeight+(bt.clientY-u.clientY)*st,Mt=u.ctrlKey?0:.25,Pt=Math.max(-150,Math.min(150,Mt?Math.round(J/Mt)*Mt:J));if(bt.next={...Z,z:Pt,__elevation:!0},xe.style.display="block",xe.style.top="auto",xe.style.bottom="18px",xe.style.left="18px",xe.textContent=(Z.isFloor?"Floor":"Surface")+" "+Pt.toFixed(2)+" m \xB7 "+(u.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"),g.get(Z.floor).position.y=bt.baseGroupY,wt(bt.next),Z.isFloor)g.get(Z.floor).position.y=bt.baseGroupY+Pt-Z.z;else{let vr=window.KERN_ELEVATION_UI?.preview(Z.floor,Z.id,Pt),Zn=vr&&window.KERN_ELEVATIONS?.build(vr,Z.floor,Z.id),Mf=Zn?ff(Zn):[{x:Z.x,y:Z.y,w:Z.w,h:Z.h,z:Pt-.18,height:.18}];for(let pn of Mf){let ts,es;if(pn.polygon)ts=wo(pn),es=new Tt(ts,Ln),es.position.y=pn.z+bt.baseGroupY;else if(!Zn&&Z.shape){let Ef=new Ri(window.KERN_SHAPES.points(Z).map(qh=>new gt(qh[0],-qh[1])));ts=new or(Ef,{depth:pn.height,bevelEnabled:!1,steps:1}),ts.rotateX(-Math.PI/2),es=new Tt(ts,Ln),es.position.y=pn.z+bt.baseGroupY}else ts=new Ce(pn.w,pn.height,pn.h),es=new Tt(ts,Ln),es.position.set(pn.x+pn.w/2,pn.z+pn.height/2+bt.baseGroupY,pn.y+pn.h/2);Te.add(es)}Zn&&(xe.textContent=Pt.toFixed(2)+" m \xB7 "+(Zn.ramp?"Ramp \xB7 "+Math.max(...Zn.flights.map(pn=>pn.gradePercent||0)).toFixed(1)+"% grade":Zn.segments[0].risers+" rises \xD7 "+(Zn.metrics.riserMax*100).toFixed(1)+" cm")+" \xB7 "+(u.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"))}let zt=Z.x-.25,Qt=Z.y+Z.h+.25,ce=bt.baseHeight+bt.baseGroupY,pe=Pt+bt.baseGroupY,he=[new A(zt,ce,Qt),new A(zt,pe,Qt)],me=new Ze(new Ee().setFromPoints(he),Li);me.computeLineDistances(),me.renderOrder=16,Te.add(me);for(let vr of[ce,pe]){let Zn=new Ze(new Ee().setFromPoints([new A(zt-.18,vr,Qt),new A(zt+.18,vr,Qt)]),Wn);Zn.renderOrder=16,Te.add(Zn)}let We=new A(zt,(ce+pe)/2,Qt).project(a),Ve=s.domElement.getBoundingClientRect(),qn=Pt-bt.baseHeight;xe.style.bottom="auto",xe.style.left=Math.min(Math.max(8,(We.x+1)*Ve.width/2+12),Math.max(8,Ve.width-260))+"px",xe.style.top=Math.min(Math.max(8,(1-We.y)*Ve.height/2),Math.max(8,Ve.height-60))+"px",xe.textContent=(qn>0?"+":"")+qn.toFixed(2)+" m \xB7 "+xe.textContent,u.preventDefault(),u.stopImmediatePropagation();return}let E=bt.original,k=u.ctrlKey?0:window.snapSize?.()??.5,ct=k?Math.round((M.x-bt.start.x)/k)*k:M.x-bt.start.x,Q=k?Math.round((M.z-bt.start.z)/k)*k:M.z-bt.start.z,j={...E};if(bt.edge?.startsWith("rotate-")){let Z=bt.rotationPivot||{x:E.x+E.w/2,y:E.y+E.h/2},st=Math.atan2(bt.start.z-Z.y,bt.start.x-Z.x),J=window.KERN_ROTATE.delta(E,(Math.atan2(M.z-Z.y,M.x-Z.x)-st)*180/Math.PI,u.shiftKey);window.KERN_SHAPES.rotate(j,J,Z),bt.rotationFeedback={center:Z,start:st,degrees:J,cursor:M.clone()}}else if(bt.edge)bt.edge.includes("e")&&(j.w=Math.max(1,E.w+ct)),bt.edge.includes("s")&&(j.h=Math.max(1,E.h+Q)),bt.edge.includes("w")&&(j.x=Math.min(E.x+E.w-1,E.x+ct),j.w=E.x+E.w-j.x),bt.edge.includes("n")&&(j.y=Math.min(E.y+E.h-1,E.y+Q),j.h=E.y+E.h-j.y);else{j.x+=M.x-bt.start.x,j.y+=M.z-bt.start.z;let Z=18*a.position.distanceTo(M)*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),st=u.ctrlKey&&u.shiftKey&&!u.altKey&&window.KERN_ROOM_SNAP?.translation(j,t.levels.find(J=>J.id===E.floor).rooms,new Set([E.id]),Z);bt.snap=st||null,st?(j.x+=st.dx,j.y+=st.dy):u.ctrlKey||(j.x=E.x+ct,j.y=E.y+Q)}if(bt.edge&&!bt.edge.startsWith("rotate-")&&(u.shiftKey&&!u.ctrlKey||u.altKey)&&window.KERN_TRANSFORM&&Object.assign(j,window.KERN_TRANSFORM.resize(E,bt.edge,ct,Q,{...u,shiftKey:u.shiftKey&&!u.ctrlKey,altKey:u.altKey})),bt.edge&&!bt.edge.startsWith("rotate-")&&u.shiftKey&&u.ctrlKey&&!u.altKey){let Z=bt.edge,st={x:E.x+(Z.includes("e")?E.w:0)+M.x-bt.start.x,y:E.y+(Z.includes("s")?E.h:0)+M.z-bt.start.z},J=18*a.position.distanceTo(M)*Math.tan(a.fov*Math.PI/360)/Math.max(1,s.domElement.getBoundingClientRect().height),Mt=window.KERN_ROOM_SNAP?.point(st,t.levels.find(Pt=>Pt.id===E.floor).rooms,new Set([E.id]),J);bt.snap=Mt||null,Mt&&(Z.includes("e")&&(j.w=Math.max(1,Mt.x-E.x)),Z.includes("s")&&(j.h=Math.max(1,Mt.y-E.y)),Z.includes("w")&&(j.x=Math.min(Mt.x,E.x+E.w-1),j.w=E.x+E.w-j.x),Z.includes("n")&&(j.y=Math.min(Mt.y,E.y+E.h-1),j.h=E.y+E.h-j.y))}if(E.shape&&bt.edge&&!bt.edge.startsWith("rotate-")&&window.KERN_TRANSFORM?.orientedResize&&Object.assign(j,window.KERN_TRANSFORM.orientedResize(E,bt.edge,M.x-bt.start.x,M.z-bt.start.z,u)),bt.next=j,wt(j),bt.rotationFeedback){let Z=bt.rotationFeedback,st=Z.center,J=Math.hypot(Z.cursor.x-st.x,Z.cursor.z-st.y),Mt=Math.min(J,6)*.8,Pt=Z.start+Z.degrees*Math.PI/180,zt=j.z+bt.baseGroupY+.12,Qt=[];for(let he=0,me=Math.max(2,Math.min(160,Math.ceil(Math.abs(Z.degrees)/5)));he<=me;he++){let We=Z.start+(Pt-Z.start)*he/me;Qt.push(new A(st.x+Math.cos(We)*Mt,zt,st.y+Math.sin(We)*Mt))}let ce=[new A(st.x+Math.cos(Z.start)*J,zt,st.y+Math.sin(Z.start)*J),new A(st.x,zt,st.y),new A(st.x+Math.cos(Pt)*J,zt,st.y+Math.sin(Pt)*J)];for(let he of[Qt,ce]){let me=new Ze(new Ee().setFromPoints(he),Li);me.computeLineDistances(),me.renderOrder=15,Te.add(me)}let pe=s.domElement.getBoundingClientRect();xe.style.display="block",xe.style.bottom="auto",xe.style.left=Math.min(Math.max(8,u.clientX-pe.left+16),Math.max(8,pe.width-130))+"px",xe.style.top=Math.max(8,u.clientY-pe.top-38)+"px",xe.textContent=(Z.degrees>0?"+":"")+Z.degrees.toFixed(1)+"\xB0"}if(bt.snap)for(let Z of bt.snap.guides?.length?bt.snap.guides:[bt.snap]){let st=j.z+g.get(j.floor).position.y+.1,J=Z.edge?[Z.edge.a,Z.edge.b]:[[Z.x-.2,Z.y],[Z.x+.2,Z.y],[Z.x,Z.y],[Z.x,Z.y-.2],[Z.x,Z.y+.2]],Mt=new Ze(new Ee().setFromPoints(J.map(Pt=>new A(Pt[0],st,Pt[1]))),Ts);Mt.renderOrder=12,Te.add(Mt)}u.preventDefault(),u.stopImmediatePropagation()},Ih=u=>{if(!bt||bt.pointerId!==u.pointerId)return;let M=bt;bt=null,Se(),g.get(M.original.floor).position.y=M.baseGroupY,xe.style.display="none",h.enabled=!0,u.preventDefault(),u.stopImmediatePropagation(),s.domElement.hasPointerCapture(u.pointerId)&&s.domElement.releasePointerCapture(u.pointerId),M.next.__elevation||["x","y","w","h"].some(E=>M.next[E]!==M.original[E])||JSON.stringify(M.next.shape)!==JSON.stringify(M.original.shape)||JSON.stringify(M.next.routeStair)!==JSON.stringify(M.original.routeStair)?e.onRoomEdit?.(M.original.floor,M.original.id,M.next):M.edge?.startsWith("rotate-")&&(window.KERN_ROTATE.choosePivot(M.original,"rooms",Number(M.edge.slice(7))),wt(M.original))},Yn=()=>{Se(),bt&&(g.get(bt.original.floor).position.y=bt.baseGroupY),xe.style.display="none",bt=null,h.enabled=!Be,ge&&wt(ge)};s.domElement.addEventListener("pointerdown",Ch,!0),s.domElement.addEventListener("pointermove",Ph,!0),s.domElement.addEventListener("pointerup",Ih,!0),s.domElement.addEventListener("pointercancel",Yn,!0),s.domElement.addEventListener("lostpointercapture",Yn,!0);let En=null,Rs=document.createElement("div");Rs.style.cssText="position:absolute;border:1px solid #79b8ff;background:#79b8ff20;pointer-events:none;display:none;z-index:25",i.append(Rs);let Hn=()=>{En=null,Rs.style.display="none"},Dh=u=>{Be||Bt!==null||u.altKey||u.button!==0||bt||ie!=="select"||(En={id:u.pointerId,x:u.clientX,y:u.clientY,shift:u.shiftKey,subtract:u.ctrlKey||u.metaKey,previous:Oe?.ids||[]})},Lh=u=>{if(!En||En.id!==u.pointerId||Math.hypot(u.clientX-En.x,u.clientY-En.y)<5)return;let M=s.domElement.getBoundingClientRect();En.moved=!0,Rs.style.display="block",Object.assign(Rs.style,{left:Math.min(u.clientX,En.x)-M.left+"px",top:Math.min(u.clientY,En.y)-M.top+"px",width:Math.abs(u.clientX-En.x)+"px",height:Math.abs(u.clientY-En.y)+"px"})},Nh=u=>{if(!En||En.id!==u.pointerId)return;let M=En;if(Hn(),!M.moved)return;u.preventDefault(),Dt.clear(),re=null;let E=s.domElement.getBoundingClientRect(),k=Math.min(M.x,u.clientX),ct=Math.max(M.x,u.clientX),Q=Math.min(M.y,u.clientY),j=Math.max(M.y,u.clientY),Z=yt||vt,st=t.levels.find(Pt=>Pt.id===Z);if(!st)return;a.updateMatrixWorld(!0);let J=st.rooms.filter(Pt=>{let zt=(window.KERN_SHAPES?.points(Pt)||[[Pt.x,Pt.y],[Pt.x+Pt.w,Pt.y],[Pt.x+Pt.w,Pt.y+Pt.h],[Pt.x,Pt.y+Pt.h]]).flatMap(pe=>[Pt.z,Pt.z+(Pt.height||0)].map(he=>new A(pe[0],he+g.get(Z).position.y,pe[1]).project(a))).filter(pe=>pe.z>=-1&&pe.z<=1);if(!zt.length)return!1;let Qt=zt.map(pe=>(pe.x+1)*E.width/2+E.left),ce=zt.map(pe=>(1-pe.y)*E.height/2+E.top);return Math.min(...Qt)<=ct&&Math.max(...Qt)>=k&&Math.min(...ce)<=j&&Math.max(...ce)>=Q}).map(Pt=>Pt.id),Mt=M.subtract?M.previous.filter(Pt=>!J.includes(Pt)):M.shift?[...new Set([...M.previous,...J])]:J;yt||ne(Z,{preserveEditing:!0}),T(Z,Mt),e.onRoomsSelect?.(Z,Mt)};s.domElement.addEventListener("pointerdown",Dh,!0),s.domElement.addEventListener("pointermove",Lh,!0),s.domElement.addEventListener("pointerup",Nh,!0),s.domElement.addEventListener("pointercancel",Hn,!0),s.domElement.addEventListener("lostpointercapture",Hn,!0);let gf=u=>{Be||Bt===u.pointerId||u.__viewNavigation||(Dt.add(u.pointerId),Dt.size>1?re=null:re=u.button===0?{id:u.pointerId,x:u.clientX,y:u.clientY,moved:!1}:null)},_f=u=>{if(!Be){if(re&&Math.hypot(u.clientX-re.x,u.clientY-re.y)>5&&(re.moved=!0),Dt.size||u.buttons){s.domElement.title="",Rt(null);return}Rt(Dn(u))}},xf=u=>{if(Be||u.__viewNavigation)return;let M=re&&u.pointerId===re.id&&!re.moved&&Math.hypot(u.clientX-re.x,u.clientY-re.y)<=5&&Dt.size===1;if(Dt.delete(u.pointerId),re=null,M){let E=Dn(u);if(E){if(e.onFloorSelect){let ct=yt===E&&P.size===1&&P.has(E)&&!Kt?.floorSurface;e.onFloorSelect(E,{additive:!!u.shiftKey}),!u.shiftKey&&ct&&(Kt?.door?e.onDoorSelect?.(E,Kt.door):Kt?.room&&e.onRoomSelect?.(E,Kt.room));return}let k=Kt?.floorSurface||Kt?.roomLabel&&(u.shiftKey||yt!==E||!P.has(E));u.shiftKey&&(k||!Kt?.room&&!Kt?.door)?e.onFloorScopeToggle?e.onFloorScopeToggle(E):Ie(E,!0):k?ne(E):(ne(E,{preserveEditing:!!Kt?.room||!!Kt?.door}),Kt?.door?e.onDoorSelect?.(E,Kt.door):Kt?.room&&e.onRoomSelect?.(E,Kt.room))}}},Yl=()=>{n?.cancel(),Hn(),Bt=null,Vt=null,s.domElement.style.cursor="",h.mouseButtons.LEFT=null,h.mouseButtons.RIGHT=wn.PAN,Xt(!0),Yn(),Dt.clear(),re=null,ht=!1,St(),Rt(null)};window.addEventListener("blur",Yl);let yf=r;r=()=>{window.removeEventListener("blur",Yl),yf()};let Uh={pointerdown:gf,pointermove:_f,pointerup:xf,pointercancel:u=>{Dt.delete(u.pointerId),re=null,Rt(null)},pointerleave:()=>{Dt.size||(s.domElement.title="",Rt(null))},keydown:u=>{if(!window.KERN_PRIMITIVE_UI?.handleKey?.(u)){if(u.key==="Escape"&&En){Hn(),re=null,Dt.clear(),u.preventDefault(),u.stopPropagation();return}if(u.key==="Escape"&&(Jt||ie!=="select")){u.preventDefault(),u.stopImmediatePropagation(),Xt(!0);return}if(u.key==="Escape"&&bt){u.preventDefault(),u.stopImmediatePropagation(),Yn();return}u.key==="Escape"&&yt?(u.preventDefault(),u.stopPropagation(),_t()):yt&&["ArrowUp","ArrowDown"].includes(u.key)&&(u.preventDefault(),u.stopPropagation(),Bn(u.key==="ArrowUp"?1:-1))}},contextmenu:u=>{u.preventDefault(),!(Be||u.altKey||performance.now()<oe)&&(Dn(u),Kt&&e.onContext?.({floor:Kt.floor,room:Kt.room,x:Kt.point.x,y:Kt.point.z,z:t.levels.find(M=>M.id===Kt.floor)?.rooms.find(M=>M.id===Kt.room)?.z??t.levels.find(M=>M.id===Kt.floor)?.z??Kt.point.y,clientX:u.clientX,clientY:u.clientY}))}};for(let[u,M]of Object.entries(Uh))s.domElement.addEventListener(u,M);let Fh=()=>{if(ft)return;let u=Math.max(1,i.clientWidth),M=Math.max(1,i.clientHeight);s.setSize(u,M,!1),a.aspect=u/M,a.updateProjectionMatrix(),se=""},Oh=()=>{St(),ht=!0},Bh=()=>{ht=!1,dt=performance.now(),at=it};h.addEventListener("start",Oh),h.addEventListener("end",Bh);let zh=new ResizeObserver(Fh),Hh=u=>{u.preventDefault(),e.onContextLost?.()};s.domElement.addEventListener("webglcontextlost",Hh);let Be=!1,Qi=!1,An=null,Cs=null,Ro=0,kh=0,Vh=!0,Ui=new co(16773074,55,35,Math.PI/7,.65,1.3);Ui.visible=!1,o.add(Ui),o.add(Ui.target);let Fi=new _n,Gh=[...b?.rooms||[],...t.levels.filter(u=>u.id!==b?.id).flatMap(u=>u.rooms.filter(M=>M.groundSurface||M.localSteps&&t.stairs.some(E=>E.localSteps&&E.floorId===u.id&&E.roomId===M.id&&Math.min(...E.stops.map(k=>k.z))<=F+.2&&Math.max(...E.stops.map(k=>k.z))>=F-.2)))],Wh={x:U-(G+50)/2,y:O-(G+50)/2,w:G+50,h:G+50};if(t.shapeAware&&window.KERN_SHAPES){let u=window.KERN_SHAPES,M=u.difference(u.multi(Wh),Gh.filter(E=>E.groundSurface||E.localSteps||!["courtyard","terrace"].includes(E.type)).map(E=>E.routeStair&&t.stairs.find(k=>k.roomId===E.id)?.footprintGeometry||u.multi(E)));for(let E of M){let k=new Ri(E[0].map(Q=>new gt(Q[0],-Q[1])));for(let Q of E.slice(1))k.holes.push(new qi(Q.map(j=>new gt(j[0],-j[1]))));let ct=new Tt(new ro(k),D("#535c62"));ct.rotation.x=-Math.PI/2,ct.position.y=F-.02,Fi.add(ct)}}else for(let u of window.BuildingPreviewGeometry.subtractAll(Wh,Gh.filter(M=>M.groundSurface||M.localSteps||!["courtyard","terrace"].includes(M.type)))){let M=new Tt(new Pn(u.w,u.h),D("#535c62"));M.rotation.x=-Math.PI/2,M.position.set(u.x+u.w/2,F-.02,u.y+u.h/2),Fi.add(M)}return Fi.visible=!1,o.add(Fi),n=df({scene:o,camera:a,renderer:s,controls:h,groups:g,data:t,prismGeometry:wo,enabled:()=>!Be&&ie==="select",canNavigate:()=>!Be,surfaceHit:u=>(Dn(u,{physicalOnly:!0}),Kt),onSelect:(u,M,E)=>window.KERN_PRIMITIVE_UI?.select(u,M,E),onEditMany:(u,M)=>window.KERN_PRIMITIVE_UI?.editMany(u,M),onEdit:(u,M,E,k,ct)=>window.KERN_PRIMITIVE_UI?.edit(u,M,E,k,ct)}),r=Yh,zh.observe(i),Fh(),rt(),e.viewState?Zl(e.viewState):Wt(),s.setAnimationLoop(()=>{if(!ft){if(n?.sync(),Be){Xh(),An?.fly&&lt(),Nt(),s.render(o,a);return}qt()||h.update(),yr(),n?.updateBounds(),lt(),Nt(),s.render(o,a)}}),{primitivePlacement:(u,M,E)=>n?.placement(u,M,E),previewWall:(u,M)=>n?.previewWall(u,M),setPrimitiveMode:u=>n?.setMode(u),cancelPrimitive:()=>n?.cancel(),primitiveDragging:()=>n?.dragging(),cameraPose(){let u=a.getWorldDirection(new A);return{x:a.position.x,y:a.position.z,z:a.position.y,yaw:Math.atan2(-u.x,-u.z),pitch:Math.asin(Math.max(-1,Math.min(1,u.y))),fov:a.fov,roll:new fn().setFromQuaternion(a.quaternion,"YXZ").z}},setAuthoringMode:ke,cancelAuthoring:()=>Xt(!0),cancelEdit:Yn,getOrbitViewState(){return Be&&Cs?JSON.parse(JSON.stringify(Cs)):ql()},applyFloorState:Y,selectRoom:Xn,selectRooms:T,selectObjects:et,selectFloors:nt,setEditableFloors:Lt,activateFloor:ne,chooseFloor:Ie,frameSelection:q,setWalk:vf,fit:Wt,dispose:Yh,showAll:_t,isolate:Zt,hoverFloor:Rt,adjacentFloor:Bn,getViewState:ql,getZoom:Ct,restoreViewState:Zl,syncActiveFloor:Pe,zoomBy(u){if(!Number.isFinite(u)||u<=0)return;let M=a.position.clone().sub(h.target),E=oi.clamp(M.length()*u,h.minDistance,h.maxDistance);Gt(h.target.clone().add(M.normalize().multiplyScalar(E)),h.target,!1)},setGrid(u){xt=!!u,X.visible=xt},getFocusedFloor(){return yt},setFloor(u,M){if(e.onFloorVisibility)return e.onFloorVisibility({id:u,visible:M});let E=g.get(u);if(E){if(St(),E.visible=!!M,yt===u&&!M&&(yt=W()[0]||null),!yt&&M&&(yt=u),!M&&ge?.floor===u){let k=ge.isFloor?Oe:null;Xn(null,null),k&&(Oe=k)}!M&&Oe?.objects&&et(Oe.objects.filter(k=>k.floor!==u)),Rt(null),rt(),lt(!0),L("visibility")}},setExplode(u){let M=Math.max(0,Math.min(12,Number(u)||0));if(M===H)return;let E=Et(vt);H=M,Rt(null),rt(),yt?At(yt,!!N):(St(),ot+=Et(vt)-E),lt(!0)},setSlabs(u){Yt=!!u,rt(),lt(!0)},setCeilings(u){It=!!u,rt(),lt(!0)},setWalls(u){mt=!!u,rt(),lt(!0)},setCutaway(u){te=!!u,rt(),lt(!0)},setCutHeight(u){let M=Number(u);Number.isFinite(M)&&(ae=Math.max(.4,Math.min(2.4,M)),rt(),lt(!0))},setLabels(u){$t=!!u,rt(),lt(!0)},setXray(u){it=!!u,rt(),lt(!0)},png(){return lt(!0),s.render(o,a),new Promise((u,M)=>s.domElement.toBlob(E=>E?u(E):M(Error("Could not create this image.")),"image/png"))}}}catch(o){try{r()}catch{}throw o}}window.Building3D={mount:Bx,version:"180"};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
