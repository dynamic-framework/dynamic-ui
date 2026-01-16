import{j as t}from"./jsx-runtime-DztICxWZ.js";import{D as k}from"./DStepperDesktop-LEJjF4ga.js";import{D as j}from"./DStepperMobile-7bnwfEEE.js";import{I,a as P}from"./constants-jnS-YoC_.js";import{D as O}from"./DContext-D_Evvl3v.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-PkosZWDx.js";import"./DIcon-CRqHu6fZ.js";import"./config-BV4l-vIF.js";import"./index-COvqAhMQ.js";import"./index-C5fUYp4E.js";function s({options:e,currentStep:n,iconSuccess:L,iconSuccessFamilyClass:w,iconSuccessFamilyPrefix:N,iconSuccessMaterialStyle:q=!1,vertical:C=!1,breakpoint:l="lg",className:V,completed:_=!1,style:M,dataAttributes:T}){return t.jsxs("div",{className:V,style:M,...T,children:[t.jsx("div",{className:`d-block d-${l}-none`,children:t.jsx(j,{options:e,currentStep:n})}),t.jsx("div",{className:`d-none d-${l}-block`,children:t.jsx(k,{options:e,currentStep:n,vertical:C,iconSuccess:L,iconSuccessFamilyClass:w,iconSuccessFamilyPrefix:N,iconSuccessMaterialStyle:q,completed:_})})]})}try{s.displayName="DStepper",s.__docgenInfo={description:"",displayName:"DStepper",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Step[]"}},currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"number"}},iconSuccess:{defaultValue:null,description:"",name:"iconSuccess",required:!1,type:{name:"string | undefined"}},iconSuccessFamilyClass:{defaultValue:null,description:"",name:"iconSuccessFamilyClass",required:!1,type:{name:"string | undefined"}},iconSuccessFamilyPrefix:{defaultValue:null,description:"",name:"iconSuccessFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconSuccessMaterialStyle:{defaultValue:{value:"false"},description:"",name:"iconSuccessMaterialStyle",required:!1,type:{name:"boolean | undefined"}},vertical:{defaultValue:{value:"false"},description:"",name:"vertical",required:!1,type:{name:"boolean | undefined"}},completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},breakpoint:{defaultValue:{value:"lg"},description:"",name:"breakpoint",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"md"'}]}}}}}catch{}const K={title:"Design System/Components/Stepper",component:s,parameters:{docs:{description:{component:`
The Stepper component is designed to provide a responsive step-by-step navigation interface.
It intelligently switches between a desktop and a mobile layout based on the screen size using media queries.
This ensures an optimal user experience across different devices.

## Overview and Usage
The Stepper component dynamically switches between [DStepperDesktop](/docs/design-system-components-stepper-desktop--docs)
for larger screens and [DStepperMobile](/docs/design-system-components-stepper-mobile--docs) for smaller screens.

This is managed through media queries, which ensure that the appropriate version is displayed based on the user's device.
By default, the breakpoint for switching between \`DStepperDesktop\` and \`DStepperMobile\` is set to **lg** (large screens)
at \`992px\`, however this breakpoint can be customized to meet specific requirements.

+ **\`DStepperMobile\`** is displayed on screens narrower than 992px.
+ **\`DStepperDesktop\`** is displayed on screens wider than 992px.

If your project's requirements do not require dynamic switching between components based on screen size, you can use
the single \`DStepperDesktop\` or \`DStepperMobile\` component independently and fine-tune its behavior and appearance to suit your needs. This
provides a simpler alternative for scenarios where responsive behavior is not needed.
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},currentStep:{control:"number",type:"number",description:"Current step number"},iconSuccess:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...I]},iconSuccessMaterialStyle:{control:"boolean",type:"boolean"},iconSuccessFamilyClass:{control:"text",type:"string"},iconSuccessFamilyPrefix:{control:"text",type:"string"},vertical:{control:"boolean",type:"boolean",description:"Display vertical stepper"},completed:{control:"boolean",type:"boolean",description:"Display all steps as completed"},breakpoint:{control:{type:"radio"},options:["sm","md","lg","xl","xxl"]}},tags:["autodocs"]},i={decorators:[e=>t.jsx("div",{style:{width:"768px",height:"300px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(s,{...e}),args:{currentStep:2,options:[{label:"Lorem ipsum dolor sit amet",value:1},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",value:2},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:3}]}},o={decorators:[e=>t.jsx("div",{style:{width:"768px",height:"300px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(j,{...e}),args:{currentStep:2,options:[{label:"Lorem ipsum dolor sit amet",value:1},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",value:2},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:3}]}},a={decorators:[e=>t.jsx("div",{style:{width:"768px",height:"300px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(s,{...e}),args:{currentStep:2,options:[{label:"Lorem ipsum dolor sit amet",value:1},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",value:2},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:3}],vertical:!0}},r={render:e=>t.jsx(O,{...P,children:t.jsx(s,{...e})}),args:{currentStep:2,options:[{label:"Lorem ipsum dolor sit amet",value:1},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",value:2},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:3}],iconSuccess:"verified"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var c,d,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '768px',
    height: '300px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DStepper {...args} />,
  args: {
    currentStep: 2,
    options: [{
      label: 'Lorem ipsum dolor sit amet',
      value: 1
    }, {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      value: 2
    }, {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 3
    }]
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '768px',
    height: '300px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DStepperMobile {...args} />,
  args: {
    currentStep: 2,
    options: [{
      label: 'Lorem ipsum dolor sit amet',
      value: 1
    }, {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      value: 2
    }, {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 3
    }]
  }
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,y,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '768px',
    height: '300px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DStepper {...args} />,
  args: {
    currentStep: 2,
    options: [{
      label: 'Lorem ipsum dolor sit amet',
      value: 1
    }, {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      value: 2
    }, {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 3
    }],
    vertical: true
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,b,h,x,D;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DStepper>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DStepper {...args} />
    </DContextProvider>,
  args: {
    currentStep: 2,
    options: [{
      label: 'Lorem ipsum dolor sit amet',
      value: 1
    }, {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      value: 2
    }, {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 3
    }],
    iconSuccess: 'verified'
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"To use Stepper with Material Symbols style use a `DContextProvider` with `familyClass`\nand the flag `materialStyle=true` or use the flags directly over the\n`DStepper` component as a props",...(D=(x=r.parameters)==null?void 0:x.docs)==null?void 0:D.description}}};const Q=["Default","DefaultMobile","Vertical","MaterialStyle"];export{i as Default,o as DefaultMobile,r as MaterialStyle,a as Vertical,Q as __namedExportsOrder,K as default};
