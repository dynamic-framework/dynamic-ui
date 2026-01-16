import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-9C1O43fV.js";import{M as l,U as s,c as d}from"./blocks-Dm7j-PxL.js";import{D as n}from"./DBox-B6VQGYTY.js";import{D as a}from"./DCard-Co_bQwx3.js";import"./iframe-DyLtBo21.js";import"./preload-helper-Dp1pzeXC.js";import"./index-6SRUYXsl.js";import"./index-4G4rdKQM.js";import"./index-DgkJcE1x.js";function h(){return e.jsxs("div",{className:"d-flex flex-wrap gap-3",children:[e.jsxs(n,{className:"p-4 rounded border shadow-none hover:shadow-sm",style:{width:220},children:[e.jsx("strong",{children:"hover:shadow-sm"}),e.jsx("p",{className:"mb-0 mt-2 text-body-secondary",children:"Subtle shadow on hover"})]}),e.jsxs(n,{className:"p-4 rounded border shadow-none hover:shadow",style:{width:220},children:[e.jsx("strong",{children:"hover:shadow"}),e.jsx("p",{className:"mb-0 mt-2 text-body-secondary",children:"Default shadow on hover"})]}),e.jsxs(n,{className:"p-4 rounded border shadow-none hover:shadow-lg",style:{width:220},children:[e.jsx("strong",{children:"hover:shadow-lg"}),e.jsx("p",{className:"mb-0 mt-2 text-body-secondary",children:"Large shadow on hover"})]}),e.jsxs(n,{className:"p-4 rounded border shadow-sm hover:shadow-none",style:{width:220},children:[e.jsx("strong",{children:"hover:shadow-none"}),e.jsx("p",{className:"mb-0 mt-2 text-body-secondary",children:"Remove shadow on hover"})]})]})}function i(){return e.jsxs(a,{className:"hover:bg-secondary-100 border",style:{width:360},children:[e.jsx(a.Header,{children:e.jsx("h5",{className:"card-title mb-0",children:"Background on hover"})}),e.jsx(a.Body,{children:e.jsx("p",{className:"mb-0",children:"Hover to apply a soft secondary background."})})]})}function x(){return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx("a",{href:"#",role:"button",onClick:o=>o.preventDefault(),className:"text-body hover:text-primary",children:"Primary on hover"}),e.jsx("a",{href:"#",role:"button",onClick:o=>o.preventDefault(),className:"text-body hover:text-danger",children:"Danger on hover"}),e.jsx("a",{href:"#",role:"button",onClick:o=>o.preventDefault(),className:"text-body hover:text-success",children:"Success on hover"})]})}function m(){return e.jsx("div",{className:"border rounded p-2 overflow-hidden hover:overflow-auto",style:{width:280,height:120},children:e.jsx("div",{className:"d-flex flex-column gap-2",children:Array.from({length:12}).map((o,r)=>e.jsxs("div",{className:"bg-light rounded px-2 py-1",children:["Item #",r+1]},r))})})}function v(){return e.jsxs("div",{className:"d-flex flex-wrap gap-3",children:[e.jsxs("div",{className:"p-3 rounded border border-2 border-secondary hover:border-primary",style:{width:220},children:[e.jsx("strong",{children:"hover:border-primary"}),e.jsx("p",{className:"mb-0 mt-2 text-body-secondary",children:"Border changes to primary"})]}),e.jsxs("div",{className:"p-3 rounded border border-2 border-dark hover:border-success",style:{width:220},children:[e.jsx("strong",{children:"hover:border-success"}),e.jsx("p",{className:"mb-0 mt-2 text-body-secondary",children:"Border changes to success"})]})]})}function p(){return e.jsx("div",{className:"d-flex flex-wrap gap-3",children:e.jsxs("div",{className:"p-3 rounded border opacity-100 hover:opacity-40",style:{width:220},children:[e.jsx("strong",{children:"hover:opacity-40"}),e.jsx("p",{className:"mb-0 mt-2 text-body-secondary",children:"Reduce opacity on hover"})]})})}function c(o){const r={code:"code",h1:"h1",h2:"h2",p:"p",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Design System/Examples/Hover Utilities"}),`
`,e.jsx(r.h1,{id:"hover-prefixed-utilities",children:"Hover-prefixed utilities"}),`
`,e.jsxs(r.p,{children:["This project extends Bootstrap utilities to support Tailwind-like ",e.jsx(r.code,{children:"hover:"})," variants (e.g., ",e.jsx(r.code,{children:"hover:shadow-sm"}),", ",e.jsx(r.code,{children:"hover:bg-primary-100"}),", ",e.jsx(r.code,{children:"hover:text-danger"}),")."]}),`
`,e.jsx(r.h2,{id:"shadows",children:"Shadows"}),`
`,e.jsx(s,{children:e.jsx(h,{})}),`
`,e.jsx(d,{code:`
<div class="p-4 rounded border shadow-none hover:shadow-sm">...</div>
<div class="p-4 rounded border shadow-none hover:shadow">...</div>
<div class="p-4 rounded border shadow-none hover:shadow-lg">...</div>
<div class="p-4 rounded border shadow-sm hover:shadow-none">...</div>
`,language:"html"}),`
`,e.jsx(r.h2,{id:"backgrounds",children:"Backgrounds"}),`
`,e.jsx(s,{children:e.jsx(i,{})}),`
`,e.jsx(d,{code:`
<div class="card hover:bg-secondary-100">...</div>
`,language:"html"}),`
`,e.jsx(r.h2,{id:"text-colors",children:"Text colors"}),`
`,e.jsx(s,{children:e.jsx(x,{})}),`
`,e.jsx(d,{code:`
<a class="text-body hover:text-primary">Primary on hover</a>
<a class="text-body hover:text-danger">Danger on hover</a>
<a class="text-body hover:text-success">Success on hover</a>
`,language:"html"}),`
`,e.jsx(r.h2,{id:"overflow",children:"Overflow"}),`
`,e.jsx(s,{children:e.jsx(m,{})}),`
`,e.jsx(d,{code:`
<div class="border rounded p-2 overflow-hidden hover:overflow-auto">...</div>
`,language:"html"}),`
`,e.jsx(r.h2,{id:"border-colors",children:"Border colors"}),`
`,e.jsx(s,{children:e.jsx(v,{})}),`
`,e.jsx(d,{code:`
<div class="p-3 rounded border border-2 border-secondary hover:border-primary">...</div>
<div class="p-3 rounded border border-2 border-dark hover:border-success">...</div>
`,language:"html"}),`
`,e.jsx(r.h2,{id:"opacity",children:"Opacity"}),`
`,e.jsx(s,{children:e.jsx(p,{})}),`
`,e.jsx(d,{code:`
<div class="p-3 rounded border opacity-100 hover:opacity-40">...</div>
`,language:"html"})]})}function B(o={}){const{wrapper:r}={...t(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(c,{...o})}):c(o)}export{B as default};
