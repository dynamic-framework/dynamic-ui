import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as he}from"./iframe-vLNjGVop.js";import{a as ve}from"./constants-CkChkWbF.js";import{u as Ce}from"./useMediaBreakpointUp-56XFbS_3.js";import{D as s,u as P,a as y}from"./DContext-aUrSpq0p.js";import{u as D}from"./useFormatCurrency-BrC_kc_W.js";import{D as r}from"./DIcon-BaYjXWaB.js";import{D as n}from"./DModal-DQJnMGr4.js";import{D as m}from"./DButton-k5jVOt40.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFPG5GmN.js";import"./index-oOcxeWdd.js";import"./config-C3iYXcFk.js";import"./currency.es-9OAR_aOO.js";import"./index-nyyuC_Uj.js";import"./index-BPJnJB5S.js";const ge={NMChevron:o=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",...o,children:e.jsx("path",{d:"m9 18 6-6-6-6"})}),NMSmile:o=>e.jsxs("svg",{viewBox:"0 0 70 70",fill:"currentColor",...o,children:[e.jsx("path",{d:"M35 3C17.355 3 3 17.355 3 35s14.355 32 32 32 32-14.355 32-32S52.645 3 35 3Zm0 60C19.535 63 7 50.465 7 35S19.535 7 35 7s28 12.535 28 28-12.535 28-28 28Z"}),e.jsx("path",{d:"M22 45a1 1 0 0 0-1.366.366 1 1 0 0 0 .366 1.366C23.828 51.626 29.093 54.665 34.739 54.665c5.347 0 10.299-2.668 13.246-7.136a1 1 0 1 0-1.67-1.101c-2.576 3.905-6.903 6.237-11.576 6.237-4.935 0-9.535-2.656-12.739-6.933Z"})]})},$e={title:"Design System/Context/ContextProvider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
Root provider used to share Dynamic UI global settings with descendants.

## What this provider configures

- 'language' locale string consumed by UI and hooks
- 'currency' formatting options consumed by 'useFormatCurrency' and currency components
- 'icon' and 'iconMap' defaults consumed by 'DIcon' and components with semantic icons
- 'iconRegistry' custom icon component map consumed by 'DIcon' when icon values are strings
- 'portalName' and 'availablePortals' consumed by 'useDPortalContext' for modal/offcanvas flows
- 'breakpoints' values resolved from Bootstrap CSS variables and consumed by media hooks

## Important behavior

The provider initializes internal state from props. For runtime updates inside the app,
use 'useDContext().setContext(...)'.
        `}}}},i={parameters:{docs:{canvas:{sourceState:"shown"}}}},c={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{language:"en"}},l={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{currency:{symbol:"$",precision:2,separator:",",decimal:"."}}},d={parameters:{docs:{canvas:{sourceState:"shown"}}},args:ve};function fe(){const{values:o,format:a}=D(1250.75);return e.jsxs("div",{className:"card p-3",style:{maxWidth:"420px"},children:[e.jsx("h6",{className:"mb-2",children:"Invoice total"}),e.jsx("p",{className:"mb-1",children:"Stored amount: 1250.75"}),e.jsxs("p",{className:"mb-1",children:["Auto from hook:"," ",o[0]]}),e.jsxs("p",{className:"mb-0",children:["Manual format call:"," ",a(99999.9)]})]})}const u={render:()=>e.jsx(s,{currency:{symbol:"€",precision:2,separator:".",decimal:","},children:e.jsx(fe,{})}),parameters:{docs:{source:{code:`function CurrencyConsumptionCard() {
  const { values, format } = useFormatCurrency(1250.75);

  return (
    <div className="card p-3" style={{ maxWidth: '420px' }}>
      <h6 className="mb-2">Invoice total</h6>
      <p className="mb-1">Stored amount: 1250.75</p>
      <p className="mb-1">Auto from hook: {values[0]}</p>
      <p className="mb-0">Manual format call: {format(99999.9)}</p>
    </div>
  );
}

<DContextProvider
  currency={{
    symbol: '€',
    precision: 2,
    separator: '.',
    decimal: ',',
  }}
>
  <CurrencyConsumptionCard />
</DContextProvider>`}}}};function ye(){const o=Ce(!0),{breakpoints:a}=P();return e.jsxs("div",{className:"card p-3",style:{maxWidth:"520px"},children:[e.jsx("h6",{className:"mb-2",children:"Breakpoint-aware content"}),e.jsxs("p",{className:"mb-1",children:["Is md and up:"," ",e.jsx("strong",{children:String(o)})]}),e.jsxs("p",{className:"mb-0",children:["Resolved breakpoints: sm=",a.sm," ","md=",a.md," ","lg=",a.lg]})]})}const x={render:()=>e.jsx(s,{children:e.jsx(ye,{})}),parameters:{docs:{source:{code:`function BreakpointConsumptionCard() {
  const isMdUp = useMediaBreakpointUpMd(true);
  const { breakpoints } = useDContext();

  return (
    <div className="card p-3" style={{ maxWidth: '520px' }}>
      <h6 className="mb-2">Breakpoint-aware content</h6>
      <p className="mb-1">Is md and up: <strong>{String(isMdUp)}</strong></p>
      <p className="mb-0">
        Resolved breakpoints: sm={breakpoints.sm} md={breakpoints.md} lg={breakpoints.lg}
      </p>
    </div>
  );
}

<DContextProvider>
  <BreakpointConsumptionCard />
</DContextProvider>`}}}};function Pe(){const{icon:o,iconMap:a}=P();return e.jsxs("div",{className:"card p-3",style:{maxWidth:"540px"},children:[e.jsx("h6",{className:"mb-2",children:"Icon config in action"}),e.jsxs("p",{className:"mb-2",children:["Family:"," ",o.familyClass," ","/ Prefix:"," ",o.familyPrefix]}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[e.jsx(r,{icon:a.calendar}),e.jsx("small",{children:"calendar"})]}),e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[e.jsx(r,{icon:a.upload}),e.jsx("small",{children:"upload"})]}),e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[e.jsx(r,{icon:a.input.search}),e.jsx("small",{children:"search"})]})]})]})}const h={render:()=>e.jsx(s,{icon:{familyClass:"material-symbols-outlined",familyPrefix:"",materialStyle:!0},iconMap:{x:"close",xLg:"close",chevronUp:"expand_less",chevronDown:"expand_more",chevronLeft:"chevron_left",chevronRight:"chevron_right",upload:"upload",calendar:"calendar_month",check:"check",alert:{warning:"warning",danger:"error",success:"task_alt",info:"info"},input:{search:"search",show:"visibility",hide:"visibility_off",increase:"add",decrease:"remove"}},children:e.jsx(Pe,{})}),parameters:{docs:{source:{code:`function IconConsumptionCard() {
  const { icon, iconMap } = useDContext();

  return (
    <div className="card p-3" style={{ maxWidth: '540px' }}>
      <h6 className="mb-2">Icon config in action</h6>
      <p className="mb-2">Family: {icon.familyClass} / Prefix: {icon.familyPrefix}</p>
      <div className="d-flex align-items-center gap-3">
        <span className="d-flex align-items-center gap-1">
          <DIcon icon={iconMap.calendar} />
          <small>calendar</small>
        </span>
        <span className="d-flex align-items-center gap-1">
          <DIcon icon={iconMap.upload} />
          <small>upload</small>
        </span>
        <span className="d-flex align-items-center gap-1">
          <DIcon icon={iconMap.input.search} />
          <small>search</small>
        </span>
      </div>
    </div>
  );
}

<DContextProvider
  icon={{ familyClass: 'material-symbols-outlined', familyPrefix: '', materialStyle: true }}
  iconMap={{
    x: 'close',
    xLg: 'close',
    chevronUp: 'expand_less',
    chevronDown: 'expand_more',
    chevronLeft: 'chevron_left',
    chevronRight: 'chevron_right',
    upload: 'upload',
    calendar: 'calendar_month',
    check: 'check',
    alert: { warning: 'warning', danger: 'error', success: 'task_alt', info: 'info' },
    input: { search: 'search', show: 'visibility', hide: 'visibility_off', increase: 'add', decrease: 'remove' },
  }}
>
  <IconConsumptionCard />
</DContextProvider>`}}}};function De(){return e.jsxs("div",{className:"card p-3",style:{maxWidth:"540px"},children:[e.jsx("h6",{className:"mb-2",children:"iconRegistry in action"}),e.jsx("p",{className:"mb-2",children:"String icon names can resolve to custom SVG components from the registry."}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[e.jsx(r,{icon:"NMChevron"}),e.jsx("small",{children:"NMChevron (registry)"})]}),e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[e.jsx(r,{icon:"NMSmile"}),e.jsx("small",{children:"NMSmile (registry)"})]}),e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[e.jsx(r,{icon:"Home"}),e.jsx("small",{children:"Home (fallback)"})]})]})]})}const v={render:()=>e.jsx(s,{iconRegistry:ge,children:e.jsx(De,{})}),parameters:{docs:{source:{code:`const COMMONS_ICONS = {
  NMChevron: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  NMSmile: (props) => (
    <svg viewBox="0 0 70 70" fill="currentColor" {...props}>
      <path d="M35 3C17.355 3 3 17.355 3 35s14.355 32 32 32 32-14.355 32-32S52.645 3 35 3Z" />
    </svg>
  ),
};

<DContextProvider iconRegistry={COMMONS_ICONS}>
  <DIcon icon="NMChevron" />
  <DIcon icon="NMSmile" />
  <DIcon icon="Home" />
</DContextProvider>`}}}};function Ne({name:o,payload:a}){const{closePortal:t}=y(),{format:p}=D();return e.jsxs(n,{name:o,centered:!0,children:[e.jsx(n.Header,{onClose:t,showCloseButton:!0,children:e.jsx("h5",{className:"fw-semibold",children:"Invoice preview"})}),e.jsxs(n.Body,{children:[e.jsxs("p",{className:"mb-1",children:["Invoice ID:"," ",a.invoiceId]}),e.jsxs("p",{className:"mb-0",children:["Total due:"," ",p(a.total)]})]}),e.jsx(n.Footer,{children:e.jsx(m,{text:"Close",onClick:t,className:"ms-auto"})})]})}function be(){const{openPortal:o,stack:a}=y();return e.jsxs("div",{className:"card p-3",style:{maxWidth:"460px"},children:[e.jsx("h6",{className:"mb-2",children:"Portal flow from DContextProvider"}),e.jsxs("p",{className:"mb-2",children:["Open stack size:"," ",a.length]}),e.jsx(m,{text:"Open invoice modal",onClick:()=>o("invoicePreview",{invoiceId:"INV-24009",total:19875.4})})]})}const C={render:()=>e.jsx(s,{portalName:"portal-basic-flow",availablePortals:{invoicePreview:Ne},children:e.jsx(be,{})}),parameters:{docs:{source:{code:`type PortalDemoPayloads = {
  invoicePreview: {
    invoiceId: string;
    total: number;
  };
};

function InvoicePreviewModal({ name, payload }: PortalProps<PortalDemoPayloads['invoicePreview']>) {
  const { closePortal } = useDPortalContext<PortalDemoPayloads>();
  const { format } = useFormatCurrency();

  return (
    <DModal name={name} centered>
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-semibold">Invoice preview</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="mb-1">Invoice ID: {payload.invoiceId}</p>
        <p className="mb-0">Total due: {format(payload.total)}</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="Close" onClick={closePortal} className="ms-auto" />
      </DModal.Footer>
    </DModal>
  );
}

function PortalActions() {
  const { openPortal, stack } = useDPortalContext<PortalDemoPayloads>();

  return (
    <div className="card p-3" style={{ maxWidth: '460px' }}>
      <h6 className="mb-2">Portal flow from DContextProvider</h6>
      <p className="mb-2">Open stack size: {stack.length}</p>
      <DButton
        text="Open invoice modal"
        onClick={() => openPortal('invoicePreview', { invoiceId: 'INV-24009', total: 19875.4 })}
      />
    </div>
  );
}

<DContextProvider<PortalDemoPayloads>
  portalName="portal-basic-flow"
  availablePortals={{ invoicePreview: InvoicePreviewModal }}
>
  <PortalActions />
</DContextProvider>`}}}};function Ie(){const{language:o,setContext:a}=P(),{format:t}=D(),[p,ue]=he.useState(!1),xe=()=>{const N=!p;ue(N),a(N?{language:"es",currency:{symbol:"$",precision:0,separator:".",decimal:","}}:{language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."}})};return e.jsxs("div",{className:"card p-3",style:{maxWidth:"540px"},children:[e.jsx("h6",{className:"mb-2",children:"Runtime context updates"}),e.jsxs("p",{className:"mb-1",children:["Language:"," ",o]}),e.jsxs("p",{className:"mb-3",children:["Formatted value:"," ",t(25600.89)]}),e.jsx(m,{text:p?"Switch to US format":"Switch to CL format",onClick:xe})]})}const g={render:()=>e.jsx(s,{children:e.jsx(Ie,{})}),parameters:{docs:{source:{code:`function RuntimeContextUpdateCard() {
  const { language, setContext } = useDContext();
  const { format } = useFormatCurrency();
  const [useChileFormat, setUseChileFormat] = useState(false);

  const toggleContext = () => {
    const nextUseChileFormat = !useChileFormat;
    setUseChileFormat(nextUseChileFormat);

    setContext(nextUseChileFormat
      ? {
        language: 'es',
        currency: {
          symbol: '$',
          precision: 0,
          separator: '.',
          decimal: ',',
        },
      }
      : {
        language: 'en',
        currency: {
          symbol: '$',
          precision: 2,
          separator: ',',
          decimal: '.',
        },
      });
  };

  return (
    <div className="card p-3" style={{ maxWidth: '540px' }}>
      <h6 className="mb-2">Runtime context updates</h6>
      <p className="mb-1">Language: {language}</p>
      <p className="mb-3">Formatted value: {format(25600.89)}</p>
      <DButton
        text={useChileFormat ? 'Switch to US format' : 'Switch to CL format'}
        onClick={toggleContext}
      />
    </div>
  );
}

<DContextProvider>
  <RuntimeContextUpdateCard />
</DContextProvider>`}}}};function b({name:o,payload:a}){const{closePortal:t}=y();return e.jsxs(n,{name:o,centered:!0,children:[e.jsx(n.Header,{onClose:t,showCloseButton:!0,children:e.jsxs("h5",{className:"fw-semibold",children:["Portal scope"," ",a.scope]})}),e.jsx(n.Body,{children:e.jsxs("p",{className:"mb-0",children:["This modal belongs to provider"," ",a.scope,"."]})}),e.jsx(n.Footer,{children:e.jsx(m,{text:"Close",onClick:t,className:"ms-auto"})})]})}function I({scope:o}){const{openPortal:a}=y();return e.jsxs("div",{className:"card p-3",style:{minWidth:"280px"},children:[e.jsxs("h6",{className:"mb-2",children:["Provider"," ",o]}),e.jsx(m,{text:`Open ${o} modal`,onClick:()=>a("panel",{scope:o})})]})}const f={render:()=>e.jsxs("div",{className:"d-flex flex-column flex-md-row gap-3",children:[e.jsx(s,{portalName:"portal-scope-a",availablePortals:{panel:b},children:e.jsx(I,{scope:"A"})}),e.jsx(s,{portalName:"portal-scope-b",availablePortals:{panel:b},children:e.jsx(I,{scope:"B"})})]}),parameters:{docs:{source:{code:`type IsolationPayloads = {
  panel: {
    scope: string;
  };
};

function IsolationModal({ name, payload }: PortalProps<IsolationPayloads['panel']>) {
  const { closePortal } = useDPortalContext<IsolationPayloads>();
  return (
    <DModal name={name} centered>
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-semibold">Portal scope {payload.scope}</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="mb-0">This modal belongs to provider {payload.scope}.</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="Close" onClick={closePortal} className="ms-auto" />
      </DModal.Footer>
    </DModal>
  );
}

function IsolationActions({ scope }: { scope: string }) {
  const { openPortal } = useDPortalContext<IsolationPayloads>();
  return (
    <div className="card p-3" style={{ minWidth: '280px' }}>
      <h6 className="mb-2">Provider {scope}</h6>
      <DButton text={\`Open \${scope} modal\`} onClick={() => openPortal('panel', { scope })} />
    </div>
  );
}

<div className="d-flex flex-column flex-md-row gap-3">
  <DContextProvider<IsolationPayloads>
    portalName="portal-scope-a"
    availablePortals={{ panel: IsolationModal }}
  >
    <IsolationActions scope="A" />
  </DContextProvider>

  <DContextProvider<IsolationPayloads>
    portalName="portal-scope-b"
    availablePortals={{ panel: IsolationModal }}
  >
    <IsolationActions scope="B" />
  </DContextProvider>
</div>`}}}};var M,w,j,k,S;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source},description:{story:`Without arguments, it will take the default settings for:
+ English language
+ Lucide icons
+ Currencies with $1,000.00 format
+ Default portal DOM id`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.description}}};var B,F,_,O,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  args: {
    language: 'en'
  }
}`,...(_=(F=c.parameters)==null?void 0:F.docs)==null?void 0:_.source},description:{story:`To share a different language configuration we only need to change the key language

> This key only takes a string with the language in ISO 639 Set 1 (ISO 639-1)`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var U,A,L,W,T;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  args: {
    currency: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.'
    }
  }
}`,...(L=(A=l.parameters)==null?void 0:A.docs)==null?void 0:L.source},description:{story:`To share a different currency format configuration we need to change the key currency

> The configuration for currency format is given by the library [currency.js](https://currency.js.org/),
particularly we use the key precision, separator, decimal and not in all cases symbol.`,...(T=(W=l.parameters)==null?void 0:W.docs)==null?void 0:T.description}}};var H,$,E,V,Z;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  args: CONTEXT_PROVIDER_CONFIG_MATERIAL
}`,...(E=($=d.parameters)==null?void 0:$.docs)==null?void 0:E.source},description:{story:`By default and without additional configuration, the icons are linked to <code>Lucide icons</code>.

To share a different icon configuration we need to change the key icon

Additionally, you can provide \`iconRegistry\` to map string icon names
to custom SVG components (for example from a shared commons package).

This takes the settings needed to use bootstrap icons, which would
be \`familyClass=bi\`, \`familyPrefix=bi-\` and \`materialStyle=false\`

Similar settings can be used for any icon font.

In the particular case of material symbols, the materialStyle property was added
to place the name of the icon in the children of \`<i />\` and not as a class.
This setting can be used with any icon font that uses a similar style.

See more about this in <a href="?path=/docs/design-system-examples-icons--docs">Examples/Icons</a>`,...(Z=(V=d.parameters)==null?void 0:V.docs)==null?void 0:Z.description}}};var z,G,X;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <DContextProvider currency={{
    symbol: '€',
    precision: 2,
    separator: '.',
    decimal: ','
  }}>
      <CurrencyConsumptionCard />
    </DContextProvider>,
  parameters: {
    docs: {
      source: {
        code: \`function CurrencyConsumptionCard() {
  const { values, format } = useFormatCurrency(1250.75);

  return (
    <div className="card p-3" style={{ maxWidth: '420px' }}>
      <h6 className="mb-2">Invoice total</h6>
      <p className="mb-1">Stored amount: 1250.75</p>
      <p className="mb-1">Auto from hook: {values[0]}</p>
      <p className="mb-0">Manual format call: {format(99999.9)}</p>
    </div>
  );
}

<DContextProvider
  currency={{
    symbol: '€',
    precision: 2,
    separator: '.',
    decimal: ',',
  }}
>
  <CurrencyConsumptionCard />
</DContextProvider>\`
      }
    }
  }
}`,...(X=(G=u.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var q,J,K;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <DContextProvider>
      <BreakpointConsumptionCard />
    </DContextProvider>,
  parameters: {
    docs: {
      source: {
        code: \`function BreakpointConsumptionCard() {
  const isMdUp = useMediaBreakpointUpMd(true);
  const { breakpoints } = useDContext();

  return (
    <div className="card p-3" style={{ maxWidth: '520px' }}>
      <h6 className="mb-2">Breakpoint-aware content</h6>
      <p className="mb-1">Is md and up: <strong>{String(isMdUp)}</strong></p>
      <p className="mb-0">
        Resolved breakpoints: sm={breakpoints.sm} md={breakpoints.md} lg={breakpoints.lg}
      </p>
    </div>
  );
}

<DContextProvider>
  <BreakpointConsumptionCard />
</DContextProvider>\`
      }
    }
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,ee;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <DContextProvider icon={{
    familyClass: 'material-symbols-outlined',
    familyPrefix: '',
    materialStyle: true
  }} iconMap={{
    x: 'close',
    xLg: 'close',
    chevronUp: 'expand_less',
    chevronDown: 'expand_more',
    chevronLeft: 'chevron_left',
    chevronRight: 'chevron_right',
    upload: 'upload',
    calendar: 'calendar_month',
    check: 'check',
    alert: {
      warning: 'warning',
      danger: 'error',
      success: 'task_alt',
      info: 'info'
    },
    input: {
      search: 'search',
      show: 'visibility',
      hide: 'visibility_off',
      increase: 'add',
      decrease: 'remove'
    }
  }}>
      <IconConsumptionCard />
    </DContextProvider>,
  parameters: {
    docs: {
      source: {
        code: \`function IconConsumptionCard() {
  const { icon, iconMap } = useDContext();

  return (
    <div className="card p-3" style={{ maxWidth: '540px' }}>
      <h6 className="mb-2">Icon config in action</h6>
      <p className="mb-2">Family: {icon.familyClass} / Prefix: {icon.familyPrefix}</p>
      <div className="d-flex align-items-center gap-3">
        <span className="d-flex align-items-center gap-1">
          <DIcon icon={iconMap.calendar} />
          <small>calendar</small>
        </span>
        <span className="d-flex align-items-center gap-1">
          <DIcon icon={iconMap.upload} />
          <small>upload</small>
        </span>
        <span className="d-flex align-items-center gap-1">
          <DIcon icon={iconMap.input.search} />
          <small>search</small>
        </span>
      </div>
    </div>
  );
}

<DContextProvider
  icon={{ familyClass: 'material-symbols-outlined', familyPrefix: '', materialStyle: true }}
  iconMap={{
    x: 'close',
    xLg: 'close',
    chevronUp: 'expand_less',
    chevronDown: 'expand_more',
    chevronLeft: 'chevron_left',
    chevronRight: 'chevron_right',
    upload: 'upload',
    calendar: 'calendar_month',
    check: 'check',
    alert: { warning: 'warning', danger: 'error', success: 'task_alt', info: 'info' },
    input: { search: 'search', show: 'visibility', hide: 'visibility_off', increase: 'add', decrease: 'remove' },
  }}
>
  <IconConsumptionCard />
</DContextProvider>\`
      }
    }
  }
}`,...(ee=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var oe,ae,se;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <DContextProvider iconRegistry={COMMONS_ICONS}>
      <IconRegistryConsumptionCard />
    </DContextProvider>,
  parameters: {
    docs: {
      source: {
        code: \`const COMMONS_ICONS = {
  NMChevron: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  NMSmile: (props) => (
    <svg viewBox="0 0 70 70" fill="currentColor" {...props}>
      <path d="M35 3C17.355 3 3 17.355 3 35s14.355 32 32 32 32-14.355 32-32S52.645 3 35 3Z" />
    </svg>
  ),
};

<DContextProvider iconRegistry={COMMONS_ICONS}>
  <DIcon icon="NMChevron" />
  <DIcon icon="NMSmile" />
  <DIcon icon="Home" />
</DContextProvider>\`
      }
    }
  }
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,te,re;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <DContextProvider<PortalDemoPayloads> portalName="portal-basic-flow" availablePortals={{
    invoicePreview: InvoicePreviewModal
  }}>
      <PortalActions />
    </DContextProvider>,
  parameters: {
    docs: {
      source: {
        code: \`type PortalDemoPayloads = {
  invoicePreview: {
    invoiceId: string;
    total: number;
  };
};

function InvoicePreviewModal({ name, payload }: PortalProps<PortalDemoPayloads['invoicePreview']>) {
  const { closePortal } = useDPortalContext<PortalDemoPayloads>();
  const { format } = useFormatCurrency();

  return (
    <DModal name={name} centered>
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-semibold">Invoice preview</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="mb-1">Invoice ID: {payload.invoiceId}</p>
        <p className="mb-0">Total due: {format(payload.total)}</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="Close" onClick={closePortal} className="ms-auto" />
      </DModal.Footer>
    </DModal>
  );
}

function PortalActions() {
  const { openPortal, stack } = useDPortalContext<PortalDemoPayloads>();

  return (
    <div className="card p-3" style={{ maxWidth: '460px' }}>
      <h6 className="mb-2">Portal flow from DContextProvider</h6>
      <p className="mb-2">Open stack size: {stack.length}</p>
      <DButton
        text="Open invoice modal"
        onClick={() => openPortal('invoicePreview', { invoiceId: 'INV-24009', total: 19875.4 })}
      />
    </div>
  );
}

<DContextProvider<PortalDemoPayloads>
  portalName="portal-basic-flow"
  availablePortals={{ invoicePreview: InvoicePreviewModal }}
>
  <PortalActions />
</DContextProvider>\`
      }
    }
  }
}`,...(re=(te=C.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,ce,le;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <DContextProvider>
      <RuntimeContextUpdateCard />
    </DContextProvider>,
  parameters: {
    docs: {
      source: {
        code: \`function RuntimeContextUpdateCard() {
  const { language, setContext } = useDContext();
  const { format } = useFormatCurrency();
  const [useChileFormat, setUseChileFormat] = useState(false);

  const toggleContext = () => {
    const nextUseChileFormat = !useChileFormat;
    setUseChileFormat(nextUseChileFormat);

    setContext(nextUseChileFormat
      ? {
        language: 'es',
        currency: {
          symbol: '$',
          precision: 0,
          separator: '.',
          decimal: ',',
        },
      }
      : {
        language: 'en',
        currency: {
          symbol: '$',
          precision: 2,
          separator: ',',
          decimal: '.',
        },
      });
  };

  return (
    <div className="card p-3" style={{ maxWidth: '540px' }}>
      <h6 className="mb-2">Runtime context updates</h6>
      <p className="mb-1">Language: {language}</p>
      <p className="mb-3">Formatted value: {format(25600.89)}</p>
      <DButton
        text={useChileFormat ? 'Switch to US format' : 'Switch to CL format'}
        onClick={toggleContext}
      />
    </div>
  );
}

<DContextProvider>
  <RuntimeContextUpdateCard />
</DContextProvider>\`
      }
    }
  }
}`,...(le=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,me,pe;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column flex-md-row gap-3">
      <DContextProvider<IsolationPayloads> portalName="portal-scope-a" availablePortals={{
      panel: IsolationModal
    }}>
        <IsolationActions scope="A" />
      </DContextProvider>

      <DContextProvider<IsolationPayloads> portalName="portal-scope-b" availablePortals={{
      panel: IsolationModal
    }}>
        <IsolationActions scope="B" />
      </DContextProvider>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`type IsolationPayloads = {
  panel: {
    scope: string;
  };
};

function IsolationModal({ name, payload }: PortalProps<IsolationPayloads['panel']>) {
  const { closePortal } = useDPortalContext<IsolationPayloads>();
  return (
    <DModal name={name} centered>
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-semibold">Portal scope {payload.scope}</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="mb-0">This modal belongs to provider {payload.scope}.</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="Close" onClick={closePortal} className="ms-auto" />
      </DModal.Footer>
    </DModal>
  );
}

function IsolationActions({ scope }: { scope: string }) {
  const { openPortal } = useDPortalContext<IsolationPayloads>();
  return (
    <div className="card p-3" style={{ minWidth: '280px' }}>
      <h6 className="mb-2">Provider {scope}</h6>
      <DButton text={\\\`Open \\\${scope} modal\\\`} onClick={() => openPortal('panel', { scope })} />
    </div>
  );
}

<div className="d-flex flex-column flex-md-row gap-3">
  <DContextProvider<IsolationPayloads>
    portalName="portal-scope-a"
    availablePortals={{ panel: IsolationModal }}
  >
    <IsolationActions scope="A" />
  </DContextProvider>

  <DContextProvider<IsolationPayloads>
    portalName="portal-scope-b"
    availablePortals={{ panel: IsolationModal }}
  >
    <IsolationActions scope="B" />
  </DContextProvider>
</div>\`
      }
    }
  }
}`,...(pe=(me=f.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Ee=["Default","LanguageSettings","CurrencySettings","IconSettings","CurrencyConsumption","BreakpointConsumption","IconConsumption","IconRegistryConsumption","PortalBasicFlow","RuntimeContextUpdate","PortalNameIsolation"];export{x as BreakpointConsumption,u as CurrencyConsumption,l as CurrencySettings,i as Default,h as IconConsumption,v as IconRegistryConsumption,d as IconSettings,c as LanguageSettings,C as PortalBasicFlow,f as PortalNameIsolation,g as RuntimeContextUpdate,Ee as __namedExportsOrder,$e as default};
