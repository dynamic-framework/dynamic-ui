import{D as _}from"./DInputCheck-RcgiJNa9.js";import{P as d}from"./config-CUZHf55T.js";import"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-mLFX9G4A.js";const j={title:"Design System/Components/Input Check",component:_,parameters:{docs:{description:{component:`
Create consistent cross-browser and cross-device checkboxes with our completely rewritten checks component.

**Checkbox:** Allows the user to make multiple selections from a set of options.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Checks and Radios](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Checks](https://getbootstrap.com/docs/5.3/forms/checks-radios/#checks)

## CSS Variables

The Bootstrap documentation provides details on the default [Check CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                            | Class               | Type            | Description                 |
|-----------------------------------------------------|---------------------|-----------------|-----------------------------|
| --${d}form-check-input-focus-border-color   | .form-check-input   | css color unit  | Focus border color          |
| --${d}form-check-input-focus-box-shadow     | .form-check-input   | css box shadow  | Focus box shadow            |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string"},style:{control:"object"},type:{control:"select",type:"string",options:["checkbox","radio"]},value:{control:"text",type:"string",description:"The value of the input"},label:{control:"text",type:"string"},ariaLabel:{control:"text",type:"string"},checked:{control:"boolean",type:"boolean"},disabled:{control:"boolean",type:"boolean"},indeterminate:{control:"boolean"}},tags:["autodocs"]},e={args:{id:"componentId1",type:"checkbox",checked:!1,disabled:!1,ariaLabel:"Label"}},o={args:{id:"componentId2",type:"checkbox",label:"Label",checked:!1,disabled:!1}},a={args:{id:"componentId2",type:"checkbox",label:"Label",hint:"Assistive text",checked:!1,disabled:!1}},s={args:{id:"componentId3",type:"checkbox",label:"Label",checked:!1,disabled:!1,valid:!0}},c={args:{id:"componentId4",type:"checkbox",label:"Label",checked:!1,disabled:!1,invalid:!0}},t={args:{id:"componentId5",type:"checkbox",label:"Label",checked:!0,disabled:!1}},r={args:{id:"componentId6",type:"checkbox",label:"Label",checked:!1,disabled:!0}},n={args:{id:"componentId7",type:"checkbox",label:"Label",checked:!0,disabled:!0}};var l,i,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    type: 'checkbox',
    checked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var b,h,m;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false
  }
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var k,u,x;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    type: 'checkbox',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,g,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,I,L;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true
  }
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var v,S,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var D,T,V;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...(V=(T=r.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var B,A,F;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(F=(A=n.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const N=["CheckboxWithoutLabel","CheckboxDefault","CheckboxHint","CheckboxValid","CheckboxInvalid","CheckboxChecked","CheckboxDisabled","CheckboxCheckedDisabled"];export{t as CheckboxChecked,n as CheckboxCheckedDisabled,o as CheckboxDefault,r as CheckboxDisabled,a as CheckboxHint,c as CheckboxInvalid,s as CheckboxValid,e as CheckboxWithoutLabel,N as __namedExportsOrder,j as default};
