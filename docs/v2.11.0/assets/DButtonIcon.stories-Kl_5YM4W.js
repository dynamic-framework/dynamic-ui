import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{D as r}from"./DButtonIcon-D0vB2VXg.js";import{P as e}from"./config-7dXXkQRG.js";import{c as W,I as Z,b as q,T as s,a as J}from"./constants-Cykb4qS-.js";import{D as K}from"./DContext-BsbKwSe9.js";import"./iframe-BOlGrI6L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DowJ8Qf7.js";import"./DIcon-CTNbRGzm.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-CBOESKxy.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";const bt={title:"Design System/Components/Button Icon",component:r,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},id:{control:"text",type:"string",table:{category:"HTML Attributes"}},href:{control:"text",description:"If provided, renders as an &lt;a&gt; element instead of &lt;button&gt;.",table:{category:"HTML Attributes"}},target:{control:"select",options:[void 0,"_self","_blank","_parent","_top"],description:"Anchor target when href is set.",table:{category:"HTML Attributes"}},rel:{control:"text",description:'Anchor rel attribute (use "noopener noreferrer" with target="_blank").',table:{category:"HTML Attributes"}},color:{control:"select",options:s,table:{defaultValue:{summary:"primary"},category:"Appearance"}},size:{control:{type:"select"},type:"string",options:q,table:{category:"Appearance"}},iconSize:{control:"text",description:"Size of the icon glyph: a CSS length (e.g. `\"1.5rem\"`) or a responsive object such as `{ xs: '1rem', lg: '2rem' }` (see the ResponsiveIconSize story; the control only edits the string form). Without it the glyph follows the button font size, which changes with `size`.",table:{type:{summary:"string | ResponsiveProp"},category:"Appearance"}},type:{control:"select",type:"string",options:["submit","reset","button"],table:{defaultValue:{summary:"button"},category:"HTML Attributes"},description:"The html type of the button."},icon:{control:{type:"select",table:{defaultValue:{summary:"arrow-left"},category:"Icon"}},options:[void 0,...Z]},iconFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},loading:{control:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"},type:"boolean"},disabled:{control:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"},type:"boolean"},loadingAriaLabel:{control:"text",type:"string",table:{category:"Content"}},state:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...W],type:"string",description:"Change the state of the button",table:{category:"Behavior"}},stopPropagationEnabled:{control:"boolean",table:{defaultValue:{summary:"true"},category:"Behavior"},type:"boolean"},onClick:{action:"onClick",table:{category:"Events"}},variant:{control:"select",options:["solid","outline","link","soft"],table:{defaultValue:{summary:"solid"},category:"Appearance"}}},tags:["autodocs"]},l={args:{color:"primary",size:void 0,type:"button",variant:"solid",loading:!1,icon:"ArrowLeft","aria-label":"Go back"}},c={args:{color:"primary",size:void 0,type:"button",variant:"outline",loading:!1,icon:"ArrowLeft","aria-label":"Go back"}},d={args:{color:"primary",size:void 0,type:"button",variant:"link",loading:!1,icon:"ArrowLeft","aria-label":"Go back"}},b={args:{color:"primary",size:void 0,type:"button",variant:"soft",loading:!1,icon:"ArrowLeft","aria-label":"Go back"}},u={render:()=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"d-flex flex-column gap-4",children:[o.jsxs("h6",{children:["Solid",o.jsx("small",{className:"text-muted fw-normal",children:" (default variant)"})]}),o.jsx("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:s.filter(t=>t!=="light").map(t=>o.jsx(r,{color:t,icon:"ArrowLeft","aria-label":`Default or Solid ${t} icon button`},t))}),o.jsx("h6",{children:"Outline"}),o.jsx("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:s.filter(t=>t!=="light").map(t=>o.jsx(r,{color:t,variant:"outline",icon:"ArrowLeft","aria-label":`Outline ${t} icon button`},t))}),o.jsx("h6",{children:"Link"}),o.jsx("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:s.filter(t=>t!=="light").map(t=>o.jsx(r,{color:t,variant:"link",icon:"ArrowLeft","aria-label":`Link ${t} icon button`},t))}),o.jsx("h6",{children:"Soft"}),o.jsx("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:s.filter(t=>t!=="light").map(t=>o.jsx(r,{color:t,variant:"soft",icon:"ArrowLeft","aria-label":`Soft ${t} icon button`},t))})]}),o.jsx("hr",{className:"my-4"}),o.jsxs("div",{children:[o.jsx("p",{className:"mb-1 small",children:"The Light color for dark backgrounds"}),o.jsxs("div",{className:"d-flex gap-2 p-4 rounded",style:{background:"var(--bs-primary-800, #1a237e)"},children:[o.jsx(r,{variant:"solid",color:"light",icon:"ArrowLeft","aria-label":"Default or solid light icon button"}),o.jsx(r,{color:"light",variant:"outline",icon:"ArrowLeft","aria-label":"Outline light icon button"}),o.jsx(r,{color:"light",variant:"link",icon:"ArrowLeft","aria-label":"Link light icon button"}),o.jsx(r,{color:"light",variant:"soft",icon:"ArrowLeft","aria-label":"Soft light icon button"})]})]})]}),parameters:{docs:{description:{story:"All variants of icon button across semantic colors. Includes light variant on dark background for contrast validation."}}}},p={args:{color:"primary",icon:"ArrowRight",href:"https://dynamicframework.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"Open page in new tab"}},a={render:t=>o.jsxs("div",{className:"d-flex align-items-center gap-3",children:[o.jsx(r,{...t,size:"sm","aria-label":"Download (sm)"}),o.jsx(r,{...t,"aria-label":"Download"}),o.jsx(r,{...t,size:"lg","aria-label":"Download (lg)"}),o.jsx(r,{...t,size:"lg",iconSize:"2rem","aria-label":"Download (lg, 2rem glyph)"})]}),args:{color:"primary",icon:"Download"}},n={render:t=>o.jsx(r,{...t,iconSize:{xs:"1rem",lg:"2rem"},"aria-label":"Download"}),args:{color:"primary",icon:"Download",size:"lg"},parameters:{viewport:{defaultViewport:"responsive"}}},i={render:t=>o.jsx(K,{...J,children:o.jsx(r,{...t})}),args:{color:"primary",size:void 0,type:"button",loading:!1,icon:"arrow_back","aria-label":"Go back"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var g,m,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: 'solid',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back'
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var f,y,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: 'outline',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back'
  }
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,w,k;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: 'link',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back'
  }
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,B,A;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    variant: 'soft',
    loading: false,
    icon: 'ArrowLeft',
    'aria-label': 'Go back'
  }
}`,...(A=(B=b.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var z,D,I;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=(D=u.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var L,j,$;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    icon: 'ArrowRight',
    href: 'https://dynamicframework.dev',
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': 'Open page in new tab'
  }
}`,...($=(j=p.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var T,N,C,E,O;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div className="d-flex align-items-center gap-3">
      <DButtonIcon {...args} size="sm" aria-label="Download (sm)" />
      <DButtonIcon {...args} aria-label="Download" />
      <DButtonIcon {...args} size="lg" aria-label="Download (lg)" />
      <DButtonIcon {...args} size="lg" iconSize="2rem" aria-label="Download (lg, 2rem glyph)" />
    </div>,
  args: {
    color: 'primary',
    icon: 'Download'
  }
}`,...(C=(N=a.parameters)==null?void 0:N.docs)==null?void 0:C.source},description:{story:"The glyph follows the button font size, so it grows with `size`. Use `iconSize`\nwhen a layout needs a different glyph size than the one `size` gives.",...(O=(E=a.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};var _,M,V,R,P;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <DButtonIcon {...args} iconSize={{
    xs: '1rem',
    lg: '2rem'
  }} aria-label="Download" />,
  args: {
    color: 'primary',
    icon: 'Download',
    size: 'lg'
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive'
    }
  }
}`,...(V=(M=n.parameters)==null?void 0:M.docs)==null?void 0:V.source},description:{story:"`iconSize` also takes an object by breakpoint, and the glyph follows viewport\nchanges. Breakpoints are read from the `--bs-breakpoint-*` CSS variables, so\n`dynamic-ui.css` has to be loaded. Resize the viewport to see the glyph go\nfrom 1rem to 2rem at the `lg` breakpoint.",...(P=(R=n.parameters)==null?void 0:R.docs)==null?void 0:P.description}}};var G,H,F,X,U;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DButtonIcon>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DButtonIcon {...args} />
    </DContextProvider>,
  args: {
    color: 'primary',
    size: undefined,
    type: 'button',
    loading: false,
    icon: 'arrow_back',
    'aria-label': 'Go back'
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(F=(H=i.parameters)==null?void 0:H.docs)==null?void 0:F.source},description:{story:"To use buttons with Material Symbols style use a `DContextProvider` with `familyClass`\nand the flag `materialStyle=true` or use the flags directly over the\n`DButtonIcon` component as a props",...(U=(X=i.parameters)==null?void 0:X.docs)==null?void 0:U.description}}};const ut=["Default","Outline","Link","Soft","VariantsByColor","AsAnchor","IconSize","ResponsiveIconSize","IconMaterialSyntax"];export{p as AsAnchor,l as Default,i as IconMaterialSyntax,a as IconSize,d as Link,c as Outline,n as ResponsiveIconSize,b as Soft,u as VariantsByColor,ut as __namedExportsOrder,bt as default};
