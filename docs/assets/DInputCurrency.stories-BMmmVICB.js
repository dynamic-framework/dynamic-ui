import{j as a}from"./jsx-runtime-DQ32znRX.js";import{r as X}from"./index-DH5ua8nC.js";import{F as J}from"./DInput-CpmK98WL.js";import{u as K}from"./useInputCurrency-Be8jcWt_.js";import{u as Q}from"./useDisableInputWheel-G7ueopig.js";import{u as U,D as r}from"./DContext-9gKMeQXa.js";import{I as c}from"./constants-DhWTmuJQ.js";import{P as e}from"./config-CUZHf55T.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-mLFX9G4A.js";import"./DIcon-CDY5yPx9.js";import"./useProvidedRefOrCreate-DxC68qIt.js";import"./currency.es-9OAR_aOO.js";import"./index-D9uilScg.js";function p({value:n,minValue:Y,maxValue:Z,currencyCode:w,onFocus:T,onBlur:_,onChange:A,...M},m){const{currency:f}=U(),{handleOnWheel:N}=Q(m),{inputRef:O,innerValue:k,innerType:z,handleOnFocus:R,handleOnChange:B,handleOnBlur:W,generateStyleVariables:H,generateSymbolStyleVariables:G}=K(f,n,T,A,_,m);return a.jsx(J,{ref:O,value:k,onChange:B,style:H,inputMode:"decimal",type:z,onFocus:R,onBlur:W,onWheel:N,inputStart:a.jsx("span",{slot:"input-start",style:G,children:w||f.symbol}),...M})}const l=X.forwardRef(p);l.displayName="DInputCurrency";try{p.displayName="DInputCurrency",p.__docgenInfo={description:"",displayName:"DInputCurrency",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},labelIcon:{defaultValue:null,description:"",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},labelIconMaterialStyle:{defaultValue:null,description:"",name:"labelIconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!1,type:{name:"number | undefined"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"number | undefined"}},currencyCode:{defaultValue:null,description:"",name:"currencyCode",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: number | undefined) => void) | undefined"}}}}}catch{}const fe={title:"Design System/Components/Input Currency",component:l,parameters:{docs:{description:{component:`
Component composition with \`d-input-currency-base\` to make a currency input component that use
a \`DContextProvider\` to get the currency config.

## CSS Variables

The Bootstrap documentation provides details on the default [Input Form CSS Variables](https://getbootstrap.com/docs/5.3/forms/form-control/#css)
and so it does [Input Group CSS Variables](https://getbootstrap.com/docs/5.3/forms/input-group/#css)

| Variable                                  | Class         | Type            | Description                  |
|-------------------------------------------|---------------|-----------------|------------------------------|
| --${e}label-color                 | :root         | css color unit  | Label color                  |
| --${e}label-font-weight           | :root         | css font weight | Label font weight            |
| --${e}label-font-size             | :root         | css length unit | Label font size              |
| --${e}label-padding-x             | :root         | css length unit | Label horizontal padding     |
| --${e}label-padding-y             | :root         | css length unit | Label vertical padding       |
| --${e}input-border-color          | .input-group  | css color unit  | Input border color           |
| --${e}input-border-width          | .input-group  | css length unit | Input border width           |
| --${e}input-border-radius         | .input-group  | css length unit | Input border radius          |
| --${e}input-focus-border-color    | .input-group  | css color unit  | Input focus border color     |
| --${e}input-focus-box-shadow      | .input-group  | css shadow      | Input focus box shadow       |
| --${e}input-disabled-bg           | .input-group  | css color unit  | Input disable background     |
| --${e}input-disabled-color        | .input-group  | css color unit  | Input disable color          |
| --${e}input-disabled-border-color | .input-group  | css color unit  | Input disable border color   |
| --${e}form-text-padding           | .form-text    | css length unit | Hint padding                 |
| --${e}form-text-gap               | .form-text    | css length unit | Space between hint elements  |
| --${e}form-text-color             | .form-text    | css color unit  | Hint color                   |
| --${e}form-control-text-align     | .form-control | css text align  | Input text align             |
| --${e}input-currency-symbol-color | .input-group  | css color unit  | Color of the currency symbol |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string"},style:{control:"object"},label:{control:"text",type:"string"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...c]},placeholder:{control:"text",type:"string"},value:{control:"number",type:"number",description:"The value of the input"},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"]},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...c]},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...c]},iconStartAriaLabel:{control:"text",type:"string"},iconEndAriaLabel:{control:"text",type:"string"},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},currencyCode:{control:"text",type:"string"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},minValue:{control:"number",type:"number"},maxValue:{control:"number",type:"number"},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},onChange:{action:"onChange"}},tags:["autodocs"]},t={render:n=>a.jsx(r,{children:a.jsx(l,{...n})}),args:{id:"componentId1",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5}},o={render:n=>a.jsx(r,{children:a.jsx(l,{...n})}),args:{id:"componentId3",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,invalid:!0}},i={render:n=>a.jsx(r,{children:a.jsx(l,{...n})}),args:{id:"componentId4",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,valid:!0}},d={render:n=>a.jsx(r,{children:a.jsx(l,{...n})}),args:{id:"componentId5",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,disabled:!0}},u={render:n=>a.jsx(r,{children:a.jsx(l,{...n})}),args:{id:"componentId6",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyCode:"CLP"}},s={render:n=>a.jsx(r,{children:a.jsx(l,{...n})}),args:{id:"componentId6",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,floatingLabel:!0}};var b,y,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInputCurrency>) => <DContextProvider>
      <DInputCurrency {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000
  }
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var V,x,h;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInputCurrency>) => <DContextProvider>
      <DInputCurrency {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    invalid: true
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var I,C,v;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInputCurrency>) => <DContextProvider>
      <DInputCurrency {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    valid: true
  }
}`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var S,D,P;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInputCurrency>) => <DContextProvider>
      <DInputCurrency {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    disabled: true
  }
}`,...(P=(D=d.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var q,L,F;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInputCurrency>) => <DContextProvider>
      <DInputCurrency {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyCode: 'CLP'
  }
}`,...(F=(L=u.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var E,$,j;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DInputCurrency>) => <DContextProvider>
      <DInputCurrency {...args} />
    </DContextProvider>,
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    floatingLabel: true
  }
}`,...(j=($=s.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const be=["Default","Invalid","Valid","Disabled","WithCurrencyCode","Floating"];export{t as Default,d as Disabled,s as Floating,o as Invalid,i as Valid,u as WithCurrencyCode,be as __namedExportsOrder,fe as default};
