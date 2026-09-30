import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { ReactNode } from 'react';

import {
  DBox,
  DButton,
  DContextProvider,
  DInputSwitch,
  DListGroup,
  DOffcanvas,
  type PortalProps,
  useDPortalContext,
} from '../../../src';

import DocsTemplate from '../docs/Template.mdx';

type AccountActionsPayloads = {
  accountActions: {
    accountName: string;
    balance: string;
  };
};

type TransferReviewPayloads = {
  transferReview: {
    recipient: string;
    amount: number;
  };
};

type CardControlsPayloads = {
  cardControls: {
    cardLabel: string;
    cardLast4: string;
  };
};

const bottomSheetStyle = {
  height: '72vh',
  maxHeight: '72vh',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
} as const;

const meta: Meta<typeof DBox> = {
  title: 'Patterns/Mobile/Bottom Sheets',
  component: DBox,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: `Mobile-first experiences using DOffcanvas as a bottom sheet. These patterns are designed for banking, insurance, and lending interfaces where contextual actions should appear from bottom to top.

Open each example in its own Storybook canvas:

- [Account actions bottom sheet](?path=/story/mobile-patterns-mobile-bottom-sheets--account-actions-bottom-sheet)
- [Transfer review bottom sheet](?path=/story/mobile-patterns-mobile-bottom-sheets--transfer-review-bottom-sheet)
- [Card controls bottom sheet](?path=/story/mobile-patterns-mobile-bottom-sheets--card-controls-bottom-sheet)
`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DBox>;

function MobileViewport(
  {
    children,
  }: {
    children: ReactNode;
  },
) {
  return (
    <div
      style={{
        width: '390px',
        maxWidth: '100%',
        height: '760px',
        borderRadius: '1.25rem',
        border: '1px solid var(--df-color-neutral-200)',
        overflow: 'hidden',
        background: 'var(--df-color-neutral-25)',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}

function BottomSheetHandle() {
  return (
    <div className="df-flex df-justify-center df-py-2">
      <span
        style={{
          width: '44px',
          height: '4px',
          borderRadius: '999px',
          background: 'var(--df-color-neutral-300)',
        }}
      />
    </div>
  );
}

function AccountActionsSheet({ name, payload }: PortalProps<AccountActionsPayloads['accountActions']>) {
  const { closePortal } = useDPortalContext<AccountActionsPayloads>();

  return (
    <DOffcanvas
      name={name}
      openFrom="bottom"
      style={bottomSheetStyle}
    >
      <BottomSheetHandle />
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <div>
          <h5 className="df-mb-0 df-fw-semibold">{payload.accountName}</h5>
          <small className="df-text-muted">
            Available balance:
            {' '}
            {payload.balance}
          </small>
        </div>
      </DOffcanvas.Header>
      <DOffcanvas.Body className="df-flex df-flex-col df-gap-2">
        <DButton text="Transfer money" className="df-w-full" variant="soft" />
        <DButton text="Pay credit card" className="df-w-full" variant="soft" />
        <DButton text="Deposit check" className="df-w-full" variant="soft" />
        <DButton text="View statement" className="df-w-full" variant="soft" />
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="fill">
        <DButton text="Close" variant="outline" color="secondary" onClick={closePortal} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function AccountActionsMobileContent() {
  const { openPortal } = useDPortalContext<AccountActionsPayloads>();

  return (
    <MobileViewport>
      <div className="df-p-4 df-flex df-flex-col df-h-full">
        <div className="df-mb-4">
          <small className="df-text-muted">Main account</small>
          <h3 className="df-mb-0">$12,847.90</h3>
        </div>

        <div className="df-card df-p-3 df-mb-3">
          <small className="df-text-muted">Card ending in 4532</small>
          <strong>Credit used: $1,235.00</strong>
        </div>

        <div className="df-mt-auto">
          <DButton
            className="df-w-full"
            text="Open account actions"
            onClick={() => openPortal('accountActions', {
              accountName: 'Checking account ••4532',
              balance: '$12,847.90',
            })}
          />
        </div>
      </div>
    </MobileViewport>
  );
}

const ACCOUNT_ACTIONS_SOURCE = String.raw`import type { ReactNode } from 'react';
import {
  DBox,
  DButton,
  DContextProvider,
  DOffcanvas,
  type PortalProps,
  useDPortalContext,
} from '../../src';

type AccountActionsPayloads = {
  accountActions: {
    accountName: string;
    balance: string;
  };
};

const bottomSheetStyle = {
  height: '72vh',
  maxHeight: '72vh',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
} as const;

function MobileViewport({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: '390px',
        maxWidth: '100%',
        height: '760px',
        borderRadius: '1.25rem',
        border: '1px solid var(--df-color-neutral-200)',
        overflow: 'hidden',
        background: 'var(--df-color-neutral-25)',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}

function BottomSheetHandle() {
  return (
    <div className="df-flex df-justify-center df-py-2">
      <span
        style={{
          width: '44px',
          height: '4px',
          borderRadius: '999px',
          background: 'var(--df-color-neutral-300)',
        }}
      />
    </div>
  );
}

function AccountActionsSheet({ name, payload }: PortalProps<AccountActionsPayloads['accountActions']>) {
  const { closePortal } = useDPortalContext<AccountActionsPayloads>();

  return (
    <DOffcanvas name={name} openFrom="bottom" style={bottomSheetStyle}>
      <BottomSheetHandle />
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <div>
          <h5 className="df-mb-0 df-fw-semibold">{payload.accountName}</h5>
          <small className="df-text-muted">Available balance: {payload.balance}</small>
        </div>
      </DOffcanvas.Header>
      <DOffcanvas.Body className="df-flex df-flex-col df-gap-2">
        <DButton text="Transfer money" className="df-w-full" variant="soft" />
        <DButton text="Pay credit card" className="df-w-full" variant="soft" />
        <DButton text="Deposit check" className="df-w-full" variant="soft" />
        <DButton text="View statement" className="df-w-full" variant="soft" />
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="fill">
        <DButton text="Close" variant="outline" color="secondary" onClick={closePortal} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function AccountActionsMobileContent() {
  const { openPortal } = useDPortalContext<AccountActionsPayloads>();

  return (
    <MobileViewport>
      <div className="df-p-4 df-flex df-flex-col df-h-full">
        <div className="df-mb-4">
          <small className="df-text-muted">Main account</small>
          <h3 className="df-mb-0">$12,847.90</h3>
        </div>
        <div className="df-card df-p-3 df-mb-3">
          <small className="df-text-muted">Card ending in 4532</small>
          <strong>Credit used: $1,235.00</strong>
        </div>
        <div className="df-mt-auto">
          <DButton
            className="df-w-full"
            text="Open account actions"
            onClick={() => openPortal('accountActions', {
              accountName: 'Checking account ••4532',
              balance: '$12,847.90',
            })}
          />
        </div>
      </div>
    </MobileViewport>
  );
}

export const AccountActionsBottomSheet = {
  render: () => (
    <DContextProvider<AccountActionsPayloads>
      portalName="mobileBottomSheetAccountActions"
      availablePortals={{ accountActions: AccountActionsSheet }}
    >
      <AccountActionsMobileContent />
    </DContextProvider>
  ),
};`;

export const AccountActionsBottomSheet: Story = {
  parameters: {
    docs: {
      source: {
        code: ACCOUNT_ACTIONS_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <DContextProvider<AccountActionsPayloads>
      portalName="mobileBottomSheetAccountActions"
      availablePortals={{
        accountActions: AccountActionsSheet,
      }}
    >
      <AccountActionsMobileContent />
    </DContextProvider>
  ),
};

function TransferReviewSheet({ name, payload }: PortalProps<TransferReviewPayloads['transferReview']>) {
  const { closePortal } = useDPortalContext<TransferReviewPayloads>();
  const fee = 1.5;
  const total = payload.amount + fee;

  return (
    <DOffcanvas
      name={name}
      openFrom="bottom"
      style={bottomSheetStyle}
    >
      <BottomSheetHandle />
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="df-mb-0 df-fw-semibold">Review transfer</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <DListGroup>
          <DListGroup.Item className="df-justify-between">
            <span className="df-text-muted">Recipient</span>
            <strong>{payload.recipient}</strong>
          </DListGroup.Item>
          <DListGroup.Item className="df-justify-between">
            <span className="df-text-muted">Amount</span>
            <strong>
              $
              {payload.amount.toFixed(2)}
            </strong>
          </DListGroup.Item>
          <DListGroup.Item className="df-justify-between">
            <span className="df-text-muted">Amount</span>
            <strong>
              $
              {payload.amount.toFixed(2)}
            </strong>
          </DListGroup.Item>
          <DListGroup.Item className="df-justify-between">
            <span className="df-text-muted">Fee</span>
            <strong>
              $
              {fee.toFixed(2)}
            </strong>
          </DListGroup.Item>
          <DListGroup.Item>
            <div className="df-flex df-justify-between">
              <span className="df-text-muted">Total debit</span>
              <strong>
                $
                {total.toFixed(2)}
              </strong>
            </div>
          </DListGroup.Item>
        </DListGroup>
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="fill">
        <DButton text="Edit" color="secondary" variant="outline" onClick={closePortal} />
        <DButton text="Confirm transfer" onClick={closePortal} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function TransferReviewMobileContent() {
  const { openPortal } = useDPortalContext<TransferReviewPayloads>();

  return (
    <MobileViewport>
      <div className="df-p-4 df-flex df-flex-col df-h-full">
        <h5 className="df-mb-1">New transfer</h5>
        <small className="df-text-muted df-mb-4">From checking account</small>

        <div className="df-card df-p-3 df-mb-3">
          <small className="df-text-muted">To</small>
          <strong>Sarah Mitchell</strong>
        </div>

        <div className="df-card df-p-3 df-mb-3">
          <small className="df-text-muted">Amount</small>
          <strong>$245.00</strong>
        </div>

        <div className="df-mt-auto df-flex df-flex-col df-gap-2">
          <DButton
            className="df-w-full"
            text="Continue"
            onClick={() => openPortal('transferReview', {
              recipient: 'Sarah Mitchell',
              amount: 245,
            })}
          />
        </div>
      </div>
    </MobileViewport>
  );
}

const TRANSFER_REVIEW_SOURCE = String.raw`import {
  DButton,
  DContextProvider,
  DListGroup,
  DOffcanvas,
  type PortalProps,
  useDPortalContext,
} from '../../src';

type TransferReviewPayloads = {
  transferReview: {
    recipient: string;
    amount: number;
  };
};

const bottomSheetStyle = {
  height: '72vh',
  maxHeight: '72vh',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
} as const;

function BottomSheetHandle() {
  return (
    <div className="df-flex df-justify-center df-py-2">
      <span style={{ width: '44px', height: '4px', borderRadius: '999px', background: 'var(--df-color-neutral-300)' }} />
    </div>
  );
}

function TransferReviewSheet({ name, payload }: PortalProps<TransferReviewPayloads['transferReview']>) {
  const { closePortal } = useDPortalContext<TransferReviewPayloads>();
  const fee = 1.5;
  const total = payload.amount + fee;

  return (
    <DOffcanvas name={name} openFrom="bottom" style={bottomSheetStyle}>
      <BottomSheetHandle />
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="df-mb-0 df-fw-semibold">Review transfer</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <DListGroup>
          <DListGroup.Item className="df-justify-between">
            <span className="df-text-muted">Recipient</span>
            <strong>{payload.recipient}</strong>
          </DListGroup.Item>
          <DListGroup.Item className="df-justify-between">
            <span className="df-text-muted">Amount</span>
            <strong>\${payload.amount.toFixed(2)}</strong>
          </DListGroup.Item>
          <DListGroup.Item className="df-justify-between">
            <span className="df-text-muted">Fee</span>
            <strong>\${fee.toFixed(2)}</strong>
          </DListGroup.Item>
          <DListGroup.Item>
            <div className="df-flex df-justify-between">
              <span className="df-text-muted">Total debit</span>
              <strong>\${total.toFixed(2)}</strong>
            </div>
          </DListGroup.Item>
        </DListGroup>
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="fill">
        <DButton text="Edit" color="secondary" variant="outline" onClick={closePortal} />
        <DButton text="Confirm transfer" onClick={closePortal} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function TransferReviewMobileContent() {
  const { openPortal } = useDPortalContext<TransferReviewPayloads>();

  return (
      <div className="df-p-4 df-flex df-flex-col df-h-full">
        <h5 className="df-mb-1">New transfer</h5>
        <small className="df-text-muted df-mb-4">From checking account</small>
        <div className="df-card df-p-3 df-mb-3">
          <small className="df-text-muted">To</small>
          <strong>Sarah Mitchell</strong>
        </div>
        <div className="df-card df-p-3 df-mb-3">
          <small className="df-text-muted">Amount</small>
          <strong>$245.00</strong>
        </div>
        <div className="df-mt-auto df-flex df-flex-col df-gap-2">
          <DButton
            className="df-w-full"
            text="Continue"
            onClick={() => openPortal('transferReview', {
              recipient: 'Sarah Mitchell',
              amount: 245,
            })}
          />
        </div>
      </div>
  );
}

export const TransferReviewBottomSheet = {
  render: () => (
    <DContextProvider<TransferReviewPayloads>
      portalName="mobileBottomSheetTransferReview"
      availablePortals={{ transferReview: TransferReviewSheet }}
    >
      <TransferReviewMobileContent />
    </DContextProvider>
  ),
};`;

export const TransferReviewBottomSheet: Story = {
  parameters: {
    docs: {
      source: {
        code: TRANSFER_REVIEW_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <DContextProvider<TransferReviewPayloads>
      portalName="mobileBottomSheetTransferReview"
      availablePortals={{
        transferReview: TransferReviewSheet,
      }}
    >
      <TransferReviewMobileContent />
    </DContextProvider>
  ),
};

function CardControlsSheet({ name, payload }: PortalProps<CardControlsPayloads['cardControls']>) {
  const { closePortal } = useDPortalContext<CardControlsPayloads>();
  const [isFrozen, setIsFrozen] = useState(false);
  const [onlinePayments, setOnlinePayments] = useState(true);

  return (
    <DOffcanvas
      name={name}
      openFrom="bottom"
      style={bottomSheetStyle}
    >
      <BottomSheetHandle />
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <div>
          <h5 className="df-mb-0 df-fw-semibold">{payload.cardLabel}</h5>
          <small className="df-text-muted">
            Card ending in
            {' '}
            {payload.cardLast4}
          </small>
        </div>
      </DOffcanvas.Header>
      <DOffcanvas.Body className="df-flex df-flex-col df-gap-3">
        <DInputSwitch
          id="freeze-card-switch"
          label="Freeze card"
          checked={isFrozen}
          onChange={setIsFrozen}
        />
        <DInputSwitch
          id="online-payments-switch"
          label="Online payments"
          checked={onlinePayments}
          onChange={setOnlinePayments}
        />
        <DButton text="Replace card" variant="outline" color="danger" className="df-w-full df-mt-2" />
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="fill">
        <DButton text="Done" onClick={closePortal} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function CardControlsMobileContent() {
  const { openPortal } = useDPortalContext<CardControlsPayloads>();

  return (
    <MobileViewport>
      <div className="df-p-4 df-flex df-flex-col df-h-full">
        <h5 className="df-mb-3">Cards</h5>

        <div className="df-card df-p-3 df-mb-3 df-bg-primary df-text-on-emphasis">
          <small className="df-opacity-80">Platinum card</small>
          <h6 className="df-mb-0">•••• •••• •••• 4532</h6>
        </div>

        <div className="df-mt-auto">
          <DButton
            className="df-w-full"
            text="Manage card"
            onClick={() => openPortal('cardControls', {
              cardLabel: 'Platinum card',
              cardLast4: '4532',
            })}
          />
        </div>
      </div>
    </MobileViewport>
  );
}

const CARD_CONTROLS_SOURCE = String.raw`import { useState } from 'react';
import {
  DButton,
  DContextProvider,
  DInputSwitch,
  DOffcanvas,
  type PortalProps,
  useDPortalContext,
} from '../../src';

type CardControlsPayloads = {
  cardControls: {
    cardLabel: string;
    cardLast4: string;
  };
};

const bottomSheetStyle = {
  height: '72vh',
  maxHeight: '72vh',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
} as const;

function BottomSheetHandle() {
  return (
    <div className="df-flex df-justify-center df-py-2">
      <span style={{ width: '44px', height: '4px', borderRadius: '999px', background: 'var(--df-color-neutral-300)' }} />
    </div>
  );
}

function CardControlsSheet({ name, payload }: PortalProps<CardControlsPayloads['cardControls']>) {
  const { closePortal } = useDPortalContext<CardControlsPayloads>();
  const [isFrozen, setIsFrozen] = useState(false);
  const [onlinePayments, setOnlinePayments] = useState(true);

  return (
    <DOffcanvas name={name} openFrom="bottom" style={bottomSheetStyle}>
      <BottomSheetHandle />
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <div>
          <h5 className="df-mb-0 df-fw-semibold">{payload.cardLabel}</h5>
          <small className="df-text-muted">Card ending in {payload.cardLast4}</small>
        </div>
      </DOffcanvas.Header>
      <DOffcanvas.Body className="df-flex df-flex-col df-gap-3">
        <DInputSwitch id="freeze-card-switch" label="Freeze card" checked={isFrozen} onChange={setIsFrozen} />
        <DInputSwitch id="online-payments-switch" label="Online payments" checked={onlinePayments} onChange={setOnlinePayments} />
        <DButton text="Replace card" variant="outline" color="danger" className="df-w-full df-mt-2" />
      </DOffcanvas.Body>
      <DOffcanvas.Footer actionPlacement="fill">
        <DButton text="Done" onClick={closePortal} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function CardControlsMobileContent() {
  const { openPortal } = useDPortalContext<CardControlsPayloads>();

  return (
      <div className="df-p-4 df-flex df-flex-col df-h-full">
        <h5 className="df-mb-3">Cards</h5>
        <div className="df-card df-p-3 df-mb-3 df-bg-primary df-text-on-emphasis">
          <small className="df-opacity-80">Platinum card</small>
          <h6 className="df-mb-0">•••• •••• •••• 4532</h6>
        </div>
        <div className="df-mt-auto">
          <DButton
            className="df-w-full"
            text="Manage card"
            onClick={() => openPortal('cardControls', {
              cardLabel: 'Platinum card',
              cardLast4: '4532',
            })}
          />
        </div>
      </div>
  );
}

export const CardControlsBottomSheet = {
  render: () => (
    <DContextProvider<CardControlsPayloads>
      portalName="mobileBottomSheetCardControls"
      availablePortals={{ cardControls: CardControlsSheet }}
    >
      <CardControlsMobileContent />
    </DContextProvider>
  ),
};`;

export const CardControlsBottomSheet: Story = {
  parameters: {
    docs: {
      source: {
        code: CARD_CONTROLS_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <DContextProvider<CardControlsPayloads>
      portalName="mobileBottomSheetCardControls"
      availablePortals={{
        cardControls: CardControlsSheet,
      }}
    >
      <CardControlsMobileContent />
    </DContextProvider>
  ),
};
