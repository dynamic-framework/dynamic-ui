import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./iframe-BYSCWExI.js";import{D as t}from"./DCollapse-FpZTM9wD.js";import{D}from"./DIcon-NYndRyIj.js";import{P as o}from"./config-C3iYXcFk.js";import{I as p,a as _}from"./constants-CyI_OqvZ.js";import{D as O}from"./DContext-D0m4Bwm8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CA80ENxY.js";import"./useMediaBreakpointUp-w2QbIuEZ.js";import"./index-DLjQtdT0.js";import"./index-r5pxbxIu.js";const{fn:$}=__STORYBOOK_MODULE_TEST__,G={title:"Design System/Components/Collapse",component:t,parameters:{docs:{description:{component:`
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
        `}}},args:{onChange:$()},argTypes:{className:{control:"text",type:"string",description:"Additional CSS class for the collapse container."},style:{control:"object",description:"Inline styles for the collapse container."},Component:{options:["Text","Custom"],mapping:{Text:"Simple text",Custom:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(D,{icon:"Flame",hasCircle:!0}),e.jsx("h1",{className:"h4 m-0",children:"Custom component"})]})},description:"Header content of the collapse."},defaultCollapsed:{control:"boolean",description:"Initial or external state. When changed, the component syncs its internal state."},onChange:{description:"Callback fired on toggle with the next state (true = collapsed, false = expanded). Use it to update your external state and use controlled mode."},hasSeparator:{control:"boolean",description:"Shows a separator between header and body."},iconOpen:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...p],description:"Icon shown when the collapse is collapsed (state collapsed = true)."},iconClose:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...p],description:"Icon shown when the collapse is expanded (state collapsed = false)."},iconMaterialStyle:{control:"boolean",type:"boolean",description:"Enable Material icons style (requires DContextProvider configuration)."},iconFamilyClass:{control:"text",type:"string",description:"Icon family class to use with DIcon."},iconFamilyPrefix:{control:"text",type:"string",description:"Icon family prefix to use with DIcon."}},tags:["autodocs"]},a={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(t,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsx("span",{children:"Text"}),hasSeparator:!0}},l={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(t,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(D,{icon:"Flame",hasCircle:!0}),e.jsx("h1",{className:"h4 m-0",children:"Custom component"})]}),hasSeparator:!0}},r={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(t,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsx("span",{children:"Text"}),defaultCollapsed:!1,hasSeparator:!0}},i={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(O,{..._,children:e.jsx(t,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})})}),args:{Component:e.jsx("span",{children:"Text"}),hasSeparator:!0,iconClose:"unfold_more",iconOpen:"unfold_less"}},n={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:function(I){const[c,d]=E.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex gap-2 mb-2",children:e.jsx("button",{className:"btn btn-sm btn-primary",type:"button",onClick:()=>d(T=>!T),children:c?"Expand":"Collapse"})}),e.jsx(t,{...I,defaultCollapsed:c,onChange:d,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})})]})},args:{Component:e.jsx("span",{children:"Text"}),hasSeparator:!0},parameters:{docs:{description:{story:'Controlled usage: update "defaultCollapsed" and handle "onChange" to update external state. When defaultCollapsed is true, the body is hidden; when false, it is shown.'},source:{code:`import { useState } from 'react';

export default function ControlledCollapseExample() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <div className="d-flex gap-2 mb-2">
        <button
          className="btn btn-sm btn-primary"
          type="button"
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>
      <DCollapse
        Component={<span>Text</span>}
        defaultCollapsed={isCollapsed}
        hasSeparator
        onChange={setIsCollapsed}
      >
        <div className="row d-flex flex-column gap-3 pt-3">
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </DCollapse>
    </>
  );
}
`}}}};var m,u,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,C,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var g,f,N;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(N=(f=r.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var y,b,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var S,L,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px',
    height: '320px'
  }}>
        <Story />
      </div>],
  render: function Example(args) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    return <>
        <div className="d-flex gap-2 mb-2">
          <button className="btn btn-sm btn-primary" type="button" onClick={() => setIsCollapsed(prev => !prev)}>
            {isCollapsed ? 'Expand' : 'Collapse'}
          </button>
        </div>
        <DCollapse {...args} defaultCollapsed={isCollapsed} onChange={setIsCollapsed}>
          <div className="row d-flex flex-column gap-3 pt-3">
            <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          </div>
        </DCollapse>
      </>;
  },
  args: {
    Component: <span>Text</span>,
    hasSeparator: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled usage: update "defaultCollapsed" and handle "onChange" to update external state. When defaultCollapsed is true, the body is hidden; when false, it is shown.'
      },
      source: {
        code: \`import { useState } from 'react';

export default function ControlledCollapseExample() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <div className="d-flex gap-2 mb-2">
        <button
          className="btn btn-sm btn-primary"
          type="button"
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>
      <DCollapse
        Component={<span>Text</span>}
        defaultCollapsed={isCollapsed}
        hasSeparator
        onChange={setIsCollapsed}
      >
        <div className="row d-flex flex-column gap-3 pt-3">
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </DCollapse>
    </>
  );
}
\`
      }
    }
  }
}`,...(w=(L=n.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const U=["HeaderText","HeaderComponent","Expanded","MaterialIcon","Controlled"];export{n as Controlled,r as Expanded,l as HeaderComponent,a as HeaderText,i as MaterialIcon,U as __namedExportsOrder,G as default};
