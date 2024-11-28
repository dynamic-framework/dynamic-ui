import{j as l}from"./jsx-runtime-DQ32znRX.js";import{D as R}from"./DButton-BODyKEdz.js";import{T as L,b as O,I as d,c as V,a as F}from"./constants-DhWTmuJQ.js";import{P as t}from"./config-CUZHf55T.js";import{D as M}from"./DContext-9gKMeQXa.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-mLFX9G4A.js";import"./DIcon-CDY5yPx9.js";import"./index-D9uilScg.js";const J={title:"Design System/Components/Button",component:R,parameters:{docs:{description:{component:`
> We work with button variables at two levels, variables in root per variant (default, outline, link)
>and internal variables in each button that use the previous ones.

> - in the root there are variables for theme (\`--bs-primary\`, \`--bs-info\`, ...),
> - then variables for variant and theme for buttons (\`--bs-btn-primary-color\`, \`--bs-btn-outline-hover-border-color\`, ...)
> - and finally for selectors by variant and theme (\`.btn-primary\`, \`.btn-outline-info\`, ...)
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
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},id:{control:"text",type:"string"},form:{control:"text",type:"string"},ariaLabel:{control:"text",type:"string"},theme:{control:"select",type:{name:"string",required:!0},options:L,table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select",labels:{undefined:"default"}},type:"string",options:O},text:{control:"text",type:"string",description:"The text to display."},type:{control:"select",type:"string",options:["submit","reset","button"],table:{defaultValue:{summary:"button"}},description:"The html type of the button."},variant:{type:"string",control:{type:"select",labels:{undefined:"empty"}},options:[void 0,"outline","link"],description:"The variant to use."},iconStart:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...d]},iconStartDisabled:{control:"boolean",type:"boolean"},iconStartFamilyClass:{control:"text",type:"string"},iconStartFamilyPrefix:{control:"text",type:"string"},iconStartMaterialStyle:{control:"boolean",type:"boolean"},iconStartAriaLabel:{control:"text",type:"string"},iconStartTabIndex:{control:"number",type:"number"},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...d]},iconEndDisabled:{control:"boolean",type:"boolean"},iconEndFamilyClass:{control:"text",type:"string"},iconEndFamilyPrefix:{control:"text",type:"string"},iconEndMaterialStyle:{control:"boolean",type:"boolean"},iconEndAriaLabel:{control:"text",type:"string"},iconEndTabIndex:{control:"number",type:"number"},value:{control:"text",type:"string",description:"The html value of the button."},loading:{control:"boolean",table:{defaultValue:{summary:"false"}},type:"boolean"},disabled:{control:"boolean",table:{defaultValue:{summary:"false"}},type:"boolean"},loadingAriaLabel:{control:"text",type:"string"},state:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...V],type:"string",description:"Change the state of the button"},stopPropagationEnabled:{control:"boolean",table:{defaultValue:{summary:"true"}},type:"boolean"},onClick:{action:"onClick"}},tags:["autodocs"]},n={args:{theme:"primary",size:void 0,text:"Default",type:"button",variant:void 0,loading:!1,iconStart:void 0,iconEnd:void 0}},o={args:{theme:"primary",size:void 0,text:"Default",type:"button",variant:void 0,loading:!1,iconStart:void 0,iconEnd:"chevron-right"}},r={args:{theme:"secondary",size:void 0,text:"Default",type:"button",variant:"outline",loading:!1,iconStart:void 0,iconEnd:void 0}},a={args:{theme:"secondary",size:void 0,text:"Default",type:"button",variant:"outline",loading:!1,iconStart:void 0,iconEnd:"chevron-right"}},i={args:{theme:"secondary",size:void 0,text:"Default",type:"button",variant:"link",loading:!1,iconStart:void 0,iconEnd:void 0}},s={args:{theme:"secondary",size:void 0,text:"Default",type:"button",variant:"link",loading:!1,iconStart:void 0,iconEnd:"chevron-right"}},e={render:_=>l.jsx(M,{...F,children:l.jsx(R,{..._})}),args:{theme:"primary",size:void 0,text:"Default",type:"button",loading:!1,iconStart:void 0,iconEnd:"chevron_right"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var c,u,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: undefined,
    loading: false,
    iconStart: undefined,
    iconEnd: undefined
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var p,g,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: undefined,
    loading: false,
    iconStart: undefined,
    iconEnd: 'chevron-right'
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var m,f,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    theme: 'secondary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'outline',
    loading: false,
    iconStart: undefined,
    iconEnd: undefined
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,x,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    theme: 'secondary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'outline',
    loading: false,
    iconStart: undefined,
    iconEnd: 'chevron-right'
  }
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,w,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    theme: 'secondary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'link',
    loading: false,
    iconStart: undefined,
    iconEnd: undefined
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var B,D,z;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    theme: 'secondary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'link',
    loading: false,
    iconStart: undefined,
    iconEnd: 'chevron-right'
  }
}`,...(z=(D=s.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var T,$,C,I,P;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DButton>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DButton {...args} />
    </DContextProvider>,
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    loading: false,
    iconStart: undefined,
    iconEnd: 'chevron_right'
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(C=($=e.parameters)==null?void 0:$.docs)==null?void 0:C.source},description:{story:"To use buttons with Material Symbols style use a `DContextProvider` with `familyClass`\nand the flag `materialStyle=true` or use the flags directly over the\n`DButton` component as a props",...(P=(I=e.parameters)==null?void 0:I.docs)==null?void 0:P.description}}};const K=["Primary","PrimaryIconRight","Secondary","SecondaryIconRight","Link","LinkIconRight","MaterialSecondaryIconRight"];export{i as Link,s as LinkIconRight,e as MaterialSecondaryIconRight,n as Primary,o as PrimaryIconRight,r as Secondary,a as SecondaryIconRight,K as __namedExportsOrder,J as default};
