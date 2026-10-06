import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as u}from"./config-7dXXkQRG.js";import{D as r}from"./DBadge-B8fandLH.js";import{I as y,T as x,a as Q}from"./constants-Cykb4qS-.js";import{D as U}from"./DContext-BsbKwSe9.js";import"./index-DowJ8Qf7.js";import"./iframe-BOlGrI6L.js";import"./preload-helper-Dp1pzeXC.js";import"./DIcon-CTNbRGzm.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-CBOESKxy.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";const pe={title:"Design System/Components/Badge",component:r,parameters:{docs:{description:{component:`
Wrapper around Bootstrap Badge.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Badge](https://getbootstrap.com/docs/5.3/components/badge/)

## CSS Variables

The Bootstrap documentation provides details on the default [Badge CSS Variables](https://getbootstrap.com/docs/5.3/components/badge/#css)

| Variable                                  | Class            | Type             | Description              |
|-------------------------------------------|------------------|------------------|--------------------------|
| --${u}badge-bg                    | .badge           | css color unit   | Background color         |
| --${u}badge-gap                   | .badge           | css length unit  | Spacing between elements |
        `}}},argTypes:{size:{control:"select",options:[void 0,"sm","md","lg"],table:{category:"Appearance"},description:"Badge size"},id:{control:"text",type:"string",table:{category:"HTML Attributes"}},style:{control:"object",table:{category:"Appearance"}},className:{control:"text",type:"string",table:{category:"Appearance"}},text:{control:"text",type:"string",description:"Text of badge",table:{category:"Content"}},color:{control:"select",type:"string",options:x,table:{defaultValue:{summary:"primary"},category:"Appearance"},description:"The color to use."},soft:{control:"boolean",type:"boolean",table:{category:"Appearance"}},rounded:{control:"boolean",type:"boolean",table:{category:"Appearance"}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...y],table:{category:"Icon"}},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...y],table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},iconFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}}},tags:["autodocs"]},t={args:{color:"primary",text:"Badge",soft:!1,iconEnd:void 0,iconStart:void 0,rounded:!1}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(r,{text:"XS:sm MD:lg",size:{xs:"sm",md:"lg"},color:"info"}),e.jsx(r,{text:"SM:sm LG:lg",size:{sm:"sm",lg:"lg"},color:"success"}),e.jsx(r,{text:"XS:sm XL:lg",size:{xs:"sm",xl:"lg"},color:"danger"}),e.jsx(r,{text:"XS:lg LG:sm",size:{xs:"lg",lg:"sm"},color:"primary"}),e.jsx(r,{text:"MD:sm",size:{md:"sm"},color:"warning"}),e.jsx(r,{text:"Only LG",size:"lg",color:"secondary"})]}),parameters:{docs:{description:{story:"Responsive usage examples: the badge size changes according to the breakpoint. The value of the largest matching breakpoint wins, and a breakpoint without a value keeps the one below it, so below the first defined breakpoint the badge has its default size (e.g. `SM:sm LG:lg` is default under 576px). Values are `sm` and `lg`; there is no `md` size. Breakpoints are read from the `--bs-breakpoint-*` CSS variables. Try resizing the window."}}}},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:x.filter(o=>o!=="light").map(o=>e.jsx(r,{color:o,text:o},o))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"mb-1 mt-8 small",children:"Light variant (for dark backgrounds)"}),e.jsx("div",{className:"p-4 rounded",style:{background:"var(--bs-primary-800, #1a237e)"},children:e.jsx(r,{color:"light",text:"Light"})})]})]}),parameters:{docs:{description:{story:"All available color variants for badges."}}}},n={render:()=>e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:x.map(o=>e.jsx(r,{color:o,text:o,soft:!0},o))}),parameters:{docs:{description:{story:"All color variants with soft (subtle) styling."}}}},i={args:{color:"primary",text:"Bookmarks",iconStart:"Bookmark"}},c={args:{color:"success",text:"Check",iconEnd:"CheckCircle"}},l={args:{color:"info",text:"Notifications",iconStart:"Bell",iconEnd:"ChevronRight"}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(r,{color:"primary",text:"Icon Start",iconStart:"Star"}),e.jsx(r,{color:"success",text:"Icon End",iconEnd:"CheckCircle"}),e.jsx(r,{color:"warning",text:"Both Icons",iconStart:"AlertTriangle",iconEnd:"ArrowRight"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(r,{color:"danger",text:"Alert",iconStart:"XCircle",soft:!0}),e.jsx(r,{color:"info",text:"Info",iconEnd:"Info",soft:!0}),e.jsx(r,{color:"secondary",text:"Tags",iconStart:"Tag",iconEnd:"Tag",soft:!0})]})]}),parameters:{docs:{description:{story:"Examples of badges with different icon configurations."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(r,{color:"primary",text:"Rounded",rounded:!0}),e.jsx(r,{color:"success",text:"With Icon",iconStart:"Check",rounded:!0}),e.jsx(r,{color:"danger",text:"Soft Rounded",soft:!0,rounded:!0})]}),parameters:{docs:{description:{story:"Badges with rounded styling (pill shape)."}}}},g={args:{color:"primary",text:"Badge",iconStart:"home",iconMaterialStyle:!0,iconFamilyClass:"material-symbols-outlined",iconEnd:"star"}},m={render:o=>e.jsx(U,{...Q,children:e.jsx(r,{...o})}),args:{color:"primary",text:"Badge",iconStart:"home",iconEnd:"star"}};var f,h,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Badge',
    soft: false,
    iconEnd: undefined,
    iconStart: undefined,
    rounded: false
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,v,B;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      <DBadge text="XS:lg LG:sm" size={{
      xs: 'lg',
      lg: 'sm'
    }} color="primary" />
      <DBadge text="MD:sm" size={{
      md: 'sm'
    }} color="warning" />
      <DBadge text="Only LG" size="lg" color="secondary" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Responsive usage examples: the badge size changes according to the breakpoint. The value of the largest matching breakpoint wins, and a breakpoint without a value keeps the one below it, so below the first defined breakpoint the badge has its default size (e.g. \`SM:sm LG:lg\` is default under 576px). Values are \`sm\` and \`lg\`; there is no \`md\` size. Breakpoints are read from the \`--bs-breakpoint-*\` CSS variables. Try resizing the window.'
      }
    }
  }
}`,...(B=(v=a.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var C,E,k;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(E=s.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var w,I,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(I=n.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var j,T,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Bookmarks',
    iconStart: 'Bookmark'
  }
}`,...(z=(T=i.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var A,R,M;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    color: 'success',
    text: 'Check',
    iconEnd: 'CheckCircle'
  }
}`,...(M=(R=c.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var W,L,N;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    color: 'info',
    text: 'Notifications',
    iconStart: 'Bell',
    iconEnd: 'ChevronRight'
  }
}`,...(N=(L=l.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var X,F,G;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var O,V,_;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(V=p.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var P,H,$;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Badge',
    iconStart: 'home',
    iconMaterialStyle: true,
    iconFamilyClass: 'material-symbols-outlined',
    iconEnd: 'star'
  }
}`,...($=(H=g.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var q,J,K;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DBadge {...args} />
    </DContextProvider>,
  args: {
    color: 'primary',
    text: 'Badge',
    iconStart: 'home',
    iconEnd: 'star'
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ge=["Default","ResponsiveSizes","AllColors","SoftColors","WithIconStart","WithIconEnd","WithBothIcons","IconVariants","Rounded","MaterialIconsSyntax","MaterialIconsSyntaxFromContext"];export{s as AllColors,t as Default,d as IconVariants,g as MaterialIconsSyntax,m as MaterialIconsSyntaxFromContext,a as ResponsiveSizes,p as Rounded,n as SoftColors,l as WithBothIcons,c as WithIconEnd,i as WithIconStart,ge as __namedExportsOrder,pe as default};
