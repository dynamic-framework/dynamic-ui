import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-CovxqLmm.js";import{M as i,U as d,a as l,C as c,b as m,S as p}from"./blocks-CmmemM8F.js";import{D as h,a as s}from"./DModal.stories-C9UubZXk.js";import{P as t}from"./config-7dXXkQRG.js";import{D as x}from"./DAlert-BwFiTuwR.js";import"./iframe-DJkQ9I2N.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D81MgoPg.js";import"./index-q76Qz2tG.js";import"./DButton-uy59mCpo.js";import"./index-CvDN_T8r.js";import"./DIcon-B72W3hLT.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-NxlBMcAV.js";import"./DContext-BLk6t4z5.js";import"./DModal-fGfaVdx9.js";import"./DPortalStack-BY5IKcLy.js";import"./constants-Cykb4qS-.js";import"./DSelect-vqimSGo4.js";import"./hoist-non-react-statics.cjs-C-Qo8PK8.js";import"./floating-ui.dom-DdXqV6k1.js";import"./hasLabelContent-Dj5N1VNe.js";import"./isTextLabel-ewSINUcE.js";function n(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...a(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:h}),`
`,o.jsx(e.h1,{id:"modal",children:"Modal"}),`
`,o.jsxs(e.p,{children:["This section provides guidance specifically for using ",o.jsx(e.code,{children:"DModal"})," in ",o.jsx(e.strong,{children:"inline"})," scenarios."]}),`
`,o.jsx(d,{children:o.jsx(x,{color:"warning",children:o.jsx("span",{children:o.jsxs(e.p,{children:[`To achieve the behavior of a modal it is necessary to use the
`,o.jsx(e.strong,{children:o.jsx(e.code,{children:"DContextProvider"})})," and the ",o.jsx(e.strong,{children:o.jsx(e.code,{children:"useDPortalContext"})}),` hook. For detailed
guidance on the `,o.jsx(e.strong,{children:"correct usage"})," of modals, please refer to the ",o.jsx(e.a,{href:"/docs/design-system-components-modal-usage--docs",children:`Modal
Usage`}),` page of the
documentation.`]})})})}),`
`,o.jsx(e.h2,{id:"css-variables",children:"CSS Variables"}),`
`,o.jsx(l,{children:`
| Variable                               | Class  | Type            | Description                  |
|----------------------------------------|--------|-----------------|------------------------------|
| --${t}modal-header-gap         | .modal | css length unit | Space between header items   |
| --${t}modal-footer-padding     | .modal | css length unit | Footer padding               |
| --${t}modal-separator-margin-x | .modal | css length unit | Separator horizontal padding |
| --${t}modal-separator-height   | .modal | css length unit | Separator height (size)      |
| --${t}modal-separator-bg       | .modal | css color unit  | Separator background (color) |
`}),`
`,o.jsx(c,{of:s}),`
`,o.jsx(m,{of:s}),`
`,o.jsx(p,{})]})}function A(r={}){const{wrapper:e}={...a(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}export{A as default};
