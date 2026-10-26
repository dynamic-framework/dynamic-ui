import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-CovxqLmm.js";import{M as d}from"./blocks-CmmemM8F.js";import"./iframe-DJkQ9I2N.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D81MgoPg.js";import"./index-q76Qz2tG.js";function n(s){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Design System/Foundations/Design Tokens"}),`
`,e.jsxs("div",{className:"inline-story sb-unstyled",style:{fontFamily:"var(--bs-body-font-family)"},children:[e.jsx(r.h1,{id:"design-tokens",children:"Design Tokens"}),e.jsxs(r.p,{children:["Dynamic Framework builds on Bootstrap 5 and exposes CSS variables and Sass tokens for brand themes. Prefer overriding CSS variables at runtime for theming, and use Sass variables for build-time defaults when shipping a custom bundle. Official documentation is available at ",e.jsx(r.a,{href:"https://docs.modyo.com",rel:"nofollow",children:"https://docs.modyo.com"}),"."]}),e.jsx("br",{}),e.jsx(r.h2,{id:"principles",children:"Principles"}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Scope overrides: use ",e.jsx(r.code,{children:":root"})," for global themes and a zone (",e.jsx(r.code,{children:'[data-bs-theme="<name>"]'}),") for a subtree with its own colors. A zone needs more than the global theme; see ",e.jsx(r.a,{href:"#zones",children:"Zones"}),"."]}),`
`,e.jsxs(r.li,{children:["Colors that have an RGB triplet (",e.jsx(r.code,{children:"--bs-<name>-rgb"}),") travel in it. Their variables without ",e.jsx(r.code,{children:"-rgb"})," (",e.jsx(r.code,{children:"--bs-primary"}),", ",e.jsx(r.code,{children:"--bs-body-bg"}),") are wrappers computed from the triplet: on ",e.jsx(r.code,{children:":root"})," set the triplet, not the wrapper; a zone sets both (see ",e.jsx(r.a,{href:"#zones",children:"Zones"}),"). Colors without a triplet, such as ",e.jsx(r.code,{children:"--bs-border-color"}),", take the value directly."]}),`
`,e.jsx(r.li,{children:"Change variables, not classes: utilities and components read from CSS variables; overriding variables updates the whole system consistently."}),`
`,e.jsx(r.li,{children:"Validate contrast: ensure WCAG AA for text/background, borders, and focus rings."}),`
`]}),e.jsx("br",{}),e.jsx(r.h3,{id:"core-variables-what-to-override",children:"Core variables (what to override)"}),e.jsx(r.p,{children:"These variables drive components and utilities; override them to theme typography, colors, spacing, borders, and shadows consistently."}),e.jsx(r.h4,{id:"typography",children:"Typography"}),e.jsx(r.p,{children:"Key CSS variables:"}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Family and body: ",e.jsx(r.code,{children:"--bs-body-font-family"}),", ",e.jsx(r.code,{children:"--bs-body-font-size"}),", ",e.jsx(r.code,{children:"--bs-body-line-height"})]}),`
`,e.jsxs(r.li,{children:["Heading sizes: ",e.jsx(r.code,{children:"--bs-fs-1"})," … ",e.jsx(r.code,{children:"--bs-fs-6"})]}),`
`,e.jsxs(r.li,{children:["Display sizes: ",e.jsx(r.code,{children:"--bs-fs-display-1"})," … ",e.jsx(r.code,{children:"--bs-fs-display-6"})]}),`
`,e.jsxs(r.li,{children:["Small text: ",e.jsx(r.code,{children:"--bs-fs-small"}),"; line-heights: ",e.jsx(r.code,{children:"--bs-lh-sm"}),", ",e.jsx(r.code,{children:"--bs-lh-base"}),", ",e.jsx(r.code,{children:"--bs-lh-lg"})]}),`
`,e.jsxs(r.li,{children:["Heading line-height: ",e.jsx(r.code,{children:"--bs-heading-line-height"})]}),`
`]}),e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--bs-fs-N"})," is an alias of ",e.jsx(r.code,{children:"--bs-rfs-fs-N"}),". Steps 1 to 4 are fluid: the library computes them with RFS as a value that grows with the viewport below 1200px and a fixed size from 1200px on. Steps 5 and 6 are a fixed size at every width and have no desktop cap. Override ",e.jsx(r.code,{children:"--bs-rfs-fs-N"}),"; a stylesheet loaded after Dynamic's already wins at every width. To keep the same behavior (fluid below 1200px, capped on desktop), set the fluid value on ",e.jsx(r.code,{children:":root"})," and the desktop size of steps 1 to 4 in the same media query:"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
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
`})}),e.jsxs(r.p,{children:[e.jsx(r.code,{children:"npm run theme:expand"})," generates the fluid value and the 1200px block from a single size per step."]}),e.jsx(r.h4,{id:"typography-variables-headings-and-display",children:"Typography variables (headings and display)"}),e.jsxs(r.p,{children:["Components read the ",e.jsx(r.code,{children:"--bs-fs-*"})," aliases; the value lives in the RFS variable each one points to, which is the one to override:"]}),e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Components read"}),e.jsx(r.th,{children:"Override"}),e.jsx(r.th,{children:"Fluid below 1200px"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:[e.jsx(r.code,{children:"--bs-fs-1"})," … ",e.jsx(r.code,{children:"--bs-fs-4"})]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"--bs-rfs-fs-1"})," … ",e.jsx(r.code,{children:"--bs-rfs-fs-4"})]}),e.jsxs(r.td,{children:["yes; set the desktop cap in ",e.jsx(r.code,{children:"@media (min-width: 1200px)"})]})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:[e.jsx(r.code,{children:"--bs-fs-5"}),", ",e.jsx(r.code,{children:"--bs-fs-6"})]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"--bs-rfs-fs-5"}),", ",e.jsx(r.code,{children:"--bs-rfs-fs-6"})]}),e.jsx(r.td,{children:"no"})]}),e.jsxs(r.tr,{children:[e.jsxs(r.td,{children:[e.jsx(r.code,{children:"--bs-fs-display-1"})," … ",e.jsx(r.code,{children:"--bs-fs-display-6"})]}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"--bs-rfs-display-1"})," … ",e.jsx(r.code,{children:"--bs-rfs-display-6"})]}),e.jsx(r.td,{children:"yes, same media query"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"--bs-fs-small"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"--bs-rfs-fs-small"})}),e.jsx(r.td,{children:"no"})]})]})]}),e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--bs-heading-line-height"})," has no alias and is overridden directly."]}),e.jsx(r.h4,{id:"usage-examples",children:"Usage examples"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<h1 class="h1">Heading 1 (.h1)</h1>
<h6 class="h6">Heading 6 (.h6)</h6>
<div class="display-1">Display 1</div>
<div class="display-6">Display 6</div>
<p class="fs-1 m-0">.fs-1</p>
<p class="fs-6 m-0">.fs-6</p>
<p class="small m-0">Small text (.small)</p>
`})}),e.jsx("br",{}),e.jsx(r.h4,{id:"color-system",children:"Color system"}),e.jsx(r.p,{children:"Dynamic’s palettes expose base tokens and extended shades."}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Base semantic tokens: ",e.jsx(r.code,{children:"--bs-primary"}),", ",e.jsx(r.code,{children:"--bs-success"}),", ",e.jsx(r.code,{children:"--bs-warning"}),", ",e.jsx(r.code,{children:"--bs-danger"}),", ",e.jsx(r.code,{children:"--bs-info"}),", ",e.jsx(r.code,{children:"--bs-secondary"}),", ",e.jsx(r.code,{children:"--bs-light"}),", ",e.jsx(r.code,{children:"--bs-dark"})]}),`
`,e.jsxs(r.li,{children:["Extended shades by state: e.g., ",e.jsx(r.code,{children:"--bs-primary-25"}),", ",e.jsx(r.code,{children:"--bs-primary-50"}),", …, ",e.jsx(r.code,{children:"--bs-primary-900"})]}),`
`,e.jsxs(r.li,{children:["Text/background/border subtles: ",e.jsx(r.code,{children:"--bs-{token}-text-emphasis"}),", ",e.jsx(r.code,{children:"--bs-{token}-bg-subtle"}),", ",e.jsx(r.code,{children:"--bs-{token}-border-subtle"})]}),`
`,e.jsxs(r.li,{children:["Body defaults: ",e.jsx(r.code,{children:"--bs-body-color"}),", ",e.jsx(r.code,{children:"--bs-body-bg"}),", links: ",e.jsx(r.code,{children:"--bs-link-color"}),", ",e.jsx(r.code,{children:"--bs-link-hover-color"})]}),`
`]}),e.jsxs(r.p,{children:["Override the ",e.jsx(r.strong,{children:"triplets"}),", not the wrappers. The library declares every role and body color twice: the triplet that holds the value (",e.jsx(r.code,{children:"--bs-primary-rgb: 32, 104, 213"}),") and a wrapper computed from it (",e.jsx(r.code,{children:"--bs-primary: rgb(var(--bs-primary-rgb))"}),"). Buttons, utilities such as ",e.jsx(r.code,{children:".bg-primary"})," and ",e.jsx(r.code,{children:".text-bg-primary"}),", and anything with opacity read the triplet; a hex value on ",e.jsx(r.code,{children:"--bs-primary"})," changes only what reads the wrapper, so the brand shows up halfway."]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
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
`})}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The ramp steps are literal triplets, so changing only ",e.jsx(r.code,{children:"--bs-primary-rgb"})," leaves ",e.jsx(r.code,{children:"--bs-primary-100"})," and the rest of the ramp at the default brand."]}),`
`,e.jsxs(r.li,{children:["Links follow the role: ",e.jsx(r.code,{children:"--bs-link-color-rgb"})," points to ",e.jsx(r.code,{children:"--bs-primary-rgb"})," and ",e.jsx(r.code,{children:"--bs-link-hover-color-rgb"})," to its 700 step, so they only need an override to use a different color."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:".text-bg-<role>"})," reads its text from ",e.jsx(r.code,{children:"--bs-<role>-text-bg-color"}),", resolved for the default role, in every role but ",e.jsx(r.code,{children:"secondary"}),". A role redefined to a light tone needs a dark value there (",e.jsx(r.code,{children:"var(--bs-gray-700)"}),"). ",e.jsx(r.code,{children:".text-bg-secondary"})," has no such variable: it paints ",e.jsx(r.code,{children:"--bs-secondary-700"})," on ",e.jsx(r.code,{children:"--bs-secondary-50"}),", so it follows the secondary ramp."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:".btn-<role>"})," keeps the white or dark text resolved for the default palette, so pick a base that contrasts with it (this example is 4.95:1 against white) or override the button text colors."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"npm run theme:expand"})," takes one color per role and writes its base triplet, the ramp of the roles that have one (25 to 900, with 500 as an alias of the base; all but ",e.jsx(r.code,{children:"light"})," and ",e.jsx(r.code,{children:"dark"}),") and ",e.jsx(r.code,{children:"--bs-<role>-text-bg-color"})," for every role but ",e.jsx(r.code,{children:"secondary"}),", which reads its ramp. ",e.jsx(r.code,{children:"npm run theme:validate"})," checks the result, contrast included."]}),`
`]}),e.jsx(r.h4,{id:"palette-variables-25900",children:"Palette variables (25–900)"}),e.jsxs(r.p,{children:["Each role with a ramp (",e.jsx(r.code,{children:"primary"}),", ",e.jsx(r.code,{children:"secondary"}),", ",e.jsx(r.code,{children:"success"}),", ",e.jsx(r.code,{children:"info"}),", ",e.jsx(r.code,{children:"warning"}),", ",e.jsx(r.code,{children:"danger"}),") exposes 11 triplets. Step 500 is ",e.jsx(r.code,{children:"var(--bs-<role>-rgb)"}),", so a rebrand sets the base and the other 10:"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
  --bs-primary-rgb: /* R, G, B */;
  --bs-primary-25-rgb: /* R, G, B */; --bs-primary-50-rgb: /* R, G, B */; --bs-primary-100-rgb: /* R, G, B */;
  --bs-primary-200-rgb: /* R, G, B */; --bs-primary-300-rgb: /* R, G, B */; --bs-primary-400-rgb: /* R, G, B */;
  --bs-primary-600-rgb: /* R, G, B */; --bs-primary-700-rgb: /* R, G, B */; --bs-primary-800-rgb: /* R, G, B */;
  --bs-primary-900-rgb: /* R, G, B */;
  /* Same shape for success, info, warning, danger and secondary. */
}
`})}),e.jsxs(r.p,{children:[e.jsx(r.code,{children:"light"})," and ",e.jsx(r.code,{children:"dark"})," have no ramp: only ",e.jsx(r.code,{children:"--bs-light-rgb"})," and ",e.jsx(r.code,{children:"--bs-dark-rgb"}),"."]}),e.jsxs(r.p,{children:["A dark area of the page, such as a header or a banner, is a subtree with its own palette: see ",e.jsx(r.a,{href:"#zones",children:"Zones"}),"."]}),e.jsx("br",{}),e.jsx(r.h3,{id:"spacing-scale",children:"Spacing scale"}),e.jsx(r.p,{children:"Override spacing globally or create theme scopes:"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
  --bs-ref-spacer-4: 16px;  /* baseline */
  --bs-ref-spacer-6: 24px;
  --bs-ref-spacer-8: 32px;
  --bs-ref-spacer-12: 48px;
}
[data-bs-theme="compact"] {
  --bs-ref-spacer-6: 20px; /* tighter */
}
`})}),e.jsx(r.p,{children:`Refs (1–30)
Refs (1–30) is a reusable set of spacing reference tokens. Use these tokens as baseline measurements across components and layouts to avoid redefining values. Some tokens are used internally by Dynamic UI; you can override them to align with your design needs.`}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
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
`})}),e.jsx("br",{}),e.jsx(r.h4,{id:"borders-radius-shadows-focus",children:"Borders, radius, shadows, focus"}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Radius: ",e.jsx(r.code,{children:"--bs-border-radius"}),", ",e.jsx(r.code,{children:"--bs-border-radius-sm"}),", ",e.jsx(r.code,{children:"--bs-border-radius-lg"}),", ",e.jsx(r.code,{children:"--bs-border-radius-xl"}),", ",e.jsx(r.code,{children:"--bs-border-radius-xxl"}),", ",e.jsx(r.code,{children:"--bs-border-radius-pill"})]}),`
`,e.jsxs(r.li,{children:["Border: ",e.jsx(r.code,{children:"--bs-border-width"}),", ",e.jsx(r.code,{children:"--bs-border-style"}),", ",e.jsx(r.code,{children:"--bs-border-color"}),", ",e.jsx(r.code,{children:"--bs-border-color-translucent"})]}),`
`,e.jsxs(r.li,{children:["Shadows: ",e.jsx(r.code,{children:"--bs-box-shadow"}),", ",e.jsx(r.code,{children:"--bs-box-shadow-sm"}),", ",e.jsx(r.code,{children:"--bs-box-shadow-lg"})]}),`
`,e.jsxs(r.li,{children:["Focus ring: ",e.jsx(r.code,{children:"--bs-focus-ring-width"}),", ",e.jsx(r.code,{children:"--bs-focus-ring-opacity"}),", ",e.jsx(r.code,{children:"--bs-focus-ring-border-color"}),", ",e.jsx(r.code,{children:"--bs-focus-ring-color"})]}),`
`]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
  --bs-border-radius: .5rem;
  --bs-border-radius-lg: .75rem;
  --bs-box-shadow: 0 2px 8px rgba(0,0,0,.08);
  --bs-focus-ring-width: 2px;
  --bs-focus-ring-opacity: .35;
  --bs-focus-ring-border-color: #0b74ff;
}
`})}),e.jsx(r.h4,{id:"border-variables-full-list",children:"Border variables (full list)"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
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
`})}),e.jsx("br",{}),e.jsx(r.h2,{id:"component-tokens-examples",children:"Component tokens (examples)"}),e.jsx(r.p,{children:"Many component styles are derived from the core variables, but some expose specific tokens:"}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Buttons: variant tokens are generated off theme colors; customize via core color variables and (optionally) component CSS vars like --bs-btn-border-radius"}),`
`,e.jsx(r.li,{children:"Alerts/Badges: read semantic tokens and bg-subtle/border-subtle"}),`
`,e.jsx(r.li,{children:"Forms: validation colors map to --bs-form-valid-color/border-color, --bs-form-invalid-color/border-color"}),`
`]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* Optional per-component tweak */
:root {
  --bs-btn-border-radius: var(--bs-border-radius-lg);
}
`})}),e.jsx("br",{}),e.jsx(r.h2,{id:"zones",children:"Zones"}),e.jsxs(r.p,{children:["A zone is a subtree with its own palette: ",e.jsx(r.code,{children:'[data-bs-theme="<name>"]'})," on any element, such as a dark header or a branded banner in a light app. Dynamic is compiled with Bootstrap's color modes turned off (",e.jsx(r.code,{children:"$enable-dark-mode: false"}),"), so there is no global dark scheme to switch on: a dark area is a zone, and it inherits from ",e.jsx(r.code,{children:":root"})," everything it doesn't declare. The ",e.jsx(r.code,{children:"dark:"})," utilities do follow the system preference, but each one only changes the element it is applied to; they don't redefine tokens and are not a dark scheme (see ",e.jsx(r.a,{href:"?path=/docs/design-system-examples-dark-utilities--docs",children:"Dark Utilities"}),")."]}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Declare the triplet and the wrapper."})," A custom property is computed on the element that declares it and inherited already resolved: the library declares ",e.jsx(r.code,{children:"--bs-body-color: rgb(var(--bs-body-color-rgb))"})," on ",e.jsx(r.code,{children:":root"}),", so a zone that only changes the triplet doesn't move anything that reads the wrapper."]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* ❌ Only the triplets: the wrappers keep the :root values, and the zone looks like the rest of the page */
[data-bs-theme="night"] {
  --bs-body-bg-rgb: 17, 24, 39;
  --bs-body-color-rgb: var(--bs-white-rgb);
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}

/* ✅ The triplet and its wrapper */
[data-bs-theme="night"] {
  --bs-body-bg-rgb: 17, 24, 39;
  --bs-body-bg: rgb(17, 24, 39);
  --bs-body-color-rgb: var(--bs-white-rgb);
  --bs-body-color: rgb(var(--bs-white-rgb));
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}
`})}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"A minimal zone."})," The zone declares the body and surface colors as triplet and wrapper, the variables that have no triplet (",e.jsx(r.code,{children:"--bs-border-color"}),", ",e.jsx(r.code,{children:"--bs-heading-color"}),"), and the link colors as triplet and wrapper: plain links read the triplet, ",e.jsx(r.code,{children:".btn-link"})," reads the wrapper. The library applies ",e.jsx(r.code,{children:"--bs-body-bg"})," and ",e.jsx(r.code,{children:"--bs-body-color"})," on ",e.jsx(r.code,{children:"body"}),", so the zone paints itself with ",e.jsx(r.code,{children:"color"})," and ",e.jsx(r.code,{children:"background-color"}),". Components with their own colors get a block in the zone:"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
  --bs-body-bg-rgb: 248, 249, 251;
  --bs-body-color-rgb: var(--bs-gray-900-rgb);
  --bs-border-color: rgb(var(--bs-gray-100-rgb));
  --bs-secondary-bg-rgb: var(--bs-gray-50-rgb);
  --bs-tertiary-bg-rgb: var(--bs-gray-25-rgb);
}

[data-bs-theme="night"] {
  --bs-body-bg-rgb: 17, 24, 39;
  --bs-body-bg: rgb(17, 24, 39);
  --bs-body-color-rgb: var(--bs-white-rgb);
  --bs-body-color: rgb(var(--bs-white-rgb));
  --bs-secondary-bg-rgb: var(--bs-gray-800-rgb);
  --bs-secondary-bg: rgb(var(--bs-gray-800-rgb));
  --bs-tertiary-bg-rgb: var(--bs-gray-900-rgb);
  --bs-tertiary-bg: rgb(var(--bs-gray-900-rgb));
  --bs-secondary-color-rgb: var(--bs-white-rgb);
  --bs-secondary-color: rgba(var(--bs-white-rgb), .75);
  --bs-tertiary-color-rgb: var(--bs-white-rgb);
  --bs-tertiary-color: rgba(var(--bs-white-rgb), .5);
  --bs-emphasis-color-rgb: var(--bs-white-rgb);
  --bs-emphasis-color: rgb(var(--bs-white-rgb));
  --bs-heading-color: rgb(var(--bs-white-rgb));
  --bs-border-color: rgba(var(--bs-white-rgb), .15);
  --bs-link-color-rgb: var(--bs-primary-300-rgb);
  --bs-link-color: rgb(var(--bs-primary-300-rgb));
  --bs-link-hover-color-rgb: var(--bs-primary-200-rgb);
  --bs-link-hover-color: rgb(var(--bs-primary-200-rgb));
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}

[data-bs-theme="night"] .nav {
  --bs-nav-link-color: rgb(var(--bs-white-rgb));
  --bs-nav-link-hover-color: rgb(var(--bs-primary-200-rgb));
}

[data-bs-theme="night"] .btn-primary {
  --bs-btn-color: rgb(var(--bs-gray-900-rgb));
  --bs-btn-bg: rgb(var(--bs-primary-200-rgb));
  --bs-btn-border-color: rgb(var(--bs-primary-200-rgb));
  --bs-btn-hover-color: rgb(var(--bs-gray-900-rgb));
  --bs-btn-hover-bg: rgb(var(--bs-primary-100-rgb));
  --bs-btn-hover-border-color: rgb(var(--bs-primary-100-rgb));
  --bs-btn-active-color: rgb(var(--bs-gray-900-rgb));
  --bs-btn-active-bg: rgb(var(--bs-primary-300-rgb));
  --bs-btn-active-border-color: rgb(var(--bs-primary-300-rgb));
}

[data-bs-theme="night"] .list-group {
  --bs-list-group-color: rgb(var(--bs-body-color-rgb));
  --bs-list-group-bg: transparent;
  --bs-list-group-action-color: rgb(var(--bs-body-color-rgb));
  --bs-list-group-border-color: var(--bs-border-color);
}
`})}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"What a zone doesn't change without its own block."})," The text, background and links of the zone follow it, and so do ",e.jsx(r.code,{children:".text-body-secondary"})," and ",e.jsx(r.code,{children:".popover-header"}),", because the zone declares the wrappers they read (",e.jsx(r.code,{children:"--bs-secondary-color"}),", ",e.jsx(r.code,{children:"--bs-secondary-bg"}),"). ",e.jsx(r.code,{children:".alert-<role>"})," and ",e.jsx(r.code,{children:".text-bg-<role>"})," keep their ",e.jsx(r.code,{children:":root"})," colors on their own background. Without a block of their own:"]}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:".nav"})," links and ",e.jsx(r.code,{children:".list-group"})," items keep the ",e.jsx(r.code,{children:":root"})," text color, dark on the dark zone. ",e.jsx(r.code,{children:".nav-pills"})," reads its own variables, which don't reach from ",e.jsx(r.code,{children:".nav"}),", so it needs a separate block."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:".btn-<role>"})," keeps its ",e.jsx(r.code,{children:":root"})," colors, because the zone doesn't change the role triplets."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:".form-control"}),", ",e.jsx(r.code,{children:".form-select"})," and ",e.jsx(r.code,{children:".modal"})," keep their light surface and inherit the zone's text: white on white. Give each one a block with a readable text color or a dark surface."]}),`
`]}),e.jsxs(r.p,{children:[e.jsx(r.code,{children:"npm run theme:expand"})," writes a zone, its ",e.jsx(r.code,{children:"color"})," and ",e.jsx(r.code,{children:"background-color"}),", and the component blocks from the ",e.jsx(r.code,{children:"zones"})," section of a theme file. ",e.jsx(r.code,{children:"npm run theme:validate"})," measures each zone against its own background and assumes that background for everything inside it, so it doesn't catch a component with its own surface, such as ",e.jsx(r.code,{children:".form-control"}),": check those in the preview (",e.jsx(r.code,{children:"npm run theme:preview"}),"). The full reference is in ",e.jsx(r.code,{children:"scripts/theme/README.md"}),"."]}),e.jsx("br",{}),e.jsx(r.h2,{id:"theming-workflow-recommended",children:"Theming workflow (recommended)"}),e.jsxs(r.ol,{children:[`
`,e.jsx(r.li,{children:"Define brand color palette (primary/success/warning/danger/info/secondary + tints 25–900)."}),`
`,e.jsx(r.li,{children:"Set typography: body family/size, heading/display scales, small text, line-heights."}),`
`,e.jsx(r.li,{children:"Tune spacing scale and component gaps using --bs-ref-spacer-*."}),`
`,e.jsx(r.li,{children:"Adjust radius, borders, shadows, focus tokens for personality and accessibility."}),`
`,e.jsxs(r.li,{children:["Theme dark or branded subtrees as ",e.jsx(r.a,{href:"#zones",children:"zones"}),"; there is no global dark scheme. Validate contrast."]}),`
`,e.jsxs(r.li,{children:["Verify utilities (fs-",e.jsx(r.em,{children:", display-"}),", text-",e.jsx(r.em,{children:", bg-"}),", border-*) reflect your overrides."]}),`
`]}),e.jsx("br",{}),e.jsx(r.h2,{id:"bootstrapping-a-theme-copy-paste-starter",children:"Bootstrapping a theme (copy-paste starter)"}),e.jsx(r.p,{children:"There are two ways to start, and they don't mix: copying both would duplicate declarations."}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Generated:"})," ",e.jsx(r.code,{children:"npm run theme:expand"})," writes a complete stylesheet from a theme file. From one color per role it writes the base triplet, the ramp of the roles that have one (25 to 900, with 500 as an alias of the base; all but ",e.jsx(r.code,{children:"light"})," and ",e.jsx(r.code,{children:"dark"}),") and ",e.jsx(r.code,{children:"--bs-<role>-text-bg-color"})," for every role but ",e.jsx(r.code,{children:"secondary"}),", which reads its ramp; it also writes body colors, font family and radius, which a complete theme file requires (a roles-only file emits only the role blocks), and only the type scale steps the file lists (",e.jsx(r.code,{children:"typography.scale"})," is optional). Global additions (spacing, shadows) go in the file's ",e.jsx(r.code,{children:"root"})," section, which is emitted in the root block at every width. A subtree with its own palette goes in ",e.jsx(r.code,{children:"zones"})," (see ",e.jsx(r.a,{href:"#zones",children:"Zones"}),"). See ",e.jsx(r.code,{children:"scripts/theme/README.md"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Hand-written:"})," the starter below. It has no role colors; copy each role's full block (as in ",e.jsx(r.a,{href:"#color-system",children:"Color system"}),") or take it from the ",e.jsx(r.code,{children:"theme:expand"})," output."]}),`
`]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`/* Global theme */
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
`})})]})]})}function p(s={}){const{wrapper:r}={...o(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{p as default};
