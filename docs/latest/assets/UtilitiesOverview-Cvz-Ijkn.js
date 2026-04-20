import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-COgT9iag.js";import{M as r}from"./blocks-DtfArpsp.js";import"./iframe-C3Wc-jvE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-NjhlDkXl.js";import"./index-pAY3W6Xx.js";function n(s){const i={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Design System/Foundations/Extended Utilities"}),`
`,e.jsxs("div",{className:"inline-story sb-unstyled",children:[e.jsx(i.h1,{id:"utilities-overview",children:"Utilities Overview"}),e.jsx(i.p,{children:"Dynamic Framework extends Bootstrap utilities for speed and flexibility. Bootstrap’s core utilities are not all responsive by default; we provide responsive variants and extensions across display, alignment, spacing, typography, and more. Below are notable additions from our utilities layer."}),e.jsx("br",{}),e.jsx(i.h3,{id:"variants-hover-and-dark",children:"Variants: hover: and dark:"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Hover Utilities: ",e.jsx("a",{href:"/?path=/story/design-system-examples-hover-utilities",children:"Design System/Examples/Hover Utilities"})]}),`
`,e.jsxs(i.li,{children:["Dark Utilities: ",e.jsx("a",{href:"/?path=/story/design-system-examples-dark-utilities",children:"Design System/Examples/Dark Utilities"})]}),`
`]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<a class="text-body hover:text-danger">Danger on hover</a>
<div class="text-body dark:text-success">Success in dark</div>
`})}),e.jsx("br",{}),e.jsx(i.h3,{id:"spacing-030",children:"Spacing (0–30)"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Margin: ",e.jsx(i.code,{children:".m{t|b|s|e|x|y}-{0..30}"}),"; Padding: ",e.jsx(i.code,{children:".p{t|b|s|e|x|y}-{0..30}"})," (responsive)"]}),`
`]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="mt-15 px-30 py-2">...</div>
`})}),e.jsx("br",{}),e.jsx(i.h3,{id:"extended-display-and-alignment",children:"Extended display and alignment"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Display: ",e.jsx(i.code,{children:".d-{inline|inline-block|block|table|table-row|table-cell|flex|inline-flex|none|grid|table-header-group}"})," (responsive)"]}),`
`,e.jsxs(i.li,{children:["Vertical align: ",e.jsx(i.code,{children:".v-align-{baseline|top|bottom|text-top|text-bottom|sub|super|middle}"})," (responsive)"]}),`
`]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="d-grid v-align-middle">...</div>
`})}),e.jsx("br",{}),e.jsx(i.h3,{id:"grid-columns-css-grid",children:"Grid columns (CSS Grid)"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".g-col-{13…24}"})," for larger grid spans (responsive)"]}),`
`]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="d-grid" style="grid-template-columns: repeat(24, 1fr)">
  <div class="g-col-6">6 cols</div>
  <div class="g-col-18">18 cols</div>
</div>
`})}),e.jsx("br",{}),e.jsx(i.h3,{id:"typography-utilities",children:"Typography utilities"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Display font sizes: ",e.jsx(i.code,{children:".display-{1…6}"})," map to ",e.jsx(i.code,{children:"--bs-fs-display-*"})," via ",e.jsx(i.code,{children:"--bs-display-font-size"})]}),`
`,e.jsxs(i.li,{children:["Body font size: ",e.jsx(i.code,{children:".fs-body"})]}),`
`,e.jsxs(i.li,{children:["Line-height: ",e.jsx(i.code,{children:".lh-1"}),", ",e.jsx(i.code,{children:".lh-sm"}),", ",e.jsx(i.code,{children:".lh-base"}),", ",e.jsx(i.code,{children:".lh-lg"})]}),`
`,e.jsxs(i.li,{children:["Text wrap: ",e.jsx(i.code,{children:".text-wrap-{balance|normal|truncate|wrap}"})]}),`
`,e.jsxs(i.li,{children:["Text truncate (lines): ",e.jsx(i.code,{children:".text-truncate-{1…6}"})," (responsive)"]}),`
`]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="display-4">Display 4</div>
<p class="lh-base text-wrap-balance">Balanced wrapping</p>
<div class="text-truncate-3" style="max-width: 240px">Long text…</div>
`})}),e.jsxs(i.p,{children:["See: ",e.jsx("a",{href:"/?path=/story/design-system-foundations-typography",children:"Design System/Foundations/Typography"}),"."]}),e.jsx("br",{}),e.jsx(i.h3,{id:"color-utilities",children:"Color utilities"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Text/background/border colors include palettes and grays: ",e.jsx(i.code,{children:".text-{token}"}),", ",e.jsx(i.code,{children:".bg-{token}-{25|50|100|200|300|400|500|600|700|800|900}"}),", ",e.jsx(i.code,{children:".border-{token}"})]}),`
`,e.jsxs(i.li,{children:["Overlay opacity: ",e.jsx(i.code,{children:".overlay-{0|25|50|75|100}"})," (uses CSS var)"]}),`
`,e.jsxs(i.li,{children:["Opacity and text-opacity: support ",e.jsx(i.code,{children:"40"})," in addition to Bootstrap defaults"]}),`
`]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="bg-primary-100 overlay-50">Overlayed block</div>
`})}),e.jsx("br",{}),e.jsx(i.h3,{id:"size-utilities",children:"Size utilities"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Width/Height: ",e.jsx(i.code,{children:".w-*"}),", ",e.jsx(i.code,{children:".h-*"})," extended to be responsive"]}),`
`,e.jsx(i.li,{children:"Font-weight and position: responsive variants enabled"}),`
`]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="position-relative h-100 w-100">...</div>
`})}),e.jsx("br",{}),e.jsx(i.h3,{id:"cursor-utilities",children:"Cursor utilities"}),e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:".cursor-{auto|default|pointer|not-allowed|wait|text|crosshair|zoom-in|zoom-out|grab|grabbing}"})}),`
`]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<button class="cursor-pointer">Clickable</button>
`})}),e.jsx("br",{}),e.jsx(i.h3,{id:"animation-utilities",children:"Animation utilities"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".fade-in"})," — applies a quick opacity transition from ",e.jsx(i.code,{children:"0"})," to ",e.jsx(i.code,{children:"1"})," using ",e.jsx(i.code,{children:"ease-in-out"})," (duration: ",e.jsx(i.code,{children:"0.3s"}),")."]}),`
`]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="fade-in">This content fades in on render</div>
`})}),e.jsx(i.p,{children:"Useful for conditionally rendered elements, modals, alerts, or any content that appears dynamically. The animation runs once on mount and does not loop."})]})]})}function p(s={}){const{wrapper:i}={...l(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{p as default};
