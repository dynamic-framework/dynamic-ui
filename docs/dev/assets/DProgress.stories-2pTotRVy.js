import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as t}from"./DProgress-CbPGL5cN.js";import{P as _}from"./config-C3iYXcFk.js";import"./index-C-Y6iqFF.js";import"./iframe-ByOBXyA_.js";const I={title:"Design System/Components/Progress",parameters:{docs:{description:{component:`
Wrapper around Bootstrap Progress.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Progress](https://getbootstrap.com/docs/5.3/components/progress/)

## CSS Variables
The Bootstrap documentation provides details on the default [Progress CSS Variables](https://getbootstrap.com/docs/5.3/components/progress/#css)

| Variable                               | Class     | Type            | Description      |
|----------------------------------------|-----------|-----------------|------------------|
| --${_}progress-bar-font-weight | .progress | css length unit | Text font weight |
        `}}},component:t,argTypes:{style:{control:"object"},className:{control:"text",type:"string"},currentValue:{control:"number",type:"number",description:"Current progress value"},minValue:{control:"number",type:"number",description:"Minimum value of the bar"},maxValue:{control:"number",type:"number",description:"Maximum value of the bar"},hideCurrentValue:{control:"boolean",type:"boolean",description:"Hide current value",table:{defaultValue:{summary:"false"}}},enableStripedAnimation:{control:"boolean",type:"boolean",description:"Enable striped animation",table:{defaultValue:{summary:"false"}}}},tags:["autodocs"]},a={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(t,{...e}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},s={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(t,{...e}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!0,hideCurrentValue:!1}},n={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(t,{...e}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0}},o={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(t,{...e}),args:{currentValue:0,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},i={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(t,{...e}),args:{currentValue:2,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},l={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(t,{...e}),args:{currentValue:2,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0}},c={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(t,{...e}),args:{currentValue:100,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},u={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(t,{...e}),args:{currentValue:75,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0,style:{height:"10px"}},parameters:{docs:{description:{story:"Progress bar with custom height (10px) without text value. Useful for compact designs."}}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DProgress {...args} />,
  args: {
    currentValue: 33,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: false
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,x,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DProgress {...args} />,
  args: {
    currentValue: 33,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: true,
    hideCurrentValue: false
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,V,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DProgress {...args} />,
  args: {
    currentValue: 33,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: true
  }
}`,...(y=(V=n.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var S,j,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DProgress {...args} />,
  args: {
    currentValue: 0,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: false
  }
}`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var v,w,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DProgress {...args} />,
  args: {
    currentValue: 2,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: false
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var A,N,P;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DProgress {...args} />,
  args: {
    currentValue: 2,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: true
  }
}`,...(P=(N=l.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var D,T,H;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DProgress {...args} />,
  args: {
    currentValue: 100,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: false
  }
}`,...(H=(T=c.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var B,E,O;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DProgress {...args} />,
  args: {
    currentValue: 75,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: true,
    style: {
      height: '10px'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with custom height (10px) without text value. Useful for compact designs.'
      }
    }
  }
}`,...(O=(E=u.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const W=["Default","Stripped","Valueless","Zero","Two","TwoValueless","OneHundred","CustomHeight"];export{u as CustomHeight,a as Default,c as OneHundred,s as Stripped,i as Two,l as TwoValueless,n as Valueless,o as Zero,W as __namedExportsOrder,I as default};
