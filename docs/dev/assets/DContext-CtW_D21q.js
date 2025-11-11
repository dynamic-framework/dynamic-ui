import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-ByOBXyA_.js";import{r as D}from"./index-j79j67Hz.js";import{P as x}from"./config-C3iYXcFk.js";function S(e){t.useEffect(()=>{e?(document.body.style.overflow="hidden",document.body.style.paddingRight="0"):(document.body.style.overflow="unset",document.body.style.paddingRight="unset")},[e])}function L(e){const[o,l]=t.useState(!1);return t.useEffect(()=>{const i=document.querySelector(`#${e}`);i&&i.remove();const r=document.createElement("div");r.id=e,r.className="d-portal",document.body.appendChild(r),l(!0)},[e]),{created:o}}function q(e=[]){const[o,l]=t.useState(e),i=t.useCallback(a=>l(g=>[...g,a]),[]),r=t.useCallback(()=>l(a=>a.slice(0,a.length-1)),[]),u=t.useCallback(()=>o.at(-1),[o]),p=t.useCallback(()=>l([]),[]),c=t.useCallback(()=>o.length===0,[o.length]),y=t.useMemo(()=>({clear:p,isEmpty:c,length:o.length,peek:u,pop:r,push:i}),[p,c,o.length,u,r,i]);return[o,y]}function $(e){return e?[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(o=>!o.hasAttribute("disabled")):[]}const b=t.createContext(void 0);function k({portalName:e,children:o,availablePortals:l}){const{created:i}=L(e),[r,{push:u,pop:p,isEmpty:c}]=q([]);S(!!r.length);const y=t.useCallback((n,s)=>{var f;if(!l)throw new Error(`there is no component for portal ${n.toString()}`);const d=l[n];if(!d)throw new Error(`there is no component for portal ${n.toString()}`);u({name:n,Component:d,payload:s}),(f=document.activeElement)==null||f.blur()},[l,u]),a=t.useCallback(()=>{c()||p()},[c,p]),g=t.useMemo(()=>({stack:r,openPortal:y,closePortal:a}),[r,y,a]),v=t.useCallback(n=>{if(n instanceof HTMLDivElement){if(n.classList.contains("portal")&&!("bsBackdrop"in n.dataset)){a();return}if(n.classList.contains("backdrop")){const s=n.nextElementSibling;s&&s.classList.contains("portal")&&!("bsBackdrop"in s.dataset)&&a()}}},[a]);return t.useEffect(()=>{const n=s=>{const d=document.querySelector(`#${e} > div > div:last-child`);if(s.key==="Escape"&&d){v(d);return}if(s.key==="Tab"){const f=$(d);if(f.length===0)return;const E=f[0],_=f[f.length-1];s.shiftKey&&document.activeElement===E?(s.preventDefault(),_.focus()):!s.shiftKey&&document.activeElement===_&&(s.preventDefault(),E.focus())}};return r.length!==0&&window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[v,e,r.length]),h.jsxs(b.Provider,{value:g,children:[o,i&&D.createPortal(h.jsx("div",{onClick:({target:n})=>v(n),onKeyDown:()=>{},children:r.map(({Component:n,name:s,payload:d})=>h.jsxs(t.Fragment,{children:[h.jsx("div",{className:"backdrop fade show"}),h.jsx(n,{name:s,payload:d})]},s))}),document.getElementById(e))]})}function A(){const e=t.useContext(b);if(e===void 0)throw new Error("usePortalContext was used outside of PortalContextProvider");return e}try{k.displayName="DPortalContextProvider",k.__docgenInfo={description:"",displayName:"DPortalContextProvider",props:{portalName:{defaultValue:null,description:"",name:"portalName",required:!0,type:{name:"string"}},availablePortals:{defaultValue:null,description:"",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}}}catch{}try{b.displayName="DPortalContext",b.__docgenInfo={description:"",displayName:"DPortalContext",props:{}}}catch{}function C(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}const m={language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."},icon:{familyClass:"bi",familyPrefix:"bi-",materialStyle:!1},iconMap:{x:"X",xLg:"X",chevronUp:"ChevronUp",chevronDown:"ChevronDown",chevronLeft:"ChevronLeft",chevronRight:"ChevronRight",upload:"Upload",calendar:"Calendar",check:"Check",alert:{warning:"AlertCircle",danger:"AlertTriangle",success:"CheckCircle",info:"Info"},input:{search:"Search",show:"Eye",hide:"EyeOff",increase:"Plus",decrease:"Minus"}},breakpoints:{xs:"",sm:"",md:"",lg:"",xl:"",xxl:""},setContext:()=>{},portalName:"d-portal"},P=t.createContext(m);function w({language:e=m.language,currency:o=m.currency,icon:l=m.icon,iconMap:i=m.iconMap,portalName:r=m.portalName,availablePortals:u,children:p}){const[c,y]=t.useState({language:e,currency:o,icon:l,iconMap:i,breakpoints:m.breakpoints}),a=t.useCallback(v=>y(n=>({...n,...v})),[]);t.useLayoutEffect(()=>{a({breakpoints:{xs:C(`--${x}breakpoint-xs`),sm:C(`--${x}breakpoint-sm`),md:C(`--${x}breakpoint-md`),lg:C(`--${x}breakpoint-lg`),xl:C(`--${x}breakpoint-xl`),xxl:C(`--${x}breakpoint-xxl`)}})},[a]);const g=t.useMemo(()=>({...c,setContext:a}),[c,a]);return h.jsx(P.Provider,{value:g,children:h.jsx(k,{portalName:r,availablePortals:u,children:p})})}function j(){const e=t.useContext(P);if(e===void 0)throw new Error("useDContext was used outside of DContextProvider");return e}try{w.displayName="DContextProvider",w.__docgenInfo={description:"",displayName:"DContextProvider",props:{language:{defaultValue:{value:"en"},description:"",name:"language",required:!1,type:{name:"string | undefined"}},currency:{defaultValue:{value:`{
    symbol: '$',
    precision: 2,
    separator: ',',
    decimal: '.',
  }`},description:"",name:"currency",required:!1,type:{name:"CurrencyProps | undefined"}},icon:{defaultValue:{value:`{
    familyClass: 'bi',
    familyPrefix: 'bi-',
    materialStyle: false,
  }`},description:"",name:"icon",required:!1,type:{name:"IconProps | undefined"}},iconMap:{defaultValue:{value:`{
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
  }`},description:"",name:"iconMap",required:!1,type:{name:"IconMapProps | undefined"}},breakpoints:{defaultValue:null,description:"",name:"breakpoints",required:!1,type:{name:"BreakpointProps | undefined"}},portalName:{defaultValue:{value:"d-portal"},description:"",name:"portalName",required:!1,type:{name:"string | undefined"}},availablePortals:{defaultValue:null,description:"",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}}}catch{}try{P.displayName="DContext",P.__docgenInfo={description:"",displayName:"DContext",props:{}}}catch{}export{w as D,A as a,j as u};
