import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-DJkQ9I2N.js";import{r as F}from"./index-D81MgoPg.js";import{D as R,a as U,P as C}from"./config-7dXXkQRG.js";function $(e){r.useEffect(()=>{let t,o;const s=()=>{const{clientWidth:l}=document.documentElement,{innerWidth:u}=window,f=l?u-l:0;document.body.style.overflow="hidden",document.body.style.paddingRight=`${Math.max(0,f)}px`},n=()=>{document.body.style.overflow="unset",document.body.style.paddingRight="0px"};return e?s():document.querySelector(".portal")?(t=new MutationObserver(()=>{document.querySelector(".portal")||(n(),t==null||t.disconnect())}),t.observe(document.body,{childList:!0,subtree:!0}),o=window.setTimeout(()=>{n(),t==null||t.disconnect()},300)):n(),()=>{t&&t.disconnect(),o&&window.clearTimeout(o)}},[e])}function V(e){const[t,o]=r.useState(!1);return r.useEffect(()=>{const s=document.querySelector(`#${e}`);s&&s.remove();const n=document.createElement("div");n.id=e,n.className="d-portal",document.body.appendChild(n),o(!0)},[e]),{created:t}}function j(e=[]){const[t,o]=r.useState(e),s=r.useCallback(p=>o(c=>[...c,p]),[]),n=r.useCallback(()=>o(p=>p.slice(0,p.length-1)),[]),l=r.useCallback(()=>t.at(-1),[t]),u=r.useCallback(()=>o([]),[]),f=r.useCallback(()=>t.length===0,[t.length]),h=r.useMemo(()=>({clear:u,isEmpty:f,length:t.length,peek:l,pop:n,push:s}),[u,f,t.length,l,n,s]);return[t,h]}const O="a, button, input, textarea, select, details, [tabindex]";function B(e,t){if(e.hasAttribute("disabled")||e.getAttribute("tabindex")==="-1"||e instanceof HTMLInputElement&&e.type==="hidden"||e.closest("[hidden], [inert]")||getComputedStyle(e).visibility==="hidden")return!1;let o=e;for(;o&&o!==t;){if(getComputedStyle(o).display==="none")return!1;o=o.parentElement}return!0}function X(e){return e?[...e.querySelectorAll(O)].filter(t=>B(t,e)):[]}function E({stack:e}){return d.jsx(d.Fragment,{children:e.flatMap(({Component:t,name:o,payload:s})=>[d.jsx("div",{className:"backdrop show"},`${o}-backdrop`),d.jsx(t,{name:o,payload:s},o)])})}try{E.displayName="DPortalStackStatic",E.__docgenInfo={description:"Portal stack without animations. Default renderer until an overlay component\nregisters the animated `DPortalStack`.",displayName:"DPortalStackStatic",props:{stack:{defaultValue:null,description:"",name:"stack",required:!0,type:{name:"{ name: string; Component: FC<{ name: string; payload: any; }>; payload: unknown; }[]"}}}}}catch{}let S=E;const w=new Set;function J(e){S!==e&&(S=e,w.forEach(t=>t()))}function K(e){return w.add(e),()=>{w.delete(e)}}function L(){return S}const D=r.createContext(void 0);function I({portalName:e,children:t,availablePortals:o}){const{created:s}=V(e),[n,{push:l,pop:u}]=j([]);$(!!n.length);const f=r.useSyncExternalStore(K,L,L),h=Object.keys(o??{}).length>0||n.length>0,p=r.useCallback(function(a,P){var v;if(!o)throw new Error("openPortal was called but DContextProvider has no availablePortals configured. Pass an availablePortals map to DContextProvider.");const m=o[a];if(!m)throw new Error(`No component registered for portal "${String(a)}". Ensure "${String(a)}" has an entry in the availablePortals map on DContextProvider.`);l({name:a,Component:m,payload:P}),(v=document.activeElement)==null||v.blur()},[o,l]),c=r.useCallback(()=>{u()},[u]),b=r.useMemo(()=>n.map(({name:i,payload:a})=>({name:i,payload:a})),[n]),k=r.useMemo(()=>({stack:b,openPortal:p,closePortal:c}),[b,p,c]),x=r.useCallback(i=>{if(i instanceof HTMLDivElement){if(i.classList.contains("portal")&&!("bsBackdrop"in i.dataset)){c();return}if(i.classList.contains("backdrop")){const a=i.nextElementSibling;a&&a.classList.contains("portal")&&!("bsBackdrop"in a.dataset)&&c()}}},[c]);return r.useEffect(()=>{const i=a=>{const P=document.querySelector(`#${e} > div > div:last-child`);if(a.key==="Escape"&&P){x(P);return}if(a.key==="Tab"){const m=X(P);if(m.length===0)return;const v=m[0],M=m[m.length-1];a.shiftKey&&document.activeElement===v?(a.preventDefault(),M.focus()):!a.shiftKey&&document.activeElement===M&&(a.preventDefault(),v.focus())}};return n.length!==0&&window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[x,e,n.length]),d.jsxs(D.Provider,{value:k,children:[t,s&&h&&F.createPortal(d.jsx("div",{onClick:({target:i})=>x(i),onKeyDown:()=>{},children:d.jsx(f,{stack:n})}),document.getElementById(e))]})}function N(){const e=r.useContext(D);if(e===void 0)throw new Error("useDPortalContext was used outside of DPortalContextProvider");return e}try{I.displayName="DPortalContextProvider",I.__docgenInfo={description:"",displayName:"DPortalContextProvider",props:{portalName:{defaultValue:null,description:"DOM element id used as the portal mount point.",name:"portalName",required:!0,type:{name:"string"}},availablePortals:{defaultValue:null,description:"Map of portal name to the component that renders it.",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}}}catch{}try{N.displayName="useDPortalContext",N.__docgenInfo={description:"Hook to open/close registered portals (modals, offcanvas, etc.).\n\n**Prerequisite**: must be called inside a `DContextProvider` configured with\n`portalName` and `availablePortals`. `DContextProvider` mounts\n`DPortalContextProvider` internally — consumers never use\n`DPortalContextProvider` directly.",displayName:"useDPortalContext",props:{}}}catch{}try{D.displayName="DPortalContext",D.__docgenInfo={description:"",displayName:"DPortalContext",props:{}}}catch{}function H(){const e=new Set;let t=[];function o(){e.forEach(n=>n([...t]))}return{subscribe(n){return e.add(n),n([...t]),()=>{e.delete(n)}},push(n){t=[...t,n],o()},remove(n){t=t.filter(l=>l.id!==n),o()}}}const q=r.createContext(null);function Q(){const e=r.useContext(q);if(!e)throw new Error("useConfirmModal must be used within a <DContextProvider>.");return e}function g(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}const y={language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."},icon:{familyClass:U,familyPrefix:R,materialStyle:!1},iconRegistry:void 0,iconMap:{x:"X",xLg:"X",chevronUp:"ChevronUp",chevronDown:"ChevronDown",chevronLeft:"ChevronLeft",chevronRight:"ChevronRight",upload:"Upload",calendar:"Calendar",check:"Check",alert:{warning:"AlertCircle",danger:"AlertTriangle",success:"CheckCircle",info:"Info"},input:{search:"Search",show:"Eye",hide:"EyeOff",increase:"Plus",decrease:"Minus"}},breakpoints:{xs:"",sm:"",md:"",lg:"",xl:"",xxl:""},setContext:()=>{}},_=r.createContext(y);function A({language:e=y.language,currency:t=y.currency,icon:o=y.icon,iconRegistry:s=y.iconRegistry,iconMap:n=y.iconMap,portalName:l="d-portal",availablePortals:u,children:f}){const[h,p]=r.useState({language:e,currency:t,icon:o,iconRegistry:s,iconMap:n,breakpoints:y.breakpoints}),c=r.useCallback(x=>p(i=>({...i,...x})),[]);r.useLayoutEffect(()=>{c({breakpoints:{xs:g(`--${C}breakpoint-xs`),sm:g(`--${C}breakpoint-sm`),md:g(`--${C}breakpoint-md`),lg:g(`--${C}breakpoint-lg`),xl:g(`--${C}breakpoint-xl`),xxl:g(`--${C}breakpoint-xxl`)}})},[c]);const b=r.useMemo(()=>({...h,setContext:c}),[h,c]),k=r.useMemo(()=>H(),[]);return d.jsx(q.Provider,{value:k,children:d.jsx(_.Provider,{value:b,children:d.jsx(I,{portalName:l,availablePortals:u,children:f})})})}function T(){return r.useContext(_)}try{A.displayName="DContextProvider",A.__docgenInfo={description:`Root context provider for Dynamic UI. Wrap your application with this
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
  }`},description:"",name:"iconMap",required:!1,type:{name:"IconMapProps | undefined"}},breakpoints:{defaultValue:null,description:`@deprecated No effect since 2.11.0: breakpoints are read from the
--bs-breakpoint-* custom properties`,name:"breakpoints",required:!1,type:{name:"BreakpointProps | undefined"}},portalName:{defaultValue:{value:"d-portal"},description:"DOM element id used as the portal mount point.",name:"portalName",required:!1,type:{name:"string | undefined"}},availablePortals:{defaultValue:null,description:"Map of portal name to the component that renders it.",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}}}catch{}try{T.displayName="useDContext",T.__docgenInfo={description:"Returns the Dynamic UI context value set by `DContextProvider`.\nFalls back to the library's built-in defaults when no `DContextProvider`\nis present in the tree — wrap your application with `DContextProvider`\nto customise icons, currency, language, and portal settings.",displayName:"useDContext",props:{}}}catch{}try{_.displayName="DContext",_.__docgenInfo={description:"",displayName:"DContext",props:{}}}catch{}export{A as D,N as a,Q as b,X as c,g,J as r,T as u};
