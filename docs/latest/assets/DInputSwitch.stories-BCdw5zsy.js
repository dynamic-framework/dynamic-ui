import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as H}from"./DInputSwitch-BMtaDD7q.js";import{P as a}from"./config-C3iYXcFk.js";import"./iframe-vLNjGVop.js";import"./preload-helper-Dp1pzeXC.js";import"./index-nyyuC_Uj.js";const K={title:"Design System/Components/Input Switch",component:H,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",description:"The class name for the wrapper div",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},inputClassName:{control:"text",type:"string",description:"The class name for the input element",table:{category:"Appearance"}},label:{control:"text",type:"string",table:{category:"Content"}},checked:{control:"boolean",type:"boolean",table:{category:"Behavior"}},readonly:{control:"boolean",type:"boolean",table:{category:"Behavior"}},disabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},invalid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"]},s={args:{checked:!1,disabled:!1,ariaLabel:"Label"}},r={args:{id:"componentId2",label:"Label",checked:!1,disabled:!1}},o={args:{id:"componentId3",label:"Label",checked:!1,disabled:!1,valid:!0}},t={args:{id:"componentId4",label:"Label",checked:!1,disabled:!1,invalid:!0}},n={args:{id:"componentId5",label:"Label",checked:!0,disabled:!1}},c={args:{id:"componentId6",label:"Label",checked:!1,readonly:!0}},l={args:{id:"componentId7",label:"Label",checked:!1,disabled:!0}},d={args:{id:"componentId8",label:"Label",checked:!0,disabled:!0}},i={args:{id:"componentId9",label:"Custom styled input",checked:!1,inputClassName:"border-2"}},p={name:"See More Examples",parameters:{controls:{disable:!0},docs:{description:{story:""},canvas:{sourceState:"hidden"},source:{code:null}}},render:()=>e.jsxs("div",{className:"alert d-flex align-items-start gap-3 p-4 rounded border border-primary-subtle bg-primary-subtle",role:"note","aria-label":"See more examples",children:[e.jsx("span",{className:"fs-4","aria-hidden":"true",children:"💡"}),e.jsxs("div",{children:[e.jsx("strong",{className:"d-block mb-1",children:"Looking for more examples?"}),e.jsxs("span",{className:"text-secondary",children:["To see more examples, you can review the"," ",e.jsx("a",{href:"/?path=/docs/patterns-input-switch--docs",target:"_parent",children:e.jsx("strong",{children:"Patterns / Input Switch"})})," ","stories, where you will find real-world usage patterns with descriptions and full-row highlighting using CSS"," ",e.jsx("code",{children:":has()"}),"."]})]})]})};var m,u,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,g,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    checked: false,
    disabled: false
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,w,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true
  }
}`,...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var x,S,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true
  }
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var I,L,C;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    checked: true,
    disabled: false
  }
}`,...(C=(L=n.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var D,N,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    label: 'Label',
    checked: false,
    readonly: true
  }
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var j,B,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    checked: false,
    disabled: true
  }
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var $,M,A;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    label: 'Label',
    checked: true,
    disabled: true
  }
}`,...(A=(M=d.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var P,R,V;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    label: 'Custom styled input',
    checked: false,
    inputClassName: 'border-2'
  }
}`,...(V=(R=i.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,F,W;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(F=p.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const Q=["WithoutLabel","Default","DefaultValid","DefaultInvalid","Checked","Readonly","Disabled","CheckedDisabled","WithInputClassName","SeeMoreExamples"];export{n as Checked,d as CheckedDisabled,r as Default,t as DefaultInvalid,o as DefaultValid,l as Disabled,c as Readonly,p as SeeMoreExamples,i as WithInputClassName,s as WithoutLabel,Q as __namedExportsOrder,K as default};
