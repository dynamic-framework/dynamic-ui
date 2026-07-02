import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as a}from"./DProgress-BRL5hnRr.js";import{P as R}from"./config-C3iYXcFk.js";import"./index-Bq_YOuQj.js";import"./iframe-uxYLpz5U.js";import"./preload-helper-Dp1pzeXC.js";const $={title:"Design System/Components/Progress",parameters:{docs:{description:{component:`
Wrapper around Bootstrap Progress.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Progress](https://getbootstrap.com/docs/5.3/components/progress/)

## CSS Variables
The Bootstrap documentation provides details on the default [Progress CSS Variables](https://getbootstrap.com/docs/5.3/components/progress/#css)

| Variable                               | Class     | Type            | Description      |
|----------------------------------------|-----------|-----------------|------------------|
| --${R}progress-bar-font-weight | .progress | css length unit | Text font weight |
        `}}},component:a,argTypes:{style:{control:"object",table:{category:"Appearance"}},className:{control:"text",type:"string",table:{category:"Appearance"}},currentValue:{control:"number",type:"number",description:"Current progress value",table:{category:"Content"}},minValue:{control:"number",type:"number",description:"Minimum value of the bar",table:{category:"Behavior"}},maxValue:{control:"number",type:"number",description:"Maximum value of the bar",table:{category:"Behavior"}},hideCurrentValue:{control:"boolean",type:"boolean",description:"Hide current value",table:{defaultValue:{summary:"false"},category:"Behavior"}},enableStripedAnimation:{control:"boolean",type:"boolean",description:"Enable striped animation",table:{defaultValue:{summary:"false"},category:"Appearance"}}},tags:["autodocs"]},t={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},s={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!0,hideCurrentValue:!1}},o={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0}},n={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:0,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},l={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:2,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},i={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:2,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0}},c={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:100,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},d={decorators:[e=>r.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(e,{})})],render:e=>r.jsx(a,{...e}),args:{currentValue:75,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0,style:{height:"10px"}},parameters:{docs:{description:{story:"Progress bar with custom height (10px) without text value. Useful for compact designs."}}}},u={name:"See More Examples",parameters:{controls:{disable:!0},docs:{description:{story:""},canvas:{sourceState:"hidden"},source:{code:null}}},render:()=>r.jsxs("div",{className:"alert d-flex align-items-start gap-3 p-4 rounded border border-primary-subtle bg-primary-subtle",role:"note","aria-label":"See more examples",children:[r.jsx("span",{className:"fs-4","aria-hidden":"true",children:"💡"}),r.jsxs("div",{children:[r.jsx("strong",{className:"d-block mb-1",children:"Looking for more examples?"}),r.jsxs("span",{className:"text-secondary",children:["To see more real-world usage, check the"," ",r.jsx("a",{href:"/?path=/docs/patterns-progress--docs",target:"_parent",children:r.jsx("strong",{children:"Patterns / Progress"})})," ","stories for onboarding, uploads, and financial trackers."]})]})]})};var m,p,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,x,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,V,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(V=o.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var S,j,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var w,C,N;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var P,A,D;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var T,k,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var B,M,H;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(M=d.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var _,O,L;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'See More Examples',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: ''
      },
      canvas: {
        sourceState: 'hidden'
      },
      source: {
        code: null
      }
    }
  },
  render: () => <div className="alert d-flex align-items-start gap-3 p-4 rounded border border-primary-subtle bg-primary-subtle" role="note" aria-label="See more examples">
      <span className="fs-4" aria-hidden="true">💡</span>
      <div>
        <strong className="d-block mb-1">Looking for more examples?</strong>
        <span className="text-secondary">
          To see more real-world usage, check the
          {' '}
          <a href="/?path=/docs/patterns-progress--docs" target="_parent">
            <strong>Patterns / Progress</strong>
          </a>
          {' '}
          stories for onboarding, uploads, and financial trackers.
        </span>
      </div>
    </div>
}`,...(L=(O=u.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const q=["Default","Stripped","Valueless","Zero","Two","TwoValueless","OneHundred","CustomHeight","SeeMoreExamples"];export{d as CustomHeight,t as Default,c as OneHundred,u as SeeMoreExamples,s as Stripped,l as Two,i as TwoValueless,o as Valueless,n as Zero,q as __namedExportsOrder,$ as default};
