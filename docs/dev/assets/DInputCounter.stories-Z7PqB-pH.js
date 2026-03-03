import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-B6LdZuKn.js";import{F as te}from"./DInput-Bq9Zzv_H.js";import{P as e}from"./config-C3iYXcFk.js";import{u as re}from"./useProvidedRefOrCreate-D_Nry6WU.js";import{u as oe}from"./useDisableInputWheel-BBS1OG28.js";import{u as ie,D as le}from"./DContext-DOX3qxCU.js";import{I as x,a as se}from"./constants-CyI_OqvZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CHSBDdIb.js";import"./DIcon-DXPiC-z7.js";import"./useMediaBreakpointUp-BwNKVy9w.js";import"./index-BTHOX6mp.js";import"./index-CLtHUTcp.js";function g({minValue:a,maxValue:r,value:f=a,invalid:j,iconStart:S,iconEnd:I,iconStartAriaLabel:z="decrease action",iconEndAriaLabel:H="increase action",style:v,onChange:i,...G},L){const{handleOnWheel:W}=oe(L),X=re(L),[J,K]=n.useState(!1),[t,l]=n.useState(f);n.useEffect(()=>{l(f)},[f]),n.useEffect(()=>{i==null||i(Number(t))},[i,t]);const Q=n.useCallback(o=>{l(Number(o||"0"))},[]),U=n.useCallback(()=>{l(o=>Math.max(o-1,a))},[a]),Y=n.useCallback(()=>{l(o=>Math.min(o+1,r))},[r]),Z=n.useMemo(()=>({...v,[`--${e}form-control-component-text-align`]:"center"}),[v]),ee=n.useMemo(()=>t.toString(),[t]);n.useEffect(()=>{K(!(t>=a&&t<=r))},[t,a,r]);const{iconMap:{input:s}}=ie(),ne=n.useMemo(()=>I||s.increase,[I,s.increase]),ae=n.useMemo(()=>S||s.decrease,[S,s.decrease]);return y.jsx(te,{ref:X,value:ee,style:Z,iconStart:ae,iconEnd:ne,invalid:J||j,type:"number",onChange:Q,onWheel:W,onIconStartClick:U,onIconEndClick:Y,iconStartAriaLabel:z,iconEndAriaLabel:H,...t===a&&{iconStartDisabled:!0},...t===r&&{iconEndDisabled:!0},...G})}const V=n.forwardRef(g);V.displayName="DInputCounter";try{g.displayName="DInputCounter",g.__docgenInfo={description:"",displayName:"DInputCounter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!0,type:{name:"number"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: number | undefined) => void) | undefined"}}}}}catch{}const xe={title:"Design System/Components/Input Counter",component:V,parameters:{docs:{description:{component:`
Component composition with \`d-input\` to make a counter input component.

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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},label:{control:"text",type:"string",table:{category:"Content"}},value:{control:"number",type:"number",description:"The value of the input",table:{category:"Content"}},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"],table:{category:"Appearance"}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...x],table:{category:"Icon"}},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...x],table:{category:"Icon"}},iconStartAriaLabel:{control:"text",type:"string",table:{category:"Content"}},iconEndAriaLabel:{control:"text",type:"string",table:{category:"Content"}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback",table:{category:"Content"}},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Appearance"}},minValue:{control:"number",type:"number",table:{category:"Behavior"}},maxValue:{control:"number",type:"number",table:{category:"Behavior"}},onChange:{action:"onChange",table:{category:"Events"}}},tags:["autodocs"]},d={args:{label:"Label",minValue:0,maxValue:20,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},u={args:{id:"componentId2",label:"Label",value:21,minValue:0,maxValue:20,invalid:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},c={args:{id:"componentId3",label:"Label",value:2,minValue:0,maxValue:20,valid:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},p={args:{id:"componentId4",label:"Label",value:3,minValue:0,maxValue:20,disabled:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},m={args:{id:"componentId5",label:"Label",value:3,minValue:0,maxValue:20,floatingLabel:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},b={render:a=>y.jsx(le,{...se,children:y.jsx(V,{...a})}),args:{id:"componentId6",label:"Label",value:3,minValue:0,maxValue:20,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var h,E,C;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    minValue: 0,
    maxValue: 20,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var A,q,D;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    value: 21,
    minValue: 0,
    maxValue: 20,
    invalid: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...(D=(q=u.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var F,M,T;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    value: 2,
    minValue: 0,
    maxValue: 20,
    valid: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...(T=(M=c.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var $,_,w;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    value: 3,
    minValue: 0,
    maxValue: 20,
    disabled: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...(w=(_=p.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var N,k,O;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    value: 3,
    minValue: 0,
    maxValue: 20,
    floatingLabel: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...(O=(k=m.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var P,R,B;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInputCounter>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DInputCounter {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId6',
    label: 'Label',
    value: 3,
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
}`,...(B=(R=b.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const he=["Default","Invalid","Valid","Disabled","Floating","MaterialIcon"];export{d as Default,p as Disabled,m as Floating,u as Invalid,b as MaterialIcon,c as Valid,he as __namedExportsOrder,xe as default};
