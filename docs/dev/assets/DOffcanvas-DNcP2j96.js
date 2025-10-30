import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CHSOfr5v.js";import{M as i,U as c,a as f,C as d,b as h,S as l}from"./blocks-CJUw5px9.js";import{D as p,a as o}from"./DOffcanvas.stories-BJ4VwnJF.js";import{P as t}from"./config-BV4l-vIF.js";import{D as m}from"./DAlert-CnX9iqI4.js";import"./iframe-XnRhdyHW.js";import"./index-CQ6hCEsd.js";import"./index-CucmxpGD.js";import"./DOffcanvas-DEuoWzLH.js";import"./index-D0sKC-UO.js";import"./DIcon-BtjKyMWG.js";import"./DContext-Dm_WebLV.js";import"./DButton-DLoc9Exd.js";import"./constants-Bqs03lsf.js";function a(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:p}),`
`,e.jsx(n.h1,{id:"offcanvas",children:"Offcanvas"}),`
`,e.jsxs(n.p,{children:["This section provides guidance specifically for using ",e.jsx(n.code,{children:"DOffcanvas"})," in ",e.jsx(n.strong,{children:"inline"})," scenarios."]}),`
`,e.jsx(c,{children:e.jsx(m,{theme:"warning",children:e.jsxs("span",{children:["To achieve the behavior of a offcanvas it is necessary to use the ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"DContextProvider"})})," and the ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"useDPortalContext"})}),` hook.
For detailed guidance on the `,e.jsx(n.strong,{children:"correct usage"})," of offcanvas, please refer to the ",e.jsx(n.a,{href:"/docs/design-system-patterns-offcanvas--docs",children:"Offcanvas pattern section"})," in our documentation."]})})}),`
`,e.jsx(n.h2,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(f,{children:`
| Variable                           | Class      | Type            | Description                  |
|------------------------------------|------------|-----------------|------------------------------|
| --${t}offcanvas-header-gap | .offcanvas | css length unit | Space between header items   |
| --${t}offcanvas-footer-gap | .offcanvas | css length unit | Space between footer actions |
`}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(l,{})]})}function F(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{F as default};
