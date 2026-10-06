import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as pe,a as t}from"./DListGroup-DJcYWjuc.js";import"./iframe-BOlGrI6L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DowJ8Qf7.js";import"./DIcon-CTNbRGzm.js";import"./index-BPJnJB5S.js";import"./config-7dXXkQRG.js";import"./useMediaBreakpointUp-CBOESKxy.js";import"./DContext-BsbKwSe9.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";const ve={title:"Design System/Components/List Group",component:t,subcomponents:{DListGroupItem:pe},parameters:{docs:{description:{component:'\nTo understand in more detail the aspects covered by this component, review the following documentation:\n\n+ [Bootstrap List Group](https://getbootstrap.com/docs/5.3/components/list-group/)\n\n## Container and item elements\n\n`DListGroup` renders a `<ul>` by default (`<ol>` with `numbered`). Plain items render an `<li>`. A `DListGroup.Item` with `href` or `action` renders an `<li>` that carries the item styles, with the `<a>` or `<button>` inside filling it, so screen readers announce the list, its item count and each position ("2 of 4"):\n\n```html\n<ul class="list-group">\n  <li class="list-group-item list-group-item-action d-list-group-item-interactive">\n    <a class="d-list-group-item-link" href="/accounts">Accounts</a>\n  </li>\n</ul>\n```\n\n`className` and `style` go to the `<li>` (the visual item) and `dataAttributes` to the link or button.\n\n`as="div"` keeps Bootstrap\'s flat structure (`<div>` with `<a>`/`<button>` items), which is not announced as a list; prefer the default list for links and buttons. A plain item inside `as="div"` is an `<li>` outside of a list, and `DListGroup.Item` warns about it in development.\n\nA disabled link leaves the tab order and can\'t be activated. An `active` item gets `aria-current`: pass `ariaCurrent="page"` in a navigation or `ariaCurrent="step"` in a flow.\n\n## Accessible name\n\nWhen a screen has more than one list, name each one with `ariaLabel` (or `ariaLabelledBy`, pointing to the heading above it) so screen readers announce what the list contains, not just "list, 3 items". A named `as="div"` container is exposed as `role="group"`, since a plain `<div>` can\'t carry a name.\n\n## CSS Variables\n\nThe Bootstrap documentation provides details on the default [List Group CSS Variables](https://getbootstrap.com/docs/5.3/components/list-group/#css)\n\n        '}}},argTypes:{style:{control:"object",table:{category:"Appearance"}},className:{type:"string",control:"text",table:{category:"Appearance"}},flush:{type:"boolean",control:"boolean",table:{category:"Appearance"}},numbered:{type:"boolean",control:"boolean",table:{category:"Appearance"}},as:{control:"select",options:["ul","ol","div"],description:"Container element. Keep the default list for links and buttons too: they are wrapped in `<li>`. `div` keeps a flat structure that is not announced as a list.",table:{defaultValue:{summary:"ul"},category:"Appearance"}},ariaLabel:{control:"text",type:"string",description:"Accessible name of the list. Ignored when `ariaLabelledBy` is set.",table:{category:"Accessibility"}},ariaLabelledBy:{control:"text",type:"string",description:"Id of a visible element that names the list.",table:{category:"Accessibility"}},horizontal:{control:"select",type:{name:"string"},options:[void 0,!0,"sm","md","lg","xl","xxl"],table:{category:"Appearance"}}},tags:["autodocs"]},o={render:r=>e.jsx(t,{...r,children:[1,2,3].map(s=>e.jsx(t.Item,{children:"Lorem ipsum dolor sit amet consectetur."},s))})},a={render:r=>e.jsx(t,{...r,children:[1,2,3].map(s=>e.jsx(t.Item,{active:s===1,children:"Lorem ipsum dolor sit amet consectetur."},s))})},n={render:r=>e.jsx(t,{...r,children:[1,2,3].map(s=>e.jsx(t.Item,{disabled:s===1,children:"Lorem ipsum dolor sit amet consectetur."},s))})},i={render:r=>e.jsx(t,{...r,children:[1,2,3].map(s=>e.jsx(t.Item,{href:"#",active:s===1,children:"Lorem ipsum dolor sit amet consectetur."},s))}),args:{}},c={render:r=>e.jsx(t,{...r,children:[1,2,3].map(s=>e.jsx(t.Item,{as:"button",active:s===1,children:"Lorem ipsum dolor sit amet consectetur."},s))}),args:{}},m={parameters:{docs:{description:{story:'Named with the heading above it through `ariaLabelledBy`, so a screen reader announces "Recent movements, list, 3 items".'}}},render:r=>e.jsxs("section",{children:[e.jsx("h3",{id:"recent-movements",className:"h6",children:"Recent movements"}),e.jsxs(t,{...r,ariaLabelledBy:"recent-movements",children:[e.jsx(t.Item,{children:"Transfer received"}),e.jsx(t.Item,{children:"Card payment"}),e.jsx(t.Item,{children:"Cash withdrawal"})]})]})},p={render:r=>e.jsx(t,{...r,children:[1,2,3].map(s=>e.jsx(t.Item,{children:"Lorem ipsum dolor sit amet consectetur."},s))}),args:{flush:!0}},d={render:r=>e.jsx(t,{...r,children:[1,2,3].map(s=>e.jsx(t.Item,{children:"Lorem ipsum dolor sit amet consectetur."},s))}),args:{numbered:!0}},l={render:r=>e.jsx(t,{...r,children:[1,2,3].map(s=>e.jsx(t.Item,{children:"Lorem ipsum dolor sit amet consectetur."},s))}),args:{horizontal:!0}},u={render:r=>e.jsx(t,{...r,children:["primary","secondary","success","info","warning","danger"].map(s=>e.jsx(t.Item,{color:s,children:"Lorem ipsum dolor sit amet consectetur."},s))})},h={render:r=>e.jsx(t,{...r,children:["primary","secondary","success","info","warning","danger"].map(s=>e.jsx(t.Item,{color:s,action:!0,children:"Lorem ipsum dolor sit amet consectetur."},s))}),args:{}},g={render:r=>e.jsx(t,{...r,children:[1,2,3].map(s=>e.jsxs(t.Item,{href:"#",children:[e.jsxs("div",{className:"d-flex w-100 justify-content-between",children:[e.jsx("h5",{className:"mb-1",children:"List group item heading"}),e.jsx("small",{children:"3 days ago"})]}),e.jsx("p",{className:"mb-1",children:"Some placeholder content in a paragraph."}),e.jsx("small",{children:"And some small print."})]},s))}),args:{}},L={render:r=>e.jsxs(t,{...r,children:[e.jsx(t.Item,{iconStart:"Home",href:"#",children:"Home"}),e.jsx(t.Item,{iconStart:"User",href:"#",children:"Profile"}),e.jsx(t.Item,{iconStart:"Settings",href:"#",children:"Settings"}),e.jsx(t.Item,{iconStart:"Mail",href:"#",children:"Messages"})]}),args:{},parameters:{docs:{description:{story:"List group items with start icons."}}}},D={render:r=>e.jsxs(t,{...r,children:[e.jsx(t.Item,{iconEnd:"ChevronRight",href:"#",children:"Dashboard"}),e.jsx(t.Item,{iconEnd:"ChevronRight",href:"#",children:"Analytics"}),e.jsx(t.Item,{iconEnd:"ChevronRight",href:"#",children:"Reports"})]}),args:{},parameters:{docs:{description:{story:"List group items with end icons, useful for navigation menus."}}}},I={render:r=>e.jsxs(t,{...r,children:[e.jsx(t.Item,{iconStart:"CircleCheck",iconEnd:"ChevronRight",color:"success",action:!0,active:!0,children:"Completed Tasks"}),e.jsx(t.Item,{iconStart:"Clock",iconEnd:"ChevronRight",color:"warning",action:!0,children:"Pending Tasks"}),e.jsx(t.Item,{iconStart:"CircleX",iconEnd:"ChevronRight",color:"danger",action:!0,children:"Cancelled Tasks"})]}),args:{},parameters:{docs:{description:{story:"List group items with both start and end icons, combined with colors."}}}};var G,b,y;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,v,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} active={item === 1}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,S,C;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} disabled={item === 1}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var w,k,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} href="#" active={item === 1}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {}
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var R,E,N;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item} as="button" active={item === 1}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {}
}`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var B,T,W;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Named with the heading above it through \`ariaLabelledBy\`, so a screen reader announces "Recent movements, list, 3 items".'
      }
    }
  },
  render: args => <section>
      <h3 id="recent-movements" className="h6">Recent movements</h3>
      <DListGroup {...args} ariaLabelledBy="recent-movements">
        <DListGroup.Item>Transfer received</DListGroup.Item>
        <DListGroup.Item>Card payment</DListGroup.Item>
        <DListGroup.Item>Cash withdrawal</DListGroup.Item>
      </DListGroup>
    </section>
}`,...(W=(T=m.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var V,H,z;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    flush: true
  }
}`,...(z=(H=p.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var P,M,F;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    numbered: true
  }
}`,...(F=(M=d.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var U,X,_;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {[1, 2, 3].map(item => <DListGroup.Item key={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {
    horizontal: true
  }
}`,...(_=(X=l.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var K,O,q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(item => <DListGroup.Item key={item} color={item}>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var J,Q,Y;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <DListGroup {...args}>
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(item => <DListGroup.Item key={item} color={item} action>
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>)}
    </DListGroup>,
  args: {}
}`,...(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
  args: {}
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,se;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'List group items with start icons.'
      }
    }
  }
}`,...(se=(re=L.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ae,ne;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'List group items with end icons, useful for navigation menus.'
      }
    }
  }
}`,...(ne=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,ce,me;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'List group items with both start and end icons, combined with colors.'
      }
    }
  }
}`,...(me=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const xe=["Default","ActiveItems","DisableItems","Links","Buttons","WithAccessibleName","Flush","Numbered","Horizontal","Variants","ActionVariants","CustomContent","WithIcons","WithIconsEnd","WithBothIcons"];export{h as ActionVariants,a as ActiveItems,c as Buttons,g as CustomContent,o as Default,n as DisableItems,p as Flush,l as Horizontal,i as Links,d as Numbered,u as Variants,m as WithAccessibleName,I as WithBothIcons,L as WithIcons,D as WithIconsEnd,xe as __namedExportsOrder,ve as default};
