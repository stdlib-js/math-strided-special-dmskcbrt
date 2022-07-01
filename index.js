// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=r,y=function(t,n,r){var c,y,l,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((y="value"in r)&&(f.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=c):t[n]=r.value),l="get"in r,p="set"in r,y&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(t,n,r.get),p&&u&&u.call(t,n,r.set),t},l=n()?c:y,p=function(t,n,r){l(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},b=function(t,n,r,e,o,i,u,f){var a,c,y,l;if(t<=0)return i;for(a=r<0?(1-t)*r:0,c=o<0?(1-t)*o:0,y=u<0?(1-t)*u:0,l=0;l<t;l++)0===e[c]&&(i[y]=f(n[a])),a+=r,c+=o,y+=u;return i},d=function(t,n,r,e,o,i,u,f,a,c,y){var l,p,b,d;if(t<=0)return f;for(l=e,p=u,b=c,d=0;d<t;d++)0===o[p]&&(f[b]=y(n[l])),l+=r,p+=i,b+=a;return f},w=b;p(w,"ndarray",d);var A,_=w,m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,s=v,U=function(t){return s.call(t)},h=Object.prototype.hasOwnProperty,j=function(t,n){return null!=t&&h.call(t,n)},g="function"==typeof Symbol?Symbol.toStringTag:"",I=j,O=g,S=v,E=U,F=function(t){var n,r,e;if(null==t)return S.call(t);r=t[O],n=I(t,O);try{t[O]=void 0}catch(n){return S.call(t)}return e=S.call(t),n?t[O]=r:delete t[O],e},T=m&&"symbol"==typeof Symbol.toStringTag?F:E,N=T,H="function"==typeof Uint32Array,G="function"==typeof Uint32Array?Uint32Array:null,P=function(t){return H&&t instanceof Uint32Array||"[object Uint32Array]"===N(t)},x=G,L=function(){var t,n;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,4294967296,4294967297]),t=P(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},V="function"==typeof Uint32Array?Uint32Array:void 0,W=function(){throw new Error("not implemented")},k=L()?V:W,Y=T,C="function"==typeof Float64Array,q="function"==typeof Float64Array?Float64Array:null,z=function(t){return C&&t instanceof Float64Array||"[object Float64Array]"===Y(t)},B=q,D=function(){var t,n;if("function"!=typeof B)return!1;try{n=new B([1,3.14,-3.14,NaN]),t=z(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t},J="function"==typeof Float64Array?Float64Array:void 0,K=function(){throw new Error("not implemented")},M=D()?J:K,Q=T,R="function"==typeof Uint8Array,X="function"==typeof Uint8Array?Uint8Array:null,Z=function(t){return R&&t instanceof Uint8Array||"[object Uint8Array]"===Q(t)},$=X,tt=function(){var t,n;if("function"!=typeof $)return!1;try{n=new $(n=[1,3.14,-3.14,256,257]),t=Z(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},nt="function"==typeof Uint8Array?Uint8Array:void 0,rt=function(){throw new Error("not implemented")},et=tt()?nt:rt,ot=T,it="function"==typeof Uint16Array,ut="function"==typeof Uint16Array?Uint16Array:null,ft=function(t){return it&&t instanceof Uint16Array||"[object Uint16Array]"===ot(t)},at=ut,ct=function(){var t,n;if("function"!=typeof at)return!1;try{n=new at(n=[1,3.14,-3.14,65536,65537]),t=ft(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},yt="function"==typeof Uint16Array?Uint16Array:void 0,lt=function(){throw new Error("not implemented")},pt={uint16:ct()?yt:lt,uint8:et};(A=new pt.uint16(1))[0]=4660;var bt,dt,wt=52===new pt.uint8(A.buffer)[0],At=k,_t=!0===wt?1:0,mt=new M(1),vt=new At(mt.buffer),st=function(t){return mt[0]=t,vt[_t]},Ut=k,ht=!0===wt?1:0,jt=new M(1),gt=new Ut(jt.buffer),It=function(t,n){return jt[0]=t,gt[ht]=n>>>0,jt[0]},Ot=It,St=Number.POSITIVE_INFINITY,Et=Number.NEGATIVE_INFINITY,Ft=St,Tt=Et,Nt=function(t){return t===Ft||t===Tt};!0===wt?(bt=1,dt=0):(bt=0,dt=1);var Ht,Gt,Pt=k,xt={HIGH:bt,LOW:dt},Lt=new M(1),Vt=new Pt(Lt.buffer),Wt=xt.HIGH,kt=xt.LOW,Yt=function(t,n){return Vt[Wt]=t,Vt[kt]=n,Lt[0]},Ct=Yt;!0===wt?(Ht=1,Gt=0):(Ht=0,Gt=1);var qt=k,zt={HIGH:Ht,LOW:Gt},Bt=new M(1),Dt=new qt(Bt.buffer),Jt=zt.HIGH,Kt=zt.LOW,Mt=function(t,n){return Bt[0]=n,t[0]=Dt[Jt],t[1]=Dt[Kt],t},Qt=function(t,n){return 1===arguments.length?Mt([0,0],t):Mt(t,n)},Rt=st,Xt=Ot,Zt=Nt,$t=Ct,tn=Qt,nn=function(t){return t!=t},rn=function(t){return 0===t?1.87595182427177:1.87595182427177+t*(t*(1.6214297201053545+t*(.14599619288661245*t-.758397934778766))-1.8849797954337717)},en=2147483647,on=2147483648,un=Rt(22250738585072014e-324),fn=[0,0],an=function(t){var n,r,e,o,i;return 0===t||nn(t)||Zt(t)?t:(n=(2147483648&(r=Rt(t)>>>0))>>>0,(r&=en)<un?(e=(Rt(i=0x40000000000000*t)&en)>>>0,i=$t(n|(e=696219795+(e/3>>>0)>>>0),0)):i=Xt(i=0,n|(e=715094163+(r/3>>>0)>>>0)),i*=rn(o=i*i*(i/t)),tn(fn,i),fn[1]&on?(fn[0]+=1,fn[1]&=~on):fn[1]|=on,i=$t(4294967295&fn[0],3221225472&fn[1]),i+=i*(o=((o=t/(i*i))-i)/(i+i+o)))};function cn(t,n,r,e,o,i,u){return _(t,n,r,e,o,i,u,an)}return p(cn,"ndarray",(function(t,n,r,e,o,i,u,f,a,c){return _.ndarray(t,n,r,e,o,i,u,f,a,c,an)})),cn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).dmskcbrt=n();
//# sourceMappingURL=index.js.map
