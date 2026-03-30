import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as t}from"./DButton-CkmGfbE5.js";import{P as a}from"./config-C3iYXcFk.js";import{I as h,T as b,a as le}from"./constants-CkChkWbF.js";import{D as ce}from"./DContext-C7LEUkQ1.js";import"./iframe-um1WsC0C.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cc_4mDlw.js";import"./DIcon-BAV_3UYE.js";import"./useMediaBreakpointUp-Dsr-FX74.js";import"./index-BitFkd-h.js";import"./index-BGEaalem.js";const Se={title:"Design System/Components/Button",component:t,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{text:{control:"text",type:"string",table:{category:"Content"}},color:{control:"select",options:b,type:"string",table:{defaultValue:{summary:"primary"},category:"Appearance"}},variant:{control:"select",options:[void 0,"outline","link"],table:{defaultValue:{summary:"undefined"},category:"Appearance"}},href:{control:"text",description:"If provided, renders as an &lt;a&gt; element instead of &lt;button&gt;.",table:{category:"HTML Attributes"}},target:{control:"select",options:[void 0,"_self","_blank","_parent","_top"],description:"Anchor target when href is set.",table:{category:"HTML Attributes"}},rel:{control:"text",description:'Anchor rel attribute (use "noopener noreferrer" with target="_blank").',table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{defaultValue:{summary:"undefined"},category:"Appearance"}},iconStart:{control:"select",options:[void 0,...h],table:{defaultValue:{summary:"undefined"},category:"Icon"}},iconEnd:{control:"select",options:[void 0,...h],table:{defaultValue:{summary:"undefined"},category:"Icon"}},loading:{control:"boolean",type:"boolean",table:{category:"Behavior"}},size:{control:"select",table:{defaultValue:{summary:"undefined"},category:"Appearance"}},loadingText:{control:"text",table:{category:"Content"}},type:{control:"select",options:["button","submit","reset"],table:{defaultValue:{summary:"undefined"},category:"HTML Attributes"}},disabled:{type:"boolean",control:"boolean",table:{category:"Behavior"}},id:{control:"text",table:{defaultValue:{summary:"undefined"},category:"HTML Attributes"}},form:{control:"text",table:{defaultValue:{summary:"undefined"},category:"HTML Attributes"}},value:{table:{disable:!0,category:"HTML Attributes"}}}},s={args:{text:"Default",color:"primary",variant:void 0,loading:!1,loadingText:void 0,iconEnd:void 0,iconStart:void 0,type:"button",size:void 0,disabled:!1}},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex flex-wrap gap-4",children:b.filter(r=>r!=="light").map(r=>e.jsx(t,{color:r,text:r},r))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"mb-1 mt-8 small",children:"Light (for dark backgrounds)"}),e.jsx("div",{className:"p-4 rounded",style:{background:"var(--bs-primary-800, #1a237e)"},children:e.jsx(t,{color:"light",text:"Light"})})]})]})},n={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex flex-wrap gap-4",children:b.filter(r=>r!=="light").map(r=>e.jsx(t,{variant:"outline",color:r,text:r},r))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"mb-1 mt-8 small",children:"Light outline (for dark backgrounds)"}),e.jsx("div",{className:"p-4 rounded",style:{background:"var(--bs-primary-800, #1a237e)"},children:e.jsx(t,{variant:"outline",color:"light",text:"Light Outline"})})]})]})},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex flex-wrap gap-4",children:b.filter(r=>r!=="light").map(r=>e.jsx(t,{variant:"link",color:r,text:r},r))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"mb-1 mt-8 small",children:"Light link (for dark backgrounds)"}),e.jsx("div",{className:"p-4 rounded",style:{background:"var(--bs-primary-800, #1a237e)"},children:e.jsx(t,{variant:"link",color:"light",text:"Light link"})})]})]})},l={args:{text:"External Link",color:"primary",href:"https://dynamicframework.dev",target:"_blank",rel:"noopener noreferrer"}},c={render:r=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(t,{...r,text:"Default"}),e.jsx(t,{...r,variant:"outline",text:"Outline"}),e.jsx(t,{...r,variant:"link",text:"Link"})]}),args:{iconEnd:"ChevronRight"}},d={render:r=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(t,{...r,text:"Default"}),e.jsx(t,{...r,variant:"outline",text:"Outline"}),e.jsx(t,{...r,variant:"link",text:"Link"})]}),args:{iconStart:"ChevronLeft"}},m={render:r=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(t,{...r}),e.jsx(t,{...r,loadingText:"Loading..."})]}),args:{text:"Button",loading:!0}},p={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"primary",size:"sm",text:"Small"}),e.jsx(t,{color:"primary",text:"Medium"}),e.jsx(t,{color:"primary",size:"lg",text:"Large"})]}),parameters:{docs:{description:{story:"Shows button size variations."}}}},u={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"info",size:{xs:"sm",md:"lg"},text:"XS=sm, MD=lg"}),e.jsx(t,{color:"success",size:{sm:"sm",lg:"lg"},text:"SM=sm, LG=lg"}),e.jsx(t,{color:"danger",size:{xs:"sm",xl:"lg"},text:"XS=sm, XL=lg"}),e.jsx(t,{color:"primary",size:{xs:"sm",sm:"md",lg:"lg"},text:"XS=sm, SM=md, LG=lg"}),e.jsx(t,{color:"secondary",size:"lg",text:"Only size fallback"}),e.jsx(t,{color:"warning",size:{xs:"sm",md:"md",xl:"lg"},text:"ResponsiveObj"})]}),parameters:{viewport:{defaultViewport:"responsive"},docs:{description:{story:"Responsive usage examples: the button size changes according to the breakpoint. Use the Storybook viewport menu to simulate mobile, tablet, and desktop."}}}},g={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"secondary",size:"sm",variant:"outline",text:"Small"}),e.jsx(t,{color:"secondary",variant:"outline",text:"Medium"}),e.jsx(t,{color:"secondary",size:"lg",variant:"outline",text:"Large"})]}),parameters:{docs:{description:{story:"Outline variant with size options."}}}},x={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"primary",size:"sm",variant:"link",text:"Small"}),e.jsx(t,{color:"primary",variant:"link",text:"Medium"}),e.jsx(t,{color:"primary",size:"lg",variant:"link",text:"Large"})]}),parameters:{docs:{description:{story:"Link variant with different sizes."}}}},v={render:()=>e.jsx(ce,{...le,children:e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(t,{color:"primary",size:"sm",iconEnd:"chevron_right",text:"Small"}),e.jsx(t,{color:"primary",iconEnd:"chevron_right",text:"Medium"}),e.jsx(t,{color:"primary",size:"lg",iconEnd:"chevron_right",text:"Large"})]})}),parameters:{docs:{description:{story:"Material-style buttons in all sizes."}}}},f={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-4",children:[e.jsxs(t,{color:"primary",children:[e.jsx("span",{children:"Notifications"}),e.jsx("strong",{className:"ms-2",children:"2"})]}),e.jsxs(t,{color:"success",children:[e.jsx("span",{children:"Messages"}),e.jsx("strong",{className:"ms-2",children:"5"})]}),e.jsxs(t,{color:"info",variant:"outline",children:[e.jsx("span",{children:"Balance"}),e.jsx("strong",{className:"ms-2",children:"$1,250.00"})]})]}),parameters:{docs:{description:{story:"Buttons can receive custom children elements instead of text prop for more complex content."}}}};var y,j,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var k,D,B;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      <div className="d-flex flex-wrap gap-4">
        {THEMES.filter(color => color !== 'light').map(color => <DButton key={color} color={color} text={color} />)}
      </div>
      <div className="mt-4">
        <p className="mb-1 mt-8 small">Light (for dark backgrounds)</p>
        <div className="p-4 rounded" style={{
        background: 'var(--bs-primary-800, #1a237e)'
      }}>
          <DButton color="light" text="Light" />
        </div>
      </div>
    </>
}`,...(B=(D=o.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var z,L,N;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <>
      <div className="d-flex flex-wrap gap-4">
        {THEMES.filter(color => color !== 'light').map(color => <DButton key={color} variant="outline" color={color} text={color} />)}
      </div>
      <div className="mt-4">
        <p className="mb-1 mt-8 small">Light outline (for dark backgrounds)</p>
        <div className="p-4 rounded" style={{
        background: 'var(--bs-primary-800, #1a237e)'
      }}>
          <DButton variant="outline" color="light" text="Light Outline" />
        </div>
      </div>
    </>
}`,...(N=(L=n.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var w,M,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <>
      <div className="d-flex flex-wrap gap-4">
        {THEMES.filter(color => color !== 'light').map(color => <DButton key={color} variant="link" color={color} text={color} />)}
      </div>
      <div className="mt-4">
        <p className="mb-1 mt-8 small">Light link (for dark backgrounds)</p>
        <div className="p-4 rounded" style={{
        background: 'var(--bs-primary-800, #1a237e)'
      }}>
          <DButton variant="link" color="light" text="Light link" />
        </div>
      </div>
    </>
}`,...(E=(M=i.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var O,T,A;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: 'External Link',
    color: 'primary',
    href: 'https://dynamicframework.dev',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}`,...(A=(T=l.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var C,_,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(V=d.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var X,F,P;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} />
      <DButton {...args} loadingText="Loading..." />
    </div>,
  args: {
    text: 'Button',
    loading: true
  }
}`,...(P=(F=m.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var $,W,G;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,se;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ne,ie;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const ke=["Example","Default","Outline","Link","AsAnchor","IconEnd","IconStart","LoadingAndLoadingWithText","Sizes","ResponsiveSizes","OutlineSizes","LinkSizes","ButtonsWithMaterialIcons","WithCustomChildren"];export{l as AsAnchor,v as ButtonsWithMaterialIcons,o as Default,s as Example,c as IconEnd,d as IconStart,i as Link,x as LinkSizes,m as LoadingAndLoadingWithText,n as Outline,g as OutlineSizes,u as ResponsiveSizes,p as Sizes,f as WithCustomChildren,ke as __namedExportsOrder,Se as default};
