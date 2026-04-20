import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{D as A}from"./DButtonIcon-C_K0iV6K.js";import{P as t}from"./config-C3iYXcFk.js";import{b as T,I as $,c as I,T as C,a as _}from"./constants-CkChkWbF.js";import{D as z}from"./DContext-LhrApuD2.js";import"./iframe-n9SpF7Fs.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BqTa4fxN.js";import"./DIcon-Bu75zj-A.js";import"./useMediaBreakpointUp-BfuLQG5q.js";import"./index-NcM7WU8J.js";import"./index-7LxHWJGT.js";const j={title:"Design System/Components/Button Icon",component:A,parameters:{docs:{description:{component:`
> We work with button variables at two levels, variables in root per variant (default, outline, link)
>and internal variables in each button that use the previous ones.

> - in the root there are variables for color (\`--bs-primary\`, \`--bs-info\`, ...),
> - then variables for variant and color for buttons (\`--bs-btn-primary-color\`, \`--bs-btn-outline-hover-border-color\`, ...)
> - and finally for selectors by variant and color (\`.btn-primary\`, \`.btn-outline-info\`, ...)
>   we define internal variables (\`.btn-color\`, \`.btn-hover- bg\`, ...) that use the previous ones.


The style of our buttons is highly based on bootstrap, however,
boostrap darkens or lightens the color of a button to generate its different states,
we use the established palettes in the variables.

## Differences between bootstrap and our implementation:

### For our buttons:

#### normal
* **default** background \`-500\`, text contrast with background
* **hover** background \`-600\`, text contrast with background
* **focus** background \`-500\`, text contrast with background
* **active** background \`-700\`, text contrast with background
* **disabled** background \`-500\`, text contrast with background

#### outline
* **default** border-color \`-500\`, background transparent, text color \`-500\`
* **hover** border-color \`-500\`, background hover \`-100\`, text color \`-500\`
* **focus** border-color \`-500\`, background focus \`transparent\`, text color \`-500\`
* **active** border-color \`-700\`, background active \`-100\`, text color \`-700\`
* **disabled** border-color \`-500\`, background transparent, text color \`-500\`

### For bootstrap buttons:

#### normal
* **default** background \`-500\`, text contrast with background

> **mix-color**: The other states use the default color of the text to determine which color to mix with, if it is light, \`black\` is used, if it is dark, \`white\` is used.

* **hover** background mix between \`mix-color\` and \`-500\` at \`15%\`, text contrast with background color, border-color mix at \`20%\` for dark and \`10%\` for light.
* **focus** use hover settings with outline
* **active** background mix between \`mix-color\` and \`-500\` at \`20%\`, text contrast with background color, border-color mix at \`25%\` for dark and \`10%\` for light.
* **disabled** default style with \`.65\` opacity.

#### outline
* **default** border-color \`-500\`, text color \`-500\`
* **hover** border-color \`-500\`, background hover \`-500\`, text contrast with background
* **focus** use hover settings with outline
* **active** use hover settings
* **disabled** default style with \`.65\` opacity.

## CSS Variables

The Bootstrap documentation provides details on the default [Button CSS Variables](https://getbootstrap.com/docs/5.3/components/buttons/#css)

| Variable                             | Class | Type            | Description                     |
|--------------------------------------|-------|-----------------|---------------------------------|
| --${t}btn-padding-x          | .btn  | css length unit | Button padding horizontal       |
| --${t}btn-padding-y          | .btn  | css length unit | Button padding vertical         |
| --${t}btn-font-family        | .btn  | css font family | Button font family              |
| --${t}btn-font-size          | .btn  | css length unit | Button font size                |
| --${t}btn-font-weight        | .btn  | css weight unit | Button font weight              |
| --${t}btn-line-height        | .btn  | css length unit | Button line height              |
| --${t}btn-color              | .btn  | css color unit  | Button text color               |
| --${t}btn-bg                 | .btn  | css color unit  | Button background color         |
| --${t}btn-border-width       | .btn  | css length unit | Button border width             |
| --${t}btn-border-color       | .btn  | css color unit  | Button border color             |
| --${t}btn-hover-border-color | .btn  | css color unit  | Button hover border color       |
| --${t}btn-box-shadow         | .btn  | css box shadow  | Button box shadow               |
| --${t}btn-disabled-opacity   | .btn  | css length unit | Button link padding vertical    |
| --${t}btn-focus-box-shadow   | .btn  | css box shadow  | Button focus box shadow         |
| --${t}btn–text-decoration    | .btn  | text decoration | Button text decoration          |
| --${t}btn-lg-padding-x       | .btn  | css length unit | Button large padding horizontal |
| --${t}btn-lg-padding-y       | .btn  | css length unit | Button large padding vertical   |
| --${t}btn-lg-font-size       | .btn  | css length unit | Button large font size          |
| --${t}btn-sm-padding-x       | .btn  | css length unit | Button small padding horizontal |
| --${t}btn-sm-padding-y       | .btn  | css length unit | Button small padding vertical   |
| --${t}btn-sm-font-size       | .btn  | css length unit | Button small font size          |
| --${t}btn-border-radius      | :root | css length unit | Button border radius            |
| --${t}btn-lg-border-radius   | :root | css length unit | Button large border radius      |
| --${t}btn-sm-border-radius   | :root | css length unit | Button small border radius      |
        `}}},argTypes:{className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},id:{control:"text",type:"string",table:{category:"HTML Attributes"}},href:{control:"text",description:"If provided, renders as an &lt;a&gt; element instead of &lt;button&gt;.",table:{category:"HTML Attributes"}},target:{control:"select",options:[void 0,"_self","_blank","_parent","_top"],description:"Anchor target when href is set.",table:{category:"HTML Attributes"}},rel:{control:"text",description:'Anchor rel attribute (use "noopener noreferrer" with target="_blank").',table:{category:"HTML Attributes"}},color:{control:"select",options:C,table:{defaultValue:{summary:"primary"},category:"Appearance"}},size:{control:{type:"select"},type:"string",options:I,table:{category:"Appearance"}},type:{control:"select",type:"string",options:["submit","reset","button"],table:{defaultValue:{summary:"button"},category:"HTML Attributes"},description:"The html type of the button."},icon:{control:{type:"select",table:{defaultValue:{summary:"arrow-left"},category:"Icon"}},options:[void 0,...$]},iconFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},loading:{control:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"},type:"boolean"},disabled:{control:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"},type:"boolean"},loadingAriaLabel:{control:"text",type:"string",table:{category:"Content"}},state:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...T],type:"string",description:"Change the state of the button",table:{category:"Behavior"}},stopPropagationEnabled:{control:"boolean",table:{defaultValue:{summary:"true"},category:"Behavior"},type:"boolean"},onClick:{action:"onClick",table:{category:"Events"}},variant:{control:"select",options:[void 0,"outline","link"],table:{category:"Appearance"}}},tags:["autodocs"]},e={args:{color:"primary",size:void 0,type:"button",variant:void 0,loading:!1,icon:"ArrowLeft","aria-label":"Go back"}},r={args:{color:"secondary",size:void 0,type:"button",variant:"outline",loading:!1,icon:"ArrowLeft","aria-label":"Go back"}},n={args:{color:"secondary",size:void 0,type:"button",variant:"link",loading:!1,icon:"ArrowLeft","aria-label":"Go back"}},a={args:{color:"primary",icon:"ArrowRight",href:"https://dynamicframework.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"Open page in new tab"}},o={render:S=>s.jsx(z,{..._,children:s.jsx(A,{...S})}),args:{color:"primary",size:void 0,type:"button",loading:!1,icon:"arrow_back"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: undefined,
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back'
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,b,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    size: undefined,
    type: 'button',
    variant: 'outline',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back'
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var p,g,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    size: undefined,
    type: 'button',
    variant: 'link',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var m,f,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    icon: 'ArrowRight',
    href: 'https://dynamicframework.dev',
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': 'Open page in new tab'
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,w,x,k,B;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DButtonIcon>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DButtonIcon {...args} />
    </DContextProvider>,
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    loading: false,
    icon: 'arrow_back'
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:"To use buttons with Material Symbols style use a `DContextProvider` with `familyClass`\nand the flag `materialStyle=true` or use the flags directly over the\n`DButtonIcon` component as a props",...(B=(k=o.parameters)==null?void 0:k.docs)==null?void 0:B.description}}};const X=["Primary","Secondary","Link","AsAnchor","MaterialSecondaryIconRight"];export{a as AsAnchor,n as Link,o as MaterialSecondaryIconRight,e as Primary,r as Secondary,X as __namedExportsOrder,j as default};
