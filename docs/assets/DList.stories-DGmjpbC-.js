import{j as e}from"./jsx-runtime-DQ32znRX.js";import{D as o,a as c}from"./DList-CuPEhQSU.js";const I={title:"Design System/Components/List",component:o,argTypes:{style:{control:"object"},className:{type:"string",control:"text"},flush:{type:"boolean",control:"boolean"},horizontal:{type:"boolean",control:"boolean"},numbered:{type:"boolean",control:"boolean"},horizontalBreakpoint:{control:"select",type:{name:"string"},options:[void 0,"sm","md","lg","xl","xxl"]}}},s={render:r=>e.jsx(o,{...r,children:[1,2,3].map(t=>e.jsx(c,{children:"Lorem ipsum dolor sit amet consectetur."},t))})},a={render:r=>e.jsx(o,{...r,children:[1,2,3].map(t=>e.jsx(c,{children:"Lorem ipsum dolor sit amet consectetur."},t))}),args:{flush:!0}},n={render:r=>e.jsx(o,{...r,children:[1,2,3].map(t=>e.jsx(c,{children:"Lorem ipsum dolor sit amet consectetur."},t))}),args:{numbered:!0}},i={render:r=>e.jsx(o,{...r,children:[1,2,3].map(t=>e.jsx(c,{children:"Lorem ipsum dolor sit amet consectetur."},t))}),args:{horizontal:!0}},m={decorators:[r=>e.jsx("div",{className:"position-relative d-flex flex-column gap-3",children:e.jsx(r,{})})],render:r=>e.jsx(o,{...r,children:[1,2,3].map(t=>e.jsx(c,{children:"Lorem ipsum dolor sit amet consectetur."},t))}),args:{horizontal:!0,horizontalBreakpoint:"md"},name:"Horizontal with breakpoint"};var l,d,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <DList {...args}>
      {[1, 2, 3].map(item => <DListItem key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListItem>)}
    </DList>
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,L,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <DList {...args}>
      {[1, 2, 3].map(item => <DListItem key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListItem>)}
    </DList>,
  args: {
    flush: true
  }
}`,...(g=(L=a.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var h,D,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <DList {...args}>
      {[1, 2, 3].map(item => <DListItem key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListItem>)}
    </DList>,
  args: {
    numbered: true
  }
}`,...(x=(D=n.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var b,j,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <DList {...args}>
      {[1, 2, 3].map(item => <DListItem key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListItem>)}
    </DList>,
  args: {
    horizontal: true
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var f,z,k;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <div className="position-relative d-flex flex-column gap-3">
        <Story />
      </div>],
  render: args => <DList {...args}>
      {[1, 2, 3].map(item => <DListItem key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListItem>)}
    </DList>,
  args: {
    horizontal: true,
    horizontalBreakpoint: 'md'
  },
  name: 'Horizontal with breakpoint'
}`,...(k=(z=m.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const S=["Default","Flush","Numbered","Horizontal","HorizontalWithBreakpoint"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Flush:a,Horizontal:i,HorizontalWithBreakpoint:m,Numbered:n,__namedExportsOrder:S,default:I},Symbol.toStringTag,{value:"Module"}));export{_ as D,s as a};
