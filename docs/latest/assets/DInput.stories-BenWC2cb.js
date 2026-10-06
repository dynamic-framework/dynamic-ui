import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{I as p,a as O}from"./constants-Cykb4qS-.js";import{P as e}from"./config-7dXXkQRG.js";import{F as _}from"./DInput-DVsOxLq9.js";import{D as N}from"./DIcon-CTNbRGzm.js";import{D as W}from"./DContext-BsbKwSe9.js";import"./iframe-BOlGrI6L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DowJ8Qf7.js";import"./useProvidedRefOrCreate-DdHEaJGi.js";import"./hasLabelContent-D-Wn7nqw.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-CBOESKxy.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";const re={title:"Design System/Components/Input",component:_,parameters:{docs:{description:{component:`
Wrapper around Bootstrap input group elements.

Give textual form controls like \`<input>s\`, \`<textarea>s\` and \`<label>s\` an upgrade with custom styles, sizing, focus states, and more.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Forms](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Form Control](https://getbootstrap.com/docs/5.3/forms/forcontrol/)
+ [Bootstrap Input Group](https://getbootstrap.com/docs/5.3/forms/input-group/)

## Labels

\`label\` accepts any \`ReactNode\`, not only a string, so a field name can carry a link, a tooltip
trigger or a button that opens a modal — the terms-and-conditions pattern.

Passing a string keeps working exactly as before; the type was widened, not changed. Two things to
watch for when moving to a richer label:

+ **Give the control an accessible name.** A text label doubles as the name; a node does not, since
the name becomes whatever the subtree computes to. Pass \`aria-label\` with the plain-text name of
the field. A development-only warning fires when this is missing.
+ **Do not combine it with \`floatingLabel\`**, whose layout animates a single line of text. This
also warns in development.
+ **Reach for \`<a href>\` first.** A link is not a labelable element, so it is a valid descendant
of a label, and browsers exempt it from the label's click forwarding. A \`<button>\` is labelable
and therefore a forbidden descendant under the HTML content model — put it outside the label
instead. A \`span\` with \`role\` and \`tabindex\` is valid but gets no exemption: the component
suppresses the forwarded click for it, and handling Enter and Space is then on you.

The only code that breaks on upgrade is code that reads the prop type back out of the component and
treats it as a string — \`ComponentProps<typeof DInput>['label']\` forwarded to \`placeholder\` or
\`aria-label\`, or called with a string method. Type the wrapper's own \`label\` as \`string\`, or
narrow with \`typeof label === 'string'\` at the point where it is forwarded.

## CSS Variables

The Bootstrap documentation provides details on the default [Input Form CSS Variables](https://getbootstrap.com/docs/5.3/forms/form-control/#css)
and so it does [Input Group CSS Variables](https://getbootstrap.com/docs/5.3/forms/input-group/#css)

| Variable                                  | Class         | Type            | Description                 |
|-------------------------------------------|---------------|-----------------|-----------------------------|
| --${e}label-color                 | :root         | css color unit  | Label color                 |
| --${e}label-font-weight           | :root         | css font weight | Label font weight           |
| --${e}label-font-size             | :root         | css length unit | Label font size             |
| --${e}label-padding-x             | :root         | css length unit | Label horizontal padding    |
| --${e}label-padding-y             | :root         | css length unit | Label vertical padding      |
| --${e}input-border-color          | .input-group  | css color unit  | Input border color          |
| --${e}input-border-width          | .input-group  | css length unit | Input border width          |
| --${e}input-border-radius         | .input-group  | css length unit | Input border radius         |
| --${e}input-focus-border-color    | .input-group  | css color unit  | Input focus border color    |
| --${e}input-focus-box-shadow      | .input-group  | css shadow      | Input focus box shadow      |
| --${e}input-disabled-bg           | .input-group  | css color unit  | Input disable background    |
| --${e}input-disabled-color        | .input-group  | css color unit  | Input disable color         |
| --${e}input-disabled-border-color | .input-group  | css color unit  | Input disable border color  |
| --${e}form-text-padding           | .form-text    | css length unit | Hint padding                |
| --${e}form-text-gap               | .form-text    | css length unit | Space between hint elements |
| --${e}form-text-color             | .form-text    | css color unit  | Hint color                  |
| --${e}form-control-text-align     | .form-control | css text align  | Input text align            |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"Name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},iconFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},label:{control:"text",description:"Accepts any ReactNode. A text label doubles as the accessible name; a richer one needs an explicit aria-label.",table:{category:"Content",type:{summary:"ReactNode"}}},placeholder:{control:"text",type:"string",table:{category:"Content"}},type:{control:"select",options:["text","email","number"],type:"string",description:"The type of the input",table:{category:"HTML Attributes"}},value:{control:"text",type:"string",description:"The value of the input",table:{category:"Content"}},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"],table:{category:"Appearance"}},inputMode:{control:"text",type:"string",description:"Input mode",table:{category:"HTML Attributes"}},pattern:{control:"text",type:"string",description:"Pattern to validate",table:{category:"HTML Attributes"}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...p],table:{category:"Icon"}},iconStartDisabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},iconStartAriaLabel:{control:"text",type:"string",table:{category:"Content"}},iconStartTabIndex:{control:"number",type:"number",table:{category:"HTML Attributes"}},iconStartFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconStartFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconStartMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...p],table:{category:"Icon"}},iconEndDisabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},iconEndAriaLabel:{control:"text",type:"string",table:{category:"Content"}},iconEndTabIndex:{control:"number",type:"number",table:{category:"HTML Attributes"}},iconEndFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconEndFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconEndMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback",table:{category:"Content"}},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Appearance"}},onIconStartClick:{action:"onIconStartClicked",table:{category:"Events"}},onIconEndClick:{action:"onIconEndClicked",table:{category:"Events"}},onChange:{action:"onChange",table:{category:"Events"}},onBlur:{action:"onBlur",table:{category:"Events"}},onFocus:{action:"onFocus",table:{category:"Events"}},onWheel:{action:"onWheel",table:{category:"Events"}}},tags:["autodocs"]},o={args:{label:"Label",placeholder:"Placeholder",type:"text",value:void 0,hint:"Assistive text"}},a={args:{id:"componentId3",label:"Label",placeholder:"Placeholder",type:"text",value:void 0,iconStart:"Smile",iconStartAriaLabel:"start action",iconEnd:void 0,hint:"Assistive text",invalid:!0}},n={args:{id:"componentId4",label:"Label",placeholder:"Placeholder",type:"text",value:void 0,iconStart:"Smile",iconStartAriaLabel:"start action",iconEnd:void 0,hint:"Assistive text",valid:!0}},r={args:{id:"componentId5",label:"Label",placeholder:"Placeholder",type:"text",value:void 0,iconEnd:"ArrowRight",iconEndAriaLabel:"start action",hint:"Assistive text",disabled:!0}},l={args:{id:"componentId7",label:"Label",placeholder:"Placeholder",type:"text",value:"",iconEnd:"ArrowRight",iconEndAriaLabel:"end action",hint:"Assistive text",floatingLabel:!0}},i={args:{id:"componentId8",label:"Label",placeholder:"Placeholder",type:"text",inputStart:t.jsx(N,{icon:"User"})}},s={args:{id:"componentId9",label:"Label",placeholder:"Placeholder",type:"text",inputEnd:t.jsx(N,{icon:"ArrowRight"})}},c={render:j=>t.jsx(W,{...O,children:t.jsx(_,{...j})}),args:{id:"componentId10",label:"Label",placeholder:"Placeholder",type:"text",iconStart:"face_5",iconStartAriaLabel:"start action"}},d={parameters:{docs:{description:{story:`
\`label\` accepts any \`ReactNode\`, so a field name can sit next to a trigger that reveals extra
information — a link to a longer explanation, or a tooltip or modal trigger.

This example uses a link because a \`<button>\` is a labelable element and so a forbidden descendant
of \`<label>\` under the HTML content model. A modal trigger that has to be a button belongs outside
the label.

Pass \`aria-label\` with the plain-text name of the field: the accessible name otherwise becomes
whatever the label subtree computes to, which includes the trigger's own text. A development-only
warning fires when this is missing.

A rich label does not fit \`floatingLabel\`, whose layout animates a single line of text. That
combination also warns in development.
        `}}},args:{id:"componentIdLabelAction","aria-label":"CVV",placeholder:"123",type:"text",label:t.jsxs(t.Fragment,{children:["CVV"," ",t.jsx("a",{href:"https://dynamicframework.dev",target:"_blank",rel:"noreferrer",children:"What is this?"})]})}};var b,u,m;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    hint: 'Assistive text'
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,h,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    iconStart: 'Smile',
    iconStartAriaLabel: 'start action',
    iconEnd: undefined,
    hint: 'Assistive text',
    invalid: true
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,x,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    iconStart: 'Smile',
    iconStartAriaLabel: 'start action',
    iconEnd: undefined,
    hint: 'Assistive text',
    valid: true
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var I,w,A;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: undefined,
    iconEnd: 'ArrowRight',
    iconEndAriaLabel: 'start action',
    hint: 'Assistive text',
    disabled: true
  }
}`,...(A=(w=r.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var L,S,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    value: '',
    iconEnd: 'ArrowRight',
    iconEndAriaLabel: 'end action',
    hint: 'Assistive text',
    floatingLabel: true
  }
}`,...(E=(S=l.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var C,P,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    inputStart: <DIcon icon="User" />
  }
}`,...(T=(P=i.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var k,D,V;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    inputEnd: <DIcon icon="ArrowRight" />
  }
}`,...(V=(D=s.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,F,M;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInput>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DInput {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId10',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    iconStart: 'face_5',
    iconStartAriaLabel: 'start action'
  }
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var $,B,H;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
\\\`label\\\` accepts any \\\`ReactNode\\\`, so a field name can sit next to a trigger that reveals extra
information — a link to a longer explanation, or a tooltip or modal trigger.

This example uses a link because a \\\`<button>\\\` is a labelable element and so a forbidden descendant
of \\\`<label>\\\` under the HTML content model. A modal trigger that has to be a button belongs outside
the label.

Pass \\\`aria-label\\\` with the plain-text name of the field: the accessible name otherwise becomes
whatever the label subtree computes to, which includes the trigger's own text. A development-only
warning fires when this is missing.

A rich label does not fit \\\`floatingLabel\\\`, whose layout animates a single line of text. That
combination also warns in development.
        \`
      }
    }
  },
  args: {
    id: 'componentIdLabelAction',
    'aria-label': 'CVV',
    placeholder: '123',
    type: 'text',
    label: <>
        CVV
        {' '}
        <a href="https://dynamicframework.dev" target="_blank" rel="noreferrer">
          What is this?
        </a>
      </>
  }
}`,...(H=(B=d.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const le=["Default","Invalid","Valid","Disabled","Floating","CustomInputStart","CustomInputEnd","MaterialIcon","LabelWithAction"];export{s as CustomInputEnd,i as CustomInputStart,o as Default,r as Disabled,l as Floating,a as Invalid,d as LabelWithAction,c as MaterialIcon,n as Valid,le as __namedExportsOrder,re as default};
