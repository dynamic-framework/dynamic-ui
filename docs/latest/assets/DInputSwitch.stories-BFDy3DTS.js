import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as J}from"./iframe-BOlGrI6L.js";import{P as a}from"./config-7dXXkQRG.js";import{D as X}from"./DInputSwitch-LcxvDFqv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DowJ8Qf7.js";import"./hasLabelContent-D-Wn7nqw.js";import"./useControlledState-a4a25jbt.js";const re={title:"Design System/Components/Input Switch",component:X,parameters:{docs:{description:{component:`
Graphical control element that allows the user to choose between two mutually exclusive states.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Switch](https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches)

## Controlled and uncontrolled

The control works in both modes.

**Controlled** — pass \`checked\` *and* \`onChange\`. The control then renders exactly what the prop
says, so when the parent rejects a change — a selection cap, an async call that fails and reverts, a
reducer that drops a duplicate — it snaps back on its own instead of drifting away from the state
behind it.

**Uncontrolled** — pass \`defaultChecked\` for a starting point, or nothing at all, and the control
keeps toggling by itself.

\`checked\` on its own, with no \`onChange\`, keeps its historical meaning: a starting value that a
later change from outside still lands on, while the control goes on toggling by itself. That is what
makes \`<DInputSwitch checked />\` work, and nothing about it changed. Prefer \`defaultChecked\` in new code,
it says so out loud.

The examples on this page pass \`defaultChecked\` rather than \`checked\`: Storybook injects an action
handler for every \`on*\` arg, so a fixed \`checked\` would put them in controlled mode and freeze
them in the canvas. The \`Controlled\` story below drives the value from real state instead.

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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",description:"The class name for the wrapper div",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},inputClassName:{control:"text",type:"string",description:"The class name for the input element",table:{category:"Appearance"}},label:{control:"text",description:"Accepts any ReactNode. A text label doubles as the accessible name; a richer one needs an explicit ariaLabel.",table:{category:"Content",type:{summary:"ReactNode"}}},ariaLabel:{control:"text",type:"string",description:"The ARIA label for the input, used when there is no visible label",table:{category:"HTML Attributes"}},checked:{control:"boolean",type:"boolean",description:"Checked state. With `onChange` the control is fully controlled; on its own it is the starting value.",table:{category:"Behavior"}},defaultChecked:{control:"boolean",type:"boolean",description:"Starting checked state for uncontrolled usage.",table:{category:"Behavior"}},readonly:{control:"boolean",type:"boolean",table:{category:"Behavior"}},disabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},invalid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},hint:{control:"text",type:"string",table:{category:"Content"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"]},t={args:{defaultChecked:!1,disabled:!1,ariaLabel:"Label"}},s={args:{id:"componentId2",label:"Label",defaultChecked:!1,disabled:!1}},o={args:{id:"componentId3",label:"Label",defaultChecked:!1,disabled:!1,valid:!0,hint:"Assistive text"}},r={args:{id:"componentId4",label:"Label",defaultChecked:!1,disabled:!1,invalid:!0,hint:"Assistive text"}},n={args:{id:"componentId5",label:"Label",defaultChecked:!0,disabled:!1}},l={args:{id:"componentId6",label:"Label",defaultChecked:!1,readonly:!0}},c={args:{id:"componentId7",label:"Label",defaultChecked:!1,disabled:!0}},d={args:{id:"componentId8",label:"Label",defaultChecked:!0,disabled:!0}},i={args:{id:"componentId9",label:"Custom styled input",defaultChecked:!1,inputClassName:"border-2"}},p={name:"See More Examples",parameters:{controls:{disable:!0},docs:{description:{story:""},canvas:{sourceState:"hidden"},source:{code:null}}},render:()=>e.jsxs("div",{className:"alert d-flex align-items-start gap-3 p-4 rounded border border-primary-subtle bg-primary-subtle",role:"note","aria-label":"See more examples",children:[e.jsx("span",{className:"fs-4","aria-hidden":"true",children:"💡"}),e.jsxs("div",{children:[e.jsx("strong",{className:"d-block mb-1",children:"Looking for more examples?"}),e.jsxs("span",{className:"text-secondary",children:["To see more examples, you can review the"," ",e.jsx("a",{href:"/?path=/docs/patterns-input-switch--docs",target:"_parent",children:e.jsx("strong",{children:"Patterns / Input Switch"})})," ","stories, where you will find real-world usage patterns with descriptions and full-row highlighting using CSS"," ",e.jsx("code",{children:":has()"}),"."]})]})]})},h={parameters:{docs:{description:{story:`
A parent that refuses to turn the switch on. The switch snaps back instead of staying on while the
state says otherwise.
        `}}},render:function(){const[u,q]=J.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(X,{label:"Notifications",checked:u,onChange:()=>q(!1)}),e.jsx("p",{className:"form-text",children:`Rejected by the parent — state: ${u?"on":"off"}`})]})}};var m,b,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    defaultChecked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,y,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    defaultChecked: false,
    disabled: false
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var k,x,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    valid: true,
    hint: 'Assistive text'
  }
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var v,S,I;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    invalid: true,
    hint: 'Assistive text'
  }
}`,...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var L,N,T;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    defaultChecked: true,
    disabled: false
  }
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var j,A,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    label: 'Label',
    defaultChecked: false,
    readonly: true
  }
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var E,R,B;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    defaultChecked: false,
    disabled: true
  }
}`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var $,M,P;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    label: 'Label',
    defaultChecked: true,
    disabled: true
  }
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var V,W,_;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    label: 'Custom styled input',
    defaultChecked: false,
    inputClassName: 'border-2'
  }
}`,...(_=(W=i.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var F,H,z;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(H=p.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var G,O,U;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
A parent that refuses to turn the switch on. The switch snaps back instead of staying on while the
state says otherwise.
        \`
      }
    }
  },
  render: function Render() {
    const [enabled, setEnabled] = useState(false);
    return <div className="d-flex flex-column gap-2">
        <DInputSwitch label="Notifications" checked={enabled} onChange={() => setEnabled(false)} />
        <p className="form-text">
          {\`Rejected by the parent — state: \${enabled ? 'on' : 'off'}\`}
        </p>
      </div>;
  }
}`,...(U=(O=h.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const ne=["WithoutLabel","Default","Valid","Invalid","Checked","Readonly","Disabled","CheckedDisabled","WithInputClassName","SeeMoreExamples","Controlled"];export{n as Checked,d as CheckedDisabled,h as Controlled,s as Default,c as Disabled,r as Invalid,l as Readonly,p as SeeMoreExamples,o as Valid,i as WithInputClassName,t as WithoutLabel,ne as __namedExportsOrder,re as default};
