import{j as t}from"./jsx-runtime-DQ32znRX.js";import{F as b}from"./DInput-CpmK98WL.js";import{I as g,a as h}from"./constants-DhWTmuJQ.js";import{P as e}from"./config-CUZHf55T.js";import{D as U}from"./DIcon-CDY5yPx9.js";import{D as y}from"./DContext-9gKMeQXa.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-mLFX9G4A.js";import"./useProvidedRefOrCreate-DxC68qIt.js";import"./index-D9uilScg.js";const ce={title:"Design System/Components/Input",component:b,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"Name of the input"},className:{control:"text",type:"string"},style:{control:"object"},iconFamilyClass:{control:"text",type:"string"},iconFamilyPrefix:{control:"text",type:"string"},iconMaterialStyle:{control:"boolean",type:"boolean"},label:{control:"text",type:"string"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...g]},labelIconFamilyClass:{control:"text",type:"string"},labelIconFamilyPrefix:{control:"text",type:"string"},labelIconMaterialStyle:{control:"boolean",type:"boolean"},placeholder:{control:"text",type:"string"},type:{control:"select",options:["text","email","number"],type:"string",description:"The type of the input"},value:{control:"text",type:"string",description:"The value of the input"},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"]},inputMode:{control:"text",type:"string",description:"Input mode"},pattern:{control:"text",type:"string",description:"Pattern to validate"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...g]},iconStartDisabled:{control:"boolean",type:"boolean"},iconStartAriaLabel:{control:"text",type:"string"},iconStartTabIndex:{control:"number",type:"number"},iconStartFamilyClass:{control:"text",type:"string"},iconStartFamilyPrefix:{control:"text",type:"string"},iconStartMaterialStyle:{control:"boolean",type:"boolean"},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...g]},iconEndDisabled:{control:"boolean",type:"boolean"},iconEndAriaLabel:{control:"text",type:"string"},iconEndTabIndex:{control:"number",type:"number"},iconEndFamilyClass:{control:"text",type:"string"},iconEndFamilyPrefix:{control:"text",type:"string"},iconEndMaterialStyle:{control:"boolean",type:"boolean"},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},onIconStartClick:{action:"onIconStartClicked"},onIconEndClick:{action:"onIconStartClicked"},onChange:{action:"onChange"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"},onWheel:{action:"onWheel"}},tags:["autodocs"]},n={args:{id:"componentId1",label:"Label",placeholder:"Placeholder",labelIcon:void 0,type:"text",value:"",hint:"Assistive text"}},a={args:{id:"componentId3",label:"Label",placeholder:"Placeholder",labelIcon:void 0,type:"text",value:void 0,iconStart:"emoji-smile-upside-down",iconStartAriaLabel:"start action",iconEnd:void 0,hint:"Assistive text",invalid:!0}},r={args:{id:"componentId4",label:"Label",placeholder:"Placeholder",labelIcon:void 0,type:"text",value:void 0,iconStart:"emoji-smile-upside-down",iconStartAriaLabel:"start action",iconEnd:void 0,hint:"Assistive text",valid:!0}},l={args:{id:"componentId5",label:"Label",placeholder:"Placeholder",labelIcon:void 0,type:"text",value:void 0,iconStart:"emoji-smile-upside-down",iconEnd:"emoji-smile-upside-down",iconStartAriaLabel:"start action",iconEndAriaLabel:"end action",hint:"Assistive text",disabled:!0}},i={args:{id:"componentId6",label:"Label",placeholder:"Placeholder",labelIcon:"info-circle",type:"text",value:void 0,iconStart:void 0,iconEnd:void 0}},s={args:{id:"componentId7",label:"Label",placeholder:"Placeholder",labelIcon:void 0,type:"text",value:"",iconStart:"emoji-smile-upside-down",iconEnd:"emoji-smile-upside-down",iconStartAriaLabel:"start action",iconEndAriaLabel:"end action",hint:"Assistive text",floatingLabel:!0}},c={args:{id:"componentId8",label:"Label",placeholder:"Placeholder",type:"text",inputStart:t.jsx(U,{icon:"person"})},parameters:{docs:{canvas:{sourceState:"shown"}}}},d={args:{id:"componentId9",label:"Label",placeholder:"Placeholder",type:"text",inputEnd:t.jsx(U,{icon:"arrow-right"})},parameters:{docs:{canvas:{sourceState:"shown"}}}},p={render:o=>t.jsx(y,{...h,children:t.jsx(b,{...o})}),args:{id:"componentId10",label:"Label",placeholder:"Placeholder",type:"text",iconStart:"face_5",iconEnd:"face_5",iconStartAriaLabel:"start action",iconEndAriaLabel:"end action"},parameters:{docs:{canvas:{sourceState:"shown"}}}},u={render:o=>t.jsx(y,{...h,children:t.jsx(b,{...o})}),args:{id:"componentId11",label:"Label",placeholder:"Placeholder",type:"text",invalid:!0},parameters:{docs:{canvas:{sourceState:"shown"}}}},m={render:o=>t.jsx(y,{...h,children:t.jsx(b,{...o})}),args:{id:"componentId12",label:"Label",placeholder:"Placeholder",type:"text",valid:!0},parameters:{docs:{canvas:{sourceState:"shown"}}}};var I,x,f;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: '',
    hint: 'Assistive text'
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,S,L;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(S=a.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var E,P,C;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(P=r.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var w,A,D;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var j,T,F;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(T=i.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var _,$,V;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(V=($=s.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var M,O,R;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var N,B,k;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(k=(B=d.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var G,z,X;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(z=p.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var H,W,q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInput>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DInput {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId11',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    invalid: true
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(q=(W=u.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInput>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DInput {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId12',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    valid: true
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const de=["Default","Invalid","Valid","Disabled","Text","Floating","CustomInputStart","CustomInputEnd","MaterialIcon","MaterialIconError","MaterialIconConfirm"];export{d as CustomInputEnd,c as CustomInputStart,n as Default,l as Disabled,s as Floating,a as Invalid,p as MaterialIcon,m as MaterialIconConfirm,u as MaterialIconError,i as Text,r as Valid,de as __namedExportsOrder,ce as default};
