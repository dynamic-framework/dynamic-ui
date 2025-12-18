import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./iframe-B2wa2xAh.js";import{c as B}from"./index-5PCv3b9w.js";import{u as O}from"./useProvidedRefOrCreate-DSQ48IIf.js";import{P as $}from"./config-C3iYXcFk.js";function d({id:u,label:m,ariaLabel:p,className:b,style:f,value:t="0",min:n="0",max:a="100",filledValue:g=!0,onChange:h,...y},M){const x=O(M),v=e.useId(),c=e.useMemo(()=>u||v,[u,v]),I=e.useMemo(()=>({"form-range":!0,"form-range-value-indicator":g}),[g]),L=e.useMemo(()=>{const R=parseFloat(n.toString()),P=parseFloat(a.toString()),k=(parseFloat(t.toString())-R)/(P-R)*100;return{...f,[`--${$}form-range-component-value`]:`${k}%`}},[n,a,t,f]),S=e.useMemo(()=>r.jsx("input",{id:c,ref:x,className:B(I,b),"aria-label":p,type:"range",value:t,min:n,max:a,style:L,onChange:h,...y}),[p,b,I,L,c,x,a,n,h,y,t]);return m?r.jsxs(r.Fragment,{children:[r.jsx("label",{className:"form-label",htmlFor:c,children:m}),S]}):S}const E=e.forwardRef(d);E.displayName="DInputRange";try{d.displayName="DInputRange",d.__docgenInfo={description:"",displayName:"DInputRange",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string | undefined"}},filledValue:{defaultValue:null,description:"",name:"filledValue",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const K={title:"Design System/Components/Input Range",component:E,parameters:{docs:{description:{component:`
Use our custom range inputs for consistent cross-browser styling and built-in customization.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Range](https://getbootstrap.com/docs/5.3/forms/range/#overview)
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string",description:"The CSS class name of the input"},style:{control:"object",description:"Inline style object for the input"},value:{control:"number",type:"number",description:"The value of the input"},label:{control:"text",type:"string",description:"The label for the input"},ariaLabel:{control:"text",type:"string",description:"The ARIA label for the input"},min:{control:"number",type:"number",description:"The minimum value for the input"},max:{control:"number",type:"number",description:"The maximum value for the input"},step:{control:"number",type:"number",description:"The step value for the input"},filledValue:{control:"boolean",type:"boolean",description:"To determine if the color of the track behind the thumb is changed"},disabled:{control:"boolean",type:"boolean",description:"Whether the input is disabled or not"},onChange:{action:"onChange",description:"Callback function triggered when the input value changes"}},tags:["autodocs"]},o={args:{min:1,max:100,value:40,ariaLabel:"Label"}},s={args:{id:"componentId2",label:"Label",min:1,max:100,value:50}},i={args:{id:"componentId2",label:"Label",min:1,max:100,value:50,filledValue:!1}},l={args:{id:"componentId2",label:"Label",min:1,max:100,value:80,disabled:!0}};var V,N,T;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 100,
    value: 40,
    ariaLabel: 'Label'
  }
}`,...(T=(N=o.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var D,_,F;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 50
  }
}`,...(F=(_=s.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var C,j,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 50,
    filledValue: false
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var q,A,W;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 80,
    disabled: true
  }
}`,...(W=(A=l.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const Q=["WithoutLabel","Default","WithoutFilledValue","Disabled"];export{s as Default,l as Disabled,i as WithoutFilledValue,o as WithoutLabel,Q as __namedExportsOrder,K as default};
