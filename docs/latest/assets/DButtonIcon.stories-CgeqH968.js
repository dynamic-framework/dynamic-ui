import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as r}from"./DButtonIcon-CHyF0fNe.js";import{P as e}from"./config-C3iYXcFk.js";import{b as z,I as O,c as _,T as a,a as M}from"./constants-CkChkWbF.js";import{D as V}from"./DContext-BbaizxMa.js";import"./iframe-DkjceUUU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtlKHQhD.js";import"./DIcon-CBkIH7ym.js";import"./useMediaBreakpointUp-C9viAbpR.js";import"./index-p6Xuepxi.js";import"./index-DxZ9-uFP.js";const Q={title:"Design System/Components/Button Icon",component:r,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},id:{control:"text",type:"string",table:{category:"HTML Attributes"}},href:{control:"text",description:"If provided, renders as an &lt;a&gt; element instead of &lt;button&gt;.",table:{category:"HTML Attributes"}},target:{control:"select",options:[void 0,"_self","_blank","_parent","_top"],description:"Anchor target when href is set.",table:{category:"HTML Attributes"}},rel:{control:"text",description:'Anchor rel attribute (use "noopener noreferrer" with target="_blank").',table:{category:"HTML Attributes"}},color:{control:"select",options:a,table:{defaultValue:{summary:"primary"},category:"Appearance"}},size:{control:{type:"select"},type:"string",options:_,table:{category:"Appearance"}},type:{control:"select",type:"string",options:["submit","reset","button"],table:{defaultValue:{summary:"button"},category:"HTML Attributes"},description:"The html type of the button."},icon:{control:{type:"select",table:{defaultValue:{summary:"arrow-left"},category:"Icon"}},options:[void 0,...O]},iconFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},loading:{control:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"},type:"boolean"},disabled:{control:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"},type:"boolean"},loadingAriaLabel:{control:"text",type:"string",table:{category:"Content"}},state:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...z],type:"string",description:"Change the state of the button",table:{category:"Behavior"}},stopPropagationEnabled:{control:"boolean",table:{defaultValue:{summary:"true"},category:"Behavior"},type:"boolean"},onClick:{action:"onClick",table:{category:"Events"}},variant:{control:"select",options:["solid","outline","link","soft"],table:{defaultValue:{summary:"solid"},category:"Appearance"}}},tags:["autodocs"]},i={args:{color:"primary",size:void 0,type:"button",variant:"solid",loading:!1,icon:"ArrowLeft","aria-label":"Go back"}},l={args:{color:"primary",size:void 0,type:"button",variant:"outline",loading:!1,icon:"ArrowLeft","aria-label":"Go back"}},s={args:{color:"primary",size:void 0,type:"button",variant:"link",loading:!1,icon:"ArrowLeft","aria-label":"Go back"}},c={args:{color:"primary",size:void 0,type:"button",variant:"soft",loading:!1,icon:"ArrowLeft","aria-label":"Go back"}},d={render:()=>t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"d-flex flex-column gap-4",children:[t.jsxs("h6",{children:["Solid",t.jsx("small",{className:"text-muted fw-normal",children:" (default variant)"})]}),t.jsx("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:a.filter(o=>o!=="light").map(o=>t.jsx(r,{color:o,icon:"ArrowLeft","aria-label":`Default or Solid ${o} icon button`},o))}),t.jsx("h6",{children:"Outline"}),t.jsx("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:a.filter(o=>o!=="light").map(o=>t.jsx(r,{color:o,variant:"outline",icon:"ArrowLeft","aria-label":`Outline ${o} icon button`},o))}),t.jsx("h6",{children:"Link"}),t.jsx("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:a.filter(o=>o!=="light").map(o=>t.jsx(r,{color:o,variant:"link",icon:"ArrowLeft","aria-label":`Link ${o} icon button`},o))}),t.jsx("h6",{children:"Soft"}),t.jsx("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:a.filter(o=>o!=="light").map(o=>t.jsx(r,{color:o,variant:"soft",icon:"ArrowLeft","aria-label":`Soft ${o} icon button`},o))})]}),t.jsx("hr",{className:"my-4"}),t.jsxs("div",{children:[t.jsx("p",{className:"mb-1 small",children:"The Light color for dark backgrounds"}),t.jsxs("div",{className:"d-flex gap-2 p-4 rounded",style:{background:"var(--bs-primary-800, #1a237e)"},children:[t.jsx(r,{variant:"solid",color:"light",icon:"ArrowLeft","aria-label":"Default or solid light icon button"}),t.jsx(r,{color:"light",variant:"outline",icon:"ArrowLeft","aria-label":"Outline light icon button"}),t.jsx(r,{color:"light",variant:"link",icon:"ArrowLeft","aria-label":"Link light icon button"}),t.jsx(r,{color:"light",variant:"soft",icon:"ArrowLeft","aria-label":"Soft light icon button"})]})]})]}),parameters:{docs:{description:{story:"All variants of icon button across semantic colors. Includes light variant on dark background for contrast validation."}}}},b={args:{color:"primary",icon:"ArrowRight",href:"https://dynamicframework.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"Open page in new tab"}},n={render:o=>t.jsx(V,{...M,children:t.jsx(r,{...o})}),args:{color:"primary",size:void 0,type:"button",loading:!1,icon:"arrow_back"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var u,g,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: 'solid',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back'
  }
}`,...(p=(g=i.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var f,m,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: 'outline',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back'
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var y,v,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: 'link',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back'
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,k,A;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: 'soft',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back'
  }
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var B,L,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <>
      <div className="d-flex flex-column gap-4">
        <h6>
          Solid
          <small className="text-muted fw-normal"> (default variant)</small>
        </h6>
        <div className="d-flex flex-wrap gap-2 align-items-center">
          {THEMES.filter(color => color !== 'light').map(color => <DButtonIcon key={color} color={color} icon="ArrowLeft" aria-label={\`Default or Solid \${color} icon button\`} />)}
        </div>
        <h6>Outline</h6>
        <div className="d-flex flex-wrap gap-2 align-items-center">
          {THEMES.filter(color => color !== 'light').map(color => <DButtonIcon key={color} color={color} variant="outline" icon="ArrowLeft" aria-label={\`Outline \${color} icon button\`} />)}
        </div>
        <h6>Link</h6>
        <div className="d-flex flex-wrap gap-2 align-items-center">
          {THEMES.filter(color => color !== 'light').map(color => <DButtonIcon key={color} color={color} variant="link" icon="ArrowLeft" aria-label={\`Link \${color} icon button\`} />)}
        </div>
        <h6>Soft</h6>
        <div className="d-flex flex-wrap gap-2 align-items-center">
          {THEMES.filter(color => color !== 'light').map(color => <DButtonIcon key={color} color={color} variant="soft" icon="ArrowLeft" aria-label={\`Soft \${color} icon button\`} />)}
        </div>
      </div>

      <hr className="my-4" />
      <div>
        <p className="mb-1 small">The Light color for dark backgrounds</p>
        <div className="d-flex gap-2 p-4 rounded" style={{
        background: 'var(--bs-primary-800, #1a237e)'
      }}>
          <DButtonIcon variant="solid" color="light" icon="ArrowLeft" aria-label="Default or solid light icon button" />
          <DButtonIcon color="light" variant="outline" icon="ArrowLeft" aria-label="Outline light icon button" />
          <DButtonIcon color="light" variant="link" icon="ArrowLeft" aria-label="Link light icon button" />
          <DButtonIcon color="light" variant="soft" icon="ArrowLeft" aria-label="Soft light icon button" />
        </div>
      </div>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'All variants of icon button across semantic colors. Includes light variant on dark background for contrast validation.'
      }
    }
  }
}`,...(S=(L=d.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var I,$,T;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    icon: 'ArrowRight',
    href: 'https://dynamicframework.dev',
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': 'Open page in new tab'
  }
}`,...(T=($=b.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var D,j,N,E,C;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.source},description:{story:"To use buttons with Material Symbols style use a `DContextProvider` with `familyClass`\nand the flag `materialStyle=true` or use the flags directly over the\n`DButtonIcon` component as a props",...(C=(E=n.parameters)==null?void 0:E.docs)==null?void 0:C.description}}};const Y=["Default","Outline","Link","Soft","VariantsByColor","AsAnchor","MaterialSecondaryIconRight"];export{b as AsAnchor,i as Default,s as Link,n as MaterialSecondaryIconRight,l as Outline,c as Soft,d as VariantsByColor,Y as __namedExportsOrder,Q as default};
