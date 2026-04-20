import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{D as p}from"./DStepperDesktop-BddqHYMg.js";import{I as h}from"./constants-CkChkWbF.js";import{P as e}from"./config-C3iYXcFk.js";import"./index-FBYaOunh.js";import"./iframe-DzUt-hmA.js";import"./preload-helper-Dp1pzeXC.js";import"./DIcon-CflnbPoX.js";import"./useMediaBreakpointUp-CMxOr_Bo.js";import"./DContext-BWXROE2e.js";import"./index-DPeSPgHT.js";import"./index-BeUCTf5O.js";const I={title:"Design System/Components/Stepper Desktop",component:p,parameters:{docs:{description:{component:`
## CSS Variables
| Variable                                           | Class              | Type            | Description                     |
|----------------------------------------------------|--------------------|-----------------|---------------------------------|
| --${e}step-icon-container-color            | .d-stepper-desktop | css color unit  | Icon container color            |
| --${e}step-icon-container-background-color | .d-stepper-desktop | css color unit  | Icon container background color |
| --${e}step-icon-container-size             | .d-stepper-desktop | css length unit | Icon container size             |
| --${e}step-icon-container-border-width     | .d-stepper-desktop | css length unit | Icon container border width     |
| --${e}step-icon-container-font-size        | .d-stepper-desktop | css length unit | Icon container font size        |
| --${e}step-icon-container-border-color     | .d-stepper-desktop | css color unit  | Icon container border color     |
| --${e}step-icon-container-border-radius    | .d-stepper-desktop | css length unit | Icon container border radius    |
| --${e}step-icon-container-z-index          | .d-stepper-desktop | css index unit  | Icon container z-index          |
| --${e}step-label-height                    | .d-stepper-desktop | css length unit | Step label height               |
| --${e}step-icon-size                       | .d-stepper-desktop | css length unit | Step icon size                  |
| --${e}step-gap                             | .d-stepper-desktop | css length unit | Step gap spacing                |
| --${e}step-z-index                         | .d-stepper-desktop | css index unit  | Step z-index                    |
| --${e}step-check-text-color                | .d-stepper-desktop | css color unit  | Checked step text color         |
| --${e}step-check-background-color          | .d-stepper-desktop | css color unit  | Checked step background color   |
| --${e}step-check-border-color              | .d-stepper-desktop | css color unit  | Checked step border color       |
| --${e}step-current-text-color              | .d-stepper-desktop | css color unit  | Current step text color         |
| --${e}step-current-background-color        | .d-stepper-desktop | css color unit  | Current step background color   |
| --${e}step-line-stroke                     | .d-stepper-desktop | css length unit | Step line size                  |
| --${e}step-line-color                      | .d-stepper-desktop | css color unit  | Step line color                 |
| --${e}step-label-padding                   | .d-stepper-desktop | css length unit | Step label padding              |
| --${e}step-label-padding                   | .d-stepper-desktop | css length unit | Step label padding              |
| --${e}step-vertical-label-padding          | .d-stepper-desktop | css length unit | Step vertical label padding     |
        `}}},argTypes:{className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},currentStep:{control:"number",type:"number",description:"Current step number",table:{category:"Content"}},iconSuccess:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...h],table:{category:"Icon"}},vertical:{control:"boolean",type:"boolean",description:"Display vertical stepper",table:{category:"Appearance"}},completed:{control:"boolean",type:"boolean",description:"Display all steps as completed",table:{category:"Behavior"}},alignStart:{control:"boolean",type:"boolean",description:"Change text alignment",table:{category:"Appearance"}}},tags:["autodocs"]},o={decorators:[t=>i.jsx("div",{style:{width:"768px",height:"420px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:i.jsx(t,{})})],render:t=>i.jsx(p,{...t}),args:{currentStep:1,options:[{label:"First step",description:"Lorem ipsum dolor sit amet",value:1},{label:"Second step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:2},{label:"Third step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:3},{label:"Fourth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:4},{label:"Fifth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:5}]}},s={decorators:[t=>i.jsx("div",{style:{width:"768px",height:"420px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:i.jsx(t,{})})],render:t=>i.jsx(p,{...t}),args:{currentStep:1,alignStart:!0,options:[{label:"First step",description:"Lorem ipsum dolor sit amet",value:1},{label:"Second step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:2},{label:"Third step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:3},{label:"Fourth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:4},{label:"Fifth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:5}]}},r={decorators:[t=>i.jsx("div",{style:{width:"768px",height:"420px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:i.jsx(t,{})})],render:t=>i.jsx(p,{...t}),args:{currentStep:1,options:[{label:"First step",description:"Lorem ipsum dolor sit amet",value:1},{label:"Second step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:2},{label:"Third step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:3},{label:"Fourth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:4},{label:"Fifth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:5}],vertical:!0}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '768px',
    height: '420px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DStepperDesktop {...args} />,
  args: {
    currentStep: 1,
    options: [{
      label: 'First step',
      description: 'Lorem ipsum dolor sit amet',
      value: 1
    }, {
      label: 'Second step',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      value: 2
    }, {
      label: 'Third step',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 3
    }, {
      label: 'Fourth step',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 4
    }, {
      label: 'Fifth step',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 5
    }]
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var a,l,u;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '768px',
    height: '420px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DStepperDesktop {...args} />,
  args: {
    currentStep: 1,
    alignStart: true,
    options: [{
      label: 'First step',
      description: 'Lorem ipsum dolor sit amet',
      value: 1
    }, {
      label: 'Second step',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      value: 2
    }, {
      label: 'Third step',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 3
    }, {
      label: 'Fourth step',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 4
    }, {
      label: 'Fifth step',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 5
    }]
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,g,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '768px',
    height: '420px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DStepperDesktop {...args} />,
  args: {
    currentStep: 1,
    options: [{
      label: 'First step',
      description: 'Lorem ipsum dolor sit amet',
      value: 1
    }, {
      label: 'Second step',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      value: 2
    }, {
      label: 'Third step',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 3
    }, {
      label: 'Fourth step',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 4
    }, {
      label: 'Fifth step',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      value: 5
    }],
    vertical: true
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const z=["Default","TextAlignStart","Vertical"];export{o as Default,s as TextAlignStart,r as Vertical,z as __namedExportsOrder,I as default};
