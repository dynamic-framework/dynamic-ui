import{D as V}from"./DInputCheck-7PVzQa58.js";import{P as c}from"./config-C3iYXcFk.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-n9SpF7Fs.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BqTa4fxN.js";const $={title:"Design System/Components/Input Radio",component:V,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},type:{control:"select",type:"string",options:["checkbox","radio"],defaultValue:"radio",table:{category:"HTML Attributes"}},value:{control:"text",type:"string",description:"The value of the input",table:{category:"Content"}},label:{control:"text",type:"string",table:{category:"Content"}},ariaLabel:{control:"text",type:"string",table:{category:"HTML Attributes"}},checked:{control:"boolean",type:"boolean",table:{category:"Behavior"}},disabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},indeterminate:{control:"boolean",table:{category:"Behavior"}}},tags:["autodocs"]},e={args:{type:"radio",checked:!1,disabled:!1,ariaLabel:"Label"}},a={args:{id:"componentId2",type:"radio",label:"Label",checked:!1,disabled:!1}},o={args:{id:"componentId2",type:"radio",label:"Label",hint:"Assistive text",checked:!1,disabled:!1}},t={args:{id:"componentId3",type:"radio",label:"Label",checked:!1,disabled:!1,valid:!0}},r={args:{id:"componentId4",type:"radio",label:"Label",checked:!1,disabled:!1,invalid:!0}},s={args:{id:"componentId5",type:"radio",label:"Label",checked:!0,disabled:!1}},n={args:{id:"componentId6",type:"radio",label:"Label",checked:!1,disabled:!0}},d={args:{id:"componentId7",type:"radio",label:"Label",checked:!0,disabled:!0}};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    checked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var b,m,u;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    type: 'radio',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,k,L;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true
  }
}`,...(L=(k=t.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var R,I,v;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true
  }
}`,...(v=(I=r.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var x,S,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    type: 'radio',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var w,T,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var A,B,H;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    type: 'radio',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(H=(B=d.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const j=["RadioWithoutLabel","RadioDefault","RadioHint","RadioValid","RadioInvalid","RadioChecked","RadioDisabled","RadioCheckedDisabled"];export{s as RadioChecked,d as RadioCheckedDisabled,a as RadioDefault,n as RadioDisabled,o as RadioHint,r as RadioInvalid,t as RadioValid,e as RadioWithoutLabel,j as __namedExportsOrder,$ as default};
