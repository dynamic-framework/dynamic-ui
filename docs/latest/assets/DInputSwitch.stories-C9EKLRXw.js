import{D as E}from"./DInputSwitch-lpTgCUgk.js";import{P as e}from"./config-C3iYXcFk.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-n9SpF7Fs.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BqTa4fxN.js";const O={title:"Design System/Components/Input Switch",component:E,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",description:"The class name for the wrapper div",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},inputClassName:{control:"text",type:"string",description:"The class name for the input element",table:{category:"Appearance"}},label:{control:"text",type:"string",table:{category:"Content"}},checked:{control:"boolean",type:"boolean",table:{category:"Behavior"}},readonly:{control:"boolean",type:"boolean",table:{category:"Behavior"}},disabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},invalid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"]},a={args:{checked:!1,disabled:!1,ariaLabel:"Label"}},o={args:{id:"componentId2",label:"Label",checked:!1,disabled:!1}},t={args:{id:"componentId3",label:"Label",checked:!1,disabled:!1,valid:!0}},s={args:{id:"componentId4",label:"Label",checked:!1,disabled:!1,invalid:!0}},r={args:{id:"componentId5",label:"Label",checked:!0,disabled:!1}},c={args:{id:"componentId6",label:"Label",checked:!1,readonly:!0}},n={args:{id:"componentId7",label:"Label",checked:!1,disabled:!0}},l={args:{id:"componentId8",label:"Label",checked:!0,disabled:!0}},d={args:{id:"componentId9",label:"Custom styled input",checked:!1,inputClassName:"border-2"}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,u,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    checked: false,
    disabled: false
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true
  }
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var y,w,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true
  }
}`,...(I=(w=s.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var v,L,C;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(C=(L=r.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var S,D,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    label: 'Label',
    checked: false,
    readonly: true
  }
}`,...(x=(D=c.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var T,B,$;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...($=(B=n.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var N,A,V;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(V=(A=l.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var F,R,W;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    label: 'Custom styled input',
    checked: false,
    inputClassName: 'border-2'
  }
}`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const X=["WithoutLabel","Default","DefaultValid","DefaultInvalid","Checked","Readonly","Disabled","CheckedDisabled","WithInputClassName"];export{r as Checked,l as CheckedDisabled,o as Default,s as DefaultInvalid,t as DefaultValid,n as Disabled,c as Readonly,d as WithInputClassName,a as WithoutLabel,X as __namedExportsOrder,O as default};
