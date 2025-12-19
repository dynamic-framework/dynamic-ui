import{D as _}from"./DInputSwitch-CIwvibMj.js";import{P as e}from"./config-C3iYXcFk.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DeGsI2Yl.js";import"./index-BX6wwkqS.js";const q={title:"Design System/Components/Input Switch",component:_,parameters:{docs:{description:{component:`
Graphical control element that allows the user to choose between two mutually exclusive states.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Switch](https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches)

## CSS Variables

The Bootstrap documentation provides details on the default [Checks CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                            | Class               | Type              | Description                |
|-----------------------------------------------------|---------------------|-------------------|----------------------------|
| --${e}form-switch-width                     | .form-switch        | css length unit   | Switch width               |
| --${e}form-switch-padding-start             | .form-switch        | css length unit   | Padding start              |
| --${e}form-switch-border-radius             | .form-switch        | css length unit   | Border radius              |
| --${e}form-switch-bg                        | .form-switch        | data url svg      | Regular image background   |
| --${e}form-switch-focus-bg-image            | .form-switch        | data url svg      | Focus image background     |
| --${e}form-switch-checked-bg-image          | .form-switch        | data url svg      | Checked image backgound    |
| --${e}form-check-input-focus-border-color   | .form-check-input   | css color unit    | Focus border color         |
| --${e}form-check-input-focus-box-shadow     | .form-check-input   | css box shadow    | Focus box shadow           |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string",description:"The class name for the wrapper div"},style:{control:"object"},inputClassName:{control:"text",type:"string",description:"The class name for the input element"},label:{control:"text",type:"string"},checked:{control:"boolean",type:"boolean"},readonly:{control:"boolean",type:"boolean"},disabled:{control:"boolean",type:"boolean"},invalid:{control:"boolean",type:"boolean"},valid:{control:"boolean",type:"boolean"},onChange:{action:"onChange"}},tags:["autodocs"]},a={args:{checked:!1,disabled:!1,ariaLabel:"Label"}},s={args:{id:"componentId2",label:"Label",checked:!1,disabled:!1}},o={args:{id:"componentId3",label:"Label",checked:!1,disabled:!1,valid:!0}},t={args:{id:"componentId4",label:"Label",checked:!1,disabled:!1,invalid:!0}},r={args:{id:"componentId5",label:"Label",checked:!0,disabled:!1}},n={args:{id:"componentId6",label:"Label",checked:!1,readonly:!0}},c={args:{id:"componentId7",label:"Label",checked:!1,disabled:!0}},l={args:{id:"componentId8",label:"Label",checked:!0,disabled:!0}},d={args:{id:"componentId9",label:"Custom styled input",checked:!1,inputClassName:"border-2"}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,b,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    checked: false,
    disabled: false
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,g,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true
  }
}`,...(k=(g=o.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var w,y,I;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true
  }
}`,...(I=(y=t.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var L,C,S;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var v,D,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    label: 'Label',
    checked: false,
    readonly: true
  }
}`,...(x=(D=n.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var T,$,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...(N=($=c.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var V,B,F;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var R,W,P;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    label: 'Custom styled input',
    checked: false,
    inputClassName: 'border-2'
  }
}`,...(P=(W=d.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};const z=["WithoutLabel","Default","DefaultValid","DefaultInvalid","Checked","Readonly","Disabled","CheckedDisabled","WithInputClassName"];export{r as Checked,l as CheckedDisabled,s as Default,t as DefaultInvalid,o as DefaultValid,c as Disabled,n as Readonly,d as WithInputClassName,a as WithoutLabel,z as __namedExportsOrder,q as default};
