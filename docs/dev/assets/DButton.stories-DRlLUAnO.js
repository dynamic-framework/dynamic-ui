import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as t}from"./DButton-DvmJ5IwV.js";import{P as a}from"./config-C3iYXcFk.js";import{I as v,T as f,a as ee}from"./constants-CyI_OqvZ.js";import{D as te}from"./DContext-B1rG_d4c.js";import"./iframe-i78ACkaW.js";import"./index-FFMNbmyF.js";import"./DIcon-DhBEANhS.js";import"./useMediaBreakpointUp-Po7gqFcN.js";import"./index-Djwb5CLE.js";import"./index-UiJLRdHU.js";const ue={title:"Design System/Components/Button",component:t,parameters:{docs:{description:{component:`
Our **DButton** component extends Bootstrap's button system with
design-system–specific theming, palette consistency, and semantic structure.

---

## 💡 Overview

We work with button variables at two levels:

1. **Root variables** for color and theme  
   (\`--bs-primary\`, \`--bs-info\`, …)
2. **Variant-level variables**  
   (\`--bs-btn-primary-color\`, \`--bs-btn-outline-hover-border-color\`, …)
3. **Component-level internal variables**  
   (\`--bs-btn-bg\`, \`--bs-btn-color\`, …)

Our button states use fixed palette shades instead of Bootstrap’s mix-based lightening/darkening system.

---

### 🎨 State Mapping

| State | Default | Hover | Focus | Active | Disabled |
|--------|----------|--------|--------|----------|-----------|
| **Solid** | -500 | -600 | -500 | -700 | -500 |
| **Outline** | Border -500, transparent bg | Border -500, bg -100 | Border -500 | Border -700, bg -100 | Border -500, transparent bg |

---

### 📏 Sizes

Buttons support three sizes:

| Size | Class | Description |
|------|--------|-------------|
| \`sm\` | \`.btn-sm\` | Compact UI |
| \`md\` | *(default)* | Default medium |
| \`lg\` | \`.btn-lg\` | Prominent or CTA button |

---

### 🧩 CSS Variables Reference

For a full reference of default variables, see the [Bootstrap documentation](https://getbootstrap.com/docs/5.3/components/buttons/#css).

| Variable | Scope | Description |
|-----------|--------|-------------|
| \`--${a}btn-padding-x\` | .btn | Horizontal padding |
| \`--${a}btn-padding-y\` | .btn | Vertical padding |
| \`--${a}btn-font-family\` | .btn | Font family |
| \`--${a}btn-font-size\` | .btn | Font size |
| \`--${a}btn-border-radius\` | :root | Border radius |
| \`--${a}btn-lg-padding-x\` | .btn-lg | Large padding X |
| \`--${a}btn-sm-font-size\` | .btn-sm | Small font size |

---

### 🧱 Material Symbols Integration

To use buttons with Material Symbols, wrap them in a \`<DContextProvider>\`
configured with \`materialStyle: true\`, or use the icon props directly.
        `}}},argTypes:{text:{control:"text",type:"string"},color:{control:"select",options:f,type:"string",table:{defaultValue:{summary:"primary"}}},variant:{control:"select",options:[void 0,"outline","link"],table:{defaultValue:{summary:"undefined"}}},className:{control:"text",type:"string",table:{defaultValue:{summary:"undefined"}}},iconStart:{control:"select",options:[void 0,...v],table:{defaultValue:{summary:"undefined"}}},iconEnd:{control:"select",options:[void 0,...v],table:{defaultValue:{summary:"undefined"}}},loading:{control:"boolean",type:"boolean"},size:{control:"select",table:{defaultValue:{summary:"undefined"}}},loadingText:{control:"text"},type:{control:"select",options:["button","submit","reset"],table:{defaultValue:{summary:"undefined"}}},disabled:{type:"boolean",control:"boolean"},id:{control:"text",table:{defaultValue:{summary:"undefined"}}},form:{control:"text",table:{defaultValue:{summary:"undefined"}}},value:{table:{disable:!0}}}},s={args:{text:"Default",color:"primary",variant:void 0,loading:!1,loadingText:void 0,iconEnd:void 0,iconStart:void 0,type:"button",size:void 0,disabled:!1}},o={render:()=>e.jsx("div",{className:"d-flex flex-wrap gap-4",children:f.map(r=>e.jsx(t,{color:r,text:r},r))})},n={render:()=>e.jsx("div",{className:"d-flex flex-wrap gap-4 mt-4",children:f.map(r=>e.jsx(t,{variant:"outline",color:r,text:r},r))})},i={render:()=>e.jsx("div",{className:"d-flex flex-wrap gap-4 mt-4",children:f.map(r=>e.jsx(t,{variant:"link",color:r,text:r},r))})},l={render:r=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(t,{...r,text:"Default"}),e.jsx(t,{...r,variant:"outline",text:"Outline"}),e.jsx(t,{...r,variant:"link",text:"Link"})]}),args:{iconEnd:"ChevronRight"}},c={render:r=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(t,{...r,text:"Default"}),e.jsx(t,{...r,variant:"outline",text:"Outline"}),e.jsx(t,{...r,variant:"link",text:"Link"})]}),args:{iconStart:"ChevronLeft"}},d={render:r=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(t,{...r}),e.jsx(t,{...r,loadingText:"Loading..."})]}),args:{text:"Button",loading:!0}},m={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"primary",size:"sm",text:"Small"}),e.jsx(t,{color:"primary",text:"Medium"}),e.jsx(t,{color:"primary",size:"lg",text:"Large"})]}),parameters:{docs:{description:{story:"Shows button size variations."}}}},p={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"secondary",size:"sm",variant:"outline",text:"Small"}),e.jsx(t,{color:"secondary",variant:"outline",text:"Medium"}),e.jsx(t,{color:"secondary",size:"lg",variant:"outline",text:"Large"})]}),parameters:{docs:{description:{story:"Outline variant with size options."}}}},u={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"primary",size:"sm",variant:"link",text:"Small"}),e.jsx(t,{color:"primary",variant:"link",text:"Medium"}),e.jsx(t,{color:"primary",size:"lg",variant:"link",text:"Large"})]}),parameters:{docs:{description:{story:"Link variant with different sizes."}}}},x={render:()=>e.jsx(te,{...ee,children:e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"primary",size:"sm",iconEnd:"chevron_right",text:"Small"}),e.jsx(t,{color:"primary",iconEnd:"chevron_right",text:"Medium"}),e.jsx(t,{color:"primary",size:"lg",iconEnd:"chevron_right",text:"Large"})]})}),parameters:{docs:{description:{story:"Material-style buttons in all sizes."}}}},g={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-4",children:[e.jsxs(t,{color:"primary",children:[e.jsx("span",{children:"Notifications"}),e.jsx("strong",{className:"ms-2",children:"2"})]}),e.jsxs(t,{color:"success",children:[e.jsx("span",{children:"Messages"}),e.jsx("strong",{className:"ms-2",children:"5"})]}),e.jsxs(t,{color:"info",variant:"outline",children:[e.jsx("span",{children:"Balance"}),e.jsx("strong",{className:"ms-2",children:"$1,250.00"})]})]}),parameters:{docs:{description:{story:"Buttons can receive custom children elements instead of text prop for more complex content."}}}};var b,y,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'Default',
    color: 'primary',
    variant: undefined,
    loading: false,
    loadingText: undefined,
    iconEnd: undefined,
    iconStart: undefined,
    type: 'button',
    size: undefined,
    disabled: false
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,D,B;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-4">
      {THEMES.map(color => <DButton key={color} color={color} text={color} />)}
    </div>
}`,...(B=(D=o.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var j,z,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-4 mt-4">
      {THEMES.map(color => <DButton key={color} variant="outline" color={color} text={color} />)}
    </div>
}`,...(N=(z=n.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var E,w,L;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-4 mt-4">
      {THEMES.map(color => <DButton key={color} variant="link" color={color} text={color} />)}
    </div>
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var k,C,M;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} text="Default" />
      <DButton {...args} variant="outline" text="Outline" />
      <DButton {...args} variant="link" text="Link" />
    </div>,
  args: {
    iconEnd: 'ChevronRight'
  }
}`,...(M=(C=l.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var O,T,I;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} text="Default" />
      <DButton {...args} variant="outline" text="Outline" />
      <DButton {...args} variant="link" text="Link" />
    </div>,
  args: {
    iconStart: 'ChevronLeft'
  }
}`,...(I=(T=c.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var V,_,R;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} />
      <DButton {...args} loadingText="Loading..." />
    </div>,
  args: {
    text: 'Button',
    loading: true
  }
}`,...(R=(_=d.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var P,$,A;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-2 align-items-center">
      <DButton color="primary" size="sm" text="Small" />
      <DButton color="primary" text="Medium" />
      <DButton color="primary" size="lg" text="Large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Shows button size variations.'
      }
    }
  }
}`,...(A=($=m.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var F,W,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-2 align-items-center">
      <DButton color="secondary" size="sm" variant="outline" text="Small" />
      <DButton color="secondary" variant="outline" text="Medium" />
      <DButton color="secondary" size="lg" variant="outline" text="Large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Outline variant with size options.'
      }
    }
  }
}`,...(H=(W=p.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var X,G,U;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-2 align-items-center">
      <DButton color="primary" size="sm" variant="link" text="Small" />
      <DButton color="primary" variant="link" text="Medium" />
      <DButton color="primary" size="lg" variant="link" text="Large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Link variant with different sizes.'
      }
    }
  }
}`,...(U=(G=u.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var q,J,K;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <div className="d-flex flex-wrap gap-2 align-items-center">
        <DButton color="primary" size="sm" iconEnd="chevron_right" text="Small" />
        <DButton color="primary" iconEnd="chevron_right" text="Medium" />
        <DButton color="primary" size="lg" iconEnd="chevron_right" text="Large" />
      </div>
    </DContextProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Material-style buttons in all sizes.'
      }
    }
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-4">
      <DButton color="primary">
        <span>Notifications</span>
        <strong className="ms-2">2</strong>
      </DButton>
      <DButton color="success">
        <span>Messages</span>
        <strong className="ms-2">5</strong>
      </DButton>
      <DButton color="info" variant="outline">
        <span>Balance</span>
        <strong className="ms-2">$1,250.00</strong>
      </DButton>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Buttons can receive custom children elements instead of text prop for more complex content.'
      }
    }
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const xe=["Example","Default","Outline","Link","IconEnd","IconStart","LoadingAndLoadingWithText","Sizes","OutlineSizes","LinkSizes","ButtonsWithMaterialIcons","WithCustomChildren"];export{x as ButtonsWithMaterialIcons,o as Default,s as Example,l as IconEnd,c as IconStart,i as Link,u as LinkSizes,d as LoadingAndLoadingWithText,n as Outline,p as OutlineSizes,m as Sizes,g as WithCustomChildren,xe as __namedExportsOrder,ue as default};
