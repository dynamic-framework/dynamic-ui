import{j as o}from"./jsx-runtime-Yb_4y5hn.js";import{D as t}from"./DToast-DsMnxvi5.js";import{P as e}from"./config-BV4l-vIF.js";import{D as c}from"./DIcon-NWah5INO.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ELyB7pIJ.js";import"./DContext-K5yUkfPZ.js";import"./index-Jr15HXM4.js";const N={title:"Design System/Components/Toast",component:t,parameters:{layout:"fullscreen",docs:{description:{component:`
To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Toast](https://getbootstrap.com/docs/5.3/components/toasts/)

## CSS Variables
The Bootstrap documentation provides details on the default [Toast CSS Variables](https://getbootstrap.com/docs/5.3/components/toasts/#css)

| Variable                                | Classes    | Type              | Description                        |
|-----------------------------------------|------------|-------------------|------------------------------------|
| --${e}toast-header-gap          | .toast     | css length unit   | Space between content              |
| --${e}toast-body-gap            | .toast     | css font weight   | Space between content              |
| --${e}toast-color               | .toast     | css color         | Toast body text color              |
| --${e}toast-close-color         | .toast     | css length unit   | Close icon color                   |
| --${e}toast-header-color        | .toast     | css length unit   | Toast header text color            |
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"}},tags:["autodocs"]},a={decorators:[s=>o.jsx("div",{style:{height:"400px"},className:"position-relative",children:o.jsx(s,{})})],render:s=>o.jsxs(t,{...s,children:[o.jsxs(t.Header,{children:[o.jsx(c,{icon:"square-fill",theme:"secondary",className:"me-2"}),o.jsx("strong",{className:"me-auto",children:"Bootstrap"}),o.jsx("small",{className:"me-2",children:"11 mins ago"}),o.jsx("button",{type:"button",className:"d-close","aria-label":"Close",children:o.jsx(c,{icon:"x"})})]}),o.jsx(t.Body,{children:"Toast body"})]}),args:{className:"show position-absolute top-0 end-0"}},r={decorators:[s=>o.jsx("div",{style:{height:"400px"},className:"position-relative",children:o.jsx(s,{})})],render:s=>o.jsx(t,{...s,children:o.jsx(t.Body,{children:o.jsx("span",{children:"Modal body"})})}),args:{className:"show position-absolute top-0 end-0 text-bg-secondary"}};var n,l,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const f=["Default","WithoutHeader"];export{a as Default,r as WithoutHeader,f as __namedExportsOrder,N as default};
