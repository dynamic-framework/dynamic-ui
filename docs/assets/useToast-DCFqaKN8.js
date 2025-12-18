import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as W}from"./index-Bj6rccSQ.js";import{M as it,U as D,c as C}from"./blocks-DnJ188Ew.js";import{r as d}from"./iframe-Dy0Aerpt.js";import{D as w}from"./DButton-CQe8zDtZ.js";import{c as Z}from"./index-i7wJJAvU.js";import{D as k}from"./DToast-NfgLlUGS.js";import{D as $}from"./DIcon-Zg8O6yqK.js";import{u as nt,D as q}from"./DContext-B51mLSx1.js";import{D as lt}from"./DAlert-BUaGncdm.js";import"./index-JejD5iQw.js";import"./index-aD47SrVq.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-g52upMXj.js";let ct={data:""},dt=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||ct},ut=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,pt=/\/\*[^]*?\*\/|  +/g,K=/\n+/g,v=(t,e)=>{let s="",r="",n="";for(let i in t){let a=t[i];i[0]=="@"?i[1]=="i"?s=i+" "+a+";":r+=i[1]=="f"?v(a,i):i+"{"+v(a,i[1]=="k"?"":e)+"}":typeof a=="object"?r+=v(a,e?e.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=v.p?v.p(i,a):i+":"+a+";")}return s+(e&&n?e+"{"+n+"}":n)+r},j={},G=t=>{if(typeof t=="object"){let e="";for(let s in t)e+=s+G(t[s]);return e}return t},mt=(t,e,s,r,n)=>{let i=G(t),a=j[i]||(j[i]=(c=>{let u=0,m=11;for(;u<c.length;)m=101*m+c.charCodeAt(u++)>>>0;return"go"+m})(i));if(!j[a]){let c=i!==t?t:(u=>{let m,p,f=[{}];for(;m=ut.exec(u.replace(pt,""));)m[4]?f.shift():m[3]?(p=m[3].replace(K," ").trim(),f.unshift(f[0][p]=f[0][p]||{})):f[0][m[1]]=m[2].replace(K," ").trim();return f[0]})(t);j[a]=v(n?{["@keyframes "+a]:c}:c,s?"":"."+a)}let l=s&&j.g?j.g:null;return s&&(j.g=j[a]),((c,u,m,p)=>{p?u.data=u.data.replace(p,c):u.data.indexOf(c)===-1&&(u.data=m?c+u.data:u.data+c)})(j[a],e,r,l),a},xt=(t,e,s)=>t.reduce((r,n,i)=>{let a=e[i];if(a&&a.call){let l=a(s),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=c?"."+c:l&&typeof l=="object"?l.props?"":v(l,""):l===!1?"":l}return r+n+(a??"")},"");function O(t){let e=this||{},s=t.call?t(e.p):t;return mt(s.unshift?s.raw?xt(s,[].slice.call(arguments,1),e.p):s.reduce((r,n)=>Object.assign(r,n&&n.call?n(e.p):n),{}):s,dt(e.target),e.g,e.o,e.k)}let J,U,H;O.bind({g:1});let b=O.bind({k:1});function ft(t,e,s,r){v.p=e,J=t,U=s,H=r}function T(t,e){let s=this||{};return function(){let r=arguments;function n(i,a){let l=Object.assign({},i),c=l.className||n.className;s.p=Object.assign({theme:U&&U()},l),s.o=/ *go\d+/.test(c),l.className=O.apply(s,r)+(c?" "+c:"");let u=t;return t[0]&&(u=l.as||t,delete l.as),H&&u[0]&&H(l),J(u,l)}return e?e(n):n}}var ht=t=>typeof t=="function",I=(t,e)=>ht(t)?t(e):t,gt=(()=>{let t=0;return()=>(++t).toString()})(),tt=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),yt=20,V="default",et=(t,e)=>{let{toastLimit:s}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,s)};case 1:return{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:r}=e;return et(t,{type:t.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:n}=e;return{...t,toasts:t.toasts.map(a=>a.id===n||n===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},A=[],ot={toasts:[],pausedAt:void 0,settings:{toastLimit:yt}},y={},st=(t,e=V)=>{y[e]=et(y[e]||ot,t),A.forEach(([s,r])=>{s===e&&r(y[e])})},at=t=>Object.keys(y).forEach(e=>st(t,e)),jt=t=>Object.keys(y).find(e=>y[e].toasts.some(s=>s.id===t)),M=(t=V)=>e=>{st(e,t)},bt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},vt=(t={},e=V)=>{let[s,r]=d.useState(y[e]||ot),n=d.useRef(y[e]);d.useEffect(()=>(n.current!==y[e]&&r(y[e]),A.push([e,r]),()=>{let a=A.findIndex(([l])=>l===e);a>-1&&A.splice(a,1)}),[e]);let i=s.toasts.map(a=>{var l,c,u;return{...t,...t[a.type],...a,removeDelay:a.removeDelay||((l=t[a.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:a.duration||((c=t[a.type])==null?void 0:c.duration)||(t==null?void 0:t.duration)||bt[a.type],style:{...t.style,...(u=t[a.type])==null?void 0:u.style,...a.style}}});return{...s,toasts:i}},Tt=(t,e="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(s==null?void 0:s.id)||gt()}),N=t=>(e,s)=>{let r=Tt(e,t,s);return M(r.toasterId||jt(r.id))({type:2,toast:r}),r.id},x=(t,e)=>N("blank")(t,e);x.error=N("error");x.success=N("success");x.loading=N("loading");x.custom=N("custom");x.dismiss=(t,e)=>{let s={type:3,toastId:t};e?M(e)(s):at(s)};x.dismissAll=t=>x.dismiss(void 0,t);x.remove=(t,e)=>{let s={type:4,toastId:t};e?M(e)(s):at(s)};x.removeAll=t=>x.remove(void 0,t);x.promise=(t,e,s)=>{let r=x.loading(e.loading,{...s,...s==null?void 0:s.loading});return typeof t=="function"&&(t=t()),t.then(n=>{let i=e.success?I(e.success,n):void 0;return i?x.success(i,{id:r,...s,...s==null?void 0:s.success}):x.dismiss(r),n}).catch(n=>{let i=e.error?I(e.error,n):void 0;i?x.error(i,{id:r,...s,...s==null?void 0:s.error}):x.dismiss(r)}),t};var Dt=1e3,Ct=(t,e="default")=>{let{toasts:s,pausedAt:r}=vt(t,e),n=d.useRef(new Map).current,i=d.useCallback((p,f=Dt)=>{if(n.has(p))return;let h=setTimeout(()=>{n.delete(p),a({type:4,toastId:p})},f);n.set(p,h)},[]);d.useEffect(()=>{if(r)return;let p=Date.now(),f=s.map(h=>{if(h.duration===1/0)return;let P=(h.duration||0)+h.pauseDuration-(p-h.createdAt);if(P<0){h.visible&&x.dismiss(h.id);return}return setTimeout(()=>x.dismiss(h.id,e),P)});return()=>{f.forEach(h=>h&&clearTimeout(h))}},[s,r,e]);let a=d.useCallback(M(e),[e]),l=d.useCallback(()=>{a({type:5,time:Date.now()})},[a]),c=d.useCallback((p,f)=>{a({type:1,toast:{id:p,height:f}})},[a]),u=d.useCallback(()=>{r&&a({type:6,time:Date.now()})},[r,a]),m=d.useCallback((p,f)=>{let{reverseOrder:h=!1,gutter:P=8,defaultPosition:X}=f||{},R=s.filter(g=>(g.position||X)===(p.position||X)&&g.height),rt=R.findIndex(g=>g.id===p.id),Y=R.filter((g,z)=>z<rt&&g.visible).length;return R.filter(g=>g.visible).slice(...h?[Y+1]:[0,Y]).reduce((g,z)=>g+(z.height||0)+P,0)},[s]);return d.useEffect(()=>{s.forEach(p=>{if(p.dismissed)i(p.id,p.removeDelay);else{let f=n.get(p.id);f&&(clearTimeout(f),n.delete(p.id))}})},[s,i]),{toasts:s,handlers:{updateHeight:c,startPause:l,endPause:u,calculateOffset:m}}},wt=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,kt=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Et=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Nt=T("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${wt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${kt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Et} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,_t=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Pt=T("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${_t} 1s linear infinite;
`,$t=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,St=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,At=T("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$t} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${St} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,It=T("div")`
  position: absolute;
`,Bt=T("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ft=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ot=T("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ft} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Mt=({toast:t})=>{let{icon:e,type:s,iconTheme:r}=t;return e!==void 0?typeof e=="string"?d.createElement(Ot,null,e):e:s==="blank"?null:d.createElement(Bt,null,d.createElement(Pt,{...r}),s!=="loading"&&d.createElement(It,null,s==="error"?d.createElement(Nt,{...r}):d.createElement(At,{...r})))},Rt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,zt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Ut="0%{opacity:0;} 100%{opacity:1;}",Ht="0%{opacity:1;} 100%{opacity:0;}",Lt=T("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,qt=T("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Vt=(t,e)=>{let s=t.includes("top")?1:-1,[r,n]=tt()?[Ut,Ht]:[Rt(s),zt(s)];return{animation:e?`${b(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Xt=d.memo(({toast:t,position:e,style:s,children:r})=>{let n=t.height?Vt(t.position||e||"top-center",t.visible):{opacity:0},i=d.createElement(Mt,{toast:t}),a=d.createElement(qt,{...t.ariaProps},I(t.message,t));return d.createElement(Lt,{className:t.className,style:{...n,...s,...t.style}},typeof r=="function"?r({icon:i,message:a}):d.createElement(d.Fragment,null,i,a))});ft(d.createElement);var Yt=({id:t,className:e,style:s,onHeightUpdate:r,children:n})=>{let i=d.useCallback(a=>{if(a){let l=()=>{let c=a.getBoundingClientRect().height;r(t,c)};l(),new MutationObserver(l).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return d.createElement("div",{ref:i,className:e,style:s},n)},Zt=(t,e)=>{let s=t.includes("top"),r=s?{top:0}:{bottom:0},n=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:tt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(s?1:-1)}px)`,...r,...n}},Kt=O`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,S=16,Qt=({reverseOrder:t,position:e="top-center",toastOptions:s,gutter:r,children:n,toasterId:i,containerStyle:a,containerClassName:l})=>{let{toasts:c,handlers:u}=Ct(s,i);return d.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:S,left:S,right:S,bottom:S,pointerEvents:"none",...a},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(m=>{let p=m.position||e,f=u.calculateOffset(m,{reverseOrder:t,gutter:r,defaultPosition:e}),h=Zt(p,f);return d.createElement(Yt,{id:m.id,key:m.id,onHeightUpdate:u.updateHeight,className:m.visible?Kt:"",style:h},m.type==="custom"?I(m.message,m):n?n(m):d.createElement(Xt,{toast:m,position:p}))}))};function E({containerClassName:t,position:e="bottom-center",reverseOrder:s=!1,containerStyle:r,toastOptions:n,gutter:i}){return o.jsx(Qt,{containerClassName:t,position:e,reverseOrder:s,containerStyle:r,gutter:i,toastOptions:n})}try{E.displayName="DToastContainer",E.__docgenInfo={description:"",displayName:"DToastContainer",props:{}}}catch{}function _(){const{iconMap:{xLg:t}}=nt();return{toast:d.useCallback((s,r)=>{if(typeof s=="function")return x.custom(s,r);const{title:n,description:i,icon:a,closeIcon:l,timestamp:c,color:u}=s;return x.custom(({id:m,visible:p})=>p?i?o.jsxs(k,{className:Z({[`toast-${u}`]:!!u},"show"),children:[o.jsxs(k.Header,{children:[a&&o.jsx($,{className:"toast-icon",icon:a}),o.jsx("p",{className:"toast-title",children:n}),c&&o.jsx("small",{className:"toast-timestamp",children:c}),o.jsx("button",{type:"button",className:"d-close align-self-center","aria-label":"Close",onClick:()=>x.dismiss(m),children:o.jsx($,{icon:l||t})})]}),o.jsx(k.Body,{children:o.jsx("span",{children:i})})]}):o.jsx(k,{className:Z({[`toast-${u}`]:!!u},"show"),children:o.jsxs(k.Body,{children:[a&&o.jsx($,{className:"toast-icon",icon:a}),o.jsx("p",{className:"toast-title",children:n}),o.jsx("button",{type:"button",className:"d-close align-self-center","aria-label":"Close",onClick:()=>x.dismiss(m),children:o.jsx($,{icon:l||t})})]})}):null,r)},[t])}}function Wt(){const{toast:t}=_();return o.jsx(w,{text:"Toast - No color",color:"light",onClick:()=>t({title:"Example",timestamp:"just now",icon:"check"},{duration:4e4})})}function Gt(){const{toast:t}=_();return o.jsx(w,{text:"Toast success",color:"light",onClick:()=>t({title:"Example",timestamp:"just now",icon:"check",color:"success"},{duration:4e4})})}function B({type:t="base"}){return o.jsxs(q,{children:[t==="base"&&o.jsx(Wt,{}),t==="success"&&o.jsx(Gt,{}),o.jsx(E,{position:"top-right"})]})}function Jt(){const{toast:t}=_();return o.jsx(w,{text:"Toast full - No color",color:"light",onClick:()=>t({title:"Example",description:"This is a description",timestamp:"just now",icon:"check"},{duration:4e3})})}function te(){const{toast:t}=_();return o.jsx(w,{text:"Toast full success",color:"light",onClick:()=>t({title:"Example",description:"This is a description",timestamp:"just now",color:"success",icon:"check"},{duration:4e3})})}function F({type:t="base"}){return o.jsxs(q,{children:[t==="base"&&o.jsx(Jt,{}),t==="success"&&o.jsx(te,{}),o.jsx(E,{position:"top-right"})]})}function L({id:t,visible:e}){return e?o.jsxs("div",{className:"bg-secondary-subtle rounded-2 p-4 text-center",children:[o.jsx("p",{className:"fw-bold mt-0",children:"Toast!"}),o.jsx(w,{size:"sm",variant:"outline",color:"secondary",text:"Close toast",onClick:()=>x.dismiss(t)})]}):null}function ee(){const{toast:t}=_();return o.jsx(w,{text:"Show Toast",onClick:()=>t(L,{duration:4e3})})}function oe(){return o.jsxs(q,{children:[o.jsx(ee,{}),o.jsx(E,{position:"top-right"})]})}try{B.displayName="ExampleSimpleToastRoot",B.__docgenInfo={description:"",displayName:"ExampleSimpleToastRoot",props:{type:{defaultValue:{value:"base"},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}try{F.displayName="ExampleFullToastRoot",F.__docgenInfo={description:"",displayName:"ExampleFullToastRoot",props:{type:{defaultValue:{value:"base"},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}try{L.displayName="CustomToastExample",L.__docgenInfo={description:"",displayName:"CustomToastExample",props:{}}}catch{}function Q(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...W(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(it,{title:"Design System/Patterns/Toast"}),`
`,o.jsx(e.h1,{id:"toast",children:"Toast"}),`
`,o.jsx(e.p,{children:o.jsx(e.img,{src:"https://img.shields.io/badge/Abstraction%20Component-4848b7",alt:"Shield Badge"})}),`
`,o.jsxs(e.p,{children:["Toasts use ",o.jsx(e.code,{children:"DToastContainer"})," and the ",o.jsx(e.code,{children:"useDToast"}),` hook, which are abstractions to configure react-hot-toast in conjunction with
a `,o.jsx(e.code,{children:"DToast"})," to generate toasts. For more detailed information, refer to the official ",o.jsx(e.a,{href:"https://react-hot-toast.com/docs",rel:"nofollow",children:"React Hot Toast Documentation"}),"."]}),`
`,o.jsx("br",{}),`
`,o.jsx(D,{children:o.jsx(lt,{color:"warning",children:o.jsx("span",{children:o.jsx(e.p,{children:`Toast appears in all containers because of the way react-hot-toast is
programmed, however, if you want to see the correct toast make it show up
from the correct container.`})})})}),`
`,o.jsx(e.h2,{id:"usage-dtoastcontainer",children:"Usage DToastContainer"}),`
`,o.jsxs(e.p,{children:["To get started, include the ",o.jsx(e.strong,{children:o.jsx(e.code,{children:"<DToastContainer />"})}),` component once in your app, typically near the root of your component tree.
This ensures that all toasts are rendered correctly. Here you can customize general styles for all toasts and configure a default
placement for displaying toasts. You can override this position in any single toast if needed.`]}),`
`,o.jsx(e.h2,{id:"usage-usedtoast",children:"Usage useDToast"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useDToast"})," hook provides a simple and flexible way to create toast notifications in your application. By ",o.jsx(e.strong,{children:"default"}),`, it uses the
`,o.jsx(e.code,{children:"DToast"})," component to display the toast message. However, you can also render a custom component if needed."]}),`
`,o.jsx(e.p,{children:"Below you will see examples of the use of toast in a simple way, with a custom component and with Material Icons."}),`
`,o.jsx(e.h2,{id:"basic-toast-no-color",children:"Basic toast no color"}),`
`,o.jsx(D,{children:o.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:o.jsx(B,{})})}),`
`,o.jsx(C,{code:`
import {
DContextProvider,
DToastContainer,
useDToast,
} from '@dynamic-framework/ui-react';

export function App() {
const { toast } = useDToast();

return (

<DContextProvider>
<DButton
  text="Show Toast"
  onClick={() => toast({ title: "Example" }, { duration: 40000 })}
/>
<DToastContainer position="top-right" />
</DContextProvider>
); } `,language:"tsx",dark:!0}),`
`,o.jsx(e.h2,{id:"basic-toast-success-color",children:"Basic toast success color"}),`
`,o.jsx(D,{children:o.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:o.jsx(B,{type:"success"})})}),`
`,o.jsx(C,{code:`
import {
DContextProvider,
DToastContainer,
useDToast,
} from '@dynamic-framework/ui-react';

export function App() {
const { toast } = useDToast();

return (

<DContextProvider>
<DButton
  text="Show Toast"
  onClick={() =>
    toast(
      {
        title: "Example",
        color: "success",
      },
      { duration: 40000 }
    )
  }
/>
<DToastContainer position="top-right" />
</DContextProvider>
); } `,language:"tsx",dark:!0}),`
`,o.jsx(e.h2,{id:"full-toast-no-color",children:"Full toast no color"}),`
`,o.jsx(D,{children:o.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:o.jsx(F,{type:"base"})})}),`
`,o.jsx(C,{code:`
import {
DContextProvider,
DToastContainer,
useDToast,
} from '@dynamic-framework/ui-react';

export function App() {
const { toast } = useDToast();

return (

<DContextProvider>
<DButton
  text="Show Toast"
  onClick={() =>
    toast(
      {
        title: "Example",
        description: "This is a description",
        timestamp: "just now",
        icon: "check",
      },
      { duration: 40000 }
    )
  }
/>
<DToastContainer position="top-right" />
</DContextProvider>
); } `,language:"tsx",dark:!0}),`
`,o.jsx(e.h2,{id:"full-toast-success-color",children:"Full toast success color"}),`
`,o.jsx(D,{children:o.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:o.jsx(F,{type:"success"})})}),`
`,o.jsx(C,{code:`
import {
DContextProvider,
DToastContainer,
useDToast,
} from '@dynamic-framework/ui-react';

export function App() {
const { toast } = useDToast();

return (

<DContextProvider>
<DButton
  text="Show Toast"
  onClick={() =>
    toast(
      {
        title: "Example",
        description: "This is a description",
        timestamp: "just now",
        color: "success",
        icon: "check",
      },
      { duration: 40000 }
    )
  }
/>
<DToastContainer position="top-right" />
</DContextProvider>
); } `,language:"tsx",dark:!0}),`
`,o.jsx(e.h2,{id:"custom-example",children:"Custom example"}),`
`,o.jsx(D,{children:o.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:o.jsx(oe,{})})}),`
`,o.jsx(e.h3,{id:"apptsx",children:o.jsx(e.code,{children:"App.tsx"})}),`
`,o.jsx(C,{code:`
import {
DContextProvider,
DToastContainer,
useDToast,
} from '@dynamic-framework/ui-react';

import CustomToastExample from './CustomToastExample';

export function App() {
  const { toast } = useDToast();

  return (
    <DContextProvider>
      <DButton
        text="Show Toast"
        onClick={() =>
          toast(CustomToastExample, {
            duration: 3000,
          })
        }
      />
      <DToastContainer position="top-right" />
    </DContextProvider>
  ); 
} 
`,language:"tsx",dark:!0}),`
`,o.jsx(e.h3,{id:"customtoastexampletsx",children:o.jsx(e.code,{children:"CustomToastExample.tsx"})}),`
`,o.jsx(C,{code:`
import {
DButton,
} from '@dynamic-framework/ui-react';
import { toast as reactToast, Toast } from 'react-hot-toast';

export function CustomToastExample({ id, visible }: Toast) {
  if (!visible) {
    return null;
  }
  
  return (
    <div className="bg-secondary-subtle rounded-2 p-4 text-center">
      <p className="fw-bold mt-0">Toast!</p>
      <DButton
        size="sm"
        variant="outline"
        color="secondary"
        text="Close toast"
        onClick={() => reactToast.dismiss(id)}
      />
    </div>
  );
}
`,language:"tsx",dark:!0})]})}function ge(t={}){const{wrapper:e}={...W(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(Q,{...t})}):Q(t)}export{ge as default};
