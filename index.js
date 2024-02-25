// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).nditerValues=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function i(t,e,r){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function f(t){var e,n,f;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,f=parseInt(n,10),!isFinite(f)){if(!r(n))throw new Error("invalid integer. Value: "+n);f=0}return f<0&&("u"===t.specifier||10!==e)&&(f=4294967295+f+1),f<0?(n=(-f).toString(e),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=f.toString(e),f||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,c=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,_=/\.0*e/,b=/(\..*[^0])0*e/;function v(t){var e,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":u(i)<1e-4?((e=t.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(t.precision),t.alternate||(n=l.call(n,b,"$1e"),n=l.call(n,_,"e"),n=l.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,h,"e-0$1"),t.alternate&&(n=l.call(n,y,"$1."),n=l.call(n,g,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===c.call(t.specifier)?c.call(n):s.call(n)}function m(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}var w=String.fromCharCode,O=isNaN,j=Array.isArray;function E(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function A(t){var e,r,n,o,a,u,s,c,l,p,h,y,g;if(!j(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",s=1,c=0;c<t.length;c++)if(n=t[c],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),r=n.flags,l=0;l<r.length;l++)switch(o=r.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,O(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):w(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,h=n.width,y=n.padRight,g=void 0,(g=h-p.length)<0?p:p=y?p+m(g):m(g)+p)),u+=n.arg||"",s+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function U(t){var e,r,n,i;for(r=[],i=0,n=x.exec(t);n;)(e=t.slice(i,x.lastIndex-n[0].length)).length&&r.push(e),r.push(I(n)),i=x.lastIndex,n=x.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function S(t){var e,r;if("string"!=typeof t)throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[U(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return A.apply(null,e)}var T,N=Object.prototype,R=N.toString,V=N.__defineGetter__,F=N.__defineSetter__,B=N.__lookupGetter__,L=N.__lookupSetter__;T=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(B.call(t,e)||L.call(t,e)?(n=t.__proto__,t.__proto__=N,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(t,e,r.get),a&&F&&F.call(t,e,r.set),t};var C=T;function k(t,e,r){C(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function P(){return M&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function Y(t,e){return null!=t&&D.call(t,e)}var $="function"==typeof Symbol?Symbol:void 0,J="function"==typeof $?$.toStringTag:"";var W=P()?function(t){var e,r,n;if(null==t)return G.call(t);r=t[J],e=Y(t,J);try{t[J]=void 0}catch(e){return G.call(t)}return n=G.call(t),e?t[J]=r:delete t[J],n}:function(t){return G.call(t)};var z=Array.isArray?Array.isArray:function(t){return"[object Array]"===W(t)};var X=/./;function Z(t){return"boolean"==typeof t}var H=Boolean,q=Boolean.prototype.toString;var K=P();function Q(t){return"object"==typeof t&&(t instanceof H||(K?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===W(t)))}function tt(t){return Z(t)||Q(t)}k(tt,"isPrimitive",Z),k(tt,"isObject",Q);var et="object"==typeof self?self:null,rt="object"==typeof window?window:null,nt="object"==typeof global?global:null,it="object"==typeof globalThis?globalThis:null;function ot(t){if(arguments.length){if(!Z(t))throw new TypeError(S("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(it)return it;if(et)return et;if(rt)return rt;if(nt)return nt;throw new Error("unexpected error. Unable to resolve global object.")}var at=ot(),ft=at.document&&at.document.childNodes,ut=Int8Array;function st(){return/^\s*function\s*([^(]*)/i}var ct=/^\s*function\s*([^(]*)/i;function lt(t){return null!==t&&"object"==typeof t}k(st,"REGEXP",ct);var pt=function(t){if("function"!=typeof t)throw new TypeError(S("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!z(e))return!1;if(r=e.length,0===r)return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(lt);function ht(t){var e,r,n,i;if(("Object"===(r=W(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=ct.exec(n.toString()))return e[1]}return lt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}k(lt,"isObjectLikeArray",pt);var yt="function"==typeof X||"object"==typeof ut||"function"==typeof ft?function(t){return ht(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?ht(t).toLowerCase():e};function gt(t){return"function"===yt(t)}var dt,_t=Object,bt=Object.getPrototypeOf;dt=gt(Object.getPrototypeOf)?bt:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===W(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var vt=dt;var mt=Object.prototype;function wt(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!z(t)}(t)&&(e=function(t){return null==t?null:(t=_t(t),vt(t))}(t),!e||!Y(t,"constructor")&&Y(e,"constructor")&&gt(e.constructor)&&"[object Function]"===W(e.constructor)&&Y(e,"isPrototypeOf")&&gt(e.isPrototypeOf)&&(e===mt||function(t){var e;for(e in t)if(!Y(t,e))return!1;return!0}(t)))}var Ot=["row-major","column-major"];function jt(){return Ot.slice()}function Et(){return{"row-major":1,"column-major":2}}k(jt,"enum",Et);var At=jt(),xt=At.length;var It=ot();function Ut(t,e,r){C(t,e,{configurable:!1,enumerable:!1,get:r})}var St={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function Tt(t){return Math.abs(t)}function Nt(t,e){return e&&(2===t||3===t)}function Rt(t,e){return e&&(1===t||3===t)}function Vt(t,e,r){var n,i,o,a,f;for(n=t.length,i=r,o=r,f=0;f<n;f++){if(0===t[f])return[r,r];(a=e[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]}function Ft(t){return t.re}function Bt(t){return t.im}function Lt(t){return"string"==typeof t}k(Vt,"assign",(function(t,e,r,n){var i,o,a,f,u;for(i=t.length,o=r,a=r,u=0;u<i;u++){if(0===t[u])return n[0]=r,n[1]=r,n;(f=e[u])>0?a+=f*(t[u]-1):f<0&&(o+=f*(t[u]-1))}return n[0]=o,n[1]=a,n}));var Ct=String.prototype.valueOf;var kt=P();function Mt(t){return"object"==typeof t&&(t instanceof String||(kt?function(t){try{return Ct.call(t),!0}catch(t){return!1}}(t):"[object String]"===W(t)))}function Pt(t){return Lt(t)||Mt(t)}k(Pt,"isPrimitive",Lt),k(Pt,"isObject",Mt);var Gt=/[-\/\\^$*+?.()|[\]{}]/g;var Dt=RegExp.prototype.exec;var Yt=P();function $t(t){return"object"==typeof t&&(t instanceof RegExp||(Yt?function(t){try{return Dt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===W(t)))}function Jt(t,e,r){if(!Lt(t))throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",t));if(Lt(e))e=new RegExp(function(t){var e,r;if(!Lt(t))throw new TypeError(S("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(Gt,"\\$&"):(e=(e=t.substring(1,r)).replace(Gt,"\\$&"),t=t[0]+e+t.substring(r))}(e),"g");else if(!$t(e))throw new TypeError(S("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!Lt(r)&&!gt(r))throw new TypeError(S("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return function(t,e,r){return t.replace(e,r)}(t,e,r)}var Wt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var zt="function"==typeof Uint8Array;var Xt="function"==typeof Uint8Array?Uint8Array:null;var Zt,Ht="function"==typeof Uint8Array?Uint8Array:void 0;Zt=function(){var t,e,r;if("function"!=typeof Xt)return!1;try{e=new Xt(e=[1,3.14,-3.14,256,257]),r=e,t=(zt&&r instanceof Uint8Array||"[object Uint8Array]"===W(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Ht:function(){throw new Error("not implemented")};var qt=Zt,Kt="function"==typeof Uint16Array;var Qt="function"==typeof Uint16Array?Uint16Array:null;var te,ee="function"==typeof Uint16Array?Uint16Array:void 0;te=function(){var t,e,r;if("function"!=typeof Qt)return!1;try{e=new Qt(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Kt&&r instanceof Uint16Array||"[object Uint16Array]"===W(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?ee:function(){throw new Error("not implemented")};var re,ne={uint16:te,uint8:qt};(re=new ne.uint16(1))[0]=4660;var ie=52===new ne.uint8(re.buffer)[0],oe="function"==typeof ArrayBuffer;var ae="function"==typeof Float64Array;var fe="function"==typeof Float64Array?Float64Array:null;var ue,se="function"==typeof Float64Array?Float64Array:void 0;ue=function(){var t,e,r;if("function"!=typeof fe)return!1;try{e=new fe([1,3.14,-3.14,NaN]),r=e,t=(ae&&r instanceof Float64Array||"[object Float64Array]"===W(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?se:function(){throw new Error("not implemented")};var ce=ue,le="function"==typeof ArrayBuffer?ArrayBuffer:null;var pe,he="function"==typeof ArrayBuffer?ArrayBuffer:void 0;pe=function(){var t,e,r,n;if("function"!=typeof le)return!1;try{r=new le(16),n=r,(t=(oe&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===W(n))&&"function"==typeof le.isView)&&((e=new ce(r))[0]=-3.14,e[1]=NaN,t=t&&le.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?he:function(){throw new Error("not implemented")};var ye=pe,ge="function"==typeof DataView;var de="function"==typeof DataView?DataView:null;var _e,be="function"==typeof DataView?DataView:void 0;_e=function(){var t,e,r,n;if("function"!=typeof de)return!1;try{r=new ye(24),e=new de(r,8),n=e,(t=(ge&&n instanceof DataView||"[object DataView]"===W(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?be:function(){throw new Error("not implemented")};var ve=_e,me="function"==typeof BigInt?BigInt:void 0,we={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Oe(){var t;return 0===arguments.length?we.all.slice():(t=we[arguments[0]])?t.slice():[]}function je(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ee(t,e,r){C(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function Ae(t){return Object.keys(Object(t))}var xe,Ie=void 0!==Object.keys;function Ue(t){return"[object Arguments]"===W(t)}xe=function(){return Ue(arguments)}();var Se=xe;function Te(t){return"number"==typeof t}var Ne=Number,Re=Ne.prototype.toString;var Ve=P();function Fe(t){return"object"==typeof t&&(t instanceof Ne||(Ve?function(t){try{return Re.call(t),!0}catch(t){return!1}}(t):"[object Number]"===W(t)))}function Be(t){return Te(t)||Fe(t)}function Le(t){return t!=t}function Ce(t){return Te(t)&&Le(t)}function ke(t){return Fe(t)&&Le(t.valueOf())}function Me(t){return Ce(t)||ke(t)}k(Be,"isPrimitive",Te),k(Be,"isObject",Fe),k(Me,"isPrimitive",Ce),k(Me,"isObject",ke);var Pe=Number.POSITIVE_INFINITY,Ge=Ne.NEGATIVE_INFINITY,De=Math.floor;function Ye(t){return De(t)===t}function $e(t){return t<Pe&&t>Ge&&Ye(t)}function Je(t){return Te(t)&&$e(t)}function We(t){return Fe(t)&&$e(t.valueOf())}function ze(t){return Je(t)||We(t)}k(ze,"isPrimitive",Je),k(ze,"isObject",We);var Xe=Object.prototype.propertyIsEnumerable;var Ze=!Xe.call("beep","0");function He(t,e){var r;return null!=t&&(!(r=Xe.call(t,e))&&Ze&&Pt(t)?!Ce(e=+e)&&Je(e)&&e>=0&&e<t.length:r)}var qe=Se?Ue:function(t){return null!==t&&"object"==typeof t&&!z(t)&&"number"==typeof t.length&&Ye(t.length)&&t.length>=0&&t.length<=4294967295&&Y(t,"callee")&&!He(t,"callee")},Ke=Array.prototype.slice;var Qe=He((function(){}),"prototype"),tr=!He({toString:null},"toString"),er=9007199254740991;function rr(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Ye(t.length)&&t.length>=0&&t.length<=er}function nr(t,e,r){var n,i;if(!rr(t)&&!Lt(t))throw new TypeError(S("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!Je(r))throw new TypeError(S("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Me(e)){for(;i<n;i++)if(Me(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function ir(t){return t.constructor&&t.constructor.prototype===t}var or=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ar="undefined"==typeof window?void 0:window;var fr=function(){var t;if("undefined"===yt(ar))return!1;for(t in ar)try{-1===nr(or,t)&&Y(ar,t)&&null!==ar[t]&&"object"===yt(ar[t])&&ir(ar[t])}catch(t){return!0}return!1}(),ur="undefined"!=typeof window;var sr,cr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];sr=Ie?function(){return 2!==(Ae(arguments)||"").length}(1,2)?function(t){return qe(t)?Ae(Ke.call(t)):Ae(t)}:Ae:function(t){var e,r,n,i,o,a,f;if(i=[],qe(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!Y(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!lt(t))return i;r=Qe&&n}for(o in t)r&&"prototype"===o||!Y(t,o)||i.push(String(o));if(tr)for(e=function(t){if(!1===ur&&!fr)return ir(t);try{return ir(t)}catch(t){return!1}}(t),f=0;f<cr.length;f++)a=cr[f],e&&"constructor"===a||!Y(t,a)||i.push(String(a));return i};var lr=sr;k(Oe,"enum",je),function(t,e){var r,n,i;for(r=lr(e),i=0;i<r.length;i++)Ee(t,n=r[i],e[n])}(Oe,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var pr=["throw","normalize","clamp","wrap"];function hr(){return{throw:1,clamp:2,wrap:3,normalize:4}}k((function(){return pr.slice()}),"enum",hr);var yr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},gr={"row-major":1,"column-major":2},dr={throw:1,clamp:2,wrap:3,normalize:4};var _r=4294967295,br=4294967296,vr=new qt(8),mr=new ve(vr.buffer);function wr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<vr.length;a++)e[n]=0,n+=r;return e}for(o=(t&_r)>>>0,i=De(t/br),ie?(mr.setUint32(0,o,ie),mr.setUint32(4,i,ie)):(mr.setUint32(0,i,ie),mr.setUint32(4,o,ie)),a=0;a<vr.length;a++)e[n]=vr[a],n+=r;return e}k((function(t){var e,r,n,i;return e=new qt(8),0===t||(i=(4294967295&t)>>>0,n=De(t/4294967296),r=new ve(e.buffer),ie?(r.setUint32(0,i,ie),r.setUint32(4,n,ie)):(r.setUint32(0,n,ie),r.setUint32(4,i,ie))),e}),"assign",wr);var Or={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},jr={"row-major":1,"column-major":2},Er={throw:1,clamp:2,wrap:3,normalize:4};function Ar(t,e,r,n,i,o){var a,f,u,s,c;if(!(this instanceof Ar))return new Ar(t,e,r,n,i,o);for(s=1,c=0;c<r.length;c++)s*=r[c];return f=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*s:null,this._byteLength=f,this._bytesPerElement=function(t){return St[t]||null}(t),this._buffer=e,this._dtype=t,this._length=s,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=H(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=Vt(e,r,n))[1]-o[0]+1}(s,r,n,i,this._iterationOrder),u=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=Tt(t[0]),a=1;a<r;a++){if(o=Tt(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:Rt(u,a),COLUMN_MAJOR_CONTIGUOUS:Nt(u,a),READONLY:!1},this.__meta_dataview__=null,this}k(Ar,"name","ndarray"),Ut(Ar.prototype,"byteLength",(function(){return this._byteLength})),Ut(Ar.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),Ut(Ar.prototype,"data",(function(){return this._buffer})),Ut(Ar.prototype,"dtype",(function(){return this._dtype})),Ut(Ar.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),Ut(Ar.prototype,"length",(function(){return this._length})),Ut(Ar.prototype,"ndims",(function(){return this._ndims})),Ut(Ar.prototype,"offset",(function(){return this._offset})),Ut(Ar.prototype,"order",(function(){return this._order})),Ut(Ar.prototype,"shape",(function(){return this._shape.slice()})),Ut(Ar.prototype,"strides",(function(){return this._strides.slice()})),k(Ar.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),k(Ar.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),k(Ar.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),k(Ar.prototype,"iset",(function(t,e){var r,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),k(Ar.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=Ft(i=this.iget(o))+", "+Bt(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=Ft(i=this.iget(o))+", "+Bt(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=Ft(i=this.iget(this._length-1-o))+", "+Bt(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Jt(Wt[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),k(Ar.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(Ft(r),Bt(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),k(Ar.prototype,"__array_meta_dataview__","function"==typeof It.BigInt&&"function"==typeof BigInt&&"bigint"==typeof It.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,f,u,s,c,l,p,h;if(u=this._mode||"throw",a=this._submode||[u],r=33+16*(l=this._ndims)+(p=a.length),(f=this.__meta_dataview__)&&f.byteLength===r)return f;for(f=new ve(new ye(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,f.setInt8(s,ie?1:0),s+=1,f.setInt16(s,yr[n],ie),s+=2,f.setBigInt64(s,me(l),ie),c=8*l,s+=8,h=0;h<l;h++)f.setBigInt64(s,me(i[h]),ie),f.setBigInt64(s+c,me(o[h]*t),ie),s+=8;for(s+=c,f.setBigInt64(s,me(this._offset*t),ie),s+=8,f.setInt8(s,gr[this._order]),s+=1,f.setInt8(s,dr[u]),s+=1,f.setBigInt64(s,me(p),ie),s+=8,h=0;h<p;h++)f.setInt8(s,dr[a[h]]),s+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(s,e,ie),this.__meta_dataview__=f,f}:function(){var t,e,r,n,i,o,a,f,u,s,c,l,p,h,y;if(s=this._mode||"throw",f=this._submode||[s],n=33+16*(p=this._ndims)+(h=f.length),(u=this.__meta_dataview__)&&u.byteLength===n)return u;for(u=new ve(new ye(n)),e=new qt(u.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,u.setInt8(c,ie?1:0),c+=1,u.setInt16(c,Or[i],ie),wr(p,e,1,c+=2),l=8*p,c+=8,y=0;y<p;y++)wr(o[y],e,1,c),wr(a[y]*t,e,1,c+l),c+=8;for(c+=l,wr(this._offset*t,e,1,c),c+=8,u.setInt8(c,jr[this._order]),c+=1,u.setInt8(c,Er[s]),wr(h,e,1,c+=1),c+=8,y=0;y<h;y++)u.setInt8(c,Er[f[y]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,u.setInt32(c,r,ie),this.__meta_dataview__=u,u});var xr="function"==typeof $&&"symbol"==typeof $("foo")&&Y($,"iterator")&&"symbol"==typeof $.iterator?Symbol.iterator:null;function Ir(t){return function(t,e){var r,n;for(r=[],n=0;n<e;n++)r.push(t);return r}(0,t)}function Ur(t){return Je(t)&&t>=0}function Sr(t){return We(t)&&t.valueOf()>=0}function Tr(t){return Ur(t)||Sr(t)}k(Tr,"isPrimitive",Ur),k(Tr,"isObject",Sr);var Nr="row-major";function Rr(t,e,r,n,i){var o=t.length;if(0===o)return null;if(n<0){if((n+=o)<0)return null}else if(n>=o)return null;return e===Nr?function(t,e,r,n,i){var o,a;for(o=t-1;o>n;o--)i[o]=r[o];for(o=n;o>=0&&(a=(r[o]+1)%e[o],i[o]=a,!(a>0));o--);for(o-=1;o>=0;o--)i[o]=r[o];return i}(o,t,r,n,i):function(t,e,r,n,i){var o,a;for(o=0;o<n;o++)i[o]=r[o];for(o=n;o<t&&(a=(r[o]+1)%e[o],i[o]=a,!(a>0));o++);for(o+=1;o<t;o++)i[o]=r[o];return i}(o,t,r,n,i)}function Vr(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}return k((function(t,e,r,n){return Rr(t,e,r,n,Ir(t.length))}),"assign",Rr),function t(e){var r,n,i,o,a,f,u,s,c,l,p;if(!((p=e)instanceof Ar||null!==p&&"object"==typeof p&&"object"==typeof p.data&&"object"==typeof p.shape&&"object"==typeof p.strides&&"number"==typeof p.offset&&"string"==typeof p.order&&"number"==typeof p.ndims&&"string"==typeof p.dtype&&"number"==typeof p.length&&"object"==typeof p.flags&&"function"==typeof p.get&&"function"==typeof p.set))throw new TypeError(Vr("1k14f",e));if(o={order:e.order},arguments.length>1){if(!wt(r=arguments[1]))throw new TypeError(Vr("1k12V",r));if(Y(r,"order")){if(!function(t){var e;for(e=0;e<xt;e++)if(t===At[e])return!0;return!1}(r.order))throw new TypeError(Vr("1k15C","order",r.order));o.order=r.order}}return n=function(t){var e,r,n,i;if("object"!=typeof t||null===t)throw new TypeError(S("invalid argument. Must provide an ndarray. Value: `%s`.",t));if(!rr(r=t.shape))throw new TypeError(S("invalid argument. Must provide an ndarray. Value: `%s`.",t));for(e=[],i=0;i<r.length;i++){if(!Ur(n=r[i]))throw new TypeError(S("invalid argument. Must provide an ndarray. Value: `%s`.",t));e.push(n)}return e}(e),i=n.length,c=function(t){var e,r,n;if(0===(e=t.length))return 0;for(r=1,n=0;n<e;n++)r*=t[n];return r}(n),0===c&&(f=!0),s="row-major"===o.order?i-1:0,l=-1,u=Ir(i),k(a={},"next",(function(){if(l+=1,f||l>=c)return{done:!0};l>0&&(u=Rr(n,o.order,u,s,u));return{value:e.get.apply(e,u),done:!1}})),k(a,"return",(function(t){if(f=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),xr&&k(a,xr,(function(){return t(e,o)})),a}}));
//# sourceMappingURL=index.js.map