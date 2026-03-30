import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as u}from"./config-C3iYXcFk.js";import{D as r}from"./DAlert-CzN-WiCE.js";import{I as p,C as X,a as $}from"./constants-CkChkWbF.js";import{D as z}from"./DContext-C7LEUkQ1.js";import"./index-Cc_4mDlw.js";import"./iframe-um1WsC0C.js";import"./preload-helper-Dp1pzeXC.js";import"./DIcon-BAV_3UYE.js";import"./useMediaBreakpointUp-Dsr-FX74.js";import"./index-BitFkd-h.js";import"./index-BGEaalem.js";const ae={title:"Design System/Components/Alert",component:r,parameters:{docs:{description:{component:`
To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Alerts](https://getbootstrap.com/docs/5.3/components/alerts/)

## CSS Variables

The Bootstrap documentation provides details on the default [Alert CSS Variables](https://getbootstrap.com/docs/5.3/components/alerts/#css)

| Variable                                  | Class            | Type             | Description              |
|-------------------------------------------|------------------|------------------|--------------------------|
| --${u}alert-gap                   | .alert           | css length unit  | Content separation       |
| --${u}alert-icon-color            | .alert           | css color unit   | Toast icon color         |
| --${u}alert-close-icon-size       | .alert           | css length unit  | Toast close icon size    |
        `}}},argTypes:{id:{control:"text",type:"string",table:{category:"HTML Attributes"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},color:{control:"select",type:"string",options:X,table:{defaultValue:{summary:"success"},category:"Appearance"},description:"Alert color"},icon:{control:"select",type:"string",options:p,description:"Name of icon to use (in kebab-case)",table:{category:"Icon"}},iconFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},showClose:{control:"boolean",type:"boolean",description:"Show close button",table:{category:"Behavior"}},iconClose:{control:"select",type:"string",options:p,description:"Name of icon to use (in kebab-case)",table:{category:"Icon"}},iconCloseFamilyClass:{control:"text",type:"string",table:{category:"Icon"}},iconCloseFamilyPrefix:{control:"text",type:"string",table:{category:"Icon"}},iconCloseMaterialStyle:{control:"boolean",type:"boolean",table:{category:"Icon"}},onClose:{action:"onClose",table:{category:"Events"}}},tags:["autodocs"]},a={args:{color:"success",children:"This is a success alert",className:void 0,icon:void 0,iconClose:void 0,showClose:!1,id:void 0,style:void 0}},n={args:{color:"danger",children:"This is a danger alert"}},i={args:{color:"info",children:"This is a info alert"}},t={args:{color:"warning",children:"This is a warning alert"}},c={render:s=>e.jsx(r,{...s,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-2",children:"Heading"}),e.jsx("p",{className:"m-0",children:"Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services"}),e.jsx("a",{href:"#",className:"text-primary",children:"Link"})]})}),args:{color:"success"}},l={render:s=>e.jsx(r,{...s,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-2",children:"Heading"}),e.jsx("p",{className:"m-0",children:"Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services"}),e.jsx("a",{href:"#",className:"text-primary",children:"Link"})]})}),args:{color:"danger"}},d={render:s=>e.jsx(r,{...s,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-2",children:"Heading"}),e.jsx("p",{className:"m-0",children:"Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services"}),e.jsx("a",{href:"#",className:"text-primary",children:"Link"})]})}),args:{color:"info"}},m={render:s=>e.jsx(r,{...s,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-2",children:"Heading"}),e.jsx("p",{className:"m-0",children:"Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services Our offices are open from 9:00 AM to 1:00 PM this Monday, December 1st. Please consider using our online services"}),e.jsx("a",{href:"#",className:"text-primary",children:"Link"})]})}),args:{color:"warning"}},o={render:s=>e.jsx(z,{...$,children:e.jsx(r,{...s,children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-2",children:"Heading"}),e.jsx("p",{className:"m-0",children:"Nuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en líneaNuestras oficinas atienden de 9:00 a 13:00 horas éste Lunes 1 de Diciembre. Prefiere nuestros Servicios en línea"}),e.jsx("a",{href:"#",className:"text-primary",children:"Link"})]})})}),args:{showClose:!0,color:"info"},parameters:{docs:{canvas:{sourceState:"shown"}}}};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,M,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    color: 'danger',
    children: 'This is a danger alert'
  }
}`,...(b=(M=n.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var P,v,D;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    color: 'info',
    children: 'This is a info alert'
  }
}`,...(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var x,A,N;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    children: 'This is a warning alert'
  }
}`,...(N=(A=t.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var S,O,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(O=c.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var j,I,T;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(I=l.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var L,w,k;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var E,H,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(H=m.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var R,F,V,B,W;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(F=o.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:"To use alerts with Material Symbols style use a `DContextProvider` with `familyClass`\nand the flag `materialStyle=true` or use the flags directly over the\n`DAlert` component as a props",...(W=(B=o.parameters)==null?void 0:B.docs)==null?void 0:W.description}}};const ne=["Success","Danger","Info","Warning","SuccessIcon","DangerIcon","InfoIcon","WarningIcon","MaterialStyle"];export{n as Danger,l as DangerIcon,i as Info,d as InfoIcon,o as MaterialStyle,a as Success,c as SuccessIcon,t as Warning,m as WarningIcon,ne as __namedExportsOrder,ae as default};
