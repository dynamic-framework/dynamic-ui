import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{r as A}from"./index-BwDkhjyp.js";import{c as L}from"./index-ELyB7pIJ.js";import{C as O,A as G}from"./constants-BfTaJ1B2.js";import{P as r}from"./config-BV4l-vIF.js";import"./_commonjsHelpers-BosuxZz1.js";function s({id:a,size:c,image:m,name:t,useNameAsInitials:f=!1,theme:p="secondary",variant:g,className:M,style:R,dataAttributes:k}){const J=A.useMemo(()=>({"d-avatar":!0,[g?`d-avatar-${g}-${p}`:`d-avatar-${p}`]:!0,[`d-avatar-${c}`]:!!c}),[g,p,c]),v=A.useMemo(()=>{if(t)return f?t:t.split(/\s+/).map(y=>y.charAt(0)).join("").toUpperCase()},[t,f]);return e.jsxs("div",{className:L(J,M),style:R,id:a,...k,children:[m&&e.jsx("img",{src:m,alt:t,className:"d-avatar-img"}),v&&!m&&e.jsx("span",{className:"d-avatar-name",children:v})]})}try{s.displayName="DAvatar",s.__docgenInfo={description:"",displayName:"DAvatar",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"xxl"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},useNameAsInitials:{defaultValue:{value:"false"},description:"",name:"useNameAsInitials",required:!1,type:{name:"boolean | undefined"}},theme:{defaultValue:{value:"secondary"},description:"",name:"theme",required:!1,type:{name:"string | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const P={title:"Design System/Components/Avatar",component:s,parameters:{docs:{description:{component:`
## CSS Variables
| Variable                               | Class   | Type            | Description             |
| -------------------------------------- | ------- | --------------- | ----------------------- |
| --${r}avatar-border            | .avatar | css border      | Border box              |
| --${r}avatar-size              | .avatar | css length unit | Size                    |
| --${r}avatar-bg                | .avatar | css color unit  | Text background         |
| --${r}avatar-color             | .avatar | css color unit  | Text color              |
| --${r}avatar-font-weight       | .avatar | css font weight | Text font weight        |
| --${r}avatar-border-radius     | .avatar | css length unit | Border radius           |
        `}}},argTypes:{id:{control:"text",type:"string"},className:{control:"text",type:"string"},style:{control:"object"},size:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...G],description:"Size"},image:{control:"text",type:"string",description:"URL of the avatar image"},name:{control:"text",type:"string",description:"The text to display"},useNameAsInitials:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Take the name as name initials"},theme:{control:"select",type:"string",options:O,table:{defaultValue:{summary:"secondary"}},description:"Theme"},variant:{control:{type:"radio",labels:{undefined:"default"}},type:"string",options:[void 0,"light","dark"],description:"Variant"}},tags:["autodocs"]},n={args:{name:"John Doe"}},o={args:{size:"sm",name:"AB",useNameAsInitials:!0}},i={args:{size:"lg",name:"AB",useNameAsInitials:!0}},l={args:{size:"xxl",name:"AB",useNameAsInitials:!0}},d={render:a=>e.jsxs("div",{className:"d-avatar-group",children:[e.jsx(s,{...a}),e.jsx(s,{...a}),e.jsx(s,{...a}),e.jsx(s,{...a})]}),args:{name:"AB",useNameAsInitials:!0},parameters:{docs:{canvas:{sourceState:"shown"}}}},u={args:{image:"https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png",name:"John Doe"}};var x,h,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'John Doe'
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var N,S,D;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    name: 'AB',
    useNameAsInitials: true
  }
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var _,V,I;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    name: 'AB',
    useNameAsInitials: true
  }
}`,...(I=(V=i.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var j,B,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'xxl',
    name: 'AB',
    useNameAsInitials: true
  }
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var q,z,T;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var $,E,w;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    image: 'https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png',
    name: 'John Doe'
  }
}`,...(w=(E=u.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const Q=["Default","Small","Medium","Large","Group","Image"];export{n as Default,d as Group,u as Image,l as Large,i as Medium,o as Small,Q as __namedExportsOrder,P as default};
