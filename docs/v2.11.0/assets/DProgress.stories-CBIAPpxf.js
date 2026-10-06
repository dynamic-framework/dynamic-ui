import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as a}from"./DProgress-C6PKX574.js";import{P as U}from"./config-7dXXkQRG.js";import"./index-DowJ8Qf7.js";import"./iframe-BOlGrI6L.js";import"./preload-helper-Dp1pzeXC.js";const J={title:"Design System/Components/Progress",parameters:{docs:{description:{component:`
Wrapper around Bootstrap Progress.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Progress](https://getbootstrap.com/docs/5.3/components/progress/)

## CSS Variables
The Bootstrap documentation provides details on the default [Progress CSS Variables](https://getbootstrap.com/docs/5.3/components/progress/#css)

| Variable                               | Class     | Type            | Description      |
|----------------------------------------|-----------|-----------------|------------------|
| --${U}progress-bar-font-weight | .progress | css length unit | Text font weight |
        `}}},component:a,argTypes:{style:{control:"object",table:{category:"Appearance"}},className:{control:"text",type:"string",table:{category:"Appearance"}},currentValue:{control:"number",type:"number",description:"Current progress value",table:{category:"Content"}},minValue:{control:"number",type:"number",description:"Minimum value of the bar",table:{category:"Behavior"}},maxValue:{control:"number",type:"number",description:"Maximum value of the bar",table:{category:"Behavior"}},hideCurrentValue:{control:"boolean",type:"boolean",description:"Hide current value",table:{defaultValue:{summary:"false"},category:"Behavior"}},enableStripedAnimation:{control:"boolean",type:"boolean",description:"Enable striped animation",table:{defaultValue:{summary:"false"},category:"Appearance"}},ariaLabel:{control:"text",type:"string",description:'Accessible name of the bar. Describe what progresses, not the role. Defaults to "Progress bar" when neither `ariaLabel` nor `ariaLabelledBy` is set.',table:{defaultValue:{summary:"Progress bar"},category:"Content"}},ariaLabelledBy:{control:"text",type:"string",description:"Id of a visible element that names the bar. When set, `aria-label` is not rendered, so `ariaLabel` and the default name are ignored.",table:{category:"Content"}}},tags:["autodocs"]},t={decorators:[r=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(r,{})})],render:r=>e.jsx(a,{...r}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},s={decorators:[r=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(r,{})})],render:r=>e.jsx(a,{...r}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!0,hideCurrentValue:!1}},o={decorators:[r=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(r,{})})],render:r=>e.jsx(a,{...r}),args:{currentValue:33,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0}},n={decorators:[r=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(r,{})})],render:r=>e.jsx(a,{...r}),args:{currentValue:0,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},l={decorators:[r=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(r,{})})],render:r=>e.jsx(a,{...r}),args:{currentValue:2,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},i={decorators:[r=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(r,{})})],render:r=>e.jsx(a,{...r}),args:{currentValue:2,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0}},c={decorators:[r=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(r,{})})],render:r=>e.jsx(a,{...r}),args:{currentValue:100,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!1}},d={decorators:[r=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(r,{})})],render:r=>e.jsx(a,{...r}),args:{currentValue:75,minValue:0,maxValue:100,enableStripedAnimation:!1,hideCurrentValue:!0,style:{height:"10px"}},parameters:{docs:{description:{story:"Progress bar with custom height (10px) without text value. Useful for compact designs."}}}},u={decorators:[r=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(r,{})})],render:r=>e.jsxs(e.Fragment,{children:[e.jsx("span",{id:"storage-usage-label",className:"fw-semibold",children:"Storage used"}),e.jsx(a,{...r})]}),args:{currentValue:60,minValue:0,maxValue:100,ariaLabelledBy:"storage-usage-label"},parameters:{docs:{description:{story:"Bar named by the visible title above it through `ariaLabelledBy`, so the text is not duplicated in `ariaLabel`."}}}},m={name:"See More Examples",parameters:{controls:{disable:!0},docs:{description:{story:""},canvas:{sourceState:"hidden"},source:{code:null}}},render:()=>e.jsxs("div",{className:"alert d-flex align-items-start gap-3 p-4 rounded border border-primary-subtle bg-primary-subtle",role:"note","aria-label":"See more examples",children:[e.jsx("span",{className:"fs-4","aria-hidden":"true",children:"💡"}),e.jsxs("div",{children:[e.jsx("strong",{className:"d-block mb-1",children:"Looking for more examples?"}),e.jsxs("span",{className:"text-secondary",children:["To see more real-world usage, check the"," ",e.jsx("a",{href:"/?path=/docs/patterns-progress--docs",target:"_parent",children:e.jsx("strong",{children:"Patterns / Progress"})})," ","stories for onboarding, uploads, and financial trackers."]})]})]})};var p,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,f,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,V,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(V=o.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var j,v,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var N,C,P;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(C=l.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var A,D,B;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(D=i.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var L,T,k;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var E,M,H;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(M=d.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var _,W,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <>
      <span id="storage-usage-label" className="fw-semibold">Storage used</span>
      <DProgress {...args} />
    </>,
  args: {
    currentValue: 60,
    minValue: 0,
    maxValue: 100,
    ariaLabelledBy: 'storage-usage-label'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar named by the visible title above it through \`ariaLabelledBy\`, so the text is not duplicated in \`ariaLabel\`.'
      }
    }
  }
}`,...(O=(W=u.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var F,I,R;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const K=["Default","Stripped","Valueless","Zero","Two","TwoValueless","OneHundred","CustomHeight","WithVisibleLabel","SeeMoreExamples"];export{d as CustomHeight,t as Default,c as OneHundred,m as SeeMoreExamples,s as Stripped,l as Two,i as TwoValueless,o as Valueless,u as WithVisibleLabel,n as Zero,K as __namedExportsOrder,J as default};
