import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as h}from"./config-7dXXkQRG.js";import{D as r}from"./DAlert-ByoDv-PH.js";import{I as f,C as K,a as Q}from"./constants-Cykb4qS-.js";import{D as Z}from"./DContext-BsbKwSe9.js";import"./index-DowJ8Qf7.js";import"./iframe-BOlGrI6L.js";import"./preload-helper-Dp1pzeXC.js";import"./DIcon-CTNbRGzm.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-CBOESKxy.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";const pe={title:"Design System/Components/Alert",component:r,parameters:{docs:{description:{component:`
To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Alerts](https://getbootstrap.com/docs/5.3/components/alerts/)

## Accessibility: live region role

| \`role\`            | Screen reader behavior            | Use it for                                             |
|---------------------|-----------------------------------|--------------------------------------------------------|
| \`alert\` (default) | Interrupts what it is announcing  | Critical errors that need immediate attention          |
| \`status\`          | Announces without interrupting    | Confirmations and other dynamic, non-critical messages |
| \`none\`            | Not announced as a live region    | Static content already on screen when the page loads   |

Pass \`closeAriaLabel\` with \`showClose\` to name the close button in the app's language (defaults to \`"Close"\`).

## CSS Variables

The Bootstrap documentation provides details on the default [Alert CSS Variables](https://getbootstrap.com/docs/5.3/components/alerts/#css)

| Variable                                  | Class            | Type             | Description              |
|-------------------------------------------|------------------|------------------|--------------------------|
| --${h}alert-gap                   | .alert           | css length unit  | Content separation       |
| --${h}alert-icon-color            | .alert           | css color unit   | Toast icon color         |
| --${h}alert-close-icon-size       | .alert           | css length unit  | Toast close icon size    |
        `}}},argTypes:{id:{control:"text",type:"string",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},color:{control:"select",type:"string",options:K,table:{defaultValue:{summary:"success"},category:"Appearance"},description:"Alert color"},icon:{control:"select",type:"string",options:f,description:"Name of icon to use (in kebab-case)",table:{category:"Icon"}},showIcon:{control:"boolean",type:"boolean",description:"Show the leading icon. When `false`, `icon` is ignored.",table:{defaultValue:{summary:"true"},category:"Icon"}},iconFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},role:{control:"select",options:["alert","status","none"],description:"Live region role: `alert` interrupts the screen reader, `status` announces without interrupting, `none` is not a live region.",table:{defaultValue:{summary:"alert"},category:"Accessibility"}},closeAriaLabel:{control:"text",type:"string",description:"Accessible name of the close button.",table:{defaultValue:{summary:"Close"},category:"Accessibility"}},showClose:{control:"boolean",type:"boolean",description:"Show close button",table:{category:"Behavior"}},iconClose:{control:"select",type:"string",options:f,description:"Name of icon to use (in kebab-case)",table:{category:"Icon"}},iconCloseFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconCloseFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconCloseMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},onClose:{action:"onClose",table:{category:"Events"}}},tags:["autodocs"]},n={args:{color:"success",children:"This is a success alert",className:void 0,icon:void 0,iconClose:void 0,showClose:!1,id:void 0,style:void 0}},a={args:{color:"danger",children:"This is a danger alert"}},t={args:{color:"info",children:"This is a info alert"}},i={args:{color:"warning",children:"This is a warning alert"}},c={parameters:{docs:{description:{story:'A non-critical message with `role="status"`: the screen reader announces it without interrupting the user.'}}},args:{color:"info",role:"status",children:"Your balance is updated every hour."}},l={parameters:{docs:{description:{story:"With `showIcon={false}` the alert renders only its text, for informative blocks where an icon would compete with the content."}}},args:{color:"info",showIcon:!1,children:"Movements from the last 90 days are available in the detail view."}},d={render:s=>e.jsx(r,{...s,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-2",children:"Heading"}),e.jsx("p",{className:"m-0",children:"Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services"}),e.jsx("a",{href:"#",className:"text-primary",children:"Link"})]})}),args:{color:"success"}},m={render:s=>e.jsx(r,{...s,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-2",children:"Heading"}),e.jsx("p",{className:"m-0",children:"Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services"}),e.jsx("a",{href:"#",className:"text-primary",children:"Link"})]})}),args:{color:"danger"}},u={render:s=>e.jsx(r,{...s,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-2",children:"Heading"}),e.jsx("p",{className:"m-0",children:"Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services"}),e.jsx("a",{href:"#",className:"text-primary",children:"Link"})]})}),args:{color:"info"}},p={render:s=>e.jsx(r,{...s,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-2",children:"Heading"}),e.jsx("p",{className:"m-0",children:"Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services"}),e.jsx("a",{href:"#",className:"text-primary",children:"Link"})]})}),args:{color:"warning"}},o={render:s=>e.jsx(Z,{...Q,children:e.jsx(r,{...s,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-2",children:"Heading"}),e.jsx("p",{className:"m-0",children:"Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en línea"}),e.jsx("a",{href:"#",className:"text-primary",children:"Link"})]})})}),args:{showClose:!0,color:"info"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var g,y,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: 'success',
    children: 'This is a success alert',
    className: undefined,
    icon: undefined,
    iconClose: undefined,
    showClose: false,
    id: undefined,
    style: undefined
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var M,v,P;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    color: 'danger',
    children: 'This is a danger alert'
  }
}`,...(P=(v=a.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var A,D,x;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    color: 'info',
    children: 'This is a info alert'
  }
}`,...(x=(D=t.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var N,S,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    children: 'This is a warning alert'
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,I,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A non-critical message with \`role="status"\`: the screen reader announces it without interrupting the user.'
      }
    }
  },
  args: {
    color: 'info',
    role: 'status',
    children: 'Your balance is updated every hour.'
  }
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var j,T,L;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'With \`showIcon={false}\` the alert renders only its text, for informative blocks where an icon would compete with the content.'
      }
    }
  },
  args: {
    color: 'info',
    showIcon: false,
    children: 'Movements from the last 90 days are available in the detail view.'
  }
}`,...(L=(T=l.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var k,E,H;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <DAlert {...args}>
      <div>
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services Our offices are open from 9:00 AM
          to 1:00 PM this Monday, December 1st. Please consider using our online services
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services
        </p>
        <a href="#" className="text-primary">Link</a>
      </div>
    </DAlert>,
  args: {
    color: 'success'
  }
}`,...(H=(E=d.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var R,_,V;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <DAlert {...args}>
      <div>
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services Our offices are open from 9:00 AM
          to 1:00 PM this Monday, December 1st. Please consider using our online services
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services
        </p>
        <a href="#" className="text-primary">Link</a>
      </div>
    </DAlert>,
  args: {
    color: 'danger'
  }
}`,...(V=(_=m.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var W,F,B;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <DAlert {...args}>
      <div>
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services Our offices are open from 9:00 AM
          to 1:00 PM this Monday, December 1st. Please consider using our online services
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services
        </p>
        <a href="#" className="text-primary">Link</a>
      </div>
    </DAlert>,
  args: {
    color: 'info'
  }
}`,...(B=(F=u.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var X,$,z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <DAlert {...args}>
      <div>
        <h5 className="mb-2">Heading</h5>
        <p className="m-0">
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services Our offices are open from 9:00 AM
          to 1:00 PM this Monday, December 1st. Please consider using our online services
          Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st.
          Please consider using our online services
        </p>
        <a href="#" className="text-primary">Link</a>
      </div>
    </DAlert>,
  args: {
    color: 'warning'
  }
}`,...(z=($=p.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var G,Y,U,q,J;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof DAlert>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DAlert {...args}>
        <div>
          <h5 className="mb-2">Heading</h5>
          <p className="m-0">Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en línea</p>
          <a href="#" className="text-primary">Link</a>
        </div>
      </DAlert>
    </DContextProvider>,
  args: {
    showClose: true,
    color: 'info'
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(U=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:U.source},description:{story:"To use alerts with Material Symbols style use a `DContextProvider` with `familyClass`\nand the flag `materialStyle=true` or use the flags directly over the\n`DAlert` component as a props",...(J=(q=o.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};const he=["Success","Danger","Info","Warning","StatusRole","WithoutIcon","SuccessIcon","DangerIcon","InfoIcon","WarningIcon","MaterialStyle"];export{a as Danger,m as DangerIcon,t as Info,u as InfoIcon,o as MaterialStyle,c as StatusRole,n as Success,d as SuccessIcon,i as Warning,p as WarningIcon,l as WithoutIcon,he as __namedExportsOrder,pe as default};
