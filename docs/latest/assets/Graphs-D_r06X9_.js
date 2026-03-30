import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as _t}from"./index-_bUkNsaJ.js";import{M as Qt,U as G,c as U}from"./blocks-D22j9NYG.js";import{az as er,C as tr,aA as rr,aB as nr,aC as qt,aD as ar,aE as ir,aF as or,aG as sr,aH as cr,aI as lr,r as A,aJ as ur,aK as P,aL as dr,aM as fr,aN as yr,aO as pr,u as F,aP as hr,aQ as Ge,Y as mr,aR as vr,aS as X,s as gr,z as J,aT as br,aU as jr,K as wr,Z as Or,aV as xr,aW as Pr,aX as Ar,A as Sr,aY as Dr,aZ as Er,a_ as Tr,an as Lt,a$ as Br,b0 as Rr,b1 as Ir,b2 as Mr,b3 as _r,b4 as qr,b5 as Lr,b6 as kr,b7 as Cr,b8 as Nr,al as Kr,b9 as T,ba as Ue,bb as Wr,bc as Hr,bd as Fr,x as zr,be as Gr,bf as Ur,bg as Yr,bh as $r,bi as Vr,bj as Xr,bk as Jr,bl as Zr,aq as Q,ar as Qr,at as Le,ax as ke,as as Ye,au as en,av as tn,a7 as kt,aw as Ct,ay as De}from"./PieChart-BlcBpOdo.js";import{r as h,g as rn}from"./iframe-um1WsC0C.js";import{c as q}from"./clsx-B-dksMZM.js";import{r as Nt}from"./index-BitFkd-h.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGEaalem.js";function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ee.apply(null,arguments)}function $e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function nn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?$e(Object(r),!0).forEach(function(n){Ce(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$e(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ce(e,t,r){return(t=an(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function an(e){var t=on(e,"string");return typeof t=="symbol"?t:t+""}function on(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var E=32;class Ne extends h.PureComponent{renderIcon(t,r){var{inactiveColor:n}=this.props,i=E/2,o=E/6,s=E/3,f=t.inactive?n:t.color,p=r??t.type;if(p==="none")return null;if(p==="plainline")return h.createElement("line",{strokeWidth:4,fill:"none",stroke:f,strokeDasharray:t.payload.strokeDasharray,x1:0,y1:i,x2:E,y2:i,className:"recharts-legend-icon"});if(p==="line")return h.createElement("path",{strokeWidth:4,fill:"none",stroke:f,d:"M0,".concat(i,"h").concat(s,`
            A`).concat(o,",").concat(o,",0,1,1,").concat(2*s,",").concat(i,`
            H`).concat(E,"M").concat(2*s,",").concat(i,`
            A`).concat(o,",").concat(o,",0,1,1,").concat(s,",").concat(i),className:"recharts-legend-icon"});if(p==="rect")return h.createElement("path",{stroke:"none",fill:f,d:"M0,".concat(E/8,"h").concat(E,"v").concat(E*3/4,"h").concat(-E,"z"),className:"recharts-legend-icon"});if(h.isValidElement(t.legendIcon)){var m=nn({},t);return delete m.legendIcon,h.cloneElement(t.legendIcon,m)}return h.createElement(er,{fill:f,cx:i,cy:i,size:E,sizeType:"diameter",type:p})}renderItems(){var{payload:t,iconSize:r,layout:n,formatter:i,inactiveColor:o,iconType:s}=this.props,f={x:0,y:0,width:E,height:E},p={display:n==="horizontal"?"inline-block":"block",marginRight:10},m={display:"inline-block",verticalAlign:"middle",marginRight:4};return t.map((a,l)=>{var y=a.formatter||i,u=q({"recharts-legend-item":!0,["legend-item-".concat(l)]:!0,inactive:a.inactive});if(a.type==="none")return null;var v=a.inactive?o:a.color,b=y?y(a.value,a,l):a.value;return h.createElement("li",Ee({className:u,style:p,key:"legend-item-".concat(l)},tr(this.props,a,l)),h.createElement(rr,{width:r,height:r,viewBox:f,style:m,"aria-label":"".concat(b," legend icon")},this.renderIcon(a,s)),h.createElement("span",{className:"recharts-legend-item-text",style:{color:v}},b))})}render(){var{payload:t,layout:r,align:n}=this.props;if(!t||!t.length)return null;var i={padding:0,margin:0,textAlign:r==="horizontal"?n:"left"};return h.createElement("ul",{className:"recharts-default-legend",style:i},this.renderItems())}}Ce(Ne,"displayName","Legend");Ce(Ne,"defaultProps",{align:"center",iconSize:14,inactiveColor:"#ccc",layout:"horizontal",verticalAlign:"middle"});var re={},ne={},Ve;function sn(){return Ve||(Ve=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n){const i=new Map;for(let o=0;o<r.length;o++){const s=r[o],f=n(s,o,r);i.has(f)||i.set(f,s)}return Array.from(i.values())}e.uniqBy=t})(ne)),ne}var ae={},Xe;function cn(){return Xe||(Xe=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n){return function(...i){return r.apply(this,i.slice(0,n))}}e.ary=t})(ae)),ae}var ie={},Je;function Kt(){return Je||(Je=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r}e.identity=t})(ie)),ie}var oe={},se={},Ze;function ln(){return Ze||(Ze=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="object"&&r!==null}e.isObjectLike=t})(se)),se}var Qe;function un(){return Qe||(Qe=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=nr(),r=ln();function n(i){return r.isObjectLike(i)&&t.isArrayLike(i)}e.isArrayLikeObject=n})(oe)),oe}var ce={},le={},et;function dn(){return et||(et=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=qt();function r(n){return function(i){return t.get(i,n)}}e.property=r})(le)),le}var ue={},de={},fe={},ye={},tt;function Wt(){return tt||(tt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==null||typeof r!="object"&&typeof r!="function"}e.isPrimitive=t})(ye)),ye}var rt;function fn(){return rt||(rt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=ar(),r=Wt(),n=ir();function i(a,l,y){return typeof y!="function"?i(a,l,()=>{}):o(a,l,function u(v,b,c,g,j,O){const x=y(v,b,c,g,j,O);return x!==void 0?!!x:o(v,b,u,O)},new Map)}function o(a,l,y,u){if(l===a)return!0;switch(typeof l){case"object":return s(a,l,y,u);case"function":return Object.keys(l).length>0?o(a,{...l},y,u):n.isEqualsSameValueZero(a,l);default:return t.isObject(a)?typeof l=="string"?l==="":!0:n.isEqualsSameValueZero(a,l)}}function s(a,l,y,u){if(l==null)return!0;if(Array.isArray(l))return p(a,l,y,u);if(l instanceof Map)return f(a,l,y,u);if(l instanceof Set)return m(a,l,y,u);const v=Object.keys(l);if(a==null||r.isPrimitive(a))return v.length===0;if(v.length===0)return!0;if(u!=null&&u.has(l))return u.get(l)===a;u==null||u.set(l,a);try{for(let b=0;b<v.length;b++){const c=v[b];if(!r.isPrimitive(a)&&!(c in a)||l[c]===void 0&&a[c]!==void 0||l[c]===null&&a[c]!==null||!y(a[c],l[c],c,a,l,u))return!1}return!0}finally{u==null||u.delete(l)}}function f(a,l,y,u){if(l.size===0)return!0;if(!(a instanceof Map))return!1;for(const[v,b]of l.entries()){const c=a.get(v);if(y(c,b,v,a,l,u)===!1)return!1}return!0}function p(a,l,y,u){if(l.length===0)return!0;if(!Array.isArray(a))return!1;const v=new Set;for(let b=0;b<l.length;b++){const c=l[b];let g=!1;for(let j=0;j<a.length;j++){if(v.has(j))continue;const O=a[j];let x=!1;if(y(O,c,b,a,l,u)&&(x=!0),x){v.add(j),g=!0;break}}if(!g)return!1}return!0}function m(a,l,y,u){return l.size===0?!0:a instanceof Set?p([...a],[...l],y,u):!1}e.isMatchWith=i,e.isSetMatch=m})(fe)),fe}var nt;function Ht(){return nt||(nt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=fn();function r(n,i){return t.isMatchWith(n,i,()=>{})}e.isMatch=r})(de)),de}var pe={},he={},me={},at;function yn(){return at||(at=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return Object.getOwnPropertySymbols(r).filter(n=>Object.prototype.propertyIsEnumerable.call(r,n))}e.getSymbols=t})(me)),me}var ve={},it;function Ke(){return it||(it=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(r)}e.getTag=t})(ve)),ve}var ge={},ot;function Ft(){return ot||(ot=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t="[object RegExp]",r="[object String]",n="[object Number]",i="[object Boolean]",o="[object Arguments]",s="[object Symbol]",f="[object Date]",p="[object Map]",m="[object Set]",a="[object Array]",l="[object Function]",y="[object ArrayBuffer]",u="[object Object]",v="[object Error]",b="[object DataView]",c="[object Uint8Array]",g="[object Uint8ClampedArray]",j="[object Uint16Array]",O="[object Uint32Array]",x="[object BigUint64Array]",w="[object Int8Array]",S="[object Int16Array]",B="[object Int32Array]",L="[object BigInt64Array]",D="[object Float32Array]",_="[object Float64Array]";e.argumentsTag=o,e.arrayBufferTag=y,e.arrayTag=a,e.bigInt64ArrayTag=L,e.bigUint64ArrayTag=x,e.booleanTag=i,e.dataViewTag=b,e.dateTag=f,e.errorTag=v,e.float32ArrayTag=D,e.float64ArrayTag=_,e.functionTag=l,e.int16ArrayTag=S,e.int32ArrayTag=B,e.int8ArrayTag=w,e.mapTag=p,e.numberTag=n,e.objectTag=u,e.regexpTag=t,e.setTag=m,e.stringTag=r,e.symbolTag=s,e.uint16ArrayTag=j,e.uint32ArrayTag=O,e.uint8ArrayTag=c,e.uint8ClampedArrayTag=g})(ge)),ge}var be={},st;function pn(){return st||(st=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}e.isTypedArray=t})(be)),be}var ct;function zt(){return ct||(ct=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=yn(),r=Ke(),n=Ft(),i=Wt(),o=pn();function s(a,l){return f(a,void 0,a,new Map,l)}function f(a,l,y,u=new Map,v=void 0){const b=v==null?void 0:v(a,l,y,u);if(b!==void 0)return b;if(i.isPrimitive(a))return a;if(u.has(a))return u.get(a);if(Array.isArray(a)){const c=new Array(a.length);u.set(a,c);for(let g=0;g<a.length;g++)c[g]=f(a[g],g,y,u,v);return Object.hasOwn(a,"index")&&(c.index=a.index),Object.hasOwn(a,"input")&&(c.input=a.input),c}if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp){const c=new RegExp(a.source,a.flags);return c.lastIndex=a.lastIndex,c}if(a instanceof Map){const c=new Map;u.set(a,c);for(const[g,j]of a)c.set(g,f(j,g,y,u,v));return c}if(a instanceof Set){const c=new Set;u.set(a,c);for(const g of a)c.add(f(g,void 0,y,u,v));return c}if(typeof Buffer<"u"&&Buffer.isBuffer(a))return a.subarray();if(o.isTypedArray(a)){const c=new(Object.getPrototypeOf(a)).constructor(a.length);u.set(a,c);for(let g=0;g<a.length;g++)c[g]=f(a[g],g,y,u,v);return c}if(a instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&a instanceof SharedArrayBuffer)return a.slice(0);if(a instanceof DataView){const c=new DataView(a.buffer.slice(0),a.byteOffset,a.byteLength);return u.set(a,c),p(c,a,y,u,v),c}if(typeof File<"u"&&a instanceof File){const c=new File([a],a.name,{type:a.type});return u.set(a,c),p(c,a,y,u,v),c}if(typeof Blob<"u"&&a instanceof Blob){const c=new Blob([a],{type:a.type});return u.set(a,c),p(c,a,y,u,v),c}if(a instanceof Error){const c=structuredClone(a);return u.set(a,c),c.message=a.message,c.name=a.name,c.stack=a.stack,c.cause=a.cause,c.constructor=a.constructor,p(c,a,y,u,v),c}if(a instanceof Boolean){const c=new Boolean(a.valueOf());return u.set(a,c),p(c,a,y,u,v),c}if(a instanceof Number){const c=new Number(a.valueOf());return u.set(a,c),p(c,a,y,u,v),c}if(a instanceof String){const c=new String(a.valueOf());return u.set(a,c),p(c,a,y,u,v),c}if(typeof a=="object"&&m(a)){const c=Object.create(Object.getPrototypeOf(a));return u.set(a,c),p(c,a,y,u,v),c}return a}function p(a,l,y=a,u,v){const b=[...Object.keys(l),...t.getSymbols(l)];for(let c=0;c<b.length;c++){const g=b[c],j=Object.getOwnPropertyDescriptor(a,g);(j==null||j.writable)&&(a[g]=f(l[g],g,y,u,v))}}function m(a){switch(r.getTag(a)){case n.argumentsTag:case n.arrayTag:case n.arrayBufferTag:case n.dataViewTag:case n.booleanTag:case n.dateTag:case n.float32ArrayTag:case n.float64ArrayTag:case n.int8ArrayTag:case n.int16ArrayTag:case n.int32ArrayTag:case n.mapTag:case n.numberTag:case n.objectTag:case n.regexpTag:case n.setTag:case n.stringTag:case n.symbolTag:case n.uint8ArrayTag:case n.uint8ClampedArrayTag:case n.uint16ArrayTag:case n.uint32ArrayTag:return!0;default:return!1}}e.cloneDeepWith=s,e.cloneDeepWithImpl=f,e.copyProperties=p})(he)),he}var lt;function hn(){return lt||(lt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=zt();function r(n){return t.cloneDeepWithImpl(n,void 0,n,new Map,void 0)}e.cloneDeep=r})(pe)),pe}var ut;function mn(){return ut||(ut=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ht(),r=hn();function n(i){return i=r.cloneDeep(i),o=>t.isMatch(o,i)}e.matches=n})(ue)),ue}var je={},we={},Oe={},dt;function vn(){return dt||(dt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=zt(),r=Ke(),n=Ft();function i(o,s){return t.cloneDeepWith(o,(f,p,m,a)=>{const l=s==null?void 0:s(f,p,m,a);if(l!==void 0)return l;if(typeof o=="object"){if(r.getTag(o)===n.objectTag&&typeof o.constructor!="function"){const y={};return a.set(o,y),t.copyProperties(y,o,m,a),y}switch(Object.prototype.toString.call(o)){case n.numberTag:case n.stringTag:case n.booleanTag:{const y=new o.constructor(o==null?void 0:o.valueOf());return t.copyProperties(y,o),y}case n.argumentsTag:{const y={};return t.copyProperties(y,o),y.length=o.length,y[Symbol.iterator]=o[Symbol.iterator],y}default:return}}})}e.cloneDeepWith=i})(Oe)),Oe}var ft;function gn(){return ft||(ft=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=vn();function r(n){return t.cloneDeepWith(n)}e.cloneDeep=r})(we)),we}var xe={},Pe={},yt;function bn(){return yt||(yt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ke();function r(n){return n!==null&&typeof n=="object"&&t.getTag(n)==="[object Arguments]"}e.isArguments=r})(Pe)),Pe}var pt;function jn(){return pt||(pt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=or(),r=cr(),n=bn(),i=sr();function o(s,f){let p;if(Array.isArray(f)?p=f:typeof f=="string"&&t.isDeepKey(f)&&(s==null?void 0:s[f])==null?p=i.toPath(f):p=[f],p.length===0)return!1;let m=s;for(let a=0;a<p.length;a++){const l=p[a];if((m==null||!Object.hasOwn(m,l))&&!((Array.isArray(m)||n.isArguments(m))&&r.isIndex(l)&&l<m.length))return!1;m=m[l]}return!0}e.has=o})(xe)),xe}var ht;function wn(){return ht||(ht=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ht(),r=lr(),n=gn(),i=qt(),o=jn();function s(f,p){switch(typeof f){case"object":{Object.is(f==null?void 0:f.valueOf(),-0)&&(f="-0");break}case"number":{f=r.toKey(f);break}}return p=n.cloneDeep(p),function(m){const a=i.get(m,f);return a===void 0?o.has(m,f):p===void 0?a===void 0:t.isMatch(a,p)}}e.matchesProperty=s})(je)),je}var mt;function On(){return mt||(mt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Kt(),r=dn(),n=mn(),i=wn();function o(s){if(s==null)return t.identity;switch(typeof s){case"function":return s;case"object":return Array.isArray(s)&&s.length===2?i.matchesProperty(s[0],s[1]):n.matches(s);case"string":case"symbol":case"number":return r.property(s)}}e.iteratee=o})(ce)),ce}var vt;function xn(){return vt||(vt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=sn(),r=cn(),n=Kt(),i=un(),o=On();function s(f,p=n.identity){return i.isArrayLikeObject(f)?t.uniqBy(Array.from(f),r.ary(o.iteratee(p),1)):[]}e.uniqBy=s})(re)),re}var Ae,gt;function Pn(){return gt||(gt=1,Ae=xn().uniqBy),Ae}var An=Pn();const bt=rn(An);function Gt(e,t,r){return t===!0?bt(e,r):typeof t=="function"?bt(e,t):e}function Sn(){return A(ur)}var Y=1;function Ut(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],[t,r]=h.useState({height:0,left:0,top:0,width:0}),n=h.useCallback(i=>{if(i!=null){var o=i.getBoundingClientRect(),s={height:o.height,left:o.left,top:o.top,width:o.width};(Math.abs(s.height-t.height)>Y||Math.abs(s.left-t.left)>Y||Math.abs(s.top-t.top)>Y||Math.abs(s.width-t.width)>Y)&&r({height:s.height,left:s.left,top:s.top,width:s.width})}},[t.width,t.height,t.top,t.left,...e]);return[t,n]}var Dn=["contextPayload"];function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Te.apply(null,arguments)}function jt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?jt(Object(r),!0).forEach(function(n){We(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):jt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function We(e,t,r){return(t=En(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function En(e){var t=Tn(e,"string");return typeof t=="symbol"?t:t+""}function Tn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bn(e,t){if(e==null)return{};var r,n,i=Rn(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Rn(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function In(e){return e.value}function Mn(e){var{contextPayload:t}=e,r=Bn(e,Dn),n=Gt(t,e.payloadUniqBy,In),i=N(N({},r),{},{payload:n});return h.isValidElement(e.content)?h.cloneElement(e.content,i):typeof e.content=="function"?h.createElement(e.content,i):h.createElement(Ne,i)}function _n(e,t,r,n,i,o){var{layout:s,align:f,verticalAlign:p}=t,m,a;return(!e||(e.left===void 0||e.left===null)&&(e.right===void 0||e.right===null))&&(f==="center"&&s==="vertical"?m={left:((n||0)-o.width)/2}:m=f==="right"?{right:r&&r.right||0}:{left:r&&r.left||0}),(!e||(e.top===void 0||e.top===null)&&(e.bottom===void 0||e.bottom===null))&&(p==="middle"?a={top:((i||0)-o.height)/2}:a=p==="bottom"?{bottom:r&&r.bottom||0}:{top:r&&r.top||0}),N(N({},m),a)}function qn(e){var t=F();return h.useEffect(()=>{t(hr(e))},[t,e]),null}function Ln(e){var t=F();return h.useEffect(()=>(t(Ge(e)),()=>{t(Ge({width:0,height:0}))}),[t,e]),null}function kn(e){var t=Sn(),r=dr(),n=fr(),{width:i,height:o,wrapperStyle:s,portal:f}=e,[p,m]=Ut([t]),a=yr(),l=pr();if(a==null||l==null)return null;var y=a-(n.left||0)-(n.right||0),u=ee.getWidthOrHeight(e.layout,o,i,y),v=f?s:N(N({position:"absolute",width:(u==null?void 0:u.width)||i||"auto",height:(u==null?void 0:u.height)||o||"auto"},_n(s,e,n,a,l,p)),s),b=f??r;if(b==null)return null;var c=h.createElement("div",{className:"recharts-legend-wrapper",style:v,ref:m},h.createElement(qn,{layout:e.layout,align:e.align,verticalAlign:e.verticalAlign,itemSorter:e.itemSorter}),h.createElement(Ln,{width:p.width,height:p.height}),h.createElement(Mn,Te({},e,u,{margin:n,chartWidth:a,chartHeight:l,contextPayload:t})));return Nt.createPortal(c,b)}class ee extends h.PureComponent{static getWidthOrHeight(t,r,n,i){return t==="vertical"&&P(r)?{height:r}:t==="horizontal"?{width:n||i}:null}render(){return h.createElement(kn,this.props)}}We(ee,"displayName","Legend");We(ee,"defaultProps",{align:"center",iconSize:14,itemSorter:"value",layout:"horizontal",verticalAlign:"bottom"});function Be(){return Be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Be.apply(null,arguments)}function wt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Se(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?wt(Object(r),!0).forEach(function(n){Cn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Cn(e,t,r){return(t=Nn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Nn(e){var t=Kn(e,"string");return typeof t=="symbol"?t:t+""}function Kn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wn(e){return Array.isArray(e)&&X(e[0])&&X(e[1])?e.join(" ~ "):e}var Hn=e=>{var{separator:t=" : ",contentStyle:r={},itemStyle:n={},labelStyle:i={},payload:o,formatter:s,itemSorter:f,wrapperClassName:p,labelClassName:m,label:a,labelFormatter:l,accessibilityLayer:y=!1}=e,u=()=>{if(o&&o.length){var w={padding:0,margin:0},S=(f?vr(o,f):o).map((B,L)=>{if(B.type==="none")return null;var D=B.formatter||s||Wn,{value:_,name:z}=B,K=_,k=z;if(D){var I=D(_,z,B,L,o);if(Array.isArray(I))[K,k]=I;else if(I!=null)K=I;else return null}var M=Se({display:"block",paddingTop:4,paddingBottom:4,color:B.color||"#000"},n);return h.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(L),style:M},X(k)?h.createElement("span",{className:"recharts-tooltip-item-name"},k):null,X(k)?h.createElement("span",{className:"recharts-tooltip-item-separator"},t):null,h.createElement("span",{className:"recharts-tooltip-item-value"},K),h.createElement("span",{className:"recharts-tooltip-item-unit"},B.unit||""))});return h.createElement("ul",{className:"recharts-tooltip-item-list",style:w},S)}return null},v=Se({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},r),b=Se({margin:0},i),c=!mr(a),g=c?a:"",j=q("recharts-default-tooltip",p),O=q("recharts-tooltip-label",m);c&&l&&o!==void 0&&o!==null&&(g=l(a,o));var x=y?{role:"status","aria-live":"assertive"}:{};return h.createElement("div",Be({className:j,style:v},x),h.createElement("p",{className:O,style:b},h.isValidElement(g)?g:"".concat(g)),u())},H="recharts-tooltip-wrapper",Fn={visibility:"hidden"};function zn(e){var{coordinate:t,translateX:r,translateY:n}=e;return q(H,{["".concat(H,"-right")]:P(r)&&t&&P(t.x)&&r>=t.x,["".concat(H,"-left")]:P(r)&&t&&P(t.x)&&r<t.x,["".concat(H,"-bottom")]:P(n)&&t&&P(t.y)&&n>=t.y,["".concat(H,"-top")]:P(n)&&t&&P(t.y)&&n<t.y})}function Ot(e){var{allowEscapeViewBox:t,coordinate:r,key:n,offsetTopLeft:i,position:o,reverseDirection:s,tooltipDimension:f,viewBox:p,viewBoxDimension:m}=e;if(o&&P(o[n]))return o[n];var a=r[n]-f-(i>0?i:0),l=r[n]+i;if(t[n])return s[n]?a:l;var y=p[n];if(y==null)return 0;if(s[n]){var u=a,v=y;return u<v?Math.max(l,y):Math.max(a,y)}if(m==null)return 0;var b=l+f,c=y+m;return b>c?Math.max(a,y):Math.max(l,y)}function Gn(e){var{translateX:t,translateY:r,useTranslate3d:n}=e;return{transform:n?"translate3d(".concat(t,"px, ").concat(r,"px, 0)"):"translate(".concat(t,"px, ").concat(r,"px)")}}function Un(e){var{allowEscapeViewBox:t,coordinate:r,offsetTopLeft:n,position:i,reverseDirection:o,tooltipBox:s,useTranslate3d:f,viewBox:p}=e,m,a,l;return s.height>0&&s.width>0&&r?(a=Ot({allowEscapeViewBox:t,coordinate:r,key:"x",offsetTopLeft:n,position:i,reverseDirection:o,tooltipDimension:s.width,viewBox:p,viewBoxDimension:p.width}),l=Ot({allowEscapeViewBox:t,coordinate:r,key:"y",offsetTopLeft:n,position:i,reverseDirection:o,tooltipDimension:s.height,viewBox:p,viewBoxDimension:p.height}),m=Gn({translateX:a,translateY:l,useTranslate3d:f})):m=Fn,{cssProperties:m,cssClasses:zn({translateX:a,translateY:l,coordinate:r})}}function xt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?xt(Object(r),!0).forEach(function(n){Re(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Re(e,t,r){return(t=Yn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Yn(e){var t=$n(e,"string");return typeof t=="symbol"?t:t+""}function $n(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class Vn extends h.PureComponent{constructor(){super(...arguments),Re(this,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}),Re(this,"handleKeyDown",t=>{if(t.key==="Escape"){var r,n,i,o;this.setState({dismissed:!0,dismissedAtCoordinate:{x:(r=(n=this.props.coordinate)===null||n===void 0?void 0:n.x)!==null&&r!==void 0?r:0,y:(i=(o=this.props.coordinate)===null||o===void 0?void 0:o.y)!==null&&i!==void 0?i:0}})}})}componentDidMount(){document.addEventListener("keydown",this.handleKeyDown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}componentDidUpdate(){var t,r;this.state.dismissed&&(((t=this.props.coordinate)===null||t===void 0?void 0:t.x)!==this.state.dismissedAtCoordinate.x||((r=this.props.coordinate)===null||r===void 0?void 0:r.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}render(){var{active:t,allowEscapeViewBox:r,animationDuration:n,animationEasing:i,children:o,coordinate:s,hasPayload:f,isAnimationActive:p,offset:m,position:a,reverseDirection:l,useTranslate3d:y,viewBox:u,wrapperStyle:v,lastBoundingBox:b,innerRef:c,hasPortalFromProps:g}=this.props,{cssClasses:j,cssProperties:O}=Un({allowEscapeViewBox:r,coordinate:s,offsetTopLeft:m,position:a,reverseDirection:l,tooltipBox:{height:b.height,width:b.width},useTranslate3d:y,viewBox:u}),x=g?{}:$($({transition:p&&t?"transform ".concat(n,"ms ").concat(i):void 0},O),{},{pointerEvents:"none",visibility:!this.state.dismissed&&t&&f?"visible":"hidden",position:"absolute",top:0,left:0}),w=$($({},x),{},{visibility:!this.state.dismissed&&t&&f?"visible":"hidden"},v);return h.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",tabIndex:-1,className:j,style:w,ref:c},o)}}var Xn=["x","y","top","left","width","height","className"];function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ie.apply(null,arguments)}function Pt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Jn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Pt(Object(r),!0).forEach(function(n){Zn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Zn(e,t,r){return(t=Qn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Qn(e){var t=ea(e,"string");return typeof t=="symbol"?t:t+""}function ea(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ta(e,t){if(e==null)return{};var r,n,i=ra(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function ra(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var na=(e,t,r,n,i,o)=>"M".concat(e,",").concat(i,"v").concat(n,"M").concat(o,",").concat(t,"h").concat(r),aa=e=>{var{x:t=0,y:r=0,top:n=0,left:i=0,width:o=0,height:s=0,className:f}=e,p=ta(e,Xn),m=Jn({x:t,y:r,top:n,left:i,width:o,height:s},p);return!P(t)||!P(r)||!P(o)||!P(s)||!P(n)||!P(i)?null:h.createElement("path",Ie({},gr(m),{className:q("recharts-cross",f),d:na(t,r,o,s,n,i)}))};function ia(e,t,r,n){var i=n/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-i:r.left+.5,y:e==="horizontal"?r.top+.5:t.y-i,width:e==="horizontal"?n:r.width-1,height:e==="horizontal"?r.height-1:n}}function Yt(e){var{cx:t,cy:r,radius:n,startAngle:i,endAngle:o}=e,s=J(t,r,n,i),f=J(t,r,n,o);return{points:[s,f],cx:t,cy:r,radius:n,startAngle:i,endAngle:o}}function oa(e,t,r){var n,i,o,s;if(e==="horizontal")n=t.x,o=n,i=r.top,s=r.top+r.height;else if(e==="vertical")i=t.y,s=i,n=r.left,o=r.left+r.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var{cx:f,cy:p,innerRadius:m,outerRadius:a,angle:l}=t,y=J(f,p,m,l),u=J(f,p,a,l);n=y.x,i=y.y,o=u.x,s=u.y}else return Yt(t);return[{x:n,y:i},{x:o,y:s}]}function At(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function St(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?At(Object(r),!0).forEach(function(n){sa(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):At(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function sa(e,t,r){return(t=ca(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ca(e){var t=la(e,"string");return typeof t=="symbol"?t:t+""}function la(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ua=()=>A(Or),da=()=>{var e=ua(),t=A(br),r=A(jr);return wr(St(St({},e),{},{scale:r}),t)};function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Me.apply(null,arguments)}function Dt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Dt(Object(r),!0).forEach(function(n){fa(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Dt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function fa(e,t,r){return(t=ya(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ya(e){var t=pa(e,"string");return typeof t=="symbol"?t:t+""}function pa(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ha(e){var{coordinate:t,payload:r,index:n,offset:i,tooltipAxisBandSize:o,layout:s,cursor:f,tooltipEventType:p,chartName:m}=e,a=t,l=r,y=n;if(!f||!a||m!=="ScatterChart"&&p!=="axis")return null;var u,v;if(m==="ScatterChart")u=a,v=aa;else if(m==="BarChart")u=ia(s,a,i,o),v=Dr;else if(s==="radial"){var{cx:b,cy:c,radius:g,startAngle:j,endAngle:O}=Yt(a);u={cx:b,cy:c,startAngle:j,endAngle:O,innerRadius:g,outerRadius:g},v=Er}else u={points:oa(s,a,i)},v=Tr;var x=typeof f=="object"&&"className"in f?f.className:void 0,w=V(V(V(V({stroke:"#ccc",pointerEvents:"none"},i),u),Sr(f)),{},{payload:l,payloadIndex:y,className:q("recharts-tooltip-cursor",x)});return h.isValidElement(f)?h.cloneElement(f,w):h.createElement(v,w)}function ma(e){var t=da(),r=xr(),n=Pr(),i=Ar();return h.createElement(ha,Me({},e,{coordinate:e.coordinate,index:e.index,payload:e.payload,offset:r,layout:n,tooltipAxisBandSize:t,chartName:i}))}function Et(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Tt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Et(Object(r),!0).forEach(function(n){va(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Et(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function va(e,t,r){return(t=ga(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ga(e){var t=ba(e,"string");return typeof t=="symbol"?t:t+""}function ba(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ja(e){return e.dataKey}function wa(e,t){return h.isValidElement(e)?h.cloneElement(e,t):typeof e=="function"?h.createElement(e,t):h.createElement(Hn,t)}var Bt=[],Oa={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",axisId:0,contentStyle:{},cursor:!0,filterNull:!0,isAnimationActive:!Kr.isSsr,itemSorter:"name",itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,wrapperStyle:{}};function He(e){var t=Lt(e,Oa),{active:r,allowEscapeViewBox:n,animationDuration:i,animationEasing:o,content:s,filterNull:f,isAnimationActive:p,offset:m,payloadUniqBy:a,position:l,reverseDirection:y,useTranslate3d:u,wrapperStyle:v,cursor:b,shared:c,trigger:g,defaultIndex:j,portal:O,axisId:x}=t,w=F(),S=typeof j=="number"?String(j):j;h.useEffect(()=>{w(Br({shared:c,trigger:g,axisId:x,active:r,defaultIndex:S}))},[w,c,g,x,r,S]);var B=Rr(),L=Ir(),D=Mr(c),{activeIndex:_,isActive:z}=A(R=>_r(R,D,g,S)),K=A(R=>qr(R,D,g,S)),k=A(R=>Lr(R,D,g,S)),I=A(R=>kr(R,D,g,S)),M=K,$t=Cr(),C=r??z,[Vt,Xt]=Ut([M,C]),Fe=D==="axis"?k:void 0;Nr(D,g,I,Fe,_,C);var ze=O??$t;if(ze==null)return null;var W=M??Bt;C||(W=Bt),f&&W.length&&(W=Gt(M.filter(R=>R.value!=null&&(R.hide!==!0||t.includeHidden)),a,ja));var Jt=W.length>0,Zt=h.createElement(Vn,{allowEscapeViewBox:n,animationDuration:i,animationEasing:o,isAnimationActive:p,active:C,coordinate:I,hasPayload:Jt,offset:m,position:l,reverseDirection:y,useTranslate3d:u,viewBox:B,wrapperStyle:v,lastBoundingBox:Vt,innerRef:Xt,hasPortalFromProps:!!O},wa(s,Tt(Tt({},t),{},{payload:W,label:Fe,active:C,coordinate:I,accessibilityLayer:L})));return h.createElement(h.Fragment,null,Nt.createPortal(Zt,ze),C&&h.createElement(ma,{cursor:b,tooltipEventType:D,coordinate:I,payload:M,index:_}))}var xa=["dangerouslySetInnerHTML","ticks"],Pa=["id"],Aa=["domain"],Sa=["domain"];function _e(){return _e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_e.apply(null,arguments)}function Z(e,t){if(e==null)return{};var r,n,i=Da(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Da(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Ea(e){var t=F();return h.useLayoutEffect(()=>(t(Wr(e)),()=>{t(Hr(e))}),[e,t]),null}var Ta=e=>{var{yAxisId:t,className:r,width:n,label:i}=e,o=h.useRef(null),s=h.useRef(null),f=A(Fr),p=zr(),m=F(),a="yAxis",l=A(w=>Gr(w,a,t,p)),y=A(w=>Ur(w,t)),u=A(w=>Yr(w,t)),v=A(w=>$r(w,a,t,p)),b=A(w=>Vr(w,t));if(h.useLayoutEffect(()=>{if(!(n!=="auto"||!y||Xr(i)||h.isValidElement(i)||b==null)){var w=o.current;if(w){var S=w.getCalculatedWidth();Math.round(y.width)!==Math.round(S)&&m(Jr({id:t,width:S}))}}},[v,y,m,i,t,n,b]),y==null||u==null||b==null)return null;var{dangerouslySetInnerHTML:c,ticks:g}=e,j=Z(e,xa),{id:O}=b,x=Z(b,Pa);return h.createElement(Zr,_e({},j,x,{ref:o,labelRef:s,scale:l,x:u.x,y:u.y,tickTextProps:n==="auto"?{width:void 0}:{width:n},width:y.width,height:y.height,className:q("recharts-".concat(a," ").concat(a),r),viewBox:f,ticks:v}))},Ba={allowDataOverflow:T.allowDataOverflow,allowDecimals:T.allowDecimals,allowDuplicatedCategory:T.allowDuplicatedCategory,hide:!1,mirror:T.mirror,orientation:T.orientation,padding:T.padding,reversed:T.reversed,scale:T.scale,tickCount:T.tickCount,type:T.type,width:T.width,yAxisId:0},Ra=e=>{var t,r,n,i,o,s=Lt(e,Ba);return h.createElement(h.Fragment,null,h.createElement(Ea,{interval:(t=s.interval)!==null&&t!==void 0?t:"preserveEnd",id:s.yAxisId,scale:s.scale,type:s.type,domain:s.domain,allowDataOverflow:s.allowDataOverflow,dataKey:s.dataKey,allowDuplicatedCategory:s.allowDuplicatedCategory,allowDecimals:s.allowDecimals,tickCount:s.tickCount,padding:s.padding,includeHidden:(r=s.includeHidden)!==null&&r!==void 0?r:!1,reversed:s.reversed,ticks:s.ticks,width:s.width,orientation:s.orientation,mirror:s.mirror,hide:s.hide,unit:s.unit,name:s.name,angle:(n=s.angle)!==null&&n!==void 0?n:0,minTickGap:(i=s.minTickGap)!==null&&i!==void 0?i:5,tick:(o=s.tick)!==null&&o!==void 0?o:!0,tickFormatter:s.tickFormatter}),h.createElement(Ta,s))},Ia=(e,t)=>{var{domain:r}=e,n=Z(e,Aa),{domain:i}=t,o=Z(t,Sa);return Ue(n,o)?Array.isArray(r)&&r.length===2&&Array.isArray(i)&&i.length===2?r[0]===i[0]&&r[1]===i[1]:Ue({domain:r},{domain:i}):!1},te=h.memo(Ra,Ia);te.displayName="YAxis";const Ma=[{date:"Mar 23",conservative:100,tech:100},{date:"Apr 23",conservative:101,tech:115},{date:"May 23",conservative:101,tech:130},{date:"Jun 23",conservative:102,tech:125},{date:"Jul 23",conservative:102,tech:140},{date:"Aug 23",conservative:102,tech:135},{date:"Sep 23",conservative:103,tech:150},{date:"Oct 23",conservative:103,tech:145},{date:"Nov 23",conservative:103,tech:155},{date:"Dec 23",conservative:104,tech:160},{date:"Jan 24",conservative:104,tech:165},{date:"Feb 24",conservative:104,tech:170},{date:"Mar 24",conservative:105,tech:180}];function _a(){return d.jsx(Q,{width:"100%",height:"100%",children:d.jsxs(Qr,{data:Ma,children:[d.jsx(Le,{strokeDasharray:"4 ",vertical:!1}),d.jsx(ke,{dataKey:"date"}),d.jsx(te,{domain:[100,"dataMax + 20"]}),d.jsx(He,{}),d.jsx(ee,{}),d.jsx(Ye,{type:"monotone",dataKey:"conservative",stroke:"var(--bs-primary)",activeDot:{r:8,stroke:"var(--bs-primary-100)",strokeWidth:2},dot:!1,name:"Conservative Differentiated Oct24"}),d.jsx(Ye,{type:"monotone",dataKey:"tech",stroke:"var(--bs-secondary)",activeDot:{r:8,stroke:"var(--bs-secondary-100)",strokeWidth:2},dot:!1,name:"Technological"})]})})}const Rt=["var(--bs-primary)","var(--bs-primary-300)","var(--bs-primary-100)","var(--bs-primary-600)"],qe=[{id:1,name:"Group A",value:6500},{id:2,name:"Group B",value:1200},{id:3,name:"Group C",value:10200},{id:4,name:"Group D",value:2100}],qa=qe.reduce((e,t)=>e+t.value,0),La=({cx:e,cy:t})=>d.jsx("text",{x:e,y:t,fill:"var(--bs-gray-900)",textAnchor:"middle",dominantBaseline:"central",className:"fs-3",children:`$${qa.toLocaleString()}`});function ka(){return d.jsx(Q,{width:"100%",height:"100%",children:d.jsx(en,{children:d.jsx(tn,{data:qe,cx:"50%",cy:"50%",innerRadius:76,dataKey:"value",label:La,labelLine:!1,children:qe.map((e,t)=>d.jsx(kt,{fill:Rt[t%Rt.length]},e.id))})})})}const Ca=[{name:"Jan 23",value:5e4},{name:"Mar 23",value:75e3},{name:"May 23",value:1e5},{name:"Jul 23",value:8e4},{name:"Sep 23",value:7e4},{name:"Nov 23",value:6e4}];function Na(){return d.jsx(Q,{width:"100%",height:"100%",children:d.jsxs(Ct,{data:Ca,barCategoryGap:"25%",children:[d.jsx(Le,{strokeDasharray:"4 ",vertical:!1}),d.jsx(ke,{dataKey:"name"}),d.jsx(te,{domain:[0,"dataMax + 10000"],tickFormatter:e=>`$${(e/1e3).toFixed(0)}K`}),d.jsx(He,{formatter:e=>`$${e.toLocaleString()}`,cursor:{fill:"var(--bs-secondary-100)"}}),d.jsx(De,{dataKey:"value",fill:"var(--bs-secondary)"})]})})}const It=[{id:1,name:"Item A",value:22500,down:0,color:"var(--bs-blue)"},{id:2,name:"Item B",value:1e3,down:21500,color:"var(--bs-orange)"},{id:3,name:"Item C",value:2e3,down:19500,color:"var(--bs-orange)"},{id:4,name:"Item D",value:3e3,down:16500,color:"var(--bs-orange)"},{id:5,name:"Item E",value:16500,down:0,color:"var(--bs-green)"},{id:6,name:"Item F",value:1e3,down:16500,color:"var(--bs-blue)"},{id:7,name:"Item G",value:8e3,down:16500,color:"var(--bs-blue)"},{id:8,name:"Item H",value:24500,down:0,color:"var(--bs-green)"}];function Ka(){return d.jsx(Q,{width:"100%",height:"100%",children:d.jsxs(Ct,{data:It,children:[d.jsx(Le,{strokeDasharray:"4 ",vertical:!1}),d.jsx(ke,{dataKey:"name"}),d.jsx(te,{domain:[0,"dataMax + 10000"]}),d.jsx(He,{formatter:e=>`$${e.toLocaleString()}`,cursor:{fill:"var(--bs-gray-100)"}}),d.jsx(De,{dataKey:"down",stackId:"a",fill:"transparent"}),d.jsx(De,{dataKey:"value",stackId:"a",children:It.map(e=>d.jsx(kt,{fill:e.color},e.id))})]})})}function Mt(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",..._t(),...e.components};return d.jsxs(d.Fragment,{children:[d.jsx(Qt,{title:"Design System/Examples/Graphs"}),`
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
`,d.jsx(G,{children:d.jsx("div",{style:{height:"300px"},children:d.jsx(_a,{})})}),`
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
`,d.jsx(G,{children:d.jsx("div",{style:{height:"300px"},children:d.jsx(ka,{})})}),`
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
`,d.jsx(G,{children:d.jsx("div",{style:{height:"300px"},children:d.jsx(Na,{})})}),`
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
`,d.jsx(G,{children:d.jsx("div",{style:{height:"300px"},children:d.jsx(Ka,{})})}),`
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
`,language:"tsx",dark:!0})]})}function Xa(e={}){const{wrapper:t}={..._t(),...e.components};return t?d.jsx(t,{...e,children:d.jsx(Mt,{...e})}):Mt(e)}export{Xa as default};
