import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as Ot}from"./index-DQdTWirx.js";import{M as zt,U as G,c as Y}from"./blocks-CCBL7Lvn.js";import{aw as Ft,B as Gt,ax as Yt,ay as Ut,az as jt,aA as Xt,aB as Jt,aC as Vt,aD as At,aE as St,aF as Zt,aG as Qt,aH as er,aI as tr,r as j,aJ as rr,aK as O,aL as nr,aM as ir,aN as ar,aO as or,u as H,aP as sr,aQ as Te,W as cr,aR as lr,aS as V,f as Dt,z as Z,aT as ur,aU as dr,I as fr,X as hr,aV as pr,aW as yr,aX as mr,aY as vr,aZ as gr,a_ as br,ak as xr,a$ as wr,b0 as Pr,b1 as Or,b2 as jr,b3 as Ar,b4 as Sr,b5 as Dr,b6 as Er,b7 as Br,ai as Rr,b8 as Ir,b9 as Mr,ba as _r,bb as Lr,x as kr,bc as qr,bd as Cr,be as $r,bf as Tr,bg as Nr,bh as Wr,bi as Kr,bj as D,an as Q,ao as Hr,aq as Ie,au as Me,ap as Ne,ar as zr,as as Fr,a5 as Et,at as Bt,av as Pe}from"./PieChart-vUEUnX7K.js";import{r as p,g as Gr}from"./iframe-CppG1Bu4.js";import{c as k}from"./clsx-B-dksMZM.js";import{r as Rt}from"./index-CgwUC5VX.js";import"./index-DM0dE67Y.js";function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Oe.apply(null,arguments)}function We(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Yr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?We(Object(r),!0).forEach(function(n){_e(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):We(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function _e(e,t,r){return(t=Ur(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ur(e){var t=Xr(e,"string");return typeof t=="symbol"?t:t+""}function Xr(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var S=32;class Le extends p.PureComponent{renderIcon(t,r){var{inactiveColor:n}=this.props,a=S/2,o=S/6,u=S/3,f=t.inactive?n:t.color,h=r??t.type;if(h==="none")return null;if(h==="plainline")return p.createElement("line",{strokeWidth:4,fill:"none",stroke:f,strokeDasharray:t.payload.strokeDasharray,x1:0,y1:a,x2:S,y2:a,className:"recharts-legend-icon"});if(h==="line")return p.createElement("path",{strokeWidth:4,fill:"none",stroke:f,d:"M0,".concat(a,"h").concat(u,`
            A`).concat(o,",").concat(o,",0,1,1,").concat(2*u,",").concat(a,`
            H`).concat(S,"M").concat(2*u,",").concat(a,`
            A`).concat(o,",").concat(o,",0,1,1,").concat(u,",").concat(a),className:"recharts-legend-icon"});if(h==="rect")return p.createElement("path",{stroke:"none",fill:f,d:"M0,".concat(S/8,"h").concat(S,"v").concat(S*3/4,"h").concat(-S,"z"),className:"recharts-legend-icon"});if(p.isValidElement(t.legendIcon)){var m=Yr({},t);return delete m.legendIcon,p.cloneElement(t.legendIcon,m)}return p.createElement(Ft,{fill:f,cx:a,cy:a,size:S,sizeType:"diameter",type:h})}renderItems(){var{payload:t,iconSize:r,layout:n,formatter:a,inactiveColor:o,iconType:u}=this.props,f={x:0,y:0,width:S,height:S},h={display:n==="horizontal"?"inline-block":"block",marginRight:10},m={display:"inline-block",verticalAlign:"middle",marginRight:4};return t.map((i,s)=>{var y=i.formatter||a,c=k({"recharts-legend-item":!0,["legend-item-".concat(s)]:!0,inactive:i.inactive});if(i.type==="none")return null;var v=i.inactive?o:i.color,b=y?y(i.value,i,s):i.value;return p.createElement("li",Oe({className:c,style:h,key:"legend-item-".concat(s)},Gt(this.props,i,s)),p.createElement(Yt,{width:r,height:r,viewBox:f,style:m,"aria-label":"".concat(b," legend icon")},this.renderIcon(i,u)),p.createElement("span",{className:"recharts-legend-item-text",style:{color:v}},b))})}render(){var{payload:t,layout:r,align:n}=this.props;if(!t||!t.length)return null;var a={padding:0,margin:0,textAlign:r==="horizontal"?n:"left"};return p.createElement("ul",{className:"recharts-default-legend",style:a},this.renderItems())}}_e(Le,"displayName","Legend");_e(Le,"defaultProps",{align:"center",iconSize:14,inactiveColor:"#ccc",layout:"horizontal",verticalAlign:"middle"});var te={},re={},Ke;function Jr(){return Ke||(Ke=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n){const a=new Map;for(let o=0;o<r.length;o++){const u=r[o],f=n(u);a.has(f)||a.set(f,u)}return Array.from(a.values())}e.uniqBy=t})(re)),re}var ne={},He;function It(){return He||(He=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r}e.identity=t})(ne)),ne}var ie={},ae={},ze;function Vr(){return ze||(ze=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="object"&&r!==null}e.isObjectLike=t})(ae)),ae}var Fe;function Zr(){return Fe||(Fe=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ut(),r=Vr();function n(a){return r.isObjectLike(a)&&t.isArrayLike(a)}e.isArrayLikeObject=n})(ie)),ie}var oe={},se={},Ge;function Qr(){return Ge||(Ge=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=jt();function r(n){return function(a){return t.get(a,n)}}e.property=r})(se)),se}var ce={},le={},ue={},de={},Ye;function Mt(){return Ye||(Ye=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==null||typeof r!="object"&&typeof r!="function"}e.isPrimitive=t})(de)),de}var Ue;function en(){return Ue||(Ue=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Xt(),r=Mt(),n=Jt();function a(i,s,y){return typeof y!="function"?a(i,s,()=>{}):o(i,s,function c(v,b,l,g,w,x){const P=y(v,b,l,g,w,x);return P!==void 0?!!P:o(v,b,c,x)},new Map)}function o(i,s,y,c){if(s===i)return!0;switch(typeof s){case"object":return u(i,s,y,c);case"function":return Object.keys(s).length>0?o(i,{...s},y,c):n.eq(i,s);default:return t.isObject(i)?typeof s=="string"?s==="":!0:n.eq(i,s)}}function u(i,s,y,c){if(s==null)return!0;if(Array.isArray(s))return h(i,s,y,c);if(s instanceof Map)return f(i,s,y,c);if(s instanceof Set)return m(i,s,y,c);const v=Object.keys(s);if(i==null)return v.length===0;if(v.length===0)return!0;if(c!=null&&c.has(s))return c.get(s)===i;c==null||c.set(s,i);try{for(let b=0;b<v.length;b++){const l=v[b];if(!r.isPrimitive(i)&&!(l in i)||s[l]===void 0&&i[l]!==void 0||s[l]===null&&i[l]!==null||!y(i[l],s[l],l,i,s,c))return!1}return!0}finally{c==null||c.delete(s)}}function f(i,s,y,c){if(s.size===0)return!0;if(!(i instanceof Map))return!1;for(const[v,b]of s.entries()){const l=i.get(v);if(y(l,b,v,i,s,c)===!1)return!1}return!0}function h(i,s,y,c){if(s.length===0)return!0;if(!Array.isArray(i))return!1;const v=new Set;for(let b=0;b<s.length;b++){const l=s[b];let g=!1;for(let w=0;w<i.length;w++){if(v.has(w))continue;const x=i[w];let P=!1;if(y(x,l,b,i,s,c)&&(P=!0),P){v.add(w),g=!0;break}}if(!g)return!1}return!0}function m(i,s,y,c){return s.size===0?!0:i instanceof Set?h([...i],[...s],y,c):!1}e.isMatchWith=a,e.isSetMatch=m})(ue)),ue}var Xe;function _t(){return Xe||(Xe=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=en();function r(n,a){return t.isMatchWith(n,a,()=>{})}e.isMatch=r})(le)),le}var fe={},he={},pe={},Je;function tn(){return Je||(Je=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}e.isTypedArray=t})(pe)),pe}var Ve;function Lt(){return Ve||(Ve=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Vt(),r=At(),n=St(),a=Mt(),o=tn();function u(i,s){return f(i,void 0,i,new Map,s)}function f(i,s,y,c=new Map,v=void 0){const b=v==null?void 0:v(i,s,y,c);if(b!==void 0)return b;if(a.isPrimitive(i))return i;if(c.has(i))return c.get(i);if(Array.isArray(i)){const l=new Array(i.length);c.set(i,l);for(let g=0;g<i.length;g++)l[g]=f(i[g],g,y,c,v);return Object.hasOwn(i,"index")&&(l.index=i.index),Object.hasOwn(i,"input")&&(l.input=i.input),l}if(i instanceof Date)return new Date(i.getTime());if(i instanceof RegExp){const l=new RegExp(i.source,i.flags);return l.lastIndex=i.lastIndex,l}if(i instanceof Map){const l=new Map;c.set(i,l);for(const[g,w]of i)l.set(g,f(w,g,y,c,v));return l}if(i instanceof Set){const l=new Set;c.set(i,l);for(const g of i)l.add(f(g,void 0,y,c,v));return l}if(typeof Buffer<"u"&&Buffer.isBuffer(i))return i.subarray();if(o.isTypedArray(i)){const l=new(Object.getPrototypeOf(i)).constructor(i.length);c.set(i,l);for(let g=0;g<i.length;g++)l[g]=f(i[g],g,y,c,v);return l}if(i instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&i instanceof SharedArrayBuffer)return i.slice(0);if(i instanceof DataView){const l=new DataView(i.buffer.slice(0),i.byteOffset,i.byteLength);return c.set(i,l),h(l,i,y,c,v),l}if(typeof File<"u"&&i instanceof File){const l=new File([i],i.name,{type:i.type});return c.set(i,l),h(l,i,y,c,v),l}if(typeof Blob<"u"&&i instanceof Blob){const l=new Blob([i],{type:i.type});return c.set(i,l),h(l,i,y,c,v),l}if(i instanceof Error){const l=new i.constructor;return c.set(i,l),l.message=i.message,l.name=i.name,l.stack=i.stack,l.cause=i.cause,h(l,i,y,c,v),l}if(i instanceof Boolean){const l=new Boolean(i.valueOf());return c.set(i,l),h(l,i,y,c,v),l}if(i instanceof Number){const l=new Number(i.valueOf());return c.set(i,l),h(l,i,y,c,v),l}if(i instanceof String){const l=new String(i.valueOf());return c.set(i,l),h(l,i,y,c,v),l}if(typeof i=="object"&&m(i)){const l=Object.create(Object.getPrototypeOf(i));return c.set(i,l),h(l,i,y,c,v),l}return i}function h(i,s,y=i,c,v){const b=[...Object.keys(s),...t.getSymbols(s)];for(let l=0;l<b.length;l++){const g=b[l],w=Object.getOwnPropertyDescriptor(i,g);(w==null||w.writable)&&(i[g]=f(s[g],g,y,c,v))}}function m(i){switch(r.getTag(i)){case n.argumentsTag:case n.arrayTag:case n.arrayBufferTag:case n.dataViewTag:case n.booleanTag:case n.dateTag:case n.float32ArrayTag:case n.float64ArrayTag:case n.int8ArrayTag:case n.int16ArrayTag:case n.int32ArrayTag:case n.mapTag:case n.numberTag:case n.objectTag:case n.regexpTag:case n.setTag:case n.stringTag:case n.symbolTag:case n.uint8ArrayTag:case n.uint8ClampedArrayTag:case n.uint16ArrayTag:case n.uint32ArrayTag:return!0;default:return!1}}e.cloneDeepWith=u,e.cloneDeepWithImpl=f,e.copyProperties=h})(he)),he}var Ze;function rn(){return Ze||(Ze=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Lt();function r(n){return t.cloneDeepWithImpl(n,void 0,n,new Map,void 0)}e.cloneDeep=r})(fe)),fe}var Qe;function nn(){return Qe||(Qe=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=_t(),r=rn();function n(a){return a=r.cloneDeep(a),o=>t.isMatch(o,a)}e.matches=n})(ce)),ce}var ye={},me={},ve={},et;function an(){return et||(et=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Lt(),r=St();function n(a,o){return t.cloneDeepWith(a,(u,f,h,m)=>{const i=o==null?void 0:o(u,f,h,m);if(i!==void 0)return i;if(typeof a=="object")switch(Object.prototype.toString.call(a)){case r.numberTag:case r.stringTag:case r.booleanTag:{const s=new a.constructor(a==null?void 0:a.valueOf());return t.copyProperties(s,a),s}case r.argumentsTag:{const s={};return t.copyProperties(s,a),s.length=a.length,s[Symbol.iterator]=a[Symbol.iterator],s}default:return}})}e.cloneDeepWith=n})(ve)),ve}var tt;function on(){return tt||(tt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=an();function r(n){return t.cloneDeepWith(n)}e.cloneDeep=r})(me)),me}var ge={},be={},rt;function sn(){return rt||(rt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=At();function r(n){return n!==null&&typeof n=="object"&&t.getTag(n)==="[object Arguments]"}e.isArguments=r})(be)),be}var nt;function cn(){return nt||(nt=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Zt(),r=er(),n=sn(),a=Qt();function o(u,f){let h;if(Array.isArray(f)?h=f:typeof f=="string"&&t.isDeepKey(f)&&(u==null?void 0:u[f])==null?h=a.toPath(f):h=[f],h.length===0)return!1;let m=u;for(let i=0;i<h.length;i++){const s=h[i];if((m==null||!Object.hasOwn(m,s))&&!((Array.isArray(m)||n.isArguments(m))&&r.isIndex(s)&&s<m.length))return!1;m=m[s]}return!0}e.has=o})(ge)),ge}var it;function ln(){return it||(it=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=_t(),r=tr(),n=on(),a=jt(),o=cn();function u(f,h){switch(typeof f){case"object":{Object.is(f==null?void 0:f.valueOf(),-0)&&(f="-0");break}case"number":{f=r.toKey(f);break}}return h=n.cloneDeep(h),function(m){const i=a.get(m,f);return i===void 0?o.has(m,f):h===void 0?i===void 0:t.isMatch(i,h)}}e.matchesProperty=u})(ye)),ye}var at;function un(){return at||(at=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=It(),r=Qr(),n=nn(),a=ln();function o(u){if(u==null)return t.identity;switch(typeof u){case"function":return u;case"object":return Array.isArray(u)&&u.length===2?a.matchesProperty(u[0],u[1]):n.matches(u);case"string":case"symbol":case"number":return r.property(u)}}e.iteratee=o})(oe)),oe}var ot;function dn(){return ot||(ot=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Jr(),r=It(),n=Zr(),a=un();function o(u,f=r.identity){return n.isArrayLikeObject(u)?t.uniqBy(Array.from(u),a.iteratee(f)):[]}e.uniqBy=o})(te)),te}var xe,st;function fn(){return st||(st=1,xe=dn().uniqBy),xe}var hn=fn();const ct=Gr(hn);function kt(e,t,r){return t===!0?ct(e,r):typeof t=="function"?ct(e,t):e}function pn(){return j(rr)}var U=1;function qt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],[t,r]=p.useState({height:0,left:0,top:0,width:0}),n=p.useCallback(a=>{if(a!=null){var o=a.getBoundingClientRect(),u={height:o.height,left:o.left,top:o.top,width:o.width};(Math.abs(u.height-t.height)>U||Math.abs(u.left-t.left)>U||Math.abs(u.top-t.top)>U||Math.abs(u.width-t.width)>U)&&r({height:u.height,left:u.left,top:u.top,width:u.width})}},[t.width,t.height,t.top,t.left,...e]);return[t,n]}var yn=["contextPayload"];function je(){return je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},je.apply(null,arguments)}function lt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?lt(Object(r),!0).forEach(function(n){ke(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):lt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ke(e,t,r){return(t=mn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function mn(e){var t=vn(e,"string");return typeof t=="symbol"?t:t+""}function vn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function gn(e,t){if(e==null)return{};var r,n,a=bn(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function bn(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function xn(e){return e.value}function wn(e){var{contextPayload:t}=e,r=gn(e,yn),n=kt(t,e.payloadUniqBy,xn),a=$($({},r),{},{payload:n});return p.isValidElement(e.content)?p.cloneElement(e.content,a):typeof e.content=="function"?p.createElement(e.content,a):p.createElement(Le,a)}function Pn(e,t,r,n,a,o){var{layout:u,align:f,verticalAlign:h}=t,m,i;return(!e||(e.left===void 0||e.left===null)&&(e.right===void 0||e.right===null))&&(f==="center"&&u==="vertical"?m={left:((n||0)-o.width)/2}:m=f==="right"?{right:r&&r.right||0}:{left:r&&r.left||0}),(!e||(e.top===void 0||e.top===null)&&(e.bottom===void 0||e.bottom===null))&&(h==="middle"?i={top:((a||0)-o.height)/2}:i=h==="bottom"?{bottom:r&&r.bottom||0}:{top:r&&r.top||0}),$($({},m),i)}function On(e){var t=H();return p.useEffect(()=>{t(sr(e))},[t,e]),null}function jn(e){var t=H();return p.useEffect(()=>(t(Te(e)),()=>{t(Te({width:0,height:0}))}),[t,e]),null}function An(e){var t=pn(),r=nr(),n=ir(),{width:a,height:o,wrapperStyle:u,portal:f}=e,[h,m]=qt([t]),i=ar(),s=or(),y=i-(n.left||0)-(n.right||0),c=ee.getWidthOrHeight(e.layout,o,a,y),v=f?u:$($({position:"absolute",width:(c==null?void 0:c.width)||a||"auto",height:(c==null?void 0:c.height)||o||"auto"},Pn(u,e,n,i,s,h)),u),b=f??r;if(b==null)return null;var l=p.createElement("div",{className:"recharts-legend-wrapper",style:v,ref:m},p.createElement(On,{layout:e.layout,align:e.align,verticalAlign:e.verticalAlign,itemSorter:e.itemSorter}),p.createElement(jn,{width:h.width,height:h.height}),p.createElement(wn,je({},e,c,{margin:n,chartWidth:i,chartHeight:s,contextPayload:t})));return Rt.createPortal(l,b)}class ee extends p.PureComponent{static getWidthOrHeight(t,r,n,a){return t==="vertical"&&O(r)?{height:r}:t==="horizontal"?{width:n||a}:null}render(){return p.createElement(An,this.props)}}ke(ee,"displayName","Legend");ke(ee,"defaultProps",{align:"center",iconSize:14,itemSorter:"value",layout:"horizontal",verticalAlign:"bottom"});function Ae(){return Ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ae.apply(null,arguments)}function ut(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ut(Object(r),!0).forEach(function(n){Sn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ut(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Sn(e,t,r){return(t=Dn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Dn(e){var t=En(e,"string");return typeof t=="symbol"?t:t+""}function En(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bn(e){return Array.isArray(e)&&V(e[0])&&V(e[1])?e.join(" ~ "):e}var Rn=e=>{var{separator:t=" : ",contentStyle:r={},itemStyle:n={},labelStyle:a={},payload:o,formatter:u,itemSorter:f,wrapperClassName:h,labelClassName:m,label:i,labelFormatter:s,accessibilityLayer:y=!1}=e,c=()=>{if(o&&o.length){var A={padding:0,margin:0},E=(f?lr(o,f):o).map((B,L)=>{if(B.type==="none")return null;var R=B.formatter||u||Bn,{value:T,name:F}=B,N=T,q=F;if(R){var M=R(T,F,B,L,o);if(Array.isArray(M))[N,q]=M;else if(M!=null)N=M;else return null}var _=we({display:"block",paddingTop:4,paddingBottom:4,color:B.color||"#000"},n);return p.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(L),style:_},V(q)?p.createElement("span",{className:"recharts-tooltip-item-name"},q):null,V(q)?p.createElement("span",{className:"recharts-tooltip-item-separator"},t):null,p.createElement("span",{className:"recharts-tooltip-item-value"},N),p.createElement("span",{className:"recharts-tooltip-item-unit"},B.unit||""))});return p.createElement("ul",{className:"recharts-tooltip-item-list",style:A},E)}return null},v=we({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},r),b=we({margin:0},a),l=!cr(i),g=l?i:"",w=k("recharts-default-tooltip",h),x=k("recharts-tooltip-label",m);l&&s&&o!==void 0&&o!==null&&(g=s(i,o));var P=y?{role:"status","aria-live":"assertive"}:{};return p.createElement("div",Ae({className:w,style:v},P),p.createElement("p",{className:x,style:b},p.isValidElement(g)?g:"".concat(g)),c())},K="recharts-tooltip-wrapper",In={visibility:"hidden"};function Mn(e){var{coordinate:t,translateX:r,translateY:n}=e;return k(K,{["".concat(K,"-right")]:O(r)&&t&&O(t.x)&&r>=t.x,["".concat(K,"-left")]:O(r)&&t&&O(t.x)&&r<t.x,["".concat(K,"-bottom")]:O(n)&&t&&O(t.y)&&n>=t.y,["".concat(K,"-top")]:O(n)&&t&&O(t.y)&&n<t.y})}function dt(e){var{allowEscapeViewBox:t,coordinate:r,key:n,offsetTopLeft:a,position:o,reverseDirection:u,tooltipDimension:f,viewBox:h,viewBoxDimension:m}=e;if(o&&O(o[n]))return o[n];var i=r[n]-f-(a>0?a:0),s=r[n]+a;if(t[n])return u[n]?i:s;var y=h[n];if(y==null)return 0;if(u[n]){var c=i,v=y;return c<v?Math.max(s,y):Math.max(i,y)}if(m==null)return 0;var b=s+f,l=y+m;return b>l?Math.max(i,y):Math.max(s,y)}function _n(e){var{translateX:t,translateY:r,useTranslate3d:n}=e;return{transform:n?"translate3d(".concat(t,"px, ").concat(r,"px, 0)"):"translate(".concat(t,"px, ").concat(r,"px)")}}function Ln(e){var{allowEscapeViewBox:t,coordinate:r,offsetTopLeft:n,position:a,reverseDirection:o,tooltipBox:u,useTranslate3d:f,viewBox:h}=e,m,i,s;return u.height>0&&u.width>0&&r?(i=dt({allowEscapeViewBox:t,coordinate:r,key:"x",offsetTopLeft:n,position:a,reverseDirection:o,tooltipDimension:u.width,viewBox:h,viewBoxDimension:h.width}),s=dt({allowEscapeViewBox:t,coordinate:r,key:"y",offsetTopLeft:n,position:a,reverseDirection:o,tooltipDimension:u.height,viewBox:h,viewBoxDimension:h.height}),m=_n({translateX:i,translateY:s,useTranslate3d:f})):m=In,{cssProperties:m,cssClasses:Mn({translateX:i,translateY:s,coordinate:r})}}function ft(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ft(Object(r),!0).forEach(function(n){Se(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ft(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Se(e,t,r){return(t=kn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function kn(e){var t=qn(e,"string");return typeof t=="symbol"?t:t+""}function qn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class Cn extends p.PureComponent{constructor(){super(...arguments),Se(this,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}),Se(this,"handleKeyDown",t=>{if(t.key==="Escape"){var r,n,a,o;this.setState({dismissed:!0,dismissedAtCoordinate:{x:(r=(n=this.props.coordinate)===null||n===void 0?void 0:n.x)!==null&&r!==void 0?r:0,y:(a=(o=this.props.coordinate)===null||o===void 0?void 0:o.y)!==null&&a!==void 0?a:0}})}})}componentDidMount(){document.addEventListener("keydown",this.handleKeyDown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}componentDidUpdate(){var t,r;this.state.dismissed&&(((t=this.props.coordinate)===null||t===void 0?void 0:t.x)!==this.state.dismissedAtCoordinate.x||((r=this.props.coordinate)===null||r===void 0?void 0:r.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}render(){var{active:t,allowEscapeViewBox:r,animationDuration:n,animationEasing:a,children:o,coordinate:u,hasPayload:f,isAnimationActive:h,offset:m,position:i,reverseDirection:s,useTranslate3d:y,viewBox:c,wrapperStyle:v,lastBoundingBox:b,innerRef:l,hasPortalFromProps:g}=this.props,{cssClasses:w,cssProperties:x}=Ln({allowEscapeViewBox:r,coordinate:u,offsetTopLeft:m,position:i,reverseDirection:s,tooltipBox:{height:b.height,width:b.width},useTranslate3d:y,viewBox:c}),P=g?{}:X(X({transition:h&&t?"transform ".concat(n,"ms ").concat(a):void 0},x),{},{pointerEvents:"none",visibility:!this.state.dismissed&&t&&f?"visible":"hidden",position:"absolute",top:0,left:0}),A=X(X({},P),{},{visibility:!this.state.dismissed&&t&&f?"visible":"hidden"},v);return p.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",tabIndex:-1,className:w,style:A,ref:l},o)}}var $n=["x","y","top","left","width","height","className"];function De(){return De=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},De.apply(null,arguments)}function ht(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Tn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ht(Object(r),!0).forEach(function(n){Nn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ht(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Nn(e,t,r){return(t=Wn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Wn(e){var t=Kn(e,"string");return typeof t=="symbol"?t:t+""}function Kn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hn(e,t){if(e==null)return{};var r,n,a=zn(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function zn(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var Fn=(e,t,r,n,a,o)=>"M".concat(e,",").concat(a,"v").concat(n,"M").concat(o,",").concat(t,"h").concat(r),Gn=e=>{var{x:t=0,y:r=0,top:n=0,left:a=0,width:o=0,height:u=0,className:f}=e,h=Hn(e,$n),m=Tn({x:t,y:r,top:n,left:a,width:o,height:u},h);return!O(t)||!O(r)||!O(o)||!O(u)||!O(n)||!O(a)?null:p.createElement("path",De({},Dt(m,!0),{className:k("recharts-cross",f),d:Fn(t,r,o,u,n,a)}))};function Yn(e,t,r,n){var a=n/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:r.left+.5,y:e==="horizontal"?r.top+.5:t.y-a,width:e==="horizontal"?n:r.width-1,height:e==="horizontal"?r.height-1:n}}function Ct(e){var{cx:t,cy:r,radius:n,startAngle:a,endAngle:o}=e,u=Z(t,r,n,a),f=Z(t,r,n,o);return{points:[u,f],cx:t,cy:r,radius:n,startAngle:a,endAngle:o}}function Un(e,t,r){var n,a,o,u;if(e==="horizontal")n=t.x,o=n,a=r.top,u=r.top+r.height;else if(e==="vertical")a=t.y,u=a,n=r.left,o=r.left+r.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var{cx:f,cy:h,innerRadius:m,outerRadius:i,angle:s}=t,y=Z(f,h,m,s),c=Z(f,h,i,s);n=y.x,a=y.y,o=c.x,u=c.y}else return Ct(t);return[{x:n,y:a},{x:o,y:u}]}function pt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function yt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?pt(Object(r),!0).forEach(function(n){Xn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Xn(e,t,r){return(t=Jn(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Jn(e){var t=Vn(e,"string");return typeof t=="symbol"?t:t+""}function Vn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Zn=()=>j(hr),Qn=()=>{var e=Zn(),t=j(ur),r=j(dr);return fr(yt(yt({},e),{},{scale:r}),t)};function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ee.apply(null,arguments)}function mt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?mt(Object(r),!0).forEach(function(n){ei(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):mt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ei(e,t,r){return(t=ti(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ti(e){var t=ri(e,"string");return typeof t=="symbol"?t:t+""}function ri(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ni(e){var{coordinate:t,payload:r,index:n,offset:a,tooltipAxisBandSize:o,layout:u,cursor:f,tooltipEventType:h,chartName:m}=e,i=t,s=r,y=n;if(!f||!i||m!=="ScatterChart"&&h!=="axis")return null;var c,v;if(m==="ScatterChart")c=i,v=Gn;else if(m==="BarChart")c=Yn(u,i,a,o),v=vr;else if(u==="radial"){var{cx:b,cy:l,radius:g,startAngle:w,endAngle:x}=Ct(i);c={cx:b,cy:l,startAngle:w,endAngle:x,innerRadius:g,outerRadius:g},v=gr}else c={points:Un(u,i,a)},v=br;var P=typeof f=="object"&&"className"in f?f.className:void 0,A=J(J(J(J({stroke:"#ccc",pointerEvents:"none"},a),c),Dt(f,!1)),{},{payload:s,payloadIndex:y,className:k("recharts-tooltip-cursor",P)});return p.isValidElement(f)?p.cloneElement(f,A):p.createElement(v,A)}function ii(e){var t=Qn(),r=pr(),n=yr(),a=mr();return p.createElement(ni,Ee({},e,{coordinate:e.coordinate,index:e.index,payload:e.payload,offset:r,layout:n,tooltipAxisBandSize:t,chartName:a}))}function vt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function gt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?vt(Object(r),!0).forEach(function(n){ai(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ai(e,t,r){return(t=oi(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oi(e){var t=si(e,"string");return typeof t=="symbol"?t:t+""}function si(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ci(e){return e.dataKey}function li(e,t){return p.isValidElement(e)?p.cloneElement(e,t):typeof e=="function"?p.createElement(e,t):p.createElement(Rn,t)}var bt=[],ui={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",axisId:0,contentStyle:{},cursor:!0,filterNull:!0,isAnimationActive:!Rr.isSsr,itemSorter:"name",itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,wrapperStyle:{}};function qe(e){var t=xr(e,ui),{active:r,allowEscapeViewBox:n,animationDuration:a,animationEasing:o,content:u,filterNull:f,isAnimationActive:h,offset:m,payloadUniqBy:i,position:s,reverseDirection:y,useTranslate3d:c,wrapperStyle:v,cursor:b,shared:l,trigger:g,defaultIndex:w,portal:x,axisId:P}=t,A=H(),E=typeof w=="number"?String(w):w;p.useEffect(()=>{A(wr({shared:l,trigger:g,axisId:P,active:r,defaultIndex:E}))},[A,l,g,P,r,E]);var B=Pr(),L=Or(),R=jr(l),{activeIndex:T,isActive:F}=j(I=>Dr(I,R,g,E)),N=j(I=>Er(I,R,g,E)),q=j(I=>Ir(I,R,g,E)),M=j(I=>Br(I,R,g,E)),_=N,Tt=Ar(),C=r??F,[Nt,Wt]=qt([_,C]),Ce=R==="axis"?q:void 0;Sr(R,g,M,Ce,T,C);var $e=x??Tt;if($e==null)return null;var W=_??bt;C||(W=bt),f&&W.length&&(W=kt(_.filter(I=>I.value!=null&&(I.hide!==!0||t.includeHidden)),i,ci));var Kt=W.length>0,Ht=p.createElement(Cn,{allowEscapeViewBox:n,animationDuration:a,animationEasing:o,isAnimationActive:h,active:C,coordinate:M,hasPayload:Kt,offset:m,position:s,reverseDirection:y,useTranslate3d:c,viewBox:B,wrapperStyle:v,lastBoundingBox:Nt,innerRef:Wt,hasPortalFromProps:!!x},li(u,gt(gt({},t),{},{payload:W,label:Ce,active:C,coordinate:M,accessibilityLayer:L})));return p.createElement(p.Fragment,null,Rt.createPortal(Ht,$e),C&&p.createElement(ii,{cursor:b,tooltipEventType:R,coordinate:M,payload:_,index:T}))}var di=e=>{var{ticks:t,label:r,labelGapWithTick:n=5,tickSize:a=0,tickMargin:o=0}=e,u=0;if(t){t.forEach(i=>{if(i){var s=i.getBoundingClientRect();s.width>u&&(u=s.width)}});var f=r?r.getBoundingClientRect().width:0,h=a+o,m=u+h+f+(r?n:0);return Math.round(m)}return 0},fi=["dangerouslySetInnerHTML","ticks"];function $t(e,t,r){return(t=hi(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function hi(e){var t=pi(e,"string");return typeof t=="symbol"?t:t+""}function pi(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Be(){return Be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Be.apply(null,arguments)}function yi(e,t){if(e==null)return{};var r,n,a=mi(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function mi(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function vi(e){var t=H();return p.useEffect(()=>(t(Mr(e)),()=>{t(_r(e))}),[e,t]),null}var gi=e=>{var t,{yAxisId:r,className:n,width:a,label:o}=e,u=p.useRef(null),f=p.useRef(null),h=j(Lr),m=kr(),i=H(),s="yAxis",y=j(x=>qr(x,s,r,m)),c=j(x=>Cr(x,r)),v=j(x=>$r(x,r)),b=j(x=>Tr(x,s,r,m));if(p.useLayoutEffect(()=>{var x;if(!(a!=="auto"||!c||Nr(o)||p.isValidElement(o))){var P=u.current,A=P==null||(x=P.tickRefs)===null||x===void 0?void 0:x.current,{tickSize:E,tickMargin:B}=P.props,L=di({ticks:A,label:f.current,labelGapWithTick:5,tickSize:E,tickMargin:B});Math.round(c.width)!==Math.round(L)&&i(Wr({id:r,width:L}))}},[u,u==null||(t=u.current)===null||t===void 0||(t=t.tickRefs)===null||t===void 0?void 0:t.current,c==null?void 0:c.width,c,i,o,r,a]),c==null||v==null)return null;var{dangerouslySetInnerHTML:l,ticks:g}=e,w=yi(e,fi);return p.createElement(Kr,Be({},w,{ref:u,labelRef:f,scale:y,x:v.x,y:v.y,width:c.width,height:c.height,className:k("recharts-".concat(s," ").concat(s),n),viewBox:h,ticks:b}))},bi=e=>{var t,r,n,a,o;return p.createElement(p.Fragment,null,p.createElement(vi,{interval:(t=e.interval)!==null&&t!==void 0?t:"preserveEnd",id:e.yAxisId,scale:e.scale,type:e.type,domain:e.domain,allowDataOverflow:e.allowDataOverflow,dataKey:e.dataKey,allowDuplicatedCategory:e.allowDuplicatedCategory,allowDecimals:e.allowDecimals,tickCount:e.tickCount,padding:e.padding,includeHidden:(r=e.includeHidden)!==null&&r!==void 0?r:!1,reversed:e.reversed,ticks:e.ticks,width:e.width,orientation:e.orientation,mirror:e.mirror,hide:e.hide,unit:e.unit,name:e.name,angle:(n=e.angle)!==null&&n!==void 0?n:0,minTickGap:(a=e.minTickGap)!==null&&a!==void 0?a:5,tick:(o=e.tick)!==null&&o!==void 0?o:!0,tickFormatter:e.tickFormatter}),p.createElement(gi,e))},xi={allowDataOverflow:D.allowDataOverflow,allowDecimals:D.allowDecimals,allowDuplicatedCategory:D.allowDuplicatedCategory,hide:!1,mirror:D.mirror,orientation:D.orientation,padding:D.padding,reversed:D.reversed,scale:D.scale,tickCount:D.tickCount,type:D.type,width:D.width,yAxisId:0};class z extends p.Component{render(){return p.createElement(bi,this.props)}}$t(z,"displayName","YAxis");$t(z,"defaultProps",xi);const wi=[{date:"Mar 23",conservative:100,tech:100},{date:"Apr 23",conservative:101,tech:115},{date:"May 23",conservative:101,tech:130},{date:"Jun 23",conservative:102,tech:125},{date:"Jul 23",conservative:102,tech:140},{date:"Aug 23",conservative:102,tech:135},{date:"Sep 23",conservative:103,tech:150},{date:"Oct 23",conservative:103,tech:145},{date:"Nov 23",conservative:103,tech:155},{date:"Dec 23",conservative:104,tech:160},{date:"Jan 24",conservative:104,tech:165},{date:"Feb 24",conservative:104,tech:170},{date:"Mar 24",conservative:105,tech:180}];function Pi(){return d.jsx(Q,{width:"100%",height:"100%",children:d.jsxs(Hr,{data:wi,children:[d.jsx(Ie,{strokeDasharray:"4 ",vertical:!1}),d.jsx(Me,{dataKey:"date"}),d.jsx(z,{domain:[100,"dataMax + 20"]}),d.jsx(qe,{}),d.jsx(ee,{}),d.jsx(Ne,{type:"monotone",dataKey:"conservative",stroke:"var(--bs-primary)",activeDot:{r:8,stroke:"var(--bs-primary-100)",strokeWidth:2},dot:!1,name:"Conservative Differentiated Oct24"}),d.jsx(Ne,{type:"monotone",dataKey:"tech",stroke:"var(--bs-secondary)",activeDot:{r:8,stroke:"var(--bs-secondary-100)",strokeWidth:2},dot:!1,name:"Technological"})]})})}const xt=["var(--bs-primary)","var(--bs-primary-300)","var(--bs-primary-100)","var(--bs-primary-600)"],Re=[{id:1,name:"Group A",value:6500},{id:2,name:"Group B",value:1200},{id:3,name:"Group C",value:10200},{id:4,name:"Group D",value:2100}],Oi=Re.reduce((e,t)=>e+t.value,0),ji=({cx:e,cy:t})=>d.jsx("text",{x:e,y:t,fill:"var(--bs-gray-900)",textAnchor:"middle",dominantBaseline:"central",className:"fs-3",children:`$${Oi.toLocaleString()}`});function Ai(){return d.jsx(Q,{width:"100%",height:"100%",children:d.jsx(zr,{children:d.jsx(Fr,{data:Re,cx:"50%",cy:"50%",innerRadius:76,dataKey:"value",label:ji,labelLine:!1,children:Re.map((e,t)=>d.jsx(Et,{fill:xt[t%xt.length]},e.id))})})})}const Si=[{name:"Jan 23",value:5e4},{name:"Mar 23",value:75e3},{name:"May 23",value:1e5},{name:"Jul 23",value:8e4},{name:"Sep 23",value:7e4},{name:"Nov 23",value:6e4}];function Di(){return d.jsx(Q,{width:"100%",height:"100%",children:d.jsxs(Bt,{data:Si,barCategoryGap:"25%",children:[d.jsx(Ie,{strokeDasharray:"4 ",vertical:!1}),d.jsx(Me,{dataKey:"name"}),d.jsx(z,{domain:[0,"dataMax + 10000"],tickFormatter:e=>`$${(e/1e3).toFixed(0)}K`}),d.jsx(qe,{formatter:e=>`$${e.toLocaleString()}`,cursor:{fill:"var(--bs-secondary-100)"}}),d.jsx(Pe,{dataKey:"value",fill:"var(--bs-secondary)"})]})})}const wt=[{id:1,name:"Item A",value:22500,down:0,color:"var(--bs-blue)"},{id:2,name:"Item B",value:1e3,down:21500,color:"var(--bs-orange)"},{id:3,name:"Item C",value:2e3,down:19500,color:"var(--bs-orange)"},{id:4,name:"Item D",value:3e3,down:16500,color:"var(--bs-orange)"},{id:5,name:"Item E",value:16500,down:0,color:"var(--bs-green)"},{id:6,name:"Item F",value:1e3,down:16500,color:"var(--bs-blue)"},{id:7,name:"Item G",value:8e3,down:16500,color:"var(--bs-blue)"},{id:8,name:"Item H",value:24500,down:0,color:"var(--bs-green)"}];function Ei(){return d.jsx(Q,{width:"100%",height:"100%",children:d.jsxs(Bt,{data:wt,children:[d.jsx(Ie,{strokeDasharray:"4 ",vertical:!1}),d.jsx(Me,{dataKey:"name"}),d.jsx(z,{domain:[0,"dataMax + 10000"]}),d.jsx(qe,{formatter:e=>`$${e.toLocaleString()}`,cursor:{fill:"var(--bs-gray-100)"}}),d.jsx(Pe,{dataKey:"down",stackId:"a",fill:"transparent"}),d.jsx(Pe,{dataKey:"value",stackId:"a",children:wt.map(e=>d.jsx(Et,{fill:e.color},e.id))})]})})}function Pt(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...Ot(),...e.components};return d.jsxs(d.Fragment,{children:[d.jsx(zt,{title:"Design System/Examples/Graphs"}),`
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
`,d.jsx(G,{children:d.jsx("div",{style:{height:"300px"},children:d.jsx(Pi,{})})}),`
`,d.jsx(Y,{code:`
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
`,d.jsx(G,{children:d.jsx("div",{style:{height:"300px"},children:d.jsx(Ai,{})})}),`
`,d.jsx(Y,{code:`
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
`,d.jsx(G,{children:d.jsx("div",{style:{height:"300px"},children:d.jsx(Di,{})})}),`
`,d.jsx(Y,{code:`
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
`,d.jsx(G,{children:d.jsx("div",{style:{height:"300px"},children:d.jsx(Ei,{})})}),`
`,d.jsx(Y,{code:`
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
`,language:"tsx",dark:!0})]})}function Ci(e={}){const{wrapper:t}={...Ot(),...e.components};return t?d.jsx(t,{...e,children:d.jsx(Pt,{...e})}):Pt(e)}export{Ci as default};
