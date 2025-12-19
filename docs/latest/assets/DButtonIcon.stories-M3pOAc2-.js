import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{D as x}from"./DButtonIcon-DB_F37B5.js";import{P as t}from"./config-C3iYXcFk.js";import{b as k,I as B,c as $,T as S,a as C}from"./constants-CyI_OqvZ.js";import{D as T}from"./DContext-B51mLSx1.js";import"./iframe-Dy0Aerpt.js";import"./index-i7wJJAvU.js";import"./DIcon-Zg8O6yqK.js";import"./useMediaBreakpointUp-g52upMXj.js";import"./index-JejD5iQw.js";import"./index-aD47SrVq.js";const N={title:"Design System/Components/Button Icon",component:x,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},id:{control:"text",type:"string"},ariaLabel:{control:"text",type:"string"},color:{control:"select",options:S,table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},type:"string",options:$},type:{control:"select",type:"string",options:["submit","reset","button"],table:{defaultValue:{summary:"button"}},description:"The html type of the button."},icon:{control:{type:"select",table:{defaultValue:{summary:"arrow-left"}}},options:[void 0,...B]},iconFamilyClass:{control:"text",type:"string"},iconFamilyPrefix:{control:"text",type:"string"},iconMaterialStyle:{control:"boolean",type:"boolean"},loading:{control:"boolean",table:{defaultValue:{summary:"false"}},type:"boolean"},disabled:{control:"boolean",table:{defaultValue:{summary:"false"}},type:"boolean"},loadingAriaLabel:{control:"text",type:"string"},state:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...k],type:"string",description:"Change the state of the button"},stopPropagationEnabled:{control:"boolean",table:{defaultValue:{summary:"true"}},type:"boolean"},onClick:{action:"onClick"},variant:{control:"select",options:[void 0,"outline","link"]}},tags:["autodocs"]},e={args:{color:"primary",size:void 0,type:"button",variant:void 0,loading:!1,icon:"ArrowLeft"}},n={args:{color:"secondary",size:void 0,type:"button",variant:"outline",loading:!1,icon:"ArrowLeft"}},r={args:{color:"secondary",size:void 0,type:"button",variant:"link",loading:!1,icon:"ArrowLeft"}},o={render:w=>a.jsx(T,{...C,children:a.jsx(x,{...w})}),args:{color:"primary",size:void 0,type:"button",loading:!1,icon:"arrow_back"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var s,i,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: undefined,
    loading: false,
    icon: 'ArrowLeft'
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,d,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    size: undefined,
    type: 'button',
    variant: 'outline',
    loading: false,
    icon: 'ArrowLeft'
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,p,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    size: undefined,
    type: 'button',
    variant: 'link',
    loading: false,
    icon: 'ArrowLeft'
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,m,f,y,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source},description:{story:"To use buttons with Material Symbols style use a `DContextProvider` with `familyClass`\nand the flag `materialStyle=true` or use the flags directly over the\n`DButtonIcon` component as a props",...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};const M=["Primary","Secondary","Link","MaterialSecondaryIconRight"];export{r as Link,o as MaterialSecondaryIconRight,e as Primary,n as Secondary,M as __namedExportsOrder,N as default};
