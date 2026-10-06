import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-BVwFvyuh.js";import{M as s,k as a,U as p}from"./blocks-u6YwrM34.js";import{a as d,b as c,c as m}from"./useMediaBreakpointUp-CBOESKxy.js";import{D as u}from"./DContext-BsbKwSe9.js";import"./iframe-BOlGrI6L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";import"./config-7dXXkQRG.js";function h(){const i=d(!0),t=c(!0),r=m(!0);return e.jsxs(e.Fragment,{children:[i&&e.jsx("p",{children:"min-width to XS breakpoint"}),t&&e.jsx("p",{children:"min-width to SM breakpoint"}),r&&e.jsx("p",{children:"min-width to LG breakpoint"})]})}function x(){return e.jsx(u,{children:e.jsx(h,{})})}function n(i){const t={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Design System/Hooks/useMediaBreakpointUp"}),`
`,e.jsx(t.h1,{id:"usemediabreakpointup",children:"useMediaBreakpointUp"}),`
`,e.jsx(t.p,{children:"Responsive utility"}),`
`,e.jsxs(t.h2,{id:"setup-apptsx",children:["Setup ",e.jsx(t.code,{children:"App.tsx"})]}),`
`,e.jsxs(t.p,{children:["The hooks read the breakpoints from the ",e.jsx(t.code,{children:"--bs-breakpoint-*"})," CSS variables, so ",e.jsx(t.code,{children:"dynamic-ui.css"})," has to be loaded before rendering. ",e.jsx(t.code,{children:"DContextProvider"})," is optional: inside it, the hooks use the breakpoints it shares; outside it, they read the same variables directly, once per page. Pass ",e.jsx(t.code,{children:"true"})," to listen to viewport changes."]}),`
`,e.jsx(a,{code:`
import {
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
`,e.jsx(t.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsx(p,{children:e.jsx(x,{})})]})}function X(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{X as default};
