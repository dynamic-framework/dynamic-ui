import{j as l}from"./jsx-runtime-CKrituN3.js";import{r as u}from"./index-CBqU2yxZ.js";import{c as P}from"./index-ELyB7pIJ.js";import{D as T}from"./DToast-CXYMCtKi.js";import{D as k}from"./DIcon-1scRBrNx.js";import{u as G,D as M}from"./DContext-CSLUP0I2.js";import{D as b}from"./DButton-DMz62NRO.js";let J={data:""},Q=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||J,W=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,X=/\/\*[^]*?\*\/|  +/g,H=/\n+/g,v=(t,e)=>{let s="",r="",o="";for(let a in t){let n=t[a];a[0]=="@"?a[1]=="i"?s=a+" "+n+";":r+=a[1]=="f"?v(n,a):a+"{"+v(n,a[1]=="k"?"":e)+"}":typeof n=="object"?r+=v(n,e?e.replace(/([^,])+/g,i=>a.replace(/(^:.*)|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,i):i?i+" "+d:d)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=v.p?v.p(a,n):a+":"+n+";")}return s+(e&&o?e+"{"+o+"}":o)+r},g={},V=t=>{if(typeof t=="object"){let e="";for(let s in t)e+=s+V(t[s]);return e}return t},K=(t,e,s,r,o)=>{let a=V(t),n=g[a]||(g[a]=(d=>{let c=0,p=11;for(;c<d.length;)p=101*p+d.charCodeAt(c++)>>>0;return"go"+p})(a));if(!g[n]){let d=a!==t?t:(c=>{let p,f,h=[{}];for(;p=W.exec(c.replace(X,""));)p[4]?h.shift():p[3]?(f=p[3].replace(H," ").trim(),h.unshift(h[0][f]=h[0][f]||{})):h[0][p[1]]=p[2].replace(H," ").trim();return h[0]})(t);g[n]=v(o?{["@keyframes "+n]:d}:d,s?"":"."+n)}let i=s&&g.g?g.g:null;return s&&(g.g=g[n]),((d,c,p,f)=>{f?c.data=c.data.replace(f,d):c.data.indexOf(d)===-1&&(c.data=p?d+c.data:c.data+d)})(g[n],e,r,i),n},tt=(t,e,s)=>t.reduce((r,o,a)=>{let n=e[a];if(n&&n.call){let i=n(s),d=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=d?"."+d:i&&typeof i=="object"?i.props?"":v(i,""):i===!1?"":i}return r+o+(n??"")},"");function O(t){let e=this||{},s=t.call?t(e.p):t;return K(s.unshift?s.raw?tt(s,[].slice.call(arguments,1),e.p):s.reduce((r,o)=>Object.assign(r,o&&o.call?o(e.p):o),{}):s,Q(e.target),e.g,e.o,e.k)}let Y,z,A;O.bind({g:1});let y=O.bind({k:1});function et(t,e,s,r){v.p=e,Y=t,z=s,A=r}function j(t,e){let s=this||{};return function(){let r=arguments;function o(a,n){let i=Object.assign({},a),d=i.className||o.className;s.p=Object.assign({theme:z&&z()},i),s.o=/ *go\d+/.test(d),i.className=O.apply(s,r)+(d?" "+d:"");let c=t;return t[0]&&(c=i.as||t,delete i.as),A&&c[0]&&A(i),Y(c,i)}return o}}var st=t=>typeof t=="function",I=(t,e)=>st(t)?t(e):t,at=(()=>{let t=0;return()=>(++t).toString()})(),Z=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),ot=20,$=new Map,rt=1e3,L=t=>{if($.has(t))return;let e=setTimeout(()=>{$.delete(t),w({type:4,toastId:t})},rt);$.set(t,e)},it=t=>{let e=$.get(t);e&&clearTimeout(e)},U=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,ot)};case 1:return e.toast.id&&it(e.toast.id),{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:s}=e;return t.toasts.find(a=>a.id===s.id)?U(t,{type:1,toast:s}):U(t,{type:0,toast:s});case 3:let{toastId:r}=e;return r?L(r):t.toasts.forEach(a=>{L(a.id)}),{...t,toasts:t.toasts.map(a=>a.id===r||r===void 0?{...a,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let o=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},D=[],S={toasts:[],pausedAt:void 0},w=t=>{S=U(S,t),D.forEach(e=>{e(S)})},nt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},lt=(t={})=>{let[e,s]=u.useState(S);u.useEffect(()=>(D.push(s),()=>{let o=D.indexOf(s);o>-1&&D.splice(o,1)}),[e]);let r=e.toasts.map(o=>{var a,n;return{...t,...t[o.type],...o,duration:o.duration||((a=t[o.type])==null?void 0:a.duration)||(t==null?void 0:t.duration)||nt[o.type],style:{...t.style,...(n=t[o.type])==null?void 0:n.style,...o.style}}});return{...e,toasts:r}},ct=(t,e="blank",s)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(s==null?void 0:s.id)||at()}),_=t=>(e,s)=>{let r=ct(e,t,s);return w({type:2,toast:r}),r.id},m=(t,e)=>_("blank")(t,e);m.error=_("error");m.success=_("success");m.loading=_("loading");m.custom=_("custom");m.dismiss=t=>{w({type:3,toastId:t})};m.remove=t=>w({type:4,toastId:t});m.promise=(t,e,s)=>{let r=m.loading(e.loading,{...s,...s==null?void 0:s.loading});return t.then(o=>(m.success(I(e.success,o),{id:r,...s,...s==null?void 0:s.success}),o)).catch(o=>{m.error(I(e.error,o),{id:r,...s,...s==null?void 0:s.error})}),t};var dt=(t,e)=>{w({type:1,toast:{id:t,height:e}})},pt=()=>{w({type:5,time:Date.now()})},ut=t=>{let{toasts:e,pausedAt:s}=lt(t);u.useEffect(()=>{if(s)return;let a=Date.now(),n=e.map(i=>{if(i.duration===1/0)return;let d=(i.duration||0)+i.pauseDuration-(a-i.createdAt);if(d<0){i.visible&&m.dismiss(i.id);return}return setTimeout(()=>m.dismiss(i.id),d)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[e,s]);let r=u.useCallback(()=>{s&&w({type:6,time:Date.now()})},[s]),o=u.useCallback((a,n)=>{let{reverseOrder:i=!1,gutter:d=8,defaultPosition:c}=n||{},p=e.filter(x=>(x.position||c)===(a.position||c)&&x.height),f=p.findIndex(x=>x.id===a.id),h=p.filter((x,F)=>F<f&&x.visible).length;return p.filter(x=>x.visible).slice(...i?[h+1]:[0,h]).reduce((x,F)=>x+(F.height||0)+d,0)},[e]);return{toasts:e,handlers:{updateHeight:dt,startPause:pt,endPause:r,calculateOffset:o}}},mt=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ft=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ht=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,xt=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${mt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ft} 0.15s ease-out forwards;
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
    animation: ${ht} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,gt=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,yt=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${gt} 1s linear infinite;
`,bt=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,vt=y`
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
}`,jt=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${bt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${vt} 0.2s ease-out forwards;
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
`,Et=j("div")`
  position: absolute;
`,wt=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Tt=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ct=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Tt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,_t=({toast:t})=>{let{icon:e,type:s,iconTheme:r}=t;return e!==void 0?typeof e=="string"?u.createElement(Ct,null,e):e:s==="blank"?null:u.createElement(wt,null,u.createElement(yt,{...r}),s!=="loading"&&u.createElement(Et,null,s==="error"?u.createElement(xt,{...r}):u.createElement(jt,{...r})))},kt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Nt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,$t="0%{opacity:0;} 100%{opacity:1;}",Dt="0%{opacity:1;} 100%{opacity:0;}",St=j("div")`
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
`,It=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ot=(t,e)=>{let s=t.includes("top")?1:-1,[r,o]=Z()?[$t,Dt]:[kt(s),Nt(s)];return{animation:e?`${y(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ft=u.memo(({toast:t,position:e,style:s,children:r})=>{let o=t.height?Ot(t.position||e||"top-center",t.visible):{opacity:0},a=u.createElement(_t,{toast:t}),n=u.createElement(It,{...t.ariaProps},I(t.message,t));return u.createElement(St,{className:t.className,style:{...o,...s,...t.style}},typeof r=="function"?r({icon:a,message:n}):u.createElement(u.Fragment,null,a,n))});et(u.createElement);var zt=({id:t,className:e,style:s,onHeightUpdate:r,children:o})=>{let a=u.useCallback(n=>{if(n){let i=()=>{let d=n.getBoundingClientRect().height;r(t,d)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return u.createElement("div",{ref:a,className:e,style:s},o)},At=(t,e)=>{let s=t.includes("top"),r=s?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(s?1:-1)}px)`,...r,...o}},Ut=O`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,N=16,Rt=({reverseOrder:t,position:e="top-center",toastOptions:s,gutter:r,children:o,containerStyle:a,containerClassName:n})=>{let{toasts:i,handlers:d}=ut(s);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:N,left:N,right:N,bottom:N,pointerEvents:"none",...a},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},i.map(c=>{let p=c.position||e,f=d.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),h=At(p,f);return u.createElement(zt,{id:c.id,key:c.id,onHeightUpdate:d.updateHeight,className:c.visible?Ut:"",style:h},c.type==="custom"?I(c.message,c):o?o(c):u.createElement(Ft,{toast:c,position:p}))}))};function C({containerClassName:t,position:e="bottom-center",reverseOrder:s=!1,containerStyle:r,toastOptions:o,gutter:a}){return l.jsx(Rt,{containerClassName:t,position:e,reverseOrder:s,containerStyle:r,gutter:a,toastOptions:o})}try{C.displayName="DToastContainer",C.__docgenInfo={description:"",displayName:"DToastContainer",props:{}}}catch{}function E(){const{iconMap:{xLg:t}}=G();return{toast:u.useCallback((s,r)=>{if(typeof s=="function")return m.custom(s,r);const{title:o,description:a,icon:n,closeIcon:i,timestamp:d,theme:c,soft:p}=s;return m.custom(({id:f,visible:h})=>h?a?l.jsxs(T,{className:P({[`toast-${c}`]:!!c&&!p,[`toast-soft-${c}`]:!!c&&!!p},"show"),children:[l.jsxs(T.Header,{children:[n&&l.jsx(k,{className:"toast-icon",icon:n}),l.jsx("p",{className:"toast-title",children:o}),d&&l.jsx("small",{className:"toast-timestamp",children:d}),l.jsx("button",{type:"button",className:"d-close align-self-center","aria-label":"Close",onClick:()=>m.dismiss(f),children:l.jsx(k,{icon:i||t})})]}),l.jsx(T.Body,{children:l.jsx("span",{children:a})})]}):l.jsx(T,{className:P({[`toast-${c}`]:!!c&&!p,[`toast-soft-${c}`]:!!c&&!!p},"show"),children:l.jsxs(T.Body,{children:[n&&l.jsx(k,{className:"toast-icon",icon:n}),l.jsx("p",{className:"toast-title",children:o}),l.jsx("button",{type:"button",className:"d-close align-self-center","aria-label":"Close",onClick:()=>m.dismiss(f),children:l.jsx(k,{icon:i||t})})]})}):null,r)},[t])}}function Mt(){const{toast:t}=E();return l.jsx(b,{text:"Toast - No theme",theme:"light",onClick:()=>t({title:"Example",timestamp:"just now",icon:"check"},{duration:4e4})})}function Pt(){const{toast:t}=E();return l.jsx(b,{text:"Toast secondary",theme:"light",onClick:()=>t({title:"Example",timestamp:"just now",icon:"check",theme:"secondary"},{duration:4e4})})}function Ht(){const{toast:t}=E();return l.jsx(b,{text:"Toast soft secondary",theme:"light",onClick:()=>t({title:"Example",timestamp:"just now",icon:"check",theme:"secondary",soft:!0},{duration:4e4})})}function B({type:t="base"}){return l.jsxs(M,{children:[t==="base"&&l.jsx(Mt,{}),t==="secondary"&&l.jsx(Pt,{}),t==="soft"&&l.jsx(Ht,{}),l.jsx(C,{position:"top-right"})]})}function Lt(){const{toast:t}=E();return l.jsx(b,{text:"Toast full - No theme",theme:"light",onClick:()=>t({title:"Example",description:"This is a description",timestamp:"just now",icon:"check"},{duration:4e3})})}function Bt(){const{toast:t}=E();return l.jsx(b,{text:"Toast full secondary",theme:"light",onClick:()=>t({title:"Example",description:"This is a description",timestamp:"just now",theme:"secondary",icon:"check"},{duration:4e3})})}function qt(){const{toast:t}=E();return l.jsx(b,{text:"Toast soft full secondary",theme:"light",onClick:()=>t({title:"Example",description:"This is a description",timestamp:"just now",theme:"secondary",soft:!0,icon:"check"},{duration:4e3})})}function q({type:t="base"}){return l.jsxs(M,{children:[t==="base"&&l.jsx(Lt,{}),t==="secondary"&&l.jsx(Bt,{}),t==="soft"&&l.jsx(qt,{}),l.jsx(C,{position:"top-right"})]})}function R({id:t,visible:e}){return e?l.jsxs("div",{className:"bg-surface-secondary rounded-2 p-4 text-center",children:[l.jsx("p",{className:"fw-bold mt-0",children:"Toast!"}),l.jsx(b,{size:"sm",variant:"outline",theme:"secondary",text:"Close toast",onClick:()=>m.dismiss(t)})]}):null}function Vt(){const{toast:t}=E();return l.jsx(b,{text:"Show Toast",onClick:()=>t(R,{duration:1e3})})}function Kt(){return l.jsxs(M,{children:[l.jsx(Vt,{}),l.jsx(C,{position:"top-right"})]})}function te(){const{toast:t}=E();return l.jsx(b,{text:"Show Toast",onClick:()=>t({title:"Example"},{duration:5e3})})}try{B.displayName="ExampleSimpleToastRoot",B.__docgenInfo={description:"",displayName:"ExampleSimpleToastRoot",props:{type:{defaultValue:{value:"base"},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}try{q.displayName="ExampleFullToastRoot",q.__docgenInfo={description:"",displayName:"ExampleFullToastRoot",props:{type:{defaultValue:{value:"base"},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}try{R.displayName="CustomToastExample",R.__docgenInfo={description:"",displayName:"CustomToastExample",props:{}}}catch{}export{C as D,te as E,B as a,q as b,Kt as c};
