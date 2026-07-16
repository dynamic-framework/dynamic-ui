import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as L}from"./DInputRange-Csq66TZf.js";import"./iframe-vLNjGVop.js";import"./preload-helper-Dp1pzeXC.js";import"./index-nyyuC_Uj.js";import"./useProvidedRefOrCreate-8yhSHKFF.js";import"./config-C3iYXcFk.js";const A={title:"Design System/Components/Input Range",component:L,parameters:{docs:{description:{component:`
Use our custom range inputs for consistent cross-browser styling and built-in customization.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Range](https://getbootstrap.com/docs/5.3/forms/range/#overview)
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",description:"The CSS class name of the input",table:{category:"Appearance"}},style:{control:"object",description:"Inline style object for the input",table:{category:"Appearance"}},value:{control:"number",type:"number",description:"The value of the input",table:{category:"Content"}},label:{control:"text",type:"string",description:"The label for the input",table:{category:"Content"}},ariaLabel:{control:"text",type:"string",description:"The ARIA label for the input",table:{category:"HTML Attributes"}},min:{control:"number",type:"number",description:"The minimum value for the input",table:{category:"Behavior"}},max:{control:"number",type:"number",description:"The maximum value for the input",table:{category:"Behavior"}},step:{control:"number",type:"number",description:"The step value for the input",table:{category:"Behavior"}},filledValue:{control:"boolean",type:"boolean",description:"To determine if the color of the track behind the thumb is changed",table:{category:"Appearance"}},disabled:{control:"boolean",type:"boolean",description:"Whether the input is disabled or not",table:{category:"Behavior"}},onChange:{action:"onChange",description:"Callback function triggered when the input value changes",table:{category:"Events"}}},tags:["autodocs"]},a={args:{min:1,max:100,value:40,ariaLabel:"Label"}},t={args:{id:"componentId2",label:"Label",min:1,max:100,value:50}},r={args:{id:"componentId2",label:"Label",min:1,max:100,value:50,filledValue:!1}},o={args:{id:"componentId2",label:"Label",min:1,max:100,value:80,disabled:!0}},n={name:"See More Examples",parameters:{controls:{disable:!0},docs:{description:{story:""},canvas:{sourceState:"hidden"},source:{code:null}}},render:()=>e.jsxs("div",{className:"alert d-flex align-items-start gap-3 p-4 rounded border border-primary-subtle bg-primary-subtle",role:"note","aria-label":"See more examples",children:[e.jsx("span",{className:"fs-4","aria-hidden":"true",children:"💡"}),e.jsxs("div",{children:[e.jsx("strong",{className:"d-block mb-1",children:"Looking for more examples?"}),e.jsxs("span",{className:"text-secondary",children:["To see more examples, you can review the"," ",e.jsx("a",{href:"/?path=/docs/patterns-input-range--docs",target:"_parent",children:e.jsx("strong",{children:"Patterns / Input Range"})})," ","stories, where you will find real-world usage patterns like live value display, step markers, and loan simulators."]})]})]})};var s,l,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 100,
    value: 40,
    ariaLabel: 'Label'
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 50
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 50,
    filledValue: false
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 80,
    disabled: true
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,f,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          To see more examples, you can review the
          {' '}
          <a href="/?path=/docs/patterns-input-range--docs" target="_parent">
            <strong>Patterns / Input Range</strong>
          </a>
          {' '}
          stories, where you will find real-world usage patterns like live value display,
          step markers, and loan simulators.
        </span>
      </div>
    </div>
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const C=["WithoutLabel","Default","WithoutFilledValue","Disabled","SeeMoreExamples"];export{t as Default,o as Disabled,n as SeeMoreExamples,r as WithoutFilledValue,a as WithoutLabel,C as __namedExportsOrder,A as default};
