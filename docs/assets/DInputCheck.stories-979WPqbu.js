import{D as V}from"./DInputCheck-DxtBQ11x.js";import{P as n}from"./config-CUZHf55T.js";import"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-mLFX9G4A.js";const W={title:"Design System/Components/Input Check",component:V,parameters:{docs:{description:{component:`
Create consistent cross-browser and cross-device checkboxes with our completely rewritten checks component.

**Checkbox:** Allows the user to make multiple selections from a set of options.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Checks and Radios](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Checks](https://getbootstrap.com/docs/5.3/forms/checks-radios/#checks)

## CSS Variables

The Bootstrap documentation provides details on the default [Check CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                            | Class               | Type            | Description                 |
|-----------------------------------------------------|---------------------|-----------------|-----------------------------|
| --${n}form-check-input-focus-border-color   | .form-check-input   | css color unit  | Focus border color          |
| --${n}form-check-input-focus-box-shadow     | .form-check-input   | css box shadow  | Focus box shadow            |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string"},style:{control:"object"},type:{control:"select",type:"string",options:["checkbox","radio"]},value:{control:"text",type:"string",description:"The value of the input"},label:{control:"text",type:"string"},ariaLabel:{control:"text",type:"string"},checked:{control:"boolean",type:"boolean"},disabled:{control:"boolean",type:"boolean"},indeterminate:{control:"boolean"}},tags:["autodocs"]},e={args:{id:"componentId1",type:"checkbox",checked:!1,disabled:!1,ariaLabel:"Label"}},o={args:{id:"componentId2",type:"checkbox",label:"Label",checked:!1,disabled:!1}},c={args:{id:"componentId3",type:"checkbox",label:"Label",checked:!1,disabled:!1,valid:!0}},a={args:{id:"componentId4",type:"checkbox",label:"Label",checked:!1,disabled:!1,invalid:!0}},s={args:{id:"componentId5",type:"checkbox",label:"Label",checked:!0,disabled:!1}},t={args:{id:"componentId6",type:"checkbox",label:"Label",checked:!1,disabled:!0}},r={args:{id:"componentId7",type:"checkbox",label:"Label",checked:!0,disabled:!0}};var d,l,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    type: 'checkbox',
    checked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,b,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var m,k,u;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true
  }
}`,...(u=(k=c.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var f,x,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,C,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var L,v,S;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var w,D,T;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(T=(D=r.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const $=["CheckboxWithoutLabel","CheckboxDefault","CheckboxValid","CheckboxInvalid","CheckboxChecked","CheckboxDisabled","CheckboxCheckedDisabled"];export{s as CheckboxChecked,r as CheckboxCheckedDisabled,o as CheckboxDefault,t as CheckboxDisabled,a as CheckboxInvalid,c as CheckboxValid,e as CheckboxWithoutLabel,$ as __namedExportsOrder,W as default};
