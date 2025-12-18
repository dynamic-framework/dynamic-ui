import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{D as e}from"./DToast-t6PrEk7Y.js";import{P as t}from"./config-C3iYXcFk.js";import{D as a}from"./DIcon-B1B6J-as.js";import"./index-5PCv3b9w.js";import"./iframe-B2wa2xAh.js";import"./useMediaBreakpointUp-CV445rw6.js";import"./DContext-Dh6HSQId.js";import"./index-DGx1zSgb.js";import"./index-Dqw5JuKN.js";const G={title:"Design System/Components/Toast",component:e,parameters:{layout:"fullscreen",docs:{description:{component:`
To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Toast](https://getbootstrap.com/docs/5.3/components/toasts/)

## CSS Variables
The Bootstrap documentation provides details on the default [Toast CSS Variables](https://getbootstrap.com/docs/5.3/components/toasts/#css)

| Variable                                | Classes    | Type              | Description                        |
|-----------------------------------------|------------|-------------------|------------------------------------|
| --${t}toast-header-gap          | .toast     | css length unit   | Space between content              |
| --${t}toast-body-gap            | .toast     | css font weight   | Space between content              |
| --${t}toast-color               | .toast     | css color         | Toast body text color              |
| --${t}toast-close-color         | .toast     | css length unit   | Close icon color                   |
| --${t}toast-header-color        | .toast     | css length unit   | Toast header text color            |
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"}},tags:["autodocs"]},r={decorators:[o=>s.jsx("div",{style:{height:"400px"},className:"position-relative",children:s.jsx(o,{})})],render:o=>s.jsxs(e,{...o,children:[s.jsxs(e.Header,{children:[s.jsx(a,{icon:"Disc",color:"primary",className:"me-2"}),s.jsx("strong",{className:"me-auto",children:"Notification"}),s.jsx("small",{className:"me-2",children:"just now"}),s.jsx("button",{type:"button",className:"d-close","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]}),s.jsx(e.Body,{children:"Hello! This is a toast message."})]}),args:{className:"show position-absolute top-0 end-0"}},c={decorators:[o=>s.jsx("div",{style:{height:"400px"},className:"position-relative",children:s.jsx(o,{})})],render:o=>s.jsxs(e,{...o,children:[s.jsxs(e.Header,{children:[s.jsx(a,{icon:"CircleCheck",color:"success",className:"me-2"}),s.jsx("strong",{className:"me-auto",children:"Success"}),s.jsx("small",{className:"me-2",children:"2 mins ago"}),s.jsx("button",{type:"button",className:"d-close","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]}),s.jsx(e.Body,{children:"Your changes have been saved successfully!"})]}),args:{className:"show position-absolute top-0 end-0"}},n={decorators:[o=>s.jsx("div",{style:{height:"400px"},className:"position-relative",children:s.jsx(o,{})})],render:o=>s.jsxs(e,{...o,children:[s.jsxs(e.Header,{children:[s.jsx(a,{icon:"AlertTriangle",color:"warning",className:"me-2"}),s.jsx("strong",{className:"me-auto",children:"Warning"}),s.jsx("small",{className:"me-2",children:"5 mins ago"}),s.jsx("button",{type:"button",className:"d-close","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]}),s.jsx(e.Body,{children:"Please review your input before proceeding."})]}),args:{className:"show position-absolute top-0 end-0"}},l={decorators:[o=>s.jsx("div",{style:{height:"400px"},className:"position-relative",children:s.jsx(o,{})})],render:o=>s.jsxs(e,{...o,children:[s.jsxs(e.Header,{children:[s.jsx(a,{icon:"CircleX",color:"danger",className:"me-2"}),s.jsx("strong",{className:"me-auto",children:"Error"}),s.jsx("small",{className:"me-2",children:"1 min ago"}),s.jsx("button",{type:"button",className:"d-close","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]}),s.jsx(e.Body,{children:"An error occurred while processing your request."})]}),args:{className:"show position-absolute top-0 end-0"}},i={decorators:[o=>s.jsx("div",{style:{height:"400px"},className:"position-relative",children:s.jsx(o,{})})],render:o=>s.jsxs(e,{...o,children:[s.jsxs(e.Header,{children:[s.jsx(a,{icon:"Info",color:"info",className:"me-2"}),s.jsx("strong",{className:"me-auto",children:"Information"}),s.jsx("small",{className:"me-2",children:"10 mins ago"}),s.jsx("button",{type:"button",className:"d-close","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]}),s.jsx(e.Body,{children:"New features are now available in your account."})]}),args:{className:"show position-absolute top-0 end-0"}},d={decorators:[o=>s.jsx("div",{style:{height:"600px",padding:"20px"},className:"position-relative d-flex flex-column gap-3",children:s.jsx(o,{})})],render:()=>s.jsxs(s.Fragment,{children:[s.jsx(e,{className:"show text-bg-primary",children:s.jsxs(e.Body,{className:"d-flex justify-content-between align-items-center",children:[s.jsx("span",{children:"Primary background toast"}),s.jsx("button",{type:"button",className:"d-close d-close-white","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]})}),s.jsx(e,{className:"show text-bg-success",children:s.jsxs(e.Body,{className:"d-flex justify-content-between align-items-center",children:[s.jsx("span",{children:"Success background toast"}),s.jsx("button",{type:"button",className:"d-close d-close-white","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]})}),s.jsx(e,{className:"show text-bg-warning",children:s.jsxs(e.Body,{className:"d-flex justify-content-between align-items-center",children:[s.jsx("span",{children:"Warning background toast"}),s.jsx("button",{type:"button",className:"d-close d-close-white","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]})}),s.jsx(e,{className:"show text-bg-danger",children:s.jsxs(e.Body,{className:"d-flex justify-content-between align-items-center",children:[s.jsx("span",{children:"Danger background toast"}),s.jsx("button",{type:"button",className:"d-close d-close-white","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]})}),s.jsx(e,{className:"show text-bg-info",children:s.jsxs(e.Body,{className:"d-flex justify-content-between align-items-center",children:[s.jsx("span",{children:"Info background toast"}),s.jsx("button",{type:"button",className:"d-close d-close-white","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]})})]}),parameters:{docs:{description:{story:"Toasts with colored backgrounds using Bootstrap text-bg utility classes."}}}},m={decorators:[o=>s.jsx("div",{style:{height:"400px"},className:"position-relative",children:s.jsx(o,{})})],render:o=>s.jsx(e,{...o,children:s.jsxs(e.Body,{className:"d-flex justify-content-between align-items-center",children:[s.jsx("span",{children:"Simple toast without header"}),s.jsx("button",{type:"button",className:"d-close d-close-white","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]})}),args:{className:"show position-absolute top-0 end-0"}},u={decorators:[o=>s.jsx("div",{style:{height:"600px"},className:"position-relative",children:s.jsx(o,{})})],render:()=>s.jsxs("div",{className:"toast-container position-absolute top-0 end-0 p-3",children:[s.jsxs(e,{className:"show mb-2",children:[s.jsxs(e.Header,{children:[s.jsx(a,{icon:"Disc",color:"primary",className:"me-2"}),s.jsx("strong",{className:"me-auto",children:"Message 1"}),s.jsx("small",{className:"me-2",children:"just now"}),s.jsx("button",{type:"button",className:"d-close","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]}),s.jsx(e.Body,{children:"First notification message"})]}),s.jsxs(e,{className:"show mb-2",children:[s.jsxs(e.Header,{children:[s.jsx(a,{icon:"CircleCheck",color:"success",className:"me-2"}),s.jsx("strong",{className:"me-auto",children:"Message 2"}),s.jsx("small",{className:"me-2",children:"2 mins ago"}),s.jsx("button",{type:"button",className:"d-close","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]}),s.jsx(e.Body,{children:"Second notification message"})]}),s.jsxs(e,{className:"show",children:[s.jsxs(e.Header,{children:[s.jsx(a,{icon:"Info",color:"info",className:"me-2"}),s.jsx("strong",{className:"me-auto",children:"Message 3"}),s.jsx("small",{className:"me-2",children:"5 mins ago"}),s.jsx("button",{type:"button",className:"d-close","aria-label":"Close",children:s.jsx(a,{icon:"X"})})]}),s.jsx(e.Body,{children:"Third notification message"})]})]}),parameters:{docs:{description:{story:"Multiple toasts stacked together using a toast-container."}}}};var p,h,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DToast {...args}>
      <DToast.Header>
        <DIcon icon="Disc" color="primary" className="me-2" />
        <strong className="me-auto">Notification</strong>
        <small className="me-2">just now</small>
        <button type="button" className="d-close" aria-label="Close">
          <DIcon icon="X" />
        </button>
      </DToast.Header>
      <DToast.Body>
        Hello! This is a toast message.
      </DToast.Body>
    </DToast>,
  args: {
    className: 'show position-absolute top-0 end-0'
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,x,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DToast {...args}>
      <DToast.Header>
        <DIcon icon="CircleCheck" color="success" className="me-2" />
        <strong className="me-auto">Success</strong>
        <small className="me-2">2 mins ago</small>
        <button type="button" className="d-close" aria-label="Close">
          <DIcon icon="X" />
        </button>
      </DToast.Header>
      <DToast.Body>
        Your changes have been saved successfully!
      </DToast.Body>
    </DToast>,
  args: {
    className: 'show position-absolute top-0 end-0'
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var N,j,D;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DToast {...args}>
      <DToast.Header>
        <DIcon icon="AlertTriangle" color="warning" className="me-2" />
        <strong className="me-auto">Warning</strong>
        <small className="me-2">5 mins ago</small>
        <button type="button" className="d-close" aria-label="Close">
          <DIcon icon="X" />
        </button>
      </DToast.Header>
      <DToast.Body>
        Please review your input before proceeding.
      </DToast.Body>
    </DToast>,
  args: {
    className: 'show position-absolute top-0 end-0'
  }
}`,...(D=(j=n.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var T,w,f;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DToast {...args}>
      <DToast.Header>
        <DIcon icon="CircleX" color="danger" className="me-2" />
        <strong className="me-auto">Error</strong>
        <small className="me-2">1 min ago</small>
        <button type="button" className="d-close" aria-label="Close">
          <DIcon icon="X" />
        </button>
      </DToast.Header>
      <DToast.Body>
        An error occurred while processing your request.
      </DToast.Body>
    </DToast>,
  args: {
    className: 'show position-absolute top-0 end-0'
  }
}`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var v,B,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DToast {...args}>
      <DToast.Header>
        <DIcon icon="Info" color="info" className="me-2" />
        <strong className="me-auto">Information</strong>
        <small className="me-2">10 mins ago</small>
        <button type="button" className="d-close" aria-label="Close">
          <DIcon icon="X" />
        </button>
      </DToast.Header>
      <DToast.Body>
        New features are now available in your account.
      </DToast.Body>
    </DToast>,
  args: {
    className: 'show position-absolute top-0 end-0'
  }
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var S,I,X;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '600px',
    padding: '20px'
  }} className="position-relative d-flex flex-column gap-3">
        <Story />
      </div>],
  render: () => <>
      <DToast className="show text-bg-primary">
        <DToast.Body className="d-flex justify-content-between align-items-center">
          <span>Primary background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
      <DToast className="show text-bg-success">
        <DToast.Body className="d-flex justify-content-between align-items-center">
          <span>Success background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
      <DToast className="show text-bg-warning">
        <DToast.Body className="d-flex justify-content-between align-items-center">
          <span>Warning background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
      <DToast className="show text-bg-danger">
        <DToast.Body className="d-flex justify-content-between align-items-center">
          <span>Danger background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
      <DToast className="show text-bg-info">
        <DToast.Body className="d-flex justify-content-between align-items-center">
          <span>Info background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Toasts with colored backgrounds using Bootstrap text-bg utility classes.'
      }
    }
  }
}`,...(X=(I=d.parameters)==null?void 0:I.docs)==null?void 0:X.source}}};var H,k,M;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DToast {...args}>
      <DToast.Body className="d-flex justify-content-between align-items-center">
        <span>Simple toast without header</span>
        <button type="button" className="d-close d-close-white" aria-label="Close">
          <DIcon icon="X" />
        </button>
      </DToast.Body>
    </DToast>,
  args: {
    className: 'show position-absolute top-0 end-0'
  }
}`,...(M=(k=m.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var W,P,E;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '600px'
  }} className="position-relative">
        <Story />
      </div>],
  render: () => <div className="toast-container position-absolute top-0 end-0 p-3">
      <DToast className="show mb-2">
        <DToast.Header>
          <DIcon icon="Disc" color="primary" className="me-2" />
          <strong className="me-auto">Message 1</strong>
          <small className="me-2">just now</small>
          <button type="button" className="d-close" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Header>
        <DToast.Body>
          First notification message
        </DToast.Body>
      </DToast>
      <DToast className="show mb-2">
        <DToast.Header>
          <DIcon icon="CircleCheck" color="success" className="me-2" />
          <strong className="me-auto">Message 2</strong>
          <small className="me-2">2 mins ago</small>
          <button type="button" className="d-close" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Header>
        <DToast.Body>
          Second notification message
        </DToast.Body>
      </DToast>
      <DToast className="show">
        <DToast.Header>
          <DIcon icon="Info" color="info" className="me-2" />
          <strong className="me-auto">Message 3</strong>
          <small className="me-2">5 mins ago</small>
          <button type="button" className="d-close" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Header>
        <DToast.Body>
          Third notification message
        </DToast.Body>
      </DToast>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Multiple toasts stacked together using a toast-container.'
      }
    }
  }
}`,...(E=(P=u.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const J=["Default","Success","Warning","Danger","Info","ColoredBackgrounds","WithoutHeader","Stacked"];export{d as ColoredBackgrounds,l as Danger,r as Default,i as Info,u as Stacked,c as Success,n as Warning,m as WithoutHeader,J as __namedExportsOrder,G as default};
