import{P as d}from"./config-7dXXkQRG.js";import{D as P}from"./DInputCheck-Dv631cf7.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-B_Y9M-l-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-72Ch5-Y2.js";const J={title:"Design System/Components/Input Check",component:P,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",description:"The class name for the wrapper div",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},inputClassName:{control:"text",type:"string",description:"The class name for the input element",table:{category:"Appearance"}},type:{control:"select",type:"string",options:["checkbox","radio"],table:{category:"HTML Attributes"}},value:{control:"text",type:"string",description:"The value of the input",table:{category:"Content"}},label:{control:"text",type:"string",table:{category:"Content"}},ariaLabel:{control:"text",type:"string",description:"The ARIA label for the input, used when there is no visible label",table:{category:"HTML Attributes"}},checked:{control:"boolean",type:"boolean",table:{category:"Behavior"}},disabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},indeterminate:{control:"boolean",description:"Only applies when `type` is `checkbox`; ignored for `radio`.",table:{category:"Behavior"}},hint:{control:"text",type:"string",table:{category:"Content"}},invalid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"]},e={args:{id:"componentId1",type:"checkbox",label:"Label",checked:!1,disabled:!1,indeterminate:!1,invalid:!1,valid:!1,hint:"",name:"checkbox",value:"value",className:"",inputClassName:""}},t={args:{id:"componentId2",type:"checkbox",checked:!1,disabled:!1,ariaLabel:"Label"}},a={args:{id:"componentId3",type:"checkbox",label:"Label",hint:"Assistive text",checked:!1,disabled:!1}},o={args:{id:"componentId4",type:"checkbox",label:"Label",checked:!1,disabled:!1,valid:!0,hint:"Assistive text"}},s={args:{id:"componentId5",type:"checkbox",label:"Label",checked:!1,disabled:!1,invalid:!0,hint:"Assistive text"}},n={args:{id:"componentId6",type:"checkbox",label:"Label",checked:!0,disabled:!1}},r={args:{id:"componentId6b",type:"checkbox",label:"Label",checked:!1,disabled:!1,indeterminate:!0}},c={args:{id:"componentId7",type:"checkbox",label:"Label",checked:!1,disabled:!0}},l={args:{id:"componentId8",type:"checkbox",label:"Label",checked:!0,disabled:!0}},i={args:{id:"componentId9",type:"checkbox",label:"Custom styled input",checked:!1,inputClassName:"border-2 border-info-500"}};var p,b,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    indeterminate: false,
    invalid: false,
    valid: false,
    hint: '',
    name: 'checkbox',
    value: 'value',
    className: '',
    inputClassName: ''
  }
}`,...(m=(b=e.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var h,u,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    type: 'checkbox',
    checked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var k,f,y;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,v,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true,
    hint: 'Assistive text'
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var C,L,A;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true,
    hint: 'Assistive text'
  }
}`,...(A=(L=s.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var S,T,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var D,N,B;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'componentId6b',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    indeterminate: true
  }
}`,...(B=(N=r.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var H,V,M;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...(M=(V=c.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var W,E,F;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var R,_,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    type: 'checkbox',
    label: 'Custom styled input',
    checked: false,
    inputClassName: 'border-2 border-info-500'
  }
}`,...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const K=["Default","WithoutLabel","Hint","Valid","Invalid","Checked","Indeterminate","Disabled","CheckedDisabled","WithInputClassName"];export{n as Checked,l as CheckedDisabled,e as Default,c as Disabled,a as Hint,r as Indeterminate,s as Invalid,o as Valid,i as WithInputClassName,t as WithoutLabel,K as __namedExportsOrder,J as default};
