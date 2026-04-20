import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-ypIqu-Rn.js";import{M as r,U as t}from"./blocks-uCD6uGOp.js";import{D as a}from"./DAlert-CH2-PfrX.js";import"./iframe-DzUt-hmA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DPeSPgHT.js";import"./index-BeUCTf5O.js";import"./index-FBYaOunh.js";import"./DIcon-CflnbPoX.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-CMxOr_Bo.js";import"./DContext-BWXROE2e.js";function o(s){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Design System/Foundations/CSS Distribution"}),`
`,e.jsxs("div",{className:"inline-story sb-unstyled",style:{fontFamily:"var(--bs-body-font-family)"},children:[e.jsx(n.h1,{id:"css-distribution--customization",children:"CSS Distribution & Customization"}),e.jsx(t,{children:e.jsx(a,{color:"info",children:e.jsxs(n.p,{children:["Starting from version 2.3.0, only ",e.jsx(n.code,{children:"dynamic-ui.css"})," and ",e.jsx(n.code,{children:"dynamic-ui.min.css"}),` are distributed.
The previous variants `,e.jsx(n.code,{children:"dynamic-ui-root.css"})," and ",e.jsx(n.code,{children:"dynamic-ui-non-root.css"}),`
have been removed to simplify upgrades and avoid desynchronization issues.`]})})}),e.jsx(n.h3,{id:"how-to-customize",children:"How to Customize"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Include the main CSS:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="stylesheet" href="/path/to/dynamic-ui.css" />
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Override variables:"}),`
Add your own stylesheet or snippet after the main CSS to override any design tokens or variables:`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --bs-primary: #ff0055;
  --bs-body-font-family: 'Montserrat', sans-serif;
  /* ...other overrides... */
}
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Safe upgrades:"}),`
All default variables are included in the main bundle, so new tokens are available automatically and removed ones do not break the theme.`]}),`
`]}),e.jsx("br",{}),e.jsx(n.h3,{id:"example-custom-theme-snippet",children:"Example: Custom Theme Snippet"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="stylesheet" href="/path/to/dynamic-ui.css" />
<style>
  :root {
    --bs-primary: #ff0055;
    --bs-body-font-family: 'Montserrat', sans-serif;
    --bs-body-bg: #f5f5f5;
    --bs-border-radius: 0.75rem;
  }
</style>
`})}),e.jsx("br",{}),e.jsx(n.h3,{id:"migration-guide",children:"Migration Guide"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If you previously used ",e.jsx(n.code,{children:"dynamic-ui-root.css"})," or ",e.jsx(n.code,{children:"dynamic-ui-non-root.css"}),", switch to ",e.jsx(n.code,{children:"dynamic-ui.css"})," and apply your overrides as shown above."]}),`
`,e.jsxs(n.li,{children:["For advanced theming, refer to the ",e.jsx(n.a,{href:"?path=/docs/design-system-foundations-design-tokens--docs",children:"Design Tokens"})," page and ",e.jsx(n.a,{href:"https://docs.modyo.com/en/dynamic/",rel:"nofollow",children:"docs.modyo.com"}),"."]}),`
`]}),e.jsx("br",{}),e.jsx(n.h3,{id:"faq",children:"FAQ"}),e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Q: What happens if there are two ",e.jsx(n.code,{children:":root"})," blocks?"]}),`
`,e.jsx("br",{}),"A: The last one loaded wins for each variable, thanks to CSS cascade. You can safely override any token after loading the main CSS."]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q: How do I keep my theme up to date?"}),`
`,e.jsx("br",{}),"A: Since all tokens are included in the main bundle, you only need to override what you want. New tokens are available automatically after upgrades."]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Q: Where can I find a list of available tokens?"}),`
`,e.jsx("br",{}),"A: See the ",e.jsx(n.a,{href:"?path=/docs/design-system-foundations-design-tokens--docs",children:"Design Tokens"})," page or Storybook for a visual reference."]}),e.jsx("br",{})]})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{v as default};
