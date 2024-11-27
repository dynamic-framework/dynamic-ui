import{r as u,a as qe}from"./index-CBqU2yxZ.js";import{i as it,b as re,c as Fe,d as at,p as ct,e as U,g as he,h as lt,j as ft,k as dt,l as mt}from"./floating-ui.dom-Hl2SHHju.js";import{r as je}from"./index-BtM5VmRH.js";function Q(e){let t=e.activeElement;for(;((n=t)==null||(r=n.shadowRoot)==null?void 0:r.activeElement)!=null;){var n,r;t=t.shadowRoot.activeElement}return t}function j(e,t){if(!e||!t)return!1;const n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&it(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Ue(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function vt(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function pt(e){return e.mozInputSource===0&&e.isTrusted?!0:Ge()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Ye(e){return!Ge()&&e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Xe(){return/apple/i.test(navigator.vendor)}function Ge(){const e=/android/i;return e.test(Ue())||e.test(vt())}function gt(){return Ue().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function de(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function bt(e){return"nativeEvent"in e}function ht(e){return e.matches("html,body")}function Y(e){return(e==null?void 0:e.ownerDocument)||document}function ye(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function J(e){return"composedPath"in e?e.composedPath()[0]:e.target}const yt="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Ce(e){return re(e)&&e.matches(yt)}function Ee(e){e.preventDefault(),e.stopPropagation()}const sn=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Fe({element:r.current,padding:o}).fn(n):{}:r?Fe({element:r,padding:o}).fn(n):{}}}};var fe=typeof document<"u"?u.useLayoutEffect:u.useEffect;function me(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!me(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const s=o[r];if(!(s==="_owner"&&e.$$typeof)&&!me(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function Ze(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function De(e,t){const n=Ze(e);return Math.round(t*n)/n}function Ae(e){const t=u.useRef(e);return fe(()=>{t.current=e}),t}function Et(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:s,floating:a}={},transform:c=!0,whileElementsMounted:l,open:d}=e,[g,R]=u.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[b,i]=u.useState(r);me(b,r)||i(r);const[f,v]=u.useState(null),[O,y]=u.useState(null),m=u.useCallback(M=>{M!=N.current&&(N.current=M,v(M))},[v]),A=u.useCallback(M=>{M!==I.current&&(I.current=M,y(M))},[y]),h=s||f,C=a||O,N=u.useRef(null),I=u.useRef(null),W=u.useRef(g),V=Ae(l),H=Ae(o),E=u.useCallback(()=>{if(!N.current||!I.current)return;const M={placement:t,strategy:n,middleware:b};H.current&&(M.platform=H.current),at(N.current,I.current,M).then(w=>{const p={...w,isPositioned:!0};$.current&&!me(W.current,p)&&(W.current=p,je.flushSync(()=>{R(p)}))})},[b,t,n,H]);fe(()=>{d===!1&&W.current.isPositioned&&(W.current.isPositioned=!1,R(M=>({...M,isPositioned:!1})))},[d]);const $=u.useRef(!1);fe(()=>($.current=!0,()=>{$.current=!1}),[]),fe(()=>{if(h&&(N.current=h),C&&(I.current=C),h&&C){if(V.current)return V.current(h,C,E);E()}},[h,C,E,V]);const K=u.useMemo(()=>({reference:N,floating:I,setReference:m,setFloating:A}),[m,A]),x=u.useMemo(()=>({reference:h,floating:C}),[h,C]),S=u.useMemo(()=>{const M={position:n,left:0,top:0};if(!x.floating)return M;const w=De(x.floating,g.x),p=De(x.floating,g.y);return c?{...M,transform:"translate("+w+"px, "+p+"px)",...Ze(x.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:w,top:p}},[n,c,x.floating,g.x,g.y]);return u.useMemo(()=>({...g,update:E,refs:K,elements:x,floatingStyles:S}),[g,E,K,x,S])}/*!
* tabbable 6.0.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Rt=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Se=Rt.join(","),Qe=typeof Element>"u",ie=Qe?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ve=!Qe&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},wt=function(t,n,r){var o=Array.prototype.slice.apply(t.querySelectorAll(Se));return n&&ie.call(t,Se)&&o.unshift(t),o=o.filter(r),o},xt=function e(t,n,r){for(var o=[],s=Array.from(t);s.length;){var a=s.shift();if(a.tagName==="SLOT"){var c=a.assignedElements(),l=c.length?c:a.children,d=e(l,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else{var g=ie.call(a,Se);g&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var R=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),b=!r.shadowRootFilter||r.shadowRootFilter(a);if(R&&b){var i=e(R===!0?a.children:R.children,!0,r);r.flatten?o.push.apply(o,i):o.push({scopeParent:a,candidates:i})}else s.unshift.apply(s,a.children)}}return o},ze=function(t,n){return t.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},Tt=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},Je=function(t){return t.tagName==="INPUT"},St=function(t){return Je(t)&&t.type==="hidden"},Ct=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},Pt=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},kt=function(t){if(!t.name)return!0;var n=t.form||ve(t),r=function(c){return n.querySelectorAll('input[type="radio"][name="'+c+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var s=Pt(o,t.form);return!s||s===t},Mt=function(t){return Je(t)&&t.type==="radio"},It=function(t){return Mt(t)&&!kt(t)},Ft=function(t){for(var n,r=ve(t).host,o=!!((n=r)!==null&&n!==void 0&&n.ownerDocument.contains(r)||t.ownerDocument.contains(t));!o&&r;){var s;r=ve(r).host,o=!!((s=r)!==null&&s!==void 0&&s.ownerDocument.contains(r))}return o},Le=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},Dt=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var s=ie.call(t,"details>summary:first-of-type"),a=s?t.parentElement:t;if(ie.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof o=="function"){for(var c=t;t;){var l=t.parentElement,d=ve(t);if(l&&!l.shadowRoot&&o(l)===!0)return Le(t);t.assignedSlot?t=t.assignedSlot:!l&&d!==t.ownerDocument?t=d.host:t=l}t=c}if(Ft(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return Le(t);return!1},At=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return ie.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},Lt=function(t,n){return!(n.disabled||St(n)||Dt(n,t)||Ct(n)||At(n))},Oe=function(t,n){return!(It(n)||ze(n)<0||!Lt(t,n))},Ot=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},Nt=function e(t){var n=[],r=[];return t.forEach(function(o,s){var a=!!o.scopeParent,c=a?o.scopeParent:o,l=ze(c,a),d=a?e(o.candidates):c;l===0?a?n.push.apply(n,d):n.push(c):r.push({documentOrder:s,tabIndex:l,item:o,isScope:a,content:d})}),r.sort(Tt).reduce(function(o,s){return s.isScope?o.push.apply(o,s.content):o.push(s.content),o},[]).concat(n)},Pe=function(t,n){n=n||{};var r;return n.getShadowRoot?r=xt([t],n.includeContainer,{filter:Oe.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:Ot}):r=wt(t,n.includeContainer,Oe.bind(null,n)),Nt(r)};const _t=qe.useInsertionEffect,Kt=_t||(e=>e());function ne(e){const t=u.useRef(()=>{});return Kt(()=>{t.current=e}),u.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}let Ne=0;function z(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(Ne);const s=()=>e==null?void 0:e.focus({preventScroll:n});o?s():Ne=requestAnimationFrame(s)}var G=typeof document<"u"?u.useLayoutEffect:u.useEffect;function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ae.apply(this,arguments)}let Re=!1,Bt=0;const _e=()=>"floating-ui-"+Bt++;function Ht(){const[e,t]=u.useState(()=>Re?_e():void 0);return G(()=>{e==null&&t(_e())},[]),u.useEffect(()=>{Re||(Re=!0)},[]),e}const $t=qe.useId,ge=$t||Ht,un=u.forwardRef(function(t,n){let{context:{placement:r,elements:{floating:o},middlewareData:{arrow:s}},width:a=14,height:c=7,tipRadius:l=0,strokeWidth:d=0,staticOffset:g,stroke:R,d:b,style:{transform:i,...f}={},...v}=t;const O=ge();if(!o)return null;d*=2;const y=d/2,m=a/2*(l/-8+1),A=c/2*l/4,[h,C]=r.split("-"),N=ct.isRTL(o),I=!!b,W=h==="top"||h==="bottom",V=g&&C==="end"?"bottom":"top";let H=g&&C==="end"?"right":"left";g&&N&&(H=C==="end"?"left":"right");const E=(s==null?void 0:s.x)!=null?g||s.x:"",$=(s==null?void 0:s.y)!=null?g||s.y:"",K=b||"M0,0"+(" H"+a)+(" L"+(a-m)+","+(c-A))+(" Q"+a/2+","+c+" "+m+","+(c-A))+" Z",x={top:I?"rotate(180deg)":"",left:I?"rotate(90deg)":"rotate(-90deg)",bottom:I?"":"rotate(180deg)",right:I?"rotate(-90deg)":"rotate(90deg)"}[h];return u.createElement("svg",ae({},v,{"aria-hidden":!0,ref:n,width:I?a:a+d,height:a,viewBox:"0 0 "+a+" "+(c>a?c:a),style:{position:"absolute",pointerEvents:"none",[H]:E,[V]:$,[h]:W||I?"100%":"calc(100% - "+d/2+"px)",transform:""+x+(i??""),...f}}),d>0&&u.createElement("path",{clipPath:"url(#"+O+")",fill:"none",stroke:R,strokeWidth:d+(b?0:1),d:K}),u.createElement("path",{stroke:d&&!b?v.fill:"none",d:K}),u.createElement("clipPath",{id:O},u.createElement("rect",{x:-y,y:y*(I?-1:1),width:a+d,height:a})))});function Wt(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,((r=e.get(t))==null?void 0:r.filter(o=>o!==n))||[])}}}const Vt=u.createContext(null),qt=u.createContext(null),et=()=>{var e;return((e=u.useContext(Vt))==null?void 0:e.id)||null},be=()=>u.useContext(qt);function ee(e){return"data-floating-ui-"+e}function oe(e){const t=u.useRef(e);return G(()=>{t.current=e}),t}const Ke=ee("safe-polygon");function we(e,t,n){return n&&!de(n)?0:typeof e=="number"?e:e==null?void 0:e[t]}function an(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,events:s,elements:{domReference:a,floating:c},refs:l}=e,{enabled:d=!0,delay:g=0,handleClose:R=null,mouseOnly:b=!1,restMs:i=0,move:f=!0}=t,v=be(),O=et(),y=oe(R),m=oe(g),A=u.useRef(),h=u.useRef(),C=u.useRef(),N=u.useRef(),I=u.useRef(!0),W=u.useRef(!1),V=u.useRef(()=>{}),H=u.useCallback(()=>{var x;const S=(x=o.current.openEvent)==null?void 0:x.type;return(S==null?void 0:S.includes("mouse"))&&S!=="mousedown"},[o]);u.useEffect(()=>{if(!d)return;function x(){clearTimeout(h.current),clearTimeout(N.current),I.current=!0}return s.on("dismiss",x),()=>{s.off("dismiss",x)}},[d,s]),u.useEffect(()=>{if(!d||!y.current||!n)return;function x(M){H()&&r(!1,M)}const S=Y(c).documentElement;return S.addEventListener("mouseleave",x),()=>{S.removeEventListener("mouseleave",x)}},[c,n,r,d,y,o,H]);const E=u.useCallback(function(x,S){S===void 0&&(S=!0);const M=we(m.current,"close",A.current);M&&!C.current?(clearTimeout(h.current),h.current=setTimeout(()=>r(!1,x),M)):S&&(clearTimeout(h.current),r(!1,x))},[m,r]),$=u.useCallback(()=>{V.current(),C.current=void 0},[]),K=u.useCallback(()=>{if(W.current){const x=Y(l.floating.current).body;x.style.pointerEvents="",x.removeAttribute(Ke),W.current=!1}},[l]);return u.useEffect(()=>{if(!d)return;function x(){return o.current.openEvent?["click","mousedown"].includes(o.current.openEvent.type):!1}function S(p){if(clearTimeout(h.current),I.current=!1,b&&!de(A.current)||i>0&&we(m.current,"open")===0)return;const P=we(m.current,"open",A.current);P?h.current=setTimeout(()=>{r(!0,p)},P):r(!0,p)}function M(p){if(x())return;V.current();const P=Y(c);if(clearTimeout(N.current),y.current){n||clearTimeout(h.current),C.current=y.current({...e,tree:v,x:p.clientX,y:p.clientY,onClose(){K(),$(),E(p)}});const X=C.current;P.addEventListener("mousemove",X),V.current=()=>{P.removeEventListener("mousemove",X)};return}(A.current==="touch"?!j(c,p.relatedTarget):!0)&&E(p)}function w(p){x()||y.current==null||y.current({...e,tree:v,x:p.clientX,y:p.clientY,onClose(){K(),$(),E(p)}})(p)}if(U(a)){const p=a;return n&&p.addEventListener("mouseleave",w),c==null||c.addEventListener("mouseleave",w),f&&p.addEventListener("mousemove",S,{once:!0}),p.addEventListener("mouseenter",S),p.addEventListener("mouseleave",M),()=>{n&&p.removeEventListener("mouseleave",w),c==null||c.removeEventListener("mouseleave",w),f&&p.removeEventListener("mousemove",S),p.removeEventListener("mouseenter",S),p.removeEventListener("mouseleave",M)}}},[a,c,d,e,b,i,f,E,$,K,r,n,v,m,y,o]),G(()=>{var x;if(d&&n&&(x=y.current)!=null&&x.__options.blockPointerEvents&&H()){const w=Y(c).body;if(w.setAttribute(Ke,""),w.style.pointerEvents="none",W.current=!0,U(a)&&c){var S,M;const p=a,P=v==null||(S=v.nodesRef.current.find(T=>T.id===O))==null||(M=S.context)==null?void 0:M.elements.floating;return P&&(P.style.pointerEvents=""),p.style.pointerEvents="auto",c.style.pointerEvents="auto",()=>{p.style.pointerEvents="",c.style.pointerEvents=""}}}},[d,n,O,c,a,v,y,o,H]),G(()=>{n||(A.current=void 0,$(),K())},[n,$,K]),u.useEffect(()=>()=>{$(),clearTimeout(h.current),clearTimeout(N.current),K()},[d,a,$,K]),u.useMemo(()=>{if(!d)return{};function x(S){A.current=S.pointerType}return{reference:{onPointerDown:x,onPointerEnter:x,onMouseMove(S){n||i===0||(clearTimeout(N.current),N.current=setTimeout(()=>{I.current||r(!0,S.nativeEvent)},i))}},floating:{onMouseEnter(){clearTimeout(h.current)},onMouseLeave(S){s.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),E(S.nativeEvent,!1)}}}},[s,d,i,n,r,E])}function jt(e,t){var n;let r=[],o=(n=e.find(s=>s.id===t))==null?void 0:n.parentId;for(;o;){const s=e.find(a=>a.id===o);o=s==null?void 0:s.parentId,s&&(r=r.concat(s))}return r}function se(e,t){let n=e.filter(o=>{var s;return o.parentId===t&&((s=o.context)==null?void 0:s.open)}),r=n;for(;r.length;)r=e.filter(o=>{var s;return(s=r)==null?void 0:s.some(a=>{var c;return o.parentId===a.id&&((c=o.context)==null?void 0:c.open)})}),n=n.concat(r);return n}let te=new WeakMap,ce=new WeakSet,le={},xe=0;const Ut=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,tt=e=>e&&(e.host||tt(e.parentNode)),Yt=(e,t)=>t.map(n=>{if(e.contains(n))return n;const r=tt(n);return e.contains(r)?r:null}).filter(n=>n!=null);function Xt(e,t,n,r){const o="data-floating-ui-inert",s=r?"inert":n?"aria-hidden":null,a=Yt(t,e),c=new Set,l=new Set(a),d=[];le[o]||(le[o]=new WeakMap);const g=le[o];a.forEach(R),b(t),c.clear();function R(i){!i||c.has(i)||(c.add(i),i.parentNode&&R(i.parentNode))}function b(i){!i||l.has(i)||Array.prototype.forEach.call(i.children,f=>{if(c.has(f))b(f);else{const v=s?f.getAttribute(s):null,O=v!==null&&v!=="false",y=(te.get(f)||0)+1,m=(g.get(f)||0)+1;te.set(f,y),g.set(f,m),d.push(f),y===1&&O&&ce.add(f),m===1&&f.setAttribute(o,""),!O&&s&&f.setAttribute(s,"true")}})}return xe++,()=>{d.forEach(i=>{const f=(te.get(i)||0)-1,v=(g.get(i)||0)-1;te.set(i,f),g.set(i,v),f||(!ce.has(i)&&s&&i.removeAttribute(s),ce.delete(i)),v||i.removeAttribute(o)}),xe--,xe||(te=new WeakMap,te=new WeakMap,ce=new WeakSet,le={})}}function Be(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=Y(e[0]).body;return Xt(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const ke=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function nt(e,t){const n=Pe(e,ke());t==="prev"&&n.reverse();const r=n.indexOf(Q(Y(e)));return n.slice(r+1)[0]}function rt(){return nt(document.body,"next")}function ot(){return nt(document.body,"prev")}function ue(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!j(n,r)}function Gt(e){Pe(e,ke()).forEach(n=>{n.dataset.tabindex=n.getAttribute("tabindex")||"",n.setAttribute("tabindex","-1")})}function Zt(e){e.querySelectorAll("[data-tabindex]").forEach(n=>{const r=n.dataset.tabindex;delete n.dataset.tabindex,r?n.setAttribute("tabindex",r):n.removeAttribute("tabindex")})}const Me={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let Qt;function He(e){e.key==="Tab"&&(e.target,clearTimeout(Qt))}const pe=u.forwardRef(function(t,n){const[r,o]=u.useState();G(()=>(Xe()&&o("button"),document.addEventListener("keydown",He),()=>{document.removeEventListener("keydown",He)}),[]);const s={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[ee("focus-guard")]:"",style:Me};return u.createElement("span",ae({},t,s))}),st=u.createContext(null);function zt(e){let{id:t,root:n}=e===void 0?{}:e;const[r,o]=u.useState(null),s=ge(),a=ut(),c=u.useMemo(()=>({id:t,root:n,portalContext:a,uniqueId:s}),[t,n,a,s]),l=u.useRef();return G(()=>()=>{r==null||r.remove()},[r,c]),G(()=>{if(l.current===c)return;l.current=c;const{id:d,root:g,portalContext:R,uniqueId:b}=c,i=d?document.getElementById(d):null,f=ee("portal");if(i){const v=document.createElement("div");v.id=b,v.setAttribute(f,""),i.appendChild(v),o(v)}else{let v=g||(R==null?void 0:R.portalNode);v&&!U(v)&&(v=v.current),v=v||document.body;let O=null;d&&(O=document.createElement("div"),O.id=d,v.appendChild(O));const y=document.createElement("div");y.id=b,y.setAttribute(f,""),v=O||v,v.appendChild(y),o(y)}},[c]),r}function cn(e){let{children:t,id:n,root:r=null,preserveTabOrder:o=!0}=e;const s=zt({id:n,root:r}),[a,c]=u.useState(null),l=u.useRef(null),d=u.useRef(null),g=u.useRef(null),R=u.useRef(null),b=!!a&&!a.modal&&a.open&&o&&!!(r||s);return u.useEffect(()=>{if(!s||!o||a!=null&&a.modal)return;function i(f){s&&ue(f)&&(f.type==="focusin"?Zt:Gt)(s)}return s.addEventListener("focusin",i,!0),s.addEventListener("focusout",i,!0),()=>{s.removeEventListener("focusin",i,!0),s.removeEventListener("focusout",i,!0)}},[s,o,a==null?void 0:a.modal]),u.createElement(st.Provider,{value:u.useMemo(()=>({preserveTabOrder:o,beforeOutsideRef:l,afterOutsideRef:d,beforeInsideRef:g,afterInsideRef:R,portalNode:s,setFocusManagerState:c}),[o,s])},b&&s&&u.createElement(pe,{"data-type":"outside",ref:l,onFocus:i=>{if(ue(i,s)){var f;(f=g.current)==null||f.focus()}else{const v=ot()||(a==null?void 0:a.refs.domReference.current);v==null||v.focus()}}}),b&&s&&u.createElement("span",{"aria-owns":s.id,style:Me}),s&&je.createPortal(t,s),b&&s&&u.createElement(pe,{"data-type":"outside",ref:d,onFocus:i=>{if(ue(i,s)){var f;(f=R.current)==null||f.focus()}else{const v=rt()||(a==null?void 0:a.refs.domReference.current);v==null||v.focus(),a!=null&&a.closeOnFocusOut&&(a==null||a.onOpenChange(!1,i.nativeEvent))}}}))}const ut=()=>u.useContext(st),Jt=u.forwardRef(function(t,n){return u.createElement("button",ae({},t,{type:"button",ref:n,tabIndex:-1,style:Me}))});function ln(e){const{context:t,children:n,disabled:r=!1,order:o=["content"],guards:s=!0,initialFocus:a=0,returnFocus:c=!0,modal:l=!0,visuallyHiddenDismiss:d=!1,closeOnFocusOut:g=!0}=e,{open:R,refs:b,nodeId:i,onOpenChange:f,events:v,dataRef:O,elements:{domReference:y,floating:m}}=t,A=typeof a=="number"&&a<0,h=(y==null?void 0:y.getAttribute("role"))==="combobox"&&Ce(y)&&A,C=h?!1:l,N=Ut()?s:!0,I=oe(o),W=oe(a),V=oe(c),H=be(),E=ut(),$=u.useRef(null),K=u.useRef(null),x=u.useRef(!1),S=u.useRef(null),M=u.useRef(!1),w=E!=null,p=u.useCallback(function(D){return D===void 0&&(D=m),D?Pe(D,ke()):[]},[m]),P=u.useCallback(D=>{const F=p(D);return I.current.map(k=>y&&k==="reference"?y:m&&k==="floating"?m:F).filter(Boolean).flat()},[y,m,I,p]);u.useEffect(()=>{if(r||!C)return;function D(k){if(k.key==="Tab"){j(m,Q(Y(m)))&&p().length===0&&!h&&Ee(k);const L=P(),_=J(k);I.current[0]==="reference"&&_===y&&(Ee(k),k.shiftKey?z(L[L.length-1]):z(L[1])),I.current[1]==="floating"&&_===m&&k.shiftKey&&(Ee(k),z(L[0]))}}const F=Y(m);return F.addEventListener("keydown",D),()=>{F.removeEventListener("keydown",D)}},[r,y,m,C,I,b,h,p,P]),u.useEffect(()=>{if(r||!g)return;function D(){M.current=!0,setTimeout(()=>{M.current=!1})}function F(k){const L=k.relatedTarget;queueMicrotask(()=>{const _=!(j(y,L)||j(m,L)||j(L,m)||j(E==null?void 0:E.portalNode,L)||L!=null&&L.hasAttribute(ee("focus-guard"))||H&&(se(H.nodesRef.current,i).find(B=>{var q,Z;return j((q=B.context)==null?void 0:q.elements.floating,L)||j((Z=B.context)==null?void 0:Z.elements.domReference,L)})||jt(H.nodesRef.current,i).find(B=>{var q,Z;return((q=B.context)==null?void 0:q.elements.floating)===L||((Z=B.context)==null?void 0:Z.elements.domReference)===L})));L&&_&&!M.current&&L!==S.current&&(x.current=!0,f(!1,k))})}if(m&&re(y))return y.addEventListener("focusout",F),y.addEventListener("pointerdown",D),!C&&m.addEventListener("focusout",F),()=>{y.removeEventListener("focusout",F),y.removeEventListener("pointerdown",D),!C&&m.removeEventListener("focusout",F)}},[r,y,m,C,i,H,E,f,g]),u.useEffect(()=>{var D;if(r)return;const F=Array.from((E==null||(D=E.portalNode)==null?void 0:D.querySelectorAll("["+ee("portal")+"]"))||[]);if(m){const k=[m,...F,$.current,K.current,I.current.includes("reference")||h?y:null].filter(_=>_!=null),L=l||h?Be(k,N,!N):Be(k);return()=>{L()}}},[r,y,m,l,I,E,h,N]),G(()=>{if(r||!m)return;const D=Y(m),F=Q(D);queueMicrotask(()=>{const k=P(m),L=W.current,_=(typeof L=="number"?k[L]:L.current)||m,B=j(m,F);!A&&!B&&R&&z(_,{preventScroll:_===m})})},[r,R,m,A,P,W]),G(()=>{if(r||!m)return;let D=!1;const F=Y(m),k=Q(F),L=O.current;S.current=k;function _(B){if(B.type==="escapeKey"&&b.domReference.current&&(S.current=b.domReference.current),["referencePress","escapeKey"].includes(B.type))return;const q=B.data.returnFocus;typeof q=="object"?(x.current=!1,D=q.preventScroll):x.current=!q}return v.on("dismiss",_),()=>{v.off("dismiss",_);const B=Q(F);(j(m,B)||H&&se(H.nodesRef.current,i).some(Z=>{var Ie;return j((Ie=Z.context)==null?void 0:Ie.elements.floating,B)})||L.openEvent&&["click","mousedown"].includes(L.openEvent.type))&&b.domReference.current&&(S.current=b.domReference.current),V.current&&re(S.current)&&!x.current&&z(S.current,{cancelPrevious:!1,preventScroll:D})}},[r,m,V,O,b,v,H,i]),G(()=>{if(!(r||!E))return E.setFocusManagerState({modal:C,closeOnFocusOut:g,open:R,onOpenChange:f,refs:b}),()=>{E.setFocusManagerState(null)}},[r,E,C,R,f,b,g]),G(()=>{if(r||!m||typeof MutationObserver!="function"||A)return;const D=()=>{const k=m.getAttribute("tabindex");I.current.includes("floating")||Q(Y(m))!==b.domReference.current&&p().length===0?k!=="0"&&m.setAttribute("tabindex","0"):k!=="-1"&&m.setAttribute("tabindex","-1")};D();const F=new MutationObserver(D);return F.observe(m,{childList:!0,subtree:!0,attributes:!0}),()=>{F.disconnect()}},[r,m,b,I,p,A]);function T(D){return r||!d||!C?null:u.createElement(Jt,{ref:D==="start"?$:K,onClick:F=>f(!1,F.nativeEvent)},typeof d=="string"?d:"Dismiss")}const X=!r&&N&&(w||C);return u.createElement(u.Fragment,null,X&&u.createElement(pe,{"data-type":"inside",ref:E==null?void 0:E.beforeInsideRef,onFocus:D=>{if(C){const k=P();z(o[0]==="reference"?k[0]:k[k.length-1])}else if(E!=null&&E.preserveTabOrder&&E.portalNode)if(x.current=!1,ue(D,E.portalNode)){const k=rt()||y;k==null||k.focus()}else{var F;(F=E.beforeOutsideRef.current)==null||F.focus()}}}),!h&&T("start"),n,T("end"),X&&u.createElement(pe,{"data-type":"inside",ref:E==null?void 0:E.afterInsideRef,onFocus:D=>{if(C)z(P()[0]);else if(E!=null&&E.preserveTabOrder&&E.portalNode)if(g&&(x.current=!0),ue(D,E.portalNode)){const k=ot()||y;k==null||k.focus()}else{var F;(F=E.afterOutsideRef.current)==null||F.focus()}}}))}function $e(e){return re(e.target)&&e.target.tagName==="BUTTON"}function We(e){return Ce(e)}function fn(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,elements:{domReference:s}}=e,{enabled:a=!0,event:c="click",toggle:l=!0,ignoreMouse:d=!1,keyboardHandlers:g=!0}=t,R=u.useRef(),b=u.useRef(!1);return u.useMemo(()=>a?{reference:{onPointerDown(i){R.current=i.pointerType},onMouseDown(i){i.button===0&&(de(R.current,!0)&&d||c!=="click"&&(n&&l&&(!o.current.openEvent||o.current.openEvent.type==="mousedown")?r(!1,i.nativeEvent):(i.preventDefault(),r(!0,i.nativeEvent))))},onClick(i){if(c==="mousedown"&&R.current){R.current=void 0;return}de(R.current,!0)&&d||(n&&l&&(!o.current.openEvent||o.current.openEvent.type==="click")?r(!1,i.nativeEvent):r(!0,i.nativeEvent))},onKeyDown(i){R.current=void 0,!(i.defaultPrevented||!g||$e(i))&&(i.key===" "&&!We(s)&&(i.preventDefault(),b.current=!0),i.key==="Enter"&&r(!(n&&l),i.nativeEvent))},onKeyUp(i){i.defaultPrevented||!g||$e(i)||We(s)||i.key===" "&&b.current&&(b.current=!1,r(!(n&&l),i.nativeEvent))}}}:{},[a,o,c,d,g,s,l,n,r])}const en={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},tn={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Ve=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function dn(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,events:o,nodeId:s,elements:{reference:a,domReference:c,floating:l},dataRef:d}=e,{enabled:g=!0,escapeKey:R=!0,outsidePress:b=!0,outsidePressEvent:i="pointerdown",referencePress:f=!1,referencePressEvent:v="pointerdown",ancestorScroll:O=!1,bubbles:y,capture:m}=t,A=be(),h=et()!=null,C=ne(typeof b=="function"?b:()=>!1),N=typeof b=="function"?C:b,I=u.useRef(!1),W=u.useRef(!1),{escapeKey:V,outsidePress:H}=Ve(y),{escapeKey:E,outsidePress:$}=Ve(m),K=ne(w=>{if(!n||!g||!R||w.key!=="Escape")return;const p=A?se(A.nodesRef.current,s):[];if(!V&&(w.stopPropagation(),p.length>0)){let P=!0;if(p.forEach(T=>{var X;if((X=T.context)!=null&&X.open&&!T.context.dataRef.current.__escapeKeyBubbles){P=!1;return}}),!P)return}o.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1,bt(w)?w.nativeEvent:w)}),x=ne(w=>{var p;const P=()=>{var T;K(w),(T=J(w))==null||T.removeEventListener("keydown",P)};(p=J(w))==null||p.addEventListener("keydown",P)}),S=ne(w=>{const p=I.current;I.current=!1;const P=W.current;if(W.current=!1,i==="click"&&P||p||typeof N=="function"&&!N(w))return;const T=J(w),X="["+ee("inert")+"]",D=Y(l).querySelectorAll(X);let F=U(T)?T:null;for(;F&&!ft(F);){const _=dt(F);if(_===Y(l).body||!U(_))break;F=_}if(D.length&&U(T)&&!ht(T)&&!j(T,l)&&Array.from(D).every(_=>!j(F,_)))return;if(re(T)&&l){const _=T.clientWidth>0&&T.scrollWidth>T.clientWidth,B=T.clientHeight>0&&T.scrollHeight>T.clientHeight;let q=B&&w.offsetX>T.clientWidth;if(B&&mt(T).direction==="rtl"&&(q=w.offsetX<=T.offsetWidth-T.clientWidth),q||_&&w.offsetY>T.clientHeight)return}const k=A&&se(A.nodesRef.current,s).some(_=>{var B;return ye(w,(B=_.context)==null?void 0:B.elements.floating)});if(ye(w,l)||ye(w,c)||k)return;const L=A?se(A.nodesRef.current,s):[];if(L.length>0){let _=!0;if(L.forEach(B=>{var q;if((q=B.context)!=null&&q.open&&!B.context.dataRef.current.__outsidePressBubbles){_=!1;return}}),!_)return}o.emit("dismiss",{type:"outsidePress",data:{returnFocus:h?{preventScroll:!0}:pt(w)||Ye(w)}}),r(!1,w)}),M=ne(w=>{var p;const P=()=>{var T;S(w),(T=J(w))==null||T.removeEventListener(i,P)};(p=J(w))==null||p.addEventListener(i,P)});return u.useEffect(()=>{if(!n||!g)return;d.current.__escapeKeyBubbles=V,d.current.__outsidePressBubbles=H;function w(T){r(!1,T)}const p=Y(l);R&&p.addEventListener("keydown",E?x:K,E),N&&p.addEventListener(i,$?M:S,$);let P=[];return O&&(U(c)&&(P=he(c)),U(l)&&(P=P.concat(he(l))),!U(a)&&a&&a.contextElement&&(P=P.concat(he(a.contextElement)))),P=P.filter(T=>{var X;return T!==((X=p.defaultView)==null?void 0:X.visualViewport)}),P.forEach(T=>{T.addEventListener("scroll",w,{passive:!0})}),()=>{R&&p.removeEventListener("keydown",E?x:K,E),N&&p.removeEventListener(i,$?M:S,$),P.forEach(T=>{T.removeEventListener("scroll",w)})}},[d,l,c,a,R,N,i,n,r,O,g,V,H,K,E,x,S,$,M]),u.useEffect(()=>{I.current=!1},[N,i]),u.useMemo(()=>g?{reference:{onKeyDown:K,[en[v]]:w=>{f&&(o.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1,w.nativeEvent))}},floating:{onKeyDown:K,onMouseDown(){W.current=!0},onMouseUp(){W.current=!0},[tn[i]]:()=>{I.current=!0}}}:{},[g,o,f,i,v,r,K])}function mn(e){var t;e===void 0&&(e={});const{open:n=!1,onOpenChange:r,nodeId:o}=e,[s,a]=u.useState(null),c=((t=e.elements)==null?void 0:t.reference)||s,l=Et(e),d=be(),g=ne((h,C)=>{h&&(b.current.openEvent=C),r==null||r(h,C)}),R=u.useRef(null),b=u.useRef({}),i=u.useState(()=>Wt())[0],f=ge(),v=u.useCallback(h=>{const C=U(h)?{getBoundingClientRect:()=>h.getBoundingClientRect(),contextElement:h}:h;l.refs.setReference(C)},[l.refs]),O=u.useCallback(h=>{(U(h)||h===null)&&(R.current=h,a(h)),(U(l.refs.reference.current)||l.refs.reference.current===null||h!==null&&!U(h))&&l.refs.setReference(h)},[l.refs]),y=u.useMemo(()=>({...l.refs,setReference:O,setPositionReference:v,domReference:R}),[l.refs,O,v]),m=u.useMemo(()=>({...l.elements,domReference:c}),[l.elements,c]),A=u.useMemo(()=>({...l,refs:y,elements:m,dataRef:b,nodeId:o,floatingId:f,events:i,open:n,onOpenChange:g}),[l,o,f,i,n,g,y,m]);return G(()=>{const h=d==null?void 0:d.nodesRef.current.find(C=>C.id===o);h&&(h.context=A)}),u.useMemo(()=>({...l,context:A,refs:y,elements:m}),[l,y,m,A])}function vn(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,events:o,refs:s,elements:{floating:a,domReference:c}}=e,{enabled:l=!0,visibleOnly:d=!0}=t,g=u.useRef(!1),R=u.useRef(),b=u.useRef(!0);return u.useEffect(()=>{if(!l)return;const i=lt(c);function f(){!n&&re(c)&&c===Q(Y(c))&&(g.current=!0)}function v(){b.current=!0}return i.addEventListener("blur",f),i.addEventListener("keydown",v,!0),()=>{i.removeEventListener("blur",f),i.removeEventListener("keydown",v,!0)}},[a,c,n,l]),u.useEffect(()=>{if(!l)return;function i(f){(f.type==="referencePress"||f.type==="escapeKey")&&(g.current=!0)}return o.on("dismiss",i),()=>{o.off("dismiss",i)}},[o,l]),u.useEffect(()=>()=>{clearTimeout(R.current)},[]),u.useMemo(()=>l?{reference:{onPointerDown(i){Ye(i.nativeEvent)||(b.current=!1)},onMouseLeave(){g.current=!1},onFocus(i){if(g.current)return;const f=J(i.nativeEvent);if(d&&U(f))try{if(Xe()&&gt())throw Error();if(!f.matches(":focus-visible"))return}catch{if(!b.current&&!Ce(f))return}r(!0,i.nativeEvent)},onBlur(i){g.current=!1;const f=i.relatedTarget,v=U(f)&&f.hasAttribute(ee("focus-guard"))&&f.getAttribute("data-type")==="outside";R.current=window.setTimeout(()=>{const O=Q(c?c.ownerDocument:document);!f&&O===c||j(s.floating.current,f)||j(c,f)||v||r(!1,i.nativeEvent)})}}}:{},[l,d,c,s,r])}function Te(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(o=>o?o[n]:null).concat(e).reduce((o,s)=>(s&&Object.entries(s).forEach(a=>{let[c,l]=a;if(c.indexOf("on")===0){if(r.has(c)||r.set(c,[]),typeof l=="function"){var d;(d=r.get(c))==null||d.push(l),o[c]=function(){for(var g,R=arguments.length,b=new Array(R),i=0;i<R;i++)b[i]=arguments[i];return(g=r.get(c))==null?void 0:g.map(f=>f(...b)).find(f=>f!==void 0)}}}else o[c]=l}),o),{})}}function pn(e){e===void 0&&(e=[]);const t=e,n=u.useCallback(s=>Te(s,e,"reference"),t),r=u.useCallback(s=>Te(s,e,"floating"),t),o=u.useCallback(s=>Te(s,e,"item"),e.map(s=>s==null?void 0:s.item));return u.useMemo(()=>({getReferenceProps:n,getFloatingProps:r,getItemProps:o}),[n,r,o])}function gn(e,t){t===void 0&&(t={});const{open:n,floatingId:r}=e,{enabled:o=!0,role:s="dialog"}=t,a=ge();return u.useMemo(()=>{const c={id:r,role:s};return o?s==="tooltip"?{reference:{"aria-describedby":n?r:void 0},floating:c}:{reference:{"aria-expanded":n?"true":"false","aria-haspopup":s==="alertdialog"?"dialog":s,"aria-controls":n?r:void 0,...s==="listbox"&&{role:"combobox"},...s==="menu"&&{id:a}},floating:{...c,...s==="menu"&&{"aria-labelledby":a}}}:{}},[o,s,n,r,a])}export{ln as F,fn as a,dn as b,gn as c,pn as d,ge as e,an as f,vn as g,cn as h,un as i,sn as j,mn as u};
