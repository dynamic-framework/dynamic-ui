import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-cCxhBjMT.js";import{M as i,U as d,a as l,C as c,b as h,S as m}from"./blocks-ByxH1zLg.js";import{D as p,a as s}from"./DModal.stories-zEyGjafs.js";import{P as r}from"./config-C3iYXcFk.js";import{D as x}from"./DAlert-BDhZhd6Q.js";import"./iframe-B_y6UB7Z.js";import"./index-uACc-hGT.js";import"./index-Bmp1N_eR.js";import"./DButton-Bzy13lI_.js";import"./index-DjkKVd-P.js";import"./DIcon-CvCEcTnV.js";import"./DContext-poyny3cD.js";import"./DModal-CN3HDY2u.js";import"./constants-BoPmzNgw.js";function t(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...a(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:p}),`
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
`,o.jsx(h,{of:s}),`
`,o.jsx(m,{})]})}function X(n={}){const{wrapper:e}={...a(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(t,{...n})}):t(n)}export{X as default};
