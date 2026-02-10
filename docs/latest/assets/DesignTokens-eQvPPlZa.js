import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-6DR_JpXV.js";import{M as d}from"./blocks-fYHutVNA.js";import"./iframe-BMeNOU03.js";import"./preload-helper-Dp1pzeXC.js";import"./index-yVdt6xC3.js";import"./index-Dqbu3ppb.js";function n(r){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Design System/Foundations/Design Tokens"}),`
`,e.jsxs("div",{className:"inline-story sb-unstyled",style:{fontFamily:"var(--bs-body-font-family)"},children:[e.jsx(s.h1,{id:"design-tokens",children:"Design Tokens"}),e.jsxs(s.p,{children:["Dynamic Framework builds on Bootstrap 5 and exposes a robust set of CSS variables and Sass tokens to craft brand themes. Prefer overriding CSS variables at runtime for theming, and use Sass variables for build-time defaults when shipping a custom bundle. Official documentation is available at ",e.jsx(s.a,{href:"https://docs.modyo.com",rel:"nofollow",children:"https://docs.modyo.com"}),"."]}),e.jsx("br",{}),e.jsx(s.h2,{id:"principles",children:"Principles"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Scope overrides: use ",e.jsx(s.code,{children:":root"})," for global themes, ",e.jsx(s.code,{children:'[data-bs-theme="brand"]'})," or ",e.jsx(s.code,{children:"body.brand"})," for app-specific, and ",e.jsx(s.code,{children:".dark"})," or ",e.jsx(s.code,{children:"prefers-color-scheme"})," for dark mode."]}),`
`,e.jsx(s.li,{children:"Change variables, not classes: utilities and components read from CSS variables; overriding variables updates the whole system consistently."}),`
`,e.jsx(s.li,{children:"Validate contrast: ensure WCAG AA for text/background, borders, and focus rings."}),`
`]}),e.jsx("br",{}),e.jsx(s.h3,{id:"core-variables-what-to-override",children:"Core variables (what to override)"}),e.jsx(s.p,{children:"These variables drive components and utilities; override them to theme typography, colors, spacing, borders, shadows, and dark mode consistently."}),e.jsx(s.h4,{id:"typography",children:"Typography"}),e.jsx(s.p,{children:"Key CSS variables:"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Family and body: ",e.jsx(s.code,{children:"--bs-body-font-family"}),", ",e.jsx(s.code,{children:"--bs-body-font-size"}),", ",e.jsx(s.code,{children:"--bs-body-line-height"})]}),`
`,e.jsxs(s.li,{children:["Heading sizes: ",e.jsx(s.code,{children:"--bs-fs-1"})," … ",e.jsx(s.code,{children:"--bs-fs-6"})]}),`
`,e.jsxs(s.li,{children:["Display sizes: ",e.jsx(s.code,{children:"--bs-fs-display-1"})," … ",e.jsx(s.code,{children:"--bs-fs-display-6"})]}),`
`,e.jsxs(s.li,{children:["Small text: ",e.jsx(s.code,{children:"--bs-fs-small"}),"; line-heights: ",e.jsx(s.code,{children:"--bs-lh-sm"}),", ",e.jsx(s.code,{children:"--bs-lh-base"}),", ",e.jsx(s.code,{children:"--bs-lh-lg"})]}),`
`,e.jsxs(s.li,{children:["Heading line-height: ",e.jsx(s.code,{children:"--bs-heading-line-height"})]}),`
`]}),e.jsx(s.p,{children:"Example:"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  --bs-body-font-family: "Jost", system-ui, sans-serif; /* or your brand font */
  --bs-body-font-size: 1rem; /* base body size */
  --bs-fs-1: 3rem; /* h1 */
  --bs-fs-2: 2.5rem;
  --bs-fs-3: 2rem;
  --bs-fs-4: 1.5rem;
  --bs-fs-5: 1.25rem;
  --bs-fs-6: 1rem;
  --bs-fs-small: .875rem; /* small text */
}
`})}),e.jsx(s.h4,{id:"typography-variables-headings-and-display",children:"Typography variables (headings and display)"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  /* Headings and body sizes */
  --bs-fs-1: 3rem;
  --bs-fs-2: 2.5rem;
  --bs-fs-3: 2rem;
  --bs-fs-4: 1.5rem;
  --bs-fs-5: 1.25rem;
  --bs-fs-6: 1rem;
  --bs-fs-small: .875rem;
  --bs-heading-line-height: 1.2;

  /* Display sizes */
  --bs-fs-display-1: 6rem;
  --bs-fs-display-2: 5.5rem;
  --bs-fs-display-3: 5rem;
  --bs-fs-display-4: 4.5rem;
  --bs-fs-display-5: 4rem;
  --bs-fs-display-6: 3.5rem;
}
`})}),e.jsx(s.h4,{id:"usage-examples",children:"Usage examples"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<h1 class="h1">Heading 1 (.h1)</h1>
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
`]}),e.jsx(s.p,{children:"Override with either RGB bases or direct colors:"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  /* Brand primaries */
  --bs-primary: #0b74ff;
  --bs-primary-100: #e5f0ff; /* light tint */
  --bs-success: #0c8a50;
  --bs-warning: #d99100;
  --bs-danger: #c83333;
  --bs-info: #0aa0c8;
  --bs-secondary: #5b6670;

  /* Body and links */
  --bs-body-color: #2e3438;
  --bs-body-bg: #ffffff;
  --bs-link-color: #0b74ff;
  --bs-link-hover-color: #095fd1;
}
`})}),e.jsx(s.h4,{id:"palette-variables-25900",children:"Palette variables (25–900)"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  /* Primary */
  --bs-primary-25: /* override */; --bs-primary-50: /* override */; --bs-primary-100: /* override */;
  --bs-primary-200: /* override */; --bs-primary-300: /* override */; --bs-primary-400: /* override */;
  --bs-primary-500: /* override */; --bs-primary-600: /* override */; --bs-primary-700: /* override */;
  --bs-primary-800: /* override */; --bs-primary-900: /* override */;

  /* Success */
  --bs-success-25: /* override */; --bs-success-50: /* override */; --bs-success-100: /* override */;
  --bs-success-200: /* override */; --bs-success-300: /* override */; --bs-success-400: /* override */;
  --bs-success-500: /* override */; --bs-success-600: /* override */; --bs-success-700: /* override */;
  --bs-success-800: /* override */; --bs-success-900: /* override */;

  /* Warning */
  --bs-warning-25: /* override */; --bs-warning-50: /* override */; --bs-warning-100: /* override */;
  --bs-warning-200: /* override */; --bs-warning-300: /* override */; --bs-warning-400: /* override */;
  --bs-warning-500: /* override */; --bs-warning-600: /* override */; --bs-warning-700: /* override */;
  --bs-warning-800: /* override */; --bs-warning-900: /* override */;

  /* Danger */
  --bs-danger-25: /* override */; --bs-danger-50: /* override */; --bs-danger-100: /* override */;
  --bs-danger-200: /* override */; --bs-danger-300: /* override */; --bs-danger-400: /* override */;
  --bs-danger-500: /* override */; --bs-danger-600: /* override */; --bs-danger-700: /* override */;
  --bs-danger-800: /* override */; --bs-danger-900: /* override */;

  /* Info */
  --bs-info-25: /* override */; --bs-info-50: /* override */; --bs-info-100: /* override */;
  --bs-info-200: /* override */; --bs-info-300: /* override */; --bs-info-400: /* override */;
  --bs-info-500: /* override */; --bs-info-600: /* override */; --bs-info-700: /* override */;
  --bs-info-800: /* override */; --bs-info-900: /* override */;

  /* Secondary */
  --bs-secondary-25: /* override */; --bs-secondary-50: /* override */; --bs-secondary-100: /* override */;
  --bs-secondary-200: /* override */; --bs-secondary-300: /* override */; --bs-secondary-400: /* override */;
  --bs-secondary-500: /* override */; --bs-secondary-600: /* override */; --bs-secondary-700: /* override */;
  --bs-secondary-800: /* override */; --bs-secondary-900: /* override */;
}
`})}),e.jsx(s.p,{children:"Dark mode (automatic and forced):"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@media (prefers-color-scheme: dark) {
  :root {
    --bs-body-bg: #0e1116;
    --bs-body-color: #e6e6e6;
    --bs-heading-color: #ffffff;
    --bs-link-color: #5ba8ff;
    --bs-link-hover-color: #8fc2ff;
    --bs-border-color: #2a2f36;
  }
}
.dark {
  --bs-body-bg: #0e1116;
  --bs-body-color: #e6e6e6;
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
`,e.jsx(s.li,{children:"Define token pairs for light/dark to ensure consistent tints and emphasis colors."}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.dark {
  --bs-secondary-bg: #1b2129;
  --bs-secondary-color: rgba(230,230,230,.75);
  --bs-danger-100: #471c1c; /* dark tint variant */
}
`})}),e.jsx("br",{}),e.jsx(s.h2,{id:"theming-workflow-recommended",children:"Theming workflow (recommended)"}),e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Define brand color palette (primary/success/warning/danger/info/secondary + tints 25–900)."}),`
`,e.jsx(s.li,{children:"Set typography: body family/size, heading/display scales, small text, line-heights."}),`
`,e.jsx(s.li,{children:"Tune spacing scale and component gaps using --bs-ref-spacer-*."}),`
`,e.jsx(s.li,{children:"Adjust radius, borders, shadows, focus tokens for personality and accessibility."}),`
`,e.jsx(s.li,{children:"Implement dark mode via prefers-color-scheme and .dark, validate contrast."}),`
`,e.jsxs(s.li,{children:["Verify utilities (fs-",e.jsx(s.em,{children:", display-"}),", text-",e.jsx(s.em,{children:", bg-"}),", border-*) reflect your overrides."]}),`
`]}),e.jsx("br",{}),e.jsx(s.h2,{id:"bootstrapping-a-theme-copy-paste-starter",children:"Bootstrapping a theme (copy-paste starter)"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* Global theme */
:root {
  /* Typography */
  --bs-body-font-family: "Jost", system-ui, sans-serif;
  --bs-body-font-size: 1rem;
  --bs-heading-line-height: 1.2;
  --bs-fs-small: .875rem;

  /* Color tokens */
  --bs-body-bg: #ffffff;
  --bs-body-color: #2e3438;
  --bs-primary: #0b74ff;
  --bs-success: #0c8a50;
  --bs-warning: #d99100;
  --bs-danger: #c83333;
  --bs-info: #0aa0c8;
  --bs-secondary: #5b6670;

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
    --bs-body-bg: #0e1116;
    --bs-body-color: #e6e6e6;
    --bs-border-color: #2a2f36;
  }
}
`})})]})]})}function m(r={}){const{wrapper:s}={...o(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{m as default};
