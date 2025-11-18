import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as o}from"./index-DKnPkZ2e.js";import{D as S}from"./DBox-ndRERTK3.js";import{D as i}from"./DCard-BbJJSi8v.js";import"./iframe-BFka7-OR.js";function l({className:s,style:j,dataAttributes:N,items:b}){return e.jsx("div",{style:j,className:o("d-timeline",s),...N,children:b.map((t,B)=>e.jsxs("div",{className:o("d-timeline-item",{[`d-timeline-item-${t.status}`]:t.status}),children:[e.jsx("div",{className:"d-timeline-item-connector"}),e.jsx("div",{className:"d-timeline-item-icon",children:e.jsx("i",{className:`bi bi-${t.icon||"check"}`})}),e.jsxs("div",{className:"d-timeline-item-content",children:[e.jsx("div",{className:"d-timeline-item-title",children:t.title}),t.description&&e.jsx("div",{className:"d-timeline-item-description",children:t.description}),t.time&&e.jsx("div",{className:"d-timeline-item-time",children:t.time}),t.children]})]},B))})}try{l.displayName="DTimeline",l.__docgenInfo={description:"",displayName:"DTimeline",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DTimelineItem[]"}}}}}catch{}const F={title:"Design System/Components/Timeline",component:l,parameters:{docs:{description:{component:`
A modern timeline component inspired by Vercel's design.
It's used to display a list of events in chronological order.

### Key Features:

- **Modern Design:** A clean and minimalist design.
- **Status Indicators:** Each event can have a status (success, warning, danger, info) to visually represent its state.
- **Custom Icons:** You can provide a custom icon for each event.
- **Flexible Content:** Each event can have a title, description, and time.
`}}},tags:["autodocs"]},n={args:{items:[{title:"Event 1",description:"This is the first event.",time:"10:00 AM"},{title:"Event 2",description:"This is the second event.",time:"11:00 AM"},{title:"Event 3",description:"This is the third event.",time:"12:00 PM"}]}},a={args:{items:[{title:"Deployment Succeeded",description:"The deployment was successful.",time:"10:00 AM",status:"success"},{title:"Build Warning",description:"The build completed with warnings.",time:"11:00 AM",status:"warning"},{title:"Test Failed",description:"The test suite failed.",time:"12:00 PM",status:"danger"},{title:"Info",description:"This is an informational message.",time:"1:00 PM",status:"info"}]}},r={args:{items:[{title:"Deployment Succeeded",description:"The deployment was successful.",time:"10:00 AM",icon:"check",status:"success"},{title:"Build Warning",description:"The build completed with warnings.",time:"11:00 AM",icon:"exclamation-triangle",status:"warning"},{title:"Test Failed",description:"The test suite failed.",time:"12:00 PM",icon:"x",status:"danger"},{title:"Info",description:"This is an informational message.",time:"1:00 PM",icon:"info-circle",status:"info"}]}},d={args:{items:[{title:"Deployment Succeeded",description:"The deployment was successful.",time:"10:00 AM"},{title:"Build Warning",description:"The build completed with warnings.",time:"11:00 AM",children:e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{children:"Additional content"}),e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h6",{className:"card-title mb-0",children:"Card header"})}),e.jsx(i.Body,{children:"Card simple with content"})]})]})}]}},c={render:s=>e.jsx(S,{style:{width:700},children:e.jsx(l,{...s})}),args:{items:[{title:"Deployment Succeeded",description:"The deployment was successful.",time:"10:00 AM"},{title:"Build Warning",description:"The build completed with warnings.",time:"11:00 AM",children:e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{children:"Additional content"}),e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx("h6",{className:"card-title mb-0",children:"Card header"})}),e.jsx(i.Body,{children:"Card simple with content"})]})]})}]}};var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,g,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var T,y,D;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Deployment Succeeded',
      description: 'The deployment was successful.',
      time: '10:00 AM',
      icon: 'check',
      status: 'success'
    }, {
      title: 'Build Warning',
      description: 'The build completed with warnings.',
      time: '11:00 AM',
      icon: 'exclamation-triangle',
      status: 'warning'
    }, {
      title: 'Test Failed',
      description: 'The test suite failed.',
      time: '12:00 PM',
      icon: 'x',
      status: 'danger'
    }, {
      title: 'Info',
      description: 'This is an informational message.',
      time: '1:00 PM',
      icon: 'info-circle',
      status: 'info'
    }]
  }
}`,...(D=(y=r.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var w,x,v;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var M,A,C;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const H=["Default","WithStatus","WithIcons","WithChildren","WhiteBackground"];export{n as Default,c as WhiteBackground,d as WithChildren,r as WithIcons,a as WithStatus,H as __namedExportsOrder,F as default};
