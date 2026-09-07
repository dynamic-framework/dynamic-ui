import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as y}from"./config-C3iYXcFk.js";import{D as o}from"./DBadge-BALDzh2o.js";import{I as u,T as x,a as U}from"./constants-CkChkWbF.js";import{D as Q}from"./DContext-CYga8oT4.js";import"./index-D9ZNrqU0.js";import"./iframe-D2KSBTDy.js";import"./preload-helper-Dp1pzeXC.js";import"./DIcon-ekCLf4cS.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-K3PrZFiL.js";import"./index-DxklarVZ.js";import"./index-DKAz_JVG.js";const pe={title:"Design System/Components/Badge",component:o,parameters:{docs:{description:{component:`
Wrapper around Bootstrap Badge.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Badge](https://getbootstrap.com/docs/5.3/components/badge/)

## CSS Variables

The Bootstrap documentation provides details on the default [Badge CSS Variables](https://getbootstrap.com/docs/5.3/components/badge/#css)

| Variable                                  | Class            | Type             | Description              |
|-------------------------------------------|------------------|------------------|--------------------------|
| --${y}badge-bg                    | .badge           | css color unit   | Background color         |
| --${y}badge-gap                   | .badge           | css length unit  | Spacing between elements |
        `}}},argTypes:{size:{control:"select",options:[void 0,"sm","md","lg"],table:{category:"Appearance"},description:"Badge size"},id:{control:"text",type:"string",table:{category:"HTML Attributes"}},style:{control:"object",table:{category:"Appearance"}},className:{control:"text",type:"string",table:{category:"Appearance"}},text:{control:"text",type:"string",description:"Text of badge",table:{category:"Content"}},color:{control:"select",type:"string",options:x,table:{defaultValue:{summary:"primary"},category:"Appearance"},description:"The color to use."},soft:{control:"boolean",type:"boolean",table:{category:"Appearance"}},rounded:{control:"boolean",type:"boolean",table:{category:"Appearance"}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...u],table:{category:"Icon"}},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...u],table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},iconFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}}},tags:["autodocs"]},t={args:{color:"primary",text:"Badge",soft:!1,iconEnd:void 0,iconStart:void 0,rounded:!1}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(o,{text:"XS:sm MD:lg",size:{xs:"sm",md:"lg"},color:"info"}),e.jsx(o,{text:"SM:sm LG:lg",size:{sm:"sm",lg:"lg"},color:"success"}),e.jsx(o,{text:"XS:sm XL:lg",size:{xs:"sm",xl:"lg"},color:"danger"}),e.jsx(o,{text:"XS:sm SM:md LG:lg",size:{xs:"sm",sm:"md",lg:"lg"},color:"primary"}),e.jsx(o,{text:"Only LG",size:"lg",color:"secondary"}),e.jsx(o,{text:"ResponsiveObj",size:{xs:"sm",md:"md",xl:"lg"},color:"warning"})]}),decorators:r=>e.jsx(Q,{children:e.jsx(r,{})}),parameters:{docs:{description:{story:"Responsive usage examples: now the size prop accepts a ResponsiveProp object. Try resizing the window."}}}},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:x.filter(r=>r!=="light").map(r=>e.jsx(o,{color:r,text:r},r))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"mb-1 mt-8 small",children:"Light variant (for dark backgrounds)"}),e.jsx("div",{className:"p-4 rounded",style:{background:"var(--bs-primary-800, #1a237e)"},children:e.jsx(o,{color:"light",text:"Light"})})]})]}),parameters:{docs:{description:{story:"All available color variants for badges."}}}},n={render:()=>e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:x.map(r=>e.jsx(o,{color:r,text:r,soft:!0},r))}),parameters:{docs:{description:{story:"All color variants with soft (subtle) styling."}}}},c={args:{color:"primary",text:"Bookmarks",iconStart:"Bookmark"}},i={args:{color:"success",text:"Check",iconEnd:"CheckCircle"}},l={args:{color:"info",text:"Notifications",iconStart:"Bell",iconEnd:"ChevronRight"}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",text:"Icon Start",iconStart:"Star"}),e.jsx(o,{color:"success",text:"Icon End",iconEnd:"CheckCircle"}),e.jsx(o,{color:"warning",text:"Both Icons",iconStart:"AlertTriangle",iconEnd:"ArrowRight"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"danger",text:"Alert",iconStart:"XCircle",soft:!0}),e.jsx(o,{color:"info",text:"Info",iconEnd:"Info",soft:!0}),e.jsx(o,{color:"secondary",text:"Tags",iconStart:"Tag",iconEnd:"Tag",soft:!0})]})]}),parameters:{docs:{description:{story:"Examples of badges with different icon configurations."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",text:"Rounded",rounded:!0}),e.jsx(o,{color:"success",text:"With Icon",iconStart:"Check",rounded:!0}),e.jsx(o,{color:"danger",text:"Soft Rounded",soft:!0,rounded:!0})]}),parameters:{docs:{description:{story:"Badges with rounded styling (pill shape)."}}}},m={args:{color:"primary",text:"Badge",iconStart:"home",iconMaterialStyle:!0,iconFamilyClass:"material-symbols-outlined",iconEnd:"star"}},g={render:r=>e.jsx(Q,{...U,children:e.jsx(o,{...r})}),args:{color:"primary",text:"Badge",iconStart:"home",iconEnd:"star"}};var f,h,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Badge',
    soft: false,
    iconEnd: undefined,
    iconStart: undefined,
    rounded: false
  }
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,v,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <DBadge text="XS:sm MD:lg" size={{
      xs: 'sm',
      md: 'lg'
    }} color="info" />
      <DBadge text="SM:sm LG:lg" size={{
      sm: 'sm',
      lg: 'lg'
    }} color="success" />
      <DBadge text="XS:sm XL:lg" size={{
      xs: 'sm',
      xl: 'lg'
    }} color="danger" />
      <DBadge text="XS:sm SM:md LG:lg" size={{
      xs: 'sm',
      sm: 'md',
      lg: 'lg'
    }} color="primary" />
      <DBadge text="Only LG" size="lg" color="secondary" />
      <DBadge text="ResponsiveObj" size={{
      xs: 'sm',
      md: 'md',
      xl: 'lg'
    }} color="warning" />
    </div>,
  decorators: Story => <DContextProvider>
      <Story />
    </DContextProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Responsive usage examples: now the size prop accepts a ResponsiveProp object. Try resizing the window.'
      }
    }
  }
}`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var j,C,E;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <>
      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        {THEMES.filter(theme => theme !== 'light').map(theme => <DBadge key={theme} color={theme} text={theme} />)}
      </div>
      <div className="mt-4">
        <p className="mb-1 mt-8 small">Light variant (for dark backgrounds)</p>
        <div className="p-4 rounded" style={{
        background: 'var(--bs-primary-800, #1a237e)'
      }}>
          <DBadge color="light" text="Light" />
        </div>
      </div>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'All available color variants for badges.'
      }
    }
  }
}`,...(E=(C=a.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var I,D,w;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      {THEMES.map(theme => <DBadge key={theme} color={theme} text={theme} soft />)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All color variants with soft (subtle) styling.'
      }
    }
  }
}`,...(w=(D=n.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var T,R,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Bookmarks',
    iconStart: 'Bookmark'
  }
}`,...(k=(R=c.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var A,W,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    color: 'success',
    text: 'Check',
    iconEnd: 'CheckCircle'
  }
}`,...(z=(W=i.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var M,L,N;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    color: 'info',
    text: 'Notifications',
    iconStart: 'Bell',
    iconEnd: 'ChevronRight'
  }
}`,...(N=(L=l.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var X,O,P;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexDirection: 'column'
  }}>
      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <DBadge color="primary" text="Icon Start" iconStart="Star" />
        <DBadge color="success" text="Icon End" iconEnd="CheckCircle" />
        <DBadge color="warning" text="Both Icons" iconStart="AlertTriangle" iconEnd="ArrowRight" />
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <DBadge color="danger" text="Alert" iconStart="XCircle" soft />
        <DBadge color="info" text="Info" iconEnd="Info" soft />
        <DBadge color="secondary" text="Tags" iconStart="Tag" iconEnd="Tag" soft />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of badges with different icon configurations.'
      }
    }
  }
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var F,_,G;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <DBadge color="primary" text="Rounded" rounded />
      <DBadge color="success" text="With Icon" iconStart="Check" rounded />
      <DBadge color="danger" text="Soft Rounded" soft rounded />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Badges with rounded styling (pill shape).'
      }
    }
  }
}`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var V,H,$;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Badge',
    iconStart: 'home',
    iconMaterialStyle: true,
    iconFamilyClass: 'material-symbols-outlined',
    iconEnd: 'star'
  }
}`,...($=(H=m.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var q,J,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DBadge {...args} />
    </DContextProvider>,
  args: {
    color: 'primary',
    text: 'Badge',
    iconStart: 'home',
    iconEnd: 'star'
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const me=["Default","ResponsiveSizes","AllColors","SoftColors","WithIconStart","WithIconEnd","WithBothIcons","IconVariants","Rounded","MaterialIconsSyntax","MaterialIconsSyntaxFromContext"];export{a as AllColors,t as Default,d as IconVariants,m as MaterialIconsSyntax,g as MaterialIconsSyntaxFromContext,s as ResponsiveSizes,p as Rounded,n as SoftColors,l as WithBothIcons,i as WithIconEnd,c as WithIconStart,me as __namedExportsOrder,pe as default};
