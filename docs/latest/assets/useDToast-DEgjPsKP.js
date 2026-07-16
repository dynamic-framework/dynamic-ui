import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as K}from"./index-C6SlVEW6.js";import{M as ie,U as w,c as b}from"./blocks-CG5owoJr.js";import{r as d}from"./iframe-vLNjGVop.js";import{D as k}from"./DButton-k5jVOt40.js";import{c as Y}from"./index-nyyuC_Uj.js";import{D as E}from"./DToast-DMi9a_kj.js";import{D as S}from"./DIcon-BaYjXWaB.js";import{u as ae,D as L}from"./DContext-aUrSpq0p.js";import{D as ce}from"./DAlert-DyShLHim.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFPG5GmN.js";import"./index-oOcxeWdd.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-56XFbS_3.js";let le={data:""},de=s=>{if(typeof window=="object"){let e=(s?s.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(s||document.head).appendChild(e),e.firstChild}return s||le},he=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,pe=/\/\*[^]*?\*\/|  +/g,G=/\n+/g,D=(s,e)=>{let o="",n="",a="";for(let i in s){let r=s[i];i[0]=="@"?i[1]=="i"?o=i+" "+r+";":n+=i[1]=="f"?D(r,i):i+"{"+D(r,i[1]=="k"?"":e)+"}":typeof r=="object"?n+=D(r,e?e.replace(/([^,])+/g,c=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,c):c?c+" "+l:l)):i):r!=null&&(i=i[1]=="-"?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=D.p?D.p(i,r):i+":"+r+";")}return o+(e&&a?e+"{"+a+"}":a)+n},v={},Q=s=>{if(typeof s=="object"){let e="";for(let o in s)e+=o+Q(s[o]);return e}return s},ue=(s,e,o,n,a)=>{let i=Q(s),r=v[i]||(v[i]=(l=>{let h=0,u=11;for(;h<l.length;)u=101*u+l.charCodeAt(h++)>>>0;return"go"+u})(i));if(!v[r]){let l=i!==s?s:(h=>{let u,p,m=[{}];for(;u=he.exec(h.replace(pe,""));)u[4]?m.shift():u[3]?(p=u[3].replace(G," ").trim(),m.unshift(m[0][p]=m[0][p]||{})):m[0][u[1]]=u[2].replace(G," ").trim();return m[0]})(s);v[r]=D(a?{["@keyframes "+r]:l}:l,o?"":"."+r)}let c=o&&v.g;return o&&(v.g=v[r]),((l,h,u,p)=>{p?h.data=h.data.replace(p,l):h.data.indexOf(l)===-1&&(h.data=u?l+h.data:h.data+l)})(v[r],e,n,c),r},xe=(s,e,o)=>s.reduce((n,a,i)=>{let r=e[i];if(r&&r.call){let c=r(o),l=c&&c.props&&c.props.className||/^go/.test(c)&&c;r=l?"."+l:c&&typeof c=="object"?c.props?"":D(c,""):c===!1?"":c}return n+a+(r??"")},"");function F(s){let e=this||{},o=s.call?s(e.p):s;return ue(o.unshift?o.raw?xe(o,[].slice.call(arguments,1),e.p):o.reduce((n,a)=>Object.assign(n,a&&a.call?a(e.p):a),{}):o,de(e.target),e.g,e.o,e.k)}let J,z,U;F.bind({g:1});let y=F.bind({k:1});function me(s,e,o,n){D.p=e,J=s,z=o,U=n}function T(s,e){let o=this||{};return function(){let n=arguments;function a(i,r){let c=Object.assign({},i),l=c.className||a.className;o.p=Object.assign({theme:z&&z()},c),o.o=/go\d/.test(l),c.className=F.apply(o,n)+(l?" "+l:"");let h=s;return s[0]&&(h=c.as||s,delete c.as),U&&h[0]&&U(c),J(h,c)}return e?e(a):a}}var fe=s=>typeof s=="function",$=(s,e)=>fe(s)?s(e):s,je=(()=>{let s=0;return()=>(++s).toString()})(),ee=(()=>{let s;return()=>{if(s===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s}})(),ge=20,V="default",te=(s,e)=>{let{toastLimit:o}=s.settings;switch(e.type){case 0:return{...s,toasts:[e.toast,...s.toasts].slice(0,o)};case 1:return{...s,toasts:s.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:n}=e;return te(s,{type:s.toasts.find(r=>r.id===n.id)?1:0,toast:n});case 3:let{toastId:a}=e;return{...s,toasts:s.toasts.map(r=>r.id===a||a===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return e.toastId===void 0?{...s,toasts:[]}:{...s,toasts:s.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...s,pausedAt:e.time};case 6:let i=e.time-(s.pausedAt||0);return{...s,pausedAt:void 0,toasts:s.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},I=[],se={toasts:[],pausedAt:void 0,settings:{toastLimit:ge}},g={},oe=(s,e=V)=>{g[e]=te(g[e]||se,s),I.forEach(([o,n])=>{o===e&&n(g[e])})},re=s=>Object.keys(g).forEach(e=>oe(s,e)),ye=s=>Object.keys(g).find(e=>g[e].toasts.some(o=>o.id===s)),B=(s=V)=>e=>{oe(e,s)},be={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ve=(s={},e=V)=>{let[o,n]=d.useState(g[e]||se),a=d.useRef(g[e]);d.useEffect(()=>(a.current!==g[e]&&n(g[e]),I.push([e,n]),()=>{let r=I.findIndex(([c])=>c===e);r>-1&&I.splice(r,1)}),[e]);let i=o.toasts.map(r=>{var c,l,h;return{...s,...s[r.type],...r,removeDelay:r.removeDelay||((c=s[r.type])==null?void 0:c.removeDelay)||(s==null?void 0:s.removeDelay),duration:r.duration||((l=s[r.type])==null?void 0:l.duration)||(s==null?void 0:s.duration)||be[r.type],style:{...s.style,...(h=s[r.type])==null?void 0:h.style,...r.style}}});return{...o,toasts:i}},De=(s,e="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:s,pauseDuration:0,...o,id:(o==null?void 0:o.id)||je()}),N=s=>(e,o)=>{let n=De(e,s,o);return B(n.toasterId||ye(n.id))({type:2,toast:n}),n.id},x=(s,e)=>N("blank")(s,e);x.error=N("error");x.success=N("success");x.loading=N("loading");x.custom=N("custom");x.dismiss=(s,e)=>{let o={type:3,toastId:s};e?B(e)(o):re(o)};x.dismissAll=s=>x.dismiss(void 0,s);x.remove=(s,e)=>{let o={type:4,toastId:s};e?B(e)(o):re(o)};x.removeAll=s=>x.remove(void 0,s);x.promise=(s,e,o)=>{let n=x.loading(e.loading,{...o,...o==null?void 0:o.loading});return typeof s=="function"&&(s=s()),s.then(a=>{let i=e.success?$(e.success,a):void 0;return i?x.success(i,{id:n,...o,...o==null?void 0:o.success}):x.dismiss(n),a}).catch(a=>{let i=e.error?$(e.error,a):void 0;i?x.error(i,{id:n,...o,...o==null?void 0:o.error}):x.dismiss(n)}),s};var Te=1e3,Ce=(s,e="default")=>{let{toasts:o,pausedAt:n}=ve(s,e),a=d.useRef(new Map).current,i=d.useCallback((p,m=Te)=>{if(a.has(p))return;let f=setTimeout(()=>{a.delete(p),r({type:4,toastId:p})},m);a.set(p,f)},[]);d.useEffect(()=>{if(n)return;let p=Date.now(),m=o.map(f=>{if(f.duration===1/0)return;let P=(f.duration||0)+f.pauseDuration-(p-f.createdAt);if(P<0){f.visible&&x.dismiss(f.id);return}return setTimeout(()=>x.dismiss(f.id,e),P)});return()=>{m.forEach(f=>f&&clearTimeout(f))}},[o,n,e]);let r=d.useCallback(B(e),[e]),c=d.useCallback(()=>{r({type:5,time:Date.now()})},[r]),l=d.useCallback((p,m)=>{r({type:1,toast:{id:p,height:m}})},[r]),h=d.useCallback(()=>{n&&r({type:6,time:Date.now()})},[n,r]),u=d.useCallback((p,m)=>{let{reverseOrder:f=!1,gutter:P=8,defaultPosition:W}=m||{},M=o.filter(j=>(j.position||W)===(p.position||W)&&j.height),ne=M.findIndex(j=>j.id===p.id),X=M.filter((j,q)=>q<ne&&j.visible).length;return M.filter(j=>j.visible).slice(...f?[X+1]:[0,X]).reduce((j,q)=>j+(q.height||0)+P,0)},[o]);return d.useEffect(()=>{o.forEach(p=>{if(p.dismissed)i(p.id,p.removeDelay);else{let m=a.get(p.id);m&&(clearTimeout(m),a.delete(p.id))}})},[o,i]),{toasts:o,handlers:{updateHeight:l,startPause:c,endPause:h,calculateOffset:u}}},we=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ke=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ee=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_e=T("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${we} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ke} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${s=>s.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ee} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ne=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Pe=T("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${s=>s.secondary||"#e0e0e0"};
  border-right-color: ${s=>s.primary||"#616161"};
  animation: ${Ne} 1s linear infinite;
`,Se=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Oe=y`
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
}`,Ie=T("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Se} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Oe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${s=>s.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,$e=T("div")`
  position: absolute;
`,Ae=T("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Re=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Fe=T("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Re} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Be=({toast:s})=>{let{icon:e,type:o,iconTheme:n}=s;return e!==void 0?typeof e=="string"?d.createElement(Fe,null,e):e:o==="blank"?null:d.createElement(Ae,null,d.createElement(Pe,{...n}),o!=="loading"&&d.createElement($e,null,o==="error"?d.createElement(_e,{...n}):d.createElement(Ie,{...n})))},Me=s=>`
0% {transform: translate3d(0,${s*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,qe=s=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${s*-150}%,-1px) scale(.6); opacity:0;}
`,ze="0%{opacity:0;} 100%{opacity:1;}",Ue="0%{opacity:1;} 100%{opacity:0;}",He=T("div")`
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
`,Le=T("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ve=(s,e)=>{let o=s.includes("top")?1:-1,[n,a]=ee()?[ze,Ue]:[Me(o),qe(o)];return{animation:e?`${y(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},We=d.memo(({toast:s,position:e,style:o,children:n})=>{let a=s.height?Ve(s.position||e||"top-center",s.visible):{opacity:0},i=d.createElement(Be,{toast:s}),r=d.createElement(Le,{...s.ariaProps},$(s.message,s));return d.createElement(He,{className:s.className,style:{...a,...o,...s.style}},typeof n=="function"?n({icon:i,message:r}):d.createElement(d.Fragment,null,i,r))});me(d.createElement);var Xe=({id:s,className:e,style:o,onHeightUpdate:n,children:a})=>{let i=d.useCallback(r=>{if(r){let c=()=>{let l=r.getBoundingClientRect().height;n(s,l)};c(),new MutationObserver(c).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[s,n]);return d.createElement("div",{ref:i,className:e,style:o},a)},Ye=(s,e)=>{let o=s.includes("top"),n=o?{top:0}:{bottom:0},a=s.includes("center")?{justifyContent:"center"}:s.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ee()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(o?1:-1)}px)`,...n,...a}},Ge=F`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,O=16,Ze=({reverseOrder:s,position:e="top-center",toastOptions:o,gutter:n,children:a,toasterId:i,containerStyle:r,containerClassName:c})=>{let{toasts:l,handlers:h}=Ce(o,i);return d.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:O,left:O,right:O,bottom:O,pointerEvents:"none",...r},className:c,onMouseEnter:h.startPause,onMouseLeave:h.endPause},l.map(u=>{let p=u.position||e,m=h.calculateOffset(u,{reverseOrder:s,gutter:n,defaultPosition:e}),f=Ye(p,m);return d.createElement(Xe,{id:u.id,key:u.id,onHeightUpdate:h.updateHeight,className:u.visible?Ge:"",style:f},u.type==="custom"?$(u.message,u):a?a(u):d.createElement(We,{toast:u,position:p}))}))};function _({containerClassName:s,position:e="bottom-center",reverseOrder:o=!1,containerStyle:n,toastOptions:a,gutter:i=8}){return t.jsx(Ze,{containerClassName:s,position:e,reverseOrder:o,containerStyle:n,gutter:i,toastOptions:a})}try{_.displayName="DToastContainer",_.__docgenInfo={description:"",displayName:"DToastContainer",props:{containerClassName:{defaultValue:null,description:"Additional CSS class applied to the portal container `<div>`.\nUseful for scoping z-index or stacking context in your layout.",name:"containerClassName",required:!1,type:{name:"string | undefined"}},position:{defaultValue:{value:"bottom-center"},description:"Default position for toasts that do not specify their own `position`.",name:"position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'}]}},reverseOrder:{defaultValue:{value:"false"},description:"When `true`, new toasts appear at the bottom of the stack instead of the top.",name:"reverseOrder",required:!1,type:{name:"boolean | undefined"}},containerStyle:{defaultValue:null,description:"Inline styles applied to the portal container `<div>`.",name:"containerStyle",required:!1,type:{name:"CSSProperties | undefined"}},toastOptions:{defaultValue:null,description:"Default options merged into every toast rendered inside this container.\nMirrors `DefaultToastOptions` from `react-hot-toast`.",name:"toastOptions",required:!1,type:{name:"DefaultToastOptions | undefined"}},gutter:{defaultValue:{value:"8"},description:"Gap in pixels between stacked toasts.",name:"gutter",required:!1,type:{name:"number | undefined"}}}}}catch{}function C(){const{iconMap:{xLg:s}}=ae();return{toast:d.useCallback((o,n)=>{if(typeof o=="function")return x.custom(o,n);const{title:a,description:i,icon:r,closeIcon:c,timestamp:l,color:h}=o;return x.custom(({id:u,visible:p})=>p?i?t.jsxs(E,{className:Y({[`toast-${h}`]:!!h},"show"),children:[t.jsxs(E.Header,{children:[r&&t.jsx(S,{className:"toast-icon",icon:r}),t.jsx("p",{className:"toast-title",children:a}),l&&t.jsx("small",{className:"toast-timestamp",children:l}),t.jsx("button",{type:"button",className:"d-close align-self-center","aria-label":"Close",onClick:()=>x.dismiss(u),children:t.jsx(S,{icon:c||s})})]}),t.jsx(E.Body,{children:t.jsx("span",{children:i})})]}):t.jsx(E,{className:Y({[`toast-${h}`]:!!h},"show"),children:t.jsxs(E.Body,{children:[r&&t.jsx(S,{className:"toast-icon",icon:r}),t.jsx("p",{className:"toast-title",children:a}),t.jsx("button",{type:"button",className:"d-close align-self-center","aria-label":"Close",onClick:()=>x.dismiss(u),children:t.jsx(S,{icon:c||s})})]})}):null,n)},[s])}}try{C.displayName="useDToast",C.__docgenInfo={description:"Hook that provides a `toast` function to dispatch DToast notifications.\n\nPrerequisites:\n- The calling component must be inside `DContextProvider` (provides icon context).\n- `DToastContainer` must be present somewhere in the component tree as a render target.",displayName:"useDToast",props:{}}}catch{}function Ke(){const{toast:s}=C();return t.jsx(k,{text:"Toast - No color",color:"light",onClick:()=>s({title:"Example",timestamp:"just now",icon:"check"},{duration:4e4})})}function Qe(){const{toast:s}=C();return t.jsx(k,{text:"Toast success",color:"light",onClick:()=>s({title:"Example",timestamp:"just now",icon:"check",color:"success"},{duration:4e4})})}function A({type:s="base"}){return t.jsxs(L,{children:[s==="base"&&t.jsx(Ke,{}),s==="success"&&t.jsx(Qe,{}),t.jsx(_,{position:"top-right"})]})}function Je(){const{toast:s}=C();return t.jsx(k,{text:"Toast full - No color",color:"light",onClick:()=>s({title:"Example",description:"This is a description",timestamp:"just now",icon:"check"},{duration:4e3})})}function et(){const{toast:s}=C();return t.jsx(k,{text:"Toast full success",color:"light",onClick:()=>s({title:"Example",description:"This is a description",timestamp:"just now",color:"success",icon:"check"},{duration:4e3})})}function R({type:s="base"}){return t.jsxs(L,{children:[s==="base"&&t.jsx(Je,{}),s==="success"&&t.jsx(et,{}),t.jsx(_,{position:"top-right"})]})}function H({id:s,visible:e}){return e?t.jsxs("div",{className:"bg-secondary-subtle rounded-2 p-4 text-center",children:[t.jsx("p",{className:"fw-bold mt-0",children:"Toast!"}),t.jsx(k,{size:"sm",variant:"outline",color:"secondary",text:"Close toast",onClick:()=>x.dismiss(s)})]}):null}function tt(){const{toast:s}=C();return t.jsx(k,{text:"Show Toast",onClick:()=>s(H,{duration:4e3})})}function st(){return t.jsxs(L,{children:[t.jsx(tt,{}),t.jsx(_,{position:"top-right"})]})}try{A.displayName="ExampleSimpleToastRoot",A.__docgenInfo={description:"",displayName:"ExampleSimpleToastRoot",props:{type:{defaultValue:{value:"base"},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}try{R.displayName="ExampleFullToastRoot",R.__docgenInfo={description:"",displayName:"ExampleFullToastRoot",props:{type:{defaultValue:{value:"base"},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}try{H.displayName="CustomToastExample",H.__docgenInfo={description:"",displayName:"CustomToastExample",props:{}}}catch{}function Z(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...K(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(ie,{title:"Design System/Components/Toast/Usage"}),`
`,t.jsx(e.h1,{id:"toast",children:"Toast"}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"https://img.shields.io/badge/Abstraction%20Component-4848b7",alt:"Shield Badge"})}),`
`,t.jsxs(e.p,{children:["The toast pattern combines two pieces: a ",t.jsx(e.strong,{children:t.jsx(e.code,{children:"DToastContainer"})})," component (the render target) and the ",t.jsx(e.strong,{children:t.jsx(e.code,{children:"useDToast"})}),` hook (the dispatcher).
Both are thin abstractions over `,t.jsx(e.a,{href:"https://react-hot-toast.com/docs",rel:"nofollow",children:"react-hot-toast"})," that integrate with the Dynamic UI icon context and component system."]}),`
`,t.jsx("br",{}),`
`,t.jsx(w,{children:t.jsx(ce,{color:"warning",children:t.jsx("span",{children:t.jsxs(e.p,{children:[`Because react-hot-toast uses a global store, a toast dispatched in one
container may appear in all active containers. For predictable behavior,
keep a single `,t.jsx("code",{children:"DToastContainer"})," per page."]})})})}),`
`,t.jsx(e.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,t.jsxs(e.p,{children:["Before calling ",t.jsx(e.code,{children:"useDToast"}),", two things must be present in the component tree:"]}),`
`,t.jsxs(e.ol,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"DContextProvider"})})," — provides the icon map used by ",t.jsx(e.code,{children:"DToast"})," for close and status icons."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.code,{children:"DToastContainer"})})," — the portal where toasts are rendered. Place it once near the root of your app."]}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{children:`DContextProvider
├── <YourApp>          ← useDToast() → toast("Hello!")
└── <DToastContainer>  ← renders the notification portal
`})}),`
`,t.jsx(b,{code:`
import {
DContextProvider,
DToastContainer,
} from '@dynamic-framework/ui-react';

export function App() {
return (
  <DContextProvider>
    {/* your app content */}
    <DToastContainer position="top-right" />
  </DContextProvider>
);
}
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h2,{id:"usedtoast",children:t.jsx(e.code,{children:"useDToast"})}),`
`,t.jsxs(e.p,{children:["Call ",t.jsx(e.code,{children:"useDToast"})," inside any component that is a descendant of ",t.jsx(e.code,{children:"DContextProvider"}),`.
It returns a single `,t.jsx(e.code,{children:"toast"})," function."]}),`
`,t.jsx(b,{code:"const { toast } = useDToast();",language:"tsx",dark:!0}),`
`,t.jsxs(e.h3,{id:"return-value--toast-function",children:["Return value — ",t.jsx(e.code,{children:"toast"})," function"]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Parameter"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Required"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"data"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"ToastData | ((t: Toast) => Renderable)"})}),t.jsx(e.td,{children:"✅"}),t.jsxs(e.td,{children:["Toast content. Pass a ",t.jsx(e.code,{children:"ToastData"})," object to use the default ",t.jsx(e.code,{children:"DToast"})," layout, or a render function for fully custom content."]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"toastProps"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"DToastOptions"})}),t.jsx(e.td,{children:"—"}),t.jsx(e.td,{children:"Per-toast overrides forwarded to react-hot-toast."})]})]})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Returns"})," ",t.jsx(e.code,{children:"string"})," — the toast ID, which can be passed to react-hot-toast's ",t.jsx(e.code,{children:"toast.dismiss(id)"})," to programmatically close the toast."]}),`
`,t.jsx(e.h2,{id:"toastdata",children:t.jsx(e.code,{children:"ToastData"})}),`
`,t.jsxs(e.p,{children:["Fields used when dispatching a toast with the default ",t.jsx(e.code,{children:"DToast"})," layout."]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Field"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Required"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"title"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"string"})}),t.jsx(e.td,{children:"✅"}),t.jsx(e.td,{children:"Main text displayed in the toast."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"description"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"string"})}),t.jsx(e.td,{children:"—"}),t.jsx(e.td,{children:"Optional secondary text. When present, activates the header + body layout with a timestamp row."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"timestamp"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"string"})}),t.jsx(e.td,{children:"—"}),t.jsxs(e.td,{children:["Timestamp string shown in the header (e.g. ",t.jsx(e.code,{children:'"just now"'}),"). Only visible when ",t.jsx(e.code,{children:"description"})," is set."]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"icon"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"string"})}),t.jsx(e.td,{children:"—"}),t.jsxs(e.td,{children:["Icon name from the active icon set in ",t.jsx(e.code,{children:"DContextProvider"}),". Shown before the title."]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"closeIcon"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"string"})}),t.jsx(e.td,{children:"—"}),t.jsx(e.td,{children:"Overrides the default close icon from the context icon map."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"color"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"ComponentStateColor"})}),t.jsx(e.td,{children:"—"}),t.jsxs(e.td,{children:["Applies the ",t.jsx(e.code,{children:"toast-{color}"})," CSS modifier class (e.g. ",t.jsx(e.code,{children:'"success"'}),", ",t.jsx(e.code,{children:'"danger"'}),", ",t.jsx(e.code,{children:'"warning"'}),", ",t.jsx(e.code,{children:'"info"'}),")."]})]})]})]}),`
`,t.jsx(e.h2,{id:"dtoastcontainerprops",children:t.jsx(e.code,{children:"DToastContainerProps"})}),`
`,t.jsxs(e.p,{children:["Props accepted by ",t.jsx(e.code,{children:"DToastContainer"}),"."]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Prop"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Default"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"position"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"ToastPosition"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"'bottom-center'"})}),t.jsxs(e.td,{children:["Default position for toasts that do not specify their own ",t.jsx(e.code,{children:"position"}),"."]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"reverseOrder"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"boolean"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"false"})}),t.jsxs(e.td,{children:["When ",t.jsx(e.code,{children:"true"}),", new toasts appear at the bottom of the stack instead of the top."]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"gutter"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"number"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"8"})}),t.jsx(e.td,{children:"Gap in pixels between stacked toasts."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"containerClassName"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"string"})}),t.jsx(e.td,{children:"—"}),t.jsxs(e.td,{children:["Additional CSS class applied to the portal container ",t.jsx(e.code,{children:"<div>"}),"."]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"containerStyle"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"CSSProperties"})}),t.jsx(e.td,{children:"—"}),t.jsxs(e.td,{children:["Inline styles applied to the portal container ",t.jsx(e.code,{children:"<div>"}),"."]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"toastOptions"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"DefaultToastOptions"})}),t.jsx(e.td,{children:"—"}),t.jsx(e.td,{children:"Default options merged into every toast rendered inside this container."})]})]})]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.h3,{id:"simple-toast-no-color",children:"Simple toast (no color)"}),`
`,t.jsx(w,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(A,{})})}),`
`,t.jsx(b,{code:`
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
      onClick={() => toast({ title: 'Example', icon: 'check' }, { duration: 40000 })}
    />
    <DToastContainer position="top-right" />
  </DContextProvider>
);
}
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h3,{id:"simple-toast-with-color",children:"Simple toast with color"}),`
`,t.jsx(w,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(A,{type:"success"})})}),`
`,t.jsx(b,{code:`
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
          { title: 'Example', icon: 'check', color: 'success' },
          { duration: 40000 },
        )
      }
    />
    <DToastContainer position="top-right" />
  </DContextProvider>
);
}
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h3,{id:"full-toast-title--description",children:"Full toast (title + description)"}),`
`,t.jsxs(e.p,{children:["When ",t.jsx(e.code,{children:"description"})," is provided the toast switches to a two-row layout with a header (title + timestamp) and a body (description)."]}),`
`,t.jsx(w,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(R,{type:"base"})})}),`
`,t.jsx(b,{code:`
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
            title: 'Example',
            description: 'This is a description',
            timestamp: 'just now',
            icon: 'check',
          },
          { duration: 40000 },
        )
      }
    />
    <DToastContainer position="top-right" />
  </DContextProvider>
);
}
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h3,{id:"full-toast-with-color",children:"Full toast with color"}),`
`,t.jsx(w,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(R,{type:"success"})})}),`
`,t.jsx(b,{code:`
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
            title: 'Example',
            description: 'This is a description',
            timestamp: 'just now',
            color: 'success',
            icon: 'check',
          },
          { duration: 40000 },
        )
      }
    />
    <DToastContainer position="top-right" />
  </DContextProvider>
);
}
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h3,{id:"custom-render-function",children:"Custom render function"}),`
`,t.jsxs(e.p,{children:["Pass a render function as the first argument to ",t.jsx(e.code,{children:"toast"}),` for fully custom content.
The function receives the react-hot-toast `,t.jsx(e.code,{children:"Toast"})," object, which includes ",t.jsx(e.code,{children:"id"})," and ",t.jsx(e.code,{children:"visible"}),"."]}),`
`,t.jsx(w,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(st,{})})}),`
`,t.jsx(e.h4,{id:"customtoastexampletsx",children:t.jsx(e.code,{children:"CustomToastExample.tsx"})}),`
`,t.jsx(b,{code:`
import { DButton } from '@dynamic-framework/ui-react';
import { toast as reactToast, Toast } from 'react-hot-toast';

export function CustomToastExample({ id, visible }: Toast) {
if (!visible) return null;

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
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h4,{id:"apptsx",children:t.jsx(e.code,{children:"App.tsx"})}),`
`,t.jsx(b,{code:`
import {
DContextProvider,
DToastContainer,
useDToast,
} from '@dynamic-framework/ui-react';

import { CustomToastExample } from './CustomToastExample';

export function App() {
const { toast } = useDToast();

return (
  <DContextProvider>
    <DButton
      text="Show Toast"
      onClick={() => toast(CustomToastExample, { duration: 3000 })}
    />
    <DToastContainer position="top-right" />
  </DContextProvider>
);
}
`,language:"tsx",dark:!0})]})}function yt(s={}){const{wrapper:e}={...K(),...s.components};return e?t.jsx(e,{...s,children:t.jsx(Z,{...s})}):Z(s)}export{yt as default};
