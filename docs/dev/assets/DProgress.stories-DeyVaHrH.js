import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as x}from"./index-D0sKC-UO.js";import{r as m}from"./iframe-XnRhdyHW.js";import{P as W}from"./config-BV4l-vIF.js";function a({className:e,style:I,currentValue:d,minValue:R=0,maxValue:c=100,hideCurrentValue:Z=!1,enableStripedAnimation:p=!1,dataAttributes:$}){const g=m.useMemo(()=>Math.round(d*100/c),[d,c]),f=m.useMemo(()=>`${g}%`,[g]),F=m.useMemo(()=>({"progress-bar":!0,"progress-bar-striped progress-bar-animated":p}),[p]);return r.jsx("div",{className:x("progress",e),...$,children:r.jsx("div",{className:x(F),role:"progressbar","aria-label":"Progress bar",style:{width:f,...I},"aria-valuenow":d,"aria-valuemin":R,"aria-valuemax":c,children:!Z&&f})})}try{a.displayName="DProgress",a.__docgenInfo={description:"",displayName:"DProgress",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},currentValue:{defaultValue:null,description:"",name:"currentValue",required:!0,type:{name:"number"}},minValue:{defaultValue:{value:"0"},description:"",name:"minValue",required:!1,type:{name:"number | undefined"}},maxValue:{defaultValue:{value:"100"},description:"",name:"maxValue",required:!1,type:{name:"number | undefined"}},hideCurrentValue:{defaultValue:{value:"false"},description:"",name:"hideCurrentValue",required:!1,type:{name:"boolean | undefined"}},enableStripedAnimation:{defaultValue:{value:"false"},description:"",name:"enableStripedAnimation",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const J={title:"Design System/Components/Progress",parameters:{docs:{description:{component:`
Wrapper around Bootstrap Progress.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Progress](https://getbootstrap.com/docs/5.3/components/progress/)

## CSS Variables
The Bootstrap documentation provides details on the default [Progress CSS Variables](https://getbootstrap.com/docs/5.3/components/progress/#css)

| Variable                               | Class     | Type            | Description      |
|----------------------------------------|-----------|-----------------|------------------|
| --${W}progress-bar-font-weight | .progress | css length unit | Text font weight |
        `}}},component:a,argTypes:{style:{control:"object"},className:{control:"text",type:"string"},currentValue:{control:"number",type:"number",description:"Current progress value"},minValue:{control:"number",type:"number",description:"Minimum value of the bar"},maxValue:{control:"number",type:"number",description:"Maximum value of the bar"},hideCurrentValue:{control:"boolean",type:"boolean",description:"Hide current value",table:{defaultValue:{summary:"false"}}},enableStripedAnimation:{control:"boolean",type:"boolean",description:"Enable striped animation",table:{defaultValue:{summary:"false"}}}},tags:["autodocs"]},t={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},s={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!0,hideCurrentValue:!1}},n={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0}},l={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:0,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},o={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:2,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},i={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:2,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0}},u={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:100,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}};var h,V,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(V=t.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var b,S,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var v,w,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var N,A,P;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(A=l.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var D,_,T;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(_=o.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var q,M,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(E=(M=i.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var B,H,O;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(H=u.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const K=["Default","Stripped","Valueless","Zero","Two","TwoValueless","OneHundred"];export{t as Default,u as OneHundred,s as Stripped,o as Two,i as TwoValueless,n as Valueless,l as Zero,K as __namedExportsOrder,J as default};
