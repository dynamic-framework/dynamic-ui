import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as t}from"./DButton-hbOpEc6v.js";import{P as a}from"./config-C3iYXcFk.js";import{I as y,T as v,a as oe}from"./constants-CyI_OqvZ.js";import{D as se}from"./DContext-6FeQK8nL.js";import"./iframe-BMeNOU03.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ehdBXeXN.js";import"./DIcon-tIPXWjmp.js";import"./useMediaBreakpointUp-BJNsKdi4.js";import"./index-yVdt6xC3.js";import"./index-Dqbu3ppb.js";const ye={title:"Design System/Components/Button",component:t,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{text:{control:"text",type:"string",table:{category:"Content"}},color:{control:"select",options:v,type:"string",table:{defaultValue:{summary:"primary"},category:"Appearance"}},variant:{control:"select",options:[void 0,"outline","link"],table:{defaultValue:{summary:"undefined"},category:"Appearance"}},href:{control:"text",description:"If provided, renders as an &lt;a&gt; element instead of &lt;button&gt;.",table:{category:"HTML Attributes"}},target:{control:"select",options:[void 0,"_self","_blank","_parent","_top"],description:"Anchor target when href is set.",table:{category:"HTML Attributes"}},rel:{control:"text",description:'Anchor rel attribute (use "noopener noreferrer" with target="_blank").',table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{defaultValue:{summary:"undefined"},category:"Appearance"}},iconStart:{control:"select",options:[void 0,...y],table:{defaultValue:{summary:"undefined"},category:"Icon"}},iconEnd:{control:"select",options:[void 0,...y],table:{defaultValue:{summary:"undefined"},category:"Icon"}},loading:{control:"boolean",type:"boolean",table:{category:"Behavior"}},size:{control:"select",table:{defaultValue:{summary:"undefined"},category:"Appearance"}},loadingText:{control:"text",table:{category:"Content"}},type:{control:"select",options:["button","submit","reset"],table:{defaultValue:{summary:"undefined"},category:"HTML Attributes"}},disabled:{type:"boolean",control:"boolean",table:{category:"Behavior"}},id:{control:"text",table:{defaultValue:{summary:"undefined"},category:"HTML Attributes"}},form:{control:"text",table:{defaultValue:{summary:"undefined"},category:"HTML Attributes"}},value:{table:{disable:!0,category:"HTML Attributes"}}}},o={args:{text:"Default",color:"primary",variant:void 0,loading:!1,loadingText:void 0,iconEnd:void 0,iconStart:void 0,type:"button",size:void 0,disabled:!1}},s={render:()=>e.jsx("div",{className:"d-flex flex-wrap gap-4",children:v.map(r=>e.jsx(t,{color:r,text:r},r))})},n={render:()=>e.jsx("div",{className:"d-flex flex-wrap gap-4 mt-4",children:v.map(r=>e.jsx(t,{variant:"outline",color:r,text:r},r))})},i={render:()=>e.jsx("div",{className:"d-flex flex-wrap gap-4 mt-4",children:v.map(r=>e.jsx(t,{variant:"link",color:r,text:r},r))})},l={args:{text:"External Link",color:"primary",href:"https://dynamicframework.dev",target:"_blank",rel:"noopener noreferrer"}},c={render:r=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(t,{...r,text:"Default"}),e.jsx(t,{...r,variant:"outline",text:"Outline"}),e.jsx(t,{...r,variant:"link",text:"Link"})]}),args:{iconEnd:"ChevronRight"}},d={render:r=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(t,{...r,text:"Default"}),e.jsx(t,{...r,variant:"outline",text:"Outline"}),e.jsx(t,{...r,variant:"link",text:"Link"})]}),args:{iconStart:"ChevronLeft"}},m={render:r=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(t,{...r}),e.jsx(t,{...r,loadingText:"Loading..."})]}),args:{text:"Button",loading:!0}},p={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"primary",size:"sm",text:"Small"}),e.jsx(t,{color:"primary",text:"Medium"}),e.jsx(t,{color:"primary",size:"lg",text:"Large"})]}),parameters:{docs:{description:{story:"Shows button size variations."}}}},u={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"secondary",size:"sm",variant:"outline",text:"Small"}),e.jsx(t,{color:"secondary",variant:"outline",text:"Medium"}),e.jsx(t,{color:"secondary",size:"lg",variant:"outline",text:"Large"})]}),parameters:{docs:{description:{story:"Outline variant with size options."}}}},x={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"primary",size:"sm",variant:"link",text:"Small"}),e.jsx(t,{color:"primary",variant:"link",text:"Medium"}),e.jsx(t,{color:"primary",size:"lg",variant:"link",text:"Large"})]}),parameters:{docs:{description:{story:"Link variant with different sizes."}}}},g={render:()=>e.jsx(se,{...oe,children:e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"primary",size:"sm",iconEnd:"chevron_right",text:"Small"}),e.jsx(t,{color:"primary",iconEnd:"chevron_right",text:"Medium"}),e.jsx(t,{color:"primary",size:"lg",iconEnd:"chevron_right",text:"Large"})]})}),parameters:{docs:{description:{story:"Material-style buttons in all sizes."}}}},f={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-4",children:[e.jsxs(t,{color:"primary",children:[e.jsx("span",{children:"Notifications"}),e.jsx("strong",{className:"ms-2",children:"2"})]}),e.jsxs(t,{color:"success",children:[e.jsx("span",{children:"Messages"}),e.jsx("strong",{className:"ms-2",children:"5"})]}),e.jsxs(t,{color:"info",variant:"outline",children:[e.jsx("span",{children:"Balance"}),e.jsx("strong",{className:"ms-2",children:"$1,250.00"})]})]}),parameters:{docs:{description:{story:"Buttons can receive custom children elements instead of text prop for more complex content."}}}};var b,h,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var B,D,j;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-4">
      {THEMES.map(color => <DButton key={color} color={color} text={color} />)}
    </div>
}`,...(j=(D=s.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var z,L,k;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-4 mt-4">
      {THEMES.map(color => <DButton key={color} variant="outline" color={color} text={color} />)}
    </div>
}`,...(k=(L=n.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var N,w,E;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-4 mt-4">
      {THEMES.map(color => <DButton key={color} variant="link" color={color} text={color} />)}
    </div>
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var M,T,A;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    text: 'External Link',
    color: 'primary',
    href: 'https://dynamicframework.dev',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}`,...(A=(T=l.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var C,O,_;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} text="Default" />
      <DButton {...args} variant="outline" text="Outline" />
      <DButton {...args} variant="link" text="Link" />
    </div>,
  args: {
    iconEnd: 'ChevronRight'
  }
}`,...(_=(O=c.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var I,V,H;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} text="Default" />
      <DButton {...args} variant="outline" text="Outline" />
      <DButton {...args} variant="link" text="Link" />
    </div>,
  args: {
    iconStart: 'ChevronLeft'
  }
}`,...(H=(V=d.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var R,P,$;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} />
      <DButton {...args} loadingText="Loading..." />
    </div>,
  args: {
    text: 'Button',
    loading: true
  }
}`,...($=(P=m.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var F,W,X;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var G,U,q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(q=(U=u.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const be=["Example","Default","Outline","Link","AsAnchor","IconEnd","IconStart","LoadingAndLoadingWithText","Sizes","OutlineSizes","LinkSizes","ButtonsWithMaterialIcons","WithCustomChildren"];export{l as AsAnchor,g as ButtonsWithMaterialIcons,s as Default,o as Example,c as IconEnd,d as IconStart,i as Link,x as LinkSizes,m as LoadingAndLoadingWithText,n as Outline,u as OutlineSizes,p as Sizes,f as WithCustomChildren,be as __namedExportsOrder,ye as default};
