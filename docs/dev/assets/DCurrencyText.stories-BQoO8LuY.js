import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{u as x}from"./useFormatCurrency-C4nAnAX-.js";import{D as d}from"./DContext-sS8uqpDQ.js";function a({value:e,className:p,style:m,dataAttributes:y}){const{values:[f]}=x(e);return n.jsx("span",{className:p,style:m,...y,children:f})}try{a.displayName="DCurrencyText",a.__docgenInfo={description:"",displayName:"DCurrencyText",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}const C={title:"Design System/Utils/Currency Text",component:a},r={render:e=>n.jsx(d,{children:n.jsx(a,{...e})}),args:{value:100}},t={render:e=>n.jsx(d,{currency:{symbol:"€",decimal:",",separator:".",precision:2},children:n.jsx(a,{...e})}),args:{value:1000.1}};var s,o,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DCurrencyText>) => <DContextProvider>
      <DCurrencyText {...args} />
    </DContextProvider>,
  args: {
    value: 100
  }
}`,...(u=(o=r.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DCurrencyText>) => <DContextProvider currency={{
    symbol: '€',
    decimal: ',',
    separator: '.',
    precision: 2
  }}>
      <DCurrencyText {...args} />
    </DContextProvider>,
  args: {
    value: 1000.1
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const D=["Default","CustomCurrencyProps"],P=Object.freeze(Object.defineProperty({__proto__:null,CustomCurrencyProps:t,Default:r,__namedExportsOrder:D,default:C},Symbol.toStringTag,{value:"Module"}));export{P as D};
