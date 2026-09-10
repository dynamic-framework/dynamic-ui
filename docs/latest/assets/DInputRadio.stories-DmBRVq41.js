import{P as c}from"./config-7dXXkQRG.js";import{D as N}from"./DInputCheck-Dv631cf7.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-B_Y9M-l-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-72Ch5-Y2.js";const W={title:"Design System/Components/Input Radio",component:N,parameters:{docs:{description:{component:`
Create consistent cross-browser and cross-device radios with our completely rewritten checks component.

**Radio:** It is a type of graphical interface widget that allows the user to choose an option from a predefined set of options.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Checks and Radios](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Radios](https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios)

## CSS Variables

The Bootstrap documentation provides details on the default [Radio CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                            | Class               | Type            | Description                 |
|-----------------------------------------------------|---------------------|-----------------|-----------------------------|
| --${c}form-check-input-focus-border-color   | .form-check-input   | css color unit  | Focus border color          |
| --${c}form-check-input-focus-box-shadow     | .form-check-input   | css box shadow  | Focus box shadow            |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",description:"The class name for the wrapper div",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},inputClassName:{control:"text",type:"string",description:"The class name for the input element",table:{category:"Appearance"}},type:{control:"select",type:"string",options:["checkbox","radio"],defaultValue:"radio",table:{category:"HTML Attributes"}},value:{control:"text",type:"string",description:"The value of the input",table:{category:"Content"}},label:{control:"text",type:"string",table:{category:"Content"}},ariaLabel:{control:"text",type:"string",description:"The ARIA label for the input, used when there is no visible label",table:{category:"HTML Attributes"}},checked:{control:"boolean",type:"boolean",table:{category:"Behavior"}},disabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},hint:{control:"text",type:"string",table:{category:"Content"}},valid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},invalid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"]},e={args:{id:"componentId1",type:"radio",label:"Label",checked:!1,disabled:!1,hint:"Assistive text",valid:!1,invalid:!1,name:"defaultRadio",className:"",value:"value",inputClassName:""}},a={args:{id:"componentId2",type:"radio",checked:!1,disabled:!1,ariaLabel:"Label"}},t={args:{id:"componentId3",type:"radio",label:"Label",hint:"Assistive text",checked:!1,disabled:!1}},o={args:{id:"componentId4",type:"radio",label:"Label",checked:!1,disabled:!1,valid:!0,hint:"Assistive text"}},s={args:{id:"componentId5",type:"radio",label:"Label",checked:!1,disabled:!1,invalid:!0,hint:"Assistive text"}},r={args:{id:"componentId6",type:"radio",label:"Label",checked:!0,disabled:!1}},n={args:{id:"componentId7",type:"radio",label:"Label",checked:!1,disabled:!0}},i={args:{id:"componentId8",type:"radio",label:"Label",checked:!0,disabled:!0}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
    hint: 'Assistive text',
    valid: false,
    invalid: false,
    name: 'defaultRadio',
    className: '',
    value: 'value',
    inputClassName: ''
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,m,u;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    type: 'radio',
    checked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    type: 'radio',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,v,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true,
    hint: 'Assistive text'
  }
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var L,I,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true,
    hint: 'Assistive text'
  }
}`,...(x=(I=s.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var C,A,S;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    type: 'radio',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(S=(A=r.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var T,w,D;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...(D=(w=n.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var R,B,H;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    type: 'radio',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(H=(B=i.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const $=["Default","WithoutLabel","Hint","Valid","Invalid","Checked","Disabled","CheckedDisabled"];export{r as Checked,i as CheckedDisabled,e as Default,n as Disabled,t as Hint,s as Invalid,o as Valid,a as WithoutLabel,$ as __namedExportsOrder,W as default};
