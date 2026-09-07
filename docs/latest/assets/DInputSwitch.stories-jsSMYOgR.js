import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as a}from"./config-C3iYXcFk.js";import{D as H}from"./DInputSwitch-BoqaXHma.js";import"./iframe-D2KSBTDy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D9ZNrqU0.js";const K={title:"Design System/Components/Input Switch",component:H,parameters:{docs:{description:{component:`
Graphical control element that allows the user to choose between two mutually exclusive states.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Switch](https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches)

## CSS Variables

The Bootstrap documentation provides details on the default [Checks CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                            | Class               | Type              | Description                |
|-----------------------------------------------------|---------------------|-------------------|----------------------------|
| --${a}form-switch-width                     | .form-switch        | css length unit   | Switch width               |
| --${a}form-switch-padding-start             | .form-switch        | css length unit   | Padding start              |
| --${a}form-switch-border-radius             | .form-switch        | css length unit   | Border radius              |
| --${a}form-switch-bg                        | .form-switch        | data url svg      | Regular image background   |
| --${a}form-switch-focus-bg-image            | .form-switch        | data url svg      | Focus image background     |
| --${a}form-switch-checked-bg-image          | .form-switch        | data url svg      | Checked image backgound    |
| --${a}form-check-input-focus-border-color   | .form-check-input   | css color unit    | Focus border color         |
| --${a}form-check-input-focus-box-shadow     | .form-check-input   | css box shadow    | Focus box shadow           |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",description:"The class name for the wrapper div",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},inputClassName:{control:"text",type:"string",description:"The class name for the input element",table:{category:"Appearance"}},label:{control:"text",type:"string",table:{category:"Content"}},ariaLabel:{control:"text",type:"string",description:"The ARIA label for the input, used when there is no visible label",table:{category:"HTML Attributes"}},checked:{control:"boolean",type:"boolean",table:{category:"Behavior"}},readonly:{control:"boolean",type:"boolean",table:{category:"Behavior"}},disabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},invalid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},hint:{control:"text",type:"string",table:{category:"Content"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"]},s={args:{checked:!1,disabled:!1,ariaLabel:"Label"}},t={args:{id:"componentId2",label:"Label",checked:!1,disabled:!1}},r={args:{id:"componentId3",label:"Label",checked:!1,disabled:!1,valid:!0,hint:"Assistive text"}},o={args:{id:"componentId4",label:"Label",checked:!1,disabled:!1,invalid:!0,hint:"Assistive text"}},n={args:{id:"componentId5",label:"Label",checked:!0,disabled:!1}},c={args:{id:"componentId6",label:"Label",checked:!1,readonly:!0}},l={args:{id:"componentId7",label:"Label",checked:!1,disabled:!0}},i={args:{id:"componentId8",label:"Label",checked:!0,disabled:!0}},d={args:{id:"componentId9",label:"Custom styled input",checked:!1,inputClassName:"border-2"}},p={name:"See More Examples",parameters:{controls:{disable:!0},docs:{description:{story:""},canvas:{sourceState:"hidden"},source:{code:null}}},render:()=>e.jsxs("div",{className:"alert d-flex align-items-start gap-3 p-4 rounded border border-primary-subtle bg-primary-subtle",role:"note","aria-label":"See more examples",children:[e.jsx("span",{className:"fs-4","aria-hidden":"true",children:"💡"}),e.jsxs("div",{children:[e.jsx("strong",{className:"d-block mb-1",children:"Looking for more examples?"}),e.jsxs("span",{className:"text-secondary",children:["To see more examples, you can review the"," ",e.jsx("a",{href:"/?path=/docs/patterns-input-switch--docs",target:"_parent",children:e.jsx("strong",{children:"Patterns / Input Switch"})})," ","stories, where you will find real-world usage patterns with descriptions and full-row highlighting using CSS"," ",e.jsx("code",{children:":has()"}),"."]})]})]})};var m,u,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,g,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    checked: false,
    disabled: false
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,w,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true,
    hint: 'Assistive text'
  }
}`,...(x=(w=r.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var k,v,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true,
    hint: 'Assistive text'
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var I,L,C;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(C=(L=n.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var N,T,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    label: 'Label',
    checked: false,
    readonly: true
  }
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var j,D,B;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...(B=(D=l.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var E,$,M;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(M=($=i.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var R,P,V;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    label: 'Custom styled input',
    checked: false,
    inputClassName: 'border-2'
  }
}`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var _,F,W;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'See More Examples',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: ''
      },
      canvas: {
        sourceState: 'hidden'
      },
      source: {
        code: null
      }
    }
  },
  render: () => <div className="alert d-flex align-items-start gap-3 p-4 rounded border border-primary-subtle bg-primary-subtle" role="note" aria-label="See more examples">
      <span className="fs-4" aria-hidden="true">💡</span>
      <div>
        <strong className="d-block mb-1">Looking for more examples?</strong>
        <span className="text-secondary">
          To see more examples, you can review the
          {' '}
          <a href="/?path=/docs/patterns-input-switch--docs" target="_parent">
            <strong>Patterns / Input Switch</strong>
          </a>
          {' '}
          stories, where you will find real-world usage patterns with descriptions
          and full-row highlighting using CSS
          {' '}
          <code>:has()</code>
          .
        </span>
      </div>
    </div>
}`,...(W=(F=p.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const Q=["WithoutLabel","Default","Valid","Invalid","Checked","Readonly","Disabled","CheckedDisabled","WithInputClassName","SeeMoreExamples"];export{n as Checked,i as CheckedDisabled,t as Default,l as Disabled,o as Invalid,c as Readonly,p as SeeMoreExamples,r as Valid,d as WithInputClassName,s as WithoutLabel,Q as __namedExportsOrder,K as default};
