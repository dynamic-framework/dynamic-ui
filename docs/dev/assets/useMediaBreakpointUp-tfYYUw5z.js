import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-CGx6_Sxl.js";import{M as s,c as p,U as a}from"./blocks-DVg1nWWO.js";import{u as d,a as m,b as u}from"./useMediaBreakpointUp-AeZcRxVy.js";import{D as c}from"./DContext-sS8uqpDQ.js";import"./iframe-eIrUEdNP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-GUIKHBd8.js";import"./index-DwT1xn9s.js";import"./config-C3iYXcFk.js";function x(){const n=d(!0),t=m(!0),r=u(!0);return e.jsxs(e.Fragment,{children:[n&&e.jsx("p",{children:"min-width to XS breakpoint"}),t&&e.jsx("p",{children:"min-width to SM breakpoint"}),r&&e.jsx("p",{children:"min-width to LG breakpoint"})]})}function h(){return e.jsx(c,{children:e.jsx(x,{})})}function i(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Design System/Utils/Hooks/useMediaBreakpointUp"}),`
`,e.jsx(t.h1,{id:"usemediabreakpointup",children:"useMediaBreakpointUp"}),`
`,e.jsx(t.p,{children:"Responsive utility"}),`
`,e.jsxs(t.h2,{id:"setup-apptsx",children:["Setup ",e.jsx(t.code,{children:"App.tsx"})]}),`
`,e.jsx(t.p,{children:"It is necessary to use the hook inside a DContextProvider, because the hook takes the breakpoints configuration from that context"}),`
`,e.jsx(p,{code:`
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
`,e.jsx(t.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsx(a,{children:e.jsx(h,{})})]})}function b(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{b as default};
