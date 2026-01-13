import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as m}from"./config-C3iYXcFk.js";import{D as o}from"./DBadge-BhvMYw0b.js";import{I as g,T as p}from"./constants-CyI_OqvZ.js";import"./index-BGeANs1w.js";import"./iframe-Cl_txTfb.js";import"./preload-helper-Dp1pzeXC.js";import"./DIcon-BO44rzzU.js";import"./useMediaBreakpointUp-BEnFo-Yd.js";import"./DContext-BXwjNPLo.js";import"./index-D6-901_q.js";import"./index-RkBx1vKB.js";const Q={title:"Design System/Components/Badge",component:o,parameters:{docs:{description:{component:`
Wrapper around Bootstrap Badge.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Badge](https://getbootstrap.com/docs/5.3/components/badge/)

## CSS Variables

The Bootstrap documentation provides details on the default [Badge CSS Variables](https://getbootstrap.com/docs/5.3/components/badge/#css)

| Variable                                  | Class            | Type             | Description              |
|-------------------------------------------|------------------|------------------|--------------------------|
| --${m}badge-bg                    | .badge           | css color unit   | Background color         |
| --${m}badge-gap                   | .badge           | css length unit  | Spacing between elements |
        `}}},argTypes:{id:{control:"text",type:"string"},style:{control:"object"},className:{control:"text",type:"string"},text:{control:"text",type:"string",description:"Text of badge"},color:{control:"select",type:"string",options:p,table:{defaultValue:{summary:"primary"}},description:"The color to use."},soft:{control:"boolean",type:"boolean"},rounded:{control:"boolean",type:"boolean"},iconStart:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...g]},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...g]}},tags:["autodocs"]},t={args:{color:"primary",text:"Badge",soft:!1,iconEnd:void 0,iconStart:void 0,rounded:!1}},s={render:()=>e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:p.map(r=>e.jsx(o,{color:r,text:r},r))}),parameters:{docs:{description:{story:"All available color variants for badges."}}}},a={render:()=>e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:p.map(r=>e.jsx(o,{color:r,text:r,soft:!0},r))}),parameters:{docs:{description:{story:"All color variants with soft (subtle) styling."}}}},n={args:{color:"primary",text:"Bookmarks",iconStart:"Bookmark"}},c={args:{color:"success",text:"Check",iconEnd:"CheckCircle"}},i={args:{color:"info",text:"Notifications",iconStart:"Bell",iconEnd:"ChevronRight"}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",text:"Icon Start",iconStart:"Star"}),e.jsx(o,{color:"success",text:"Icon End",iconEnd:"CheckCircle"}),e.jsx(o,{color:"warning",text:"Both Icons",iconStart:"AlertTriangle",iconEnd:"ArrowRight"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"danger",text:"Alert",iconStart:"XCircle",soft:!0}),e.jsx(o,{color:"info",text:"Info",iconEnd:"Info",soft:!0}),e.jsx(o,{color:"secondary",text:"Tags",iconStart:"Tag",iconEnd:"Tag",soft:!0})]})]}),parameters:{docs:{description:{story:"Examples of badges with different icon configurations."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",text:"Rounded",rounded:!0}),e.jsx(o,{color:"success",text:"With Icon",iconStart:"Check",rounded:!0}),e.jsx(o,{color:"danger",text:"Soft Rounded",soft:!0,rounded:!0})]}),parameters:{docs:{description:{story:"Badges with rounded styling (pill shape)."}}}};var x,f,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Badge',
    soft: false,
    iconEnd: undefined,
    iconStart: undefined,
    rounded: false
  }
}`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var y,h,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var B,v,b;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var E,C,w;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    text: 'Bookmarks',
    iconStart: 'Bookmark'
  }
}`,...(w=(C=n.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,j,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: 'success',
    text: 'Check',
    iconEnd: 'CheckCircle'
  }
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var D,W,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    color: 'info',
    text: 'Notifications',
    iconStart: 'Bell',
    iconEnd: 'ChevronRight'
  }
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var A,R,V;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(V=(R=d.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var N,H,M;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=(H=l.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const U=["Default","AllColors","SoftColors","WithIconStart","WithIconEnd","WithBothIcons","IconVariants","Rounded"];export{s as AllColors,t as Default,d as IconVariants,l as Rounded,a as SoftColors,i as WithBothIcons,c as WithIconEnd,n as WithIconStart,U as __namedExportsOrder,Q as default};
