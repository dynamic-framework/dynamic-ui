import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-QK21szlK.js";import{r as T}from"./index-BAewX9IB.js";import{D as F,a as U,P as C}from"./config-7dXXkQRG.js";function $(e){o.useEffect(()=>{let t,r;const s=()=>{const{clientWidth:l}=document.documentElement,{innerWidth:u}=window,m=l?u-l:0;document.body.style.overflow="hidden",document.body.style.paddingRight=`${Math.max(0,m)}px`},n=()=>{document.body.style.overflow="unset",document.body.style.paddingRight="0px"};return e?s():document.querySelector(".portal")?(t=new MutationObserver(()=>{document.querySelector(".portal")||(n(),t==null||t.disconnect())}),t.observe(document.body,{childList:!0,subtree:!0}),r=window.setTimeout(()=>{n(),t==null||t.disconnect()},300)):n(),()=>{t&&t.disconnect(),r&&window.clearTimeout(r)}},[e])}function V(e){const[t,r]=o.useState(!1);return o.useEffect(()=>{const s=document.querySelector(`#${e}`);s&&s.remove();const n=document.createElement("div");n.id=e,n.className="d-portal",document.body.appendChild(n),r(!0)},[e]),{created:t}}function j(e=[]){const[t,r]=o.useState(e),s=o.useCallback(p=>r(c=>[...c,p]),[]),n=o.useCallback(()=>r(p=>p.slice(0,p.length-1)),[]),l=o.useCallback(()=>t.at(-1),[t]),u=o.useCallback(()=>r([]),[]),m=o.useCallback(()=>t.length===0,[t.length]),h=o.useMemo(()=>({clear:u,isEmpty:m,length:t.length,peek:l,pop:n,push:s}),[u,m,t.length,l,n,s]);return[t,h]}function O(e){return e?[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(t=>!t.hasAttribute("disabled")):[]}function w({stack:e}){return d.jsx(d.Fragment,{children:e.flatMap(({Component:t,name:r,payload:s})=>[d.jsx("div",{className:"backdrop show"},`${r}-backdrop`),d.jsx(t,{name:r,payload:s},r)])})}try{w.displayName="DPortalStackStatic",w.__docgenInfo={description:"Portal stack without animations. Default renderer until an overlay component\nregisters the animated `DPortalStack`.",displayName:"DPortalStackStatic",props:{stack:{defaultValue:null,description:"",name:"stack",required:!0,type:{name:"{ name: string; Component: FC<{ name: string; payload: any; }>; payload: unknown; }[]"}}}}}catch{}let E=w;const S=new Set;function z(e){E!==e&&(E=e,S.forEach(t=>t()))}function B(e){return S.add(e),()=>{S.delete(e)}}function L(){return E}const _=o.createContext(void 0);function I({portalName:e,children:t,availablePortals:r}){const{created:s}=V(e),[n,{push:l,pop:u}]=j([]);$(!!n.length);const m=o.useSyncExternalStore(B,L,L),h=Object.keys(r??{}).length>0||n.length>0,p=o.useCallback(function(a,P){var v;if(!r)throw new Error("openPortal was called but DContextProvider has no availablePortals configured. Pass an availablePortals map to DContextProvider.");const f=r[a];if(!f)throw new Error(`No component registered for portal "${String(a)}". Ensure "${String(a)}" has an entry in the availablePortals map on DContextProvider.`);l({name:a,Component:f,payload:P}),(v=document.activeElement)==null||v.blur()},[r,l]),c=o.useCallback(()=>{u()},[u]),b=o.useMemo(()=>n.map(({name:i,payload:a})=>({name:i,payload:a})),[n]),k=o.useMemo(()=>({stack:b,openPortal:p,closePortal:c}),[b,p,c]),g=o.useCallback(i=>{if(i instanceof HTMLDivElement){if(i.classList.contains("portal")&&!("bsBackdrop"in i.dataset)){c();return}if(i.classList.contains("backdrop")){const a=i.nextElementSibling;a&&a.classList.contains("portal")&&!("bsBackdrop"in a.dataset)&&c()}}},[c]);return o.useEffect(()=>{const i=a=>{const P=document.querySelector(`#${e} > div > div:last-child`);if(a.key==="Escape"&&P){g(P);return}if(a.key==="Tab"){const f=O(P);if(f.length===0)return;const v=f[0],M=f[f.length-1];a.shiftKey&&document.activeElement===v?(a.preventDefault(),M.focus()):!a.shiftKey&&document.activeElement===M&&(a.preventDefault(),v.focus())}};return n.length!==0&&window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[g,e,n.length]),d.jsxs(_.Provider,{value:k,children:[t,s&&h&&T.createPortal(d.jsx("div",{onClick:({target:i})=>g(i),onKeyDown:()=>{},children:d.jsx(m,{stack:n})}),document.getElementById(e))]})}function N(){const e=o.useContext(_);if(e===void 0)throw new Error("useDPortalContext was used outside of DPortalContextProvider");return e}try{I.displayName="DPortalContextProvider",I.__docgenInfo={description:"",displayName:"DPortalContextProvider",props:{portalName:{defaultValue:null,description:"DOM element id used as the portal mount point.",name:"portalName",required:!0,type:{name:"string"}},availablePortals:{defaultValue:null,description:"Map of portal name to the component that renders it.",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}}}catch{}try{N.displayName="useDPortalContext",N.__docgenInfo={description:"Hook to open/close registered portals (modals, offcanvas, etc.).\n\n**Prerequisite**: must be called inside a `DContextProvider` configured with\n`portalName` and `availablePortals`. `DContextProvider` mounts\n`DPortalContextProvider` internally — consumers never use\n`DPortalContextProvider` directly.",displayName:"useDPortalContext",props:{}}}catch{}try{_.displayName="DPortalContext",_.__docgenInfo={description:"",displayName:"DPortalContext",props:{}}}catch{}function X(){const e=new Set;let t=[];function r(){e.forEach(n=>n([...t]))}return{subscribe(n){return e.add(n),n([...t]),()=>{e.delete(n)}},push(n){t=[...t,n],r()},remove(n){t=t.filter(l=>l.id!==n),r()}}}const R=o.createContext(null);function G(){const e=o.useContext(R);if(!e)throw new Error("useConfirmModal must be used within a <DContextProvider>.");return e}function x(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}const y={language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."},icon:{familyClass:U,familyPrefix:F,materialStyle:!1},iconRegistry:void 0,iconMap:{x:"X",xLg:"X",chevronUp:"ChevronUp",chevronDown:"ChevronDown",chevronLeft:"ChevronLeft",chevronRight:"ChevronRight",upload:"Upload",calendar:"Calendar",check:"Check",alert:{warning:"AlertCircle",danger:"AlertTriangle",success:"CheckCircle",info:"Info"},input:{search:"Search",show:"Eye",hide:"EyeOff",increase:"Plus",decrease:"Minus"}},breakpoints:{xs:"",sm:"",md:"",lg:"",xl:"",xxl:""},setContext:()=>{}},D=o.createContext(y);function A({language:e=y.language,currency:t=y.currency,icon:r=y.icon,iconRegistry:s=y.iconRegistry,iconMap:n=y.iconMap,portalName:l="d-portal",availablePortals:u,children:m}){const[h,p]=o.useState({language:e,currency:t,icon:r,iconRegistry:s,iconMap:n,breakpoints:y.breakpoints}),c=o.useCallback(g=>p(i=>({...i,...g})),[]);o.useLayoutEffect(()=>{c({breakpoints:{xs:x(`--${C}breakpoint-xs`),sm:x(`--${C}breakpoint-sm`),md:x(`--${C}breakpoint-md`),lg:x(`--${C}breakpoint-lg`),xl:x(`--${C}breakpoint-xl`),xxl:x(`--${C}breakpoint-xxl`)}})},[c]);const b=o.useMemo(()=>({...h,setContext:c}),[h,c]),k=o.useMemo(()=>X(),[]);return d.jsx(R.Provider,{value:k,children:d.jsx(D.Provider,{value:b,children:d.jsx(I,{portalName:l,availablePortals:u,children:m})})})}function q(){return o.useContext(D)}try{A.displayName="DContextProvider",A.__docgenInfo={description:`Root context provider for Dynamic UI. Wrap your application with this
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
  }`},description:"",name:"iconMap",required:!1,type:{name:"IconMapProps | undefined"}},breakpoints:{defaultValue:null,description:"",name:"breakpoints",required:!1,type:{name:"BreakpointProps | undefined"}},portalName:{defaultValue:{value:"d-portal"},description:"DOM element id used as the portal mount point.",name:"portalName",required:!1,type:{name:"string | undefined"}},availablePortals:{defaultValue:null,description:"Map of portal name to the component that renders it.",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}}}catch{}try{q.displayName="useDContext",q.__docgenInfo={description:"Returns the Dynamic UI context value set by `DContextProvider`.\nFalls back to the library's built-in defaults when no `DContextProvider`\nis present in the tree — wrap your application with `DContextProvider`\nto customise icons, currency, language, and portal settings.",displayName:"useDContext",props:{}}}catch{}try{D.displayName="DContext",D.__docgenInfo={description:"",displayName:"DContext",props:{}}}catch{}export{A as D,N as a,G as b,x as g,z as r,q as u};
