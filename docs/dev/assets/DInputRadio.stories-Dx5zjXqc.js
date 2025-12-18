import{D as _}from"./DInputCheck-68taV2_y.js";import{P as c}from"./config-C3iYXcFk.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-B2wa2xAh.js";import"./index-5PCv3b9w.js";const $={title:"Design System/Components/Input Radio",component:_,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string"},style:{control:"object"},type:{control:"select",type:"string",options:["checkbox","radio"],defaultValue:"radio"},value:{control:"text",type:"string",description:"The value of the input"},label:{control:"text",type:"string"},ariaLabel:{control:"text",type:"string"},checked:{control:"boolean",type:"boolean"},disabled:{control:"boolean",type:"boolean"},indeterminate:{control:"boolean"}},tags:["autodocs"]},e={args:{type:"radio",checked:!1,disabled:!1,ariaLabel:"Label"}},a={args:{id:"componentId2",type:"radio",label:"Label",checked:!1,disabled:!1}},o={args:{id:"componentId2",type:"radio",label:"Label",hint:"Assistive text",checked:!1,disabled:!1}},s={args:{id:"componentId3",type:"radio",label:"Label",checked:!1,disabled:!1,valid:!0}},t={args:{id:"componentId4",type:"radio",label:"Label",checked:!1,disabled:!1,invalid:!0}},r={args:{id:"componentId5",type:"radio",label:"Label",checked:!0,disabled:!1}},d={args:{id:"componentId6",type:"radio",label:"Label",checked:!1,disabled:!0}},n={args:{id:"componentId7",type:"radio",label:"Label",checked:!0,disabled:!0}};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    checked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,b,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false
  }
}`,...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,f,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    type: 'radio',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,k,R;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true
  }
}`,...(R=(k=s.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var L,I,v;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true
  }
}`,...(v=(I=t.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var x,S,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    type: 'radio',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,D,T;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var V,B,F;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    type: 'radio',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(F=(B=n.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const j=["RadioWithoutLabel","RadioDefault","RadioHint","RadioValid","RadioInvalid","RadioChecked","RadioDisabled","RadioCheckedDisabled"];export{r as RadioChecked,n as RadioCheckedDisabled,a as RadioDefault,d as RadioDisabled,o as RadioHint,t as RadioInvalid,s as RadioValid,e as RadioWithoutLabel,j as __namedExportsOrder,$ as default};
