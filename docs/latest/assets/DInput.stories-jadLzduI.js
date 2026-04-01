import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{F as R}from"./DInput-wPKoDbkQ.js";import{I as p,a as H}from"./constants-CkChkWbF.js";import{P as t}from"./config-C3iYXcFk.js";import{D as V}from"./DIcon-DWbFNjUL.js";import{D as O}from"./DContext-CT9Hz3uJ.js";import"./iframe-Bb5qg2cC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CEaegEkl.js";import"./useProvidedRefOrCreate-Cx-6UYKs.js";import"./useMediaBreakpointUp-ioa7HIU9.js";import"./index-C-rTwrtA.js";import"./index-CnbxpTGU.js";const Z={title:"Design System/Components/Input",component:R,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"Name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},iconFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},label:{control:"text",type:"string",table:{category:"Content"}},placeholder:{control:"text",type:"string",table:{category:"Content"}},type:{control:"select",options:["text","email","number"],type:"string",description:"The type of the input",table:{category:"HTML Attributes"}},value:{control:"text",type:"string",description:"The value of the input",table:{category:"Content"}},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"],table:{category:"Appearance"}},inputMode:{control:"text",type:"string",description:"Input mode",table:{category:"HTML Attributes"}},pattern:{control:"text",type:"string",description:"Pattern to validate",table:{category:"HTML Attributes"}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...p],table:{category:"Icon"}},iconStartDisabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},iconStartAriaLabel:{control:"text",type:"string",table:{category:"Content"}},iconStartTabIndex:{control:"number",type:"number",table:{category:"HTML Attributes"}},iconStartFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconStartFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconStartMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...p],table:{category:"Icon"}},iconEndDisabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},iconEndAriaLabel:{control:"text",type:"string",table:{category:"Content"}},iconEndTabIndex:{control:"number",type:"number",table:{category:"HTML Attributes"}},iconEndFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconEndFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconEndMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback",table:{category:"Content"}},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Appearance"}},onIconStartClick:{action:"onIconStartClicked",table:{category:"Events"}},onIconEndClick:{action:"onIconStartClicked",table:{category:"Events"}},onChange:{action:"onChange",table:{category:"Events"}},onBlur:{action:"onBlur",table:{category:"Events"}},onFocus:{action:"onFocus",table:{category:"Events"}},onWheel:{action:"onWheel",table:{category:"Events"}}},tags:["autodocs"]},e={args:{label:"Label",placeholder:"Placeholder",type:"text",value:void 0,hint:"Assistive text"}},o={args:{id:"componentId3",label:"Label",placeholder:"Placeholder",type:"text",value:void 0,iconStart:"Smile",iconStartAriaLabel:"start action",iconEnd:void 0,hint:"Assistive text",invalid:!0}},a={args:{id:"componentId4",label:"Label",placeholder:"Placeholder",type:"text",value:void 0,iconStart:"Smile",iconStartAriaLabel:"start action",iconEnd:void 0,hint:"Assistive text",valid:!0}},n={args:{id:"componentId5",label:"Label",placeholder:"Placeholder",type:"text",value:void 0,iconEnd:"ArrowRight",iconEndAriaLabel:"start action",hint:"Assistive text",disabled:!0}},r={args:{id:"componentId7",label:"Label",placeholder:"Placeholder",type:"text",value:"",iconEnd:"ArrowRight",iconEndAriaLabel:"end action",hint:"Assistive text",floatingLabel:!0}},l={args:{id:"componentId8",label:"Label",placeholder:"Placeholder",type:"text",inputStart:c.jsx(V,{icon:"User"})}},i={args:{id:"componentId9",label:"Label",placeholder:"Placeholder",type:"text",inputEnd:c.jsx(V,{icon:"ArrowRight"})}},s={render:_=>c.jsx(O,{...H,children:c.jsx(R,{..._})}),args:{id:"componentId10",label:"Label",placeholder:"Placeholder",type:"text",iconStart:"face_5",iconStartAriaLabel:"start action"}};var d,u,b;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    hint: 'Assistive text'
  }
}`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,m,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var h,x,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var I,v,S;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var L,A,E;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(A=r.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var C,P,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    inputStart: <DIcon icon="User" />
  }
}`,...(T=(P=l.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var D,w,F;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    inputEnd: <DIcon icon="ArrowRight" />
  }
}`,...(F=(w=i.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var $,B,M;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(M=(B=s.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const tt=["Default","Invalid","Valid","Disabled","Floating","CustomInputStart","CustomInputEnd","MaterialIcon"];export{i as CustomInputEnd,l as CustomInputStart,e as Default,n as Disabled,r as Floating,o as Invalid,s as MaterialIcon,a as Valid,tt as __namedExportsOrder,Z as default};
