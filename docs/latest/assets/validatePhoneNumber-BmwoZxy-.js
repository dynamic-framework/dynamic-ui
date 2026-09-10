import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DOE-a7Qz.js";import{M as a,k as d,U as l}from"./blocks-CRrI9CLz.js";import{r as m}from"./iframe-B_Y9M-l-.js";import{v as h}from"./validatePhoneNumber-B6-WNsD6.js";import{D as o}from"./DCard-MlWwPbFj.js";import{F as c}from"./DInput-GzlL9zxR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cnk-UfrQ.js";import"./index-BwYFOMBQ.js";import"./index-72Ch5-Y2.js";import"./DIcon-Db41hg1i.js";import"./index-BPJnJB5S.js";import"./config-7dXXkQRG.js";import"./useMediaBreakpointUp-C7_Y8Dh0.js";import"./DContext-CWByZeTV.js";import"./useProvidedRefOrCreate-DDwsEK4g.js";function u(){const[r,n]=m.useState("+1 650-253-0000"),t=h(r);return e.jsxs(o,{children:[e.jsx(o.Header,{children:"validatePhoneNumber"}),e.jsxs(o.Body,{children:[e.jsx(c,{label:"Phone number",value:r,onChange:n,invalid:!t}),e.jsx("p",{className:`mt-3 mb-0 ${t?"text-success":"text-danger"}`,children:t?"Valid phone number":"Invalid phone number"})]})]})}function x(){return e.jsx(u,{})}function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Design System/Utils/validatePhoneNumber"}),`
`,e.jsx(n.h1,{id:"validatephonenumber",children:"validatePhoneNumber"}),`
`,e.jsxs(n.p,{children:["Validates whether a string is a valid phone number, using ",e.jsx(n.code,{children:"google-libphonenumber"}),"."]}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"phone"})," (",e.jsx(n.code,{children:"string"}),"): The phone number to validate. It should include the country code (e.g. ",e.jsx(n.code,{children:"+1 650-253-0000"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["(",e.jsx(n.code,{children:"boolean"}),"): ",e.jsx(n.code,{children:"true"})," when the number is valid, ",e.jsx(n.code,{children:"false"})," otherwise (including when the number cannot be parsed)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-of-use",children:"Example of use"}),`
`,e.jsx(d,{code:`
import { validatePhoneNumber } from '@dynamic-framework/ui-react';

const isValid = validatePhoneNumber('+1 650-253-0000');
`,language:"tsx",dark:!0}),`
`,e.jsx(n.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsx(l,{children:e.jsx(x,{})})]})}function k(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{k as default};
