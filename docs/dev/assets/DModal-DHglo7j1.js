import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-Dam4MUc1.js";import{M as i,U as d,a as l,C as c,b as m,S as h}from"./blocks-BPgnBrbd.js";import{D as p,a as s}from"./DModal.stories-C2Z8kDUu.js";import{P as n}from"./config-C3iYXcFk.js";import{D as x}from"./DAlert-DvYS7E6l.js";import"./iframe-BoI9rBkg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-4S13lkJQ.js";import"./index-Cp8JIpHk.js";import"./DButton-Ca5H5awy.js";import"./index-Coi0ap-5.js";import"./DIcon-B9QDzN-N.js";import"./useMediaBreakpointUp-CQGEhpW2.js";import"./DContext-Bk_irrJc.js";import"./DModal-DZLxNMN3.js";import"./constants-CyI_OqvZ.js";function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...a(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:p}),`
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
| --${n}modal-header-gap         | .modal | css length unit | Space between header items   |
| --${n}modal-footer-padding     | .modal | css length unit | Footer padding               |
| --${n}modal-separator-margin-x | .modal | css length unit | Separator horizontal padding |
| --${n}modal-separator-height   | .modal | css length unit | Separator height (size)      |
| --${n}modal-separator-bg       | .modal | css color unit  | Separator background (color) |
`}),`
`,o.jsx(c,{of:s}),`
`,o.jsx(m,{of:s}),`
`,o.jsx(h,{})]})}function T(r={}){const{wrapper:e}={...a(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(t,{...r})}):t(r)}export{T as default};
