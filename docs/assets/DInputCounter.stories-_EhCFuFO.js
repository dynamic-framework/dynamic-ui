import{j as g}from"./jsx-runtime-DQ32znRX.js";import{r as n}from"./index-DH5ua8nC.js";import{F as te}from"./DInput-CpmK98WL.js";import{P as e}from"./config-CUZHf55T.js";import{u as le}from"./useProvidedRefOrCreate-DxC68qIt.js";import{u as ie}from"./useDisableInputWheel-G7ueopig.js";import{u as oe,D as re}from"./DContext-9gKMeQXa.js";import{I as y,a as de}from"./constants-DhWTmuJQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-mLFX9G4A.js";import"./DIcon-CDY5yPx9.js";import"./index-D9uilScg.js";function I({minValue:a,maxValue:l,value:b=a,invalid:z,iconStart:S,iconEnd:v,iconStartAriaLabel:G="decrease action",iconEndAriaLabel:H="increase action",style:x,onChange:o,...W},L){const{handleOnWheel:X}=ie(L),B=le(L),[J,K]=n.useState(!1),[t,r]=n.useState(b);n.useEffect(()=>{r(b)},[b]),n.useEffect(()=>{o==null||o(Number(t))},[o,t]);const Q=n.useCallback(i=>{r(Number(i||"0"))},[]),U=n.useCallback(()=>{r(i=>Math.max(i-1,a))},[a]),Y=n.useCallback(()=>{r(i=>Math.min(i+1,l))},[l]),Z=n.useMemo(()=>({...x,[`--${e}form-control-component-text-align`]:"center"}),[x]),ee=n.useMemo(()=>t.toString(),[t]);n.useEffect(()=>{K(!(t>=a&&t<=l))},[t,a,l]);const{iconMap:{input:d}}=oe(),ne=n.useMemo(()=>v||d.increase,[v,d.increase]),ae=n.useMemo(()=>S||d.decrease,[S,d.decrease]);return g.jsx(te,{ref:B,value:ee,style:Z,iconStart:ae,iconEnd:ne,invalid:J||z,type:"number",onChange:Q,onWheel:X,onIconStartClick:U,onIconEndClick:Y,iconStartAriaLabel:G,iconEndAriaLabel:H,...t===a&&{iconStartDisabled:!0},...t===l&&{iconEndDisabled:!0},...W})}const V=n.forwardRef(I);V.displayName="DInputCounter";try{I.displayName="DInputCounter",I.__docgenInfo={description:"",displayName:"DInputCounter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},labelIcon:{defaultValue:null,description:"",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},labelIconMaterialStyle:{defaultValue:null,description:"",name:"labelIconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!0,type:{name:"number"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: number | undefined) => void) | undefined"}}}}}catch{}const ve={title:"Design System/Components/Input Counter",component:V,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string"},style:{control:"object"},label:{control:"text",type:"string"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...y]},value:{control:"number",type:"number",description:"The value of the input"},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"]},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...y]},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...y]},iconStartAriaLabel:{control:"text",type:"string"},iconEndAriaLabel:{control:"text",type:"string"},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},minValue:{control:"number",type:"number"},maxValue:{control:"number",type:"number"},onChange:{action:"onChange"}},tags:["autodocs"]},s={args:{id:"componentId1",label:"Label",labelIcon:void 0,minValue:0,maxValue:20,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},u={args:{id:"componentId2",label:"Label",labelIcon:void 0,value:21,minValue:0,maxValue:20,invalid:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},c={args:{id:"componentId3",label:"Label",labelIcon:void 0,value:2,minValue:0,maxValue:20,valid:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},p={args:{id:"componentId4",label:"Label",labelIcon:void 0,value:3,minValue:0,maxValue:20,disabled:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},m={args:{id:"componentId5",label:"Label",labelIcon:void 0,value:3,minValue:0,maxValue:20,floatingLabel:!0,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"}},f={render:a=>g.jsx(re,{...de,children:g.jsx(V,{...a})}),args:{id:"componentId6",label:"Label",labelIcon:void 0,value:3,minValue:0,maxValue:20,iconStartAriaLabel:"decrease action",iconEndAriaLabel:"increase action"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var E,C,h;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    label: 'Label',
    labelIcon: undefined,
    minValue: 0,
    maxValue: 20,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var q,A,D;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    labelIcon: undefined,
    value: 21,
    minValue: 0,
    maxValue: 20,
    invalid: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var F,M,$;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    labelIcon: undefined,
    value: 2,
    minValue: 0,
    maxValue: 20,
    valid: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...($=(M=c.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var _,P,T;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    labelIcon: undefined,
    value: 3,
    minValue: 0,
    maxValue: 20,
    disabled: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var w,N,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    labelIcon: undefined,
    value: 3,
    minValue: 0,
    maxValue: 20,
    floatingLabel: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action'
  }
}`,...(k=(N=m.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var O,R,j;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInputCounter>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DInputCounter {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId6',
    label: 'Label',
    labelIcon: undefined,
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
}`,...(j=(R=f.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const xe=["Default","Invalid","Valid","Disabled","Floating","MaterialIcon"];export{s as Default,p as Disabled,m as Floating,u as Invalid,f as MaterialIcon,c as Valid,xe as __namedExportsOrder,ve as default};
