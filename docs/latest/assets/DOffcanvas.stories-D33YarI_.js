import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as de}from"./iframe-vLNjGVop.js";import{D as o}from"./DButton-k5jVOt40.js";import{D as s}from"./DOffcanvas-DVZ4A-eL.js";import{a as fe}from"./constants-CkChkWbF.js";import{D as g,a as n}from"./DContext-aUrSpq0p.js";import{D as pe}from"./DSelect-83F0Lx2q.js";const D=[{label:"Default",value:{ease:"easeInOut",duration:.3}},{label:"Spring",value:{type:"spring",stiffness:300,damping:20}},{label:"Slow",value:{ease:"easeInOut",duration:.8}},{label:"Bouncy",value:{type:"spring",stiffness:400,damping:10}},{label:"Fast",value:{ease:"easeOut",duration:.15}},{label:"None",value:{ease:"linear",duration:0}}],ve={title:"Design System/Components/Offcanvas",component:s,parameters:{layout:"fullscreen"},argTypes:{className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},name:{control:"text",type:{name:"string",required:!0},table:{category:"HTML Attributes"}},staticBackdrop:{control:"boolean",type:"boolean",table:{category:"Behavior"}},scrollable:{control:"boolean",type:"boolean",table:{category:"Behavior"}},transition:{table:{category:"Appearance"}},openFrom:{control:"object",table:{category:"Appearance",type:{summary:"'start' | 'end' | 'top' | 'bottom' | ResponsiveProp"}},description:"Side the offcanvas opens from. Accepts a single value or a `ResponsiveProp` object (e.g. `{ xs: 'bottom', md: 'end' }`) to change placement per breakpoint."},width:{control:"object",table:{category:"Appearance",type:{summary:"string | ResponsiveProp"}},description:"Overrides the size on `start`/`end` placements (defaults to `400px`). Accepts any CSS length (e.g. `'320px'`, `'100%'`) or a `ResponsiveProp` object."},height:{control:"object",table:{category:"Appearance",type:{summary:"string | ResponsiveProp"}},description:"Overrides the size on `top`/`bottom` placements (defaults to `100%`). Accepts any CSS length (e.g. `'50vh'`, `'320px'`) or a `ResponsiveProp` object."}}};function he({name:a,payload:t}){const{closePortal:c}=n();return e.jsxs(s,{name:a,staticBackdrop:!1,scrollable:!1,openFrom:"end",transition:t.transition,children:[e.jsx(s.Header,{onClose:c,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsxs(s.Body,{children:[e.jsx("p",{children:"Offcanvas body"}),e.jsx("small",{children:t.description})]}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"Cancel",color:"secondary",variant:"outline",onClick:()=>c()}),e.jsx(o,{text:"Ok",onClick:()=>c()})]})]})}function me(){const[a,t]=de.useState(D[0]),{openPortal:c}=n();return e.jsxs("div",{className:"d-flex flex-column gap-2 align-items-center",children:[e.jsx(pe,{label:"Transition Preset",options:D,value:a,onChange:P=>{P&&t(P)}}),e.jsx(o,{text:"Open Offcanvas",onClick:()=>c("filters",{description:"Payload passed via openPortal.",transition:a.value})}),e.jsx("div",{className:"mt-4",children:e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify({transition:a.value},null,2)})})})]})}const l={parameters:{docs:{description:{story:"Real usage pattern: `DOffcanvas` is registered in `DContextProvider.availablePortals` and opened imperatively via `openPortal`. This is the recommended approach — **not** rendering `<DOffcanvas>` directly as a conditional JSX element."},source:{code:`
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
        `.trim(),language:"tsx",type:"code"}}},decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:()=>e.jsx(g,{portalName:"dOffcanvasStoryPortal",availablePortals:{filters:he},children:e.jsx(me,{})})},i={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},d={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{icon:"XCircle",showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},f={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{actionPlacement:"start",children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},p={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{actionPlacement:"end",children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},v={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},h={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},m={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}};function xe({name:a}){const{closePortal:t}=n();return e.jsxs(s,{name:a,staticBackdrop:!1,scrollable:!1,openFrom:{xs:"bottom",sm:"start",md:"end",lg:"top"},children:[e.jsx(s.Header,{onClose:t,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsxs(s.Body,{children:[e.jsx("p",{children:"Offcanvas body"}),e.jsxs("small",{children:["Resize the viewport: opens from"," ",e.jsx("code",{children:"bottom"})," ","below"," ",e.jsx("code",{children:"sm"}),", from"," ",e.jsx("code",{children:"start"})," ","on"," ",e.jsx("code",{children:"sm"}),", from"," ",e.jsx("code",{children:"end"})," ","on"," ",e.jsx("code",{children:"md"})," ","and from"," ",e.jsx("code",{children:"top"})," ","from"," ",e.jsx("code",{children:"lg"})," ","up."]})]}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"Cancel",color:"secondary",variant:"outline",onClick:()=>t()}),e.jsx(o,{text:"Ok",onClick:()=>t()})]})]})}function Oe(){const{openPortal:a}=n();return e.jsx(o,{text:"Open Responsive Offcanvas",onClick:()=>a("filters",{description:"Payload passed via openPortal."})})}const x={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"d-flex justify-content-center align-items-center",children:e.jsx(a,{})})],parameters:{docs:{description:{story:"`openFrom` accepts a `ResponsiveProp` object so the placement can change per breakpoint (e.g. `{ xs: 'bottom', md: 'end' }`), instead of a single fixed value. As with any other offcanvas, it must be registered in `DContextProvider.availablePortals` and opened via `openPortal` — rendering it directly as JSX is not the recommended usage. Resize the browser window (or Storybook viewport) to see the placement react to the real breakpoint."},source:{code:`
type OffcanvasPayloads = {
  filters: {
    description: string;
  };
};

function ResponsiveFiltersOffcanvas({ name }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas 
      name={name} 
      staticBackdrop={false} 
      scrollable={false} 
      openFrom={{
        xs: 'bottom', sm: 'start', md: 'end', lg: 'top',
      }}
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="Cancel" color="secondary" variant="outline" onClick={() => closePortal()} />
        <DButton text="Ok" onClick={() => closePortal()} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function OpenResponsiveFiltersOffcanvasButton() {
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Responsive Offcanvas"
      onClick={() => openPortal('filters', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<OffcanvasPayloads>
      portalName="dOffcanvasResponsiveStoryPortal"
      availablePortals={{ filters: ResponsiveFiltersOffcanvas }}
    >
      <OpenResponsiveFiltersOffcanvasButton />
    </DContextProvider>
  );
}
        `.trim(),language:"tsx",type:"code"}}},render:()=>e.jsx(g,{portalName:"dOffcanvasResponsiveStoryPortal",availablePortals:{filters:xe},children:e.jsxs("div",{className:"d-flex flex-column gap-2 align-items-center",children:[e.jsx(Oe,{}),e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify({openFrom:{xs:"bottom",sm:"start",md:"end",lg:"top"}},null,2)})})]})})};function ue({name:a}){const{closePortal:t}=n();return e.jsxs(s,{name:a,staticBackdrop:!1,scrollable:!1,openFrom:"end",width:{xs:"100%",sm:"320px",lg:"480px"},children:[e.jsx(s.Header,{onClose:t,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsxs(s.Body,{children:[e.jsx("p",{children:"Offcanvas body"}),e.jsxs("small",{children:["Resize the viewport: below"," ",e.jsx("code",{children:"sm"})," ","width is"," ",e.jsx("code",{children:"100%"}),", from"," ",e.jsx("code",{children:"sm"})," ","it's"," ",e.jsx("code",{children:"320px"}),", and from"," ",e.jsx("code",{children:"lg"})," ","up"," ",e.jsx("code",{children:"480px"}),"."]})]}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"Cancel",color:"secondary",variant:"outline",onClick:()=>t()}),e.jsx(o,{text:"Ok",onClick:()=>t()})]})]})}function ye(){const{openPortal:a}=n();return e.jsx(o,{text:"Open Responsive Width Offcanvas",onClick:()=>a("filters",{description:"Payload passed via openPortal."})})}const O={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"d-flex justify-content-center align-items-center",children:e.jsx(a,{})})],parameters:{docs:{description:{story:"`width` accepts a `ResponsiveProp` object so the offcanvas width (on `start`/`end` placements) can change per breakpoint (e.g. `{ xs: '100%', md: '320px' }`), instead of a single fixed value. As with any other offcanvas, it must be registered in `DContextProvider.availablePortals` and opened via `openPortal` — rendering it directly as JSX is not the recommended usage. Resize the browser window (or Storybook viewport) to see the width react to the real breakpoint."},source:{code:`
type OffcanvasPayloads = {
  filters: {
    description: string;
  };
};

function ResponsiveWidthOffcanvas({ name }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas
      name={name}
      staticBackdrop={false}
      scrollable={false}
      openFrom="end"
      width={{ xs: '100%', sm: '320px', lg: '480px' }}
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="Cancel" color="secondary" variant="outline" onClick={() => closePortal()} />
        <DButton text="Ok" onClick={() => closePortal()} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function OpenResponsiveWidthOffcanvasButton() {
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Responsive Width Offcanvas"
      onClick={() => openPortal('filters', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<OffcanvasPayloads>
      portalName="dOffcanvasResponsiveWidthStoryPortal"
      availablePortals={{ filters: ResponsiveWidthOffcanvas }}
    >
      <OpenResponsiveWidthOffcanvasButton />
    </DContextProvider>
  );
}
        `.trim(),language:"tsx",type:"code"}}},render:()=>e.jsx(g,{portalName:"dOffcanvasResponsiveWidthStoryPortal",availablePortals:{filters:ue},children:e.jsxs("div",{className:"d-flex flex-column gap-2 align-items-center",children:[e.jsx(ye,{}),e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify({width:{xs:"100%",sm:"320px",lg:"480px"}},null,2)})})]})})};function ge({name:a}){const{closePortal:t}=n();return e.jsxs(s,{name:a,staticBackdrop:!1,scrollable:!1,openFrom:"bottom",height:{xs:"50vh",md:"75vh",lg:"100%"},children:[e.jsx(s.Header,{onClose:t,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsxs(s.Body,{children:[e.jsx("p",{children:"Offcanvas body"}),e.jsxs("small",{children:["Resize the viewport: below"," ",e.jsx("code",{children:"md"})," ","height is"," ",e.jsx("code",{children:"50vh"}),", from"," ",e.jsx("code",{children:"md"})," ","it's"," ",e.jsx("code",{children:"75vh"}),", and from"," ",e.jsx("code",{children:"lg"})," ","up"," ",e.jsx("code",{children:"100%"}),"."]})]}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"Cancel",color:"secondary",variant:"outline",onClick:()=>t()}),e.jsx(o,{text:"Ok",onClick:()=>t()})]})]})}function Pe(){const{openPortal:a}=n();return e.jsx(o,{text:"Open Responsive Height Offcanvas",onClick:()=>a("filters",{description:"Payload passed via openPortal."})})}const u={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"d-flex justify-content-center align-items-center",children:e.jsx(a,{})})],parameters:{docs:{description:{story:"`height` accepts a `ResponsiveProp` object so the offcanvas height (on `top`/`bottom` placements) can change per breakpoint (e.g. `{ xs: '50vh', md: '100%' }`), instead of a single fixed value. As with any other offcanvas, it must be registered in `DContextProvider.availablePortals` and opened via `openPortal` — rendering it directly as JSX is not the recommended usage. Resize the browser window (or Storybook viewport) to see the height react to the real breakpoint."},source:{code:`
type OffcanvasPayloads = {
  filters: {
    description: string;
  };
};

function ResponsiveHeightOffcanvas({ name }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas
      name={name}
      staticBackdrop={false}
      scrollable={false}
      openFrom="bottom"
      height={{ xs: '50vh', md: '75vh', lg: '100%' }}
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="Cancel" color="secondary" variant="outline" onClick={() => closePortal()} />
        <DButton text="Ok" onClick={() => closePortal()} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function OpenResponsiveHeightOffcanvasButton() {
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Responsive Height Offcanvas"
      onClick={() => openPortal('filters', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<OffcanvasPayloads>
      portalName="dOffcanvasResponsiveHeightStoryPortal"
      availablePortals={{ filters: ResponsiveHeightOffcanvas }}
    >
      <OpenResponsiveHeightOffcanvasButton />
    </DContextProvider>
  );
}
        `.trim(),language:"tsx",type:"code"}}},render:()=>e.jsx(g,{portalName:"dOffcanvasResponsiveHeightStoryPortal",availablePortals:{filters:ge},children:e.jsxs("div",{className:"d-flex flex-column gap-2 align-items-center",children:[e.jsx(Pe,{}),e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify({height:{xs:"50vh",md:"75vh",lg:"100%"}},null,2)})})]})})},y={decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Header,{children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}},r={parameters:{docs:{canvas:{sourceState:"shown"}}},decorators:[a=>e.jsx("div",{style:{height:"400px"},className:"position-relative",children:e.jsx(a,{})})],render:a=>e.jsx(g,{...fe,children:e.jsxs(s,{...a,children:[e.jsx(s.Header,{showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsx(s.Body,{children:e.jsx("p",{children:"Offcanvas body"})}),e.jsxs(s.Footer,{children:[e.jsx(o,{text:"cancel",color:"secondary",variant:"outline"}),e.jsx(o,{text:"ok"})]})]})}),args:{name:"exampleOffcanvas",staticBackdrop:!1,scrollable:!1,openFrom:"end"}};var b,j,B;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(j=l.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var C,k,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var F,S,R;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(S=d.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var N,H,A;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(H=f.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var W,T,J;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(T=p.parameters)==null?void 0:T.docs)==null?void 0:J.source}}};var I,X,E;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(X=v.parameters)==null?void 0:X.docs)==null?void 0:E.source}}};var _,z,M;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(z=h.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var L,G,U;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(U=(G=m.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var V,q,K;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="d-flex justify-content-center align-items-center">
        <Story />
      </div>],
  parameters: {
    docs: {
      description: {
        story: '\`openFrom\` accepts a \`ResponsiveProp\` object so the placement can change per breakpoint ' + "(e.g. \`{ xs: 'bottom', md: 'end' }\`), instead of a single fixed value. As with any other " + 'offcanvas, it must be registered in \`DContextProvider.availablePortals\` and opened via ' + '\`openPortal\` — rendering it directly as JSX is not the recommended usage. ' + 'Resize the browser window (or Storybook viewport) to see the placement react to the ' + 'real breakpoint.'
      },
      source: {
        code: \`
type OffcanvasPayloads = {
  filters: {
    description: string;
  };
};

function ResponsiveFiltersOffcanvas({ name }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas 
      name={name} 
      staticBackdrop={false} 
      scrollable={false} 
      openFrom={{
        xs: 'bottom', sm: 'start', md: 'end', lg: 'top',
      }}
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="Cancel" color="secondary" variant="outline" onClick={() => closePortal()} />
        <DButton text="Ok" onClick={() => closePortal()} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function OpenResponsiveFiltersOffcanvasButton() {
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Responsive Offcanvas"
      onClick={() => openPortal('filters', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<OffcanvasPayloads>
      portalName="dOffcanvasResponsiveStoryPortal"
      availablePortals={{ filters: ResponsiveFiltersOffcanvas }}
    >
      <OpenResponsiveFiltersOffcanvasButton />
    </DContextProvider>
  );
}
        \`.trim(),
        language: 'tsx',
        type: 'code'
      }
    }
  },
  render: () => <DContextProvider<OffcanvasPayloads> portalName="dOffcanvasResponsiveStoryPortal" availablePortals={{
    filters: ResponsiveFiltersOffcanvas
  }}>
      <div className="d-flex flex-column gap-2 align-items-center">
        <OpenResponsiveFiltersOffcanvasButton />
        <pre>
          <code>
            {JSON.stringify({
            openFrom: {
              xs: 'bottom',
              sm: 'start',
              md: 'end',
              lg: 'top'
            }
          }, null, 2)}
          </code>
        </pre>
      </div>
    </DContextProvider>
}`,...(K=(q=x.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,Y,Z;O.parameters={...O.parameters,docs:{...(Q=O.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="d-flex justify-content-center align-items-center">
        <Story />
      </div>],
  parameters: {
    docs: {
      description: {
        story: '\`width\` accepts a \`ResponsiveProp\` object so the offcanvas width (on \`start\`/\`end\` ' + "placements) can change per breakpoint (e.g. \`{ xs: '100%', md: '320px' }\`), instead of a " + 'single fixed value. As with any other offcanvas, it must be registered in ' + '\`DContextProvider.availablePortals\` and opened via \`openPortal\` — rendering it directly ' + 'as JSX is not the recommended usage. Resize the browser window (or Storybook viewport) ' + 'to see the width react to the real breakpoint.'
      },
      source: {
        code: \`
type OffcanvasPayloads = {
  filters: {
    description: string;
  };
};

function ResponsiveWidthOffcanvas({ name }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas
      name={name}
      staticBackdrop={false}
      scrollable={false}
      openFrom="end"
      width={{ xs: '100%', sm: '320px', lg: '480px' }}
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="Cancel" color="secondary" variant="outline" onClick={() => closePortal()} />
        <DButton text="Ok" onClick={() => closePortal()} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function OpenResponsiveWidthOffcanvasButton() {
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Responsive Width Offcanvas"
      onClick={() => openPortal('filters', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<OffcanvasPayloads>
      portalName="dOffcanvasResponsiveWidthStoryPortal"
      availablePortals={{ filters: ResponsiveWidthOffcanvas }}
    >
      <OpenResponsiveWidthOffcanvasButton />
    </DContextProvider>
  );
}
        \`.trim(),
        language: 'tsx',
        type: 'code'
      }
    }
  },
  render: () => <DContextProvider<OffcanvasPayloads> portalName="dOffcanvasResponsiveWidthStoryPortal" availablePortals={{
    filters: ResponsiveWidthOffcanvas
  }}>
      <div className="d-flex flex-column gap-2 align-items-center">
        <OpenResponsiveWidthOffcanvasButton />
        <pre>
          <code>
            {JSON.stringify({
            width: {
              xs: '100%',
              sm: '320px',
              lg: '480px'
            }
          }, null, 2)}
          </code>
        </pre>
      </div>
    </DContextProvider>
}`,...(Z=(Y=O.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: '400px'
  }} className="d-flex justify-content-center align-items-center">
        <Story />
      </div>],
  parameters: {
    docs: {
      description: {
        story: '\`height\` accepts a \`ResponsiveProp\` object so the offcanvas height (on \`top\`/\`bottom\` ' + "placements) can change per breakpoint (e.g. \`{ xs: '50vh', md: '100%' }\`), instead of a " + 'single fixed value. As with any other offcanvas, it must be registered in ' + '\`DContextProvider.availablePortals\` and opened via \`openPortal\` — rendering it directly ' + 'as JSX is not the recommended usage. Resize the browser window (or Storybook viewport) ' + 'to see the height react to the real breakpoint.'
      },
      source: {
        code: \`
type OffcanvasPayloads = {
  filters: {
    description: string;
  };
};

function ResponsiveHeightOffcanvas({ name }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas
      name={name}
      staticBackdrop={false}
      scrollable={false}
      openFrom="bottom"
      height={{ xs: '50vh', md: '75vh', lg: '100%' }}
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="Cancel" color="secondary" variant="outline" onClick={() => closePortal()} />
        <DButton text="Ok" onClick={() => closePortal()} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function OpenResponsiveHeightOffcanvasButton() {
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Responsive Height Offcanvas"
      onClick={() => openPortal('filters', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<OffcanvasPayloads>
      portalName="dOffcanvasResponsiveHeightStoryPortal"
      availablePortals={{ filters: ResponsiveHeightOffcanvas }}
    >
      <OpenResponsiveHeightOffcanvasButton />
    </DContextProvider>
  );
}
        \`.trim(),
        language: 'tsx',
        type: 'code'
      }
    }
  },
  render: () => <DContextProvider<OffcanvasPayloads> portalName="dOffcanvasResponsiveHeightStoryPortal" availablePortals={{
    filters: ResponsiveHeightOffcanvas
  }}>
      <div className="d-flex flex-column gap-2 align-items-center">
        <OpenResponsiveHeightOffcanvasButton />
        <pre>
          <code>
            {JSON.stringify({
            height: {
              xs: '50vh',
              md: '75vh',
              lg: '100%'
            }
          }, null, 2)}
          </code>
        </pre>
      </div>
    </DContextProvider>
}`,...(ae=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,oe,te;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(te=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,re,ce,le,ie;r.parameters={...r.parameters,docs:{...(ne=r.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ce=(re=r.parameters)==null?void 0:re.docs)==null?void 0:ce.source},description:{story:"To use material symbols or any other material symbols style icon suite you can\nuse a `DContextProvider` to achieve global configuration or use the same configuration\nvariables on the `DOffcanvas`, in this case, for the close icon on the\n`DOffcanvas.Header` or `DOffcanvasHeader`.",...(ie=(le=r.parameters)==null?void 0:le.docs)==null?void 0:ie.description}}};const De=["RealUsageWithOpenPortal","Default","CloseIcon","ActionsPlacementStart","ActionsPlacementEnd","WithoutHeader","WithoutActions","OnlyBody","ResponsivePlacement","ResponsiveWidth","ResponsiveHeight","WithoutCancelX","MaterialStyleCloseIcon"],Se=Object.freeze(Object.defineProperty({__proto__:null,ActionsPlacementEnd:p,ActionsPlacementStart:f,CloseIcon:d,Default:i,MaterialStyleCloseIcon:r,OnlyBody:m,RealUsageWithOpenPortal:l,ResponsiveHeight:u,ResponsivePlacement:x,ResponsiveWidth:O,WithoutActions:h,WithoutCancelX:y,WithoutHeader:v,__namedExportsOrder:De,default:ve},Symbol.toStringTag,{value:"Module"}));export{Se as D,i as a};
