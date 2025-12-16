import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{D as p}from"./DStepperDesktop-Bru0hVuT.js";import{I as b}from"./constants-CyI_OqvZ.js";import{P as e}from"./config-C3iYXcFk.js";import"./index-GkXUhdzL.js";import"./iframe-CRnNZQHm.js";import"./DIcon-BUdbm3Zg.js";import"./useMediaBreakpointUp-Bwg6JIEx.js";import"./DContext-6UBvO8ys.js";import"./index-HDlYifod.js";import"./index-BPHBfF0h.js";const z={title:"Design System/Components/Stepper Desktop",component:p,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},currentStep:{control:"number",type:"number",description:"Current step number"},iconSuccess:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...b]},vertical:{control:"boolean",type:"boolean",description:"Display vertical stepper"},completed:{control:"boolean",type:"boolean",description:"Display all steps as completed"},alignStart:{control:"boolean",type:"boolean",description:"Change text alignment"}},tags:["autodocs"]},s={decorators:[t=>i.jsx("div",{style:{width:"768px",height:"420px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:i.jsx(t,{})})],render:t=>i.jsx(p,{...t}),args:{currentStep:1,options:[{label:"First step",description:"Lorem ipsum dolor sit amet",value:1},{label:"Second step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:2},{label:"Third step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:3},{label:"Fourth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:4},{label:"Fifth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:5}]}},o={decorators:[t=>i.jsx("div",{style:{width:"768px",height:"420px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:i.jsx(t,{})})],render:t=>i.jsx(p,{...t}),args:{currentStep:1,alignStart:!0,options:[{label:"First step",description:"Lorem ipsum dolor sit amet",value:1},{label:"Second step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:2},{label:"Third step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:3},{label:"Fourth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:4},{label:"Fifth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:5}]}},r={decorators:[t=>i.jsx("div",{style:{width:"768px",height:"420px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:i.jsx(t,{})})],render:t=>i.jsx(p,{...t}),args:{currentStep:1,options:[{label:"First step",description:"Lorem ipsum dolor sit amet",value:1},{label:"Second step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:2},{label:"Third step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:3},{label:"Fourth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:4},{label:"Fifth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:5}],vertical:!0}};var n,c,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,a,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(a=o.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var m,g,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const C=["Default","TextAlignStart","Vertical"];export{s as Default,o as TextAlignStart,r as Vertical,C as __namedExportsOrder,z as default};
