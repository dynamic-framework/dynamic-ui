import{j as o}from"./jsx-runtime-Yb_4y5hn.js";import{r as i}from"./index-BwDkhjyp.js";import{c as G}from"./index-ELyB7pIJ.js";import{D as U}from"./DIcon-NWah5INO.js";import{b as W,I as Z,c as J,T as K,a as Q}from"./constants-BfTaJ1B2.js";import{P as e}from"./config-BV4l-vIF.js";import{D as Y}from"./DContext-K5yUkfPZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Jr15HXM4.js";function c({id:r,icon:T,size:b,className:z,variant:p,state:n,loadingAriaLabel:h,iconMaterialStyle:N,ariaLabel:m,theme:f="primary",type:M="button",loading:t=!1,disabled:y=!1,stopPropagationEnabled:v=!0,style:A,iconFamilyClass:F,iconFamilyPrefix:L,dataAttributes:O,onClick:s}){const R=i.useMemo(()=>({"btn d-button-icon":!0,[p?`btn-${p}-${f}`:`btn-${f}`]:!0,...b&&{[`btn-${b}`]:!0},...n&&n!=="disabled"&&{[n]:!0},loading:t}),[p,f,b,n,t]),j=i.useCallback(g=>{v&&g.stopPropagation(),s==null||s(g)},[v,s]),H=i.useMemo(()=>n==="disabled"||t||y,[n,t,y]),X=i.useMemo(()=>t&&h||m,[m,t,h]);return o.jsx("button",{className:G(R,z),style:A,type:M,disabled:H,onClick:j,"aria-label":X,id:r,...O,children:t?o.jsx("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true",children:o.jsx("span",{className:"visually-hidden",children:"Loading..."})}):o.jsx(U,{icon:T,familyClass:F,familyPrefix:L,materialStyle:N})})}try{c.displayName="DButtonIcon",c.__docgenInfo={description:"",displayName:"DButtonIcon",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"link"'},{value:'"outline"'}]}},theme:{defaultValue:{value:"primary"},description:"",name:"theme",required:!1,type:{name:"string | undefined"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"active"'},{value:'"focus-visible"'},{value:'"hover"'}]}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingAriaLabel:{defaultValue:null,description:"",name:"loadingAriaLabel",required:!1,type:{name:"string | undefined"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string | undefined"}},stopPropagationEnabled:{defaultValue:{value:"true"},description:"",name:"stopPropagationEnabled",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined"}}}}}catch{}const de={title:"Design System/Components/Button Icon",component:c,parameters:{docs:{description:{component:`
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
| --${e}btn-padding-x          | .btn  | css length unit | Button padding horizontal       |
| --${e}btn-padding-y          | .btn  | css length unit | Button padding vertical         |
| --${e}btn-font-family        | .btn  | css font family | Button font family              |
| --${e}btn-font-size          | .btn  | css length unit | Button font size                |
| --${e}btn-font-weight        | .btn  | css weight unit | Button font weight              |
| --${e}btn-line-height        | .btn  | css length unit | Button line height              |
| --${e}btn-color              | .btn  | css color unit  | Button text color               |
| --${e}btn-bg                 | .btn  | css color unit  | Button background color         |
| --${e}btn-border-width       | .btn  | css length unit | Button border width             |
| --${e}btn-border-color       | .btn  | css color unit  | Button border color             |
| --${e}btn-hover-border-color | .btn  | css color unit  | Button hover border color       |
| --${e}btn-box-shadow         | .btn  | css box shadow  | Button box shadow               |
| --${e}btn-disabled-opacity   | .btn  | css length unit | Button link padding vertical    |
| --${e}btn-focus-box-shadow   | .btn  | css box shadow  | Button focus box shadow         |
| --${e}btn–text-decoration    | .btn  | text decoration | Button text decoration          |
| --${e}btn-lg-padding-x       | .btn  | css length unit | Button large padding horizontal |
| --${e}btn-lg-padding-y       | .btn  | css length unit | Button large padding vertical   |
| --${e}btn-lg-font-size       | .btn  | css length unit | Button large font size          |
| --${e}btn-sm-padding-x       | .btn  | css length unit | Button small padding horizontal |
| --${e}btn-sm-padding-y       | .btn  | css length unit | Button small padding vertical   |
| --${e}btn-sm-font-size       | .btn  | css length unit | Button small font size          |
| --${e}btn-border-radius      | :root | css length unit | Button border radius            |
| --${e}btn-lg-border-radius   | :root | css length unit | Button large border radius      |
| --${e}btn-sm-border-radius   | :root | css length unit | Button small border radius      |
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},id:{control:"text",type:"string"},ariaLabel:{control:"text",type:"string"},theme:{control:"select",type:{name:"string",required:!0},options:K,table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select",labels:{undefined:"default"}},type:"string",options:J},type:{control:"select",type:"string",options:["submit","reset","button"],table:{defaultValue:{summary:"button"}},description:"The html type of the button."},icon:{control:{type:"select",table:{defaultValue:{summary:"arrow-left"}}},options:[void 0,...Z]},iconFamilyClass:{control:"text",type:"string"},iconFamilyPrefix:{control:"text",type:"string"},iconMaterialStyle:{control:"boolean",type:"boolean"},loading:{control:"boolean",table:{defaultValue:{summary:"false"}},type:"boolean"},disabled:{control:"boolean",table:{defaultValue:{summary:"false"}},type:"boolean"},loadingAriaLabel:{control:"text",type:"string"},state:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...W],type:"string",description:"Change the state of the button"},stopPropagationEnabled:{control:"boolean",table:{defaultValue:{summary:"true"}},type:"boolean"},onClick:{action:"onClick"}},tags:["autodocs"]},l={args:{theme:"primary",size:void 0,type:"button",variant:void 0,loading:!1,icon:"arrow-left"}},d={args:{theme:"secondary",size:void 0,type:"button",variant:"outline",loading:!1,icon:"arrow-left"}},u={args:{theme:"secondary",size:void 0,type:"button",variant:"link",loading:!1,icon:"arrow-left"}},a={render:r=>o.jsx(Y,{...Q,children:o.jsx(c,{...r})}),args:{theme:"primary",size:void 0,type:"button",loading:!1,icon:"arrow_back"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var x,w,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    theme: 'primary',
    size: undefined,
    type: 'button',
    variant: undefined,
    loading: false,
    icon: 'arrow-left'
  }
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var B,V,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    theme: 'secondary',
    size: undefined,
    type: 'button',
    variant: 'outline',
    loading: false,
    icon: 'arrow-left'
  }
}`,...(S=(V=d.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var $,C,I;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    theme: 'secondary',
    size: undefined,
    type: 'button',
    variant: 'link',
    loading: false,
    icon: 'arrow-left'
  }
}`,...(I=(C=u.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var P,_,q,D,E;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DButtonIcon>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DButtonIcon {...args} />
    </DContextProvider>,
  args: {
    theme: 'primary',
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
}`,...(q=(_=a.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:"To use buttons with Material Symbols style use a `DContextProvider` with `familyClass`\nand the flag `materialStyle=true` or use the flags directly over the\n`DButtonIcon` component as a props",...(E=(D=a.parameters)==null?void 0:D.docs)==null?void 0:E.description}}};const ue=["Primary","Secondary","Link","MaterialSecondaryIconRight"];export{u as Link,a as MaterialSecondaryIconRight,l as Primary,d as Secondary,ue as __namedExportsOrder,de as default};
