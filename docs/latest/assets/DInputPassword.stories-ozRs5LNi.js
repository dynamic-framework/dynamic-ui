import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{F as E}from"./DInputPassword-CD8_EwhH.js";import{a as S}from"./constants-CkChkWbF.js";import{P as e}from"./config-C3iYXcFk.js";import{D as $}from"./DContext-BO8L0Pox.js";import"./iframe-C3Wc-jvE.js";import"./preload-helper-Dp1pzeXC.js";import"./DInput-C4vo4Nl0.js";import"./index-kwiNk32f.js";import"./DIcon-n_r8fmVN.js";import"./useMediaBreakpointUp-dTfYC7kh.js";import"./useProvidedRefOrCreate-EgjOwiAs.js";import"./index-NjhlDkXl.js";import"./index-pAY3W6Xx.js";const G={title:"Design System/Components/Input Password",component:E,parameters:{docs:{description:{component:`
Component composition with \`d-input\` to make a password input component.

## CSS Variables

The Bootstrap documentation provides details on the default [Input Form CSS Variables](https://getbootstrap.com/docs/5.3/forms/form-control/#css)
and so it does [Input Group CSS Variables](https://getbootstrap.com/docs/5.3/forms/input-group/#css)

| Variable                                  | Class         | Type            | Description                 |
|-------------------------------------------|---------------|-----------------|-----------------------------|
| --${e}label-color                 | :root         | css color unit  | Label color                 |
| --${e}label-font-weight           | :root         | css font weight | Label font weight           |
| --${e}label-font-size             | :root         | css length unit | Label font size             |
| --${e}label-padding-x             | :root         | css length unit | Label horizontal padding    |
| --${e}label-padding-y             | :root         | css length unit | Label vertical padding      |
| --${e}input-border-color          | .input-group  | css color unit  | Input border color          |
| --${e}input-border-width          | .input-group  | css length unit | Input border width          |
| --${e}input-border-radius         | .input-group  | css length unit | Input border radius         |
| --${e}input-focus-border-color    | .input-group  | css color unit  | Input focus border color    |
| --${e}input-focus-box-shadow      | .input-group  | css shadow      | Input focus box shadow      |
| --${e}input-disabled-bg           | .input-group  | css color unit  | Input disable background    |
| --${e}input-disabled-color        | .input-group  | css color unit  | Input disable color         |
| --${e}input-disabled-border-color | .input-group  | css color unit  | Input disable border color  |
| --${e}form-text-padding           | .form-text    | css length unit | Hint padding                |
| --${e}form-text-gap               | .form-text    | css length unit | Space between hint elements |
| --${e}form-text-color             | .form-text    | css color unit  | Hint color                  |
| --${e}form-control-text-align     | .form-control | css text align  | Input text align            |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},label:{control:"text",type:"string",table:{category:"Content"}},placeholder:{control:"text",type:"string",table:{category:"Content"}},value:{control:"text",type:"string",description:"The value of the input",table:{category:"Content"}},size:{control:{type:"radio",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"],table:{category:"Appearance"}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback",table:{category:"Content"}},iconEndAriaLabel:{control:"text",type:"string",table:{category:"Content"}},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Appearance"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"]},o={args:{label:"Label",placeholder:"Placeholder",value:void 0,iconEndAriaLabel:"show/hide password"}},a={args:{id:"componentId2",label:"Label",placeholder:"Placeholder",value:void 0,invalid:!0,iconEndAriaLabel:"show/hide password"}},t={args:{id:"componentId3",label:"Label",placeholder:"Placeholder",value:void 0,valid:!0,iconEndAriaLabel:"show/hide password"}},r={args:{id:"componentId4",label:"Label",placeholder:"Placeholder",value:void 0,disabled:!0,iconEndAriaLabel:"show/hide password"}},n={args:{id:"componentId5",label:"Label",placeholder:"Placeholder",value:void 0,iconEndAriaLabel:"show/hide password",floatingLabel:!0}},l={render:C=>s.jsx($,{...S,children:s.jsx(E,{...C})}),args:{id:"componentId6",label:"Label",placeholder:"Placeholder",value:void 0,iconEndAriaLabel:"show/hide password"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var i,d,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    iconEndAriaLabel: 'show/hide password'
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    invalid: true,
    iconEndAriaLabel: 'show/hide password'
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var m,g,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    valid: true,
    iconEndAriaLabel: 'show/hide password'
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    disabled: true,
    iconEndAriaLabel: 'show/hide password'
  }
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,L,I;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    iconEndAriaLabel: 'show/hide password',
    floatingLabel: true
  }
}`,...(I=(L=n.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var x,P,A;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInputPassword>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DInputPassword {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    iconEndAriaLabel: 'show/hide password'
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(A=(P=l.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const X=["Default","Invalid","Valid","Disabled","Floating","MaterialIcon"];export{o as Default,r as Disabled,n as Floating,a as Invalid,l as MaterialIcon,t as Valid,X as __namedExportsOrder,G as default};
