import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as v}from"./index-D0sKC-UO.js";import{r as t}from"./iframe-XnRhdyHW.js";import{P as o}from"./config-BV4l-vIF.js";import{D as c}from"./DIcon-BtjKyMWG.js";import{u as U,D as J}from"./DContext-Dm_WebLV.js";import{I as C,a as K}from"./constants-Bqs03lsf.js";import"./index-CQ6hCEsd.js";import"./index-CucmxpGD.js";function a({id:s,className:E,style:I,Component:$,hasSeparator:d=!1,defaultCollapsed:q=!0,onChange:p,children:M,iconOpen:m,iconClose:u,iconFamilyClass:P,iconFamilyPrefix:R,iconMaterialStyle:F=!1,dataAttributes:A}){const[x,k]=t.useState(q),z=()=>{k(G=>{const g=!G;return p&&p(g),g})},{iconMap:{chevronDown:h,chevronUp:f}}=U(),H=t.useMemo(()=>m||h,[h,m]),X=t.useMemo(()=>u||f,[f,u]),B=t.useMemo(()=>({[`--${o}collapse-separator-display`]:d?"block":"none"}),[d]);return e.jsxs("div",{id:s,className:v("collapse-container",E),style:I,...A,children:[e.jsxs("button",{className:"collapse-button",type:"button",onClick:z,children:[e.jsx("div",{className:"flex-grow-1",children:$}),e.jsx(c,{color:`var(--${o}gray)`,size:`var(--${o}fs-small)`,icon:x?H:X,familyClass:P,familyPrefix:R,materialStyle:F})]}),!x&&e.jsx("div",{className:v({"collapse-body":!0}),style:B,children:M})]})}try{a.displayName="DCollapse",a.__docgenInfo={description:"",displayName:"DCollapse",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:{value:"false"},description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ReactNode | ReactElement<unknown, string | JSXElementConstructor<any>>"}},hasSeparator:{defaultValue:{value:"false"},description:"",name:"hasSeparator",required:!1,type:{name:"boolean | undefined"}},defaultCollapsed:{defaultValue:{value:"true"},description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void) | undefined"}},iconOpen:{defaultValue:null,description:"",name:"iconOpen",required:!1,type:{name:"string | undefined"}},iconClose:{defaultValue:null,description:"",name:"iconClose",required:!1,type:{name:"string | undefined"}}}}}catch{}const{fn:Y}=__STORYBOOK_MODULE_TEST__,re={title:"Design System/Patterns/Collapse",component:a,parameters:{docs:{description:{component:`
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
        `}}},args:{onChange:Y()},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},Component:{options:["Text","Custom"],mapping:{Text:"Simple text",Custom:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(c,{icon:"fire",hasCircle:!0}),e.jsx("h1",{className:"h4 m-0",children:"Custom component"})]})}},defaultCollapsed:{control:"boolean"},hasSeparator:{control:"boolean"},iconOpen:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...C]},iconClose:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...C]},iconMaterialStyle:{control:"boolean",type:"boolean"},iconFamilyClass:{control:"text",type:"string"},iconFamilyPrefix:{control:"text",type:"string"}},tags:["autodocs"]},l={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(a,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsx("span",{children:"Text"}),hasSeparator:!0}},r={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(a,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(c,{icon:"fire",hasCircle:!0}),e.jsx("h1",{className:"h4 m-0",children:"Custom component"})]}),hasSeparator:!0}},n={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(a,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsx("span",{children:"Text"}),defaultCollapsed:!1,hasSeparator:!0}},i={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(J,{...K,children:e.jsx(a,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})})}),args:{Component:e.jsx("span",{children:"Text"}),hasSeparator:!0,iconClose:"unfold_more",iconOpen:"unfold_less"}};var y,N,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    Component: <span>Text</span>,
    hasSeparator: true
  }
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var b,S,L;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    hasSeparator: true
  }
}`,...(L=(S=r.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var _,D,w;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    Component: <span>Text</span>,
    defaultCollapsed: false,
    hasSeparator: true
  }
}`,...(w=(D=n.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var T,O,V;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    Component: <span>Text</span>,
    hasSeparator: true,
    iconClose: 'unfold_more',
    iconOpen: 'unfold_less'
  }
}`,...(V=(O=i.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const ne=["HeaderText","HeaderComponent","Expanded","MaterialIcon"];export{n as Expanded,r as HeaderComponent,l as HeaderText,i as MaterialIcon,ne as __namedExportsOrder,re as default};
