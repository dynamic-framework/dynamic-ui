import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{I as z}from"./constants-Cykb4qS-.js";import{P as t}from"./config-7dXXkQRG.js";import{r as a}from"./iframe-BOlGrI6L.js";import{c as W}from"./index-DowJ8Qf7.js";import{D as X}from"./DIcon-CTNbRGzm.js";import{i as we}from"./isTextLabel-ewSINUcE.js";import{D as Te,h as $e}from"./hasLabelContent-D-Wn7nqw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-CBOESKxy.js";import"./DContext-BsbKwSe9.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";function q({id:i,name:M,label:o="",ariaLabel:j,className:ge,style:ve,options:p=[],disabled:m=!1,loading:r=!1,iconStart:s,iconStartFamilyClass:xe,iconStartFamilyPrefix:he,iconStartAriaLabel:Se,iconEnd:d,iconEndFamilyClass:Ve,iconEndFamilyPrefix:Ee,iconEndAriaLabel:Ie,hint:b,value:C,size:O,floatingLabel:u=!1,invalid:N=!1,valid:H=!1,dataAttributes:Le,valueExtractor:w,labelExtractor:T,onChange:f,onBlur:y,onIconStartClick:g,onIconEndClick:v}){const k=a.useId(),l=a.useMemo(()=>i||k,[i,k]),c=a.useCallback(e=>{if(w)return w(e);if("value"in e)return e==null?void 0:e.value;throw new Error("Must provide a valueExtractor for custom object forms")},[w]),B=a.useCallback(e=>{if(T)return T(e);if("label"in e)return e==null?void 0:e.label;throw new Error("Must provide a labelExtractor for custom object forms")},[T]),P=a.useCallback(e=>{const R=p.find(Oe=>c(Oe).toString()===e.currentTarget.value);R&&(f==null||f(R))},[f,p,c]),_=a.useCallback(e=>{y==null||y(e)},[y]),Ae=a.useCallback(e=>{g==null||g(e)},[g]),qe=a.useCallback(e=>{v==null||v(e)},[v]),$=a.useMemo(()=>[s&&`${l}Start`,b&&`${l}Hint`,d&&`${l}End`].filter(Boolean).join(" "),[l,s,d,b]),D=a.useMemo(()=>n.jsx("select",{id:l,name:M,className:W({"form-select":!0,[`form-select-${O}`]:!!O,"floating-label":u,"is-invalid":N,"is-valid":H}),"aria-label":j??(we(o)?String(o):void 0),disabled:m||r,onChange:P,onBlur:_,...$&&{"aria-describedby":$},...C&&{value:C},children:p.map(e=>n.jsx("option",{value:c(e),children:B(e)},c(e)))}),[$,j,_,P,m,l,B,c,o,r,M,p,C,u,N,H,O]),F=a.useMemo(()=>n.jsx(Te,{htmlFor:l,children:o}),[l,o]),Ce=a.useMemo(()=>u?n.jsxs("div",{className:"form-floating",children:[D,F]}):D,[u,F,D]);return n.jsxs("div",{className:ge,style:ve,...Le,children:[$e(o)&&!u&&F,n.jsxs("div",{className:W({"input-group":!0}),children:[s&&n.jsx("button",{type:"button",className:"input-group-text",id:`${l}Start`,onClick:Ae,disabled:m||r,"aria-label":Se,children:s&&n.jsx(X,{icon:s,familyClass:xe,familyPrefix:he})}),Ce,d&&!r&&n.jsx("button",{type:"button",className:"input-group-text",id:`${l}End`,onClick:qe,disabled:m||r,"aria-label":Ie,children:d&&n.jsx(X,{icon:d,familyClass:Ve,familyPrefix:Ee})}),r&&n.jsx("div",{className:"input-group-text form-control-icon loading",children:n.jsx("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true",children:n.jsx("span",{className:"visually-hidden",children:"Loading..."})})})]}),b&&n.jsx("div",{className:"form-text",id:`${l}Hint`,children:b})]})}try{q.displayName="DInputSelect",q.__docgenInfo={description:"",displayName:"DInputSelect",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"IconValue | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"IconValue | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},label:{defaultValue:{value:""},description:`The label of the control. Any node is accepted, so it can carry a link, an
info trigger or other markup.

Text doubles as the control's accessible name. A richer label does not, so
pass \`ariaLabel\` alongside it; a development-only warning says so when it
is missing. A rich label also does not fit \`floatingLabel\`, whose layout
animates a single line of text.`,name:"label",required:!1,type:{name:"ReactNode"}},ariaLabel:{defaultValue:null,description:"Accessible name of the control, needed when `label` is not plain text.\nWithout it the name becomes whatever the label subtree computes to, which\nfor a label carrying a link or an icon reads as the wrong name or as none.",name:"ariaLabel",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:{value:"false"},description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},floatingLabel:{defaultValue:{value:"false"},description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void) | undefined"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void) | undefined"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"T[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((selectedOption: T) => void) | undefined"}},valueExtractor:{defaultValue:null,description:"",name:"valueExtractor",required:!1,type:{name:"((item: T) => string | number) | undefined"}},labelExtractor:{defaultValue:null,description:"",name:"labelExtractor",required:!1,type:{name:"((item: T) => string) | undefined"}}}}}catch{}const Ge={title:"Design System/Components/Input Select",component:q,parameters:{docs:{description:{component:`
Customize the native \`<select>s\` with custom CSS that changes the element’s initial appearance, with a partial API of \`d-input\` over the HTML select component.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Select](https://getbootstrap.com/docs/5.3/forms/select/)
+ [Bootstrap Custom Select](https://getbootstrap.com/docs/5.3/forms/input-group/#custom-select)

## CSS Variables

The Bootstrap documentation provides details on the default [Select CSS Variables](https://getbootstrap.com/docs/5.3/forms/select/#css)

| Variable                                  | Class        | Type            | Description                 |
|-------------------------------------------|--------------|-----------------|-----------------------------|
| --${t}label-color                 | :root        | css color unit  | Label color                 |
| --${t}label-font-weight           | :root        | css font weight | Label font weight           |
| --${t}label-font-size             | :root        | css length unit | Label font size             |
| --${t}label-padding-x             | :root        | css length unit | Label horizontal padding    |
| --${t}label-padding-y             | :root        | css length unit | Label vertical padding      |
| --${t}input-border-color          | .input-group | css color unit  | Input border color          |
| --${t}input-border-width          | .input-group | css length unit | Input border width          |
| --${t}input-border-radius         | .input-group | css length unit | Input border radius         |
| --${t}input-focus-border-color    | .input-group | css color unit  | Input focus border color    |
| --${t}input-focus-box-shadow      | .input-group | css shadow      | Input focus box shadow      |
| --${t}input-disabled-bg           | .input-group | css color unit  | Input disable background    |
| --${t}input-disabled-color        | .input-group | css color unit  | Input disable color         |
| --${t}input-disabled-border-color | .input-group | css color unit  | Input disable border color  |
| --${t}form-text-padding           | .form-text   | css length unit | Hint padding                |
| --${t}form-text-gap               | .form-text   | css length unit | Space between hint elements |
| --${t}form-text-color             | .form-text   | css color unit  | Hint color                  |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"Name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},value:{control:"text",type:"string",table:{category:"Content"}},size:{control:{type:"radio",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"],table:{category:"Appearance"}},label:{control:"text",description:"Accepts any ReactNode. A text label doubles as the accessible name; a richer one needs an explicit ariaLabel.",table:{category:"Content",type:{summary:"ReactNode"}}},ariaLabel:{control:"text",type:"string",description:"Accessible name of the control. Required when `label` is not plain text.",table:{category:"Content"}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...z],table:{category:"Icon"}},iconStartDisabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},iconStartFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconStartFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconStartAriaLabel:{control:"text",type:"string",table:{category:"Content"}},iconStartTabIndex:{control:"number",type:"number",table:{category:"HTML Attributes"}},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...z],table:{category:"Icon"}},iconEndDisabled:{control:"boolean",type:"boolean",table:{category:"Behavior"}},iconEndFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconEndFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconEndAriaLabel:{control:"text",type:"string",table:{category:"Content"}},iconEndTabIndex:{control:"number",type:"number",table:{category:"HTML Attributes"}},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback",table:{category:"Content"}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},labelExtractor:{table:{defaultValue:{summary:"(item: any) => item?.label"},category:"Behavior"}},valueExtractor:{table:{defaultValue:{summary:"(item: any) => item?.value"},category:"Behavior"}},onIconStartClick:{action:"onIconStartClick",table:{category:"Events"}},onIconEndClick:{action:"onIconEndClick",table:{category:"Events"}},onChange:{action:"onChange",table:{category:"Events"}},onBlur:{action:"onBlur",table:{category:"Events"}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Appearance"}}},tags:["autodocs"]},x={args:{label:"Label",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],hint:"Assistive text"}},h={args:{id:"componentId2",label:"Label",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],value:"2",hint:"Assistive text"}},S={args:{id:"componentId3",label:"Label",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],hint:"Assistive text",disabled:!0}},V={args:{id:"componentId4",label:"Label",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],hint:"Assistive text",invalid:!0}},E={args:{id:"componentId5",label:"Label",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],hint:"Assistive text",valid:!0}},I={args:{id:"componentId6",label:"Label",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],hint:"Assistive text",iconStart:"Smile",iconEnd:"Smile",iconStartAriaLabel:"start action",iconEndAriaLabel:"end action"}},L={render:i=>n.jsx(q,{...i}),args:{id:"componentId7",label:"Label",options:[{id:"1",text:"Option 1"},{id:"2",text:"Option 2"}],labelExtractor:i=>i.text,valueExtractor:i=>i.id,hint:"Assistive text"}},A={args:{id:"componentId8",label:"Label",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],hint:"Assistive text",floatingLabel:!0}};var G,J,K;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }],
    hint: 'Assistive text'
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }],
    value: '2',
    hint: 'Assistive text'
  }
}`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }],
    hint: 'Assistive text',
    disabled: true
  }
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,le;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }],
    hint: 'Assistive text',
    invalid: true
  }
}`,...(le=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ie,oe,re;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }],
    hint: 'Assistive text',
    valid: true
  }
}`,...(re=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,de,ue;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    label: 'Label',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }],
    hint: 'Assistive text',
    iconStart: 'Smile',
    iconEnd: 'Smile',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action'
  }
}`,...(ue=(de=I.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,pe,me;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => <DInputSelect<{
    id: string;
    text: string;
  }> {...args} />,
  args: {
    id: 'componentId7',
    label: 'Label',
    options: [{
      id: '1',
      text: 'Option 1'
    }, {
      id: '2',
      text: 'Option 2'
    }],
    labelExtractor: (item: {
      text: string;
    }) => item.text,
    valueExtractor: (item: {
      id: string;
    }) => item.id,
    hint: 'Assistive text'
  }
}`,...(me=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,fe,ye;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    id: 'componentId8',
    label: 'Label',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }],
    hint: 'Assistive text',
    floatingLabel: true
  }
}`,...(ye=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};const Je=["Default","Selected","Disabled","Invalid","Valid","Icon","Extractors","Floating"];export{x as Default,S as Disabled,L as Extractors,A as Floating,I as Icon,V as Invalid,h as Selected,E as Valid,Je as __namedExportsOrder,Ge as default};
