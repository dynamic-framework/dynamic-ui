import{D as I}from"./DInputPin-Q9GZw_2u.js";import{P as e}from"./config-C3iYXcFk.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-kwwP_hxt.js";import"./index-C3AGQSt6.js";const A={title:"Design System/Components/Input Pin",component:I,parameters:{docs:{description:{component:`
Component with a partial API of \`d-input\` to take a pin/otp code.

## CSS Variables

The Bootstrap documentation provides details on the default [Input Form CSS Variables](https://getbootstrap.com/docs/5.3/forms/form-control/#css)

| Variable                                                | Class         | Type            | Description                 |
|---------------------------------------------------------|---------------|-----------------|-----------------------------|
| --${e}label-color                               | :root         | css color unit  | Label color                 |
| --${e}label-font-weight                         | :root         | css font weight | Label font weight           |
| --${e}label-font-size                           | :root         | css length unit | Label font size             |
| --${e}label-padding-x                           | :root         | css length unit | Label horizontal padding    |
| --${e}label-padding-y                           | :root         | css length unit | Label vertical padding      |
| --${e}input-pin-form-gap                        | .d-input-pin  | css length unit | Space between inputs        |
| --${e}input-pin-form-control-size               | .d-input-pin  | css length unit | Input width                 |
| --${e}input-pin-form-control-focus-border-color | .d-input-pin  | css color unit  | Input focus border color    |
| --${e}input-pin-form-control-focus-box-shadow   | .d-input-pin  | css box shadow  | Input focus box shadow      |
| --${e}form-text-padding                         | .form-text    | css length unit | Hint padding                |
| --${e}form-text-gap                             | .form-text    | css length unit | Space between hint elements |
| --${e}form-text-color                           | .form-text    | css color unit  | Hint color                  |
| --${e}form-control-text-align                   | .form-control | css text align  | Input text align            |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},className:{control:"text",type:"string"},style:{control:"object"},label:{control:"text",type:"string"},placeholder:{control:"text",type:"string"},type:{control:"select",options:["number","text","tel"],type:"string",description:"Type of the inputs"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},secret:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Hide the characters"},characters:{control:"number",type:"number",description:"Number of characters of the pin"},innerInputMode:{control:"select",options:["number","text","tel"],type:"string",description:"Keyboard style"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},onChange:{action:"onChange"}},tags:["autodocs"]},t={args:{label:"Label",characters:4,type:"text",hint:"Assistive text",disabled:!1,loading:!1,secret:!1,invalid:!1,valid:!1}},a={args:{id:"componentId2",characters:4,type:"text",disabled:!1,loading:!1,secret:!1,invalid:!1,valid:!1}},n={args:{id:"componentId3",label:"Label",characters:4,type:"text",hint:"Assistive text",disabled:!1,loading:!1,secret:!1,invalid:!0,valid:!1}},s={args:{id:"componentId4",label:"Label",characters:4,type:"text",hint:"Assistive text",disabled:!1,loading:!1,secret:!1,invalid:!1,valid:!0}},o={args:{id:"componentId5",label:"Label",characters:4,type:"text",hint:"Assistive text",disabled:!0,loading:!1,secret:!1,invalid:!1,valid:!1}};var l,r,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    disabled: false,
    loading: false,
    secret: false,
    invalid: false,
    valid: false
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    characters: 4,
    type: 'text',
    disabled: false,
    loading: false,
    secret: false,
    invalid: false,
    valid: false
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var f,u,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    disabled: false,
    loading: false,
    secret: false,
    invalid: true,
    valid: false
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var m,g,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    disabled: false,
    loading: false,
    secret: false,
    invalid: false,
    valid: true
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,x,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    disabled: true,
    loading: false,
    secret: false,
    invalid: false,
    valid: false
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const D=["Default","WithoutLabel","Invalid","Valid","Disabled"];export{t as Default,o as Disabled,n as Invalid,s as Valid,a as WithoutLabel,D as __namedExportsOrder,A as default};
