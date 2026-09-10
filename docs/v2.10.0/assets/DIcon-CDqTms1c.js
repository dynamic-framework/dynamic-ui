import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DOE-a7Qz.js";import{M as j,U as c,k as t}from"./blocks-CRrI9CLz.js";import{D as i}from"./DIcon-Db41hg1i.js";import{D as r}from"./DContext-CWByZeTV.js";import"./iframe-B_Y9M-l-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cnk-UfrQ.js";import"./index-BwYFOMBQ.js";import"./index-72Ch5-Y2.js";import"./index-BPJnJB5S.js";import"./config-7dXXkQRG.js";import"./useMediaBreakpointUp-C7_Y8Dh0.js";function s({label:o,children:n}){const[x,l]=o.split(/\s*(?=\()/);return e.jsxs("div",{className:"d-flex flex-column align-items-center gap-2",style:{width:110},children:[n,e.jsxs("span",{className:"text-body-secondary text-center",style:{fontSize:12},children:[x,l&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),l]})]})]})}function h(o){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...o,children:[e.jsx("path",{d:"M12 2 L22 20 L2 20 Z"}),e.jsx("circle",{cx:"12",cy:"15",r:"2"})]})}const m={Logo:h};function p(){return e.jsxs("div",{className:"d-flex flex-wrap justify-content-center gap-4 p-4 my-3",children:[e.jsx(s,{label:'icon="User"',children:e.jsx(i,{icon:"User",size:"32px"})}),e.jsx(s,{label:'icon="Home"',children:e.jsx(i,{icon:"Home",size:"32px"})}),e.jsx(s,{label:'icon="Settings"',children:e.jsx(i,{icon:"Settings",size:"32px"})}),e.jsx(s,{label:'icon="Heart"',children:e.jsx(i,{icon:"Heart",size:"32px"})})]})}function u(){return e.jsx(r,{iconRegistry:m,children:e.jsxs("div",{className:"d-flex flex-wrap justify-content-center gap-4 p-4 my-3",children:[e.jsx(s,{label:'icon="Logo" (registry)',children:e.jsx(i,{icon:"Logo",size:"32px"})}),e.jsx(s,{label:'icon="User" (Lucide fallback)',children:e.jsx(i,{icon:"User",size:"32px"})})]})})}function g(){return e.jsx("div",{className:"d-flex flex-wrap justify-content-center gap-4 p-4 my-3",children:e.jsx(s,{label:"icon={LogoSvg}",children:e.jsx(i,{icon:h,size:"32px"})})})}function f(){return e.jsx(r,{icon:{familyClass:"bi",familyPrefix:"bi-",materialStyle:!1},children:e.jsxs("div",{className:"d-flex flex-wrap justify-content-center gap-4 p-4 my-3",children:[e.jsx(s,{label:'icon="alarm" (bi-alarm)',children:e.jsx(i,{icon:"alarm",size:"32px"})}),e.jsx(s,{label:'icon="gear" (bi-gear)',children:e.jsx(i,{icon:"gear",size:"32px"})}),e.jsx(s,{label:'icon="Home" (Lucide still wins)',children:e.jsx(i,{icon:"Home",size:"32px"})})]})})}function y(){return e.jsx(r,{icon:{familyClass:"material-symbols-outlined",familyPrefix:"",materialStyle:!0},children:e.jsxs("div",{className:"d-flex flex-wrap justify-content-center gap-4 p-4 my-3",children:[e.jsx(s,{label:'icon="alarm"',children:e.jsx(i,{icon:"alarm",size:"32px"})}),e.jsx(s,{label:'icon="settings"',children:e.jsx(i,{icon:"settings",size:"32px"})})]})})}function a(o){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Design System/Components/Icon/Usage"}),`
`,e.jsx(n.h2,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DIcon"})," component is a versatile icon component. It can render icons from four different sources."]}),`
`,e.jsxs(n.p,{children:["Passing an ",e.jsx(n.strong,{children:"SVG/React component"})," directly as the ",e.jsx(n.code,{children:"icon"})," prop always renders that component: the resolution below applies only to a ",e.jsx(n.strong,{children:"string"})," ",e.jsx(n.code,{children:"icon"}),", which is resolved in this order of priority:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"iconRegistry"})})," — a custom map of ",e.jsx(n.code,{children:"name -> SVG component"})," configured on ",e.jsx(n.code,{children:"DContextProvider"}),". A match replaces the string with its component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://lucide.dev",rel:"nofollow",children:"Lucide Icons"})})," — the default and recommended source. Pass the PascalCase name of any ",e.jsx(n.a,{href:"https://lucide.dev/icons/",rel:"nofollow",children:"Lucide icon"})," (e.g. ",e.jsx(n.code,{children:'"User"'}),", ",e.jsx(n.code,{children:'"Home"'}),", ",e.jsx(n.code,{children:'"Settings"'}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Legacy icon fonts"})," — Bootstrap-style class-based fonts, used as a fallback when the string doesn't match a registry entry or a Lucide icon name."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"materialStyle"})," flag is the exception to that order: when it's ",e.jsx(n.code,{children:"true"}),", every string ",e.jsx(n.code,{children:"icon"})," is rendered as Material-style icon-font content and Lucide is never consulted. ",e.jsx(n.code,{children:"iconRegistry"})," still wins, because a registry match turns the string into a component before that check."]}),`
`,e.jsxs(n.p,{children:["If a string resolves to none of the above and no icon font family is configured, ",e.jsx(n.code,{children:"DIcon"})," renders a ",e.jsx(n.code,{children:'"?"'})," placeholder and logs a console warning."]}),`
`,e.jsx(n.h3,{id:"lucide-icons-default",children:"Lucide Icons (default)"}),`
`,e.jsx(n.p,{children:"No configuration is required. Just use the PascalCase icon name:"}),`
`,e.jsx(c,{children:e.jsx(p,{})}),`
`,e.jsx(t,{code:`
<DIcon icon="User" />
<DIcon icon="Home" />
<DIcon icon="Settings" />
<DIcon icon="Heart" />
`,language:"jsx"}),`
`,e.jsxs(n.h3,{id:"custom-svg-registry-iconregistry",children:["Custom SVG Registry (",e.jsx(n.code,{children:"iconRegistry"}),")"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DContextProvider"})," accepts an ",e.jsx(n.code,{children:"iconRegistry"})," prop: a ",e.jsx(n.code,{children:"Record<string, IconComponent>"}),", where ",e.jsx(n.code,{children:"IconComponent"})," is ",e.jsx(n.code,{children:"ComponentType<SVGProps<SVGSVGElement>>"}),". This lets you plug in your own SVG icon components (e.g. a shared design-system icon set) and reference them by name, just like Lucide icons."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," ",e.jsx(n.code,{children:"iconRegistry"})," only works with SVG React components — it does ",e.jsx(n.strong,{children:"not"})," work with icon-font syntax (Bootstrap classes, Material icon names, Font Awesome, etc.). If you need custom icon fonts, use the ",e.jsx(n.code,{children:"icon"})," object on ",e.jsx(n.code,{children:"DContextProvider"})," (see below) instead."]}),`
`,e.jsx(t,{code:`
import type { SVGProps } from 'react';
import { DContextProvider, DIcon } from '@dynamic-framework/ui-react';

const MyIcons = {
Logo: (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="..." />
  </svg>
),
};

<DContextProvider iconRegistry={MyIcons}>
<DIcon icon="Logo" />
</DContextProvider>
`,language:"jsx"}),`
`,e.jsx(c,{children:e.jsx(u,{})}),`
`,e.jsxs(n.p,{children:["Note that names not found in the registry (like ",e.jsx(n.code,{children:'"User"'}),") still fall through to Lucide, since resolution order is preserved."]}),`
`,e.jsxs(n.p,{children:["You can also pass an SVG component directly as the ",e.jsx(n.code,{children:"icon"})," prop, without registering it:"]}),`
`,e.jsx(t,{code:`
<DIcon icon={MyIcons.Logo} />
`,language:"jsx"}),`
`,e.jsx(c,{children:e.jsx(g,{})}),`
`,e.jsx(n.h3,{id:"legacy-icon-fonts-bootstrap--material-style",children:"Legacy Icon Fonts (Bootstrap / Material style)"}),`
`,e.jsxs(n.p,{children:["When a string ",e.jsx(n.code,{children:"icon"})," isn't found in ",e.jsx(n.code,{children:"iconRegistry"})," and doesn't match a Lucide name, ",e.jsx(n.code,{children:"DIcon"})," falls back to class-based icon fonts. They are also used for every string ",e.jsx(n.code,{children:"icon"})," when ",e.jsx(n.code,{children:"materialStyle"})," is ",e.jsx(n.code,{children:"true"}),", which skips the Lucide lookup entirely. This is configured via the ",e.jsx(n.code,{children:"icon"})," object on ",e.jsx(n.code,{children:"DContextProvider"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"familyPrefix"}),": The prefix for the icon class (e.g., ",e.jsx(n.code,{children:"bi-"})," for Bootstrap)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"familyClass"}),": The class for the icon family (e.g., ",e.jsx(n.code,{children:"bi"})," for Bootstrap icons)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"materialStyle"}),": A boolean flag that determines how the icon is rendered. If ",e.jsx(n.code,{children:"true"}),", the icon name is rendered as the content of the tag (Material Icons style). If ",e.jsx(n.code,{children:"false"}),", the icon is rendered via a CSS class (Bootstrap/Font Awesome style)."]}),`
`]}),`
`,e.jsx(t,{code:`
<DContextProvider
icon={{
  familyClass: 'bi',
  familyPrefix: 'bi-',
  materialStyle: false,
}}
>
<DIcon icon="user" />
</DContextProvider>
`,language:"jsx"}),`
`,e.jsx(c,{children:e.jsx(f,{})}),`
`,e.jsx(n.h4,{id:"material-style-flag",children:"Material Style Flag"}),`
`,e.jsxs(n.p,{children:["This flag comes in handy when you have icon fonts that need to be included as the content of the tag. Keep in mind that it applies to every string ",e.jsx(n.code,{children:"icon"})," in its scope, so Lucide names are not resolved while it's enabled."]}),`
`,e.jsxs(n.p,{children:["The following examples show the output of the ",e.jsx(n.code,{children:"DIcon"})," component with and without the ",e.jsx(n.code,{children:"materialStyle"})," flag."]}),`
`,e.jsx(t,{code:`
// Disabled Material Style Flag (default)
<i class="bi bi-user"></i>
`,language:"html"}),`
`,e.jsx(t,{code:`
// Enabled Material Style Flag
<i class="material-symbols-outlined">user</i>
`,language:"html"}),`
`,e.jsx(c,{children:e.jsx(y,{})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Icons are ",e.jsx(n.strong,{children:"decorative by default"}),": every render path emits ",e.jsx(n.code,{children:'aria-hidden="true"'}),`,
so an icon never adds noise to the accessibility tree. This matters most for the
legacy icon-font paths, where the ligature name is the element's text content and
a screen reader would otherwise read it out loud — `,e.jsx(n.code,{children:'<i class="d-icon material-symbols-outlined">home</i>'}),`
announcing "home" next to your own label.`]}),`
`,e.jsxs(n.p,{children:["You do not need to wrap ",e.jsx(n.code,{children:"DIcon"}),` in a hidden container. Inside a control that
already carries its own accessible name — a `,e.jsx(n.code,{children:"DButton"}),` with a visible label, a
`,e.jsx(n.code,{children:"DButtonIcon"})," with its native ",e.jsx(n.code,{children:"aria-label"})," — this is all you need:"]}),`
`,e.jsx(t,{code:`
<DButtonIcon icon="Trash2" aria-label="Delete item" />
`,language:"html"}),`
`,e.jsxs(n.p,{children:[`For the rare icon that is the only carrier of meaning, give it a name with
`,e.jsx(n.code,{children:"ariaLabel"}),". That renders ",e.jsx(n.code,{children:'role="img"'})," and drops the default ",e.jsx(n.code,{children:"aria-hidden"}),":"]}),`
`,e.jsx(t,{code:`
<DIcon icon="CircleAlert" ariaLabel="Payment overdue" />
`,language:"html"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ariaHidden"})," is an explicit escape hatch. It is not symmetric with ",e.jsx(n.code,{children:"ariaLabel"}),`:
`,e.jsx(n.code,{children:"ariaHidden"}),` wins over a name, because hiding is absolute, while
`,e.jsx(n.code,{children:"ariaHidden={false}"})," next to an ",e.jsx(n.code,{children:"ariaLabel"}),` is not a conflict — both expose the
icon, so the name is kept.`]}),`
`,e.jsxs(n.p,{children:["Avoid ",e.jsx(n.code,{children:"ariaHidden={false}"}),` on its own: it exposes an unnamed graphic to assistive
technology, which is the one state worse than hiding the icon. Non-production
builds warn when you do.`]}),`
`,e.jsxs(n.p,{children:[`It reaches the icon itself, not just the wrapper, so a library icon that hides
its own `,e.jsx(n.code,{children:"<svg>"}),` follows suit. The exception is a registry component that
hardcodes `,e.jsx(n.code,{children:"aria-hidden"}),` instead of spreading the props it is given: nothing here
can reach inside it, so it stays hidden.`]}),`
`,e.jsxs(n.p,{children:["Note that ",e.jsx(n.code,{children:"DIcon"})," names ",e.jsx(n.em,{children:"itself"}),`. An icon-only control still needs its own name
on the control, since a hidden icon leaves it nothing to fall back on.
`,e.jsx(n.code,{children:"DButtonIcon"})," takes the native ",e.jsx(n.code,{children:"aria-label"}),`, and on its button branch
`,e.jsx(n.code,{children:"aria-labelledby"})," or ",e.jsx(n.code,{children:"title"}),` work too; with none of them the button ends up
unnamed, whatever the icon is.`]}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(n.h4,{id:"bootstrap-icons",children:"Bootstrap Icons"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<DContextProvider
  icon={{
    familyPrefix: 'bi-',
    familyClass: 'bi',
    materialStyle: false,
  }}
>
  <DIcon icon="user" />
</DContextProvider>
`})}),`
`,e.jsx(n.h4,{id:"font-awesome-icons",children:"Font Awesome Icons"}),`
`,e.jsxs(n.p,{children:["To use Font Awesome icons, configure the ",e.jsx(n.code,{children:"DContextProvider"})," as follows:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<DContextProvider
  icon={{
    familyPrefix: 'fa-',
    familyClass: 'fa-solid',
    materialStyle: false,
  }}
>
  <DIcon icon="user" />
</DContextProvider>
`})}),`
`,e.jsx(n.h4,{id:"material-icons",children:"Material Icons"}),`
`,e.jsxs(n.p,{children:["To use Material icons, configure the ",e.jsx(n.code,{children:"DContextProvider"})," as follows:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<DContextProvider
  icon={{
    familyPrefix: '',
    familyClass: 'material-symbols-outlined',
    materialStyle: true,
  }}
>
  <DIcon icon="user" />
</DContextProvider>
`})})]})}function B(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{B as default};
