import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-DPR1f7NX.js";import{M as u,c as h,U as x}from"./blocks-BvZSuxJt.js";import{r as m}from"./iframe-CHeqVsUI.js";import{D as t}from"./DCard-CwiAt_Wy.js";import{D as o}from"./DButton-BGTbUgzt.js";import{g as j}from"./getQueryString-N4ZM8Vdr.js";import{c as i}from"./changeQueryString-C073BrkX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";import"./index-9xGy8ok_.js";import"./DIcon-C9QpqnTB.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DWQi1yBD.js";import"./DContext-I2P6eEmu.js";const s=()=>j("demo",{default:"no value yet"});function p(){const[n,r]=m.useState(s),c=()=>{i({demo:"hello-world"},{pushState:!0}),r(s())},a=()=>{i({demo:null},{pushState:!0}),r(s())};return e.jsxs(t,{children:[e.jsx(t.Header,{children:"getQueryString('demo')"}),e.jsx(t.Body,{children:e.jsx("pre",{children:n})}),e.jsxs(t.Footer,{className:"d-flex justify-content-end gap-3",children:[e.jsx(o,{size:"sm",onClick:c,text:"Set ?demo=hello-world"}),e.jsx(o,{size:"sm",onClick:a,text:"Clear"})]})]})}function g(){return e.jsx(p,{})}function d(n){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Design System/Utils/queryString/getQueryString"}),`
`,e.jsx(r.h1,{id:"getquerystring",children:"getQueryString"}),`
`,e.jsx(r.p,{children:"Reads a value from the current URL query string."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"value"})," (",e.jsx(r.code,{children:"string"}),"): The name of the query string parameter to read."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"config"})," (optional):",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"default"})," (",e.jsx(r.code,{children:"string"}),"): Value returned when the parameter is not present."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"useSearch"})," (",e.jsx(r.code,{children:"boolean"}),", default ",e.jsx(r.code,{children:"true"}),"): Whether to read from ",e.jsx(r.code,{children:"window.location.search"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["ℹ️ ",e.jsx(r.strong,{children:"Note:"})," ",e.jsx(r.code,{children:"useSearch"})," defaults to ",e.jsx(r.code,{children:"true"})," even when ",e.jsx(r.code,{children:"config"})," is only partially provided (e.g. ",e.jsx(r.code,{children:"{ default: 'x' }"})," without ",e.jsx(r.code,{children:"useSearch"}),"), so the current query string is read by default unless you explicitly pass ",e.jsx(r.code,{children:"useSearch: false"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"returns",children:"Returns"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["(",e.jsx(r.code,{children:"string | undefined"}),"): The parameter value, the provided default, or ",e.jsx(r.code,{children:"undefined"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"example-of-use",children:"Example of use"}),`
`,e.jsx(h,{code:`
import { getQueryString } from '@dynamic-framework/ui-react';

const demo = getQueryString('demo', { default: 'no value yet' });
`,language:"tsx",dark:!0}),`
`,e.jsx(r.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsxs(r.p,{children:["Use the buttons below to update the ",e.jsx(r.code,{children:"demo"})," query string parameter (via ",e.jsx(r.code,{children:"changeQueryString"}),") and see how ",e.jsx(r.code,{children:"getQueryString"})," reads it back."]}),`
`,e.jsx(x,{children:e.jsx(g,{})})]})}function z(n={}){const{wrapper:r}={...l(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(d,{...n})}):d(n)}export{z as default};
