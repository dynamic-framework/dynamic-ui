import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as n}from"./config-BV4l-vIF.js";import{r as s}from"./iframe-XnRhdyHW.js";import{c as A}from"./index-D0sKC-UO.js";function i({id:t,name:c,value:b,line1:v,line2:N,className:C,style:D,selected:u=!1,dataAttributes:V,onChange:o}){const d=s.useRef(null),m=s.useId(),p=s.useMemo(()=>t||m,[t,m]),w=s.useCallback(g=>{g.stopPropagation(),o==null||o(g)},[o]);return s.useEffect(()=>{d.current&&(d.current.checked=u)},[u]),e.jsxs("label",{className:A("d-quick-action-select",C),htmlFor:p,style:D,...V,children:[e.jsx("input",{ref:d,id:p,type:"radio",name:c,value:b,onChange:w}),e.jsx("span",{className:"d-quick-action-select-line1",children:v}),e.jsx("span",{className:"d-quick-action-select-line2",children:N})]})}try{i.displayName="DQuickActionSelect",i.__docgenInfo={description:"",displayName:"DQuickActionSelect",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},line1:{defaultValue:null,description:"",name:"line1",required:!0,type:{name:"string"}},line2:{defaultValue:null,description:"",name:"line2",required:!0,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void) | undefined"}}}}}catch{}const F={title:"Design System/Components/Quick Action Select",component:i,parameters:{docs:{description:{component:`
## CSS Variables
| Variable                                            | Class                  | Type            | Description                |
|-----------------------------------------------------|------------------------|-----------------|----------------------------|
| --${n}quick-action-select-padding           | .d-quick-action-select | css length unit | Content padding            |
| --${n}quick-action-select-bg                | .d-quick-action-select | css color unit  | Content background color   |
| --${n}quick-action-select-border-radius     | .d-quick-action-select | css length unit | Quick action border radius |
| --${n}quick-action-select-line1-font-size   | .d-quick-action-select | css length unit | First line font size       |
| --${n}quick-action-select-line1-font-weight | .d-quick-action-select | css font weight | First line font weight     |
| --${n}quick-action-select-line1-color       | .d-quick-action-select | css color unit  | First line color           |
| --${n}quick-action-select-line2-font-size   | .d-quick-action-select | css length unit | Second line font size      |
| --${n}quick-action-select-line2-font-weight | .d-quick-action-select | css length unit | Second line font weight    |
| --${n}quick-action-select-line2-color       | .d-quick-action-select | css color unit  | Second line color          |
| --${n}quick-action-select-hover-bg          | .d-quick-action-select | css color unit  | Content hover background   |
| --${n}quick-action-select-checked-bg        | .d-quick-action-select | css color unit  | Content checked background |
| --${n}quick-action-select-checked-color     | .d-quick-action-select | css color unit  | Content checked color      |
        `}}},argTypes:{id:{control:"text",type:"string"},name:{control:"text",type:"string"},value:{control:"text",type:"string"},className:{control:"text",type:"string"},style:{control:"object"},line1:{control:"text",type:"string",description:"The title"},line2:{control:"text",type:"string",description:"The subtitle"},selected:{control:"boolean",type:"boolean"},onChange:{action:"onChange"}},tags:["autodocs"]},a={decorators:[t=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(t,{})})],args:{id:"componentId1",name:"name",line1:"total",line2:"$ 7.432.450"}},l={decorators:[t=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(t,{})})],render:({id:t,...c})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{id:`${t}2`,...c}),e.jsx(i,{id:`${t}3`,...c}),e.jsx(i,{id:`${t}4`,...c})]}),args:{id:"componentId",name:"name",line1:"total",line2:"$ 7.432.450"}},r={decorators:[t=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(t,{})})],args:{id:"componentId5",name:"name",line1:"total",line2:"$ 7.432.450",selected:!0}};var f,h,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,k,q;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: ({
    id,
    ...args
  }: ComponentProps<typeof DQuickActionSelect>) => <>
      <DQuickActionSelect id={\`\${id}2\`} {...args} />
      <DQuickActionSelect id={\`\${id}3\`} {...args} />
      <DQuickActionSelect id={\`\${id}4\`} {...args} />
    </>,
  args: {
    id: 'componentId',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450'
  }
}`,...(q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var S,$,j;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    selected: true
  }
}`,...(j=($=r.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const T=["Default","Example","Selected"];export{a as Default,l as Example,r as Selected,T as __namedExportsOrder,F as default};
