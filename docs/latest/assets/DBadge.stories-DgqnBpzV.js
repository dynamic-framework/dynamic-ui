import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as g}from"./config-C3iYXcFk.js";import{D as o}from"./DBadge-DzTbQQyb.js";import{I as m,T as p}from"./constants-CyI_OqvZ.js";import"./index-ehdBXeXN.js";import"./iframe-BMeNOU03.js";import"./preload-helper-Dp1pzeXC.js";import"./DIcon-tIPXWjmp.js";import"./useMediaBreakpointUp-BJNsKdi4.js";import"./DContext-6FeQK8nL.js";import"./index-yVdt6xC3.js";import"./index-Dqbu3ppb.js";const Q={title:"Design System/Components/Badge",component:o,parameters:{docs:{description:{component:`
Wrapper around Bootstrap Badge.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Badge](https://getbootstrap.com/docs/5.3/components/badge/)

## CSS Variables

The Bootstrap documentation provides details on the default [Badge CSS Variables](https://getbootstrap.com/docs/5.3/components/badge/#css)

| Variable                                  | Class            | Type             | Description              |
|-------------------------------------------|------------------|------------------|--------------------------|
| --${g}badge-bg                    | .badge           | css color unit   | Background color         |
| --${g}badge-gap                   | .badge           | css length unit  | Spacing between elements |
        `}}},argTypes:{id:{control:"text",type:"string",table:{category:"HTML Attributes"}},style:{control:"object",table:{category:"Appearance"}},className:{control:"text",type:"string",table:{category:"Appearance"}},text:{control:"text",type:"string",description:"Text of badge",table:{category:"Content"}},color:{control:"select",type:"string",options:p,table:{defaultValue:{summary:"primary"},category:"Appearance"},description:"The color to use."},soft:{control:"boolean",type:"boolean",table:{category:"Appearance"}},rounded:{control:"boolean",type:"boolean",table:{category:"Appearance"}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...m],table:{category:"Icon"}},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...m],table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},iconFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}}},tags:["autodocs"]},r={args:{color:"primary",text:"Badge",soft:!1,iconEnd:void 0,iconStart:void 0,rounded:!1}},a={render:()=>e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:p.map(t=>e.jsx(o,{color:t,text:t},t))}),parameters:{docs:{description:{story:"All available color variants for badges."}}}},n={render:()=>e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:p.map(t=>e.jsx(o,{color:t,text:t,soft:!0},t))}),parameters:{docs:{description:{story:"All color variants with soft (subtle) styling."}}}},s={args:{color:"primary",text:"Bookmarks",iconStart:"Bookmark"}},c={args:{color:"success",text:"Check",iconEnd:"CheckCircle"}},i={args:{color:"info",text:"Notifications",iconStart:"Bell",iconEnd:"ChevronRight"}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",text:"Icon Start",iconStart:"Star"}),e.jsx(o,{color:"success",text:"Icon End",iconEnd:"CheckCircle"}),e.jsx(o,{color:"warning",text:"Both Icons",iconStart:"AlertTriangle",iconEnd:"ArrowRight"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"danger",text:"Alert",iconStart:"XCircle",soft:!0}),e.jsx(o,{color:"info",text:"Info",iconEnd:"Info",soft:!0}),e.jsx(o,{color:"secondary",text:"Tags",iconStart:"Tag",iconEnd:"Tag",soft:!0})]})]}),parameters:{docs:{description:{story:"Examples of badges with different icon configurations."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",text:"Rounded",rounded:!0}),e.jsx(o,{color:"success",text:"With Icon",iconStart:"Check",rounded:!0}),e.jsx(o,{color:"danger",text:"Soft Rounded",soft:!0,rounded:!0})]}),parameters:{docs:{description:{story:"Badges with rounded styling (pill shape)."}}}};var x,f,u;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Badge',
    soft: false,
    iconEnd: undefined,
    iconStart: undefined,
    rounded: false
  }
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var y,h,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      {THEMES.map(theme => <DBadge key={theme} color={theme} text={theme} />)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All available color variants for badges.'
      }
    }
  }
}`,...(S=(h=a.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,B,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(B=n.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var E,I,C;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Bookmarks',
    iconStart: 'Bookmark'
  }
}`,...(C=(I=s.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var w,j,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    color: 'success',
    text: 'Check',
    iconEnd: 'CheckCircle'
  }
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var D,T,W;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    color: 'info',
    text: 'Notifications',
    iconStart: 'Bell',
    iconEnd: 'ChevronRight'
  }
}`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var A,R,V;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var M,H,N;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(H=d.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const U=["Default","AllColors","SoftColors","WithIconStart","WithIconEnd","WithBothIcons","IconVariants","Rounded"];export{a as AllColors,r as Default,l as IconVariants,d as Rounded,n as SoftColors,i as WithBothIcons,c as WithIconEnd,s as WithIconStart,U as __namedExportsOrder,Q as default};
