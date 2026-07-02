import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Z}from"./iframe-uxYLpz5U.js";import{D as o}from"./DButton-DQ-qMqS8.js";import{D as s}from"./DOffcanvas-DtJAxkzU.js";import{a as $}from"./constants-CkChkWbF.js";import{D as Q,a as Y}from"./DContext-CxvW7UTG.js";import{D as ee}from"./DSelect-BUIp54ji.js";const h=[{label:"Default",value:{ease:"easeInOut",duration:.3}},{label:"Spring",value:{type:"spring",stiffness:300,damping:20}},{label:"Slow",value:{ease:"easeInOut",duration:.8}},{label:"Bouncy",value:{type:"spring",stiffness:400,damping:10}},{label:"Fast",value:{ease:"easeOut",duration:.15}},{label:"None",value:{ease:"linear",duration:0}}],ae={title:"Design System/Components/Offcanvas",component:s,parameters:{layout:"fullscreen"},argTypes:{className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},name:{control:"text",type:{name:"string",required:!0},table:{category:"HTML Attributes"}},staticBackdrop:{control:"boolean",type:"boolean",table:{category:"Behavior"}},scrollable:{control:"boolean",type:"boolean",table:{category:"Behavior"}}}};function se({name:a,payload:x}){const{closePortal:r}=Y();return e.jsxs(s,{name:a,staticBackdrop:!1,scrollable:!1,openFrom:"end",transition:x.transition,children:[e.jsx(s.Header,{onClose:r,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsxs(s.Body,{children:[e.jsx("p",{children:"Offcanvas body"}),e.jsx("small",{children:x.description})]}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"Cancel",color:"secondary",variant:"outline",onClick:()=>r()}),e.jsx(o,{text:"Ok",onClick:()=>r()})]})]})}function oe(){const[a,x]=Z.useState(h[0]),{openPortal:r}=Y();return e.jsxs("div",{className:"d-flex flex-column gap-2 align-items-center",children:[e.jsx(ee,{label:"Transition Preset",options:h,value:a,onChange:O=>{O&&x(O)}}),e.jsx(o,{text:"Open Offcanvas",onClick:()=>r("filters",{description:"Payload passed via openPortal.",transition:a.value})}),e.jsx("div",{className:"mt-4",children:e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify({transition:a.value},null,2)})})})]})}const n={parameters:{docs:{description:{story:"Real usage pattern: `DOffcanvas` is registered in `DContextProvider.availablePortals` and opened imperatively via `openPortal`. This is the recommended approach — **not** rendering `<DOffcanvas>` directly as a conditional JSX element."},source:{code:`
const springTransition: Transition = { type: 'spring', stiffness: 300, damping: 20 };

type OffcanvasPayloads = {
  filters: {
    description: string;
  };
};

function FiltersOffcanvas({ name, payload }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas name={name} staticBackdrop={false} scrollable={false} openFrom="end" transition={springTransition}>
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
        <small>{payload.description}</small>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
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
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function OpenFiltersOffcanvasButton() {
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Offcanvas"
      onClick={() => openPortal('filters', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<OffcanvasPayloads>
      portalName="dOffcanvasStoryPortal"
      availablePortals={{ filters: FiltersOffcanvas }}
    >
      <OpenFiltersOffcanvasButton />
    </DContextProvider>
  );
}
        `.trim(),language:"tsx",type:"code"}}},decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:()=>e.jsx(Q,{portalName:"dOffcanvasStoryPortal",availablePortals:{filters:se},children:e.jsx(oe,{})})},c={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},l={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{icon:"XCircle",showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},i={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{actionPlacement:"start",children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},d={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{actionPlacement:"end",children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},f={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},v={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},p={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},m={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},t={parameters:{docs:{canvas:{sourceState:"shown"}}},decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsx(Q,{...$,children:e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]})}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}};var u,y,D;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Real usage pattern: \`DOffcanvas\` is registered in \`DContextProvider.availablePortals\` and opened imperatively via \`openPortal\`. ' + 'This is the recommended approach — **not** rendering \`<DOffcanvas>\` directly as a conditional JSX element.'
      },
      source: {
        code: \`
const springTransition: Transition = { type: 'spring', stiffness: 300, damping: 20 };

type OffcanvasPayloads = {
  filters: {
    description: string;
  };
};

function FiltersOffcanvas({ name, payload }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas name={name} staticBackdrop={false} scrollable={false} openFrom="end" transition={springTransition}>
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
        <small>{payload.description}</small>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
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
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function OpenFiltersOffcanvasButton() {
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Offcanvas"
      onClick={() => openPortal('filters', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<OffcanvasPayloads>
      portalName="dOffcanvasStoryPortal"
      availablePortals={{ filters: FiltersOffcanvas }}
    >
      <OpenFiltersOffcanvasButton />
    </DContextProvider>
  );
}
        \`.trim(),
        language: 'tsx',
        type: 'code'
      }
    }
  },
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: () => <DContextProvider<OffcanvasPayloads> portalName="dOffcanvasStoryPortal" availablePortals={{
    filters: FiltersOffcanvas
  }}>
      <OpenFiltersOffcanvasButton />
    </DContextProvider>
}`,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var g,j,B;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DOffcanvas {...args}>
      <DOffcanvas.Header showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="cancel" color="secondary" variant="outline" />
        <DButton text="ok" />
      </DOffcanvas.Footer>
    </DOffcanvas>,
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end'
  }
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var b,P,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DOffcanvas {...args}>
      <DOffcanvas.Header icon="XCircle" showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="cancel" color="secondary" variant="outline" />
        <DButton text="ok" />
      </DOffcanvas.Footer>
    </DOffcanvas>,
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end'
  }
}`,...(C=(P=l.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var F,S,N;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DOffcanvas {...args}>
      <DOffcanvas.Header showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="start">
        <DButton text="cancel" color="secondary" variant="outline" />
        <DButton text="ok" />
      </DOffcanvas.Footer>
    </DOffcanvas>,
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end'
  }
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var k,w,H;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DOffcanvas {...args}>
      <DOffcanvas.Header showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="end">
        <DButton text="cancel" color="secondary" variant="outline" />
        <DButton text="ok" />
      </DOffcanvas.Footer>
    </DOffcanvas>,
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end'
  }
}`,...(H=(w=d.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var A,T,I;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DOffcanvas {...args}>
      <DOffcanvas.Header showCloseButton />
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="cancel" color="secondary" variant="outline" />
        <DButton text="ok" />
      </DOffcanvas.Footer>
    </DOffcanvas>,
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end'
  }
}`,...(I=(T=f.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var E,R,_;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DOffcanvas {...args}>
      <DOffcanvas.Header showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
    </DOffcanvas>,
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end'
  }
}`,...(_=(R=v.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var W,X,M;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DOffcanvas {...args}>
      <DOffcanvas.Header showCloseButton />
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
    </DOffcanvas>,
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end'
  }
}`,...(M=(X=p.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};var J,L,G;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="position-relative">
        <Story />
      </div>],
  render: args => <DOffcanvas {...args}>
      <DOffcanvas.Header>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="cancel" color="secondary" variant="outline" />
        <DButton text="ok" />
      </DOffcanvas.Footer>
    </DOffcanvas>,
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end'
  }
}`,...(G=(L=m.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var U,V,q,z,K;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
      <DOffcanvas {...args}>
        <DOffcanvas.Header showCloseButton>
          <h5 className="fw-bold">Advanced filters</h5>
        </DOffcanvas.Header>
        <DOffcanvas.Body>
          <p>Offcanvas body</p>
        </DOffcanvas.Body>
        <DOffcanvas.Footer>
          <DButton text="cancel" color="secondary" variant="outline" />
          <DButton text="ok" />
        </DOffcanvas.Footer>
      </DOffcanvas>
    </DContextProvider>,
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end'
  }
}`,...(q=(V=t.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:"To use material symbols or any other material symbols style icon suite you can\nuse a `DContextProvider` to achieve global configuration or use the same configuration\nvariables on the `DOffcanvas`, in this case, for the close icon on the\n`DOffcanvas.Header` or `DOffcanvasHeader`.",...(K=(z=t.parameters)==null?void 0:z.docs)==null?void 0:K.description}}};const te=["RealUsageWithOpenPortal","Default","CloseIcon","ActionsPlacementStart","ActionsPlacementEnd","WithoutHeader","WithoutActions","OnlyBody","WithoutCancelX","MaterialStyleCloseIcon"],ve=Object.freeze(Object.defineProperty({__proto__:null,ActionsPlacementEnd:d,ActionsPlacementStart:i,CloseIcon:l,Default:c,MaterialStyleCloseIcon:t,OnlyBody:p,RealUsageWithOpenPortal:n,WithoutActions:v,WithoutCancelX:m,WithoutHeader:f,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{ve as D,c as a};
