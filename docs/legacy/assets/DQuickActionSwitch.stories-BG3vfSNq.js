import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as o}from"./index-Bv9Y92EF.js";import{c as A}from"./index-PkosZWDx.js";import{D as C}from"./DInputSwitch-CiQbdxRx.js";function c({id:t,name:S,label:D,hint:N,checked:d,disabled:v,className:_,style:q,dataAttributes:I,onClick:r}){const l=o.useId(),T=o.useMemo(()=>t||l,[t,l]),P=o.useCallback(V=>{V.stopPropagation(),r==null||r(d)},[d,r]);return e.jsxs("button",{className:A("d-quick-action-switch",_),type:"button",onClick:P,style:q,...I,children:[e.jsx("div",{className:"d-quick-action-switch-content",children:e.jsx(C,{id:T,name:S,disabled:v,checked:d,readonly:!0,label:D})}),e.jsx("div",{className:"d-quick-action-switch-hint",children:N})]})}try{c.displayName="DQuickActionSwitch",c.__docgenInfo={description:"",displayName:"DQuickActionSwitch",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((isChecked: boolean | undefined) => void) | undefined"}}}}}catch{}const Q={title:"Design System/Components/Quick Action Switch",component:c,argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"The name of the input"},label:{control:"text",type:"string"},className:{control:"text",type:"string"},style:{control:"object"},hint:{control:"text",type:"string"},checked:{control:"boolean",type:"boolean"},disabled:{control:"boolean",type:"boolean"},onClick:{action:"onClick"}}},i={decorators:[t=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(t,{})})],args:{id:"componentId1",label:"Program",hint:"This payment is applied with the periodicity and date that you define",checked:!1}},a={decorators:[t=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(t,{})})],args:{id:"componentId2",label:"Program",hint:"This payment is applied with the periodicity and date that you define",checked:!0}},n={decorators:[t=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(t,{})})],args:{id:"componentId3",label:"Program",hint:"This payment is applied with the periodicity and date that you define",checked:!1,disabled:!0}},s={decorators:[t=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(t,{})})],args:{id:"componentId4",label:"Program",hint:"This payment is applied with the periodicity and date that you define",checked:!0,disabled:!0}};var p,u,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  args: {
    id: 'componentId1',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    checked: false
  }
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,f,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  args: {
    id: 'componentId2',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    checked: true
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,x,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  args: {
    id: 'componentId3',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    checked: false,
    disabled: true
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,w,k;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  args: {
    id: 'componentId4',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    checked: true,
    disabled: true
  }
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const E=["Default","Checked","DefaultDisabled","CheckedDisabled"],R=Object.freeze(Object.defineProperty({__proto__:null,Checked:a,CheckedDisabled:s,Default:i,DefaultDisabled:n,__namedExportsOrder:E,default:Q},Symbol.toStringTag,{value:"Module"}));export{R as D,i as a};
