import{D as H}from"./DInputCheck-DHOC6GKc.js";import{P as d}from"./config-C3iYXcFk.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DyLtBo21.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgkJcE1x.js";const q={title:"Design System/Components/Input Check",component:H,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string",description:"The class name for the wrapper div"},style:{control:"object"},inputClassName:{control:"text",type:"string",description:"The class name for the input element"},type:{control:"select",type:"string",options:["checkbox","radio"]},value:{control:"text",type:"string",description:"The value of the input"},label:{control:"text",type:"string"},ariaLabel:{control:"text",type:"string"},checked:{control:"boolean",type:"boolean"},disabled:{control:"boolean",type:"boolean"},indeterminate:{control:"boolean"}},tags:["autodocs"]},e={args:{type:"checkbox",checked:!1,disabled:!1,ariaLabel:"Label"}},o={args:{id:"componentId2",type:"checkbox",label:"Label",checked:!1,disabled:!1}},s={args:{id:"componentId3",type:"checkbox",label:"Label",hint:"Assistive text",checked:!1,disabled:!1}},a={args:{id:"componentId4",type:"checkbox",label:"Label",checked:!1,disabled:!1,valid:!0}},t={args:{id:"componentId5",type:"checkbox",label:"Label",checked:!1,disabled:!1,invalid:!0}},c={args:{id:"componentId6",type:"checkbox",label:"Label",checked:!0,disabled:!1}},r={args:{id:"componentId7",type:"checkbox",label:"Label",checked:!1,disabled:!0}},n={args:{id:"componentId8",type:"checkbox",label:"Label",checked:!0,disabled:!0}},l={args:{id:"componentId9",type:"checkbox",label:"Custom styled input",checked:!1,inputClassName:"border-2"}};var i,p,b;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    checked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(b=(p=e.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,m,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var k,x,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,C,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true
  }
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var I,L,v;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true
  }
}`,...(v=(L=t.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var S,w,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var T,N,V;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...(V=(N=r.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var B,W,A;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(A=(W=n.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var F,_,E;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    type: 'checkbox',
    label: 'Custom styled input',
    checked: false,
    inputClassName: 'border-2'
  }
}`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const z=["CheckboxWithoutLabel","CheckboxDefault","CheckboxHint","CheckboxValid","CheckboxInvalid","CheckboxChecked","CheckboxDisabled","CheckboxCheckedDisabled","CheckboxWithInputClassName"];export{c as CheckboxChecked,n as CheckboxCheckedDisabled,o as CheckboxDefault,r as CheckboxDisabled,s as CheckboxHint,t as CheckboxInvalid,a as CheckboxValid,l as CheckboxWithInputClassName,e as CheckboxWithoutLabel,z as __namedExportsOrder,q as default};
