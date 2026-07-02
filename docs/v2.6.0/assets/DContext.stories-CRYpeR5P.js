import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as me}from"./iframe-uxYLpz5U.js";import{a as pe}from"./constants-CkChkWbF.js";import{u as ue}from"./useMediaBreakpointUp-OWnybX9T.js";import{D as t,u as g,a as f}from"./DContext-CxvW7UTG.js";import{u as y}from"./useFormatCurrency-BDVIb8EJ.js";import{D as P}from"./DIcon-BVWTdsDp.js";import{D as s}from"./DModal-BjDlrKNC.js";import{D as d}from"./DButton-DQ-qMqS8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D8qwz0et.js";import"./index-GUYGZJNd.js";import"./config-C3iYXcFk.js";import"./currency.es-9OAR_aOO.js";import"./index-Bq_YOuQj.js";const Ae={title:"Design System/Context/ContextProvider",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
Root provider used to share Dynamic UI global settings with descendants.

## What this provider configures

- 'language' locale string consumed by UI and hooks
- 'currency' formatting options consumed by 'useFormatCurrency' and currency components
- 'icon' and 'iconMap' defaults consumed by 'DIcon' and components with semantic icons
- 'portalName' and 'availablePortals' consumed by 'useDPortalContext' for modal/offcanvas flows
- 'breakpoints' values resolved from Bootstrap CSS variables and consumed by media hooks

## Important behavior

The provider initializes internal state from props. For runtime updates inside the app,
use 'useDContext().setContext(...)'.
        `}}}},r={parameters:{docs:{canvas:{sourceState:"shown"}}}},l={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{language:"en"}},i={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{currency:{symbol:"$",precision:2,separator:",",decimal:"."}}},c={parameters:{docs:{canvas:{sourceState:"shown"}}},args:pe};function he(){const{values:a,format:o}=y(1250.75);return e.jsxs("div",{className:"card p-3",style:{maxWidth:"420px"},children:[e.jsx("h6",{className:"mb-2",children:"Invoice total"}),e.jsx("p",{className:"mb-1",children:"Stored amount: 1250.75"}),e.jsxs("p",{className:"mb-1",children:["Auto from hook:"," ",a[0]]}),e.jsxs("p",{className:"mb-0",children:["Manual format call:"," ",o(99999.9)]})]})}const p={render:()=>e.jsx(t,{currency:{symbol:"€",precision:2,separator:".",decimal:","},children:e.jsx(he,{})}),parameters:{docs:{source:{code:`function CurrencyConsumptionCard() {
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
</DContextProvider>`}}}};function xe(){const a=ue(!0),{breakpoints:o}=g();return e.jsxs("div",{className:"card p-3",style:{maxWidth:"520px"},children:[e.jsx("h6",{className:"mb-2",children:"Breakpoint-aware content"}),e.jsxs("p",{className:"mb-1",children:["Is md and up:"," ",e.jsx("strong",{children:String(a)})]}),e.jsxs("p",{className:"mb-0",children:["Resolved breakpoints: sm=",o.sm," ","md=",o.md," ","lg=",o.lg]})]})}const u={render:()=>e.jsx(t,{children:e.jsx(xe,{})}),parameters:{docs:{source:{code:`function BreakpointConsumptionCard() {
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
</DContextProvider>`}}}};function ve(){const{icon:a,iconMap:o}=g();return e.jsxs("div",{className:"card p-3",style:{maxWidth:"540px"},children:[e.jsx("h6",{className:"mb-2",children:"Icon config in action"}),e.jsxs("p",{className:"mb-2",children:["Family:"," ",a.familyClass," ","/ Prefix:"," ",a.familyPrefix]}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[e.jsx(P,{icon:o.calendar}),e.jsx("small",{children:"calendar"})]}),e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[e.jsx(P,{icon:o.upload}),e.jsx("small",{children:"upload"})]}),e.jsxs("span",{className:"d-flex align-items-center gap-1",children:[e.jsx(P,{icon:o.input.search}),e.jsx("small",{children:"search"})]})]})]})}const h={render:()=>e.jsx(t,{icon:{familyClass:"material-symbols-outlined",familyPrefix:"",materialStyle:!0},iconMap:{x:"close",xLg:"close",chevronUp:"expand_less",chevronDown:"expand_more",chevronLeft:"chevron_left",chevronRight:"chevron_right",upload:"upload",calendar:"calendar_month",check:"check",alert:{warning:"warning",danger:"error",success:"task_alt",info:"info"},input:{search:"search",show:"visibility",hide:"visibility_off",increase:"add",decrease:"remove"}},children:e.jsx(ve,{})}),parameters:{docs:{source:{code:`function IconConsumptionCard() {
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
</DContextProvider>`}}}};function Ce({name:a,payload:o}){const{closePortal:n}=f(),{format:m}=y();return e.jsxs(s,{name:a,centered:!0,children:[e.jsx(s.Header,{onClose:n,showCloseButton:!0,children:e.jsx("h5",{className:"fw-semibold",children:"Invoice preview"})}),e.jsxs(s.Body,{children:[e.jsxs("p",{className:"mb-1",children:["Invoice ID:"," ",o.invoiceId]}),e.jsxs("p",{className:"mb-0",children:["Total due:"," ",m(o.total)]})]}),e.jsx(s.Footer,{children:e.jsx(d,{text:"Close",onClick:n,className:"ms-auto"})})]})}function fe(){const{openPortal:a,stack:o}=f();return e.jsxs("div",{className:"card p-3",style:{maxWidth:"460px"},children:[e.jsx("h6",{className:"mb-2",children:"Portal flow from DContextProvider"}),e.jsxs("p",{className:"mb-2",children:["Open stack size:"," ",o.length]}),e.jsx(d,{text:"Open invoice modal",onClick:()=>a("invoicePreview",{invoiceId:"INV-24009",total:19875.4})})]})}const x={render:()=>e.jsx(t,{portalName:"portal-basic-flow",availablePortals:{invoicePreview:Ce},children:e.jsx(fe,{})}),parameters:{docs:{source:{code:`type PortalDemoPayloads = {
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
</DContextProvider>`}}}};function Pe(){const{language:a,setContext:o}=g(),{format:n}=y(),[m,ce]=me.useState(!1),de=()=>{const D=!m;ce(D),o(D?{language:"es",currency:{symbol:"$",precision:0,separator:".",decimal:","}}:{language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."}})};return e.jsxs("div",{className:"card p-3",style:{maxWidth:"540px"},children:[e.jsx("h6",{className:"mb-2",children:"Runtime context updates"}),e.jsxs("p",{className:"mb-1",children:["Language:"," ",a]}),e.jsxs("p",{className:"mb-3",children:["Formatted value:"," ",n(25600.89)]}),e.jsx(d,{text:m?"Switch to US format":"Switch to CL format",onClick:de})]})}const v={render:()=>e.jsx(t,{children:e.jsx(Pe,{})}),parameters:{docs:{source:{code:`function RuntimeContextUpdateCard() {
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
</DContextProvider>`}}}};function b({name:a,payload:o}){const{closePortal:n}=f();return e.jsxs(s,{name:a,centered:!0,children:[e.jsx(s.Header,{onClose:n,showCloseButton:!0,children:e.jsxs("h5",{className:"fw-semibold",children:["Portal scope"," ",o.scope]})}),e.jsx(s.Body,{children:e.jsxs("p",{className:"mb-0",children:["This modal belongs to provider"," ",o.scope,"."]})}),e.jsx(s.Footer,{children:e.jsx(d,{text:"Close",onClick:n,className:"ms-auto"})})]})}function N({scope:a}){const{openPortal:o}=f();return e.jsxs("div",{className:"card p-3",style:{minWidth:"280px"},children:[e.jsxs("h6",{className:"mb-2",children:["Provider"," ",a]}),e.jsx(d,{text:`Open ${a} modal`,onClick:()=>o("panel",{scope:a})})]})}const C={render:()=>e.jsxs("div",{className:"d-flex flex-column flex-md-row gap-3",children:[e.jsx(t,{portalName:"portal-scope-a",availablePortals:{panel:b},children:e.jsx(N,{scope:"A"})}),e.jsx(t,{portalName:"portal-scope-b",availablePortals:{panel:b},children:e.jsx(N,{scope:"B"})})]}),parameters:{docs:{source:{code:`type IsolationPayloads = {
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
</div>`}}}};var I,w,M,k,j;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(M=(w=r.parameters)==null?void 0:w.docs)==null?void 0:M.source},description:{story:`Without arguments, it will take the default settings for:
+ English language
+ Lucide icons
+ Currencies with $1,000.00 format
+ Default portal DOM id`,...(j=(k=r.parameters)==null?void 0:k.docs)==null?void 0:j.description}}};var S,B,F,U,_;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source},description:{story:`To share a different language configuration we only need to change the key language

> This key only takes a string with the language in ISO 639 Set 1 (ISO 639-1)`,...(_=(U=l.parameters)==null?void 0:U.docs)==null?void 0:_.description}}};var A,R,L,T,W;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(R=i.parameters)==null?void 0:R.docs)==null?void 0:L.source},description:{story:`To share a different currency format configuration we need to change the key currency

> The configuration for currency format is given by the library [currency.js](https://currency.js.org/),
particularly we use the key precision, separator, decimal and not in all cases symbol.`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.description}}};var O,$,E,H,V;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  args: CONTEXT_PROVIDER_CONFIG_MATERIAL
}`,...(E=($=c.parameters)==null?void 0:$.docs)==null?void 0:E.source},description:{story:`By default and without additional configuration, the icons are linked to <code>Lucide icons</code>.

To share a different icon configuration we need to change the key icon

This takes the settings needed to use bootstrap icons, which would
be \`familyClass=bi\`, \`familyPrefix=bi-\` and \`materialStyle=false\`

Similar settings can be used for any icon font.

In the particular case of material symbols, the materialStyle property was added
to place the name of the icon in the children of \`<i />\` and not as a class.
This setting can be used with any icon font that uses a similar style.

See more about this in <a href="?path=/docs/design-system-examples-icons--docs">Examples/Icons</a>`,...(V=(H=c.parameters)==null?void 0:H.docs)==null?void 0:V.description}}};var z,G,X;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(X=(G=p.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var q,J,K;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,oe,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,te,ne;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,le,ie;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const Re=["Default","LanguageSettings","CurrencySettings","IconSettings","CurrencyConsumption","BreakpointConsumption","IconConsumption","PortalBasicFlow","RuntimeContextUpdate","PortalNameIsolation"];export{u as BreakpointConsumption,p as CurrencyConsumption,i as CurrencySettings,r as Default,h as IconConsumption,c as IconSettings,l as LanguageSettings,x as PortalBasicFlow,C as PortalNameIsolation,v as RuntimeContextUpdate,Re as __namedExportsOrder,Ae as default};
