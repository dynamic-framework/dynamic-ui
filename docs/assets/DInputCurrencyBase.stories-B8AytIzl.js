import{j as c}from"./jsx-runtime-DQ32znRX.js";import{r as H}from"./index-DH5ua8nC.js";import{F as G}from"./DInput-CpmK98WL.js";import{u as J}from"./useInputCurrency-Be8jcWt_.js";import{u as K}from"./useDisableInputWheel-G7ueopig.js";import{I as t}from"./constants-DhWTmuJQ.js";function o({value:d,minValue:X,maxValue:Y,currencyOptions:u,currencyCode:D,onFocus:_,onBlur:$,onChange:M,...T},s){const{handleOnWheel:A}=K(s),{inputRef:B,innerValue:N,innerType:j,handleOnFocus:k,handleOnChange:R,handleOnBlur:W,generateStyleVariables:z,generateSymbolStyleVariables:w}=J(u,d,_,M,$,s);return c.jsx(G,{ref:B,value:N,onChange:R,style:z,inputMode:"decimal",type:j,onFocus:k,onBlur:W,onWheel:A,inputStart:c.jsx("span",{slot:"input-start",style:w,children:D||u.symbol}),...T})}const O=H.forwardRef(o);O.displayName="DInputCurrencyBase";try{o.displayName="DInputCurrencyBase",o.__docgenInfo={description:"",displayName:"DInputCurrencyBase",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},labelIcon:{defaultValue:null,description:"",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},labelIconMaterialStyle:{defaultValue:null,description:"",name:"labelIconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!1,type:{name:"number | undefined"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"number | undefined"}},currencyOptions:{defaultValue:null,description:"",name:"currencyOptions",required:!0,type:{name:"Options"}},currencyCode:{defaultValue:null,description:"",name:"currencyCode",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: number | undefined) => void) | undefined"}}}}}catch{}const Q={title:"Design System/Components/Input Currency Base",component:O,argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},label:{control:"text",type:"string"},className:{control:"text",type:"string"},style:{control:"object"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...t]},placeholder:{control:"text",type:"string"},value:{control:"number",type:"number",description:"The value of the input"},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"]},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...t]},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...t]},iconStartAriaLabel:{control:"text",type:"string"},iconEndAriaLabel:{control:"text",type:"string"},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},currencyCode:{control:"text",type:"string"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},minValue:{control:"number",type:"number"},maxValue:{control:"number",type:"number"},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},onChange:{action:"onChange"}}},e={args:{id:"componentId1",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyOptions:{symbol:"$",precision:2,separator:",",decimal:"."}}},n={args:{id:"componentId3",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyOptions:{symbol:"$",precision:2,separator:",",decimal:"."},invalid:!0}},a={args:{id:"componentId4",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyOptions:{symbol:"$",precision:2,separator:",",decimal:"."},valid:!0}},l={args:{id:"componentId5",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyOptions:{symbol:"$",precision:2,separator:",",decimal:"."},disabled:!0}},r={args:{id:"componentId6",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyCode:"CLP",currencyOptions:{symbol:"$",precision:2,separator:",",decimal:"."}}},i={args:{id:"componentId7",label:"Label",placeholder:"Placeholder",labelIcon:void 0,value:void 0,minValue:0,maxValue:1e5,currencyOptions:{symbol:"$",precision:2,separator:",",decimal:"."},floatingLabel:!0}};var p,m,f;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyOptions: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.'
    }
  }
}`,...(f=(m=e.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var y,b,V;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyOptions: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.'
    },
    invalid: true
  }
}`,...(V=(b=n.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var g,v,I;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyOptions: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.'
    },
    valid: true
  }
}`,...(I=(v=a.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var h,S,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyOptions: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.'
    },
    disabled: true
  }
}`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var q,C,L;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyCode: 'CLP',
    currencyOptions: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.'
    }
  }
}`,...(L=(C=r.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var P,E,F;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyOptions: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.'
    },
    floatingLabel: true
  }
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const U=["Default","Invalid","Valid","Disabled","WithCurrencyCode","Floating"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:l,Floating:i,Invalid:n,Valid:a,WithCurrencyCode:r,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{ie as D,e as a};
