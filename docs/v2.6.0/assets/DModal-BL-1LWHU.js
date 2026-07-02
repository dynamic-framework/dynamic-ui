import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-CYNyJDzm.js";import{M as i,U as d,a as l,C as c,b as m,S as h}from"./blocks-B0SbRRHM.js";import{D as p,a as s}from"./DModal.stories-CvN0QBAJ.js";import{P as n}from"./config-C3iYXcFk.js";import{D as x}from"./DAlert-C9UBHafX.js";import"./iframe-DkjceUUU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-p6Xuepxi.js";import"./index-DxZ9-uFP.js";import"./DButton-BUrFSCCL.js";import"./index-CtlKHQhD.js";import"./DIcon-CBkIH7ym.js";import"./useMediaBreakpointUp-C9viAbpR.js";import"./DContext-BbaizxMa.js";import"./DModal-SS9JuWXl.js";import"./constants-CkChkWbF.js";import"./DSelect-ZvffLvvQ.js";import"./hoist-non-react-statics.cjs-C-Qo8PK8.js";import"./floating-ui.dom-DdXqV6k1.js";function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...a(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:p}),`
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
`,o.jsx(h,{})]})}function z(r={}){const{wrapper:e}={...a(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(t,{...r})}):t(r)}export{z as default};
