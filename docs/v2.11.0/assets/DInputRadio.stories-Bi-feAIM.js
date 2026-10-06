import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{r as U}from"./iframe-BOlGrI6L.js";import{P as b}from"./config-7dXXkQRG.js";import{D as _}from"./DInputCheck-Cp2aVIEM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DowJ8Qf7.js";import"./hasLabelContent-D-Wn7nqw.js";const ee={title:"Design System/Components/Input Radio",component:_,parameters:{docs:{description:{component:`
Create consistent cross-browser and cross-device radios with our completely rewritten checks component.

**Radio:** It is a type of graphical interface widget that allows the user to choose an option from a predefined set of options.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Checks and Radios](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Radios](https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios)

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
makes \`<DInputCheck type="radio" name="plan" checked />\` work, and nothing about it changed. Prefer
\`defaultChecked\` in new code, it says so out loud.

The examples on this page pass \`defaultChecked\` rather than \`checked\`: Storybook injects an action
handler for every \`on*\` arg, so a fixed \`checked\` would put them in controlled mode and freeze
them in the canvas. The \`Controlled\` story below drives the value from real state instead.

## CSS Variables

The Bootstrap documentation provides details on the default [Radio CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                            | Class               | Type            | Description                 |
|-----------------------------------------------------|---------------------|-----------------|-----------------------------|
| --${b}form-check-input-focus-border-color   | .form-check-input   | css color unit  | Focus border color          |
| --${b}form-check-input-focus-box-shadow     | .form-check-input   | css box shadow  | Focus box shadow            |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",description:"The class name for the wrapper div",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},inputClassName:{control:"text",type:"string",description:"The class name for the input element",table:{category:"Appearance"}},type:{control:"select",type:"string",options:["checkbox","radio"],defaultValue:"radio",table:{category:"HTML Attributes"}},value:{control:"text",type:"string",description:"The value of the input",table:{category:"Content"}},label:{control:"text",type:"string",table:{category:"Content"}},ariaLabel:{control:"text",type:"string",description:"The ARIA label for the input, used when there is no visible label",table:{category:"HTML Attributes"}},checked:{control:"boolean",type:"boolean",description:"Checked state. With `onChange` the control is fully controlled; on its own it is the starting value.",table:{category:"Behavior"}},defaultChecked:{control:"boolean",type:"boolean",description:"Starting checked state for uncontrolled usage.",table:{category:"Behavior"}},disabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},hint:{control:"text",type:"string",table:{category:"Content"}},valid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},invalid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"]},a={args:{id:"componentId1",type:"radio",label:"Label",defaultChecked:!1,disabled:!1,hint:"Assistive text",valid:!1,invalid:!1,name:"defaultRadio",className:"",value:"value",inputClassName:""}},t={args:{id:"componentId2",type:"radio",defaultChecked:!1,disabled:!1,ariaLabel:"Label"}},o={args:{id:"componentId3",type:"radio",label:"Label",hint:"Assistive text",defaultChecked:!1,disabled:!1}},s={args:{id:"componentId4",type:"radio",label:"Label",defaultChecked:!1,disabled:!1,valid:!0,hint:"Assistive text"}},n={args:{id:"componentId5",type:"radio",label:"Label",defaultChecked:!1,disabled:!1,invalid:!0,hint:"Assistive text"}},r={args:{id:"componentId6",type:"radio",label:"Label",defaultChecked:!0,disabled:!1}},i={args:{id:"componentId7",type:"radio",label:"Label",defaultChecked:!1,disabled:!0}},l={args:{id:"componentId8",type:"radio",label:"Label",defaultChecked:!0,disabled:!0}},d={parameters:{docs:{description:{story:`
A radio group whose parent only accepts upgrades. Picking a cheaper plan is rejected, and the
click snaps back instead of leaving the group showing an option the state never took.
        `}}},render:function(){const c=["basic","pro","enterprise"],h={basic:"Basic",pro:"Pro",enterprise:"Enterprise"},[u,z]=U.useState("basic");return p.jsxs("div",{className:"d-flex flex-column gap-2",children:[c.map(e=>p.jsx(_,{type:"radio",name:"controlledPlan",label:h[e],value:e,checked:u===e,onChange:()=>z(m=>c.indexOf(e)>c.indexOf(m)?e:m)},e)),p.jsx("p",{className:"form-text",children:`Downgrades are rejected — selected: ${h[u]}`})]})}};var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    type: 'radio',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    hint: 'Assistive text',
    valid: false,
    invalid: false,
    name: 'defaultRadio',
    className: '',
    value: 'value',
    inputClassName: ''
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var k,v,C;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    type: 'radio',
    defaultChecked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(C=(v=t.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var L,x,w;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    type: 'radio',
    label: 'Label',
    hint: 'Assistive text',
    defaultChecked: false,
    disabled: false
  }
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var A,S,I;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    type: 'radio',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    valid: true,
    hint: 'Assistive text'
  }
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var T,B,P;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    type: 'radio',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    invalid: true,
    hint: 'Assistive text'
  }
}`,...(P=(B=n.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var N,D,E;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    type: 'radio',
    label: 'Label',
    defaultChecked: true,
    disabled: false
  }
}`,...(E=(D=r.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var j,R,H;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    type: 'radio',
    label: 'Label',
    defaultChecked: false,
    disabled: true
  }
}`,...(H=(R=i.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var V,O,M;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    type: 'radio',
    label: 'Label',
    defaultChecked: true,
    disabled: true
  }
}`,...(M=(O=l.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var $,F,W;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
A radio group whose parent only accepts upgrades. Picking a cheaper plan is rejected, and the
click snaps back instead of leaving the group showing an option the state never took.
        \`
      }
    }
  },
  render: function Render() {
    const PLANS = ['basic', 'pro', 'enterprise'];
    const LABELS = {
      basic: 'Basic',
      pro: 'Pro',
      enterprise: 'Enterprise'
    };
    const [plan, setPlan] = useState('basic');
    return <div className="d-flex flex-column gap-2">
        {PLANS.map(id => <DInputCheck key={id} type="radio" name="controlledPlan" label={LABELS[id as keyof typeof LABELS]} value={id} checked={plan === id} onChange={() => setPlan(prev => PLANS.indexOf(id) > PLANS.indexOf(prev) ? id : prev)} />)}
        <p className="form-text">
          {\`Downgrades are rejected — selected: \${LABELS[plan as keyof typeof LABELS]}\`}
        </p>
      </div>;
  }
}`,...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const ae=["Default","WithoutLabel","Hint","Valid","Invalid","Checked","Disabled","CheckedDisabled","Controlled"];export{r as Checked,l as CheckedDisabled,d as Controlled,a as Default,i as Disabled,o as Hint,n as Invalid,s as Valid,t as WithoutLabel,ae as __namedExportsOrder,ee as default};
