import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-CppG1Bu4.js";import{c as z}from"./index-DnZP3Fio.js";import{D as E}from"./DToast-DGyVL8L_.js";import{D as $}from"./DIcon-RaII-fCP.js";import{u as R}from"./DContext-CwTzY28G.js";let B={data:""},U=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||B},q=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Y=/\/\*[^]*?\*\/|  +/g,M=/\n+/g,x=(e,t)=>{let r="",s="",n="";for(let a in e){let i=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+i+";":s+=a[1]=="f"?x(i,a):a+"{"+x(i,a[1]=="k"?"":t)+"}":typeof i=="object"?s+=x(i,t?t.replace(/([^,])+/g,o=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,o):o?o+" "+l:l)):a):i!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=x.p?x.p(a,i):a+":"+i+";")}return r+(t&&n?t+"{"+n+"}":n)+s},h={},S=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+S(e[r]);return t}return e},Z=(e,t,r,s,n)=>{let a=S(e),i=h[a]||(h[a]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(a));if(!h[i]){let l=a!==e?e:(c=>{let p,f,y=[{}];for(;p=q.exec(c.replace(Y,""));)p[4]?y.shift():p[3]?(f=p[3].replace(M," ").trim(),y.unshift(y[0][f]=y[0][f]||{})):y[0][p[1]]=p[2].replace(M," ").trim();return y[0]})(e);h[i]=x(n?{["@keyframes "+i]:l}:l,r?"":"."+i)}let o=r&&h.g?h.g:null;return r&&(h.g=h[i]),((l,c,p,f)=>{f?c.data=c.data.replace(f,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(h[i],t,s,o),i},J=(e,t,r)=>e.reduce((s,n,a)=>{let i=t[a];if(i&&i.call){let o=i(r),l=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=l?"."+l:o&&typeof o=="object"?o.props?"":x(o,""):o===!1?"":o}return s+n+(i??"")},"");function O(e){let t=this||{},r=e.call?e(t.p):e;return Z(r.unshift?r.raw?J(r,[].slice.call(arguments,1),t.p):r.reduce((s,n)=>Object.assign(s,n&&n.call?n(t.p):n),{}):r,U(t.target),t.g,t.o,t.k)}let F,A,I;O.bind({g:1});let b=O.bind({k:1});function K(e,t,r,s){x.p=t,F=e,A=r,I=s}function v(e,t){let r=this||{};return function(){let s=arguments;function n(a,i){let o=Object.assign({},a),l=o.className||n.className;r.p=Object.assign({theme:A&&A()},o),r.o=/ *go\d+/.test(l),o.className=O.apply(r,s)+(l?" "+l:"");let c=e;return e[0]&&(c=o.as||e,delete o.as),I&&c[0]&&I(o),F(c,o)}return t?t(n):n}}var V=e=>typeof e=="function",_=(e,t)=>V(e)?e(t):e,W=(()=>{let e=0;return()=>(++e).toString()})(),H=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),X=20,L=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,X)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return L(e,{type:e.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(a=>a.id===s||s===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+n}))}}},k=[],w={toasts:[],pausedAt:void 0},j=e=>{w=L(w,e),k.forEach(t=>{t(w)})},G={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Q=(e={})=>{let[t,r]=d.useState(w),s=d.useRef(w);d.useEffect(()=>(s.current!==w&&r(w),k.push(r),()=>{let a=k.indexOf(r);a>-1&&k.splice(a,1)}),[]);let n=t.toasts.map(a=>{var i,o,l;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((i=e[a.type])==null?void 0:i.removeDelay)||(e==null?void 0:e.removeDelay),duration:a.duration||((o=e[a.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||G[a.type],style:{...e.style,...(l=e[a.type])==null?void 0:l.style,...a.style}}});return{...t,toasts:n}},ee=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||W()}),N=e=>(t,r)=>{let s=ee(t,e,r);return j({type:2,toast:s}),s.id},u=(e,t)=>N("blank")(e,t);u.error=N("error");u.success=N("success");u.loading=N("loading");u.custom=N("custom");u.dismiss=e=>{j({type:3,toastId:e})};u.remove=e=>j({type:4,toastId:e});u.promise=(e,t,r)=>{let s=u.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let a=t.success?_(t.success,n):void 0;return a?u.success(a,{id:s,...r,...r==null?void 0:r.success}):u.dismiss(s),n}).catch(n=>{let a=t.error?_(t.error,n):void 0;a?u.error(a,{id:s,...r,...r==null?void 0:r.error}):u.dismiss(s)}),e};var te=(e,t)=>{j({type:1,toast:{id:e,height:t}})},ae=()=>{j({type:5,time:Date.now()})},D=new Map,re=1e3,se=(e,t=re)=>{if(D.has(e))return;let r=setTimeout(()=>{D.delete(e),j({type:4,toastId:e})},t);D.set(e,r)},oe=e=>{let{toasts:t,pausedAt:r}=Q(e);d.useEffect(()=>{if(r)return;let a=Date.now(),i=t.map(o=>{if(o.duration===1/0)return;let l=(o.duration||0)+o.pauseDuration-(a-o.createdAt);if(l<0){o.visible&&u.dismiss(o.id);return}return setTimeout(()=>u.dismiss(o.id),l)});return()=>{i.forEach(o=>o&&clearTimeout(o))}},[t,r]);let s=d.useCallback(()=>{r&&j({type:6,time:Date.now()})},[r]),n=d.useCallback((a,i)=>{let{reverseOrder:o=!1,gutter:l=8,defaultPosition:c}=i||{},p=t.filter(g=>(g.position||c)===(a.position||c)&&g.height),f=p.findIndex(g=>g.id===a.id),y=p.filter((g,T)=>T<f&&g.visible).length;return p.filter(g=>g.visible).slice(...o?[y+1]:[0,y]).reduce((g,T)=>g+(T.height||0)+l,0)},[t]);return d.useEffect(()=>{t.forEach(a=>{if(a.dismissed)se(a.id,a.removeDelay);else{let i=D.get(a.id);i&&(clearTimeout(i),D.delete(a.id))}})},[t]),{toasts:t,handlers:{updateHeight:te,startPause:ae,endPause:s,calculateOffset:n}}},ie=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ne=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,le=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ce=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ie} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ne} 0.15s ease-out forwards;
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
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,de=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,pe=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${de} 1s linear infinite;
`,ue=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,me=b`
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
}`,fe=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${me} 0.2s ease-out forwards;
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
`,ye=v("div")`
  position: absolute;
`,ge=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,he=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,be=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${he} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,xe=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?d.createElement(be,null,t):t:r==="blank"?null:d.createElement(ge,null,d.createElement(pe,{...s}),r!=="loading"&&d.createElement(ye,null,r==="error"?d.createElement(ce,{...s}):d.createElement(fe,{...s})))},ve=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,we=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,je="0%{opacity:0;} 100%{opacity:1;}",Ee="0%{opacity:1;} 100%{opacity:0;}",De=v("div")`
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
`,Ne=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$e=(e,t)=>{let r=e.includes("top")?1:-1,[s,n]=H()?[je,Ee]:[ve(r),we(r)];return{animation:t?`${b(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ce=d.memo(({toast:e,position:t,style:r,children:s})=>{let n=e.height?$e(e.position||t||"top-center",e.visible):{opacity:0},a=d.createElement(xe,{toast:e}),i=d.createElement(Ne,{...e.ariaProps},_(e.message,e));return d.createElement(De,{className:e.className,style:{...n,...r,...e.style}},typeof s=="function"?s({icon:a,message:i}):d.createElement(d.Fragment,null,a,i))});K(d.createElement);var ke=({id:e,className:t,style:r,onHeightUpdate:s,children:n})=>{let a=d.useCallback(i=>{if(i){let o=()=>{let l=i.getBoundingClientRect().height;s(e,l)};o(),new MutationObserver(o).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return d.createElement("div",{ref:a,className:t,style:r},n)},_e=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:H()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...n}},Oe=O`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,C=16,Te=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:n,containerStyle:a,containerClassName:i})=>{let{toasts:o,handlers:l}=oe(r);return d.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:C,left:C,right:C,bottom:C,pointerEvents:"none",...a},className:i,onMouseEnter:l.startPause,onMouseLeave:l.endPause},o.map(c=>{let p=c.position||t,f=l.calculateOffset(c,{reverseOrder:e,gutter:s,defaultPosition:t}),y=_e(p,f);return d.createElement(ke,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Oe:"",style:y},c.type==="custom"?_(c.message,c):n?n(c):d.createElement(Ce,{toast:c,position:p}))}))};function P({containerClassName:e,position:t="bottom-center",reverseOrder:r=!1,containerStyle:s,toastOptions:n,gutter:a}){return m.jsx(Te,{containerClassName:e,position:t,reverseOrder:r,containerStyle:s,gutter:a,toastOptions:n})}try{P.displayName="DToastContainer",P.__docgenInfo={description:"",displayName:"DToastContainer",props:{}}}catch{}function Fe(){const{iconMap:{xLg:e}}=R();return{toast:d.useCallback((r,s)=>{if(typeof r=="function")return u.custom(r,s);const{title:n,description:a,icon:i,closeIcon:o,timestamp:l,color:c}=r;return u.custom(({id:p,visible:f})=>f?a?m.jsxs(E,{className:z({[`toast-${c}`]:!!c},"show"),children:[m.jsxs(E.Header,{children:[i&&m.jsx($,{className:"toast-icon",icon:i}),m.jsx("p",{className:"toast-title",children:n}),l&&m.jsx("small",{className:"toast-timestamp",children:l}),m.jsx("button",{type:"button",className:"d-close align-self-center","aria-label":"Close",onClick:()=>u.dismiss(p),children:m.jsx($,{icon:o||e})})]}),m.jsx(E.Body,{children:m.jsx("span",{children:a})})]}):m.jsx(E,{className:z({[`toast-${c}`]:!!c},"show"),children:m.jsxs(E.Body,{children:[i&&m.jsx($,{className:"toast-icon",icon:i}),m.jsx("p",{className:"toast-title",children:n}),m.jsx("button",{type:"button",className:"d-close align-self-center","aria-label":"Close",onClick:()=>u.dismiss(p),children:m.jsx($,{icon:o||e})})]})}):null,s)},[e])}}export{P as D,u as c,Fe as u};
