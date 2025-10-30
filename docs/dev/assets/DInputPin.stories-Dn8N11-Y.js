import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-XnRhdyHW.js";import{c as L}from"./index-D0sKC-UO.js";import{D as ue}from"./DIcon-BtjKyMWG.js";import{P as t}from"./config-BV4l-vIF.js";import{I as ce}from"./constants-Bqs03lsf.js";import"./DContext-Dm_WebLV.js";import"./index-CQ6hCEsd.js";import"./index-CucmxpGD.js";function I({id:v,label:V="",labelIcon:S,labelIconFamilyClass:K,labelIconFamilyPrefix:X,placeholder:Z,type:r="text",disabled:G=!1,loading:q=!1,secret:J=!1,characters:u=4,innerInputMode:Q="text",hint:w,invalid:U=!1,valid:Y=!1,className:ee,style:ae,dataAttributes:te,onChange:c}){const C=l.useId(),h=l.useMemo(()=>v||C,[v,C]),[D,ne]=l.useState(""),[x,p]=l.useState(Array.from({length:u}).fill("")),$=l.useMemo(()=>r==="number"||r==="tel",[r]);l.useEffect(()=>{ne(r==="number"?"[0-9]+":"^[a-zA-Z0-9]+$")},[r]);const A=l.useCallback(a=>{const e=a.join("");c==null||c(e)},[c]);l.useEffect(()=>{A(x)},[x,A]);const le=l.useCallback(a=>{a.preventDefault();const e=a.clipboardData.getData("text/plain"),n=$?e.replace(/[^0-9]/gmi,""):e,s=Array.from({length:u}).map((o,d)=>n[d]||"");p(s),a.currentTarget.blur()},[u,$]),se=l.useCallback((a,e)=>{var o;const n=new RegExp(D),s=a.currentTarget;n.test(s.value)||(s.value=""),s.value!==""&&(p(d=>d.with(e,s.value)),s.nextSibling?(o=s.nextSibling)==null||o.focus():s.blur())},[D]),ie=l.useCallback(({key:a,currentTarget:e},n)=>{var s;if(a==="Backspace"){const{value:o}=e;p(d=>d.with(n,"")),e.previousSibling&&o===""?(s=e.previousSibling)==null||s.focus():(e.blur(),e.focus())}},[]),re=l.useCallback(a=>{p(e=>e.with(a,""))},[]),oe=l.useCallback(a=>{a.currentTarget.blur()},[]);return i.jsxs("div",{className:L("d-input-pin",ee),style:ae,...te,children:[V&&i.jsxs("label",{htmlFor:"pinIndex0",children:[V,S&&i.jsx(ue,{icon:S,size:`var(--${t}input-label-font-size)`,familyClass:K,familyPrefix:X})]}),i.jsxs("div",{className:"d-input-pin-group",id:h,children:[Array.from({length:u}).map((a,e)=>i.jsx("input",{className:L({"form-control":!0,"is-invalid":U,"is-valid":Y}),value:x[e],type:J?"password":r,"aria-describedby":`${h}State`,inputMode:Q,id:`pinIndex${e}`,name:`pin-${e}`,maxLength:1,onInput:n=>se(n,e),onKeyDown:n=>ie(n,e),onFocus:()=>re(e),onWheel:oe,onClick:n=>n.preventDefault(),onPaste:n=>le(n),autoComplete:"off",placeholder:Z,disabled:G||q,required:!0,...r==="number"&&{min:0,max:9}},e)),q&&i.jsx("div",{className:"input-group-text",children:i.jsx("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true",children:i.jsx("span",{className:"visually-hidden",children:"Loading..."})})})]}),w&&i.jsx("div",{className:"form-text",id:`${h}Hint`,children:w})]})}try{I.displayName="DInputPin",I.__docgenInfo={description:"",displayName:"DInputPin",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},labelIcon:{defaultValue:null,description:"",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},labelIconMaterialStyle:{defaultValue:null,description:"",name:"labelIconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"text"'},{value:'"tel"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},secret:{defaultValue:{value:"false"},description:"",name:"secret",required:!1,type:{name:"boolean | undefined"}},characters:{defaultValue:{value:"4"},description:"",name:"characters",required:!1,type:{name:"number | undefined"}},innerInputMode:{defaultValue:{value:"text"},description:"",name:"innerInputMode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"text"'},{value:'"tel"'},{value:'"numeric"'}]}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:{value:"false"},description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}}}}}catch{}const Ie={title:"Design System/Components/Input Pin",component:I,parameters:{docs:{description:{component:`
Component with a partial API of \`d-input\` to take a pin/otp code.

## CSS Variables

The Bootstrap documentation provides details on the default [Input Form CSS Variables](https://getbootstrap.com/docs/5.3/forms/form-control/#css)

| Variable                                                | Class         | Type            | Description                 |
|---------------------------------------------------------|---------------|-----------------|-----------------------------|
| --${t}label-color                               | :root         | css color unit  | Label color                 |
| --${t}label-font-weight                         | :root         | css font weight | Label font weight           |
| --${t}label-font-size                           | :root         | css length unit | Label font size             |
| --${t}label-padding-x                           | :root         | css length unit | Label horizontal padding    |
| --${t}label-padding-y                           | :root         | css length unit | Label vertical padding      |
| --${t}input-pin-form-gap                        | .d-input-pin  | css length unit | Space between inputs        |
| --${t}input-pin-form-control-size               | .d-input-pin  | css length unit | Input width                 |
| --${t}input-pin-form-control-focus-border-color | .d-input-pin  | css color unit  | Input focus border color    |
| --${t}input-pin-form-control-focus-box-shadow   | .d-input-pin  | css box shadow  | Input focus box shadow      |
| --${t}form-text-padding                         | .form-text    | css length unit | Hint padding                |
| --${t}form-text-gap                             | .form-text    | css length unit | Space between hint elements |
| --${t}form-text-color                           | .form-text    | css color unit  | Hint color                  |
| --${t}form-control-text-align                   | .form-control | css text align  | Input text align            |
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},className:{control:"text",type:"string"},style:{control:"object"},label:{control:"text",type:"string"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...ce]},placeholder:{control:"text",type:"string"},type:{control:"select",options:["number","text","tel"],type:"string",description:"Type of the inputs"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},secret:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Hide the characters"},characters:{control:"number",type:"number",description:"Number of characters of the pin"},innerInputMode:{control:"select",options:["number","text","tel"],type:"string",description:"Keyboard style"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},onChange:{action:"onChange"}},tags:["autodocs"]},f={args:{id:"componentId1",label:"Label",characters:4,type:"text",hint:"Assistive text",disabled:!1,loading:!1,secret:!1,invalid:!1,valid:!1}},m={args:{id:"componentId2",characters:4,type:"text",disabled:!1,loading:!1,secret:!1,invalid:!1,valid:!1}},b={args:{id:"componentId3",label:"Label",characters:4,type:"text",hint:"Assistive text",disabled:!1,loading:!1,secret:!1,invalid:!0,valid:!1}},y={args:{id:"componentId4",label:"Label",characters:4,type:"text",hint:"Assistive text",disabled:!1,loading:!1,secret:!1,invalid:!1,valid:!0}},g={args:{id:"componentId5",label:"Label",characters:4,type:"text",hint:"Assistive text",disabled:!0,loading:!1,secret:!1,invalid:!1,valid:!1}};var N,P,j;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    disabled: false,
    loading: false,
    secret: false,
    invalid: false,
    valid: false
  }
}`,...(j=(P=f.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var _,F,k;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    characters: 4,
    type: 'text',
    disabled: false,
    loading: false,
    secret: false,
    invalid: false,
    valid: false
  }
}`,...(k=(F=m.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var M,z,E;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: 'componentId3',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    disabled: false,
    loading: false,
    secret: false,
    invalid: true,
    valid: false
  }
}`,...(E=(z=b.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var O,H,T;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'componentId4',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    disabled: false,
    loading: false,
    secret: false,
    invalid: false,
    valid: true
  }
}`,...(T=(H=y.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var B,R,W;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: 'componentId5',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    disabled: true,
    loading: false,
    secret: false,
    invalid: false,
    valid: false
  }
}`,...(W=(R=g.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const Ve=["Default","WithoutLabel","Invalid","Valid","Disabled"];export{f as Default,g as Disabled,b as Invalid,y as Valid,m as WithoutLabel,Ve as __namedExportsOrder,Ie as default};
