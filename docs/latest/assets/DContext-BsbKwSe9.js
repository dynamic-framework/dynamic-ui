const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DPortalStack-Bc26OIup.js","./jsx-runtime-D_zvdyIk.js","./index-BVcpLzOQ.js","./iframe-BOlGrI6L.js","./preload-helper-Dp1pzeXC.js","./proxy-CA07oZ9R.js"])))=>i.map(i=>d[i]);
import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-BOlGrI6L.js";import{_ as F}from"./preload-helper-Dp1pzeXC.js";import{r as U}from"./index-B7vmrvBm.js";import{D as V,a as $,P as C}from"./config-7dXXkQRG.js";function O(e){n.useEffect(()=>{let t,r;const l=()=>{const{clientWidth:i}=document.documentElement,{innerWidth:u}=window,p=i?u-i:0;document.body.style.overflow="hidden",document.body.style.paddingRight=`${Math.max(0,p)}px`},o=()=>{document.body.style.overflow="unset",document.body.style.paddingRight="0px"};return e?l():document.querySelector(".portal")?(t=new MutationObserver(()=>{document.querySelector(".portal")||(o(),t==null||t.disconnect())}),t.observe(document.body,{childList:!0,subtree:!0}),r=window.setTimeout(()=>{o(),t==null||t.disconnect()},300)):o(),()=>{t&&t.disconnect(),r&&window.clearTimeout(r)}},[e])}function j(e){const[t,r]=n.useState(!1);return n.useEffect(()=>{const l=document.querySelector(`#${e}`);l&&l.remove();const o=document.createElement("div");o.id=e,o.className="d-portal",document.body.appendChild(o),r(!0)},[e]),{created:t}}function B(e=[]){const[t,r]=n.useState(e),l=n.useCallback(c=>r(d=>[...d,c]),[]),o=n.useCallback(()=>r(c=>c.slice(0,c.length-1)),[]),i=n.useCallback(()=>t.at(-1),[t]),u=n.useCallback(()=>r([]),[]),p=n.useCallback(()=>t.length===0,[t.length]),m=n.useMemo(()=>({clear:u,isEmpty:p,length:t.length,peek:i,pop:o,push:l}),[u,p,t.length,i,o,l]);return[t,m]}function X(e){return e?[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(t=>!t.hasAttribute("disabled")):[]}const L=()=>F(()=>import("./DPortalStack-Bc26OIup.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(e=>e.default),E=n.createContext(void 0);function M({portalName:e,children:t,availablePortals:r}){const{created:l}=j(e),[o,{push:i,pop:u}]=B([]),[p,m]=n.useState(null),c=n.useRef([]),d=n.useRef(!1);O(!!o.length);const b=Object.keys(r??{}).length>0;n.useEffect(()=>{b&&L().then(s=>{d.current=!0,m(()=>s)}).catch(()=>{})},[b]);const D=n.useCallback(function(a,v){var _;if(!r)throw new Error("openPortal was called but DContextProvider has no availablePortals configured. Pass an availablePortals map to DContextProvider.");const h=r[a];if(!h)throw new Error(`No component registered for portal "${String(a)}". Ensure "${String(a)}" has an entry in the availablePortals map on DContextProvider.`);const P={name:a,Component:h,payload:v};d.current?i(P):(c.current.push(P),L().then(I=>{d.current=!0,m(()=>I),c.current.splice(0).forEach(i)}).catch(I=>{c.current=[],console.error("[DPortalContext] Could not load the portal stack",I)})),(_=document.activeElement)==null||_.blur()},[r,i]),f=n.useCallback(()=>{if(c.current.length>0){c.current.pop();return}u()},[u]),k=n.useMemo(()=>o.map(({name:s,payload:a})=>({name:s,payload:a})),[o]),q=n.useMemo(()=>({stack:k,openPortal:D,closePortal:f}),[k,D,f]),S=n.useCallback(s=>{if(s instanceof HTMLDivElement){if(s.classList.contains("portal")&&!("bsBackdrop"in s.dataset)){f();return}if(s.classList.contains("backdrop")){const a=s.nextElementSibling;a&&a.classList.contains("portal")&&!("bsBackdrop"in a.dataset)&&f()}}},[f]);return n.useEffect(()=>{const s=a=>{const v=document.querySelector(`#${e} > div > div:last-child`);if(a.key==="Escape"&&v){S(v);return}if(a.key==="Tab"){const h=X(v);if(h.length===0)return;const P=h[0],_=h[h.length-1];a.shiftKey&&document.activeElement===P?(a.preventDefault(),_.focus()):!a.shiftKey&&document.activeElement===_&&(a.preventDefault(),P.focus())}};return o.length!==0&&window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[S,e,o.length]),g.jsxs(E.Provider,{value:q,children:[t,l&&p&&U.createPortal(g.jsx("div",{onClick:({target:s})=>S(s),onKeyDown:()=>{},children:g.jsx(p,{stack:o})}),document.getElementById(e))]})}function A(){const e=n.useContext(E);if(e===void 0)throw new Error("useDPortalContext was used outside of DPortalContextProvider");return e}try{M.displayName="DPortalContextProvider",M.__docgenInfo={description:"",displayName:"DPortalContextProvider",props:{portalName:{defaultValue:null,description:"DOM element id used as the portal mount point.",name:"portalName",required:!0,type:{name:"string"}},availablePortals:{defaultValue:null,description:"Map of portal name to the component that renders it.",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}}}catch{}try{A.displayName="useDPortalContext",A.__docgenInfo={description:"Hook to open/close registered portals (modals, offcanvas, etc.).\n\n**Prerequisite**: must be called inside a `DContextProvider` configured with\n`portalName` and `availablePortals`. `DContextProvider` mounts\n`DPortalContextProvider` internally — consumers never use\n`DPortalContextProvider` directly.",displayName:"useDPortalContext",props:{}}}catch{}try{E.displayName="DPortalContext",E.__docgenInfo={description:"",displayName:"DPortalContext",props:{}}}catch{}function K(){const e=new Set;let t=[];function r(){e.forEach(o=>o([...t]))}return{subscribe(o){return e.add(o),o([...t]),()=>{e.delete(o)}},push(o){t=[...t,o],r()},remove(o){t=t.filter(i=>i.id!==o),r()}}}const T=n.createContext(null);function J(){const e=n.useContext(T);if(!e)throw new Error("useConfirmModal must be used within a <DContextProvider>.");return e}function x(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}const y={language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."},icon:{familyClass:$,familyPrefix:V,materialStyle:!1},iconRegistry:void 0,iconMap:{x:"X",xLg:"X",chevronUp:"ChevronUp",chevronDown:"ChevronDown",chevronLeft:"ChevronLeft",chevronRight:"ChevronRight",upload:"Upload",calendar:"Calendar",check:"Check",alert:{warning:"AlertCircle",danger:"AlertTriangle",success:"CheckCircle",info:"Info"},input:{search:"Search",show:"Eye",hide:"EyeOff",increase:"Plus",decrease:"Minus"}},breakpoints:{xs:"",sm:"",md:"",lg:"",xl:"",xxl:""},setContext:()=>{}},w=n.createContext(y);function N({language:e=y.language,currency:t=y.currency,icon:r=y.icon,iconRegistry:l=y.iconRegistry,iconMap:o=y.iconMap,portalName:i="d-portal",availablePortals:u,children:p}){const[m,c]=n.useState({language:e,currency:t,icon:r,iconRegistry:l,iconMap:o,breakpoints:y.breakpoints}),d=n.useCallback(f=>c(k=>({...k,...f})),[]);n.useLayoutEffect(()=>{d({breakpoints:{xs:x(`--${C}breakpoint-xs`),sm:x(`--${C}breakpoint-sm`),md:x(`--${C}breakpoint-md`),lg:x(`--${C}breakpoint-lg`),xl:x(`--${C}breakpoint-xl`),xxl:x(`--${C}breakpoint-xxl`)}})},[d]);const b=n.useMemo(()=>({...m,setContext:d}),[m,d]),D=n.useMemo(()=>K(),[]);return g.jsx(T.Provider,{value:D,children:g.jsx(w.Provider,{value:b,children:g.jsx(M,{portalName:i,availablePortals:u,children:p})})})}function R(){return n.useContext(w)}try{N.displayName="DContextProvider",N.__docgenInfo={description:`Root context provider for Dynamic UI. Wrap your application with this
component to configure icons, currency, language, and portal settings
for all descendant Dynamic UI components.

To enable confirmation modals you must also mount \`DConfirmModalContainer\`
somewhere inside this provider (typically right before the closing tag of
your root layout), similar to how \`DToastContainer\` works:

\`\`\`tsx
// Default: portalName="d-portal"
<DContextProvider>
  <App />
  <DConfirmModalContainer nodeId="d-portal" />
</DContextProvider>
\`\`\`

If you customize \`portalName\`, match it in \`DConfirmModalContainer.nodeId\`:

\`\`\`tsx
// Custom portalName
<DContextProvider portalName="my-custom-portal">
  <App />
  <DConfirmModalContainer nodeId="my-custom-portal" />
</DContextProvider>
\`\`\``,displayName:"DContextProvider",props:{language:{defaultValue:{value:"en"},description:"",name:"language",required:!1,type:{name:"string | undefined"}},currency:{defaultValue:{value:`{
    symbol: '$',
    precision: 2,
    separator: ',',
    decimal: '.',
  }`},description:"",name:"currency",required:!1,type:{name:"CurrencyProps | undefined"}},icon:{defaultValue:{value:`{
    familyClass: DEFAULT_ICON_FAMILY_CLASS,
    familyPrefix: DEFAULT_ICON_FAMILY_PREFIX,
    materialStyle: false,
  }`},description:"",name:"icon",required:!1,type:{name:"IconProps | undefined"}},iconRegistry:{defaultValue:{value:"undefined"},description:"",name:"iconRegistry",required:!1,type:{name:"Record<string, IconComponent> | undefined"}},iconMap:{defaultValue:{value:`{
    x: 'X',
    xLg: 'X',
    chevronUp: 'ChevronUp',
    chevronDown: 'ChevronDown',
    chevronLeft: 'ChevronLeft',
    chevronRight: 'ChevronRight',
    upload: 'Upload',
    calendar: 'Calendar',
    check: 'Check',
    alert: {
      warning: 'AlertCircle',
      danger: 'AlertTriangle',
      success: 'CheckCircle',
      info: 'Info',
    },
    input: {
      search: 'Search',
      show: 'Eye',
      hide: 'EyeOff',
      increase: 'Plus',
      decrease: 'Minus',
    },
  }`},description:"",name:"iconMap",required:!1,type:{name:"IconMapProps | undefined"}},breakpoints:{defaultValue:null,description:"",name:"breakpoints",required:!1,type:{name:"BreakpointProps | undefined"}},portalName:{defaultValue:{value:"d-portal"},description:"DOM element id used as the portal mount point.",name:"portalName",required:!1,type:{name:"string | undefined"}},availablePortals:{defaultValue:null,description:"Map of portal name to the component that renders it.",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}}}catch{}try{R.displayName="useDContext",R.__docgenInfo={description:"Returns the Dynamic UI context value set by `DContextProvider`.\nFalls back to the library's built-in defaults when no `DContextProvider`\nis present in the tree — wrap your application with `DContextProvider`\nto customise icons, currency, language, and portal settings.",displayName:"useDContext",props:{}}}catch{}try{w.displayName="DContext",w.__docgenInfo={description:"",displayName:"DContext",props:{}}}catch{}export{N as D,A as a,J as b,x as g,R as u};
