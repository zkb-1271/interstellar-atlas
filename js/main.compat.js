(()=>{var ku=0,Zl=1,Vu=2;var Ch=1,Gu=2,Fn=3,Mn=0,Ce=1,Ve=2;var yn=0,Qn=1,Ee=2,Jl=3,Kl=4,Wu=5,Mi=100,Xu=101,qu=102,jl=103,Ql=104,Yu=200,$u=201,Zu=202,Ju=203,To=204,Ao=205,Ku=206,ju=207,Qu=208,td=209,ed=210,nd=211,id=212,sd=213,rd=214,ad=0,od=1,ld=2,Or=3,cd=4,hd=5,ud=6,dd=7,Ph=0,fd=1,pd=2,ti=0,ul=1,dl=2,fl=3,Ks=4,md=5,pl=6;var Lh=300,cs=301,hs=302,Ro=303,Co=304,ca=306,Bs=1e3,cn=1001,Po=1002,Fe=1003,tc=1004;var Wa=1005;var Be=1006,gd=1007;var Hs=1008;var ei=1009,_d=1010,xd=1011,ml=1012,Ih=1013,Kn=1014,jn=1015,un=1016,Dh=1017,Uh=1018,Ei=1020,vd=1021,hn=1023,yd=1024,Md=1025,wi=1026,us=1027,Sd=1028,Nh=1029,bd=1030,Oh=1031,Fh=1033,Xa=33776,qa=33777,Ya=33778,$a=33779,ec=35840,nc=35841,ic=35842,sc=35843,Bh=36196,rc=37492,ac=37496,oc=37808,lc=37809,cc=37810,hc=37811,uc=37812,dc=37813,fc=37814,pc=37815,mc=37816,gc=37817,_c=37818,xc=37819,vc=37820,yc=37821,Za=36492,Mc=36494,Sc=36495,Ed=36283,bc=36284,Ec=36285,wc=36286;var Fr=2300,Br=2301,Ja=2302,Tc=2400,Ac=2401,Rc=2402;var Hh=3e3,Ti=3001,wd=3200,Td=3201,zh=0,Ad=1,sn="",ie="srgb",kn="srgb-linear",gl="display-p3",ha="display-p3-linear",Hr="linear",Kt="srgb",zr="rec709",kr="p3";var Hi=7680;var Cc=519,Rd=512,Cd=513,Pd=514,kh=515,Ld=516,Id=517,Dd=518,Ud=519,Lo=35044;var Pc="300 es",Io=1035,zn=2e3,Vr=2001,ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ka=Math.PI/180,Do=180/Math.PI;function ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function Nd(i,t){return(i%t+t)%t}function ja(i,t,e){return(1-e)*i+e*t}function Lc(i){return(i&i-1)===0&&i!==0}function Uo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ft=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],_=n[8],g=s[0],p=s[3],u=s[6],v=s[1],x=s[4],S=s[7],C=s[2],T=s[5],A=s[8];return r[0]=o*g+a*v+l*C,r[3]=o*p+a*x+l*T,r[6]=o*u+a*S+l*A,r[1]=c*g+h*v+d*C,r[4]=c*p+h*x+d*T,r[7]=c*u+h*S+d*A,r[2]=f*g+m*v+_*C,r[5]=f*p+m*x+_*T,r[8]=f*u+m*S+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=e*d+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=d*g,t[1]=(s*c-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=f*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qa=new Vt;function Vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=zs("canvas");return i.style.display="block",i}var Ic={};function Os(i){i in Ic||(Ic[i]=!0,console.warn(i))}var Dc=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uc=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),or={[kn]:{transfer:Hr,primaries:zr,toReference:i=>i,fromReference:i=>i},[ie]:{transfer:Kt,primaries:zr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ha]:{transfer:Hr,primaries:kr,toReference:i=>i.applyMatrix3(Uc),fromReference:i=>i.applyMatrix3(Dc)},[gl]:{transfer:Kt,primaries:kr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Uc),fromReference:i=>i.applyMatrix3(Dc).convertLinearToSRGB()}},Fd=new Set([kn,ha]),qt={enabled:!0,_workingColorSpace:kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Fd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=or[t].toReference,s=or[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return or[i].primaries},getTransfer:function(i){return i===sn?Hr:or[i].transfer}};function os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function to(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zi,Gr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=zs("canvas")),zi.width=t.width,zi.height=t.height;let n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(os(e[n]/255)*255):e[n]=os(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,Wr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=ni(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(eo(s[o].image)):r.push(eo(s[o]))}else r=eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hd=0,Je=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=cn,s=cn,r=Be,o=Hs,a=hn,l=ei,c=i.DEFAULT_ANISOTROPY,h=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=ni(),this.name="",this.source=new Wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ti?ie:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bs:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bs:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ie?Ti:Hh}set encoding(t){Os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ti?ie:sn}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Lh;Je.DEFAULT_ANISOTROPY=1;var ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,S=(m+1)/2,C=(u+1)/2,T=(h+f)/4,A=(d+g)/4,I=(_+p)/4;return x>S&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=A/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=I/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-g)/v,this.z=(f-h)/v,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},No=class extends ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ti?ie:sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Wr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends No{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xr=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oo=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==f||c!==m||h!==_){let p=1-a,u=l*f+c*m+h*_+d*g,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let C=Math.sqrt(x),T=Math.atan2(C,u*v);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}let S=a*v;if(l=l*p+f*S,c=c*p+m*S,h=h*p+_*S,d=d*p+g*S,p===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*m-c*f,t[e+1]=l*_+h*f+c*d-a*m,t[e+2]=c*_+h*m+a*f-l*d,t[e+3]=h*_-a*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"YZX":this._x=f*h*d+c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d-f*m*_;break;case"XZY":this._x=f*h*d-c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},no=new R,Nc=new Sn,Ai=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),cr.subVectors(this.max,Rs),ki.subVectors(t.a,Rs),Vi.subVectors(t.b,Rs),Gi.subVectors(t.c,Rs),qn.subVectors(Vi,ki),Yn.subVectors(Gi,Vi),gi.subVectors(ki,Gi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-gi.z,gi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,gi.z,0,-gi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-gi.y,gi.x,0];return!io(e,ki,Vi,Gi,cr)||(e=[1,0,0,0,1,0,0,0,1],!io(e,ki,Vi,Gi,cr))?!1:(hr.crossVectors(qn,Yn),e=[hr.x,hr.y,hr.z],io(e,ki,Vi,Gi,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},In=[new R,new R,new R,new R,new R,new R,new R,new R],an=new R,lr=new Ai,ki=new R,Vi=new R,Gi=new R,qn=new R,Yn=new R,gi=new R,Rs=new R,cr=new R,hr=new R,_i=new R;function io(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_i.fromArray(i,r);let a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zd=new Ai,Cs=new R,so=new R,Ri=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);let e=Cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(so)),this.expandByPoint(Cs.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Dn=new R,ro=new R,ur=new R,$n=new R,ao=new R,dr=new R,oo=new R,ks=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ro.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(ro);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ur),a=$n.dot(this.direction),l=-$n.dot(ur),c=$n.lengthSq(),h=Math.abs(1-o*o),d,f,m,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){let g=1/h;d*=g,f*=g,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ro).addScaledVector(ur,f),m}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);let n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){ao.subVectors(e,t),dr.subVectors(n,t),oo.crossVectors(ao,dr);let o=this.direction.dot(oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);let l=a*this.direction.dot(dr.crossVectors($n,dr));if(l<0)return null;let c=a*this.direction.dot(ao.cross($n));if(c<0||l+c>o)return null;let h=-a*$n.dot(oo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,f,m,_,g,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,m,_,g,p)}set(t,e,n,s,r,o,a,l,c,h,d,f,m,_,g,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,m=o*d,_=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,m=l*d,_=c*h,g=c*d;e[0]=f+g*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,m=l*d,_=c*h,g=c*d;e[0]=f-g*a,e[4]=-o*d,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,m=o*d,_=a*h,g=a*d;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+g,e[1]=l*d,e[5]=g*c+f,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-f*d,e[8]=_*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+_,e[10]=f-g*d}else if(t.order==="XZY"){let f=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+g,e[5]=o*h,e[9]=m*d-_,e[2]=_*d-m,e[6]=a*h,e[10]=g*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kd,t,Vd)}lookAt(t,e,n){let s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Zn.crossVectors(n,$e),Zn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Zn.crossVectors(n,$e)),Zn.normalize(),fr.crossVectors($e,Zn),s[0]=Zn.x,s[4]=fr.x,s[8]=$e.x,s[1]=Zn.y,s[5]=fr.y,s[9]=$e.y,s[2]=Zn.z,s[6]=fr.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],_=n[2],g=n[6],p=n[10],u=n[14],v=n[3],x=n[7],S=n[11],C=n[15],T=s[0],A=s[4],I=s[8],y=s[12],b=s[1],D=s[5],H=s[9],Y=s[13],L=s[2],N=s[6],G=s[10],q=s[14],X=s[3],W=s[7],$=s[11],j=s[15];return r[0]=o*T+a*b+l*L+c*X,r[4]=o*A+a*D+l*N+c*W,r[8]=o*I+a*H+l*G+c*$,r[12]=o*y+a*Y+l*q+c*j,r[1]=h*T+d*b+f*L+m*X,r[5]=h*A+d*D+f*N+m*W,r[9]=h*I+d*H+f*G+m*$,r[13]=h*y+d*Y+f*q+m*j,r[2]=_*T+g*b+p*L+u*X,r[6]=_*A+g*D+p*N+u*W,r[10]=_*I+g*H+p*G+u*$,r[14]=_*y+g*Y+p*q+u*j,r[3]=v*T+x*b+S*L+C*X,r[7]=v*A+x*D+S*N+C*W,r[11]=v*I+x*H+S*G+C*$,r[15]=v*y+x*Y+S*q+C*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],_=t[3],g=t[7],p=t[11],u=t[15];return _*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*m-n*l*m)+g*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],_=t[12],g=t[13],p=t[14],u=t[15],v=d*p*c-g*f*c+g*l*m-a*p*m-d*l*u+a*f*u,x=_*f*c-h*p*c-_*l*m+o*p*m+h*l*u-o*f*u,S=h*g*c-_*d*c+_*a*m-o*g*m-h*a*u+o*d*u,C=_*d*l-h*g*l-_*a*f+o*g*f+h*a*p-o*d*p,T=e*v+n*x+s*S+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=v*A,t[1]=(g*f*r-d*p*r-g*s*m+n*p*m+d*s*u-n*f*u)*A,t[2]=(a*p*r-g*l*r+g*s*c-n*p*c-a*s*u+n*l*u)*A,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*m-n*l*m)*A,t[4]=x*A,t[5]=(h*p*r-_*f*r+_*s*m-e*p*m-h*s*u+e*f*u)*A,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*u-e*l*u)*A,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*m+e*l*m)*A,t[8]=S*A,t[9]=(_*d*r-h*g*r-_*n*m+e*g*m+h*n*u-e*d*u)*A,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*u+e*a*u)*A,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*m-e*a*m)*A,t[12]=C*A,t[13]=(h*g*s-_*d*s+_*n*f-e*g*f-h*n*p+e*d*p)*A,t[14]=(_*a*s-o*g*s-_*n*l+e*g*l+o*n*p-e*a*p)*A,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,_=r*d,g=o*h,p=o*d,u=a*d,v=l*c,x=l*h,S=l*d,C=n.x,T=n.y,A=n.z;return s[0]=(1-(g+u))*C,s[1]=(m+S)*C,s[2]=(_-x)*C,s[3]=0,s[4]=(m-S)*T,s[5]=(1-(f+u))*T,s[6]=(p+v)*T,s[7]=0,s[8]=(_+x)*A,s[9]=(p-v)*A,s[10]=(1-(f+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Wi.set(s[0],s[1],s[2]).length(),o=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);let c=1/r,h=1/o,d=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=zn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,_;if(a===zn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Vr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,m=(n+s)*h,_,g;if(a===zn)_=(o+r)*d,g=-2*d;else if(a===Vr)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Wi=new R,on=new oe,kd=new R(0,0,0),Vd=new R(1,1,1),Zn=new R,fr=new R,$e=new R,Oc=new oe,Fc=new Sn,ds=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ds.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gd=0,Bc=new R,Xi=new Sn,Un=new oe,pr=new R,Ps=new R,Wd=new R,Xd=new Sn,Hc=new R(1,0,0),zc=new R(0,1,0),kc=new R(0,0,1),qd={type:"added"},Yd={type:"removed"},ze=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new ds,n=new Sn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Vt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(Hc,t)}rotateY(t){return this.rotateOnAxis(zc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Bc.copy(t).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hc,t)}translateY(t){return this.translateOnAxis(zc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ps,pr,this.up):Un.lookAt(pr,Ps,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Un),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ze.DEFAULT_UP=new R(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new R,Nn=new R,lo=new R,On=new R,qi=new R,Yi=new R,Vc=new R,co=new R,ho=new R,uo=new R,mr=!1,bi=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),Nn.subVectors(n,e),lo.subVectors(t,e);let o=ln.dot(ln),a=ln.dot(Nn),l=ln.dot(lo),c=Nn.dot(Nn),h=Nn.dot(lo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(t,e,n,s,r,o,a,l){return mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mr=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),Nn.subVectors(t,e),ln.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),ln.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;qi.subVectors(s,n),Yi.subVectors(r,n),co.subVectors(t,n);let l=qi.dot(co),c=Yi.dot(co);if(l<=0&&c<=0)return e.copy(n);ho.subVectors(t,s);let h=qi.dot(ho),d=Yi.dot(ho);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(qi,o);uo.subVectors(t,r);let m=qi.dot(uo),_=Yi.dot(uo);if(_>=0&&m<=_)return e.copy(r);let g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Yi,a);let p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return Vc.subVectors(r,s),a=(d-h)/(d-h+(m-_)),e.copy(s).addScaledVector(Vc,a);let u=1/(p+g+f);return o=g*u,a=f*u,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},gr={h:0,s:0,l:0};function fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Nd(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fo(o,r,t+1/3),this.g=fo(o,r,t),this.b=fo(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ie){let n=Gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ie){return qt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(ke(Ae.r*255,0,255))*65536+Math.round(ke(Ae.g*255,0,255))*256+Math.round(ke(Ae.b*255,0,255))}getHexString(t=ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ae.copy(this),e);let n=Ae.r,s=Ae.g,r=Ae.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=ie){qt.fromWorkingColorSpace(Ae.copy(this),t);let e=Ae.r,n=Ae.g,s=Ae.b;return t!==ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(gr);let n=ja(Jn.h,gr.h,e),s=ja(Jn.s,gr.s,e),r=ja(Jn.l,gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new vt;vt.NAMES=Gh;var $d=0,bn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Qn,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=Ao,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==To&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},We=class extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new R,_r=new ft,le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lo&&(t.usage=this.usage),t}};var Yr=class extends le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $r=class extends le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends le{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Zd=0,nn=new oe,po=new ze,$i=new R,Ze=new Ai,Ls=new Ai,Se=new R,Zt=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?$r:Yr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $t(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ze.min,Ls.min),Ze.expandByPoint(Se),Se.addVectors(Ze.max,Ls.max),Ze.expandByPoint(Se)):(Ze.expandByPoint(Ls.min),Ze.expandByPoint(Ls.max))}Ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(t,c),Se.add($i)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new R,h[b]=new R;let d=new R,f=new R,m=new R,_=new ft,g=new ft,p=new ft,u=new R,v=new R;function x(b,D,H){d.fromArray(s,b*3),f.fromArray(s,D*3),m.fromArray(s,H*3),_.fromArray(o,b*2),g.fromArray(o,D*2),p.fromArray(o,H*2),f.sub(d),m.sub(d),g.sub(_),p.sub(_);let Y=1/(g.x*p.y-p.x*g.y);isFinite(Y)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(Y),v.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(Y),c[b].add(u),c[D].add(u),c[H].add(u),h[b].add(v),h[D].add(v),h[H].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,D=S.length;b<D;++b){let H=S[b],Y=H.start,L=H.count;for(let N=Y,G=Y+L;N<G;N+=3)x(n[N+0],n[N+1],n[N+2])}let C=new R,T=new R,A=new R,I=new R;function y(b){A.fromArray(r,b*3),I.copy(A);let D=c[b];C.copy(D),C.sub(A.multiplyScalar(A.dot(D))).normalize(),T.crossVectors(I,D);let Y=T.dot(h[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=Y}for(let b=0,D=S.length;b<D;++b){let H=S[b],Y=H.start,L=H.count;for(let N=Y,G=Y+L;N<G;N+=3)y(n[N+0]),y(n[N+1]),y(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let f=0,m=t.count;f<m;f+=3){let _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let u=0;u<h;u++)f[_++]=c[m++]}return new le(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gc=new oe,xi=new ks,xr=new Ri,Wc=new R,Zi=new R,Ji=new R,Ki=new R,mo=new R,vr=new R,yr=new ft,Mr=new ft,Sr=new ft,Xc=new R,qc=new R,Yc=new R,br=new R,Er=new R,Qt=class extends ze{constructor(t=new Zt,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(mo.fromBufferAttribute(d,t),o?vr.addScaledVector(mo,h):vr.addScaledVector(mo.sub(e),h))}e.add(vr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(xr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(xr,Wc)===null||xi.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(Gc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let p=f[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,C=x;S<C;S+=3){let T=a.getX(S),A=a.getX(S+1),I=a.getX(S+2);s=wr(this,u,t,n,c,h,d,T,A,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){let v=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);s=wr(this,o,t,n,c,h,d,v,x,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let p=f[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,C=x;S<C;S+=3){let T=S,A=S+1,I=S+2;s=wr(this,u,t,n,c,h,d,T,A,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){let v=p,x=p+1,S=p+2;s=wr(this,o,t,n,c,h,d,v,x,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Jd(i,t,e,n,s,r,o,a){let l;if(t.side===Ce?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Mn,a),l===null)return null;Er.copy(a),Er.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Er);return c<e.near||c>e.far?null:{distance:c,point:Er.clone(),object:i}}function wr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Zi),i.getVertexPosition(l,Ji),i.getVertexPosition(c,Ki);let h=Jd(i,t,e,n,Zi,Ji,Ki,br);if(h){s&&(yr.fromBufferAttribute(s,a),Mr.fromBufferAttribute(s,l),Sr.fromBufferAttribute(s,c),h.uv=bi.getInterpolation(br,Zi,Ji,Ki,yr,Mr,Sr,new ft)),r&&(yr.fromBufferAttribute(r,a),Mr.fromBufferAttribute(r,l),Sr.fromBufferAttribute(r,c),h.uv1=bi.getInterpolation(br,Zi,Ji,Ki,yr,Mr,Sr,new ft),h.uv2=h.uv1),o&&(Xc.fromBufferAttribute(o,a),qc.fromBufferAttribute(o,l),Yc.fromBufferAttribute(o,c),h.normal=bi.getInterpolation(br,Zi,Ji,Ki,Xc,qc,Yc,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};bi.getNormal(Zi,Ji,Ki,d.normal),h.face=d}return h}var Vs=class i extends Zt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,m=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2));function _(g,p,u,v,x,S,C,T,A,I,y){let b=S/A,D=C/I,H=S/2,Y=C/2,L=T/2,N=A+1,G=I+1,q=0,X=0,W=new R;for(let $=0;$<G;$++){let j=$*D-Y;for(let lt=0;lt<N;lt++){let V=lt*b-H;W[g]=V*v,W[p]=j*x,W[u]=L,c.push(W.x,W.y,W.z),W[g]=0,W[p]=0,W[u]=T>0?1:-1,h.push(W.x,W.y,W.z),d.push(lt/A),d.push(1-$/I),q+=1}}for(let $=0;$<I;$++)for(let j=0;j<A;j++){let lt=f+j+N*$,V=f+j+N*($+1),Z=f+(j+1)+N*($+1),ct=f+(j+1)+N*$;l.push(lt,V,ct),l.push(V,Z,ct),X+=6}a.addGroup(m,X,y),m+=X,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){let t={};for(let e=0;e<i.length;e++){let n=fs(i[e]);for(let s in n)t[s]=n[s]}return t}function Kd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wh(i){return i.getRenderTarget()===null?i.outputColorSpace:qt.workingColorSpace}var ri={clone:fs,merge:Oe},jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ce=class extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=Kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Zr=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Re=class extends Zr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ka*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ji=-90,Qi=1,Fo=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Re(ji,Qi,t,e);s.layers=this.layers,this.add(s);let r=new Re(ji,Qi,t,e);r.layers=this.layers,this.add(r);let o=new Re(ji,Qi,t,e);o.layers=this.layers,this.add(o);let a=new Re(ji,Qi,t,e);a.layers=this.layers,this.add(a);let l=new Re(ji,Qi,t,e);l.layers=this.layers,this.add(l);let c=new Re(ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Jr=class extends Je{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bo=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ti?ie:sn),this.texture=new Jr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vs(5,5,5),r=new ce({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:yn});r.uniforms.tEquirect.value=e;let o=new Qt(s,r),a=e.minFilter;return e.minFilter===Hs&&(e.minFilter=Be),new Fo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},go=new R,tf=new R,ef=new Vt,Bn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=go.subVectors(n,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ef.getNormalMatrix(t),s=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new Ri,Tr=new R,Gs=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],u=s[12],v=s[13],x=s[14],S=s[15];if(n[0].setComponents(l-r,f-c,p-m,S-u).normalize(),n[1].setComponents(l+r,f+c,p+m,S+u).normalize(),n[2].setComponents(l+o,f+h,p+_,S+v).normalize(),n[3].setComponents(l-o,f-h,p-_,S-v).normalize(),n[4].setComponents(l-a,f-d,p-g,S-x).normalize(),e===zn)n[5].setComponents(l+a,f+d,p+g,S+x).normalize();else if(e===Vr)n[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nf(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,f=c.usage,m=d.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let f=h.array,m=h._updateRange,_=h.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&_.length===0&&i.bufferSubData(d,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){let u=_[g];e?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var Ws=class i extends Zt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,m=[],_=[],g=[],p=[];for(let u=0;u<h;u++){let v=u*f-o;for(let x=0;x<c;x++){let S=x*d-r;_.push(S,-v,0),g.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){let x=v+c*u,S=v+c*(u+1),C=v+1+c*(u+1),T=v+1+c*u;m.push(x,S,T),m.push(S,C,T)}this.setIndex(m),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(g,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
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
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
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
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_f=`#ifdef USE_IRIDESCENCE
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
#endif`,xf=`#ifdef USE_BUMPMAP
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Af=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cf=`vec3 transformedNormal = objectNormal;
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
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Of=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
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
}`,qf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
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
#endif`,ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,sp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pp=`#if defined( USE_POINTS_UV )
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
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
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
#endif`,Ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
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
}`,hm=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,um=`#define DISTANCE
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
}`,dm=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
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
}`,xm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vm=`#define LAMBERT
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
}`,ym=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Mm=`#define MATCAP
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
}`,Sm=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,bm=`#define NORMAL
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
}`,Em=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wm=`#define PHONG
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
}`,Tm=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Am=`#define STANDARD
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
}`,Rm=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Cm=`#define TOON
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
}`,Pm=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Lm=`uniform float size;
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
}`,Im=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Um=`uniform vec3 color;
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
}`,Nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Om=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ot={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:af,alphamap_pars_fragment:of,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:hf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:_f,bumpmap_pars_fragment:xf,clipping_planes_fragment:vf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:Sf,color_fragment:bf,color_pars_fragment:Ef,color_pars_vertex:wf,color_vertex:Tf,common:Af,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Cf,displacementmap_pars_vertex:Pf,displacementmap_vertex:Lf,emissivemap_fragment:If,emissivemap_pars_fragment:Df,colorspace_fragment:Uf,colorspace_pars_fragment:Nf,envmap_fragment:Of,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Bf,envmap_pars_vertex:Hf,envmap_physical_pars_fragment:Kf,envmap_vertex:zf,fog_vertex:kf,fog_pars_vertex:Vf,fog_fragment:Gf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_fragment:qf,lightmap_pars_fragment:Yf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Zf,lights_pars_begin:Jf,lights_toon_fragment:jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:tp,lights_phong_pars_fragment:ep,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:sp,lights_fragment_maps:rp,lights_fragment_end:ap,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphcolor_vertex:_p,morphnormal_vertex:xp,morphtarget_pars_vertex:vp,morphtarget_vertex:yp,normal_fragment_begin:Mp,normal_fragment_maps:Sp,normal_pars_fragment:bp,normal_pars_vertex:Ep,normal_vertex:wp,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:Ap,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Pp,opaque_fragment:Lp,packing:Ip,premultiplied_alpha_fragment:Dp,project_vertex:Up,dithering_fragment:Np,dithering_pars_fragment:Op,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Bp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:zp,shadowmap_vertex:kp,shadowmask_pars_fragment:Vp,skinbase_vertex:Gp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:qp,specularmap_fragment:Yp,specularmap_pars_fragment:$p,tonemapping_fragment:Zp,tonemapping_pars_fragment:Jp,transmission_fragment:Kp,transmission_pars_fragment:jp,uv_pars_fragment:Qp,uv_pars_vertex:tm,uv_vertex:em,worldpos_vertex:nm,background_vert:im,background_frag:sm,backgroundCube_vert:rm,backgroundCube_frag:am,cube_vert:om,cube_frag:lm,depth_vert:cm,depth_frag:hm,distanceRGBA_vert:um,distanceRGBA_frag:dm,equirect_vert:fm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:_m,meshbasic_frag:xm,meshlambert_vert:vm,meshlambert_frag:ym,meshmatcap_vert:Mm,meshmatcap_frag:Sm,meshnormal_vert:bm,meshnormal_frag:Em,meshphong_vert:wm,meshphong_frag:Tm,meshphysical_vert:Am,meshphysical_frag:Rm,meshtoon_vert:Cm,meshtoon_frag:Pm,points_vert:Lm,points_frag:Im,shadow_vert:Dm,shadow_frag:Um,sprite_vert:Nm,sprite_frag:Om},it={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},vn={basic:{uniforms:Oe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Oe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Oe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Oe([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Oe([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Oe([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Oe([it.points,it.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Oe([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Oe([it.common,it.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Oe([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Oe([it.sprite,it.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Oe([it.common,it.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Oe([it.lights,it.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};vn.physical={uniforms:Oe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Ar={r:0,b:0,g:0};function Fm(i,t,e,n,s,r,o){let a=new vt(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function _(p,u){let v=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?e:t).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),v=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ca)?(h===void 0&&(h=new Qt(new Vs(1,1,1),new ce({name:"BackgroundCubeMaterial",uniforms:fs(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=qt.getTransfer(x.colorSpace)!==Kt,(d!==x||f!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Qt(new Ws(2,2),new ce({name:"BackgroundMaterial",uniforms:fs(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=qt.getTransfer(x.colorSpace)!==Kt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,u){p.getRGB(Ar,Wh(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function Bm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function d(L,N,G,q,X){let W=!1;if(o){let $=g(q,G,N);c!==$&&(c=$,m(c.object)),W=u(L,q,G,X),W&&v(L,q,G,X)}else{let $=N.wireframe===!0;(c.geometry!==q.id||c.program!==G.id||c.wireframe!==$)&&(c.geometry=q.id,c.program=G.id,c.wireframe=$,W=!0)}X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,I(L,N,G,q),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,N,G){let q=G.wireframe===!0,X=a[L.id];X===void 0&&(X={},a[L.id]=X);let W=X[N.id];W===void 0&&(W={},X[N.id]=W);let $=W[q];return $===void 0&&($=p(f()),W[q]=$),$}function p(L){let N=[],G=[],q=[];for(let X=0;X<s;X++)N[X]=0,G[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:q,object:L,attributes:{},index:null}}function u(L,N,G,q){let X=c.attributes,W=N.attributes,$=0,j=G.getAttributes();for(let lt in j)if(j[lt].location>=0){let Z=X[lt],ct=W[lt];if(ct===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(ct=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(ct=L.instanceColor)),Z===void 0||Z.attribute!==ct||ct&&Z.data!==ct.data)return!0;$++}return c.attributesNum!==$||c.index!==q}function v(L,N,G,q){let X={},W=N.attributes,$=0,j=G.getAttributes();for(let lt in j)if(j[lt].location>=0){let Z=W[lt];Z===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));let ct={};ct.attribute=Z,Z&&Z.data&&(ct.data=Z.data),X[lt]=ct,$++}c.attributes=X,c.attributesNum=$,c.index=q}function x(){let L=c.newAttributes;for(let N=0,G=L.length;N<G;N++)L[N]=0}function S(L){C(L,0)}function C(L,N){let G=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;G[L]=1,q[L]===0&&(i.enableVertexAttribArray(L),q[L]=1),X[L]!==N&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),X[L]=N)}function T(){let L=c.newAttributes,N=c.enabledAttributes;for(let G=0,q=N.length;G<q;G++)N[G]!==L[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function A(L,N,G,q,X,W,$){$===!0?i.vertexAttribIPointer(L,N,G,X,W):i.vertexAttribPointer(L,N,G,q,X,W)}function I(L,N,G,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let X=q.attributes,W=G.getAttributes(),$=N.defaultAttributeValues;for(let j in W){let lt=W[j];if(lt.location>=0){let V=X[j];if(V===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let Z=V.normalized,ct=V.itemSize,xt=e.get(V);if(xt===void 0)continue;let _t=xt.buffer,It=xt.type,Ut=xt.bytesPerElement,wt=n.isWebGL2===!0&&(It===i.INT||It===i.UNSIGNED_INT||V.gpuType===Ih);if(V.isInterleavedBufferAttribute){let Xt=V.data,O=Xt.stride,Ie=V.offset;if(Xt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<lt.locationSize;Mt++)C(lt.location+Mt,Xt.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Xt.meshPerAttribute*Xt.count)}else for(let Mt=0;Mt<lt.locationSize;Mt++)S(lt.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Mt=0;Mt<lt.locationSize;Mt++)A(lt.location+Mt,ct/lt.locationSize,It,Z,O*Ut,(Ie+ct/lt.locationSize*Mt)*Ut,wt)}else{if(V.isInstancedBufferAttribute){for(let Xt=0;Xt<lt.locationSize;Xt++)C(lt.location+Xt,V.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Xt=0;Xt<lt.locationSize;Xt++)S(lt.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Xt=0;Xt<lt.locationSize;Xt++)A(lt.location+Xt,ct/lt.locationSize,It,Z,ct*Ut,ct/lt.locationSize*Xt*Ut,wt)}}else if($!==void 0){let Z=$[j];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(lt.location,Z);break;case 3:i.vertexAttrib3fv(lt.location,Z);break;case 4:i.vertexAttrib4fv(lt.location,Z);break;default:i.vertexAttrib1fv(lt.location,Z)}}}}T()}function y(){H();for(let L in a){let N=a[L];for(let G in N){let q=N[G];for(let X in q)_(q[X].object),delete q[X];delete N[G]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;let N=a[L.id];for(let G in N){let q=N[G];for(let X in q)_(q[X].object),delete q[X];delete N[G]}delete a[L.id]}function D(L){for(let N in a){let G=a[N];if(G[L.id]===void 0)continue;let q=G[L.id];for(let X in q)_(q[X].object),delete q[X];delete G[L.id]}}function H(){Y(),h=!0,c!==l&&(c=l,m(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:Y,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:S,disableUnusedAttributes:T}}function Hm(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,d,f),e.update(d,r,f)}function c(h,d,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(h[_],d[_]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function zm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,S=o||t.has("OES_texture_float"),C=x&&S,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:T}}function km(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Bn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,x=v*4,S=u.clippingState||null;l.value=S,S=h(_,f,x,m);for(let C=0;C!==x;++C)S[C]=e[C];u.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,_){let g=d!==null?d.length:0,p=null;if(g!==0){if(p=l.value,_!==!0||p===null){let u=m+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,S=m;x!==g;++x,S+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Vm(i){let t=new WeakMap;function e(o,a){return a===Ro?o.mapping=cs:a===Co&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ro||a===Co)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Bo(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xs=class extends Zr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rs=4,$c=[.125,.215,.35,.446,.526,.582],Si=20,_o=new Xs,Zc=new vt,xo=null,vo=0,yo=0,yi=(1+Math.sqrt(5))/2,ts=1/yi,Jc=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,yi,ts),new R(0,yi,-ts),new R(ts,0,yi),new R(-ts,0,yi),new R(yi,ts,0),new R(-yi,ts,0)],Kr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xo=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xo,vo,yo),t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xo=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:un,format:hn,colorSpace:kn,depthBuffer:!1},s=Kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(r)),this._blurMaterial=Wm(r,t,e)}return s}_compileMaterial(t){let e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,n,s){let a=new Re(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Zc),h.toneMapping=ti,h.autoClear=!1;let m=new We({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),_=new Qt(new Vs,m),g=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Zc),g=!0);for(let u=0;u<6;u++){let v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let x=this._cubeSize;Rr(s,v*x,u>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===cs||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_o)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jc[(s-1)%Jc.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Qt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Si-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Si;p>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);let u=[],v=0;for(let A=0;A<Si;++A){let I=A/g,y=Math.exp(-I*I/2);u.push(y),A===0?v+=y:A<p&&(v+=2*y)}for(let A=0;A<u.length;A++)u[A]=u[A]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;let S=this._sizeLods[s],C=3*S*(s>x-rs?s-x+rs:0),T=4*(this._cubeSize-S);Rr(e,C,T,3*S,2*S),l.setRenderTarget(e),l.render(d,_o)}};function Gm(i){let t=[],e=[],n=[],s=i,r=i-rs+1+$c.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-rs?l=$c[o-i+rs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,g=3,p=2,u=1,v=new Float32Array(g*_*m),x=new Float32Array(p*_*m),S=new Float32Array(u*_*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,I=T>2?0:-1,y=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];v.set(y,g*_*T),x.set(f,p*_*T);let b=[T,T,T,T,T,T];S.set(b,u*_*T)}let C=new Zt;C.setAttribute("position",new le(v,g)),C.setAttribute("uv",new le(x,p)),C.setAttribute("faceIndex",new le(S,u)),t.push(C),s>rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kc(i,t,e){let n=new He(i,t,e);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wm(i,t,e){let n=new Float32Array(Si),s=new R(0,1,0);return new ce({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_l(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function jc(){return new ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Qc(){return new ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function Xm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ro||l===Co,h=l===cs||l===hs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Kr(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new Kr(i));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function qm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ym(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let g=f.morphAttributes[_];for(let p=0,u=g.length;p<u;p++)t.remove(g[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let _ in m){let g=m[_];for(let p=0,u=g.length;p<u;p++)t.update(g[p],i.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,_=d.attributes.position,g=0;if(m!==null){let v=m.array;g=m.version;for(let x=0,S=v.length;x<S;x+=3){let C=v[x+0],T=v[x+1],A=v[x+2];f.push(C,T,T,A,A,C)}}else if(_!==void 0){let v=_.array;g=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){let C=x+0,T=x+1,A=x+2;f.push(C,T,T,A,A,C)}}else return;let p=new(Vh(f)?$r:Yr)(f,1);p.version=g;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function $m(i,t,e,n){let s=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,_){i.drawElements(r,_,a,m*l),e.update(_,r,1)}function d(m,_,g){if(g===0)return;let p,u;if(s)p=i,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,_,a,m*l,g),e.update(_,r,g)}function f(m,_,g){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<g;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let u=0;for(let v=0;v<g;v++)u+=_[v];e.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Zm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jm(i,t){return i[0]-t[0]}function Km(i,t){return Math.abs(t[1])-Math.abs(i[1])}function jm(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new ae,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,g=r.get(h);if(g===void 0||g.count!==_){let L=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",L)};g!==void 0&&g.texture.dispose();let v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],I=0;v===!0&&(I=1),x===!0&&(I=2),S===!0&&(I=3);let y=h.attributes.position.count*I,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let D=new Float32Array(y*b*4*_),H=new Xr(D,y,b,_);H.type=jn,H.needsUpdate=!0;let Y=I*4;for(let N=0;N<_;N++){let G=C[N],q=T[N],X=A[N],W=y*b*4*N;for(let $=0;$<G.count;$++){let j=$*Y;v===!0&&(o.fromBufferAttribute(G,$),D[W+j+0]=o.x,D[W+j+1]=o.y,D[W+j+2]=o.z,D[W+j+3]=0),x===!0&&(o.fromBufferAttribute(q,$),D[W+j+4]=o.x,D[W+j+5]=o.y,D[W+j+6]=o.z,D[W+j+7]=0),S===!0&&(o.fromBufferAttribute(X,$),D[W+j+8]=o.x,D[W+j+9]=o.y,D[W+j+10]=o.z,D[W+j+11]=X.itemSize===4?o.w:1)}}g={count:_,texture:H,size:new ft(y,b)},r.set(h,g),h.addEventListener("dispose",L)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{let m=f===void 0?0:f.length,_=n[h.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<m;x++){let S=_[x];S[0]=x,S[1]=f[x]}_.sort(Km);for(let x=0;x<8;x++)x<m&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Jm);let g=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let x=0;x<8;x++){let S=a[x],C=S[0],T=S[1];C!==Number.MAX_SAFE_INTEGER&&T?(g&&h.getAttribute("morphTarget"+x)!==g[C]&&h.setAttribute("morphTarget"+x,g[C]),p&&h.getAttribute("morphNormal"+x)!==p[C]&&h.setAttribute("morphNormal"+x,p[C]),s[x]=T,u+=T):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let v=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",v),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Qm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var jr=class extends Je{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:wi,h!==wi&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wi&&(n=Kn),n===void 0&&h===us&&(n=Ei),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fe,this.minFilter=l!==void 0?l:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qh=new Je,Yh=new jr(1,1);Yh.compareFunction=kh;var $h=new Xr,Zh=new Oo,Jh=new Jr,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function _s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ua(i,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function t0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function s0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;sh.set(n),i.uniformMatrix2fv(this.addr,!1,sh),ve(e,n)}}function r0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;ih.set(n),i.uniformMatrix3fv(this.addr,!1,ih),ve(e,n)}}function a0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;nh.set(n),i.uniformMatrix4fv(this.addr,!1,nh),ve(e,n)}}function o0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function h0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function u0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function m0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Yh:qh;e.setTexture2D(t||r,s)}function g0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zh,s)}function _0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jh,s)}function x0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$h,s)}function v0(i){switch(i){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}function y0(i,t){i.uniform1fv(this.addr,t)}function M0(i,t){let e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function S0(i,t){let e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function b0(i,t){let e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function E0(i,t){let e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function w0(i,t){let e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function T0(i,t){let e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function A0(i,t){i.uniform1iv(this.addr,t)}function R0(i,t){i.uniform2iv(this.addr,t)}function C0(i,t){i.uniform3iv(this.addr,t)}function P0(i,t){i.uniform4iv(this.addr,t)}function L0(i,t){i.uniform1uiv(this.addr,t)}function I0(i,t){i.uniform2uiv(this.addr,t)}function D0(i,t){i.uniform3uiv(this.addr,t)}function U0(i,t){i.uniform4uiv(this.addr,t)}function N0(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||qh,r[o])}function O0(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zh,r[o])}function F0(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Jh,r[o])}function B0(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$h,r[o])}function H0(i){switch(i){case 5126:return y0;case 35664:return M0;case 35665:return S0;case 35666:return b0;case 35674:return E0;case 35675:return w0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return I0;case 36295:return D0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return B0}}var Ho=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=v0(e.type)}},zo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H0(e.type)}},ko=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Mo=/(\w+)(\])?(\[|\.)?/g;function rh(i,t){i.seq.push(t),i.map[t.id]=t}function z0(i,t,e){let n=i.name,s=n.length;for(Mo.lastIndex=0;;){let r=Mo.exec(n),o=Mo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rh(e,c===void 0?new Ho(a,i,t):new zo(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ko(a),rh(e,d)),e=d}}}var ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);z0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ah(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var k0=37297,V0=0;function G0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function W0(i){let t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(i),n;switch(t===e?n="":t===kr&&e===zr?n="LinearDisplayP3ToLinearSRGB":t===zr&&e===kr&&(n="LinearSRGBToLinearDisplayP3"),i){case kn:case ha:return[n,"LinearTransferOETF"];case ie:case gl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function oh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+G0(i.getShaderSource(t),o)}else return s}function X0(i,t){let e=W0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function q0(i,t){let e;switch(t){case ul:e="Linear";break;case dl:e="Reinhard";break;case fl:e="OptimizedCineon";break;case Ks:e="ACESFilmic";break;case pl:e="AgX";break;case md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Y0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(as).join(`
`)}function $0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(as).join(`
`)}function Z0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function as(i){return i!==""}function lh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ch(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(K0,Q0)}var j0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Q0(i,t){let e=Ot[t];if(e===void 0){let n=j0.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vo(e)}var tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(i){return i.replace(tg,eg)}function eg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uh(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ng(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function ig(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===hs&&(t="ENVMAP_MODE_REFRACTION"),t}function rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ph:t="ENVMAP_BLENDING_MULTIPLY";break;case fd:t="ENVMAP_BLENDING_MIX";break;case pd:t="ENVMAP_BLENDING_ADD";break}return t}function ag(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function og(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ng(e),c=ig(e),h=sg(e),d=rg(e),f=ag(e),m=e.isWebGL2?"":Y0(e),_=$0(e),g=Z0(r),p=s.createProgram(),u,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),v.length>0&&(v+=`
`)):(u=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),v=[m,uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Ot.tonemapping_pars_fragment:"",e.toneMapping!==ti?q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,X0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),o=Vo(o),o=lh(o,e),o=ch(o,e),a=Vo(a),a=lh(a,e),a=ch(a,e),o=hh(o),a=hh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let S=x+u+o,C=x+v+a,T=ah(s,s.VERTEX_SHADER,S),A=ah(s,s.FRAGMENT_SHADER,C);s.attachShader(p,T),s.attachShader(p,A),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function I(H){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(T).trim(),N=s.getShaderInfoLog(A).trim(),G=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,T,A);else{let X=oh(s,T,"vertex"),W=oh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+X+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||N==="")&&(q=!1);q&&(H.diagnostics={runnable:G,programLog:Y,vertexShader:{log:L,prefix:u},fragmentShader:{log:N,prefix:v}})}s.deleteShader(T),s.deleteShader(A),y=new ls(s,p),b=J0(s,p)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,k0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}var lg=0,Go=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wo(t),e.set(t,n)),n}},Wo=class{constructor(t){this.id=lg++,this.code=t,this.usedTimes=0}};function cg(i,t,e,n,s,r,o){let a=new qr,l=new Go,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function p(y,b,D,H,Y){let L=H.fog,N=Y.geometry,G=y.isMeshStandardMaterial?H.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),X=q&&q.mapping===ca?q.image.height:null,W=_[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=$!==void 0?$.length:0,lt=0;N.morphAttributes.position!==void 0&&(lt=1),N.morphAttributes.normal!==void 0&&(lt=2),N.morphAttributes.color!==void 0&&(lt=3);let V,Z,ct,xt;if(W){let De=vn[W];V=De.vertexShader,Z=De.fragmentShader}else V=y.vertexShader,Z=y.fragmentShader,l.update(y),ct=l.getVertexShaderID(y),xt=l.getFragmentShaderID(y);let _t=i.getRenderTarget(),It=Y.isInstancedMesh===!0,Ut=Y.isBatchedMesh===!0,wt=!!y.map,Xt=!!y.matcap,O=!!q,Ie=!!y.aoMap,Mt=!!y.lightMap,Ct=!!y.bumpMap,pt=!!y.normalMap,he=!!y.displacementMap,Ft=!!y.emissiveMap,w=!!y.metalnessMap,M=!!y.roughnessMap,B=y.anisotropy>0,Q=y.clearcoat>0,K=y.iridescence>0,tt=y.sheen>0,mt=y.transmission>0,ot=B&&!!y.anisotropyMap,ut=Q&&!!y.clearcoatMap,Et=Q&&!!y.clearcoatNormalMap,Bt=Q&&!!y.clearcoatRoughnessMap,J=K&&!!y.iridescenceMap,Jt=K&&!!y.iridescenceThicknessMap,Gt=tt&&!!y.sheenColorMap,Rt=tt&&!!y.sheenRoughnessMap,yt=!!y.specularMap,dt=!!y.specularColorMap,Nt=!!y.specularIntensityMap,Yt=mt&&!!y.transmissionMap,de=mt&&!!y.thicknessMap,zt=!!y.gradientMap,nt=!!y.alphaMap,P=y.alphaTest>0,rt=!!y.alphaHash,at=!!y.extensions,Tt=!!N.attributes.uv1,St=!!N.attributes.uv2,te=!!N.attributes.uv3,ee=ti;return y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ee=i.toneMapping),{isWebGL2:h,shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:Z,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ut,instancing:It,instancingColor:It&&Y.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:kn,map:wt,matcap:Xt,envMap:O,envMapMode:O&&q.mapping,envMapCubeUVHeight:X,aoMap:Ie,lightMap:Mt,bumpMap:Ct,normalMap:pt,displacementMap:f&&he,emissiveMap:Ft,normalMapObjectSpace:pt&&y.normalMapType===Ad,normalMapTangentSpace:pt&&y.normalMapType===zh,metalnessMap:w,roughnessMap:M,anisotropy:B,anisotropyMap:ot,clearcoat:Q,clearcoatMap:ut,clearcoatNormalMap:Et,clearcoatRoughnessMap:Bt,iridescence:K,iridescenceMap:J,iridescenceThicknessMap:Jt,sheen:tt,sheenColorMap:Gt,sheenRoughnessMap:Rt,specularMap:yt,specularColorMap:dt,specularIntensityMap:Nt,transmission:mt,transmissionMap:Yt,thicknessMap:de,gradientMap:zt,opaque:y.transparent===!1&&y.blending===Qn,alphaMap:nt,alphaTest:P,alphaHash:rt,combine:y.combine,mapUv:wt&&g(y.map.channel),aoMapUv:Ie&&g(y.aoMap.channel),lightMapUv:Mt&&g(y.lightMap.channel),bumpMapUv:Ct&&g(y.bumpMap.channel),normalMapUv:pt&&g(y.normalMap.channel),displacementMapUv:he&&g(y.displacementMap.channel),emissiveMapUv:Ft&&g(y.emissiveMap.channel),metalnessMapUv:w&&g(y.metalnessMap.channel),roughnessMapUv:M&&g(y.roughnessMap.channel),anisotropyMapUv:ot&&g(y.anisotropyMap.channel),clearcoatMapUv:ut&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Et&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&g(y.sheenRoughnessMap.channel),specularMapUv:yt&&g(y.specularMap.channel),specularColorMapUv:dt&&g(y.specularColorMap.channel),specularIntensityMapUv:Nt&&g(y.specularIntensityMap.channel),transmissionMapUv:Yt&&g(y.transmissionMap.channel),thicknessMapUv:de&&g(y.thicknessMap.channel),alphaMapUv:nt&&g(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pt||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Tt,vertexUv2s:St,vertexUv3s:te,pointsUvs:Y.isPoints===!0&&!!N.attributes.uv&&(wt||nt),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:lt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,useLegacyLights:i._useLegacyLights,decodeVideoTexture:wt&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===Kt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ve,flipSided:y.side===Ce,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:at&&y.extensions.derivatives===!0,extensionFragDepth:at&&y.extensions.fragDepth===!0,extensionDrawBuffers:at&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:at&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)b.push(D),b.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(v(b,y),x(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function v(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){let b=_[y.type],D;if(b){let H=vn[b];D=ri.clone(H.uniforms)}else D=y.uniforms;return D}function C(y,b){let D;for(let H=0,Y=c.length;H<Y;H++){let L=c[H];if(L.cacheKey===b){D=L,++D.usedTimes;break}}return D===void 0&&(D=new og(i,b,y,r),c.push(D)),D}function T(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:I}}function hg(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function ug(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,m,_,g,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=g,u.group=p),t++,u}function a(d,f,m,_,g,p){let u=o(d,f,m,_,g,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,_,g,p){let u=o(d,f,m,_,g,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||ug),n.length>1&&n.sort(f||dh),s.length>1&&s.sort(f||dh)}function h(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function dg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new fh,i.set(n,[o])):s>=r.length?(o=new fh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function fg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new vt};break;case"SpotLight":e={position:new R,direction:new R,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function pg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var mg=0;function gg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _g(i,t){let e=new fg,n=pg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,o=new oe,a=new oe;function l(h,d){let f=0,m=0,_=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let g=0,p=0,u=0,v=0,x=0,S=0,C=0,T=0,A=0,I=0,y=0;h.sort(gg);let b=d===!0?Math.PI:1;for(let H=0,Y=h.length;H<Y;H++){let L=h[H],N=L.color,G=L.intensity,q=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*G*b,m+=N.g*G*b,_+=N.b*G*b;else if(L.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(L.sh.coefficients[W],G);y++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let $=L.shadow,j=n.get(L);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,s.directionalShadow[g]=j,s.directionalShadowMap[g]=X,s.directionalShadowMatrix[g]=L.shadow.matrix,S++}s.directional[g]=W,g++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(N).multiplyScalar(G*b),W.distance=q,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,s.spot[u]=W;let $=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,$.updateMatrices(L),L.castShadow&&I++),s.spotLightMatrix[u]=$.matrix,L.castShadow){let j=n.get(L);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,s.spotShadow[u]=j,s.spotShadowMap[u]=X,T++}u++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(N).multiplyScalar(G),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),s.rectArea[v]=W,v++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),W.distance=L.distance,W.decay=L.decay,L.castShadow){let $=L.shadow,j=n.get(L);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,s.pointShadow[p]=j,s.pointShadowMap[p]=X,s.pointShadowMatrix[p]=L.shadow.matrix,C++}s.point[p]=W,p++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(G*b),W.groundColor.copy(L.groundColor).multiplyScalar(G*b),s.hemi[x]=W,x++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;let D=s.hash;(D.directionalLength!==g||D.pointLength!==p||D.spotLength!==u||D.rectAreaLength!==v||D.hemiLength!==x||D.numDirectionalShadows!==S||D.numPointShadows!==C||D.numSpotShadows!==T||D.numSpotMaps!==A||D.numLightProbes!==y)&&(s.directional.length=g,s.spot.length=u,s.rectArea.length=v,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+A-I,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=y,D.directionalLength=g,D.pointLength=p,D.spotLength=u,D.rectAreaLength=v,D.hemiLength=x,D.numDirectionalShadows=S,D.numPointShadows=C,D.numSpotShadows=T,D.numSpotMaps=A,D.numLightProbes=y,s.version=mg++)}function c(h,d){let f=0,m=0,_=0,g=0,p=0,u=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){let S=h[v];if(S.isDirectionalLight){let C=s.directional[f];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(u),f++}else if(S.isSpotLight){let C=s.spot[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(u),_++}else if(S.isRectAreaLight){let C=s.rectArea[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let C=s.point[m];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){let C=s.hemi[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function ph(i,t){let e=new _g(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function xg(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new ph(i,t),e.set(r,[l])):o>=a.length?(l=new ph(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Xo=class extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qo=class extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
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
}`;function Mg(i,t,e){let n=new Gs,s=new ft,r=new ft,o=new ae,a=new Xo({depthPacking:Td}),l=new qo,c={},h=e.maxTextureSize,d={[Mn]:Ce,[Ce]:Mn,[Ve]:Ve},f=new ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:vg,fragmentShader:yg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new Zt;_.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Qt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let u=this.type;this.render=function(T,A,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let y=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),H=i.state;H.setBlending(yn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Y=u!==Fn&&this.type===Fn,L=u===Fn&&this.type!==Fn;for(let N=0,G=T.length;N<G;N++){let q=T[N],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let W=X.getFrameExtents();if(s.multiply(W),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||Y===!0||L===!0){let j=this.type!==Fn?{minFilter:Fe,magFilter:Fe}:{};X.map!==null&&X.map.dispose(),X.map=new He(s.x,s.y,j),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let $=X.getViewportCount();for(let j=0;j<$;j++){let lt=X.getViewport(j);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),H.viewport(o),X.updateMatrices(q,j),n=X.getFrustum(),S(A,I,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===Fn&&v(X,I),X.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(y,b,D)};function v(T,A){let I=t.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new He(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,f,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,m,g,null)}function x(T,A,I,y){let b=null,D=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)b=D;else if(b=I.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=b.uuid,Y=A.uuid,L=c[H];L===void 0&&(L={},c[H]=L);let N=L[Y];N===void 0&&(N=b.clone(),L[Y]=N,A.addEventListener("dispose",C)),b=N}if(b.visible=A.visible,b.wireframe=A.wireframe,y===Fn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=i.properties.get(b);H.light=I}return b}function S(T,A,I,y,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Fn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let Y=t.update(T),L=T.material;if(Array.isArray(L)){let N=Y.groups;for(let G=0,q=N.length;G<q;G++){let X=N[G],W=L[X.materialIndex];if(W&&W.visible){let $=x(T,W,y,b);T.onBeforeShadow(i,T,A,I,Y,$,X),i.renderBufferDirect(I,null,Y,$,T,X),T.onAfterShadow(i,T,A,I,Y,$,X)}}}else if(L.visible){let N=x(T,L,y,b);T.onBeforeShadow(i,T,A,I,Y,N,null),i.renderBufferDirect(I,null,Y,N,T,null),T.onAfterShadow(i,T,A,I,Y,N,null)}}let H=T.children;for(let Y=0,L=H.length;Y<L;Y++)S(H[Y],A,I,y,b)}function C(T){T.target.removeEventListener("dispose",C);for(let I in c){let y=c[I],b=T.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function Sg(i,t,e){let n=e.isWebGL2;function s(){let P=!1,rt=new ae,at=null,Tt=new ae(0,0,0,0);return{setMask:function(St){at!==St&&!P&&(i.colorMask(St,St,St,St),at=St)},setLocked:function(St){P=St},setClear:function(St,te,ee,ye,De){De===!0&&(St*=ye,te*=ye,ee*=ye),rt.set(St,te,ee,ye),Tt.equals(rt)===!1&&(i.clearColor(St,te,ee,ye),Tt.copy(rt))},reset:function(){P=!1,at=null,Tt.set(-1,0,0,0)}}}function r(){let P=!1,rt=null,at=null,Tt=null;return{setTest:function(St){St?Ut(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(St){rt!==St&&!P&&(i.depthMask(St),rt=St)},setFunc:function(St){if(at!==St){switch(St){case ad:i.depthFunc(i.NEVER);break;case od:i.depthFunc(i.ALWAYS);break;case ld:i.depthFunc(i.LESS);break;case Or:i.depthFunc(i.LEQUAL);break;case cd:i.depthFunc(i.EQUAL);break;case hd:i.depthFunc(i.GEQUAL);break;case ud:i.depthFunc(i.GREATER);break;case dd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=St}},setLocked:function(St){P=St},setClear:function(St){Tt!==St&&(i.clearDepth(St),Tt=St)},reset:function(){P=!1,rt=null,at=null,Tt=null}}}function o(){let P=!1,rt=null,at=null,Tt=null,St=null,te=null,ee=null,ye=null,De=null;return{setTest:function(ne){P||(ne?Ut(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(ne){rt!==ne&&!P&&(i.stencilMask(ne),rt=ne)},setFunc:function(ne,Ue,xn){(at!==ne||Tt!==Ue||St!==xn)&&(i.stencilFunc(ne,Ue,xn),at=ne,Tt=Ue,St=xn)},setOp:function(ne,Ue,xn){(te!==ne||ee!==Ue||ye!==xn)&&(i.stencilOp(ne,Ue,xn),te=ne,ee=Ue,ye=xn)},setLocked:function(ne){P=ne},setClear:function(ne){De!==ne&&(i.clearStencil(ne),De=ne)},reset:function(){P=!1,rt=null,at=null,Tt=null,St=null,te=null,ee=null,ye=null,De=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,f={},m={},_=new WeakMap,g=[],p=null,u=!1,v=null,x=null,S=null,C=null,T=null,A=null,I=null,y=new vt(0,0,0),b=0,D=!1,H=null,Y=null,L=null,N=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),X=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=W>=2);let j=null,lt={},V=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),ct=new ae().fromArray(V),xt=new ae().fromArray(Z);function _t(P,rt,at,Tt){let St=new Uint8Array(4),te=i.createTexture();i.bindTexture(P,te),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<at;ee++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(rt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(rt+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return te}let It={};It[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ut(i.DEPTH_TEST),l.setFunc(Or),Ft(!1),w(Zl),Ut(i.CULL_FACE),pt(yn);function Ut(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function wt(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function Xt(P,rt){return m[P]!==rt?(i.bindFramebuffer(P,rt),m[P]=rt,n&&(P===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=rt),P===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=rt)),!0):!1}function O(P,rt){let at=g,Tt=!1;if(P)if(at=_.get(rt),at===void 0&&(at=[],_.set(rt,at)),P.isWebGLMultipleRenderTargets){let St=P.texture;if(at.length!==St.length||at[0]!==i.COLOR_ATTACHMENT0){for(let te=0,ee=St.length;te<ee;te++)at[te]=i.COLOR_ATTACHMENT0+te;at.length=St.length,Tt=!0}}else at[0]!==i.COLOR_ATTACHMENT0&&(at[0]=i.COLOR_ATTACHMENT0,Tt=!0);else at[0]!==i.BACK&&(at[0]=i.BACK,Tt=!0);Tt&&(e.isWebGL2?i.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function Ie(P){return p!==P?(i.useProgram(P),p=P,!0):!1}let Mt={[Mi]:i.FUNC_ADD,[Xu]:i.FUNC_SUBTRACT,[qu]:i.FUNC_REVERSE_SUBTRACT};if(n)Mt[jl]=i.MIN,Mt[Ql]=i.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(Mt[jl]=P.MIN_EXT,Mt[Ql]=P.MAX_EXT)}let Ct={[Yu]:i.ZERO,[$u]:i.ONE,[Zu]:i.SRC_COLOR,[To]:i.SRC_ALPHA,[ed]:i.SRC_ALPHA_SATURATE,[Qu]:i.DST_COLOR,[Ku]:i.DST_ALPHA,[Ju]:i.ONE_MINUS_SRC_COLOR,[Ao]:i.ONE_MINUS_SRC_ALPHA,[td]:i.ONE_MINUS_DST_COLOR,[ju]:i.ONE_MINUS_DST_ALPHA,[nd]:i.CONSTANT_COLOR,[id]:i.ONE_MINUS_CONSTANT_COLOR,[sd]:i.CONSTANT_ALPHA,[rd]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(P,rt,at,Tt,St,te,ee,ye,De,ne){if(P===yn){u===!0&&(wt(i.BLEND),u=!1);return}if(u===!1&&(Ut(i.BLEND),u=!0),P!==Wu){if(P!==v||ne!==D){if((x!==Mi||T!==Mi)&&(i.blendEquation(i.FUNC_ADD),x=Mi,T=Mi),ne)switch(P){case Qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ee:i.blendFunc(i.ONE,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ee:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,C=null,A=null,I=null,y.set(0,0,0),b=0,v=P,D=ne}return}St=St||rt,te=te||at,ee=ee||Tt,(rt!==x||St!==T)&&(i.blendEquationSeparate(Mt[rt],Mt[St]),x=rt,T=St),(at!==S||Tt!==C||te!==A||ee!==I)&&(i.blendFuncSeparate(Ct[at],Ct[Tt],Ct[te],Ct[ee]),S=at,C=Tt,A=te,I=ee),(ye.equals(y)===!1||De!==b)&&(i.blendColor(ye.r,ye.g,ye.b,De),y.copy(ye),b=De),v=P,D=!1}function he(P,rt){P.side===Ve?wt(i.CULL_FACE):Ut(i.CULL_FACE);let at=P.side===Ce;rt&&(at=!at),Ft(at),P.blending===Qn&&P.transparent===!1?pt(yn):pt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let Tt=P.stencilWrite;c.setTest(Tt),Tt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ut(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(P){H!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),H=P)}function w(P){P!==ku?(Ut(i.CULL_FACE),P!==Y&&(P===Zl?i.cullFace(i.BACK):P===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),Y=P}function M(P){P!==L&&(X&&i.lineWidth(P),L=P)}function B(P,rt,at){P?(Ut(i.POLYGON_OFFSET_FILL),(N!==rt||G!==at)&&(i.polygonOffset(rt,at),N=rt,G=at)):wt(i.POLYGON_OFFSET_FILL)}function Q(P){P?Ut(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function K(P){P===void 0&&(P=i.TEXTURE0+q-1),j!==P&&(i.activeTexture(P),j=P)}function tt(P,rt,at){at===void 0&&(j===null?at=i.TEXTURE0+q-1:at=j);let Tt=lt[at];Tt===void 0&&(Tt={type:void 0,texture:void 0},lt[at]=Tt),(Tt.type!==P||Tt.texture!==rt)&&(j!==at&&(i.activeTexture(at),j=at),i.bindTexture(P,rt||It[P]),Tt.type=P,Tt.texture=rt)}function mt(){let P=lt[j];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Bt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Jt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Nt(P){ct.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ct.copy(P))}function Yt(P){xt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),xt.copy(P))}function de(P,rt){let at=d.get(rt);at===void 0&&(at=new WeakMap,d.set(rt,at));let Tt=at.get(P);Tt===void 0&&(Tt=i.getUniformBlockIndex(rt,P.name),at.set(P,Tt))}function zt(P,rt){let Tt=d.get(rt).get(P);h.get(rt)!==Tt&&(i.uniformBlockBinding(rt,Tt,P.__bindingPointIndex),h.set(rt,Tt))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},j=null,lt={},m={},_=new WeakMap,g=[],p=null,u=!1,v=null,x=null,S=null,C=null,T=null,A=null,I=null,y=new vt(0,0,0),b=0,D=!1,H=null,Y=null,L=null,N=null,G=null,ct.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ut,disable:wt,bindFramebuffer:Xt,drawBuffers:O,useProgram:Ie,setBlending:pt,setMaterial:he,setFlipSided:Ft,setCullFace:w,setLineWidth:M,setPolygonOffset:B,setScissorTest:Q,activeTexture:K,bindTexture:tt,unbindTexture:mt,compressedTexImage2D:ot,compressedTexImage3D:ut,texImage2D:yt,texImage3D:dt,updateUBOMapping:de,uniformBlockBinding:zt,texStorage2D:Gt,texStorage3D:Rt,texSubImage2D:Et,texSubImage3D:Bt,compressedTexSubImage2D:J,compressedTexSubImage3D:Jt,scissor:Nt,viewport:Yt,reset:nt}}function bg(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return m?new OffscreenCanvas(w,M):zs("canvas")}function g(w,M,B,Q){let K=1;if((w.width>Q||w.height>Q)&&(K=Q/Math.max(w.width,w.height)),K<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let tt=M?Uo:Math.floor,mt=tt(K*w.width),ot=tt(K*w.height);d===void 0&&(d=_(mt,ot));let ut=B?_(mt,ot):d;return ut.width=mt,ut.height=ot,ut.getContext("2d").drawImage(w,0,0,mt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+mt+"x"+ot+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return Lc(w.width)&&Lc(w.height)}function u(w){return a?!1:w.wrapS!==cn||w.wrapT!==cn||w.minFilter!==Fe&&w.minFilter!==Be}function v(w,M){return w.generateMipmaps&&M&&w.minFilter!==Fe&&w.minFilter!==Be}function x(w){i.generateMipmap(w)}function S(w,M,B,Q,K=!1){if(a===!1)return M;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let tt=M;if(M===i.RED&&(B===i.FLOAT&&(tt=i.R32F),B===i.HALF_FLOAT&&(tt=i.R16F),B===i.UNSIGNED_BYTE&&(tt=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(tt=i.R8UI),B===i.UNSIGNED_SHORT&&(tt=i.R16UI),B===i.UNSIGNED_INT&&(tt=i.R32UI),B===i.BYTE&&(tt=i.R8I),B===i.SHORT&&(tt=i.R16I),B===i.INT&&(tt=i.R32I)),M===i.RG&&(B===i.FLOAT&&(tt=i.RG32F),B===i.HALF_FLOAT&&(tt=i.RG16F),B===i.UNSIGNED_BYTE&&(tt=i.RG8)),M===i.RGBA){let mt=K?Hr:qt.getTransfer(Q);B===i.FLOAT&&(tt=i.RGBA32F),B===i.HALF_FLOAT&&(tt=i.RGBA16F),B===i.UNSIGNED_BYTE&&(tt=mt===Kt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function C(w,M,B){return v(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==Fe&&w.minFilter!==Be?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function T(w){return w===Fe||w===tc||w===Wa?i.NEAREST:i.LINEAR}function A(w){let M=w.target;M.removeEventListener("dispose",A),y(M),M.isVideoTexture&&h.delete(M)}function I(w){let M=w.target;M.removeEventListener("dispose",I),D(M)}function y(w){let M=n.get(w);if(M.__webglInit===void 0)return;let B=w.source,Q=f.get(B);if(Q){let K=Q[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(w),Object.keys(Q).length===0&&f.delete(B)}n.remove(w)}function b(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let B=w.source,Q=f.get(B);delete Q[M.__cacheKey],o.memory.textures--}function D(w){let M=w.texture,B=n.get(w),Q=n.get(M);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(B.__webglFramebuffer[K]))for(let tt=0;tt<B.__webglFramebuffer[K].length;tt++)i.deleteFramebuffer(B.__webglFramebuffer[K][tt]);else i.deleteFramebuffer(B.__webglFramebuffer[K]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[K])}else{if(Array.isArray(B.__webglFramebuffer))for(let K=0;K<B.__webglFramebuffer.length;K++)i.deleteFramebuffer(B.__webglFramebuffer[K]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let K=0;K<B.__webglColorRenderbuffer.length;K++)B.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[K]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let K=0,tt=M.length;K<tt;K++){let mt=n.get(M[K]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(M[K])}n.remove(M),n.remove(w)}let H=0;function Y(){H=0}function L(){let w=H;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),H+=1,w}function N(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function G(w,M){let B=n.get(w);if(w.isVideoTexture&&he(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(B,w,M);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function q(w,M){let B=n.get(w);if(w.version>0&&B.__version!==w.version){ct(B,w,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function X(w,M){let B=n.get(w);if(w.version>0&&B.__version!==w.version){ct(B,w,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function W(w,M){let B=n.get(w);if(w.version>0&&B.__version!==w.version){xt(B,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}let $={[Bs]:i.REPEAT,[cn]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},j={[Fe]:i.NEAREST,[tc]:i.NEAREST_MIPMAP_NEAREST,[Wa]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[gd]:i.LINEAR_MIPMAP_NEAREST,[Hs]:i.LINEAR_MIPMAP_LINEAR},lt={[Rd]:i.NEVER,[Ud]:i.ALWAYS,[Cd]:i.LESS,[kh]:i.LEQUAL,[Pd]:i.EQUAL,[Dd]:i.GEQUAL,[Ld]:i.GREATER,[Id]:i.NOTEQUAL};function V(w,M,B){if(B?(i.texParameteri(w,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,$[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,j[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,j[M.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==cn||M.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,T(M.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Fe&&M.minFilter!==Be&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,lt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Fe||M.minFilter!==Wa&&M.minFilter!==Hs||M.type===jn&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===un&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Z(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));let Q=M.source,K=f.get(Q);K===void 0&&(K={},f.set(Q,K));let tt=N(M);if(tt!==w.__cacheKey){K[tt]===void 0&&(K[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[tt].usedTimes++;let mt=K[w.__cacheKey];mt!==void 0&&(K[w.__cacheKey].usedTimes--,mt.usedTimes===0&&b(M)),w.__cacheKey=tt,w.__webglTexture=K[tt].texture}return B}function ct(w,M,B){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);let K=Z(w,M),tt=M.source;e.bindTexture(Q,w.__webglTexture,i.TEXTURE0+B);let mt=n.get(tt);if(tt.version!==mt.__version||K===!0){e.activeTexture(i.TEXTURE0+B);let ot=qt.getPrimaries(qt.workingColorSpace),ut=M.colorSpace===sn?null:qt.getPrimaries(M.colorSpace),Et=M.colorSpace===sn||ot===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Bt=u(M)&&p(M.image)===!1,J=g(M.image,Bt,!1,s.maxTextureSize);J=Ft(M,J);let Jt=p(J)||a,Gt=r.convert(M.format,M.colorSpace),Rt=r.convert(M.type),yt=S(M.internalFormat,Gt,Rt,M.colorSpace,M.isVideoTexture);V(Q,M,Jt);let dt,Nt=M.mipmaps,Yt=a&&M.isVideoTexture!==!0&&yt!==Bh,de=mt.__version===void 0||K===!0,zt=C(M,J,Jt);if(M.isDepthTexture)yt=i.DEPTH_COMPONENT,a?M.type===jn?yt=i.DEPTH_COMPONENT32F:M.type===Kn?yt=i.DEPTH_COMPONENT24:M.type===Ei?yt=i.DEPTH24_STENCIL8:yt=i.DEPTH_COMPONENT16:M.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===wi&&yt===i.DEPTH_COMPONENT&&M.type!==ml&&M.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Kn,Rt=r.convert(M.type)),M.format===us&&yt===i.DEPTH_COMPONENT&&(yt=i.DEPTH_STENCIL,M.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ei,Rt=r.convert(M.type))),de&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,yt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,yt,J.width,J.height,0,Gt,Rt,null));else if(M.isDataTexture)if(Nt.length>0&&Jt){Yt&&de&&e.texStorage2D(i.TEXTURE_2D,zt,yt,Nt[0].width,Nt[0].height);for(let nt=0,P=Nt.length;nt<P;nt++)dt=Nt[nt],Yt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,dt.width,dt.height,Gt,Rt,dt.data):e.texImage2D(i.TEXTURE_2D,nt,yt,dt.width,dt.height,0,Gt,Rt,dt.data);M.generateMipmaps=!1}else Yt?(de&&e.texStorage2D(i.TEXTURE_2D,zt,yt,J.width,J.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,Gt,Rt,J.data)):e.texImage2D(i.TEXTURE_2D,0,yt,J.width,J.height,0,Gt,Rt,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Yt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,yt,Nt[0].width,Nt[0].height,J.depth);for(let nt=0,P=Nt.length;nt<P;nt++)dt=Nt[nt],M.format!==hn?Gt!==null?Yt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,J.depth,Gt,dt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,yt,dt.width,dt.height,J.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,J.depth,Gt,Rt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,yt,dt.width,dt.height,J.depth,0,Gt,Rt,dt.data)}else{Yt&&de&&e.texStorage2D(i.TEXTURE_2D,zt,yt,Nt[0].width,Nt[0].height);for(let nt=0,P=Nt.length;nt<P;nt++)dt=Nt[nt],M.format!==hn?Gt!==null?Yt?e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,dt.width,dt.height,Gt,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,yt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,dt.width,dt.height,Gt,Rt,dt.data):e.texImage2D(i.TEXTURE_2D,nt,yt,dt.width,dt.height,0,Gt,Rt,dt.data)}else if(M.isDataArrayTexture)Yt?(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,yt,J.width,J.height,J.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Gt,Rt,J.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,J.width,J.height,J.depth,0,Gt,Rt,J.data);else if(M.isData3DTexture)Yt?(de&&e.texStorage3D(i.TEXTURE_3D,zt,yt,J.width,J.height,J.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Gt,Rt,J.data)):e.texImage3D(i.TEXTURE_3D,0,yt,J.width,J.height,J.depth,0,Gt,Rt,J.data);else if(M.isFramebufferTexture){if(de)if(Yt)e.texStorage2D(i.TEXTURE_2D,zt,yt,J.width,J.height);else{let nt=J.width,P=J.height;for(let rt=0;rt<zt;rt++)e.texImage2D(i.TEXTURE_2D,rt,yt,nt,P,0,Gt,Rt,null),nt>>=1,P>>=1}}else if(Nt.length>0&&Jt){Yt&&de&&e.texStorage2D(i.TEXTURE_2D,zt,yt,Nt[0].width,Nt[0].height);for(let nt=0,P=Nt.length;nt<P;nt++)dt=Nt[nt],Yt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Gt,Rt,dt):e.texImage2D(i.TEXTURE_2D,nt,yt,Gt,Rt,dt);M.generateMipmaps=!1}else Yt?(de&&e.texStorage2D(i.TEXTURE_2D,zt,yt,J.width,J.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,Rt,J)):e.texImage2D(i.TEXTURE_2D,0,yt,Gt,Rt,J);v(M,Jt)&&x(Q),mt.__version=tt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function xt(w,M,B){if(M.image.length!==6)return;let Q=Z(w,M),K=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);let tt=n.get(K);if(K.version!==tt.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);let mt=qt.getPrimaries(qt.workingColorSpace),ot=M.colorSpace===sn?null:qt.getPrimaries(M.colorSpace),ut=M.colorSpace===sn||mt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Et=M.isCompressedTexture||M.image[0].isCompressedTexture,Bt=M.image[0]&&M.image[0].isDataTexture,J=[];for(let nt=0;nt<6;nt++)!Et&&!Bt?J[nt]=g(M.image[nt],!1,!0,s.maxCubemapSize):J[nt]=Bt?M.image[nt].image:M.image[nt],J[nt]=Ft(M,J[nt]);let Jt=J[0],Gt=p(Jt)||a,Rt=r.convert(M.format,M.colorSpace),yt=r.convert(M.type),dt=S(M.internalFormat,Rt,yt,M.colorSpace),Nt=a&&M.isVideoTexture!==!0,Yt=tt.__version===void 0||Q===!0,de=C(M,Jt,Gt);V(i.TEXTURE_CUBE_MAP,M,Gt);let zt;if(Et){Nt&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,de,dt,Jt.width,Jt.height);for(let nt=0;nt<6;nt++){zt=J[nt].mipmaps;for(let P=0;P<zt.length;P++){let rt=zt[P];M.format!==hn?Rt!==null?Nt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P,0,0,rt.width,rt.height,Rt,rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P,dt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P,0,0,rt.width,rt.height,Rt,yt,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P,dt,rt.width,rt.height,0,Rt,yt,rt.data)}}}else{zt=M.mipmaps,Nt&&Yt&&(zt.length>0&&de++,e.texStorage2D(i.TEXTURE_CUBE_MAP,de,dt,J[0].width,J[0].height));for(let nt=0;nt<6;nt++)if(Bt){Nt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,J[nt].width,J[nt].height,Rt,yt,J[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,J[nt].width,J[nt].height,0,Rt,yt,J[nt].data);for(let P=0;P<zt.length;P++){let at=zt[P].image[nt].image;Nt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P+1,0,0,at.width,at.height,Rt,yt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P+1,dt,at.width,at.height,0,Rt,yt,at.data)}}else{Nt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Rt,yt,J[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,Rt,yt,J[nt]);for(let P=0;P<zt.length;P++){let rt=zt[P];Nt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P+1,0,0,Rt,yt,rt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P+1,dt,Rt,yt,rt.image[nt])}}}v(M,Gt)&&x(i.TEXTURE_CUBE_MAP),tt.__version=K.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function _t(w,M,B,Q,K,tt){let mt=r.convert(B.format,B.colorSpace),ot=r.convert(B.type),ut=S(B.internalFormat,mt,ot,B.colorSpace);if(!n.get(M).__hasExternalTextures){let Bt=Math.max(1,M.width>>tt),J=Math.max(1,M.height>>tt);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,tt,ut,Bt,J,M.depth,0,mt,ot,null):e.texImage2D(K,tt,ut,Bt,J,0,mt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),pt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,n.get(B).__webglTexture,0,Ct(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,n.get(B).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(w,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let Q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||pt(M)){let K=M.depthTexture;K&&K.isDepthTexture&&(K.type===jn?Q=i.DEPTH_COMPONENT32F:K.type===Kn&&(Q=i.DEPTH_COMPONENT24));let tt=Ct(M);pt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,Q,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Q,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){let Q=Ct(M);B&&pt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,M.width,M.height):pt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let Q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let K=0;K<Q.length;K++){let tt=Q[K],mt=r.convert(tt.format,tt.colorSpace),ot=r.convert(tt.type),ut=S(tt.internalFormat,mt,ot,tt.colorSpace),Et=Ct(M);B&&pt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ut,M.width,M.height):pt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,ut,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ut,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);let Q=n.get(M.depthTexture).__webglTexture,K=Ct(M);if(M.depthTexture.format===wi)pt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===us)pt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function wt(w){let M=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ut(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=i.createRenderbuffer(),It(M.__webglDepthbuffer[Q],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),It(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(w,M,B){let Q=n.get(w);M!==void 0&&_t(Q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&wt(w)}function O(w){let M=w.texture,B=n.get(w),Q=n.get(M);w.addEventListener("dispose",I),w.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,o.memory.textures++);let K=w.isWebGLCubeRenderTarget===!0,tt=w.isWebGLMultipleRenderTargets===!0,mt=p(w)||a;if(K){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let ut=0;ut<M.mipmaps.length;ut++)B.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else B.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)B.__webglFramebuffer[ot]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(tt)if(s.drawBuffers){let ot=w.texture;for(let ut=0,Et=ot.length;ut<Et;ut++){let Bt=n.get(ot[ut]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&pt(w)===!1){let ot=tt?M:[M];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ut=0;ut<ot.length;ut++){let Et=ot[ut];B.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ut]);let Bt=r.convert(Et.format,Et.colorSpace),J=r.convert(Et.type),Jt=S(Et.internalFormat,Bt,J,Et.colorSpace,w.isXRRenderTarget===!0),Gt=Ct(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Jt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,B.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),It(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),V(i.TEXTURE_CUBE_MAP,M,mt);for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ut=0;ut<M.mipmaps.length;ut++)_t(B.__webglFramebuffer[ot][ut],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else _t(B.__webglFramebuffer[ot],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);v(M,mt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){let ot=w.texture;for(let ut=0,Et=ot.length;ut<Et;ut++){let Bt=ot[ut],J=n.get(Bt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),V(i.TEXTURE_2D,Bt,mt),_t(B.__webglFramebuffer,w,Bt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),v(Bt,mt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ot=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,Q.__webglTexture),V(ot,M,mt),a&&M.mipmaps&&M.mipmaps.length>0)for(let ut=0;ut<M.mipmaps.length;ut++)_t(B.__webglFramebuffer[ut],w,M,i.COLOR_ATTACHMENT0,ot,ut);else _t(B.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ot,0);v(M,mt)&&x(ot),e.unbindTexture()}w.depthBuffer&&wt(w)}function Ie(w){let M=p(w)||a,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0,K=B.length;Q<K;Q++){let tt=B[Q];if(v(tt,M)){let mt=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ot=n.get(tt).__webglTexture;e.bindTexture(mt,ot),x(mt),e.unbindTexture()}}}function Mt(w){if(a&&w.samples>0&&pt(w)===!1){let M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,Q=w.height,K=i.COLOR_BUFFER_BIT,tt=[],mt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(w),ut=w.isWebGLMultipleRenderTargets===!0;if(ut)for(let Et=0;Et<M.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){tt.push(i.COLOR_ATTACHMENT0+Et),w.depthBuffer&&tt.push(mt);let Bt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Bt===!1&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ut&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[Et]),Bt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[mt])),ut){let J=n.get(M[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,K,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Et=0;Et<M.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,ot.__webglColorRenderbuffer[Et]);let Bt=n.get(M[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function Ct(w){return Math.min(s.maxSamples,w.samples)}function pt(w){let M=n.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function he(w){let M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Ft(w,M){let B=w.colorSpace,Q=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Io||B!==kn&&B!==sn&&(qt.getTransfer(B)===Kt?a===!1?t.has("EXT_sRGB")===!0&&Q===hn?(w.format=Io,w.minFilter=Be,w.generateMipmaps=!1):M=Gr.sRGBToLinear(M):(Q!==hn||K!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Xt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=pt}function Eg(i,t,e){let n=e.isWebGL2;function s(r,o=sn){let a,l=qt.getTransfer(o);if(r===ei)return i.UNSIGNED_BYTE;if(r===Dh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Uh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===_d)return i.BYTE;if(r===xd)return i.SHORT;if(r===ml)return i.UNSIGNED_SHORT;if(r===Ih)return i.INT;if(r===Kn)return i.UNSIGNED_INT;if(r===jn)return i.FLOAT;if(r===un)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===vd)return i.ALPHA;if(r===hn)return i.RGBA;if(r===yd)return i.LUMINANCE;if(r===Md)return i.LUMINANCE_ALPHA;if(r===wi)return i.DEPTH_COMPONENT;if(r===us)return i.DEPTH_STENCIL;if(r===Io)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Sd)return i.RED;if(r===Nh)return i.RED_INTEGER;if(r===bd)return i.RG;if(r===Oh)return i.RG_INTEGER;if(r===Fh)return i.RGBA_INTEGER;if(r===Xa||r===qa||r===Ya||r===$a)if(l===Kt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ya)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$a)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ec||r===nc||r===ic||r===sc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ec)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ic)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===rc||r===ac)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===rc)return l===Kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ac)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===oc||r===lc||r===cc||r===hc||r===uc||r===dc||r===fc||r===pc||r===mc||r===gc||r===_c||r===xc||r===vc||r===yc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===oc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_c)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yc)return l===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Za||r===Mc||r===Sc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Za)return l===Kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Mc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ed||r===bc||r===Ec||r===wc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Za)return a.COMPRESSED_RED_RGTC1_EXT;if(r===bc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ec)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ei?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Yo=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ge=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},wg={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let p=e.getJointPose(g,n),u=this._getHandJoint(c,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$o=class extends ii{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,_=null,g=e.getContextAttributes(),p=null,u=null,v=[],x=[],S=new ft,C=null,T=new Re;T.layers.enable(1),T.viewport=new ae;let A=new Re;A.layers.enable(2),A.viewport=new ae;let I=[T,A],y=new Yo;y.layers.enable(1),y.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=v[V];return Z===void 0&&(Z=new Fs,v[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=v[V];return Z===void 0&&(Z=new Fs,v[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=v[V];return Z===void 0&&(Z=new Fs,v[V]=Z),Z.getHandSpace()};function H(V){let Z=x.indexOf(V.inputSource);if(Z===-1)return;let ct=v[Z];ct!==void 0&&(ct.update(V.inputSource,V.frame,c||o),ct.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",L);for(let V=0;V<v.length;V++){let Z=x[V];Z!==null&&(x[V]=null,v[V].disconnect(Z))}b=null,D=null,t.setRenderTarget(p),m=null,f=null,d=null,s=null,u=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Z={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new He(m.framebufferWidth,m.framebufferHeight,{format:hn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,ct=null,xt=null;g.depth&&(xt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=g.stencil?us:wi,ct=g.stencil?Ei:Kn);let _t={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(_t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new He(f.textureWidth,f.textureHeight,{format:hn,type:ei,depthTexture:new jr(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let It=t.properties.get(u);It.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(V){for(let Z=0;Z<V.removed.length;Z++){let ct=V.removed[Z],xt=x.indexOf(ct);xt>=0&&(x[xt]=null,v[xt].disconnect(ct))}for(let Z=0;Z<V.added.length;Z++){let ct=V.added[Z],xt=x.indexOf(ct);if(xt===-1){for(let It=0;It<v.length;It++)if(It>=x.length){x.push(ct),xt=It;break}else if(x[It]===null){x[It]=ct,xt=It;break}if(xt===-1)break}let _t=v[xt];_t&&_t.connect(ct)}}let N=new R,G=new R;function q(V,Z,ct){N.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(ct.matrixWorld);let xt=N.distanceTo(G),_t=Z.projectionMatrix.elements,It=ct.projectionMatrix.elements,Ut=_t[14]/(_t[10]-1),wt=_t[14]/(_t[10]+1),Xt=(_t[9]+1)/_t[5],O=(_t[9]-1)/_t[5],Ie=(_t[8]-1)/_t[0],Mt=(It[8]+1)/It[0],Ct=Ut*Ie,pt=Ut*Mt,he=xt/(-Ie+Mt),Ft=he*-Ie;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ft),V.translateZ(he),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let w=Ut+he,M=wt+he,B=Ct-Ft,Q=pt+(xt-Ft),K=Xt*wt/M*w,tt=O*wt/M*w;V.projectionMatrix.makePerspective(B,Q,K,tt,w,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;y.near=A.near=T.near=V.near,y.far=A.far=T.far=V.far,(b!==y.near||D!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,D=y.far);let Z=V.parent,ct=y.cameras;X(y,Z);for(let xt=0;xt<ct.length;xt++)X(ct[xt],Z);ct.length===2?q(y,T,A):y.projectionMatrix.copy(T.projectionMatrix),W(V,y,Z)};function W(V,Z,ct){ct===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(ct.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Do*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let $=null;function j(V,Z){if(h=Z.getViewerPose(c||o),_=Z,h!==null){let ct=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let xt=!1;ct.length!==y.cameras.length&&(y.cameras.length=0,xt=!0);for(let _t=0;_t<ct.length;_t++){let It=ct[_t],Ut=null;if(m!==null)Ut=m.getViewport(It);else{let Xt=d.getViewSubImage(f,It);Ut=Xt.viewport,_t===0&&(t.setRenderTargetTextures(u,Xt.colorTexture,f.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(u))}let wt=I[_t];wt===void 0&&(wt=new Re,wt.layers.enable(_t),wt.viewport=new ae,I[_t]=wt),wt.matrix.fromArray(It.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(It.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),_t===0&&(y.matrix.copy(wt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xt===!0&&y.cameras.push(wt)}}for(let ct=0;ct<v.length;ct++){let xt=x[ct],_t=v[ct];xt!==null&&_t!==void 0&&_t.update(xt,Z,c||o)}$&&$(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}let lt=new Xh;lt.setAnimationLoop(j),this.setAnimationLoop=function(V){$=V},this.dispose=function(){}}};function Tg(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Wh(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,v,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),g(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ce&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ce&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let v=t.get(u).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=x*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ce&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){let v=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ag(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){let S=x.program;n.uniformBlockBinding(v,S)}function c(v,x){let S=s[v.id];S===void 0&&(_(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",p));let C=x.program;n.updateUBOMapping(v,C);let T=t.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function h(v){let x=d();v.__bindingPointIndex=x;let S=i.createBuffer(),C=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let x=s[v.id],S=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=S.length;T<A;T++){let I=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,b=I.length;y<b;y++){let D=I[y];if(m(D,T,y,C)===!0){let H=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value],L=0;for(let N=0;N<Y.length;N++){let G=Y[N],q=g(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+L,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,x,S,C){let T=v.value,A=x+"_"+S;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let I=C[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function _(v){let x=v.uniforms,S=0,C=16;for(let A=0,I=x.length;A<I;A++){let y=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,D=y.length;b<D;b++){let H=y[b],Y=Array.isArray(H.value)?H.value:[H.value];for(let L=0,N=Y.length;L<N;L++){let G=Y[L],q=g(G),X=S%C;X!==0&&C-X<q.boundary&&(S+=C-X),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=q.storage}}}let T=S%C;return T>0&&(S+=C-T),v.__size=S,v.__cache={},this}function g(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){let x=v.target;x.removeEventListener("dispose",p);let S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var qs=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,u=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ie,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;let x=this,S=!1,C=0,T=0,A=null,I=-1,y=null,b=new ae,D=new ae,H=null,Y=new vt(0),L=0,N=e.width,G=e.height,q=1,X=null,W=null,$=new ae(0,0,N,G),j=new ae(0,0,N,G),lt=!1,V=new Gs,Z=!1,ct=!1,xt=null,_t=new oe,It=new ft,Ut=new R,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xt(){return A===null?q:1}let O=n;function Ie(E,U){for(let z=0;z<E.length;z++){let k=E[z],F=e.getContext(k,U);if(F!==null)return F}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",rt,!1),O===null){let U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),O=Ie(U,E),O===null)throw Ie(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Mt,Ct,pt,he,Ft,w,M,B,Q,K,tt,mt,ot,ut,Et,Bt,J,Jt,Gt,Rt,yt,dt,Nt,Yt;function de(){Mt=new qm(O),Ct=new zm(O,Mt,t),Mt.init(Ct),dt=new Eg(O,Mt,Ct),pt=new Sg(O,Mt,Ct),he=new Zm(O),Ft=new hg,w=new bg(O,Mt,pt,Ft,Ct,dt,he),M=new Vm(x),B=new Xm(x),Q=new nf(O,Ct),Nt=new Bm(O,Mt,Q,Ct),K=new Ym(O,Q,he,Nt),tt=new Qm(O,K,Q,he),Gt=new jm(O,Ct,w),Bt=new km(Ft),mt=new cg(x,M,B,Mt,Ct,Nt,Bt),ot=new Tg(x,Ft),ut=new dg,Et=new xg(Mt,Ct),Jt=new Fm(x,M,B,pt,tt,f,l),J=new Mg(x,tt,Ct),Yt=new Ag(O,he,Ct,pt),Rt=new Hm(O,Mt,he,Ct),yt=new $m(O,Mt,he,Ct),he.programs=mt.programs,x.capabilities=Ct,x.extensions=Mt,x.properties=Ft,x.renderLists=ut,x.shadowMap=J,x.state=pt,x.info=he}de();let zt=new $o(x,O);this.xr=zt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=Mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(N,G,!1))},this.getSize=function(E){return E.set(N,G)},this.setSize=function(E,U,z=!0){if(zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,G=U,e.width=Math.floor(E*q),e.height=Math.floor(U*q),z===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(N*q,G*q).floor()},this.setDrawingBufferSize=function(E,U,z){N=E,G=U,q=z,e.width=Math.floor(E*z),e.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,U,z,k){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,U,z,k),pt.viewport(b.copy($).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,U,z,k){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,U,z,k),pt.scissor(D.copy(j).multiplyScalar(q).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){pt.setScissorTest(lt=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){W=E},this.getClearColor=function(E){return E.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(E=!0,U=!0,z=!0){let k=0;if(E){let F=!1;if(A!==null){let ht=A.texture.format;F=ht===Fh||ht===Oh||ht===Nh}if(F){let ht=A.texture.type,gt=ht===ei||ht===Kn||ht===ml||ht===Ei||ht===Dh||ht===Uh,bt=Jt.getClearColor(),At=Jt.getClearAlpha(),Ht=bt.r,Pt=bt.g,Dt=bt.b;gt?(m[0]=Ht,m[1]=Pt,m[2]=Dt,m[3]=At,O.clearBufferuiv(O.COLOR,0,m)):(_[0]=Ht,_[1]=Pt,_[2]=Dt,_[3]=At,O.clearBufferiv(O.COLOR,0,_))}else k|=O.COLOR_BUFFER_BIT}U&&(k|=O.DEPTH_BUFFER_BIT),z&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ut.dispose(),Et.dispose(),Ft.dispose(),M.dispose(),B.dispose(),tt.dispose(),Nt.dispose(),Yt.dispose(),mt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",De),zt.removeEventListener("sessionend",ne),xt&&(xt.dispose(),xt=null),Ue.stop()};function nt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let E=he.autoReset,U=J.enabled,z=J.autoUpdate,k=J.needsUpdate,F=J.type;de(),he.autoReset=E,J.enabled=U,J.autoUpdate=z,J.needsUpdate=k,J.type=F}function rt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function at(E){let U=E.target;U.removeEventListener("dispose",at),Tt(U)}function Tt(E){St(E),Ft.remove(E)}function St(E){let U=Ft.get(E).programs;U!==void 0&&(U.forEach(function(z){mt.releaseProgram(z)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,k,F,ht){U===null&&(U=wt);let gt=F.isMesh&&F.matrixWorld.determinant()<0,bt=Fu(E,U,z,k,F);pt.setMaterial(k,gt);let At=z.index,Ht=1;if(k.wireframe===!0){if(At=K.getWireframeAttribute(z),At===void 0)return;Ht=2}let Pt=z.drawRange,Dt=z.attributes.position,me=Pt.start*Ht,Ye=(Pt.start+Pt.count)*Ht;ht!==null&&(me=Math.max(me,ht.start*Ht),Ye=Math.min(Ye,(ht.start+ht.count)*Ht)),At!==null?(me=Math.max(me,0),Ye=Math.min(Ye,At.count)):Dt!=null&&(me=Math.max(me,0),Ye=Math.min(Ye,Dt.count));let Me=Ye-me;if(Me<0||Me===1/0)return;Nt.setup(F,k,bt,z,At);let Ln,ue=Rt;if(At!==null&&(Ln=Q.get(At),ue=yt,ue.setIndex(Ln)),F.isMesh)k.wireframe===!0?(pt.setLineWidth(k.wireframeLinewidth*Xt()),ue.setMode(O.LINES)):ue.setMode(O.TRIANGLES);else if(F.isLine){let kt=k.linewidth;kt===void 0&&(kt=1),pt.setLineWidth(kt*Xt()),F.isLineSegments?ue.setMode(O.LINES):F.isLineLoop?ue.setMode(O.LINE_LOOP):ue.setMode(O.LINE_STRIP)}else F.isPoints?ue.setMode(O.POINTS):F.isSprite&&ue.setMode(O.TRIANGLES);if(F.isBatchedMesh)ue.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)ue.renderInstances(me,Me,F.count);else if(z.isInstancedBufferGeometry){let kt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,za=Math.min(z.instanceCount,kt);ue.renderInstances(me,Me,za)}else ue.render(me,Me)};function te(E,U,z){E.transparent===!0&&E.side===Ve&&E.forceSinglePass===!1?(E.side=Ce,E.needsUpdate=!0,ar(E,U,z),E.side=Mn,E.needsUpdate=!0,ar(E,U,z),E.side=Ve):ar(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),p=Et.get(z),p.init(),v.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(x._useLegacyLights);let k=new Set;return E.traverse(function(F){let ht=F.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){let bt=ht[gt];te(bt,z,F),k.add(bt)}else te(ht,z,F),k.add(ht)}),v.pop(),p=null,k},this.compileAsync=function(E,U,z=null){let k=this.compile(E,U,z);return new Promise(F=>{function ht(){if(k.forEach(function(gt){Ft.get(gt).currentProgram.isReady()&&k.delete(gt)}),k.size===0){F(E);return}setTimeout(ht,10)}Mt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ee=null;function ye(E){ee&&ee(E)}function De(){Ue.stop()}function ne(){Ue.start()}let Ue=new Xh;Ue.setAnimationLoop(ye),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(E){ee=E,zt.setAnimationLoop(E),E===null?Ue.stop():Ue.start()},zt.addEventListener("sessionstart",De),zt.addEventListener("sessionend",ne),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(U),U=zt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,A),p=Et.get(E,v.length),p.init(),v.push(p),_t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V.setFromProjectionMatrix(_t),ct=this.localClippingEnabled,Z=Bt.init(this.clippingPlanes,ct),g=ut.get(E,u.length),g.init(),u.push(g),xn(E,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(X,W),this.info.render.frame++,Z===!0&&Bt.beginShadows();let z=p.state.shadowsArray;if(J.render(z,E,U),Z===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Jt.render(g,E),p.setupLights(x._useLegacyLights),U.isArrayCamera){let k=U.cameras;for(let F=0,ht=k.length;F<ht;F++){let gt=k[F];Gl(g,E,gt,gt.viewport)}}else Gl(g,E,U);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(x,E,U),Nt.resetDefaultState(),I=-1,y=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function xn(E,U,z,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){k&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);let gt=tt.update(E),bt=E.material;bt.visible&&g.push(E,gt,bt,z,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){let gt=tt.update(E),bt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ut.copy(gt.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(bt)){let At=gt.groups;for(let Ht=0,Pt=At.length;Ht<Pt;Ht++){let Dt=At[Ht],me=bt[Dt.materialIndex];me&&me.visible&&g.push(E,gt,me,z,Ut.z,Dt)}}else bt.visible&&g.push(E,gt,bt,z,Ut.z,null)}}let ht=E.children;for(let gt=0,bt=ht.length;gt<bt;gt++)xn(ht[gt],U,z,k)}function Gl(E,U,z,k){let F=E.opaque,ht=E.transmissive,gt=E.transparent;p.setupLightsView(z),Z===!0&&Bt.setGlobalState(x.clippingPlanes,z),ht.length>0&&Ou(F,ht,U,z),k&&pt.viewport(b.copy(k)),F.length>0&&rr(F,U,z),ht.length>0&&rr(ht,U,z),gt.length>0&&rr(gt,U,z),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Ou(E,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let ht=Ct.isWebGL2;xt===null&&(xt=new He(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?un:ei,minFilter:Hs,samples:ht?4:0})),x.getDrawingBufferSize(It),ht?xt.setSize(It.x,It.y):xt.setSize(Uo(It.x),Uo(It.y));let gt=x.getRenderTarget();x.setRenderTarget(xt),x.getClearColor(Y),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let bt=x.toneMapping;x.toneMapping=ti,rr(E,z,k),w.updateMultisampleRenderTarget(xt),w.updateRenderTargetMipmap(xt);let At=!1;for(let Ht=0,Pt=U.length;Ht<Pt;Ht++){let Dt=U[Ht],me=Dt.object,Ye=Dt.geometry,Me=Dt.material,Ln=Dt.group;if(Me.side===Ve&&me.layers.test(k.layers)){let ue=Me.side;Me.side=Ce,Me.needsUpdate=!0,Wl(me,z,k,Ye,Me,Ln),Me.side=ue,Me.needsUpdate=!0,At=!0}}At===!0&&(w.updateMultisampleRenderTarget(xt),w.updateRenderTargetMipmap(xt)),x.setRenderTarget(gt),x.setClearColor(Y,L),x.toneMapping=bt}function rr(E,U,z){let k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ht=E.length;F<ht;F++){let gt=E[F],bt=gt.object,At=gt.geometry,Ht=k===null?gt.material:k,Pt=gt.group;bt.layers.test(z.layers)&&Wl(bt,U,z,At,Ht,Pt)}}function Wl(E,U,z,k,F,ht){E.onBeforeRender(x,U,z,k,F,ht),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,U,z,k,E,ht),F.transparent===!0&&F.side===Ve&&F.forceSinglePass===!1?(F.side=Ce,F.needsUpdate=!0,x.renderBufferDirect(z,U,k,F,E,ht),F.side=Mn,F.needsUpdate=!0,x.renderBufferDirect(z,U,k,F,E,ht),F.side=Ve):x.renderBufferDirect(z,U,k,F,E,ht),E.onAfterRender(x,U,z,k,F,ht)}function ar(E,U,z){U.isScene!==!0&&(U=wt);let k=Ft.get(E),F=p.state.lights,ht=p.state.shadowsArray,gt=F.state.version,bt=mt.getParameters(E,F.state,ht,U,z),At=mt.getProgramCacheKey(bt),Ht=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||k.environment),Ht===void 0&&(E.addEventListener("dispose",at),Ht=new Map,k.programs=Ht);let Pt=Ht.get(At);if(Pt!==void 0){if(k.currentProgram===Pt&&k.lightsStateVersion===gt)return ql(E,bt),Pt}else bt.uniforms=mt.getUniforms(E),E.onBuild(z,bt,x),E.onBeforeCompile(bt,x),Pt=mt.acquireProgram(bt,At),Ht.set(At,Pt),k.uniforms=bt.uniforms;let Dt=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=Bt.uniform),ql(E,bt),k.needsLights=Hu(E),k.lightsStateVersion=gt,k.needsLights&&(Dt.ambientLightColor.value=F.state.ambient,Dt.lightProbe.value=F.state.probe,Dt.directionalLights.value=F.state.directional,Dt.directionalLightShadows.value=F.state.directionalShadow,Dt.spotLights.value=F.state.spot,Dt.spotLightShadows.value=F.state.spotShadow,Dt.rectAreaLights.value=F.state.rectArea,Dt.ltc_1.value=F.state.rectAreaLTC1,Dt.ltc_2.value=F.state.rectAreaLTC2,Dt.pointLights.value=F.state.point,Dt.pointLightShadows.value=F.state.pointShadow,Dt.hemisphereLights.value=F.state.hemi,Dt.directionalShadowMap.value=F.state.directionalShadowMap,Dt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Dt.spotShadowMap.value=F.state.spotShadowMap,Dt.spotLightMatrix.value=F.state.spotLightMatrix,Dt.spotLightMap.value=F.state.spotLightMap,Dt.pointShadowMap.value=F.state.pointShadowMap,Dt.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Pt,k.uniformsList=null,Pt}function Xl(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=ls.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ql(E,U){let z=Ft.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Fu(E,U,z,k,F){U.isScene!==!0&&(U=wt),w.resetTextureUnits();let ht=U.fog,gt=k.isMeshStandardMaterial?U.environment:null,bt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:kn,At=(k.isMeshStandardMaterial?B:M).get(k.envMap||gt),Ht=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Dt=!!z.morphAttributes.position,me=!!z.morphAttributes.normal,Ye=!!z.morphAttributes.color,Me=ti;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=x.toneMapping);let Ln=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=Ln!==void 0?Ln.length:0,kt=Ft.get(k),za=p.state.lights;if(Z===!0&&(ct===!0||E!==y)){let en=E===y&&k.id===I;Bt.setState(k,E,en)}let fe=!1;k.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==za.state.version||kt.outputColorSpace!==bt||F.isBatchedMesh&&kt.batching===!1||!F.isBatchedMesh&&kt.batching===!0||F.isInstancedMesh&&kt.instancing===!1||!F.isInstancedMesh&&kt.instancing===!0||F.isSkinnedMesh&&kt.skinning===!1||!F.isSkinnedMesh&&kt.skinning===!0||F.isInstancedMesh&&kt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&kt.instancingColor===!1&&F.instanceColor!==null||kt.envMap!==At||k.fog===!0&&kt.fog!==ht||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Bt.numPlanes||kt.numIntersection!==Bt.numIntersection)||kt.vertexAlphas!==Ht||kt.vertexTangents!==Pt||kt.morphTargets!==Dt||kt.morphNormals!==me||kt.morphColors!==Ye||kt.toneMapping!==Me||Ct.isWebGL2===!0&&kt.morphTargetsCount!==ue)&&(fe=!0):(fe=!0,kt.__version=k.version);let pi=kt.currentProgram;fe===!0&&(pi=ar(k,U,F));let Yl=!1,As=!1,ka=!1,we=pi.getUniforms(),mi=kt.uniforms;if(pt.useProgram(pi.program)&&(Yl=!0,As=!0,ka=!0),k.id!==I&&(I=k.id,As=!0),Yl||y!==E){we.setValue(O,"projectionMatrix",E.projectionMatrix),we.setValue(O,"viewMatrix",E.matrixWorldInverse);let en=we.map.cameraPosition;en!==void 0&&en.setValue(O,Ut.setFromMatrixPosition(E.matrixWorld)),Ct.logarithmicDepthBuffer&&we.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&we.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,As=!0,ka=!0)}if(F.isSkinnedMesh){we.setOptional(O,F,"bindMatrix"),we.setOptional(O,F,"bindMatrixInverse");let en=F.skeleton;en&&(Ct.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),we.setValue(O,"boneTexture",en.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(we.setOptional(O,F,"batchingTexture"),we.setValue(O,"batchingTexture",F._matricesTexture,w));let Va=z.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0&&Ct.isWebGL2===!0)&&Gt.update(F,z,pi),(As||kt.receiveShadow!==F.receiveShadow)&&(kt.receiveShadow=F.receiveShadow,we.setValue(O,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(mi.envMap.value=At,mi.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),As&&(we.setValue(O,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&Bu(mi,ka),ht&&k.fog===!0&&ot.refreshFogUniforms(mi,ht),ot.refreshMaterialUniforms(mi,k,q,G,xt),ls.upload(O,Xl(kt),mi,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ls.upload(O,Xl(kt),mi,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&we.setValue(O,"center",F.center),we.setValue(O,"modelViewMatrix",F.modelViewMatrix),we.setValue(O,"normalMatrix",F.normalMatrix),we.setValue(O,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let en=k.uniformsGroups;for(let Ga=0,zu=en.length;Ga<zu;Ga++)if(Ct.isWebGL2){let $l=en[Ga];Yt.update($l,pi),Yt.bind($l,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function Bu(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Hu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,U,z){Ft.get(E.texture).__webglTexture=U,Ft.get(E.depthTexture).__webglTexture=z;let k=Ft.get(E);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){let z=Ft.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,z=0){A=E,C=U,T=z;let k=!0,F=null,ht=!1,gt=!1;if(E){let At=Ft.get(E);At.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(O.FRAMEBUFFER,null),k=!1):At.__webglFramebuffer===void 0?w.setupRenderTarget(E):At.__hasExternalTextures&&w.rebindTextures(E,Ft.get(E.texture).__webglTexture,Ft.get(E.depthTexture).__webglTexture);let Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(gt=!0);let Pt=Ft.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?F=Pt[U][z]:F=Pt[U],ht=!0):Ct.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?F=Ft.get(E).__webglMultisampledFramebuffer:Array.isArray(Pt)?F=Pt[z]:F=Pt,b.copy(E.viewport),D.copy(E.scissor),H=E.scissorTest}else b.copy($).multiplyScalar(q).floor(),D.copy(j).multiplyScalar(q).floor(),H=lt;if(pt.bindFramebuffer(O.FRAMEBUFFER,F)&&Ct.drawBuffers&&k&&pt.drawBuffers(E,F),pt.viewport(b),pt.scissor(D),pt.setScissorTest(H),ht){let At=Ft.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,At.__webglTexture,z)}else if(gt){let At=Ft.get(E.texture),Ht=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.__webglTexture,z||0,Ht)}I=-1},this.readRenderTargetPixels=function(E,U,z,k,F,ht,gt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ft.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(bt=bt[gt]),bt){pt.bindFramebuffer(O.FRAMEBUFFER,bt);try{let At=E.texture,Ht=At.format,Pt=At.type;if(Ht!==hn&&dt.convert(Ht)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Dt=Pt===un&&(Mt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Pt!==ei&&dt.convert(Pt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===jn&&(Ct.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&z>=0&&z<=E.height-F&&O.readPixels(U,z,k,F,dt.convert(Ht),dt.convert(Pt),ht)}finally{let At=A!==null?Ft.get(A).__webglFramebuffer:null;pt.bindFramebuffer(O.FRAMEBUFFER,At)}}},this.copyFramebufferToTexture=function(E,U,z=0){let k=Math.pow(2,-z),F=Math.floor(U.image.width*k),ht=Math.floor(U.image.height*k);w.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,E.x,E.y,F,ht),pt.unbindTexture()},this.copyTextureToTexture=function(E,U,z,k=0){let F=U.image.width,ht=U.image.height,gt=dt.convert(z.format),bt=dt.convert(z.type);w.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,k,E.x,E.y,F,ht,gt,bt,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,k,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,gt,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,k,E.x,E.y,gt,bt,U.image),k===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z,k,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ht=E.max.x-E.min.x+1,gt=E.max.y-E.min.y+1,bt=E.max.z-E.min.z+1,At=dt.convert(k.format),Ht=dt.convert(k.type),Pt;if(k.isData3DTexture)w.setTexture3D(k,0),Pt=O.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)w.setTexture2DArray(k,0),Pt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let Dt=O.getParameter(O.UNPACK_ROW_LENGTH),me=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ye=O.getParameter(O.UNPACK_SKIP_PIXELS),Me=O.getParameter(O.UNPACK_SKIP_ROWS),Ln=O.getParameter(O.UNPACK_SKIP_IMAGES),ue=z.isCompressedTexture?z.mipmaps[F]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ue.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ue.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(Pt,F,U.x,U.y,U.z,ht,gt,bt,At,Ht,ue.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Pt,F,U.x,U.y,U.z,ht,gt,bt,At,ue.data)):O.texSubImage3D(Pt,F,U.x,U.y,U.z,ht,gt,bt,At,Ht,ue),O.pixelStorei(O.UNPACK_ROW_LENGTH,Dt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ye),O.pixelStorei(O.UNPACK_SKIP_ROWS,Me),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ln),F===0&&k.generateMipmaps&&O.generateMipmap(Pt),pt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,pt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===gl?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ie?Ti:Hh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ti?ie:kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Zo=class extends qs{};Zo.prototype.isWebGL1Renderer=!0;var Qr=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Jo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ne=new R,ta=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dn=class extends bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},es,Is=new R,ns=new R,is=new R,ss=new ft,Ds=new ft,Kh=new oe,Cr=new R,Us=new R,Pr=new R,mh=new ft,So=new ft,gh=new ft,En=class extends ze{constructor(t=new dn){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new Zt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jo(e,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new ta(n,3,0,!1)),es.setAttribute("uv",new ta(n,2,3,!1))}this.geometry=es,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),Kh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Lr(Cr.set(-.5,-.5,0),is,o,ns,s,r),Lr(Us.set(.5,-.5,0),is,o,ns,s,r),Lr(Pr.set(.5,.5,0),is,o,ns,s,r),mh.set(0,0),So.set(1,0),gh.set(1,1);let a=t.ray.intersectTriangle(Cr,Us,Pr,!1,Is);if(a===null&&(Lr(Us.set(-.5,.5,0),is,o,ns,s,r),So.set(0,1),a=t.ray.intersectTriangle(Cr,Pr,Us,!1,Is),a===null))return;let l=t.ray.origin.distanceTo(Is);l<t.near||l>t.far||e.push({distance:l,point:Is.clone(),uv:bi.getInterpolation(Is,Cr,Us,Pr,mh,So,gh,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Lr(i,t,e,n,s,r){ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ds.x=r*ss.x-s*ss.y,Ds.y=s*ss.x+r*ss.y):Ds.copy(ss),i.copy(t),i.x+=Ds.x,i.y+=Ds.y,i.applyMatrix4(Kh)}var wn=class extends bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_h=new R,xh=new R,vh=new oe,bo=new ks,Ir=new Ri,ea=class extends ze{constructor(t=new Zt,e=new wn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_h.fromBufferAttribute(e,s-1),xh.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_h.distanceTo(xh);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;vh.copy(s).invert(),bo.copy(t.ray).applyMatrix4(vh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,d=new R,f=new R,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){let u=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let x=u,S=v-1;x<S;x+=m){let C=_.getX(x),T=_.getX(x+1);if(c.fromBufferAttribute(p,C),h.fromBufferAttribute(p,T),bo.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(f);I<t.near||I>t.far||e.push({distance:I,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let u=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=u,S=v-1;x<S;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),bo.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},yh=new R,Mh=new R,na=class extends ea{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)yh.fromBufferAttribute(e,s),Mh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yh.distanceTo(Mh);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ci=class extends ea{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Pi=class extends bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sh=new oe,Ko=new ks,Dr=new Ri,Ur=new R,Tn=class extends ze{constructor(t=new Zt,e=new Pi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;Sh.copy(s).invert(),Ko.copy(t.ray).applyMatrix4(Sh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,g=m;_<g;_++){let p=c.getX(_);Ur.fromBufferAttribute(d,p),bh(Ur,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m;_<g;_++)Ur.fromBufferAttribute(d,_),bh(Ur,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bh(i,t,e,n,s,r,o){let a=Ko.distanceSqToPoint(i);if(a<e){let l=new R;Ko.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var fn=class extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ia=class i extends Zt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let m=n+d/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},sa=class i extends Zt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],m=[],_=0,g=[],p=n/2,u=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(m,2));function v(){let S=new R,C=new R,T=0,A=(e-t)/n;for(let I=0;I<=r;I++){let y=[],b=I/r,D=b*(e-t)+t;for(let H=0;H<=s;H++){let Y=H/s,L=Y*l+a,N=Math.sin(L),G=Math.cos(L);C.x=D*N,C.y=-b*n+p,C.z=D*G,d.push(C.x,C.y,C.z),S.set(N,A,G).normalize(),f.push(S.x,S.y,S.z),m.push(Y,1-b),y.push(_++)}g.push(y)}for(let I=0;I<s;I++)for(let y=0;y<r;y++){let b=g[y][I],D=g[y+1][I],H=g[y+1][I+1],Y=g[y][I+1];h.push(b,D,Y),h.push(D,H,Y),T+=6}c.addGroup(u,T,0),u+=T}function x(S){let C=_,T=new ft,A=new R,I=0,y=S===!0?t:e,b=S===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),_++;let D=_;for(let H=0;H<=s;H++){let L=H/s*l+a,N=Math.cos(L),G=Math.sin(L);A.x=y*G,A.y=p*b,A.z=y*N,d.push(A.x,A.y,A.z),f.push(0,b,0),T.x=N*.5+.5,T.y=G*.5*b+.5,m.push(T.x,T.y),_++}for(let H=0;H<s;H++){let Y=C+H,L=D+H;S===!0?h.push(L,L+1,Y):h.push(L+1,L,Y),I+=3}c.addGroup(u,I,S===!0?1:2),u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var jo=class i extends Zt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let x=new R,S=new R,C=new R;for(let T=0;T<e.length;T+=3)m(e[T+0],x),m(e[T+1],S),m(e[T+2],C),l(x,S,C,v)}function l(v,x,S,C){let T=C+1,A=[];for(let I=0;I<=T;I++){A[I]=[];let y=v.clone().lerp(S,I/T),b=x.clone().lerp(S,I/T),D=T-I;for(let H=0;H<=D;H++)H===0&&I===T?A[I][H]=y:A[I][H]=y.clone().lerp(b,H/D)}for(let I=0;I<T;I++)for(let y=0;y<2*(T-I)-1;y++){let b=Math.floor(y/2);y%2===0?(f(A[I][b+1]),f(A[I+1][b]),f(A[I][b])):(f(A[I][b+1]),f(A[I+1][b+1]),f(A[I+1][b]))}}function c(v){let x=new R;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(v),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function h(){let v=new R;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let S=p(v)/2/Math.PI+.5,C=u(v)/Math.PI+.5;o.push(S,1-C)}_(),d()}function d(){for(let v=0;v<o.length;v+=6){let x=o[v+0],S=o[v+2],C=o[v+4],T=Math.max(x,S,C),A=Math.min(x,S,C);T>.9&&A<.1&&(x<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function m(v,x){let S=v*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function _(){let v=new R,x=new R,S=new R,C=new R,T=new ft,A=new ft,I=new ft;for(let y=0,b=0;y<r.length;y+=9,b+=6){v.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),T.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),C.copy(v).add(x).add(S).divideScalar(3);let D=p(C);g(T,b+0,v,D),g(A,b+2,x,D),g(I,b+4,S,D)}}function g(v,x,S,C){C<0&&v.x===1&&(o[x]=v.x-1),S.x===0&&S.z===0&&(o[x]=C/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var ra=class i extends jo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ys=class i extends Zt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,f=(e-t)/s,m=new R,_=new ft;for(let g=0;g<=s;g++){for(let p=0;p<=n;p++){let u=r+p/n*o;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,h.push(_.x,_.y)}d+=f}for(let g=0;g<s;g++){let p=g*(n+1);for(let u=0;u<n;u++){let v=u+p,x=v,S=v+n+1,C=v+n+2,T=v+1;a.push(x,S,T),a.push(S,C,T)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var pn=class i extends Zt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new R,f=new R,m=[],_=[],g=[],p=[];for(let u=0;u<=n;u++){let v=[],x=u/n,S=0;u===0&&o===0?S=.5/e:u===n&&l===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){let T=C/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(T+S,1-x),v.push(c++)}h.push(v)}for(let u=0;u<n;u++)for(let v=0;v<e;v++){let x=h[u][v+1],S=h[u][v],C=h[u+1][v],T=h[u+1][v+1];(u!==0||o>0)&&m.push(x,S,T),(u!==n-1||l<Math.PI)&&m.push(S,C,T)}this.setIndex(m),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(g,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var aa=class extends ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},si=class extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Nr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Rg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ps=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qo=class extends ps{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ac:r=t,a=2*e-n;break;case Rc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ac:o=t,l=2*n-e;break;case Rc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),g=_*_,p=g*_,u=-f*p+2*f*g-f*_,v=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,x=(-1-m)*p+(1.5+m)*g+.5*_,S=m*p-m*g;for(let C=0;C!==a;++C)r[C]=u*o[h+C]+v*o[c+C]+x*o[l+C]+S*o[d+C];return r}},tl=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},el=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Nr(e,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Nr(t.times,Array),values:Nr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fr:e=this.InterpolantFactoryMethodDiscrete;break;case Br:e=this.InterpolantFactoryMethodLinear;break;case Ja:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return Ja}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Rg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ja,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,m=d+n;for(let _=0;_!==n;++_){let g=e[d+_];if(g!==e[f+_]||g!==e[m+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Br;var Li=class extends mn{};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Fr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends mn{};nl.prototype.ValueTypeName="color";var il=class extends mn{};il.prototype.ValueTypeName="number";var sl=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Sn.slerpFlat(r,0,o,c-a,o,c,l);return r}},$s=class extends mn{InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.DefaultInterpolation=Br;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends mn{};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Fr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends mn{};rl.prototype.ValueTypeName="vector";var Eh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},al=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},xl=new al,Zs=class{constructor(t){this.manager=t!==void 0?t:xl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Zs.DEFAULT_MATERIAL_NAME="__DEFAULT";var ol=class extends Zs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Eh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=zs("img");function l(){h(),Eh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var ms=class extends Zs{constructor(t){super(t)}load(t,e,n,s){let r=new Je,o=new ol(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},oa=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Eo=new oe,wh=new R,Th=new R,ll=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(wh),Th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Th),e.updateMatrixWorld(),Eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ah=new oe,Ns=new R,wo=new R,cl=class extends ll{constructor(){super(new Re(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ns),wo.copy(n.position),wo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wo),n.updateMatrixWorld(),s.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah)}},Js=class extends oa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var la=class extends oa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var gs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Rh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Rh(){return(typeof performance>"u"?Date:performance).now()}var vl="\\[\\]\\.:\\/",Cg=new RegExp("["+vl+"]","g"),yl="[^"+vl+"]",Pg="[^"+vl.replace("\\.","")+"]",Lg=/((?:WC+[\/:])*)/.source.replace("WC",yl),Ig=/(WCOD+)?/.source.replace("WCOD",Pg),Dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),Ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),Ng=new RegExp("^"+Lg+Ig+Dg+Ug+"$"),Og=["material","materials","bones","map"],hl=class{constructor(t,e,n){let s=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cg,"")}static parseTrackName(t){let e=Ng.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Og.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=hl;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var da={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ke=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Fg=new Xs(-1,1,1,-1,0,1),Ml=class extends Zt{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}},Bg=new Ml,ai=class{constructor(t){this._mesh=new Qt(Bg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Fg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var fa=class extends Ke{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ri.clone(t.uniforms),this.material=new ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ai(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qs=class extends Ke{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},pa=class extends Ke{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ma=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ft);this._width=n.width,this._height=n.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fa(da),this.copyPass.material.blending=yn,this.clock=new gs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qs!==void 0&&(o instanceof Qs?n=!0:o instanceof pa&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ga=class extends Ke{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new vt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var jh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var xs=class i extends Ke{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ft(t.x,t.y):new ft(256,256),this.clearColor=new vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new He(r,o,{type:un});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let m=new He(r,o,{type:un});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=jh;this.highPassUniforms=ri.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ce({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ft(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=da;this.copyUniforms=ri.clone(h.uniforms),this.blendMaterial=new ce({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ee,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new vt,this.oldClearAlpha=1,this.basic=new We,this.fsQuad=new ai(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ft(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};xs.BlurDirectionX=new ft(1,0);xs.BlurDirectionY=new ft(0,1);var Qh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var _a=class extends Ke{constructor(){super();let t=Qh;this.uniforms=ri.clone(t.uniforms),this.material=new aa({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ai(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===Kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ul?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ks?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Vn=[{id:"mercury",color:"#a89c8d",en:"MERCURY",cn:"水星",type:"rocky",tex:"planets/mercury-4k.jpg",au:.387,elements:{a:.3871,e:.2056,i:7.005,node:48.331,peri:77.456,l0:252.251,period:87.969},displayR:.304,spin:.017,radiusKm:2440,gravity:3.7,periodDays:87.97,rotationHours:1407.6,tempC:"-173 ~ 427",moons:0,sections:[{t:"概览",text:"离太阳最近的行星，也是八大行星里最小的一颗。它以 88 天的速度绕日狂奔，罗马人因此把它当作信使之神墨丘利。表面与月球惊人地相似，布满 40 多亿年来的陨击疤痕。"},{t:"大气与表面",text:"几乎没有真正的大气，只有一层稀薄到可以忽略的外逸层，成分是氧、钠、氢。白天阳光直射处高达 427°C，夜晚骤降到 -173°C，是太阳系昼夜温差最大的世界。卡路里盆地直径 1550 公里，是它最醒目的地貌。"},{t:"卫星与探测",text:"水星没有卫星。人类对它知之甚少：1974 年水手 10 号首次飞掠，2011 年信使号进入环绕轨道，绘制了全星表面地图；2026 年 11 月起，欧日联合的贝皮科伦坡号进入环绕轨道，接棒继续解码这颗灼热的金属世界。"},{t:"怎样看到它",text:"离太阳太近，只在日出前或日落后很短的时间里贴地平线出现，是八大行星中最难用肉眼捕捉的一颗。传说哥白尼终生没能亲眼见到它——要看清它，最好等它处在“东大距”或“西大距”时，用双筒望远镜在对准地平线的开阔处扫过去。"}]},{id:"venus",color:"#e0c489",atmo:"#f2ddb0",en:"VENUS",cn:"金星",type:"venus",tex:"planets/venus-2k.jpg",au:.723,elements:{a:.7233,e:.0068,i:3.395,node:76.68,peri:131.533,l0:181.98,period:224.701},displayR:.446,spin:-.004,radiusKm:6052,gravity:8.87,periodDays:224.7,rotationHours:-5832.5,tempC:"464（均温）",moons:0,sections:[{t:"概览",text:"夜空中最亮的行星，中国人称它启明星与长庚星。大小与地球相仿，却是同一颗太阳下走向两个极端的孪生兄弟——464°C 的均温让它成为太阳系最热的行星。"},{t:"大气与表面",text:"96.5% 二氧化碳构成的浓密大气压在地表，气压是地球的 92 倍，相当于地球海面下一公里。硫酸云永久遮蔽天空，云顶风速可达每小时 360 公里。它还是逆向自转的两颗大行星之一（另一颗是天王星）：一个金星日比一个金星年还长。"},{t:"卫星与探测",text:"金星没有卫星。苏联 Venera 系列探测器在 1970–80 年代陆续着陆，传回地表照片——每个都只存活了几十分钟便被高温高压摧毁；麦哲伦号雷达则揭开了它火山密布的表面。"},{t:"怎样看到它",text:"最亮时约 -4.9 等，比夜空中任何恒星都亮。日落后西方天空的“长庚星”、日出前东方的“启明星”都是它。用一架小望远镜就能看到它像月亮一样有盈缺——这是伽利略 1610 年证明“金星绕太阳转”的关键证据。"}]},{id:"earth",color:"#7bb6c9",atmo:"#5fa8ff",en:"EARTH",cn:"地球",type:"earth",tex:"planets/earth-4k.jpg",au:1,elements:{a:1,e:.0167,i:0,node:0,peri:102.937,l0:100.464,period:365.256},displayR:.455,spin:1,radiusKm:6371,gravity:9.81,periodDays:365.26,rotationHours:23.93,tempC:"15（均温）",moons:1,sections:[{t:"概览",text:"目前已知唯一存在生命的世界，太阳系第五大行星。液态海洋覆盖 71% 的表面，一颗恰到好处距离的恒星、一层保护性的大气和一个巨大的月球，共同塑造了这颗蓝色弹珠。"},{t:"大气与表面",text:"氮气占 78%、氧气 21% 的大气层厚达上百公里，臭氧层吸收致命紫外线，磁场偏转太阳风。板块运动让地壳不断循环再造，火山与海洋的化学平衡维持着 15°C 的地表均温。"},{t:"卫星与探测",text:"唯一的天然卫星月球诞生于 45 亿年前的一次天体撞击，它稳定着地轴、驱动潮汐。人类是这颗行星的探测者也是居住者：从 1968 年阿波罗 8 号回望地球的那张照片开始，我们第一次把自己的家园看成一颗行星。"},{t:"怎样看到它",text:"我们站在它上面。若从月球回望，地球是一个比我们看到的月亮大近 4 倍的蓝白色球体，且始终停在月空的同一位置（月球被潮汐锁定）。1968 年阿波罗 8 号在绕月时拍下的“地出”，是第一次有人类亲手按下快门拍下完整的家园。"}]},{id:"mars",color:"#b4674f",atmo:"#d99a63",en:"MARS",cn:"火星",type:"mars",tex:"planets/mars-4k.jpg",au:1.524,elements:{a:1.5237,e:.0934,i:1.85,node:49.558,peri:336.041,l0:355.433,period:686.98},displayR:.349,spin:.97,radiusKm:3390,gravity:3.71,periodDays:686.98,rotationHours:24.62,tempC:"-63（均温）",moons:2,sections:[{t:"概览",text:"锈红色的沙漠世界。铁氧化物尘暴给它染上血液般的颜色，中国人称它荧惑。它拥有太阳系最高的火山奥林帕斯山（21 公里）和最深的峡谷水手谷。"},{t:"大气与表面",text:"大气稀薄，不到地球的 1%，95% 是二氧化碳。沙尘暴可以席卷整个星球并持续数月。干涸的河床、三角洲与水蚀矿物暗示它曾有温暖湿润的过去——如今的液态水以地下冰和极地冰盖的形式存在。"},{t:"卫星与探测",text:"两颗小卫星火卫一与火卫二形似土豆，可能是被俘获的小行星。火星是人类探测器造访最多的行星：从 1976 年海盗号到毅力号与祝融号，寻找古老生命痕迹的旅程至今仍在继续。"},{t:"怎样看到它",text:"冲日前后亮度可达 -2.9 等，肉眼就是一颗明显的橙红色“星”，颜色来自表面的氧化铁尘埃。火星与地球每 26 个月才有一次适合观测的冲日；它还会逆行——在星空中画出一段回头的小环，这是所有外行星共有的现象。"}]},{id:"jupiter",color:"#d9b98f",atmo:"#e8d3b4",en:"JUPITER",cn:"木星",type:"jupiter",tex:"planets/jupiter-4k.jpg",au:5.203,elements:{a:5.2029,e:.0484,i:1.304,node:100.464,peri:14.331,l0:34.351,period:4332.589},displayR:1.246,spin:2.4,radiusKm:69911,gravity:24.79,periodDays:4332.6,rotationHours:9.93,tempC:"-108（云顶）",moons:95,sections:[{t:"概览",text:"太阳系无可争议的王者：质量是其余七颗行星总和的 2.5 倍，可装下 1300 个地球。大红斑是一场刮了至少三百年的风暴，能吞下整个地球。"},{t:"大气与表面",text:"没有固体表面——向外依次是氢、液态金属氢和被压成等离子体的核心。云层被高速急流撕成明暗相间的条纹，风速达每小时 600 公里。磁场强度是地球的 2 万倍。"},{t:"卫星与探测",text:"已确认 95 颗卫星，四颗伽利略卫星最著名：木卫一布满活火山，木卫二冰壳下藏着全球海洋，木卫三是太阳系最大卫星。1979 年旅行者号首次近观，1995–2003 年伽利略号环绕探测，朱诺号至今仍在工作。"},{t:"怎样看到它",text:"与金星并列夜空中最亮的两颗“星”。一副双筒望远镜就能看到四颗伽利略卫星排成一条线，并在一夜之间明显换位——这正是 1610 年伽利略推翻“天体只绕地球转”的证据。小望远镜还能看到赤道云带与大红斑。"}]},{id:"saturn",color:"#e4d0a6",atmo:"#efe4c2",en:"SATURN",cn:"土星",type:"saturn",tex:"planets/saturn-4k.jpg",au:9.537,elements:{a:9.5367,e:.0539,i:2.486,node:113.666,peri:93.057,l0:50.077,period:10759.22},displayR:1.154,spin:2.2,ring:!0,radiusKm:58232,gravity:10.44,periodDays:10759,rotationHours:10.66,tempC:"-139（云顶）",moons:146,sections:[{t:"概览",text:"以壮观光环著称的气态巨行星。环系宽达 28 万公里，厚度却常常只有 10 米——由无数冰粒与碎石构成，密度比水还低，理论上它能浮在足够大的海面上。"},{t:"大气与表面",text:"与木星类似但更轻更冷，云层呈柔和的米金色。北极有一个持续数十年的神秘六边形风暴，边长超过地球直径。风速最高每小时 1800 公里。"},{t:"卫星与探测",text:"146 颗卫星构成一个迷你太阳系：土卫六有大氣和液态甲烷湖，土卫二南极喷出冰羽流——它们是寻找生命的热门目标。卡西尼号 2004–2017 年环绕探测 13 年，最终葬身土星大气。"},{t:"怎样看到它",text:"肉眼可见，但它只是一颗不起眼的淡黄色亮星。望远镜里的环才是它的身份证：环面每约 15 年侧对地球一次，那时环几乎“消失”成一条细线；再过七八年又会张开到最大角度。用 30 倍以上的望远镜就能看出这个变化。"}]},{id:"uranus",color:"#8fd3dd",atmo:"#9ff0ea",en:"URANUS",cn:"天王星",type:"ice",tex:"planets/uranus-2k.jpg",au:19.19,elements:{a:19.1892,e:.0473,i:.773,node:74.006,peri:173.005,l0:314.055,period:30685.4},displayR:.814,spin:-1.4,radiusKm:25362,gravity:8.69,periodDays:30687,rotationHours:-17.24,tempC:"-197（均温）",moons:28,sections:[{t:"概览",text:"一颗躺着自转的冰巨星，自转轴倾角 98°，几乎平行于轨道面——可能源于远古的一次巨型撞击。每个极点会经历长达 42 年的极昼与极夜。"},{t:"大气与表面",text:"大气中的甲烷吸收红光，赋予它青蓝色的宁静外观。虽被归为冰巨星，内部其实是以水、氨、甲烷组成的炽热浓稠流体，是太阳系最冷的行星，最低温 -224°C。"},{t:"卫星与探测",text:"28 颗卫星以莎士比亚与蒲柏笔下的人物命名（泰坦妮亚、奥伯龙……）。它是唯一只被一艘探测器造访过的大行星：1986 年旅行者 2 号飞掠 5.5 小时，拍下的照片至今仍是主流资料。"},{t:"怎样看到它",text:"视星等约 5.7，在极暗的夜空里勉强可见——它是第一颗被望远镜发现的行星，赫歇尔 1781 年正是靠望远镜在双子座附近找到了这个“不该存在的圆面”。想自己找到它，需要一份星图、一片没有光污染的天空和一点耐心。"}]},{id:"neptune",color:"#5f82d6",atmo:"#7fa2ff",en:"NEPTUNE",cn:"海王星",type:"ice",tex:"planets/neptune-2k.jpg",au:30.07,elements:{a:30.0699,e:.0086,i:1.77,node:131.784,peri:48.124,l0:304.348,period:60189},displayR:.804,spin:1.5,radiusKm:24622,gravity:11.15,periodDays:60190,rotationHours:16.11,tempC:"-201（均温）",moons:16,sections:[{t:"概览",text:"靠数学而非望远镜发现的行星：天文学家从天王星轨道的扰动推算出它的位置，1846 年在预测点附近 1° 内找到它。深度蓝色的表面刮着太阳系最猛烈的风。"},{t:"大气与表面",text:"风速可达每小时 2100 公里，超音速。大黑斑是与大红斑类似的风暴系统，出现又消失。内部热量是它接收阳光的 2.6 倍——这颗遥远行星的能量来源至今仍是谜。"},{t:"卫星与探测",text:"16 颗卫星中最大的是海卫一：它逆向公转，可能是被俘获的柯伊伯带天体，表面喷发着氮气间歇泉。1989 年旅行者 2 号飞掠后，人类再未造访。"},{t:"怎样看到它",text:"视星等约 7.9，肉眼绝对看不见，必须借助望远镜和星图。它是先被算出来、才被看到的行星——1846 年伽勒在勒维耶预测位置的 1 度范围内找到了它，这件事被视为牛顿力学最辉煌的胜利之一。"}]}],Sl={kind:"star",en:"SUN",cn:"太阳",radiusKm:696e3,gravity:274,periodDays:null,rotationHours:609.12,tempC:"5,500（光球）",moons:"8 颗行星",desc:"一颗 46 亿岁的黄矮星，占据太阳系 99.86% 的质量。它每秒把约 400 万吨物质转化为光与热。",sections:[{t:"概览",text:"太阳是一颗 G2V 型主序星，直径 139.2 万公里，能装下 130 万个地球。它的质量占整个太阳系的 99.86%，引力支配着从水星到奥尔特云的一切。核心温度约 1500 万度，压力是地球大气的 2500 亿倍，在那里氢聚变成氦——这个过程已经持续了 46 亿年，还能再烧 50 亿年。"},{t:"结构",text:'从里到外：核心（核聚变区，半径约占 1/4）→ 辐射层（光子从核心走到表面平均要几万年，因为不停地被吸收再发射）→ 对流层（等离子体像开水一样翻滚，形成米粒组织）→ 光球（我们看到的"表面"，5500°C）→ 色球 → 日冕（温度反而升到百万度，这个"反常加热"仍未完全解释）。'},{t:"活动周期",text:"太阳活动以约 11 年为周期起伏：黑子（强磁场抑制对流形成的暗斑）数量增多，随之而来的是耀斑和日冕物质抛射。一次强烈的耀斑能在几分钟内释放相当于数十亿颗核弹的能量；如果抛射方向正对地球，就会引发地磁暴，干扰卫星、导航和电网。"},{t:"与地球的关系",text:"太阳风以每秒 400 公里的速度持续吹向行星际空间，地球磁场把它挡在约 6 万公里外，形成磁层。被磁场引导到极区的带电粒子撞击高层大气，发出极光。太阳的总辐射量在 11 年周期里只变化约 0.1%，但长期的小幅变化仍被认为与历史上的一些气候波动有关。"},{t:"探测",text:"1995 年 SOHO 开始 24 小时不间断监测太阳；2018 年帕克太阳探测器发射，2024 年 12 月它以 610 万公里的距离掠过日面，成为史上最接近恒星的人造物体，速度达到每秒 191 公里；ESA 的 Solar Orbiter 则负责拍摄太阳极区。"}]},eu={kind:"moon",en:"MOON",cn:"月球",radiusKm:1737,gravity:1.62,periodDays:27.32,rotationHours:655.7,tempC:"-23（均温）",moons:"—",desc:"地球唯一的天然卫星，潮汐锁定使它永远以同一面朝向我们。",sections:[{t:"概览",text:"月球直径 3475 公里，是太阳系中相对母星最大的卫星之一。它诞生于 45 亿年前一次火星大小天体的斜撞，飞溅的碎屑在轨道上重新聚合成形。"},{t:"表面",text:'正面大片深色的"月海"是 30 多亿年前熔岩漫流填平的玄武岩平原；背面则以明亮的月球高地为主，陨击坑密布。由于潮汐锁定，我们从地球上永远看不到它的背面。'},{t:"对人类的意义",text:"它稳定着地球自转轴的倾角，驱动潮汐，也为地球挡下了不少撞击。1969–1972 年共有 12 人踏上月面，阿波罗计划带回 382 公斤月岩；NASA 的阿尔忒弥斯计划正把人类重新送回那里。"}]},bl=[{id:"halley",en:"1P/HALLEY",cn:"哈雷彗星",color:"#bfe4ff",radiusKm:5.5,tailLen:9,focusR:7,au:17.83,elements:{a:17.834,e:.9674,i:162.26,node:58.42,peri:111.33,l0:177.7,period:75.32},info:{kind:"comet",en:"1P/HALLEY",cn:"哈雷彗星",radiusKm:5.5,gravity:"~0.0004",periodDays:27510,rotationHours:52.8,tempC:"-70（近日）",moons:"—",desc:"人类第一颗被预言回归的彗星，每 76 年一次。",sections:[{t:"概览",text:'哈雷彗星是一颗 15×8 公里的"花生"状冰岩混合体，绕日一周约 76 年。它是唯一一颗能用肉眼看到、且一生中可能看到两次的短周期彗星。'},{t:"历史",text:'1705 年哈雷用牛顿力学推算出它与 1531、1607、1682 年的是同一颗，并预言 1758 年回归——它在哈雷去世 16 年后如期归来。1910 年回归时地球甚至穿过了它的彗尾，引发过一场"氰化物恐慌"。'},{t:"探测",text:'1986 年回归时，一支叫"哈雷舰队"的国际探测器群前去迎接：苏联织女星 1/2 号、欧洲乔托号、日本彗星号与先驱号。乔托号冲进彗发 596 公里处，拍下了第一张彗核特写。下一次回归是 2061 年。'}]}},{id:"encke",en:"2P/ENCKE",cn:"恩克彗星",color:"#cfe8d8",radiusKm:2.4,tailLen:6.5,focusR:5,au:2.22,elements:{a:2.215,e:.8483,i:11.78,node:334.57,peri:186.5,l0:261.1,period:3.3},info:{kind:"comet",en:"2P/ENCKE",cn:"恩克彗星",radiusKm:2.4,gravity:"~0.0001",periodDays:1206,rotationHours:11.1,tempC:"-",moons:"—",desc:"周期最短的著名彗星，每 3.3 年回归一次。",sections:[{t:"概览",text:"恩克彗星的轨道完全落在地球轨道以内，周期只有 3.3 年，是已知最短周期的彗星之一。它被认为是金牛座流星雨的母体。"},{t:"为什么重要",text:'它的轨道在持续缩短——每次近日点都会损失物质并受非引力效应影响，回归周期每次减少约 2.5 小时。这个"恩克效应"成了研究彗核演化的经典案例。'},{t:"金牛座流星雨",text:"地球每年 10 月至 11 月穿过恩克彗星留下的尘埃带，形成金牛座流星雨。这条尘埃带其实相当古老、也已经扩散得很开，所以流星数量不多但火流星比例高。"}]}},{id:"churyumov",en:"67P/C-G",cn:"67P 楚留莫夫-格拉西缅科",color:"#d8d2c4",radiusKm:2,tailLen:5.5,focusR:4.2,au:3.46,elements:{a:3.463,e:.641,i:7.04,node:50.15,peri:12.79,l0:165.5,period:6.44},info:{kind:"comet",en:"67P/CHURYUMOV-GERASIMENKO",cn:"67P 彗星",radiusKm:2,gravity:"~0.0001",periodDays:2352,rotationHours:12.4,tempC:"-70",moons:"—",desc:'罗塞塔号陪伴了两年的"橡皮鸭"，人类第一次登陆彗核。',sections:[{t:"概览",text:"67P 由两块连接在一起的团块组成，形似一只橡皮鸭，最长处 4.1 公里。2014 年 ESA 的罗塞塔号抵达并释放菲莱着陆器，人类第一次站上一颗彗星。"},{t:"发现",text:'罗塞塔号发现它表面有 19 处"喷口"，水汽和尘埃从裂缝中喷出形成彗发；还测到了甘氨酸、磷和分子氧——这些都与生命起源的化学有关。'},{t:"结局",text:"2016 年 9 月 30 日，罗塞塔号受控撞向彗核，在坠落过程中发回了最后一批近距离数据。"}]}},{id:"wild2",en:"81P/WILD 2",cn:"维尔特二号彗星",color:"#c9d8f0",radiusKm:2,tailLen:5,focusR:3.8,au:3.45,elements:{a:3.45,e:.5374,i:3.24,node:136.1,peri:41.76,l0:251.6,period:6.41},info:{kind:"comet",en:"81P/WILD 2",cn:"维尔特二号彗星",radiusKm:2,gravity:"~0.0001",periodDays:2341,rotationHours:13.5,tempC:"-",moons:"—",desc:"星尘号从它身上带回彗星物质，人类第一次拿到彗星样本。",sections:[{t:"概览",text:'维尔特二号的轨道在 1974 年被木星引力改写，从柯伊伯带来到内太阳系，因此彗核表面很"年轻"，布满刚被阳光烤开的坑洞。'},{t:"星尘号",text:"2004 年 NASA 星尘号穿过它的彗发，用气凝胶收集了上千颗尘埃颗粒，2006 年返回地球。样本里发现了甘氨酸、橄榄石和高温下才能形成的矿物——说明彗星物质来自太阳系各处，被原行星盘充分混合。"},{t:"一颗叫 Inti 的颗粒",text:"样本中编号 Inti 的颗粒，其同位素比例与太阳系内任何已知物质都不匹配——它形成于太阳诞生之前的分子云，比太阳本身还老。这是人类第一次直接拿到太阳系之前的物质。"}]}}],nu=[{id:"m42",img:"assets/nebulae/m42.jpg",cn:"猎户座大星云",en:"ORION NEBULA",abbr:"M42",type:"发射星云",ra:5.588,dec:-5.39,size:4200,hue:330,rgb:[186,92,104],distance:"1344 光年",span:"约 24 光年",where:"猎户座（猎户腰带下方）",desc:'银河系里最亮的恒星形成区之一，也是肉眼能看见的少数星云——猎户腰带下方那一小团雾。中央的四合星是四颗年轻炽热的 O/B 型星，它们的紫外辐射把周围氢气电离，让整片云发出暗红色光。哈勃在这里拍到过一批"原行星盘"，每一个都可能是一个正在成形的太阳系。',sections:[{t:"为什么是红的",text:"氢原子被紫外线电离后重新俘获电子，会发出波长为 656.3 纳米的 Hα 谱线——正好是深红色。我们看到的粉色，其实是红、蓝两色的混合：红色来自氢，蓝绿色来自氧的禁线。"},{t:"它在诞生恒星",text:"星云里已发现超过 700 颗处于不同形成阶段的恒星，其中许多被尘埃盘包裹。这里的年龄跨度不到 100 万年，对恒星来说只是清晨。"}],facts:["它是全天被研究得最多的恒星形成区，哈勃几乎每年都要回来拍几次。","它离我们约 1344 光年——你今晚看到的，是大约 1300 多年前的它。"]},{id:"m1",img:"assets/nebulae/m1.jpg",cn:"蟹状星云",en:"CRAB NEBULA",abbr:"M1",type:"超新星遗迹",ra:5.575,dec:22.01,size:2600,hue:40,rgb:[200,150,96],distance:"6500 光年",span:"约 11 光年",where:"金牛座（金牛角附近）",desc:'公元 1054 年 7 月，宋代天文学家记录了一颗"天关客星"，白天都能看见，持续了 23 天。那就是一次超新星爆发。九百多年后，它留下的残骸仍在以每秒 1500 公里的速度向外膨胀——这就是蟹状星云，人类历史上第一颗被确认身份的超新星遗迹。',sections:[{t:"星云的正中心",text:"里面是一颗每秒自转 30 圈的脉冲星，直径只有 20 公里，却带着比太阳强万亿倍的磁场。它像一台宇宙发电机，把旋转的能量注入整片星云，让它持续发光。"},{t:"它还在长",text:"星云的直径每年增加约 0.2 角秒。对比 19 世纪末的观测照片，一百多年里它明显变大了——这是少数能用人类寿命尺度看到变化的深空天体。"}],facts:["梅西耶 1758 年找彗星时再次遇到它，怕混淆便专门编了个表——M1 就是那张表的第一号。","中心脉冲星一勺物质重约十亿吨，自转比厨房搅拌机还快 30 倍。"]},{id:"m45",img:"assets/nebulae/m45.jpg",cn:"昴星团",en:"PLEIADES",abbr:"M45",type:"疏散星团 · 反射星云",ra:3.783,dec:24.11,size:3400,hue:210,rgb:[96,132,200],distance:"444 光年",span:"约 8 光年",where:'金牛座（牛肩上的"七姊妹"）',desc:'中国古人叫它昴宿，日本叫"昴"（Subaru），希腊神话里是七位姐妹。视力好的人在暗夜里能数出 6–7 颗，实际上这个星团有上千颗恒星，年龄都只有 1 亿岁左右。它们的蓝白色光被周围的尘埃散射，形成一片淡蓝色的反射星云。',sections:[{t:"为什么是蓝的",text:"反射星云本身不发光，只是把附近恒星的光散射出去。蓝光波长短、散射效率高，所以被照亮的尘埃呈现蓝色——和地球天空是蓝的同理。"},{t:"正在散开",text:"星团里的恒星彼此引力束缚很弱，大约 2.5 亿年后它们就会各自散去，成为银河里互不相识的流浪恒星。"}],facts:['昴星团是全球文化的"公共图标"：希腊的七姐妹、中国的昴宿、日本的 Subaru，说的都是它。',"斯巴鲁汽车的车标那六颗星，就是昴星团。"]},{id:"m57",img:"assets/nebulae/m57.jpg",cn:"环状星云",en:"RING NEBULA",abbr:"M57",type:"行星状星云",ra:18.893,dec:33.03,size:2200,hue:130,rgb:[86,190,150],distance:"2570 光年",span:"约 1 光年",where:"天琴座（织女星与天琴平行四边形之间）",desc:"一颗和太阳差不多重的恒星走到生命尽头时，会抛掉外层气体，露出中心的白矮星。环状星云就是这样的遗骸：中心那颗白矮星的紫外光让外圈的气体发亮，形成一个直径约 1 光年的发光圆环。它正在以每秒 20–30 公里膨胀，约 2 万年后会彻底散入星际空间。",sections:[{t:"名字的误会",text:'"行星状星云"这个名字是 18 世纪赫歇尔起的——他在小望远镜里看到这种圆盘，误以为是行星。实际上它和行星毫无关系。'},{t:"太阳的未来",text:"约 50 亿年后，太阳也会经历同样的过程：先膨胀成红巨星吞掉水星金星，再抛掉外层，留下一颗地球大小的白矮星和一片像这样的光环。"}],facts:["中心白矮星只有地球大小，一茶匙物质重约 5 吨。",'这个"环"其实是三维的桶状，我们只是恰好从桶口方向看它，才看到一圈。']},{id:"ngc7000",img:"assets/nebulae/ngc7000.jpg",cn:"北美洲星云",en:"NORTH AMERICA NEBULA",abbr:"NGC 7000",type:"发射星云",ra:20.983,dec:44.53,size:4600,hue:20,rgb:[196,108,90],distance:"2590 光年",span:"约 100 光年",where:"天鹅座（天津四东侧）",desc:'轮廓酷似北美大陆的发射星云，紧挨着天鹅座最亮的天津四。它的实际跨度约 100 光年，但因为表面亮度极低，肉眼几乎看不见，需要广角望远镜配合滤镜才能拍出那块"大陆"。中间那道深色的"墨西哥湾"，是一层挡在前面的冷尘埃。',sections:[{t:"同一片云",text:"它和旁边的鹈鹕星云其实是同一团巨大气体复合体，被一条暗尘埃带从中隔开，看上去才像两个天体。"},{t:"其实看不见天津四",text:'天津四只是恰好投影在星云前面：它离我们约 2600 光年，而星云本体很可能在更远的地方。真正把"北美大陆"点亮的，是藏在星云内部、被尘埃挡住的一群年轻恒星。'}],facts:['它的"墨西哥湾"暗带只是一层挡在前面的冷尘埃，不是大陆上真的有海。',"双筒望过去那片天几乎全空——它的光散得极开，只有长曝光才能拼出形状。"]},{id:"veil",img:"assets/nebulae/veil.jpg",cn:"面纱星云",en:"VEIL NEBULA",abbr:"NGC 6960/6992",type:"超新星遗迹",ra:20.76,dec:30.7,size:5200,hue:150,rgb:[92,176,170],distance:"2400 光年",span:"约 110 光年",where:"天鹅座（天津四西南）",desc:"一万年前的一次超新星爆发，把一颗大质量恒星的外层炸成了现在这张网。它的视直径约 3 度——六个满月连起来那么大，是全天最大的超新星遗迹之一。气体以每秒上百公里的速度撞进星际介质，被压缩、加热，形成极其纤细的丝状结构。",sections:[{t:"为什么像纱",text:"不同元素发出的颜色不同：氧的禁线偏青绿，氢偏红，硫偏暗红。三层颜色叠在一起，就成了一张半透明的彩色薄纱。"},{t:"烟花散场之前",text:'冲击波仍在以每秒上百公里的速度向外推进。再过几万年，这张"面纱"会稀释得与星际介质无法区分——到那时，这场一万年前的烟花才算真正散场。'}],facts:["1745 年就有人记录过它，但直到 20 世纪才确认这是超新星残骸。",'它的视直径约 3 度，双筒望远镜里能同时看到"东纱"和"西纱"两段。']},{id:"heart",img:"assets/nebulae/heart.jpg",cn:"心脏星云",en:"HEART NEBULA",abbr:"IC 1805",type:"发射星云",ra:2.55,dec:61.4,size:4800,hue:340,rgb:[200,84,118],distance:"7500 光年",span:"约 200 光年",where:"仙后座",desc:"一片横跨 200 光年的巨大氢气云，形状像一颗心。它中心的年轻星团只有 1500 万岁，星团里最热的几颗恒星正用星风和紫外线把整片云点亮、吹散。",sections:[{t:"正在被雕刻",text:'星风把气体推开，形成一根根指向星团的"柱子"和暗色的尘埃带。几百万年后，这片云会被彻底吹散，只剩下一群散开的年轻恒星。'},{t:"云心的育婴房",text:'心脏正中央的星团 Melotte 15 里住着几颗几十倍太阳质量的年轻恒星，它们的星风在云中雕出指向星团中心的气体柱——和鹰状星云的"创生之柱"是同一类景观，只是更大、更年轻。'}],facts:['它的邻居是"灵魂星云"（Soul Nebula），两团云隔着一条走廊，合称"心与魂"。',"数千倍太阳质量的气体仍在继续坍缩，这片云里会不断诞生新恒星。"]},{id:"rosette",img:"assets/nebulae/rosette.jpg",cn:"玫瑰星云",en:"ROSETTE NEBULA",abbr:"NGC 2237",type:"发射星云",ra:6.53,dec:5.03,size:3600,hue:330,rgb:[196,88,110],distance:"5200 光年",span:"约 130 光年",where:"麒麟座（猎户座东南）",desc:'中心星团 NGC 2244 的星风吹出了一个直径数十光年的空洞，把外围的气体压成一圈层的"花瓣"，整片云因此得名玫瑰。星团里最亮的几颗 O 型星只有几百万岁。',sections:[{t:"一朵正在凋谢的花",text:'星风还在继续掏空中心，外围的花瓣正在被推得越来越薄。这朵"玫瑰"的寿命只剩几百万年。'},{t:"怎么找到它",text:'它在猎户座参宿四往东的麒麟座方向，视直径约 1.3 度、接近三个满月，但表面亮度极低——肉眼看不见，需要暗夜、广角镜和 Hα 窄带滤镜才能拍出那朵"玫瑰"。中心的星团 NGC 2244 倒是用双筒就能看到。'}],facts:['氢的 Hα 辐射让它在窄带照片里呈现鲜艳的玫红色，"玫瑰"因此得名。','先找到中心那撮亮星（NGC 2244），再沿着它看四周的"花瓣"，会容易得多。']},{id:"m8",img:"assets/nebulae/m8.jpg",cn:"泻湖星云",en:"LAGOON NEBULA",abbr:"M8",type:"发射星云",ra:18.06,dec:-24.38,size:3800,hue:350,rgb:[200,92,116],distance:"4100 光年",span:"约 110 光年",where:"人马座（银河中心方向）",desc:'在暗夜里，肉眼能在人马座看到银河上一道明显的"裂口"，那就是泻湖星云——它是少数肉眼可见的发射星云。中间那条暗带把星云隔成两半，像一片被沙洲分开的泻湖。',sections:[{t:"银河系的产房",text:"它位于银河系中心方向的旋臂上，周围的恒星密度是太阳附近的十几倍。星云里已发现数十颗正在形成的原恒星。"},{t:"泻湖旁的三叶",text:'往泻湖星云北边抬一眼，就是本页另一团"三叶星云"——两者在天上只隔约 2 度，常在广角照片里同框。它们都是人马座方向旋臂上的恒星育婴房，年龄也都在百万年量级。'}],facts:["肉眼可见意味着：在没有光污染的郊外，你裸眼看到的是 4100 光年外的一片恒星育婴房。",'星云里最亮的那块"沙漏"区域，是整个云里恒星形成最活跃的地方。']},{id:"m20",img:"assets/nebulae/m20.jpg",cn:"三叶星云",en:"TRIFID NEBULA",abbr:"M20",type:"发射 + 反射 + 暗星云",ra:18.045,dec:-22.97,size:3e3,hue:320,rgb:[180,96,150],distance:"4100 光年",span:"约 40 光年",where:"人马座",desc:'三种星云挤在同一个天区：红色的发射星云、蓝色的反射星云，以及把前者切成三瓣的黑色暗尘埃带——"三叶"指的就是这三道裂口。中心有一颗年轻的大质量恒星，它的星光照亮了周围的尘埃。',sections:[{t:"三种形态",text:"发射星云自己发光，反射星云靠散射别人的光，暗星云则是挡住背后光线的浓密尘埃。一个天体同时集齐三种，是天文摄影里最受欢迎的题材之一。"},{t:"近红外里重新团圆",text:'把三片"叶子"切开的是冷尘埃，而近红外光能穿透尘埃——所以在韦布望远镜的红外照片里，三片叶子重新连成一整团，里面刚诞生的恒星也露了出来。'}],facts:['它离著名的银河"茶壶"星群只有几度，夏夜南天很好定位。',"蓝色部分不自己发光，是被年轻恒星照亮的尘埃——和天空是蓝色同理。"]},{id:"b33",img:"assets/nebulae/b33.jpg",cn:"马头星云",en:"HORSEHEAD NEBULA",abbr:"B33",type:"暗星云",ra:5.683,dec:-2.46,size:2e3,hue:12,rgb:[150,76,70],distance:"1375 光年",span:"约 3.5 光年",where:"猎户座（参宿一附近）",desc:'它本身不发一点光——你看到的"马头"，是一团浓稠的冷尘埃挡住了背后的红色发射星云，剪出的一个剪影。整块尘埃长约 3.5 光年，正在被附近的紫外线缓慢蒸发。',sections:[{t:"看得见，因为看不见",text:'暗星云在可见光下只能靠"遮挡"被看到。换成红外波段，尘埃变得透明，马头就消失了——那里的恒星形成活动才露出来。'},{t:"如何找到它",text:'先找到猎户腰带东端的参宿一（Alnitak），马头就悬在它南侧约半度处。它太暗，肉眼和普通望远镜都看不见，需要大口径望远镜加 Hα 滤镜长时间曝光——天文摄影里最有名的"打卡目标"之一。'}],facts:["它直到 1888 年才被拍照发现——虽然它就挂在全天最著名的腰带上。",'马头的"脖子"正被背后炽热恒星的光一点一点蒸发，边缘亮出一道发丝般的轮廓。']},{id:"m16",img:"assets/nebulae/m16.jpg",cn:"鹰状星云",en:"EAGLE NEBULA",abbr:"M16",type:"发射星云",ra:18.313,dec:-13.79,size:3400,hue:30,rgb:[190,128,84],distance:"5700 光年",span:"约 70 光年",where:"巨蛇座（人马座以北）",desc:'1995 年哈勃在这里拍下了"创生之柱"：三根被紫外线侵蚀出的气体柱，高达数光年，柱内正在孕育新的恒星。这张照片成了天文史上最著名的影像之一，也第一次让公众直观看到恒星是怎么诞生的。',sections:[{t:"柱子正在消失",text:"斯皮策望远镜的红外观测显示，这些柱子可能早在 6000 年前就被附近的一次超新星冲击波摧毁了——只是光还没走到我们这里，我们仍在看它的过去。"},{t:"韦布的新视角",text:"2022 年，韦布望远镜用近红外重拍了创生之柱：尘埃变得半透明，柱子内部刚刚诞生、还裹着尘埃盘的原恒星第一次被直接看到。同一根柱子，相隔 27 年的两张照片，讲的正是恒星一生的开端。"}],facts:["最高的一根柱子约 4 光年——光从柱底走到柱顶也要 4 年。",'1995 年哈勃原片由四块芯片拼接，右下角那块标志性的"阶梯"缺角就是这么来的。']}],iu=[{kind:"lunar",date:"2025-03-14",time:"06:58",label:"月全食",en:"TOTAL LUNAR ECLIPSE"},{kind:"lunar",date:"2025-09-07",time:"18:12",label:"月全食",en:"TOTAL LUNAR ECLIPSE"},{kind:"lunar",date:"2026-03-03",time:"11:33",label:"月全食",en:"TOTAL LUNAR ECLIPSE"},{kind:"lunar",date:"2026-08-28",time:"04:13",label:"月偏食",en:"PARTIAL LUNAR ECLIPSE"},{kind:"solar",date:"2025-09-21",time:"19:42",label:"日偏食",en:"PARTIAL SOLAR ECLIPSE"},{kind:"solar",date:"2026-02-17",time:"12:12",label:"日环食",en:"ANNULAR SOLAR ECLIPSE"},{kind:"solar",date:"2026-08-12",time:"17:46",label:"日全食",en:"TOTAL SOLAR ECLIPSE"},{kind:"solar",date:"2027-08-02",time:"10:07",label:"日全食",en:"TOTAL SOLAR ECLIPSE"}],xa=[{text:"在某个地方，有某种不可思议的事物正等待着被发现。",who:"卡尔·萨根",year:"1980"},{text:"我望进了比任何前人都要深的太空。",who:"威廉·赫歇尔",year:"1783"},{text:"记住抬头看星，而不是低头看脚下。",who:"史蒂芬·霍金",year:"2018"},{text:"我们是宇宙认识自身的一种方式。",who:"卡尔·萨根",year:"1977"},{text:"宇宙比我们所能想象的更大、更古老，也更陌生。",who:"埃德温·哈勃",year:"1936"},{text:"行星只是光芒的碎屑，恒星才是夜空真正的主人。",who:"佚名",year:"—"}],vs={mars:[{id:"phobos",tex:"moons/phobos.jpg",r:.035,orbit:3,period:.32,info:{kind:"moon",en:"PHOBOS",cn:"火卫一",radiusKm:11,gravity:"0.0006",periodDays:.32,rotationHours:7.66,tempC:"-40",moons:"—",desc:'火星最大的卫星，也是一颗"正在坠落"的卫星。',sections:[{t:"概览",text:"火卫一是一块 27×22×18 公里的土豆形岩块，表面被直径约 9 公里的斯蒂克尼陨击坑切出一道大口子。它离火星表面只有 6000 公里，是太阳系中距主星最近的卫星。"},{t:"轨道与命运",text:"它每 7.7 小时绕火星一圈，比火星自转还快，所以在火星天空里从西边升起、东边落下。潮汐作用正让它每年靠近火星约 1.8 厘米，几千万年后它将撞上火星或碎成一道行星环。"},{t:"探测",text:"1971 年水手 9 号首次拍到它，此后的海盗号、火星全球勘测者都曾近距离成像。日本 MMX 计划将于 2020 年代末采样返回。"}]}},{id:"deimos",tex:"moons/tethys.jpg",tint:"#8e8377",r:.035,orbit:6.9,period:1.26,info:{kind:"moon",en:"DEIMOS",cn:"火卫二",radiusKm:6,gravity:"0.0003",periodDays:1.26,rotationHours:30.3,tempC:"-40",moons:"—",desc:"火星较小、较远的卫星，表面被细尘填平了。",sections:[{t:"概览",text:"火卫二只有 15×12×11 公里，形状不规则但表面比火卫一平滑得多——陨击坑被一层厚厚的风化尘填平了。"},{t:"轨道",text:"它每 30 小时绕火星一圈，轨道接近圆且稳定，正缓慢远离火星。从火星表面看，它只是一颗挂在天空里的小亮点，比我们的月亮小得多。"},{t:"跳一下就飞走",text:"火卫二的逃逸速度只有每秒 5.6 米——大约是地球的 1/2000。站在它表面用力一蹬，你就能永远离开它；也正因为引力太弱，它留不住被撞击扬起的碎屑，无法形成尘埃环。"}]}}],jupiter:[{id:"io",tex:"moons/io.jpg",r:.035,orbit:5.9,period:1.77,info:{kind:"moon",en:"IO",cn:"木卫一",radiusKm:1821,gravity:"1.80",periodDays:1.77,rotationHours:42.5,tempC:"-143（火山口 1600）",moons:"—",desc:"太阳系火山活动最剧烈的天体，表面被硫黄染成黄橙色。",sections:[{t:"概览",text:"木卫一只比月球大一点点，却有 400 多座活火山。它被木星和另外三颗伽利略卫星的引力反复揉搓，固体潮把内部烤化，火山喷发柱可高达 300 公里。"},{t:"表面",text:"几乎没有陨击坑——火山喷出的硫和二氧化硫不断把地表抹平。颜色从亮黄到暗橙不一，全是不同形态的硫化物。"},{t:"探测",text:"1610 年伽利略发现它。1979 年旅行者 1 号拍到了正在喷发的火山羽流，伽利略号、朱诺号此后长期监测它的火山活动。"}]}},{id:"europa",tex:"moons/europa.jpg",r:.035,orbit:9.4,period:3.55,info:{kind:"moon",en:"EUROPA",cn:"木卫二",radiusKm:1561,gravity:"1.31",periodDays:3.55,rotationHours:85.2,tempC:"-160",moons:"—",desc:"冰壳之下藏着全球性海洋，是寻找地外生命的头号目标。",sections:[{t:"概览",text:"木卫二表面是太阳系最光滑的固体表面之一，几乎只有纵横交错的褐色裂纹。冰壳厚约 15–25 公里，下面可能是深达 100 公里的液态海洋，含水量是地球海洋的两倍。"},{t:"为什么值得去",text:"液态水、岩石海底、潮汐加热带来的能量——生命所需的三要素这里都齐了。表面的褐色条纹被认为是海水上涌留下的盐和硫化物。"},{t:"探测",text:"旅行者号、伽利略号已经对它做过详细测绘；NASA 的欧罗巴快船已于 2024 年发射，预计 2030 年抵达。"}]}},{id:"ganymede",tex:"moons/ganymede.jpg",r:.037,orbit:15,period:7.15,info:{kind:"moon",en:"GANYMEDE",cn:"木卫三",radiusKm:2634,gravity:"1.43",periodDays:7.15,rotationHours:171.7,tempC:"-163",moons:"—",desc:"太阳系最大的卫星，比水星还大，也是唯一拥有磁场的卫星。",sections:[{t:"概览",text:"直径 5268 公里，比水星还大 8%。它的核心是一颗液态铁核，因此产生了太阳系卫星中独一无二的磁场，还有自己的极光。"},{t:"表面",text:"两种地貌拼在一起：古老的深色区域布满陨击坑，年轻的浅色区域则是被冰火山改写过的沟槽地形。冰壳下同样可能存在咸水海洋。"},{t:"探测",text:"ESA 的 JUICE 探测器于 2023 年发射，2031 年后将进入木卫三轨道，成为第一个环绕非月球卫星的探测器。"}]}},{id:"callisto",tex:"moons/callisto.jpg",r:.035,orbit:22,period:16.7,info:{kind:"moon",en:"CALLISTO",cn:"木卫四",radiusKm:2410,gravity:"1.24",periodDays:16.69,rotationHours:400.5,tempC:"-139",moons:"—",desc:"太阳系陨击坑最密集的表面，40 亿年几乎没变过。",sections:[{t:"概览",text:"木卫四是伽利略卫星中最外围的一颗，也是表面最古老、陨击坑最密的天体——它几乎完整保留了太阳系早期的轰炸记录。"},{t:"为什么重要",text:"它位于木星强辐射带之外，是未来载人探测木星系时最可能的落脚点。地下也可能有咸水层。"},{t:"为什么死寂",text:"木卫一、木卫二、木卫三被 1:2:4 的拉普拉斯共振锁在一起，潮汐能量不断被挤压出来；木卫四游离在这条共振链之外，几乎得不到加热。所以它和另外两颗伽利略卫星同龄，地貌却停留在 40 亿年前。"}]}}],saturn:[{id:"mimas",tex:"moons/mimas.jpg",r:.035,orbit:3.2,period:.94,info:{kind:"moon",en:"MIMAS",cn:"土卫一",radiusKm:198,gravity:"0.064",periodDays:.94,rotationHours:22.6,tempC:"-209",moons:"—",desc:'被一个 130 公里宽的巨坑砸出了一个"死星"的样子。',sections:[{t:"概览",text:"直径只有 396 公里，却拥有太阳系相对尺寸最大的陨击坑——赫歇尔坑宽 130 公里，深 10 公里，几乎把它砸穿了。"},{t:"争议",text:'它表面看起来毫无地质活动，但轨道摆动暗示内部可能藏着液态水，这让"死寂冰球"的形象变得可疑。'},{t:"与环的关系",text:"土星 C 环外缘那道宽 4800 公里的卡西尼缝，正是土卫一的引力清空的：土卫一每绕土星一圈，环粒子就被推挤两次，恰好落在缝的位置。一颗 396 公里的小卫星，就这样在直径 28 万公里的环系上刻出了一道界线。"}]}},{id:"enceladus",tex:"moons/enceladus.jpg",r:.035,orbit:4,period:1.37,info:{kind:"moon",en:"ENCELADUS",cn:"土卫二",radiusKm:252,gravity:"0.113",periodDays:1.37,rotationHours:32.9,tempC:"-198",moons:"—",desc:"南极喷出百公里高的冰羽流，是土星环 E 环的来源。",sections:[{t:"概览",text:'直径 504 公里，表面是太阳系反射率最高的地方——新雪一样的冰。南极的"虎纹"裂缝里持续喷出水汽、盐和有机分子。'},{t:"生命线索",text:"卡西尼号穿越羽流时探测到盐、二氧化硅和有机分子，说明冰下海洋与岩石海底正在发生水热反应——这正是地球深海热泉孕育生命的条件。"},{t:"探测",text:"卡西尼号 2005 年首次发现羽流。至今没有专门的着陆任务，但它是行星科学界呼声最高的目标之一。"}]}},{id:"dione",tex:"moons/dione.jpg",r:.035,orbit:6.3,period:2.74,info:{kind:"moon",en:"DIONE",cn:"土卫四",radiusKm:561,gravity:"0.232",periodDays:2.74,rotationHours:65.7,tempC:"-186",moons:"—",desc:"表面有明亮的冰崖网络，像被划开的冰面。",sections:[{t:"概览",text:'直径 1123 公里。最醒目的是后随半球上那片明亮的"千丝万缕"——构造断裂形成的冰崖，阳光斜照时格外耀眼。'},{t:"与土卫二的关系",text:"它与土卫二处于 1:2 轨道共振，引力拉扯是土卫二内部加热的重要来源之一。"},{t:"共轨的伴星",text:"土卫四的轨道上还有两颗更小的天体：土卫十二（Helene）跑在它前方 60 度、土卫三十四（Polydeuces）跟在后方 60 度，正好是拉格朗日 L4 / L5 点。这种一主两从的共轨结构在土星系里并不罕见。"}]}},{id:"rhea",tex:"moons/rhea.jpg",r:.035,orbit:8.7,period:4.52,info:{kind:"moon",en:"RHEA",cn:"土卫五",radiusKm:764,gravity:"0.264",periodDays:4.52,rotationHours:108.4,tempC:"-174",moons:"—",desc:"土星第二大卫星，一颗几乎纯冰的脏雪球。",sections:[{t:"概览",text:"直径 1528 公里，约四分之三是水冰。表面古老、陨击坑密布，有一条明亮的裂缝系统横贯。"},{t:"趣闻",text:"2008 年卡西尼号曾探测到疑似稀薄氧气外逸层——冰面被磁层粒子轰击分解出水分子所致。"},{t:"环的乌龙",text:"2008 年曾有论文宣布土卫五周围存在稀薄环系，理由是探测到了电子密度下降。后续观测始终没能拍到环，这个结论最终被撤回——它成了行星科学里一个常被引用的证据不足案例。"}]}},{id:"titan",tex:"moons/titan.jpg",r:.044,orbit:20.3,period:15.9,info:{kind:"moon",en:"TITAN",cn:"土卫六",radiusKm:2575,gravity:"1.35",periodDays:15.95,rotationHours:382.7,tempC:"-179",moons:"—",desc:"唯一有浓密大气的卫星，地表有液态甲烷的河流与湖泊。",sections:[{t:"概览",text:"直径 5150 公里，比水星还大。1.5 bar 的氮气大气比地球还浓，橙色雾霾来自甲烷和氮气在紫外线下的化学反应。"},{t:"甲烷循环",text:"在 -179°C 的地表，甲烷和乙烷可以像水一样蒸发、成云、下雨、汇成湖海。惠更斯号 2005 年降落时拍到了河道与卵石——那是一条干涸的甲烷河。"},{t:"探测",text:"NASA 的蜻蜓号旋翼机计划 2028 年发射，将在土卫六表面多点起降，寻找前生命化学的证据。"}]}}],uranus:[{id:"titania",tex:"planets/moon-4k.jpg",r:.035,orbit:17.2,period:8.7,info:{kind:"moon",en:"TITANIA",cn:"天卫三",radiusKm:789,gravity:"0.379",periodDays:8.71,rotationHours:209,tempC:"-203",moons:"—",desc:"天王星最大的卫星，表面有巨大的峡谷系统。",sections:[{t:"概览",text:"直径 1578 公里，一半是冰一半是岩石。最醒目的是一条长达 1600 公里的峡谷——墨西拿峡谷，比地球的大峡谷还长。"},{t:"探测",text:"1986 年旅行者 2 号飞掠时只拍到了它南半球的一小部分，其余仍是空白。"},{t:"峡谷",text:"天卫三的地壳像被拉伸过：一系列平行的断层崖切开了整个半球，落差可达数公里。普遍认为这是早期内部的水结冰膨胀、把地壳顶裂的结果——和木卫二、土卫二那种由潮汐维持的活跃完全是两种机制。"}]}},{id:"oberon",tex:"moons/phoebe.jpg",tint:"#9c9184",r:.035,orbit:22,period:13.5,info:{kind:"moon",en:"OBERON",cn:"天卫四",radiusKm:761,gravity:"0.346",periodDays:13.46,rotationHours:323,tempC:"-198",moons:"—",desc:"天王星最外侧的大卫星，表面布满古老陨击坑。",sections:[{t:"概览",text:"直径 1523 公里，是天王星第二大卫星。表面暗红偏灰，坑底有神秘的深色物质，可能是从内部渗出的碳质材料。"},{t:"表面与名字",text:"它表面布满古老的撞击坑，坑底往往有深色物质渗出，可能是含碳的冰混合物。奥伯龙是莎士比亚《仲夏夜之梦》里的仙王——天王星的卫星全部取自莎翁与蒲柏的作品，因为在 19 世纪，天文学家需要一个不与希腊神话冲突的命名体系。"}]}}],neptune:[{id:"triton",tex:"moons/triton.jpg",r:.055,orbit:14.4,period:-5.88,info:{kind:"moon",en:"TRITON",cn:"海卫一",radiusKm:1353,gravity:"0.779",periodDays:-5.88,rotationHours:-141,tempC:"-235",moons:"—",desc:'逆向公转的"外来者"，表面有氮气间歇泉。',sections:[{t:"概览",text:"海卫一是太阳系唯一一颗大型逆行卫星——它绕海王星的方向与行星自转相反，几乎可以肯定是被俘获的柯伊伯带天体。"},{t:"表面",text:"表面温度 -235°C，是太阳系最冷的地方之一，却仍有活动：旅行者 2 号拍到了 8 公里高的氮气喷流，像黑色烟柱一样斜插进稀薄的大气。"},{t:"命运",text:"潮汐正在让它缓慢靠近海王星，几十亿年后它会被撕碎，形成一道比土星环更壮观的环。"}]}}]};var va=[{id:"orion",en:"ORION",cn:"猎户座",img:"assets/constellations/orion.jpg",season:"1 月",area:594,rank:26,star:"参宿四 0.5 等 · 参宿七 0.13 等",dso:"M42 猎户座大星云 · M78",desc:"冬夜最壮丽的星座，三星连珠的腰带举世闻名。腰带下方是猎户座大星云——一片正在诞生恒星的发光气体云，距离我们 1350 光年。左上肩的参宿四是一颗随时可能爆发的红超巨星。",sections:[{t:"腰带与佩剑",text:'腰带三星（参宿一、二、三）几乎排成完美直线，古今中外都拿它当路标：向东南延长就撞上天狼星，向西北则指向金牛座的毕宿五。腰带下挂着的"佩剑"里，肉眼就能看到一团朦胧光斑——猎户座大星云 M42。'},{t:"一红一蓝两颗巨星",text:"左肩的参宿四是红超巨星，直径约为太阳的 900 倍；右脚的参宿七是蓝超巨星，光度约为太阳的 12 万倍。一红一蓝隔空相望，是全天颜色对比最强烈的亮星组合。"}],facts:['参宿四已进入生命末期，在天文学尺度上"随时"可能爆发成超新星——届时它的亮度会超过满月。','中国古代把腰带三星叫"福禄寿"，俗语"三星高照"说的就是它们升上正南天。',"猎户座骑在天球赤道上，地球上任何角落都能看到，这也是它成为最著名星座的原因之一。"],stars:[[5.92,7.4],[5.42,6.3],[5.68,-1.9],[5.6,-1.2],[5.53,-.3],[5.8,-9.7],[5.24,-8.2],[5.58,9.9]],lines:[[0,7],[0,2],[1,3],[2,3],[3,4],[2,5],[1,6]]},{id:"taurus",en:"TAURUS",cn:"金牛座",img:"assets/constellations/taurus.jpg",season:"1 月",area:797,rank:17,star:"毕宿五 0.87 等",dso:"M45 昴星团 · M1 蟹状星云",desc:"金牛座 V 字形的脸是毕星团，肩上有著名的昴星团（七姊妹）——一群年轻炽热的蓝星，被反射星云包裹。橙红色的毕宿五是它的牛眼，一颗 65 光年外的红巨星。",sections:[{t:"两张星团名片",text:'V 形的"牛脸"是毕星团——离我们最近的疏散星团（约 153 光年）；牛背上的昴星团（M45）只有约一亿岁，几颗炽热蓝星被淡淡的反射星云包裹，肉眼就能数出六七颗。'},{t:"黄道上的重要驿站",text:'太阳、月亮和行星频繁从金牛座经过。牛角尖上还挂着 1054 年超新星的遗骸——蟹状星云 M1，宋代文献里的"天关客星"说的就是它爆发的经过。'}],facts:["毕宿五直径约为太阳的 44 倍，是颗橙巨星；它其实只是恰好挡在毕星团前的前景星。",'"七姊妹"昴星团在全球文化里惊人地一致：希腊、中国与澳洲原住民都把它与七位少女联系起来。','日本斯巴鲁（Subaru）汽车的车标就是昴星团——这个名字在日语里正是"昴"。'],stars:[[4.6,16.5],[5.43,28.6],[3.78,24.1],[5.63,21.1],[4.48,15.9],[4.33,15.6],[4.01,12.5]],lines:[[6,5],[5,4],[4,0],[0,3],[3,1],[0,2]]},{id:"gemini",en:"GEMINI",cn:"双子座",img:"assets/constellations/gemini.jpg",season:"2 月",area:514,rank:30,star:"北河三 1.14 等 · 北河二 1.58 等",dso:"M35 疏散星团 · 双子座流星雨",desc:"双生子北河二（Castor）与北河三（Pollux）是星座的两颗头星。实际上北河二是一个由六颗星组成的恒星系统。每年 12 月的双子座流星雨辐射点就在这里。",sections:[{t:"一对双胞胎，两种颜色",text:'北河三是橙巨星（1.14 等），北河二是白色密近双星（1.58 等）——"β"反而比"α"亮，是拜耳当年编号时的失误。北河二放大看其实是六颗星互相绕转的聚星系统。'},{t:"全年最稳定的流星雨",text:'每年 12 月 14 日前后的双子座流星雨极大，天顶流量可逾百颗；它的母体不是彗星，而是一颗叫"法厄同"的岩质小行星，成因至今是谜。'}],facts:["北河三是离太阳最近的巨星之一（约 34 光年），已确认有一颗行星绕它运行。","1930 年汤博发现冥王星时，它就位于双子座天区。",'座内的"爱斯基摩星云"（NGC 2392）是一顶戴着毛皮帽的行星状星云。'],stars:[[7.58,31.9],[7.76,28],[6.63,16.4],[7.33,22],[6.73,25.2],[6.38,22.5]],lines:[[0,3],[3,1],[1,4],[4,2],[3,5],[5,2],[3,4]]},{id:"leo",en:"LEO",cn:"狮子座",img:"assets/constellations/leo.jpg",season:"4 月",area:947,rank:12,star:"轩辕十四 1.35 等",dso:"M65 / M66 / M95 / M96 星系群",desc:"黄道十二宫中最易辨认的星座之一，镰刀形的头部十分醒目。轩辕十四（Regulus）几乎正踩在黄道上，经常与月亮行星相合。狮子座流星雨曾爆发过每小时十万的流星暴雨。",sections:[{t:"镰刀与尾巴",text:'西半部六颗星弯成一把"镰刀"，底端是轩辕十四（1.35 等）；东边的五帝座一（2.14 等）是狮尾。轩辕十四几乎正贴黄道（不到半度），月亮和行星时常从它眼前路过。'},{t:"星系窝",text:'狮子座背对银河，正适合看深空：M65、M66 与 NGC 3628 相互撕扯，构成著名的"狮子座三重星系"，更远处还有成片的星系团成员。'}],facts:['每年 11 月的狮子座流星雨以"流星暴"闻名——1833 年那场一夜落下数万颗。','轩辕十四的名字 Regulus 意为"小王"，是全天第 21 亮星。','轩辕十四、五帝座一、大角、角宿一连成的"春季大三角"是春夜认星的骨架。'],stars:[[10.14,12],[11.82,14.6],[10.33,19.8],[11.23,20.5],[9.76,23.8],[11.23,15.4],[10.28,23.4]],lines:[[0,5],[5,1],[1,3],[3,2],[2,0],[2,6],[6,4],[4,0]]},{id:"virgo",en:"VIRGO",cn:"室女座",img:"assets/constellations/virgo.jpg",season:"5 月",area:1294,rank:2,star:"角宿一 0.98 等",dso:"室女座星系团（约 1300 个星系）",desc:"全天第二大星座，角宿一（Spica）是一颗炽热的蓝白双星。星座深处藏着数千个星系组成的室女座星系团——本超星系团的中心，银河系正缓缓坠向它。",sections:[{t:"春夜的白色角宿一",text:"角宿一（0.98 等）是密近双星，两颗星靠得太近、被彼此引力拉成了椭球形；北斗勺柄划出的大弧线滑过大角星后，正好落在它身上。"},{t:"银河系的上层社会",text:"室女座方向聚集着离我们最近的大星系团（约 5400 万光年、上千个星系）；M87 中心的黑洞，就是 2019 年人类拍到的第一张黑洞照片的主角。"}],facts:["整个本星系群正以每秒约 185 公里的速度朝室女座星系团坠落。","室女座是黄道星座中面积第二大的（1294 平方度），太阳要在里面走上 44 天。",'角宿一蓝白炽热，与秋天的心宿二一红一蓝，是两个季节各自的"南极星标"。'],stars:[[13.42,-11.2],[13.03,11],[12.69,-1.4],[12.93,3.7],[11.85,3.6]],lines:[[0,2],[2,3],[3,1],[2,4]]},{id:"scorpius",en:"SCORPIUS",cn:"天蝎座",img:"assets/constellations/scorpius.jpg",season:"7 月",area:497,rank:33,star:"心宿二 1.06 等（红超巨星）",dso:"M4 · M80 球状星团",desc:"夏夜南方天空中最威严的星座，蜿蜒如一只巨大的蝎子。心脏处的安达里士（Antares）是一颗红超巨星，直径是太阳的 700 倍——若放在太阳的位置，火星轨道都会被吞没。",sections:[{t:"心宿二：火星的对手",text:'心宿二（1.06 等）是红超巨星，直径约为太阳的 700 倍，颜色与火星相近——希腊语 Antares 意为"火星的对手"；中国古代称它"大火"，《诗经》"七月流火"说的就是它西沉。'},{t:"一条钩子挂满星团",text:'从心宿二向南弯出长长的钩子，挂在银河最亮的一段上；钩尖"猫眼"双星旁，M6 蝴蝶星团与 M7 托勒密星团肉眼可见。'}],facts:["心宿二与参宿四、毕宿五并称全天三大红超巨星，都已临近生命的终点。",'北半球中纬度只能看到天蝎的"上半身"，整条钩子要到南方才看得全。',"天蝎—人马方向正对银河系中心，那里的恒星密度是反方向的十几倍。"],stars:[[16.49,-26.4],[16.09,-19.8],[16,-22.6],[15.98,-20.1],[16.84,-34.3],[16.87,-38],[17.56,-37.2],[17.52,-37.3],[17.62,-43]],lines:[[1,2],[2,3],[3,0],[0,4],[4,5],[5,6],[6,7],[6,8]]},{id:"lyra",en:"LYRA",cn:"天琴座",img:"assets/constellations/lyra.jpg",season:"8 月",area:286,rank:52,star:"织女星 0.03 等",dso:"M57 环状星云 · M56",desc:"俄耳甫斯的竖琴。织女星（Vega）是全天第五亮星，一万两千年后将成为北极星。琴身平行四边形内的 M57 环状星云，是一颗恒星死亡后抛出的彩色烟圈。",sections:[{t:"织女星与她的琴",text:"织女星（0.03 等）是全天第五亮星，自转极快（约 12.5 小时）因此呈扁球形；它距我们仅 25 光年，周围已发现尘埃盘与行星的迹象。"},{t:"一颗死去的太阳",text:"β 与 γ 之间夹着环状星云 M57：一颗恒星把自己的外壳抛成烟圈，中心留下一颗白矮星——大约 50 亿年后太阳的结局就是这个样子。"}],facts:['由于岁差，约 1.2 万年后织女星将取代北极星，成为新的"北极星"。','天琴座 ε 是著名的"双双星"：两对双星又互相绕转，是小望远镜测分辨率的经典目标。','苏联 1984 年的金星与哈雷彗星探测器"织女星"（Vega），就是以这颗星命名的。'],stars:[[18.62,38.8],[18.83,33.4],[18.98,32.7],[18.75,37.6],[18.9,36.9]],lines:[[0,3],[3,1],[1,2],[2,4],[4,0],[3,4]]},{id:"cygnus",en:"CYGNUS",cn:"天鹅座",img:"assets/constellations/cygnus.jpg",season:"9 月",area:804,rank:16,star:"天津四 1.25 等",dso:"北美洲星云 · 面纱星云 · Cygnus X-1",desc:"展翅的天鹅沿银河飞翔，十字形十分醒目。尾部的天津四（Deneb）距我们约 2600 光年却仍是全天最亮星之一——它的真实光度是太阳的 20 万倍。喙部的辇道增七是最美的金蓝双星。",sections:[{t:"北十字与银河渡口",text:'天鹅展翅横跨银河，五星组成"北十字"。尾部的天津四（1.25 等）距离约 2600 光年、光度近太阳 20 万倍——是肉眼可见最遥远的恒星之一。'},{t:"黑洞与系外行星的猎场",text:"天鹅座 X-1 是人类确认的第一个黑洞（霍金曾为此打赌并认输）；开普勒太空望远镜的主巡天区也在天鹅座，数千颗系外行星在这里被发现。"}],facts:['天津四、织女、牛郎组成"夏季大三角"，是夏夜认星的第一课。',"辇道增七（β Cyg）是全天最美的双星：一金一蓝，小望远镜里像一对宝石。",'天鹅座翅膀上的"北美洲星云"NGC 7000，轮廓竟和北美洲地图出奇地像。'],stars:[[20.69,45.3],[20.37,40.3],[20.77,34],[19.75,45.1],[19.51,28]],lines:[[0,1],[1,2],[1,3],[1,4]]},{id:"aquila",en:"AQUILA",cn:"天鹰座",img:"assets/constellations/aquila.jpg",season:"8 月",area:652,rank:22,star:"河鼓二（牛郎星）0.76 等",dso:"M16 鹰状星云（创生之柱）",desc:"银河东岸的雄鹰。牛郎星（Altair）与两侧的河鼓一、河鼓三排成一线，与织女星隔着银河相望——这就是七夕传说的原型。星座深处是创生之柱所在的鹰状星云。",sections:[{t:"牛郎与扁担",text:"河鼓二（牛郎星，0.77 等）两侧各有一颗小星，中国民间看作扁担挑着两个孩子；河鼓一、三与牛郎排成笔直一线，夏夜银河东岸一眼可辨。"},{t:"银河上的大裂缝",text:'天鹰座方向的银河被一条纵贯的暗带切开——"大暗隙"。那不是没有星，而是银河系旋臂之间巨大的尘埃分子云挡住了背后的星光。'}],facts:["牛郎星自转一周只需约 9 小时（是太阳的 25 倍），被离心力甩成了明显的扁球。","牛郎星距我们仅 16.7 光年，是肉眼可见恒星里最近的一批。","座内的天鹰 η 是一颗造父变星——亮度按固定周期脉动，是丈量宇宙距离的标尺。"],stars:[[19.85,8.9],[19.77,10.6],[19.92,6.4],[19.08,13.9],[20.18,-.8]],lines:[[0,1],[0,2],[0,4],[1,3]]},{id:"ursa-major",en:"URSA MAJOR",cn:"大熊座",img:"assets/constellations/ursa-major.jpg",season:"4 月",area:1280,rank:3,star:"玉衡 1.77 等",dso:"M81 / M82 星系 · M101 风车星系",desc:"北斗七星所在。斗口两星延长五倍即是北极星——几千年来为旅人指引方向。斗柄第二星开阳旁有一颗肉眼可见的小星，古代阿拉伯人用它检验视力。",sections:[{t:"北斗只是熊的一部分",text:'七星组成的其实是熊的尾巴和后背。天枢、天璇、天玑、天权与玉衡同属一个"大熊移动星群"——五颗星正结伴朝同一方向漂移，其余两颗只是恰好同路。'},{t:"斗里的星系原野",text:'斗内 M81 与 M82 是一对正在互相撕扯的星系，M82 的"星暴"让它成为天文爱好者最爱的目标之一；斗柄尽头还有正对我们的风车星系 M101。'}],facts:['开阳旁边那颗 4 等的"辅"（Alcor），古代阿拉伯人拿它当视力表。',"七颗星的自行各不相同，约 10 万年后北斗将不再像一把勺子。",'天璇、天枢连线延长五倍即是北极星——这是北斗最实用的"指极"功能。'],stars:[[11.06,61.8],[11.03,56.4],[11.9,53.7],[12.26,57],[12.9,56],[13.4,54.9],[13.79,49.3]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]]},{id:"cassiopeia",en:"CASSIOPEIA",cn:"仙后座",img:"assets/constellations/cassiopeia.jpg",season:"11 月",area:598,rank:25,star:"王良四 2.24 等",dso:"仙后座 A（最强射电源）· 心脏星云",desc:'北极星另一侧的 W 形星座，与北斗隔北极星遥遥相对。1572 年第谷在此目睹超新星爆发，动摇了"天界永恒不变"的信念；星座深处的仙后座 A 至今仍是全天最亮射电源。',sections:[{t:"与北斗对望的 W",text:"仙后座与北斗隔着北极星相望：一个落下时另一个必定升起，北天永远有一个在指路。五颗亮星排成 W（或 M），银河正好从座内穿过。"},{t:"改写宇宙观的一次爆发",text:'1572 年第谷在仙后座看到一颗超新星，证明"天界永恒不变"的旧宇宙观是错的；今天的仙后座 A 仍是全天最亮的射电源之一——那是一场约 300 年前、却几乎无人记录的超新星。'}],facts:['仙后座 A 爆发于约 1670 年，当时只留下极模糊的记录，如今成了射电天文学的"实验室"。',"W 形五颗亮星几乎都是变星或双星，亮度会微微起伏。",'座内疏散星团极密：M52、M103 与"猫头鹰星团"NGC 457 都在双筒望远镜的甜区。'],stars:[[.15,59.1],[.68,56.5],[.95,60.7],[1.43,60.2],[1.9,63.7]],lines:[[0,1],[1,2],[2,3],[3,4]]},{id:"canis-major",en:"CANIS MAJOR",cn:"大犬座",img:"assets/constellations/canis-major.jpg",season:"2 月",area:380,rank:43,star:"天狼星 −1.46 等（全天最亮）",dso:"M41 疏散星团",desc:"猎户的猎犬，驮着全天最亮的恒星天狼星（Sirius）——它只有 8.6 光年远。古埃及人以天狼星偕日升起预言尼罗河泛滥；它还有一颗白矮星伴星，称为天狼 B。",sections:[{t:"全天最亮的恒星",text:"天狼星 −1.46 等，距我们仅 8.6 光年；它其实是一对双星——天狼 A 比太阳亮 25 倍，伴星天狼 B 则把一颗太阳的质量压进了地球大小的体积里。"},{t:"正在被撕碎的星系",text:'2003 年天文学家在天狼星身后发现"大犬座矮星系"，离银河系仅约 2.5 万光年，是已知最近的星系，正被银河系的潮汐力一点点撕碎吞并。'}],facts:["古埃及人以天狼星与太阳同升（偕日升）预告尼罗河泛滥，古埃及历法由此而来。","天狼 B 直到 1862 年才被望远镜捕获，是人类最早确认的白矮星之一。","天狼星南方 4° 的 M41 疏散星团肉眼隐约可见，天候好时不用望远镜也能数星。"],stars:[[6.75,-16.7],[6.38,-18],[7.04,-15.6],[7.14,-26.4],[6.98,-29],[7.4,-29.3]],lines:[[0,1],[0,2],[0,3],[3,4],[3,5]]},{id:"crux",en:"CRUX",cn:"南十字座",img:"assets/constellations/crux.jpg",season:"5 月（南天）",area:68,rank:88,star:"十字架二 0.77 等",dso:"煤袋星云 · 珠宝盒星团",desc:"全天最小的星座，却是南半球的图腾——十字长轴延长四倍半即指向南天极。十字左下是黑暗的煤袋星云，航海者用它辨认银河中的空洞。",sections:[{t:"全天最小的星座",text:"只有 68 平方度，是 88 星座里最小的一个，却是南半球最著名的路标：十字长轴延长约 4.5 倍，就指向没有亮星标记的南天极。"},{t:"煤袋与珠宝盒",text:'十字旁的"煤袋星云"是一大团遮光的暗尘埃，南太平洋原住民称之为"天空的裂隙"；十字右脚旁的珠宝盒星团（NGC 4755）在望远镜里红蓝宝石般的颜色交错。'}],facts:["南十字出现在澳大利亚、新西兰、巴西、萨摩亚等多国国旗上。","十字架二（α Cru）是一对炽热的蓝白双星；十字架一（γ）则是颗红巨星。","北半球中纬度只在春季的南方低空短暂可见——古代北方水手直到南下才第一次见到它。"],stars:[[12.44,-63.1],[12.79,-59.7],[12.52,-57.1],[12.25,-58.7],[12.35,-60.4]],lines:[[0,2],[1,3],[0,4],[1,4]]}],tu={mercury:"离太阳最近、也是最小的行星，昼夜温差近 600°C。",venus:"被硫酸云包裹的孪生兄弟，地表 464°C，比水星更热。",earth:"目前已知唯一存在生命的世界，71% 的表面被海洋覆盖。",mars:"锈红色的沙漠世界，拥有太阳系最高的火山与最长的峡谷。",jupiter:"质量是其余七颗行星总和的 2.5 倍，一场风暴刮了三百年。",saturn:"环系宽 28 万公里、厚度却常不足 10 米的气态巨行星。",uranus:"躺着自转的冰巨星，一个极点的极昼长达 42 年。",neptune:"先被算出来、才被看到的海蓝色行星，风速可达 2100 km/h。"};for(let i of Vn)tu[i.id]&&(i.desc=tu[i.id]);var oi={sun:["太阳每秒把约 400 万吨物质转成能量，剩下的氢还够它再烧 50 亿年。","你现在看到的太阳，其实是 8 分 20 秒前的太阳——光走完这段路需要这么久。",'太阳表面 5500°C，外层日冕却高达百万度。这层"反常加热"至今没有完整解释。'],mercury:["水星上从一次日出到下一次日出要 176 个地球日，比它的一年（88 天）还长一倍。","没有大气保温，它白天 427°C、夜里 -173°C，昼夜温差近 600°C，八大行星之最。",'水星轨道离心率 0.21，近日点与远日点相差 2400 万公里，是八大行星里最"扁"的轨道。'],venus:["金星自转一圈要 243 个地球日，比它绕太阳一圈（225 天）还慢——金星的一天比一年长。","它是逆向自转的，所以在金星上太阳从西边升起、东边落下。","地表气压相当于地球海面下 900 米，苏联探测器平均存活不到两小时。"],earth:['地球不是完美球体：赤道半径比极半径长 21 公里，是自转甩出来的"赤道鼓包"。',"地磁场每隔几十万年翻转一次，上一次翻转发生在约 78 万年前。","月球正以每年 3.8 厘米远离地球，同时拖慢地球自转——恐龙时代的一天只有 23 小时。"],mars:["奥林帕斯山高 21.9 公里，是珠峰的 2.5 倍；底座宽 600 公里，能把整个法国盖住。","水手谷长约 4000 公里，如果搬到地球，可以从纽约一直延伸到洛杉矶。","火星沙尘暴能笼罩整颗行星数月，2001 年那次让全球表面温度升高了几十度。"],jupiter:["木星自转一圈不到 10 小时，是八大行星里最快的，所以被明显压扁成一个扁球。","大红斑在 100 多年里从 4 万公里缩到 1.6 万公里，如今仍在继续缩小。","1994 年苏梅克-列维 9 号彗星撞上木星，留下的撞击疤痕比整个地球还大。"],saturn:["土星平均密度只有 0.687 g/cm³，比水还低——理论上它能浮在一个足够大的水池里。","环里的颗粒从微米级尘埃到房屋大小都有，其中 99.9% 是水冰。","北极的六边形风暴宽 3 万公里，每条边都比地球直径长。"],uranus:['自转轴倾斜 98°，几乎是"躺着"绕太阳滚，每个极点的极昼长达 42 年。',"它是最冷的行星，最低温 -224°C，比更远的海王星还冷——原因至今没定论。","1781 年赫歇尔发现天王星，这是人类用望远镜发现的第一颗行星。"],neptune:["海王星是唯一一颗先被算出来、再被看到的行星：1846 年天文学家在预测位置 1° 内找到了它。","风速可达每小时 2100 公里，是太阳系最快——尽管它收到的阳光只有地球的千分之一。","海卫一逆向公转，几乎可以肯定它是被海王星俘获的柯伊伯带天体。"],halley:["上一次回归是 1986 年，下一次是 2061 年 7 月 28 日——同一个人一生中最多见它两次。",'1910 年地球穿过了它的彗尾，当时有人兜售"防彗星药丸"，成了科学传播史上的著名笑话。'],encke:["它的轨道完全落在地球轨道以内，是极少数能闯进内太阳系的短周期彗星。",'每次回归周期都比上一次短约 2.5 小时，这种持续"缩水"被称为恩克效应。'],churyumov:["罗塞塔号在它身边陪伴了 786 天，绕行、变轨、释放着陆器，最后随它一起撞向彗核。","菲莱着陆器落点偏差了约 1 公里，弹跳两次后停在一处阴影里，靠太阳能勉强工作了 60 小时。"],wild2:['星尘号带回的尘埃里有一颗编号"Inti"的颗粒，形成于太阳诞生之前，比太阳还老。','它的轨道 1974 年被木星引力改写，从柯伊伯带被"拽"进内太阳系，所以表面很年轻。'],io:['它是太阳系唯一被确认拥有"活"火山、且火山喷发柱能冲出大气层外的天体。',"木卫一每绕木星一圈，就会被潮汐揉搓两次，形变幅度可达 100 米。"],europa:["它的表面几乎没有一处高于 1 公里的地形，是太阳系最平的固体表面。","哈勃曾在它的喷发羽流里探测到水汽——如果成立，采样可能不必钻透冰壳。"],titan:["它的大气压是地球的 1.5 倍，是太阳系唯一有浓密氮气大气的卫星。",'表面的湖泊里装的是液态甲烷与乙烷，相当于一座座"天然气湖"。'],triton:["它是太阳系唯一一颗大型逆行卫星，公转方向与海王星自转相反。"],phobos:["从火星表面看，火卫一从西边升起、东边落下，一天两次，而且每隔几年就会遮住一次太阳。"],moon:["月球正以每年 3.8 厘米远离地球；阿波罗任务在月面留下的反射镜，至今仍被用来测量这个距离。"]};oi.sun&&(Sl.facts=oi.sun);for(let i of Vn)oi[i.id]&&(i.facts=oi[i.id]);for(let i in vs)for(let t of vs[i])oi[t.id]&&(t.info.facts=oi[t.id]);for(let i of bl)oi[i.id]&&(i.info.facts=oi[i.id]);var Xe=Math.PI/180,ge=.46;function El(i){return .0115*Math.pow(Math.max(i,.5),.42)}var ya=430*ge,su=396/2*ge,Di=[[0,0],[.387,16],[.723,28],[1,40],[1.524,55],[5.203,88],[9.537,122],[19.19,152],[30.07,175],[39.48,194]];function qe(i){let t=Math.max(0,i);for(let o=1;o<Di.length;o++){let[a,l]=Di[o-1],[c,h]=Di[o];if(t<=c)return(l+(h-l)*(t-a)/(c-a))*2}let[e,n]=Di[Di.length-2],[s,r]=Di[Di.length-1];return(r+(t-s)*((r-n)/(s-e)))*2}function Ma(i){return i.getTime()/864e5+24405875e-1}function ru(i){return new Date((i-24405875e-1)*864e5)}function Sa(i){return(i-2451545)/36525}function Hg(i,t){let n=(2e3+(t-2451545)/365.25-2e3)*365.25,s=360/i.period,r=(i.l0+s*n)*Xe,o=i.peri*Xe,a=i.node*Xe,l=i.i*Xe,c=r-o;c=Math.atan2(Math.sin(c),Math.cos(c));let h=c;for(let u=0;u<5;u++)h-=(h-i.e*Math.sin(h)-c)/(1-i.e*Math.cos(h));let d=2*Math.atan2(Math.sqrt(1+i.e)*Math.sin(h/2),Math.sqrt(1-i.e)*Math.cos(h/2)),f=i.a*(1-i.e*Math.cos(h)),m=d+(o-a),_=f*(Math.cos(a)*Math.cos(m)-Math.sin(a)*Math.sin(m)*Math.cos(l)),g=f*(Math.sin(a)*Math.cos(m)+Math.cos(a)*Math.sin(m)*Math.cos(l)),p=f*Math.sin(m)*Math.sin(l);return{lon:Math.atan2(g,_),lat:Math.atan2(p,Math.hypot(_,g)),ratio:f/i.a}}function ys(i,t){return wl(Al[i],t)}function wl(i,t){let e=t*36525+2451545,n=Hg(i,e),s=qe(i.a)*n.ratio*ge;return{pos:[Math.cos(n.lon)*s,Math.sin(n.lat)*s,Math.sin(n.lon)*s],r:s,lon:n.lon}}function Tl(i,t=256){let e=i.node*Xe,n=i.i*Xe,s=i.peri*Xe-e,r=qe(i.a),o=[];for(let a=0;a<t;a++){let l=a/t*2*Math.PI,c=l;for(let x=0;x<5;x++)c-=(c-i.e*Math.sin(c)-l)/(1-i.e*Math.cos(c));let h=2*Math.atan2(Math.sqrt(1+i.e)*Math.sin(c/2),Math.sqrt(1-i.e)*Math.cos(c/2)),d=1-i.e*Math.cos(c),f=h+s,m=Math.cos(e)*Math.cos(f)-Math.sin(e)*Math.sin(f)*Math.cos(n),_=Math.sin(e)*Math.cos(f)+Math.cos(e)*Math.sin(f)*Math.cos(n),g=Math.sin(f)*Math.sin(n),p=Math.atan2(_,m),u=Math.atan2(g,Math.hypot(m,_)),v=r*d*ge;o.push([Math.cos(p)*v,Math.sin(u)*v,Math.sin(p)*v])}return o}function au(i,t=256){let e=[];for(let n=0;n<t;n++){let s=n/t*Math.PI*2;e.push([Math.cos(s)*i,0,Math.sin(s)*i])}return e}function ou(i,t=0){let e=Al[i],n=qe(e.a),s=.9/n,r=.05/Math.sqrt(n),o=zg[i]??.1,a=Math.sin(t*r+o*5)*s,l=kg[i]??.02,c=Math.cos(a)*n*ge,h=Math.sin(a)*n*(1-l)*ge,d=Math.sin(a)*n*(1-l)*Math.sin((e.i||0)*Xe)*ge;return{pos:[c,d,h],r:Math.hypot(c,h)}}var zg={mercury:.02,venus:.07,earth:.12,mars:.17,jupiter:.22,saturn:.27,uranus:.32,neptune:.37},kg={mercury:.13,venus:.04,earth:.02,mars:.09,jupiter:.05,saturn:.05,uranus:.05,neptune:.01},Al={mercury:{a:.3871,e:.2056,i:7.005,node:48.331,peri:77.456,l0:252.251,period:87.969},venus:{a:.7233,e:.0068,i:3.395,node:76.68,peri:131.533,l0:181.98,period:224.701},earth:{a:1,e:.0167,i:0,node:0,peri:102.937,l0:100.464,period:365.256},mars:{a:1.5237,e:.0934,i:1.85,node:49.558,peri:336.041,l0:355.433,period:686.98},jupiter:{a:5.2029,e:.0484,i:1.304,node:100.464,peri:14.331,l0:34.351,period:4332.589},saturn:{a:9.5367,e:.0539,i:2.486,node:113.666,peri:93.057,l0:50.077,period:10759.22},uranus:{a:19.1892,e:.0473,i:.773,node:74.006,peri:173.005,l0:314.055,period:30685.4},neptune:{a:30.0699,e:.0086,i:1.77,node:131.784,peri:48.124,l0:304.348,period:60189}};function lu(i,t,e=256){return Tl(Al[i],e)}function cu(i){let t=i*36525,e=(218.316+13.176396*t)*Xe,n=(134.963+13.064993*t)*Xe,s=(93.272+13.22935*t)*Xe,r=e+6.289*Xe*Math.sin(n),o=5.128*Xe*Math.sin(s),l=10*(385001-20905*Math.cos(n))/385e3,c=Math.cos(o),h=l*c*Math.cos(r),d=l*c*Math.sin(r),f=l*Math.sin(o);return{pos:[h,f,-d],r:l,lon:r}}function Vg(i,t){let e=ys(i,t),n=ys("earth",t),s=e.pos[0]-n.pos[0],r=e.pos[2]-n.pos[2];return Math.atan2(-r,s)}function Gg(i){let t=i.map(n=>(n%(2*Math.PI)+2*Math.PI)%(2*Math.PI)).sort((n,s)=>n-s),e=0;for(let n=0;n<t.length;n++){let s=(n===t.length-1?t[0]+2*Math.PI:t[n+1])-t[n];s>e&&(e=s)}return 2*Math.PI-e}function hu(i,t=3650,e=2){let n=["mercury","venus","mars","jupiter","saturn"],s=[];for(let a=0;a<=t;a+=e){let l=Sa(i+a),c=Gg(n.map(h=>Vg(h,l)))/Xe;s.push([a,c])}let r=[];for(let a=1;a<s.length-1;a++)s[a][1]<=s[a-1][1]&&s[a][1]<=s[a+1][1]&&s[a][1]<=135&&r.push({jd:i+s[a][0],spread:s[a][1]});let o=[];for(let a of r){let l=o[o.length-1];if(l&&a.jd-l.jd<90){a.spread<l.spread&&(o[o.length-1]=a);continue}o.push(a)}return o.slice(0,6)}function Ms(i){let t=ru(i),e=n=>String(n).padStart(2,"0");return`${t.getFullYear()}.${e(t.getMonth()+1)}.${e(t.getDate())}`}function Rl(i){let t=ru(i),e=n=>String(n).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}`}function Ss(i){let t=new Uint8Array(512),e=new Uint8Array(256),n=i>>>0;for(let a=0;a<256;a++)e[a]=a;for(let a=255;a>0;a--){n=n*1664525+1013904223>>>0;let l=n%(a+1);[e[a],e[l]]=[e[l],e[a]]}for(let a=0;a<512;a++)t[a]=e[a&255];let s=a=>a*a*(3-2*a),r=(a,l,c)=>{let h=a&3,d=h<2?l:c,f=h<2?c:l;return(h&1?-d:d)+(h&2?-f:f)};function o(a,l){let c=Math.floor(a)&255,h=Math.floor(l)&255;a-=Math.floor(a),l-=Math.floor(l);let d=s(a),f=s(l),m=t[c]+h,_=t[c+1]+h;return(r(t[m],a,l)*(1-d)+r(t[_],a-1,l)*d)*(1-f)+(r(t[m+1],a,l-1)*(1-d)+r(t[_+1],a-1,l-1)*d)*f}return function(l,c,h=4){let d=0,f=.5,m=1;for(let _=0;_<h;_++)d+=f*o(l*m,c*m),f*=.5,m*=2.1;return d}}function Ui(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Pe(i,t,e,n){let s=i(t,e),r=i(t-n,e);return(s*(n-t)+r*t)/n}function pe(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function ba(i,t=7){let[s,r]=Ui(1024,512),o=r.createImageData(1024,512),a=Ss(t),l=Ss(t+100),c=(h,d,f,m,_)=>{let g=(d*1024+h)*4;o.data[g]=f,o.data[g+1]=m,o.data[g+2]=_,o.data[g+3]=255};for(let h=0;h<512;h++){let d=h/512;for(let f=0;f<1024;f++){let m=f/1024*8,_=h/512*4,g=[128,128,128];if(i==="rocky"||i==="moon"){let p=i==="moon",u=p?[134,130,124]:[144,132,118],v=p?[82,78,75]:[90,80,70],x=p?[192,188,180]:[200,186,168],S=Pe(a,m*1.6,_*1.6,13)*.5+.5,C=Pe(l,m*5,_*5,40)*.5+.5,T=Pe(a,m*12+7,_*12,96)*.5+.5,A=Math.min(1,(S*.55+C*.3+T*.15)*1.25);if(g=pe(v,u,A),A>.62&&(g=pe(g,x,(A-.62)*1.8)),p){let y=Pe(l,m*.55+3,_*.55,4.4)*.5+.5;y>.6&&(g=pe(g,[56,54,57],Math.min(.75,(y-.6)*2.4)))}let I=Pe(l,m*22,_*22,176)*.5+.5;I>.86?g=pe(g,[42,40,38],(I-.86)*2.2):I<.1&&(g=pe(g,x,(.1-I)*3))}else if(i==="venus"){let p=Pe(a,m*.5,_*2.2+Math.sin(m*.8)*.6,4);g=pe([166,138,104],[214,188,148],.45+p*.55)}else if(i==="earth"){let u=Pe(a,m,_,8)*.5+.5+.18*(Pe(l,m*2.3,_*2.3,18)+.5),v=Math.abs(d-.5)*2;if(u>.62){let x=Math.min(1,(u-.62)*4),S=pe([64,110,52],[168,148,96],x);v>.78&&(S=pe(S,[235,240,245],(v-.78)/.22)),g=S}else{let x=Math.min(1,(.62-u)*3);g=pe([44,84,130],[16,38,74],x)}v>.92&&(g=pe(g,[240,245,250],(v-.92)/.08))}else if(i==="mars"){let p=Pe(a,m,_,8)*.5+.5,u=Pe(l,m*.5+3,_*.5,4)*.5+.5;g=pe([120,58,34],[204,122,74],p),g=pe(g,[86,44,28],u*.45);let v=Math.abs(d-.5)*2;v>.93&&(g=pe(g,[232,226,218],(v-.93)/.07))}else if(i==="jupiter"){let p=Pe(a,m*.7,_*3,5)*.35,v=Math.sin((d*14+p)*Math.PI)*.5+.5;g=pe([148,106,76],[222,198,168],v);let x=Pe(l,m*1.4,_*1.4,4)*.5+.5;g=pe(g,[104,74,54],(1-x)*.3);let S=.3*1024,C=.66*512,T=Math.min(Math.abs(f-S),1024-Math.abs(f-S)),A=h-C,I=T*T/7225+A*A/900;I<1&&(g=pe([188,92,62],g,I*.8+.2))}else if(i==="saturn"){let p=Pe(a,m*.4,_*2,4)*.18,u=Math.sin((d*18+p)*Math.PI)*.5+.5;g=pe([196,168,122],[234,216,180],u);let v=Math.abs(d-.5)*2;v>.85&&(g=pe(g,[150,148,128],(v-.85)/.15))}else if(i==="ice"){let p=Pe(a,m*.5,_*2,4)*.12,u=Math.sin((d*10+p)*Math.PI)*.5+.5;g=pe([122,168,190],[168,210,224],u);let v=Pe(l,m,_,4)*.5+.5;g=pe(g,[92,140,168],(1-v)*.25)}c(f,h,g[0],g[1],g[2])}}return r.putImageData(o,0,0),s}function Cl(i,t,e=3){let n=i.getContext("2d"),s=Ss(e);for(let r=0;r<t;r++){let o=s(r*2.7,r*1.3,2)*.5+.5,a=s(r*1.1+40,r*2.3,2)*.5+.5,l=2+(s(r*3.1,r*4.7,1)*.5+.5)*9,c=o*i.width,h=a*i.height*.9+i.height*.05;for(let d of[-i.width,0,i.width]){let f=n.createRadialGradient(c+d,h,l*.1,c+d,h,l);f.addColorStop(0,"rgba(0,0,0,0.15)"),f.addColorStop(.62,"rgba(0,0,0,0.05)"),f.addColorStop(.8,"rgba(0,0,0,0)"),f.addColorStop(.92,"rgba(255,250,240,0.09)"),f.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=f,n.beginPath(),n.arc(c+d,h,l,0,Math.PI*2),n.fill()}}return i}function uu(){let[e,n]=Ui(512,32),s=Ss(99);for(let r=0;r<512;r++){let o=r/512,a=s(o*40,.5,3)*.5+.5,l=.55+a*.45;(o<.06||o>.97)&&(l*=.15),o>.62&&o<.7&&(l*=.12),o<.3&&(l*=.55+o*1.5);let c=216+a*24,h=200+a*20,d=172+a*16;n.fillStyle=`rgba(${c|0},${h|0},${d|0},${l})`,n.fillRect(r,0,1,32)}return e}function tr(i,t,e=256){let[n,s]=Ui(e,e),r=s.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);return r.addColorStop(0,i),r.addColorStop(.25,t),r.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=r,s.fillRect(0,0,e,e),n}function Ea(i=64){let[t,e]=Ui(i,i),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i),t}function du(i=55){let[n,s]=Ui(1024,512),r=s.createImageData(1024,512),o=Ss(i);for(let a=0;a<512;a++)for(let l=0;l<1024;l++){let c=Pe(o,l/1024*16,a/512*8,16)*.5+.5,h=o(l/30,a/30,3)*.5+.5,d=c*.7+h*.3,f=pe(pe([255,120,30],[255,190,70],d),[255,236,160],Math.max(0,d-.72)*2.4),m=(a*1024+l)*4;r.data[m]=f[0],r.data[m+1]=f[1],r.data[m+2]=f[2],r.data[m+3]=255}return s.putImageData(r,0,0),n}function fu(i=128,t=512){let[e,n]=Ui(i,t),s=n.createImageData(i,t);for(let r=0;r<t;r++){let o=r/(t-1),a=i*.34*(1-o*.8),l=Math.min(1,Math.pow(o/.26,.65)),c=Math.pow(1-o,1.35);for(let h=0;h<i;h++){let d=(h-i/2)/Math.max(a,1),f=Math.max(0,1-Math.abs(d)),m=Math.exp(-d*d*2.6)*Math.pow(f,.7)*l*c,_=Math.max(0,1-o*3),g=(r*i+h)*4;s.data[g]=200+_*55,s.data[g+1]=226+_*26,s.data[g+2]=255,s.data[g+3]=Math.min(255,m*255*1.35)}}return n.putImageData(s,0,0),e}function pu(i=30,t=512,e=null){let[n,s]=Ui(t,t),r=Ss(i*7+13),o=s.createImageData(t,t),a=e||[120,68,42],l=e?1.35:1;for(let c=0;c<t;c++)for(let h=0;h<t;h++){let d=(h-t/2)/(t/2),f=(c-t/2)/(t/2),m=Math.sqrt(d*d+f*f),_=r(h/70,c/70,5)*.5+.5,g=r(h/24+9,c/24,3)*.5+.5,p=Math.max(0,1-m),u=Math.pow(Math.max(0,_*.75+g*.25-.32),1.25)*Math.pow(p,1.5)*2.6,v=(c*t+h)*4,x=_*.7+g*.3;o.data[v]=Math.min(255,a[0]+x*135*l),o.data[v+1]=Math.min(255,a[1]+x*95*l),o.data[v+2]=Math.min(255,a[2]+x*62*l),o.data[v+3]=Math.min(235,u*255)}return s.putImageData(o,0,0),n}function An(i){let t=typeof window<"u"?window.__ASSET_MAP:null;return t&&t[i]||i}var Fi=2e4,mu=.5;function gu(i,t){let e=i*15*Math.PI/180,n=t*Math.PI/180,s=Math.cos(n)*Math.cos(e),r=Math.sin(n),o=-Math.cos(n)*Math.sin(e),a=Math.cos(mu),l=Math.sin(mu),c=r*a-s*l,h=r*l+s*a;return new R(h,c,o).normalize()}function Ni(i){return i.s=(i.s*16807+11)%2147483647,i.s/2147483647}function Wg(i){let t=[[0,[155,176,255]],[.25,[190,210,255]],[.5,[255,255,250]],[.75,[255,228,180]],[1,[255,180,130]]],e=t[0],n=t[t.length-1];for(let r=0;r<t.length-1;r++)i>=t[r][0]&&i<=t[r+1][0]&&(e=t[r],n=t[r+1]);let s=(i-e[0])/(n[0]-e[0]||1);return[e[1][0]+(n[1][0]-e[1][0])*s,e[1][1]+(n[1][1]-e[1][1])*s,e[1][2]+(n[1][2]-e[1][2])*s]}function Oi(i,t,e,n,s=0,r=0,o=.16){let a={s:n},l=new Float32Array(i*3),c=new Float32Array(i*3);for(let f=0;f<i;f++){let m=Ni(a)*2-1,_=Ni(a)*2-1,g=Ni(a)*2-1,p=Math.hypot(m,_,g)||1;if(m/=p,_/=p,g/=p,s>0&&Ni(a)<s){_*=o*(.4+Ni(a)*.9);let x=.5,S=_*Math.cos(x)-m*Math.sin(x);m=_*Math.sin(x)+m*Math.cos(x),_=S}l[f*3]=m*Fi,l[f*3+1]=_*Fi,l[f*3+2]=g*Fi;let u=Wg(Ni(a));r>0&&(u=[u[0]+(255-u[0])*r,u[1]+(240-u[1])*r,u[2]+(215-u[2])*r]);let v=.55+Ni(a)*.45;c[f*3]=u[0]/255*v,c[f*3+1]=u[1]/255*v,c[f*3+2]=u[2]/255*v}let h=new Zt;h.setAttribute("position",new le(l,3)),h.setAttribute("color",new le(c,3));let d=new Pi({size:t,map:new fn(Ea()),transparent:!0,opacity:e,vertexColors:!0,sizeAttenuation:!1,depthWrite:!1,blending:Ee});return new Tn(h,d)}function _u(){let i=new Ge,t=new ms().load(An("assets/tex/sky/milky-way-4k.jpg"));t.colorSpace=ie;let e=new Qt(new pn(Fi*.985,64,40),new We({map:t,side:Ce,color:13947082,depthWrite:!1,depthTest:!1}));e.renderOrder=-1e3,window.__sky=e,e.rotation.set(0,0,0),t.wrapS=Bs,i.add(e),i.add(Oi(3500,1.1,.75,12345,0)),i.add(Oi(2600,1.8,.9,54321,.55)),i.add(Oi(700,2.6,1,999,.75)),i.add(Oi(180,4.2,1,777,0)),i.add(Oi(16e3,1,.55,31337,.92,.72)),i.add(Oi(9e3,1.5,.6,42424,.88,.55)),i.add(Oi(3600,2.4,.65,51515,.8,.4));let n=new Ge;window.__constData=[];let s=[];for(let a of va){let l=a.stars.map(([x,S])=>gu(x,S).multiplyScalar(Fi*.995)),c=[];for(let[x,S]of a.lines)c.push(l[x],l[S]);let h=new Zt().setFromPoints(c),d=new wn({color:14206106,transparent:!0,opacity:.26,blending:Ee,depthWrite:!1}),f=new na(h,d);n.add(f);let m=new Float32Array(l.length*3);l.forEach((x,S)=>{m[S*3]=x.x,m[S*3+1]=x.y,m[S*3+2]=x.z});let _=new Zt;_.setAttribute("position",new le(m,3));let g=new Pi({map:new fn(Ea()),color:16774109,size:14,sizeAttenuation:!1,transparent:!0,opacity:.3,depthWrite:!1,blending:Ee}),p=new Pi({map:new fn(Ea()),color:16775402,size:5.5,sizeAttenuation:!1,transparent:!0,opacity:.92,depthWrite:!1,blending:Ee});n.add(new Tn(_,g)),n.add(new Tn(_,p));let u=l.reduce((x,S)=>x.add(S.clone().normalize()),new R).normalize().multiplyScalar(Fi*.99),v={id:a.id,en:a.en,cn:a.cn,desc:a.desc,img:a.img,center:u,lineMat:d,haloMat:g,coreMat:p};s.push(v),window.__constData.push(v)}n.userData.setHighlight=a=>{for(let l of s){let c=l.id===a,h=a?.45:1;l.lineMat.opacity=c?.92:.26*h,l.lineMat.color.setHex(c?16769704:14206106),l.haloMat.opacity=(c?.8:.22)*(c?1:h),l.haloMat.size=c?16:14,l.coreMat.opacity=c?1:.85*h,l.coreMat.size=c?7.5:5.5}},n.name="constellations",i.add(n);let r=new Ge;window.__nebData=[];let o=[];for(let a of nu){let l=gu(a.ra,a.dec),c=pu(a.hue,512,a.rgb),h=new fn(c);h.colorSpace=ie;let d=a.size>4400?.22:.28,f=new En(new dn({map:h,transparent:!0,opacity:d,depthWrite:!1,blending:Ee})),m=l.clone().multiplyScalar(Fi*.93);f.position.copy(m),f.scale.setScalar(a.size),r.add(f);let _=document.createElement("canvas");_.width=_.height=360;let g=_.getContext("2d");g.fillStyle="#05060a",g.fillRect(0,0,360,360),g.globalCompositeOperation="lighter",g.drawImage(c,0,0,360,360),g.drawImage(c,0,0,360,360);let p=a.img?An(a.img):null,u={id:a.id,info:a,center:m.clone(),size:a.size,sprite:f,baseOp:d,img:p||_.toDataURL("image/jpeg",.88)};o.push(u),window.__nebData.push(u)}return r.userData.setHighlight=a=>{for(let l of o)l.sprite.material.opacity=l.id===a?Math.min(.72,l.baseOp*2.6):l.baseOp*(a?.55:1)},r.name="nebulae",i.add(r),i}var Rn=El(696e3),bs={sun:8,mercury:4,venus:5.2,earth:6.8,moon:1.6,mars:6,jupiter:12.2,saturn:14.5,uranus:8.8,neptune:6.7,pluto:5,belt:12},Ta=new ms,xu=new R,wa=new R;function Pl(i,t){Ta.load(An(i),e=>{e.colorSpace=ie,e.anisotropy=8,t.map=e,t.emissiveMap&&(t.emissiveMap=e),t.needsUpdate=!0})}function Cn(i){let t=new fn(i);return t.colorSpace=ie,t.anisotropy=4,t}function Xg(i=256){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=i/2,s=e.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"#fff6d8"),s.addColorStop(.35,"#ffd98a"),s.addColorStop(.72,"#ffab3d"),s.addColorStop(.94,"#f97e1e"),s.addColorStop(1,"rgba(249,110,20,0)"),e.fillStyle=s,e.fillRect(0,0,i,i);let r=20260901,o=()=>(r=(r*1664525+1013904223)%4294967296)/4294967296;e.globalCompositeOperation="overlay";for(let l=0;l<900;l++){let c=o()*Math.PI*2,h=Math.sqrt(o())*n*.9,d=n+Math.cos(c)*h,f=n+Math.sin(c)*h;e.fillStyle=o()<.5?"rgba(255,244,214,0.25)":"rgba(200,90,20,0.20)",e.beginPath(),e.arc(d,f,1+o()*3,0,Math.PI*2),e.fill()}e.globalCompositeOperation="destination-in";let a=e.createRadialGradient(n,n,n*.985,n,n,n);return a.addColorStop(0,"rgba(0,0,0,1)"),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=a,e.fillRect(0,0,i,i),e.globalCompositeOperation="source-over",Cn(t)}function qg(i,t,e,n=.42){let s=new ce({uniforms:{uColor:{value:new vt(e)},uStrength:{value:n}},vertexShader:`
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uColor;
      uniform float uStrength;
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        float f = 1.0 - max(dot(normalize(vN), normalize(vV)), 0.0);
        f = pow(f, 3.0);
        gl_FragColor = vec4(uColor, f * uStrength);
      }`,transparent:!0,blending:Ee,depthWrite:!1,side:Mn}),r=new Qt(new pn(t*1.03,48,32),s);return r.renderOrder=2,i.add(r),r}var Aa=class{constructor(t){this.scene=t,this.group=new Ge,t.add(this.group),this.bodies=new Map,this._orbitsOn=!0,this._posMode="schematic",this._buildLights(),this._buildSun();for(let e of Vn)this._buildPlanet(e);this._buildBelt(),this._buildComets(),this._buildShadowCones()}_register(t,e,n,s,r){let o=new Ge;o.add(e),(r||this.group).add(o);let a={id:t,mesh:e,holder:o,info:n,displayR:s,worldPos:new R};return this.bodies.set(t,a),a}_buildLights(){this.sunLight=new Js(16774370,3.2,0,0),this.group.add(this.sunLight),this.group.add(new la(3817544,.6)),this.camLight=new Js(15920610,.22,0,0),this.scene.add(this.camLight)}_buildSun(){let t=new pn(Rn,64,32),e=new We({map:Cn(du())});Ta.load(An("assets/tex/planets/sun-4k.jpg"),o=>{o.colorSpace=ie,e.map=o,e.needsUpdate=!0}),e.color=new vt(1.5,1.38,1.2),this._register("sun",new Qt(t,e),{...Sl,type:"star"},Rn);let n=this._glow1=new En(new dn({map:new fn(tr("rgba(255,190,90,0.95)","rgba(255,120,30,0.35)")),blending:Ee,depthWrite:!1,transparent:!0}));n.scale.setScalar(Rn*1.9);let s=this._glow2=new En(new dn({map:new fn(tr("rgba(255,150,60,0.30)","rgba(255,90,20,0.10)")),blending:Ee,depthWrite:!1,transparent:!0}));s.scale.setScalar(Rn*4.6),this.bodies.get("sun").holder.add(n,s);let r=this._sunDisc=new En(new dn({map:Xg(),transparent:!0,depthWrite:!1}));r.material.color.setRGB(1.35,1.26,1.12),r.scale.setScalar(Rn*2.3),r.renderOrder=4,this.bodies.get("sun").holder.add(r)}_buildPlanet(t){let e=El(t.radiusKm),n=ba(t.type,7+t.id.length*3),s=new si({map:Cn(n),roughness:.94,metalness:.02});t.tex&&Pl(`assets/tex/${t.tex}`,s);let r=new Qt(new pn(e,48,32),s),o=this._register(t.id,r,t,e);t.atmo&&(o.rim=qg(r,e,t.atmo,t.id==="earth"?.55:.4));let a=t.color||"#ffffff",l=new En(new dn({map:Cn(tr("rgba(255,255,255,1)","rgba(255,255,255,0)")),color:new vt(a),blending:Ee,depthWrite:!1,depthTest:!1,transparent:!0,opacity:.5}));if(l.scale.setScalar(e*4.2),l.renderOrder=3,r.add(l),o.halo=l,o.spin=t.spin,o.moons=(vs[t.id]||[]).map((_,g)=>{let p=e*_.r,u=e*_.orbit,v=ba("moon",30+g*11);Cl(v,60);let x=new si({map:Cn(v),roughness:.97});_.tex&&Pl(`assets/tex/${_.tex}`,x),_.tint&&x.color.set(_.tint);let S=new Qt(new pn(p,24,16),x),C=_.incl??.05,T=[];for(let D=0;D<180;D++){let H=D/180*Math.PI*2;T.push(new R(Math.cos(H)*u,Math.sin(H)*u*C,-Math.sin(H)*u))}let A=new Zt().setFromPoints(T),I=new wn({color:14206106,transparent:!0,opacity:0,depthWrite:!1}),y=new Ci(A,I);o.holder.add(y),o.moonRings=o.moonRings||[],o.moonRings.push(I),this.get(t.id).holder.add(S);let b="moon-"+(_.id||t.id+"-"+g);return this.bodies.set(b,{id:b,mesh:S,holder:null,info:_.info||{kind:"moon",en:"MOON",cn:"卫星"},displayR:p,worldPos:new R,isMoon:!0,parent:t.id}),{mesh:S,orbitR:u,period:_.period,phase:g*2.1,incl:C,entry:this.bodies.get(b)}}),o.moonOuter=o.moons.reduce((_,g)=>Math.max(_,g.orbitR),0),t.id==="earth"){let _=new Qt(new pn(e*1.018,48,32),new si({map:null,transparent:!0,depthWrite:!1,roughness:1,opacity:.9}));Ta.load(An("assets/tex/planets/earth-clouds-4k.jpg"),g=>{g.colorSpace=ie,_.material.map=null,_.material.alphaMap=g,_.material.color.set(16777215),_.material.opacity=.92,_.material.needsUpdate=!0}),r.add(_),o.clouds=_}if(t.ring){let _=e*1.12,g=e*2.35,p=new Ys(_,g,128,1),u=p.attributes.position,v=p.attributes.uv,x=new R;for(let C=0;C<u.count;C++){x.fromBufferAttribute(u,C);let T=(x.length()-_)/(g-_);v.setXY(C,T,.5)}let S=new Qt(p,new We({map:Cn(uu()),side:Ve,transparent:!0,depthWrite:!1}));Ta.load(An("assets/tex/planets/saturn-ring.png"),C=>{C.colorSpace=ie,S.material.map=C,S.material.needsUpdate=!0}),S.rotation.x=Math.PI/2-.47,r.add(S),o.ring=S}let c=lu(t.id,Sa(2451545),3e3).map(_=>new R(_[0],_[1],_[2])),h=new Ci(new Zt().setFromPoints(c),new wn({color:11058386,transparent:!0,opacity:.15}));this.group.add(h),o.orbit=h;let d=qe(t.elements.a)*ge,f=au(d,256).map(_=>new R(_[0],_[1],_[2])),m=new Ci(new Zt().setFromPoints(f),new wn({color:9676736,transparent:!0,opacity:.075}));this.group.add(m),o.orbitRing=m}_buildBelt(){let t=(T,A,I,y,b,D={})=>{let H=new Float32Array(T*3),Y=b,L=()=>(Y=(Y*1664525+1013904223)%4294967296,Y/4294967296),N=D.gaps??!1,G=D.bias??.6,q=0,X=0;for(;q<T&&X<T*12;){X++;let W=Math.pow(L(),G),$=A+(I-A)*W;if(N){let V=($-A)/Math.max(I-A,1e-4);if(Math.min(Math.abs(V-.28),Math.abs(V-.55),Math.abs(V-.76))<.028&&L()>.22)continue}let j=L()*Math.PI*2,lt=.85+L()*.3;H[q*3]=Math.cos(j)*$*lt,H[q*3+1]=(L()-.5)*y,H[q*3+2]=Math.sin(j)*$*lt,q++}return H.subarray(0,q*3)},e=(T,A)=>{let I=T.getAttribute("position").count,y=new Float32Array(I),b=new Float32Array(I),D=new Float32Array(I*3),H=A.seed,Y=()=>(H=(H*1664525+1013904223)%4294967296,H/4294967296);for(let L=0;L<I;L++){y[L]=.72+Y()*.62,b[L]=Math.pow(Y(),1.35);let N=Y();D[L*3]=A.rgb[0]*(.86+N*.28),D[L*3+1]=A.rgb[1]*(.86+N*.24),D[L*3+2]=A.rgb[2]*(.88+(1-N)*.24)}T.setAttribute("aSize",new le(y,1)),T.setAttribute("aReveal",new le(b,1)),T.setAttribute("aTint",new le(D,3))},n={vertexShader:`
        attribute float aSize;
        attribute float aReveal;
        attribute vec3 aTint;
        uniform float uPixelRatio;
        uniform float uBaseSize;
        uniform float uDetail;
        uniform float uOpacity;
        varying vec3 vTint;
        varying float vAlpha;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          float appear = smoothstep(aReveal - 0.1, aReveal + 0.02, uDetail);
          vAlpha = appear * uOpacity;
          vTint = aTint;
          gl_PointSize = max(0.9, uBaseSize * aSize) * uPixelRatio;
        }`,fragmentShader:`
        varying vec3 vTint;
        varying float vAlpha;
        void main() {
          if (vAlpha <= 0.004) discard;
          gl_FragColor = vec4(vTint, vAlpha);
        }`},s=(qe(1.524)+bs.mars+2)*ge,r=(qe(5.203)-bs.jupiter-2)*ge,o=t(12e3,s,r,.8*ge,20260901,{gaps:!0,bias:.72}),a=new Zt;a.setAttribute("position",new le(o,3)),e(a,{rgb:[.68,.66,.62],seed:90210});let l=new ce({vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,uniforms:{uPixelRatio:{value:Math.min(devicePixelRatio,2)},uBaseSize:{value:.6},uDetail:{value:1},uOpacity:{value:.06}},transparent:!0,depthWrite:!1});this.belt=new Tn(a,l),this.beltMat=l,this.group.add(this.belt);let c=(r-s)*.05,h=new ce({uniforms:{uOpacity:{value:.1},uColor:{value:new vt("#cfc8b8")},uInner:{value:s},uOuter:{value:r},uGapWidth:{value:c},uGapA:{value:qe(2.5)*ge},uGapB:{value:qe(2.82)*ge},uGapC:{value:qe(3.27)*ge}},vertexShader:`
        varying vec2 vLocal;
        void main() {
          vLocal = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform float uOpacity;
        uniform vec3 uColor;
        uniform float uInner;
        uniform float uOuter;
        uniform float uGapWidth;
        uniform float uGapA;
        uniform float uGapB;
        uniform float uGapC;
        varying vec2 vLocal;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
                     mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
        }
        float gap(float radius, float center) {
          return clamp(abs(radius - center) / uGapWidth, 0.06, 1.0);
        }
        void main() {
          float radius = length(vLocal);
          if (radius < uInner || radius > uOuter) discard;
          float t = (radius - uInner) / max(uOuter - uInner, 0.0001);
          float angle = atan(vLocal.y, vLocal.x);
          float edge = smoothstep(0.0, 0.16, t) * (1.0 - smoothstep(0.72, 1.0, t));
          float density = noise(vec2(angle * 2.4, t * 3.2)) * 0.65 + noise(vec2(angle * 7.5, t * 9.0)) * 0.35;
          float gaps = gap(radius, uGapA) * gap(radius, uGapB) * gap(radius, uGapC);
          float alpha = edge * (0.3 + 0.7 * density) * gaps * uOpacity;
          if (alpha <= 0.002) discard;
          gl_FragColor = vec4(uColor, alpha);
        }`,transparent:!0,depthWrite:!1,side:Ve}),d=new Qt(new Ys(s,r,256,12),h);d.rotation.x=Math.PI/2,this.group.add(d),this.beltFog=d;let f=(qe(30.07)+bs.neptune+6)*ge,m=(qe(30.07)+bs.neptune+6+45)*ge,_=t(14e3,f,m,9*ge,77123,{bias:.62}),g=new Zt;g.setAttribute("position",new le(_,3)),e(g,{rgb:[.66,.74,.88],seed:31337});let p=new ce({vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,uniforms:{uPixelRatio:{value:Math.min(devicePixelRatio,2)},uBaseSize:{value:1.3},uDetail:{value:1},uOpacity:{value:.06}},transparent:!0,depthWrite:!1});this.kuiper=new Tn(g,p),this.group.add(this.kuiper);let u=(qe(30.07)+bs.neptune+6+45+18)*ge,v=(qe(30.07)+bs.neptune+6+45+18+90)*ge,x=t(16e3,u,v,26*ge,88091,{bias:.55}),S=new Zt;S.setAttribute("position",new le(x,3)),e(S,{rgb:[.5,.58,.78],seed:20260901});let C=new ce({vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,uniforms:{uPixelRatio:{value:Math.min(devicePixelRatio,2)},uBaseSize:{value:1.2},uDetail:{value:1},uOpacity:{value:.06}},transparent:!0,depthWrite:!1});this.oort=new Tn(S,C),this.group.add(this.oort)}_buildComets(){this.comets=[];let t=Cn(fu());t.generateMipmaps=!1,t.minFilter=Be,t.magFilter=Be;let e=new R(0,1,0);for(let n of bl){let s=Math.max(.055,n.radiusKm*.016),r=new Ge,o=new Qt(new ra(s,1),new si({color:8225675,roughness:1,metalness:0}));r.add(o);let a=new En(new dn({map:Cn(tr("rgba(226,244,255,0.95)","rgba(120,170,255,0)")),color:new vt(n.color),blending:Ee,depthWrite:!1,transparent:!0,opacity:.85}));a.scale.setScalar(s*26),r.add(a);let l=new Ws(1,1);l.translate(0,-.5,0);let c=new Qt(l,new We({map:t,color:new vt(n.color),transparent:!0,opacity:.75,blending:Ee,depthWrite:!1,side:Ve}));c.frustumCulled=!1,r.add(c),this.group.add(r);let h="comet-"+n.id,d={id:h,mesh:o,holder:r,info:n.info||n,displayR:s,worldPos:new R,coma:a,tail:c,comet:n,isComet:!0,focusR:n.focusR||s*4,orbitAlways:!0};this.bodies.set(h,d),this.comets.push(d);let f=Tl(n.elements,3e3).map(_=>new R(_[0],_[1],_[2])),m=new Ci(new Zt().setFromPoints(f),new wn({color:10470632,transparent:!0,opacity:.12,depthWrite:!1}));this.group.add(m),d.orbit=m}this._cometUp=e}_buildShadowCones(){let t=(e,n,s,r,o)=>{let a=new sa(n,s,e,32,1,!0);a.translate(0,-e/2,0);let l=new We({color:r,transparent:!0,opacity:o,side:Ve,depthWrite:!1,blending:Qn}),c=new Qt(a,l);return c.visible=!1,c};this.earthUmbra=t(36,.46,.004,3547156,.4),this.earthPenumbra=t(10.5,.46,.74,2364944,.16),this.moonUmbra=t(1.45,.11,.01,2365982,.5),this.shadowSpot=new Qt(new ia(.022,32),new We({color:394243,transparent:!0,opacity:.72,depthWrite:!1})),this.shadowSpot.visible=!1,this.eclipseKind=null,this.eclipsePhase=0,this.eclipseAnnular=!1,this.eclipsePartial=!1,this.group.add(this.shadowSpot),this.group.add(this.earthUmbra,this.earthPenumbra,this.moonUmbra)}setEclipseShadows(t){this.earthUmbra.visible=t==="lunar",this.earthPenumbra.visible=t==="lunar",this.shadowSpot.visible=t==="solar",this.moonUmbra.visible=t==="solar",this.eclipseKind=t==="solar"||t==="lunar"?t:null,this.eclipsePhase=0}setOrbitsVisible(t){this._orbitsOn=t,this._syncOrbitMode(),this.belt.visible=t,this.kuiper&&(this.kuiper.visible=t),this.oort&&(this.oort.visible=t),this.beltFog&&(this.beltFog.visible=t)}_syncOrbitMode(){let t=this._orbitsOn!==!1,e=this._posMode==="real";for(let n of this.bodies.values())n.orbitRing&&(n.orbitRing.visible=!!(t&&!e)),n.orbit&&(n.orbit.visible=!!(t&&(e||n.orbitAlways)))}update(t,e,n,s=0,r="schematic"){let o=Sa(t);if(this._posMode!==r&&(this._posMode=r,this._syncOrbitMode()),this._glow1){let _=this.bodies.get("sun").worldPos,g=n?n.position.distanceTo(_):200,p=1;if(n){wa.copy(_).project(n);let u=Math.max(Math.abs(wa.x),Math.abs(wa.y));p=wa.z>1?0:Math.min(1,Math.max(0,(1.5-u)/.45))}this._glow1.material.opacity=Math.min(1,40/Math.max(g,1))*.95*p,this._glow2.material.opacity=Math.min(1,120/Math.max(g,1))*.8*p}if(this.beltMat&&n){let _=n.position.length();this.beltMat.uniforms.uBaseSize.value=Math.min(2.2,Math.max(.8,1.4*Math.pow(Math.max(_,1)/240,-.18)))}for(let _ of Vn){let g=this.bodies.get(_.id),p=r==="real"?ys(_.id,o).pos:ou(_.id,s).pos;if(g.holder.position.set(p[0],p[1],p[2]),g.worldPos.copy(g.holder.position),g.halo&&n){let u=n.position.distanceTo(g.worldPos),v=25*g.displayR,x=60*g.displayR;g.halo.material.opacity=Math.max(0,Math.min(1,(u-v)/x))*.45}if(_.rotationHours){let u=_.rotationHours<0?-1:1;g.mesh.rotation.y=u*(t*24/Math.abs(_.rotationHours)%1)*Math.PI*2+u*s*.045}g.clouds&&(g.clouds.rotation.y+=e*8e-4);for(let u of g.moons||[]){let v=s*Math.PI*2/(12+1.6*Math.abs(u.period)),x=t/u.period*Math.PI*2+u.phase+v;u.mesh.position.set(Math.cos(x)*u.orbitR,Math.sin(x)*u.orbitR*u.incl,-Math.sin(x)*u.orbitR),u.entry&&u.mesh.getWorldPosition(u.entry.worldPos)}if(g.moonRings&&n){let u=n.position.distanceTo(g.worldPos),v=Math.min(.34,Math.max(0,(14-u)/10))*.9;for(let x of g.moonRings)x.opacity=v}}let a=this.bodies.get("earth"),l=cu(o);if(!this.bodies.get("moon")){let _=ba("moon",11);Cl(_,110);let g=new si({map:Cn(_),roughness:.96,emissiveMap:Cn(_),emissive:new vt(0,0,0)});Pl("assets/tex/planets/moon-4k.jpg",g);let p=new Qt(new pn(.124,40,28),g),u=this._register("moon",p,eu,.124,this.get("earth").holder);u.isMoon=!0}let h=this.bodies.get("moon");if(h.holder.position.set(l.pos[0],l.pos[1],l.pos[2]),a.holder.updateWorldMatrix(!0,!0),h.holder.getWorldPosition(h.worldPos),this.eclipseKind){let _=Math.max(-1,Math.min(1,this.eclipsePhase||0)),g=a.worldPos.clone().negate().normalize(),p=new R().crossVectors(g,new R(0,1,0));p.lengthSq()<1e-8&&p.set(1,0,0),p.normalize();let u;if(this.eclipseKind==="solar"){let v=Math.max(a.worldPos.length(),Rn*1.5),x=Rn/v,S=this.eclipseAnnular?.9:1.06,C=.124/(x*S),T=Rn*C/v+.124,A=this.eclipsePartial?.45:0,I=T*(A+(1-A)*Math.abs(_));u=g.clone().multiplyScalar(C).addScaledVector(p,_<0?-I:I),this._moonShadowLen=Math.max(.3,C-.22),this.eclipseCover=Math.max(0,1-Math.abs(_))}else{let v=g.clone().negate(),x=this.eclipsePartial?.4:0,S=x+(.62-x)*Math.abs(_);u=v.multiplyScalar(10).addScaledVector(p,_<0?-S:S)}h.holder.position.copy(u),h.worldPos.copy(a.worldPos).add(u)}let d=a.worldPos.clone().negate().normalize();this.earthUmbra.position.copy(a.worldPos),this.earthPenumbra.position.copy(a.worldPos),this.earthUmbra.quaternion.setFromUnitVectors(new R(0,1,0),d),this.earthPenumbra.quaternion.copy(this.earthUmbra.quaternion);let f=this.bodies.get("moon"),m=f.worldPos.clone().sub(a.worldPos).normalize();if(this.moonUmbra.position.copy(f.worldPos),this.moonUmbra.quaternion.setFromUnitVectors(new R(0,1,0),m),this.eclipseKind==="solar"&&this._moonShadowLen&&this.moonUmbra.scale.set(1,this._moonShadowLen/1.45,1),this.shadowSpot.visible){let g=a.worldPos.clone().sub(f.worldPos),p=g.length(),u=g.multiplyScalar(1/p),x=a.worldPos.clone().sub(f.worldPos).dot(u),S=f.worldPos.distanceToSquared(a.worldPos)-.455*.455,C=x*x-S;if(C>=0&&x>0){let T=x-Math.sqrt(C);if(T>0&&T<p+.455){let I=f.worldPos.clone().add(u.clone().multiplyScalar(T)).clone().sub(a.worldPos).normalize();this.shadowSpot.position.copy(a.worldPos).add(I.clone().multiplyScalar(.455*1.006)),this.shadowSpot.quaternion.setFromUnitVectors(new R(0,0,1),I);let y=this.eclipseCover==null?1:this.eclipseCover;this.shadowSpot.scale.setScalar(.55+.65*y),this.shadowSpot.material.opacity=.16+.58*y,this.shadowSpot.visible=y>.02}else this.shadowSpot.visible=!1}else this.shadowSpot.visible=!1}if(this.comets)for(let _ of this.comets){let g=wl(_.comet.elements,o).pos;_.holder.position.set(g[0],g[1],g[2]),_.worldPos.copy(_.holder.position);let p=Math.hypot(g[0],g[1],g[2])||1,v=new R(-g[0],-g[1],-g[2]).normalize().clone().negate();if(n){let C=n.position.clone().sub(_.holder.position).normalize(),T=new R().crossVectors(v,C);T.lengthSq()<1e-6&&T.set(1,0,0),T.normalize();let A=new R().crossVectors(T,v).normalize();_.tail.quaternion.setFromRotationMatrix(new oe().makeBasis(T,v,A))}let x=Math.min(1,80/p),S=_.comet.tailLen*(.42+x*.85);_.tail.scale.set(S*.55,S,1),_.tail.material.opacity=.22+x*.62,_.coma.material.opacity=.18+x*.7,_.coma.scale.setScalar(_.displayR*(14+x*26))}this.belt.rotation.y+=e*35e-5}syncSunDisc(t){if(!this._sunDisc||!t)return;let e=this.bodies.get("sun").worldPos,n=t.position.distanceTo(e),s=Rn/(n*Math.tan(t.fov*Math.PI/360))*(window.innerHeight/2),r=Math.min(1,Math.max(0,(160-s)/30));this._sunDisc.material.opacity=r,this._sunDisc.visible=r>.01&&this.group.visible,this._sunDisc.visible&&(xu.copy(t.position).sub(e).normalize(),this._sunDisc.position.copy(xu.multiplyScalar(Rn*1.03)))}get(t){return this.bodies.get(t)}allIds(){return[...this.bodies.keys()]}};var Yg=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;var $g=i=>i<.5?16*i*i*i*i*i:1-Math.pow(-2*i+2,5)/2,je=(i,t,e)=>Math.min(e,Math.max(t,i)),Ra={yaw:.0012,yawDeep:.0024,pitch:.0011,pitchDeep:.0024},Ca=class{constructor(t,e){this.camera=t,this.dom=e,this.target=new R(0,0,0),this.viewHeight=128,this.yaw=0,this.pitch=.03,this._tTarget=this.target.clone(),this._tViewHeight=this.viewHeight,this._tYaw=this.yaw,this._tPitch=this.pitch,this.viewHeightRange=[.45,1520],this.followBody=null,this.screenShift=0,this._tScreenShift=0,this._lastFollow=new R,this._flight=null,this.onFlightDone=null,this.onFlightCancel=null,this._drag=null,this._inertia={yaw:0,pitch:0},this.autoOrbit={on:!1,speed:.058},this._zoomTouched=0,this.fovForVH=null,this.freePitch=!1,this.inputLock=!1,this._eul=new ds(0,0,0,"YXZ"),this._quat=new Sn,this._off=new R,this._bind()}get dragInvert(){return!this.freePitch}get _dist(){let t=this.camera.fov*Math.PI/180;return this.viewHeight/(2*Math.tan(t/2))}_applyCamera(){let t=this._dist;this._eul.set(-this.pitch,this.yaw,0,"YXZ"),this._quat.setFromEuler(this._eul),this._off.set(0,0,1).applyQuaternion(this._quat).multiplyScalar(t),this.camera.position.copy(this.target).add(this._off),this.camera.quaternion.copy(this._quat),Math.abs(this.screenShift)>5e-4?this.camera.setViewOffset(innerWidth,innerHeight,this.screenShift*innerWidth/2,0,innerWidth,innerHeight):this.camera.view&&this.camera.view.enabled&&this.camera.clearViewOffset()}_poseFrom(t,e){let n=t.clone().sub(e),s=n.length()||.001,r=2*s*Math.tan(this.camera.fov*Math.PI/360);if(this.fovForVH)for(let o=0;o<3;o++)r=2*s*Math.tan(this.fovForVH(r)*Math.PI/360);return{target:e.clone(),viewHeight:r,yaw:Math.atan2(n.x,n.z),pitch:Math.asin(je(n.y/s,-1,1))}}_bind(){let t=this.dom,e=new Map;t.addEventListener("pointerdown",s=>{if(!this.inputLock){if(this._flight&&this.cancelFlight(),e.set(s.pointerId,[s.clientX,s.clientY]),e.size===2){let[r,o]=[...e.values()];this._pinch={d0:Math.max(20,Math.hypot(r[0]-o[0],r[1]-o[1])),vh0:this._tViewHeight},this._drag=null,this._inertia.yaw=0,this._inertia.pitch=0;return}e.size>2||(this._drag={x:s.clientX,y:s.clientY,id:s.pointerId,t:performance.now()},this._inertia.yaw=0,this._inertia.pitch=0,t.setPointerCapture?.(s.pointerId))}}),t.addEventListener("pointermove",s=>{if(e.has(s.pointerId)&&e.set(s.pointerId,[s.clientX,s.clientY]),this._pinch){if(e.size>=2){let[_,g]=[...e.values()],p=Math.max(20,Math.hypot(_[0]-g[0],_[1]-g[1]));this._tViewHeight=je(this._pinch.vh0*this._pinch.d0/p,...this.viewHeightRange),this._zoomTouched=performance.now()}return}if(!this._drag||s.pointerId!==this._drag.id)return;let r=s.clientX-this._drag.x,o=s.clientY-this._drag.y,a=performance.now(),l=Math.max(8,a-this._drag.t)/1e3;this._drag.x=s.clientX,this._drag.y=s.clientY,this._drag.t=a;let c=this.dragInvert?-1:1,h=this.freePitch?Ra.yawDeep:Ra.yaw,d=this.freePitch?Ra.pitchDeep:Ra.pitch;this._tYaw+=c*r*h;let f=c*-o*d;this._tPitch=this.freePitch?this._tPitch+f:je(this._tPitch+f,-1.35,1.35);let m=Math.min(1,l*14);this._inertia.yaw+=(c*r*h/l-this._inertia.yaw)*m,this._inertia.pitch+=(c*-o*d/l-this._inertia.pitch)*m});let n=s=>{if(e.delete(s?.pointerId),this._pinch){if(e.size<2&&(this._pinch=null,!this.inputLock&&e.size===1)){let[r,o]=[...e.entries()][0];this._drag={x:o[0],y:o[1],id:r,t:performance.now()},this._inertia.yaw=0,this._inertia.pitch=0}return}this._drag&&(this._drag=null,this._inertia.yaw=je(this._inertia.yaw,-3.4,3.4),this._inertia.pitch=je(this._inertia.pitch,-2.2,2.2))};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),window.addEventListener("wheel",s=>{if(s.target.closest&&s.target.closest(".pc-sec, #planetCard, #eventsPanel, #constPanel, #planetRail, #timebar, #evTimeline")||(s.preventDefault(),this.inputLock))return;this._flight&&this.cancelFlight();let r=je(s.deltaY*(s.deltaMode===1?16:s.deltaMode===2?innerHeight:1),-180,180);this._tViewHeight=je(this._tViewHeight*Math.exp(r*.0011),...this.viewHeightRange),this._zoomTouched=performance.now()},{passive:!1})}flyTo({camPos:t,target:e,duration:n=2.4,onDone:s,arc:r=0,easing:o=$g,shift:a}){let l=this._poseFrom(t,e||this.target);l.shift=a??this._tScreenShift,this._flight={from:{target:this.target.clone(),viewHeight:this.viewHeight,yaw:this.yaw,pitch:this.pitch,shift:this.screenShift},to:l,dur:Math.max(n,.05),t:0,easing:o},this.onFlightDone=s||null,this.onFlightCancel=null,this.inputLock=!1}cancelFlight(){if(this._flight&&(this._flight=null,this.onFlightCancel)){let t=this.onFlightCancel;this.onFlightCancel=null,t()}}get isFlying(){return!!this._flight}follow(t){this.followBody=t||null,t&&this._lastFollow.copy(t.worldPos)}setScreenShift(t=0){this._tScreenShift=t}setTarget(t){this.target.copy(t),this._tTarget.copy(t)}setRange(t,e){let n=2*Math.tan(this.camera.fov*Math.PI/360);this.viewHeightRange=[Math.max(.02,t*n),e*n]}setFreePitch(t){this.freePitch=!!t,t||(this.pitch=je(this.pitch,-1.35,1.35),this._tPitch=je(this._tPitch,-1.35,1.35))}setAutoOrbit(t){this.autoOrbit.on=t}setAutoOrbitSpeed(t){this.autoOrbit.speed=t}update(t){if(this._flight){let e=this._flight;e.t=Math.min(1,e.t+t/e.dur);let n=e.easing?e.easing(e.t):Yg(e.t);this.target.lerpVectors(e.from.target,e.to.target,n),this.viewHeight=Math.exp(Math.log(e.from.viewHeight)*(1-n)+Math.log(e.to.viewHeight)*n);let s=Math.atan2(Math.sin(e.to.yaw-e.from.yaw),Math.cos(e.to.yaw-e.from.yaw));if(this.yaw=e.from.yaw+s*n,this.pitch=e.from.pitch+(e.to.pitch-e.from.pitch)*n,this.screenShift=e.from.shift+(e.to.shift-e.from.shift)*n,this._tScreenShift=this.screenShift,this._syncTargets(),e.t>=1&&(this._flight=null,this.onFlightDone)){let r=this.onFlightDone;this.onFlightDone=null,r()}}else{if(this.followBody){let n=this.followBody.worldPos.clone().sub(this._lastFollow);this.target.add(n),this._tTarget.add(n),this._lastFollow.copy(this.followBody.worldPos)}if(this.autoOrbit.on&&!this._drag&&(this._tYaw+=this.autoOrbit.speed*t),!this._drag){let n=Math.exp(-3.4*t);this._tYaw+=this._inertia.yaw*t;let s=this._inertia.pitch*t;this._tPitch=this.freePitch?this._tPitch+s:je(this._tPitch+s,-1.35,1.35),this._inertia.yaw*=n,this._inertia.pitch*=n,Math.abs(this._inertia.yaw)<.004&&(this._inertia.yaw=0),Math.abs(this._inertia.pitch)<.004&&(this._inertia.pitch=0)}let e=this._drag?1-Math.pow(.004,t):1-Math.pow(.018,t);this.target.lerp(this._tTarget,e),this.yaw+=(this._tYaw-this.yaw)*e,this.pitch+=(this._tPitch-this.pitch)*e,this.viewHeight=Math.exp(Math.log(this.viewHeight)*(1-e)+Math.log(this._tViewHeight)*e),this.screenShift+=(this._tScreenShift-this.screenShift)*e}if(this.fovForVH){let e=this.fovForVH(this.viewHeight);Math.abs(e-this.camera.fov)>.02&&(this.camera.fov=e,this.camera.updateProjectionMatrix())}this._applyCamera()}_syncTargets(){this._tTarget.copy(this.target),this._tViewHeight=this.viewHeight,this._tYaw=this.yaw,this._tPitch=this.pitch}applyPitchLink(t=128){if(this.freePitch||this._drag||this._flight||performance.now()-this._zoomTouched>2200)return;let e=je(this._tViewHeight,1,4e3),n=je(Math.log(e/t)/Math.log(4e3/t),0,1);this._tPitch=n>0?.03+n*.62:.03*je(e/t,0,1)}};var Zg=Vn,Es=-new Date().getTimezoneOffset()/60,Jg=Es===8?"北京时间":`UTC${Es>=0?"+":""}${Es}`,Kg=Es===8?"北京":`UTC${Es>=0?"+":""}${Es}`,Ll="http://www.w3.org/2000/svg";function Wt(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var Pa=[{v:0,label:"暂停",mult:0},{v:1/86400,label:"实时",mult:1},{v:60/86400,label:"实时",mult:60},{v:3600/86400,label:"实时",mult:3600},{v:86400/86400,label:"实时",mult:86400},{v:864e3/86400,label:"实时",mult:864e3}],jg=i=>i===1?"实时":i<3600?`×${i}`:i===3600?"×3600（1时/秒）":i===86400?"×86400（1天/秒）":"（10天/秒）",La=class i{constructor(t,e){this.cb=e,this.hoverId=null,this.reticle=Wt("div","",`
      <svg width="34" height="34" viewBox="0 0 34 34">
        <g stroke="rgba(235,225,205,0.9)" stroke-width="1">
          <line x1="17" y1="2"  x2="17" y2="10"/><line x1="17" y1="24" x2="17" y2="32"/>
          <line x1="2"  y1="17" x2="10" y2="17"/><line x1="24" y1="17" x2="32" y2="17"/>
          <circle class="ring" cx="17" cy="17" r="13" fill="none" stroke="rgba(217,179,108,0.85)" stroke-width="1.1"/>
        </g>
        <circle cx="17" cy="17" r="1.6" fill="rgba(240,217,168,1)"/>
      </svg>`),this.reticle.id="reticle",t.appendChild(this.reticle),this.svg=document.createElementNS(Ll,"svg"),this.svg.id="overlay",this.hoverRing=document.createElementNS(Ll,"g"),this.hoverRing.innerHTML=`
      <circle r="20" fill="rgba(217,179,108,0.05)" stroke="none"/>
      <circle r="20" fill="none" stroke="rgba(217,179,108,0.85)" stroke-width="1.1"/>
      <line x1="-32" y1="0" x2="-24" y2="0" stroke="rgba(217,179,108,0.85)"/>
      <line x1="24" y1="0" x2="32" y2="0" stroke="rgba(217,179,108,0.85)"/>
      <line x1="0" y1="-32" x2="0" y2="-24" stroke="rgba(217,179,108,0.85)"/>
      <line x1="0" y1="24" x2="0" y2="32" stroke="rgba(217,179,108,0.85)"/>`,this.svg.appendChild(this.hoverRing),this.ringFill=this.hoverRing.querySelectorAll("circle")[0],this.ringCircle=this.hoverRing.querySelectorAll("circle")[1],this.ringTicks=this.hoverRing.querySelectorAll("line"),this.leader=document.createElementNS(Ll,"line"),this.leader.setAttribute("stroke","rgba(217,179,108,0.55)"),this.leader.setAttribute("stroke-width","1"),this.svg.appendChild(this.leader),this.hoverRing.style.opacity="0",this.hoverRing.style.transition="opacity .22s ease",this.leader.style.display="none",t.appendChild(this.svg),this.labels=Wt("div"),this.labels.id="labels",t.appendChild(this.labels),this.labelMap=new Map,this._buildTopbar(t),this._buildQuote(t),this._buildTimebar(t),this._buildFocusTitle(t),this._buildCard(t),this._buildDirPanel(t),this._buildEvents(t),this._buildConstPanel(t),this._buildRail(t),this._buildViewbar(t),this._buildAimTag(t),this._buildTip(t),this._buildBuildTag(t),this._buildTimeline(t),matchMedia("(pointer: coarse)").matches?(this.reticle.style.display="none",this.tip&&(this.tip.style.display="none")):window.addEventListener("mousemove",n=>{if(this.reticle.style.left=n.clientX+"px",this.reticle.style.top=n.clientY+"px",this.tip&&this.tip.classList.contains("show")){let s=this.tip.offsetWidth,r=this.tip.offsetHeight,o=Math.min(n.clientX+16,innerWidth-s-12),a=n.clientY-r-14<8?n.clientY+20:n.clientY-r-14;this.tip.style.left=o+"px",this.tip.style.top=a+"px"}},{passive:!0}),window.addEventListener("keydown",n=>{n.key==="Escape"&&this.hideEvents()})}_buildTopbar(t){let e=Wt("header");e.id="topbar",this.homeBtn=Wt("div","",'<span class="dot"></span>太阳系'),this.homeBtn.id="homeBtn",this.homeBtn.addEventListener("click",()=>this.cb.onGoSolar()),this.homeBtn.style.opacity="0",this.homeBtn.style.pointerEvents="none",this.homeBtn.style.transition="opacity .8s",this.tabs=Wt("nav"),this.tabs.id="tabs",this.tabs.style.opacity="0",this.tabs.style.transition="opacity .8s",this.tabEls={};for(let[n,s]of[["deep","深空"],["solar","太阳系"],["events","天象"]]){let r=Wt("button","tab",s);r.addEventListener("click",()=>{n==="events"?this.cb.onOpenEvents():this.cb.onTab(n)}),this.tabEls[n]=r,this.tabs.appendChild(r)}this.clock=Wt("div"),this.clock.id="clock",e.append(this.homeBtn,this.tabs,this.clock),t.appendChild(e)}_buildQuote(t){let e=Wt("div");e.id="quote",this.quoteEl=e,this.enterBtn=null,e.addEventListener("click",n=>{n.target.closest("#enterBtn")&&this.cb.onEnterSolar()}),t.appendChild(e),this._quoteIdx=Math.floor(Math.random()*xa.length),this._setQuote()}_setQuote(){let t=xa[this._quoteIdx%xa.length];this._quoteIdx++,this.quoteEl.innerHTML=`
      <div class="kicker">ASTRONOMICAL VOICES · 天文学思想长廊</div>
      <div class="text">“${t.text}”</div>
      <div class="who">— <b>${t.who}</b> · ${t.year}</div>
      <button id="enterBtn"><span class="zh">进入太阳系</span><span class="en">ENTER THE SOLAR SYSTEM</span><span class="arrow">→</span></button>`}_buildTimebar(t){let e=Wt("div");e.id="timebar",this.bigDate=Wt("div","",'<span id="jd-main">—</span><small id="jd-sub"></small>'),this.bigDate.id="bigDate";let n=Wt("div","spd-group");this.pauseBtn=Wt("button","spd","暂停"),this.pauseBtn.dataset.tip="冻结模拟时间",this.pauseBtn.addEventListener("click",()=>this.cb.onSpeed(0)),this.realBtn=Wt("button","spd real","实时"),this.realBtn.dataset.tip="跳到现在，行星按真实历表就位并开始运行（悬停可调倍速）",this.realBtn.addEventListener("click",()=>this.cb.onRealtime()),this.speedPop=Wt("div","spd-pop"),this.speedPopBtns=Pa.map((o,a)=>{if(a===0)return null;let l=Wt("button","",jg(o.mult));return l.dataset.idx=a,l.addEventListener("click",c=>{c.stopPropagation(),this.cb.onSpeed(a),this._hideSpeedPop()}),this.speedPop.appendChild(l),l}),this.realWrap=Wt("div","spd-wrap"),this.realWrap.append(this.realBtn,this.speedPop);let s=()=>{clearTimeout(this._popTimer),this._showSpeedPop()},r=()=>{clearTimeout(this._popTimer),this._popTimer=setTimeout(()=>this._hideSpeedPop(),180)};this.realWrap.addEventListener("mouseenter",s),this.realWrap.addEventListener("mouseleave",r),this.speedPop.addEventListener("mouseenter",s),this.speedPop.addEventListener("mouseleave",r),matchMedia("(pointer: coarse)").matches&&window.addEventListener("pointerdown",o=>{this.speedPop.classList.contains("show")&&(o.target.closest?.(".spd-wrap")||this._hideSpeedPop())},{capture:!0}),n.append(this.pauseBtn,this.realWrap),this.posBtn=Wt("button","posmode","示意排布"),this.posBtn.dataset.tip="示意排布：行星按压缩距离排成一线，轨道线为同心导轨｜真实轨道：按 JPL 历表真实公转、散落各处，相机以太阳为中心取景，轨道线为真实椭圆",this.posBtn.addEventListener("click",()=>this.cb.onTogglePosition()),e.append(this.bigDate,n,this.posBtn),t.appendChild(e),this.timebar=e,this.SPEEDS=Pa}_showSpeedPop(){this.speedPop.classList.add("show")}_hideSpeedPop(){this.speedPop.classList.remove("show")}flashSpeedPop(t){let e=t??(matchMedia("(pointer: coarse)").matches?4800:2200);this._showSpeedPop(),clearTimeout(this._popTimer),this._popTimer=setTimeout(()=>this._hideSpeedPop(),e)}_buildFocusTitle(t){let e=Wt("div");e.id="focusTitle",e.innerHTML='<div class="ft-cat" id="ft-cat">行星</div><div class="ft-name" id="ft-name">地球</div><div class="ft-rule"></div><div class="ft-en" id="ft-en">EARTH</div>',t.appendChild(e),this.focusTitle=e}showFocusTitle(t,e){this.focusTitle.querySelector("#ft-cat").textContent=e,this.focusTitle.querySelector("#ft-name").textContent=t.cn,this.focusTitle.querySelector("#ft-en").textContent=t.en,this.focusTitle.classList.add("show")}hideFocusTitle(){this.focusTitle.classList.remove("show")}_buildDirPanel(t){let e=Wt("aside");e.id="dirPanel",e.innerHTML='<div class="dir-head">目录 <span id="dir-count">04</span></div><ol id="dir-list"></ol>',t.appendChild(e),this.dirPanel=e}showDirPanel(t){let e=[...(t.sections||[]).map(s=>s.t),"资料来源"],n=this.dirPanel.querySelector("#dir-list");n.innerHTML=e.map((s,r)=>`<li class="${r===0?"active":""}"><span class="no">${String(r+1).padStart(2,"0")}</span>${s}</li>`).join(""),this.dirPanel.querySelector("#dir-count").textContent=String(e.length).padStart(2,"0"),n.querySelectorAll("li").forEach((s,r)=>s.addEventListener("click",()=>{n.querySelectorAll("li").forEach(o=>o.classList.remove("active")),s.classList.add("active"),this.card.querySelectorAll(".pc-sec")[r]?.scrollIntoView({behavior:"smooth",block:"start"})})),this.dirPanel.classList.add("show")}hideDirPanel(){this.dirPanel.classList.remove("show")}_buildCard(t){let e=Wt("aside","sideCard");e.id="planetCard",e.innerHTML=`
      <div class="pc-head">
        <span class="pc-kicker" id="pc-kicker"></span>
        <span class="pc-auto" id="pc-auto">动效 · 自动</span>
        <button id="cardClose" class="card-close">关闭 ×</button>
      </div>
      <h1 id="pc-cn"></h1>
      <div class="pc-en" id="pc-en"></div>
      <div class="pc-sub" id="pc-sub"></div>
      <div class="pc-block">
        <div class="pc-block-k">探索这颗星球</div>
        <div class="pc-explore" id="pc-explore"></div>
      </div>
      <div class="pc-block" id="pc-moons-block" style="display:none">
        <div class="pc-block-k">它的卫星 · 点击前往</div>
        <div class="pc-views" id="pc-moons"></div>
      </div>
      <div class="pc-block">
        <div class="pc-block-k">观察这个世界</div>
        <div class="pc-views">
          <button data-v="sun">向阳面</button><button data-v="terminator">晨昏线</button><button data-v="dark">背光面</button>
        </div>
        <div class="pc-navrow"><button id="pc-prev">← 上一颗</button><span>地理标注</span><button id="pc-next">下一颗 →</button></div>
      </div>
      <div class="pc-desc" id="pc-desc"></div>
      <div class="stats" id="pc-stats"></div>
      <div class="pc-facts" id="pc-facts"></div>
      <div class="pc-src" id="pc-src"></div>`,t.appendChild(e),this.card=e,e.querySelector("#cardClose").addEventListener("click",()=>this.cb.onCloseCard()),e.querySelector("#pc-prev").addEventListener("click",()=>this.cb.onPlanetNav(-1)),e.querySelector("#pc-next").addEventListener("click",()=>this.cb.onPlanetNav(1)),e.querySelectorAll(".pc-views button").forEach(n=>n.addEventListener("click",()=>{e.querySelectorAll(".pc-views button").forEach(s=>s.classList.remove("active")),n.classList.add("active"),this.cb.onViewAngle(n.dataset.v)}))}showCard(t,e,n){this.card.querySelector("#pc-kicker").textContent=e,this.card.querySelector("#pc-cn").textContent=t.cn,this.card.querySelector("#pc-cn").classList.toggle("long",t.cn.length>4),this.card.querySelector("#pc-en").textContent=t.en,this.card.querySelector("#pc-desc").innerHTML=(t.sections||[{t:"",text:t.desc||""}]).map(m=>m.t?`<div class="pc-sec"><h4>${m.t}</h4><p>${m.text}</p></div>`:`<p>${m.text}</p>`).join(""),this.card.querySelector("#pc-sub").textContent=t.desc||"",this.card.querySelector("#pc-explore").innerHTML=this._exploreChips(t);let s=this.card.querySelector("#pc-moons-block"),r=this.card.querySelector("#pc-moons");n&&n.length?(s.style.display="",r.innerHTML=n.map(m=>`<button data-moon="${m.id}">${m.cn}</button>`).join(""),r.querySelectorAll("button").forEach(m=>m.addEventListener("click",()=>this.cb.onSelectPlanet(m.dataset.moon)))):(s.style.display="none",r.innerHTML="");let o=t.facts||[];this.card.querySelector("#pc-facts").innerHTML=o.length?`
      <div class="pf-k">冷知识 · FIELD NOTES</div>
      <ul>${o.map(m=>`<li>${m}</li>`).join("")}</ul>`:"";let a=t.kind||"planet",l=a==="moon"?"轨道与影像：NASA / JPL 卫星数据表、旅行者与卡西尼任务公开影像 ｜ 表面贴图：Solar System Scope (CC BY 4.0)":a==="comet"?"轨道要素：JPL Small-Body Database ｜ 影像：ESA Rosetta / NASA Stardust":a==="star"?"数据：NASA Solar Dynamics Observatory、SOHO ｜ 影像：SDO / 太阳动力学天文台":"轨道要素：JPL Approximate Positions of the Planets ｜ 数据：NASA Planetary Fact Sheet ｜ 表面贴图：Solar System Scope (CC BY 4.0)";this.card.querySelector("#pc-src").innerHTML=`<div class="ps-k">资料来源 · SOURCES</div><p>${l}</p><p class="ps-note">本站为演示性可视化：行星半径为视觉放大，轨道距离在「示意排布」下经过分段压缩。</p>`;let c=m=>m==null||m===""||Number.isNaN(Number(m))?null:Number(m),h=c(t.periodDays),d=c(t.rotationHours),f=[["半径",t.radiusKm?t.radiusKm.toLocaleString()+" km":"—"],["表面重力",t.gravity!=null?t.gravity+" m/s²":"—"],["公转周期",h==null?"—":h<0?Math.abs(h)+" 天（逆行）":h>=700?(h/365.25).toFixed(1)+" 年":h+" 天"],["自转周期",d==null?"—":Math.abs(d)>=48?(Math.abs(d)/24).toFixed(1)+" 天"+(d<0?"（逆行）":""):Math.abs(d).toFixed(1)+" 小时"+(d<0?"（逆行）":"")],["温度",t.tempC??"—"],["卫星",t.moons??"—"]];this.card.querySelector("#pc-stats").innerHTML=f.map(m=>`<div class="stat"><span>${m[0]}</span><b>${m[1]}</b></div>`).join(""),this.card.classList.add("show"),this.card.scrollTop=0}_exploreChips(t){let e=[],n=(r,o)=>e.push(`<span class="chip"><i>${r}</i><b>${o}</b></span>`);if(t.radiusKm){n("直径",(t.radiusKm*2).toLocaleString()+" km");let r=t.radiusKm/6371;r>=.02&&n("地球",r>=1?r.toFixed(r>=10?0:1)+" 倍":(r*100).toFixed(0)+"%")}t.au!=null&&n("距日",Number(t.au).toFixed(2)+" AU");let s=Number(t.periodDays);return s&&n("公转",Math.abs(s)>=700?(Math.abs(s)/365.25).toFixed(1)+" 年":Math.abs(s).toFixed(1)+" 天"),t.kind==="comet"&&t.rotationHours&&n("自转",t.rotationHours+" 小时"),e.join("")}hideCard(){this.card.classList.remove("show"),this.hideDirPanel(),this.hideFocusTitle()}_buildEvents(t){let e=Wt("div");e.id="eventsPanel",e.innerHTML=`
      <button id="eventsClose">✕</button>
      <h2>天象剧场</h2>
      <div class="sub">CELESTIAL EVENTS · 按真实轨道历表回放 · 时刻为世界时 UTC</div>
      <h3>日月食 · ECLIPSES</h3>
      <div id="ev-eclipses"></div>
      <h3>行星连珠 · ALIGNMENTS</h3>
      <div id="ev-aligns"><div class="row" style="color:var(--ink-dim);font-size:12px">正在扫描未来十年五星（水金火木土）天象……</div></div>
      <div class="panel-note">跳转后时间会停在事件发生的真实时刻，可点底部时间栏的速率按钮继续推进。「地面」机位模拟站在地表仰望的视角。</div>`,t.appendChild(e),this.eventsPanel=e,e.querySelector("#eventsClose").addEventListener("click",()=>this.cb.onCloseEvents())}fillEclipses(t){let e=this.eventsPanel.querySelector("#ev-eclipses");e.innerHTML="";for(let n of t){let s=Wt("div","row",`
        <span class="date">${n.date}</span>
        <span class="what">${n.label}<small>${n.en}</small></span>
        <button class="go">跳转观看</button>`);s.querySelector(".go").addEventListener("click",()=>this.cb.onJumpEclipse(n)),e.appendChild(s)}}fillAlignments(t,e){let n=this.eventsPanel.querySelector("#ev-aligns");if(n.innerHTML="",!t.length){n.innerHTML='<div class="row" style="color:var(--ink-dim);font-size:12px">未来十年内没有 <40° 的显著连珠。</div>';return}for(let s of t){let r=Wt("div","row",`
        <span class="date">${e(s.jd)}</span>
        <span class="what">五星连珠<small>FIVE-PLANET ALIGNMENT · 跨度 ${s.spread.toFixed(0)}°</small></span>
        <button class="go">跳转观看</button>`);r.querySelector(".go").addEventListener("click",()=>this.cb.onJumpAlignment(s)),n.appendChild(r)}}showEvents(){this.eventsPanel.classList.add("show")}hideEvents(){this.eventsPanel.classList.remove("show")}_buildConstPanel(t){let e=Wt("aside","sideCard");e.id="constPanel",e.innerHTML=`
      <div class="pc-head">
        <span class="pc-kicker" id="cp-kicker"></span>
        <button id="constClose" class="card-close">关闭 ×</button>
      </div>
      <h1 id="cp-cn"></h1>
      <div class="pc-en" id="cp-en"></div>
      <div class="pc-sub" id="cp-sub"></div>
      <div class="cp-img" id="cp-img"></div>
      <div class="cp-credit" id="cp-credit"></div>
      <div class="pc-desc" id="cp-desc"></div>
      <div class="stats" id="cp-stats"></div>
      <div class="pc-facts" id="cp-facts"></div>`,t.appendChild(e),this.constPanel=e,e.querySelector("#constClose").addEventListener("click",()=>{this.hideConstPanel(),this.cb.onConstClose&&this.cb.onConstClose()})}showSkyCard(t){let e=s=>this.constPanel.querySelector(s);e("#cp-kicker").textContent=t.kicker,e("#cp-cn").textContent=t.cn,e("#cp-cn").classList.toggle("long",t.cn.length>4),e("#cp-en").textContent=t.en,e("#cp-sub").textContent=t.sub||"";let n=e("#cp-img");n.style.backgroundImage=t.img?`url(${An(t.img)})`:"none",n.style.display=t.img?"":"none",e("#cp-credit").textContent=t.credit||"",e("#cp-desc").innerHTML=(t.sections&&t.sections.length?[{t:"概览",text:t.desc},...t.sections]:[{t:"概览",text:t.desc}]).map(s=>`<div class="pc-sec"><h4>${s.t}</h4><p>${s.text}</p></div>`).join(""),e("#cp-stats").innerHTML=(t.rows||[]).map(s=>`<div class="stat"><span>${s[0]}</span><b>${s[1]}</b></div>`).join(""),e("#cp-facts").innerHTML=t.facts&&t.facts.length?`
      <div class="pf-k">冷知识 · FIELD NOTES</div>
      <ul>${t.facts.map(s=>`<li>${s}</li>`).join("")}</ul>`:"",this.constPanel.classList.add("show"),this.constPanel.scrollTop=0}showConstPanel(t){this.showSkyCard({kicker:`CONSTELLATION · ${t.en}`,cn:t.cn,en:t.en,sub:t.season?`最佳观测 ${t.season}　·　占天球 ${t.area} 平方度（第 ${t.rank}）`:"",img:t.img,desc:t.desc,sections:t.sections,facts:t.facts,credit:"影像：NASA / Spitzer 银河全景，按真实赤经赤纬裁切　·　金色连线为本项目依星表绘制",rows:[["亮星",t.star||"—"],["深空天体",t.dso||"—"],["星数 / 连线",`${t.stars.length} 颗 · ${t.lines.length} 条`]]})}showNebulaPanel(t){this.showSkyCard({kicker:`DEEP SKY · ${t.abbr||t.en}`,cn:t.cn,en:t.en,sub:`${t.type}　·　${t.distance}`,img:t.img,desc:t.desc,sections:t.sections,facts:t.facts,credit:"影像：NASA / JPL-Caltech（Spitzer 红外 / Hubble 可见光公开影像）",rows:[["类型",t.type],["距离",t.distance],["尺度",t.span],["所在星座",t.where]]})}hideConstPanel(){this.constPanel.classList.remove("show")}updateConstLabels(t,e,n){this.constLabelMap||(this.constLabelMap=new Map);let s=new e.position.constructor;for(let r of t){let o=this.constLabelMap.get(r.id);o||(o=Wt("div","const-label",`<span class="en">${r.en}</span><span class="zh">${r.cn}</span>`),o.addEventListener("click",()=>this.cb.onOpenConst(r.id)),this.labels.appendChild(o),this.constLabelMap.set(r.id,o)),s.copy(r.center).project(e);let a=n&&r.id!==this.aimId&&s.z<1&&Math.abs(s.x)<1.05&&Math.abs(s.y)<1.05,l=a?"0.85":"0";o._op!==l&&(o.style.opacity=l,o._op=l),o.style.pointerEvents=a?"auto":"none",a&&(o.style.left=Math.round((s.x*.5+.5)*innerWidth)+"px",o.style.top=Math.round((-s.y*.5+.5)*innerHeight)+"px")}}_buildRail(t){let e=Wt("div");e.id="planetRail",e.innerHTML='<div class="rail-line"></div>',this.railDots=[],[{id:"sun",cn:"太阳",au:null,color:"#ffb765"},...Zg.map(s=>({id:s.id,cn:s.cn,au:s.au,color:s.color}))].forEach((s,r)=>{let o=s.au==null?"":s.au.toFixed(2),a=Wt("button","rail-dot",`<i></i><span class="rn">${s.cn}</span><span class="ra">${o}</span>`);a.style.setProperty("--c",s.color||"#d8c49a"),a.style.animationDelay=.12+r*.055+"s",a.dataset.id=s.id,a.addEventListener("click",()=>this.cb.onSelectPlanet(s.id)),e.appendChild(a),this.railDots.push(a)}),t.appendChild(e),this.rail=e}_buildTimeline(t){let e=Wt("div");e.id="evTimeline",e.innerHTML=`
      <div class="et-head"><span id="et-label">天象 · 时间轴</span><span id="et-peak"></span></div>
      <input id="et-range" type="range" min="-1" max="1" step="0.0015" value="0" aria-label="天象时间轴">
      <div class="et-scale"><span id="et-l"></span><span class="mid" id="et-mid">食甚</span><span id="et-r"></span></div>
      <div class="et-now" id="et-now"></div>`,t.appendChild(e),this.evTimeline=e,this.tlRange=e.querySelector("#et-range"),this.tlLabel=e.querySelector("#et-label"),this.tlPeak=e.querySelector("#et-peak"),this.tlNow=e.querySelector("#et-now"),this.tlMid=e.querySelector("#et-mid"),this.tlL=e.querySelector("#et-l"),this.tlR=e.querySelector("#et-r"),this.tlDragging=!1,this.tlRange.addEventListener("pointerdown",()=>{this.tlDragging=!0,e.classList.add("drag")});let n=()=>{this.tlDragging=!1,e.classList.remove("drag")};window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),this.tlRange.addEventListener("input",()=>{this.cb.onScrubTimeline(parseFloat(this.tlRange.value))})}static _span(t){return t>=1440?`${(t/1440).toFixed(t%1440?1:0)} 天`:t>=60?`${(t/60).toFixed(t%60?1:0)} 小时`:`${Math.round(t)} 分`}static _clock(t){return t>=1440?`${(t/1440).toFixed(1)} 天`:t>=60?`${Math.floor(t/60)} 小时 ${String(Math.round(t%60)).padStart(2,"0")} 分`:`${Math.round(t)} 分`}showTimeline({label:t,peakText:e,halfMin:n,mid:s="食甚"}){this._tlHalf=n,this.tlLabel.textContent=`${t} · 时间轴`,this.tlPeak.textContent=e,this.tlMid.textContent=s,this.tlL.textContent="−"+i._span(n),this.tlR.textContent="+"+i._span(n),this.tlRange.value="0",this.tlNow.textContent=`${s}　拖动查看前后过程`,this.evTimeline.classList.add("show")}hideTimeline(){this.evTimeline.classList.remove("show"),this.tlDragging=!1,this.evTimeline.classList.remove("drag")}updateTimeline(t){if(!this.evTimeline.classList.contains("show"))return;let e=this._tlHalf||150;this.tlDragging||(this.tlRange.value=String(Math.max(-1,Math.min(1,t/e))));let n=Math.abs(t),s;if(n<.6)s=this.tlMid.textContent;else{let r=`距${this.tlMid.textContent} ${i._clock(n)}`;s=t<0?`← ${r}`:`${r} →`}this.tlNow.textContent!==s&&(this.tlNow.textContent=s)}_buildBuildTag(t){let e=window.__BUILD||"";if(!e){let s=document.querySelector('script[src*="loading-boot.js"]'),r=s&&/[?&]v=(\d+)/.exec(s.src);e=r?`v${r[1]} · 网页版`:""}if(!e)return;let n=Wt("div","",e);n.id="buildTag",n.title="当前构建版本",t.appendChild(n)}_buildAimTag(t){let e=Wt("div");e.id="aimTag",e.innerHTML=`
      <svg class="cross" width="72" height="72" viewBox="0 0 34 34">
        <g stroke="rgba(240,217,168,.95)" stroke-width=".85" stroke-linecap="round">
          <line x1="17" y1="1.2" x2="17" y2="8.6"/>
          <line x1="17" y1="25.4" x2="17" y2="32.8"/>
          <line x1="1.2" y1="17" x2="8.6" y2="17"/>
          <line x1="25.4" y1="17" x2="32.8" y2="17"/>
          <circle cx="17" cy="17" r="12.2" fill="none" stroke="rgba(240,217,168,.5)"/>
        </g>
        <circle cx="17" cy="17" r="1.35" fill="rgba(255,247,228,.98)"/>
      </svg>
      <div class="txt"><b class="cn"></b><em class="en"></em></div>`,t.appendChild(e),this.aimTag=e}showConstAim(t,e,n){this.aimId=t.id,this.aimKind="const",this.aimTag.classList.add("show"),this.aimTag.style.left=e+"px",this.aimTag.style.top=n+"px",this.aimTag.querySelector(".cn").textContent=t.cn,this.aimTag.querySelector(".en").textContent=t.en+" · 点击凝望"}showNebAim(t,e,n){this.aimId=t.id,this.aimKind="neb",this.aimTag.classList.add("show"),this.aimTag.style.left=e+"px",this.aimTag.style.top=n+"px",this.aimTag.querySelector(".cn").textContent=t.cn,this.aimTag.querySelector(".en").textContent=`${t.abbr||t.en} · ${t.type} · 点击查看`}hideAim(){this.aimId=null,this.aimKind=null,this.aimTag.classList.remove("show")}hideConstAim(){this.hideAim()}_buildTip(t){let e=Wt("div");e.id="tip",t.appendChild(e),this.tip=e,document.addEventListener("mouseover",n=>{let s=n.target.closest&&n.target.closest("[data-tip]");if(!s){this.tip.classList.remove("show");return}this.tip.textContent=s.dataset.tip,this.tip.classList.add("show")})}_buildViewbar(t){let e=Wt("div");e.id="viewbar",this.viewBtns={};for(let[s,r,o]of[["far","远景","FAR"],["side","侧视","SIDE"],["close","近景","CLOSE"],["ground","地面","GROUND"]]){let a=Wt("button","vbtn",`<span class="zh">${r}</span><span class="en">${o}</span>`);a.addEventListener("click",()=>this.cb.onViewSpot(s)),this.viewBtns[s]=a,e.appendChild(a)}let n=Wt("button","vbtn orbit active",'<span class="zh">自转</span><span class="en">ORBIT</span>');n.addEventListener("click",()=>{n.classList.toggle("active"),this.cb.onAutoOrbit(n.classList.contains("active"))}),this.orbitBtn=n,e.appendChild(n),t.appendChild(e),this.viewbar=e}showViewbar(t){if(this.viewbar.classList.toggle("show",!!t),t){for(let e in this.viewBtns)this.viewBtns[e].classList.remove("active");this.viewBtns.side.classList.add("active"),this.orbitBtn.classList.add("active")}}setViewActive(t){for(let e in this.viewBtns)this.viewBtns[e].classList.remove("active");this.viewBtns[t]?.classList.add("active")}setOrbitActive(t){this.orbitBtn.classList.toggle("active",t)}setAutoOrbitView(t){this.card.querySelector("#pc-auto").classList.toggle("on",t)}setRailActive(t){for(let e of this.railDots)e.classList.toggle("active",e.dataset.id===t)}setMode(t){this.quoteEl.classList.toggle("show",t==="deep"),this.timebar.classList.toggle("show",t==="solar"),this.rail.classList.toggle("show",t==="solar"),this.homeBtn.style.opacity=t==="solar"?"1":"0",this.homeBtn.style.pointerEvents=t==="solar"?"auto":"none",this.tabs.style.opacity="1",this.tabEls.deep.classList.toggle("active",t==="deep"),this.tabEls.solar.classList.toggle("active",t==="solar"),this.hideConstPanel(),t==="deep"&&(this.hideCard(),this.hideEvents())}setActiveTab(t){for(let e in this.tabEls)this.tabEls[e].classList.remove("active");this.tabEls[t]?.classList.add("active")}updateDate(t){this.clock.innerHTML=`<b>${Kg}</b> ${Rl(t)}`;let e=this.bigDate.querySelector("#jd-main"),n=this.bigDate.querySelector("#jd-sub");e.textContent=Ms(t),n.textContent=`${Rl(t)} ${Jg} · 模拟时间`}setActiveSpeed(t){let e=Pa[t]||Pa[0];this.pauseBtn.classList.toggle("active",!t),this.realBtn.classList.toggle("active",!!t),this.realBtn.textContent=t?e.mult===1?"实时":`实时 ×${e.mult>=86400?Math.round(e.mult/86400)+"天/秒":e.mult}`:"实时",this.speedPopBtns&&this.speedPopBtns.forEach((n,s)=>n&&n.classList.toggle("active",s+1===t))}setPositionMode(t){this.posBtn.textContent=t==="real"?"真实轨道":"示意排布",this.posBtn.classList.toggle("on",t==="real")}updateOverlay(t,e,n,s,r,o,a){let l=new(t.get("sun")).worldPos.constructor,c=!1,h=[],d=performance.now();for(let[g,p]of t){let u=this.labelMap.get(g);if(!u){let D=Wt("div","body-label",`<span class="en">${p.info.en}</span><span class="cn">${p.info.cn}</span>`);D.addEventListener("click",()=>this.cb.onSelectPlanet(g)),this.labels.appendChild(D),u={div:D},this.labelMap.set(g,u)}l.copy(p.worldPos).project(e);let v=e.position.distanceTo(p.worldPos),x=e.fov*Math.PI/180,S=p.displayR/(v*Math.tan(x/2))*(a/2),C=p.isMoon?3:p.isComet?.3:g==="sun"?40:.5,T=u._vis?1.18:1.15,A=u._vis?118:110;if(!(n==="solar"&&l.z<1&&Math.abs(l.x)<T&&Math.abs(l.y)<T&&S<A&&S>=C)){u._vis&&(u.div.style.opacity="0",u.div.style.pointerEvents="none",u._op=0),u._vis=!1;continue}let y=(l.x*.5+.5)*o,b=(-l.y*.5+.5)*a;h.push({id:g,rec:u,sx:y,sy:b,rpx:S,ring:g===s&&S>2&&S<90}),u._vis=!0}h.sort((g,p)=>g.sx-p.sx);let f=[],m=10,_=480;for(let g of h){let p=g.rec,u=Math.max(g.rpx,4);g._off=u;let v=u+10,x=Math.round(g.sx+u+14);if(g._lx=x,p.w==null){let y=p.div.offsetWidth,b=p.div.offsetHeight;y&&b&&(p.w=y,p.h=b)}let S=p.w||96,C=p.h||34,T=(y,b=0)=>{let D=y?g.sy-v:g.sy+v,H=y?D-C:D;return f.some(Y=>x<Y.x+Y.w+m+b&&x+S+m+b>Y.x&&H<Y.y+Y.h+m+b&&H+C+m+b>Y.y)},A=p._above;if(A===void 0?A=!T(!0):T(A,4)&&!T(!A,-4)&&d-(p._flipAt||-1e9)>_&&(A=!A,p._flipAt=d),p._above=A,g._above=A,T(A)){if(p._bad=(p._bad||0)+1,p._bad>4){g._hide=!0;continue}}else p._bad=0;let I=A?g.sy-v:g.sy+v;f.push({x,y:A?I-C:I,w:S,h:C})}for(let g of h){let{id:p,rec:u,sx:v,sy:x,rpx:S}=g;if(g._hide){u._op!==0&&(u.div.style.opacity="0",u._op=0),u.div.style.pointerEvents="none";continue}let C=p===r||p===s?1:.86;u._op!==C&&(u.div.style.opacity=String(C),u._op=C),u.div.style.pointerEvents="auto";let T=g._off+10,A=Math.round(g._above?x-T:x+T);if(u.div.style.left=g._lx+"px",u.div.style.top=A+"px",u.div.style.transform=g._above?"translate(0,-100%)":"translate(0,0)",g.ring){let I=Math.max(S+2,10),y=I+7;this.hoverRing.style.opacity="1",this.hoverRing.setAttribute("transform",`translate(${v},${x})`),this.ringFill.setAttribute("r",I),this.ringCircle.setAttribute("r",I);let b=[[-y-7,0,-y,0],[y,0,y+7,0],[0,-y-7,0,-y],[0,y,0,y+7]];this.ringTicks.forEach((D,H)=>{D.setAttribute("x1",b[H][0]),D.setAttribute("y1",b[H][1]),D.setAttribute("x2",b[H][2]),D.setAttribute("y2",b[H][3])}),this.leader.style.display="none",c=!0}}c||(this.hoverRing.style.opacity="0",this.leader.style.display="none",this.hoverId&&this.setReticleHover(!1))}setReticleHover(t){this.reticle.classList.toggle("hovering",t),this.reticle.style.opacity=t?"0":""}};function vu({minMs:i=1700}={}){let t=window.__loadingBoot;if(!t)return;let e=xl;e.onProgress=(n,s,r)=>{t.finished||t.paint(s/Math.max(r,1))},e.onLoad=()=>{t.finished||t.scheduleFinish(i)},e.onError=()=>{t.finished||t.paint(Math.min(.97,t.value+.04))}}var ws=document.getElementById("scene"),Ts=new qs({canvas:ws,antialias:!0});Ts.setPixelRatio(Math.min(devicePixelRatio,2));Ts.setSize(innerWidth,innerHeight);Ts.toneMapping=Ks;Ts.toneMappingExposure=1.05;var Ba=new Qr;Ba.background=new vt(131588);var yu=40,Fl=60;function Qg(i){let t=Math.log(Math.max(i,.5)),e=Math.min(1,Math.max(0,(t-Math.log(40))/(Math.log(120)-Math.log(40)))),n=Math.min(1,Math.max(0,(t-Math.log(600))/(Math.log(4e3)-Math.log(600))));return yu+(Fl-yu)*e*(1-n)}var se=new Re(Fl,innerWidth/innerHeight,.02,2e5),sr=new ma(Ts);sr.addPass(new ga(Ba,se));var t_=new xs(new ft(innerWidth,innerHeight),.5,.5,.9);sr.addPass(t_);sr.addPass(new _a);vu();var Bl=_u();Ba.add(Bl);var Oa=Bl.getObjectByName("constellations"),Hl=Bl.getObjectByName("nebulae"),Wn=0;function gn(i){Wn=i;for(let t of[Oa,Hl])t&&(t.visible=i>.012,t.traverse(e=>{let n=e.material;!n||n.opacity===void 0||(n.userData.baseOp===void 0&&(n.userData.baseOp=n.opacity),n.opacity=n.userData.baseOp*i)}))}var ci=[],e_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function ir(i,t,e){ci.push({t:0,dur:i,fn:t,done:e})}function zl(){for(let i of ci.splice(0))i.fn(1),i.done&&i.done()}function n_(i){for(let t=ci.length-1;t>=0;t--){let e=ci[t];e.t=Math.min(e.dur,e.t+i);let n=e.dur>0?e.t/e.dur:1;e.fn(n),n>=1&&(ci.splice(t,1),e.done&&e.done())}}function di(i){Lt.group.visible=i}var Lt=new Aa(Ba),st=new Ca(se,ws);st.fovForVH=Qg;var bu=new R(-5200,5600,12600),Nl=.058;var Eu=i=>i/(2*Math.tan(Fl*Math.PI/360));function kl(i=Nl){let t=ya/Math.max(se.aspect,.42),e=Eu(t),n=new R(su,0,0);return{camPos:new R(n.x,Math.sin(i)*e,Math.cos(i)*e),target:n,D:e}}var wu=new R(0,0,0),rn=Ma(new Date),Gn=0,be="deep",_n=null,hi=null,Xn=null,Ia=null,Pn="schematic",Bi=!1,et=new La(document.body,{onEnterSolar:()=>s_(),onGoSolar:()=>{Pn==="real"?Il():Na()},onTab:i=>{i==="deep"?i_():Na()},onOpenEvents:()=>d_(),onCloseEvents:()=>et.hideEvents(),onSpeed:i=>{Gn=i,et.setActiveSpeed(i)},onScrubTimeline:i=>{Le&&(rn=Le.peakJd+i*Le.halfMin/1440)},onRealtime:()=>{et.hideTimeline(),Le=null,rn=Ma(new Date),Pn="real",et.setPositionMode("real"),Gn=1,et.setActiveSpeed(Gn),et.flashSpeedPop?.(),Il()},onCloseCard:()=>l_(),onPlanetNav:i=>c_(i),onSelectPlanet:i=>Ha(i),onJumpEclipse:i=>u_(i),onJumpAlignment:i=>f_(i),onViewSpot:i=>Cu(i),onViewAngle:i=>o_(i),onAutoOrbit:i=>st.setAutoOrbit(i),onTogglePosition:()=>{Pn=Pn==="schematic"?"real":"schematic",et.setPositionMode(Pn),Pn==="schematic"?Na():Il()},onOpenConst:i=>Vl(i),onConstClose:()=>m_()});et.setActiveSpeed(Gn);et.setPositionMode(Pn);et.fillEclipses(iu);et.setMode("deep");setInterval(()=>{be==="deep"&&!document.hidden&&et._setQuote()},12e3);var Fa=!1;function Mu(){Fa||(Fa=!0,Bi=!0,st.inputLock=!1,st.onFlightCancel=null,ir(1.6,i=>{Lt.group.scale.setScalar(Math.max(.001,1-e_(i)))},()=>{Lt.setOrbitsVisible(!1),di(!1),Lt.group.scale.setScalar(1)}),ir(2,i=>gn(i*i*(3-2*i))),st.setRange(50,16e3))}function i_(){be="deep",zl(),Fa=!1,st.setFreePitch(!0),_n=null,hi=null,Xn=null,fi=null,Lt.setEclipseShadows(null),et.showViewbar(null),et.hideTimeline(),Le=null,st.setAutoOrbit(!1),Lt.setOrbitsVisible(!0),di(!0),Lt.group.scale.setScalar(1),gn(0),et.setRailActive(null),st.follow(null),et.setMode("deep"),et.hideCard(),Bi=!1,st.onFlightCancel=Mu,st.flyTo({camPos:bu.clone(),target:wu.clone(),duration:3.8,shift:0,onDone:Mu}),st.inputLock=!0}function s_(){be="solar",zl(),Bi=!1,st.setFreePitch(!1),Lt.setOrbitsVisible(!0),di(!0),Lt.group.scale.setScalar(1),Wn>.01&&ir(1.1,t=>gn(Wn*(1-t)),()=>gn(0)),et.hideConstPanel(),et.setMode("solar");let i=kl();st.flyTo({camPos:i.camPos,target:i.target,duration:3.3,shift:0,onDone:()=>{st.inputLock=!1,st.setRange(60,18500)}}),st.onFlightCancel=()=>{st.inputLock=!1,st.setRange(60,18500)},st.inputLock=!0}function Na(){be="solar",zl(),Bi=!1,st.setFreePitch(!1),_n=null,hi=null,Xn=null,fi=null,Lt.setEclipseShadows(null),et.showViewbar(null),et.hideTimeline(),Le=null,st.setAutoOrbit(!1),Lt.setOrbitsVisible(!0),di(!0),Lt.group.scale.setScalar(1),Wn>.01&&ir(1.1,t=>gn(Wn*(1-t)),()=>gn(0)),et.hideConstPanel(),et.setRailActive(null),st.follow(null),et.setMode("solar"),et.hideCard(),et.hideEvents();let i=kl();st.flyTo({camPos:i.camPos,target:i.target,duration:3.3,shift:0,onDone:()=>{st.inputLock=!1,st.setRange(.9,18500)}}),st.onFlightCancel=()=>{st.inputLock=!1,st.setRange(.9,18500)},st.inputLock=!0}function Il(){be="solar",ci.length=0,Fa=!1,Bi=!1,st.setFreePitch(!1),_n=null,hi=null,Xn=null,fi=null,Lt.setEclipseShadows(null),et.showViewbar(null),et.hideTimeline(),Le=null,st.setAutoOrbit(!1),Lt.setOrbitsVisible(!0),di(!0),Lt.group.scale.setScalar(1),Wn>.01&&ir(1.1,e=>gn(Wn*(1-e)),()=>gn(0)),et.hideConstPanel(),et.setRailActive(null),st.follow(null),et.setMode("solar"),et.hideCard(),et.hideEvents();let i=ya/Math.max(se.aspect,.42),t=Eu(i);st.flyTo({camPos:new R(0,Math.sin(Nl)*t,Math.cos(Nl)*t),target:new R(0,0,0),duration:2.7,shift:0,onDone:()=>st.setRange(.9,18500)})}var ui=new ft,nr=null,Tu=matchMedia("(pointer: coarse)").matches;ws.addEventListener("pointerdown",i=>{nr=[i.clientX,i.clientY]});ws.addEventListener("pointerup",i=>{if(!nr)return;let t=Math.hypot(i.clientX-nr[0],i.clientY-nr[1]);nr=null,!(t>=5||st.isFlying)&&(Tu&&(ui.x=i.clientX/innerWidth*2-1,ui.y=-(i.clientY/innerHeight)*2+1,Ru(),be==="solar"&&Ol(Au())),hi&&be==="solar"?Ha(hi):tn&&be==="deep"?Lu(tn.info.id):Qe&&be==="deep"&&Vl(Qe.id))});ws.addEventListener("pointermove",i=>{ui.x=i.clientX/innerWidth*2-1,ui.y=-(i.clientY/innerHeight)*2+1},{passive:!0});var li=new R;function r_(){if(Tu){Ol(null);return}Ol(Au())}function Au(){if(be!=="solar"||st.isFlying)return null;let i=[];for(let[n,s]of Lt.bodies){if(li.copy(s.worldPos).project(se),li.z>1||Math.abs(li.x)>1.2||Math.abs(li.y)>1.2)continue;let r=(li.x-ui.x)*innerWidth/2,o=(li.y-ui.y)*innerHeight/2,a=se.position.distanceTo(s.worldPos),l=s.displayR/(a*Math.tan(se.fov*Math.PI/360))*(innerHeight/2);s.isMoon&&l<3||i.push({id:n,d:Math.hypot(r,o),dist:a,rpx:l,sx:(li.x*.5+.5)*innerWidth,sy:(-li.y*.5+.5)*innerHeight})}let t=null,e=1/0;for(let n of i)n.d>=Math.max(n.rpx+6,14)||n.d>=e||i.some(r=>r!==n&&r.dist<n.dist*.999&&r.rpx>n.rpx&&Math.hypot(r.sx-n.sx,r.sy-n.sy)<r.rpx*.96)||(e=n.d,t=n.id);return t}function Ol(i){hi!==i&&(hi=i,et.hoverId=i,et.setReticleHover(!!i),ws.style.cursor="none")}var Qe=null,tn=null,Da=new R,Ua=new R;function a_(){Qe=null,tn=null,Oa?.userData.setHighlight?.(null),Hl?.userData.setHighlight?.(null),et.hideAim(),et.setReticleHover(!1)}function Ru(){if(be!=="deep"||!Oa||Wn<.5){(Qe||tn)&&a_();return}let i=(ui.x*.5+.5)*innerWidth,t=(-ui.y*.5+.5)*innerHeight,e=Math.tan(se.fov*Math.PI/360),n=null,s=1;for(let h of window.__constData||[]){if(Da.copy(h.center).project(se),Da.z>1)continue;let d=(Da.x*.5+.5)*innerWidth,f=(-Da.y*.5+.5)*innerHeight,_=Math.hypot(d-i,f-t)/85;_<s&&(s=_,n=h)}let r=null,o=1;for(let h of window.__nebData||[]){if(Ua.copy(h.center).project(se),Ua.z>1)continue;let d=(Ua.x*.5+.5)*innerWidth,f=(-Ua.y*.5+.5)*innerHeight,m=se.position.distanceTo(h.center),_=h.size*.5/(m*e)*(innerHeight/2);if(_<10)continue;let g=Math.hypot(d-i,f-t)/Math.max(_*.8,22);g<o&&(o=g,r=h)}n&&Qe&&n.id===Qe.id&&(s/=1.3),r&&tn&&r.info.id===tn.info.id&&(o/=1.3);let a=r&&(!n||o<=s)?"neb":n?"const":null,l=a==="neb"?r.info.id:n?n.id:null,c=tn?tn.info.id:Qe?Qe.id:null;l!==c&&(tn=a==="neb"?r:null,Qe=a==="const"?n:null,Oa.userData.setHighlight?.(Qe?Qe.id:null),Hl.userData.setHighlight?.(tn?tn.info.id:null),et.setReticleHover(!!l),l||et.hideAim()),tn?et.showNebAim(tn.info,i,t):Qe&&et.showConstAim(Qe,i,t)}var er=Vn.map(i=>i.id);function Ha(i){let t=Lt.get(i);if(!t)return;_n=i,Xn=null,fi=null,Lt.setEclipseShadows(null),et.showViewbar(null),et.hideTimeline(),Le=null,st.setAutoOrbit(!0),et.setAutoOrbitView(!0);let e=t.info.kind||(i==="sun"?"star":"planet"),n=e==="star"?"恒星":e==="moon"?"卫星":e==="comet"?"彗星":"行星",s=e==="star"?"STAR":e==="moon"?"SATELLITE":e==="comet"?"COMET":"PLANET";et.showFocusTitle(t.info,n);let r=e==="moon"?[]:i==="earth"?[{id:"moon",cn:"月球"}]:(vs[i]||[]).map(f=>({id:"moon-"+f.id,cn:f.info.cn}));et.showCard(t.info,`${s} · ${t.info.en.toUpperCase()}`,r),et.showDirPanel(t.info);let o=t.worldPos,a=t.focusR||t.displayR,l=Math.max(a*5.6,.6,(t.moonOuter||0)*.55),c;i==="sun"?c=se.position.clone().sub(o).normalize():c=o.clone().negate().normalize();let h=new R().crossVectors(c,new R(0,1,0)).normalize(),d=o.clone().add(c.clone().multiplyScalar(l*.62)).add(h.clone().multiplyScalar(l*.62)).add(new R(0,l*.26,0));st.flyTo({camPos:d,target:o.clone(),shift:.3,duration:2.4,arc:0,onDone:()=>st.setRange(a*1.2,4e3)}),st.follow(t),et.setRailActive(i)}function o_(i){let t=Lt.get(_n);if(!t)return;let e=t.worldPos,n=e.clone().negate().normalize(),s=new R().crossVectors(n,new R(0,1,0)).normalize(),r=t.focusR||t.displayR,o=Math.max(r*5.6,.6,(t.moonOuter||0)*.55),a;i==="sun"?a=n.clone():i==="dark"?a=n.clone().negate():a=s.clone().add(n.clone().multiplyScalar(.15)).normalize(),st.follow(t),st.flyTo({camPos:e.clone().add(a.multiplyScalar(o)),target:e.clone(),duration:2.1,arc:.08,onDone:()=>st.setRange(t.displayR*12,2e3)})}function l_(){_n=null,et.hideCard(),et.hideFocusTitle(),st.setAutoOrbit(!1),st.follow(null),st.setRange(2,14e3)}function c_(i){let t=er.indexOf(_n),e=er[(((t===-1?0:t)+i)%er.length+er.length)%er.length];Ha(e)}function h_(i,t){let[e,n,s]=i.split("-").map(Number),[r,o]=t.split(":").map(Number);return Ma(new Date(Date.UTC(e,n-1,s,r,o)))}var fi=null,Le=null;function u_(i){et.hideEvents(),be="solar",ci.length=0,st.setFreePitch(!1),Lt.setOrbitsVisible(!0),di(!0),Lt.group.scale.setScalar(1),gn(0),et.setMode("solar"),et.hideCard(),_n=null,Gn=0,et.setActiveSpeed(0),rn=h_(i.date,i.time),fi=i,Xn=i.kind;let t=i.kind==="solar"?150:210;Lt.eclipseAnnular=/环/.test(i.label),Lt.eclipsePartial=/偏/.test(i.label),Le={peakJd:rn,halfMin:t,kind:i.kind},et.showTimeline({label:i.label,peakText:`食甚 ${i.date.replace(/-/g,".")} ${i.time} UTC`,halfMin:t}),Lt.setEclipseShadows(i.kind),et.showViewbar(i.kind),st.setAutoOrbit(!0),Cu("side")}function Cu(i){if(!fi)return;et.setViewActive(i);let t=i!=="ground";st.setAutoOrbit(t),et.setOrbitActive(t);let e=Lt.get("earth"),n=Lt.get("moon"),s=e.worldPos,r=s.clone().normalize(),o=new R().crossVectors(r,new R(0,1,0)).normalize();if(st.follow(e),Xn==="lunar"){let a=n.worldPos,c={far:{cam:s.clone().add(r.clone().multiplyScalar(9)).add(o.clone().multiplyScalar(12)).add(new R(0,3,0)),target:s.clone().add(r.clone().multiplyScalar(5)),range:[.4,800]},side:{cam:s.clone().add(r.clone().multiplyScalar(5)).add(o.clone().multiplyScalar(9)).add(new R(0,1.5,0)),target:s.clone().add(r.clone().multiplyScalar(5)),range:[.3,400]},close:{cam:a.clone().add(r.clone().multiplyScalar(.85)).add(o.clone().multiplyScalar(.62)).add(new R(0,.26,0)),target:a.clone(),range:[.08,100]},ground:{cam:s.clone().add(a.clone().sub(s).normalize().multiplyScalar(.455*1.015)),target:a.clone(),range:[.25,800]}}[i];st.follow(i==="close"?n:e),st.flyTo({camPos:c.cam,target:c.target,duration:2.5,arc:.12,shift:0,onDone:()=>st.setRange(...c.range)})}else{let a=n.worldPos,l=s.clone().negate().normalize(),c=s.clone().sub(a).normalize(),d={far:{cam:s.clone().add(l.clone().multiplyScalar(3.6)).add(o.clone().multiplyScalar(4)).add(new R(0,1.9,0)),target:s.clone(),range:[.4,800]},side:{cam:s.clone().add(l.clone().multiplyScalar(1.9)).add(o.clone().multiplyScalar(2.3)).add(new R(0,.66,0)),target:s.clone(),range:[.3,400]},close:{cam:s.clone().add(l.clone().multiplyScalar(1.15)).add(o.clone().multiplyScalar(.95)).add(new R(0,.38,0)),target:s.clone(),range:[.08,100]},ground:{cam:s.clone().add(l.clone().multiplyScalar(.455*1.015)),target:s.clone().add(l.clone().multiplyScalar(10)),range:[.25,800]}}[i];st.flyTo({camPos:d.cam,target:d.target,duration:2.5,arc:.12,shift:0,onDone:()=>st.setRange(...d.range)})}}function d_(){et.showEvents(),Ia||setTimeout(()=>{try{Ia=hu(Math.floor(rn),3650,2),et.fillAlignments(Ia,Ms)}catch{Ia=[],et.fillAlignments([],Ms)}},60)}function f_(i){et.hideEvents(),be="solar",ci.length=0,st.setFreePitch(!1),Lt.setOrbitsVisible(!0),et.setMode("solar"),et.hideCard(),_n=null,Xn=null,fi=null,Lt.setEclipseShadows(null),et.showViewbar(null),et.hideTimeline(),Le=null,st.setAutoOrbit(!1),di(!0),Lt.group.scale.setScalar(1),gn(0),et.hideConstPanel(),Gn=0,et.setActiveSpeed(0),rn=i.jd,Le={peakJd:i.jd,halfMin:20*1440,kind:"align"},et.showTimeline({label:"行星连珠",peakText:`最接近 ${Ms(i.jd)}`,halfMin:Le.halfMin,mid:"最近"});let t=(rn-2451545)/36525,e=Lt.get("earth"),r=["mercury","venus","mars","jupiter","saturn"].map(a=>{let l=ys(a,t);return new R(l.pos[0]-e.worldPos.x,l.pos[1]-e.worldPos.y,l.pos[2]-e.worldPos.z).normalize()}).reduce((a,l)=>a.add(l),new R).normalize(),o=new R().crossVectors(r,new R(0,1,0)).normalize();st.follow(e),st.flyTo({camPos:e.worldPos.clone().add(r.clone().multiplyScalar(31)).add(o.clone().multiplyScalar(58)).add(new R(0,24.8,0)),target:e.worldPos.clone().add(r.clone().multiplyScalar(33)),duration:3.3,arc:.2,shift:0,onDone:()=>st.setRange(2,6e3)})}var Dl=new R,Ul=new R;function p_(){let i=Lt.get("moon"),t=Lt.get("earth"),e=i.mesh.material;if(Xn!=="lunar"){e.color.setScalar(1),e.emissive.setScalar(0);return}Dl.copy(t.worldPos).normalize(),Ul.copy(i.worldPos).sub(t.worldPos);let n=Ul.dot(Dl),s=Ul.addScaledVector(Dl,-n).length(),r=0;if(n>0&&n<36){let o=Math.max(0,.455-n*.0125),a=o+.2;s<o?r=1:s<a&&(r=1-(s-o)/.2)}e.color.setRGB(1-.55*r,1-.82*r,1-.9*r),e.emissive.setRGB(.55*r,.13*r,.05*r)}function Pu(i){let t=new R().crossVectors(i,new R(0,1,0)).normalize(),e=i.clone().multiplyScalar(6200).add(t.clone().multiplyScalar(900)).add(new R(0,400,0)),n=i.clone().multiplyScalar(18500);st.follow(null),st.flyTo({camPos:e,target:n,shift:.3,duration:2.7,arc:.1,onDone:()=>st.setRange(2200,14e3)})}function Vl(i){let t=va.find(n=>n.id===i);if(!t)return;et.hideCard(),et.showConstPanel(t);let e=(window.__constData||[]).find(n=>n.id===i);e&&Pu(e.center.clone().normalize())}function Lu(i){let t=(window.__nebData||[]).find(e=>e.info.id===i);t&&(et.hideCard(),et.showNebulaPanel({...t.info,img:t.img}),Pu(t.center.clone().normalize()))}function m_(){et.hideConstPanel(),st.flyTo({camPos:bu.clone(),target:wu.clone(),duration:2.5,arc:.25,shift:0,onDone:()=>st.setRange(50,16e3)})}var Iu=new gs,Su=0,Du=performance.now();function Uu(i){try{Su+=i,window.__frames=(window.__frames||0)+1;let t=et.SPEEDS[Gn].v;if(rn+=t*i,Le){let n=(rn-Le.peakJd)*1440;fi&&(Lt.eclipsePhase=Math.max(-1,Math.min(1,n/Le.halfMin)),t&&Math.abs(n)>Le.halfMin&&(Gn=0,et.setActiveSpeed(0))),et.updateTimeline(n)}Lt.update(rn,t,se,Su,Pn),Lt.camLight.position.copy(se.position),p_();for(let[n,s]of Lt.bodies)s.mesh.userData.bodyId=n;st.applyPitchLink(g_()),st.update(i),n_(i),Lt.syncSunDisc(se);let e=se.position.length();e>19e3&&se.position.multiplyScalar(19e3/e),r_(),Ru(),et.updateDate(rn),et.updateOverlay(Lt.bodies,se,be,hi,_n,innerWidth,innerHeight),et.updateConstLabels(window.__constData||[],se,be==="deep"&&Bi&&Wn>.5),sr.render()}catch(t){window.__frameErr=(window.__frameErr||[]).concat(String(t&&t.stack||t).slice(0,400))}}function Nu(){requestAnimationFrame(Nu),Du=performance.now(),Uu(Math.min(Iu.getDelta(),.1))}Nu();setInterval(()=>{performance.now()-Du>350&&Uu(Math.min(Iu.getDelta(),.4))},140);addEventListener("resize",()=>{se.aspect=innerWidth/innerHeight,se.updateProjectionMatrix(),Ts.setSize(innerWidth,innerHeight),sr.setSize(innerWidth,innerHeight)});function g_(){return ya/Math.max(se.aspect,.42)}function __(){let i=kl(),t=st._poseFrom(i.camPos,i.target);st.target.copy(t.target),st.viewHeight=t.viewHeight,st.yaw=t.yaw,st.pitch=t.pitch,st._syncTargets(),st.setRange(.9,6e3),se.position.copy(i.camPos),se.lookAt(i.target),se.updateMatrixWorld(),be="solar",Lt.setOrbitsVisible(!0),Lt.group.visible=!0,Lt.group.scale.setScalar(1),di(!0),gn(0),et.setMode("solar"),et.setRailActive(null)}__();window.__scene={camera:se,flight:st,solar:Lt,setMode:i=>{be=i},select:i=>Ha(i),overview:()=>Na(),setPositionMode:i=>{Pn=i},setFreePitch:i=>st.setFreePitch(i),focusConst:i=>Vl(i),focusNebula:i=>Lu(i),get state(){return{mode:be,jd:rn,speedIdx:Gn,eclipseView:Xn,selectedId:_n,positionMode:Pn,deepReady:Bi,flying:st.isFlying}}};})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
