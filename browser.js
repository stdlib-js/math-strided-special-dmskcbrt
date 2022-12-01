// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,f){var c,y,l,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((y="value"in f)&&(u.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=f.value,t.__proto__=c):t[r]=f.value),l="get"in f,p="set"in f,y&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(t,r,f.get),p&&i&&i.call(t,r,f.set),t};function c(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(t,r,n,e,o,i,u,a){var f,c,y,l;if(t<=0)return i;for(f=n<0?(1-t)*n:0,c=o<0?(1-t)*o:0,y=u<0?(1-t)*u:0,l=0;l<t;l++)0===e[c]&&(i[y]=a(r[f])),f+=n,c+=o,y+=u;return i}function l(t,r,n,e,o,i,u,a,f,c,y){var l,p,b,d;if(t<=0)return a;for(l=e,p=u,b=c,d=0;d<t;d++)0===o[p]&&(a[b]=y(r[l])),l+=n,p+=i,b+=f;return a}c(y,"ndarray",l);var p,b=2147483647,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,s=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"",A=d&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return v.call(t);n=t[w],i=w,r=null!=(o=t)&&s.call(o,i);try{t[w]=void 0}catch(r){return v.call(t)}return e=v.call(t),r?t[w]=n:delete t[w],e}:function(t){return v.call(t)},_="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,U="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var t,r,n;if("function"!=typeof m)return!1;try{r=new m(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(_&&n instanceof Uint32Array||"[object Uint32Array]"===A(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?U:function(){throw new Error("not implemented")};var h,g=p,j="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,O="function"==typeof Float64Array?Float64Array:void 0;h=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I([1,3.14,-3.14,NaN]),n=r,t=(j&&n instanceof Float64Array||"[object Float64Array]"===A(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?O:function(){throw new Error("not implemented")};var S,E=h,F="function"==typeof Uint8Array,T="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var t,r,n;if("function"!=typeof T)return!1;try{r=new T(r=[1,3.14,-3.14,256,257]),n=r,t=(F&&n instanceof Uint8Array||"[object Uint8Array]"===A(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?N:function(){throw new Error("not implemented")};var H,G=S,P="function"==typeof Uint16Array,x="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;H=function(){var t,r,n;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,65536,65537]),n=r,t=(P&&n instanceof Uint16Array||"[object Uint16Array]"===A(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?L:function(){throw new Error("not implemented")};var V,W={uint16:H,uint8:G};(V=new W.uint16(1))[0]=4660;var k=52===new W.uint8(V.buffer)[0],Y=!0===k?1:0,C=new E(1),q=new g(C.buffer);function z(t){return C[0]=t,q[Y]}var B,D,J=!0===k?1:0,K=new E(1),M=new g(K.buffer),Q=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;!0===k?(B=1,D=0):(B=0,D=1);var X,Z,$={HIGH:B,LOW:D},tt=new E(1),rt=new g(tt.buffer),nt=$.HIGH,et=$.LOW;function ot(t,r){return rt[nt]=t,rt[et]=r,tt[0]}!0===k?(X=1,Z=0):(X=0,Z=1);var it={HIGH:X,LOW:Z},ut=new E(1),at=new g(ut.buffer),ft=it.HIGH,ct=it.LOW;function yt(t,r,n,e){return ut[0]=t,r[e]=at[ft],r[e+n]=at[ct],r}function lt(t){return yt(t,[0,0],1,0)}c(lt,"assign",yt);var pt=2147483648,bt=z(22250738585072014e-324),dt=[0,0];function vt(t){var r,n,e,o;return 0===t||function(t){return t!=t}(t)||function(t){return t===Q||t===R}(t)?t:(r=(2147483648&(n=z(t)>>>0))>>>0,o=(n&=b)<bt?ot(r|696219795+(((z(o=0x40000000000000*t)&b)>>>0)/3>>>0)>>>0,0):function(t,r){return K[0]=t,M[J]=r>>>0,K[0]}(o=0,r|715094163+(n/3>>>0)>>>0),o*=function(t){return 0===t?1.87595182427177:1.87595182427177+t*(t*(1.6214297201053545+t*(.14599619288661245*t-.758397934778766))-1.8849797954337717)}(e=o*o*(o/t)),lt.assign(o,dt,1,0),dt[1]&pt?(dt[0]+=1,dt[1]&=~pt):dt[1]|=pt,o=ot(4294967295&dt[0],3221225472&dt[1]),o+=o*(e=((e=t/(o*o))-o)/(o+o+e)))}function st(t,r,n,e,o,i,u){return y(t,r,n,e,o,i,u,vt)}return c(st,"ndarray",(function(t,r,n,e,o,i,u,a,f,c){return l(t,r,n,e,o,i,u,a,f,c,vt)})),st},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).dmskcbrt=r();
//# sourceMappingURL=browser.js.map
