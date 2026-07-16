import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as Ye}from"./index-C6SlVEW6.js";import{M as ht,U,c as X}from"./blocks-CG5owoJr.js";import{az as mt,C as yt,aA as vt,aB as Ue,aC as gt,aD as ae,aE as bt,aF as xt,aG as wt,aH as jt,aI as Ot,r as j,aJ as Pt,aK as x,aL as At,aM as St,aN as Et,aO as Dt,u as W,aP as Bt,aQ as Se,Y as Rt,aR as _t,aS as Z,s as It,z as Q,aT as Lt,aU as Nt,K as Ct,Z as kt,aV as Mt,aW as $t,aX as Kt,A as zt,aY as Ht,aZ as Ft,a_ as Tt,an as Xe,a$ as Wt,b0 as Gt,b1 as Yt,b2 as Ut,b3 as Xt,b4 as qt,b5 as Jt,b6 as Vt,b7 as Zt,b8 as Qt,al as er,b9 as E,ba as Ee,bb as tr,bc as rr,bd as nr,x as ar,be as ir,bf as or,bg as sr,bh as cr,bi as lr,bj as ur,bk as dr,bl as fr,aq as te,ar as pr,at as ve,ax as ge,as as De,au as hr,av as mr,a7 as qe,aw as Je,ay as oe}from"./PieChart-C3je0z7j.js";import{r as l}from"./iframe-vLNjGVop.js";import{c as k}from"./clsx-B-dksMZM.js";import{r as Ve}from"./index-DFPG5GmN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPJnJB5S.js";import"./index-oOcxeWdd.js";function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},se.apply(null,arguments)}function Be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function yr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Be(Object(r),!0).forEach(function(n){be(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function be(e,t,r){return(t=vr(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function vr(e){var t=gr(e,"string");return typeof t=="symbol"?t:t+""}function gr(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var O=32;class xe extends l.PureComponent{renderIcon(t,r){var{inactiveColor:n}=this.props,i=O/2,o=O/6,a=O/3,c=t.inactive?n:t.color,d=r??t.type;if(d==="none")return null;if(d==="plainline")return l.createElement("line",{strokeWidth:4,fill:"none",stroke:c,strokeDasharray:t.payload.strokeDasharray,x1:0,y1:i,x2:O,y2:i,className:"recharts-legend-icon"});if(d==="line")return l.createElement("path",{strokeWidth:4,fill:"none",stroke:c,d:"M0,".concat(i,"h").concat(a,`
            A`).concat(o,",").concat(o,",0,1,1,").concat(2*a,",").concat(i,`
            H`).concat(O,"M").concat(2*a,",").concat(i,`
            A`).concat(o,",").concat(o,",0,1,1,").concat(a,",").concat(i),className:"recharts-legend-icon"});if(d==="rect")return l.createElement("path",{stroke:"none",fill:c,d:"M0,".concat(O/8,"h").concat(O,"v").concat(O*3/4,"h").concat(-O,"z"),className:"recharts-legend-icon"});if(l.isValidElement(t.legendIcon)){var f=yr({},t);return delete f.legendIcon,l.cloneElement(t.legendIcon,f)}return l.createElement(mt,{fill:c,cx:i,cy:i,size:O,sizeType:"diameter",type:d})}renderItems(){var{payload:t,iconSize:r,layout:n,formatter:i,inactiveColor:o,iconType:a}=this.props,c={x:0,y:0,width:O,height:O},d={display:n==="horizontal"?"inline-block":"block",marginRight:10},f={display:"inline-block",verticalAlign:"middle",marginRight:4};return t.map((u,p)=>{var h=u.formatter||i,m=k({"recharts-legend-item":!0,["legend-item-".concat(p)]:!0,inactive:u.inactive});if(u.type==="none")return null;var g=u.inactive?o:u.color,y=h?h(u.value,u,p):u.value;return l.createElement("li",se({className:m,style:d,key:"legend-item-".concat(p)},yt(this.props,u,p)),l.createElement(vt,{width:r,height:r,viewBox:c,style:f,"aria-label":"".concat(y," legend icon")},this.renderIcon(u,a)),l.createElement("span",{className:"recharts-legend-item-text",style:{color:g}},y))})}render(){var{payload:t,layout:r,align:n}=this.props;if(!t||!t.length)return null;var i={padding:0,margin:0,textAlign:r==="horizontal"?n:"left"};return l.createElement("ul",{className:"recharts-default-legend",style:i},this.renderItems())}}be(xe,"displayName","Legend");be(xe,"defaultProps",{align:"center",iconSize:14,inactiveColor:"#ccc",layout:"horizontal",verticalAlign:"middle"});function br(e,t){const r=new Map;for(let n=0;n<e.length;n++){const i=e[n],o=t(i,n,e);r.has(o)||r.set(o,i)}return Array.from(r.values())}function xr(e,t){return function(...r){return e.apply(this,r.slice(0,t))}}function Ze(e){return e}function wr(e){return function(t){return Ue(t,e)}}function ce(e){return e==null||typeof e!="object"&&typeof e!="function"}function jr(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Or(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}function we(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Pr="[object RegExp]",Qe="[object String]",et="[object Number]",tt="[object Boolean]",rt="[object Arguments]",Ar="[object Symbol]",Sr="[object Date]",Er="[object Map]",Dr="[object Set]",Br="[object Array]",Rr="[object ArrayBuffer]",_r="[object Object]",Ir="[object DataView]",Lr="[object Uint8Array]",Nr="[object Uint8ClampedArray]",Cr="[object Uint16Array]",kr="[object Uint32Array]",Mr="[object Int8Array]",$r="[object Int16Array]",Kr="[object Int32Array]",zr="[object Float32Array]",Hr="[object Float64Array]",Re=typeof globalThis=="object"&&globalThis||typeof window=="object"&&window||typeof self=="object"&&self||typeof global=="object"&&global||(function(){return this})();function Fr(e){return typeof Re.Buffer<"u"&&Re.Buffer.isBuffer(e)}function Tr(e,t){return C(e,void 0,e,new Map,t)}function C(e,t,r,n=new Map,i=void 0){const o=i==null?void 0:i(e,t,r,n);if(o!==void 0)return o;if(ce(e))return e;if(n.has(e))return n.get(e);if(Array.isArray(e)){const a=new Array(e.length);n.set(e,a);for(let c=0;c<e.length;c++)a[c]=C(e[c],c,r,n,i);return Object.hasOwn(e,"index")&&(a.index=e.index),Object.hasOwn(e,"input")&&(a.input=e.input),a}if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp){const a=new RegExp(e.source,e.flags);return a.lastIndex=e.lastIndex,a}if(e instanceof Map){const a=new Map;n.set(e,a);for(const[c,d]of e)a.set(c,C(d,c,r,n,i));return a}if(e instanceof Set){const a=new Set;n.set(e,a);for(const c of e)a.add(C(c,void 0,r,n,i));return a}if(Fr(e))return e.subarray();if(jr(e)){const a=new(Object.getPrototypeOf(e)).constructor(e.length);n.set(e,a);for(let c=0;c<e.length;c++)a[c]=C(e[c],c,r,n,i);return a}if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer)return e.slice(0);if(e instanceof DataView){const a=new DataView(e.buffer.slice(0),e.byteOffset,e.byteLength);return n.set(e,a),D(a,e,r,n,i),a}if(typeof File<"u"&&e instanceof File){const a=new File([e],e.name,{type:e.type});return n.set(e,a),D(a,e,r,n,i),a}if(typeof Blob<"u"&&e instanceof Blob){const a=new Blob([e],{type:e.type});return n.set(e,a),D(a,e,r,n,i),a}if(e instanceof Error){const a=structuredClone(e);return n.set(e,a),a.message=e.message,a.name=e.name,a.stack=e.stack,a.cause=e.cause,a.constructor=e.constructor,D(a,e,r,n,i),a}if(e instanceof Boolean){const a=new Boolean(e.valueOf());return n.set(e,a),D(a,e,r,n,i),a}if(e instanceof Number){const a=new Number(e.valueOf());return n.set(e,a),D(a,e,r,n,i),a}if(e instanceof String){const a=new String(e.valueOf());return n.set(e,a),D(a,e,r,n,i),a}if(typeof e=="object"&&Wr(e)){const a=Object.create(Object.getPrototypeOf(e));return n.set(e,a),D(a,e,r,n,i),a}return e}function D(e,t,r=e,n,i){const o=[...Object.keys(t),...Or(t)];for(let a=0;a<o.length;a++){const c=o[a],d=Object.getOwnPropertyDescriptor(e,c);(d==null||d.writable)&&(e[c]=C(t[c],c,r,n,i))}}function Wr(e){switch(we(e)){case rt:case Br:case Rr:case Ir:case tt:case Sr:case zr:case Hr:case Mr:case $r:case Kr:case Er:case et:case _r:case Pr:case Dr:case Qe:case Ar:case Lr:case Nr:case Cr:case kr:return!0;default:return!1}}function Gr(e){return C(e,void 0,e,new Map,void 0)}function nt(e,t,r){return typeof r!="function"?nt(e,t,()=>{}):le(e,t,function n(i,o,a,c,d,f){const u=r(i,o,a,c,d,f);return u!==void 0?!!u:le(i,o,n,f,!1)},new Map,!0)}function le(e,t,r,n,i=!1){if(t===e)return!0;switch(typeof t){case"object":return Yr(e,t,r,n);case"function":return Object.keys(t).length>0?le(e,{...t},r,n,i):ae(e,t);default:return gt(e)?i?typeof t=="string"?t==="":!0:ae(e,t):ae(e,t)}}function Yr(e,t,r,n){if(t==null)return!0;if(Array.isArray(t))return at(e,t,r,n);if(t instanceof Map)return Ur(e,t,r,n);if(t instanceof Set)return Xr(e,t,r,n);const i=Object.keys(t);if(e==null||ce(e))return i.length===0;if(i.length===0)return!0;if(n!=null&&n.has(t))return n.get(t)===e;n==null||n.set(t,e);try{for(let o=0;o<i.length;o++){const a=i[o];if(!ce(e)&&!(a in e)||t[a]===void 0&&e[a]!==void 0||t[a]===null&&e[a]!==null||!r(e[a],t[a],a,e,t,n))return!1}return!0}finally{n==null||n.delete(t)}}function Ur(e,t,r,n){if(t.size===0)return!0;if(!(e instanceof Map))return!1;for(const[i,o]of t.entries())if(r(e.get(i),o,i,e,t,n)===!1)return!1;return!0}function at(e,t,r,n){if(t.length===0)return!0;if(!Array.isArray(e))return!1;const i=new Set;for(let o=0;o<t.length;o++){const a=t[o];let c=!1;for(let d=0;d<e.length;d++){if(i.has(d))continue;const f=e[d];let u=!1;if(r(f,a,o,e,t,n)&&(u=!0),u){i.add(d),c=!0;break}}if(!c)return!1}return!0}function Xr(e,t,r,n){return t.size===0?!0:e instanceof Set?at([...e],[...t],r,n):!1}function it(e,t){return nt(e,t,()=>{})}function qr(e){return e=Gr(e),t=>it(t,e)}function Jr(e,t){return Tr(e,(r,n,i,o)=>{if(typeof e=="object"){if(we(e)==="[object Object]"&&typeof e.constructor!="function"){const a={};return o.set(e,a),D(a,e,i,o),a}switch(Object.prototype.toString.call(e)){case et:case Qe:case tt:{const a=new e.constructor(e==null?void 0:e.valueOf());return D(a,e),a}case rt:{const a={};return D(a,e),a.length=e.length,a[Symbol.iterator]=e[Symbol.iterator],a}default:return}}})}function Vr(e){return Jr(e)}function Zr(e){return e!==null&&typeof e=="object"&&we(e)==="[object Arguments]"}function Qr(e,t){let r;if(Array.isArray(t)?r=t:typeof t=="string"&&bt(t)&&(e==null?void 0:e[t])==null?r=xt(t):r=[t],r.length===0)return!1;let n=e;for(let i=0;i<r.length;i++){const o=r[i];if((n==null||!Object.hasOwn(n,o))&&!((Array.isArray(n)||Zr(n))&&wt(o)&&o<n.length))return!1;n=n[o]}return!0}function en(e,t){switch(typeof e){case"object":Object.is(e==null?void 0:e.valueOf(),-0)&&(e="-0");break;case"number":e=jt(e);break}return t=Vr(t),function(r){const n=Ue(r,e);return n===void 0?Qr(r,e):t===void 0?n===void 0:it(n,t)}}function tn(e){if(e==null)return Ze;switch(typeof e){case"function":return e;case"object":return Array.isArray(e)&&e.length===2?en(e[0],e[1]):qr(e);case"string":case"symbol":case"number":return wr(e)}}function rn(e){return typeof e=="object"&&e!==null}function nn(e){return rn(e)&&Ot(e)}function _e(e,t=Ze){return nn(e)?br(Array.from(e),xr(tn(t),1)):[]}function ot(e,t,r){return t===!0?_e(e,r):typeof t=="function"?_e(e,t):e}function an(){return j(Pt)}var q=1;function st(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],[t,r]=l.useState({height:0,left:0,top:0,width:0}),n=l.useCallback(i=>{if(i!=null){var o=i.getBoundingClientRect(),a={height:o.height,left:o.left,top:o.top,width:o.width};(Math.abs(a.height-t.height)>q||Math.abs(a.left-t.left)>q||Math.abs(a.top-t.top)>q||Math.abs(a.width-t.width)>q)&&r({height:a.height,left:a.left,top:a.top,width:a.width})}},[t.width,t.height,t.top,t.left,...e]);return[t,n]}var on=["contextPayload"];function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ue.apply(null,arguments)}function Ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ie(Object(r),!0).forEach(function(n){je(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ie(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function je(e,t,r){return(t=sn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function sn(e){var t=cn(e,"string");return typeof t=="symbol"?t:t+""}function cn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ln(e,t){if(e==null)return{};var r,n,i=un(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function un(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function dn(e){return e.value}function fn(e){var{contextPayload:t}=e,r=ln(e,on),n=ot(t,e.payloadUniqBy,dn),i=K(K({},r),{},{payload:n});return l.isValidElement(e.content)?l.cloneElement(e.content,i):typeof e.content=="function"?l.createElement(e.content,i):l.createElement(xe,i)}function pn(e,t,r,n,i,o){var{layout:a,align:c,verticalAlign:d}=t,f,u;return(!e||(e.left===void 0||e.left===null)&&(e.right===void 0||e.right===null))&&(c==="center"&&a==="vertical"?f={left:((n||0)-o.width)/2}:f=c==="right"?{right:r&&r.right||0}:{left:r&&r.left||0}),(!e||(e.top===void 0||e.top===null)&&(e.bottom===void 0||e.bottom===null))&&(d==="middle"?u={top:((i||0)-o.height)/2}:u=d==="bottom"?{bottom:r&&r.bottom||0}:{top:r&&r.top||0}),K(K({},f),u)}function hn(e){var t=W();return l.useEffect(()=>{t(Bt(e))},[t,e]),null}function mn(e){var t=W();return l.useEffect(()=>(t(Se(e)),()=>{t(Se({width:0,height:0}))}),[t,e]),null}function yn(e){var t=an(),r=At(),n=St(),{width:i,height:o,wrapperStyle:a,portal:c}=e,[d,f]=st([t]),u=Et(),p=Dt();if(u==null||p==null)return null;var h=u-(n.left||0)-(n.right||0),m=re.getWidthOrHeight(e.layout,o,i,h),g=c?a:K(K({position:"absolute",width:(m==null?void 0:m.width)||i||"auto",height:(m==null?void 0:m.height)||o||"auto"},pn(a,e,n,u,p,d)),a),y=c??r;if(y==null)return null;var w=l.createElement("div",{className:"recharts-legend-wrapper",style:g,ref:f},l.createElement(hn,{layout:e.layout,align:e.align,verticalAlign:e.verticalAlign,itemSorter:e.itemSorter}),l.createElement(mn,{width:d.width,height:d.height}),l.createElement(fn,ue({},e,m,{margin:n,chartWidth:u,chartHeight:p,contextPayload:t})));return Ve.createPortal(w,y)}class re extends l.PureComponent{static getWidthOrHeight(t,r,n,i){return t==="vertical"&&x(r)?{height:r}:t==="horizontal"?{width:n||i}:null}render(){return l.createElement(yn,this.props)}}je(re,"displayName","Legend");je(re,"defaultProps",{align:"center",iconSize:14,itemSorter:"value",layout:"horizontal",verticalAlign:"bottom"});function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},de.apply(null,arguments)}function Le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Le(Object(r),!0).forEach(function(n){vn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Le(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function vn(e,t,r){return(t=gn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function gn(e){var t=bn(e,"string");return typeof t=="symbol"?t:t+""}function bn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xn(e){return Array.isArray(e)&&Z(e[0])&&Z(e[1])?e.join(" ~ "):e}var wn=e=>{var{separator:t=" : ",contentStyle:r={},itemStyle:n={},labelStyle:i={},payload:o,formatter:a,itemSorter:c,wrapperClassName:d,labelClassName:f,label:u,labelFormatter:p,accessibilityLayer:h=!1}=e,m=()=>{if(o&&o.length){var v={padding:0,margin:0},S=(c?_t(o,c):o).map((L,G)=>{if(L.type==="none")return null;var R=L.formatter||a||xn,{value:z,name:Y}=L,H=z,M=Y;if(R){var I=R(z,Y,L,G,o);if(Array.isArray(I))[H,M]=I;else if(I!=null)H=I;else return null}var N=ie({display:"block",paddingTop:4,paddingBottom:4,color:L.color||"#000"},n);return l.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(G),style:N},Z(M)?l.createElement("span",{className:"recharts-tooltip-item-name"},M):null,Z(M)?l.createElement("span",{className:"recharts-tooltip-item-separator"},t):null,l.createElement("span",{className:"recharts-tooltip-item-value"},H),l.createElement("span",{className:"recharts-tooltip-item-unit"},L.unit||""))});return l.createElement("ul",{className:"recharts-tooltip-item-list",style:v},S)}return null},g=ie({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},r),y=ie({margin:0},i),w=!Rt(u),b=w?u:"",P=k("recharts-default-tooltip",d),A=k("recharts-tooltip-label",f);w&&p&&o!==void 0&&o!==null&&(b=p(u,o));var B=h?{role:"status","aria-live":"assertive"}:{};return l.createElement("div",de({className:P,style:g},B),l.createElement("p",{className:A,style:y},l.isValidElement(b)?b:"".concat(b)),m())},T="recharts-tooltip-wrapper",jn={visibility:"hidden"};function On(e){var{coordinate:t,translateX:r,translateY:n}=e;return k(T,{["".concat(T,"-right")]:x(r)&&t&&x(t.x)&&r>=t.x,["".concat(T,"-left")]:x(r)&&t&&x(t.x)&&r<t.x,["".concat(T,"-bottom")]:x(n)&&t&&x(t.y)&&n>=t.y,["".concat(T,"-top")]:x(n)&&t&&x(t.y)&&n<t.y})}function Ne(e){var{allowEscapeViewBox:t,coordinate:r,key:n,offsetTopLeft:i,position:o,reverseDirection:a,tooltipDimension:c,viewBox:d,viewBoxDimension:f}=e;if(o&&x(o[n]))return o[n];var u=r[n]-c-(i>0?i:0),p=r[n]+i;if(t[n])return a[n]?u:p;var h=d[n];if(h==null)return 0;if(a[n]){var m=u,g=h;return m<g?Math.max(p,h):Math.max(u,h)}if(f==null)return 0;var y=p+c,w=h+f;return y>w?Math.max(u,h):Math.max(p,h)}function Pn(e){var{translateX:t,translateY:r,useTranslate3d:n}=e;return{transform:n?"translate3d(".concat(t,"px, ").concat(r,"px, 0)"):"translate(".concat(t,"px, ").concat(r,"px)")}}function An(e){var{allowEscapeViewBox:t,coordinate:r,offsetTopLeft:n,position:i,reverseDirection:o,tooltipBox:a,useTranslate3d:c,viewBox:d}=e,f,u,p;return a.height>0&&a.width>0&&r?(u=Ne({allowEscapeViewBox:t,coordinate:r,key:"x",offsetTopLeft:n,position:i,reverseDirection:o,tooltipDimension:a.width,viewBox:d,viewBoxDimension:d.width}),p=Ne({allowEscapeViewBox:t,coordinate:r,key:"y",offsetTopLeft:n,position:i,reverseDirection:o,tooltipDimension:a.height,viewBox:d,viewBoxDimension:d.height}),f=Pn({translateX:u,translateY:p,useTranslate3d:c})):f=jn,{cssProperties:f,cssClasses:On({translateX:u,translateY:p,coordinate:r})}}function Ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ce(Object(r),!0).forEach(function(n){fe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ce(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function fe(e,t,r){return(t=Sn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Sn(e){var t=En(e,"string");return typeof t=="symbol"?t:t+""}function En(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class Dn extends l.PureComponent{constructor(){super(...arguments),fe(this,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}),fe(this,"handleKeyDown",t=>{if(t.key==="Escape"){var r,n,i,o;this.setState({dismissed:!0,dismissedAtCoordinate:{x:(r=(n=this.props.coordinate)===null||n===void 0?void 0:n.x)!==null&&r!==void 0?r:0,y:(i=(o=this.props.coordinate)===null||o===void 0?void 0:o.y)!==null&&i!==void 0?i:0}})}})}componentDidMount(){document.addEventListener("keydown",this.handleKeyDown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}componentDidUpdate(){var t,r;this.state.dismissed&&(((t=this.props.coordinate)===null||t===void 0?void 0:t.x)!==this.state.dismissedAtCoordinate.x||((r=this.props.coordinate)===null||r===void 0?void 0:r.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}render(){var{active:t,allowEscapeViewBox:r,animationDuration:n,animationEasing:i,children:o,coordinate:a,hasPayload:c,isAnimationActive:d,offset:f,position:u,reverseDirection:p,useTranslate3d:h,viewBox:m,wrapperStyle:g,lastBoundingBox:y,innerRef:w,hasPortalFromProps:b}=this.props,{cssClasses:P,cssProperties:A}=An({allowEscapeViewBox:r,coordinate:a,offsetTopLeft:f,position:u,reverseDirection:p,tooltipBox:{height:y.height,width:y.width},useTranslate3d:h,viewBox:m}),B=b?{}:J(J({transition:d&&t?"transform ".concat(n,"ms ").concat(i):void 0},A),{},{pointerEvents:"none",visibility:!this.state.dismissed&&t&&c?"visible":"hidden",position:"absolute",top:0,left:0}),v=J(J({},B),{},{visibility:!this.state.dismissed&&t&&c?"visible":"hidden"},g);return l.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",tabIndex:-1,className:P,style:v,ref:w},o)}}var Bn=["x","y","top","left","width","height","className"];function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},pe.apply(null,arguments)}function ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Rn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ke(Object(r),!0).forEach(function(n){_n(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ke(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function _n(e,t,r){return(t=In(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function In(e){var t=Ln(e,"string");return typeof t=="symbol"?t:t+""}function Ln(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nn(e,t){if(e==null)return{};var r,n,i=Cn(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Cn(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var kn=(e,t,r,n,i,o)=>"M".concat(e,",").concat(i,"v").concat(n,"M").concat(o,",").concat(t,"h").concat(r),Mn=e=>{var{x:t=0,y:r=0,top:n=0,left:i=0,width:o=0,height:a=0,className:c}=e,d=Nn(e,Bn),f=Rn({x:t,y:r,top:n,left:i,width:o,height:a},d);return!x(t)||!x(r)||!x(o)||!x(a)||!x(n)||!x(i)?null:l.createElement("path",pe({},It(f),{className:k("recharts-cross",c),d:kn(t,r,o,a,n,i)}))};function $n(e,t,r,n){var i=n/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-i:r.left+.5,y:e==="horizontal"?r.top+.5:t.y-i,width:e==="horizontal"?n:r.width-1,height:e==="horizontal"?r.height-1:n}}function ct(e){var{cx:t,cy:r,radius:n,startAngle:i,endAngle:o}=e,a=Q(t,r,n,i),c=Q(t,r,n,o);return{points:[a,c],cx:t,cy:r,radius:n,startAngle:i,endAngle:o}}function Kn(e,t,r){var n,i,o,a;if(e==="horizontal")n=t.x,o=n,i=r.top,a=r.top+r.height;else if(e==="vertical")i=t.y,a=i,n=r.left,o=r.left+r.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var{cx:c,cy:d,innerRadius:f,outerRadius:u,angle:p}=t,h=Q(c,d,f,p),m=Q(c,d,u,p);n=h.x,i=h.y,o=m.x,a=m.y}else return ct(t);return[{x:n,y:i},{x:o,y:a}]}function Me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function $e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Me(Object(r),!0).forEach(function(n){zn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Me(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function zn(e,t,r){return(t=Hn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Hn(e){var t=Fn(e,"string");return typeof t=="symbol"?t:t+""}function Fn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Tn=()=>j(kt),Wn=()=>{var e=Tn(),t=j(Lt),r=j(Nt);return Ct($e($e({},e),{},{scale:r}),t)};function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},he.apply(null,arguments)}function Ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ke(Object(r),!0).forEach(function(n){Gn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Gn(e,t,r){return(t=Yn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Yn(e){var t=Un(e,"string");return typeof t=="symbol"?t:t+""}function Un(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xn(e){var{coordinate:t,payload:r,index:n,offset:i,tooltipAxisBandSize:o,layout:a,cursor:c,tooltipEventType:d,chartName:f}=e,u=t,p=r,h=n;if(!c||!u||f!=="ScatterChart"&&d!=="axis")return null;var m,g;if(f==="ScatterChart")m=u,g=Mn;else if(f==="BarChart")m=$n(a,u,i,o),g=Ht;else if(a==="radial"){var{cx:y,cy:w,radius:b,startAngle:P,endAngle:A}=ct(u);m={cx:y,cy:w,startAngle:P,endAngle:A,innerRadius:b,outerRadius:b},g=Ft}else m={points:Kn(a,u,i)},g=Tt;var B=typeof c=="object"&&"className"in c?c.className:void 0,v=V(V(V(V({stroke:"#ccc",pointerEvents:"none"},i),m),zt(c)),{},{payload:p,payloadIndex:h,className:k("recharts-tooltip-cursor",B)});return l.isValidElement(c)?l.cloneElement(c,v):l.createElement(g,v)}function qn(e){var t=Wn(),r=Mt(),n=$t(),i=Kt();return l.createElement(Xn,he({},e,{coordinate:e.coordinate,index:e.index,payload:e.payload,offset:r,layout:n,tooltipAxisBandSize:t,chartName:i}))}function ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function He(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ze(Object(r),!0).forEach(function(n){Jn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ze(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Jn(e,t,r){return(t=Vn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Vn(e){var t=Zn(e,"string");return typeof t=="symbol"?t:t+""}function Zn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qn(e){return e.dataKey}function ea(e,t){return l.isValidElement(e)?l.cloneElement(e,t):typeof e=="function"?l.createElement(e,t):l.createElement(wn,t)}var Fe=[],ta={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",axisId:0,contentStyle:{},cursor:!0,filterNull:!0,isAnimationActive:!er.isSsr,itemSorter:"name",itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,wrapperStyle:{}};function Oe(e){var t=Xe(e,ta),{active:r,allowEscapeViewBox:n,animationDuration:i,animationEasing:o,content:a,filterNull:c,isAnimationActive:d,offset:f,payloadUniqBy:u,position:p,reverseDirection:h,useTranslate3d:m,wrapperStyle:g,cursor:y,shared:w,trigger:b,defaultIndex:P,portal:A,axisId:B}=t,v=W(),S=typeof P=="number"?String(P):P;l.useEffect(()=>{v(Wt({shared:w,trigger:b,axisId:B,active:r,defaultIndex:S}))},[v,w,b,B,r,S]);var L=Gt(),G=Yt(),R=Ut(w),{activeIndex:z,isActive:Y}=j(_=>Xt(_,R,b,S)),H=j(_=>qt(_,R,b,S)),M=j(_=>Jt(_,R,b,S)),I=j(_=>Vt(_,R,b,S)),N=H,lt=Zt(),$=r??Y,[ut,dt]=st([N,$]),Pe=R==="axis"?M:void 0;Qt(R,b,I,Pe,z,$);var Ae=A??lt;if(Ae==null)return null;var F=N??Fe;$||(F=Fe),c&&F.length&&(F=ot(N.filter(_=>_.value!=null&&(_.hide!==!0||t.includeHidden)),u,Qn));var ft=F.length>0,pt=l.createElement(Dn,{allowEscapeViewBox:n,animationDuration:i,animationEasing:o,isAnimationActive:d,active:$,coordinate:I,hasPayload:ft,offset:f,position:p,reverseDirection:h,useTranslate3d:m,viewBox:L,wrapperStyle:g,lastBoundingBox:ut,innerRef:dt,hasPortalFromProps:!!A},ea(a,He(He({},t),{},{payload:F,label:Pe,active:$,coordinate:I,accessibilityLayer:G})));return l.createElement(l.Fragment,null,Ve.createPortal(pt,Ae),$&&l.createElement(qn,{cursor:y,tooltipEventType:R,coordinate:I,payload:N,index:z}))}var ra=["dangerouslySetInnerHTML","ticks"],na=["id"],aa=["domain"],ia=["domain"];function me(){return me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},me.apply(null,arguments)}function ee(e,t){if(e==null)return{};var r,n,i=oa(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function oa(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function sa(e){var t=W();return l.useLayoutEffect(()=>(t(tr(e)),()=>{t(rr(e))}),[e,t]),null}var ca=e=>{var{yAxisId:t,className:r,width:n,label:i}=e,o=l.useRef(null),a=l.useRef(null),c=j(nr),d=ar(),f=W(),u="yAxis",p=j(v=>ir(v,u,t,d)),h=j(v=>or(v,t)),m=j(v=>sr(v,t)),g=j(v=>cr(v,u,t,d)),y=j(v=>lr(v,t));if(l.useLayoutEffect(()=>{if(!(n!=="auto"||!h||ur(i)||l.isValidElement(i)||y==null)){var v=o.current;if(v){var S=v.getCalculatedWidth();Math.round(h.width)!==Math.round(S)&&f(dr({id:t,width:S}))}}},[g,h,f,i,t,n,y]),h==null||m==null||y==null)return null;var{dangerouslySetInnerHTML:w,ticks:b}=e,P=ee(e,ra),{id:A}=y,B=ee(y,na);return l.createElement(fr,me({},P,B,{ref:o,labelRef:a,scale:p,x:m.x,y:m.y,tickTextProps:n==="auto"?{width:void 0}:{width:n},width:h.width,height:h.height,className:k("recharts-".concat(u," ").concat(u),r),viewBox:c,ticks:g}))},la={allowDataOverflow:E.allowDataOverflow,allowDecimals:E.allowDecimals,allowDuplicatedCategory:E.allowDuplicatedCategory,hide:!1,mirror:E.mirror,orientation:E.orientation,padding:E.padding,reversed:E.reversed,scale:E.scale,tickCount:E.tickCount,type:E.type,width:E.width,yAxisId:0},ua=e=>{var t,r,n,i,o,a=Xe(e,la);return l.createElement(l.Fragment,null,l.createElement(sa,{interval:(t=a.interval)!==null&&t!==void 0?t:"preserveEnd",id:a.yAxisId,scale:a.scale,type:a.type,domain:a.domain,allowDataOverflow:a.allowDataOverflow,dataKey:a.dataKey,allowDuplicatedCategory:a.allowDuplicatedCategory,allowDecimals:a.allowDecimals,tickCount:a.tickCount,padding:a.padding,includeHidden:(r=a.includeHidden)!==null&&r!==void 0?r:!1,reversed:a.reversed,ticks:a.ticks,width:a.width,orientation:a.orientation,mirror:a.mirror,hide:a.hide,unit:a.unit,name:a.name,angle:(n=a.angle)!==null&&n!==void 0?n:0,minTickGap:(i=a.minTickGap)!==null&&i!==void 0?i:5,tick:(o=a.tick)!==null&&o!==void 0?o:!0,tickFormatter:a.tickFormatter}),l.createElement(ca,a))},da=(e,t)=>{var{domain:r}=e,n=ee(e,aa),{domain:i}=t,o=ee(t,ia);return Ee(n,o)?Array.isArray(r)&&r.length===2&&Array.isArray(i)&&i.length===2?r[0]===i[0]&&r[1]===i[1]:Ee({domain:r},{domain:i}):!1},ne=l.memo(ua,da);ne.displayName="YAxis";const fa=[{date:"Mar 23",conservative:100,tech:100},{date:"Apr 23",conservative:101,tech:115},{date:"May 23",conservative:101,tech:130},{date:"Jun 23",conservative:102,tech:125},{date:"Jul 23",conservative:102,tech:140},{date:"Aug 23",conservative:102,tech:135},{date:"Sep 23",conservative:103,tech:150},{date:"Oct 23",conservative:103,tech:145},{date:"Nov 23",conservative:103,tech:155},{date:"Dec 23",conservative:104,tech:160},{date:"Jan 24",conservative:104,tech:165},{date:"Feb 24",conservative:104,tech:170},{date:"Mar 24",conservative:105,tech:180}];function pa(){return s.jsx(te,{width:"100%",height:"100%",children:s.jsxs(pr,{data:fa,children:[s.jsx(ve,{strokeDasharray:"4 ",vertical:!1}),s.jsx(ge,{dataKey:"date"}),s.jsx(ne,{domain:[100,"dataMax + 20"]}),s.jsx(Oe,{}),s.jsx(re,{}),s.jsx(De,{type:"monotone",dataKey:"conservative",stroke:"var(--bs-primary)",activeDot:{r:8,stroke:"var(--bs-primary-100)",strokeWidth:2},dot:!1,name:"Conservative Differentiated Oct24"}),s.jsx(De,{type:"monotone",dataKey:"tech",stroke:"var(--bs-secondary)",activeDot:{r:8,stroke:"var(--bs-secondary-100)",strokeWidth:2},dot:!1,name:"Technological"})]})})}const Te=["var(--bs-primary)","var(--bs-primary-300)","var(--bs-primary-100)","var(--bs-primary-600)"],ye=[{id:1,name:"Group A",value:6500},{id:2,name:"Group B",value:1200},{id:3,name:"Group C",value:10200},{id:4,name:"Group D",value:2100}],ha=ye.reduce((e,t)=>e+t.value,0),ma=({cx:e,cy:t})=>s.jsx("text",{x:e,y:t,fill:"var(--bs-gray-900)",textAnchor:"middle",dominantBaseline:"central",className:"fs-3",children:`$${ha.toLocaleString()}`});function ya(){return s.jsx(te,{width:"100%",height:"100%",children:s.jsx(hr,{children:s.jsx(mr,{data:ye,cx:"50%",cy:"50%",innerRadius:76,dataKey:"value",label:ma,labelLine:!1,children:ye.map((e,t)=>s.jsx(qe,{fill:Te[t%Te.length]},e.id))})})})}const va=[{name:"Jan 23",value:5e4},{name:"Mar 23",value:75e3},{name:"May 23",value:1e5},{name:"Jul 23",value:8e4},{name:"Sep 23",value:7e4},{name:"Nov 23",value:6e4}];function ga(){return s.jsx(te,{width:"100%",height:"100%",children:s.jsxs(Je,{data:va,barCategoryGap:"25%",children:[s.jsx(ve,{strokeDasharray:"4 ",vertical:!1}),s.jsx(ge,{dataKey:"name"}),s.jsx(ne,{domain:[0,"dataMax + 10000"],tickFormatter:e=>`$${(e/1e3).toFixed(0)}K`}),s.jsx(Oe,{formatter:e=>`$${e.toLocaleString()}`,cursor:{fill:"var(--bs-secondary-100)"}}),s.jsx(oe,{dataKey:"value",fill:"var(--bs-secondary)"})]})})}const We=[{id:1,name:"Item A",value:22500,down:0,color:"var(--bs-blue)"},{id:2,name:"Item B",value:1e3,down:21500,color:"var(--bs-orange)"},{id:3,name:"Item C",value:2e3,down:19500,color:"var(--bs-orange)"},{id:4,name:"Item D",value:3e3,down:16500,color:"var(--bs-orange)"},{id:5,name:"Item E",value:16500,down:0,color:"var(--bs-green)"},{id:6,name:"Item F",value:1e3,down:16500,color:"var(--bs-blue)"},{id:7,name:"Item G",value:8e3,down:16500,color:"var(--bs-blue)"},{id:8,name:"Item H",value:24500,down:0,color:"var(--bs-green)"}];function ba(){return s.jsx(te,{width:"100%",height:"100%",children:s.jsxs(Je,{data:We,children:[s.jsx(ve,{strokeDasharray:"4 ",vertical:!1}),s.jsx(ge,{dataKey:"name"}),s.jsx(ne,{domain:[0,"dataMax + 10000"]}),s.jsx(Oe,{formatter:e=>`$${e.toLocaleString()}`,cursor:{fill:"var(--bs-gray-100)"}}),s.jsx(oe,{dataKey:"down",stackId:"a",fill:"transparent"}),s.jsx(oe,{dataKey:"value",stackId:"a",children:We.map(e=>s.jsx(qe,{fill:e.color},e.id))})]})})}function Ge(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...Ye(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(ht,{title:"Design System/Examples/Graphs"}),`
`,s.jsx(t.h1,{id:"recharts-the-choice-for-graphs",children:"Recharts: The Choice for Graphs"}),`
`,s.jsx(t.p,{children:"In our project, we've opted to utilize Recharts as our primary graphing library. Here's why:"}),`
`,s.jsx(t.h2,{id:"why-recharts",children:"Why Recharts?"}),`
`,s.jsx(t.p,{children:"Recharts is a highly versatile and feature-rich library designed specifically for building charts in React applications. Here are some key reasons why we chose Recharts:"}),`
`,s.jsxs(t.ul,{children:[`
`,s.jsxs(t.li,{children:[s.jsx(t.strong,{children:"Native React Components:"})," Recharts provides a set of native React components for building various types of charts, making it easy to integrate into our React-based project."]}),`
`,s.jsxs(t.li,{children:[s.jsx(t.strong,{children:"Rich Feature Set:"})," It offers a comprehensive set of chart types and customization options, allowing us to create visually appealing and interactive charts."]}),`
`,s.jsxs(t.li,{children:[s.jsx(t.strong,{children:"Responsive Design:"})," Recharts supports responsive design out of the box, ensuring that our charts look great and remain functional across different screen sizes and devices."]}),`
`,s.jsxs(t.li,{children:[s.jsx(t.strong,{children:"Active Community:"})," Recharts has a large and active community, which means that we can easily find support, resources, and community-contributed plugins and extensions."]}),`
`]}),`
`,s.jsx(t.h2,{id:"why-no-wrapper-component",children:"Why No Wrapper Component?"}),`
`,s.jsx(t.p,{children:"Unlike some other charting libraries, Recharts provides React components that can be directly imported and used in our application without the need for a wrapper component. Here's why we don't need to create a wrapper component for Recharts:"}),`
`,s.jsxs(t.ul,{children:[`
`,s.jsxs(t.li,{children:[s.jsx(t.strong,{children:"Direct Integration:"})," Recharts components can be directly imported and used like any other React component, simplifying the integration process and reducing unnecessary abstraction layers."]}),`
`,s.jsxs(t.li,{children:[s.jsx(t.strong,{children:"Customization:"})," Recharts components are highly customizable, allowing us to achieve the desired functionality and appearance without the need for additional wrapper components."]}),`
`,s.jsxs(t.li,{children:[s.jsx(t.strong,{children:"Performance:"})," By avoiding unnecessary wrapper components, we can improve the performance of our application by reducing the overhead associated with component nesting."]}),`
`]}),`
`,s.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,s.jsx(t.p,{children:"Let's dive into some examples of how we can use Recharts to create different types of charts:"}),`
`,s.jsx(t.h3,{id:"examplelinecharttsx",children:s.jsx(t.code,{children:"ExampleLineChart.tsx"})}),`
`,s.jsx(U,{children:s.jsx("div",{style:{height:"300px"},children:s.jsx(pa,{})})}),`
`,s.jsx(X,{code:`
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
`,s.jsx(t.h3,{id:"examplepiecharttsx",children:s.jsx(t.code,{children:"ExamplePieChart.tsx"})}),`
`,s.jsx(U,{children:s.jsx("div",{style:{height:"300px"},children:s.jsx(ya,{})})}),`
`,s.jsx(X,{code:`
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
`,s.jsx(t.h3,{id:"bar-chart",children:"Bar Chart"}),`
`,s.jsx(U,{children:s.jsx("div",{style:{height:"300px"},children:s.jsx(ga,{})})}),`
`,s.jsx(X,{code:`
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
`,s.jsx(t.h3,{id:"progressive-column-bar-chart",children:"Progressive Column Bar Chart"}),`
`,s.jsx(t.p,{children:`Progressive column charts, also knows as waterfall charts, are like stacked charts with each segment of
a single stack displaced vertically from the next segment.`}),`
`,s.jsx(t.p,{children:"Progressive column charts are useful for emphasizing the contribution of the individual segments to the whole."}),`
`,s.jsx(U,{children:s.jsx("div",{style:{height:"300px"},children:s.jsx(ba,{})})}),`
`,s.jsx(X,{code:`
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
`,language:"tsx",dark:!0})]})}function Ra(e={}){const{wrapper:t}={...Ye(),...e.components};return t?s.jsx(t,{...e,children:s.jsx(Ge,{...e})}):Ge(e)}export{Ra as default};
