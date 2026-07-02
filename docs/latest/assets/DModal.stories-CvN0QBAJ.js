import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Q}from"./iframe-DkjceUUU.js";import{D as t}from"./DButton-BUrFSCCL.js";import{D as a}from"./DModal-SS9JuWXl.js";import{a as Y}from"./constants-CkChkWbF.js";import{D as q,a as K}from"./DContext-BbaizxMa.js";import{D as Z}from"./DSelect-ZvffLvvQ.js";const f=[{label:"Default",value:{ease:"easeInOut",duration:.3}},{label:"Spring",value:{type:"spring",stiffness:300,damping:20}},{label:"Slow",value:{ease:"easeInOut",duration:.8}},{label:"Bouncy",value:{type:"spring",stiffness:400,damping:20}},{label:"Fast",value:{ease:"easeOut",duration:.15}},{label:"None",value:{ease:"linear",duration:0}}],$={title:"Design System/Components/Modal",component:a,parameters:{layout:"fullscreen"},argTypes:{className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},name:{control:"text",type:{name:"string",required:!0},table:{category:"HTML Attributes"}},staticBackdrop:{control:"boolean",type:"boolean",table:{category:"Behavior"}},scrollable:{control:"boolean",type:"boolean",table:{category:"Behavior"}},centered:{control:"boolean",type:"boolean",table:{category:"Appearance"}},fullScreen:{control:"boolean",type:"boolean",table:{category:"Appearance"}},fullScreenFrom:{control:"select",type:"string",options:["sm","md","lg","xl","xxl"],table:{category:"Appearance"}},size:{control:"radio",type:"string",options:["sm","lg","xl"],table:{category:"Appearance"}}}};function ee({name:o,payload:s}){const{closePortal:r}=K();return e.jsxs(a,{name:o,centered:!0,staticBackdrop:!1,transition:s.transition,children:[e.jsx(a.Header,{onClose:r,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),e.jsxs(a.Body,{className:"py-3 px-5",children:[e.jsx("p",{className:"m-0",children:"Modal body"}),e.jsx("small",{children:s.description}),s.transition&&e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify(s.transition,null,2)})})]}),e.jsxs(a.Footer,{children:[e.jsx(t,{text:"Cancel",color:"secondary",variant:"outline",onClick:()=>r()}),e.jsx(t,{text:"Ok",onClick:()=>r()})]})]})}function oe(){const[o,s]=Q.useState(f[0]),{openPortal:r}=K();return e.jsxs("div",{className:"d-flex flex-column gap-2 align-items-center",children:[e.jsx(Z,{label:"Transition Preset",options:f,value:o,onChange:h=>{h&&s(h)}}),e.jsx(t,{text:"Open Modal",onClick:()=>r("confirm",{description:"Payload passed via openPortal.",transition:o.value})}),e.jsx("div",{className:"mt-4",children:e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify({transition:o.value},null,2)})})})]})}const l={parameters:{docs:{description:{story:"Real usage pattern: `DModal` is registered in `DContextProvider.availablePortals` and opened imperatively via `openPortal`. This is the recommended approach — **not** rendering `<DModal>` directly as a conditional JSX element."},source:{code:`
const springTransition: Transition = { type: 'spring', stiffness: 300, damping: 20 };

type ModalPayloads = {
  confirm: {
    description: string;
  };
};

function ConfirmModal({ name, payload }: PortalProps<ModalPayloads['confirm']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DModal name={name} centered staticBackdrop={false} transition={springTransition}>
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body className="py-3 px-5">
        <p className="m-0">Modal body</p>
        <small>{payload.description}</small>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="Cancel"
          color="secondary"
          variant="outline"
          onClick={() => closePortal()}
        />
        <DButton
          text="Ok"
          onClick={() => closePortal()}
        />
      </DModal.Footer>
    </DModal>
  );
}

function OpenConfirmModalButton() {
  const { openPortal } = useDPortalContext<ModalPayloads>();
  return (
    <DButton
      text="Open Modal"
      onClick={() => openPortal('confirm', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<ModalPayloads>
      portalName="dModalStoryPortal"
      availablePortals={{ confirm: ConfirmModal }}
    >
      <OpenConfirmModalButton />
    </DContextProvider>
  );
}
        `.trim(),language:"tsx",type:"code"}}},render:()=>e.jsx(q,{portalName:"dModalStoryPortal",availablePortals:{confirm:ee},children:e.jsx(oe,{})}),decorators:[o=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(o,{})})]},n={decorators:[o=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(o,{})})],render:o=>e.jsxs(a,{...o,children:[e.jsx(a.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),e.jsx(a.Body,{children:e.jsx("p",{className:"m-0",children:"Modal body"})}),e.jsxs(a.Footer,{children:[e.jsx(t,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(t,{text:"ok"})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},d={decorators:[o=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(o,{})})],render:o=>e.jsxs(a,{...o,children:[e.jsx(a.Header,{icon:"XCircle",showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),e.jsx(a.Body,{children:e.jsx("p",{className:"m-0",children:"Modal body"})}),e.jsxs(a.Footer,{children:[e.jsx(t,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(t,{text:"ok"})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},c={decorators:[o=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(o,{})})],render:o=>e.jsxs(a,{...o,children:[e.jsx(a.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),e.jsx(a.Body,{children:e.jsx("p",{className:"m-0",children:"Modal body"})}),e.jsxs(a.Footer,{actionPlacement:"start",children:[e.jsx(t,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(t,{text:"ok"})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},i={decorators:[o=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(o,{})})],render:o=>e.jsxs(a,{...o,children:[e.jsx(a.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),e.jsx(a.Body,{children:e.jsx("p",{className:"m-0",children:"Modal body"})}),e.jsxs(a.Footer,{actionPlacement:"end",children:[e.jsx(t,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(t,{text:"ok"})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},m={decorators:[o=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(o,{})})],render:o=>e.jsxs(a,{...o,children:[e.jsx(a.Body,{children:e.jsx("p",{className:"m-0",children:"Modal body"})}),e.jsxs(a.Footer,{children:[e.jsx(t,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(t,{text:"ok"})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},p={decorators:[o=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(o,{})})],render:o=>e.jsxs(a,{...o,children:[e.jsx(a.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),e.jsx(a.Body,{children:e.jsx("p",{className:"m-0",children:"Modal body"})})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},u={decorators:[o=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(o,{})})],render:o=>e.jsxs(a,{...o,children:[e.jsx(a.Header,{showCloseButton:!0}),e.jsx(a.Body,{children:e.jsx("p",{className:"m-0",children:"Modal body"})})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},x={decorators:[o=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(o,{})})],render:o=>e.jsxs(a,{...o,children:[e.jsx(a.Header,{children:e.jsx("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),e.jsx(a.Body,{children:e.jsx("p",{className:"m-0",children:"Modal body"})}),e.jsxs(a.Footer,{children:[e.jsx(t,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(t,{text:"ok"})]})]}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}},y={parameters:{docs:{canvas:{sourceState:"shown"}}},decorators:[o=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(o,{})})],render:o=>e.jsx(q,{...Y,children:e.jsxs(a,{...o,children:[e.jsx(a.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),e.jsx(a.Body,{children:e.jsx("p",{className:"m-0",children:"Modal body"})}),e.jsxs(a.Footer,{children:[e.jsx(t,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(t,{text:"ok"})]})]})}),args:{name:"exampleModal",staticBackdrop:!1,scrollable:!1,centered:!0,fullScreen:!1,size:"sm",className:"d-block"}};var M,D,j;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Real usage pattern: \`DModal\` is registered in \`DContextProvider.availablePortals\` and opened imperatively via \`openPortal\`. ' + 'This is the recommended approach — **not** rendering \`<DModal>\` directly as a conditional JSX element.'
      },
      source: {
        code: \`
const springTransition: Transition = { type: 'spring', stiffness: 300, damping: 20 };

type ModalPayloads = {
  confirm: {
    description: string;
  };
};

function ConfirmModal({ name, payload }: PortalProps<ModalPayloads['confirm']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DModal name={name} centered staticBackdrop={false} transition={springTransition}>
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body className="py-3 px-5">
        <p className="m-0">Modal body</p>
        <small>{payload.description}</small>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="Cancel"
          color="secondary"
          variant="outline"
          onClick={() => closePortal()}
        />
        <DButton
          text="Ok"
          onClick={() => closePortal()}
        />
      </DModal.Footer>
    </DModal>
  );
}

function OpenConfirmModalButton() {
  const { openPortal } = useDPortalContext<ModalPayloads>();
  return (
    <DButton
      text="Open Modal"
      onClick={() => openPortal('confirm', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<ModalPayloads>
      portalName="dModalStoryPortal"
      availablePortals={{ confirm: ConfirmModal }}
    >
      <OpenConfirmModalButton />
    </DContextProvider>
  );
}
        \`.trim(),
        language: 'tsx',
        type: 'code'
      }
    }
  },
  render: () => <DContextProvider<ModalPayloads> portalName="dModalStoryPortal" availablePortals={{
    confirm: ConfirmModal
  }}>
      <OpenConfirmModalButton />
    </DContextProvider>,
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>]
}`,...(j=(D=l.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var g,b,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DModal {...args}>
      <DModal.Header showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="cancel" color="secondary" variant="outline" />
        <DButton text="ok" />
      </DModal.Footer>
    </DModal>,
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block'
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var B,N,P;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DModal {...args}>
      <DModal.Header icon="XCircle" showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="cancel" color="secondary" variant="outline" />
        <DButton text="ok" />
      </DModal.Footer>
    </DModal>,
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block'
  }
}`,...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var S,C,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DModal {...args}>
      <DModal.Header showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
      <DModal.Footer actionPlacement="start">
        <DButton text="cancel" color="secondary" variant="outline" />
        <DButton text="ok" />
      </DModal.Footer>
    </DModal>,
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block'
  }
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var w,H,O;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DModal {...args}>
      <DModal.Header showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
      <DModal.Footer actionPlacement="end">
        <DButton text="cancel" color="secondary" variant="outline" />
        <DButton text="ok" />
      </DModal.Footer>
    </DModal>,
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block'
  }
}`,...(O=(H=i.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var F,T,z;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DModal {...args}>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="cancel" color="secondary" variant="outline" />
        <DButton text="ok" />
      </DModal.Footer>
    </DModal>,
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block'
  }
}`,...(z=(T=m.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var A,I,E;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DModal {...args}>
      <DModal.Header showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
    </DModal>,
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block'
  }
}`,...(E=(I=p.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var R,_,W;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DModal {...args}>
      <DModal.Header showCloseButton />
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
    </DModal>,
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block'
  }
}`,...(W=(_=u.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var X,J,L;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DModal {...args}>
      <DModal.Header>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="cancel" color="secondary" variant="outline" />
        <DButton text="ok" />
      </DModal.Footer>
    </DModal>,
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block'
  }
}`,...(L=(J=x.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var G,U,V;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <DModal {...args}>
        <DModal.Header showCloseButton>
          <h5 className="fw-bold">Do you want to reject the offer?</h5>
        </DModal.Header>
        <DModal.Body>
          <p className="m-0">Modal body</p>
        </DModal.Body>
        <DModal.Footer>
          <DButton text="cancel" color="secondary" variant="outline" />
          <DButton text="ok" />
        </DModal.Footer>
      </DModal>
    </DContextProvider>,
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block'
  }
}`,...(V=(U=y.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const ae=["RealUsageWithOpenPortal","Default","CloseIcon","ActionsPlacementStart","ActionsPlacementEnd","WithoutHeader","WithoutActions","OnlyBody","WithoutCancelX","MaterialStyleCloseIcon"],ie=Object.freeze(Object.defineProperty({__proto__:null,ActionsPlacementEnd:i,ActionsPlacementStart:c,CloseIcon:d,Default:n,MaterialStyleCloseIcon:y,OnlyBody:u,RealUsageWithOpenPortal:l,WithoutActions:p,WithoutCancelX:x,WithoutHeader:m,__namedExportsOrder:ae,default:$},Symbol.toStringTag,{value:"Module"}));export{ie as D,n as a};
