import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DOE-a7Qz.js";import{M as a,k as l,U as d}from"./blocks-CRrI9CLz.js";import{r as m}from"./iframe-B_Y9M-l-.js";import{D as t}from"./DCard-MlWwPbFj.js";import{D as c}from"./DButton-CzgpYs-b.js";import{g as x}from"./DContext-CWByZeTV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cnk-UfrQ.js";import"./index-BwYFOMBQ.js";import"./index-72Ch5-Y2.js";import"./DIcon-Db41hg1i.js";import"./index-BPJnJB5S.js";import"./config-7dXXkQRG.js";import"./useMediaBreakpointUp-C7_Y8Dh0.js";function h(){const[s,r]=m.useState(""),o=()=>{r(x("--bs-primary"))};return e.jsxs(t,{children:[e.jsx(t.Header,{children:"getCssVariable('--bs-primary')"}),e.jsxs(t.Body,{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{style:{width:"2rem",height:"2rem",backgroundColor:s||"transparent",border:"1px solid var(--bs-border-color)"}}),e.jsx("pre",{className:"mb-0",children:s||"(not read yet)"})]}),e.jsx(t.Footer,{className:"d-flex justify-content-end",children:e.jsx(c,{size:"sm",onClick:o,text:"Read --bs-primary"})})]})}function p(){return e.jsx(h,{})}function n(s){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Design System/Utils/getCssVariable"}),`
`,e.jsx(r.h1,{id:"getcssvariable",children:"getCssVariable"}),`
`,e.jsxs(r.p,{children:["Reads the computed value of a CSS custom property defined on the document root (",e.jsx(r.code,{children:":root"}),")."]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"variable"})," (",e.jsx(r.code,{children:"string"}),"): The name of the CSS variable, including the leading ",e.jsx(r.code,{children:"--"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"returns",children:"Returns"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["(",e.jsx(r.code,{children:"string"}),"): The trimmed computed value of the variable, or an empty string if it is not defined."]}),`
`]}),`
`,e.jsx(r.h2,{id:"example-of-use",children:"Example of use"}),`
`,e.jsx(l,{code:`
import { getCssVariable } from '@dynamic-framework/ui-react';

const primaryColor = getCssVariable('--bs-primary');
`,language:"tsx",dark:!0}),`
`,e.jsx(r.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsx(d,{children:e.jsx(p,{})})]})}function U(s={}){const{wrapper:r}={...i(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{U as default};
