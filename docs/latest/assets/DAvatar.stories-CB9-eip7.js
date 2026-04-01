import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as a}from"./config-C3iYXcFk.js";import{D as r}from"./DAvatar-_KsP0kVB.js";import{A as T}from"./constants-CkChkWbF.js";import"./iframe-Bb5qg2cC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CEaegEkl.js";const L={title:"Design System/Components/Avatar",component:r,parameters:{docs:{description:{component:`
## CSS Variables
| Variable                               | Class   | Type            | Description             |
| -------------------------------------- | ------- | --------------- | ----------------------- |
| --${a}avatar-border            | .avatar | css border      | Border box              |
| --${a}avatar-size              | .avatar | css length unit | Size                    |
| --${a}avatar-bg                | .avatar | css color unit  | Text background         |
| --${a}avatar-color             | .avatar | css color unit  | Text color              |
| --${a}avatar-font-weight       | .avatar | css font weight | Text font weight        |
| --${a}avatar-border-radius     | .avatar | css length unit | Border radius           |
        `}}},argTypes:{id:{control:"text",type:"string",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...T],description:"Size",table:{category:"Appearance"}},image:{control:"text",type:"string",description:"URL of the avatar image",table:{category:"Content"}},name:{control:"text",type:"string",description:"The text to display",table:{category:"Content"}},useNameAsInitials:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"},category:"Behavior"},description:"Take the name as name initials"}},tags:["autodocs"]},t={args:{name:"John Doe"}},o={args:{size:"sm",name:"AB",useNameAsInitials:!0}},n={args:{size:"lg",name:"AB",useNameAsInitials:!0}},i={args:{size:"xxl",name:"AB",useNameAsInitials:!0}},c={render:s=>e.jsxs("div",{className:"d-avatar-group",children:[e.jsx(r,{...s}),e.jsx(r,{...s}),e.jsx(r,{...s}),e.jsx(r,{...s})]}),args:{name:"AB",useNameAsInitials:!0},parameters:{docs:{canvas:{sourceState:"shown"}}}},m={args:{image:"https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png",name:"John Doe"}};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'John Doe'
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,A;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    name: 'AB',
    useNameAsInitials: true
  }
}`,...(A=(g=o.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var v,b,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    name: 'AB',
    useNameAsInitials: true
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,f,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'xxl',
    name: 'AB',
    useNameAsInitials: true
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,D,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DAvatar>) => <div className="d-avatar-group">
      <DAvatar {...args} />
      <DAvatar {...args} />
      <DAvatar {...args} />
      <DAvatar {...args} />
    </div>,
  args: {
    name: 'AB',
    useNameAsInitials: true
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var B,N,z;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    image: 'https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png',
    name: 'John Doe'
  }
}`,...(z=(N=m.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};const R=["Default","Small","Medium","Large","Group","Image"];export{t as Default,c as Group,m as Image,i as Large,n as Medium,o as Small,R as __namedExportsOrder,L as default};
