import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-6DR_JpXV.js";import{M as r}from"./blocks-fYHutVNA.js";import"./iframe-BMeNOU03.js";import"./preload-helper-Dp1pzeXC.js";import"./index-yVdt6xC3.js";import"./index-Dqbu3ppb.js";function n(i){const s={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Design System/Foundations/Extended Utilities"}),`
`,e.jsxs("div",{className:"inline-story sb-unstyled",children:[e.jsx(s.h1,{id:"utilities-overview",children:"Utilities Overview"}),e.jsx(s.p,{children:"Dynamic Framework extends Bootstrap utilities for speed and flexibility. Bootstrap’s core utilities are not all responsive by default; we provide responsive variants and extensions across display, alignment, spacing, typography, and more. Below are notable additions from our utilities layer."}),e.jsx("br",{}),e.jsx(s.h3,{id:"variants-hover-and-dark",children:"Variants: hover: and dark:"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Hover Utilities: ",e.jsx("a",{href:"/?path=/story/design-system-examples-hover-utilities",children:"Design System/Examples/Hover Utilities"})]}),`
`,e.jsxs(s.li,{children:["Dark Utilities: ",e.jsx("a",{href:"/?path=/story/design-system-examples-dark-utilities",children:"Design System/Examples/Dark Utilities"})]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<a class="text-body hover:text-danger">Danger on hover</a>
<div class="text-body dark:text-success">Success in dark</div>
`})}),e.jsx("br",{}),e.jsx(s.h3,{id:"spacing-030",children:"Spacing (0–30)"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Margin: ",e.jsx(s.code,{children:".m{t|b|s|e|x|y}-{0..30}"}),"; Padding: ",e.jsx(s.code,{children:".p{t|b|s|e|x|y}-{0..30}"})," (responsive)"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="mt-15 px-30 py-2">...</div>
`})}),e.jsx("br",{}),e.jsx(s.h3,{id:"extended-display-and-alignment",children:"Extended display and alignment"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Display: ",e.jsx(s.code,{children:".d-{inline|inline-block|block|table|table-row|table-cell|flex|inline-flex|none|grid|table-header-group}"})," (responsive)"]}),`
`,e.jsxs(s.li,{children:["Vertical align: ",e.jsx(s.code,{children:".v-align-{baseline|top|bottom|text-top|text-bottom|sub|super|middle}"})," (responsive)"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="d-grid v-align-middle">...</div>
`})}),e.jsx("br",{}),e.jsx(s.h3,{id:"grid-columns-css-grid",children:"Grid columns (CSS Grid)"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:".g-col-{13…24}"})," for larger grid spans (responsive)"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="d-grid" style="grid-template-columns: repeat(24, 1fr)">
  <div class="g-col-6">6 cols</div>
  <div class="g-col-18">18 cols</div>
</div>
`})}),e.jsx("br",{}),e.jsx(s.h3,{id:"typography-utilities",children:"Typography utilities"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Display font sizes: ",e.jsx(s.code,{children:".display-{1…6}"})," map to ",e.jsx(s.code,{children:"--bs-fs-display-*"})," via ",e.jsx(s.code,{children:"--bs-display-font-size"})]}),`
`,e.jsxs(s.li,{children:["Body font size: ",e.jsx(s.code,{children:".fs-body"})]}),`
`,e.jsxs(s.li,{children:["Line-height: ",e.jsx(s.code,{children:".lh-1"}),", ",e.jsx(s.code,{children:".lh-sm"}),", ",e.jsx(s.code,{children:".lh-base"}),", ",e.jsx(s.code,{children:".lh-lg"})]}),`
`,e.jsxs(s.li,{children:["Text wrap: ",e.jsx(s.code,{children:".text-wrap-{balance|normal|truncate|wrap}"})]}),`
`,e.jsxs(s.li,{children:["Text truncate (lines): ",e.jsx(s.code,{children:".text-truncate-{1…6}"})," (responsive)"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="display-4">Display 4</div>
<p class="lh-base text-wrap-balance">Balanced wrapping</p>
<div class="text-truncate-3" style="max-width: 240px">Long text…</div>
`})}),e.jsxs(s.p,{children:["See: ",e.jsx("a",{href:"/?path=/story/design-system-foundations-typography",children:"Design System/Foundations/Typography"}),"."]}),e.jsx("br",{}),e.jsx(s.h3,{id:"color-utilities",children:"Color utilities"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Text/background/border colors include palettes and grays: ",e.jsx(s.code,{children:".text-{token}"}),", ",e.jsx(s.code,{children:".bg-{token}-{25|50|100|200|300|400|500|600|700|800|900}"}),", ",e.jsx(s.code,{children:".border-{token}"})]}),`
`,e.jsxs(s.li,{children:["Overlay opacity: ",e.jsx(s.code,{children:".overlay-{0|25|50|75|100}"})," (uses CSS var)"]}),`
`,e.jsxs(s.li,{children:["Opacity and text-opacity: support ",e.jsx(s.code,{children:"40"})," in addition to Bootstrap defaults"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="bg-primary-100 overlay-50">Overlayed block</div>
`})}),e.jsx("br",{}),e.jsx(s.h3,{id:"size-utilities",children:"Size utilities"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Width/Height: ",e.jsx(s.code,{children:".w-*"}),", ",e.jsx(s.code,{children:".h-*"})," extended to be responsive"]}),`
`,e.jsx(s.li,{children:"Font-weight and position: responsive variants enabled"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="position-relative h-100 w-100">...</div>
`})}),e.jsx("br",{}),e.jsx(s.h3,{id:"cursor-utilities",children:"Cursor utilities"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:".cursor-{auto|default|pointer|not-allowed|wait|text|crosshair|zoom-in|zoom-out|grab|grabbing}"})}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<button class="cursor-pointer">Clickable</button>
`})})]})]})}function p(i={}){const{wrapper:s}={...l(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{p as default};
