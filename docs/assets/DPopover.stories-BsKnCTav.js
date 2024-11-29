import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as c}from"./index-DH5ua8nC.js";import{c as j}from"./index-mLFX9G4A.js";import{u as X,a as z,b as J,c as U,d as G,e as H,F as K,o as W,f as Y,s as Z}from"./floating-ui.react-CzTYqOs8.js";import{P as ee}from"./config-CUZHf55T.js";import{a as oe}from"./floating-ui.dom-B5CW5bK0.js";import{D as t}from"./DQuickActionButton-Dq1DsGiX.js";import{D as u}from"./DButton-DItHDAb5.js";function n({children:o,renderComponent:B,open:g,setOpen:d,adjustContentToRender:p=!1,className:_,style:f,dataAttributes:k}){const[m,x]=c.useState(!1);c.useEffect(()=>{x(g)},[g]);const R=c.useCallback(v=>{x(v),d&&d(v)},[d]),{refs:h,floatingStyles:Q,context:l}=X({open:m,onOpenChange:R,middleware:[W(0),Y({fallbackAxisSideDirection:"none"}),Z()],whileElementsMounted:oe}),T=z(l),O=J(l),V=U(l),{getReferenceProps:q,getFloatingProps:F}=G([T,O,V]),$=H(),M=c.useMemo(()=>({...f,...p&&{[`--${ee}popover-component-min-width`]:"auto"}}),[f,p]);return e.jsxs("div",{className:j("d-popover",_),style:M,...k,children:[e.jsx("div",{ref:h.setReference,...q(),children:B(m)}),m&&e.jsx(K,{context:l,modal:!1,children:e.jsx("div",{className:j("d-popover-content",{"w-100":p}),ref:h.setFloating,style:Q,"aria-labelledby":$,...F(),children:o})})]})}try{n.displayName="DPopover",n.__docgenInfo={description:"",displayName:"DPopover",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},renderComponent:{defaultValue:null,description:`Component to render in call to action
@param open
@returns`,name:"renderComponent",required:!0,type:{name:"(open: boolean) => ReactElement<any, string | JSXElementConstructor<any>>"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!1,type:{name:"((open: boolean) => void) | undefined"}},adjustContentToRender:{defaultValue:{value:"false"},description:"",name:"adjustContentToRender",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const te={title:"Design System/Patterns/Popover",component:n,argTypes:{className:{control:"text",type:"string"},style:{control:"object"},adjustContentToRender:{control:"boolean",type:"boolean"}}},s={decorators:[o=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(o,{})})],render:o=>e.jsxs(n,{...o,children:[e.jsx(t,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"}),e.jsx(t,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"}),e.jsx(t,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"})]}),args:{renderComponent:o=>e.jsx("div",{className:"d-grid",children:e.jsx(u,{text:"Dropdown Component",iconEnd:`${o?"chevron-up":"chevron-down"}`,stopPropagationEnabled:!1})})},parameters:{docs:{canvas:{sourceState:"shown"}}}},r={decorators:[o=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(o,{})})],render:o=>e.jsxs(n,{...o,children:[e.jsx(t,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"}),e.jsx(t,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"}),e.jsx(t,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"})]}),args:{adjustContentToRender:!0,renderComponent:o=>e.jsx("div",{className:"d-grid",children:e.jsx(u,{text:"Dropdown Component",iconEnd:`${o?"chevron-up":"chevron-down"}`,stopPropagationEnabled:!1})})},parameters:{docs:{canvas:{sourceState:"shown"}}}},a={decorators:[o=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(o,{})})],render:o=>e.jsxs(n,{...o,children:[e.jsx(t,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"}),e.jsx(t,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"}),e.jsx(t,{line1:"Lorem Ipsum",line2:"Lorem Ipsum"})]}),args:{adjustContentToRender:!0,renderComponent:o=>e.jsx("div",{className:"d-grid",children:e.jsx(u,{text:"Dropdown Component",iconEnd:`${o?"chevron-up":"chevron-down"}`,stopPropagationEnabled:!1})}),open:!0},parameters:{docs:{canvas:{sourceState:"shown"}}}},i={decorators:[o=>e.jsx("div",{style:{width:"320px",height:"320px"},className:"d-flex flex-column align-items-stretch justify-content-center gap-3",children:e.jsx(o,{})})],render:o=>e.jsx(n,{...o,children:"Ipsum"}),args:{renderComponent:()=>e.jsx("div",{children:"Lorem"})},parameters:{docs:{canvas:{sourceState:"shown"}}}};var y,I,D;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DPopover {...args}>
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
    </DPopover>,
  args: {
    renderComponent: toggle => <div className="d-grid">
        <DButton text="Dropdown Component" iconEnd={\`\${toggle ? 'chevron-up' : 'chevron-down'}\`} stopPropagationEnabled={false} />
      </div>
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(D=(I=s.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var L,w,S;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DPopover {...args}>
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
    </DPopover>,
  args: {
    adjustContentToRender: true,
    renderComponent: toggle => <div className="d-grid">
        <DButton text="Dropdown Component" iconEnd={\`\${toggle ? 'chevron-up' : 'chevron-down'}\`} stopPropagationEnabled={false} />
      </div>
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(S=(w=r.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,P,b;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DPopover {...args}>
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
      <DQuickActionButton line1="Lorem Ipsum" line2="Lorem Ipsum" />
    </DPopover>,
  args: {
    adjustContentToRender: true,
    renderComponent: toggle => <div className="d-grid">
        <DButton text="Dropdown Component" iconEnd={\`\${toggle ? 'chevron-up' : 'chevron-down'}\`} stopPropagationEnabled={false} />
      </div>,
    open: true
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(b=(P=a.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var N,E,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }} className="d-flex flex-column align-items-stretch justify-content-center gap-3">
        <Story />
      </div>],
  render: args => <DPopover {...args}>
      Ipsum
    </DPopover>,
  args: {
    renderComponent: () => <div>Lorem</div>
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(A=(E=i.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const ne=["Default","AdjustToContent","Open","Plain"],me=Object.freeze(Object.defineProperty({__proto__:null,AdjustToContent:r,Default:s,Open:a,Plain:i,__namedExportsOrder:ne,default:te},Symbol.toStringTag,{value:"Module"}));export{me as D,s as a};
