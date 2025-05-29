import{j as t}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as a}from"./index-DlpNa54Y.js";import{ae as u,al as c,ak as d}from"./index-Ca4iaMPk.js";import{r as p}from"./index-BwDkhjyp.js";import{u as m,D as h}from"./DContext-K5yUkfPZ.js";import"./iframe-Co6eceYb.js";import"../sb-preview/runtime.js";import"./index-Jr15HXM4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cu4lwwaE.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-C8cAHwr1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DrFu-skq.js";import"./config-BV4l-vIF.js";function x(e,n){const i=window.matchMedia(e);return i.addEventListener("change",n),()=>{i.removeEventListener("change",n)}}function l(e){return window.matchMedia(e).matches}function f(e,n=!1){const i=r=>()=>{};return p.useSyncExternalStore(n?r=>x(e,r):i,()=>e?l(e):!0,()=>!1)}function o(e,n=!1){const{breakpoints:i}=m(),r=p.useMemo(()=>`(min-width: ${i[e]})`,[e,i]);return f(r,n)}function k(e=!1){return o("xs",e)}function M(e=!1){return o("sm",e)}function j(e=!1){return o("lg",e)}function U(){const e=k(!0),n=M(!0),i=j(!0);return t.jsxs(t.Fragment,{children:[e&&t.jsx("p",{children:"min-width to XS breakpoint"}),n&&t.jsx("p",{children:"min-width to SM breakpoint"}),i&&t.jsx("p",{children:"min-width to LG breakpoint"})]})}function g(){return t.jsx(h,{children:t.jsx(U,{})})}function s(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Design System/Utils/Hooks/useMediaBreakpointUp"}),`
`,t.jsx(n.h1,{id:"usemediabreakpointup",children:"useMediaBreakpointUp"}),`
`,t.jsx(n.p,{children:"Responsive utility"}),`
`,t.jsxs(n.h2,{id:"setup-apptsx",children:["Setup ",t.jsx(n.code,{children:"App.tsx"})]}),`
`,t.jsx(n.p,{children:"It is necessary to use the hook inside a DContextProvider, because the hook takes the breakpoints configuration from that context"}),`
`,t.jsx(c,{code:`
import {
  DContextProvider,
  useMediaBreakpointUpXs,
  useMediaBreakpointUpSm,
  useMediaBreakpointUpLg,
} from '@dynamic-framework/ui-react';

export function ExampleOfUse() {
  const inXs = useMediaBreakpointUpXs(true);
  const inSm = useMediaBreakpointUpSm(true);
  const inLg = useMediaBreakpointUpLg(true);

  return (
    <>
      {inXs && <p>min-width to XS breakpoint</p>}
      {inSm && <p>min-width to SM breakpoint</p>}
      {inLg && <p>min-width to LG breakpoint</p>}
    </>
  );
}
`,language:"tsx",dark:!0}),`
`,t.jsx(n.h2,{id:"example-render",children:"Example Render"}),`
`,t.jsx(d,{children:t.jsx(g,{})})]})}function F(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(s,{...e})}):s(e)}export{F as default};
