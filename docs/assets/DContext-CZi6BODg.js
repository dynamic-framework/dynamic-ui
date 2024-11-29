import{j as m}from"./jsx-runtime-DQ32znRX.js";import{r as n}from"./index-DH5ua8nC.js";import{r as w}from"./index-D9uilScg.js";import{P as x}from"./config-CUZHf55T.js";function E(e){n.useEffect(()=>{e?(document.body.style.overflow="hidden",document.body.style.paddingRight="0"):(document.body.style.overflow="unset",document.body.style.paddingRight="unset")},[e])}function D(e){const[a,c]=n.useState(!1);return n.useEffect(()=>{const i=document.querySelector(`#${e}`);i&&i.remove();const o=document.createElement("div");o.id=e,o.className="d-portal",document.body.appendChild(o),c(!0)},[e]),{created:a}}function S(e=[]){const[a,c]=n.useState(e),i=n.useCallback(r=>c(v=>[...v,r]),[]),o=n.useCallback(()=>c(r=>r.slice(0,r.length-1)),[]),d=n.useCallback(()=>a.at(-1),[a]),u=n.useCallback(()=>c([]),[]),s=n.useCallback(()=>a.length===0,[a.length]),h=n.useMemo(()=>({clear:u,isEmpty:s,length:a.length,peek:d,pop:o,push:i}),[u,s,a.length,d,o,i]);return[a,h]}const C=n.createContext(void 0);function k({portalName:e,children:a,availablePortals:c}){const{created:i}=D(e),[o,{push:d,pop:u,isEmpty:s}]=S([]);E(!!o.length);const h=n.useCallback((t,l)=>{if(!c)throw new Error(`there is no component for portal ${t.toString()}`);const p=c[t];if(!p)throw new Error(`there is no component for portal ${t.toString()}`);d({name:t,Component:p,payload:l})},[c,d]),r=n.useCallback(()=>{s()||u()},[s,u]),v=n.useMemo(()=>({stack:o,openPortal:h,closePortal:r}),[o,h,r]),g=n.useCallback(t=>{if(t instanceof HTMLDivElement){if(t.classList.contains("portal")&&!("bsBackdrop"in t.dataset)){r();return}if(t.classList.contains("backdrop")){const l=t.nextElementSibling;l&&l.classList.contains("portal")&&!("bsBackdrop"in l.dataset)&&r()}}},[r]);return n.useEffect(()=>{const t=l=>{if(l.key==="Escape"){const p=document.querySelector(`#${e} > div > div:last-child`);p&&g(p)}};return o.length!==0&&window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[g,e,o.length]),m.jsxs(C.Provider,{value:v,children:[a,i&&w.createPortal(m.jsx("div",{onClick:({target:t})=>g(t),onKeyDown:()=>{},children:o.map(({Component:t,name:l,payload:p})=>m.jsxs(n.Fragment,{children:[m.jsx("div",{className:"backdrop fade show"}),m.jsx(t,{name:l,payload:p})]},l))}),document.getElementById(e))]})}function V(){const e=n.useContext(C);if(e===void 0)throw new Error("usePortalContext was used outside of PortalContextProvider");return e}try{k.displayName="DPortalContextProvider",k.__docgenInfo={description:"",displayName:"DPortalContextProvider",props:{portalName:{defaultValue:null,description:"",name:"portalName",required:!0,type:{name:"string"}},availablePortals:{defaultValue:null,description:"",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}}}catch{}function y(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}const f={language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."},icon:{familyClass:"bi",familyPrefix:"bi-",materialStyle:!1},iconMap:{x:"x",xLg:"x-lg",chevronUp:"chevron-up",chevronDown:"chevron-down",chevronLeft:"chevron-left",chevronRight:"chevron-right",upload:"cloud-upload",calendar:"calendar",check:"check",alert:{warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",dark:"info-circle",light:"info-circle",primary:"info-circle",secondary:"info-circle"},input:{invalid:"exclamation-circle",valid:"check",search:"search",show:"eye",hide:"eye-slash",increase:"plus-square",decrease:"dash-square"}},breakpoints:{xs:"",sm:"",md:"",lg:"",xl:"",xxl:""},setContext:()=>{},portalName:"d-portal"},P=n.createContext(f);function b({language:e=f.language,currency:a=f.currency,icon:c=f.icon,iconMap:i=f.iconMap,portalName:o=f.portalName,availablePortals:d,children:u}){const[s,h]=n.useState({language:e,currency:a,icon:c,iconMap:i,breakpoints:f.breakpoints}),r=n.useCallback(g=>h(t=>({...t,...g})),[]);n.useLayoutEffect(()=>{console.log("context"),r({breakpoints:{xs:y(`--${x}breakpoint-xs`),sm:y(`--${x}breakpoint-sm`),md:y(`--${x}breakpoint-md`),lg:y(`--${x}breakpoint-lg`),xl:y(`--${x}breakpoint-xl`),xxl:y(`--${x}breakpoint-xxl`)}})},[r]);const v=n.useMemo(()=>({...s,setContext:r}),[s,r]);return m.jsx(P.Provider,{value:v,children:m.jsx(k,{portalName:o,availablePortals:d,children:u})})}function j(){const e=n.useContext(P);if(e===void 0)throw new Error("useDContext was used outside of DContextProvider");return e}try{b.displayName="DContextProvider",b.__docgenInfo={description:"",displayName:"DContextProvider",props:{language:{defaultValue:{value:"en"},description:"",name:"language",required:!1,type:{name:"string | undefined"}},currency:{defaultValue:{value:`{
    symbol: '$',
    precision: 2,
    separator: ',',
    decimal: '.',
  }`},description:"",name:"currency",required:!1,type:{name:"CurrencyProps | undefined"}},icon:{defaultValue:{value:`{
    familyClass: 'bi',
    familyPrefix: 'bi-',
    materialStyle: false,
  }`},description:"",name:"icon",required:!1,type:{name:"IconProps | undefined"}},iconMap:{defaultValue:{value:`{
    x: 'x',
    xLg: 'x-lg',
    chevronUp: 'chevron-up',
    chevronDown: 'chevron-down',
    chevronLeft: 'chevron-left',
    chevronRight: 'chevron-right',
    upload: 'cloud-upload',
    calendar: 'calendar',
    check: 'check',
    alert: {
      warning: 'exclamation-circle',
      danger: 'exclamation-triangle',
      success: 'check-circle',
      info: 'info-circle',
      dark: 'info-circle',
      light: 'info-circle',
      primary: 'info-circle',
      secondary: 'info-circle',
    },
    input: {
      invalid: 'exclamation-circle',
      valid: 'check',
      search: 'search',
      show: 'eye',
      hide: 'eye-slash',
      increase: 'plus-square',
      decrease: 'dash-square',
    },
  }`},description:"",name:"iconMap",required:!1,type:{name:"IconMapProps | undefined"}},breakpoints:{defaultValue:null,description:"",name:"breakpoints",required:!1,type:{name:"BreakpointProps | undefined"}},portalName:{defaultValue:{value:"d-portal"},description:"",name:"portalName",required:!1,type:{name:"string | undefined"}},availablePortals:{defaultValue:null,description:"",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}}}catch{}export{b as D,V as a,j as u};
