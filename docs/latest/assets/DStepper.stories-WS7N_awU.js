import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./index-9xGy8ok_.js";import{D as W}from"./DStepperDesktop-6mYUCIcR.js";import{D as q}from"./DStepperMobile-md6XuXlT.js";import{I as $,a as z}from"./constants-CkChkWbF.js";import{D as U}from"./DContext-I2P6eEmu.js";import"./iframe-CHeqVsUI.js";import"./preload-helper-Dp1pzeXC.js";import"./DIcon-C9QpqnTB.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DWQi1yBD.js";import"./index-BGGRobhj.js";import"./index-C_Mg6fPP.js";function r({options:e,currentStep:c,iconSuccess:_,iconSuccessFamilyClass:M,iconSuccessFamilyPrefix:T,iconSuccessMaterialStyle:E=!1,vertical:O=!1,breakpoint:p="lg",className:R,completed:F=!1,style:B,dataAttributes:G}){return t.jsxs("div",{className:R,style:B,...G,children:[t.jsx("div",{className:d("d-stepper-mobile",`d-block d-${p}-none`),children:t.jsx(q,{options:e,currentStep:c})}),t.jsx("div",{className:d("d-stepper-desktop",`d-none d-${p}-block`),children:t.jsx(W,{options:e,currentStep:c,vertical:O,iconSuccess:_,iconSuccessFamilyClass:M,iconSuccessFamilyPrefix:T,iconSuccessMaterialStyle:E,completed:F})})]})}try{r.displayName="DStepper",r.__docgenInfo={description:"",displayName:"DStepper",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Step[]"}},currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"number"}},iconSuccess:{defaultValue:null,description:"",name:"iconSuccess",required:!1,type:{name:"string | undefined"}},iconSuccessFamilyClass:{defaultValue:null,description:"",name:"iconSuccessFamilyClass",required:!1,type:{name:"string | undefined"}},iconSuccessFamilyPrefix:{defaultValue:null,description:"",name:"iconSuccessFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconSuccessMaterialStyle:{defaultValue:{value:"false"},description:"",name:"iconSuccessMaterialStyle",required:!1,type:{name:"boolean | undefined"}},vertical:{defaultValue:{value:"false"},description:"",name:"vertical",required:!1,type:{name:"boolean | undefined"}},completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},breakpoint:{defaultValue:{value:"lg"},description:"",name:"breakpoint",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"md"'}]}}}}}catch{}const ie={title:"Design System/Components/Stepper",component:r,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},currentStep:{control:"number",type:"number",description:"Current step number",table:{category:"Content"}},iconSuccess:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...$],table:{category:"Icon"}},iconSuccessMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},iconSuccessFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconSuccessFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},vertical:{control:"boolean",type:"boolean",description:"Display vertical stepper",table:{category:"Appearance"}},completed:{control:"boolean",type:"boolean",description:"Display all steps as completed",table:{category:"Behavior"}},breakpoint:{control:{type:"radio"},options:["sm","md","lg","xl","xxl"],table:{category:"Behavior"}}},tags:["autodocs"]},s={decorators:[e=>t.jsx("div",{style:{width:"768px",height:"300px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(r,{...e}),args:{currentStep:2,options:[{label:"Personal Information",value:1},{label:"Payment Details",value:2},{label:"Confirmation",value:3}]}},o={decorators:[e=>t.jsx("div",{style:{width:"768px",height:"300px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(q,{...e}),args:{currentStep:2,options:[{label:"Select Service",value:1},{label:"Choose Plan",value:2},{label:"Review Order",value:3}]}},i={decorators:[e=>t.jsx("div",{style:{width:"768px",height:"300px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(r,{...e}),args:{currentStep:2,options:[{label:"Upload Documents",value:1},{label:"Verify Information",value:2},{label:"Submit Application",value:3}],vertical:!0}},n={decorators:[e=>t.jsx("div",{style:{width:"768px",height:"400px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(r,{...e}),args:{currentStep:2,options:[{label:"Account Information",description:"Enter your personal details",value:1},{label:"Billing Address",description:"Provide your billing information",value:2},{label:"Confirmation",description:"Review and confirm your order",value:3}]},parameters:{docs:{description:{story:"Stepper with description text for each step. Descriptions provide additional context about what the user should do in each step."}}}},l={decorators:[e=>t.jsx("div",{style:{width:"768px",height:"500px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:t.jsx(e,{})})],render:e=>t.jsx(r,{...e}),args:{currentStep:2,options:[{label:"Create Account",description:"Sign up with your email and password",value:1},{label:"Verify Email",description:"Check your inbox for verification link",value:2},{label:"Complete Profile",description:"Add your profile information and preferences",value:3}],vertical:!0},parameters:{docs:{description:{story:"Vertical stepper with descriptions. Descriptions are especially useful in vertical layouts where there is more space."}}}},a={render:e=>t.jsx(U,{...z,children:t.jsx(r,{...e})}),args:{currentStep:2,options:[{label:"Account Setup",value:1},{label:"Security Settings",value:2},{label:"Get Started",value:3}],iconSuccess:"verified"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var u,m,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      label: 'Personal Information',
      value: 1
    }, {
      label: 'Payment Details',
      value: 2
    }, {
      label: 'Confirmation',
      value: 3
    }]
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var y,h,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      label: 'Select Service',
      value: 1
    }, {
      label: 'Choose Plan',
      value: 2
    }, {
      label: 'Review Order',
      value: 3
    }]
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,S,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      label: 'Upload Documents',
      value: 1
    }, {
      label: 'Verify Information',
      value: 2
    }, {
      label: 'Submit Application',
      value: 3
    }],
    vertical: true
  }
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var x,D,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '768px',
    height: '400px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DStepper {...args} />,
  args: {
    currentStep: 2,
    options: [{
      label: 'Account Information',
      description: 'Enter your personal details',
      value: 1
    }, {
      label: 'Billing Address',
      description: 'Provide your billing information',
      value: 2
    }, {
      label: 'Confirmation',
      description: 'Review and confirm your order',
      value: 3
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Stepper with description text for each step. Descriptions provide additional context about what the user should do in each step.'
      }
    }
  }
}`,...(w=(D=n.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var j,C,V;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '768px',
    height: '500px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DStepper {...args} />,
  args: {
    currentStep: 2,
    options: [{
      label: 'Create Account',
      description: 'Sign up with your email and password',
      value: 1
    }, {
      label: 'Verify Email',
      description: 'Check your inbox for verification link',
      value: 2
    }, {
      label: 'Complete Profile',
      description: 'Add your profile information and preferences',
      value: 3
    }],
    vertical: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical stepper with descriptions. Descriptions are especially useful in vertical layouts where there is more space.'
      }
    }
  }
}`,...(V=(C=l.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var N,A,I,P,k;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DStepper>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DStepper {...args} />
    </DContextProvider>,
  args: {
    currentStep: 2,
    options: [{
      label: 'Account Setup',
      value: 1
    }, {
      label: 'Security Settings',
      value: 2
    }, {
      label: 'Get Started',
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
}`,...(I=(A=a.parameters)==null?void 0:A.docs)==null?void 0:I.source},description:{story:"To use Stepper with Material Symbols style use a `DContextProvider` with `familyClass`\nand the flag `materialStyle=true` or use the flags directly over the\n`DStepper` component as a props",...(k=(P=a.parameters)==null?void 0:P.docs)==null?void 0:k.description}}};const ne=["Default","DefaultMobile","Vertical","WithDescription","WithDescriptionVertical","MaterialStyle"];export{s as Default,o as DefaultMobile,a as MaterialStyle,i as Vertical,n as WithDescription,l as WithDescriptionVertical,ne as __namedExportsOrder,ie as default};
