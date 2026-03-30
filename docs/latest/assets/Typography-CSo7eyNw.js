import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-_bUkNsaJ.js";import{M as l}from"./blocks-D22j9NYG.js";import"./iframe-um1WsC0C.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BitFkd-h.js";import"./index-BGEaalem.js";function i(n){const s={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Design System/Foundations/Typography"}),`
`,e.jsxs("div",{className:"inline-story sb-unstyled",style:{fontFamily:"var(--bs-body-font-family)"},children:[e.jsx(s.h1,{id:"typography-foundations",children:"Typography Foundations"}),e.jsx(s.p,{children:"Dynamic Framework standardizes typography on top of Bootstrap 5 using the Jost typeface, a clear size scale, semantic text colors, and helpful utilities for weight, line-height, wrapping, and truncation."}),e.jsx("br",{}),e.jsx(s.h3,{id:"type-scale-and-display-styles",children:"Type scale and display styles"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Headings: h1–h6 and heading utility classes ",e.jsx(s.code,{children:".h1"})," … ",e.jsx(s.code,{children:".h6"})]}),`
`,e.jsxs(s.li,{children:["Display styles: ",e.jsx(s.code,{children:".display-1"})," … ",e.jsx(s.code,{children:".display-6"})]}),`
`,e.jsxs(s.li,{children:["Size utilities: ",e.jsx(s.code,{children:".fs-1"})," … ",e.jsx(s.code,{children:".fs-6"}),", ",e.jsx(s.code,{children:".small"})]}),`
`,e.jsxs(s.li,{children:["Body size: ",e.jsx(s.code,{children:".fs-body"})]}),`
`]}),e.jsxs("div",{className:"d-flex flex-column gap-2 mt-2 mb-4",children:[e.jsx("div",{className:"display-1",children:"Display 1"}),e.jsx("div",{className:"display-4",children:"Display 4"}),e.jsx("h1",{children:"Heading H1"}),e.jsx("h3",{children:"Heading H3"}),e.jsx("p",{className:"h1 m-0",children:"Heading utility (.h1)"}),e.jsx("p",{className:"h4 m-0",children:"Heading utility (.h4)"}),e.jsx("p",{className:"fs-4 m-0",children:"Text with .fs-4"}),e.jsx("p",{className:"fs-body m-0",children:"Body default (.fs-body)"}),e.jsx("p",{className:"small m-0 text-body-secondary",children:"Small text (.small)"})]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* Display utilities map to CSS vars used by type rendering */
.display-1 { --bs-display-font-size: var(--bs-fs-display-1); }
.display-2 { --bs-display-font-size: var(--bs-fs-display-2); }
.display-3 { --bs-display-font-size: var(--bs-fs-display-3); }
.display-4 { --bs-display-font-size: var(--bs-fs-display-4); }
.display-5 { --bs-display-font-size: var(--bs-fs-display-5); }
.display-6 { --bs-display-font-size: var(--bs-fs-display-6); }
/* Base type consumes it: font-size: var(--bs-display-font-size) */

/* Size utilities */
.fs-1 { font-size: var(--bs-fs-1); }
.fs-2 { font-size: var(--bs-fs-2); }
.fs-3 { font-size: var(--bs-fs-3); }
.fs-4 { font-size: var(--bs-fs-4); }
.fs-5 { font-size: var(--bs-fs-5); }
.fs-6 { font-size: var(--bs-fs-6); }
.small { font-size: var(--bs-fs-small); }

/* Body size utility */
.fs-body    { font-size: var(--bs-body-font-size); }
`})}),e.jsx("br",{}),e.jsx(s.h3,{id:"semantic-text-colors",children:"Semantic text colors"}),e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:".text-{token}"})," with semantic states and extended palettes:"]}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Tokens: Primary, Success, Warning, Danger, Info, Secondary, Light, Dark"}),`
`,e.jsxs(s.li,{children:["Shades: ",e.jsx(s.code,{children:"{25|50|100|200|300|400|500|600|700|800|900}"})," for background tints: ",e.jsx(s.code,{children:".bg-{token}-{shade}"})]}),`
`,e.jsx(s.li,{children:"Light variants are intended for dark backgrounds"}),`
`]}),e.jsxs("div",{className:"d-flex flex-wrap gap-3 mb-2 mb-4",children:[e.jsx("p",{className:"m-0 text-primary",children:"Primary text"}),e.jsx("p",{className:"m-0 text-success",children:"Success text"}),e.jsx("p",{className:"m-0 text-warning",children:"Warning text"}),e.jsx("p",{className:"m-0 text-danger",children:"Danger text"}),e.jsx("p",{className:"m-0 text-info",children:"Info text"}),e.jsx("p",{className:"m-0 text-secondary",children:"Secondary text"}),e.jsx("p",{className:"m-0 text-dark",children:"Dark text"})]}),e.jsx("div",{className:"mt-2 p-2 rounded bg-dark text-light",children:"Text-light over dark background"}),e.jsx("br",{}),e.jsx(s.h3,{id:"font-weight-and-line-height",children:"Font weight and line-height"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Font weight utilities (responsive enabled): ",e.jsx(s.code,{children:".fw-light"}),", ",e.jsx(s.code,{children:".fw-normal"}),", ",e.jsx(s.code,{children:".fw-semibold"}),", ",e.jsx(s.code,{children:".fw-bold"})]}),`
`,e.jsxs(s.li,{children:["Line-height utilities: ",e.jsx(s.code,{children:".lh-1"}),", ",e.jsx(s.code,{children:".lh-sm"}),", ",e.jsx(s.code,{children:".lh-base"}),", ",e.jsx(s.code,{children:".lh-lg"})]}),`
`]}),e.jsxs("div",{className:"d-flex flex-column gap-2 mt-2 mb-4",children:[e.jsx("p",{className:"fw-light my-1",children:"Light weight"}),e.jsx("p",{className:"fw-normal my-1",children:"Normal weight"}),e.jsx("p",{className:"fw-semibold my-1",children:"Semibold weight"}),e.jsx("p",{className:"fw-bold my-1",children:"Bold weight"}),e.jsx("p",{className:"lh-1 my-1",children:"Line-height 1"}),e.jsx("p",{className:"lh-sm my-1",children:"Line-height sm"}),e.jsx("p",{className:"lh-base my-1",children:"Line-height base"}),e.jsx("p",{className:"lh-lg my-1",children:"Line-height lg"})]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* Line-height utilities map to variables */
.lh-sm   { line-height: var(--bs-lh-sm); }
.lh-base { line-height: var(--bs-lh-base); }
.lh-lg   { line-height: var(--bs-lh-lg); }
`})}),e.jsx("br",{}),e.jsx(s.h3,{id:"text-decoration-and-font-style",children:"Text decoration and font style"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Underline: ",e.jsx(s.code,{children:".text-decoration-underline"})]}),`
`,e.jsxs(s.li,{children:["Line-through: ",e.jsx(s.code,{children:".text-decoration-line-through"})]}),`
`,e.jsxs(s.li,{children:["Italic: ",e.jsx(s.code,{children:".fst-italic"})]}),`
`]}),e.jsxs("div",{className:"d-flex flex-column gap-2 mt-2 mb-4",children:[e.jsx("p",{className:"text-decoration-underline m-0",children:"Underlined text"}),e.jsx("p",{className:"text-decoration-line-through m-0",children:"Line-through text"}),e.jsx("p",{className:"fst-italic m-0",children:"Italic text"})]}),e.jsx("br",{}),e.jsx(s.h3,{id:"text-wrapping-and-truncation",children:"Text wrapping and truncation"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Balanced wrapping: ",e.jsx(s.code,{children:".text-wrap-balance"})]}),`
`,e.jsxs(s.li,{children:["Normal wrapping: ",e.jsx(s.code,{children:".text-wrap-normal"}),"; Force wrap: ",e.jsx(s.code,{children:".text-wrap-wrap"})]}),`
`,e.jsxs(s.li,{children:["Truncation by lines (responsive): ",e.jsx(s.code,{children:".text-truncate-{1..6}"})]}),`
`]}),e.jsxs("div",{className:"d-flex flex-column gap-2 mt-2 mb-4",style:{maxWidth:360},children:[e.jsx("p",{className:"text-wrap-balance",children:e.jsx(s.p,{children:"Balanced wrapping strives for visually even lines for better readability across varying widths."})}),e.jsx("p",{className:"text-wrap-wrap",children:e.jsx(s.p,{children:"Force wrapping when you need long identifiers or URLs to break across lines gracefully."})}),e.jsx("p",{className:"text-truncate-3",children:e.jsx(s.p,{children:"Long text that will be truncated to three lines. Long text that will be truncated to three lines. Long text that will be truncated to three lines. Long text that will be truncated to three lines with additional content to ensure overflow beyond three lines in typical widths. This sentence adds even more content so the ellipsis appears reliably across viewports. Yet another clause to extend the content further."})})]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* Text wrap utility values */
.text-wrap-balance { text-wrap: balance; }
.text-wrap-normal  { text-wrap: normal; }
.text-wrap-truncate{ text-wrap: truncate; }
.text-wrap-wrap    { text-wrap: wrap; }

/* Truncate uses CSS vars and -webkit-line-clamp under the hood */
`})}),e.jsx("br",{}),e.jsx(s.h3,{id:"dark-mode-and-hover-variants-for-text",children:"Dark mode and hover variants for text"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Dark mode variant: ",e.jsx(s.code,{children:".dark:text-{token}"})," adapts text color in dark contexts"]}),`
`,e.jsxs(s.li,{children:["Hover variant: ",e.jsx(s.code,{children:".hover:text-{token}"})," provides interactive feedback on text"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<a class="text-body hover:text-danger">Hover to see danger color</a>
<div class="text-body dark:text-success">Text turns success in dark</div>
`})})]})]})}function p(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{p as default};
