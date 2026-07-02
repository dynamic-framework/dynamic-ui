import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as r}from"./DButton-BUrFSCCL.js";import{P as a}from"./config-C3iYXcFk.js";import{I as S,T as s,a as fe}from"./constants-CkChkWbF.js";import{D as ve}from"./DContext-BbaizxMa.js";import"./iframe-DkjceUUU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtlKHQhD.js";import"./DIcon-CBkIH7ym.js";import"./useMediaBreakpointUp-C9viAbpR.js";import"./index-p6Xuepxi.js";import"./index-DxZ9-uFP.js";const Me={title:"Design System/Components/Button",component:r,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{text:{control:"text",type:"string",table:{category:"Content"}},color:{control:"select",options:s,type:"string",table:{defaultValue:{summary:"primary"},category:"Appearance"}},variant:{control:"select",options:["solid","outline","link","soft",void 0],table:{defaultValue:{summary:"solid"},category:"Appearance"}},href:{control:"text",description:"If provided, renders as an &lt;a&gt; element instead of &lt;button&gt;.",table:{category:"HTML Attributes"}},target:{control:"select",options:[void 0,"_self","_blank","_parent","_top"],description:"Anchor target when href is set.",table:{category:"HTML Attributes"}},rel:{control:"text",description:'Anchor rel attribute (use "noopener noreferrer" with target="_blank").',table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{defaultValue:{summary:"undefined"},category:"Appearance"}},iconStart:{control:"select",options:[void 0,...S],table:{defaultValue:{summary:"undefined"},category:"Icon"}},iconEnd:{control:"select",options:[void 0,...S],table:{defaultValue:{summary:"undefined"},category:"Icon"}},loading:{control:"boolean",type:"boolean",table:{category:"Behavior"}},size:{control:"select",table:{defaultValue:{summary:"undefined"},category:"Appearance"}},loadingText:{control:"text",table:{category:"Content"}},type:{control:"select",options:["button","submit","reset"],table:{defaultValue:{summary:"undefined"},category:"HTML Attributes"}},disabled:{type:"boolean",control:"boolean",table:{category:"Behavior"}},id:{control:"text",table:{defaultValue:{summary:"undefined"},category:"HTML Attributes"}},form:{control:"text",table:{defaultValue:{summary:"undefined"},category:"HTML Attributes"}},value:{table:{disable:!0,category:"HTML Attributes"}}}},o={args:{text:"Default",color:"primary",variant:"solid",loading:!1,loadingText:void 0,iconEnd:void 0,iconStart:void 0,type:"button",size:void 0,disabled:!1}},n={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex flex-wrap gap-4",children:s.filter(t=>t!=="light").map(t=>e.jsx(r,{color:t,text:t},t))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"mb-1 mt-8 small",children:"Light (for dark backgrounds)"}),e.jsx("div",{className:"p-4 rounded",style:{background:"var(--bs-primary-800, #1a237e)"},children:e.jsx(r,{color:"light",text:"Light"})})]})]})},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex flex-wrap gap-4",children:s.filter(t=>t!=="light").map(t=>e.jsx(r,{variant:"outline",color:t,text:t},t))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"mb-1 mt-8 small",children:"Light outline (for dark backgrounds)"}),e.jsx("div",{className:"p-4 rounded",style:{background:"var(--bs-primary-800, #1a237e)"},children:e.jsx(r,{variant:"outline",color:"light",text:"Light Outline"})})]})]})},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex flex-wrap gap-4",children:s.filter(t=>t!=="light").map(t=>e.jsx(r,{variant:"link",color:t,text:t},t))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"mb-1 mt-8 small",children:"Light link (for dark backgrounds)"}),e.jsx("div",{className:"p-4 rounded",style:{background:"var(--bs-primary-800, #1a237e)"},children:e.jsx(r,{variant:"link",color:"light",text:"Light link"})})]})]})},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex flex-wrap gap-4",children:s.filter(t=>t!=="light").map(t=>e.jsx(r,{variant:"soft",color:t,text:t},t))}),e.jsx("div",{className:"d-flex flex-wrap gap-4 mt-4",children:s.filter(t=>t!=="light").map(t=>e.jsx(r,{variant:"soft",color:t,text:t,iconStart:"Star"},t))}),e.jsx("div",{className:"d-flex flex-wrap gap-4 mt-4",children:s.filter(t=>t!=="light").map(t=>e.jsx(r,{disabled:!0,variant:"soft",color:t,text:"Disabled"},t))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"mb-1 mt-8 small",children:"Light soft (for dark backgrounds)"}),e.jsx("div",{className:"p-4 rounded",style:{background:"var(--bs-primary-800, #1a237e)"},children:e.jsx(r,{variant:"soft",color:"light",text:"Light Soft"})})]})]}),parameters:{docs:{description:{story:"Soft variant uses a pastel background with darker text for a subtle but branded look. For semantic colors, this typically maps to `-50` background, `-700` text, and hover to `-100`. `light` and `dark` use alternate gray-based tokens"}}}},d={args:{text:"External Link",color:"primary",href:"https://dynamicframework.dev",target:"_blank",rel:"noopener noreferrer"}},m={render:t=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(r,{...t,text:"Default"}),e.jsx(r,{...t,variant:"outline",text:"Outline"}),e.jsx(r,{...t,variant:"link",text:"Link"})]}),args:{iconEnd:"ChevronRight"}},p={render:t=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(r,{...t,text:"Default"}),e.jsx(r,{...t,variant:"outline",text:"Outline"}),e.jsx(r,{...t,variant:"link",text:"Link"})]}),args:{iconStart:"ChevronLeft"}},u={render:t=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(r,{...t}),e.jsx(r,{...t,loadingText:"Loading..."})]}),args:{text:"Button",loading:!0}},g={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"primary",size:"sm",text:"Small"}),e.jsx(r,{color:"primary",text:"Medium"}),e.jsx(r,{color:"primary",size:"lg",text:"Large"})]}),parameters:{docs:{description:{story:"Shows button size variations."}}}},x={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"info",size:{xs:"sm",md:"lg"},text:"XS=sm, MD=lg"}),e.jsx(r,{color:"success",size:{sm:"sm",lg:"lg"},text:"SM=sm, LG=lg"}),e.jsx(r,{color:"danger",size:{xs:"sm",xl:"lg"},text:"XS=sm, XL=lg"}),e.jsx(r,{color:"primary",size:{xs:"sm",sm:"md",lg:"lg"},text:"XS=sm, SM=md, LG=lg"}),e.jsx(r,{color:"secondary",size:"lg",text:"Only size fallback"}),e.jsx(r,{color:"warning",size:{xs:"sm",md:"md",xl:"lg"},text:"ResponsiveObj"})]}),parameters:{viewport:{defaultViewport:"responsive"},docs:{description:{story:"Responsive usage examples: the button size changes according to the breakpoint. Use the Storybook viewport menu to simulate mobile, tablet, and desktop."}}}},f={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"secondary",size:"sm",variant:"outline",text:"Small"}),e.jsx(r,{color:"secondary",variant:"outline",text:"Medium"}),e.jsx(r,{color:"secondary",size:"lg",variant:"outline",text:"Large"})]}),parameters:{docs:{description:{story:"Outline variant with size options."}}}},v={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"primary",size:"sm",variant:"link",text:"Small"}),e.jsx(r,{color:"primary",variant:"link",text:"Medium"}),e.jsx(r,{color:"primary",size:"lg",variant:"link",text:"Large"})]}),parameters:{docs:{description:{story:"Link variant with different sizes."}}}},b={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"primary",size:"sm",variant:"soft",text:"Small"}),e.jsx(r,{color:"primary",variant:"soft",text:"Medium"}),e.jsx(r,{color:"primary",size:"lg",variant:"soft",text:"Large"})]}),parameters:{docs:{description:{story:"Soft variant with size options."}}}},h={render:()=>e.jsx(ve,{...fe,children:e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"primary",size:"sm",iconEnd:"chevron_right",text:"Small"}),e.jsx(r,{color:"primary",iconEnd:"chevron_right",text:"Medium"}),e.jsx(r,{color:"primary",size:"lg",iconEnd:"chevron_right",text:"Large"})]})}),parameters:{docs:{description:{story:"Material-style buttons in all sizes."}}}},y={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-4",children:[e.jsxs(r,{color:"primary",children:[e.jsx("span",{children:"Notifications"}),e.jsx("strong",{className:"ms-2",children:"2"})]}),e.jsxs(r,{color:"success",children:[e.jsx("span",{children:"Messages"}),e.jsx("strong",{className:"ms-2",children:"5"})]}),e.jsxs(r,{color:"info",variant:"outline",children:[e.jsx("span",{children:"Balance"}),e.jsx("strong",{className:"ms-2",children:"$1,250.00"})]})]}),parameters:{docs:{description:{story:"Buttons can receive custom children elements instead of text prop for more complex content."}}}};var k,j,D;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: 'Default',
    color: 'primary',
    variant: 'solid',
    loading: false,
    loadingText: undefined,
    iconEnd: undefined,
    iconStart: undefined,
    type: 'button',
    size: undefined,
    disabled: false
  }
}`,...(D=(j=o.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var N,B,z;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(z=(B=n.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var L,w,M;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(w=i.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var E,T,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(T=l.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var A,C,_;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <>
      <div className="d-flex flex-wrap gap-4">
        {THEMES.filter(color => color !== 'light').map(color => <DButton key={color} variant="soft" color={color} text={color} />)}
      </div>

      <div className="d-flex flex-wrap gap-4 mt-4">
        {THEMES.filter(color => color !== 'light').map(color => <DButton key={color} variant="soft" color={color} text={color} iconStart="Star" />)}
      </div>

      <div className="d-flex flex-wrap gap-4 mt-4">
        {THEMES.filter(color => color !== 'light').map(color => <DButton disabled key={color} variant="soft" color={color} text="Disabled" />)}
      </div>
      <div className="mt-4">
        <p className="mb-1 mt-8 small">Light soft (for dark backgrounds)</p>
        <div className="p-4 rounded" style={{
        background: 'var(--bs-primary-800, #1a237e)'
      }}>
          <DButton variant="soft" color="light" text="Light Soft" />
        </div>
      </div>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Soft variant uses a pastel background with darker text for a subtle but branded look. For semantic colors, this typically maps to \`-50\` background, \`-700\` text, and hover to \`-100\`. \`light\` and \`dark\` use alternate gray-based tokens'
      }
    }
  }
}`,...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var I,R,V;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: 'External Link',
    color: 'primary',
    href: 'https://dynamicframework.dev',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}`,...(V=(R=d.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var H,F,X;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} text="Default" />
      <DButton {...args} variant="outline" text="Outline" />
      <DButton {...args} variant="link" text="Link" />
    </div>,
  args: {
    iconEnd: 'ChevronRight'
  }
}`,...(X=(F=m.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var P,$,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} text="Default" />
      <DButton {...args} variant="outline" text="Outline" />
      <DButton {...args} variant="link" text="Link" />
    </div>,
  args: {
    iconStart: 'ChevronLeft'
  }
}`,...(W=($=p.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var G,U,q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <div className="d-flex gap-4">
      <DButton {...args} />
      <DButton {...args} loadingText="Loading..." />
    </div>,
  args: {
    text: 'Button',
    loading: true
  }
}`,...(q=(U=u.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,oe,ne;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,le,ce;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-2 align-items-center">
      <DButton color="primary" size="sm" variant="soft" text="Small" />
      <DButton color="primary" variant="soft" text="Medium" />
      <DButton color="primary" size="lg" variant="soft" text="Large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Soft variant with size options.'
      }
    }
  }
}`,...(ce=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,pe;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(me=h.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,ge,xe;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(xe=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};const Ee=["Example","Default","Outline","Link","Soft","AsAnchor","IconEnd","IconStart","LoadingAndLoadingWithText","Sizes","ResponsiveSizes","OutlineSizes","LinkSizes","SoftSizes","ButtonsWithMaterialIcons","WithCustomChildren"];export{d as AsAnchor,h as ButtonsWithMaterialIcons,n as Default,o as Example,m as IconEnd,p as IconStart,l as Link,v as LinkSizes,u as LoadingAndLoadingWithText,i as Outline,f as OutlineSizes,x as ResponsiveSizes,g as Sizes,c as Soft,b as SoftSizes,y as WithCustomChildren,Ee as __namedExportsOrder,Me as default};
