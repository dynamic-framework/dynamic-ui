import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-Ccd_3YU0.js";import{M as i,U as d,a as l,C as c,b as m,S as h}from"./blocks-D_Rgh6MF.js";import{D as p,a as s}from"./DModal.stories-DHJs2n3k.js";import{P as r}from"./config-C3iYXcFk.js";import{D as x}from"./DAlert-B_SOtEpO.js";import"./iframe-DLbf3qKv.js";import"./index-BpFZy5MA.js";import"./index-wK-VFbMZ.js";import"./DButton-CluHaZiK.js";import"./index-DsY-b2ur.js";import"./DIcon-Dz-46F40.js";import"./useMediaBreakpointUp-BOU17c78.js";import"./DContext-Dxx5fHg0.js";import"./DModal-CPKde5Bg.js";import"./constants-CyI_OqvZ.js";function t(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...a(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:p}),`
`,o.jsx(e.h1,{id:"modal",children:"Modal"}),`
`,o.jsxs(e.p,{children:["This section provides guidance specifically for using ",o.jsx(e.code,{children:"DModal"})," in ",o.jsx(e.strong,{children:"inline"})," scenarios."]}),`
`,o.jsx(d,{children:o.jsx(x,{color:"warning",children:o.jsx("span",{children:o.jsxs(e.p,{children:[`To achieve the behavior of a modal it is necessary to use the
`,o.jsx(e.strong,{children:o.jsx(e.code,{children:"DContextProvider"})})," and the ",o.jsx(e.strong,{children:o.jsx(e.code,{children:"useDPortalContext"})}),` hook. For detailed
guidance on the `,o.jsx(e.strong,{children:"correct usage"})," of modals, please refer to the ",o.jsx(e.a,{href:"/docs/design-system-patterns-modal--docs",children:`Modal
pattern section`}),` in our
documentation.`]})})})}),`
`,o.jsx(e.h2,{id:"css-variables",children:"CSS Variables"}),`
`,o.jsx(l,{children:`
| Variable                               | Class  | Type            | Description                  |
|----------------------------------------|--------|-----------------|------------------------------|
| --${r}modal-header-gap         | .modal | css length unit | Space between header items   |
| --${r}modal-footer-padding     | .modal | css length unit | Footer padding               |
| --${r}modal-separator-margin-x | .modal | css length unit | Separator horizontal padding |
| --${r}modal-separator-height   | .modal | css length unit | Separator height (size)      |
| --${r}modal-separator-bg       | .modal | css color unit  | Separator background (color) |
`}),`
`,o.jsx(c,{of:s}),`
`,o.jsx(m,{of:s}),`
`,o.jsx(h,{})]})}function k(n={}){const{wrapper:e}={...a(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(t,{...n})}):t(n)}export{k as default};
