import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-XnRhdyHW.js";import{c as K}from"./index-D0sKC-UO.js";import{D as N}from"./DIcon-BtjKyMWG.js";import{P as n}from"./config-BV4l-vIF.js";import{I as T}from"./constants-Bqs03lsf.js";import"./DContext-Dm_WebLV.js";import"./index-CQ6hCEsd.js";import"./index-CucmxpGD.js";function O({id:i,name:P,label:r="",className:xe,style:he,options:p=[],labelIcon:C,labelIconFamilyClass:_,labelIconFamilyPrefix:k,disabled:m=!1,loading:o=!1,iconStart:s,iconStartFamilyClass:Ie,iconStartFamilyPrefix:Se,iconStartAriaLabel:Ve,iconEnd:d,iconEndFamilyClass:Ee,iconEndFamilyPrefix:qe,iconEndAriaLabel:Le,hint:f,value:A,size:j,floatingLabel:u=!1,invalid:H=!1,valid:z=!1,dataAttributes:Oe,valueExtractor:F,labelExtractor:$,onChange:b,onBlur:y,onIconStartClick:g,onIconEndClick:v}){const B=a.useId(),l=a.useMemo(()=>i||B,[i,B]),c=a.useCallback(e=>{if(F)return F(e);if("value"in e)return e==null?void 0:e.value;throw new Error("Must provide a valueExtractor for custom object forms")},[F]),R=a.useCallback(e=>{if($)return $(e);if("label"in e)return e==null?void 0:e.label;throw new Error("Must provide a labelExtractor for custom object forms")},[$]),X=a.useCallback(e=>{const J=p.find(Fe=>c(Fe).toString()===e.currentTarget.value);J&&(b==null||b(J))},[b,p,c]),G=a.useCallback(e=>{y==null||y(e)},[y]),Ce=a.useCallback(e=>{g==null||g(e)},[g]),Ae=a.useCallback(e=>{v==null||v(e)},[v]),w=a.useMemo(()=>[s&&`${l}Start`,f&&`${l}Hint`,d&&`${l}End`].filter(Boolean).join(" "),[l,s,d,f]),D=a.useMemo(()=>t.jsx("select",{id:l,name:P,className:K({"form-select":!0,[`form-select-${j}`]:!!j,"floating-label":u,"is-invalid":H,"is-valid":z}),"aria-label":r,disabled:m||o,onChange:X,onBlur:G,...w&&{"aria-describedby":w},...A&&{value:A},children:p.map(e=>t.jsx("option",{value:c(e),children:R(e)},c(e)))}),[w,G,X,m,l,R,c,r,o,P,p,A,u,H,z,j]),M=a.useMemo(()=>t.jsxs("label",{htmlFor:l,children:[r,C&&t.jsx(N,{icon:C,size:`var(--${n}input-label-font-size)`,familyClass:_,familyPrefix:k})]}),[l,r,C,_,k]),je=a.useMemo(()=>u?t.jsxs("div",{className:"form-floating",children:[D,M]}):D,[u,M,D]);return t.jsxs("div",{className:xe,style:he,...Oe,children:[r&&!u&&M,t.jsxs("div",{className:K({"input-group":!0}),children:[s&&t.jsx("button",{type:"button",className:"input-group-text",id:`${l}Start`,onClick:Ce,disabled:m||o,"aria-label":Ve,children:s&&t.jsx(N,{icon:s,familyClass:Ie,familyPrefix:Se})}),je,d&&!o&&t.jsx("button",{type:"button",className:"input-group-text",id:`${l}End`,onClick:Ae,disabled:m||o,"aria-label":Le,children:d&&t.jsx(N,{icon:d,familyClass:Ee,familyPrefix:qe})}),o&&t.jsx("div",{className:"input-group-text form-control-icon loading",children:t.jsx("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true",children:t.jsx("span",{className:"visually-hidden",children:"Loading..."})})})]}),f&&t.jsx("div",{className:"form-text",id:`${l}Hint`,children:f})]})}try{O.displayName="DInputSelect",O.__docgenInfo={description:"",displayName:"DInputSelect",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},labelIcon:{defaultValue:null,description:"",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},labelIconMaterialStyle:{defaultValue:null,description:"",name:"labelIconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:{value:"false"},description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},floatingLabel:{defaultValue:{value:"false"},description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void) | undefined"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void) | undefined"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"T[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((selectedOption: T) => void) | undefined"}},valueExtractor:{defaultValue:null,description:"",name:"valueExtractor",required:!1,type:{name:"((item: T) => string | number) | undefined"}},labelExtractor:{defaultValue:null,description:"",name:"labelExtractor",required:!1,type:{name:"((item: T) => string) | undefined"}}}}}catch{}const He={title:"Design System/Components/Input Select",component:O,parameters:{docs:{description:{component:`
Customize the native \`<select>s\` with custom CSS that changes the element’s initial appearance, with a partial API of \`d-input\` over the HTML select component.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Select](https://getbootstrap.com/docs/5.3/forms/select/)
+ [Bootstrap Custom Select](https://getbootstrap.com/docs/5.3/forms/input-group/#custom-select)

## CSS Variables

The Bootstrap documentation provides details on the default [Select CSS Variables](https://getbootstrap.com/docs/5.3/forms/select/#css)

| Variable                                  | Class        | Type            | Description                 |
|-------------------------------------------|--------------|-----------------|-----------------------------|
| --${n}label-color                 | :root        | css color unit  | Label color                 |
| --${n}label-font-weight           | :root        | css font weight | Label font weight           |
| --${n}label-font-size             | :root        | css length unit | Label font size             |
| --${n}label-padding-x             | :root        | css length unit | Label horizontal padding    |
| --${n}label-padding-y             | :root        | css length unit | Label vertical padding      |
| --${n}input-border-color          | .input-group | css color unit  | Input border color          |
| --${n}input-border-width          | .input-group | css length unit | Input border width          |
| --${n}input-border-radius         | .input-group | css length unit | Input border radius         |
| --${n}input-focus-border-color    | .input-group | css color unit  | Input focus border color    |
| --${n}input-focus-box-shadow      | .input-group | css shadow      | Input focus box shadow      |
| --${n}input-disabled-bg           | .input-group | css color unit  | Input disable background    |
| --${n}input-disabled-color        | .input-group | css color unit  | Input disable color         |
| --${n}input-disabled-border-color | .input-group | css color unit  | Input disable border color  |
| --${n}form-text-padding           | .form-text   | css length unit | Hint padding                |
| --${n}form-text-gap               | .form-text   | css length unit | Space between hint elements |
| --${n}form-text-color             | .form-text   | css color unit  | Hint color                  |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"Name of the input"},className:{control:"text",type:"string"},style:{control:"object"},value:{control:"text",type:"string"},size:{control:{type:"radio",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"]},label:{control:"text",type:"string"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...T]},labelIconFamilyClass:{control:"text",type:"string"},labelIconFamilyPrefix:{control:"text",type:"string"},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...T]},iconStartDisabled:{control:"boolean",type:"boolean"},iconStartFamilyClass:{control:"text",type:"string"},iconStartFamilyPrefix:{control:"text",type:"string"},iconStartAriaLabel:{control:"text",type:"string"},iconStartTabIndex:{control:"number",type:"number"},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...T]},iconEndDisabled:{control:"boolean",type:"boolean"},iconEndFamilyClass:{control:"text",type:"string"},iconEndFamilyPrefix:{control:"text",type:"string"},iconEndAriaLabel:{control:"text",type:"string"},iconEndTabIndex:{control:"number",type:"number"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},labelExtractor:{table:{defaultValue:{summary:"(item: any) => item?.label"}}},valueExtractor:{table:{defaultValue:{summary:"(item: any) => item?.value"}}},onIconStartClick:{action:"onIconStartClick"},onIconEndClick:{action:"onIconEndClick"},onChange:{action:"onChange"},onBlur:{action:"onBlur"},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}}},tags:["autodocs"]},x={args:{id:"componentId1",label:"Label",labelIcon:void 0,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],hint:"Assistive text"}},h={args:{id:"componentId2",label:"Label",labelIcon:void 0,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],value:"2",hint:"Assistive text"}},I={args:{id:"componentId2",label:"Label",labelIcon:void 0,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],hint:"Assistive text",disabled:!0}},S={args:{id:"componentId2",label:"Label",labelIcon:void 0,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],hint:"Assistive text",invalid:!0}},V={args:{id:"componentId2",label:"Label",labelIcon:void 0,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],hint:"Assistive text",valid:!0}},E={args:{id:"componentId3",label:"Label",labelIcon:void 0,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],hint:"Assistive text",iconStart:"emoji-smile-upside-down",iconEnd:"emoji-smile-upside-down",iconStartAriaLabel:"start action",iconEndAriaLabel:"end action"}},q={render:i=>t.jsx(O,{...i}),args:{id:"componentId4",label:"Label",labelIcon:void 0,options:[{id:"1",text:"Option 1"},{id:"2",text:"Option 2"}],labelExtractor:i=>i.text,valueExtractor:i=>i.id,hint:"Assistive text"}},L={args:{id:"componentId5",label:"Label",labelIcon:void 0,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}],hint:"Assistive text",floatingLabel:!0}};var Q,U,W;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    label: 'Label',
    labelIcon: undefined,
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }],
    hint: 'Assistive text'
  }
}`,...(W=(U=x.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    labelIcon: undefined,
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
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ae;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    labelIcon: undefined,
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
}`,...(ae=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var le,ie,oe;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    labelIcon: undefined,
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
}`,...(oe=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var re,se,de;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    labelIcon: undefined,
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
}`,...(de=(se=V.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ue,ce,pe;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    labelIcon: undefined,
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }],
    hint: 'Assistive text',
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action'
  }
}`,...(pe=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,fe,be;q.parameters={...q.parameters,docs:{...(me=q.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <DInputSelect<{
    id: string;
    text: string;
  }> {...args} />,
  args: {
    id: 'componentId4',
    label: 'Label',
    labelIcon: undefined,
    options: [{
      id: '1',
      text: 'Option 1'
    }, {
      id: '2',
      text: 'Option 2'
    }],
    labelExtractor: item => item.text,
    valueExtractor: item => item.id,
    hint: 'Assistive text'
  }
}`,...(be=(fe=q.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ye,ge,ve;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    labelIcon: undefined,
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
}`,...(ve=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};const ze=["Default","Selected","Disabled","Invalid","Valid","Icon","Extractors","Floating"];export{x as Default,I as Disabled,q as Extractors,L as Floating,E as Icon,S as Invalid,h as Selected,V as Valid,ze as __namedExportsOrder,He as default};
