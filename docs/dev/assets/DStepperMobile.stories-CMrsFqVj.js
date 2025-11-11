import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as p}from"./DStepperMobile-WJBieKs4.js";import{P as e}from"./config-C3iYXcFk.js";import"./iframe-ByOBXyA_.js";import"./index-C-Y6iqFF.js";const m={title:"Design System/Components/Stepper Mobile",component:p,parameters:{docs:{description:{component:`
## CSS Variables
| Variable                                                   |Class| Type               | Description                        |
|------------------------------------------------------------|-|--------------------|------------------------------------|
| --${e}step-container-gap                           |.d-stepper| css length unit    | Container gap                      |
| --${e}step-progress-outter-size                    |.d-stepper| css length unit    | Outter circle size                 |
| --${e}step-progress-outter-z-index                 |.d-stepper| css index unit     | Outter circle z-index              |
| --${e}step-progress-outter-fill-background-color   |.d-stepper| css color unit     | Fill background color              |
| --${e}step-progress-outter-background-color        |.d-stepper| css color unit     | Unfilled background color          |
| --${e}step-progress-inner-size                     |.d-stepper| css length unit    | Inner circle size                  |
| --${e}step-progress-inner-z-index                  |.d-stepper| css index unit     | Inner circle z-index               |
| --${e}step-progress-inner-background-color         |.d-stepper| css color unit     | Inner background color             |
| --${e}step-current-step-z-index                    |.d-stepper| css index unit     | Current step text z-index          |
| --${e}step-current-step-font-weight                |.d-stepper| css weight unit    | Current step font weight           |
| --${e}step-current-step-color                      |.d-stepper| css color unit     | Current step text color            |
| --${e}step-info-max-width                          |.d-stepper| css length unit    | Step info max width                |
| --${e}step-info-label-font-size                    |.d-stepper| css length unit    | Step label font size               |
| --${e}step-info-label-color                        |.d-stepper| css color unit     | Step label color                   |
| --${e}step-info-description-font-size              |.d-stepper| css length unit    | Step description font size         |
| --${e}step-info-description-color                  |.d-stepper| css color unit     | Step description color             |
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},currentStep:{control:"number",type:"number",description:"Current step number"}},tags:["autodocs"]},t={decorators:[s=>r.jsx("div",{style:{width:"768px",height:"420px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:r.jsx(s,{})})],render:s=>r.jsx(p,{...s}),args:{currentStep:1,options:[{label:"First step",description:"Lorem ipsum dolor sit amet",value:1},{label:"Second step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:2},{label:"Third step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:3},{label:"Fourth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:4},{label:"Fifth step",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",value:5}]}};var i,o,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '768px',
    height: '420px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DStepperMobile {...args} />,
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,m as default};
