import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./iframe-um1WsC0C.js";import{D as t}from"./DCollapse-CElAsrDy.js";import{D}from"./DIcon-BAV_3UYE.js";import{P as o}from"./config-C3iYXcFk.js";import{I as p,a as _}from"./constants-CkChkWbF.js";import{D as $}from"./DContext-C7LEUkQ1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cc_4mDlw.js";import"./useMediaBreakpointUp-Dsr-FX74.js";import"./index-BitFkd-h.js";import"./index-BGEaalem.js";const B={title:"Design System/Components/Collapse",component:t,parameters:{docs:{description:{component:`
## CSS Variables
| Variable                                 | Class               | Type            | Description                               |
|------------------------------------------|---------------------|-----------------|-------------------------------------------|
| --${o}collapse-bg                | .collapse-container | css color unit  | Collapse background                       |
| --${o}collapse-border-radius     | .collapse-container | css length unit | Collapse border radius                    |
| --${o}collapse-box-shadow        | .collapse-container | css box shadow  | Collapse box shadow                       |
| --${o}collapse-button-padding-x  | .collapse-container | css length unit | Collapse header button padding horizontal |
| --${o}collapse-button-padding-y  | .collapse-container | css length unit | Collapse header button padding vertical   |
| --${o}collapse-button-gap        | .collapse-container | css length unit | Collapse header button gap                |
| --${o}collapse-body-padding-x        | .collapse-container | css length unit | Collapse body padding horizontal          |
| --${o}collapse-body-padding-y        | .collapse-container | css length unit | Collapse body padding vertical            |
| --${o}collapse-separator-display     | .collapse-container | css display     | Collapse separator display                |
| --${o}collapse-separator-height      | .collapse-container | css length unit | Collapse separator size                   |
| --${o}collapse-separator-bg          | .collapse-container | css color unit  | Collapse separator color                  |
| --${o}collapse-interpolate-size      | .collapse-container | css keyword     | Controls interpolate-size for animation   |
| --${o}collapse-transition            | .collapse-container | css transition  | Collapse body transition animation        |
        `}}},argTypes:{className:{control:"text",type:"string",description:"Additional CSS class for the collapse container.",table:{category:"Appearance"}},style:{control:"object",description:"Inline styles for the collapse container.",table:{category:"Appearance"}},Component:{options:["Text","Custom"],mapping:{Text:"Simple text",Custom:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(D,{icon:"Flame",hasCircle:!0}),e.jsx("h1",{className:"h4 m-0",children:"Custom component"})]})},description:"Header content of the collapse.",table:{category:"Content"}},defaultCollapsed:{control:"boolean",description:"Initial or external state. When changed, the component syncs its internal state.",table:{category:"Behavior"}},onChange:{description:"Callback fired on toggle with the next state (true = collapsed, false = expanded). Use it to update your external state and use controlled mode.",table:{category:"Events"}},iconOpen:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...p],description:"Icon shown when the collapse is collapsed (state collapsed = true).",table:{category:"Icon"}},iconClose:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...p],description:"Icon shown when the collapse is expanded (state collapsed = false).",table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",description:"Enable Material icons style (requires DContextProvider configuration).",table:{category:"Icon"}},iconFamilyClass:{control:"text",type:"string",description:"Icon family class to use with DIcon.",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",description:"Icon family prefix to use with DIcon.",table:{category:"Icon"}}},tags:["autodocs"]},a={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(t,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsx("span",{children:"Text"})}},l={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(t,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(D,{icon:"Flame",hasCircle:!0}),e.jsx("h1",{className:"h4 m-0",children:"Custom component"})]})}},r={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx(t,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:e.jsx("span",{children:"Text"}),defaultCollapsed:!1}},c={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:s=>e.jsx($,{..._,children:e.jsx(t,{...s,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})})}),args:{Component:e.jsx("span",{children:"Text"}),iconClose:"unfold_more",iconOpen:"unfold_less"}},i={decorators:[s=>e.jsx("div",{style:{width:"320px",height:"320px"},children:e.jsx(s,{})})],render:function(S){const[n,d]=T.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex gap-2 mb-2",children:e.jsx("button",{className:"btn btn-sm btn-primary",type:"button",onClick:()=>d(E=>!E),children:n?"Expand":"Collapse"})}),e.jsx(t,{...S,defaultCollapsed:n,onChange:d,children:e.jsxs("div",{className:"row d-flex flex-column gap-3 pt-3",children:[e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),e.jsx("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})})]})},args:{Component:e.jsx("span",{children:"Text"})},parameters:{docs:{description:{story:'Controlled usage: update "defaultCollapsed" and handle "onChange" to update external state. When defaultCollapsed is true, the body is hidden; when false, it is shown.'},source:{code:`import { useState } from 'react';

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
    Component: <span>Text</span>
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
      </div>
  }
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var g,f,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    defaultCollapsed: false
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,N,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    iconClose: 'unfold_more',
    iconOpen: 'unfold_less'
  }
}`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var L,w,I;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    Component: <span>Text</span>
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
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const G=["HeaderText","HeaderComponent","Expanded","MaterialIcon","Controlled"];export{i as Controlled,r as Expanded,l as HeaderComponent,a as HeaderText,c as MaterialIcon,G as __namedExportsOrder,B as default};
