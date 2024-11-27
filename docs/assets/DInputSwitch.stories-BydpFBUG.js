import{D as A}from"./DInputSwitch-DBWyulIr.js";import{P as e}from"./config-CUZHf55T.js";import"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-mLFX9G4A.js";const G={title:"Design System/Components/Input Switch",component:A,parameters:{docs:{description:{component:`
Graphical control element that allows the user to choose between two mutually exclusive states.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Switch](https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches)

## CSS Variables

The Bootstrap documentation provides details on the default [Checks CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                            | Class               | Type            | Description               |
|-----------------------------------------------------|---------------------|-----------------|---------------------------|
| --${e}input-switch-bg                       | .form-switch        | css color unit  | Background color          |
| --${e}input-switch-border-color             | .form-switch        | css color unit  | Border color              |
| --${e}input-switch-dot                      | .form-switch        | data url svg    | Component circle          |
| --${e}input-switch-hover-border-color       | .form-switch        | css color unit  | Hover border color        |
| --${e}input-switch-focus-outline-color      | .form-switch        | css color unit  | Focus outline color       |
| --${e}input-switch-active-border-color      | .form-switch        | css color unit  | Active border color       |
| --${e}input-switch-active-bg                | .form-switch        | css color unit  | Active background color   |
| --${e}input-switch-disabled-border-color    | .form-switch        | css color unit  | Disabled border color     |
| --${e}input-switch-disabled-bg              | .form-switch        | css color unit  | Disabled background color |
| --${e}input-switch-disabled-dot             | .form-switch        | data url svg    | Disabled component circle |
| --${e}input-switch-label-color              | .form-switch        | css color unit  | Label color               |
| --${e}input-switch-active-label-color       | .form-switch        | css color unit  | Active label color        |
| --${e}form-check-input-focus-border-color   | .form-check-input   | css color unit  | Focus border color        |
| --${e}form-check-input-focus-box-shadow     | .form-check-input   | css box shadow  | Focus box shadow          |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string"},style:{control:"object"},label:{control:"text",type:"string"},checked:{control:"boolean",type:"boolean"},readonly:{control:"boolean",type:"boolean"},disabled:{control:"boolean",type:"boolean"},onChange:{action:"onChange"}},tags:["autodocs"]},o={args:{id:"componentId1",checked:!1,disabled:!1,ariaLabel:"Label"}},s={args:{id:"componentId2",label:"Label",checked:!1,disabled:!1}},a={args:{id:"componentId3",label:"Label",checked:!1,disabled:!1,valid:!0}},r={args:{id:"componentId4",label:"Label",checked:!1,disabled:!1,invalid:!0}},c={args:{id:"componentId5",label:"Label",checked:!0,disabled:!1}},t={args:{id:"componentId6",label:"Label",checked:!1,readonly:!0}},n={args:{id:"componentId7",label:"Label",checked:!1,disabled:!0}},l={args:{id:"componentId8",label:"Label",checked:!0,disabled:!0}};var i,d,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    checked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,b,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    checked: false,
    disabled: false
  }
}`,...(m=(b=s.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var h,f,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var w,k,I;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true
  }
}`,...(I=(k=r.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var L,v,y;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var D,S,$;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    label: 'Label',
    checked: false,
    readonly: true
  }
}`,...($=(S=t.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var C,x,T;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var B,V,F;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(F=(V=l.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const H=["WithoutLabel","Default","DefaultValid","DefaultInvalid","Checked","Readonly","Disabled","CheckedDisabled"];export{c as Checked,l as CheckedDisabled,s as Default,r as DefaultInvalid,a as DefaultValid,n as Disabled,t as Readonly,o as WithoutLabel,H as __namedExportsOrder,G as default};
