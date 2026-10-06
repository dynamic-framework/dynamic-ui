import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-BVwFvyuh.js";import{M as d}from"./blocks-u6YwrM34.js";import"./iframe-BOlGrI6L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";function n(r){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Design System/Foundations/Design Tokens"}),`
`,e.jsxs("div",{className:"inline-story sb-unstyled",style:{fontFamily:"var(--bs-body-font-family)"},children:[e.jsx(s.h1,{id:"design-tokens",children:"Design Tokens"}),e.jsxs(s.p,{children:["Dynamic Framework builds on Bootstrap 5 and exposes a robust set of CSS variables and Sass tokens to craft brand themes. Prefer overriding CSS variables at runtime for theming, and use Sass variables for build-time defaults when shipping a custom bundle. Official documentation is available at ",e.jsx(s.a,{href:"https://docs.modyo.com",rel:"nofollow",children:"https://docs.modyo.com"}),"."]}),e.jsx("br",{}),e.jsx(s.h2,{id:"principles",children:"Principles"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Scope overrides: use ",e.jsx(s.code,{children:":root"})," for global themes and a zone (",e.jsx(s.code,{children:'[data-bs-theme="<name>"]'}),") for a subtree with its own colors. A zone needs more than the global theme; see ",e.jsx(s.a,{href:"#zones",children:"Zones"}),"."]}),`
`,e.jsxs(s.li,{children:["Colors that have an RGB triplet (",e.jsx(s.code,{children:"--bs-<name>-rgb"}),") travel in it. Their variables without ",e.jsx(s.code,{children:"-rgb"})," (",e.jsx(s.code,{children:"--bs-primary"}),", ",e.jsx(s.code,{children:"--bs-body-bg"}),") are wrappers computed from the triplet: on ",e.jsx(s.code,{children:":root"})," set the triplet, not the wrapper; a zone sets both (see ",e.jsx(s.a,{href:"#zones",children:"Zones"}),"). Colors without a triplet, such as ",e.jsx(s.code,{children:"--bs-border-color"}),", take the value directly."]}),`
`,e.jsx(s.li,{children:"Change variables, not classes: utilities and components read from CSS variables; overriding variables updates the whole system consistently."}),`
`,e.jsx(s.li,{children:"Validate contrast: ensure WCAG AA for text/background, borders, and focus rings."}),`
`]}),e.jsx("br",{}),e.jsx(s.h3,{id:"core-variables-what-to-override",children:"Core variables (what to override)"}),e.jsx(s.p,{children:"These variables drive components and utilities; override them to theme typography, colors, spacing, borders, shadows, and dark mode consistently."}),e.jsx(s.h4,{id:"typography",children:"Typography"}),e.jsx(s.p,{children:"Key CSS variables:"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Family and body: ",e.jsx(s.code,{children:"--bs-body-font-family"}),", ",e.jsx(s.code,{children:"--bs-body-font-size"}),", ",e.jsx(s.code,{children:"--bs-body-line-height"})]}),`
`,e.jsxs(s.li,{children:["Heading sizes: ",e.jsx(s.code,{children:"--bs-fs-1"})," … ",e.jsx(s.code,{children:"--bs-fs-6"})]}),`
`,e.jsxs(s.li,{children:["Display sizes: ",e.jsx(s.code,{children:"--bs-fs-display-1"})," … ",e.jsx(s.code,{children:"--bs-fs-display-6"})]}),`
`,e.jsxs(s.li,{children:["Small text: ",e.jsx(s.code,{children:"--bs-fs-small"}),"; line-heights: ",e.jsx(s.code,{children:"--bs-lh-sm"}),", ",e.jsx(s.code,{children:"--bs-lh-base"}),", ",e.jsx(s.code,{children:"--bs-lh-lg"})]}),`
`,e.jsxs(s.li,{children:["Heading line-height: ",e.jsx(s.code,{children:"--bs-heading-line-height"})]}),`
`]}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--bs-fs-N"})," is an alias of ",e.jsx(s.code,{children:"--bs-rfs-fs-N"}),". Steps 1 to 4 are fluid: the library computes them with RFS as a value that grows with the viewport below 1200px and a fixed size from 1200px on. Steps 5 and 6 are a fixed size at every width and have no desktop cap. Override ",e.jsx(s.code,{children:"--bs-rfs-fs-N"}),"; a stylesheet loaded after Dynamic's already wins at every width. To keep the same behavior (fluid below 1200px, capped on desktop), set the fluid value on ",e.jsx(s.code,{children:":root"})," and the desktop size of steps 1 to 4 in the same media query:"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  --bs-body-font-family: "Jost", system-ui, sans-serif; /* or your brand font */
  --bs-body-font-size: 1rem; /* base body size */
  --bs-rfs-fs-1: calc(1.425rem + 2.1vw); /* h1, fluid below 1200px */
  --bs-rfs-fs-2: calc(1.375rem + 1.5vw);
  --bs-rfs-fs-5: 1.25rem; /* steps 5 and 6 are not fluid */
  --bs-rfs-fs-6: 1rem;
}

@media (min-width: 1200px) {
  :root {
    --bs-rfs-fs-1: 3rem; /* h1 on desktop */
    --bs-rfs-fs-2: 2.5rem;
  }
}
`})}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"npm run theme:expand"})," generates the fluid value and the 1200px block from a single size per step."]}),e.jsx(s.h4,{id:"typography-variables-headings-and-display",children:"Typography variables (headings and display)"}),e.jsxs(s.p,{children:["Components read the ",e.jsx(s.code,{children:"--bs-fs-*"})," aliases; the value lives in the RFS variable each one points to, which is the one to override:"]}),e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Components read"}),e.jsx(s.th,{children:"Override"}),e.jsx(s.th,{children:"Fluid below 1200px"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--bs-fs-1"})," … ",e.jsx(s.code,{children:"--bs-fs-4"})]}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--bs-rfs-fs-1"})," … ",e.jsx(s.code,{children:"--bs-rfs-fs-4"})]}),e.jsxs(s.td,{children:["yes; set the desktop cap in ",e.jsx(s.code,{children:"@media (min-width: 1200px)"})]})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--bs-fs-5"}),", ",e.jsx(s.code,{children:"--bs-fs-6"})]}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--bs-rfs-fs-5"}),", ",e.jsx(s.code,{children:"--bs-rfs-fs-6"})]}),e.jsx(s.td,{children:"no"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--bs-fs-display-1"})," … ",e.jsx(s.code,{children:"--bs-fs-display-6"})]}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"--bs-rfs-display-1"})," … ",e.jsx(s.code,{children:"--bs-rfs-display-6"})]}),e.jsx(s.td,{children:"yes, same media query"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"--bs-fs-small"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"--bs-rfs-fs-small"})}),e.jsx(s.td,{children:"no"})]})]})]}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--bs-heading-line-height"})," has no alias and is overridden directly."]}),e.jsx(s.h4,{id:"usage-examples",children:"Usage examples"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<h1 class="h1">Heading 1 (.h1)</h1>
<h6 class="h6">Heading 6 (.h6)</h6>
<div class="display-1">Display 1</div>
<div class="display-6">Display 6</div>
<p class="fs-1 m-0">.fs-1</p>
<p class="fs-6 m-0">.fs-6</p>
<p class="small m-0">Small text (.small)</p>
`})}),e.jsx("br",{}),e.jsx(s.h4,{id:"color-system",children:"Color system"}),e.jsx(s.p,{children:"Dynamic’s palettes expose base tokens and extended shades."}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Base semantic tokens: ",e.jsx(s.code,{children:"--bs-primary"}),", ",e.jsx(s.code,{children:"--bs-success"}),", ",e.jsx(s.code,{children:"--bs-warning"}),", ",e.jsx(s.code,{children:"--bs-danger"}),", ",e.jsx(s.code,{children:"--bs-info"}),", ",e.jsx(s.code,{children:"--bs-secondary"}),", ",e.jsx(s.code,{children:"--bs-light"}),", ",e.jsx(s.code,{children:"--bs-dark"})]}),`
`,e.jsxs(s.li,{children:["Extended shades by state: e.g., ",e.jsx(s.code,{children:"--bs-primary-25"}),", ",e.jsx(s.code,{children:"--bs-primary-50"}),", …, ",e.jsx(s.code,{children:"--bs-primary-900"})]}),`
`,e.jsxs(s.li,{children:["Text/background/border subtles: ",e.jsx(s.code,{children:"--bs/{token}-text-emphasis"}),", ",e.jsx(s.code,{children:"--bs/{token}-bg-subtle"}),", ",e.jsx(s.code,{children:"--bs/{token}-border-subtle"})]}),`
`,e.jsxs(s.li,{children:["Body defaults: ",e.jsx(s.code,{children:"--bs-body-color"}),", ",e.jsx(s.code,{children:"--bs-body-bg"}),", links: ",e.jsx(s.code,{children:"--bs-link-color"}),", ",e.jsx(s.code,{children:"--bs-link-hover-color"})]}),`
`]}),e.jsxs(s.p,{children:["Override the ",e.jsx(s.strong,{children:"triplets"}),", not the wrappers. The library declares every role and body color twice: the triplet that holds the value (",e.jsx(s.code,{children:"--bs-primary-rgb: 32, 104, 213"}),") and a wrapper computed from it (",e.jsx(s.code,{children:"--bs-primary: rgb(var(--bs-primary-rgb))"}),"). Buttons, utilities such as ",e.jsx(s.code,{children:".bg-primary"})," and ",e.jsx(s.code,{children:".text-bg-primary"}),", and anything with opacity read the triplet; a hex value on ",e.jsx(s.code,{children:"--bs-primary"})," changes only what reads the wrapper, so the brand shows up halfway."]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  /* Role: the base triplet and its ramp (500 is an alias of the base), as generated by theme:expand */
  --bs-primary-rgb: 10, 106, 232;
  --bs-primary-25-rgb: 243, 248, 254;
  --bs-primary-50-rgb: 231, 240, 253;
  --bs-primary-100-rgb: 206, 225, 250;
  --bs-primary-200-rgb: 157, 195, 246;
  --bs-primary-300-rgb: 108, 166, 241;
  --bs-primary-400-rgb: 59, 136, 237;
  --bs-primary-500-rgb: var(--bs-primary-rgb);
  --bs-primary-600-rgb: 8, 85, 186;
  --bs-primary-700-rgb: 6, 64, 139;
  --bs-primary-800-rgb: 4, 42, 93;
  --bs-primary-900-rgb: 2, 21, 46;
  /* Text of .text-bg-primary: the one that contrasts with the new base */
  --bs-primary-text-bg-color: var(--bs-white);

  /* Body */
  --bs-body-color-rgb: 46, 52, 56;
  --bs-body-bg-rgb: 255, 255, 255;
}
`})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["The ramp steps are literal triplets, so changing only ",e.jsx(s.code,{children:"--bs-primary-rgb"})," leaves ",e.jsx(s.code,{children:"--bs-primary-100"})," and the rest of the ramp at the default brand."]}),`
`,e.jsxs(s.li,{children:["Links follow the role: ",e.jsx(s.code,{children:"--bs-link-color-rgb"})," points to ",e.jsx(s.code,{children:"--bs-primary-rgb"})," and ",e.jsx(s.code,{children:"--bs-link-hover-color-rgb"})," to its 700 step, so they only need an override to use a different color."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:".text-bg-<role>"})," reads its text from ",e.jsx(s.code,{children:"--bs-<role>-text-bg-color"}),", resolved for the default role, in every role but ",e.jsx(s.code,{children:"secondary"}),". A role redefined to a light tone needs a dark value there (",e.jsx(s.code,{children:"var(--bs-gray-700)"}),"). ",e.jsx(s.code,{children:".text-bg-secondary"})," has no such variable: it paints ",e.jsx(s.code,{children:"--bs-secondary-700"})," on ",e.jsx(s.code,{children:"--bs-secondary-50"}),", so it follows the secondary ramp."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:".btn-<role>"})," keeps the white or dark text resolved for the default palette, so pick a base that contrasts with it (this example is 4.95:1 against white) or override the button text colors."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"npm run theme:expand"})," takes one color per role and writes its base triplet, the ramp of the roles that have one (25 to 900, with 500 as an alias of the base; all but ",e.jsx(s.code,{children:"light"})," and ",e.jsx(s.code,{children:"dark"}),") and ",e.jsx(s.code,{children:"--bs-<role>-text-bg-color"})," for every role but ",e.jsx(s.code,{children:"secondary"}),", which reads its ramp. ",e.jsx(s.code,{children:"npm run theme:validate"})," checks the result, contrast included."]}),`
`]}),e.jsx(s.h4,{id:"palette-variables-25900",children:"Palette variables (25–900)"}),e.jsxs(s.p,{children:["Each role with a ramp (",e.jsx(s.code,{children:"primary"}),", ",e.jsx(s.code,{children:"secondary"}),", ",e.jsx(s.code,{children:"success"}),", ",e.jsx(s.code,{children:"info"}),", ",e.jsx(s.code,{children:"warning"}),", ",e.jsx(s.code,{children:"danger"}),") exposes 11 triplets. Step 500 is ",e.jsx(s.code,{children:"var(--bs-<role>-rgb)"}),", so a rebrand sets the base and the other 10:"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  --bs-primary-rgb: /* R, G, B */;
  --bs-primary-25-rgb: /* R, G, B */; --bs-primary-50-rgb: /* R, G, B */; --bs-primary-100-rgb: /* R, G, B */;
  --bs-primary-200-rgb: /* R, G, B */; --bs-primary-300-rgb: /* R, G, B */; --bs-primary-400-rgb: /* R, G, B */;
  --bs-primary-600-rgb: /* R, G, B */; --bs-primary-700-rgb: /* R, G, B */; --bs-primary-800-rgb: /* R, G, B */;
  --bs-primary-900-rgb: /* R, G, B */;
  /* Same shape for success, info, warning, danger and secondary. */
}
`})}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"light"})," and ",e.jsx(s.code,{children:"dark"})," have no ramp: only ",e.jsx(s.code,{children:"--bs-light-rgb"})," and ",e.jsx(s.code,{children:"--bs-dark-rgb"}),"."]}),e.jsxs(s.p,{children:["Dark mode (automatic and forced). Dynamic ships with Bootstrap's built-in dark mode turned off, so a dark palette is an override like any other. On ",e.jsx(s.code,{children:":root"})," the wrappers are recomputed from the new triplets; on a class that applies to a subtree, the rules of ",e.jsx(s.a,{href:"#zones",children:"Zones"})," apply:"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@media (prefers-color-scheme: dark) {
  :root {
    --bs-body-bg-rgb: 14, 17, 22;
    --bs-body-color-rgb: 230, 230, 230;
    --bs-link-color-rgb: 91, 168, 255;
    --bs-link-hover-color-rgb: 143, 194, 255;
    --bs-border-color: rgb(42, 47, 54);
  }
}
`})}),e.jsx("br",{}),e.jsx(s.h3,{id:"spacing-scale",children:"Spacing scale"}),e.jsx(s.p,{children:"Override spacing globally or create theme scopes:"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  --bs-ref-spacer-4: 16px;  /* baseline */
  --bs-ref-spacer-6: 24px;
  --bs-ref-spacer-8: 32px;
  --bs-ref-spacer-12: 48px;
}
[data-bs-theme="compact"] {
  --bs-ref-spacer-6: 20px; /* tighter */
}
`})}),e.jsx(s.p,{children:`Refs (1–30)
Refs (1–30) is a reusable set of spacing reference tokens. Use these tokens as baseline measurements across components and layouts to avoid redefining values. Some tokens are used internally by Dynamic UI; you can override them to align with your design needs.`}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  --bs-ref-spacer-1: 0.25rem;
  --bs-ref-spacer-2: 0.5rem;
  --bs-ref-spacer-3: 0.75rem;
  --bs-ref-spacer-4: 1rem;
  --bs-ref-spacer-5: 1.25rem;
  --bs-ref-spacer-6: 1.5rem;
  --bs-ref-spacer-7: 1.75rem;
  --bs-ref-spacer-8: 2rem;
  --bs-ref-spacer-9: 2.25rem;
  --bs-ref-spacer-10: 2.5rem;
  --bs-ref-spacer-11: 2.75rem;
  --bs-ref-spacer-12: 3rem;
  --bs-ref-spacer-13: 3.25rem;
  --bs-ref-spacer-14: 3.5rem;
  --bs-ref-spacer-15: 3.75rem;
  --bs-ref-spacer-16: 4rem;
  --bs-ref-spacer-17: 4.25rem;
  --bs-ref-spacer-18: 4.5rem;
  --bs-ref-spacer-19: 4.75rem;
  --bs-ref-spacer-20: 5rem;
  --bs-ref-spacer-21: 5.25rem;
  --bs-ref-spacer-22: 5.5rem;
  --bs-ref-spacer-23: 5.75rem;
  --bs-ref-spacer-24: 6rem;
  --bs-ref-spacer-25: 6.25rem;
  --bs-ref-spacer-26: 6.5rem;
  --bs-ref-spacer-27: 6.75rem;
  --bs-ref-spacer-28: 7rem;
  --bs-ref-spacer-29: 7.25rem;
  --bs-ref-spacer-30: 7.5rem;
}
`})}),e.jsx("br",{}),e.jsx(s.h4,{id:"borders-radius-shadows-focus",children:"Borders, radius, shadows, focus"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Radius: ",e.jsx(s.code,{children:"--bs-border-radius"}),", ",e.jsx(s.code,{children:"--bs-border-radius-sm"}),", ",e.jsx(s.code,{children:"--bs-border-radius-lg"}),", ",e.jsx(s.code,{children:"--bs-border-radius-xl"}),", ",e.jsx(s.code,{children:"--bs-border-radius-xxl"}),", ",e.jsx(s.code,{children:"--bs-border-radius-pill"})]}),`
`,e.jsxs(s.li,{children:["Border: ",e.jsx(s.code,{children:"--bs-border-width"}),", ",e.jsx(s.code,{children:"--bs-border-style"}),", ",e.jsx(s.code,{children:"--bs-border-color"}),", ",e.jsx(s.code,{children:"--bs-border-color-translucent"})]}),`
`,e.jsxs(s.li,{children:["Shadows: ",e.jsx(s.code,{children:"--bs-box-shadow"}),", ",e.jsx(s.code,{children:"--bs-box-shadow-sm"}),", ",e.jsx(s.code,{children:"--bs-box-shadow-lg"})]}),`
`,e.jsxs(s.li,{children:["Focus ring: ",e.jsx(s.code,{children:"--bs-focus-ring-width"}),", ",e.jsx(s.code,{children:"--bs-focus-ring-opacity"}),", ",e.jsx(s.code,{children:"--bs-focus-ring-border-color"}),", ",e.jsx(s.code,{children:"--bs-focus-ring-color"})]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  --bs-border-radius: .5rem;
  --bs-border-radius-lg: .75rem;
  --bs-box-shadow: 0 2px 8px rgba(0,0,0,.08);
  --bs-focus-ring-width: 2px;
  --bs-focus-ring-opacity: .35;
  --bs-focus-ring-border-color: #0b74ff;
}
`})}),e.jsx(s.h4,{id:"border-variables-full-list",children:"Border variables (full list)"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  --bs-border-width: /* override */;
  --bs-border-style: /* override */;
  --bs-border-color: /* override */;
  --bs-border-color-translucent: /* override */;

  --bs-border-radius: /* override */;
  --bs-border-radius-sm: /* override */;
  --bs-border-radius-lg: /* override */;
  --bs-border-radius-xl: /* override */;
  --bs-border-radius-xxl: /* override */;
  --bs-border-radius-2xl: /* alias of xxl */;
  --bs-border-radius-pill: /* override */;
}
`})}),e.jsx("br",{}),e.jsx(s.h2,{id:"component-tokens-examples",children:"Component tokens (examples)"}),e.jsx(s.p,{children:"Many component styles are derived from the core variables, but some expose specific tokens:"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Buttons: variant tokens are generated off theme colors; customize via core color variables and (optionally) component CSS vars like --bs-btn-border-radius"}),`
`,e.jsx(s.li,{children:"Alerts/Badges: read semantic tokens and bg-subtle/border-subtle"}),`
`,e.jsx(s.li,{children:"Forms: validation colors map to --bs-form-valid-color/border-color, --bs-form-invalid-color/border-color"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* Optional per-component tweak */
:root {
  --bs-btn-border-radius: var(--bs-border-radius-lg);
}
`})}),e.jsx("br",{}),e.jsx(s.h2,{id:"dark-mode-patterns",children:"Dark mode patterns"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Use dark: utilities for class-based overrides and @media prefers-color-scheme for system dark."}),`
`,e.jsx(s.li,{children:"Define token pairs for light/dark to ensure consistent tints and emphasis colors, as triplets:"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@media (prefers-color-scheme: dark) {
  :root {
    --bs-secondary-bg-rgb: 27, 33, 41;
    --bs-secondary-color-rgb: 230, 230, 230; /* the wrapper applies the .75 alpha */
    --bs-danger-100-rgb: 71, 28, 28; /* dark tint variant */
  }
}
`})}),e.jsx("br",{}),e.jsx(s.h2,{id:"zones",children:"Zones"}),e.jsxs(s.p,{children:["A zone is a subtree with its own palette, scoped with ",e.jsx(s.code,{children:'[data-bs-theme="<name>"]'})," (for example, a dark header in a light app). It is not a separate theme: it inherits from ",e.jsx(s.code,{children:":root"}),", and three things don't follow on their own."]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"1. Declare the triplet and the wrapper."})," The library computes each wrapper where it declares it: ",e.jsx(s.code,{children:"--bs-body-color: rgb(var(--bs-body-color-rgb))"})," is resolved on ",e.jsx(s.code,{children:":root"})," and inherited already computed. A zone that only changes ",e.jsx(s.code,{children:"--bs-body-color-rgb"})," doesn't move anything that reads ",e.jsx(s.code,{children:"var(--bs-body-color)"})," (",e.jsx(s.code,{children:".form-control"}),", ",e.jsx(s.code,{children:".modal"}),", ",e.jsx(s.code,{children:".text-body-secondary"}),"). Set both, plus the derived text colors:"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`[data-bs-theme="dark-header"] {
  --bs-body-color-rgb: var(--bs-white-rgb);
  --bs-body-color: rgb(var(--bs-white-rgb));
  --bs-secondary-color-rgb: var(--bs-white-rgb);
  --bs-secondary-color: rgba(var(--bs-white-rgb), .75);
  --bs-tertiary-color-rgb: var(--bs-white-rgb);
  --bs-tertiary-color: rgba(var(--bs-white-rgb), .5);
  --bs-emphasis-color-rgb: var(--bs-white-rgb); /* .link-body-emphasis reads the triplet */
  --bs-emphasis-color: rgb(var(--bs-white-rgb));
  --bs-body-bg-rgb: 32, 44, 62;
  --bs-body-bg: rgb(32, 44, 62);
}
`})}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"2. Paint the zone."})," The library applies ",e.jsx(s.code,{children:"--bs-body-bg"})," and ",e.jsx(s.code,{children:"--bs-body-color"})," on ",e.jsx(s.code,{children:"body"}),"; a subtree halfway down the page never goes through that rule, so the zone paints itself:"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`[data-bs-theme="dark-header"] {
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}
`})}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"3. Give components with their own background a block."})," Changing the inherited color reaches every component in the zone, including the ones that keep a light background: a ",e.jsx(s.code,{children:".form-control"})," inside a dark zone ends up with white text on white. Those components need their own block in the zone. The ",e.jsx(s.code,{children:".nav-pills"})," variables don't reach from ",e.jsx(s.code,{children:".nav"}),", so they go in their own block too:"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`[data-bs-theme="dark-header"] .form-control {
  --bs-body-color: rgb(var(--bs-dark-rgb));
}

[data-bs-theme="dark-header"] .nav-pills {
  --bs-nav-pills-link-active-color: rgb(var(--bs-dark-rgb));
  --bs-nav-pills-link-active-bg: rgb(var(--bs-white-rgb));
}
`})}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"npm run theme:expand"})," writes these blocks from the ",e.jsx(s.code,{children:"zones"})," section of a theme file, and ",e.jsx(s.code,{children:"npm run theme:validate"})," measures each zone against its own background. The validator assumes that background for everything inside the zone, so it doesn't catch a component with its own surface, such as the white text on a white ",e.jsx(s.code,{children:".form-control"})," above: check those blocks in the preview (",e.jsx(s.code,{children:"npm run theme:preview"}),"). The full reference is in ",e.jsx(s.code,{children:"scripts/theme/README.md"}),"."]}),e.jsx("br",{}),e.jsx(s.h2,{id:"theming-workflow-recommended",children:"Theming workflow (recommended)"}),e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Define brand color palette (primary/success/warning/danger/info/secondary + tints 25–900)."}),`
`,e.jsx(s.li,{children:"Set typography: body family/size, heading/display scales, small text, line-heights."}),`
`,e.jsx(s.li,{children:"Tune spacing scale and component gaps using --bs-ref-spacer-*."}),`
`,e.jsx(s.li,{children:"Adjust radius, borders, shadows, focus tokens for personality and accessibility."}),`
`,e.jsxs(s.li,{children:["Implement dark mode via prefers-color-scheme, and dark subtrees as ",e.jsx(s.a,{href:"#zones",children:"zones"}),"; validate contrast."]}),`
`,e.jsxs(s.li,{children:["Verify utilities (fs-",e.jsx(s.em,{children:", display-"}),", text-",e.jsx(s.em,{children:", bg-"}),", border-*) reflect your overrides."]}),`
`]}),e.jsx("br",{}),e.jsx(s.h2,{id:"bootstrapping-a-theme-copy-paste-starter",children:"Bootstrapping a theme (copy-paste starter)"}),e.jsx(s.p,{children:"There are two ways to start, and they don't mix: copying both would duplicate declarations."}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Generated:"})," ",e.jsx(s.code,{children:"npm run theme:expand"})," writes a complete stylesheet from a theme file. From one color per role it writes the base triplet, the ramp of the roles that have one (25 to 900, with 500 as an alias of the base; all but ",e.jsx(s.code,{children:"light"})," and ",e.jsx(s.code,{children:"dark"}),") and ",e.jsx(s.code,{children:"--bs-<role>-text-bg-color"})," for every role but ",e.jsx(s.code,{children:"secondary"}),", which reads its ramp; it also writes body colors, font family and radius, which the theme file requires, and only the type scale steps the file lists (",e.jsx(s.code,{children:"typography.scale"})," is optional). Global additions (spacing, shadows) go in the file's ",e.jsx(s.code,{children:"root"})," section, which is emitted in the root block at every width. Automatic dark mode doesn't fit there: the theme file can't place declarations in ",e.jsx(s.code,{children:"@media (prefers-color-scheme: dark)"}),", so it goes in a separate stylesheet as in ",e.jsx(s.a,{href:"#dark-mode-patterns",children:"Dark mode patterns"}),". A dark subtree goes in ",e.jsx(s.code,{children:"zones"}),". See ",e.jsx(s.code,{children:"scripts/theme/README.md"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Hand-written:"})," the starter below. It has no role colors; copy each role's full block (as in ",e.jsx(s.a,{href:"#color-system",children:"Color system"}),") or take it from the ",e.jsx(s.code,{children:"theme:expand"})," output."]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* Global theme */
:root {
  /* Typography */
  --bs-body-font-family: "Jost", system-ui, sans-serif;
  --bs-body-font-size: 1rem;
  --bs-heading-line-height: 1.2;
  --bs-rfs-fs-small: .875rem;

  /* Color tokens: triplets, not hex on the wrappers */
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-body-color-rgb: 46, 52, 56;
  /* Role colors: each role's full block, see the note above */

  /* Spacing */
  --bs-ref-spacer-4: 16px;
  --bs-ref-spacer-6: 24px;

  /* Radius/Shadows */
  --bs-border-radius: .5rem;
  --bs-box-shadow: 0 2px 8px rgba(0,0,0,.08);
}

/* System dark support */
@media (prefers-color-scheme: dark) {
  :root {
    --bs-body-bg-rgb: 14, 17, 22;
    --bs-body-color-rgb: 230, 230, 230;
    --bs-border-color: rgb(42, 47, 54);
  }
}
`})})]})]})}function p(r={}){const{wrapper:s}={...o(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{p as default};
