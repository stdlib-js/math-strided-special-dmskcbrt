// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var E=String.fromCharCode,U=isNaN,I=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,a,o,f,l,s,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,U(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function T(r){return"string"==typeof r}function O(r){var e,t,n;if(!T(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=j(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var V=Object.prototype,N=V.toString,$=V.__defineGetter__,G=V.__defineSetter__,H=V.__lookupGetter__,W=V.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(r,e)||W.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,t.get),o&&G&&G.call(r,e,t.set),r};function L(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function P(r,e,t,n,i,a,o,c){var u,f,l,s;if(r<=0)return a;for(u=t<0?(1-r)*t:0,f=i<0?(1-r)*i:0,l=o<0?(1-r)*o:0,s=0;s<r;s++)0===n[f]&&(a[l]=c(e[u])),u+=t,f+=i,l+=o;return a}function R(r,e,t,n,i,a,o,c,u,f,l){var s,p,y,g;if(r<=0)return c;for(s=n,p=o,y=f,g=0;g<r;g++)0===i[p]&&(c[y]=l(e[s])),s+=t,p+=a,y+=u;return c}L(P,"ndarray",R);var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,M="function"==typeof z?z.toStringTag:"";var q=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return X.call(r);t=r[M],a=M,e=null!=(i=r)&&Y.call(i,a);try{r[M]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[M]=t:delete r[M],n}:function(r){return X.call(r)},B="function"==typeof Uint32Array;var D="function"==typeof Uint32Array?Uint32Array:null;var J,K="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,e,t;if("function"!=typeof D)return!1;try{e=new D(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(B&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q=J,rr="function"==typeof Float64Array;var er="function"==typeof Float64Array?Float64Array:null;var tr,nr="function"==typeof Float64Array?Float64Array:void 0;tr=function(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er([1,3.14,-3.14,NaN]),t=e,r=(rr&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ir=tr,ar="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null;var cr,ur="function"==typeof Uint8Array?Uint8Array:void 0;cr=function(){var r,e,t;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,256,257]),t=e,r=(ar&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr=cr,lr="function"==typeof Uint16Array;var sr="function"==typeof Uint16Array?Uint16Array:null;var pr,yr="function"==typeof Uint16Array?Uint16Array:void 0;pr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(lr&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,dr={uint16:pr,uint8:fr};(gr=new dr.uint16(1))[0]=4660;var vr=52===new dr.uint8(gr.buffer)[0],hr=!0===vr?1:0,wr=new ir(1),br=new Q(wr.buffer);function mr(r){return wr[0]=r,br[hr]}var Ar=!0===vr?1:0,_r=new ir(1),Er=new Q(_r.buffer);var Ur,Ir,Sr=Number.POSITIVE_INFINITY,xr=Number.NEGATIVE_INFINITY;!0===vr?(Ur=1,Ir=0):(Ur=0,Ir=1);var kr,Fr,jr={HIGH:Ur,LOW:Ir},Tr=new ir(1),Or=new Q(Tr.buffer),Vr=jr.HIGH,Nr=jr.LOW;function $r(r,e){return Or[Vr]=r,Or[Nr]=e,Tr[0]}!0===vr?(kr=1,Fr=0):(kr=0,Fr=1);var Gr={HIGH:kr,LOW:Fr},Hr=new ir(1),Wr=new Q(Hr.buffer),Cr=Gr.HIGH,Lr=Gr.LOW;function Pr(r,e,t,n){return Hr[0]=r,e[n]=Wr[Cr],e[n+t]=Wr[Lr],e}function Rr(r){return Pr(r,[0,0],1,0)}L(Rr,"assign",Pr);var Zr=mr(22250738585072014e-324),Xr=[0,0];function Yr(r){var e,t,n,i;return 0===r||function(r){return r!=r}(r)||function(r){return r===Sr||r===xr}(r)?r:(e=(2147483648&(t=mr(r)>>>0))>>>0,i=(t&=2147483647)<Zr?$r(e|696219795+(((2147483647&mr(i=0x40000000000000*r))>>>0)/3>>>0)>>>0,0):function(r,e){return _r[0]=r,Er[Ar]=e>>>0,_r[0]}(i=0,e|715094163+(t/3>>>0)>>>0),i*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(n=i*i*(i/r)),Rr.assign(i,Xr,1,0),2147483648&Xr[1]?(Xr[0]+=1,Xr[1]&=2147483647):Xr[1]|=2147483648,i=$r(4294967295&Xr[0],3221225472&Xr[1]),i+=i*(n=((n=r/(i*i))-i)/(i+i+n)))}function zr(r,e,t,n,i,a,o){return P(r,e,t,n,i,a,o,Yr)}function Mr(r,e,t,n,i,a,o,c,u,f){return R(r,e,t,n,i,a,o,c,u,f,Yr)}L(zr,"ndarray",Mr);export{zr as default,Mr as ndarray};
//# sourceMappingURL=mod.js.map
