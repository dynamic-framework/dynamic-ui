import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-CEPIcqt5.js";import{M as j,U as r,k as c}from"./blocks-Spid-ad0.js";import{D as s}from"./DIcon-ekCLf4cS.js";import{D as t}from"./DContext-CYga8oT4.js";import"./iframe-D2KSBTDy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DxklarVZ.js";import"./index-DKAz_JVG.js";import"./index-D9ZNrqU0.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-K3PrZFiL.js";function o({label:i,children:n}){const[x,l]=i.split(/\s*(?=\()/);return e.jsxs("div",{className:"d-flex flex-column align-items-center gap-2",style:{width:110},children:[n,e.jsxs("span",{className:"text-body-secondary text-center",style:{fontSize:12},children:[x,l&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),l]})]})]})}function h(i){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...i,children:[e.jsx("path",{d:"M12 2 L22 20 L2 20 Z"}),e.jsx("circle",{cx:"12",cy:"15",r:"2"})]})}const m={Logo:h};function p(){return e.jsxs("div",{className:"d-flex flex-wrap justify-content-center gap-4 p-4 my-3",children:[e.jsx(o,{label:'icon="User"',children:e.jsx(s,{icon:"User",size:"32px"})}),e.jsx(o,{label:'icon="Home"',children:e.jsx(s,{icon:"Home",size:"32px"})}),e.jsx(o,{label:'icon="Settings"',children:e.jsx(s,{icon:"Settings",size:"32px"})}),e.jsx(o,{label:'icon="Heart"',children:e.jsx(s,{icon:"Heart",size:"32px"})})]})}function f(){return e.jsx(t,{iconRegistry:m,children:e.jsxs("div",{className:"d-flex flex-wrap justify-content-center gap-4 p-4 my-3",children:[e.jsx(o,{label:'icon="Logo" (registry)',children:e.jsx(s,{icon:"Logo",size:"32px"})}),e.jsx(o,{label:'icon="User" (Lucide fallback)',children:e.jsx(s,{icon:"User",size:"32px"})})]})})}function g(){return e.jsx("div",{className:"d-flex flex-wrap justify-content-center gap-4 p-4 my-3",children:e.jsx(o,{label:"icon={LogoSvg}",children:e.jsx(s,{icon:h,size:"32px"})})})}function u(){return e.jsx(t,{icon:{familyClass:"bi",familyPrefix:"bi-",materialStyle:!1},children:e.jsxs("div",{className:"d-flex flex-wrap justify-content-center gap-4 p-4 my-3",children:[e.jsx(o,{label:'icon="alarm" (bi-alarm)',children:e.jsx(s,{icon:"alarm",size:"32px"})}),e.jsx(o,{label:'icon="gear" (bi-gear)',children:e.jsx(s,{icon:"gear",size:"32px"})}),e.jsx(o,{label:'icon="Home" (Lucide still wins)',children:e.jsx(s,{icon:"Home",size:"32px"})})]})})}function y(){return e.jsx(t,{icon:{familyClass:"material-symbols-outlined",familyPrefix:"",materialStyle:!0},children:e.jsxs("div",{className:"d-flex flex-wrap justify-content-center gap-4 p-4 my-3",children:[e.jsx(o,{label:'icon="alarm"',children:e.jsx(s,{icon:"alarm",size:"32px"})}),e.jsx(o,{label:'icon="settings"',children:e.jsx(s,{icon:"settings",size:"32px"})})]})})}function a(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Design System/Components/Icon/Usage"}),`
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
`,e.jsx(r,{children:e.jsx(p,{})}),`
`,e.jsx(c,{code:`
<DIcon icon="User" />
<DIcon icon="Home" />
<DIcon icon="Settings" />
<DIcon icon="Heart" />
`,language:"jsx"}),`
`,e.jsxs(n.h3,{id:"custom-svg-registry-iconregistry",children:["Custom SVG Registry (",e.jsx(n.code,{children:"iconRegistry"}),")"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DContextProvider"})," accepts an ",e.jsx(n.code,{children:"iconRegistry"})," prop: a ",e.jsx(n.code,{children:"Record<string, IconComponent>"}),", where ",e.jsx(n.code,{children:"IconComponent"})," is ",e.jsx(n.code,{children:"ComponentType<SVGProps<SVGSVGElement>>"}),". This lets you plug in your own SVG icon components (e.g. a shared design-system icon set) and reference them by name, just like Lucide icons."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," ",e.jsx(n.code,{children:"iconRegistry"})," only works with SVG React components — it does ",e.jsx(n.strong,{children:"not"})," work with icon-font syntax (Bootstrap classes, Material icon names, Font Awesome, etc.). If you need custom icon fonts, use the ",e.jsx(n.code,{children:"icon"})," object on ",e.jsx(n.code,{children:"DContextProvider"})," (see below) instead."]}),`
`,e.jsx(c,{code:`
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
`,e.jsx(r,{children:e.jsx(f,{})}),`
`,e.jsxs(n.p,{children:["Note that names not found in the registry (like ",e.jsx(n.code,{children:'"User"'}),") still fall through to Lucide, since resolution order is preserved."]}),`
`,e.jsxs(n.p,{children:["You can also pass an SVG component directly as the ",e.jsx(n.code,{children:"icon"})," prop, without registering it:"]}),`
`,e.jsx(c,{code:`
<DIcon icon={MyIcons.Logo} />
`,language:"jsx"}),`
`,e.jsx(r,{children:e.jsx(g,{})}),`
`,e.jsx(n.h3,{id:"legacy-icon-fonts-bootstrap--material-style",children:"Legacy Icon Fonts (Bootstrap / Material style)"}),`
`,e.jsxs(n.p,{children:["When a string ",e.jsx(n.code,{children:"icon"})," isn't found in ",e.jsx(n.code,{children:"iconRegistry"})," and doesn't match a Lucide name, ",e.jsx(n.code,{children:"DIcon"})," falls back to class-based icon fonts. They are also used for every string ",e.jsx(n.code,{children:"icon"})," when ",e.jsx(n.code,{children:"materialStyle"})," is ",e.jsx(n.code,{children:"true"}),", which skips the Lucide lookup entirely. This is configured via the ",e.jsx(n.code,{children:"icon"})," object on ",e.jsx(n.code,{children:"DContextProvider"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"familyPrefix"}),": The prefix for the icon class (e.g., ",e.jsx(n.code,{children:"bi-"})," for Bootstrap)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"familyClass"}),": The class for the icon family (e.g., ",e.jsx(n.code,{children:"bi"})," for Bootstrap icons)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"materialStyle"}),": A boolean flag that determines how the icon is rendered. If ",e.jsx(n.code,{children:"true"}),", the icon name is rendered as the content of the tag (Material Icons style). If ",e.jsx(n.code,{children:"false"}),", the icon is rendered via a CSS class (Bootstrap/Font Awesome style)."]}),`
`]}),`
`,e.jsx(c,{code:`
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
`,e.jsx(r,{children:e.jsx(u,{})}),`
`,e.jsx(n.h4,{id:"material-style-flag",children:"Material Style Flag"}),`
`,e.jsxs(n.p,{children:["This flag comes in handy when you have icon fonts that need to be included as the content of the tag. Keep in mind that it applies to every string ",e.jsx(n.code,{children:"icon"})," in its scope, so Lucide names are not resolved while it's enabled."]}),`
`,e.jsxs(n.p,{children:["The following examples show the output of the ",e.jsx(n.code,{children:"DIcon"})," component with and without the ",e.jsx(n.code,{children:"materialStyle"})," flag."]}),`
`,e.jsx(c,{code:`
// Disabled Material Style Flag (default)
<i class="bi bi-user"></i>
`,language:"html"}),`
`,e.jsx(c,{code:`
// Enabled Material Style Flag
<i class="material-symbols-outlined">user</i>
`,language:"html"}),`
`,e.jsx(r,{children:e.jsx(y,{})}),`
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
`})})]})}function z(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{z as default};
