import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as t}from"./DButton-CdTewh1N.js";import{P as a}from"./config-C3iYXcFk.js";import{I as y,T as b,a as le}from"./constants-CyI_OqvZ.js";import{D as ce}from"./DContext-DOX3qxCU.js";import"./iframe-B6LdZuKn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CHSBDdIb.js";import"./DIcon-DXPiC-z7.js";import"./useMediaBreakpointUp-BwNKVy9w.js";import"./index-BTHOX6mp.js";import"./index-CLtHUTcp.js";const De={title:"Design System/Components/Button",component:t,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{text:{control:"text",type:"string",table:{category:"Content"}},color:{control:"select",options:b,type:"string",table:{defaultValue:{summary:"primary"},category:"Appearance"}},variant:{control:"select",options:[void 0,"outline","link"],table:{defaultValue:{summary:"undefined"},category:"Appearance"}},href:{control:"text",description:"If provided, renders as an &lt;a&gt; element instead of &lt;button&gt;.",table:{category:"HTML Attributes"}},target:{control:"select",options:[void 0,"_self","_blank","_parent","_top"],description:"Anchor target when href is set.",table:{category:"HTML Attributes"}},rel:{control:"text",description:'Anchor rel attribute (use "noopener noreferrer" with target="_blank").',table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{defaultValue:{summary:"undefined"},category:"Appearance"}},iconStart:{control:"select",options:[void 0,...y],table:{defaultValue:{summary:"undefined"},category:"Icon"}},iconEnd:{control:"select",options:[void 0,...y],table:{defaultValue:{summary:"undefined"},category:"Icon"}},loading:{control:"boolean",type:"boolean",table:{category:"Behavior"}},size:{control:"select",table:{defaultValue:{summary:"undefined"},category:"Appearance"}},loadingText:{control:"text",table:{category:"Content"}},type:{control:"select",options:["button","submit","reset"],table:{defaultValue:{summary:"undefined"},category:"HTML Attributes"}},disabled:{type:"boolean",control:"boolean",table:{category:"Behavior"}},id:{control:"text",table:{defaultValue:{summary:"undefined"},category:"HTML Attributes"}},form:{control:"text",table:{defaultValue:{summary:"undefined"},category:"HTML Attributes"}},value:{table:{disable:!0,category:"HTML Attributes"}}}},s={args:{text:"Default",color:"primary",variant:void 0,loading:!1,loadingText:void 0,iconEnd:void 0,iconStart:void 0,type:"button",size:void 0,disabled:!1}},o={render:()=>e.jsx("div",{className:"d-flex flex-wrap gap-4",children:b.map(r=>e.jsx(t,{color:r,text:r},r))})},n={render:()=>e.jsx("div",{className:"d-flex flex-wrap gap-4 mt-4",children:b.map(r=>e.jsx(t,{variant:"outline",color:r,text:r},r))})},i={render:()=>e.jsx("div",{className:"d-flex flex-wrap gap-4 mt-4",children:b.map(r=>e.jsx(t,{variant:"link",color:r,text:r},r))})},l={args:{text:"External Link",color:"primary",href:"https://dynamicframework.dev",target:"_blank",rel:"noopener noreferrer"}},c={render:r=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(t,{...r,text:"Default"}),e.jsx(t,{...r,variant:"outline",text:"Outline"}),e.jsx(t,{...r,variant:"link",text:"Link"})]}),args:{iconEnd:"ChevronRight"}},d={render:r=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(t,{...r,text:"Default"}),e.jsx(t,{...r,variant:"outline",text:"Outline"}),e.jsx(t,{...r,variant:"link",text:"Link"})]}),args:{iconStart:"ChevronLeft"}},m={render:r=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(t,{...r}),e.jsx(t,{...r,loadingText:"Loading..."})]}),args:{text:"Button",loading:!0}},p={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"primary",size:"sm",text:"Small"}),e.jsx(t,{color:"primary",text:"Medium"}),e.jsx(t,{color:"primary",size:"lg",text:"Large"})]}),parameters:{docs:{description:{story:"Shows button size variations."}}}},u={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"info",size:{xs:"sm",md:"lg"},text:"XS=sm, MD=lg"}),e.jsx(t,{color:"success",size:{sm:"sm",lg:"lg"},text:"SM=sm, LG=lg"}),e.jsx(t,{color:"danger",size:{xs:"sm",xl:"lg"},text:"XS=sm, XL=lg"}),e.jsx(t,{color:"primary",size:{xs:"sm",sm:"md",lg:"lg"},text:"XS=sm, SM=md, LG=lg"}),e.jsx(t,{color:"secondary",size:"lg",text:"Only size fallback"}),e.jsx(t,{color:"warning",size:{xs:"sm",md:"md",xl:"lg"},text:"ResponsiveObj"})]}),parameters:{viewport:{defaultViewport:"responsive"},docs:{description:{story:"Responsive usage examples: the button size changes according to the breakpoint. Use the Storybook viewport menu to simulate mobile, tablet, and desktop."}}}},g={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"secondary",size:"sm",variant:"outline",text:"Small"}),e.jsx(t,{color:"secondary",variant:"outline",text:"Medium"}),e.jsx(t,{color:"secondary",size:"lg",variant:"outline",text:"Large"})]}),parameters:{docs:{description:{story:"Outline variant with size options."}}}},x={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"primary",size:"sm",variant:"link",text:"Small"}),e.jsx(t,{color:"primary",variant:"link",text:"Medium"}),e.jsx(t,{color:"primary",size:"lg",variant:"link",text:"Large"})]}),parameters:{docs:{description:{story:"Link variant with different sizes."}}}},f={render:()=>e.jsx(ce,{...le,children:e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"primary",size:"sm",iconEnd:"chevron_right",text:"Small"}),e.jsx(t,{color:"primary",iconEnd:"chevron_right",text:"Medium"}),e.jsx(t,{color:"primary",size:"lg",iconEnd:"chevron_right",text:"Large"})]})}),parameters:{docs:{description:{story:"Material-style buttons in all sizes."}}}},v={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-4",children:[e.jsxs(t,{color:"primary",children:[e.jsx("span",{children:"Notifications"}),e.jsx("strong",{className:"ms-2",children:"2"})]}),e.jsxs(t,{color:"success",children:[e.jsx("span",{children:"Messages"}),e.jsx("strong",{className:"ms-2",children:"5"})]}),e.jsxs(t,{color:"info",variant:"outline",children:[e.jsx("span",{children:"Balance"}),e.jsx("strong",{className:"ms-2",children:"$1,250.00"})]})]}),parameters:{docs:{description:{story:"Buttons can receive custom children elements instead of text prop for more complex content."}}}};var h,S,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(D=(S=s.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var z,B,j;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-4">
      {THEMES.map(color => <DButton key={color} color={color} text={color} />)}
    </div>
}`,...(j=(B=o.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var k,w,L;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-4 mt-4">
      {THEMES.map(color => <DButton key={color} variant="outline" color={color} text={color} />)}
    </div>
}`,...(L=(w=n.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var N,M,E;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-4 mt-4">
      {THEMES.map(color => <DButton key={color} variant="link" color={color} text={color} />)}
    </div>
}`,...(E=(M=i.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var T,O,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: 'External Link',
    color: 'primary',
    href: 'https://dynamicframework.dev',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}`,...(A=(O=l.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var C,_,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} text="Default" />
      <DButton {...args} variant="outline" text="Outline" />
      <DButton {...args} variant="link" text="Link" />
    </div>,
  args: {
    iconEnd: 'ChevronRight'
  }
}`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,V,H;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} text="Default" />
      <DButton {...args} variant="outline" text="Outline" />
      <DButton {...args} variant="link" text="Link" />
    </div>,
  args: {
    iconStart: 'ChevronLeft'
  }
}`,...(H=(V=d.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var X,P,$;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} />
      <DButton {...args} loadingText="Loading..." />
    </div>,
  args: {
    text: 'Button',
    loading: true
  }
}`,...($=(P=m.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var F,W,G;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(W=p.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var U,q,J;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-2 align-items-center">
      <DButton color="info" size={{
      xs: 'sm',
      md: 'lg'
    }} text="XS=sm, MD=lg" />
      <DButton color="success" size={{
      sm: 'sm',
      lg: 'lg'
    }} text="SM=sm, LG=lg" />
      <DButton color="danger" size={{
      xs: 'sm',
      xl: 'lg'
    }} text="XS=sm, XL=lg" />
      <DButton color="primary" size={{
      xs: 'sm',
      sm: 'md',
      lg: 'lg'
    }} text="XS=sm, SM=md, LG=lg" />
      <DButton color="secondary" size="lg" text="Only size fallback" />
      <DButton color="warning" size={{
      xs: 'sm',
      md: 'md',
      xl: 'lg'
    }} text="ResponsiveObj" />
    </div>,
  parameters: {
    viewport: {
      defaultViewport: 'responsive'
    },
    docs: {
      description: {
        story: 'Responsive usage examples: the button size changes according to the breakpoint. Use the Storybook viewport menu to simulate mobile, tablet, and desktop.'
      }
    }
  }
}`,...(J=(q=u.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,se;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ne,ie;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const ze=["Example","Default","Outline","Link","AsAnchor","IconEnd","IconStart","LoadingAndLoadingWithText","Sizes","ResponsiveSizes","OutlineSizes","LinkSizes","ButtonsWithMaterialIcons","WithCustomChildren"];export{l as AsAnchor,f as ButtonsWithMaterialIcons,o as Default,s as Example,c as IconEnd,d as IconStart,i as Link,x as LinkSizes,m as LoadingAndLoadingWithText,n as Outline,g as OutlineSizes,u as ResponsiveSizes,p as Sizes,v as WithCustomChildren,ze as __namedExportsOrder,De as default};
