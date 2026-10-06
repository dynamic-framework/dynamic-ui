import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ne}from"./iframe-BOlGrI6L.js";import{P as f}from"./config-7dXXkQRG.js";import{D as Z}from"./DInputCheck-Cp2aVIEM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DowJ8Qf7.js";import"./hasLabelContent-D-Wn7nqw.js";const be={title:"Design System/Components/Input Check",component:Z,parameters:{docs:{description:{component:`
Create consistent cross-browser and cross-device checkboxes with our completely rewritten checks component.

**Checkbox:** Allows the user to make multiple selections from a set of options.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Checks and Radios](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Checks](https://getbootstrap.com/docs/5.3/forms/checks-radios/#checks)

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
makes \`<DInputCheck type="radio" name="plan" checked />\` work, and nothing about it changed. Prefer \`defaultChecked\` in new code,
it says so out loud.

The examples on this page pass \`defaultChecked\` rather than \`checked\`: Storybook injects an action
handler for every \`on*\` arg, so a fixed \`checked\` would put them in controlled mode and freeze
them in the canvas. The \`Controlled\` story below drives the value from real state instead.

## Labels

\`label\` accepts any \`ReactNode\`, not only a string, so a field name can carry a link, a tooltip
trigger or a button that opens a modal — the terms-and-conditions pattern.

Passing a string keeps working exactly as before; the type was widened, not changed. Two things to
watch for when moving to a richer label:

+ **Give the control an accessible name.** A text label doubles as the name; a node does not, since
the name becomes whatever the subtree computes to. Pass \`aria-label\` with the plain-text name of
the field. A development-only warning fires when this is missing.
+ **Reach for \`<a href>\` first.** A link is not a labelable element, so it is a valid descendant
of a label, and browsers exempt it from the label's click forwarding. A \`<button>\` is labelable
and therefore a forbidden descendant under the HTML content model — put it outside the label
instead. A \`span\` with \`role\` and \`tabindex\` is valid but gets no exemption: the component
suppresses the forwarded click for it, and handling Enter and Space is then on you.

The only code that breaks on upgrade is code that reads the prop type back out of the component and
treats it as a string — \`ComponentProps<typeof DInputCheck>['label']\` forwarded to \`placeholder\` or
\`aria-label\`, or called with a string method. Type the wrapper's own \`label\` as \`string\`, or
narrow with \`typeof label === 'string'\` at the point where it is forwarded.

## CSS Variables

The Bootstrap documentation provides details on the default [Check CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                            | Class               | Type            | Description                 |
|-----------------------------------------------------|---------------------|-----------------|-----------------------------|
| --${f}form-check-input-focus-border-color   | .form-check-input   | css color unit  | Focus border color          |
| --${f}form-check-input-focus-box-shadow     | .form-check-input   | css box shadow  | Focus box shadow            |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",description:"The class name for the wrapper div",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},inputClassName:{control:"text",type:"string",description:"The class name for the input element",table:{category:"Appearance"}},type:{control:"select",type:"string",options:["checkbox","radio"],table:{category:"HTML Attributes"}},value:{control:"text",type:"string",description:"The value of the input",table:{category:"Content"}},label:{control:"text",description:"Accepts any ReactNode. A text label doubles as the accessible name; a richer one needs an explicit aria-label.",table:{category:"Content",type:{summary:"ReactNode"}}},ariaLabel:{control:"text",type:"string",description:"The ARIA label for the input, used when there is no visible label",table:{category:"HTML Attributes"}},checked:{control:"boolean",type:"boolean",description:"Checked state. With `onChange` the control is fully controlled; on its own it is the starting value.",table:{category:"Behavior"}},defaultChecked:{control:"boolean",type:"boolean",description:"Starting checked state for uncontrolled usage.",table:{category:"Behavior"}},disabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},indeterminate:{control:"boolean",description:"Only applies when `type` is `checkbox`; ignored for `radio`.",table:{category:"Behavior"}},hint:{control:"text",type:"string",table:{category:"Content"}},invalid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{category:"Behavior"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"]},n={args:{id:"componentId1",type:"checkbox",label:"Label",defaultChecked:!1,disabled:!1,indeterminate:!1,invalid:!1,valid:!1,hint:"",name:"checkbox",value:"value",className:"",inputClassName:""}},o={args:{id:"componentId2",type:"checkbox",defaultChecked:!1,disabled:!1,ariaLabel:"Label"}},s={args:{id:"componentId3",type:"checkbox",label:"Label",hint:"Assistive text",defaultChecked:!1,disabled:!1}},r={args:{id:"componentId4",type:"checkbox",label:"Label",defaultChecked:!1,disabled:!1,valid:!0,hint:"Assistive text"}},c={args:{id:"componentId5",type:"checkbox",label:"Label",defaultChecked:!1,disabled:!1,invalid:!0,hint:"Assistive text"}},i={args:{id:"componentId6",type:"checkbox",label:"Label",defaultChecked:!0,disabled:!1}},l={args:{id:"componentId6b",type:"checkbox",label:"Label",defaultChecked:!1,disabled:!1,indeterminate:!0}},d={args:{id:"componentId7",type:"checkbox",label:"Label",defaultChecked:!1,disabled:!0}},h={args:{id:"componentId8",type:"checkbox",label:"Label",defaultChecked:!0,disabled:!0}},p={args:{id:"componentId9",type:"checkbox",label:"Custom styled input",defaultChecked:!1,inputClassName:"border-2 border-info-500"}},b={parameters:{docs:{description:{story:`
\`label\` accepts any \`ReactNode\`, which covers the terms-and-conditions pattern: part of the
label is a link to the full text, a tooltip trigger or a button that opens a modal.

Two things to keep in mind:

+ Pass \`ariaLabel\` with the plain-text name of the field. The accessible name otherwise becomes
whatever the label subtree computes to, which for a label carrying a link reads as the wrong name.
A development-only warning fires when this is missing.
+ Clicking the nested link or button does **not** toggle the checkbox: the HTML spec skips a
label's activation behavior for events targeted at interactive content descendants. Clicking the
plain text still toggles it.
+ Triggers that are not native interactive content — a \`span\` with \`role=button\` and a
\`tabindex\`, say — get no such exemption from the browser, so the component suppresses that
forwarded click itself. Prefer a real \`<button>\` anyway: it is focusable and operable by keyboard
without extra attributes.
        `}}},args:{id:"componentIdTerms",type:"checkbox",defaultChecked:!1,ariaLabel:"Accept the terms and conditions",label:e.jsxs(e.Fragment,{children:["I accept the"," ",e.jsx("a",{href:"https://dynamicframework.dev",target:"_blank",rel:"noreferrer",children:"terms and conditions"})]})}},m={parameters:{docs:{description:{story:`
A parent that caps the selection at two. The third click is rejected, and the checkbox snaps back
instead of staying marked while the state says otherwise.
        `}}},render:function(){const[u,ee]=ne.useState([]);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[["Ana","Beto","Carla","Diego"].map(t=>e.jsx(Z,{type:"checkbox",label:t,checked:u.includes(t),onChange:te=>ee(a=>te.target.checked?a.length<2?[...a,t]:a:a.filter(ae=>ae!==t))},t)),e.jsx("p",{className:"form-text",children:`Up to 2 approvers — selected: ${u.join(", ")||"none"}`})]})}};var g,k,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    type: 'checkbox',
    label: 'Label',
    defaultChecked: false,
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
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var x,w,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    type: 'checkbox',
    defaultChecked: false,
    disabled: false,
    ariaLabel: 'Label'
  }
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var C,I,L;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    hint: 'Assistive text',
    defaultChecked: false,
    disabled: false
  }
}`,...(L=(I=s.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var T,A,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    valid: true,
    hint: 'Assistive text'
  }
}`,...(S=(A=r.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var N,D,j;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    type: 'checkbox',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    invalid: true,
    hint: 'Assistive text'
  }
}`,...(j=(D=c.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var M,B,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    type: 'checkbox',
    label: 'Label',
    defaultChecked: true,
    disabled: false
  }
}`,...(R=(B=i.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var P,H,W;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: 'componentId6b',
    type: 'checkbox',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    indeterminate: true
  }
}`,...(W=(H=l.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var E,$,V;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    type: 'checkbox',
    label: 'Label',
    defaultChecked: false,
    disabled: true
  }
}`,...(V=($=d.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var _,F,U;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    type: 'checkbox',
    label: 'Label',
    defaultChecked: true,
    disabled: true
  }
}`,...(U=(F=h.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var O,z,G;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'componentId9',
    type: 'checkbox',
    label: 'Custom styled input',
    defaultChecked: false,
    inputClassName: 'border-2 border-info-500'
  }
}`,...(G=(z=p.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var X,q,J;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
\\\`label\\\` accepts any \\\`ReactNode\\\`, which covers the terms-and-conditions pattern: part of the
label is a link to the full text, a tooltip trigger or a button that opens a modal.

Two things to keep in mind:

+ Pass \\\`ariaLabel\\\` with the plain-text name of the field. The accessible name otherwise becomes
whatever the label subtree computes to, which for a label carrying a link reads as the wrong name.
A development-only warning fires when this is missing.
+ Clicking the nested link or button does **not** toggle the checkbox: the HTML spec skips a
label's activation behavior for events targeted at interactive content descendants. Clicking the
plain text still toggles it.
+ Triggers that are not native interactive content — a \\\`span\\\` with \\\`role=button\\\` and a
\\\`tabindex\\\`, say — get no such exemption from the browser, so the component suppresses that
forwarded click itself. Prefer a real \\\`<button>\\\` anyway: it is focusable and operable by keyboard
without extra attributes.
        \`
      }
    }
  },
  args: {
    id: 'componentIdTerms',
    type: 'checkbox',
    defaultChecked: false,
    ariaLabel: 'Accept the terms and conditions',
    label: <>
        I accept the
        {' '}
        <a href="https://dynamicframework.dev" target="_blank" rel="noreferrer">
          terms and conditions
        </a>
      </>
  }
}`,...(J=(q=b.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Y;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
A parent that caps the selection at two. The third click is rejected, and the checkbox snaps back
instead of staying marked while the state says otherwise.
        \`
      }
    }
  },
  render: function Render() {
    const LIMIT = 2;
    const [selected, setSelected] = useState<Array<string>>([]);
    return <div className="d-flex flex-column gap-2">
        {['Ana', 'Beto', 'Carla', 'Diego'].map(approver => <DInputCheck key={approver} type="checkbox" label={approver} checked={selected.includes(approver)} onChange={event => setSelected(prev => {
        if (!event.target.checked) {
          return prev.filter(name => name !== approver);
        }
        return prev.length < LIMIT ? [...prev, approver] : prev;
      })} />)}
        <p className="form-text">
          {\`Up to \${LIMIT} approvers — selected: \${selected.join(', ') || 'none'}\`}
        </p>
      </div>;
  }
}`,...(Y=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const me=["Default","WithoutLabel","Hint","Valid","Invalid","Checked","Indeterminate","Disabled","CheckedDisabled","WithInputClassName","LabelWithLink","Controlled"];export{i as Checked,h as CheckedDisabled,m as Controlled,n as Default,d as Disabled,s as Hint,l as Indeterminate,c as Invalid,b as LabelWithLink,r as Valid,p as WithInputClassName,o as WithoutLabel,me as __namedExportsOrder,be as default};
