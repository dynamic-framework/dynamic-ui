import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-DPR1f7NX.js";import{M as h,c as u,U as x}from"./blocks-BvZSuxJt.js";import{r as j}from"./iframe-CHeqVsUI.js";import{D as s}from"./DCard-CwiAt_Wy.js";import{D as i}from"./DButton-BGTbUgzt.js";import{c as o}from"./changeQueryString-C073BrkX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";import"./index-9xGy8ok_.js";import"./DIcon-C9QpqnTB.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DWQi1yBD.js";import"./DContext-I2P6eEmu.js";function m(){const[r,n]=j.useState(()=>window.location.search),d=()=>{const t=o({section:"utils",page:2},{pushState:!0});n(`?${t}`)},a=()=>{const t=o({section:null,page:null},{pushState:!0});n(t?`?${t}`:"")};return e.jsxs(s,{children:[e.jsx(s.Header,{children:"window.location.search"}),e.jsx(s.Body,{children:e.jsx("pre",{children:r||"(empty)"})}),e.jsxs(s.Footer,{className:"d-flex justify-content-end gap-3",children:[e.jsx(i,{size:"sm",onClick:d,text:"Set section & page"}),e.jsx(i,{size:"sm",onClick:a,text:"Clear"})]})]})}function p(){return e.jsx(m,{})}function c(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Design System/Utils/queryString/changeQueryString"}),`
`,e.jsx(n.h1,{id:"changequerystring",children:"changeQueryString"}),`
`,e.jsx(n.p,{children:"Adds, updates or removes parameters in the current URL query string."}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"values"})," (",e.jsx(n.code,{children:"Record<string, string | number | null>"}),"): Key/value pairs to set. A falsy value (",e.jsx(n.code,{children:"null"}),", ",e.jsx(n.code,{children:"undefined"}),", ",e.jsx(n.code,{children:"''"}),", or ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"0"})}),") removes the key instead of setting it — this applies even though ",e.jsx(n.code,{children:"0"})," is a valid ",e.jsx(n.code,{children:"number"}),", since the implementation uses a truthiness check. If you need to store a literal ",e.jsx(n.code,{children:"0"}),", pass it as the string ",e.jsx(n.code,{children:"'0'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"config"})," (optional):",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useSearch"})," (",e.jsx(n.code,{children:"boolean"}),", default ",e.jsx(n.code,{children:"true"}),"): Whether to start from the current ",e.jsx(n.code,{children:"window.location.search"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"pushState"})," (",e.jsx(n.code,{children:"boolean"}),", default ",e.jsx(n.code,{children:"false"}),"): Whether to update the browser URL via ",e.jsx(n.code,{children:"window.history.pushState"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["(",e.jsx(n.code,{children:"string"}),"): The resulting query string (without the leading ",e.jsx(n.code,{children:"?"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-of-use",children:"Example of use"}),`
`,e.jsx(u,{code:`
import { changeQueryString } from '@dynamic-framework/ui-react';

const result = changeQueryString(
{ section: 'utils', page: 2 },
{ pushState: true },
);
`,language:"tsx",dark:!0}),`
`,e.jsx(n.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsxs(n.p,{children:["Click the buttons to set or clear query string parameters and see the resulting ",e.jsx(n.code,{children:"window.location.search"}),"."]}),`
`,e.jsx(x,{children:e.jsx(p,{})})]})}function L(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{L as default};
