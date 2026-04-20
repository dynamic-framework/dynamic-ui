import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./iframe-n9SpF7Fs.js";import{c as P}from"./index-BqTa4fxN.js";import{u as k}from"./useProvidedRefOrCreate-BMHGHGgH.js";import{P as O}from"./config-C3iYXcFk.js";import"./preload-helper-Dp1pzeXC.js";function d({id:c,label:p,ariaLabel:m,className:b,style:g,value:t="0",min:a="0",max:n="100",filledValue:f=!0,onChange:h,...y},E){const v=k(E),x=e.useId(),u=e.useMemo(()=>c||x,[c,x]),I=e.useMemo(()=>({"form-range":!0,"form-range-value-indicator":f}),[f]),L=e.useMemo(()=>{const S=parseFloat(a.toString()),W=parseFloat(n.toString()),H=(parseFloat(t.toString())-S)/(W-S)*100;return{...g,[`--${O}form-range-component-value`]:`${H}%`}},[a,n,t,g]),T=e.useMemo(()=>r.jsx("input",{id:u,ref:v,className:P(I,b),"aria-label":m,type:"range",value:t,min:a,max:n,style:L,onChange:h,...y}),[m,b,I,L,u,v,n,a,h,y,t]);return p?r.jsxs(r.Fragment,{children:[r.jsx("label",{className:"form-label",htmlFor:u,children:p}),T]}):T}const B=e.forwardRef(d);B.displayName="DInputRange";try{d.displayName="DInputRange",d.__docgenInfo={description:"",displayName:"DInputRange",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string | undefined"}},filledValue:{defaultValue:null,description:"",name:"filledValue",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Q={title:"Design System/Components/Input Range",component:B,parameters:{docs:{description:{component:`
Use our custom range inputs for consistent cross-browser styling and built-in customization.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Range](https://getbootstrap.com/docs/5.3/forms/range/#overview)
        `}}},argTypes:{id:{control:"text",type:"string",description:"The id of the input",table:{category:"HTML Attributes"}},name:{control:"text",type:"string",description:"The name of the input",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",description:"The CSS class name of the input",table:{category:"Appearance"}},style:{control:"object",description:"Inline style object for the input",table:{category:"Appearance"}},value:{control:"number",type:"number",description:"The value of the input",table:{category:"Content"}},label:{control:"text",type:"string",description:"The label for the input",table:{category:"Content"}},ariaLabel:{control:"text",type:"string",description:"The ARIA label for the input",table:{category:"HTML Attributes"}},min:{control:"number",type:"number",description:"The minimum value for the input",table:{category:"Behavior"}},max:{control:"number",type:"number",description:"The maximum value for the input",table:{category:"Behavior"}},step:{control:"number",type:"number",description:"The step value for the input",table:{category:"Behavior"}},filledValue:{control:"boolean",type:"boolean",description:"To determine if the color of the track behind the thumb is changed",table:{category:"Appearance"}},disabled:{control:"boolean",type:"boolean",description:"Whether the input is disabled or not",table:{category:"Behavior"}},onChange:{action:"onChange",description:"Callback function triggered when the input value changes",table:{category:"Events"}}},tags:["autodocs"]},o={args:{min:1,max:100,value:40,ariaLabel:"Label"}},s={args:{id:"componentId2",label:"Label",min:1,max:100,value:50}},i={args:{id:"componentId2",label:"Label",min:1,max:100,value:50,filledValue:!1}},l={args:{id:"componentId2",label:"Label",min:1,max:100,value:80,disabled:!0}};var R,V,N;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 100,
    value: 40,
    ariaLabel: 'Label'
  }
}`,...(N=(V=o.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var A,D,_;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 50
  }
}`,...(_=(D=s.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var C,F,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 50,
    filledValue: false
  }
}`,...(j=(F=i.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var w,M,q;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 80,
    disabled: true
  }
}`,...(q=(M=l.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const Y=["WithoutLabel","Default","WithoutFilledValue","Disabled"];export{s as Default,l as Disabled,i as WithoutFilledValue,o as WithoutLabel,Y as __namedExportsOrder,Q as default};
