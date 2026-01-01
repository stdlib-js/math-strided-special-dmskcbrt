"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=n(function(C,c){
var x=require('@stdlib/strided-base-dmskmap/dist'),l=require('@stdlib/math-base-special-cbrt/dist');function R(e,r,a,t,i,s,u){return x(e,r,a,t,i,s,u,l)}c.exports=R
});var m=n(function(D,d){
var _=require('@stdlib/strided-base-dmskmap/dist').ndarray,E=require('@stdlib/math-base-special-cbrt/dist');function O(e,r,a,t,i,s,u,y,f,j){return _(e,r,a,t,i,s,u,y,f,j,E)}d.exports=O
});var b=n(function(F,p){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=q(),h=m();g(o,"ndarray",h);p.exports=o
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=b(),v,k=z(w(__dirname,"./native.js"));k instanceof Error?v=A:v=k;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
