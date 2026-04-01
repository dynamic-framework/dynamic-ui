import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as l}from"./index-CEaegEkl.js";import{D as B}from"./DIcon-DWbFNjUL.js";import{D as W}from"./DBox-DEurDyQT.js";import{D as i}from"./DCard-EEWfhsTG.js";import"./iframe-Bb5qg2cC.js";import"./preload-helper-Dp1pzeXC.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-ioa7HIU9.js";import"./DContext-CT9Hz3uJ.js";import"./index-C-rTwrtA.js";import"./index-CnbxpTGU.js";function o({className:s,style:j,dataAttributes:b,items:N}){return e.jsx("div",{style:j,className:l("d-timeline",s),...b,children:N.map((t,S)=>e.jsxs("div",{className:l("d-timeline-item",{[`d-timeline-item-${t.status}`]:t.status}),children:[e.jsx("div",{className:"d-timeline-item-connector"}),e.jsx("div",{className:"d-timeline-item-icon",children:e.jsx(B,{icon:t.icon||"check",size:"1rem"})}),e.jsxs("div",{className:"d-timeline-item-content",children:[e.jsx("div",{className:"d-timeline-item-title",children:t.title}),t.description&&e.jsx("div",{className:"d-timeline-item-description",children:t.description}),t.time&&e.jsx("div",{className:"d-timeline-item-time",children:t.time}),t.children]})]},S))})}try{o.displayName="DTimeline",o.__docgenInfo={description:"",displayName:"DTimeline",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DTimelineItem[]"}}}}}catch{}const K={title:"Design System/Components/Timeline",component:o,parameters:{docs:{description:{component:`
A modern timeline component inspired by Vercel's design.
It's used to display a list of events in chronological order.

### Key Features:

- **Modern Design:** A clean and minimalist design.
- **Status Indicators:** Each event can have a status (success, warning, danger, info) to visually represent its state.
- **Custom Icons:** You can provide a custom icon for each event.
- **Flexible Content:** Each event can have a title, description, and time.
`}}},argTypes:{items:{control:"object",description:"List of timeline items",table:{category:"Content"}},className:{control:"text",description:"Additional CSS class for the timeline container.",table:{category:"Appearance"}},style:{control:"object",description:"Inline styles for the timeline container.",table:{category:"Appearance"}},dataAttributes:{control:"object",description:"Data attributes for the timeline container.",table:{category:"HTML Attributes"}}},tags:["autodocs"]},n={args:{items:[{title:"Event 1",description:"This is the first event.",time:"10:00 AM"},{title:"Event 2",description:"This is the second event.",time:"11:00 AM"},{title:"Event 3",description:"This is the third event.",time:"12:00 PM"}]}},a={args:{items:[{title:"Deployment Succeeded",description:"The deployment was successful.",time:"10:00 AM",status:"success"},{title:"Build Warning",description:"The build completed with warnings.",time:"11:00 AM",status:"warning"},{title:"Test Failed",description:"The test suite failed.",time:"12:00 PM",status:"danger"},{title:"Info",description:"This is an informational message.",time:"1:00 PM",status:"info"}]}},r={args:{items:[{title:"Deployment Succeeded",description:"The deployment was successful.",time:"10:00 AM",icon:"Check",status:"success"},{title:"Build Warning",description:"The build completed with warnings.",time:"11:00 AM",icon:"TriangleAlert",status:"warning"},{title:"Test Failed",description:"The test suite failed.",time:"12:00 PM",icon:"X",status:"danger"},{title:"Info",description:"This is an informational message.",time:"1:00 PM",icon:"Info",status:"info"}]}},d={args:{items:[{title:"Deployment Succeeded",description:"The deployment was successful.",time:"10:00 AM"},{title:"Build Warning",description:"The build completed with warnings.",time:"11:00 AM",children:e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{children:"Additional content"}),e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h6",{className:"card-title mb-0",children:"Card header"})}),e.jsx(i.Body,{children:"Card simple with content"})]})]})}]}},c={render:s=>e.jsx(W,{style:{width:700},children:e.jsx(o,{...s})}),args:{items:[{title:"Deployment Succeeded",description:"The deployment was successful.",time:"10:00 AM"},{title:"Build Warning",description:"The build completed with warnings.",time:"11:00 AM",children:e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{children:"Additional content"}),e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h6",{className:"card-title mb-0",children:"Card header"})}),e.jsx(i.Body,{children:"Card simple with content"})]})]})}]}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Event 1',
      description: 'This is the first event.',
      time: '10:00 AM'
    }, {
      title: 'Event 2',
      description: 'This is the second event.',
      time: '11:00 AM'
    }, {
      title: 'Event 3',
      description: 'This is the third event.',
      time: '12:00 PM'
    }]
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Deployment Succeeded',
      description: 'The deployment was successful.',
      time: '10:00 AM',
      status: 'success'
    }, {
      title: 'Build Warning',
      description: 'The build completed with warnings.',
      time: '11:00 AM',
      status: 'warning'
    }, {
      title: 'Test Failed',
      description: 'The test suite failed.',
      time: '12:00 PM',
      status: 'danger'
    }, {
      title: 'Info',
      description: 'This is an informational message.',
      time: '1:00 PM',
      status: 'info'
    }]
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,T,D;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Deployment Succeeded',
      description: 'The deployment was successful.',
      time: '10:00 AM',
      icon: 'Check',
      status: 'success'
    }, {
      title: 'Build Warning',
      description: 'The build completed with warnings.',
      time: '11:00 AM',
      icon: 'TriangleAlert',
      status: 'warning'
    }, {
      title: 'Test Failed',
      description: 'The test suite failed.',
      time: '12:00 PM',
      icon: 'X',
      status: 'danger'
    }, {
      title: 'Info',
      description: 'This is an informational message.',
      time: '1:00 PM',
      icon: 'Info',
      status: 'info'
    }]
  }
}`,...(D=(T=r.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var A,w,v;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Deployment Succeeded',
      description: 'The deployment was successful.',
      time: '10:00 AM'
    }, {
      title: 'Build Warning',
      description: 'The build completed with warnings.',
      time: '11:00 AM',
      children: <div className="mt-4">
            <p>Additional content</p>
            <DCard>
              <DCard.Header>
                <h6 className="card-title mb-0">Card header</h6>
              </DCard.Header>
              <DCard.Body>Card simple with content</DCard.Body>
            </DCard>
          </div>
    }]
  }
}`,...(v=(w=d.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var x,M,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <DBox style={{
    width: 700
  }}>
      <DTimeline {...args} />
    </DBox>,
  args: {
    items: [{
      title: 'Deployment Succeeded',
      description: 'The deployment was successful.',
      time: '10:00 AM'
    }, {
      title: 'Build Warning',
      description: 'The build completed with warnings.',
      time: '11:00 AM',
      children: <div className="mt-4">
            <p>Additional content</p>
            <DCard>
              <DCard.Header>
                <h6 className="card-title mb-0">Card header</h6>
              </DCard.Header>
              <DCard.Body>Card simple with content</DCard.Body>
            </DCard>
          </div>
    }]
  }
}`,...(C=(M=c.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const O=["Default","WithStatus","WithIcons","WithChildren","WhiteBackground"];export{n as Default,c as WhiteBackground,d as WithChildren,r as WithIcons,a as WithStatus,O as __namedExportsOrder,K as default};
