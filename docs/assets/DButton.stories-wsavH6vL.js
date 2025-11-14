import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as r}from"./DButton-BpgTujzP.js";import{P as a}from"./config-C3iYXcFk.js";import{I as h,T as o,a as le}from"./constants-BoPmzNgw.js";import{D as ce}from"./DContext-Bss0EfUR.js";import"./index-DmzVN-XU.js";import"./iframe-BXnL47m3.js";import"./DIcon-BoMGBcnT.js";import"./index-DZjfDL5h.js";import"./index-o-ysMSLE.js";const be={title:"Design System/Components/Button",component:r,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{text:{control:"text",type:"string"},color:{control:"select",options:o},variant:{control:"select",options:[void 0,"outline","link"],table:{defaultValue:{summary:"undefined"}}},className:{control:"text",type:"string",table:{defaultValue:{summary:"undefined"}}},iconStart:{control:"select",options:[void 0,...h],table:{defaultValue:{summary:"undefined"}}},iconEnd:{control:"select",options:[void 0,...h],table:{defaultValue:{summary:"undefined"}}},loading:{control:"boolean",type:"boolean"},loadingText:{control:"text",type:"string",table:{defaultValue:{summary:"undefined"}}},size:{control:"select",table:{defaultValue:{summary:"undefined"}}},state:{control:"select",table:{defaultValue:{summary:"undefined"}}},type:{control:"select",table:{defaultValue:{summary:"undefined"}}},stopPropagationEnabled:{control:"boolean",type:"boolean"},id:{control:"text",table:{defaultValue:{summary:"undefined"}}},form:{control:"text",table:{defaultValue:{summary:"undefined"}}},value:{table:{disable:!0}}}},n={args:{text:"Default",color:"primary",variant:void 0,loading:!1,iconEnd:void 0,iconStart:void 0,type:"button",stopPropagationEnabled:!0,size:void 0,state:void 0}},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex flex-wrap gap-4",children:o.map(t=>e.jsx(r,{color:t,text:t},t))}),e.jsx("div",{className:"d-flex flex-wrap gap-4 mt-4",children:o.map(t=>e.jsx(r,{variant:"outline",color:t,text:t},t))}),e.jsx("div",{className:"d-flex flex-wrap gap-4 mt-4",children:o.map(t=>e.jsx(r,{variant:"link",color:t,text:t},t))})]})},i={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",children:[e.jsx("div",{className:"d-flex flex-wrap gap-4 mb-8",children:o.map(t=>e.jsx(r,{color:t,text:t,loading:!0},t))}),e.jsx("div",{className:"d-flex flex-wrap gap-4 mb-8",children:o.map(t=>e.jsx(r,{color:t,text:t,variant:"outline",loading:!0},t))}),e.jsx("div",{className:"d-flex flex-wrap gap-4 mb-8",children:o.map(t=>e.jsx(r,{color:t,text:t,variant:"link",loading:!0},t))})]})},l={render:()=>e.jsx("div",{className:"d-flex flex-wrap gap-4",children:e.jsx(r,{color:"primary",text:"Primary",loading:!0,loadingText:"Saving..."})})},c={render:()=>e.jsxs("div",{className:"d-flex gap-4",children:[e.jsx(r,{color:"danger",text:"Delete",iconStart:"Trash2"}),e.jsx(r,{color:"primary",text:"Primary",iconEnd:"ChevronRight"})]}),args:{color:"primary",text:"Primary",iconEnd:"ChevronRight"}},d={args:{color:"secondary",text:"Secondary",variant:"outline"}},m={args:{color:"secondary",text:"Secondary",variant:"outline",iconEnd:"ChevronRight"}},p={args:{color:"secondary",text:"Link",variant:"link"}},u={args:{color:"secondary",text:"Link",variant:"link",iconEnd:"ChevronRight"}},x={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"primary",size:"sm",text:"Small"}),e.jsx(r,{color:"primary",text:"Medium"}),e.jsx(r,{color:"primary",size:"lg",text:"Large"})]}),parameters:{docs:{description:{story:"Shows button size variations."}}}},g={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"secondary",size:"sm",variant:"outline",text:"Small"}),e.jsx(r,{color:"secondary",variant:"outline",text:"Medium"}),e.jsx(r,{color:"secondary",size:"lg",variant:"outline",text:"Large"})]}),parameters:{docs:{description:{story:"Outline variant with size options."}}}},v={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"primary",size:"sm",variant:"link",text:"Small"}),e.jsx(r,{color:"primary",variant:"link",text:"Medium"}),e.jsx(r,{color:"primary",size:"lg",variant:"link",text:"Large"})]}),parameters:{docs:{description:{story:"Link variant with different sizes."}}}},f={render:()=>e.jsx(ce,{...le,children:e.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[e.jsx(r,{color:"primary",size:"sm",iconEnd:"chevron_right",text:"Small"}),e.jsx(r,{color:"primary",iconEnd:"chevron_right",text:"Medium"}),e.jsx(r,{color:"primary",size:"lg",iconEnd:"chevron_right",text:"Large"})]})}),parameters:{docs:{description:{story:"Material-style buttons in all sizes."}}}},y={render:()=>e.jsxs("div",{className:"d-flex flex-wrap gap-4",children:[e.jsxs(r,{color:"primary",children:[e.jsx("span",{children:"Notifications"}),e.jsx("strong",{className:"ms-2",children:"2"})]}),e.jsxs(r,{color:"success",children:[e.jsx("span",{children:"Messages"}),e.jsx("strong",{className:"ms-2",children:"5"})]}),e.jsxs(r,{color:"info",variant:"outline",children:[e.jsx("span",{children:"Balance"}),e.jsx("strong",{className:"ms-2",children:"$1,250.00"})]})]}),parameters:{docs:{description:{story:"Buttons can receive custom children elements instead of text prop for more complex content."}}}};var b,S,D;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'Default',
    color: 'primary',
    variant: undefined,
    loading: false,
    iconEnd: undefined,
    iconStart: undefined,
    type: 'button',
    stopPropagationEnabled: true,
    size: undefined,
    state: undefined
  }
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var j,B,E;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(B=s.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var N,z,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(z=i.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var k,C,L;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-4">
      <DButton color="primary" text="Primary" loading loadingText="Saving..." />
    </div>
}`,...(L=(C=l.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var M,T,R;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="d-flex gap-4">
      <DButton color="danger" text="Delete" iconStart="Trash2" />
      <DButton color="primary" text="Primary" iconEnd="ChevronRight" />
    </div>,
  args: {
    color: 'primary',
    text: 'Primary',
    iconEnd: 'ChevronRight'
  }
}`,...(R=(T=c.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var O,V,P;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    text: 'Secondary',
    variant: 'outline'
  }
}`,...(P=(V=d.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var I,_,H;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    text: 'Secondary',
    variant: 'outline',
    iconEnd: 'ChevronRight'
  }
}`,...(H=(_=m.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var $,F,W;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    text: 'Link',
    variant: 'link'
  }
}`,...(W=(F=p.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var A,X,G;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    text: 'Link',
    variant: 'link',
    iconEnd: 'ChevronRight'
  }
}`,...(G=(X=u.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var U,q,J;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(q=x.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,re;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,oe;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,se,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const Se=["Default","ColorVariants","LoadingState","LoadingWithCustomText","WithIcons","SecondaryOutline","SecondaryOutlineIconRight","Link","LinkIconRight","SizeVariants","OutlineSizes","LinkSizes","MaterialButtons","WithCustomChildren"];export{s as ColorVariants,n as Default,p as Link,u as LinkIconRight,v as LinkSizes,i as LoadingState,l as LoadingWithCustomText,f as MaterialButtons,g as OutlineSizes,d as SecondaryOutline,m as SecondaryOutlineIconRight,x as SizeVariants,y as WithCustomChildren,c as WithIcons,Se as __namedExportsOrder,be as default};
