import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-B_y6UB7Z.js";import{c as H}from"./index-DjkKVd-P.js";import{D as E}from"./DToast-Bwond0mP.js";import{D}from"./DIcon-CvCEcTnV.js";import{u as W}from"./DContext-poyny3cD.js";let G={data:""},J=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||G},X=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ee=/\/\*[^]*?\*\/|  +/g,R=/\n+/g,w=(e,t)=>{let a="",r="",i="";for(let o in e){let s=e[o];o[0]=="@"?o[1]=="i"?a=o+" "+s+";":r+=o[1]=="f"?w(s,o):o+"{"+w(s,o[1]=="k"?"":t)+"}":typeof s=="object"?r+=w(s,t?t.replace(/([^,])+/g,n=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=w.p?w.p(o,s):o+":"+s+";")}return a+(t&&i?t+"{"+i+"}":i)+r},x={},B=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+B(e[a]);return t}return e},te=(e,t,a,r,i)=>{let o=B(e),s=x[o]||(x[o]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(o));if(!x[s]){let l=o!==e?e:(d=>{let p,u,f=[{}];for(;p=X.exec(d.replace(ee,""));)p[4]?f.shift():p[3]?(u=p[3].replace(R," ").trim(),f.unshift(f[0][u]=f[0][u]||{})):f[0][p[1]]=p[2].replace(R," ").trim();return f[0]})(e);x[s]=w(i?{["@keyframes "+s]:l}:l,a?"":"."+s)}let n=a&&x.g?x.g:null;return a&&(x.g=x[s]),((l,d,p,u)=>{u?d.data=d.data.replace(u,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(x[s],t,r,n),s},ae=(e,t,a)=>e.reduce((r,i,o)=>{let s=t[o];if(s&&s.call){let n=s(a),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;s=l?"."+l:n&&typeof n=="object"?n.props?"":w(n,""):n===!1?"":n}return r+i+(s??"")},"");function _(e){let t=this||{},a=e.call?e(t.p):e;return te(a.unshift?a.raw?ae(a,[].slice.call(arguments,1),t.p):a.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):a,J(t.target),t.g,t.o,t.k)}let U,z,P;_.bind({g:1});let v=_.bind({k:1});function se(e,t,a,r){w.p=t,U=e,z=a,P=r}function j(e,t){let a=this||{};return function(){let r=arguments;function i(o,s){let n=Object.assign({},o),l=n.className||i.className;a.p=Object.assign({theme:z&&z()},n),a.o=/ *go\d+/.test(l),n.className=_.apply(a,r)+(l?" "+l:"");let d=e;return e[0]&&(d=n.as||e,delete n.as),P&&d[0]&&P(n),U(d,n)}return t?t(i):i}}var re=e=>typeof e=="function",O=(e,t)=>re(e)?e(t):e,oe=(()=>{let e=0;return()=>(++e).toString()})(),Y=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ie=20,L="default",Z=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:r}=t;return Z(e,{type:e.toasts.find(s=>s.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(s=>s.id===i||i===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+o}))}}},N=[],q={toasts:[],pausedAt:void 0,settings:{toastLimit:ie}},b={},K=(e,t=L)=>{b[t]=Z(b[t]||q,e),N.forEach(([a,r])=>{a===t&&r(b[t])})},Q=e=>Object.keys(b).forEach(t=>K(e,t)),ne=e=>Object.keys(b).find(t=>b[t].toasts.some(a=>a.id===e)),I=(e=L)=>t=>{K(t,e)},le={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ce=(e={},t=L)=>{let[a,r]=c.useState(b[t]||q),i=c.useRef(b[t]);c.useEffect(()=>(i.current!==b[t]&&r(b[t]),N.push([t,r]),()=>{let s=N.findIndex(([n])=>n===t);s>-1&&N.splice(s,1)}),[t]);let o=a.toasts.map(s=>{var n,l,d;return{...e,...e[s.type],...s,removeDelay:s.removeDelay||((n=e[s.type])==null?void 0:n.removeDelay)||(e==null?void 0:e.removeDelay),duration:s.duration||((l=e[s.type])==null?void 0:l.duration)||(e==null?void 0:e.duration)||le[s.type],style:{...e.style,...(d=e[s.type])==null?void 0:d.style,...s.style}}});return{...a,toasts:o}},de=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||oe()}),k=e=>(t,a)=>{let r=de(t,e,a);return I(r.toasterId||ne(r.id))({type:2,toast:r}),r.id},m=(e,t)=>k("blank")(e,t);m.error=k("error");m.success=k("success");m.loading=k("loading");m.custom=k("custom");m.dismiss=(e,t)=>{let a={type:3,toastId:e};t?I(t)(a):Q(a)};m.dismissAll=e=>m.dismiss(void 0,e);m.remove=(e,t)=>{let a={type:4,toastId:e};t?I(t)(a):Q(a)};m.removeAll=e=>m.remove(void 0,e);m.promise=(e,t,a)=>{let r=m.loading(t.loading,{...a,...a==null?void 0:a.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let o=t.success?O(t.success,i):void 0;return o?m.success(o,{id:r,...a,...a==null?void 0:a.success}):m.dismiss(r),i}).catch(i=>{let o=t.error?O(t.error,i):void 0;o?m.error(o,{id:r,...a,...a==null?void 0:a.error}):m.dismiss(r)}),e};var ue=1e3,pe=(e,t="default")=>{let{toasts:a,pausedAt:r}=ce(e,t),i=c.useRef(new Map).current,o=c.useCallback((u,f=ue)=>{if(i.has(u))return;let g=setTimeout(()=>{i.delete(u),s({type:4,toastId:u})},f);i.set(u,g)},[]);c.useEffect(()=>{if(r)return;let u=Date.now(),f=a.map(g=>{if(g.duration===1/0)return;let C=(g.duration||0)+g.pauseDuration-(u-g.createdAt);if(C<0){g.visible&&m.dismiss(g.id);return}return setTimeout(()=>m.dismiss(g.id,t),C)});return()=>{f.forEach(g=>g&&clearTimeout(g))}},[a,r,t]);let s=c.useCallback(I(t),[t]),n=c.useCallback(()=>{s({type:5,time:Date.now()})},[s]),l=c.useCallback((u,f)=>{s({type:1,toast:{id:u,height:f}})},[s]),d=c.useCallback(()=>{r&&s({type:6,time:Date.now()})},[r,s]),p=c.useCallback((u,f)=>{let{reverseOrder:g=!1,gutter:C=8,defaultPosition:M}=f||{},T=a.filter(h=>(h.position||M)===(u.position||M)&&h.height),V=T.findIndex(h=>h.id===u.id),F=T.filter((h,A)=>A<V&&h.visible).length;return T.filter(h=>h.visible).slice(...g?[F+1]:[0,F]).reduce((h,A)=>h+(A.height||0)+C,0)},[a]);return c.useEffect(()=>{a.forEach(u=>{if(u.dismissed)o(u.id,u.removeDelay);else{let f=i.get(u.id);f&&(clearTimeout(f),i.delete(u.id))}})},[a,o]),{toasts:a,handlers:{updateHeight:l,startPause:n,endPause:d,calculateOffset:p}}},me=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,fe=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ge=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ye=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${me} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${fe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ge} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,he=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,be=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${he} 1s linear infinite;
`,xe=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ve=v`
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
}`,we=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ve} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,je=j("div")`
  position: absolute;
`,Ee=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ke=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ce=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ke} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,De=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return t!==void 0?typeof t=="string"?c.createElement(Ce,null,t):t:a==="blank"?null:c.createElement(Ee,null,c.createElement(be,{...r}),a!=="loading"&&c.createElement(je,null,a==="error"?c.createElement(ye,{...r}):c.createElement(we,{...r})))},$e=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ne=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Oe="0%{opacity:0;} 100%{opacity:1;}",_e="0%{opacity:1;} 100%{opacity:0;}",Ie=j("div")`
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
`,Te=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,t)=>{let a=e.includes("top")?1:-1,[r,i]=Y()?[Oe,_e]:[$e(a),Ne(a)];return{animation:t?`${v(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ze=c.memo(({toast:e,position:t,style:a,children:r})=>{let i=e.height?Ae(e.position||t||"top-center",e.visible):{opacity:0},o=c.createElement(De,{toast:e}),s=c.createElement(Te,{...e.ariaProps},O(e.message,e));return c.createElement(Ie,{className:e.className,style:{...i,...a,...e.style}},typeof r=="function"?r({icon:o,message:s}):c.createElement(c.Fragment,null,o,s))});se(c.createElement);var Pe=({id:e,className:t,style:a,onHeightUpdate:r,children:i})=>{let o=c.useCallback(s=>{if(s){let n=()=>{let l=s.getBoundingClientRect().height;r(e,l)};n(),new MutationObserver(n).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return c.createElement("div",{ref:o,className:t,style:a},i)},Le=(e,t)=>{let a=e.includes("top"),r=a?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Y()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...r,...i}},Me=_`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,Fe=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:i,toasterId:o,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:d}=pe(a,o);return c.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...s},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(p=>{let u=p.position||t,f=d.calculateOffset(p,{reverseOrder:e,gutter:r,defaultPosition:t}),g=Le(u,f);return c.createElement(Pe,{id:p.id,key:p.id,onHeightUpdate:d.updateHeight,className:p.visible?Me:"",style:g},p.type==="custom"?O(p.message,p):i?i(p):c.createElement(ze,{toast:p,position:u}))}))};function S({containerClassName:e,position:t="bottom-center",reverseOrder:a=!1,containerStyle:r,toastOptions:i,gutter:o}){return y.jsx(Fe,{containerClassName:e,position:t,reverseOrder:a,containerStyle:r,gutter:o,toastOptions:i})}try{S.displayName="DToastContainer",S.__docgenInfo={description:"",displayName:"DToastContainer",props:{}}}catch{}function Ze(){const{iconMap:{xLg:e}}=W();return{toast:c.useCallback((a,r)=>{if(typeof a=="function")return m.custom(a,r);const{title:i,description:o,icon:s,closeIcon:n,timestamp:l,color:d}=a;return m.custom(({id:p,visible:u})=>u?o?y.jsxs(E,{className:H({[`toast-${d}`]:!!d},"show"),children:[y.jsxs(E.Header,{children:[s&&y.jsx(D,{className:"toast-icon",icon:s}),y.jsx("p",{className:"toast-title",children:i}),l&&y.jsx("small",{className:"toast-timestamp",children:l}),y.jsx("button",{type:"button",className:"d-close align-self-center","aria-label":"Close",onClick:()=>m.dismiss(p),children:y.jsx(D,{icon:n||e})})]}),y.jsx(E.Body,{children:y.jsx("span",{children:o})})]}):y.jsx(E,{className:H({[`toast-${d}`]:!!d},"show"),children:y.jsxs(E.Body,{children:[s&&y.jsx(D,{className:"toast-icon",icon:s}),y.jsx("p",{className:"toast-title",children:i}),y.jsx("button",{type:"button",className:"d-close align-self-center","aria-label":"Close",onClick:()=>m.dismiss(p),children:y.jsx(D,{icon:n||e})})]})}):null,r)},[e])}}export{S as D,m as n,Ze as u};
