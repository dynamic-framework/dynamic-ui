import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{F as A}from"./DInputPassword-Dhpt8-ia.js";import{a as $}from"./constants-CyI_OqvZ.js";import{P as e}from"./config-C3iYXcFk.js";import{D as C}from"./DContext-K-JXUkSS.js";import"./iframe-B7mSGmab.js";import"./DInput-GL_S-yvK.js";import"./index-DRElh3Qy.js";import"./DIcon-CmE_dl0q.js";import"./useMediaBreakpointUp-BYF4FWC4.js";import"./useProvidedRefOrCreate-DuC56XQI.js";import"./index-HWgdXKyA.js";import"./index-DBQqSef9.js";const H={title:"Design System/Components/Input Password",component:A,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string"},style:{control:"object"},label:{control:"text",type:"string"},placeholder:{control:"text",type:"string"},value:{control:"text",type:"string",description:"The value of the input"},size:{control:{type:"radio",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"]},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},iconEndAriaLabel:{control:"text",type:"string"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},onChange:{action:"onChange"}},tags:["autodocs"]},o={args:{label:"Label",placeholder:"Placeholder",value:void 0,iconEndAriaLabel:"show/hide password"}},a={args:{id:"componentId2",label:"Label",placeholder:"Placeholder",value:void 0,invalid:!0,iconEndAriaLabel:"show/hide password"}},r={args:{id:"componentId3",label:"Label",placeholder:"Placeholder",value:void 0,valid:!0,iconEndAriaLabel:"show/hide password"}},n={args:{id:"componentId4",label:"Label",placeholder:"Placeholder",value:void 0,disabled:!0,iconEndAriaLabel:"show/hide password"}},t={args:{id:"componentId5",label:"Label",placeholder:"Placeholder",value:void 0,iconEndAriaLabel:"show/hide password",floatingLabel:!0}},l={render:S=>s.jsx(C,{...$,children:s.jsx(A,{...S})}),args:{id:"componentId6",label:"Label",placeholder:"Placeholder",value:void 0,iconEndAriaLabel:"show/hide password"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var i,d,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var m,h,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    valid: true,
    iconEndAriaLabel: 'show/hide password'
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,w,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    disabled: true,
    iconEndAriaLabel: 'show/hide password'
  }
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var I,L,y;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    iconEndAriaLabel: 'show/hide password',
    floatingLabel: true
  }
}`,...(y=(L=t.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var x,P,E;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(P=l.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const X=["Default","Invalid","Valid","Disabled","Floating","MaterialIcon"];export{o as Default,n as Disabled,t as Floating,a as Invalid,l as MaterialIcon,r as Valid,X as __namedExportsOrder,H as default};
