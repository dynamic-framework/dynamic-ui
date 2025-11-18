import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-BFka7-OR.js";import{F as Y}from"./DInput-D70CKerB.js";import{c as Z}from"./currency.es-9OAR_aOO.js";import{u as ee}from"./useProvidedRefOrCreate-Bl2zf0mb.js";import{P as e}from"./config-C3iYXcFk.js";import{u as ne}from"./useDisableInputWheel-Dd0lsm2a.js";import{u as ae,D as te}from"./DContext-CrLkQ0CG.js";import{I as w}from"./constants-BoPmzNgw.js";import"./index-DKnPkZ2e.js";import"./DIcon-BA0SlVgK.js";import"./index-DOXnluHf.js";import"./index-DH7ER9q2.js";function D(a,n){return a===void 0?"":Z(a,{...n,symbol:""}).format()}function le(a,n,u,i,r,v){const I=ee(v),[d,s]=t.useState("text"),[l,c]=t.useState(n),[p,m]=t.useState(D(n,a)),C=t.useCallback(o=>{o.stopPropagation(),s("number"),u==null||u(o)},[u]),q=t.useCallback(o=>{o.stopPropagation(),s("text"),r==null||r(o)},[r]),L=t.useMemo(()=>({[`--${e}input-currency-component-symbol-color`]:`var(--${e}secondary)`,[`--${e}input-currency-symbol-color`]:`var(--${e}input-currency-component-symbol-color)`}),[]),P=t.useMemo(()=>({color:`var(--${e}input-currency-symbol-color)`}),[]),E=t.useCallback(o=>{const f=o===void 0||o===""?void 0:Number(o);f!==l&&(c(f),m(D(f,a)),i==null||i(f))},[a,i,l]);t.useEffect(()=>{n!==l&&(c(n),m(D(n,a)))},[n,a,l]);const $=t.useMemo(()=>d==="number"?(l==null?void 0:l.toString())??"":p??"",[d,l,p]);return{inputRef:I,innerValue:$,innerType:d,handleOnFocus:C,handleOnChange:E,handleOnBlur:q,generateStyleVariables:L,generateSymbolStyleVariables:P}}function F({value:a,minValue:n,maxValue:u,currencyCode:i,onFocus:r,onBlur:v,onChange:I,...d},s){const{currency:l}=ae(),{handleOnWheel:c}=ne(s),{inputRef:p,innerValue:m,innerType:C,handleOnFocus:q,handleOnChange:L,handleOnBlur:P,generateStyleVariables:E,generateSymbolStyleVariables:$}=le(l,a,r,I,v,s);return S.jsx(Y,{ref:p,value:m,onChange:L,style:E,inputMode:"decimal",type:C,onFocus:q,onBlur:P,onWheel:c,inputStart:S.jsx("span",{slot:"input-start",style:$,children:i||l.symbol}),...d})}const T=t.forwardRef(F);T.displayName="DInputCurrency";try{F.displayName="DInputCurrency",F.__docgenInfo={description:"",displayName:"DInputCurrency",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | undefined"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!1,type:{name:"number | undefined"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"number | undefined"}},currencyCode:{defaultValue:null,description:"",name:"currencyCode",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: number | undefined) => void) | undefined"}}}}}catch{}const Ve={title:"Design System/Components/Input Currency",component:T,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string"},style:{control:"object"},label:{control:"text",type:"string"},placeholder:{control:"text",type:"string"},value:{control:"number",type:"number",description:"The value of the input"},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,"sm","lg"]},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...w]},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...w]},iconStartAriaLabel:{control:"text",type:"string"},iconEndAriaLabel:{control:"text",type:"string"},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},currencyCode:{control:"text",type:"string"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},minValue:{control:"number",type:"number"},maxValue:{control:"number",type:"number"},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},onChange:{action:"onChange"}},tags:["autodocs"],render:function(n){const[u,i]=t.useState(n.value);return S.jsx(te,{children:S.jsx(T,{...n,value:u,onChange:r=>{i(r),n.onChange&&n.onChange(r)}})})}},b={args:{id:"componentId1",label:"Label",placeholder:"Placeholder",value:void 0,minValue:0,maxValue:1e5}},y={args:{id:"componentId3",label:"Label",placeholder:"Placeholder",value:void 0,minValue:0,maxValue:1e5,invalid:!0}},g={args:{id:"componentId4",label:"Label",placeholder:"Placeholder",value:void 0,minValue:0,maxValue:1e5,valid:!0}},V={args:{id:"componentId5",label:"Label",placeholder:"Placeholder",value:void 0,minValue:0,maxValue:1e5,disabled:!0}},h={args:{id:"componentId6",label:"Label",placeholder:"Placeholder",value:void 0,minValue:0,maxValue:1e5,currencyCode:"CLP"}},x={args:{id:"componentId6",label:"Label",placeholder:"Placeholder",value:void 0,minValue:0,maxValue:1e5,floatingLabel:!0}};var N,_,k;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000
  }
}`,...(k=(_=b.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var M,A,R;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    invalid: true
  }
}`,...(R=(A=y.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var O,j,z;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    valid: true
  }
}`,...(z=(j=g.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var W,H,G;V.parameters={...V.parameters,docs:{...(W=V.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    disabled: true
  }
}`,...(G=(H=V.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var X,B,J;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyCode: 'CLP'
  }
}`,...(J=(B=h.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    floatingLabel: true
  }
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const he=["Default","Invalid","Valid","Disabled","WithCurrencyCode","Floating"];export{b as Default,V as Disabled,x as Floating,y as Invalid,g as Valid,h as WithCurrencyCode,he as __namedExportsOrder,Ve as default};
