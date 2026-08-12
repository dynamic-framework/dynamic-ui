import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as x}from"./index-DPR1f7NX.js";import{M as j,c as b,U as g}from"./blocks-BvZSuxJt.js";import{r as i}from"./iframe-CHeqVsUI.js";import{D as d}from"./DCard-CwiAt_Wy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";import"./index-9xGy8ok_.js";const u="(min-width: 768px)";function y(){const s=i.useRef(null),t=i.useRef(null),[f,h]=i.useState(0),[p,l]=i.useState(!1);return i.useEffect(()=>{const r=s.current;if(!r)return;h(r.getBoundingClientRect().width);const n=new ResizeObserver(([c])=>{h(c.contentRect.width)});return n.observe(r),()=>n.disconnect()},[]),i.useEffect(()=>{const r=t.current;if(!r)return;let n;const c=o=>l(o.matches),a=()=>{const o=r.contentWindow;!o||n||(n=o.matchMedia(u),l(n.matches),n.addEventListener("change",c))};return a(),r.addEventListener("load",a),()=>{r.removeEventListener("load",a),n==null||n.removeEventListener("change",c)}},[]),e.jsxs(d,{children:[e.jsx(d.Header,{children:u}),e.jsxs(d.Body,{children:[e.jsx("p",{className:"mb-2",children:'Drag the right edge of the box below (an isolated viewport) to resize it and see "Matches" update automatically, without clicking anything.'}),e.jsxs("div",{ref:s,style:{position:"relative",resize:"horizontal",overflow:"hidden",border:"1px solid var(--bs-border-color)",width:900,maxWidth:"100%",minWidth:320,height:48},children:[e.jsx("iframe",{ref:t,title:"subscribeToMediaQuery resizable preview",style:{width:"100%",height:"100%",border:"none"}}),e.jsx("span",{className:"badge text-bg-dark",style:{position:"absolute",top:4,left:4},children:`Width: ${Math.round(f)}px`})]}),e.jsx("pre",{className:"mt-3 mb-0",children:`Matches: ${p}`})]})]})}function M(){return e.jsx(y,{})}function m(s){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...x(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Design System/Utils/mediaQuery/subscribeToMediaQuery"}),`
`,e.jsx(t.h1,{id:"subscribetomediaquery",children:"subscribeToMediaQuery"}),`
`,e.jsx(t.p,{children:"Subscribes to changes of a media query, invoking a callback whenever its match state changes."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"query"})," (",e.jsx(t.code,{children:"string"}),"): A valid CSS media query, e.g. ",e.jsx(t.code,{children:"'(min-width: 768px)'"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"callback"})," (",e.jsx(t.code,{children:"() => void"}),"): Invoked every time the media query's match state changes."]}),`
`]}),`
`,e.jsx(t.h2,{id:"returns",children:"Returns"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["(",e.jsx(t.code,{children:"() => void"}),"): An unsubscribe function. Call it (e.g. in a ",e.jsx(t.code,{children:"useEffect"})," cleanup) to stop listening."]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["This is the reactive counterpart of ",e.jsx(t.code,{children:"checkMediaQuery"}),": use ",e.jsx(t.code,{children:"checkMediaQuery"}),` to
read the current value and `,e.jsx(t.code,{children:"subscribeToMediaQuery"}),` to be notified of further
changes. This is exactly how the `,e.jsx(t.code,{children:"useMediaQuery"})," hook is built internally."]}),`
`]}),`
`,e.jsx(t.h2,{id:"example-of-use",children:"Example of use"}),`
`,e.jsx(b,{code:`
import { subscribeToMediaQuery, checkMediaQuery } from '@dynamic-framework/ui-react';
import { useEffect, useState } from 'react';

const QUERY = '(min-width: 768px)';

function ExampleOfUse() {
const [matches, setMatches] = useState(() => checkMediaQuery(QUERY));

useEffect(
  () => subscribeToMediaQuery(QUERY, () => setMatches(checkMediaQuery(QUERY))),
  [],
);

return <p>{\`Matches: \${matches}\`}</p>;
}
`,language:"tsx",dark:!0}),`
`,e.jsx(t.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsx(t.p,{children:`Drag the right edge of the box below to resize it and watch
"Matches" update automatically, without any manual action.`}),`
`,e.jsx(g,{children:e.jsx(M,{})})]})}function C(s={}){const{wrapper:t}={...x(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(m,{...s})}):m(s)}export{C as default};
