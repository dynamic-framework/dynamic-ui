import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as Rt}from"./index-Bs5Gjn9L.js";import{M as Jt,U as G,c as U}from"./blocks-BxCtcC-Q.js";import{az as Zt,C as Qt,aA as er,aB as tr,aC as It,aD as rr,aE as nr,aF as ar,aG as ir,aH as or,aI as sr,r as A,aJ as cr,aK as P,aL as lr,aM as ur,aN as dr,aO as fr,u as F,aP as pr,aQ as Fe,Y as yr,aR as hr,aS as V,s as mr,z as J,aT as vr,aU as gr,K as br,Z as jr,aV as wr,aW as Or,aX as xr,A as Pr,aY as Ar,aZ as Sr,a_ as Dr,an as Mt,a$ as Er,b0 as Tr,b1 as Br,b2 as Rr,b3 as Ir,b4 as Mr,b5 as _r,b6 as Lr,b7 as qr,b8 as kr,al as Cr,b9 as T,ba as ze,bb as Nr,bc as Kr,bd as Wr,x as Hr,be as Fr,bf as zr,bg as Gr,bh as Ur,bi as Yr,bj as $r,bk as Xr,bl as Vr,aq as Q,ar as Jr,at as Le,ax as qe,as as Ge,au as Zr,av as Qr,a7 as _t,aw as Lt,ay as Se}from"./PieChart-Bqz_FBHT.js";import{r as h,g as en}from"./iframe-ZEkJrePL.js";import{c as L}from"./clsx-B-dksMZM.js";import{r as qt}from"./index-CBp5p8Gq.js";import"./index-Dp0--wXr.js";function De(){return De=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},De.apply(null,arguments)}function Ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function tn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ue(Object(r),!0).forEach(function(n){ke(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ue(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ke(e,t,r){return(t=rn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function rn(e){var t=nn(e,"string");return typeof t=="symbol"?t:t+""}function nn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var E=32;class Ce extends h.PureComponent{renderIcon(t,r){var{inactiveColor:n}=this.props,i=E/2,s=E/6,o=E/3,f=t.inactive?n:t.color,p=r??t.type;if(p==="none")return null;if(p==="plainline")return h.createElement("line",{strokeWidth:4,fill:"none",stroke:f,strokeDasharray:t.payload.strokeDasharray,x1:0,y1:i,x2:E,y2:i,className:"recharts-legend-icon"});if(p==="line")return h.createElement("path",{strokeWidth:4,fill:"none",stroke:f,d:"M0,".concat(i,"h").concat(o,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(2*o,",").concat(i,`
            H`).concat(E,"M").concat(2*o,",").concat(i,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(o,",").concat(i),className:"recharts-legend-icon"});if(p==="rect")return h.createElement("path",{stroke:"none",fill:f,d:"M0,".concat(E/8,"h").concat(E,"v").concat(E*3/4,"h").concat(-E,"z"),className:"recharts-legend-icon"});if(h.isValidElement(t.legendIcon)){var v=tn({},t);return delete v.legendIcon,h.cloneElement(t.legendIcon,v)}return h.createElement(Zt,{fill:f,cx:i,cy:i,size:E,sizeType:"diameter",type:p})}renderItems(){var{payload:t,iconSize:r,layout:n,formatter:i,inactiveColor:s,iconType:o}=this.props,f={x:0,y:0,width:E,height:E},p={display:n==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return t.map((a,c)=>{var y=a.formatter||i,u=L({"recharts-legend-item":!0,["legend-item-".concat(c)]:!0,inactive:a.inactive});if(a.type==="none")return null;var m=a.inactive?s:a.color,b=y?y(a.value,a,c):a.value;return h.createElement("li",De({className:u,style:p,key:"legend-item-".concat(c)},Qt(this.props,a,c)),h.createElement(er,{width:r,height:r,viewBox:f,style:v,"aria-label":"".concat(b," legend icon")},this.renderIcon(a,o)),h.createElement("span",{className:"recharts-legend-item-text",style:{color:m}},b))})}render(){var{payload:t,layout:r,align:n}=this.props;if(!t||!t.length)return null;var i={padding:0,margin:0,textAlign:r==="horizontal"?n:"left"};return h.createElement("ul",{className:"recharts-default-legend",style:i},this.renderItems())}}ke(Ce,"displayName","Legend");ke(Ce,"defaultProps",{align:"center",iconSize:14,inactiveColor:"#ccc",layout:"horizontal",verticalAlign:"middle"});var re={},ne={},Ye;function an(){return Ye||(Ye=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n){const i=new Map;for(let s=0;s<r.length;s++){const o=r[s],f=n(o);i.has(f)||i.set(f,o)}return Array.from(i.values())}e.uniqBy=t})(ne)),ne}var ae={},$e;function kt(){return $e||($e=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r}e.identity=t})(ae)),ae}var ie={},oe={},Xe;function on(){return Xe||(Xe=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="object"&&r!==null}e.isObjectLike=t})(oe)),oe}var Ve;function sn(){return Ve||(Ve=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=tr(),r=on();function n(i){return r.isObjectLike(i)&&t.isArrayLike(i)}e.isArrayLikeObject=n})(ie)),ie}var se={},ce={},Je;function cn(){return Je||(Je=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=It();function r(n){return function(i){return t.get(i,n)}}e.property=r})(ce)),ce}var le={},ue={},de={},fe={},Ze;function Ct(){return Ze||(Ze=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==null||typeof r!="object"&&typeof r!="function"}e.isPrimitive=t})(fe)),fe}var Qe;function ln(){return Qe||(Qe=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=rr(),r=Ct(),n=nr();function i(a,c,y){return typeof y!="function"?i(a,c,()=>{}):s(a,c,function u(m,b,l,g,j,O){const x=y(m,b,l,g,j,O);return x!==void 0?!!x:s(m,b,u,O)},new Map)}function s(a,c,y,u){if(c===a)return!0;switch(typeof c){case"object":return o(a,c,y,u);case"function":return Object.keys(c).length>0?s(a,{...c},y,u):n.eq(a,c);default:return t.isObject(a)?typeof c=="string"?c==="":!0:n.eq(a,c)}}function o(a,c,y,u){if(c==null)return!0;if(Array.isArray(c))return p(a,c,y,u);if(c instanceof Map)return f(a,c,y,u);if(c instanceof Set)return v(a,c,y,u);const m=Object.keys(c);if(a==null)return m.length===0;if(m.length===0)return!0;if(u!=null&&u.has(c))return u.get(c)===a;u==null||u.set(c,a);try{for(let b=0;b<m.length;b++){const l=m[b];if(!r.isPrimitive(a)&&!(l in a)||c[l]===void 0&&a[l]!==void 0||c[l]===null&&a[l]!==null||!y(a[l],c[l],l,a,c,u))return!1}return!0}finally{u==null||u.delete(c)}}function f(a,c,y,u){if(c.size===0)return!0;if(!(a instanceof Map))return!1;for(const[m,b]of c.entries()){const l=a.get(m);if(y(l,b,m,a,c,u)===!1)return!1}return!0}function p(a,c,y,u){if(c.length===0)return!0;if(!Array.isArray(a))return!1;const m=new Set;for(let b=0;b<c.length;b++){const l=c[b];let g=!1;for(let j=0;j<a.length;j++){if(m.has(j))continue;const O=a[j];let x=!1;if(y(O,l,b,a,c,u)&&(x=!0),x){m.add(j),g=!0;break}}if(!g)return!1}return!0}function v(a,c,y,u){return c.size===0?!0:a instanceof Set?p([...a],[...c],y,u):!1}e.isMatchWith=i,e.isSetMatch=v})(de)),de}var et;function Nt(){return et||(et=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=ln();function r(n,i){return t.isMatchWith(n,i,()=>{})}e.isMatch=r})(ue)),ue}var pe={},ye={},he={},tt;function un(){return tt||(tt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return Object.getOwnPropertySymbols(r).filter(n=>Object.prototype.propertyIsEnumerable.call(r,n))}e.getSymbols=t})(he)),he}var me={},rt;function Kt(){return rt||(rt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(r)}e.getTag=t})(me)),me}var ve={},nt;function Wt(){return nt||(nt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t="[object RegExp]",r="[object String]",n="[object Number]",i="[object Boolean]",s="[object Arguments]",o="[object Symbol]",f="[object Date]",p="[object Map]",v="[object Set]",a="[object Array]",c="[object Function]",y="[object ArrayBuffer]",u="[object Object]",m="[object Error]",b="[object DataView]",l="[object Uint8Array]",g="[object Uint8ClampedArray]",j="[object Uint16Array]",O="[object Uint32Array]",x="[object BigUint64Array]",w="[object Int8Array]",S="[object Int16Array]",B="[object Int32Array]",q="[object BigInt64Array]",D="[object Float32Array]",_="[object Float64Array]";e.argumentsTag=s,e.arrayBufferTag=y,e.arrayTag=a,e.bigInt64ArrayTag=q,e.bigUint64ArrayTag=x,e.booleanTag=i,e.dataViewTag=b,e.dateTag=f,e.errorTag=m,e.float32ArrayTag=D,e.float64ArrayTag=_,e.functionTag=c,e.int16ArrayTag=S,e.int32ArrayTag=B,e.int8ArrayTag=w,e.mapTag=p,e.numberTag=n,e.objectTag=u,e.regexpTag=t,e.setTag=v,e.stringTag=r,e.symbolTag=o,e.uint16ArrayTag=j,e.uint32ArrayTag=O,e.uint8ArrayTag=l,e.uint8ClampedArrayTag=g})(ve)),ve}var ge={},at;function dn(){return at||(at=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}e.isTypedArray=t})(ge)),ge}var it;function Ht(){return it||(it=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=un(),r=Kt(),n=Wt(),i=Ct(),s=dn();function o(a,c){return f(a,void 0,a,new Map,c)}function f(a,c,y,u=new Map,m=void 0){const b=m==null?void 0:m(a,c,y,u);if(b!==void 0)return b;if(i.isPrimitive(a))return a;if(u.has(a))return u.get(a);if(Array.isArray(a)){const l=new Array(a.length);u.set(a,l);for(let g=0;g<a.length;g++)l[g]=f(a[g],g,y,u,m);return Object.hasOwn(a,"index")&&(l.index=a.index),Object.hasOwn(a,"input")&&(l.input=a.input),l}if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp){const l=new RegExp(a.source,a.flags);return l.lastIndex=a.lastIndex,l}if(a instanceof Map){const l=new Map;u.set(a,l);for(const[g,j]of a)l.set(g,f(j,g,y,u,m));return l}if(a instanceof Set){const l=new Set;u.set(a,l);for(const g of a)l.add(f(g,void 0,y,u,m));return l}if(typeof Buffer<"u"&&Buffer.isBuffer(a))return a.subarray();if(s.isTypedArray(a)){const l=new(Object.getPrototypeOf(a)).constructor(a.length);u.set(a,l);for(let g=0;g<a.length;g++)l[g]=f(a[g],g,y,u,m);return l}if(a instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&a instanceof SharedArrayBuffer)return a.slice(0);if(a instanceof DataView){const l=new DataView(a.buffer.slice(0),a.byteOffset,a.byteLength);return u.set(a,l),p(l,a,y,u,m),l}if(typeof File<"u"&&a instanceof File){const l=new File([a],a.name,{type:a.type});return u.set(a,l),p(l,a,y,u,m),l}if(typeof Blob<"u"&&a instanceof Blob){const l=new Blob([a],{type:a.type});return u.set(a,l),p(l,a,y,u,m),l}if(a instanceof Error){const l=new a.constructor;return u.set(a,l),l.message=a.message,l.name=a.name,l.stack=a.stack,l.cause=a.cause,p(l,a,y,u,m),l}if(a instanceof Boolean){const l=new Boolean(a.valueOf());return u.set(a,l),p(l,a,y,u,m),l}if(a instanceof Number){const l=new Number(a.valueOf());return u.set(a,l),p(l,a,y,u,m),l}if(a instanceof String){const l=new String(a.valueOf());return u.set(a,l),p(l,a,y,u,m),l}if(typeof a=="object"&&v(a)){const l=Object.create(Object.getPrototypeOf(a));return u.set(a,l),p(l,a,y,u,m),l}return a}function p(a,c,y=a,u,m){const b=[...Object.keys(c),...t.getSymbols(c)];for(let l=0;l<b.length;l++){const g=b[l],j=Object.getOwnPropertyDescriptor(a,g);(j==null||j.writable)&&(a[g]=f(c[g],g,y,u,m))}}function v(a){switch(r.getTag(a)){case n.argumentsTag:case n.arrayTag:case n.arrayBufferTag:case n.dataViewTag:case n.booleanTag:case n.dateTag:case n.float32ArrayTag:case n.float64ArrayTag:case n.int8ArrayTag:case n.int16ArrayTag:case n.int32ArrayTag:case n.mapTag:case n.numberTag:case n.objectTag:case n.regexpTag:case n.setTag:case n.stringTag:case n.symbolTag:case n.uint8ArrayTag:case n.uint8ClampedArrayTag:case n.uint16ArrayTag:case n.uint32ArrayTag:return!0;default:return!1}}e.cloneDeepWith=o,e.cloneDeepWithImpl=f,e.copyProperties=p})(ye)),ye}var ot;function fn(){return ot||(ot=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ht();function r(n){return t.cloneDeepWithImpl(n,void 0,n,new Map,void 0)}e.cloneDeep=r})(pe)),pe}var st;function pn(){return st||(st=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Nt(),r=fn();function n(i){return i=r.cloneDeep(i),s=>t.isMatch(s,i)}e.matches=n})(le)),le}var be={},je={},we={},ct;function yn(){return ct||(ct=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ht(),r=Wt();function n(i,s){return t.cloneDeepWith(i,(o,f,p,v)=>{const a=s==null?void 0:s(o,f,p,v);if(a!==void 0)return a;if(typeof i=="object")switch(Object.prototype.toString.call(i)){case r.numberTag:case r.stringTag:case r.booleanTag:{const c=new i.constructor(i==null?void 0:i.valueOf());return t.copyProperties(c,i),c}case r.argumentsTag:{const c={};return t.copyProperties(c,i),c.length=i.length,c[Symbol.iterator]=i[Symbol.iterator],c}default:return}})}e.cloneDeepWith=n})(we)),we}var lt;function hn(){return lt||(lt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=yn();function r(n){return t.cloneDeepWith(n)}e.cloneDeep=r})(je)),je}var Oe={},xe={},ut;function mn(){return ut||(ut=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Kt();function r(n){return n!==null&&typeof n=="object"&&t.getTag(n)==="[object Arguments]"}e.isArguments=r})(xe)),xe}var dt;function vn(){return dt||(dt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=ar(),r=or(),n=mn(),i=ir();function s(o,f){let p;if(Array.isArray(f)?p=f:typeof f=="string"&&t.isDeepKey(f)&&(o==null?void 0:o[f])==null?p=i.toPath(f):p=[f],p.length===0)return!1;let v=o;for(let a=0;a<p.length;a++){const c=p[a];if((v==null||!Object.hasOwn(v,c))&&!((Array.isArray(v)||n.isArguments(v))&&r.isIndex(c)&&c<v.length))return!1;v=v[c]}return!0}e.has=s})(Oe)),Oe}var ft;function gn(){return ft||(ft=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Nt(),r=sr(),n=hn(),i=It(),s=vn();function o(f,p){switch(typeof f){case"object":{Object.is(f==null?void 0:f.valueOf(),-0)&&(f="-0");break}case"number":{f=r.toKey(f);break}}return p=n.cloneDeep(p),function(v){const a=i.get(v,f);return a===void 0?s.has(v,f):p===void 0?a===void 0:t.isMatch(a,p)}}e.matchesProperty=o})(be)),be}var pt;function bn(){return pt||(pt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=kt(),r=cn(),n=pn(),i=gn();function s(o){if(o==null)return t.identity;switch(typeof o){case"function":return o;case"object":return Array.isArray(o)&&o.length===2?i.matchesProperty(o[0],o[1]):n.matches(o);case"string":case"symbol":case"number":return r.property(o)}}e.iteratee=s})(se)),se}var yt;function jn(){return yt||(yt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=an(),r=kt(),n=sn(),i=bn();function s(o,f=r.identity){return n.isArrayLikeObject(o)?t.uniqBy(Array.from(o),i.iteratee(f)):[]}e.uniqBy=s})(re)),re}var Pe,ht;function wn(){return ht||(ht=1,Pe=jn().uniqBy),Pe}var On=wn();const mt=en(On);function Ft(e,t,r){return t===!0?mt(e,r):typeof t=="function"?mt(e,t):e}function xn(){return A(cr)}var Y=1;function zt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],[t,r]=h.useState({height:0,left:0,top:0,width:0}),n=h.useCallback(i=>{if(i!=null){var s=i.getBoundingClientRect(),o={height:s.height,left:s.left,top:s.top,width:s.width};(Math.abs(o.height-t.height)>Y||Math.abs(o.left-t.left)>Y||Math.abs(o.top-t.top)>Y||Math.abs(o.width-t.width)>Y)&&r({height:o.height,left:o.left,top:o.top,width:o.width})}},[t.width,t.height,t.top,t.left,...e]);return[t,n]}var Pn=["contextPayload"];function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ee.apply(null,arguments)}function vt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?vt(Object(r),!0).forEach(function(n){Ne(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ne(e,t,r){return(t=An(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function An(e){var t=Sn(e,"string");return typeof t=="symbol"?t:t+""}function Sn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Dn(e,t){if(e==null)return{};var r,n,i=En(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function En(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Tn(e){return e.value}function Bn(e){var{contextPayload:t}=e,r=Dn(e,Pn),n=Ft(t,e.payloadUniqBy,Tn),i=N(N({},r),{},{payload:n});return h.isValidElement(e.content)?h.cloneElement(e.content,i):typeof e.content=="function"?h.createElement(e.content,i):h.createElement(Ce,i)}function Rn(e,t,r,n,i,s){var{layout:o,align:f,verticalAlign:p}=t,v,a;return(!e||(e.left===void 0||e.left===null)&&(e.right===void 0||e.right===null))&&(f==="center"&&o==="vertical"?v={left:((n||0)-s.width)/2}:v=f==="right"?{right:r&&r.right||0}:{left:r&&r.left||0}),(!e||(e.top===void 0||e.top===null)&&(e.bottom===void 0||e.bottom===null))&&(p==="middle"?a={top:((i||0)-s.height)/2}:a=p==="bottom"?{bottom:r&&r.bottom||0}:{top:r&&r.top||0}),N(N({},v),a)}function In(e){var t=F();return h.useEffect(()=>{t(pr(e))},[t,e]),null}function Mn(e){var t=F();return h.useEffect(()=>(t(Fe(e)),()=>{t(Fe({width:0,height:0}))}),[t,e]),null}function _n(e){var t=xn(),r=lr(),n=ur(),{width:i,height:s,wrapperStyle:o,portal:f}=e,[p,v]=zt([t]),a=dr(),c=fr();if(a==null||c==null)return null;var y=a-(n.left||0)-(n.right||0),u=ee.getWidthOrHeight(e.layout,s,i,y),m=f?o:N(N({position:"absolute",width:(u==null?void 0:u.width)||i||"auto",height:(u==null?void 0:u.height)||s||"auto"},Rn(o,e,n,a,c,p)),o),b=f??r;if(b==null)return null;var l=h.createElement("div",{className:"recharts-legend-wrapper",style:m,ref:v},h.createElement(In,{layout:e.layout,align:e.align,verticalAlign:e.verticalAlign,itemSorter:e.itemSorter}),h.createElement(Mn,{width:p.width,height:p.height}),h.createElement(Bn,Ee({},e,u,{margin:n,chartWidth:a,chartHeight:c,contextPayload:t})));return qt.createPortal(l,b)}class ee extends h.PureComponent{static getWidthOrHeight(t,r,n,i){return t==="vertical"&&P(r)?{height:r}:t==="horizontal"?{width:n||i}:null}render(){return h.createElement(_n,this.props)}}Ne(ee,"displayName","Legend");Ne(ee,"defaultProps",{align:"center",iconSize:14,itemSorter:"value",layout:"horizontal",verticalAlign:"bottom"});function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Te.apply(null,arguments)}function gt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Ae(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?gt(Object(r),!0).forEach(function(n){Ln(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):gt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ln(e,t,r){return(t=qn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function qn(e){var t=kn(e,"string");return typeof t=="symbol"?t:t+""}function kn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Cn(e){return Array.isArray(e)&&V(e[0])&&V(e[1])?e.join(" ~ "):e}var Nn=e=>{var{separator:t=" : ",contentStyle:r={},itemStyle:n={},labelStyle:i={},payload:s,formatter:o,itemSorter:f,wrapperClassName:p,labelClassName:v,label:a,labelFormatter:c,accessibilityLayer:y=!1}=e,u=()=>{if(s&&s.length){var w={padding:0,margin:0},S=(f?hr(s,f):s).map((B,q)=>{if(B.type==="none")return null;var D=B.formatter||o||Cn,{value:_,name:z}=B,K=_,k=z;if(D){var I=D(_,z,B,q,s);if(Array.isArray(I))[K,k]=I;else if(I!=null)K=I;else return null}var M=Ae({display:"block",paddingTop:4,paddingBottom:4,color:B.color||"#000"},n);return h.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(q),style:M},V(k)?h.createElement("span",{className:"recharts-tooltip-item-name"},k):null,V(k)?h.createElement("span",{className:"recharts-tooltip-item-separator"},t):null,h.createElement("span",{className:"recharts-tooltip-item-value"},K),h.createElement("span",{className:"recharts-tooltip-item-unit"},B.unit||""))});return h.createElement("ul",{className:"recharts-tooltip-item-list",style:w},S)}return null},m=Ae({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},r),b=Ae({margin:0},i),l=!yr(a),g=l?a:"",j=L("recharts-default-tooltip",p),O=L("recharts-tooltip-label",v);l&&c&&s!==void 0&&s!==null&&(g=c(a,s));var x=y?{role:"status","aria-live":"assertive"}:{};return h.createElement("div",Te({className:j,style:m},x),h.createElement("p",{className:O,style:b},h.isValidElement(g)?g:"".concat(g)),u())},H="recharts-tooltip-wrapper",Kn={visibility:"hidden"};function Wn(e){var{coordinate:t,translateX:r,translateY:n}=e;return L(H,{["".concat(H,"-right")]:P(r)&&t&&P(t.x)&&r>=t.x,["".concat(H,"-left")]:P(r)&&t&&P(t.x)&&r<t.x,["".concat(H,"-bottom")]:P(n)&&t&&P(t.y)&&n>=t.y,["".concat(H,"-top")]:P(n)&&t&&P(t.y)&&n<t.y})}function bt(e){var{allowEscapeViewBox:t,coordinate:r,key:n,offsetTopLeft:i,position:s,reverseDirection:o,tooltipDimension:f,viewBox:p,viewBoxDimension:v}=e;if(s&&P(s[n]))return s[n];var a=r[n]-f-(i>0?i:0),c=r[n]+i;if(t[n])return o[n]?a:c;var y=p[n];if(y==null)return 0;if(o[n]){var u=a,m=y;return u<m?Math.max(c,y):Math.max(a,y)}if(v==null)return 0;var b=c+f,l=y+v;return b>l?Math.max(a,y):Math.max(c,y)}function Hn(e){var{translateX:t,translateY:r,useTranslate3d:n}=e;return{transform:n?"translate3d(".concat(t,"px, ").concat(r,"px, 0)"):"translate(".concat(t,"px, ").concat(r,"px)")}}function Fn(e){var{allowEscapeViewBox:t,coordinate:r,offsetTopLeft:n,position:i,reverseDirection:s,tooltipBox:o,useTranslate3d:f,viewBox:p}=e,v,a,c;return o.height>0&&o.width>0&&r?(a=bt({allowEscapeViewBox:t,coordinate:r,key:"x",offsetTopLeft:n,position:i,reverseDirection:s,tooltipDimension:o.width,viewBox:p,viewBoxDimension:p.width}),c=bt({allowEscapeViewBox:t,coordinate:r,key:"y",offsetTopLeft:n,position:i,reverseDirection:s,tooltipDimension:o.height,viewBox:p,viewBoxDimension:p.height}),v=Hn({translateX:a,translateY:c,useTranslate3d:f})):v=Kn,{cssProperties:v,cssClasses:Wn({translateX:a,translateY:c,coordinate:r})}}function jt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?jt(Object(r),!0).forEach(function(n){Be(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):jt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Be(e,t,r){return(t=zn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function zn(e){var t=Gn(e,"string");return typeof t=="symbol"?t:t+""}function Gn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class Un extends h.PureComponent{constructor(){super(...arguments),Be(this,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}),Be(this,"handleKeyDown",t=>{if(t.key==="Escape"){var r,n,i,s;this.setState({dismissed:!0,dismissedAtCoordinate:{x:(r=(n=this.props.coordinate)===null||n===void 0?void 0:n.x)!==null&&r!==void 0?r:0,y:(i=(s=this.props.coordinate)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0}})}})}componentDidMount(){document.addEventListener("keydown",this.handleKeyDown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}componentDidUpdate(){var t,r;this.state.dismissed&&(((t=this.props.coordinate)===null||t===void 0?void 0:t.x)!==this.state.dismissedAtCoordinate.x||((r=this.props.coordinate)===null||r===void 0?void 0:r.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}render(){var{active:t,allowEscapeViewBox:r,animationDuration:n,animationEasing:i,children:s,coordinate:o,hasPayload:f,isAnimationActive:p,offset:v,position:a,reverseDirection:c,useTranslate3d:y,viewBox:u,wrapperStyle:m,lastBoundingBox:b,innerRef:l,hasPortalFromProps:g}=this.props,{cssClasses:j,cssProperties:O}=Fn({allowEscapeViewBox:r,coordinate:o,offsetTopLeft:v,position:a,reverseDirection:c,tooltipBox:{height:b.height,width:b.width},useTranslate3d:y,viewBox:u}),x=g?{}:$($({transition:p&&t?"transform ".concat(n,"ms ").concat(i):void 0},O),{},{pointerEvents:"none",visibility:!this.state.dismissed&&t&&f?"visible":"hidden",position:"absolute",top:0,left:0}),w=$($({},x),{},{visibility:!this.state.dismissed&&t&&f?"visible":"hidden"},m);return h.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",tabIndex:-1,className:j,style:w,ref:l},s)}}var Yn=["x","y","top","left","width","height","className"];function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Re.apply(null,arguments)}function wt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function $n(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?wt(Object(r),!0).forEach(function(n){Xn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Xn(e,t,r){return(t=Vn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Vn(e){var t=Jn(e,"string");return typeof t=="symbol"?t:t+""}function Jn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Zn(e,t){if(e==null)return{};var r,n,i=Qn(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Qn(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var ea=(e,t,r,n,i,s)=>"M".concat(e,",").concat(i,"v").concat(n,"M").concat(s,",").concat(t,"h").concat(r),ta=e=>{var{x:t=0,y:r=0,top:n=0,left:i=0,width:s=0,height:o=0,className:f}=e,p=Zn(e,Yn),v=$n({x:t,y:r,top:n,left:i,width:s,height:o},p);return!P(t)||!P(r)||!P(s)||!P(o)||!P(n)||!P(i)?null:h.createElement("path",Re({},mr(v),{className:L("recharts-cross",f),d:ea(t,r,s,o,n,i)}))};function ra(e,t,r,n){var i=n/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-i:r.left+.5,y:e==="horizontal"?r.top+.5:t.y-i,width:e==="horizontal"?n:r.width-1,height:e==="horizontal"?r.height-1:n}}function Gt(e){var{cx:t,cy:r,radius:n,startAngle:i,endAngle:s}=e,o=J(t,r,n,i),f=J(t,r,n,s);return{points:[o,f],cx:t,cy:r,radius:n,startAngle:i,endAngle:s}}function na(e,t,r){var n,i,s,o;if(e==="horizontal")n=t.x,s=n,i=r.top,o=r.top+r.height;else if(e==="vertical")i=t.y,o=i,n=r.left,s=r.left+r.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var{cx:f,cy:p,innerRadius:v,outerRadius:a,angle:c}=t,y=J(f,p,v,c),u=J(f,p,a,c);n=y.x,i=y.y,s=u.x,o=u.y}else return Gt(t);return[{x:n,y:i},{x:s,y:o}]}function Ot(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function xt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ot(Object(r),!0).forEach(function(n){aa(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ot(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function aa(e,t,r){return(t=ia(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ia(e){var t=oa(e,"string");return typeof t=="symbol"?t:t+""}function oa(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var sa=()=>A(jr),ca=()=>{var e=sa(),t=A(vr),r=A(gr);return br(xt(xt({},e),{},{scale:r}),t)};function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ie.apply(null,arguments)}function Pt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Pt(Object(r),!0).forEach(function(n){la(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function la(e,t,r){return(t=ua(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ua(e){var t=da(e,"string");return typeof t=="symbol"?t:t+""}function da(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fa(e){var{coordinate:t,payload:r,index:n,offset:i,tooltipAxisBandSize:s,layout:o,cursor:f,tooltipEventType:p,chartName:v}=e,a=t,c=r,y=n;if(!f||!a||v!=="ScatterChart"&&p!=="axis")return null;var u,m;if(v==="ScatterChart")u=a,m=ta;else if(v==="BarChart")u=ra(o,a,i,s),m=Ar;else if(o==="radial"){var{cx:b,cy:l,radius:g,startAngle:j,endAngle:O}=Gt(a);u={cx:b,cy:l,startAngle:j,endAngle:O,innerRadius:g,outerRadius:g},m=Sr}else u={points:na(o,a,i)},m=Dr;var x=typeof f=="object"&&"className"in f?f.className:void 0,w=X(X(X(X({stroke:"#ccc",pointerEvents:"none"},i),u),Pr(f)),{},{payload:c,payloadIndex:y,className:L("recharts-tooltip-cursor",x)});return h.isValidElement(f)?h.cloneElement(f,w):h.createElement(m,w)}function pa(e){var t=ca(),r=wr(),n=Or(),i=xr();return h.createElement(fa,Ie({},e,{coordinate:e.coordinate,index:e.index,payload:e.payload,offset:r,layout:n,tooltipAxisBandSize:t,chartName:i}))}function At(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function St(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?At(Object(r),!0).forEach(function(n){ya(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):At(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ya(e,t,r){return(t=ha(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ha(e){var t=ma(e,"string");return typeof t=="symbol"?t:t+""}function ma(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function va(e){return e.dataKey}function ga(e,t){return h.isValidElement(e)?h.cloneElement(e,t):typeof e=="function"?h.createElement(e,t):h.createElement(Nn,t)}var Dt=[],ba={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",axisId:0,contentStyle:{},cursor:!0,filterNull:!0,isAnimationActive:!Cr.isSsr,itemSorter:"name",itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,wrapperStyle:{}};function Ke(e){var t=Mt(e,ba),{active:r,allowEscapeViewBox:n,animationDuration:i,animationEasing:s,content:o,filterNull:f,isAnimationActive:p,offset:v,payloadUniqBy:a,position:c,reverseDirection:y,useTranslate3d:u,wrapperStyle:m,cursor:b,shared:l,trigger:g,defaultIndex:j,portal:O,axisId:x}=t,w=F(),S=typeof j=="number"?String(j):j;h.useEffect(()=>{w(Er({shared:l,trigger:g,axisId:x,active:r,defaultIndex:S}))},[w,l,g,x,r,S]);var B=Tr(),q=Br(),D=Rr(l),{activeIndex:_,isActive:z}=A(R=>Ir(R,D,g,S)),K=A(R=>Mr(R,D,g,S)),k=A(R=>_r(R,D,g,S)),I=A(R=>Lr(R,D,g,S)),M=K,Ut=qr(),C=r??z,[Yt,$t]=zt([M,C]),We=D==="axis"?k:void 0;kr(D,g,I,We,_,C);var He=O??Ut;if(He==null)return null;var W=M??Dt;C||(W=Dt),f&&W.length&&(W=Ft(M.filter(R=>R.value!=null&&(R.hide!==!0||t.includeHidden)),a,va));var Xt=W.length>0,Vt=h.createElement(Un,{allowEscapeViewBox:n,animationDuration:i,animationEasing:s,isAnimationActive:p,active:C,coordinate:I,hasPayload:Xt,offset:v,position:c,reverseDirection:y,useTranslate3d:u,viewBox:B,wrapperStyle:m,lastBoundingBox:Yt,innerRef:$t,hasPortalFromProps:!!O},ga(o,St(St({},t),{},{payload:W,label:We,active:C,coordinate:I,accessibilityLayer:q})));return h.createElement(h.Fragment,null,qt.createPortal(Vt,He),C&&h.createElement(pa,{cursor:b,tooltipEventType:D,coordinate:I,payload:M,index:_}))}var ja=["dangerouslySetInnerHTML","ticks"],wa=["id"],Oa=["domain"],xa=["domain"];function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Me.apply(null,arguments)}function Z(e,t){if(e==null)return{};var r,n,i=Pa(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Pa(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Aa(e){var t=F();return h.useLayoutEffect(()=>(t(Nr(e)),()=>{t(Kr(e))}),[e,t]),null}var Sa=e=>{var{yAxisId:t,className:r,width:n,label:i}=e,s=h.useRef(null),o=h.useRef(null),f=A(Wr),p=Hr(),v=F(),a="yAxis",c=A(w=>Fr(w,a,t,p)),y=A(w=>zr(w,t)),u=A(w=>Gr(w,t)),m=A(w=>Ur(w,a,t,p)),b=A(w=>Yr(w,t));if(h.useLayoutEffect(()=>{if(!(n!=="auto"||!y||$r(i)||h.isValidElement(i)||b==null)){var w=s.current;if(w){var S=w.getCalculatedWidth();Math.round(y.width)!==Math.round(S)&&v(Xr({id:t,width:S}))}}},[m,y,v,i,t,n,b]),y==null||u==null||b==null)return null;var{dangerouslySetInnerHTML:l,ticks:g}=e,j=Z(e,ja),{id:O}=b,x=Z(b,wa);return h.createElement(Vr,Me({},j,x,{ref:s,labelRef:o,scale:c,x:u.x,y:u.y,tickTextProps:n==="auto"?{width:void 0}:{width:n},width:y.width,height:y.height,className:L("recharts-".concat(a," ").concat(a),r),viewBox:f,ticks:m}))},Da={allowDataOverflow:T.allowDataOverflow,allowDecimals:T.allowDecimals,allowDuplicatedCategory:T.allowDuplicatedCategory,hide:!1,mirror:T.mirror,orientation:T.orientation,padding:T.padding,reversed:T.reversed,scale:T.scale,tickCount:T.tickCount,type:T.type,width:T.width,yAxisId:0},Ea=e=>{var t,r,n,i,s,o=Mt(e,Da);return h.createElement(h.Fragment,null,h.createElement(Aa,{interval:(t=o.interval)!==null&&t!==void 0?t:"preserveEnd",id:o.yAxisId,scale:o.scale,type:o.type,domain:o.domain,allowDataOverflow:o.allowDataOverflow,dataKey:o.dataKey,allowDuplicatedCategory:o.allowDuplicatedCategory,allowDecimals:o.allowDecimals,tickCount:o.tickCount,padding:o.padding,includeHidden:(r=o.includeHidden)!==null&&r!==void 0?r:!1,reversed:o.reversed,ticks:o.ticks,width:o.width,orientation:o.orientation,mirror:o.mirror,hide:o.hide,unit:o.unit,name:o.name,angle:(n=o.angle)!==null&&n!==void 0?n:0,minTickGap:(i=o.minTickGap)!==null&&i!==void 0?i:5,tick:(s=o.tick)!==null&&s!==void 0?s:!0,tickFormatter:o.tickFormatter}),h.createElement(Sa,o))},Ta=(e,t)=>{var{domain:r}=e,n=Z(e,Oa),{domain:i}=t,s=Z(t,xa);return ze(n,s)?Array.isArray(r)&&r.length===2&&Array.isArray(i)&&i.length===2?r[0]===i[0]&&r[1]===i[1]:ze({domain:r},{domain:i}):!1},te=h.memo(Ea,Ta);te.displayName="YAxis";const Ba=[{date:"Mar 23",conservative:100,tech:100},{date:"Apr 23",conservative:101,tech:115},{date:"May 23",conservative:101,tech:130},{date:"Jun 23",conservative:102,tech:125},{date:"Jul 23",conservative:102,tech:140},{date:"Aug 23",conservative:102,tech:135},{date:"Sep 23",conservative:103,tech:150},{date:"Oct 23",conservative:103,tech:145},{date:"Nov 23",conservative:103,tech:155},{date:"Dec 23",conservative:104,tech:160},{date:"Jan 24",conservative:104,tech:165},{date:"Feb 24",conservative:104,tech:170},{date:"Mar 24",conservative:105,tech:180}];function Ra(){return d.jsx(Q,{width:"100%",height:"100%",children:d.jsxs(Jr,{data:Ba,children:[d.jsx(Le,{strokeDasharray:"4 ",vertical:!1}),d.jsx(qe,{dataKey:"date"}),d.jsx(te,{domain:[100,"dataMax + 20"]}),d.jsx(Ke,{}),d.jsx(ee,{}),d.jsx(Ge,{type:"monotone",dataKey:"conservative",stroke:"var(--bs-primary)",activeDot:{r:8,stroke:"var(--bs-primary-100)",strokeWidth:2},dot:!1,name:"Conservative Differentiated Oct24"}),d.jsx(Ge,{type:"monotone",dataKey:"tech",stroke:"var(--bs-secondary)",activeDot:{r:8,stroke:"var(--bs-secondary-100)",strokeWidth:2},dot:!1,name:"Technological"})]})})}const Et=["var(--bs-primary)","var(--bs-primary-300)","var(--bs-primary-100)","var(--bs-primary-600)"],_e=[{id:1,name:"Group A",value:6500},{id:2,name:"Group B",value:1200},{id:3,name:"Group C",value:10200},{id:4,name:"Group D",value:2100}],Ia=_e.reduce((e,t)=>e+t.value,0),Ma=({cx:e,cy:t})=>d.jsx("text",{x:e,y:t,fill:"var(--bs-gray-900)",textAnchor:"middle",dominantBaseline:"central",className:"fs-3",children:`$${Ia.toLocaleString()}`});function _a(){return d.jsx(Q,{width:"100%",height:"100%",children:d.jsx(Zr,{children:d.jsx(Qr,{data:_e,cx:"50%",cy:"50%",innerRadius:76,dataKey:"value",label:Ma,labelLine:!1,children:_e.map((e,t)=>d.jsx(_t,{fill:Et[t%Et.length]},e.id))})})})}const La=[{name:"Jan 23",value:5e4},{name:"Mar 23",value:75e3},{name:"May 23",value:1e5},{name:"Jul 23",value:8e4},{name:"Sep 23",value:7e4},{name:"Nov 23",value:6e4}];function qa(){return d.jsx(Q,{width:"100%",height:"100%",children:d.jsxs(Lt,{data:La,barCategoryGap:"25%",children:[d.jsx(Le,{strokeDasharray:"4 ",vertical:!1}),d.jsx(qe,{dataKey:"name"}),d.jsx(te,{domain:[0,"dataMax + 10000"],tickFormatter:e=>`$${(e/1e3).toFixed(0)}K`}),d.jsx(Ke,{formatter:e=>`$${e.toLocaleString()}`,cursor:{fill:"var(--bs-secondary-100)"}}),d.jsx(Se,{dataKey:"value",fill:"var(--bs-secondary)"})]})})}const Tt=[{id:1,name:"Item A",value:22500,down:0,color:"var(--bs-blue)"},{id:2,name:"Item B",value:1e3,down:21500,color:"var(--bs-orange)"},{id:3,name:"Item C",value:2e3,down:19500,color:"var(--bs-orange)"},{id:4,name:"Item D",value:3e3,down:16500,color:"var(--bs-orange)"},{id:5,name:"Item E",value:16500,down:0,color:"var(--bs-green)"},{id:6,name:"Item F",value:1e3,down:16500,color:"var(--bs-blue)"},{id:7,name:"Item G",value:8e3,down:16500,color:"var(--bs-blue)"},{id:8,name:"Item H",value:24500,down:0,color:"var(--bs-green)"}];function ka(){return d.jsx(Q,{width:"100%",height:"100%",children:d.jsxs(Lt,{data:Tt,children:[d.jsx(Le,{strokeDasharray:"4 ",vertical:!1}),d.jsx(qe,{dataKey:"name"}),d.jsx(te,{domain:[0,"dataMax + 10000"]}),d.jsx(Ke,{formatter:e=>`$${e.toLocaleString()}`,cursor:{fill:"var(--bs-gray-100)"}}),d.jsx(Se,{dataKey:"down",stackId:"a",fill:"transparent"}),d.jsx(Se,{dataKey:"value",stackId:"a",children:Tt.map(e=>d.jsx(_t,{fill:e.color},e.id))})]})})}function Bt(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...Rt(),...e.components};return d.jsxs(d.Fragment,{children:[d.jsx(Jt,{title:"Design System/Examples/Graphs"}),`
`,d.jsx(t.h1,{id:"recharts-the-choice-for-graphs",children:"Recharts: The Choice for Graphs"}),`
`,d.jsx(t.p,{children:"In our project, we've opted to utilize Recharts as our primary graphing library. Here's why:"}),`
`,d.jsx(t.h2,{id:"why-recharts",children:"Why Recharts?"}),`
`,d.jsx(t.p,{children:"Recharts is a highly versatile and feature-rich library designed specifically for building charts in React applications. Here are some key reasons why we chose Recharts:"}),`
`,d.jsxs(t.ul,{children:[`
`,d.jsxs(t.li,{children:[d.jsx(t.strong,{children:"Native React Components:"})," Recharts provides a set of native React components for building various types of charts, making it easy to integrate into our React-based project."]}),`
`,d.jsxs(t.li,{children:[d.jsx(t.strong,{children:"Rich Feature Set:"})," It offers a comprehensive set of chart types and customization options, allowing us to create visually appealing and interactive charts."]}),`
`,d.jsxs(t.li,{children:[d.jsx(t.strong,{children:"Responsive Design:"})," Recharts supports responsive design out of the box, ensuring that our charts look great and remain functional across different screen sizes and devices."]}),`
`,d.jsxs(t.li,{children:[d.jsx(t.strong,{children:"Active Community:"})," Recharts has a large and active community, which means that we can easily find support, resources, and community-contributed plugins and extensions."]}),`
`]}),`
`,d.jsx(t.h2,{id:"why-no-wrapper-component",children:"Why No Wrapper Component?"}),`
`,d.jsx(t.p,{children:"Unlike some other charting libraries, Recharts provides React components that can be directly imported and used in our application without the need for a wrapper component. Here's why we don't need to create a wrapper component for Recharts:"}),`
`,d.jsxs(t.ul,{children:[`
`,d.jsxs(t.li,{children:[d.jsx(t.strong,{children:"Direct Integration:"})," Recharts components can be directly imported and used like any other React component, simplifying the integration process and reducing unnecessary abstraction layers."]}),`
`,d.jsxs(t.li,{children:[d.jsx(t.strong,{children:"Customization:"})," Recharts components are highly customizable, allowing us to achieve the desired functionality and appearance without the need for additional wrapper components."]}),`
`,d.jsxs(t.li,{children:[d.jsx(t.strong,{children:"Performance:"})," By avoiding unnecessary wrapper components, we can improve the performance of our application by reducing the overhead associated with component nesting."]}),`
`]}),`
`,d.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,d.jsx(t.p,{children:"Let's dive into some examples of how we can use Recharts to create different types of charts:"}),`
`,d.jsx(t.h3,{id:"examplelinecharttsx",children:d.jsx(t.code,{children:"ExampleLineChart.tsx"})}),`
`,d.jsx(G,{children:d.jsx("div",{style:{height:"300px"},children:d.jsx(Ra,{})})}),`
`,d.jsx(U,{code:`
import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
ResponsiveContainer,
} from 'recharts';

const LINE_CHART_DATA = [
{ date: 'Mar 23', conservative: 100, tech: 100 },
{ date: 'Apr 23', conservative: 101, tech: 115 },
{ date: 'May 23', conservative: 101, tech: 130 },
{ date: 'Jun 23', conservative: 102, tech: 125 },
{ date: 'Jul 23', conservative: 102, tech: 140 },
{ date: 'Aug 23', conservative: 102, tech: 135 },
{ date: 'Sep 23', conservative: 103, tech: 150 },
{ date: 'Oct 23', conservative: 103, tech: 145 },
{ date: 'Nov 23', conservative: 103, tech: 155 },
{ date: 'Dec 23', conservative: 104, tech: 160 },
{ date: 'Jan 24', conservative: 104, tech: 165 },
{ date: 'Feb 24', conservative: 104, tech: 170 },
{ date: 'Mar 24', conservative: 105, tech: 180 },
];

export function ExampleLineChart() {
return (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={LINE_CHART_DATA}>
      <CartesianGrid strokeDasharray="4 " vertical={false} />
      <XAxis dataKey="date" />
      <YAxis domain={[100, 'dataMax + 20']} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="conservative"
        stroke="var(--bs-primary)"
        activeDot={{ r: 8, stroke: 'var(--bs-primary-100)', strokeWidth: 2 }}
        dot={false}
        name="Conservative Differentiated Oct24"
      />
      <Line
        type="monotone"
        dataKey="tech"
        stroke="var(--bs-secondary)"
        activeDot={{ r: 8, stroke: 'var(--bs-secondary-100)', strokeWidth: 2 }}
        dot={false}
        name="Technological"
      />
    </LineChart>
  </ResponsiveContainer>
);
}
  `,language:"tsx",dark:!0}),`
`,d.jsx(t.h3,{id:"examplepiecharttsx",children:d.jsx(t.code,{children:"ExamplePieChart.tsx"})}),`
`,d.jsx(G,{children:d.jsx("div",{style:{height:"300px"},children:d.jsx(_a,{})})}),`
`,d.jsx(U,{code:`
import {
ResponsiveContainer,
Pie,
PieChart,
Cell,
} from 'recharts';

import type { PieLabelRenderProps } from 'recharts';

const PIE_CHART_COLORS = [
'var(--bs-primary)',
'var(--bs-primary-300)',
'var(--bs-primary-100)',
'var(--bs-primary-600)',
];
const PIE_CHART_DATA = [
{ id: 1, name: 'Group A', value: 6500 },
{ id: 2, name: 'Group B', value: 1200 },
{ id: 3, name: 'Group C', value: 10200 },
{ id: 4, name: 'Group D', value: 2100 },
];

const total = PIE_CHART_DATA.reduce(
(value, item) => value + item.value,
0,
);

const renderCustomizedLabel = ({ cx, cy }: PieLabelRenderProps) => (
<text
  x={cx}
  y={cy}
  fill="var(--bs-gray-900)"
  textAnchor="middle"
  dominantBaseline="central"
  className="fs-3"
>
  {\`$\${total.toLocaleString()}\`}
</text>
);

export function ExamplePieChart() {
return (
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={PIE_CHART_DATA}
        cx="50%"
        cy="50%"
        innerRadius={76}
        dataKey="value"
        label={renderCustomizedLabel}
        labelLine={false}
      >
        {PIE_CHART_DATA.map((entry, index) => (
          <Cell key={entry.id} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);
}
  `,language:"tsx",dark:!0}),`
`,d.jsx(t.h3,{id:"bar-chart",children:"Bar Chart"}),`
`,d.jsx(G,{children:d.jsx("div",{style:{height:"300px"},children:d.jsx(qa,{})})}),`
`,d.jsx(U,{code:`
import {
XAxis,
YAxis,
CartesianGrid,
ResponsiveContainer,
Tooltip,
BarChart,
Bar,
} from 'recharts';

const BAR_CHART_DATA = [
{ name: 'Jan 23', value: 50000 },
{ name: 'Mar 23', value: 75000 },
{ name: 'May 23', value: 100000 },
{ name: 'Jul 23', value: 80000 },
{ name: 'Sep 23', value: 70000 },
{ name: 'Nov 23', value: 60000 },
];

export function ExampleBarChart() {
return (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={BAR_CHART_DATA} barCategoryGap="25%">
      <CartesianGrid strokeDasharray="4 " vertical={false} />
      <XAxis dataKey="name" />
      <YAxis
        domain={[0, 'dataMax + 10000']}
        tickFormatter={(value) => \`$\${(value / 1000).toFixed(0)}K\`}
      />
      <Tooltip
        formatter={(value: number) => \`$\${value.toLocaleString()}\`}
        cursor={{ fill: 'var(--bs-secondary-100)' }}
      />
      <Bar dataKey="value" fill="var(--bs-secondary)" />
    </BarChart>
  </ResponsiveContainer>
);
}
  `,language:"tsx",dark:!0}),`
`,d.jsx(t.h3,{id:"progressive-column-bar-chart",children:"Progressive Column Bar Chart"}),`
`,d.jsx(t.p,{children:`Progressive column charts, also knows as waterfall charts, are like stacked charts with each segment of
a single stack displaced vertically from the next segment.`}),`
`,d.jsx(t.p,{children:"Progressive column charts are useful for emphasizing the contribution of the individual segments to the whole."}),`
`,d.jsx(G,{children:d.jsx("div",{style:{height:"300px"},children:d.jsx(ka,{})})}),`
`,d.jsx(U,{code:`
import {
Bar,
BarChart,
CartesianGrid,
Cell,
ResponsiveContainer,
XAxis,
YAxis,
Tooltip,
} from 'recharts';

const PROGRESSIVE_BAR_CHART_DATA = [
{
  id: 1,
  name: 'Item A',
  value: 22500,
  down: 0,
  color: 'var(--bs-blue)',
},
{
  id: 2,
  name: 'Item B',
  value: 1000,
  down: 21500,
  color: 'var(--bs-orange)',
},
{
  id: 3,
  name: 'Item C',
  value: 2000,
  down: 19500,
  color: 'var(--bs-orange)',
},
{
  id: 4,
  name: 'Item D',
  value: 3000,
  down: 16500,
  color: 'var(--bs-orange)',
},
{
  id: 5,
  name: 'Item E',
  value: 16500,
  down: 0,
  color: 'var(--bs-green)',
},
{
  id: 6,
  name: 'Item F',
  value: 1000,
  down: 16500,
  color: 'var(--bs-blue)',
},
{
  id: 7,
  name: 'Item G',
  value: 8000,
  down: 16500,
  color: 'var(--bs-blue)',
},
{
  id: 8,
  name: 'Item H',
  value: 24500,
  down: 0,
  color: 'var(--bs-green)',
},
];

export function ExampleProgressiveBarChart() {
return (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={PROGRESSIVE_BAR_CHART_DATA}
    >
      <CartesianGrid strokeDasharray="4 " vertical={false} />
      <XAxis dataKey="name" />
      <YAxis
        domain={[0, 'dataMax + 10000']}
      />
      <Tooltip
        formatter={(value: number) => \`$\${value.toLocaleString()}\`}
        cursor={{ fill: 'var(--bs-gray-100)' }}
      />
      <Bar dataKey="down" stackId="a" fill="transparent" />
      <Bar dataKey="value" stackId="a">
        {PROGRESSIVE_BAR_CHART_DATA.map((entry) => (
          <Cell key={entry.id} fill={entry.color} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);
}
`,language:"tsx",dark:!0})]})}function Ua(e={}){const{wrapper:t}={...Rt(),...e.components};return t?d.jsx(t,{...e,children:d.jsx(Bt,{...e})}):Bt(e)}export{Ua as default};
