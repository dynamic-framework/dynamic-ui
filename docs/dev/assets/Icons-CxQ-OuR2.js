import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Ccd_3YU0.js";import{M as l,c as i}from"./blocks-D_Rgh6MF.js";import"./iframe-DLbf3qKv.js";import"./index-BpFZy5MA.js";import"./index-wK-VFbMZ.js";function t(o){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Design System/Examples/Icons"}),`
`,e.jsx(n.h2,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DIcon"})," component is a versatile icon component that can be configured to use different icon fonts. It supports both traditional icon fonts and material-style icon fonts."]}),`
`,e.jsx(n.h3,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DIcon"})," component is configured using the ",e.jsx(n.code,{children:"DContextProvider"}),". The ",e.jsx(n.code,{children:"DContextProvider"})," accepts an ",e.jsx(n.code,{children:"icon"})," object with the following properties:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"familyPrefix"}),": The prefix for the icon class (e.g., ",e.jsx(n.code,{children:"bi-"})," for Bootstrap)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"familyClass"}),": The class for the icon family (e.g., ",e.jsx(n.code,{children:"bi-icon"})," for Bootstrap icons)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"materialStyle"}),": A boolean flag that determines how the icon is rendered. If ",e.jsx(n.code,{children:"true"}),", the icon is rendered with the name of the icon in the content of the tag. If ",e.jsx(n.code,{children:"false"}),", the icon is rendered with the class of the icon font."]}),`
`]}),`
`,e.jsx(i,{code:`
<DContextProvider
icon={{
  familyClass: 'bi',
  familyPrefix: 'bi-',
  materialStyle: false,
}}
>
<DIcon name="user" />
</DContextProvider>
`,language:"html"}),`
`,e.jsx(n.h3,{id:"material-style-flag",children:"Material Style Flag"}),`
`,e.jsx(n.p,{children:"This flag comes in handy when you have icon fonts that need to be included as the content of the tag."}),`
`,e.jsxs(n.p,{children:["Following example show the output of ",e.jsx(n.code,{children:"DIcon"})," component with and without the ",e.jsx(n.code,{children:"materialStyle"})," flag."]}),`
`,e.jsx(i,{code:`
// Disabled Material Style Flag (default)
<i class="bi bi-user"></i>
`,language:"html"}),`
`,e.jsx(i,{code:`
// Enabled Material Style Flag
<i class="bi">user</i>
`,language:"html"}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(n.h4,{id:"font-awesome-icons",children:"Font Awesome Icons"}),`
`,e.jsxs(n.p,{children:["To use Font Awesome icons, configure the ",e.jsx(n.code,{children:"DContextProvider"})," as follows:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<DContextProvider
  icon={{
    familyPrefix: 'fa-',
    familyClass: 'fa-solid',
    materialStyle: false,
  }}
>
  <DIcon name="user" />
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
  <DIcon name="user" />
</DContextProvider>
`})})]})}function f(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{f as default};
