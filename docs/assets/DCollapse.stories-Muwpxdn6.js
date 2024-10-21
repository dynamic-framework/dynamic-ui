import{j as e}from"./jsx-runtime-CKrituN3.js";import{f as B}from"./index-C_FWhylE.js";import{c as C}from"./index-ELyB7pIJ.js";import{r as l}from"./index-CBqU2yxZ.js";import{P as o}from"./config-CUZHf55T.js";import{D as m}from"./DIcon-1scRBrNx.js";import{u as J,D as U}from"./DContext-CSLUP0I2.js";import{I as y,a as K}from"./constants-DhWTmuJQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";function a({id:s,className:O,style:$,Component:q,hasSeparator:u=!1,defaultCollapsed:d=!1,onChange:p,children:M,iconOpen:f,iconClose:x,iconFamilyClass:P,iconFamilyPrefix:R,iconMaterialStyle:F=!1,dataAttributes:A}){const[t,h]=l.useState(d),z=()=>h(G=>!G),{iconMap:{chevronDown:g,chevronUp:v}}=J(),H=l.useMemo(()=>f||v,[v,f]),X=l.useMemo(()=>x||g,[g,x]);l.useEffect(()=>{p&&p(t)},[t,p]),l.useEffect(()=>{h(d)},[d]);const k=l.useMemo(()=>({[`--${o}collapse-separator-display`]:u?"block":"none"}),[u]);return e.jsxs("div",{id:s,className:C("collapse-container",O),style:$,...A,children:[e.jsxs("button",{className:"collapse-button",type:"button",onClick:z,children:[e.jsx("div",{className:"flex-grow-1",children:q}),e.jsx(m,{color:`var(--${o}gray)`,size:`var(--${o}fs-small)`,icon:t?H:X,familyClass:P,familyPrefix:R,materialStyle:F})]}),t&&e.jsx("div",{className:C({"collapse-body":!0}),style:k,children:M})]})}try{a.displayName="DCollapse",a.__docgenInfo={description:"",displayName:"DCollapse",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:{value:"false"},description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ReactNode | ReactElement<any, string | JSXElementConstructor<any>>"}},hasSeparator:{defaultValue:{value:"false"},description:"",name:"hasSeparator",required:!1,type:{name:"boolean | undefined"}},defaultCollapsed:{defaultValue:{value:"false"},description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void) | undefined"}},iconOpen:{defaultValue:null,description:"",name:"iconOpen",required:!1,type:{name:"string | undefined"}},iconClose:{defaultValue:null,description:"",name:"iconClose",required:!1,type:{name:"string | undefined"}}}}}catch{}const re={title:"Design System/Patterns/Collapse",component:a,parameters:{docs:{description:{component:`
## CSS Variables
| Variable                                 | Class               | Type            | Description                               |
|------------------------------------------|---------------------|-----------------|-------------------------------------------|
| --${o}collapse-bg                | .collapse-container | css color unit  | Collapse background                       |
| --${o}collapse-border-radius     | .collapse-container | css length unit | Collapse border radius                    |
| --${o}collapse-box-shadow        | .collapse-container | css box shadow  | Collapse box shadow                       |
| --${o}collapse-button-padding-x  | .collapse-container | css length unit | Collapse header button padding horizontal |
| --${o}collapse-button-padding-y  | .collapse-container | css length unit | Collapse header button padding vertical   |
| --${o}collapse-button-gap        | .collapse-container | css length unit | Collapse header button gap                |
| --${o}collapse-body-padding-x    | .collapse-container | css length unit | Collapse body padding horizontal          |
| --${o}collapse-body-padding-y    | .collapse-container | css length unit | Collapse body padding vertical            |
| --${o}collapse-separator-display | .collapse-container | css display     | Collapse separator display                |
| --${o}collapse-separator-height  | .collapse-container | css length unit | Collapse separator size                   |
| --${o}collapse-separator-bg      | .collapse-container | css color unit  | Collapse separator color                  |
        `}}},args:{onChange:B()},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},Component:{options:["Text","Custom"],mapping:{Text:"Simple text",Custom:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(m,{icon:"fire",hasCircle:!0}),e.jsx("h1",{className:"h4 m-0",children:"Custom component"})]})}},defaultCollapsed:{control:"boolean"},hasSeparator:{control:"boolean"},iconOpen:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...y]},iconClose:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...y]},iconMaterialStyle:{control:"boolean",type:"boolean"},iconFamilyClass:{control:"text",type:"string"},iconFamilyPrefix:{control:"text",type:"string"}},tags:["autodocs"]},r={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(a,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsx("p",{children:"Text"}),defaultCollapsed:!1,hasSeparator:!0}},i={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(a,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(m,{icon:"fire",hasCircle:!0}),e.jsx("h1",{className:"h4 m-0",children:"Custom component"})]}),defaultCollapsed:!1,hasSeparator:!0}},n={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(a,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsx("p",{children:"Text"}),defaultCollapsed:!0,hasSeparator:!0}},c={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(U,{...K,children:e.jsx(a,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})})}),args:{Component:e.jsx("p",{children:"Text"}),defaultCollapsed:!0,hasSeparator:!0,iconClose:"unfold_more",iconOpen:"unfold_less"}};var N,j,b;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }}>
        <Story />
      </div>],
  render: args => <DCollapse {...args}>
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>,
  args: {
    Component: <p>Text</p>,
    defaultCollapsed: false,
    hasSeparator: true
  }
}`,...(b=(j=r.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var S,L,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }}>
        <Story />
      </div>],
  render: args => <DCollapse {...args}>
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>,
  args: {
    Component: <div className="d-flex align-items-center gap-3">
        <DIcon icon="fire" hasCircle />
        <h1 className="h4 m-0">Custom component</h1>
      </div>,
    defaultCollapsed: false,
    hasSeparator: true
  }
}`,...(D=(L=i.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var w,_,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }}>
        <Story />
      </div>],
  render: args => <DCollapse {...args}>
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>,
  args: {
    Component: <p>Text</p>,
    defaultCollapsed: true,
    hasSeparator: true
  }
}`,...(T=(_=n.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var V,E,I;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }}>
        <Story />
      </div>],
  render: args => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DCollapse {...args}>
        <div className="row d-flex flex-column gap-3 pt-3">
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </DCollapse>
    </DContextProvider>,
  args: {
    Component: <p>Text</p>,
    defaultCollapsed: true,
    hasSeparator: true,
    iconClose: 'unfold_more',
    iconOpen: 'unfold_less'
  }
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const ie=["HeaderText","HeaderComponent","Collapsed","MaterialIcon"];export{n as Collapsed,i as HeaderComponent,r as HeaderText,c as MaterialIcon,ie as __namedExportsOrder,re as default};
