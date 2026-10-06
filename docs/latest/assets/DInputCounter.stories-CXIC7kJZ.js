import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-BOlGrI6L.js";import{I as T,a as me}from"./constants-Cykb4qS-.js";import{P as e}from"./config-7dXXkQRG.js";import{F as fe}from"./DInput-DVsOxLq9.js";import{u as be}from"./useProvidedRefOrCreate-DdHEaJGi.js";import{u as ye}from"./useControlledState-a4a25jbt.js";import{u as ge}from"./useDisableInputWheel-BJn-kmkX.js";import{u as he,D as Ve}from"./DContext-BsbKwSe9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DowJ8Qf7.js";import"./DIcon-CTNbRGzm.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-CBOESKxy.js";import"./hasLabelContent-D-Wn7nqw.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";function I({minValue:a,maxValue:o,value:u,defaultValue:d,invalid:x,iconStart:C,iconEnd:L,iconStartAriaLabel:ee="decrease action",iconEndAriaLabel:ne="increase action",style:A,onChange:r,...ae},E){const{handleOnWheel:te}=ge(E),oe=be(E),S=u!==void 0&&r!==void 0,[t,q]=ye(u,S,d??a),c=n.useRef(t);c.current=t;const l=n.useCallback(i=>{i!==c.current&&(S||(c.current=i),q(i),r==null||r(i))},[S,q,r]),w=n.useRef(!1);n.useEffect(()=>{w.current||!r||(w.current=!0,r(t))},[r,t]);const k=u!==void 0||d!==void 0,D=n.useRef(a);n.useEffect(()=>{D.current!==a&&(D.current=a,!k&&l(a))},[k,a,l]);const re=n.useCallback(i=>{l(Number(i||"0"))},[l]),le=n.useCallback(()=>{l(Math.max(c.current-1,a))},[l,a]),ie=n.useCallback(()=>{l(Math.min(c.current+1,o))},[l,o]),se=n.useMemo(()=>({...A,[`--${e}form-control-component-text-align`]:"center"}),[A]),ue=n.useMemo(()=>t.toString(),[t]),de=n.useMemo(()=>!(t>=a&&t<=o),[t,a,o]),{iconMap:{input:p}}=he(),ce=n.useMemo(()=>L||p.increase,[L,p.increase]),pe=n.useMemo(()=>C||p.decrease,[C,p.decrease]);return s.jsx(fe,{ref:oe,value:ue,style:se,iconStart:pe,iconEnd:ce,invalid:de||x,type:"number",onChange:re,onWheel:te,onIconStartClick:le,onIconEndClick:ie,iconStartAriaLabel:ee,iconEndAriaLabel:ne,...t===a&&{iconStartDisabled:!0},...t===o&&{iconEndDisabled:!0},...ae})}const v=n.forwardRef(I);v.displayName="DInputCounter";try{I.displayName="DInputCounter",I.__docgenInfo={description:"",displayName:"DInputCounter",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"IconValue | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"IconValue | undefined"}},label:{defaultValue:null,description:`The label of the control. Any node is accepted, so it can carry a link, an
info trigger or other markup — the terms-and-conditions pattern.

Text doubles as the control's accessible name. A richer label does not, so
pass \`aria-label\` alongside it; a development-only warning says so when it
is missing. A rich label also does not fit \`floatingLabel\`, whose layout
animates a single line of text.`,name:"label",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:`Current value of the counter.

Passed together with \`onChange\` the counter is fully controlled: when the
parent rejects a change the counter snaps back to this value.

Passed on its own it is taken as the starting value and the counter keeps
counting by itself — the historical behaviour. Prefer \`defaultValue\` for
that, it says so out loud.`,name:"value",required:!1,type:{name:"number | undefined"}},defaultValue:{defaultValue:null,description:"Starting value for uncontrolled usage; falls back to `minValue`.",name:"defaultValue",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!0,type:{name:"number"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: number | undefined) => void) | undefined"}}}}}catch{}const $e={title:"Design System/Components/Input Counter",component:v,parameters:{docs:{description:{component:`
Component composition with \`d-input\` to make a counter input component.

## Controlled and uncontrolled

The control works in both modes.

**Controlled** — pass \`value\` *and* \`onChange\`. The control then renders exactly what the prop
says, so when the parent rejects a change — a selection cap, an async call that fails and reverts, a
reducer that drops a duplicate — it snaps back on its own instead of drifting away from the state
behind it.

**Uncontrolled** — pass \`defaultValue\` for a starting point, or nothing at all, and the control
keeps counting by itself.

\`value\` on its own, with no \`onChange\`, keeps its historical meaning: a starting value that a
later change from outside still lands on, while the control goes on counting by itself. That is what
makes \`<DInputCounter value={3} />\` work, and nothing about it changed. Prefer \`defaultValue\` in new code,
it says so out loud.

The examples on this page pass \`defaultValue\` rather than \`value\`: Storybook injects an action
handler for every \`on*\` arg, so a fixed \`value\` would put them in controlled mode and freeze
them in the canvas. The \`Controlled\` story below drives the value from real state instead.

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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},label:{control:"text",description:"Accepts any ReactNode. A text label doubles as the accessible name; a richer one needs an explicit aria-label.",table:{category:"Content",type:{summary:"ReactNode"}}},value:{control:"number",type:"number",description:"The value of the input. With `onChange` the counter is fully controlled; on its own it is the starting value.",table:{category:"Content"}},defaultValue:{control:"number",type:"number",description:"Starting value for uncontrolled usage; falls back to `minValue`.",table:{category:"Content"}},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"],table:{category:"Appearance"}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...T],table:{category:"Icon"}},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...T],table:{category:"Icon"}},iconStartAriaLabel:{control:"text",type:"string",table:{category:"Content"}},iconEndAriaLabel:{control:"text",type:"string",table:{category:"Content"}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback",table:{category:"Content"}},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Appearance"}},minValue:{control:"number",type:"number",table:{category:"Behavior"}},maxValue:{control:"number",type:"number",table:{category:"Behavior"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"]},m={args:{label:"Label",minValue:0,maxValue:20,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},f={args:{id:"componentId2",label:"Label",defaultValue:21,minValue:0,maxValue:20,invalid:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action",hint:"Assistive text"}},b={args:{id:"componentId3",label:"Label",defaultValue:2,minValue:0,maxValue:20,valid:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action",hint:"Assistive text"}},y={args:{id:"componentId4",label:"Label",defaultValue:3,minValue:0,maxValue:20,disabled:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},g={args:{id:"componentId5",label:"Label",defaultValue:3,minValue:0,maxValue:20,floatingLabel:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},h={render:a=>s.jsx(Ve,{...me,children:s.jsx(v,{...a})}),args:{id:"componentId6",label:"Label",defaultValue:3,minValue:0,maxValue:20,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"},parameters:{docs:{canvas:{sourceState:"shown"}}}},V={parameters:{docs:{description:{story:`
A parent that only accepts even values. Odd steps are rejected, and the counter snaps back instead
of showing a value the state never took.
        `}}},render:function(){const[o,u]=n.useState(0);return s.jsxs("div",{className:"d-flex flex-column gap-2",children:[s.jsx(v,{label:"Quantity (even only)",minValue:0,maxValue:20,value:o,onChange:d=>u(x=>(d??0)%2===0?d??0:x)}),s.jsx("p",{className:"form-text",children:`Accepted value: ${o}`})]})}};var R,F,M;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    minValue: 0,
    maxValue: 20,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var N,$,P;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    defaultValue: 21,
    minValue: 0,
    maxValue: 20,
    invalid: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
    hint: 'Assistive text'
  }
}`,...(P=($=f.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var _,O,j;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    defaultValue: 2,
    minValue: 0,
    maxValue: 20,
    valid: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
    hint: 'Assistive text'
  }
}`,...(j=(O=b.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var B,z,H;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    defaultValue: 3,
    minValue: 0,
    maxValue: 20,
    disabled: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...(H=(z=y.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var Q,W,G;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    defaultValue: 3,
    minValue: 0,
    maxValue: 20,
    floatingLabel: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...(G=(W=g.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var X,U,J;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInputCounter>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DInputCounter {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId6',
    label: 'Label',
    defaultValue: 3,
    minValue: 0,
    maxValue: 20,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(J=(U=h.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,Y,Z;V.parameters={...V.parameters,docs:{...(K=V.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
A parent that only accepts even values. Odd steps are rejected, and the counter snaps back instead
of showing a value the state never took.
        \`
      }
    }
  },
  render: function Render() {
    const [quantity, setQuantity] = useState(0);
    return <div className="d-flex flex-column gap-2">
        <DInputCounter label="Quantity (even only)" minValue={0} maxValue={20} value={quantity} onChange={next => setQuantity(prev => (next ?? 0) % 2 === 0 ? next ?? 0 : prev)} />
        <p className="form-text">{\`Accepted value: \${quantity}\`}</p>
      </div>;
  }
}`,...(Z=(Y=V.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Pe=["Default","Invalid","Valid","Disabled","Floating","MaterialIcon","Controlled"];export{V as Controlled,m as Default,y as Disabled,g as Floating,f as Invalid,h as MaterialIcon,b as Valid,Pe as __namedExportsOrder,$e as default};
