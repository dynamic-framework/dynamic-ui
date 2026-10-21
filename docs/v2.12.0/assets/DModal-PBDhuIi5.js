import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-vKgA_MqO.js";import{M as i,U as d,a as l,C as c,b as m,S as p}from"./blocks-BmuBN6hf.js";import{D as h,a as s}from"./DModal.stories-9sPtZczO.js";import{P as n}from"./config-7dXXkQRG.js";import{D as x}from"./DAlert-DOXZEh_Y.js";import"./iframe-QK21szlK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAewX9IB.js";import"./index-BohSAi57.js";import"./DButton-D4ckoxfm.js";import"./index-BZR_iX2l.js";import"./DIcon-DywNqvVg.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-QILeHt2b.js";import"./DContext-DZ3MykpO.js";import"./DModal-5O9jLhxL.js";import"./DPortalStack-DHlNZVL2.js";import"./constants-Cykb4qS-.js";import"./DSelect-DolsZIVy.js";import"./hoist-non-react-statics.cjs-C-Qo8PK8.js";import"./floating-ui.dom-DdXqV6k1.js";import"./hasLabelContent-_ZvZx8k6.js";import"./isTextLabel-ewSINUcE.js";function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...a(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:h}),`
`,o.jsx(e.h1,{id:"modal",children:"Modal"}),`
`,o.jsxs(e.p,{children:["This section provides guidance specifically for using ",o.jsx(e.code,{children:"DModal"})," in ",o.jsx(e.strong,{children:"inline"})," scenarios."]}),`
`,o.jsx(d,{children:o.jsx(x,{color:"warning",children:o.jsx("span",{children:o.jsxs(e.p,{children:[`To achieve the behavior of a modal it is necessary to use the
`,o.jsx(e.strong,{children:o.jsx(e.code,{children:"DContextProvider"})})," and the ",o.jsx(e.strong,{children:o.jsx(e.code,{children:"useDPortalContext"})}),` hook. For detailed
guidance on the `,o.jsx(e.strong,{children:"correct usage"})," of modals, please refer to the ",o.jsx(e.a,{href:"/docs/design-system-components-modal-usage--docs",children:`Modal
Usage`}),` page in our
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
`,o.jsx(p,{})]})}function A(r={}){const{wrapper:e}={...a(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(t,{...r})}):t(r)}export{A as default};
