import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-DPR1f7NX.js";import{M as j,c as f,U as w}from"./blocks-BvZSuxJt.js";import{r as s}from"./iframe-CHeqVsUI.js";import{D as o}from"./DCard-CwiAt_Wy.js";import{D as y}from"./DButton-BGTbUgzt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";import"./index-9xGy8ok_.js";import"./DIcon-C9QpqnTB.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DWQi1yBD.js";import"./DContext-I2P6eEmu.js";const h="(min-width: 768px)";function b(){const n=s.useRef(null),t=s.useRef(null),[m,c]=s.useState(0),[d,u]=s.useState();s.useEffect(()=>{const i=n.current;if(!i)return;c(i.getBoundingClientRect().width);const r=new ResizeObserver(([p])=>{c(p.contentRect.width)});return r.observe(i),()=>r.disconnect()},[]);const x=()=>{var r;const i=(r=t.current)==null?void 0:r.contentWindow;u(i?i.matchMedia(h).matches:void 0)};return e.jsxs(o,{children:[e.jsx(o.Header,{children:h}),e.jsxs(o.Body,{children:[e.jsx("p",{className:"mb-2",children:'Drag the right edge to resize the box (an isolated viewport), then click "Check now" to read the match at that instant.'}),e.jsxs("div",{ref:n,style:{position:"relative",resize:"horizontal",overflow:"hidden",border:"1px solid var(--bs-border-color)",width:900,maxWidth:"100%",minWidth:320,height:48},children:[e.jsx("iframe",{ref:t,title:"checkMediaQuery resizable preview",style:{width:"100%",height:"100%",border:"none"}}),e.jsx("span",{className:"badge text-bg-dark",style:{position:"absolute",top:4,left:4},children:`Width: ${Math.round(m)}px`})]}),e.jsxs("div",{className:"d-flex align-items-center gap-3 mt-3",children:[e.jsx(y,{size:"sm",onClick:x,text:"Check now"}),e.jsx("pre",{className:"mb-0",children:d===void 0?"Matches: (not checked yet)":`Matches: ${d}`})]})]})]})}function g(){return e.jsx(b,{})}function a(n){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Design System/Utils/mediaQuery/checkMediaQuery"}),`
`,e.jsx(t.h1,{id:"checkmediaquery",children:"checkMediaQuery"}),`
`,e.jsxs(t.p,{children:["Synchronously checks whether a media query currently matches, using ",e.jsx(t.code,{children:"window.matchMedia"}),"."]}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"query"})," (",e.jsx(t.code,{children:"string"}),"): A valid CSS media query, e.g. ",e.jsx(t.code,{children:"'(min-width: 768px)'"}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"returns",children:"Returns"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["(",e.jsx(t.code,{children:"boolean"}),"): ",e.jsx(t.code,{children:"true"})," when the media query currently matches, ",e.jsx(t.code,{children:"false"})," otherwise."]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["This is a one-off, point-in-time check — it does ",e.jsx(t.strong,{children:"not"}),` react to viewport
changes by itself. To be notified when the match changes over time, combine
it with `,e.jsx(t.code,{children:"subscribeToMediaQuery"})," (see that doc) or use the ",e.jsx(t.code,{children:"useMediaQuery"})," hook."]}),`
`]}),`
`,e.jsx(t.h2,{id:"example-of-use",children:"Example of use"}),`
`,e.jsx(f,{code:`
import { checkMediaQuery } from '@dynamic-framework/ui-react';

const matches = checkMediaQuery('(min-width: 768px)');
`,language:"tsx",dark:!0}),`
`,e.jsx(t.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsx(t.p,{children:`Resize the box below (it's an isolated viewport) and click "Check now" to read
the match at that exact moment — notice it won't update on its own while you drag.`}),`
`,e.jsx(w,{children:e.jsx(g,{})})]})}function T(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{T as default};
