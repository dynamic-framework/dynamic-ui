import{j as l}from"./jsx-runtime-CKrituN3.js";import{r as t}from"./index-CBqU2yxZ.js";import{c as d}from"./index-ELyB7pIJ.js";const y=t.createContext(void 0);function V(){const a=t.useContext(y);if(a===void 0)throw new Error("useTabContext was used outside of MTab");return a}function m({tab:a,children:s,className:n,style:c}){const{isSelected:r}=V();return r(a)?l.jsx("div",{className:d("tab-pane fade show active",n),id:`${a}Pane`,role:"tabpanel",tabIndex:0,"aria-labelledby":`${a}Tab`,style:c,children:s}):null}try{m.displayName="DTabContent",m.__docgenInfo={description:"",displayName:"DTabContent",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},tab:{defaultValue:null,description:"",name:"tab",required:!0,type:{name:"string"}}}}}catch{}function f({children:a,defaultSelected:s,onChange:n,options:c,className:r,classNameTab:x,style:v,vertical:o,variant:i="underline",dataAttributes:T}){const[u,b]=t.useState(s),_=t.useCallback(e=>{e.tab&&b(e.tab),n==null||n(e)},[n]);t.useEffect(()=>{b(s)},[s]);const p=t.useCallback(e=>u===e,[u]),N=t.useMemo(()=>({isSelected:p}),[p]),q=t.useMemo(()=>({nav:!0,"flex-column align-items-center":o&&i!=="tabs",[`nav-${i}`]:!0,...r&&{[r]:!0}}),[o,i,r]);return l.jsx(y.Provider,{value:N,children:l.jsxs("div",{className:d({"d-flex w-100":!0,"flex-column":!o||i==="tabs"}),style:v,...T,children:[l.jsx("nav",{className:d(q),children:c.map(e=>l.jsx("button",{id:`${e.tab}Tab`,className:d("nav-link",{active:e.tab===u},x),type:"button",role:"tab","aria-controls":`${e.tab}Pane`,"aria-selected":e.tab===u,disabled:e.disabled,onClick:()=>_(e),children:e.label},e.label))}),l.jsx("div",{className:"tab-content w-100",children:a})]})})}const j=Object.assign(f,{Tab:m});try{f.displayName="DTabs",f.__docgenInfo={description:"",displayName:"DTabs",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},classNameTab:{defaultValue:null,description:"",name:"classNameTab",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((option: DTabOption) => void) | undefined"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DTabOption[]"}},defaultSelected:{defaultValue:null,description:"",name:"defaultSelected",required:!0,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"underline"'},{value:'"tabs"'},{value:'"pills"'}]}}}}}catch{}export{j as D};