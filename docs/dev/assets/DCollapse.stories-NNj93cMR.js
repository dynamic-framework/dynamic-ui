import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as a}from"./DCollapse-BiCFjYPo.js";import{D as f}from"./DIcon-CUc1gKJP.js";import{P as s}from"./config-C3iYXcFk.js";import{I as i,a as y}from"./constants-CyI_OqvZ.js";import{D as S}from"./DContext-B3aiYoEN.js";import"./index-C3AGQSt6.js";import"./iframe-kwwP_hxt.js";import"./useMediaBreakpointUp-DR_KaXrr.js";import"./index-M66j5VFs.js";import"./index-CwxkxyeD.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,P={title:"Design System/Components/Collapse",component:a,parameters:{docs:{description:{component:`
## CSS Variables
| Variable                                 | Class               | Type            | Description                               |
|------------------------------------------|---------------------|-----------------|-------------------------------------------|
| --${s}collapse-bg                | .collapse-container | css color unit  | Collapse background                       |
| --${s}collapse-border-radius     | .collapse-container | css length unit | Collapse border radius                    |
| --${s}collapse-box-shadow        | .collapse-container | css box shadow  | Collapse box shadow                       |
| --${s}collapse-button-padding-x  | .collapse-container | css length unit | Collapse header button padding horizontal |
| --${s}collapse-button-padding-y  | .collapse-container | css length unit | Collapse header button padding vertical   |
| --${s}collapse-button-gap        | .collapse-container | css length unit | Collapse header button gap                |
| --${s}collapse-body-padding-x    | .collapse-container | css length unit | Collapse body padding horizontal          |
| --${s}collapse-body-padding-y    | .collapse-container | css length unit | Collapse body padding vertical            |
| --${s}collapse-separator-display | .collapse-container | css display     | Collapse separator display                |
| --${s}collapse-separator-height  | .collapse-container | css length unit | Collapse separator size                   |
| --${s}collapse-separator-bg      | .collapse-container | css color unit  | Collapse separator color                  |
        `}}},args:{onChange:b()},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},Component:{options:["Text","Custom"],mapping:{Text:"Simple text",Custom:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(f,{icon:"Flame",hasCircle:!0}),e.jsx("h1",{className:"h4 m-0",children:"Custom component"})]})}},defaultCollapsed:{control:"boolean"},hasSeparator:{control:"boolean"},iconOpen:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...i]},iconClose:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...i]},iconMaterialStyle:{control:"boolean",type:"boolean"},iconFamilyClass:{control:"text",type:"string"},iconFamilyPrefix:{control:"text",type:"string"}},tags:["autodocs"]},r={decorators:[o=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(o,{})})],render:o=>e.jsx(a,{...o,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsx("span",{children:"Text"}),hasSeparator:!0}},t={decorators:[o=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(o,{})})],render:o=>e.jsx(a,{...o,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(f,{icon:"Flame",hasCircle:!0}),e.jsx("h1",{className:"h4 m-0",children:"Custom component"})]}),hasSeparator:!0}},l={decorators:[o=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(o,{})})],render:o=>e.jsx(a,{...o,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsx("span",{children:"Text"}),defaultCollapsed:!1,hasSeparator:!0}},c={decorators:[o=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(o,{})})],render:o=>e.jsx(S,{...y,children:e.jsx(a,{...o,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})})}),args:{Component:e.jsx("span",{children:"Text"}),hasSeparator:!0,iconClose:"unfold_more",iconOpen:"unfold_less"}};var n,d,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        <DIcon icon="Flame" hasCircle />
        <h1 className="h4 m-0">Custom component</h1>
      </div>,
    hasSeparator: true
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,g,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var C,N,j;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const M=["HeaderText","HeaderComponent","Expanded","MaterialIcon"];export{l as Expanded,t as HeaderComponent,r as HeaderText,c as MaterialIcon,M as __namedExportsOrder,P as default};
