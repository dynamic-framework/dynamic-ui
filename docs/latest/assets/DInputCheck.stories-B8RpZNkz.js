import{D as _}from"./DInputCheck-7PVzQa58.js";import{P as d}from"./config-C3iYXcFk.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-n9SpF7Fs.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BqTa4fxN.js";const X={title:"Design System/Components/Input Check",component:_,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",description:"The class name for the wrapper div",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},inputClassName:{control:"text",type:"string",description:"The class name for the input element",table:{category:"Appearance"}},type:{control:"select",type:"string",options:["checkbox","radio"],table:{category:"HTML Attributes"}},value:{control:"text",type:"string",description:"The value of the input",table:{category:"Content"}},label:{control:"text",type:"string",table:{category:"Content"}},ariaLabel:{control:"text",type:"string",table:{category:"HTML Attributes"}},checked:{control:"boolean",type:"boolean",table:{category:"Behavior"}},disabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},indeterminate:{control:"boolean",table:{category:"Behavior"}}},tags:["autodocs"]},e={args:{type:"checkbox",checked:!1,disabled:!1,ariaLabel:"Label"}},o={args:{id:"componentId2",type:"checkbox",label:"Label",checked:!1,disabled:!1}},t={args:{id:"componentId3",type:"checkbox",label:"Label",hint:"Assistive text",checked:!1,disabled:!1}},a={args:{id:"componentId4",type:"checkbox",label:"Label",checked:!1,disabled:!1,valid:!0}},s={args:{id:"componentId5",type:"checkbox",label:"Label",checked:!1,disabled:!1,invalid:!0}},c={args:{id:"componentId6",type:"checkbox",label:"Label",checked:!0,disabled:!1}},r={args:{id:"componentId7",type:"checkbox",label:"Label",checked:!1,disabled:!0}},n={args:{id:"componentId8",type:"checkbox",label:"Label",checked:!0,disabled:!0}},l={args:{id:"componentId9",type:"checkbox",label:"Custom styled input",checked:!1,inputClassName:"border-2"}};var i,p,b;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var k,g,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,y,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true
  }
}`,...(C=(y=a.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var L,I,v;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true
  }
}`,...(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var S,T,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(w=(T=c.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var A,D,B;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...(B=(D=r.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var H,N,V;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var M,W,F;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    type: 'checkbox',
    label: 'Custom styled input',
    checked: false,
    inputClassName: 'border-2'
  }
}`,...(F=(W=l.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const q=["CheckboxWithoutLabel","CheckboxDefault","CheckboxHint","CheckboxValid","CheckboxInvalid","CheckboxChecked","CheckboxDisabled","CheckboxCheckedDisabled","CheckboxWithInputClassName"];export{c as CheckboxChecked,n as CheckboxCheckedDisabled,o as CheckboxDefault,r as CheckboxDisabled,t as CheckboxHint,s as CheckboxInvalid,a as CheckboxValid,l as CheckboxWithInputClassName,e as CheckboxWithoutLabel,q as __namedExportsOrder,X as default};
