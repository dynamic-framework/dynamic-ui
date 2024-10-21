import{j as s}from"./jsx-runtime-CKrituN3.js";import{D as e}from"./DToast-CXYMCtKi.js";import{D as r}from"./DIcon-1scRBrNx.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ELyB7pIJ.js";import"./config-CUZHf55T.js";import"./DContext-CSLUP0I2.js";import"./index-BtM5VmRH.js";const N={title:"Design System/Components/Toast",component:e,parameters:{layout:"fullscreen"},argTypes:{className:{control:"text",type:"string"},style:{control:"object"}},tags:["autodocs"]},a={decorators:[o=>s.jsx("div",{style:{height:"400px"},className:"position-relative",children:s.jsx(o,{})})],render:o=>s.jsxs(e,{...o,children:[s.jsxs(e.Header,{children:[s.jsx(r,{icon:"square-fill",theme:"secondary",className:"me-2"}),s.jsx("strong",{className:"me-auto",children:"Bootstrap"}),s.jsx("small",{className:"me-2",children:"11 mins ago"}),s.jsx("button",{type:"button",className:"d-close","aria-label":"Close",children:s.jsx(r,{icon:"x"})})]}),s.jsx(e.Body,{children:"Toast body"})]}),args:{className:"show position-absolute top-0 end-0"}},t={decorators:[o=>s.jsx("div",{style:{height:"400px"},className:"position-relative",children:s.jsx(o,{})})],render:o=>s.jsx(e,{...o,children:s.jsx(e.Body,{children:s.jsx("span",{children:"Modal body"})})}),args:{className:"show position-absolute top-0 end-0 text-bg-secondary"}};var l,i,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DToast {...args}>
      <DToast.Header>
        <DIcon icon="square-fill" theme="secondary" className="me-2" />
        <strong className="me-auto">Bootstrap</strong>
        <small className="me-2">11 mins ago</small>
        <button type="button" className="d-close" aria-label="Close">
          <DIcon icon="x" />
        </button>
      </DToast.Header>
      <DToast.Body>
        Toast body
      </DToast.Body>
    </DToast>,
  args: {
    className: 'show position-absolute top-0 end-0'
  }
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DToast {...args}>
      <DToast.Body>
        <span>Modal body</span>
      </DToast.Body>
    </DToast>,
  args: {
    className: 'show position-absolute top-0 end-0 text-bg-secondary'
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const T=["Default","WithoutHeader"];export{a as Default,t as WithoutHeader,T as __namedExportsOrder,N as default};
