import{j as o}from"./jsx-runtime-DztICxWZ.js";import{useMDXComponents as a}from"./index-BghErDIA.js";import{M as i,U as d,a as l,C as c,b as m,S as h}from"./index-BzeND3iE.js";import{D as p,a as s}from"./DModal.stories--D_GVXAx.js";import{P as t}from"./config-BV4l-vIF.js";import{D as x}from"./DAlert-Dr2keVtT.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DGPAxI1V.js";import"./index-COvqAhMQ.js";import"./index-C5fUYp4E.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./DModal-CfyCDZ0n.js";import"./index-PkosZWDx.js";import"./DIcon-CRqHu6fZ.js";import"./DContext-D_Evvl3v.js";import"./DButton-DLpp3fLa.js";import"./constants-jnS-YoC_.js";function n(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...a(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:p}),`
`,o.jsx(e.h1,{id:"modal",children:"Modal"}),`
`,o.jsxs(e.p,{children:["This section provides guidance specifically for using ",o.jsx(e.code,{children:"DModal"})," in ",o.jsx(e.strong,{children:"inline"})," scenarios."]}),`
`,o.jsx(d,{children:o.jsx(x,{theme:"warning",children:o.jsxs("span",{children:["To achieve the behavior of a modal it is necessary to use the ",o.jsx(e.strong,{children:o.jsx(e.code,{children:"DContextProvider"})})," and the ",o.jsx(e.strong,{children:o.jsx(e.code,{children:"useDPortalContext"})}),` hook.
For detailed guidance on the `,o.jsx(e.strong,{children:"correct usage"})," of modals, please refer to the ",o.jsx(e.a,{href:"/docs/design-system-patterns-modal--docs",children:"Modal pattern section"})," in our documentation."]})})}),`
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
`,o.jsx(h,{})]})}function z(r={}){const{wrapper:e}={...a(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}export{z as default};
