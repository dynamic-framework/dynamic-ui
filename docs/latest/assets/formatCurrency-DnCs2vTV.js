import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DPR1f7NX.js";import{M as c,c as t,U as i}from"./blocks-BvZSuxJt.js";import{f as a}from"./formatCurrency-DPyfJ66t.js";import"./iframe-CHeqVsUI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";import"./currency.es-9OAR_aOO.js";function m(){const n=[100,234.12,-233].map(e=>a(e,{symbol:"$",precision:2,separator:",",decimal:"."}));return r.jsx("div",{className:"p-3",children:n.map(e=>r.jsx("pre",{children:e},e))})}function s(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(c,{title:"Design System/Utils/formatCurrency"}),`
`,r.jsx(e.h1,{id:"formatcurrency",children:"formatCurrency"}),`
`,r.jsxs(e.p,{children:["Formats a number as a currency string using ",r.jsx(e.code,{children:"currency.js"}),"."]}),`
`,r.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"amount"})," (",r.jsx(e.code,{children:"number"}),"): The numeric value to format."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"options"})," (",r.jsx(e.code,{children:"Options"})," from ",r.jsx(e.code,{children:"currency.js"}),"): Formatting options such as ",r.jsx(e.code,{children:"symbol"}),", ",r.jsx(e.code,{children:"precision"}),", ",r.jsx(e.code,{children:"separator"})," and ",r.jsx(e.code,{children:"decimal"}),"."]}),`
`]}),`
`,r.jsx(e.h2,{id:"returns",children:"Returns"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["(",r.jsx(e.code,{children:"string"}),"): The formatted currency value."]}),`
`]}),`
`,r.jsx(e.h2,{id:"example-of-use",children:"Example of use"}),`
`,r.jsx(t,{code:`
import { formatCurrency } from '@dynamic-framework/ui-react';

const values = [100, 234.12, -233].map((amount) => formatCurrency(amount, {
symbol: '$',
precision: 2,
separator: ',',
decimal: '.',
}));
`,language:"tsx",dark:!0}),`
`,r.jsx(e.h2,{id:"example-render",children:"Example Render"}),`
`,r.jsx(i,{children:r.jsx(m,{})})]})}function g(n={}){const{wrapper:e}={...o(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(s,{...n})}):s(n)}export{g as default};
