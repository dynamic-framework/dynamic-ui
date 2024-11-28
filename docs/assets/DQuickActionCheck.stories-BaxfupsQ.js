import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as l}from"./index-DH5ua8nC.js";import{c as $}from"./index-mLFX9G4A.js";import{D as I}from"./DInputCheck-RcgiJNa9.js";function n({id:t,name:i,value:v,line1:C,line2:N,line3:q,className:D,style:S,checked:_,dataAttributes:b,onChange:c}){const o=l.useId(),d=l.useMemo(()=>t||o,[t,o]),A=l.useCallback(u=>{u.stopPropagation(),c==null||c(u)},[c]);return e.jsxs("label",{className:$("d-quick-action-check",D),htmlFor:d,style:S,...b,children:[e.jsx(I,{id:d,type:"radio",name:i,value:v,checked:_,onChange:A}),e.jsxs("div",{className:"d-quick-action-check-detail",children:[e.jsx("span",{className:"d-quick-action-check-line1",children:C}),e.jsx("span",{className:"d-quick-action-check-line2",children:N})]}),e.jsx("span",{className:"d-quick-action-check-line3",children:q})]})}try{n.displayName="DQuickActionCheck",n.__docgenInfo={description:"",displayName:"DQuickActionCheck",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},line1:{defaultValue:null,description:"",name:"line1",required:!0,type:{name:"string"}},line2:{defaultValue:null,description:"",name:"line2",required:!0,type:{name:"string"}},line3:{defaultValue:null,description:"",name:"line3",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void) | undefined"}}}}}catch{}const V={title:"Design System/Components/Quick Action Check",component:n,argTypes:{id:{control:"text",type:"string"},name:{control:"text",type:"string"},value:{control:"text",type:"string"},className:{control:"text",type:"string"},style:{control:"object"},line1:{control:"text",type:"string",description:"The title"},line2:{control:"text",type:"string",description:"The subtitle"},line3:{control:"text",type:"string",description:"The text value"},checked:{control:"boolean",type:"boolean"},onChange:{action:"onChange"}}},a={decorators:[t=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(t,{})})],args:{id:"componentId1",name:"name",line1:"total",line2:"$ 7.432.450"}},r={decorators:[t=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(t,{})})],render:({id:t,...i})=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:`${t}2`,...i}),e.jsx(n,{id:`${t}3`,...i}),e.jsx(n,{id:`${t}4`,...i})]}),args:{id:"componentId",name:"name",line1:"total",line2:"$ 7.432.450"}},s={decorators:[t=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(t,{})})],args:{id:"componentId5",name:"name",line1:"total",line2:"$ 7.432.450",checked:!0}};var m,p,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  args: {
    id: 'componentId1',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450'
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,f,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: ({
    id,
    ...args
  }: ComponentProps<typeof DQuickActionCheck>) => <>
      <DQuickActionCheck id={\`\${id}2\`} {...args} />
      <DQuickActionCheck id={\`\${id}3\`} {...args} />
      <DQuickActionCheck id={\`\${id}4\`} {...args} />
    </>,
  args: {
    id: 'componentId',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,k,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  args: {
    id: 'componentId5',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
    checked: true
  }
}`,...(j=(k=s.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const Q=["Default","Example","Checked"],O=Object.freeze(Object.defineProperty({__proto__:null,Checked:s,Default:a,Example:r,__namedExportsOrder:Q,default:V},Symbol.toStringTag,{value:"Module"}));export{O as D,a};
