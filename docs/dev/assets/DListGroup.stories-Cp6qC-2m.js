import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as ae,a as r}from"./DListGroup-BwGP1HVM.js";import"./iframe-BFBKoHXE.js";import"./index-Cz4ROImR.js";import"./DIcon-CBKX-Ky5.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-Dj19RGee.js";import"./DContext-Bs8E6lMM.js";import"./index-Ddf9zV7q.js";import"./index-BbNkzkJF.js";const De={title:"Design System/Components/ListGroup",component:r,subcomponents:{DListGroupItem:ae},parameters:{docs:{description:{component:`
To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap List Group](https://getbootstrap.com/docs/5.3/components/list-group/)

## CSS Variables

The Bootstrap documentation provides details on the default [List Group CSS Variables](https://getbootstrap.com/docs/5.3/components/list-group/#css)

        `}}},argTypes:{style:{control:"object"},className:{type:"string",control:"text"},flush:{type:"boolean",control:"boolean"},numbered:{type:"boolean",control:"boolean"},horizontal:{control:"select",type:{name:"string"},options:[void 0,!0,"sm","md","lg","xl","xxl"]}},tags:["autodocs"]},o={render:s=>e.jsx(r,{...s,children:[1,2,3].map(t=>e.jsx(r.Item,{children:"Lorem ipsum dolor sit amet consectetur."},t))})},i={render:s=>e.jsx(r,{...s,children:[1,2,3].map(t=>e.jsx(r.Item,{active:t===1,children:"Lorem ipsum dolor sit amet consectetur."},t))})},a={render:s=>e.jsx(r,{...s,children:[1,2,3].map(t=>e.jsx(r.Item,{disabled:t===1,children:"Lorem ipsum dolor sit amet consectetur."},t))})},n={render:s=>e.jsx(r,{...s,children:[1,2,3].map(t=>e.jsx(r.Item,{href:"#",active:t===1,children:"Lorem ipsum dolor sit amet consectetur."},t))}),args:{as:"div"}},c={render:s=>e.jsx(r,{...s,children:[1,2,3].map(t=>e.jsx(r.Item,{as:"button",active:t===1,children:"Lorem ipsum dolor sit amet consectetur."},t))}),args:{as:"div"}},m={render:s=>e.jsx(r,{...s,children:[1,2,3].map(t=>e.jsx(r.Item,{children:"Lorem ipsum dolor sit amet consectetur."},t))}),args:{flush:!0}},p={render:s=>e.jsx(r,{...s,children:[1,2,3].map(t=>e.jsx(r.Item,{children:"Lorem ipsum dolor sit amet consectetur."},t))}),args:{numbered:!0}},d={render:s=>e.jsx(r,{...s,children:[1,2,3].map(t=>e.jsx(r.Item,{children:"Lorem ipsum dolor sit amet consectetur."},t))}),args:{horizontal:!0}},u={render:s=>e.jsx(r,{...s,children:["primary","secondary","success","info","warning","danger"].map(t=>e.jsx(r.Item,{color:t,children:"Lorem ipsum dolor sit amet consectetur."},t))})},l={render:s=>e.jsx(r,{...s,children:["primary","secondary","success","info","warning","danger"].map(t=>e.jsx(r.Item,{color:t,action:!0,children:"Lorem ipsum dolor sit amet consectetur."},t))}),args:{as:"div"}},h={render:s=>e.jsx(r,{...s,children:[1,2,3].map(t=>e.jsxs(r.Item,{href:"#",children:[e.jsxs("div",{className:"d-flex w-100 justify-content-between",children:[e.jsx("h5",{className:"mb-1",children:"List group item heading"}),e.jsx("small",{children:"3 days ago"})]}),e.jsx("p",{className:"mb-1",children:"Some placeholder content in a paragraph."}),e.jsx("small",{children:"And some small print."})]},t))}),args:{as:"div"}},g={render:s=>e.jsxs(r,{...s,children:[e.jsx(r.Item,{iconStart:"Home",href:"#",children:"Home"}),e.jsx(r.Item,{iconStart:"User",href:"#",children:"Profile"}),e.jsx(r.Item,{iconStart:"Settings",href:"#",children:"Settings"}),e.jsx(r.Item,{iconStart:"Mail",href:"#",children:"Messages"})]}),args:{as:"div"},parameters:{docs:{description:{story:"List group items with start icons."}}}},L={render:s=>e.jsxs(r,{...s,children:[e.jsx(r.Item,{iconEnd:"ChevronRight",href:"#",children:"Dashboard"}),e.jsx(r.Item,{iconEnd:"ChevronRight",href:"#",children:"Analytics"}),e.jsx(r.Item,{iconEnd:"ChevronRight",href:"#",children:"Reports"})]}),args:{as:"div"},parameters:{docs:{description:{story:"List group items with end icons, useful for navigation menus."}}}},D={render:s=>e.jsxs(r,{...s,children:[e.jsx(r.Item,{iconStart:"CircleCheck",iconEnd:"ChevronRight",color:"success",action:!0,active:!0,children:"Completed Tasks"}),e.jsx(r.Item,{iconStart:"Clock",iconEnd:"ChevronRight",color:"warning",action:!0,children:"Pending Tasks"}),e.jsx(r.Item,{iconStart:"CircleX",iconEnd:"ChevronRight",color:"danger",action:!0,children:"Cancelled Tasks"})]}),args:{as:"div"},parameters:{docs:{description:{story:"List group items with both start and end icons, combined with colors."}}}};var G,I,x;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>
}`,...(x=(I=o.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var j,v,f;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} active={item === 1}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,S,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} disabled={item === 1}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,k,w;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} href="#" active={item === 1}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    as: 'div'
  }
}`,...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var E,R,N;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} as="button" active={item === 1}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    as: 'div'
  }
}`,...(N=(R=c.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var T,A,B;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    flush: true
  }
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var H,V,W;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    numbered: true
  }
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var z,M,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    horizontal: true
  }
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var F,U,X;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(item => <DListGroup.Item key={item} color={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>
}`,...(X=(U=u.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var _,O,q;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(item => <DListGroup.Item key={item} color={item} action>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    as: 'div'
  }
}`,...(q=(O=l.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} href="#">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    as: 'div'
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      <DListGroup.Item iconStart="Home" href="#">
        Home
      </DListGroup.Item>
      <DListGroup.Item iconStart="User" href="#">
        Profile
      </DListGroup.Item>
      <DListGroup.Item iconStart="Settings" href="#">
        Settings
      </DListGroup.Item>
      <DListGroup.Item iconStart="Mail" href="#">
        Messages
      </DListGroup.Item>
    </DListGroup>,
  args: {
    as: 'div'
  },
  parameters: {
    docs: {
      description: {
        story: 'List group items with start icons.'
      }
    }
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,se;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      <DListGroup.Item iconEnd="ChevronRight" href="#">
        Dashboard
      </DListGroup.Item>
      <DListGroup.Item iconEnd="ChevronRight" href="#">
        Analytics
      </DListGroup.Item>
      <DListGroup.Item iconEnd="ChevronRight" href="#">
        Reports
      </DListGroup.Item>
    </DListGroup>,
  args: {
    as: 'div'
  },
  parameters: {
    docs: {
      description: {
        story: 'List group items with end icons, useful for navigation menus.'
      }
    }
  }
}`,...(se=(re=L.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,oe,ie;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      <DListGroup.Item iconStart="CircleCheck" iconEnd="ChevronRight" color="success" action active>
        Completed Tasks
      </DListGroup.Item>
      <DListGroup.Item iconStart="Clock" iconEnd="ChevronRight" color="warning" action>
        Pending Tasks
      </DListGroup.Item>
      <DListGroup.Item iconStart="CircleX" iconEnd="ChevronRight" color="danger" action>
        Cancelled Tasks
      </DListGroup.Item>
    </DListGroup>,
  args: {
    as: 'div'
  },
  parameters: {
    docs: {
      description: {
        story: 'List group items with both start and end icons, combined with colors.'
      }
    }
  }
}`,...(ie=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Ge=["Default","ActiveItems","DisableItems","Links","Buttons","Flush","Numbered","Horizontal","Variants","ActionVariants","CustomContent","WithIcons","WithIconsEnd","WithBothIcons"];export{l as ActionVariants,i as ActiveItems,c as Buttons,h as CustomContent,o as Default,a as DisableItems,m as Flush,d as Horizontal,n as Links,p as Numbered,u as Variants,D as WithBothIcons,g as WithIcons,L as WithIconsEnd,Ge as __namedExportsOrder,De as default};
