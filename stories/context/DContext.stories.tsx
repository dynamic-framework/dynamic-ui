/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import {
  DButton,
  DContextProvider,
  DIcon,
  DModal,
  type PortalProps,
  useDContext,
  useDPortalContext,
  useFormatCurrency,
  useMediaBreakpointUpMd,
} from '../../src';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

/**
 * Context Provider to share settings between components
 */
const config: Meta<typeof DContextProvider> = {
  title: 'Design System/Context/ContextProvider',
  component: DContextProvider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
};

export default config;
type Story = StoryObj<typeof DContextProvider>;

/**
 * Without arguments, it will take the default settings for:
 * + English language
 * + Lucide icons
 * + Currencies with $1,000.00 format
 * + Default portal DOM id
 */
export const Default: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

/**
 * To share a different language configuration we only need to change the key language
 *
 * > This key only takes a string with the language in ISO 639 Set 1 (ISO 639-1)
 */
export const LanguageSettings: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  args: {
    language: 'en',
  },
};

/**
 * To share a different currency format configuration we need to change the key currency
 *
 * > The configuration for currency format is given by the library [currency.js](https://currency.js.org/),
 * particularly we use the key precision, separator, decimal and not in all cases symbol.
 */
export const CurrencySettings: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  args: {
    currency: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.',
    },
  },
};

/**
 * By default and without additional configuration, the icons are linked to <code>Lucide icons</code>.
 *
 * To share a different icon configuration we need to change the key icon
 *
 * This takes the settings needed to use bootstrap icons, which would
 * be `familyClass=bi`, `familyPrefix=bi-` and `materialStyle=false`
 *
 * Similar settings can be used for any icon font.
 *
 * In the particular case of material symbols, the materialStyle property was added
 * to place the name of the icon in the children of `<i />` and not as a class.
 * This setting can be used with any icon font that uses a similar style.
 *
 * See more about this in <a href="?path=/docs/design-system-examples-icons--docs">Examples/Icons</a>
 */
export const IconSettings: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  args: CONTEXT_PROVIDER_CONFIG_MATERIAL,
};

function CurrencyConsumptionCard() {
  const { values, format } = useFormatCurrency(1250.75);

  return (
    <div className="card p-3" style={{ maxWidth: '420px' }}>
      <h6 className="mb-2">Invoice total</h6>
      <p className="mb-1">Stored amount: 1250.75</p>
      <p className="mb-1">
        Auto from hook:
        {' '}
        {values[0]}
      </p>
      <p className="mb-0">
        Manual format call:
        {' '}
        {format(99999.9)}
      </p>
    </div>
  );
}

export const CurrencyConsumption: Story = {
  render: () => (
    <DContextProvider
      currency={{
        symbol: '€',
        precision: 2,
        separator: '.',
        decimal: ',',
      }}
    >
      <CurrencyConsumptionCard />
    </DContextProvider>
  ),
  parameters: {
    docs: {
      source: {
        code: `function CurrencyConsumptionCard() {
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
</DContextProvider>`,
      },
    },
  },
};

function BreakpointConsumptionCard() {
  const isMdUp = useMediaBreakpointUpMd(true);
  const { breakpoints } = useDContext();

  return (
    <div className="card p-3" style={{ maxWidth: '520px' }}>
      <h6 className="mb-2">Breakpoint-aware content</h6>
      <p className="mb-1">
        Is md and up:
        {' '}
        <strong>{String(isMdUp)}</strong>
      </p>
      <p className="mb-0">
        Resolved breakpoints: sm=
        {breakpoints.sm}
        {' '}
        md=
        {breakpoints.md}
        {' '}
        lg=
        {breakpoints.lg}
      </p>
    </div>
  );
}

export const BreakpointConsumption: Story = {
  render: () => (
    <DContextProvider>
      <BreakpointConsumptionCard />
    </DContextProvider>
  ),
  parameters: {
    docs: {
      source: {
        code: `function BreakpointConsumptionCard() {
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
</DContextProvider>`,
      },
    },
  },
};

function IconConsumptionCard() {
  const {
    icon,
    iconMap,
  } = useDContext();

  return (
    <div className="card p-3" style={{ maxWidth: '540px' }}>
      <h6 className="mb-2">Icon config in action</h6>
      <p className="mb-2">
        Family:
        {' '}
        {icon.familyClass}
        {' '}
        / Prefix:
        {' '}
        {icon.familyPrefix}
      </p>
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

export const IconConsumption: Story = {
  render: () => (
    <DContextProvider
      icon={{
        familyClass: 'material-symbols-outlined',
        familyPrefix: '',
        materialStyle: true,
      }}
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
        alert: {
          warning: 'warning',
          danger: 'error',
          success: 'task_alt',
          info: 'info',
        },
        input: {
          search: 'search',
          show: 'visibility',
          hide: 'visibility_off',
          increase: 'add',
          decrease: 'remove',
        },
      }}
    >
      <IconConsumptionCard />
    </DContextProvider>
  ),
  parameters: {
    docs: {
      source: {
        code: `function IconConsumptionCard() {
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
</DContextProvider>`,
      },
    },
  },
};

type PortalDemoPayloads = {
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
        <p className="mb-1">
          Invoice ID:
          {' '}
          {payload.invoiceId}
        </p>
        <p className="mb-0">
          Total due:
          {' '}
          {format(payload.total)}
        </p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="Close" onClick={closePortal} className="ms-auto" />
      </DModal.Footer>
    </DModal>
  );
}

function PortalActions() {
  const {
    openPortal,
    stack,
  } = useDPortalContext<PortalDemoPayloads>();

  return (
    <div className="card p-3" style={{ maxWidth: '460px' }}>
      <h6 className="mb-2">Portal flow from DContextProvider</h6>
      <p className="mb-2">
        Open stack size:
        {' '}
        {stack.length}
      </p>
      <DButton
        text="Open invoice modal"
        onClick={() => openPortal('invoicePreview', {
          invoiceId: 'INV-24009',
          total: 19875.4,
        })}
      />
    </div>
  );
}

export const PortalBasicFlow: Story = {
  render: () => (
    <DContextProvider<PortalDemoPayloads>
      portalName="portal-basic-flow"
      availablePortals={{
        invoicePreview: InvoicePreviewModal,
      }}
    >
      <PortalActions />
    </DContextProvider>
  ),
  parameters: {
    docs: {
      source: {
        code: `type PortalDemoPayloads = {
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
</DContextProvider>`,
      },
    },
  },
};

function RuntimeContextUpdateCard() {
  const {
    language,
    setContext,
  } = useDContext();
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
      <p className="mb-1">
        Language:
        {' '}
        {language}
      </p>
      <p className="mb-3">
        Formatted value:
        {' '}
        {format(25600.89)}
      </p>
      <DButton
        text={useChileFormat ? 'Switch to US format' : 'Switch to CL format'}
        onClick={toggleContext}
      />
    </div>
  );
}

export const RuntimeContextUpdate: Story = {
  render: () => (
    <DContextProvider>
      <RuntimeContextUpdateCard />
    </DContextProvider>
  ),
  parameters: {
    docs: {
      source: {
        code: `function RuntimeContextUpdateCard() {
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
</DContextProvider>`,
      },
    },
  },
};

type IsolationPayloads = {
  panel: {
    scope: string;
  };
};

function IsolationModal({ name, payload }: PortalProps<IsolationPayloads['panel']>) {
  const { closePortal } = useDPortalContext<IsolationPayloads>();
  return (
    <DModal name={name} centered>
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-semibold">
          Portal scope
          {' '}
          {payload.scope}
        </h5>
      </DModal.Header>
      <DModal.Body>
        <p className="mb-0">
          This modal belongs to provider
          {' '}
          {payload.scope}
          .
        </p>
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
      <h6 className="mb-2">
        Provider
        {' '}
        {scope}
      </h6>
      <DButton
        text={`Open ${scope} modal`}
        onClick={() => openPortal('panel', { scope })}
      />
    </div>
  );
}

export const PortalNameIsolation: Story = {
  render: () => (
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
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `type IsolationPayloads = {
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
</div>`,
      },
    },
  },
};
