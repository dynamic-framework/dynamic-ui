import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./iframe-XnRhdyHW.js";import{c as B}from"./index-D0sKC-UO.js";import{u as O}from"./useProvidedRefOrCreate-DwhWJTgz.js";import{P as $}from"./config-BV4l-vIF.js";function c({id:u,label:m,ariaLabel:p,className:f,style:b,value:n="0",min:t="0",max:a="100",filledValue:g=!0,onChange:h,...y},W){const I=O(W),x=e.useId(),d=e.useMemo(()=>u||x,[u,x]),v=e.useMemo(()=>({"form-range":!0,"form-range-value-indicator":g}),[g]),V=e.useMemo(()=>{const L=parseFloat(t.toString()),E=parseFloat(a.toString()),k=(parseFloat(n.toString())-L)/(E-L)*100;return{...b,[`--${$}form-range-component-value`]:`${k}%`}},[t,a,n,b]),S=e.useMemo(()=>r.jsx("input",{id:d,ref:I,className:B(v,f),"aria-label":p,type:"range",value:n,min:t,max:a,style:V,onChange:h,...y}),[p,f,v,V,d,I,a,t,h,y,n]);return m?r.jsxs(r.Fragment,{children:[r.jsx("label",{className:"form-label",htmlFor:d,children:m}),S]}):S}const P=e.forwardRef(c);P.displayName="DInputRange";try{c.displayName="DInputRange",c.__docgenInfo={description:"",displayName:"DInputRange",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},labelIcon:{defaultValue:null,description:"",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},labelIconMaterialStyle:{defaultValue:null,description:"",name:"labelIconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string | undefined"}},filledValue:{defaultValue:null,description:"",name:"filledValue",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const K={title:"Design System/Components/Input Range",component:P,parameters:{docs:{description:{component:`
Use our custom range inputs for consistent cross-browser styling and built-in customization.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Range](https://getbootstrap.com/docs/5.3/forms/range/#overview)
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},className:{control:"text",type:"string",description:"The CSS class name of the input"},style:{control:"object",description:"Inline style object for the input"},value:{control:"number",type:"number",description:"The value of the input"},label:{control:"text",type:"string",description:"The label for the input"},ariaLabel:{control:"text",type:"string",description:"The ARIA label for the input"},min:{control:"number",type:"number",description:"The minimum value for the input"},max:{control:"number",type:"number",description:"The maximum value for the input"},step:{control:"number",type:"number",description:"The step value for the input"},filledValue:{control:"boolean",type:"boolean",description:"To determine if the color of the track behind the thumb is changed"},disabled:{control:"boolean",type:"boolean",description:"Whether the input is disabled or not"},onChange:{action:"onChange",description:"Callback function triggered when the input value changes"}},tags:["autodocs"]},o={args:{id:"componentId1",min:1,max:100,value:40,ariaLabel:"Label"}},l={args:{id:"componentId2",label:"Label",min:1,max:100,value:50}},i={args:{id:"componentId2",label:"Label",min:1,max:100,value:50,filledValue:!1}},s={args:{id:"componentId2",label:"Label",min:1,max:100,value:80,disabled:!0}};var F,R,N;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: 'componentId1',
    min: 1,
    max: 100,
    value: 40,
    ariaLabel: 'Label'
  }
}`,...(N=(R=o.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var T,D,_;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 50
  }
}`,...(_=(D=l.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var q,C,j;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 50,
    filledValue: false
  }
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var w,M,A;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 80,
    disabled: true
  }
}`,...(A=(M=s.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const Q=["WithoutLabel","Default","WithoutFilledValue","Disabled"];export{l as Default,s as Disabled,i as WithoutFilledValue,o as WithoutLabel,Q as __namedExportsOrder,K as default};
