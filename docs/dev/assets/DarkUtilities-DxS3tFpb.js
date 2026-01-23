import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-ChacyhIo.js";import{M as c,U as o,c as d}from"./blocks-DFxbnBr8.js";import{D as n}from"./DBox-Df6kASFx.js";import{D as a}from"./DCard-yij4k8Zd.js";import"./iframe-uHxPMequ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DboxJWp3.js";import"./index-Drp_xGtg.js";import"./index-4TPiY_w5.js";function l(){return r.jsxs("div",{className:"dark d-flex flex-wrap gap-3",children:[r.jsxs(a,{className:"p-3 border dark:bg-secondary-100",style:{width:320},children:[r.jsx(a.Header,{children:r.jsx("h5",{className:"card-title mb-0",children:"dark:bg-secondary-100"})}),r.jsx(a.Body,{children:r.jsx("p",{className:"mb-0",children:"Applies soft secondary background when dark mode is active."})})]}),r.jsxs(n,{className:"p-3 rounded border dark:bg-primary-100",style:{width:220},children:[r.jsx("strong",{children:"dark:bg-primary-100"}),r.jsx("p",{className:"mb-0 mt-2 text-body-secondary",children:"Primary tint in dark mode"})]})]})}function b(){return r.jsxs("div",{className:"dark d-flex flex-column gap-2",children:[r.jsx("p",{className:"text-body dark:text-primary",children:"Primary text in dark mode"}),r.jsx("p",{className:"text-body dark:text-success",children:"Success text in dark mode"}),r.jsx("p",{className:"text-body dark:text-danger",children:"Danger text in dark mode"})]})}function m(){return r.jsxs("div",{className:"dark d-flex flex-wrap gap-3",children:[r.jsxs("div",{className:"p-3 rounded border border-2 border-secondary dark:border-primary",style:{width:220},children:[r.jsx("strong",{children:"dark:border-primary"}),r.jsx("p",{className:"mb-0 mt-2 text-body-secondary",children:"Border changes when dark"})]}),r.jsxs(n,{className:"p-4 rounded border shadow-none dark:shadow",style:{width:220},children:[r.jsx("strong",{children:"dark:shadow"}),r.jsx("p",{className:"mb-0 mt-2 text-body-secondary",children:"Shadow only in dark mode"})]})]})}function h(){return r.jsxs("div",{className:"d-flex flex-wrap gap-3",children:[r.jsxs(a,{className:"p-3 border dark:bg-secondary-100",style:{width:320},children:[r.jsx(a.Header,{children:r.jsx("h5",{className:"card-title mb-0",children:"dark:bg-secondary-100 (auto)"})}),r.jsx(a.Body,{children:r.jsx("p",{className:"mb-0",children:"Applies in browsers with dark mode enabled (no .dark class)."})})]}),r.jsxs(n,{className:"p-3 rounded border dark:bg-primary-100",style:{width:220},children:[r.jsx("strong",{children:"dark:bg-primary-100 (auto)"}),r.jsx("p",{className:"mb-0 mt-2 text-body-secondary",children:"Primary tint in system dark mode"})]})]})}function t(s){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...i(),...s.components};return r.jsxs(r.Fragment,{children:[r.jsx(c,{title:"Design System/Examples/Dark Utilities"}),`
`,r.jsx(e.h1,{id:"dark-prefixed-utilities",children:"Dark-prefixed utilities"}),`
`,r.jsxs(e.p,{children:["This project extends Bootstrap utilities to support Tailwind-like ",r.jsx(e.code,{children:"dark:"})," variants (e.g., ",r.jsx(e.code,{children:"dark:bg-primary-100"}),", ",r.jsx(e.code,{children:"dark:text-success"}),", ",r.jsx(e.code,{children:"dark:shadow"}),")."]}),`
`,r.jsxs(e.p,{children:["Dark variants are applied automatically when the user's system prefers a dark color scheme (",r.jsx(e.code,{children:"prefers-color-scheme: dark"}),"), and can also be opt-in by adding a ",r.jsx(e.code,{children:"dark"})," class to any ancestor element."]}),`
`,r.jsx(e.h2,{id:"backgrounds",children:"Backgrounds"}),`
`,r.jsx(o,{children:r.jsx(l,{})}),`
`,r.jsx(d,{code:`
<div class="dark">
<div class="card dark:bg-secondary-100">...</div>
</div>
`,language:"html"}),`
`,r.jsx(e.h2,{id:"text-colors",children:"Text colors"}),`
`,r.jsx(o,{children:r.jsx(b,{})}),`
`,r.jsx(d,{code:`
<div class="dark">
<a class="text-body dark:text-primary">Primary in dark</a>
<a class="text-body dark:text-success">Success in dark</a>
<a class="text-body dark:text-danger">Danger in dark</a>
</div>
`,language:"html"}),`
`,r.jsx(e.h2,{id:"borders-and-shadows",children:"Borders and shadows"}),`
`,r.jsx(o,{children:r.jsx(m,{})}),`
`,r.jsx(d,{code:`
<div class="dark">
<div class="p-3 rounded border border-2 border-secondary dark:border-primary">...</div>
<div class="p-4 rounded border shadow-none dark:shadow">...</div>
</div>
`,language:"html"}),`
`,r.jsx(e.h2,{id:"automatic-dark-no-dark-class",children:"Automatic dark (no .dark class)"}),`
`,r.jsx(o,{children:r.jsx(h,{})}),`
`,r.jsx(d,{code:`
<div>
<!-- No .dark ancestor. Will apply automatically if the OS/browser has dark mode enabled -->
<div class="card dark:bg-secondary-100">...</div>
<div class="p-3 rounded border dark:bg-primary-100">...</div>
</div>
`,language:"html"}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:["Tip: Without the ",r.jsx(e.code,{children:"dark"})," class, these utilities will also activate automatically when the browser/OS switches to night mode via ",r.jsx(e.code,{children:"prefers-color-scheme: dark"}),"."]}),`
`]}),`
`,r.jsx(e.h2,{id:"customizing-bootstrap-button-css-variables-in-dark-mode",children:"Customizing Bootstrap button CSS variables in dark mode"}),`
`,r.jsxs(e.p,{children:["You can override component CSS variables in a plain CSS/SCSS file to tailor dark mode. Use either the automatic system preference or the ",r.jsx(e.code,{children:".dark"})," opt-in class:"]}),`
`,r.jsx(d,{code:`
/* System dark mode */
@media (prefers-color-scheme: dark) {
.btn-primary {
  /* Base and text */
  --bs-btn-bg: var(--bs-primary-600);
  --bs-btn-color: var(--bs-body-bg);
  --bs-btn-border-color: var(--bs-primary-600);

  /* Hover */
  --bs-btn-hover-bg: var(--bs-primary-700);
  --bs-btn-hover-border-color: var(--bs-primary-700);

  /* Focus */
  --bs-btn-focus-box-shadow: 0 0 0 .25rem rgba(var(--bs-primary-rgb), .25);

  /* Active */
  --bs-btn-active-bg: var(--bs-primary-800);
  --bs-btn-active-border-color: var(--bs-primary-800);
}

.btn-outline-secondary {
  --bs-btn-color: var(--bs-secondary-300);
  --bs-btn-border-color: var(--bs-secondary-300);
  --bs-btn-hover-bg: rgba(var(--bs-secondary-rgb), .12);
  --bs-btn-hover-border-color: var(--bs-secondary-400);
}
}

/* Opt-in dark container */
.dark {
.btn-primary {
  --bs-btn-bg: var(--bs-primary-600);
  --bs-btn-color: var(--bs-body-bg);
  --bs-btn-border-color: var(--bs-primary-600);
  --bs-btn-hover-bg: var(--bs-primary-700);
  --bs-btn-hover-border-color: var(--bs-primary-700);
  --bs-btn-active-bg: var(--bs-primary-800);
  --bs-btn-active-border-color: var(--bs-primary-800);
}
}
`,language:"css"})]})}function N(s={}){const{wrapper:e}={...i(),...s.components};return e?r.jsx(e,{...s,children:r.jsx(t,{...s})}):t(s)}export{N as default};
