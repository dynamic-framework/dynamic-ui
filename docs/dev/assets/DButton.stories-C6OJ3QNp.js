import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as r}from"./DButton-Dn4_6Ut_.js";import{P as o}from"./config-C3iYXcFk.js";import{b as ae,I as f,c as se,T as a,a as ne}from"./constants-BoPmzNgw.js";import{D as ie}from"./DContext-CwTzY28G.js";import"./index-DnZP3Fio.js";import"./iframe-CppG1Bu4.js";import"./DIcon-RaII-fCP.js";import"./index-CgwUC5VX.js";import"./index-DM0dE67Y.js";const fe={title:"Design System/Components/Button",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
| \`--${o}btn-padding-x\` | .btn | Horizontal padding |
| \`--${o}btn-padding-y\` | .btn | Vertical padding |
| \`--${o}btn-font-family\` | .btn | Font family |
| \`--${o}btn-font-size\` | .btn | Font size |
| \`--${o}btn-border-radius\` | :root | Border radius |
| \`--${o}btn-lg-padding-x\` | .btn-lg | Large padding X |
| \`--${o}btn-sm-font-size\` | .btn-sm | Small font size |

---

### 🧱 Material Symbols Integration

To use buttons with Material Symbols, wrap them in a \`<DContextProvider>\`
configured with \`materialStyle: true\`, or use the icon props directly.
        `}}},argTypes:{color:{control:"select",options:a,table:{defaultValue:{summary:"primary"}},description:"Button color variant based on the theme palette."},size:{control:"select",options:se,description:"Defines the button size (sm, md, lg)."},variant:{control:"select",options:[void 0,"outline","link"],description:"Visual variant of the button."},text:{control:"text",description:"The text label displayed inside the button."},iconStart:{control:"select",options:[void 0,...f],description:"Optional icon on the left side."},iconEnd:{control:"select",options:[void 0,...f],description:"Optional icon on the right side."},loading:{control:"boolean",table:{defaultValue:{summary:!1}},description:"Shows a spinner and disables the button."},loadingText:{control:"text",description:"Custom text to display when in loading state."},disabled:{control:"boolean",table:{defaultValue:{summary:!1}},description:"Disables the button."},state:{control:"select",options:[void 0,...ae],description:"Visually reflects the input state (valid, invalid, etc)."},onClick:{action:"clicked"}}},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex flex-wrap gap-4",children:a.map(t=>e.jsx(r,{color:t,text:t},t))}),e.jsx("div",{className:"d-flex flex-wrap gap-4 mt-4",children:a.map(t=>e.jsx(r,{variant:"outline",color:t,text:t},t))}),e.jsx("div",{className:"d-flex flex-wrap gap-4 mt-4",children:a.map(t=>e.jsx(r,{variant:"link",color:t,text:t},t))})]})},n={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",children:[e.jsx("div",{className:"d-flex flex-wrap gap-4 mb-8",children:a.map(t=>e.jsx(r,{color:t,text:t,loading:!0},t))}),e.jsx("div",{className:"d-flex flex-wrap gap-4 mb-8",children:a.map(t=>e.jsx(r,{color:t,text:t,variant:"outline",loading:!0},t))}),e.jsx("div",{className:"d-flex flex-wrap gap-4 mb-8",children:a.map(t=>e.jsx(r,{color:t,text:t,variant:"link",loading:!0},t))})]})},i={render:()=>e.jsx("div",{className:"d-flex flex-wrap gap-4",children:e.jsx(r,{color:"primary",text:"Primary",loading:!0,loadingText:"Saving..."})})},l={render:()=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(r,{color:"danger",text:"Delete",iconStart:"Trash2"}),e.jsx(r,{color:"primary",text:"Primary",iconEnd:"ChevronRight"})]}),args:{color:"primary",text:"Primary",iconEnd:"ChevronRight"}},c={args:{color:"secondary",text:"Secondary",variant:"outline"}},d={args:{color:"secondary",text:"Secondary",variant:"outline",iconEnd:"ChevronRight"}},m={args:{color:"secondary",text:"Link",variant:"link"}},p={args:{color:"secondary",text:"Link",variant:"link",iconEnd:"ChevronRight"}},x={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"primary",size:"sm",text:"Small"}),e.jsx(r,{color:"primary",text:"Medium"}),e.jsx(r,{color:"primary",size:"lg",text:"Large"})]}),parameters:{docs:{description:{story:"Shows button size variations."}}}},u={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"secondary",size:"sm",variant:"outline",text:"Small"}),e.jsx(r,{color:"secondary",variant:"outline",text:"Medium"}),e.jsx(r,{color:"secondary",size:"lg",variant:"outline",text:"Large"})]}),parameters:{docs:{description:{story:"Outline variant with size options."}}}},g={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"primary",size:"sm",variant:"link",text:"Small"}),e.jsx(r,{color:"primary",variant:"link",text:"Medium"}),e.jsx(r,{color:"primary",size:"lg",variant:"link",text:"Large"})]}),parameters:{docs:{description:{story:"Link variant with different sizes."}}}},v={render:()=>e.jsx(ie,{...ne,children:e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"primary",size:"sm",iconEnd:"chevron_right",text:"Small"}),e.jsx(r,{color:"primary",iconEnd:"chevron_right",text:"Medium"}),e.jsx(r,{color:"primary",size:"lg",iconEnd:"chevron_right",text:"Large"})]})}),parameters:{docs:{description:{story:"Material-style buttons in all sizes."}}}},h={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-4",children:[e.jsxs(r,{color:"primary",children:[e.jsx("span",{children:"Notifications"}),e.jsx("strong",{className:"ms-2",children:"2"})]}),e.jsxs(r,{color:"success",children:[e.jsx("span",{children:"Messages"}),e.jsx("strong",{className:"ms-2",children:"5"})]}),e.jsxs(r,{color:"info",variant:"outline",children:[e.jsx("span",{children:"Balance"}),e.jsx("strong",{className:"ms-2",children:"$1,250.00"})]})]}),parameters:{docs:{description:{story:"Buttons can receive custom children elements instead of text prop for more complex content."}}}};var y,b,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <>
      <div className="d-flex flex-wrap gap-4">
        {THEMES.map(color => <DButton key={color} color={color} text={color} />)}
      </div>
      <div className="d-flex flex-wrap gap-4 mt-4">
        {THEMES.map(color => <DButton key={color} variant="outline" color={color} text={color} />)}
      </div>
      <div className="d-flex flex-wrap gap-4 mt-4">
        {THEMES.map(color => <DButton key={color} variant="link" color={color} text={color} />)}
      </div>
    </>
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var j,B,D;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-4">
      <div className="d-flex flex-wrap gap-4 mb-8">
        {THEMES.map(color => <DButton key={color} color={color} text={color} loading />)}
      </div>
      <div className="d-flex flex-wrap gap-4 mb-8">
        {THEMES.map(color => <DButton key={color} color={color} text={color} variant="outline" loading />)}
      </div>
      <div className="d-flex flex-wrap gap-4 mb-8">
        {THEMES.map(color => <DButton key={color} color={color} text={color} variant="link" loading />)}
      </div>
    </div>
}`,...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var N,E,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-4">
      <DButton color="primary" text="Primary" loading loadingText="Saving..." />
    </div>
}`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var z,k,C;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="d-flex gap-4">
      <DButton color="danger" text="Delete" iconStart="Trash2" />
      <DButton color="primary" text="Primary" iconEnd="ChevronRight" />
    </div>,
  args: {
    color: 'primary',
    text: 'Primary',
    iconEnd: 'ChevronRight'
  }
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var T,L,M;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    text: 'Secondary',
    variant: 'outline'
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var O,R,I;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    text: 'Secondary',
    variant: 'outline',
    iconEnd: 'ChevronRight'
  }
}`,...(I=(R=d.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var P,_,V;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    text: 'Link',
    variant: 'link'
  }
}`,...(V=(_=m.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var H,$,F;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    text: 'Link',
    variant: 'link',
    iconEnd: 'ChevronRight'
  }
}`,...(F=($=p.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var A,W,X;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(X=(W=x.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var G,U,Z;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Z=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var q,J,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var re,te,oe;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(te=h.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const ye=["ColorVariants","LoadingState","LoadingWithCustomText","WithIcons","SecondaryOutline","SecondaryOutlineIconRight","Link","LinkIconRight","SizeVariants","OutlineSizes","LinkSizes","MaterialButtons","WithCustomChildren"];export{s as ColorVariants,m as Link,p as LinkIconRight,g as LinkSizes,n as LoadingState,i as LoadingWithCustomText,v as MaterialButtons,u as OutlineSizes,c as SecondaryOutline,d as SecondaryOutlineIconRight,x as SizeVariants,h as WithCustomChildren,l as WithIcons,ye as __namedExportsOrder,fe as default};
