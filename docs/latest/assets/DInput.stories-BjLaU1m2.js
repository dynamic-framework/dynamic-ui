import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{F as _}from"./DInput-ym0e5YBb.js";import{I as d,a as M}from"./constants-CyI_OqvZ.js";import{P as t}from"./config-C3iYXcFk.js";import{D as O}from"./DIcon-Zg8O6yqK.js";import{D as j}from"./DContext-B51mLSx1.js";import"./iframe-Dy0Aerpt.js";import"./index-i7wJJAvU.js";import"./useProvidedRefOrCreate-nvRQXHIB.js";import"./useMediaBreakpointUp-g52upMXj.js";import"./index-JejD5iQw.js";import"./index-aD47SrVq.js";const Y={title:"Design System/Components/Input",component:_,parameters:{docs:{description:{component:`
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
| --${t}label-color                 | :root         | css color unit  | Label color                 |
| --${t}label-font-weight           | :root         | css font weight | Label font weight           |
| --${t}label-font-size             | :root         | css length unit | Label font size             |
| --${t}label-padding-x             | :root         | css length unit | Label horizontal padding    |
| --${t}label-padding-y             | :root         | css length unit | Label vertical padding      |
| --${t}input-border-color          | .input-group  | css color unit  | Input border color          |
| --${t}input-border-width          | .input-group  | css length unit | Input border width          |
| --${t}input-border-radius         | .input-group  | css length unit | Input border radius         |
| --${t}input-focus-border-color    | .input-group  | css color unit  | Input focus border color    |
| --${t}input-focus-box-shadow      | .input-group  | css shadow      | Input focus box shadow      |
| --${t}input-disabled-bg           | .input-group  | css color unit  | Input disable background    |
| --${t}input-disabled-color        | .input-group  | css color unit  | Input disable color         |
| --${t}input-disabled-border-color | .input-group  | css color unit  | Input disable border color  |
| --${t}form-text-padding           | .form-text    | css length unit | Hint padding                |
| --${t}form-text-gap               | .form-text    | css length unit | Space between hint elements |
| --${t}form-text-color             | .form-text    | css color unit  | Hint color                  |
| --${t}form-control-text-align     | .form-control | css text align  | Input text align            |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"Name of the input"},className:{control:"text",type:"string"},style:{control:"object"},iconFamilyClass:{control:"text",type:"string"},iconFamilyPrefix:{control:"text",type:"string"},iconMaterialStyle:{control:"boolean",type:"boolean"},label:{control:"text",type:"string"},placeholder:{control:"text",type:"string"},type:{control:"select",options:["text","email","number"],type:"string",description:"The type of the input"},value:{control:"text",type:"string",description:"The value of the input"},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"]},inputMode:{control:"text",type:"string",description:"Input mode"},pattern:{control:"text",type:"string",description:"Pattern to validate"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...d]},iconStartDisabled:{control:"boolean",type:"boolean"},iconStartAriaLabel:{control:"text",type:"string"},iconStartTabIndex:{control:"number",type:"number"},iconStartFamilyClass:{control:"text",type:"string"},iconStartFamilyPrefix:{control:"text",type:"string"},iconStartMaterialStyle:{control:"boolean",type:"boolean"},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...d]},iconEndDisabled:{control:"boolean",type:"boolean"},iconEndAriaLabel:{control:"text",type:"string"},iconEndTabIndex:{control:"number",type:"number"},iconEndFamilyClass:{control:"text",type:"string"},iconEndFamilyPrefix:{control:"text",type:"string"},iconEndMaterialStyle:{control:"boolean",type:"boolean"},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},onIconStartClick:{action:"onIconStartClicked"},onIconEndClick:{action:"onIconStartClicked"},onChange:{action:"onChange"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"},onWheel:{action:"onWheel"}},tags:["autodocs"]},e={args:{label:"Label",placeholder:"Placeholder",type:"text",value:void 0,hint:"Assistive text"}},o={args:{id:"componentId3",label:"Label",placeholder:"Placeholder",type:"text",value:void 0,iconStart:"Smile",iconStartAriaLabel:"start action",iconEnd:void 0,hint:"Assistive text",invalid:!0}},n={args:{id:"componentId4",label:"Label",placeholder:"Placeholder",type:"text",value:void 0,iconStart:"Smile",iconStartAriaLabel:"start action",iconEnd:void 0,hint:"Assistive text",valid:!0}},r={args:{id:"componentId5",label:"Label",placeholder:"Placeholder",type:"text",value:void 0,iconEnd:"ArrowRight",iconEndAriaLabel:"start action",hint:"Assistive text",disabled:!0}},a={args:{id:"componentId7",label:"Label",placeholder:"Placeholder",type:"text",value:"",iconEnd:"ArrowRight",iconEndAriaLabel:"end action",hint:"Assistive text",floatingLabel:!0}},l={args:{id:"componentId8",label:"Label",placeholder:"Placeholder",type:"text",inputStart:c.jsx(O,{icon:"User"})}},i={args:{id:"componentId9",label:"Label",placeholder:"Placeholder",type:"text",inputEnd:c.jsx(O,{icon:"ArrowRight"})}},s={render:B=>c.jsx(j,{...M,children:c.jsx(_,{...B})}),args:{id:"componentId10",label:"Label",placeholder:"Placeholder",type:"text",iconStart:"face_5",iconStartAriaLabel:"start action"}};var p,u,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    hint: 'Assistive text'
  }
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,g,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    iconStart: 'Smile',
    iconStartAriaLabel: 'start action',
    iconEnd: undefined,
    hint: 'Assistive text',
    invalid: true
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,x,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    iconStart: 'Smile',
    iconStartAriaLabel: 'start action',
    iconEnd: undefined,
    hint: 'Assistive text',
    valid: true
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var I,v,S;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    iconEnd: 'ArrowRight',
    iconEndAriaLabel: 'start action',
    hint: 'Assistive text',
    disabled: true
  }
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var L,E,A;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: '',
    iconEnd: 'ArrowRight',
    iconEndAriaLabel: 'end action',
    hint: 'Assistive text',
    floatingLabel: true
  }
}`,...(A=(E=a.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var C,P,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    inputStart: <DIcon icon="User" />
  }
}`,...(D=(P=l.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var w,F,$;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    inputEnd: <DIcon icon="ArrowRight" />
  }
}`,...($=(F=i.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var T,R,V;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInput>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DInput {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId10',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    iconStart: 'face_5',
    iconStartAriaLabel: 'start action'
  }
}`,...(V=(R=s.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const Z=["Default","Invalid","Valid","Disabled","Floating","CustomInputStart","CustomInputEnd","MaterialIcon"];export{i as CustomInputEnd,l as CustomInputStart,e as Default,r as Disabled,a as Floating,o as Invalid,s as MaterialIcon,n as Valid,Z as __namedExportsOrder,Y as default};
