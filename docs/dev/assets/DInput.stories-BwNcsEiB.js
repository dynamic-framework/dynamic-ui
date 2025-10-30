import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{F as R}from"./DInput-D8D_BD8e.js";import{I as p,a as z}from"./constants-Bqs03lsf.js";import{P as e}from"./config-BV4l-vIF.js";import{D as k}from"./DIcon-BtjKyMWG.js";import{D as G}from"./DContext-Dm_WebLV.js";import"./iframe-XnRhdyHW.js";import"./index-D0sKC-UO.js";import"./useProvidedRefOrCreate-DwhWJTgz.js";import"./index-CQ6hCEsd.js";import"./index-CucmxpGD.js";const te={title:"Design System/Components/Input",component:R,parameters:{docs:{description:{component:`
Wrapper around Bootstrap input group elements.

Give textual form controls like \`<input>s\`, \`<textarea>s\` and \`<label>s\` an upgrade with custom styles, sizing, focus states, and more.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Forms](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Form Control](https://getbootstrap.com/docs/5.3/forms/forcontrol/)
+ [Bootstrap Input Group](https://getbootstrap.com/docs/5.3/forms/input-group/)

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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"Name of the input"},className:{control:"text",type:"string"},style:{control:"object"},iconFamilyClass:{control:"text",type:"string"},iconFamilyPrefix:{control:"text",type:"string"},iconMaterialStyle:{control:"boolean",type:"boolean"},label:{control:"text",type:"string"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...p]},labelIconFamilyClass:{control:"text",type:"string"},labelIconFamilyPrefix:{control:"text",type:"string"},labelIconMaterialStyle:{control:"boolean",type:"boolean"},placeholder:{control:"text",type:"string"},type:{control:"select",options:["text","email","number"],type:"string",description:"The type of the input"},value:{control:"text",type:"string",description:"The value of the input"},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"]},inputMode:{control:"text",type:"string",description:"Input mode"},pattern:{control:"text",type:"string",description:"Pattern to validate"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...p]},iconStartDisabled:{control:"boolean",type:"boolean"},iconStartAriaLabel:{control:"text",type:"string"},iconStartTabIndex:{control:"number",type:"number"},iconStartFamilyClass:{control:"text",type:"string"},iconStartFamilyPrefix:{control:"text",type:"string"},iconStartMaterialStyle:{control:"boolean",type:"boolean"},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...p]},iconEndDisabled:{control:"boolean",type:"boolean"},iconEndAriaLabel:{control:"text",type:"string"},iconEndTabIndex:{control:"number",type:"number"},iconEndFamilyClass:{control:"text",type:"string"},iconEndFamilyPrefix:{control:"text",type:"string"},iconEndMaterialStyle:{control:"boolean",type:"boolean"},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},onIconStartClick:{action:"onIconStartClicked"},onIconEndClick:{action:"onIconStartClicked"},onChange:{action:"onChange"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"},onWheel:{action:"onWheel"}},tags:["autodocs"]},t={args:{id:"componentId1",label:"Label",placeholder:"Placeholder",labelIcon:void 0,type:"text",value:void 0,hint:"Assistive text"}},o={args:{id:"componentId3",label:"Label",placeholder:"Placeholder",labelIcon:void 0,type:"text",value:void 0,iconStart:"emoji-smile-upside-down",iconStartAriaLabel:"start action",iconEnd:void 0,hint:"Assistive text",invalid:!0}},n={args:{id:"componentId4",label:"Label",placeholder:"Placeholder",labelIcon:void 0,type:"text",value:void 0,iconStart:"emoji-smile-upside-down",iconStartAriaLabel:"start action",iconEnd:void 0,hint:"Assistive text",valid:!0}},a={args:{id:"componentId5",label:"Label",placeholder:"Placeholder",labelIcon:void 0,type:"text",value:void 0,iconStart:"emoji-smile-upside-down",iconEnd:"emoji-smile-upside-down",iconStartAriaLabel:"start action",iconEndAriaLabel:"end action",hint:"Assistive text",disabled:!0}},r={args:{id:"componentId6",label:"Label",placeholder:"Placeholder",labelIcon:"info-circle",type:"text",value:void 0,iconStart:void 0,iconEnd:void 0}},l={args:{id:"componentId7",label:"Label",placeholder:"Placeholder",labelIcon:void 0,type:"text",value:"",iconStart:"emoji-smile-upside-down",iconEnd:"emoji-smile-upside-down",iconStartAriaLabel:"start action",iconEndAriaLabel:"end action",hint:"Assistive text",floatingLabel:!0}},i={args:{id:"componentId8",label:"Label",placeholder:"Placeholder",type:"text",inputStart:d.jsx(k,{icon:"person"})},parameters:{docs:{canvas:{sourceState:"shown"}}}},s={args:{id:"componentId9",label:"Label",placeholder:"Placeholder",type:"text",inputEnd:d.jsx(k,{icon:"arrow-right"})},parameters:{docs:{canvas:{sourceState:"shown"}}}},c={render:N=>d.jsx(G,{...z,children:d.jsx(R,{...N})}),args:{id:"componentId10",label:"Label",placeholder:"Placeholder",type:"text",iconStart:"face_5",iconEnd:"face_5",iconStartAriaLabel:"start action",iconEndAriaLabel:"end action"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var u,m,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    hint: 'Assistive text'
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEnd: undefined,
    hint: 'Assistive text',
    invalid: true
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,x,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEnd: undefined,
    hint: 'Assistive text',
    valid: true
  }
}`,...(I=(x=n.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var v,S,L;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Assistive text',
    disabled: true
  }
}`,...(L=(S=a.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var E,w,A;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: 'info-circle',
    type: 'text',
    value: undefined,
    iconStart: undefined,
    iconEnd: undefined
  }
}`,...(A=(w=r.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var P,C,D;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: '',
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Assistive text',
    floatingLabel: true
  }
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var F,j,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    inputStart: <DIcon icon="person" />
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var $,V,_;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    inputEnd: <DIcon icon="arrow-right" />
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(_=(V=s.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var M,O,B;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInput>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DInput {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId10',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    iconStart: 'face_5',
    iconEnd: 'face_5',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action'
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(B=(O=c.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const oe=["Default","Invalid","Valid","Disabled","Text","Floating","CustomInputStart","CustomInputEnd","MaterialIcon"];export{s as CustomInputEnd,i as CustomInputStart,t as Default,a as Disabled,l as Floating,o as Invalid,c as MaterialIcon,r as Text,n as Valid,oe as __namedExportsOrder,te as default};
