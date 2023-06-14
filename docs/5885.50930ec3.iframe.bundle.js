/*! For license information please see 5885.50930ec3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[5885],{"../../node_modules/.pnpm/@floating-ui+core@1.0.2/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function t(t){return t.split("-")[0]}function e(t){return t.split("-")[1]}function n(e){return["top","bottom"].includes(t(e))?"x":"y"}function r(t){return"y"===t?"height":"width"}function i(i,o,a){let{reference:l,floating:s}=i;const c=l.x+l.width/2-s.width/2,f=l.y+l.height/2-s.height/2,u=n(o),m=r(u),g=l[m]/2-s[m]/2,d="x"===u;let p;switch(t(o)){case"top":p={x:c,y:l.y-s.height};break;case"bottom":p={x:c,y:l.y+l.height};break;case"right":p={x:l.x+l.width,y:f};break;case"left":p={x:l.x-s.width,y:f};break;default:p={x:l.x,y:l.y}}switch(e(o)){case"start":p[u]-=g*(a&&d?-1:1);break;case"end":p[u]+=g*(a&&d?-1:1)}return p}__webpack_require__.d(__webpack_exports__,{JB:()=>l,RR:()=>b,cv:()=>T,oo:()=>o,uY:()=>L});const o=async(t,e,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:a=[],platform:l}=n,s=a.filter(Boolean),c=await(null==l.isRTL?void 0:l.isRTL(e));let f=await l.getElementRects({reference:t,floating:e,strategy:o}),{x:u,y:m}=i(f,r,c),g=r,d={},p=0;for(let n=0;n<s.length;n++){const{name:a,fn:h}=s[n],{x:y,y:x,data:w,reset:v}=await h({x:u,y:m,initialPlacement:r,placement:g,strategy:o,middlewareData:d,rects:f,platform:l,elements:{reference:t,floating:e}});u=null!=y?y:u,m=null!=x?x:m,d={...d,[a]:{...d[a],...w}},v&&p<=50&&(p++,"object"==typeof v&&(v.placement&&(g=v.placement),v.rects&&(f=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:o}):v.rects),({x:u,y:m}=i(f,g,c))),n=-1)}return{x:u,y:m,placement:g,strategy:o,middlewareData:d}};function a(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function l(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function s(t,e){var n;void 0===e&&(e={});const{x:r,y:i,platform:o,rects:s,elements:c,strategy:f}=t,{boundary:u="clippingAncestors",rootBoundary:m="viewport",elementContext:g="floating",altBoundary:d=!1,padding:p=0}=e,h=a(p),y=c[d?"floating"===g?"reference":"floating":g],x=l(await o.getClippingRect({element:null==(n=await(null==o.isElement?void 0:o.isElement(y)))||n?y:y.contextElement||await(null==o.getDocumentElement?void 0:o.getDocumentElement(c.floating)),boundary:u,rootBoundary:m,strategy:f})),w=l(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===g?{...s.floating,x:r,y:i}:s.reference,offsetParent:await(null==o.getOffsetParent?void 0:o.getOffsetParent(c.floating)),strategy:f}):s[g]);return{top:x.top-w.top+h.top,bottom:w.bottom-x.bottom+h.bottom,left:x.left-w.left+h.left,right:w.right-x.right+h.right}}const c=Math.min,f=Math.max;function u(t,e,n){return f(t,c(e,n))}const g={left:"right",right:"left",bottom:"top",top:"bottom"};function d(t){return t.replace(/left|right|bottom|top/g,(t=>g[t]))}function p(t,i,o){void 0===o&&(o=!1);const a=e(t),l=n(t),s=r(l);let c="x"===l?a===(o?"end":"start")?"right":"left":"start"===a?"bottom":"top";return i.reference[s]>i.floating[s]&&(c=d(c)),{main:c,cross:d(c)}}const h={start:"end",end:"start"};function y(t){return t.replace(/start|end/g,(t=>h[t]))}const x=["top","right","bottom","left"],b=(x.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(n){var r;const{placement:i,middlewareData:o,rects:a,initialPlacement:l,platform:c,elements:f}=n,{mainAxis:u=!0,crossAxis:m=!0,fallbackPlacements:g,fallbackStrategy:h="bestFit",flipAlignment:x=!0,...w}=e,v=t(i),b=g||(v!==l&&x?function(t){const e=d(t);return[y(t),e,y(e)]}(l):[d(l)]),R=[l,...b],A=await s(n,w),P=[];let T=(null==(r=o.flip)?void 0:r.overflows)||[];if(u&&P.push(A[v]),m){const{main:t,cross:e}=p(i,a,await(null==c.isRTL?void 0:c.isRTL(f.floating)));P.push(A[t],A[e])}if(T=[...T,{placement:i,overflows:P}],!P.every((t=>t<=0))){var O,L;const t=(null!=(O=null==(L=o.flip)?void 0:L.index)?O:0)+1,e=R[t];if(e)return{data:{index:t,overflows:T},reset:{placement:e}};let n="bottom";switch(h){case"bestFit":{var D;const t=null==(D=T.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:D[0].placement;t&&(n=t);break}case"initialPlacement":n=l}if(i!==n)return{reset:{placement:n}}}return{}}}});const T=function(r){return void 0===r&&(r=0),{name:"offset",options:r,async fn(i){const{x:o,y:a}=i,l=await async function(r,i){const{placement:o,platform:a,elements:l}=r,s=await(null==a.isRTL?void 0:a.isRTL(l.floating)),c=t(o),f=e(o),u="x"===n(o),m=["left","top"].includes(c)?-1:1,g=s&&u?-1:1,d="function"==typeof i?i(r):i;let{mainAxis:p,crossAxis:h,alignmentAxis:y}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return f&&"number"==typeof y&&(h="end"===f?-1*y:y),u?{x:h*g,y:p*m}:{x:p*m,y:h*g}}(i,r);return{x:o+l.x,y:a+l.y,data:l}}}};function O(t){return"x"===t?"y":"x"}const L=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(r){const{x:i,y:o,placement:a}=r,{mainAxis:l=!0,crossAxis:c=!1,limiter:f={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...m}=e,g={x:i,y:o},d=await s(r,m),p=n(t(a)),h=O(p);let y=g[p],x=g[h];if(l){const t="y"===p?"bottom":"right";y=u(y+d["y"===p?"top":"left"],y,y-d[t])}if(c){const t="y"===h?"bottom":"right";x=u(x+d["y"===h?"top":"left"],x,x-d[t])}const w=f.fn({...r,[p]:y,[h]:x});return{...w,data:{x:w.x-i,y:w.y-o}}}}}},"../../node_modules/.pnpm/@floating-ui+dom@1.0.7/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kx:()=>H,Me:()=>C,oo:()=>O});var _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@floating-ui+core@1.0.2/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs");function n(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function o(t){if(null==t)return window;if(!n(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function i(t){return o(t).getComputedStyle(t)}function r(t){return n(t)?"":t?(t.nodeName||"").toLowerCase():""}function l(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function c(t){return t instanceof o(t).HTMLElement}function s(t){return t instanceof o(t).Element}function f(t){return"undefined"!=typeof ShadowRoot&&(t instanceof o(t).ShadowRoot||t instanceof ShadowRoot)}function u(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=i(t);return/auto|scroll|overlay|hidden/.test(e+o+n)&&!["inline","contents"].includes(r)}function a(t){return["table","td","th"].includes(r(t))}function d(t){const e=/firefox/i.test(l()),n=i(t),o=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!o&&"none"!==o||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((t=>n.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=n.contain;return null!=e&&e.includes(t)}))}function h(){return!/^((?!chrome|android).)*safari/i.test(l())}function g(t){return["html","body","#document"].includes(r(t))}const m=Math.min,p=Math.max,w=Math.round;function v(t,e,n){var i,r,l,f;void 0===e&&(e=!1),void 0===n&&(n=!1);const u=t.getBoundingClientRect();let a=1,d=1;e&&c(t)&&(a=t.offsetWidth>0&&w(u.width)/t.offsetWidth||1,d=t.offsetHeight>0&&w(u.height)/t.offsetHeight||1);const g=s(t)?o(t):window,m=!h()&&n,p=(u.left+(m&&null!=(i=null==(r=g.visualViewport)?void 0:r.offsetLeft)?i:0))/a,v=(u.top+(m&&null!=(l=null==(f=g.visualViewport)?void 0:f.offsetTop)?l:0))/d,y=u.width/a,x=u.height/d;return{width:y,height:x,top:v,right:p+y,bottom:v+x,left:p,x:p,y:v}}function y(t){return(e=t,(e instanceof o(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function x(t){return s(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function b(t){return v(y(t)).left+x(t).scrollLeft}function L(t,e,n){const o=c(e),i=y(e),l=v(t,o&&function(t){const e=v(t);return w(e.width)!==t.offsetWidth||w(e.height)!==t.offsetHeight}(e),"fixed"===n);let s={scrollLeft:0,scrollTop:0};const f={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==r(e)||u(i))&&(s=x(e)),c(e)){const t=v(e,!0);f.x=t.x+e.clientLeft,f.y=t.y+e.clientTop}else i&&(f.x=b(i));return{x:l.left+s.scrollLeft-f.x,y:l.top+s.scrollTop-f.y,width:l.width,height:l.height}}function E(t){if("html"===r(t))return t;const e=t.assignedSlot||t.parentNode||(f(t)?t.host:null)||y(t);return f(e)?e.host:e}function R(t){return c(t)&&"fixed"!==i(t).position?t.offsetParent:null}function T(t){const e=o(t);let n=R(t);for(;n&&a(n)&&"static"===i(n).position;)n=R(n);return n&&("html"===r(n)||"body"===r(n)&&"static"===i(n).position&&!d(n))?e:n||function(t){let e=E(t);for(;c(e)&&!g(e);){if(d(e))return e;e=E(e)}return null}(t)||e}function W(t){const e=E(t);return g(e)?t.ownerDocument.body:c(e)&&u(e)?e:W(e)}function H(t,e){var n;void 0===e&&(e=[]);const i=W(t),r=i===(null==(n=t.ownerDocument)?void 0:n.body),l=o(i),c=r?[l].concat(l.visualViewport||[],u(i)?i:[]):i,s=e.concat(c);return r?s:s.concat(H(c))}function D(e,n,r){return"viewport"===n?(0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.JB)(function(t,e){const n=o(t),i=y(t),r=n.visualViewport;let l=i.clientWidth,c=i.clientHeight,s=0,f=0;if(r){l=r.width,c=r.height;const t=h();(t||!t&&"fixed"===e)&&(s=r.offsetLeft,f=r.offsetTop)}return{width:l,height:c,x:s,y:f}}(e,r)):s(n)?function(t,e){const n=v(t,!1,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft;return{top:o,left:i,x:i,y:o,right:i+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(n,r):(0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.JB)(function(t){var e;const n=y(t),o=x(t),r=null==(e=t.ownerDocument)?void 0:e.body,l=p(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),c=p(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0);let s=-o.scrollLeft+b(t);const f=-o.scrollTop;return"rtl"===i(r||n).direction&&(s+=p(n.clientWidth,r?r.clientWidth:0)-l),{width:l,height:c,x:s,y:f}}(y(e)))}const A={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:l}=t;const c="clippingAncestors"===n?function(t){let e=H(t).filter((t=>s(t)&&"body"!==r(t))),n=null;const o="fixed"===i(t).position;let l=o?E(t):t;for(;s(l)&&!g(l);){const t=i(l),r=d(l);(o?r||n:r||"static"!==t.position||!n||!["absolute","fixed"].includes(n.position))?n=t:e=e.filter((t=>t!==l)),l=E(l)}return e}(e):[].concat(n),f=[...c,o],u=f[0],a=f.reduce(((t,n)=>{const o=D(e,n,l);return t.top=p(o.top,t.top),t.right=m(o.right,t.right),t.bottom=m(o.bottom,t.bottom),t.left=p(o.left,t.left),t}),D(e,u,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=c(n),l=y(n);if(n===l)return e;let s={scrollLeft:0,scrollTop:0};const f={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==r(n)||u(l))&&(s=x(n)),c(n))){const t=v(n,!0);f.x=t.x+n.clientLeft,f.y=t.y+n.clientTop}return{...e,x:e.x-s.scrollLeft+f.x,y:e.y-s.scrollTop+f.y}},isElement:s,getDimensions:function(t){if(c(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=v(t);return{width:e.width,height:e.height}},getOffsetParent:T,getDocumentElement:y,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||T,r=this.getDimensions;return{reference:L(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===i(t).direction};function C(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=!0,animationFrame:c=!1}=o,f=i&&!c,u=f||r?[...s(t)?H(t):t.contextElement?H(t.contextElement):[],...H(e)]:[];u.forEach((t=>{f&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));let a,d=null;if(l){let o=!0;d=new ResizeObserver((()=>{o||n(),o=!1})),s(t)&&!c&&d.observe(t),s(t)||!t.contextElement||c||d.observe(t.contextElement),d.observe(e)}let h=c?v(t):null;return c&&function e(){const o=v(t);!h||o.x===h.x&&o.y===h.y&&o.width===h.width&&o.height===h.height||n(),h=o,a=requestAnimationFrame(e)}(),n(),()=>{var t;u.forEach((t=>{f&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==(t=d)||t.disconnect(),d=null,c&&cancelAnimationFrame(a)}}const O=(t,n,o)=>(0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.oo)(t,n,{platform:A,...o})},"../../node_modules/.pnpm/@floating-ui+react-dom-interactions@0.12.0_knhnagtyfncgg2hpin7s37uixq/node_modules/@floating-ui/react-dom-interactions/dist/floating-ui.react-dom-interactions.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ll:()=>FloatingPortal,eS:()=>useClick,bQ:()=>useDismiss,YF:()=>floating_ui_react_dom_interactions_esm_useFloating,KK:()=>useFocus,XI:()=>useHover,NI:()=>useInteractions,qs:()=>useRole});var floating_ui_dom_browser_min=__webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.0.7/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2),react_dom=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),index="undefined"!=typeof document?react.useLayoutEffect:react.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function useFloating(_temp){let{middleware=[],placement="bottom",strategy="absolute",whileElementsMounted}=void 0===_temp?{}:_temp;const[data,setData]=react.useState({x:null,y:null,strategy,placement,middlewareData:{}}),[latestMiddleware,setLatestMiddleware]=react.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const reference=react.useRef(null),floating=react.useRef(null),cleanupRef=react.useRef(null),dataRef=react.useRef(data),whileElementsMountedRef=function useLatestRef(value){const ref=react.useRef(value);return index((()=>{ref.current=value})),ref}(whileElementsMounted),update=react.useCallback((()=>{reference.current&&floating.current&&(0,floating_ui_dom_browser_min.oo)(reference.current,floating.current,{middleware:latestMiddleware,placement,strategy}).then((data=>{isMountedRef.current&&!deepEqual(dataRef.current,data)&&(dataRef.current=data,react_dom.flushSync((()=>{setData(data)})))}))}),[latestMiddleware,placement,strategy]);index((()=>{isMountedRef.current&&update()}),[update]);const isMountedRef=react.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]);const runElementMountCallback=react.useCallback((()=>{if("function"==typeof cleanupRef.current&&(cleanupRef.current(),cleanupRef.current=null),reference.current&&floating.current)if(whileElementsMountedRef.current){const cleanupFn=whileElementsMountedRef.current(reference.current,floating.current,update);cleanupRef.current=cleanupFn}else update()}),[update,whileElementsMountedRef]),setReference=react.useCallback((node=>{reference.current=node,runElementMountCallback()}),[runElementMountCallback]),setFloating=react.useCallback((node=>{floating.current=node,runElementMountCallback()}),[runElementMountCallback]),refs=react.useMemo((()=>({reference,floating})),[]);return react.useMemo((()=>({...data,update,refs,reference:setReference,floating:setFloating})),[data,update,refs,setReference,setFloating])}var floating_ui_react_dom_interactions_esm_index="undefined"!=typeof document?react.useLayoutEffect:react.useEffect;function createPubSub(){const map=new Map;return{emit(event,data){var _map$get;null==(_map$get=map.get(event))||_map$get.forEach((handler=>handler(data)))},on(event,listener){map.set(event,[...map.get(event)||[],listener])},off(event,listener){map.set(event,(map.get(event)||[]).filter((l=>l!==listener)))}}}let serverHandoffComplete=!1,count=0;const genId=()=>"floating-ui-"+count++;const useReactId=react_namespaceObject["useId".toString()],useId=null!=useReactId?useReactId:function useFloatingId(){const[id,setId]=react.useState((()=>serverHandoffComplete?genId():void 0));return floating_ui_react_dom_interactions_esm_index((()=>{null==id&&setId(genId())}),[]),react.useEffect((()=>{serverHandoffComplete||(serverHandoffComplete=!0)}),[]),id},FloatingNodeContext=react.createContext(null),FloatingTreeContext=react.createContext(null),useFloatingParentNodeId=()=>{var _React$useContext$id,_React$useContext;return null!=(_React$useContext$id=null==(_React$useContext=react.useContext(FloatingNodeContext))?void 0:_React$useContext.id)?_React$useContext$id:null},useFloatingTree=()=>react.useContext(FloatingTreeContext);function getDocument(floating){var _floating$ownerDocume;return null!=(_floating$ownerDocume=null==floating?void 0:floating.ownerDocument)?_floating$ownerDocume:document}function getWindow(value){var _getDocument$defaultV;return null!=(_getDocument$defaultV=getDocument(value).defaultView)?_getDocument$defaultV:window}function isElement(value){return!!value&&value instanceof getWindow(value).Element}function isHTMLElement(value){return!!value&&value instanceof getWindow(value).HTMLElement}const useInsertionEffect=react_namespaceObject["useInsertionEffect".toString()];function useEvent(callback){const ref=react.useRef((()=>{0}));return useInsertionEffect?useInsertionEffect((()=>{ref.current=callback})):ref.current=callback,react.useCallback((function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return null==ref.current?void 0:ref.current(...args)}),[])}function floating_ui_react_dom_interactions_esm_useFloating(_temp){let{open=!1,onOpenChange:unstable_onOpenChange,whileElementsMounted,placement,middleware,strategy,nodeId}=void 0===_temp?{}:_temp;const[domReference,setDomReference]=react.useState(null),tree=useFloatingTree(),domReferenceRef=react.useRef(null),dataRef=react.useRef({}),events=react.useState((()=>createPubSub()))[0],position=useFloating({placement,middleware,strategy,whileElementsMounted}),onOpenChange=useEvent(unstable_onOpenChange),refs=react.useMemo((()=>({...position.refs,domReference:domReferenceRef})),[position.refs]),context=react.useMemo((()=>({...position,refs,dataRef,nodeId,events,open,onOpenChange,_:{domReference}})),[position,nodeId,events,open,onOpenChange,refs,domReference]);floating_ui_react_dom_interactions_esm_index((()=>{const node=null==tree?void 0:tree.nodesRef.current.find((node=>node.id===nodeId));node&&(node.context=context)}));const{reference}=position,setReference=react.useCallback((node=>{(isElement(node)||null===node)&&(context.refs.domReference.current=node,setDomReference(node)),reference(node)}),[reference,context.refs]);return react.useMemo((()=>({...position,context,refs,reference:setReference})),[position,refs,context,setReference])}function mergeProps(userProps,propsList,elementKey){const map=new Map;return{..."floating"===elementKey&&{tabIndex:-1},...userProps,...propsList.map((value=>value?value[elementKey]:null)).concat(userProps).reduce(((acc,props)=>props?(Object.entries(props).forEach((_ref=>{let[key,value]=_ref;var _map$get;0===key.indexOf("on")?(map.has(key)||map.set(key,[]),"function"==typeof value&&(null==(_map$get=map.get(key))||_map$get.push(value),acc[key]=function(){for(var _map$get2,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];null==(_map$get2=map.get(key))||_map$get2.forEach((fn=>fn(...args)))})):acc[key]=value})),acc):acc),{})}}const useInteractions=function(propsList){void 0===propsList&&(propsList=[]);const deps=propsList,getReferenceProps=react.useCallback((userProps=>mergeProps(userProps,propsList,"reference")),deps),getFloatingProps=react.useCallback((userProps=>mergeProps(userProps,propsList,"floating")),deps),getItemProps=react.useCallback((userProps=>mergeProps(userProps,propsList,"item")),deps);return react.useMemo((()=>({getReferenceProps,getFloatingProps,getItemProps})),[getReferenceProps,getFloatingProps,getItemProps])};function getChildren(nodes,id){var _nodes$filter;let allChildren=null!=(_nodes$filter=nodes.filter((node=>{var _node$context;return node.parentId===id&&(null==(_node$context=node.context)?void 0:_node$context.open)})))?_nodes$filter:[],currentChildren=allChildren;for(;currentChildren.length;){var _nodes$filter2;currentChildren=null!=(_nodes$filter2=nodes.filter((node=>{var _currentChildren;return null==(_currentChildren=currentChildren)?void 0:_currentChildren.some((n=>{var _node$context2;return node.parentId===n.id&&(null==(_node$context2=node.context)?void 0:_node$context2.open)}))})))?_nodes$filter2:[],allChildren=allChildren.concat(currentChildren)}return allChildren}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const HIDDEN_STYLES={position:"fixed",opacity:"0",pointerEvents:"none",outline:"0"},FocusGuard=react.forwardRef((function FocusGuard(props,ref){return react.createElement("span",_extends({},props,{ref,tabIndex:0,"aria-hidden":"true","data-floating-ui-focus-guard":"",style:HIDDEN_STYLES}))})),PortalContext=react.createContext(null),DEFAULT_ID="floating-ui-root",FloatingPortal=_ref=>{let{children,id=DEFAULT_ID,root=null,preserveTabOrder=!0}=_ref;const portalNode=function(_temp){let{id=DEFAULT_ID,enabled=!0}=void 0===_temp?{}:_temp;const[portalEl,setPortalEl]=react.useState(null);return floating_ui_react_dom_interactions_esm_index((()=>{if(!enabled)return;const rootNode=document.getElementById(id);if(rootNode)setPortalEl(rootNode);else{const newPortalEl=document.createElement("div");newPortalEl.id=id,setPortalEl(newPortalEl),document.body.contains(newPortalEl)||document.body.appendChild(newPortalEl)}}),[id,enabled]),portalEl}({id,enabled:!root}),[modal,setModal]=react.useState(!0),beforeOutsideRef=react.useRef(null),afterOutsideRef=react.useRef(null),beforeInsideRef=react.useRef(null),afterInsideRef=react.useRef(null),managerRef=react.useRef(null),renderGuards=!!children&&!(!root&&!portalNode)&&preserveTabOrder&&!modal;return react.createElement(PortalContext.Provider,{value:react.useMemo((()=>({preserveTabOrder,beforeOutsideRef,afterOutsideRef,beforeInsideRef,afterInsideRef,managerRef,setModal})),[preserveTabOrder])},renderGuards&&react.createElement(FocusGuard,{ref:beforeOutsideRef,onFocus:()=>{var _managerRef$current;null==(_managerRef$current=managerRef.current)||_managerRef$current.handleBeforeOutside()}}),renderGuards&&react.createElement("span",{"aria-owns":null==portalNode?void 0:portalNode.id,style:HIDDEN_STYLES}),root?(0,react_dom.createPortal)(children,root):portalNode?(0,react_dom.createPortal)(children,portalNode):null,renderGuards&&react.createElement(FocusGuard,{ref:afterOutsideRef,onFocus:()=>{var _managerRef$current2;null==(_managerRef$current2=managerRef.current)||_managerRef$current2.handleAfterOutside()}}))};var NoElement="undefined"==typeof Element;NoElement||Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,!NoElement&&Element.prototype.getRootNode;function getTarget(event){return"composedPath"in event?event.composedPath()[0]:event.target}function isTypeableElement(element){return isHTMLElement(element)&&element.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}function floating_ui_react_dom_interactions_esm_useLatestRef(value){const ref=(0,react.useRef)(value);return floating_ui_react_dom_interactions_esm_index((()=>{ref.current=value})),ref}function getDelay(value,prop,pointerType){return pointerType&&"mouse"!==pointerType?0:"number"==typeof value?value:null==value?void 0:value[prop]}const useHover=function(context,_temp){let{enabled=!0,delay=0,handleClose=null,mouseOnly=!1,restMs=0,move=!0}=void 0===_temp?{}:_temp;const{open,onOpenChange,dataRef,events,refs,_}=context,tree=useFloatingTree(),parentId=useFloatingParentNodeId(),handleCloseRef=floating_ui_react_dom_interactions_esm_useLatestRef(handleClose),delayRef=floating_ui_react_dom_interactions_esm_useLatestRef(delay),pointerTypeRef=react.useRef(),timeoutRef=react.useRef(),handlerRef=react.useRef(),restTimeoutRef=react.useRef(),blockMouseMoveRef=react.useRef(!0),performedPointerEventsMutationRef=react.useRef(!1),isHoverOpen=react.useCallback((()=>{var _dataRef$current$open;const type=null==(_dataRef$current$open=dataRef.current.openEvent)?void 0:_dataRef$current$open.type;return(null==type?void 0:type.includes("mouse"))&&"mousedown"!==type}),[dataRef]);react.useEffect((()=>{if(enabled)return events.on("dismiss",onDismiss),()=>{events.off("dismiss",onDismiss)};function onDismiss(){clearTimeout(timeoutRef.current),clearTimeout(restTimeoutRef.current),blockMouseMoveRef.current=!0}}),[enabled,events,refs]),react.useEffect((()=>{if(!enabled||!handleCloseRef.current||!open)return;function onLeave(){isHoverOpen()&&onOpenChange(!1)}const html=getDocument(refs.floating.current).documentElement;return html.addEventListener("mouseleave",onLeave),()=>{html.removeEventListener("mouseleave",onLeave)}}),[refs,open,onOpenChange,enabled,handleCloseRef,dataRef,isHoverOpen]);const closeWithDelay=react.useCallback((function(runElseBranch){void 0===runElseBranch&&(runElseBranch=!0);const closeDelay=getDelay(delayRef.current,"close",pointerTypeRef.current);closeDelay&&!handlerRef.current?(clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout((()=>onOpenChange(!1)),closeDelay)):runElseBranch&&(clearTimeout(timeoutRef.current),onOpenChange(!1))}),[delayRef,onOpenChange]),cleanupPointerMoveHandler=react.useCallback((()=>{handlerRef.current&&(getDocument(refs.floating.current).removeEventListener("pointermove",handlerRef.current),handlerRef.current=void 0)}),[refs]),clearPointerEvents=react.useCallback((()=>{getDocument(refs.floating.current).body.style.pointerEvents="",performedPointerEventsMutationRef.current=!1}),[refs]);return react.useEffect((()=>{if(!enabled)return;function isClickLikeOpenEvent(){return!!dataRef.current.openEvent&&["click","mousedown"].includes(dataRef.current.openEvent.type)}function onMouseEnter(event){if(clearTimeout(timeoutRef.current),blockMouseMoveRef.current=!1,mouseOnly&&"mouse"!==pointerTypeRef.current||restMs>0&&0===getDelay(delayRef.current,"open"))return;dataRef.current.openEvent=event;const openDelay=getDelay(delayRef.current,"open",pointerTypeRef.current);openDelay?timeoutRef.current=setTimeout((()=>{onOpenChange(!0)}),openDelay):onOpenChange(!0)}function onMouseLeave(event){if(isClickLikeOpenEvent())return;const doc=getDocument(refs.floating.current);if(clearTimeout(restTimeoutRef.current),handleCloseRef.current)return clearTimeout(timeoutRef.current),handlerRef.current&&doc.removeEventListener("pointermove",handlerRef.current),handlerRef.current=handleCloseRef.current({...context,tree,x:event.clientX,y:event.clientY,onClose(){clearPointerEvents(),cleanupPointerMoveHandler(),closeWithDelay()}}),void doc.addEventListener("pointermove",handlerRef.current);closeWithDelay()}function onScrollMouseLeave(event){isClickLikeOpenEvent()||null==handleCloseRef.current||handleCloseRef.current({...context,tree,x:event.clientX,y:event.clientY,leave:!0,onClose(){clearPointerEvents(),cleanupPointerMoveHandler(),closeWithDelay()}})(event)}const floating=refs.floating.current,reference=refs.domReference.current;return isElement(reference)?(open&&reference.addEventListener("mouseleave",onScrollMouseLeave),null==floating||floating.addEventListener("mouseleave",onScrollMouseLeave),move&&reference.addEventListener("mousemove",onMouseEnter,{once:!0}),reference.addEventListener("mouseenter",onMouseEnter),reference.addEventListener("mouseleave",onMouseLeave),()=>{open&&reference.removeEventListener("mouseleave",onScrollMouseLeave),null==floating||floating.removeEventListener("mouseleave",onScrollMouseLeave),move&&reference.removeEventListener("mousemove",onMouseEnter),reference.removeEventListener("mouseenter",onMouseEnter),reference.removeEventListener("mouseleave",onMouseLeave)}):void 0}),[_.domReference,enabled,context,mouseOnly,restMs,move,closeWithDelay,cleanupPointerMoveHandler,clearPointerEvents,onOpenChange,open,tree,refs,delayRef,handleCloseRef,dataRef]),floating_ui_react_dom_interactions_esm_index((()=>{if(enabled&&open&&handleCloseRef.current&&handleCloseRef.current.__options.blockPointerEvents&&isHoverOpen()){getDocument(refs.floating.current).body.style.pointerEvents="none",performedPointerEventsMutationRef.current=!0;const reference=refs.domReference.current,floating=refs.floating.current;if(isElement(reference)&&floating){var _tree$nodesRef$curren,_tree$nodesRef$curren2;const parentFloating=null==tree||null==(_tree$nodesRef$curren=tree.nodesRef.current.find((node=>node.id===parentId)))||null==(_tree$nodesRef$curren2=_tree$nodesRef$curren.context)?void 0:_tree$nodesRef$curren2.refs.floating.current;return parentFloating&&(parentFloating.style.pointerEvents=""),reference.style.pointerEvents="auto",floating.style.pointerEvents="auto",()=>{reference.style.pointerEvents="",floating.style.pointerEvents=""}}}}),[enabled,open,parentId,refs,tree,handleCloseRef,dataRef,isHoverOpen]),floating_ui_react_dom_interactions_esm_index((()=>{open||(pointerTypeRef.current=void 0,cleanupPointerMoveHandler(),performedPointerEventsMutationRef.current&&clearPointerEvents())}),[open,cleanupPointerMoveHandler,clearPointerEvents]),react.useEffect((()=>()=>{cleanupPointerMoveHandler(),clearTimeout(timeoutRef.current),clearTimeout(restTimeoutRef.current),performedPointerEventsMutationRef.current&&clearPointerEvents()}),[enabled,cleanupPointerMoveHandler,clearPointerEvents]),react.useMemo((()=>{if(!enabled)return{};function setPointerRef(event){pointerTypeRef.current=event.pointerType}return{reference:{onPointerDown:setPointerRef,onPointerEnter:setPointerRef,onMouseMove(){open||0===restMs||(clearTimeout(restTimeoutRef.current),restTimeoutRef.current=setTimeout((()=>{blockMouseMoveRef.current||onOpenChange(!0)}),restMs))}},floating:{onMouseEnter(){clearTimeout(timeoutRef.current)},onMouseLeave(){closeWithDelay(!1)}}}}),[enabled,restMs,open,onOpenChange,closeWithDelay])};const useRole=function(_ref,_temp){let{open}=_ref,{enabled=!0,role="dialog"}=void 0===_temp?{}:_temp;const rootId=useId(),referenceId=useId();return react.useMemo((()=>{const floatingProps={id:rootId,role};return enabled?"tooltip"===role?{reference:{"aria-describedby":open?rootId:void 0},floating:floatingProps}:{reference:{"aria-expanded":open?"true":"false","aria-haspopup":"alertdialog"===role?"dialog":role,"aria-controls":open?rootId:void 0,..."listbox"===role&&{role:"combobox"},..."menu"===role&&{id:referenceId}},floating:{...floatingProps,..."menu"===role&&{"aria-labelledby":referenceId}}}:{}}),[enabled,role,open,rootId,referenceId])};function isButtonTarget(event){return isHTMLElement(event.target)&&"BUTTON"===event.target.tagName}function isSpaceIgnored(element){return isTypeableElement(element)}const useClick=function(_ref,_temp){let{open,onOpenChange,dataRef,refs}=_ref,{enabled=!0,event:eventOption="click",toggle=!0,ignoreMouse=!1,keyboardHandlers=!0}=void 0===_temp?{}:_temp;const pointerTypeRef=react.useRef();return react.useMemo((()=>enabled?{reference:{onPointerDown(event){pointerTypeRef.current=event.pointerType},onMouseDown(event){0===event.button&&("mouse"===pointerTypeRef.current&&ignoreMouse||"click"!==eventOption&&(open?!toggle||dataRef.current.openEvent&&"mousedown"!==dataRef.current.openEvent.type||onOpenChange(!1):onOpenChange(!0),dataRef.current.openEvent=event.nativeEvent))},onClick(event){"mousedown"===eventOption&&pointerTypeRef.current?pointerTypeRef.current=void 0:"mouse"===pointerTypeRef.current&&ignoreMouse||(open?!toggle||dataRef.current.openEvent&&"click"!==dataRef.current.openEvent.type||onOpenChange(!1):onOpenChange(!0),dataRef.current.openEvent=event.nativeEvent)},onKeyDown(event){pointerTypeRef.current=void 0,keyboardHandlers&&(isButtonTarget(event)||(" "!==event.key||isSpaceIgnored(refs.domReference.current)||event.preventDefault(),"Enter"===event.key&&(open?toggle&&onOpenChange(!1):onOpenChange(!0))))},onKeyUp(event){keyboardHandlers&&(isButtonTarget(event)||isSpaceIgnored(refs.domReference.current)||" "===event.key&&(open?toggle&&onOpenChange(!1):onOpenChange(!0)))}}}:{}),[enabled,dataRef,eventOption,ignoreMouse,keyboardHandlers,refs,toggle,open,onOpenChange])};function isEventTargetWithin(event,node){if(null==node)return!1;if("composedPath"in event)return event.composedPath().includes(node);const e=event;return null!=e.target&&node.contains(e.target)}const bubbleHandlerKeys={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},captureHandlerKeys={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},useDismiss=function(_ref,_temp){let{open,onOpenChange,refs,events,nodeId}=_ref,{enabled=!0,escapeKey=!0,outsidePress=!0,outsidePressEvent="pointerdown",referencePress=!1,referencePressEvent="pointerdown",ancestorScroll=!1,bubbles=!0}=void 0===_temp?{}:_temp;const tree=useFloatingTree(),nested=null!=useFloatingParentNodeId(),insideReactTreeRef=react.useRef(!1);return react.useEffect((()=>{if(!open||!enabled)return;function onKeyDown(event){if("Escape"===event.key){if(!bubbles&&tree&&getChildren(tree.nodesRef.current,nodeId).length>0)return;events.emit("dismiss",{preventScroll:!1}),onOpenChange(!1)}}function onOutsidePress(event){const insideReactTree=insideReactTreeRef.current;if(insideReactTreeRef.current=!1,insideReactTree)return;const target=getTarget(event);if(isElement(target)&&refs.floating.current){var _refs$floating$curren;const win=null!=(_refs$floating$curren=refs.floating.current.ownerDocument.defaultView)?_refs$floating$curren:window,canScrollX=target.scrollWidth>target.clientWidth,canScrollY=target.scrollHeight>target.clientHeight;let xCond=canScrollY&&event.offsetX>target.clientWidth;if(canScrollY){"rtl"===win.getComputedStyle(target).direction&&(xCond=event.offsetX<=target.offsetWidth-target.clientWidth)}if(xCond||canScrollX&&event.offsetY>target.clientHeight)return}const targetIsInsideChildren=tree&&getChildren(tree.nodesRef.current,nodeId).some((node=>{var _node$context;return isEventTargetWithin(event,null==(_node$context=node.context)?void 0:_node$context.refs.floating.current)}));isEventTargetWithin(event,refs.floating.current)||isEventTargetWithin(event,refs.domReference.current)||targetIsInsideChildren||!bubbles&&tree&&getChildren(tree.nodesRef.current,nodeId).length>0||(events.emit("dismiss",!!nested&&{preventScroll:!0}),onOpenChange(!1))}function onScroll(){onOpenChange(!1)}const doc=getDocument(refs.floating.current);escapeKey&&doc.addEventListener("keydown",onKeyDown),outsidePress&&doc.addEventListener(outsidePressEvent,onOutsidePress);let ancestors=[];return ancestorScroll&&(isElement(refs.domReference.current)&&(ancestors=(0,floating_ui_dom_browser_min.Kx)(refs.domReference.current)),isElement(refs.floating.current)&&(ancestors=ancestors.concat((0,floating_ui_dom_browser_min.Kx)(refs.floating.current))),!isElement(refs.reference.current)&&refs.reference.current&&refs.reference.current.contextElement&&(ancestors=ancestors.concat((0,floating_ui_dom_browser_min.Kx)(refs.reference.current.contextElement)))),ancestors=ancestors.filter((ancestor=>{var _doc$defaultView;return ancestor!==(null==(_doc$defaultView=doc.defaultView)?void 0:_doc$defaultView.visualViewport)})),ancestors.forEach((ancestor=>{ancestor.addEventListener("scroll",onScroll,{passive:!0})})),()=>{escapeKey&&doc.removeEventListener("keydown",onKeyDown),outsidePress&&doc.removeEventListener(outsidePressEvent,onOutsidePress),ancestors.forEach((ancestor=>{ancestor.removeEventListener("scroll",onScroll)}))}}),[escapeKey,outsidePress,outsidePressEvent,events,tree,nodeId,open,onOpenChange,ancestorScroll,enabled,bubbles,refs,nested]),react.useEffect((()=>{insideReactTreeRef.current=!1}),[outsidePress,outsidePressEvent]),react.useMemo((()=>enabled?{reference:{[bubbleHandlerKeys[referencePressEvent]]:()=>{referencePress&&(events.emit("dismiss"),onOpenChange(!1))}},floating:{[captureHandlerKeys[outsidePressEvent]]:()=>{insideReactTreeRef.current=!0}}}:{}),[enabled,events,referencePress,outsidePressEvent,referencePressEvent,onOpenChange])},useFocus=function(_ref,_temp){let{open,onOpenChange,dataRef,refs,events}=_ref,{enabled=!0,keyboardOnly=!0}=void 0===_temp?{}:_temp;const pointerTypeRef=react.useRef(""),blockFocusRef=react.useRef(!1),timeoutRef=react.useRef();return react.useEffect((()=>{var _doc$defaultView;if(!enabled)return;const win=null!=(_doc$defaultView=getDocument(refs.floating.current).defaultView)?_doc$defaultView:window;function onBlur(){!open&&isHTMLElement(refs.domReference.current)&&refs.domReference.current.blur()}return win.addEventListener("blur",onBlur),()=>{win.removeEventListener("blur",onBlur)}}),[refs,open,enabled]),react.useEffect((()=>{if(enabled)return events.on("dismiss",onDismiss),()=>{events.off("dismiss",onDismiss)};function onDismiss(){blockFocusRef.current=!0}}),[events,enabled]),react.useEffect((()=>()=>{clearTimeout(timeoutRef.current)}),[]),react.useMemo((()=>enabled?{reference:{onPointerDown(_ref2){let{pointerType}=_ref2;pointerTypeRef.current=pointerType,blockFocusRef.current=!(!pointerType||!keyboardOnly)},onPointerLeave(){blockFocusRef.current=!1},onFocus(event){var _dataRef$current$open,_refs$domReference$cu,_dataRef$current$open2;blockFocusRef.current||"focus"===event.type&&"mousedown"===(null==(_dataRef$current$open=dataRef.current.openEvent)?void 0:_dataRef$current$open.type)&&null!=(_refs$domReference$cu=refs.domReference.current)&&_refs$domReference$cu.contains(null==(_dataRef$current$open2=dataRef.current.openEvent)?void 0:_dataRef$current$open2.target)||(dataRef.current.openEvent=event.nativeEvent,onOpenChange(!0))},onBlur(event){const target=event.relatedTarget;timeoutRef.current=setTimeout((()=>{var _refs$floating$curren,_refs$domReference$cu2;null!=(_refs$floating$curren=refs.floating.current)&&_refs$floating$curren.contains(target)||null!=(_refs$domReference$cu2=refs.domReference.current)&&_refs$domReference$cu2.contains(target)||(blockFocusRef.current=!1,onOpenChange(!1))}))}}}:{}),[enabled,keyboardOnly,refs,dataRef,onOpenChange])}}}]);