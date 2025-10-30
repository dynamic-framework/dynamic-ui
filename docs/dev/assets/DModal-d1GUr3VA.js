import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-CHSOfr5v.js";import{M as i,U as d,a as l,C as c,b as m,S as h}from"./blocks-CJUw5px9.js";import{D as p,a as n}from"./DModal.stories-BnK66oa5.js";import{P as s}from"./config-BV4l-vIF.js";import{D as x}from"./DAlert-CnX9iqI4.js";import"./iframe-XnRhdyHW.js";import"./index-CQ6hCEsd.js";import"./index-CucmxpGD.js";import"./DModal-B2u1wY5u.js";import"./index-D0sKC-UO.js";import"./DIcon-BtjKyMWG.js";import"./DContext-Dm_WebLV.js";import"./DButton-DLoc9Exd.js";import"./constants-Bqs03lsf.js";function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...a(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:p}),`
`,o.jsx(e.h1,{id:"modal",children:"Modal"}),`
`,o.jsxs(e.p,{children:["This section provides guidance specifically for using ",o.jsx(e.code,{children:"DModal"})," in ",o.jsx(e.strong,{children:"inline"})," scenarios."]}),`
`,o.jsx(d,{children:o.jsx(x,{theme:"warning",children:o.jsxs("span",{children:["To achieve the behavior of a modal it is necessary to use the ",o.jsx(e.strong,{children:o.jsx(e.code,{children:"DContextProvider"})})," and the ",o.jsx(e.strong,{children:o.jsx(e.code,{children:"useDPortalContext"})}),` hook.
For detailed guidance on the `,o.jsx(e.strong,{children:"correct usage"})," of modals, please refer to the ",o.jsx(e.a,{href:"/docs/design-system-patterns-modal--docs",children:"Modal pattern section"})," in our documentation."]})})}),`
`,o.jsx(e.h2,{id:"css-variables",children:"CSS Variables"}),`
`,o.jsx(l,{children:`
| Variable                               | Class  | Type            | Description                  |
|----------------------------------------|--------|-----------------|------------------------------|
| --${s}modal-header-gap         | .modal | css length unit | Space between header items   |
| --${s}modal-footer-padding     | .modal | css length unit | Footer padding               |
| --${s}modal-separator-margin-x | .modal | css length unit | Separator horizontal padding |
| --${s}modal-separator-height   | .modal | css length unit | Separator height (size)      |
| --${s}modal-separator-bg       | .modal | css color unit  | Separator background (color) |
`}),`
`,o.jsx(c,{of:n}),`
`,o.jsx(m,{of:n}),`
`,o.jsx(h,{})]})}function X(r={}){const{wrapper:e}={...a(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(t,{...r})}):t(r)}export{X as default};
