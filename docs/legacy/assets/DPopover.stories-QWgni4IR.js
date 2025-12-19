import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as d}from"./index-Bv9Y92EF.js";import{c as D}from"./index-PkosZWDx.js";import{u as M,a as z,b as X,c as J,d as U,e as G,F as H}from"./floating-ui.react-jhQhrJg7.js";import{P as K}from"./config-BV4l-vIF.js";import{b as L}from"./floating-ui.dom-osFzHgfv.js";import{o as Q,f as W,s as Y}from"./floating-ui.react-dom-WP3SW3a1.js";import{D as Z}from"./DButton-DUf9_Uq7.js";import{D as c}from"./DCard-DDneDBlw.js";function n({children:o,renderComponent:m,open:u,setOpen:p,adjustContentToRender:l=!1,className:E,style:f,dataAttributes:N}){const[i,C]=d.useState(!1);d.useEffect(()=>{C(u)},[u]);const F=d.useCallback(g=>{C(g),p&&p(g)},[p]),{refs:v,floatingStyles:k,context:s}=M({open:i,onOpenChange:F,middleware:[Q(0),W({fallbackAxisSideDirection:"none"}),Y()],whileElementsMounted:L}),T=z(s),V=X(s),q=J(s),{getReferenceProps:A,getFloatingProps:I}=U([T,V,q]),O=G(),$=d.useMemo(()=>({...f,...l&&{[`--${K}popover-component-min-width`]:"auto"}}),[f,l]);return e.jsxs("div",{className:D("d-popover",E),style:$,...N,children:[e.jsx("div",{ref:v.setReference,...A(),children:m(i)}),i&&e.jsx(H,{context:s,modal:!1,children:e.jsx("div",{className:D("d-popover-content",{"w-100":l}),ref:v.setFloating,style:k,"aria-labelledby":O,...I(),children:o})})]})}try{n.displayName="DPopover",n.__docgenInfo={description:"",displayName:"DPopover",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},renderComponent:{defaultValue:null,description:`Component to render in call to action
@param open
@returns`,name:"renderComponent",required:!0,type:{name:"(open: boolean) => ReactElement<any, string | JSXElementConstructor<any>>"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!1,type:{name:"((open: boolean) => void) | undefined"}},adjustContentToRender:{defaultValue:{value:"false"},description:"",name:"adjustContentToRender",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const ee={title:"Design System/Patterns/Popover",component:n,argTypes:{className:{control:"text",type:"string"},style:{control:"object"},adjustContentToRender:{control:"boolean",type:"boolean"}},decorators:[o=>e.jsx("div",{style:{height:"250px"},className:"d-flex justify-content-center align-items-center",children:e.jsx(o,{})})]};function w(o){return e.jsx(Z,{className:"w-100",text:"Popover on bottom",iconEnd:`${o?"chevron-up":"chevron-down"}`,stopPropagationEnabled:!1})}function R(o,m){return`
<DPopover renderComponent={(toggle: boolean) => (
  <DButton
    text="Popover on ${o}"
    iconEnd={\`\${toggle ? 'chevron-up' : 'chevron-down'}\`}
    stopPropagationEnabled={false}
    
  />
)}>
  <DCard>
    <DCard.Body>${o} popover</DCard.Body>
  </DCard>
</DPopover>
  `}const r={render:o=>e.jsx(n,{...o,children:e.jsx(c,{children:e.jsx(c.Body,{children:"Bottom popover"})})}),args:{renderComponent:w},parameters:{docs:{source:{code:R("Bottom")},canvas:{sourceState:"shown"}}}},t={render:o=>e.jsx(n,{...o,children:e.jsx(c,{children:e.jsx(c.Body,{children:"Full size"})})}),args:{adjustContentToRender:!0,renderComponent:w},parameters:{docs:{source:{code:R("Bottom")},canvas:{sourceState:"shown"}}}},a={render:()=>e.jsx(n,{open:!1,renderComponent:()=>e.jsx("h4",{children:"Click me"}),children:"Plain popover"}),parameters:{docs:{source:{code:`
<DPopover
  open={false}
  renderComponent={() => (
    <h4>Click me</h4>
  )}
>
  Plain popover
</DPopover>
        `},canvas:{sourceState:"shown"}}}};var h,y,P;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <DPopover {...args}>
      <DCard>
        <DCard.Body>Bottom popover</DCard.Body>
      </DCard>
    </DPopover>,
  args: {
    renderComponent: ButtonRenderComponent
  },
  parameters: {
    docs: {
      source: {
        code: CodeComponent('Bottom')
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(P=(y=r.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var j,x,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <DPopover {...args}>
      <DCard>
        <DCard.Body>Full size</DCard.Body>
      </DCard>
    </DPopover>,
  args: {
    adjustContentToRender: true,
    renderComponent: ButtonRenderComponent
  },
  parameters: {
    docs: {
      source: {
        code: CodeComponent('Bottom')
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var S,B,_;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <DPopover open={false} renderComponent={() => <h4>Click me</h4>}>
      Plain popover
    </DPopover>,
  parameters: {
    docs: {
      source: {
        code: \`
<DPopover
  open={false}
  renderComponent={() => (
    <h4>Click me</h4>
  )}
>
  Plain popover
</DPopover>
        \`
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(_=(B=a.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const oe=["Default","AdjustToContent","Plain"],ie=Object.freeze(Object.defineProperty({__proto__:null,AdjustToContent:t,Default:r,Plain:a,__namedExportsOrder:oe,default:ee},Symbol.toStringTag,{value:"Module"}));export{ie as D,r as a};
