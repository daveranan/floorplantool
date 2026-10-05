(()=>{var Tn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nu=0,Oc=1,Uu=2;var Bc=1,Fu=2,mi=3,bi=0,An=1,cn=2,Ci=0,os=1,zc=2,Hc=3,kc=4,Ou=5,Vi=100,Bu=101,zu=102,Hu=103,ku=104,Vu=200,Gu=201,Wu=202,Xu=203,ca=204,ha=205,Yu=206,qu=207,Zu=208,Ku=209,Ju=210,$u=211,ju=212,Qu=213,ed=214,Wa=0,Xa=1,Ya=2,as=3,qa=4,Za=5,Ka=6,Ja=7,Vc=0,td=1,nd=2,Pi=0,id=1,sd=2,rd=3,od=4,ad=5,ld=6,cd=7;var Gc=300,gs=301,_s=302,$a=303,ja=304,mo=306,ua=1e3,ki=1001,da=1002,In=1003,hd=1004;var go=1005;var ti=1006,Qa=1007;var Zi=1008;var si=1009,Wc=1010,Xc=1011,hr=1012,el=1013,Ki=1014,ri=1015,ur=1016,tl=1017,nl=1018,dr=1020,Yc=35902,qc=35899,Zc=1021,Kc=1022,Wn=1023,Ks=1026,fr=1027,il=1028,sl=1029,Jc=1030,rl=1031;var ol=1033,_o=33776,xo=33777,yo=33778,vo=33779,al=35840,ll=35841,cl=35842,hl=35843,ul=36196,dl=37492,fl=37496,pl=37808,ml=37809,gl=37810,_l=37811,xl=37812,yl=37813,vl=37814,Ml=37815,El=37816,Sl=37817,bl=37818,wl=37819,Tl=37820,Al=37821,Rl=36492,Cl=36494,Pl=36495,Il=36283,Dl=36284,Ll=36285,Nl=36286;var Or=2300,fa=2301,la=2302,wc=2400,Tc=2401,Ac=2402;var ud=3200,dd=3201;var $c=0,fd=1,Ii="",an="srgb",ls="srgb-linear",Br="linear",Ot="srgb";var rs=7680;var Rc=519,pd=512,md=513,gd=514,jc=515,_d=516,xd=517,yd=518,vd=519,pa=35044;var Qc="300 es",ei=2e3,zr=2001;var ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=1234567,qs=Math.PI/180,cs=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function eh(i,e){return(i%e+e)%e}function Pf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function If(i,e,t){return i!==e?(t-i)/(e-i):0}function Nr(i,e,t){return(1-t)*i+t*e}function Df(i,e,t,n){return Nr(i,e,1-Math.exp(-t*n))}function Lf(i,e=1){return e-Math.abs(eh(i,e*2)-e)}function Nf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Uf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ff(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Of(i,e){return i+Math.random()*(e-i)}function Bf(i){return i*(.5-Math.random())}function zf(i){i!==void 0&&(eu=i);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hf(i){return i*qs}function kf(i){return i*cs}function Vf(i){return(i&i-1)===0&&i!==0}function Gf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xf(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),d=o((e+n)/2),p=r((e-n)/2),u=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*d,c*p,c*u,a*l);break;case"YZY":i.set(c*u,a*d,c*p,a*l);break;case"ZXZ":i.set(c*p,c*u,a*d,a*l);break;case"XZX":i.set(a*d,c*_,c*m,a*l);break;case"YXY":i.set(c*m,a*d,c*_,a*l);break;case"ZYZ":i.set(c*_,c*m,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var oi={DEG2RAD:qs,RAD2DEG:cs,generateUUID:hi,clamp:vt,euclideanModulo:eh,mapLinear:Pf,inverseLerp:If,lerp:Nr,damp:Df,pingpong:Lf,smoothstep:Nf,smootherstep:Uf,randInt:Ff,randFloat:Of,randFloatSpread:Bf,seededRandom:zf,degToRad:Hf,radToDeg:kf,isPowerOfTwo:Vf,ceilPowerOfTwo:Gf,floorPowerOfTwo:Wf,setQuaternionFromProperEuler:Xf,normalize:Ft,denormalize:Qn},Ee=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],p=n[s+3],u=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(p!==x||c!==u||l!==m||d!==_){let f=1-a,g=c*u+l*m+d*_+p*x,R=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){let D=Math.sqrt(S),C=Math.atan2(D,g*R);f=Math.sin(f*C)/D,a=Math.sin(a*C)/D}let v=a*R;if(c=c*f+u*v,l=l*f+m*v,d=d*f+_*v,p=p*f+x*v,f===1-a){let D=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=D,l*=D,d*=D,p*=D}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],p=r[o],u=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+d*p+c*m-l*u,e[t+1]=c*_+d*u+l*p-a*m,e[t+2]=l*_+d*m+a*u-c*p,e[t+3]=d*_-a*p-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),p=a(r/2),u=c(n/2),m=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=u*d*p+l*m*_,this._y=l*m*p-u*d*_,this._z=l*d*_+u*m*p,this._w=l*d*p-u*m*_;break;case"YXZ":this._x=u*d*p+l*m*_,this._y=l*m*p-u*d*_,this._z=l*d*_-u*m*p,this._w=l*d*p+u*m*_;break;case"ZXY":this._x=u*d*p-l*m*_,this._y=l*m*p+u*d*_,this._z=l*d*_+u*m*p,this._w=l*d*p-u*m*_;break;case"ZYX":this._x=u*d*p-l*m*_,this._y=l*m*p+u*d*_,this._z=l*d*_-u*m*p,this._w=l*d*p+u*m*_;break;case"YZX":this._x=u*d*p+l*m*_,this._y=l*m*p+u*d*_,this._z=l*d*_-u*m*p,this._w=l*d*p-u*m*_;break;case"XZY":this._x=u*d*p-l*m*_,this._y=l*m*p-u*d*_,this._z=l*d*_+u*m*p,this._w=l*d*p+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],p=t[10],u=n+a+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>p){let m=2*Math.sqrt(1+n-a-p);this._w=(d-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>p){let m=2*Math.sqrt(1+a-n-p);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+d)/m}else{let m=2*Math.sqrt(1+p-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),d=Math.atan2(l,a),p=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=o*p+this._w*u,this._x=n*p+this._x*u,this._y=s*p+this._y*u,this._z=r*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),d=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+c*l+o*p-a*d,this.y=n+c*d+a*l-r*p,this.z=s+c*p+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$l=new T,tu=new Bt,pt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],p=n[7],u=n[2],m=n[5],_=n[8],x=s[0],f=s[3],g=s[6],R=s[1],S=s[4],v=s[7],D=s[2],C=s[5],U=s[8];return r[0]=o*x+a*R+c*D,r[3]=o*f+a*S+c*C,r[6]=o*g+a*v+c*U,r[1]=l*x+d*R+p*D,r[4]=l*f+d*S+p*C,r[7]=l*g+d*v+p*U,r[2]=u*x+m*R+_*D,r[5]=u*f+m*S+_*C,r[8]=u*g+m*v+_*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],p=d*o-a*l,u=a*c-d*r,m=l*r-o*c,_=t*p+n*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=p*x,e[1]=(s*l-d*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(d*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jl.makeScale(e,t)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jl=new pt;function th(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Md(){let i=Hr("canvas");return i.style.display="block",i}var nu={};function Js(i){i in nu||(nu[i]=!0,console.warn(i))}function Ed(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var iu=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yf(){let i={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ot&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ot&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ls]:{primaries:e,whitePoint:n,transfer:Br,toXYZ:iu,fromXYZ:su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:n,transfer:Ot,toXYZ:iu,fromXYZ:su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}var At=Yf();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,ma=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=Hr("canvas")),Ps.width=e.width,Ps.height=e.height;let s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qf=0,$s=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ql(s[o].image)):r.push(Ql(s[o]))}else r=Ql(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ql(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zf=0,ec=new T,wn=class i extends ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ki,s=ki,r=ti,o=Zi,a=Wn,c=si,l=i.DEFAULT_ANISOTROPY,d=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=hi(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ec).x}get height(){return this.source.getSize(ec).y}get depth(){return this.source.getSize(ec).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Gc;wn.DEFAULT_ANISOTROPY=1;var Zt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],p=c[8],u=c[1],m=c[5],_=c[9],x=c[2],f=c[6],g=c[10];if(Math.abs(d-u)<.01&&Math.abs(p-x)<.01&&Math.abs(_-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+x)<.1&&Math.abs(_+f)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,v=(m+1)/2,D=(g+1)/2,C=(d+u)/4,U=(p+x)/4,N=(_+f)/4;return S>v&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=U/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=N/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=U/r,s=N/r),this.set(n,s,r,t),this}let R=Math.sqrt((f-_)*(f-_)+(p-x)*(p-x)+(u-d)*(u-d));return Math.abs(R)<.001&&(R=1),this.x=(f-_)/R,this.y=(p-x)/R,this.z=(u-d)/R,this.w=Math.acos((l+m+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ga=class extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new wn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends ga{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},kr=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _a=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Do.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(e.matrixWorld),this.union(Do)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),Lo.subVectors(this.max,Sr),Is.subVectors(e.a,Sr),Ds.subVectors(e.b,Sr),Ls.subVectors(e.c,Sr),Ui.subVectors(Ds,Is),Fi.subVectors(Ls,Ds),ts.subVectors(Is,Ls);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ts.z,ts.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ts.z,0,-ts.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ts.y,ts.x,0];return!tc(t,Is,Ds,Ls,Lo)||(t=[1,0,0,0,1,0,0,0,1],!tc(t,Is,Ds,Ls,Lo))?!1:(No.crossVectors(Ui,Fi),t=[No.x,No.y,No.z],tc(t,Is,Ds,Ls,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xi=[new T,new T,new T,new T,new T,new T,new T,new T],Jn=new T,Do=new dn,Is=new T,Ds=new T,Ls=new T,Ui=new T,Fi=new T,ts=new T,Sr=new T,Lo=new T,No=new T,ns=new T;function tc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ns.fromArray(i,r);let a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),c=e.dot(ns),l=t.dot(ns),d=n.dot(ns);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var Kf=new dn,br=new T,nc=new T,wi=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(nc)),this.expandByPoint(br.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yi=new T,ic=new T,Uo=new T,Oi=new T,sc=new T,Fo=new T,rc=new T,Gi=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ic.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(ic);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Uo),a=Oi.dot(this.direction),c=-Oi.dot(Uo),l=Oi.lengthSq(),d=Math.abs(1-o*o),p,u,m,_;if(d>0)if(p=o*c-a,u=o*a-c,_=r*d,p>=0)if(u>=-_)if(u<=_){let x=1/d;p*=x,u*=x,m=p*(p+o*u+2*a)+u*(o*p+u+2*c)+l}else u=r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*c)+l;else u=-r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*c)+l;else u<=-_?(p=Math.max(0,-(-o*r+a)),u=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+u*(u+2*c)+l):u<=_?(p=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(p=Math.max(0,-(o*r+a)),u=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+u*(u+2*c)+l);else u=o>0?-r:r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ic).addScaledVector(Uo,u),m}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,s,r){sc.subVectors(t,e),Fo.subVectors(n,e),rc.crossVectors(sc,Fo);let o=this.direction.dot(rc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);let c=a*this.direction.dot(Fo.crossVectors(Oi,Fo));if(c<0)return null;let l=a*this.direction.dot(sc.cross(Oi));if(l<0||c+l>o)return null;let d=-a*Oi.dot(rc);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class i{constructor(e,t,n,s,r,o,a,c,l,d,p,u,m,_,x,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,d,p,u,m,_,x,f)}set(e,t,n,s,r,o,a,c,l,d,p,u,m,_,x,f){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=d,g[10]=p,g[14]=u,g[3]=m,g[7]=_,g[11]=x,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=o*d,m=o*p,_=a*d,x=a*p;t[0]=c*d,t[4]=-c*p,t[8]=l,t[1]=m+_*l,t[5]=u-x*l,t[9]=-a*c,t[2]=x-u*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*d,m=c*p,_=l*d,x=l*p;t[0]=u+x*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*p,t[5]=o*d,t[9]=-a,t[2]=m*a-_,t[6]=x+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*d,m=c*p,_=l*d,x=l*p;t[0]=u-x*a,t[4]=-o*p,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*d,t[9]=x-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*d,m=o*p,_=a*d,x=a*p;t[0]=c*d,t[4]=_*l-m,t[8]=u*l+x,t[1]=c*p,t[5]=x*l+u,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,m=o*l,_=a*c,x=a*l;t[0]=c*d,t[4]=x-u*p,t[8]=_*p+m,t[1]=p,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=m*p+_,t[10]=u-x*p}else if(e.order==="XZY"){let u=o*c,m=o*l,_=a*c,x=a*l;t[0]=c*d,t[4]=-p,t[8]=l*d,t[1]=u*p+x,t[5]=o*d,t[9]=m*p-_,t[2]=_*p-m,t[6]=a*d,t[10]=x*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jf,e,$f)}lookAt(e,t,n){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Bi.crossVectors(n,Un),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Bi.crossVectors(n,Un)),Bi.normalize(),Oo.crossVectors(Un,Bi),s[0]=Bi.x,s[4]=Oo.x,s[8]=Un.x,s[1]=Bi.y,s[5]=Oo.y,s[9]=Un.y,s[2]=Bi.z,s[6]=Oo.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],p=n[5],u=n[9],m=n[13],_=n[2],x=n[6],f=n[10],g=n[14],R=n[3],S=n[7],v=n[11],D=n[15],C=s[0],U=s[4],N=s[8],w=s[12],b=s[1],F=s[5],q=s[9],$=s[13],Q=s[2],O=s[6],V=s[10],W=s[14],z=s[3],he=s[7],xe=s[11],ae=s[15];return r[0]=o*C+a*b+c*Q+l*z,r[4]=o*U+a*F+c*O+l*he,r[8]=o*N+a*q+c*V+l*xe,r[12]=o*w+a*$+c*W+l*ae,r[1]=d*C+p*b+u*Q+m*z,r[5]=d*U+p*F+u*O+m*he,r[9]=d*N+p*q+u*V+m*xe,r[13]=d*w+p*$+u*W+m*ae,r[2]=_*C+x*b+f*Q+g*z,r[6]=_*U+x*F+f*O+g*he,r[10]=_*N+x*q+f*V+g*xe,r[14]=_*w+x*$+f*W+g*ae,r[3]=R*C+S*b+v*Q+D*z,r[7]=R*U+S*F+v*O+D*he,r[11]=R*N+S*q+v*V+D*xe,r[15]=R*w+S*$+v*W+D*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],p=e[6],u=e[10],m=e[14],_=e[3],x=e[7],f=e[11],g=e[15];return _*(+r*c*p-s*l*p-r*a*u+n*l*u+s*a*m-n*c*m)+x*(+t*c*m-t*l*u+r*o*u-s*o*m+s*l*d-r*c*d)+f*(+t*l*p-t*a*m-r*o*p+n*o*m+r*a*d-n*l*d)+g*(-s*a*d-t*c*p+t*a*u+s*o*p-n*o*u+n*c*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],p=e[9],u=e[10],m=e[11],_=e[12],x=e[13],f=e[14],g=e[15],R=p*f*l-x*u*l+x*c*m-a*f*m-p*c*g+a*u*g,S=_*u*l-d*f*l-_*c*m+o*f*m+d*c*g-o*u*g,v=d*x*l-_*p*l+_*a*m-o*x*m-d*a*g+o*p*g,D=_*p*c-d*x*c-_*a*u+o*x*u+d*a*f-o*p*f,C=t*R+n*S+s*v+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=R*U,e[1]=(x*u*r-p*f*r-x*s*m+n*f*m+p*s*g-n*u*g)*U,e[2]=(a*f*r-x*c*r+x*s*l-n*f*l-a*s*g+n*c*g)*U,e[3]=(p*c*r-a*u*r-p*s*l+n*u*l+a*s*m-n*c*m)*U,e[4]=S*U,e[5]=(d*f*r-_*u*r+_*s*m-t*f*m-d*s*g+t*u*g)*U,e[6]=(_*c*r-o*f*r-_*s*l+t*f*l+o*s*g-t*c*g)*U,e[7]=(o*u*r-d*c*r+d*s*l-t*u*l-o*s*m+t*c*m)*U,e[8]=v*U,e[9]=(_*p*r-d*x*r-_*n*m+t*x*m+d*n*g-t*p*g)*U,e[10]=(o*x*r-_*a*r+_*n*l-t*x*l-o*n*g+t*a*g)*U,e[11]=(d*a*r-o*p*r-d*n*l+t*p*l+o*n*m-t*a*m)*U,e[12]=D*U,e[13]=(d*x*s-_*p*s+_*n*u-t*x*u-d*n*f+t*p*f)*U,e[14]=(_*a*s-o*x*s-_*n*c+t*x*c+o*n*f-t*a*f)*U,e[15]=(o*p*s-d*a*s+d*n*c-t*p*c-o*n*u+t*a*u)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,p=a+a,u=r*l,m=r*d,_=r*p,x=o*d,f=o*p,g=a*p,R=c*l,S=c*d,v=c*p,D=n.x,C=n.y,U=n.z;return s[0]=(1-(x+g))*D,s[1]=(m+v)*D,s[2]=(_-S)*D,s[3]=0,s[4]=(m-v)*C,s[5]=(1-(u+g))*C,s[6]=(f+R)*C,s[7]=0,s[8]=(_+S)*U,s[9]=(f-R)*U,s[10]=(1-(u+x))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ns.set(s[0],s[1],s[2]).length(),o=Ns.set(s[4],s[5],s[6]).length(),a=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$n.copy(this);let l=1/r,d=1/o,p=1/a;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=d,$n.elements[5]*=d,$n.elements[6]*=d,$n.elements[8]*=p,$n.elements[9]*=p,$n.elements[10]*=p,t.setFromRotationMatrix($n),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ei,c=!1){let l=this.elements,d=2*r/(t-e),p=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s),_,x;if(c)_=r/(o-r),x=o*r/(o-r);else if(a===ei)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===zr)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ei,c=!1){let l=this.elements,d=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s),_,x;if(c)_=1/(o-r),x=o/(o-r);else if(a===ei)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===zr)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ns=new T,$n=new Rt,Jf=new T(0,0,0),$f=new T(1,1,1),Bi=new T,Oo=new T,Un=new T,ru=new Rt,ou=new Bt,fn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],p=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jf=0,au=new T,Us=new Bt,vi=new Rt,Bo=new T,wr=new T,Qf=new T,ep=new Bt,lu=new T(1,0,0),cu=new T(0,1,0),hu=new T(0,0,1),uu={type:"added"},tp={type:"removed"},Fs={type:"childadded",child:null},oc={type:"childremoved",child:null},Dt=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new fn,n=new Bt,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new pt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(wr,Bo,this.up):vi.lookAt(Bo,wr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(vi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tp),oc.child=e,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),p=o(e.shapes),u=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new T(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new T,Mi=new T,ac=new T,Ei=new T,Os=new T,Bs=new T,du=new T,lc=new T,cc=new T,hc=new T,uc=new Zt,dc=new Zt,fc=new Zt,li=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jn.subVectors(s,t),Mi.subVectors(n,t),ac.subVectors(e,t);let o=jn.dot(jn),a=jn.dot(Mi),c=jn.dot(ac),l=Mi.dot(Mi),d=Mi.dot(ac),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;let u=1/p,m=(l*c-a*d)*u,_=(o*d-a*c)*u;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(o,Ei.y),c.addScaledVector(a,Ei.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return uc.setScalar(0),dc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(e,t),dc.fromBufferAttribute(e,n),fc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(uc,r.x),o.addScaledVector(dc,r.y),o.addScaledVector(fc,r.z),o}static isFrontFacing(e,t,n,s){return jn.subVectors(n,t),Mi.subVectors(e,t),jn.cross(Mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),jn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,n),Bs.subVectors(r,n),lc.subVectors(e,n);let c=Os.dot(lc),l=Bs.dot(lc);if(c<=0&&l<=0)return t.copy(n);cc.subVectors(e,s);let d=Os.dot(cc),p=Bs.dot(cc);if(d>=0&&p<=d)return t.copy(s);let u=c*p-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Os,o);hc.subVectors(e,r);let m=Os.dot(hc),_=Bs.dot(hc);if(_>=0&&m<=_)return t.copy(r);let x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Bs,a);let f=d*_-m*p;if(f<=0&&p-d>=0&&m-_>=0)return du.subVectors(r,s),a=(p-d)/(p-d+(m-_)),t.copy(s).addScaledVector(du,a);let g=1/(f+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},zo={h:0,s:0,l:0};function pc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var St=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=At.workingColorSpace){if(e=eh(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pc(o,r,e+1/3),this.g=pc(o,r,e),this.b=pc(o,r,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let n=Sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return At.workingToColorSpace(gn.copy(this),e),Math.round(vt(gn.r*255,0,255))*65536+Math.round(vt(gn.g*255,0,255))*256+Math.round(vt(gn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(gn.copy(this),t);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let p=o-a;switch(l=d<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=an){At.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,s=gn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(zo);let n=Nr(zi.h,zo.h,t),s=Nr(zi.s,zo.s,t),r=Nr(zi.l,zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new St;St.NAMES=Sd;var np=0,fi=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=os,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},jt=class extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new T,Ho=new Ee,ip=0,en=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ip++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pa,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ho.fromBufferAttribute(this,t),Ho.applyMatrix3(e),this.setXY(t,Ho.x,Ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pa&&(e.usage=this.usage),e}};var Vr=class extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gr=class extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}},sp=0,Vn=new Rt,mc=new Dt,zs=new T,Fn=new dn,Tr=new dn,on=new T,xt=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(th(e)?Gr:Vr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return mc.lookAt(e),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Fn.min,Tr.min),Fn.expandByPoint(on),on.addVectors(Fn.max,Tr.max),Fn.expandByPoint(on)):(Fn.expandByPoint(Tr.min),Fn.expandByPoint(Tr.max))}Fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)on.fromBufferAttribute(a,l),c&&(zs.fromBufferAttribute(e,l),on.add(zs)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new T,c[N]=new T;let l=new T,d=new T,p=new T,u=new Ee,m=new Ee,_=new Ee,x=new T,f=new T;function g(N,w,b){l.fromBufferAttribute(n,N),d.fromBufferAttribute(n,w),p.fromBufferAttribute(n,b),u.fromBufferAttribute(r,N),m.fromBufferAttribute(r,w),_.fromBufferAttribute(r,b),d.sub(l),p.sub(l),m.sub(u),_.sub(u);let F=1/(m.x*_.y-_.x*m.y);isFinite(F)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(F),f.copy(p).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(F),a[N].add(x),a[w].add(x),a[b].add(x),c[N].add(f),c[w].add(f),c[b].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let N=0,w=R.length;N<w;++N){let b=R[N],F=b.start,q=b.count;for(let $=F,Q=F+q;$<Q;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}let S=new T,v=new T,D=new T,C=new T;function U(N){D.fromBufferAttribute(s,N),C.copy(D);let w=a[N];S.copy(w),S.sub(D.multiplyScalar(D.dot(w))).normalize(),v.crossVectors(C,w);let F=v.dot(c[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,F)}for(let N=0,w=R.length;N<w;++N){let b=R[N],F=b.start,q=b.count;for(let $=F,Q=F+q;$<Q;$+=3)U(e.getX($+0)),U(e.getX($+1)),U(e.getX($+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,d=new T,p=new T;if(e)for(let u=0,m=e.count;u<m;u+=3){let _=e.getX(u+0),x=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,f),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,f),a.add(d),c.add(d),l.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,p=a.normalized,u=new l.constructor(c.length*d),m=0,_=0;for(let x=0,f=c.length;x<f;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*d;for(let g=0;g<d;g++)u[_++]=l[m++]}return new en(u,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,p=l.length;d<p;d++){let u=l[d],m=e(u,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let p=0,u=l.length;p<u;p++){let m=l[p];d.push(m.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],p=r[l];for(let u=0,m=p.length;u<m;u++)d.push(p[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new Rt,is=new Gi,ko=new wi,pu=new T,Vo=new T,Go=new T,Wo=new T,gc=new T,Xo=new T,mu=new T,Yo=new T,Ae=class extends Dt{constructor(e=new xt,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],p=r[c];d!==0&&(gc.fromBufferAttribute(p,e),o?Xo.addScaledVector(gc,d):Xo.addScaledVector(gc.sub(t),d))}t.add(Xo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(ko.containsPoint(is.origin)===!1&&(is.intersectSphere(ko,pu)===null||is.origin.distanceToSquared(pu)>(e.far-e.near)**2))&&(fu.copy(r).invert(),is.copy(e.ray).applyMatrix4(fu),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=u.length;_<x;_++){let f=u[_],g=o[f.materialIndex],R=Math.max(f.start,m.start),S=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let v=R,D=S;v<D;v+=3){let C=a.getX(v),U=a.getX(v+1),N=a.getX(v+2);s=qo(this,g,e,n,l,d,p,C,U,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=_,g=x;f<g;f+=3){let R=a.getX(f),S=a.getX(f+1),v=a.getX(f+2);s=qo(this,o,e,n,l,d,p,R,S,v),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=u.length;_<x;_++){let f=u[_],g=o[f.materialIndex],R=Math.max(f.start,m.start),S=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let v=R,D=S;v<D;v+=3){let C=v,U=v+1,N=v+2;s=qo(this,g,e,n,l,d,p,C,U,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let f=_,g=x;f<g;f+=3){let R=f,S=f+1,v=f+2;s=qo(this,o,e,n,l,d,p,R,S,v),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function rp(i,e,t,n,s,r,o,a){let c;if(e.side===An?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===bi,a),c===null)return null;Yo.copy(a),Yo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Yo);return l<t.near||l>t.far?null:{distance:l,point:Yo.clone(),object:i}}function qo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Vo),i.getVertexPosition(c,Go),i.getVertexPosition(l,Wo);let d=rp(i,e,t,n,Vo,Go,Wo,mu);if(d){let p=new T;li.getBarycoord(mu,Vo,Go,Wo,p),s&&(d.uv=li.getInterpolatedAttribute(s,a,c,l,p,new Ee)),r&&(d.uv1=li.getInterpolatedAttribute(r,a,c,l,p,new Ee)),o&&(d.normal=li.getInterpolatedAttribute(o,a,c,l,p,new T),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new T,materialIndex:0};li.getNormal(Vo,Go,Wo,u.normal),d.face=u,d.barycoord=p}return d}var Ct=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],p=[],u=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(p,2));function _(x,f,g,R,S,v,D,C,U,N,w){let b=v/U,F=D/N,q=v/2,$=D/2,Q=C/2,O=U+1,V=N+1,W=0,z=0,he=new T;for(let xe=0;xe<V;xe++){let ae=xe*F-$;for(let Te=0;Te<O;Te++){let Ve=Te*b-q;he[x]=Ve*R,he[f]=ae*S,he[g]=Q,l.push(he.x,he.y,he.z),he[x]=0,he[f]=0,he[g]=C>0?1:-1,d.push(he.x,he.y,he.z),p.push(Te/U),p.push(1-xe/N),W+=1}}for(let xe=0;xe<N;xe++)for(let ae=0;ae<U;ae++){let Te=u+ae+O*xe,Ve=u+ae+O*(xe+1),nt=u+(ae+1)+O*(xe+1),Qe=u+(ae+1)+O*xe;c.push(Te,Ve,Qe),c.push(Ve,nt,Qe),z+=6}a.addGroup(m,z,w),m+=z,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=xs(i[t]);for(let s in n)e[s]=n[s]}return e}function op(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var bd={clone:xs,merge:xn},ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=op(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wr=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new T,gu=new Ee,_u=new Ee,un=class extends Wr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,gu,_u),t.subVectors(_u,gu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hs=-90,ks=1,xa=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(Hs,ks,e,t);s.layers=this.layers,this.add(s);let r=new un(Hs,ks,e,t);r.layers=this.layers,this.add(r);let o=new un(Hs,ks,e,t);o.layers=this.layers,this.add(o);let a=new un(Hs,ks,e,t);a.layers=this.layers,this.add(a);let c=new un(Hs,ks,e,t);c.layers=this.layers,this.add(c);let l=new un(Hs,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(p,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Xr=class extends wn{constructor(e=[],t=gs,n,s,r,o,a,c,l,d){super(e,t,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ya=class extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ct(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Ci});r.uniforms.tEquirect.value=t;let o=new Ae(s,r),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=ti),new xa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ln=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},cp={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,n),g=this._getHandJoint(l,x);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=d.position.distanceTo(p.position),m=.02,_=.005;l.inputState.pinching&&u>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Yr=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},va=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pa,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new T,qr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},er=class extends fi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vs,Ar=new T,Gs=new T,Ws=new T,Xs=new Ee,Rr=new Ee,wd=new Rt,Zo=new T,Cr=new T,Ko=new T,xu=new Ee,_c=new Ee,yu=new Ee,Zr=class extends Dt{constructor(e=new er){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new va(t,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new qr(n,3,0,!1)),Vs.setAttribute("uv",new qr(n,2,3,!1))}this.geometry=Vs,this.material=e,this.center=new Ee(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),wd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Ws.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Jo(Zo.set(-.5,-.5,0),Ws,o,Gs,s,r),Jo(Cr.set(.5,-.5,0),Ws,o,Gs,s,r),Jo(Ko.set(.5,.5,0),Ws,o,Gs,s,r),xu.set(0,0),_c.set(1,0),yu.set(1,1);let a=e.ray.intersectTriangle(Zo,Cr,Ko,!1,Ar);if(a===null&&(Jo(Cr.set(-.5,.5,0),Ws,o,Gs,s,r),_c.set(0,1),a=e.ray.intersectTriangle(Zo,Ko,Cr,!1,Ar),a===null))return;let c=e.ray.origin.distanceTo(Ar);c<e.near||c>e.far||t.push({distance:c,point:Ar.clone(),uv:li.getInterpolation(Ar,Zo,Cr,Ko,xu,_c,yu,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jo(i,e,t,n,s,r){Xs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Rr.x=r*Xs.x-s*Xs.y,Rr.y=s*Xs.x+r*Xs.y):Rr.copy(Xs),i.copy(e),i.x+=Rr.x,i.y+=Rr.y,i.applyMatrix4(wd)}var Ma=class extends wn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=In,d=In,p,u){super(null,o,a,c,l,d,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kr=class extends en{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ys=new Rt,vu=new Rt,$o=[],Mu=new dn,hp=new Rt,Pr=new Ae,Ir=new wi,tr=class extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),Mu.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Mu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),Ir.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),vu.multiplyMatrices(n,Ys),Pr.matrixWorld=vu,Pr.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){let c=$o[o];c.instanceId=r,c.object=this,t.push(c)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ma(new Float32Array(s*this.count),s,this.count,il,ri));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xc=new T,up=new T,dp=new pt,$t=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xc.subVectors(n,t).cross(up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dp.getNormalMatrix(e),s=this.coplanarPoint(xc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ss=new wi,fp=new Ee(.5,.5),jo=new T,nr=class{constructor(e=new $t,t=new $t,n=new $t,s=new $t,r=new $t,o=new $t){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],p=r[5],u=r[6],m=r[7],_=r[8],x=r[9],f=r[10],g=r[11],R=r[12],S=r[13],v=r[14],D=r[15];if(s[0].setComponents(l-o,m-d,g-_,D-R).normalize(),s[1].setComponents(l+o,m+d,g+_,D+R).normalize(),s[2].setComponents(l+a,m+p,g+x,D+S).normalize(),s[3].setComponents(l-a,m-p,g-x,D-S).normalize(),n)s[4].setComponents(c,u,f,v).normalize(),s[5].setComponents(l-c,m-u,g-f,D-v).normalize();else if(s[4].setComponents(l-c,m-u,g-f,D-v).normalize(),t===ei)s[5].setComponents(l+c,m+u,g+f,D+v).normalize();else if(t===zr)s[5].setComponents(c,u,f,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);let t=fp.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(jo.x=s.normal.x>0?e.max.x:e.min.x,jo.y=s.normal.y>0?e.max.y:e.min.y,jo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _n=class extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ea=new T,Sa=new T,Eu=new Rt,Dr=new Gi,Qo=new wi,yc=new T,Su=new T,Xt=class extends Dt{constructor(e=new xt,t=new _n){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ea.fromBufferAttribute(t,s-1),Sa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ea.distanceTo(Sa);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;Eu.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=m,f=_-1;x<f;x+=l){let g=d.getX(x),R=d.getX(x+1),S=ea(this,e,Dr,c,g,R,x);S&&t.push(S)}if(this.isLineLoop){let x=d.getX(_-1),f=d.getX(m),g=ea(this,e,Dr,c,x,f,_-1);g&&t.push(g)}}else{let m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=m,f=_-1;x<f;x+=l){let g=ea(this,e,Dr,c,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=ea(this,e,Dr,c,_-1,m,_-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ea(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Ea.fromBufferAttribute(a,s),Sa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ea,Sa,yc,Su)>n)return;yc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(yc);if(!(l<e.near||l>e.far))return{distance:l,point:Su.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var bu=new T,wu=new T,Ti=class extends Xt{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bu.fromBufferAttribute(t,s),wu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bu.distanceTo(wu);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Wi=class extends Xt{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var hs=class extends wn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jr=class extends wn{constructor(e,t,n=Ki,s,r,o,a=In,c=In,l,d=Ks,p=1){if(d!==Ks&&d!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$r=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var jr=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new T,d=new Ee;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){let m=n+p/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Kt=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],p=[],u=[],m=[],_=0,x=[],f=n/2,g=0;R(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(m,2));function R(){let v=new T,D=new T,C=0,U=(t-e)/n;for(let N=0;N<=r;N++){let w=[],b=N/r,F=b*(t-e)+e;for(let q=0;q<=s;q++){let $=q/s,Q=$*c+a,O=Math.sin(Q),V=Math.cos(Q);D.x=F*O,D.y=-b*n+f,D.z=F*V,p.push(D.x,D.y,D.z),v.set(O,U,V).normalize(),u.push(v.x,v.y,v.z),m.push($,1-b),w.push(_++)}x.push(w)}for(let N=0;N<s;N++)for(let w=0;w<r;w++){let b=x[w][N],F=x[w+1][N],q=x[w+1][N+1],$=x[w][N+1];(e>0||w!==0)&&(d.push(b,F,$),C+=3),(t>0||w!==r-1)&&(d.push(F,q,$),C+=3)}l.addGroup(g,C,0),g+=C}function S(v){let D=_,C=new Ee,U=new T,N=0,w=v===!0?e:t,b=v===!0?1:-1;for(let q=1;q<=s;q++)p.push(0,f*b,0),u.push(0,b,0),m.push(.5,.5),_++;let F=_;for(let q=0;q<=s;q++){let Q=q/s*c+a,O=Math.cos(Q),V=Math.sin(Q);U.x=w*V,U.y=f*b,U.z=w*O,p.push(U.x,U.y,U.z),u.push(0,b,0),C.x=O*.5+.5,C.y=V*.5*b+.5,m.push(C.x,C.y),_++}for(let q=0;q<s;q++){let $=D+q,Q=F+q;v===!0?d.push(Q,Q+1,$):d.push(Q+1,Q,$),N+=3}l.addGroup(g,N,v===!0?1:2),g+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ir=class i extends Kt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ba=class i extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),d(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(R){let S=new T,v=new T,D=new T;for(let C=0;C<t.length;C+=3)m(t[C+0],S),m(t[C+1],v),m(t[C+2],D),c(S,v,D,R)}function c(R,S,v,D){let C=D+1,U=[];for(let N=0;N<=C;N++){U[N]=[];let w=R.clone().lerp(v,N/C),b=S.clone().lerp(v,N/C),F=C-N;for(let q=0;q<=F;q++)q===0&&N===C?U[N][q]=w:U[N][q]=w.clone().lerp(b,q/F)}for(let N=0;N<C;N++)for(let w=0;w<2*(C-N)-1;w++){let b=Math.floor(w/2);w%2===0?(u(U[N][b+1]),u(U[N+1][b]),u(U[N][b])):(u(U[N][b+1]),u(U[N+1][b+1]),u(U[N+1][b]))}}function l(R){let S=new T;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(R),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function d(){let R=new T;for(let S=0;S<r.length;S+=3){R.x=r[S+0],R.y=r[S+1],R.z=r[S+2];let v=f(R)/2/Math.PI+.5,D=g(R)/Math.PI+.5;o.push(v,1-D)}_(),p()}function p(){for(let R=0;R<o.length;R+=6){let S=o[R+0],v=o[R+2],D=o[R+4],C=Math.max(S,v,D),U=Math.min(S,v,D);C>.9&&U<.1&&(S<.2&&(o[R+0]+=1),v<.2&&(o[R+2]+=1),D<.2&&(o[R+4]+=1))}}function u(R){r.push(R.x,R.y,R.z)}function m(R,S){let v=R*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function _(){let R=new T,S=new T,v=new T,D=new T,C=new Ee,U=new Ee,N=new Ee;for(let w=0,b=0;w<r.length;w+=9,b+=6){R.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),C.set(o[b+0],o[b+1]),U.set(o[b+2],o[b+3]),N.set(o[b+4],o[b+5]),D.copy(R).add(S).add(v).divideScalar(3);let F=f(D);x(C,b+0,R,F),x(U,b+2,S,F),x(N,b+4,v,F)}}function x(R,S,v,D){D<0&&R.x===1&&(o[S]=R.x-1),v.x===0&&v.z===0&&(o[S]=D/2/Math.PI+.5)}function f(R){return Math.atan2(R.z,-R.x)}function g(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ta=new T,na=new T,vc=new T,ia=new li,Qr=class extends xt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(qs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],d=["a","b","c"],p=new Array(3),u={},m=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);let{a:x,b:f,c:g}=ia;if(x.fromBufferAttribute(a,l[0]),f.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),ia.getNormal(vc),p[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,p[1]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,p[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let R=0;R<3;R++){let S=(R+1)%3,v=p[R],D=p[S],C=ia[d[R]],U=ia[d[S]],N=`${v}_${D}`,w=`${D}_${v}`;w in u&&u[w]?(vc.dot(u[w].normal)<=r&&(m.push(C.x,C.y,C.z),m.push(U.x,U.y,U.z)),u[w]=null):N in u||(u[N]={index0:l[R],index1:l[S],normal:vc.clone()})}}for(let _ in u)if(u[_]){let{index0:x,index1:f}=u[_];ta.fromBufferAttribute(a,x),na.fromBufferAttribute(a,f),m.push(ta.x,ta.y,ta.z),m.push(na.x,na.y,na.z)}this.setAttribute("position",new mt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let d=n[s],u=n[s+1]-d,m=(o-d)/u;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ee:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,s=[],r=[],o=[],a=new T,c=new Rt;for(let m=0;m<=e;m++){let _=m/e;s[m]=this.getTangentAt(_,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,d=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(vt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,_))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(vt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],m*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},sr=class extends On{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ee){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=c-this.aX,m=l-this.aY;c=u*d-m*p+this.aX,l=u*p+m*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wa=class extends sr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ih(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,d,p){let u=(o-r)/l-(a-r)/(l+d)+(a-o)/d,m=(a-o)/d-(c-o)/(d+p)+(c-a)/p;u*=d,m*=d,s(o,a,u,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var sa=new T,Mc=new ih,Ec=new ih,Sc=new ih,Ta=class extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,d;this.closed||a>0?l=s[(a-1)%r]:(sa.subVectors(s[0],s[1]).add(s[0]),l=sa);let p=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(sa.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=sa),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(p),m),x=Math.pow(p.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(d),m);x<1e-4&&(x=1),_<1e-4&&(_=x),f<1e-4&&(f=x),Mc.initNonuniformCatmullRom(l.x,p.x,u.x,d.x,_,x,f),Ec.initNonuniformCatmullRom(l.y,p.y,u.y,d.y,_,x,f),Sc.initNonuniformCatmullRom(l.z,p.z,u.z,d.z,_,x,f)}else this.curveType==="catmullrom"&&(Mc.initCatmullRom(l.x,p.x,u.x,d.x,this.tension),Ec.initCatmullRom(l.y,p.y,u.y,d.y,this.tension),Sc.initCatmullRom(l.z,p.z,u.z,d.z,this.tension));return n.set(Mc.calc(c),Ec.calc(c),Sc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function pp(i,e){let t=1-i;return t*t*e}function mp(i,e){return 2*(1-i)*i*e}function gp(i,e){return i*i*e}function Ur(i,e,t,n){return pp(i,e)+mp(i,t)+gp(i,n)}function _p(i,e){let t=1-i;return t*t*t*e}function xp(i,e){let t=1-i;return 3*t*t*i*e}function yp(i,e){return 3*(1-i)*i*i*e}function vp(i,e){return i*i*i*e}function Fr(i,e,t,n,s){return _p(i,e)+xp(i,t)+yp(i,n)+vp(i,s)}var eo=class extends On{constructor(e=new Ee,t=new Ee,n=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(e,s.x,r.x,o.x,a.x),Fr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends On{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(e,s.x,r.x,o.x,a.x),Fr(e,s.y,r.y,o.y,a.y),Fr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},to=class extends On{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends On{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends On{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ur(e,s.x,r.x,o.x),Ur(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends On{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ur(e,s.x,r.x,o.x),Ur(e,s.y,r.y,o.y),Ur(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],d=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Tu(a,c.x,l.x,d.x,p.x),Tu(a,c.y,l.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}},Cc=Object.freeze({__proto__:null,ArcCurve:wa,CatmullRomCurve3:Ta,CubicBezierCurve:eo,CubicBezierCurve3:Aa,EllipseCurve:sr,LineCurve:to,LineCurve3:Ra,QuadraticBezierCurve:no,QuadraticBezierCurve3:Ca,SplineCurve:io}),Pa=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let d=c[l];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Cc[s.type]().fromJSON(s))}return this}},Xi=class extends Pa{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new to(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new no(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new eo(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s),new Ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new io(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+l,t+d,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new sr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ai=class extends Xi{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Xi().fromJSON(s))}return this}};function Mp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Td(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Tp(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let d=-1/0,p=-1/0;for(let u=t;u<s;u+=t){let m=i[u],_=i[u+1];m<a&&(a=m),_<c&&(c=_),m>d&&(d=m),_>p&&(p=_)}l=Math.max(d-a,p-c),l=l!==0?32767/l:0}return so(r,o,t,a,c,l,0),o}function Td(i,e,t,n,s){let r;if(s===Op(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Au(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Au(o/n|0,i[o],i[o+1],r);return r&&rr(r,r.next)&&(oo(r),r=r.next),r}function us(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(rr(t,t.next)||qt(t.prev,t,t.next)===0)){if(oo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function so(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ip(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Sp(i,n,s,r):Ep(i)){e.push(c.i,i.i,l.i),oo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=bp(us(i),e),so(i,e,t,n,s,r,2)):o===2&&wp(i,e,t,n,s,r):so(us(i),e,t,n,s,r,1);break}}}function Ep(i){let e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,d=Math.min(s,r,o),p=Math.min(a,c,l),u=Math.max(s,r,o),m=Math.max(a,c,l),_=n.next;for(;_!==e;){if(_.x>=d&&_.x<=u&&_.y>=p&&_.y<=m&&Lr(s,a,r,c,o,l,_.x,_.y)&&qt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Sp(i,e,t,n){let s=i.prev,r=i,o=i.next;if(qt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,d=s.y,p=r.y,u=o.y,m=Math.min(a,c,l),_=Math.min(d,p,u),x=Math.max(a,c,l),f=Math.max(d,p,u),g=Pc(m,_,e,t,n),R=Pc(x,f,e,t,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=g&&v&&v.z<=R;){if(S.x>=m&&S.x<=x&&S.y>=_&&S.y<=f&&S!==s&&S!==o&&Lr(a,d,c,p,l,u,S.x,S.y)&&qt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=m&&v.x<=x&&v.y>=_&&v.y<=f&&v!==s&&v!==o&&Lr(a,d,c,p,l,u,v.x,v.y)&&qt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=m&&S.x<=x&&S.y>=_&&S.y<=f&&S!==s&&S!==o&&Lr(a,d,c,p,l,u,S.x,S.y)&&qt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=R;){if(v.x>=m&&v.x<=x&&v.y>=_&&v.y<=f&&v!==s&&v!==o&&Lr(a,d,c,p,l,u,v.x,v.y)&&qt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!rr(n,s)&&Rd(n,t,t.next,s)&&ro(n,s)&&ro(s,n)&&(e.push(n.i,t.i,s.i),oo(t),oo(t.next),t=i=s),t=t.next}while(t!==i);return us(t)}function wp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Np(o,a)){let c=Cd(o,a);o=us(o,o.next),c=us(c,c.next),so(o,e,t,n,s,r,0),so(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Tp(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Td(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Lp(l))}s.sort(Ap);for(let r=0;r<s.length;r++)t=Rp(s[r],t);return t}function Ap(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Rp(i,e){let t=Cp(i,e);if(!t)return e;let n=Cd(t,i);return us(n,n.next),us(t,t.next)}function Cp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(rr(i,t))return t;do{if(rr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Ad(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);ro(t,i)&&(p<d||p===d&&(t.x>o.x||t.x===o.x&&Pp(o,t)))&&(o=t,d=p)}t=t.next}while(t!==a);return o}function Pp(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function Ip(i,e,t,n){let s=i;do s.z===0&&(s.z=Pc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Dp(s)}function Dp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Pc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Lp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ad(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Lr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ad(i,e,t,n,s,r,o,a)}function Np(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Up(i,e)&&(ro(i,e)&&ro(e,i)&&Fp(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||rr(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function rr(i,e){return i.x===e.x&&i.y===e.y}function Rd(i,e,t,n){let s=oa(qt(i,e,t)),r=oa(qt(i,e,n)),o=oa(qt(t,n,i)),a=oa(qt(t,n,e));return!!(s!==r&&o!==a||s===0&&ra(i,t,e)||r===0&&ra(i,n,e)||o===0&&ra(t,i,n)||a===0&&ra(t,e,n))}function ra(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function oa(i){return i>0?1:i<0?-1:0}function Up(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Rd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ro(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function Fp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Cd(i,e){let t=Ic(i.i,i.x,i.y),n=Ic(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Au(i,e,t,n){let s=Ic(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ic(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Op(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Dc=class{static triangulate(e,t,n=2){return Mp(e,t,n)}},ci=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ru(e),Cu(n,e);let o=e.length;t.forEach(Ru);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Cu(n,t[c]);let a=Dc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ru(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Cu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var or=class i extends xt{constructor(e=new Ai([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:Bp,S,v=!1,D,C,U,N;g&&(S=g.getSpacedPoints(d),v=!0,u=!1,D=g.computeFrenetFrames(d,!1),C=new T,U=new T,N=new T),u||(f=0,m=0,_=0,x=0);let w=a.extractPoints(l),b=w.shape,F=w.holes;if(!ci.isClockWise(b)){b=b.reverse();for(let fe=0,me=F.length;fe<me;fe++){let ce=F[fe];ci.isClockWise(ce)&&(F[fe]=ce.reverse())}}function $(fe){let ce=10000000000000001e-36,ge=fe[0];for(let Le=1;Le<=fe.length;Le++){let pe=Le%fe.length,Se=fe[pe],je=Se.x-ge.x,ze=Se.y-ge.y,I=je*je+ze*ze,y=Math.max(Math.abs(Se.x),Math.abs(Se.y),Math.abs(ge.x),Math.abs(ge.y)),Y=ce*y*y;if(I<=Y){fe.splice(pe,1),Le--;continue}ge=Se}}$(b),F.forEach($);let Q=F.length,O=b;for(let fe=0;fe<Q;fe++){let me=F[fe];b=b.concat(me)}function V(fe,me,ce){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(me,ce)}let W=b.length;function z(fe,me,ce){let ge,Le,pe,Se=fe.x-me.x,je=fe.y-me.y,ze=ce.x-fe.x,I=ce.y-fe.y,y=Se*Se+je*je,Y=Se*I-je*ze;if(Math.abs(Y)>Number.EPSILON){let te=Math.sqrt(y),_e=Math.sqrt(ze*ze+I*I),P=me.x-je/te,B=me.y+Se/te,Z=ce.x-I/_e,le=ce.y+ze/_e,be=((Z-P)*I-(le-B)*ze)/(Se*I-je*ze);ge=P+Se*be-fe.x,Le=B+je*be-fe.y;let ve=ge*ge+Le*Le;if(ve<=2)return new Ee(ge,Le);pe=Math.sqrt(ve/2)}else{let te=!1;Se>Number.EPSILON?ze>Number.EPSILON&&(te=!0):Se<-Number.EPSILON?ze<-Number.EPSILON&&(te=!0):Math.sign(je)===Math.sign(I)&&(te=!0),te?(ge=-je,Le=Se,pe=Math.sqrt(y)):(ge=Se,Le=je,pe=Math.sqrt(y/2))}return new Ee(ge/pe,Le/pe)}let he=[];for(let fe=0,me=O.length,ce=me-1,ge=fe+1;fe<me;fe++,ce++,ge++)ce===me&&(ce=0),ge===me&&(ge=0),he[fe]=z(O[fe],O[ce],O[ge]);let xe=[],ae,Te=he.concat();for(let fe=0,me=Q;fe<me;fe++){let ce=F[fe];ae=[];for(let ge=0,Le=ce.length,pe=Le-1,Se=ge+1;ge<Le;ge++,pe++,Se++)pe===Le&&(pe=0),Se===Le&&(Se=0),ae[ge]=z(ce[ge],ce[pe],ce[Se]);xe.push(ae),Te=Te.concat(ae)}let Ve;if(f===0)Ve=ci.triangulateShape(O,F);else{let fe=[],me=[];for(let ce=0;ce<f;ce++){let ge=ce/f,Le=m*Math.cos(ge*Math.PI/2),pe=_*Math.sin(ge*Math.PI/2)+x;for(let Se=0,je=O.length;Se<je;Se++){let ze=V(O[Se],he[Se],pe);Ze(ze.x,ze.y,-Le),ge===0&&fe.push(ze)}for(let Se=0,je=Q;Se<je;Se++){let ze=F[Se];ae=xe[Se];let I=[];for(let y=0,Y=ze.length;y<Y;y++){let te=V(ze[y],ae[y],pe);Ze(te.x,te.y,-Le),ge===0&&I.push(te)}ge===0&&me.push(I)}}Ve=ci.triangulateShape(fe,me)}let nt=Ve.length,Qe=_+x;for(let fe=0;fe<W;fe++){let me=u?V(b[fe],Te[fe],Qe):b[fe];v?(U.copy(D.normals[0]).multiplyScalar(me.x),C.copy(D.binormals[0]).multiplyScalar(me.y),N.copy(S[0]).add(U).add(C),Ze(N.x,N.y,N.z)):Ze(me.x,me.y,0)}for(let fe=1;fe<=d;fe++)for(let me=0;me<W;me++){let ce=u?V(b[me],Te[me],Qe):b[me];v?(U.copy(D.normals[fe]).multiplyScalar(ce.x),C.copy(D.binormals[fe]).multiplyScalar(ce.y),N.copy(S[fe]).add(U).add(C),Ze(N.x,N.y,N.z)):Ze(ce.x,ce.y,p/d*fe)}for(let fe=f-1;fe>=0;fe--){let me=fe/f,ce=m*Math.cos(me*Math.PI/2),ge=_*Math.sin(me*Math.PI/2)+x;for(let Le=0,pe=O.length;Le<pe;Le++){let Se=V(O[Le],he[Le],ge);Ze(Se.x,Se.y,p+ce)}for(let Le=0,pe=F.length;Le<pe;Le++){let Se=F[Le];ae=xe[Le];for(let je=0,ze=Se.length;je<ze;je++){let I=V(Se[je],ae[je],ge);v?Ze(I.x,I.y+S[d-1].y,S[d-1].x+ce):Ze(I.x,I.y,p+ce)}}}ee(),de();function ee(){let fe=s.length/3;if(u){let me=0,ce=W*me;for(let ge=0;ge<nt;ge++){let Le=Ve[ge];ke(Le[2]+ce,Le[1]+ce,Le[0]+ce)}me=d+f*2,ce=W*me;for(let ge=0;ge<nt;ge++){let Le=Ve[ge];ke(Le[0]+ce,Le[1]+ce,Le[2]+ce)}}else{for(let me=0;me<nt;me++){let ce=Ve[me];ke(ce[2],ce[1],ce[0])}for(let me=0;me<nt;me++){let ce=Ve[me];ke(ce[0]+W*d,ce[1]+W*d,ce[2]+W*d)}}n.addGroup(fe,s.length/3-fe,0)}function de(){let fe=s.length/3,me=0;De(O,me),me+=O.length;for(let ce=0,ge=F.length;ce<ge;ce++){let Le=F[ce];De(Le,me),me+=Le.length}n.addGroup(fe,s.length/3-fe,1)}function De(fe,me){let ce=fe.length;for(;--ce>=0;){let ge=ce,Le=ce-1;Le<0&&(Le=fe.length-1);for(let pe=0,Se=d+f*2;pe<Se;pe++){let je=W*pe,ze=W*(pe+1),I=me+ge+je,y=me+Le+je,Y=me+Le+ze,te=me+ge+ze;Re(I,y,Y,te)}}}function Ze(fe,me,ce){c.push(fe),c.push(me),c.push(ce)}function ke(fe,me,ce){gt(fe),gt(me),gt(ce);let ge=s.length/3,Le=R.generateTopUV(n,s,ge-3,ge-2,ge-1);L(Le[0]),L(Le[1]),L(Le[2])}function Re(fe,me,ce,ge){gt(fe),gt(me),gt(ge),gt(me),gt(ce),gt(ge);let Le=s.length/3,pe=R.generateSideWallUV(n,s,Le-6,Le-3,Le-2,Le-1);L(pe[0]),L(pe[1]),L(pe[3]),L(pe[1]),L(pe[2]),L(pe[3])}function gt(fe){s.push(c[fe*3+0]),s.push(c[fe*3+1]),s.push(c[fe*3+2])}function L(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return zp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Cc[s.type]().fromJSON(s)),new i(n,e.options)}},Bp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],d=e[s*3+1];return[new Ee(r,o),new Ee(a,c),new Ee(l,d)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],d=e[n*3+1],p=e[n*3+2],u=e[s*3],m=e[s*3+1],_=e[s*3+2],x=e[r*3],f=e[r*3+1],g=e[r*3+2];return Math.abs(a-d)<Math.abs(o-l)?[new Ee(o,1-c),new Ee(l,1-p),new Ee(u,1-_),new Ee(x,1-g)]:[new Ee(a,1-c),new Ee(d,1-p),new Ee(m,1-_),new Ee(f,1-g)]}};function zp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var pi=class i extends ba{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Dn=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,p=e/a,u=t/c,m=[],_=[],x=[],f=[];for(let g=0;g<d;g++){let R=g*u-o;for(let S=0;S<l;S++){let v=S*p-r;_.push(v,-R,0),x.push(0,0,1),f.push(S/a),f.push(1-g/c)}}for(let g=0;g<c;g++)for(let R=0;R<a;R++){let S=R+l*g,v=R+l*(g+1),D=R+1+l*(g+1),C=R+1+l*g;m.push(S,v,C),m.push(v,D,C)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ao=class i extends xt{constructor(e=new Ai([new Ee(0,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let d=0;d<e.length;d++)l(e[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(r,3)),this.setAttribute("uv",new mt(o,2));function l(d){let p=s.length/3,u=d.extractPoints(t),m=u.shape,_=u.holes;ci.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,g=_.length;f<g;f++){let R=_[f];ci.isClockWise(R)===!0&&(_[f]=R.reverse())}let x=ci.triangulateShape(m,_);for(let f=0,g=_.length;f<g;f++){let R=_[f];m=m.concat(R)}for(let f=0,g=m.length;f<g;f++){let R=m[f];s.push(R.x,R.y,0),r.push(0,0,1),o.push(R.x,R.y)}for(let f=0,g=x.length;f<g;f++){let R=x[f],S=R[0]+p,v=R[1]+p,D=R[2]+p;n.push(S,v,D),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Hp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Hp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Bn=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,d=[],p=new T,u=new T,m=[],_=[],x=[],f=[];for(let g=0;g<=n;g++){let R=[],S=g/n,v=0;g===0&&o===0?v=.5/t:g===n&&c===Math.PI&&(v=-.5/t);for(let D=0;D<=t;D++){let C=D/t;p.x=-e*Math.cos(s+C*r)*Math.sin(o+S*a),p.y=e*Math.cos(o+S*a),p.z=e*Math.sin(s+C*r)*Math.sin(o+S*a),_.push(p.x,p.y,p.z),u.copy(p).normalize(),x.push(u.x,u.y,u.z),f.push(C+v,1-S),R.push(l++)}d.push(R)}for(let g=0;g<n;g++)for(let R=0;R<t;R++){let S=d[g][R+1],v=d[g][R],D=d[g+1][R],C=d[g+1][R+1];(g!==0||o>0)&&m.push(S,v,C),(g!==n-1||c<Math.PI)&&m.push(v,D,C)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ri=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],d=new T,p=new T,u=new T;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){let x=_/s*r,f=m/n*Math.PI*2;p.x=(e+t*Math.cos(f))*Math.cos(x),p.y=(e+t*Math.cos(f))*Math.sin(x),p.z=t*Math.sin(f),a.push(p.x,p.y,p.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),u.subVectors(p,d).normalize(),c.push(u.x,u.y,u.z),l.push(_/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){let x=(s+1)*m+_-1,f=(s+1)*(m-1)+_-1,g=(s+1)*(m-1)+_,R=(s+1)*m+_;o.push(x,f,R),o.push(f,g,R)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ds=class extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ia=class extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Da=class extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var fs=class extends _n{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function aa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ps=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},La=class extends ps{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wc,endingEnd:wc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tc:r=e,a=2*t-n;break;case Ac:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Tc:o=e,c=2*n-t;break;case Ac:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-t)/(s-t),x=_*_,f=x*_,g=-u*f+2*u*x-u*_,R=(1+u)*f+(-1.5-2*u)*x+(-.5+u)*_+1,S=(-1-m)*f+(1.5+m)*x+.5*_,v=m*f-m*x;for(let D=0;D!==a;++D)r[D]=g*o[d+D]+R*o[l+D]+S*o[c+D]+v*o[p+D];return r}},Na=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(s-t),p=1-d;for(let u=0;u!==a;++u)r[u]=o[l+u]*p+o[c+u]*d;return r}},Ua=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new La(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case fa:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&kp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===la,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(s)c=!0;else{let p=a*n,u=p-n,m=p+n;for(let _=0;_!==n;++_){let x=t[p+_];if(x!==t[u+_]||x!==t[m+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,u=o*n;for(let m=0;m!==n;++m)t[u+m]=t[p+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=fa;var Yi=class extends zn{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Or;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Fa.prototype.ValueTypeName="color";var Oa=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Oa.prototype.ValueTypeName="number";var Ba=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let d=l+a;l!==d;l+=4)Bt.slerpFlat(r,0,o,l-a,o,l,c);return r}},lo=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ba(this.times,this.values,this.getValueSize(),e)}};lo.prototype.ValueTypeName="quaternion";lo.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends zn{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Or;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};za.prototype.ValueTypeName="vector";var Ha=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return l.push(d,p),this},this.removeHandler=function(d){let p=l.indexOf(d);return p!==-1&&l.splice(p,2),this},this.getHandler=function(d){for(let p=0,u=l.length;p<u;p+=2){let m=l[p],_=l[p+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Pd=new Ha,ka=class{constructor(e){this.manager=e!==void 0?e:Pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ka.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},co=class extends ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bc=new Rt,Pu=new T,Iu=new T,Va=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pu),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lc=class extends Va{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=cs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ho=class extends ar{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var uo=class extends Wr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nc=class extends Va{constructor(){super(new uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Nc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ga=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var sh="\\[\\]\\.:\\/",Vp=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",Gp="[^"+sh.replace("\\.","")+"]",Wp=/((?:WC+[\/:])*)/.source.replace("WC",rh),Xp=/(WCOD+)?/.source.replace("WCOD",Gp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),qp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),Zp=new RegExp("^"+Wp+Xp+Yp+qp+"$"),Kp=["material","materials","bones","map"],Uc=class{constructor(e,t,n){let s=n||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vp,"")}static parseTrackName(e){let t=Zp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Kp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=Uc;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jx=new Float32Array(1);var Du=new Rt,Gn=class{constructor(e,t,n=0,s=1/0){this.ray=new Gi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Du.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(e,t=!0,n=[]){return Fc(e,this,n,t),n.sort(Lu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fc(e[s],this,n,t);return n.sort(Lu),n}};function Lu(i,e){return i.distance-e.distance}function Fc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Fc(r[o],e,t,!0)}}var cr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var fo=class extends Ti{constructor(e=10,t=10,n=4473924,s=8947848){n=new St(n),s=new St(s);let r=t/2,o=e/t,a=e/2,c=[],l=[];for(let u=0,m=0,_=-a;u<=t;u++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);let x=u===r?n:s;x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3}let d=new xt;d.setAttribute("position",new mt(c,3)),d.setAttribute("color",new mt(l,3));let p=new _n({vertexColors:!0,toneMapped:!1});super(d,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var po=class extends Ti{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new xt;r.setIndex(new en(n,1)),r.setAttribute("position",new mt(s,3)),super(r,new _n({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var ms=class extends ui{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function oh(i,e,t,n){let s=Jp(n);switch(t){case Zc:return i*e;case il:return i*e/s.components*s.byteLength;case sl:return i*e/s.components*s.byteLength;case Jc:return i*e*2/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case Kc:return i*e*3/s.components*s.byteLength;case Wn:return i*e*4/s.components*s.byteLength;case ol:return i*e*4/s.components*s.byteLength;case _o:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yo:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:case hl:return Math.max(i,16)*Math.max(e,8)/4;case al:case cl:return Math.max(i,8)*Math.max(e,8)/2;case ul:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Il:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ll:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jp(i){switch(i){case si:case Wc:return{byteLength:1,components:1};case hr:case Xc:case ur:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case Ki:case el:case ri:return{byteLength:4,components:1};case Yc:case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ef(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $p(i){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){let d=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,d);else{p.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<p.length;m++){let _=p[u],x=p[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,p[u]=x)}p.length=u+1;for(let m=0,_=p.length;m<_;m++){let x=p[m];i.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qp=`#ifdef USE_ALPHAHASH
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
#endif`,em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sm=`#ifdef USE_AOMAP
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
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
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
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,um=`#ifdef USE_IRIDESCENCE
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
#endif`,dm=`#ifdef USE_BUMPMAP
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mm=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sm=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
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
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gm=`uniform bool receiveShadow;
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
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
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
#endif`,Jm=`struct PhysicalMaterial {
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
}`,$m=`
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ag=`#if defined( USE_POINTS_UV )
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
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
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
#endif`,Mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fg=`float getShadowMask() {
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
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`#include <common>
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
}`,s_=`#if DEPTH_PACKING == 3200
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
}`,r_=`#define DISTANCE
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
}`,o_=`#define DISTANCE
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`uniform float scale;
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#define LAMBERT
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define MATCAP
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
}`,g_=`#define MATCAP
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
}`,__=`#define NORMAL
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
}`,x_=`#define NORMAL
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
}`,y_=`#define PHONG
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
}`,v_=`#define PHONG
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
}`,M_=`#define STANDARD
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
}`,E_=`#define STANDARD
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
}`,S_=`#define TOON
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
}`,b_=`#define TOON
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
}`,w_=`uniform float size;
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
}`,T_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,R_=`uniform vec3 color;
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
}`,C_=`uniform float rotation;
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
}`,P_=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:jp,alphahash_pars_fragment:Qp,alphamap_fragment:em,alphamap_pars_fragment:tm,alphatest_fragment:nm,alphatest_pars_fragment:im,aomap_fragment:sm,aomap_pars_fragment:rm,batching_pars_vertex:om,batching_vertex:am,begin_vertex:lm,beginnormal_vertex:cm,bsdfs:hm,iridescence_fragment:um,bumpmap_pars_fragment:dm,clipping_planes_fragment:fm,clipping_planes_pars_fragment:pm,clipping_planes_pars_vertex:mm,clipping_planes_vertex:gm,color_fragment:_m,color_pars_fragment:xm,color_pars_vertex:ym,color_vertex:vm,common:Mm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Sm,displacementmap_pars_vertex:bm,displacementmap_vertex:wm,emissivemap_fragment:Tm,emissivemap_pars_fragment:Am,colorspace_fragment:Rm,colorspace_pars_fragment:Cm,envmap_fragment:Pm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Dm,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Wm,envmap_vertex:Nm,fog_vertex:Um,fog_pars_vertex:Fm,fog_fragment:Om,fog_pars_fragment:Bm,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Hm,lights_lambert_fragment:km,lights_lambert_pars_fragment:Vm,lights_pars_begin:Gm,lights_toon_fragment:Xm,lights_toon_pars_fragment:Ym,lights_phong_fragment:qm,lights_phong_pars_fragment:Zm,lights_physical_fragment:Km,lights_physical_pars_fragment:Jm,lights_fragment_begin:$m,lights_fragment_maps:jm,lights_fragment_end:Qm,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:sg,map_pars_fragment:rg,map_particle_fragment:og,map_particle_pars_fragment:ag,metalnessmap_fragment:lg,metalnessmap_pars_fragment:cg,morphinstance_vertex:hg,morphcolor_vertex:ug,morphnormal_vertex:dg,morphtarget_pars_vertex:fg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:_g,normal_pars_vertex:xg,normal_vertex:yg,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:Mg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:Sg,iridescence_pars_fragment:bg,opaque_fragment:wg,packing:Tg,premultiplied_alpha_fragment:Ag,project_vertex:Rg,dithering_fragment:Cg,dithering_pars_fragment:Pg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Dg,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Ng,shadowmap_vertex:Ug,shadowmask_pars_fragment:Fg,skinbase_vertex:Og,skinning_pars_vertex:Bg,skinning_vertex:zg,skinnormal_vertex:Hg,specularmap_fragment:kg,specularmap_pars_fragment:Vg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:Yg,uv_pars_fragment:qg,uv_pars_vertex:Zg,uv_vertex:Kg,worldpos_vertex:Jg,background_vert:$g,background_frag:jg,backgroundCube_vert:Qg,backgroundCube_frag:e_,cube_vert:t_,cube_frag:n_,depth_vert:i_,depth_frag:s_,distanceRGBA_vert:r_,distanceRGBA_frag:o_,equirect_vert:a_,equirect_frag:l_,linedashed_vert:c_,linedashed_frag:h_,meshbasic_vert:u_,meshbasic_frag:d_,meshlambert_vert:f_,meshlambert_frag:p_,meshmatcap_vert:m_,meshmatcap_frag:g_,meshnormal_vert:__,meshnormal_frag:x_,meshphong_vert:y_,meshphong_frag:v_,meshphysical_vert:M_,meshphysical_frag:E_,meshtoon_vert:S_,meshtoon_frag:b_,points_vert:w_,points_frag:T_,shadow_vert:A_,shadow_frag:R_,sprite_vert:C_,sprite_frag:P_},Ge={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},gi={basic:{uniforms:xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:xn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:xn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:xn([Ge.points,Ge.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:xn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:xn([Ge.common,Ge.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:xn([Ge.sprite,Ge.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:xn([Ge.common,Ge.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:xn([Ge.lights,Ge.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};gi.physical={uniforms:xn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var Ul={r:0,b:0,g:0},ys=new fn,I_=new Rt;function D_(i,e,t,n,s,r,o){let a=new St(0),c=r===!0?0:1,l,d,p=null,u=0,m=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function x(S){let v=!1,D=_(S);D===null?g(a,c):D&&D.isColor&&(g(D,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(S,v){let D=_(v);D&&(D.isCubeTexture||D.mapping===mo)?(d===void 0&&(d=new Ae(new Ct(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:xs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ys.copy(v.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),d.material.uniforms.envMap.value=D,d.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(I_.makeRotationFromEuler(ys)),d.material.toneMapped=At.getTransfer(D.colorSpace)!==Ot,(p!==D||u!==D.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,p=D,u=D.version,m=i.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new Ae(new Dn(2,2),new ni({name:"BackgroundMaterial",uniforms:xs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=At.getTransfer(D.colorSpace)!==Ot,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(p!==D||u!==D.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,p=D,u=D.version,m=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,v){S.getRGB(Ul,nh(i)),n.buffers.color.setClear(Ul.r,Ul.g,Ul.b,v,o)}function R(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),c=v,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,g(a,c)},render:x,addToRenderList:f,dispose:R}}function L_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(b,F,q,$,Q){let O=!1,V=p($,q,F);r!==V&&(r=V,l(r.object)),O=m(b,$,q,Q),O&&_(b,$,q,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(b,F,q,$),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function p(b,F,q){let $=q.wireframe===!0,Q=n[b.id];Q===void 0&&(Q={},n[b.id]=Q);let O=Q[F.id];O===void 0&&(O={},Q[F.id]=O);let V=O[$];return V===void 0&&(V=u(c()),O[$]=V),V}function u(b){let F=[],q=[],$=[];for(let Q=0;Q<t;Q++)F[Q]=0,q[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:$,object:b,attributes:{},index:null}}function m(b,F,q,$){let Q=r.attributes,O=F.attributes,V=0,W=q.getAttributes();for(let z in W)if(W[z].location>=0){let xe=Q[z],ae=O[z];if(ae===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),xe===void 0||xe.attribute!==ae||ae&&xe.data!==ae.data)return!0;V++}return r.attributesNum!==V||r.index!==$}function _(b,F,q,$){let Q={},O=F.attributes,V=0,W=q.getAttributes();for(let z in W)if(W[z].location>=0){let xe=O[z];xe===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor));let ae={};ae.attribute=xe,xe&&xe.data&&(ae.data=xe.data),Q[z]=ae,V++}r.attributes=Q,r.attributesNum=V,r.index=$}function x(){let b=r.newAttributes;for(let F=0,q=b.length;F<q;F++)b[F]=0}function f(b){g(b,0)}function g(b,F){let q=r.newAttributes,$=r.enabledAttributes,Q=r.attributeDivisors;q[b]=1,$[b]===0&&(i.enableVertexAttribArray(b),$[b]=1),Q[b]!==F&&(i.vertexAttribDivisor(b,F),Q[b]=F)}function R(){let b=r.newAttributes,F=r.enabledAttributes;for(let q=0,$=F.length;q<$;q++)F[q]!==b[q]&&(i.disableVertexAttribArray(q),F[q]=0)}function S(b,F,q,$,Q,O,V){V===!0?i.vertexAttribIPointer(b,F,q,Q,O):i.vertexAttribPointer(b,F,q,$,Q,O)}function v(b,F,q,$){x();let Q=$.attributes,O=q.getAttributes(),V=F.defaultAttributeValues;for(let W in O){let z=O[W];if(z.location>=0){let he=Q[W];if(he===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),he!==void 0){let xe=he.normalized,ae=he.itemSize,Te=e.get(he);if(Te===void 0)continue;let Ve=Te.buffer,nt=Te.type,Qe=Te.bytesPerElement,ee=nt===i.INT||nt===i.UNSIGNED_INT||he.gpuType===el;if(he.isInterleavedBufferAttribute){let de=he.data,De=de.stride,Ze=he.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<z.locationSize;ke++)g(z.location+ke,de.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<z.locationSize;ke++)f(z.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ke=0;ke<z.locationSize;ke++)S(z.location+ke,ae/z.locationSize,nt,xe,De*Qe,(Ze+ae/z.locationSize*ke)*Qe,ee)}else{if(he.isInstancedBufferAttribute){for(let de=0;de<z.locationSize;de++)g(z.location+de,he.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let de=0;de<z.locationSize;de++)f(z.location+de);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let de=0;de<z.locationSize;de++)S(z.location+de,ae/z.locationSize,nt,xe,ae*Qe,ae/z.locationSize*de*Qe,ee)}}else if(V!==void 0){let xe=V[W];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(z.location,xe);break;case 3:i.vertexAttrib3fv(z.location,xe);break;case 4:i.vertexAttrib4fv(z.location,xe);break;default:i.vertexAttrib1fv(z.location,xe)}}}}R()}function D(){N();for(let b in n){let F=n[b];for(let q in F){let $=F[q];for(let Q in $)d($[Q].object),delete $[Q];delete F[q]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;let F=n[b.id];for(let q in F){let $=F[q];for(let Q in $)d($[Q].object),delete $[Q];delete F[q]}delete n[b.id]}function U(b){for(let F in n){let q=n[F];if(q[b.id]===void 0)continue;let $=q[b.id];for(let Q in $)d($[Q].object),delete $[Q];delete q[b.id]}}function N(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:f,disableUnusedAttributes:R}}function N_(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function o(l,d,p){p!==0&&(i.drawArraysInstanced(n,l,d,p),t.update(d,n,p))}function a(l,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_];t.update(m,n,1)}function c(l,d,p,u){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)o(l[_],d[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,p);let _=0;for(let x=0;x<p;x++)_+=d[x]*u[x];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function U_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==Wn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let N=U===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==si&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ri&&!N)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:R,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:D,maxSamples:C}}function F_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new $t,a=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,m){let _=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,g=i.get(p);if(!s||_===null||_.length===0||r&&!f)r?d(null):l();else{let R=r?0:n,S=R*4,v=g.clippingState||null;c.value=v,v=d(_,u,S,m);for(let D=0;D!==S;++D)v[D]=t[D];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,u,m,_){let x=p!==null?p.length:0,f=null;if(x!==0){if(f=c.value,_!==!0||f===null){let g=m+x*4,R=u.matrixWorldInverse;a.getNormalMatrix(R),(f===null||f.length<g)&&(f=new Float32Array(g));for(let S=0,v=m;S!==x;++S,v+=4)o.copy(p[S]).applyMatrix4(R,a),o.normal.toArray(f,v),f[v+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function O_(i){let e=new WeakMap;function t(o,a){return a===$a?o.mapping=gs:a===ja&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$a||a===ja)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ya(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var mr=4,Id=[.125,.215,.35,.446,.526,.582],Es=20,ah=new uo,Dd=new St,lh=null,ch=0,hh=0,uh=!1,Ms=(1+Math.sqrt(5))/2,pr=1/Ms,Ld=[new T(-Ms,pr,0),new T(Ms,pr,0),new T(-pr,0,Ms),new T(pr,0,Ms),new T(0,Ms,-pr),new T(0,Ms,pr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],B_=new T,Bl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=B_}=r;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,ch,hh),this._renderer.xr.enabled=uh,e.scissorTest=!1,Fl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:ur,format:Wn,colorSpace:ls,depthBuffer:!1},s=Nd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z_(r)),this._blurMaterial=H_(r,e,t)}return s}_compileMaterial(e){let t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,ah)}_sceneToCubeUV(e,t,n,s,r){let c=new un(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(Dd),p.toneMapping=Pi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));let x=new jt({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),f=new Ae(new Ct,x),g=!1,R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,g=!0):(x.color.copy(Dd),g=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[S],r.y,r.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[S]));let D=this._cubeSize;Fl(s,v*D,S>2?D:0,D,D),p.setRenderTarget(s),g&&p.render(f,c),p.render(e,c)}f.geometry.dispose(),f.material.dispose(),p.toneMapping=m,p.autoClear=u,e.background=R}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===gs||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Fl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ah)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ld[(s-r-1)%Ld.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,p=new Ae(this._lodPlanes[s],l),u=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Es-1),x=r/_,f=isFinite(r)?1+Math.floor(d*x):Es;f>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Es}`);let g=[],R=0;for(let U=0;U<Es;++U){let N=U/x,w=Math.exp(-N*N/2);g.push(w),U===0?R+=w:U<f&&(R+=2*w)}for(let U=0;U<g.length;U++)g[U]=g[U]/R;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-n;let v=this._sizeLods[s],D=3*v*(s>S-mr?s-S+mr:0),C=4*(this._cubeSize-v);Fl(t,D,C,3*v,2*v),c.setRenderTarget(t),c.render(p,ah)}};function z_(i){let e=[],t=[],n=[],s=i,r=i-mr+1+Id.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-mr?c=Id[o-i+mr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),d=-l,p=1+l,u=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,_=6,x=3,f=2,g=1,R=new Float32Array(x*_*m),S=new Float32Array(f*_*m),v=new Float32Array(g*_*m);for(let C=0;C<m;C++){let U=C%3*2/3-1,N=C>2?0:-1,w=[U,N,0,U+2/3,N,0,U+2/3,N+1,0,U,N,0,U+2/3,N+1,0,U,N+1,0];R.set(w,x*_*C),S.set(u,f*_*C);let b=[C,C,C,C,C,C];v.set(b,g*_*C)}let D=new xt;D.setAttribute("position",new en(R,x)),D.setAttribute("uv",new en(S,f)),D.setAttribute("faceIndex",new en(v,g)),e.push(D),s>mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nd(i,e,t){let n=new di(i,e,t);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function H_(i,e,t){let n=new Float32Array(Es),s=new T(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ud(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Fd(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Eh(){return`

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
	`}function k_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===$a||c===ja,d=c===gs||c===_s;if(l||d){let p=e.get(a),u=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Bl(i)),p=l?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{let m=a.image;return l&&m&&m.height>0||d&&m&&s(m)?(t===null&&(t=new Bl(i)),p=l?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let c=0,l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function V_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function G_(i,e,t,n){let s={},r=new WeakMap;function o(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete s[u.id];let m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(p,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(p){let u=p.attributes;for(let m in u)e.update(u[m],i.ARRAY_BUFFER)}function l(p){let u=[],m=p.index,_=p.attributes.position,x=0;if(m!==null){let R=m.array;x=m.version;for(let S=0,v=R.length;S<v;S+=3){let D=R[S+0],C=R[S+1],U=R[S+2];u.push(D,C,C,U,U,D)}}else if(_!==void 0){let R=_.array;x=_.version;for(let S=0,v=R.length/3-1;S<v;S+=3){let D=S+0,C=S+1,U=S+2;u.push(D,C,C,U,U,D)}}else return;let f=new(th(u)?Gr:Vr)(u,1);f.version=x;let g=r.get(p);g&&e.remove(g),r.set(p,f)}function d(p){let u=r.get(p);if(u){let m=p.index;m!==null&&u.version<m.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:d}}function W_(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,m){i.drawElements(n,m,r,u*o),t.update(m,n,1)}function l(u,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,u*o,_),t.update(m,n,_))}function d(u,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,_);let f=0;for(let g=0;g<_;g++)f+=m[g];t.update(f,n,1)}function p(u,m,_,x){if(_===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u.length;g++)l(u[g]/o,m[g],x[g]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,x,0,_);let g=0;for(let R=0;R<_;R++)g+=m[R]*x[R];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function X_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Y_(i,e,t){let n=new WeakMap,s=new Zt;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0,u=n.get(a);if(u===void 0||u.count!==p){let w=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],S=0;m===!0&&(S=1),_===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,D=1;v>e.maxTextureSize&&(D=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*D*4*p),U=new kr(C,v,D,p);U.type=ri,U.needsUpdate=!0;let N=S*4;for(let b=0;b<p;b++){let F=f[b],q=g[b],$=R[b],Q=v*D*4*b;for(let O=0;O<F.count;O++){let V=O*N;m===!0&&(s.fromBufferAttribute(F,O),C[Q+V+0]=s.x,C[Q+V+1]=s.y,C[Q+V+2]=s.z,C[Q+V+3]=0),_===!0&&(s.fromBufferAttribute(q,O),C[Q+V+4]=s.x,C[Q+V+5]=s.y,C[Q+V+6]=s.z,C[Q+V+7]=0),x===!0&&(s.fromBufferAttribute($,O),C[Q+V+8]=s.x,C[Q+V+9]=s.y,C[Q+V+10]=s.z,C[Q+V+11]=$.itemSize===4?s.w:1)}}u={count:p,texture:U,size:new Ee(v,D)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];let _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function q_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,d=c.geometry,p=e.get(c,d);if(s.get(p)!==l&&(e.update(p),s.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return p}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var tf=new wn,Od=new Jr(1,1),nf=new kr,sf=new _a,rf=new Xr,Bd=[],zd=[],Hd=new Float32Array(16),kd=new Float32Array(9),Vd=new Float32Array(4);function _r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Bd[s];if(r===void 0&&(r=new Float32Array(s),Bd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hl(i,e){let t=zd[e];t===void 0&&(t=new Int32Array(e),zd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Z_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function j_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Vd.set(n),i.uniformMatrix2fv(this.addr,!1,Vd),nn(t,n)}}function Q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;kd.set(n),i.uniformMatrix3fv(this.addr,!1,kd),nn(t,n)}}function e0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Hd.set(n),i.uniformMatrix4fv(this.addr,!1,Hd),nn(t,n)}}function t0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function n0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function i0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function s0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function r0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function o0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function a0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function l0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function c0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Od.compareFunction=jc,r=Od):r=tf,t.setTexture2D(e||r,s)}function h0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sf,s)}function u0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rf,s)}function d0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nf,s)}function f0(i){switch(i){case 5126:return Z_;case 35664:return K_;case 35665:return J_;case 35666:return $_;case 35674:return j_;case 35675:return Q_;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return d0}}function p0(i,e){i.uniform1fv(this.addr,e)}function m0(i,e){let t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function g0(i,e){let t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function _0(i,e){let t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function x0(i,e){let t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function y0(i,e){let t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function v0(i,e){let t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function M0(i,e){i.uniform1iv(this.addr,e)}function E0(i,e){i.uniform2iv(this.addr,e)}function S0(i,e){i.uniform3iv(this.addr,e)}function b0(i,e){i.uniform4iv(this.addr,e)}function w0(i,e){i.uniform1uiv(this.addr,e)}function T0(i,e){i.uniform2uiv(this.addr,e)}function A0(i,e){i.uniform3uiv(this.addr,e)}function R0(i,e){i.uniform4uiv(this.addr,e)}function C0(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||tf,r[o])}function P0(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||sf,r[o])}function I0(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||rf,r[o])}function D0(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nf,r[o])}function L0(i){switch(i){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return _0;case 35674:return x0;case 35675:return y0;case 35676:return v0;case 5124:case 35670:return M0;case 35667:case 35671:return E0;case 35668:case 35672:return S0;case 35669:case 35673:return b0;case 5125:return w0;case 36294:return T0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return D0}}var fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=f0(t.type)}},ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L0(t.type)}},mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},dh=/(\w+)(\])?(\[|\.)?/g;function Gd(i,e){i.seq.push(e),i.map[e.id]=e}function N0(i,e,t){let n=i.name,s=n.length;for(dh.lastIndex=0;;){let r=dh.exec(n),o=dh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Gd(t,l===void 0?new fh(a,i,e):new ph(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new mh(a),Gd(t,p)),t=p}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);N0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Wd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var U0=37297,F0=0;function O0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Xd=new pt;function B0(i){At._getMatrix(Xd,At.workingColorSpace,i);let e=`mat3( ${Xd.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(i)){case Br:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+O0(i.getShaderSource(e),a)}else return r}function z0(i,e){let t=B0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function H0(i,e){let t;switch(e){case id:t="Linear";break;case sd:t="Reinhard";break;case rd:t="Cineon";break;case od:t="ACESFilmic";break;case ld:t="AgX";break;case cd:t="Neutral";break;case ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new T;function k0(){At.getLuminanceCoefficients(Ol);let i=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function G0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function W0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Mo(i){return i!==""}function qd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(i){return i.replace(X0,q0)}var Y0=new Map;function q0(i,e){let t=Mt[e];if(t===void 0){let n=Y0.get(e);if(n!==void 0)t=Mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gh(t)}var Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(i){return i.replace(Z0,K0)}function K0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function J0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function $0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function Q0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case td:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function ex(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=J0(t),l=$0(t),d=j0(t),p=Q0(t),u=ex(t),m=V0(t),_=G0(r),x=s.createProgram(),f,g,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mo).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mo).join(`
`),g.length>0&&(g+=`
`)):(f=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),g=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?H0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,z0("linearToOutputTexel",t.outputColorSpace),k0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mo).join(`
`)),o=gh(o),o=qd(o,t),o=Zd(o,t),a=gh(a),a=qd(a,t),a=Zd(a,t),o=Kd(o),a=Kd(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=R+f+o,v=R+g+a,D=Wd(s,s.VERTEX_SHADER,S),C=Wd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,D),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function U(F){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(x)||"",$=s.getShaderInfoLog(D)||"",Q=s.getShaderInfoLog(C)||"",O=q.trim(),V=$.trim(),W=Q.trim(),z=!0,he=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,C);else{let xe=Yd(s,D,"vertex"),ae=Yd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+xe+`
`+ae)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(V===""||W==="")&&(he=!1);he&&(F.diagnostics={runnable:z,programLog:O,vertexShader:{log:V,prefix:f},fragmentShader:{log:W,prefix:g}})}s.deleteShader(D),s.deleteShader(C),N=new gr(s,x),w=W0(s,x)}let N;this.getUniforms=function(){return N===void 0&&U(this),N};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,U0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=C,this}var nx=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xh(e),t.set(e,n)),n}},xh=class{constructor(e){this.id=nx++,this.code=e,this.usedTimes=0}};function ix(i,e,t,n,s,r,o){let a=new js,c=new _h,l=new Set,d=[],p=s.logarithmicDepthBuffer,u=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function f(w,b,F,q,$){let Q=q.fog,O=$.geometry,V=w.isMeshStandardMaterial?q.environment:null,W=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),z=W&&W.mapping===mo?W.image.height:null,he=_[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let xe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=xe!==void 0?xe.length:0,Te=0;O.morphAttributes.position!==void 0&&(Te=1),O.morphAttributes.normal!==void 0&&(Te=2),O.morphAttributes.color!==void 0&&(Te=3);let Ve,nt,Qe,ee;if(he){let _t=gi[he];Ve=_t.vertexShader,nt=_t.fragmentShader}else Ve=w.vertexShader,nt=w.fragmentShader,c.update(w),Qe=c.getVertexShaderID(w),ee=c.getFragmentShaderID(w);let de=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Ze=$.isInstancedMesh===!0,ke=$.isBatchedMesh===!0,Re=!!w.map,gt=!!w.matcap,L=!!W,fe=!!w.aoMap,me=!!w.lightMap,ce=!!w.bumpMap,ge=!!w.normalMap,Le=!!w.displacementMap,pe=!!w.emissiveMap,Se=!!w.metalnessMap,je=!!w.roughnessMap,ze=w.anisotropy>0,I=w.clearcoat>0,y=w.dispersion>0,Y=w.iridescence>0,te=w.sheen>0,_e=w.transmission>0,P=ze&&!!w.anisotropyMap,B=I&&!!w.clearcoatMap,Z=I&&!!w.clearcoatNormalMap,le=I&&!!w.clearcoatRoughnessMap,be=Y&&!!w.iridescenceMap,ve=Y&&!!w.iridescenceThicknessMap,we=te&&!!w.sheenColorMap,Fe=te&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Ne=!!w.specularColorMap,ht=!!w.specularIntensityMap,H=_e&&!!w.transmissionMap,Ie=_e&&!!w.thicknessMap,Oe=!!w.gradientMap,Ke=!!w.alphaMap,Ce=w.alphaTest>0,Me=!!w.alphaHash,Je=!!w.extensions,ft=Pi;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ft=i.toneMapping);let Lt={shaderID:he,shaderType:w.type,shaderName:w.name,vertexShader:Ve,fragmentShader:nt,defines:w.defines,customVertexShaderID:Qe,customFragmentShaderID:ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:ke,batchingColor:ke&&$._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&$.instanceColor!==null,instancingMorph:Ze&&$.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ls,alphaToCoverage:!!w.alphaToCoverage,map:Re,matcap:gt,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:z,aoMap:fe,lightMap:me,bumpMap:ce,normalMap:ge,displacementMap:u&&Le,emissiveMap:pe,normalMapObjectSpace:ge&&w.normalMapType===fd,normalMapTangentSpace:ge&&w.normalMapType===$c,metalnessMap:Se,roughnessMap:je,anisotropy:ze,anisotropyMap:P,clearcoat:I,clearcoatMap:B,clearcoatNormalMap:Z,clearcoatRoughnessMap:le,dispersion:y,iridescence:Y,iridescenceMap:be,iridescenceThicknessMap:ve,sheen:te,sheenColorMap:we,sheenRoughnessMap:Fe,specularMap:Be,specularColorMap:Ne,specularIntensityMap:ht,transmission:_e,transmissionMap:H,thicknessMap:Ie,gradientMap:Oe,opaque:w.transparent===!1&&w.blending===os&&w.alphaToCoverage===!1,alphaMap:Ke,alphaTest:Ce,alphaHash:Me,combine:w.combine,mapUv:Re&&x(w.map.channel),aoMapUv:fe&&x(w.aoMap.channel),lightMapUv:me&&x(w.lightMap.channel),bumpMapUv:ce&&x(w.bumpMap.channel),normalMapUv:ge&&x(w.normalMap.channel),displacementMapUv:Le&&x(w.displacementMap.channel),emissiveMapUv:pe&&x(w.emissiveMap.channel),metalnessMapUv:Se&&x(w.metalnessMap.channel),roughnessMapUv:je&&x(w.roughnessMap.channel),anisotropyMapUv:P&&x(w.anisotropyMap.channel),clearcoatMapUv:B&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Z&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&x(w.sheenRoughnessMap.channel),specularMapUv:Be&&x(w.specularMap.channel),specularColorMapUv:Ne&&x(w.specularColorMap.channel),specularIntensityMapUv:ht&&x(w.specularIntensityMap.channel),transmissionMapUv:H&&x(w.transmissionMap.channel),thicknessMapUv:Ie&&x(w.thicknessMap.channel),alphaMapUv:Ke&&x(w.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ge||ze),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!O.attributes.uv&&(Re||Ke),fog:!!Q,useFog:w.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:De,skinning:$.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:Re&&w.map.isVideoTexture===!0&&At.getTransfer(w.map.colorSpace)===Ot,decodeVideoTextureEmissive:pe&&w.emissiveMap.isVideoTexture===!0&&At.getTransfer(w.emissiveMap.colorSpace)===Ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===cn,flipSided:w.side===An,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Je&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&w.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let F in w.defines)b.push(F),b.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(R(b,w),S(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function R(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let b=_[w.type],F;if(b){let q=gi[b];F=bd.clone(q.uniforms)}else F=w.uniforms;return F}function D(w,b){let F;for(let q=0,$=d.length;q<$;q++){let Q=d[q];if(Q.cacheKey===b){F=Q,++F.usedTimes;break}}return F===void 0&&(F=new tx(i,b,w,r),d.push(F)),F}function C(w){if(--w.usedTimes===0){let b=d.indexOf(w);d[b]=d[d.length-1],d.pop(),w.destroy()}}function U(w){c.remove(w)}function N(){c.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:v,acquireProgram:D,releaseProgram:C,releaseShaderCache:U,programs:d,dispose:N}}function sx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function rx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $d(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(p,u,m,_,x,f){let g=i[e];return g===void 0?(g={id:p.id,object:p,geometry:u,material:m,groupOrder:_,renderOrder:p.renderOrder,z:x,group:f},i[e]=g):(g.id=p.id,g.object=p,g.geometry=u,g.material=m,g.groupOrder=_,g.renderOrder=p.renderOrder,g.z=x,g.group=f),e++,g}function a(p,u,m,_,x,f){let g=o(p,u,m,_,x,f);m.transmission>0?n.push(g):m.transparent===!0?s.push(g):t.push(g)}function c(p,u,m,_,x,f){let g=o(p,u,m,_,x,f);m.transmission>0?n.unshift(g):m.transparent===!0?s.unshift(g):t.unshift(g)}function l(p,u){t.length>1&&t.sort(p||rx),n.length>1&&n.sort(u||$d),s.length>1&&s.sort(u||$d)}function d(){for(let p=e,u=i.length;p<u;p++){let m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:d,sort:l}}function ox(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new jd,i.set(n,[o])):s>=r.length?(o=new jd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ax(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new St};break;case"SpotLight":t={position:new T,direction:new T,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function lx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var cx=0;function hx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ux(i){let e=new ax,t=lx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,r=new Rt,o=new Rt;function a(l){let d=0,p=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,_=0,x=0,f=0,g=0,R=0,S=0,v=0,D=0,C=0,U=0;l.sort(hx);for(let w=0,b=l.length;w<b;w++){let F=l[w],q=F.color,$=F.intensity,Q=F.distance,O=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=q.r*$,p+=q.g*$,u+=q.b*$;else if(F.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(F.sh.coefficients[V],$);U++}else if(F.isDirectionalLight){let V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let W=F.shadow,z=t.get(F);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=O,n.directionalShadowMatrix[m]=F.shadow.matrix,R++}n.directional[m]=V,m++}else if(F.isSpotLight){let V=e.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(q).multiplyScalar($),V.distance=Q,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,n.spot[x]=V;let W=F.shadow;if(F.map&&(n.spotLightMap[D]=F.map,D++,W.updateMatrices(F),F.castShadow&&C++),n.spotLightMatrix[x]=W.matrix,F.castShadow){let z=t.get(F);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=O,v++}x++}else if(F.isRectAreaLight){let V=e.get(F);V.color.copy(q).multiplyScalar($),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),n.rectArea[f]=V,f++}else if(F.isPointLight){let V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){let W=F.shadow,z=t.get(F);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=F.shadow.matrix,S++}n.point[_]=V,_++}else if(F.isHemisphereLight){let V=e.get(F);V.skyColor.copy(F.color).multiplyScalar($),V.groundColor.copy(F.groundColor).multiplyScalar($),n.hemi[g]=V,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;let N=n.hash;(N.directionalLength!==m||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==f||N.hemiLength!==g||N.numDirectionalShadows!==R||N.numPointShadows!==S||N.numSpotShadows!==v||N.numSpotMaps!==D||N.numLightProbes!==U)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=f,n.point.length=_,n.hemi.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=U,N.directionalLength=m,N.pointLength=_,N.spotLength=x,N.rectAreaLength=f,N.hemiLength=g,N.numDirectionalShadows=R,N.numPointShadows=S,N.numSpotShadows=v,N.numSpotMaps=D,N.numLightProbes=U,n.version=cx++)}function c(l,d){let p=0,u=0,m=0,_=0,x=0,f=d.matrixWorldInverse;for(let g=0,R=l.length;g<R;g++){let S=l[g];if(S.isDirectionalLight){let v=n.directional[p];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),p++}else if(S.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),m++}else if(S.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(f),o.identity(),r.copy(S.matrixWorld),r.premultiply(f),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(f),u++}else if(S.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(f),x++}}}return{setup:a,setupView:c,state:n}}function Qd(i){let e=new ux(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function dx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Qd(i),e.set(s,[a])):r>=o.length?(a=new Qd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
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
}`;function mx(i,e,t){let n=new nr,s=new Ee,r=new Ee,o=new Zt,a=new Ia({depthPacking:dd}),c=new Da,l={},d=t.maxTextureSize,p={[bi]:An,[An]:bi,[cn]:cn},u=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:fx,fragmentShader:px}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new xt;_.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ae(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let g=this.type;this.render=function(C,U,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;let w=i.getRenderTarget(),b=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Ci),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let $=g!==mi&&this.type===mi,Q=g===mi&&this.type!==mi;for(let O=0,V=C.length;O<V;O++){let W=C[O],z=W.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let he=z.getFrameExtents();if(s.multiply(he),r.copy(z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/he.x),s.x=r.x*he.x,z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/he.y),s.y=r.y*he.y,z.mapSize.y=r.y)),z.map===null||$===!0||Q===!0){let ae=this.type!==mi?{minFilter:In,magFilter:In}:{};z.map!==null&&z.map.dispose(),z.map=new di(s.x,s.y,ae),z.map.texture.name=W.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let xe=z.getViewportCount();for(let ae=0;ae<xe;ae++){let Te=z.getViewport(ae);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),q.viewport(o),z.updateMatrices(W,ae),n=z.getFrustum(),v(U,N,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===mi&&R(z,N),z.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(w,b,F)};function R(C,U){let N=e.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new di(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(U,null,N,u,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(U,null,N,m,x,null)}function S(C,U,N,w){let b=null,F=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)b=F;else if(b=N.isPointLight===!0?c:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let q=b.uuid,$=U.uuid,Q=l[q];Q===void 0&&(Q={},l[q]=Q);let O=Q[$];O===void 0&&(O=b.clone(),Q[$]=O,U.addEventListener("dispose",D)),b=O}if(b.visible=U.visible,b.wireframe=U.wireframe,w===mi?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:p[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let q=i.properties.get(b);q.light=N}return b}function v(C,U,N,w,b){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===mi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);let $=e.update(C),Q=C.material;if(Array.isArray(Q)){let O=$.groups;for(let V=0,W=O.length;V<W;V++){let z=O[V],he=Q[z.materialIndex];if(he&&he.visible){let xe=S(C,he,w,b);C.onBeforeShadow(i,C,U,N,$,xe,z),i.renderBufferDirect(N,null,$,xe,C,z),C.onAfterShadow(i,C,U,N,$,xe,z)}}}else if(Q.visible){let O=S(C,Q,w,b);C.onBeforeShadow(i,C,U,N,$,O,null),i.renderBufferDirect(N,null,$,O,C,null),C.onAfterShadow(i,C,U,N,$,O,null)}}let q=C.children;for(let $=0,Q=q.length;$<Q;$++)v(q[$],U,N,w,b)}function D(C){C.target.removeEventListener("dispose",D);for(let N in l){let w=l[N],b=C.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var gx={[Wa]:Xa,[Ya]:Ka,[qa]:Ja,[as]:Za,[Xa]:Wa,[Ka]:Ya,[Ja]:qa,[Za]:as};function _x(i,e){function t(){let H=!1,Ie=new Zt,Oe=null,Ke=new Zt(0,0,0,0);return{setMask:function(Ce){Oe!==Ce&&!H&&(i.colorMask(Ce,Ce,Ce,Ce),Oe=Ce)},setLocked:function(Ce){H=Ce},setClear:function(Ce,Me,Je,ft,Lt){Lt===!0&&(Ce*=ft,Me*=ft,Je*=ft),Ie.set(Ce,Me,Je,ft),Ke.equals(Ie)===!1&&(i.clearColor(Ce,Me,Je,ft),Ke.copy(Ie))},reset:function(){H=!1,Oe=null,Ke.set(-1,0,0,0)}}}function n(){let H=!1,Ie=!1,Oe=null,Ke=null,Ce=null;return{setReversed:function(Me){if(Ie!==Me){let Je=e.get("EXT_clip_control");Me?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ie=Me;let ft=Ce;Ce=null,this.setClear(ft)}},getReversed:function(){return Ie},setTest:function(Me){Me?de(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(Me){Oe!==Me&&!H&&(i.depthMask(Me),Oe=Me)},setFunc:function(Me){if(Ie&&(Me=gx[Me]),Ke!==Me){switch(Me){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case qa:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ke=Me}},setLocked:function(Me){H=Me},setClear:function(Me){Ce!==Me&&(Ie&&(Me=1-Me),i.clearDepth(Me),Ce=Me)},reset:function(){H=!1,Oe=null,Ke=null,Ce=null,Ie=!1}}}function s(){let H=!1,Ie=null,Oe=null,Ke=null,Ce=null,Me=null,Je=null,ft=null,Lt=null;return{setTest:function(_t){H||(_t?de(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(_t){Ie!==_t&&!H&&(i.stencilMask(_t),Ie=_t)},setFunc:function(_t,Xn,Hn){(Oe!==_t||Ke!==Xn||Ce!==Hn)&&(i.stencilFunc(_t,Xn,Hn),Oe=_t,Ke=Xn,Ce=Hn)},setOp:function(_t,Xn,Hn){(Me!==_t||Je!==Xn||ft!==Hn)&&(i.stencilOp(_t,Xn,Hn),Me=_t,Je=Xn,ft=Hn)},setLocked:function(_t){H=_t},setClear:function(_t){Lt!==_t&&(i.clearStencil(_t),Lt=_t)},reset:function(){H=!1,Ie=null,Oe=null,Ke=null,Ce=null,Me=null,Je=null,ft=null,Lt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,d={},p={},u=new WeakMap,m=[],_=null,x=!1,f=null,g=null,R=null,S=null,v=null,D=null,C=null,U=new St(0,0,0),N=0,w=!1,b=null,F=null,q=null,$=null,Q=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,W=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=W>=2);let he=null,xe={},ae=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),Ve=new Zt().fromArray(ae),nt=new Zt().fromArray(Te);function Qe(H,Ie,Oe,Ke){let Ce=new Uint8Array(4),Me=i.createTexture();i.bindTexture(H,Me),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<Oe;Je++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,Ke,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(Ie+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Me}let ee={};ee[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(as),ce(!1),ge(Oc),de(i.CULL_FACE),fe(Ci);function de(H){d[H]!==!0&&(i.enable(H),d[H]=!0)}function De(H){d[H]!==!1&&(i.disable(H),d[H]=!1)}function Ze(H,Ie){return p[H]!==Ie?(i.bindFramebuffer(H,Ie),p[H]=Ie,H===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ie),H===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function ke(H,Ie){let Oe=m,Ke=!1;if(H){Oe=u.get(Ie),Oe===void 0&&(Oe=[],u.set(Ie,Oe));let Ce=H.textures;if(Oe.length!==Ce.length||Oe[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Je=Ce.length;Me<Je;Me++)Oe[Me]=i.COLOR_ATTACHMENT0+Me;Oe.length=Ce.length,Ke=!0}}else Oe[0]!==i.BACK&&(Oe[0]=i.BACK,Ke=!0);Ke&&i.drawBuffers(Oe)}function Re(H){return _!==H?(i.useProgram(H),_=H,!0):!1}let gt={[Vi]:i.FUNC_ADD,[Bu]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};gt[Hu]=i.MIN,gt[ku]=i.MAX;let L={[Vu]:i.ZERO,[Gu]:i.ONE,[Wu]:i.SRC_COLOR,[ca]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[Zu]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[Xu]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[Ku]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[ju]:i.ONE_MINUS_CONSTANT_COLOR,[Qu]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(H,Ie,Oe,Ke,Ce,Me,Je,ft,Lt,_t){if(H===Ci){x===!0&&(De(i.BLEND),x=!1);return}if(x===!1&&(de(i.BLEND),x=!0),H!==Ou){if(H!==f||_t!==w){if((g!==Vi||v!==Vi)&&(i.blendEquation(i.FUNC_ADD),g=Vi,v=Vi),_t)switch(H){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zc:i.blendFunc(i.ONE,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}R=null,S=null,D=null,C=null,U.set(0,0,0),N=0,f=H,w=_t}return}Ce=Ce||Ie,Me=Me||Oe,Je=Je||Ke,(Ie!==g||Ce!==v)&&(i.blendEquationSeparate(gt[Ie],gt[Ce]),g=Ie,v=Ce),(Oe!==R||Ke!==S||Me!==D||Je!==C)&&(i.blendFuncSeparate(L[Oe],L[Ke],L[Me],L[Je]),R=Oe,S=Ke,D=Me,C=Je),(ft.equals(U)===!1||Lt!==N)&&(i.blendColor(ft.r,ft.g,ft.b,Lt),U.copy(ft),N=Lt),f=H,w=!1}function me(H,Ie){H.side===cn?De(i.CULL_FACE):de(i.CULL_FACE);let Oe=H.side===An;Ie&&(Oe=!Oe),ce(Oe),H.blending===os&&H.transparent===!1?fe(Ci):fe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ke=H.stencilWrite;a.setTest(Ke),Ke&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),pe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(H){b!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),b=H)}function ge(H){H!==Nu?(de(i.CULL_FACE),H!==F&&(H===Oc?i.cullFace(i.BACK):H===Uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),F=H}function Le(H){H!==q&&(V&&i.lineWidth(H),q=H)}function pe(H,Ie,Oe){H?(de(i.POLYGON_OFFSET_FILL),($!==Ie||Q!==Oe)&&(i.polygonOffset(Ie,Oe),$=Ie,Q=Oe)):De(i.POLYGON_OFFSET_FILL)}function Se(H){H?de(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function je(H){H===void 0&&(H=i.TEXTURE0+O-1),he!==H&&(i.activeTexture(H),he=H)}function ze(H,Ie,Oe){Oe===void 0&&(he===null?Oe=i.TEXTURE0+O-1:Oe=he);let Ke=xe[Oe];Ke===void 0&&(Ke={type:void 0,texture:void 0},xe[Oe]=Ke),(Ke.type!==H||Ke.texture!==Ie)&&(he!==Oe&&(i.activeTexture(Oe),he=Oe),i.bindTexture(H,Ie||ee[H]),Ke.type=H,Ke.texture=Ie)}function I(){let H=xe[he];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Y(){try{i.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{i.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{i.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function P(){try{i.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function B(){try{i.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{i.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{i.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{i.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{i.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(H){Ve.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Ve.copy(H))}function Fe(H){nt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),nt.copy(H))}function Be(H,Ie){let Oe=l.get(Ie);Oe===void 0&&(Oe=new WeakMap,l.set(Ie,Oe));let Ke=Oe.get(H);Ke===void 0&&(Ke=i.getUniformBlockIndex(Ie,H.name),Oe.set(H,Ke))}function Ne(H,Ie){let Ke=l.get(Ie).get(H);c.get(Ie)!==Ke&&(i.uniformBlockBinding(Ie,Ke,H.__bindingPointIndex),c.set(Ie,Ke))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},he=null,xe={},p={},u=new WeakMap,m=[],_=null,x=!1,f=null,g=null,R=null,S=null,v=null,D=null,C=null,U=new St(0,0,0),N=0,w=!1,b=null,F=null,q=null,$=null,Q=null,Ve.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:De,bindFramebuffer:Ze,drawBuffers:ke,useProgram:Re,setBlending:fe,setMaterial:me,setFlipSided:ce,setCullFace:ge,setLineWidth:Le,setPolygonOffset:pe,setScissorTest:Se,activeTexture:je,bindTexture:ze,unbindTexture:I,compressedTexImage2D:y,compressedTexImage3D:Y,texImage2D:be,texImage3D:ve,updateUBOMapping:Be,uniformBlockBinding:Ne,texStorage2D:Z,texStorage3D:le,texSubImage2D:te,texSubImage3D:_e,compressedTexSubImage2D:P,compressedTexSubImage3D:B,scissor:we,viewport:Fe,reset:ht}}function xx(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,d=new WeakMap,p,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,y){return m?new OffscreenCanvas(I,y):Hr("canvas")}function x(I,y,Y){let te=1,_e=ze(I);if((_e.width>Y||_e.height>Y)&&(te=Y/Math.max(_e.width,_e.height)),te<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let P=Math.floor(te*_e.width),B=Math.floor(te*_e.height);p===void 0&&(p=_(P,B));let Z=y?_(P,B):p;return Z.width=P,Z.height=B,Z.getContext("2d").drawImage(I,0,0,P,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+P+"x"+B+")."),Z}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function f(I){return I.generateMipmaps}function g(I){i.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(I,y,Y,te,_e=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let P=y;if(y===i.RED&&(Y===i.FLOAT&&(P=i.R32F),Y===i.HALF_FLOAT&&(P=i.R16F),Y===i.UNSIGNED_BYTE&&(P=i.R8)),y===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(P=i.R8UI),Y===i.UNSIGNED_SHORT&&(P=i.R16UI),Y===i.UNSIGNED_INT&&(P=i.R32UI),Y===i.BYTE&&(P=i.R8I),Y===i.SHORT&&(P=i.R16I),Y===i.INT&&(P=i.R32I)),y===i.RG&&(Y===i.FLOAT&&(P=i.RG32F),Y===i.HALF_FLOAT&&(P=i.RG16F),Y===i.UNSIGNED_BYTE&&(P=i.RG8)),y===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(P=i.RG8UI),Y===i.UNSIGNED_SHORT&&(P=i.RG16UI),Y===i.UNSIGNED_INT&&(P=i.RG32UI),Y===i.BYTE&&(P=i.RG8I),Y===i.SHORT&&(P=i.RG16I),Y===i.INT&&(P=i.RG32I)),y===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(P=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(P=i.RGB16UI),Y===i.UNSIGNED_INT&&(P=i.RGB32UI),Y===i.BYTE&&(P=i.RGB8I),Y===i.SHORT&&(P=i.RGB16I),Y===i.INT&&(P=i.RGB32I)),y===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),Y===i.UNSIGNED_INT&&(P=i.RGBA32UI),Y===i.BYTE&&(P=i.RGBA8I),Y===i.SHORT&&(P=i.RGBA16I),Y===i.INT&&(P=i.RGBA32I)),y===i.RGB&&(Y===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(P=i.R11F_G11F_B10F)),y===i.RGBA){let B=_e?Br:At.getTransfer(te);Y===i.FLOAT&&(P=i.RGBA32F),Y===i.HALF_FLOAT&&(P=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(P=B===Ot?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return(P===i.R16F||P===i.R32F||P===i.RG16F||P===i.RG32F||P===i.RGBA16F||P===i.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function v(I,y){let Y;return I?y===null||y===Ki||y===dr?Y=i.DEPTH24_STENCIL8:y===ri?Y=i.DEPTH32F_STENCIL8:y===hr&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ki||y===dr?Y=i.DEPTH_COMPONENT24:y===ri?Y=i.DEPTH_COMPONENT32F:y===hr&&(Y=i.DEPTH_COMPONENT16),Y}function D(I,y){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==In&&I.minFilter!==ti?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function C(I){let y=I.target;y.removeEventListener("dispose",C),N(y),y.isVideoTexture&&d.delete(y)}function U(I){let y=I.target;y.removeEventListener("dispose",U),b(y)}function N(I){let y=n.get(I);if(y.__webglInit===void 0)return;let Y=I.source,te=u.get(Y);if(te){let _e=te[y.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&w(I),Object.keys(te).length===0&&u.delete(Y)}n.remove(I)}function w(I){let y=n.get(I);i.deleteTexture(y.__webglTexture);let Y=I.source,te=u.get(Y);delete te[y.__cacheKey],o.memory.textures--}function b(I){let y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(y.__webglFramebuffer[te]))for(let _e=0;_e<y.__webglFramebuffer[te].length;_e++)i.deleteFramebuffer(y.__webglFramebuffer[te][_e]);else i.deleteFramebuffer(y.__webglFramebuffer[te]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[te])}else{if(Array.isArray(y.__webglFramebuffer))for(let te=0;te<y.__webglFramebuffer.length;te++)i.deleteFramebuffer(y.__webglFramebuffer[te]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let te=0;te<y.__webglColorRenderbuffer.length;te++)y.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[te]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Y=I.textures;for(let te=0,_e=Y.length;te<_e;te++){let P=n.get(Y[te]);P.__webglTexture&&(i.deleteTexture(P.__webglTexture),o.memory.textures--),n.remove(Y[te])}n.remove(I)}let F=0;function q(){F=0}function $(){let I=F;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function Q(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function O(I,y){let Y=n.get(I);if(I.isVideoTexture&&Se(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){let te=I.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Y,I,y);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+y)}function V(I,y){let Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){ee(Y,I,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+y)}function W(I,y){let Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){ee(Y,I,y);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+y)}function z(I,y){let Y=n.get(I);if(I.version>0&&Y.__version!==I.version){de(Y,I,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+y)}let he={[ua]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},xe={[In]:i.NEAREST,[hd]:i.NEAREST_MIPMAP_NEAREST,[go]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[Qa]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},ae={[pd]:i.NEVER,[vd]:i.ALWAYS,[md]:i.LESS,[jc]:i.LEQUAL,[gd]:i.EQUAL,[yd]:i.GEQUAL,[_d]:i.GREATER,[xd]:i.NOTEQUAL};function Te(I,y){if(y.type===ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ti||y.magFilter===Qa||y.magFilter===go||y.magFilter===Zi||y.minFilter===ti||y.minFilter===Qa||y.minFilter===go||y.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,he[y.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,he[y.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,he[y.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,xe[y.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===In||y.minFilter!==go&&y.minFilter!==Zi||y.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ve(I,y){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",C));let te=y.source,_e=u.get(te);_e===void 0&&(_e={},u.set(te,_e));let P=Q(y);if(P!==I.__cacheKey){_e[P]===void 0&&(_e[P]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),_e[P].usedTimes++;let B=_e[I.__cacheKey];B!==void 0&&(_e[I.__cacheKey].usedTimes--,B.usedTimes===0&&w(y)),I.__cacheKey=P,I.__webglTexture=_e[P].texture}return Y}function nt(I,y,Y){return Math.floor(Math.floor(I/Y)/y)}function Qe(I,y,Y,te){let P=I.updateRanges;if(P.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,Y,te,y.data);else{P.sort((ve,we)=>ve.start-we.start);let B=0;for(let ve=1;ve<P.length;ve++){let we=P[B],Fe=P[ve],Be=we.start+we.count,Ne=nt(Fe.start,y.width,4),ht=nt(we.start,y.width,4);Fe.start<=Be+1&&Ne===ht&&nt(Fe.start+Fe.count-1,y.width,4)===Ne?we.count=Math.max(we.count,Fe.start+Fe.count-we.start):(++B,P[B]=Fe)}P.length=B+1;let Z=i.getParameter(i.UNPACK_ROW_LENGTH),le=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ve=0,we=P.length;ve<we;ve++){let Fe=P[ve],Be=Math.floor(Fe.start/4),Ne=Math.ceil(Fe.count/4),ht=Be%y.width,H=Math.floor(Be/y.width),Ie=Ne,Oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,ht,H,Ie,Oe,Y,te,y.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Z),i.pixelStorei(i.UNPACK_SKIP_PIXELS,le),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function ee(I,y,Y){let te=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=i.TEXTURE_3D);let _e=Ve(I,y),P=y.source;t.bindTexture(te,I.__webglTexture,i.TEXTURE0+Y);let B=n.get(P);if(P.version!==B.__version||_e===!0){t.activeTexture(i.TEXTURE0+Y);let Z=At.getPrimaries(At.workingColorSpace),le=y.colorSpace===Ii?null:At.getPrimaries(y.colorSpace),be=y.colorSpace===Ii||Z===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ve=x(y.image,!1,s.maxTextureSize);ve=je(y,ve);let we=r.convert(y.format,y.colorSpace),Fe=r.convert(y.type),Be=S(y.internalFormat,we,Fe,y.colorSpace,y.isVideoTexture);Te(te,y);let Ne,ht=y.mipmaps,H=y.isVideoTexture!==!0,Ie=B.__version===void 0||_e===!0,Oe=P.dataReady,Ke=D(y,ve);if(y.isDepthTexture)Be=v(y.format===fr,y.type),Ie&&(H?t.texStorage2D(i.TEXTURE_2D,1,Be,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,Be,ve.width,ve.height,0,we,Fe,null));else if(y.isDataTexture)if(ht.length>0){H&&Ie&&t.texStorage2D(i.TEXTURE_2D,Ke,Be,ht[0].width,ht[0].height);for(let Ce=0,Me=ht.length;Ce<Me;Ce++)Ne=ht[Ce],H?Oe&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Ne.width,Ne.height,we,Fe,Ne.data):t.texImage2D(i.TEXTURE_2D,Ce,Be,Ne.width,Ne.height,0,we,Fe,Ne.data);y.generateMipmaps=!1}else H?(Ie&&t.texStorage2D(i.TEXTURE_2D,Ke,Be,ve.width,ve.height),Oe&&Qe(y,ve,we,Fe)):t.texImage2D(i.TEXTURE_2D,0,Be,ve.width,ve.height,0,we,Fe,ve.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){H&&Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,Be,ht[0].width,ht[0].height,ve.depth);for(let Ce=0,Me=ht.length;Ce<Me;Ce++)if(Ne=ht[Ce],y.format!==Wn)if(we!==null)if(H){if(Oe)if(y.layerUpdates.size>0){let Je=oh(Ne.width,Ne.height,y.format,y.type);for(let ft of y.layerUpdates){let Lt=Ne.data.subarray(ft*Je/Ne.data.BYTES_PER_ELEMENT,(ft+1)*Je/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,ft,Ne.width,Ne.height,1,we,Lt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,Ne.width,Ne.height,ve.depth,we,Ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ce,Be,Ne.width,Ne.height,ve.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,Ne.width,Ne.height,ve.depth,we,Fe,Ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ce,Be,Ne.width,Ne.height,ve.depth,0,we,Fe,Ne.data)}else{H&&Ie&&t.texStorage2D(i.TEXTURE_2D,Ke,Be,ht[0].width,ht[0].height);for(let Ce=0,Me=ht.length;Ce<Me;Ce++)Ne=ht[Ce],y.format!==Wn?we!==null?H?Oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ce,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(i.TEXTURE_2D,Ce,Be,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Oe&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Ne.width,Ne.height,we,Fe,Ne.data):t.texImage2D(i.TEXTURE_2D,Ce,Be,Ne.width,Ne.height,0,we,Fe,Ne.data)}else if(y.isDataArrayTexture)if(H){if(Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,Be,ve.width,ve.height,ve.depth),Oe)if(y.layerUpdates.size>0){let Ce=oh(ve.width,ve.height,y.format,y.type);for(let Me of y.layerUpdates){let Je=ve.data.subarray(Me*Ce/ve.data.BYTES_PER_ELEMENT,(Me+1)*Ce/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,ve.width,ve.height,1,we,Fe,Je)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,we,Fe,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ve.width,ve.height,ve.depth,0,we,Fe,ve.data);else if(y.isData3DTexture)H?(Ie&&t.texStorage3D(i.TEXTURE_3D,Ke,Be,ve.width,ve.height,ve.depth),Oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,we,Fe,ve.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ve.width,ve.height,ve.depth,0,we,Fe,ve.data);else if(y.isFramebufferTexture){if(Ie)if(H)t.texStorage2D(i.TEXTURE_2D,Ke,Be,ve.width,ve.height);else{let Ce=ve.width,Me=ve.height;for(let Je=0;Je<Ke;Je++)t.texImage2D(i.TEXTURE_2D,Je,Be,Ce,Me,0,we,Fe,null),Ce>>=1,Me>>=1}}else if(ht.length>0){if(H&&Ie){let Ce=ze(ht[0]);t.texStorage2D(i.TEXTURE_2D,Ke,Be,Ce.width,Ce.height)}for(let Ce=0,Me=ht.length;Ce<Me;Ce++)Ne=ht[Ce],H?Oe&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,we,Fe,Ne):t.texImage2D(i.TEXTURE_2D,Ce,Be,we,Fe,Ne);y.generateMipmaps=!1}else if(H){if(Ie){let Ce=ze(ve);t.texStorage2D(i.TEXTURE_2D,Ke,Be,Ce.width,Ce.height)}Oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Fe,ve)}else t.texImage2D(i.TEXTURE_2D,0,Be,we,Fe,ve);f(y)&&g(te),B.__version=P.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function de(I,y,Y){if(y.image.length!==6)return;let te=Ve(I,y),_e=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);let P=n.get(_e);if(_e.version!==P.__version||te===!0){t.activeTexture(i.TEXTURE0+Y);let B=At.getPrimaries(At.workingColorSpace),Z=y.colorSpace===Ii?null:At.getPrimaries(y.colorSpace),le=y.colorSpace===Ii||B===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let be=y.isCompressedTexture||y.image[0].isCompressedTexture,ve=y.image[0]&&y.image[0].isDataTexture,we=[];for(let Me=0;Me<6;Me++)!be&&!ve?we[Me]=x(y.image[Me],!0,s.maxCubemapSize):we[Me]=ve?y.image[Me].image:y.image[Me],we[Me]=je(y,we[Me]);let Fe=we[0],Be=r.convert(y.format,y.colorSpace),Ne=r.convert(y.type),ht=S(y.internalFormat,Be,Ne,y.colorSpace),H=y.isVideoTexture!==!0,Ie=P.__version===void 0||te===!0,Oe=_e.dataReady,Ke=D(y,Fe);Te(i.TEXTURE_CUBE_MAP,y);let Ce;if(be){H&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,ht,Fe.width,Fe.height);for(let Me=0;Me<6;Me++){Ce=we[Me].mipmaps;for(let Je=0;Je<Ce.length;Je++){let ft=Ce[Je];y.format!==Wn?Be!==null?H?Oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,ft.width,ft.height,Be,ft.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,ht,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,ft.width,ft.height,Be,Ne,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,ht,ft.width,ft.height,0,Be,Ne,ft.data)}}}else{if(Ce=y.mipmaps,H&&Ie){Ce.length>0&&Ke++;let Me=ze(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,ht,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(ve){H?Oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,we[Me].width,we[Me].height,Be,Ne,we[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ht,we[Me].width,we[Me].height,0,Be,Ne,we[Me].data);for(let Je=0;Je<Ce.length;Je++){let Lt=Ce[Je].image[Me].image;H?Oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,Lt.width,Lt.height,Be,Ne,Lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,ht,Lt.width,Lt.height,0,Be,Ne,Lt.data)}}else{H?Oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Be,Ne,we[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ht,Be,Ne,we[Me]);for(let Je=0;Je<Ce.length;Je++){let ft=Ce[Je];H?Oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,Be,Ne,ft.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,ht,Be,Ne,ft.image[Me])}}}f(y)&&g(i.TEXTURE_CUBE_MAP),P.__version=_e.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function De(I,y,Y,te,_e,P){let B=r.convert(Y.format,Y.colorSpace),Z=r.convert(Y.type),le=S(Y.internalFormat,B,Z,Y.colorSpace),be=n.get(y),ve=n.get(Y);if(ve.__renderTarget=y,!be.__hasExternalTextures){let we=Math.max(1,y.width>>P),Fe=Math.max(1,y.height>>P);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,P,le,we,Fe,y.depth,0,B,Z,null):t.texImage2D(_e,P,le,we,Fe,0,B,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),pe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,_e,ve.__webglTexture,0,Le(y)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,_e,ve.__webglTexture,P),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(I,y,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),y.depthBuffer){let te=y.depthTexture,_e=te&&te.isDepthTexture?te.type:null,P=v(y.stencilBuffer,_e),B=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=Le(y);pe(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,P,y.width,y.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,P,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,P,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,I)}else{let te=y.textures;for(let _e=0;_e<te.length;_e++){let P=te[_e],B=r.convert(P.format,P.colorSpace),Z=r.convert(P.type),le=S(P.internalFormat,B,Z,P.colorSpace),be=Le(y);Y&&pe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,le,y.width,y.height):pe(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,le,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,le,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(I,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(y.depthTexture);te.__renderTarget=y,(!te.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),O(y.depthTexture,0);let _e=te.__webglTexture,P=Le(y);if(y.depthTexture.format===Ks)pe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(y.depthTexture.format===fr)pe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Re(I){let y=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let te=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),te){let _e=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,te.removeEventListener("dispose",_e)};te.addEventListener("dispose",_e),y.__depthDisposeCallback=_e}y.__boundDepthTexture=te}if(I.depthTexture&&!y.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let te=I.texture.mipmaps;te&&te.length>0?ke(y.__webglFramebuffer[0],I):ke(y.__webglFramebuffer,I)}else if(Y){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]===void 0)y.__webglDepthbuffer[te]=i.createRenderbuffer(),Ze(y.__webglDepthbuffer[te],I,!1);else{let _e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=y.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,P)}}else{let te=I.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ze(y.__webglDepthbuffer,I,!1);else{let _e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,P)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(I,y,Y){let te=n.get(I);y!==void 0&&De(te.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Re(I)}function L(I){let y=I.texture,Y=n.get(I),te=n.get(y);I.addEventListener("dispose",U);let _e=I.textures,P=I.isWebGLCubeRenderTarget===!0,B=_e.length>1;if(B||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=y.version,o.memory.textures++),P){Y.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[Z]=[];for(let le=0;le<y.mipmaps.length;le++)Y.__webglFramebuffer[Z][le]=i.createFramebuffer()}else Y.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)Y.__webglFramebuffer[Z]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(B)for(let Z=0,le=_e.length;Z<le;Z++){let be=n.get(_e[Z]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&pe(I)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Z=0;Z<_e.length;Z++){let le=_e[Z];Y.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Z]);let be=r.convert(le.format,le.colorSpace),ve=r.convert(le.type),we=S(le.internalFormat,be,ve,le.colorSpace,I.isXRRenderTarget===!0),Fe=Le(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,we,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Te(i.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)De(Y.__webglFramebuffer[Z][le],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le);else De(Y.__webglFramebuffer[Z],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(y)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(B){for(let Z=0,le=_e.length;Z<le;Z++){let be=_e[Z],ve=n.get(be),we=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,ve.__webglTexture),Te(we,be),De(Y.__webglFramebuffer,I,be,i.COLOR_ATTACHMENT0+Z,we,0),f(be)&&g(we)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Z=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,te.__webglTexture),Te(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)De(Y.__webglFramebuffer[le],I,y,i.COLOR_ATTACHMENT0,Z,le);else De(Y.__webglFramebuffer,I,y,i.COLOR_ATTACHMENT0,Z,0);f(y)&&g(Z),t.unbindTexture()}I.depthBuffer&&Re(I)}function fe(I){let y=I.textures;for(let Y=0,te=y.length;Y<te;Y++){let _e=y[Y];if(f(_e)){let P=R(I),B=n.get(_e).__webglTexture;t.bindTexture(P,B),g(P),t.unbindTexture()}}}let me=[],ce=[];function ge(I){if(I.samples>0){if(pe(I)===!1){let y=I.textures,Y=I.width,te=I.height,_e=i.COLOR_BUFFER_BIT,P=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=n.get(I),Z=y.length>1;if(Z)for(let be=0;be<y.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer);let le=I.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let be=0;be<y.length;be++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,B.__webglColorRenderbuffer[be]);let ve=n.get(y[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,Y,te,0,0,Y,te,_e,i.NEAREST),c===!0&&(me.length=0,ce.length=0,me.push(i.COLOR_ATTACHMENT0+be),I.depthBuffer&&I.resolveDepthBuffer===!1&&(me.push(P),ce.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let be=0;be<y.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,B.__webglColorRenderbuffer[be]);let ve=n.get(y[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Le(I){return Math.min(s.maxSamples,I.samples)}function pe(I){let y=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Se(I){let y=o.render.frame;d.get(I)!==y&&(d.set(I,y),I.update())}function je(I,y){let Y=I.colorSpace,te=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==ls&&Y!==Ii&&(At.getTransfer(Y)===Ot?(te!==Wn||_e!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),y}function ze(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=q,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=gt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=De,this.useMultisampledRTT=pe}function yx(i,e){function t(n,s=Ii){let r,o=At.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===ur)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===Kc)return i.RGB;if(n===Wn)return i.RGBA;if(n===Ks)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===il)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===Jc)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===ol)return i.RGBA_INTEGER;if(n===_o||n===xo||n===yo||n===vo)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===al||n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===dl)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pl||n===ml||n===gl||n===_l||n===xl||n===yl||n===vl||n===Ml||n===El||n===Sl||n===bl||n===wl||n===Tl||n===Al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ml)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Cl||n===Pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Dl||n===Ll||n===Nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
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

}`,yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $r(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ni({vertexShader:vx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new Dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vh=class extends ui{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,p=null,u=null,m=null,_=null,x=typeof XRWebGLBinding<"u",f=new yh,g={},R=t.getContextAttributes(),S=null,v=null,D=[],C=[],U=new Ee,N=null,w=new un;w.viewport=new Zt;let b=new un;b.viewport=new Zt;let F=[w,b],q=new Ga,$=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=D[ee];return de===void 0&&(de=new Qs,D[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=D[ee];return de===void 0&&(de=new Qs,D[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=D[ee];return de===void 0&&(de=new Qs,D[ee]=de),de.getHandSpace()};function O(ee){let de=C.indexOf(ee.inputSource);if(de===-1)return;let De=D[de];De!==void 0&&(De.update(ee.inputSource,ee.frame,l||o),De.dispatchEvent({type:ee.type,data:ee.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",W);for(let ee=0;ee<D.length;ee++){let de=C[ee];de!==null&&(C[ee]=null,D[ee].disconnect(de))}$=null,Q=null,f.reset();for(let ee in g)delete g[ee];e.setRenderTarget(S),m=null,u=null,p=null,s=null,v=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(U),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Ze=null,ke=null;R.depth&&(ke=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=R.stencil?fr:Ks,Ze=R.stencil?dr:Ki);let Re={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Re),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new di(u.textureWidth,u.textureHeight,{format:Wn,type:si,depthTexture:new Jr(u.textureWidth,u.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let De={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,De),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new di(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function W(ee){for(let de=0;de<ee.removed.length;de++){let De=ee.removed[de],Ze=C.indexOf(De);Ze>=0&&(C[Ze]=null,D[Ze].disconnect(De))}for(let de=0;de<ee.added.length;de++){let De=ee.added[de],Ze=C.indexOf(De);if(Ze===-1){for(let Re=0;Re<D.length;Re++)if(Re>=C.length){C.push(De),Ze=Re;break}else if(C[Re]===null){C[Re]=De,Ze=Re;break}if(Ze===-1)break}let ke=D[Ze];ke&&ke.connect(De)}}let z=new T,he=new T;function xe(ee,de,De){z.setFromMatrixPosition(de.matrixWorld),he.setFromMatrixPosition(De.matrixWorld);let Ze=z.distanceTo(he),ke=de.projectionMatrix.elements,Re=De.projectionMatrix.elements,gt=ke[14]/(ke[10]-1),L=ke[14]/(ke[10]+1),fe=(ke[9]+1)/ke[5],me=(ke[9]-1)/ke[5],ce=(ke[8]-1)/ke[0],ge=(Re[8]+1)/Re[0],Le=gt*ce,pe=gt*ge,Se=Ze/(-ce+ge),je=Se*-ce;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(je),ee.translateZ(Se),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ke[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let ze=gt+Se,I=L+Se,y=Le-je,Y=pe+(Ze-je),te=fe*L/I*ze,_e=me*L/I*ze;ee.projectionMatrix.makePerspective(y,Y,te,_e,ze,I),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ae(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let de=ee.near,De=ee.far;f.texture!==null&&(f.depthNear>0&&(de=f.depthNear),f.depthFar>0&&(De=f.depthFar)),q.near=b.near=w.near=de,q.far=b.far=w.far=De,($!==q.near||Q!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),$=q.near,Q=q.far),q.layers.mask=ee.layers.mask|6,w.layers.mask=q.layers.mask&3,b.layers.mask=q.layers.mask&5;let Ze=ee.parent,ke=q.cameras;ae(q,Ze);for(let Re=0;Re<ke.length;Re++)ae(ke[Re],Ze);ke.length===2?xe(q,w,b):q.projectionMatrix.copy(w.projectionMatrix),Te(ee,q,Ze)};function Te(ee,de,De){De===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(De.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=cs*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(ee){c=ee,u!==null&&(u.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(q)},this.getCameraTexture=function(ee){return g[ee]};let Ve=null;function nt(ee,de){if(d=de.getViewerPose(l||o),_=de,d!==null){let De=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Ze=!1;De.length!==q.cameras.length&&(q.cameras.length=0,Ze=!0);for(let L=0;L<De.length;L++){let fe=De[L],me=null;if(m!==null)me=m.getViewport(fe);else{let ge=p.getViewSubImage(u,fe);me=ge.viewport,L===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let ce=F[L];ce===void 0&&(ce=new un,ce.layers.enable(L),ce.viewport=new Zt,F[L]=ce),ce.matrix.fromArray(fe.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(fe.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(me.x,me.y,me.width,me.height),L===0&&(q.matrix.copy(ce.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ze===!0&&q.cameras.push(ce)}let ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=n.getBinding();let L=p.getDepthInformation(De[0]);L&&L.isValid&&L.texture&&f.init(L,s.renderState)}if(ke&&ke.includes("camera-access")&&x){e.state.unbindTexture(),p=n.getBinding();for(let L=0;L<De.length;L++){let fe=De[L].camera;if(fe){let me=g[fe];me||(me=new $r,g[fe]=me);let ce=p.getCameraImage(fe);me.sourceTexture=ce}}}}for(let De=0;De<D.length;De++){let Ze=C[De],ke=D[De];Ze!==null&&ke!==void 0&&ke.update(Ze,de,l||o)}Ve&&Ve(ee,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),_=null}let Qe=new ef;Qe.setAnimationLoop(nt),this.setAnimationLoop=function(ee){Ve=ee},this.dispose=function(){}}},vs=new fn,Ex=new Rt;function Sx(i,e){function t(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function n(f,g){g.color.getRGB(f.fogColor.value,nh(i)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function s(f,g,R,S,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(f,g):g.isMeshToonMaterial?(r(f,g),p(f,g)):g.isMeshPhongMaterial?(r(f,g),d(f,g)):g.isMeshStandardMaterial?(r(f,g),u(f,g),g.isMeshPhysicalMaterial&&m(f,g,v)):g.isMeshMatcapMaterial?(r(f,g),_(f,g)):g.isMeshDepthMaterial?r(f,g):g.isMeshDistanceMaterial?(r(f,g),x(f,g)):g.isMeshNormalMaterial?r(f,g):g.isLineBasicMaterial?(o(f,g),g.isLineDashedMaterial&&a(f,g)):g.isPointsMaterial?c(f,g,R,S):g.isSpriteMaterial?l(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,t(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,t(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===An&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,t(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===An&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,t(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,t(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);let R=e.get(g),S=R.envMap,v=R.envMapRotation;S&&(f.envMap.value=S,vs.copy(v),vs.x*=-1,vs.y*=-1,vs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),f.envMapRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(vs)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,f.aoMapTransform))}function o(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,t(g.map,f.mapTransform))}function a(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function c(f,g,R,S){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*R,f.scale.value=S*.5,g.map&&(f.map.value=g.map,t(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function l(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,t(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function d(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function p(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function u(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function m(f,g,R){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===An&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=R.texture,f.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,g){g.matcap&&(f.matcap.value=g.matcap)}function x(f,g){let R=e.get(g).light;f.referencePosition.value.setFromMatrixPosition(R.matrixWorld),f.nearDistance.value=R.shadow.camera.near,f.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bx(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,S){let v=S.program;n.uniformBlockBinding(R,v)}function l(R,S){let v=s[R.id];v===void 0&&(_(R),v=d(R),s[R.id]=v,R.addEventListener("dispose",f));let D=S.program;n.updateUBOMapping(R,D);let C=e.render.frame;r[R.id]!==C&&(u(R),r[R.id]=C)}function d(R){let S=p();R.__bindingPointIndex=S;let v=i.createBuffer(),D=R.__size,C=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function p(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(R){let S=s[R.id],v=R.uniforms,D=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,U=v.length;C<U;C++){let N=Array.isArray(v[C])?v[C]:[v[C]];for(let w=0,b=N.length;w<b;w++){let F=N[w];if(m(F,C,w,D)===!0){let q=F.__offset,$=Array.isArray(F.value)?F.value:[F.value],Q=0;for(let O=0;O<$.length;O++){let V=$[O],W=x(V);typeof V=="number"||typeof V=="boolean"?(F.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,q+Q,F.__data)):V.isMatrix3?(F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0):(V.toArray(F.__data,Q),Q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,S,v,D){let C=R.value,U=S+"_"+v;if(D[U]===void 0)return typeof C=="number"||typeof C=="boolean"?D[U]=C:D[U]=C.clone(),!0;{let N=D[U];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return D[U]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(R){let S=R.uniforms,v=0,D=16;for(let U=0,N=S.length;U<N;U++){let w=Array.isArray(S[U])?S[U]:[S[U]];for(let b=0,F=w.length;b<F;b++){let q=w[b],$=Array.isArray(q.value)?q.value:[q.value];for(let Q=0,O=$.length;Q<O;Q++){let V=$[Q],W=x(V),z=v%D,he=z%W.boundary,xe=z+he;v+=he,xe!==0&&D-xe<W.storage&&(v+=D-xe),q.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=v,v+=W.storage}}}let C=v%D;return C>0&&(v+=D-C),R.__size=v,R.__cache={},this}function x(R){let S={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(S.boundary=4,S.storage=4):R.isVector2?(S.boundary=8,S.storage=8):R.isVector3||R.isColor?(S.boundary=16,S.storage=12):R.isVector4?(S.boundary=16,S.storage=16):R.isMatrix3?(S.boundary=48,S.storage=48):R.isMatrix4?(S.boundary=64,S.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),S}function f(R){let S=R.target;S.removeEventListener("dispose",f);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}var zl=class{constructor(e={}){let{canvas:t=Md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=new Uint32Array(4),x=new Int32Array(4),f=null,g=null,R=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,D=!1;this._outputColorSpace=an;let C=0,U=0,N=null,w=-1,b=null,F=new Zt,q=new Zt,$=null,Q=new St(0),O=0,V=t.width,W=t.height,z=1,he=null,xe=null,ae=new Zt(0,0,V,W),Te=new Zt(0,0,V,W),Ve=!1,nt=new nr,Qe=!1,ee=!1,de=new Rt,De=new T,Ze=new Zt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function gt(){return N===null?z:1}let L=n;function fe(A,G){return t.getContext(A,G)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),L===null){let G="webgl2";if(L=fe(G,A),L===null)throw fe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let me,ce,ge,Le,pe,Se,je,ze,I,y,Y,te,_e,P,B,Z,le,be,ve,we,Fe,Be,Ne,ht;function H(){me=new V_(L),me.init(),Be=new yx(L,me),ce=new U_(L,me,e,Be),ge=new _x(L,me),ce.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),Le=new X_(L),pe=new sx,Se=new xx(L,me,ge,pe,ce,Be,Le),je=new O_(v),ze=new k_(v),I=new $p(L),Ne=new L_(L,I),y=new G_(L,I,Le,Ne),Y=new q_(L,y,I,Le),ve=new Y_(L,ce,Se),Z=new F_(pe),te=new ix(v,je,ze,me,ce,Ne,Z),_e=new Sx(v,pe),P=new ox,B=new dx(me),be=new D_(v,je,ze,ge,Y,m,c),le=new mx(v,Y,ce),ht=new bx(L,Le,ce,ge),we=new N_(L,me,Le),Fe=new W_(L,me,Le),Le.programs=te.programs,v.capabilities=ce,v.extensions=me,v.properties=pe,v.renderLists=P,v.shadowMap=le,v.state=ge,v.info=Le}H();let Ie=new vh(v,L);this.xr=Ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(V,W,!1))},this.getSize=function(A){return A.set(V,W)},this.setSize=function(A,G,ne=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,W=G,t.width=Math.floor(A*z),t.height=Math.floor(G*z),ne===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(V*z,W*z).floor()},this.setDrawingBufferSize=function(A,G,ne){V=A,W=G,z=ne,t.width=Math.floor(A*ne),t.height=Math.floor(G*ne),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(ae)},this.setViewport=function(A,G,ne,ie){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,G,ne,ie),ge.viewport(F.copy(ae).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Te)},this.setScissor=function(A,G,ne,ie){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,G,ne,ie),ge.scissor(q.copy(Te).multiplyScalar(z).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(A){ge.setScissorTest(Ve=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,ne=!0){let ie=0;if(A){let K=!1;if(N!==null){let Pe=N.texture.format;K=Pe===ol||Pe===rl||Pe===sl}if(K){let Pe=N.texture.type,We=Pe===si||Pe===Ki||Pe===hr||Pe===dr||Pe===tl||Pe===nl,Ye=be.getClearColor(),qe=be.getClearAlpha(),et=Ye.r,ot=Ye.g,st=Ye.b;We?(_[0]=et,_[1]=ot,_[2]=st,_[3]=qe,L.clearBufferuiv(L.COLOR,0,_)):(x[0]=et,x[1]=ot,x[2]=st,x[3]=qe,L.clearBufferiv(L.COLOR,0,x))}else ie|=L.COLOR_BUFFER_BIT}G&&(ie|=L.DEPTH_BUFFER_BIT),ne&&(ie|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),be.dispose(),P.dispose(),B.dispose(),pe.dispose(),je.dispose(),ze.dispose(),Y.dispose(),Ne.dispose(),ht.dispose(),te.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Hn),Ie.removeEventListener("sessionend",xr),it.stop()};function Oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ke(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let A=Le.autoReset,G=le.enabled,ne=le.autoUpdate,ie=le.needsUpdate,K=le.type;H(),Le.autoReset=A,le.enabled=G,le.autoUpdate=ne,le.needsUpdate=ie,le.type=K}function Ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Me(A){let G=A.target;G.removeEventListener("dispose",Me),Je(G)}function Je(A){ft(A),pe.remove(A)}function ft(A){let G=pe.get(A).programs;G!==void 0&&(G.forEach(function(ne){te.releaseProgram(ne)}),A.isShaderMaterial&&te.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,ne,ie,K,Pe){G===null&&(G=ke);let We=K.isMesh&&K.matrixWorld.determinant()<0,Ye=yr(A,G,ne,ie,K);ge.setMaterial(ie,We);let qe=ne.index,et=1;if(ie.wireframe===!0){if(qe=y.getWireframeAttribute(ne),qe===void 0)return;et=2}let ot=ne.drawRange,st=ne.attributes.position,Et=ot.start*et,Pt=(ot.start+ot.count)*et;Pe!==null&&(Et=Math.max(Et,Pe.start*et),Pt=Math.min(Pt,(Pe.start+Pe.count)*et)),qe!==null?(Et=Math.max(Et,0),Pt=Math.min(Pt,qe.count)):st!=null&&(Et=Math.max(Et,0),Pt=Math.min(Pt,st.count));let Ut=Pt-Et;if(Ut<0||Ut===1/0)return;Ne.setup(K,ie,Ye,ne,qe);let ct,$e=we;if(qe!==null&&(ct=I.get(qe),$e=Fe,$e.setIndex(ct)),K.isMesh)ie.wireframe===!0?(ge.setLineWidth(ie.wireframeLinewidth*gt()),$e.setMode(L.LINES)):$e.setMode(L.TRIANGLES);else if(K.isLine){let tt=ie.linewidth;tt===void 0&&(tt=1),ge.setLineWidth(tt*gt()),K.isLineSegments?$e.setMode(L.LINES):K.isLineLoop?$e.setMode(L.LINE_LOOP):$e.setMode(L.LINE_STRIP)}else K.isPoints?$e.setMode(L.POINTS):K.isSprite&&$e.setMode(L.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))$e.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let tt=K._multiDrawStarts,Tt=K._multiDrawCounts,dt=K._multiDrawCount,vn=qe?I.get(qe).bytesPerElement:1,qn=pe.get(ie).currentProgram.getUniforms();for(let Qt=0;Qt<dt;Qt++)qn.setValue(L,"_gl_DrawID",Qt),$e.render(tt[Qt]/vn,Tt[Qt])}else if(K.isInstancedMesh)$e.renderInstances(Et,Ut,K.count);else if(ne.isInstancedBufferGeometry){let tt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Tt=Math.min(ne.instanceCount,tt);$e.renderInstances(Et,Ut,Tt)}else $e.render(Et,Ut)};function Lt(A,G,ne){A.transparent===!0&&A.side===cn&&A.forceSinglePass===!1?(A.side=An,A.needsUpdate=!0,yt(A,G,ne),A.side=bi,A.needsUpdate=!0,yt(A,G,ne),A.side=cn):yt(A,G,ne)}this.compile=function(A,G,ne=null){ne===null&&(ne=A),g=B.get(ne),g.init(G),S.push(g),ne.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),A!==ne&&A.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights();let ie=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Pe=K.material;if(Pe)if(Array.isArray(Pe))for(let We=0;We<Pe.length;We++){let Ye=Pe[We];Lt(Ye,ne,K),ie.add(Ye)}else Lt(Pe,ne,K),ie.add(Pe)}),g=S.pop(),ie},this.compileAsync=function(A,G,ne=null){let ie=this.compile(A,G,ne);return new Promise(K=>{function Pe(){if(ie.forEach(function(We){pe.get(We).currentProgram.isReady()&&ie.delete(We)}),ie.size===0){K(A);return}setTimeout(Pe,10)}me.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let _t=null;function Xn(A){_t&&_t(A)}function Hn(){it.stop()}function xr(){it.start()}let it=new ef;it.setAnimationLoop(Xn),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(A){_t=A,Ie.setAnimationLoop(A),A===null?it.stop():it.start()},Ie.addEventListener("sessionstart",Hn),Ie.addEventListener("sessionend",xr),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(G),G=Ie.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,G,N),g=B.get(A,S.length),g.init(G),S.push(g),de.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),nt.setFromProjectionMatrix(de,ei,G.reversedDepth),ee=this.localClippingEnabled,Qe=Z.init(this.clippingPlanes,ee),f=P.get(A,R.length),f.init(),R.push(f),Ie.enabled===!0&&Ie.isPresenting===!0){let Pe=v.xr.getDepthSensingMesh();Pe!==null&&Rn(Pe,G,-1/0,v.sortObjects)}Rn(A,G,0,v.sortObjects),f.finish(),v.sortObjects===!0&&f.sort(he,xe),Re=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Re&&be.addToRenderList(f,A),this.info.render.frame++,Qe===!0&&Z.beginShadows();let ne=g.state.shadowsArray;le.render(ne,A,G),Qe===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();let ie=f.opaque,K=f.transmissive;if(g.setupLights(),G.isArrayCamera){let Pe=G.cameras;if(K.length>0)for(let We=0,Ye=Pe.length;We<Ye;We++){let qe=Pe[We];ue(ie,K,A,qe)}Re&&be.render(A);for(let We=0,Ye=Pe.length;We<Ye;We++){let qe=Pe[We];bt(f,A,qe,qe.viewport)}}else K.length>0&&ue(ie,K,A,G),Re&&be.render(A),bt(f,A,G);N!==null&&U===0&&(Se.updateMultisampleRenderTarget(N),Se.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(v,A,G),Ne.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(g=S[S.length-1],Qe===!0&&Z.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,R.pop(),R.length>0?f=R[R.length-1]:f=null};function Rn(A,G,ne,ie){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||nt.intersectsSprite(A)){ie&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);let We=Y.update(A),Ye=A.material;Ye.visible&&f.push(A,We,Ye,ne,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||nt.intersectsObject(A))){let We=Y.update(A),Ye=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Ze.copy(We.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(Ye)){let qe=We.groups;for(let et=0,ot=qe.length;et<ot;et++){let st=qe[et],Et=Ye[st.materialIndex];Et&&Et.visible&&f.push(A,We,Et,ne,Ze.z,st)}}else Ye.visible&&f.push(A,We,Ye,ne,Ze.z,null)}}let Pe=A.children;for(let We=0,Ye=Pe.length;We<Ye;We++)Rn(Pe[We],G,ne,ie)}function bt(A,G,ne,ie){let K=A.opaque,Pe=A.transmissive,We=A.transparent;g.setupLightsView(ne),Qe===!0&&Z.setGlobalState(v.clippingPlanes,ne),ie&&ge.viewport(F.copy(ie)),K.length>0&&Nt(K,G,ne),Pe.length>0&&Nt(Pe,G,ne),We.length>0&&Nt(We,G,ne),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function ue(A,G,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new di(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?ur:si,minFilter:Zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));let Pe=g.state.transmissionRenderTarget[ie.id],We=ie.viewport||F;Pe.setSize(We.z*v.transmissionResolutionScale,We.w*v.transmissionResolutionScale);let Ye=v.getRenderTarget(),qe=v.getActiveCubeFace(),et=v.getActiveMipmapLevel();v.setRenderTarget(Pe),v.getClearColor(Q),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),Re&&be.render(ne);let ot=v.toneMapping;v.toneMapping=Pi;let st=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),Qe===!0&&Z.setGlobalState(v.clippingPlanes,ie),Nt(A,ne,ie),Se.updateMultisampleRenderTarget(Pe),Se.updateRenderTargetMipmap(Pe),me.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let Pt=0,Ut=G.length;Pt<Ut;Pt++){let ct=G[Pt],$e=ct.object,tt=ct.geometry,Tt=ct.material,dt=ct.group;if(Tt.side===cn&&$e.layers.test(ie.layers)){let vn=Tt.side;Tt.side=An,Tt.needsUpdate=!0,wt($e,ne,ie,tt,Tt,dt),Tt.side=vn,Tt.needsUpdate=!0,Et=!0}}Et===!0&&(Se.updateMultisampleRenderTarget(Pe),Se.updateRenderTargetMipmap(Pe))}v.setRenderTarget(Ye,qe,et),v.setClearColor(Q,O),st!==void 0&&(ie.viewport=st),v.toneMapping=ot}function Nt(A,G,ne){let ie=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Pe=A.length;K<Pe;K++){let We=A[K],Ye=We.object,qe=We.geometry,et=We.group,ot=We.material;ot.allowOverride===!0&&ie!==null&&(ot=ie),Ye.layers.test(ne.layers)&&wt(Ye,G,ne,qe,ot,et)}}function wt(A,G,ne,ie,K,Pe){A.onBeforeRender(v,G,ne,ie,K,Pe),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(v,G,ne,ie,A,Pe),K.transparent===!0&&K.side===cn&&K.forceSinglePass===!1?(K.side=An,K.needsUpdate=!0,v.renderBufferDirect(ne,G,ie,K,A,Pe),K.side=bi,K.needsUpdate=!0,v.renderBufferDirect(ne,G,ie,K,A,Pe),K.side=cn):v.renderBufferDirect(ne,G,ie,K,A,Pe),A.onAfterRender(v,G,ne,ie,K,Pe)}function yt(A,G,ne){G.isScene!==!0&&(G=ke);let ie=pe.get(A),K=g.state.lights,Pe=g.state.shadowsArray,We=K.state.version,Ye=te.getParameters(A,K.state,Pe,G,ne),qe=te.getProgramCacheKey(Ye),et=ie.programs;ie.environment=A.isMeshStandardMaterial?G.environment:null,ie.fog=G.fog,ie.envMap=(A.isMeshStandardMaterial?ze:je).get(A.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",Me),et=new Map,ie.programs=et);let ot=et.get(qe);if(ot!==void 0){if(ie.currentProgram===ot&&ie.lightsStateVersion===We)return ws(A,Ye),ot}else Ye.uniforms=te.getUniforms(A),A.onBeforeCompile(Ye,v),ot=te.acquireProgram(Ye,qe),et.set(qe,ot),ie.uniforms=Ye.uniforms;let st=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(st.clippingPlanes=Z.uniform),ws(A,Ye),ie.needsLights=vr(A),ie.lightsStateVersion=We,ie.needsLights&&(st.ambientLightColor.value=K.state.ambient,st.lightProbe.value=K.state.probe,st.directionalLights.value=K.state.directional,st.directionalLightShadows.value=K.state.directionalShadow,st.spotLights.value=K.state.spot,st.spotLightShadows.value=K.state.spotShadow,st.rectAreaLights.value=K.state.rectArea,st.ltc_1.value=K.state.rectAreaLTC1,st.ltc_2.value=K.state.rectAreaLTC2,st.pointLights.value=K.state.point,st.pointLightShadows.value=K.state.pointShadow,st.hemisphereLights.value=K.state.hemi,st.directionalShadowMap.value=K.state.directionalShadowMap,st.directionalShadowMatrix.value=K.state.directionalShadowMatrix,st.spotShadowMap.value=K.state.spotShadowMap,st.spotLightMatrix.value=K.state.spotLightMatrix,st.spotLightMap.value=K.state.spotLightMap,st.pointShadowMap.value=K.state.pointShadowMap,st.pointShadowMatrix.value=K.state.pointShadowMatrix),ie.currentProgram=ot,ie.uniformsList=null,ot}function Nn(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=gr.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function ws(A,G){let ne=pe.get(A);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.batchingColor=G.batchingColor,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}function yr(A,G,ne,ie,K){G.isScene!==!0&&(G=ke),Se.resetTextureUnits();let Pe=G.fog,We=ie.isMeshStandardMaterial?G.environment:null,Ye=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ls,qe=(ie.isMeshStandardMaterial?ze:je).get(ie.envMap||We),et=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ot=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),st=!!ne.morphAttributes.position,Et=!!ne.morphAttributes.normal,Pt=!!ne.morphAttributes.color,Ut=Pi;ie.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ut=v.toneMapping);let ct=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,$e=ct!==void 0?ct.length:0,tt=pe.get(ie),Tt=g.state.lights;if(Qe===!0&&(ee===!0||A!==b)){let rn=A===b&&ie.id===w;Z.setState(ie,A,rn)}let dt=!1;ie.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Tt.state.version||tt.outputColorSpace!==Ye||K.isBatchedMesh&&tt.batching===!1||!K.isBatchedMesh&&tt.batching===!0||K.isBatchedMesh&&tt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&tt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&tt.instancing===!1||!K.isInstancedMesh&&tt.instancing===!0||K.isSkinnedMesh&&tt.skinning===!1||!K.isSkinnedMesh&&tt.skinning===!0||K.isInstancedMesh&&tt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&tt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&tt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&tt.instancingMorph===!1&&K.morphTexture!==null||tt.envMap!==qe||ie.fog===!0&&tt.fog!==Pe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Z.numPlanes||tt.numIntersection!==Z.numIntersection)||tt.vertexAlphas!==et||tt.vertexTangents!==ot||tt.morphTargets!==st||tt.morphNormals!==Et||tt.morphColors!==Pt||tt.toneMapping!==Ut||tt.morphTargetsCount!==$e)&&(dt=!0):(dt=!0,tt.__version=ie.version);let vn=tt.currentProgram;dt===!0&&(vn=yt(ie,G,K));let qn=!1,Qt=!1,Di=!1,Ht=vn.getUniforms(),Mn=tt.uniforms;if(ge.useProgram(vn.program)&&(qn=!0,Qt=!0,Di=!0),ie.id!==w&&(w=ie.id,Qt=!0),qn||b!==A){ge.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ht.setValue(L,"projectionMatrix",A.projectionMatrix),Ht.setValue(L,"viewMatrix",A.matrixWorldInverse);let hn=Ht.map.cameraPosition;hn!==void 0&&hn.setValue(L,De.setFromMatrixPosition(A.matrixWorld)),ce.logarithmicDepthBuffer&&Ht.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ht.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Qt=!0,Di=!0)}if(K.isSkinnedMesh){Ht.setOptional(L,K,"bindMatrix"),Ht.setOptional(L,K,"bindMatrixInverse");let rn=K.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ht.setValue(L,"boneTexture",rn.boneTexture,Se))}K.isBatchedMesh&&(Ht.setOptional(L,K,"batchingTexture"),Ht.setValue(L,"batchingTexture",K._matricesTexture,Se),Ht.setOptional(L,K,"batchingIdTexture"),Ht.setValue(L,"batchingIdTexture",K._indirectTexture,Se),Ht.setOptional(L,K,"batchingColorTexture"),K._colorsTexture!==null&&Ht.setValue(L,"batchingColorTexture",K._colorsTexture,Se));let En=ne.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&ve.update(K,ne,vn),(Qt||tt.receiveShadow!==K.receiveShadow)&&(tt.receiveShadow=K.receiveShadow,Ht.setValue(L,"receiveShadow",K.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Mn.envMap.value=qe,Mn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&G.environment!==null&&(Mn.envMapIntensity.value=G.environmentIntensity),Qt&&(Ht.setValue(L,"toneMappingExposure",v.toneMappingExposure),tt.needsLights&&Yn(Mn,Di),Pe&&ie.fog===!0&&_e.refreshFogUniforms(Mn,Pe),_e.refreshMaterialUniforms(Mn,ie,z,W,g.state.transmissionRenderTarget[A.id]),gr.upload(L,Nn(tt),Mn,Se)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(gr.upload(L,Nn(tt),Mn,Se),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ht.setValue(L,"center",K.center),Ht.setValue(L,"modelViewMatrix",K.modelViewMatrix),Ht.setValue(L,"normalMatrix",K.normalMatrix),Ht.setValue(L,"modelMatrix",K.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let rn=ie.uniformsGroups;for(let hn=0,As=rn.length;hn<As;hn++){let ai=rn[hn];ht.update(ai,vn),ht.bind(ai,vn)}}return vn}function Yn(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function vr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,G,ne){let ie=pe.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),pe.get(A.texture).__webglTexture=G,pe.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){let ne=pe.get(A);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0};let Mr=L.createFramebuffer();this.setRenderTarget=function(A,G=0,ne=0){N=A,C=G,U=ne;let ie=!0,K=null,Pe=!1,We=!1;if(A){let qe=pe.get(A);if(qe.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(L.FRAMEBUFFER,null),ie=!1;else if(qe.__webglFramebuffer===void 0)Se.setupRenderTarget(A);else if(qe.__hasExternalTextures)Se.rebindTextures(A,pe.get(A.texture).__webglTexture,pe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let st=A.depthTexture;if(qe.__boundDepthTexture!==st){if(st!==null&&pe.has(st)&&(A.width!==st.image.width||A.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(A)}}let et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(We=!0);let ot=pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ot[G])?K=ot[G][ne]:K=ot[G],Pe=!0):A.samples>0&&Se.useMultisampledRTT(A)===!1?K=pe.get(A).__webglMultisampledFramebuffer:Array.isArray(ot)?K=ot[ne]:K=ot,F.copy(A.viewport),q.copy(A.scissor),$=A.scissorTest}else F.copy(ae).multiplyScalar(z).floor(),q.copy(Te).multiplyScalar(z).floor(),$=Ve;if(ne!==0&&(K=Mr),ge.bindFramebuffer(L.FRAMEBUFFER,K)&&ie&&ge.drawBuffers(A,K),ge.viewport(F),ge.scissor(q),ge.setScissorTest($),Pe){let qe=pe.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,qe.__webglTexture,ne)}else if(We){let qe=G;for(let et=0;et<A.textures.length;et++){let ot=pe.get(A.textures[et]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+et,ot.__webglTexture,ne,qe)}}else if(A!==null&&ne!==0){let qe=pe.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qe.__webglTexture,ne)}w=-1},this.readRenderTargetPixels=function(A,G,ne,ie,K,Pe,We,Ye=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(qe=qe[We]),qe){ge.bindFramebuffer(L.FRAMEBUFFER,qe);try{let et=A.textures[Ye],ot=et.format,st=et.type;if(!ce.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ie&&ne>=0&&ne<=A.height-K&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ye),L.readPixels(G,ne,ie,K,Be.convert(ot),Be.convert(st),Pe))}finally{let et=N!==null?pe.get(N).__webglFramebuffer:null;ge.bindFramebuffer(L.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,G,ne,ie,K,Pe,We,Ye=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(qe=qe[We]),qe)if(G>=0&&G<=A.width-ie&&ne>=0&&ne<=A.height-K){ge.bindFramebuffer(L.FRAMEBUFFER,qe);let et=A.textures[Ye],ot=et.format,st=et.type;if(!ce.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.bufferData(L.PIXEL_PACK_BUFFER,Pe.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ye),L.readPixels(G,ne,ie,K,Be.convert(ot),Be.convert(st),0);let Pt=N!==null?pe.get(N).__webglFramebuffer:null;ge.bindFramebuffer(L.FRAMEBUFFER,Pt);let Ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ed(L,Ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Pe),L.deleteBuffer(Et),L.deleteSync(Ut),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,ne=0){let ie=Math.pow(2,-ne),K=Math.floor(A.image.width*ie),Pe=Math.floor(A.image.height*ie),We=G!==null?G.x:0,Ye=G!==null?G.y:0;Se.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,ne,0,0,We,Ye,K,Pe),ge.unbindTexture()};let Ro=L.createFramebuffer(),Ts=L.createFramebuffer();this.copyTextureToTexture=function(A,G,ne=null,ie=null,K=0,Pe=null){Pe===null&&(K!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=K,K=0):Pe=0);let We,Ye,qe,et,ot,st,Et,Pt,Ut,ct=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(ne!==null)We=ne.max.x-ne.min.x,Ye=ne.max.y-ne.min.y,qe=ne.isBox3?ne.max.z-ne.min.z:1,et=ne.min.x,ot=ne.min.y,st=ne.isBox3?ne.min.z:0;else{let En=Math.pow(2,-K);We=Math.floor(ct.width*En),Ye=Math.floor(ct.height*En),A.isDataArrayTexture?qe=ct.depth:A.isData3DTexture?qe=Math.floor(ct.depth*En):qe=1,et=0,ot=0,st=0}ie!==null?(Et=ie.x,Pt=ie.y,Ut=ie.z):(Et=0,Pt=0,Ut=0);let $e=Be.convert(G.format),tt=Be.convert(G.type),Tt;G.isData3DTexture?(Se.setTexture3D(G,0),Tt=L.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Se.setTexture2DArray(G,0),Tt=L.TEXTURE_2D_ARRAY):(Se.setTexture2D(G,0),Tt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);let dt=L.getParameter(L.UNPACK_ROW_LENGTH),vn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),qn=L.getParameter(L.UNPACK_SKIP_PIXELS),Qt=L.getParameter(L.UNPACK_SKIP_ROWS),Di=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,et),L.pixelStorei(L.UNPACK_SKIP_ROWS,ot),L.pixelStorei(L.UNPACK_SKIP_IMAGES,st);let Ht=A.isDataArrayTexture||A.isData3DTexture,Mn=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){let En=pe.get(A),rn=pe.get(G),hn=pe.get(En.__renderTarget),As=pe.get(rn.__renderTarget);ge.bindFramebuffer(L.READ_FRAMEBUFFER,hn.__webglFramebuffer),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let ai=0;ai<qe;ai++)Ht&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(A).__webglTexture,K,st+ai),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(G).__webglTexture,Pe,Ut+ai)),L.blitFramebuffer(et,ot,We,Ye,Et,Pt,We,Ye,L.DEPTH_BUFFER_BIT,L.NEAREST);ge.bindFramebuffer(L.READ_FRAMEBUFFER,null),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||pe.has(A)){let En=pe.get(A),rn=pe.get(G);ge.bindFramebuffer(L.READ_FRAMEBUFFER,Ro),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ts);for(let hn=0;hn<qe;hn++)Ht?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,En.__webglTexture,K,st+hn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,En.__webglTexture,K),Mn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rn.__webglTexture,Pe,Ut+hn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,rn.__webglTexture,Pe),K!==0?L.blitFramebuffer(et,ot,We,Ye,Et,Pt,We,Ye,L.COLOR_BUFFER_BIT,L.NEAREST):Mn?L.copyTexSubImage3D(Tt,Pe,Et,Pt,Ut+hn,et,ot,We,Ye):L.copyTexSubImage2D(Tt,Pe,Et,Pt,et,ot,We,Ye);ge.bindFramebuffer(L.READ_FRAMEBUFFER,null),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Mn?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Tt,Pe,Et,Pt,Ut,We,Ye,qe,$e,tt,ct.data):G.isCompressedArrayTexture?L.compressedTexSubImage3D(Tt,Pe,Et,Pt,Ut,We,Ye,qe,$e,ct.data):L.texSubImage3D(Tt,Pe,Et,Pt,Ut,We,Ye,qe,$e,tt,ct):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Pe,Et,Pt,We,Ye,$e,tt,ct.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Pe,Et,Pt,ct.width,ct.height,$e,ct.data):L.texSubImage2D(L.TEXTURE_2D,Pe,Et,Pt,We,Ye,$e,tt,ct);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Di),Pe===0&&G.generateMipmaps&&L.generateMipmap(Tt),ge.unbindTexture()},this.initRenderTarget=function(A){pe.get(A).__webglFramebuffer===void 0&&Se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Se.setTextureCube(A,0):A.isData3DTexture?Se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Se.setTexture2DArray(A,0):Se.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){C=0,U=0,N=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};var of={type:"change"},bh={type:"start"},lf={type:"end"},kl=new Gi,af=new $t,wx=Math.cos(70*oi.DEG2RAD),sn=new T,Ln=2*Math.PI,zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sh=1e-6,Vl=class extends ms{constructor(e,t=null){super(e,t),this.state=zt.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tn.ROTATE,MIDDLE:Tn.DOLLY,RIGHT:Tn.PAN},this.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Bt,this._lastTargetPosition=new T,this._quat=new Bt().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cr,this._sphericalDelta=new cr,this._scale=1,this._panOffset=new T,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new T,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ax.bind(this),this._onPointerDown=Tx.bind(this),this._onPointerUp=Rx.bind(this),this._onContextMenu=Ux.bind(this),this._onMouseWheel=Ix.bind(this),this._onKeyDown=Dx.bind(this),this._onTouchStart=Lx.bind(this),this._onTouchMove=Nx.bind(this),this._onMouseDown=Cx.bind(this),this._onMouseMove=Px.bind(this),this._interceptControlDown=Fx.bind(this),this._interceptControlUp=Ox.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(of),this.update(),this.state=zt.NONE}update(e=null){let t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ln:n>Math.PI&&(n-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=sn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(kl.origin.copy(this.object.position),kl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kl.direction))<wx?this.object.lookAt(this.target):(af.setFromNormalAndCoplanarPoint(this.object.up,this.target),kl.intersectPlane(af,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sh||this._lastTargetPosition.distanceToSquared(this.target)>Sh?(this.dispatchEvent(of),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ln/60*this.autoRotateSpeed*e:Ln/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;sn.copy(s).sub(this.target);let r=sn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Tx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ax(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Rx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lf),this.state=zt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Cx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Tn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=zt.DOLLY;break;case Tn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=zt.ROTATE}break;case Tn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=zt.PAN}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(bh)}function Px(i){switch(this.state){case zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ix(i){this.enabled===!1||this.enableZoom===!1||this.state!==zt.NONE||(i.preventDefault(),this.dispatchEvent(bh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lf))}function Dx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Lx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=zt.TOUCH_ROTATE;break;case ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=zt.TOUCH_PAN;break;default:this.state=zt.NONE}break;case 2:switch(this.touches.TWO){case ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=zt.TOUCH_DOLLY_PAN;break;case ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=zt.TOUCH_DOLLY_ROTATE;break;default:this.state=zt.NONE}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(bh)}function Nx(i){switch(this._trackPointer(i),this.state){case zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=zt.NONE}}function Ux(i){this.enabled!==!1&&i.preventDefault()}function Fx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ox(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ss=new Gn,yn=new T,Ji=new T,Yt=new Bt,cf={X:new T(1,0,0),Y:new T(0,1,0),Z:new T(0,0,1)},wh={type:"change"},hf={type:"mouseDown",mode:null},uf={type:"mouseUp",mode:null},df={type:"objectChange"},ql=class extends ms{constructor(e,t=null){super(void 0,t);let n=new Ah(this);this._root=n;let s=new Rh;this._gizmo=s,n.add(s);let r=new Ch;this._plane=r,n.add(r);let o=this;function a(S,v){let D=v;Object.defineProperty(o,S,{get:function(){return D!==void 0?D:v},set:function(C){D!==C&&(D=C,r[S]=C,s[S]=C,o.dispatchEvent({type:S+"-changed",value:C}),o.dispatchEvent(wh))}}),o[S]=v,r[S]=v,s[S]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let c=new T,l=new T,d=new Bt,p=new Bt,u=new T,m=new Bt,_=new T,x=new T,f=new T,g=0,R=new T;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",d),a("worldQuaternionStart",p),a("cameraPosition",u),a("cameraQuaternion",m),a("pointStart",_),a("pointEnd",x),a("rotationAxis",f),a("rotationAngle",g),a("eye",R),this._offset=new T,this._startNorm=new T,this._endNorm=new T,this._cameraScale=new T,this._parentPosition=new T,this._parentQuaternion=new Bt,this._parentQuaternionInv=new Bt,this._parentScale=new T,this._worldScaleStart=new T,this._worldQuaternionInv=new Bt,this._worldScale=new T,this._positionStart=new T,this._quaternionStart=new Bt,this._scaleStart=new T,this._getPointer=Bx.bind(this),this._onPointerDown=Hx.bind(this),this._onPointerHover=zx.bind(this),this._onPointerMove=kx.bind(this),this._onPointerUp=Vx.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Ss.setFromCamera(e,this.camera);let t=Th(this._gizmo.picker[this.mode],Ss);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Ss.setFromCamera(e,this.camera);let t=Th(this._plane,Ss,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,hf.mode=this.mode,this.dispatchEvent(hf)}}pointerMove(e){let t=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Ss.setFromCamera(e,this.camera);let o=Th(this._plane,Ss,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Yt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(yn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(yn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ji.set(a,a,a)}else yn.copy(this.pointStart),Ji.copy(this.pointEnd),yn.applyQuaternion(this._worldQuaternionInv),Ji.applyQuaternion(this._worldQuaternionInv),Ji.divide(yn),t.search("X")===-1&&(Ji.x=1),t.search("Y")===-1&&(Ji.y=1),t.search("Z")===-1&&(Ji.z=1);s.scale.copy(this._scaleStart).multiply(Ji),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(yn.setFromMatrixPosition(this.camera.matrixWorld)),c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(yn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(cf[t]),yn.copy(cf[t]),r==="local"&&yn.applyQuaternion(this.worldQuaternion),yn.cross(this.eye),yn.length()===0?c=!0:this.rotationAngle=this._offset.dot(yn.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Yt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Yt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(wh),this.dispatchEvent(df)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(uf.mode=this.mode,this.dispatchEvent(uf)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(wh),this.dispatchEvent(df),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ss}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function Bx(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function zx(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Hx(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function kx(i){this.enabled&&this.pointerMove(this._getPointer(i))}function Vx(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Th(i,e,t){let n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}var Gl=new fn,Vt=new T(0,1,0),ff=new T(0,0,0),pf=new Rt,Wl=new Bt,Yl=new Bt,_i=new T,mf=new Rt,wo=new T(1,0,0),bs=new T(0,1,0),To=new T(0,0,1),Xl=new T,So=new T,bo=new T,Ah=class extends Dt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Rh=class extends Dt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new jt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new _n({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let c=e.clone();c.color.setHex(16711680),c.opacity=.5;let l=e.clone();l.color.setHex(65280),l.opacity=.5;let d=e.clone();d.color.setHex(255),d.opacity=.5;let p=e.clone();p.opacity=.25;let u=e.clone();u.color.setHex(16776960),u.opacity=.25;let m=e.clone();m.color.setHex(16776960);let _=e.clone();_.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:m,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:d,activeTransparent:u};let x=new Kt(0,.04,.1,12);x.translate(0,.05,0);let f=new Ct(.08,.08,.08);f.translate(0,.04,0);let g=new xt;g.setAttribute("position",new mt([0,0,0,1,0,0],3));let R=new Kt(.0075,.0075,.5,3);R.translate(0,.25,0);function S(O,V){let W=new Ri(O,.0075,3,64,V*Math.PI*2);return W.rotateY(Math.PI/2),W.rotateX(Math.PI/2),W}function v(){let O=new xt;return O.setAttribute("position",new mt([0,0,0,1,1,1],3)),O}let D={X:[[new Ae(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new Ae(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new Ae(R,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Ae(x,o),[0,.5,0]],[new Ae(x,o),[0,-.5,0],[Math.PI,0,0]],[new Ae(R,o)]],Z:[[new Ae(x,a),[0,0,.5],[Math.PI/2,0,0]],[new Ae(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Ae(R,a),null,[Math.PI/2,0,0]]],XYZ:[[new Ae(new pi(.1,0),p),[0,0,0]]],XY:[[new Ae(new Ct(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new Ae(new Ct(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new Ct(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new Ae(new Kt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Ae(new Kt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ae(new Kt(.2,0,.6,4),n),[0,.3,0]],[new Ae(new Kt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ae(new Kt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Ae(new Kt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Ae(new pi(.2,0),n)]],XY:[[new Ae(new Ct(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Ae(new Ct(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new Ct(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},U={START:[[new Ae(new pi(.01,2),s),null,null,null,"helper"]],END:[[new Ae(new pi(.01,2),s),null,null,null,"helper"]],DELTA:[[new Xt(v(),s),null,null,null,"helper"]],X:[[new Xt(g,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xt(g,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xt(g,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},N={XYZE:[[new Ae(S(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new Ae(S(.5,.5),r)]],Y:[[new Ae(S(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Ae(S(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Ae(S(.75,1),u),null,[0,Math.PI/2,0]]]},w={AXIS:[[new Xt(g,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new Ae(new Bn(.25,10,8),n)]],X:[[new Ae(new Ri(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Ae(new Ri(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Ae(new Ri(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Ae(new Ri(.75,.1,2,24),n)]]},F={X:[[new Ae(f,r),[.5,0,0],[0,0,-Math.PI/2]],[new Ae(R,r),[0,0,0],[0,0,-Math.PI/2]],[new Ae(f,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Ae(f,o),[0,.5,0]],[new Ae(R,o)],[new Ae(f,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Ae(f,a),[0,0,.5],[Math.PI/2,0,0]],[new Ae(R,a),[0,0,0],[Math.PI/2,0,0]],[new Ae(f,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Ae(new Ct(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new Ae(new Ct(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new Ct(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ae(new Ct(.1,.1,.1),p)]]},q={X:[[new Ae(new Kt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Ae(new Kt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ae(new Kt(.2,0,.6,4),n),[0,.3,0]],[new Ae(new Kt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ae(new Kt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Ae(new Kt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Ae(new Ct(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Ae(new Ct(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new Ct(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ae(new Ct(.2,.2,.2),n),[0,0,0]]]},$={X:[[new Xt(g,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xt(g,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xt(g,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function Q(O){let V=new Dt;for(let W in O)for(let z=O[W].length;z--;){let he=O[W][z][0].clone(),xe=O[W][z][1],ae=O[W][z][2],Te=O[W][z][3],Ve=O[W][z][4];he.name=W,he.tag=Ve,xe&&he.position.set(xe[0],xe[1],xe[2]),ae&&he.rotation.set(ae[0],ae[1],ae[2]),Te&&he.scale.set(Te[0],Te[1],Te[2]),he.updateMatrix();let nt=he.geometry.clone();nt.applyMatrix4(he.matrix),he.geometry=nt,he.renderOrder=1/0,he.position.set(0,0,0),he.rotation.set(0,0,0),he.scale.set(1,1,1),V.add(he)}return V}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=Q(D)),this.add(this.gizmo.rotate=Q(N)),this.add(this.gizmo.scale=Q(F)),this.add(this.picker.translate=Q(C)),this.add(this.picker.rotate=Q(b)),this.add(this.picker.scale=Q(q)),this.add(this.helper.translate=Q(U)),this.add(this.helper.rotate=Q(w)),this.add(this.helper.scale=Q($)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Yl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Yt.setFromEuler(Gl.set(0,0,0)),o.quaternion.copy(n).multiply(Yt),Math.abs(Vt.copy(wo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Yt.setFromEuler(Gl.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Yt),Math.abs(Vt.copy(bs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Yt.setFromEuler(Gl.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Yt),Math.abs(Vt.copy(To).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Yt.setFromEuler(Gl.set(0,Math.PI/2,0)),Vt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(pf.lookAt(ff,Vt,bs)),o.quaternion.multiply(Yt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),yn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),yn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(yn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Vt.copy(wo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Vt.copy(bs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Vt.copy(To).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Vt.copy(To).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Vt.copy(wo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Vt.copy(bs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Wl.copy(n),Vt.copy(this.eye).applyQuaternion(Yt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(pf.lookAt(this.eye,ff,bs)),o.name==="X"&&(Yt.setFromAxisAngle(wo,Math.atan2(-Vt.y,Vt.z)),Yt.multiplyQuaternions(Wl,Yt),o.quaternion.copy(Yt)),o.name==="Y"&&(Yt.setFromAxisAngle(bs,Math.atan2(Vt.x,Vt.z)),Yt.multiplyQuaternions(Wl,Yt),o.quaternion.copy(Yt)),o.name==="Z"&&(Yt.setFromAxisAngle(To,Math.atan2(Vt.y,Vt.x)),Yt.multiplyQuaternions(Wl,Yt),o.quaternion.copy(Yt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},Ch=class extends Ae{constructor(){super(new Dn(1e5,1e5,2,2),new jt({visible:!1,wireframe:!0,side:cn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Xl.copy(wo).applyQuaternion(t==="local"?this.worldQuaternion:Yl),So.copy(bs).applyQuaternion(t==="local"?this.worldQuaternion:Yl),bo.copy(To).applyQuaternion(t==="local"?this.worldQuaternion:Yl),Vt.copy(So),this.mode){case"translate":case"scale":switch(this.axis){case"X":Vt.copy(this.eye).cross(Xl),_i.copy(Xl).cross(Vt);break;case"Y":Vt.copy(this.eye).cross(So),_i.copy(So).cross(Vt);break;case"Z":Vt.copy(this.eye).cross(bo),_i.copy(bo).cross(Vt);break;case"XY":_i.copy(bo);break;case"YZ":_i.copy(Xl);break;case"XZ":Vt.copy(bo),_i.copy(So);break;case"XYZ":case"E":_i.set(0,0,0);break}break;case"rotate":default:_i.set(0,0,0)}_i.length()===0?this.quaternion.copy(this.cameraQuaternion):(mf.lookAt(yn.set(0,0,0),_i,Vt),this.quaternion.setFromRotationMatrix(mf)),super.updateMatrixWorld(e)}};function gf({scene:i,camera:e,canvas:t}){let n=new ln;n.userData.primitiveBounds=!0,n.visible=!1,i.add(n);let s=new Ct(1,1,1),r=new Qr(s);s.dispose();let o=new _n({color:7977215,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),a=new Ti(r,o);a.renderOrder=30,n.add(a);let c=new Dn(1,1),l=new jt({color:14150399,depthTest:!1,depthWrite:!1,side:cn}),d=[];for(let O of["x","y","z"])for(let V of[-1,1]){let W=new Ae(c,l);W.userData.boundsHandle={axis:O,sign:V},W.renderOrder=32,n.add(W),d.push(W)}let p=new xt;p.setAttribute("position",new en(new Float32Array(36),3));let u=new Ti(p,o);u.renderOrder=30,u.frustumCulled=!1,n.add(u);let m=new xt;m.setAttribute("position",new en(new Float32Array(54),3));let _=new Ti(m,o);_.renderOrder=30,n.add(_),_.frustumCulled=!1;let x=["W","D","H"].map(O=>{let V=document.createElement("div");return V.dataset.primitiveDimension=O,V.style.cssText="position:absolute;pointer-events:none;display:none;z-index:24;padding:4px 7px;border:1px solid #79b8ff66;border-radius:4px;background:#172b37ed;color:#d7eaff;font:13px system-ui;white-space:nowrap;",t.parentElement?.append(V),V}),f=null,g=null,R=new Gn,S=new T,v=new T,D=()=>t.getBoundingClientRect();function C(O,V){return v.copy(O).applyMatrix4(e.matrixWorldInverse),S.copy(O).project(e),{x:V.left+(S.x+1)*V.width/2,y:V.top+(1-S.y)*V.height/2,depth:v.z,visible:v.z<0&&S.z>=-1&&S.z<=1}}function U(O,V){let W=O.clone().applyMatrix4(e.matrixWorldInverse);return Math.max(1e-6,2*Math.abs(W.z)*Math.tan(e.fov*Math.PI/360)/Math.max(1,V.height))}function N(O){let V=D();R.setFromCamera(new Ee((O.clientX-V.left)/Math.max(1,V.width)*2-1,1-(O.clientY-V.top)/Math.max(1,V.height)*2),e)}function w(O,V,{handles:W=!0}={}){f=O,n.visible=!!(V&&O);for(let pe of x)pe.style.display="none";if(!n.visible)return;e.updateMatrixWorld(!0),O.updateWorldMatrix(!0,!1);let z=D(),he=O.getWorldPosition(new T),xe=O.getWorldQuaternion(new Bt),ae=U(he,z);a.position.copy(he),a.quaternion.copy(xe),a.scale.copy(O.scale);let Te=C(he,z),Ve=[],nt=p.attributes.position,Qe=0,ee=!1;for(let pe of d){let{axis:Se,sign:je}=pe.userData.boundsHandle,ze=new T,I=new T;ze[Se]=je*.5,I[Se]=1,I.applyQuaternion(xe),O.localToWorld(ze),pe.userData.facePosition=ze.clone();let y=C(ze,z),Y=e.position.clone().sub(ze).normalize();if(pe.visible=W&&y.visible&&Math.abs(Y.dot(I))<.98,pe.visible){let _e=y.x-Te.x,P=y.y-Te.y,B=Math.hypot(_e,P),Z=B>1e-6?_e/B:1,le=B>1e-6?P/B:0,be=Math.max(24,B),ve=Te.x+Z*be,we=Te.y+le*be;for(;Ve.some(Fe=>Math.hypot(Fe.x-ve,Fe.y-we)<20)&&be<Math.max(24,B)+80;)be+=12,ve=Te.x+Z*be,we=Te.y+le*be;if(Ve.push({x:ve,y:we}),Math.hypot(ve-y.x,we-y.y)>.5){ee=!0;let Fe=ze.clone().project(e);ze.set((ve-z.left)/z.width*2-1,1-(we-z.top)/z.height*2,Fe.z).unproject(e)}}pe.position.copy(ze),pe.quaternion.copy(e.quaternion),pe.scale.setScalar(U(ze,z)*(pe===g?11:9)),pe.userData.screen=C(ze,z);let te=pe.visible?pe.userData.facePosition:ze;nt.setXYZ(Qe++,te.x,te.y,te.z),nt.setXYZ(Qe++,ze.x,ze.y,ze.z)}nt.needsUpdate=!0;let de=O.worldToLocal(e.position.clone()),De=de.x>=0?1:-1,Ze=de.z>=0?1:-1,ke=ae*(ee?55:27),Re=De*(.5+ke/O.scale.x),gt=Ze*(.5+ke/O.scale.z),L=-.5-ke/O.scale.y,fe=[{a:[-.5,L,gt],b:[.5,L,gt],tick:[0,1,0],size:O.scale.x},{a:[Re,L,-.5],b:[Re,L,.5],tick:[0,1,0],size:O.scale.z},{a:[Re,-.5,gt],b:[Re,.5,gt],tick:[1,0,0],size:O.scale.y}],me=m.attributes.position,ce=0,ge=pe=>me.setXYZ(ce++,pe.x,pe.y,pe.z),Le=[];fe.forEach((pe,Se)=>{let je=O.localToWorld(new T(...pe.a)),ze=O.localToWorld(new T(...pe.b)),I=new T(...pe.tick).applyQuaternion(xe).multiplyScalar(ae*4);ge(je),ge(ze);for(let B of[je,ze])ge(B.clone().sub(I)),ge(B.clone().add(I));let y=C(je.clone().add(ze).multiplyScalar(.5),z),Y=x[Se];if(Y.textContent=x[Se].dataset.primitiveDimension+" "+pe.size.toFixed(2)+" m",!y.visible||y.x<z.left||y.y<z.top||y.x>z.left+z.width||y.y>z.top+z.height)return;let te=Math.max(5,Math.min(z.width-88,y.x-z.left-40)),_e=Math.max(5,Math.min(z.height-31,y.y-z.top-12)),P=_e;for(let B of[0,30,-30,60,-60,90,-90]){let Z=Math.max(5,Math.min(z.height-31,_e+B));if(!Le.some(le=>Math.abs(le.left-te)<87&&Math.abs(le.top-Z)<28)){P=Z;break}}Le.push({left:te,top:P}),Object.assign(Y.style,{display:"block",left:te+"px",top:P+"px"})}),me.needsUpdate=!0,n.updateMatrixWorld(!0)}function b(O){if(!n.visible||!f)return null;w(f,!0);let V=O.pointerType==="touch"?18:10;return d.filter(z=>z.visible).map(z=>({handle:z,p:z.userData.screen,d:Math.hypot(O.clientX-z.userData.screen.x,O.clientY-z.userData.screen.y)})).filter(z=>z.d<=V).sort((z,he)=>Math.abs(z.d-he.d)<2?he.p.depth-z.p.depth:z.d-he.d)[0]?.handle||null}function F(O){g=O}function q(O,V,W){let{axis:z,sign:he}=V.userData.boundsHandle,xe=new T;xe[z]=1,xe.applyQuaternion(W.getWorldQuaternion(new Bt)).normalize();let ae=V.userData.facePosition.clone(),Te=e.position.clone().sub(ae).normalize();if(Math.abs(Te.dot(xe))>=.98)return null;let Ve=Te.addScaledVector(xe,-Te.dot(xe)).normalize(),nt=new $t().setFromNormalAndCoplanarPoint(Ve,ae);N(O);let Qe=R.ray.intersectPlane(nt,new T);return Qe?{axis:z,sign:he,direction:xe,plane:nt,start:Qe,position:W.position.clone(),scale:W.scale.clone()}:null}function $(O,V,W,z){N(V);let he=R.ray.intersectPlane(O.plane,new T);if(!he)return;let xe=O.scale[O.axis]+he.sub(O.start).dot(O.direction)*O.sign;z&&(xe=Math.round(xe/z)*z),xe=Math.max(O.original.wall?.25:.02,Math.min(O.original.wall&&O.axis==="z"?1:150,xe)),W.scale.copy(O.scale),W.scale[O.axis]=xe,W.position.copy(O.position).addScaledVector(O.direction,(xe-O.scale[O.axis])*O.sign/2),W.updateMatrixWorld(!0),w(W,!0)}function Q(){n.removeFromParent(),r.dispose(),c.dispose(),l.dispose(),p.dispose(),m.dispose(),o.dispose();for(let O of x)O.remove()}return{update:w,hit:b,hover:F,begin:q,resize:$,dispose:Q}}function _f(i,e){let t=new Dt;t.userData.primitiveGroup=!0,i.add(t);let n=[],s=0;function r(u){n=u.slice();let m=new dn;s=0;for(let _ of n)_.updateMatrix(),m.union(new dn(new T(-.5,-.5,-.5),new T(.5,.5,.5)).applyMatrix4(_.matrix)),s+=e.get(_.userData.level)?.position.y||0;s/=Math.max(1,n.length),n.length&&(m.getCenter(t.position),t.position.y+=s,m.getSize(t.scale),t.scale.max(new T(.02,.02,.02)),t.quaternion.identity(),t.updateMatrixWorld(!0))}function o(){let u=n.reduce((m,_)=>m+(e.get(_.userData.level)?.position.y||0),0)/Math.max(1,n.length);t.position.y+=u-s,s=u,t.updateMatrixWorld(!0)}function a(){return{group:!0,position:t.position.clone(),scale:t.scale.clone(),quaternion:t.quaternion.clone(),pivot:t.position.clone().add(new T(0,-s,0)),members:n.map(u=>({root:u,original:JSON.parse(JSON.stringify(u.userData.record)),position:u.position.clone(),scale:u.scale.clone(),quaternion:u.quaternion.clone()}))}}let c=(u,m)=>m?c(m,u%m):u;function l(u,m,_){let x=0,f=1/0,g=0;for(let v of u.members)for(let D of["x","y","z"])x=Math.max(x,(v.original.wall?.25:.02)/v.scale[D]),f=Math.min(f,(v.original.wall&&D==="z"?1:150)/v.scale[D]),v.original.wall&&(g=c(g,Math.round(v.scale[D]*4)));let R=g?1/g:_/Math.max(u.scale.x,u.scale.y,u.scale.z),S=Number.isFinite(m)?m:1;if(R){let v=g?0:1;S=v+Math.round((S-v)/R)*R,x=v+Math.ceil((x-v-1e-9)/R)*R,f=v+Math.floor((f-v+1e-9)/R)*R}return Math.max(x,Math.min(f,S))}function d(u,m,_){if(m==="translate"){let x=t.position.clone().sub(u.position);if(_)for(let f of["x","y","z"])x[f]=Math.round(x[f]/_)*_;t.position.copy(u.position).add(x);for(let f of u.members)f.root.position.copy(f.position).add(x),f.root.quaternion.copy(f.quaternion),f.root.scale.copy(f.scale)}else if(m==="rotate"){let x=t.quaternion.clone().multiply(u.quaternion.clone().invert());for(let f of u.members)f.root.position.copy(f.position).sub(u.pivot).applyQuaternion(x).add(u.pivot),f.root.quaternion.copy(x).multiply(f.quaternion),f.root.scale.copy(f.scale)}else if(m==="scale"){let x=l(u,t.scale.x/u.scale.x,_);t.scale.copy(u.scale).multiplyScalar(x);for(let f of u.members)f.root.position.copy(f.position).sub(u.pivot).multiplyScalar(x).add(u.pivot),f.root.scale.copy(f.scale).multiplyScalar(x),f.root.quaternion.copy(f.quaternion)}for(let x of u.members)x.root.updateMatrixWorld(!0);t.updateMatrixWorld(!0)}function p(u){for(let m of u.members)m.root.position.copy(m.position),m.root.scale.copy(m.scale),m.root.quaternion.copy(m.quaternion),m.root.updateMatrixWorld(!0);t.position.copy(u.position),t.scale.copy(u.scale),t.quaternion.copy(u.quaternion),t.updateMatrixWorld(!0)}return{target:t,select:r,syncDisplay:o,begin:a,preview:d,restore:p,dispose(){t.removeFromParent()}}}function xf({scene:i,camera:e,renderer:t,controls:n,groups:s,data:r,prismGeometry:o,surfaceHit:a,enabled:c,canNavigate:l=()=>!0,onSelect:d,onEdit:p,onEditMany:u}){let m=t.domElement,_=[],x=new Map,f=new Gn,g=new Ee,R={cube:new Ct(1,1,1),cylinder:new Kt(.5,.5,1,32),sphere:new Bn(.5,32,16),hemisphere:new Bn(.5,32,16,0,Math.PI*2,0,Math.PI/2)};R.hemisphere.scale(1,2,1),R.hemisphere.translate(0,-.5,0);let S=new jr(.5,32);S.rotateX(Math.PI/2),S.translate(0,-.5,0);let v=[],D=[];for(let P of r.levels)for(let B of P.primitives||[]){let Z=new ln,le=new ds({color:B.color||"#d6a46b",roughness:.8,side:cn});v.push(le);let be=JSON.parse(JSON.stringify(B)),ve=P.rampWallCuts?.[B.id];if(Z.userData={primitive:B.id,level:P.id,record:be,floorZ:P.z},Ve(Z,B),Array.isArray(ve)&&o){let we=Z.matrixWorld.clone().invert();for(let Fe of ve){let Be=o(Fe);Be.translate(0,Fe.z,0),Be.applyMatrix4(we),D.push(Be),Z.add(new Ae(Be,le))}}else Z.add(new Ae(R[B.primitive],le)),B.primitive==="hemisphere"&&Z.add(new Ae(S,le));s.get(P.id).add(Z),_.push(Z),x.set(P.id+"\0"+B.id,Z)}let C=new ql(e,m);C.disconnect(),m.style.touchAction="none",C.setSize(.8),C.setSpace("world");let U=C.getHelper();i.add(U);let N=gf({scene:i,camera:e,canvas:m}),w=_f(i,s),b=["gizmo","picker","helper"].map(P=>({parent:C._gizmo[P].scale,children:C._gizmo[P].scale.children.slice()})),F=!1;function q(P){if(F!==P){F=P;for(let B of b){for(let Z of B.children)B.parent.remove(Z);for(let Z of B.children)(!P||Z.name==="XYZ")&&B.parent.add(Z)}}}let $=[],Q=new Set,O=()=>$.length>1,V=null,W=null,z=null,he=!1,xe=null,ae=window.KERN_DRAG_AXES?.register(()=>W&&!W.bounds&&C.mode==="translate"?W:null,()=>y(),P=>({space:"3d",origin:P.feedbackOrigin,supported:P.feedbackAxes})),Te=C._plane.updateMatrixWorld;C._plane.updateMatrixWorld=function(P){W?.translationPlane&&C.mode==="translate"?(this.position.copy(W.translationPlane.position),this.quaternion.copy(W.translationPlane.quaternion),Dt.prototype.updateMatrixWorld.call(this,P)):Te.call(this,P)};function Ve(P,B){P.position.set(B.x+B.w/2,P.userData.floorZ+B.z+B.height/2,B.y+B.h/2),P.scale.set(B.w,B.height,B.h),P.rotation.set(B.tiltX*Math.PI/180,-B.rotation*Math.PI/180,B.tiltY*Math.PI/180,"XYZ"),P.updateMatrixWorld(!0)}let nt=P=>s.get(P.userData.level)?.visible&&window.KERN_LAYERS?.shown?.("primitives",P.userData.primitive,P.userData.level)!==!1,Qe=P=>nt(P)&&window.KERN_LAYERS?.available?.("primitives",P.userData.primitive,P.userData.level)!==!1;function ee(){if(!V||!c()||!$.length||$.some(B=>!Qe(B)))return!1;let P=window.KERN_LAYERS?.references?.();return!P||P.length===$.length&&P.every(B=>B.kind==="primitives"&&Q.has(B.floor+"\0"+B.id))}function de(){O()&&!W&&w.syncDisplay(),N.update(V,ee(),{handles:!O()})}function De(){if(he)return;for(let B of _)B.visible=window.KERN_LAYERS?.shown?.("primitives",B.userData.primitive,B.userData.level)!==!1;let P=ee();C.enabled=P,U.visible=P,!P&&W&&y(),de()}function Ze(P){y();let B=(P||[]).filter(Z=>Z.kind==="primitives").map(Z=>x.get(Z.floor+"\0"+Z.id)).filter(Boolean);$=B.length===P.length?B:[],Q=new Set($.map(Z=>Z.userData.level+"\0"+Z.userData.primitive)),O()&&w.select($),V=O()?w.target:$[0]||null,V?C.attach(V):C.detach(),C.setMode(window.KERN_PRIMITIVE_UI?.mode()||"translate"),C.setSpace(C.mode==="scale"?"local":"world"),Re(),De()}function ke(){let P=Number(window.snapSize?.());return Number.isFinite(P)&&P>0?P:null}function Re(P={}){let B=$.some(Z=>Z.userData.record.wall===!0);C.setTranslationSnap(!O()&&B?.25:null),C.setScaleSnap(O()?null:B?.25:P.ctrlKey?null:ke()),C.setRotationSnap(P.shiftKey&&!P.ctrlKey?Math.PI/36:B?Math.PI/180:null),C.showX=C.showZ=!(B&&C.mode==="rotate"),C.showY=!0,q(O()&&C.mode==="scale")}function gt(P,B){xe&&(xe.removeFromParent(),xe.geometry.dispose(),xe.material.dispose(),xe=null),!(!P||!s.has(B))&&(xe=new Ae(new Ct(1,1,1),new jt({color:"#72d8b0",transparent:!0,opacity:.4,depthWrite:!1})),xe.userData.floorZ=r.levels.find(Z=>Z.id===B).z,Ve(xe,P),s.get(B).add(xe))}function L(P){let B=m.getBoundingClientRect();return{x:(P.clientX-B.left)/Math.max(1,B.width)*2-1,y:-(P.clientY-B.top)/Math.max(1,B.height)*2+1,button:P.button??0}}function fe(P){let B=L(P);return g.set(B.x,B.y),i.updateMatrixWorld(!0),e.updateMatrixWorld(!0),f.setFromCamera(g,e),f.intersectObjects(_.filter(nt),!0).map(Z=>{let le=Z.object;for(;le&&!le.userData.primitive;)le=le.parent;return{...Z,root:le}}).filter(Z=>Z.root)}function me(P){let B=fe(P)[0];if(!B)return null;let Z=a(P);return Z&&Z.point.distanceTo(e.position)+.002<B.distance?null:B}function ce(P){P.preventDefault(),P.stopImmediatePropagation()}function ge(P){if(he)return!1;if(W||z)return ce(P),!0;if(!c()||P.altKey||P.button!==0)return!1;if(De(),V&&C.enabled&&!O()&&!P.shiftKey){let Z=N.hit(P),le=Z&&N.begin(P,Z,V);if(le)return W={...le,bounds:!0,id:P.pointerId,root:V,original:JSON.parse(JSON.stringify(V.userData.record))},C.axis=null,n.enabled=!1,N.hover(Z),m.setPointerCapture?.(P.pointerId),ce(P),!0}if(V&&C.enabled&&(!P.shiftKey||C.mode==="rotate")&&(Re(P),i.updateMatrixWorld(!0),C.pointerHover(L(P)),C.axis)){let Z=O()?window.KERN_PRIMITIVE_UI?.transformScope?.():null;if(O()&&!Z)return ce(P),!0;let le=O()?null:JSON.parse(JSON.stringify(V.userData.record)),be=O()?w.begin():null;if(C.pointerDown(L(P)),C.dragging)return W=be?{...be,scope:Z,id:P.pointerId,mode:C.mode,clientX:P.clientX,clientY:P.clientY}:{id:P.pointerId,root:V,original:le,position:V.position.clone()},C.mode==="translate"&&(W.feedbackOrigin=V.getWorldPosition(new T),W.feedbackAxes=["x","y","z"].filter(ve=>C.axis?.toLowerCase().includes(ve)),W.translationPlane={position:C._plane.position.clone(),quaternion:C._plane.quaternion.clone()},window.KERN_DRAG_AXES?.begin(W,V.position)),n.enabled=!1,m.setPointerCapture?.(P.pointerId),ce(P),!0}let B=me(P);return B?(z={id:P.pointerId,x:P.clientX,y:P.clientY,root:B.root,shift:P.shiftKey},m.setPointerCapture?.(P.pointerId),ce(P),!0):!1}function Le(P){if(he)return!1;if(De(),W&&P.pointerId===W.id){if(W.bounds)return N.resize(W,P,W.root,W.original.wall?.25:P.ctrlKey?null:ke()),ce(P),!0;if(Re(P),W.group&&W.mode==="scale"?V.scale.copy(W.scale).multiplyScalar(Math.exp(Math.max(-20,Math.min(20,(P.clientX-W.clientX-P.clientY+W.clientY)*.005)))):C.pointerMove({...L(P),button:-1}),W.group){let Z=$.some(le=>le.userData.record.wall)?.25:P.ctrlKey?0:ke()||0;if(W.mode==="translate"){if(Z)for(let be of["x","y","z"])V.position[be]=W.position[be]+Math.round((V.position[be]-W.position[be])/Z)*Z;let le=window.KERN_DRAG_AXES?.apply(W,V.position,W.position);le&&V.position.set(le.x,le.y,le.z),Z=0}return w.preview(W,W.mode,Z),de(),ce(P),!0}let B=!W.original.wall&&!P.ctrlKey&&C.mode==="translate"&&ke();if(B){let Z=W.root,le=W.position;for(let be of["x","y","z"])Z.position[be]=le[be]+Math.round((Z.position[be]-le[be])/B)*B;Z.updateMatrixWorld(!0)}if(C.mode==="translate"){let Z=window.KERN_DRAG_AXES?.apply(W,V.position,W.position);Z&&(V.position.set(Z.x,Z.y,Z.z),V.updateMatrixWorld(!0))}return de(),ce(P),!0}if(W||z&&P.pointerId===z.id)return ce(P),!0;if(V&&C.enabled&&!P.altKey&&!P.buttons){let B=!O()&&!P.shiftKey&&N.hit(P);if(N.hover(B),B)return C.axis=null,m.style.cursor="ew-resize",m.title="Drag "+{x:"width",y:"height",z:"depth"}[B.userData.boundsHandle.axis]+" \xB7 opposite face stays fixed \xB7 "+(V.userData.record.wall?"0.25 m steps":"Ctrl: free"),ce(P),!0;if(i.updateMatrixWorld(!0),C.pointerHover(L(P)),O()&&C.mode==="scale"&&C.axis==="XYZ")return m.title="Uniform group scale \xB7 drag right or up to enlarge; left or down to shrink",ce(P),!0}return!1}function pe(P){m.hasPointerCapture?.(P)&&m.releasePointerCapture(P)}function Se(P){let B=new Rt().makeRotationFromQuaternion(P).elements,Z=Math.hypot(B[0],B[4]),le=B[8]>=0?1:-1,be=Z>1e-12?Math.atan2(-B[4],B[0]):0,ve=Math.atan2(B[6]+le*B[1],B[5]-le*B[2]),we=ve-le*be;return{x:Math.atan2(Math.sin(we),Math.cos(we)),y:Math.atan2(B[8],Z),z:be}}function je(P,B,Z=!1){let le=Se(P.quaternion),be=we=>Math.round(we*1e6)/1e6,ve=Z||P.quaternion.angleTo(new Bt().setFromEuler(new fn(B.tiltX*Math.PI/180,-B.rotation*Math.PI/180,B.tiltY*Math.PI/180,"XYZ")))<1e-7;return{x:be(P.position.x-P.scale.x/2),y:be(P.position.z-P.scale.z/2),z:be(P.position.y-P.userData.floorZ-P.scale.y/2),w:be(P.scale.x),h:be(P.scale.z),height:be(P.scale.y),rotation:ve?B.rotation:be(B.wall?(()=>{let we=new T(1,0,0).applyQuaternion(P.quaternion),Fe=Math.atan2(we.z,we.x)*180/Math.PI;return[Fe-360,Fe,Fe+360].filter(Be=>Be>=-360&&Be<=360).sort((Be,Ne)=>Math.abs(Be-B.rotation)-Math.abs(Ne-B.rotation))[0]})():-le.y*180/Math.PI),tiltX:ve?B.tiltX:B.wall?0:be(le.x*180/Math.PI),tiltY:ve?B.tiltY:B.wall?0:be(le.z*180/Math.PI)}}let ze=(P,B)=>Object.entries(P).some(([Z,le])=>Math.abs(le-B[Z])>1e-6);function I(P){if(W&&P.pointerId===W.id){let B=W;if(W=null,window.KERN_DRAG_AXES?.refresh?.(),C.pointerUp({button:0}),n.enabled=l(),N.hover(null),pe(P.pointerId),ce(P),B.group){let Z=B.members.map(le=>({floor:le.root.userData.level,id:le.root.userData.primitive,changes:je(le.root,le.original,B.mode!=="rotate"),baseline:le.original}));Z.some(le=>ze(le.changes,le.baseline))?u?.(Z,B.scope)!==!0&&w.restore(B):w.restore(B)}else{let Z=B.root,le=je(Z,B.original,B.bounds);ze(le,B.original)?p(Z.userData.level,Z.userData.primitive,le,B.original,{resizeBounds:!!B.bounds})===!1&&Ve(Z,B.original):Ve(Z,B.original)}return de(),!0}if(z&&P.pointerId===z.id){let B=z;return z=null,pe(P.pointerId),ce(P),Math.hypot(P.clientX-B.x,P.clientY-B.y)<=5&&d(B.root.userData.level,B.root.userData.primitive,B.shift),!0}return!1}function y(P){if(P!=null&&(W?.id??z?.id)!==P)return!1;let B=W,Z=z;return W=null,z=null,window.KERN_DRAG_AXES?.refresh?.(),N.hover(null),B&&(B.group?w.restore(B):Ve(B.root,B.original),C.pointerUp({button:0}),n.enabled=l(),pe(B.id)),Z&&pe(Z.id),de(),!!(B||Z)}let Y=P=>{P.key==="Escape"&&W&&(ce(P),y())};window.addEventListener("keydown",Y,!0);function te(P,B,{floorPlane:Z=!1}={}){De();let le=r.levels.find(ht=>ht.id===B);if(!le||!s.get(B)?.visible)return null;let be=!Z&&fe(P).find(ht=>ht.root.userData.level===B),ve=!Z&&a(P),we=ve?.floor===B?ve:null,Fe=be&&(!we||be.distance<we.point.distanceTo(e.position))?{point:be.point,normal:be.face.normal.clone().applyMatrix3(new pt().getNormalMatrix(be.object.matrixWorld)).normalize()}:we;if(!Fe){let ht=L(P);f.setFromCamera(new Ee(ht.x,ht.y),e);let H=f.ray.intersectPlane(new $t(new T(0,1,0),-(le.z+s.get(B).position.y)),new T);if(!H)return null;Fe={point:H,normal:new T(0,1,0)}}let Be=Fe.point,Ne=Fe.normal||new T(0,1,0);return{x:Be.x,y:Be.z,z:Be.y-s.get(B).position.y,normal:{x:Ne.x,y:Ne.z,z:Ne.y}}}function _e(){if(!he){ae?.(),gt(null),y(),he=!0,window.removeEventListener("keydown",Y,!0),N.dispose(),w.dispose(),q(!1),C.detach(),C.dispose(),i.remove(U);for(let P of _)P.removeFromParent();for(let P of[...Object.values(R),...D])P.dispose();S.dispose();for(let P of v)P.dispose()}}return{select:Ze,sync:De,updateBounds:de,down:ge,move:Le,up:I,cancel:y,placement:te,previewWall:gt,dispose:_e,dragging:()=>!!W,ownsGesture:P=>P===W,busy:()=>!!(W||z),setMode(P){["translate","scale","rotate"].includes(P)&&(y(),C.setMode(P),C.setSpace(P==="scale"?"local":"world"),Re())},objects:()=>_}}var $i=["x","y","z"],Ph={x:"#e47b74",y:"#7acb99",z:"#70b9ec"},Gx=i=>Math.abs(i)<.005?0:i,Wx=i=>{let e=Gx(i);return(e>0?"+":"")+e.toFixed(2)};function yf({scene:i,camera:e,canvas:t,container:n,manager:s,owns:r=()=>!0}){let o=new ln;o.name="translation-feedback",o.userData.dragFeedback="3d",o.visible=!1,i.add(o);let a=[],c=[];function l(ae,{dashed:Te=!1,opacity:Ve=1}={}){let nt=new xt;nt.setAttribute("position",new mt(new Float32Array(6),3)),a.push(nt),Te&&nt.setAttribute("lineDistance",new mt([0,0],1));let Qe={color:ae,transparent:!0,opacity:Ve,depthTest:!1,depthWrite:!1},ee=Te?new fs({...Qe,dashSize:.15,gapSize:.1}):new _n(Qe);c.push(ee);let de=new Xt(nt,ee);return de.frustumCulled=!1,de.renderOrder=40,de.raycast=()=>{},o.add(de),de}let d=Object.fromEntries($i.map(ae=>{let Te=l(Ph[ae],{opacity:.64});return Te.userData.dragAxis=ae,Te.visible=!1,[ae,Te]})),p=l("#e7b76e",{dashed:!0,opacity:.92});p.userData.dragDistance=!0,p.renderOrder=41;let u=new Bn(1,10,6),m=new jt({color:"#e7b76e",transparent:!0,opacity:.96,depthTest:!1,depthWrite:!1});a.push(u),c.push(m);let _=["origin","current"].map(ae=>{let Te=new Ae(u,m);return Te.userData.dragMarker=ae,Te.renderOrder=42,Te.frustumCulled=!1,Te.raycast=()=>{},o.add(Te),Te}),x=document.createElement("div");x.dataset.dragFeedback="3d",x.style.cssText="position:absolute;display:none;pointer-events:none;user-select:none;z-index:8;padding:7px 9px;border:1px solid #dce9f02b;border-radius:5px;background:#17232eed;color:#e8eef4;box-shadow:0 2px 9px #0003;font:12px/1.45 system-ui;white-space:nowrap;max-width:calc(100% - 16px);overflow:hidden";let f=document.createElement("div");f.dataset.dragAxisStatus="true",f.style.cssText="font-size:11px;font-weight:650;letter-spacing:.025em;margin-bottom:2px;display:none",x.append(f);let g=document.createElement("div");g.dataset.dragDistance="true",g.style.cssText="font-size:13px;font-weight:650;color:#e7b76e",x.append(g);let R=document.createElement("div");R.style.cssText="font-size:11px;font-variant-numeric:tabular-nums",x.append(R);let S=Object.fromEntries($i.map((ae,Te)=>{Te&&R.append(document.createTextNode(" \xB7 "));let Ve=document.createElement("span");return Ve.dataset.dragComponent=ae,Ve.style.color=Ph[ae],R.append(Ve),[ae,Ve]}));n.append(x);let v=new T,D=new T,C=new T,U=new T,N=new T,w=new T,b=null,F=!1,q=260,$=64,Q=!0;function O(ae,Te,Ve){let nt=ae.geometry.attributes.position;nt.setXYZ(0,Te.x,Te.y,Te.z),nt.setXYZ(1,Ve.x,Ve.y,Ve.z),nt.needsUpdate=!0}function V(){o.visible=!1,x.style.display="none",f.style.display="none",f.textContent="",delete x.dataset.axes;for(let ae of Object.values(d))ae.visible=!1}function W(ae){if(F)return;if(b=ae?.space==="3d"&&r(ae.owner)&&$i.every(ee=>Number.isFinite(ae.origin?.[ee])&&Number.isFinite(ae.delta?.[ee]))?ae:null,!b){V();return}v.set(ae.origin.x,ae.origin.y,ae.origin.z),D.set(v.x+ae.delta.x,v.y+ae.delta.y,v.z+ae.delta.z);let Te=$i.filter(ee=>ae.axes?.includes(ee)),Ve=ae.supported||$i,nt=Te.some(ee=>!Ve.includes(ee));x.dataset.axes=Te.join(""),x.dataset.total=Math.hypot(ae.delta.x,ae.delta.y,ae.delta.z).toFixed(6),f.style.display=Te.length?"block":"none",f.textContent=Te.length?Te.map(ee=>ee.toUpperCase()).join(" + ")+" locked"+(nt?" \xB7 "+(Ve.includes("y")?Ve.length===1&&Ve[0]==="y"?"vertical edit":"gizmo axis":"planar edit"):""):"",f.style.color=Te.length===1?Ph[Te[0]]:"#e8eef4",g.textContent="Move "+Math.hypot(ae.delta.x,ae.delta.y,ae.delta.z).toFixed(2)+" m";for(let ee of $i)S[ee].textContent=ee.toUpperCase()+" "+Wx(ae.delta[ee]);for(let ee of $i)d[ee].visible=Te.includes(ee)&&Ve.includes(ee);o.visible=!0,p.visible=D.distanceToSquared(v)>1e-12,O(p,v,D);let Qe=p.geometry.attributes.lineDistance;Qe.setX(0,0),Qe.setX(1,D.distanceTo(v)),Qe.needsUpdate=!0,_[0].position.copy(v),_[1].position.copy(D),Q=!0,z()}function z(){if(F||!b)return;let ae=t.getBoundingClientRect();if(!ae.width||!ae.height){x.style.display="none",o.visible=!1;return}if(e.updateMatrixWorld(!0),U.copy(D).applyMatrix4(e.matrixWorldInverse),U.z>=0){x.style.display="none",o.visible=!1;return}o.visible=!0;let Te=e.isOrthographicCamera?Math.abs(e.top-e.bottom)/e.zoom/ae.height:2*Math.abs(U.z)*Math.tan(e.fov*Math.PI/360)/e.zoom/ae.height,Ve=Math.max(1e-5,Te),nt=Ve*90;for(let fe of $i)d[fe].visible&&(N.copy(D),w.copy(D),N[fe]-=nt,w[fe]+=nt,O(d[fe],N,w));if(_[0].scale.setScalar(Ve*2.3),_[1].scale.setScalar(Ve*3.2),_[0].visible=D.distanceTo(v)>Ve*5,p.material.dashSize=Ve*6,p.material.gapSize=Ve*4,C.copy(D).project(e),!Number.isFinite(C.x)||!Number.isFinite(C.y)){x.style.display="none";return}x.style.display="block",Q&&(q=x.offsetWidth||260,$=x.offsetHeight||(f.style.display==="none"?48:64),Q=!1);let Qe=Math.min(q,ae.width-16),ee=Math.min($,ae.height-16),de=(C.x+1)*ae.width/2,De=(1-C.y)*ae.height/2,Ze=de+14+Qe<=ae.width-8?de+14:de-Qe-14,ke=De-ee-14,Re=n.getBoundingClientRect(),gt=ae.left-Re.left+(n.scrollLeft||0),L=ae.top-Re.top+(n.scrollTop||0);x.style.left=gt+Math.max(8,Math.min(ae.width-Qe-8,Ze))+"px",x.style.top=L+Math.max(8,Math.min(ae.height-ee-8,ke))+"px"}let he=s?.subscribe?.(W);function xe(){if(!F){V(),F=!0,he?.(),b=null,x.remove(),o.removeFromParent();for(let ae of a)ae.dispose();for(let ae of c)ae.dispose()}}return{update:z,dispose:xe}}function Ao(i){let e=new Ai(i.polygon.map(s=>new Ee(s[0],-s[1])));for(let s of i.holes||[])e.holes.push(new Xi(s.map(r=>new Ee(r[0],-r[1]))));let t=i.bottomPlane||i.topPlane,n=new or(e,{depth:t?1:i.height,bevelEnabled:!1,steps:1});if(n.rotateX(-Math.PI/2),t){let s=n.attributes.position,r=(o,a,c,l)=>o?o.a*a+o.b*c+o.c:l;for(let o=0;o<s.count;o++){let a=s.getX(o),c=s.getZ(o),l=s.getY(o)>.5;s.setY(o,r(l?i.topPlane:i.bottomPlane,a,c,i.z+(l?i.height:0))-i.z)}s.needsUpdate=!0,n.computeVertexNormals()}return n.computeBoundingBox(),n.computeBoundingSphere(),n}function vf(i){return i.flights.flatMap(e=>{if(!e.ramp)return e.treads.map(l=>({...l.rect,polygon:l.polygon,z:l.z-.12,height:.12}));let[t,n]=e.upPath,s=n[0]-t[0],r=n[1]-t[1],o=(e.z1-e.z0)/(s*s+r*r||1),a=e.surface?.thickness??.18,c={a:s*o,b:r*o,c:e.z0-o*(s*t[0]+r*t[1])};return[{...e.rect,polygon:e.polygon,z:e.z0-a,height:e.z1-e.z0+a,topPlane:c,bottomPlane:{...c,c:c.c-a}}]}).concat(i.landings.map(e=>({...e.rect,polygon:e.polygon,z:e.z-.18,height:.18})))}function Mf(i,e,t){let n=0,s=1;for(let r of["x","y","z"]){let o=e[r]-i[r],a=t.min[r],c=t.max[r];if(Math.abs(o)<1e-8){if(i[r]<a||i[r]>c)return null;continue}let l=(a-i[r])/o,d=(c-i[r])/o;if(l>d&&([l,d]=[d,l]),n=Math.max(n,l),s=Math.min(s,d),n>s)return null}return n>=0&&n<=1?n:null}function Xx(i,e){if(i.polygon&&window.KERN_SHAPES){let r=window.KERN_SHAPES,o=(e.polygons||[]).filter(u=>u.kind==="slab"&&u.room===i.id&&Math.abs(u.z+u.height-i.z)<.01),a=u=>o.some(m=>r.contains(u,m.polygon)&&!(m.holes||[]).some(_=>r.contains(u,_))),c=r.labelAnchor(i),l=Math.min(i.w,4),d=Math.min(i.h,2);if(a(c))return{x:c.x-l/2,y:c.y-d/2,w:l,h:d,z:i.z};let p=null;for(let u of o){let m=[u.polygon,...u.holes||[]],_=r.bounds(u.polygon);for(let x=0;x<12;x++)for(let f=0;f<12;f++){let g={x:_.x+_.w*(f+.5)/12,y:_.y+_.h*(x+.5)/12};if(!a(g))continue;let R=Math.min(...m.flatMap(D=>D.map((C,U)=>{let N=D[(U+1)%D.length];return Math.hypot(C[0]-N[0],C[1]-N[1])>1e-8?r.project(g,{a:C,b:N}).distance:1/0}))),S=Math.min(1,R/Math.hypot(l/2,d/2)),v=S*l*d-Math.hypot(g.x-c.x,g.y-c.y)*1e-4;S*l>.35&&S*d>.35&&(!p||v>p.score)&&(p={...g,w:l*S,h:d*S,score:v})}}return p?{x:p.x-p.w/2,y:p.y-p.h/2,w:p.w,h:p.h,z:i.z}:null}let t=e.boxes.filter(r=>(r.kind==="slab"&&(!r.room||r.room===i.id)||r.kind==="landing")&&Math.abs(r.z+r.height-i.z)<.01).map(r=>{let o=Math.max(i.x,r.x),a=Math.max(i.y,r.y);return{x:o,y:a,w:Math.min(i.x+i.w,r.x+r.w)-o,h:Math.min(i.y+i.h,r.y+r.h)-a,z:r.z+r.height}}).filter(r=>r.w>.35&&r.h>.35),n=i.x+i.w/2,s=i.y+i.h/2;return t.sort((r,o)=>o.w*o.h-r.w*r.h||Math.hypot(r.x+r.w/2-n,r.y+r.h/2-s)-Math.hypot(o.x+o.w/2-n,o.y+o.h/2-s))[0]||null}function Yx(i,e,t,n){let s=Math.min(56,t*.42),r=[],o=a=>n.measureText?.(a).width??a.length*s*.56;for(let a=0;a<90;a++){n.font=`600 ${s}px system-ui`,r=[];let c="";for(let l of String(i).split(/\s+/)){let d=c?c+" "+l:l;c&&o(d)>e?(r.push(c),c=l):c=d}if(c&&r.push(c),r.every(l=>o(l)<=e)&&r.length*s*1.24<=t)break;s*=.92}return{lines:r,fontSize:s,lineHeight:s*1.24}}function Ef(i,e,t){return i.stairs?.some(n=>{if(n.connectionId!==t.stair)return!1;let s=n.stops.find(o=>o.floor===e.id);if(!s)return!1;let r=n.stops.filter(o=>o.z<s.z-1e-6);return r.length>0&&t.z<s.z&&t.z>=Math.max(...r.map(o=>o.z))-.2})}function qx(i,e,t={}){let n=null,s=null,r=null,o=new zl({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),a=()=>{o.setAnimationLoop(null),o.dispose(),o.forceContextLoss(),o.domElement.remove()};try{let Z=function(h,M){let E=h.height;if(h.contextOnly&&Re!==M.id||h.kind==="slab"&&(!kt||ji)&&!nt||h.kind==="ceiling"&&(!kt||ji)&&(!Ve||Qe))return 0;let k=h.kind==="wall"||h.kind==="solid";return Qe&&k&&(E=Math.max(0,Math.min(E,(h.baseZ??M.z)+ee-h.z))),k&&!Te&&(E=0),E},le=function(){let h=new Dt;gt=[];for(let M of f.values())M.position.y=M.userData.rank*xe;he.position.y=0,he.userData.displayDatum=he.position.y;for(let M of v){let E=e.levels.find(oe=>oe.id===M.userData.level),k=f.get(E.id),re=M.userData.fadeMesh;M.userData.boxes.forEach((oe,J)=>{let X=Z(oe,E),se=De&&M.userData.faded.has(J),j=(ye,Ue)=>{let Xe=Ue&&X>.001;h.position.set(oe.x+oe.w/2,oe.z+X/2,oe.y+oe.h/2),h.scale.set(Xe?oe.w:0,Xe?X:0,Xe?oe.h:0),h.updateMatrix(),ye.setMatrixAt(J,h.matrix)};j(M,!se),re&&j(re,se),k.visible&&X>.001&&gt.push({mesh:M,index:J,kind:oe.kind,level:E.id,min:{x:oe.x,y:oe.z+k.position.y,z:oe.y},max:{x:oe.x+oe.w,y:oe.z+X+k.position.y,z:oe.y+oe.h}})}),M.visible=M.userData.boxes.some((oe,J)=>Z(oe,E)>.001&&!(De&&M.userData.faded.has(J))),M.instanceMatrix.needsUpdate=!0,re&&(re.visible=De&&M.userData.boxes.some((oe,J)=>Z(oe,E)>.001&&M.userData.faded.has(J)),re.instanceMatrix.needsUpdate=!0)}for(let M of C){let E=M.userData.shape,k=e.levels.find(oe=>oe.id===M.userData.level),re=Z(E,k);if(E.bottomPlane||E.topPlane){let oe=Qe&&["wall","solid"].includes(E.kind)?(E.baseZ??k.z)+ee:1/0;if(M.userData.prismCutHeight!==oe){let J=window.KERN_ELEVATIONS?.clipPrism?.(E,-1/0,oe)||[E],X=[];for(let j of J){let ye=Ao(j),Ue=ye.attributes.position;for(let Xe=0;Xe<Ue.count;Xe++)X.push(Ue.getX(Xe),Ue.getY(Xe)+j.z-E.z,Ue.getZ(Xe));ye.dispose()}let se=new xt;se.setAttribute("position",new mt(X,3)),se.computeVertexNormals(),se.computeBoundingBox(),se.computeBoundingSphere(),M.geometry.dispose(),M.geometry=se,M.userData.prismCutHeight=oe}M.scale.y=1}else M.scale.y=re/E.height;M.visible=re>.001&&(!M.userData.contextOnly||Re===M.userData.level)}for(let M of g)M.visible=de;for(let M of R)M.visible=de&&!M.userData.duplicate;be(),c.updateMatrixWorld(!0),L=""},be=function(){for(let h of D){let M=h.userData.floorHighlight||h.userData.floorLeader;h.visible=!!f.get(M)?.visible&&(M===ke||P.has(M))}for(let h of g)h.material.color.set(h.userData.level===ke||P.has(h.userData.level)?10410239:16777215)},ve=function(h){P=new Set((h||[]).filter(M=>f.has(M))),be()},we=function(h){h&&!f.get(h)?.visible&&(h=null),h!==ke&&(ke=h,be(),o.domElement.style.cursor=h?"pointer":"default",t.onHover?.(h?e.levels.find(M=>M.id===h):null))},Fe=function(h=!1){l.updateMatrixWorld(!0);let M=[...l.position.toArray(),...l.quaternion.toArray(),xe,Te,Qe,ee,de,De,Re,..._e()].join(":");if(!h&&M===L&&!pe)return;let E=[...l.position.toArray().map(j=>j.toFixed(2)),...l.quaternion.toArray().map(j=>j.toFixed(3)),xe,Te,Qe,ee,De,..._e()].join(":");E!==ge&&(ge=E,Le=performance.now(),pe=De);let k=!De||!ce&&!me&&(h||performance.now()-Le>=180),re=new Map(v.map(j=>[j,new Set]));if(k&&De&&Te)for(let j of e.levels){let ye=f.get(j.id);if(!ye.visible)continue;let Ue=j.boxes.filter(Xe=>Xe.kind==="slab").sort((Xe,He)=>He.w*He.h-Xe.w*Xe.h).slice(0,12);for(let Xe of Ue)for(let[He,at]of[[.5,.5],[.22,.22],[.78,.78]]){let ut={x:Xe.x+Xe.w*He,y:Xe.z+Xe.height+.8+ye.position.y,z:Xe.y+Xe.h*at},rt=null,lt=1;for(let It of gt){let Gt=Mf(l.position,ut,It);Gt!==null&&Gt>1e-5&&Gt<lt&&(lt=Gt,rt=It)}rt?.kind==="wall"&&lt<.985&&re.get(rt.mesh).add(rt.index)}}if(k){let j=new Set,ye=C.filter(Ue=>Ue.userData.kind==="wall"&&Ue.visible&&f.get(Ue.userData.level)?.visible);if(De&&Te){for(let Ue of e.levels)if(f.get(Ue.id)?.visible)for(let Xe of(Ue.rooms||[]).slice(0,20)){let He=window.KERN_SHAPES?window.KERN_SHAPES.centroid(Xe):{x:Xe.x+Xe.w/2,y:Xe.y+Xe.h/2},at=new T(He.x,Xe.z+.8+f.get(Ue.id).position.y,He.y),ut=at.clone().sub(l.position),rt=ut.length(),It=new Gn(l.position,ut.normalize(),.05,rt-.05).intersectObjects(ye,!1)[0];It&&j.add(It.object)}}for(let Ue of C)Ue.userData.kind==="wall"&&(Ue.material=U(Ue.userData.shape.color,j.has(Ue)))}let oe=!1;if(k){for(let j of v){let ye=re.get(j),Ue=j.userData.faded;(ye.size!==Ue.size||[...ye].some(Xe=>!Ue.has(Xe)))&&(oe=!0),j.userData.faded=ye}pe=!1}oe&&le();let J=[],X=Math.max(1,i.clientWidth),se=Math.max(1,i.clientHeight);for(let j of[...g].sort((ye,Ue)=>+!!ye.userData.roomLabel-+!!Ue.userData.roomLabel||(Ue.userData.area||0)-(ye.userData.area||0))){let ye=j.getWorldPosition(new T),Ue=ye.clone().applyMatrix4(l.matrixWorldInverse),Xe=2*Math.max(.1,-Ue.z)*Math.tan(oi.degToRad(l.fov/2))/se,He=Math.min(j.userData.labelWidth*Xe,j.userData.maxWorldWidth||1/0);j.scale.set(He,He*j.userData.labelRatio,1);let at=ye.clone().project(l),ut=He/Xe,rt=ut*j.userData.labelRatio,lt={x:(at.x+1)*X/2-ut/2,y:(1-at.y)*se/2-rt/2,w:ut,h:rt},It=J.some(Gt=>lt.x<Gt.x+Gt.w+5&&lt.x+lt.w+5>Gt.x&&lt.y<Gt.y+Gt.h+5&&lt.y+lt.h+5>Gt.y);if(j.visible=de&&f.get(j.userData.level).visible&&(!j.userData.roomLabel||j.userData.level===Re)&&Ue.z<0&&at.z>=-1&&at.z<=1&&lt.x+lt.w>0&&lt.y+lt.h>0&&lt.x<X&&lt.y<se&&ut>=58&&!It&&!gt.some(Gt=>{let Zn=Mf(l.position,ye,Gt);return Zn!==null&&Zn>1e-5&&Zn<.995}),j.visible&&J.push(lt),j.userData.floorLabel){let Gt=D.find(Zn=>Zn.userData.floorLeader===j.userData.level);if(Gt){let Zn=Gt.geometry.attributes.position;Zn.setX(0,j.position.x+He/2),Zn.needsUpdate=!0,Gt.visible=de&&j.visible&&(j.userData.level===ke||P.has(j.userData.level))}}}for(let j of R){let ye=j.getWorldPosition(new T);j.visible=de&&f.get(j.userData.level).visible&&!j.userData.duplicate&&l.position.y>ye.y}L=M},Be=function(){me=null},Ne=function(h,M,E,k=je){let re=l.position.clone(),oe=u.target.clone(),J=u.enableDamping;u.enableDamping=!1,u.update(),l.position.copy(re),u.target.copy(oe),u.update(),u.enableDamping=J,me=E&&!I?.matches?{from:re,targetFrom:oe,to:h.clone(),targetTo:M.clone(),datumFrom:je,datumTo:k,start:performance.now(),duration:420}:null,me||(je=k,l.position.copy(h),u.target.copy(M),l.lookAt(M),u.update(),Fe(!0))},ht=function(h=performance.now()){if(!me)return!1;let M=me,E=I?.matches?1:Math.min(1,Math.max(0,(h-M.start)/M.duration)),k=E*E*(3-2*E);return je=oi.lerp(M.datumFrom,M.datumTo,k),l.position.lerpVectors(M.from,M.to,k),u.target.lerpVectors(M.targetFrom,M.targetTo,k),l.lookAt(u.target),l.updateMatrixWorld(!0),E===1&&(me=null,u.update()),!0},Oe=function(){let h=`${_e().join("|")}:${xe}:${l.aspect}:${l.fov}`;if(H?.key===h)return H;let M=new dn;for(let X of f.values())if(X.visible){let se=e.levels.find(j=>j.id===X.userData.id);for(let j of[...se.boxes,...se.polygons||[],...O(se)])M.expandByPoint(new T(j.x,j.z+X.position.y,j.y)),M.expandByPoint(new T(j.x+j.w,j.z+j.height+X.position.y,j.y+j.h))}M.isEmpty()&&(M.min.set(N.minX,N.minZ-Q*xe,N.minY),M.max.set(N.maxX,N.maxZ+(e.levels.length-1-Q)*xe,N.maxY));let E=M.getCenter(new T),k=M.getSize(new T),re=Math.max(k.length()/2,8),oe=oi.degToRad(l.fov/2),J=re/Math.sin(oe)*Math.max(1,1/l.aspect)*1.1;return H={key:h,center:E,distance:J}},Ke=function(){return kt?1/Math.tan(oi.degToRad(l.fov/2)):Oe().distance/Math.max(.001,l.position.distanceTo(u.target))},Ce=function(){let h=Ke(),M=h<.1?Math.max(.1,Math.round(h*1e3)/10):Math.round(h*100);Number.isFinite(h)&&M!==Ie&&(Ie=M,t.onCameraChange?.(h))},Me=function(h=!1,M=!1){let{center:E,distance:k}=Oe(),re=h?l.position.clone().sub(u.target).normalize():new T(1,.9,1.2).normalize();l.near=.05,l.far=Math.max(5e3,k*5),l.updateProjectionMatrix(),Ne(E.clone().add(re.multiplyScalar(k)),E,M,ze(Se))},Je=function(h,M=!0){let E=ze(h),k=E-je;Se=h,Ne(l.position.clone().add(new T(0,k,0)),u.target.clone().add(new T(0,k,0)),M,E)},ft=function(){if(t.onFloorVisibility)return t.onFloorVisibility({all:!0});kn(),($e||ct==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&dt(!0),ue&&Cn(),Be();for(let h of f.values())h.visible=!0;Re=null,we(null),le(),Fe(!0),B("visibility")},Lt=function(h){if(t.onFloorSelect)return t.onFloorSelect(h,{additive:!1});if(kn(),($e||ct==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&dt(!0),ue&&Cn(),!!f.has(h)){if(Re===h&&_e().length===1){B();return}G(null,null),Re=h;for(let[M,E]of f)E.visible=M===h;we(null),le(),Je(h),B(),G(h,null)}},_t=function(h,{preserveEditing:M=!1}={}){if(f.has(h)){if(t.onFloorSelect&&!M)return t.onFloorSelect(h,{additive:!1});if(M&&t.getFloorState)return ie(t.getFloorState());!M&&!f.get(h).visible&&(f.get(h).visible=!0,le()),Re!==h&&(window.KERN_CONNECTION_3D?.cancel(),(ct==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&dt(!0)),Re=h,Se=h,je=ze(h),we(null),M||Pe([h]),Fe(!0),B(M?"sync":"navigation")}},Xn=function(h,M=!1){if(!f.has(h))return;if(t.onFloorSelect)return t.onFloorSelect(h,{additive:M});if(!M)return Lt(h);kn(),dt(),Cn();let E=f.get(h);E.visible=!E.visible,_e().length||(E.visible=!0),G(null,null),_t(E.visible?h:_e()[0]),le()},Hn=function(h){f.has(h)&&h!==Se&&_t(h,{preserveEditing:!0})},xr=function(h){let M=e.levels.findIndex(k=>k.id===Re),E=e.levels[M+Math.sign(h)];M>=0&&E&&(_t(E.id),Je(E.id))},Rn=function(h,{physicalOnly:M=!1}={}){let E=o.domElement.getBoundingClientRect();if(!E.width||!E.height)return null;te.set((h.clientX-E.left)/E.width*2-1,-(h.clientY-E.top)/E.height*2+1),l.updateMatrixWorld(!0),c.updateMatrixWorld(!0),Y.setFromCamera(te,l);let k=[...S,...C,...M?[]:[...g,...R]].filter(ye=>ye.visible&&f.get(ye.userData.level)?.visible),re=Y.intersectObjects(k,!1)[0],oe=re?.object.userData.level,J=re?.object.userData.boxes?.[re.instanceId],X=re?.object.userData.room||J?.room,se=e.levels.find(ye=>ye.id===oe)?.rooms?.find(ye=>ye.id===X);o.domElement.title=se?se.name:"";let j=re?.object.userData.sourceFloor||J?.sourceFloor||oe;return it=re?{floor:j,displayFloor:oe,door:re.object.userData.door||J?.door,room:X||J?.rooms?.[0],roomLabel:!!re.object.userData.roomLabel,floorSurface:(re.object.userData.kind||J?.kind)==="slab"&&!re.object.userData.door&&!J?.door,point:re.point,normal:re.face?.normal?.clone().applyMatrix3(new pt().getNormalMatrix(re.object.matrixWorld)).normalize()}:null,j||null},vr=function(h){h?.routeStair&&(h=window.KERN_ROUTE_STAIRS.editFrame(h));let M=h&&window.KERN_TRANSFORM?.frame(h),E=M?M.point(M.x+M.w/2,M.y+M.h):h?[h.x+h.w/2,h.y+h.h]:null;yr=h?{x:E[0],y:E[1],z:h.z+f.get(h.floor).position.y,w:M?.w??h.w,h:M?.h??h.h}:null,Mr()},Mr=function(){if(!yr||kt){Yn.style.display="none";return}let h=yr,M=new T(h.x,h.z,h.y).project(l),E=o.domElement.getBoundingClientRect();Yn.textContent=h.w.toFixed(2)+" \xD7 "+h.h.toFixed(2)+" m",Yn.style.display="block",Yn.style.left=Math.min(Math.max(6,(M.x+1)*E.width/2-45),Math.max(6,E.width-135))+"px",Yn.style.top=Math.min(Math.max(6,(1-M.y)*E.height/2+15),Math.max(6,E.height-28))+"px"},G=function(h,M){for(n?.select([]),vr(null),Nt=h?{floor:h,ids:M?[M]:[]}:null;wt.children.length;){let oe=wt.children[0];wt.remove(oe),oe.geometry.dispose()}let E=e.levels.find(oe=>oe.id===h)?.rooms.find(oe=>oe.id===M)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(h,M),k=e.levels.find(oe=>oe.id===h),re=k&&V(k);bt=f.has(h)?E?{...E,floor:h}:!M&&k?{id:null,isFloor:!0,floor:h,z:k.z,x:re.minX,y:re.minY,w:re.maxX-re.minX,h:re.maxY-re.minY}:null:null,bt&&Ye(bt)},ne=function(h,M){if(G(h,M[0]||null),Nt={floor:h,ids:[...M]},M.length<2)return;for(bt=null;wt.children.length;){let k=wt.children[0];wt.remove(k),k.geometry.dispose()}let E=e.levels.find(k=>k.id===h)?.rooms.filter(k=>M.includes(k.id))||[];for(let k of E){let re=k.routeStair?window.KERN_ROUTE_STAIRS.editFrame(k):k,oe=window.KERN_SHAPES?.points(re)||[[re.x,re.y],[re.x+re.w,re.y],[re.x+re.w,re.y+re.h],[re.x,re.y+re.h]],J=new Wi(new xt().setFromPoints(oe.map(X=>new T(X[0],re.z+f.get(h).position.y+.08,X[1]))),A);J.renderOrder=10,wt.add(J)}if(E.length){let k=E.map(J=>J.routeStair?{...J,...window.KERN_ROUTE_STAIRS.bounds(J)}:J),re=Math.min(...k.map(J=>J.x)),oe=Math.min(...k.map(J=>J.y));vr({floor:h,x:re,y:oe,z:Math.min(...k.map(J=>J.z)),w:Math.max(...k.map(J=>J.x+J.w))-re,h:Math.max(...k.map(J=>J.y+J.h))-oe})}},ie=function({active:h,selected:M=[],visible:E=[],select:k=!1,navigate:re=!1}){let oe=new Set(E),J=M.includes(h)&&f.has(h)?h:null;if(!(Re===J&&f.has(h)&&Se===h&&_e().length===oe.size&&_e().every(se=>oe.has(se))&&P.size===M.length&&M.every(se=>P.has(se))&&!k&&!re)){n?.cancel(),ue&&Cn(),($e||ct==="bridge"||window.KERN_BRIDGE_UI?.isEditing())&&dt(!0),kn(),y.clear(),fe=null;for(let[se,j]of f)j.visible=oe.has(se);if(Re=J,ve(M),f.has(h)&&(re?Je(h):(Se=h,je=ze(h))),k)Pe(M);else if(bt&&!oe.has(bt.floor)){let se=bt.isFloor?Nt:null;G(null,null),se&&(Nt=se)}Nt?.objects&&K(Nt.objects.filter(se=>oe.has(se.floor))),we(null),le(),Fe(!0),B("controller")}},K=function(h){let M=(h||[]).filter(E=>f.has(E.floor));if(M.length&&M.every(E=>E.kind==="rooms"&&E.floor===M[0].floor)){ne(M[0].floor,M.map(E=>E.id));return}if(G(null,null),n?.select(M),!!M.length){Nt={objects:M.map(E=>({...E}))};for(let E of M){let k=E.polygons?.length?E.polygons:[[[E.x,E.y],[E.x+E.w,E.y],[E.x+E.w,E.y+E.h],[E.x,E.y+E.h]]],re=E.z+f.get(E.floor).position.y+.08;for(let oe of k){let J=new Wi(new xt().setFromPoints(oe.map(X=>new T(X[0],re,X[1]))),A);J.renderOrder=10,J.userData.selectedObject={floor:E.floor,kind:E.kind,id:E.id},wt.add(J)}}}},Pe=function(h){let M=[...new Set(h||[])].filter(E=>f.get(E)?.visible);ve(h),G(M.length===1?M[0]:null,null),Nt=M.length?{floors:M}:null},We=function(){if(!Nt)return Me(!0,!0);let h=new dn,M=Nt.floor;if(Nt.objects){M=Nt.objects[0]?.floor;for(let J of Nt.objects){let X=f.get(J.floor).position.y;h.expandByPoint(new T(J.x,J.z+X,J.y)),h.expandByPoint(new T(J.x+J.w,J.z+J.height+X,J.y+J.h))}}else if(Nt.floors){M=Nt.floors.includes(Re)?Re:Nt.floors[0];for(let J of Nt.floors){let X=e.levels.find(j=>j.id===J);if(!X||!f.get(J)?.visible)continue;let se=f.get(J).position.y;for(let j of[...X.boxes,...X.polygons||[],...O(X)])h.expandByPoint(new T(j.x,j.z+se,j.y)),h.expandByPoint(new T(j.x+j.w,j.z+j.height+se,j.y+j.h))}}else{let J=e.levels.find(j=>j.id===M);if(!J)return;let X=Nt.ids.length?Nt.ids.map(j=>J.rooms.find(ye=>ye.id===j)||window.KERN_CONCRETE_CAP_UI?.selectionRoom(J.id,j)).filter(Boolean):J.rooms,se=f.get(J.id).position.y;for(let j of X){let ye=j.routeStair?{...j,...window.KERN_ROUTE_STAIRS.bounds(j)}:j;h.expandByPoint(new T(ye.x,ye.z+se,ye.y)),h.expandByPoint(new T(ye.x+ye.w,ye.z+(ye.height||J.height||3)+se,ye.y+ye.h))}}if(h.isEmpty())return;let E=h.getCenter(new T),k=Math.max(2,h.getSize(new T).length()/2),re=k/Math.sin(oi.degToRad(l.fov/2))*Math.max(1,1/l.aspect)*1.15,oe=l.position.clone().sub(u.target).normalize();Ne(E.clone().add(oe.multiplyScalar(re)),E,!0,ze(M))},Ye=function(h){for(h.routeStair&&(h=window.KERN_ROUTE_STAIRS.editFrame(h)),vr(h);wt.children.length;){let E=wt.children[0];wt.remove(E),E.geometry.dispose()}let M=h.z+f.get(h.floor).position.y+.08;if(!h.isFloor){let E=new Wi(new xt().setFromPoints((window.KERN_SHAPES?.points(h)||[[h.x,h.y],[h.x+h.w,h.y],[h.x+h.w,h.y+h.h],[h.x,h.y+h.h]]).map(k=>new T(k[0],M,k[1]))),A);if(E.renderOrder=10,wt.add(E),window.KERN_CONCRETE_CAP_UI?.readOnly(h.floor,h.id))return;for(let[k,re,oe]of window.KERN_ROTATE?.active()&&window.KERN_ROTATE.eligibleRoom(h)?window.KERN_SHAPES.raw(h).map((J,X)=>["rotate-"+X,...J]):(window.KERN_TRANSFORM?.handles(h)||[["nw",h.x,h.y],["ne",h.x+h.w,h.y],["se",h.x+h.w,h.y+h.h],["sw",h.x,h.y+h.h]]).filter(J=>J[0].length===2)){let J=k.startsWith("rotate-")&&window.KERN_ROTATE?.pivotFor(h)?.index===Number(k.slice(7)),X=new Ae(new Ct(J?.55:.35,.15,J?.55:.35),J?Nn:A);X.position.set(re,M,oe),X.userData.edge=k,X.renderOrder=11,wt.add(X)}}if(h.routeStair&&window.KERN_ROUTE_STAIRS){let E=h.routeStair,k=E.nodes,re=window.KERN_ROUTE_STAIRS.elevations(h,window.kernPlanner?.getPlan());for(let oe=0;oe<k.length;oe++){let J=window.KERN_ROUTE_STAIRS.point(h,k[oe]),X=re[oe],se=(oe===0?E.start?.floor:oe===k.length-1?E.end?.floor:null)||h.floor,j=f.get(se)?.position.y??f.get(h.floor).position.y,ye=X+j,Ue=new Ae(new Bn(.23,10,8),A);Ue.position.set(J[0],ye+.12,J[1]),Ue.userData.edge="route-node-"+oe,Ue.userData.routeZ=X,Ue.userData.displayOffset=j,Ue.renderOrder=16,wt.add(Ue);let Xe=new Ae(new ir(.18,.45,8),Nn);if(Xe.position.set(J[0],ye+1,J[1]),Xe.userData.edge="route-height-"+oe,Xe.userData.routeZ=X,Xe.userData.displayOffset=j,Xe.renderOrder=16,wt.add(Xe),oe===(window.KERN_ROUTE_UI?.selectedNode??0))for(let[He,at]of(k[oe].landing||[]).entries()){let ut=window.KERN_ROUTE_STAIRS.point(h,at),rt=new Ae(new Ct(.22,.15,.22),Nn);rt.position.set(ut[0],ye+.14,ut[1]),rt.userData.edge="route-landing-"+oe+"-"+He,rt.userData.routeZ=X,rt.userData.displayOffset=j,rt.renderOrder=17,wt.add(rt)}}}if(!h.isFloor&&!window.KERN_ROTATE?.active()){let E=new Ae(new pi(.28),A);E.position.set(h.x+h.w/2,M,h.y+h.h/2),E.userData.edge="move",E.renderOrder=14,wt.add(E)}if(!h.routeStair&&!window.KERN_ROTATE?.active()&&(h.isFloor||h.localSteps||window.KERN_ROTATE?.eligibleRoom(h))){let E=h.localSteps&&window.KERN_ELEVATION_UI?.handlePoint(h.floor,h.id),k=E?.x??h.x+h.w/2,re=E?.y??h.y+h.h/2,oe=(h.__elevation?h.z:window.KERN_ELEVATION_UI?.handleZ(h.floor,h.id)??h.z)+f.get(h.floor).position.y,J=new Xt(new xt().setFromPoints([new T(k,oe,re),new T(k,oe+1.6,re)]),Nn);J.renderOrder=12,wt.add(J);let X=new Ae(new ir(.23,.55,8),Nn);X.position.set(k,oe+1.6,re),X.userData.edge="elevate",X.renderOrder=13,wt.add(X)}},qe=function(h,M){let E=o.domElement.getBoundingClientRect();return te.set((h.clientX-E.left)/E.width*2-1,-(h.clientY-E.top)/E.height*2+1),l.updateMatrixWorld(!0),c.updateMatrixWorld(!0),Y.setFromCamera(te,l),Y.ray.intersectPlane(new $t(new T(0,1,0),-(M.z+f.get(M.floor).position.y)),new T)},Tt=function(){for(;tt.children.length;){let h=tt.children[0];tt.remove(h),h.geometry.dispose()}},dt=function(h=!1){let M=$e;$e=null,window.KERN_BRIDGE_UI?.cancel(),Tt(),yt.style.display="none",u.enabled=!kt,M&&o.domElement.hasPointerCapture(M.pointerId)&&o.domElement.releasePointerCapture(M.pointerId),h&&(window.KERN_CONNECTION_3D?.cancel(),ct="select",wt.visible=!kt)},vn=function(h){h!==ct&&(n?.cancel(),ue&&Cn(),window.KERN_CONNECTION_3D?.cancel(),dt(),h!=="select"&&h!=="bridge"&&!Re&&_t(Se,{preserveEditing:!0}),ct=h,wt.visible=h==="select",o.domElement.title=h==="bridge"?"Click two room floors at the same height":h==="edge-steps"?"Click a room edge and drag outward":h==="steps"?"Draw between two different-height surfaces":h==="room"?"Drag a room footprint":h==="stairs"?"Draw a stair footprint, then choose destination floors":"")},qn=function(h,M){let E=o.domElement.getBoundingClientRect();te.set((h.clientX-E.left)/E.width*2-1,-(h.clientY-E.top)/E.height*2+1),l.updateMatrixWorld(!0),Y.setFromCamera(te,l);let k=Y.ray.intersectPlane(new $t(new T(0,1,0),-M),new T);return k?{x:k.x,y:k.z}:null},Qt=function(h){if(Tt(),yt.style.display="block",yt.style.left="18px",yt.style.top="auto",yt.style.bottom="18px",yt.textContent=h.error||h.summary,h.error||h.valid===!1||!h.room&&!h.detail||!f.has(h.fid))return;let M=h.room?.bridge?[{...h.room,polygon:window.KERN_SHAPES.points(h.room),z:h.room.z-.15,height:.15}]:h.detail?vf(h.detail):[{...h.room,z:e.levels.find(E=>E.id===h.fid).z-.15,height:.15}];for(let E of M){let k;E.polygon?k=Ao(E):k=new Ct(E.w,E.height,E.h);let re=new Ae(k,Nn);E.polygon?re.position.y=E.z+f.get(h.fid).position.y:re.position.set(E.x+E.w/2,E.z+E.height/2+f.get(h.fid).position.y,E.y+E.h/2),re.renderOrder=14,tt.add(re)}},Di=function(h){if(Rn(h,{physicalOnly:!0}),!it?.floorSurface||!it.room||!it.normal||it.normal.y<.5)return null;let M=e.levels.find(k=>k.id===it.floor),E=M?.rooms.find(k=>k.id===it.room);return E?{floor:M.id,p:{x:it.point.x,y:it.point.z},z:E.z}:null},Ht=function(h,M=Re||Se){Rn(h);let E=it?.floor||M,k=e.levels.find(J=>J.id===E);if(!k)return null;let re=it?{x:it.point.x,y:it.point.z}:qn(h,k.z+f.get(E).position.y);if(!re)return null;let oe=it?.point||new T(re.x,k.z+f.get(E).position.y,re.y);return{floor:E,room:it?.room,door:it?.door,p:re,altKey:!!h.altKey,worldPerPixel:2*l.position.distanceTo(oe)*Math.tan(l.fov*Math.PI/360)/Math.max(1,o.domElement.getBoundingClientRect().height)}},Mn=function(h){Tt(),yt.style.display="block",yt.style.left="18px",yt.style.top="auto",yt.style.bottom="18px",yt.textContent=h.valid?h.summary||(ct==="disconnect"?"Release to remove connection":"Click or release to place opening"):h.reason||"Choose a wall";let M=h.geometry;if(!(!M||!f.has(h.fid)))for(let E of M.segments||[M]){let k=E,re=k.axis==="poly"?k.p0:k.axis==="h"?[k.start,k.fixed]:[k.fixed,k.start],oe=k.axis==="poly"?k.p1:k.axis==="h"?[k.end,k.fixed]:[k.fixed,k.end],J=h.door?.kind==="window"?h.door.sill??.9:0,X=h.door?.kind==="window"?h.door.height??1.4:h.door?.maximumPassage?h.door.height:window.KERN_LOW_OPENINGS?.recognized(h.door)?h.clearHeight??h.door.height:2.2,se=h.z+J+f.get(h.fid).position.y,j=[[re[0],se,re[1]],[oe[0],se,oe[1]],[oe[0],se+X,oe[1]],[re[0],se+X,re[1]]],ye=new Wi(new xt().setFromPoints(j.map(Ue=>new T(...Ue))),Ts);ye.renderOrder=20,tt.add(ye)}},Jh=function(){if(!Pn)return;l.position.set(Pn.x+(Pn.bobX||0)*Math.cos(Po),Pn.z+(Pn.eyeHeight??1.6278874)+(Pn.bobY||0),Pn.y-(Pn.bobX||0)*Math.sin(Po)),l.rotation.order="YXZ",l.rotation.set(Yh,Po,Pn.roll||0);let h=new T(0,0,-1).applyQuaternion(l.quaternion);if(Li.position.copy(l.position),Li.target.position.copy(l.position).add(h.multiplyScalar(8)),Li.visible=qh,!Pn.fly){for(let M of g)M.visible=!1;for(let M of R)M.visible=!M.userData.duplicate&&Math.abs(M.position.y-Pn.z)<.2}},Af=function(h,M=0,E=0,k=!0,re=!1){if(h){if(n?.cancel(),ue&&Cn(),dt(!0),!kt){if(Cs=Kl(),l.fov=h.fov??90,l.updateProjectionMatrix(),kt=!0,ji=!!h.fly,c.children.filter(oe=>oe.isHemisphereLight||oe.isDirectionalLight).forEach(oe=>{oe.userData.originalIntensity=oe.intensity,h.fly||(oe.intensity=oe.isHemisphereLight?.8:.3)}),wt.visible=!1,u.enabled=!1,me=null,!h.fly){xe=0,Te=!0,Qe=!1,De=!1,de=!1,Re=null;for(let oe of f.values())oe.visible=!0;he.visible=!1,Ni.visible=!0}le()}if(ji&&!h.fly){xe=0,Te=!0,Qe=!1,De=!1,de=!1,Re=null;for(let oe of f.values())oe.visible=!0;he.visible=!1,Ni.visible=!0,ji=!1,le()}ji=!!h.fly,l.fov!==(h.fov??90)&&(l.fov=h.fov??90,l.updateProjectionMatrix()),Pn=h,Po=M,Yh=E,qh=k,Jh()}else if(kt){let oe=l.position.clone(),J=l.getWorldDirection(new T);kt=!1,ji=!1,l.fov=Cs?.fov??42,l.updateProjectionMatrix(),c.children.filter(X=>X.isHemisphereLight||X.isDirectionalLight).forEach(X=>X.intensity=X.userData.originalIntensity??X.intensity),wt.visible=!0,Pn=null,Li.visible=!1,Ni.visible=!1,u.enabled=!0,l.rotation.order="XYZ",Jl(re?{...Cs,position:oe.toArray(),target:oe.clone().add(J.multiplyScalar(10)).toArray()}:Cs)}},Kl=function(){return{fov:l.fov,position:l.position.toArray(),target:u.target.toArray(),focused:Re,navigationFloor:Se,navigationY:je,navigationElevation:ze(Se),visible:_e(),gap:xe,showWalls:Te,showCeilings:Ve,showSlabs:nt,cutaway:Qe,cutHeight:ee,labels:de,xray:De,showGrid:Ze,overview:null}},Jl=function(h){if(!h||ae)return;l.fov=Number.isFinite(h.fov)?h.fov:42,l.updateProjectionMatrix();let M=re=>Array.isArray(re)&&re.length===3&&re.every(Number.isFinite);Be(),xe=Math.max(0,Math.min(12,Number(h.gap)||0)),Te=h.showWalls!==!1,Ve=!!h.showCeilings,nt=h.showSlabs!==!1,Qe=h.cutaway!==!1,ee=Number.isFinite(h.cutHeight)?Math.max(.4,Math.min(2.4,h.cutHeight)):1.15,de=h.labels!==!1,De=!!h.xray,Ze=h.showGrid!==!1,he.visible=Ze,Re=f.has(h.focused)?h.focused:null;let E=Array.isArray(h.visible)?h.visible.filter(re=>f.has(re)):[...f.keys()];for(let[re,oe]of f)oe.visible=E.includes(re);if(!Re&&!E.length&&h.visible?.length)for(let re of f.values())re.visible=!0;Se=f.has(h.navigationFloor)?h.navigationFloor:Re||Se;let k=f.has(h.navigationFloor)&&Number.isFinite(h.navigationElevation)?ze(Se)-h.navigationElevation:0;je=(Number.isFinite(h.navigationY)?h.navigationY:ze(Se))+k,we(null),le(),M(h.position)&&M(h.target)?Ne(new T().fromArray(h.position).add(new T(0,k,0)),new T().fromArray(h.target).add(new T(0,k,0)),!1):Me(),Fe(!0),B("restore")},$h=function(){if(!ae){s?.dispose(),r?.(),n?.dispose(),o.domElement.removeEventListener("pointerdown",Ih,!0),o.domElement.removeEventListener("pointermove",Dh,!0),o.domElement.removeEventListener("pointerup",Lh,!0),o.domElement.removeEventListener("pointercancel",Co,!0),o.domElement.removeEventListener("lostpointercapture",Co,!0),dt(!0),o.domElement.removeEventListener("pointerdown",Et,!0),o.domElement.removeEventListener("pointermove",Pt,!0),o.domElement.removeEventListener("lostpointercapture",Ut,!0),o.domElement.removeEventListener("pointerup",Ut,!0),o.domElement.removeEventListener("pointercancel",Ut,!0),o.domElement.removeEventListener("pointerdown",En,!0),o.domElement.removeEventListener("pointermove",rn,!0),o.domElement.removeEventListener("pointerup",hn,!0),o.domElement.removeEventListener("pointercancel",As,!0),o.domElement.removeEventListener("lostpointercapture",ai,!0),ae=!0,Li.dispose();for(let h of Ni.children)h.geometry.dispose();me=null,o.setAnimationLoop(null),Wh.disconnect(),o.domElement.removeEventListener("pointerdown",Nh,!0),o.domElement.removeEventListener("pointermove",Uh,!0),o.domElement.removeEventListener("pointerup",Fh,!0),o.domElement.removeEventListener("pointercancel",Cn,!0),o.domElement.removeEventListener("lostpointercapture",Cn,!0),Rs.remove(),o.domElement.removeEventListener("pointerdown",Oh,!0),o.domElement.removeEventListener("pointermove",Bh,!0),o.domElement.removeEventListener("pointerup",zh,!0),o.domElement.removeEventListener("pointercancel",kn,!0),o.domElement.removeEventListener("lostpointercapture",kn,!0),Yn.remove(),yt.remove(),ws.dispose(),Nn.dispose(),A.dispose(),Ts.dispose(),Ro.dispose();for(let h of wt.children)h.geometry.dispose();u.removeEventListener("start",Vh),u.removeEventListener("end",Gh),u.dispose();for(let[h,M]of Object.entries(Hh))o.domElement.removeEventListener(h,M);o.domElement.removeEventListener("webglcontextlost",Xh),window.removeEventListener("blur",Zl);for(let h of[...g,...R])h.material.map.dispose(),h.material.dispose(),h.geometry&&!h.isSprite&&h.geometry.dispose();for(let h of D)h.geometry.dispose(),h.material.dispose();for(let h of C)h.geometry.dispose();for(let h of x.values())h.dispose();_.dispose(),he.geometry.dispose();for(let h of Array.isArray(he.material)?he.material:[he.material])h.dispose();o.dispose(),o.forceContextLoss(),o.domElement.remove(),c.clear(),y.clear()}};o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.outputColorSpace=an,o.setClearColor(1514532),o.domElement.setAttribute("aria-label","3D building editor. Alt-left drag orbits; middle or right drag pans. Alt-right drag horizontally zooms at the starting pointer: right closer, left farther. Click a floor or floor control to show and edit it alone; Shift-click adds or removes floors. F frames the selection. Click rooms and openings within the selected floor to edit them."),o.domElement.tabIndex=0,i.appendChild(o.domElement);let c=new Yr,l=new un(42,1,.05,5e3);c.add(new co(15988735,4739939,2.2));let d=new lr(16777215,2.5);d.position.set(-40,80,-30),c.add(d);let p=new lr(12044524,.6);p.position.set(40,10,60),c.add(p);let u=new Vl(l,o.domElement),m=a;a=()=>{s?.dispose(),r?.(),n?.dispose(),u.dispose();let h=new Set,M=new Set,E=new Set;c.traverse(k=>{k.geometry&&h.add(k.geometry);for(let re of Array.isArray(k.material)?k.material:k.material?[k.material]:[])M.add(re),re.map&&E.add(re.map)});for(let k of E)k.dispose();for(let k of M)k.dispose();for(let k of h)k.dispose();c.clear(),m()},u.enableDamping=!0,u.dampingFactor=.09,u.maxPolarAngle=Math.PI-.001,u.minDistance=1,u.maxDistance=1600,u.screenSpacePanning=!0,u.mouseButtons={LEFT:null,MIDDLE:Tn.PAN,RIGHT:Tn.PAN},u.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN};let _=new Ct(1,1,1),x=new Map,f=new Map,g=[],R=[],S=[],v=[],D=[],C=[],U=(h,M=!1)=>{let E=h+(M?":xray":"");return x.has(E)||x.set(E,new ds({color:h,roughness:.88,metalness:0,transparent:M,opacity:M?.5:1,depthWrite:!M})),x.get(E)},N=e.bounds,w=(N.minX+N.maxX)/2,b=(N.minY+N.maxY)/2,F=Math.max(6,(N.maxX-N.minX)*.22),q=e.levels.find(h=>h.id==="L0"),$=e.siteGroundZ??q?.z??0,Q=q?e.levels.indexOf(q):e.levels.reduce((h,M,E)=>Math.abs(M.z-$)<Math.abs(e.levels[h].z-$)?E:h,0),O=h=>(h.primitives||[]).map(M=>{let E=window.KERN_PRIMITIVES.bounds(M);return{...E,z:h.z+E.z}}),V=h=>{let M=[...h.boxes,...h.polygons||[],...O(h)];return M.length?{minX:Math.min(...M.map(E=>E.x)),maxX:Math.max(...M.map(E=>E.x+E.w)),minY:Math.min(...M.map(E=>E.y)),maxY:Math.max(...M.map(E=>E.y+E.h))}:N},W=(h,M,E)=>{let k=Xx(h,M);if(!k)return;let re=String(h.name||h.id),oe=Math.min(.32,Math.min(k.w,k.h)*.1),J=k.h>k.w*1.35,X=(J?k.h:k.w)-oe*2,se=(J?k.w:k.h)-oe*2,j=Math.min(X,9),ye=Math.min(se,2.5),Ue=64,Xe=document.createElement("canvas");Xe.width=Math.ceil(j*Ue),Xe.height=Math.ceil(ye*Ue);let He=Xe.getContext("2d");if(!He)return;let at=Yx(re,Xe.width-10,Xe.height-8,He);He.fillStyle="#263545",He.textAlign="center",He.textBaseline="middle",He.strokeStyle="#eef3f4",He.lineWidth=Math.max(1,at.fontSize*.045),He.lineJoin="round",at.lines.forEach((lt,It)=>{let Gt=Xe.height/2+(It-(at.lines.length-1)/2)*at.lineHeight;He.strokeText?.(lt,Xe.width/2,Gt),He.fillText(lt,Xe.width/2,Gt)});let ut=new hs(Xe);ut.colorSpace=an;let rt=new Ae(new Dn(j,ye),new jt({map:ut,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));rt.rotation.set(-Math.PI/2,0,J?Math.PI/2:0),rt.position.set(k.x+k.w/2,k.z+.006,k.y+k.h/2),rt.renderOrder=2,rt.userData={level:M.id,roomLabel:!0,room:h.id,name:re,surface:k,worldWidth:j,worldHeight:ye,fontSize:at.fontSize/Ue,lines:at.lines},rt.userData.duplicate=R.some(lt=>lt.userData.level===M.id&&lt.position.distanceTo(rt.position)<.01),E.add(rt),R.push(rt)};for(let h=0;h<e.levels.length;h++){let M=e.levels[h],E=new ln,k=V(M);E.userData={id:M.id,rank:h-Q,z:M.z},f.set(M.id,E),c.add(E);let re=new Map;for(let se of[...M.boxes,...e.levels.flatMap(j=>j.id===M.id?[]:j.boxes.filter(ye=>["stair","landing"].includes(ye.kind)&&Ef(e,M,ye)).map(ye=>({...ye,contextOnly:!0})))]){let j=`${se.color}:${se.kind}:${!!se.contextOnly}`;re.has(j)||re.set(j,[]),re.get(j).push(se)}for(let se of re.values()){let j=new tr(_,U(se[0].color,se[0].kind==="window"),se.length);if(j.frustumCulled=!1,j.userData={boxes:se,level:M.id,faded:new Set},E.add(j),S.push(j),v.push(j),se[0].kind==="wall"){let ye=new tr(_,U(se[0].color,!0),se.length);ye.frustumCulled=!1,ye.renderOrder=1,ye.userData={boxes:se,level:M.id,primary:j,xray:!0},j.userData.fadeMesh=ye,E.add(ye),S.push(ye)}}for(let se of[...M.polygons||[],...e.levels.flatMap(j=>j.id===M.id?[]:(j.polygons||[]).filter(ye=>Ef(e,M,ye)).map(ye=>({...ye,contextOnly:!0})))]){let j=Ao(se),ye=new Ae(j,U(se.color,se.kind==="window"));ye.position.y=se.z,ye.userData={level:M.id,stair:se.stair,sourceFloor:se.sourceFloor,door:se.door,contextOnly:!!se.contextOnly,room:se.room,kind:se.kind,shape:se},E.add(ye),C.push(ye)}let oe=new po(new dn(new T(k.minX,M.z+.04,k.minY),new T(k.maxX,M.z+.07,k.maxY)),8176895);oe.visible=!1,oe.material.depthTest=!0,oe.material.transparent=!0,oe.material.opacity=.95,oe.userData.floorHighlight=M.id,E.add(oe),D.push(oe);let J=document.createElement("canvas");J.width=640,J.height=96;let X=J.getContext("2d");if(X){X.fillStyle="#202936",X.fillRect(0,0,640,96),X.strokeStyle="#465367",X.strokeRect(1,1,638,94),X.fillStyle="#e7effc",X.font="500 34px system-ui",X.fillText(`${M.id} \xB7 ${M.z>0?"+":""}${M.z.toFixed(2)} m`,18,38),X.fillStyle="#c9d4e4",X.font="30px system-ui",X.fillText(String(M.name).slice(0,40),18,77,604);let se=new hs(J);se.colorSpace=an;let j=new Zr(new er({map:se,depthTest:!0,depthWrite:!1}));j.position.set(N.minX-F*.65-1,M.z+.2,(k.minY+k.maxY)/2),j.scale.set(F,F*96/640,1),j.userData={level:M.id,floorLabel:!0,labelWidth:230,labelRatio:96/640},E.add(j),g.push(j);let ye=new Xt(new xt().setFromPoints([new T(j.position.x+F/2,M.z+.2,j.position.z),new T(k.minX,M.z+.07,j.position.z)]),new _n({color:8176895,depthTest:!0,transparent:!0,opacity:.9}));ye.visible=!1,ye.userData.floorLeader=M.id,E.add(ye),D.push(ye)}for(let se of M.rooms||[])W(se,M,E);for(let se of M.annotations||[]){let j=String(se.text||""),ye=se.fontSize||.45;if(!j)continue;let Ue=Math.min(30,Math.max(ye,j.length*ye*.58)),Xe=ye*1.3,He=document.createElement("canvas");He.width=Math.ceil(Ue*64),He.height=Math.ceil(Xe*64);let at=He.getContext("2d");if(!at)continue;at.font=`${ye*64}px system-ui,Segoe UI,sans-serif`,at.fillStyle="#53686d",at.textAlign="center",at.textBaseline="middle",at.fillText(j,He.width/2,He.height/2,He.width);let ut=new hs(He);ut.colorSpace=an;let rt=new Ae(new Dn(Ue,Xe),new jt({map:ut,transparent:!0,alphaTest:.06,depthTest:!0,depthWrite:!1})),lt=M.rooms.find(It=>It.id===se.sourceRoom)||M.rooms.find(It=>se.x>=It.x&&se.x<=It.x+It.w&&se.y>=It.y&&se.y<=It.y+It.h);rt.rotation.x=-Math.PI/2,rt.position.set(se.x,(lt?.z??M.z)+.008,se.y),rt.renderOrder=2,rt.userData={level:M.id,annotationLabel:!0,annotation:se.id,name:j},E.add(rt),R.push(rt)}}let z=Math.max(N.maxX-N.minX,N.maxY-N.minY,15)*1.35,he=new fo(z,Math.min(100,Math.ceil(z)),6781842,3160648);he.position.set(w,$,b),he.userData.groundDatum=$,c.add(he),he.renderOrder=-10;for(let h of Array.isArray(he.material)?he.material:[he.material])h.transparent=!1,h.opacity=1,h.depthWrite=!1;let xe=0,ae=!1,Te=!0,Ve=!1,nt=!0,Qe=!0,ee=1.15,de=!0,De=!1,Ze=!0,ke=null,Re=null,gt=[],L="",fe=null,me=null,ce=!1,ge="",Le=0,pe=!1,Se=f.has(t.activeFloor)?t.activeFloor:q?.id||e.levels[Q]?.id,je=f.get(Se)?.userData.z||0,ze=h=>{let M=f.get(h);return M?M.userData.z+M.userData.rank*xe:je},I=window.matchMedia?.("(prefers-reduced-motion: reduce)"),y=new Set,Y=new Gn,te=new Ee,_e=()=>[...f].filter(([,h])=>h.visible).map(([h])=>h),P=new Set((t.editableFloors||[]).filter(h=>f.has(h))),B=(h="navigation")=>t.onVisibilityChanged?.(_e(),Re,h),H=null,Ie=null,it=null,bt=null,ue=null,Nt=null;r=window.KERN_DRAG_AXES?.register(()=>ue&&(!ue.edge||ue.edge==="elevate"||ue.edge.startsWith("route-"))?ue:null,()=>Cn(),h=>({space:"3d",origin:h.feedbackOrigin,supported:h.edge==="elevate"||h.edge?.startsWith("route-height")?["y"]:["x","z"]}));let wt=new ln;c.add(wt),s=yf({scene:c,camera:l,canvas:o.domElement,container:i,manager:window.KERN_DRAG_AXES,owns:h=>h===ue||n?.ownsGesture(h)});let yt=document.createElement("div");yt.style.cssText="position:absolute;left:18px;bottom:18px;padding:8px 12px;background:#172b37;color:#e7b16b;pointer-events:none;display:none",i.append(yt);let Nn=new jt({color:15184235,transparent:!0,opacity:.65,depthTest:!1}),ws=new fs({color:15185774,dashSize:.18,gapSize:.12,depthTest:!1}),yr=null,Yn=document.createElement("div");Yn.dataset.selectionDimensions="true",Yn.style.cssText="position:absolute;pointer-events:none;display:none;padding:4px 7px;border-radius:4px;background:#172b37dd;color:#e7b76e;font:13px system-ui",i.append(Yn);let Ro=new jt({color:11184810,transparent:!0,opacity:.1,depthTest:!1,depthWrite:!1,side:cn}),Ts=new _n({color:5493465,depthTest:!1}),A=new jt({color:5941759,depthTest:!1}),et=null,ot=null,st=0,Et=h=>{if(n?.busy()||window.KERN_MAX_PASSAGE_UI?.altConnectIntent(h)||kt||!h.altKey||ue||$e||![0,1,2].includes(h.button)||h.button===0&&bt&&ct==="select"&&(qe(h,bt),Y.intersectObjects(wt.children,!1).some(k=>["nw","ne","se","sw"].includes(k.object.userData.edge))))return;if(et=h.pointerId,fe=null,y.clear(),kn(),Be(),st=performance.now()+500,u.mouseButtons.LEFT=Tn.ROTATE,u.mouseButtons.RIGHT=Tn.PAN,o.domElement.style.cursor=h.button===2?"ew-resize":"grabbing",h.__viewNavigation=!0,h.preventDefault(),h.button!==2){u.enabled=!0;return}Ne(l.position.clone(),u.target.clone(),!1),Rn(h);let M=l.getWorldDirection(new T),E=it?.point.clone()||Y.ray.intersectPlane(new $t().setFromNormalAndCoplanarPoint(M,u.target),new T)||u.target.clone();ot={x:h.clientX,anchor:E,position:l.position.clone(),target:u.target.clone(),distance:l.position.distanceTo(u.target)},u.enabled=!1,o.domElement.setPointerCapture(h.pointerId),h.stopImmediatePropagation()},Pt=h=>{if(et!==h.pointerId||!ot)return;h.__viewNavigation=!0,h.preventDefault(),h.stopImmediatePropagation();let M=ot,E=oi.clamp(M.distance*Math.exp(-(h.clientX-M.x)*.01),u.minDistance,u.maxDistance)/M.distance;Ne(M.position.clone().sub(M.anchor).multiplyScalar(E).add(M.anchor),M.target.clone().sub(M.anchor).multiplyScalar(E).add(M.anchor),!1),Mr()},Ut=h=>{if(et!==h.pointerId)return;let M=!!ot;h.__viewNavigation=!0,et=null,ot=null,st=performance.now()+400,u.mouseButtons.LEFT=null,u.mouseButtons.RIGHT=Tn.PAN,u.enabled=!kt,window.KERN_TRANSFORM?.syncCursor(),o.domElement.style.cursor="",M&&(h.preventDefault(),h.stopImmediatePropagation(),o.domElement.hasPointerCapture(h.pointerId)&&o.domElement.releasePointerCapture(h.pointerId))};o.domElement.addEventListener("pointerdown",Et,!0),o.domElement.addEventListener("pointermove",Pt,!0),o.domElement.addEventListener("pointerup",Ut,!0),o.domElement.addEventListener("pointercancel",Ut,!0),o.domElement.addEventListener("lostpointercapture",Ut,!0);let ct="select",$e=null,tt=new ln;tt.userData.authorPreview=!0,c.add(tt);let En=h=>{if(et===h.pointerId||h.__viewNavigation||kt||ct==="select"||h.button!==0)return;if(h.preventDefault(),h.stopImmediatePropagation(),ct==="bridge"){let J=Di(h);J&&window.KERN_BRIDGE_UI?.click(J),Tt(),yt.style.display="none";return}if(["door","connect","disconnect"].includes(ct)){let J=Ht(h);if(!J)return;_t(J.floor,{preserveEditing:!0}),$e={connection:!0,pointerId:h.pointerId,floor:J.floor,begin:window.KERN_CONNECTION_3D.begin(ct,J),last:J,clientX:h.clientX,clientY:h.clientY},u.enabled=!1,o.domElement.setPointerCapture(h.pointerId);return}if(!window.KERN_AUTHORING_3D||(Rn(h),it?.floor&&!(ct==="stair-route"&&window.KERN_ROUTE_UI?.getDraft().length)&&_t(it.floor,{preserveEditing:!0}),!Re))return;let M=e.levels.find(J=>J.id===(it?.floor||Re)),E=M.rooms.find(J=>J.id===it?.room)||(bt?.isFloor?null:bt),k=(E?.z??M.z)+f.get(M.id).position.y,re=qn(h,k);if(!re)return;if(ct==="stair-route"){window.KERN_ROUTE_UI?.addPoint(re,h,E?.id,M.id);return}let oe=window.KERN_AUTHORING_3D.begin(ct,it?.floor||Re,re,E?.id,window.KERN_AUTHORING_3D.width());if(oe.error){Qt(oe);return}$e={pointerId:h.pointerId,z:k,begin:oe,floor:Re},u.enabled=!1,o.domElement.setPointerCapture(h.pointerId)},rn=h=>{if($e?.connection){if(h.pointerId!==$e.pointerId)return;h.preventDefault(),h.stopImmediatePropagation(),$e.last=Ht(h,$e.floor)||$e.last,$e.moved=Math.hypot(h.clientX-$e.clientX,h.clientY-$e.clientY)>5,Mn(window.KERN_CONNECTION_3D.preview(ct,$e.last,$e.moved?$e.begin.hit:$e.begin.pending));return}if(!$e){if(!kt&&et===null&&ct==="bridge"){let E=Di(h),k=E&&window.KERN_BRIDGE_UI?.preview(E);k?Qt(k):(Tt(),yt.style.display="none");return}if(!kt&&et===null&&["door","connect","disconnect"].includes(ct)){let E=Ht(h);E&&Mn(window.KERN_CONNECTION_3D.preview(ct,E));return}if(!kt&&et===null&&Re&&["edge-steps","stair-route"].includes(ct)){Rn(h);let E=e.levels.find(J=>J.id===(it?.floor||Re)),k=E.rooms.find(J=>J.id===it?.room),re=(k?.z??E.z)+f.get(E.id).position.y,oe=qn(h,re);if(Tt(),!oe)return;if(ct==="edge-steps"){let J=window.KERN_AUTHORING_3D.begin("edge-steps",Re,oe,k?.id,window.KERN_AUTHORING_3D.width());if(!J.error){let X=new Xt(new xt().setFromPoints([J.edge.a,J.edge.b].map(se=>new T(se[0],re+.1,se[1]))),Ts);X.renderOrder=18,tt.add(X)}}else{let J=window.KERN_ROUTE_UI?.preview(oe,h,k?.id,E.id);if(J){J.detail&&Qt(J);let X=window.snapSize?.()||.25,se=new Ae(new Dn(X,X),Ro);se.rotation.x=-Math.PI/2,se.position.set(J.point[0],re+.025,J.point[1]),se.renderOrder=17,tt.add(se);let j=new Ae(new Bn(.07,10,8),A);j.position.set(J.point[0],re+.1,J.point[1]),j.renderOrder=19,tt.add(j)}}}return}if(h.pointerId!==$e.pointerId)return;if(h.preventDefault(),h.stopImmediatePropagation(),$e.floor!==Re){dt();return}let M=qn(h,$e.z);M&&($e.next=window.KERN_AUTHORING_3D.candidate($e.begin,M,h.ctrlKey),Qt($e.next))},hn=h=>{if(!$e||h.pointerId!==$e.pointerId)return;if(h.preventDefault(),h.stopImmediatePropagation(),$e.connection){let E=$e;$e=null,Tt(),yt.style.display="none",u.enabled=!0,o.domElement.hasPointerCapture(h.pointerId)&&o.domElement.releasePointerCapture(h.pointerId),window.KERN_CONNECTION_3D.finish(E.begin,E.last,E.moved);return}let M=$e.next;dt(),M&&!M.error&&(dt(!0),window.KERN_AUTHORING_3D.finish(M))};o.domElement.addEventListener("pointerdown",En,!0),o.domElement.addEventListener("pointermove",rn,!0),o.domElement.addEventListener("pointerup",hn,!0);let As=h=>{!n?.busy()&&(!$e||$e.pointerId===h.pointerId)&&dt(!0)};o.domElement.addEventListener("pointercancel",As,!0);let ai=h=>{$e?.pointerId===h.pointerId&&dt()};o.domElement.addEventListener("lostpointercapture",ai,!0);let Ih=h=>{et===h.pointerId||h.__viewNavigation||n?.down(h)&&Ne(l.position.clone(),u.target.clone(),!1)},Dh=h=>n?.move(h),Lh=h=>n?.up(h),Co=h=>{(n?.cancel(h.pointerId)||n?.dragging())&&(h.preventDefault(),h.stopImmediatePropagation())};o.domElement.addEventListener("pointerdown",Ih,!0),o.domElement.addEventListener("pointermove",Dh,!0),o.domElement.addEventListener("pointerup",Lh,!0),o.domElement.addEventListener("pointercancel",Co,!0),o.domElement.addEventListener("lostpointercapture",Co,!0);let Nh=h=>{if(ue){h.preventDefault(),h.stopImmediatePropagation();return}if(et===h.pointerId||h.__viewNavigation||kt||h.button!==0||!bt)return;let M=qe(h,bt),E=Y.intersectObjects(wt.children,!1).find(re=>re.object.userData.edge);if(!E||(Number.isFinite(E.object.userData.routeZ)&&(M=qe(h,{...bt,z:E.object.userData.routeZ+(E.object.userData.displayOffset??f.get(bt.floor).position.y)-f.get(bt.floor).position.y})||E.point.clone()),M||(M=E.point.clone()),Rn(h),E.object.userData.edge?.startsWith("route-")&&window.KERN_ROUTE_UI?.selectPoint(Number(E.object.userData.edge.split("-")[2])),window.KERN_ROTATE?.active()&&(!E||!window.KERN_ROTATE.eligibleRoom(bt))))return;let k=null;if(E?.object.userData.edge?.startsWith("rotate-")){let re=Number(E.object.userData.edge.slice(7));if(k=window.KERN_ROTATE.pivotFor(bt),!k||k.index===re){window.KERN_ROTATE.choosePivot(bt,"rooms",re),Ye(bt),h.preventDefault(),h.stopImmediatePropagation();return}}ue={feedbackOrigin:E.object.getWorldPosition(new T),rotationPivot:k,start:M.clone(),original:JSON.parse(JSON.stringify(bt)),next:JSON.parse(JSON.stringify(bt)),routeZ:E?.object.userData.routeZ,planeZ:Number.isFinite(E?.object.userData.routeZ)?E.object.userData.routeZ+(E.object.userData.displayOffset??f.get(bt.floor).position.y)-f.get(bt.floor).position.y:bt.z,edge:E?.object.userData.edge==="move"?null:E?.object.userData.edge,clientY:h.clientY,baseHeight:window.KERN_ELEVATION_UI?.handleZ(bt.floor,bt.id)??bt.z,baseGroupY:f.get(bt.floor).position.y,pointerId:h.pointerId},bt.routeStair&&ue.edge&&/^[nesw]{1,2}$/.test(ue.edge)&&(ue.original=window.KERN_ROUTE_STAIRS.editFrame(bt),ue.next=JSON.parse(JSON.stringify(ue.original))),window.KERN_DRAG_AXES?.begin(ue),u.enabled=!1,h.preventDefault(),h.stopImmediatePropagation(),o.domElement.setPointerCapture(h.pointerId)},Uh=h=>{if(!ue||ue.pointerId!==h.pointerId)return;let M=qe(h,{...ue.original,z:ue.planeZ??ue.original.z})||(ue.edge==="elevate"||ue.edge?.startsWith("route-height")?ue.start:null);if(!M)return;if(ue.edge?.startsWith("route-landing-")){let X=ue.original,se=JSON.parse(JSON.stringify(X)),j=ue.edge.split("-"),ye=Number(j[2]),Ue=Number(j[3]),Xe=se.routeStair.nodes[ye].landing[Ue],He=window.KERN_ROUTE_STAIRS.point(X,Xe),at=h.ctrlKey?0:window.snapSize?.()??.25,ut=He[0]+M.x-ue.start.x,rt=He[1]+M.z-ue.start.z,lt=window.KERN_DRAG_AXES?.plan(ue,{x:(at?Math.round(ut/at)*at:ut)-He[0],y:(at?Math.round(rt/at)*at:rt)-He[1]})||{x:ut-He[0],y:rt-He[1]};Object.assign(Xe,window.KERN_ROUTE_STAIRS.local(X,[He[0]+lt.x,He[1]+lt.y])),window.KERN_ROUTE_STAIRS.simplePolygon(se.routeStair.nodes[ye].landing.map(Gt=>window.KERN_ROUTE_STAIRS.point(se,Gt)))&&(ue.next=se,Ye(se));let It=window.KERN_ROUTE_STAIRS.point(ue.next,ue.next.routeStair.nodes[ye].landing[Ue]);window.KERN_DRAG_AXES?.acceptPlan(ue,{x:It[0]-He[0],y:It[1]-He[1]}),h.preventDefault(),h.stopImmediatePropagation();return}if(ue.edge?.startsWith("route-")){let X=ue.original,se=JSON.parse(JSON.stringify(X)),j=se.routeStair,ye=Number(ue.edge.split("-").at(-1)),Ue=j.nodes[ye];if(ue.edge.startsWith("route-height")){let He=2*l.position.distanceTo(new T(X.x+X.w/2,X.z+ue.baseGroupY,X.y+X.h/2))*Math.tan(l.fov*Math.PI/360)/Math.max(1,o.domElement.getBoundingClientRect().height),at=ue.routeZ+(ue.clientY-h.clientY)*He,ut=h.ctrlKey?at:Math.round(at*4)/4,rt=window.KERN_DRAG_AXES?.apply(ue,{y:ut-ue.routeZ}),lt=rt?ue.routeZ+rt.y:ut;Math.abs(lt-ue.routeZ)>1e-9&&window.KERN_ROUTE_STAIRS.setHeight(se,ye,lt,window.kernPlanner?.getPlan())}else{let He=window.KERN_ROUTE_STAIRS.point(X,Ue),at=h.ctrlKey?0:window.snapSize?.()??.25,ut=He[0]+M.x-ue.start.x,rt=He[1]+M.z-ue.start.z,lt=window.KERN_ROUTE_STAIRS.snapNode(se,ye,[ut,rt],at,h.ctrlKey,h.shiftKey),It=window.KERN_DRAG_AXES?.plan(ue,{x:lt[0]-He[0],y:lt[1]-He[1]});It&&(lt[0]=He[0]+It.x,lt[1]=He[1]+It.y),Math.hypot(lt[0]-He[0],lt[1]-He[1])>1e-9&&(window.KERN_ROUTE_STAIRS.moveNode(se,ye,lt,window.kernPlanner?.getPlan()),window.KERN_ROUTE_UI?.attachEndpoint(se,ye,lt))}ue.next=se,Ye(se);let Xe=window.kernPlanner?.getPlan();if(ue.edge.startsWith("route-height"))window.KERN_DRAG_AXES?.accept(ue,{y:window.KERN_ROUTE_STAIRS.elevations(se,Xe)[ye]-ue.routeZ});else{let He=window.KERN_ROUTE_STAIRS.point(X,X.routeStair.nodes[ye]),at=window.KERN_ROUTE_STAIRS.point(se,se.routeStair.nodes[ye]);window.KERN_DRAG_AXES?.acceptPlan(ue,{x:at[0]-He[0],y:at[1]-He[1]})}if(Xe){let He=Xe.floors[X.floor];if(He?.rooms.some(at=>at.id===X.id)){let at={...Xe,floors:{...Xe.floors,[X.floor]:{...He,rooms:He.rooms.map(rt=>rt.id===X.id?se:rt)}}},ut=window.KERN_ROUTE_STAIRS.build(at,X.floor,X.id);Qt({detail:ut,fid:X.floor,summary:ut.warnings[0]?.text||"Editable stair route"})}}h.preventDefault(),h.stopImmediatePropagation();return}if(ue.edge==="elevate"){let X=ue.original,se=2*l.position.distanceTo(new T(X.x+X.w/2,X.z+ue.baseGroupY,X.y+X.h/2))*Math.tan(l.fov*Math.PI/360)/Math.max(1,o.domElement.getBoundingClientRect().height),j=ue.baseHeight+(ue.clientY-h.clientY)*se,ye=h.ctrlKey?0:.25,Ue=Math.max(-150,Math.min(150,ye?Math.round(j/ye)*ye:j)),Xe=window.KERN_DRAG_AXES?.apply(ue,{y:Ue-ue.baseHeight}),He=Xe?ue.baseHeight+Xe.y:Ue;if(ue.next={...X,z:He,...Math.abs(He-ue.baseHeight)>1e-9?{__elevation:!0}:{}},yt.style.display="block",yt.style.top="auto",yt.style.bottom="18px",yt.style.left="18px",yt.textContent=(X.isFloor?"Floor":"Surface")+" "+He.toFixed(2)+" m \xB7 "+(h.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"),f.get(X.floor).position.y=ue.baseGroupY,Ye(ue.next),X.isFloor)f.get(X.floor).position.y=ue.baseGroupY+He-X.z;else{let Er=window.KERN_ELEVATION_UI?.preview(X.floor,X.id,He),Kn=Er&&window.KERN_ELEVATIONS?.build(Er,X.floor,X.id),Rf=Kn?vf(Kn):[{x:X.x,y:X.y,w:X.w,h:X.h,z:He-.18,height:.18}];for(let pn of Rf){let Qi,es;if(pn.polygon)Qi=Ao(pn),es=new Ae(Qi,Nn),es.position.y=pn.z+ue.baseGroupY;else if(!Kn&&X.shape){let Cf=new Ai(window.KERN_SHAPES.points(X).map(Qh=>new Ee(Qh[0],-Qh[1])));Qi=new or(Cf,{depth:pn.height,bevelEnabled:!1,steps:1}),Qi.rotateX(-Math.PI/2),es=new Ae(Qi,Nn),es.position.y=pn.z+ue.baseGroupY}else Qi=new Ct(pn.w,pn.height,pn.h),es=new Ae(Qi,Nn),es.position.set(pn.x+pn.w/2,pn.z+pn.height/2+ue.baseGroupY,pn.y+pn.h/2);wt.add(es)}Kn&&(yt.textContent=He.toFixed(2)+" m \xB7 "+(Kn.ramp?"Ramp \xB7 "+Math.max(...Kn.flights.map(pn=>pn.gradePercent||0)).toFixed(1)+"% grade":Kn.segments[0].risers+" rises \xD7 "+(Kn.metrics.riserMax*100).toFixed(1)+" cm")+" \xB7 "+(h.ctrlKey?"Free":"0.25 m snap \xB7 Ctrl: free"))}let at=X.x-.25,ut=X.y+X.h+.25,rt=ue.baseHeight+ue.baseGroupY,lt=He+ue.baseGroupY,It=[new T(at,rt,ut),new T(at,lt,ut)],Gt=new Xt(new xt().setFromPoints(It),ws);Gt.computeLineDistances(),Gt.renderOrder=16,wt.add(Gt);for(let Er of[rt,lt]){let Kn=new Xt(new xt().setFromPoints([new T(at-.18,Er,ut),new T(at+.18,Er,ut)]),A);Kn.renderOrder=16,wt.add(Kn)}let Zn=new T(at,(rt+lt)/2,ut).project(l),Io=o.domElement.getBoundingClientRect(),jh=He-ue.baseHeight;yt.style.bottom="auto",yt.style.left=Math.min(Math.max(8,(Zn.x+1)*Io.width/2+12),Math.max(8,Io.width-260))+"px",yt.style.top=Math.min(Math.max(8,(1-Zn.y)*Io.height/2),Math.max(8,Io.height-60))+"px",yt.textContent=(jh>0?"+":"")+jh.toFixed(2)+" m \xB7 "+yt.textContent,h.preventDefault(),h.stopImmediatePropagation();return}let E=ue.original,k=h.ctrlKey?0:window.snapSize?.()??.5,re=k?Math.round((M.x-ue.start.x)/k)*k:M.x-ue.start.x,oe=k?Math.round((M.z-ue.start.z)/k)*k:M.z-ue.start.z,J={...E};if(ue.edge?.startsWith("rotate-")){let X=ue.rotationPivot||{x:E.x+E.w/2,y:E.y+E.h/2},se=Math.atan2(ue.start.z-X.y,ue.start.x-X.x),j=window.KERN_ROTATE.delta(E,(Math.atan2(M.z-X.y,M.x-X.x)-se)*180/Math.PI,h.shiftKey);window.KERN_SHAPES.rotate(J,j,X),ue.rotationFeedback={center:X,start:se,degrees:j,cursor:M.clone()}}else if(ue.edge)ue.edge.includes("e")&&(J.w=Math.max(1,E.w+re)),ue.edge.includes("s")&&(J.h=Math.max(1,E.h+oe)),ue.edge.includes("w")&&(J.x=Math.min(E.x+E.w-1,E.x+re),J.w=E.x+E.w-J.x),ue.edge.includes("n")&&(J.y=Math.min(E.y+E.h-1,E.y+oe),J.h=E.y+E.h-J.y);else{J.x+=M.x-ue.start.x,J.y+=M.z-ue.start.z;let X=18*l.position.distanceTo(M)*Math.tan(l.fov*Math.PI/360)/Math.max(1,o.domElement.getBoundingClientRect().height),se=h.ctrlKey&&h.shiftKey&&!h.altKey&&window.KERN_ROOM_SNAP?.translation(J,e.levels.find(j=>j.id===E.floor).rooms,new Set([E.id]),X);ue.snap=se||null,se?(J.x+=se.dx,J.y+=se.dy):h.ctrlKey||(J.x=E.x+re,J.y=E.y+oe)}if(ue.edge&&!ue.edge.startsWith("rotate-")&&(h.shiftKey&&!h.ctrlKey||h.altKey)&&window.KERN_TRANSFORM&&Object.assign(J,window.KERN_TRANSFORM.resize(E,ue.edge,re,oe,{...h,shiftKey:h.shiftKey&&!h.ctrlKey,altKey:h.altKey})),ue.edge&&!ue.edge.startsWith("rotate-")&&h.shiftKey&&h.ctrlKey&&!h.altKey){let X=ue.edge,se={x:E.x+(X.includes("e")?E.w:0)+M.x-ue.start.x,y:E.y+(X.includes("s")?E.h:0)+M.z-ue.start.z},j=18*l.position.distanceTo(M)*Math.tan(l.fov*Math.PI/360)/Math.max(1,o.domElement.getBoundingClientRect().height),ye=window.KERN_ROOM_SNAP?.point(se,e.levels.find(Ue=>Ue.id===E.floor).rooms,new Set([E.id]),j);ue.snap=ye||null,ye&&(X.includes("e")&&(J.w=Math.max(1,ye.x-E.x)),X.includes("s")&&(J.h=Math.max(1,ye.y-E.y)),X.includes("w")&&(J.x=Math.min(ye.x,E.x+E.w-1),J.w=E.x+E.w-J.x),X.includes("n")&&(J.y=Math.min(ye.y,E.y+E.h-1),J.h=E.y+E.h-J.y))}if(E.shape&&ue.edge&&!ue.edge.startsWith("rotate-")&&window.KERN_TRANSFORM?.orientedResize&&Object.assign(J,window.KERN_TRANSFORM.orientedResize(E,ue.edge,M.x-ue.start.x,M.z-ue.start.z,h)),!ue.edge){let X=window.KERN_DRAG_AXES?.plan(ue,{x:J.x-E.x,y:J.y-E.y});X&&(J.x=E.x+X.x,J.y=E.y+X.y)}if(ue.next=J,Ye(J),ue.rotationFeedback){let X=ue.rotationFeedback,se=X.center,j=Math.hypot(X.cursor.x-se.x,X.cursor.z-se.y),ye=Math.min(j,6)*.8,Ue=X.start+X.degrees*Math.PI/180,Xe=J.z+ue.baseGroupY+.12,He=[];for(let rt=0,lt=Math.max(2,Math.min(160,Math.ceil(Math.abs(X.degrees)/5)));rt<=lt;rt++){let It=X.start+(Ue-X.start)*rt/lt;He.push(new T(se.x+Math.cos(It)*ye,Xe,se.y+Math.sin(It)*ye))}let at=[new T(se.x+Math.cos(X.start)*j,Xe,se.y+Math.sin(X.start)*j),new T(se.x,Xe,se.y),new T(se.x+Math.cos(Ue)*j,Xe,se.y+Math.sin(Ue)*j)];for(let rt of[He,at]){let lt=new Xt(new xt().setFromPoints(rt),ws);lt.computeLineDistances(),lt.renderOrder=15,wt.add(lt)}let ut=o.domElement.getBoundingClientRect();yt.style.display="block",yt.style.bottom="auto",yt.style.left=Math.min(Math.max(8,h.clientX-ut.left+16),Math.max(8,ut.width-130))+"px",yt.style.top=Math.max(8,h.clientY-ut.top-38)+"px",yt.textContent=(X.degrees>0?"+":"")+X.degrees.toFixed(1)+"\xB0"}if(ue.snap)for(let X of ue.snap.guides?.length?ue.snap.guides:[ue.snap]){let se=J.z+f.get(J.floor).position.y+.1,j=X.edge?[X.edge.a,X.edge.b]:[[X.x-.2,X.y],[X.x+.2,X.y],[X.x,X.y],[X.x,X.y-.2],[X.x,X.y+.2]],ye=new Xt(new xt().setFromPoints(j.map(Ue=>new T(Ue[0],se,Ue[1]))),Ts);ye.renderOrder=12,wt.add(ye)}h.preventDefault(),h.stopImmediatePropagation()},Fh=h=>{if(!ue||ue.pointerId!==h.pointerId)return;let M=ue;ue=null,window.KERN_DRAG_AXES?.refresh?.(),Tt(),f.get(M.original.floor).position.y=M.baseGroupY,yt.style.display="none",u.enabled=!0,h.preventDefault(),h.stopImmediatePropagation(),o.domElement.hasPointerCapture(h.pointerId)&&o.domElement.releasePointerCapture(h.pointerId),M.next.__elevation||["x","y","w","h"].some(E=>M.next[E]!==M.original[E])||JSON.stringify(M.next.shape)!==JSON.stringify(M.original.shape)||JSON.stringify(M.next.routeStair)!==JSON.stringify(M.original.routeStair)?t.onRoomEdit?.(M.original.floor,M.original.id,M.next):M.edge?.startsWith("rotate-")&&(window.KERN_ROTATE.choosePivot(M.original,"rooms",Number(M.edge.slice(7))),Ye(M.original))},Cn=h=>{if(ue&&h?.pointerId!==void 0&&ue.pointerId!==h.pointerId)return;let M=ue;ue=null,window.KERN_DRAG_AXES?.refresh?.(),Tt(),M&&(f.get(M.original.floor).position.y=M.baseGroupY),yt.style.display="none",u.enabled=!kt,M&&o.domElement.hasPointerCapture?.(M.pointerId)&&o.domElement.releasePointerCapture(M.pointerId),bt&&Ye(bt)};o.domElement.addEventListener("pointerdown",Nh,!0),o.domElement.addEventListener("pointermove",Uh,!0),o.domElement.addEventListener("pointerup",Fh,!0),o.domElement.addEventListener("pointercancel",Cn,!0),o.domElement.addEventListener("lostpointercapture",Cn,!0);let Sn=null,Rs=document.createElement("div");Rs.style.cssText="position:absolute;border:1px solid #79b8ff;background:#79b8ff20;pointer-events:none;display:none;z-index:25",i.append(Rs);let kn=()=>{Sn=null,Rs.style.display="none"},Oh=h=>{kt||et!==null||h.altKey||h.button!==0||ue||ct!=="select"||(Sn={id:h.pointerId,x:h.clientX,y:h.clientY,shift:h.shiftKey,subtract:h.ctrlKey||h.metaKey,previous:Nt?.ids||[]})},Bh=h=>{if(!Sn||Sn.id!==h.pointerId||Math.hypot(h.clientX-Sn.x,h.clientY-Sn.y)<5)return;let M=o.domElement.getBoundingClientRect();Sn.moved=!0,Rs.style.display="block",Object.assign(Rs.style,{left:Math.min(h.clientX,Sn.x)-M.left+"px",top:Math.min(h.clientY,Sn.y)-M.top+"px",width:Math.abs(h.clientX-Sn.x)+"px",height:Math.abs(h.clientY-Sn.y)+"px"})},zh=h=>{if(!Sn||Sn.id!==h.pointerId)return;let M=Sn;if(kn(),!M.moved)return;h.preventDefault(),y.clear(),fe=null;let E=o.domElement.getBoundingClientRect(),k=Math.min(M.x,h.clientX),re=Math.max(M.x,h.clientX),oe=Math.min(M.y,h.clientY),J=Math.max(M.y,h.clientY),X=Re||Se,se=e.levels.find(Ue=>Ue.id===X);if(!se)return;l.updateMatrixWorld(!0);let j=se.rooms.filter(Ue=>{let Xe=(window.KERN_SHAPES?.points(Ue)||[[Ue.x,Ue.y],[Ue.x+Ue.w,Ue.y],[Ue.x+Ue.w,Ue.y+Ue.h],[Ue.x,Ue.y+Ue.h]]).flatMap(ut=>[Ue.z,Ue.z+(Ue.height||0)].map(rt=>new T(ut[0],rt+f.get(X).position.y,ut[1]).project(l))).filter(ut=>ut.z>=-1&&ut.z<=1);if(!Xe.length)return!1;let He=Xe.map(ut=>(ut.x+1)*E.width/2+E.left),at=Xe.map(ut=>(1-ut.y)*E.height/2+E.top);return Math.min(...He)<=re&&Math.max(...He)>=k&&Math.min(...at)<=J&&Math.max(...at)>=oe}).map(Ue=>Ue.id),ye=M.subtract?M.previous.filter(Ue=>!j.includes(Ue)):M.shift?[...new Set([...M.previous,...j])]:j;Re||_t(X,{preserveEditing:!0}),ne(X,ye),t.onRoomsSelect?.(X,ye)};o.domElement.addEventListener("pointerdown",Oh,!0),o.domElement.addEventListener("pointermove",Bh,!0),o.domElement.addEventListener("pointerup",zh,!0),o.domElement.addEventListener("pointercancel",kn,!0),o.domElement.addEventListener("lostpointercapture",kn,!0);let Sf=h=>{kt||et===h.pointerId||h.__viewNavigation||(y.add(h.pointerId),y.size>1?fe=null:fe=h.button===0?{id:h.pointerId,x:h.clientX,y:h.clientY,moved:!1}:null)},bf=h=>{if(!kt){if(fe&&Math.hypot(h.clientX-fe.x,h.clientY-fe.y)>5&&(fe.moved=!0),y.size||h.buttons){o.domElement.title="",we(null);return}we(Rn(h))}},wf=h=>{if(kt||h.__viewNavigation)return;let M=fe&&h.pointerId===fe.id&&!fe.moved&&Math.hypot(h.clientX-fe.x,h.clientY-fe.y)<=5&&y.size===1;if(y.delete(h.pointerId),fe=null,!M)return;let E=Rn(h);if(!E)return;if(h.shiftKey){if(!P.has(E))return;it?.door?t.onDoorSelect?.(E,it.door,{additive:!0}):it?.room&&t.onRoomSelect?.(E,it.room,{additive:!0});return}if(t.onFloorSelect){let re=Re===E&&P.size===1&&P.has(E)&&!it?.floorSurface;t.onFloorSelect(E,{additive:!1}),re&&(it?.door?t.onDoorSelect?.(E,it.door):it?.room&&t.onRoomSelect?.(E,it.room));return}it?.floorSurface||it?.roomLabel&&(Re!==E||!P.has(E))?_t(E):(_t(E,{preserveEditing:!!it?.room||!!it?.door}),it?.door?t.onDoorSelect?.(E,it.door):it?.room&&t.onRoomSelect?.(E,it.room))},Zl=()=>{n?.cancel(),kn(),et=null,ot=null,o.domElement.style.cursor="",u.mouseButtons.LEFT=null,u.mouseButtons.RIGHT=Tn.PAN,dt(!0),Cn(),y.clear(),fe=null,ce=!1,Be(),we(null)};window.addEventListener("blur",Zl);let Tf=a;a=()=>{window.removeEventListener("blur",Zl),Tf()};let Hh={pointerdown:Sf,pointermove:bf,pointerup:wf,pointercancel:h=>{y.delete(h.pointerId),fe=null,we(null)},pointerleave:()=>{y.size||(o.domElement.title="",we(null))},keydown:h=>{if(!window.KERN_PRIMITIVE_UI?.handleKey?.(h)){if(h.key==="Escape"&&Sn){kn(),fe=null,y.clear(),h.preventDefault(),h.stopPropagation();return}if(h.key==="Escape"&&($e||ct!=="select")){h.preventDefault(),h.stopImmediatePropagation(),dt(!0);return}if(h.key==="Escape"&&ue){h.preventDefault(),h.stopImmediatePropagation(),Cn();return}h.key==="Escape"&&Re?(h.preventDefault(),h.stopPropagation(),ft()):Re&&["ArrowUp","ArrowDown"].includes(h.key)&&(h.preventDefault(),h.stopPropagation(),xr(h.key==="ArrowUp"?1:-1))}},contextmenu:h=>{h.preventDefault(),!(kt||h.altKey||performance.now()<st)&&(Rn(h),it&&t.onContext?.({floor:it.floor,room:it.room,x:it.point.x,y:it.point.z,z:e.levels.find(M=>M.id===it.floor)?.rooms.find(M=>M.id===it.room)?.z??e.levels.find(M=>M.id===it.floor)?.z??it.point.y,clientX:h.clientX,clientY:h.clientY}))}};for(let[h,M]of Object.entries(Hh))o.domElement.addEventListener(h,M);let kh=()=>{if(ae)return;let h=Math.max(1,i.clientWidth),M=Math.max(1,i.clientHeight);o.setSize(h,M,!1),l.aspect=h/M,l.updateProjectionMatrix(),s?.update(),L=""},Vh=()=>{Be(),ce=!0},Gh=()=>{ce=!1,Le=performance.now(),pe=De};u.addEventListener("start",Vh),u.addEventListener("end",Gh);let Wh=new ResizeObserver(kh),Xh=h=>{h.preventDefault(),t.onContextLost?.()};o.domElement.addEventListener("webglcontextlost",Xh);let kt=!1,ji=!1,Pn=null,Cs=null,Po=0,Yh=0,qh=!0,Li=new ho(16773074,55,35,Math.PI/7,.65,1.3);Li.visible=!1,c.add(Li),c.add(Li.target);let Ni=new ln,Zh=[...q?.rooms||[],...e.levels.filter(h=>h.id!==q?.id).flatMap(h=>h.rooms.filter(M=>M.groundSurface||M.localSteps&&e.stairs.some(E=>E.localSteps&&E.floorId===h.id&&E.roomId===M.id&&Math.min(...E.stops.map(k=>k.z))<=$+.2&&Math.max(...E.stops.map(k=>k.z))>=$-.2)))],Kh={x:w-(z+50)/2,y:b-(z+50)/2,w:z+50,h:z+50};if(e.shapeAware&&window.KERN_SHAPES){let h=window.KERN_SHAPES,M=h.difference(h.multi(Kh),Zh.filter(E=>E.groundSurface||E.localSteps||!["courtyard","terrace"].includes(E.type)).map(E=>E.routeStair&&e.stairs.find(k=>k.roomId===E.id)?.footprintGeometry||h.multi(E)));for(let E of M){let k=new Ai(E[0].map(oe=>new Ee(oe[0],-oe[1])));for(let oe of E.slice(1))k.holes.push(new Xi(oe.map(J=>new Ee(J[0],-J[1]))));let re=new Ae(new ao(k),U("#535c62"));re.rotation.x=-Math.PI/2,re.position.y=$-.02,Ni.add(re)}}else for(let h of window.BuildingPreviewGeometry.subtractAll(Kh,Zh.filter(M=>M.groundSurface||M.localSteps||!["courtyard","terrace"].includes(M.type)))){let M=new Ae(new Dn(h.w,h.h),U("#535c62"));M.rotation.x=-Math.PI/2,M.position.set(h.x+h.w/2,$-.02,h.y+h.h/2),Ni.add(M)}return Ni.visible=!1,c.add(Ni),n=xf({scene:c,camera:l,renderer:o,controls:u,groups:f,data:e,prismGeometry:Ao,enabled:()=>!kt&&ct==="select",canNavigate:()=>!kt,surfaceHit:h=>(Rn(h,{physicalOnly:!0}),it),onSelect:(h,M,E)=>E&&!P.has(h)?!1:window.KERN_PRIMITIVE_UI?.select(h,M,E),onEditMany:(h,M)=>window.KERN_PRIMITIVE_UI?.editMany(h,M),onEdit:(h,M,E,k,re)=>window.KERN_PRIMITIVE_UI?.edit(h,M,E,k,re)}),a=$h,Wh.observe(i),kh(),le(),t.viewState?Jl(t.viewState):Me(),o.setAnimationLoop(()=>{if(!ae){if(n?.sync(),kt){Jh(),Pn?.fly&&Fe(),Ce(),o.render(c,l);return}ht()||u.update(),Mr(),n?.updateBounds(),s?.update(),Fe(),Ce(),o.render(c,l)}}),{primitivePlacement:(h,M,E)=>n?.placement(h,M,E),previewWall:(h,M)=>n?.previewWall(h,M),setPrimitiveMode:h=>n?.setMode(h),cancelPrimitive:()=>n?.cancel(),primitiveDragging:()=>n?.dragging(),cameraPose(){let h=l.getWorldDirection(new T);return{x:l.position.x,y:l.position.z,z:l.position.y,yaw:Math.atan2(-h.x,-h.z),pitch:Math.asin(Math.max(-1,Math.min(1,h.y))),fov:l.fov,roll:new fn().setFromQuaternion(l.quaternion,"YXZ").z}},setAuthoringMode:vn,cancelAuthoring:()=>dt(!0),cancelEdit:Cn,getOrbitViewState(){return kt&&Cs?JSON.parse(JSON.stringify(Cs)):Kl()},applyFloorState:ie,selectRoom:G,selectRooms:ne,selectObjects:K,selectFloors:Pe,setEditableFloors:ve,activateFloor:_t,chooseFloor:Xn,frameSelection:We,setWalk:Af,fit:Me,dispose:$h,showAll:ft,isolate:Lt,hoverFloor:we,adjacentFloor:xr,getViewState:Kl,getZoom:Ke,restoreViewState:Jl,syncActiveFloor:Hn,zoomBy(h){if(!Number.isFinite(h)||h<=0)return;let M=l.position.clone().sub(u.target),E=oi.clamp(M.length()*h,u.minDistance,u.maxDistance);Ne(u.target.clone().add(M.normalize().multiplyScalar(E)),u.target,!1)},setGrid(h){Ze=!!h,he.visible=Ze},getFocusedFloor(){return Re},setFloor(h,M){if(t.onFloorVisibility)return t.onFloorVisibility({id:h,visible:M});let E=f.get(h);if(E){if(Be(),E.visible=!!M,Re===h&&!M&&(Re=_e()[0]||null),!Re&&M&&(Re=h),!M&&bt?.floor===h){let k=bt.isFloor?Nt:null;G(null,null),k&&(Nt=k)}!M&&Nt?.objects&&K(Nt.objects.filter(k=>k.floor!==h)),we(null),le(),Fe(!0),B("visibility")}},setExplode(h){let M=Math.max(0,Math.min(12,Number(h)||0));if(M===xe)return;let E=ze(Se);xe=M,we(null),le(),Re?Je(Re,!!me):(Be(),je+=ze(Se)-E),Fe(!0)},setSlabs(h){nt=!!h,le(),Fe(!0)},setCeilings(h){Ve=!!h,le(),Fe(!0)},setWalls(h){Te=!!h,le(),Fe(!0)},setCutaway(h){Qe=!!h,le(),Fe(!0)},setCutHeight(h){let M=Number(h);Number.isFinite(M)&&(ee=Math.max(.4,Math.min(2.4,M)),le(),Fe(!0))},setLabels(h){de=!!h,le(),Fe(!0)},setXray(h){De=!!h,le(),Fe(!0)},png(){return Fe(!0),o.render(c,l),new Promise((h,M)=>o.domElement.toBlob(E=>E?h(E):M(Error("Could not create this image.")),"image/png"))}}}catch(c){try{a()}catch{}throw c}}window.Building3D={mount:qx,version:"180"};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
